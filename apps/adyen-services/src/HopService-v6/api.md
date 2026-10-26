<h1 id="hosted-onboarding-api">Hosted onboarding API v6</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

This API is used for the classic integration. If you are just starting your implementation, refer to our [new integration guide](https://docs.adyen.com/adyen-for-platforms-model) instead.

The Hosted onboarding API provides endpoints that you can use to generate links to Adyen-hosted pages, such as an [onboarding page](https://docs.adyen.com/classic-platforms/hosted-onboarding-page) or a [PCI compliance questionnaire](https://docs.adyen.com/classic-platforms/platforms-for-partners). You can provide these links to your account holders so that they can complete their onboarding.

## Authentication
Your Adyen contact will provide your API credential and an API key. To connect to the API, add an `X-API-Key` header with the API key as the value, for example:

 ```
curl
-H "Content-Type: application/json" \
-H "X-API-Key: YOUR_API_KEY" \
...
```

Alternatively, you can use the username and password to connect to the API using basic authentication. For example:

```
curl
-U "ws@MarketPlace.YOUR_PLATFORM_ACCOUNT":"YOUR_WS_PASSWORD" \
-H "Content-Type: application/json" \
...
```
When going live, you need to generate new web service user credentials to access the [live endpoints](https://docs.adyen.com/development-resources/live-endpoints).

## Versioning
The Hosted onboarding API supports [versioning](https://docs.adyen.com/development-resources/versioning) using a version suffix in the endpoint URL. This suffix has the following format: "vXX", where XX is the version number.

For example:
```
https://cal-test.adyen.com/cal/services/Hop/v6/getOnboardingUrl
```

Base URLs:

* <a href="https://cal-test.adyen.com/cal/services/Hop/v6">https://cal-test.adyen.com/cal/services/Hop/v6</a>

<a href="https://www.adyen.com/legal/terms-and-conditions">Terms of service</a>
Web: <a href="https://github.com/Adyen/adyen-openapi">Adyen Developer Experience team</a> 

# Authentication

* API Key (ApiKeyAuth)
    - Parameter Name: **X-API-Key**, in: header.

- HTTP Authentication, scheme: basic

<h1 id="hosted-onboarding-api-hosted-onboarding-page">Hosted Onboarding Page</h1>

## Get a link to a Adyen-hosted onboarding page

<a id="opIdpost-getOnboardingUrl"></a>

> Code samples

```bash
curl https://cal-test.adyen.com/cal/services/Hop/v6/getOnboardingUrl \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "accountHolderCode": "CODE_OF_ACCOUNT_HOLDER",
    "returnUrl": "https://your.return-url.com/?submerchant=123"
  }'
```

`POST /getOnboardingUrl`

Returns a link to an Adyen-hosted onboarding page (HOP) that you can send to your account holder. For more information on how to use HOP, refer to [Hosted onboarding](https://docs.adyen.com/classic-platforms/onboard-users/hosted-onboarding-page).

> Body parameter

```json
{
  "accountHolderCode": "CODE_OF_ACCOUNT_HOLDER",
  "returnUrl": "https://your.return-url.com/?submerchant=123"
}
```

<h3 id="get-a-link-to-a-adyen-hosted-onboarding-page-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[GetOnboardingUrlRequest](#schemagetonboardingurlrequest)|false|none|
|» accountHolderCode|body|string|true|The account holder code you provided when you created the account holder.|
|» collectInformation|body|[CollectInformation](#schemacollectinformation)|false|Contains indicators whether the page should only collect information for specific [KYC checks](https://docs.adyen.com/classic-platforms/verification-checks). By default, the page collects information for all KYC checks that apply to the [legal entity type](https://docs.adyen.com/classic-platforms/account-holders-and-accounts#legal-entity-types).|
|» editMode|body|boolean|false|Indicates if editing checks is allowed even if all the checks have passed.|
|» mobileOAuthCallbackUrl|body|string|false|The URL to which the account holder is redirected after completing an OAuth authentication with a bank through Trustly/PayMyBank.|
|» platformName|body|string|false|The platform name which will show up in the welcome page.|
|» returnUrl|body|string|false|The URL where the account holder will be redirected back to after they complete the onboarding, or if their session times out. Maximum length of 500 characters. If you don't provide this, the account holder will be redirected back to the default return URL configured in your platform account.|
|» shopperLocale|body|string|false|The language to be used in the page, specified by a combination of a language and country code. For example, **pt-BR**. <br><br>If not specified in the request or if the language is not supported, the page uses the browser language. If the browser language is not supported, the page uses **en-US** by default.<br><br>For a list of supported languages, refer to [Change the page language](https://docs.adyen.com/classic-platforms/hosted-onboarding-page/customize-experience#change-page-language).|
|» showPages|body|[ShowPages](#schemashowpages)|false|Contains indicators whether specific pages must be shown to the account holder.|

> Example responses

> 200 Response

```json
{
  "invalidFields": [],
  "pspReference": "9115677600500127",
  "resultCode": "Success",
  "redirectUrl": "https://hop-test.adyen.com/hop/view/?token=<token>"
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

<h3 id="get-a-link-to-a-adyen-hosted-onboarding-page-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[GetOnboardingUrlResponse](#schemagetonboardingurlresponse)|
|400|Bad Request|Bad Request - a problem reading or understanding the request.|[ServiceError](#schemaserviceerror)|
|401|Unauthorized|Unauthorized - authentication required.|[ServiceError](#schemaserviceerror)|
|403|Forbidden|Forbidden - insufficient permissions to process the request.|[ServiceError](#schemaserviceerror)|
|422|Unprocessable Entity|Unprocessable Entity - a request validation error.|[ServiceError](#schemaserviceerror)|
|500|Internal Server Error|Internal Server Error - the server could not process the request.|[ServiceError](#schemaserviceerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BasicAuth, ApiKeyAuth
</aside>

<h1 id="hosted-onboarding-api-pci-compliance-questionnaire-page">PCI Compliance Questionnaire Page</h1>

## Get a link to a PCI compliance questionnaire

<a id="opIdpost-getPciQuestionnaireUrl"></a>

> Code samples

```bash
curl https://cal-test.adyen.com/cal/services/Hop/v6/getPciQuestionnaireUrl \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d '{
    "accountHolderCode": "CODE_OF_ACCOUNT_HOLDER",
    "returnUrl": "https://your.return-url.com/?submerchant=123"
  }'
```

`POST /getPciQuestionnaireUrl`

Returns a link to a PCI compliance questionnaire that you can send to your account holder.
 > You should only use this endpoint if you have a [partner platform setup](https://docs.adyen.com/classic-platforms/platforms-for-partners).

> Body parameter

```json
{
  "accountHolderCode": "CODE_OF_ACCOUNT_HOLDER",
  "returnUrl": "https://your.return-url.com/?submerchant=123"
}
```

<h3 id="get-a-link-to-a-pci-compliance-questionnaire-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[GetPciUrlRequest](#schemagetpciurlrequest)|false|none|
|» accountHolderCode|body|string|true|The account holder code you provided when you created the account holder.|
|» returnUrl|body|string|false|The URL where the account holder will be redirected back to after they fill out the questionnaire, or if their session times out. Maximum length of 500 characters.|

> Example responses

> 200 Response

```json
{
  "invalidFields": [],
  "pspReference": "8315748692943050",
  "resultCode": "Success",
  "redirectUrl": "https://hop-test.adyen.com/hop/pci/?token=<token>"
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

<h3 id="get-a-link-to-a-pci-compliance-questionnaire-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK - the request has succeeded.|[GetPciUrlResponse](#schemagetpciurlresponse)|
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

<h2 id="tocS_CollectInformation">CollectInformation</h2>
<!-- backwards compatibility -->
<a id="schemacollectinformation"></a>
<a id="schema_CollectInformation"></a>
<a id="tocScollectinformation"></a>
<a id="tocscollectinformation"></a>

```json
{
  "bankDetails": true,
  "businessDetails": true,
  "individualDetails": true,
  "legalArrangementDetails": true,
  "pciQuestionnaire": true,
  "shareholderDetails": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bankDetails|boolean|false|none|Indicates whether [bank account details](https://docs.adyen.com/classic-platforms/verification-process/accepted-data-format/#bank-accounts) must be collected. Default is **true**.|
|businessDetails|boolean|false|none|Indicates whether [business details](https://docs.adyen.com/classic-platforms/verification-process/accepted-data-format/#organizations) must be collected. Default is **true**.|
|individualDetails|boolean|false|none|Indicates whether [individual details](https://docs.adyen.com/classic-platforms/verification-process/accepted-data-format/#individuals) must be collected. Default is **true**.|
|legalArrangementDetails|boolean|false|none|Indicates whether [legal arrangement details](https://docs.adyen.com/classic-platforms/verification-checks/legal-arrangements) must be collected. Default is **true**.|
|pciQuestionnaire|boolean|false|none|Indicates whether answers to a [PCI questionnaire](https://docs.adyen.com/classic-platforms/platforms-for-partners#onboard-partner-platform) must be collected. Applies only to partner platforms. Default is **true**.|
|shareholderDetails|boolean|false|none|Indicates whether [shareholder details](https://docs.adyen.com/classic-platforms/verification-process/accepted-data-format/#individuals) must be collected. Defaults to **true**.|

<h2 id="tocS_ErrorFieldType">ErrorFieldType</h2>
<!-- backwards compatibility -->
<a id="schemaerrorfieldtype"></a>
<a id="schema_ErrorFieldType"></a>
<a id="tocSerrorfieldtype"></a>
<a id="tocserrorfieldtype"></a>

```json
{
  "errorCode": 0,
  "errorDescription": "string",
  "fieldType": {
    "field": "string",
    "fieldName": "accountCode",
    "shareholderCode": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorCode|integer(int32)|false|none|The validation error code.|
|errorDescription|string|false|none|A description of the validation error.|
|fieldType|[FieldType](#schemafieldtype)|false|none|The type of error field.|

<h2 id="tocS_FieldType">FieldType</h2>
<!-- backwards compatibility -->
<a id="schemafieldtype"></a>
<a id="schema_FieldType"></a>
<a id="tocSfieldtype"></a>
<a id="tocsfieldtype"></a>

```json
{
  "field": "string",
  "fieldName": "accountCode",
  "shareholderCode": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field|string|false|none|The full name of the property.|
|fieldName|string|false|none|The type of the field.|
|shareholderCode|string|false|none|The code of the shareholder that the field belongs to. If empty, the field belongs to an account holder.|

#### Enumerated Values

|Property|Value|
|---|---|
|fieldName|accountCode|
|fieldName|accountHolderCode|
|fieldName|accountHolderDetails|
|fieldName|accountNumber|
|fieldName|accountStateType|
|fieldName|accountStatus|
|fieldName|accountType|
|fieldName|address|
|fieldName|balanceAccount|
|fieldName|balanceAccountActive|
|fieldName|balanceAccountCode|
|fieldName|balanceAccountId|
|fieldName|bankAccount|
|fieldName|bankAccountCode|
|fieldName|bankAccountName|
|fieldName|bankAccountUUID|
|fieldName|bankBicSwift|
|fieldName|bankCity|
|fieldName|bankCode|
|fieldName|bankName|
|fieldName|bankStatement|
|fieldName|branchCode|
|fieldName|businessContact|
|fieldName|cardToken|
|fieldName|checkCode|
|fieldName|city|
|fieldName|companyRegistration|
|fieldName|constitutionalDocument|
|fieldName|controller|
|fieldName|country|
|fieldName|countryCode|
|fieldName|currency|
|fieldName|currencyCode|
|fieldName|dateOfBirth|
|fieldName|description|
|fieldName|destinationAccountCode|
|fieldName|document|
|fieldName|documentContent|
|fieldName|documentExpirationDate|
|fieldName|documentIssuerCountry|
|fieldName|documentIssuerState|
|fieldName|documentName|
|fieldName|documentNumber|
|fieldName|documentType|
|fieldName|doingBusinessAs|
|fieldName|drivingLicence|
|fieldName|drivingLicenceBack|
|fieldName|drivingLicenceFront|
|fieldName|drivingLicense|
|fieldName|email|
|fieldName|firstName|
|fieldName|formType|
|fieldName|fullPhoneNumber|
|fieldName|gender|
|fieldName|hopWebserviceUser|
|fieldName|houseNumberOrName|
|fieldName|iban|
|fieldName|idCard|
|fieldName|idCardBack|
|fieldName|idCardFront|
|fieldName|idNumber|
|fieldName|identityDocument|
|fieldName|individualDetails|
|fieldName|infix|
|fieldName|jobTitle|
|fieldName|lastName|
|fieldName|lastReviewDate|
|fieldName|legalArrangement|
|fieldName|legalArrangementCode|
|fieldName|legalArrangementEntity|
|fieldName|legalArrangementEntityCode|
|fieldName|legalArrangementLegalForm|
|fieldName|legalArrangementMember|
|fieldName|legalArrangementMembers|
|fieldName|legalArrangementName|
|fieldName|legalArrangementReference|
|fieldName|legalArrangementRegistrationNumber|
|fieldName|legalArrangementTaxNumber|
|fieldName|legalArrangementType|
|fieldName|legalBusinessName|
|fieldName|legalEntity|
|fieldName|legalEntityType|
|fieldName|linkedViasVirtualAccount|
|fieldName|logo|
|fieldName|merchantAccount|
|fieldName|merchantCategoryCode|
|fieldName|merchantHouseNumber|
|fieldName|merchantReference|
|fieldName|microDeposit|
|fieldName|name|
|fieldName|nationality|
|fieldName|originalReference|
|fieldName|ownerCity|
|fieldName|ownerCountryCode|
|fieldName|ownerDateOfBirth|
|fieldName|ownerHouseNumberOrName|
|fieldName|ownerName|
|fieldName|ownerPostalCode|
|fieldName|ownerState|
|fieldName|ownerStreet|
|fieldName|passport|
|fieldName|passportNumber|
|fieldName|payoutMethod|
|fieldName|payoutMethodCode|
|fieldName|payoutSchedule|
|fieldName|pciSelfAssessment|
|fieldName|personalData|
|fieldName|phoneCountryCode|
|fieldName|phoneNumber|
|fieldName|postalCode|
|fieldName|primaryCurrency|
|fieldName|reason|
|fieldName|registrationNumber|
|fieldName|returnUrl|
|fieldName|schedule|
|fieldName|shareholder|
|fieldName|shareholderCode|
|fieldName|shareholderCodeAndSignatoryCode|
|fieldName|shareholderCodeOrSignatoryCode|
|fieldName|shareholderType|
|fieldName|shareholderTypes|
|fieldName|shopperInteraction|
|fieldName|signatory|
|fieldName|signatoryCode|
|fieldName|socialSecurityNumber|
|fieldName|sourceAccountCode|
|fieldName|splitAccount|
|fieldName|splitConfigurationUUID|
|fieldName|splitCurrency|
|fieldName|splitValue|
|fieldName|splits|
|fieldName|stateOrProvince|
|fieldName|status|
|fieldName|stockExchange|
|fieldName|stockNumber|
|fieldName|stockTicker|
|fieldName|store|
|fieldName|storeDetail|
|fieldName|storeName|
|fieldName|storeReference|
|fieldName|street|
|fieldName|taxId|
|fieldName|tier|
|fieldName|tierNumber|
|fieldName|transferCode|
|fieldName|ultimateParentCompany|
|fieldName|ultimateParentCompanyAddressDetails|
|fieldName|ultimateParentCompanyAddressDetailsCountry|
|fieldName|ultimateParentCompanyBusinessDetails|
|fieldName|ultimateParentCompanyBusinessDetailsLegalBusinessName|
|fieldName|ultimateParentCompanyBusinessDetailsRegistrationNumber|
|fieldName|ultimateParentCompanyCode|
|fieldName|ultimateParentCompanyStockExchange|
|fieldName|ultimateParentCompanyStockNumber|
|fieldName|ultimateParentCompanyStockNumberOrStockTicker|
|fieldName|ultimateParentCompanyStockTicker|
|fieldName|unknown|
|fieldName|value|
|fieldName|verificationType|
|fieldName|virtualAccount|
|fieldName|visaNumber|
|fieldName|webAddress|
|fieldName|year|

<h2 id="tocS_GetOnboardingUrlRequest">GetOnboardingUrlRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetonboardingurlrequest"></a>
<a id="schema_GetOnboardingUrlRequest"></a>
<a id="tocSgetonboardingurlrequest"></a>
<a id="tocsgetonboardingurlrequest"></a>

```json
{
  "accountHolderCode": "string",
  "collectInformation": {
    "bankDetails": true,
    "businessDetails": true,
    "individualDetails": true,
    "legalArrangementDetails": true,
    "pciQuestionnaire": true,
    "shareholderDetails": true
  },
  "editMode": true,
  "mobileOAuthCallbackUrl": "string",
  "platformName": "string",
  "returnUrl": "string",
  "shopperLocale": "string",
  "showPages": {
    "bankDetailsSummaryPage": true,
    "bankVerificationPage": true,
    "businessDetailsSummaryPage": true,
    "checksOverviewPage": true,
    "individualDetailsSummaryPage": true,
    "legalArrangementsDetailsSummaryPage": true,
    "manualBankAccountPage": true,
    "shareholderDetailsSummaryPage": true,
    "welcomePage": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountHolderCode|string|true|none|The account holder code you provided when you created the account holder.|
|collectInformation|[CollectInformation](#schemacollectinformation)|false|none|Contains indicators whether the page should only collect information for specific [KYC checks](https://docs.adyen.com/classic-platforms/verification-checks). By default, the page collects information for all KYC checks that apply to the [legal entity type](https://docs.adyen.com/classic-platforms/account-holders-and-accounts#legal-entity-types).|
|editMode|boolean|false|none|Indicates if editing checks is allowed even if all the checks have passed.|
|mobileOAuthCallbackUrl|string|false|none|The URL to which the account holder is redirected after completing an OAuth authentication with a bank through Trustly/PayMyBank.|
|platformName|string|false|none|The platform name which will show up in the welcome page.|
|returnUrl|string|false|none|The URL where the account holder will be redirected back to after they complete the onboarding, or if their session times out. Maximum length of 500 characters. If you don't provide this, the account holder will be redirected back to the default return URL configured in your platform account.|
|shopperLocale|string|false|none|The language to be used in the page, specified by a combination of a language and country code. For example, **pt-BR**. <br><br>If not specified in the request or if the language is not supported, the page uses the browser language. If the browser language is not supported, the page uses **en-US** by default.<br><br>For a list of supported languages, refer to [Change the page language](https://docs.adyen.com/classic-platforms/hosted-onboarding-page/customize-experience#change-page-language).|
|showPages|[ShowPages](#schemashowpages)|false|none|Contains indicators whether specific pages must be shown to the account holder.|

<h2 id="tocS_GetOnboardingUrlResponse">GetOnboardingUrlResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetonboardingurlresponse"></a>
<a id="schema_GetOnboardingUrlResponse"></a>
<a id="tocSgetonboardingurlresponse"></a>
<a id="tocsgetonboardingurlresponse"></a>

```json
{
  "invalidFields": [
    {
      "errorCode": 0,
      "errorDescription": "string",
      "fieldType": {
        "field": "string",
        "fieldName": "accountCode",
        "shareholderCode": "string"
      }
    }
  ],
  "pspReference": "string",
  "redirectUrl": "string",
  "resultCode": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|invalidFields|[[ErrorFieldType](#schemaerrorfieldtype)]|false|none|Information about any invalid fields.|
|pspReference|string|false|none|The reference of a request. Can be used to uniquely identify the request.|
|redirectUrl|string|false|none|The URL to the Hosted Onboarding Page where you should redirect your sub-merchant. This URL must be used within 30 seconds and can only be used once.|
|resultCode|string|false|none|The result code.|

<h2 id="tocS_GetPciUrlRequest">GetPciUrlRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetpciurlrequest"></a>
<a id="schema_GetPciUrlRequest"></a>
<a id="tocSgetpciurlrequest"></a>
<a id="tocsgetpciurlrequest"></a>

```json
{
  "accountHolderCode": "string",
  "returnUrl": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountHolderCode|string|true|none|The account holder code you provided when you created the account holder.|
|returnUrl|string|false|none|The URL where the account holder will be redirected back to after they fill out the questionnaire, or if their session times out. Maximum length of 500 characters.|

<h2 id="tocS_GetPciUrlResponse">GetPciUrlResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetpciurlresponse"></a>
<a id="schema_GetPciUrlResponse"></a>
<a id="tocSgetpciurlresponse"></a>
<a id="tocsgetpciurlresponse"></a>

```json
{
  "invalidFields": [
    {
      "errorCode": 0,
      "errorDescription": "string",
      "fieldType": {
        "field": "string",
        "fieldName": "accountCode",
        "shareholderCode": "string"
      }
    }
  ],
  "pspReference": "string",
  "redirectUrl": "string",
  "resultCode": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|invalidFields|[[ErrorFieldType](#schemaerrorfieldtype)]|false|none|Information about any invalid fields.|
|pspReference|string|false|none|The reference of a request. Can be used to uniquely identify the request.|
|redirectUrl|string|false|none|The URL to the PCI compliance questionnaire where you should redirect your account holder. This URL must be used within 30 seconds and can only be used once.|
|resultCode|string|false|none|The result code.|

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

<h2 id="tocS_ShowPages">ShowPages</h2>
<!-- backwards compatibility -->
<a id="schemashowpages"></a>
<a id="schema_ShowPages"></a>
<a id="tocSshowpages"></a>
<a id="tocsshowpages"></a>

```json
{
  "bankDetailsSummaryPage": true,
  "bankVerificationPage": true,
  "businessDetailsSummaryPage": true,
  "checksOverviewPage": true,
  "individualDetailsSummaryPage": true,
  "legalArrangementsDetailsSummaryPage": true,
  "manualBankAccountPage": true,
  "shareholderDetailsSummaryPage": true,
  "welcomePage": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bankDetailsSummaryPage|boolean|false|none|Indicates whether the page with bank account details must be shown. Defaults to **true**.|
|bankVerificationPage|boolean|false|none|Indicates whether the bank check instant verification' details must be shown. Defaults to **true**.|
|businessDetailsSummaryPage|boolean|false|none|Indicates whether the page with the company's or organization's details must be shown. Defaults to **true**.|
|checksOverviewPage|boolean|false|none|Indicates whether the checks overview page must be shown. Defaults to **false**.|
|individualDetailsSummaryPage|boolean|false|none|Indicates whether the page with the individual's details must be shown. Defaults to **true**.|
|legalArrangementsDetailsSummaryPage|boolean|false|none|Indicates whether the page with the legal arrangements' details must be shown. Defaults to **true**.|
|manualBankAccountPage|boolean|false|none|Indicates whether the page to manually add bank account' details must be shown. Defaults to **true**.|
|shareholderDetailsSummaryPage|boolean|false|none|Indicates whether the page with the shareholders' details must be shown. Defaults to **true**.|
|welcomePage|boolean|false|none|Indicates whether the welcome page must be shown. Defaults to **false**.|
