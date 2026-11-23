<h1 id="account-and-transaction-api-specification">Account and Transaction API Specification v4.0.1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Swagger for Account and Transaction API Specification.

**Please Note**: There are no optional fields, if a field is not marked as “Required” it is a Conditional field.

Base URLs:

* <a href="https://raw.githubusercontent.com/open-banking/v4.0/aisp">https://raw.githubusercontent.com/open-banking/v4.0/aisp</a>

<a href="https://www.openbanking.org.uk/terms">Terms of service</a>
Email: <a href="mailto:ServiceDesk@openbanking.org.uk">Service Desk</a> 
License: <a href="https://www.openbanking.org.uk/open-licence">open-licence</a>

# Authentication

- oAuth2 authentication. TPP client credential authorisation flow with the ASPSP

    - Flow: clientCredentials
    - Token URL = [https://authserver.example/token](https://authserver.example/token)

|Scope|Scope Description|
|---|---|
|accounts|Ability to read Accounts information|

- oAuth2 authentication. OAuth flow, it is required when the PSU needs to perform SCA with the ASPSP when a TPP wants to access an ASPSP resource owned by the PSU

    - Flow: authorizationCode
    - Authorization URL = [https://authserver.example/authorization](https://authserver.example/authorization)
    - Token URL = [https://authserver.example/token](https://authserver.example/token)

|Scope|Scope Description|
|---|---|
|accounts|Ability to read Accounts information|

<h1 id="account-and-transaction-api-specification-account-access-consents">Account Access Consents</h1>

## Create an Account Access Consent

<a id="opIdCreateAccountAccessConsents"></a>

> Code samples

```bash
curl http://localhost:3000/account-access-consents \
  -X POST \
  -H 'Content-Type: application/json; charset=utf-8' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "Data": {
      "Permissions": [
        "ReadAccountsBasic"
      ],
      "ExpirationDateTime": "1970-01-01T00:00:00Z",
      "TransactionFromDateTime": "1970-01-01T00:00:00Z",
      "TransactionToDateTime": "1970-01-01T00:00:00Z"
    },
    "Risk": {}
  }'
```

`POST /account-access-consents`

Enables an AISP to ask an ASPSP to create a new account-access-consent resource, by sending a copy of the consent to the ASPSP.

> Body parameter

```json
{
  "Data": {
    "Permissions": [
      "ReadAccountsBasic"
    ],
    "ExpirationDateTime": "1970-01-01T00:00:00Z",
    "TransactionFromDateTime": "1970-01-01T00:00:00Z",
    "TransactionToDateTime": "1970-01-01T00:00:00Z"
  },
  "Risk": {}
}
```

<h3 id="create-an-account-access-consent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. <br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: <br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|
|x-client-id|header|string|false|Only used if an ASPSP requires the client ID in order to return rate limit headers. <br><br>TPPs __must__ refer to ASPSP developer portals for further information on any rate limit policies, if the headers are supported and any additional requirements.<br><br>This header __must not__ be used for client authentication<br>|
|body|body|[OBReadConsent1](#schemaobreadconsent1)|true|Default|
|» Data|body|object|true|none|
|» » Permissions|body|[string]|true|none|
|» » ExpirationDateTime|body|string(date-time)|false|Specified date and time the permissions will expire.<br>If this is not populated, the permissions will be open ended. All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|» » TransactionFromDateTime|body|string(date-time)|false|Specified start date and time for the transaction query period.<br>If this is not populated, the start date will be open ended, and data will be returned from the earliest available transaction. All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|» » TransactionToDateTime|body|string(date-time)|false|Specified end date and time for the transaction query period.<br>If this is not populated, the end date will be open ended, and data will be returned to the latest available transaction. All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|» Risk|body|[OBRisk2](#schemaobrisk2)|true|The Risk section is sent by the initiating party to the ASPSP. <br /><br>It is used to specify additional details for risk scoring for Account Info.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » Permissions|ReadAccountsBasic|
|» » Permissions|ReadAccountsDetail|
|» » Permissions|ReadBalances|
|» » Permissions|ReadBeneficiariesBasic|
|» » Permissions|ReadBeneficiariesDetail|
|» » Permissions|ReadDirectDebits|
|» » Permissions|ReadOffers|
|» » Permissions|ReadPAN|
|» » Permissions|ReadParty|
|» » Permissions|ReadPartyPSU|
|» » Permissions|ReadProducts|
|» » Permissions|ReadScheduledPaymentsBasic|
|» » Permissions|ReadScheduledPaymentsDetail|
|» » Permissions|ReadStandingOrdersBasic|
|» » Permissions|ReadStandingOrdersDetail|
|» » Permissions|ReadStatementsBasic|
|» » Permissions|ReadStatementsDetail|
|» » Permissions|ReadTransactionsBasic|
|» » Permissions|ReadTransactionsCredits|
|» » Permissions|ReadTransactionsDebits|
|» » Permissions|ReadTransactionsDetail|

> Example responses

> 201 Response

```json
{
  "Data": {
    "ConsentId": "string",
    "CreationDateTime": "2024-05-29T00:00:00Z",
    "Status": "AWAU",
    "StatusReason": [
      {
        "StatusReasonCode": "U004",
        "StatusReasonDescription": "Permissions field is missing",
        "Path": "Data.Permissions"
      }
    ],
    "StatusUpdateDateTime": "1970-01-01T00:00:00Z",
    "Permissions": [
      "ReadAccountsBasic"
    ],
    "ExpirationDateTime": "1970-01-01T00:00:00Z",
    "TransactionFromDateTime": "1970-01-01T00:00:00Z",
    "TransactionToDateTime": "1970-01-01T00:00:00Z"
  },
  "Risk": {},
  "Links": {
    "Self": "http://example.com",
    "First": "http://example.com",
    "Prev": "http://example.com",
    "Next": "http://example.com",
    "Last": "http://example.com"
  },
  "Meta": {
    "TotalPages": 0,
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z"
  }
}
```

> 400 Response

```json
{
  "Id": "string",
  "Code": "400 BadRequest",
  "Message": "There is something wrong with the request parameters provided",
  "Errors": [
    {
      "ErrorCode": "U001",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ]
}
```

> 403 Response

```json
{
  "Id": "string",
  "Code": "400 BadRequest",
  "Message": "There is something wrong with the request parameters provided",
  "Errors": [
    {
      "ErrorCode": "U001",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ]
}
```

> 500 Response

```json
{
  "Id": "string",
  "Code": "400 BadRequest",
  "Message": "There is something wrong with the request parameters provided",
  "Errors": [
    {
      "ErrorCode": "U001",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ]
}
```

<h3 id="create-an-account-access-consent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Account Access Consents Created|[OBReadConsentResponse1](#schemaobreadconsentresponse1)|
|400|Bad Request|Bad request|[OBErrorResponse1](#schemaoberrorresponse1)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|[OBErrorResponse1](#schemaoberrorresponse1)|
|405|Method Not Allowed|Method Not Allowed|None|
|406|Not Acceptable|Not Acceptable|None|
|415|Unsupported Media Type|Unsupported Media Type|None|
|429|Too Many Requests|Too Many Requests|None|
|500|Internal Server Error|Internal Server Error|[OBErrorResponse1](#schemaoberrorresponse1)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|201|RateLimit-Policy|string||TPPs __must__ refer to ASPSP developer portals for further information on any rate limit policies, if the headers are supported and any additional requirements.<br><br>A non-empty list of Quota Policy Items. The Item value __MUST__ be a String.<br><br>Example:<br>`RateLimit-Policy: "default";q=100;w=10`<br><br>The **REQUIRED** "q" parameter indicates the quota allocated by this policy measured in quota units.<br><br>The **OPTIONAL** "w" parameter value conveys a time window.<br>|
|201|RateLimit|string||TPPs __must__ refer to ASPSP developer portals for further information on any rate limit policies, if the headers are supported and any additional requirements.<br><br>A server uses the "RateLimit" response header field to communicate the current service limit for a quota policy for a particular partition key.<br><br>Example:<br>`RateLimit: "default";r=50;t=30`<br><br>The **REQUIRED** "r" parameter value conveys the remaining quota units for the identified policy.<br><br>The **OPTIONAL** "t" parameter value conveys the time window reset time for the identified policy.<br>|
|400|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|401|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|405|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|406|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|415|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|429|Retry-After|integer||Number in seconds to wait|
|429|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
TPPOAuth2Security ( Scopes: accounts )
</aside>

## Get an Account Access Consent

<a id="opIdGetAccountAccessConsentsConsentId"></a>

> Code samples

```bash
curl http://localhost:3000/account-access-consents/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /account-access-consents/{ConsentId}`

Enables an AISP to retrieve the status of an AIS consent.

<h3 id="get-an-account-access-consent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ConsentId|path|string|true|ConsentId|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. <br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: <br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|
|x-client-id|header|string|false|Only used if an ASPSP requires the client ID in order to return rate limit headers. <br><br>TPPs __must__ refer to ASPSP developer portals for further information on any rate limit policies, if the headers are supported and any additional requirements.<br><br>This header __must not__ be used for client authentication<br>|

> Example responses

> 200 Response

```json
{
  "Data": {
    "ConsentId": "string",
    "CreationDateTime": "2024-05-29T00:00:00Z",
    "Status": "AWAU",
    "StatusReason": [
      {
        "StatusReasonCode": "U004",
        "StatusReasonDescription": "Permissions field is missing",
        "Path": "Data.Permissions"
      }
    ],
    "StatusUpdateDateTime": "1970-01-01T00:00:00Z",
    "Permissions": [
      "ReadAccountsBasic"
    ],
    "ExpirationDateTime": "1970-01-01T00:00:00Z",
    "TransactionFromDateTime": "1970-01-01T00:00:00Z",
    "TransactionToDateTime": "1970-01-01T00:00:00Z"
  },
  "Risk": {},
  "Links": {
    "Self": "http://example.com",
    "First": "http://example.com",
    "Prev": "http://example.com",
    "Next": "http://example.com",
    "Last": "http://example.com"
  },
  "Meta": {
    "TotalPages": 0,
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z"
  }
}
```

> 400 Response

```json
{
  "Id": "string",
  "Code": "400 BadRequest",
  "Message": "There is something wrong with the request parameters provided",
  "Errors": [
    {
      "ErrorCode": "U001",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ]
}
```

> 403 Response

```json
{
  "Id": "string",
  "Code": "400 BadRequest",
  "Message": "There is something wrong with the request parameters provided",
  "Errors": [
    {
      "ErrorCode": "U001",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ]
}
```

> 500 Response

```json
{
  "Id": "string",
  "Code": "400 BadRequest",
  "Message": "There is something wrong with the request parameters provided",
  "Errors": [
    {
      "ErrorCode": "U001",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ]
}
```

<h3 id="get-an-account-access-consent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Account Access Consents Read|[OBReadConsentResponse1](#schemaobreadconsentresponse1)|
|400|Bad Request|Bad request|[OBErrorResponse1](#schemaoberrorresponse1)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|[OBErrorResponse1](#schemaoberrorresponse1)|
|405|Method Not Allowed|Method Not Allowed|None|
|406|Not Acceptable|Not Acceptable|None|
|429|Too Many Requests|Too Many Requests|None|
|500|Internal Server Error|Internal Server Error|[OBErrorResponse1](#schemaoberrorresponse1)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|200|RateLimit-Policy|string||TPPs __must__ refer to ASPSP developer portals for further information on any rate limit policies, if the headers are supported and any additional requirements.<br><br>A non-empty list of Quota Policy Items. The Item value __MUST__ be a String.<br><br>Example:<br>`RateLimit-Policy: "default";q=100;w=10`<br><br>The **REQUIRED** "q" parameter indicates the quota allocated by this policy measured in quota units.<br><br>The **OPTIONAL** "w" parameter value conveys a time window.<br>|
|200|RateLimit|string||TPPs __must__ refer to ASPSP developer portals for further information on any rate limit policies, if the headers are supported and any additional requirements.<br><br>A server uses the "RateLimit" response header field to communicate the current service limit for a quota policy for a particular partition key.<br><br>Example:<br>`RateLimit: "default";r=50;t=30`<br><br>The **REQUIRED** "r" parameter value conveys the remaining quota units for the identified policy.<br><br>The **OPTIONAL** "t" parameter value conveys the time window reset time for the identified policy.<br>|
|400|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|401|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|405|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|406|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|429|Retry-After|integer||Number in seconds to wait|
|429|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
TPPOAuth2Security ( Scopes: accounts )
</aside>

## Delete an Account Access Consent

<a id="opIdDeleteAccountAccessConsentsConsentId"></a>

> Code samples

```bash
curl http://localhost:3000/account-access-consents/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /account-access-consents/{ConsentId}`

Enables an AISP to inform the ASPSP that the PSU has revoked their consent.

<h3 id="delete-an-account-access-consent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ConsentId|path|string|true|ConsentId|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. <br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: <br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|
|x-client-id|header|string|false|Only used if an ASPSP requires the client ID in order to return rate limit headers. <br><br>TPPs __must__ refer to ASPSP developer portals for further information on any rate limit policies, if the headers are supported and any additional requirements.<br><br>This header __must not__ be used for client authentication<br>|

> Example responses

> 400 Response

```json
{
  "Id": "string",
  "Code": "400 BadRequest",
  "Message": "There is something wrong with the request parameters provided",
  "Errors": [
    {
      "ErrorCode": "U001",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ]
}
```

> 403 Response

```json
{
  "Id": "string",
  "Code": "400 BadRequest",
  "Message": "There is something wrong with the request parameters provided",
  "Errors": [
    {
      "ErrorCode": "U001",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ]
}
```

> 500 Response

```json
{
  "Id": "string",
  "Code": "400 BadRequest",
  "Message": "There is something wrong with the request parameters provided",
  "Errors": [
    {
      "ErrorCode": "U001",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ]
}
```

<h3 id="delete-an-account-access-consent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Account Access Consents Deleted|None|
|400|Bad Request|Bad request|[OBErrorResponse1](#schemaoberrorresponse1)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|[OBErrorResponse1](#schemaoberrorresponse1)|
|405|Method Not Allowed|Method Not Allowed|None|
|406|Not Acceptable|Not Acceptable|None|
|429|Too Many Requests|Too Many Requests|None|
|500|Internal Server Error|Internal Server Error|[OBErrorResponse1](#schemaoberrorresponse1)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|204|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|204|RateLimit-Policy|string||TPPs __must__ refer to ASPSP developer portals for further information on any rate limit policies, if the headers are supported and any additional requirements.<br><br>A non-empty list of Quota Policy Items. The Item value __MUST__ be a String.<br><br>Example:<br>`RateLimit-Policy: "default";q=100;w=10`<br><br>The **REQUIRED** "q" parameter indicates the quota allocated by this policy measured in quota units.<br><br>The **OPTIONAL** "w" parameter value conveys a time window.<br>|
|204|RateLimit|string||TPPs __must__ refer to ASPSP developer portals for further information on any rate limit policies, if the headers are supported and any additional requirements.<br><br>A server uses the "RateLimit" response header field to communicate the current service limit for a quota policy for a particular partition key.<br><br>Example:<br>`RateLimit: "default";r=50;t=30`<br><br>The **REQUIRED** "r" parameter value conveys the remaining quota units for the identified policy.<br><br>The **OPTIONAL** "t" parameter value conveys the time window reset time for the identified policy.<br>|
|400|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|401|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|405|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|406|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|429|Retry-After|integer||Number in seconds to wait|
|429|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
TPPOAuth2Security ( Scopes: accounts )
</aside>

<h1 id="account-and-transaction-api-specification-accounts">Accounts</h1>

## Get Accounts

<a id="opIdGetAccounts"></a>

> Code samples

```bash
curl http://localhost:3000/accounts \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /accounts`

Enables an AISP to retrieve a list of a PSU's accounts and information about those account(s) that the PSU has consented to.

<h3 id="get-accounts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. <br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: <br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|
|x-client-id|header|string|false|Only used if an ASPSP requires the client ID in order to return rate limit headers. <br><br>TPPs __must__ refer to ASPSP developer portals for further information on any rate limit policies, if the headers are supported and any additional requirements.<br><br>This header __must not__ be used for client authentication<br>|

> Example responses

> 200 Response

```json
{
  "Data": {
    "Account": [
      {
        "AccountId": "22289",
        "Status": "Enabled",
        "StatusUpdateDateTime": "1970-01-01T00:00:00Z",
        "Currency": "string",
        "AccountCategory": "Business",
        "AccountTypeCode": "CACC",
        "Description": "string",
        "Nickname": "string",
        "OpeningDate": "1970-01-01T00:00:00Z",
        "MaturityDate": "1970-01-01T00:00:00Z",
        "SwitchStatus": "string",
        "Account": [
          {
            "SchemeName": "string",
            "Identification": "80200112344562",
            "Name": "Jane Smith",
            "LEI": "IZ9Q00LZEVUKWCQY6X15",
            "SecondaryIdentification": "87562298675897"
          }
        ],
        "StatementFrequencyAndFormat": [
          {
            "Frequency": "YEAR",
            "CommunicationMethod": "EMAL",
            "Format": "DPDF",
            "DeliveryAddress": {
              "AddressType": "BIZZ",
              "Department": "Finance",
              "SubDepartment": "Payroll",
              "StreetName": "Bank Street",
              "BuildingNumber": "11",
              "BuildingName": "string",
              "Floor": "11",
              "UnitNumber": "A88",
              "Room": "Basement 03",
              "PostBox": "PO Box 123456",
              "TownLocationName": "London",
              "DistrictName": "Greater London",
              "CareOf": "Jane Smith",
              "PostCode": "EC2N 4AG",
              "TownName": "London",
              "CountrySubDivision": "string",
              "Country": "string",
              "AddressLine": [
                "string"
              ]
            }
          }
        ],
        "Servicer": {
          "SchemeName": "UK.OBIE.BICFI",
          "Identification": "80200112344562",
          "Name": "Agent Name"
        }
      }
    ]
  },
  "Links": {
    "Self": "http://example.com",
    "First": "http://example.com",
    "Prev": "http://example.com",
    "Next": "http://example.com",
    "Last": "http://example.com"
  },
  "Meta": {
    "TotalPages": 0,
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z"
  }
}
```

> 400 Response

```json
{
  "Id": "string",
  "Code": "400 BadRequest",
  "Message": "There is something wrong with the request parameters provided",
  "Errors": [
    {
      "ErrorCode": "U001",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ]
}
```

> 403 Response

```json
{
  "Id": "string",
  "Code": "400 BadRequest",
  "Message": "There is something wrong with the request parameters provided",
  "Errors": [
    {
      "ErrorCode": "U001",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ]
}
```

> 500 Response

```json
{
  "Id": "string",
  "Code": "400 BadRequest",
  "Message": "There is something wrong with the request parameters provided",
  "Errors": [
    {
      "ErrorCode": "U001",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ]
}
```

<h3 id="get-accounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Accounts Read|[OBReadAccount6](#schemaobreadaccount6)|
|400|Bad Request|Bad request|[OBErrorResponse1](#schemaoberrorresponse1)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|[OBErrorResponse1](#schemaoberrorresponse1)|
|405|Method Not Allowed|Method Not Allowed|None|
|406|Not Acceptable|Not Acceptable|None|
|429|Too Many Requests|Too Many Requests|None|
|500|Internal Server Error|Internal Server Error|[OBErrorResponse1](#schemaoberrorresponse1)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|200|RateLimit-Policy|string||TPPs __must__ refer to ASPSP developer portals for further information on any rate limit policies, if the headers are supported and any additional requirements.<br><br>A non-empty list of Quota Policy Items. The Item value __MUST__ be a String.<br><br>Example:<br>`RateLimit-Policy: "default";q=100;w=10`<br><br>The **REQUIRED** "q" parameter indicates the quota allocated by this policy measured in quota units.<br><br>The **OPTIONAL** "w" parameter value conveys a time window.<br>|
|200|RateLimit|string||TPPs __must__ refer to ASPSP developer portals for further information on any rate limit policies, if the headers are supported and any additional requirements.<br><br>A server uses the "RateLimit" response header field to communicate the current service limit for a quota policy for a particular partition key.<br><br>Example:<br>`RateLimit: "default";r=50;t=30`<br><br>The **REQUIRED** "r" parameter value conveys the remaining quota units for the identified policy.<br><br>The **OPTIONAL** "t" parameter value conveys the time window reset time for the identified policy.<br>|
|400|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|401|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|405|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|406|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|429|Retry-After|integer||Number in seconds to wait|
|429|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
PSUOAuth2Security ( Scopes: accounts )
</aside>

## Get an Account by AccountId

<a id="opIdGetAccountsAccountId"></a>

> Code samples

```bash
curl http://localhost:3000/accounts/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /accounts/{AccountId}`

Enables an AISP to retrieve information about a specific PSU account.

<h3 id="get-an-account-by-accountid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|AccountId|path|string|true|AccountId|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. <br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: <br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|
|x-client-id|header|string|false|Only used if an ASPSP requires the client ID in order to return rate limit headers. <br><br>TPPs __must__ refer to ASPSP developer portals for further information on any rate limit policies, if the headers are supported and any additional requirements.<br><br>This header __must not__ be used for client authentication<br>|

> Example responses

> 200 Response

```json
{
  "Data": {
    "Account": [
      {
        "AccountId": "22289",
        "Status": "Enabled",
        "StatusUpdateDateTime": "1970-01-01T00:00:00Z",
        "Currency": "string",
        "AccountCategory": "Business",
        "AccountTypeCode": "CACC",
        "Description": "string",
        "Nickname": "string",
        "OpeningDate": "1970-01-01T00:00:00Z",
        "MaturityDate": "1970-01-01T00:00:00Z",
        "SwitchStatus": "string",
        "Account": [
          {
            "SchemeName": "string",
            "Identification": "80200112344562",
            "Name": "Jane Smith",
            "LEI": "IZ9Q00LZEVUKWCQY6X15",
            "SecondaryIdentification": "87562298675897"
          }
        ],
        "StatementFrequencyAndFormat": [
          {
            "Frequency": "YEAR",
            "CommunicationMethod": "EMAL",
            "Format": "DPDF",
            "DeliveryAddress": {
              "AddressType": "BIZZ",
              "Department": "Finance",
              "SubDepartment": "Payroll",
              "StreetName": "Bank Street",
              "BuildingNumber": "11",
              "BuildingName": "string",
              "Floor": "11",
              "UnitNumber": "A88",
              "Room": "Basement 03",
              "PostBox": "PO Box 123456",
              "TownLocationName": "London",
              "DistrictName": "Greater London",
              "CareOf": "Jane Smith",
              "PostCode": "EC2N 4AG",
              "TownName": "London",
              "CountrySubDivision": "string",
              "Country": "string",
              "AddressLine": [
                "string"
              ]
            }
          }
        ],
        "Servicer": {
          "SchemeName": "UK.OBIE.BICFI",
          "Identification": "80200112344562",
          "Name": "Agent Name"
        }
      }
    ]
  },
  "Links": {
    "Self": "http://example.com",
    "First": "http://example.com",
    "Prev": "http://example.com",
    "Next": "http://example.com",
    "Last": "http://example.com"
  },
  "Meta": {
    "TotalPages": 0,
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z"
  }
}
```

> 400 Response

```json
{
  "Id": "string",
  "Code": "400 BadRequest",
  "Message": "There is something wrong with the request parameters provided",
  "Errors": [
    {
      "ErrorCode": "U001",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ]
}
```

> 403 Response

```json
{
  "Id": "string",
  "Code": "400 BadRequest",
  "Message": "There is something wrong with the request parameters provided",
  "Errors": [
    {
      "ErrorCode": "U001",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ]
}
```

> 500 Response

```json
{
  "Id": "string",
  "Code": "400 BadRequest",
  "Message": "There is something wrong with the request parameters provided",
  "Errors": [
    {
      "ErrorCode": "U001",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ]
}
```

<h3 id="get-an-account-by-accountid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Accounts Read|[OBReadAccount6](#schemaobreadaccount6)|
|400|Bad Request|Bad request|[OBErrorResponse1](#schemaoberrorresponse1)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|[OBErrorResponse1](#schemaoberrorresponse1)|
|405|Method Not Allowed|Method Not Allowed|None|
|406|Not Acceptable|Not Acceptable|None|
|429|Too Many Requests|Too Many Requests|None|
|500|Internal Server Error|Internal Server Error|[OBErrorResponse1](#schemaoberrorresponse1)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|200|RateLimit-Policy|string||TPPs __must__ refer to ASPSP developer portals for further information on any rate limit policies, if the headers are supported and any additional requirements.<br><br>A non-empty list of Quota Policy Items. The Item value __MUST__ be a String.<br><br>Example:<br>`RateLimit-Policy: "default";q=100;w=10`<br><br>The **REQUIRED** "q" parameter indicates the quota allocated by this policy measured in quota units.<br><br>The **OPTIONAL** "w" parameter value conveys a time window.<br>|
|200|RateLimit|string||TPPs __must__ refer to ASPSP developer portals for further information on any rate limit policies, if the headers are supported and any additional requirements.<br><br>A server uses the "RateLimit" response header field to communicate the current service limit for a quota policy for a particular partition key.<br><br>Example:<br>`RateLimit: "default";r=50;t=30`<br><br>The **REQUIRED** "r" parameter value conveys the remaining quota units for the identified policy.<br><br>The **OPTIONAL** "t" parameter value conveys the time window reset time for the identified policy.<br>|
|400|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|401|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|405|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|406|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|429|Retry-After|integer||Number in seconds to wait|
|429|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
PSUOAuth2Security ( Scopes: accounts )
</aside>

<h1 id="account-and-transaction-api-specification-balances">Balances</h1>

## Get Balances for an AccountId

<a id="opIdGetAccountsAccountIdBalances"></a>

> Code samples

```bash
curl http://localhost:3000/accounts/string/balances \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /accounts/{AccountId}/balances`

Enables an AISP to retrieve account balance information for a specific PSU account.

<h3 id="get-balances-for-an-accountid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|AccountId|path|string|true|AccountId|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. <br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: <br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|
|x-client-id|header|string|false|Only used if an ASPSP requires the client ID in order to return rate limit headers. <br><br>TPPs __must__ refer to ASPSP developer portals for further information on any rate limit policies, if the headers are supported and any additional requirements.<br><br>This header __must not__ be used for client authentication<br>|

> Example responses

> 200 Response

```json
{
  "Data": {
    "Balance": [
      {
        "AccountId": "22289",
        "CreditDebitIndicator": "Credit",
        "Type": "CLAV",
        "DateTime": "1970-01-01T00:00:00Z",
        "Amount": {
          "Amount": "1209.06",
          "Currency": "GBP",
          "SubType": "BCUR"
        },
        "CreditLine": [
          {
            "Included": true,
            "Type": "Available",
            "Amount": {
              "Amount": "1209.06",
              "Currency": "GBP"
            }
          }
        ],
        "LocalAmount": {
          "Amount": "1209.06",
          "Currency": "GBP",
          "SubType": "LCUR"
        }
      }
    ],
    "TotalValue": {
      "Amount": "1209.06",
      "Currency": "GBP"
    }
  },
  "Links": {
    "Self": "http://example.com",
    "First": "http://example.com",
    "Prev": "http://example.com",
    "Next": "http://example.com",
    "Last": "http://example.com"
  },
  "Meta": {
    "TotalPages": 0,
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z"
  }
}
```

> 400 Response

```json
{
  "Id": "string",
  "Code": "400 BadRequest",
  "Message": "There is something wrong with the request parameters provided",
  "Errors": [
    {
      "ErrorCode": "U001",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ]
}
```

> 403 Response

```json
{
  "Id": "string",
  "Code": "400 BadRequest",
  "Message": "There is something wrong with the request parameters provided",
  "Errors": [
    {
      "ErrorCode": "U001",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ]
}
```

> 500 Response

```json
{
  "Id": "string",
  "Code": "400 BadRequest",
  "Message": "There is something wrong with the request parameters provided",
  "Errors": [
    {
      "ErrorCode": "U001",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ]
}
```

<h3 id="get-balances-for-an-accountid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Balances Read|[OBReadBalance1](#schemaobreadbalance1)|
|400|Bad Request|Bad request|[OBErrorResponse1](#schemaoberrorresponse1)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|[OBErrorResponse1](#schemaoberrorresponse1)|
|405|Method Not Allowed|Method Not Allowed|None|
|406|Not Acceptable|Not Acceptable|None|
|429|Too Many Requests|Too Many Requests|None|
|500|Internal Server Error|Internal Server Error|[OBErrorResponse1](#schemaoberrorresponse1)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|200|RateLimit-Policy|string||TPPs __must__ refer to ASPSP developer portals for further information on any rate limit policies, if the headers are supported and any additional requirements.<br><br>A non-empty list of Quota Policy Items. The Item value __MUST__ be a String.<br><br>Example:<br>`RateLimit-Policy: "default";q=100;w=10`<br><br>The **REQUIRED** "q" parameter indicates the quota allocated by this policy measured in quota units.<br><br>The **OPTIONAL** "w" parameter value conveys a time window.<br>|
|200|RateLimit|string||TPPs __must__ refer to ASPSP developer portals for further information on any rate limit policies, if the headers are supported and any additional requirements.<br><br>A server uses the "RateLimit" response header field to communicate the current service limit for a quota policy for a particular partition key.<br><br>Example:<br>`RateLimit: "default";r=50;t=30`<br><br>The **REQUIRED** "r" parameter value conveys the remaining quota units for the identified policy.<br><br>The **OPTIONAL** "t" parameter value conveys the time window reset time for the identified policy.<br>|
|400|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|401|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|405|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|406|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|429|Retry-After|integer||Number in seconds to wait|
|429|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
PSUOAuth2Security ( Scopes: accounts )
</aside>

## Get Balances

<a id="opIdGetBalances"></a>

> Code samples

```bash
curl http://localhost:3000/balances \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /balances`

Enables an AISP to retrieve balance information for account(s) that the PSU has consented to.

<h3 id="get-balances-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. <br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: <br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|
|x-client-id|header|string|false|Only used if an ASPSP requires the client ID in order to return rate limit headers. <br><br>TPPs __must__ refer to ASPSP developer portals for further information on any rate limit policies, if the headers are supported and any additional requirements.<br><br>This header __must not__ be used for client authentication<br>|

> Example responses

> 200 Response

```json
{
  "Data": {
    "Balance": [
      {
        "AccountId": "22289",
        "CreditDebitIndicator": "Credit",
        "Type": "CLAV",
        "DateTime": "1970-01-01T00:00:00Z",
        "Amount": {
          "Amount": "1209.06",
          "Currency": "GBP",
          "SubType": "BCUR"
        },
        "CreditLine": [
          {
            "Included": true,
            "Type": "Available",
            "Amount": {
              "Amount": "1209.06",
              "Currency": "GBP"
            }
          }
        ],
        "LocalAmount": {
          "Amount": "1209.06",
          "Currency": "GBP",
          "SubType": "LCUR"
        }
      }
    ],
    "TotalValue": {
      "Amount": "1209.06",
      "Currency": "GBP"
    }
  },
  "Links": {
    "Self": "http://example.com",
    "First": "http://example.com",
    "Prev": "http://example.com",
    "Next": "http://example.com",
    "Last": "http://example.com"
  },
  "Meta": {
    "TotalPages": 0,
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z"
  }
}
```

> 400 Response

```json
{
  "Id": "string",
  "Code": "400 BadRequest",
  "Message": "There is something wrong with the request parameters provided",
  "Errors": [
    {
      "ErrorCode": "U001",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ]
}
```

> 403 Response

```json
{
  "Id": "string",
  "Code": "400 BadRequest",
  "Message": "There is something wrong with the request parameters provided",
  "Errors": [
    {
      "ErrorCode": "U001",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ]
}
```

> 500 Response

```json
{
  "Id": "string",
  "Code": "400 BadRequest",
  "Message": "There is something wrong with the request parameters provided",
  "Errors": [
    {
      "ErrorCode": "U001",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ]
}
```

<h3 id="get-balances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Balances Read|[OBReadBalance1](#schemaobreadbalance1)|
|400|Bad Request|Bad request|[OBErrorResponse1](#schemaoberrorresponse1)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|[OBErrorResponse1](#schemaoberrorresponse1)|
|404|Not Found|Not found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|406|Not Acceptable|Not Acceptable|None|
|429|Too Many Requests|Too Many Requests|None|
|500|Internal Server Error|Internal Server Error|[OBErrorResponse1](#schemaoberrorresponse1)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|200|RateLimit-Policy|string||TPPs __must__ refer to ASPSP developer portals for further information on any rate limit policies, if the headers are supported and any additional requirements.<br><br>A non-empty list of Quota Policy Items. The Item value __MUST__ be a String.<br><br>Example:<br>`RateLimit-Policy: "default";q=100;w=10`<br><br>The **REQUIRED** "q" parameter indicates the quota allocated by this policy measured in quota units.<br><br>The **OPTIONAL** "w" parameter value conveys a time window.<br>|
|200|RateLimit|string||TPPs __must__ refer to ASPSP developer portals for further information on any rate limit policies, if the headers are supported and any additional requirements.<br><br>A server uses the "RateLimit" response header field to communicate the current service limit for a quota policy for a particular partition key.<br><br>Example:<br>`RateLimit: "default";r=50;t=30`<br><br>The **REQUIRED** "r" parameter value conveys the remaining quota units for the identified policy.<br><br>The **OPTIONAL** "t" parameter value conveys the time window reset time for the identified policy.<br>|
|400|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|401|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|404|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|405|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|406|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|429|Retry-After|integer||Number in seconds to wait|
|429|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
PSUOAuth2Security ( Scopes: accounts )
</aside>

<h1 id="account-and-transaction-api-specification-beneficiaries">Beneficiaries</h1>

## Get Beneficiaries for an AccountId

<a id="opIdGetAccountsAccountIdBeneficiaries"></a>

> Code samples

```bash
curl http://localhost:3000/accounts/string/beneficiaries \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /accounts/{AccountId}/beneficiaries`

Enables an AISP to retrieve Beneficiary information for a specific PSU account.

<h3 id="get-beneficiaries-for-an-accountid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|AccountId|path|string|true|AccountId|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. <br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: <br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|
|x-client-id|header|string|false|Only used if an ASPSP requires the client ID in order to return rate limit headers. <br><br>TPPs __must__ refer to ASPSP developer portals for further information on any rate limit policies, if the headers are supported and any additional requirements.<br><br>This header __must not__ be used for client authentication<br>|

> Example responses

> 200 Response

```json
{
  "Data": {
    "Beneficiary": [
      {
        "AccountId": "22289",
        "BeneficiaryId": "Ben1",
        "BeneficiaryType": "Ordinary",
        "Reference": "Towbar Club",
        "SupplementaryData": {},
        "CreditorAgent": {
          "SchemeName": "UK.OBIE.BICFI",
          "Identification": "80200112344562",
          "Name": "Agent Name",
          "PostalAddress": {
            "AddressType": "BIZZ",
            "Department": "Finance",
            "SubDepartment": "Payroll",
            "StreetName": "Bank Street",
            "BuildingNumber": "11",
            "BuildingName": "string",
            "Floor": "11",
            "UnitNumber": "A88",
            "Room": "Basement 03",
            "PostBox": "PO Box 123456",
            "TownLocationName": "London",
            "DistrictName": "Greater London",
            "CareOf": "Jane Smith",
            "PostCode": "EC2N 4AG",
            "TownName": "London",
            "CountrySubDivision": "string",
            "Country": "string",
            "AddressLine": [
              "string"
            ]
          },
          "LEI": "IZ9Q00LZEVUKWCQY6X15"
        },
        "CreditorAccount": {
          "SchemeName": "string",
          "Identification": "80200112344562",
          "Name": "Jane Smith",
          "SecondaryIdentification": "87562298675897",
          "Proxy": {
            "Identification": "2360549017905188",
            "Code": "TELE",
            "Type": "string"
          }
        }
      }
    ]
  },
  "Links": {
    "Self": "http://example.com",
    "First": "http://example.com",
    "Prev": "http://example.com",
    "Next": "http://example.com",
    "Last": "http://example.com"
  },
  "Meta": {
    "TotalPages": 0,
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z"
  }
}
```

> 400 Response

```json
{
  "Id": "string",
  "Code": "400 BadRequest",
  "Message": "There is something wrong with the request parameters provided",
  "Errors": [
    {
      "ErrorCode": "U001",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ]
}
```

> 403 Response

```json
{
  "Id": "string",
  "Code": "400 BadRequest",
  "Message": "There is something wrong with the request parameters provided",
  "Errors": [
    {
      "ErrorCode": "U001",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ]
}
```

> 500 Response

```json
{
  "Id": "string",
  "Code": "400 BadRequest",
  "Message": "There is something wrong with the request parameters provided",
  "Errors": [
    {
      "ErrorCode": "U001",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ]
}
```

<h3 id="get-beneficiaries-for-an-accountid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Beneficiaries Read|[OBReadBeneficiary5](#schemaobreadbeneficiary5)|
|400|Bad Request|Bad request|[OBErrorResponse1](#schemaoberrorresponse1)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|[OBErrorResponse1](#schemaoberrorresponse1)|
|404|Not Found|Not found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|406|Not Acceptable|Not Acceptable|None|
|429|Too Many Requests|Too Many Requests|None|
|500|Internal Server Error|Internal Server Error|[OBErrorResponse1](#schemaoberrorresponse1)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|200|RateLimit-Policy|string||TPPs __must__ refer to ASPSP developer portals for further information on any rate limit policies, if the headers are supported and any additional requirements.<br><br>A non-empty list of Quota Policy Items. The Item value __MUST__ be a String.<br><br>Example:<br>`RateLimit-Policy: "default";q=100;w=10`<br><br>The **REQUIRED** "q" parameter indicates the quota allocated by this policy measured in quota units.<br><br>The **OPTIONAL** "w" parameter value conveys a time window.<br>|
|200|RateLimit|string||TPPs __must__ refer to ASPSP developer portals for further information on any rate limit policies, if the headers are supported and any additional requirements.<br><br>A server uses the "RateLimit" response header field to communicate the current service limit for a quota policy for a particular partition key.<br><br>Example:<br>`RateLimit: "default";r=50;t=30`<br><br>The **REQUIRED** "r" parameter value conveys the remaining quota units for the identified policy.<br><br>The **OPTIONAL** "t" parameter value conveys the time window reset time for the identified policy.<br>|
|400|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|401|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|404|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|405|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|406|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|429|Retry-After|integer||Number in seconds to wait|
|429|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
PSUOAuth2Security ( Scopes: accounts )
</aside>

## Get Beneficiaries

<a id="opIdGetBeneficiaries"></a>

> Code samples

```bash
curl http://localhost:3000/beneficiaries \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /beneficiaries`

Enables an AISP to retrieve Beneficiary information for account(s) that the PSU has consented to.

<h3 id="get-beneficiaries-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. <br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: <br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|
|x-client-id|header|string|false|Only used if an ASPSP requires the client ID in order to return rate limit headers. <br><br>TPPs __must__ refer to ASPSP developer portals for further information on any rate limit policies, if the headers are supported and any additional requirements.<br><br>This header __must not__ be used for client authentication<br>|

> Example responses

> 200 Response

```json
{
  "Data": {
    "Beneficiary": [
      {
        "AccountId": "22289",
        "BeneficiaryId": "Ben1",
        "BeneficiaryType": "Ordinary",
        "Reference": "Towbar Club",
        "SupplementaryData": {},
        "CreditorAgent": {
          "SchemeName": "UK.OBIE.BICFI",
          "Identification": "80200112344562",
          "Name": "Agent Name",
          "PostalAddress": {
            "AddressType": "BIZZ",
            "Department": "Finance",
            "SubDepartment": "Payroll",
            "StreetName": "Bank Street",
            "BuildingNumber": "11",
            "BuildingName": "string",
            "Floor": "11",
            "UnitNumber": "A88",
            "Room": "Basement 03",
            "PostBox": "PO Box 123456",
            "TownLocationName": "London",
            "DistrictName": "Greater London",
            "CareOf": "Jane Smith",
            "PostCode": "EC2N 4AG",
            "TownName": "London",
            "CountrySubDivision": "string",
            "Country": "string",
            "AddressLine": [
              "string"
            ]
          },
          "LEI": "IZ9Q00LZEVUKWCQY6X15"
        },
        "CreditorAccount": {
          "SchemeName": "string",
          "Identification": "80200112344562",
          "Name": "Jane Smith",
          "SecondaryIdentification": "87562298675897",
          "Proxy": {
            "Identification": "2360549017905188",
            "Code": "TELE",
            "Type": "string"
          }
        }
      }
    ]
  },
  "Links": {
    "Self": "http://example.com",
    "First": "http://example.com",
    "Prev": "http://example.com",
    "Next": "http://example.com",
    "Last": "http://example.com"
  },
  "Meta": {
    "TotalPages": 0,
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z"
  }
}
```

> 400 Response

```json
{
  "Id": "string",
  "Code": "400 BadRequest",
  "Message": "There is something wrong with the request parameters provided",
  "Errors": [
    {
      "ErrorCode": "U001",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ]
}
```

> 403 Response

```json
{
  "Id": "string",
  "Code": "400 BadRequest",
  "Message": "There is something wrong with the request parameters provided",
  "Errors": [
    {
      "ErrorCode": "U001",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ]
}
```

> 500 Response

```json
{
  "Id": "string",
  "Code": "400 BadRequest",
  "Message": "There is something wrong with the request parameters provided",
  "Errors": [
    {
      "ErrorCode": "U001",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ]
}
```

<h3 id="get-beneficiaries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Beneficiaries Read|[OBReadBeneficiary5](#schemaobreadbeneficiary5)|
|400|Bad Request|Bad request|[OBErrorResponse1](#schemaoberrorresponse1)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|[OBErrorResponse1](#schemaoberrorresponse1)|
|404|Not Found|Not found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|406|Not Acceptable|Not Acceptable|None|
|429|Too Many Requests|Too Many Requests|None|
|500|Internal Server Error|Internal Server Error|[OBErrorResponse1](#schemaoberrorresponse1)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|200|RateLimit-Policy|string||TPPs __must__ refer to ASPSP developer portals for further information on any rate limit policies, if the headers are supported and any additional requirements.<br><br>A non-empty list of Quota Policy Items. The Item value __MUST__ be a String.<br><br>Example:<br>`RateLimit-Policy: "default";q=100;w=10`<br><br>The **REQUIRED** "q" parameter indicates the quota allocated by this policy measured in quota units.<br><br>The **OPTIONAL** "w" parameter value conveys a time window.<br>|
|200|RateLimit|string||TPPs __must__ refer to ASPSP developer portals for further information on any rate limit policies, if the headers are supported and any additional requirements.<br><br>A server uses the "RateLimit" response header field to communicate the current service limit for a quota policy for a particular partition key.<br><br>Example:<br>`RateLimit: "default";r=50;t=30`<br><br>The **REQUIRED** "r" parameter value conveys the remaining quota units for the identified policy.<br><br>The **OPTIONAL** "t" parameter value conveys the time window reset time for the identified policy.<br>|
|400|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|401|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|404|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|405|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|406|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|429|Retry-After|integer||Number in seconds to wait|
|429|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
PSUOAuth2Security ( Scopes: accounts )
</aside>

<h1 id="account-and-transaction-api-specification-direct-debits">Direct Debits</h1>

## Get Direct Debits for an AccountId

<a id="opIdGetAccountsAccountIdDirectDebits"></a>

> Code samples

```bash
curl http://localhost:3000/accounts/string/direct-debits \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /accounts/{AccountId}/direct-debits`

Enables an AISP to retrieve Direct Debit information for a specific PSU account.

<h3 id="get-direct-debits-for-an-accountid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|AccountId|path|string|true|AccountId|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. <br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: <br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|
|x-client-id|header|string|false|Only used if an ASPSP requires the client ID in order to return rate limit headers. <br><br>TPPs __must__ refer to ASPSP developer portals for further information on any rate limit policies, if the headers are supported and any additional requirements.<br><br>This header __must not__ be used for client authentication<br>|

> Example responses

> 200 Response

```json
{
  "Data": {
    "DirectDebit": [
      {
        "AccountId": "22289",
        "DirectDebitId": "string",
        "DirectDebitStatusCode": "ACTV",
        "MandateRelatedInformation": {
          "MandateIdentification": "Golfers",
          "Classification": "FIXE",
          "CategoryPurposeCode": "BONU",
          "FirstPaymentDateTime": "2024-04-25T12:46:49.425Z",
          "RecurringPaymentDateTime": "2024-04-25T12:46:49.425Z",
          "FinalPaymentDateTime": "2024-04-25T12:46:49.425Z",
          "Frequency": {
            "Type": "MNTH",
            "CountPerPeriod": 1,
            "PointInTime": "00"
          },
          "Reason": "To pay monthly membership"
        },
        "Name": "string",
        "PreviousPaymentDateTime": "1970-01-01T00:00:00Z",
        "PreviousPaymentAmount": {
          "Amount": "1209.06",
          "Currency": "GBP"
        }
      }
    ]
  },
  "Links": {
    "Self": "http://example.com",
    "First": "http://example.com",
    "Prev": "http://example.com",
    "Next": "http://example.com",
    "Last": "http://example.com"
  },
  "Meta": {
    "TotalPages": 0,
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z"
  }
}
```

> 400 Response

```json
{
  "Id": "string",
  "Code": "400 BadRequest",
  "Message": "There is something wrong with the request parameters provided",
  "Errors": [
    {
      "ErrorCode": "U001",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ]
}
```

> 403 Response

```json
{
  "Id": "string",
  "Code": "400 BadRequest",
  "Message": "There is something wrong with the request parameters provided",
  "Errors": [
    {
      "ErrorCode": "U001",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ]
}
```

> 500 Response

```json
{
  "Id": "string",
  "Code": "400 BadRequest",
  "Message": "There is something wrong with the request parameters provided",
  "Errors": [
    {
      "ErrorCode": "U001",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ]
}
```

<h3 id="get-direct-debits-for-an-accountid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Direct Debits Read|[OBReadDirectDebit2](#schemaobreaddirectdebit2)|
|400|Bad Request|Bad request|[OBErrorResponse1](#schemaoberrorresponse1)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|[OBErrorResponse1](#schemaoberrorresponse1)|
|404|Not Found|Not found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|406|Not Acceptable|Not Acceptable|None|
|429|Too Many Requests|Too Many Requests|None|
|500|Internal Server Error|Internal Server Error|[OBErrorResponse1](#schemaoberrorresponse1)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|200|RateLimit-Policy|string||TPPs __must__ refer to ASPSP developer portals for further information on any rate limit policies, if the headers are supported and any additional requirements.<br><br>A non-empty list of Quota Policy Items. The Item value __MUST__ be a String.<br><br>Example:<br>`RateLimit-Policy: "default";q=100;w=10`<br><br>The **REQUIRED** "q" parameter indicates the quota allocated by this policy measured in quota units.<br><br>The **OPTIONAL** "w" parameter value conveys a time window.<br>|
|200|RateLimit|string||TPPs __must__ refer to ASPSP developer portals for further information on any rate limit policies, if the headers are supported and any additional requirements.<br><br>A server uses the "RateLimit" response header field to communicate the current service limit for a quota policy for a particular partition key.<br><br>Example:<br>`RateLimit: "default";r=50;t=30`<br><br>The **REQUIRED** "r" parameter value conveys the remaining quota units for the identified policy.<br><br>The **OPTIONAL** "t" parameter value conveys the time window reset time for the identified policy.<br>|
|400|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|401|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|404|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|405|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|406|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|429|Retry-After|integer||Number in seconds to wait|
|429|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
PSUOAuth2Security ( Scopes: accounts )
</aside>

## Get Direct Debits

<a id="opIdGetDirectDebits"></a>

> Code samples

```bash
curl http://localhost:3000/direct-debits \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /direct-debits`

Enables an AISP to retrieve Direct Debit information for account(s) that the PSU has consented to.

<h3 id="get-direct-debits-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. <br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: <br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|
|x-client-id|header|string|false|Only used if an ASPSP requires the client ID in order to return rate limit headers. <br><br>TPPs __must__ refer to ASPSP developer portals for further information on any rate limit policies, if the headers are supported and any additional requirements.<br><br>This header __must not__ be used for client authentication<br>|

> Example responses

> 200 Response

```json
{
  "Data": {
    "DirectDebit": [
      {
        "AccountId": "22289",
        "DirectDebitId": "string",
        "DirectDebitStatusCode": "ACTV",
        "MandateRelatedInformation": {
          "MandateIdentification": "Golfers",
          "Classification": "FIXE",
          "CategoryPurposeCode": "BONU",
          "FirstPaymentDateTime": "2024-04-25T12:46:49.425Z",
          "RecurringPaymentDateTime": "2024-04-25T12:46:49.425Z",
          "FinalPaymentDateTime": "2024-04-25T12:46:49.425Z",
          "Frequency": {
            "Type": "MNTH",
            "CountPerPeriod": 1,
            "PointInTime": "00"
          },
          "Reason": "To pay monthly membership"
        },
        "Name": "string",
        "PreviousPaymentDateTime": "1970-01-01T00:00:00Z",
        "PreviousPaymentAmount": {
          "Amount": "1209.06",
          "Currency": "GBP"
        }
      }
    ]
  },
  "Links": {
    "Self": "http://example.com",
    "First": "http://example.com",
    "Prev": "http://example.com",
    "Next": "http://example.com",
    "Last": "http://example.com"
  },
  "Meta": {
    "TotalPages": 0,
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z"
  }
}
```

> 400 Response

```json
{
  "Id": "string",
  "Code": "400 BadRequest",
  "Message": "There is something wrong with the request parameters provided",
  "Errors": [
    {
      "ErrorCode": "U001",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ]
}
```

> 403 Response

```json
{
  "Id": "string",
  "Code": "400 BadRequest",
  "Message": "There is something wrong with the request parameters provided",
  "Errors": [
    {
      "ErrorCode": "U001",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ]
}
```

> 500 Response

```json
{
  "Id": "string",
  "Code": "400 BadRequest",
  "Message": "There is something wrong with the request parameters provided",
  "Errors": [
    {
      "ErrorCode": "U001",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ]
}
```

<h3 id="get-direct-debits-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Direct Debits Read|[OBReadDirectDebit2](#schemaobreaddirectdebit2)|
|400|Bad Request|Bad request|[OBErrorResponse1](#schemaoberrorresponse1)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|[OBErrorResponse1](#schemaoberrorresponse1)|
|404|Not Found|Not found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|406|Not Acceptable|Not Acceptable|None|
|429|Too Many Requests|Too Many Requests|None|
|500|Internal Server Error|Internal Server Error|[OBErrorResponse1](#schemaoberrorresponse1)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|200|RateLimit-Policy|string||TPPs __must__ refer to ASPSP developer portals for further information on any rate limit policies, if the headers are supported and any additional requirements.<br><br>A non-empty list of Quota Policy Items. The Item value __MUST__ be a String.<br><br>Example:<br>`RateLimit-Policy: "default";q=100;w=10`<br><br>The **REQUIRED** "q" parameter indicates the quota allocated by this policy measured in quota units.<br><br>The **OPTIONAL** "w" parameter value conveys a time window.<br>|
|200|RateLimit|string||TPPs __must__ refer to ASPSP developer portals for further information on any rate limit policies, if the headers are supported and any additional requirements.<br><br>A server uses the "RateLimit" response header field to communicate the current service limit for a quota policy for a particular partition key.<br><br>Example:<br>`RateLimit: "default";r=50;t=30`<br><br>The **REQUIRED** "r" parameter value conveys the remaining quota units for the identified policy.<br><br>The **OPTIONAL** "t" parameter value conveys the time window reset time for the identified policy.<br>|
|400|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|401|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|404|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|405|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|406|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|429|Retry-After|integer||Number in seconds to wait|
|429|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
PSUOAuth2Security ( Scopes: accounts )
</aside>

<h1 id="account-and-transaction-api-specification-offers">Offers</h1>

## Get Offers for an AccountId

<a id="opIdGetAccountsAccountIdOffers"></a>

> Code samples

```bash
curl http://localhost:3000/accounts/string/offers \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /accounts/{AccountId}/offers`

Enables an AISP to retrieve any offer information for a specific PSU account.

<h3 id="get-offers-for-an-accountid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|AccountId|path|string|true|AccountId|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. <br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: <br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|
|x-client-id|header|string|false|Only used if an ASPSP requires the client ID in order to return rate limit headers. <br><br>TPPs __must__ refer to ASPSP developer portals for further information on any rate limit policies, if the headers are supported and any additional requirements.<br><br>This header __must not__ be used for client authentication<br>|

> Example responses

> 200 Response

```json
{
  "Data": {
    "Offer": [
      {
        "AccountId": "22289",
        "OfferId": "Offer1",
        "OfferType": "LimitIncrease",
        "Description": "Credit limit increase for the account up to £10000.00",
        "StartDateTime": "2024-05-29T00:00:00Z",
        "EndDateTime": "2024-06-29T00:00:00Z",
        "Rate": "100.00",
        "Value": 10,
        "Term": "Starting first of the month and ending at the end of year",
        "URL": "http://modelbank.com/offer/offer1",
        "Amount": {
          "Amount": "1209.06",
          "Currency": "GBP"
        },
        "Fee": {
          "Amount": "1209.06",
          "Currency": "GBP"
        }
      }
    ]
  },
  "Links": {
    "Self": "http://example.com",
    "First": "http://example.com",
    "Prev": "http://example.com",
    "Next": "http://example.com",
    "Last": "http://example.com"
  },
  "Meta": {
    "TotalPages": 0,
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z"
  }
}
```

> 400 Response

```json
{
  "Id": "string",
  "Code": "400 BadRequest",
  "Message": "There is something wrong with the request parameters provided",
  "Errors": [
    {
      "ErrorCode": "U001",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ]
}
```

> 403 Response

```json
{
  "Id": "string",
  "Code": "400 BadRequest",
  "Message": "There is something wrong with the request parameters provided",
  "Errors": [
    {
      "ErrorCode": "U001",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ]
}
```

> 500 Response

```json
{
  "Id": "string",
  "Code": "400 BadRequest",
  "Message": "There is something wrong with the request parameters provided",
  "Errors": [
    {
      "ErrorCode": "U001",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ]
}
```

<h3 id="get-offers-for-an-accountid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Offers Read|[OBReadOffer1](#schemaobreadoffer1)|
|400|Bad Request|Bad request|[OBErrorResponse1](#schemaoberrorresponse1)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|[OBErrorResponse1](#schemaoberrorresponse1)|
|404|Not Found|Not found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|406|Not Acceptable|Not Acceptable|None|
|429|Too Many Requests|Too Many Requests|None|
|500|Internal Server Error|Internal Server Error|[OBErrorResponse1](#schemaoberrorresponse1)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|200|RateLimit-Policy|string||TPPs __must__ refer to ASPSP developer portals for further information on any rate limit policies, if the headers are supported and any additional requirements.<br><br>A non-empty list of Quota Policy Items. The Item value __MUST__ be a String.<br><br>Example:<br>`RateLimit-Policy: "default";q=100;w=10`<br><br>The **REQUIRED** "q" parameter indicates the quota allocated by this policy measured in quota units.<br><br>The **OPTIONAL** "w" parameter value conveys a time window.<br>|
|200|RateLimit|string||TPPs __must__ refer to ASPSP developer portals for further information on any rate limit policies, if the headers are supported and any additional requirements.<br><br>A server uses the "RateLimit" response header field to communicate the current service limit for a quota policy for a particular partition key.<br><br>Example:<br>`RateLimit: "default";r=50;t=30`<br><br>The **REQUIRED** "r" parameter value conveys the remaining quota units for the identified policy.<br><br>The **OPTIONAL** "t" parameter value conveys the time window reset time for the identified policy.<br>|
|400|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|401|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|404|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|405|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|406|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|429|Retry-After|integer||Number in seconds to wait|
|429|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
PSUOAuth2Security ( Scopes: accounts )
</aside>

## Get Offers

<a id="opIdGetOffers"></a>

> Code samples

```bash
curl http://localhost:3000/offers \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /offers`

Enables an AISP to retrieve any offer information for account(s) that the PSU has consented to.

<h3 id="get-offers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. <br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: <br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|
|x-client-id|header|string|false|Only used if an ASPSP requires the client ID in order to return rate limit headers. <br><br>TPPs __must__ refer to ASPSP developer portals for further information on any rate limit policies, if the headers are supported and any additional requirements.<br><br>This header __must not__ be used for client authentication<br>|

> Example responses

> 200 Response

```json
{
  "Data": {
    "Offer": [
      {
        "AccountId": "22289",
        "OfferId": "Offer1",
        "OfferType": "LimitIncrease",
        "Description": "Credit limit increase for the account up to £10000.00",
        "StartDateTime": "2024-05-29T00:00:00Z",
        "EndDateTime": "2024-06-29T00:00:00Z",
        "Rate": "100.00",
        "Value": 10,
        "Term": "Starting first of the month and ending at the end of year",
        "URL": "http://modelbank.com/offer/offer1",
        "Amount": {
          "Amount": "1209.06",
          "Currency": "GBP"
        },
        "Fee": {
          "Amount": "1209.06",
          "Currency": "GBP"
        }
      }
    ]
  },
  "Links": {
    "Self": "http://example.com",
    "First": "http://example.com",
    "Prev": "http://example.com",
    "Next": "http://example.com",
    "Last": "http://example.com"
  },
  "Meta": {
    "TotalPages": 0,
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z"
  }
}
```

> 400 Response

```json
{
  "Id": "string",
  "Code": "400 BadRequest",
  "Message": "There is something wrong with the request parameters provided",
  "Errors": [
    {
      "ErrorCode": "U001",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ]
}
```

> 403 Response

```json
{
  "Id": "string",
  "Code": "400 BadRequest",
  "Message": "There is something wrong with the request parameters provided",
  "Errors": [
    {
      "ErrorCode": "U001",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ]
}
```

> 500 Response

```json
{
  "Id": "string",
  "Code": "400 BadRequest",
  "Message": "There is something wrong with the request parameters provided",
  "Errors": [
    {
      "ErrorCode": "U001",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ]
}
```

<h3 id="get-offers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Offers Read|[OBReadOffer1](#schemaobreadoffer1)|
|400|Bad Request|Bad request|[OBErrorResponse1](#schemaoberrorresponse1)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|[OBErrorResponse1](#schemaoberrorresponse1)|
|404|Not Found|Not found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|406|Not Acceptable|Not Acceptable|None|
|429|Too Many Requests|Too Many Requests|None|
|500|Internal Server Error|Internal Server Error|[OBErrorResponse1](#schemaoberrorresponse1)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|200|RateLimit-Policy|string||TPPs __must__ refer to ASPSP developer portals for further information on any rate limit policies, if the headers are supported and any additional requirements.<br><br>A non-empty list of Quota Policy Items. The Item value __MUST__ be a String.<br><br>Example:<br>`RateLimit-Policy: "default";q=100;w=10`<br><br>The **REQUIRED** "q" parameter indicates the quota allocated by this policy measured in quota units.<br><br>The **OPTIONAL** "w" parameter value conveys a time window.<br>|
|200|RateLimit|string||TPPs __must__ refer to ASPSP developer portals for further information on any rate limit policies, if the headers are supported and any additional requirements.<br><br>A server uses the "RateLimit" response header field to communicate the current service limit for a quota policy for a particular partition key.<br><br>Example:<br>`RateLimit: "default";r=50;t=30`<br><br>The **REQUIRED** "r" parameter value conveys the remaining quota units for the identified policy.<br><br>The **OPTIONAL** "t" parameter value conveys the time window reset time for the identified policy.<br>|
|400|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|401|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|404|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|405|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|406|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|429|Retry-After|integer||Number in seconds to wait|
|429|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
PSUOAuth2Security ( Scopes: accounts )
</aside>

<h1 id="account-and-transaction-api-specification-parties">Parties</h1>

## Get Parties for an AccountId

<a id="opIdGetAccountsAccountIdParties"></a>

> Code samples

```bash
curl http://localhost:3000/accounts/string/parties \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /accounts/{AccountId}/parties`

Enables an AISP to retrieve details about the PSU account-holder(s)/operator(s).

<h3 id="get-parties-for-an-accountid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|AccountId|path|string|true|AccountId|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. <br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: <br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|
|x-client-id|header|string|false|Only used if an ASPSP requires the client ID in order to return rate limit headers. <br><br>TPPs __must__ refer to ASPSP developer portals for further information on any rate limit policies, if the headers are supported and any additional requirements.<br><br>This header __must not__ be used for client authentication<br>|

> Example responses

> 200 Response

```json
{
  "Data": {
    "Party": [
      {
        "PartyId": "PXSIF023",
        "PartyNumber": "20202002",
        "PartyType": "Joint",
        "Name": "Mx Jane Smith",
        "FullLegalName": "Jane Smith",
        "LegalStructure": "UK.OBIE.Individual",
        "LEI": "IZ9Q00LZEVUKWCQY6X15",
        "BeneficialOwnership": true,
        "AccountRole": "string",
        "EmailAddress": "d.user@semiotec.co.jp",
        "Phone": "+44-2079460000",
        "Mobile": "+44-7700900000",
        "Relationships": {
          "Account": {
            "Related": "https://api.alphabank.com/open-banking/v4.0/aisp/accounts/89019",
            "Id": "89019"
          }
        },
        "Address": [
          {
            "AddressType": "BIZZ",
            "Department": "Finance",
            "SubDepartment": "Payroll",
            "StreetName": "Bank Street",
            "BuildingNumber": "11",
            "BuildingName": "string",
            "Floor": "11",
            "UnitNumber": "A88",
            "Room": "Basement 03",
            "PostBox": "PO Box 123456",
            "TownLocationName": "London",
            "DistrictName": "Greater London",
            "CareOf": "Jane Smith",
            "PostCode": "EC2N 4AG",
            "TownName": "London",
            "CountrySubDivision": "string",
            "Country": "string",
            "AddressLine": [
              "string"
            ]
          }
        ]
      }
    ]
  },
  "Links": {
    "Self": "http://example.com",
    "First": "http://example.com",
    "Prev": "http://example.com",
    "Next": "http://example.com",
    "Last": "http://example.com"
  },
  "Meta": {
    "TotalPages": 0,
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z"
  }
}
```

> 400 Response

```json
{
  "Id": "string",
  "Code": "400 BadRequest",
  "Message": "There is something wrong with the request parameters provided",
  "Errors": [
    {
      "ErrorCode": "U001",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ]
}
```

> 403 Response

```json
{
  "Id": "string",
  "Code": "400 BadRequest",
  "Message": "There is something wrong with the request parameters provided",
  "Errors": [
    {
      "ErrorCode": "U001",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ]
}
```

> 500 Response

```json
{
  "Id": "string",
  "Code": "400 BadRequest",
  "Message": "There is something wrong with the request parameters provided",
  "Errors": [
    {
      "ErrorCode": "U001",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ]
}
```

<h3 id="get-parties-for-an-accountid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Parties Read|[OBReadParty3](#schemaobreadparty3)|
|400|Bad Request|Bad request|[OBErrorResponse1](#schemaoberrorresponse1)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|[OBErrorResponse1](#schemaoberrorresponse1)|
|404|Not Found|Not found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|406|Not Acceptable|Not Acceptable|None|
|429|Too Many Requests|Too Many Requests|None|
|500|Internal Server Error|Internal Server Error|[OBErrorResponse1](#schemaoberrorresponse1)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|200|RateLimit-Policy|string||TPPs __must__ refer to ASPSP developer portals for further information on any rate limit policies, if the headers are supported and any additional requirements.<br><br>A non-empty list of Quota Policy Items. The Item value __MUST__ be a String.<br><br>Example:<br>`RateLimit-Policy: "default";q=100;w=10`<br><br>The **REQUIRED** "q" parameter indicates the quota allocated by this policy measured in quota units.<br><br>The **OPTIONAL** "w" parameter value conveys a time window.<br>|
|200|RateLimit|string||TPPs __must__ refer to ASPSP developer portals for further information on any rate limit policies, if the headers are supported and any additional requirements.<br><br>A server uses the "RateLimit" response header field to communicate the current service limit for a quota policy for a particular partition key.<br><br>Example:<br>`RateLimit: "default";r=50;t=30`<br><br>The **REQUIRED** "r" parameter value conveys the remaining quota units for the identified policy.<br><br>The **OPTIONAL** "t" parameter value conveys the time window reset time for the identified policy.<br>|
|400|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|401|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|404|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|405|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|406|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|429|Retry-After|integer||Number in seconds to wait|
|429|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
PSUOAuth2Security ( Scopes: accounts )
</aside>

## Get Party for an AccountId

<a id="opIdGetAccountsAccountIdParty"></a>

> Code samples

```bash
curl http://localhost:3000/accounts/string/party \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /accounts/{AccountId}/party`

Enables an AISP to retrieve details about the party that gave permission to the AISP to view a specific PSU account.

<h3 id="get-party-for-an-accountid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|AccountId|path|string|true|AccountId|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. <br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: <br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|
|x-client-id|header|string|false|Only used if an ASPSP requires the client ID in order to return rate limit headers. <br><br>TPPs __must__ refer to ASPSP developer portals for further information on any rate limit policies, if the headers are supported and any additional requirements.<br><br>This header __must not__ be used for client authentication<br>|

> Example responses

> 200 Response

```json
{
  "Data": {
    "Party": {
      "PartyId": "PXSIF023",
      "PartyNumber": "20202002",
      "PartyType": "Joint",
      "Name": "Mx Jane Smith",
      "FullLegalName": "Jane Smith",
      "LegalStructure": "UK.OBIE.Individual",
      "LEI": "IZ9Q00LZEVUKWCQY6X15",
      "BeneficialOwnership": true,
      "AccountRole": "string",
      "EmailAddress": "d.user@semiotec.co.jp",
      "Phone": "+44-2079460000",
      "Mobile": "+44-7700900000",
      "Relationships": {
        "Account": {
          "Related": "https://api.alphabank.com/open-banking/v4.0/aisp/accounts/89019",
          "Id": "89019"
        }
      },
      "Address": [
        {
          "AddressType": "BIZZ",
          "Department": "Finance",
          "SubDepartment": "Payroll",
          "StreetName": "Bank Street",
          "BuildingNumber": "11",
          "BuildingName": "string",
          "Floor": "11",
          "UnitNumber": "A88",
          "Room": "Basement 03",
          "PostBox": "PO Box 123456",
          "TownLocationName": "London",
          "DistrictName": "Greater London",
          "CareOf": "Jane Smith",
          "PostCode": "EC2N 4AG",
          "TownName": "London",
          "CountrySubDivision": "string",
          "Country": "string",
          "AddressLine": [
            "string"
          ]
        }
      ]
    }
  },
  "Links": {
    "Self": "http://example.com",
    "First": "http://example.com",
    "Prev": "http://example.com",
    "Next": "http://example.com",
    "Last": "http://example.com"
  },
  "Meta": {
    "TotalPages": 0,
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z"
  }
}
```

> 400 Response

```json
{
  "Id": "string",
  "Code": "400 BadRequest",
  "Message": "There is something wrong with the request parameters provided",
  "Errors": [
    {
      "ErrorCode": "U001",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ]
}
```

> 403 Response

```json
{
  "Id": "string",
  "Code": "400 BadRequest",
  "Message": "There is something wrong with the request parameters provided",
  "Errors": [
    {
      "ErrorCode": "U001",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ]
}
```

> 500 Response

```json
{
  "Id": "string",
  "Code": "400 BadRequest",
  "Message": "There is something wrong with the request parameters provided",
  "Errors": [
    {
      "ErrorCode": "U001",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ]
}
```

<h3 id="get-party-for-an-accountid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Parties Read|[OBReadParty2](#schemaobreadparty2)|
|400|Bad Request|Bad request|[OBErrorResponse1](#schemaoberrorresponse1)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|[OBErrorResponse1](#schemaoberrorresponse1)|
|404|Not Found|Not found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|406|Not Acceptable|Not Acceptable|None|
|429|Too Many Requests|Too Many Requests|None|
|500|Internal Server Error|Internal Server Error|[OBErrorResponse1](#schemaoberrorresponse1)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|200|RateLimit-Policy|string||TPPs __must__ refer to ASPSP developer portals for further information on any rate limit policies, if the headers are supported and any additional requirements.<br><br>A non-empty list of Quota Policy Items. The Item value __MUST__ be a String.<br><br>Example:<br>`RateLimit-Policy: "default";q=100;w=10`<br><br>The **REQUIRED** "q" parameter indicates the quota allocated by this policy measured in quota units.<br><br>The **OPTIONAL** "w" parameter value conveys a time window.<br>|
|200|RateLimit|string||TPPs __must__ refer to ASPSP developer portals for further information on any rate limit policies, if the headers are supported and any additional requirements.<br><br>A server uses the "RateLimit" response header field to communicate the current service limit for a quota policy for a particular partition key.<br><br>Example:<br>`RateLimit: "default";r=50;t=30`<br><br>The **REQUIRED** "r" parameter value conveys the remaining quota units for the identified policy.<br><br>The **OPTIONAL** "t" parameter value conveys the time window reset time for the identified policy.<br>|
|400|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|401|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|404|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|405|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|406|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|429|Retry-After|integer||Number in seconds to wait|
|429|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
PSUOAuth2Security ( Scopes: accounts )
</aside>

## Get Party

<a id="opIdGetParty"></a>

> Code samples

```bash
curl http://localhost:3000/party \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /party`

Retrieve details about the party that gave permission to the AISP to view an account(s).

<h3 id="get-party-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. <br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: <br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|
|x-client-id|header|string|false|Only used if an ASPSP requires the client ID in order to return rate limit headers. <br><br>TPPs __must__ refer to ASPSP developer portals for further information on any rate limit policies, if the headers are supported and any additional requirements.<br><br>This header __must not__ be used for client authentication<br>|

> Example responses

> 200 Response

```json
{
  "Data": {
    "Party": {
      "PartyId": "PXSIF023",
      "PartyNumber": "20202002",
      "PartyType": "Joint",
      "Name": "Mx Jane Smith",
      "FullLegalName": "Jane Smith",
      "LegalStructure": "UK.OBIE.Individual",
      "LEI": "IZ9Q00LZEVUKWCQY6X15",
      "BeneficialOwnership": true,
      "AccountRole": "string",
      "EmailAddress": "d.user@semiotec.co.jp",
      "Phone": "+44-2079460000",
      "Mobile": "+44-7700900000",
      "Relationships": {
        "Account": {
          "Related": "https://api.alphabank.com/open-banking/v4.0/aisp/accounts/89019",
          "Id": "89019"
        }
      },
      "Address": [
        {
          "AddressType": "BIZZ",
          "Department": "Finance",
          "SubDepartment": "Payroll",
          "StreetName": "Bank Street",
          "BuildingNumber": "11",
          "BuildingName": "string",
          "Floor": "11",
          "UnitNumber": "A88",
          "Room": "Basement 03",
          "PostBox": "PO Box 123456",
          "TownLocationName": "London",
          "DistrictName": "Greater London",
          "CareOf": "Jane Smith",
          "PostCode": "EC2N 4AG",
          "TownName": "London",
          "CountrySubDivision": "string",
          "Country": "string",
          "AddressLine": [
            "string"
          ]
        }
      ]
    }
  },
  "Links": {
    "Self": "http://example.com",
    "First": "http://example.com",
    "Prev": "http://example.com",
    "Next": "http://example.com",
    "Last": "http://example.com"
  },
  "Meta": {
    "TotalPages": 0,
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z"
  }
}
```

> 400 Response

```json
{
  "Id": "string",
  "Code": "400 BadRequest",
  "Message": "There is something wrong with the request parameters provided",
  "Errors": [
    {
      "ErrorCode": "U001",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ]
}
```

> 403 Response

```json
{
  "Id": "string",
  "Code": "400 BadRequest",
  "Message": "There is something wrong with the request parameters provided",
  "Errors": [
    {
      "ErrorCode": "U001",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ]
}
```

> 500 Response

```json
{
  "Id": "string",
  "Code": "400 BadRequest",
  "Message": "There is something wrong with the request parameters provided",
  "Errors": [
    {
      "ErrorCode": "U001",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ]
}
```

<h3 id="get-party-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Parties Read|[OBReadParty2](#schemaobreadparty2)|
|400|Bad Request|Bad request|[OBErrorResponse1](#schemaoberrorresponse1)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|[OBErrorResponse1](#schemaoberrorresponse1)|
|404|Not Found|Not found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|406|Not Acceptable|Not Acceptable|None|
|429|Too Many Requests|Too Many Requests|None|
|500|Internal Server Error|Internal Server Error|[OBErrorResponse1](#schemaoberrorresponse1)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|200|RateLimit-Policy|string||TPPs __must__ refer to ASPSP developer portals for further information on any rate limit policies, if the headers are supported and any additional requirements.<br><br>A non-empty list of Quota Policy Items. The Item value __MUST__ be a String.<br><br>Example:<br>`RateLimit-Policy: "default";q=100;w=10`<br><br>The **REQUIRED** "q" parameter indicates the quota allocated by this policy measured in quota units.<br><br>The **OPTIONAL** "w" parameter value conveys a time window.<br>|
|200|RateLimit|string||TPPs __must__ refer to ASPSP developer portals for further information on any rate limit policies, if the headers are supported and any additional requirements.<br><br>A server uses the "RateLimit" response header field to communicate the current service limit for a quota policy for a particular partition key.<br><br>Example:<br>`RateLimit: "default";r=50;t=30`<br><br>The **REQUIRED** "r" parameter value conveys the remaining quota units for the identified policy.<br><br>The **OPTIONAL** "t" parameter value conveys the time window reset time for the identified policy.<br>|
|400|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|401|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|404|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|405|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|406|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|429|Retry-After|integer||Number in seconds to wait|
|429|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
PSUOAuth2Security ( Scopes: accounts )
</aside>

<h1 id="account-and-transaction-api-specification-products">Products</h1>

## Get Product for an AccountId

<a id="opIdGetAccountsAccountIdProduct"></a>

> Code samples

```bash
curl http://localhost:3000/accounts/string/product \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /accounts/{AccountId}/product`

Enables an AISP to retrieve the account product information for a specific PSU account.

<h3 id="get-product-for-an-accountid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|AccountId|path|string|true|AccountId|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. <br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: <br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|
|x-client-id|header|string|false|Only used if an ASPSP requires the client ID in order to return rate limit headers. <br><br>TPPs __must__ refer to ASPSP developer portals for further information on any rate limit policies, if the headers are supported and any additional requirements.<br><br>This header __must not__ be used for client authentication<br>|

> Example responses

> 200 Response

```json
{
  "Data": {
    "Product": [
      {
        "ProductName": "321 Product",
        "ProductId": "51B",
        "AccountId": "22289",
        "SecondaryProductId": "CA78",
        "ProductType": "PersonalCurrentAccount",
        "MarketingStateId": "22878123",
        "OtherProductType": {
          "Name": "e-Wallet",
          "Description": "Virtual wallet",
          "ProductDetails": {
            "Segment": [
              "GEAS"
            ],
            "FeeFreeLength": 0,
            "FeeFreeLengthPeriod": "PACT",
            "MonthlyMaximumCharge": "string",
            "Notes": [
              "string"
            ],
            "OtherSegment": {
              "Code": "string",
              "Name": "string",
              "Description": "string"
            }
          },
          "CreditInterest": {
            "TierBandSet": [
              {
                "TierBandMethod": "INBA",
                "CalculationMethod": "ITCO",
                "Destination": "INOT",
                "Notes": [
                  "string"
                ],
                "OtherCalculationMethod": {
                  "Code": "string",
                  "Name": "string",
                  "Description": "string"
                },
                "OtherDestination": {
                  "Code": "string",
                  "Name": "string",
                  "Description": "string"
                },
                "TierBand": [
                  {
                    "Identification": "string",
                    "TierValueMinimum": "string",
                    "TierValueMaximum": "string",
                    "CalculationFrequency": "FQAT",
                    "ApplicationFrequency": "FQAT",
                    "DepositInterestAppliedCoverage": "INBA",
                    "FixedVariableInterestRateType": "INFI",
                    "AER": "string",
                    "BankInterestRateType": "INBB",
                    "BankInterestRate": "string",
                    "Notes": [
                      "string"
                    ],
                    "OtherBankInterestType": {
                      "Code": "string",
                      "Name": "string",
                      "Description": "string"
                    },
                    "OtherApplicationFrequency": {
                      "Code": "string",
                      "Name": "string",
                      "Description": "string"
                    },
                    "OtherCalculationFrequency": {
                      "Code": "string",
                      "Name": "string",
                      "Description": "string"
                    }
                  }
                ]
              }
            ]
          },
          "Overdraft": {
            "Notes": [
              "string"
            ],
            "OverdraftTierBandSet": [
              {
                "TierBandMethod": "INBA",
                "OverdraftType": "OVCO",
                "Identification": "string",
                "AuthorisedIndicator": true,
                "BufferAmount": "string",
                "Notes": [
                  "string"
                ],
                "OverdraftTierBand": [
                  {
                    "Identification": "string",
                    "TierValueMin": "string",
                    "TierValueMax": "string",
                    "EAR": "string",
                    "AgreementLengthMin": 0,
                    "AgreementLengthMax": 0,
                    "AgreementPeriod": "PACT",
                    "OverdraftInterestChargingCoverage": "INBA",
                    "BankGuaranteedIndicator": true,
                    "Notes": [
                      "string"
                    ],
                    "OverdraftFeesCharges": [
                      {
                        "OverdraftFeeChargeCap": [
                          {
                            "FeeType": [
                              "FBAO"
                            ],
                            "MinMaxType": "FMMN",
                            "FeeCapOccurrence": 0,
                            "FeeCapAmount": "string",
                            "CappingPeriod": "PACT",
                            "Notes": [
                              "string"
                            ],
                            "OtherFeeType": [
                              {
                                "Code": "string",
                                "Name": "string",
                                "Description": "string"
                              }
                            ]
                          }
                        ],
                        "OverdraftFeeChargeDetail": [
                          {
                            "FeeType": "FBAO",
                            "NegotiableIndicator": true,
                            "OverdraftControlIndicator": true,
                            "IncrementalBorrowingAmount": "string",
                            "FeeAmount": "string",
                            "FeeRate": "string",
                            "FeeRateType": "INBB",
                            "ApplicationFrequency": "FEAC",
                            "CalculationFrequency": "FEAC",
                            "Notes": [
                              "string"
                            ],
                            "OverdraftFeeChargeCap": [
                              {
                                "FeeType": [
                                  "FBAO"
                                ],
                                "MinMaxType": "FMMN",
                                "FeeCapOccurrence": 0,
                                "FeeCapAmount": "string",
                                "CappingPeriod": "PACT",
                                "Notes": [
                                  "string"
                                ],
                                "OtherFeeType": [
                                  {
                                    "Code": "string",
                                    "Name": "string",
                                    "Description": "string"
                                  }
                                ]
                              }
                            ],
                            "OtherFeeType": {
                              "Code": "string",
                              "Name": "string",
                              "Description": "string"
                            },
                            "OtherFeeRateType": {
                              "Code": "string",
                              "Name": "string",
                              "Description": "string"
                            },
                            "OtherApplicationFrequency": {
                              "Code": "string",
                              "Name": "string",
                              "Description": "string"
                            },
                            "OtherCalculationFrequency": {
                              "Code": "string",
                              "Name": "string",
                              "Description": "string"
                            }
                          }
                        ]
                      }
                    ]
                  }
                ],
                "OverdraftFeesCharges": [
                  {
                    "OverdraftFeeChargeCap": [
                      {
                        "FeeType": [
                          "FBAO"
                        ],
                        "MinMaxType": "FMMN",
                        "FeeCapOccurrence": 0,
                        "FeeCapAmount": "string",
                        "CappingPeriod": "PACT",
                        "Notes": [
                          "string"
                        ],
                        "OtherFeeType": [
                          {
                            "Code": "string",
                            "Name": "string",
                            "Description": "string"
                          }
                        ]
                      }
                    ],
                    "OverdraftFeeChargeDetail": [
                      {
                        "FeeType": "FBAO",
                        "NegotiableIndicator": true,
                        "OverdraftControlIndicator": true,
                        "IncrementalBorrowingAmount": "string",
                        "FeeAmount": "string",
                        "FeeRate": "string",
                        "FeeRateType": "INBB",
                        "ApplicationFrequency": "FEAC",
                        "CalculationFrequency": "FEAC",
                        "Notes": [
                          "string"
                        ],
                        "OverdraftFeeChargeCap": [
                          {
                            "FeeType": [
                              "FBAO"
                            ],
                            "MinMaxType": "FMMN",
                            "FeeCapOccurrence": 0,
                            "FeeCapAmount": "string",
                            "CappingPeriod": "PACT",
                            "Notes": [
                              "string"
                            ],
                            "OtherFeeType": [
                              {
                                "Code": "string",
                                "Name": "string",
                                "Description": "string"
                              }
                            ]
                          }
                        ],
                        "OtherFeeType": {
                          "Code": "string",
                          "Name": "string",
                          "Description": "string"
                        },
                        "OtherFeeRateType": {
                          "Code": "string",
                          "Name": "string",
                          "Description": "string"
                        },
                        "OtherApplicationFrequency": {
                          "Code": "string",
                          "Name": "string",
                          "Description": "string"
                        },
                        "OtherCalculationFrequency": {
                          "Code": "string",
                          "Name": "string",
                          "Description": "string"
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          },
          "LoanInterest": {
            "Notes": [
              "string"
            ],
            "LoanInterestTierBandSet": [
              {
                "TierBandMethod": "INBA",
                "Identification": "string",
                "CalculationMethod": "ITCO",
                "Notes": [
                  "string"
                ],
                "OtherCalculationMethod": {
                  "Code": "string",
                  "Name": "string",
                  "Description": "string"
                },
                "LoanInterestTierBand": [
                  {
                    "Identification": "string",
                    "TierValueMinimum": "string",
                    "TierValueMaximum": "string",
                    "TierValueMinTerm": 0,
                    "MinTermPeriod": "PACT",
                    "TierValueMaxTerm": 0,
                    "MaxTermPeriod": "PACT",
                    "FixedVariableInterestRateType": "INFI",
                    "RepAPR": "string",
                    "LoanProviderInterestRateType": "INBB",
                    "LoanProviderInterestRate": "string",
                    "Notes": [
                      "string"
                    ],
                    "OtherLoanProviderInterestRateType": {
                      "Code": "string",
                      "Name": "string",
                      "Description": "string"
                    },
                    "LoanInterestFeesCharges": [
                      {
                        "LoanInterestFeeChargeDetail": [
                          {
                            "FeeType": "FEPF",
                            "NegotiableIndicator": true,
                            "FeeAmount": "string",
                            "FeeRate": "string",
                            "FeeRateType": "INBB",
                            "ApplicationFrequency": "FEAC",
                            "CalculationFrequency": "FEAC",
                            "Notes": [
                              "string"
                            ],
                            "OtherFeeType": {
                              "Code": "string",
                              "FeeCategory": "FCOT",
                              "Name": "string",
                              "Description": "string"
                            },
                            "OtherFeeRateType": {
                              "Code": "string",
                              "Name": "string",
                              "Description": "string"
                            },
                            "OtherApplicationFrequency": {
                              "Code": "string",
                              "Name": "string",
                              "Description": "string"
                            },
                            "OtherCalculationFrequency": {
                              "Code": "string",
                              "Name": "string",
                              "Description": "string"
                            }
                          }
                        ],
                        "LoanInterestFeeChargeCap": [
                          {
                            "FeeType": [
                              "FEPF"
                            ],
                            "MinMaxType": "FMMN",
                            "FeeCapOccurrence": 0,
                            "FeeCapAmount": "string",
                            "CappingPeriod": "FEAC",
                            "Notes": [
                              "string"
                            ],
                            "OtherFeeType": [
                              {
                                "Code": "string",
                                "Name": "string",
                                "Description": "string"
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ],
                "LoanInterestFeesCharges": [
                  {
                    "LoanInterestFeeChargeDetail": [
                      {
                        "FeeType": "FEPF",
                        "NegotiableIndicator": true,
                        "FeeAmount": "string",
                        "FeeRate": "string",
                        "FeeRateType": "INBB",
                        "ApplicationFrequency": "FEAC",
                        "CalculationFrequency": "FEAC",
                        "Notes": [
                          "string"
                        ],
                        "OtherFeeType": {
                          "Code": "string",
                          "FeeCategory": "FCOT",
                          "Name": "string",
                          "Description": "string"
                        },
                        "OtherFeeRateType": {
                          "Code": "string",
                          "Name": "string",
                          "Description": "string"
                        },
                        "OtherApplicationFrequency": {
                          "Code": "string",
                          "Name": "string",
                          "Description": "string"
                        },
                        "OtherCalculationFrequency": {
                          "Code": "string",
                          "Name": "string",
                          "Description": "string"
                        }
                      }
                    ],
                    "LoanInterestFeeChargeCap": [
                      {
                        "FeeType": [
                          "FEPF"
                        ],
                        "MinMaxType": "FMMN",
                        "FeeCapOccurrence": 0,
                        "FeeCapAmount": "string",
                        "CappingPeriod": "FEAC",
                        "Notes": [
                          "string"
                        ],
                        "OtherFeeType": [
                          {
                            "Code": "string",
                            "Name": "string",
                            "Description": "string"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          "Repayment": {
            "RepaymentType": "USBA",
            "RepaymentFrequency": "SMDA",
            "AmountType": "RABD",
            "Notes": [
              "string"
            ],
            "OtherRepaymentType": {
              "Code": "string",
              "Name": "string",
              "Description": "string"
            },
            "OtherRepaymentFrequency": {
              "Code": "string",
              "Name": "string",
              "Description": "string"
            },
            "OtherAmountType": {
              "Code": "string",
              "Name": "string",
              "Description": "string"
            },
            "RepaymentFeeCharges": {
              "RepaymentFeeChargeDetail": [
                {
                  "FeeType": "FEPF",
                  "NegotiableIndicator": true,
                  "FeeAmount": "string",
                  "FeeRate": "string",
                  "FeeRateType": "INBB",
                  "ApplicationFrequency": "FEAC",
                  "CalculationFrequency": "FEAC",
                  "Notes": [
                    "string"
                  ],
                  "OtherFeeType": {
                    "Code": "string",
                    "FeeCategory": "FCOT",
                    "Name": "string",
                    "Description": "string"
                  },
                  "OtherFeeRateType": {
                    "Code": "string",
                    "Name": "string",
                    "Description": "string"
                  },
                  "OtherApplicationFrequency": {
                    "Code": "string",
                    "Name": "string",
                    "Description": "string"
                  },
                  "OtherCalculationFrequency": {
                    "Code": "string",
                    "Name": "string",
                    "Description": "string"
                  }
                }
              ],
              "RepaymentFeeChargeCap": [
                {
                  "FeeType": [
                    "FEPF"
                  ],
                  "MinMaxType": "FMMN",
                  "FeeCapOccurrence": 0,
                  "FeeCapAmount": "string",
                  "CappingPeriod": "PACT",
                  "Notes": [
                    "string"
                  ],
                  "OtherFeeType": [
                    {
                      "Code": "string",
                      "Name": "string",
                      "Description": "string"
                    }
                  ]
                }
              ]
            },
            "RepaymentHoliday": [
              {
                "MaxHolidayLength": 0,
                "MaxHolidayPeriod": "PACT",
                "Notes": [
                  "string"
                ]
              }
            ]
          },
          "OtherFeesCharges": [
            {
              "TariffType": "TTEL",
              "TariffName": "string",
              "OtherTariffType": {
                "Code": "string",
                "Name": "string",
                "Description": "string"
              },
              "FeeChargeDetail": [
                {
                  "FeeCategory": "FCOT",
                  "FeeType": "FEPF",
                  "NegotiableIndicator": true,
                  "FeeAmount": "string",
                  "FeeRate": "string",
                  "FeeRateType": "INBB",
                  "ApplicationFrequency": "FEAC",
                  "CalculationFrequency": "FEAC",
                  "Notes": [
                    "string"
                  ],
                  "FeeChargeCap": [
                    {
                      "FeeType": [
                        "FEPF"
                      ],
                      "MinMaxType": "FMMN",
                      "FeeCapOccurrence": 0,
                      "FeeCapAmount": "string",
                      "CappingPeriod": "PACT",
                      "Notes": [
                        "string"
                      ],
                      "OtherFeeType": [
                        {
                          "Code": "string",
                          "Name": "string",
                          "Description": "string"
                        }
                      ]
                    }
                  ],
                  "OtherFeeCategoryType": {
                    "Code": "string",
                    "Name": "string",
                    "Description": "string"
                  },
                  "OtherFeeType": {
                    "Code": "string",
                    "FeeCategory": "FCOT",
                    "Name": "string",
                    "Description": "string"
                  },
                  "OtherFeeRateType": {
                    "Code": "string",
                    "Name": "string",
                    "Description": "string"
                  },
                  "OtherApplicationFrequency": {
                    "Code": "string",
                    "Name": "string",
                    "Description": "string"
                  },
                  "OtherCalculationFrequency": {
                    "Code": "string",
                    "Name": "string",
                    "Description": "string"
                  },
                  "FeeApplicableRange": {
                    "MinimumAmount": "string",
                    "MaximumAmount": "string",
                    "MinimumRate": "string",
                    "MaximumRate": "string"
                  }
                }
              ],
              "FeeChargeCap": [
                {
                  "FeeType": [
                    "FEPF"
                  ],
                  "MinMaxType": "FMMN",
                  "FeeCapOccurrence": 0,
                  "FeeCapAmount": "string",
                  "CappingPeriod": "PACT",
                  "Notes": [
                    "string"
                  ],
                  "OtherFeeType": [
                    {
                      "Code": "string",
                      "Name": "string",
                      "Description": "string"
                    }
                  ]
                }
              ]
            }
          ],
          "SupplementaryData": {}
        },
        "BCA": {
          "ProductDetails": {
            "Segment": [
              "ClientAccount"
            ],
            "FeeFreeLength": 0,
            "FeeFreeLengthPeriod": "Day",
            "Notes": [
              "string"
            ]
          },
          "CreditInterest": {
            "TierBandSet": [
              {
                "TierBandMethod": "Banded",
                "CalculationMethod": "Compound",
                "Destination": "PayAway",
                "Notes": [
                  "string"
                ],
                "TierBand": [
                  {
                    "Identification": "string",
                    "TierValueMinimum": "string",
                    "TierValueMaximum": "string",
                    "CalculationFrequency": "Daily",
                    "ApplicationFrequency": "Daily",
                    "DepositInterestAppliedCoverage": "Banded",
                    "FixedVariableInterestRateType": "Fixed",
                    "AER": "string",
                    "BankInterestRateType": "Gross",
                    "BankInterestRate": "string",
                    "Notes": [
                      "string"
                    ],
                    "OtherBankInterestType": {
                      "Code": "stri",
                      "Name": "string",
                      "Description": "string"
                    },
                    "OtherApplicationFrequency": {
                      "Code": "stri",
                      "Name": "string",
                      "Description": "string"
                    },
                    "OtherCalculationFrequency": {
                      "Code": "stri",
                      "Name": "string",
                      "Description": "string"
                    }
                  }
                ]
              }
            ]
          },
          "Overdraft": {
            "Notes": [
              "string"
            ],
            "OverdraftTierBandSet": [
              {
                "TierBandMethod": "Banded",
                "OverdraftType": "Committed",
                "Identification": "string",
                "AuthorisedIndicator": true,
                "BufferAmount": "string",
                "Notes": [
                  "string"
                ],
                "OverdraftTierBand": [
                  {
                    "Identification": "string",
                    "TierValueMin": "string",
                    "TierValueMax": "string",
                    "EAR": "string",
                    "RepresentativeAPR": "string",
                    "AgreementLengthMin": 0,
                    "AgreementLengthMax": 0,
                    "AgreementPeriod": "Day",
                    "OverdraftInterestChargingCoverage": "Banded",
                    "BankGuaranteedIndicator": true,
                    "Notes": [
                      "string"
                    ],
                    "OverdraftFeesCharges": [
                      {
                        "OverdraftFeeChargeCap": [
                          {
                            "FeeType": [
                              "ArrangedOverdraft"
                            ],
                            "MinMaxType": "Minimum",
                            "FeeCapOccurrence": 0,
                            "FeeCapAmount": "string",
                            "CappingPeriod": "Day",
                            "Notes": [
                              "string"
                            ],
                            "OtherFeeType": [
                              {
                                "Code": "stri",
                                "Name": "string",
                                "Description": "string"
                              }
                            ]
                          }
                        ],
                        "OverdraftFeeChargeDetail": [
                          {
                            "FeeType": "ArrangedOverdraft",
                            "NegotiableIndicator": true,
                            "OverdraftControlIndicator": true,
                            "IncrementalBorrowingAmount": "string",
                            "FeeAmount": "string",
                            "FeeRate": "string",
                            "FeeRateType": "Gross",
                            "ApplicationFrequency": "OnClosing",
                            "CalculationFrequency": "OnClosing",
                            "Notes": [
                              "string"
                            ],
                            "OverdraftFeeChargeCap": [
                              {
                                "FeeType": [
                                  "ArrangedOverdraft"
                                ],
                                "MinMaxType": "Minimum",
                                "FeeCapOccurrence": 0,
                                "FeeCapAmount": "string",
                                "CappingPeriod": "Day",
                                "Notes": [
                                  "string"
                                ],
                                "OtherFeeType": [
                                  {
                                    "Code": "stri",
                                    "Name": "string",
                                    "Description": "string"
                                  }
                                ]
                              }
                            ],
                            "OtherFeeType": {
                              "Code": "stri",
                              "Name": "string",
                              "Description": "string"
                            },
                            "OtherFeeRateType": {
                              "Code": "stri",
                              "Name": "string",
                              "Description": "string"
                            },
                            "OtherApplicationFrequency": {
                              "Code": "stri",
                              "Name": "string",
                              "Description": "string"
                            },
                            "OtherCalculationFrequency": {
                              "Code": "stri",
                              "Name": "string",
                              "Description": "string"
                            }
                          }
                        ]
                      }
                    ]
                  }
                ],
                "OverdraftFeesCharges": [
                  {
                    "OverdraftFeeChargeCap": [
                      {
                        "FeeType": [
                          "ArrangedOverdraft"
                        ],
                        "MinMaxType": "Minimum",
                        "FeeCapOccurrence": 0,
                        "FeeCapAmount": "string",
                        "CappingPeriod": "Day",
                        "Notes": [
                          "string"
                        ],
                        "OtherFeeType": [
                          {
                            "Code": "stri",
                            "Name": "string",
                            "Description": "string"
                          }
                        ]
                      }
                    ],
                    "OverdraftFeeChargeDetail": [
                      {
                        "FeeType": "ArrangedOverdraft",
                        "NegotiableIndicator": true,
                        "OverdraftControlIndicator": true,
                        "IncrementalBorrowingAmount": "string",
                        "FeeAmount": "string",
                        "FeeRate": "string",
                        "FeeRateType": "Gross",
                        "ApplicationFrequency": "OnClosing",
                        "CalculationFrequency": "OnClosing",
                        "Notes": [
                          "string"
                        ],
                        "OverdraftFeeChargeCap": [
                          {
                            "FeeType": [
                              "ArrangedOverdraft"
                            ],
                            "MinMaxType": "Minimum",
                            "FeeCapOccurrence": 0,
                            "FeeCapAmount": "string",
                            "CappingPeriod": "Day",
                            "Notes": [
                              "string"
                            ],
                            "OtherFeeType": [
                              {
                                "Code": "stri",
                                "Name": "string",
                                "Description": "string"
                              }
                            ]
                          }
                        ],
                        "OtherFeeType": {
                          "Code": "stri",
                          "Name": "string",
                          "Description": "string"
                        },
                        "OtherFeeRateType": {
                          "Code": "stri",
                          "Name": "string",
                          "Description": "string"
                        },
                        "OtherApplicationFrequency": {
                          "Code": "stri",
                          "Name": "string",
                          "Description": "string"
                        },
                        "OtherCalculationFrequency": {
                          "Code": "stri",
                          "Name": "string",
                          "Description": "string"
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          },
          "OtherFeesCharges": [
            {
              "TariffType": "Electronic",
              "TariffName": "string",
              "OtherTariffType": {
                "Code": "stri",
                "Name": "string",
                "Description": "string"
              },
              "FeeChargeDetail": [
                {
                  "FeeCategory": "Other",
                  "FeeType": "Other",
                  "NegotiableIndicator": true,
                  "FeeAmount": "string",
                  "FeeRate": "string",
                  "FeeRateType": "Gross",
                  "ApplicationFrequency": "OnClosing",
                  "CalculationFrequency": "OnClosing",
                  "Notes": [
                    "string"
                  ],
                  "FeeChargeCap": [
                    {
                      "FeeType": [
                        "Other"
                      ],
                      "MinMaxType": "Minimum",
                      "FeeCapOccurrence": 0,
                      "FeeCapAmount": "string",
                      "CappingPeriod": "Day",
                      "Notes": [
                        "string"
                      ],
                      "OtherFeeType": [
                        {
                          "Code": "stri",
                          "Name": "string",
                          "Description": "string"
                        }
                      ]
                    }
                  ],
                  "OtherFeeCategoryType": {
                    "Code": "stri",
                    "Name": "string",
                    "Description": "string"
                  },
                  "OtherFeeType": {
                    "Code": "stri",
                    "FeeCategory": "Other",
                    "Name": "string",
                    "Description": "string"
                  },
                  "OtherFeeRateType": {
                    "Code": "stri",
                    "Name": "string",
                    "Description": "string"
                  },
                  "OtherApplicationFrequency": {
                    "Code": "stri",
                    "Name": "string",
                    "Description": "string"
                  },
                  "OtherCalculationFrequency": {
                    "Code": "stri",
                    "Name": "string",
                    "Description": "string"
                  },
                  "FeeApplicableRange": {
                    "MinimumAmount": "string",
                    "MaximumAmount": "string",
                    "MinimumRate": "string",
                    "MaximumRate": "string"
                  }
                }
              ],
              "FeeChargeCap": [
                {
                  "FeeType": [
                    "Other"
                  ],
                  "MinMaxType": "Minimum",
                  "FeeCapOccurrence": 0,
                  "FeeCapAmount": "string",
                  "CappingPeriod": "Day",
                  "Notes": [
                    "string"
                  ],
                  "OtherFeeType": [
                    {
                      "Code": "stri",
                      "Name": "string",
                      "Description": "string"
                    }
                  ]
                }
              ]
            }
          ]
        },
        "PCA": {
          "ProductDetails": {
            "Segment": [
              "Basic"
            ],
            "MonthlyMaximumCharge": "string",
            "Notes": [
              "string"
            ]
          },
          "CreditInterest": {
            "TierBandSet": [
              {
                "TierBandMethod": "Tiered",
                "CalculationMethod": "Compound",
                "Destination": "PayAway",
                "Notes": [
                  "string"
                ],
                "TierBand": [
                  {
                    "Identification": "string",
                    "TierValueMinimum": "string",
                    "TierValueMaximum": "string",
                    "CalculationFrequency": "PerAcademicTerm",
                    "ApplicationFrequency": "PerAcademicTerm",
                    "DepositInterestAppliedCoverage": "Tiered",
                    "FixedVariableInterestRateType": "Fixed",
                    "AER": "string",
                    "BankInterestRateType": "LinkedBaseRate",
                    "BankInterestRate": "string",
                    "Notes": [
                      "string"
                    ],
                    "OtherBankInterestType": {
                      "Code": "stri",
                      "Name": "string",
                      "Description": "string"
                    },
                    "OtherApplicationFrequency": {
                      "Code": "stri",
                      "Name": "string",
                      "Description": "string"
                    },
                    "OtherCalculationFrequency": {
                      "Code": "stri",
                      "Name": "string",
                      "Description": "string"
                    }
                  }
                ]
              }
            ]
          },
          "Overdraft": {
            "Notes": [
              "string"
            ],
            "OverdraftTierBandSet": [
              {
                "TierBandMethod": "Tiered",
                "OverdraftType": "Committed",
                "Identification": "string",
                "AuthorisedIndicator": true,
                "BufferAmount": "string",
                "Notes": [
                  "string"
                ],
                "OverdraftTierBand": [
                  {
                    "Identification": "string",
                    "TierValueMin": "string",
                    "TierValueMax": "string",
                    "OverdraftInterestChargingCoverage": "Tiered",
                    "BankGuaranteedIndicator": true,
                    "EAR": "string",
                    "RepresentativeAPR": "string",
                    "Notes": [
                      "string"
                    ],
                    "OverdraftFeesCharges": [
                      {
                        "OverdraftFeeChargeCap": [
                          {
                            "FeeType": [
                              "ArrangedOverdraft"
                            ],
                            "OverdraftControlIndicator": true,
                            "MinMaxType": "Minimum",
                            "FeeCapOccurrence": 0,
                            "FeeCapAmount": "string",
                            "CappingPeriod": "AcademicTerm",
                            "Notes": [
                              "string"
                            ],
                            "OtherFeeType": [
                              {
                                "Code": "stri",
                                "Name": "string",
                                "Description": "string"
                              }
                            ]
                          }
                        ],
                        "OverdraftFeeChargeDetail": [
                          {
                            "FeeType": "ArrangedOverdraft",
                            "OverdraftControlIndicator": true,
                            "IncrementalBorrowingAmount": "string",
                            "FeeAmount": "string",
                            "FeeRate": "string",
                            "FeeRateType": "LinkedBaseRate",
                            "ApplicationFrequency": "AccountClosing",
                            "CalculationFrequency": "AccountClosing",
                            "Notes": [
                              "string"
                            ],
                            "OtherFeeType": {
                              "Code": "stri",
                              "Name": "string",
                              "Description": "string"
                            },
                            "OtherFeeRateType": {
                              "Code": "stri",
                              "Name": "string",
                              "Description": "string"
                            },
                            "OtherApplicationFrequency": {
                              "Code": "stri",
                              "Name": "string",
                              "Description": "string"
                            },
                            "OtherCalculationFrequency": {
                              "Code": "stri",
                              "Name": "string",
                              "Description": "string"
                            },
                            "OverdraftFeeChargeCap": {
                              "FeeType": [
                                "ArrangedOverdraft"
                              ],
                              "OverdraftControlIndicator": true,
                              "MinMaxType": "Minimum",
                              "FeeCapOccurrence": 0,
                              "FeeCapAmount": "string",
                              "CappingPeriod": "AcademicTerm",
                              "Notes": [
                                "string"
                              ],
                              "OtherFeeType": [
                                {
                                  "Code": "stri",
                                  "Name": "string",
                                  "Description": "string"
                                }
                              ]
                            }
                          }
                        ]
                      }
                    ]
                  }
                ],
                "OverdraftFeesCharges": [
                  {
                    "OverdraftFeeChargeCap": [
                      {
                        "FeeType": [
                          "ArrangedOverdraft"
                        ],
                        "OverdraftControlIndicator": true,
                        "MinMaxType": "Minimum",
                        "FeeCapOccurrence": 0,
                        "FeeCapAmount": "string",
                        "CappingPeriod": "AcademicTerm",
                        "Notes": [
                          "string"
                        ],
                        "OtherFeeType": [
                          {
                            "Code": "stri",
                            "Name": "string",
                            "Description": "string"
                          }
                        ]
                      }
                    ],
                    "OverdraftFeeChargeDetail": [
                      {
                        "FeeType": "ArrangedOverdraft",
                        "OverdraftControlIndicator": true,
                        "IncrementalBorrowingAmount": "string",
                        "FeeAmount": "string",
                        "FeeRate": "string",
                        "FeeRateType": "LinkedBaseRate",
                        "ApplicationFrequency": "AccountClosing",
                        "CalculationFrequency": "AccountClosing",
                        "Notes": [
                          "string"
                        ],
                        "OtherFeeType": {
                          "Code": "stri",
                          "Name": "string",
                          "Description": "string"
                        },
                        "OtherFeeRateType": {
                          "Code": "stri",
                          "Name": "string",
                          "Description": "string"
                        },
                        "OtherApplicationFrequency": {
                          "Code": "stri",
                          "Name": "string",
                          "Description": "string"
                        },
                        "OtherCalculationFrequency": {
                          "Code": "stri",
                          "Name": "string",
                          "Description": "string"
                        },
                        "OverdraftFeeChargeCap": {
                          "FeeType": [
                            "ArrangedOverdraft"
                          ],
                          "OverdraftControlIndicator": true,
                          "MinMaxType": "Minimum",
                          "FeeCapOccurrence": 0,
                          "FeeCapAmount": "string",
                          "CappingPeriod": "AcademicTerm",
                          "Notes": [
                            "string"
                          ],
                          "OtherFeeType": [
                            {
                              "Code": "stri",
                              "Name": "string",
                              "Description": "string"
                            }
                          ]
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          },
          "OtherFeesCharges": {
            "FeeChargeDetail": [
              {
                "FeeCategory": "Other",
                "FeeType": "ServiceCAccountFee",
                "FeeAmount": "string",
                "FeeRate": "string",
                "FeeRateType": "LinkedBaseRate",
                "ApplicationFrequency": "AccountClosing",
                "CalculationFrequency": "AccountClosing",
                "Notes": [
                  "string"
                ],
                "OtherFeeCategoryType": {
                  "Code": "stri",
                  "Name": "string",
                  "Description": "string"
                },
                "OtherFeeType": {
                  "Code": "stri",
                  "FeeCategory": "Other",
                  "Name": "string",
                  "Description": "string"
                },
                "OtherFeeRateType": {
                  "Code": "stri",
                  "Name": "string",
                  "Description": "string"
                },
                "OtherApplicationFrequency": {
                  "Code": "stri",
                  "Name": "string",
                  "Description": "string"
                },
                "OtherCalculationFrequency": {
                  "Code": "stri",
                  "Name": "string",
                  "Description": "string"
                },
                "FeeChargeCap": [
                  {
                    "FeeType": [
                      "ServiceCAccountFee"
                    ],
                    "MinMaxType": "Minimum",
                    "FeeCapOccurrence": 0,
                    "FeeCapAmount": "string",
                    "CappingPeriod": "AcademicTerm",
                    "Notes": [
                      "string"
                    ],
                    "OtherFeeType": [
                      {
                        "Code": "stri",
                        "Name": "string",
                        "Description": "string"
                      }
                    ]
                  }
                ],
                "FeeApplicableRange": {
                  "MinimumAmount": "string",
                  "MaximumAmount": "string",
                  "MinimumRate": "string",
                  "MaximumRate": "string"
                }
              }
            ],
            "FeeChargeCap": [
              {
                "FeeType": [
                  "ServiceCAccountFee"
                ],
                "MinMaxType": "Minimum",
                "FeeCapOccurrence": 0,
                "FeeCapAmount": "string",
                "CappingPeriod": "AcademicTerm",
                "Notes": [
                  "string"
                ],
                "OtherFeeType": [
                  {
                    "Code": "stri",
                    "Name": "string",
                    "Description": "string"
                  }
                ]
              }
            ]
          }
        }
      }
    ]
  },
  "Links": {
    "Self": "http://example.com",
    "First": "http://example.com",
    "Prev": "http://example.com",
    "Next": "http://example.com",
    "Last": "http://example.com"
  },
  "Meta": {
    "TotalPages": 0,
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z"
  }
}
```

> 400 Response

```json
{
  "Id": "string",
  "Code": "400 BadRequest",
  "Message": "There is something wrong with the request parameters provided",
  "Errors": [
    {
      "ErrorCode": "U001",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ]
}
```

> 403 Response

```json
{
  "Id": "string",
  "Code": "400 BadRequest",
  "Message": "There is something wrong with the request parameters provided",
  "Errors": [
    {
      "ErrorCode": "U001",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ]
}
```

> 500 Response

```json
{
  "Id": "string",
  "Code": "400 BadRequest",
  "Message": "There is something wrong with the request parameters provided",
  "Errors": [
    {
      "ErrorCode": "U001",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ]
}
```

<h3 id="get-product-for-an-accountid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Products Read|[OBReadProduct2](#schemaobreadproduct2)|
|400|Bad Request|Bad request|[OBErrorResponse1](#schemaoberrorresponse1)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|[OBErrorResponse1](#schemaoberrorresponse1)|
|404|Not Found|Not found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|406|Not Acceptable|Not Acceptable|None|
|429|Too Many Requests|Too Many Requests|None|
|500|Internal Server Error|Internal Server Error|[OBErrorResponse1](#schemaoberrorresponse1)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|200|RateLimit-Policy|string||TPPs __must__ refer to ASPSP developer portals for further information on any rate limit policies, if the headers are supported and any additional requirements.<br><br>A non-empty list of Quota Policy Items. The Item value __MUST__ be a String.<br><br>Example:<br>`RateLimit-Policy: "default";q=100;w=10`<br><br>The **REQUIRED** "q" parameter indicates the quota allocated by this policy measured in quota units.<br><br>The **OPTIONAL** "w" parameter value conveys a time window.<br>|
|200|RateLimit|string||TPPs __must__ refer to ASPSP developer portals for further information on any rate limit policies, if the headers are supported and any additional requirements.<br><br>A server uses the "RateLimit" response header field to communicate the current service limit for a quota policy for a particular partition key.<br><br>Example:<br>`RateLimit: "default";r=50;t=30`<br><br>The **REQUIRED** "r" parameter value conveys the remaining quota units for the identified policy.<br><br>The **OPTIONAL** "t" parameter value conveys the time window reset time for the identified policy.<br>|
|400|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|401|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|404|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|405|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|406|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|429|Retry-After|integer||Number in seconds to wait|
|429|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
PSUOAuth2Security ( Scopes: accounts )
</aside>

## Get Products

<a id="opIdGetProducts"></a>

> Code samples

```bash
curl http://localhost:3000/products \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /products`

Enables an AISP to retrieve the account product information for account(s) that the PSU has consented to.

<h3 id="get-products-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. <br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: <br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|
|x-client-id|header|string|false|Only used if an ASPSP requires the client ID in order to return rate limit headers. <br><br>TPPs __must__ refer to ASPSP developer portals for further information on any rate limit policies, if the headers are supported and any additional requirements.<br><br>This header __must not__ be used for client authentication<br>|

> Example responses

> 200 Response

```json
{
  "Data": {
    "Product": [
      {
        "ProductName": "321 Product",
        "ProductId": "51B",
        "AccountId": "22289",
        "SecondaryProductId": "CA78",
        "ProductType": "PersonalCurrentAccount",
        "MarketingStateId": "22878123",
        "OtherProductType": {
          "Name": "e-Wallet",
          "Description": "Virtual wallet",
          "ProductDetails": {
            "Segment": [
              "GEAS"
            ],
            "FeeFreeLength": 0,
            "FeeFreeLengthPeriod": "PACT",
            "MonthlyMaximumCharge": "string",
            "Notes": [
              "string"
            ],
            "OtherSegment": {
              "Code": "string",
              "Name": "string",
              "Description": "string"
            }
          },
          "CreditInterest": {
            "TierBandSet": [
              {
                "TierBandMethod": "INBA",
                "CalculationMethod": "ITCO",
                "Destination": "INOT",
                "Notes": [
                  "string"
                ],
                "OtherCalculationMethod": {
                  "Code": "string",
                  "Name": "string",
                  "Description": "string"
                },
                "OtherDestination": {
                  "Code": "string",
                  "Name": "string",
                  "Description": "string"
                },
                "TierBand": [
                  {
                    "Identification": "string",
                    "TierValueMinimum": "string",
                    "TierValueMaximum": "string",
                    "CalculationFrequency": "FQAT",
                    "ApplicationFrequency": "FQAT",
                    "DepositInterestAppliedCoverage": "INBA",
                    "FixedVariableInterestRateType": "INFI",
                    "AER": "string",
                    "BankInterestRateType": "INBB",
                    "BankInterestRate": "string",
                    "Notes": [
                      "string"
                    ],
                    "OtherBankInterestType": {
                      "Code": "string",
                      "Name": "string",
                      "Description": "string"
                    },
                    "OtherApplicationFrequency": {
                      "Code": "string",
                      "Name": "string",
                      "Description": "string"
                    },
                    "OtherCalculationFrequency": {
                      "Code": "string",
                      "Name": "string",
                      "Description": "string"
                    }
                  }
                ]
              }
            ]
          },
          "Overdraft": {
            "Notes": [
              "string"
            ],
            "OverdraftTierBandSet": [
              {
                "TierBandMethod": "INBA",
                "OverdraftType": "OVCO",
                "Identification": "string",
                "AuthorisedIndicator": true,
                "BufferAmount": "string",
                "Notes": [
                  "string"
                ],
                "OverdraftTierBand": [
                  {
                    "Identification": "string",
                    "TierValueMin": "string",
                    "TierValueMax": "string",
                    "EAR": "string",
                    "AgreementLengthMin": 0,
                    "AgreementLengthMax": 0,
                    "AgreementPeriod": "PACT",
                    "OverdraftInterestChargingCoverage": "INBA",
                    "BankGuaranteedIndicator": true,
                    "Notes": [
                      "string"
                    ],
                    "OverdraftFeesCharges": [
                      {
                        "OverdraftFeeChargeCap": [
                          {
                            "FeeType": [
                              "FBAO"
                            ],
                            "MinMaxType": "FMMN",
                            "FeeCapOccurrence": 0,
                            "FeeCapAmount": "string",
                            "CappingPeriod": "PACT",
                            "Notes": [
                              "string"
                            ],
                            "OtherFeeType": [
                              {
                                "Code": "string",
                                "Name": "string",
                                "Description": "string"
                              }
                            ]
                          }
                        ],
                        "OverdraftFeeChargeDetail": [
                          {
                            "FeeType": "FBAO",
                            "NegotiableIndicator": true,
                            "OverdraftControlIndicator": true,
                            "IncrementalBorrowingAmount": "string",
                            "FeeAmount": "string",
                            "FeeRate": "string",
                            "FeeRateType": "INBB",
                            "ApplicationFrequency": "FEAC",
                            "CalculationFrequency": "FEAC",
                            "Notes": [
                              "string"
                            ],
                            "OverdraftFeeChargeCap": [
                              {
                                "FeeType": [
                                  "FBAO"
                                ],
                                "MinMaxType": "FMMN",
                                "FeeCapOccurrence": 0,
                                "FeeCapAmount": "string",
                                "CappingPeriod": "PACT",
                                "Notes": [
                                  "string"
                                ],
                                "OtherFeeType": [
                                  {
                                    "Code": "string",
                                    "Name": "string",
                                    "Description": "string"
                                  }
                                ]
                              }
                            ],
                            "OtherFeeType": {
                              "Code": "string",
                              "Name": "string",
                              "Description": "string"
                            },
                            "OtherFeeRateType": {
                              "Code": "string",
                              "Name": "string",
                              "Description": "string"
                            },
                            "OtherApplicationFrequency": {
                              "Code": "string",
                              "Name": "string",
                              "Description": "string"
                            },
                            "OtherCalculationFrequency": {
                              "Code": "string",
                              "Name": "string",
                              "Description": "string"
                            }
                          }
                        ]
                      }
                    ]
                  }
                ],
                "OverdraftFeesCharges": [
                  {
                    "OverdraftFeeChargeCap": [
                      {
                        "FeeType": [
                          "FBAO"
                        ],
                        "MinMaxType": "FMMN",
                        "FeeCapOccurrence": 0,
                        "FeeCapAmount": "string",
                        "CappingPeriod": "PACT",
                        "Notes": [
                          "string"
                        ],
                        "OtherFeeType": [
                          {
                            "Code": "string",
                            "Name": "string",
                            "Description": "string"
                          }
                        ]
                      }
                    ],
                    "OverdraftFeeChargeDetail": [
                      {
                        "FeeType": "FBAO",
                        "NegotiableIndicator": true,
                        "OverdraftControlIndicator": true,
                        "IncrementalBorrowingAmount": "string",
                        "FeeAmount": "string",
                        "FeeRate": "string",
                        "FeeRateType": "INBB",
                        "ApplicationFrequency": "FEAC",
                        "CalculationFrequency": "FEAC",
                        "Notes": [
                          "string"
                        ],
                        "OverdraftFeeChargeCap": [
                          {
                            "FeeType": [
                              "FBAO"
                            ],
                            "MinMaxType": "FMMN",
                            "FeeCapOccurrence": 0,
                            "FeeCapAmount": "string",
                            "CappingPeriod": "PACT",
                            "Notes": [
                              "string"
                            ],
                            "OtherFeeType": [
                              {
                                "Code": "string",
                                "Name": "string",
                                "Description": "string"
                              }
                            ]
                          }
                        ],
                        "OtherFeeType": {
                          "Code": "string",
                          "Name": "string",
                          "Description": "string"
                        },
                        "OtherFeeRateType": {
                          "Code": "string",
                          "Name": "string",
                          "Description": "string"
                        },
                        "OtherApplicationFrequency": {
                          "Code": "string",
                          "Name": "string",
                          "Description": "string"
                        },
                        "OtherCalculationFrequency": {
                          "Code": "string",
                          "Name": "string",
                          "Description": "string"
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          },
          "LoanInterest": {
            "Notes": [
              "string"
            ],
            "LoanInterestTierBandSet": [
              {
                "TierBandMethod": "INBA",
                "Identification": "string",
                "CalculationMethod": "ITCO",
                "Notes": [
                  "string"
                ],
                "OtherCalculationMethod": {
                  "Code": "string",
                  "Name": "string",
                  "Description": "string"
                },
                "LoanInterestTierBand": [
                  {
                    "Identification": "string",
                    "TierValueMinimum": "string",
                    "TierValueMaximum": "string",
                    "TierValueMinTerm": 0,
                    "MinTermPeriod": "PACT",
                    "TierValueMaxTerm": 0,
                    "MaxTermPeriod": "PACT",
                    "FixedVariableInterestRateType": "INFI",
                    "RepAPR": "string",
                    "LoanProviderInterestRateType": "INBB",
                    "LoanProviderInterestRate": "string",
                    "Notes": [
                      "string"
                    ],
                    "OtherLoanProviderInterestRateType": {
                      "Code": "string",
                      "Name": "string",
                      "Description": "string"
                    },
                    "LoanInterestFeesCharges": [
                      {
                        "LoanInterestFeeChargeDetail": [
                          {
                            "FeeType": "FEPF",
                            "NegotiableIndicator": true,
                            "FeeAmount": "string",
                            "FeeRate": "string",
                            "FeeRateType": "INBB",
                            "ApplicationFrequency": "FEAC",
                            "CalculationFrequency": "FEAC",
                            "Notes": [
                              "string"
                            ],
                            "OtherFeeType": {
                              "Code": "string",
                              "FeeCategory": "FCOT",
                              "Name": "string",
                              "Description": "string"
                            },
                            "OtherFeeRateType": {
                              "Code": "string",
                              "Name": "string",
                              "Description": "string"
                            },
                            "OtherApplicationFrequency": {
                              "Code": "string",
                              "Name": "string",
                              "Description": "string"
                            },
                            "OtherCalculationFrequency": {
                              "Code": "string",
                              "Name": "string",
                              "Description": "string"
                            }
                          }
                        ],
                        "LoanInterestFeeChargeCap": [
                          {
                            "FeeType": [
                              "FEPF"
                            ],
                            "MinMaxType": "FMMN",
                            "FeeCapOccurrence": 0,
                            "FeeCapAmount": "string",
                            "CappingPeriod": "FEAC",
                            "Notes": [
                              "string"
                            ],
                            "OtherFeeType": [
                              {
                                "Code": "string",
                                "Name": "string",
                                "Description": "string"
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ],
                "LoanInterestFeesCharges": [
                  {
                    "LoanInterestFeeChargeDetail": [
                      {
                        "FeeType": "FEPF",
                        "NegotiableIndicator": true,
                        "FeeAmount": "string",
                        "FeeRate": "string",
                        "FeeRateType": "INBB",
                        "ApplicationFrequency": "FEAC",
                        "CalculationFrequency": "FEAC",
                        "Notes": [
                          "string"
                        ],
                        "OtherFeeType": {
                          "Code": "string",
                          "FeeCategory": "FCOT",
                          "Name": "string",
                          "Description": "string"
                        },
                        "OtherFeeRateType": {
                          "Code": "string",
                          "Name": "string",
                          "Description": "string"
                        },
                        "OtherApplicationFrequency": {
                          "Code": "string",
                          "Name": "string",
                          "Description": "string"
                        },
                        "OtherCalculationFrequency": {
                          "Code": "string",
                          "Name": "string",
                          "Description": "string"
                        }
                      }
                    ],
                    "LoanInterestFeeChargeCap": [
                      {
                        "FeeType": [
                          "FEPF"
                        ],
                        "MinMaxType": "FMMN",
                        "FeeCapOccurrence": 0,
                        "FeeCapAmount": "string",
                        "CappingPeriod": "FEAC",
                        "Notes": [
                          "string"
                        ],
                        "OtherFeeType": [
                          {
                            "Code": "string",
                            "Name": "string",
                            "Description": "string"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          "Repayment": {
            "RepaymentType": "USBA",
            "RepaymentFrequency": "SMDA",
            "AmountType": "RABD",
            "Notes": [
              "string"
            ],
            "OtherRepaymentType": {
              "Code": "string",
              "Name": "string",
              "Description": "string"
            },
            "OtherRepaymentFrequency": {
              "Code": "string",
              "Name": "string",
              "Description": "string"
            },
            "OtherAmountType": {
              "Code": "string",
              "Name": "string",
              "Description": "string"
            },
            "RepaymentFeeCharges": {
              "RepaymentFeeChargeDetail": [
                {
                  "FeeType": "FEPF",
                  "NegotiableIndicator": true,
                  "FeeAmount": "string",
                  "FeeRate": "string",
                  "FeeRateType": "INBB",
                  "ApplicationFrequency": "FEAC",
                  "CalculationFrequency": "FEAC",
                  "Notes": [
                    "string"
                  ],
                  "OtherFeeType": {
                    "Code": "string",
                    "FeeCategory": "FCOT",
                    "Name": "string",
                    "Description": "string"
                  },
                  "OtherFeeRateType": {
                    "Code": "string",
                    "Name": "string",
                    "Description": "string"
                  },
                  "OtherApplicationFrequency": {
                    "Code": "string",
                    "Name": "string",
                    "Description": "string"
                  },
                  "OtherCalculationFrequency": {
                    "Code": "string",
                    "Name": "string",
                    "Description": "string"
                  }
                }
              ],
              "RepaymentFeeChargeCap": [
                {
                  "FeeType": [
                    "FEPF"
                  ],
                  "MinMaxType": "FMMN",
                  "FeeCapOccurrence": 0,
                  "FeeCapAmount": "string",
                  "CappingPeriod": "PACT",
                  "Notes": [
                    "string"
                  ],
                  "OtherFeeType": [
                    {
                      "Code": "string",
                      "Name": "string",
                      "Description": "string"
                    }
                  ]
                }
              ]
            },
            "RepaymentHoliday": [
              {
                "MaxHolidayLength": 0,
                "MaxHolidayPeriod": "PACT",
                "Notes": [
                  "string"
                ]
              }
            ]
          },
          "OtherFeesCharges": [
            {
              "TariffType": "TTEL",
              "TariffName": "string",
              "OtherTariffType": {
                "Code": "string",
                "Name": "string",
                "Description": "string"
              },
              "FeeChargeDetail": [
                {
                  "FeeCategory": "FCOT",
                  "FeeType": "FEPF",
                  "NegotiableIndicator": true,
                  "FeeAmount": "string",
                  "FeeRate": "string",
                  "FeeRateType": "INBB",
                  "ApplicationFrequency": "FEAC",
                  "CalculationFrequency": "FEAC",
                  "Notes": [
                    "string"
                  ],
                  "FeeChargeCap": [
                    {
                      "FeeType": [
                        "FEPF"
                      ],
                      "MinMaxType": "FMMN",
                      "FeeCapOccurrence": 0,
                      "FeeCapAmount": "string",
                      "CappingPeriod": "PACT",
                      "Notes": [
                        "string"
                      ],
                      "OtherFeeType": [
                        {
                          "Code": "string",
                          "Name": "string",
                          "Description": "string"
                        }
                      ]
                    }
                  ],
                  "OtherFeeCategoryType": {
                    "Code": "string",
                    "Name": "string",
                    "Description": "string"
                  },
                  "OtherFeeType": {
                    "Code": "string",
                    "FeeCategory": "FCOT",
                    "Name": "string",
                    "Description": "string"
                  },
                  "OtherFeeRateType": {
                    "Code": "string",
                    "Name": "string",
                    "Description": "string"
                  },
                  "OtherApplicationFrequency": {
                    "Code": "string",
                    "Name": "string",
                    "Description": "string"
                  },
                  "OtherCalculationFrequency": {
                    "Code": "string",
                    "Name": "string",
                    "Description": "string"
                  },
                  "FeeApplicableRange": {
                    "MinimumAmount": "string",
                    "MaximumAmount": "string",
                    "MinimumRate": "string",
                    "MaximumRate": "string"
                  }
                }
              ],
              "FeeChargeCap": [
                {
                  "FeeType": [
                    "FEPF"
                  ],
                  "MinMaxType": "FMMN",
                  "FeeCapOccurrence": 0,
                  "FeeCapAmount": "string",
                  "CappingPeriod": "PACT",
                  "Notes": [
                    "string"
                  ],
                  "OtherFeeType": [
                    {
                      "Code": "string",
                      "Name": "string",
                      "Description": "string"
                    }
                  ]
                }
              ]
            }
          ],
          "SupplementaryData": {}
        },
        "BCA": {
          "ProductDetails": {
            "Segment": [
              "ClientAccount"
            ],
            "FeeFreeLength": 0,
            "FeeFreeLengthPeriod": "Day",
            "Notes": [
              "string"
            ]
          },
          "CreditInterest": {
            "TierBandSet": [
              {
                "TierBandMethod": "Banded",
                "CalculationMethod": "Compound",
                "Destination": "PayAway",
                "Notes": [
                  "string"
                ],
                "TierBand": [
                  {
                    "Identification": "string",
                    "TierValueMinimum": "string",
                    "TierValueMaximum": "string",
                    "CalculationFrequency": "Daily",
                    "ApplicationFrequency": "Daily",
                    "DepositInterestAppliedCoverage": "Banded",
                    "FixedVariableInterestRateType": "Fixed",
                    "AER": "string",
                    "BankInterestRateType": "Gross",
                    "BankInterestRate": "string",
                    "Notes": [
                      "string"
                    ],
                    "OtherBankInterestType": {
                      "Code": "stri",
                      "Name": "string",
                      "Description": "string"
                    },
                    "OtherApplicationFrequency": {
                      "Code": "stri",
                      "Name": "string",
                      "Description": "string"
                    },
                    "OtherCalculationFrequency": {
                      "Code": "stri",
                      "Name": "string",
                      "Description": "string"
                    }
                  }
                ]
              }
            ]
          },
          "Overdraft": {
            "Notes": [
              "string"
            ],
            "OverdraftTierBandSet": [
              {
                "TierBandMethod": "Banded",
                "OverdraftType": "Committed",
                "Identification": "string",
                "AuthorisedIndicator": true,
                "BufferAmount": "string",
                "Notes": [
                  "string"
                ],
                "OverdraftTierBand": [
                  {
                    "Identification": "string",
                    "TierValueMin": "string",
                    "TierValueMax": "string",
                    "EAR": "string",
                    "RepresentativeAPR": "string",
                    "AgreementLengthMin": 0,
                    "AgreementLengthMax": 0,
                    "AgreementPeriod": "Day",
                    "OverdraftInterestChargingCoverage": "Banded",
                    "BankGuaranteedIndicator": true,
                    "Notes": [
                      "string"
                    ],
                    "OverdraftFeesCharges": [
                      {
                        "OverdraftFeeChargeCap": [
                          {
                            "FeeType": [
                              "ArrangedOverdraft"
                            ],
                            "MinMaxType": "Minimum",
                            "FeeCapOccurrence": 0,
                            "FeeCapAmount": "string",
                            "CappingPeriod": "Day",
                            "Notes": [
                              "string"
                            ],
                            "OtherFeeType": [
                              {
                                "Code": "stri",
                                "Name": "string",
                                "Description": "string"
                              }
                            ]
                          }
                        ],
                        "OverdraftFeeChargeDetail": [
                          {
                            "FeeType": "ArrangedOverdraft",
                            "NegotiableIndicator": true,
                            "OverdraftControlIndicator": true,
                            "IncrementalBorrowingAmount": "string",
                            "FeeAmount": "string",
                            "FeeRate": "string",
                            "FeeRateType": "Gross",
                            "ApplicationFrequency": "OnClosing",
                            "CalculationFrequency": "OnClosing",
                            "Notes": [
                              "string"
                            ],
                            "OverdraftFeeChargeCap": [
                              {
                                "FeeType": [
                                  "ArrangedOverdraft"
                                ],
                                "MinMaxType": "Minimum",
                                "FeeCapOccurrence": 0,
                                "FeeCapAmount": "string",
                                "CappingPeriod": "Day",
                                "Notes": [
                                  "string"
                                ],
                                "OtherFeeType": [
                                  {
                                    "Code": "stri",
                                    "Name": "string",
                                    "Description": "string"
                                  }
                                ]
                              }
                            ],
                            "OtherFeeType": {
                              "Code": "stri",
                              "Name": "string",
                              "Description": "string"
                            },
                            "OtherFeeRateType": {
                              "Code": "stri",
                              "Name": "string",
                              "Description": "string"
                            },
                            "OtherApplicationFrequency": {
                              "Code": "stri",
                              "Name": "string",
                              "Description": "string"
                            },
                            "OtherCalculationFrequency": {
                              "Code": "stri",
                              "Name": "string",
                              "Description": "string"
                            }
                          }
                        ]
                      }
                    ]
                  }
                ],
                "OverdraftFeesCharges": [
                  {
                    "OverdraftFeeChargeCap": [
                      {
                        "FeeType": [
                          "ArrangedOverdraft"
                        ],
                        "MinMaxType": "Minimum",
                        "FeeCapOccurrence": 0,
                        "FeeCapAmount": "string",
                        "CappingPeriod": "Day",
                        "Notes": [
                          "string"
                        ],
                        "OtherFeeType": [
                          {
                            "Code": "stri",
                            "Name": "string",
                            "Description": "string"
                          }
                        ]
                      }
                    ],
                    "OverdraftFeeChargeDetail": [
                      {
                        "FeeType": "ArrangedOverdraft",
                        "NegotiableIndicator": true,
                        "OverdraftControlIndicator": true,
                        "IncrementalBorrowingAmount": "string",
                        "FeeAmount": "string",
                        "FeeRate": "string",
                        "FeeRateType": "Gross",
                        "ApplicationFrequency": "OnClosing",
                        "CalculationFrequency": "OnClosing",
                        "Notes": [
                          "string"
                        ],
                        "OverdraftFeeChargeCap": [
                          {
                            "FeeType": [
                              "ArrangedOverdraft"
                            ],
                            "MinMaxType": "Minimum",
                            "FeeCapOccurrence": 0,
                            "FeeCapAmount": "string",
                            "CappingPeriod": "Day",
                            "Notes": [
                              "string"
                            ],
                            "OtherFeeType": [
                              {
                                "Code": "stri",
                                "Name": "string",
                                "Description": "string"
                              }
                            ]
                          }
                        ],
                        "OtherFeeType": {
                          "Code": "stri",
                          "Name": "string",
                          "Description": "string"
                        },
                        "OtherFeeRateType": {
                          "Code": "stri",
                          "Name": "string",
                          "Description": "string"
                        },
                        "OtherApplicationFrequency": {
                          "Code": "stri",
                          "Name": "string",
                          "Description": "string"
                        },
                        "OtherCalculationFrequency": {
                          "Code": "stri",
                          "Name": "string",
                          "Description": "string"
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          },
          "OtherFeesCharges": [
            {
              "TariffType": "Electronic",
              "TariffName": "string",
              "OtherTariffType": {
                "Code": "stri",
                "Name": "string",
                "Description": "string"
              },
              "FeeChargeDetail": [
                {
                  "FeeCategory": "Other",
                  "FeeType": "Other",
                  "NegotiableIndicator": true,
                  "FeeAmount": "string",
                  "FeeRate": "string",
                  "FeeRateType": "Gross",
                  "ApplicationFrequency": "OnClosing",
                  "CalculationFrequency": "OnClosing",
                  "Notes": [
                    "string"
                  ],
                  "FeeChargeCap": [
                    {
                      "FeeType": [
                        "Other"
                      ],
                      "MinMaxType": "Minimum",
                      "FeeCapOccurrence": 0,
                      "FeeCapAmount": "string",
                      "CappingPeriod": "Day",
                      "Notes": [
                        "string"
                      ],
                      "OtherFeeType": [
                        {
                          "Code": "stri",
                          "Name": "string",
                          "Description": "string"
                        }
                      ]
                    }
                  ],
                  "OtherFeeCategoryType": {
                    "Code": "stri",
                    "Name": "string",
                    "Description": "string"
                  },
                  "OtherFeeType": {
                    "Code": "stri",
                    "FeeCategory": "Other",
                    "Name": "string",
                    "Description": "string"
                  },
                  "OtherFeeRateType": {
                    "Code": "stri",
                    "Name": "string",
                    "Description": "string"
                  },
                  "OtherApplicationFrequency": {
                    "Code": "stri",
                    "Name": "string",
                    "Description": "string"
                  },
                  "OtherCalculationFrequency": {
                    "Code": "stri",
                    "Name": "string",
                    "Description": "string"
                  },
                  "FeeApplicableRange": {
                    "MinimumAmount": "string",
                    "MaximumAmount": "string",
                    "MinimumRate": "string",
                    "MaximumRate": "string"
                  }
                }
              ],
              "FeeChargeCap": [
                {
                  "FeeType": [
                    "Other"
                  ],
                  "MinMaxType": "Minimum",
                  "FeeCapOccurrence": 0,
                  "FeeCapAmount": "string",
                  "CappingPeriod": "Day",
                  "Notes": [
                    "string"
                  ],
                  "OtherFeeType": [
                    {
                      "Code": "stri",
                      "Name": "string",
                      "Description": "string"
                    }
                  ]
                }
              ]
            }
          ]
        },
        "PCA": {
          "ProductDetails": {
            "Segment": [
              "Basic"
            ],
            "MonthlyMaximumCharge": "string",
            "Notes": [
              "string"
            ]
          },
          "CreditInterest": {
            "TierBandSet": [
              {
                "TierBandMethod": "Tiered",
                "CalculationMethod": "Compound",
                "Destination": "PayAway",
                "Notes": [
                  "string"
                ],
                "TierBand": [
                  {
                    "Identification": "string",
                    "TierValueMinimum": "string",
                    "TierValueMaximum": "string",
                    "CalculationFrequency": "PerAcademicTerm",
                    "ApplicationFrequency": "PerAcademicTerm",
                    "DepositInterestAppliedCoverage": "Tiered",
                    "FixedVariableInterestRateType": "Fixed",
                    "AER": "string",
                    "BankInterestRateType": "LinkedBaseRate",
                    "BankInterestRate": "string",
                    "Notes": [
                      "string"
                    ],
                    "OtherBankInterestType": {
                      "Code": "stri",
                      "Name": "string",
                      "Description": "string"
                    },
                    "OtherApplicationFrequency": {
                      "Code": "stri",
                      "Name": "string",
                      "Description": "string"
                    },
                    "OtherCalculationFrequency": {
                      "Code": "stri",
                      "Name": "string",
                      "Description": "string"
                    }
                  }
                ]
              }
            ]
          },
          "Overdraft": {
            "Notes": [
              "string"
            ],
            "OverdraftTierBandSet": [
              {
                "TierBandMethod": "Tiered",
                "OverdraftType": "Committed",
                "Identification": "string",
                "AuthorisedIndicator": true,
                "BufferAmount": "string",
                "Notes": [
                  "string"
                ],
                "OverdraftTierBand": [
                  {
                    "Identification": "string",
                    "TierValueMin": "string",
                    "TierValueMax": "string",
                    "OverdraftInterestChargingCoverage": "Tiered",
                    "BankGuaranteedIndicator": true,
                    "EAR": "string",
                    "RepresentativeAPR": "string",
                    "Notes": [
                      "string"
                    ],
                    "OverdraftFeesCharges": [
                      {
                        "OverdraftFeeChargeCap": [
                          {
                            "FeeType": [
                              "ArrangedOverdraft"
                            ],
                            "OverdraftControlIndicator": true,
                            "MinMaxType": "Minimum",
                            "FeeCapOccurrence": 0,
                            "FeeCapAmount": "string",
                            "CappingPeriod": "AcademicTerm",
                            "Notes": [
                              "string"
                            ],
                            "OtherFeeType": [
                              {
                                "Code": "stri",
                                "Name": "string",
                                "Description": "string"
                              }
                            ]
                          }
                        ],
                        "OverdraftFeeChargeDetail": [
                          {
                            "FeeType": "ArrangedOverdraft",
                            "OverdraftControlIndicator": true,
                            "IncrementalBorrowingAmount": "string",
                            "FeeAmount": "string",
                            "FeeRate": "string",
                            "FeeRateType": "LinkedBaseRate",
                            "ApplicationFrequency": "AccountClosing",
                            "CalculationFrequency": "AccountClosing",
                            "Notes": [
                              "string"
                            ],
                            "OtherFeeType": {
                              "Code": "stri",
                              "Name": "string",
                              "Description": "string"
                            },
                            "OtherFeeRateType": {
                              "Code": "stri",
                              "Name": "string",
                              "Description": "string"
                            },
                            "OtherApplicationFrequency": {
                              "Code": "stri",
                              "Name": "string",
                              "Description": "string"
                            },
                            "OtherCalculationFrequency": {
                              "Code": "stri",
                              "Name": "string",
                              "Description": "string"
                            },
                            "OverdraftFeeChargeCap": {
                              "FeeType": [
                                "ArrangedOverdraft"
                              ],
                              "OverdraftControlIndicator": true,
                              "MinMaxType": "Minimum",
                              "FeeCapOccurrence": 0,
                              "FeeCapAmount": "string",
                              "CappingPeriod": "AcademicTerm",
                              "Notes": [
                                "string"
                              ],
                              "OtherFeeType": [
                                {
                                  "Code": "stri",
                                  "Name": "string",
                                  "Description": "string"
                                }
                              ]
                            }
                          }
                        ]
                      }
                    ]
                  }
                ],
                "OverdraftFeesCharges": [
                  {
                    "OverdraftFeeChargeCap": [
                      {
                        "FeeType": [
                          "ArrangedOverdraft"
                        ],
                        "OverdraftControlIndicator": true,
                        "MinMaxType": "Minimum",
                        "FeeCapOccurrence": 0,
                        "FeeCapAmount": "string",
                        "CappingPeriod": "AcademicTerm",
                        "Notes": [
                          "string"
                        ],
                        "OtherFeeType": [
                          {
                            "Code": "stri",
                            "Name": "string",
                            "Description": "string"
                          }
                        ]
                      }
                    ],
                    "OverdraftFeeChargeDetail": [
                      {
                        "FeeType": "ArrangedOverdraft",
                        "OverdraftControlIndicator": true,
                        "IncrementalBorrowingAmount": "string",
                        "FeeAmount": "string",
                        "FeeRate": "string",
                        "FeeRateType": "LinkedBaseRate",
                        "ApplicationFrequency": "AccountClosing",
                        "CalculationFrequency": "AccountClosing",
                        "Notes": [
                          "string"
                        ],
                        "OtherFeeType": {
                          "Code": "stri",
                          "Name": "string",
                          "Description": "string"
                        },
                        "OtherFeeRateType": {
                          "Code": "stri",
                          "Name": "string",
                          "Description": "string"
                        },
                        "OtherApplicationFrequency": {
                          "Code": "stri",
                          "Name": "string",
                          "Description": "string"
                        },
                        "OtherCalculationFrequency": {
                          "Code": "stri",
                          "Name": "string",
                          "Description": "string"
                        },
                        "OverdraftFeeChargeCap": {
                          "FeeType": [
                            "ArrangedOverdraft"
                          ],
                          "OverdraftControlIndicator": true,
                          "MinMaxType": "Minimum",
                          "FeeCapOccurrence": 0,
                          "FeeCapAmount": "string",
                          "CappingPeriod": "AcademicTerm",
                          "Notes": [
                            "string"
                          ],
                          "OtherFeeType": [
                            {
                              "Code": "stri",
                              "Name": "string",
                              "Description": "string"
                            }
                          ]
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          },
          "OtherFeesCharges": {
            "FeeChargeDetail": [
              {
                "FeeCategory": "Other",
                "FeeType": "ServiceCAccountFee",
                "FeeAmount": "string",
                "FeeRate": "string",
                "FeeRateType": "LinkedBaseRate",
                "ApplicationFrequency": "AccountClosing",
                "CalculationFrequency": "AccountClosing",
                "Notes": [
                  "string"
                ],
                "OtherFeeCategoryType": {
                  "Code": "stri",
                  "Name": "string",
                  "Description": "string"
                },
                "OtherFeeType": {
                  "Code": "stri",
                  "FeeCategory": "Other",
                  "Name": "string",
                  "Description": "string"
                },
                "OtherFeeRateType": {
                  "Code": "stri",
                  "Name": "string",
                  "Description": "string"
                },
                "OtherApplicationFrequency": {
                  "Code": "stri",
                  "Name": "string",
                  "Description": "string"
                },
                "OtherCalculationFrequency": {
                  "Code": "stri",
                  "Name": "string",
                  "Description": "string"
                },
                "FeeChargeCap": [
                  {
                    "FeeType": [
                      "ServiceCAccountFee"
                    ],
                    "MinMaxType": "Minimum",
                    "FeeCapOccurrence": 0,
                    "FeeCapAmount": "string",
                    "CappingPeriod": "AcademicTerm",
                    "Notes": [
                      "string"
                    ],
                    "OtherFeeType": [
                      {
                        "Code": "stri",
                        "Name": "string",
                        "Description": "string"
                      }
                    ]
                  }
                ],
                "FeeApplicableRange": {
                  "MinimumAmount": "string",
                  "MaximumAmount": "string",
                  "MinimumRate": "string",
                  "MaximumRate": "string"
                }
              }
            ],
            "FeeChargeCap": [
              {
                "FeeType": [
                  "ServiceCAccountFee"
                ],
                "MinMaxType": "Minimum",
                "FeeCapOccurrence": 0,
                "FeeCapAmount": "string",
                "CappingPeriod": "AcademicTerm",
                "Notes": [
                  "string"
                ],
                "OtherFeeType": [
                  {
                    "Code": "stri",
                    "Name": "string",
                    "Description": "string"
                  }
                ]
              }
            ]
          }
        }
      }
    ]
  },
  "Links": {
    "Self": "http://example.com",
    "First": "http://example.com",
    "Prev": "http://example.com",
    "Next": "http://example.com",
    "Last": "http://example.com"
  },
  "Meta": {
    "TotalPages": 0,
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z"
  }
}
```

> 400 Response

```json
{
  "Id": "string",
  "Code": "400 BadRequest",
  "Message": "There is something wrong with the request parameters provided",
  "Errors": [
    {
      "ErrorCode": "U001",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ]
}
```

> 403 Response

```json
{
  "Id": "string",
  "Code": "400 BadRequest",
  "Message": "There is something wrong with the request parameters provided",
  "Errors": [
    {
      "ErrorCode": "U001",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ]
}
```

> 500 Response

```json
{
  "Id": "string",
  "Code": "400 BadRequest",
  "Message": "There is something wrong with the request parameters provided",
  "Errors": [
    {
      "ErrorCode": "U001",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ]
}
```

<h3 id="get-products-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Products Read|[OBReadProduct2](#schemaobreadproduct2)|
|400|Bad Request|Bad request|[OBErrorResponse1](#schemaoberrorresponse1)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|[OBErrorResponse1](#schemaoberrorresponse1)|
|404|Not Found|Not found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|406|Not Acceptable|Not Acceptable|None|
|429|Too Many Requests|Too Many Requests|None|
|500|Internal Server Error|Internal Server Error|[OBErrorResponse1](#schemaoberrorresponse1)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|200|RateLimit-Policy|string||TPPs __must__ refer to ASPSP developer portals for further information on any rate limit policies, if the headers are supported and any additional requirements.<br><br>A non-empty list of Quota Policy Items. The Item value __MUST__ be a String.<br><br>Example:<br>`RateLimit-Policy: "default";q=100;w=10`<br><br>The **REQUIRED** "q" parameter indicates the quota allocated by this policy measured in quota units.<br><br>The **OPTIONAL** "w" parameter value conveys a time window.<br>|
|200|RateLimit|string||TPPs __must__ refer to ASPSP developer portals for further information on any rate limit policies, if the headers are supported and any additional requirements.<br><br>A server uses the "RateLimit" response header field to communicate the current service limit for a quota policy for a particular partition key.<br><br>Example:<br>`RateLimit: "default";r=50;t=30`<br><br>The **REQUIRED** "r" parameter value conveys the remaining quota units for the identified policy.<br><br>The **OPTIONAL** "t" parameter value conveys the time window reset time for the identified policy.<br>|
|400|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|401|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|404|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|405|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|406|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|429|Retry-After|integer||Number in seconds to wait|
|429|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
PSUOAuth2Security ( Scopes: accounts )
</aside>

<h1 id="account-and-transaction-api-specification-scheduled-payments">Scheduled Payments</h1>

## Get Scheduled Payments for an AccountId

<a id="opIdGetAccountsAccountIdScheduledPayments"></a>

> Code samples

```bash
curl http://localhost:3000/accounts/string/scheduled-payments \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /accounts/{AccountId}/scheduled-payments`

Enables an AISP to retrieve Scheduled Payment information for a specific PSU account.

<h3 id="get-scheduled-payments-for-an-accountid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|AccountId|path|string|true|AccountId|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. <br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: <br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|
|x-client-id|header|string|false|Only used if an ASPSP requires the client ID in order to return rate limit headers. <br><br>TPPs __must__ refer to ASPSP developer portals for further information on any rate limit policies, if the headers are supported and any additional requirements.<br><br>This header __must not__ be used for client authentication<br>|

> Example responses

> 200 Response

```json
{
  "Data": {
    "ScheduledPayment": [
      {
        "AccountId": "22289",
        "ScheduledPaymentId": "SP03",
        "ScheduledPaymentDateTime": "2017-07-12T00:00:00+00:00",
        "ScheduledType": "Arrival",
        "Reference": "Towbar Club",
        "DebtorReference": "REF51561806",
        "InstructedAmount": {
          "Amount": "1209.06",
          "Currency": "GBP"
        },
        "CreditorAgent": {
          "SchemeName": "UK.OBIE.BICFI",
          "Identification": "80200112344562",
          "Name": "Agent Name",
          "PostalAddress": {
            "AddressType": "BIZZ",
            "Department": "Finance",
            "SubDepartment": "Payroll",
            "StreetName": "Bank Street",
            "BuildingNumber": "11",
            "BuildingName": "string",
            "Floor": "11",
            "UnitNumber": "A88",
            "Room": "Basement 03",
            "PostBox": "PO Box 123456",
            "TownLocationName": "London",
            "DistrictName": "Greater London",
            "CareOf": "Jane Smith",
            "PostCode": "EC2N 4AG",
            "TownName": "London",
            "CountrySubDivision": "string",
            "Country": "string",
            "AddressLine": [
              "string"
            ]
          },
          "LEI": "IZ9Q00LZEVUKWCQY6X15"
        },
        "CreditorAccount": {
          "SchemeName": "string",
          "Identification": "string",
          "Name": "Jane Smith",
          "SecondaryIdentification": "87562298675897",
          "Proxy": {
            "Identification": "2360549017905188",
            "Code": "TELE",
            "Type": "string"
          }
        }
      }
    ]
  },
  "Links": {
    "Self": "http://example.com",
    "First": "http://example.com",
    "Prev": "http://example.com",
    "Next": "http://example.com",
    "Last": "http://example.com"
  },
  "Meta": {
    "TotalPages": 0,
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z"
  }
}
```

> 400 Response

```json
{
  "Id": "string",
  "Code": "400 BadRequest",
  "Message": "There is something wrong with the request parameters provided",
  "Errors": [
    {
      "ErrorCode": "U001",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ]
}
```

> 403 Response

```json
{
  "Id": "string",
  "Code": "400 BadRequest",
  "Message": "There is something wrong with the request parameters provided",
  "Errors": [
    {
      "ErrorCode": "U001",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ]
}
```

> 500 Response

```json
{
  "Id": "string",
  "Code": "400 BadRequest",
  "Message": "There is something wrong with the request parameters provided",
  "Errors": [
    {
      "ErrorCode": "U001",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ]
}
```

<h3 id="get-scheduled-payments-for-an-accountid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Scheduled Payments Read|[OBReadScheduledPayment3](#schemaobreadscheduledpayment3)|
|400|Bad Request|Bad request|[OBErrorResponse1](#schemaoberrorresponse1)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|[OBErrorResponse1](#schemaoberrorresponse1)|
|404|Not Found|Not found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|406|Not Acceptable|Not Acceptable|None|
|429|Too Many Requests|Too Many Requests|None|
|500|Internal Server Error|Internal Server Error|[OBErrorResponse1](#schemaoberrorresponse1)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|200|RateLimit-Policy|string||TPPs __must__ refer to ASPSP developer portals for further information on any rate limit policies, if the headers are supported and any additional requirements.<br><br>A non-empty list of Quota Policy Items. The Item value __MUST__ be a String.<br><br>Example:<br>`RateLimit-Policy: "default";q=100;w=10`<br><br>The **REQUIRED** "q" parameter indicates the quota allocated by this policy measured in quota units.<br><br>The **OPTIONAL** "w" parameter value conveys a time window.<br>|
|200|RateLimit|string||TPPs __must__ refer to ASPSP developer portals for further information on any rate limit policies, if the headers are supported and any additional requirements.<br><br>A server uses the "RateLimit" response header field to communicate the current service limit for a quota policy for a particular partition key.<br><br>Example:<br>`RateLimit: "default";r=50;t=30`<br><br>The **REQUIRED** "r" parameter value conveys the remaining quota units for the identified policy.<br><br>The **OPTIONAL** "t" parameter value conveys the time window reset time for the identified policy.<br>|
|400|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|401|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|404|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|405|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|406|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|429|Retry-After|integer||Number in seconds to wait|
|429|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
PSUOAuth2Security ( Scopes: accounts )
</aside>

## Get Scheduled Payments

<a id="opIdGetScheduledPayments"></a>

> Code samples

```bash
curl http://localhost:3000/scheduled-payments \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /scheduled-payments`

Enables an AISP to retrieve Scheduled Payment information for account(s) that the PSU has consented to.

<h3 id="get-scheduled-payments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. <br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: <br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|
|x-client-id|header|string|false|Only used if an ASPSP requires the client ID in order to return rate limit headers. <br><br>TPPs __must__ refer to ASPSP developer portals for further information on any rate limit policies, if the headers are supported and any additional requirements.<br><br>This header __must not__ be used for client authentication<br>|

> Example responses

> 200 Response

```json
{
  "Data": {
    "ScheduledPayment": [
      {
        "AccountId": "22289",
        "ScheduledPaymentId": "SP03",
        "ScheduledPaymentDateTime": "2017-07-12T00:00:00+00:00",
        "ScheduledType": "Arrival",
        "Reference": "Towbar Club",
        "DebtorReference": "REF51561806",
        "InstructedAmount": {
          "Amount": "1209.06",
          "Currency": "GBP"
        },
        "CreditorAgent": {
          "SchemeName": "UK.OBIE.BICFI",
          "Identification": "80200112344562",
          "Name": "Agent Name",
          "PostalAddress": {
            "AddressType": "BIZZ",
            "Department": "Finance",
            "SubDepartment": "Payroll",
            "StreetName": "Bank Street",
            "BuildingNumber": "11",
            "BuildingName": "string",
            "Floor": "11",
            "UnitNumber": "A88",
            "Room": "Basement 03",
            "PostBox": "PO Box 123456",
            "TownLocationName": "London",
            "DistrictName": "Greater London",
            "CareOf": "Jane Smith",
            "PostCode": "EC2N 4AG",
            "TownName": "London",
            "CountrySubDivision": "string",
            "Country": "string",
            "AddressLine": [
              "string"
            ]
          },
          "LEI": "IZ9Q00LZEVUKWCQY6X15"
        },
        "CreditorAccount": {
          "SchemeName": "string",
          "Identification": "string",
          "Name": "Jane Smith",
          "SecondaryIdentification": "87562298675897",
          "Proxy": {
            "Identification": "2360549017905188",
            "Code": "TELE",
            "Type": "string"
          }
        }
      }
    ]
  },
  "Links": {
    "Self": "http://example.com",
    "First": "http://example.com",
    "Prev": "http://example.com",
    "Next": "http://example.com",
    "Last": "http://example.com"
  },
  "Meta": {
    "TotalPages": 0,
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z"
  }
}
```

> 400 Response

```json
{
  "Id": "string",
  "Code": "400 BadRequest",
  "Message": "There is something wrong with the request parameters provided",
  "Errors": [
    {
      "ErrorCode": "U001",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ]
}
```

> 403 Response

```json
{
  "Id": "string",
  "Code": "400 BadRequest",
  "Message": "There is something wrong with the request parameters provided",
  "Errors": [
    {
      "ErrorCode": "U001",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ]
}
```

> 500 Response

```json
{
  "Id": "string",
  "Code": "400 BadRequest",
  "Message": "There is something wrong with the request parameters provided",
  "Errors": [
    {
      "ErrorCode": "U001",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ]
}
```

<h3 id="get-scheduled-payments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Scheduled Payments Read|[OBReadScheduledPayment3](#schemaobreadscheduledpayment3)|
|400|Bad Request|Bad request|[OBErrorResponse1](#schemaoberrorresponse1)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|[OBErrorResponse1](#schemaoberrorresponse1)|
|404|Not Found|Not found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|406|Not Acceptable|Not Acceptable|None|
|429|Too Many Requests|Too Many Requests|None|
|500|Internal Server Error|Internal Server Error|[OBErrorResponse1](#schemaoberrorresponse1)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|200|RateLimit-Policy|string||TPPs __must__ refer to ASPSP developer portals for further information on any rate limit policies, if the headers are supported and any additional requirements.<br><br>A non-empty list of Quota Policy Items. The Item value __MUST__ be a String.<br><br>Example:<br>`RateLimit-Policy: "default";q=100;w=10`<br><br>The **REQUIRED** "q" parameter indicates the quota allocated by this policy measured in quota units.<br><br>The **OPTIONAL** "w" parameter value conveys a time window.<br>|
|200|RateLimit|string||TPPs __must__ refer to ASPSP developer portals for further information on any rate limit policies, if the headers are supported and any additional requirements.<br><br>A server uses the "RateLimit" response header field to communicate the current service limit for a quota policy for a particular partition key.<br><br>Example:<br>`RateLimit: "default";r=50;t=30`<br><br>The **REQUIRED** "r" parameter value conveys the remaining quota units for the identified policy.<br><br>The **OPTIONAL** "t" parameter value conveys the time window reset time for the identified policy.<br>|
|400|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|401|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|404|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|405|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|406|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|429|Retry-After|integer||Number in seconds to wait|
|429|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
PSUOAuth2Security ( Scopes: accounts )
</aside>

<h1 id="account-and-transaction-api-specification-standing-orders">Standing Orders</h1>

## Get Standing Orders for an AccountId

<a id="opIdGetAccountsAccountIdStandingOrders"></a>

> Code samples

```bash
curl http://localhost:3000/accounts/string/standing-orders \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /accounts/{AccountId}/standing-orders`

Enables an AISP to retrieve Standing Order information for a specific PSU account.

<h3 id="get-standing-orders-for-an-accountid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|AccountId|path|string|true|AccountId|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. <br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: <br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|
|x-client-id|header|string|false|Only used if an ASPSP requires the client ID in order to return rate limit headers. <br><br>TPPs __must__ refer to ASPSP developer portals for further information on any rate limit policies, if the headers are supported and any additional requirements.<br><br>This header __must not__ be used for client authentication<br>|

> Example responses

> 200 Response

```json
{
  "Data": {
    "StandingOrder": [
      {
        "AccountId": "22289",
        "StandingOrderId": "Ben5",
        "NextPaymentDateTime": "2017-07-12T00:00:00+00:00",
        "LastPaymentDateTime": "2017-07-12T00:00:00+00:00",
        "NumberOfPayments": "string",
        "StandingOrderStatusCode": "ACTV",
        "FirstPaymentAmount": {
          "Amount": "1209.06",
          "Currency": "GBP"
        },
        "NextPaymentAmount": {
          "Amount": "1209.06",
          "Currency": "GBP"
        },
        "LastPaymentAmount": {
          "Amount": "1209.06",
          "Currency": "GBP"
        },
        "FinalPaymentAmount": {
          "Amount": "1209.06",
          "Currency": "GBP"
        },
        "CreditorAgent": {
          "SchemeName": "UK.OBIE.BICFI",
          "Identification": "80200112344562",
          "Name": "Agent Name",
          "PostalAddress": {
            "AddressType": "BIZZ",
            "Department": "Finance",
            "SubDepartment": "Payroll",
            "StreetName": "Bank Street",
            "BuildingNumber": "11",
            "BuildingName": "string",
            "Floor": "11",
            "UnitNumber": "A88",
            "Room": "Basement 03",
            "PostBox": "PO Box 123456",
            "TownLocationName": "London",
            "DistrictName": "Greater London",
            "CareOf": "Jane Smith",
            "PostCode": "EC2N 4AG",
            "TownName": "London",
            "CountrySubDivision": "string",
            "Country": "string",
            "AddressLine": [
              "string"
            ]
          },
          "LEI": "IZ9Q00LZEVUKWCQY6X15"
        },
        "CreditorAccount": {
          "SchemeName": "string",
          "Identification": "string",
          "Name": "Jane Smith",
          "SecondaryIdentification": "87562298675897",
          "Proxy": {
            "Identification": "2360549017905188",
            "Code": "TELE",
            "Type": "string"
          }
        },
        "SupplementaryData": {},
        "MandateRelatedInformation": {
          "MandateIdentification": "Golfers",
          "Classification": "FIXE",
          "CategoryPurposeCode": "BONU",
          "FirstPaymentDateTime": "2024-04-25T12:46:49.425Z",
          "RecurringPaymentDateTime": "2024-04-25T12:46:49.425Z",
          "FinalPaymentDateTime": "2024-04-25T12:46:49.425Z",
          "Frequency": {
            "Type": "MNTH",
            "CountPerPeriod": 1,
            "PointInTime": "00"
          },
          "Reason": "To pay monthly membership"
        },
        "RemittanceInformation": {
          "Structured": [
            {
              "ReferredDocumentInformation": [
                {
                  "Code": "AROI",
                  "Issuer": "string",
                  "Number": "string",
                  "RelatedDate": "1970-01-01T00:00:00Z",
                  "LineDetails": [
                    "string"
                  ]
                }
              ],
              "ReferredDocumentAmount": "1209.06",
              "CreditorReferenceInformation": {
                "Code": "DISP",
                "Issuer": "string",
                "Reference": "string"
              },
              "Invoicer": "80200112344562",
              "Invoicee": "80200112344562",
              "TaxRemittance": "string",
              "AdditionalRemittanceInformation": [
                "string"
              ]
            }
          ],
          "Unstructured": [
            "string"
          ]
        }
      }
    ]
  },
  "Links": {
    "Self": "http://example.com",
    "First": "http://example.com",
    "Prev": "http://example.com",
    "Next": "http://example.com",
    "Last": "http://example.com"
  },
  "Meta": {
    "TotalPages": 0,
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z"
  }
}
```

> 400 Response

```json
{
  "Id": "string",
  "Code": "400 BadRequest",
  "Message": "There is something wrong with the request parameters provided",
  "Errors": [
    {
      "ErrorCode": "U001",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ]
}
```

> 403 Response

```json
{
  "Id": "string",
  "Code": "400 BadRequest",
  "Message": "There is something wrong with the request parameters provided",
  "Errors": [
    {
      "ErrorCode": "U001",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ]
}
```

> 500 Response

```json
{
  "Id": "string",
  "Code": "400 BadRequest",
  "Message": "There is something wrong with the request parameters provided",
  "Errors": [
    {
      "ErrorCode": "U001",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ]
}
```

<h3 id="get-standing-orders-for-an-accountid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Standing Orders Read|[OBReadStandingOrder6](#schemaobreadstandingorder6)|
|400|Bad Request|Bad request|[OBErrorResponse1](#schemaoberrorresponse1)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|[OBErrorResponse1](#schemaoberrorresponse1)|
|404|Not Found|Not found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|406|Not Acceptable|Not Acceptable|None|
|429|Too Many Requests|Too Many Requests|None|
|500|Internal Server Error|Internal Server Error|[OBErrorResponse1](#schemaoberrorresponse1)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|200|RateLimit-Policy|string||TPPs __must__ refer to ASPSP developer portals for further information on any rate limit policies, if the headers are supported and any additional requirements.<br><br>A non-empty list of Quota Policy Items. The Item value __MUST__ be a String.<br><br>Example:<br>`RateLimit-Policy: "default";q=100;w=10`<br><br>The **REQUIRED** "q" parameter indicates the quota allocated by this policy measured in quota units.<br><br>The **OPTIONAL** "w" parameter value conveys a time window.<br>|
|200|RateLimit|string||TPPs __must__ refer to ASPSP developer portals for further information on any rate limit policies, if the headers are supported and any additional requirements.<br><br>A server uses the "RateLimit" response header field to communicate the current service limit for a quota policy for a particular partition key.<br><br>Example:<br>`RateLimit: "default";r=50;t=30`<br><br>The **REQUIRED** "r" parameter value conveys the remaining quota units for the identified policy.<br><br>The **OPTIONAL** "t" parameter value conveys the time window reset time for the identified policy.<br>|
|400|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|401|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|404|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|405|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|406|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|429|Retry-After|integer||Number in seconds to wait|
|429|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
PSUOAuth2Security ( Scopes: accounts )
</aside>

## Get Standing Orders

<a id="opIdGetStandingOrders"></a>

> Code samples

```bash
curl http://localhost:3000/standing-orders \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /standing-orders`

Enables an AISP to retrieve Standing Order information for account(s) that the PSU has consented to.

<h3 id="get-standing-orders-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. <br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: <br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|
|x-client-id|header|string|false|Only used if an ASPSP requires the client ID in order to return rate limit headers. <br><br>TPPs __must__ refer to ASPSP developer portals for further information on any rate limit policies, if the headers are supported and any additional requirements.<br><br>This header __must not__ be used for client authentication<br>|

> Example responses

> 200 Response

```json
{
  "Data": {
    "StandingOrder": [
      {
        "AccountId": "22289",
        "StandingOrderId": "Ben5",
        "NextPaymentDateTime": "2017-07-12T00:00:00+00:00",
        "LastPaymentDateTime": "2017-07-12T00:00:00+00:00",
        "NumberOfPayments": "string",
        "StandingOrderStatusCode": "ACTV",
        "FirstPaymentAmount": {
          "Amount": "1209.06",
          "Currency": "GBP"
        },
        "NextPaymentAmount": {
          "Amount": "1209.06",
          "Currency": "GBP"
        },
        "LastPaymentAmount": {
          "Amount": "1209.06",
          "Currency": "GBP"
        },
        "FinalPaymentAmount": {
          "Amount": "1209.06",
          "Currency": "GBP"
        },
        "CreditorAgent": {
          "SchemeName": "UK.OBIE.BICFI",
          "Identification": "80200112344562",
          "Name": "Agent Name",
          "PostalAddress": {
            "AddressType": "BIZZ",
            "Department": "Finance",
            "SubDepartment": "Payroll",
            "StreetName": "Bank Street",
            "BuildingNumber": "11",
            "BuildingName": "string",
            "Floor": "11",
            "UnitNumber": "A88",
            "Room": "Basement 03",
            "PostBox": "PO Box 123456",
            "TownLocationName": "London",
            "DistrictName": "Greater London",
            "CareOf": "Jane Smith",
            "PostCode": "EC2N 4AG",
            "TownName": "London",
            "CountrySubDivision": "string",
            "Country": "string",
            "AddressLine": [
              "string"
            ]
          },
          "LEI": "IZ9Q00LZEVUKWCQY6X15"
        },
        "CreditorAccount": {
          "SchemeName": "string",
          "Identification": "string",
          "Name": "Jane Smith",
          "SecondaryIdentification": "87562298675897",
          "Proxy": {
            "Identification": "2360549017905188",
            "Code": "TELE",
            "Type": "string"
          }
        },
        "SupplementaryData": {},
        "MandateRelatedInformation": {
          "MandateIdentification": "Golfers",
          "Classification": "FIXE",
          "CategoryPurposeCode": "BONU",
          "FirstPaymentDateTime": "2024-04-25T12:46:49.425Z",
          "RecurringPaymentDateTime": "2024-04-25T12:46:49.425Z",
          "FinalPaymentDateTime": "2024-04-25T12:46:49.425Z",
          "Frequency": {
            "Type": "MNTH",
            "CountPerPeriod": 1,
            "PointInTime": "00"
          },
          "Reason": "To pay monthly membership"
        },
        "RemittanceInformation": {
          "Structured": [
            {
              "ReferredDocumentInformation": [
                {
                  "Code": "AROI",
                  "Issuer": "string",
                  "Number": "string",
                  "RelatedDate": "1970-01-01T00:00:00Z",
                  "LineDetails": [
                    "string"
                  ]
                }
              ],
              "ReferredDocumentAmount": "1209.06",
              "CreditorReferenceInformation": {
                "Code": "DISP",
                "Issuer": "string",
                "Reference": "string"
              },
              "Invoicer": "80200112344562",
              "Invoicee": "80200112344562",
              "TaxRemittance": "string",
              "AdditionalRemittanceInformation": [
                "string"
              ]
            }
          ],
          "Unstructured": [
            "string"
          ]
        }
      }
    ]
  },
  "Links": {
    "Self": "http://example.com",
    "First": "http://example.com",
    "Prev": "http://example.com",
    "Next": "http://example.com",
    "Last": "http://example.com"
  },
  "Meta": {
    "TotalPages": 0,
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z"
  }
}
```

> 400 Response

```json
{
  "Id": "string",
  "Code": "400 BadRequest",
  "Message": "There is something wrong with the request parameters provided",
  "Errors": [
    {
      "ErrorCode": "U001",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ]
}
```

> 403 Response

```json
{
  "Id": "string",
  "Code": "400 BadRequest",
  "Message": "There is something wrong with the request parameters provided",
  "Errors": [
    {
      "ErrorCode": "U001",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ]
}
```

> 500 Response

```json
{
  "Id": "string",
  "Code": "400 BadRequest",
  "Message": "There is something wrong with the request parameters provided",
  "Errors": [
    {
      "ErrorCode": "U001",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ]
}
```

<h3 id="get-standing-orders-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Standing Orders Read|[OBReadStandingOrder6](#schemaobreadstandingorder6)|
|400|Bad Request|Bad request|[OBErrorResponse1](#schemaoberrorresponse1)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|[OBErrorResponse1](#schemaoberrorresponse1)|
|404|Not Found|Not found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|406|Not Acceptable|Not Acceptable|None|
|429|Too Many Requests|Too Many Requests|None|
|500|Internal Server Error|Internal Server Error|[OBErrorResponse1](#schemaoberrorresponse1)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|200|RateLimit-Policy|string||TPPs __must__ refer to ASPSP developer portals for further information on any rate limit policies, if the headers are supported and any additional requirements.<br><br>A non-empty list of Quota Policy Items. The Item value __MUST__ be a String.<br><br>Example:<br>`RateLimit-Policy: "default";q=100;w=10`<br><br>The **REQUIRED** "q" parameter indicates the quota allocated by this policy measured in quota units.<br><br>The **OPTIONAL** "w" parameter value conveys a time window.<br>|
|200|RateLimit|string||TPPs __must__ refer to ASPSP developer portals for further information on any rate limit policies, if the headers are supported and any additional requirements.<br><br>A server uses the "RateLimit" response header field to communicate the current service limit for a quota policy for a particular partition key.<br><br>Example:<br>`RateLimit: "default";r=50;t=30`<br><br>The **REQUIRED** "r" parameter value conveys the remaining quota units for the identified policy.<br><br>The **OPTIONAL** "t" parameter value conveys the time window reset time for the identified policy.<br>|
|400|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|401|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|404|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|405|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|406|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|429|Retry-After|integer||Number in seconds to wait|
|429|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
PSUOAuth2Security ( Scopes: accounts )
</aside>

<h1 id="account-and-transaction-api-specification-statements">Statements</h1>

## Get Statements for an AccountId

<a id="opIdGetAccountsAccountIdStatements"></a>

> Code samples

```bash
curl http://localhost:3000/accounts/string/statements \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /accounts/{AccountId}/statements`

Enables an AISP to retrieve statement information for a specific PSU account.

<h3 id="get-statements-for-an-accountid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|AccountId|path|string|true|AccountId|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. <br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: <br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|
|fromStatementDateTime|query|string(date-time)|false|The UTC ISO 8601 Date Time to filter statements FROM.<br><br>Note: Time component is optional - set to 00:00:00 for just Date.<br><br>The value **must not** include the timezone component.<br>|
|toStatementDateTime|query|string(date-time)|false|The UTC ISO 8601 Date Time to filter statements TO.<br><br>Note: Time component is optional - set to 00:00:00 for just Date.<br><br>The value **must not** include the timezone component.<br>|
|x-client-id|header|string|false|Only used if an ASPSP requires the client ID in order to return rate limit headers. <br><br>TPPs __must__ refer to ASPSP developer portals for further information on any rate limit policies, if the headers are supported and any additional requirements.<br><br>This header __must not__ be used for client authentication<br>|

> Example responses

> 200 Response

```json
{
  "Data": {
    "Statement": [
      {
        "AccountId": "22289",
        "StatementId": "8sfhke-sifhkeuf-97813",
        "StatementReference": "002",
        "Type": "RegularPeriodic",
        "StartDateTime": "2017-07-12T00:00:00+00:00",
        "EndDateTime": "2017-07-12T00:00:00+00:00",
        "CreationDateTime": "2024-05-29T00:00:00Z",
        "StatementDescription": [
          "August 2017 Statement"
        ],
        "StatementBenefit": [
          {
            "Type": "UK.OBIE.Cashback",
            "Amount": {
              "Amount": "1209.06",
              "Currency": "GBP"
            }
          }
        ],
        "StatementFee": [
          {
            "Description": "International usage charge",
            "CreditDebitIndicator": "Credit",
            "Type": "UK.OBIE.Annual",
            "Rate": 0.05,
            "RateType": "UK.OBIE.AER",
            "Frequency": "UK.OBIE.StatementMonthly",
            "Amount": {
              "Amount": "1209.06",
              "Currency": "GBP"
            }
          }
        ],
        "StatementInterest": [
          {
            "Description": "Interest occurred over statement duration",
            "CreditDebitIndicator": "Credit",
            "Type": "UK.OBIE.Total",
            "Rate": 0.05,
            "RateType": "UK.OBIE.FixedRate",
            "Frequency": "UK.OBIE.Monthly",
            "Amount": {
              "Amount": "1209.06",
              "Currency": "GBP"
            }
          }
        ],
        "StatementAmount": [
          {
            "CreditDebitIndicator": "Credit",
            "Type": "UK.OBIE.CreditLimit",
            "Amount": {
              "Amount": "1209.06",
              "Currency": "GBP",
              "SubType": "BCUR"
            },
            "LocalAmount": {
              "Amount": "1209.06",
              "Currency": "GBP",
              "SubType": "LCUR"
            }
          }
        ],
        "StatementDateTime": [
          {
            "DateTime": "2024-05-29T00:00:00Z",
            "Type": "UK.OBIE.NextStatement"
          }
        ],
        "StatementRate": [
          {
            "Rate": "0.224",
            "Type": "UK.OBIE.AnnualCash"
          }
        ],
        "StatementValue": [
          {
            "Value": "string",
            "Type": "UK.OBIE.Credit"
          }
        ],
        "TotalValue": {
          "Amount": "1209.06",
          "Currency": "GBP"
        }
      }
    ]
  },
  "Links": {
    "Self": "http://example.com",
    "First": "http://example.com",
    "Prev": "http://example.com",
    "Next": "http://example.com",
    "Last": "http://example.com"
  },
  "Meta": {
    "TotalPages": 0,
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z"
  }
}
```

> 400 Response

```json
{
  "Id": "string",
  "Code": "400 BadRequest",
  "Message": "There is something wrong with the request parameters provided",
  "Errors": [
    {
      "ErrorCode": "U001",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ]
}
```

> 403 Response

```json
{
  "Id": "string",
  "Code": "400 BadRequest",
  "Message": "There is something wrong with the request parameters provided",
  "Errors": [
    {
      "ErrorCode": "U001",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ]
}
```

> 500 Response

```json
{
  "Id": "string",
  "Code": "400 BadRequest",
  "Message": "There is something wrong with the request parameters provided",
  "Errors": [
    {
      "ErrorCode": "U001",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ]
}
```

<h3 id="get-statements-for-an-accountid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Statements Read|[OBReadStatement2](#schemaobreadstatement2)|
|400|Bad Request|Bad request|[OBErrorResponse1](#schemaoberrorresponse1)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|[OBErrorResponse1](#schemaoberrorresponse1)|
|404|Not Found|Not found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|406|Not Acceptable|Not Acceptable|None|
|429|Too Many Requests|Too Many Requests|None|
|500|Internal Server Error|Internal Server Error|[OBErrorResponse1](#schemaoberrorresponse1)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|200|RateLimit-Policy|string||TPPs __must__ refer to ASPSP developer portals for further information on any rate limit policies, if the headers are supported and any additional requirements.<br><br>A non-empty list of Quota Policy Items. The Item value __MUST__ be a String.<br><br>Example:<br>`RateLimit-Policy: "default";q=100;w=10`<br><br>The **REQUIRED** "q" parameter indicates the quota allocated by this policy measured in quota units.<br><br>The **OPTIONAL** "w" parameter value conveys a time window.<br>|
|200|RateLimit|string||TPPs __must__ refer to ASPSP developer portals for further information on any rate limit policies, if the headers are supported and any additional requirements.<br><br>A server uses the "RateLimit" response header field to communicate the current service limit for a quota policy for a particular partition key.<br><br>Example:<br>`RateLimit: "default";r=50;t=30`<br><br>The **REQUIRED** "r" parameter value conveys the remaining quota units for the identified policy.<br><br>The **OPTIONAL** "t" parameter value conveys the time window reset time for the identified policy.<br>|
|400|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|401|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|404|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|405|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|406|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|429|Retry-After|integer||Number in seconds to wait|
|429|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
PSUOAuth2Security ( Scopes: accounts )
</aside>

## Get Statement by StatementId for an AccountId

<a id="opIdGetAccountsAccountIdStatementsStatementId"></a>

> Code samples

```bash
curl http://localhost:3000/accounts/string/statements/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /accounts/{AccountId}/statements/{StatementId}`

Enables an AISP to retrieve the statement information resource for a specific statement.

<h3 id="get-statement-by-statementid-for-an-accountid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|StatementId|path|string|true|StatementId|
|AccountId|path|string|true|AccountId|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. <br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: <br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|
|x-client-id|header|string|false|Only used if an ASPSP requires the client ID in order to return rate limit headers. <br><br>TPPs __must__ refer to ASPSP developer portals for further information on any rate limit policies, if the headers are supported and any additional requirements.<br><br>This header __must not__ be used for client authentication<br>|

> Example responses

> 200 Response

```json
{
  "Data": {
    "Statement": [
      {
        "AccountId": "22289",
        "StatementId": "8sfhke-sifhkeuf-97813",
        "StatementReference": "002",
        "Type": "RegularPeriodic",
        "StartDateTime": "2017-07-12T00:00:00+00:00",
        "EndDateTime": "2017-07-12T00:00:00+00:00",
        "CreationDateTime": "2024-05-29T00:00:00Z",
        "StatementDescription": [
          "August 2017 Statement"
        ],
        "StatementBenefit": [
          {
            "Type": "UK.OBIE.Cashback",
            "Amount": {
              "Amount": "1209.06",
              "Currency": "GBP"
            }
          }
        ],
        "StatementFee": [
          {
            "Description": "International usage charge",
            "CreditDebitIndicator": "Credit",
            "Type": "UK.OBIE.Annual",
            "Rate": 0.05,
            "RateType": "UK.OBIE.AER",
            "Frequency": "UK.OBIE.StatementMonthly",
            "Amount": {
              "Amount": "1209.06",
              "Currency": "GBP"
            }
          }
        ],
        "StatementInterest": [
          {
            "Description": "Interest occurred over statement duration",
            "CreditDebitIndicator": "Credit",
            "Type": "UK.OBIE.Total",
            "Rate": 0.05,
            "RateType": "UK.OBIE.FixedRate",
            "Frequency": "UK.OBIE.Monthly",
            "Amount": {
              "Amount": "1209.06",
              "Currency": "GBP"
            }
          }
        ],
        "StatementAmount": [
          {
            "CreditDebitIndicator": "Credit",
            "Type": "UK.OBIE.CreditLimit",
            "Amount": {
              "Amount": "1209.06",
              "Currency": "GBP",
              "SubType": "BCUR"
            },
            "LocalAmount": {
              "Amount": "1209.06",
              "Currency": "GBP",
              "SubType": "LCUR"
            }
          }
        ],
        "StatementDateTime": [
          {
            "DateTime": "2024-05-29T00:00:00Z",
            "Type": "UK.OBIE.NextStatement"
          }
        ],
        "StatementRate": [
          {
            "Rate": "0.224",
            "Type": "UK.OBIE.AnnualCash"
          }
        ],
        "StatementValue": [
          {
            "Value": "string",
            "Type": "UK.OBIE.Credit"
          }
        ],
        "TotalValue": {
          "Amount": "1209.06",
          "Currency": "GBP"
        }
      }
    ]
  },
  "Links": {
    "Self": "http://example.com",
    "First": "http://example.com",
    "Prev": "http://example.com",
    "Next": "http://example.com",
    "Last": "http://example.com"
  },
  "Meta": {
    "TotalPages": 0,
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z"
  }
}
```

> 400 Response

```json
{
  "Id": "string",
  "Code": "400 BadRequest",
  "Message": "There is something wrong with the request parameters provided",
  "Errors": [
    {
      "ErrorCode": "U001",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ]
}
```

> 403 Response

```json
{
  "Id": "string",
  "Code": "400 BadRequest",
  "Message": "There is something wrong with the request parameters provided",
  "Errors": [
    {
      "ErrorCode": "U001",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ]
}
```

> 500 Response

```json
{
  "Id": "string",
  "Code": "400 BadRequest",
  "Message": "There is something wrong with the request parameters provided",
  "Errors": [
    {
      "ErrorCode": "U001",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ]
}
```

<h3 id="get-statement-by-statementid-for-an-accountid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Statements Read|[OBReadStatement2](#schemaobreadstatement2)|
|400|Bad Request|Bad request|[OBErrorResponse1](#schemaoberrorresponse1)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|[OBErrorResponse1](#schemaoberrorresponse1)|
|404|Not Found|Not found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|406|Not Acceptable|Not Acceptable|None|
|429|Too Many Requests|Too Many Requests|None|
|500|Internal Server Error|Internal Server Error|[OBErrorResponse1](#schemaoberrorresponse1)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|200|RateLimit-Policy|string||TPPs __must__ refer to ASPSP developer portals for further information on any rate limit policies, if the headers are supported and any additional requirements.<br><br>A non-empty list of Quota Policy Items. The Item value __MUST__ be a String.<br><br>Example:<br>`RateLimit-Policy: "default";q=100;w=10`<br><br>The **REQUIRED** "q" parameter indicates the quota allocated by this policy measured in quota units.<br><br>The **OPTIONAL** "w" parameter value conveys a time window.<br>|
|200|RateLimit|string||TPPs __must__ refer to ASPSP developer portals for further information on any rate limit policies, if the headers are supported and any additional requirements.<br><br>A server uses the "RateLimit" response header field to communicate the current service limit for a quota policy for a particular partition key.<br><br>Example:<br>`RateLimit: "default";r=50;t=30`<br><br>The **REQUIRED** "r" parameter value conveys the remaining quota units for the identified policy.<br><br>The **OPTIONAL** "t" parameter value conveys the time window reset time for the identified policy.<br>|
|400|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|401|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|404|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|405|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|406|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|429|Retry-After|integer||Number in seconds to wait|
|429|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
PSUOAuth2Security ( Scopes: accounts )
</aside>

## Get Statement file by StatementId for an AccountId

<a id="opIdGetAccountsAccountIdStatementsStatementIdFile"></a>

> Code samples

```bash
curl http://localhost:3000/accounts/string/statements/string/file \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /accounts/{AccountId}/statements/{StatementId}/file`

Enables an AISP to retrieve a non-json representation of a specific statement.

<h3 id="get-statement-file-by-statementid-for-an-accountid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|StatementId|path|string|true|StatementId|
|AccountId|path|string|true|AccountId|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. <br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: <br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|
|x-client-id|header|string|false|Only used if an ASPSP requires the client ID in order to return rate limit headers. <br><br>TPPs __must__ refer to ASPSP developer portals for further information on any rate limit policies, if the headers are supported and any additional requirements.<br><br>This header __must not__ be used for client authentication<br>|

> Example responses

> 200 Response

```json
{}
```

> 400 Response

```json
{
  "Id": "string",
  "Code": "400 BadRequest",
  "Message": "There is something wrong with the request parameters provided",
  "Errors": [
    {
      "ErrorCode": "U001",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ]
}
```

> 403 Response

```json
{
  "Id": "string",
  "Code": "400 BadRequest",
  "Message": "There is something wrong with the request parameters provided",
  "Errors": [
    {
      "ErrorCode": "U001",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ]
}
```

> 500 Response

```json
{
  "Id": "string",
  "Code": "400 BadRequest",
  "Message": "There is something wrong with the request parameters provided",
  "Errors": [
    {
      "ErrorCode": "U001",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ]
}
```

<h3 id="get-statement-file-by-statementid-for-an-accountid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Statements Read<br><br>ASPSP will specify all available content types<br>|[File](#schemafile)|
|400|Bad Request|Bad request|[OBErrorResponse1](#schemaoberrorresponse1)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|[OBErrorResponse1](#schemaoberrorresponse1)|
|404|Not Found|Not found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|406|Not Acceptable|Not Acceptable|None|
|429|Too Many Requests|Too Many Requests|None|
|500|Internal Server Error|Internal Server Error|[OBErrorResponse1](#schemaoberrorresponse1)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|200|RateLimit-Policy|string||TPPs __must__ refer to ASPSP developer portals for further information on any rate limit policies, if the headers are supported and any additional requirements.<br><br>A non-empty list of Quota Policy Items. The Item value __MUST__ be a String.<br><br>Example:<br>`RateLimit-Policy: "default";q=100;w=10`<br><br>The **REQUIRED** "q" parameter indicates the quota allocated by this policy measured in quota units.<br><br>The **OPTIONAL** "w" parameter value conveys a time window.<br>|
|200|RateLimit|string||TPPs __must__ refer to ASPSP developer portals for further information on any rate limit policies, if the headers are supported and any additional requirements.<br><br>A server uses the "RateLimit" response header field to communicate the current service limit for a quota policy for a particular partition key.<br><br>Example:<br>`RateLimit: "default";r=50;t=30`<br><br>The **REQUIRED** "r" parameter value conveys the remaining quota units for the identified policy.<br><br>The **OPTIONAL** "t" parameter value conveys the time window reset time for the identified policy.<br>|
|400|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|401|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|404|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|405|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|406|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|429|Retry-After|integer||Number in seconds to wait|
|429|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
PSUOAuth2Security ( Scopes: accounts )
</aside>

## Get Statement Transactions for an AccountId

<a id="opIdGetAccountsAccountIdStatementsStatementIdTransactions"></a>

> Code samples

```bash
curl http://localhost:3000/accounts/string/statements/string/transactions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /accounts/{AccountId}/statements/{StatementId}/transactions`

Enables an AISP to retrieve transactions that appear on a selected statement for a specific PSU account.

<h3 id="get-statement-transactions-for-an-accountid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|StatementId|path|string|true|StatementId|
|AccountId|path|string|true|AccountId|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. <br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: <br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|
|x-client-id|header|string|false|Only used if an ASPSP requires the client ID in order to return rate limit headers. <br><br>TPPs __must__ refer to ASPSP developer portals for further information on any rate limit policies, if the headers are supported and any additional requirements.<br><br>This header __must not__ be used for client authentication<br>|

> Example responses

> 200 Response

```json
{
  "Data": {
    "Transaction": [
      {
        "AccountId": "22289",
        "TransactionId": "string",
        "TransactionReference": "string",
        "StatementReference": [
          "002"
        ],
        "CreditDebitIndicator": "Credit",
        "Status": "BOOK",
        "TransactionMutability": "Mutable",
        "BookingDateTime": "1970-01-01T00:00:00Z",
        "ValueDateTime": "1970-01-01T00:00:00Z",
        "TransactionInformation": "string",
        "AddressLine": "string",
        "Amount": {
          "Amount": "1209.06",
          "Currency": "GBP"
        },
        "ChargeAmount": {
          "Amount": "1209.06",
          "Currency": "GBP"
        },
        "CurrencyExchange": {
          "SourceCurrency": "string",
          "TargetCurrency": "string",
          "UnitCurrency": "string",
          "ExchangeRate": 0,
          "ContractIdentification": "string",
          "QuotationDate": "1970-01-01T00:00:00Z",
          "InstructedAmount": {
            "Amount": "1209.06",
            "Currency": "GBP"
          }
        },
        "BankTransactionCode": {
          "Code": "string",
          "SubCode": "string"
        },
        "ProprietaryBankTransactionCode": {
          "Code": "string",
          "Issuer": "string"
        },
        "ExtendedProprietaryBankTransactionCodes": [
          {
            "Code": "string",
            "Issuer": "string",
            "Description": "string"
          }
        ],
        "Balance": {
          "CreditDebitIndicator": "Credit",
          "Type": "CLAV",
          "Amount": {
            "Amount": "1209.06",
            "Currency": "GBP"
          }
        },
        "MerchantDetails": {
          "MerchantName": "string",
          "MerchantCategoryCode": "stri"
        },
        "CreditorAgent": {
          "SchemeName": "UK.OBIE.BICFI",
          "Identification": "string",
          "Name": "Agent Name",
          "LEI": "IZ9Q00LZEVUKWCQY6X15",
          "PostalAddress": {
            "AddressType": "BIZZ",
            "Department": "Finance",
            "SubDepartment": "Payroll",
            "StreetName": "Bank Street",
            "BuildingNumber": "11",
            "BuildingName": "string",
            "Floor": "11",
            "UnitNumber": "A88",
            "Room": "Basement 03",
            "PostBox": "PO Box 123456",
            "TownLocationName": "London",
            "DistrictName": "Greater London",
            "CareOf": "Jane Smith",
            "PostCode": "EC2N 4AG",
            "TownName": "London",
            "CountrySubDivision": "string",
            "Country": "string",
            "AddressLine": [
              "string"
            ]
          }
        },
        "CreditorAccount": {
          "SchemeName": "string",
          "Identification": "80200112344562",
          "Name": "Jane Smith",
          "SecondaryIdentification": "87562298675897",
          "Proxy": {
            "Identification": "2360549017905188",
            "Code": "TELE",
            "Type": "string"
          }
        },
        "DebtorAgent": {
          "SchemeName": "UK.OBIE.BICFI",
          "Identification": "string",
          "Name": "Agent Name",
          "LEI": "IZ9Q00LZEVUKWCQY6X15",
          "PostalAddress": {
            "AddressType": "BIZZ",
            "Department": "Finance",
            "SubDepartment": "Payroll",
            "StreetName": "Bank Street",
            "BuildingNumber": "11",
            "BuildingName": "string",
            "Floor": "11",
            "UnitNumber": "A88",
            "Room": "Basement 03",
            "PostBox": "PO Box 123456",
            "TownLocationName": "London",
            "DistrictName": "Greater London",
            "CareOf": "Jane Smith",
            "PostCode": "EC2N 4AG",
            "TownName": "London",
            "CountrySubDivision": "string",
            "Country": "string",
            "AddressLine": [
              "string"
            ]
          }
        },
        "DebtorAccount": {
          "SchemeName": "string",
          "Identification": "80200112344562",
          "Name": "Jane Smith",
          "SecondaryIdentification": "87562298675897",
          "Proxy": {
            "Identification": "2360549017905188",
            "Code": "TELE",
            "Type": "string"
          }
        },
        "CardInstrument": {
          "CardSchemeName": "AmericanExpress",
          "AuthorisationType": "ConsumerDevice",
          "Name": "string",
          "Identification": "string"
        },
        "SupplementaryData": {},
        "CategoryPurposeCode": "BONU",
        "PaymentPurposeCode": "BKDF",
        "UltimateCreditor": {
          "Name": "string",
          "Identification": "string",
          "LEI": "IZ9Q00LZEVUKWCQY6X15",
          "SchemeName": "string",
          "PostalAddress": {
            "AddressType": "BIZZ",
            "Department": "Finance",
            "SubDepartment": "Payroll",
            "StreetName": "Bank Street",
            "BuildingNumber": "11",
            "BuildingName": "string",
            "Floor": "11",
            "UnitNumber": "A88",
            "Room": "Basement 03",
            "PostBox": "PO Box 123456",
            "TownLocationName": "London",
            "DistrictName": "Greater London",
            "CareOf": "Jane Smith",
            "PostCode": "EC2N 4AG",
            "TownName": "London",
            "CountrySubDivision": "string",
            "Country": "string",
            "AddressLine": [
              "string"
            ]
          }
        },
        "UltimateDebtor": {
          "Name": "string",
          "Identification": "string",
          "LEI": "IZ9Q00LZEVUKWCQY6X15",
          "SchemeName": "string",
          "PostalAddress": {
            "AddressType": "BIZZ",
            "Department": "Finance",
            "SubDepartment": "Payroll",
            "StreetName": "Bank Street",
            "BuildingNumber": "11",
            "BuildingName": "string",
            "Floor": "11",
            "UnitNumber": "A88",
            "Room": "Basement 03",
            "PostBox": "PO Box 123456",
            "TownLocationName": "London",
            "DistrictName": "Greater London",
            "CareOf": "Jane Smith",
            "PostCode": "EC2N 4AG",
            "TownName": "London",
            "CountrySubDivision": "string",
            "Country": "string",
            "AddressLine": [
              "string"
            ]
          }
        },
        "IntermediaryAgent1": {
          "Name": "string",
          "SchemeName": "string",
          "Identification": "string",
          "LEI": "IZ9Q00LZEVUKWCQY6X15",
          "PostalAddress": {
            "AddressType": "BIZZ",
            "Department": "Finance",
            "SubDepartment": "Payroll",
            "StreetName": "Bank Street",
            "BuildingNumber": "11",
            "BuildingName": "string",
            "Floor": "11",
            "UnitNumber": "A88",
            "Room": "Basement 03",
            "PostBox": "PO Box 123456",
            "TownLocationName": "London",
            "DistrictName": "Greater London",
            "CareOf": "Jane Smith",
            "PostCode": "EC2N 4AG",
            "TownName": "London",
            "CountrySubDivision": "string",
            "Country": "string",
            "AddressLine": [
              "string"
            ]
          },
          "ProcessingStatus": "PDNG"
        },
        "IntermediaryAgent2": {
          "Name": "string",
          "SchemeName": "string",
          "Identification": "string",
          "LEI": "IZ9Q00LZEVUKWCQY6X15",
          "PostalAddress": {
            "AddressType": "BIZZ",
            "Department": "Finance",
            "SubDepartment": "Payroll",
            "StreetName": "Bank Street",
            "BuildingNumber": "11",
            "BuildingName": "string",
            "Floor": "11",
            "UnitNumber": "A88",
            "Room": "Basement 03",
            "PostBox": "PO Box 123456",
            "TownLocationName": "London",
            "DistrictName": "Greater London",
            "CareOf": "Jane Smith",
            "PostCode": "EC2N 4AG",
            "TownName": "London",
            "CountrySubDivision": "string",
            "Country": "string",
            "AddressLine": [
              "string"
            ]
          },
          "ProcessingStatus": "PDNG"
        },
        "IntermediaryAgent3": {
          "Name": "string",
          "SchemeName": "string",
          "Identification": "string",
          "LEI": "IZ9Q00LZEVUKWCQY6X15",
          "PostalAddress": {
            "AddressType": "BIZZ",
            "Department": "Finance",
            "SubDepartment": "Payroll",
            "StreetName": "Bank Street",
            "BuildingNumber": "11",
            "BuildingName": "string",
            "Floor": "11",
            "UnitNumber": "A88",
            "Room": "Basement 03",
            "PostBox": "PO Box 123456",
            "TownLocationName": "London",
            "DistrictName": "Greater London",
            "CareOf": "Jane Smith",
            "PostCode": "EC2N 4AG",
            "TownName": "London",
            "CountrySubDivision": "string",
            "Country": "string",
            "AddressLine": [
              "string"
            ]
          },
          "ProcessingStatus": "PDNG"
        }
      }
    ]
  },
  "Links": {
    "Self": "http://example.com",
    "First": "http://example.com",
    "Prev": "http://example.com",
    "Next": "http://example.com",
    "Last": "http://example.com"
  },
  "Meta": {
    "TotalPages": 0,
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z"
  }
}
```

> 400 Response

```json
{
  "Id": "string",
  "Code": "400 BadRequest",
  "Message": "There is something wrong with the request parameters provided",
  "Errors": [
    {
      "ErrorCode": "U001",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ]
}
```

> 403 Response

```json
{
  "Id": "string",
  "Code": "400 BadRequest",
  "Message": "There is something wrong with the request parameters provided",
  "Errors": [
    {
      "ErrorCode": "U001",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ]
}
```

> 500 Response

```json
{
  "Id": "string",
  "Code": "400 BadRequest",
  "Message": "There is something wrong with the request parameters provided",
  "Errors": [
    {
      "ErrorCode": "U001",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ]
}
```

<h3 id="get-statement-transactions-for-an-accountid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Transactions Read|[OBReadTransaction6](#schemaobreadtransaction6)|
|400|Bad Request|Bad request|[OBErrorResponse1](#schemaoberrorresponse1)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|[OBErrorResponse1](#schemaoberrorresponse1)|
|404|Not Found|Not found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|406|Not Acceptable|Not Acceptable|None|
|429|Too Many Requests|Too Many Requests|None|
|500|Internal Server Error|Internal Server Error|[OBErrorResponse1](#schemaoberrorresponse1)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|200|RateLimit-Policy|string||TPPs __must__ refer to ASPSP developer portals for further information on any rate limit policies, if the headers are supported and any additional requirements.<br><br>A non-empty list of Quota Policy Items. The Item value __MUST__ be a String.<br><br>Example:<br>`RateLimit-Policy: "default";q=100;w=10`<br><br>The **REQUIRED** "q" parameter indicates the quota allocated by this policy measured in quota units.<br><br>The **OPTIONAL** "w" parameter value conveys a time window.<br>|
|200|RateLimit|string||TPPs __must__ refer to ASPSP developer portals for further information on any rate limit policies, if the headers are supported and any additional requirements.<br><br>A server uses the "RateLimit" response header field to communicate the current service limit for a quota policy for a particular partition key.<br><br>Example:<br>`RateLimit: "default";r=50;t=30`<br><br>The **REQUIRED** "r" parameter value conveys the remaining quota units for the identified policy.<br><br>The **OPTIONAL** "t" parameter value conveys the time window reset time for the identified policy.<br>|
|400|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|401|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|404|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|405|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|406|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|429|Retry-After|integer||Number in seconds to wait|
|429|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
PSUOAuth2Security ( Scopes: accounts )
</aside>

## Get Statements

<a id="opIdGetStatements"></a>

> Code samples

```bash
curl http://localhost:3000/statements \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /statements`

Enables an AISP to retrieve statement information for account(s) that the PSU has consented to.

<h3 id="get-statements-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. <br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: <br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|fromStatementDateTime|query|string(date-time)|false|The UTC ISO 8601 Date Time to filter statements FROM.<br><br>Note: Time component is optional - set to 00:00:00 for just Date.<br><br>The value **must not** include the timezone component.<br>|
|toStatementDateTime|query|string(date-time)|false|The UTC ISO 8601 Date Time to filter statements TO.<br><br>Note: Time component is optional - set to 00:00:00 for just Date.<br><br>The value **must not** include the timezone component.<br>|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|
|x-client-id|header|string|false|Only used if an ASPSP requires the client ID in order to return rate limit headers. <br><br>TPPs __must__ refer to ASPSP developer portals for further information on any rate limit policies, if the headers are supported and any additional requirements.<br><br>This header __must not__ be used for client authentication<br>|

> Example responses

> 200 Response

```json
{
  "Data": {
    "Statement": [
      {
        "AccountId": "22289",
        "StatementId": "8sfhke-sifhkeuf-97813",
        "StatementReference": "002",
        "Type": "RegularPeriodic",
        "StartDateTime": "2017-07-12T00:00:00+00:00",
        "EndDateTime": "2017-07-12T00:00:00+00:00",
        "CreationDateTime": "2024-05-29T00:00:00Z",
        "StatementDescription": [
          "August 2017 Statement"
        ],
        "StatementBenefit": [
          {
            "Type": "UK.OBIE.Cashback",
            "Amount": {
              "Amount": "1209.06",
              "Currency": "GBP"
            }
          }
        ],
        "StatementFee": [
          {
            "Description": "International usage charge",
            "CreditDebitIndicator": "Credit",
            "Type": "UK.OBIE.Annual",
            "Rate": 0.05,
            "RateType": "UK.OBIE.AER",
            "Frequency": "UK.OBIE.StatementMonthly",
            "Amount": {
              "Amount": "1209.06",
              "Currency": "GBP"
            }
          }
        ],
        "StatementInterest": [
          {
            "Description": "Interest occurred over statement duration",
            "CreditDebitIndicator": "Credit",
            "Type": "UK.OBIE.Total",
            "Rate": 0.05,
            "RateType": "UK.OBIE.FixedRate",
            "Frequency": "UK.OBIE.Monthly",
            "Amount": {
              "Amount": "1209.06",
              "Currency": "GBP"
            }
          }
        ],
        "StatementAmount": [
          {
            "CreditDebitIndicator": "Credit",
            "Type": "UK.OBIE.CreditLimit",
            "Amount": {
              "Amount": "1209.06",
              "Currency": "GBP",
              "SubType": "BCUR"
            },
            "LocalAmount": {
              "Amount": "1209.06",
              "Currency": "GBP",
              "SubType": "LCUR"
            }
          }
        ],
        "StatementDateTime": [
          {
            "DateTime": "2024-05-29T00:00:00Z",
            "Type": "UK.OBIE.NextStatement"
          }
        ],
        "StatementRate": [
          {
            "Rate": "0.224",
            "Type": "UK.OBIE.AnnualCash"
          }
        ],
        "StatementValue": [
          {
            "Value": "string",
            "Type": "UK.OBIE.Credit"
          }
        ],
        "TotalValue": {
          "Amount": "1209.06",
          "Currency": "GBP"
        }
      }
    ]
  },
  "Links": {
    "Self": "http://example.com",
    "First": "http://example.com",
    "Prev": "http://example.com",
    "Next": "http://example.com",
    "Last": "http://example.com"
  },
  "Meta": {
    "TotalPages": 0,
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z"
  }
}
```

> 400 Response

```json
{
  "Id": "string",
  "Code": "400 BadRequest",
  "Message": "There is something wrong with the request parameters provided",
  "Errors": [
    {
      "ErrorCode": "U001",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ]
}
```

> 403 Response

```json
{
  "Id": "string",
  "Code": "400 BadRequest",
  "Message": "There is something wrong with the request parameters provided",
  "Errors": [
    {
      "ErrorCode": "U001",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ]
}
```

> 500 Response

```json
{
  "Id": "string",
  "Code": "400 BadRequest",
  "Message": "There is something wrong with the request parameters provided",
  "Errors": [
    {
      "ErrorCode": "U001",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ]
}
```

<h3 id="get-statements-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Statements Read|[OBReadStatement2](#schemaobreadstatement2)|
|400|Bad Request|Bad request|[OBErrorResponse1](#schemaoberrorresponse1)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|[OBErrorResponse1](#schemaoberrorresponse1)|
|404|Not Found|Not found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|406|Not Acceptable|Not Acceptable|None|
|429|Too Many Requests|Too Many Requests|None|
|500|Internal Server Error|Internal Server Error|[OBErrorResponse1](#schemaoberrorresponse1)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|200|RateLimit-Policy|string||TPPs __must__ refer to ASPSP developer portals for further information on any rate limit policies, if the headers are supported and any additional requirements.<br><br>A non-empty list of Quota Policy Items. The Item value __MUST__ be a String.<br><br>Example:<br>`RateLimit-Policy: "default";q=100;w=10`<br><br>The **REQUIRED** "q" parameter indicates the quota allocated by this policy measured in quota units.<br><br>The **OPTIONAL** "w" parameter value conveys a time window.<br>|
|200|RateLimit|string||TPPs __must__ refer to ASPSP developer portals for further information on any rate limit policies, if the headers are supported and any additional requirements.<br><br>A server uses the "RateLimit" response header field to communicate the current service limit for a quota policy for a particular partition key.<br><br>Example:<br>`RateLimit: "default";r=50;t=30`<br><br>The **REQUIRED** "r" parameter value conveys the remaining quota units for the identified policy.<br><br>The **OPTIONAL** "t" parameter value conveys the time window reset time for the identified policy.<br>|
|400|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|401|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|404|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|405|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|406|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|429|Retry-After|integer||Number in seconds to wait|
|429|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
PSUOAuth2Security ( Scopes: accounts )
</aside>

<h1 id="account-and-transaction-api-specification-transactions">Transactions</h1>

## Get Transactions for an AccountId

<a id="opIdGetAccountsAccountIdTransactions"></a>

> Code samples

```bash
curl http://localhost:3000/accounts/string/transactions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /accounts/{AccountId}/transactions`

Enables an AISP to retrieve transaction information for a specific PSU account.

<h3 id="get-transactions-for-an-accountid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|AccountId|path|string|true|AccountId|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. <br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: <br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|
|fromBookingDateTime|query|string(date-time)|false|The UTC ISO 8601 Date Time to filter transactions FROM.<br><br>Note: Time component is optional - set to 00:00:00 for just Date.<br><br>The value **must not** include the timezone component.<br>|
|toBookingDateTime|query|string(date-time)|false|The UTC ISO 8601 Date Time to filter transactions TO.<br><br>Note: Time component is optional - set to 00:00:00 for just Date.<br><br>The value **must not** include the timezone component.<br>|
|x-client-id|header|string|false|Only used if an ASPSP requires the client ID in order to return rate limit headers. <br><br>TPPs __must__ refer to ASPSP developer portals for further information on any rate limit policies, if the headers are supported and any additional requirements.<br><br>This header __must not__ be used for client authentication<br>|

> Example responses

> 200 Response

```json
{
  "Data": {
    "Transaction": [
      {
        "AccountId": "22289",
        "TransactionId": "string",
        "TransactionReference": "string",
        "StatementReference": [
          "002"
        ],
        "CreditDebitIndicator": "Credit",
        "Status": "BOOK",
        "TransactionMutability": "Mutable",
        "BookingDateTime": "1970-01-01T00:00:00Z",
        "ValueDateTime": "1970-01-01T00:00:00Z",
        "TransactionInformation": "string",
        "AddressLine": "string",
        "Amount": {
          "Amount": "1209.06",
          "Currency": "GBP"
        },
        "ChargeAmount": {
          "Amount": "1209.06",
          "Currency": "GBP"
        },
        "CurrencyExchange": {
          "SourceCurrency": "string",
          "TargetCurrency": "string",
          "UnitCurrency": "string",
          "ExchangeRate": 0,
          "ContractIdentification": "string",
          "QuotationDate": "1970-01-01T00:00:00Z",
          "InstructedAmount": {
            "Amount": "1209.06",
            "Currency": "GBP"
          }
        },
        "BankTransactionCode": {
          "Code": "string",
          "SubCode": "string"
        },
        "ProprietaryBankTransactionCode": {
          "Code": "string",
          "Issuer": "string"
        },
        "ExtendedProprietaryBankTransactionCodes": [
          {
            "Code": "string",
            "Issuer": "string",
            "Description": "string"
          }
        ],
        "Balance": {
          "CreditDebitIndicator": "Credit",
          "Type": "CLAV",
          "Amount": {
            "Amount": "1209.06",
            "Currency": "GBP"
          }
        },
        "MerchantDetails": {
          "MerchantName": "string",
          "MerchantCategoryCode": "stri"
        },
        "CreditorAgent": {
          "SchemeName": "UK.OBIE.BICFI",
          "Identification": "string",
          "Name": "Agent Name",
          "LEI": "IZ9Q00LZEVUKWCQY6X15",
          "PostalAddress": {
            "AddressType": "BIZZ",
            "Department": "Finance",
            "SubDepartment": "Payroll",
            "StreetName": "Bank Street",
            "BuildingNumber": "11",
            "BuildingName": "string",
            "Floor": "11",
            "UnitNumber": "A88",
            "Room": "Basement 03",
            "PostBox": "PO Box 123456",
            "TownLocationName": "London",
            "DistrictName": "Greater London",
            "CareOf": "Jane Smith",
            "PostCode": "EC2N 4AG",
            "TownName": "London",
            "CountrySubDivision": "string",
            "Country": "string",
            "AddressLine": [
              "string"
            ]
          }
        },
        "CreditorAccount": {
          "SchemeName": "string",
          "Identification": "80200112344562",
          "Name": "Jane Smith",
          "SecondaryIdentification": "87562298675897",
          "Proxy": {
            "Identification": "2360549017905188",
            "Code": "TELE",
            "Type": "string"
          }
        },
        "DebtorAgent": {
          "SchemeName": "UK.OBIE.BICFI",
          "Identification": "string",
          "Name": "Agent Name",
          "LEI": "IZ9Q00LZEVUKWCQY6X15",
          "PostalAddress": {
            "AddressType": "BIZZ",
            "Department": "Finance",
            "SubDepartment": "Payroll",
            "StreetName": "Bank Street",
            "BuildingNumber": "11",
            "BuildingName": "string",
            "Floor": "11",
            "UnitNumber": "A88",
            "Room": "Basement 03",
            "PostBox": "PO Box 123456",
            "TownLocationName": "London",
            "DistrictName": "Greater London",
            "CareOf": "Jane Smith",
            "PostCode": "EC2N 4AG",
            "TownName": "London",
            "CountrySubDivision": "string",
            "Country": "string",
            "AddressLine": [
              "string"
            ]
          }
        },
        "DebtorAccount": {
          "SchemeName": "string",
          "Identification": "80200112344562",
          "Name": "Jane Smith",
          "SecondaryIdentification": "87562298675897",
          "Proxy": {
            "Identification": "2360549017905188",
            "Code": "TELE",
            "Type": "string"
          }
        },
        "CardInstrument": {
          "CardSchemeName": "AmericanExpress",
          "AuthorisationType": "ConsumerDevice",
          "Name": "string",
          "Identification": "string"
        },
        "SupplementaryData": {},
        "CategoryPurposeCode": "BONU",
        "PaymentPurposeCode": "BKDF",
        "UltimateCreditor": {
          "Name": "string",
          "Identification": "string",
          "LEI": "IZ9Q00LZEVUKWCQY6X15",
          "SchemeName": "string",
          "PostalAddress": {
            "AddressType": "BIZZ",
            "Department": "Finance",
            "SubDepartment": "Payroll",
            "StreetName": "Bank Street",
            "BuildingNumber": "11",
            "BuildingName": "string",
            "Floor": "11",
            "UnitNumber": "A88",
            "Room": "Basement 03",
            "PostBox": "PO Box 123456",
            "TownLocationName": "London",
            "DistrictName": "Greater London",
            "CareOf": "Jane Smith",
            "PostCode": "EC2N 4AG",
            "TownName": "London",
            "CountrySubDivision": "string",
            "Country": "string",
            "AddressLine": [
              "string"
            ]
          }
        },
        "UltimateDebtor": {
          "Name": "string",
          "Identification": "string",
          "LEI": "IZ9Q00LZEVUKWCQY6X15",
          "SchemeName": "string",
          "PostalAddress": {
            "AddressType": "BIZZ",
            "Department": "Finance",
            "SubDepartment": "Payroll",
            "StreetName": "Bank Street",
            "BuildingNumber": "11",
            "BuildingName": "string",
            "Floor": "11",
            "UnitNumber": "A88",
            "Room": "Basement 03",
            "PostBox": "PO Box 123456",
            "TownLocationName": "London",
            "DistrictName": "Greater London",
            "CareOf": "Jane Smith",
            "PostCode": "EC2N 4AG",
            "TownName": "London",
            "CountrySubDivision": "string",
            "Country": "string",
            "AddressLine": [
              "string"
            ]
          }
        },
        "IntermediaryAgent1": {
          "Name": "string",
          "SchemeName": "string",
          "Identification": "string",
          "LEI": "IZ9Q00LZEVUKWCQY6X15",
          "PostalAddress": {
            "AddressType": "BIZZ",
            "Department": "Finance",
            "SubDepartment": "Payroll",
            "StreetName": "Bank Street",
            "BuildingNumber": "11",
            "BuildingName": "string",
            "Floor": "11",
            "UnitNumber": "A88",
            "Room": "Basement 03",
            "PostBox": "PO Box 123456",
            "TownLocationName": "London",
            "DistrictName": "Greater London",
            "CareOf": "Jane Smith",
            "PostCode": "EC2N 4AG",
            "TownName": "London",
            "CountrySubDivision": "string",
            "Country": "string",
            "AddressLine": [
              "string"
            ]
          },
          "ProcessingStatus": "PDNG"
        },
        "IntermediaryAgent2": {
          "Name": "string",
          "SchemeName": "string",
          "Identification": "string",
          "LEI": "IZ9Q00LZEVUKWCQY6X15",
          "PostalAddress": {
            "AddressType": "BIZZ",
            "Department": "Finance",
            "SubDepartment": "Payroll",
            "StreetName": "Bank Street",
            "BuildingNumber": "11",
            "BuildingName": "string",
            "Floor": "11",
            "UnitNumber": "A88",
            "Room": "Basement 03",
            "PostBox": "PO Box 123456",
            "TownLocationName": "London",
            "DistrictName": "Greater London",
            "CareOf": "Jane Smith",
            "PostCode": "EC2N 4AG",
            "TownName": "London",
            "CountrySubDivision": "string",
            "Country": "string",
            "AddressLine": [
              "string"
            ]
          },
          "ProcessingStatus": "PDNG"
        },
        "IntermediaryAgent3": {
          "Name": "string",
          "SchemeName": "string",
          "Identification": "string",
          "LEI": "IZ9Q00LZEVUKWCQY6X15",
          "PostalAddress": {
            "AddressType": "BIZZ",
            "Department": "Finance",
            "SubDepartment": "Payroll",
            "StreetName": "Bank Street",
            "BuildingNumber": "11",
            "BuildingName": "string",
            "Floor": "11",
            "UnitNumber": "A88",
            "Room": "Basement 03",
            "PostBox": "PO Box 123456",
            "TownLocationName": "London",
            "DistrictName": "Greater London",
            "CareOf": "Jane Smith",
            "PostCode": "EC2N 4AG",
            "TownName": "London",
            "CountrySubDivision": "string",
            "Country": "string",
            "AddressLine": [
              "string"
            ]
          },
          "ProcessingStatus": "PDNG"
        }
      }
    ]
  },
  "Links": {
    "Self": "http://example.com",
    "First": "http://example.com",
    "Prev": "http://example.com",
    "Next": "http://example.com",
    "Last": "http://example.com"
  },
  "Meta": {
    "TotalPages": 0,
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z"
  }
}
```

> 400 Response

```json
{
  "Id": "string",
  "Code": "400 BadRequest",
  "Message": "There is something wrong with the request parameters provided",
  "Errors": [
    {
      "ErrorCode": "U001",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ]
}
```

> 403 Response

```json
{
  "Id": "string",
  "Code": "400 BadRequest",
  "Message": "There is something wrong with the request parameters provided",
  "Errors": [
    {
      "ErrorCode": "U001",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ]
}
```

> 500 Response

```json
{
  "Id": "string",
  "Code": "400 BadRequest",
  "Message": "There is something wrong with the request parameters provided",
  "Errors": [
    {
      "ErrorCode": "U001",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ]
}
```

<h3 id="get-transactions-for-an-accountid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Transactions Read|[OBReadTransaction6](#schemaobreadtransaction6)|
|400|Bad Request|Bad request|[OBErrorResponse1](#schemaoberrorresponse1)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|[OBErrorResponse1](#schemaoberrorresponse1)|
|405|Method Not Allowed|Method Not Allowed|None|
|406|Not Acceptable|Not Acceptable|None|
|429|Too Many Requests|Too Many Requests|None|
|500|Internal Server Error|Internal Server Error|[OBErrorResponse1](#schemaoberrorresponse1)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|200|RateLimit-Policy|string||TPPs __must__ refer to ASPSP developer portals for further information on any rate limit policies, if the headers are supported and any additional requirements.<br><br>A non-empty list of Quota Policy Items. The Item value __MUST__ be a String.<br><br>Example:<br>`RateLimit-Policy: "default";q=100;w=10`<br><br>The **REQUIRED** "q" parameter indicates the quota allocated by this policy measured in quota units.<br><br>The **OPTIONAL** "w" parameter value conveys a time window.<br>|
|200|RateLimit|string||TPPs __must__ refer to ASPSP developer portals for further information on any rate limit policies, if the headers are supported and any additional requirements.<br><br>A server uses the "RateLimit" response header field to communicate the current service limit for a quota policy for a particular partition key.<br><br>Example:<br>`RateLimit: "default";r=50;t=30`<br><br>The **REQUIRED** "r" parameter value conveys the remaining quota units for the identified policy.<br><br>The **OPTIONAL** "t" parameter value conveys the time window reset time for the identified policy.<br>|
|400|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|401|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|405|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|406|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|429|Retry-After|integer||Number in seconds to wait|
|429|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
PSUOAuth2Security ( Scopes: accounts )
</aside>

## Get Transactions

<a id="opIdGetTransactions"></a>

> Code samples

```bash
curl http://localhost:3000/transactions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /transactions`

Enables an AISP to retrieve transaction information for account(s) that the PSU has consented to.

<h3 id="get-transactions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. <br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: <br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|
|fromBookingDateTime|query|string(date-time)|false|The UTC ISO 8601 Date Time to filter transactions FROM.<br><br>Note: Time component is optional - set to 00:00:00 for just Date.<br><br>The value **must not** include the timezone component.<br>|
|toBookingDateTime|query|string(date-time)|false|The UTC ISO 8601 Date Time to filter transactions TO.<br><br>Note: Time component is optional - set to 00:00:00 for just Date.<br><br>The value **must not** include the timezone component.<br>|
|x-client-id|header|string|false|Only used if an ASPSP requires the client ID in order to return rate limit headers. <br><br>TPPs __must__ refer to ASPSP developer portals for further information on any rate limit policies, if the headers are supported and any additional requirements.<br><br>This header __must not__ be used for client authentication<br>|

> Example responses

> 200 Response

```json
{
  "Data": {
    "Transaction": [
      {
        "AccountId": "22289",
        "TransactionId": "string",
        "TransactionReference": "string",
        "StatementReference": [
          "002"
        ],
        "CreditDebitIndicator": "Credit",
        "Status": "BOOK",
        "TransactionMutability": "Mutable",
        "BookingDateTime": "1970-01-01T00:00:00Z",
        "ValueDateTime": "1970-01-01T00:00:00Z",
        "TransactionInformation": "string",
        "AddressLine": "string",
        "Amount": {
          "Amount": "1209.06",
          "Currency": "GBP"
        },
        "ChargeAmount": {
          "Amount": "1209.06",
          "Currency": "GBP"
        },
        "CurrencyExchange": {
          "SourceCurrency": "string",
          "TargetCurrency": "string",
          "UnitCurrency": "string",
          "ExchangeRate": 0,
          "ContractIdentification": "string",
          "QuotationDate": "1970-01-01T00:00:00Z",
          "InstructedAmount": {
            "Amount": "1209.06",
            "Currency": "GBP"
          }
        },
        "BankTransactionCode": {
          "Code": "string",
          "SubCode": "string"
        },
        "ProprietaryBankTransactionCode": {
          "Code": "string",
          "Issuer": "string"
        },
        "ExtendedProprietaryBankTransactionCodes": [
          {
            "Code": "string",
            "Issuer": "string",
            "Description": "string"
          }
        ],
        "Balance": {
          "CreditDebitIndicator": "Credit",
          "Type": "CLAV",
          "Amount": {
            "Amount": "1209.06",
            "Currency": "GBP"
          }
        },
        "MerchantDetails": {
          "MerchantName": "string",
          "MerchantCategoryCode": "stri"
        },
        "CreditorAgent": {
          "SchemeName": "UK.OBIE.BICFI",
          "Identification": "string",
          "Name": "Agent Name",
          "LEI": "IZ9Q00LZEVUKWCQY6X15",
          "PostalAddress": {
            "AddressType": "BIZZ",
            "Department": "Finance",
            "SubDepartment": "Payroll",
            "StreetName": "Bank Street",
            "BuildingNumber": "11",
            "BuildingName": "string",
            "Floor": "11",
            "UnitNumber": "A88",
            "Room": "Basement 03",
            "PostBox": "PO Box 123456",
            "TownLocationName": "London",
            "DistrictName": "Greater London",
            "CareOf": "Jane Smith",
            "PostCode": "EC2N 4AG",
            "TownName": "London",
            "CountrySubDivision": "string",
            "Country": "string",
            "AddressLine": [
              "string"
            ]
          }
        },
        "CreditorAccount": {
          "SchemeName": "string",
          "Identification": "80200112344562",
          "Name": "Jane Smith",
          "SecondaryIdentification": "87562298675897",
          "Proxy": {
            "Identification": "2360549017905188",
            "Code": "TELE",
            "Type": "string"
          }
        },
        "DebtorAgent": {
          "SchemeName": "UK.OBIE.BICFI",
          "Identification": "string",
          "Name": "Agent Name",
          "LEI": "IZ9Q00LZEVUKWCQY6X15",
          "PostalAddress": {
            "AddressType": "BIZZ",
            "Department": "Finance",
            "SubDepartment": "Payroll",
            "StreetName": "Bank Street",
            "BuildingNumber": "11",
            "BuildingName": "string",
            "Floor": "11",
            "UnitNumber": "A88",
            "Room": "Basement 03",
            "PostBox": "PO Box 123456",
            "TownLocationName": "London",
            "DistrictName": "Greater London",
            "CareOf": "Jane Smith",
            "PostCode": "EC2N 4AG",
            "TownName": "London",
            "CountrySubDivision": "string",
            "Country": "string",
            "AddressLine": [
              "string"
            ]
          }
        },
        "DebtorAccount": {
          "SchemeName": "string",
          "Identification": "80200112344562",
          "Name": "Jane Smith",
          "SecondaryIdentification": "87562298675897",
          "Proxy": {
            "Identification": "2360549017905188",
            "Code": "TELE",
            "Type": "string"
          }
        },
        "CardInstrument": {
          "CardSchemeName": "AmericanExpress",
          "AuthorisationType": "ConsumerDevice",
          "Name": "string",
          "Identification": "string"
        },
        "SupplementaryData": {},
        "CategoryPurposeCode": "BONU",
        "PaymentPurposeCode": "BKDF",
        "UltimateCreditor": {
          "Name": "string",
          "Identification": "string",
          "LEI": "IZ9Q00LZEVUKWCQY6X15",
          "SchemeName": "string",
          "PostalAddress": {
            "AddressType": "BIZZ",
            "Department": "Finance",
            "SubDepartment": "Payroll",
            "StreetName": "Bank Street",
            "BuildingNumber": "11",
            "BuildingName": "string",
            "Floor": "11",
            "UnitNumber": "A88",
            "Room": "Basement 03",
            "PostBox": "PO Box 123456",
            "TownLocationName": "London",
            "DistrictName": "Greater London",
            "CareOf": "Jane Smith",
            "PostCode": "EC2N 4AG",
            "TownName": "London",
            "CountrySubDivision": "string",
            "Country": "string",
            "AddressLine": [
              "string"
            ]
          }
        },
        "UltimateDebtor": {
          "Name": "string",
          "Identification": "string",
          "LEI": "IZ9Q00LZEVUKWCQY6X15",
          "SchemeName": "string",
          "PostalAddress": {
            "AddressType": "BIZZ",
            "Department": "Finance",
            "SubDepartment": "Payroll",
            "StreetName": "Bank Street",
            "BuildingNumber": "11",
            "BuildingName": "string",
            "Floor": "11",
            "UnitNumber": "A88",
            "Room": "Basement 03",
            "PostBox": "PO Box 123456",
            "TownLocationName": "London",
            "DistrictName": "Greater London",
            "CareOf": "Jane Smith",
            "PostCode": "EC2N 4AG",
            "TownName": "London",
            "CountrySubDivision": "string",
            "Country": "string",
            "AddressLine": [
              "string"
            ]
          }
        },
        "IntermediaryAgent1": {
          "Name": "string",
          "SchemeName": "string",
          "Identification": "string",
          "LEI": "IZ9Q00LZEVUKWCQY6X15",
          "PostalAddress": {
            "AddressType": "BIZZ",
            "Department": "Finance",
            "SubDepartment": "Payroll",
            "StreetName": "Bank Street",
            "BuildingNumber": "11",
            "BuildingName": "string",
            "Floor": "11",
            "UnitNumber": "A88",
            "Room": "Basement 03",
            "PostBox": "PO Box 123456",
            "TownLocationName": "London",
            "DistrictName": "Greater London",
            "CareOf": "Jane Smith",
            "PostCode": "EC2N 4AG",
            "TownName": "London",
            "CountrySubDivision": "string",
            "Country": "string",
            "AddressLine": [
              "string"
            ]
          },
          "ProcessingStatus": "PDNG"
        },
        "IntermediaryAgent2": {
          "Name": "string",
          "SchemeName": "string",
          "Identification": "string",
          "LEI": "IZ9Q00LZEVUKWCQY6X15",
          "PostalAddress": {
            "AddressType": "BIZZ",
            "Department": "Finance",
            "SubDepartment": "Payroll",
            "StreetName": "Bank Street",
            "BuildingNumber": "11",
            "BuildingName": "string",
            "Floor": "11",
            "UnitNumber": "A88",
            "Room": "Basement 03",
            "PostBox": "PO Box 123456",
            "TownLocationName": "London",
            "DistrictName": "Greater London",
            "CareOf": "Jane Smith",
            "PostCode": "EC2N 4AG",
            "TownName": "London",
            "CountrySubDivision": "string",
            "Country": "string",
            "AddressLine": [
              "string"
            ]
          },
          "ProcessingStatus": "PDNG"
        },
        "IntermediaryAgent3": {
          "Name": "string",
          "SchemeName": "string",
          "Identification": "string",
          "LEI": "IZ9Q00LZEVUKWCQY6X15",
          "PostalAddress": {
            "AddressType": "BIZZ",
            "Department": "Finance",
            "SubDepartment": "Payroll",
            "StreetName": "Bank Street",
            "BuildingNumber": "11",
            "BuildingName": "string",
            "Floor": "11",
            "UnitNumber": "A88",
            "Room": "Basement 03",
            "PostBox": "PO Box 123456",
            "TownLocationName": "London",
            "DistrictName": "Greater London",
            "CareOf": "Jane Smith",
            "PostCode": "EC2N 4AG",
            "TownName": "London",
            "CountrySubDivision": "string",
            "Country": "string",
            "AddressLine": [
              "string"
            ]
          },
          "ProcessingStatus": "PDNG"
        }
      }
    ]
  },
  "Links": {
    "Self": "http://example.com",
    "First": "http://example.com",
    "Prev": "http://example.com",
    "Next": "http://example.com",
    "Last": "http://example.com"
  },
  "Meta": {
    "TotalPages": 0,
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z"
  }
}
```

> 400 Response

```json
{
  "Id": "string",
  "Code": "400 BadRequest",
  "Message": "There is something wrong with the request parameters provided",
  "Errors": [
    {
      "ErrorCode": "U001",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ]
}
```

> 403 Response

```json
{
  "Id": "string",
  "Code": "400 BadRequest",
  "Message": "There is something wrong with the request parameters provided",
  "Errors": [
    {
      "ErrorCode": "U001",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ]
}
```

> 500 Response

```json
{
  "Id": "string",
  "Code": "400 BadRequest",
  "Message": "There is something wrong with the request parameters provided",
  "Errors": [
    {
      "ErrorCode": "U001",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ]
}
```

<h3 id="get-transactions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Transactions Read|[OBReadTransaction6](#schemaobreadtransaction6)|
|400|Bad Request|Bad request|[OBErrorResponse1](#schemaoberrorresponse1)|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|[OBErrorResponse1](#schemaoberrorresponse1)|
|404|Not Found|Not found|None|
|405|Method Not Allowed|Method Not Allowed|None|
|406|Not Acceptable|Not Acceptable|None|
|429|Too Many Requests|Too Many Requests|None|
|500|Internal Server Error|Internal Server Error|[OBErrorResponse1](#schemaoberrorresponse1)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|200|RateLimit-Policy|string||TPPs __must__ refer to ASPSP developer portals for further information on any rate limit policies, if the headers are supported and any additional requirements.<br><br>A non-empty list of Quota Policy Items. The Item value __MUST__ be a String.<br><br>Example:<br>`RateLimit-Policy: "default";q=100;w=10`<br><br>The **REQUIRED** "q" parameter indicates the quota allocated by this policy measured in quota units.<br><br>The **OPTIONAL** "w" parameter value conveys a time window.<br>|
|200|RateLimit|string||TPPs __must__ refer to ASPSP developer portals for further information on any rate limit policies, if the headers are supported and any additional requirements.<br><br>A server uses the "RateLimit" response header field to communicate the current service limit for a quota policy for a particular partition key.<br><br>Example:<br>`RateLimit: "default";r=50;t=30`<br><br>The **REQUIRED** "r" parameter value conveys the remaining quota units for the identified policy.<br><br>The **OPTIONAL** "t" parameter value conveys the time window reset time for the identified policy.<br>|
|400|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|401|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|403|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|404|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|405|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|406|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|429|Retry-After|integer||Number in seconds to wait|
|429|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|
|500|x-fapi-interaction-id|string||An RFC4122 UID used as a correlation id.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
PSUOAuth2Security ( Scopes: accounts )
</aside>

# Schemas

<h2 id="tocS_OBIntermediaryAgent">OBIntermediaryAgent</h2>
<!-- backwards compatibility -->
<a id="schemaobintermediaryagent"></a>
<a id="schema_OBIntermediaryAgent"></a>
<a id="tocSobintermediaryagent"></a>
<a id="tocsobintermediaryagent"></a>

```json
{
  "Name": "string",
  "SchemeName": "string",
  "Identification": "string",
  "LEI": "IZ9Q00LZEVUKWCQY6X15",
  "PostalAddress": {
    "AddressType": "BIZZ",
    "Department": "Finance",
    "SubDepartment": "Payroll",
    "StreetName": "Bank Street",
    "BuildingNumber": "11",
    "BuildingName": "string",
    "Floor": "11",
    "UnitNumber": "A88",
    "Room": "Basement 03",
    "PostBox": "PO Box 123456",
    "TownLocationName": "London",
    "DistrictName": "Greater London",
    "CareOf": "Jane Smith",
    "PostCode": "EC2N 4AG",
    "TownName": "London",
    "CountrySubDivision": "string",
    "Country": "string",
    "AddressLine": [
      "string"
    ]
  },
  "ProcessingStatus": "PDNG"
}
```

The intermediary agent associated with this transaction.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|string|false|none|Name by which an agent is known and which is usually used to identify that agent.|
|SchemeName|[OBInternalAccountIdentification4Code](#schemaobinternalaccountidentification4code)|false|none|Name of the identification scheme, in a coded form as published in an external list. <br /> For a full list of enumeration values refer to `OBInternalAccountIdentification4Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)|
|Identification|string|false|none|Unique and unambiguous identification of a financial institution or a branch of a financial institution.|
|LEI|[LEI](#schemalei)|false|none|Legal entity identification as an alternate identification for a party. Legal Entity Identifier is a code allocated to a party as described in ISO 17442 "Financial Services - Legal Entity Identifier (LEI)".|
|PostalAddress|[OBPostalAddress7](#schemaobpostaladdress7)|false|none|Information that locates and identifies a specific address, as defined by postal services.|
|ProcessingStatus|string|false|none|Status of the payment at the Intermediary Agent. For a full list of enumeration values refer to `OBIntermediaryAgentStatus1Code` in `OB_Internal_CodeSet` [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)|

#### Enumerated Values

|Property|Value|
|---|---|
|ProcessingStatus|PDNG|
|ProcessingStatus|RCVD|
|ProcessingStatus|ACSP|
|ProcessingStatus|ACSC|
|ProcessingStatus|RJCT|
|ProcessingStatus|UNKN|
|ProcessingStatus|CANC|

<h2 id="tocS_ExternalCreditorReferenceType1Code">ExternalCreditorReferenceType1Code</h2>
<!-- backwards compatibility -->
<a id="schemaexternalcreditorreferencetype1code"></a>
<a id="schema_ExternalCreditorReferenceType1Code"></a>
<a id="tocSexternalcreditorreferencetype1code"></a>
<a id="tocsexternalcreditorreferencetype1code"></a>

```json
"DISP"
```

Specifies the type of creditor reference as published in an external creditor reference type code set. For more information see `ExternalCreditorReferenceType1Code` in *ISO_External_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)

<h2 id="tocS_ExternalDocumentType1Code">ExternalDocumentType1Code</h2>
<!-- backwards compatibility -->
<a id="schemaexternaldocumenttype1code"></a>
<a id="schema_ExternalDocumentType1Code"></a>
<a id="tocSexternaldocumenttype1code"></a>
<a id="tocsexternaldocumenttype1code"></a>

```json
"AROI"
```

Specifies the document type as published in an external document type code list. For more information see `ExternalDocumentType1Code` in *ISO_External_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)

<h2 id="tocS_OBReferredDocumentInformation">OBReferredDocumentInformation</h2>
<!-- backwards compatibility -->
<a id="schemaobreferreddocumentinformation"></a>
<a id="schema_OBReferredDocumentInformation"></a>
<a id="tocSobreferreddocumentinformation"></a>
<a id="tocsobreferreddocumentinformation"></a>

```json
{
  "Code": "AROI",
  "Issuer": "string",
  "Number": "string",
  "RelatedDate": "1970-01-01T00:00:00Z",
  "LineDetails": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Code|[ExternalDocumentType1Code](#schemaexternaldocumenttype1code)|false|none|Specifies the document type as published in an external document type code list. For more information see `ExternalDocumentType1Code` in *ISO_External_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)|
|Issuer|string|false|none|Identification of the issuer of the reference document type.|
|Number|string|false|none|Identification of the type specified for the referred document line.|
|RelatedDate|string(date-time)|false|none|Date associated with the referred document line.|
|LineDetails|[string]|false|none|Set of elements used to provide the content of the referred document line.|

#### Enumerated Values

|Property|Value|
|---|---|
|Code|AROI|
|Code|BOLD|
|Code|CINV|
|Code|CMCN|
|Code|CNFA|
|Code|CONT|
|Code|CREN|
|Code|DEBN|
|Code|DISP|
|Code|DNFA|
|Code|HIRI|
|Code|INVS|
|Code|MSIN|
|Code|PROF|
|Code|PUOR|
|Code|QUOT|
|Code|SBIN|
|Code|SOAC|
|Code|SPRR|
|Code|TISH|
|Code|TSUT|
|Code|USAR|
|Code|VCHR|

<h2 id="tocS_OBRemittanceInformation2">OBRemittanceInformation2</h2>
<!-- backwards compatibility -->
<a id="schemaobremittanceinformation2"></a>
<a id="schema_OBRemittanceInformation2"></a>
<a id="tocSobremittanceinformation2"></a>
<a id="tocsobremittanceinformation2"></a>

```json
{
  "Structured": [
    {
      "ReferredDocumentInformation": [
        {
          "Code": "AROI",
          "Issuer": "string",
          "Number": "string",
          "RelatedDate": "1970-01-01T00:00:00Z",
          "LineDetails": [
            "string"
          ]
        }
      ],
      "ReferredDocumentAmount": "1209.06",
      "CreditorReferenceInformation": {
        "Code": "DISP",
        "Issuer": "string",
        "Reference": "string"
      },
      "Invoicer": "80200112344562",
      "Invoicee": "80200112344562",
      "TaxRemittance": "string",
      "AdditionalRemittanceInformation": [
        "string"
      ]
    }
  ],
  "Unstructured": [
    "string"
  ]
}
```

Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Structured|[[OBRemittanceInformationStructured](#schemaobremittanceinformationstructured)]|false|none|none|
|Unstructured|[string]|false|none|Information supplied to enable the matching/reconciliation of an entry with the items that the payment is intended to settle, such as commercial invoices in an accounts' receivable system, in an unstructured form.|

<h2 id="tocS_OBRemittanceInformationStructured">OBRemittanceInformationStructured</h2>
<!-- backwards compatibility -->
<a id="schemaobremittanceinformationstructured"></a>
<a id="schema_OBRemittanceInformationStructured"></a>
<a id="tocSobremittanceinformationstructured"></a>
<a id="tocsobremittanceinformationstructured"></a>

```json
{
  "ReferredDocumentInformation": [
    {
      "Code": "AROI",
      "Issuer": "string",
      "Number": "string",
      "RelatedDate": "1970-01-01T00:00:00Z",
      "LineDetails": [
        "string"
      ]
    }
  ],
  "ReferredDocumentAmount": "1209.06",
  "CreditorReferenceInformation": {
    "Code": "DISP",
    "Issuer": "string",
    "Reference": "string"
  },
  "Invoicer": "80200112344562",
  "Invoicee": "80200112344562",
  "TaxRemittance": "string",
  "AdditionalRemittanceInformation": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ReferredDocumentInformation|[[OBReferredDocumentInformation](#schemaobreferreddocumentinformation)]|false|none|none|
|ReferredDocumentAmount|[OBActiveCurrencyAndAmount_SimpleType](#schemaobactivecurrencyandamount_simpletype)|false|none|A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.|
|CreditorReferenceInformation|object|false|none|Reference information provided by the creditor to allow the identification of the underlying documents.|
|Invoicer|[Identification_3](#schemaidentification_3)|false|none|Identification of the organisation issuing the invoice, when it is different from the creditor or ultimate creditor|
|Invoicee|[Identification_4](#schemaidentification_4)|false|none|Identification of the party to whom an invoice is issued, when it is different from the debtor or ultimate debtor.|
|TaxRemittance|string|false|none|Provides remittance information about a payment made for tax-related purposes.|
|AdditionalRemittanceInformation|[string]|false|none|Additional information, in free text form, to complement the structured remittance information.|

<h2 id="tocS_OBUltimateCreditor1">OBUltimateCreditor1</h2>
<!-- backwards compatibility -->
<a id="schemaobultimatecreditor1"></a>
<a id="schema_OBUltimateCreditor1"></a>
<a id="tocSobultimatecreditor1"></a>
<a id="tocsobultimatecreditor1"></a>

```json
{
  "Name": "string",
  "Identification": "string",
  "LEI": "IZ9Q00LZEVUKWCQY6X15",
  "SchemeName": "string",
  "PostalAddress": {
    "AddressType": "BIZZ",
    "Department": "Finance",
    "SubDepartment": "Payroll",
    "StreetName": "Bank Street",
    "BuildingNumber": "11",
    "BuildingName": "string",
    "Floor": "11",
    "UnitNumber": "A88",
    "Room": "Basement 03",
    "PostBox": "PO Box 123456",
    "TownLocationName": "London",
    "DistrictName": "Greater London",
    "CareOf": "Jane Smith",
    "PostCode": "EC2N 4AG",
    "TownName": "London",
    "CountrySubDivision": "string",
    "Country": "string",
    "AddressLine": [
      "string"
    ]
  }
}
```

Ultimate party to which an amount of money is due.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|string|false|none|Name by which a party is known and which is usually used to identify that party.|
|Identification|string|false|none|Identification assigned by an institution.|
|LEI|[LEI](#schemalei)|false|none|Legal entity identification as an alternate identification for a party. Legal Entity Identifier is a code allocated to a party as described in ISO 17442 "Financial Services - Legal Entity Identifier (LEI)".|
|SchemeName|[OBInternalAccountIdentification4Code](#schemaobinternalaccountidentification4code)|false|none|Name of the identification scheme, in a coded form as published in an external list. <br /> For a full list of enumeration values refer to `OBInternalAccountIdentification4Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)|
|PostalAddress|[OBPostalAddress7](#schemaobpostaladdress7)|false|none|Information that locates and identifies a specific address, as defined by postal services.|

<h2 id="tocS_OBUltimateDebtor1">OBUltimateDebtor1</h2>
<!-- backwards compatibility -->
<a id="schemaobultimatedebtor1"></a>
<a id="schema_OBUltimateDebtor1"></a>
<a id="tocSobultimatedebtor1"></a>
<a id="tocsobultimatedebtor1"></a>

```json
{
  "Name": "string",
  "Identification": "string",
  "LEI": "IZ9Q00LZEVUKWCQY6X15",
  "SchemeName": "string",
  "PostalAddress": {
    "AddressType": "BIZZ",
    "Department": "Finance",
    "SubDepartment": "Payroll",
    "StreetName": "Bank Street",
    "BuildingNumber": "11",
    "BuildingName": "string",
    "Floor": "11",
    "UnitNumber": "A88",
    "Room": "Basement 03",
    "PostBox": "PO Box 123456",
    "TownLocationName": "London",
    "DistrictName": "Greater London",
    "CareOf": "Jane Smith",
    "PostCode": "EC2N 4AG",
    "TownName": "London",
    "CountrySubDivision": "string",
    "Country": "string",
    "AddressLine": [
      "string"
    ]
  }
}
```

Ultimate party that owes an amount of money to the (ultimate) creditor.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Name|string|false|none|Name by which a party is known and which is usually used to identify that party.|
|Identification|string|false|none|Identification assigned by an institution.|
|LEI|[LEI](#schemalei)|false|none|Legal entity identification as an alternate identification for a party. Legal Entity Identifier is a code allocated to a party as described in ISO 17442 "Financial Services - Legal Entity Identifier (LEI)".|
|SchemeName|[OBInternalAccountIdentification4Code](#schemaobinternalaccountidentification4code)|false|none|Name of the identification scheme, in a coded form as published in an external list. <br /> For a full list of enumeration values refer to `OBInternalAccountIdentification4Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)|
|PostalAddress|[OBPostalAddress7](#schemaobpostaladdress7)|false|none|Information that locates and identifies a specific address, as defined by postal services.|

<h2 id="tocS_OBFrequency6">OBFrequency6</h2>
<!-- backwards compatibility -->
<a id="schemaobfrequency6"></a>
<a id="schema_OBFrequency6"></a>
<a id="tocSobfrequency6"></a>
<a id="tocsobfrequency6"></a>

```json
{
  "Type": "MNTH",
  "CountPerPeriod": 1,
  "PointInTime": "00"
}
```

Regularity with which credit transfer instructions are to be created and processed

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|[OBFrequency6Code](#schemaobfrequency6code) \| [Frequency_1](#schemafrequency_1)|true|none|none|
|CountPerPeriod|integer(int32)|false|none|Number of instructions to be created and processed during the specified period. Specifies a frequency in terms of a count per period within a specified frequency type. Note: should not be used alongside `PointInTime`|
|PointInTime|[PointInTime](#schemapointintime)|false|none|Exact2NumericText - Further information on the exact point in time the event should take place. Specifies a frequency in terms of an exact point in time or moment within a specified frequency type. Note: should not be used alongside `CountPerPeriod`.|

<h2 id="tocS_PointInTime">PointInTime</h2>
<!-- backwards compatibility -->
<a id="schemapointintime"></a>
<a id="schema_PointInTime"></a>
<a id="tocSpointintime"></a>
<a id="tocspointintime"></a>

```json
"00"
```

Exact2NumericText - Further information on the exact point in time the event should take place. Specifies a frequency in terms of an exact point in time or moment within a specified frequency type. Note: should not be used alongside `CountPerPeriod`.

<h2 id="tocS_OBFrequency6Code">OBFrequency6Code</h2>
<!-- backwards compatibility -->
<a id="schemaobfrequency6code"></a>
<a id="schema_OBFrequency6Code"></a>
<a id="tocSobfrequency6code"></a>
<a id="tocsobfrequency6code"></a>

```json
"MNTH"
```

For a full list of values see `OBFrequency6Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)

<h2 id="tocS_OBProxy1">OBProxy1</h2>
<!-- backwards compatibility -->
<a id="schemaobproxy1"></a>
<a id="schema_OBProxy1"></a>
<a id="tocSobproxy1"></a>
<a id="tocsobproxy1"></a>

```json
{
  "Identification": "2360549017905188",
  "Code": "TELE",
  "Type": "string"
}
```

Specifies an alternate assumed name for the identification of the account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Identification|string|true|none|Identification used to indicate the account identification under another specified name.|
|Code|[ExternalProxyAccountType1Code](#schemaexternalproxyaccounttype1code)|true|none|Specifies the external proxy account type code, as published in the proxy account type external code set.<br /> For more information and a full list of values see `ExternalProxyAccountType1Code` in *ISO_External_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)|
|Type|string|false|none|Type of the proxy identification.|

#### Enumerated Values

|Property|Value|
|---|---|
|Code|TELE|
|Code|EMAL|
|Code|DNAM|
|Code|CINC|
|Code|COTX|
|Code|COID|
|Code|CUST|
|Code|DRLC|
|Code|EIDN|
|Code|EWAL|
|Code|PVTX|
|Code|LEIC|
|Code|MBNO|
|Code|NIDN|
|Code|CCPT|
|Code|SHID|
|Code|SOSE|
|Code|TOKN|
|Code|UBIL|
|Code|VIPN|
|Code|BIID|

<h2 id="tocS_ExternalProxyAccountType1Code">ExternalProxyAccountType1Code</h2>
<!-- backwards compatibility -->
<a id="schemaexternalproxyaccounttype1code"></a>
<a id="schema_ExternalProxyAccountType1Code"></a>
<a id="tocSexternalproxyaccounttype1code"></a>
<a id="tocsexternalproxyaccounttype1code"></a>

```json
"TELE"
```

Specifies the external proxy account type code, as published in the proxy account type external code set.<br /> For more information and a full list of values see `ExternalProxyAccountType1Code` in *ISO_External_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)

<h2 id="tocS_AccountId">AccountId</h2>
<!-- backwards compatibility -->
<a id="schemaaccountid"></a>
<a id="schema_AccountId"></a>
<a id="tocSaccountid"></a>
<a id="tocsaccountid"></a>

```json
"22289"
```

A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.

<h2 id="tocS_ActiveOrHistoricCurrencyCode_0">ActiveOrHistoricCurrencyCode_0</h2>
<!-- backwards compatibility -->
<a id="schemaactiveorhistoriccurrencycode_0"></a>
<a id="schema_ActiveOrHistoricCurrencyCode_0"></a>
<a id="tocSactiveorhistoriccurrencycode_0"></a>
<a id="tocsactiveorhistoriccurrencycode_0"></a>

```json
"string"
```

Identification of the currency in which the account is held. 
Usage: Currency should only be used in case one and the same account number covers several currencies
and the initiating party needs to identify which currency needs to be used for settlement on the account.

<h2 id="tocS_ActiveOrHistoricCurrencyCode_1">ActiveOrHistoricCurrencyCode_1</h2>
<!-- backwards compatibility -->
<a id="schemaactiveorhistoriccurrencycode_1"></a>
<a id="schema_ActiveOrHistoricCurrencyCode_1"></a>
<a id="tocSactiveorhistoriccurrencycode_1"></a>
<a id="tocsactiveorhistoriccurrencycode_1"></a>

```json
"GBP"
```

A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".

<h2 id="tocS_AddressLine">AddressLine</h2>
<!-- backwards compatibility -->
<a id="schemaaddressline"></a>
<a id="schema_AddressLine"></a>
<a id="tocSaddressline"></a>
<a id="tocsaddressline"></a>

```json
"string"
```

Information that locates and identifies a specific address for a transaction entry, that is presented in free format text.

<h2 id="tocS_BeneficiaryId">BeneficiaryId</h2>
<!-- backwards compatibility -->
<a id="schemabeneficiaryid"></a>
<a id="schema_BeneficiaryId"></a>
<a id="tocSbeneficiaryid"></a>
<a id="tocsbeneficiaryid"></a>

```json
"Ben1"
```

A unique and immutable identifier used to identify the beneficiary resource. This identifier has no meaning to the account owner.

<h2 id="tocS_BookingDateTime">BookingDateTime</h2>
<!-- backwards compatibility -->
<a id="schemabookingdatetime"></a>
<a id="schema_BookingDateTime"></a>
<a id="tocSbookingdatetime"></a>
<a id="tocsbookingdatetime"></a>

```json
"1970-01-01T00:00:00Z"
```

Date and time when a transaction entry is posted to an account on the account servicer's books.
Usage: Booking date is the expected booking date, unless the status is booked, in which case it is the actual booking date. All dates in the JSON payloads are represented in ISO 8601 date-time format. 
All date-time fields in responses must include the timezone. An example is below:
2017-04-05T10:43:07+00:00

<h2 id="tocS_BuildingName">BuildingName</h2>
<!-- backwards compatibility -->
<a id="schemabuildingname"></a>
<a id="schema_BuildingName"></a>
<a id="tocSbuildingname"></a>
<a id="tocsbuildingname"></a>

```json
"string"
```

Name of a referenced building.

<h2 id="tocS_BuildingNumber">BuildingNumber</h2>
<!-- backwards compatibility -->
<a id="schemabuildingnumber"></a>
<a id="schema_BuildingNumber"></a>
<a id="tocSbuildingnumber"></a>
<a id="tocsbuildingnumber"></a>

```json
"11"
```

Number that identifies the position of a building on a street.

<h2 id="tocS_CareOf">CareOf</h2>
<!-- backwards compatibility -->
<a id="schemacareof"></a>
<a id="schema_CareOf"></a>
<a id="tocScareof"></a>
<a id="tocscareof"></a>

```json
"Jane Smith"
```

The 'care of' address is used whenever sending mail to a person or organisation who does not actually live or work at the address. They will receive the mail for the individual.

<h2 id="tocS_CountryCode">CountryCode</h2>
<!-- backwards compatibility -->
<a id="schemacountrycode"></a>
<a id="schema_CountryCode"></a>
<a id="tocScountrycode"></a>
<a id="tocscountrycode"></a>

```json
"string"
```

Nation with its own government, occupying a particular territory.

<h2 id="tocS_CountrySubDivision">CountrySubDivision</h2>
<!-- backwards compatibility -->
<a id="schemacountrysubdivision"></a>
<a id="schema_CountrySubDivision"></a>
<a id="tocScountrysubdivision"></a>
<a id="tocscountrysubdivision"></a>

```json
"string"
```

Identifies a subdivision of a country eg, state, region, county.

<h2 id="tocS_CreationDateTime">CreationDateTime</h2>
<!-- backwards compatibility -->
<a id="schemacreationdatetime"></a>
<a id="schema_CreationDateTime"></a>
<a id="tocScreationdatetime"></a>
<a id="tocscreationdatetime"></a>

```json
"2024-05-29T00:00:00Z"
```

Date and time at which the resource was created. All dates in the JSON payloads are represented in ISO 8601 date-time format. 
All date-time fields in responses must include the timezone. An example is below:
2017-04-05T10:43:07+00:00

<h2 id="tocS_Date">Date</h2>
<!-- backwards compatibility -->
<a id="schemadate"></a>
<a id="schema_Date"></a>
<a id="tocSdate"></a>
<a id="tocsdate"></a>

```json
"1970-01-01"
```

Date and time associated with the date time type. All dates in the JSON payloads are represented in ISO 8601 date format. 
 An example is below:
2017-04-05

<h2 id="tocS_DateTime">DateTime</h2>
<!-- backwards compatibility -->
<a id="schemadatetime"></a>
<a id="schema_DateTime"></a>
<a id="tocSdatetime"></a>
<a id="tocsdatetime"></a>

```json
"2024-05-29T00:00:00Z"
```

Date and time associated with the date time type. All dates in the JSON payloads are represented in ISO 8601 date-time format. 
All date-time fields in responses must include the timezone. An example is below:
2017-04-05T10:43:07+00:00

<h2 id="tocS_DebtorReference">DebtorReference</h2>
<!-- backwards compatibility -->
<a id="schemadebtorreference"></a>
<a id="schema_DebtorReference"></a>
<a id="tocSdebtorreference"></a>
<a id="tocsdebtorreference"></a>

```json
"REF51561806"
```

A reference value provided by the PSU to the PISP while setting up the scheduled payment.

<h2 id="tocS_Description_0">Description_0</h2>
<!-- backwards compatibility -->
<a id="schemadescription_0"></a>
<a id="schema_Description_0"></a>
<a id="tocSdescription_0"></a>
<a id="tocsdescription_0"></a>

```json
"string"
```

Specifies the description of the account type.

<h2 id="tocS_Description_1">Description_1</h2>
<!-- backwards compatibility -->
<a id="schemadescription_1"></a>
<a id="schema_Description_1"></a>
<a id="tocSdescription_1"></a>
<a id="tocsdescription_1"></a>

```json
"International usage charge"
```

Description that may be available for the statement fee.

<h2 id="tocS_Description_2">Description_2</h2>
<!-- backwards compatibility -->
<a id="schemadescription_2"></a>
<a id="schema_Description_2"></a>
<a id="tocSdescription_2"></a>
<a id="tocsdescription_2"></a>

```json
"Interest occurred over statement duration"
```

Description that may be available for the statement interest.

<h2 id="tocS_Description_3">Description_3</h2>
<!-- backwards compatibility -->
<a id="schemadescription_3"></a>
<a id="schema_Description_3"></a>
<a id="tocSdescription_3"></a>
<a id="tocsdescription_3"></a>

```json
"string"
```

Description to describe the purpose of the code

<h2 id="tocS_DirectDebitId">DirectDebitId</h2>
<!-- backwards compatibility -->
<a id="schemadirectdebitid"></a>
<a id="schema_DirectDebitId"></a>
<a id="tocSdirectdebitid"></a>
<a id="tocsdirectdebitid"></a>

```json
"string"
```

A unique and immutable identifier used to identify the direct debit resource. This identifier has no meaning to the account owner.

<h2 id="tocS_DistrictName">DistrictName</h2>
<!-- backwards compatibility -->
<a id="schemadistrictname"></a>
<a id="schema_DistrictName"></a>
<a id="tocSdistrictname"></a>
<a id="tocsdistrictname"></a>

```json
"Greater London"
```

Number that of the regional area, known as a district, which forms part of an address

<h2 id="tocS_EmailAddress">EmailAddress</h2>
<!-- backwards compatibility -->
<a id="schemaemailaddress"></a>
<a id="schema_EmailAddress"></a>
<a id="tocSemailaddress"></a>
<a id="tocsemailaddress"></a>

```json
"d.user@semiotec.co.jp"
```

Address for electronic mail (e-mail).

<h2 id="tocS_EndDateTime">EndDateTime</h2>
<!-- backwards compatibility -->
<a id="schemaenddatetime"></a>
<a id="schema_EndDateTime"></a>
<a id="tocSenddatetime"></a>
<a id="tocsenddatetime"></a>

```json
"2017-07-12T00:00:00+00:00"
```

Date and time at which the statement period ends. All dates in the JSON payloads are represented in ISO 8601 date-time format. 
All date-time fields in responses must include the timezone. An example is below:
2017-04-05T10:43:07+00:00

<h2 id="tocS_File">File</h2>
<!-- backwards compatibility -->
<a id="schemafile"></a>
<a id="schema_File"></a>
<a id="tocSfile"></a>
<a id="tocsfile"></a>

```json
{}
```

<h2 id="tocS_FinalPaymentDateTime">FinalPaymentDateTime</h2>
<!-- backwards compatibility -->
<a id="schemafinalpaymentdatetime"></a>
<a id="schema_FinalPaymentDateTime"></a>
<a id="tocSfinalpaymentdatetime"></a>
<a id="tocsfinalpaymentdatetime"></a>

```json
"1970-01-01T00:00:00Z"
```

The date on which the final payment for a Standing Order schedule will be made. All dates in the JSON payloads are represented in ISO 8601 date-time format. 
All date-time fields in responses must include the timezone. An example is below:
2017-04-05T10:43:07+00:00

<h2 id="tocS_FirstPaymentDateTime">FirstPaymentDateTime</h2>
<!-- backwards compatibility -->
<a id="schemafirstpaymentdatetime"></a>
<a id="schema_FirstPaymentDateTime"></a>
<a id="tocSfirstpaymentdatetime"></a>
<a id="tocsfirstpaymentdatetime"></a>

```json
"1970-01-01T00:00:00Z"
```

The date on which the first payment for a Standing Order schedule will be made. All dates in the JSON payloads are represented in ISO 8601 date-time format. 
All date-time fields in responses must include the timezone. An example is below:
2017-04-05T10:43:07+00:00

<h2 id="tocS_Floor">Floor</h2>
<!-- backwards compatibility -->
<a id="schemafloor"></a>
<a id="schema_Floor"></a>
<a id="tocSfloor"></a>
<a id="tocsfloor"></a>

```json
"11"
```

Number that identifies the level within a building

<h2 id="tocS_Frequency_1">Frequency_1</h2>
<!-- backwards compatibility -->
<a id="schemafrequency_1"></a>
<a id="schema_Frequency_1"></a>
<a id="tocSfrequency_1"></a>
<a id="tocsfrequency_1"></a>

```json
"string"
```

Individual Definitions:
NotKnown - Not Known
EvryDay - Every day
EvryWorkgDay - Every working day
IntrvlDay - An interval specified in number of calendar days (02 to 31)
IntrvlWkDay - An interval specified in weeks (01 to 09), and the day within the week (01 to 07)
WkInMnthDay - A monthly interval, specifying the week of the month (01 to 05) and day within the week (01 to 07)
IntrvlMnthDay - An interval specified in months (between 01 to 06, 12, 24), specifying the day within the month (-05 to -01, 01 to 31)
QtrDay - Quarterly (either ENGLISH, SCOTTISH, or RECEIVED)
ENGLISH = Paid on the 25th March, 24th June, 29th September and 25th December.
SCOTTISH = Paid on the 2nd February, 15th May, 1st August and 11th November.
RECEIVED = Paid on the 20th March, 19th June, 24th September and 20th December.
Individual Patterns:
NotKnown (ScheduleCode)
EvryDay (ScheduleCode)
EvryWorkgDay (ScheduleCode)
IntrvlDay:NoOfDay (ScheduleCode + NoOfDay)
IntrvlWkDay:IntervalInWeeks:DayInWeek (ScheduleCode + IntervalInWeeks + DayInWeek)
WkInMnthDay:WeekInMonth:DayInWeek (ScheduleCode + WeekInMonth + DayInWeek)
IntrvlMnthDay:IntervalInMonths:DayInMonth (ScheduleCode + IntervalInMonths + DayInMonth)
QtrDay: + either (ENGLISH, SCOTTISH or RECEIVED) ScheduleCode + QuarterDay
The regular expression for this element combines five smaller versions for each permitted pattern. To aid legibility - the components are presented individually here:
NotKnown
EvryDay
EvryWorkgDay
IntrvlDay:((0[2-9])|([1-2][0-9])|3[0-1])
IntrvlWkDay:0[1-9]:0[1-7]
WkInMnthDay:0[1-5]:0[1-7]
IntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01])
QtrDay:(ENGLISH|SCOTTISH|RECEIVED)
Full Regular Expression:
^(NotKnown)$|^(EvryDay)$|^(EvryWorkgDay)$|^(IntrvlDay:((0[2-9])|([1-2][0-9])|3[0-1]))$|^(IntrvlWkDay:0[1-9]:0[1-7])$|^(WkInMnthDay:0[1-5]:0[1-7])$|^(IntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01]))$|^(QtrDay:(ENGLISH|SCOTTISH|RECEIVED))$

<h2 id="tocS_FullLegalName">FullLegalName</h2>
<!-- backwards compatibility -->
<a id="schemafulllegalname"></a>
<a id="schema_FullLegalName"></a>
<a id="tocSfulllegalname"></a>
<a id="tocsfulllegalname"></a>

```json
"Jane Smith"
```

The full legal name of the party.

<h2 id="tocS_ISODateTime">ISODateTime</h2>
<!-- backwards compatibility -->
<a id="schemaisodatetime"></a>
<a id="schema_ISODateTime"></a>
<a id="tocSisodatetime"></a>
<a id="tocsisodatetime"></a>

```json
"1970-01-01T00:00:00Z"
```

All dates in the JSON payloads are represented in ISO 8601 date-time format. 
All date-time fields in responses must include the timezone. An example is below:
2017-04-05T10:43:07+00:00

<h2 id="tocS_Identification_0">Identification_0</h2>
<!-- backwards compatibility -->
<a id="schemaidentification_0"></a>
<a id="schema_Identification_0"></a>
<a id="tocSidentification_0"></a>
<a id="tocsidentification_0"></a>

```json
"80200112344562"
```

Identification assigned by an institution to identify an account. This identification is known by the account owner.

<h2 id="tocS_Identification_1">Identification_1</h2>
<!-- backwards compatibility -->
<a id="schemaidentification_1"></a>
<a id="schema_Identification_1"></a>
<a id="tocSidentification_1"></a>
<a id="tocsidentification_1"></a>

```json
"80200112344562"
```

Unique and unambiguous identification of the servicing institution.

<h2 id="tocS_Identification_2">Identification_2</h2>
<!-- backwards compatibility -->
<a id="schemaidentification_2"></a>
<a id="schema_Identification_2"></a>
<a id="tocSidentification_2"></a>
<a id="tocsidentification_2"></a>

```json
"string"
```

Unique and unambiguous identification of a financial institution or a branch of a financial institution.

<h2 id="tocS_Identification_3">Identification_3</h2>
<!-- backwards compatibility -->
<a id="schemaidentification_3"></a>
<a id="schema_Identification_3"></a>
<a id="tocSidentification_3"></a>
<a id="tocsidentification_3"></a>

```json
"80200112344562"
```

Identification of the organisation issuing the invoice, when it is different from the creditor or ultimate creditor

<h2 id="tocS_Identification_4">Identification_4</h2>
<!-- backwards compatibility -->
<a id="schemaidentification_4"></a>
<a id="schema_Identification_4"></a>
<a id="tocSidentification_4"></a>
<a id="tocsidentification_4"></a>

```json
"80200112344562"
```

Identification of the party to whom an invoice is issued, when it is different from the debtor or ultimate debtor.

<h2 id="tocS_LastPaymentDateTime">LastPaymentDateTime</h2>
<!-- backwards compatibility -->
<a id="schemalastpaymentdatetime"></a>
<a id="schema_LastPaymentDateTime"></a>
<a id="tocSlastpaymentdatetime"></a>
<a id="tocslastpaymentdatetime"></a>

```json
"2017-07-12T00:00:00+00:00"
```

The date on which the last (most recent) payment for a Standing Order schedule was made. All dates in the JSON payloads are represented in ISO 8601 date-time format. 
All date-time fields in responses must include the timezone. An example is below:
2017-04-05T10:43:07+00:00

<h2 id="tocS_LEI">LEI</h2>
<!-- backwards compatibility -->
<a id="schemalei"></a>
<a id="schema_LEI"></a>
<a id="tocSlei"></a>
<a id="tocslei"></a>

```json
"IZ9Q00LZEVUKWCQY6X15"
```

Legal entity identification as an alternate identification for a party. Legal Entity Identifier is a code allocated to a party as described in ISO 17442 "Financial Services - Legal Entity Identifier (LEI)".

<h2 id="tocS_Links">Links</h2>
<!-- backwards compatibility -->
<a id="schemalinks"></a>
<a id="schema_Links"></a>
<a id="tocSlinks"></a>
<a id="tocslinks"></a>

```json
{
  "Self": "http://example.com",
  "First": "http://example.com",
  "Prev": "http://example.com",
  "Next": "http://example.com",
  "Last": "http://example.com"
}
```

Links relevant to the payload

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Self|string(uri)|true|none|none|
|First|string(uri)|false|none|none|
|Prev|string(uri)|false|none|none|
|Next|string(uri)|false|none|none|
|Last|string(uri)|false|none|none|

<h2 id="tocS_MandateIdentification">MandateIdentification</h2>
<!-- backwards compatibility -->
<a id="schemamandateidentification"></a>
<a id="schema_MandateIdentification"></a>
<a id="tocSmandateidentification"></a>
<a id="tocsmandateidentification"></a>

```json
"string"
```

Direct Debit reference. For AUDDIS service users provide Core Reference. For non AUDDIS service users provide Core reference if possible or last used reference.

<h2 id="tocS_MaturityDate">MaturityDate</h2>
<!-- backwards compatibility -->
<a id="schemamaturitydate"></a>
<a id="schema_MaturityDate"></a>
<a id="tocSmaturitydate"></a>
<a id="tocsmaturitydate"></a>

```json
"1970-01-01T00:00:00Z"
```

Maturity date of the account. All dates in the JSON payloads are represented in ISO 8601 date-time format. 
All date-time fields in responses must include the timezone. An example is below:
2017-04-05T10:43:07+00:00

<h2 id="tocS_Meta">Meta</h2>
<!-- backwards compatibility -->
<a id="schemameta"></a>
<a id="schema_Meta"></a>
<a id="tocSmeta"></a>
<a id="tocsmeta"></a>

```json
{
  "TotalPages": 0,
  "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
  "LastAvailableDateTime": "1970-01-01T00:00:00Z"
}
```

Meta Data relevant to the payload

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|TotalPages|integer(int32)|false|none|none|
|FirstAvailableDateTime|[ISODateTime](#schemaisodatetime)|false|none|All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|LastAvailableDateTime|[ISODateTime](#schemaisodatetime)|false|none|All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|

<h2 id="tocS_Name_0">Name_0</h2>
<!-- backwards compatibility -->
<a id="schemaname_0"></a>
<a id="schema_Name_0"></a>
<a id="tocSname_0"></a>
<a id="tocsname_0"></a>

```json
"Jane Smith"
```

The account name is the name or names of the account owner(s) represented at an account level, as displayed by the ASPSP's online channels.
Note, the account name is not the product name or the nickname of the account.

<h2 id="tocS_Name_1">Name_1</h2>
<!-- backwards compatibility -->
<a id="schemaname_1"></a>
<a id="schema_Name_1"></a>
<a id="tocSname_1"></a>
<a id="tocsname_1"></a>

```json
"Agent Name"
```

Name by which an agent is known and which is usually used to identify that agent.

<h2 id="tocS_Name_2">Name_2</h2>
<!-- backwards compatibility -->
<a id="schemaname_2"></a>
<a id="schema_Name_2"></a>
<a id="tocSname_2"></a>
<a id="tocsname_2"></a>

```json
"string"
```

Name of Service User.

<h2 id="tocS_Name_3">Name_3</h2>
<!-- backwards compatibility -->
<a id="schemaname_3"></a>
<a id="schema_Name_3"></a>
<a id="tocSname_3"></a>
<a id="tocsname_3"></a>

```json
"Mx Jane Smith"
```

Name by which a party is known and which is usually used to identify that party.

<h2 id="tocS_Name_4">Name_4</h2>
<!-- backwards compatibility -->
<a id="schemaname_4"></a>
<a id="schema_Name_4"></a>
<a id="tocSname_4"></a>
<a id="tocsname_4"></a>

```json
"string"
```

Long name associated with the code

<h2 id="tocS_NextPaymentDateTime">NextPaymentDateTime</h2>
<!-- backwards compatibility -->
<a id="schemanextpaymentdatetime"></a>
<a id="schema_NextPaymentDateTime"></a>
<a id="tocSnextpaymentdatetime"></a>
<a id="tocsnextpaymentdatetime"></a>

```json
"2017-07-12T00:00:00+00:00"
```

The date on which the next payment for a Standing Order schedule will be made. All dates in the JSON payloads are represented in ISO 8601 date-time format. 
All date-time fields in responses must include the timezone. An example is below:
2017-04-05T10:43:07+00:00

<h2 id="tocS_Nickname">Nickname</h2>
<!-- backwards compatibility -->
<a id="schemanickname"></a>
<a id="schema_Nickname"></a>
<a id="tocSnickname"></a>
<a id="tocsnickname"></a>

```json
"string"
```

The nickname of the account, assigned by the account owner in order to provide an additional means of identification of the account.

<h2 id="tocS_NumberOfPayments">NumberOfPayments</h2>
<!-- backwards compatibility -->
<a id="schemanumberofpayments"></a>
<a id="schema_NumberOfPayments"></a>
<a id="tocSnumberofpayments"></a>
<a id="tocsnumberofpayments"></a>

```json
"string"
```

Number of the payments that will be made in completing this frequency sequence including any executed since the sequence start date.

<h2 id="tocS_Number_0">Number_0</h2>
<!-- backwards compatibility -->
<a id="schemanumber_0"></a>
<a id="schema_Number_0"></a>
<a id="tocSnumber_0"></a>
<a id="tocsnumber_0"></a>

```json
0
```

Indicates whether the advertised overdraft rate is guaranteed to be offered to a borrower by the bank e.g. if it s part of a government scheme, or whether the rate may vary dependent on the applicant s circumstances.

<h2 id="tocS_Number_1">Number_1</h2>
<!-- backwards compatibility -->
<a id="schemanumber_1"></a>
<a id="schema_Number_1"></a>
<a id="tocSnumber_1"></a>
<a id="tocsnumber_1"></a>

```json
0
```

fee/charges are captured dependent on the number of occurrences rather than capped at a particular amount

<h2 id="tocS_OBAccount6">OBAccount6</h2>
<!-- backwards compatibility -->
<a id="schemaobaccount6"></a>
<a id="schema_OBAccount6"></a>
<a id="tocSobaccount6"></a>
<a id="tocsobaccount6"></a>

```json
{
  "AccountId": "22289",
  "Status": "Enabled",
  "StatusUpdateDateTime": "1970-01-01T00:00:00Z",
  "Currency": "string",
  "AccountCategory": "Business",
  "AccountTypeCode": "CACC",
  "Description": "string",
  "Nickname": "string",
  "OpeningDate": "1970-01-01T00:00:00Z",
  "MaturityDate": "1970-01-01T00:00:00Z",
  "SwitchStatus": "string",
  "Account": [
    {
      "SchemeName": "string",
      "Identification": "80200112344562",
      "Name": "Jane Smith",
      "LEI": "IZ9Q00LZEVUKWCQY6X15",
      "SecondaryIdentification": "87562298675897"
    }
  ],
  "StatementFrequencyAndFormat": [
    {
      "Frequency": "YEAR",
      "CommunicationMethod": "EMAL",
      "Format": "DPDF",
      "DeliveryAddress": {
        "AddressType": "BIZZ",
        "Department": "Finance",
        "SubDepartment": "Payroll",
        "StreetName": "Bank Street",
        "BuildingNumber": "11",
        "BuildingName": "string",
        "Floor": "11",
        "UnitNumber": "A88",
        "Room": "Basement 03",
        "PostBox": "PO Box 123456",
        "TownLocationName": "London",
        "DistrictName": "Greater London",
        "CareOf": "Jane Smith",
        "PostCode": "EC2N 4AG",
        "TownName": "London",
        "CountrySubDivision": "string",
        "Country": "string",
        "AddressLine": [
          "string"
        ]
      }
    }
  ],
  "Servicer": {
    "SchemeName": "UK.OBIE.BICFI",
    "Identification": "80200112344562",
    "Name": "Agent Name"
  }
}
```

Unambiguous identification of the account to which credit and debit entries are made. The following fields are optional only for accounts that are switched:

  * Data.Currency  
  * Data.AccountCategory  
  * Data.AccountTypeCode

For all other accounts, the fields must be populated by the ASPSP.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|[AccountId](#schemaaccountid)|true|none|A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.|
|Status|[OBInternalAccountStatus1Code](#schemaobinternalaccountstatus1code)|false|none|Specifies the status of account resource in code form. <br /><br>For a full list of enumeration values refer to `OBInternalAccountStatus1Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)|
|StatusUpdateDateTime|[StatusUpdateDateTime](#schemastatusupdatedatetime)|false|none|Date and time at which the resource status was updated. All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|Currency|[ActiveOrHistoricCurrencyCode_0](#schemaactiveorhistoriccurrencycode_0)|false|none|Identification of the currency in which the account is held. <br>Usage: Currency should only be used in case one and the same account number covers several currencies<br>and the initiating party needs to identify which currency needs to be used for settlement on the account.|
|AccountCategory|[OBInternalAccountType1Code](#schemaobinternalaccounttype1code)|false|none|Specifies the type of account (personal or business). <br /> For a full list of enumeration values refer to 'OBInternalAccountType1Code' in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)|
|AccountTypeCode|[OBExternalAccountSubType1Code](#schemaobexternalaccountsubtype1code)|false|none|Specifies the sub type of account (product family group) <br /> For a full list of enumeration values refer to `OBExternalCashAccountType1Code` *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)|
|Description|[Description_0](#schemadescription_0)|false|none|Specifies the description of the account type.|
|Nickname|[Nickname](#schemanickname)|false|none|The nickname of the account, assigned by the account owner in order to provide an additional means of identification of the account.|
|OpeningDate|[OpeningDate](#schemaopeningdate)|false|none|Date on which the account and related basic services are effectively operational for the account owner. All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|MaturityDate|[MaturityDate](#schemamaturitydate)|false|none|Maturity date of the account. All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|SwitchStatus|[OBInternalSwitchStatusCode](#schemaobinternalswitchstatuscode)|false|none|Specifies the switch status for the account, in a coded form. <br /> For a full list of enumeration values refer to `OBInternalSwitchStatusCode` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)|
|Account|[object]|false|none|none|
|StatementFrequencyAndFormat|[StatementFrequencyAndFormat](#schemastatementfrequencyandformat)|false|none|none|
|Servicer|[OBBranchAndFinancialInstitutionIdentification5_0](#schemaobbranchandfinancialinstitutionidentification5_0)|false|none|Party that manages the account on behalf of the account owner, that is manages the registration and booking of entries on the account, calculates balances on the account and provides information about the account.|

#### Enumerated Values

|Property|Value|
|---|---|
|Status|Deleted|
|Status|Disabled|
|Status|Enabled|
|Status|Pending|
|Status|ProForma|
|AccountCategory|Business|
|AccountCategory|Personal|
|AccountTypeCode|CACC|
|AccountTypeCode|CARD|
|AccountTypeCode|CASH|
|AccountTypeCode|CHAR|
|AccountTypeCode|CISH|
|AccountTypeCode|COMM|
|AccountTypeCode|CPAC|
|AccountTypeCode|LLSV|
|AccountTypeCode|LOAN|
|AccountTypeCode|MGLD|
|AccountTypeCode|MOMA|
|AccountTypeCode|NREX|
|AccountTypeCode|ODFT|
|AccountTypeCode|ONDP|
|AccountTypeCode|OTHR|
|AccountTypeCode|SACC|
|AccountTypeCode|SLRY|
|AccountTypeCode|SVGS|
|AccountTypeCode|TAXE|
|AccountTypeCode|TRAN|
|AccountTypeCode|TRAS|
|AccountTypeCode|VACC|
|AccountTypeCode|NFCA|
|AccountTypeCode|MORT|
|AccountTypeCode|WALT|

<h2 id="tocS_OBAccount6Basic">OBAccount6Basic</h2>
<!-- backwards compatibility -->
<a id="schemaobaccount6basic"></a>
<a id="schema_OBAccount6Basic"></a>
<a id="tocSobaccount6basic"></a>
<a id="tocsobaccount6basic"></a>

```json
{
  "AccountId": "22289",
  "Status": "Enabled",
  "StatusUpdateDateTime": "1970-01-01T00:00:00Z",
  "Currency": "string",
  "AccountCategory": "Business",
  "AccountTypeCode": "CACC",
  "Description": "string",
  "Nickname": "string",
  "OpeningDate": "1970-01-01T00:00:00Z",
  "MaturityDate": "1970-01-01T00:00:00Z",
  "SwitchStatus": "string"
}
```

Unambiguous identification of the account to which credit and debit entries are made.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|[AccountId](#schemaaccountid)|true|none|A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.|
|Status|[OBInternalAccountStatus1Code](#schemaobinternalaccountstatus1code)|false|none|Specifies the status of account resource in code form. <br /><br>For a full list of enumeration values refer to `OBInternalAccountStatus1Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)|
|StatusUpdateDateTime|[StatusUpdateDateTime](#schemastatusupdatedatetime)|false|none|Date and time at which the resource status was updated. All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|Currency|[ActiveOrHistoricCurrencyCode_0](#schemaactiveorhistoriccurrencycode_0)|false|none|Identification of the currency in which the account is held. <br>Usage: Currency should only be used in case one and the same account number covers several currencies<br>and the initiating party needs to identify which currency needs to be used for settlement on the account.|
|AccountCategory|[OBInternalAccountType1Code](#schemaobinternalaccounttype1code)|false|none|Specifies the type of account (personal or business). <br /> For a full list of enumeration values refer to 'OBInternalAccountType1Code' in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)|
|AccountTypeCode|[OBExternalAccountSubType1Code](#schemaobexternalaccountsubtype1code)|false|none|Specifies the sub type of account (product family group) <br /> For a full list of enumeration values refer to `OBExternalCashAccountType1Code` *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)|
|Description|[Description_0](#schemadescription_0)|false|none|Specifies the description of the account type.|
|Nickname|[Nickname](#schemanickname)|false|none|The nickname of the account, assigned by the account owner in order to provide an additional means of identification of the account.|
|OpeningDate|[OpeningDate](#schemaopeningdate)|false|none|Date on which the account and related basic services are effectively operational for the account owner. All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|MaturityDate|[MaturityDate](#schemamaturitydate)|false|none|Maturity date of the account. All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|SwitchStatus|[OBInternalSwitchStatusCode](#schemaobinternalswitchstatuscode)|false|none|Specifies the switch status for the account, in a coded form. <br /> For a full list of enumeration values refer to `OBInternalSwitchStatusCode` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)|

#### Enumerated Values

|Property|Value|
|---|---|
|Status|Deleted|
|Status|Disabled|
|Status|Enabled|
|Status|Pending|
|Status|ProForma|
|AccountCategory|Business|
|AccountCategory|Personal|
|AccountTypeCode|CACC|
|AccountTypeCode|CARD|
|AccountTypeCode|CASH|
|AccountTypeCode|CHAR|
|AccountTypeCode|CISH|
|AccountTypeCode|COMM|
|AccountTypeCode|CPAC|
|AccountTypeCode|LLSV|
|AccountTypeCode|LOAN|
|AccountTypeCode|MGLD|
|AccountTypeCode|MOMA|
|AccountTypeCode|NREX|
|AccountTypeCode|ODFT|
|AccountTypeCode|ONDP|
|AccountTypeCode|OTHR|
|AccountTypeCode|SACC|
|AccountTypeCode|SLRY|
|AccountTypeCode|SVGS|
|AccountTypeCode|TAXE|
|AccountTypeCode|TRAN|
|AccountTypeCode|TRAS|
|AccountTypeCode|VACC|
|AccountTypeCode|NFCA|
|AccountTypeCode|MORT|
|AccountTypeCode|WALT|

<h2 id="tocS_OBAccount6Detail">OBAccount6Detail</h2>
<!-- backwards compatibility -->
<a id="schemaobaccount6detail"></a>
<a id="schema_OBAccount6Detail"></a>
<a id="tocSobaccount6detail"></a>
<a id="tocsobaccount6detail"></a>

```json
{
  "AccountId": "22289",
  "Status": "Enabled",
  "StatusUpdateDateTime": "1970-01-01T00:00:00Z",
  "Currency": "string",
  "AccountCategory": "Business",
  "AccountTypeCode": "CACC",
  "Description": "string",
  "Nickname": "string",
  "OpeningDate": "1970-01-01T00:00:00Z",
  "MaturityDate": "1970-01-01T00:00:00Z",
  "SwitchStatus": "string",
  "Account": [
    {
      "SchemeName": "string",
      "Identification": "80200112344562",
      "Name": "Jane Smith",
      "LEI": "IZ9Q00LZEVUKWCQY6X15",
      "SecondaryIdentification": "87562298675897"
    }
  ],
  "StatementFrequencyAndFormat": [
    {
      "Frequency": "YEAR",
      "CommunicationMethod": "EMAL",
      "Format": "DPDF",
      "DeliveryAddress": {
        "AddressType": "BIZZ",
        "Department": "Finance",
        "SubDepartment": "Payroll",
        "StreetName": "Bank Street",
        "BuildingNumber": "11",
        "BuildingName": "string",
        "Floor": "11",
        "UnitNumber": "A88",
        "Room": "Basement 03",
        "PostBox": "PO Box 123456",
        "TownLocationName": "London",
        "DistrictName": "Greater London",
        "CareOf": "Jane Smith",
        "PostCode": "EC2N 4AG",
        "TownName": "London",
        "CountrySubDivision": "string",
        "Country": "string",
        "AddressLine": [
          "string"
        ]
      }
    }
  ],
  "Servicer": {
    "SchemeName": "UK.OBIE.BICFI",
    "Identification": "80200112344562",
    "Name": "Agent Name"
  }
}
```

Unambiguous identification of the account to which credit and debit entries are made.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|[AccountId](#schemaaccountid)|true|none|A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.|
|Status|[OBInternalAccountStatus1Code](#schemaobinternalaccountstatus1code)|false|none|Specifies the status of account resource in code form. <br /><br>For a full list of enumeration values refer to `OBInternalAccountStatus1Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)|
|StatusUpdateDateTime|[StatusUpdateDateTime](#schemastatusupdatedatetime)|false|none|Date and time at which the resource status was updated. All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|Currency|[ActiveOrHistoricCurrencyCode_0](#schemaactiveorhistoriccurrencycode_0)|false|none|Identification of the currency in which the account is held. <br>Usage: Currency should only be used in case one and the same account number covers several currencies<br>and the initiating party needs to identify which currency needs to be used for settlement on the account.|
|AccountCategory|[OBInternalAccountType1Code](#schemaobinternalaccounttype1code)|false|none|Specifies the type of account (personal or business). <br /> For a full list of enumeration values refer to 'OBInternalAccountType1Code' in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)|
|AccountTypeCode|[OBExternalAccountSubType1Code](#schemaobexternalaccountsubtype1code)|false|none|Specifies the sub type of account (product family group) <br /> For a full list of enumeration values refer to `OBExternalCashAccountType1Code` *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)|
|Description|[Description_0](#schemadescription_0)|false|none|Specifies the description of the account type.|
|Nickname|[Nickname](#schemanickname)|false|none|The nickname of the account, assigned by the account owner in order to provide an additional means of identification of the account.|
|OpeningDate|[OpeningDate](#schemaopeningdate)|false|none|Date on which the account and related basic services are effectively operational for the account owner. All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|MaturityDate|[MaturityDate](#schemamaturitydate)|false|none|Maturity date of the account. All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|SwitchStatus|[OBInternalSwitchStatusCode](#schemaobinternalswitchstatuscode)|false|none|Specifies the switch status for the account, in a coded form. <br /> For a full list of enumeration values refer to `OBInternalSwitchStatusCode` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)|
|Account|[object]|true|none|none|
|StatementFrequencyAndFormat|[StatementFrequencyAndFormat](#schemastatementfrequencyandformat)|false|none|none|
|Servicer|[OBBranchAndFinancialInstitutionIdentification5_0](#schemaobbranchandfinancialinstitutionidentification5_0)|false|none|Party that manages the account on behalf of the account owner, that is manages the registration and booking of entries on the account, calculates balances on the account and provides information about the account.|

#### Enumerated Values

|Property|Value|
|---|---|
|Status|Deleted|
|Status|Disabled|
|Status|Enabled|
|Status|Pending|
|Status|ProForma|
|AccountCategory|Business|
|AccountCategory|Personal|
|AccountTypeCode|CACC|
|AccountTypeCode|CARD|
|AccountTypeCode|CASH|
|AccountTypeCode|CHAR|
|AccountTypeCode|CISH|
|AccountTypeCode|COMM|
|AccountTypeCode|CPAC|
|AccountTypeCode|LLSV|
|AccountTypeCode|LOAN|
|AccountTypeCode|MGLD|
|AccountTypeCode|MOMA|
|AccountTypeCode|NREX|
|AccountTypeCode|ODFT|
|AccountTypeCode|ONDP|
|AccountTypeCode|OTHR|
|AccountTypeCode|SACC|
|AccountTypeCode|SLRY|
|AccountTypeCode|SVGS|
|AccountTypeCode|TAXE|
|AccountTypeCode|TRAN|
|AccountTypeCode|TRAS|
|AccountTypeCode|VACC|
|AccountTypeCode|NFCA|
|AccountTypeCode|MORT|
|AccountTypeCode|WALT|

<h2 id="tocS_OBInternalAccountStatus1Code">OBInternalAccountStatus1Code</h2>
<!-- backwards compatibility -->
<a id="schemaobinternalaccountstatus1code"></a>
<a id="schema_OBInternalAccountStatus1Code"></a>
<a id="tocSobinternalaccountstatus1code"></a>
<a id="tocsobinternalaccountstatus1code"></a>

```json
"Enabled"
```

Specifies the status of account resource in code form. <br />
For a full list of enumeration values refer to `OBInternalAccountStatus1Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)

<h2 id="tocS_OBActiveCurrencyAndAmount_SimpleType">OBActiveCurrencyAndAmount_SimpleType</h2>
<!-- backwards compatibility -->
<a id="schemaobactivecurrencyandamount_simpletype"></a>
<a id="schema_OBActiveCurrencyAndAmount_SimpleType"></a>
<a id="tocSobactivecurrencyandamount_simpletype"></a>
<a id="tocsobactivecurrencyandamount_simpletype"></a>

```json
"1209.06"
```

A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.

<h2 id="tocS_OBActiveOrHistoricCurrencyAndAmount_0">OBActiveOrHistoricCurrencyAndAmount_0</h2>
<!-- backwards compatibility -->
<a id="schemaobactiveorhistoriccurrencyandamount_0"></a>
<a id="schema_OBActiveOrHistoricCurrencyAndAmount_0"></a>
<a id="tocSobactiveorhistoriccurrencyandamount_0"></a>
<a id="tocsobactiveorhistoriccurrencyandamount_0"></a>

```json
{
  "Amount": "1209.06",
  "Currency": "GBP"
}
```

The amount of the most recent direct debit collection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Amount|[OBActiveCurrencyAndAmount_SimpleType](#schemaobactivecurrencyandamount_simpletype)|true|none|A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.|
|Currency|[ActiveOrHistoricCurrencyCode_1](#schemaactiveorhistoriccurrencycode_1)|true|none|A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".|

<h2 id="tocS_OBActiveOrHistoricCurrencyAndAmount_1">OBActiveOrHistoricCurrencyAndAmount_1</h2>
<!-- backwards compatibility -->
<a id="schemaobactiveorhistoriccurrencyandamount_1"></a>
<a id="schema_OBActiveOrHistoricCurrencyAndAmount_1"></a>
<a id="tocSobactiveorhistoriccurrencyandamount_1"></a>
<a id="tocsobactiveorhistoriccurrencyandamount_1"></a>

```json
{
  "Amount": "1209.06",
  "Currency": "GBP"
}
```

Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
Usage: This amount has to be transported unchanged through the transaction chain.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Amount|[OBActiveCurrencyAndAmount_SimpleType](#schemaobactivecurrencyandamount_simpletype)|true|none|A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.|
|Currency|[ActiveOrHistoricCurrencyCode_1](#schemaactiveorhistoriccurrencycode_1)|true|none|A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".|

<h2 id="tocS_OBActiveOrHistoricCurrencyAndAmount_10">OBActiveOrHistoricCurrencyAndAmount_10</h2>
<!-- backwards compatibility -->
<a id="schemaobactiveorhistoriccurrencyandamount_10"></a>
<a id="schema_OBActiveOrHistoricCurrencyAndAmount_10"></a>
<a id="tocSobactiveorhistoriccurrencyandamount_10"></a>
<a id="tocsobactiveorhistoriccurrencyandamount_10"></a>

```json
{
  "Amount": "1209.06",
  "Currency": "GBP"
}
```

Transaction charges to be paid by the charge bearer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Amount|[OBActiveCurrencyAndAmount_SimpleType](#schemaobactivecurrencyandamount_simpletype)|true|none|A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.|
|Currency|[ActiveOrHistoricCurrencyCode_1](#schemaactiveorhistoriccurrencycode_1)|true|none|A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".|

<h2 id="tocS_OBActiveOrHistoricCurrencyAndAmount_11">OBActiveOrHistoricCurrencyAndAmount_11</h2>
<!-- backwards compatibility -->
<a id="schemaobactiveorhistoriccurrencyandamount_11"></a>
<a id="schema_OBActiveOrHistoricCurrencyAndAmount_11"></a>
<a id="tocSobactiveorhistoriccurrencyandamount_11"></a>
<a id="tocsobactiveorhistoriccurrencyandamount_11"></a>

```json
{
  "Amount": "1209.06",
  "Currency": "GBP"
}
```

The amount of the last (most recent) Standing Order instruction.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Amount|[OBActiveCurrencyAndAmount_SimpleType](#schemaobactivecurrencyandamount_simpletype)|true|none|A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.|
|Currency|[ActiveOrHistoricCurrencyCode_1](#schemaactiveorhistoriccurrencycode_1)|true|none|A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".|

<h2 id="tocS_OBActiveOrHistoricCurrencyAndAmount_2">OBActiveOrHistoricCurrencyAndAmount_2</h2>
<!-- backwards compatibility -->
<a id="schemaobactiveorhistoriccurrencyandamount_2"></a>
<a id="schema_OBActiveOrHistoricCurrencyAndAmount_2"></a>
<a id="tocSobactiveorhistoriccurrencyandamount_2"></a>
<a id="tocsobactiveorhistoriccurrencyandamount_2"></a>

```json
{
  "Amount": "1209.06",
  "Currency": "GBP"
}
```

The amount of the first Standing Order

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Amount|[OBActiveCurrencyAndAmount_SimpleType](#schemaobactivecurrencyandamount_simpletype)|true|none|A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.|
|Currency|[ActiveOrHistoricCurrencyCode_1](#schemaactiveorhistoriccurrencycode_1)|true|none|A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".|

<h2 id="tocS_OBActiveOrHistoricCurrencyAndAmount_3">OBActiveOrHistoricCurrencyAndAmount_3</h2>
<!-- backwards compatibility -->
<a id="schemaobactiveorhistoriccurrencyandamount_3"></a>
<a id="schema_OBActiveOrHistoricCurrencyAndAmount_3"></a>
<a id="tocSobactiveorhistoriccurrencyandamount_3"></a>
<a id="tocsobactiveorhistoriccurrencyandamount_3"></a>

```json
{
  "Amount": "1209.06",
  "Currency": "GBP"
}
```

The amount of the next Standing Order.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Amount|[OBActiveCurrencyAndAmount_SimpleType](#schemaobactivecurrencyandamount_simpletype)|true|none|A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.|
|Currency|[ActiveOrHistoricCurrencyCode_1](#schemaactiveorhistoriccurrencycode_1)|true|none|A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".|

<h2 id="tocS_OBActiveOrHistoricCurrencyAndAmount_4">OBActiveOrHistoricCurrencyAndAmount_4</h2>
<!-- backwards compatibility -->
<a id="schemaobactiveorhistoriccurrencyandamount_4"></a>
<a id="schema_OBActiveOrHistoricCurrencyAndAmount_4"></a>
<a id="tocSobactiveorhistoriccurrencyandamount_4"></a>
<a id="tocsobactiveorhistoriccurrencyandamount_4"></a>

```json
{
  "Amount": "1209.06",
  "Currency": "GBP"
}
```

The amount of the final Standing Order

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Amount|[OBActiveCurrencyAndAmount_SimpleType](#schemaobactivecurrencyandamount_simpletype)|true|none|A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.|
|Currency|[ActiveOrHistoricCurrencyCode_1](#schemaactiveorhistoriccurrencycode_1)|true|none|A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".|

<h2 id="tocS_OBActiveOrHistoricCurrencyAndAmount_5">OBActiveOrHistoricCurrencyAndAmount_5</h2>
<!-- backwards compatibility -->
<a id="schemaobactiveorhistoriccurrencyandamount_5"></a>
<a id="schema_OBActiveOrHistoricCurrencyAndAmount_5"></a>
<a id="tocSobactiveorhistoriccurrencyandamount_5"></a>
<a id="tocsobactiveorhistoriccurrencyandamount_5"></a>

```json
{
  "Amount": "1209.06",
  "Currency": "GBP"
}
```

Amount of money associated with the statement benefit type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Amount|[OBActiveCurrencyAndAmount_SimpleType](#schemaobactivecurrencyandamount_simpletype)|true|none|A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.|
|Currency|[ActiveOrHistoricCurrencyCode_1](#schemaactiveorhistoriccurrencycode_1)|true|none|A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".|

<h2 id="tocS_OBActiveOrHistoricCurrencyAndAmount_6">OBActiveOrHistoricCurrencyAndAmount_6</h2>
<!-- backwards compatibility -->
<a id="schemaobactiveorhistoriccurrencyandamount_6"></a>
<a id="schema_OBActiveOrHistoricCurrencyAndAmount_6"></a>
<a id="tocSobactiveorhistoriccurrencyandamount_6"></a>
<a id="tocsobactiveorhistoriccurrencyandamount_6"></a>

```json
{
  "Amount": "1209.06",
  "Currency": "GBP"
}
```

Amount of money associated with the statement fee type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Amount|[OBActiveCurrencyAndAmount_SimpleType](#schemaobactivecurrencyandamount_simpletype)|true|none|A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.|
|Currency|[ActiveOrHistoricCurrencyCode_1](#schemaactiveorhistoriccurrencycode_1)|true|none|A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".|

<h2 id="tocS_OBActiveOrHistoricCurrencyAndAmount_7">OBActiveOrHistoricCurrencyAndAmount_7</h2>
<!-- backwards compatibility -->
<a id="schemaobactiveorhistoriccurrencyandamount_7"></a>
<a id="schema_OBActiveOrHistoricCurrencyAndAmount_7"></a>
<a id="tocSobactiveorhistoriccurrencyandamount_7"></a>
<a id="tocsobactiveorhistoriccurrencyandamount_7"></a>

```json
{
  "Amount": "1209.06",
  "Currency": "GBP"
}
```

Amount of money associated with the statement interest amount type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Amount|[OBActiveCurrencyAndAmount_SimpleType](#schemaobactivecurrencyandamount_simpletype)|true|none|A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.|
|Currency|[ActiveOrHistoricCurrencyCode_1](#schemaactiveorhistoriccurrencycode_1)|true|none|A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".|

<h2 id="tocS_OBActiveOrHistoricCurrencyAndAmount_8">OBActiveOrHistoricCurrencyAndAmount_8</h2>
<!-- backwards compatibility -->
<a id="schemaobactiveorhistoriccurrencyandamount_8"></a>
<a id="schema_OBActiveOrHistoricCurrencyAndAmount_8"></a>
<a id="tocSobactiveorhistoriccurrencyandamount_8"></a>
<a id="tocsobactiveorhistoriccurrencyandamount_8"></a>

```json
{
  "Amount": "1209.06",
  "Currency": "GBP",
  "SubType": "BCUR"
}
```

Amount of money associated with the amount type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Amount|[OBActiveCurrencyAndAmount_SimpleType](#schemaobactivecurrencyandamount_simpletype)|true|none|A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.|
|Currency|[ActiveOrHistoricCurrencyCode_1](#schemaactiveorhistoriccurrencycode_1)|true|none|A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".|
|SubType|[OBExternalBalanceSubType1Code](#schemaobexternalbalancesubtype1code)|false|none|Amount sub type, in a coded form. Default if not specified is BCUR of the account.|

#### Enumerated Values

|Property|Value|
|---|---|
|SubType|BCUR|
|SubType|LCUR|

<h2 id="tocS_OBActiveOrHistoricCurrencyAndAmount_9">OBActiveOrHistoricCurrencyAndAmount_9</h2>
<!-- backwards compatibility -->
<a id="schemaobactiveorhistoriccurrencyandamount_9"></a>
<a id="schema_OBActiveOrHistoricCurrencyAndAmount_9"></a>
<a id="tocSobactiveorhistoriccurrencyandamount_9"></a>
<a id="tocsobactiveorhistoriccurrencyandamount_9"></a>

```json
{
  "Amount": "1209.06",
  "Currency": "GBP"
}
```

Amount of money in the cash transaction entry.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Amount|[OBActiveCurrencyAndAmount_SimpleType](#schemaobactivecurrencyandamount_simpletype)|true|none|A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.|
|Currency|[ActiveOrHistoricCurrencyCode_1](#schemaactiveorhistoriccurrencycode_1)|true|none|A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".|

<h2 id="tocS_OBAddressType2Code">OBAddressType2Code</h2>
<!-- backwards compatibility -->
<a id="schemaobaddresstype2code"></a>
<a id="schema_OBAddressType2Code"></a>
<a id="tocSobaddresstype2code"></a>
<a id="tocsobaddresstype2code"></a>

```json
"BIZZ"
```

Identifies the nature of the postal address. <br /> For a full set of codes see `OBAddressType2Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets).

<h2 id="tocS_OBBCAData1">OBBCAData1</h2>
<!-- backwards compatibility -->
<a id="schemaobbcadata1"></a>
<a id="schema_OBBCAData1"></a>
<a id="tocSobbcadata1"></a>
<a id="tocsobbcadata1"></a>

```json
{
  "ProductDetails": {
    "Segment": [
      "ClientAccount"
    ],
    "FeeFreeLength": 0,
    "FeeFreeLengthPeriod": "Day",
    "Notes": [
      "string"
    ]
  },
  "CreditInterest": {
    "TierBandSet": [
      {
        "TierBandMethod": "Banded",
        "CalculationMethod": "Compound",
        "Destination": "PayAway",
        "Notes": [
          "string"
        ],
        "TierBand": [
          {
            "Identification": "string",
            "TierValueMinimum": "string",
            "TierValueMaximum": "string",
            "CalculationFrequency": "Daily",
            "ApplicationFrequency": "Daily",
            "DepositInterestAppliedCoverage": "Banded",
            "FixedVariableInterestRateType": "Fixed",
            "AER": "string",
            "BankInterestRateType": "Gross",
            "BankInterestRate": "string",
            "Notes": [
              "string"
            ],
            "OtherBankInterestType": {
              "Code": "stri",
              "Name": "string",
              "Description": "string"
            },
            "OtherApplicationFrequency": {
              "Code": "stri",
              "Name": "string",
              "Description": "string"
            },
            "OtherCalculationFrequency": {
              "Code": "stri",
              "Name": "string",
              "Description": "string"
            }
          }
        ]
      }
    ]
  },
  "Overdraft": {
    "Notes": [
      "string"
    ],
    "OverdraftTierBandSet": [
      {
        "TierBandMethod": "Banded",
        "OverdraftType": "Committed",
        "Identification": "string",
        "AuthorisedIndicator": true,
        "BufferAmount": "string",
        "Notes": [
          "string"
        ],
        "OverdraftTierBand": [
          {
            "Identification": "string",
            "TierValueMin": "string",
            "TierValueMax": "string",
            "EAR": "string",
            "RepresentativeAPR": "string",
            "AgreementLengthMin": 0,
            "AgreementLengthMax": 0,
            "AgreementPeriod": "Day",
            "OverdraftInterestChargingCoverage": "Banded",
            "BankGuaranteedIndicator": true,
            "Notes": [
              "string"
            ],
            "OverdraftFeesCharges": [
              {
                "OverdraftFeeChargeCap": [
                  {
                    "FeeType": [
                      "ArrangedOverdraft"
                    ],
                    "MinMaxType": "Minimum",
                    "FeeCapOccurrence": 0,
                    "FeeCapAmount": "string",
                    "CappingPeriod": "Day",
                    "Notes": [
                      "string"
                    ],
                    "OtherFeeType": [
                      {
                        "Code": "stri",
                        "Name": "string",
                        "Description": "string"
                      }
                    ]
                  }
                ],
                "OverdraftFeeChargeDetail": [
                  {
                    "FeeType": "ArrangedOverdraft",
                    "NegotiableIndicator": true,
                    "OverdraftControlIndicator": true,
                    "IncrementalBorrowingAmount": "string",
                    "FeeAmount": "string",
                    "FeeRate": "string",
                    "FeeRateType": "Gross",
                    "ApplicationFrequency": "OnClosing",
                    "CalculationFrequency": "OnClosing",
                    "Notes": [
                      "string"
                    ],
                    "OverdraftFeeChargeCap": [
                      {
                        "FeeType": [
                          "ArrangedOverdraft"
                        ],
                        "MinMaxType": "Minimum",
                        "FeeCapOccurrence": 0,
                        "FeeCapAmount": "string",
                        "CappingPeriod": "Day",
                        "Notes": [
                          "string"
                        ],
                        "OtherFeeType": [
                          {
                            "Code": "stri",
                            "Name": "string",
                            "Description": "string"
                          }
                        ]
                      }
                    ],
                    "OtherFeeType": {
                      "Code": "stri",
                      "Name": "string",
                      "Description": "string"
                    },
                    "OtherFeeRateType": {
                      "Code": "stri",
                      "Name": "string",
                      "Description": "string"
                    },
                    "OtherApplicationFrequency": {
                      "Code": "stri",
                      "Name": "string",
                      "Description": "string"
                    },
                    "OtherCalculationFrequency": {
                      "Code": "stri",
                      "Name": "string",
                      "Description": "string"
                    }
                  }
                ]
              }
            ]
          }
        ],
        "OverdraftFeesCharges": [
          {
            "OverdraftFeeChargeCap": [
              {
                "FeeType": [
                  "ArrangedOverdraft"
                ],
                "MinMaxType": "Minimum",
                "FeeCapOccurrence": 0,
                "FeeCapAmount": "string",
                "CappingPeriod": "Day",
                "Notes": [
                  "string"
                ],
                "OtherFeeType": [
                  {
                    "Code": "stri",
                    "Name": "string",
                    "Description": "string"
                  }
                ]
              }
            ],
            "OverdraftFeeChargeDetail": [
              {
                "FeeType": "ArrangedOverdraft",
                "NegotiableIndicator": true,
                "OverdraftControlIndicator": true,
                "IncrementalBorrowingAmount": "string",
                "FeeAmount": "string",
                "FeeRate": "string",
                "FeeRateType": "Gross",
                "ApplicationFrequency": "OnClosing",
                "CalculationFrequency": "OnClosing",
                "Notes": [
                  "string"
                ],
                "OverdraftFeeChargeCap": [
                  {
                    "FeeType": [
                      "ArrangedOverdraft"
                    ],
                    "MinMaxType": "Minimum",
                    "FeeCapOccurrence": 0,
                    "FeeCapAmount": "string",
                    "CappingPeriod": "Day",
                    "Notes": [
                      "string"
                    ],
                    "OtherFeeType": [
                      {
                        "Code": "stri",
                        "Name": "string",
                        "Description": "string"
                      }
                    ]
                  }
                ],
                "OtherFeeType": {
                  "Code": "stri",
                  "Name": "string",
                  "Description": "string"
                },
                "OtherFeeRateType": {
                  "Code": "stri",
                  "Name": "string",
                  "Description": "string"
                },
                "OtherApplicationFrequency": {
                  "Code": "stri",
                  "Name": "string",
                  "Description": "string"
                },
                "OtherCalculationFrequency": {
                  "Code": "stri",
                  "Name": "string",
                  "Description": "string"
                }
              }
            ]
          }
        ]
      }
    ]
  },
  "OtherFeesCharges": [
    {
      "TariffType": "Electronic",
      "TariffName": "string",
      "OtherTariffType": {
        "Code": "stri",
        "Name": "string",
        "Description": "string"
      },
      "FeeChargeDetail": [
        {
          "FeeCategory": "Other",
          "FeeType": "Other",
          "NegotiableIndicator": true,
          "FeeAmount": "string",
          "FeeRate": "string",
          "FeeRateType": "Gross",
          "ApplicationFrequency": "OnClosing",
          "CalculationFrequency": "OnClosing",
          "Notes": [
            "string"
          ],
          "FeeChargeCap": [
            {
              "FeeType": [
                "Other"
              ],
              "MinMaxType": "Minimum",
              "FeeCapOccurrence": 0,
              "FeeCapAmount": "string",
              "CappingPeriod": "Day",
              "Notes": [
                "string"
              ],
              "OtherFeeType": [
                {
                  "Code": "stri",
                  "Name": "string",
                  "Description": "string"
                }
              ]
            }
          ],
          "OtherFeeCategoryType": {
            "Code": "stri",
            "Name": "string",
            "Description": "string"
          },
          "OtherFeeType": {
            "Code": "stri",
            "FeeCategory": "Other",
            "Name": "string",
            "Description": "string"
          },
          "OtherFeeRateType": {
            "Code": "stri",
            "Name": "string",
            "Description": "string"
          },
          "OtherApplicationFrequency": {
            "Code": "stri",
            "Name": "string",
            "Description": "string"
          },
          "OtherCalculationFrequency": {
            "Code": "stri",
            "Name": "string",
            "Description": "string"
          },
          "FeeApplicableRange": {
            "MinimumAmount": "string",
            "MaximumAmount": "string",
            "MinimumRate": "string",
            "MaximumRate": "string"
          }
        }
      ],
      "FeeChargeCap": [
        {
          "FeeType": [
            "Other"
          ],
          "MinMaxType": "Minimum",
          "FeeCapOccurrence": 0,
          "FeeCapAmount": "string",
          "CappingPeriod": "Day",
          "Notes": [
            "string"
          ],
          "OtherFeeType": [
            {
              "Code": "stri",
              "Name": "string",
              "Description": "string"
            }
          ]
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProductDetails|object|false|none|none|
|CreditInterest|object|false|none|Details about the interest that may be payable to the BCA account holders|
|Overdraft|object|false|none|Borrowing details|
|OtherFeesCharges|[object]|false|none|Contains details of fees and charges which are not associated with either Overdraft or features/benefits|

<h2 id="tocS_OBBalanceType1Code">OBBalanceType1Code</h2>
<!-- backwards compatibility -->
<a id="schemaobbalancetype1code"></a>
<a id="schema_OBBalanceType1Code"></a>
<a id="tocSobbalancetype1code"></a>
<a id="tocsobbalancetype1code"></a>

```json
"CLAV"
```

Balance type, in a coded form. <br /> For a full list of enumeration values refer to `ExternalBalanceType1Code` in *ISO_External_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets).

<h2 id="tocS_OBBankTransactionCodeStructure1">OBBankTransactionCodeStructure1</h2>
<!-- backwards compatibility -->
<a id="schemaobbanktransactioncodestructure1"></a>
<a id="schema_OBBankTransactionCodeStructure1"></a>
<a id="tocSobbanktransactioncodestructure1"></a>
<a id="tocsobbanktransactioncodestructure1"></a>

```json
{
  "Code": "string",
  "SubCode": "string"
}
```

Set of elements used to fully identify the type of underlying transaction resulting in an entry.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Code|string|true|none|Specifies the family within a domain.|
|SubCode|string|true|none|Specifies the sub-product family within a specific family.|

<h2 id="tocS_OBBeneficiary5">OBBeneficiary5</h2>
<!-- backwards compatibility -->
<a id="schemaobbeneficiary5"></a>
<a id="schema_OBBeneficiary5"></a>
<a id="tocSobbeneficiary5"></a>
<a id="tocsobbeneficiary5"></a>

```json
{
  "AccountId": "22289",
  "BeneficiaryId": "Ben1",
  "BeneficiaryType": "Ordinary",
  "Reference": "Towbar Club",
  "SupplementaryData": {},
  "CreditorAgent": {
    "SchemeName": "UK.OBIE.BICFI",
    "Identification": "80200112344562",
    "Name": "Agent Name",
    "PostalAddress": {
      "AddressType": "BIZZ",
      "Department": "Finance",
      "SubDepartment": "Payroll",
      "StreetName": "Bank Street",
      "BuildingNumber": "11",
      "BuildingName": "string",
      "Floor": "11",
      "UnitNumber": "A88",
      "Room": "Basement 03",
      "PostBox": "PO Box 123456",
      "TownLocationName": "London",
      "DistrictName": "Greater London",
      "CareOf": "Jane Smith",
      "PostCode": "EC2N 4AG",
      "TownName": "London",
      "CountrySubDivision": "string",
      "Country": "string",
      "AddressLine": [
        "string"
      ]
    },
    "LEI": "IZ9Q00LZEVUKWCQY6X15"
  },
  "CreditorAccount": {
    "SchemeName": "string",
    "Identification": "80200112344562",
    "Name": "Jane Smith",
    "SecondaryIdentification": "87562298675897",
    "Proxy": {
      "Identification": "2360549017905188",
      "Code": "TELE",
      "Type": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|[AccountId](#schemaaccountid)|false|none|A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.|
|BeneficiaryId|[BeneficiaryId](#schemabeneficiaryid)|false|none|A unique and immutable identifier used to identify the beneficiary resource. This identifier has no meaning to the account owner.|
|BeneficiaryType|[OBInternalBeneficiaryType1Code](#schemaobinternalbeneficiarytype1code)|false|none|Specifies the Beneficiary Type.|
|Reference|[Reference](#schemareference)|false|none|Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.<br>Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.<br>If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.|
|SupplementaryData|[OBSupplementaryData1](#schemaobsupplementarydata1)|false|none|Additional information that can not be captured in the structured fields and/or any other specific block.|
|CreditorAgent|[OBBranchAndFinancialInstitutionIdentification6_0](#schemaobbranchandfinancialinstitutionidentification6_0)|false|none|Party that manages the account on behalf of the account owner, that is manages the registration and booking of entries on the account, calculates balances on the account and provides information about the account.<br>This is the servicer of the beneficiary account.|
|CreditorAccount|[OBCashAccount5_0](#schemaobcashaccount5_0)|false|none|Provides the details to identify the beneficiary account.|

#### Enumerated Values

|Property|Value|
|---|---|
|BeneficiaryType|Trusted|
|BeneficiaryType|Ordinary|

<h2 id="tocS_OBBeneficiary5Basic">OBBeneficiary5Basic</h2>
<!-- backwards compatibility -->
<a id="schemaobbeneficiary5basic"></a>
<a id="schema_OBBeneficiary5Basic"></a>
<a id="tocSobbeneficiary5basic"></a>
<a id="tocsobbeneficiary5basic"></a>

```json
{
  "AccountId": "22289",
  "BeneficiaryId": "Ben1",
  "BeneficiaryType": "Ordinary",
  "Reference": "Towbar Club",
  "SupplementaryData": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|[AccountId](#schemaaccountid)|false|none|A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.|
|BeneficiaryId|[BeneficiaryId](#schemabeneficiaryid)|false|none|A unique and immutable identifier used to identify the beneficiary resource. This identifier has no meaning to the account owner.|
|BeneficiaryType|[OBInternalBeneficiaryType1Code](#schemaobinternalbeneficiarytype1code)|false|none|Specifies the Beneficiary Type.|
|Reference|[Reference](#schemareference)|false|none|Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.<br>Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.<br>If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.|
|SupplementaryData|[OBSupplementaryData1](#schemaobsupplementarydata1)|false|none|Additional information that can not be captured in the structured fields and/or any other specific block.|

#### Enumerated Values

|Property|Value|
|---|---|
|BeneficiaryType|Trusted|
|BeneficiaryType|Ordinary|

<h2 id="tocS_OBBeneficiary5Detail">OBBeneficiary5Detail</h2>
<!-- backwards compatibility -->
<a id="schemaobbeneficiary5detail"></a>
<a id="schema_OBBeneficiary5Detail"></a>
<a id="tocSobbeneficiary5detail"></a>
<a id="tocsobbeneficiary5detail"></a>

```json
{
  "AccountId": "22289",
  "BeneficiaryId": "Ben1",
  "BeneficiaryType": "Ordinary",
  "Reference": "Towbar Club",
  "SupplementaryData": {},
  "CreditorAgent": {
    "SchemeName": "UK.OBIE.BICFI",
    "Identification": "80200112344562",
    "Name": "Agent Name",
    "PostalAddress": {
      "AddressType": "BIZZ",
      "Department": "Finance",
      "SubDepartment": "Payroll",
      "StreetName": "Bank Street",
      "BuildingNumber": "11",
      "BuildingName": "string",
      "Floor": "11",
      "UnitNumber": "A88",
      "Room": "Basement 03",
      "PostBox": "PO Box 123456",
      "TownLocationName": "London",
      "DistrictName": "Greater London",
      "CareOf": "Jane Smith",
      "PostCode": "EC2N 4AG",
      "TownName": "London",
      "CountrySubDivision": "string",
      "Country": "string",
      "AddressLine": [
        "string"
      ]
    },
    "LEI": "IZ9Q00LZEVUKWCQY6X15"
  },
  "CreditorAccount": {
    "SchemeName": "string",
    "Identification": "80200112344562",
    "Name": "Jane Smith",
    "SecondaryIdentification": "87562298675897",
    "Proxy": {
      "Identification": "2360549017905188",
      "Code": "TELE",
      "Type": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|[AccountId](#schemaaccountid)|false|none|A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.|
|BeneficiaryId|[BeneficiaryId](#schemabeneficiaryid)|false|none|A unique and immutable identifier used to identify the beneficiary resource. This identifier has no meaning to the account owner.|
|BeneficiaryType|[OBInternalBeneficiaryType1Code](#schemaobinternalbeneficiarytype1code)|false|none|Specifies the Beneficiary Type.|
|Reference|[Reference](#schemareference)|false|none|Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.<br>Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.<br>If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.|
|SupplementaryData|[OBSupplementaryData1](#schemaobsupplementarydata1)|false|none|Additional information that can not be captured in the structured fields and/or any other specific block.|
|CreditorAgent|[OBBranchAndFinancialInstitutionIdentification6_0](#schemaobbranchandfinancialinstitutionidentification6_0)|false|none|Party that manages the account on behalf of the account owner, that is manages the registration and booking of entries on the account, calculates balances on the account and provides information about the account.<br>This is the servicer of the beneficiary account.|
|CreditorAccount|[OBCashAccount5_0](#schemaobcashaccount5_0)|true|none|Provides the details to identify the beneficiary account.|

#### Enumerated Values

|Property|Value|
|---|---|
|BeneficiaryType|Trusted|
|BeneficiaryType|Ordinary|

<h2 id="tocS_OBBranchAndFinancialInstitutionIdentification5_0">OBBranchAndFinancialInstitutionIdentification5_0</h2>
<!-- backwards compatibility -->
<a id="schemaobbranchandfinancialinstitutionidentification5_0"></a>
<a id="schema_OBBranchAndFinancialInstitutionIdentification5_0"></a>
<a id="tocSobbranchandfinancialinstitutionidentification5_0"></a>
<a id="tocsobbranchandfinancialinstitutionidentification5_0"></a>

```json
{
  "SchemeName": "UK.OBIE.BICFI",
  "Identification": "80200112344562",
  "Name": "Agent Name"
}
```

Party that manages the account on behalf of the account owner, that is manages the registration and booking of entries on the account, calculates balances on the account and provides information about the account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SchemeName|[OBInternalFinancialInstitutionIdentification4Code](#schemaobinternalfinancialinstitutionidentification4code)|true|none|Name of the identification scheme, in a coded form as published in an external list.<br/> For a full list of enumeration values refer to `OBInternalFinancialInstitutionIdentification4Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)|
|Identification|[Identification_1](#schemaidentification_1)|true|none|Unique and unambiguous identification of the servicing institution.|
|Name|[Name_1](#schemaname_1)|false|none|Name by which an agent is known and which is usually used to identify that agent.|

<h2 id="tocS_OBBranchAndFinancialInstitutionIdentification5_1">OBBranchAndFinancialInstitutionIdentification5_1</h2>
<!-- backwards compatibility -->
<a id="schemaobbranchandfinancialinstitutionidentification5_1"></a>
<a id="schema_OBBranchAndFinancialInstitutionIdentification5_1"></a>
<a id="tocSobbranchandfinancialinstitutionidentification5_1"></a>
<a id="tocsobbranchandfinancialinstitutionidentification5_1"></a>

```json
{
  "SchemeName": "UK.OBIE.BICFI",
  "Identification": "80200112344562",
  "Name": "Agent Name",
  "PostalAddress": {
    "AddressType": "BIZZ",
    "Department": "Finance",
    "SubDepartment": "Payroll",
    "StreetName": "Bank Street",
    "BuildingNumber": "11",
    "BuildingName": "string",
    "Floor": "11",
    "UnitNumber": "A88",
    "Room": "Basement 03",
    "PostBox": "PO Box 123456",
    "TownLocationName": "London",
    "DistrictName": "Greater London",
    "CareOf": "Jane Smith",
    "PostCode": "EC2N 4AG",
    "TownName": "London",
    "CountrySubDivision": "string",
    "Country": "string",
    "AddressLine": [
      "string"
    ]
  },
  "LEI": "IZ9Q00LZEVUKWCQY6X15"
}
```

Party that manages the account on behalf of the account owner, that is manages the registration and booking of entries on the account, calculates balances on the account and provides information about the account.
This is the servicer of the beneficiary account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SchemeName|[OBInternalFinancialInstitutionIdentification4Code](#schemaobinternalfinancialinstitutionidentification4code)|true|none|Name of the identification scheme, in a coded form as published in an external list.<br/> For a full list of enumeration values refer to `OBInternalFinancialInstitutionIdentification4Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)|
|Identification|[Identification_1](#schemaidentification_1)|true|none|Unique and unambiguous identification of the servicing institution.|
|Name|[Name_1](#schemaname_1)|false|none|Name by which an agent is known and which is usually used to identify that agent.|
|PostalAddress|[OBPostalAddress7](#schemaobpostaladdress7)|false|none|Information that locates and identifies a specific address, as defined by postal services.|
|LEI|[LEI](#schemalei)|false|none|Legal entity identification as an alternate identification for a party. Legal Entity Identifier is a code allocated to a party as described in ISO 17442 "Financial Services - Legal Entity Identifier (LEI)".|

<h2 id="tocS_OBBranchAndFinancialInstitutionIdentification6_0">OBBranchAndFinancialInstitutionIdentification6_0</h2>
<!-- backwards compatibility -->
<a id="schemaobbranchandfinancialinstitutionidentification6_0"></a>
<a id="schema_OBBranchAndFinancialInstitutionIdentification6_0"></a>
<a id="tocSobbranchandfinancialinstitutionidentification6_0"></a>
<a id="tocsobbranchandfinancialinstitutionidentification6_0"></a>

```json
{
  "SchemeName": "UK.OBIE.BICFI",
  "Identification": "80200112344562",
  "Name": "Agent Name",
  "PostalAddress": {
    "AddressType": "BIZZ",
    "Department": "Finance",
    "SubDepartment": "Payroll",
    "StreetName": "Bank Street",
    "BuildingNumber": "11",
    "BuildingName": "string",
    "Floor": "11",
    "UnitNumber": "A88",
    "Room": "Basement 03",
    "PostBox": "PO Box 123456",
    "TownLocationName": "London",
    "DistrictName": "Greater London",
    "CareOf": "Jane Smith",
    "PostCode": "EC2N 4AG",
    "TownName": "London",
    "CountrySubDivision": "string",
    "Country": "string",
    "AddressLine": [
      "string"
    ]
  },
  "LEI": "IZ9Q00LZEVUKWCQY6X15"
}
```

Party that manages the account on behalf of the account owner, that is manages the registration and booking of entries on the account, calculates balances on the account and provides information about the account.
This is the servicer of the beneficiary account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SchemeName|[OBInternalFinancialInstitutionIdentification4Code](#schemaobinternalfinancialinstitutionidentification4code)|false|none|Name of the identification scheme, in a coded form as published in an external list.<br/> For a full list of enumeration values refer to `OBInternalFinancialInstitutionIdentification4Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)|
|Identification|[Identification_1](#schemaidentification_1)|false|none|Unique and unambiguous identification of the servicing institution.|
|Name|[Name_1](#schemaname_1)|false|none|Name by which an agent is known and which is usually used to identify that agent.|
|PostalAddress|[OBPostalAddress7](#schemaobpostaladdress7)|false|none|Information that locates and identifies a specific address, as defined by postal services.|
|LEI|[LEI](#schemalei)|false|none|Legal entity identification as an alternate identification for a party. Legal Entity Identifier is a code allocated to a party as described in ISO 17442 "Financial Services - Legal Entity Identifier (LEI)".|

<h2 id="tocS_OBBranchAndFinancialInstitutionIdentification6_1">OBBranchAndFinancialInstitutionIdentification6_1</h2>
<!-- backwards compatibility -->
<a id="schemaobbranchandfinancialinstitutionidentification6_1"></a>
<a id="schema_OBBranchAndFinancialInstitutionIdentification6_1"></a>
<a id="tocSobbranchandfinancialinstitutionidentification6_1"></a>
<a id="tocsobbranchandfinancialinstitutionidentification6_1"></a>

```json
{
  "SchemeName": "UK.OBIE.BICFI",
  "Identification": "string",
  "Name": "Agent Name",
  "LEI": "IZ9Q00LZEVUKWCQY6X15",
  "PostalAddress": {
    "AddressType": "BIZZ",
    "Department": "Finance",
    "SubDepartment": "Payroll",
    "StreetName": "Bank Street",
    "BuildingNumber": "11",
    "BuildingName": "string",
    "Floor": "11",
    "UnitNumber": "A88",
    "Room": "Basement 03",
    "PostBox": "PO Box 123456",
    "TownLocationName": "London",
    "DistrictName": "Greater London",
    "CareOf": "Jane Smith",
    "PostCode": "EC2N 4AG",
    "TownName": "London",
    "CountrySubDivision": "string",
    "Country": "string",
    "AddressLine": [
      "string"
    ]
  }
}
```

Financial institution servicing an account for the creditor.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SchemeName|[OBInternalFinancialInstitutionIdentification4Code](#schemaobinternalfinancialinstitutionidentification4code)|false|none|Name of the identification scheme, in a coded form as published in an external list.<br/> For a full list of enumeration values refer to `OBInternalFinancialInstitutionIdentification4Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)|
|Identification|[Identification_2](#schemaidentification_2)|false|none|Unique and unambiguous identification of a financial institution or a branch of a financial institution.|
|Name|[Name_1](#schemaname_1)|false|none|Name by which an agent is known and which is usually used to identify that agent.|
|LEI|[LEI](#schemalei)|false|none|Legal entity identification as an alternate identification for a party. Legal Entity Identifier is a code allocated to a party as described in ISO 17442 "Financial Services - Legal Entity Identifier (LEI)".|
|PostalAddress|[OBPostalAddress7](#schemaobpostaladdress7)|false|none|Information that locates and identifies a specific address, as defined by postal services.|

<h2 id="tocS_OBBranchAndFinancialInstitutionIdentification6_2">OBBranchAndFinancialInstitutionIdentification6_2</h2>
<!-- backwards compatibility -->
<a id="schemaobbranchandfinancialinstitutionidentification6_2"></a>
<a id="schema_OBBranchAndFinancialInstitutionIdentification6_2"></a>
<a id="tocSobbranchandfinancialinstitutionidentification6_2"></a>
<a id="tocsobbranchandfinancialinstitutionidentification6_2"></a>

```json
{
  "SchemeName": "UK.OBIE.BICFI",
  "Identification": "string",
  "Name": "Agent Name",
  "LEI": "IZ9Q00LZEVUKWCQY6X15",
  "PostalAddress": {
    "AddressType": "BIZZ",
    "Department": "Finance",
    "SubDepartment": "Payroll",
    "StreetName": "Bank Street",
    "BuildingNumber": "11",
    "BuildingName": "string",
    "Floor": "11",
    "UnitNumber": "A88",
    "Room": "Basement 03",
    "PostBox": "PO Box 123456",
    "TownLocationName": "London",
    "DistrictName": "Greater London",
    "CareOf": "Jane Smith",
    "PostCode": "EC2N 4AG",
    "TownName": "London",
    "CountrySubDivision": "string",
    "Country": "string",
    "AddressLine": [
      "string"
    ]
  }
}
```

Financial institution servicing an account for the debtor.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SchemeName|[OBInternalFinancialInstitutionIdentification4Code](#schemaobinternalfinancialinstitutionidentification4code)|false|none|Name of the identification scheme, in a coded form as published in an external list.<br/> For a full list of enumeration values refer to `OBInternalFinancialInstitutionIdentification4Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)|
|Identification|[Identification_2](#schemaidentification_2)|false|none|Unique and unambiguous identification of a financial institution or a branch of a financial institution.|
|Name|[Name_1](#schemaname_1)|false|none|Name by which an agent is known and which is usually used to identify that agent.|
|LEI|[LEI](#schemalei)|false|none|Legal entity identification as an alternate identification for a party. Legal Entity Identifier is a code allocated to a party as described in ISO 17442 "Financial Services - Legal Entity Identifier (LEI)".|
|PostalAddress|[OBPostalAddress7](#schemaobpostaladdress7)|false|none|Information that locates and identifies a specific address, as defined by postal services.|

<h2 id="tocS_OBCashAccount5_0">OBCashAccount5_0</h2>
<!-- backwards compatibility -->
<a id="schemaobcashaccount5_0"></a>
<a id="schema_OBCashAccount5_0"></a>
<a id="tocSobcashaccount5_0"></a>
<a id="tocsobcashaccount5_0"></a>

```json
{
  "SchemeName": "string",
  "Identification": "80200112344562",
  "Name": "Jane Smith",
  "SecondaryIdentification": "87562298675897",
  "Proxy": {
    "Identification": "2360549017905188",
    "Code": "TELE",
    "Type": "string"
  }
}
```

Provides the details to identify the beneficiary account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SchemeName|[OBInternalAccountIdentification4Code](#schemaobinternalaccountidentification4code)|true|none|Name of the identification scheme, in a coded form as published in an external list. <br /> For a full list of enumeration values refer to `OBInternalAccountIdentification4Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)|
|Identification|[Identification_0](#schemaidentification_0)|true|none|Identification assigned by an institution to identify an account. This identification is known by the account owner.|
|Name|[Name_0](#schemaname_0)|false|none|The account name is the name or names of the account owner(s) represented at an account level, as displayed by the ASPSP's online channels.<br>Note, the account name is not the product name or the nickname of the account.|
|SecondaryIdentification|[SecondaryIdentification](#schemasecondaryidentification)|false|none|This is secondary identification of the account, as assigned by the account servicing institution. <br>This can be used by building societies to additionally identify accounts with a roll number (in addition to a sort code and account number combination).|
|Proxy|[OBProxy1](#schemaobproxy1)|false|none|Specifies an alternate assumed name for the identification of the account.|

<h2 id="tocS_OBCashAccount5_1">OBCashAccount5_1</h2>
<!-- backwards compatibility -->
<a id="schemaobcashaccount5_1"></a>
<a id="schema_OBCashAccount5_1"></a>
<a id="tocSobcashaccount5_1"></a>
<a id="tocsobcashaccount5_1"></a>

```json
{
  "SchemeName": "string",
  "Identification": "string",
  "Name": "Jane Smith",
  "SecondaryIdentification": "87562298675897",
  "Proxy": {
    "Identification": "2360549017905188",
    "Code": "TELE",
    "Type": "string"
  }
}
```

Provides the details to identify the beneficiary account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SchemeName|[OBInternalAccountIdentification4Code](#schemaobinternalaccountidentification4code)|true|none|Name of the identification scheme, in a coded form as published in an external list. <br /> For a full list of enumeration values refer to `OBInternalAccountIdentification4Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)|
|Identification|string|true|none|Beneficiary account identification.|
|Name|[Name_0](#schemaname_0)|false|none|The account name is the name or names of the account owner(s) represented at an account level, as displayed by the ASPSP's online channels.<br>Note, the account name is not the product name or the nickname of the account.|
|SecondaryIdentification|[SecondaryIdentification](#schemasecondaryidentification)|false|none|This is secondary identification of the account, as assigned by the account servicing institution. <br>This can be used by building societies to additionally identify accounts with a roll number (in addition to a sort code and account number combination).|
|Proxy|[OBProxy1](#schemaobproxy1)|false|none|Specifies an alternate assumed name for the identification of the account.|

<h2 id="tocS_OBCashAccount6_0">OBCashAccount6_0</h2>
<!-- backwards compatibility -->
<a id="schemaobcashaccount6_0"></a>
<a id="schema_OBCashAccount6_0"></a>
<a id="tocSobcashaccount6_0"></a>
<a id="tocsobcashaccount6_0"></a>

```json
{
  "SchemeName": "string",
  "Identification": "80200112344562",
  "Name": "Jane Smith",
  "SecondaryIdentification": "87562298675897",
  "Proxy": {
    "Identification": "2360549017905188",
    "Code": "TELE",
    "Type": "string"
  }
}
```

Unambiguous identification of the account of the creditor, in the case of a debit transaction.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SchemeName|[OBInternalAccountIdentification4Code](#schemaobinternalaccountidentification4code)|false|none|Name of the identification scheme, in a coded form as published in an external list. <br /> For a full list of enumeration values refer to `OBInternalAccountIdentification4Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)|
|Identification|[Identification_0](#schemaidentification_0)|false|none|Identification assigned by an institution to identify an account. This identification is known by the account owner.|
|Name|[Name_0](#schemaname_0)|false|none|The account name is the name or names of the account owner(s) represented at an account level, as displayed by the ASPSP's online channels.<br>Note, the account name is not the product name or the nickname of the account.|
|SecondaryIdentification|[SecondaryIdentification](#schemasecondaryidentification)|false|none|This is secondary identification of the account, as assigned by the account servicing institution. <br>This can be used by building societies to additionally identify accounts with a roll number (in addition to a sort code and account number combination).|
|Proxy|[OBProxy1](#schemaobproxy1)|false|none|Specifies an alternate assumed name for the identification of the account.|

<h2 id="tocS_OBCashAccount6_1">OBCashAccount6_1</h2>
<!-- backwards compatibility -->
<a id="schemaobcashaccount6_1"></a>
<a id="schema_OBCashAccount6_1"></a>
<a id="tocSobcashaccount6_1"></a>
<a id="tocsobcashaccount6_1"></a>

```json
{
  "SchemeName": "string",
  "Identification": "80200112344562",
  "Name": "Jane Smith",
  "SecondaryIdentification": "87562298675897",
  "Proxy": {
    "Identification": "2360549017905188",
    "Code": "TELE",
    "Type": "string"
  }
}
```

Unambiguous identification of the account of the debtor, in the case of a credit transaction.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SchemeName|[OBInternalAccountIdentification4Code](#schemaobinternalaccountidentification4code)|true|none|Name of the identification scheme, in a coded form as published in an external list. <br /> For a full list of enumeration values refer to `OBInternalAccountIdentification4Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)|
|Identification|[Identification_0](#schemaidentification_0)|true|none|Identification assigned by an institution to identify an account. This identification is known by the account owner.|
|Name|[Name_0](#schemaname_0)|false|none|The account name is the name or names of the account owner(s) represented at an account level, as displayed by the ASPSP's online channels.<br>Note, the account name is not the product name or the nickname of the account.|
|SecondaryIdentification|[SecondaryIdentification](#schemasecondaryidentification)|false|none|This is secondary identification of the account, as assigned by the account servicing institution. <br>This can be used by building societies to additionally identify accounts with a roll number (in addition to a sort code and account number combination).|
|Proxy|[OBProxy1](#schemaobproxy1)|false|none|Specifies an alternate assumed name for the identification of the account.|

<h2 id="tocS_ExternalCategoryPurpose1Code">ExternalCategoryPurpose1Code</h2>
<!-- backwards compatibility -->
<a id="schemaexternalcategorypurpose1code"></a>
<a id="schema_ExternalCategoryPurpose1Code"></a>
<a id="tocSexternalcategorypurpose1code"></a>
<a id="tocsexternalcategorypurpose1code"></a>

```json
"BONU"
```

Enumeration of codes that outlines the type of purpose behind a transaction, payment or risk.  For all enum values see `ExternalCategoryPurpose1Code` in *ISO_External_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)

<h2 id="tocS_OBExternalMandateClassification1Code">OBExternalMandateClassification1Code</h2>
<!-- backwards compatibility -->
<a id="schemaobexternalmandateclassification1code"></a>
<a id="schema_OBExternalMandateClassification1Code"></a>
<a id="tocSobexternalmandateclassification1code"></a>
<a id="tocsobexternalmandateclassification1code"></a>

```json
"FIXE"
```

Type of mandate instruction. For a full list of values see `OBExternalClassification1Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)

<h2 id="tocS_OBCommunicationMethod">OBCommunicationMethod</h2>
<!-- backwards compatibility -->
<a id="schemaobcommunicationmethod"></a>
<a id="schema_OBCommunicationMethod"></a>
<a id="tocSobcommunicationmethod"></a>
<a id="tocsobcommunicationmethod"></a>

```json
"EMAL"
```

For a full list of enumeration values see `OBExternalCommunicationMethod2Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_internal_CodeSets)

<h2 id="tocS_OBCreditDebitCode_0">OBCreditDebitCode_0</h2>
<!-- backwards compatibility -->
<a id="schemaobcreditdebitcode_0"></a>
<a id="schema_OBCreditDebitCode_0"></a>
<a id="tocSobcreditdebitcode_0"></a>
<a id="tocsobcreditdebitcode_0"></a>

```json
"Credit"
```

Indicates whether the amount is a credit or a debit. For a full list of values see `OBInternalCreditDebitCode` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)<br />
Usage: A zero amount is considered to be a credit amount.

<h2 id="tocS_OBCreditDebitCode_1">OBCreditDebitCode_1</h2>
<!-- backwards compatibility -->
<a id="schemaobcreditdebitcode_1"></a>
<a id="schema_OBCreditDebitCode_1"></a>
<a id="tocSobcreditdebitcode_1"></a>
<a id="tocsobcreditdebitcode_1"></a>

```json
"Credit"
```

Indicates whether the transaction is a credit or a debit entry. <br />
<br />
For a full list of enumeration values refer to `OBInternalCreditDebitCode` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)

<h2 id="tocS_OBCreditDebitCode_2">OBCreditDebitCode_2</h2>
<!-- backwards compatibility -->
<a id="schemaobcreditdebitcode_2"></a>
<a id="schema_OBCreditDebitCode_2"></a>
<a id="tocSobcreditdebitcode_2"></a>
<a id="tocsobcreditdebitcode_2"></a>

```json
"Credit"
```

Indicates whether the balance is a credit or a debit balance. 
Usage: A zero balance is considered to be a credit balance.
<br />
For a full list of enumeration values refer to `OBInternalCreditDebitCode` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)

<h2 id="tocS_OBCurrencyExchange5">OBCurrencyExchange5</h2>
<!-- backwards compatibility -->
<a id="schemaobcurrencyexchange5"></a>
<a id="schema_OBCurrencyExchange5"></a>
<a id="tocSobcurrencyexchange5"></a>
<a id="tocsobcurrencyexchange5"></a>

```json
{
  "SourceCurrency": "string",
  "TargetCurrency": "string",
  "UnitCurrency": "string",
  "ExchangeRate": 0,
  "ContractIdentification": "string",
  "QuotationDate": "1970-01-01T00:00:00Z",
  "InstructedAmount": {
    "Amount": "1209.06",
    "Currency": "GBP"
  }
}
```

Set of elements used to provide details on the currency exchange.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|SourceCurrency|string|true|none|Currency from which an amount is to be converted in a currency conversion.|
|TargetCurrency|string|false|none|Currency into which an amount is to be converted in a currency conversion.|
|UnitCurrency|string|false|none|Currency in which the rate of exchange is expressed in a currency exchange. In the example 1GBP = xxxCUR, the unit currency is GBP.|
|ExchangeRate|number|true|none|Factor used to convert an amount from one currency into another. This reflects the price at which one currency was bought with another currency.<br>Usage: ExchangeRate expresses the ratio between UnitCurrency and QuotedCurrency (ExchangeRate = UnitCurrency/QuotedCurrency).|
|ContractIdentification|string|false|none|Unique identification to unambiguously identify the foreign exchange contract.|
|QuotationDate|string(date-time)|false|none|Date and time at which an exchange rate is quoted. All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|InstructedAmount|object|false|none|Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.|

<h2 id="tocS_ExternalEntryStatus1Code">ExternalEntryStatus1Code</h2>
<!-- backwards compatibility -->
<a id="schemaexternalentrystatus1code"></a>
<a id="schema_ExternalEntryStatus1Code"></a>
<a id="tocSexternalentrystatus1code"></a>
<a id="tocsexternalentrystatus1code"></a>

```json
"BOOK"
```

Status of a transaction entry on the books of the account servicer. <br />
For a full list of enumeration values refer to `ExternalEntryStatus1Code` in *ISO_External_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)

<h2 id="tocS_OBInternalTransactionMutability1Code">OBInternalTransactionMutability1Code</h2>
<!-- backwards compatibility -->
<a id="schemaobinternaltransactionmutability1code"></a>
<a id="schema_OBInternalTransactionMutability1Code"></a>
<a id="tocSobinternaltransactionmutability1code"></a>
<a id="tocsobinternaltransactionmutability1code"></a>

```json
"Mutable"
```

Specifies the Mutability of the Transaction record. <br />
For a full list of enumeration values refer to `OBInternalTransactionMutability1Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)

<h2 id="tocS_OBError1">OBError1</h2>
<!-- backwards compatibility -->
<a id="schemaoberror1"></a>
<a id="schema_OBError1"></a>
<a id="tocSoberror1"></a>
<a id="tocsoberror1"></a>

```json
{
  "ErrorCode": "U001",
  "Message": "string",
  "Path": "string",
  "Url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ErrorCode|[OBExternalStatusReason1Code](#schemaobexternalstatusreason1code)|true|none|Low level textual error code, for all enum values see `OBExternalStatusReason1Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)|
|Message|string|false|none|A description of the error that occurred. e.g., 'A mandatory field isn't supplied' or 'RequestedExecutionDateTime must be in future'<br>OBL doesn't standardise this field|
|Path|string|false|none|Recommended but optional reference to the JSON Path of the field with error, e.g., Data.Initiation.InstructedAmount.Currency|
|Url|string|false|none|URL to help remediate the problem, or provide more information, or to API Reference, or help etc|

<h2 id="tocS_OBErrorResponse1">OBErrorResponse1</h2>
<!-- backwards compatibility -->
<a id="schemaoberrorresponse1"></a>
<a id="schema_OBErrorResponse1"></a>
<a id="tocSoberrorresponse1"></a>
<a id="tocsoberrorresponse1"></a>

```json
{
  "Id": "string",
  "Code": "400 BadRequest",
  "Message": "There is something wrong with the request parameters provided",
  "Errors": [
    {
      "ErrorCode": "U001",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ]
}
```

An array of detail error codes, and messages, and URLs to documentation to help remediation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Id|string|false|none|A unique reference for the error instance, for audit purposes, in case of unknown/unclassified errors.|
|Code|string|false|none|Deprecated <br />High level textual error code, to help categorise the errors.|
|Message|string|false|none|Deprecated <br />Brief Error message|
|Errors|[[OBError1](#schemaoberror1)]|true|none|none|

<h2 id="tocS_OBInternalAccountIdentification4Code">OBInternalAccountIdentification4Code</h2>
<!-- backwards compatibility -->
<a id="schemaobinternalaccountidentification4code"></a>
<a id="schema_OBInternalAccountIdentification4Code"></a>
<a id="tocSobinternalaccountidentification4code"></a>
<a id="tocsobinternalaccountidentification4code"></a>

```json
"string"
```

Name of the identification scheme, in a coded form as published in an external list. <br /> For a full list of enumeration values refer to `OBInternalAccountIdentification4Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)

<h2 id="tocS_OBInternalAccountRole1Code">OBInternalAccountRole1Code</h2>
<!-- backwards compatibility -->
<a id="schemaobinternalaccountrole1code"></a>
<a id="schema_OBInternalAccountRole1Code"></a>
<a id="tocSobinternalaccountrole1code"></a>
<a id="tocsobinternalaccountrole1code"></a>

```json
"string"
```

A party’s role with respect to the related account. For a full list refer to `OBInternalAccountRole1Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)

<h2 id="tocS_OBExternalAccountSubType1Code">OBExternalAccountSubType1Code</h2>
<!-- backwards compatibility -->
<a id="schemaobexternalaccountsubtype1code"></a>
<a id="schema_OBExternalAccountSubType1Code"></a>
<a id="tocSobexternalaccountsubtype1code"></a>
<a id="tocsobexternalaccountsubtype1code"></a>

```json
"CACC"
```

Specifies the sub type of account (product family group) <br /> For a full list of enumeration values refer to `OBExternalCashAccountType1Code` *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)

<h2 id="tocS_OBInternalAccountType1Code">OBInternalAccountType1Code</h2>
<!-- backwards compatibility -->
<a id="schemaobinternalaccounttype1code"></a>
<a id="schema_OBInternalAccountType1Code"></a>
<a id="tocSobinternalaccounttype1code"></a>
<a id="tocsobinternalaccounttype1code"></a>

```json
"Business"
```

Specifies the type of account (personal or business). <br /> For a full list of enumeration values refer to 'OBInternalAccountType1Code' in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)

<h2 id="tocS_OBExternalBalanceSubType1Code">OBExternalBalanceSubType1Code</h2>
<!-- backwards compatibility -->
<a id="schemaobexternalbalancesubtype1code"></a>
<a id="schema_OBExternalBalanceSubType1Code"></a>
<a id="tocSobexternalbalancesubtype1code"></a>
<a id="tocsobexternalbalancesubtype1code"></a>

```json
"BCUR"
```

Amount sub type, in a coded form. Default if not specified is BCUR of the account.

<h2 id="tocS_OBInternalFinancialInstitutionIdentification4Code">OBInternalFinancialInstitutionIdentification4Code</h2>
<!-- backwards compatibility -->
<a id="schemaobinternalfinancialinstitutionidentification4code"></a>
<a id="schema_OBInternalFinancialInstitutionIdentification4Code"></a>
<a id="tocSobinternalfinancialinstitutionidentification4code"></a>
<a id="tocsobinternalfinancialinstitutionidentification4code"></a>

```json
"UK.OBIE.BICFI"
```

Name of the identification scheme, in a coded form as published in an external list.<br/> For a full list of enumeration values refer to `OBInternalFinancialInstitutionIdentification4Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)

<h2 id="tocS_OBInternalSwitchStatusCode">OBInternalSwitchStatusCode</h2>
<!-- backwards compatibility -->
<a id="schemaobinternalswitchstatuscode"></a>
<a id="schema_OBInternalSwitchStatusCode"></a>
<a id="tocSobinternalswitchstatuscode"></a>
<a id="tocsobinternalswitchstatuscode"></a>

```json
"string"
```

Specifies the switch status for the account, in a coded form. <br /> For a full list of enumeration values refer to `OBInternalSwitchStatusCode` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)

<h2 id="tocS_OBInternalLegalStructureType1Code">OBInternalLegalStructureType1Code</h2>
<!-- backwards compatibility -->
<a id="schemaobinternallegalstructuretype1code"></a>
<a id="schema_OBInternalLegalStructureType1Code"></a>
<a id="tocSobinternallegalstructuretype1code"></a>
<a id="tocsobinternallegalstructuretype1code"></a>

```json
"UK.OBIE.Individual"
```

Legal standing of the party. For a full list refer to `OBInternalLegalStructureType1Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)

<h2 id="tocS_OBInternalPartyType1Code">OBInternalPartyType1Code</h2>
<!-- backwards compatibility -->
<a id="schemaobinternalpartytype1code"></a>
<a id="schema_OBInternalPartyType1Code"></a>
<a id="tocSobinternalpartytype1code"></a>
<a id="tocsobinternalpartytype1code"></a>

```json
"Joint"
```

Party type, in a coded form. For a full list see `OBInternalPartyType1Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)

<h2 id="tocS_OBExternalPurpose1Code">OBExternalPurpose1Code</h2>
<!-- backwards compatibility -->
<a id="schemaobexternalpurpose1code"></a>
<a id="schema_OBExternalPurpose1Code"></a>
<a id="tocSobexternalpurpose1code"></a>
<a id="tocsobexternalpurpose1code"></a>

```json
"BKDF"
```

For a full list of enumeration values refer to `ExternalPurpose1Code` in *ISO_External_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)

<h2 id="tocS_OBInternalScheduleType1Code">OBInternalScheduleType1Code</h2>
<!-- backwards compatibility -->
<a id="schemaobinternalscheduletype1code"></a>
<a id="schema_OBInternalScheduleType1Code"></a>
<a id="tocSobinternalscheduletype1code"></a>
<a id="tocsobinternalscheduletype1code"></a>

```json
"Arrival"
```

Specifies the scheduled payment date type requested. For a full list of enumeration values refer to `OBInternalScheduleType1Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)

<h2 id="tocS_ExternalMandateStatus1Code">ExternalMandateStatus1Code</h2>
<!-- backwards compatibility -->
<a id="schemaexternalmandatestatus1code"></a>
<a id="schema_ExternalMandateStatus1Code"></a>
<a id="tocSexternalmandatestatus1code"></a>
<a id="tocsexternalmandatestatus1code"></a>

```json
"ACTV"
```

Specifies the status of the standing order in code form. For a full list of enumeration values refer to 'ExternalMandateStatus1Code' in *ISO_External_Codeset* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)

<h2 id="tocS_OBInternalStatementAmountType1Code">OBInternalStatementAmountType1Code</h2>
<!-- backwards compatibility -->
<a id="schemaobinternalstatementamounttype1code"></a>
<a id="schema_OBInternalStatementAmountType1Code"></a>
<a id="tocSobinternalstatementamounttype1code"></a>
<a id="tocsobinternalstatementamounttype1code"></a>

```json
"UK.OBIE.CreditLimit"
```

Amount type, in a coded form.

<h2 id="tocS_OBInternalStatementBenefitType1Code">OBInternalStatementBenefitType1Code</h2>
<!-- backwards compatibility -->
<a id="schemaobinternalstatementbenefittype1code"></a>
<a id="schema_OBInternalStatementBenefitType1Code"></a>
<a id="tocSobinternalstatementbenefittype1code"></a>
<a id="tocsobinternalstatementbenefittype1code"></a>

```json
"UK.OBIE.Cashback"
```

Benefit type, in a coded form. For a full list of values see `OBInternalStatementBenefitType1Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)

<h2 id="tocS_OBInternalStatementDateTimeType1Code">OBInternalStatementDateTimeType1Code</h2>
<!-- backwards compatibility -->
<a id="schemaobinternalstatementdatetimetype1code"></a>
<a id="schema_OBInternalStatementDateTimeType1Code"></a>
<a id="tocSobinternalstatementdatetimetype1code"></a>
<a id="tocsobinternalstatementdatetimetype1code"></a>

```json
"UK.OBIE.NextStatement"
```

Date time type, in a coded form. For a full list of values see `OBInternalStatementDateTimeType1Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)

<h2 id="tocS_OBInternalStatementFeeFrequency1Code">OBInternalStatementFeeFrequency1Code</h2>
<!-- backwards compatibility -->
<a id="schemaobinternalstatementfeefrequency1code"></a>
<a id="schema_OBInternalStatementFeeFrequency1Code"></a>
<a id="tocSobinternalstatementfeefrequency1code"></a>
<a id="tocsobinternalstatementfeefrequency1code"></a>

```json
"UK.OBIE.StatementMonthly"
```

How frequently the fee is applied to the Account. For a full list of values see `OBInternalStatementFeeFrequency1Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)

<h2 id="tocS_OBInternalStatementFeeRateType1Code">OBInternalStatementFeeRateType1Code</h2>
<!-- backwards compatibility -->
<a id="schemaobinternalstatementfeeratetype1code"></a>
<a id="schema_OBInternalStatementFeeRateType1Code"></a>
<a id="tocSobinternalstatementfeeratetype1code"></a>
<a id="tocsobinternalstatementfeeratetype1code"></a>

```json
"UK.OBIE.AER"
```

This code indicates the specific type of fee rate (e.g., AER, EAR). For a full list of values see `OBInternalStatementFeeRateType1Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)

<h2 id="tocS_OBInternalStatementFeeType1Code">OBInternalStatementFeeType1Code</h2>
<!-- backwards compatibility -->
<a id="schemaobinternalstatementfeetype1code"></a>
<a id="schema_OBInternalStatementFeeType1Code"></a>
<a id="tocSobinternalstatementfeetype1code"></a>
<a id="tocsobinternalstatementfeetype1code"></a>

```json
"UK.OBIE.Annual"
```

Fee type, in a coded form. For a full list of values see `OBInternalStatementFeeType1Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)

<h2 id="tocS_OBInternalStatementInterestFrequency1Code">OBInternalStatementInterestFrequency1Code</h2>
<!-- backwards compatibility -->
<a id="schemaobinternalstatementinterestfrequency1code"></a>
<a id="schema_OBInternalStatementInterestFrequency1Code"></a>
<a id="tocSobinternalstatementinterestfrequency1code"></a>
<a id="tocsobinternalstatementinterestfrequency1code"></a>

```json
"UK.OBIE.Monthly"
```

Specifies the statement fee type requested. For a full list of values see `OBInternalStatementInterestFrequency1Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)

<h2 id="tocS_OBInternalStatementInterestRateType1Code">OBInternalStatementInterestRateType1Code</h2>
<!-- backwards compatibility -->
<a id="schemaobinternalstatementinterestratetype1code"></a>
<a id="schema_OBInternalStatementInterestRateType1Code"></a>
<a id="tocSobinternalstatementinterestratetype1code"></a>
<a id="tocsobinternalstatementinterestratetype1code"></a>

```json
"UK.OBIE.FixedRate"
```

This code specifies the type of interest (e.g., BOE Base Rate, Fixed Rate, Gross).

<h2 id="tocS_OBInternalStatementInterestType1Code">OBInternalStatementInterestType1Code</h2>
<!-- backwards compatibility -->
<a id="schemaobinternalstatementinteresttype1code"></a>
<a id="schema_OBInternalStatementInterestType1Code"></a>
<a id="tocSobinternalstatementinteresttype1code"></a>
<a id="tocsobinternalstatementinteresttype1code"></a>

```json
"UK.OBIE.Total"
```

Interest amount type, in a coded form. For a full list of values see `OBInternalStatementInterestType1Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)

<h2 id="tocS_OBInternalStatementRateType1Code">OBInternalStatementRateType1Code</h2>
<!-- backwards compatibility -->
<a id="schemaobinternalstatementratetype1code"></a>
<a id="schema_OBInternalStatementRateType1Code"></a>
<a id="tocSobinternalstatementratetype1code"></a>
<a id="tocsobinternalstatementratetype1code"></a>

```json
"UK.OBIE.AnnualCash"
```

Statement rate type, in a coded form. For a full list of values see `OBInternalStatementRateType1Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)

<h2 id="tocS_OBInternalStatementType1Code">OBInternalStatementType1Code</h2>
<!-- backwards compatibility -->
<a id="schemaobinternalstatementtype1code"></a>
<a id="schema_OBInternalStatementType1Code"></a>
<a id="tocSobinternalstatementtype1code"></a>
<a id="tocsobinternalstatementtype1code"></a>

```json
"RegularPeriodic"
```

Statement type, in a coded form. For a full list of values see `OBInternalStatementType1Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)

<h2 id="tocS_OBInternalStatementValueType1Code">OBInternalStatementValueType1Code</h2>
<!-- backwards compatibility -->
<a id="schemaobinternalstatementvaluetype1code"></a>
<a id="schema_OBInternalStatementValueType1Code"></a>
<a id="tocSobinternalstatementvaluetype1code"></a>
<a id="tocsobinternalstatementvaluetype1code"></a>

```json
"UK.OBIE.Credit"
```

Statement value type, in a coded form. For a full list of values see `OBInternalStatementValueType1Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)

<h2 id="tocS_OBFrequency2">OBFrequency2</h2>
<!-- backwards compatibility -->
<a id="schemaobfrequency2"></a>
<a id="schema_OBFrequency2"></a>
<a id="tocSobfrequency2"></a>
<a id="tocsobfrequency2"></a>

```json
"YEAR"
```

For a full list of enumeration values refer to `OBFrequency2Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_internal_CodeSets)

<h2 id="tocS_OBFrequencyPeriodType">OBFrequencyPeriodType</h2>
<!-- backwards compatibility -->
<a id="schemaobfrequencyperiodtype"></a>
<a id="schema_OBFrequencyPeriodType"></a>
<a id="tocSobfrequencyperiodtype"></a>
<a id="tocsobfrequencyperiodtype"></a>

```json
"ADHO"
```

Individual Definitions:
 ADHO - Adhoc 
 YEAR - Annual
DAIL - Daily
INDA - Intra Day
MNTH - Monthly
QURT - Quarterly
WEEK - Weekly

<h2 id="tocS_OBFileFormat">OBFileFormat</h2>
<!-- backwards compatibility -->
<a id="schemaobfileformat"></a>
<a id="schema_OBFileFormat"></a>
<a id="tocSobfileformat"></a>
<a id="tocsobfileformat"></a>

```json
"DPDF"
```

For a full list of enumeration values refer to `ExternalDocumentFormat1Code` in *ISO_External_CodeSet* [here](https://github.com/OpenBankingUK/External_internal_CodeSets)

<h2 id="tocS_OBExternalStatusReason1Code">OBExternalStatusReason1Code</h2>
<!-- backwards compatibility -->
<a id="schemaobexternalstatusreason1code"></a>
<a id="schema_OBExternalStatusReason1Code"></a>
<a id="tocSobexternalstatusreason1code"></a>
<a id="tocsobexternalstatusreason1code"></a>

```json
"U001"
```

Low level textual error code, for all enum values see `OBExternalStatusReason1Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)

<h2 id="tocS_OBMandateRelatedInformation1">OBMandateRelatedInformation1</h2>
<!-- backwards compatibility -->
<a id="schemaobmandaterelatedinformation1"></a>
<a id="schema_OBMandateRelatedInformation1"></a>
<a id="tocSobmandaterelatedinformation1"></a>
<a id="tocsobmandaterelatedinformation1"></a>

```json
{
  "MandateIdentification": "Golfers",
  "Classification": "FIXE",
  "CategoryPurposeCode": "BONU",
  "FirstPaymentDateTime": "2024-04-25T12:46:49.425Z",
  "RecurringPaymentDateTime": "2024-04-25T12:46:49.425Z",
  "FinalPaymentDateTime": "2024-04-25T12:46:49.425Z",
  "Frequency": {
    "Type": "MNTH",
    "CountPerPeriod": 1,
    "PointInTime": "00"
  },
  "Reason": "To pay monthly membership"
}
```

Provides further details of the mandate signed between the creditor and the debtor.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MandateIdentification|string|false|none|Unique identification, as assigned by the creditor, to unambiguously identify the mandate.|
|Classification|[OBExternalMandateClassification1Code](#schemaobexternalmandateclassification1code)|false|none|Type of mandate instruction. For a full list of values see `OBExternalClassification1Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)|
|CategoryPurposeCode|[ExternalCategoryPurpose1Code](#schemaexternalcategorypurpose1code)|false|none|Enumeration of codes that outlines the type of purpose behind a transaction, payment or risk.  For all enum values see `ExternalCategoryPurpose1Code` in *ISO_External_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)|
|FirstPaymentDateTime|string(date-time)|false|none|The date on which the first payment for a recurrent credit transfer will be made.|
|RecurringPaymentDateTime|string(date-time)|false|none|The date on which the first recurring payment for a Standing Order schedule will be made. <br>Usage: This must be populated only if the first recurring date is different to the first payment date. All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|FinalPaymentDateTime|string(date-time)|false|none|The date on which the final payment for a recurrent credit transfer will be made.|
|Frequency|[OBFrequency6](#schemaobfrequency6)|true|none|Regularity with which credit transfer instructions are to be created and processed|
|Reason|string|false|none|Reason for the setup of the credit transfer mandate.|

#### Enumerated Values

|Property|Value|
|---|---|
|Classification|FIXE|
|Classification|USGB|
|Classification|VARI|
|CategoryPurposeCode|BONU|
|CategoryPurposeCode|CASH|
|CategoryPurposeCode|CBLK|
|CategoryPurposeCode|CCRD|
|CategoryPurposeCode|CGWV|
|CategoryPurposeCode|CIPC|
|CategoryPurposeCode|CONC|
|CategoryPurposeCode|CORT|
|CategoryPurposeCode|DCRD|
|CategoryPurposeCode|DIVI|
|CategoryPurposeCode|DVPM|
|CategoryPurposeCode|EPAY|
|CategoryPurposeCode|FCDT|
|CategoryPurposeCode|FCIN|
|CategoryPurposeCode|FCOL|
|CategoryPurposeCode|GOVT|
|CategoryPurposeCode|GP2P|
|CategoryPurposeCode|HEDG|
|CategoryPurposeCode|ICCP|
|CategoryPurposeCode|IDCP|
|CategoryPurposeCode|INTC|
|CategoryPurposeCode|INTE|
|CategoryPurposeCode|LBOX|
|CategoryPurposeCode|LOAN|
|CategoryPurposeCode|MP2B|
|CategoryPurposeCode|MP2P|
|CategoryPurposeCode|OTHR|
|CategoryPurposeCode|PENS|
|CategoryPurposeCode|RPRE|
|CategoryPurposeCode|RRCT|
|CategoryPurposeCode|RVPM|
|CategoryPurposeCode|SALA|
|CategoryPurposeCode|SECU|
|CategoryPurposeCode|SSBE|
|CategoryPurposeCode|SUPP|
|CategoryPurposeCode|SWEP|
|CategoryPurposeCode|TAXS|
|CategoryPurposeCode|TOPG|
|CategoryPurposeCode|TRAD|
|CategoryPurposeCode|TREA|
|CategoryPurposeCode|VATX|
|CategoryPurposeCode|VOST|
|CategoryPurposeCode|WHLD|
|CategoryPurposeCode|ZABA|

<h2 id="tocS_OBMerchantDetails1">OBMerchantDetails1</h2>
<!-- backwards compatibility -->
<a id="schemaobmerchantdetails1"></a>
<a id="schema_OBMerchantDetails1"></a>
<a id="tocSobmerchantdetails1"></a>
<a id="tocsobmerchantdetails1"></a>

```json
{
  "MerchantName": "string",
  "MerchantCategoryCode": "stri"
}
```

Details of the merchant involved in the transaction.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MerchantName|string|false|none|Name by which the merchant is known.|
|MerchantCategoryCode|string|false|none|Category code conform to ISO 18245, related to the type of services or goods the merchant provides for the transaction.|

<h2 id="tocS_OBPCAData1">OBPCAData1</h2>
<!-- backwards compatibility -->
<a id="schemaobpcadata1"></a>
<a id="schema_OBPCAData1"></a>
<a id="tocSobpcadata1"></a>
<a id="tocsobpcadata1"></a>

```json
{
  "ProductDetails": {
    "Segment": [
      "Basic"
    ],
    "MonthlyMaximumCharge": "string",
    "Notes": [
      "string"
    ]
  },
  "CreditInterest": {
    "TierBandSet": [
      {
        "TierBandMethod": "Tiered",
        "CalculationMethod": "Compound",
        "Destination": "PayAway",
        "Notes": [
          "string"
        ],
        "TierBand": [
          {
            "Identification": "string",
            "TierValueMinimum": "string",
            "TierValueMaximum": "string",
            "CalculationFrequency": "PerAcademicTerm",
            "ApplicationFrequency": "PerAcademicTerm",
            "DepositInterestAppliedCoverage": "Tiered",
            "FixedVariableInterestRateType": "Fixed",
            "AER": "string",
            "BankInterestRateType": "LinkedBaseRate",
            "BankInterestRate": "string",
            "Notes": [
              "string"
            ],
            "OtherBankInterestType": {
              "Code": "stri",
              "Name": "string",
              "Description": "string"
            },
            "OtherApplicationFrequency": {
              "Code": "stri",
              "Name": "string",
              "Description": "string"
            },
            "OtherCalculationFrequency": {
              "Code": "stri",
              "Name": "string",
              "Description": "string"
            }
          }
        ]
      }
    ]
  },
  "Overdraft": {
    "Notes": [
      "string"
    ],
    "OverdraftTierBandSet": [
      {
        "TierBandMethod": "Tiered",
        "OverdraftType": "Committed",
        "Identification": "string",
        "AuthorisedIndicator": true,
        "BufferAmount": "string",
        "Notes": [
          "string"
        ],
        "OverdraftTierBand": [
          {
            "Identification": "string",
            "TierValueMin": "string",
            "TierValueMax": "string",
            "OverdraftInterestChargingCoverage": "Tiered",
            "BankGuaranteedIndicator": true,
            "EAR": "string",
            "RepresentativeAPR": "string",
            "Notes": [
              "string"
            ],
            "OverdraftFeesCharges": [
              {
                "OverdraftFeeChargeCap": [
                  {
                    "FeeType": [
                      "ArrangedOverdraft"
                    ],
                    "OverdraftControlIndicator": true,
                    "MinMaxType": "Minimum",
                    "FeeCapOccurrence": 0,
                    "FeeCapAmount": "string",
                    "CappingPeriod": "AcademicTerm",
                    "Notes": [
                      "string"
                    ],
                    "OtherFeeType": [
                      {
                        "Code": "stri",
                        "Name": "string",
                        "Description": "string"
                      }
                    ]
                  }
                ],
                "OverdraftFeeChargeDetail": [
                  {
                    "FeeType": "ArrangedOverdraft",
                    "OverdraftControlIndicator": true,
                    "IncrementalBorrowingAmount": "string",
                    "FeeAmount": "string",
                    "FeeRate": "string",
                    "FeeRateType": "LinkedBaseRate",
                    "ApplicationFrequency": "AccountClosing",
                    "CalculationFrequency": "AccountClosing",
                    "Notes": [
                      "string"
                    ],
                    "OtherFeeType": {
                      "Code": "stri",
                      "Name": "string",
                      "Description": "string"
                    },
                    "OtherFeeRateType": {
                      "Code": "stri",
                      "Name": "string",
                      "Description": "string"
                    },
                    "OtherApplicationFrequency": {
                      "Code": "stri",
                      "Name": "string",
                      "Description": "string"
                    },
                    "OtherCalculationFrequency": {
                      "Code": "stri",
                      "Name": "string",
                      "Description": "string"
                    },
                    "OverdraftFeeChargeCap": {
                      "FeeType": [
                        "ArrangedOverdraft"
                      ],
                      "OverdraftControlIndicator": true,
                      "MinMaxType": "Minimum",
                      "FeeCapOccurrence": 0,
                      "FeeCapAmount": "string",
                      "CappingPeriod": "AcademicTerm",
                      "Notes": [
                        "string"
                      ],
                      "OtherFeeType": [
                        {
                          "Code": "stri",
                          "Name": "string",
                          "Description": "string"
                        }
                      ]
                    }
                  }
                ]
              }
            ]
          }
        ],
        "OverdraftFeesCharges": [
          {
            "OverdraftFeeChargeCap": [
              {
                "FeeType": [
                  "ArrangedOverdraft"
                ],
                "OverdraftControlIndicator": true,
                "MinMaxType": "Minimum",
                "FeeCapOccurrence": 0,
                "FeeCapAmount": "string",
                "CappingPeriod": "AcademicTerm",
                "Notes": [
                  "string"
                ],
                "OtherFeeType": [
                  {
                    "Code": "stri",
                    "Name": "string",
                    "Description": "string"
                  }
                ]
              }
            ],
            "OverdraftFeeChargeDetail": [
              {
                "FeeType": "ArrangedOverdraft",
                "OverdraftControlIndicator": true,
                "IncrementalBorrowingAmount": "string",
                "FeeAmount": "string",
                "FeeRate": "string",
                "FeeRateType": "LinkedBaseRate",
                "ApplicationFrequency": "AccountClosing",
                "CalculationFrequency": "AccountClosing",
                "Notes": [
                  "string"
                ],
                "OtherFeeType": {
                  "Code": "stri",
                  "Name": "string",
                  "Description": "string"
                },
                "OtherFeeRateType": {
                  "Code": "stri",
                  "Name": "string",
                  "Description": "string"
                },
                "OtherApplicationFrequency": {
                  "Code": "stri",
                  "Name": "string",
                  "Description": "string"
                },
                "OtherCalculationFrequency": {
                  "Code": "stri",
                  "Name": "string",
                  "Description": "string"
                },
                "OverdraftFeeChargeCap": {
                  "FeeType": [
                    "ArrangedOverdraft"
                  ],
                  "OverdraftControlIndicator": true,
                  "MinMaxType": "Minimum",
                  "FeeCapOccurrence": 0,
                  "FeeCapAmount": "string",
                  "CappingPeriod": "AcademicTerm",
                  "Notes": [
                    "string"
                  ],
                  "OtherFeeType": [
                    {
                      "Code": "stri",
                      "Name": "string",
                      "Description": "string"
                    }
                  ]
                }
              }
            ]
          }
        ]
      }
    ]
  },
  "OtherFeesCharges": {
    "FeeChargeDetail": [
      {
        "FeeCategory": "Other",
        "FeeType": "ServiceCAccountFee",
        "FeeAmount": "string",
        "FeeRate": "string",
        "FeeRateType": "LinkedBaseRate",
        "ApplicationFrequency": "AccountClosing",
        "CalculationFrequency": "AccountClosing",
        "Notes": [
          "string"
        ],
        "OtherFeeCategoryType": {
          "Code": "stri",
          "Name": "string",
          "Description": "string"
        },
        "OtherFeeType": {
          "Code": "stri",
          "FeeCategory": "Other",
          "Name": "string",
          "Description": "string"
        },
        "OtherFeeRateType": {
          "Code": "stri",
          "Name": "string",
          "Description": "string"
        },
        "OtherApplicationFrequency": {
          "Code": "stri",
          "Name": "string",
          "Description": "string"
        },
        "OtherCalculationFrequency": {
          "Code": "stri",
          "Name": "string",
          "Description": "string"
        },
        "FeeChargeCap": [
          {
            "FeeType": [
              "ServiceCAccountFee"
            ],
            "MinMaxType": "Minimum",
            "FeeCapOccurrence": 0,
            "FeeCapAmount": "string",
            "CappingPeriod": "AcademicTerm",
            "Notes": [
              "string"
            ],
            "OtherFeeType": [
              {
                "Code": "stri",
                "Name": "string",
                "Description": "string"
              }
            ]
          }
        ],
        "FeeApplicableRange": {
          "MinimumAmount": "string",
          "MaximumAmount": "string",
          "MinimumRate": "string",
          "MaximumRate": "string"
        }
      }
    ],
    "FeeChargeCap": [
      {
        "FeeType": [
          "ServiceCAccountFee"
        ],
        "MinMaxType": "Minimum",
        "FeeCapOccurrence": 0,
        "FeeCapAmount": "string",
        "CappingPeriod": "AcademicTerm",
        "Notes": [
          "string"
        ],
        "OtherFeeType": [
          {
            "Code": "stri",
            "Name": "string",
            "Description": "string"
          }
        ]
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ProductDetails|object|false|none|none|
|CreditInterest|object|false|none|Details about the interest that may be payable to the PCA account holders|
|Overdraft|object|false|none|Details about Overdraft rates, fees & charges|
|OtherFeesCharges|object|false|none|Contains details of fees and charges which are not associated with either borrowing or features/benefits|

<h2 id="tocS_OBParty2">OBParty2</h2>
<!-- backwards compatibility -->
<a id="schemaobparty2"></a>
<a id="schema_OBParty2"></a>
<a id="tocSobparty2"></a>
<a id="tocsobparty2"></a>

```json
{
  "PartyId": "PXSIF023",
  "PartyNumber": "20202002",
  "PartyType": "Joint",
  "Name": "Mx Jane Smith",
  "FullLegalName": "Jane Smith",
  "LegalStructure": "UK.OBIE.Individual",
  "LEI": "IZ9Q00LZEVUKWCQY6X15",
  "BeneficialOwnership": true,
  "AccountRole": "string",
  "EmailAddress": "d.user@semiotec.co.jp",
  "Phone": "+44-2079460000",
  "Mobile": "+44-7700900000",
  "Relationships": {
    "Account": {
      "Related": "https://api.alphabank.com/open-banking/v4.0/aisp/accounts/89019",
      "Id": "89019"
    }
  },
  "Address": [
    {
      "AddressType": "BIZZ",
      "Department": "Finance",
      "SubDepartment": "Payroll",
      "StreetName": "Bank Street",
      "BuildingNumber": "11",
      "BuildingName": "string",
      "Floor": "11",
      "UnitNumber": "A88",
      "Room": "Basement 03",
      "PostBox": "PO Box 123456",
      "TownLocationName": "London",
      "DistrictName": "Greater London",
      "CareOf": "Jane Smith",
      "PostCode": "EC2N 4AG",
      "TownName": "London",
      "CountrySubDivision": "string",
      "Country": "string",
      "AddressLine": [
        "string"
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|PartyId|[PartyId](#schemapartyid)|true|none|A unique and immutable identifier used to identify the customer resource. This identifier has no meaning to the account owner.|
|PartyNumber|[PartyNumber](#schemapartynumber)|false|none|Number assigned by an agent to identify its customer.|
|PartyType|[OBInternalPartyType1Code](#schemaobinternalpartytype1code)|false|none|Party type, in a coded form. For a full list see `OBInternalPartyType1Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)|
|Name|[Name_3](#schemaname_3)|false|none|Name by which a party is known and which is usually used to identify that party.|
|FullLegalName|[FullLegalName](#schemafulllegalname)|false|none|The full legal name of the party.|
|LegalStructure|[OBInternalLegalStructureType1Code](#schemaobinternallegalstructuretype1code)|false|none|Legal standing of the party. For a full list refer to `OBInternalLegalStructureType1Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)|
|LEI|[LEI](#schemalei)|false|none|Legal entity identification as an alternate identification for a party. Legal Entity Identifier is a code allocated to a party as described in ISO 17442 "Financial Services - Legal Entity Identifier (LEI)".|
|BeneficialOwnership|boolean|false|none|A flag to indicate a party's beneficial ownership of the related account|
|AccountRole|[OBInternalAccountRole1Code](#schemaobinternalaccountrole1code)|false|none|A party’s role with respect to the related account. For a full list refer to `OBInternalAccountRole1Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)|
|EmailAddress|[EmailAddress](#schemaemailaddress)|false|none|Address for electronic mail (e-mail).|
|Phone|[PhoneNumber_0](#schemaphonenumber_0)|false|none|Collection of information that identifies a phone number, as defined by telecom services.|
|Mobile|[PhoneNumber_1](#schemaphonenumber_1)|false|none|Collection of information that identifies a mobile phone number, as defined by telecom services.|
|Relationships|[OBPartyRelationships1](#schemaobpartyrelationships1)|false|none|The Party's relationships with other resources.|
|Address|[[OBPostalAddress7](#schemaobpostaladdress7)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|PartyType|Delegate|
|PartyType|Joint|
|PartyType|Sole|

<h2 id="tocS_OBPartyRelationships1">OBPartyRelationships1</h2>
<!-- backwards compatibility -->
<a id="schemaobpartyrelationships1"></a>
<a id="schema_OBPartyRelationships1"></a>
<a id="tocSobpartyrelationships1"></a>
<a id="tocsobpartyrelationships1"></a>

```json
{
  "Account": {
    "Related": "https://api.alphabank.com/open-banking/v4.0/aisp/accounts/89019",
    "Id": "89019"
  }
}
```

The Party's relationships with other resources.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Account|object|false|none|Relationship to the Account resource.|

<h2 id="tocS_OBPostalAddress7">OBPostalAddress7</h2>
<!-- backwards compatibility -->
<a id="schemaobpostaladdress7"></a>
<a id="schema_OBPostalAddress7"></a>
<a id="tocSobpostaladdress7"></a>
<a id="tocsobpostaladdress7"></a>

```json
{
  "AddressType": "BIZZ",
  "Department": "Finance",
  "SubDepartment": "Payroll",
  "StreetName": "Bank Street",
  "BuildingNumber": "11",
  "BuildingName": "string",
  "Floor": "11",
  "UnitNumber": "A88",
  "Room": "Basement 03",
  "PostBox": "PO Box 123456",
  "TownLocationName": "London",
  "DistrictName": "Greater London",
  "CareOf": "Jane Smith",
  "PostCode": "EC2N 4AG",
  "TownName": "London",
  "CountrySubDivision": "string",
  "Country": "string",
  "AddressLine": [
    "string"
  ]
}
```

Information that locates and identifies a specific address, as defined by postal services.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AddressType|[OBAddressType2Code](#schemaobaddresstype2code)|false|none|Identifies the nature of the postal address. <br /> For a full set of codes see `OBAddressType2Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets).|
|Department|string|false|none|Identification of a division of a large organisation or building.|
|SubDepartment|string|false|none|Identification of a sub-division of a large organisation or building.|
|StreetName|[StreetName](#schemastreetname)|false|none|Name of a street or thoroughfare.|
|BuildingNumber|[BuildingNumber](#schemabuildingnumber)|false|none|Number that identifies the position of a building on a street.|
|BuildingName|[BuildingName](#schemabuildingname)|false|none|Name of a referenced building.|
|Floor|[Floor](#schemafloor)|false|none|Number that identifies the level within a building|
|UnitNumber|[UnitNumber](#schemaunitnumber)|false|none|Number that identifies the unit of a specific address .|
|Room|[Room](#schemaroom)|false|none|Information that locates and identifies a room to form part of an address|
|PostBox|[PostBox](#schemapostbox)|false|none|Information that locates and identifies a box in a post office assigned to a person or organization, where letters for them are kept until called for.|
|TownLocationName|[TownName](#schematownname)|false|none|Name of a built-up area, with defined boundaries, and a local government.|
|DistrictName|[DistrictName](#schemadistrictname)|false|none|Number that of the regional area, known as a district, which forms part of an address|
|CareOf|[CareOf](#schemacareof)|false|none|The 'care of' address is used whenever sending mail to a person or organisation who does not actually live or work at the address. They will receive the mail for the individual.|
|PostCode|[PostCode](#schemapostcode)|false|none|Identifier consisting of a group of letters and/or numbers that is added to a postal address to assist the sorting of mail.|
|TownName|[TownName](#schematownname)|false|none|Name of a built-up area, with defined boundaries, and a local government.|
|CountrySubDivision|string|false|none|Identifies a subdivision of a country such as state, region, county.|
|Country|string|false|none|Nation with its own government.|
|AddressLine|[string]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|AddressType|BIZZ|
|AddressType|DLVY|
|AddressType|MLTO|
|AddressType|PBOX|
|AddressType|ADDR|
|AddressType|HOME|
|AddressType|CORR|
|AddressType|STAT|

<h2 id="tocS_OBRate1_0">OBRate1_0</h2>
<!-- backwards compatibility -->
<a id="schemaobrate1_0"></a>
<a id="schema_OBRate1_0"></a>
<a id="tocSobrate1_0"></a>
<a id="tocsobrate1_0"></a>

```json
0.05
```

Rate charged for Statement Fee (where it is charged in terms of a rate rather than an amount)

<h2 id="tocS_OBRate1_1">OBRate1_1</h2>
<!-- backwards compatibility -->
<a id="schemaobrate1_1"></a>
<a id="schema_OBRate1_1"></a>
<a id="tocSobrate1_1"></a>
<a id="tocsobrate1_1"></a>

```json
0.05
```

Rate for Statement Interest (where it is applicable in terms of a rate rather than an amount)

<h2 id="tocS_OBReadAccount6">OBReadAccount6</h2>
<!-- backwards compatibility -->
<a id="schemaobreadaccount6"></a>
<a id="schema_OBReadAccount6"></a>
<a id="tocSobreadaccount6"></a>
<a id="tocsobreadaccount6"></a>

```json
{
  "Data": {
    "Account": [
      {
        "AccountId": "22289",
        "Status": "Enabled",
        "StatusUpdateDateTime": "1970-01-01T00:00:00Z",
        "Currency": "string",
        "AccountCategory": "Business",
        "AccountTypeCode": "CACC",
        "Description": "string",
        "Nickname": "string",
        "OpeningDate": "1970-01-01T00:00:00Z",
        "MaturityDate": "1970-01-01T00:00:00Z",
        "SwitchStatus": "string",
        "Account": [
          {
            "SchemeName": "string",
            "Identification": "80200112344562",
            "Name": "Jane Smith",
            "LEI": "IZ9Q00LZEVUKWCQY6X15",
            "SecondaryIdentification": "87562298675897"
          }
        ],
        "StatementFrequencyAndFormat": [
          {
            "Frequency": "YEAR",
            "CommunicationMethod": "EMAL",
            "Format": "DPDF",
            "DeliveryAddress": {
              "AddressType": "BIZZ",
              "Department": "Finance",
              "SubDepartment": "Payroll",
              "StreetName": "Bank Street",
              "BuildingNumber": "11",
              "BuildingName": "string",
              "Floor": "11",
              "UnitNumber": "A88",
              "Room": "Basement 03",
              "PostBox": "PO Box 123456",
              "TownLocationName": "London",
              "DistrictName": "Greater London",
              "CareOf": "Jane Smith",
              "PostCode": "EC2N 4AG",
              "TownName": "London",
              "CountrySubDivision": "string",
              "Country": "string",
              "AddressLine": [
                "string"
              ]
            }
          }
        ],
        "Servicer": {
          "SchemeName": "UK.OBIE.BICFI",
          "Identification": "80200112344562",
          "Name": "Agent Name"
        }
      }
    ]
  },
  "Links": {
    "Self": "http://example.com",
    "First": "http://example.com",
    "Prev": "http://example.com",
    "Next": "http://example.com",
    "Last": "http://example.com"
  },
  "Meta": {
    "TotalPages": 0,
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Data|object|true|none|none|
|Links|[Links](#schemalinks)|false|none|Links relevant to the payload|
|Meta|[Meta](#schemameta)|false|none|Meta Data relevant to the payload|

<h2 id="tocS_OBReadBalance1">OBReadBalance1</h2>
<!-- backwards compatibility -->
<a id="schemaobreadbalance1"></a>
<a id="schema_OBReadBalance1"></a>
<a id="tocSobreadbalance1"></a>
<a id="tocsobreadbalance1"></a>

```json
{
  "Data": {
    "Balance": [
      {
        "AccountId": "22289",
        "CreditDebitIndicator": "Credit",
        "Type": "CLAV",
        "DateTime": "1970-01-01T00:00:00Z",
        "Amount": {
          "Amount": "1209.06",
          "Currency": "GBP",
          "SubType": "BCUR"
        },
        "CreditLine": [
          {
            "Included": true,
            "Type": "Available",
            "Amount": {
              "Amount": "1209.06",
              "Currency": "GBP"
            }
          }
        ],
        "LocalAmount": {
          "Amount": "1209.06",
          "Currency": "GBP",
          "SubType": "LCUR"
        }
      }
    ],
    "TotalValue": {
      "Amount": "1209.06",
      "Currency": "GBP"
    }
  },
  "Links": {
    "Self": "http://example.com",
    "First": "http://example.com",
    "Prev": "http://example.com",
    "Next": "http://example.com",
    "Last": "http://example.com"
  },
  "Meta": {
    "TotalPages": 0,
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Data|object|true|none|none|
|Links|[Links](#schemalinks)|false|none|Links relevant to the payload|
|Meta|[Meta](#schemameta)|false|none|Meta Data relevant to the payload|

<h2 id="tocS_OBReadBeneficiary5">OBReadBeneficiary5</h2>
<!-- backwards compatibility -->
<a id="schemaobreadbeneficiary5"></a>
<a id="schema_OBReadBeneficiary5"></a>
<a id="tocSobreadbeneficiary5"></a>
<a id="tocsobreadbeneficiary5"></a>

```json
{
  "Data": {
    "Beneficiary": [
      {
        "AccountId": "22289",
        "BeneficiaryId": "Ben1",
        "BeneficiaryType": "Ordinary",
        "Reference": "Towbar Club",
        "SupplementaryData": {},
        "CreditorAgent": {
          "SchemeName": "UK.OBIE.BICFI",
          "Identification": "80200112344562",
          "Name": "Agent Name",
          "PostalAddress": {
            "AddressType": "BIZZ",
            "Department": "Finance",
            "SubDepartment": "Payroll",
            "StreetName": "Bank Street",
            "BuildingNumber": "11",
            "BuildingName": "string",
            "Floor": "11",
            "UnitNumber": "A88",
            "Room": "Basement 03",
            "PostBox": "PO Box 123456",
            "TownLocationName": "London",
            "DistrictName": "Greater London",
            "CareOf": "Jane Smith",
            "PostCode": "EC2N 4AG",
            "TownName": "London",
            "CountrySubDivision": "string",
            "Country": "string",
            "AddressLine": [
              "string"
            ]
          },
          "LEI": "IZ9Q00LZEVUKWCQY6X15"
        },
        "CreditorAccount": {
          "SchemeName": "string",
          "Identification": "80200112344562",
          "Name": "Jane Smith",
          "SecondaryIdentification": "87562298675897",
          "Proxy": {
            "Identification": "2360549017905188",
            "Code": "TELE",
            "Type": "string"
          }
        }
      }
    ]
  },
  "Links": {
    "Self": "http://example.com",
    "First": "http://example.com",
    "Prev": "http://example.com",
    "Next": "http://example.com",
    "Last": "http://example.com"
  },
  "Meta": {
    "TotalPages": 0,
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Data|object|true|none|none|
|Links|[Links](#schemalinks)|false|none|Links relevant to the payload|
|Meta|[Meta](#schemameta)|false|none|Meta Data relevant to the payload|

<h2 id="tocS_OBReadConsent1">OBReadConsent1</h2>
<!-- backwards compatibility -->
<a id="schemaobreadconsent1"></a>
<a id="schema_OBReadConsent1"></a>
<a id="tocSobreadconsent1"></a>
<a id="tocsobreadconsent1"></a>

```json
{
  "Data": {
    "Permissions": [
      "ReadAccountsBasic"
    ],
    "ExpirationDateTime": "1970-01-01T00:00:00Z",
    "TransactionFromDateTime": "1970-01-01T00:00:00Z",
    "TransactionToDateTime": "1970-01-01T00:00:00Z"
  },
  "Risk": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Data|object|true|none|none|
|Risk|[OBRisk2](#schemaobrisk2)|true|none|The Risk section is sent by the initiating party to the ASPSP. <br /><br>It is used to specify additional details for risk scoring for Account Info.|

<h2 id="tocS_OBReadConsentResponse1">OBReadConsentResponse1</h2>
<!-- backwards compatibility -->
<a id="schemaobreadconsentresponse1"></a>
<a id="schema_OBReadConsentResponse1"></a>
<a id="tocSobreadconsentresponse1"></a>
<a id="tocsobreadconsentresponse1"></a>

```json
{
  "Data": {
    "ConsentId": "string",
    "CreationDateTime": "2024-05-29T00:00:00Z",
    "Status": "AWAU",
    "StatusReason": [
      {
        "StatusReasonCode": "U004",
        "StatusReasonDescription": "Permissions field is missing",
        "Path": "Data.Permissions"
      }
    ],
    "StatusUpdateDateTime": "1970-01-01T00:00:00Z",
    "Permissions": [
      "ReadAccountsBasic"
    ],
    "ExpirationDateTime": "1970-01-01T00:00:00Z",
    "TransactionFromDateTime": "1970-01-01T00:00:00Z",
    "TransactionToDateTime": "1970-01-01T00:00:00Z"
  },
  "Risk": {},
  "Links": {
    "Self": "http://example.com",
    "First": "http://example.com",
    "Prev": "http://example.com",
    "Next": "http://example.com",
    "Last": "http://example.com"
  },
  "Meta": {
    "TotalPages": 0,
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Data|object|true|none|none|
|Risk|[OBRisk2](#schemaobrisk2)|true|none|The Risk section is sent by the initiating party to the ASPSP. <br /><br>It is used to specify additional details for risk scoring for Account Info.|
|Links|[Links](#schemalinks)|false|none|Links relevant to the payload|
|Meta|[Meta](#schemameta)|false|none|Meta Data relevant to the payload|

<h2 id="tocS_OBInternalConsentStatus1Code">OBInternalConsentStatus1Code</h2>
<!-- backwards compatibility -->
<a id="schemaobinternalconsentstatus1code"></a>
<a id="schema_OBInternalConsentStatus1Code"></a>
<a id="tocSobinternalconsentstatus1code"></a>
<a id="tocsobinternalconsentstatus1code"></a>

```json
"AWAU"
```

Specifies the status of consent resource in code form.

<h2 id="tocS_OBReadDataStatement2">OBReadDataStatement2</h2>
<!-- backwards compatibility -->
<a id="schemaobreaddatastatement2"></a>
<a id="schema_OBReadDataStatement2"></a>
<a id="tocSobreaddatastatement2"></a>
<a id="tocsobreaddatastatement2"></a>

```json
{
  "Statement": [
    {
      "AccountId": "22289",
      "StatementId": "8sfhke-sifhkeuf-97813",
      "StatementReference": "002",
      "Type": "RegularPeriodic",
      "StartDateTime": "2017-07-12T00:00:00+00:00",
      "EndDateTime": "2017-07-12T00:00:00+00:00",
      "CreationDateTime": "2024-05-29T00:00:00Z",
      "StatementDescription": [
        "August 2017 Statement"
      ],
      "StatementBenefit": [
        {
          "Type": "UK.OBIE.Cashback",
          "Amount": {
            "Amount": "1209.06",
            "Currency": "GBP"
          }
        }
      ],
      "StatementFee": [
        {
          "Description": "International usage charge",
          "CreditDebitIndicator": "Credit",
          "Type": "UK.OBIE.Annual",
          "Rate": 0.05,
          "RateType": "UK.OBIE.AER",
          "Frequency": "UK.OBIE.StatementMonthly",
          "Amount": {
            "Amount": "1209.06",
            "Currency": "GBP"
          }
        }
      ],
      "StatementInterest": [
        {
          "Description": "Interest occurred over statement duration",
          "CreditDebitIndicator": "Credit",
          "Type": "UK.OBIE.Total",
          "Rate": 0.05,
          "RateType": "UK.OBIE.FixedRate",
          "Frequency": "UK.OBIE.Monthly",
          "Amount": {
            "Amount": "1209.06",
            "Currency": "GBP"
          }
        }
      ],
      "StatementAmount": [
        {
          "CreditDebitIndicator": "Credit",
          "Type": "UK.OBIE.CreditLimit",
          "Amount": {
            "Amount": "1209.06",
            "Currency": "GBP",
            "SubType": "BCUR"
          },
          "LocalAmount": {
            "Amount": "1209.06",
            "Currency": "GBP",
            "SubType": "LCUR"
          }
        }
      ],
      "StatementDateTime": [
        {
          "DateTime": "2024-05-29T00:00:00Z",
          "Type": "UK.OBIE.NextStatement"
        }
      ],
      "StatementRate": [
        {
          "Rate": "0.224",
          "Type": "UK.OBIE.AnnualCash"
        }
      ],
      "StatementValue": [
        {
          "Value": "string",
          "Type": "UK.OBIE.Credit"
        }
      ],
      "TotalValue": {
        "Amount": "1209.06",
        "Currency": "GBP"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Statement|[[OBStatement2](#schemaobstatement2)]|false|none|none|

<h2 id="tocS_OBReadDataTransaction6">OBReadDataTransaction6</h2>
<!-- backwards compatibility -->
<a id="schemaobreaddatatransaction6"></a>
<a id="schema_OBReadDataTransaction6"></a>
<a id="tocSobreaddatatransaction6"></a>
<a id="tocsobreaddatatransaction6"></a>

```json
{
  "Transaction": [
    {
      "AccountId": "22289",
      "TransactionId": "string",
      "TransactionReference": "string",
      "StatementReference": [
        "002"
      ],
      "CreditDebitIndicator": "Credit",
      "Status": "BOOK",
      "TransactionMutability": "Mutable",
      "BookingDateTime": "1970-01-01T00:00:00Z",
      "ValueDateTime": "1970-01-01T00:00:00Z",
      "TransactionInformation": "string",
      "AddressLine": "string",
      "Amount": {
        "Amount": "1209.06",
        "Currency": "GBP"
      },
      "ChargeAmount": {
        "Amount": "1209.06",
        "Currency": "GBP"
      },
      "CurrencyExchange": {
        "SourceCurrency": "string",
        "TargetCurrency": "string",
        "UnitCurrency": "string",
        "ExchangeRate": 0,
        "ContractIdentification": "string",
        "QuotationDate": "1970-01-01T00:00:00Z",
        "InstructedAmount": {
          "Amount": "1209.06",
          "Currency": "GBP"
        }
      },
      "BankTransactionCode": {
        "Code": "string",
        "SubCode": "string"
      },
      "ProprietaryBankTransactionCode": {
        "Code": "string",
        "Issuer": "string"
      },
      "ExtendedProprietaryBankTransactionCodes": [
        {
          "Code": "string",
          "Issuer": "string",
          "Description": "string"
        }
      ],
      "Balance": {
        "CreditDebitIndicator": "Credit",
        "Type": "CLAV",
        "Amount": {
          "Amount": "1209.06",
          "Currency": "GBP"
        }
      },
      "MerchantDetails": {
        "MerchantName": "string",
        "MerchantCategoryCode": "stri"
      },
      "CreditorAgent": {
        "SchemeName": "UK.OBIE.BICFI",
        "Identification": "string",
        "Name": "Agent Name",
        "LEI": "IZ9Q00LZEVUKWCQY6X15",
        "PostalAddress": {
          "AddressType": "BIZZ",
          "Department": "Finance",
          "SubDepartment": "Payroll",
          "StreetName": "Bank Street",
          "BuildingNumber": "11",
          "BuildingName": "string",
          "Floor": "11",
          "UnitNumber": "A88",
          "Room": "Basement 03",
          "PostBox": "PO Box 123456",
          "TownLocationName": "London",
          "DistrictName": "Greater London",
          "CareOf": "Jane Smith",
          "PostCode": "EC2N 4AG",
          "TownName": "London",
          "CountrySubDivision": "string",
          "Country": "string",
          "AddressLine": [
            "string"
          ]
        }
      },
      "CreditorAccount": {
        "SchemeName": "string",
        "Identification": "80200112344562",
        "Name": "Jane Smith",
        "SecondaryIdentification": "87562298675897",
        "Proxy": {
          "Identification": "2360549017905188",
          "Code": "TELE",
          "Type": "string"
        }
      },
      "DebtorAgent": {
        "SchemeName": "UK.OBIE.BICFI",
        "Identification": "string",
        "Name": "Agent Name",
        "LEI": "IZ9Q00LZEVUKWCQY6X15",
        "PostalAddress": {
          "AddressType": "BIZZ",
          "Department": "Finance",
          "SubDepartment": "Payroll",
          "StreetName": "Bank Street",
          "BuildingNumber": "11",
          "BuildingName": "string",
          "Floor": "11",
          "UnitNumber": "A88",
          "Room": "Basement 03",
          "PostBox": "PO Box 123456",
          "TownLocationName": "London",
          "DistrictName": "Greater London",
          "CareOf": "Jane Smith",
          "PostCode": "EC2N 4AG",
          "TownName": "London",
          "CountrySubDivision": "string",
          "Country": "string",
          "AddressLine": [
            "string"
          ]
        }
      },
      "DebtorAccount": {
        "SchemeName": "string",
        "Identification": "80200112344562",
        "Name": "Jane Smith",
        "SecondaryIdentification": "87562298675897",
        "Proxy": {
          "Identification": "2360549017905188",
          "Code": "TELE",
          "Type": "string"
        }
      },
      "CardInstrument": {
        "CardSchemeName": "AmericanExpress",
        "AuthorisationType": "ConsumerDevice",
        "Name": "string",
        "Identification": "string"
      },
      "SupplementaryData": {},
      "CategoryPurposeCode": "BONU",
      "PaymentPurposeCode": "BKDF",
      "UltimateCreditor": {
        "Name": "string",
        "Identification": "string",
        "LEI": "IZ9Q00LZEVUKWCQY6X15",
        "SchemeName": "string",
        "PostalAddress": {
          "AddressType": "BIZZ",
          "Department": "Finance",
          "SubDepartment": "Payroll",
          "StreetName": "Bank Street",
          "BuildingNumber": "11",
          "BuildingName": "string",
          "Floor": "11",
          "UnitNumber": "A88",
          "Room": "Basement 03",
          "PostBox": "PO Box 123456",
          "TownLocationName": "London",
          "DistrictName": "Greater London",
          "CareOf": "Jane Smith",
          "PostCode": "EC2N 4AG",
          "TownName": "London",
          "CountrySubDivision": "string",
          "Country": "string",
          "AddressLine": [
            "string"
          ]
        }
      },
      "UltimateDebtor": {
        "Name": "string",
        "Identification": "string",
        "LEI": "IZ9Q00LZEVUKWCQY6X15",
        "SchemeName": "string",
        "PostalAddress": {
          "AddressType": "BIZZ",
          "Department": "Finance",
          "SubDepartment": "Payroll",
          "StreetName": "Bank Street",
          "BuildingNumber": "11",
          "BuildingName": "string",
          "Floor": "11",
          "UnitNumber": "A88",
          "Room": "Basement 03",
          "PostBox": "PO Box 123456",
          "TownLocationName": "London",
          "DistrictName": "Greater London",
          "CareOf": "Jane Smith",
          "PostCode": "EC2N 4AG",
          "TownName": "London",
          "CountrySubDivision": "string",
          "Country": "string",
          "AddressLine": [
            "string"
          ]
        }
      },
      "IntermediaryAgent1": {
        "Name": "string",
        "SchemeName": "string",
        "Identification": "string",
        "LEI": "IZ9Q00LZEVUKWCQY6X15",
        "PostalAddress": {
          "AddressType": "BIZZ",
          "Department": "Finance",
          "SubDepartment": "Payroll",
          "StreetName": "Bank Street",
          "BuildingNumber": "11",
          "BuildingName": "string",
          "Floor": "11",
          "UnitNumber": "A88",
          "Room": "Basement 03",
          "PostBox": "PO Box 123456",
          "TownLocationName": "London",
          "DistrictName": "Greater London",
          "CareOf": "Jane Smith",
          "PostCode": "EC2N 4AG",
          "TownName": "London",
          "CountrySubDivision": "string",
          "Country": "string",
          "AddressLine": [
            "string"
          ]
        },
        "ProcessingStatus": "PDNG"
      },
      "IntermediaryAgent2": {
        "Name": "string",
        "SchemeName": "string",
        "Identification": "string",
        "LEI": "IZ9Q00LZEVUKWCQY6X15",
        "PostalAddress": {
          "AddressType": "BIZZ",
          "Department": "Finance",
          "SubDepartment": "Payroll",
          "StreetName": "Bank Street",
          "BuildingNumber": "11",
          "BuildingName": "string",
          "Floor": "11",
          "UnitNumber": "A88",
          "Room": "Basement 03",
          "PostBox": "PO Box 123456",
          "TownLocationName": "London",
          "DistrictName": "Greater London",
          "CareOf": "Jane Smith",
          "PostCode": "EC2N 4AG",
          "TownName": "London",
          "CountrySubDivision": "string",
          "Country": "string",
          "AddressLine": [
            "string"
          ]
        },
        "ProcessingStatus": "PDNG"
      },
      "IntermediaryAgent3": {
        "Name": "string",
        "SchemeName": "string",
        "Identification": "string",
        "LEI": "IZ9Q00LZEVUKWCQY6X15",
        "PostalAddress": {
          "AddressType": "BIZZ",
          "Department": "Finance",
          "SubDepartment": "Payroll",
          "StreetName": "Bank Street",
          "BuildingNumber": "11",
          "BuildingName": "string",
          "Floor": "11",
          "UnitNumber": "A88",
          "Room": "Basement 03",
          "PostBox": "PO Box 123456",
          "TownLocationName": "London",
          "DistrictName": "Greater London",
          "CareOf": "Jane Smith",
          "PostCode": "EC2N 4AG",
          "TownName": "London",
          "CountrySubDivision": "string",
          "Country": "string",
          "AddressLine": [
            "string"
          ]
        },
        "ProcessingStatus": "PDNG"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Transaction|[[OBTransaction6](#schemaobtransaction6)]|false|none|none|

<h2 id="tocS_OBReadDirectDebit2">OBReadDirectDebit2</h2>
<!-- backwards compatibility -->
<a id="schemaobreaddirectdebit2"></a>
<a id="schema_OBReadDirectDebit2"></a>
<a id="tocSobreaddirectdebit2"></a>
<a id="tocsobreaddirectdebit2"></a>

```json
{
  "Data": {
    "DirectDebit": [
      {
        "AccountId": "22289",
        "DirectDebitId": "string",
        "DirectDebitStatusCode": "ACTV",
        "MandateRelatedInformation": {
          "MandateIdentification": "Golfers",
          "Classification": "FIXE",
          "CategoryPurposeCode": "BONU",
          "FirstPaymentDateTime": "2024-04-25T12:46:49.425Z",
          "RecurringPaymentDateTime": "2024-04-25T12:46:49.425Z",
          "FinalPaymentDateTime": "2024-04-25T12:46:49.425Z",
          "Frequency": {
            "Type": "MNTH",
            "CountPerPeriod": 1,
            "PointInTime": "00"
          },
          "Reason": "To pay monthly membership"
        },
        "Name": "string",
        "PreviousPaymentDateTime": "1970-01-01T00:00:00Z",
        "PreviousPaymentAmount": {
          "Amount": "1209.06",
          "Currency": "GBP"
        }
      }
    ]
  },
  "Links": {
    "Self": "http://example.com",
    "First": "http://example.com",
    "Prev": "http://example.com",
    "Next": "http://example.com",
    "Last": "http://example.com"
  },
  "Meta": {
    "TotalPages": 0,
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Data|object|true|none|none|
|Links|[Links](#schemalinks)|false|none|Links relevant to the payload|
|Meta|[Meta](#schemameta)|false|none|Meta Data relevant to the payload|

<h2 id="tocS_OBReadOffer1">OBReadOffer1</h2>
<!-- backwards compatibility -->
<a id="schemaobreadoffer1"></a>
<a id="schema_OBReadOffer1"></a>
<a id="tocSobreadoffer1"></a>
<a id="tocsobreadoffer1"></a>

```json
{
  "Data": {
    "Offer": [
      {
        "AccountId": "22289",
        "OfferId": "Offer1",
        "OfferType": "LimitIncrease",
        "Description": "Credit limit increase for the account up to £10000.00",
        "StartDateTime": "2024-05-29T00:00:00Z",
        "EndDateTime": "2024-06-29T00:00:00Z",
        "Rate": "100.00",
        "Value": 10,
        "Term": "Starting first of the month and ending at the end of year",
        "URL": "http://modelbank.com/offer/offer1",
        "Amount": {
          "Amount": "1209.06",
          "Currency": "GBP"
        },
        "Fee": {
          "Amount": "1209.06",
          "Currency": "GBP"
        }
      }
    ]
  },
  "Links": {
    "Self": "http://example.com",
    "First": "http://example.com",
    "Prev": "http://example.com",
    "Next": "http://example.com",
    "Last": "http://example.com"
  },
  "Meta": {
    "TotalPages": 0,
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Data|object|true|none|none|
|Links|[Links](#schemalinks)|false|none|Links relevant to the payload|
|Meta|[Meta](#schemameta)|false|none|Meta Data relevant to the payload|

<h2 id="tocS_OBReadParty2">OBReadParty2</h2>
<!-- backwards compatibility -->
<a id="schemaobreadparty2"></a>
<a id="schema_OBReadParty2"></a>
<a id="tocSobreadparty2"></a>
<a id="tocsobreadparty2"></a>

```json
{
  "Data": {
    "Party": {
      "PartyId": "PXSIF023",
      "PartyNumber": "20202002",
      "PartyType": "Joint",
      "Name": "Mx Jane Smith",
      "FullLegalName": "Jane Smith",
      "LegalStructure": "UK.OBIE.Individual",
      "LEI": "IZ9Q00LZEVUKWCQY6X15",
      "BeneficialOwnership": true,
      "AccountRole": "string",
      "EmailAddress": "d.user@semiotec.co.jp",
      "Phone": "+44-2079460000",
      "Mobile": "+44-7700900000",
      "Relationships": {
        "Account": {
          "Related": "https://api.alphabank.com/open-banking/v4.0/aisp/accounts/89019",
          "Id": "89019"
        }
      },
      "Address": [
        {
          "AddressType": "BIZZ",
          "Department": "Finance",
          "SubDepartment": "Payroll",
          "StreetName": "Bank Street",
          "BuildingNumber": "11",
          "BuildingName": "string",
          "Floor": "11",
          "UnitNumber": "A88",
          "Room": "Basement 03",
          "PostBox": "PO Box 123456",
          "TownLocationName": "London",
          "DistrictName": "Greater London",
          "CareOf": "Jane Smith",
          "PostCode": "EC2N 4AG",
          "TownName": "London",
          "CountrySubDivision": "string",
          "Country": "string",
          "AddressLine": [
            "string"
          ]
        }
      ]
    }
  },
  "Links": {
    "Self": "http://example.com",
    "First": "http://example.com",
    "Prev": "http://example.com",
    "Next": "http://example.com",
    "Last": "http://example.com"
  },
  "Meta": {
    "TotalPages": 0,
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Data|object|true|none|none|
|Links|[Links](#schemalinks)|false|none|Links relevant to the payload|
|Meta|[Meta](#schemameta)|false|none|Meta Data relevant to the payload|

<h2 id="tocS_OBReadParty3">OBReadParty3</h2>
<!-- backwards compatibility -->
<a id="schemaobreadparty3"></a>
<a id="schema_OBReadParty3"></a>
<a id="tocSobreadparty3"></a>
<a id="tocsobreadparty3"></a>

```json
{
  "Data": {
    "Party": [
      {
        "PartyId": "PXSIF023",
        "PartyNumber": "20202002",
        "PartyType": "Joint",
        "Name": "Mx Jane Smith",
        "FullLegalName": "Jane Smith",
        "LegalStructure": "UK.OBIE.Individual",
        "LEI": "IZ9Q00LZEVUKWCQY6X15",
        "BeneficialOwnership": true,
        "AccountRole": "string",
        "EmailAddress": "d.user@semiotec.co.jp",
        "Phone": "+44-2079460000",
        "Mobile": "+44-7700900000",
        "Relationships": {
          "Account": {
            "Related": "https://api.alphabank.com/open-banking/v4.0/aisp/accounts/89019",
            "Id": "89019"
          }
        },
        "Address": [
          {
            "AddressType": "BIZZ",
            "Department": "Finance",
            "SubDepartment": "Payroll",
            "StreetName": "Bank Street",
            "BuildingNumber": "11",
            "BuildingName": "string",
            "Floor": "11",
            "UnitNumber": "A88",
            "Room": "Basement 03",
            "PostBox": "PO Box 123456",
            "TownLocationName": "London",
            "DistrictName": "Greater London",
            "CareOf": "Jane Smith",
            "PostCode": "EC2N 4AG",
            "TownName": "London",
            "CountrySubDivision": "string",
            "Country": "string",
            "AddressLine": [
              "string"
            ]
          }
        ]
      }
    ]
  },
  "Links": {
    "Self": "http://example.com",
    "First": "http://example.com",
    "Prev": "http://example.com",
    "Next": "http://example.com",
    "Last": "http://example.com"
  },
  "Meta": {
    "TotalPages": 0,
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Data|object|true|none|none|
|Links|[Links](#schemalinks)|false|none|Links relevant to the payload|
|Meta|[Meta](#schemameta)|false|none|Meta Data relevant to the payload|

<h2 id="tocS_OBReadProduct2">OBReadProduct2</h2>
<!-- backwards compatibility -->
<a id="schemaobreadproduct2"></a>
<a id="schema_OBReadProduct2"></a>
<a id="tocSobreadproduct2"></a>
<a id="tocsobreadproduct2"></a>

```json
{
  "Data": {
    "Product": [
      {
        "ProductName": "321 Product",
        "ProductId": "51B",
        "AccountId": "22289",
        "SecondaryProductId": "CA78",
        "ProductType": "PersonalCurrentAccount",
        "MarketingStateId": "22878123",
        "OtherProductType": {
          "Name": "e-Wallet",
          "Description": "Virtual wallet",
          "ProductDetails": {
            "Segment": [
              "GEAS"
            ],
            "FeeFreeLength": 0,
            "FeeFreeLengthPeriod": "PACT",
            "MonthlyMaximumCharge": "string",
            "Notes": [
              "string"
            ],
            "OtherSegment": {
              "Code": "string",
              "Name": "string",
              "Description": "string"
            }
          },
          "CreditInterest": {
            "TierBandSet": [
              {
                "TierBandMethod": "INBA",
                "CalculationMethod": "ITCO",
                "Destination": "INOT",
                "Notes": [
                  "string"
                ],
                "OtherCalculationMethod": {
                  "Code": "string",
                  "Name": "string",
                  "Description": "string"
                },
                "OtherDestination": {
                  "Code": "string",
                  "Name": "string",
                  "Description": "string"
                },
                "TierBand": [
                  {
                    "Identification": "string",
                    "TierValueMinimum": "string",
                    "TierValueMaximum": "string",
                    "CalculationFrequency": "FQAT",
                    "ApplicationFrequency": "FQAT",
                    "DepositInterestAppliedCoverage": "INBA",
                    "FixedVariableInterestRateType": "INFI",
                    "AER": "string",
                    "BankInterestRateType": "INBB",
                    "BankInterestRate": "string",
                    "Notes": [
                      "string"
                    ],
                    "OtherBankInterestType": {
                      "Code": "string",
                      "Name": "string",
                      "Description": "string"
                    },
                    "OtherApplicationFrequency": {
                      "Code": "string",
                      "Name": "string",
                      "Description": "string"
                    },
                    "OtherCalculationFrequency": {
                      "Code": "string",
                      "Name": "string",
                      "Description": "string"
                    }
                  }
                ]
              }
            ]
          },
          "Overdraft": {
            "Notes": [
              "string"
            ],
            "OverdraftTierBandSet": [
              {
                "TierBandMethod": "INBA",
                "OverdraftType": "OVCO",
                "Identification": "string",
                "AuthorisedIndicator": true,
                "BufferAmount": "string",
                "Notes": [
                  "string"
                ],
                "OverdraftTierBand": [
                  {
                    "Identification": "string",
                    "TierValueMin": "string",
                    "TierValueMax": "string",
                    "EAR": "string",
                    "AgreementLengthMin": 0,
                    "AgreementLengthMax": 0,
                    "AgreementPeriod": "PACT",
                    "OverdraftInterestChargingCoverage": "INBA",
                    "BankGuaranteedIndicator": true,
                    "Notes": [
                      "string"
                    ],
                    "OverdraftFeesCharges": [
                      {
                        "OverdraftFeeChargeCap": [
                          {
                            "FeeType": [
                              "FBAO"
                            ],
                            "MinMaxType": "FMMN",
                            "FeeCapOccurrence": 0,
                            "FeeCapAmount": "string",
                            "CappingPeriod": "PACT",
                            "Notes": [
                              "string"
                            ],
                            "OtherFeeType": [
                              {
                                "Code": "string",
                                "Name": "string",
                                "Description": "string"
                              }
                            ]
                          }
                        ],
                        "OverdraftFeeChargeDetail": [
                          {
                            "FeeType": "FBAO",
                            "NegotiableIndicator": true,
                            "OverdraftControlIndicator": true,
                            "IncrementalBorrowingAmount": "string",
                            "FeeAmount": "string",
                            "FeeRate": "string",
                            "FeeRateType": "INBB",
                            "ApplicationFrequency": "FEAC",
                            "CalculationFrequency": "FEAC",
                            "Notes": [
                              "string"
                            ],
                            "OverdraftFeeChargeCap": [
                              {
                                "FeeType": [
                                  "FBAO"
                                ],
                                "MinMaxType": "FMMN",
                                "FeeCapOccurrence": 0,
                                "FeeCapAmount": "string",
                                "CappingPeriod": "PACT",
                                "Notes": [
                                  "string"
                                ],
                                "OtherFeeType": [
                                  {
                                    "Code": "string",
                                    "Name": "string",
                                    "Description": "string"
                                  }
                                ]
                              }
                            ],
                            "OtherFeeType": {
                              "Code": "string",
                              "Name": "string",
                              "Description": "string"
                            },
                            "OtherFeeRateType": {
                              "Code": "string",
                              "Name": "string",
                              "Description": "string"
                            },
                            "OtherApplicationFrequency": {
                              "Code": "string",
                              "Name": "string",
                              "Description": "string"
                            },
                            "OtherCalculationFrequency": {
                              "Code": "string",
                              "Name": "string",
                              "Description": "string"
                            }
                          }
                        ]
                      }
                    ]
                  }
                ],
                "OverdraftFeesCharges": [
                  {
                    "OverdraftFeeChargeCap": [
                      {
                        "FeeType": [
                          "FBAO"
                        ],
                        "MinMaxType": "FMMN",
                        "FeeCapOccurrence": 0,
                        "FeeCapAmount": "string",
                        "CappingPeriod": "PACT",
                        "Notes": [
                          "string"
                        ],
                        "OtherFeeType": [
                          {
                            "Code": "string",
                            "Name": "string",
                            "Description": "string"
                          }
                        ]
                      }
                    ],
                    "OverdraftFeeChargeDetail": [
                      {
                        "FeeType": "FBAO",
                        "NegotiableIndicator": true,
                        "OverdraftControlIndicator": true,
                        "IncrementalBorrowingAmount": "string",
                        "FeeAmount": "string",
                        "FeeRate": "string",
                        "FeeRateType": "INBB",
                        "ApplicationFrequency": "FEAC",
                        "CalculationFrequency": "FEAC",
                        "Notes": [
                          "string"
                        ],
                        "OverdraftFeeChargeCap": [
                          {
                            "FeeType": [
                              "FBAO"
                            ],
                            "MinMaxType": "FMMN",
                            "FeeCapOccurrence": 0,
                            "FeeCapAmount": "string",
                            "CappingPeriod": "PACT",
                            "Notes": [
                              "string"
                            ],
                            "OtherFeeType": [
                              {
                                "Code": "string",
                                "Name": "string",
                                "Description": "string"
                              }
                            ]
                          }
                        ],
                        "OtherFeeType": {
                          "Code": "string",
                          "Name": "string",
                          "Description": "string"
                        },
                        "OtherFeeRateType": {
                          "Code": "string",
                          "Name": "string",
                          "Description": "string"
                        },
                        "OtherApplicationFrequency": {
                          "Code": "string",
                          "Name": "string",
                          "Description": "string"
                        },
                        "OtherCalculationFrequency": {
                          "Code": "string",
                          "Name": "string",
                          "Description": "string"
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          },
          "LoanInterest": {
            "Notes": [
              "string"
            ],
            "LoanInterestTierBandSet": [
              {
                "TierBandMethod": "INBA",
                "Identification": "string",
                "CalculationMethod": "ITCO",
                "Notes": [
                  "string"
                ],
                "OtherCalculationMethod": {
                  "Code": "string",
                  "Name": "string",
                  "Description": "string"
                },
                "LoanInterestTierBand": [
                  {
                    "Identification": "string",
                    "TierValueMinimum": "string",
                    "TierValueMaximum": "string",
                    "TierValueMinTerm": 0,
                    "MinTermPeriod": "PACT",
                    "TierValueMaxTerm": 0,
                    "MaxTermPeriod": "PACT",
                    "FixedVariableInterestRateType": "INFI",
                    "RepAPR": "string",
                    "LoanProviderInterestRateType": "INBB",
                    "LoanProviderInterestRate": "string",
                    "Notes": [
                      "string"
                    ],
                    "OtherLoanProviderInterestRateType": {
                      "Code": "string",
                      "Name": "string",
                      "Description": "string"
                    },
                    "LoanInterestFeesCharges": [
                      {
                        "LoanInterestFeeChargeDetail": [
                          {
                            "FeeType": "FEPF",
                            "NegotiableIndicator": true,
                            "FeeAmount": "string",
                            "FeeRate": "string",
                            "FeeRateType": "INBB",
                            "ApplicationFrequency": "FEAC",
                            "CalculationFrequency": "FEAC",
                            "Notes": [
                              "string"
                            ],
                            "OtherFeeType": {
                              "Code": "string",
                              "FeeCategory": "FCOT",
                              "Name": "string",
                              "Description": "string"
                            },
                            "OtherFeeRateType": {
                              "Code": "string",
                              "Name": "string",
                              "Description": "string"
                            },
                            "OtherApplicationFrequency": {
                              "Code": "string",
                              "Name": "string",
                              "Description": "string"
                            },
                            "OtherCalculationFrequency": {
                              "Code": "string",
                              "Name": "string",
                              "Description": "string"
                            }
                          }
                        ],
                        "LoanInterestFeeChargeCap": [
                          {
                            "FeeType": [
                              "FEPF"
                            ],
                            "MinMaxType": "FMMN",
                            "FeeCapOccurrence": 0,
                            "FeeCapAmount": "string",
                            "CappingPeriod": "FEAC",
                            "Notes": [
                              "string"
                            ],
                            "OtherFeeType": [
                              {
                                "Code": "string",
                                "Name": "string",
                                "Description": "string"
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ],
                "LoanInterestFeesCharges": [
                  {
                    "LoanInterestFeeChargeDetail": [
                      {
                        "FeeType": "FEPF",
                        "NegotiableIndicator": true,
                        "FeeAmount": "string",
                        "FeeRate": "string",
                        "FeeRateType": "INBB",
                        "ApplicationFrequency": "FEAC",
                        "CalculationFrequency": "FEAC",
                        "Notes": [
                          "string"
                        ],
                        "OtherFeeType": {
                          "Code": "string",
                          "FeeCategory": "FCOT",
                          "Name": "string",
                          "Description": "string"
                        },
                        "OtherFeeRateType": {
                          "Code": "string",
                          "Name": "string",
                          "Description": "string"
                        },
                        "OtherApplicationFrequency": {
                          "Code": "string",
                          "Name": "string",
                          "Description": "string"
                        },
                        "OtherCalculationFrequency": {
                          "Code": "string",
                          "Name": "string",
                          "Description": "string"
                        }
                      }
                    ],
                    "LoanInterestFeeChargeCap": [
                      {
                        "FeeType": [
                          "FEPF"
                        ],
                        "MinMaxType": "FMMN",
                        "FeeCapOccurrence": 0,
                        "FeeCapAmount": "string",
                        "CappingPeriod": "FEAC",
                        "Notes": [
                          "string"
                        ],
                        "OtherFeeType": [
                          {
                            "Code": "string",
                            "Name": "string",
                            "Description": "string"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          "Repayment": {
            "RepaymentType": "USBA",
            "RepaymentFrequency": "SMDA",
            "AmountType": "RABD",
            "Notes": [
              "string"
            ],
            "OtherRepaymentType": {
              "Code": "string",
              "Name": "string",
              "Description": "string"
            },
            "OtherRepaymentFrequency": {
              "Code": "string",
              "Name": "string",
              "Description": "string"
            },
            "OtherAmountType": {
              "Code": "string",
              "Name": "string",
              "Description": "string"
            },
            "RepaymentFeeCharges": {
              "RepaymentFeeChargeDetail": [
                {
                  "FeeType": "FEPF",
                  "NegotiableIndicator": true,
                  "FeeAmount": "string",
                  "FeeRate": "string",
                  "FeeRateType": "INBB",
                  "ApplicationFrequency": "FEAC",
                  "CalculationFrequency": "FEAC",
                  "Notes": [
                    "string"
                  ],
                  "OtherFeeType": {
                    "Code": "string",
                    "FeeCategory": "FCOT",
                    "Name": "string",
                    "Description": "string"
                  },
                  "OtherFeeRateType": {
                    "Code": "string",
                    "Name": "string",
                    "Description": "string"
                  },
                  "OtherApplicationFrequency": {
                    "Code": "string",
                    "Name": "string",
                    "Description": "string"
                  },
                  "OtherCalculationFrequency": {
                    "Code": "string",
                    "Name": "string",
                    "Description": "string"
                  }
                }
              ],
              "RepaymentFeeChargeCap": [
                {
                  "FeeType": [
                    "FEPF"
                  ],
                  "MinMaxType": "FMMN",
                  "FeeCapOccurrence": 0,
                  "FeeCapAmount": "string",
                  "CappingPeriod": "PACT",
                  "Notes": [
                    "string"
                  ],
                  "OtherFeeType": [
                    {
                      "Code": "string",
                      "Name": "string",
                      "Description": "string"
                    }
                  ]
                }
              ]
            },
            "RepaymentHoliday": [
              {
                "MaxHolidayLength": 0,
                "MaxHolidayPeriod": "PACT",
                "Notes": [
                  "string"
                ]
              }
            ]
          },
          "OtherFeesCharges": [
            {
              "TariffType": "TTEL",
              "TariffName": "string",
              "OtherTariffType": {
                "Code": "string",
                "Name": "string",
                "Description": "string"
              },
              "FeeChargeDetail": [
                {
                  "FeeCategory": "FCOT",
                  "FeeType": "FEPF",
                  "NegotiableIndicator": true,
                  "FeeAmount": "string",
                  "FeeRate": "string",
                  "FeeRateType": "INBB",
                  "ApplicationFrequency": "FEAC",
                  "CalculationFrequency": "FEAC",
                  "Notes": [
                    "string"
                  ],
                  "FeeChargeCap": [
                    {
                      "FeeType": [
                        "FEPF"
                      ],
                      "MinMaxType": "FMMN",
                      "FeeCapOccurrence": 0,
                      "FeeCapAmount": "string",
                      "CappingPeriod": "PACT",
                      "Notes": [
                        "string"
                      ],
                      "OtherFeeType": [
                        {
                          "Code": "string",
                          "Name": "string",
                          "Description": "string"
                        }
                      ]
                    }
                  ],
                  "OtherFeeCategoryType": {
                    "Code": "string",
                    "Name": "string",
                    "Description": "string"
                  },
                  "OtherFeeType": {
                    "Code": "string",
                    "FeeCategory": "FCOT",
                    "Name": "string",
                    "Description": "string"
                  },
                  "OtherFeeRateType": {
                    "Code": "string",
                    "Name": "string",
                    "Description": "string"
                  },
                  "OtherApplicationFrequency": {
                    "Code": "string",
                    "Name": "string",
                    "Description": "string"
                  },
                  "OtherCalculationFrequency": {
                    "Code": "string",
                    "Name": "string",
                    "Description": "string"
                  },
                  "FeeApplicableRange": {
                    "MinimumAmount": "string",
                    "MaximumAmount": "string",
                    "MinimumRate": "string",
                    "MaximumRate": "string"
                  }
                }
              ],
              "FeeChargeCap": [
                {
                  "FeeType": [
                    "FEPF"
                  ],
                  "MinMaxType": "FMMN",
                  "FeeCapOccurrence": 0,
                  "FeeCapAmount": "string",
                  "CappingPeriod": "PACT",
                  "Notes": [
                    "string"
                  ],
                  "OtherFeeType": [
                    {
                      "Code": "string",
                      "Name": "string",
                      "Description": "string"
                    }
                  ]
                }
              ]
            }
          ],
          "SupplementaryData": {}
        },
        "BCA": {
          "ProductDetails": {
            "Segment": [
              "ClientAccount"
            ],
            "FeeFreeLength": 0,
            "FeeFreeLengthPeriod": "Day",
            "Notes": [
              "string"
            ]
          },
          "CreditInterest": {
            "TierBandSet": [
              {
                "TierBandMethod": "Banded",
                "CalculationMethod": "Compound",
                "Destination": "PayAway",
                "Notes": [
                  "string"
                ],
                "TierBand": [
                  {
                    "Identification": "string",
                    "TierValueMinimum": "string",
                    "TierValueMaximum": "string",
                    "CalculationFrequency": "Daily",
                    "ApplicationFrequency": "Daily",
                    "DepositInterestAppliedCoverage": "Banded",
                    "FixedVariableInterestRateType": "Fixed",
                    "AER": "string",
                    "BankInterestRateType": "Gross",
                    "BankInterestRate": "string",
                    "Notes": [
                      "string"
                    ],
                    "OtherBankInterestType": {
                      "Code": "stri",
                      "Name": "string",
                      "Description": "string"
                    },
                    "OtherApplicationFrequency": {
                      "Code": "stri",
                      "Name": "string",
                      "Description": "string"
                    },
                    "OtherCalculationFrequency": {
                      "Code": "stri",
                      "Name": "string",
                      "Description": "string"
                    }
                  }
                ]
              }
            ]
          },
          "Overdraft": {
            "Notes": [
              "string"
            ],
            "OverdraftTierBandSet": [
              {
                "TierBandMethod": "Banded",
                "OverdraftType": "Committed",
                "Identification": "string",
                "AuthorisedIndicator": true,
                "BufferAmount": "string",
                "Notes": [
                  "string"
                ],
                "OverdraftTierBand": [
                  {
                    "Identification": "string",
                    "TierValueMin": "string",
                    "TierValueMax": "string",
                    "EAR": "string",
                    "RepresentativeAPR": "string",
                    "AgreementLengthMin": 0,
                    "AgreementLengthMax": 0,
                    "AgreementPeriod": "Day",
                    "OverdraftInterestChargingCoverage": "Banded",
                    "BankGuaranteedIndicator": true,
                    "Notes": [
                      "string"
                    ],
                    "OverdraftFeesCharges": [
                      {
                        "OverdraftFeeChargeCap": [
                          {
                            "FeeType": [
                              "ArrangedOverdraft"
                            ],
                            "MinMaxType": "Minimum",
                            "FeeCapOccurrence": 0,
                            "FeeCapAmount": "string",
                            "CappingPeriod": "Day",
                            "Notes": [
                              "string"
                            ],
                            "OtherFeeType": [
                              {
                                "Code": "stri",
                                "Name": "string",
                                "Description": "string"
                              }
                            ]
                          }
                        ],
                        "OverdraftFeeChargeDetail": [
                          {
                            "FeeType": "ArrangedOverdraft",
                            "NegotiableIndicator": true,
                            "OverdraftControlIndicator": true,
                            "IncrementalBorrowingAmount": "string",
                            "FeeAmount": "string",
                            "FeeRate": "string",
                            "FeeRateType": "Gross",
                            "ApplicationFrequency": "OnClosing",
                            "CalculationFrequency": "OnClosing",
                            "Notes": [
                              "string"
                            ],
                            "OverdraftFeeChargeCap": [
                              {
                                "FeeType": [
                                  "ArrangedOverdraft"
                                ],
                                "MinMaxType": "Minimum",
                                "FeeCapOccurrence": 0,
                                "FeeCapAmount": "string",
                                "CappingPeriod": "Day",
                                "Notes": [
                                  "string"
                                ],
                                "OtherFeeType": [
                                  {
                                    "Code": "stri",
                                    "Name": "string",
                                    "Description": "string"
                                  }
                                ]
                              }
                            ],
                            "OtherFeeType": {
                              "Code": "stri",
                              "Name": "string",
                              "Description": "string"
                            },
                            "OtherFeeRateType": {
                              "Code": "stri",
                              "Name": "string",
                              "Description": "string"
                            },
                            "OtherApplicationFrequency": {
                              "Code": "stri",
                              "Name": "string",
                              "Description": "string"
                            },
                            "OtherCalculationFrequency": {
                              "Code": "stri",
                              "Name": "string",
                              "Description": "string"
                            }
                          }
                        ]
                      }
                    ]
                  }
                ],
                "OverdraftFeesCharges": [
                  {
                    "OverdraftFeeChargeCap": [
                      {
                        "FeeType": [
                          "ArrangedOverdraft"
                        ],
                        "MinMaxType": "Minimum",
                        "FeeCapOccurrence": 0,
                        "FeeCapAmount": "string",
                        "CappingPeriod": "Day",
                        "Notes": [
                          "string"
                        ],
                        "OtherFeeType": [
                          {
                            "Code": "stri",
                            "Name": "string",
                            "Description": "string"
                          }
                        ]
                      }
                    ],
                    "OverdraftFeeChargeDetail": [
                      {
                        "FeeType": "ArrangedOverdraft",
                        "NegotiableIndicator": true,
                        "OverdraftControlIndicator": true,
                        "IncrementalBorrowingAmount": "string",
                        "FeeAmount": "string",
                        "FeeRate": "string",
                        "FeeRateType": "Gross",
                        "ApplicationFrequency": "OnClosing",
                        "CalculationFrequency": "OnClosing",
                        "Notes": [
                          "string"
                        ],
                        "OverdraftFeeChargeCap": [
                          {
                            "FeeType": [
                              "ArrangedOverdraft"
                            ],
                            "MinMaxType": "Minimum",
                            "FeeCapOccurrence": 0,
                            "FeeCapAmount": "string",
                            "CappingPeriod": "Day",
                            "Notes": [
                              "string"
                            ],
                            "OtherFeeType": [
                              {
                                "Code": "stri",
                                "Name": "string",
                                "Description": "string"
                              }
                            ]
                          }
                        ],
                        "OtherFeeType": {
                          "Code": "stri",
                          "Name": "string",
                          "Description": "string"
                        },
                        "OtherFeeRateType": {
                          "Code": "stri",
                          "Name": "string",
                          "Description": "string"
                        },
                        "OtherApplicationFrequency": {
                          "Code": "stri",
                          "Name": "string",
                          "Description": "string"
                        },
                        "OtherCalculationFrequency": {
                          "Code": "stri",
                          "Name": "string",
                          "Description": "string"
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          },
          "OtherFeesCharges": [
            {
              "TariffType": "Electronic",
              "TariffName": "string",
              "OtherTariffType": {
                "Code": "stri",
                "Name": "string",
                "Description": "string"
              },
              "FeeChargeDetail": [
                {
                  "FeeCategory": "Other",
                  "FeeType": "Other",
                  "NegotiableIndicator": true,
                  "FeeAmount": "string",
                  "FeeRate": "string",
                  "FeeRateType": "Gross",
                  "ApplicationFrequency": "OnClosing",
                  "CalculationFrequency": "OnClosing",
                  "Notes": [
                    "string"
                  ],
                  "FeeChargeCap": [
                    {
                      "FeeType": [
                        "Other"
                      ],
                      "MinMaxType": "Minimum",
                      "FeeCapOccurrence": 0,
                      "FeeCapAmount": "string",
                      "CappingPeriod": "Day",
                      "Notes": [
                        "string"
                      ],
                      "OtherFeeType": [
                        {
                          "Code": "stri",
                          "Name": "string",
                          "Description": "string"
                        }
                      ]
                    }
                  ],
                  "OtherFeeCategoryType": {
                    "Code": "stri",
                    "Name": "string",
                    "Description": "string"
                  },
                  "OtherFeeType": {
                    "Code": "stri",
                    "FeeCategory": "Other",
                    "Name": "string",
                    "Description": "string"
                  },
                  "OtherFeeRateType": {
                    "Code": "stri",
                    "Name": "string",
                    "Description": "string"
                  },
                  "OtherApplicationFrequency": {
                    "Code": "stri",
                    "Name": "string",
                    "Description": "string"
                  },
                  "OtherCalculationFrequency": {
                    "Code": "stri",
                    "Name": "string",
                    "Description": "string"
                  },
                  "FeeApplicableRange": {
                    "MinimumAmount": "string",
                    "MaximumAmount": "string",
                    "MinimumRate": "string",
                    "MaximumRate": "string"
                  }
                }
              ],
              "FeeChargeCap": [
                {
                  "FeeType": [
                    "Other"
                  ],
                  "MinMaxType": "Minimum",
                  "FeeCapOccurrence": 0,
                  "FeeCapAmount": "string",
                  "CappingPeriod": "Day",
                  "Notes": [
                    "string"
                  ],
                  "OtherFeeType": [
                    {
                      "Code": "stri",
                      "Name": "string",
                      "Description": "string"
                    }
                  ]
                }
              ]
            }
          ]
        },
        "PCA": {
          "ProductDetails": {
            "Segment": [
              "Basic"
            ],
            "MonthlyMaximumCharge": "string",
            "Notes": [
              "string"
            ]
          },
          "CreditInterest": {
            "TierBandSet": [
              {
                "TierBandMethod": "Tiered",
                "CalculationMethod": "Compound",
                "Destination": "PayAway",
                "Notes": [
                  "string"
                ],
                "TierBand": [
                  {
                    "Identification": "string",
                    "TierValueMinimum": "string",
                    "TierValueMaximum": "string",
                    "CalculationFrequency": "PerAcademicTerm",
                    "ApplicationFrequency": "PerAcademicTerm",
                    "DepositInterestAppliedCoverage": "Tiered",
                    "FixedVariableInterestRateType": "Fixed",
                    "AER": "string",
                    "BankInterestRateType": "LinkedBaseRate",
                    "BankInterestRate": "string",
                    "Notes": [
                      "string"
                    ],
                    "OtherBankInterestType": {
                      "Code": "stri",
                      "Name": "string",
                      "Description": "string"
                    },
                    "OtherApplicationFrequency": {
                      "Code": "stri",
                      "Name": "string",
                      "Description": "string"
                    },
                    "OtherCalculationFrequency": {
                      "Code": "stri",
                      "Name": "string",
                      "Description": "string"
                    }
                  }
                ]
              }
            ]
          },
          "Overdraft": {
            "Notes": [
              "string"
            ],
            "OverdraftTierBandSet": [
              {
                "TierBandMethod": "Tiered",
                "OverdraftType": "Committed",
                "Identification": "string",
                "AuthorisedIndicator": true,
                "BufferAmount": "string",
                "Notes": [
                  "string"
                ],
                "OverdraftTierBand": [
                  {
                    "Identification": "string",
                    "TierValueMin": "string",
                    "TierValueMax": "string",
                    "OverdraftInterestChargingCoverage": "Tiered",
                    "BankGuaranteedIndicator": true,
                    "EAR": "string",
                    "RepresentativeAPR": "string",
                    "Notes": [
                      "string"
                    ],
                    "OverdraftFeesCharges": [
                      {
                        "OverdraftFeeChargeCap": [
                          {
                            "FeeType": [
                              "ArrangedOverdraft"
                            ],
                            "OverdraftControlIndicator": true,
                            "MinMaxType": "Minimum",
                            "FeeCapOccurrence": 0,
                            "FeeCapAmount": "string",
                            "CappingPeriod": "AcademicTerm",
                            "Notes": [
                              "string"
                            ],
                            "OtherFeeType": [
                              {
                                "Code": "stri",
                                "Name": "string",
                                "Description": "string"
                              }
                            ]
                          }
                        ],
                        "OverdraftFeeChargeDetail": [
                          {
                            "FeeType": "ArrangedOverdraft",
                            "OverdraftControlIndicator": true,
                            "IncrementalBorrowingAmount": "string",
                            "FeeAmount": "string",
                            "FeeRate": "string",
                            "FeeRateType": "LinkedBaseRate",
                            "ApplicationFrequency": "AccountClosing",
                            "CalculationFrequency": "AccountClosing",
                            "Notes": [
                              "string"
                            ],
                            "OtherFeeType": {
                              "Code": "stri",
                              "Name": "string",
                              "Description": "string"
                            },
                            "OtherFeeRateType": {
                              "Code": "stri",
                              "Name": "string",
                              "Description": "string"
                            },
                            "OtherApplicationFrequency": {
                              "Code": "stri",
                              "Name": "string",
                              "Description": "string"
                            },
                            "OtherCalculationFrequency": {
                              "Code": "stri",
                              "Name": "string",
                              "Description": "string"
                            },
                            "OverdraftFeeChargeCap": {
                              "FeeType": [
                                "ArrangedOverdraft"
                              ],
                              "OverdraftControlIndicator": true,
                              "MinMaxType": "Minimum",
                              "FeeCapOccurrence": 0,
                              "FeeCapAmount": "string",
                              "CappingPeriod": "AcademicTerm",
                              "Notes": [
                                "string"
                              ],
                              "OtherFeeType": [
                                {
                                  "Code": "stri",
                                  "Name": "string",
                                  "Description": "string"
                                }
                              ]
                            }
                          }
                        ]
                      }
                    ]
                  }
                ],
                "OverdraftFeesCharges": [
                  {
                    "OverdraftFeeChargeCap": [
                      {
                        "FeeType": [
                          "ArrangedOverdraft"
                        ],
                        "OverdraftControlIndicator": true,
                        "MinMaxType": "Minimum",
                        "FeeCapOccurrence": 0,
                        "FeeCapAmount": "string",
                        "CappingPeriod": "AcademicTerm",
                        "Notes": [
                          "string"
                        ],
                        "OtherFeeType": [
                          {
                            "Code": "stri",
                            "Name": "string",
                            "Description": "string"
                          }
                        ]
                      }
                    ],
                    "OverdraftFeeChargeDetail": [
                      {
                        "FeeType": "ArrangedOverdraft",
                        "OverdraftControlIndicator": true,
                        "IncrementalBorrowingAmount": "string",
                        "FeeAmount": "string",
                        "FeeRate": "string",
                        "FeeRateType": "LinkedBaseRate",
                        "ApplicationFrequency": "AccountClosing",
                        "CalculationFrequency": "AccountClosing",
                        "Notes": [
                          "string"
                        ],
                        "OtherFeeType": {
                          "Code": "stri",
                          "Name": "string",
                          "Description": "string"
                        },
                        "OtherFeeRateType": {
                          "Code": "stri",
                          "Name": "string",
                          "Description": "string"
                        },
                        "OtherApplicationFrequency": {
                          "Code": "stri",
                          "Name": "string",
                          "Description": "string"
                        },
                        "OtherCalculationFrequency": {
                          "Code": "stri",
                          "Name": "string",
                          "Description": "string"
                        },
                        "OverdraftFeeChargeCap": {
                          "FeeType": [
                            "ArrangedOverdraft"
                          ],
                          "OverdraftControlIndicator": true,
                          "MinMaxType": "Minimum",
                          "FeeCapOccurrence": 0,
                          "FeeCapAmount": "string",
                          "CappingPeriod": "AcademicTerm",
                          "Notes": [
                            "string"
                          ],
                          "OtherFeeType": [
                            {
                              "Code": "stri",
                              "Name": "string",
                              "Description": "string"
                            }
                          ]
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          },
          "OtherFeesCharges": {
            "FeeChargeDetail": [
              {
                "FeeCategory": "Other",
                "FeeType": "ServiceCAccountFee",
                "FeeAmount": "string",
                "FeeRate": "string",
                "FeeRateType": "LinkedBaseRate",
                "ApplicationFrequency": "AccountClosing",
                "CalculationFrequency": "AccountClosing",
                "Notes": [
                  "string"
                ],
                "OtherFeeCategoryType": {
                  "Code": "stri",
                  "Name": "string",
                  "Description": "string"
                },
                "OtherFeeType": {
                  "Code": "stri",
                  "FeeCategory": "Other",
                  "Name": "string",
                  "Description": "string"
                },
                "OtherFeeRateType": {
                  "Code": "stri",
                  "Name": "string",
                  "Description": "string"
                },
                "OtherApplicationFrequency": {
                  "Code": "stri",
                  "Name": "string",
                  "Description": "string"
                },
                "OtherCalculationFrequency": {
                  "Code": "stri",
                  "Name": "string",
                  "Description": "string"
                },
                "FeeChargeCap": [
                  {
                    "FeeType": [
                      "ServiceCAccountFee"
                    ],
                    "MinMaxType": "Minimum",
                    "FeeCapOccurrence": 0,
                    "FeeCapAmount": "string",
                    "CappingPeriod": "AcademicTerm",
                    "Notes": [
                      "string"
                    ],
                    "OtherFeeType": [
                      {
                        "Code": "stri",
                        "Name": "string",
                        "Description": "string"
                      }
                    ]
                  }
                ],
                "FeeApplicableRange": {
                  "MinimumAmount": "string",
                  "MaximumAmount": "string",
                  "MinimumRate": "string",
                  "MaximumRate": "string"
                }
              }
            ],
            "FeeChargeCap": [
              {
                "FeeType": [
                  "ServiceCAccountFee"
                ],
                "MinMaxType": "Minimum",
                "FeeCapOccurrence": 0,
                "FeeCapAmount": "string",
                "CappingPeriod": "AcademicTerm",
                "Notes": [
                  "string"
                ],
                "OtherFeeType": [
                  {
                    "Code": "stri",
                    "Name": "string",
                    "Description": "string"
                  }
                ]
              }
            ]
          }
        }
      }
    ]
  },
  "Links": {
    "Self": "http://example.com",
    "First": "http://example.com",
    "Prev": "http://example.com",
    "Next": "http://example.com",
    "Last": "http://example.com"
  },
  "Meta": {
    "TotalPages": 0,
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z"
  }
}
```

Product details of Other Product which is not available in the standard list

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Data|object|true|none|Aligning with the read write specs structure.|
|Links|[Links](#schemalinks)|false|none|Links relevant to the payload|
|Meta|[Meta](#schemameta)|false|none|Meta Data relevant to the payload|

<h2 id="tocS_OBReadScheduledPayment3">OBReadScheduledPayment3</h2>
<!-- backwards compatibility -->
<a id="schemaobreadscheduledpayment3"></a>
<a id="schema_OBReadScheduledPayment3"></a>
<a id="tocSobreadscheduledpayment3"></a>
<a id="tocsobreadscheduledpayment3"></a>

```json
{
  "Data": {
    "ScheduledPayment": [
      {
        "AccountId": "22289",
        "ScheduledPaymentId": "SP03",
        "ScheduledPaymentDateTime": "2017-07-12T00:00:00+00:00",
        "ScheduledType": "Arrival",
        "Reference": "Towbar Club",
        "DebtorReference": "REF51561806",
        "InstructedAmount": {
          "Amount": "1209.06",
          "Currency": "GBP"
        },
        "CreditorAgent": {
          "SchemeName": "UK.OBIE.BICFI",
          "Identification": "80200112344562",
          "Name": "Agent Name",
          "PostalAddress": {
            "AddressType": "BIZZ",
            "Department": "Finance",
            "SubDepartment": "Payroll",
            "StreetName": "Bank Street",
            "BuildingNumber": "11",
            "BuildingName": "string",
            "Floor": "11",
            "UnitNumber": "A88",
            "Room": "Basement 03",
            "PostBox": "PO Box 123456",
            "TownLocationName": "London",
            "DistrictName": "Greater London",
            "CareOf": "Jane Smith",
            "PostCode": "EC2N 4AG",
            "TownName": "London",
            "CountrySubDivision": "string",
            "Country": "string",
            "AddressLine": [
              "string"
            ]
          },
          "LEI": "IZ9Q00LZEVUKWCQY6X15"
        },
        "CreditorAccount": {
          "SchemeName": "string",
          "Identification": "string",
          "Name": "Jane Smith",
          "SecondaryIdentification": "87562298675897",
          "Proxy": {
            "Identification": "2360549017905188",
            "Code": "TELE",
            "Type": "string"
          }
        }
      }
    ]
  },
  "Links": {
    "Self": "http://example.com",
    "First": "http://example.com",
    "Prev": "http://example.com",
    "Next": "http://example.com",
    "Last": "http://example.com"
  },
  "Meta": {
    "TotalPages": 0,
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Data|object|true|none|none|
|Links|[Links](#schemalinks)|false|none|Links relevant to the payload|
|Meta|[Meta](#schemameta)|false|none|Meta Data relevant to the payload|

<h2 id="tocS_OBReadStandingOrder6">OBReadStandingOrder6</h2>
<!-- backwards compatibility -->
<a id="schemaobreadstandingorder6"></a>
<a id="schema_OBReadStandingOrder6"></a>
<a id="tocSobreadstandingorder6"></a>
<a id="tocsobreadstandingorder6"></a>

```json
{
  "Data": {
    "StandingOrder": [
      {
        "AccountId": "22289",
        "StandingOrderId": "Ben5",
        "NextPaymentDateTime": "2017-07-12T00:00:00+00:00",
        "LastPaymentDateTime": "2017-07-12T00:00:00+00:00",
        "NumberOfPayments": "string",
        "StandingOrderStatusCode": "ACTV",
        "FirstPaymentAmount": {
          "Amount": "1209.06",
          "Currency": "GBP"
        },
        "NextPaymentAmount": {
          "Amount": "1209.06",
          "Currency": "GBP"
        },
        "LastPaymentAmount": {
          "Amount": "1209.06",
          "Currency": "GBP"
        },
        "FinalPaymentAmount": {
          "Amount": "1209.06",
          "Currency": "GBP"
        },
        "CreditorAgent": {
          "SchemeName": "UK.OBIE.BICFI",
          "Identification": "80200112344562",
          "Name": "Agent Name",
          "PostalAddress": {
            "AddressType": "BIZZ",
            "Department": "Finance",
            "SubDepartment": "Payroll",
            "StreetName": "Bank Street",
            "BuildingNumber": "11",
            "BuildingName": "string",
            "Floor": "11",
            "UnitNumber": "A88",
            "Room": "Basement 03",
            "PostBox": "PO Box 123456",
            "TownLocationName": "London",
            "DistrictName": "Greater London",
            "CareOf": "Jane Smith",
            "PostCode": "EC2N 4AG",
            "TownName": "London",
            "CountrySubDivision": "string",
            "Country": "string",
            "AddressLine": [
              "string"
            ]
          },
          "LEI": "IZ9Q00LZEVUKWCQY6X15"
        },
        "CreditorAccount": {
          "SchemeName": "string",
          "Identification": "string",
          "Name": "Jane Smith",
          "SecondaryIdentification": "87562298675897",
          "Proxy": {
            "Identification": "2360549017905188",
            "Code": "TELE",
            "Type": "string"
          }
        },
        "SupplementaryData": {},
        "MandateRelatedInformation": {
          "MandateIdentification": "Golfers",
          "Classification": "FIXE",
          "CategoryPurposeCode": "BONU",
          "FirstPaymentDateTime": "2024-04-25T12:46:49.425Z",
          "RecurringPaymentDateTime": "2024-04-25T12:46:49.425Z",
          "FinalPaymentDateTime": "2024-04-25T12:46:49.425Z",
          "Frequency": {
            "Type": "MNTH",
            "CountPerPeriod": 1,
            "PointInTime": "00"
          },
          "Reason": "To pay monthly membership"
        },
        "RemittanceInformation": {
          "Structured": [
            {
              "ReferredDocumentInformation": [
                {
                  "Code": "AROI",
                  "Issuer": "string",
                  "Number": "string",
                  "RelatedDate": "1970-01-01T00:00:00Z",
                  "LineDetails": [
                    "string"
                  ]
                }
              ],
              "ReferredDocumentAmount": "1209.06",
              "CreditorReferenceInformation": {
                "Code": "DISP",
                "Issuer": "string",
                "Reference": "string"
              },
              "Invoicer": "80200112344562",
              "Invoicee": "80200112344562",
              "TaxRemittance": "string",
              "AdditionalRemittanceInformation": [
                "string"
              ]
            }
          ],
          "Unstructured": [
            "string"
          ]
        }
      }
    ]
  },
  "Links": {
    "Self": "http://example.com",
    "First": "http://example.com",
    "Prev": "http://example.com",
    "Next": "http://example.com",
    "Last": "http://example.com"
  },
  "Meta": {
    "TotalPages": 0,
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Data|object|true|none|none|
|Links|[Links](#schemalinks)|false|none|Links relevant to the payload|
|Meta|[Meta](#schemameta)|false|none|Meta Data relevant to the payload|

<h2 id="tocS_OBReadStatement2">OBReadStatement2</h2>
<!-- backwards compatibility -->
<a id="schemaobreadstatement2"></a>
<a id="schema_OBReadStatement2"></a>
<a id="tocSobreadstatement2"></a>
<a id="tocsobreadstatement2"></a>

```json
{
  "Data": {
    "Statement": [
      {
        "AccountId": "22289",
        "StatementId": "8sfhke-sifhkeuf-97813",
        "StatementReference": "002",
        "Type": "RegularPeriodic",
        "StartDateTime": "2017-07-12T00:00:00+00:00",
        "EndDateTime": "2017-07-12T00:00:00+00:00",
        "CreationDateTime": "2024-05-29T00:00:00Z",
        "StatementDescription": [
          "August 2017 Statement"
        ],
        "StatementBenefit": [
          {
            "Type": "UK.OBIE.Cashback",
            "Amount": {
              "Amount": "1209.06",
              "Currency": "GBP"
            }
          }
        ],
        "StatementFee": [
          {
            "Description": "International usage charge",
            "CreditDebitIndicator": "Credit",
            "Type": "UK.OBIE.Annual",
            "Rate": 0.05,
            "RateType": "UK.OBIE.AER",
            "Frequency": "UK.OBIE.StatementMonthly",
            "Amount": {
              "Amount": "1209.06",
              "Currency": "GBP"
            }
          }
        ],
        "StatementInterest": [
          {
            "Description": "Interest occurred over statement duration",
            "CreditDebitIndicator": "Credit",
            "Type": "UK.OBIE.Total",
            "Rate": 0.05,
            "RateType": "UK.OBIE.FixedRate",
            "Frequency": "UK.OBIE.Monthly",
            "Amount": {
              "Amount": "1209.06",
              "Currency": "GBP"
            }
          }
        ],
        "StatementAmount": [
          {
            "CreditDebitIndicator": "Credit",
            "Type": "UK.OBIE.CreditLimit",
            "Amount": {
              "Amount": "1209.06",
              "Currency": "GBP",
              "SubType": "BCUR"
            },
            "LocalAmount": {
              "Amount": "1209.06",
              "Currency": "GBP",
              "SubType": "LCUR"
            }
          }
        ],
        "StatementDateTime": [
          {
            "DateTime": "2024-05-29T00:00:00Z",
            "Type": "UK.OBIE.NextStatement"
          }
        ],
        "StatementRate": [
          {
            "Rate": "0.224",
            "Type": "UK.OBIE.AnnualCash"
          }
        ],
        "StatementValue": [
          {
            "Value": "string",
            "Type": "UK.OBIE.Credit"
          }
        ],
        "TotalValue": {
          "Amount": "1209.06",
          "Currency": "GBP"
        }
      }
    ]
  },
  "Links": {
    "Self": "http://example.com",
    "First": "http://example.com",
    "Prev": "http://example.com",
    "Next": "http://example.com",
    "Last": "http://example.com"
  },
  "Meta": {
    "TotalPages": 0,
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Data|[OBReadDataStatement2](#schemaobreaddatastatement2)|true|none|none|
|Links|[Links](#schemalinks)|false|none|Links relevant to the payload|
|Meta|[Meta](#schemameta)|false|none|Meta Data relevant to the payload|

<h2 id="tocS_OBReadTransaction6">OBReadTransaction6</h2>
<!-- backwards compatibility -->
<a id="schemaobreadtransaction6"></a>
<a id="schema_OBReadTransaction6"></a>
<a id="tocSobreadtransaction6"></a>
<a id="tocsobreadtransaction6"></a>

```json
{
  "Data": {
    "Transaction": [
      {
        "AccountId": "22289",
        "TransactionId": "string",
        "TransactionReference": "string",
        "StatementReference": [
          "002"
        ],
        "CreditDebitIndicator": "Credit",
        "Status": "BOOK",
        "TransactionMutability": "Mutable",
        "BookingDateTime": "1970-01-01T00:00:00Z",
        "ValueDateTime": "1970-01-01T00:00:00Z",
        "TransactionInformation": "string",
        "AddressLine": "string",
        "Amount": {
          "Amount": "1209.06",
          "Currency": "GBP"
        },
        "ChargeAmount": {
          "Amount": "1209.06",
          "Currency": "GBP"
        },
        "CurrencyExchange": {
          "SourceCurrency": "string",
          "TargetCurrency": "string",
          "UnitCurrency": "string",
          "ExchangeRate": 0,
          "ContractIdentification": "string",
          "QuotationDate": "1970-01-01T00:00:00Z",
          "InstructedAmount": {
            "Amount": "1209.06",
            "Currency": "GBP"
          }
        },
        "BankTransactionCode": {
          "Code": "string",
          "SubCode": "string"
        },
        "ProprietaryBankTransactionCode": {
          "Code": "string",
          "Issuer": "string"
        },
        "ExtendedProprietaryBankTransactionCodes": [
          {
            "Code": "string",
            "Issuer": "string",
            "Description": "string"
          }
        ],
        "Balance": {
          "CreditDebitIndicator": "Credit",
          "Type": "CLAV",
          "Amount": {
            "Amount": "1209.06",
            "Currency": "GBP"
          }
        },
        "MerchantDetails": {
          "MerchantName": "string",
          "MerchantCategoryCode": "stri"
        },
        "CreditorAgent": {
          "SchemeName": "UK.OBIE.BICFI",
          "Identification": "string",
          "Name": "Agent Name",
          "LEI": "IZ9Q00LZEVUKWCQY6X15",
          "PostalAddress": {
            "AddressType": "BIZZ",
            "Department": "Finance",
            "SubDepartment": "Payroll",
            "StreetName": "Bank Street",
            "BuildingNumber": "11",
            "BuildingName": "string",
            "Floor": "11",
            "UnitNumber": "A88",
            "Room": "Basement 03",
            "PostBox": "PO Box 123456",
            "TownLocationName": "London",
            "DistrictName": "Greater London",
            "CareOf": "Jane Smith",
            "PostCode": "EC2N 4AG",
            "TownName": "London",
            "CountrySubDivision": "string",
            "Country": "string",
            "AddressLine": [
              "string"
            ]
          }
        },
        "CreditorAccount": {
          "SchemeName": "string",
          "Identification": "80200112344562",
          "Name": "Jane Smith",
          "SecondaryIdentification": "87562298675897",
          "Proxy": {
            "Identification": "2360549017905188",
            "Code": "TELE",
            "Type": "string"
          }
        },
        "DebtorAgent": {
          "SchemeName": "UK.OBIE.BICFI",
          "Identification": "string",
          "Name": "Agent Name",
          "LEI": "IZ9Q00LZEVUKWCQY6X15",
          "PostalAddress": {
            "AddressType": "BIZZ",
            "Department": "Finance",
            "SubDepartment": "Payroll",
            "StreetName": "Bank Street",
            "BuildingNumber": "11",
            "BuildingName": "string",
            "Floor": "11",
            "UnitNumber": "A88",
            "Room": "Basement 03",
            "PostBox": "PO Box 123456",
            "TownLocationName": "London",
            "DistrictName": "Greater London",
            "CareOf": "Jane Smith",
            "PostCode": "EC2N 4AG",
            "TownName": "London",
            "CountrySubDivision": "string",
            "Country": "string",
            "AddressLine": [
              "string"
            ]
          }
        },
        "DebtorAccount": {
          "SchemeName": "string",
          "Identification": "80200112344562",
          "Name": "Jane Smith",
          "SecondaryIdentification": "87562298675897",
          "Proxy": {
            "Identification": "2360549017905188",
            "Code": "TELE",
            "Type": "string"
          }
        },
        "CardInstrument": {
          "CardSchemeName": "AmericanExpress",
          "AuthorisationType": "ConsumerDevice",
          "Name": "string",
          "Identification": "string"
        },
        "SupplementaryData": {},
        "CategoryPurposeCode": "BONU",
        "PaymentPurposeCode": "BKDF",
        "UltimateCreditor": {
          "Name": "string",
          "Identification": "string",
          "LEI": "IZ9Q00LZEVUKWCQY6X15",
          "SchemeName": "string",
          "PostalAddress": {
            "AddressType": "BIZZ",
            "Department": "Finance",
            "SubDepartment": "Payroll",
            "StreetName": "Bank Street",
            "BuildingNumber": "11",
            "BuildingName": "string",
            "Floor": "11",
            "UnitNumber": "A88",
            "Room": "Basement 03",
            "PostBox": "PO Box 123456",
            "TownLocationName": "London",
            "DistrictName": "Greater London",
            "CareOf": "Jane Smith",
            "PostCode": "EC2N 4AG",
            "TownName": "London",
            "CountrySubDivision": "string",
            "Country": "string",
            "AddressLine": [
              "string"
            ]
          }
        },
        "UltimateDebtor": {
          "Name": "string",
          "Identification": "string",
          "LEI": "IZ9Q00LZEVUKWCQY6X15",
          "SchemeName": "string",
          "PostalAddress": {
            "AddressType": "BIZZ",
            "Department": "Finance",
            "SubDepartment": "Payroll",
            "StreetName": "Bank Street",
            "BuildingNumber": "11",
            "BuildingName": "string",
            "Floor": "11",
            "UnitNumber": "A88",
            "Room": "Basement 03",
            "PostBox": "PO Box 123456",
            "TownLocationName": "London",
            "DistrictName": "Greater London",
            "CareOf": "Jane Smith",
            "PostCode": "EC2N 4AG",
            "TownName": "London",
            "CountrySubDivision": "string",
            "Country": "string",
            "AddressLine": [
              "string"
            ]
          }
        },
        "IntermediaryAgent1": {
          "Name": "string",
          "SchemeName": "string",
          "Identification": "string",
          "LEI": "IZ9Q00LZEVUKWCQY6X15",
          "PostalAddress": {
            "AddressType": "BIZZ",
            "Department": "Finance",
            "SubDepartment": "Payroll",
            "StreetName": "Bank Street",
            "BuildingNumber": "11",
            "BuildingName": "string",
            "Floor": "11",
            "UnitNumber": "A88",
            "Room": "Basement 03",
            "PostBox": "PO Box 123456",
            "TownLocationName": "London",
            "DistrictName": "Greater London",
            "CareOf": "Jane Smith",
            "PostCode": "EC2N 4AG",
            "TownName": "London",
            "CountrySubDivision": "string",
            "Country": "string",
            "AddressLine": [
              "string"
            ]
          },
          "ProcessingStatus": "PDNG"
        },
        "IntermediaryAgent2": {
          "Name": "string",
          "SchemeName": "string",
          "Identification": "string",
          "LEI": "IZ9Q00LZEVUKWCQY6X15",
          "PostalAddress": {
            "AddressType": "BIZZ",
            "Department": "Finance",
            "SubDepartment": "Payroll",
            "StreetName": "Bank Street",
            "BuildingNumber": "11",
            "BuildingName": "string",
            "Floor": "11",
            "UnitNumber": "A88",
            "Room": "Basement 03",
            "PostBox": "PO Box 123456",
            "TownLocationName": "London",
            "DistrictName": "Greater London",
            "CareOf": "Jane Smith",
            "PostCode": "EC2N 4AG",
            "TownName": "London",
            "CountrySubDivision": "string",
            "Country": "string",
            "AddressLine": [
              "string"
            ]
          },
          "ProcessingStatus": "PDNG"
        },
        "IntermediaryAgent3": {
          "Name": "string",
          "SchemeName": "string",
          "Identification": "string",
          "LEI": "IZ9Q00LZEVUKWCQY6X15",
          "PostalAddress": {
            "AddressType": "BIZZ",
            "Department": "Finance",
            "SubDepartment": "Payroll",
            "StreetName": "Bank Street",
            "BuildingNumber": "11",
            "BuildingName": "string",
            "Floor": "11",
            "UnitNumber": "A88",
            "Room": "Basement 03",
            "PostBox": "PO Box 123456",
            "TownLocationName": "London",
            "DistrictName": "Greater London",
            "CareOf": "Jane Smith",
            "PostCode": "EC2N 4AG",
            "TownName": "London",
            "CountrySubDivision": "string",
            "Country": "string",
            "AddressLine": [
              "string"
            ]
          },
          "ProcessingStatus": "PDNG"
        }
      }
    ]
  },
  "Links": {
    "Self": "http://example.com",
    "First": "http://example.com",
    "Prev": "http://example.com",
    "Next": "http://example.com",
    "Last": "http://example.com"
  },
  "Meta": {
    "TotalPages": 0,
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Data|[OBReadDataTransaction6](#schemaobreaddatatransaction6)|true|none|none|
|Links|[Links](#schemalinks)|false|none|Links relevant to the payload|
|Meta|[Meta](#schemameta)|false|none|Meta Data relevant to the payload|

<h2 id="tocS_OBScheduledPayment3">OBScheduledPayment3</h2>
<!-- backwards compatibility -->
<a id="schemaobscheduledpayment3"></a>
<a id="schema_OBScheduledPayment3"></a>
<a id="tocSobscheduledpayment3"></a>
<a id="tocsobscheduledpayment3"></a>

```json
{
  "AccountId": "22289",
  "ScheduledPaymentId": "SP03",
  "ScheduledPaymentDateTime": "2017-07-12T00:00:00+00:00",
  "ScheduledType": "Arrival",
  "Reference": "Towbar Club",
  "DebtorReference": "REF51561806",
  "InstructedAmount": {
    "Amount": "1209.06",
    "Currency": "GBP"
  },
  "CreditorAgent": {
    "SchemeName": "UK.OBIE.BICFI",
    "Identification": "80200112344562",
    "Name": "Agent Name",
    "PostalAddress": {
      "AddressType": "BIZZ",
      "Department": "Finance",
      "SubDepartment": "Payroll",
      "StreetName": "Bank Street",
      "BuildingNumber": "11",
      "BuildingName": "string",
      "Floor": "11",
      "UnitNumber": "A88",
      "Room": "Basement 03",
      "PostBox": "PO Box 123456",
      "TownLocationName": "London",
      "DistrictName": "Greater London",
      "CareOf": "Jane Smith",
      "PostCode": "EC2N 4AG",
      "TownName": "London",
      "CountrySubDivision": "string",
      "Country": "string",
      "AddressLine": [
        "string"
      ]
    },
    "LEI": "IZ9Q00LZEVUKWCQY6X15"
  },
  "CreditorAccount": {
    "SchemeName": "string",
    "Identification": "string",
    "Name": "Jane Smith",
    "SecondaryIdentification": "87562298675897",
    "Proxy": {
      "Identification": "2360549017905188",
      "Code": "TELE",
      "Type": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|[AccountId](#schemaaccountid)|true|none|A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.|
|ScheduledPaymentId|[ScheduledPaymentId](#schemascheduledpaymentid)|false|none|A unique and immutable identifier used to identify the scheduled payment resource. This identifier has no meaning to the account owner.|
|ScheduledPaymentDateTime|[ScheduledPaymentDateTime](#schemascheduledpaymentdatetime)|true|none|The date on which the scheduled payment will be made. All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|ScheduledType|[OBInternalScheduleType1Code](#schemaobinternalscheduletype1code)|true|none|Specifies the scheduled payment date type requested. For a full list of enumeration values refer to `OBInternalScheduleType1Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)|
|Reference|[Reference](#schemareference)|false|none|Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.<br>Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.<br>If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.|
|DebtorReference|[DebtorReference](#schemadebtorreference)|false|none|A reference value provided by the PSU to the PISP while setting up the scheduled payment.|
|InstructedAmount|[OBActiveOrHistoricCurrencyAndAmount_1](#schemaobactiveorhistoriccurrencyandamount_1)|true|none|Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.<br>Usage: This amount has to be transported unchanged through the transaction chain.|
|CreditorAgent|[OBBranchAndFinancialInstitutionIdentification5_1](#schemaobbranchandfinancialinstitutionidentification5_1)|false|none|Party that manages the account on behalf of the account owner, that is manages the registration and booking of entries on the account, calculates balances on the account and provides information about the account.<br>This is the servicer of the beneficiary account.|
|CreditorAccount|[OBCashAccount5_1](#schemaobcashaccount5_1)|false|none|Provides the details to identify the beneficiary account.|

#### Enumerated Values

|Property|Value|
|---|---|
|ScheduledType|Arrival|
|ScheduledType|Execution|

<h2 id="tocS_OBScheduledPayment3Basic">OBScheduledPayment3Basic</h2>
<!-- backwards compatibility -->
<a id="schemaobscheduledpayment3basic"></a>
<a id="schema_OBScheduledPayment3Basic"></a>
<a id="tocSobscheduledpayment3basic"></a>
<a id="tocsobscheduledpayment3basic"></a>

```json
{
  "AccountId": "22289",
  "ScheduledPaymentId": "SP03",
  "ScheduledPaymentDateTime": "2017-07-12T00:00:00+00:00",
  "ScheduledType": "Arrival",
  "Reference": "Towbar Club",
  "DebtorReference": "REF51561806",
  "InstructedAmount": {
    "Amount": "1209.06",
    "Currency": "GBP"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|[AccountId](#schemaaccountid)|true|none|A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.|
|ScheduledPaymentId|[ScheduledPaymentId](#schemascheduledpaymentid)|false|none|A unique and immutable identifier used to identify the scheduled payment resource. This identifier has no meaning to the account owner.|
|ScheduledPaymentDateTime|[ScheduledPaymentDateTime](#schemascheduledpaymentdatetime)|true|none|The date on which the scheduled payment will be made. All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|ScheduledType|[OBInternalScheduleType1Code](#schemaobinternalscheduletype1code)|true|none|Specifies the scheduled payment date type requested. For a full list of enumeration values refer to `OBInternalScheduleType1Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)|
|Reference|[Reference](#schemareference)|false|none|Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.<br>Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.<br>If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.|
|DebtorReference|[DebtorReference](#schemadebtorreference)|false|none|A reference value provided by the PSU to the PISP while setting up the scheduled payment.|
|InstructedAmount|[OBActiveOrHistoricCurrencyAndAmount_1](#schemaobactiveorhistoriccurrencyandamount_1)|true|none|Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.<br>Usage: This amount has to be transported unchanged through the transaction chain.|

#### Enumerated Values

|Property|Value|
|---|---|
|ScheduledType|Arrival|
|ScheduledType|Execution|

<h2 id="tocS_OBScheduledPayment3Detail">OBScheduledPayment3Detail</h2>
<!-- backwards compatibility -->
<a id="schemaobscheduledpayment3detail"></a>
<a id="schema_OBScheduledPayment3Detail"></a>
<a id="tocSobscheduledpayment3detail"></a>
<a id="tocsobscheduledpayment3detail"></a>

```json
{
  "AccountId": "22289",
  "ScheduledPaymentId": "SP03",
  "ScheduledPaymentDateTime": "2017-07-12T00:00:00+00:00",
  "ScheduledType": "Arrival",
  "Reference": "Towbar Club",
  "DebtorReference": "REF51561806",
  "InstructedAmount": {
    "Amount": "1209.06",
    "Currency": "GBP"
  },
  "CreditorAgent": {
    "SchemeName": "UK.OBIE.BICFI",
    "Identification": "80200112344562",
    "Name": "Agent Name",
    "PostalAddress": {
      "AddressType": "BIZZ",
      "Department": "Finance",
      "SubDepartment": "Payroll",
      "StreetName": "Bank Street",
      "BuildingNumber": "11",
      "BuildingName": "string",
      "Floor": "11",
      "UnitNumber": "A88",
      "Room": "Basement 03",
      "PostBox": "PO Box 123456",
      "TownLocationName": "London",
      "DistrictName": "Greater London",
      "CareOf": "Jane Smith",
      "PostCode": "EC2N 4AG",
      "TownName": "London",
      "CountrySubDivision": "string",
      "Country": "string",
      "AddressLine": [
        "string"
      ]
    },
    "LEI": "IZ9Q00LZEVUKWCQY6X15"
  },
  "CreditorAccount": {
    "SchemeName": "string",
    "Identification": "string",
    "Name": "Jane Smith",
    "SecondaryIdentification": "87562298675897",
    "Proxy": {
      "Identification": "2360549017905188",
      "Code": "TELE",
      "Type": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|[AccountId](#schemaaccountid)|true|none|A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.|
|ScheduledPaymentId|[ScheduledPaymentId](#schemascheduledpaymentid)|false|none|A unique and immutable identifier used to identify the scheduled payment resource. This identifier has no meaning to the account owner.|
|ScheduledPaymentDateTime|[ScheduledPaymentDateTime](#schemascheduledpaymentdatetime)|true|none|The date on which the scheduled payment will be made. All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|ScheduledType|[OBInternalScheduleType1Code](#schemaobinternalscheduletype1code)|true|none|Specifies the scheduled payment date type requested. For a full list of enumeration values refer to `OBInternalScheduleType1Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)|
|Reference|[Reference](#schemareference)|false|none|Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.<br>Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.<br>If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.|
|DebtorReference|[DebtorReference](#schemadebtorreference)|false|none|A reference value provided by the PSU to the PISP while setting up the scheduled payment.|
|InstructedAmount|[OBActiveOrHistoricCurrencyAndAmount_1](#schemaobactiveorhistoriccurrencyandamount_1)|true|none|Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.<br>Usage: This amount has to be transported unchanged through the transaction chain.|
|CreditorAgent|[OBBranchAndFinancialInstitutionIdentification5_1](#schemaobbranchandfinancialinstitutionidentification5_1)|false|none|Party that manages the account on behalf of the account owner, that is manages the registration and booking of entries on the account, calculates balances on the account and provides information about the account.<br>This is the servicer of the beneficiary account.|
|CreditorAccount|[OBCashAccount5_1](#schemaobcashaccount5_1)|true|none|Provides the details to identify the beneficiary account.|

#### Enumerated Values

|Property|Value|
|---|---|
|ScheduledType|Arrival|
|ScheduledType|Execution|

<h2 id="tocS_OBStandingOrder6">OBStandingOrder6</h2>
<!-- backwards compatibility -->
<a id="schemaobstandingorder6"></a>
<a id="schema_OBStandingOrder6"></a>
<a id="tocSobstandingorder6"></a>
<a id="tocsobstandingorder6"></a>

```json
{
  "AccountId": "22289",
  "StandingOrderId": "Ben5",
  "NextPaymentDateTime": "2017-07-12T00:00:00+00:00",
  "LastPaymentDateTime": "2017-07-12T00:00:00+00:00",
  "NumberOfPayments": "string",
  "StandingOrderStatusCode": "ACTV",
  "FirstPaymentAmount": {
    "Amount": "1209.06",
    "Currency": "GBP"
  },
  "NextPaymentAmount": {
    "Amount": "1209.06",
    "Currency": "GBP"
  },
  "LastPaymentAmount": {
    "Amount": "1209.06",
    "Currency": "GBP"
  },
  "FinalPaymentAmount": {
    "Amount": "1209.06",
    "Currency": "GBP"
  },
  "CreditorAgent": {
    "SchemeName": "UK.OBIE.BICFI",
    "Identification": "80200112344562",
    "Name": "Agent Name",
    "PostalAddress": {
      "AddressType": "BIZZ",
      "Department": "Finance",
      "SubDepartment": "Payroll",
      "StreetName": "Bank Street",
      "BuildingNumber": "11",
      "BuildingName": "string",
      "Floor": "11",
      "UnitNumber": "A88",
      "Room": "Basement 03",
      "PostBox": "PO Box 123456",
      "TownLocationName": "London",
      "DistrictName": "Greater London",
      "CareOf": "Jane Smith",
      "PostCode": "EC2N 4AG",
      "TownName": "London",
      "CountrySubDivision": "string",
      "Country": "string",
      "AddressLine": [
        "string"
      ]
    },
    "LEI": "IZ9Q00LZEVUKWCQY6X15"
  },
  "CreditorAccount": {
    "SchemeName": "string",
    "Identification": "string",
    "Name": "Jane Smith",
    "SecondaryIdentification": "87562298675897",
    "Proxy": {
      "Identification": "2360549017905188",
      "Code": "TELE",
      "Type": "string"
    }
  },
  "SupplementaryData": {},
  "MandateRelatedInformation": {
    "MandateIdentification": "Golfers",
    "Classification": "FIXE",
    "CategoryPurposeCode": "BONU",
    "FirstPaymentDateTime": "2024-04-25T12:46:49.425Z",
    "RecurringPaymentDateTime": "2024-04-25T12:46:49.425Z",
    "FinalPaymentDateTime": "2024-04-25T12:46:49.425Z",
    "Frequency": {
      "Type": "MNTH",
      "CountPerPeriod": 1,
      "PointInTime": "00"
    },
    "Reason": "To pay monthly membership"
  },
  "RemittanceInformation": {
    "Structured": [
      {
        "ReferredDocumentInformation": [
          {
            "Code": "AROI",
            "Issuer": "string",
            "Number": "string",
            "RelatedDate": "1970-01-01T00:00:00Z",
            "LineDetails": [
              "string"
            ]
          }
        ],
        "ReferredDocumentAmount": "1209.06",
        "CreditorReferenceInformation": {
          "Code": "DISP",
          "Issuer": "string",
          "Reference": "string"
        },
        "Invoicer": "80200112344562",
        "Invoicee": "80200112344562",
        "TaxRemittance": "string",
        "AdditionalRemittanceInformation": [
          "string"
        ]
      }
    ],
    "Unstructured": [
      "string"
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|[AccountId](#schemaaccountid)|true|none|A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.|
|StandingOrderId|[StandingOrderId](#schemastandingorderid)|false|none|A unique and immutable identifier used to identify the standing order resource. This identifier has no meaning to the account owner.|
|NextPaymentDateTime|[NextPaymentDateTime](#schemanextpaymentdatetime)|false|none|The date on which the next payment for a Standing Order schedule will be made. All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|LastPaymentDateTime|[LastPaymentDateTime](#schemalastpaymentdatetime)|false|none|The date on which the last (most recent) payment for a Standing Order schedule was made. All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|NumberOfPayments|[NumberOfPayments](#schemanumberofpayments)|false|none|Number of the payments that will be made in completing this frequency sequence including any executed since the sequence start date.|
|StandingOrderStatusCode|[ExternalMandateStatus1Code](#schemaexternalmandatestatus1code)|false|none|Specifies the status of the standing order in code form. For a full list of enumeration values refer to 'ExternalMandateStatus1Code' in *ISO_External_Codeset* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)|
|FirstPaymentAmount|[OBActiveOrHistoricCurrencyAndAmount_2](#schemaobactiveorhistoriccurrencyandamount_2)|false|none|The amount of the first Standing Order|
|NextPaymentAmount|[OBActiveOrHistoricCurrencyAndAmount_3](#schemaobactiveorhistoriccurrencyandamount_3)|false|none|The amount of the next Standing Order.|
|LastPaymentAmount|[OBActiveOrHistoricCurrencyAndAmount_11](#schemaobactiveorhistoriccurrencyandamount_11)|false|none|The amount of the last (most recent) Standing Order instruction.|
|FinalPaymentAmount|[OBActiveOrHistoricCurrencyAndAmount_4](#schemaobactiveorhistoriccurrencyandamount_4)|false|none|The amount of the final Standing Order|
|CreditorAgent|[OBBranchAndFinancialInstitutionIdentification5_1](#schemaobbranchandfinancialinstitutionidentification5_1)|false|none|Party that manages the account on behalf of the account owner, that is manages the registration and booking of entries on the account, calculates balances on the account and provides information about the account.<br>This is the servicer of the beneficiary account.|
|CreditorAccount|[OBCashAccount5_1](#schemaobcashaccount5_1)|false|none|Provides the details to identify the beneficiary account.|
|SupplementaryData|[OBSupplementaryData1](#schemaobsupplementarydata1)|false|none|Additional information that can not be captured in the structured fields and/or any other specific block.|
|MandateRelatedInformation|[OBMandateRelatedInformation1](#schemaobmandaterelatedinformation1)|false|none|Provides further details of the mandate signed between the creditor and the debtor.|
|RemittanceInformation|[OBRemittanceInformation2](#schemaobremittanceinformation2)|false|none|Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system|

#### Enumerated Values

|Property|Value|
|---|---|
|StandingOrderStatusCode|ACTV|
|StandingOrderStatusCode|CANC|
|StandingOrderStatusCode|EXPI|
|StandingOrderStatusCode|SUSP|

<h2 id="tocS_OBStandingOrder6Basic">OBStandingOrder6Basic</h2>
<!-- backwards compatibility -->
<a id="schemaobstandingorder6basic"></a>
<a id="schema_OBStandingOrder6Basic"></a>
<a id="tocSobstandingorder6basic"></a>
<a id="tocsobstandingorder6basic"></a>

```json
{
  "AccountId": "22289",
  "StandingOrderId": "Ben5",
  "NextPaymentDateTime": "2017-07-12T00:00:00+00:00",
  "LastPaymentDateTime": "2017-07-12T00:00:00+00:00",
  "NumberOfPayments": "string",
  "StandingOrderStatusCode": "ACTV",
  "FirstPaymentAmount": {
    "Amount": "1209.06",
    "Currency": "GBP"
  },
  "NextPaymentAmount": {
    "Amount": "1209.06",
    "Currency": "GBP"
  },
  "LastPaymentAmount": {
    "Amount": "1209.06",
    "Currency": "GBP"
  },
  "FinalPaymentAmount": {
    "Amount": "1209.06",
    "Currency": "GBP"
  },
  "SupplementaryData": {},
  "MandateRelatedInformation": {
    "MandateIdentification": "Golfers",
    "Classification": "FIXE",
    "CategoryPurposeCode": "BONU",
    "FirstPaymentDateTime": "2024-04-25T12:46:49.425Z",
    "RecurringPaymentDateTime": "2024-04-25T12:46:49.425Z",
    "FinalPaymentDateTime": "2024-04-25T12:46:49.425Z",
    "Frequency": {
      "Type": "MNTH",
      "CountPerPeriod": 1,
      "PointInTime": "00"
    },
    "Reason": "To pay monthly membership"
  },
  "RemittanceInformation": {
    "Structured": [
      {
        "ReferredDocumentInformation": [
          {
            "Code": "AROI",
            "Issuer": "string",
            "Number": "string",
            "RelatedDate": "1970-01-01T00:00:00Z",
            "LineDetails": [
              "string"
            ]
          }
        ],
        "ReferredDocumentAmount": "1209.06",
        "CreditorReferenceInformation": {
          "Code": "DISP",
          "Issuer": "string",
          "Reference": "string"
        },
        "Invoicer": "80200112344562",
        "Invoicee": "80200112344562",
        "TaxRemittance": "string",
        "AdditionalRemittanceInformation": [
          "string"
        ]
      }
    ],
    "Unstructured": [
      "string"
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|[AccountId](#schemaaccountid)|true|none|A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.|
|StandingOrderId|[StandingOrderId](#schemastandingorderid)|false|none|A unique and immutable identifier used to identify the standing order resource. This identifier has no meaning to the account owner.|
|NextPaymentDateTime|[NextPaymentDateTime](#schemanextpaymentdatetime)|false|none|The date on which the next payment for a Standing Order schedule will be made. All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|LastPaymentDateTime|[LastPaymentDateTime](#schemalastpaymentdatetime)|false|none|The date on which the last (most recent) payment for a Standing Order schedule was made. All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|NumberOfPayments|[NumberOfPayments](#schemanumberofpayments)|false|none|Number of the payments that will be made in completing this frequency sequence including any executed since the sequence start date.|
|StandingOrderStatusCode|[ExternalMandateStatus1Code](#schemaexternalmandatestatus1code)|false|none|Specifies the status of the standing order in code form. For a full list of enumeration values refer to 'ExternalMandateStatus1Code' in *ISO_External_Codeset* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)|
|FirstPaymentAmount|[OBActiveOrHistoricCurrencyAndAmount_2](#schemaobactiveorhistoriccurrencyandamount_2)|false|none|The amount of the first Standing Order|
|NextPaymentAmount|[OBActiveOrHistoricCurrencyAndAmount_3](#schemaobactiveorhistoriccurrencyandamount_3)|false|none|The amount of the next Standing Order.|
|LastPaymentAmount|[OBActiveOrHistoricCurrencyAndAmount_11](#schemaobactiveorhistoriccurrencyandamount_11)|false|none|The amount of the last (most recent) Standing Order instruction.|
|FinalPaymentAmount|[OBActiveOrHistoricCurrencyAndAmount_4](#schemaobactiveorhistoriccurrencyandamount_4)|false|none|The amount of the final Standing Order|
|SupplementaryData|[OBSupplementaryData1](#schemaobsupplementarydata1)|false|none|Additional information that can not be captured in the structured fields and/or any other specific block.|
|MandateRelatedInformation|[OBMandateRelatedInformation1](#schemaobmandaterelatedinformation1)|false|none|Provides further details of the mandate signed between the creditor and the debtor.|
|RemittanceInformation|[OBRemittanceInformation2](#schemaobremittanceinformation2)|false|none|Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system|

#### Enumerated Values

|Property|Value|
|---|---|
|StandingOrderStatusCode|ACTV|
|StandingOrderStatusCode|CANC|
|StandingOrderStatusCode|EXPI|
|StandingOrderStatusCode|SUSP|

<h2 id="tocS_OBStandingOrder6Detail">OBStandingOrder6Detail</h2>
<!-- backwards compatibility -->
<a id="schemaobstandingorder6detail"></a>
<a id="schema_OBStandingOrder6Detail"></a>
<a id="tocSobstandingorder6detail"></a>
<a id="tocsobstandingorder6detail"></a>

```json
{
  "AccountId": "22289",
  "StandingOrderId": "Ben5",
  "NextPaymentDateTime": "2017-07-12T00:00:00+00:00",
  "LastPaymentDateTime": "2017-07-12T00:00:00+00:00",
  "NumberOfPayments": "string",
  "StandingOrderStatusCode": "ACTV",
  "FirstPaymentAmount": {
    "Amount": "1209.06",
    "Currency": "GBP"
  },
  "NextPaymentAmount": {
    "Amount": "1209.06",
    "Currency": "GBP"
  },
  "LastPaymentAmount": {
    "Amount": "1209.06",
    "Currency": "GBP"
  },
  "FinalPaymentAmount": {
    "Amount": "1209.06",
    "Currency": "GBP"
  },
  "CreditorAgent": {
    "SchemeName": "UK.OBIE.BICFI",
    "Identification": "80200112344562",
    "Name": "Agent Name",
    "PostalAddress": {
      "AddressType": "BIZZ",
      "Department": "Finance",
      "SubDepartment": "Payroll",
      "StreetName": "Bank Street",
      "BuildingNumber": "11",
      "BuildingName": "string",
      "Floor": "11",
      "UnitNumber": "A88",
      "Room": "Basement 03",
      "PostBox": "PO Box 123456",
      "TownLocationName": "London",
      "DistrictName": "Greater London",
      "CareOf": "Jane Smith",
      "PostCode": "EC2N 4AG",
      "TownName": "London",
      "CountrySubDivision": "string",
      "Country": "string",
      "AddressLine": [
        "string"
      ]
    },
    "LEI": "IZ9Q00LZEVUKWCQY6X15"
  },
  "CreditorAccount": {
    "SchemeName": "string",
    "Identification": "string",
    "Name": "Jane Smith",
    "SecondaryIdentification": "87562298675897",
    "Proxy": {
      "Identification": "2360549017905188",
      "Code": "TELE",
      "Type": "string"
    }
  },
  "SupplementaryData": {},
  "MandateRelatedInformation": {
    "MandateIdentification": "Golfers",
    "Classification": "FIXE",
    "CategoryPurposeCode": "BONU",
    "FirstPaymentDateTime": "2024-04-25T12:46:49.425Z",
    "RecurringPaymentDateTime": "2024-04-25T12:46:49.425Z",
    "FinalPaymentDateTime": "2024-04-25T12:46:49.425Z",
    "Frequency": {
      "Type": "MNTH",
      "CountPerPeriod": 1,
      "PointInTime": "00"
    },
    "Reason": "To pay monthly membership"
  },
  "RemittanceInformation": {
    "Structured": [
      {
        "ReferredDocumentInformation": [
          {
            "Code": "AROI",
            "Issuer": "string",
            "Number": "string",
            "RelatedDate": "1970-01-01T00:00:00Z",
            "LineDetails": [
              "string"
            ]
          }
        ],
        "ReferredDocumentAmount": "1209.06",
        "CreditorReferenceInformation": {
          "Code": "DISP",
          "Issuer": "string",
          "Reference": "string"
        },
        "Invoicer": "80200112344562",
        "Invoicee": "80200112344562",
        "TaxRemittance": "string",
        "AdditionalRemittanceInformation": [
          "string"
        ]
      }
    ],
    "Unstructured": [
      "string"
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|[AccountId](#schemaaccountid)|true|none|A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.|
|StandingOrderId|[StandingOrderId](#schemastandingorderid)|false|none|A unique and immutable identifier used to identify the standing order resource. This identifier has no meaning to the account owner.|
|NextPaymentDateTime|[NextPaymentDateTime](#schemanextpaymentdatetime)|false|none|The date on which the next payment for a Standing Order schedule will be made. All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|LastPaymentDateTime|[LastPaymentDateTime](#schemalastpaymentdatetime)|false|none|The date on which the last (most recent) payment for a Standing Order schedule was made. All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|NumberOfPayments|[NumberOfPayments](#schemanumberofpayments)|false|none|Number of the payments that will be made in completing this frequency sequence including any executed since the sequence start date.|
|StandingOrderStatusCode|[ExternalMandateStatus1Code](#schemaexternalmandatestatus1code)|false|none|Specifies the status of the standing order in code form. For a full list of enumeration values refer to 'ExternalMandateStatus1Code' in *ISO_External_Codeset* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)|
|FirstPaymentAmount|[OBActiveOrHistoricCurrencyAndAmount_2](#schemaobactiveorhistoriccurrencyandamount_2)|false|none|The amount of the first Standing Order|
|NextPaymentAmount|[OBActiveOrHistoricCurrencyAndAmount_3](#schemaobactiveorhistoriccurrencyandamount_3)|false|none|The amount of the next Standing Order.|
|LastPaymentAmount|[OBActiveOrHistoricCurrencyAndAmount_11](#schemaobactiveorhistoriccurrencyandamount_11)|false|none|The amount of the last (most recent) Standing Order instruction.|
|FinalPaymentAmount|[OBActiveOrHistoricCurrencyAndAmount_4](#schemaobactiveorhistoriccurrencyandamount_4)|false|none|The amount of the final Standing Order|
|CreditorAgent|[OBBranchAndFinancialInstitutionIdentification5_1](#schemaobbranchandfinancialinstitutionidentification5_1)|false|none|Party that manages the account on behalf of the account owner, that is manages the registration and booking of entries on the account, calculates balances on the account and provides information about the account.<br>This is the servicer of the beneficiary account.|
|CreditorAccount|[OBCashAccount5_1](#schemaobcashaccount5_1)|true|none|Provides the details to identify the beneficiary account.|
|SupplementaryData|[OBSupplementaryData1](#schemaobsupplementarydata1)|false|none|Additional information that can not be captured in the structured fields and/or any other specific block.|
|MandateRelatedInformation|[OBMandateRelatedInformation1](#schemaobmandaterelatedinformation1)|false|none|Provides further details of the mandate signed between the creditor and the debtor.|
|RemittanceInformation|[OBRemittanceInformation2](#schemaobremittanceinformation2)|false|none|Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system|

#### Enumerated Values

|Property|Value|
|---|---|
|StandingOrderStatusCode|ACTV|
|StandingOrderStatusCode|CANC|
|StandingOrderStatusCode|EXPI|
|StandingOrderStatusCode|SUSP|

<h2 id="tocS_OBStatement2">OBStatement2</h2>
<!-- backwards compatibility -->
<a id="schemaobstatement2"></a>
<a id="schema_OBStatement2"></a>
<a id="tocSobstatement2"></a>
<a id="tocsobstatement2"></a>

```json
{
  "AccountId": "22289",
  "StatementId": "8sfhke-sifhkeuf-97813",
  "StatementReference": "002",
  "Type": "RegularPeriodic",
  "StartDateTime": "2017-07-12T00:00:00+00:00",
  "EndDateTime": "2017-07-12T00:00:00+00:00",
  "CreationDateTime": "2024-05-29T00:00:00Z",
  "StatementDescription": [
    "August 2017 Statement"
  ],
  "StatementBenefit": [
    {
      "Type": "UK.OBIE.Cashback",
      "Amount": {
        "Amount": "1209.06",
        "Currency": "GBP"
      }
    }
  ],
  "StatementFee": [
    {
      "Description": "International usage charge",
      "CreditDebitIndicator": "Credit",
      "Type": "UK.OBIE.Annual",
      "Rate": 0.05,
      "RateType": "UK.OBIE.AER",
      "Frequency": "UK.OBIE.StatementMonthly",
      "Amount": {
        "Amount": "1209.06",
        "Currency": "GBP"
      }
    }
  ],
  "StatementInterest": [
    {
      "Description": "Interest occurred over statement duration",
      "CreditDebitIndicator": "Credit",
      "Type": "UK.OBIE.Total",
      "Rate": 0.05,
      "RateType": "UK.OBIE.FixedRate",
      "Frequency": "UK.OBIE.Monthly",
      "Amount": {
        "Amount": "1209.06",
        "Currency": "GBP"
      }
    }
  ],
  "StatementAmount": [
    {
      "CreditDebitIndicator": "Credit",
      "Type": "UK.OBIE.CreditLimit",
      "Amount": {
        "Amount": "1209.06",
        "Currency": "GBP",
        "SubType": "BCUR"
      },
      "LocalAmount": {
        "Amount": "1209.06",
        "Currency": "GBP",
        "SubType": "LCUR"
      }
    }
  ],
  "StatementDateTime": [
    {
      "DateTime": "2024-05-29T00:00:00Z",
      "Type": "UK.OBIE.NextStatement"
    }
  ],
  "StatementRate": [
    {
      "Rate": "0.224",
      "Type": "UK.OBIE.AnnualCash"
    }
  ],
  "StatementValue": [
    {
      "Value": "string",
      "Type": "UK.OBIE.Credit"
    }
  ],
  "TotalValue": {
    "Amount": "1209.06",
    "Currency": "GBP"
  }
}
```

Provides further details on a statement resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|[AccountId](#schemaaccountid)|true|none|A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.|
|StatementId|[StatementId](#schemastatementid)|false|none|Unique identifier for the statement resource within a servicing institution. This identifier is both unique and immutable.|
|StatementReference|[StatementReference](#schemastatementreference)|false|none|Unique reference for the statement. This reference may be optionally populated if available.|
|Type|[OBInternalStatementType1Code](#schemaobinternalstatementtype1code)|true|none|Statement type, in a coded form. For a full list of values see `OBInternalStatementType1Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)|
|StartDateTime|[StartDateTime](#schemastartdatetime)|true|none|Date and time at which the statement period starts. All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|EndDateTime|[EndDateTime](#schemaenddatetime)|true|none|Date and time at which the statement period ends. All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|CreationDateTime|[CreationDateTime](#schemacreationdatetime)|true|none|Date and time at which the resource was created. All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|StatementDescription|[string]|false|none|none|
|StatementBenefit|[object]|false|none|none|
|StatementFee|[object]|false|none|none|
|StatementInterest|[object]|false|none|none|
|StatementAmount|[object]|false|none|none|
|StatementDateTime|[object]|false|none|none|
|StatementRate|[object]|false|none|none|
|StatementValue|[object]|false|none|none|
|TotalValue|object|false|none|Combined sum of all Amounts in the accounts base currency|

#### Enumerated Values

|Property|Value|
|---|---|
|Type|AccountClosure|
|Type|AccountOpening|
|Type|Annual|
|Type|Interim|
|Type|RegularPeriodic|

<h2 id="tocS_OBStatement2Basic">OBStatement2Basic</h2>
<!-- backwards compatibility -->
<a id="schemaobstatement2basic"></a>
<a id="schema_OBStatement2Basic"></a>
<a id="tocSobstatement2basic"></a>
<a id="tocsobstatement2basic"></a>

```json
{
  "AccountId": "22289",
  "StatementId": "8sfhke-sifhkeuf-97813",
  "StatementReference": "002",
  "Type": "RegularPeriodic",
  "StartDateTime": "2017-07-12T00:00:00+00:00",
  "EndDateTime": "2017-07-12T00:00:00+00:00",
  "CreationDateTime": "2024-05-29T00:00:00Z",
  "StatementDescription": [
    "string"
  ],
  "StatementBenefit": [
    {
      "Type": "UK.OBIE.Cashback",
      "Amount": {
        "Amount": "1209.06",
        "Currency": "GBP"
      }
    }
  ],
  "StatementFee": [
    {
      "Description": "International usage charge",
      "CreditDebitIndicator": "Credit",
      "Type": "UK.OBIE.Annual",
      "Rate": 0.05,
      "RateType": "UK.OBIE.AER",
      "Frequency": "UK.OBIE.StatementMonthly",
      "Amount": {
        "Amount": "1209.06",
        "Currency": "GBP"
      }
    }
  ],
  "StatementInterest": [
    {
      "Description": "Interest occurred over statement duration",
      "CreditDebitIndicator": "Credit",
      "Type": "UK.OBIE.Total",
      "Rate": 0.05,
      "RateType": "UK.OBIE.FixedRate",
      "Frequency": "UK.OBIE.Monthly",
      "Amount": {
        "Amount": "1209.06",
        "Currency": "GBP"
      }
    }
  ],
  "StatementDateTime": [
    {
      "DateTime": "2024-05-29T00:00:00Z",
      "Type": "UK.OBIE.NextStatement"
    }
  ],
  "StatementRate": [
    {
      "Rate": "0.224",
      "Type": "UK.OBIE.AnnualCash"
    }
  ],
  "StatementValue": [
    {
      "Value": "string",
      "Type": "UK.OBIE.Credit"
    }
  ],
  "TotalValue": {
    "Amount": "1209.06",
    "Currency": "GBP"
  }
}
```

Provides further details on a statement resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|[AccountId](#schemaaccountid)|true|none|A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.|
|StatementId|[StatementId](#schemastatementid)|false|none|Unique identifier for the statement resource within a servicing institution. This identifier is both unique and immutable.|
|StatementReference|[StatementReference](#schemastatementreference)|false|none|Unique reference for the statement. This reference may be optionally populated if available.|
|Type|[OBInternalStatementType1Code](#schemaobinternalstatementtype1code)|true|none|Statement type, in a coded form. For a full list of values see `OBInternalStatementType1Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)|
|StartDateTime|[StartDateTime](#schemastartdatetime)|true|none|Date and time at which the statement period starts. All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|EndDateTime|[EndDateTime](#schemaenddatetime)|true|none|Date and time at which the statement period ends. All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|CreationDateTime|[CreationDateTime](#schemacreationdatetime)|true|none|Date and time at which the resource was created. All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|StatementDescription|[string]|false|none|none|
|StatementBenefit|[object]|false|none|none|
|StatementFee|[object]|false|none|none|
|StatementInterest|[object]|false|none|none|
|StatementDateTime|[object]|false|none|none|
|StatementRate|[object]|false|none|none|
|StatementValue|[object]|false|none|none|
|TotalValue|object|false|none|Combined sum of all Amounts in the accounts base currency|

#### Enumerated Values

|Property|Value|
|---|---|
|Type|AccountClosure|
|Type|AccountOpening|
|Type|Annual|
|Type|Interim|
|Type|RegularPeriodic|

<h2 id="tocS_OBStatement2Detail">OBStatement2Detail</h2>
<!-- backwards compatibility -->
<a id="schemaobstatement2detail"></a>
<a id="schema_OBStatement2Detail"></a>
<a id="tocSobstatement2detail"></a>
<a id="tocsobstatement2detail"></a>

```json
{
  "AccountId": "22289",
  "StatementId": "8sfhke-sifhkeuf-97813",
  "StatementReference": "002",
  "Type": "RegularPeriodic",
  "StartDateTime": "2017-07-12T00:00:00+00:00",
  "EndDateTime": "2017-07-12T00:00:00+00:00",
  "CreationDateTime": "2024-05-29T00:00:00Z",
  "StatementDescription": [
    "string"
  ],
  "StatementBenefit": [
    {
      "Type": "UK.OBIE.Cashback",
      "Amount": {
        "Amount": "1209.06",
        "Currency": "GBP"
      }
    }
  ],
  "StatementFee": [
    {
      "Description": "International usage charge",
      "CreditDebitIndicator": "Credit",
      "Type": "UK.OBIE.Annual",
      "Rate": 0.05,
      "RateType": "UK.OBIE.AER",
      "Frequency": "UK.OBIE.StatementMonthly",
      "Amount": {
        "Amount": "1209.06",
        "Currency": "GBP"
      }
    }
  ],
  "StatementInterest": [
    {
      "Description": "Interest occurred over statement duration",
      "CreditDebitIndicator": "Credit",
      "Type": "UK.OBIE.Total",
      "Rate": 0.05,
      "RateType": "UK.OBIE.FixedRate",
      "Frequency": "UK.OBIE.Monthly",
      "Amount": {
        "Amount": "1209.06",
        "Currency": "GBP"
      }
    }
  ],
  "StatementAmount": [
    {
      "CreditDebitIndicator": "Credit",
      "Type": "UK.OBIE.CreditLimit",
      "Amount": {
        "Amount": "1209.06",
        "Currency": "GBP",
        "SubType": "BCUR"
      },
      "LocalAmount": {
        "Amount": "1209.06",
        "Currency": "GBP",
        "SubType": "LCUR"
      }
    }
  ],
  "StatementDateTime": [
    {
      "DateTime": "2024-05-29T00:00:00Z",
      "Type": "UK.OBIE.NextStatement"
    }
  ],
  "StatementRate": [
    {
      "Rate": "0.224",
      "Type": "UK.OBIE.AnnualCash"
    }
  ],
  "StatementValue": [
    {
      "Value": "string",
      "Type": "UK.OBIE.Credit"
    }
  ],
  "TotalValue": {
    "Amount": "1209.06",
    "Currency": "GBP"
  }
}
```

Provides further details on a statement resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|[AccountId](#schemaaccountid)|true|none|A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.|
|StatementId|[StatementId](#schemastatementid)|false|none|Unique identifier for the statement resource within a servicing institution. This identifier is both unique and immutable.|
|StatementReference|[StatementReference](#schemastatementreference)|false|none|Unique reference for the statement. This reference may be optionally populated if available.|
|Type|[OBInternalStatementType1Code](#schemaobinternalstatementtype1code)|true|none|Statement type, in a coded form. For a full list of values see `OBInternalStatementType1Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)|
|StartDateTime|[StartDateTime](#schemastartdatetime)|true|none|Date and time at which the statement period starts. All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|EndDateTime|[EndDateTime](#schemaenddatetime)|true|none|Date and time at which the statement period ends. All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|CreationDateTime|[CreationDateTime](#schemacreationdatetime)|true|none|Date and time at which the resource was created. All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|StatementDescription|[string]|false|none|none|
|StatementBenefit|[object]|false|none|none|
|StatementFee|[object]|false|none|none|
|StatementInterest|[object]|false|none|none|
|StatementAmount|[object]|false|none|none|
|StatementDateTime|[object]|false|none|none|
|StatementRate|[object]|false|none|none|
|StatementValue|[object]|false|none|none|
|TotalValue|object|false|none|Combined sum of all Amounts in the accounts base currency|

#### Enumerated Values

|Property|Value|
|---|---|
|Type|AccountClosure|
|Type|AccountOpening|
|Type|Annual|
|Type|Interim|
|Type|RegularPeriodic|

<h2 id="tocS_OBStatusReason">OBStatusReason</h2>
<!-- backwards compatibility -->
<a id="schemaobstatusreason"></a>
<a id="schema_OBStatusReason"></a>
<a id="tocSobstatusreason"></a>
<a id="tocsobstatusreason"></a>

```json
{
  "StatusReasonCode": "U004",
  "StatusReasonDescription": "Permissions field is missing",
  "Path": "Data.Permissions"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|StatusReasonCode|string|false|none|Specifies the status reason in a code form. <br> For a full description see `OBExternalStatusReason1Code` [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)|
|StatusReasonDescription|string|false|none|Description supporting the StatusReasonCode.|
|Path|string|false|none|Recommended but optional reference to JSON path if relevant to the StatusReasonCode.|

<h2 id="tocS_OBSupplementaryData1">OBSupplementaryData1</h2>
<!-- backwards compatibility -->
<a id="schemaobsupplementarydata1"></a>
<a id="schema_OBSupplementaryData1"></a>
<a id="tocSobsupplementarydata1"></a>
<a id="tocsobsupplementarydata1"></a>

```json
{}
```

Additional information that can not be captured in the structured fields and/or any other specific block.

<h2 id="tocS_OBTransaction6">OBTransaction6</h2>
<!-- backwards compatibility -->
<a id="schemaobtransaction6"></a>
<a id="schema_OBTransaction6"></a>
<a id="tocSobtransaction6"></a>
<a id="tocsobtransaction6"></a>

```json
{
  "AccountId": "22289",
  "TransactionId": "string",
  "TransactionReference": "string",
  "StatementReference": [
    "002"
  ],
  "CreditDebitIndicator": "Credit",
  "Status": "BOOK",
  "TransactionMutability": "Mutable",
  "BookingDateTime": "1970-01-01T00:00:00Z",
  "ValueDateTime": "1970-01-01T00:00:00Z",
  "TransactionInformation": "string",
  "AddressLine": "string",
  "Amount": {
    "Amount": "1209.06",
    "Currency": "GBP"
  },
  "ChargeAmount": {
    "Amount": "1209.06",
    "Currency": "GBP"
  },
  "CurrencyExchange": {
    "SourceCurrency": "string",
    "TargetCurrency": "string",
    "UnitCurrency": "string",
    "ExchangeRate": 0,
    "ContractIdentification": "string",
    "QuotationDate": "1970-01-01T00:00:00Z",
    "InstructedAmount": {
      "Amount": "1209.06",
      "Currency": "GBP"
    }
  },
  "BankTransactionCode": {
    "Code": "string",
    "SubCode": "string"
  },
  "ProprietaryBankTransactionCode": {
    "Code": "string",
    "Issuer": "string"
  },
  "ExtendedProprietaryBankTransactionCodes": [
    {
      "Code": "string",
      "Issuer": "string",
      "Description": "string"
    }
  ],
  "Balance": {
    "CreditDebitIndicator": "Credit",
    "Type": "CLAV",
    "Amount": {
      "Amount": "1209.06",
      "Currency": "GBP"
    }
  },
  "MerchantDetails": {
    "MerchantName": "string",
    "MerchantCategoryCode": "stri"
  },
  "CreditorAgent": {
    "SchemeName": "UK.OBIE.BICFI",
    "Identification": "string",
    "Name": "Agent Name",
    "LEI": "IZ9Q00LZEVUKWCQY6X15",
    "PostalAddress": {
      "AddressType": "BIZZ",
      "Department": "Finance",
      "SubDepartment": "Payroll",
      "StreetName": "Bank Street",
      "BuildingNumber": "11",
      "BuildingName": "string",
      "Floor": "11",
      "UnitNumber": "A88",
      "Room": "Basement 03",
      "PostBox": "PO Box 123456",
      "TownLocationName": "London",
      "DistrictName": "Greater London",
      "CareOf": "Jane Smith",
      "PostCode": "EC2N 4AG",
      "TownName": "London",
      "CountrySubDivision": "string",
      "Country": "string",
      "AddressLine": [
        "string"
      ]
    }
  },
  "CreditorAccount": {
    "SchemeName": "string",
    "Identification": "80200112344562",
    "Name": "Jane Smith",
    "SecondaryIdentification": "87562298675897",
    "Proxy": {
      "Identification": "2360549017905188",
      "Code": "TELE",
      "Type": "string"
    }
  },
  "DebtorAgent": {
    "SchemeName": "UK.OBIE.BICFI",
    "Identification": "string",
    "Name": "Agent Name",
    "LEI": "IZ9Q00LZEVUKWCQY6X15",
    "PostalAddress": {
      "AddressType": "BIZZ",
      "Department": "Finance",
      "SubDepartment": "Payroll",
      "StreetName": "Bank Street",
      "BuildingNumber": "11",
      "BuildingName": "string",
      "Floor": "11",
      "UnitNumber": "A88",
      "Room": "Basement 03",
      "PostBox": "PO Box 123456",
      "TownLocationName": "London",
      "DistrictName": "Greater London",
      "CareOf": "Jane Smith",
      "PostCode": "EC2N 4AG",
      "TownName": "London",
      "CountrySubDivision": "string",
      "Country": "string",
      "AddressLine": [
        "string"
      ]
    }
  },
  "DebtorAccount": {
    "SchemeName": "string",
    "Identification": "80200112344562",
    "Name": "Jane Smith",
    "SecondaryIdentification": "87562298675897",
    "Proxy": {
      "Identification": "2360549017905188",
      "Code": "TELE",
      "Type": "string"
    }
  },
  "CardInstrument": {
    "CardSchemeName": "AmericanExpress",
    "AuthorisationType": "ConsumerDevice",
    "Name": "string",
    "Identification": "string"
  },
  "SupplementaryData": {},
  "CategoryPurposeCode": "BONU",
  "PaymentPurposeCode": "BKDF",
  "UltimateCreditor": {
    "Name": "string",
    "Identification": "string",
    "LEI": "IZ9Q00LZEVUKWCQY6X15",
    "SchemeName": "string",
    "PostalAddress": {
      "AddressType": "BIZZ",
      "Department": "Finance",
      "SubDepartment": "Payroll",
      "StreetName": "Bank Street",
      "BuildingNumber": "11",
      "BuildingName": "string",
      "Floor": "11",
      "UnitNumber": "A88",
      "Room": "Basement 03",
      "PostBox": "PO Box 123456",
      "TownLocationName": "London",
      "DistrictName": "Greater London",
      "CareOf": "Jane Smith",
      "PostCode": "EC2N 4AG",
      "TownName": "London",
      "CountrySubDivision": "string",
      "Country": "string",
      "AddressLine": [
        "string"
      ]
    }
  },
  "UltimateDebtor": {
    "Name": "string",
    "Identification": "string",
    "LEI": "IZ9Q00LZEVUKWCQY6X15",
    "SchemeName": "string",
    "PostalAddress": {
      "AddressType": "BIZZ",
      "Department": "Finance",
      "SubDepartment": "Payroll",
      "StreetName": "Bank Street",
      "BuildingNumber": "11",
      "BuildingName": "string",
      "Floor": "11",
      "UnitNumber": "A88",
      "Room": "Basement 03",
      "PostBox": "PO Box 123456",
      "TownLocationName": "London",
      "DistrictName": "Greater London",
      "CareOf": "Jane Smith",
      "PostCode": "EC2N 4AG",
      "TownName": "London",
      "CountrySubDivision": "string",
      "Country": "string",
      "AddressLine": [
        "string"
      ]
    }
  },
  "IntermediaryAgent1": {
    "Name": "string",
    "SchemeName": "string",
    "Identification": "string",
    "LEI": "IZ9Q00LZEVUKWCQY6X15",
    "PostalAddress": {
      "AddressType": "BIZZ",
      "Department": "Finance",
      "SubDepartment": "Payroll",
      "StreetName": "Bank Street",
      "BuildingNumber": "11",
      "BuildingName": "string",
      "Floor": "11",
      "UnitNumber": "A88",
      "Room": "Basement 03",
      "PostBox": "PO Box 123456",
      "TownLocationName": "London",
      "DistrictName": "Greater London",
      "CareOf": "Jane Smith",
      "PostCode": "EC2N 4AG",
      "TownName": "London",
      "CountrySubDivision": "string",
      "Country": "string",
      "AddressLine": [
        "string"
      ]
    },
    "ProcessingStatus": "PDNG"
  },
  "IntermediaryAgent2": {
    "Name": "string",
    "SchemeName": "string",
    "Identification": "string",
    "LEI": "IZ9Q00LZEVUKWCQY6X15",
    "PostalAddress": {
      "AddressType": "BIZZ",
      "Department": "Finance",
      "SubDepartment": "Payroll",
      "StreetName": "Bank Street",
      "BuildingNumber": "11",
      "BuildingName": "string",
      "Floor": "11",
      "UnitNumber": "A88",
      "Room": "Basement 03",
      "PostBox": "PO Box 123456",
      "TownLocationName": "London",
      "DistrictName": "Greater London",
      "CareOf": "Jane Smith",
      "PostCode": "EC2N 4AG",
      "TownName": "London",
      "CountrySubDivision": "string",
      "Country": "string",
      "AddressLine": [
        "string"
      ]
    },
    "ProcessingStatus": "PDNG"
  },
  "IntermediaryAgent3": {
    "Name": "string",
    "SchemeName": "string",
    "Identification": "string",
    "LEI": "IZ9Q00LZEVUKWCQY6X15",
    "PostalAddress": {
      "AddressType": "BIZZ",
      "Department": "Finance",
      "SubDepartment": "Payroll",
      "StreetName": "Bank Street",
      "BuildingNumber": "11",
      "BuildingName": "string",
      "Floor": "11",
      "UnitNumber": "A88",
      "Room": "Basement 03",
      "PostBox": "PO Box 123456",
      "TownLocationName": "London",
      "DistrictName": "Greater London",
      "CareOf": "Jane Smith",
      "PostCode": "EC2N 4AG",
      "TownName": "London",
      "CountrySubDivision": "string",
      "Country": "string",
      "AddressLine": [
        "string"
      ]
    },
    "ProcessingStatus": "PDNG"
  }
}
```

Provides further details on an entry in the report.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|[AccountId](#schemaaccountid)|true|none|A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.|
|TransactionId|[TransactionId](#schematransactionid)|false|none|Unique identifier for the transaction within a servicing institution. This identifier is both unique and immutable.|
|TransactionReference|[TransactionReference](#schematransactionreference)|false|none|Unique reference for the transaction. This reference is optionally populated, and may as an example be the FPID in the Faster Payments context.|
|StatementReference|[[StatementReference](#schemastatementreference)]|false|none|none|
|CreditDebitIndicator|[OBCreditDebitCode_1](#schemaobcreditdebitcode_1)|true|none|Indicates whether the transaction is a credit or a debit entry. <br /><br><br /><br>For a full list of enumeration values refer to `OBInternalCreditDebitCode` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)|
|Status|[ExternalEntryStatus1Code](#schemaexternalentrystatus1code)|true|none|Status of a transaction entry on the books of the account servicer. <br /><br>For a full list of enumeration values refer to `ExternalEntryStatus1Code` in *ISO_External_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)|
|TransactionMutability|[OBInternalTransactionMutability1Code](#schemaobinternaltransactionmutability1code)|false|none|Specifies the Mutability of the Transaction record. <br /><br>For a full list of enumeration values refer to `OBInternalTransactionMutability1Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)|
|BookingDateTime|[BookingDateTime](#schemabookingdatetime)|true|none|Date and time when a transaction entry is posted to an account on the account servicer's books.<br>Usage: Booking date is the expected booking date, unless the status is booked, in which case it is the actual booking date. All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|ValueDateTime|[ValueDateTime](#schemavaluedatetime)|false|none|Date and time at which assets become available to the account owner in case of a credit entry, or cease to be available to the account owner in case of a debit transaction entry.<br>Usage: If transaction entry status is pending and value date is present, then the value date refers to an expected/requested value date.<br>For transaction entries subject to availability/float and for which availability information is provided, the value date must not be used. In this case the availability component identifies the number of availability days. All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|TransactionInformation|[TransactionInformation](#schematransactioninformation)|false|none|Further details of the transaction. <br>This is the transaction narrative, which is unstructured text.|
|AddressLine|[AddressLine](#schemaaddressline)|false|none|Information that locates and identifies a specific address for a transaction entry, that is presented in free format text.|
|Amount|[OBActiveOrHistoricCurrencyAndAmount_9](#schemaobactiveorhistoriccurrencyandamount_9)|true|none|Amount of money in the cash transaction entry.|
|ChargeAmount|[OBActiveOrHistoricCurrencyAndAmount_10](#schemaobactiveorhistoriccurrencyandamount_10)|false|none|Transaction charges to be paid by the charge bearer.|
|CurrencyExchange|[OBCurrencyExchange5](#schemaobcurrencyexchange5)|false|none|Set of elements used to provide details on the currency exchange.|
|BankTransactionCode|[OBBankTransactionCodeStructure1](#schemaobbanktransactioncodestructure1)|false|none|Set of elements used to fully identify the type of underlying transaction resulting in an entry.|
|ProprietaryBankTransactionCode|[ProprietaryBankTransactionCodeStructure1](#schemaproprietarybanktransactioncodestructure1)|false|none|Set of elements to fully identify a proprietary bank transaction code.|
|ExtendedProprietaryBankTransactionCodes|[[OBExtendedProprietaryBankTransactionCode](#schemaobextendedproprietarybanktransactioncode)]|false|none|none|
|Balance|[OBTransactionCashBalance](#schemaobtransactioncashbalance)|false|none|Set of elements used to define the balance as a numerical representation of the net increases and decreases in an account after a transaction entry is applied to the account.|
|MerchantDetails|[OBMerchantDetails1](#schemaobmerchantdetails1)|false|none|Details of the merchant involved in the transaction.|
|CreditorAgent|[OBBranchAndFinancialInstitutionIdentification6_1](#schemaobbranchandfinancialinstitutionidentification6_1)|false|none|Financial institution servicing an account for the creditor.|
|CreditorAccount|[OBCashAccount6_0](#schemaobcashaccount6_0)|false|none|Unambiguous identification of the account of the creditor, in the case of a debit transaction.|
|DebtorAgent|[OBBranchAndFinancialInstitutionIdentification6_2](#schemaobbranchandfinancialinstitutionidentification6_2)|false|none|Financial institution servicing an account for the debtor.|
|DebtorAccount|[OBCashAccount6_1](#schemaobcashaccount6_1)|false|none|Unambiguous identification of the account of the debtor, in the case of a credit transaction.|
|CardInstrument|[OBTransactionCardInstrument1](#schemaobtransactioncardinstrument1)|false|none|Set of elements to describe the card instrument used in the transaction. <br /><br>For a full list of enumeration values refer to `OBInternalCardSchemeType1Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)|
|SupplementaryData|[OBSupplementaryData1](#schemaobsupplementarydata1)|false|none|Additional information that can not be captured in the structured fields and/or any other specific block.|
|CategoryPurposeCode|[ExternalCategoryPurpose1Code](#schemaexternalcategorypurpose1code)|false|none|Enumeration of codes that outlines the type of purpose behind a transaction, payment or risk.  For all enum values see `ExternalCategoryPurpose1Code` in *ISO_External_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)|
|PaymentPurposeCode|[OBExternalPurpose1Code](#schemaobexternalpurpose1code)|false|none|For a full list of enumeration values refer to `ExternalPurpose1Code` in *ISO_External_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)|
|UltimateCreditor|[OBUltimateCreditor1](#schemaobultimatecreditor1)|false|none|Ultimate party to which an amount of money is due.|
|UltimateDebtor|[OBUltimateDebtor1](#schemaobultimatedebtor1)|false|none|Ultimate party that owes an amount of money to the (ultimate) creditor.|
|IntermediaryAgent1|[OBIntermediaryAgent](#schemaobintermediaryagent)|false|none|The intermediary agent associated with this transaction.|
|IntermediaryAgent2|[OBIntermediaryAgent](#schemaobintermediaryagent)|false|none|The intermediary agent associated with this transaction.|
|IntermediaryAgent3|[OBIntermediaryAgent](#schemaobintermediaryagent)|false|none|The intermediary agent associated with this transaction.|

#### Enumerated Values

|Property|Value|
|---|---|
|CreditDebitIndicator|Credit|
|CreditDebitIndicator|Debit|
|Status|BOOK|
|Status|FUTR|
|Status|INFO|
|Status|PDNG|
|Status|RJCT|
|TransactionMutability|Mutable|
|TransactionMutability|Immutable|
|CategoryPurposeCode|BONU|
|CategoryPurposeCode|CASH|
|CategoryPurposeCode|CBLK|
|CategoryPurposeCode|CCRD|
|CategoryPurposeCode|CGWV|
|CategoryPurposeCode|CIPC|
|CategoryPurposeCode|CONC|
|CategoryPurposeCode|CORT|
|CategoryPurposeCode|DCRD|
|CategoryPurposeCode|DIVI|
|CategoryPurposeCode|DVPM|
|CategoryPurposeCode|EPAY|
|CategoryPurposeCode|FCDT|
|CategoryPurposeCode|FCIN|
|CategoryPurposeCode|FCOL|
|CategoryPurposeCode|GOVT|
|CategoryPurposeCode|GP2P|
|CategoryPurposeCode|HEDG|
|CategoryPurposeCode|ICCP|
|CategoryPurposeCode|IDCP|
|CategoryPurposeCode|INTC|
|CategoryPurposeCode|INTE|
|CategoryPurposeCode|LBOX|
|CategoryPurposeCode|LOAN|
|CategoryPurposeCode|MP2B|
|CategoryPurposeCode|MP2P|
|CategoryPurposeCode|OTHR|
|CategoryPurposeCode|PENS|
|CategoryPurposeCode|RPRE|
|CategoryPurposeCode|RRCT|
|CategoryPurposeCode|RVPM|
|CategoryPurposeCode|SALA|
|CategoryPurposeCode|SECU|
|CategoryPurposeCode|SSBE|
|CategoryPurposeCode|SUPP|
|CategoryPurposeCode|SWEP|
|CategoryPurposeCode|TAXS|
|CategoryPurposeCode|TOPG|
|CategoryPurposeCode|TRAD|
|CategoryPurposeCode|TREA|
|CategoryPurposeCode|VATX|
|CategoryPurposeCode|VOST|
|CategoryPurposeCode|WHLD|
|CategoryPurposeCode|ZABA|
|PaymentPurposeCode|BKDF|
|PaymentPurposeCode|BKFE|
|PaymentPurposeCode|BKFM|
|PaymentPurposeCode|BKIP|
|PaymentPurposeCode|BKPP|
|PaymentPurposeCode|CBLK|
|PaymentPurposeCode|CDCB|
|PaymentPurposeCode|CDCD|
|PaymentPurposeCode|CDCS|
|PaymentPurposeCode|CDDP|
|PaymentPurposeCode|CDOC|
|PaymentPurposeCode|CDQC|
|PaymentPurposeCode|ETUP|
|PaymentPurposeCode|FCOL|
|PaymentPurposeCode|MTUP|
|PaymentPurposeCode|ACCT|
|PaymentPurposeCode|CASH|
|PaymentPurposeCode|COLL|
|PaymentPurposeCode|CSDB|
|PaymentPurposeCode|DEPT|
|PaymentPurposeCode|INTC|
|PaymentPurposeCode|INTP|
|PaymentPurposeCode|LIMA|
|PaymentPurposeCode|NETT|
|PaymentPurposeCode|BFWD|
|PaymentPurposeCode|CCIR|
|PaymentPurposeCode|CCPC|
|PaymentPurposeCode|CCPM|
|PaymentPurposeCode|CCSM|
|PaymentPurposeCode|CRDS|
|PaymentPurposeCode|CRPR|
|PaymentPurposeCode|CRSP|
|PaymentPurposeCode|CRTL|
|PaymentPurposeCode|EQPT|
|PaymentPurposeCode|EQUS|
|PaymentPurposeCode|EXPT|
|PaymentPurposeCode|EXTD|
|PaymentPurposeCode|FIXI|
|PaymentPurposeCode|FWBC|
|PaymentPurposeCode|FWCC|
|PaymentPurposeCode|FWSB|
|PaymentPurposeCode|FWSC|
|PaymentPurposeCode|MARG|
|PaymentPurposeCode|MBSB|
|PaymentPurposeCode|MBSC|
|PaymentPurposeCode|MGCC|
|PaymentPurposeCode|MGSC|
|PaymentPurposeCode|OCCC|
|PaymentPurposeCode|OPBC|
|PaymentPurposeCode|OPCC|
|PaymentPurposeCode|OPSB|
|PaymentPurposeCode|OPSC|
|PaymentPurposeCode|OPTN|
|PaymentPurposeCode|OTCD|
|PaymentPurposeCode|REPO|
|PaymentPurposeCode|RPBC|
|PaymentPurposeCode|RPCC|
|PaymentPurposeCode|RPSB|
|PaymentPurposeCode|RPSC|
|PaymentPurposeCode|RVPO|
|PaymentPurposeCode|SBSC|
|PaymentPurposeCode|SCIE|
|PaymentPurposeCode|SCIR|
|PaymentPurposeCode|SCRP|
|PaymentPurposeCode|SHBC|
|PaymentPurposeCode|SHCC|
|PaymentPurposeCode|SHSL|
|PaymentPurposeCode|SLEB|
|PaymentPurposeCode|SLOA|
|PaymentPurposeCode|SWBC|
|PaymentPurposeCode|SWCC|
|PaymentPurposeCode|SWPT|
|PaymentPurposeCode|SWSB|
|PaymentPurposeCode|SWSC|
|PaymentPurposeCode|TBAS|
|PaymentPurposeCode|TBBC|
|PaymentPurposeCode|TBCC|
|PaymentPurposeCode|TRCP|
|PaymentPurposeCode|AGRT|
|PaymentPurposeCode|AREN|
|PaymentPurposeCode|BEXP|
|PaymentPurposeCode|BOCE|
|PaymentPurposeCode|COMC|
|PaymentPurposeCode|CPYR|
|PaymentPurposeCode|GDDS|
|PaymentPurposeCode|GDSV|
|PaymentPurposeCode|GSCB|
|PaymentPurposeCode|LICF|
|PaymentPurposeCode|MP2B|
|PaymentPurposeCode|POPE|
|PaymentPurposeCode|ROYA|
|PaymentPurposeCode|SCVE|
|PaymentPurposeCode|SERV|
|PaymentPurposeCode|SUBS|
|PaymentPurposeCode|SUPP|
|PaymentPurposeCode|TRAD|
|PaymentPurposeCode|CHAR|
|PaymentPurposeCode|COMT|
|PaymentPurposeCode|MP2P|
|PaymentPurposeCode|ECPG|
|PaymentPurposeCode|ECPR|
|PaymentPurposeCode|ECPU|
|PaymentPurposeCode|EPAY|
|PaymentPurposeCode|CLPR|
|PaymentPurposeCode|COMP|
|PaymentPurposeCode|DBTC|
|PaymentPurposeCode|GOVI|
|PaymentPurposeCode|HLRP|
|PaymentPurposeCode|HLST|
|PaymentPurposeCode|INPC|
|PaymentPurposeCode|INPR|
|PaymentPurposeCode|INSC|
|PaymentPurposeCode|INSU|
|PaymentPurposeCode|INTE|
|PaymentPurposeCode|LBRI|
|PaymentPurposeCode|LIFI|
|PaymentPurposeCode|LOAN|
|PaymentPurposeCode|LOAR|
|PaymentPurposeCode|PENO|
|PaymentPurposeCode|PPTI|
|PaymentPurposeCode|RELG|
|PaymentPurposeCode|RINP|
|PaymentPurposeCode|TRFD|
|PaymentPurposeCode|FORW|
|PaymentPurposeCode|FXNT|
|PaymentPurposeCode|ADMG|
|PaymentPurposeCode|ADVA|
|PaymentPurposeCode|BCDM|
|PaymentPurposeCode|BCFG|
|PaymentPurposeCode|BLDM|
|PaymentPurposeCode|BNET|
|PaymentPurposeCode|CBFF|
|PaymentPurposeCode|CBFR|
|PaymentPurposeCode|CCRD|
|PaymentPurposeCode|CDBL|
|PaymentPurposeCode|CFEE|
|PaymentPurposeCode|CGDD|
|PaymentPurposeCode|CORT|
|PaymentPurposeCode|COST|
|PaymentPurposeCode|CPKC|
|PaymentPurposeCode|DCRD|
|PaymentPurposeCode|DSMT|
|PaymentPurposeCode|DVPM|
|PaymentPurposeCode|EDUC|
|PaymentPurposeCode|FACT|
|PaymentPurposeCode|FAND|
|PaymentPurposeCode|FCPM|
|PaymentPurposeCode|FEES|
|PaymentPurposeCode|GIFT|
|PaymentPurposeCode|GOVT|
|PaymentPurposeCode|ICCP|
|PaymentPurposeCode|IDCP|
|PaymentPurposeCode|IHRP|
|PaymentPurposeCode|INSM|
|PaymentPurposeCode|IVPT|
|PaymentPurposeCode|MCDM|
|PaymentPurposeCode|MCFG|
|PaymentPurposeCode|MSVC|
|PaymentPurposeCode|NOWS|
|PaymentPurposeCode|OCDM|
|PaymentPurposeCode|OCFG|
|PaymentPurposeCode|OFEE|
|PaymentPurposeCode|OTHR|
|PaymentPurposeCode|PADD|
|PaymentPurposeCode|PTSP|
|PaymentPurposeCode|RCKE|
|PaymentPurposeCode|RCPT|
|PaymentPurposeCode|REBT|
|PaymentPurposeCode|REFU|
|PaymentPurposeCode|RENT|
|PaymentPurposeCode|REOD|
|PaymentPurposeCode|RIMB|
|PaymentPurposeCode|RPNT|
|PaymentPurposeCode|RRBN|
|PaymentPurposeCode|RRCT|
|PaymentPurposeCode|RRTP|
|PaymentPurposeCode|RVPM|
|PaymentPurposeCode|SLPI|
|PaymentPurposeCode|SPLT|
|PaymentPurposeCode|STDY|
|PaymentPurposeCode|TBAN|
|PaymentPurposeCode|TBIL|
|PaymentPurposeCode|TCSC|
|PaymentPurposeCode|TELI|
|PaymentPurposeCode|TMPG|
|PaymentPurposeCode|TPRI|
|PaymentPurposeCode|TPRP|
|PaymentPurposeCode|TRNC|
|PaymentPurposeCode|TRVC|
|PaymentPurposeCode|WEBI|
|PaymentPurposeCode|IPAY|
|PaymentPurposeCode|IPCA|
|PaymentPurposeCode|IPDO|
|PaymentPurposeCode|IPEA|
|PaymentPurposeCode|IPEC|
|PaymentPurposeCode|IPEW|
|PaymentPurposeCode|IPPS|
|PaymentPurposeCode|IPRT|
|PaymentPurposeCode|IPU2|
|PaymentPurposeCode|IPUW|
|PaymentPurposeCode|ANNI|
|PaymentPurposeCode|CAFI|
|PaymentPurposeCode|CFDI|
|PaymentPurposeCode|CMDT|
|PaymentPurposeCode|DERI|
|PaymentPurposeCode|DIVD|
|PaymentPurposeCode|FREX|
|PaymentPurposeCode|HEDG|
|PaymentPurposeCode|INVS|
|PaymentPurposeCode|PRME|
|PaymentPurposeCode|SAVG|
|PaymentPurposeCode|SECU|
|PaymentPurposeCode|SEPI|
|PaymentPurposeCode|TREA|
|PaymentPurposeCode|UNIT|
|PaymentPurposeCode|FNET|
|PaymentPurposeCode|FUTR|
|PaymentPurposeCode|ANTS|
|PaymentPurposeCode|CVCF|
|PaymentPurposeCode|DMEQ|
|PaymentPurposeCode|DNTS|
|PaymentPurposeCode|HLTC|
|PaymentPurposeCode|HLTI|
|PaymentPurposeCode|HSPC|
|PaymentPurposeCode|ICRF|
|PaymentPurposeCode|LTCF|
|PaymentPurposeCode|MAFC|
|PaymentPurposeCode|MARF|
|PaymentPurposeCode|MDCS|
|PaymentPurposeCode|VIEW|
|PaymentPurposeCode|CDEP|
|PaymentPurposeCode|SWFP|
|PaymentPurposeCode|SWPP|
|PaymentPurposeCode|SWRS|
|PaymentPurposeCode|SWUF|
|PaymentPurposeCode|ADCS|
|PaymentPurposeCode|AEMP|
|PaymentPurposeCode|ALLW|
|PaymentPurposeCode|ALMY|
|PaymentPurposeCode|BBSC|
|PaymentPurposeCode|BECH|
|PaymentPurposeCode|BENE|
|PaymentPurposeCode|BONU|
|PaymentPurposeCode|CCHD|
|PaymentPurposeCode|COMM|
|PaymentPurposeCode|CSLP|
|PaymentPurposeCode|GFRP|
|PaymentPurposeCode|GVEA|
|PaymentPurposeCode|GVEB|
|PaymentPurposeCode|GVEC|
|PaymentPurposeCode|GVED|
|PaymentPurposeCode|GWLT|
|PaymentPurposeCode|HREC|
|PaymentPurposeCode|PAYR|
|PaymentPurposeCode|PEFC|
|PaymentPurposeCode|PENS|
|PaymentPurposeCode|PRCP|
|PaymentPurposeCode|RHBS|
|PaymentPurposeCode|SALA|
|PaymentPurposeCode|SPSP|
|PaymentPurposeCode|SSBE|
|PaymentPurposeCode|LBIN|
|PaymentPurposeCode|LCOL|
|PaymentPurposeCode|LFEE|
|PaymentPurposeCode|LMEQ|
|PaymentPurposeCode|LMFI|
|PaymentPurposeCode|LMRK|
|PaymentPurposeCode|LREB|
|PaymentPurposeCode|LREV|
|PaymentPurposeCode|LSFL|
|PaymentPurposeCode|ESTX|
|PaymentPurposeCode|FWLV|
|PaymentPurposeCode|GSTX|
|PaymentPurposeCode|HSTX|
|PaymentPurposeCode|INTX|
|PaymentPurposeCode|NITX|
|PaymentPurposeCode|PTXP|
|PaymentPurposeCode|RDTX|
|PaymentPurposeCode|TAXS|
|PaymentPurposeCode|VATX|
|PaymentPurposeCode|WHLD|
|PaymentPurposeCode|TAXR|
|PaymentPurposeCode|B112|
|PaymentPurposeCode|BR12|
|PaymentPurposeCode|TLRF|
|PaymentPurposeCode|TLRR|
|PaymentPurposeCode|AIRB|
|PaymentPurposeCode|BUSB|
|PaymentPurposeCode|FERB|
|PaymentPurposeCode|RLWY|
|PaymentPurposeCode|TRPT|
|PaymentPurposeCode|CBTV|
|PaymentPurposeCode|ELEC|
|PaymentPurposeCode|ENRG|
|PaymentPurposeCode|GASB|
|PaymentPurposeCode|NWCH|
|PaymentPurposeCode|NWCM|
|PaymentPurposeCode|OTLC|
|PaymentPurposeCode|PHON|
|PaymentPurposeCode|UBIL|
|PaymentPurposeCode|WTER|
|PaymentPurposeCode|BOND|
|PaymentPurposeCode|CABD|
|PaymentPurposeCode|CAEQ|
|PaymentPurposeCode|CBCR|
|PaymentPurposeCode|DBCR|
|PaymentPurposeCode|DICL|
|PaymentPurposeCode|EQTS|
|PaymentPurposeCode|FLCR|
|PaymentPurposeCode|EFTC|
|PaymentPurposeCode|EFTD|
|PaymentPurposeCode|MOMA|
|PaymentPurposeCode|RAPI|
|PaymentPurposeCode|GAMB|
|PaymentPurposeCode|LOTT|
|PaymentPurposeCode|AMEX|
|PaymentPurposeCode|SASW|
|PaymentPurposeCode|AUCO|
|PaymentPurposeCode|PCOM|
|PaymentPurposeCode|PDEP|
|PaymentPurposeCode|PLDS|
|PaymentPurposeCode|PLRF|
|PaymentPurposeCode|GAFA|
|PaymentPurposeCode|GAHO|
|PaymentPurposeCode|CPEN|
|PaymentPurposeCode|DEPD|
|PaymentPurposeCode|RETL|
|PaymentPurposeCode|DEBT|
|PaymentPurposeCode|CRYP|

<h2 id="tocS_OBTransaction6Basic">OBTransaction6Basic</h2>
<!-- backwards compatibility -->
<a id="schemaobtransaction6basic"></a>
<a id="schema_OBTransaction6Basic"></a>
<a id="tocSobtransaction6basic"></a>
<a id="tocsobtransaction6basic"></a>

```json
{
  "AccountId": "22289",
  "TransactionId": "string",
  "TransactionReference": "string",
  "StatementReference": [
    "002"
  ],
  "CreditDebitIndicator": "Credit",
  "Status": "BOOK",
  "TransactionMutability": "Mutable",
  "BookingDateTime": "1970-01-01T00:00:00Z",
  "ValueDateTime": "1970-01-01T00:00:00Z",
  "AddressLine": "string",
  "Amount": {
    "Amount": "1209.06",
    "Currency": "GBP"
  },
  "ChargeAmount": {
    "Amount": "1209.06",
    "Currency": "GBP"
  },
  "CurrencyExchange": {
    "SourceCurrency": "string",
    "TargetCurrency": "string",
    "UnitCurrency": "string",
    "ExchangeRate": 0,
    "ContractIdentification": "string",
    "QuotationDate": "1970-01-01T00:00:00Z",
    "InstructedAmount": {
      "Amount": "1209.06",
      "Currency": "GBP"
    }
  },
  "BankTransactionCode": {
    "Code": "string",
    "SubCode": "string"
  },
  "ProprietaryBankTransactionCode": {
    "Code": "string",
    "Issuer": "string"
  },
  "ExtendedProprietaryBankTransactionCodes": [
    {
      "Code": "string",
      "Issuer": "string",
      "Description": "string"
    }
  ],
  "CardInstrument": {
    "CardSchemeName": "AmericanExpress",
    "AuthorisationType": "ConsumerDevice",
    "Name": "string",
    "Identification": "string"
  },
  "SupplementaryData": {},
  "CategoryPurposeCode": "BONU",
  "PaymentPurposeCode": "BKDF"
}
```

Provides further details on an entry in the report.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|[AccountId](#schemaaccountid)|true|none|A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.|
|TransactionId|[TransactionId](#schematransactionid)|false|none|Unique identifier for the transaction within a servicing institution. This identifier is both unique and immutable.|
|TransactionReference|[TransactionReference](#schematransactionreference)|false|none|Unique reference for the transaction. This reference is optionally populated, and may as an example be the FPID in the Faster Payments context.|
|StatementReference|[[StatementReference](#schemastatementreference)]|false|none|none|
|CreditDebitIndicator|[OBCreditDebitCode_1](#schemaobcreditdebitcode_1)|true|none|Indicates whether the transaction is a credit or a debit entry. <br /><br><br /><br>For a full list of enumeration values refer to `OBInternalCreditDebitCode` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)|
|Status|[ExternalEntryStatus1Code](#schemaexternalentrystatus1code)|true|none|Status of a transaction entry on the books of the account servicer. <br /><br>For a full list of enumeration values refer to `ExternalEntryStatus1Code` in *ISO_External_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)|
|TransactionMutability|[OBInternalTransactionMutability1Code](#schemaobinternaltransactionmutability1code)|false|none|Specifies the Mutability of the Transaction record. <br /><br>For a full list of enumeration values refer to `OBInternalTransactionMutability1Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)|
|BookingDateTime|[BookingDateTime](#schemabookingdatetime)|true|none|Date and time when a transaction entry is posted to an account on the account servicer's books.<br>Usage: Booking date is the expected booking date, unless the status is booked, in which case it is the actual booking date. All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|ValueDateTime|[ValueDateTime](#schemavaluedatetime)|false|none|Date and time at which assets become available to the account owner in case of a credit entry, or cease to be available to the account owner in case of a debit transaction entry.<br>Usage: If transaction entry status is pending and value date is present, then the value date refers to an expected/requested value date.<br>For transaction entries subject to availability/float and for which availability information is provided, the value date must not be used. In this case the availability component identifies the number of availability days. All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|AddressLine|[AddressLine](#schemaaddressline)|false|none|Information that locates and identifies a specific address for a transaction entry, that is presented in free format text.|
|Amount|[OBActiveOrHistoricCurrencyAndAmount_9](#schemaobactiveorhistoriccurrencyandamount_9)|true|none|Amount of money in the cash transaction entry.|
|ChargeAmount|[OBActiveOrHistoricCurrencyAndAmount_10](#schemaobactiveorhistoriccurrencyandamount_10)|false|none|Transaction charges to be paid by the charge bearer.|
|CurrencyExchange|[OBCurrencyExchange5](#schemaobcurrencyexchange5)|false|none|Set of elements used to provide details on the currency exchange.|
|BankTransactionCode|[OBBankTransactionCodeStructure1](#schemaobbanktransactioncodestructure1)|false|none|Set of elements used to fully identify the type of underlying transaction resulting in an entry.|
|ProprietaryBankTransactionCode|[ProprietaryBankTransactionCodeStructure1](#schemaproprietarybanktransactioncodestructure1)|false|none|Set of elements to fully identify a proprietary bank transaction code.|
|ExtendedProprietaryBankTransactionCodes|[[OBExtendedProprietaryBankTransactionCode](#schemaobextendedproprietarybanktransactioncode)]|false|none|none|
|CardInstrument|[OBTransactionCardInstrument1](#schemaobtransactioncardinstrument1)|false|none|Set of elements to describe the card instrument used in the transaction. <br /><br>For a full list of enumeration values refer to `OBInternalCardSchemeType1Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)|
|SupplementaryData|[OBSupplementaryData1](#schemaobsupplementarydata1)|false|none|Additional information that can not be captured in the structured fields and/or any other specific block.|
|CategoryPurposeCode|[ExternalCategoryPurpose1Code](#schemaexternalcategorypurpose1code)|false|none|Enumeration of codes that outlines the type of purpose behind a transaction, payment or risk.  For all enum values see `ExternalCategoryPurpose1Code` in *ISO_External_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)|
|PaymentPurposeCode|[OBExternalPurpose1Code](#schemaobexternalpurpose1code)|false|none|For a full list of enumeration values refer to `ExternalPurpose1Code` in *ISO_External_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)|

#### Enumerated Values

|Property|Value|
|---|---|
|CreditDebitIndicator|Credit|
|CreditDebitIndicator|Debit|
|Status|BOOK|
|Status|FUTR|
|Status|INFO|
|Status|PDNG|
|Status|RJCT|
|TransactionMutability|Mutable|
|TransactionMutability|Immutable|
|CategoryPurposeCode|BONU|
|CategoryPurposeCode|CASH|
|CategoryPurposeCode|CBLK|
|CategoryPurposeCode|CCRD|
|CategoryPurposeCode|CGWV|
|CategoryPurposeCode|CIPC|
|CategoryPurposeCode|CONC|
|CategoryPurposeCode|CORT|
|CategoryPurposeCode|DCRD|
|CategoryPurposeCode|DIVI|
|CategoryPurposeCode|DVPM|
|CategoryPurposeCode|EPAY|
|CategoryPurposeCode|FCDT|
|CategoryPurposeCode|FCIN|
|CategoryPurposeCode|FCOL|
|CategoryPurposeCode|GOVT|
|CategoryPurposeCode|GP2P|
|CategoryPurposeCode|HEDG|
|CategoryPurposeCode|ICCP|
|CategoryPurposeCode|IDCP|
|CategoryPurposeCode|INTC|
|CategoryPurposeCode|INTE|
|CategoryPurposeCode|LBOX|
|CategoryPurposeCode|LOAN|
|CategoryPurposeCode|MP2B|
|CategoryPurposeCode|MP2P|
|CategoryPurposeCode|OTHR|
|CategoryPurposeCode|PENS|
|CategoryPurposeCode|RPRE|
|CategoryPurposeCode|RRCT|
|CategoryPurposeCode|RVPM|
|CategoryPurposeCode|SALA|
|CategoryPurposeCode|SECU|
|CategoryPurposeCode|SSBE|
|CategoryPurposeCode|SUPP|
|CategoryPurposeCode|SWEP|
|CategoryPurposeCode|TAXS|
|CategoryPurposeCode|TOPG|
|CategoryPurposeCode|TRAD|
|CategoryPurposeCode|TREA|
|CategoryPurposeCode|VATX|
|CategoryPurposeCode|VOST|
|CategoryPurposeCode|WHLD|
|CategoryPurposeCode|ZABA|
|PaymentPurposeCode|BKDF|
|PaymentPurposeCode|BKFE|
|PaymentPurposeCode|BKFM|
|PaymentPurposeCode|BKIP|
|PaymentPurposeCode|BKPP|
|PaymentPurposeCode|CBLK|
|PaymentPurposeCode|CDCB|
|PaymentPurposeCode|CDCD|
|PaymentPurposeCode|CDCS|
|PaymentPurposeCode|CDDP|
|PaymentPurposeCode|CDOC|
|PaymentPurposeCode|CDQC|
|PaymentPurposeCode|ETUP|
|PaymentPurposeCode|FCOL|
|PaymentPurposeCode|MTUP|
|PaymentPurposeCode|ACCT|
|PaymentPurposeCode|CASH|
|PaymentPurposeCode|COLL|
|PaymentPurposeCode|CSDB|
|PaymentPurposeCode|DEPT|
|PaymentPurposeCode|INTC|
|PaymentPurposeCode|INTP|
|PaymentPurposeCode|LIMA|
|PaymentPurposeCode|NETT|
|PaymentPurposeCode|BFWD|
|PaymentPurposeCode|CCIR|
|PaymentPurposeCode|CCPC|
|PaymentPurposeCode|CCPM|
|PaymentPurposeCode|CCSM|
|PaymentPurposeCode|CRDS|
|PaymentPurposeCode|CRPR|
|PaymentPurposeCode|CRSP|
|PaymentPurposeCode|CRTL|
|PaymentPurposeCode|EQPT|
|PaymentPurposeCode|EQUS|
|PaymentPurposeCode|EXPT|
|PaymentPurposeCode|EXTD|
|PaymentPurposeCode|FIXI|
|PaymentPurposeCode|FWBC|
|PaymentPurposeCode|FWCC|
|PaymentPurposeCode|FWSB|
|PaymentPurposeCode|FWSC|
|PaymentPurposeCode|MARG|
|PaymentPurposeCode|MBSB|
|PaymentPurposeCode|MBSC|
|PaymentPurposeCode|MGCC|
|PaymentPurposeCode|MGSC|
|PaymentPurposeCode|OCCC|
|PaymentPurposeCode|OPBC|
|PaymentPurposeCode|OPCC|
|PaymentPurposeCode|OPSB|
|PaymentPurposeCode|OPSC|
|PaymentPurposeCode|OPTN|
|PaymentPurposeCode|OTCD|
|PaymentPurposeCode|REPO|
|PaymentPurposeCode|RPBC|
|PaymentPurposeCode|RPCC|
|PaymentPurposeCode|RPSB|
|PaymentPurposeCode|RPSC|
|PaymentPurposeCode|RVPO|
|PaymentPurposeCode|SBSC|
|PaymentPurposeCode|SCIE|
|PaymentPurposeCode|SCIR|
|PaymentPurposeCode|SCRP|
|PaymentPurposeCode|SHBC|
|PaymentPurposeCode|SHCC|
|PaymentPurposeCode|SHSL|
|PaymentPurposeCode|SLEB|
|PaymentPurposeCode|SLOA|
|PaymentPurposeCode|SWBC|
|PaymentPurposeCode|SWCC|
|PaymentPurposeCode|SWPT|
|PaymentPurposeCode|SWSB|
|PaymentPurposeCode|SWSC|
|PaymentPurposeCode|TBAS|
|PaymentPurposeCode|TBBC|
|PaymentPurposeCode|TBCC|
|PaymentPurposeCode|TRCP|
|PaymentPurposeCode|AGRT|
|PaymentPurposeCode|AREN|
|PaymentPurposeCode|BEXP|
|PaymentPurposeCode|BOCE|
|PaymentPurposeCode|COMC|
|PaymentPurposeCode|CPYR|
|PaymentPurposeCode|GDDS|
|PaymentPurposeCode|GDSV|
|PaymentPurposeCode|GSCB|
|PaymentPurposeCode|LICF|
|PaymentPurposeCode|MP2B|
|PaymentPurposeCode|POPE|
|PaymentPurposeCode|ROYA|
|PaymentPurposeCode|SCVE|
|PaymentPurposeCode|SERV|
|PaymentPurposeCode|SUBS|
|PaymentPurposeCode|SUPP|
|PaymentPurposeCode|TRAD|
|PaymentPurposeCode|CHAR|
|PaymentPurposeCode|COMT|
|PaymentPurposeCode|MP2P|
|PaymentPurposeCode|ECPG|
|PaymentPurposeCode|ECPR|
|PaymentPurposeCode|ECPU|
|PaymentPurposeCode|EPAY|
|PaymentPurposeCode|CLPR|
|PaymentPurposeCode|COMP|
|PaymentPurposeCode|DBTC|
|PaymentPurposeCode|GOVI|
|PaymentPurposeCode|HLRP|
|PaymentPurposeCode|HLST|
|PaymentPurposeCode|INPC|
|PaymentPurposeCode|INPR|
|PaymentPurposeCode|INSC|
|PaymentPurposeCode|INSU|
|PaymentPurposeCode|INTE|
|PaymentPurposeCode|LBRI|
|PaymentPurposeCode|LIFI|
|PaymentPurposeCode|LOAN|
|PaymentPurposeCode|LOAR|
|PaymentPurposeCode|PENO|
|PaymentPurposeCode|PPTI|
|PaymentPurposeCode|RELG|
|PaymentPurposeCode|RINP|
|PaymentPurposeCode|TRFD|
|PaymentPurposeCode|FORW|
|PaymentPurposeCode|FXNT|
|PaymentPurposeCode|ADMG|
|PaymentPurposeCode|ADVA|
|PaymentPurposeCode|BCDM|
|PaymentPurposeCode|BCFG|
|PaymentPurposeCode|BLDM|
|PaymentPurposeCode|BNET|
|PaymentPurposeCode|CBFF|
|PaymentPurposeCode|CBFR|
|PaymentPurposeCode|CCRD|
|PaymentPurposeCode|CDBL|
|PaymentPurposeCode|CFEE|
|PaymentPurposeCode|CGDD|
|PaymentPurposeCode|CORT|
|PaymentPurposeCode|COST|
|PaymentPurposeCode|CPKC|
|PaymentPurposeCode|DCRD|
|PaymentPurposeCode|DSMT|
|PaymentPurposeCode|DVPM|
|PaymentPurposeCode|EDUC|
|PaymentPurposeCode|FACT|
|PaymentPurposeCode|FAND|
|PaymentPurposeCode|FCPM|
|PaymentPurposeCode|FEES|
|PaymentPurposeCode|GIFT|
|PaymentPurposeCode|GOVT|
|PaymentPurposeCode|ICCP|
|PaymentPurposeCode|IDCP|
|PaymentPurposeCode|IHRP|
|PaymentPurposeCode|INSM|
|PaymentPurposeCode|IVPT|
|PaymentPurposeCode|MCDM|
|PaymentPurposeCode|MCFG|
|PaymentPurposeCode|MSVC|
|PaymentPurposeCode|NOWS|
|PaymentPurposeCode|OCDM|
|PaymentPurposeCode|OCFG|
|PaymentPurposeCode|OFEE|
|PaymentPurposeCode|OTHR|
|PaymentPurposeCode|PADD|
|PaymentPurposeCode|PTSP|
|PaymentPurposeCode|RCKE|
|PaymentPurposeCode|RCPT|
|PaymentPurposeCode|REBT|
|PaymentPurposeCode|REFU|
|PaymentPurposeCode|RENT|
|PaymentPurposeCode|REOD|
|PaymentPurposeCode|RIMB|
|PaymentPurposeCode|RPNT|
|PaymentPurposeCode|RRBN|
|PaymentPurposeCode|RRCT|
|PaymentPurposeCode|RRTP|
|PaymentPurposeCode|RVPM|
|PaymentPurposeCode|SLPI|
|PaymentPurposeCode|SPLT|
|PaymentPurposeCode|STDY|
|PaymentPurposeCode|TBAN|
|PaymentPurposeCode|TBIL|
|PaymentPurposeCode|TCSC|
|PaymentPurposeCode|TELI|
|PaymentPurposeCode|TMPG|
|PaymentPurposeCode|TPRI|
|PaymentPurposeCode|TPRP|
|PaymentPurposeCode|TRNC|
|PaymentPurposeCode|TRVC|
|PaymentPurposeCode|WEBI|
|PaymentPurposeCode|IPAY|
|PaymentPurposeCode|IPCA|
|PaymentPurposeCode|IPDO|
|PaymentPurposeCode|IPEA|
|PaymentPurposeCode|IPEC|
|PaymentPurposeCode|IPEW|
|PaymentPurposeCode|IPPS|
|PaymentPurposeCode|IPRT|
|PaymentPurposeCode|IPU2|
|PaymentPurposeCode|IPUW|
|PaymentPurposeCode|ANNI|
|PaymentPurposeCode|CAFI|
|PaymentPurposeCode|CFDI|
|PaymentPurposeCode|CMDT|
|PaymentPurposeCode|DERI|
|PaymentPurposeCode|DIVD|
|PaymentPurposeCode|FREX|
|PaymentPurposeCode|HEDG|
|PaymentPurposeCode|INVS|
|PaymentPurposeCode|PRME|
|PaymentPurposeCode|SAVG|
|PaymentPurposeCode|SECU|
|PaymentPurposeCode|SEPI|
|PaymentPurposeCode|TREA|
|PaymentPurposeCode|UNIT|
|PaymentPurposeCode|FNET|
|PaymentPurposeCode|FUTR|
|PaymentPurposeCode|ANTS|
|PaymentPurposeCode|CVCF|
|PaymentPurposeCode|DMEQ|
|PaymentPurposeCode|DNTS|
|PaymentPurposeCode|HLTC|
|PaymentPurposeCode|HLTI|
|PaymentPurposeCode|HSPC|
|PaymentPurposeCode|ICRF|
|PaymentPurposeCode|LTCF|
|PaymentPurposeCode|MAFC|
|PaymentPurposeCode|MARF|
|PaymentPurposeCode|MDCS|
|PaymentPurposeCode|VIEW|
|PaymentPurposeCode|CDEP|
|PaymentPurposeCode|SWFP|
|PaymentPurposeCode|SWPP|
|PaymentPurposeCode|SWRS|
|PaymentPurposeCode|SWUF|
|PaymentPurposeCode|ADCS|
|PaymentPurposeCode|AEMP|
|PaymentPurposeCode|ALLW|
|PaymentPurposeCode|ALMY|
|PaymentPurposeCode|BBSC|
|PaymentPurposeCode|BECH|
|PaymentPurposeCode|BENE|
|PaymentPurposeCode|BONU|
|PaymentPurposeCode|CCHD|
|PaymentPurposeCode|COMM|
|PaymentPurposeCode|CSLP|
|PaymentPurposeCode|GFRP|
|PaymentPurposeCode|GVEA|
|PaymentPurposeCode|GVEB|
|PaymentPurposeCode|GVEC|
|PaymentPurposeCode|GVED|
|PaymentPurposeCode|GWLT|
|PaymentPurposeCode|HREC|
|PaymentPurposeCode|PAYR|
|PaymentPurposeCode|PEFC|
|PaymentPurposeCode|PENS|
|PaymentPurposeCode|PRCP|
|PaymentPurposeCode|RHBS|
|PaymentPurposeCode|SALA|
|PaymentPurposeCode|SPSP|
|PaymentPurposeCode|SSBE|
|PaymentPurposeCode|LBIN|
|PaymentPurposeCode|LCOL|
|PaymentPurposeCode|LFEE|
|PaymentPurposeCode|LMEQ|
|PaymentPurposeCode|LMFI|
|PaymentPurposeCode|LMRK|
|PaymentPurposeCode|LREB|
|PaymentPurposeCode|LREV|
|PaymentPurposeCode|LSFL|
|PaymentPurposeCode|ESTX|
|PaymentPurposeCode|FWLV|
|PaymentPurposeCode|GSTX|
|PaymentPurposeCode|HSTX|
|PaymentPurposeCode|INTX|
|PaymentPurposeCode|NITX|
|PaymentPurposeCode|PTXP|
|PaymentPurposeCode|RDTX|
|PaymentPurposeCode|TAXS|
|PaymentPurposeCode|VATX|
|PaymentPurposeCode|WHLD|
|PaymentPurposeCode|TAXR|
|PaymentPurposeCode|B112|
|PaymentPurposeCode|BR12|
|PaymentPurposeCode|TLRF|
|PaymentPurposeCode|TLRR|
|PaymentPurposeCode|AIRB|
|PaymentPurposeCode|BUSB|
|PaymentPurposeCode|FERB|
|PaymentPurposeCode|RLWY|
|PaymentPurposeCode|TRPT|
|PaymentPurposeCode|CBTV|
|PaymentPurposeCode|ELEC|
|PaymentPurposeCode|ENRG|
|PaymentPurposeCode|GASB|
|PaymentPurposeCode|NWCH|
|PaymentPurposeCode|NWCM|
|PaymentPurposeCode|OTLC|
|PaymentPurposeCode|PHON|
|PaymentPurposeCode|UBIL|
|PaymentPurposeCode|WTER|
|PaymentPurposeCode|BOND|
|PaymentPurposeCode|CABD|
|PaymentPurposeCode|CAEQ|
|PaymentPurposeCode|CBCR|
|PaymentPurposeCode|DBCR|
|PaymentPurposeCode|DICL|
|PaymentPurposeCode|EQTS|
|PaymentPurposeCode|FLCR|
|PaymentPurposeCode|EFTC|
|PaymentPurposeCode|EFTD|
|PaymentPurposeCode|MOMA|
|PaymentPurposeCode|RAPI|
|PaymentPurposeCode|GAMB|
|PaymentPurposeCode|LOTT|
|PaymentPurposeCode|AMEX|
|PaymentPurposeCode|SASW|
|PaymentPurposeCode|AUCO|
|PaymentPurposeCode|PCOM|
|PaymentPurposeCode|PDEP|
|PaymentPurposeCode|PLDS|
|PaymentPurposeCode|PLRF|
|PaymentPurposeCode|GAFA|
|PaymentPurposeCode|GAHO|
|PaymentPurposeCode|CPEN|
|PaymentPurposeCode|DEPD|
|PaymentPurposeCode|RETL|
|PaymentPurposeCode|DEBT|
|PaymentPurposeCode|CRYP|

<h2 id="tocS_OBTransaction6Detail">OBTransaction6Detail</h2>
<!-- backwards compatibility -->
<a id="schemaobtransaction6detail"></a>
<a id="schema_OBTransaction6Detail"></a>
<a id="tocSobtransaction6detail"></a>
<a id="tocsobtransaction6detail"></a>

```json
{
  "AccountId": "22289",
  "TransactionId": "string",
  "TransactionReference": "string",
  "StatementReference": [
    "002"
  ],
  "CreditDebitIndicator": "Credit",
  "Status": "BOOK",
  "TransactionMutability": "Mutable",
  "BookingDateTime": "1970-01-01T00:00:00Z",
  "ValueDateTime": "1970-01-01T00:00:00Z",
  "TransactionInformation": "string",
  "AddressLine": "string",
  "Amount": {
    "Amount": "1209.06",
    "Currency": "GBP"
  },
  "ChargeAmount": {
    "Amount": "1209.06",
    "Currency": "GBP"
  },
  "CurrencyExchange": {
    "SourceCurrency": "string",
    "TargetCurrency": "string",
    "UnitCurrency": "string",
    "ExchangeRate": 0,
    "ContractIdentification": "string",
    "QuotationDate": "1970-01-01T00:00:00Z",
    "InstructedAmount": {
      "Amount": "1209.06",
      "Currency": "GBP"
    }
  },
  "BankTransactionCode": {
    "Code": "string",
    "SubCode": "string"
  },
  "ProprietaryBankTransactionCode": {
    "Code": "string",
    "Issuer": "string"
  },
  "ExtendedProprietaryBankTransactionCodes": [
    {
      "Code": "string",
      "Issuer": "string",
      "Description": "string"
    }
  ],
  "Balance": {
    "CreditDebitIndicator": "Credit",
    "Type": "CLAV",
    "Amount": {
      "Amount": "1209.06",
      "Currency": "GBP"
    }
  },
  "MerchantDetails": {
    "MerchantName": "string",
    "MerchantCategoryCode": "stri"
  },
  "CreditorAgent": {
    "SchemeName": "UK.OBIE.BICFI",
    "Identification": "string",
    "Name": "Agent Name",
    "LEI": "IZ9Q00LZEVUKWCQY6X15",
    "PostalAddress": {
      "AddressType": "BIZZ",
      "Department": "Finance",
      "SubDepartment": "Payroll",
      "StreetName": "Bank Street",
      "BuildingNumber": "11",
      "BuildingName": "string",
      "Floor": "11",
      "UnitNumber": "A88",
      "Room": "Basement 03",
      "PostBox": "PO Box 123456",
      "TownLocationName": "London",
      "DistrictName": "Greater London",
      "CareOf": "Jane Smith",
      "PostCode": "EC2N 4AG",
      "TownName": "London",
      "CountrySubDivision": "string",
      "Country": "string",
      "AddressLine": [
        "string"
      ]
    }
  },
  "CreditorAccount": {
    "SchemeName": "string",
    "Identification": "80200112344562",
    "Name": "Jane Smith",
    "SecondaryIdentification": "87562298675897",
    "Proxy": {
      "Identification": "2360549017905188",
      "Code": "TELE",
      "Type": "string"
    }
  },
  "DebtorAgent": {
    "SchemeName": "UK.OBIE.BICFI",
    "Identification": "string",
    "Name": "Agent Name",
    "LEI": "IZ9Q00LZEVUKWCQY6X15",
    "PostalAddress": {
      "AddressType": "BIZZ",
      "Department": "Finance",
      "SubDepartment": "Payroll",
      "StreetName": "Bank Street",
      "BuildingNumber": "11",
      "BuildingName": "string",
      "Floor": "11",
      "UnitNumber": "A88",
      "Room": "Basement 03",
      "PostBox": "PO Box 123456",
      "TownLocationName": "London",
      "DistrictName": "Greater London",
      "CareOf": "Jane Smith",
      "PostCode": "EC2N 4AG",
      "TownName": "London",
      "CountrySubDivision": "string",
      "Country": "string",
      "AddressLine": [
        "string"
      ]
    }
  },
  "DebtorAccount": {
    "SchemeName": "string",
    "Identification": "80200112344562",
    "Name": "Jane Smith",
    "SecondaryIdentification": "87562298675897",
    "Proxy": {
      "Identification": "2360549017905188",
      "Code": "TELE",
      "Type": "string"
    }
  },
  "CardInstrument": {
    "CardSchemeName": "AmericanExpress",
    "AuthorisationType": "ConsumerDevice",
    "Name": "string",
    "Identification": "string"
  },
  "SupplementaryData": {},
  "CategoryPurposeCode": "BONU",
  "PaymentPurposeCode": "BKDF",
  "UltimateCreditor": {
    "Name": "string",
    "Identification": "string",
    "LEI": "IZ9Q00LZEVUKWCQY6X15",
    "SchemeName": "string",
    "PostalAddress": {
      "AddressType": "BIZZ",
      "Department": "Finance",
      "SubDepartment": "Payroll",
      "StreetName": "Bank Street",
      "BuildingNumber": "11",
      "BuildingName": "string",
      "Floor": "11",
      "UnitNumber": "A88",
      "Room": "Basement 03",
      "PostBox": "PO Box 123456",
      "TownLocationName": "London",
      "DistrictName": "Greater London",
      "CareOf": "Jane Smith",
      "PostCode": "EC2N 4AG",
      "TownName": "London",
      "CountrySubDivision": "string",
      "Country": "string",
      "AddressLine": [
        "string"
      ]
    }
  },
  "UltimateDebtor": {
    "Name": "string",
    "Identification": "string",
    "LEI": "IZ9Q00LZEVUKWCQY6X15",
    "SchemeName": "string",
    "PostalAddress": {
      "AddressType": "BIZZ",
      "Department": "Finance",
      "SubDepartment": "Payroll",
      "StreetName": "Bank Street",
      "BuildingNumber": "11",
      "BuildingName": "string",
      "Floor": "11",
      "UnitNumber": "A88",
      "Room": "Basement 03",
      "PostBox": "PO Box 123456",
      "TownLocationName": "London",
      "DistrictName": "Greater London",
      "CareOf": "Jane Smith",
      "PostCode": "EC2N 4AG",
      "TownName": "London",
      "CountrySubDivision": "string",
      "Country": "string",
      "AddressLine": [
        "string"
      ]
    }
  }
}
```

Provides further details on an entry in the report.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|[AccountId](#schemaaccountid)|true|none|A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.|
|TransactionId|[TransactionId](#schematransactionid)|false|none|Unique identifier for the transaction within a servicing institution. This identifier is both unique and immutable.|
|TransactionReference|[TransactionReference](#schematransactionreference)|false|none|Unique reference for the transaction. This reference is optionally populated, and may as an example be the FPID in the Faster Payments context.|
|StatementReference|[[StatementReference](#schemastatementreference)]|false|none|none|
|CreditDebitIndicator|[OBCreditDebitCode_1](#schemaobcreditdebitcode_1)|true|none|Indicates whether the transaction is a credit or a debit entry. <br /><br><br /><br>For a full list of enumeration values refer to `OBInternalCreditDebitCode` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)|
|Status|[ExternalEntryStatus1Code](#schemaexternalentrystatus1code)|true|none|Status of a transaction entry on the books of the account servicer. <br /><br>For a full list of enumeration values refer to `ExternalEntryStatus1Code` in *ISO_External_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)|
|TransactionMutability|[OBInternalTransactionMutability1Code](#schemaobinternaltransactionmutability1code)|false|none|Specifies the Mutability of the Transaction record. <br /><br>For a full list of enumeration values refer to `OBInternalTransactionMutability1Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)|
|BookingDateTime|[BookingDateTime](#schemabookingdatetime)|true|none|Date and time when a transaction entry is posted to an account on the account servicer's books.<br>Usage: Booking date is the expected booking date, unless the status is booked, in which case it is the actual booking date. All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|ValueDateTime|[ValueDateTime](#schemavaluedatetime)|false|none|Date and time at which assets become available to the account owner in case of a credit entry, or cease to be available to the account owner in case of a debit transaction entry.<br>Usage: If transaction entry status is pending and value date is present, then the value date refers to an expected/requested value date.<br>For transaction entries subject to availability/float and for which availability information is provided, the value date must not be used. In this case the availability component identifies the number of availability days. All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|TransactionInformation|[TransactionInformation](#schematransactioninformation)|false|none|Further details of the transaction. <br>This is the transaction narrative, which is unstructured text.|
|AddressLine|[AddressLine](#schemaaddressline)|false|none|Information that locates and identifies a specific address for a transaction entry, that is presented in free format text.|
|Amount|[OBActiveOrHistoricCurrencyAndAmount_9](#schemaobactiveorhistoriccurrencyandamount_9)|true|none|Amount of money in the cash transaction entry.|
|ChargeAmount|[OBActiveOrHistoricCurrencyAndAmount_10](#schemaobactiveorhistoriccurrencyandamount_10)|false|none|Transaction charges to be paid by the charge bearer.|
|CurrencyExchange|[OBCurrencyExchange5](#schemaobcurrencyexchange5)|false|none|Set of elements used to provide details on the currency exchange.|
|BankTransactionCode|[OBBankTransactionCodeStructure1](#schemaobbanktransactioncodestructure1)|false|none|Set of elements used to fully identify the type of underlying transaction resulting in an entry.|
|ProprietaryBankTransactionCode|[ProprietaryBankTransactionCodeStructure1](#schemaproprietarybanktransactioncodestructure1)|false|none|Set of elements to fully identify a proprietary bank transaction code.|
|ExtendedProprietaryBankTransactionCodes|[[OBExtendedProprietaryBankTransactionCode](#schemaobextendedproprietarybanktransactioncode)]|false|none|none|
|Balance|[OBTransactionCashBalance](#schemaobtransactioncashbalance)|false|none|Set of elements used to define the balance as a numerical representation of the net increases and decreases in an account after a transaction entry is applied to the account.|
|MerchantDetails|[OBMerchantDetails1](#schemaobmerchantdetails1)|false|none|Details of the merchant involved in the transaction.|
|CreditorAgent|[OBBranchAndFinancialInstitutionIdentification6_1](#schemaobbranchandfinancialinstitutionidentification6_1)|false|none|Financial institution servicing an account for the creditor.|
|CreditorAccount|[OBCashAccount6_0](#schemaobcashaccount6_0)|false|none|Unambiguous identification of the account of the creditor, in the case of a debit transaction.|
|DebtorAgent|[OBBranchAndFinancialInstitutionIdentification6_2](#schemaobbranchandfinancialinstitutionidentification6_2)|false|none|Financial institution servicing an account for the debtor.|
|DebtorAccount|[OBCashAccount6_1](#schemaobcashaccount6_1)|false|none|Unambiguous identification of the account of the debtor, in the case of a credit transaction.|
|CardInstrument|[OBTransactionCardInstrument1](#schemaobtransactioncardinstrument1)|false|none|Set of elements to describe the card instrument used in the transaction. <br /><br>For a full list of enumeration values refer to `OBInternalCardSchemeType1Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)|
|SupplementaryData|[OBSupplementaryData1](#schemaobsupplementarydata1)|false|none|Additional information that can not be captured in the structured fields and/or any other specific block.|
|CategoryPurposeCode|[ExternalCategoryPurpose1Code](#schemaexternalcategorypurpose1code)|false|none|Enumeration of codes that outlines the type of purpose behind a transaction, payment or risk.  For all enum values see `ExternalCategoryPurpose1Code` in *ISO_External_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)|
|PaymentPurposeCode|[OBExternalPurpose1Code](#schemaobexternalpurpose1code)|false|none|For a full list of enumeration values refer to `ExternalPurpose1Code` in *ISO_External_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)|
|UltimateCreditor|[OBUltimateCreditor1](#schemaobultimatecreditor1)|false|none|Ultimate party to which an amount of money is due.|
|UltimateDebtor|[OBUltimateDebtor1](#schemaobultimatedebtor1)|false|none|Ultimate party that owes an amount of money to the (ultimate) creditor.|

#### Enumerated Values

|Property|Value|
|---|---|
|CreditDebitIndicator|Credit|
|CreditDebitIndicator|Debit|
|Status|BOOK|
|Status|FUTR|
|Status|INFO|
|Status|PDNG|
|Status|RJCT|
|TransactionMutability|Mutable|
|TransactionMutability|Immutable|
|CategoryPurposeCode|BONU|
|CategoryPurposeCode|CASH|
|CategoryPurposeCode|CBLK|
|CategoryPurposeCode|CCRD|
|CategoryPurposeCode|CGWV|
|CategoryPurposeCode|CIPC|
|CategoryPurposeCode|CONC|
|CategoryPurposeCode|CORT|
|CategoryPurposeCode|DCRD|
|CategoryPurposeCode|DIVI|
|CategoryPurposeCode|DVPM|
|CategoryPurposeCode|EPAY|
|CategoryPurposeCode|FCDT|
|CategoryPurposeCode|FCIN|
|CategoryPurposeCode|FCOL|
|CategoryPurposeCode|GOVT|
|CategoryPurposeCode|GP2P|
|CategoryPurposeCode|HEDG|
|CategoryPurposeCode|ICCP|
|CategoryPurposeCode|IDCP|
|CategoryPurposeCode|INTC|
|CategoryPurposeCode|INTE|
|CategoryPurposeCode|LBOX|
|CategoryPurposeCode|LOAN|
|CategoryPurposeCode|MP2B|
|CategoryPurposeCode|MP2P|
|CategoryPurposeCode|OTHR|
|CategoryPurposeCode|PENS|
|CategoryPurposeCode|RPRE|
|CategoryPurposeCode|RRCT|
|CategoryPurposeCode|RVPM|
|CategoryPurposeCode|SALA|
|CategoryPurposeCode|SECU|
|CategoryPurposeCode|SSBE|
|CategoryPurposeCode|SUPP|
|CategoryPurposeCode|SWEP|
|CategoryPurposeCode|TAXS|
|CategoryPurposeCode|TOPG|
|CategoryPurposeCode|TRAD|
|CategoryPurposeCode|TREA|
|CategoryPurposeCode|VATX|
|CategoryPurposeCode|VOST|
|CategoryPurposeCode|WHLD|
|CategoryPurposeCode|ZABA|
|PaymentPurposeCode|BKDF|
|PaymentPurposeCode|BKFE|
|PaymentPurposeCode|BKFM|
|PaymentPurposeCode|BKIP|
|PaymentPurposeCode|BKPP|
|PaymentPurposeCode|CBLK|
|PaymentPurposeCode|CDCB|
|PaymentPurposeCode|CDCD|
|PaymentPurposeCode|CDCS|
|PaymentPurposeCode|CDDP|
|PaymentPurposeCode|CDOC|
|PaymentPurposeCode|CDQC|
|PaymentPurposeCode|ETUP|
|PaymentPurposeCode|FCOL|
|PaymentPurposeCode|MTUP|
|PaymentPurposeCode|ACCT|
|PaymentPurposeCode|CASH|
|PaymentPurposeCode|COLL|
|PaymentPurposeCode|CSDB|
|PaymentPurposeCode|DEPT|
|PaymentPurposeCode|INTC|
|PaymentPurposeCode|INTP|
|PaymentPurposeCode|LIMA|
|PaymentPurposeCode|NETT|
|PaymentPurposeCode|BFWD|
|PaymentPurposeCode|CCIR|
|PaymentPurposeCode|CCPC|
|PaymentPurposeCode|CCPM|
|PaymentPurposeCode|CCSM|
|PaymentPurposeCode|CRDS|
|PaymentPurposeCode|CRPR|
|PaymentPurposeCode|CRSP|
|PaymentPurposeCode|CRTL|
|PaymentPurposeCode|EQPT|
|PaymentPurposeCode|EQUS|
|PaymentPurposeCode|EXPT|
|PaymentPurposeCode|EXTD|
|PaymentPurposeCode|FIXI|
|PaymentPurposeCode|FWBC|
|PaymentPurposeCode|FWCC|
|PaymentPurposeCode|FWSB|
|PaymentPurposeCode|FWSC|
|PaymentPurposeCode|MARG|
|PaymentPurposeCode|MBSB|
|PaymentPurposeCode|MBSC|
|PaymentPurposeCode|MGCC|
|PaymentPurposeCode|MGSC|
|PaymentPurposeCode|OCCC|
|PaymentPurposeCode|OPBC|
|PaymentPurposeCode|OPCC|
|PaymentPurposeCode|OPSB|
|PaymentPurposeCode|OPSC|
|PaymentPurposeCode|OPTN|
|PaymentPurposeCode|OTCD|
|PaymentPurposeCode|REPO|
|PaymentPurposeCode|RPBC|
|PaymentPurposeCode|RPCC|
|PaymentPurposeCode|RPSB|
|PaymentPurposeCode|RPSC|
|PaymentPurposeCode|RVPO|
|PaymentPurposeCode|SBSC|
|PaymentPurposeCode|SCIE|
|PaymentPurposeCode|SCIR|
|PaymentPurposeCode|SCRP|
|PaymentPurposeCode|SHBC|
|PaymentPurposeCode|SHCC|
|PaymentPurposeCode|SHSL|
|PaymentPurposeCode|SLEB|
|PaymentPurposeCode|SLOA|
|PaymentPurposeCode|SWBC|
|PaymentPurposeCode|SWCC|
|PaymentPurposeCode|SWPT|
|PaymentPurposeCode|SWSB|
|PaymentPurposeCode|SWSC|
|PaymentPurposeCode|TBAS|
|PaymentPurposeCode|TBBC|
|PaymentPurposeCode|TBCC|
|PaymentPurposeCode|TRCP|
|PaymentPurposeCode|AGRT|
|PaymentPurposeCode|AREN|
|PaymentPurposeCode|BEXP|
|PaymentPurposeCode|BOCE|
|PaymentPurposeCode|COMC|
|PaymentPurposeCode|CPYR|
|PaymentPurposeCode|GDDS|
|PaymentPurposeCode|GDSV|
|PaymentPurposeCode|GSCB|
|PaymentPurposeCode|LICF|
|PaymentPurposeCode|MP2B|
|PaymentPurposeCode|POPE|
|PaymentPurposeCode|ROYA|
|PaymentPurposeCode|SCVE|
|PaymentPurposeCode|SERV|
|PaymentPurposeCode|SUBS|
|PaymentPurposeCode|SUPP|
|PaymentPurposeCode|TRAD|
|PaymentPurposeCode|CHAR|
|PaymentPurposeCode|COMT|
|PaymentPurposeCode|MP2P|
|PaymentPurposeCode|ECPG|
|PaymentPurposeCode|ECPR|
|PaymentPurposeCode|ECPU|
|PaymentPurposeCode|EPAY|
|PaymentPurposeCode|CLPR|
|PaymentPurposeCode|COMP|
|PaymentPurposeCode|DBTC|
|PaymentPurposeCode|GOVI|
|PaymentPurposeCode|HLRP|
|PaymentPurposeCode|HLST|
|PaymentPurposeCode|INPC|
|PaymentPurposeCode|INPR|
|PaymentPurposeCode|INSC|
|PaymentPurposeCode|INSU|
|PaymentPurposeCode|INTE|
|PaymentPurposeCode|LBRI|
|PaymentPurposeCode|LIFI|
|PaymentPurposeCode|LOAN|
|PaymentPurposeCode|LOAR|
|PaymentPurposeCode|PENO|
|PaymentPurposeCode|PPTI|
|PaymentPurposeCode|RELG|
|PaymentPurposeCode|RINP|
|PaymentPurposeCode|TRFD|
|PaymentPurposeCode|FORW|
|PaymentPurposeCode|FXNT|
|PaymentPurposeCode|ADMG|
|PaymentPurposeCode|ADVA|
|PaymentPurposeCode|BCDM|
|PaymentPurposeCode|BCFG|
|PaymentPurposeCode|BLDM|
|PaymentPurposeCode|BNET|
|PaymentPurposeCode|CBFF|
|PaymentPurposeCode|CBFR|
|PaymentPurposeCode|CCRD|
|PaymentPurposeCode|CDBL|
|PaymentPurposeCode|CFEE|
|PaymentPurposeCode|CGDD|
|PaymentPurposeCode|CORT|
|PaymentPurposeCode|COST|
|PaymentPurposeCode|CPKC|
|PaymentPurposeCode|DCRD|
|PaymentPurposeCode|DSMT|
|PaymentPurposeCode|DVPM|
|PaymentPurposeCode|EDUC|
|PaymentPurposeCode|FACT|
|PaymentPurposeCode|FAND|
|PaymentPurposeCode|FCPM|
|PaymentPurposeCode|FEES|
|PaymentPurposeCode|GIFT|
|PaymentPurposeCode|GOVT|
|PaymentPurposeCode|ICCP|
|PaymentPurposeCode|IDCP|
|PaymentPurposeCode|IHRP|
|PaymentPurposeCode|INSM|
|PaymentPurposeCode|IVPT|
|PaymentPurposeCode|MCDM|
|PaymentPurposeCode|MCFG|
|PaymentPurposeCode|MSVC|
|PaymentPurposeCode|NOWS|
|PaymentPurposeCode|OCDM|
|PaymentPurposeCode|OCFG|
|PaymentPurposeCode|OFEE|
|PaymentPurposeCode|OTHR|
|PaymentPurposeCode|PADD|
|PaymentPurposeCode|PTSP|
|PaymentPurposeCode|RCKE|
|PaymentPurposeCode|RCPT|
|PaymentPurposeCode|REBT|
|PaymentPurposeCode|REFU|
|PaymentPurposeCode|RENT|
|PaymentPurposeCode|REOD|
|PaymentPurposeCode|RIMB|
|PaymentPurposeCode|RPNT|
|PaymentPurposeCode|RRBN|
|PaymentPurposeCode|RRCT|
|PaymentPurposeCode|RRTP|
|PaymentPurposeCode|RVPM|
|PaymentPurposeCode|SLPI|
|PaymentPurposeCode|SPLT|
|PaymentPurposeCode|STDY|
|PaymentPurposeCode|TBAN|
|PaymentPurposeCode|TBIL|
|PaymentPurposeCode|TCSC|
|PaymentPurposeCode|TELI|
|PaymentPurposeCode|TMPG|
|PaymentPurposeCode|TPRI|
|PaymentPurposeCode|TPRP|
|PaymentPurposeCode|TRNC|
|PaymentPurposeCode|TRVC|
|PaymentPurposeCode|WEBI|
|PaymentPurposeCode|IPAY|
|PaymentPurposeCode|IPCA|
|PaymentPurposeCode|IPDO|
|PaymentPurposeCode|IPEA|
|PaymentPurposeCode|IPEC|
|PaymentPurposeCode|IPEW|
|PaymentPurposeCode|IPPS|
|PaymentPurposeCode|IPRT|
|PaymentPurposeCode|IPU2|
|PaymentPurposeCode|IPUW|
|PaymentPurposeCode|ANNI|
|PaymentPurposeCode|CAFI|
|PaymentPurposeCode|CFDI|
|PaymentPurposeCode|CMDT|
|PaymentPurposeCode|DERI|
|PaymentPurposeCode|DIVD|
|PaymentPurposeCode|FREX|
|PaymentPurposeCode|HEDG|
|PaymentPurposeCode|INVS|
|PaymentPurposeCode|PRME|
|PaymentPurposeCode|SAVG|
|PaymentPurposeCode|SECU|
|PaymentPurposeCode|SEPI|
|PaymentPurposeCode|TREA|
|PaymentPurposeCode|UNIT|
|PaymentPurposeCode|FNET|
|PaymentPurposeCode|FUTR|
|PaymentPurposeCode|ANTS|
|PaymentPurposeCode|CVCF|
|PaymentPurposeCode|DMEQ|
|PaymentPurposeCode|DNTS|
|PaymentPurposeCode|HLTC|
|PaymentPurposeCode|HLTI|
|PaymentPurposeCode|HSPC|
|PaymentPurposeCode|ICRF|
|PaymentPurposeCode|LTCF|
|PaymentPurposeCode|MAFC|
|PaymentPurposeCode|MARF|
|PaymentPurposeCode|MDCS|
|PaymentPurposeCode|VIEW|
|PaymentPurposeCode|CDEP|
|PaymentPurposeCode|SWFP|
|PaymentPurposeCode|SWPP|
|PaymentPurposeCode|SWRS|
|PaymentPurposeCode|SWUF|
|PaymentPurposeCode|ADCS|
|PaymentPurposeCode|AEMP|
|PaymentPurposeCode|ALLW|
|PaymentPurposeCode|ALMY|
|PaymentPurposeCode|BBSC|
|PaymentPurposeCode|BECH|
|PaymentPurposeCode|BENE|
|PaymentPurposeCode|BONU|
|PaymentPurposeCode|CCHD|
|PaymentPurposeCode|COMM|
|PaymentPurposeCode|CSLP|
|PaymentPurposeCode|GFRP|
|PaymentPurposeCode|GVEA|
|PaymentPurposeCode|GVEB|
|PaymentPurposeCode|GVEC|
|PaymentPurposeCode|GVED|
|PaymentPurposeCode|GWLT|
|PaymentPurposeCode|HREC|
|PaymentPurposeCode|PAYR|
|PaymentPurposeCode|PEFC|
|PaymentPurposeCode|PENS|
|PaymentPurposeCode|PRCP|
|PaymentPurposeCode|RHBS|
|PaymentPurposeCode|SALA|
|PaymentPurposeCode|SPSP|
|PaymentPurposeCode|SSBE|
|PaymentPurposeCode|LBIN|
|PaymentPurposeCode|LCOL|
|PaymentPurposeCode|LFEE|
|PaymentPurposeCode|LMEQ|
|PaymentPurposeCode|LMFI|
|PaymentPurposeCode|LMRK|
|PaymentPurposeCode|LREB|
|PaymentPurposeCode|LREV|
|PaymentPurposeCode|LSFL|
|PaymentPurposeCode|ESTX|
|PaymentPurposeCode|FWLV|
|PaymentPurposeCode|GSTX|
|PaymentPurposeCode|HSTX|
|PaymentPurposeCode|INTX|
|PaymentPurposeCode|NITX|
|PaymentPurposeCode|PTXP|
|PaymentPurposeCode|RDTX|
|PaymentPurposeCode|TAXS|
|PaymentPurposeCode|VATX|
|PaymentPurposeCode|WHLD|
|PaymentPurposeCode|TAXR|
|PaymentPurposeCode|B112|
|PaymentPurposeCode|BR12|
|PaymentPurposeCode|TLRF|
|PaymentPurposeCode|TLRR|
|PaymentPurposeCode|AIRB|
|PaymentPurposeCode|BUSB|
|PaymentPurposeCode|FERB|
|PaymentPurposeCode|RLWY|
|PaymentPurposeCode|TRPT|
|PaymentPurposeCode|CBTV|
|PaymentPurposeCode|ELEC|
|PaymentPurposeCode|ENRG|
|PaymentPurposeCode|GASB|
|PaymentPurposeCode|NWCH|
|PaymentPurposeCode|NWCM|
|PaymentPurposeCode|OTLC|
|PaymentPurposeCode|PHON|
|PaymentPurposeCode|UBIL|
|PaymentPurposeCode|WTER|
|PaymentPurposeCode|BOND|
|PaymentPurposeCode|CABD|
|PaymentPurposeCode|CAEQ|
|PaymentPurposeCode|CBCR|
|PaymentPurposeCode|DBCR|
|PaymentPurposeCode|DICL|
|PaymentPurposeCode|EQTS|
|PaymentPurposeCode|FLCR|
|PaymentPurposeCode|EFTC|
|PaymentPurposeCode|EFTD|
|PaymentPurposeCode|MOMA|
|PaymentPurposeCode|RAPI|
|PaymentPurposeCode|GAMB|
|PaymentPurposeCode|LOTT|
|PaymentPurposeCode|AMEX|
|PaymentPurposeCode|SASW|
|PaymentPurposeCode|AUCO|
|PaymentPurposeCode|PCOM|
|PaymentPurposeCode|PDEP|
|PaymentPurposeCode|PLDS|
|PaymentPurposeCode|PLRF|
|PaymentPurposeCode|GAFA|
|PaymentPurposeCode|GAHO|
|PaymentPurposeCode|CPEN|
|PaymentPurposeCode|DEPD|
|PaymentPurposeCode|RETL|
|PaymentPurposeCode|DEBT|
|PaymentPurposeCode|CRYP|

<h2 id="tocS_OBTransactionCardInstrument1">OBTransactionCardInstrument1</h2>
<!-- backwards compatibility -->
<a id="schemaobtransactioncardinstrument1"></a>
<a id="schema_OBTransactionCardInstrument1"></a>
<a id="tocSobtransactioncardinstrument1"></a>
<a id="tocsobtransactioncardinstrument1"></a>

```json
{
  "CardSchemeName": "AmericanExpress",
  "AuthorisationType": "ConsumerDevice",
  "Name": "string",
  "Identification": "string"
}
```

Set of elements to describe the card instrument used in the transaction. <br />
For a full list of enumeration values refer to `OBInternalCardSchemeType1Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CardSchemeName|string|true|none|Name of the card scheme. <br /><br>For a full list of enumeration values refer to `OBInternalCardSchemeType1Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)|
|AuthorisationType|string|false|none|The card authorisation type. <br /><br>For a full list of enumeration values refer to `OBInternalCardAuthorisationType1Code` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)|
|Name|string|false|none|Name of the cardholder using the card instrument.|
|Identification|string|false|none|Identification assigned by an institution to identify the card instrument used in the transaction. This identification is known by the account owner, and may be masked.|

#### Enumerated Values

|Property|Value|
|---|---|
|CardSchemeName|AmericanExpress|
|CardSchemeName|Diners|
|CardSchemeName|Discover|
|CardSchemeName|MasterCard|
|CardSchemeName|VISA|
|AuthorisationType|ConsumerDevice|
|AuthorisationType|Contactless|
|AuthorisationType|None|
|AuthorisationType|PIN|

<h2 id="tocS_OBTransactionCashBalance">OBTransactionCashBalance</h2>
<!-- backwards compatibility -->
<a id="schemaobtransactioncashbalance"></a>
<a id="schema_OBTransactionCashBalance"></a>
<a id="tocSobtransactioncashbalance"></a>
<a id="tocsobtransactioncashbalance"></a>

```json
{
  "CreditDebitIndicator": "Credit",
  "Type": "CLAV",
  "Amount": {
    "Amount": "1209.06",
    "Currency": "GBP"
  }
}
```

Set of elements used to define the balance as a numerical representation of the net increases and decreases in an account after a transaction entry is applied to the account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CreditDebitIndicator|[OBCreditDebitCode_2](#schemaobcreditdebitcode_2)|true|none|Indicates whether the balance is a credit or a debit balance. <br>Usage: A zero balance is considered to be a credit balance.<br><br /><br>For a full list of enumeration values refer to `OBInternalCreditDebitCode` in *OB_Internal_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets)|
|Type|[OBBalanceType1Code](#schemaobbalancetype1code)|true|none|Balance type, in a coded form. <br /> For a full list of enumeration values refer to `ExternalBalanceType1Code` in *ISO_External_CodeSet* [here](https://github.com/OpenBankingUK/External_Internal_CodeSets).|
|Amount|object|true|none|Amount of money of the cash balance after a transaction entry is applied to the account..|

#### Enumerated Values

|Property|Value|
|---|---|
|CreditDebitIndicator|Credit|
|CreditDebitIndicator|Debit|
|Type|CLAV|
|Type|CLBD|
|Type|FWAV|
|Type|INFO|
|Type|ITAV|
|Type|ITBD|
|Type|OPAV|
|Type|OPBD|
|Type|PRCD|
|Type|XPCD|

<h2 id="tocS_OBRisk2">OBRisk2</h2>
<!-- backwards compatibility -->
<a id="schemaobrisk2"></a>
<a id="schema_OBRisk2"></a>
<a id="tocSobrisk2"></a>
<a id="tocsobrisk2"></a>

```json
{}
```

The Risk section is sent by the initiating party to the ASPSP. <br />
It is used to specify additional details for risk scoring for Account Info.

<h2 id="tocS_OB_Amount1_0">OB_Amount1_0</h2>
<!-- backwards compatibility -->
<a id="schemaob_amount1_0"></a>
<a id="schema_OB_Amount1_0"></a>
<a id="tocSob_amount1_0"></a>
<a id="tocsob_amount1_0"></a>

```json
"string"
```

Cap amount charged for a fee/charge

<h2 id="tocS_OB_Amount1_1">OB_Amount1_1</h2>
<!-- backwards compatibility -->
<a id="schemaob_amount1_1"></a>
<a id="schema_OB_Amount1_1"></a>
<a id="tocSob_amount1_1"></a>
<a id="tocsob_amount1_1"></a>

```json
"string"
```

Every additional tranche of an overdraft balance to which an overdraft fee is applied

<h2 id="tocS_OB_Amount1_2">OB_Amount1_2</h2>
<!-- backwards compatibility -->
<a id="schemaob_amount1_2"></a>
<a id="schema_OB_Amount1_2"></a>
<a id="tocSob_amount1_2"></a>
<a id="tocsob_amount1_2"></a>

```json
"string"
```

Amount charged for an overdraft fee/charge (where it is charged in terms of an amount rather than a rate)

<h2 id="tocS_OB_Amount1_3">OB_Amount1_3</h2>
<!-- backwards compatibility -->
<a id="schemaob_amount1_3"></a>
<a id="schema_OB_Amount1_3"></a>
<a id="tocSob_amount1_3"></a>
<a id="tocsob_amount1_3"></a>

```json
"string"
```

Fee Amount charged for a fee/charge (where it is charged in terms of an amount rather than a rate)

<h2 id="tocS_OB_Amount1_4">OB_Amount1_4</h2>
<!-- backwards compatibility -->
<a id="schemaob_amount1_4"></a>
<a id="schema_OB_Amount1_4"></a>
<a id="tocSob_amount1_4"></a>
<a id="tocsob_amount1_4"></a>

```json
"string"
```

Cap amount charged for a fee/charge (where it is charged in terms of an amount rather than a rate)

<h2 id="tocS_OB_CodeMnemonic">OB_CodeMnemonic</h2>
<!-- backwards compatibility -->
<a id="schemaob_codemnemonic"></a>
<a id="schema_OB_CodeMnemonic"></a>
<a id="tocSob_codemnemonic"></a>
<a id="tocsob_codemnemonic"></a>

```json
"string"
```

The four letter Mnemonic used within an XML file to identify a code

<h2 id="tocS_OB_FeeCategory1Code">OB_FeeCategory1Code</h2>
<!-- backwards compatibility -->
<a id="schemaob_feecategory1code"></a>
<a id="schema_OB_FeeCategory1Code"></a>
<a id="tocSob_feecategory1code"></a>
<a id="tocsob_feecategory1code"></a>

```json
"FCOT"
```

Categorisation of fees and charges into standard categories.

<h2 id="tocS_OB_FeeFrequency1Code_0">OB_FeeFrequency1Code_0</h2>
<!-- backwards compatibility -->
<a id="schemaob_feefrequency1code_0"></a>
<a id="schema_OB_FeeFrequency1Code_0"></a>
<a id="tocSob_feefrequency1code_0"></a>
<a id="tocsob_feefrequency1code_0"></a>

```json
"FEAC"
```

Frequency at which the overdraft charge is applied to the account

<h2 id="tocS_OB_FeeFrequency1Code_1">OB_FeeFrequency1Code_1</h2>
<!-- backwards compatibility -->
<a id="schemaob_feefrequency1code_1"></a>
<a id="schema_OB_FeeFrequency1Code_1"></a>
<a id="tocSob_feefrequency1code_1"></a>
<a id="tocsob_feefrequency1code_1"></a>

```json
"FEAC"
```

How often is the overdraft fee/charge calculated for the account.

<h2 id="tocS_OB_FeeFrequency1Code_2">OB_FeeFrequency1Code_2</h2>
<!-- backwards compatibility -->
<a id="schemaob_feefrequency1code_2"></a>
<a id="schema_OB_FeeFrequency1Code_2"></a>
<a id="tocSob_feefrequency1code_2"></a>
<a id="tocsob_feefrequency1code_2"></a>

```json
"FEAC"
```

How frequently the fee/charge is applied to the account

<h2 id="tocS_OB_FeeFrequency1Code_3">OB_FeeFrequency1Code_3</h2>
<!-- backwards compatibility -->
<a id="schemaob_feefrequency1code_3"></a>
<a id="schema_OB_FeeFrequency1Code_3"></a>
<a id="tocSob_feefrequency1code_3"></a>
<a id="tocsob_feefrequency1code_3"></a>

```json
"FEAC"
```

How frequently the fee/charge is calculated

<h2 id="tocS_OB_FeeFrequency1Code_4">OB_FeeFrequency1Code_4</h2>
<!-- backwards compatibility -->
<a id="schemaob_feefrequency1code_4"></a>
<a id="schema_OB_FeeFrequency1Code_4"></a>
<a id="tocSob_feefrequency1code_4"></a>
<a id="tocsob_feefrequency1code_4"></a>

```json
"FEAC"
```

Period e.g. day, week, month etc. for which the fee/charge is capped

<h2 id="tocS_OB_FeeType1Code">OB_FeeType1Code</h2>
<!-- backwards compatibility -->
<a id="schemaob_feetype1code"></a>
<a id="schema_OB_FeeType1Code"></a>
<a id="tocSob_feetype1code"></a>
<a id="tocsob_feetype1code"></a>

```json
"FEPF"
```

Fee/Charge Type

<h2 id="tocS_OB_InterestCalculationMethod1Code">OB_InterestCalculationMethod1Code</h2>
<!-- backwards compatibility -->
<a id="schemaob_interestcalculationmethod1code"></a>
<a id="schema_OB_InterestCalculationMethod1Code"></a>
<a id="tocSob_interestcalculationmethod1code"></a>
<a id="tocsob_interestcalculationmethod1code"></a>

```json
"ITCO"
```

Methods of calculating interest

<h2 id="tocS_OB_InterestFixedVariableType1Code">OB_InterestFixedVariableType1Code</h2>
<!-- backwards compatibility -->
<a id="schemaob_interestfixedvariabletype1code"></a>
<a id="schema_OB_InterestFixedVariableType1Code"></a>
<a id="tocSob_interestfixedvariabletype1code"></a>
<a id="tocsob_interestfixedvariabletype1code"></a>

```json
"INFI"
```

Type of interest rate, Fixed or Variable

<h2 id="tocS_OB_InterestRateType1Code_0">OB_InterestRateType1Code_0</h2>
<!-- backwards compatibility -->
<a id="schemaob_interestratetype1code_0"></a>
<a id="schema_OB_InterestRateType1Code_0"></a>
<a id="tocSob_interestratetype1code_0"></a>
<a id="tocsob_interestratetype1code_0"></a>

```json
"INBB"
```

Rate type for overdraft fee/charge (where it is charged in terms of a rate rather than an amount)

<h2 id="tocS_OB_InterestRateType1Code_1">OB_InterestRateType1Code_1</h2>
<!-- backwards compatibility -->
<a id="schemaob_interestratetype1code_1"></a>
<a id="schema_OB_InterestRateType1Code_1"></a>
<a id="tocSob_interestratetype1code_1"></a>
<a id="tocsob_interestratetype1code_1"></a>

```json
"INBB"
```

Rate type for Fee/Charge (where it is charged in terms of a rate rather than an amount)

<h2 id="tocS_OB_MinMaxType1Code">OB_MinMaxType1Code</h2>
<!-- backwards compatibility -->
<a id="schemaob_minmaxtype1code"></a>
<a id="schema_OB_MinMaxType1Code"></a>
<a id="tocSob_minmaxtype1code"></a>
<a id="tocsob_minmaxtype1code"></a>

```json
"FMMN"
```

Min Max type

<h2 id="tocS_OB_OtherCodeType1_0">OB_OtherCodeType1_0</h2>
<!-- backwards compatibility -->
<a id="schemaob_othercodetype1_0"></a>
<a id="schema_OB_OtherCodeType1_0"></a>
<a id="tocSob_othercodetype1_0"></a>
<a id="tocsob_othercodetype1_0"></a>

```json
{
  "Code": "string",
  "Name": "string",
  "Description": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Code|[OB_CodeMnemonic](#schemaob_codemnemonic)|false|none|The four letter Mnemonic used within an XML file to identify a code|
|Name|[Name_4](#schemaname_4)|true|none|Long name associated with the code|
|Description|[Description_3](#schemadescription_3)|true|none|Description to describe the purpose of the code|

<h2 id="tocS_OB_OtherCodeType1_1">OB_OtherCodeType1_1</h2>
<!-- backwards compatibility -->
<a id="schemaob_othercodetype1_1"></a>
<a id="schema_OB_OtherCodeType1_1"></a>
<a id="tocSob_othercodetype1_1"></a>
<a id="tocsob_othercodetype1_1"></a>

```json
{
  "Code": "string",
  "Name": "string",
  "Description": "string"
}
```

Other application frequencies that are not available in the standard code list

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Code|[OB_CodeMnemonic](#schemaob_codemnemonic)|false|none|The four letter Mnemonic used within an XML file to identify a code|
|Name|[Name_4](#schemaname_4)|true|none|Long name associated with the code|
|Description|[Description_3](#schemadescription_3)|true|none|Description to describe the purpose of the code|

<h2 id="tocS_OB_OtherCodeType1_2">OB_OtherCodeType1_2</h2>
<!-- backwards compatibility -->
<a id="schemaob_othercodetype1_2"></a>
<a id="schema_OB_OtherCodeType1_2"></a>
<a id="tocSob_othercodetype1_2"></a>
<a id="tocsob_othercodetype1_2"></a>

```json
{
  "Code": "string",
  "Name": "string",
  "Description": "string"
}
```

Other calculation frequency which is not available in the standard code set.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Code|[OB_CodeMnemonic](#schemaob_codemnemonic)|false|none|The four letter Mnemonic used within an XML file to identify a code|
|Name|[Name_4](#schemaname_4)|true|none|Long name associated with the code|
|Description|[Description_3](#schemadescription_3)|true|none|Description to describe the purpose of the code|

<h2 id="tocS_OB_OtherCodeType1_3">OB_OtherCodeType1_3</h2>
<!-- backwards compatibility -->
<a id="schemaob_othercodetype1_3"></a>
<a id="schema_OB_OtherCodeType1_3"></a>
<a id="tocSob_othercodetype1_3"></a>
<a id="tocsob_othercodetype1_3"></a>

```json
{
  "Code": "string",
  "Name": "string",
  "Description": "string"
}
```

Other Fee type which is not available in the standard code set

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Code|[OB_CodeMnemonic](#schemaob_codemnemonic)|false|none|The four letter Mnemonic used within an XML file to identify a code|
|Name|[Name_4](#schemaname_4)|true|none|Long name associated with the code|
|Description|[Description_3](#schemadescription_3)|true|none|Description to describe the purpose of the code|

<h2 id="tocS_OB_OtherCodeType1_4">OB_OtherCodeType1_4</h2>
<!-- backwards compatibility -->
<a id="schemaob_othercodetype1_4"></a>
<a id="schema_OB_OtherCodeType1_4"></a>
<a id="tocSob_othercodetype1_4"></a>
<a id="tocsob_othercodetype1_4"></a>

```json
{
  "Code": "string",
  "Name": "string",
  "Description": "string"
}
```

Other fee rate type code which is not available in the standard code set

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Code|[OB_CodeMnemonic](#schemaob_codemnemonic)|false|none|The four letter Mnemonic used within an XML file to identify a code|
|Name|[Name_4](#schemaname_4)|true|none|Long name associated with the code|
|Description|[Description_3](#schemadescription_3)|true|none|Description to describe the purpose of the code|

<h2 id="tocS_OB_OtherCodeType1_5">OB_OtherCodeType1_5</h2>
<!-- backwards compatibility -->
<a id="schemaob_othercodetype1_5"></a>
<a id="schema_OB_OtherCodeType1_5"></a>
<a id="tocSob_othercodetype1_5"></a>
<a id="tocsob_othercodetype1_5"></a>

```json
{
  "Code": "string",
  "Name": "string",
  "Description": "string"
}
```

Other fee rate type which is not in the standard rate type list

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Code|[OB_CodeMnemonic](#schemaob_codemnemonic)|false|none|The four letter Mnemonic used within an XML file to identify a code|
|Name|[Name_4](#schemaname_4)|true|none|Long name associated with the code|
|Description|[Description_3](#schemadescription_3)|true|none|Description to describe the purpose of the code|

<h2 id="tocS_OB_OtherCodeType1_6">OB_OtherCodeType1_6</h2>
<!-- backwards compatibility -->
<a id="schemaob_othercodetype1_6"></a>
<a id="schema_OB_OtherCodeType1_6"></a>
<a id="tocSob_othercodetype1_6"></a>
<a id="tocsob_othercodetype1_6"></a>

```json
{
  "Code": "string",
  "Name": "string",
  "Description": "string"
}
```

Other application frequencies not covered in the standard code list

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Code|[OB_CodeMnemonic](#schemaob_codemnemonic)|false|none|The four letter Mnemonic used within an XML file to identify a code|
|Name|[Name_4](#schemaname_4)|true|none|Long name associated with the code|
|Description|[Description_3](#schemadescription_3)|true|none|Description to describe the purpose of the code|

<h2 id="tocS_OB_OtherCodeType1_7">OB_OtherCodeType1_7</h2>
<!-- backwards compatibility -->
<a id="schemaob_othercodetype1_7"></a>
<a id="schema_OB_OtherCodeType1_7"></a>
<a id="tocSob_othercodetype1_7"></a>
<a id="tocsob_othercodetype1_7"></a>

```json
{
  "Code": "string",
  "Name": "string",
  "Description": "string"
}
```

Other calculation frequency which is not available in standard code set.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Code|[OB_CodeMnemonic](#schemaob_codemnemonic)|false|none|The four letter Mnemonic used within an XML file to identify a code|
|Name|[Name_4](#schemaname_4)|true|none|Long name associated with the code|
|Description|[Description_3](#schemadescription_3)|true|none|Description to describe the purpose of the code|

<h2 id="tocS_OB_OtherCodeType1_8">OB_OtherCodeType1_8</h2>
<!-- backwards compatibility -->
<a id="schemaob_othercodetype1_8"></a>
<a id="schema_OB_OtherCodeType1_8"></a>
<a id="tocSob_othercodetype1_8"></a>
<a id="tocsob_othercodetype1_8"></a>

```json
{
  "Code": "string",
  "Name": "string",
  "Description": "string"
}
```

Other fee rate type which is not available in the standard code set

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Code|[OB_CodeMnemonic](#schemaob_codemnemonic)|false|none|The four letter Mnemonic used within an XML file to identify a code|
|Name|[Name_4](#schemaname_4)|true|none|Long name associated with the code|
|Description|[Description_3](#schemadescription_3)|true|none|Description to describe the purpose of the code|

<h2 id="tocS_OB_OtherFeeChargeDetailType">OB_OtherFeeChargeDetailType</h2>
<!-- backwards compatibility -->
<a id="schemaob_otherfeechargedetailtype"></a>
<a id="schema_OB_OtherFeeChargeDetailType"></a>
<a id="tocSob_otherfeechargedetailtype"></a>
<a id="tocsob_otherfeechargedetailtype"></a>

```json
{
  "Code": "string",
  "FeeCategory": "FCOT",
  "Name": "string",
  "Description": "string"
}
```

Other Fee/charge type which is not available in the standard code set

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Code|[OB_CodeMnemonic](#schemaob_codemnemonic)|false|none|The four letter Mnemonic used within an XML file to identify a code|
|FeeCategory|[OB_FeeCategory1Code](#schemaob_feecategory1code)|true|none|Categorisation of fees and charges into standard categories.|
|Name|[Name_4](#schemaname_4)|true|none|Long name associated with the code|
|Description|[Description_3](#schemadescription_3)|true|none|Description to describe the purpose of the code|

#### Enumerated Values

|Property|Value|
|---|---|
|FeeCategory|FCOT|
|FeeCategory|FCRE|
|FeeCategory|FCSV|

<h2 id="tocS_OB_OverdraftFeeType1Code">OB_OverdraftFeeType1Code</h2>
<!-- backwards compatibility -->
<a id="schemaob_overdraftfeetype1code"></a>
<a id="schema_OB_OverdraftFeeType1Code"></a>
<a id="tocSob_overdraftfeetype1code"></a>
<a id="tocsob_overdraftfeetype1code"></a>

```json
"FBAO"
```

Overdraft fee type

<h2 id="tocS_OB_Period1Code">OB_Period1Code</h2>
<!-- backwards compatibility -->
<a id="schemaob_period1code"></a>
<a id="schema_OB_Period1Code"></a>
<a id="tocSob_period1code"></a>
<a id="tocsob_period1code"></a>

```json
"PACT"
```

Period e.g. day, week, month etc. for which the fee/charge is capped

<h2 id="tocS_OB_Rate1_02">OB_Rate1_02</h2>
<!-- backwards compatibility -->
<a id="schemaob_rate1_02"></a>
<a id="schema_OB_Rate1_02"></a>
<a id="tocSob_rate1_02"></a>
<a id="tocsob_rate1_02"></a>

```json
"string"
```

Rate charged for overdraft fee/charge (where it is charged in terms of a rate rather than an amount)

<h2 id="tocS_OB_Rate1_12">OB_Rate1_12</h2>
<!-- backwards compatibility -->
<a id="schemaob_rate1_12"></a>
<a id="schema_OB_Rate1_12"></a>
<a id="tocSob_rate1_12"></a>
<a id="tocsob_rate1_12"></a>

```json
"string"
```

Rate charged for Fee/Charge (where it is charged in terms of a rate rather than an amount)

<h2 id="tocS_OpeningDate">OpeningDate</h2>
<!-- backwards compatibility -->
<a id="schemaopeningdate"></a>
<a id="schema_OpeningDate"></a>
<a id="tocSopeningdate"></a>
<a id="tocsopeningdate"></a>

```json
"1970-01-01T00:00:00Z"
```

Date on which the account and related basic services are effectively operational for the account owner. All dates in the JSON payloads are represented in ISO 8601 date-time format. 
All date-time fields in responses must include the timezone. An example is below:
2017-04-05T10:43:07+00:00

<h2 id="tocS_PartyId">PartyId</h2>
<!-- backwards compatibility -->
<a id="schemapartyid"></a>
<a id="schema_PartyId"></a>
<a id="tocSpartyid"></a>
<a id="tocspartyid"></a>

```json
"PXSIF023"
```

A unique and immutable identifier used to identify the customer resource. This identifier has no meaning to the account owner.

<h2 id="tocS_PartyNumber">PartyNumber</h2>
<!-- backwards compatibility -->
<a id="schemapartynumber"></a>
<a id="schema_PartyNumber"></a>
<a id="tocSpartynumber"></a>
<a id="tocspartynumber"></a>

```json
"20202002"
```

Number assigned by an agent to identify its customer.

<h2 id="tocS_PhoneNumber_0">PhoneNumber_0</h2>
<!-- backwards compatibility -->
<a id="schemaphonenumber_0"></a>
<a id="schema_PhoneNumber_0"></a>
<a id="tocSphonenumber_0"></a>
<a id="tocsphonenumber_0"></a>

```json
"+44-2079460000"
```

Collection of information that identifies a phone number, as defined by telecom services.

<h2 id="tocS_PhoneNumber_1">PhoneNumber_1</h2>
<!-- backwards compatibility -->
<a id="schemaphonenumber_1"></a>
<a id="schema_PhoneNumber_1"></a>
<a id="tocSphonenumber_1"></a>
<a id="tocsphonenumber_1"></a>

```json
"+44-7700900000"
```

Collection of information that identifies a mobile phone number, as defined by telecom services.

<h2 id="tocS_PostBox">PostBox</h2>
<!-- backwards compatibility -->
<a id="schemapostbox"></a>
<a id="schema_PostBox"></a>
<a id="tocSpostbox"></a>
<a id="tocspostbox"></a>

```json
"PO Box 123456"
```

Information that locates and identifies a box in a post office assigned to a person or organization, where letters for them are kept until called for.

<h2 id="tocS_PostCode">PostCode</h2>
<!-- backwards compatibility -->
<a id="schemapostcode"></a>
<a id="schema_PostCode"></a>
<a id="tocSpostcode"></a>
<a id="tocspostcode"></a>

```json
"EC2N 4AG"
```

Identifier consisting of a group of letters and/or numbers that is added to a postal address to assist the sorting of mail.

<h2 id="tocS_PreviousPaymentDateTime">PreviousPaymentDateTime</h2>
<!-- backwards compatibility -->
<a id="schemapreviouspaymentdatetime"></a>
<a id="schema_PreviousPaymentDateTime"></a>
<a id="tocSpreviouspaymentdatetime"></a>
<a id="tocspreviouspaymentdatetime"></a>

```json
"1970-01-01T00:00:00Z"
```

Date of most recent direct debit collection. All dates in the JSON payloads are represented in ISO 8601 date-time format. 
All date-time fields in responses must include the timezone. An example is below:
2017-04-05T10:43:07+00:00

<h2 id="tocS_ProprietaryBankTransactionCodeStructure1">ProprietaryBankTransactionCodeStructure1</h2>
<!-- backwards compatibility -->
<a id="schemaproprietarybanktransactioncodestructure1"></a>
<a id="schema_ProprietaryBankTransactionCodeStructure1"></a>
<a id="tocSproprietarybanktransactioncodestructure1"></a>
<a id="tocsproprietarybanktransactioncodestructure1"></a>

```json
{
  "Code": "string",
  "Issuer": "string"
}
```

Set of elements to fully identify a proprietary bank transaction code.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Code|string|true|none|Proprietary bank transaction code to identify the underlying transaction.|
|Issuer|string|false|none|Identification of the issuer of the proprietary bank transaction code.|

<h2 id="tocS_Rate">Rate</h2>
<!-- backwards compatibility -->
<a id="schemarate"></a>
<a id="schema_Rate"></a>
<a id="tocSrate"></a>
<a id="tocsrate"></a>

```json
"0.224"
```

Rate associated with the statement rate type.

<h2 id="tocS_Reference">Reference</h2>
<!-- backwards compatibility -->
<a id="schemareference"></a>
<a id="schema_Reference"></a>
<a id="tocSreference"></a>
<a id="tocsreference"></a>

```json
"Towbar Club"
```

Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.
Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.
If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.

<h2 id="tocS_Room">Room</h2>
<!-- backwards compatibility -->
<a id="schemaroom"></a>
<a id="schema_Room"></a>
<a id="tocSroom"></a>
<a id="tocsroom"></a>

```json
"Basement 03"
```

Information that locates and identifies a room to form part of an address

<h2 id="tocS_OBExtendedProprietaryBankTransactionCode">OBExtendedProprietaryBankTransactionCode</h2>
<!-- backwards compatibility -->
<a id="schemaobextendedproprietarybanktransactioncode"></a>
<a id="schema_OBExtendedProprietaryBankTransactionCode"></a>
<a id="tocSobextendedproprietarybanktransactioncode"></a>
<a id="tocsobextendedproprietarybanktransactioncode"></a>

```json
{
  "Code": "string",
  "Issuer": "string",
  "Description": "string"
}
```

Additional proprietary bank transaction codes used by the ASPSP for the underlying transaction

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Code|string|true|none|Proprietary bank transaction code to identify the underlying transaction.|
|Issuer|string|false|none|Identification of the issuer of the proprietary bank transaction code.|
|Description|string|false|none|Description of the code and its usage on the ASPSP channel|

<h2 id="tocS_OBInternalBeneficiaryType1Code">OBInternalBeneficiaryType1Code</h2>
<!-- backwards compatibility -->
<a id="schemaobinternalbeneficiarytype1code"></a>
<a id="schema_OBInternalBeneficiaryType1Code"></a>
<a id="tocSobinternalbeneficiarytype1code"></a>
<a id="tocsobinternalbeneficiarytype1code"></a>

```json
"Ordinary"
```

Specifies the Beneficiary Type.

<h2 id="tocS_ScheduledPaymentDateTime">ScheduledPaymentDateTime</h2>
<!-- backwards compatibility -->
<a id="schemascheduledpaymentdatetime"></a>
<a id="schema_ScheduledPaymentDateTime"></a>
<a id="tocSscheduledpaymentdatetime"></a>
<a id="tocsscheduledpaymentdatetime"></a>

```json
"2017-07-12T00:00:00+00:00"
```

The date on which the scheduled payment will be made. All dates in the JSON payloads are represented in ISO 8601 date-time format. 
All date-time fields in responses must include the timezone. An example is below:
2017-04-05T10:43:07+00:00

<h2 id="tocS_ScheduledPaymentId">ScheduledPaymentId</h2>
<!-- backwards compatibility -->
<a id="schemascheduledpaymentid"></a>
<a id="schema_ScheduledPaymentId"></a>
<a id="tocSscheduledpaymentid"></a>
<a id="tocsscheduledpaymentid"></a>

```json
"SP03"
```

A unique and immutable identifier used to identify the scheduled payment resource. This identifier has no meaning to the account owner.

<h2 id="tocS_SecondaryIdentification">SecondaryIdentification</h2>
<!-- backwards compatibility -->
<a id="schemasecondaryidentification"></a>
<a id="schema_SecondaryIdentification"></a>
<a id="tocSsecondaryidentification"></a>
<a id="tocssecondaryidentification"></a>

```json
"87562298675897"
```

This is secondary identification of the account, as assigned by the account servicing institution. 
This can be used by building societies to additionally identify accounts with a roll number (in addition to a sort code and account number combination).

<h2 id="tocS_StandingOrderId">StandingOrderId</h2>
<!-- backwards compatibility -->
<a id="schemastandingorderid"></a>
<a id="schema_StandingOrderId"></a>
<a id="tocSstandingorderid"></a>
<a id="tocsstandingorderid"></a>

```json
"Ben5"
```

A unique and immutable identifier used to identify the standing order resource. This identifier has no meaning to the account owner.

<h2 id="tocS_StartDateTime">StartDateTime</h2>
<!-- backwards compatibility -->
<a id="schemastartdatetime"></a>
<a id="schema_StartDateTime"></a>
<a id="tocSstartdatetime"></a>
<a id="tocsstartdatetime"></a>

```json
"2017-07-12T00:00:00+00:00"
```

Date and time at which the statement period starts. All dates in the JSON payloads are represented in ISO 8601 date-time format. 
All date-time fields in responses must include the timezone. An example is below:
2017-04-05T10:43:07+00:00

<h2 id="tocS_StatementFrequencyAndFormat">StatementFrequencyAndFormat</h2>
<!-- backwards compatibility -->
<a id="schemastatementfrequencyandformat"></a>
<a id="schema_StatementFrequencyAndFormat"></a>
<a id="tocSstatementfrequencyandformat"></a>
<a id="tocsstatementfrequencyandformat"></a>

```json
[
  {
    "Frequency": "YEAR",
    "CommunicationMethod": "EMAL",
    "Format": "DPDF",
    "DeliveryAddress": {
      "AddressType": "BIZZ",
      "Department": "Finance",
      "SubDepartment": "Payroll",
      "StreetName": "Bank Street",
      "BuildingNumber": "11",
      "BuildingName": "string",
      "Floor": "11",
      "UnitNumber": "A88",
      "Room": "Basement 03",
      "PostBox": "PO Box 123456",
      "TownLocationName": "London",
      "DistrictName": "Greater London",
      "CareOf": "Jane Smith",
      "PostCode": "EC2N 4AG",
      "TownName": "London",
      "CountrySubDivision": "string",
      "Country": "string",
      "AddressLine": [
        "string"
      ]
    }
  }
]
```

<h2 id="tocS_StatementId">StatementId</h2>
<!-- backwards compatibility -->
<a id="schemastatementid"></a>
<a id="schema_StatementId"></a>
<a id="tocSstatementid"></a>
<a id="tocsstatementid"></a>

```json
"8sfhke-sifhkeuf-97813"
```

Unique identifier for the statement resource within a servicing institution. This identifier is both unique and immutable.

<h2 id="tocS_StatementReference">StatementReference</h2>
<!-- backwards compatibility -->
<a id="schemastatementreference"></a>
<a id="schema_StatementReference"></a>
<a id="tocSstatementreference"></a>
<a id="tocsstatementreference"></a>

```json
"002"
```

Unique reference for the statement. This reference may be optionally populated if available.

<h2 id="tocS_StatusUpdateDateTime">StatusUpdateDateTime</h2>
<!-- backwards compatibility -->
<a id="schemastatusupdatedatetime"></a>
<a id="schema_StatusUpdateDateTime"></a>
<a id="tocSstatusupdatedatetime"></a>
<a id="tocsstatusupdatedatetime"></a>

```json
"1970-01-01T00:00:00Z"
```

Date and time at which the resource status was updated. All dates in the JSON payloads are represented in ISO 8601 date-time format. 
All date-time fields in responses must include the timezone. An example is below:
2017-04-05T10:43:07+00:00

<h2 id="tocS_StreetName">StreetName</h2>
<!-- backwards compatibility -->
<a id="schemastreetname"></a>
<a id="schema_StreetName"></a>
<a id="tocSstreetname"></a>
<a id="tocsstreetname"></a>

```json
"Bank Street"
```

Name of a street or thoroughfare.

<h2 id="tocS_Time">Time</h2>
<!-- backwards compatibility -->
<a id="schematime"></a>
<a id="schema_Time"></a>
<a id="tocStime"></a>
<a id="tocstime"></a>

```json
"00:00:00Z"
```

Time at which assets become available to the account owner in case of a credit entry, or cease to be available to the account owner in case of a debit transaction entry.
Usage: If transaction entry status is pending and value date is present, then the value date refers to an expected/requested value date.
For transaction entries subject to availability/float and for which availability information is provided, the value date must not be used. In this case the availability component identifies the number of availability days. All dates in the JSON payloads are represented in ISO 8601 date-time format. 
All date-time fields in responses must include the timezone. An example is below:
T10:43:07+00:00

<h2 id="tocS_TownName">TownName</h2>
<!-- backwards compatibility -->
<a id="schematownname"></a>
<a id="schema_TownName"></a>
<a id="tocStownname"></a>
<a id="tocstownname"></a>

```json
"London"
```

Name of a built-up area, with defined boundaries, and a local government.

<h2 id="tocS_TransactionId">TransactionId</h2>
<!-- backwards compatibility -->
<a id="schematransactionid"></a>
<a id="schema_TransactionId"></a>
<a id="tocStransactionid"></a>
<a id="tocstransactionid"></a>

```json
"string"
```

Unique identifier for the transaction within a servicing institution. This identifier is both unique and immutable.

<h2 id="tocS_TransactionInformation">TransactionInformation</h2>
<!-- backwards compatibility -->
<a id="schematransactioninformation"></a>
<a id="schema_TransactionInformation"></a>
<a id="tocStransactioninformation"></a>
<a id="tocstransactioninformation"></a>

```json
"string"
```

Further details of the transaction. 
This is the transaction narrative, which is unstructured text.

<h2 id="tocS_TransactionReference">TransactionReference</h2>
<!-- backwards compatibility -->
<a id="schematransactionreference"></a>
<a id="schema_TransactionReference"></a>
<a id="tocStransactionreference"></a>
<a id="tocstransactionreference"></a>

```json
"string"
```

Unique reference for the transaction. This reference is optionally populated, and may as an example be the FPID in the Faster Payments context.

<h2 id="tocS_UnitNumber">UnitNumber</h2>
<!-- backwards compatibility -->
<a id="schemaunitnumber"></a>
<a id="schema_UnitNumber"></a>
<a id="tocSunitnumber"></a>
<a id="tocsunitnumber"></a>

```json
"A88"
```

Number that identifies the unit of a specific address .

<h2 id="tocS_Value">Value</h2>
<!-- backwards compatibility -->
<a id="schemavalue"></a>
<a id="schema_Value"></a>
<a id="tocSvalue"></a>
<a id="tocsvalue"></a>

```json
"string"
```

Value associated with the statement value type.

<h2 id="tocS_ValueDateTime">ValueDateTime</h2>
<!-- backwards compatibility -->
<a id="schemavaluedatetime"></a>
<a id="schema_ValueDateTime"></a>
<a id="tocSvaluedatetime"></a>
<a id="tocsvaluedatetime"></a>

```json
"1970-01-01T00:00:00Z"
```

Date and time at which assets become available to the account owner in case of a credit entry, or cease to be available to the account owner in case of a debit transaction entry.
Usage: If transaction entry status is pending and value date is present, then the value date refers to an expected/requested value date.
For transaction entries subject to availability/float and for which availability information is provided, the value date must not be used. In this case the availability component identifies the number of availability days. All dates in the JSON payloads are represented in ISO 8601 date-time format. 
All date-time fields in responses must include the timezone. An example is below:
2017-04-05T10:43:07+00:00

<h2 id="tocS_Model">Model</h2>
<!-- backwards compatibility -->
<a id="schemamodel"></a>
<a id="schema_Model"></a>
<a id="tocSmodel"></a>
<a id="tocsmodel"></a>

```json
{
  "id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|false|none|none|
