<h1 id="adyen-test-cards-api">Adyen Test Cards API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Test Cards API provides endpoints for generating custom test card numbers. For more information, refer to [Custom test cards](https://docs.adyen.com/development-resources/testing/create-test-cards) documentation.

Base URLs:

* <a href="https://pal-test.adyen.com/pal/services/TestCard/v1">https://pal-test.adyen.com/pal/services/TestCard/v1</a>

<a href="https://www.adyen.com/legal/terms-and-conditions">Terms of service</a>
Email: <a href="mailto:developer-experience@adyen.com">Adyen Developer Experience team</a> 
Web: <a href="https://www.adyen.help/hc/en-us/community/topics">Adyen Developer Experience team</a> 

# Authentication

* API Key (ApiKeyAuth)
    - Parameter Name: **X-API-Key**, in: header.

- HTTP Authentication, scheme: basic

<h1 id="adyen-test-cards-api-general">General</h1>

## Creates one or more test card ranges.

<a id="opIdpost-createTestCardRanges"></a>

> Code samples

```bash
curl https://pal-test.adyen.com/pal/services/TestCard/v1/createTestCardRanges \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "accountCode": "string",
    "accountTypeCode": "string",
    "testCardRanges": [
      {
        "address": {
          "streetAddress": "string",
          "zip": "string"
        },
        "cardHolderName": "string",
        "cvc": "string",
        "expiryMonth": "APRIL",
        "expiryYear": 0,
        "rangeEnd": "string",
        "rangeStart": "string",
        "threeDDirectoryServerResponse": "N",
        "threeDPassword": "string",
        "threeDUsername": "string"
      }
    ]
  }'
```

`POST /createTestCardRanges`

Creates one or more test card ranges.

> Body parameter

```json
{
  "accountCode": "string",
  "accountTypeCode": "string",
  "testCardRanges": [
    {
      "address": {
        "streetAddress": "string",
        "zip": "string"
      },
      "cardHolderName": "string",
      "cvc": "string",
      "expiryMonth": "APRIL",
      "expiryYear": 0,
      "rangeEnd": "string",
      "rangeStart": "string",
      "threeDDirectoryServerResponse": "N",
      "threeDPassword": "string",
      "threeDUsername": "string"
    }
  ]
}
```

<h3 id="creates-one-or-more-test-card-ranges-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateTestCardRangesRequest](#schemacreatetestcardrangesrequest)|false|none|
|» accountCode|body|string|true|The code of the account, for which the test card ranges should be created.|
|» accountTypeCode|body|string|true|The type of the account, for which the test card ranges should be created.<br><br>Permitted values:<br>* Company<br>* MerchantAccount<br>> These values are case-sensitive.|
|» testCardRanges|body|[[TestCardRange](#schematestcardrange)]|true|A list of test card ranges to create.|

> Example responses

> 200 Response

```json
{
  "rangeCreationResults": [
    {
      "cardNumberRangeEnd": "string",
      "cardNumberRangeStart": "string",
      "creationResultCode": "ALREADY_EXISTS",
      "message": "string"
    }
  ]
}
```

> 400 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 401 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 403 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 422 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

> 500 Response

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

<h3 id="creates-one-or-more-test-card-ranges-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[CreateTestCardRangesResult](#schemacreatetestcardrangesresult)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

# Schemas

<h2 id="tocS_AvsAddress">AvsAddress</h2>
<!-- backwards compatibility -->
<a id="schemaavsaddress"></a>
<a id="schema_AvsAddress"></a>
<a id="tocSavsaddress"></a>
<a id="tocsavsaddress"></a>

```json
{
  "streetAddress": "string",
  "zip": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|streetAddress|string|true|none|The street and house number of the address.<br><br>Example: 1 Infinite Loop, Cupertino.|
|zip|string|false|none|The zip or post code of the address.<br><br>Example: CA 95014|

<h2 id="tocS_CreateTestCardRangesRequest">CreateTestCardRangesRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatetestcardrangesrequest"></a>
<a id="schema_CreateTestCardRangesRequest"></a>
<a id="tocScreatetestcardrangesrequest"></a>
<a id="tocscreatetestcardrangesrequest"></a>

```json
{
  "accountCode": "string",
  "accountTypeCode": "string",
  "testCardRanges": [
    {
      "address": {
        "streetAddress": "string",
        "zip": "string"
      },
      "cardHolderName": "string",
      "cvc": "string",
      "expiryMonth": "APRIL",
      "expiryYear": 0,
      "rangeEnd": "string",
      "rangeStart": "string",
      "threeDDirectoryServerResponse": "N",
      "threeDPassword": "string",
      "threeDUsername": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountCode|string|true|none|The code of the account, for which the test card ranges should be created.|
|accountTypeCode|string|true|none|The type of the account, for which the test card ranges should be created.<br><br>Permitted values:<br>* Company<br>* MerchantAccount<br>> These values are case-sensitive.|
|testCardRanges|[[TestCardRange](#schematestcardrange)]|true|none|A list of test card ranges to create.|

<h2 id="tocS_CreateTestCardRangesResult">CreateTestCardRangesResult</h2>
<!-- backwards compatibility -->
<a id="schemacreatetestcardrangesresult"></a>
<a id="schema_CreateTestCardRangesResult"></a>
<a id="tocScreatetestcardrangesresult"></a>
<a id="tocscreatetestcardrangesresult"></a>

```json
{
  "rangeCreationResults": [
    {
      "cardNumberRangeEnd": "string",
      "cardNumberRangeStart": "string",
      "creationResultCode": "ALREADY_EXISTS",
      "message": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rangeCreationResults|[[TestCardRangeCreationResult](#schematestcardrangecreationresult)]|true|none|The results of the test card creation.|

<h2 id="tocS_ServiceError">ServiceError</h2>
<!-- backwards compatibility -->
<a id="schemaserviceerror"></a>
<a id="schema_ServiceError"></a>
<a id="tocSserviceerror"></a>
<a id="tocsserviceerror"></a>

```json
{
  "errorCode": "string",
  "errorType": "string",
  "message": "string",
  "pspReference": "string",
  "status": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorCode|string|false|none|The error code mapped to the error message.|
|errorType|string|false|none|The category of the error.|
|message|string|false|none|A short explanation of the issue.|
|pspReference|string|false|none|The PSP reference of the payment.|
|status|integer(int32)|false|none|The HTTP response status.|

<h2 id="tocS_TestCardRange">TestCardRange</h2>
<!-- backwards compatibility -->
<a id="schematestcardrange"></a>
<a id="schema_TestCardRange"></a>
<a id="tocStestcardrange"></a>
<a id="tocstestcardrange"></a>

```json
{
  "address": {
    "streetAddress": "string",
    "zip": "string"
  },
  "cardHolderName": "string",
  "cvc": "string",
  "expiryMonth": "APRIL",
  "expiryYear": 0,
  "rangeEnd": "string",
  "rangeStart": "string",
  "threeDDirectoryServerResponse": "N",
  "threeDPassword": "string",
  "threeDUsername": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|[AvsAddress](#schemaavsaddress)|false|none|Contains the billing address of the card holder. The address details need to be AVS-compliant, which means that you need to provide at least street address.|
|cardHolderName|string|true|none|The name of the card holder, as it appears on the card, for the test card range.|
|cvc|string|false|none|The test card range security code.<br><br>Example: 123|
|expiryMonth|string|true|none|Expiry month for the test card range.<br><br>Allowed values:<br>* JANUARY<br>* FEBRUARY<br>* MARCH<br>* APRIL<br>* MAY<br>* JUNE<br>* JULY<br>* AUGUST<br>* SEPTEMBER<br>* OCTOBER<br>* NOVEMBER<br>* DECEMBER|
|expiryYear|integer(int32)|true|none|Expiry year for the test card range.<br><br>Example: 2020|
|rangeEnd|string|true|none|The last test card number in the test card range (inclusive):<br><br>* Min 6, max 19 digits<br>* BIN compliant<br>Example: 5432 1234 1234 4321|
|rangeStart|string|true|none|The first test card number in the test card range (inclusive):<br><br>* Min 6, max 19 digits<br>* BIN compliant<br>Example: 5432 1234 1234 1234|
|threeDDirectoryServerResponse|string|false|none|3D Secure server response. It notifies whether the specified card holder is enrolled in a 3D Secure service. Possible values:<br><br>* Y (Authentication available)<br>* N (Card holder not enrolled/not participating)<br>* U (Unable to authenticate)|
|threeDPassword|string|false|none|The password used for 3D Secure authentication.|
|threeDUsername|string|false|none|The username used for 3D Secure authentication.|

#### Enumerated Values

|Property|Value|
|---|---|
|expiryMonth|APRIL|
|expiryMonth|AUGUST|
|expiryMonth|DECEMBER|
|expiryMonth|FEBRUARY|
|expiryMonth|JANUARY|
|expiryMonth|JULY|
|expiryMonth|JUNE|
|expiryMonth|MARCH|
|expiryMonth|MAY|
|expiryMonth|NOVEMBER|
|expiryMonth|OCTOBER|
|expiryMonth|SEPTEMBER|
|threeDDirectoryServerResponse|N|
|threeDDirectoryServerResponse|U|
|threeDDirectoryServerResponse|Y|

<h2 id="tocS_TestCardRangeCreationResult">TestCardRangeCreationResult</h2>
<!-- backwards compatibility -->
<a id="schematestcardrangecreationresult"></a>
<a id="schema_TestCardRangeCreationResult"></a>
<a id="tocStestcardrangecreationresult"></a>
<a id="tocstestcardrangecreationresult"></a>

```json
{
  "cardNumberRangeEnd": "string",
  "cardNumberRangeStart": "string",
  "creationResultCode": "ALREADY_EXISTS",
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cardNumberRangeEnd|string|true|none|The last test card number in the generated test card range.<br><br>Example: 5432 1234 1234 4321|
|cardNumberRangeStart|string|true|none|The first test card number in the generated test card range.<br><br>Example: 5432 1234 1234 1234|
|creationResultCode|string|true|none|Notification message. It informs about the outcome of the operation. Possible values:<br>* CREATED<br>* ALREADY_EXISTS<br>* ERROR|
|message|string|false|none|An optional information message about the result.|

#### Enumerated Values

|Property|Value|
|---|---|
|creationResultCode|ALREADY_EXISTS|
|creationResultCode|CREATED|
|creationResultCode|ERROR|
