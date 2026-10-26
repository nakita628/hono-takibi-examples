<h1 id="payments-app-api">Payments App API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Board and manage the Adyen Payments App on your mobile devices.
## Authentication
Each request to the Payments App API must be signed with an API key. [Generate your API key](https://docs.adyen.com/development-resources/api-credentials#generate-api-key) in the Customer Area and then set this key to the `X-API-Key` header value.

## Versioning

Payments App API handles versioning as part of the endpoint URL. For example, to send a request to this version of the `/merchants/{merchantId}/generatePaymentsAppBoardingToken` endpoint, use:

```text
https://management-test.adyen.com/v1/merchants/{merchantId}/generatePaymentsAppBoardingToken
```

## Going live

To access the live endpoints, you need an API key from your live Customer Area. Use this API key to make requests to:

```text
https://management-live.adyen.com/v{version}
```

Base URLs:

* <a href="https://management-live.adyen.com/v1">https://management-live.adyen.com/v1</a> - Live Environment

* <a href="https://management-test.adyen.com/v1">https://management-test.adyen.com/v1</a> - Test Environment

<a href="https://www.adyen.com/legal/terms-and-conditions">Terms of service</a>
Web: <a href="https://github.com/Adyen/adyen-openapi">Adyen Developer Experience team</a> 

# Authentication

* API Key (ApiKeyAuth)
    - Parameter Name: **X-API-Key**, in: header.

- HTTP Authentication, scheme: basic

<h1 id="payments-app-api-payments-app">Payments App</h1>

## Create a boarding token - merchant level

<a id="opIdpost-merchants-merchantId-generatePaymentsAppBoardingToken"></a>

> Code samples

```bash
curl https://management-live.adyen.com/v1/merchants/string/generatePaymentsAppBoardingToken \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "boardingRequestToken": "string",
    "subMerchantData": {
      "city": "string",
      "country": "string",
      "displayName": "string",
      "email": "user@example.com",
      "id": "string",
      "mcc": "string",
      "name": "string",
      "phoneNumber": "string",
      "postalCode": "string",
      "state": "string",
      "street": "string",
      "taxId": "string"
    }
  }'
```

`POST /merchants/{merchantId}/generatePaymentsAppBoardingToken`

Creates a boarding token used to authenticate the installation of a Payments App instance on a device. The boarding token is created for the `boardingRequestToken` of the Payments App for the merchant account identified in the path. 

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Adyen Payments App role


> Body parameter

```json
{
  "boardingRequestToken": "string",
  "subMerchantData": {
    "city": "string",
    "country": "string",
    "displayName": "string",
    "email": "user@example.com",
    "id": "string",
    "mcc": "string",
    "name": "string",
    "phoneNumber": "string",
    "postalCode": "string",
    "state": "string",
    "street": "string",
    "taxId": "string"
  }
}
```

<h3 id="create-a-boarding-token---merchant-level-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|merchantId|path|string|true|The unique identifier of the merchant account.|
|body|body|[BoardingTokenRequest](#schemaboardingtokenrequest)|true|none|
|» boardingRequestToken|body|string|true|The boardingToken request token.|
|» subMerchantData|body|[SubMerchantData](#schemasubmerchantdata)|false|Data of the sub-merchant.|

> Example responses

> 200 Response

```json
{
  "boardingToken": "string",
  "installationId": "string"
}
```

> 400 Response

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

> 401 Response

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

> 403 Response

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

> 422 Response

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

> 500 Response

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

<h3 id="create-a-boarding-token---merchant-level-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[BoardingTokenResponse](#schemaboardingtokenresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|401|Unauthorized|Unauthorized - authentication required.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a list of Payments Apps - merchant level

<a id="opIdget-merchants-merchantId-paymentsApps"></a>

> Code samples

```bash
curl https://management-live.adyen.com/v1/merchants/string/paymentsApps \
  -H 'Accept: application/json'
```

`GET /merchants/{merchantId}/paymentsApps`

Returns the list of Payments App instances for the merchant account identified in the path.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Adyen Payments App role


<h3 id="get-a-list-of-payments-apps---merchant-level-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|merchantId|path|string|true|The unique identifier of the merchant account.|
|statuses|query|string|false|The status of the Payments App. Comma-separated list of one or more values. If no value is provided, the list returns all statuses. <br><br>Possible values:<br><br>* **BOARDING**<br><br> * **BOARDED**<br><br> * **REVOKED**|
|limit|query|integer(int32)|false|The number of items to return.|
|offset|query|integer(int64)|false|The number of items to skip.|

> Example responses

> 200 Response

```json
{
  "paymentsApps": [
    {
      "installationId": "string",
      "merchantAccountCode": "string",
      "merchantStoreCode": "string",
      "status": "string"
    }
  ]
}
```

> 400 Response

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

> 401 Response

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

> 403 Response

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

> 422 Response

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

> 500 Response

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

<h3 id="get-a-list-of-payments-apps---merchant-level-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[PaymentsAppResponse](#schemapaymentsappresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|401|Unauthorized|Unauthorized - authentication required.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|

<aside class="success">
This operation does not require authentication
</aside>

## Revoke Payments App instance authentication

<a id="opIdpost-merchants-merchantId-paymentsApps-installationId-revoke"></a>

> Code samples

```bash
curl https://management-live.adyen.com/v1/merchants/string/paymentsApps/string/revoke \
  -X POST \
  -H 'Accept: application/json'
```

`POST /merchants/{merchantId}/paymentsApps/{installationId}/revoke`

Revokes the authentication of the Payments App instance for the `installationId` and merchant account identified in the path. This call revokes the authentication of the Payments App instance with the `installationId` identified in the path for both merchant accounts and stores.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Adyen Payments App role


<h3 id="revoke-payments-app-instance-authentication-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|merchantId|path|string|true|The unique identifier of the merchant account.|
|installationId|path|string|true|The unique identifier of the Payments App instance on a device.|

> Example responses

> 400 Response

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

> 401 Response

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

> 500 Response

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

<h3 id="revoke-payments-app-instance-authentication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|None|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|401|Unauthorized|Unauthorized - authentication required.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|

<aside class="success">
This operation does not require authentication
</aside>

## Create a boarding token - store level

<a id="opIdpost-merchants-merchantId-stores-storeId-generatePaymentsAppBoardingToken"></a>

> Code samples

```bash
curl https://management-live.adyen.com/v1/merchants/string/stores/string/generatePaymentsAppBoardingToken \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "boardingRequestToken": "string",
    "subMerchantData": {
      "city": "string",
      "country": "string",
      "displayName": "string",
      "email": "user@example.com",
      "id": "string",
      "mcc": "string",
      "name": "string",
      "phoneNumber": "string",
      "postalCode": "string",
      "state": "string",
      "street": "string",
      "taxId": "string"
    }
  }'
```

`POST /merchants/{merchantId}/stores/{storeId}/generatePaymentsAppBoardingToken`

Creates a boarding token used to authenticate the installation of a Payments App instance on a device. The boarding token is created for the `boardingRequestToken` of the Payments App for the store identified in the path.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Adyen Payments App role


> Body parameter

```json
{
  "boardingRequestToken": "string",
  "subMerchantData": {
    "city": "string",
    "country": "string",
    "displayName": "string",
    "email": "user@example.com",
    "id": "string",
    "mcc": "string",
    "name": "string",
    "phoneNumber": "string",
    "postalCode": "string",
    "state": "string",
    "street": "string",
    "taxId": "string"
  }
}
```

<h3 id="create-a-boarding-token---store-level-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|merchantId|path|string|true|The unique identifier of the merchant account.|
|storeId|path|string|true|The unique identifier of the store.|
|body|body|[BoardingTokenRequest](#schemaboardingtokenrequest)|true|none|
|» boardingRequestToken|body|string|true|The boardingToken request token.|
|» subMerchantData|body|[SubMerchantData](#schemasubmerchantdata)|false|Data of the sub-merchant.|

> Example responses

> 200 Response

```json
{
  "boardingToken": "string",
  "installationId": "string"
}
```

> 400 Response

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

> 401 Response

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

> 403 Response

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

> 422 Response

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

> 500 Response

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

<h3 id="create-a-boarding-token---store-level-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[BoardingTokenResponse](#schemaboardingtokenresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|401|Unauthorized|Unauthorized - authentication required.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a list of Payments Apps - store level

<a id="opIdget-merchants-merchantId-stores-storeId-paymentsApps"></a>

> Code samples

```bash
curl https://management-live.adyen.com/v1/merchants/string/stores/string/paymentsApps \
  -H 'Accept: application/json'
```

`GET /merchants/{merchantId}/stores/{storeId}/paymentsApps`

Returns the list of Payments App instances for the store identified in the path.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Adyen Payments App role


<h3 id="get-a-list-of-payments-apps---store-level-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|merchantId|path|string|true|The unique identifier of the merchant account.|
|storeId|path|string|true|The unique identifier of the store.|
|statuses|query|string|false|The status of the Payments App. Comma-separated list of one or more values. If no value is provided, the list returns all statuses. <br><br>Possible values:<br><br>* **BOARDING**<br><br> * **BOARDED**<br><br> * **REVOKED**|
|limit|query|integer(int32)|false|The number of items to return.|
|offset|query|integer(int64)|false|The number of items to skip.|

> Example responses

> 200 Response

```json
{
  "paymentsApps": [
    {
      "installationId": "string",
      "merchantAccountCode": "string",
      "merchantStoreCode": "string",
      "status": "string"
    }
  ]
}
```

> 400 Response

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

> 401 Response

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

> 403 Response

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

> 422 Response

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

> 500 Response

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

<h3 id="get-a-list-of-payments-apps---store-level-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[PaymentsAppResponse](#schemapaymentsappresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|401|Unauthorized|Unauthorized - authentication required.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[DefaultErrorResponseEntity](#schemadefaulterrorresponseentity)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_BoardingTokenRequest">BoardingTokenRequest</h2>
<!-- backwards compatibility -->
<a id="schemaboardingtokenrequest"></a>
<a id="schema_BoardingTokenRequest"></a>
<a id="tocSboardingtokenrequest"></a>
<a id="tocsboardingtokenrequest"></a>

```json
{
  "boardingRequestToken": "string",
  "subMerchantData": {
    "city": "string",
    "country": "string",
    "displayName": "string",
    "email": "user@example.com",
    "id": "string",
    "mcc": "string",
    "name": "string",
    "phoneNumber": "string",
    "postalCode": "string",
    "state": "string",
    "street": "string",
    "taxId": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|boardingRequestToken|string|true|none|The boardingToken request token.|
|subMerchantData|[SubMerchantData](#schemasubmerchantdata)|false|none|Data of the sub-merchant.|

<h2 id="tocS_BoardingTokenResponse">BoardingTokenResponse</h2>
<!-- backwards compatibility -->
<a id="schemaboardingtokenresponse"></a>
<a id="schema_BoardingTokenResponse"></a>
<a id="tocSboardingtokenresponse"></a>
<a id="tocsboardingtokenresponse"></a>

```json
{
  "boardingToken": "string",
  "installationId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|boardingToken|string|true|none|The boarding token that allows the Payments App to board.|
|installationId|string|true|none|The unique identifier of the Payments App instance.|

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

<h2 id="tocS_PaymentsAppDto">PaymentsAppDto</h2>
<!-- backwards compatibility -->
<a id="schemapaymentsappdto"></a>
<a id="schema_PaymentsAppDto"></a>
<a id="tocSpaymentsappdto"></a>
<a id="tocspaymentsappdto"></a>

```json
{
  "installationId": "string",
  "merchantAccountCode": "string",
  "merchantStoreCode": "string",
  "status": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|installationId|string|true|none|The unique identifier of the Payments App instance.|
|merchantAccountCode|string|true|none|The account code associated with the Payments App instance.|
|merchantStoreCode|string|false|none|The store code associated with the Payments App instance.|
|status|string|true|none|The status of the Payments App instance.|

<h2 id="tocS_PaymentsAppResponse">PaymentsAppResponse</h2>
<!-- backwards compatibility -->
<a id="schemapaymentsappresponse"></a>
<a id="schema_PaymentsAppResponse"></a>
<a id="tocSpaymentsappresponse"></a>
<a id="tocspaymentsappresponse"></a>

```json
{
  "paymentsApps": [
    {
      "installationId": "string",
      "merchantAccountCode": "string",
      "merchantStoreCode": "string",
      "status": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|paymentsApps|[[PaymentsAppDto](#schemapaymentsappdto)]|true|none|List of Payments Apps.|

<h2 id="tocS_SubMerchantData">SubMerchantData</h2>
<!-- backwards compatibility -->
<a id="schemasubmerchantdata"></a>
<a id="schema_SubMerchantData"></a>
<a id="tocSsubmerchantdata"></a>
<a id="tocssubmerchantdata"></a>

```json
{
  "city": "string",
  "country": "string",
  "displayName": "string",
  "email": "user@example.com",
  "id": "string",
  "mcc": "string",
  "name": "string",
  "phoneNumber": "string",
  "postalCode": "string",
  "state": "string",
  "street": "string",
  "taxId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|city|string|false|none|The city of the sub-merchant.|
|country|string|false|none|The country of the sub-merchant.|
|displayName|string|true|none|The display name of the merchant.|
|email|string(email)|false|none|The email of the sub-merchant.|
|id|string|true|none|The sub-merchant's ID.|
|mcc|string|true|none|The MCC of the sub-merchant.|
|name|string|true|none|The name of the sub-merchant.|
|phoneNumber|string|false|none|The phone number of the sub-merchant.|
|postalCode|string|false|none|The postal code of the sub-merchant.|
|state|string|false|none|The state of the sub-merchant.|
|street|string|false|none|The street of the sub-merchant.|
|taxId|string|false|none|The tax ID of the sub-merchant.|
