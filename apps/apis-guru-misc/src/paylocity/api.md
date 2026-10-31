<h1 id="paylocity-api">Paylocity API v2</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

For general questions and support of the API, contact: webservices@paylocity.com
# Overview

Paylocity Web Services API is an externally facing RESTful Internet protocol. The Paylocity API uses HTTP verbs and a RESTful endpoint structure. OAuth 2.0 is used as the API Authorization framework. Request and response payloads are formatted as JSON.
Paylocity supports v1 and v2 versions of its API endpoints. v1, while supported, won't be enhanced with additional functionality. For direct link to v1 documentation, please click [here](https://docs.paylocity.com/weblink/guides/Paylocity_Web_Services_API/v1/Paylocity_Web_Services_API.htm). For additional resources regarding v1/v2 differences and conversion path, please contact webservices@paylocity.com.

##### Setup

Paylocity will provide the secure client credentials and set up the scope (type of requests and allowed company numbers). You will receive the unique client id, secret, and Paylocity public key for the data encryption. The secret will expire in 365 days. 
* Paylocity will send you an e-mail 10 days prior to the expiration date for the current secret. If not renewed, the second e-mail notification will be sent 5 days prior to secret's expiration. Each email will contain the code necessary to renew the client secret. 
* You can obtain the new secret by calling API endpoint using your current not yet expired credentials and the code that was sent with the notification email. For details on API endpoint, please see Client Credentials section. 
* Both the current secret value and the new secret value will be recognized during the transition period. After the current secret expires, you must use the new secret. 
* If you were unable to renew the secret via API endpoint, you can still contact Service and they will email you new secret via secure email.


When validating the request, Paylocity API will honor the defaults and required fields set up for the company default New Hire Template as defined in Web Pay.


# Authorization

Paylocity Web Services API uses OAuth2.0 Authentication with JSON Message Format.


All requests of the Paylocity Web Services API require a bearer token which can be obtained by authenticating the client with the Paylocity Web Services API via OAuth 2.0.


The client must request a bearer token from the authorization endpoint:


auth-server for production: https://api.paylocity.com/IdentityServer/connect/token


auth-server for testing: https://apisandbox.paylocity.com/IdentityServer/connect/token

Paylocity reserves the right to impose rate limits on the number of calls made to our APIs. Changes to API features/functionality may be made at anytime with or without prior notice.

##### Authorization Header

The request is expected to be in the form of a basic authentication request, with the "Authorization" header containing the client-id and client-secret. This means the standard base-64 encoded user:password, prefixed with "Basic" as the value for the Authorization header, where user is the client-id and password is the client-secret.

##### Content-Type Header

The "Content-Type" header is required to be "application/x-www-form-urlencoded".

##### Additional Values

The request must post the following form encoded values within the request body:

    grant_type = client_credentials
    scope = WebLinkAPI

##### Responses

Success will return HTTP 200 OK with JSON content:

    {
      "access_token": "xxx",
      "expires_in": 3600,
      "token_type": "Bearer"
    }

# Encryption

Paylocity uses a combination of RSA and AES cryptography. As part of the setup, each client is issued a public RSA key.

Paylocity recommends the encryption of the incoming requests as additional protection of the sensitive data. Clients can opt-out of the encryption during the initial setup process. Opt-out will allow Paylocity to process unencrypted requests.

The Paylocity Public Key has the following properties:

* 2048 bit key size

* PKCS1 key format

* PEM encoding

##### Properties

* key (base 64 encoded): The AES symmetric key encrypted with the Paylocity Public Key. It is the key used to encrypt the content. Paylocity will decrypt the AES key using RSA decryption and use it to decrypt the content.

* iv (base 64 encoded): The AES IV (Initialization Vector) used when encrypting the content.

* content (base 64 encoded): The AES encrypted request. The key and iv provided in the secureContent request are used by Paylocity for decryption of the content.

We suggest using the following for the AES:

* CBC cipher mode

* PKCS7 padding

* 128 bit block size

* 256 bit key size

##### Encryption Flow

* Generate the unencrypted JSON payload to POST/PUT
* Encrypt this JSON payload using your _own key and IV_ (NOT with the Paylocity public key)
* RSA encrypt the _key_ you used in step 2 with the Paylocity Public Key, then, base64 encode the result
* Base64 encode the IV used to encrypt the JSON payload in step 2
* Put together a "securecontent" JSON object:
 
{
  'secureContent' : {
    'key' : -- RSA-encrypted & base64 encoded key from step 3,
    'iv' : -- base64 encoded iv from step 4
    'content' -- content encrypted with your own key from step 2, base64 encoded
  }
}

##### Sample Example

    {
      "secureContent": {
        "key": "eS3aw6H/qzHMJ00gSi6gQ3xa08DPMazk8BFY96Pd99ODA==",
        "iv": "NLyXMGq9svw0XO5aI9BzWw==",
        "content": "gAEOiQltO1w+LzGUoIK8FiYbU42hug94EasSl7N+Q1w="
      }
    }

##### Sample C# Code

    using Newtonsoft.Json;
    using System;
    using System.IO;
    using System.Security.Cryptography;
    using System.Text;

    public class SecuredContent
    {
      [JsonProperty("key")]
      public string Key { get; set; }

      [JsonProperty("iv")]
      public string Iv { get; set; }

      [JsonProperty("content")]
      public string Content { get; set; }

    }

    public class EndUserSecureRequestExample
    {
      public string CreateSecuredRequest(FileInfo paylocityPublicKey, string unsecuredJsonRequest)
      {
        string publicKeyXml = File.ReadAllText(paylocityPublicKey.FullName, Encoding.UTF8);

        SecuredContent secureContent = this.CreateSecuredContent(publicKeyXml, unsecuredJsonRequest);

        string secureRequest = JsonConvert.SerializeObject(new { secureContent });

        return secureRequest;
      }

      private SecuredContent CreateSecuredContent(string publicKeyXml, string request)
      {
        using (AesCryptoServiceProvider aesCsp = new AesCryptoServiceProvider())
        {
          aesCsp.Mode = CipherMode.CBC;
          aesCsp.Padding = PaddingMode.PKCS7;
          aesCsp.BlockSize = 128;
          aesCsp.KeySize = 256;

          using (ICryptoTransform crt = aesCsp.CreateEncryptor(aesCsp.Key, aesCsp.IV))
          {
            using (MemoryStream outputStream = new MemoryStream())
            {
              using (CryptoStream encryptStream = new CryptoStream(outputStream, crt, CryptoStreamMode.Write))
              {
                byte[] encodedRequest = Encoding.UTF8.GetBytes(request);
                encryptStream.Write(encodedRequest, 0, encodedRequest.Length);
                encryptStream.FlushFinalBlock();
                byte[] encryptedRequest = outputStream.ToArray();

                using (RSACryptoServiceProvider crp = new RSACryptoServiceProvider())
                {
                  crp.FromXmlstring(publicKeyXml);
                  byte[] encryptedKey = crp.Encrypt(aesCsp.Key, false);

                  return new SecuredContent()
                  {
                    Key = Convert.ToBase64string(encryptedKey),
                    Iv = Convert.ToBase64string(aesCsp.IV),
                    Content = Convert.ToBase64string(encryptedRequest)
                  };
                }
              }
            }
          }
        }
      }
    }

## Support

Questions about using the Paylocity API? Please contact webservices@paylocity.com.

# Deductions (v1)

Deductions API provides endpoints to retrieve, add, update and delete deductions for a company's employees. For schema details, click <a href="https://docs.paylocity.com/weblink/guides/Paylocity_Web_Services_API/v1/Paylocity_Web_Services_API.htm" target="_blank">here</a>.

# OnBoarding (v1)

Onboarding API sends employee data into Paylocity Onboarding to help ensure an easy and accurate hiring process for subsequent completion into Web Pay. For schema details, click <a href="https://docs.paylocity.com/weblink/guides/Paylocity_Web_Services_API/v1/Paylocity_Web_Services_API.htm" target="_blank">here</a>.

Base URLs:

* <a href="https://api.paylocity.com/api">https://api.paylocity.com/api</a>

Email: <a href="mailto:webservices@paylocity.com">webservices@paylocity.com</a> 

# Authentication

- oAuth2 authentication.

    - Flow: clientCredentials
    - Token URL = [https://api.paylocity.com/IdentityServer/connect/token](https://api.paylocity.com/IdentityServer/connect/token)

|Scope|Scope Description|
|---|---|
|WebLinkAPI|Web Link Api|

<h1 id="paylocity-api-company-codes">Company Codes</h1>

## Get All Company Codes

<a id="opIdGet All Company Codes and Descriptions by Resource"></a>

> Code samples

```bash
curl https://example.com/v2/companies/string/codes/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/companies/{companyId}/codes/{codeResource}`

Get All Company Codes for the selected company and resource

<h3 id="get-all-company-codes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|companyId|path|string|true|Company Id|
|codeResource|path|string|true|Type of Company Code. Common values costcenter1, costcenter2, costcenter3, deductions, earnings, taxes, paygrade, positions.|

> Example responses

> 200 Response

```json
[
  {
    "code": "string",
    "description": "string"
  }
]
```

> 404 Response

```json
[
  {
    "field": "string",
    "message": "string",
    "options": [
      {
        "code": "string",
        "description": "string"
      }
    ],
    "path": "string"
  }
]
```

> 500 Response

```json
[
  {
    "field": "string",
    "message": "string",
    "options": [
      {
        "code": "string",
        "description": "string"
      }
    ],
    "path": "string"
  }
]
```

<h3 id="get-all-company-codes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Invalid Code Resource|Inline|
|429|Too Many Requests|Too Many Requests|None|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="get-all-company-codes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[companyCodes](#schemacompanycodes)]|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[error](#schemaerror)]|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
paylocity_auth ( Scopes: WebLinkAPI )
</aside>

<h1 id="paylocity-api-custom-fields">Custom Fields</h1>

## Get All Custom Fields

<a id="opIdGet All Custom Fields by category"></a>

> Code samples

```bash
curl https://example.com/v2/companies/string/customfields/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/companies/{companyId}/customfields/{category}`

Get All Custom Fields for the selected company

<h3 id="get-all-custom-fields-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|companyId|path|string|true|Company Id|
|category|path|string|true|Custom Fields Category|

> Example responses

> 200 Response

```json
[
  {
    "category": "string",
    "defaultValue": "string",
    "isRequired": true,
    "label": "string",
    "type": "string",
    "values": [
      {
        "code": "string",
        "description": "string"
      }
    ]
  }
]
```

> 404 Response

```json
[
  {
    "field": "string",
    "message": "string",
    "options": [
      {
        "code": "string",
        "description": "string"
      }
    ],
    "path": "string"
  }
]
```

> 500 Response

```json
[
  {
    "field": "string",
    "message": "string",
    "options": [
      {
        "code": "string",
        "description": "string"
      }
    ],
    "path": "string"
  }
]
```

<h3 id="get-all-custom-fields-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Invalid Category|Inline|
|429|Too Many Requests|Too Many Requests|None|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="get-all-custom-fields-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[customFieldDefinition](#schemacustomfielddefinition)]|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[error](#schemaerror)]|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
paylocity_auth ( Scopes: WebLinkAPI )
</aside>

<h1 id="paylocity-api-employee">Employee</h1>

## Add new employee

<a id="opIdAdd employee"></a>

> Code samples

```bash
curl https://example.com/v2/companies/string/employees \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "additionalDirectDeposit": [
      {
        "accountNumber": "string",
        "accountType": "string",
        "amount": 0,
        "amountType": "string",
        "blockSpecial": true,
        "isSkipPreNote": true,
        "nameOnAccount": "string",
        "preNoteDate": "string",
        "routingNumber": "string"
      }
    ],
    "additionalRate": [
      {
        "changeReason": "string",
        "costCenter1": "string",
        "costCenter2": "string",
        "costCenter3": "string",
        "effectiveDate": "string",
        "endCheckDate": "string",
        "job": "string",
        "rate": 0,
        "rateCode": "string",
        "rateNotes": "string",
        "ratePer": "string",
        "shift": "string"
      }
    ],
    "benefitSetup": {
      "benefitClass": "string",
      "benefitClassEffectiveDate": "string",
      "benefitSalary": 0,
      "benefitSalaryEffectiveDate": "string",
      "doNotApplyAdministrativePeriod": true,
      "isMeasureAcaEligibility": true
    },
    "birthDate": "string",
    "coEmpCode": "string",
    "companyFEIN": "string",
    "companyName": "string",
    "currency": "string",
    "customBooleanFields": [
      {
        "category": "PayrollAndHR",
        "label": "string",
        "value": true
      }
    ],
    "customDateFields": [
      {
        "category": "PayrollAndHR",
        "label": "string",
        "value": "string"
      }
    ],
    "customDropDownFields": [
      {
        "category": "PayrollAndHR",
        "label": "string",
        "value": "string"
      }
    ],
    "customNumberFields": [
      {
        "category": "PayrollAndHR",
        "label": "string",
        "value": 0
      }
    ],
    "customTextFields": [
      {
        "category": "PayrollAndHR",
        "label": "string",
        "value": "string"
      }
    ],
    "departmentPosition": {
      "changeReason": "string",
      "clockBadgeNumber": "string",
      "costCenter1": "string",
      "costCenter2": "string",
      "costCenter3": "string",
      "effectiveDate": "string",
      "employeeType": "string",
      "equalEmploymentOpportunityClass": "string",
      "isMinimumWageExempt": true,
      "isOvertimeExempt": true,
      "isSupervisorReviewer": true,
      "isUnionDuesCollected": true,
      "isUnionInitiationCollected": true,
      "jobTitle": "string",
      "payGroup": "string",
      "positionCode": "string",
      "reviewerCompanyNumber": "string",
      "reviewerEmployeeId": "string",
      "shift": "string",
      "supervisorCompanyNumber": "string",
      "supervisorEmployeeId": "string",
      "tipped": "string",
      "unionAffiliationDate": "string",
      "unionCode": "string",
      "unionPosition": "string",
      "workersCompensation": "string"
    },
    "disabilityDescription": "string",
    "emergencyContacts": [
      {
        "address1": "string",
        "address2": "string",
        "city": "string",
        "country": "string",
        "county": "string",
        "email": "string",
        "firstName": "string",
        "homePhone": "string",
        "lastName": "string",
        "mobilePhone": "string",
        "notes": "string",
        "pager": "string",
        "primaryPhone": "string",
        "priority": "string",
        "relationship": "string",
        "state": "string",
        "syncEmployeeInfo": true,
        "workExtension": "string",
        "workPhone": "string",
        "zip": "string"
      }
    ],
    "employeeId": "string",
    "ethnicity": "string",
    "federalTax": {
      "amount": 0,
      "deductionsAmount": 0,
      "dependentsAmount": 0,
      "exemptions": 0,
      "filingStatus": "string",
      "higherRate": true,
      "otherIncomeAmount": 0,
      "percentage": 0,
      "taxCalculationCode": "string",
      "w4FormYear": 0
    },
    "firstName": "string",
    "gender": "string",
    "homeAddress": {
      "address1": "string",
      "address2": "string",
      "city": "string",
      "country": "string",
      "county": "string",
      "emailAddress": "string",
      "mobilePhone": "string",
      "phone": "string",
      "postalCode": "string",
      "state": "string"
    },
    "isHighlyCompensated": true,
    "isSmoker": true,
    "lastName": "string",
    "localTax": [
      {
        "exemptions": 0,
        "exemptions2": 0,
        "filingStatus": "string",
        "residentPSD": "string",
        "taxCode": "string",
        "workPSD": "string"
      }
    ],
    "mainDirectDeposit": {
      "accountNumber": "string",
      "accountType": "string",
      "blockSpecial": true,
      "isSkipPreNote": true,
      "nameOnAccount": "string",
      "preNoteDate": "string",
      "routingNumber": "string"
    },
    "maritalStatus": "string",
    "middleName": "string",
    "nonPrimaryStateTax": {
      "amount": 0,
      "deductionsAmount": 0,
      "dependentsAmount": 0,
      "exemptions": 0,
      "exemptions2": 0,
      "filingStatus": "string",
      "higherRate": true,
      "otherIncomeAmount": 0,
      "percentage": 0,
      "reciprocityCode": "string",
      "specialCheckCalc": "string",
      "taxCalculationCode": "string",
      "taxCode": "string",
      "w4FormYear": 0
    },
    "ownerPercent": 0,
    "preferredName": "string",
    "primaryPayRate": {
      "annualSalary": 0,
      "baseRate": 0,
      "beginCheckDate": "string",
      "changeReason": "string",
      "defaultHours": 0,
      "effectiveDate": "string",
      "isAutoPay": true,
      "payFrequency": "string",
      "payGrade": "string",
      "payRateNote": "string",
      "payType": "string",
      "ratePer": "string",
      "salary": 0
    },
    "primaryStateTax": {
      "amount": 0,
      "deductionsAmount": 0,
      "dependentsAmount": 0,
      "exemptions": 0,
      "exemptions2": 0,
      "filingStatus": "string",
      "higherRate": true,
      "otherIncomeAmount": 0,
      "percentage": 0,
      "specialCheckCalc": "string",
      "taxCalculationCode": "string",
      "taxCode": "string",
      "w4FormYear": 0
    },
    "priorLastName": "string",
    "salutation": "string",
    "ssn": "string",
    "status": {
      "adjustedSeniorityDate": "string",
      "changeReason": "string",
      "effectiveDate": "string",
      "employeeStatus": "string",
      "hireDate": "string",
      "isEligibleForRehire": true,
      "reHireDate": "string",
      "statusType": "string",
      "terminationDate": "string"
    },
    "suffix": "string",
    "taxSetup": {
      "fitwExemptNotes": "string",
      "fitwExemptReason": "string",
      "futaExemptNotes": "string",
      "futaExemptReason": "string",
      "isEmployee943": true,
      "isPension": true,
      "isStatutory": true,
      "medExemptNotes": "string",
      "medExemptReason": "string",
      "sitwExemptNotes": "string",
      "sitwExemptReason": "string",
      "ssExemptNotes": "string",
      "ssExemptReason": "string",
      "suiExemptNotes": "string",
      "suiExemptReason": "string",
      "suiState": "string",
      "taxDistributionCode1099R": "string",
      "taxForm": "string"
    },
    "veteranDescription": "string",
    "webTime": {
      "badgeNumber": "string",
      "chargeRate": 0,
      "isTimeLaborEnabled": true
    },
    "workAddress": {
      "address1": "string",
      "address2": "string",
      "city": "string",
      "country": "string",
      "county": "string",
      "emailAddress": "string",
      "location": "string",
      "mailStop": "string",
      "mobilePhone": "string",
      "pager": "string",
      "phone": "string",
      "phoneExtension": "string",
      "postalCode": "string",
      "state": "string"
    },
    "workEligibility": {
      "alienOrAdmissionDocumentNumber": "string",
      "attestedDate": "string",
      "countryOfIssuance": "string",
      "foreignPassportNumber": "string",
      "i94AdmissionNumber": "string",
      "i9DateVerified": "string",
      "i9Notes": "string",
      "isI9Verified": true,
      "isSsnVerified": true,
      "ssnDateVerified": "string",
      "ssnNotes": "string",
      "visaType": "string",
      "workAuthorization": "string",
      "workUntil": "string"
    }
  }'
```

`POST /v2/companies/{companyId}/employees`

New Employee API sends new employee data directly to Web Pay. Companies who use the New Hire Template in Web Pay may require additional fields when hiring employees. New Employee API Requests will honor these required fields.

> Body parameter

```json
{
  "additionalDirectDeposit": [
    {
      "accountNumber": "string",
      "accountType": "string",
      "amount": 0,
      "amountType": "string",
      "blockSpecial": true,
      "isSkipPreNote": true,
      "nameOnAccount": "string",
      "preNoteDate": "string",
      "routingNumber": "string"
    }
  ],
  "additionalRate": [
    {
      "changeReason": "string",
      "costCenter1": "string",
      "costCenter2": "string",
      "costCenter3": "string",
      "effectiveDate": "string",
      "endCheckDate": "string",
      "job": "string",
      "rate": 0,
      "rateCode": "string",
      "rateNotes": "string",
      "ratePer": "string",
      "shift": "string"
    }
  ],
  "benefitSetup": {
    "benefitClass": "string",
    "benefitClassEffectiveDate": "string",
    "benefitSalary": 0,
    "benefitSalaryEffectiveDate": "string",
    "doNotApplyAdministrativePeriod": true,
    "isMeasureAcaEligibility": true
  },
  "birthDate": "string",
  "coEmpCode": "string",
  "companyFEIN": "string",
  "companyName": "string",
  "currency": "string",
  "customBooleanFields": [
    {
      "category": "PayrollAndHR",
      "label": "string",
      "value": true
    }
  ],
  "customDateFields": [
    {
      "category": "PayrollAndHR",
      "label": "string",
      "value": "string"
    }
  ],
  "customDropDownFields": [
    {
      "category": "PayrollAndHR",
      "label": "string",
      "value": "string"
    }
  ],
  "customNumberFields": [
    {
      "category": "PayrollAndHR",
      "label": "string",
      "value": 0
    }
  ],
  "customTextFields": [
    {
      "category": "PayrollAndHR",
      "label": "string",
      "value": "string"
    }
  ],
  "departmentPosition": {
    "changeReason": "string",
    "clockBadgeNumber": "string",
    "costCenter1": "string",
    "costCenter2": "string",
    "costCenter3": "string",
    "effectiveDate": "string",
    "employeeType": "string",
    "equalEmploymentOpportunityClass": "string",
    "isMinimumWageExempt": true,
    "isOvertimeExempt": true,
    "isSupervisorReviewer": true,
    "isUnionDuesCollected": true,
    "isUnionInitiationCollected": true,
    "jobTitle": "string",
    "payGroup": "string",
    "positionCode": "string",
    "reviewerCompanyNumber": "string",
    "reviewerEmployeeId": "string",
    "shift": "string",
    "supervisorCompanyNumber": "string",
    "supervisorEmployeeId": "string",
    "tipped": "string",
    "unionAffiliationDate": "string",
    "unionCode": "string",
    "unionPosition": "string",
    "workersCompensation": "string"
  },
  "disabilityDescription": "string",
  "emergencyContacts": [
    {
      "address1": "string",
      "address2": "string",
      "city": "string",
      "country": "string",
      "county": "string",
      "email": "string",
      "firstName": "string",
      "homePhone": "string",
      "lastName": "string",
      "mobilePhone": "string",
      "notes": "string",
      "pager": "string",
      "primaryPhone": "string",
      "priority": "string",
      "relationship": "string",
      "state": "string",
      "syncEmployeeInfo": true,
      "workExtension": "string",
      "workPhone": "string",
      "zip": "string"
    }
  ],
  "employeeId": "string",
  "ethnicity": "string",
  "federalTax": {
    "amount": 0,
    "deductionsAmount": 0,
    "dependentsAmount": 0,
    "exemptions": 0,
    "filingStatus": "string",
    "higherRate": true,
    "otherIncomeAmount": 0,
    "percentage": 0,
    "taxCalculationCode": "string",
    "w4FormYear": 0
  },
  "firstName": "string",
  "gender": "string",
  "homeAddress": {
    "address1": "string",
    "address2": "string",
    "city": "string",
    "country": "string",
    "county": "string",
    "emailAddress": "string",
    "mobilePhone": "string",
    "phone": "string",
    "postalCode": "string",
    "state": "string"
  },
  "isHighlyCompensated": true,
  "isSmoker": true,
  "lastName": "string",
  "localTax": [
    {
      "exemptions": 0,
      "exemptions2": 0,
      "filingStatus": "string",
      "residentPSD": "string",
      "taxCode": "string",
      "workPSD": "string"
    }
  ],
  "mainDirectDeposit": {
    "accountNumber": "string",
    "accountType": "string",
    "blockSpecial": true,
    "isSkipPreNote": true,
    "nameOnAccount": "string",
    "preNoteDate": "string",
    "routingNumber": "string"
  },
  "maritalStatus": "string",
  "middleName": "string",
  "nonPrimaryStateTax": {
    "amount": 0,
    "deductionsAmount": 0,
    "dependentsAmount": 0,
    "exemptions": 0,
    "exemptions2": 0,
    "filingStatus": "string",
    "higherRate": true,
    "otherIncomeAmount": 0,
    "percentage": 0,
    "reciprocityCode": "string",
    "specialCheckCalc": "string",
    "taxCalculationCode": "string",
    "taxCode": "string",
    "w4FormYear": 0
  },
  "ownerPercent": 0,
  "preferredName": "string",
  "primaryPayRate": {
    "annualSalary": 0,
    "baseRate": 0,
    "beginCheckDate": "string",
    "changeReason": "string",
    "defaultHours": 0,
    "effectiveDate": "string",
    "isAutoPay": true,
    "payFrequency": "string",
    "payGrade": "string",
    "payRateNote": "string",
    "payType": "string",
    "ratePer": "string",
    "salary": 0
  },
  "primaryStateTax": {
    "amount": 0,
    "deductionsAmount": 0,
    "dependentsAmount": 0,
    "exemptions": 0,
    "exemptions2": 0,
    "filingStatus": "string",
    "higherRate": true,
    "otherIncomeAmount": 0,
    "percentage": 0,
    "specialCheckCalc": "string",
    "taxCalculationCode": "string",
    "taxCode": "string",
    "w4FormYear": 0
  },
  "priorLastName": "string",
  "salutation": "string",
  "ssn": "string",
  "status": {
    "adjustedSeniorityDate": "string",
    "changeReason": "string",
    "effectiveDate": "string",
    "employeeStatus": "string",
    "hireDate": "string",
    "isEligibleForRehire": true,
    "reHireDate": "string",
    "statusType": "string",
    "terminationDate": "string"
  },
  "suffix": "string",
  "taxSetup": {
    "fitwExemptNotes": "string",
    "fitwExemptReason": "string",
    "futaExemptNotes": "string",
    "futaExemptReason": "string",
    "isEmployee943": true,
    "isPension": true,
    "isStatutory": true,
    "medExemptNotes": "string",
    "medExemptReason": "string",
    "sitwExemptNotes": "string",
    "sitwExemptReason": "string",
    "ssExemptNotes": "string",
    "ssExemptReason": "string",
    "suiExemptNotes": "string",
    "suiExemptReason": "string",
    "suiState": "string",
    "taxDistributionCode1099R": "string",
    "taxForm": "string"
  },
  "veteranDescription": "string",
  "webTime": {
    "badgeNumber": "string",
    "chargeRate": 0,
    "isTimeLaborEnabled": true
  },
  "workAddress": {
    "address1": "string",
    "address2": "string",
    "city": "string",
    "country": "string",
    "county": "string",
    "emailAddress": "string",
    "location": "string",
    "mailStop": "string",
    "mobilePhone": "string",
    "pager": "string",
    "phone": "string",
    "phoneExtension": "string",
    "postalCode": "string",
    "state": "string"
  },
  "workEligibility": {
    "alienOrAdmissionDocumentNumber": "string",
    "attestedDate": "string",
    "countryOfIssuance": "string",
    "foreignPassportNumber": "string",
    "i94AdmissionNumber": "string",
    "i9DateVerified": "string",
    "i9Notes": "string",
    "isI9Verified": true,
    "isSsnVerified": true,
    "ssnDateVerified": "string",
    "ssnNotes": "string",
    "visaType": "string",
    "workAuthorization": "string",
    "workUntil": "string"
  }
}
```

<h3 id="add-new-employee-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|companyId|path|string|true|Company Id|
|body|body|[employee](#schemaemployee)|true|Employee Model|
|» additionalDirectDeposit|body|[object]|false|Add up to 19 direct deposit accounts in addition to the main direct deposit account. IMPORTANT: A direct deposit update will remove ALL existing main and additional direct deposit information in WebPay and replace with information provided on the request. GET API will not return direct deposit data.|
|» » accountNumber|body|string \| null|false|Account number, entered without special characters and spaces. <br  />Max length: 17<br />|
|» » accountType|body|string \| null|false|Account type. Valid values are *C* (Checking), *S* (Saving), *P* (Pay Card). <br   />Max length: 1<br />|
|» » amount|body|number \| null|false|Amount value to be deposited to the account.<br  />Decimal (12,2)<br />|
|» » amountType|body|string \| null|false|Amount type to indicate the context of the amount. Common values are *F* (FLAT), *F-* (Net Minus), *P* (Percent). <br  /> Max length: 5<br />|
|» » blockSpecial|body|boolean \| null|false|Indicates if direct deposit should be blocked when special check types such as Bonus are processed.<br />|
|» » isSkipPreNote|body|boolean \| null|false|Indicates if account will not pre-note.<br />|
|» » nameOnAccount|body|string \| null|false|Name on the bank account. Defaults to employee's name. <br  />Max length: 30<br />|
|» » preNoteDate|body|string(paylocity-date) \| null|false|Date to end the pre-note of the account. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.<br />|
|» » routingNumber|body|string \| null|false|ABA Transit Routing Number, entered without dashes or spaces. <br  />Max length: 9<br />|
|» additionalRate|body|[object]|false|Add Additional Rates.|
|» » changeReason|body|string \| null|false|Not required. If populated, must match one of the system coded values available in the Additional Rates Change Reason drop down.<br />|
|» » costCenter1|body|string \| null|false|Not required. Valid values must match one of the system coded cost centers available in the Additional Rates Cost Center level 1 drop down. This cell must be in a text format.<br />|
|» » costCenter2|body|string \| null|false|Not required. Valid values must match one of the system coded cost centers available in the Additional Rates Cost Center level 2 drop down. This cell must be in a text format.<br />|
|» » costCenter3|body|string \| null|false|Not required. Valid values must match one of the system coded cost centers available in the Additional Rates Cost Center level 3 drop down. This cell must be in a text format.<br />|
|» » effectiveDate|body|string(paylocity-date) \| null|false|Required. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.<br />|
|» » endCheckDate|body|string(paylocity-date) \| null|false|Not required. Must match one of the system coded check dates available in the Additional Rates End Check Date drop down. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.<br />|
|» » job|body|string \| null|false|Not required. If populated, must match one of the system coded values available in the Additional Rates Job drop down.<br />|
|» » rate|body|number \| null|false|Required. Enter dollar amount that corresponds to the Per selection.<br />|
|» » rateCode|body|string \| null|false|Required. If populated, must match one of the system coded values available in the Additional Rates Rate Code drop down.<br />|
|» » rateNotes|body|string \| null|false|Not required.<br  />Max length: 4000<br />|
|» » ratePer|body|string \| null|false|Required. Valid values are HOUR or WEEK.<br />|
|» » shift|body|string \| null|false|Not required. If populated, must match one of the system coded values available in the Additional Rates Shift drop down.<br />|
|» benefitSetup|body|object|false| Add or update setup values used for employee benefits integration, insurance plan settings, and ACA reporting.|
|» » benefitClass|body|string \| null|false|Benefit Class code. Values are configured in Web Pay Company > Setup > Benefits > Classes.<br  />Max length: 30|
|» » benefitClassEffectiveDate|body|string(paylocity-date) \| null|false|Date when Benefit Class takes effect. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.|
|» » benefitSalary|body|number \| null|false|Salary used to configure benefits.<br  />Decimal(12,2)|
|» » benefitSalaryEffectiveDate|body|string(paylocity-date) \| null|false|Date when Benefit Salary takes effect. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.|
|» » doNotApplyAdministrativePeriod|body|boolean \| null|false|Applicable only for HR Enhanced clients and Benefit Classes with ACA Employment Type of Full Time.|
|» » isMeasureAcaEligibility|body|boolean \| null|false|Only valid for HR Enhanced clients and Benefit Classes that are ACA Employment Type of Full Time.|
|» birthDate|body|string(paylocity-date) \| null|false|Employee birthdate. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.|
|» coEmpCode|body|string \| null|false|Unique idenifier for SSO.<br  />Max length: 20|
|» companyFEIN|body|string \| null|false|Company FEIN as defined in Web Pay, applicable with GET requests only.<br  /> Max length: 20|
|» companyName|body|string \| null|false|Company name as defined in Web Pay, applicable with GET requests only.<br  /> Max length: 50|
|» currency|body|string \| null|false|Employee is paid in this currency. <br  />Max length: 30|
|» customBooleanFields|body|[object]|false|Up to 8 custom fields of boolean (checkbox) type value.|
|» » category|body|string|true|The custom field category.  Acceptable value is 'PayrollAndHR'.|
|» » label|body|string \| null|true|The custom field label whose value is to be added/updated. Must match to the label defined in Web Pay Custom Fields setup.  Max length: 255.|
|» » value|body|boolean \| null|true|The custom boolean field value.|
|» customDateFields|body|[object]|false|Up to 8 custom fields of the date type value.|
|» » category|body|string|true|The custom field category.  Acceptable value is 'PayrollAndHR'.|
|» » label|body|string \| null|true|The custom field label whose value is to be added/updated.  Must match to the label defined in Web Pay Custom Fields setup.  Max length: 255.|
|» » value|body|string(paylocity-date) \| null|true|The custom date field value.  Common formats include MM-DD-CCYY, CCYY-MM-DD.|
|» customDropDownFields|body|[object]|false|Up to 8 custom fields of the dropdown type value.|
|» » category|body|string|true|The custom field category.  Acceptable value is 'PayrollAndHR'.|
|» » label|body|string \| null|true|The custom field label whose value is to be added/updated.  Must match to the label defined in Web Pay Custom Fields setup.  Max length: 255.|
|» » value|body|string \| null|true|The custom dropdown field value.  Values are configured in Web Pay Company > Setup > List Values > Lookup Values > Custom Fields: PayrollAndHR.  Max length: 10.|
|» customNumberFields|body|[object]|false|Up to 8 custom fields of numeric type value.|
|» » category|body|string|true|The custom field category.  Acceptable value is 'PayrollAndHR'.|
|» » label|body|string \| null|true|The custom field label whose value is to be added/updated.  Must match to the label defined in Web Pay Custom Fields setup.  Max length: 255.|
|» » value|body|number \| null|true|The custom number field value.  Decimal (18,6).|
|» customTextFields|body|[object]|false|Up to 8 custom fields of text type value.|
|» » category|body|string|true|The custom field category.  Acceptable value is 'PayrollAndHR'.|
|» » label|body|string \| null|true|The custom field label whose value is to be added/updated.  Must match to the label defined in Web Pay Custom Fields setup.  Max length: 255.|
|» » value|body|string \| null|true|The custom text field value.  Max length: 255.|
|» departmentPosition|body|object|false|Add or update home department cost center, position, supervisor, reviewer, employment type, EEO class, pay settings, and union information.|
|» » changeReason|body|string \| null|false|Employee department/position change reason. Must match Company setup. <br  />Max length: 15|
|» » clockBadgeNumber|body|string \| null|false|Employee clock badge number. Defaults to employeeId. <br  />Max length: 10|
|» » costCenter1|body|string \| null|false|Employer defined location, like *branch, division, department*, etc. Must match Company setup. <br  />Max length: 10|
|» » costCenter2|body|string \| null|false|Employer defined location, like *branch, division, department*, etc. Must match Company setup. <br  />Max length: 10|
|» » costCenter3|body|string \| null|false|Employer defined location, like *branch, division, department*, etc. Must match Company setup. <br  />Max length: 10|
|» » effectiveDate|body|string(paylocity-date) \| null|false|The date the position takes effect. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.|
|» » employeeType|body|string \| null|false|Employee current employment type. Common values *RFT (Regular Full Time), RPT (Regular Part Time), SNL (Seasonal), TFT (Temporary Full Time), TPT (Temporary Part Time)*. <br  />Max length: 10|
|» » equalEmploymentOpportunityClass|body|string \| null|false|Values are configured in Company > Setup > HR > EEO Classes.<br  /> Max length: 10|
|» » isMinimumWageExempt|body|boolean \| null|false|Indicates if employee is exempt from minimum wage.|
|» » isOvertimeExempt|body|boolean \| null|false|Indicates if employee is exempt from overtime.|
|» » isSupervisorReviewer|body|boolean \| null|false|Indicates if employee is a supervisor or reviewer.|
|» » isUnionDuesCollected|body|boolean \| null|false|Indicates if union dues are collected.|
|» » isUnionInitiationCollected|body|boolean \| null|false|Indicates if initiations fees are collected.|
|» » jobTitle|body|string \| null|false|Employee current job title. <br  />Max length: 50|
|» » payGroup|body|string \| null|false|Employee pay group. Must match Company setup. <br  /> Max length: 20|
|» » positionCode|body|string \| null|false|Employee position code. Must match Company setup.<br  />Max length: 20|
|» » reviewerCompanyNumber|body|string \| null|false|Company number of reviewer.<br />Max length: 9|
|» » reviewerEmployeeId|body|string \| null|false|Employee id of the reviewer.<br />Max length: 10|
|» » shift|body|string \| null|false|Employee work shift.<br  />Max length: 255|
|» » supervisorCompanyNumber|body|string \| null|false|Supervisor's company number. Defaults to employee company number.<br  />Max length: 9|
|» » supervisorEmployeeId|body|string \| null|false|EmployeeId of the supervisor. <br  />Max length: 10|
|» » tipped|body|string \| null|false|Indicates if employee receives tips.|
|» » unionAffiliationDate|body|string(paylocity-date) \| null|false|Employee union affiliation effective date. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.|
|» » unionCode|body|string \| null|false|Employee union code. Must match Company setup. <br  />Max length: 10|
|» » unionPosition|body|string \| null|false|Employee union position. Must match Company setup. <br  />Max length: 30|
|» » workersCompensation|body|string \| null|false|Employee worker compensation code. Must match Company setup.<br  /> Max length: 10|
|» disabilityDescription|body|string \| null|false|Indicates if employee has disability status.|
|» emergencyContacts|body|[object]|false|Add or update Emergency Contacts.|
|» » address1|body|string \| null|false|1st address line.|
|» » address2|body|string \| null|false|2nd address line.|
|» » city|body|string \| null|false|City.|
|» » country|body|string \| null|false|County.|
|» » county|body|string \| null|false|Country.  Must be a valid 3 character country code.  Common values are *USA* (United States), *CAN* (Canada).|
|» » email|body|string \| null|false|Contact email.  Must be valid email address format.|
|» » firstName|body|string \| null|true|Required. Contact first name. <br  />Max length: 40|
|» » homePhone|body|string \| null|false|Contact Home Phone.  Valid phone format  *(###) #######* or *######-####* or *### ### ####* or *##########* or, if international, starts with *+#*, only spaces and digits allowed.|
|» » lastName|body|string \| null|true|Required. Contact last name. <br  />Max length: 40|
|» » mobilePhone|body|string \| null|false|Contact Mobile Phone.  Valid phone format  *(###) #######* or *######-####* or *### ### ####* or *##########* or, if international, starts with *+#*, only spaces and digits allowed.|
|» » notes|body|string \| null|false|Notes. <br  />Max length: 1000|
|» » pager|body|string \| null|false|Contact Pager.  Valid phone format  *(###) #######* or *######-####* or *### ### ####* or *##########* or, if international, starts with *+#*, only spaces and digits allowed.|
|» » primaryPhone|body|string \| null|false|Required. Contact primary phone type.  Must match Company setup.  Valid  values are H (Home), M (Mobile), P (Pager), W (Work)|
|» » priority|body|string \| null|false|Required. Contact priority. Valid values are *P* (Primary) or *S* (Secondary).|
|» » relationship|body|string \| null|false|Required. Contact relationship.  Must match Company setup.  Common values are Spouse, Mother, Father.|
|» » state|body|string \| null|false|State or Province.  If U.S. address, must be valid 2 character state code.  Common values are *IL* (Illinois), *CA* (California).|
|» » syncEmployeeInfo|body|boolean|false|Valid values are *true* or *false*.|
|» » workExtension|body|string \| null|false|Work Extension.|
|» » workPhone|body|string \| null|false|Contact Work Phone.  Valid phone format  *(###) #######* or *######-####* or *### ### ####* or *##########* or, if international, starts with *+#*, only spaces and digits allowed.|
|» » zip|body|string \| null|false|Postal code.  If U.S. address, must be a valid zip code.|
|» employeeId|body|string \| null|false|Leave blank to have Web Pay automatically assign the next available employee ID.<br  />Max length: 9|
|» ethnicity|body|string \| null|false|Employee ethnicity.<br  /> Max length: 10|
|» federalTax|body|object|false|Add or update federal tax amount type (taxCalculationCode), amount or percentage, filing status, and exemptions.|
|» » amount|body|number \| null|false|Tax amount. <br  />Decimal (12,2)|
|» » deductionsAmount|body|number|false|Box 4(b) on form W4 (year 2020 or later): Deductions amount. <br  />Decimal (12,2)|
|» » dependentsAmount|body|number|false|Box 3 on form W4 (year 2020 or later): Total dependents amount. <br  />Decimal (12,2)|
|» » exemptions|body|number \| null|false|Federal tax exemptions value. <br  />Decimal (12,2)|
|» » filingStatus|body|string \| null|false|Employee federal filing status. Common values are *S* (Single), *M* (Married).<br  />Max length: 50|
|» » higherRate|body|boolean|false|Box 2(c) on form W4 (year 2020 or later): Multiple Jobs or Spouse Works. <br  />Boolean|
|» » otherIncomeAmount|body|number|false|Box 4(a) on form W4 (year 2020 or later): Other income amount. <br  />Decimal (12,2)|
|» » percentage|body|number \| null|false|Tax percentage. <br  />Decimal (12,2)|
|» » taxCalculationCode|body|string \| null|false|Tax calculation code. Common values are *F* (Flat), *P* (Percentage), *FDFP* (Flat Dollar Amount plus Fixed Percentage). <br  />Max length: 10|
|» » w4FormYear|body|integer|false|The federal W4 form year <br  />Integer|
|» firstName|body|string \| null|false|Employee first name. <br  />Max length: 40|
|» gender|body|string \| null|false|Employee gender. Common values *M* (Male), *F* (Female). <br  />Max length: 1|
|» homeAddress|body|object|false|Add or update employee's home address, personal phone numbers, and personal email.|
|» » address1|body|string \| null|false|1st address line.<br  /> Max length: 40|
|» » address2|body|string \| null|false|2nd address line. <br  /> Max length: 40|
|» » city|body|string \| null|false|City.<br  /> Max length: 40|
|» » country|body|string \| null|false|Country.<br  /> Max length: 30|
|» » county|body|string \| null|false|County.<br  /> Max length: 30|
|» » emailAddress|body|string \| null|false|Email. <br  />Max length: 50|
|» » mobilePhone|body|string \| null|false|Mobile phone number.<br  /> Max length: 20|
|» » phone|body|string \| null|false|Phone number.<br  /> Max length: 20|
|» » postalCode|body|string \| null|false|Postal code.<br  /> Max length: 10|
|» » state|body|string \| null|false|State or province.<br  /> Max length: 2|
|» isHighlyCompensated|body|boolean|false|Indicates if employee meets the highly compensated employee criteria.|
|» isSmoker|body|boolean|false|Indicates if employee is a smoker.|
|» lastName|body|string \| null|false|Employee last name. <br  />Max length: 40|
|» localTax|body|[object]|false|Add, update, or delete local tax code, filing status, and exemptions including  PA-PSD taxes.|
|» » exemptions|body|number \| null|false|Local tax exemptions value.<br  />Decimal (12,2)|
|» » exemptions2|body|number \| null|false|Local tax exemptions 2 value.<br  />Decimal (12,2)|
|» » filingStatus|body|string \| null|false|Employee local tax filing status. Must match specific local tax setup. <br  /> Max length: 50|
|» » residentPSD|body|string \| null|false|Resident PSD (political subdivision code) applicable in PA. Must match Company setup.<br  /> Max length: 9|
|» » taxCode|body|string \| null|false|Local tax code.<br  />Max length: 50|
|» » workPSD|body|string \| null|false|Work location PSD. Must match Company setup. <br  /> Max length: 9|
|» mainDirectDeposit|body|object|false|Add the main direct deposit account. After deposits are made to any additional direct deposit accounts, the remaining net check is deposited in the main direct deposit account. IMPORTANT: A direct deposit update will remove ALL existing main and additional direct deposit information in WebPay and replace with what is provided on the request. GET API will not return direct deposit data.|
|» » accountNumber|body|string \| null|false|Account number, entered without special characters and spaces. <br  />Max length: 17|
|» » accountType|body|string \| null|false|Account type. Valid values are *C* (Checking), *S* (Saving), *P* (Pay Card). <br   />Max length: 1|
|» » blockSpecial|body|boolean \| null|false|Indicates if direct deposit should be blocked when special check types such as Bonus are processed.<br />|
|» » isSkipPreNote|body|boolean \| null|false|Indicates if account will not pre-note.|
|» » nameOnAccount|body|string \| null|false|Name on the bank account. Defaults to employee's name. <br  />Max length: 30<br />|
|» » preNoteDate|body|string(paylocity-date) \| null|false|Date to end the pre-note of the account. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.|
|» » routingNumber|body|string \| null|false|ABA Transit Routing Number, entered without dashes or spaces. <br  />Max length: 9|
|» maritalStatus|body|string \| null|false|Employee marital status. Common values *D (Divorced), M (Married), S (Single), W (Widowed)*. <br  />Max length: 10|
|» middleName|body|string \| null|false|Employee middle name.<br  /> Max length: 20|
|» nonPrimaryStateTax|body|object|false|Add or update non-primary state tax code, amount type (taxCalculationCode), amount or percentage, filing status, exemptions, supplemental check (specialCheckCalc), and reciprocity code information.|
|» » amount|body|number \| null|false|State tax code.<br  /> Max length: 50|
|» » deductionsAmount|body|number|false|Box 4(b) on form W4 (year 2020 or later): Deductions amount. <br  />Decimal (12,2)|
|» » dependentsAmount|body|number|false|Box 3 on form W4 (year 2020 or later): Total dependents amount. <br  />Decimal (12,2)|
|» » exemptions|body|number \| null|false|State tax exemptions value.<br  />Decimal (12,2)|
|» » exemptions2|body|number \| null|false|State tax exemptions 2 value.<br  />Decimal (12,2)|
|» » filingStatus|body|string \| null|false|Employee state tax filing status. Common values are *S* (Single), *M* (Married).<br  />Max length: 50|
|» » higherRate|body|boolean|false|Box 2(c) on form W4 (year 2020 or later): Multiple Jobs or Spouse Works. <br  />Boolean|
|» » otherIncomeAmount|body|number|false|Box 4(a) on form W4 (year 2020 or later): Other income amount. <br  />Decimal (12,2)|
|» » percentage|body|number \| null|false|State Tax percentage. <br  />Decimal (12,2)|
|» » reciprocityCode|body|string \| null|false|Non-primary state tax reciprocity code.<br  /> Max length: 50|
|» » specialCheckCalc|body|string \| null|false|Supplemental check calculation code. Common values are *Blocked* (Taxes blocked on Supplemental checks), *Supp* (Use supplemental Tax Rate-Code). <br  />Max length: 10|
|» » taxCalculationCode|body|string \| null|false|Tax calculation code. Common values are *F* (Flat), *P* (Percentage), *FDFP* (Flat Dollar Amount plus Fixed Percentage). <br  />Max length: 10|
|» » taxCode|body|string \| null|false|State tax code.<br  /> Max length: 50|
|» » w4FormYear|body|integer|false|The state W4 form year <br  />Integer|
|» ownerPercent|body|number \| null|false|Percentage of employee's ownership in the company, entered as a whole number. <br  /> Decimal (12,2)|
|» preferredName|body|string \| null|false|Employee preferred display name.<br  /> Max length: 20|
|» primaryPayRate|body|object|false|Add or update hourly or salary pay rate, effective date, and pay frequency.|
|» » annualSalary|body|number \| null|false|Employee annual salary.<br />Decimal (12,6)|
|» » baseRate|body|number \| null|false|Employee base rate, used for Hourly employees. <br  />Decimal (12,6)|
|» » beginCheckDate|body|string(paylocity-date) \| null|false|The date of the first check on which the new pay rate will appear. This value is only applicable when updating an existing employee. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.|
|» » changeReason|body|string \| null|false|Pay rate change reason.<br  /> Max length: 30|
|» » defaultHours|body|number \| null|false|Employee default hours consistently worked. If autoPayType is set to D, employee will be paid hourly base rate for the defaultHours. <br  />Decimal (12,2)|
|» » effectiveDate|body|string(paylocity-date) \| null|false|The date the employee's pay rate takes effect. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.|
|» » isAutoPay|body|boolean \| null|false|If set to *True*, employee will be paid automatically using deafultHours.|
|» » payFrequency|body|string \| null|false|Employee current pay frequency. Common values are *A (Annual), B (Bi-Weekly), D (Daily), M (Monthly), S (Semi-Monthly), Q (Quarterly), W (Weekly)*. <br  />Max length: 5|
|» » payGrade|body|string \| null|false|Employee pay grade. Must match Company setup. <br  /> Max length: 10|
|» » payRateNote|body|string \| null|false|Pay rate notes regarding employee.<br  /> Max length: 250|
|» » payType|body|string \| null|false|Employee pay type (rate code). Valid values are *Hourly* or *Salary*. <br  />Max length: 10|
|» » ratePer|body|string \| null|false|Employee base rate frequency used with payType Hourly. Common values are *Hour, Week*. Default is Hour. <br  />Max length: 10|
|» » salary|body|number \| null|false|Employee gross salary per pay period used with payType Salary.<br  />Decimal (12,6)|
|» primaryStateTax|body|object|false|Add or update primary state tax code, amount type (taxCalculationCode), amount or percentage, filing status, exemptions, and supplemental check (specialCheckCalc) information. Only one primary state is allowed. Sending an updated primary state will replace the current primary state.|
|» » amount|body|number \| null|false|State tax code.<br  /> Max length: 50|
|» » deductionsAmount|body|number|false|Box 4(b) on form W4 (year 2020 or later): Deductions amount. <br  />Decimal (12,2)|
|» » dependentsAmount|body|number|false|Box 3 on form W4 (year 2020 or later): Total dependents amount. <br  />Decimal (12,2)|
|» » exemptions|body|number \| null|false|State tax exemptions value.<br  />Decimal (12,2)|
|» » exemptions2|body|number \| null|false|State tax exemptions 2 value.<br  />Decimal (12,2)|
|» » filingStatus|body|string \| null|false|Employee state tax filing status. Common values are *S* (Single), *M* (Married).<br  />Max length: 50|
|» » higherRate|body|boolean|false|Box 2(c) on form W4 (year 2020 or later): Multiple Jobs or Spouse Works. <br  />Boolean|
|» » otherIncomeAmount|body|number|false|Box 4(a) on form W4 (year 2020 or later): Other income amount. <br  />Decimal (12,2)|
|» » percentage|body|number \| null|false|State Tax percentage. <br  />Decimal (12,2)|
|» » specialCheckCalc|body|string \| null|false|Supplemental check calculation code. Common values are *Blocked* (Taxes blocked on Supplemental checks), *Supp* (Use supplemental Tax Rate-Code). <br  />Max length: 10|
|» » taxCalculationCode|body|string \| null|false|Tax calculation code. Common values are *F* (Flat), *P* (Percentage), *FDFP* (Flat Dollar Amount plus Fixed Percentage). <br  />Max length: 10|
|» » taxCode|body|string \| null|false|State tax code.<br  /> Max length: 50|
|» » w4FormYear|body|integer|false|The state W4 form year <br  />Integer|
|» priorLastName|body|string \| null|false|Prior last name if applicable.<br  />Max length: 40|
|» salutation|body|string \| null|false|Employee preferred salutation. <br  />Max length: 10|
|» ssn|body|string \| null|false|Employee social security number. Leave it blank if valid social security number not available. <br  />Max length: 11|
|» status|body|object|false|Add or update employee status, change reason, effective date, and adjusted seniority date. Note that companies that are still in Implementation cannot hire future employees.|
|» » adjustedSeniorityDate|body|string(paylocity-date) \| null|false|Adjusted seniority date. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.|
|» » changeReason|body|string \| null|false|Employee status change reason. Must match Company setup.<br  /> Max length: 15|
|» » effectiveDate|body|string(paylocity-date) \| null|false|Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.|
|» » employeeStatus|body|string \| null|false|Employee current work status. Common values are *A* (Active), *L* (Leave of Absence), *T* (Terminated). <br  />Max length: 20|
|» » hireDate|body|string(paylocity-date) \| null|false|Employee hired date. Updates to hire date are not allowed and will be ignored. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.|
|» » isEligibleForRehire|body|boolean \| null|false|Indicates if employee eligible for rehire.|
|» » reHireDate|body|string(paylocity-date) \| null|false|Rehire date if employee is rehired.  Updates to re-hire date are not allowed and will be ignored. Common formats are *MM-DD-CCYY, CCYY-MM-DD*.|
|» » statusType|body|string \| null|false|The Status Type associated with the Employee Status code. Each Employee Status  code for a company is assigned to one of the Status Type values of  A (Active), L (Leave of Absence), T (Terminated).|
|» » terminationDate|body|string(paylocity-date) \| null|false|Employee termination date. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.|
|» suffix|body|string \| null|false|Employee name suffix. Common values are *Jr, Sr, II*.<br  />Max length: 30|
|» taxSetup|body|object|false|Add tax form, 1099 exempt reasons and notes, and 943 agricultural employee information. Once the employee receives wages, this information cannot be updated. Add or update SUI tax state, retirement plan, and statutory information.|
|» » fitwExemptNotes|body|string \| null|false|Notes for FITW exemption.<br  /> Max length: 250|
|» » fitwExemptReason|body|string \| null|false|Reason code for FITW exemption. Common values are *SE* (Statutory employee), *CR* (clergy/Religious). <br  /> Max length: 30|
|» » futaExemptNotes|body|string \| null|false|Notes for FUTA exemption.<br  /> Max length: 250|
|» » futaExemptReason|body|string \| null|false|Reason code for FUTA exemption. Common values are *501* (5019c)(3) Organization), *IC* (Independent Contractor).<br  /> Max length: 30|
|» » isEmployee943|body|boolean|false|Indicates if employee in agriculture or farming.|
|» » isPension|body|boolean|false|Indicates if employee is eligible for pension.|
|» » isStatutory|body|boolean|false|Indicates if employee is statutory.|
|» » medExemptNotes|body|string \| null|false|Notes for Medicare exemption.<br  /> Max length: 250|
|» » medExemptReason|body|string \| null|false|Reason code for Medicare exemption. Common values are *501* (5019c)(3) Organization), *IC* (Independent Contractor).<br  /> Max length: 30|
|» » sitwExemptNotes|body|string \| null|false|Notes for SITW exemption.<br  /> Max length: 250|
|» » sitwExemptReason|body|string \| null|false|Reason code for SITW exemption. Common values are *SE* (Statutory employee), *CR* (clergy/Religious). <br  /> Max length: 30|
|» » ssExemptNotes|body|string \| null|false|Notes for Social Security exemption.<br  /> Max length: 250|
|» » ssExemptReason|body|string \| null|false|Reason code for Social Security exemption. Common values are *SE* (Statutory employee), *CR* (clergy/Religious). <br  /> Max length: 30|
|» » suiExemptNotes|body|string \| null|false|Notes for SUI exemption.<br  /> Max length: 250|
|» » suiExemptReason|body|string \| null|false|Reason code for SUI exemption. Common values are *SE* (Statutory employee), *CR* (clergy/Religious). <br  /> Max length: 30|
|» » suiState|body|string \| null|false|Employee SUI (State Unemployment Insurance) state. <br  />Max length: 2|
|» » taxDistributionCode1099R|body|string \| null|false|Employee 1099R distribution code. Common values are *7* (Normal Distribution), *F* (Charitable Gift Annuity). <br  />Max length: 1|
|» » taxForm|body|string \| null|false|Employee tax form for reporting income. Valid values are *W2, 1099M, 1099R*. Default is W2. <br  />Max length: 15|
|» veteranDescription|body|string \| null|false|Indicates if employee is a veteran.|
|» webTime|body|object|false|Add or update Web Time badge number and charge rate and synchronize Web Pay and Web Time employee data.|
|» » badgeNumber|body|string \| null|false|Badge number usually issued for time and attendance system use. <br  />Max length: 50|
|» » chargeRate|body|number \| null|false|Rate to be charged to third party for time worked by the employee. It is most commonly referenced in the Cost Center Charge, Cost Center Charge vs. Cost Reports, and the Customer Invoice time and attendance reports. <br  />Decimal (12,2)|
|» » isTimeLaborEnabled|body|boolean \| null|false|If set to true, changes to employee data will be reflected in Web Time.|
|» workAddress|body|object|false|Add or update employee's work address, phone numbers, and email. Work Location drop down field is not included.|
|» » address1|body|string \| null|false|1st address line.<br  /> Max length: 40|
|» » address2|body|string \| null|false|2nd address line. <br  /> Max length: 40|
|» » city|body|string \| null|false|City.<br  /> Max length: 40|
|» » country|body|string \| null|false|Country.<br  /> Max length: 30|
|» » county|body|string \| null|false|County.<br  /> Max length: 30|
|» » emailAddress|body|string \| null|false|Email. <br  />Max length: 50|
|» » location|body|string \| null|false|Work Location name. <br />Max length: 50|
|» » mailStop|body|string \| null|false|Employee mail stop.<br  /> Max length: 10|
|» » mobilePhone|body|string \| null|false|Mobile phone number.<br  /> Max length: 20|
|» » pager|body|string \| null|false|Employee pager number.<br  /> Max length: 20|
|» » phone|body|string \| null|false|Phone number.<br  /> Max length: 20|
|» » phoneExtension|body|string \| null|false|Phone number extension.<br  /> Max length: 10|
|» » postalCode|body|string \| null|false|Postal code.<br  /> Max length: 10|
|» » state|body|string \| null|false|State or province.<br  /> Max length: 2|
|» workEligibility|body|object|false|Add or update I-9 work authorization information.|
|» » alienOrAdmissionDocumentNumber|body|string \| null|false|Employee USCIS or Admission Number. <br  /> Must be 7-10 characters and may begin with an 'A'|
|» » attestedDate|body|string(paylocity-date) \| null|false|The date the I-9 Verification form was attested by Employer or Authorized representative. Common formats are *MM-DD-CCYY, CCYY-MM-DD*.|
|» » countryOfIssuance|body|string \| null|false|If Foreign Passport number is provided, provide its country of issuance. Must match Paylocity setup.<br  /> Max length: 30|
|» » foreignPassportNumber|body|string \| null|false|Foreign Passport Number.<br  /> Max length: 50|
|» » i94AdmissionNumber|body|string \| null|false|Form I-94 admission number.<br  /> Must be 11 numeric characters|
|» » i9DateVerified|body|string(paylocity-date) \| null|false|Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.|
|» » i9Notes|body|string \| null|false|Notes regarding employee's i9.<br  /> Max length: 4000|
|» » isI9Verified|body|boolean \| null|false|Indicates if employee I9 is verified.|
|» » isSsnVerified|body|boolean \| null|false|Indicates if employee SSN is verified.|
|» » ssnDateVerified|body|string(paylocity-date) \| null|false|The date of employer verification of employee SSN. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.|
|» » ssnNotes|body|string \| null|false|Notes regarding employee's SSN.<br  /> Max length: 4000|
|» » visaType|body|string \| null|false|Employee Visa type. Must match one of the system coded values.<br  /> Max length: 100|
|» » workAuthorization|body|string \| null|false|Employee work authorization. Must match one of the system coded values.<br  /> Max length: 100|
|» » workUntil|body|string(paylocity-date) \| null|false|End date of employee work eligibility.  Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » category|PayrollAndHR|
|» » category|PayrollAndHR|
|» » category|PayrollAndHR|
|» » category|PayrollAndHR|
|» » category|PayrollAndHR|

> Example responses

> 201 Response

```json
{
  "employeeId": "string"
}
```

> 400 Response

```json
[
  {
    "field": "string",
    "message": "string",
    "options": [
      {
        "code": "string",
        "description": "string"
      }
    ],
    "path": "string"
  }
]
```

> 500 Response

```json
[
  {
    "field": "string",
    "message": "string",
    "options": [
      {
        "code": "string",
        "description": "string"
      }
    ],
    "path": "string"
  }
]
```

<h3 id="add-new-employee-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Successfully added|[employeeIdResponse](#schemaemployeeidresponse)|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|429|Too Many Requests|Too Many Requests|None|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="add-new-employee-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[error](#schemaerror)]|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
paylocity_auth ( Scopes: WebLinkAPI )
</aside>

## Get all employees

<a id="opIdGet all employees"></a>

> Code samples

```bash
curl https://example.com/v2/companies/string/employees/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/companies/{companyId}/employees/`

Get All Employees API will return employee data currently available in Web Pay.

<h3 id="get-all-employees-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|companyId|path|string|true|Company Id|
|pagesize|query|integer|false|Number of records per page. Default value is 25.|
|pagenumber|query|integer|false|Page number to retrieve; page numbers are 0-based (so to get the first page of results, pass pagenumber=0). Default value is 0.|
|includetotalcount|query|boolean|false|Whether to include the total record count in the header's X-Pcty-Total-Count property. Default value is true.|

> Example responses

> 200 Response

```json
[
  {
    "employeeId": "string",
    "statusCode": "string",
    "statusTypeCode": "string"
  }
]
```

> 404 Response

```json
[
  {
    "field": "string",
    "message": "string",
    "options": [
      {
        "code": "string",
        "description": "string"
      }
    ],
    "path": "string"
  }
]
```

> 500 Response

```json
[
  {
    "field": "string",
    "message": "string",
    "options": [
      {
        "code": "string",
        "description": "string"
      }
    ],
    "path": "string"
  }
]
```

<h3 id="get-all-employees-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully Retrieved|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|The company does not exist|Inline|
|429|Too Many Requests|Too Many Requests|None|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="get-all-employees-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[employeeInfo](#schemaemployeeinfo)]|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[error](#schemaerror)]|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
paylocity_auth ( Scopes: WebLinkAPI )
</aside>

## Get employee

<a id="opIdGet employee"></a>

> Code samples

```bash
curl https://example.com/v2/companies/string/employees/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/companies/{companyId}/employees/{employeeId}`

Get Employee API will return employee data currently available in Web Pay.

<h3 id="get-employee-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|companyId|path|string|true|Company Id|
|employeeId|path|string|true|Employee Id|

> Example responses

> 200 Response

```json
{
  "additionalDirectDeposit": [
    {
      "accountNumber": "string",
      "accountType": "string",
      "amount": 0,
      "amountType": "string",
      "blockSpecial": true,
      "isSkipPreNote": true,
      "nameOnAccount": "string",
      "preNoteDate": "string",
      "routingNumber": "string"
    }
  ],
  "additionalRate": [
    {
      "changeReason": "string",
      "costCenter1": "string",
      "costCenter2": "string",
      "costCenter3": "string",
      "effectiveDate": "string",
      "endCheckDate": "string",
      "job": "string",
      "rate": 0,
      "rateCode": "string",
      "rateNotes": "string",
      "ratePer": "string",
      "shift": "string"
    }
  ],
  "benefitSetup": {
    "benefitClass": "string",
    "benefitClassEffectiveDate": "string",
    "benefitSalary": 0,
    "benefitSalaryEffectiveDate": "string",
    "doNotApplyAdministrativePeriod": true,
    "isMeasureAcaEligibility": true
  },
  "birthDate": "string",
  "coEmpCode": "string",
  "companyFEIN": "string",
  "companyName": "string",
  "currency": "string",
  "customBooleanFields": [
    {
      "category": "PayrollAndHR",
      "label": "string",
      "value": true
    }
  ],
  "customDateFields": [
    {
      "category": "PayrollAndHR",
      "label": "string",
      "value": "string"
    }
  ],
  "customDropDownFields": [
    {
      "category": "PayrollAndHR",
      "label": "string",
      "value": "string"
    }
  ],
  "customNumberFields": [
    {
      "category": "PayrollAndHR",
      "label": "string",
      "value": 0
    }
  ],
  "customTextFields": [
    {
      "category": "PayrollAndHR",
      "label": "string",
      "value": "string"
    }
  ],
  "departmentPosition": {
    "changeReason": "string",
    "clockBadgeNumber": "string",
    "costCenter1": "string",
    "costCenter2": "string",
    "costCenter3": "string",
    "effectiveDate": "string",
    "employeeType": "string",
    "equalEmploymentOpportunityClass": "string",
    "isMinimumWageExempt": true,
    "isOvertimeExempt": true,
    "isSupervisorReviewer": true,
    "isUnionDuesCollected": true,
    "isUnionInitiationCollected": true,
    "jobTitle": "string",
    "payGroup": "string",
    "positionCode": "string",
    "reviewerCompanyNumber": "string",
    "reviewerEmployeeId": "string",
    "shift": "string",
    "supervisorCompanyNumber": "string",
    "supervisorEmployeeId": "string",
    "tipped": "string",
    "unionAffiliationDate": "string",
    "unionCode": "string",
    "unionPosition": "string",
    "workersCompensation": "string"
  },
  "disabilityDescription": "string",
  "emergencyContacts": [
    {
      "address1": "string",
      "address2": "string",
      "city": "string",
      "country": "string",
      "county": "string",
      "email": "string",
      "firstName": "string",
      "homePhone": "string",
      "lastName": "string",
      "mobilePhone": "string",
      "notes": "string",
      "pager": "string",
      "primaryPhone": "string",
      "priority": "string",
      "relationship": "string",
      "state": "string",
      "syncEmployeeInfo": true,
      "workExtension": "string",
      "workPhone": "string",
      "zip": "string"
    }
  ],
  "employeeId": "string",
  "ethnicity": "string",
  "federalTax": {
    "amount": 0,
    "deductionsAmount": 0,
    "dependentsAmount": 0,
    "exemptions": 0,
    "filingStatus": "string",
    "higherRate": true,
    "otherIncomeAmount": 0,
    "percentage": 0,
    "taxCalculationCode": "string",
    "w4FormYear": 0
  },
  "firstName": "string",
  "gender": "string",
  "homeAddress": {
    "address1": "string",
    "address2": "string",
    "city": "string",
    "country": "string",
    "county": "string",
    "emailAddress": "string",
    "mobilePhone": "string",
    "phone": "string",
    "postalCode": "string",
    "state": "string"
  },
  "isHighlyCompensated": true,
  "isSmoker": true,
  "lastName": "string",
  "localTax": [
    {
      "exemptions": 0,
      "exemptions2": 0,
      "filingStatus": "string",
      "residentPSD": "string",
      "taxCode": "string",
      "workPSD": "string"
    }
  ],
  "mainDirectDeposit": {
    "accountNumber": "string",
    "accountType": "string",
    "blockSpecial": true,
    "isSkipPreNote": true,
    "nameOnAccount": "string",
    "preNoteDate": "string",
    "routingNumber": "string"
  },
  "maritalStatus": "string",
  "middleName": "string",
  "nonPrimaryStateTax": {
    "amount": 0,
    "deductionsAmount": 0,
    "dependentsAmount": 0,
    "exemptions": 0,
    "exemptions2": 0,
    "filingStatus": "string",
    "higherRate": true,
    "otherIncomeAmount": 0,
    "percentage": 0,
    "reciprocityCode": "string",
    "specialCheckCalc": "string",
    "taxCalculationCode": "string",
    "taxCode": "string",
    "w4FormYear": 0
  },
  "ownerPercent": 0,
  "preferredName": "string",
  "primaryPayRate": {
    "annualSalary": 0,
    "baseRate": 0,
    "beginCheckDate": "string",
    "changeReason": "string",
    "defaultHours": 0,
    "effectiveDate": "string",
    "isAutoPay": true,
    "payFrequency": "string",
    "payGrade": "string",
    "payRateNote": "string",
    "payType": "string",
    "ratePer": "string",
    "salary": 0
  },
  "primaryStateTax": {
    "amount": 0,
    "deductionsAmount": 0,
    "dependentsAmount": 0,
    "exemptions": 0,
    "exemptions2": 0,
    "filingStatus": "string",
    "higherRate": true,
    "otherIncomeAmount": 0,
    "percentage": 0,
    "specialCheckCalc": "string",
    "taxCalculationCode": "string",
    "taxCode": "string",
    "w4FormYear": 0
  },
  "priorLastName": "string",
  "salutation": "string",
  "ssn": "string",
  "status": {
    "adjustedSeniorityDate": "string",
    "changeReason": "string",
    "effectiveDate": "string",
    "employeeStatus": "string",
    "hireDate": "string",
    "isEligibleForRehire": true,
    "reHireDate": "string",
    "statusType": "string",
    "terminationDate": "string"
  },
  "suffix": "string",
  "taxSetup": {
    "fitwExemptNotes": "string",
    "fitwExemptReason": "string",
    "futaExemptNotes": "string",
    "futaExemptReason": "string",
    "isEmployee943": true,
    "isPension": true,
    "isStatutory": true,
    "medExemptNotes": "string",
    "medExemptReason": "string",
    "sitwExemptNotes": "string",
    "sitwExemptReason": "string",
    "ssExemptNotes": "string",
    "ssExemptReason": "string",
    "suiExemptNotes": "string",
    "suiExemptReason": "string",
    "suiState": "string",
    "taxDistributionCode1099R": "string",
    "taxForm": "string"
  },
  "veteranDescription": "string",
  "webTime": {
    "badgeNumber": "string",
    "chargeRate": 0,
    "isTimeLaborEnabled": true
  },
  "workAddress": {
    "address1": "string",
    "address2": "string",
    "city": "string",
    "country": "string",
    "county": "string",
    "emailAddress": "string",
    "location": "string",
    "mailStop": "string",
    "mobilePhone": "string",
    "pager": "string",
    "phone": "string",
    "phoneExtension": "string",
    "postalCode": "string",
    "state": "string"
  },
  "workEligibility": {
    "alienOrAdmissionDocumentNumber": "string",
    "attestedDate": "string",
    "countryOfIssuance": "string",
    "foreignPassportNumber": "string",
    "i94AdmissionNumber": "string",
    "i9DateVerified": "string",
    "i9Notes": "string",
    "isI9Verified": true,
    "isSsnVerified": true,
    "ssnDateVerified": "string",
    "ssnNotes": "string",
    "visaType": "string",
    "workAuthorization": "string",
    "workUntil": "string"
  }
}
```

> 404 Response

```json
[
  {
    "field": "string",
    "message": "string",
    "options": [
      {
        "code": "string",
        "description": "string"
      }
    ],
    "path": "string"
  }
]
```

> 500 Response

```json
[
  {
    "field": "string",
    "message": "string",
    "options": [
      {
        "code": "string",
        "description": "string"
      }
    ],
    "path": "string"
  }
]
```

<h3 id="get-employee-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully Retrieved|[employee](#schemaemployee)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|The employee does not exist|Inline|
|429|Too Many Requests|Too Many Requests|None|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="get-employee-responseschema">Response Schema</h3>

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[error](#schemaerror)]|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
paylocity_auth ( Scopes: WebLinkAPI )
</aside>

## Update employee

<a id="opIdUpdate employee"></a>

> Code samples

```bash
curl https://example.com/v2/companies/string/employees/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "additionalDirectDeposit": [
      {
        "accountNumber": "string",
        "accountType": "string",
        "amount": 0,
        "amountType": "string",
        "blockSpecial": true,
        "isSkipPreNote": true,
        "nameOnAccount": "string",
        "preNoteDate": "string",
        "routingNumber": "string"
      }
    ],
    "additionalRate": [
      {
        "changeReason": "string",
        "costCenter1": "string",
        "costCenter2": "string",
        "costCenter3": "string",
        "effectiveDate": "string",
        "endCheckDate": "string",
        "job": "string",
        "rate": 0,
        "rateCode": "string",
        "rateNotes": "string",
        "ratePer": "string",
        "shift": "string"
      }
    ],
    "benefitSetup": {
      "benefitClass": "string",
      "benefitClassEffectiveDate": "string",
      "benefitSalary": 0,
      "benefitSalaryEffectiveDate": "string",
      "doNotApplyAdministrativePeriod": true,
      "isMeasureAcaEligibility": true
    },
    "birthDate": "string",
    "coEmpCode": "string",
    "companyFEIN": "string",
    "companyName": "string",
    "currency": "string",
    "customBooleanFields": [
      {
        "category": "PayrollAndHR",
        "label": "string",
        "value": true
      }
    ],
    "customDateFields": [
      {
        "category": "PayrollAndHR",
        "label": "string",
        "value": "string"
      }
    ],
    "customDropDownFields": [
      {
        "category": "PayrollAndHR",
        "label": "string",
        "value": "string"
      }
    ],
    "customNumberFields": [
      {
        "category": "PayrollAndHR",
        "label": "string",
        "value": 0
      }
    ],
    "customTextFields": [
      {
        "category": "PayrollAndHR",
        "label": "string",
        "value": "string"
      }
    ],
    "departmentPosition": {
      "changeReason": "string",
      "clockBadgeNumber": "string",
      "costCenter1": "string",
      "costCenter2": "string",
      "costCenter3": "string",
      "effectiveDate": "string",
      "employeeType": "string",
      "equalEmploymentOpportunityClass": "string",
      "isMinimumWageExempt": true,
      "isOvertimeExempt": true,
      "isSupervisorReviewer": true,
      "isUnionDuesCollected": true,
      "isUnionInitiationCollected": true,
      "jobTitle": "string",
      "payGroup": "string",
      "positionCode": "string",
      "reviewerCompanyNumber": "string",
      "reviewerEmployeeId": "string",
      "shift": "string",
      "supervisorCompanyNumber": "string",
      "supervisorEmployeeId": "string",
      "tipped": "string",
      "unionAffiliationDate": "string",
      "unionCode": "string",
      "unionPosition": "string",
      "workersCompensation": "string"
    },
    "disabilityDescription": "string",
    "emergencyContacts": [
      {
        "address1": "string",
        "address2": "string",
        "city": "string",
        "country": "string",
        "county": "string",
        "email": "string",
        "firstName": "string",
        "homePhone": "string",
        "lastName": "string",
        "mobilePhone": "string",
        "notes": "string",
        "pager": "string",
        "primaryPhone": "string",
        "priority": "string",
        "relationship": "string",
        "state": "string",
        "syncEmployeeInfo": true,
        "workExtension": "string",
        "workPhone": "string",
        "zip": "string"
      }
    ],
    "employeeId": "string",
    "ethnicity": "string",
    "federalTax": {
      "amount": 0,
      "deductionsAmount": 0,
      "dependentsAmount": 0,
      "exemptions": 0,
      "filingStatus": "string",
      "higherRate": true,
      "otherIncomeAmount": 0,
      "percentage": 0,
      "taxCalculationCode": "string",
      "w4FormYear": 0
    },
    "firstName": "string",
    "gender": "string",
    "homeAddress": {
      "address1": "string",
      "address2": "string",
      "city": "string",
      "country": "string",
      "county": "string",
      "emailAddress": "string",
      "mobilePhone": "string",
      "phone": "string",
      "postalCode": "string",
      "state": "string"
    },
    "isHighlyCompensated": true,
    "isSmoker": true,
    "lastName": "string",
    "localTax": [
      {
        "exemptions": 0,
        "exemptions2": 0,
        "filingStatus": "string",
        "residentPSD": "string",
        "taxCode": "string",
        "workPSD": "string"
      }
    ],
    "mainDirectDeposit": {
      "accountNumber": "string",
      "accountType": "string",
      "blockSpecial": true,
      "isSkipPreNote": true,
      "nameOnAccount": "string",
      "preNoteDate": "string",
      "routingNumber": "string"
    },
    "maritalStatus": "string",
    "middleName": "string",
    "nonPrimaryStateTax": {
      "amount": 0,
      "deductionsAmount": 0,
      "dependentsAmount": 0,
      "exemptions": 0,
      "exemptions2": 0,
      "filingStatus": "string",
      "higherRate": true,
      "otherIncomeAmount": 0,
      "percentage": 0,
      "reciprocityCode": "string",
      "specialCheckCalc": "string",
      "taxCalculationCode": "string",
      "taxCode": "string",
      "w4FormYear": 0
    },
    "ownerPercent": 0,
    "preferredName": "string",
    "primaryPayRate": {
      "annualSalary": 0,
      "baseRate": 0,
      "beginCheckDate": "string",
      "changeReason": "string",
      "defaultHours": 0,
      "effectiveDate": "string",
      "isAutoPay": true,
      "payFrequency": "string",
      "payGrade": "string",
      "payRateNote": "string",
      "payType": "string",
      "ratePer": "string",
      "salary": 0
    },
    "primaryStateTax": {
      "amount": 0,
      "deductionsAmount": 0,
      "dependentsAmount": 0,
      "exemptions": 0,
      "exemptions2": 0,
      "filingStatus": "string",
      "higherRate": true,
      "otherIncomeAmount": 0,
      "percentage": 0,
      "specialCheckCalc": "string",
      "taxCalculationCode": "string",
      "taxCode": "string",
      "w4FormYear": 0
    },
    "priorLastName": "string",
    "salutation": "string",
    "ssn": "string",
    "status": {
      "adjustedSeniorityDate": "string",
      "changeReason": "string",
      "effectiveDate": "string",
      "employeeStatus": "string",
      "hireDate": "string",
      "isEligibleForRehire": true,
      "reHireDate": "string",
      "statusType": "string",
      "terminationDate": "string"
    },
    "suffix": "string",
    "taxSetup": {
      "fitwExemptNotes": "string",
      "fitwExemptReason": "string",
      "futaExemptNotes": "string",
      "futaExemptReason": "string",
      "isEmployee943": true,
      "isPension": true,
      "isStatutory": true,
      "medExemptNotes": "string",
      "medExemptReason": "string",
      "sitwExemptNotes": "string",
      "sitwExemptReason": "string",
      "ssExemptNotes": "string",
      "ssExemptReason": "string",
      "suiExemptNotes": "string",
      "suiExemptReason": "string",
      "suiState": "string",
      "taxDistributionCode1099R": "string",
      "taxForm": "string"
    },
    "veteranDescription": "string",
    "webTime": {
      "badgeNumber": "string",
      "chargeRate": 0,
      "isTimeLaborEnabled": true
    },
    "workAddress": {
      "address1": "string",
      "address2": "string",
      "city": "string",
      "country": "string",
      "county": "string",
      "emailAddress": "string",
      "location": "string",
      "mailStop": "string",
      "mobilePhone": "string",
      "pager": "string",
      "phone": "string",
      "phoneExtension": "string",
      "postalCode": "string",
      "state": "string"
    },
    "workEligibility": {
      "alienOrAdmissionDocumentNumber": "string",
      "attestedDate": "string",
      "countryOfIssuance": "string",
      "foreignPassportNumber": "string",
      "i94AdmissionNumber": "string",
      "i9DateVerified": "string",
      "i9Notes": "string",
      "isI9Verified": true,
      "isSsnVerified": true,
      "ssnDateVerified": "string",
      "ssnNotes": "string",
      "visaType": "string",
      "workAuthorization": "string",
      "workUntil": "string"
    }
  }'
```

`PATCH /v2/companies/{companyId}/employees/{employeeId}`

Update Employee API will update existing employee data in WebPay.

> Body parameter

```json
{
  "additionalDirectDeposit": [
    {
      "accountNumber": "string",
      "accountType": "string",
      "amount": 0,
      "amountType": "string",
      "blockSpecial": true,
      "isSkipPreNote": true,
      "nameOnAccount": "string",
      "preNoteDate": "string",
      "routingNumber": "string"
    }
  ],
  "additionalRate": [
    {
      "changeReason": "string",
      "costCenter1": "string",
      "costCenter2": "string",
      "costCenter3": "string",
      "effectiveDate": "string",
      "endCheckDate": "string",
      "job": "string",
      "rate": 0,
      "rateCode": "string",
      "rateNotes": "string",
      "ratePer": "string",
      "shift": "string"
    }
  ],
  "benefitSetup": {
    "benefitClass": "string",
    "benefitClassEffectiveDate": "string",
    "benefitSalary": 0,
    "benefitSalaryEffectiveDate": "string",
    "doNotApplyAdministrativePeriod": true,
    "isMeasureAcaEligibility": true
  },
  "birthDate": "string",
  "coEmpCode": "string",
  "companyFEIN": "string",
  "companyName": "string",
  "currency": "string",
  "customBooleanFields": [
    {
      "category": "PayrollAndHR",
      "label": "string",
      "value": true
    }
  ],
  "customDateFields": [
    {
      "category": "PayrollAndHR",
      "label": "string",
      "value": "string"
    }
  ],
  "customDropDownFields": [
    {
      "category": "PayrollAndHR",
      "label": "string",
      "value": "string"
    }
  ],
  "customNumberFields": [
    {
      "category": "PayrollAndHR",
      "label": "string",
      "value": 0
    }
  ],
  "customTextFields": [
    {
      "category": "PayrollAndHR",
      "label": "string",
      "value": "string"
    }
  ],
  "departmentPosition": {
    "changeReason": "string",
    "clockBadgeNumber": "string",
    "costCenter1": "string",
    "costCenter2": "string",
    "costCenter3": "string",
    "effectiveDate": "string",
    "employeeType": "string",
    "equalEmploymentOpportunityClass": "string",
    "isMinimumWageExempt": true,
    "isOvertimeExempt": true,
    "isSupervisorReviewer": true,
    "isUnionDuesCollected": true,
    "isUnionInitiationCollected": true,
    "jobTitle": "string",
    "payGroup": "string",
    "positionCode": "string",
    "reviewerCompanyNumber": "string",
    "reviewerEmployeeId": "string",
    "shift": "string",
    "supervisorCompanyNumber": "string",
    "supervisorEmployeeId": "string",
    "tipped": "string",
    "unionAffiliationDate": "string",
    "unionCode": "string",
    "unionPosition": "string",
    "workersCompensation": "string"
  },
  "disabilityDescription": "string",
  "emergencyContacts": [
    {
      "address1": "string",
      "address2": "string",
      "city": "string",
      "country": "string",
      "county": "string",
      "email": "string",
      "firstName": "string",
      "homePhone": "string",
      "lastName": "string",
      "mobilePhone": "string",
      "notes": "string",
      "pager": "string",
      "primaryPhone": "string",
      "priority": "string",
      "relationship": "string",
      "state": "string",
      "syncEmployeeInfo": true,
      "workExtension": "string",
      "workPhone": "string",
      "zip": "string"
    }
  ],
  "employeeId": "string",
  "ethnicity": "string",
  "federalTax": {
    "amount": 0,
    "deductionsAmount": 0,
    "dependentsAmount": 0,
    "exemptions": 0,
    "filingStatus": "string",
    "higherRate": true,
    "otherIncomeAmount": 0,
    "percentage": 0,
    "taxCalculationCode": "string",
    "w4FormYear": 0
  },
  "firstName": "string",
  "gender": "string",
  "homeAddress": {
    "address1": "string",
    "address2": "string",
    "city": "string",
    "country": "string",
    "county": "string",
    "emailAddress": "string",
    "mobilePhone": "string",
    "phone": "string",
    "postalCode": "string",
    "state": "string"
  },
  "isHighlyCompensated": true,
  "isSmoker": true,
  "lastName": "string",
  "localTax": [
    {
      "exemptions": 0,
      "exemptions2": 0,
      "filingStatus": "string",
      "residentPSD": "string",
      "taxCode": "string",
      "workPSD": "string"
    }
  ],
  "mainDirectDeposit": {
    "accountNumber": "string",
    "accountType": "string",
    "blockSpecial": true,
    "isSkipPreNote": true,
    "nameOnAccount": "string",
    "preNoteDate": "string",
    "routingNumber": "string"
  },
  "maritalStatus": "string",
  "middleName": "string",
  "nonPrimaryStateTax": {
    "amount": 0,
    "deductionsAmount": 0,
    "dependentsAmount": 0,
    "exemptions": 0,
    "exemptions2": 0,
    "filingStatus": "string",
    "higherRate": true,
    "otherIncomeAmount": 0,
    "percentage": 0,
    "reciprocityCode": "string",
    "specialCheckCalc": "string",
    "taxCalculationCode": "string",
    "taxCode": "string",
    "w4FormYear": 0
  },
  "ownerPercent": 0,
  "preferredName": "string",
  "primaryPayRate": {
    "annualSalary": 0,
    "baseRate": 0,
    "beginCheckDate": "string",
    "changeReason": "string",
    "defaultHours": 0,
    "effectiveDate": "string",
    "isAutoPay": true,
    "payFrequency": "string",
    "payGrade": "string",
    "payRateNote": "string",
    "payType": "string",
    "ratePer": "string",
    "salary": 0
  },
  "primaryStateTax": {
    "amount": 0,
    "deductionsAmount": 0,
    "dependentsAmount": 0,
    "exemptions": 0,
    "exemptions2": 0,
    "filingStatus": "string",
    "higherRate": true,
    "otherIncomeAmount": 0,
    "percentage": 0,
    "specialCheckCalc": "string",
    "taxCalculationCode": "string",
    "taxCode": "string",
    "w4FormYear": 0
  },
  "priorLastName": "string",
  "salutation": "string",
  "ssn": "string",
  "status": {
    "adjustedSeniorityDate": "string",
    "changeReason": "string",
    "effectiveDate": "string",
    "employeeStatus": "string",
    "hireDate": "string",
    "isEligibleForRehire": true,
    "reHireDate": "string",
    "statusType": "string",
    "terminationDate": "string"
  },
  "suffix": "string",
  "taxSetup": {
    "fitwExemptNotes": "string",
    "fitwExemptReason": "string",
    "futaExemptNotes": "string",
    "futaExemptReason": "string",
    "isEmployee943": true,
    "isPension": true,
    "isStatutory": true,
    "medExemptNotes": "string",
    "medExemptReason": "string",
    "sitwExemptNotes": "string",
    "sitwExemptReason": "string",
    "ssExemptNotes": "string",
    "ssExemptReason": "string",
    "suiExemptNotes": "string",
    "suiExemptReason": "string",
    "suiState": "string",
    "taxDistributionCode1099R": "string",
    "taxForm": "string"
  },
  "veteranDescription": "string",
  "webTime": {
    "badgeNumber": "string",
    "chargeRate": 0,
    "isTimeLaborEnabled": true
  },
  "workAddress": {
    "address1": "string",
    "address2": "string",
    "city": "string",
    "country": "string",
    "county": "string",
    "emailAddress": "string",
    "location": "string",
    "mailStop": "string",
    "mobilePhone": "string",
    "pager": "string",
    "phone": "string",
    "phoneExtension": "string",
    "postalCode": "string",
    "state": "string"
  },
  "workEligibility": {
    "alienOrAdmissionDocumentNumber": "string",
    "attestedDate": "string",
    "countryOfIssuance": "string",
    "foreignPassportNumber": "string",
    "i94AdmissionNumber": "string",
    "i9DateVerified": "string",
    "i9Notes": "string",
    "isI9Verified": true,
    "isSsnVerified": true,
    "ssnDateVerified": "string",
    "ssnNotes": "string",
    "visaType": "string",
    "workAuthorization": "string",
    "workUntil": "string"
  }
}
```

<h3 id="update-employee-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|companyId|path|string|true|Company Id|
|employeeId|path|string|true|Employee Id|
|body|body|[employee](#schemaemployee)|true|Employee Model|
|» additionalDirectDeposit|body|[object]|false|Add up to 19 direct deposit accounts in addition to the main direct deposit account. IMPORTANT: A direct deposit update will remove ALL existing main and additional direct deposit information in WebPay and replace with information provided on the request. GET API will not return direct deposit data.|
|» » accountNumber|body|string \| null|false|Account number, entered without special characters and spaces. <br  />Max length: 17<br />|
|» » accountType|body|string \| null|false|Account type. Valid values are *C* (Checking), *S* (Saving), *P* (Pay Card). <br   />Max length: 1<br />|
|» » amount|body|number \| null|false|Amount value to be deposited to the account.<br  />Decimal (12,2)<br />|
|» » amountType|body|string \| null|false|Amount type to indicate the context of the amount. Common values are *F* (FLAT), *F-* (Net Minus), *P* (Percent). <br  /> Max length: 5<br />|
|» » blockSpecial|body|boolean \| null|false|Indicates if direct deposit should be blocked when special check types such as Bonus are processed.<br />|
|» » isSkipPreNote|body|boolean \| null|false|Indicates if account will not pre-note.<br />|
|» » nameOnAccount|body|string \| null|false|Name on the bank account. Defaults to employee's name. <br  />Max length: 30<br />|
|» » preNoteDate|body|string(paylocity-date) \| null|false|Date to end the pre-note of the account. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.<br />|
|» » routingNumber|body|string \| null|false|ABA Transit Routing Number, entered without dashes or spaces. <br  />Max length: 9<br />|
|» additionalRate|body|[object]|false|Add Additional Rates.|
|» » changeReason|body|string \| null|false|Not required. If populated, must match one of the system coded values available in the Additional Rates Change Reason drop down.<br />|
|» » costCenter1|body|string \| null|false|Not required. Valid values must match one of the system coded cost centers available in the Additional Rates Cost Center level 1 drop down. This cell must be in a text format.<br />|
|» » costCenter2|body|string \| null|false|Not required. Valid values must match one of the system coded cost centers available in the Additional Rates Cost Center level 2 drop down. This cell must be in a text format.<br />|
|» » costCenter3|body|string \| null|false|Not required. Valid values must match one of the system coded cost centers available in the Additional Rates Cost Center level 3 drop down. This cell must be in a text format.<br />|
|» » effectiveDate|body|string(paylocity-date) \| null|false|Required. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.<br />|
|» » endCheckDate|body|string(paylocity-date) \| null|false|Not required. Must match one of the system coded check dates available in the Additional Rates End Check Date drop down. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.<br />|
|» » job|body|string \| null|false|Not required. If populated, must match one of the system coded values available in the Additional Rates Job drop down.<br />|
|» » rate|body|number \| null|false|Required. Enter dollar amount that corresponds to the Per selection.<br />|
|» » rateCode|body|string \| null|false|Required. If populated, must match one of the system coded values available in the Additional Rates Rate Code drop down.<br />|
|» » rateNotes|body|string \| null|false|Not required.<br  />Max length: 4000<br />|
|» » ratePer|body|string \| null|false|Required. Valid values are HOUR or WEEK.<br />|
|» » shift|body|string \| null|false|Not required. If populated, must match one of the system coded values available in the Additional Rates Shift drop down.<br />|
|» benefitSetup|body|object|false| Add or update setup values used for employee benefits integration, insurance plan settings, and ACA reporting.|
|» » benefitClass|body|string \| null|false|Benefit Class code. Values are configured in Web Pay Company > Setup > Benefits > Classes.<br  />Max length: 30|
|» » benefitClassEffectiveDate|body|string(paylocity-date) \| null|false|Date when Benefit Class takes effect. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.|
|» » benefitSalary|body|number \| null|false|Salary used to configure benefits.<br  />Decimal(12,2)|
|» » benefitSalaryEffectiveDate|body|string(paylocity-date) \| null|false|Date when Benefit Salary takes effect. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.|
|» » doNotApplyAdministrativePeriod|body|boolean \| null|false|Applicable only for HR Enhanced clients and Benefit Classes with ACA Employment Type of Full Time.|
|» » isMeasureAcaEligibility|body|boolean \| null|false|Only valid for HR Enhanced clients and Benefit Classes that are ACA Employment Type of Full Time.|
|» birthDate|body|string(paylocity-date) \| null|false|Employee birthdate. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.|
|» coEmpCode|body|string \| null|false|Unique idenifier for SSO.<br  />Max length: 20|
|» companyFEIN|body|string \| null|false|Company FEIN as defined in Web Pay, applicable with GET requests only.<br  /> Max length: 20|
|» companyName|body|string \| null|false|Company name as defined in Web Pay, applicable with GET requests only.<br  /> Max length: 50|
|» currency|body|string \| null|false|Employee is paid in this currency. <br  />Max length: 30|
|» customBooleanFields|body|[object]|false|Up to 8 custom fields of boolean (checkbox) type value.|
|» » category|body|string|true|The custom field category.  Acceptable value is 'PayrollAndHR'.|
|» » label|body|string \| null|true|The custom field label whose value is to be added/updated. Must match to the label defined in Web Pay Custom Fields setup.  Max length: 255.|
|» » value|body|boolean \| null|true|The custom boolean field value.|
|» customDateFields|body|[object]|false|Up to 8 custom fields of the date type value.|
|» » category|body|string|true|The custom field category.  Acceptable value is 'PayrollAndHR'.|
|» » label|body|string \| null|true|The custom field label whose value is to be added/updated.  Must match to the label defined in Web Pay Custom Fields setup.  Max length: 255.|
|» » value|body|string(paylocity-date) \| null|true|The custom date field value.  Common formats include MM-DD-CCYY, CCYY-MM-DD.|
|» customDropDownFields|body|[object]|false|Up to 8 custom fields of the dropdown type value.|
|» » category|body|string|true|The custom field category.  Acceptable value is 'PayrollAndHR'.|
|» » label|body|string \| null|true|The custom field label whose value is to be added/updated.  Must match to the label defined in Web Pay Custom Fields setup.  Max length: 255.|
|» » value|body|string \| null|true|The custom dropdown field value.  Values are configured in Web Pay Company > Setup > List Values > Lookup Values > Custom Fields: PayrollAndHR.  Max length: 10.|
|» customNumberFields|body|[object]|false|Up to 8 custom fields of numeric type value.|
|» » category|body|string|true|The custom field category.  Acceptable value is 'PayrollAndHR'.|
|» » label|body|string \| null|true|The custom field label whose value is to be added/updated.  Must match to the label defined in Web Pay Custom Fields setup.  Max length: 255.|
|» » value|body|number \| null|true|The custom number field value.  Decimal (18,6).|
|» customTextFields|body|[object]|false|Up to 8 custom fields of text type value.|
|» » category|body|string|true|The custom field category.  Acceptable value is 'PayrollAndHR'.|
|» » label|body|string \| null|true|The custom field label whose value is to be added/updated.  Must match to the label defined in Web Pay Custom Fields setup.  Max length: 255.|
|» » value|body|string \| null|true|The custom text field value.  Max length: 255.|
|» departmentPosition|body|object|false|Add or update home department cost center, position, supervisor, reviewer, employment type, EEO class, pay settings, and union information.|
|» » changeReason|body|string \| null|false|Employee department/position change reason. Must match Company setup. <br  />Max length: 15|
|» » clockBadgeNumber|body|string \| null|false|Employee clock badge number. Defaults to employeeId. <br  />Max length: 10|
|» » costCenter1|body|string \| null|false|Employer defined location, like *branch, division, department*, etc. Must match Company setup. <br  />Max length: 10|
|» » costCenter2|body|string \| null|false|Employer defined location, like *branch, division, department*, etc. Must match Company setup. <br  />Max length: 10|
|» » costCenter3|body|string \| null|false|Employer defined location, like *branch, division, department*, etc. Must match Company setup. <br  />Max length: 10|
|» » effectiveDate|body|string(paylocity-date) \| null|false|The date the position takes effect. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.|
|» » employeeType|body|string \| null|false|Employee current employment type. Common values *RFT (Regular Full Time), RPT (Regular Part Time), SNL (Seasonal), TFT (Temporary Full Time), TPT (Temporary Part Time)*. <br  />Max length: 10|
|» » equalEmploymentOpportunityClass|body|string \| null|false|Values are configured in Company > Setup > HR > EEO Classes.<br  /> Max length: 10|
|» » isMinimumWageExempt|body|boolean \| null|false|Indicates if employee is exempt from minimum wage.|
|» » isOvertimeExempt|body|boolean \| null|false|Indicates if employee is exempt from overtime.|
|» » isSupervisorReviewer|body|boolean \| null|false|Indicates if employee is a supervisor or reviewer.|
|» » isUnionDuesCollected|body|boolean \| null|false|Indicates if union dues are collected.|
|» » isUnionInitiationCollected|body|boolean \| null|false|Indicates if initiations fees are collected.|
|» » jobTitle|body|string \| null|false|Employee current job title. <br  />Max length: 50|
|» » payGroup|body|string \| null|false|Employee pay group. Must match Company setup. <br  /> Max length: 20|
|» » positionCode|body|string \| null|false|Employee position code. Must match Company setup.<br  />Max length: 20|
|» » reviewerCompanyNumber|body|string \| null|false|Company number of reviewer.<br />Max length: 9|
|» » reviewerEmployeeId|body|string \| null|false|Employee id of the reviewer.<br />Max length: 10|
|» » shift|body|string \| null|false|Employee work shift.<br  />Max length: 255|
|» » supervisorCompanyNumber|body|string \| null|false|Supervisor's company number. Defaults to employee company number.<br  />Max length: 9|
|» » supervisorEmployeeId|body|string \| null|false|EmployeeId of the supervisor. <br  />Max length: 10|
|» » tipped|body|string \| null|false|Indicates if employee receives tips.|
|» » unionAffiliationDate|body|string(paylocity-date) \| null|false|Employee union affiliation effective date. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.|
|» » unionCode|body|string \| null|false|Employee union code. Must match Company setup. <br  />Max length: 10|
|» » unionPosition|body|string \| null|false|Employee union position. Must match Company setup. <br  />Max length: 30|
|» » workersCompensation|body|string \| null|false|Employee worker compensation code. Must match Company setup.<br  /> Max length: 10|
|» disabilityDescription|body|string \| null|false|Indicates if employee has disability status.|
|» emergencyContacts|body|[object]|false|Add or update Emergency Contacts.|
|» » address1|body|string \| null|false|1st address line.|
|» » address2|body|string \| null|false|2nd address line.|
|» » city|body|string \| null|false|City.|
|» » country|body|string \| null|false|County.|
|» » county|body|string \| null|false|Country.  Must be a valid 3 character country code.  Common values are *USA* (United States), *CAN* (Canada).|
|» » email|body|string \| null|false|Contact email.  Must be valid email address format.|
|» » firstName|body|string \| null|true|Required. Contact first name. <br  />Max length: 40|
|» » homePhone|body|string \| null|false|Contact Home Phone.  Valid phone format  *(###) #######* or *######-####* or *### ### ####* or *##########* or, if international, starts with *+#*, only spaces and digits allowed.|
|» » lastName|body|string \| null|true|Required. Contact last name. <br  />Max length: 40|
|» » mobilePhone|body|string \| null|false|Contact Mobile Phone.  Valid phone format  *(###) #######* or *######-####* or *### ### ####* or *##########* or, if international, starts with *+#*, only spaces and digits allowed.|
|» » notes|body|string \| null|false|Notes. <br  />Max length: 1000|
|» » pager|body|string \| null|false|Contact Pager.  Valid phone format  *(###) #######* or *######-####* or *### ### ####* or *##########* or, if international, starts with *+#*, only spaces and digits allowed.|
|» » primaryPhone|body|string \| null|false|Required. Contact primary phone type.  Must match Company setup.  Valid  values are H (Home), M (Mobile), P (Pager), W (Work)|
|» » priority|body|string \| null|false|Required. Contact priority. Valid values are *P* (Primary) or *S* (Secondary).|
|» » relationship|body|string \| null|false|Required. Contact relationship.  Must match Company setup.  Common values are Spouse, Mother, Father.|
|» » state|body|string \| null|false|State or Province.  If U.S. address, must be valid 2 character state code.  Common values are *IL* (Illinois), *CA* (California).|
|» » syncEmployeeInfo|body|boolean|false|Valid values are *true* or *false*.|
|» » workExtension|body|string \| null|false|Work Extension.|
|» » workPhone|body|string \| null|false|Contact Work Phone.  Valid phone format  *(###) #######* or *######-####* or *### ### ####* or *##########* or, if international, starts with *+#*, only spaces and digits allowed.|
|» » zip|body|string \| null|false|Postal code.  If U.S. address, must be a valid zip code.|
|» employeeId|body|string \| null|false|Leave blank to have Web Pay automatically assign the next available employee ID.<br  />Max length: 9|
|» ethnicity|body|string \| null|false|Employee ethnicity.<br  /> Max length: 10|
|» federalTax|body|object|false|Add or update federal tax amount type (taxCalculationCode), amount or percentage, filing status, and exemptions.|
|» » amount|body|number \| null|false|Tax amount. <br  />Decimal (12,2)|
|» » deductionsAmount|body|number|false|Box 4(b) on form W4 (year 2020 or later): Deductions amount. <br  />Decimal (12,2)|
|» » dependentsAmount|body|number|false|Box 3 on form W4 (year 2020 or later): Total dependents amount. <br  />Decimal (12,2)|
|» » exemptions|body|number \| null|false|Federal tax exemptions value. <br  />Decimal (12,2)|
|» » filingStatus|body|string \| null|false|Employee federal filing status. Common values are *S* (Single), *M* (Married).<br  />Max length: 50|
|» » higherRate|body|boolean|false|Box 2(c) on form W4 (year 2020 or later): Multiple Jobs or Spouse Works. <br  />Boolean|
|» » otherIncomeAmount|body|number|false|Box 4(a) on form W4 (year 2020 or later): Other income amount. <br  />Decimal (12,2)|
|» » percentage|body|number \| null|false|Tax percentage. <br  />Decimal (12,2)|
|» » taxCalculationCode|body|string \| null|false|Tax calculation code. Common values are *F* (Flat), *P* (Percentage), *FDFP* (Flat Dollar Amount plus Fixed Percentage). <br  />Max length: 10|
|» » w4FormYear|body|integer|false|The federal W4 form year <br  />Integer|
|» firstName|body|string \| null|false|Employee first name. <br  />Max length: 40|
|» gender|body|string \| null|false|Employee gender. Common values *M* (Male), *F* (Female). <br  />Max length: 1|
|» homeAddress|body|object|false|Add or update employee's home address, personal phone numbers, and personal email.|
|» » address1|body|string \| null|false|1st address line.<br  /> Max length: 40|
|» » address2|body|string \| null|false|2nd address line. <br  /> Max length: 40|
|» » city|body|string \| null|false|City.<br  /> Max length: 40|
|» » country|body|string \| null|false|Country.<br  /> Max length: 30|
|» » county|body|string \| null|false|County.<br  /> Max length: 30|
|» » emailAddress|body|string \| null|false|Email. <br  />Max length: 50|
|» » mobilePhone|body|string \| null|false|Mobile phone number.<br  /> Max length: 20|
|» » phone|body|string \| null|false|Phone number.<br  /> Max length: 20|
|» » postalCode|body|string \| null|false|Postal code.<br  /> Max length: 10|
|» » state|body|string \| null|false|State or province.<br  /> Max length: 2|
|» isHighlyCompensated|body|boolean|false|Indicates if employee meets the highly compensated employee criteria.|
|» isSmoker|body|boolean|false|Indicates if employee is a smoker.|
|» lastName|body|string \| null|false|Employee last name. <br  />Max length: 40|
|» localTax|body|[object]|false|Add, update, or delete local tax code, filing status, and exemptions including  PA-PSD taxes.|
|» » exemptions|body|number \| null|false|Local tax exemptions value.<br  />Decimal (12,2)|
|» » exemptions2|body|number \| null|false|Local tax exemptions 2 value.<br  />Decimal (12,2)|
|» » filingStatus|body|string \| null|false|Employee local tax filing status. Must match specific local tax setup. <br  /> Max length: 50|
|» » residentPSD|body|string \| null|false|Resident PSD (political subdivision code) applicable in PA. Must match Company setup.<br  /> Max length: 9|
|» » taxCode|body|string \| null|false|Local tax code.<br  />Max length: 50|
|» » workPSD|body|string \| null|false|Work location PSD. Must match Company setup. <br  /> Max length: 9|
|» mainDirectDeposit|body|object|false|Add the main direct deposit account. After deposits are made to any additional direct deposit accounts, the remaining net check is deposited in the main direct deposit account. IMPORTANT: A direct deposit update will remove ALL existing main and additional direct deposit information in WebPay and replace with what is provided on the request. GET API will not return direct deposit data.|
|» » accountNumber|body|string \| null|false|Account number, entered without special characters and spaces. <br  />Max length: 17|
|» » accountType|body|string \| null|false|Account type. Valid values are *C* (Checking), *S* (Saving), *P* (Pay Card). <br   />Max length: 1|
|» » blockSpecial|body|boolean \| null|false|Indicates if direct deposit should be blocked when special check types such as Bonus are processed.<br />|
|» » isSkipPreNote|body|boolean \| null|false|Indicates if account will not pre-note.|
|» » nameOnAccount|body|string \| null|false|Name on the bank account. Defaults to employee's name. <br  />Max length: 30<br />|
|» » preNoteDate|body|string(paylocity-date) \| null|false|Date to end the pre-note of the account. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.|
|» » routingNumber|body|string \| null|false|ABA Transit Routing Number, entered without dashes or spaces. <br  />Max length: 9|
|» maritalStatus|body|string \| null|false|Employee marital status. Common values *D (Divorced), M (Married), S (Single), W (Widowed)*. <br  />Max length: 10|
|» middleName|body|string \| null|false|Employee middle name.<br  /> Max length: 20|
|» nonPrimaryStateTax|body|object|false|Add or update non-primary state tax code, amount type (taxCalculationCode), amount or percentage, filing status, exemptions, supplemental check (specialCheckCalc), and reciprocity code information.|
|» » amount|body|number \| null|false|State tax code.<br  /> Max length: 50|
|» » deductionsAmount|body|number|false|Box 4(b) on form W4 (year 2020 or later): Deductions amount. <br  />Decimal (12,2)|
|» » dependentsAmount|body|number|false|Box 3 on form W4 (year 2020 or later): Total dependents amount. <br  />Decimal (12,2)|
|» » exemptions|body|number \| null|false|State tax exemptions value.<br  />Decimal (12,2)|
|» » exemptions2|body|number \| null|false|State tax exemptions 2 value.<br  />Decimal (12,2)|
|» » filingStatus|body|string \| null|false|Employee state tax filing status. Common values are *S* (Single), *M* (Married).<br  />Max length: 50|
|» » higherRate|body|boolean|false|Box 2(c) on form W4 (year 2020 or later): Multiple Jobs or Spouse Works. <br  />Boolean|
|» » otherIncomeAmount|body|number|false|Box 4(a) on form W4 (year 2020 or later): Other income amount. <br  />Decimal (12,2)|
|» » percentage|body|number \| null|false|State Tax percentage. <br  />Decimal (12,2)|
|» » reciprocityCode|body|string \| null|false|Non-primary state tax reciprocity code.<br  /> Max length: 50|
|» » specialCheckCalc|body|string \| null|false|Supplemental check calculation code. Common values are *Blocked* (Taxes blocked on Supplemental checks), *Supp* (Use supplemental Tax Rate-Code). <br  />Max length: 10|
|» » taxCalculationCode|body|string \| null|false|Tax calculation code. Common values are *F* (Flat), *P* (Percentage), *FDFP* (Flat Dollar Amount plus Fixed Percentage). <br  />Max length: 10|
|» » taxCode|body|string \| null|false|State tax code.<br  /> Max length: 50|
|» » w4FormYear|body|integer|false|The state W4 form year <br  />Integer|
|» ownerPercent|body|number \| null|false|Percentage of employee's ownership in the company, entered as a whole number. <br  /> Decimal (12,2)|
|» preferredName|body|string \| null|false|Employee preferred display name.<br  /> Max length: 20|
|» primaryPayRate|body|object|false|Add or update hourly or salary pay rate, effective date, and pay frequency.|
|» » annualSalary|body|number \| null|false|Employee annual salary.<br />Decimal (12,6)|
|» » baseRate|body|number \| null|false|Employee base rate, used for Hourly employees. <br  />Decimal (12,6)|
|» » beginCheckDate|body|string(paylocity-date) \| null|false|The date of the first check on which the new pay rate will appear. This value is only applicable when updating an existing employee. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.|
|» » changeReason|body|string \| null|false|Pay rate change reason.<br  /> Max length: 30|
|» » defaultHours|body|number \| null|false|Employee default hours consistently worked. If autoPayType is set to D, employee will be paid hourly base rate for the defaultHours. <br  />Decimal (12,2)|
|» » effectiveDate|body|string(paylocity-date) \| null|false|The date the employee's pay rate takes effect. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.|
|» » isAutoPay|body|boolean \| null|false|If set to *True*, employee will be paid automatically using deafultHours.|
|» » payFrequency|body|string \| null|false|Employee current pay frequency. Common values are *A (Annual), B (Bi-Weekly), D (Daily), M (Monthly), S (Semi-Monthly), Q (Quarterly), W (Weekly)*. <br  />Max length: 5|
|» » payGrade|body|string \| null|false|Employee pay grade. Must match Company setup. <br  /> Max length: 10|
|» » payRateNote|body|string \| null|false|Pay rate notes regarding employee.<br  /> Max length: 250|
|» » payType|body|string \| null|false|Employee pay type (rate code). Valid values are *Hourly* or *Salary*. <br  />Max length: 10|
|» » ratePer|body|string \| null|false|Employee base rate frequency used with payType Hourly. Common values are *Hour, Week*. Default is Hour. <br  />Max length: 10|
|» » salary|body|number \| null|false|Employee gross salary per pay period used with payType Salary.<br  />Decimal (12,6)|
|» primaryStateTax|body|object|false|Add or update primary state tax code, amount type (taxCalculationCode), amount or percentage, filing status, exemptions, and supplemental check (specialCheckCalc) information. Only one primary state is allowed. Sending an updated primary state will replace the current primary state.|
|» » amount|body|number \| null|false|State tax code.<br  /> Max length: 50|
|» » deductionsAmount|body|number|false|Box 4(b) on form W4 (year 2020 or later): Deductions amount. <br  />Decimal (12,2)|
|» » dependentsAmount|body|number|false|Box 3 on form W4 (year 2020 or later): Total dependents amount. <br  />Decimal (12,2)|
|» » exemptions|body|number \| null|false|State tax exemptions value.<br  />Decimal (12,2)|
|» » exemptions2|body|number \| null|false|State tax exemptions 2 value.<br  />Decimal (12,2)|
|» » filingStatus|body|string \| null|false|Employee state tax filing status. Common values are *S* (Single), *M* (Married).<br  />Max length: 50|
|» » higherRate|body|boolean|false|Box 2(c) on form W4 (year 2020 or later): Multiple Jobs or Spouse Works. <br  />Boolean|
|» » otherIncomeAmount|body|number|false|Box 4(a) on form W4 (year 2020 or later): Other income amount. <br  />Decimal (12,2)|
|» » percentage|body|number \| null|false|State Tax percentage. <br  />Decimal (12,2)|
|» » specialCheckCalc|body|string \| null|false|Supplemental check calculation code. Common values are *Blocked* (Taxes blocked on Supplemental checks), *Supp* (Use supplemental Tax Rate-Code). <br  />Max length: 10|
|» » taxCalculationCode|body|string \| null|false|Tax calculation code. Common values are *F* (Flat), *P* (Percentage), *FDFP* (Flat Dollar Amount plus Fixed Percentage). <br  />Max length: 10|
|» » taxCode|body|string \| null|false|State tax code.<br  /> Max length: 50|
|» » w4FormYear|body|integer|false|The state W4 form year <br  />Integer|
|» priorLastName|body|string \| null|false|Prior last name if applicable.<br  />Max length: 40|
|» salutation|body|string \| null|false|Employee preferred salutation. <br  />Max length: 10|
|» ssn|body|string \| null|false|Employee social security number. Leave it blank if valid social security number not available. <br  />Max length: 11|
|» status|body|object|false|Add or update employee status, change reason, effective date, and adjusted seniority date. Note that companies that are still in Implementation cannot hire future employees.|
|» » adjustedSeniorityDate|body|string(paylocity-date) \| null|false|Adjusted seniority date. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.|
|» » changeReason|body|string \| null|false|Employee status change reason. Must match Company setup.<br  /> Max length: 15|
|» » effectiveDate|body|string(paylocity-date) \| null|false|Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.|
|» » employeeStatus|body|string \| null|false|Employee current work status. Common values are *A* (Active), *L* (Leave of Absence), *T* (Terminated). <br  />Max length: 20|
|» » hireDate|body|string(paylocity-date) \| null|false|Employee hired date. Updates to hire date are not allowed and will be ignored. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.|
|» » isEligibleForRehire|body|boolean \| null|false|Indicates if employee eligible for rehire.|
|» » reHireDate|body|string(paylocity-date) \| null|false|Rehire date if employee is rehired.  Updates to re-hire date are not allowed and will be ignored. Common formats are *MM-DD-CCYY, CCYY-MM-DD*.|
|» » statusType|body|string \| null|false|The Status Type associated with the Employee Status code. Each Employee Status  code for a company is assigned to one of the Status Type values of  A (Active), L (Leave of Absence), T (Terminated).|
|» » terminationDate|body|string(paylocity-date) \| null|false|Employee termination date. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.|
|» suffix|body|string \| null|false|Employee name suffix. Common values are *Jr, Sr, II*.<br  />Max length: 30|
|» taxSetup|body|object|false|Add tax form, 1099 exempt reasons and notes, and 943 agricultural employee information. Once the employee receives wages, this information cannot be updated. Add or update SUI tax state, retirement plan, and statutory information.|
|» » fitwExemptNotes|body|string \| null|false|Notes for FITW exemption.<br  /> Max length: 250|
|» » fitwExemptReason|body|string \| null|false|Reason code for FITW exemption. Common values are *SE* (Statutory employee), *CR* (clergy/Religious). <br  /> Max length: 30|
|» » futaExemptNotes|body|string \| null|false|Notes for FUTA exemption.<br  /> Max length: 250|
|» » futaExemptReason|body|string \| null|false|Reason code for FUTA exemption. Common values are *501* (5019c)(3) Organization), *IC* (Independent Contractor).<br  /> Max length: 30|
|» » isEmployee943|body|boolean|false|Indicates if employee in agriculture or farming.|
|» » isPension|body|boolean|false|Indicates if employee is eligible for pension.|
|» » isStatutory|body|boolean|false|Indicates if employee is statutory.|
|» » medExemptNotes|body|string \| null|false|Notes for Medicare exemption.<br  /> Max length: 250|
|» » medExemptReason|body|string \| null|false|Reason code for Medicare exemption. Common values are *501* (5019c)(3) Organization), *IC* (Independent Contractor).<br  /> Max length: 30|
|» » sitwExemptNotes|body|string \| null|false|Notes for SITW exemption.<br  /> Max length: 250|
|» » sitwExemptReason|body|string \| null|false|Reason code for SITW exemption. Common values are *SE* (Statutory employee), *CR* (clergy/Religious). <br  /> Max length: 30|
|» » ssExemptNotes|body|string \| null|false|Notes for Social Security exemption.<br  /> Max length: 250|
|» » ssExemptReason|body|string \| null|false|Reason code for Social Security exemption. Common values are *SE* (Statutory employee), *CR* (clergy/Religious). <br  /> Max length: 30|
|» » suiExemptNotes|body|string \| null|false|Notes for SUI exemption.<br  /> Max length: 250|
|» » suiExemptReason|body|string \| null|false|Reason code for SUI exemption. Common values are *SE* (Statutory employee), *CR* (clergy/Religious). <br  /> Max length: 30|
|» » suiState|body|string \| null|false|Employee SUI (State Unemployment Insurance) state. <br  />Max length: 2|
|» » taxDistributionCode1099R|body|string \| null|false|Employee 1099R distribution code. Common values are *7* (Normal Distribution), *F* (Charitable Gift Annuity). <br  />Max length: 1|
|» » taxForm|body|string \| null|false|Employee tax form for reporting income. Valid values are *W2, 1099M, 1099R*. Default is W2. <br  />Max length: 15|
|» veteranDescription|body|string \| null|false|Indicates if employee is a veteran.|
|» webTime|body|object|false|Add or update Web Time badge number and charge rate and synchronize Web Pay and Web Time employee data.|
|» » badgeNumber|body|string \| null|false|Badge number usually issued for time and attendance system use. <br  />Max length: 50|
|» » chargeRate|body|number \| null|false|Rate to be charged to third party for time worked by the employee. It is most commonly referenced in the Cost Center Charge, Cost Center Charge vs. Cost Reports, and the Customer Invoice time and attendance reports. <br  />Decimal (12,2)|
|» » isTimeLaborEnabled|body|boolean \| null|false|If set to true, changes to employee data will be reflected in Web Time.|
|» workAddress|body|object|false|Add or update employee's work address, phone numbers, and email. Work Location drop down field is not included.|
|» » address1|body|string \| null|false|1st address line.<br  /> Max length: 40|
|» » address2|body|string \| null|false|2nd address line. <br  /> Max length: 40|
|» » city|body|string \| null|false|City.<br  /> Max length: 40|
|» » country|body|string \| null|false|Country.<br  /> Max length: 30|
|» » county|body|string \| null|false|County.<br  /> Max length: 30|
|» » emailAddress|body|string \| null|false|Email. <br  />Max length: 50|
|» » location|body|string \| null|false|Work Location name. <br />Max length: 50|
|» » mailStop|body|string \| null|false|Employee mail stop.<br  /> Max length: 10|
|» » mobilePhone|body|string \| null|false|Mobile phone number.<br  /> Max length: 20|
|» » pager|body|string \| null|false|Employee pager number.<br  /> Max length: 20|
|» » phone|body|string \| null|false|Phone number.<br  /> Max length: 20|
|» » phoneExtension|body|string \| null|false|Phone number extension.<br  /> Max length: 10|
|» » postalCode|body|string \| null|false|Postal code.<br  /> Max length: 10|
|» » state|body|string \| null|false|State or province.<br  /> Max length: 2|
|» workEligibility|body|object|false|Add or update I-9 work authorization information.|
|» » alienOrAdmissionDocumentNumber|body|string \| null|false|Employee USCIS or Admission Number. <br  /> Must be 7-10 characters and may begin with an 'A'|
|» » attestedDate|body|string(paylocity-date) \| null|false|The date the I-9 Verification form was attested by Employer or Authorized representative. Common formats are *MM-DD-CCYY, CCYY-MM-DD*.|
|» » countryOfIssuance|body|string \| null|false|If Foreign Passport number is provided, provide its country of issuance. Must match Paylocity setup.<br  /> Max length: 30|
|» » foreignPassportNumber|body|string \| null|false|Foreign Passport Number.<br  /> Max length: 50|
|» » i94AdmissionNumber|body|string \| null|false|Form I-94 admission number.<br  /> Must be 11 numeric characters|
|» » i9DateVerified|body|string(paylocity-date) \| null|false|Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.|
|» » i9Notes|body|string \| null|false|Notes regarding employee's i9.<br  /> Max length: 4000|
|» » isI9Verified|body|boolean \| null|false|Indicates if employee I9 is verified.|
|» » isSsnVerified|body|boolean \| null|false|Indicates if employee SSN is verified.|
|» » ssnDateVerified|body|string(paylocity-date) \| null|false|The date of employer verification of employee SSN. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.|
|» » ssnNotes|body|string \| null|false|Notes regarding employee's SSN.<br  /> Max length: 4000|
|» » visaType|body|string \| null|false|Employee Visa type. Must match one of the system coded values.<br  /> Max length: 100|
|» » workAuthorization|body|string \| null|false|Employee work authorization. Must match one of the system coded values.<br  /> Max length: 100|
|» » workUntil|body|string(paylocity-date) \| null|false|End date of employee work eligibility.  Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » category|PayrollAndHR|
|» » category|PayrollAndHR|
|» » category|PayrollAndHR|
|» » category|PayrollAndHR|
|» » category|PayrollAndHR|

> Example responses

> 400 Response

```json
[
  {
    "field": "string",
    "message": "string",
    "options": [
      {
        "code": "string",
        "description": "string"
      }
    ],
    "path": "string"
  }
]
```

> 500 Response

```json
[
  {
    "field": "string",
    "message": "string",
    "options": [
      {
        "code": "string",
        "description": "string"
      }
    ],
    "path": "string"
  }
]
```

<h3 id="update-employee-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully Updated|None|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|429|Too Many Requests|Too Many Requests|None|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="update-employee-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[error](#schemaerror)]|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
paylocity_auth ( Scopes: WebLinkAPI )
</aside>

<h1 id="paylocity-api-additional-rates">Additional Rates</h1>

## Add/update additional rates

<a id="opIdAdd or update additional rates"></a>

> Code samples

```bash
curl https://example.com/v2/companies/string/employees/string/additionalRates \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "changeReason": "string",
    "costCenter1": "string",
    "costCenter2": "string",
    "costCenter3": "string",
    "effectiveDate": "string",
    "endCheckDate": "string",
    "job": "string",
    "rate": 0,
    "rateCode": "string",
    "rateNotes": "string",
    "ratePer": "string",
    "shift": "string"
  }'
```

`PUT /v2/companies/{companyId}/employees/{employeeId}/additionalRates`

Sends new or updated employee additional rates information directly to Web Pay.

> Body parameter

```json
{
  "changeReason": "string",
  "costCenter1": "string",
  "costCenter2": "string",
  "costCenter3": "string",
  "effectiveDate": "string",
  "endCheckDate": "string",
  "job": "string",
  "rate": 0,
  "rateCode": "string",
  "rateNotes": "string",
  "ratePer": "string",
  "shift": "string"
}
```

<h3 id="addupdate-additional-rates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|companyId|path|string|true|Company Id|
|employeeId|path|string|true|Employee Id|
|body|body|[additionalRate](#schemaadditionalrate)|true|Additional Rate Model|
|» changeReason|body|string \| null|false|Not required. If populated, must match one of the system coded values available in the Additional Rates Change Reason drop down.<br />|
|» costCenter1|body|string \| null|false|Not required. Valid values must match one of the system coded cost centers available in the Additional Rates Cost Center level 1 drop down. This cell must be in a text format.<br />|
|» costCenter2|body|string \| null|false|Not required. Valid values must match one of the system coded cost centers available in the Additional Rates Cost Center level 2 drop down. This cell must be in a text format.<br />|
|» costCenter3|body|string \| null|false|Not required. Valid values must match one of the system coded cost centers available in the Additional Rates Cost Center level 3 drop down. This cell must be in a text format.<br />|
|» effectiveDate|body|string(paylocity-date) \| null|false|Required. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.<br />|
|» endCheckDate|body|string(paylocity-date) \| null|false|Not required. Must match one of the system coded check dates available in the Additional Rates End Check Date drop down. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.<br />|
|» job|body|string \| null|false|Not required. If populated, must match one of the system coded values available in the Additional Rates Job drop down.<br />|
|» rate|body|number \| null|false|Required. Enter dollar amount that corresponds to the Per selection.<br />|
|» rateCode|body|string \| null|false|Required. If populated, must match one of the system coded values available in the Additional Rates Rate Code drop down.<br />|
|» rateNotes|body|string \| null|false|Not required.<br  />Max length: 4000<br />|
|» ratePer|body|string \| null|false|Required. Valid values are HOUR or WEEK.<br />|
|» shift|body|string \| null|false|Not required. If populated, must match one of the system coded values available in the Additional Rates Shift drop down.<br />|

> Example responses

> 400 Response

```json
[
  {
    "field": "string",
    "message": "string",
    "options": [
      {
        "code": "string",
        "description": "string"
      }
    ],
    "path": "string"
  }
]
```

> 500 Response

```json
[
  {
    "field": "string",
    "message": "string",
    "options": [
      {
        "code": "string",
        "description": "string"
      }
    ],
    "path": "string"
  }
]
```

<h3 id="addupdate-additional-rates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully added or updated|None|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|429|Too Many Requests|Too Many Requests|None|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="addupdate-additional-rates-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[error](#schemaerror)]|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
paylocity_auth ( Scopes: WebLinkAPI )
</aside>

<h1 id="paylocity-api-employee-benefit-setup">Employee Benefit Setup</h1>

## Add/update employee's benefit setup

<a id="opIdUpdate or add employee benefit setup"></a>

> Code samples

```bash
curl https://example.com/v2/companies/string/employees/string/benefitSetup \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "benefitClass": "string",
    "benefitClassEffectiveDate": "string",
    "benefitSalary": 0,
    "benefitSalaryEffectiveDate": "string",
    "doNotApplyAdministrativePeriod": true,
    "isMeasureAcaEligibility": true
  }'
```

`PUT /v2/companies/{companyId}/employees/{employeeId}/benefitSetup`

Sends new or updated employee benefit setup information directly to Web Pay.

> Body parameter

```json
{
  "benefitClass": "string",
  "benefitClassEffectiveDate": "string",
  "benefitSalary": 0,
  "benefitSalaryEffectiveDate": "string",
  "doNotApplyAdministrativePeriod": true,
  "isMeasureAcaEligibility": true
}
```

<h3 id="addupdate-employees-benefit-setup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|companyId|path|string|true|Company Id|
|employeeId|path|string|true|Employee Id|
|body|body|[benefitSetup](#schemabenefitsetup)|true|BenefitSetup Model|
|» benefitClass|body|string \| null|false|Benefit Class code. Values are configured in Web Pay Company > Setup > Benefits > Classes.<br  />Max length: 30|
|» benefitClassEffectiveDate|body|string(paylocity-date) \| null|false|Date when Benefit Class takes effect. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.|
|» benefitSalary|body|number \| null|false|Salary used to configure benefits.<br  />Decimal(12,2)|
|» benefitSalaryEffectiveDate|body|string(paylocity-date) \| null|false|Date when Benefit Salary takes effect. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.|
|» doNotApplyAdministrativePeriod|body|boolean \| null|false|Applicable only for HR Enhanced clients and Benefit Classes with ACA Employment Type of Full Time.|
|» isMeasureAcaEligibility|body|boolean \| null|false|Only valid for HR Enhanced clients and Benefit Classes that are ACA Employment Type of Full Time.|

> Example responses

> 400 Response

```json
[
  {
    "field": "string",
    "message": "string",
    "options": [
      {
        "code": "string",
        "description": "string"
      }
    ],
    "path": "string"
  }
]
```

> 500 Response

```json
[
  {
    "field": "string",
    "message": "string",
    "options": [
      {
        "code": "string",
        "description": "string"
      }
    ],
    "path": "string"
  }
]
```

<h3 id="addupdate-employees-benefit-setup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully added or updated|None|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|429|Too Many Requests|Too Many Requests|None|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="addupdate-employees-benefit-setup-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[error](#schemaerror)]|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
paylocity_auth ( Scopes: WebLinkAPI )
</aside>

<h1 id="paylocity-api-direct-deposit">Direct Deposit</h1>

## Get All Direct Deposit

<a id="opIdGet All Direct Deposit"></a>

> Code samples

```bash
curl https://example.com/v2/companies/string/employees/string/directDeposit \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/companies/{companyId}/employees/{employeeId}/directDeposit`

Get All Direct Deposit returns main direct deposit and all additional direct depositsfor the selected employee.

<h3 id="get-all-direct-deposit-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|companyId|path|string|true|Company Id|
|employeeId|path|string|true|Employee Id|

> Example responses

> 200 Response

```json
[
  {
    "additionalDirectDeposit": [
      {
        "accountNumber": "string",
        "accountType": "string",
        "amount": 0,
        "amountType": "string",
        "blockSpecial": true,
        "isSkipPreNote": true,
        "nameOnAccount": "string",
        "preNoteDate": "string",
        "routingNumber": "string"
      }
    ],
    "mainDirectDeposit": {
      "accountNumber": "string",
      "accountType": "string",
      "blockSpecial": true,
      "isSkipPreNote": true,
      "nameOnAccount": "string",
      "preNoteDate": "string",
      "routingNumber": "string"
    }
  }
]
```

> 404 Response

```json
[
  {
    "field": "string",
    "message": "string",
    "options": [
      {
        "code": "string",
        "description": "string"
      }
    ],
    "path": "string"
  }
]
```

> 500 Response

```json
[
  {
    "field": "string",
    "message": "string",
    "options": [
      {
        "code": "string",
        "description": "string"
      }
    ],
    "path": "string"
  }
]
```

<h3 id="get-all-direct-deposit-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully Retrieved|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|The employee, or direct deposit does not exist|Inline|
|429|Too Many Requests|Too Many Requests|None|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="get-all-direct-deposit-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[directDeposit](#schemadirectdeposit)]|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[error](#schemaerror)]|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
paylocity_auth ( Scopes: WebLinkAPI )
</aside>

<h1 id="paylocity-api-earnings">Earnings</h1>

## Get All Earnings

<a id="opIdGet All Earnings"></a>

> Code samples

```bash
curl https://example.com/v2/companies/string/employees/string/earnings \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/companies/{companyId}/employees/{employeeId}/earnings`

Get All Earnings returns all earnings for the selected employee.

<h3 id="get-all-earnings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|companyId|path|string|true|Company Id|
|employeeId|path|string|true|Employee Id|

> Example responses

> 200 Response

```json
[
  {
    "agency": "string",
    "amount": 0,
    "annualMaximum": 0,
    "calculationCode": "string",
    "costCenter1": "string",
    "costCenter2": "string",
    "costCenter3": "string",
    "earningCode": "string",
    "effectiveDate": "string",
    "endDate": "string",
    "frequency": "string",
    "goal": 0,
    "hoursOrUnits": 0,
    "isSelfInsured": true,
    "jobCode": "string",
    "miscellaneousInfo": "string",
    "paidTowardsGoal": 0,
    "payPeriodMaximum": 0,
    "payPeriodMinimum": 0,
    "rate": 0,
    "rateCode": "string",
    "startDate": "string"
  }
]
```

> 500 Response

```json
[
  {
    "field": "string",
    "message": "string",
    "options": [
      {
        "code": "string",
        "description": "string"
      }
    ],
    "path": "string"
  }
]
```

<h3 id="get-all-earnings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|The employee does not exist|None|
|429|Too Many Requests|Too Many Requests|None|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="get-all-earnings-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[earning](#schemaearning)]|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
paylocity_auth ( Scopes: WebLinkAPI )
</aside>

## Add/Update Earning

<a id="opIdAdd or update an employee earning"></a>

> Code samples

```bash
curl https://example.com/v2/companies/string/employees/string/earnings \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "agency": "string",
    "amount": 0,
    "annualMaximum": 0,
    "calculationCode": "string",
    "costCenter1": "string",
    "costCenter2": "string",
    "costCenter3": "string",
    "earningCode": "string",
    "effectiveDate": "string",
    "endDate": "string",
    "frequency": "string",
    "goal": 0,
    "hoursOrUnits": 0,
    "isSelfInsured": true,
    "jobCode": "string",
    "miscellaneousInfo": "string",
    "paidTowardsGoal": 0,
    "payPeriodMaximum": 0,
    "payPeriodMinimum": 0,
    "rate": 0,
    "rateCode": "string",
    "startDate": "string"
  }'
```

`PUT /v2/companies/{companyId}/employees/{employeeId}/earnings`

Add/Update Earning API sends new or updated employee earnings information directly to Web Pay.

> Body parameter

```json
{
  "agency": "string",
  "amount": 0,
  "annualMaximum": 0,
  "calculationCode": "string",
  "costCenter1": "string",
  "costCenter2": "string",
  "costCenter3": "string",
  "earningCode": "string",
  "effectiveDate": "string",
  "endDate": "string",
  "frequency": "string",
  "goal": 0,
  "hoursOrUnits": 0,
  "isSelfInsured": true,
  "jobCode": "string",
  "miscellaneousInfo": "string",
  "paidTowardsGoal": 0,
  "payPeriodMaximum": 0,
  "payPeriodMinimum": 0,
  "rate": 0,
  "rateCode": "string",
  "startDate": "string"
}
```

<h3 id="addupdate-earning-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|companyId|path|string|true|Company Id|
|employeeId|path|string|true|Employee Id|
|body|body|[earning](#schemaearning)|true|Earning Model|
|» agency|body|string \| null|false|Third-party agency associated with earning. Must match Company setup.<br  />Max length: 10|
|» amount|body|number \| null|false|Value that matches CalculationCode to add to gross wages. For percentage (%), enter whole number (10 = 10%).  <br  />Decimal(12,2)|
|» annualMaximum|body|number \| null|false|Year to Date dollar amount not to be exceeded for an earning in the calendar year. Used only with company driven maximums. <br  />Decimal(12,2)|
|» calculationCode|body|string \| null|false|Defines how earnings are calculated. Common values are *% (percentage of gross), flat (flat dollar amount)*. Defaulted to the Company setup calcCode for earning. <br  />Max length: 20|
|» costCenter1|body|string \| null|false|Cost Center associated with earning. Must match Company setup.<br  /> Max length: 10|
|» costCenter2|body|string \| null|false|Cost Center associated with earning. Must match Company setup.<br  /> Max length: 10|
|» costCenter3|body|string \| null|false|Cost Center associated with earning. Must match Company setup.<br  /> Max length: 10|
|» earningCode|body|string \| null|true|Earning code. Must match Company setup. <br  />Max length: 10|
|» effectiveDate|body|string(paylocity-date) \| null|false|Date earning is active. Defaulted to run date or check date based on Company setup. Common formats are MM-DD-CCYY, CCYY-MM-DD.|
|» endDate|body|string(paylocity-date) \| null|false|Stop date of an earning. Common formats are MM-DD-CCYY, CCYY-MM-DD.|
|» frequency|body|string \| null|false|Needed if earning is applied differently from the payroll frequency (one time earning for example).<br  /> Max length: 5|
|» goal|body|number \| null|false|Dollar amount. The employee earning will stop when the goal amount is reached.<br  /> Decimal(12,2)|
|» hoursOrUnits|body|number \| null|false|The value is used in conjunction with the Rate field. When entering Group Term Life Insurance (GTL), it should contain the full amount of the group term life insurance policy. <br  /> Decimal(12,2)|
|» isSelfInsured|body|boolean \| null|false|Used for ACA. If not entered, defaulted to Company earning setup.|
|» jobCode|body|string \| null|false|Job code associated with earnings. Must match Company setup.<br  /> Max length: 20|
|» miscellaneousInfo|body|string \| null|false|Information to print on the check stub if agency is set up for this earning. <br  />Max length: 50|
|» paidTowardsGoal|body|number \| null|false|Amount already paid to employee toward goal. <br  /> Decimal(12,2)|
|» payPeriodMaximum|body|number \| null|false|Maximum amount of the earning on a single paycheck. <br  /> Decimal(12,2)|
|» payPeriodMinimum|body|number \| null|false|Minimum amount of the earning on a single paycheck. <br  /> Decimal(12,2)|
|» rate|body|number \| null|false|Rate is used in conjunction with the hoursOrUnits field. <br  /> Decimal(12,2)|
|» rateCode|body|string \| null|false|Rate Code applies to additional pay rates entered for an employee. Must match Company setup. <br  /> Max length: 10|
|» startDate|body|string(paylocity-date) \| null|true|Start date of an earning based on payroll calendar. Common formats are MM-DD-CCYY, CCYY-MM-DD.|

> Example responses

> 400 Response

```json
[
  {
    "field": "string",
    "message": "string",
    "options": [
      {
        "code": "string",
        "description": "string"
      }
    ],
    "path": "string"
  }
]
```

> 500 Response

```json
[
  {
    "field": "string",
    "message": "string",
    "options": [
      {
        "code": "string",
        "description": "string"
      }
    ],
    "path": "string"
  }
]
```

<h3 id="addupdate-earning-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully added or updated|None|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|429|Too Many Requests|Too Many Requests|None|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="addupdate-earning-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[error](#schemaerror)]|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
paylocity_auth ( Scopes: WebLinkAPI )
</aside>

## Get Earnings by Earning Code

<a id="opIdGet Earnings by Earning Code"></a>

> Code samples

```bash
curl https://example.com/v2/companies/string/employees/string/earnings/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/companies/{companyId}/employees/{employeeId}/earnings/{earningCode}`

Get Earnings returns all earnings with the provided earning code for the selected employee.

<h3 id="get-earnings-by-earning-code-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|companyId|path|string|true|Company Id|
|employeeId|path|string|true|Employee Id|
|earningCode|path|string|true|Earning Code|

> Example responses

> 200 Response

```json
[
  {
    "agency": "string",
    "amount": 0,
    "annualMaximum": 0,
    "calculationCode": "string",
    "costCenter1": "string",
    "costCenter2": "string",
    "costCenter3": "string",
    "earningCode": "string",
    "effectiveDate": "string",
    "endDate": "string",
    "frequency": "string",
    "goal": 0,
    "hoursOrUnits": 0,
    "isSelfInsured": true,
    "jobCode": "string",
    "miscellaneousInfo": "string",
    "paidTowardsGoal": 0,
    "payPeriodMaximum": 0,
    "payPeriodMinimum": 0,
    "rate": 0,
    "rateCode": "string",
    "startDate": "string"
  }
]
```

> 500 Response

```json
[
  {
    "field": "string",
    "message": "string",
    "options": [
      {
        "code": "string",
        "description": "string"
      }
    ],
    "path": "string"
  }
]
```

<h3 id="get-earnings-by-earning-code-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|The employee does not exist|None|
|429|Too Many Requests|Too Many Requests|None|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="get-earnings-by-earning-code-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[earning](#schemaearning)]|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
paylocity_auth ( Scopes: WebLinkAPI )
</aside>

## Get Earning by Earning Code and Start Date

<a id="opIdGet Earning by Earning Code and Start Date"></a>

> Code samples

```bash
curl https://example.com/v2/companies/string/employees/string/earnings/string/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/companies/{companyId}/employees/{employeeId}/earnings/{earningCode}/{startDate}`

Get Earnings returns the single earning with the provided earning code and start date for the selected employee.

<h3 id="get-earning-by-earning-code-and-start-date-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|companyId|path|string|true|Company Id|
|employeeId|path|string|true|Employee Id|
|earningCode|path|string|true|Earning Code|
|startDate|path|string|true|Start Date|

> Example responses

> 200 Response

```json
{
  "agency": "string",
  "amount": 0,
  "annualMaximum": 0,
  "calculationCode": "string",
  "costCenter1": "string",
  "costCenter2": "string",
  "costCenter3": "string",
  "earningCode": "string",
  "effectiveDate": "string",
  "endDate": "string",
  "frequency": "string",
  "goal": 0,
  "hoursOrUnits": 0,
  "isSelfInsured": true,
  "jobCode": "string",
  "miscellaneousInfo": "string",
  "paidTowardsGoal": 0,
  "payPeriodMaximum": 0,
  "payPeriodMinimum": 0,
  "rate": 0,
  "rateCode": "string",
  "startDate": "string"
}
```

> 500 Response

```json
[
  {
    "field": "string",
    "message": "string",
    "options": [
      {
        "code": "string",
        "description": "string"
      }
    ],
    "path": "string"
  }
]
```

<h3 id="get-earning-by-earning-code-and-start-date-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved|[earning](#schemaearning)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|The employee does not exist, or the specified earningCode-startDate combination does not exist|None|
|429|Too Many Requests|Too Many Requests|None|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="get-earning-by-earning-code-and-start-date-responseschema">Response Schema</h3>

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
paylocity_auth ( Scopes: WebLinkAPI )
</aside>

## Delete Earning by Earning Code and Start Date

<a id="opIdDelete Earning by Earning Code and Start Date"></a>

> Code samples

```bash
curl https://example.com/v2/companies/string/employees/string/earnings/string/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v2/companies/{companyId}/employees/{employeeId}/earnings/{earningCode}/{startDate}`

Delete Earning by Earning Code and Start Date

<h3 id="delete-earning-by-earning-code-and-start-date-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|companyId|path|string|true|Company Id|
|employeeId|path|string|true|Employee Id|
|earningCode|path|string|true|Earning Code|
|startDate|path|string|true|Start Date|

> Example responses

> 400 Response

```json
[
  {
    "field": "string",
    "message": "string",
    "options": [
      {
        "code": "string",
        "description": "string"
      }
    ],
    "path": "string"
  }
]
```

> 500 Response

```json
[
  {
    "field": "string",
    "message": "string",
    "options": [
      {
        "code": "string",
        "description": "string"
      }
    ],
    "path": "string"
  }
]
```

<h3 id="delete-earning-by-earning-code-and-start-date-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successfully deleted|None|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|The employee does not exist, or the specified earningCode-startDate combination does not exist|None|
|429|Too Many Requests|Too Many Requests|None|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="delete-earning-by-earning-code-and-start-date-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[error](#schemaerror)]|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
paylocity_auth ( Scopes: WebLinkAPI )
</aside>

<h1 id="paylocity-api-emergency-contacts">Emergency Contacts</h1>

## Add/update emergency contacts

<a id="opIdAdd or update emergency contacts"></a>

> Code samples

```bash
curl https://example.com/v2/companies/string/employees/string/emergencyContacts \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "address1": "string",
    "address2": "string",
    "city": "string",
    "country": "string",
    "county": "string",
    "email": "string",
    "firstName": "string",
    "homePhone": "string",
    "lastName": "string",
    "mobilePhone": "string",
    "notes": "string",
    "pager": "string",
    "primaryPhone": "string",
    "priority": "string",
    "relationship": "string",
    "state": "string",
    "syncEmployeeInfo": true,
    "workExtension": "string",
    "workPhone": "string",
    "zip": "string"
  }'
```

`PUT /v2/companies/{companyId}/employees/{employeeId}/emergencyContacts`

Sends new or updated employee emergency contacts directly to Web Pay.

> Body parameter

```json
{
  "address1": "string",
  "address2": "string",
  "city": "string",
  "country": "string",
  "county": "string",
  "email": "string",
  "firstName": "string",
  "homePhone": "string",
  "lastName": "string",
  "mobilePhone": "string",
  "notes": "string",
  "pager": "string",
  "primaryPhone": "string",
  "priority": "string",
  "relationship": "string",
  "state": "string",
  "syncEmployeeInfo": true,
  "workExtension": "string",
  "workPhone": "string",
  "zip": "string"
}
```

<h3 id="addupdate-emergency-contacts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|companyId|path|string|true|Company Id|
|employeeId|path|string|true|Employee Id|
|body|body|[emergencyContact](#schemaemergencycontact)|true|Emergency Contact Model|
|» address1|body|string \| null|false|1st address line.|
|» address2|body|string \| null|false|2nd address line.|
|» city|body|string \| null|false|City.|
|» country|body|string \| null|false|County.|
|» county|body|string \| null|false|Country.  Must be a valid 3 character country code.  Common values are *USA* (United States), *CAN* (Canada).|
|» email|body|string \| null|false|Contact email.  Must be valid email address format.|
|» firstName|body|string \| null|true|Required. Contact first name. <br  />Max length: 40|
|» homePhone|body|string \| null|false|Contact Home Phone.  Valid phone format  *(###) #######* or *######-####* or *### ### ####* or *##########* or, if international, starts with *+#*, only spaces and digits allowed.|
|» lastName|body|string \| null|true|Required. Contact last name. <br  />Max length: 40|
|» mobilePhone|body|string \| null|false|Contact Mobile Phone.  Valid phone format  *(###) #######* or *######-####* or *### ### ####* or *##########* or, if international, starts with *+#*, only spaces and digits allowed.|
|» notes|body|string \| null|false|Notes. <br  />Max length: 1000|
|» pager|body|string \| null|false|Contact Pager.  Valid phone format  *(###) #######* or *######-####* or *### ### ####* or *##########* or, if international, starts with *+#*, only spaces and digits allowed.|
|» primaryPhone|body|string \| null|false|Required. Contact primary phone type.  Must match Company setup.  Valid  values are H (Home), M (Mobile), P (Pager), W (Work)|
|» priority|body|string \| null|false|Required. Contact priority. Valid values are *P* (Primary) or *S* (Secondary).|
|» relationship|body|string \| null|false|Required. Contact relationship.  Must match Company setup.  Common values are Spouse, Mother, Father.|
|» state|body|string \| null|false|State or Province.  If U.S. address, must be valid 2 character state code.  Common values are *IL* (Illinois), *CA* (California).|
|» syncEmployeeInfo|body|boolean|false|Valid values are *true* or *false*.|
|» workExtension|body|string \| null|false|Work Extension.|
|» workPhone|body|string \| null|false|Contact Work Phone.  Valid phone format  *(###) #######* or *######-####* or *### ### ####* or *##########* or, if international, starts with *+#*, only spaces and digits allowed.|
|» zip|body|string \| null|false|Postal code.  If U.S. address, must be a valid zip code.|

> Example responses

> 400 Response

```json
[
  {
    "field": "string",
    "message": "string",
    "options": [
      {
        "code": "string",
        "description": "string"
      }
    ],
    "path": "string"
  }
]
```

> 500 Response

```json
[
  {
    "field": "string",
    "message": "string",
    "options": [
      {
        "code": "string",
        "description": "string"
      }
    ],
    "path": "string"
  }
]
```

<h3 id="addupdate-emergency-contacts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully added or updated|None|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|429|Too Many Requests|Too Many Requests|None|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="addupdate-emergency-contacts-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[error](#schemaerror)]|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
paylocity_auth ( Scopes: WebLinkAPI )
</aside>

<h1 id="paylocity-api-local-taxes">Local Taxes</h1>

## Get all local taxes

<a id="opIdGet all local taxes"></a>

> Code samples

```bash
curl https://example.com/v2/companies/string/employees/string/localTaxes \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/companies/{companyId}/employees/{employeeId}/localTaxes`

Returns all local taxes for the selected employee.

<h3 id="get-all-local-taxes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|companyId|path|string|true|Company Id|
|employeeId|path|string|true|Employee Id|

> Example responses

> 200 Response

```json
[
  {
    "exemptions": 0,
    "exemptions2": 0,
    "filingStatus": "string",
    "residentPSD": "string",
    "taxCode": "string",
    "workPSD": "string"
  }
]
```

> 500 Response

```json
[
  {
    "field": "string",
    "message": "string",
    "options": [
      {
        "code": "string",
        "description": "string"
      }
    ],
    "path": "string"
  }
]
```

<h3 id="get-all-local-taxes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|The employee does not exist|None|
|429|Too Many Requests|Too Many Requests|None|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="get-all-local-taxes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[localTax](#schemalocaltax)]|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
paylocity_auth ( Scopes: WebLinkAPI )
</aside>

## Add new local tax

<a id="opIdAdd local tax"></a>

> Code samples

```bash
curl https://example.com/v2/companies/string/employees/string/localTaxes \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "exemptions": 0,
    "exemptions2": 0,
    "filingStatus": "string",
    "residentPSD": "string",
    "taxCode": "string",
    "workPSD": "string"
  }'
```

`POST /v2/companies/{companyId}/employees/{employeeId}/localTaxes`

Sends new employee local tax information directly to Web Pay.

> Body parameter

```json
{
  "exemptions": 0,
  "exemptions2": 0,
  "filingStatus": "string",
  "residentPSD": "string",
  "taxCode": "string",
  "workPSD": "string"
}
```

<h3 id="add-new-local-tax-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|companyId|path|string|true|Company Id|
|employeeId|path|string|true|Employee Id|
|body|body|[localTax](#schemalocaltax)|true|LocalTax Model|
|» exemptions|body|number \| null|false|Local tax exemptions value.<br  />Decimal (12,2)|
|» exemptions2|body|number \| null|false|Local tax exemptions 2 value.<br  />Decimal (12,2)|
|» filingStatus|body|string \| null|false|Employee local tax filing status. Must match specific local tax setup. <br  /> Max length: 50|
|» residentPSD|body|string \| null|false|Resident PSD (political subdivision code) applicable in PA. Must match Company setup.<br  /> Max length: 9|
|» taxCode|body|string \| null|false|Local tax code.<br  />Max length: 50|
|» workPSD|body|string \| null|false|Work location PSD. Must match Company setup. <br  /> Max length: 9|

> Example responses

> 400 Response

```json
[
  {
    "field": "string",
    "message": "string",
    "options": [
      {
        "code": "string",
        "description": "string"
      }
    ],
    "path": "string"
  }
]
```

> 500 Response

```json
[
  {
    "field": "string",
    "message": "string",
    "options": [
      {
        "code": "string",
        "description": "string"
      }
    ],
    "path": "string"
  }
]
```

<h3 id="add-new-local-tax-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Successfully added|None|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|429|Too Many Requests|Too Many Requests|None|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="add-new-local-tax-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[error](#schemaerror)]|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
paylocity_auth ( Scopes: WebLinkAPI )
</aside>

## Get local taxes by tax code

<a id="opIdGet local tax by tax code"></a>

> Code samples

```bash
curl https://example.com/v2/companies/string/employees/string/localTaxes/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/companies/{companyId}/employees/{employeeId}/localTaxes/{taxCode}`

Returns all local taxes with the provided tax code for the selected employee.

<h3 id="get-local-taxes-by-tax-code-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|companyId|path|string|true|Company Id|
|employeeId|path|string|true|Employee Id|
|taxCode|path|string|true|Tax Code|

> Example responses

> 200 Response

```json
[
  {
    "exemptions": 0,
    "exemptions2": 0,
    "filingStatus": "string",
    "residentPSD": "string",
    "taxCode": "string",
    "workPSD": "string"
  }
]
```

> 500 Response

```json
[
  {
    "field": "string",
    "message": "string",
    "options": [
      {
        "code": "string",
        "description": "string"
      }
    ],
    "path": "string"
  }
]
```

<h3 id="get-local-taxes-by-tax-code-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|The employee does not exist, or the specified tax code does not exist|None|
|429|Too Many Requests|Too Many Requests|None|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="get-local-taxes-by-tax-code-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[localTax](#schemalocaltax)]|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
paylocity_auth ( Scopes: WebLinkAPI )
</aside>

## Delete local tax by tax code

<a id="opIdDelete local tax by tax code"></a>

> Code samples

```bash
curl https://example.com/v2/companies/string/employees/string/localTaxes/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v2/companies/{companyId}/employees/{employeeId}/localTaxes/{taxCode}`

Delete local tax by tax code

<h3 id="delete-local-tax-by-tax-code-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|companyId|path|string|true|Company Id|
|employeeId|path|string|true|Employee Id|
|taxCode|path|string|true|Tax Code|

> Example responses

> 400 Response

```json
[
  {
    "field": "string",
    "message": "string",
    "options": [
      {
        "code": "string",
        "description": "string"
      }
    ],
    "path": "string"
  }
]
```

> 500 Response

```json
[
  {
    "field": "string",
    "message": "string",
    "options": [
      {
        "code": "string",
        "description": "string"
      }
    ],
    "path": "string"
  }
]
```

<h3 id="delete-local-tax-by-tax-code-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successfully deleted|None|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|The employee does not exist, or the specified tax code does not exist|None|
|429|Too Many Requests|Too Many Requests|None|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="delete-local-tax-by-tax-code-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[error](#schemaerror)]|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
paylocity_auth ( Scopes: WebLinkAPI )
</aside>

<h1 id="paylocity-api-non-primary-state-tax">Non-Primary State Tax</h1>

## Add/update non-primary state tax

<a id="opIdAdd or update non-primary state tax"></a>

> Code samples

```bash
curl https://example.com/v2/companies/string/employees/string/nonprimaryStateTax \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "amount": 0,
    "deductionsAmount": 0,
    "dependentsAmount": 0,
    "exemptions": 0,
    "exemptions2": 0,
    "filingStatus": "string",
    "higherRate": true,
    "otherIncomeAmount": 0,
    "percentage": 0,
    "reciprocityCode": "string",
    "specialCheckCalc": "string",
    "taxCalculationCode": "string",
    "taxCode": "string",
    "w4FormYear": 0
  }'
```

`PUT /v2/companies/{companyId}/employees/{employeeId}/nonprimaryStateTax`

Sends new or updated employee non-primary state tax information directly to Web Pay.

> Body parameter

```json
{
  "amount": 0,
  "deductionsAmount": 0,
  "dependentsAmount": 0,
  "exemptions": 0,
  "exemptions2": 0,
  "filingStatus": "string",
  "higherRate": true,
  "otherIncomeAmount": 0,
  "percentage": 0,
  "reciprocityCode": "string",
  "specialCheckCalc": "string",
  "taxCalculationCode": "string",
  "taxCode": "string",
  "w4FormYear": 0
}
```

<h3 id="addupdate-non-primary-state-tax-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|companyId|path|string|true|Company Id|
|employeeId|path|string|true|Employee Id|
|body|body|[nonPrimaryStateTax](#schemanonprimarystatetax)|true|Non-Primary State Tax Model|
|» amount|body|number \| null|false|State tax code.<br  /> Max length: 50|
|» deductionsAmount|body|number|false|Box 4(b) on form W4 (year 2020 or later): Deductions amount. <br  />Decimal (12,2)|
|» dependentsAmount|body|number|false|Box 3 on form W4 (year 2020 or later): Total dependents amount. <br  />Decimal (12,2)|
|» exemptions|body|number \| null|false|State tax exemptions value.<br  />Decimal (12,2)|
|» exemptions2|body|number \| null|false|State tax exemptions 2 value.<br  />Decimal (12,2)|
|» filingStatus|body|string \| null|false|Employee state tax filing status. Common values are *S* (Single), *M* (Married).<br  />Max length: 50|
|» higherRate|body|boolean|false|Box 2(c) on form W4 (year 2020 or later): Multiple Jobs or Spouse Works. <br  />Boolean|
|» otherIncomeAmount|body|number|false|Box 4(a) on form W4 (year 2020 or later): Other income amount. <br  />Decimal (12,2)|
|» percentage|body|number \| null|false|State Tax percentage. <br  />Decimal (12,2)|
|» reciprocityCode|body|string \| null|false|Non-primary state tax reciprocity code.<br  /> Max length: 50|
|» specialCheckCalc|body|string \| null|false|Supplemental check calculation code. Common values are *Blocked* (Taxes blocked on Supplemental checks), *Supp* (Use supplemental Tax Rate-Code). <br  />Max length: 10|
|» taxCalculationCode|body|string \| null|false|Tax calculation code. Common values are *F* (Flat), *P* (Percentage), *FDFP* (Flat Dollar Amount plus Fixed Percentage). <br  />Max length: 10|
|» taxCode|body|string \| null|false|State tax code.<br  /> Max length: 50|
|» w4FormYear|body|integer|false|The state W4 form year <br  />Integer|

> Example responses

> 400 Response

```json
[
  {
    "field": "string",
    "message": "string",
    "options": [
      {
        "code": "string",
        "description": "string"
      }
    ],
    "path": "string"
  }
]
```

> 500 Response

```json
[
  {
    "field": "string",
    "message": "string",
    "options": [
      {
        "code": "string",
        "description": "string"
      }
    ],
    "path": "string"
  }
]
```

<h3 id="addupdate-non-primary-state-tax-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully added or updated|None|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|429|Too Many Requests|Too Many Requests|None|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="addupdate-non-primary-state-tax-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[error](#schemaerror)]|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
paylocity_auth ( Scopes: WebLinkAPI )
</aside>

<h1 id="paylocity-api-paystatements">PayStatements</h1>

## Get employee pay statement details data for the specified year.

<a id="opIdGets employee pay statement detail data based on the specified year"></a>

> Code samples

```bash
curl https://example.com/v2/companies/string/employees/string/paystatement/details/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/companies/{companyId}/employees/{employeeId}/paystatement/details/{year}`

Get pay statement details API will return employee pay statement details data currently available in Web Pay for the specified year.

<h3 id="get-employee-pay-statement-details-data-for-the-specified-year-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|companyId|path|string|true|Company Id|
|employeeId|path|string|true|Employee Id|
|year|path|string|true|The year for which to retrieve pay statement data|
|pagesize|query|integer|false|Number of records per page. Default value is 25.|
|pagenumber|query|integer|false|Page number to retrieve; page numbers are 0-based (so to get the first page of results, pass pagenumber=0). Default value is 0.|
|includetotalcount|query|boolean|false|Whether to include the total record count in the header's X-Pcty-Total-Count property. Default value is true.|
|codegroup|query|string|false|Retrieve pay statement details related to specific deduction, earning or tax types. Common values include 401k, Memo, Reg, OT, Cash Tips, FED and SITW.|

> Example responses

> 200 Response

```json
[
  {
    "amount": 0,
    "checkDate": "string",
    "det": "string",
    "detCode": "string",
    "detType": "string",
    "eligibleCompensation": 0,
    "hours": 0,
    "rate": 0,
    "transactionNumber": 0,
    "transactionType": "string",
    "year": 0
  }
]
```

> 404 Response

```json
[
  {
    "field": "string",
    "message": "string",
    "options": [
      {
        "code": "string",
        "description": "string"
      }
    ],
    "path": "string"
  }
]
```

> 500 Response

```json
[
  {
    "field": "string",
    "message": "string",
    "options": [
      {
        "code": "string",
        "description": "string"
      }
    ],
    "path": "string"
  }
]
```

<h3 id="get-employee-pay-statement-details-data-for-the-specified-year-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully Retrieved|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|The employee, specified year, or check date does not exist|Inline|
|429|Too Many Requests|Too Many Requests|None|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="get-employee-pay-statement-details-data-for-the-specified-year-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[payStatementDetails](#schemapaystatementdetails)]|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[error](#schemaerror)]|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
paylocity_auth ( Scopes: WebLinkAPI )
</aside>

## Get employee pay statement details data for the specified year and check date.

<a id="opIdGets employee pay statement detail data based on the specified year and check date"></a>

> Code samples

```bash
curl https://example.com/v2/companies/string/employees/string/paystatement/details/string/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/companies/{companyId}/employees/{employeeId}/paystatement/details/{year}/{checkDate}`

Get pay statement details API will return employee pay statement detail data currently available in Web Pay for the specified year and check date.

<h3 id="get-employee-pay-statement-details-data-for-the-specified-year-and-check-date-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|companyId|path|string|true|Company Id|
|employeeId|path|string|true|Employee Id|
|year|path|string|true|The year for which to retrieve pay statement data|
|checkDate|path|string|true|The check date for which to retrieve pay statement data|
|pagesize|query|integer|false|Number of records per page. Default value is 25.|
|pagenumber|query|integer|false|Page number to retrieve; page numbers are 0-based (so to get the first page of results, pass pagenumber=0). Default value is 0.|
|includetotalcount|query|boolean|false|Whether to include the total record count in the header's X-Pcty-Total-Count property. Default value is true.|
|codegroup|query|string|false|Retrieve pay statement details related to specific deduction, earning or tax types. Common values include 401k, Memo, Reg, OT, Cash Tips, FED and SITW.|

> Example responses

> 200 Response

```json
[
  {
    "amount": 0,
    "checkDate": "string",
    "det": "string",
    "detCode": "string",
    "detType": "string",
    "eligibleCompensation": 0,
    "hours": 0,
    "rate": 0,
    "transactionNumber": 0,
    "transactionType": "string",
    "year": 0
  }
]
```

> 404 Response

```json
[
  {
    "field": "string",
    "message": "string",
    "options": [
      {
        "code": "string",
        "description": "string"
      }
    ],
    "path": "string"
  }
]
```

> 500 Response

```json
[
  {
    "field": "string",
    "message": "string",
    "options": [
      {
        "code": "string",
        "description": "string"
      }
    ],
    "path": "string"
  }
]
```

<h3 id="get-employee-pay-statement-details-data-for-the-specified-year-and-check-date-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully Retrieved|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|The employee, specified year, or check date does not exist|Inline|
|429|Too Many Requests|Too Many Requests|None|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="get-employee-pay-statement-details-data-for-the-specified-year-and-check-date-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[payStatementDetails](#schemapaystatementdetails)]|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[error](#schemaerror)]|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
paylocity_auth ( Scopes: WebLinkAPI )
</aside>

## Get employee pay statement summary data for the specified year.

<a id="opIdGets employee pay statement summary data based on the specified year"></a>

> Code samples

```bash
curl https://example.com/v2/companies/string/employees/string/paystatement/summary/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/companies/{companyId}/employees/{employeeId}/paystatement/summary/{year}`

Get pay statement summary API will return employee pay statement summary data currently available in Web Pay for the specified year.

<h3 id="get-employee-pay-statement-summary-data-for-the-specified-year-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|companyId|path|string|true|Company Id|
|employeeId|path|string|true|Employee Id|
|year|path|string|true|The year for which to retrieve pay statement data|
|pagesize|query|integer|false|Number of records per page. Default value is 25.|
|pagenumber|query|integer|false|Page number to retrieve; page numbers are 0-based (so to get the first page of results, pass pagenumber=0). Default value is 0.|
|includetotalcount|query|boolean|false|Whether to include the total record count in the header's X-Pcty-Total-Count property. Default value is true.|
|codegroup|query|string|false|Retrieve pay statement details related to specific deduction, earning or tax types. Common values include 401k, Memo, Reg, OT, Cash Tips, FED and SITW.|

> Example responses

> 200 Response

```json
[
  {
    "autoPay": true,
    "beginDate": "string",
    "checkDate": "string",
    "checkNumber": 0,
    "directDepositAmount": 0,
    "endDate": "string",
    "grossPay": 0,
    "hours": 0,
    "netCheck": 0,
    "netPay": 0,
    "overtimeDollars": 0,
    "overtimeHours": 0,
    "process": 0,
    "regularDollars": 0,
    "regularHours": 0,
    "transactionNumber": 0,
    "voucherNumber": 0,
    "workersCompCode": "string",
    "year": 0
  }
]
```

> 404 Response

```json
[
  {
    "field": "string",
    "message": "string",
    "options": [
      {
        "code": "string",
        "description": "string"
      }
    ],
    "path": "string"
  }
]
```

> 500 Response

```json
[
  {
    "field": "string",
    "message": "string",
    "options": [
      {
        "code": "string",
        "description": "string"
      }
    ],
    "path": "string"
  }
]
```

<h3 id="get-employee-pay-statement-summary-data-for-the-specified-year-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully Retrieved|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|The employee, specified year, or check date does not exist|Inline|
|429|Too Many Requests|Too Many Requests|None|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="get-employee-pay-statement-summary-data-for-the-specified-year-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[payStatementSummary](#schemapaystatementsummary)]|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[error](#schemaerror)]|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
paylocity_auth ( Scopes: WebLinkAPI )
</aside>

## Get employee pay statement summary data for the specified year and check date.

<a id="opIdGets employee pay statement summary data based on the specified year and check date"></a>

> Code samples

```bash
curl https://example.com/v2/companies/string/employees/string/paystatement/summary/string/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/companies/{companyId}/employees/{employeeId}/paystatement/summary/{year}/{checkDate}`

Get pay statement summary API will return employee pay statement summary data currently available in Web Pay for the specified year and check date.

<h3 id="get-employee-pay-statement-summary-data-for-the-specified-year-and-check-date-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|companyId|path|string|true|Company Id|
|employeeId|path|string|true|Employee Id|
|year|path|string|true|The year for which to retrieve pay statement data|
|checkDate|path|string|true|The check date for which to retrieve pay statement data|
|pagesize|query|integer|false|Number of records per page. Default value is 25.|
|pagenumber|query|integer|false|Page number to retrieve; page numbers are 0-based (so to get the first page of results, pass pagenumber=0). Default value is 0.|
|includetotalcount|query|boolean|false|Whether to include the total record count in the header's X-Pcty-Total-Count property. Default value is true.|
|codegroup|query|string|false|Retrieve pay statement details related to specific deduction, earning or tax types. Common values include 401k, Memo, Reg, OT, Cash Tips, FED and SITW.|

> Example responses

> 200 Response

```json
[
  {
    "autoPay": true,
    "beginDate": "string",
    "checkDate": "string",
    "checkNumber": 0,
    "directDepositAmount": 0,
    "endDate": "string",
    "grossPay": 0,
    "hours": 0,
    "netCheck": 0,
    "netPay": 0,
    "overtimeDollars": 0,
    "overtimeHours": 0,
    "process": 0,
    "regularDollars": 0,
    "regularHours": 0,
    "transactionNumber": 0,
    "voucherNumber": 0,
    "workersCompCode": "string",
    "year": 0
  }
]
```

> 404 Response

```json
[
  {
    "field": "string",
    "message": "string",
    "options": [
      {
        "code": "string",
        "description": "string"
      }
    ],
    "path": "string"
  }
]
```

> 500 Response

```json
[
  {
    "field": "string",
    "message": "string",
    "options": [
      {
        "code": "string",
        "description": "string"
      }
    ],
    "path": "string"
  }
]
```

<h3 id="get-employee-pay-statement-summary-data-for-the-specified-year-and-check-date-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully Retrieved|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|The employee, specified year, or check date does not exist|Inline|
|429|Too Many Requests|Too Many Requests|None|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="get-employee-pay-statement-summary-data-for-the-specified-year-and-check-date-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[payStatementSummary](#schemapaystatementsummary)]|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[error](#schemaerror)]|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
paylocity_auth ( Scopes: WebLinkAPI )
</aside>

<h1 id="paylocity-api-primary-state-tax">Primary State Tax</h1>

## Add/update primary state tax

<a id="opIdAdd or update primary state tax"></a>

> Code samples

```bash
curl https://example.com/v2/companies/string/employees/string/primaryStateTax \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "amount": 0,
    "deductionsAmount": 0,
    "dependentsAmount": 0,
    "exemptions": 0,
    "exemptions2": 0,
    "filingStatus": "string",
    "higherRate": true,
    "otherIncomeAmount": 0,
    "percentage": 0,
    "specialCheckCalc": "string",
    "taxCalculationCode": "string",
    "taxCode": "string",
    "w4FormYear": 0
  }'
```

`PUT /v2/companies/{companyId}/employees/{employeeId}/primaryStateTax`

Sends new or updated employee primary state tax information directly to Web Pay.

> Body parameter

```json
{
  "amount": 0,
  "deductionsAmount": 0,
  "dependentsAmount": 0,
  "exemptions": 0,
  "exemptions2": 0,
  "filingStatus": "string",
  "higherRate": true,
  "otherIncomeAmount": 0,
  "percentage": 0,
  "specialCheckCalc": "string",
  "taxCalculationCode": "string",
  "taxCode": "string",
  "w4FormYear": 0
}
```

<h3 id="addupdate-primary-state-tax-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|companyId|path|string|true|Company Id|
|employeeId|path|string|true|Employee Id|
|body|body|[stateTax](#schemastatetax)|true|Primary State Tax Model|
|» amount|body|number \| null|false|State tax code.<br  /> Max length: 50|
|» deductionsAmount|body|number|false|Box 4(b) on form W4 (year 2020 or later): Deductions amount. <br  />Decimal (12,2)|
|» dependentsAmount|body|number|false|Box 3 on form W4 (year 2020 or later): Total dependents amount. <br  />Decimal (12,2)|
|» exemptions|body|number \| null|false|State tax exemptions value.<br  />Decimal (12,2)|
|» exemptions2|body|number \| null|false|State tax exemptions 2 value.<br  />Decimal (12,2)|
|» filingStatus|body|string \| null|false|Employee state tax filing status. Common values are *S* (Single), *M* (Married).<br  />Max length: 50|
|» higherRate|body|boolean|false|Box 2(c) on form W4 (year 2020 or later): Multiple Jobs or Spouse Works. <br  />Boolean|
|» otherIncomeAmount|body|number|false|Box 4(a) on form W4 (year 2020 or later): Other income amount. <br  />Decimal (12,2)|
|» percentage|body|number \| null|false|State Tax percentage. <br  />Decimal (12,2)|
|» specialCheckCalc|body|string \| null|false|Supplemental check calculation code. Common values are *Blocked* (Taxes blocked on Supplemental checks), *Supp* (Use supplemental Tax Rate-Code). <br  />Max length: 10|
|» taxCalculationCode|body|string \| null|false|Tax calculation code. Common values are *F* (Flat), *P* (Percentage), *FDFP* (Flat Dollar Amount plus Fixed Percentage). <br  />Max length: 10|
|» taxCode|body|string \| null|false|State tax code.<br  /> Max length: 50|
|» w4FormYear|body|integer|false|The state W4 form year <br  />Integer|

> Example responses

> 400 Response

```json
[
  {
    "field": "string",
    "message": "string",
    "options": [
      {
        "code": "string",
        "description": "string"
      }
    ],
    "path": "string"
  }
]
```

> 500 Response

```json
[
  {
    "field": "string",
    "message": "string",
    "options": [
      {
        "code": "string",
        "description": "string"
      }
    ],
    "path": "string"
  }
]
```

<h3 id="addupdate-primary-state-tax-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully added or updated|None|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|429|Too Many Requests|Too Many Requests|None|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="addupdate-primary-state-tax-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[error](#schemaerror)]|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
paylocity_auth ( Scopes: WebLinkAPI )
</aside>

<h1 id="paylocity-api-sensitive-data">Sensitive Data</h1>

## Get sensitive data

<a id="opIdGet sensitive data"></a>

> Code samples

```bash
curl https://example.com/v2/companies/string/employees/string/sensitivedata \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/companies/{companyId}/employees/{employeeId}/sensitivedata`

Gets employee sensitive data information directly from Web Pay.

<h3 id="get-sensitive-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|companyId|path|string|true|Company Id|
|employeeId|path|string|true|Employee Id|

> Example responses

> 200 Response

```json
[
  {
    "disability": {
      "disability": "string",
      "disabilityClassifications": [
        {
          "classification": "string"
        }
      ],
      "hasDisability": "string"
    },
    "ethnicity": {
      "ethnicRacialIdentities": [
        {
          "description": "string"
        }
      ],
      "ethnicity": "string"
    },
    "gender": {
      "displayPronouns": true,
      "genderIdentityDescription": "string",
      "identifyAsLegalGender": "string",
      "legalGender": "string",
      "pronouns": "string",
      "sexualOrientation": "string"
    },
    "veteran": {
      "isVeteran": "string",
      "veteran": "string"
    }
  }
]
```

> 400 Response

```json
[
  {
    "field": "string",
    "message": "string",
    "options": [
      {
        "code": "string",
        "description": "string"
      }
    ],
    "path": "string"
  }
]
```

> 500 Response

```json
[
  {
    "field": "string",
    "message": "string",
    "options": [
      {
        "code": "string",
        "description": "string"
      }
    ],
    "path": "string"
  }
]
```

<h3 id="get-sensitive-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully Retrieved|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|429|Too Many Requests|Too Many Requests|None|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="get-sensitive-data-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[sensitiveData](#schemasensitivedata)]|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[error](#schemaerror)]|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
paylocity_auth ( Scopes: WebLinkAPI )
</aside>

## Add/update sensitive data

<a id="opIdAdd or update Sensitive Data"></a>

> Code samples

```bash
curl https://example.com/v2/companies/string/employees/string/sensitivedata \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "disability": {
      "disability": "string",
      "disabilityClassifications": [
        {
          "classification": "string"
        }
      ],
      "hasDisability": "string"
    },
    "ethnicity": {
      "ethnicRacialIdentities": [
        {
          "description": "string"
        }
      ],
      "ethnicity": "string"
    },
    "gender": {
      "displayPronouns": true,
      "genderIdentityDescription": "string",
      "identifyAsLegalGender": "string",
      "legalGender": "string",
      "pronouns": "string",
      "sexualOrientation": "string"
    },
    "veteran": {
      "isVeteran": "string",
      "veteran": "string"
    }
  }'
```

`PUT /v2/companies/{companyId}/employees/{employeeId}/sensitivedata`

Sends new or updated employee sensitive data information directly to Web Pay.

> Body parameter

```json
{
  "disability": {
    "disability": "string",
    "disabilityClassifications": [
      {
        "classification": "string"
      }
    ],
    "hasDisability": "string"
  },
  "ethnicity": {
    "ethnicRacialIdentities": [
      {
        "description": "string"
      }
    ],
    "ethnicity": "string"
  },
  "gender": {
    "displayPronouns": true,
    "genderIdentityDescription": "string",
    "identifyAsLegalGender": "string",
    "legalGender": "string",
    "pronouns": "string",
    "sexualOrientation": "string"
  },
  "veteran": {
    "isVeteran": "string",
    "veteran": "string"
  }
}
```

<h3 id="addupdate-sensitive-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|companyId|path|string|true|Company Id|
|employeeId|path|string|true|Employee Id|
|body|body|[sensitiveData](#schemasensitivedata)|true|Sensitive Data Model|
|» disability|body|object|false|Add or update disability data.|
|» » disability|body|string \| null|false|Description of employee's disability or accommodation.<br  />Max length: 50|
|» » disabilityClassifications|body|[object]|false|Add or update employee's disability classifications|
|» » » classification|body|string \| null|false|Indicates the type of disability. This field is only allowed if hasDisability is set to 1=Yes. Values include:<br  /><br  />Auditory<br  />Cognitive, learning, and neurological<br  />Physical<br  />Speech<br  />Vision<br  />Prefer not to say<br  /><br  />Valid values can be obtained from Company Codes endpoint, codeResource = disabilityClassification|
|» » hasDisability|body|string \| null|false|Indicates if the employee has a disability. Values include:<br  /><br  />0 = No<br  />1 = Yes<br  />2 = Prefer not to say|
|» ethnicity|body|object|false|Add or update ethnicity data.|
|» » ethnicRacialIdentities|body|[object]|false|Add or update Ethnic Racial Identity|
|» » » description|body|string \| null|false|Employee's preferred or chosen ethnicity or race.<br  />Max length: 40.|
|» » ethnicity|body|string \| null|false|Employee's legal ethnicity or race.<br  />A = Asian<br  />B = Black<br  />H = Hispanic<br  />I = American Indian<br  />N = Native Hawaiian or Pacific Islander<br  />T = Two or More Races<br  />W = White<br  /><br  />Valid values can be obtained from Company Codes endpoint, codeResource = ethnicity|
|» gender|body|object|false|Add or update gender data.|
|» » displayPronouns|body|boolean \| null|false|Specifies whether employee's preferred pronouns will be displayed to co-workers in Community, Directory, etc. Values include:<br  /><br  />0 = No<br  />1 = Yes|
|» » genderIdentityDescription|body|string \| null|false|Employee's preferred or chosen gender identification.<br  />Max length: 40|
|» » identifyAsLegalGender|body|string \| null|false|Employee's self-identification of legal gender. Numerical values include:<br  /><br  />0 = No<br  />1 = Yes<br  />2 = Prefer not to say|
|» » legalGender|body|string \| null|false|Employee's legal gender. Values include:<br  /><br  />M = Male<br  />F = Female<br  /><br  />Valid values can be obtained from Company Codes endpoint, codeResource = legalGender|
|» » pronouns|body|string \| null|false|Employee's preferred or chosen pronouns. Values include:<br  /><br  />He / Him / His<br  />She / Her / Hers<br  />They / Them / Theirs<br  />Prefer not to say<br  /><br  />Valid values can be obtained from Company Codes endpoint, codeResource = preferredPronouns|
|» » sexualOrientation|body|string \| null|false|Employee's self-identification of sexual orientation. Values may include values below. Additionally, any custom value may be provided.<br  /><br  />Asexual<br  />Gay / Lesbian<br  />Heterosexual / Straight<br  />Pansexual<br  />Queer<br  />Bisexual<br  />Prefer not to say|
|» veteran|body|object|false|Add or update veteran data.|
|» » isVeteran|body|string \| null|false|Indicates if the employee is a veteran.  Values include:<br  /><br  />0 = No<br  />1 = Yes<br  />2 = Prefer not to say|
|» » veteran|body|string \| null|false|Employee's Veteran Notes<br  />Max length: 50|

> Example responses

> 400 Response

```json
[
  {
    "field": "string",
    "message": "string",
    "options": [
      {
        "code": "string",
        "description": "string"
      }
    ],
    "path": "string"
  }
]
```

> 500 Response

```json
[
  {
    "field": "string",
    "message": "string",
    "options": [
      {
        "code": "string",
        "description": "string"
      }
    ],
    "path": "string"
  }
]
```

<h3 id="addupdate-sensitive-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully added or updated|None|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|429|Too Many Requests|Too Many Requests|None|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="addupdate-sensitive-data-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[error](#schemaerror)]|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
paylocity_auth ( Scopes: WebLinkAPI )
</aside>

<h1 id="paylocity-api-company-specific-schema">Company-Specific Schema</h1>

## Get Company-Specific Open API Documentation

<a id="opIdGet company-specific Open API documentation"></a>

> Code samples

```bash
curl https://example.com/v2/companies/string/openapi \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/companies/{companyId}/openapi`

The company-specific Open API endpoint allows the client to GET an Open API document for the Paylocity API that is customized with company-specific resource schemas. These customized resource schemas define certain properties as enumerations of pre-defined values that correspond to the company's setup with Web Pay. The customized schemas also indicate which properties are required by the company within Web Pay.<br  />To learn more about Open API, click [here](https://www.openapis.org/)

<h3 id="get-company-specific-open-api-documentation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|Bearer + JWT|
|companyId|path|string|true|Company Id|

> Example responses

> 400 Response

```json
[
  {
    "field": "string",
    "message": "string",
    "options": [
      {
        "code": "string",
        "description": "string"
      }
    ],
    "path": "string"
  }
]
```

> 500 Response

```json
[
  {
    "field": "string",
    "message": "string",
    "options": [
      {
        "code": "string",
        "description": "string"
      }
    ],
    "path": "string"
  }
]
```

<h3 id="get-company-specific-open-api-documentation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully retrieved|None|
|400|Bad Request|Bad Request|Inline|
|403|Forbidden|Forbidden|None|
|429|Too Many Requests|Too Many Requests|None|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="get-company-specific-open-api-documentation-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[error](#schemaerror)]|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
paylocity_auth ( Scopes: WebLinkAPI )
</aside>

<h1 id="paylocity-api-client-credentials">Client Credentials</h1>

## Obtain new client secret.

<a id="opIdAdd Client Secret"></a>

> Code samples

```bash
curl https://example.com/v2/credentials/secrets \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "code": "string"
  }'
```

`POST /v2/credentials/secrets`

Obtain new client secret for Paylocity-issued client id. See Setup section for details.

> Body parameter

```json
{
  "code": "string"
}
```

<h3 id="obtain-new-client-secret-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[addClientSecret](#schemaaddclientsecret)|true|Add Client Secret Model|
|» code|body|string|true|A value sent with the 'ACTION NEEDED: Web Link API Credentials Expiring Soon.' email notification.|

> Example responses

> 200 Response

```json
[
  {
    "clientSecret": "string",
    "clientSecretExpirationDate": "string"
  }
]
```

> 400 Response

```json
[
  {
    "field": "string",
    "message": "string",
    "options": [
      {
        "code": "string",
        "description": "string"
      }
    ],
    "path": "string"
  }
]
```

> 500 Response

```json
[
  {
    "field": "string",
    "message": "string",
    "options": [
      {
        "code": "string",
        "description": "string"
      }
    ],
    "path": "string"
  }
]
```

<h3 id="obtain-new-client-secret-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully added|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|429|Too Many Requests|Too Many Requests|None|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="obtain-new-client-secret-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[clientCredentialsResponse](#schemaclientcredentialsresponse)]|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[error](#schemaerror)]|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
paylocity_auth ( Scopes: WebLinkAPI )
</aside>

<h1 id="paylocity-api-employee-staging">Employee Staging</h1>

## Add new employee to Web Link

<a id="opIdAdd new employee to Web Link"></a>

> Code samples

```bash
curl https://example.com/v2/weblinkstaging/companies/string/employees/newemployees \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "additionalDirectDeposit": [
      {
        "accountNumber": "string",
        "accountType": "string",
        "amount": 0,
        "amountType": "string",
        "isSkipPreNote": true,
        "preNoteDate": "string",
        "routingNumber": "string"
      }
    ],
    "benefitSetup": [
      {
        "benefitClass": "string",
        "benefitClassEffectiveDate": "string",
        "benefitSalary": 0,
        "benefitSalaryEffectiveDate": "string",
        "doNotApplyAdministrativePeriod": true,
        "isMeasureAcaEligibility": true
      }
    ],
    "birthDate": "string",
    "customBooleanFields": [
      {
        "category": "PayrollAndHR",
        "label": "string",
        "value": true
      }
    ],
    "customDateFields": [
      {
        "category": "PayrollAndHR",
        "label": "string",
        "value": "string"
      }
    ],
    "customDropDownFields": [
      {
        "category": "PayrollAndHR",
        "label": "string",
        "value": "string"
      }
    ],
    "customNumberFields": [
      {
        "category": "PayrollAndHR",
        "label": "string",
        "value": 0
      }
    ],
    "customTextFields": [
      {
        "category": "PayrollAndHR",
        "label": "string",
        "value": "string"
      }
    ],
    "departmentPosition": [
      {
        "changeReason": "string",
        "clockBadgeNumber": "string",
        "costCenter1": "string",
        "costCenter2": "string",
        "costCenter3": "string",
        "effectiveDate": "string",
        "employeeType": "string",
        "equalEmploymentOpportunityClass": "string",
        "isMinimumWageExempt": true,
        "isOvertimeExempt": true,
        "isSupervisorReviewer": true,
        "isUnionDuesCollected": true,
        "isUnionInitiationCollected": true,
        "jobTitle": "string",
        "payGroup": "string",
        "positionCode": "string",
        "shift": "string",
        "supervisorCompanyNumber": "string",
        "supervisorEmployeeId": "string",
        "tipped": "string",
        "unionAffiliationDate": "string",
        "unionCode": "string",
        "unionPosition": "string",
        "workersCompensation": "string"
      }
    ],
    "disabilityDescription": "string",
    "employeeId": "string",
    "ethnicity": "string",
    "federalTax": [
      {
        "amount": 0,
        "deductionsAmount": 0,
        "dependentsAmount": 0,
        "exemptions": 0,
        "filingStatus": "string",
        "higherRate": true,
        "otherIncomeAmount": 0,
        "percentage": 0,
        "taxCalculationCode": "string",
        "w4FormYear": 0
      }
    ],
    "firstName": "string",
    "fitwExemptReason": "string",
    "futaExemptReason": "string",
    "gender": "string",
    "homeAddress": [
      {
        "address1": "string",
        "address2": "string",
        "city": "string",
        "country": "string",
        "county": "string",
        "emailAddress": "string",
        "mobilePhone": "string",
        "phone": "string",
        "postalCode": "string",
        "state": "string"
      }
    ],
    "isEmployee943": true,
    "isSmoker": true,
    "lastName": "string",
    "localTax": [
      {
        "exemptions": 0,
        "exemptions2": 0,
        "filingStatus": "string",
        "residentPSD": "string",
        "taxCode": "string",
        "workPSD": "string"
      }
    ],
    "mainDirectDeposit": [
      {
        "accountNumber": "string",
        "accountType": "string",
        "isSkipPreNote": true,
        "preNoteDate": "string",
        "routingNumber": "string"
      }
    ],
    "maritalStatus": "string",
    "medExemptReason": "string",
    "middleName": "string",
    "nonPrimaryStateTax": [
      {
        "amount": 0,
        "deductionsAmount": 0,
        "dependentsAmount": 0,
        "exemptions": 0,
        "exemptions2": 0,
        "filingStatus": "string",
        "higherRate": true,
        "otherIncomeAmount": 0,
        "percentage": 0,
        "reciprocityCode": "string",
        "specialCheckCalc": "string",
        "taxCalculationCode": "string",
        "taxCode": "string",
        "w4FormYear": 0
      }
    ],
    "preferredName": "string",
    "primaryPayRate": [
      {
        "baseRate": 0,
        "changeReason": "string",
        "defaultHours": 0,
        "effectiveDate": "string",
        "isAutoPay": true,
        "payFrequency": "string",
        "payGrade": "string",
        "payType": "string",
        "ratePer": "string",
        "salary": 0
      }
    ],
    "primaryStateTax": [
      {
        "amount": 0,
        "deductionsAmount": 0,
        "dependentsAmount": 0,
        "exemptions": 0,
        "exemptions2": 0,
        "filingStatus": "string",
        "higherRate": true,
        "otherIncomeAmount": 0,
        "percentage": 0,
        "specialCheckCalc": "string",
        "taxCalculationCode": "string",
        "taxCode": "string",
        "w4FormYear": 0
      }
    ],
    "priorLastName": "string",
    "salutation": "string",
    "sitwExemptReason": "string",
    "ssExemptReason": "string",
    "ssn": "string",
    "status": [
      {
        "adjustedSeniorityDate": "string",
        "changeReason": "string",
        "effectiveDate": "string",
        "employeeStatus": "string",
        "hireDate": "string",
        "isEligibleForRehire": true
      }
    ],
    "suffix": "string",
    "suiExemptReason": "string",
    "suiState": "string",
    "taxDistributionCode1099R": "string",
    "taxForm": "string",
    "veteranDescription": "string",
    "webTime": {
      "badgeNumber": "string",
      "chargeRate": 0,
      "isTimeLaborEnabled": true
    },
    "workAddress": [
      {
        "address1": "string",
        "address2": "string",
        "city": "string",
        "country": "string",
        "county": "string",
        "emailAddress": "string",
        "mobilePhone": "string",
        "pager": "string",
        "phone": "string",
        "phoneExtension": "string",
        "postalCode": "string",
        "state": "string"
      }
    ],
    "workEligibility": [
      {
        "alienOrAdmissionDocumentNumber": "string",
        "attestedDate": "string",
        "countryOfIssuance": "string",
        "foreignPassportNumber": "string",
        "i94AdmissionNumber": "string",
        "i9DateVerified": "string",
        "i9Notes": "string",
        "isI9Verified": true,
        "isSsnVerified": true,
        "ssnDateVerified": "string",
        "ssnNotes": "string",
        "visaType": "string",
        "workAuthorization": "string",
        "workUntil": "string"
      }
    ]
  }'
```

`POST /v2/weblinkstaging/companies/{companyId}/employees/newemployees`

Add new employee to Web Link will send partially completed or potentially erroneous new hire record to Web Link, where it can be corrected and competed by company administrator or authorized Paylocity Service Bureau employee.

> Body parameter

```json
{
  "additionalDirectDeposit": [
    {
      "accountNumber": "string",
      "accountType": "string",
      "amount": 0,
      "amountType": "string",
      "isSkipPreNote": true,
      "preNoteDate": "string",
      "routingNumber": "string"
    }
  ],
  "benefitSetup": [
    {
      "benefitClass": "string",
      "benefitClassEffectiveDate": "string",
      "benefitSalary": 0,
      "benefitSalaryEffectiveDate": "string",
      "doNotApplyAdministrativePeriod": true,
      "isMeasureAcaEligibility": true
    }
  ],
  "birthDate": "string",
  "customBooleanFields": [
    {
      "category": "PayrollAndHR",
      "label": "string",
      "value": true
    }
  ],
  "customDateFields": [
    {
      "category": "PayrollAndHR",
      "label": "string",
      "value": "string"
    }
  ],
  "customDropDownFields": [
    {
      "category": "PayrollAndHR",
      "label": "string",
      "value": "string"
    }
  ],
  "customNumberFields": [
    {
      "category": "PayrollAndHR",
      "label": "string",
      "value": 0
    }
  ],
  "customTextFields": [
    {
      "category": "PayrollAndHR",
      "label": "string",
      "value": "string"
    }
  ],
  "departmentPosition": [
    {
      "changeReason": "string",
      "clockBadgeNumber": "string",
      "costCenter1": "string",
      "costCenter2": "string",
      "costCenter3": "string",
      "effectiveDate": "string",
      "employeeType": "string",
      "equalEmploymentOpportunityClass": "string",
      "isMinimumWageExempt": true,
      "isOvertimeExempt": true,
      "isSupervisorReviewer": true,
      "isUnionDuesCollected": true,
      "isUnionInitiationCollected": true,
      "jobTitle": "string",
      "payGroup": "string",
      "positionCode": "string",
      "shift": "string",
      "supervisorCompanyNumber": "string",
      "supervisorEmployeeId": "string",
      "tipped": "string",
      "unionAffiliationDate": "string",
      "unionCode": "string",
      "unionPosition": "string",
      "workersCompensation": "string"
    }
  ],
  "disabilityDescription": "string",
  "employeeId": "string",
  "ethnicity": "string",
  "federalTax": [
    {
      "amount": 0,
      "deductionsAmount": 0,
      "dependentsAmount": 0,
      "exemptions": 0,
      "filingStatus": "string",
      "higherRate": true,
      "otherIncomeAmount": 0,
      "percentage": 0,
      "taxCalculationCode": "string",
      "w4FormYear": 0
    }
  ],
  "firstName": "string",
  "fitwExemptReason": "string",
  "futaExemptReason": "string",
  "gender": "string",
  "homeAddress": [
    {
      "address1": "string",
      "address2": "string",
      "city": "string",
      "country": "string",
      "county": "string",
      "emailAddress": "string",
      "mobilePhone": "string",
      "phone": "string",
      "postalCode": "string",
      "state": "string"
    }
  ],
  "isEmployee943": true,
  "isSmoker": true,
  "lastName": "string",
  "localTax": [
    {
      "exemptions": 0,
      "exemptions2": 0,
      "filingStatus": "string",
      "residentPSD": "string",
      "taxCode": "string",
      "workPSD": "string"
    }
  ],
  "mainDirectDeposit": [
    {
      "accountNumber": "string",
      "accountType": "string",
      "isSkipPreNote": true,
      "preNoteDate": "string",
      "routingNumber": "string"
    }
  ],
  "maritalStatus": "string",
  "medExemptReason": "string",
  "middleName": "string",
  "nonPrimaryStateTax": [
    {
      "amount": 0,
      "deductionsAmount": 0,
      "dependentsAmount": 0,
      "exemptions": 0,
      "exemptions2": 0,
      "filingStatus": "string",
      "higherRate": true,
      "otherIncomeAmount": 0,
      "percentage": 0,
      "reciprocityCode": "string",
      "specialCheckCalc": "string",
      "taxCalculationCode": "string",
      "taxCode": "string",
      "w4FormYear": 0
    }
  ],
  "preferredName": "string",
  "primaryPayRate": [
    {
      "baseRate": 0,
      "changeReason": "string",
      "defaultHours": 0,
      "effectiveDate": "string",
      "isAutoPay": true,
      "payFrequency": "string",
      "payGrade": "string",
      "payType": "string",
      "ratePer": "string",
      "salary": 0
    }
  ],
  "primaryStateTax": [
    {
      "amount": 0,
      "deductionsAmount": 0,
      "dependentsAmount": 0,
      "exemptions": 0,
      "exemptions2": 0,
      "filingStatus": "string",
      "higherRate": true,
      "otherIncomeAmount": 0,
      "percentage": 0,
      "specialCheckCalc": "string",
      "taxCalculationCode": "string",
      "taxCode": "string",
      "w4FormYear": 0
    }
  ],
  "priorLastName": "string",
  "salutation": "string",
  "sitwExemptReason": "string",
  "ssExemptReason": "string",
  "ssn": "string",
  "status": [
    {
      "adjustedSeniorityDate": "string",
      "changeReason": "string",
      "effectiveDate": "string",
      "employeeStatus": "string",
      "hireDate": "string",
      "isEligibleForRehire": true
    }
  ],
  "suffix": "string",
  "suiExemptReason": "string",
  "suiState": "string",
  "taxDistributionCode1099R": "string",
  "taxForm": "string",
  "veteranDescription": "string",
  "webTime": {
    "badgeNumber": "string",
    "chargeRate": 0,
    "isTimeLaborEnabled": true
  },
  "workAddress": [
    {
      "address1": "string",
      "address2": "string",
      "city": "string",
      "country": "string",
      "county": "string",
      "emailAddress": "string",
      "mobilePhone": "string",
      "pager": "string",
      "phone": "string",
      "phoneExtension": "string",
      "postalCode": "string",
      "state": "string"
    }
  ],
  "workEligibility": [
    {
      "alienOrAdmissionDocumentNumber": "string",
      "attestedDate": "string",
      "countryOfIssuance": "string",
      "foreignPassportNumber": "string",
      "i94AdmissionNumber": "string",
      "i9DateVerified": "string",
      "i9Notes": "string",
      "isI9Verified": true,
      "isSsnVerified": true,
      "ssnDateVerified": "string",
      "ssnNotes": "string",
      "visaType": "string",
      "workAuthorization": "string",
      "workUntil": "string"
    }
  ]
}
```

<h3 id="add-new-employee-to-web-link-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|companyId|path|string|true|Company Id|
|body|body|[stagedEmployee](#schemastagedemployee)|true|StagedEmployee Model|
|» additionalDirectDeposit|body|[object]|false|Add up to 19 direct deposit accounts in addition to the main direct deposit account. IMPORTANT: A direct deposit update will remove ALL existing main and additional direct deposit information in WebPay and replace with information provided on the request. GET API will not return direct deposit data.|
|» » accountNumber|body|string \| null|false|Account number, entered without special characters and spaces. <br  />Max length: 17<br />|
|» » accountType|body|string \| null|false|Account type. Valid values are *C* (Checking), *S* (Saving), *P* (Pay Card). <br   />Max length: 1<br />|
|» » amount|body|number \| null|false|Amount value to be deposited to the account.<br  />Decimal (12,2)<br />|
|» » amountType|body|string \| null|false|Amount type to indicate the context of the amount. Common values are *F* (FLAT), *F-* (Net Minus), *P* (Percent). <br  /> Max length: 5<br />|
|» » isSkipPreNote|body|boolean \| null|false|Indicates if account will not pre-note.<br />|
|» » preNoteDate|body|string(paylocity-date) \| null|false|Date to end the pre-note of the account. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.<br />|
|» » routingNumber|body|string \| null|false|ABA Transit Routing Number, entered without dashes or spaces. <br  />Max length: 9<br />|
|» benefitSetup|body|[object]|false|Add setup values used for employee benefits integration, insurance plan settings, and ACA reporting.|
|» » benefitClass|body|string \| null|false|Benefit Class code. Values are configured in Web Pay Company > Setup > Benefits > Classes.<br  />Max length: 30|
|» » benefitClassEffectiveDate|body|string(paylocity-date) \| null|false|Date when Benefit Class takes effect. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.|
|» » benefitSalary|body|number \| null|false|Salary used to configure benefits.<br  />Decimal(12,2)|
|» » benefitSalaryEffectiveDate|body|string(paylocity-date) \| null|false|Date when Benefit Salary takes effect. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.|
|» » doNotApplyAdministrativePeriod|body|boolean \| null|false|Applicable only for ACA Enhanced clients and Benefit Classes with ACA Employment Type of Full Time.|
|» » isMeasureAcaEligibility|body|boolean \| null|false|Only valid for ACA Enhanced clients and Benefit Classes that are ACA Employment Type of Full Time.|
|» birthDate|body|string(paylocity-date) \| null|false|Employee birthdate. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.|
|» customBooleanFields|body|[object]|false|Up to 8 custom fields of boolean (checkbox) type value.|
|» » category|body|string|true|The custom field category.  Acceptable value is 'PayrollAndHR'.|
|» » label|body|string \| null|true|The custom field label whose value is to be added/updated. Must match to the label defined in Web Pay Custom Fields setup.  Max length: 255.|
|» » value|body|boolean \| null|true|The custom boolean field value.|
|» customDateFields|body|[object]|false|Up to 8 custom fields of the date type value.|
|» » category|body|string|true|The custom field category.  Acceptable value is 'PayrollAndHR'.|
|» » label|body|string \| null|true|The custom field label whose value is to be added/updated.  Must match to the label defined in Web Pay Custom Fields setup.  Max length: 255.|
|» » value|body|string(paylocity-date) \| null|true|The custom date field value.  Common formats include MM-DD-CCYY, CCYY-MM-DD.|
|» customDropDownFields|body|[object]|false|Up to 8 custom fields of the dropdown type value.|
|» » category|body|string|true|The custom field category.  Acceptable value is 'PayrollAndHR'.|
|» » label|body|string \| null|true|The custom field label whose value is to be added/updated.  Must match to the label defined in Web Pay Custom Fields setup.  Max length: 255.|
|» » value|body|string \| null|true|The custom dropdown field value.  Values are configured in Web Pay Company > Setup > List Values > Lookup Values > Custom Fields: PayrollAndHR.  Max length: 10.|
|» customNumberFields|body|[object]|false|Up to 8 custom fields of numeric type value.|
|» » category|body|string|true|The custom field category.  Acceptable value is 'PayrollAndHR'.|
|» » label|body|string \| null|true|The custom field label whose value is to be added/updated.  Must match to the label defined in Web Pay Custom Fields setup.  Max length: 255.|
|» » value|body|number \| null|true|The custom number field value.  Decimal (18,6).|
|» customTextFields|body|[object]|false|Up to 8 custom fields of text type value.|
|» » category|body|string|true|The custom field category.  Acceptable value is 'PayrollAndHR'.|
|» » label|body|string \| null|true|The custom field label whose value is to be added/updated.  Must match to the label defined in Web Pay Custom Fields setup.  Max length: 255.|
|» » value|body|string \| null|true|The custom text field value.  Max length: 255.|
|» departmentPosition|body|[object]|false|Add home department cost center, position, supervisor, reviewer, employment type, EEO class, pay settings, and union information.|
|» » changeReason|body|string \| null|false|Employee department/position change reason. Must match Company setup. <br  />Max length: 15|
|» » clockBadgeNumber|body|string \| null|false|Employee clock badge number. Defaults to employeeId. <br  />Max length: 10|
|» » costCenter1|body|string \| null|false|Employer defined location, like *branch, division, department*, etc. Must match Company setup. <br  />Max length: 10|
|» » costCenter2|body|string \| null|false|Employer defined location, like *branch, division, department*, etc. Must match Company setup. <br  />Max length: 10|
|» » costCenter3|body|string \| null|false|Employer defined location, like *branch, division, department*, etc. Must match Company setup. <br  />Max length: 10|
|» » effectiveDate|body|string(paylocity-date) \| null|false|The date the position takes effect. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.|
|» » employeeType|body|string \| null|false|Employee current employment type. Common values *RFT (Regular Full Time), RPT (Regular Part Time), SNL (Seasonal), TFT (Temporary Full Time), TPT (Temporary Part Time)*. <br  />Max length: 10|
|» » equalEmploymentOpportunityClass|body|string \| null|false|Values are configured in Company > Setup > HR > EEO Classes.<br  /> Max length: 10|
|» » isMinimumWageExempt|body|boolean \| null|false|Indicates if employee is exempt from minimum wage.|
|» » isOvertimeExempt|body|boolean \| null|false|Indicates if employee is exempt from overtime.|
|» » isSupervisorReviewer|body|boolean \| null|false|Indicates if employee is a supervisor or reviewer.|
|» » isUnionDuesCollected|body|boolean \| null|false|Indicates if union dues are collected.|
|» » isUnionInitiationCollected|body|boolean \| null|false|Indicates if initiations fees are collected.|
|» » jobTitle|body|string \| null|false|Employee current job title. <br  />Max length: 50|
|» » payGroup|body|string \| null|false|Employee pay group. Must match Company setup. <br  /> Max length: 20|
|» » positionCode|body|string \| null|false|Employee position code. Must match Company setup.<br  />Max length: 20|
|» » shift|body|string \| null|false|Employee work shift.<br  />Max length: 255|
|» » supervisorCompanyNumber|body|string \| null|false|Supervisor's company number. Defaults to employee company number.<br  />Max length: 9|
|» » supervisorEmployeeId|body|string \| null|false|EmployeeId of the supervisor. <br  />Max length: 10|
|» » tipped|body|string \| null|false|Indicates if employee receives tips.|
|» » unionAffiliationDate|body|string(paylocity-date) \| null|false|Employee union affiliation effective date. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.|
|» » unionCode|body|string \| null|false|Employee union code. Must match Company setup. <br  />Max length: 10|
|» » unionPosition|body|string \| null|false|Employee union position. Must match Company setup. <br  />Max length: 30|
|» » workersCompensation|body|string \| null|false|Employee worker compensation code. Must match Company setup.<br  /> Max length: 10|
|» disabilityDescription|body|string \| null|false|Indicates if employee has disability status.|
|» employeeId|body|string \| null|false|Leave blank to have Web Pay automatically assign the next available employee ID.<br  /> Max length: 10|
|» ethnicity|body|string \| null|false|Employee ethnicity.<br  /> Max length: 10|
|» federalTax|body|[object]|false|Add federal tax amount type (taxCalculationCode), amount or percentage, filing status, and exemptions.|
|» » amount|body|number \| null|false|Tax amount. <br  />Decimal (12,2)|
|» » deductionsAmount|body|number|false|Box 4(b) on form W4 (year 2020 or later): Deductions amount. <br  />Decimal (12,2)|
|» » dependentsAmount|body|number|false|Box 3 on form W4 (year 2020 or later): Total dependents amount. <br  />Decimal (12,2)|
|» » exemptions|body|number \| null|false|Federal tax exemptions value. <br  />Decimal (12,2)|
|» » filingStatus|body|string \| null|false|Employee federal filing status. Common values are *S* (Single), *M* (Married).<br  />Max length: 50|
|» » higherRate|body|boolean|false|Box 2(c) on form W4 (year 2020 or later): Multiple Jobs or Spouse Works. <br  />Boolean|
|» » otherIncomeAmount|body|number|false|Box 4(a) on form W4 (year 2020 or later): Other income amount. <br  />Decimal (12,2)|
|» » percentage|body|number \| null|false|Tax percentage. <br  />Decimal (12,2)|
|» » taxCalculationCode|body|string \| null|false|Tax calculation code. Common values are *F* (Flat), *P* (Percentage), *FDFP* (Flat Dollar Amount plus Fixed Percentage). <br  />Max length: 10|
|» » w4FormYear|body|integer|false|The federal W4 form year <br  />Integer|
|» firstName|body|string \| null|false|Employee first name. <br  />Max length: 40|
|» fitwExemptReason|body|string \| null|false|Reason code for FITW exemption. Common values are *SE* (Statutory employee), *CR* (clergy/Religious). <br  /> Max length: 30|
|» futaExemptReason|body|string \| null|false|Reason code for FUTA exemption. Common values are *501* (5019c)(3) Organization), *IC* (Independent Contractor).<br  /> Max length: 30|
|» gender|body|string \| null|false|Employee gender. Common values *M* (Male), *F* (Female). <br  />Max length: 1|
|» homeAddress|body|[object]|false|Add employee's home address, personal phone numbers, and personal email.|
|» » address1|body|string \| null|false|1st address line.<br  /> Max length: 40|
|» » address2|body|string \| null|false|2nd address line. <br  /> Max length: 40|
|» » city|body|string \| null|false|City.<br  /> Max length: 40|
|» » country|body|string \| null|false|Country.<br  /> Max length: 30|
|» » county|body|string \| null|false|County.<br  /> Max length: 30|
|» » emailAddress|body|string \| null|false|Email. <br  />Max length: 50|
|» » mobilePhone|body|string \| null|false|Mobile phone number.<br  /> Max length: 12|
|» » phone|body|string \| null|false|Phone number.<br  /> Max length: 12|
|» » postalCode|body|string \| null|false|Postal code.<br  /> Max length: 10|
|» » state|body|string \| null|false|State or province.<br  /> Max length: 2|
|» isEmployee943|body|boolean \| null|false|Indicates if employee in agriculture or farming.|
|» isSmoker|body|boolean \| null|false|Indicates if employee is a smoker.|
|» lastName|body|string \| null|false|Employee last name. <br  />Max length: 40|
|» localTax|body|[object]|false|Add local tax code, filing status, and exemptions including PA-PSD taxes.|
|» » exemptions|body|number \| null|false|Local tax exemptions value.<br  />Decimal (12,2)|
|» » exemptions2|body|number \| null|false|Local tax exemptions 2 value.<br  />Decimal (12,2)|
|» » filingStatus|body|string \| null|false|Employee local tax filing status. Must match specific local tax setup. <br  /> Max length: 50|
|» » residentPSD|body|string \| null|false|Resident PSD (political subdivision code) applicable in PA. Must match Company setup.<br  /> Max length: 9|
|» » taxCode|body|string \| null|false|Local tax code.<br  />Max length: 50|
|» » workPSD|body|string \| null|false|Work location PSD. Must match Company setup. <br  /> Max length: 9|
|» mainDirectDeposit|body|[object]|false|Add the main direct deposit account. After deposits are made to any additional direct deposit accounts, the remaining net check is deposited in the main direct deposit account. IMPORTANT: A direct deposit update will remove ALL existing main and additional direct deposit information in WebPay and replace with what is provided on the request. GET API will not return direct deposit data.|
|» » accountNumber|body|string \| null|false|Account number, entered without special characters and spaces. <br  />Max length: 17|
|» » accountType|body|string \| null|false|Account type. Valid values are *C* (Checking), *S* (Saving), *P* (Pay Card). <br   />Max length: 1|
|» » isSkipPreNote|body|boolean \| null|false|Indicates if account will not pre-note.|
|» » preNoteDate|body|string(paylocity-date) \| null|false|Date to end the pre-note of the account. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.|
|» » routingNumber|body|string \| null|false|ABA Transit Routing Number, entered without dashes or spaces. <br  />Max length: 9|
|» maritalStatus|body|string \| null|false|Employee marital status. Common values *D (Divorced), M (Married), S (Single), W (Widowed)*. <br  />Max length: 10|
|» medExemptReason|body|string \| null|false|Reason code for Medicare exemption. Common values are *501* (5019c)(3) Organization), *IC* (Independent Contractor).<br  /> Max length: 30|
|» middleName|body|string \| null|false|Employee middle name.<br  /> Max length: 20|
|» nonPrimaryStateTax|body|[object]|false|Add non-primary state tax code, amount type (taxCalculationCode), amount or percentage, filing status, exemptions, supplemental check (specialCheckCalc), and reciprocity code information.|
|» » amount|body|number \| null|false|State tax code.<br  /> Max length: 50|
|» » deductionsAmount|body|number|false|Box 4(b) on form W4 (year 2020 or later): Deductions amount. <br  />Decimal (12,2)|
|» » dependentsAmount|body|number|false|Box 3 on form W4 (year 2020 or later): Total dependents amount. <br  />Decimal (12,2)|
|» » exemptions|body|number \| null|false|State tax exemptions value.<br  />Decimal (12,2)|
|» » exemptions2|body|number \| null|false|State tax exemptions 2 value.<br  />Decimal (12,2)|
|» » filingStatus|body|string \| null|false|Employee state tax filing status. Common values are *S* (Single), *M* (Married).<br  />Max length: 50|
|» » higherRate|body|boolean|false|Box 2(c) on form W4 (year 2020 or later): Multiple Jobs or Spouse Works. <br  />Boolean|
|» » otherIncomeAmount|body|number|false|Box 4(a) on form W4 (year 2020 or later): Other income amount. <br  />Decimal (12,2)|
|» » percentage|body|number \| null|false|State Tax percentage. <br  />Decimal (12,2)|
|» » reciprocityCode|body|string \| null|false|Non-primary state tax reciprocity code.<br  /> Max length: 50|
|» » specialCheckCalc|body|string \| null|false|Supplemental check calculation code. Common values are *Blocked* (Taxes blocked on Supplemental checks), *Supp* (Use supplemental Tax Rate-Code). <br  />Max length: 10|
|» » taxCalculationCode|body|string \| null|false|Tax calculation code. Common values are *F* (Flat), *P* (Percentage), *FDFP* (Flat Dollar Amount plus Fixed Percentage). <br  />Max length: 10|
|» » taxCode|body|string \| null|false|State tax code.<br  /> Max length: 50|
|» » w4FormYear|body|integer|false|The state W4 form year <br  />Integer|
|» preferredName|body|string \| null|false|Employee preferred display name.<br  /> Max length: 20|
|» primaryPayRate|body|[object]|false|Add hourly or salary pay rate, effective date, and pay frequency.|
|» » baseRate|body|number \| null|false|Employee base rate, used for Hourly employees. <br  />Decimal (12,2)|
|» » changeReason|body|string \| null|false|Pay rate change reason.<br  /> Max length: 30|
|» » defaultHours|body|number \| null|false|Employee default hours consistently worked. If autoPayType is set to D, employee will be paid hourly base rate for the defaultHours. <br  />Decimal (12,2)|
|» » effectiveDate|body|string(paylocity-date) \| null|false|The date the employee's pay rate takes effect. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.|
|» » isAutoPay|body|boolean \| null|false|If set to *True*, employee will be paid automatically using deafultHours.|
|» » payFrequency|body|string \| null|false|Employee current pay frequency. Common values are *A (Annual), B (Bi-Weekly), D (Daily), M (Monthly), S (Semi-Monthly), Q (Quarterly), W (Weekly)*. <br  />Max length: 5|
|» » payGrade|body|string \| null|false|Employee pay grade. Must match Company setup. <br  /> Max length: 10|
|» » payType|body|string \| null|false|Employee pay type (rate code). Valid values are *Hourly* or *Salary*. <br  />Max length: 10|
|» » ratePer|body|string \| null|false|Employee base rate frequency used with payType Hourly. Common values are *Hour, Week*. Default is Hour. <br  />Max length: 10|
|» » salary|body|number \| null|false|Employee gross salary per pay period used with payType Salary.<br  />Decimal (12,6)|
|» primaryStateTax|body|[object]|false|Add primary state tax code, amount type (taxCalculationCode), amount or percentage, filing status, exemptions, and supplemental check (specialCheckCalc) information. Only one primary state is allowed.|
|» » amount|body|number \| null|false|State tax code.<br  /> Max length: 50|
|» » deductionsAmount|body|number|false|Box 4(b) on form W4 (year 2020 or later): Deductions amount. <br  />Decimal (12,2)|
|» » dependentsAmount|body|number|false|Box 3 on form W4 (year 2020 or later): Total dependents amount. <br  />Decimal (12,2)|
|» » exemptions|body|number \| null|false|State tax exemptions value.<br  />Decimal (12,2)|
|» » exemptions2|body|number \| null|false|State tax exemptions 2 value.<br  />Decimal (12,2)|
|» » filingStatus|body|string \| null|false|Employee state tax filing status. Common values are *S* (Single), *M* (Married).<br  />Max length: 50|
|» » higherRate|body|boolean|false|Box 2(c) on form W4 (year 2020 or later): Multiple Jobs or Spouse Works. <br  />Boolean|
|» » otherIncomeAmount|body|number|false|Box 4(a) on form W4 (year 2020 or later): Other income amount. <br  />Decimal (12,2)|
|» » percentage|body|number \| null|false|State Tax percentage. <br  />Decimal (12,2)|
|» » specialCheckCalc|body|string \| null|false|Supplemental check calculation code. Common values are *Blocked* (Taxes blocked on Supplemental checks), *Supp* (Use supplemental Tax Rate-Code). <br  />Max length: 10|
|» » taxCalculationCode|body|string \| null|false|Tax calculation code. Common values are *F* (Flat), *P* (Percentage), *FDFP* (Flat Dollar Amount plus Fixed Percentage). <br  />Max length: 10|
|» » taxCode|body|string \| null|false|State tax code.<br  /> Max length: 50|
|» » w4FormYear|body|integer|false|The state W4 form year <br  />Integer|
|» priorLastName|body|string \| null|false|Prior last name if applicable.<br  />Max length: 40|
|» salutation|body|string \| null|false|Employee preferred salutation. <br  />Max length: 10|
|» sitwExemptReason|body|string \| null|false|Reason code for SITW exemption. Common values are *SE* (Statutory employee), *CR* (clergy/Religious). <br  /> Max length: 30|
|» ssExemptReason|body|string \| null|false|Reason code for Social Security exemption. Common values are *SE* (Statutory employee), *CR* (clergy/Religious). <br  /> Max length: 30|
|» ssn|body|string \| null|false|Employee social security number. Leave it blank if valid social security number not available. <br  />Max length: 11|
|» status|body|[object]|false|Add employee status, change reason, effective date, and adjusted seniority date. Note that companies that are still in Implementation cannot hire future employees.|
|» » adjustedSeniorityDate|body|string(paylocity-date) \| null|false|Adjusted seniority date. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.|
|» » changeReason|body|string \| null|false|Employee status change reason. Must match Company setup.<br  /> Max length: 15|
|» » effectiveDate|body|string(paylocity-date) \| null|false|Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.|
|» » employeeStatus|body|string \| null|false|Employee current work status. Common values are *A* (Active), *L* (Leave of Absence), *T* (Terminated). <br  />Max length: 20|
|» » hireDate|body|string(paylocity-date) \| null|false|Employee hired date. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.|
|» » isEligibleForRehire|body|boolean \| null|false|Indicates if employee eligible for rehire.|
|» suffix|body|string \| null|false|Employee name suffix. Common values are *Jr, Sr, II*.<br  />Max length: 30|
|» suiExemptReason|body|string \| null|false|Reason code for SUI exemption. Common values are *SE* (Statutory employee), *CR* (clergy/Religious). <br  /> Max length: 30|
|» suiState|body|string \| null|false|Employee SUI (State Unemployment Insurance) state. <br  />Max length: 2|
|» taxDistributionCode1099R|body|string \| null|false|Employee 1099R distribution code. Common values are *7* (Normal Distribution), *F* (Charitable Gift Annuity). <br  />Max length: 1|
|» taxForm|body|string \| null|false|Employee tax form for reporting income. Valid values are *W2, 1099M, 1099R*. Default is W2. <br  />Max length: 15|
|» veteranDescription|body|string \| null|false|Indicates if employee is a veteran.|
|» webTime|body|object|false|Add Web Time badge number and charge rate and synchronize Web Pay and Web Time employee data.|
|» » badgeNumber|body|string \| null|false|Badge number usually issued for time and attendance system use. <br  />Max length: 50|
|» » chargeRate|body|number \| null|false|Rate to be charged to third party for time worked by the employee. It is most commonly referenced in the Cost Center Charge, Cost Center Charge vs. Cost Reports, and the Customer Invoice time and attendance reports. <br  />Decimal (12,2)|
|» » isTimeLaborEnabled|body|boolean \| null|false|If set to true, changes to employee data will be reflected in Web Time.|
|» workAddress|body|[object]|false|Add employee's work address, phone numbers, and email. Work Location drop down field is not included.|
|» » address1|body|string \| null|false|1st address line.<br  /> Max length: 40|
|» » address2|body|string \| null|false|2nd address line. <br  /> Max length: 40|
|» » city|body|string \| null|false|City.<br  /> Max length: 40|
|» » country|body|string \| null|false|Country.<br  /> Max length: 30|
|» » county|body|string \| null|false|County.<br  /> Max length: 30|
|» » emailAddress|body|string \| null|false|Email. <br  />Max length: 50|
|» » mobilePhone|body|string \| null|false|Mobile phone number.<br  /> Max length: 12|
|» » pager|body|string \| null|false|Employee pager number.<br  /> Max length: 20|
|» » phone|body|string \| null|false|Phone number.<br  /> Max length: 12|
|» » phoneExtension|body|string \| null|false|Phone number extension.<br  /> Max length: 10|
|» » postalCode|body|string \| null|false|Postal code.<br  /> Max length: 10|
|» » state|body|string \| null|false|State or province.<br  /> Max length: 2|
|» workEligibility|body|[object]|false|Add I-9 work authorization information.|
|» » alienOrAdmissionDocumentNumber|body|string \| null|false|Employee USCIS or Admission Number. <br  /> Must be 7-10 characters and may begin with an 'A'|
|» » attestedDate|body|string(paylocity-date) \| null|false|The date the I-9 Verification form was attested by Employer or Authorized representative. Common formats are *MM-DD-CCYY, CCYY-MM-DD*.|
|» » countryOfIssuance|body|string \| null|false|If Foreign Passport number is provided, provide its country of issuance. Must match Paylocity setup.<br  /> Max length: 30|
|» » foreignPassportNumber|body|string \| null|false|Foreign Passport Number.<br  /> Max length: 50|
|» » i94AdmissionNumber|body|string \| null|false|Form I-94 admission number.<br  /> Must be 11 numeric characters|
|» » i9DateVerified|body|string(paylocity-date) \| null|false|Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.|
|» » i9Notes|body|string \| null|false|Notes regarding employee's i9.<br  /> Max length: 4000|
|» » isI9Verified|body|boolean \| null|false|Indicates if employee I9 is verified.|
|» » isSsnVerified|body|boolean \| null|false|Indicates if employee SSN is verified.|
|» » ssnDateVerified|body|string(paylocity-date) \| null|false|The date of employer verification of employee SSN. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.|
|» » ssnNotes|body|string \| null|false|Notes regarding employee's SSN.<br  /> Max length: 4000|
|» » visaType|body|string \| null|false|Employee Visa type. Must match one of the system coded values.<br  /> Max length: 100|
|» » workAuthorization|body|string \| null|false|Employee work authorization. Must match one of the system coded values.<br  /> Max length: 100|
|» » workUntil|body|string(paylocity-date) \| null|false|End date of employee work eligibility.  Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » category|PayrollAndHR|
|» » category|PayrollAndHR|
|» » category|PayrollAndHR|
|» » category|PayrollAndHR|
|» » category|PayrollAndHR|

> Example responses

> 201 Response

```json
[
  {
    "trackingNumber": "string"
  }
]
```

> 400 Response

```json
[
  {
    "field": "string",
    "message": "string",
    "options": [
      {
        "code": "string",
        "description": "string"
      }
    ],
    "path": "string"
  }
]
```

> 500 Response

```json
[
  {
    "field": "string",
    "message": "string",
    "options": [
      {
        "code": "string",
        "description": "string"
      }
    ],
    "path": "string"
  }
]
```

<h3 id="add-new-employee-to-web-link-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Successfully Added|Inline|
|400|Bad Request|Bad Request|Inline|
|403|Forbidden|Forbidden|None|
|429|Too Many Requests|Too Many Requests|None|
|500|Internal Server Error|Internal Server Error|Inline|

<h3 id="add-new-employee-to-web-link-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[trackingNumberResponse](#schematrackingnumberresponse)]|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[error](#schemaerror)]|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[error](#schemaerror)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
paylocity_auth ( Scopes: WebLinkAPI )
</aside>

# Schemas

<h2 id="tocS_addClientSecret">addClientSecret</h2>
<!-- backwards compatibility -->
<a id="schemaaddclientsecret"></a>
<a id="schema_addClientSecret"></a>
<a id="tocSaddclientsecret"></a>
<a id="tocsaddclientsecret"></a>

```json
{
  "code": "string"
}
```

The Add Client Secret Request Model

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|true|none|A value sent with the 'ACTION NEEDED: Web Link API Credentials Expiring Soon.' email notification.|

<h2 id="tocS_additionalRate">additionalRate</h2>
<!-- backwards compatibility -->
<a id="schemaadditionalrate"></a>
<a id="schema_additionalRate"></a>
<a id="tocSadditionalrate"></a>
<a id="tocsadditionalrate"></a>

```json
{
  "changeReason": "string",
  "costCenter1": "string",
  "costCenter2": "string",
  "costCenter3": "string",
  "effectiveDate": "string",
  "endCheckDate": "string",
  "job": "string",
  "rate": 0,
  "rateCode": "string",
  "rateNotes": "string",
  "ratePer": "string",
  "shift": "string"
}
```

The additional pay rate model

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|changeReason|string \| null|false|none|Not required. If populated, must match one of the system coded values available in the Additional Rates Change Reason drop down.<br />|
|costCenter1|string \| null|false|none|Not required. Valid values must match one of the system coded cost centers available in the Additional Rates Cost Center level 1 drop down. This cell must be in a text format.<br />|
|costCenter2|string \| null|false|none|Not required. Valid values must match one of the system coded cost centers available in the Additional Rates Cost Center level 2 drop down. This cell must be in a text format.<br />|
|costCenter3|string \| null|false|none|Not required. Valid values must match one of the system coded cost centers available in the Additional Rates Cost Center level 3 drop down. This cell must be in a text format.<br />|
|effectiveDate|string(paylocity-date) \| null|false|none|Required. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.<br />|
|endCheckDate|string(paylocity-date) \| null|false|none|Not required. Must match one of the system coded check dates available in the Additional Rates End Check Date drop down. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.<br />|
|job|string \| null|false|none|Not required. If populated, must match one of the system coded values available in the Additional Rates Job drop down.<br />|
|rate|number \| null|false|none|Required. Enter dollar amount that corresponds to the Per selection.<br />|
|rateCode|string \| null|false|none|Required. If populated, must match one of the system coded values available in the Additional Rates Rate Code drop down.<br />|
|rateNotes|string \| null|false|none|Not required.<br  />Max length: 4000<br />|
|ratePer|string \| null|false|none|Required. Valid values are HOUR or WEEK.<br />|
|shift|string \| null|false|none|Not required. If populated, must match one of the system coded values available in the Additional Rates Shift drop down.<br />|

<h2 id="tocS_benefitSetup">benefitSetup</h2>
<!-- backwards compatibility -->
<a id="schemabenefitsetup"></a>
<a id="schema_benefitSetup"></a>
<a id="tocSbenefitsetup"></a>
<a id="tocsbenefitsetup"></a>

```json
{
  "benefitClass": "string",
  "benefitClassEffectiveDate": "string",
  "benefitSalary": 0,
  "benefitSalaryEffectiveDate": "string",
  "doNotApplyAdministrativePeriod": true,
  "isMeasureAcaEligibility": true
}
```

The benefit setup model

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|benefitClass|string \| null|false|none|Benefit Class code. Values are configured in Web Pay Company > Setup > Benefits > Classes.<br  />Max length: 30|
|benefitClassEffectiveDate|string(paylocity-date) \| null|false|none|Date when Benefit Class takes effect. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.|
|benefitSalary|number \| null|false|none|Salary used to configure benefits.<br  />Decimal(12,2)|
|benefitSalaryEffectiveDate|string(paylocity-date) \| null|false|none|Date when Benefit Salary takes effect. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.|
|doNotApplyAdministrativePeriod|boolean \| null|false|none|Applicable only for HR Enhanced clients and Benefit Classes with ACA Employment Type of Full Time.|
|isMeasureAcaEligibility|boolean \| null|false|none|Only valid for HR Enhanced clients and Benefit Classes that are ACA Employment Type of Full Time.|

<h2 id="tocS_clientCredentialsResponse">clientCredentialsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaclientcredentialsresponse"></a>
<a id="schema_clientCredentialsResponse"></a>
<a id="tocSclientcredentialsresponse"></a>
<a id="tocsclientcredentialsresponse"></a>

```json
{
  "clientSecret": "string",
  "clientSecretExpirationDate": "string"
}
```

The Client Credentials Response Model

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientSecret|string \| null|false|none|The client's secret|
|clientSecretExpirationDate|string(paylocity-date) \| null|false|none|The client's secret expiration date|

<h2 id="tocS_companyCodes">companyCodes</h2>
<!-- backwards compatibility -->
<a id="schemacompanycodes"></a>
<a id="schema_companyCodes"></a>
<a id="tocScompanycodes"></a>
<a id="tocscompanycodes"></a>

```json
{
  "code": "string",
  "description": "string"
}
```

The Company Codes model

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string \| null|false|none|Code.<br  /> Max length: 40|
|description|string \| null|false|none|Description. <br  /> Max length: 150|

<h2 id="tocS_customFieldDefinition">customFieldDefinition</h2>
<!-- backwards compatibility -->
<a id="schemacustomfielddefinition"></a>
<a id="schema_customFieldDefinition"></a>
<a id="tocScustomfielddefinition"></a>
<a id="tocscustomfielddefinition"></a>

```json
{
  "category": "string",
  "defaultValue": "string",
  "isRequired": true,
  "label": "string",
  "type": "string",
  "values": [
    {
      "code": "string",
      "description": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|string|false|none|The custom field category.|
|defaultValue|string|false|none|Specifies the default value of the custom field.|
|isRequired|boolean|false|none|Indicates whether the custom field is required.|
|label|string|false|none|The custom field label.|
|type|string|false|none|The custom field type.|
|values|[object]|false|none|A set of values that are applicable to the custom field.|

<h2 id="tocS_directDeposit">directDeposit</h2>
<!-- backwards compatibility -->
<a id="schemadirectdeposit"></a>
<a id="schema_directDeposit"></a>
<a id="tocSdirectdeposit"></a>
<a id="tocsdirectdeposit"></a>

```json
{
  "additionalDirectDeposit": [
    {
      "accountNumber": "string",
      "accountType": "string",
      "amount": 0,
      "amountType": "string",
      "blockSpecial": true,
      "isSkipPreNote": true,
      "nameOnAccount": "string",
      "preNoteDate": "string",
      "routingNumber": "string"
    }
  ],
  "mainDirectDeposit": {
    "accountNumber": "string",
    "accountType": "string",
    "blockSpecial": true,
    "isSkipPreNote": true,
    "nameOnAccount": "string",
    "preNoteDate": "string",
    "routingNumber": "string"
  }
}
```

The Direct Deposit model

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalDirectDeposit|[object]|false|none|Additional Direct Deposits that are not the main Direct Deposit.|
|mainDirectDeposit|object|false|none|The main Direct Deposit account.|

<h2 id="tocS_earning">earning</h2>
<!-- backwards compatibility -->
<a id="schemaearning"></a>
<a id="schema_earning"></a>
<a id="tocSearning"></a>
<a id="tocsearning"></a>

```json
{
  "agency": "string",
  "amount": 0,
  "annualMaximum": 0,
  "calculationCode": "string",
  "costCenter1": "string",
  "costCenter2": "string",
  "costCenter3": "string",
  "earningCode": "string",
  "effectiveDate": "string",
  "endDate": "string",
  "frequency": "string",
  "goal": 0,
  "hoursOrUnits": 0,
  "isSelfInsured": true,
  "jobCode": "string",
  "miscellaneousInfo": "string",
  "paidTowardsGoal": 0,
  "payPeriodMaximum": 0,
  "payPeriodMinimum": 0,
  "rate": 0,
  "rateCode": "string",
  "startDate": "string"
}
```

The employee earning model

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|agency|string \| null|false|none|Third-party agency associated with earning. Must match Company setup.<br  />Max length: 10|
|amount|number \| null|false|none|Value that matches CalculationCode to add to gross wages. For percentage (%), enter whole number (10 = 10%).  <br  />Decimal(12,2)|
|annualMaximum|number \| null|false|none|Year to Date dollar amount not to be exceeded for an earning in the calendar year. Used only with company driven maximums. <br  />Decimal(12,2)|
|calculationCode|string \| null|false|none|Defines how earnings are calculated. Common values are *% (percentage of gross), flat (flat dollar amount)*. Defaulted to the Company setup calcCode for earning. <br  />Max length: 20|
|costCenter1|string \| null|false|none|Cost Center associated with earning. Must match Company setup.<br  /> Max length: 10|
|costCenter2|string \| null|false|none|Cost Center associated with earning. Must match Company setup.<br  /> Max length: 10|
|costCenter3|string \| null|false|none|Cost Center associated with earning. Must match Company setup.<br  /> Max length: 10|
|earningCode|string \| null|true|none|Earning code. Must match Company setup. <br  />Max length: 10|
|effectiveDate|string(paylocity-date) \| null|false|none|Date earning is active. Defaulted to run date or check date based on Company setup. Common formats are MM-DD-CCYY, CCYY-MM-DD.|
|endDate|string(paylocity-date) \| null|false|none|Stop date of an earning. Common formats are MM-DD-CCYY, CCYY-MM-DD.|
|frequency|string \| null|false|none|Needed if earning is applied differently from the payroll frequency (one time earning for example).<br  /> Max length: 5|
|goal|number \| null|false|none|Dollar amount. The employee earning will stop when the goal amount is reached.<br  /> Decimal(12,2)|
|hoursOrUnits|number \| null|false|none|The value is used in conjunction with the Rate field. When entering Group Term Life Insurance (GTL), it should contain the full amount of the group term life insurance policy. <br  /> Decimal(12,2)|
|isSelfInsured|boolean \| null|false|none|Used for ACA. If not entered, defaulted to Company earning setup.|
|jobCode|string \| null|false|none|Job code associated with earnings. Must match Company setup.<br  /> Max length: 20|
|miscellaneousInfo|string \| null|false|none|Information to print on the check stub if agency is set up for this earning. <br  />Max length: 50|
|paidTowardsGoal|number \| null|false|none|Amount already paid to employee toward goal. <br  /> Decimal(12,2)|
|payPeriodMaximum|number \| null|false|none|Maximum amount of the earning on a single paycheck. <br  /> Decimal(12,2)|
|payPeriodMinimum|number \| null|false|none|Minimum amount of the earning on a single paycheck. <br  /> Decimal(12,2)|
|rate|number \| null|false|none|Rate is used in conjunction with the hoursOrUnits field. <br  /> Decimal(12,2)|
|rateCode|string \| null|false|none|Rate Code applies to additional pay rates entered for an employee. Must match Company setup. <br  /> Max length: 10|
|startDate|string(paylocity-date) \| null|true|none|Start date of an earning based on payroll calendar. Common formats are MM-DD-CCYY, CCYY-MM-DD.|

<h2 id="tocS_emergencyContact">emergencyContact</h2>
<!-- backwards compatibility -->
<a id="schemaemergencycontact"></a>
<a id="schema_emergencyContact"></a>
<a id="tocSemergencycontact"></a>
<a id="tocsemergencycontact"></a>

```json
{
  "address1": "string",
  "address2": "string",
  "city": "string",
  "country": "string",
  "county": "string",
  "email": "string",
  "firstName": "string",
  "homePhone": "string",
  "lastName": "string",
  "mobilePhone": "string",
  "notes": "string",
  "pager": "string",
  "primaryPhone": "string",
  "priority": "string",
  "relationship": "string",
  "state": "string",
  "syncEmployeeInfo": true,
  "workExtension": "string",
  "workPhone": "string",
  "zip": "string"
}
```

The emergency contact model

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address1|string \| null|false|none|1st address line.|
|address2|string \| null|false|none|2nd address line.|
|city|string \| null|false|none|City.|
|country|string \| null|false|none|County.|
|county|string \| null|false|none|Country.  Must be a valid 3 character country code.  Common values are *USA* (United States), *CAN* (Canada).|
|email|string \| null|false|none|Contact email.  Must be valid email address format.|
|firstName|string \| null|true|none|Required. Contact first name. <br  />Max length: 40|
|homePhone|string \| null|false|none|Contact Home Phone.  Valid phone format  *(###) #######* or *######-####* or *### ### ####* or *##########* or, if international, starts with *+#*, only spaces and digits allowed.|
|lastName|string \| null|true|none|Required. Contact last name. <br  />Max length: 40|
|mobilePhone|string \| null|false|none|Contact Mobile Phone.  Valid phone format  *(###) #######* or *######-####* or *### ### ####* or *##########* or, if international, starts with *+#*, only spaces and digits allowed.|
|notes|string \| null|false|none|Notes. <br  />Max length: 1000|
|pager|string \| null|false|none|Contact Pager.  Valid phone format  *(###) #######* or *######-####* or *### ### ####* or *##########* or, if international, starts with *+#*, only spaces and digits allowed.|
|primaryPhone|string \| null|false|none|Required. Contact primary phone type.  Must match Company setup.  Valid  values are H (Home), M (Mobile), P (Pager), W (Work)|
|priority|string \| null|false|none|Required. Contact priority. Valid values are *P* (Primary) or *S* (Secondary).|
|relationship|string \| null|false|none|Required. Contact relationship.  Must match Company setup.  Common values are Spouse, Mother, Father.|
|state|string \| null|false|none|State or Province.  If U.S. address, must be valid 2 character state code.  Common values are *IL* (Illinois), *CA* (California).|
|syncEmployeeInfo|boolean|false|none|Valid values are *true* or *false*.|
|workExtension|string \| null|false|none|Work Extension.|
|workPhone|string \| null|false|none|Contact Work Phone.  Valid phone format  *(###) #######* or *######-####* or *### ### ####* or *##########* or, if international, starts with *+#*, only spaces and digits allowed.|
|zip|string \| null|false|none|Postal code.  If U.S. address, must be a valid zip code.|

<h2 id="tocS_employee">employee</h2>
<!-- backwards compatibility -->
<a id="schemaemployee"></a>
<a id="schema_employee"></a>
<a id="tocSemployee"></a>
<a id="tocsemployee"></a>

```json
{
  "additionalDirectDeposit": [
    {
      "accountNumber": "string",
      "accountType": "string",
      "amount": 0,
      "amountType": "string",
      "blockSpecial": true,
      "isSkipPreNote": true,
      "nameOnAccount": "string",
      "preNoteDate": "string",
      "routingNumber": "string"
    }
  ],
  "additionalRate": [
    {
      "changeReason": "string",
      "costCenter1": "string",
      "costCenter2": "string",
      "costCenter3": "string",
      "effectiveDate": "string",
      "endCheckDate": "string",
      "job": "string",
      "rate": 0,
      "rateCode": "string",
      "rateNotes": "string",
      "ratePer": "string",
      "shift": "string"
    }
  ],
  "benefitSetup": {
    "benefitClass": "string",
    "benefitClassEffectiveDate": "string",
    "benefitSalary": 0,
    "benefitSalaryEffectiveDate": "string",
    "doNotApplyAdministrativePeriod": true,
    "isMeasureAcaEligibility": true
  },
  "birthDate": "string",
  "coEmpCode": "string",
  "companyFEIN": "string",
  "companyName": "string",
  "currency": "string",
  "customBooleanFields": [
    {
      "category": "PayrollAndHR",
      "label": "string",
      "value": true
    }
  ],
  "customDateFields": [
    {
      "category": "PayrollAndHR",
      "label": "string",
      "value": "string"
    }
  ],
  "customDropDownFields": [
    {
      "category": "PayrollAndHR",
      "label": "string",
      "value": "string"
    }
  ],
  "customNumberFields": [
    {
      "category": "PayrollAndHR",
      "label": "string",
      "value": 0
    }
  ],
  "customTextFields": [
    {
      "category": "PayrollAndHR",
      "label": "string",
      "value": "string"
    }
  ],
  "departmentPosition": {
    "changeReason": "string",
    "clockBadgeNumber": "string",
    "costCenter1": "string",
    "costCenter2": "string",
    "costCenter3": "string",
    "effectiveDate": "string",
    "employeeType": "string",
    "equalEmploymentOpportunityClass": "string",
    "isMinimumWageExempt": true,
    "isOvertimeExempt": true,
    "isSupervisorReviewer": true,
    "isUnionDuesCollected": true,
    "isUnionInitiationCollected": true,
    "jobTitle": "string",
    "payGroup": "string",
    "positionCode": "string",
    "reviewerCompanyNumber": "string",
    "reviewerEmployeeId": "string",
    "shift": "string",
    "supervisorCompanyNumber": "string",
    "supervisorEmployeeId": "string",
    "tipped": "string",
    "unionAffiliationDate": "string",
    "unionCode": "string",
    "unionPosition": "string",
    "workersCompensation": "string"
  },
  "disabilityDescription": "string",
  "emergencyContacts": [
    {
      "address1": "string",
      "address2": "string",
      "city": "string",
      "country": "string",
      "county": "string",
      "email": "string",
      "firstName": "string",
      "homePhone": "string",
      "lastName": "string",
      "mobilePhone": "string",
      "notes": "string",
      "pager": "string",
      "primaryPhone": "string",
      "priority": "string",
      "relationship": "string",
      "state": "string",
      "syncEmployeeInfo": true,
      "workExtension": "string",
      "workPhone": "string",
      "zip": "string"
    }
  ],
  "employeeId": "string",
  "ethnicity": "string",
  "federalTax": {
    "amount": 0,
    "deductionsAmount": 0,
    "dependentsAmount": 0,
    "exemptions": 0,
    "filingStatus": "string",
    "higherRate": true,
    "otherIncomeAmount": 0,
    "percentage": 0,
    "taxCalculationCode": "string",
    "w4FormYear": 0
  },
  "firstName": "string",
  "gender": "string",
  "homeAddress": {
    "address1": "string",
    "address2": "string",
    "city": "string",
    "country": "string",
    "county": "string",
    "emailAddress": "string",
    "mobilePhone": "string",
    "phone": "string",
    "postalCode": "string",
    "state": "string"
  },
  "isHighlyCompensated": true,
  "isSmoker": true,
  "lastName": "string",
  "localTax": [
    {
      "exemptions": 0,
      "exemptions2": 0,
      "filingStatus": "string",
      "residentPSD": "string",
      "taxCode": "string",
      "workPSD": "string"
    }
  ],
  "mainDirectDeposit": {
    "accountNumber": "string",
    "accountType": "string",
    "blockSpecial": true,
    "isSkipPreNote": true,
    "nameOnAccount": "string",
    "preNoteDate": "string",
    "routingNumber": "string"
  },
  "maritalStatus": "string",
  "middleName": "string",
  "nonPrimaryStateTax": {
    "amount": 0,
    "deductionsAmount": 0,
    "dependentsAmount": 0,
    "exemptions": 0,
    "exemptions2": 0,
    "filingStatus": "string",
    "higherRate": true,
    "otherIncomeAmount": 0,
    "percentage": 0,
    "reciprocityCode": "string",
    "specialCheckCalc": "string",
    "taxCalculationCode": "string",
    "taxCode": "string",
    "w4FormYear": 0
  },
  "ownerPercent": 0,
  "preferredName": "string",
  "primaryPayRate": {
    "annualSalary": 0,
    "baseRate": 0,
    "beginCheckDate": "string",
    "changeReason": "string",
    "defaultHours": 0,
    "effectiveDate": "string",
    "isAutoPay": true,
    "payFrequency": "string",
    "payGrade": "string",
    "payRateNote": "string",
    "payType": "string",
    "ratePer": "string",
    "salary": 0
  },
  "primaryStateTax": {
    "amount": 0,
    "deductionsAmount": 0,
    "dependentsAmount": 0,
    "exemptions": 0,
    "exemptions2": 0,
    "filingStatus": "string",
    "higherRate": true,
    "otherIncomeAmount": 0,
    "percentage": 0,
    "specialCheckCalc": "string",
    "taxCalculationCode": "string",
    "taxCode": "string",
    "w4FormYear": 0
  },
  "priorLastName": "string",
  "salutation": "string",
  "ssn": "string",
  "status": {
    "adjustedSeniorityDate": "string",
    "changeReason": "string",
    "effectiveDate": "string",
    "employeeStatus": "string",
    "hireDate": "string",
    "isEligibleForRehire": true,
    "reHireDate": "string",
    "statusType": "string",
    "terminationDate": "string"
  },
  "suffix": "string",
  "taxSetup": {
    "fitwExemptNotes": "string",
    "fitwExemptReason": "string",
    "futaExemptNotes": "string",
    "futaExemptReason": "string",
    "isEmployee943": true,
    "isPension": true,
    "isStatutory": true,
    "medExemptNotes": "string",
    "medExemptReason": "string",
    "sitwExemptNotes": "string",
    "sitwExemptReason": "string",
    "ssExemptNotes": "string",
    "ssExemptReason": "string",
    "suiExemptNotes": "string",
    "suiExemptReason": "string",
    "suiState": "string",
    "taxDistributionCode1099R": "string",
    "taxForm": "string"
  },
  "veteranDescription": "string",
  "webTime": {
    "badgeNumber": "string",
    "chargeRate": 0,
    "isTimeLaborEnabled": true
  },
  "workAddress": {
    "address1": "string",
    "address2": "string",
    "city": "string",
    "country": "string",
    "county": "string",
    "emailAddress": "string",
    "location": "string",
    "mailStop": "string",
    "mobilePhone": "string",
    "pager": "string",
    "phone": "string",
    "phoneExtension": "string",
    "postalCode": "string",
    "state": "string"
  },
  "workEligibility": {
    "alienOrAdmissionDocumentNumber": "string",
    "attestedDate": "string",
    "countryOfIssuance": "string",
    "foreignPassportNumber": "string",
    "i94AdmissionNumber": "string",
    "i9DateVerified": "string",
    "i9Notes": "string",
    "isI9Verified": true,
    "isSsnVerified": true,
    "ssnDateVerified": "string",
    "ssnNotes": "string",
    "visaType": "string",
    "workAuthorization": "string",
    "workUntil": "string"
  }
}
```

The employee model

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalDirectDeposit|[object]|false|none|Add up to 19 direct deposit accounts in addition to the main direct deposit account. IMPORTANT: A direct deposit update will remove ALL existing main and additional direct deposit information in WebPay and replace with information provided on the request. GET API will not return direct deposit data.|
|additionalRate|[object]|false|none|Add Additional Rates.|
|benefitSetup|object|false|none| Add or update setup values used for employee benefits integration, insurance plan settings, and ACA reporting.|
|birthDate|string(paylocity-date) \| null|false|none|Employee birthdate. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.|
|coEmpCode|string \| null|false|none|Unique idenifier for SSO.<br  />Max length: 20|
|companyFEIN|string \| null|false|none|Company FEIN as defined in Web Pay, applicable with GET requests only.<br  /> Max length: 20|
|companyName|string \| null|false|none|Company name as defined in Web Pay, applicable with GET requests only.<br  /> Max length: 50|
|currency|string \| null|false|none|Employee is paid in this currency. <br  />Max length: 30|
|customBooleanFields|[object]|false|none|Up to 8 custom fields of boolean (checkbox) type value.|
|customDateFields|[object]|false|none|Up to 8 custom fields of the date type value.|
|customDropDownFields|[object]|false|none|Up to 8 custom fields of the dropdown type value.|
|customNumberFields|[object]|false|none|Up to 8 custom fields of numeric type value.|
|customTextFields|[object]|false|none|Up to 8 custom fields of text type value.|
|departmentPosition|object|false|none|Add or update home department cost center, position, supervisor, reviewer, employment type, EEO class, pay settings, and union information.|
|disabilityDescription|string \| null|false|none|Indicates if employee has disability status.|
|emergencyContacts|[object]|false|none|Add or update Emergency Contacts.|
|employeeId|string \| null|false|none|Leave blank to have Web Pay automatically assign the next available employee ID.<br  />Max length: 9|
|ethnicity|string \| null|false|none|Employee ethnicity.<br  /> Max length: 10|
|federalTax|object|false|none|Add or update federal tax amount type (taxCalculationCode), amount or percentage, filing status, and exemptions.|
|firstName|string \| null|false|none|Employee first name. <br  />Max length: 40|
|gender|string \| null|false|none|Employee gender. Common values *M* (Male), *F* (Female). <br  />Max length: 1|
|homeAddress|object|false|none|Add or update employee's home address, personal phone numbers, and personal email.|
|isHighlyCompensated|boolean|false|none|Indicates if employee meets the highly compensated employee criteria.|
|isSmoker|boolean|false|none|Indicates if employee is a smoker.|
|lastName|string \| null|false|none|Employee last name. <br  />Max length: 40|
|localTax|[object]|false|none|Add, update, or delete local tax code, filing status, and exemptions including  PA-PSD taxes.|
|mainDirectDeposit|object|false|none|Add the main direct deposit account. After deposits are made to any additional direct deposit accounts, the remaining net check is deposited in the main direct deposit account. IMPORTANT: A direct deposit update will remove ALL existing main and additional direct deposit information in WebPay and replace with what is provided on the request. GET API will not return direct deposit data.|
|maritalStatus|string \| null|false|none|Employee marital status. Common values *D (Divorced), M (Married), S (Single), W (Widowed)*. <br  />Max length: 10|
|middleName|string \| null|false|none|Employee middle name.<br  /> Max length: 20|
|nonPrimaryStateTax|object|false|none|Add or update non-primary state tax code, amount type (taxCalculationCode), amount or percentage, filing status, exemptions, supplemental check (specialCheckCalc), and reciprocity code information.|
|ownerPercent|number \| null|false|none|Percentage of employee's ownership in the company, entered as a whole number. <br  /> Decimal (12,2)|
|preferredName|string \| null|false|none|Employee preferred display name.<br  /> Max length: 20|
|primaryPayRate|object|false|none|Add or update hourly or salary pay rate, effective date, and pay frequency.|
|primaryStateTax|object|false|none|Add or update primary state tax code, amount type (taxCalculationCode), amount or percentage, filing status, exemptions, and supplemental check (specialCheckCalc) information. Only one primary state is allowed. Sending an updated primary state will replace the current primary state.|
|priorLastName|string \| null|false|none|Prior last name if applicable.<br  />Max length: 40|
|salutation|string \| null|false|none|Employee preferred salutation. <br  />Max length: 10|
|ssn|string \| null|false|none|Employee social security number. Leave it blank if valid social security number not available. <br  />Max length: 11|
|status|object|false|none|Add or update employee status, change reason, effective date, and adjusted seniority date. Note that companies that are still in Implementation cannot hire future employees.|
|suffix|string \| null|false|none|Employee name suffix. Common values are *Jr, Sr, II*.<br  />Max length: 30|
|taxSetup|object|false|none|Add tax form, 1099 exempt reasons and notes, and 943 agricultural employee information. Once the employee receives wages, this information cannot be updated. Add or update SUI tax state, retirement plan, and statutory information.|
|veteranDescription|string \| null|false|none|Indicates if employee is a veteran.|
|webTime|object|false|none|Add or update Web Time badge number and charge rate and synchronize Web Pay and Web Time employee data.|
|workAddress|object|false|none|Add or update employee's work address, phone numbers, and email. Work Location drop down field is not included.|
|workEligibility|object|false|none|Add or update I-9 work authorization information.|

<h2 id="tocS_employeeIdResponse">employeeIdResponse</h2>
<!-- backwards compatibility -->
<a id="schemaemployeeidresponse"></a>
<a id="schema_employeeIdResponse"></a>
<a id="tocSemployeeidresponse"></a>
<a id="tocsemployeeidresponse"></a>

```json
{
  "employeeId": "string"
}
```

The EmployeeId Response Model

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|employeeId|string|false|none|The EmployeeId|

<h2 id="tocS_employeeInfo">employeeInfo</h2>
<!-- backwards compatibility -->
<a id="schemaemployeeinfo"></a>
<a id="schema_employeeInfo"></a>
<a id="tocSemployeeinfo"></a>
<a id="tocsemployeeinfo"></a>

```json
{
  "employeeId": "string",
  "statusCode": "string",
  "statusTypeCode": "string"
}
```

The employee info model

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|employeeId|string \| null|false|none|Employee Id.<br  /> Max length: 10|
|statusCode|string \| null|false|none|Employee current work status. Common values are *A* (Active), *L* (Leave of Absence), *T* (Terminated). <br  />Max length: 20|
|statusTypeCode|string \| null|false|none|Employee current work status type. <br  />Max length: 10|

<h2 id="tocS_error">error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "field": "string",
  "message": "string",
  "options": [
    {
      "code": "string",
      "description": "string"
    }
  ],
  "path": "string"
}
```

The error model

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field|string|false|none|The name of the field, or property in the request message that contains an error.|
|message|string|false|none|The error message.|
|options|[object]|false|none|A list of options associated with this error. These options may indicate valid values for the field, or property that contains an error.|
|path|string|false|none|The JSON path of the field, or property, that contains an error in the request message.|

<h2 id="tocS_localTax">localTax</h2>
<!-- backwards compatibility -->
<a id="schemalocaltax"></a>
<a id="schema_localTax"></a>
<a id="tocSlocaltax"></a>
<a id="tocslocaltax"></a>

```json
{
  "exemptions": 0,
  "exemptions2": 0,
  "filingStatus": "string",
  "residentPSD": "string",
  "taxCode": "string",
  "workPSD": "string"
}
```

The Local Tax model

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exemptions|number \| null|false|none|Local tax exemptions value.<br  />Decimal (12,2)|
|exemptions2|number \| null|false|none|Local tax exemptions 2 value.<br  />Decimal (12,2)|
|filingStatus|string \| null|false|none|Employee local tax filing status. Must match specific local tax setup. <br  /> Max length: 50|
|residentPSD|string \| null|false|none|Resident PSD (political subdivision code) applicable in PA. Must match Company setup.<br  /> Max length: 9|
|taxCode|string \| null|false|none|Local tax code.<br  />Max length: 50|
|workPSD|string \| null|false|none|Work location PSD. Must match Company setup. <br  /> Max length: 9|

<h2 id="tocS_nonPrimaryStateTax">nonPrimaryStateTax</h2>
<!-- backwards compatibility -->
<a id="schemanonprimarystatetax"></a>
<a id="schema_nonPrimaryStateTax"></a>
<a id="tocSnonprimarystatetax"></a>
<a id="tocsnonprimarystatetax"></a>

```json
{
  "amount": 0,
  "deductionsAmount": 0,
  "dependentsAmount": 0,
  "exemptions": 0,
  "exemptions2": 0,
  "filingStatus": "string",
  "higherRate": true,
  "otherIncomeAmount": 0,
  "percentage": 0,
  "reciprocityCode": "string",
  "specialCheckCalc": "string",
  "taxCalculationCode": "string",
  "taxCode": "string",
  "w4FormYear": 0
}
```

The Non-Primary State Tax model

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|number \| null|false|none|State tax code.<br  /> Max length: 50|
|deductionsAmount|number|false|none|Box 4(b) on form W4 (year 2020 or later): Deductions amount. <br  />Decimal (12,2)|
|dependentsAmount|number|false|none|Box 3 on form W4 (year 2020 or later): Total dependents amount. <br  />Decimal (12,2)|
|exemptions|number \| null|false|none|State tax exemptions value.<br  />Decimal (12,2)|
|exemptions2|number \| null|false|none|State tax exemptions 2 value.<br  />Decimal (12,2)|
|filingStatus|string \| null|false|none|Employee state tax filing status. Common values are *S* (Single), *M* (Married).<br  />Max length: 50|
|higherRate|boolean|false|none|Box 2(c) on form W4 (year 2020 or later): Multiple Jobs or Spouse Works. <br  />Boolean|
|otherIncomeAmount|number|false|none|Box 4(a) on form W4 (year 2020 or later): Other income amount. <br  />Decimal (12,2)|
|percentage|number \| null|false|none|State Tax percentage. <br  />Decimal (12,2)|
|reciprocityCode|string \| null|false|none|Non-primary state tax reciprocity code.<br  /> Max length: 50|
|specialCheckCalc|string \| null|false|none|Supplemental check calculation code. Common values are *Blocked* (Taxes blocked on Supplemental checks), *Supp* (Use supplemental Tax Rate-Code). <br  />Max length: 10|
|taxCalculationCode|string \| null|false|none|Tax calculation code. Common values are *F* (Flat), *P* (Percentage), *FDFP* (Flat Dollar Amount plus Fixed Percentage). <br  />Max length: 10|
|taxCode|string \| null|false|none|State tax code.<br  /> Max length: 50|
|w4FormYear|integer|false|none|The state W4 form year <br  />Integer|

<h2 id="tocS_payStatementDetails">payStatementDetails</h2>
<!-- backwards compatibility -->
<a id="schemapaystatementdetails"></a>
<a id="schema_payStatementDetails"></a>
<a id="tocSpaystatementdetails"></a>
<a id="tocspaystatementdetails"></a>

```json
{
  "amount": 0,
  "checkDate": "string",
  "det": "string",
  "detCode": "string",
  "detType": "string",
  "eligibleCompensation": 0,
  "hours": 0,
  "rate": 0,
  "transactionNumber": 0,
  "transactionType": "string",
  "year": 0
}
```

The pay statement details model

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|number \| null|false|none|.<br />|
|checkDate|string(paylocity-date) \| null|false|none|.<br />|
|det|string \| null|false|none|.<br />|
|detCode|string \| null|false|none|.<br />|
|detType|string \| null|false|none|.<br />|
|eligibleCompensation|number \| null|false|none|.<br />|
|hours|number \| null|false|none|.<br />|
|rate|number \| null|false|none|.<br />|
|transactionNumber|integer|false|none|<br />|
|transactionType|string \| null|false|none|.<br />|
|year|integer|false|none|.<br />|

<h2 id="tocS_payStatementSummary">payStatementSummary</h2>
<!-- backwards compatibility -->
<a id="schemapaystatementsummary"></a>
<a id="schema_payStatementSummary"></a>
<a id="tocSpaystatementsummary"></a>
<a id="tocspaystatementsummary"></a>

```json
{
  "autoPay": true,
  "beginDate": "string",
  "checkDate": "string",
  "checkNumber": 0,
  "directDepositAmount": 0,
  "endDate": "string",
  "grossPay": 0,
  "hours": 0,
  "netCheck": 0,
  "netPay": 0,
  "overtimeDollars": 0,
  "overtimeHours": 0,
  "process": 0,
  "regularDollars": 0,
  "regularHours": 0,
  "transactionNumber": 0,
  "voucherNumber": 0,
  "workersCompCode": "string",
  "year": 0
}
```

The pay statement summary model

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|autoPay|boolean|false|none|.<br />|
|beginDate|string(paylocity-date) \| null|false|none|.<br />|
|checkDate|string(paylocity-date) \| null|false|none|.<br />|
|checkNumber|integer|false|none|.<br />|
|directDepositAmount|number \| null|false|none|.<br />|
|endDate|string(paylocity-date) \| null|false|none|.<br />|
|grossPay|number \| null|false|none|.<br />|
|hours|number \| null|false|none|.<br />|
|netCheck|number \| null|false|none|.<br />|
|netPay|number \| null|false|none|.<br />|
|overtimeDollars|number \| null|false|none|.<br />|
|overtimeHours|number \| null|false|none|.<br />|
|process|integer|false|none|.<br />|
|regularDollars|number \| null|false|none|.<br />|
|regularHours|number \| null|false|none|.<br />|
|transactionNumber|integer|false|none|<br />|
|voucherNumber|integer|false|none|.<br />|
|workersCompCode|string \| null|false|none|.<br />|
|year|integer|false|none|.<br />|

<h2 id="tocS_sensitiveData">sensitiveData</h2>
<!-- backwards compatibility -->
<a id="schemasensitivedata"></a>
<a id="schema_sensitiveData"></a>
<a id="tocSsensitivedata"></a>
<a id="tocssensitivedata"></a>

```json
{
  "disability": {
    "disability": "string",
    "disabilityClassifications": [
      {
        "classification": "string"
      }
    ],
    "hasDisability": "string"
  },
  "ethnicity": {
    "ethnicRacialIdentities": [
      {
        "description": "string"
      }
    ],
    "ethnicity": "string"
  },
  "gender": {
    "displayPronouns": true,
    "genderIdentityDescription": "string",
    "identifyAsLegalGender": "string",
    "legalGender": "string",
    "pronouns": "string",
    "sexualOrientation": "string"
  },
  "veteran": {
    "isVeteran": "string",
    "veteran": "string"
  }
}
```

The sensitive data model

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|disability|object|false|none|Add or update disability data.|
|ethnicity|object|false|none|Add or update ethnicity data.|
|gender|object|false|none|Add or update gender data.|
|veteran|object|false|none|Add or update veteran data.|

<h2 id="tocS_stagedEmployee">stagedEmployee</h2>
<!-- backwards compatibility -->
<a id="schemastagedemployee"></a>
<a id="schema_stagedEmployee"></a>
<a id="tocSstagedemployee"></a>
<a id="tocsstagedemployee"></a>

```json
{
  "additionalDirectDeposit": [
    {
      "accountNumber": "string",
      "accountType": "string",
      "amount": 0,
      "amountType": "string",
      "isSkipPreNote": true,
      "preNoteDate": "string",
      "routingNumber": "string"
    }
  ],
  "benefitSetup": [
    {
      "benefitClass": "string",
      "benefitClassEffectiveDate": "string",
      "benefitSalary": 0,
      "benefitSalaryEffectiveDate": "string",
      "doNotApplyAdministrativePeriod": true,
      "isMeasureAcaEligibility": true
    }
  ],
  "birthDate": "string",
  "customBooleanFields": [
    {
      "category": "PayrollAndHR",
      "label": "string",
      "value": true
    }
  ],
  "customDateFields": [
    {
      "category": "PayrollAndHR",
      "label": "string",
      "value": "string"
    }
  ],
  "customDropDownFields": [
    {
      "category": "PayrollAndHR",
      "label": "string",
      "value": "string"
    }
  ],
  "customNumberFields": [
    {
      "category": "PayrollAndHR",
      "label": "string",
      "value": 0
    }
  ],
  "customTextFields": [
    {
      "category": "PayrollAndHR",
      "label": "string",
      "value": "string"
    }
  ],
  "departmentPosition": [
    {
      "changeReason": "string",
      "clockBadgeNumber": "string",
      "costCenter1": "string",
      "costCenter2": "string",
      "costCenter3": "string",
      "effectiveDate": "string",
      "employeeType": "string",
      "equalEmploymentOpportunityClass": "string",
      "isMinimumWageExempt": true,
      "isOvertimeExempt": true,
      "isSupervisorReviewer": true,
      "isUnionDuesCollected": true,
      "isUnionInitiationCollected": true,
      "jobTitle": "string",
      "payGroup": "string",
      "positionCode": "string",
      "shift": "string",
      "supervisorCompanyNumber": "string",
      "supervisorEmployeeId": "string",
      "tipped": "string",
      "unionAffiliationDate": "string",
      "unionCode": "string",
      "unionPosition": "string",
      "workersCompensation": "string"
    }
  ],
  "disabilityDescription": "string",
  "employeeId": "string",
  "ethnicity": "string",
  "federalTax": [
    {
      "amount": 0,
      "deductionsAmount": 0,
      "dependentsAmount": 0,
      "exemptions": 0,
      "filingStatus": "string",
      "higherRate": true,
      "otherIncomeAmount": 0,
      "percentage": 0,
      "taxCalculationCode": "string",
      "w4FormYear": 0
    }
  ],
  "firstName": "string",
  "fitwExemptReason": "string",
  "futaExemptReason": "string",
  "gender": "string",
  "homeAddress": [
    {
      "address1": "string",
      "address2": "string",
      "city": "string",
      "country": "string",
      "county": "string",
      "emailAddress": "string",
      "mobilePhone": "string",
      "phone": "string",
      "postalCode": "string",
      "state": "string"
    }
  ],
  "isEmployee943": true,
  "isSmoker": true,
  "lastName": "string",
  "localTax": [
    {
      "exemptions": 0,
      "exemptions2": 0,
      "filingStatus": "string",
      "residentPSD": "string",
      "taxCode": "string",
      "workPSD": "string"
    }
  ],
  "mainDirectDeposit": [
    {
      "accountNumber": "string",
      "accountType": "string",
      "isSkipPreNote": true,
      "preNoteDate": "string",
      "routingNumber": "string"
    }
  ],
  "maritalStatus": "string",
  "medExemptReason": "string",
  "middleName": "string",
  "nonPrimaryStateTax": [
    {
      "amount": 0,
      "deductionsAmount": 0,
      "dependentsAmount": 0,
      "exemptions": 0,
      "exemptions2": 0,
      "filingStatus": "string",
      "higherRate": true,
      "otherIncomeAmount": 0,
      "percentage": 0,
      "reciprocityCode": "string",
      "specialCheckCalc": "string",
      "taxCalculationCode": "string",
      "taxCode": "string",
      "w4FormYear": 0
    }
  ],
  "preferredName": "string",
  "primaryPayRate": [
    {
      "baseRate": 0,
      "changeReason": "string",
      "defaultHours": 0,
      "effectiveDate": "string",
      "isAutoPay": true,
      "payFrequency": "string",
      "payGrade": "string",
      "payType": "string",
      "ratePer": "string",
      "salary": 0
    }
  ],
  "primaryStateTax": [
    {
      "amount": 0,
      "deductionsAmount": 0,
      "dependentsAmount": 0,
      "exemptions": 0,
      "exemptions2": 0,
      "filingStatus": "string",
      "higherRate": true,
      "otherIncomeAmount": 0,
      "percentage": 0,
      "specialCheckCalc": "string",
      "taxCalculationCode": "string",
      "taxCode": "string",
      "w4FormYear": 0
    }
  ],
  "priorLastName": "string",
  "salutation": "string",
  "sitwExemptReason": "string",
  "ssExemptReason": "string",
  "ssn": "string",
  "status": [
    {
      "adjustedSeniorityDate": "string",
      "changeReason": "string",
      "effectiveDate": "string",
      "employeeStatus": "string",
      "hireDate": "string",
      "isEligibleForRehire": true
    }
  ],
  "suffix": "string",
  "suiExemptReason": "string",
  "suiState": "string",
  "taxDistributionCode1099R": "string",
  "taxForm": "string",
  "veteranDescription": "string",
  "webTime": {
    "badgeNumber": "string",
    "chargeRate": 0,
    "isTimeLaborEnabled": true
  },
  "workAddress": [
    {
      "address1": "string",
      "address2": "string",
      "city": "string",
      "country": "string",
      "county": "string",
      "emailAddress": "string",
      "mobilePhone": "string",
      "pager": "string",
      "phone": "string",
      "phoneExtension": "string",
      "postalCode": "string",
      "state": "string"
    }
  ],
  "workEligibility": [
    {
      "alienOrAdmissionDocumentNumber": "string",
      "attestedDate": "string",
      "countryOfIssuance": "string",
      "foreignPassportNumber": "string",
      "i94AdmissionNumber": "string",
      "i9DateVerified": "string",
      "i9Notes": "string",
      "isI9Verified": true,
      "isSsnVerified": true,
      "ssnDateVerified": "string",
      "ssnNotes": "string",
      "visaType": "string",
      "workAuthorization": "string",
      "workUntil": "string"
    }
  ]
}
```

The staged employee model

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalDirectDeposit|[object]|false|none|Add up to 19 direct deposit accounts in addition to the main direct deposit account. IMPORTANT: A direct deposit update will remove ALL existing main and additional direct deposit information in WebPay and replace with information provided on the request. GET API will not return direct deposit data.|
|benefitSetup|[object]|false|none|Add setup values used for employee benefits integration, insurance plan settings, and ACA reporting.|
|birthDate|string(paylocity-date) \| null|false|none|Employee birthdate. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.|
|customBooleanFields|[object]|false|none|Up to 8 custom fields of boolean (checkbox) type value.|
|customDateFields|[object]|false|none|Up to 8 custom fields of the date type value.|
|customDropDownFields|[object]|false|none|Up to 8 custom fields of the dropdown type value.|
|customNumberFields|[object]|false|none|Up to 8 custom fields of numeric type value.|
|customTextFields|[object]|false|none|Up to 8 custom fields of text type value.|
|departmentPosition|[object]|false|none|Add home department cost center, position, supervisor, reviewer, employment type, EEO class, pay settings, and union information.|
|disabilityDescription|string \| null|false|none|Indicates if employee has disability status.|
|employeeId|string \| null|false|none|Leave blank to have Web Pay automatically assign the next available employee ID.<br  /> Max length: 10|
|ethnicity|string \| null|false|none|Employee ethnicity.<br  /> Max length: 10|
|federalTax|[object]|false|none|Add federal tax amount type (taxCalculationCode), amount or percentage, filing status, and exemptions.|
|firstName|string \| null|false|none|Employee first name. <br  />Max length: 40|
|fitwExemptReason|string \| null|false|none|Reason code for FITW exemption. Common values are *SE* (Statutory employee), *CR* (clergy/Religious). <br  /> Max length: 30|
|futaExemptReason|string \| null|false|none|Reason code for FUTA exemption. Common values are *501* (5019c)(3) Organization), *IC* (Independent Contractor).<br  /> Max length: 30|
|gender|string \| null|false|none|Employee gender. Common values *M* (Male), *F* (Female). <br  />Max length: 1|
|homeAddress|[object]|false|none|Add employee's home address, personal phone numbers, and personal email.|
|isEmployee943|boolean \| null|false|none|Indicates if employee in agriculture or farming.|
|isSmoker|boolean \| null|false|none|Indicates if employee is a smoker.|
|lastName|string \| null|false|none|Employee last name. <br  />Max length: 40|
|localTax|[object]|false|none|Add local tax code, filing status, and exemptions including PA-PSD taxes.|
|mainDirectDeposit|[object]|false|none|Add the main direct deposit account. After deposits are made to any additional direct deposit accounts, the remaining net check is deposited in the main direct deposit account. IMPORTANT: A direct deposit update will remove ALL existing main and additional direct deposit information in WebPay and replace with what is provided on the request. GET API will not return direct deposit data.|
|maritalStatus|string \| null|false|none|Employee marital status. Common values *D (Divorced), M (Married), S (Single), W (Widowed)*. <br  />Max length: 10|
|medExemptReason|string \| null|false|none|Reason code for Medicare exemption. Common values are *501* (5019c)(3) Organization), *IC* (Independent Contractor).<br  /> Max length: 30|
|middleName|string \| null|false|none|Employee middle name.<br  /> Max length: 20|
|nonPrimaryStateTax|[object]|false|none|Add non-primary state tax code, amount type (taxCalculationCode), amount or percentage, filing status, exemptions, supplemental check (specialCheckCalc), and reciprocity code information.|
|preferredName|string \| null|false|none|Employee preferred display name.<br  /> Max length: 20|
|primaryPayRate|[object]|false|none|Add hourly or salary pay rate, effective date, and pay frequency.|
|primaryStateTax|[object]|false|none|Add primary state tax code, amount type (taxCalculationCode), amount or percentage, filing status, exemptions, and supplemental check (specialCheckCalc) information. Only one primary state is allowed.|
|priorLastName|string \| null|false|none|Prior last name if applicable.<br  />Max length: 40|
|salutation|string \| null|false|none|Employee preferred salutation. <br  />Max length: 10|
|sitwExemptReason|string \| null|false|none|Reason code for SITW exemption. Common values are *SE* (Statutory employee), *CR* (clergy/Religious). <br  /> Max length: 30|
|ssExemptReason|string \| null|false|none|Reason code for Social Security exemption. Common values are *SE* (Statutory employee), *CR* (clergy/Religious). <br  /> Max length: 30|
|ssn|string \| null|false|none|Employee social security number. Leave it blank if valid social security number not available. <br  />Max length: 11|
|status|[object]|false|none|Add employee status, change reason, effective date, and adjusted seniority date. Note that companies that are still in Implementation cannot hire future employees.|
|suffix|string \| null|false|none|Employee name suffix. Common values are *Jr, Sr, II*.<br  />Max length: 30|
|suiExemptReason|string \| null|false|none|Reason code for SUI exemption. Common values are *SE* (Statutory employee), *CR* (clergy/Religious). <br  /> Max length: 30|
|suiState|string \| null|false|none|Employee SUI (State Unemployment Insurance) state. <br  />Max length: 2|
|taxDistributionCode1099R|string \| null|false|none|Employee 1099R distribution code. Common values are *7* (Normal Distribution), *F* (Charitable Gift Annuity). <br  />Max length: 1|
|taxForm|string \| null|false|none|Employee tax form for reporting income. Valid values are *W2, 1099M, 1099R*. Default is W2. <br  />Max length: 15|
|veteranDescription|string \| null|false|none|Indicates if employee is a veteran.|
|webTime|object|false|none|Add Web Time badge number and charge rate and synchronize Web Pay and Web Time employee data.|
|workAddress|[object]|false|none|Add employee's work address, phone numbers, and email. Work Location drop down field is not included.|
|workEligibility|[object]|false|none|Add I-9 work authorization information.|

<h2 id="tocS_stateTax">stateTax</h2>
<!-- backwards compatibility -->
<a id="schemastatetax"></a>
<a id="schema_stateTax"></a>
<a id="tocSstatetax"></a>
<a id="tocsstatetax"></a>

```json
{
  "amount": 0,
  "deductionsAmount": 0,
  "dependentsAmount": 0,
  "exemptions": 0,
  "exemptions2": 0,
  "filingStatus": "string",
  "higherRate": true,
  "otherIncomeAmount": 0,
  "percentage": 0,
  "specialCheckCalc": "string",
  "taxCalculationCode": "string",
  "taxCode": "string",
  "w4FormYear": 0
}
```

The State Tax model

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|number \| null|false|none|State tax code.<br  /> Max length: 50|
|deductionsAmount|number|false|none|Box 4(b) on form W4 (year 2020 or later): Deductions amount. <br  />Decimal (12,2)|
|dependentsAmount|number|false|none|Box 3 on form W4 (year 2020 or later): Total dependents amount. <br  />Decimal (12,2)|
|exemptions|number \| null|false|none|State tax exemptions value.<br  />Decimal (12,2)|
|exemptions2|number \| null|false|none|State tax exemptions 2 value.<br  />Decimal (12,2)|
|filingStatus|string \| null|false|none|Employee state tax filing status. Common values are *S* (Single), *M* (Married).<br  />Max length: 50|
|higherRate|boolean|false|none|Box 2(c) on form W4 (year 2020 or later): Multiple Jobs or Spouse Works. <br  />Boolean|
|otherIncomeAmount|number|false|none|Box 4(a) on form W4 (year 2020 or later): Other income amount. <br  />Decimal (12,2)|
|percentage|number \| null|false|none|State Tax percentage. <br  />Decimal (12,2)|
|specialCheckCalc|string \| null|false|none|Supplemental check calculation code. Common values are *Blocked* (Taxes blocked on Supplemental checks), *Supp* (Use supplemental Tax Rate-Code). <br  />Max length: 10|
|taxCalculationCode|string \| null|false|none|Tax calculation code. Common values are *F* (Flat), *P* (Percentage), *FDFP* (Flat Dollar Amount plus Fixed Percentage). <br  />Max length: 10|
|taxCode|string \| null|false|none|State tax code.<br  /> Max length: 50|
|w4FormYear|integer|false|none|The state W4 form year <br  />Integer|

<h2 id="tocS_trackingNumberResponse">trackingNumberResponse</h2>
<!-- backwards compatibility -->
<a id="schematrackingnumberresponse"></a>
<a id="schema_trackingNumberResponse"></a>
<a id="tocStrackingnumberresponse"></a>
<a id="tocstrackingnumberresponse"></a>

```json
{
  "trackingNumber": "string"
}
```

The Tracking Number Response model

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|trackingNumber|string|false|none|The unique tracking number|
