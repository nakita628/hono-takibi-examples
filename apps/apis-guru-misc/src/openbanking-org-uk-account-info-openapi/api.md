<h1 id="account-and-transaction-api-specification">Account and Transaction API Specification v3.1.7</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Swagger for Account and Transaction API Specification

Base URLs:

* <a href="https://openbanking.org.uk">https://openbanking.org.uk</a>

* <a href="https://api.apis.guru/open-banking/v3.1/aisp">https://api.apis.guru/open-banking/v3.1/aisp</a>

<a href="https://www.openbanking.org.uk/terms">Terms of service</a>
Email: <a href="mailto:ServiceDesk@openbanking.org.uk">Service Desk</a> 
License: <a href="https://www.openbanking.org.uk/open-licence">open-licence</a>

# Authentication

- oAuth2 authentication. OAuth flow, it is required when the PSU needs to perform SCA with the ASPSP when a TPP wants to access an ASPSP resource owned by the PSU

    - Flow: authorizationCode
    - Authorization URL = [https://authserver.example/authorization](https://authserver.example/authorization)
    - Token URL = [https://authserver.example/token](https://authserver.example/token)

|Scope|Scope Description|
|---|---|
|accounts|Ability to read Accounts information|

- oAuth2 authentication. TPP client credential authorisation flow with the ASPSP

    - Flow: clientCredentials
    - Token URL = [https://authserver.example/token](https://authserver.example/token)

|Scope|Scope Description|
|---|---|
|accounts|Ability to read Accounts information|

<h1 id="account-and-transaction-api-specification-account-access">Account Access</h1>

## Create Account Access Consents

<a id="opIdCreateAccountAccessConsents"></a>

> Code samples

```bash
curl https://example.com/account-access-consents \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "Data": {
      "ExpirationDateTime": "1970-01-01T00:00:00Z",
      "Permissions": [
        "ReadAccountsBasic"
      ],
      "TransactionFromDateTime": "1970-01-01T00:00:00Z",
      "TransactionToDateTime": "1970-01-01T00:00:00Z"
    },
    "Risk": {}
  }'
```

`POST /account-access-consents`

> Body parameter

```json
{
  "Data": {
    "ExpirationDateTime": "1970-01-01T00:00:00Z",
    "Permissions": [
      "ReadAccountsBasic"
    ],
    "TransactionFromDateTime": "1970-01-01T00:00:00Z",
    "TransactionToDateTime": "1970-01-01T00:00:00Z"
  },
  "Risk": {}
}
```

<h3 id="create-account-access-consents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. <br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: <br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|
|body|body|[OBReadConsent1](#schemaobreadconsent1)|true|Default|
|» Data|body|object|true|none|
|» » ExpirationDateTime|body|string(date-time)|false|Specified date and time the permissions will expire.<br>If this is not populated, the permissions will be open ended.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|» » Permissions|body|[string]|true|none|
|» » TransactionFromDateTime|body|string(date-time)|false|Specified start date and time for the transaction query period.<br>If this is not populated, the start date will be open ended, and data will be returned from the earliest available transaction.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|» » TransactionToDateTime|body|string(date-time)|false|Specified end date and time for the transaction query period.<br>If this is not populated, the end date will be open ended, and data will be returned to the latest available transaction.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|» Risk|body|[OBRisk2](#schemaobrisk2)|true|The Risk section is sent by the initiating party to the ASPSP. It is used to specify additional details for risk scoring for Account Info.|

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
    "CreationDateTime": "1970-01-01T00:00:00Z",
    "ExpirationDateTime": "1970-01-01T00:00:00Z",
    "Permissions": [
      "ReadAccountsBasic"
    ],
    "Status": "Authorised",
    "StatusUpdateDateTime": "1970-01-01T00:00:00Z",
    "TransactionFromDateTime": "1970-01-01T00:00:00Z",
    "TransactionToDateTime": "1970-01-01T00:00:00Z"
  },
  "Links": {
    "First": "http://example.com",
    "Last": "http://example.com",
    "Next": "http://example.com",
    "Prev": "http://example.com",
    "Self": "http://example.com"
  },
  "Meta": {
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z",
    "TotalPages": 0
  },
  "Risk": {}
}
```

> 400 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 403 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 500 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

<h3 id="create-account-access-consents-responses">Responses</h3>

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

## Get Account Access Consents

<a id="opIdGetAccountAccessConsentsConsentId"></a>

> Code samples

```bash
curl https://example.com/account-access-consents/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /account-access-consents/{ConsentId}`

<h3 id="get-account-access-consents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ConsentId|path|string|true|ConsentId|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. <br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: <br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|

> Example responses

> 200 Response

```json
{
  "Data": {
    "ConsentId": "string",
    "CreationDateTime": "1970-01-01T00:00:00Z",
    "ExpirationDateTime": "1970-01-01T00:00:00Z",
    "Permissions": [
      "ReadAccountsBasic"
    ],
    "Status": "Authorised",
    "StatusUpdateDateTime": "1970-01-01T00:00:00Z",
    "TransactionFromDateTime": "1970-01-01T00:00:00Z",
    "TransactionToDateTime": "1970-01-01T00:00:00Z"
  },
  "Links": {
    "First": "http://example.com",
    "Last": "http://example.com",
    "Next": "http://example.com",
    "Prev": "http://example.com",
    "Self": "http://example.com"
  },
  "Meta": {
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z",
    "TotalPages": 0
  },
  "Risk": {}
}
```

> 400 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 403 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 500 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

<h3 id="get-account-access-consents-responses">Responses</h3>

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

## Delete Account Access Consents

<a id="opIdDeleteAccountAccessConsentsConsentId"></a>

> Code samples

```bash
curl https://example.com/account-access-consents/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /account-access-consents/{ConsentId}`

<h3 id="delete-account-access-consents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ConsentId|path|string|true|ConsentId|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. <br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: <br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|

> Example responses

> 400 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 403 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 500 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

<h3 id="delete-account-access-consents-responses">Responses</h3>

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
curl https://example.com/accounts \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /accounts`

<h3 id="get-accounts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. <br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: <br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|

> Example responses

> 200 Response

```json
{
  "Data": {
    "Account": [
      {
        "Account": [
          {
            "Identification": "string",
            "Name": "string",
            "SchemeName": "string",
            "SecondaryIdentification": "string"
          }
        ],
        "AccountId": "string",
        "AccountSubType": "ChargeCard",
        "AccountType": "Business",
        "Currency": "string",
        "Description": "string",
        "MaturityDate": "1970-01-01T00:00:00Z",
        "Nickname": "string",
        "OpeningDate": "1970-01-01T00:00:00Z",
        "Servicer": {
          "Identification": "string",
          "SchemeName": "string"
        },
        "Status": "Deleted",
        "StatusUpdateDateTime": "1970-01-01T00:00:00Z",
        "SwitchStatus": "string"
      }
    ]
  },
  "Links": {
    "First": "http://example.com",
    "Last": "http://example.com",
    "Next": "http://example.com",
    "Prev": "http://example.com",
    "Self": "http://example.com"
  },
  "Meta": {
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z",
    "TotalPages": 0
  }
}
```

> 400 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 403 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 500 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
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

## Get Accounts

<a id="opIdGetAccountsAccountId"></a>

> Code samples

```bash
curl https://example.com/accounts/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /accounts/{AccountId}`

<h3 id="get-accounts-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|AccountId|path|string|true|AccountId|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. <br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: <br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|

> Example responses

> 200 Response

```json
{
  "Data": {
    "Account": [
      {
        "Account": [
          {
            "Identification": "string",
            "Name": "string",
            "SchemeName": "string",
            "SecondaryIdentification": "string"
          }
        ],
        "AccountId": "string",
        "AccountSubType": "ChargeCard",
        "AccountType": "Business",
        "Currency": "string",
        "Description": "string",
        "MaturityDate": "1970-01-01T00:00:00Z",
        "Nickname": "string",
        "OpeningDate": "1970-01-01T00:00:00Z",
        "Servicer": {
          "Identification": "string",
          "SchemeName": "string"
        },
        "Status": "Deleted",
        "StatusUpdateDateTime": "1970-01-01T00:00:00Z",
        "SwitchStatus": "string"
      }
    ]
  },
  "Links": {
    "First": "http://example.com",
    "Last": "http://example.com",
    "Next": "http://example.com",
    "Prev": "http://example.com",
    "Self": "http://example.com"
  },
  "Meta": {
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z",
    "TotalPages": 0
  }
}
```

> 400 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 403 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 500 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

<h3 id="get-accounts-1-responses">Responses</h3>

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

## Get Balances

<a id="opIdGetAccountsAccountIdBalances"></a>

> Code samples

```bash
curl https://example.com/accounts/string/balances \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /accounts/{AccountId}/balances`

<h3 id="get-balances-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|AccountId|path|string|true|AccountId|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. <br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: <br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|

> Example responses

> 200 Response

```json
{
  "Data": {
    "Balance": [
      {
        "AccountId": "string",
        "Amount": {
          "Amount": "string",
          "Currency": "string"
        },
        "CreditDebitIndicator": "Credit",
        "CreditLine": [
          {
            "Amount": {
              "Amount": "string",
              "Currency": "string"
            },
            "Included": true,
            "Type": "Available"
          }
        ],
        "DateTime": "1970-01-01T00:00:00Z",
        "Type": "ClosingAvailable"
      }
    ]
  },
  "Links": {
    "First": "http://example.com",
    "Last": "http://example.com",
    "Next": "http://example.com",
    "Prev": "http://example.com",
    "Self": "http://example.com"
  },
  "Meta": {
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z",
    "TotalPages": 0
  }
}
```

> 400 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 403 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 500 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

<h3 id="get-balances-responses">Responses</h3>

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
curl https://example.com/balances \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /balances`

<h3 id="get-balances-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. <br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: <br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|

> Example responses

> 200 Response

```json
{
  "Data": {
    "Balance": [
      {
        "AccountId": "string",
        "Amount": {
          "Amount": "string",
          "Currency": "string"
        },
        "CreditDebitIndicator": "Credit",
        "CreditLine": [
          {
            "Amount": {
              "Amount": "string",
              "Currency": "string"
            },
            "Included": true,
            "Type": "Available"
          }
        ],
        "DateTime": "1970-01-01T00:00:00Z",
        "Type": "ClosingAvailable"
      }
    ]
  },
  "Links": {
    "First": "http://example.com",
    "Last": "http://example.com",
    "Next": "http://example.com",
    "Prev": "http://example.com",
    "Self": "http://example.com"
  },
  "Meta": {
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z",
    "TotalPages": 0
  }
}
```

> 400 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 403 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 500 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

<h3 id="get-balances-1-responses">Responses</h3>

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

## Get Beneficiaries

<a id="opIdGetAccountsAccountIdBeneficiaries"></a>

> Code samples

```bash
curl https://example.com/accounts/string/beneficiaries \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /accounts/{AccountId}/beneficiaries`

<h3 id="get-beneficiaries-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|AccountId|path|string|true|AccountId|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. <br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: <br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|

> Example responses

> 200 Response

```json
{
  "Data": {
    "Beneficiary": [
      {
        "AccountId": "string",
        "BeneficiaryId": "string",
        "BeneficiaryType": "Trusted",
        "CreditorAccount": {
          "Identification": "string",
          "Name": "string",
          "SchemeName": "string",
          "SecondaryIdentification": "string"
        },
        "CreditorAgent": {
          "Identification": "string",
          "Name": "string",
          "PostalAddress": {
            "AddressLine": [
              "string"
            ],
            "AddressType": "Business",
            "BuildingNumber": "string",
            "Country": "string",
            "CountrySubDivision": "string",
            "Department": "string",
            "PostCode": "string",
            "StreetName": "string",
            "SubDepartment": "string",
            "TownName": "string"
          },
          "SchemeName": "string"
        },
        "Reference": "string",
        "SupplementaryData": {}
      }
    ]
  },
  "Links": {
    "First": "http://example.com",
    "Last": "http://example.com",
    "Next": "http://example.com",
    "Prev": "http://example.com",
    "Self": "http://example.com"
  },
  "Meta": {
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z",
    "TotalPages": 0
  }
}
```

> 400 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 403 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 500 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
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
curl https://example.com/beneficiaries \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /beneficiaries`

<h3 id="get-beneficiaries-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. <br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: <br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|

> Example responses

> 200 Response

```json
{
  "Data": {
    "Beneficiary": [
      {
        "AccountId": "string",
        "BeneficiaryId": "string",
        "BeneficiaryType": "Trusted",
        "CreditorAccount": {
          "Identification": "string",
          "Name": "string",
          "SchemeName": "string",
          "SecondaryIdentification": "string"
        },
        "CreditorAgent": {
          "Identification": "string",
          "Name": "string",
          "PostalAddress": {
            "AddressLine": [
              "string"
            ],
            "AddressType": "Business",
            "BuildingNumber": "string",
            "Country": "string",
            "CountrySubDivision": "string",
            "Department": "string",
            "PostCode": "string",
            "StreetName": "string",
            "SubDepartment": "string",
            "TownName": "string"
          },
          "SchemeName": "string"
        },
        "Reference": "string",
        "SupplementaryData": {}
      }
    ]
  },
  "Links": {
    "First": "http://example.com",
    "Last": "http://example.com",
    "Next": "http://example.com",
    "Prev": "http://example.com",
    "Self": "http://example.com"
  },
  "Meta": {
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z",
    "TotalPages": 0
  }
}
```

> 400 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 403 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 500 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

<h3 id="get-beneficiaries-1-responses">Responses</h3>

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

## Get Direct Debits

<a id="opIdGetAccountsAccountIdDirectDebits"></a>

> Code samples

```bash
curl https://example.com/accounts/string/direct-debits \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /accounts/{AccountId}/direct-debits`

<h3 id="get-direct-debits-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|AccountId|path|string|true|AccountId|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. <br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: <br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|

> Example responses

> 200 Response

```json
{
  "Data": {
    "DirectDebit": [
      {
        "AccountId": "string",
        "DirectDebitId": "string",
        "DirectDebitStatusCode": "Active",
        "Frequency": "string",
        "MandateIdentification": "string",
        "Name": "string",
        "PreviousPaymentAmount": {
          "Amount": "string",
          "Currency": "string"
        },
        "PreviousPaymentDateTime": "1970-01-01T00:00:00Z"
      }
    ]
  },
  "Links": {
    "First": "http://example.com",
    "Last": "http://example.com",
    "Next": "http://example.com",
    "Prev": "http://example.com",
    "Self": "http://example.com"
  },
  "Meta": {
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z",
    "TotalPages": 0
  }
}
```

> 400 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 403 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 500 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
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
curl https://example.com/direct-debits \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /direct-debits`

<h3 id="get-direct-debits-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. <br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: <br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|

> Example responses

> 200 Response

```json
{
  "Data": {
    "DirectDebit": [
      {
        "AccountId": "string",
        "DirectDebitId": "string",
        "DirectDebitStatusCode": "Active",
        "Frequency": "string",
        "MandateIdentification": "string",
        "Name": "string",
        "PreviousPaymentAmount": {
          "Amount": "string",
          "Currency": "string"
        },
        "PreviousPaymentDateTime": "1970-01-01T00:00:00Z"
      }
    ]
  },
  "Links": {
    "First": "http://example.com",
    "Last": "http://example.com",
    "Next": "http://example.com",
    "Prev": "http://example.com",
    "Self": "http://example.com"
  },
  "Meta": {
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z",
    "TotalPages": 0
  }
}
```

> 400 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 403 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 500 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

<h3 id="get-direct-debits-1-responses">Responses</h3>

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

## Get Offers

<a id="opIdGetAccountsAccountIdOffers"></a>

> Code samples

```bash
curl https://example.com/accounts/string/offers \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /accounts/{AccountId}/offers`

<h3 id="get-offers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|AccountId|path|string|true|AccountId|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. <br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: <br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|

> Example responses

> 200 Response

```json
{
  "Data": {
    "Offer": [
      {
        "AccountId": "string",
        "Amount": {
          "Amount": "string",
          "Currency": "string"
        },
        "Description": "string",
        "EndDateTime": "1970-01-01T00:00:00Z",
        "Fee": {
          "Amount": "string",
          "Currency": "string"
        },
        "OfferId": "string",
        "OfferType": "BalanceTransfer",
        "Rate": "string",
        "StartDateTime": "1970-01-01T00:00:00Z",
        "Term": "string",
        "URL": "string",
        "Value": 0
      }
    ]
  },
  "Links": {
    "First": "http://example.com",
    "Last": "http://example.com",
    "Next": "http://example.com",
    "Prev": "http://example.com",
    "Self": "http://example.com"
  },
  "Meta": {
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z",
    "TotalPages": 0
  }
}
```

> 400 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 403 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 500 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
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
curl https://example.com/offers \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /offers`

<h3 id="get-offers-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. <br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: <br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|

> Example responses

> 200 Response

```json
{
  "Data": {
    "Offer": [
      {
        "AccountId": "string",
        "Amount": {
          "Amount": "string",
          "Currency": "string"
        },
        "Description": "string",
        "EndDateTime": "1970-01-01T00:00:00Z",
        "Fee": {
          "Amount": "string",
          "Currency": "string"
        },
        "OfferId": "string",
        "OfferType": "BalanceTransfer",
        "Rate": "string",
        "StartDateTime": "1970-01-01T00:00:00Z",
        "Term": "string",
        "URL": "string",
        "Value": 0
      }
    ]
  },
  "Links": {
    "First": "http://example.com",
    "Last": "http://example.com",
    "Next": "http://example.com",
    "Prev": "http://example.com",
    "Self": "http://example.com"
  },
  "Meta": {
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z",
    "TotalPages": 0
  }
}
```

> 400 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 403 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 500 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

<h3 id="get-offers-1-responses">Responses</h3>

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

## Get Parties

<a id="opIdGetAccountsAccountIdParties"></a>

> Code samples

```bash
curl https://example.com/accounts/string/parties \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /accounts/{AccountId}/parties`

<h3 id="get-parties-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|AccountId|path|string|true|AccountId|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. <br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: <br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|

> Example responses

> 200 Response

```json
{
  "Data": {
    "Party": [
      {
        "AccountRole": "string",
        "Address": [
          {
            "AddressLine": [
              "string"
            ],
            "AddressType": "Business",
            "BuildingNumber": "string",
            "Country": "string",
            "CountrySubDivision": "string",
            "PostCode": "string",
            "StreetName": "string",
            "TownName": "string"
          }
        ],
        "BeneficialOwnership": true,
        "EmailAddress": "string",
        "FullLegalName": "string",
        "LegalStructure": "string",
        "Mobile": "string",
        "Name": "string",
        "PartyId": "string",
        "PartyNumber": "string",
        "PartyType": "Delegate",
        "Phone": "string",
        "Relationships": {
          "Account": {
            "Id": "string",
            "Related": "http://example.com"
          }
        }
      }
    ]
  },
  "Links": {
    "First": "http://example.com",
    "Last": "http://example.com",
    "Next": "http://example.com",
    "Prev": "http://example.com",
    "Self": "http://example.com"
  },
  "Meta": {
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z",
    "TotalPages": 0
  }
}
```

> 400 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 403 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 500 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

<h3 id="get-parties-responses">Responses</h3>

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

## Get Parties

<a id="opIdGetAccountsAccountIdParty"></a>

> Code samples

```bash
curl https://example.com/accounts/string/party \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /accounts/{AccountId}/party`

<h3 id="get-parties-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|AccountId|path|string|true|AccountId|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. <br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: <br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|

> Example responses

> 200 Response

```json
{
  "Data": {
    "Party": {
      "AccountRole": "string",
      "Address": [
        {
          "AddressLine": [
            "string"
          ],
          "AddressType": "Business",
          "BuildingNumber": "string",
          "Country": "string",
          "CountrySubDivision": "string",
          "PostCode": "string",
          "StreetName": "string",
          "TownName": "string"
        }
      ],
      "BeneficialOwnership": true,
      "EmailAddress": "string",
      "FullLegalName": "string",
      "LegalStructure": "string",
      "Mobile": "string",
      "Name": "string",
      "PartyId": "string",
      "PartyNumber": "string",
      "PartyType": "Delegate",
      "Phone": "string",
      "Relationships": {
        "Account": {
          "Id": "string",
          "Related": "http://example.com"
        }
      }
    }
  },
  "Links": {
    "First": "http://example.com",
    "Last": "http://example.com",
    "Next": "http://example.com",
    "Prev": "http://example.com",
    "Self": "http://example.com"
  },
  "Meta": {
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z",
    "TotalPages": 0
  }
}
```

> 400 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 403 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 500 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

<h3 id="get-parties-1-responses">Responses</h3>

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

## Get Parties

<a id="opIdGetParty"></a>

> Code samples

```bash
curl https://example.com/party \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /party`

<h3 id="get-parties-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. <br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: <br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|

> Example responses

> 200 Response

```json
{
  "Data": {
    "Party": {
      "AccountRole": "string",
      "Address": [
        {
          "AddressLine": [
            "string"
          ],
          "AddressType": "Business",
          "BuildingNumber": "string",
          "Country": "string",
          "CountrySubDivision": "string",
          "PostCode": "string",
          "StreetName": "string",
          "TownName": "string"
        }
      ],
      "BeneficialOwnership": true,
      "EmailAddress": "string",
      "FullLegalName": "string",
      "LegalStructure": "string",
      "Mobile": "string",
      "Name": "string",
      "PartyId": "string",
      "PartyNumber": "string",
      "PartyType": "Delegate",
      "Phone": "string",
      "Relationships": {
        "Account": {
          "Id": "string",
          "Related": "http://example.com"
        }
      }
    }
  },
  "Links": {
    "First": "http://example.com",
    "Last": "http://example.com",
    "Next": "http://example.com",
    "Prev": "http://example.com",
    "Self": "http://example.com"
  },
  "Meta": {
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z",
    "TotalPages": 0
  }
}
```

> 400 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 403 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 500 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

<h3 id="get-parties-2-responses">Responses</h3>

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

## Get Products

<a id="opIdGetAccountsAccountIdProduct"></a>

> Code samples

```bash
curl https://example.com/accounts/string/product \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /accounts/{AccountId}/product`

<h3 id="get-products-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|AccountId|path|string|true|AccountId|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. <br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: <br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|

> Example responses

> 200 Response

```json
{
  "Data": {
    "Product": [
      {
        "AccountId": "string",
        "BCA": {
          "CreditInterest": {
            "TierBandSet": [
              {
                "CalculationMethod": "Compound",
                "Destination": "PayAway",
                "Notes": [
                  "string"
                ],
                "TierBand": [
                  {
                    "AER": "string",
                    "ApplicationFrequency": "Daily",
                    "BankInterestRate": "string",
                    "BankInterestRateType": "Gross",
                    "CalculationFrequency": "Daily",
                    "DepositInterestAppliedCoverage": "Banded",
                    "FixedVariableInterestRateType": "Fixed",
                    "Identification": "string",
                    "Notes": [
                      "string"
                    ],
                    "OtherApplicationFrequency": {
                      "Code": "stri",
                      "Description": "string",
                      "Name": "string"
                    },
                    "OtherBankInterestType": {
                      "Code": "stri",
                      "Description": "string",
                      "Name": "string"
                    },
                    "OtherCalculationFrequency": {
                      "Code": "stri",
                      "Description": "string",
                      "Name": "string"
                    },
                    "TierValueMaximum": "string",
                    "TierValueMinimum": "string"
                  }
                ],
                "TierBandMethod": "Banded"
              }
            ]
          },
          "OtherFeesCharges": [
            {
              "FeeChargeCap": [
                {
                  "CappingPeriod": "Day",
                  "FeeCapAmount": "string",
                  "FeeCapOccurrence": 0,
                  "FeeType": [
                    "Other"
                  ],
                  "MinMaxType": "Minimum",
                  "Notes": [
                    "string"
                  ],
                  "OtherFeeType": [
                    {
                      "Code": "stri",
                      "Description": "string",
                      "Name": "string"
                    }
                  ]
                }
              ],
              "FeeChargeDetail": [
                {
                  "ApplicationFrequency": "OnClosing",
                  "CalculationFrequency": "OnClosing",
                  "FeeAmount": "string",
                  "FeeApplicableRange": {
                    "MaximumAmount": "string",
                    "MaximumRate": "string",
                    "MinimumAmount": "string",
                    "MinimumRate": "string"
                  },
                  "FeeCategory": "Other",
                  "FeeChargeCap": [
                    {
                      "CappingPeriod": "Day",
                      "FeeCapAmount": "string",
                      "FeeCapOccurrence": 0,
                      "FeeType": [
                        "Other"
                      ],
                      "MinMaxType": "Minimum",
                      "Notes": [
                        "string"
                      ],
                      "OtherFeeType": [
                        {
                          "Code": "stri",
                          "Description": "string",
                          "Name": "string"
                        }
                      ]
                    }
                  ],
                  "FeeRate": "string",
                  "FeeRateType": "Gross",
                  "FeeType": "Other",
                  "NegotiableIndicator": true,
                  "Notes": [
                    "string"
                  ],
                  "OtherApplicationFrequency": {
                    "Code": "stri",
                    "Description": "string",
                    "Name": "string"
                  },
                  "OtherCalculationFrequency": {
                    "Code": "stri",
                    "Description": "string",
                    "Name": "string"
                  },
                  "OtherFeeCategoryType": {
                    "Code": "stri",
                    "Description": "string",
                    "Name": "string"
                  },
                  "OtherFeeRateType": {
                    "Code": "stri",
                    "Description": "string",
                    "Name": "string"
                  },
                  "OtherFeeType": {
                    "Code": "stri",
                    "Description": "string",
                    "FeeCategory": "Other",
                    "Name": "string"
                  }
                }
              ],
              "OtherTariffType": {
                "Code": "stri",
                "Description": "string",
                "Name": "string"
              },
              "TariffName": "string",
              "TariffType": "Electronic"
            }
          ],
          "Overdraft": {
            "Notes": [
              "string"
            ],
            "OverdraftTierBandSet": [
              {
                "AuthorisedIndicator": true,
                "BufferAmount": "string",
                "Identification": "string",
                "Notes": [
                  "string"
                ],
                "OverdraftFeesCharges": [
                  {
                    "OverdraftFeeChargeCap": [
                      {
                        "CappingPeriod": "Day",
                        "FeeCapAmount": "string",
                        "FeeCapOccurrence": 0,
                        "FeeType": [
                          "ArrangedOverdraft"
                        ],
                        "MinMaxType": "Minimum",
                        "Notes": [
                          "string"
                        ],
                        "OtherFeeType": [
                          {
                            "Code": "stri",
                            "Description": "string",
                            "Name": "string"
                          }
                        ]
                      }
                    ],
                    "OverdraftFeeChargeDetail": [
                      {
                        "ApplicationFrequency": "OnClosing",
                        "CalculationFrequency": "OnClosing",
                        "FeeAmount": "string",
                        "FeeRate": "string",
                        "FeeRateType": "Gross",
                        "FeeType": "ArrangedOverdraft",
                        "IncrementalBorrowingAmount": "string",
                        "NegotiableIndicator": true,
                        "Notes": [
                          "string"
                        ],
                        "OtherApplicationFrequency": {
                          "Code": "stri",
                          "Description": "string",
                          "Name": "string"
                        },
                        "OtherCalculationFrequency": {
                          "Code": "stri",
                          "Description": "string",
                          "Name": "string"
                        },
                        "OtherFeeRateType": {
                          "Code": "stri",
                          "Description": "string",
                          "Name": "string"
                        },
                        "OtherFeeType": {
                          "Code": "stri",
                          "Description": "string",
                          "Name": "string"
                        },
                        "OverdraftControlIndicator": true,
                        "OverdraftFeeChargeCap": [
                          {
                            "CappingPeriod": "Day",
                            "FeeCapAmount": "string",
                            "FeeCapOccurrence": 0,
                            "FeeType": [
                              "ArrangedOverdraft"
                            ],
                            "MinMaxType": "Minimum",
                            "Notes": [
                              "string"
                            ],
                            "OtherFeeType": [
                              {
                                "Code": "stri",
                                "Description": "string",
                                "Name": "string"
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ],
                "OverdraftTierBand": [
                  {
                    "AgreementLengthMax": 0,
                    "AgreementLengthMin": 0,
                    "AgreementPeriod": "Day",
                    "BankGuaranteedIndicator": true,
                    "EAR": "string",
                    "Identification": "string",
                    "Notes": [
                      "string"
                    ],
                    "OverdraftFeesCharges": [
                      {
                        "OverdraftFeeChargeCap": [
                          {
                            "CappingPeriod": "Day",
                            "FeeCapAmount": "string",
                            "FeeCapOccurrence": 0,
                            "FeeType": [
                              "ArrangedOverdraft"
                            ],
                            "MinMaxType": "Minimum",
                            "Notes": [
                              "string"
                            ],
                            "OtherFeeType": [
                              {
                                "Code": "stri",
                                "Description": "string",
                                "Name": "string"
                              }
                            ]
                          }
                        ],
                        "OverdraftFeeChargeDetail": [
                          {
                            "ApplicationFrequency": "OnClosing",
                            "CalculationFrequency": "OnClosing",
                            "FeeAmount": "string",
                            "FeeRate": "string",
                            "FeeRateType": "Gross",
                            "FeeType": "ArrangedOverdraft",
                            "IncrementalBorrowingAmount": "string",
                            "NegotiableIndicator": true,
                            "Notes": [
                              "string"
                            ],
                            "OtherApplicationFrequency": {
                              "Code": "stri",
                              "Description": "string",
                              "Name": "string"
                            },
                            "OtherCalculationFrequency": {
                              "Code": "stri",
                              "Description": "string",
                              "Name": "string"
                            },
                            "OtherFeeRateType": {
                              "Code": "stri",
                              "Description": "string",
                              "Name": "string"
                            },
                            "OtherFeeType": {
                              "Code": "stri",
                              "Description": "string",
                              "Name": "string"
                            },
                            "OverdraftControlIndicator": true,
                            "OverdraftFeeChargeCap": [
                              {
                                "CappingPeriod": "Day",
                                "FeeCapAmount": "string",
                                "FeeCapOccurrence": 0,
                                "FeeType": [
                                  "ArrangedOverdraft"
                                ],
                                "MinMaxType": "Minimum",
                                "Notes": [
                                  "string"
                                ],
                                "OtherFeeType": [
                                  {
                                    "Code": "stri",
                                    "Description": "string",
                                    "Name": "string"
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ],
                    "OverdraftInterestChargingCoverage": "Banded",
                    "RepresentativeAPR": "string",
                    "TierValueMax": "string",
                    "TierValueMin": "string"
                  }
                ],
                "OverdraftType": "Committed",
                "TierBandMethod": "Banded"
              }
            ]
          },
          "ProductDetails": {
            "FeeFreeLength": 0,
            "FeeFreeLengthPeriod": "Day",
            "Notes": [
              "string"
            ],
            "Segment": [
              "ClientAccount"
            ]
          }
        },
        "MarketingStateId": "string",
        "OtherProductType": {
          "CreditInterest": {
            "TierBandSet": [
              {
                "CalculationMethod": "ITCO",
                "Destination": "INOT",
                "Notes": [
                  "string"
                ],
                "OtherCalculationMethod": {
                  "Code": "string",
                  "Description": "string",
                  "Name": "string"
                },
                "OtherDestination": {
                  "Code": "string",
                  "Description": "string",
                  "Name": "string"
                },
                "TierBand": [
                  {
                    "AER": "string",
                    "ApplicationFrequency": "FQAT",
                    "BankInterestRate": "string",
                    "BankInterestRateType": "INBB",
                    "CalculationFrequency": "FQAT",
                    "DepositInterestAppliedCoverage": "INBA",
                    "FixedVariableInterestRateType": "INFI",
                    "Identification": "string",
                    "Notes": [
                      "string"
                    ],
                    "OtherApplicationFrequency": {
                      "Code": "string",
                      "Description": "string",
                      "Name": "string"
                    },
                    "OtherBankInterestType": {
                      "Code": "string",
                      "Description": "string",
                      "Name": "string"
                    },
                    "OtherCalculationFrequency": {
                      "Code": "string",
                      "Description": "string",
                      "Name": "string"
                    },
                    "TierValueMaximum": "string",
                    "TierValueMinimum": "string"
                  }
                ],
                "TierBandMethod": "INBA"
              }
            ]
          },
          "Description": "string",
          "LoanInterest": {
            "LoanInterestTierBandSet": [
              {
                "CalculationMethod": "ITCO",
                "Identification": "string",
                "LoanInterestFeesCharges": [
                  {
                    "LoanInterestFeeChargeCap": [
                      {
                        "CappingPeriod": "FEAC",
                        "FeeCapAmount": "string",
                        "FeeCapOccurrence": 0,
                        "FeeType": [
                          "FEPF"
                        ],
                        "MinMaxType": "FMMN",
                        "Notes": [
                          "string"
                        ],
                        "OtherFeeType": [
                          {
                            "Code": "string",
                            "Description": "string",
                            "Name": "string"
                          }
                        ]
                      }
                    ],
                    "LoanInterestFeeChargeDetail": [
                      {
                        "ApplicationFrequency": "FEAC",
                        "CalculationFrequency": "FEAC",
                        "FeeAmount": "string",
                        "FeeRate": "string",
                        "FeeRateType": "INBB",
                        "FeeType": "FEPF",
                        "NegotiableIndicator": true,
                        "Notes": [
                          "string"
                        ],
                        "OtherApplicationFrequency": {
                          "Code": "string",
                          "Description": "string",
                          "Name": "string"
                        },
                        "OtherCalculationFrequency": {
                          "Code": "string",
                          "Description": "string",
                          "Name": "string"
                        },
                        "OtherFeeRateType": {
                          "Code": "string",
                          "Description": "string",
                          "Name": "string"
                        },
                        "OtherFeeType": {
                          "Code": "string",
                          "Description": "string",
                          "FeeCategory": "FCOT",
                          "Name": "string"
                        }
                      }
                    ]
                  }
                ],
                "LoanInterestTierBand": [
                  {
                    "FixedVariableInterestRateType": "INFI",
                    "Identification": "string",
                    "LoanInterestFeesCharges": [
                      {
                        "LoanInterestFeeChargeCap": [
                          {
                            "CappingPeriod": "FEAC",
                            "FeeCapAmount": "string",
                            "FeeCapOccurrence": 0,
                            "FeeType": [
                              "FEPF"
                            ],
                            "MinMaxType": "FMMN",
                            "Notes": [
                              "string"
                            ],
                            "OtherFeeType": [
                              {
                                "Code": "string",
                                "Description": "string",
                                "Name": "string"
                              }
                            ]
                          }
                        ],
                        "LoanInterestFeeChargeDetail": [
                          {
                            "ApplicationFrequency": "FEAC",
                            "CalculationFrequency": "FEAC",
                            "FeeAmount": "string",
                            "FeeRate": "string",
                            "FeeRateType": "INBB",
                            "FeeType": "FEPF",
                            "NegotiableIndicator": true,
                            "Notes": [
                              "string"
                            ],
                            "OtherApplicationFrequency": {
                              "Code": "string",
                              "Description": "string",
                              "Name": "string"
                            },
                            "OtherCalculationFrequency": {
                              "Code": "string",
                              "Description": "string",
                              "Name": "string"
                            },
                            "OtherFeeRateType": {
                              "Code": "string",
                              "Description": "string",
                              "Name": "string"
                            },
                            "OtherFeeType": {
                              "Code": "string",
                              "Description": "string",
                              "FeeCategory": "FCOT",
                              "Name": "string"
                            }
                          }
                        ]
                      }
                    ],
                    "LoanProviderInterestRate": "string",
                    "LoanProviderInterestRateType": "INBB",
                    "MaxTermPeriod": "PACT",
                    "MinTermPeriod": "PACT",
                    "Notes": [
                      "string"
                    ],
                    "OtherLoanProviderInterestRateType": {
                      "Code": "string",
                      "Description": "string",
                      "Name": "string"
                    },
                    "RepAPR": "string",
                    "TierValueMaxTerm": 0,
                    "TierValueMaximum": "string",
                    "TierValueMinTerm": 0,
                    "TierValueMinimum": "string"
                  }
                ],
                "Notes": [
                  "string"
                ],
                "OtherCalculationMethod": {
                  "Code": "string",
                  "Description": "string",
                  "Name": "string"
                },
                "TierBandMethod": "INBA"
              }
            ],
            "Notes": [
              "string"
            ]
          },
          "Name": "string",
          "OtherFeesCharges": [
            {
              "FeeChargeCap": [
                {
                  "CappingPeriod": "PACT",
                  "FeeCapAmount": "string",
                  "FeeCapOccurrence": 0,
                  "FeeType": [
                    "FEPF"
                  ],
                  "MinMaxType": "FMMN",
                  "Notes": [
                    "string"
                  ],
                  "OtherFeeType": [
                    {
                      "Code": "string",
                      "Description": "string",
                      "Name": "string"
                    }
                  ]
                }
              ],
              "FeeChargeDetail": [
                {
                  "ApplicationFrequency": "FEAC",
                  "CalculationFrequency": "FEAC",
                  "FeeAmount": "string",
                  "FeeApplicableRange": {
                    "MaximumAmount": "string",
                    "MaximumRate": "string",
                    "MinimumAmount": "string",
                    "MinimumRate": "string"
                  },
                  "FeeCategory": "FCOT",
                  "FeeChargeCap": [
                    {
                      "CappingPeriod": "PACT",
                      "FeeCapAmount": "string",
                      "FeeCapOccurrence": 0,
                      "FeeType": [
                        "FEPF"
                      ],
                      "MinMaxType": "FMMN",
                      "Notes": [
                        "string"
                      ],
                      "OtherFeeType": [
                        {
                          "Code": "string",
                          "Description": "string",
                          "Name": "string"
                        }
                      ]
                    }
                  ],
                  "FeeRate": "string",
                  "FeeRateType": "INBB",
                  "FeeType": "FEPF",
                  "NegotiableIndicator": true,
                  "Notes": [
                    "string"
                  ],
                  "OtherApplicationFrequency": {
                    "Code": "string",
                    "Description": "string",
                    "Name": "string"
                  },
                  "OtherCalculationFrequency": {
                    "Code": "string",
                    "Description": "string",
                    "Name": "string"
                  },
                  "OtherFeeCategoryType": {
                    "Code": "string",
                    "Description": "string",
                    "Name": "string"
                  },
                  "OtherFeeRateType": {
                    "Code": "string",
                    "Description": "string",
                    "Name": "string"
                  },
                  "OtherFeeType": {
                    "Code": "string",
                    "Description": "string",
                    "FeeCategory": "FCOT",
                    "Name": "string"
                  }
                }
              ],
              "OtherTariffType": {
                "Code": "string",
                "Description": "string",
                "Name": "string"
              },
              "TariffName": "string",
              "TariffType": "TTEL"
            }
          ],
          "Overdraft": {
            "Notes": [
              "string"
            ],
            "OverdraftTierBandSet": [
              {
                "AuthorisedIndicator": true,
                "BufferAmount": "string",
                "Identification": "string",
                "Notes": [
                  "string"
                ],
                "OverdraftFeesCharges": [
                  {
                    "OverdraftFeeChargeCap": [
                      {
                        "CappingPeriod": "PACT",
                        "FeeCapAmount": "string",
                        "FeeCapOccurrence": 0,
                        "FeeType": [
                          "FBAO"
                        ],
                        "MinMaxType": "FMMN",
                        "Notes": [
                          "string"
                        ],
                        "OtherFeeType": [
                          {
                            "Code": "string",
                            "Description": "string",
                            "Name": "string"
                          }
                        ]
                      }
                    ],
                    "OverdraftFeeChargeDetail": [
                      {
                        "ApplicationFrequency": "FEAC",
                        "CalculationFrequency": "FEAC",
                        "FeeAmount": "string",
                        "FeeRate": "string",
                        "FeeRateType": "INBB",
                        "FeeType": "FBAO",
                        "IncrementalBorrowingAmount": "string",
                        "NegotiableIndicator": true,
                        "Notes": [
                          "string"
                        ],
                        "OtherApplicationFrequency": {
                          "Code": "string",
                          "Description": "string",
                          "Name": "string"
                        },
                        "OtherCalculationFrequency": {
                          "Code": "string",
                          "Description": "string",
                          "Name": "string"
                        },
                        "OtherFeeRateType": {
                          "Code": "string",
                          "Description": "string",
                          "Name": "string"
                        },
                        "OtherFeeType": {
                          "Code": "string",
                          "Description": "string",
                          "Name": "string"
                        },
                        "OverdraftControlIndicator": true,
                        "OverdraftFeeChargeCap": [
                          {
                            "CappingPeriod": "PACT",
                            "FeeCapAmount": "string",
                            "FeeCapOccurrence": 0,
                            "FeeType": [
                              "FBAO"
                            ],
                            "MinMaxType": "FMMN",
                            "Notes": [
                              "string"
                            ],
                            "OtherFeeType": [
                              {
                                "Code": "string",
                                "Description": "string",
                                "Name": "string"
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ],
                "OverdraftTierBand": [
                  {
                    "AgreementLengthMax": 0,
                    "AgreementLengthMin": 0,
                    "AgreementPeriod": "PACT",
                    "BankGuaranteedIndicator": true,
                    "EAR": "string",
                    "Identification": "string",
                    "Notes": [
                      "string"
                    ],
                    "OverdraftFeesCharges": [
                      {
                        "OverdraftFeeChargeCap": [
                          {
                            "CappingPeriod": "PACT",
                            "FeeCapAmount": "string",
                            "FeeCapOccurrence": 0,
                            "FeeType": [
                              "FBAO"
                            ],
                            "MinMaxType": "FMMN",
                            "Notes": [
                              "string"
                            ],
                            "OtherFeeType": [
                              {
                                "Code": "string",
                                "Description": "string",
                                "Name": "string"
                              }
                            ]
                          }
                        ],
                        "OverdraftFeeChargeDetail": [
                          {
                            "ApplicationFrequency": "FEAC",
                            "CalculationFrequency": "FEAC",
                            "FeeAmount": "string",
                            "FeeRate": "string",
                            "FeeRateType": "INBB",
                            "FeeType": "FBAO",
                            "IncrementalBorrowingAmount": "string",
                            "NegotiableIndicator": true,
                            "Notes": [
                              "string"
                            ],
                            "OtherApplicationFrequency": {
                              "Code": "string",
                              "Description": "string",
                              "Name": "string"
                            },
                            "OtherCalculationFrequency": {
                              "Code": "string",
                              "Description": "string",
                              "Name": "string"
                            },
                            "OtherFeeRateType": {
                              "Code": "string",
                              "Description": "string",
                              "Name": "string"
                            },
                            "OtherFeeType": {
                              "Code": "string",
                              "Description": "string",
                              "Name": "string"
                            },
                            "OverdraftControlIndicator": true,
                            "OverdraftFeeChargeCap": [
                              {
                                "CappingPeriod": "PACT",
                                "FeeCapAmount": "string",
                                "FeeCapOccurrence": 0,
                                "FeeType": [
                                  "FBAO"
                                ],
                                "MinMaxType": "FMMN",
                                "Notes": [
                                  "string"
                                ],
                                "OtherFeeType": [
                                  {
                                    "Code": "string",
                                    "Description": "string",
                                    "Name": "string"
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ],
                    "OverdraftInterestChargingCoverage": "INBA",
                    "TierValueMax": "string",
                    "TierValueMin": "string"
                  }
                ],
                "OverdraftType": "OVCO",
                "TierBandMethod": "INBA"
              }
            ]
          },
          "ProductDetails": {
            "FeeFreeLength": 0,
            "FeeFreeLengthPeriod": "PACT",
            "MonthlyMaximumCharge": "string",
            "Notes": [
              "string"
            ],
            "OtherSegment": {
              "Code": "string",
              "Description": "string",
              "Name": "string"
            },
            "Segment": [
              "GEAS"
            ]
          },
          "Repayment": {
            "AmountType": "RABD",
            "Notes": [
              "string"
            ],
            "OtherAmountType": {
              "Code": "string",
              "Description": "string",
              "Name": "string"
            },
            "OtherRepaymentFrequency": {
              "Code": "string",
              "Description": "string",
              "Name": "string"
            },
            "OtherRepaymentType": {
              "Code": "string",
              "Description": "string",
              "Name": "string"
            },
            "RepaymentFeeCharges": {
              "RepaymentFeeChargeCap": [
                {
                  "CappingPeriod": "PACT",
                  "FeeCapAmount": "string",
                  "FeeCapOccurrence": 0,
                  "FeeType": [
                    "FEPF"
                  ],
                  "MinMaxType": "FMMN",
                  "Notes": [
                    "string"
                  ],
                  "OtherFeeType": [
                    {
                      "Code": "string",
                      "Description": "string",
                      "Name": "string"
                    }
                  ]
                }
              ],
              "RepaymentFeeChargeDetail": [
                {
                  "ApplicationFrequency": "FEAC",
                  "CalculationFrequency": "FEAC",
                  "FeeAmount": "string",
                  "FeeRate": "string",
                  "FeeRateType": "INBB",
                  "FeeType": "FEPF",
                  "NegotiableIndicator": true,
                  "Notes": [
                    "string"
                  ],
                  "OtherApplicationFrequency": {
                    "Code": "string",
                    "Description": "string",
                    "Name": "string"
                  },
                  "OtherCalculationFrequency": {
                    "Code": "string",
                    "Description": "string",
                    "Name": "string"
                  },
                  "OtherFeeRateType": {
                    "Code": "string",
                    "Description": "string",
                    "Name": "string"
                  },
                  "OtherFeeType": {
                    "Code": "string",
                    "Description": "string",
                    "FeeCategory": "FCOT",
                    "Name": "string"
                  }
                }
              ]
            },
            "RepaymentFrequency": "SMDA",
            "RepaymentHoliday": [
              {
                "MaxHolidayLength": 0,
                "MaxHolidayPeriod": "PACT",
                "Notes": [
                  "string"
                ]
              }
            ],
            "RepaymentType": "USBA"
          },
          "SupplementaryData": {}
        },
        "PCA": {
          "CreditInterest": {
            "TierBandSet": [
              {
                "CalculationMethod": "Compound",
                "Destination": "PayAway",
                "Notes": [
                  "string"
                ],
                "TierBand": [
                  {
                    "AER": "string",
                    "ApplicationFrequency": "PerAcademicTerm",
                    "BankInterestRate": "string",
                    "BankInterestRateType": "LinkedBaseRate",
                    "CalculationFrequency": "PerAcademicTerm",
                    "DepositInterestAppliedCoverage": "Tiered",
                    "FixedVariableInterestRateType": "Fixed",
                    "Identification": "string",
                    "Notes": [
                      "string"
                    ],
                    "OtherApplicationFrequency": {
                      "Code": "stri",
                      "Description": "string",
                      "Name": "string"
                    },
                    "OtherBankInterestType": {
                      "Code": "stri",
                      "Description": "string",
                      "Name": "string"
                    },
                    "OtherCalculationFrequency": {
                      "Code": "stri",
                      "Description": "string",
                      "Name": "string"
                    },
                    "TierValueMaximum": "string",
                    "TierValueMinimum": "string"
                  }
                ],
                "TierBandMethod": "Tiered"
              }
            ]
          },
          "OtherFeesCharges": {
            "FeeChargeCap": [
              {
                "CappingPeriod": "AcademicTerm",
                "FeeCapAmount": "string",
                "FeeCapOccurrence": 0,
                "FeeType": [
                  "ServiceCAccountFee"
                ],
                "MinMaxType": "Minimum",
                "Notes": [
                  "string"
                ],
                "OtherFeeType": [
                  {
                    "Code": "stri",
                    "Description": "string",
                    "Name": "string"
                  }
                ]
              }
            ],
            "FeeChargeDetail": [
              {
                "ApplicationFrequency": "AccountClosing",
                "CalculationFrequency": "AccountClosing",
                "FeeAmount": "string",
                "FeeApplicableRange": {
                  "MaximumAmount": "string",
                  "MaximumRate": "string",
                  "MinimumAmount": "string",
                  "MinimumRate": "string"
                },
                "FeeCategory": "Other",
                "FeeChargeCap": [
                  {
                    "CappingPeriod": "AcademicTerm",
                    "FeeCapAmount": "string",
                    "FeeCapOccurrence": 0,
                    "FeeType": [
                      "ServiceCAccountFee"
                    ],
                    "MinMaxType": "Minimum",
                    "Notes": [
                      "string"
                    ],
                    "OtherFeeType": [
                      {
                        "Code": "stri",
                        "Description": "string",
                        "Name": "string"
                      }
                    ]
                  }
                ],
                "FeeRate": "string",
                "FeeRateType": "LinkedBaseRate",
                "FeeType": "ServiceCAccountFee",
                "Notes": [
                  "string"
                ],
                "OtherApplicationFrequency": {
                  "Code": "stri",
                  "Description": "string",
                  "Name": "string"
                },
                "OtherCalculationFrequency": {
                  "Code": "stri",
                  "Description": "string",
                  "Name": "string"
                },
                "OtherFeeCategoryType": {
                  "Code": "stri",
                  "Description": "string",
                  "Name": "string"
                },
                "OtherFeeRateType": {
                  "Code": "stri",
                  "Description": "string",
                  "Name": "string"
                },
                "OtherFeeType": {
                  "Code": "stri",
                  "Description": "string",
                  "FeeCategory": "Other",
                  "Name": "string"
                }
              }
            ]
          },
          "Overdraft": {
            "Notes": [
              "string"
            ],
            "OverdraftTierBandSet": [
              {
                "AuthorisedIndicator": true,
                "BufferAmount": "string",
                "Identification": "string",
                "Notes": [
                  "string"
                ],
                "OverdraftFeesCharges": [
                  {
                    "OverdraftFeeChargeCap": [
                      {
                        "CappingPeriod": "AcademicTerm",
                        "FeeCapAmount": "string",
                        "FeeCapOccurrence": 0,
                        "FeeType": [
                          "ArrangedOverdraft"
                        ],
                        "MinMaxType": "Minimum",
                        "Notes": [
                          "string"
                        ],
                        "OtherFeeType": [
                          {
                            "Code": "stri",
                            "Description": "string",
                            "Name": "string"
                          }
                        ],
                        "OverdraftControlIndicator": true
                      }
                    ],
                    "OverdraftFeeChargeDetail": [
                      {
                        "ApplicationFrequency": "AccountClosing",
                        "CalculationFrequency": "AccountClosing",
                        "FeeAmount": "string",
                        "FeeRate": "string",
                        "FeeRateType": "LinkedBaseRate",
                        "FeeType": "ArrangedOverdraft",
                        "IncrementalBorrowingAmount": "string",
                        "Notes": [
                          "string"
                        ],
                        "OtherApplicationFrequency": {
                          "Code": "stri",
                          "Description": "string",
                          "Name": "string"
                        },
                        "OtherCalculationFrequency": {
                          "Code": "stri",
                          "Description": "string",
                          "Name": "string"
                        },
                        "OtherFeeRateType": {
                          "Code": "stri",
                          "Description": "string",
                          "Name": "string"
                        },
                        "OtherFeeType": {
                          "Code": "stri",
                          "Description": "string",
                          "Name": "string"
                        },
                        "OverdraftControlIndicator": true,
                        "OverdraftFeeChargeCap": {
                          "CappingPeriod": "AcademicTerm",
                          "FeeCapAmount": "string",
                          "FeeCapOccurrence": 0,
                          "FeeType": [
                            "ArrangedOverdraft"
                          ],
                          "MinMaxType": "Minimum",
                          "Notes": [
                            "string"
                          ],
                          "OtherFeeType": [
                            {
                              "Code": "stri",
                              "Description": "string",
                              "Name": "string"
                            }
                          ],
                          "OverdraftControlIndicator": true
                        }
                      }
                    ]
                  }
                ],
                "OverdraftTierBand": [
                  {
                    "BankGuaranteedIndicator": true,
                    "EAR": "string",
                    "Identification": "string",
                    "Notes": [
                      "string"
                    ],
                    "OverdraftFeesCharges": [
                      {
                        "OverdraftFeeChargeCap": [
                          {
                            "CappingPeriod": "AcademicTerm",
                            "FeeCapAmount": "string",
                            "FeeCapOccurrence": 0,
                            "FeeType": [
                              "ArrangedOverdraft"
                            ],
                            "MinMaxType": "Minimum",
                            "Notes": [
                              "string"
                            ],
                            "OtherFeeType": [
                              {
                                "Code": "stri",
                                "Description": "string",
                                "Name": "string"
                              }
                            ],
                            "OverdraftControlIndicator": true
                          }
                        ],
                        "OverdraftFeeChargeDetail": [
                          {
                            "ApplicationFrequency": "AccountClosing",
                            "CalculationFrequency": "AccountClosing",
                            "FeeAmount": "string",
                            "FeeRate": "string",
                            "FeeRateType": "LinkedBaseRate",
                            "FeeType": "ArrangedOverdraft",
                            "IncrementalBorrowingAmount": "string",
                            "Notes": [
                              "string"
                            ],
                            "OtherApplicationFrequency": {
                              "Code": "stri",
                              "Description": "string",
                              "Name": "string"
                            },
                            "OtherCalculationFrequency": {
                              "Code": "stri",
                              "Description": "string",
                              "Name": "string"
                            },
                            "OtherFeeRateType": {
                              "Code": "stri",
                              "Description": "string",
                              "Name": "string"
                            },
                            "OtherFeeType": {
                              "Code": "stri",
                              "Description": "string",
                              "Name": "string"
                            },
                            "OverdraftControlIndicator": true,
                            "OverdraftFeeChargeCap": {
                              "CappingPeriod": "AcademicTerm",
                              "FeeCapAmount": "string",
                              "FeeCapOccurrence": 0,
                              "FeeType": [
                                "ArrangedOverdraft"
                              ],
                              "MinMaxType": "Minimum",
                              "Notes": [
                                "string"
                              ],
                              "OtherFeeType": [
                                {
                                  "Code": "stri",
                                  "Description": "string",
                                  "Name": "string"
                                }
                              ],
                              "OverdraftControlIndicator": true
                            }
                          }
                        ]
                      }
                    ],
                    "OverdraftInterestChargingCoverage": "Tiered",
                    "RepresentativeAPR": "string",
                    "TierValueMax": "string",
                    "TierValueMin": "string"
                  }
                ],
                "OverdraftType": "Committed",
                "TierBandMethod": "Tiered"
              }
            ]
          },
          "ProductDetails": {
            "MonthlyMaximumCharge": "string",
            "Notes": [
              "string"
            ],
            "Segment": [
              "Basic"
            ]
          }
        },
        "ProductId": "string",
        "ProductName": "string",
        "ProductType": "BusinessCurrentAccount",
        "SecondaryProductId": "string"
      }
    ]
  },
  "Links": {
    "First": "http://example.com",
    "Last": "http://example.com",
    "Next": "http://example.com",
    "Prev": "http://example.com",
    "Self": "http://example.com"
  },
  "Meta": {
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z",
    "TotalPages": 0
  }
}
```

> 400 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 403 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 500 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
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
curl https://example.com/products \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /products`

<h3 id="get-products-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. <br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: <br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|

> Example responses

> 200 Response

```json
{
  "Data": {
    "Product": [
      {
        "AccountId": "string",
        "BCA": {
          "CreditInterest": {
            "TierBandSet": [
              {
                "CalculationMethod": "Compound",
                "Destination": "PayAway",
                "Notes": [
                  "string"
                ],
                "TierBand": [
                  {
                    "AER": "string",
                    "ApplicationFrequency": "Daily",
                    "BankInterestRate": "string",
                    "BankInterestRateType": "Gross",
                    "CalculationFrequency": "Daily",
                    "DepositInterestAppliedCoverage": "Banded",
                    "FixedVariableInterestRateType": "Fixed",
                    "Identification": "string",
                    "Notes": [
                      "string"
                    ],
                    "OtherApplicationFrequency": {
                      "Code": "stri",
                      "Description": "string",
                      "Name": "string"
                    },
                    "OtherBankInterestType": {
                      "Code": "stri",
                      "Description": "string",
                      "Name": "string"
                    },
                    "OtherCalculationFrequency": {
                      "Code": "stri",
                      "Description": "string",
                      "Name": "string"
                    },
                    "TierValueMaximum": "string",
                    "TierValueMinimum": "string"
                  }
                ],
                "TierBandMethod": "Banded"
              }
            ]
          },
          "OtherFeesCharges": [
            {
              "FeeChargeCap": [
                {
                  "CappingPeriod": "Day",
                  "FeeCapAmount": "string",
                  "FeeCapOccurrence": 0,
                  "FeeType": [
                    "Other"
                  ],
                  "MinMaxType": "Minimum",
                  "Notes": [
                    "string"
                  ],
                  "OtherFeeType": [
                    {
                      "Code": "stri",
                      "Description": "string",
                      "Name": "string"
                    }
                  ]
                }
              ],
              "FeeChargeDetail": [
                {
                  "ApplicationFrequency": "OnClosing",
                  "CalculationFrequency": "OnClosing",
                  "FeeAmount": "string",
                  "FeeApplicableRange": {
                    "MaximumAmount": "string",
                    "MaximumRate": "string",
                    "MinimumAmount": "string",
                    "MinimumRate": "string"
                  },
                  "FeeCategory": "Other",
                  "FeeChargeCap": [
                    {
                      "CappingPeriod": "Day",
                      "FeeCapAmount": "string",
                      "FeeCapOccurrence": 0,
                      "FeeType": [
                        "Other"
                      ],
                      "MinMaxType": "Minimum",
                      "Notes": [
                        "string"
                      ],
                      "OtherFeeType": [
                        {
                          "Code": "stri",
                          "Description": "string",
                          "Name": "string"
                        }
                      ]
                    }
                  ],
                  "FeeRate": "string",
                  "FeeRateType": "Gross",
                  "FeeType": "Other",
                  "NegotiableIndicator": true,
                  "Notes": [
                    "string"
                  ],
                  "OtherApplicationFrequency": {
                    "Code": "stri",
                    "Description": "string",
                    "Name": "string"
                  },
                  "OtherCalculationFrequency": {
                    "Code": "stri",
                    "Description": "string",
                    "Name": "string"
                  },
                  "OtherFeeCategoryType": {
                    "Code": "stri",
                    "Description": "string",
                    "Name": "string"
                  },
                  "OtherFeeRateType": {
                    "Code": "stri",
                    "Description": "string",
                    "Name": "string"
                  },
                  "OtherFeeType": {
                    "Code": "stri",
                    "Description": "string",
                    "FeeCategory": "Other",
                    "Name": "string"
                  }
                }
              ],
              "OtherTariffType": {
                "Code": "stri",
                "Description": "string",
                "Name": "string"
              },
              "TariffName": "string",
              "TariffType": "Electronic"
            }
          ],
          "Overdraft": {
            "Notes": [
              "string"
            ],
            "OverdraftTierBandSet": [
              {
                "AuthorisedIndicator": true,
                "BufferAmount": "string",
                "Identification": "string",
                "Notes": [
                  "string"
                ],
                "OverdraftFeesCharges": [
                  {
                    "OverdraftFeeChargeCap": [
                      {
                        "CappingPeriod": "Day",
                        "FeeCapAmount": "string",
                        "FeeCapOccurrence": 0,
                        "FeeType": [
                          "ArrangedOverdraft"
                        ],
                        "MinMaxType": "Minimum",
                        "Notes": [
                          "string"
                        ],
                        "OtherFeeType": [
                          {
                            "Code": "stri",
                            "Description": "string",
                            "Name": "string"
                          }
                        ]
                      }
                    ],
                    "OverdraftFeeChargeDetail": [
                      {
                        "ApplicationFrequency": "OnClosing",
                        "CalculationFrequency": "OnClosing",
                        "FeeAmount": "string",
                        "FeeRate": "string",
                        "FeeRateType": "Gross",
                        "FeeType": "ArrangedOverdraft",
                        "IncrementalBorrowingAmount": "string",
                        "NegotiableIndicator": true,
                        "Notes": [
                          "string"
                        ],
                        "OtherApplicationFrequency": {
                          "Code": "stri",
                          "Description": "string",
                          "Name": "string"
                        },
                        "OtherCalculationFrequency": {
                          "Code": "stri",
                          "Description": "string",
                          "Name": "string"
                        },
                        "OtherFeeRateType": {
                          "Code": "stri",
                          "Description": "string",
                          "Name": "string"
                        },
                        "OtherFeeType": {
                          "Code": "stri",
                          "Description": "string",
                          "Name": "string"
                        },
                        "OverdraftControlIndicator": true,
                        "OverdraftFeeChargeCap": [
                          {
                            "CappingPeriod": "Day",
                            "FeeCapAmount": "string",
                            "FeeCapOccurrence": 0,
                            "FeeType": [
                              "ArrangedOverdraft"
                            ],
                            "MinMaxType": "Minimum",
                            "Notes": [
                              "string"
                            ],
                            "OtherFeeType": [
                              {
                                "Code": "stri",
                                "Description": "string",
                                "Name": "string"
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ],
                "OverdraftTierBand": [
                  {
                    "AgreementLengthMax": 0,
                    "AgreementLengthMin": 0,
                    "AgreementPeriod": "Day",
                    "BankGuaranteedIndicator": true,
                    "EAR": "string",
                    "Identification": "string",
                    "Notes": [
                      "string"
                    ],
                    "OverdraftFeesCharges": [
                      {
                        "OverdraftFeeChargeCap": [
                          {
                            "CappingPeriod": "Day",
                            "FeeCapAmount": "string",
                            "FeeCapOccurrence": 0,
                            "FeeType": [
                              "ArrangedOverdraft"
                            ],
                            "MinMaxType": "Minimum",
                            "Notes": [
                              "string"
                            ],
                            "OtherFeeType": [
                              {
                                "Code": "stri",
                                "Description": "string",
                                "Name": "string"
                              }
                            ]
                          }
                        ],
                        "OverdraftFeeChargeDetail": [
                          {
                            "ApplicationFrequency": "OnClosing",
                            "CalculationFrequency": "OnClosing",
                            "FeeAmount": "string",
                            "FeeRate": "string",
                            "FeeRateType": "Gross",
                            "FeeType": "ArrangedOverdraft",
                            "IncrementalBorrowingAmount": "string",
                            "NegotiableIndicator": true,
                            "Notes": [
                              "string"
                            ],
                            "OtherApplicationFrequency": {
                              "Code": "stri",
                              "Description": "string",
                              "Name": "string"
                            },
                            "OtherCalculationFrequency": {
                              "Code": "stri",
                              "Description": "string",
                              "Name": "string"
                            },
                            "OtherFeeRateType": {
                              "Code": "stri",
                              "Description": "string",
                              "Name": "string"
                            },
                            "OtherFeeType": {
                              "Code": "stri",
                              "Description": "string",
                              "Name": "string"
                            },
                            "OverdraftControlIndicator": true,
                            "OverdraftFeeChargeCap": [
                              {
                                "CappingPeriod": "Day",
                                "FeeCapAmount": "string",
                                "FeeCapOccurrence": 0,
                                "FeeType": [
                                  "ArrangedOverdraft"
                                ],
                                "MinMaxType": "Minimum",
                                "Notes": [
                                  "string"
                                ],
                                "OtherFeeType": [
                                  {
                                    "Code": "stri",
                                    "Description": "string",
                                    "Name": "string"
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ],
                    "OverdraftInterestChargingCoverage": "Banded",
                    "RepresentativeAPR": "string",
                    "TierValueMax": "string",
                    "TierValueMin": "string"
                  }
                ],
                "OverdraftType": "Committed",
                "TierBandMethod": "Banded"
              }
            ]
          },
          "ProductDetails": {
            "FeeFreeLength": 0,
            "FeeFreeLengthPeriod": "Day",
            "Notes": [
              "string"
            ],
            "Segment": [
              "ClientAccount"
            ]
          }
        },
        "MarketingStateId": "string",
        "OtherProductType": {
          "CreditInterest": {
            "TierBandSet": [
              {
                "CalculationMethod": "ITCO",
                "Destination": "INOT",
                "Notes": [
                  "string"
                ],
                "OtherCalculationMethod": {
                  "Code": "string",
                  "Description": "string",
                  "Name": "string"
                },
                "OtherDestination": {
                  "Code": "string",
                  "Description": "string",
                  "Name": "string"
                },
                "TierBand": [
                  {
                    "AER": "string",
                    "ApplicationFrequency": "FQAT",
                    "BankInterestRate": "string",
                    "BankInterestRateType": "INBB",
                    "CalculationFrequency": "FQAT",
                    "DepositInterestAppliedCoverage": "INBA",
                    "FixedVariableInterestRateType": "INFI",
                    "Identification": "string",
                    "Notes": [
                      "string"
                    ],
                    "OtherApplicationFrequency": {
                      "Code": "string",
                      "Description": "string",
                      "Name": "string"
                    },
                    "OtherBankInterestType": {
                      "Code": "string",
                      "Description": "string",
                      "Name": "string"
                    },
                    "OtherCalculationFrequency": {
                      "Code": "string",
                      "Description": "string",
                      "Name": "string"
                    },
                    "TierValueMaximum": "string",
                    "TierValueMinimum": "string"
                  }
                ],
                "TierBandMethod": "INBA"
              }
            ]
          },
          "Description": "string",
          "LoanInterest": {
            "LoanInterestTierBandSet": [
              {
                "CalculationMethod": "ITCO",
                "Identification": "string",
                "LoanInterestFeesCharges": [
                  {
                    "LoanInterestFeeChargeCap": [
                      {
                        "CappingPeriod": "FEAC",
                        "FeeCapAmount": "string",
                        "FeeCapOccurrence": 0,
                        "FeeType": [
                          "FEPF"
                        ],
                        "MinMaxType": "FMMN",
                        "Notes": [
                          "string"
                        ],
                        "OtherFeeType": [
                          {
                            "Code": "string",
                            "Description": "string",
                            "Name": "string"
                          }
                        ]
                      }
                    ],
                    "LoanInterestFeeChargeDetail": [
                      {
                        "ApplicationFrequency": "FEAC",
                        "CalculationFrequency": "FEAC",
                        "FeeAmount": "string",
                        "FeeRate": "string",
                        "FeeRateType": "INBB",
                        "FeeType": "FEPF",
                        "NegotiableIndicator": true,
                        "Notes": [
                          "string"
                        ],
                        "OtherApplicationFrequency": {
                          "Code": "string",
                          "Description": "string",
                          "Name": "string"
                        },
                        "OtherCalculationFrequency": {
                          "Code": "string",
                          "Description": "string",
                          "Name": "string"
                        },
                        "OtherFeeRateType": {
                          "Code": "string",
                          "Description": "string",
                          "Name": "string"
                        },
                        "OtherFeeType": {
                          "Code": "string",
                          "Description": "string",
                          "FeeCategory": "FCOT",
                          "Name": "string"
                        }
                      }
                    ]
                  }
                ],
                "LoanInterestTierBand": [
                  {
                    "FixedVariableInterestRateType": "INFI",
                    "Identification": "string",
                    "LoanInterestFeesCharges": [
                      {
                        "LoanInterestFeeChargeCap": [
                          {
                            "CappingPeriod": "FEAC",
                            "FeeCapAmount": "string",
                            "FeeCapOccurrence": 0,
                            "FeeType": [
                              "FEPF"
                            ],
                            "MinMaxType": "FMMN",
                            "Notes": [
                              "string"
                            ],
                            "OtherFeeType": [
                              {
                                "Code": "string",
                                "Description": "string",
                                "Name": "string"
                              }
                            ]
                          }
                        ],
                        "LoanInterestFeeChargeDetail": [
                          {
                            "ApplicationFrequency": "FEAC",
                            "CalculationFrequency": "FEAC",
                            "FeeAmount": "string",
                            "FeeRate": "string",
                            "FeeRateType": "INBB",
                            "FeeType": "FEPF",
                            "NegotiableIndicator": true,
                            "Notes": [
                              "string"
                            ],
                            "OtherApplicationFrequency": {
                              "Code": "string",
                              "Description": "string",
                              "Name": "string"
                            },
                            "OtherCalculationFrequency": {
                              "Code": "string",
                              "Description": "string",
                              "Name": "string"
                            },
                            "OtherFeeRateType": {
                              "Code": "string",
                              "Description": "string",
                              "Name": "string"
                            },
                            "OtherFeeType": {
                              "Code": "string",
                              "Description": "string",
                              "FeeCategory": "FCOT",
                              "Name": "string"
                            }
                          }
                        ]
                      }
                    ],
                    "LoanProviderInterestRate": "string",
                    "LoanProviderInterestRateType": "INBB",
                    "MaxTermPeriod": "PACT",
                    "MinTermPeriod": "PACT",
                    "Notes": [
                      "string"
                    ],
                    "OtherLoanProviderInterestRateType": {
                      "Code": "string",
                      "Description": "string",
                      "Name": "string"
                    },
                    "RepAPR": "string",
                    "TierValueMaxTerm": 0,
                    "TierValueMaximum": "string",
                    "TierValueMinTerm": 0,
                    "TierValueMinimum": "string"
                  }
                ],
                "Notes": [
                  "string"
                ],
                "OtherCalculationMethod": {
                  "Code": "string",
                  "Description": "string",
                  "Name": "string"
                },
                "TierBandMethod": "INBA"
              }
            ],
            "Notes": [
              "string"
            ]
          },
          "Name": "string",
          "OtherFeesCharges": [
            {
              "FeeChargeCap": [
                {
                  "CappingPeriod": "PACT",
                  "FeeCapAmount": "string",
                  "FeeCapOccurrence": 0,
                  "FeeType": [
                    "FEPF"
                  ],
                  "MinMaxType": "FMMN",
                  "Notes": [
                    "string"
                  ],
                  "OtherFeeType": [
                    {
                      "Code": "string",
                      "Description": "string",
                      "Name": "string"
                    }
                  ]
                }
              ],
              "FeeChargeDetail": [
                {
                  "ApplicationFrequency": "FEAC",
                  "CalculationFrequency": "FEAC",
                  "FeeAmount": "string",
                  "FeeApplicableRange": {
                    "MaximumAmount": "string",
                    "MaximumRate": "string",
                    "MinimumAmount": "string",
                    "MinimumRate": "string"
                  },
                  "FeeCategory": "FCOT",
                  "FeeChargeCap": [
                    {
                      "CappingPeriod": "PACT",
                      "FeeCapAmount": "string",
                      "FeeCapOccurrence": 0,
                      "FeeType": [
                        "FEPF"
                      ],
                      "MinMaxType": "FMMN",
                      "Notes": [
                        "string"
                      ],
                      "OtherFeeType": [
                        {
                          "Code": "string",
                          "Description": "string",
                          "Name": "string"
                        }
                      ]
                    }
                  ],
                  "FeeRate": "string",
                  "FeeRateType": "INBB",
                  "FeeType": "FEPF",
                  "NegotiableIndicator": true,
                  "Notes": [
                    "string"
                  ],
                  "OtherApplicationFrequency": {
                    "Code": "string",
                    "Description": "string",
                    "Name": "string"
                  },
                  "OtherCalculationFrequency": {
                    "Code": "string",
                    "Description": "string",
                    "Name": "string"
                  },
                  "OtherFeeCategoryType": {
                    "Code": "string",
                    "Description": "string",
                    "Name": "string"
                  },
                  "OtherFeeRateType": {
                    "Code": "string",
                    "Description": "string",
                    "Name": "string"
                  },
                  "OtherFeeType": {
                    "Code": "string",
                    "Description": "string",
                    "FeeCategory": "FCOT",
                    "Name": "string"
                  }
                }
              ],
              "OtherTariffType": {
                "Code": "string",
                "Description": "string",
                "Name": "string"
              },
              "TariffName": "string",
              "TariffType": "TTEL"
            }
          ],
          "Overdraft": {
            "Notes": [
              "string"
            ],
            "OverdraftTierBandSet": [
              {
                "AuthorisedIndicator": true,
                "BufferAmount": "string",
                "Identification": "string",
                "Notes": [
                  "string"
                ],
                "OverdraftFeesCharges": [
                  {
                    "OverdraftFeeChargeCap": [
                      {
                        "CappingPeriod": "PACT",
                        "FeeCapAmount": "string",
                        "FeeCapOccurrence": 0,
                        "FeeType": [
                          "FBAO"
                        ],
                        "MinMaxType": "FMMN",
                        "Notes": [
                          "string"
                        ],
                        "OtherFeeType": [
                          {
                            "Code": "string",
                            "Description": "string",
                            "Name": "string"
                          }
                        ]
                      }
                    ],
                    "OverdraftFeeChargeDetail": [
                      {
                        "ApplicationFrequency": "FEAC",
                        "CalculationFrequency": "FEAC",
                        "FeeAmount": "string",
                        "FeeRate": "string",
                        "FeeRateType": "INBB",
                        "FeeType": "FBAO",
                        "IncrementalBorrowingAmount": "string",
                        "NegotiableIndicator": true,
                        "Notes": [
                          "string"
                        ],
                        "OtherApplicationFrequency": {
                          "Code": "string",
                          "Description": "string",
                          "Name": "string"
                        },
                        "OtherCalculationFrequency": {
                          "Code": "string",
                          "Description": "string",
                          "Name": "string"
                        },
                        "OtherFeeRateType": {
                          "Code": "string",
                          "Description": "string",
                          "Name": "string"
                        },
                        "OtherFeeType": {
                          "Code": "string",
                          "Description": "string",
                          "Name": "string"
                        },
                        "OverdraftControlIndicator": true,
                        "OverdraftFeeChargeCap": [
                          {
                            "CappingPeriod": "PACT",
                            "FeeCapAmount": "string",
                            "FeeCapOccurrence": 0,
                            "FeeType": [
                              "FBAO"
                            ],
                            "MinMaxType": "FMMN",
                            "Notes": [
                              "string"
                            ],
                            "OtherFeeType": [
                              {
                                "Code": "string",
                                "Description": "string",
                                "Name": "string"
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ],
                "OverdraftTierBand": [
                  {
                    "AgreementLengthMax": 0,
                    "AgreementLengthMin": 0,
                    "AgreementPeriod": "PACT",
                    "BankGuaranteedIndicator": true,
                    "EAR": "string",
                    "Identification": "string",
                    "Notes": [
                      "string"
                    ],
                    "OverdraftFeesCharges": [
                      {
                        "OverdraftFeeChargeCap": [
                          {
                            "CappingPeriod": "PACT",
                            "FeeCapAmount": "string",
                            "FeeCapOccurrence": 0,
                            "FeeType": [
                              "FBAO"
                            ],
                            "MinMaxType": "FMMN",
                            "Notes": [
                              "string"
                            ],
                            "OtherFeeType": [
                              {
                                "Code": "string",
                                "Description": "string",
                                "Name": "string"
                              }
                            ]
                          }
                        ],
                        "OverdraftFeeChargeDetail": [
                          {
                            "ApplicationFrequency": "FEAC",
                            "CalculationFrequency": "FEAC",
                            "FeeAmount": "string",
                            "FeeRate": "string",
                            "FeeRateType": "INBB",
                            "FeeType": "FBAO",
                            "IncrementalBorrowingAmount": "string",
                            "NegotiableIndicator": true,
                            "Notes": [
                              "string"
                            ],
                            "OtherApplicationFrequency": {
                              "Code": "string",
                              "Description": "string",
                              "Name": "string"
                            },
                            "OtherCalculationFrequency": {
                              "Code": "string",
                              "Description": "string",
                              "Name": "string"
                            },
                            "OtherFeeRateType": {
                              "Code": "string",
                              "Description": "string",
                              "Name": "string"
                            },
                            "OtherFeeType": {
                              "Code": "string",
                              "Description": "string",
                              "Name": "string"
                            },
                            "OverdraftControlIndicator": true,
                            "OverdraftFeeChargeCap": [
                              {
                                "CappingPeriod": "PACT",
                                "FeeCapAmount": "string",
                                "FeeCapOccurrence": 0,
                                "FeeType": [
                                  "FBAO"
                                ],
                                "MinMaxType": "FMMN",
                                "Notes": [
                                  "string"
                                ],
                                "OtherFeeType": [
                                  {
                                    "Code": "string",
                                    "Description": "string",
                                    "Name": "string"
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ],
                    "OverdraftInterestChargingCoverage": "INBA",
                    "TierValueMax": "string",
                    "TierValueMin": "string"
                  }
                ],
                "OverdraftType": "OVCO",
                "TierBandMethod": "INBA"
              }
            ]
          },
          "ProductDetails": {
            "FeeFreeLength": 0,
            "FeeFreeLengthPeriod": "PACT",
            "MonthlyMaximumCharge": "string",
            "Notes": [
              "string"
            ],
            "OtherSegment": {
              "Code": "string",
              "Description": "string",
              "Name": "string"
            },
            "Segment": [
              "GEAS"
            ]
          },
          "Repayment": {
            "AmountType": "RABD",
            "Notes": [
              "string"
            ],
            "OtherAmountType": {
              "Code": "string",
              "Description": "string",
              "Name": "string"
            },
            "OtherRepaymentFrequency": {
              "Code": "string",
              "Description": "string",
              "Name": "string"
            },
            "OtherRepaymentType": {
              "Code": "string",
              "Description": "string",
              "Name": "string"
            },
            "RepaymentFeeCharges": {
              "RepaymentFeeChargeCap": [
                {
                  "CappingPeriod": "PACT",
                  "FeeCapAmount": "string",
                  "FeeCapOccurrence": 0,
                  "FeeType": [
                    "FEPF"
                  ],
                  "MinMaxType": "FMMN",
                  "Notes": [
                    "string"
                  ],
                  "OtherFeeType": [
                    {
                      "Code": "string",
                      "Description": "string",
                      "Name": "string"
                    }
                  ]
                }
              ],
              "RepaymentFeeChargeDetail": [
                {
                  "ApplicationFrequency": "FEAC",
                  "CalculationFrequency": "FEAC",
                  "FeeAmount": "string",
                  "FeeRate": "string",
                  "FeeRateType": "INBB",
                  "FeeType": "FEPF",
                  "NegotiableIndicator": true,
                  "Notes": [
                    "string"
                  ],
                  "OtherApplicationFrequency": {
                    "Code": "string",
                    "Description": "string",
                    "Name": "string"
                  },
                  "OtherCalculationFrequency": {
                    "Code": "string",
                    "Description": "string",
                    "Name": "string"
                  },
                  "OtherFeeRateType": {
                    "Code": "string",
                    "Description": "string",
                    "Name": "string"
                  },
                  "OtherFeeType": {
                    "Code": "string",
                    "Description": "string",
                    "FeeCategory": "FCOT",
                    "Name": "string"
                  }
                }
              ]
            },
            "RepaymentFrequency": "SMDA",
            "RepaymentHoliday": [
              {
                "MaxHolidayLength": 0,
                "MaxHolidayPeriod": "PACT",
                "Notes": [
                  "string"
                ]
              }
            ],
            "RepaymentType": "USBA"
          },
          "SupplementaryData": {}
        },
        "PCA": {
          "CreditInterest": {
            "TierBandSet": [
              {
                "CalculationMethod": "Compound",
                "Destination": "PayAway",
                "Notes": [
                  "string"
                ],
                "TierBand": [
                  {
                    "AER": "string",
                    "ApplicationFrequency": "PerAcademicTerm",
                    "BankInterestRate": "string",
                    "BankInterestRateType": "LinkedBaseRate",
                    "CalculationFrequency": "PerAcademicTerm",
                    "DepositInterestAppliedCoverage": "Tiered",
                    "FixedVariableInterestRateType": "Fixed",
                    "Identification": "string",
                    "Notes": [
                      "string"
                    ],
                    "OtherApplicationFrequency": {
                      "Code": "stri",
                      "Description": "string",
                      "Name": "string"
                    },
                    "OtherBankInterestType": {
                      "Code": "stri",
                      "Description": "string",
                      "Name": "string"
                    },
                    "OtherCalculationFrequency": {
                      "Code": "stri",
                      "Description": "string",
                      "Name": "string"
                    },
                    "TierValueMaximum": "string",
                    "TierValueMinimum": "string"
                  }
                ],
                "TierBandMethod": "Tiered"
              }
            ]
          },
          "OtherFeesCharges": {
            "FeeChargeCap": [
              {
                "CappingPeriod": "AcademicTerm",
                "FeeCapAmount": "string",
                "FeeCapOccurrence": 0,
                "FeeType": [
                  "ServiceCAccountFee"
                ],
                "MinMaxType": "Minimum",
                "Notes": [
                  "string"
                ],
                "OtherFeeType": [
                  {
                    "Code": "stri",
                    "Description": "string",
                    "Name": "string"
                  }
                ]
              }
            ],
            "FeeChargeDetail": [
              {
                "ApplicationFrequency": "AccountClosing",
                "CalculationFrequency": "AccountClosing",
                "FeeAmount": "string",
                "FeeApplicableRange": {
                  "MaximumAmount": "string",
                  "MaximumRate": "string",
                  "MinimumAmount": "string",
                  "MinimumRate": "string"
                },
                "FeeCategory": "Other",
                "FeeChargeCap": [
                  {
                    "CappingPeriod": "AcademicTerm",
                    "FeeCapAmount": "string",
                    "FeeCapOccurrence": 0,
                    "FeeType": [
                      "ServiceCAccountFee"
                    ],
                    "MinMaxType": "Minimum",
                    "Notes": [
                      "string"
                    ],
                    "OtherFeeType": [
                      {
                        "Code": "stri",
                        "Description": "string",
                        "Name": "string"
                      }
                    ]
                  }
                ],
                "FeeRate": "string",
                "FeeRateType": "LinkedBaseRate",
                "FeeType": "ServiceCAccountFee",
                "Notes": [
                  "string"
                ],
                "OtherApplicationFrequency": {
                  "Code": "stri",
                  "Description": "string",
                  "Name": "string"
                },
                "OtherCalculationFrequency": {
                  "Code": "stri",
                  "Description": "string",
                  "Name": "string"
                },
                "OtherFeeCategoryType": {
                  "Code": "stri",
                  "Description": "string",
                  "Name": "string"
                },
                "OtherFeeRateType": {
                  "Code": "stri",
                  "Description": "string",
                  "Name": "string"
                },
                "OtherFeeType": {
                  "Code": "stri",
                  "Description": "string",
                  "FeeCategory": "Other",
                  "Name": "string"
                }
              }
            ]
          },
          "Overdraft": {
            "Notes": [
              "string"
            ],
            "OverdraftTierBandSet": [
              {
                "AuthorisedIndicator": true,
                "BufferAmount": "string",
                "Identification": "string",
                "Notes": [
                  "string"
                ],
                "OverdraftFeesCharges": [
                  {
                    "OverdraftFeeChargeCap": [
                      {
                        "CappingPeriod": "AcademicTerm",
                        "FeeCapAmount": "string",
                        "FeeCapOccurrence": 0,
                        "FeeType": [
                          "ArrangedOverdraft"
                        ],
                        "MinMaxType": "Minimum",
                        "Notes": [
                          "string"
                        ],
                        "OtherFeeType": [
                          {
                            "Code": "stri",
                            "Description": "string",
                            "Name": "string"
                          }
                        ],
                        "OverdraftControlIndicator": true
                      }
                    ],
                    "OverdraftFeeChargeDetail": [
                      {
                        "ApplicationFrequency": "AccountClosing",
                        "CalculationFrequency": "AccountClosing",
                        "FeeAmount": "string",
                        "FeeRate": "string",
                        "FeeRateType": "LinkedBaseRate",
                        "FeeType": "ArrangedOverdraft",
                        "IncrementalBorrowingAmount": "string",
                        "Notes": [
                          "string"
                        ],
                        "OtherApplicationFrequency": {
                          "Code": "stri",
                          "Description": "string",
                          "Name": "string"
                        },
                        "OtherCalculationFrequency": {
                          "Code": "stri",
                          "Description": "string",
                          "Name": "string"
                        },
                        "OtherFeeRateType": {
                          "Code": "stri",
                          "Description": "string",
                          "Name": "string"
                        },
                        "OtherFeeType": {
                          "Code": "stri",
                          "Description": "string",
                          "Name": "string"
                        },
                        "OverdraftControlIndicator": true,
                        "OverdraftFeeChargeCap": {
                          "CappingPeriod": "AcademicTerm",
                          "FeeCapAmount": "string",
                          "FeeCapOccurrence": 0,
                          "FeeType": [
                            "ArrangedOverdraft"
                          ],
                          "MinMaxType": "Minimum",
                          "Notes": [
                            "string"
                          ],
                          "OtherFeeType": [
                            {
                              "Code": "stri",
                              "Description": "string",
                              "Name": "string"
                            }
                          ],
                          "OverdraftControlIndicator": true
                        }
                      }
                    ]
                  }
                ],
                "OverdraftTierBand": [
                  {
                    "BankGuaranteedIndicator": true,
                    "EAR": "string",
                    "Identification": "string",
                    "Notes": [
                      "string"
                    ],
                    "OverdraftFeesCharges": [
                      {
                        "OverdraftFeeChargeCap": [
                          {
                            "CappingPeriod": "AcademicTerm",
                            "FeeCapAmount": "string",
                            "FeeCapOccurrence": 0,
                            "FeeType": [
                              "ArrangedOverdraft"
                            ],
                            "MinMaxType": "Minimum",
                            "Notes": [
                              "string"
                            ],
                            "OtherFeeType": [
                              {
                                "Code": "stri",
                                "Description": "string",
                                "Name": "string"
                              }
                            ],
                            "OverdraftControlIndicator": true
                          }
                        ],
                        "OverdraftFeeChargeDetail": [
                          {
                            "ApplicationFrequency": "AccountClosing",
                            "CalculationFrequency": "AccountClosing",
                            "FeeAmount": "string",
                            "FeeRate": "string",
                            "FeeRateType": "LinkedBaseRate",
                            "FeeType": "ArrangedOverdraft",
                            "IncrementalBorrowingAmount": "string",
                            "Notes": [
                              "string"
                            ],
                            "OtherApplicationFrequency": {
                              "Code": "stri",
                              "Description": "string",
                              "Name": "string"
                            },
                            "OtherCalculationFrequency": {
                              "Code": "stri",
                              "Description": "string",
                              "Name": "string"
                            },
                            "OtherFeeRateType": {
                              "Code": "stri",
                              "Description": "string",
                              "Name": "string"
                            },
                            "OtherFeeType": {
                              "Code": "stri",
                              "Description": "string",
                              "Name": "string"
                            },
                            "OverdraftControlIndicator": true,
                            "OverdraftFeeChargeCap": {
                              "CappingPeriod": "AcademicTerm",
                              "FeeCapAmount": "string",
                              "FeeCapOccurrence": 0,
                              "FeeType": [
                                "ArrangedOverdraft"
                              ],
                              "MinMaxType": "Minimum",
                              "Notes": [
                                "string"
                              ],
                              "OtherFeeType": [
                                {
                                  "Code": "stri",
                                  "Description": "string",
                                  "Name": "string"
                                }
                              ],
                              "OverdraftControlIndicator": true
                            }
                          }
                        ]
                      }
                    ],
                    "OverdraftInterestChargingCoverage": "Tiered",
                    "RepresentativeAPR": "string",
                    "TierValueMax": "string",
                    "TierValueMin": "string"
                  }
                ],
                "OverdraftType": "Committed",
                "TierBandMethod": "Tiered"
              }
            ]
          },
          "ProductDetails": {
            "MonthlyMaximumCharge": "string",
            "Notes": [
              "string"
            ],
            "Segment": [
              "Basic"
            ]
          }
        },
        "ProductId": "string",
        "ProductName": "string",
        "ProductType": "BusinessCurrentAccount",
        "SecondaryProductId": "string"
      }
    ]
  },
  "Links": {
    "First": "http://example.com",
    "Last": "http://example.com",
    "Next": "http://example.com",
    "Prev": "http://example.com",
    "Self": "http://example.com"
  },
  "Meta": {
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z",
    "TotalPages": 0
  }
}
```

> 400 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 403 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 500 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

<h3 id="get-products-1-responses">Responses</h3>

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

## Get Scheduled Payments

<a id="opIdGetAccountsAccountIdScheduledPayments"></a>

> Code samples

```bash
curl https://example.com/accounts/string/scheduled-payments \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /accounts/{AccountId}/scheduled-payments`

<h3 id="get-scheduled-payments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|AccountId|path|string|true|AccountId|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. <br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: <br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|

> Example responses

> 200 Response

```json
{
  "Data": {
    "ScheduledPayment": [
      {
        "AccountId": "string",
        "CreditorAccount": {
          "Identification": "string",
          "Name": "string",
          "SchemeName": "string",
          "SecondaryIdentification": "string"
        },
        "CreditorAgent": {
          "Identification": "string",
          "SchemeName": "string"
        },
        "DebtorReference": "string",
        "InstructedAmount": {
          "Amount": "string",
          "Currency": "string"
        },
        "Reference": "string",
        "ScheduledPaymentDateTime": "1970-01-01T00:00:00Z",
        "ScheduledPaymentId": "string",
        "ScheduledType": "Arrival"
      }
    ]
  },
  "Links": {
    "First": "http://example.com",
    "Last": "http://example.com",
    "Next": "http://example.com",
    "Prev": "http://example.com",
    "Self": "http://example.com"
  },
  "Meta": {
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z",
    "TotalPages": 0
  }
}
```

> 400 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 403 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 500 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
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
curl https://example.com/scheduled-payments \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /scheduled-payments`

<h3 id="get-scheduled-payments-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. <br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: <br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|

> Example responses

> 200 Response

```json
{
  "Data": {
    "ScheduledPayment": [
      {
        "AccountId": "string",
        "CreditorAccount": {
          "Identification": "string",
          "Name": "string",
          "SchemeName": "string",
          "SecondaryIdentification": "string"
        },
        "CreditorAgent": {
          "Identification": "string",
          "SchemeName": "string"
        },
        "DebtorReference": "string",
        "InstructedAmount": {
          "Amount": "string",
          "Currency": "string"
        },
        "Reference": "string",
        "ScheduledPaymentDateTime": "1970-01-01T00:00:00Z",
        "ScheduledPaymentId": "string",
        "ScheduledType": "Arrival"
      }
    ]
  },
  "Links": {
    "First": "http://example.com",
    "Last": "http://example.com",
    "Next": "http://example.com",
    "Prev": "http://example.com",
    "Self": "http://example.com"
  },
  "Meta": {
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z",
    "TotalPages": 0
  }
}
```

> 400 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 403 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 500 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

<h3 id="get-scheduled-payments-1-responses">Responses</h3>

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

## Get Standing Orders

<a id="opIdGetAccountsAccountIdStandingOrders"></a>

> Code samples

```bash
curl https://example.com/accounts/string/standing-orders \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /accounts/{AccountId}/standing-orders`

<h3 id="get-standing-orders-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|AccountId|path|string|true|AccountId|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. <br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: <br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|

> Example responses

> 200 Response

```json
{
  "Data": {
    "StandingOrder": [
      {
        "AccountId": "string",
        "CreditorAccount": {
          "Identification": "string",
          "Name": "string",
          "SchemeName": "string",
          "SecondaryIdentification": "string"
        },
        "CreditorAgent": {
          "Identification": "string",
          "SchemeName": "string"
        },
        "FinalPaymentAmount": {
          "Amount": "string",
          "Currency": "string"
        },
        "FinalPaymentDateTime": "1970-01-01T00:00:00Z",
        "FirstPaymentAmount": {
          "Amount": "string",
          "Currency": "string"
        },
        "FirstPaymentDateTime": "1970-01-01T00:00:00Z",
        "Frequency": "string",
        "LastPaymentAmount": {
          "Amount": "string",
          "Currency": "string"
        },
        "LastPaymentDateTime": "1970-01-01T00:00:00Z",
        "NextPaymentAmount": {
          "Amount": "string",
          "Currency": "string"
        },
        "NextPaymentDateTime": "1970-01-01T00:00:00Z",
        "NumberOfPayments": "string",
        "Reference": "string",
        "StandingOrderId": "string",
        "StandingOrderStatusCode": "Active",
        "SupplementaryData": {}
      }
    ]
  },
  "Links": {
    "First": "http://example.com",
    "Last": "http://example.com",
    "Next": "http://example.com",
    "Prev": "http://example.com",
    "Self": "http://example.com"
  },
  "Meta": {
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z",
    "TotalPages": 0
  }
}
```

> 400 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 403 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 500 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
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
curl https://example.com/standing-orders \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /standing-orders`

<h3 id="get-standing-orders-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. <br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: <br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|

> Example responses

> 200 Response

```json
{
  "Data": {
    "StandingOrder": [
      {
        "AccountId": "string",
        "CreditorAccount": {
          "Identification": "string",
          "Name": "string",
          "SchemeName": "string",
          "SecondaryIdentification": "string"
        },
        "CreditorAgent": {
          "Identification": "string",
          "SchemeName": "string"
        },
        "FinalPaymentAmount": {
          "Amount": "string",
          "Currency": "string"
        },
        "FinalPaymentDateTime": "1970-01-01T00:00:00Z",
        "FirstPaymentAmount": {
          "Amount": "string",
          "Currency": "string"
        },
        "FirstPaymentDateTime": "1970-01-01T00:00:00Z",
        "Frequency": "string",
        "LastPaymentAmount": {
          "Amount": "string",
          "Currency": "string"
        },
        "LastPaymentDateTime": "1970-01-01T00:00:00Z",
        "NextPaymentAmount": {
          "Amount": "string",
          "Currency": "string"
        },
        "NextPaymentDateTime": "1970-01-01T00:00:00Z",
        "NumberOfPayments": "string",
        "Reference": "string",
        "StandingOrderId": "string",
        "StandingOrderStatusCode": "Active",
        "SupplementaryData": {}
      }
    ]
  },
  "Links": {
    "First": "http://example.com",
    "Last": "http://example.com",
    "Next": "http://example.com",
    "Prev": "http://example.com",
    "Self": "http://example.com"
  },
  "Meta": {
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z",
    "TotalPages": 0
  }
}
```

> 400 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 403 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 500 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

<h3 id="get-standing-orders-1-responses">Responses</h3>

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

## Get Statements

<a id="opIdGetAccountsAccountIdStatements"></a>

> Code samples

```bash
curl https://example.com/accounts/string/statements \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /accounts/{AccountId}/statements`

<h3 id="get-statements-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|AccountId|path|string|true|AccountId|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. <br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: <br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|
|fromStatementDateTime|query|string(date-time)|false|The UTC ISO 8601 Date Time to filter statements FROM<br>NB Time component is optional - set to 00:00:00 for just Date.<br>If the Date Time contains a timezone, the ASPSP must ignore the timezone component.|
|toStatementDateTime|query|string(date-time)|false|The UTC ISO 8601 Date Time to filter statements TO<br>NB Time component is optional - set to 00:00:00 for just Date.<br>If the Date Time contains a timezone, the ASPSP must ignore the timezone component.|

> Example responses

> 200 Response

```json
{
  "Data": {
    "Statement": [
      {
        "AccountId": "string",
        "CreationDateTime": "1970-01-01T00:00:00Z",
        "EndDateTime": "1970-01-01T00:00:00Z",
        "StartDateTime": "1970-01-01T00:00:00Z",
        "StatementAmount": [
          {
            "Amount": {
              "Amount": "string",
              "Currency": "string"
            },
            "CreditDebitIndicator": "Credit",
            "Type": "string"
          }
        ],
        "StatementBenefit": [
          {
            "Amount": {
              "Amount": "string",
              "Currency": "string"
            },
            "Type": "string"
          }
        ],
        "StatementDateTime": [
          {
            "DateTime": "1970-01-01T00:00:00Z",
            "Type": "string"
          }
        ],
        "StatementDescription": [
          "string"
        ],
        "StatementFee": [
          {
            "Amount": {
              "Amount": "string",
              "Currency": "string"
            },
            "CreditDebitIndicator": "Credit",
            "Description": "string",
            "Frequency": "string",
            "Rate": 0,
            "RateType": "string",
            "Type": "string"
          }
        ],
        "StatementId": "string",
        "StatementInterest": [
          {
            "Amount": {
              "Amount": "string",
              "Currency": "string"
            },
            "CreditDebitIndicator": "Credit",
            "Description": "string",
            "Frequency": "string",
            "Rate": 0,
            "RateType": "string",
            "Type": "string"
          }
        ],
        "StatementRate": [
          {
            "Rate": "string",
            "Type": "string"
          }
        ],
        "StatementReference": "string",
        "StatementValue": [
          {
            "Type": "string",
            "Value": "string"
          }
        ],
        "Type": "AccountClosure"
      }
    ]
  },
  "Links": {
    "First": "http://example.com",
    "Last": "http://example.com",
    "Next": "http://example.com",
    "Prev": "http://example.com",
    "Self": "http://example.com"
  },
  "Meta": {
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z",
    "TotalPages": 0
  }
}
```

> 400 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 403 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 500 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
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

<a id="opIdGetAccountsAccountIdStatementsStatementId"></a>

> Code samples

```bash
curl https://example.com/accounts/string/statements/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /accounts/{AccountId}/statements/{StatementId}`

<h3 id="get-statements-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|StatementId|path|string|true|StatementId|
|AccountId|path|string|true|AccountId|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. <br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: <br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|

> Example responses

> 200 Response

```json
{
  "Data": {
    "Statement": [
      {
        "AccountId": "string",
        "CreationDateTime": "1970-01-01T00:00:00Z",
        "EndDateTime": "1970-01-01T00:00:00Z",
        "StartDateTime": "1970-01-01T00:00:00Z",
        "StatementAmount": [
          {
            "Amount": {
              "Amount": "string",
              "Currency": "string"
            },
            "CreditDebitIndicator": "Credit",
            "Type": "string"
          }
        ],
        "StatementBenefit": [
          {
            "Amount": {
              "Amount": "string",
              "Currency": "string"
            },
            "Type": "string"
          }
        ],
        "StatementDateTime": [
          {
            "DateTime": "1970-01-01T00:00:00Z",
            "Type": "string"
          }
        ],
        "StatementDescription": [
          "string"
        ],
        "StatementFee": [
          {
            "Amount": {
              "Amount": "string",
              "Currency": "string"
            },
            "CreditDebitIndicator": "Credit",
            "Description": "string",
            "Frequency": "string",
            "Rate": 0,
            "RateType": "string",
            "Type": "string"
          }
        ],
        "StatementId": "string",
        "StatementInterest": [
          {
            "Amount": {
              "Amount": "string",
              "Currency": "string"
            },
            "CreditDebitIndicator": "Credit",
            "Description": "string",
            "Frequency": "string",
            "Rate": 0,
            "RateType": "string",
            "Type": "string"
          }
        ],
        "StatementRate": [
          {
            "Rate": "string",
            "Type": "string"
          }
        ],
        "StatementReference": "string",
        "StatementValue": [
          {
            "Type": "string",
            "Value": "string"
          }
        ],
        "Type": "AccountClosure"
      }
    ]
  },
  "Links": {
    "First": "http://example.com",
    "Last": "http://example.com",
    "Next": "http://example.com",
    "Prev": "http://example.com",
    "Self": "http://example.com"
  },
  "Meta": {
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z",
    "TotalPages": 0
  }
}
```

> 400 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 403 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 500 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

<h3 id="get-statements-1-responses">Responses</h3>

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

<a id="opIdGetAccountsAccountIdStatementsStatementIdFile"></a>

> Code samples

```bash
curl https://example.com/accounts/string/statements/string/file \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /accounts/{AccountId}/statements/{StatementId}/file`

<h3 id="get-statements-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|StatementId|path|string|true|StatementId|
|AccountId|path|string|true|AccountId|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. <br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: <br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|

> Example responses

> 200 Response

```json
{}
```

> 400 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 403 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 500 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

<h3 id="get-statements-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Statements Read|[File](#schemafile)|
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
curl https://example.com/statements \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /statements`

<h3 id="get-statements-3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. <br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: <br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|fromStatementDateTime|query|string(date-time)|false|The UTC ISO 8601 Date Time to filter statements FROM<br>NB Time component is optional - set to 00:00:00 for just Date.<br>If the Date Time contains a timezone, the ASPSP must ignore the timezone component.|
|toStatementDateTime|query|string(date-time)|false|The UTC ISO 8601 Date Time to filter statements TO<br>NB Time component is optional - set to 00:00:00 for just Date.<br>If the Date Time contains a timezone, the ASPSP must ignore the timezone component.|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|

> Example responses

> 200 Response

```json
{
  "Data": {
    "Statement": [
      {
        "AccountId": "string",
        "CreationDateTime": "1970-01-01T00:00:00Z",
        "EndDateTime": "1970-01-01T00:00:00Z",
        "StartDateTime": "1970-01-01T00:00:00Z",
        "StatementAmount": [
          {
            "Amount": {
              "Amount": "string",
              "Currency": "string"
            },
            "CreditDebitIndicator": "Credit",
            "Type": "string"
          }
        ],
        "StatementBenefit": [
          {
            "Amount": {
              "Amount": "string",
              "Currency": "string"
            },
            "Type": "string"
          }
        ],
        "StatementDateTime": [
          {
            "DateTime": "1970-01-01T00:00:00Z",
            "Type": "string"
          }
        ],
        "StatementDescription": [
          "string"
        ],
        "StatementFee": [
          {
            "Amount": {
              "Amount": "string",
              "Currency": "string"
            },
            "CreditDebitIndicator": "Credit",
            "Description": "string",
            "Frequency": "string",
            "Rate": 0,
            "RateType": "string",
            "Type": "string"
          }
        ],
        "StatementId": "string",
        "StatementInterest": [
          {
            "Amount": {
              "Amount": "string",
              "Currency": "string"
            },
            "CreditDebitIndicator": "Credit",
            "Description": "string",
            "Frequency": "string",
            "Rate": 0,
            "RateType": "string",
            "Type": "string"
          }
        ],
        "StatementRate": [
          {
            "Rate": "string",
            "Type": "string"
          }
        ],
        "StatementReference": "string",
        "StatementValue": [
          {
            "Type": "string",
            "Value": "string"
          }
        ],
        "Type": "AccountClosure"
      }
    ]
  },
  "Links": {
    "First": "http://example.com",
    "Last": "http://example.com",
    "Next": "http://example.com",
    "Prev": "http://example.com",
    "Self": "http://example.com"
  },
  "Meta": {
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z",
    "TotalPages": 0
  }
}
```

> 400 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 403 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 500 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

<h3 id="get-statements-3-responses">Responses</h3>

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

## Get Transactions

<a id="opIdGetAccountsAccountIdStatementsStatementIdTransactions"></a>

> Code samples

```bash
curl https://example.com/accounts/string/statements/string/transactions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /accounts/{AccountId}/statements/{StatementId}/transactions`

<h3 id="get-transactions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|StatementId|path|string|true|StatementId|
|AccountId|path|string|true|AccountId|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. <br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: <br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|

> Example responses

> 200 Response

```json
{
  "Data": {
    "Transaction": [
      {
        "AccountId": "string",
        "AddressLine": "string",
        "Amount": {
          "Amount": "string",
          "Currency": "string"
        },
        "Balance": {
          "Amount": {
            "Amount": "string",
            "Currency": "string"
          },
          "CreditDebitIndicator": "Credit",
          "Type": "ClosingAvailable"
        },
        "BankTransactionCode": {
          "Code": "string",
          "SubCode": "string"
        },
        "BookingDateTime": "1970-01-01T00:00:00Z",
        "CardInstrument": {
          "AuthorisationType": "ConsumerDevice",
          "CardSchemeName": "AmericanExpress",
          "Identification": "string",
          "Name": "string"
        },
        "ChargeAmount": {
          "Amount": "string",
          "Currency": "string"
        },
        "CreditDebitIndicator": "Credit",
        "CreditorAccount": {
          "Identification": "string",
          "Name": "string",
          "SchemeName": "string",
          "SecondaryIdentification": "string"
        },
        "CreditorAgent": {
          "Identification": "string",
          "Name": "string",
          "PostalAddress": {
            "AddressLine": [
              "string"
            ],
            "AddressType": "Business",
            "BuildingNumber": "string",
            "Country": "string",
            "CountrySubDivision": "string",
            "Department": "string",
            "PostCode": "string",
            "StreetName": "string",
            "SubDepartment": "string",
            "TownName": "string"
          },
          "SchemeName": "string"
        },
        "CurrencyExchange": {
          "ContractIdentification": "string",
          "ExchangeRate": 0,
          "InstructedAmount": {
            "Amount": "string",
            "Currency": "string"
          },
          "QuotationDate": "1970-01-01T00:00:00Z",
          "SourceCurrency": "string",
          "TargetCurrency": "string",
          "UnitCurrency": "string"
        },
        "DebtorAccount": {
          "Identification": "string",
          "Name": "string",
          "SchemeName": "string",
          "SecondaryIdentification": "string"
        },
        "DebtorAgent": {
          "Identification": "string",
          "Name": "string",
          "PostalAddress": {
            "AddressLine": [
              "string"
            ],
            "AddressType": "Business",
            "BuildingNumber": "string",
            "Country": "string",
            "CountrySubDivision": "string",
            "Department": "string",
            "PostCode": "string",
            "StreetName": "string",
            "SubDepartment": "string",
            "TownName": "string"
          },
          "SchemeName": "string"
        },
        "MerchantDetails": {
          "MerchantCategoryCode": "stri",
          "MerchantName": "string"
        },
        "ProprietaryBankTransactionCode": {
          "Code": "string",
          "Issuer": "string"
        },
        "StatementReference": [
          "string"
        ],
        "Status": "Booked",
        "SupplementaryData": {},
        "TransactionId": "string",
        "TransactionInformation": "string",
        "TransactionMutability": "Mutable",
        "TransactionReference": "string",
        "ValueDateTime": "1970-01-01T00:00:00Z"
      }
    ]
  },
  "Links": {
    "First": "http://example.com",
    "Last": "http://example.com",
    "Next": "http://example.com",
    "Prev": "http://example.com",
    "Self": "http://example.com"
  },
  "Meta": {
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z",
    "TotalPages": 0
  }
}
```

> 400 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 403 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 500 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
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

## Get Transactions

<a id="opIdGetAccountsAccountIdTransactions"></a>

> Code samples

```bash
curl https://example.com/accounts/string/transactions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /accounts/{AccountId}/transactions`

<h3 id="get-transactions-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|AccountId|path|string|true|AccountId|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. <br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: <br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|
|fromBookingDateTime|query|string(date-time)|false|The UTC ISO 8601 Date Time to filter transactions FROM<br>NB Time component is optional - set to 00:00:00 for just Date.<br>If the Date Time contains a timezone, the ASPSP must ignore the timezone component.|
|toBookingDateTime|query|string(date-time)|false|The UTC ISO 8601 Date Time to filter transactions TO<br>NB Time component is optional - set to 00:00:00 for just Date.<br>If the Date Time contains a timezone, the ASPSP must ignore the timezone component.|

> Example responses

> 200 Response

```json
{
  "Data": {
    "Transaction": [
      {
        "AccountId": "string",
        "AddressLine": "string",
        "Amount": {
          "Amount": "string",
          "Currency": "string"
        },
        "Balance": {
          "Amount": {
            "Amount": "string",
            "Currency": "string"
          },
          "CreditDebitIndicator": "Credit",
          "Type": "ClosingAvailable"
        },
        "BankTransactionCode": {
          "Code": "string",
          "SubCode": "string"
        },
        "BookingDateTime": "1970-01-01T00:00:00Z",
        "CardInstrument": {
          "AuthorisationType": "ConsumerDevice",
          "CardSchemeName": "AmericanExpress",
          "Identification": "string",
          "Name": "string"
        },
        "ChargeAmount": {
          "Amount": "string",
          "Currency": "string"
        },
        "CreditDebitIndicator": "Credit",
        "CreditorAccount": {
          "Identification": "string",
          "Name": "string",
          "SchemeName": "string",
          "SecondaryIdentification": "string"
        },
        "CreditorAgent": {
          "Identification": "string",
          "Name": "string",
          "PostalAddress": {
            "AddressLine": [
              "string"
            ],
            "AddressType": "Business",
            "BuildingNumber": "string",
            "Country": "string",
            "CountrySubDivision": "string",
            "Department": "string",
            "PostCode": "string",
            "StreetName": "string",
            "SubDepartment": "string",
            "TownName": "string"
          },
          "SchemeName": "string"
        },
        "CurrencyExchange": {
          "ContractIdentification": "string",
          "ExchangeRate": 0,
          "InstructedAmount": {
            "Amount": "string",
            "Currency": "string"
          },
          "QuotationDate": "1970-01-01T00:00:00Z",
          "SourceCurrency": "string",
          "TargetCurrency": "string",
          "UnitCurrency": "string"
        },
        "DebtorAccount": {
          "Identification": "string",
          "Name": "string",
          "SchemeName": "string",
          "SecondaryIdentification": "string"
        },
        "DebtorAgent": {
          "Identification": "string",
          "Name": "string",
          "PostalAddress": {
            "AddressLine": [
              "string"
            ],
            "AddressType": "Business",
            "BuildingNumber": "string",
            "Country": "string",
            "CountrySubDivision": "string",
            "Department": "string",
            "PostCode": "string",
            "StreetName": "string",
            "SubDepartment": "string",
            "TownName": "string"
          },
          "SchemeName": "string"
        },
        "MerchantDetails": {
          "MerchantCategoryCode": "stri",
          "MerchantName": "string"
        },
        "ProprietaryBankTransactionCode": {
          "Code": "string",
          "Issuer": "string"
        },
        "StatementReference": [
          "string"
        ],
        "Status": "Booked",
        "SupplementaryData": {},
        "TransactionId": "string",
        "TransactionInformation": "string",
        "TransactionMutability": "Mutable",
        "TransactionReference": "string",
        "ValueDateTime": "1970-01-01T00:00:00Z"
      }
    ]
  },
  "Links": {
    "First": "http://example.com",
    "Last": "http://example.com",
    "Next": "http://example.com",
    "Prev": "http://example.com",
    "Self": "http://example.com"
  },
  "Meta": {
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z",
    "TotalPages": 0
  }
}
```

> 400 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 403 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 500 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

<h3 id="get-transactions-1-responses">Responses</h3>

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
curl https://example.com/transactions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /transactions`

<h3 id="get-transactions-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-fapi-auth-date|header|string|false|The time when the PSU last logged in with the TPP. <br>All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: <br>Sun, 10 Sep 2017 19:43:31 UTC|
|x-fapi-customer-ip-address|header|string|false|The PSU's IP address if the PSU is currently logged in with the TPP.|
|x-fapi-interaction-id|header|string|false|An RFC4122 UID used as a correlation id.|
|Authorization|header|string|true|An Authorisation Token as per https://tools.ietf.org/html/rfc6750|
|x-customer-user-agent|header|string|false|Indicates the user-agent that the PSU is using.|
|fromBookingDateTime|query|string(date-time)|false|The UTC ISO 8601 Date Time to filter transactions FROM<br>NB Time component is optional - set to 00:00:00 for just Date.<br>If the Date Time contains a timezone, the ASPSP must ignore the timezone component.|
|toBookingDateTime|query|string(date-time)|false|The UTC ISO 8601 Date Time to filter transactions TO<br>NB Time component is optional - set to 00:00:00 for just Date.<br>If the Date Time contains a timezone, the ASPSP must ignore the timezone component.|

> Example responses

> 200 Response

```json
{
  "Data": {
    "Transaction": [
      {
        "AccountId": "string",
        "AddressLine": "string",
        "Amount": {
          "Amount": "string",
          "Currency": "string"
        },
        "Balance": {
          "Amount": {
            "Amount": "string",
            "Currency": "string"
          },
          "CreditDebitIndicator": "Credit",
          "Type": "ClosingAvailable"
        },
        "BankTransactionCode": {
          "Code": "string",
          "SubCode": "string"
        },
        "BookingDateTime": "1970-01-01T00:00:00Z",
        "CardInstrument": {
          "AuthorisationType": "ConsumerDevice",
          "CardSchemeName": "AmericanExpress",
          "Identification": "string",
          "Name": "string"
        },
        "ChargeAmount": {
          "Amount": "string",
          "Currency": "string"
        },
        "CreditDebitIndicator": "Credit",
        "CreditorAccount": {
          "Identification": "string",
          "Name": "string",
          "SchemeName": "string",
          "SecondaryIdentification": "string"
        },
        "CreditorAgent": {
          "Identification": "string",
          "Name": "string",
          "PostalAddress": {
            "AddressLine": [
              "string"
            ],
            "AddressType": "Business",
            "BuildingNumber": "string",
            "Country": "string",
            "CountrySubDivision": "string",
            "Department": "string",
            "PostCode": "string",
            "StreetName": "string",
            "SubDepartment": "string",
            "TownName": "string"
          },
          "SchemeName": "string"
        },
        "CurrencyExchange": {
          "ContractIdentification": "string",
          "ExchangeRate": 0,
          "InstructedAmount": {
            "Amount": "string",
            "Currency": "string"
          },
          "QuotationDate": "1970-01-01T00:00:00Z",
          "SourceCurrency": "string",
          "TargetCurrency": "string",
          "UnitCurrency": "string"
        },
        "DebtorAccount": {
          "Identification": "string",
          "Name": "string",
          "SchemeName": "string",
          "SecondaryIdentification": "string"
        },
        "DebtorAgent": {
          "Identification": "string",
          "Name": "string",
          "PostalAddress": {
            "AddressLine": [
              "string"
            ],
            "AddressType": "Business",
            "BuildingNumber": "string",
            "Country": "string",
            "CountrySubDivision": "string",
            "Department": "string",
            "PostCode": "string",
            "StreetName": "string",
            "SubDepartment": "string",
            "TownName": "string"
          },
          "SchemeName": "string"
        },
        "MerchantDetails": {
          "MerchantCategoryCode": "stri",
          "MerchantName": "string"
        },
        "ProprietaryBankTransactionCode": {
          "Code": "string",
          "Issuer": "string"
        },
        "StatementReference": [
          "string"
        ],
        "Status": "Booked",
        "SupplementaryData": {},
        "TransactionId": "string",
        "TransactionInformation": "string",
        "TransactionMutability": "Mutable",
        "TransactionReference": "string",
        "ValueDateTime": "1970-01-01T00:00:00Z"
      }
    ]
  },
  "Links": {
    "First": "http://example.com",
    "Last": "http://example.com",
    "Next": "http://example.com",
    "Prev": "http://example.com",
    "Self": "http://example.com"
  },
  "Meta": {
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z",
    "TotalPages": 0
  }
}
```

> 400 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 403 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

> 500 Response

```json
{
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

<h3 id="get-transactions-2-responses">Responses</h3>

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

<h2 id="tocS_AccountId">AccountId</h2>
<!-- backwards compatibility -->
<a id="schemaaccountid"></a>
<a id="schema_AccountId"></a>
<a id="tocSaccountid"></a>
<a id="tocsaccountid"></a>

```json
"string"
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
"string"
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
"string"
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
Usage: Booking date is the expected booking date, unless the status is booked, in which case it is the actual booking date.All dates in the JSON payloads are represented in ISO 8601 date-time format. 
All date-time fields in responses must include the timezone. An example is below:
2017-04-05T10:43:07+00:00

<h2 id="tocS_BuildingNumber">BuildingNumber</h2>
<!-- backwards compatibility -->
<a id="schemabuildingnumber"></a>
<a id="schema_BuildingNumber"></a>
<a id="tocSbuildingnumber"></a>
<a id="tocsbuildingnumber"></a>

```json
"string"
```

Number that identifies the position of a building on a street.

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
"1970-01-01T00:00:00Z"
```

Date and time at which the resource was created.All dates in the JSON payloads are represented in ISO 8601 date-time format. 
All date-time fields in responses must include the timezone. An example is below:
2017-04-05T10:43:07+00:00

<h2 id="tocS_DateTime">DateTime</h2>
<!-- backwards compatibility -->
<a id="schemadatetime"></a>
<a id="schema_DateTime"></a>
<a id="tocSdatetime"></a>
<a id="tocsdatetime"></a>

```json
"1970-01-01T00:00:00Z"
```

Date and time associated with the date time type.All dates in the JSON payloads are represented in ISO 8601 date-time format. 
All date-time fields in responses must include the timezone. An example is below:
2017-04-05T10:43:07+00:00

<h2 id="tocS_DebtorReference">DebtorReference</h2>
<!-- backwards compatibility -->
<a id="schemadebtorreference"></a>
<a id="schema_DebtorReference"></a>
<a id="tocSdebtorreference"></a>
<a id="tocsdebtorreference"></a>

```json
"string"
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
"string"
```

Description that may be available for the statement fee.

<h2 id="tocS_Description_2">Description_2</h2>
<!-- backwards compatibility -->
<a id="schemadescription_2"></a>
<a id="schema_Description_2"></a>
<a id="tocSdescription_2"></a>
<a id="tocsdescription_2"></a>

```json
"string"
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

<h2 id="tocS_EmailAddress">EmailAddress</h2>
<!-- backwards compatibility -->
<a id="schemaemailaddress"></a>
<a id="schema_EmailAddress"></a>
<a id="tocSemailaddress"></a>
<a id="tocsemailaddress"></a>

```json
"string"
```

Address for electronic mail (e-mail).

<h2 id="tocS_EndDateTime">EndDateTime</h2>
<!-- backwards compatibility -->
<a id="schemaenddatetime"></a>
<a id="schema_EndDateTime"></a>
<a id="tocSenddatetime"></a>
<a id="tocsenddatetime"></a>

```json
"1970-01-01T00:00:00Z"
```

Date and time at which the statement period ends.All dates in the JSON payloads are represented in ISO 8601 date-time format. 
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

The date on which the final payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format. 
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

The date on which the first payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format. 
All date-time fields in responses must include the timezone. An example is below:
2017-04-05T10:43:07+00:00

<h2 id="tocS_Frequency_0">Frequency_0</h2>
<!-- backwards compatibility -->
<a id="schemafrequency_0"></a>
<a id="schema_Frequency_0"></a>
<a id="tocSfrequency_0"></a>
<a id="tocsfrequency_0"></a>

```json
"string"
```

Individual Definitions:
EvryDay - Every day
EvryWorkgDay - Every working day
IntrvlWkDay - An interval specified in weeks (01 to 09), and the day within the week (01 to 07)
WkInMnthDay - A monthly interval, specifying the week of the month (01 to 05) and day within the week (01 to 07)
IntrvlMnthDay - An interval specified in months (between 01 to 06, 12, 24), specifying the day within the month (-5 to -1, 1 to 31)
QtrDay - Quarterly (either ENGLISH, SCOTTISH, or RECEIVED)
ENGLISH = Paid on the 25th March, 24th June, 29th September and 25th December. 
SCOTTISH = Paid on the 2nd February, 15th May, 1st August and 11th November.
RECEIVED = Paid on the 20th March, 19th June, 24th September and 20th December. 
Individual Patterns:
EvryDay (ScheduleCode)
EvryWorkgDay (ScheduleCode)
IntrvlWkDay:IntervalInWeeks:DayInWeek (ScheduleCode + IntervalInWeeks + DayInWeek)
WkInMnthDay:WeekInMonth:DayInWeek (ScheduleCode + WeekInMonth + DayInWeek)
IntrvlMnthDay:IntervalInMonths:DayInMonth (ScheduleCode + IntervalInMonths + DayInMonth)
QtrDay: + either (ENGLISH, SCOTTISH or RECEIVED) ScheduleCode + QuarterDay
The regular expression for this element combines five smaller versions for each permitted pattern. To aid legibility - the components are presented individually here:
EvryDay
EvryWorkgDay
IntrvlWkDay:0[1-9]:0[1-7]
WkInMnthDay:0[1-5]:0[1-7]
IntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01])
QtrDay:(ENGLISH|SCOTTISH|RECEIVED)
Full Regular Expression:
^(EvryDay)$|^(EvryWorkgDay)$|^(IntrvlWkDay:0[1-9]:0[1-7])$|^(WkInMnthDay:0[1-5]:0[1-7])$|^(IntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01]))$|^(QtrDay:(ENGLISH|SCOTTISH|RECEIVED))$

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
"string"
```

Specifies a character string with a maximum length of 350 characters.

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
"string"
```

Identification assigned by an institution to identify an account. This identification is known by the account owner.

<h2 id="tocS_Identification_1">Identification_1</h2>
<!-- backwards compatibility -->
<a id="schemaidentification_1"></a>
<a id="schema_Identification_1"></a>
<a id="tocSidentification_1"></a>
<a id="tocsidentification_1"></a>

```json
"string"
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

<h2 id="tocS_LastPaymentDateTime">LastPaymentDateTime</h2>
<!-- backwards compatibility -->
<a id="schemalastpaymentdatetime"></a>
<a id="schema_LastPaymentDateTime"></a>
<a id="tocSlastpaymentdatetime"></a>
<a id="tocslastpaymentdatetime"></a>

```json
"1970-01-01T00:00:00Z"
```

The date on which the last (most recent) payment for a Standing Order schedule was made.All dates in the JSON payloads are represented in ISO 8601 date-time format. 
All date-time fields in responses must include the timezone. An example is below:
2017-04-05T10:43:07+00:00

<h2 id="tocS_Links">Links</h2>
<!-- backwards compatibility -->
<a id="schemalinks"></a>
<a id="schema_Links"></a>
<a id="tocSlinks"></a>
<a id="tocslinks"></a>

```json
{
  "First": "http://example.com",
  "Last": "http://example.com",
  "Next": "http://example.com",
  "Prev": "http://example.com",
  "Self": "http://example.com"
}
```

Links relevant to the payload

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|First|string(uri)|false|none|none|
|Last|string(uri)|false|none|none|
|Next|string(uri)|false|none|none|
|Prev|string(uri)|false|none|none|
|Self|string(uri)|true|none|none|

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

Maturity date of the account.All dates in the JSON payloads are represented in ISO 8601 date-time format. 
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
  "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
  "LastAvailableDateTime": "1970-01-01T00:00:00Z",
  "TotalPages": 0
}
```

Meta Data relevant to the payload

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|FirstAvailableDateTime|[ISODateTime](#schemaisodatetime)|false|none|All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|LastAvailableDateTime|[ISODateTime](#schemaisodatetime)|false|none|All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|TotalPages|integer(int32)|false|none|none|

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

<h2 id="tocS_Name_0">Name_0</h2>
<!-- backwards compatibility -->
<a id="schemaname_0"></a>
<a id="schema_Name_0"></a>
<a id="tocSname_0"></a>
<a id="tocsname_0"></a>

```json
"string"
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
"string"
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
"string"
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
"1970-01-01T00:00:00Z"
```

The date on which the next payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format. 
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

Indicates whether the advertised overdraft rate is guaranteed to be offered to a borrower by the bank e.g. if it�s part of a government scheme, or whether the rate may vary dependent on the applicant�s circumstances.

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

<h2 id="tocS_OBAccount4">OBAccount4</h2>
<!-- backwards compatibility -->
<a id="schemaobaccount4"></a>
<a id="schema_OBAccount4"></a>
<a id="tocSobaccount4"></a>
<a id="tocsobaccount4"></a>

```json
{
  "Account": [
    {
      "Identification": "string",
      "Name": "string",
      "SchemeName": "string",
      "SecondaryIdentification": "string"
    }
  ],
  "AccountId": "string",
  "AccountSubType": "ChargeCard",
  "AccountType": "Business",
  "Currency": "string",
  "Description": "string",
  "Nickname": "string",
  "Servicer": {
    "Identification": "string",
    "SchemeName": "string"
  },
  "Status": "Deleted",
  "StatusUpdateDateTime": "1970-01-01T00:00:00Z"
}
```

Unambiguous identification of the account to which credit and debit entries are made.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Account|[object]|false|none|none|
|AccountId|[AccountId](#schemaaccountid)|true|none|A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.|
|AccountSubType|[OBExternalAccountSubType1Code](#schemaobexternalaccountsubtype1code)|true|none|Specifies the sub type of account (product family group).|
|AccountType|[OBExternalAccountType1Code](#schemaobexternalaccounttype1code)|true|none|Specifies the type of account (personal or business).|
|Currency|[ActiveOrHistoricCurrencyCode_0](#schemaactiveorhistoriccurrencycode_0)|true|none|Identification of the currency in which the account is held. <br>Usage: Currency should only be used in case one and the same account number covers several currencies<br>and the initiating party needs to identify which currency needs to be used for settlement on the account.|
|Description|[Description_0](#schemadescription_0)|false|none|Specifies the description of the account type.|
|Nickname|[Nickname](#schemanickname)|false|none|The nickname of the account, assigned by the account owner in order to provide an additional means of identification of the account.|
|Servicer|[OBBranchAndFinancialInstitutionIdentification5_0](#schemaobbranchandfinancialinstitutionidentification5_0)|false|none|Party that manages the account on behalf of the account owner, that is manages the registration and booking of entries on the account, calculates balances on the account and provides information about the account.|
|Status|[OBAccountStatus1Code](#schemaobaccountstatus1code)|false|none|Specifies the status of account resource in code form.|
|StatusUpdateDateTime|[StatusUpdateDateTime](#schemastatusupdatedatetime)|false|none|Date and time at which the resource status was updated.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|

#### Enumerated Values

|Property|Value|
|---|---|
|AccountSubType|ChargeCard|
|AccountSubType|CreditCard|
|AccountSubType|CurrentAccount|
|AccountSubType|EMoney|
|AccountSubType|Loan|
|AccountSubType|Mortgage|
|AccountSubType|PrePaidCard|
|AccountSubType|Savings|
|AccountType|Business|
|AccountType|Personal|
|Status|Deleted|
|Status|Disabled|
|Status|Enabled|
|Status|Pending|
|Status|ProForma|

<h2 id="tocS_OBAccount4Basic">OBAccount4Basic</h2>
<!-- backwards compatibility -->
<a id="schemaobaccount4basic"></a>
<a id="schema_OBAccount4Basic"></a>
<a id="tocSobaccount4basic"></a>
<a id="tocsobaccount4basic"></a>

```json
{
  "AccountId": "string",
  "AccountSubType": "ChargeCard",
  "AccountType": "Business",
  "Currency": "string",
  "Description": "string",
  "Nickname": "string",
  "Status": "Deleted",
  "StatusUpdateDateTime": "1970-01-01T00:00:00Z"
}
```

Unambiguous identification of the account to which credit and debit entries are made.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|[AccountId](#schemaaccountid)|true|none|A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.|
|AccountSubType|[OBExternalAccountSubType1Code](#schemaobexternalaccountsubtype1code)|true|none|Specifies the sub type of account (product family group).|
|AccountType|[OBExternalAccountType1Code](#schemaobexternalaccounttype1code)|true|none|Specifies the type of account (personal or business).|
|Currency|[ActiveOrHistoricCurrencyCode_0](#schemaactiveorhistoriccurrencycode_0)|true|none|Identification of the currency in which the account is held. <br>Usage: Currency should only be used in case one and the same account number covers several currencies<br>and the initiating party needs to identify which currency needs to be used for settlement on the account.|
|Description|[Description_0](#schemadescription_0)|false|none|Specifies the description of the account type.|
|Nickname|[Nickname](#schemanickname)|false|none|The nickname of the account, assigned by the account owner in order to provide an additional means of identification of the account.|
|Status|[OBAccountStatus1Code](#schemaobaccountstatus1code)|false|none|Specifies the status of account resource in code form.|
|StatusUpdateDateTime|[StatusUpdateDateTime](#schemastatusupdatedatetime)|false|none|Date and time at which the resource status was updated.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|

#### Enumerated Values

|Property|Value|
|---|---|
|AccountSubType|ChargeCard|
|AccountSubType|CreditCard|
|AccountSubType|CurrentAccount|
|AccountSubType|EMoney|
|AccountSubType|Loan|
|AccountSubType|Mortgage|
|AccountSubType|PrePaidCard|
|AccountSubType|Savings|
|AccountType|Business|
|AccountType|Personal|
|Status|Deleted|
|Status|Disabled|
|Status|Enabled|
|Status|Pending|
|Status|ProForma|

<h2 id="tocS_OBAccount4Detail">OBAccount4Detail</h2>
<!-- backwards compatibility -->
<a id="schemaobaccount4detail"></a>
<a id="schema_OBAccount4Detail"></a>
<a id="tocSobaccount4detail"></a>
<a id="tocsobaccount4detail"></a>

```json
{
  "Account": [
    {
      "Identification": "string",
      "Name": "string",
      "SchemeName": "string",
      "SecondaryIdentification": "string"
    }
  ],
  "AccountId": "string",
  "AccountSubType": "ChargeCard",
  "AccountType": "Business",
  "Currency": "string",
  "Description": "string",
  "Nickname": "string",
  "Servicer": {
    "Identification": "string",
    "SchemeName": "string"
  },
  "Status": "Deleted",
  "StatusUpdateDateTime": "1970-01-01T00:00:00Z"
}
```

Unambiguous identification of the account to which credit and debit entries are made.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Account|[object]|true|none|none|
|AccountId|[AccountId](#schemaaccountid)|true|none|A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.|
|AccountSubType|[OBExternalAccountSubType1Code](#schemaobexternalaccountsubtype1code)|true|none|Specifies the sub type of account (product family group).|
|AccountType|[OBExternalAccountType1Code](#schemaobexternalaccounttype1code)|true|none|Specifies the type of account (personal or business).|
|Currency|[ActiveOrHistoricCurrencyCode_0](#schemaactiveorhistoriccurrencycode_0)|true|none|Identification of the currency in which the account is held. <br>Usage: Currency should only be used in case one and the same account number covers several currencies<br>and the initiating party needs to identify which currency needs to be used for settlement on the account.|
|Description|[Description_0](#schemadescription_0)|false|none|Specifies the description of the account type.|
|Nickname|[Nickname](#schemanickname)|false|none|The nickname of the account, assigned by the account owner in order to provide an additional means of identification of the account.|
|Servicer|[OBBranchAndFinancialInstitutionIdentification5_0](#schemaobbranchandfinancialinstitutionidentification5_0)|false|none|Party that manages the account on behalf of the account owner, that is manages the registration and booking of entries on the account, calculates balances on the account and provides information about the account.|
|Status|[OBAccountStatus1Code](#schemaobaccountstatus1code)|false|none|Specifies the status of account resource in code form.|
|StatusUpdateDateTime|[StatusUpdateDateTime](#schemastatusupdatedatetime)|false|none|Date and time at which the resource status was updated.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|

#### Enumerated Values

|Property|Value|
|---|---|
|AccountSubType|ChargeCard|
|AccountSubType|CreditCard|
|AccountSubType|CurrentAccount|
|AccountSubType|EMoney|
|AccountSubType|Loan|
|AccountSubType|Mortgage|
|AccountSubType|PrePaidCard|
|AccountSubType|Savings|
|AccountType|Business|
|AccountType|Personal|
|Status|Deleted|
|Status|Disabled|
|Status|Enabled|
|Status|Pending|
|Status|ProForma|

<h2 id="tocS_OBAccount6">OBAccount6</h2>
<!-- backwards compatibility -->
<a id="schemaobaccount6"></a>
<a id="schema_OBAccount6"></a>
<a id="tocSobaccount6"></a>
<a id="tocsobaccount6"></a>

```json
{
  "Account": [
    {
      "Identification": "string",
      "Name": "string",
      "SchemeName": "string",
      "SecondaryIdentification": "string"
    }
  ],
  "AccountId": "string",
  "AccountSubType": "ChargeCard",
  "AccountType": "Business",
  "Currency": "string",
  "Description": "string",
  "MaturityDate": "1970-01-01T00:00:00Z",
  "Nickname": "string",
  "OpeningDate": "1970-01-01T00:00:00Z",
  "Servicer": {
    "Identification": "string",
    "SchemeName": "string"
  },
  "Status": "Deleted",
  "StatusUpdateDateTime": "1970-01-01T00:00:00Z",
  "SwitchStatus": "string"
}
```

Unambiguous identification of the account to which credit and debit entries are made. The following fields are optional only for accounts that are switched:

  * Data.Currency  
  * Data.AccountType  
  * Data.AccountSubType

For all other accounts, the fields must be populated by the ASPSP.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Account|[object]|false|none|none|
|AccountId|[AccountId](#schemaaccountid)|true|none|A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.|
|AccountSubType|[OBExternalAccountSubType1Code](#schemaobexternalaccountsubtype1code)|false|none|Specifies the sub type of account (product family group).|
|AccountType|[OBExternalAccountType1Code](#schemaobexternalaccounttype1code)|false|none|Specifies the type of account (personal or business).|
|Currency|[ActiveOrHistoricCurrencyCode_0](#schemaactiveorhistoriccurrencycode_0)|false|none|Identification of the currency in which the account is held. <br>Usage: Currency should only be used in case one and the same account number covers several currencies<br>and the initiating party needs to identify which currency needs to be used for settlement on the account.|
|Description|[Description_0](#schemadescription_0)|false|none|Specifies the description of the account type.|
|MaturityDate|[MaturityDate](#schemamaturitydate)|false|none|Maturity date of the account.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|Nickname|[Nickname](#schemanickname)|false|none|The nickname of the account, assigned by the account owner in order to provide an additional means of identification of the account.|
|OpeningDate|[OpeningDate](#schemaopeningdate)|false|none|Date on which the account and related basic services are effectively operational for the account owner.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|Servicer|[OBBranchAndFinancialInstitutionIdentification5_0](#schemaobbranchandfinancialinstitutionidentification5_0)|false|none|Party that manages the account on behalf of the account owner, that is manages the registration and booking of entries on the account, calculates balances on the account and provides information about the account.|
|Status|[OBAccountStatus1Code](#schemaobaccountstatus1code)|false|none|Specifies the status of account resource in code form.|
|StatusUpdateDateTime|[StatusUpdateDateTime](#schemastatusupdatedatetime)|false|none|Date and time at which the resource status was updated.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|SwitchStatus|[OBExternalSwitchStatusCode](#schemaobexternalswitchstatuscode)|false|none|Specifies the switch status for the account, in a coded form.|

#### Enumerated Values

|Property|Value|
|---|---|
|AccountSubType|ChargeCard|
|AccountSubType|CreditCard|
|AccountSubType|CurrentAccount|
|AccountSubType|EMoney|
|AccountSubType|Loan|
|AccountSubType|Mortgage|
|AccountSubType|PrePaidCard|
|AccountSubType|Savings|
|AccountType|Business|
|AccountType|Personal|
|Status|Deleted|
|Status|Disabled|
|Status|Enabled|
|Status|Pending|
|Status|ProForma|

<h2 id="tocS_OBAccount6Basic">OBAccount6Basic</h2>
<!-- backwards compatibility -->
<a id="schemaobaccount6basic"></a>
<a id="schema_OBAccount6Basic"></a>
<a id="tocSobaccount6basic"></a>
<a id="tocsobaccount6basic"></a>

```json
{
  "AccountId": "string",
  "AccountSubType": "ChargeCard",
  "AccountType": "Business",
  "Currency": "string",
  "Description": "string",
  "MaturityDate": "1970-01-01T00:00:00Z",
  "Nickname": "string",
  "OpeningDate": "1970-01-01T00:00:00Z",
  "Status": "Deleted",
  "StatusUpdateDateTime": "1970-01-01T00:00:00Z",
  "SwitchStatus": "string"
}
```

Unambiguous identification of the account to which credit and debit entries are made.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|[AccountId](#schemaaccountid)|true|none|A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.|
|AccountSubType|[OBExternalAccountSubType1Code](#schemaobexternalaccountsubtype1code)|true|none|Specifies the sub type of account (product family group).|
|AccountType|[OBExternalAccountType1Code](#schemaobexternalaccounttype1code)|true|none|Specifies the type of account (personal or business).|
|Currency|[ActiveOrHistoricCurrencyCode_0](#schemaactiveorhistoriccurrencycode_0)|true|none|Identification of the currency in which the account is held. <br>Usage: Currency should only be used in case one and the same account number covers several currencies<br>and the initiating party needs to identify which currency needs to be used for settlement on the account.|
|Description|[Description_0](#schemadescription_0)|false|none|Specifies the description of the account type.|
|MaturityDate|[MaturityDate](#schemamaturitydate)|false|none|Maturity date of the account.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|Nickname|[Nickname](#schemanickname)|false|none|The nickname of the account, assigned by the account owner in order to provide an additional means of identification of the account.|
|OpeningDate|[OpeningDate](#schemaopeningdate)|false|none|Date on which the account and related basic services are effectively operational for the account owner.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|Status|[OBAccountStatus1Code](#schemaobaccountstatus1code)|false|none|Specifies the status of account resource in code form.|
|StatusUpdateDateTime|[StatusUpdateDateTime](#schemastatusupdatedatetime)|false|none|Date and time at which the resource status was updated.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|SwitchStatus|[OBExternalSwitchStatusCode](#schemaobexternalswitchstatuscode)|false|none|Specifies the switch status for the account, in a coded form.|

#### Enumerated Values

|Property|Value|
|---|---|
|AccountSubType|ChargeCard|
|AccountSubType|CreditCard|
|AccountSubType|CurrentAccount|
|AccountSubType|EMoney|
|AccountSubType|Loan|
|AccountSubType|Mortgage|
|AccountSubType|PrePaidCard|
|AccountSubType|Savings|
|AccountType|Business|
|AccountType|Personal|
|Status|Deleted|
|Status|Disabled|
|Status|Enabled|
|Status|Pending|
|Status|ProForma|

<h2 id="tocS_OBAccount6Detail">OBAccount6Detail</h2>
<!-- backwards compatibility -->
<a id="schemaobaccount6detail"></a>
<a id="schema_OBAccount6Detail"></a>
<a id="tocSobaccount6detail"></a>
<a id="tocsobaccount6detail"></a>

```json
{
  "Account": [
    {
      "Identification": "string",
      "Name": "string",
      "SchemeName": "string",
      "SecondaryIdentification": "string"
    }
  ],
  "AccountId": "string",
  "AccountSubType": "ChargeCard",
  "AccountType": "Business",
  "Currency": "string",
  "Description": "string",
  "MaturityDate": "1970-01-01T00:00:00Z",
  "Nickname": "string",
  "OpeningDate": "1970-01-01T00:00:00Z",
  "Servicer": {
    "Identification": "string",
    "SchemeName": "string"
  },
  "Status": "Deleted",
  "StatusUpdateDateTime": "1970-01-01T00:00:00Z",
  "SwitchStatus": "string"
}
```

Unambiguous identification of the account to which credit and debit entries are made.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Account|[object]|true|none|none|
|AccountId|[AccountId](#schemaaccountid)|true|none|A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.|
|AccountSubType|[OBExternalAccountSubType1Code](#schemaobexternalaccountsubtype1code)|true|none|Specifies the sub type of account (product family group).|
|AccountType|[OBExternalAccountType1Code](#schemaobexternalaccounttype1code)|true|none|Specifies the type of account (personal or business).|
|Currency|[ActiveOrHistoricCurrencyCode_0](#schemaactiveorhistoriccurrencycode_0)|true|none|Identification of the currency in which the account is held. <br>Usage: Currency should only be used in case one and the same account number covers several currencies<br>and the initiating party needs to identify which currency needs to be used for settlement on the account.|
|Description|[Description_0](#schemadescription_0)|false|none|Specifies the description of the account type.|
|MaturityDate|[MaturityDate](#schemamaturitydate)|false|none|Maturity date of the account.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|Nickname|[Nickname](#schemanickname)|false|none|The nickname of the account, assigned by the account owner in order to provide an additional means of identification of the account.|
|OpeningDate|[OpeningDate](#schemaopeningdate)|false|none|Date on which the account and related basic services are effectively operational for the account owner.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|Servicer|[OBBranchAndFinancialInstitutionIdentification5_0](#schemaobbranchandfinancialinstitutionidentification5_0)|false|none|Party that manages the account on behalf of the account owner, that is manages the registration and booking of entries on the account, calculates balances on the account and provides information about the account.|
|Status|[OBAccountStatus1Code](#schemaobaccountstatus1code)|false|none|Specifies the status of account resource in code form.|
|StatusUpdateDateTime|[StatusUpdateDateTime](#schemastatusupdatedatetime)|false|none|Date and time at which the resource status was updated.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|SwitchStatus|[OBExternalSwitchStatusCode](#schemaobexternalswitchstatuscode)|false|none|Specifies the switch status for the account, in a coded form.|

#### Enumerated Values

|Property|Value|
|---|---|
|AccountSubType|ChargeCard|
|AccountSubType|CreditCard|
|AccountSubType|CurrentAccount|
|AccountSubType|EMoney|
|AccountSubType|Loan|
|AccountSubType|Mortgage|
|AccountSubType|PrePaidCard|
|AccountSubType|Savings|
|AccountType|Business|
|AccountType|Personal|
|Status|Deleted|
|Status|Disabled|
|Status|Enabled|
|Status|Pending|
|Status|ProForma|

<h2 id="tocS_OBAccountStatus1Code">OBAccountStatus1Code</h2>
<!-- backwards compatibility -->
<a id="schemaobaccountstatus1code"></a>
<a id="schema_OBAccountStatus1Code"></a>
<a id="tocSobaccountstatus1code"></a>
<a id="tocsobaccountstatus1code"></a>

```json
"Deleted"
```

Specifies the status of account resource in code form.

<h2 id="tocS_OBActiveCurrencyAndAmount_SimpleType">OBActiveCurrencyAndAmount_SimpleType</h2>
<!-- backwards compatibility -->
<a id="schemaobactivecurrencyandamount_simpletype"></a>
<a id="schema_OBActiveCurrencyAndAmount_SimpleType"></a>
<a id="tocSobactivecurrencyandamount_simpletype"></a>
<a id="tocsobactivecurrencyandamount_simpletype"></a>

```json
"string"
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
  "Amount": "string",
  "Currency": "string"
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
  "Amount": "string",
  "Currency": "string"
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
  "Amount": "string",
  "Currency": "string"
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
  "Amount": "string",
  "Currency": "string"
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
  "Amount": "string",
  "Currency": "string"
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
  "Amount": "string",
  "Currency": "string"
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
  "Amount": "string",
  "Currency": "string"
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
  "Amount": "string",
  "Currency": "string"
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
  "Amount": "string",
  "Currency": "string"
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
  "Amount": "string",
  "Currency": "string"
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
  "Amount": "string",
  "Currency": "string"
}
```

Amount of money associated with the amount type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Amount|[OBActiveCurrencyAndAmount_SimpleType](#schemaobactivecurrencyandamount_simpletype)|true|none|A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.|
|Currency|[ActiveOrHistoricCurrencyCode_1](#schemaactiveorhistoriccurrencycode_1)|true|none|A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".|

<h2 id="tocS_OBActiveOrHistoricCurrencyAndAmount_9">OBActiveOrHistoricCurrencyAndAmount_9</h2>
<!-- backwards compatibility -->
<a id="schemaobactiveorhistoriccurrencyandamount_9"></a>
<a id="schema_OBActiveOrHistoricCurrencyAndAmount_9"></a>
<a id="tocSobactiveorhistoriccurrencyandamount_9"></a>
<a id="tocsobactiveorhistoriccurrencyandamount_9"></a>

```json
{
  "Amount": "string",
  "Currency": "string"
}
```

Amount of money in the cash transaction entry.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Amount|[OBActiveCurrencyAndAmount_SimpleType](#schemaobactivecurrencyandamount_simpletype)|true|none|A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.|
|Currency|[ActiveOrHistoricCurrencyCode_1](#schemaactiveorhistoriccurrencycode_1)|true|none|A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".|

<h2 id="tocS_OBAddressTypeCode">OBAddressTypeCode</h2>
<!-- backwards compatibility -->
<a id="schemaobaddresstypecode"></a>
<a id="schema_OBAddressTypeCode"></a>
<a id="tocSobaddresstypecode"></a>
<a id="tocsobaddresstypecode"></a>

```json
"Business"
```

Identifies the nature of the postal address.

<h2 id="tocS_OBBCAData1">OBBCAData1</h2>
<!-- backwards compatibility -->
<a id="schemaobbcadata1"></a>
<a id="schema_OBBCAData1"></a>
<a id="tocSobbcadata1"></a>
<a id="tocsobbcadata1"></a>

```json
{
  "CreditInterest": {
    "TierBandSet": [
      {
        "CalculationMethod": "Compound",
        "Destination": "PayAway",
        "Notes": [
          "string"
        ],
        "TierBand": [
          {
            "AER": "string",
            "ApplicationFrequency": "Daily",
            "BankInterestRate": "string",
            "BankInterestRateType": "Gross",
            "CalculationFrequency": "Daily",
            "DepositInterestAppliedCoverage": "Banded",
            "FixedVariableInterestRateType": "Fixed",
            "Identification": "string",
            "Notes": [
              "string"
            ],
            "OtherApplicationFrequency": {
              "Code": "stri",
              "Description": "string",
              "Name": "string"
            },
            "OtherBankInterestType": {
              "Code": "stri",
              "Description": "string",
              "Name": "string"
            },
            "OtherCalculationFrequency": {
              "Code": "stri",
              "Description": "string",
              "Name": "string"
            },
            "TierValueMaximum": "string",
            "TierValueMinimum": "string"
          }
        ],
        "TierBandMethod": "Banded"
      }
    ]
  },
  "OtherFeesCharges": [
    {
      "FeeChargeCap": [
        {
          "CappingPeriod": "Day",
          "FeeCapAmount": "string",
          "FeeCapOccurrence": 0,
          "FeeType": [
            "Other"
          ],
          "MinMaxType": "Minimum",
          "Notes": [
            "string"
          ],
          "OtherFeeType": [
            {
              "Code": "stri",
              "Description": "string",
              "Name": "string"
            }
          ]
        }
      ],
      "FeeChargeDetail": [
        {
          "ApplicationFrequency": "OnClosing",
          "CalculationFrequency": "OnClosing",
          "FeeAmount": "string",
          "FeeApplicableRange": {
            "MaximumAmount": "string",
            "MaximumRate": "string",
            "MinimumAmount": "string",
            "MinimumRate": "string"
          },
          "FeeCategory": "Other",
          "FeeChargeCap": [
            {
              "CappingPeriod": "Day",
              "FeeCapAmount": "string",
              "FeeCapOccurrence": 0,
              "FeeType": [
                "Other"
              ],
              "MinMaxType": "Minimum",
              "Notes": [
                "string"
              ],
              "OtherFeeType": [
                {
                  "Code": "stri",
                  "Description": "string",
                  "Name": "string"
                }
              ]
            }
          ],
          "FeeRate": "string",
          "FeeRateType": "Gross",
          "FeeType": "Other",
          "NegotiableIndicator": true,
          "Notes": [
            "string"
          ],
          "OtherApplicationFrequency": {
            "Code": "stri",
            "Description": "string",
            "Name": "string"
          },
          "OtherCalculationFrequency": {
            "Code": "stri",
            "Description": "string",
            "Name": "string"
          },
          "OtherFeeCategoryType": {
            "Code": "stri",
            "Description": "string",
            "Name": "string"
          },
          "OtherFeeRateType": {
            "Code": "stri",
            "Description": "string",
            "Name": "string"
          },
          "OtherFeeType": {
            "Code": "stri",
            "Description": "string",
            "FeeCategory": "Other",
            "Name": "string"
          }
        }
      ],
      "OtherTariffType": {
        "Code": "stri",
        "Description": "string",
        "Name": "string"
      },
      "TariffName": "string",
      "TariffType": "Electronic"
    }
  ],
  "Overdraft": {
    "Notes": [
      "string"
    ],
    "OverdraftTierBandSet": [
      {
        "AuthorisedIndicator": true,
        "BufferAmount": "string",
        "Identification": "string",
        "Notes": [
          "string"
        ],
        "OverdraftFeesCharges": [
          {
            "OverdraftFeeChargeCap": [
              {
                "CappingPeriod": "Day",
                "FeeCapAmount": "string",
                "FeeCapOccurrence": 0,
                "FeeType": [
                  "ArrangedOverdraft"
                ],
                "MinMaxType": "Minimum",
                "Notes": [
                  "string"
                ],
                "OtherFeeType": [
                  {
                    "Code": "stri",
                    "Description": "string",
                    "Name": "string"
                  }
                ]
              }
            ],
            "OverdraftFeeChargeDetail": [
              {
                "ApplicationFrequency": "OnClosing",
                "CalculationFrequency": "OnClosing",
                "FeeAmount": "string",
                "FeeRate": "string",
                "FeeRateType": "Gross",
                "FeeType": "ArrangedOverdraft",
                "IncrementalBorrowingAmount": "string",
                "NegotiableIndicator": true,
                "Notes": [
                  "string"
                ],
                "OtherApplicationFrequency": {
                  "Code": "stri",
                  "Description": "string",
                  "Name": "string"
                },
                "OtherCalculationFrequency": {
                  "Code": "stri",
                  "Description": "string",
                  "Name": "string"
                },
                "OtherFeeRateType": {
                  "Code": "stri",
                  "Description": "string",
                  "Name": "string"
                },
                "OtherFeeType": {
                  "Code": "stri",
                  "Description": "string",
                  "Name": "string"
                },
                "OverdraftControlIndicator": true,
                "OverdraftFeeChargeCap": [
                  {
                    "CappingPeriod": "Day",
                    "FeeCapAmount": "string",
                    "FeeCapOccurrence": 0,
                    "FeeType": [
                      "ArrangedOverdraft"
                    ],
                    "MinMaxType": "Minimum",
                    "Notes": [
                      "string"
                    ],
                    "OtherFeeType": [
                      {
                        "Code": "stri",
                        "Description": "string",
                        "Name": "string"
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ],
        "OverdraftTierBand": [
          {
            "AgreementLengthMax": 0,
            "AgreementLengthMin": 0,
            "AgreementPeriod": "Day",
            "BankGuaranteedIndicator": true,
            "EAR": "string",
            "Identification": "string",
            "Notes": [
              "string"
            ],
            "OverdraftFeesCharges": [
              {
                "OverdraftFeeChargeCap": [
                  {
                    "CappingPeriod": "Day",
                    "FeeCapAmount": "string",
                    "FeeCapOccurrence": 0,
                    "FeeType": [
                      "ArrangedOverdraft"
                    ],
                    "MinMaxType": "Minimum",
                    "Notes": [
                      "string"
                    ],
                    "OtherFeeType": [
                      {
                        "Code": "stri",
                        "Description": "string",
                        "Name": "string"
                      }
                    ]
                  }
                ],
                "OverdraftFeeChargeDetail": [
                  {
                    "ApplicationFrequency": "OnClosing",
                    "CalculationFrequency": "OnClosing",
                    "FeeAmount": "string",
                    "FeeRate": "string",
                    "FeeRateType": "Gross",
                    "FeeType": "ArrangedOverdraft",
                    "IncrementalBorrowingAmount": "string",
                    "NegotiableIndicator": true,
                    "Notes": [
                      "string"
                    ],
                    "OtherApplicationFrequency": {
                      "Code": "stri",
                      "Description": "string",
                      "Name": "string"
                    },
                    "OtherCalculationFrequency": {
                      "Code": "stri",
                      "Description": "string",
                      "Name": "string"
                    },
                    "OtherFeeRateType": {
                      "Code": "stri",
                      "Description": "string",
                      "Name": "string"
                    },
                    "OtherFeeType": {
                      "Code": "stri",
                      "Description": "string",
                      "Name": "string"
                    },
                    "OverdraftControlIndicator": true,
                    "OverdraftFeeChargeCap": [
                      {
                        "CappingPeriod": "Day",
                        "FeeCapAmount": "string",
                        "FeeCapOccurrence": 0,
                        "FeeType": [
                          "ArrangedOverdraft"
                        ],
                        "MinMaxType": "Minimum",
                        "Notes": [
                          "string"
                        ],
                        "OtherFeeType": [
                          {
                            "Code": "stri",
                            "Description": "string",
                            "Name": "string"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ],
            "OverdraftInterestChargingCoverage": "Banded",
            "RepresentativeAPR": "string",
            "TierValueMax": "string",
            "TierValueMin": "string"
          }
        ],
        "OverdraftType": "Committed",
        "TierBandMethod": "Banded"
      }
    ]
  },
  "ProductDetails": {
    "FeeFreeLength": 0,
    "FeeFreeLengthPeriod": "Day",
    "Notes": [
      "string"
    ],
    "Segment": [
      "ClientAccount"
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CreditInterest|object|false|none|Details about the interest that may be payable to the BCA account holders|
|OtherFeesCharges|[object]|false|none|Contains details of fees and charges which are not associated with either Overdraft or features/benefits|
|Overdraft|object|false|none|Borrowing details|
|ProductDetails|object|false|none|none|

<h2 id="tocS_OBBalanceType1Code">OBBalanceType1Code</h2>
<!-- backwards compatibility -->
<a id="schemaobbalancetype1code"></a>
<a id="schema_OBBalanceType1Code"></a>
<a id="tocSobbalancetype1code"></a>
<a id="tocsobbalancetype1code"></a>

```json
"ClosingAvailable"
```

Balance type, in a coded form.

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
  "AccountId": "string",
  "BeneficiaryId": "string",
  "BeneficiaryType": "Trusted",
  "CreditorAccount": {
    "Identification": "string",
    "Name": "string",
    "SchemeName": "string",
    "SecondaryIdentification": "string"
  },
  "CreditorAgent": {
    "Identification": "string",
    "Name": "string",
    "PostalAddress": {
      "AddressLine": [
        "string"
      ],
      "AddressType": "Business",
      "BuildingNumber": "string",
      "Country": "string",
      "CountrySubDivision": "string",
      "Department": "string",
      "PostCode": "string",
      "StreetName": "string",
      "SubDepartment": "string",
      "TownName": "string"
    },
    "SchemeName": "string"
  },
  "Reference": "string",
  "SupplementaryData": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|[AccountId](#schemaaccountid)|false|none|A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.|
|BeneficiaryId|[BeneficiaryId](#schemabeneficiaryid)|false|none|A unique and immutable identifier used to identify the beneficiary resource. This identifier has no meaning to the account owner.|
|BeneficiaryType|[OBBeneficiaryType1Code](#schemaobbeneficiarytype1code)|false|none|Specifies the Beneficiary Type.|
|CreditorAccount|[OBCashAccount5_0](#schemaobcashaccount5_0)|false|none|Provides the details to identify the beneficiary account.|
|CreditorAgent|[OBBranchAndFinancialInstitutionIdentification6_0](#schemaobbranchandfinancialinstitutionidentification6_0)|false|none|Party that manages the account on behalf of the account owner, that is manages the registration and booking of entries on the account, calculates balances on the account and provides information about the account.<br>This is the servicer of the beneficiary account.|
|Reference|[Reference](#schemareference)|false|none|Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.<br>Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.<br>If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.|
|SupplementaryData|[OBSupplementaryData1](#schemaobsupplementarydata1)|false|none|Additional information that can not be captured in the structured fields and/or any other specific block.|

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
  "AccountId": "string",
  "BeneficiaryId": "string",
  "BeneficiaryType": "Trusted",
  "Reference": "string",
  "SupplementaryData": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|[AccountId](#schemaaccountid)|false|none|A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.|
|BeneficiaryId|[BeneficiaryId](#schemabeneficiaryid)|false|none|A unique and immutable identifier used to identify the beneficiary resource. This identifier has no meaning to the account owner.|
|BeneficiaryType|[OBBeneficiaryType1Code](#schemaobbeneficiarytype1code)|false|none|Specifies the Beneficiary Type.|
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
  "AccountId": "string",
  "BeneficiaryId": "string",
  "BeneficiaryType": "Trusted",
  "CreditorAccount": {
    "Identification": "string",
    "Name": "string",
    "SchemeName": "string",
    "SecondaryIdentification": "string"
  },
  "CreditorAgent": {
    "Identification": "string",
    "Name": "string",
    "PostalAddress": {
      "AddressLine": [
        "string"
      ],
      "AddressType": "Business",
      "BuildingNumber": "string",
      "Country": "string",
      "CountrySubDivision": "string",
      "Department": "string",
      "PostCode": "string",
      "StreetName": "string",
      "SubDepartment": "string",
      "TownName": "string"
    },
    "SchemeName": "string"
  },
  "Reference": "string",
  "SupplementaryData": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|[AccountId](#schemaaccountid)|false|none|A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.|
|BeneficiaryId|[BeneficiaryId](#schemabeneficiaryid)|false|none|A unique and immutable identifier used to identify the beneficiary resource. This identifier has no meaning to the account owner.|
|BeneficiaryType|[OBBeneficiaryType1Code](#schemaobbeneficiarytype1code)|false|none|Specifies the Beneficiary Type.|
|CreditorAccount|[OBCashAccount5_0](#schemaobcashaccount5_0)|true|none|Provides the details to identify the beneficiary account.|
|CreditorAgent|[OBBranchAndFinancialInstitutionIdentification6_0](#schemaobbranchandfinancialinstitutionidentification6_0)|false|none|Party that manages the account on behalf of the account owner, that is manages the registration and booking of entries on the account, calculates balances on the account and provides information about the account.<br>This is the servicer of the beneficiary account.|
|Reference|[Reference](#schemareference)|false|none|Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.<br>Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.<br>If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.|
|SupplementaryData|[OBSupplementaryData1](#schemaobsupplementarydata1)|false|none|Additional information that can not be captured in the structured fields and/or any other specific block.|

#### Enumerated Values

|Property|Value|
|---|---|
|BeneficiaryType|Trusted|
|BeneficiaryType|Ordinary|

<h2 id="tocS_OBBeneficiaryType1Code">OBBeneficiaryType1Code</h2>
<!-- backwards compatibility -->
<a id="schemaobbeneficiarytype1code"></a>
<a id="schema_OBBeneficiaryType1Code"></a>
<a id="tocSobbeneficiarytype1code"></a>
<a id="tocsobbeneficiarytype1code"></a>

```json
"Trusted"
```

Specifies the Beneficiary Type.

<h2 id="tocS_OBBranchAndFinancialInstitutionIdentification5_0">OBBranchAndFinancialInstitutionIdentification5_0</h2>
<!-- backwards compatibility -->
<a id="schemaobbranchandfinancialinstitutionidentification5_0"></a>
<a id="schema_OBBranchAndFinancialInstitutionIdentification5_0"></a>
<a id="tocSobbranchandfinancialinstitutionidentification5_0"></a>
<a id="tocsobbranchandfinancialinstitutionidentification5_0"></a>

```json
{
  "Identification": "string",
  "SchemeName": "string"
}
```

Party that manages the account on behalf of the account owner, that is manages the registration and booking of entries on the account, calculates balances on the account and provides information about the account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Identification|[Identification_1](#schemaidentification_1)|true|none|Unique and unambiguous identification of the servicing institution.|
|SchemeName|[OBExternalFinancialInstitutionIdentification4Code](#schemaobexternalfinancialinstitutionidentification4code)|true|none|Name of the identification scheme, in a coded form as published in an external list.|

<h2 id="tocS_OBBranchAndFinancialInstitutionIdentification5_1">OBBranchAndFinancialInstitutionIdentification5_1</h2>
<!-- backwards compatibility -->
<a id="schemaobbranchandfinancialinstitutionidentification5_1"></a>
<a id="schema_OBBranchAndFinancialInstitutionIdentification5_1"></a>
<a id="tocSobbranchandfinancialinstitutionidentification5_1"></a>
<a id="tocsobbranchandfinancialinstitutionidentification5_1"></a>

```json
{
  "Identification": "string",
  "SchemeName": "string"
}
```

Party that manages the account on behalf of the account owner, that is manages the registration and booking of entries on the account, calculates balances on the account and provides information about the account.
This is the servicer of the beneficiary account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Identification|[Identification_1](#schemaidentification_1)|true|none|Unique and unambiguous identification of the servicing institution.|
|SchemeName|[OBExternalFinancialInstitutionIdentification4Code](#schemaobexternalfinancialinstitutionidentification4code)|true|none|Name of the identification scheme, in a coded form as published in an external list.|

<h2 id="tocS_OBBranchAndFinancialInstitutionIdentification6_0">OBBranchAndFinancialInstitutionIdentification6_0</h2>
<!-- backwards compatibility -->
<a id="schemaobbranchandfinancialinstitutionidentification6_0"></a>
<a id="schema_OBBranchAndFinancialInstitutionIdentification6_0"></a>
<a id="tocSobbranchandfinancialinstitutionidentification6_0"></a>
<a id="tocsobbranchandfinancialinstitutionidentification6_0"></a>

```json
{
  "Identification": "string",
  "Name": "string",
  "PostalAddress": {
    "AddressLine": [
      "string"
    ],
    "AddressType": "Business",
    "BuildingNumber": "string",
    "Country": "string",
    "CountrySubDivision": "string",
    "Department": "string",
    "PostCode": "string",
    "StreetName": "string",
    "SubDepartment": "string",
    "TownName": "string"
  },
  "SchemeName": "string"
}
```

Party that manages the account on behalf of the account owner, that is manages the registration and booking of entries on the account, calculates balances on the account and provides information about the account.
This is the servicer of the beneficiary account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Identification|[Identification_1](#schemaidentification_1)|false|none|Unique and unambiguous identification of the servicing institution.|
|Name|[Name_1](#schemaname_1)|false|none|Name by which an agent is known and which is usually used to identify that agent.|
|PostalAddress|[OBPostalAddress6](#schemaobpostaladdress6)|false|none|Information that locates and identifies a specific address, as defined by postal services.|
|SchemeName|[OBExternalFinancialInstitutionIdentification4Code](#schemaobexternalfinancialinstitutionidentification4code)|false|none|Name of the identification scheme, in a coded form as published in an external list.|

<h2 id="tocS_OBBranchAndFinancialInstitutionIdentification6_1">OBBranchAndFinancialInstitutionIdentification6_1</h2>
<!-- backwards compatibility -->
<a id="schemaobbranchandfinancialinstitutionidentification6_1"></a>
<a id="schema_OBBranchAndFinancialInstitutionIdentification6_1"></a>
<a id="tocSobbranchandfinancialinstitutionidentification6_1"></a>
<a id="tocsobbranchandfinancialinstitutionidentification6_1"></a>

```json
{
  "Identification": "string",
  "Name": "string",
  "PostalAddress": {
    "AddressLine": [
      "string"
    ],
    "AddressType": "Business",
    "BuildingNumber": "string",
    "Country": "string",
    "CountrySubDivision": "string",
    "Department": "string",
    "PostCode": "string",
    "StreetName": "string",
    "SubDepartment": "string",
    "TownName": "string"
  },
  "SchemeName": "string"
}
```

Financial institution servicing an account for the creditor.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Identification|[Identification_2](#schemaidentification_2)|false|none|Unique and unambiguous identification of a financial institution or a branch of a financial institution.|
|Name|[Name_1](#schemaname_1)|false|none|Name by which an agent is known and which is usually used to identify that agent.|
|PostalAddress|[OBPostalAddress6](#schemaobpostaladdress6)|false|none|Information that locates and identifies a specific address, as defined by postal services.|
|SchemeName|[OBExternalFinancialInstitutionIdentification4Code](#schemaobexternalfinancialinstitutionidentification4code)|false|none|Name of the identification scheme, in a coded form as published in an external list.|

<h2 id="tocS_OBBranchAndFinancialInstitutionIdentification6_2">OBBranchAndFinancialInstitutionIdentification6_2</h2>
<!-- backwards compatibility -->
<a id="schemaobbranchandfinancialinstitutionidentification6_2"></a>
<a id="schema_OBBranchAndFinancialInstitutionIdentification6_2"></a>
<a id="tocSobbranchandfinancialinstitutionidentification6_2"></a>
<a id="tocsobbranchandfinancialinstitutionidentification6_2"></a>

```json
{
  "Identification": "string",
  "Name": "string",
  "PostalAddress": {
    "AddressLine": [
      "string"
    ],
    "AddressType": "Business",
    "BuildingNumber": "string",
    "Country": "string",
    "CountrySubDivision": "string",
    "Department": "string",
    "PostCode": "string",
    "StreetName": "string",
    "SubDepartment": "string",
    "TownName": "string"
  },
  "SchemeName": "string"
}
```

Financial institution servicing an account for the debtor.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Identification|[Identification_2](#schemaidentification_2)|false|none|Unique and unambiguous identification of a financial institution or a branch of a financial institution.|
|Name|[Name_1](#schemaname_1)|false|none|Name by which an agent is known and which is usually used to identify that agent.|
|PostalAddress|[OBPostalAddress6](#schemaobpostaladdress6)|false|none|Information that locates and identifies a specific address, as defined by postal services.|
|SchemeName|[OBExternalFinancialInstitutionIdentification4Code](#schemaobexternalfinancialinstitutionidentification4code)|false|none|Name of the identification scheme, in a coded form as published in an external list.|

<h2 id="tocS_OBCashAccount5_0">OBCashAccount5_0</h2>
<!-- backwards compatibility -->
<a id="schemaobcashaccount5_0"></a>
<a id="schema_OBCashAccount5_0"></a>
<a id="tocSobcashaccount5_0"></a>
<a id="tocsobcashaccount5_0"></a>

```json
{
  "Identification": "string",
  "Name": "string",
  "SchemeName": "string",
  "SecondaryIdentification": "string"
}
```

Provides the details to identify the beneficiary account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Identification|[Identification_0](#schemaidentification_0)|true|none|Identification assigned by an institution to identify an account. This identification is known by the account owner.|
|Name|[Name_0](#schemaname_0)|false|none|The account name is the name or names of the account owner(s) represented at an account level, as displayed by the ASPSP's online channels.<br>Note, the account name is not the product name or the nickname of the account.|
|SchemeName|[OBExternalAccountIdentification4Code](#schemaobexternalaccountidentification4code)|true|none|Name of the identification scheme, in a coded form as published in an external list.|
|SecondaryIdentification|[SecondaryIdentification](#schemasecondaryidentification)|false|none|This is secondary identification of the account, as assigned by the account servicing institution. <br>This can be used by building societies to additionally identify accounts with a roll number (in addition to a sort code and account number combination).|

<h2 id="tocS_OBCashAccount5_1">OBCashAccount5_1</h2>
<!-- backwards compatibility -->
<a id="schemaobcashaccount5_1"></a>
<a id="schema_OBCashAccount5_1"></a>
<a id="tocSobcashaccount5_1"></a>
<a id="tocsobcashaccount5_1"></a>

```json
{
  "Identification": "string",
  "Name": "string",
  "SchemeName": "string",
  "SecondaryIdentification": "string"
}
```

Provides the details to identify the beneficiary account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Identification|string|true|none|Beneficiary account identification.|
|Name|[Name_0](#schemaname_0)|false|none|The account name is the name or names of the account owner(s) represented at an account level, as displayed by the ASPSP's online channels.<br>Note, the account name is not the product name or the nickname of the account.|
|SchemeName|[OBExternalAccountIdentification4Code](#schemaobexternalaccountidentification4code)|true|none|Name of the identification scheme, in a coded form as published in an external list.|
|SecondaryIdentification|[SecondaryIdentification](#schemasecondaryidentification)|false|none|This is secondary identification of the account, as assigned by the account servicing institution. <br>This can be used by building societies to additionally identify accounts with a roll number (in addition to a sort code and account number combination).|

<h2 id="tocS_OBCashAccount6_0">OBCashAccount6_0</h2>
<!-- backwards compatibility -->
<a id="schemaobcashaccount6_0"></a>
<a id="schema_OBCashAccount6_0"></a>
<a id="tocSobcashaccount6_0"></a>
<a id="tocsobcashaccount6_0"></a>

```json
{
  "Identification": "string",
  "Name": "string",
  "SchemeName": "string",
  "SecondaryIdentification": "string"
}
```

Unambiguous identification of the account of the creditor, in the case of a debit transaction.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Identification|[Identification_0](#schemaidentification_0)|false|none|Identification assigned by an institution to identify an account. This identification is known by the account owner.|
|Name|[Name_0](#schemaname_0)|false|none|The account name is the name or names of the account owner(s) represented at an account level, as displayed by the ASPSP's online channels.<br>Note, the account name is not the product name or the nickname of the account.|
|SchemeName|[OBExternalAccountIdentification4Code](#schemaobexternalaccountidentification4code)|false|none|Name of the identification scheme, in a coded form as published in an external list.|
|SecondaryIdentification|[SecondaryIdentification](#schemasecondaryidentification)|false|none|This is secondary identification of the account, as assigned by the account servicing institution. <br>This can be used by building societies to additionally identify accounts with a roll number (in addition to a sort code and account number combination).|

<h2 id="tocS_OBCashAccount6_1">OBCashAccount6_1</h2>
<!-- backwards compatibility -->
<a id="schemaobcashaccount6_1"></a>
<a id="schema_OBCashAccount6_1"></a>
<a id="tocSobcashaccount6_1"></a>
<a id="tocsobcashaccount6_1"></a>

```json
{
  "Identification": "string",
  "Name": "string",
  "SchemeName": "string",
  "SecondaryIdentification": "string"
}
```

Unambiguous identification of the account of the debtor, in the case of a crebit transaction.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Identification|[Identification_0](#schemaidentification_0)|false|none|Identification assigned by an institution to identify an account. This identification is known by the account owner.|
|Name|[Name_0](#schemaname_0)|false|none|The account name is the name or names of the account owner(s) represented at an account level, as displayed by the ASPSP's online channels.<br>Note, the account name is not the product name or the nickname of the account.|
|SchemeName|[OBExternalAccountIdentification4Code](#schemaobexternalaccountidentification4code)|false|none|Name of the identification scheme, in a coded form as published in an external list.|
|SecondaryIdentification|[SecondaryIdentification](#schemasecondaryidentification)|false|none|This is secondary identification of the account, as assigned by the account servicing institution. <br>This can be used by building societies to additionally identify accounts with a roll number (in addition to a sort code and account number combination).|

<h2 id="tocS_OBCreditDebitCode_0">OBCreditDebitCode_0</h2>
<!-- backwards compatibility -->
<a id="schemaobcreditdebitcode_0"></a>
<a id="schema_OBCreditDebitCode_0"></a>
<a id="tocSobcreditdebitcode_0"></a>
<a id="tocsobcreditdebitcode_0"></a>

```json
"Credit"
```

Indicates whether the amount is a credit or a debit. 
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

Indicates whether the transaction is a credit or a debit entry.

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

<h2 id="tocS_OBCurrencyExchange5">OBCurrencyExchange5</h2>
<!-- backwards compatibility -->
<a id="schemaobcurrencyexchange5"></a>
<a id="schema_OBCurrencyExchange5"></a>
<a id="tocSobcurrencyexchange5"></a>
<a id="tocsobcurrencyexchange5"></a>

```json
{
  "ContractIdentification": "string",
  "ExchangeRate": 0,
  "InstructedAmount": {
    "Amount": "string",
    "Currency": "string"
  },
  "QuotationDate": "1970-01-01T00:00:00Z",
  "SourceCurrency": "string",
  "TargetCurrency": "string",
  "UnitCurrency": "string"
}
```

Set of elements used to provide details on the currency exchange.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ContractIdentification|string|false|none|Unique identification to unambiguously identify the foreign exchange contract.|
|ExchangeRate|number|true|none|Factor used to convert an amount from one currency into another. This reflects the price at which one currency was bought with another currency.<br>Usage: ExchangeRate expresses the ratio between UnitCurrency and QuotedCurrency (ExchangeRate = UnitCurrency/QuotedCurrency).|
|InstructedAmount|object|false|none|Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.|
|QuotationDate|string(date-time)|false|none|Date and time at which an exchange rate is quoted.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|SourceCurrency|string|true|none|Currency from which an amount is to be converted in a currency conversion.|
|TargetCurrency|string|false|none|Currency into which an amount is to be converted in a currency conversion.|
|UnitCurrency|string|false|none|Currency in which the rate of exchange is expressed in a currency exchange. In the example 1GBP = xxxCUR, the unit currency is GBP.|

<h2 id="tocS_OBEntryStatus1Code">OBEntryStatus1Code</h2>
<!-- backwards compatibility -->
<a id="schemaobentrystatus1code"></a>
<a id="schema_OBEntryStatus1Code"></a>
<a id="tocSobentrystatus1code"></a>
<a id="tocsobentrystatus1code"></a>

```json
"Booked"
```

Status of a transaction entry on the books of the account servicer.

<h2 id="tocS_OBError1">OBError1</h2>
<!-- backwards compatibility -->
<a id="schemaoberror1"></a>
<a id="schema_OBError1"></a>
<a id="tocSoberror1"></a>
<a id="tocsoberror1"></a>

```json
{
  "ErrorCode": "string",
  "Message": "string",
  "Path": "string",
  "Url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ErrorCode|string|true|none|Low level textual error code, e.g., UK.OBIE.Field.Missing|
|Message|string|true|none|A description of the error that occurred. e.g., 'A mandatory field isn't supplied' or 'RequestedExecutionDateTime must be in future'<br>OBIE doesn't standardise this field|
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
  "Code": "string",
  "Errors": [
    {
      "ErrorCode": "string",
      "Message": "string",
      "Path": "string",
      "Url": "string"
    }
  ],
  "Id": "string",
  "Message": "string"
}
```

An array of detail error codes, and messages, and URLs to documentation to help remediation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Code|string|true|none|High level textual error code, to help categorize the errors.|
|Errors|[[OBError1](#schemaoberror1)]|true|none|none|
|Id|string|false|none|A unique reference for the error instance, for audit purposes, in case of unknown/unclassified errors.|
|Message|string|true|none|Brief Error message, e.g., 'There is something wrong with the request parameters provided'|

<h2 id="tocS_OBExternalAccountIdentification4Code">OBExternalAccountIdentification4Code</h2>
<!-- backwards compatibility -->
<a id="schemaobexternalaccountidentification4code"></a>
<a id="schema_OBExternalAccountIdentification4Code"></a>
<a id="tocSobexternalaccountidentification4code"></a>
<a id="tocsobexternalaccountidentification4code"></a>

```json
"string"
```

Name of the identification scheme, in a coded form as published in an external list.

<h2 id="tocS_OBExternalAccountRole1Code">OBExternalAccountRole1Code</h2>
<!-- backwards compatibility -->
<a id="schemaobexternalaccountrole1code"></a>
<a id="schema_OBExternalAccountRole1Code"></a>
<a id="tocSobexternalaccountrole1code"></a>
<a id="tocsobexternalaccountrole1code"></a>

```json
"string"
```

A party’s role with respect to the related account.

<h2 id="tocS_OBExternalAccountSubType1Code">OBExternalAccountSubType1Code</h2>
<!-- backwards compatibility -->
<a id="schemaobexternalaccountsubtype1code"></a>
<a id="schema_OBExternalAccountSubType1Code"></a>
<a id="tocSobexternalaccountsubtype1code"></a>
<a id="tocsobexternalaccountsubtype1code"></a>

```json
"ChargeCard"
```

Specifies the sub type of account (product family group).

<h2 id="tocS_OBExternalAccountType1Code">OBExternalAccountType1Code</h2>
<!-- backwards compatibility -->
<a id="schemaobexternalaccounttype1code"></a>
<a id="schema_OBExternalAccountType1Code"></a>
<a id="tocSobexternalaccounttype1code"></a>
<a id="tocsobexternalaccounttype1code"></a>

```json
"Business"
```

Specifies the type of account (personal or business).

<h2 id="tocS_OBExternalDirectDebitStatus1Code">OBExternalDirectDebitStatus1Code</h2>
<!-- backwards compatibility -->
<a id="schemaobexternaldirectdebitstatus1code"></a>
<a id="schema_OBExternalDirectDebitStatus1Code"></a>
<a id="tocSobexternaldirectdebitstatus1code"></a>
<a id="tocsobexternaldirectdebitstatus1code"></a>

```json
"Active"
```

Specifies the status of the direct debit in code form.

<h2 id="tocS_OBExternalFinancialInstitutionIdentification4Code">OBExternalFinancialInstitutionIdentification4Code</h2>
<!-- backwards compatibility -->
<a id="schemaobexternalfinancialinstitutionidentification4code"></a>
<a id="schema_OBExternalFinancialInstitutionIdentification4Code"></a>
<a id="tocSobexternalfinancialinstitutionidentification4code"></a>
<a id="tocsobexternalfinancialinstitutionidentification4code"></a>

```json
"string"
```

Name of the identification scheme, in a coded form as published in an external list.

<h2 id="tocS_OBExternalLegalStructureType1Code">OBExternalLegalStructureType1Code</h2>
<!-- backwards compatibility -->
<a id="schemaobexternallegalstructuretype1code"></a>
<a id="schema_OBExternalLegalStructureType1Code"></a>
<a id="tocSobexternallegalstructuretype1code"></a>
<a id="tocsobexternallegalstructuretype1code"></a>

```json
"string"
```

Legal standing of the party.

<h2 id="tocS_OBExternalPartyType1Code">OBExternalPartyType1Code</h2>
<!-- backwards compatibility -->
<a id="schemaobexternalpartytype1code"></a>
<a id="schema_OBExternalPartyType1Code"></a>
<a id="tocSobexternalpartytype1code"></a>
<a id="tocsobexternalpartytype1code"></a>

```json
"Delegate"
```

Party type, in a coded form.

<h2 id="tocS_OBExternalScheduleType1Code">OBExternalScheduleType1Code</h2>
<!-- backwards compatibility -->
<a id="schemaobexternalscheduletype1code"></a>
<a id="schema_OBExternalScheduleType1Code"></a>
<a id="tocSobexternalscheduletype1code"></a>
<a id="tocsobexternalscheduletype1code"></a>

```json
"Arrival"
```

Specifies the scheduled payment date type requested

<h2 id="tocS_OBExternalStandingOrderStatus1Code">OBExternalStandingOrderStatus1Code</h2>
<!-- backwards compatibility -->
<a id="schemaobexternalstandingorderstatus1code"></a>
<a id="schema_OBExternalStandingOrderStatus1Code"></a>
<a id="tocSobexternalstandingorderstatus1code"></a>
<a id="tocsobexternalstandingorderstatus1code"></a>

```json
"Active"
```

Specifies the status of the standing order in code form.

<h2 id="tocS_OBExternalStatementAmountType1Code">OBExternalStatementAmountType1Code</h2>
<!-- backwards compatibility -->
<a id="schemaobexternalstatementamounttype1code"></a>
<a id="schema_OBExternalStatementAmountType1Code"></a>
<a id="tocSobexternalstatementamounttype1code"></a>
<a id="tocsobexternalstatementamounttype1code"></a>

```json
"string"
```

Amount type, in a coded form.

<h2 id="tocS_OBExternalStatementBenefitType1Code">OBExternalStatementBenefitType1Code</h2>
<!-- backwards compatibility -->
<a id="schemaobexternalstatementbenefittype1code"></a>
<a id="schema_OBExternalStatementBenefitType1Code"></a>
<a id="tocSobexternalstatementbenefittype1code"></a>
<a id="tocsobexternalstatementbenefittype1code"></a>

```json
"string"
```

Benefit type, in a coded form.

<h2 id="tocS_OBExternalStatementDateTimeType1Code">OBExternalStatementDateTimeType1Code</h2>
<!-- backwards compatibility -->
<a id="schemaobexternalstatementdatetimetype1code"></a>
<a id="schema_OBExternalStatementDateTimeType1Code"></a>
<a id="tocSobexternalstatementdatetimetype1code"></a>
<a id="tocsobexternalstatementdatetimetype1code"></a>

```json
"string"
```

Date time type, in a coded form.

<h2 id="tocS_OBExternalStatementFeeFrequency1Code">OBExternalStatementFeeFrequency1Code</h2>
<!-- backwards compatibility -->
<a id="schemaobexternalstatementfeefrequency1code"></a>
<a id="schema_OBExternalStatementFeeFrequency1Code"></a>
<a id="tocSobexternalstatementfeefrequency1code"></a>
<a id="tocsobexternalstatementfeefrequency1code"></a>

```json
"string"
```

How frequently the fee is applied to the Account.

<h2 id="tocS_OBExternalStatementFeeRateType1Code">OBExternalStatementFeeRateType1Code</h2>
<!-- backwards compatibility -->
<a id="schemaobexternalstatementfeeratetype1code"></a>
<a id="schema_OBExternalStatementFeeRateType1Code"></a>
<a id="tocSobexternalstatementfeeratetype1code"></a>
<a id="tocsobexternalstatementfeeratetype1code"></a>

```json
"string"
```

Description that may be available for the statement fee rate type.

<h2 id="tocS_OBExternalStatementFeeType1Code">OBExternalStatementFeeType1Code</h2>
<!-- backwards compatibility -->
<a id="schemaobexternalstatementfeetype1code"></a>
<a id="schema_OBExternalStatementFeeType1Code"></a>
<a id="tocSobexternalstatementfeetype1code"></a>
<a id="tocsobexternalstatementfeetype1code"></a>

```json
"string"
```

Fee type, in a coded form.

<h2 id="tocS_OBExternalStatementInterestFrequency1Code">OBExternalStatementInterestFrequency1Code</h2>
<!-- backwards compatibility -->
<a id="schemaobexternalstatementinterestfrequency1code"></a>
<a id="schema_OBExternalStatementInterestFrequency1Code"></a>
<a id="tocSobexternalstatementinterestfrequency1code"></a>
<a id="tocsobexternalstatementinterestfrequency1code"></a>

```json
"string"
```

Specifies the statement fee type requested

<h2 id="tocS_OBExternalStatementInterestRateType1Code">OBExternalStatementInterestRateType1Code</h2>
<!-- backwards compatibility -->
<a id="schemaobexternalstatementinterestratetype1code"></a>
<a id="schema_OBExternalStatementInterestRateType1Code"></a>
<a id="tocSobexternalstatementinterestratetype1code"></a>
<a id="tocsobexternalstatementinterestratetype1code"></a>

```json
"string"
```

Description that may be available for the statement Interest rate type.

<h2 id="tocS_OBExternalStatementInterestType1Code">OBExternalStatementInterestType1Code</h2>
<!-- backwards compatibility -->
<a id="schemaobexternalstatementinteresttype1code"></a>
<a id="schema_OBExternalStatementInterestType1Code"></a>
<a id="tocSobexternalstatementinteresttype1code"></a>
<a id="tocsobexternalstatementinteresttype1code"></a>

```json
"string"
```

Interest amount type, in a coded form.

<h2 id="tocS_OBExternalStatementRateType1Code">OBExternalStatementRateType1Code</h2>
<!-- backwards compatibility -->
<a id="schemaobexternalstatementratetype1code"></a>
<a id="schema_OBExternalStatementRateType1Code"></a>
<a id="tocSobexternalstatementratetype1code"></a>
<a id="tocsobexternalstatementratetype1code"></a>

```json
"string"
```

Statement rate type, in a coded form.

<h2 id="tocS_OBExternalStatementType1Code">OBExternalStatementType1Code</h2>
<!-- backwards compatibility -->
<a id="schemaobexternalstatementtype1code"></a>
<a id="schema_OBExternalStatementType1Code"></a>
<a id="tocSobexternalstatementtype1code"></a>
<a id="tocsobexternalstatementtype1code"></a>

```json
"AccountClosure"
```

Statement type, in a coded form.

<h2 id="tocS_OBExternalStatementValueType1Code">OBExternalStatementValueType1Code</h2>
<!-- backwards compatibility -->
<a id="schemaobexternalstatementvaluetype1code"></a>
<a id="schema_OBExternalStatementValueType1Code"></a>
<a id="tocSobexternalstatementvaluetype1code"></a>
<a id="tocsobexternalstatementvaluetype1code"></a>

```json
"string"
```

Statement value type, in a coded form.

<h2 id="tocS_OBExternalSwitchStatusCode">OBExternalSwitchStatusCode</h2>
<!-- backwards compatibility -->
<a id="schemaobexternalswitchstatuscode"></a>
<a id="schema_OBExternalSwitchStatusCode"></a>
<a id="tocSobexternalswitchstatuscode"></a>
<a id="tocsobexternalswitchstatuscode"></a>

```json
"string"
```

Specifies the switch status for the account, in a coded form.

<h2 id="tocS_OBMerchantDetails1">OBMerchantDetails1</h2>
<!-- backwards compatibility -->
<a id="schemaobmerchantdetails1"></a>
<a id="schema_OBMerchantDetails1"></a>
<a id="tocSobmerchantdetails1"></a>
<a id="tocsobmerchantdetails1"></a>

```json
{
  "MerchantCategoryCode": "stri",
  "MerchantName": "string"
}
```

Details of the merchant involved in the transaction.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|MerchantCategoryCode|string|false|none|Category code conform to ISO 18245, related to the type of services or goods the merchant provides for the transaction.|
|MerchantName|string|false|none|Name by which the merchant is known.|

<h2 id="tocS_OBPCAData1">OBPCAData1</h2>
<!-- backwards compatibility -->
<a id="schemaobpcadata1"></a>
<a id="schema_OBPCAData1"></a>
<a id="tocSobpcadata1"></a>
<a id="tocsobpcadata1"></a>

```json
{
  "CreditInterest": {
    "TierBandSet": [
      {
        "CalculationMethod": "Compound",
        "Destination": "PayAway",
        "Notes": [
          "string"
        ],
        "TierBand": [
          {
            "AER": "string",
            "ApplicationFrequency": "PerAcademicTerm",
            "BankInterestRate": "string",
            "BankInterestRateType": "LinkedBaseRate",
            "CalculationFrequency": "PerAcademicTerm",
            "DepositInterestAppliedCoverage": "Tiered",
            "FixedVariableInterestRateType": "Fixed",
            "Identification": "string",
            "Notes": [
              "string"
            ],
            "OtherApplicationFrequency": {
              "Code": "stri",
              "Description": "string",
              "Name": "string"
            },
            "OtherBankInterestType": {
              "Code": "stri",
              "Description": "string",
              "Name": "string"
            },
            "OtherCalculationFrequency": {
              "Code": "stri",
              "Description": "string",
              "Name": "string"
            },
            "TierValueMaximum": "string",
            "TierValueMinimum": "string"
          }
        ],
        "TierBandMethod": "Tiered"
      }
    ]
  },
  "OtherFeesCharges": {
    "FeeChargeCap": [
      {
        "CappingPeriod": "AcademicTerm",
        "FeeCapAmount": "string",
        "FeeCapOccurrence": 0,
        "FeeType": [
          "ServiceCAccountFee"
        ],
        "MinMaxType": "Minimum",
        "Notes": [
          "string"
        ],
        "OtherFeeType": [
          {
            "Code": "stri",
            "Description": "string",
            "Name": "string"
          }
        ]
      }
    ],
    "FeeChargeDetail": [
      {
        "ApplicationFrequency": "AccountClosing",
        "CalculationFrequency": "AccountClosing",
        "FeeAmount": "string",
        "FeeApplicableRange": {
          "MaximumAmount": "string",
          "MaximumRate": "string",
          "MinimumAmount": "string",
          "MinimumRate": "string"
        },
        "FeeCategory": "Other",
        "FeeChargeCap": [
          {
            "CappingPeriod": "AcademicTerm",
            "FeeCapAmount": "string",
            "FeeCapOccurrence": 0,
            "FeeType": [
              "ServiceCAccountFee"
            ],
            "MinMaxType": "Minimum",
            "Notes": [
              "string"
            ],
            "OtherFeeType": [
              {
                "Code": "stri",
                "Description": "string",
                "Name": "string"
              }
            ]
          }
        ],
        "FeeRate": "string",
        "FeeRateType": "LinkedBaseRate",
        "FeeType": "ServiceCAccountFee",
        "Notes": [
          "string"
        ],
        "OtherApplicationFrequency": {
          "Code": "stri",
          "Description": "string",
          "Name": "string"
        },
        "OtherCalculationFrequency": {
          "Code": "stri",
          "Description": "string",
          "Name": "string"
        },
        "OtherFeeCategoryType": {
          "Code": "stri",
          "Description": "string",
          "Name": "string"
        },
        "OtherFeeRateType": {
          "Code": "stri",
          "Description": "string",
          "Name": "string"
        },
        "OtherFeeType": {
          "Code": "stri",
          "Description": "string",
          "FeeCategory": "Other",
          "Name": "string"
        }
      }
    ]
  },
  "Overdraft": {
    "Notes": [
      "string"
    ],
    "OverdraftTierBandSet": [
      {
        "AuthorisedIndicator": true,
        "BufferAmount": "string",
        "Identification": "string",
        "Notes": [
          "string"
        ],
        "OverdraftFeesCharges": [
          {
            "OverdraftFeeChargeCap": [
              {
                "CappingPeriod": "AcademicTerm",
                "FeeCapAmount": "string",
                "FeeCapOccurrence": 0,
                "FeeType": [
                  "ArrangedOverdraft"
                ],
                "MinMaxType": "Minimum",
                "Notes": [
                  "string"
                ],
                "OtherFeeType": [
                  {
                    "Code": "stri",
                    "Description": "string",
                    "Name": "string"
                  }
                ],
                "OverdraftControlIndicator": true
              }
            ],
            "OverdraftFeeChargeDetail": [
              {
                "ApplicationFrequency": "AccountClosing",
                "CalculationFrequency": "AccountClosing",
                "FeeAmount": "string",
                "FeeRate": "string",
                "FeeRateType": "LinkedBaseRate",
                "FeeType": "ArrangedOverdraft",
                "IncrementalBorrowingAmount": "string",
                "Notes": [
                  "string"
                ],
                "OtherApplicationFrequency": {
                  "Code": "stri",
                  "Description": "string",
                  "Name": "string"
                },
                "OtherCalculationFrequency": {
                  "Code": "stri",
                  "Description": "string",
                  "Name": "string"
                },
                "OtherFeeRateType": {
                  "Code": "stri",
                  "Description": "string",
                  "Name": "string"
                },
                "OtherFeeType": {
                  "Code": "stri",
                  "Description": "string",
                  "Name": "string"
                },
                "OverdraftControlIndicator": true,
                "OverdraftFeeChargeCap": {
                  "CappingPeriod": "AcademicTerm",
                  "FeeCapAmount": "string",
                  "FeeCapOccurrence": 0,
                  "FeeType": [
                    "ArrangedOverdraft"
                  ],
                  "MinMaxType": "Minimum",
                  "Notes": [
                    "string"
                  ],
                  "OtherFeeType": [
                    {
                      "Code": "stri",
                      "Description": "string",
                      "Name": "string"
                    }
                  ],
                  "OverdraftControlIndicator": true
                }
              }
            ]
          }
        ],
        "OverdraftTierBand": [
          {
            "BankGuaranteedIndicator": true,
            "EAR": "string",
            "Identification": "string",
            "Notes": [
              "string"
            ],
            "OverdraftFeesCharges": [
              {
                "OverdraftFeeChargeCap": [
                  {
                    "CappingPeriod": "AcademicTerm",
                    "FeeCapAmount": "string",
                    "FeeCapOccurrence": 0,
                    "FeeType": [
                      "ArrangedOverdraft"
                    ],
                    "MinMaxType": "Minimum",
                    "Notes": [
                      "string"
                    ],
                    "OtherFeeType": [
                      {
                        "Code": "stri",
                        "Description": "string",
                        "Name": "string"
                      }
                    ],
                    "OverdraftControlIndicator": true
                  }
                ],
                "OverdraftFeeChargeDetail": [
                  {
                    "ApplicationFrequency": "AccountClosing",
                    "CalculationFrequency": "AccountClosing",
                    "FeeAmount": "string",
                    "FeeRate": "string",
                    "FeeRateType": "LinkedBaseRate",
                    "FeeType": "ArrangedOverdraft",
                    "IncrementalBorrowingAmount": "string",
                    "Notes": [
                      "string"
                    ],
                    "OtherApplicationFrequency": {
                      "Code": "stri",
                      "Description": "string",
                      "Name": "string"
                    },
                    "OtherCalculationFrequency": {
                      "Code": "stri",
                      "Description": "string",
                      "Name": "string"
                    },
                    "OtherFeeRateType": {
                      "Code": "stri",
                      "Description": "string",
                      "Name": "string"
                    },
                    "OtherFeeType": {
                      "Code": "stri",
                      "Description": "string",
                      "Name": "string"
                    },
                    "OverdraftControlIndicator": true,
                    "OverdraftFeeChargeCap": {
                      "CappingPeriod": "AcademicTerm",
                      "FeeCapAmount": "string",
                      "FeeCapOccurrence": 0,
                      "FeeType": [
                        "ArrangedOverdraft"
                      ],
                      "MinMaxType": "Minimum",
                      "Notes": [
                        "string"
                      ],
                      "OtherFeeType": [
                        {
                          "Code": "stri",
                          "Description": "string",
                          "Name": "string"
                        }
                      ],
                      "OverdraftControlIndicator": true
                    }
                  }
                ]
              }
            ],
            "OverdraftInterestChargingCoverage": "Tiered",
            "RepresentativeAPR": "string",
            "TierValueMax": "string",
            "TierValueMin": "string"
          }
        ],
        "OverdraftType": "Committed",
        "TierBandMethod": "Tiered"
      }
    ]
  },
  "ProductDetails": {
    "MonthlyMaximumCharge": "string",
    "Notes": [
      "string"
    ],
    "Segment": [
      "Basic"
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CreditInterest|object|false|none|Details about the interest that may be payable to the PCA account holders|
|OtherFeesCharges|object|false|none|Contains details of fees and charges which are not associated with either borrowing or features/benefits|
|Overdraft|object|false|none|Details about Overdraft rates, fees & charges|
|ProductDetails|object|false|none|none|

<h2 id="tocS_OBParty2">OBParty2</h2>
<!-- backwards compatibility -->
<a id="schemaobparty2"></a>
<a id="schema_OBParty2"></a>
<a id="tocSobparty2"></a>
<a id="tocsobparty2"></a>

```json
{
  "AccountRole": "string",
  "Address": [
    {
      "AddressLine": [
        "string"
      ],
      "AddressType": "Business",
      "BuildingNumber": "string",
      "Country": "string",
      "CountrySubDivision": "string",
      "PostCode": "string",
      "StreetName": "string",
      "TownName": "string"
    }
  ],
  "BeneficialOwnership": true,
  "EmailAddress": "string",
  "FullLegalName": "string",
  "LegalStructure": "string",
  "Mobile": "string",
  "Name": "string",
  "PartyId": "string",
  "PartyNumber": "string",
  "PartyType": "Delegate",
  "Phone": "string",
  "Relationships": {
    "Account": {
      "Id": "string",
      "Related": "http://example.com"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountRole|[OBExternalAccountRole1Code](#schemaobexternalaccountrole1code)|false|none|A party’s role with respect to the related account.|
|Address|[object]|false|none|none|
|BeneficialOwnership|boolean|false|none|none|
|EmailAddress|[EmailAddress](#schemaemailaddress)|false|none|Address for electronic mail (e-mail).|
|FullLegalName|[FullLegalName](#schemafulllegalname)|false|none|Specifies a character string with a maximum length of 350 characters.|
|LegalStructure|[OBExternalLegalStructureType1Code](#schemaobexternallegalstructuretype1code)|false|none|Legal standing of the party.|
|Mobile|[PhoneNumber_1](#schemaphonenumber_1)|false|none|Collection of information that identifies a mobile phone number, as defined by telecom services.|
|Name|[Name_3](#schemaname_3)|false|none|Name by which a party is known and which is usually used to identify that party.|
|PartyId|[PartyId](#schemapartyid)|true|none|A unique and immutable identifier used to identify the customer resource. This identifier has no meaning to the account owner.|
|PartyNumber|[PartyNumber](#schemapartynumber)|false|none|Number assigned by an agent to identify its customer.|
|PartyType|[OBExternalPartyType1Code](#schemaobexternalpartytype1code)|false|none|Party type, in a coded form.|
|Phone|[PhoneNumber_0](#schemaphonenumber_0)|false|none|Collection of information that identifies a phone number, as defined by telecom services.|
|Relationships|[OBPartyRelationships1](#schemaobpartyrelationships1)|false|none|The Party's relationships with other resources.|

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
    "Id": "string",
    "Related": "http://example.com"
  }
}
```

The Party's relationships with other resources.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Account|object|false|none|Relationship to the Account resource.|

<h2 id="tocS_OBPostalAddress6">OBPostalAddress6</h2>
<!-- backwards compatibility -->
<a id="schemaobpostaladdress6"></a>
<a id="schema_OBPostalAddress6"></a>
<a id="tocSobpostaladdress6"></a>
<a id="tocsobpostaladdress6"></a>

```json
{
  "AddressLine": [
    "string"
  ],
  "AddressType": "Business",
  "BuildingNumber": "string",
  "Country": "string",
  "CountrySubDivision": "string",
  "Department": "string",
  "PostCode": "string",
  "StreetName": "string",
  "SubDepartment": "string",
  "TownName": "string"
}
```

Information that locates and identifies a specific address, as defined by postal services.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AddressLine|[string]|false|none|none|
|AddressType|[OBAddressTypeCode](#schemaobaddresstypecode)|false|none|Identifies the nature of the postal address.|
|BuildingNumber|[BuildingNumber](#schemabuildingnumber)|false|none|Number that identifies the position of a building on a street.|
|Country|string|false|none|Nation with its own government.|
|CountrySubDivision|string|false|none|Identifies a subdivision of a country such as state, region, county.|
|Department|string|false|none|Identification of a division of a large organisation or building.|
|PostCode|[PostCode](#schemapostcode)|false|none|Identifier consisting of a group of letters and/or numbers that is added to a postal address to assist the sorting of mail.|
|StreetName|[StreetName](#schemastreetname)|false|none|Name of a street or thoroughfare.|
|SubDepartment|string|false|none|Identification of a sub-division of a large organisation or building.|
|TownName|[TownName](#schematownname)|false|none|Name of a built-up area, with defined boundaries, and a local government.|

#### Enumerated Values

|Property|Value|
|---|---|
|AddressType|Business|
|AddressType|Correspondence|
|AddressType|DeliveryTo|
|AddressType|MailTo|
|AddressType|POBox|
|AddressType|Postal|
|AddressType|Residential|
|AddressType|Statement|

<h2 id="tocS_OBRate1_0">OBRate1_0</h2>
<!-- backwards compatibility -->
<a id="schemaobrate1_0"></a>
<a id="schema_OBRate1_0"></a>
<a id="tocSobrate1_0"></a>
<a id="tocsobrate1_0"></a>

```json
0
```

Rate charged for Statement Fee (where it is charged in terms of a rate rather than an amount)

<h2 id="tocS_OBRate1_1">OBRate1_1</h2>
<!-- backwards compatibility -->
<a id="schemaobrate1_1"></a>
<a id="schema_OBRate1_1"></a>
<a id="tocSobrate1_1"></a>
<a id="tocsobrate1_1"></a>

```json
0
```

field representing a percentage (e.g. 0.05 represents 5% and 0.9525 represents 95.25%). Note the number of decimal places may vary.

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
        "Account": [
          {
            "Identification": "string",
            "Name": "string",
            "SchemeName": "string",
            "SecondaryIdentification": "string"
          }
        ],
        "AccountId": "string",
        "AccountSubType": "ChargeCard",
        "AccountType": "Business",
        "Currency": "string",
        "Description": "string",
        "MaturityDate": "1970-01-01T00:00:00Z",
        "Nickname": "string",
        "OpeningDate": "1970-01-01T00:00:00Z",
        "Servicer": {
          "Identification": "string",
          "SchemeName": "string"
        },
        "Status": "Deleted",
        "StatusUpdateDateTime": "1970-01-01T00:00:00Z",
        "SwitchStatus": "string"
      }
    ]
  },
  "Links": {
    "First": "http://example.com",
    "Last": "http://example.com",
    "Next": "http://example.com",
    "Prev": "http://example.com",
    "Self": "http://example.com"
  },
  "Meta": {
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z",
    "TotalPages": 0
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
        "AccountId": "string",
        "Amount": {
          "Amount": "string",
          "Currency": "string"
        },
        "CreditDebitIndicator": "Credit",
        "CreditLine": [
          {
            "Amount": {
              "Amount": "string",
              "Currency": "string"
            },
            "Included": true,
            "Type": "Available"
          }
        ],
        "DateTime": "1970-01-01T00:00:00Z",
        "Type": "ClosingAvailable"
      }
    ]
  },
  "Links": {
    "First": "http://example.com",
    "Last": "http://example.com",
    "Next": "http://example.com",
    "Prev": "http://example.com",
    "Self": "http://example.com"
  },
  "Meta": {
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z",
    "TotalPages": 0
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
        "AccountId": "string",
        "BeneficiaryId": "string",
        "BeneficiaryType": "Trusted",
        "CreditorAccount": {
          "Identification": "string",
          "Name": "string",
          "SchemeName": "string",
          "SecondaryIdentification": "string"
        },
        "CreditorAgent": {
          "Identification": "string",
          "Name": "string",
          "PostalAddress": {
            "AddressLine": [
              "string"
            ],
            "AddressType": "Business",
            "BuildingNumber": "string",
            "Country": "string",
            "CountrySubDivision": "string",
            "Department": "string",
            "PostCode": "string",
            "StreetName": "string",
            "SubDepartment": "string",
            "TownName": "string"
          },
          "SchemeName": "string"
        },
        "Reference": "string",
        "SupplementaryData": {}
      }
    ]
  },
  "Links": {
    "First": "http://example.com",
    "Last": "http://example.com",
    "Next": "http://example.com",
    "Prev": "http://example.com",
    "Self": "http://example.com"
  },
  "Meta": {
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z",
    "TotalPages": 0
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
    "ExpirationDateTime": "1970-01-01T00:00:00Z",
    "Permissions": [
      "ReadAccountsBasic"
    ],
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
|Risk|[OBRisk2](#schemaobrisk2)|true|none|The Risk section is sent by the initiating party to the ASPSP. It is used to specify additional details for risk scoring for Account Info.|

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
    "CreationDateTime": "1970-01-01T00:00:00Z",
    "ExpirationDateTime": "1970-01-01T00:00:00Z",
    "Permissions": [
      "ReadAccountsBasic"
    ],
    "Status": "Authorised",
    "StatusUpdateDateTime": "1970-01-01T00:00:00Z",
    "TransactionFromDateTime": "1970-01-01T00:00:00Z",
    "TransactionToDateTime": "1970-01-01T00:00:00Z"
  },
  "Links": {
    "First": "http://example.com",
    "Last": "http://example.com",
    "Next": "http://example.com",
    "Prev": "http://example.com",
    "Self": "http://example.com"
  },
  "Meta": {
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z",
    "TotalPages": 0
  },
  "Risk": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Data|object|true|none|none|
|Links|[Links](#schemalinks)|false|none|Links relevant to the payload|
|Meta|[Meta](#schemameta)|false|none|Meta Data relevant to the payload|
|Risk|[OBRisk2](#schemaobrisk2)|true|none|The Risk section is sent by the initiating party to the ASPSP. It is used to specify additional details for risk scoring for Account Info.|

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
      "AccountId": "string",
      "CreationDateTime": "1970-01-01T00:00:00Z",
      "EndDateTime": "1970-01-01T00:00:00Z",
      "StartDateTime": "1970-01-01T00:00:00Z",
      "StatementAmount": [
        {
          "Amount": {
            "Amount": "string",
            "Currency": "string"
          },
          "CreditDebitIndicator": "Credit",
          "Type": "string"
        }
      ],
      "StatementBenefit": [
        {
          "Amount": {
            "Amount": "string",
            "Currency": "string"
          },
          "Type": "string"
        }
      ],
      "StatementDateTime": [
        {
          "DateTime": "1970-01-01T00:00:00Z",
          "Type": "string"
        }
      ],
      "StatementDescription": [
        "string"
      ],
      "StatementFee": [
        {
          "Amount": {
            "Amount": "string",
            "Currency": "string"
          },
          "CreditDebitIndicator": "Credit",
          "Description": "string",
          "Frequency": "string",
          "Rate": 0,
          "RateType": "string",
          "Type": "string"
        }
      ],
      "StatementId": "string",
      "StatementInterest": [
        {
          "Amount": {
            "Amount": "string",
            "Currency": "string"
          },
          "CreditDebitIndicator": "Credit",
          "Description": "string",
          "Frequency": "string",
          "Rate": 0,
          "RateType": "string",
          "Type": "string"
        }
      ],
      "StatementRate": [
        {
          "Rate": "string",
          "Type": "string"
        }
      ],
      "StatementReference": "string",
      "StatementValue": [
        {
          "Type": "string",
          "Value": "string"
        }
      ],
      "Type": "AccountClosure"
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
      "AccountId": "string",
      "AddressLine": "string",
      "Amount": {
        "Amount": "string",
        "Currency": "string"
      },
      "Balance": {
        "Amount": {
          "Amount": "string",
          "Currency": "string"
        },
        "CreditDebitIndicator": "Credit",
        "Type": "ClosingAvailable"
      },
      "BankTransactionCode": {
        "Code": "string",
        "SubCode": "string"
      },
      "BookingDateTime": "1970-01-01T00:00:00Z",
      "CardInstrument": {
        "AuthorisationType": "ConsumerDevice",
        "CardSchemeName": "AmericanExpress",
        "Identification": "string",
        "Name": "string"
      },
      "ChargeAmount": {
        "Amount": "string",
        "Currency": "string"
      },
      "CreditDebitIndicator": "Credit",
      "CreditorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "CreditorAgent": {
        "Identification": "string",
        "Name": "string",
        "PostalAddress": {
          "AddressLine": [
            "string"
          ],
          "AddressType": "Business",
          "BuildingNumber": "string",
          "Country": "string",
          "CountrySubDivision": "string",
          "Department": "string",
          "PostCode": "string",
          "StreetName": "string",
          "SubDepartment": "string",
          "TownName": "string"
        },
        "SchemeName": "string"
      },
      "CurrencyExchange": {
        "ContractIdentification": "string",
        "ExchangeRate": 0,
        "InstructedAmount": {
          "Amount": "string",
          "Currency": "string"
        },
        "QuotationDate": "1970-01-01T00:00:00Z",
        "SourceCurrency": "string",
        "TargetCurrency": "string",
        "UnitCurrency": "string"
      },
      "DebtorAccount": {
        "Identification": "string",
        "Name": "string",
        "SchemeName": "string",
        "SecondaryIdentification": "string"
      },
      "DebtorAgent": {
        "Identification": "string",
        "Name": "string",
        "PostalAddress": {
          "AddressLine": [
            "string"
          ],
          "AddressType": "Business",
          "BuildingNumber": "string",
          "Country": "string",
          "CountrySubDivision": "string",
          "Department": "string",
          "PostCode": "string",
          "StreetName": "string",
          "SubDepartment": "string",
          "TownName": "string"
        },
        "SchemeName": "string"
      },
      "MerchantDetails": {
        "MerchantCategoryCode": "stri",
        "MerchantName": "string"
      },
      "ProprietaryBankTransactionCode": {
        "Code": "string",
        "Issuer": "string"
      },
      "StatementReference": [
        "string"
      ],
      "Status": "Booked",
      "SupplementaryData": {},
      "TransactionId": "string",
      "TransactionInformation": "string",
      "TransactionMutability": "Mutable",
      "TransactionReference": "string",
      "ValueDateTime": "1970-01-01T00:00:00Z"
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
        "AccountId": "string",
        "DirectDebitId": "string",
        "DirectDebitStatusCode": "Active",
        "Frequency": "string",
        "MandateIdentification": "string",
        "Name": "string",
        "PreviousPaymentAmount": {
          "Amount": "string",
          "Currency": "string"
        },
        "PreviousPaymentDateTime": "1970-01-01T00:00:00Z"
      }
    ]
  },
  "Links": {
    "First": "http://example.com",
    "Last": "http://example.com",
    "Next": "http://example.com",
    "Prev": "http://example.com",
    "Self": "http://example.com"
  },
  "Meta": {
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z",
    "TotalPages": 0
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
        "AccountId": "string",
        "Amount": {
          "Amount": "string",
          "Currency": "string"
        },
        "Description": "string",
        "EndDateTime": "1970-01-01T00:00:00Z",
        "Fee": {
          "Amount": "string",
          "Currency": "string"
        },
        "OfferId": "string",
        "OfferType": "BalanceTransfer",
        "Rate": "string",
        "StartDateTime": "1970-01-01T00:00:00Z",
        "Term": "string",
        "URL": "string",
        "Value": 0
      }
    ]
  },
  "Links": {
    "First": "http://example.com",
    "Last": "http://example.com",
    "Next": "http://example.com",
    "Prev": "http://example.com",
    "Self": "http://example.com"
  },
  "Meta": {
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z",
    "TotalPages": 0
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
      "AccountRole": "string",
      "Address": [
        {
          "AddressLine": [
            "string"
          ],
          "AddressType": "Business",
          "BuildingNumber": "string",
          "Country": "string",
          "CountrySubDivision": "string",
          "PostCode": "string",
          "StreetName": "string",
          "TownName": "string"
        }
      ],
      "BeneficialOwnership": true,
      "EmailAddress": "string",
      "FullLegalName": "string",
      "LegalStructure": "string",
      "Mobile": "string",
      "Name": "string",
      "PartyId": "string",
      "PartyNumber": "string",
      "PartyType": "Delegate",
      "Phone": "string",
      "Relationships": {
        "Account": {
          "Id": "string",
          "Related": "http://example.com"
        }
      }
    }
  },
  "Links": {
    "First": "http://example.com",
    "Last": "http://example.com",
    "Next": "http://example.com",
    "Prev": "http://example.com",
    "Self": "http://example.com"
  },
  "Meta": {
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z",
    "TotalPages": 0
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
        "AccountRole": "string",
        "Address": [
          {
            "AddressLine": [
              "string"
            ],
            "AddressType": "Business",
            "BuildingNumber": "string",
            "Country": "string",
            "CountrySubDivision": "string",
            "PostCode": "string",
            "StreetName": "string",
            "TownName": "string"
          }
        ],
        "BeneficialOwnership": true,
        "EmailAddress": "string",
        "FullLegalName": "string",
        "LegalStructure": "string",
        "Mobile": "string",
        "Name": "string",
        "PartyId": "string",
        "PartyNumber": "string",
        "PartyType": "Delegate",
        "Phone": "string",
        "Relationships": {
          "Account": {
            "Id": "string",
            "Related": "http://example.com"
          }
        }
      }
    ]
  },
  "Links": {
    "First": "http://example.com",
    "Last": "http://example.com",
    "Next": "http://example.com",
    "Prev": "http://example.com",
    "Self": "http://example.com"
  },
  "Meta": {
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z",
    "TotalPages": 0
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
        "AccountId": "string",
        "BCA": {
          "CreditInterest": {
            "TierBandSet": [
              {
                "CalculationMethod": "Compound",
                "Destination": "PayAway",
                "Notes": [
                  "string"
                ],
                "TierBand": [
                  {
                    "AER": "string",
                    "ApplicationFrequency": "Daily",
                    "BankInterestRate": "string",
                    "BankInterestRateType": "Gross",
                    "CalculationFrequency": "Daily",
                    "DepositInterestAppliedCoverage": "Banded",
                    "FixedVariableInterestRateType": "Fixed",
                    "Identification": "string",
                    "Notes": [
                      "string"
                    ],
                    "OtherApplicationFrequency": {
                      "Code": "stri",
                      "Description": "string",
                      "Name": "string"
                    },
                    "OtherBankInterestType": {
                      "Code": "stri",
                      "Description": "string",
                      "Name": "string"
                    },
                    "OtherCalculationFrequency": {
                      "Code": "stri",
                      "Description": "string",
                      "Name": "string"
                    },
                    "TierValueMaximum": "string",
                    "TierValueMinimum": "string"
                  }
                ],
                "TierBandMethod": "Banded"
              }
            ]
          },
          "OtherFeesCharges": [
            {
              "FeeChargeCap": [
                {
                  "CappingPeriod": "Day",
                  "FeeCapAmount": "string",
                  "FeeCapOccurrence": 0,
                  "FeeType": [
                    "Other"
                  ],
                  "MinMaxType": "Minimum",
                  "Notes": [
                    "string"
                  ],
                  "OtherFeeType": [
                    {
                      "Code": "stri",
                      "Description": "string",
                      "Name": "string"
                    }
                  ]
                }
              ],
              "FeeChargeDetail": [
                {
                  "ApplicationFrequency": "OnClosing",
                  "CalculationFrequency": "OnClosing",
                  "FeeAmount": "string",
                  "FeeApplicableRange": {
                    "MaximumAmount": "string",
                    "MaximumRate": "string",
                    "MinimumAmount": "string",
                    "MinimumRate": "string"
                  },
                  "FeeCategory": "Other",
                  "FeeChargeCap": [
                    {
                      "CappingPeriod": "Day",
                      "FeeCapAmount": "string",
                      "FeeCapOccurrence": 0,
                      "FeeType": [
                        "Other"
                      ],
                      "MinMaxType": "Minimum",
                      "Notes": [
                        "string"
                      ],
                      "OtherFeeType": [
                        {
                          "Code": "stri",
                          "Description": "string",
                          "Name": "string"
                        }
                      ]
                    }
                  ],
                  "FeeRate": "string",
                  "FeeRateType": "Gross",
                  "FeeType": "Other",
                  "NegotiableIndicator": true,
                  "Notes": [
                    "string"
                  ],
                  "OtherApplicationFrequency": {
                    "Code": "stri",
                    "Description": "string",
                    "Name": "string"
                  },
                  "OtherCalculationFrequency": {
                    "Code": "stri",
                    "Description": "string",
                    "Name": "string"
                  },
                  "OtherFeeCategoryType": {
                    "Code": "stri",
                    "Description": "string",
                    "Name": "string"
                  },
                  "OtherFeeRateType": {
                    "Code": "stri",
                    "Description": "string",
                    "Name": "string"
                  },
                  "OtherFeeType": {
                    "Code": "stri",
                    "Description": "string",
                    "FeeCategory": "Other",
                    "Name": "string"
                  }
                }
              ],
              "OtherTariffType": {
                "Code": "stri",
                "Description": "string",
                "Name": "string"
              },
              "TariffName": "string",
              "TariffType": "Electronic"
            }
          ],
          "Overdraft": {
            "Notes": [
              "string"
            ],
            "OverdraftTierBandSet": [
              {
                "AuthorisedIndicator": true,
                "BufferAmount": "string",
                "Identification": "string",
                "Notes": [
                  "string"
                ],
                "OverdraftFeesCharges": [
                  {
                    "OverdraftFeeChargeCap": [
                      {
                        "CappingPeriod": "Day",
                        "FeeCapAmount": "string",
                        "FeeCapOccurrence": 0,
                        "FeeType": [
                          "ArrangedOverdraft"
                        ],
                        "MinMaxType": "Minimum",
                        "Notes": [
                          "string"
                        ],
                        "OtherFeeType": [
                          {
                            "Code": "stri",
                            "Description": "string",
                            "Name": "string"
                          }
                        ]
                      }
                    ],
                    "OverdraftFeeChargeDetail": [
                      {
                        "ApplicationFrequency": "OnClosing",
                        "CalculationFrequency": "OnClosing",
                        "FeeAmount": "string",
                        "FeeRate": "string",
                        "FeeRateType": "Gross",
                        "FeeType": "ArrangedOverdraft",
                        "IncrementalBorrowingAmount": "string",
                        "NegotiableIndicator": true,
                        "Notes": [
                          "string"
                        ],
                        "OtherApplicationFrequency": {
                          "Code": "stri",
                          "Description": "string",
                          "Name": "string"
                        },
                        "OtherCalculationFrequency": {
                          "Code": "stri",
                          "Description": "string",
                          "Name": "string"
                        },
                        "OtherFeeRateType": {
                          "Code": "stri",
                          "Description": "string",
                          "Name": "string"
                        },
                        "OtherFeeType": {
                          "Code": "stri",
                          "Description": "string",
                          "Name": "string"
                        },
                        "OverdraftControlIndicator": true,
                        "OverdraftFeeChargeCap": [
                          {
                            "CappingPeriod": "Day",
                            "FeeCapAmount": "string",
                            "FeeCapOccurrence": 0,
                            "FeeType": [
                              "ArrangedOverdraft"
                            ],
                            "MinMaxType": "Minimum",
                            "Notes": [
                              "string"
                            ],
                            "OtherFeeType": [
                              {
                                "Code": "stri",
                                "Description": "string",
                                "Name": "string"
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ],
                "OverdraftTierBand": [
                  {
                    "AgreementLengthMax": 0,
                    "AgreementLengthMin": 0,
                    "AgreementPeriod": "Day",
                    "BankGuaranteedIndicator": true,
                    "EAR": "string",
                    "Identification": "string",
                    "Notes": [
                      "string"
                    ],
                    "OverdraftFeesCharges": [
                      {
                        "OverdraftFeeChargeCap": [
                          {
                            "CappingPeriod": "Day",
                            "FeeCapAmount": "string",
                            "FeeCapOccurrence": 0,
                            "FeeType": [
                              "ArrangedOverdraft"
                            ],
                            "MinMaxType": "Minimum",
                            "Notes": [
                              "string"
                            ],
                            "OtherFeeType": [
                              {
                                "Code": "stri",
                                "Description": "string",
                                "Name": "string"
                              }
                            ]
                          }
                        ],
                        "OverdraftFeeChargeDetail": [
                          {
                            "ApplicationFrequency": "OnClosing",
                            "CalculationFrequency": "OnClosing",
                            "FeeAmount": "string",
                            "FeeRate": "string",
                            "FeeRateType": "Gross",
                            "FeeType": "ArrangedOverdraft",
                            "IncrementalBorrowingAmount": "string",
                            "NegotiableIndicator": true,
                            "Notes": [
                              "string"
                            ],
                            "OtherApplicationFrequency": {
                              "Code": "stri",
                              "Description": "string",
                              "Name": "string"
                            },
                            "OtherCalculationFrequency": {
                              "Code": "stri",
                              "Description": "string",
                              "Name": "string"
                            },
                            "OtherFeeRateType": {
                              "Code": "stri",
                              "Description": "string",
                              "Name": "string"
                            },
                            "OtherFeeType": {
                              "Code": "stri",
                              "Description": "string",
                              "Name": "string"
                            },
                            "OverdraftControlIndicator": true,
                            "OverdraftFeeChargeCap": [
                              {
                                "CappingPeriod": "Day",
                                "FeeCapAmount": "string",
                                "FeeCapOccurrence": 0,
                                "FeeType": [
                                  "ArrangedOverdraft"
                                ],
                                "MinMaxType": "Minimum",
                                "Notes": [
                                  "string"
                                ],
                                "OtherFeeType": [
                                  {
                                    "Code": "stri",
                                    "Description": "string",
                                    "Name": "string"
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ],
                    "OverdraftInterestChargingCoverage": "Banded",
                    "RepresentativeAPR": "string",
                    "TierValueMax": "string",
                    "TierValueMin": "string"
                  }
                ],
                "OverdraftType": "Committed",
                "TierBandMethod": "Banded"
              }
            ]
          },
          "ProductDetails": {
            "FeeFreeLength": 0,
            "FeeFreeLengthPeriod": "Day",
            "Notes": [
              "string"
            ],
            "Segment": [
              "ClientAccount"
            ]
          }
        },
        "MarketingStateId": "string",
        "OtherProductType": {
          "CreditInterest": {
            "TierBandSet": [
              {
                "CalculationMethod": "ITCO",
                "Destination": "INOT",
                "Notes": [
                  "string"
                ],
                "OtherCalculationMethod": {
                  "Code": "string",
                  "Description": "string",
                  "Name": "string"
                },
                "OtherDestination": {
                  "Code": "string",
                  "Description": "string",
                  "Name": "string"
                },
                "TierBand": [
                  {
                    "AER": "string",
                    "ApplicationFrequency": "FQAT",
                    "BankInterestRate": "string",
                    "BankInterestRateType": "INBB",
                    "CalculationFrequency": "FQAT",
                    "DepositInterestAppliedCoverage": "INBA",
                    "FixedVariableInterestRateType": "INFI",
                    "Identification": "string",
                    "Notes": [
                      "string"
                    ],
                    "OtherApplicationFrequency": {
                      "Code": "string",
                      "Description": "string",
                      "Name": "string"
                    },
                    "OtherBankInterestType": {
                      "Code": "string",
                      "Description": "string",
                      "Name": "string"
                    },
                    "OtherCalculationFrequency": {
                      "Code": "string",
                      "Description": "string",
                      "Name": "string"
                    },
                    "TierValueMaximum": "string",
                    "TierValueMinimum": "string"
                  }
                ],
                "TierBandMethod": "INBA"
              }
            ]
          },
          "Description": "string",
          "LoanInterest": {
            "LoanInterestTierBandSet": [
              {
                "CalculationMethod": "ITCO",
                "Identification": "string",
                "LoanInterestFeesCharges": [
                  {
                    "LoanInterestFeeChargeCap": [
                      {
                        "CappingPeriod": "FEAC",
                        "FeeCapAmount": "string",
                        "FeeCapOccurrence": 0,
                        "FeeType": [
                          "FEPF"
                        ],
                        "MinMaxType": "FMMN",
                        "Notes": [
                          "string"
                        ],
                        "OtherFeeType": [
                          {
                            "Code": "string",
                            "Description": "string",
                            "Name": "string"
                          }
                        ]
                      }
                    ],
                    "LoanInterestFeeChargeDetail": [
                      {
                        "ApplicationFrequency": "FEAC",
                        "CalculationFrequency": "FEAC",
                        "FeeAmount": "string",
                        "FeeRate": "string",
                        "FeeRateType": "INBB",
                        "FeeType": "FEPF",
                        "NegotiableIndicator": true,
                        "Notes": [
                          "string"
                        ],
                        "OtherApplicationFrequency": {
                          "Code": "string",
                          "Description": "string",
                          "Name": "string"
                        },
                        "OtherCalculationFrequency": {
                          "Code": "string",
                          "Description": "string",
                          "Name": "string"
                        },
                        "OtherFeeRateType": {
                          "Code": "string",
                          "Description": "string",
                          "Name": "string"
                        },
                        "OtherFeeType": {
                          "Code": "string",
                          "Description": "string",
                          "FeeCategory": "FCOT",
                          "Name": "string"
                        }
                      }
                    ]
                  }
                ],
                "LoanInterestTierBand": [
                  {
                    "FixedVariableInterestRateType": "INFI",
                    "Identification": "string",
                    "LoanInterestFeesCharges": [
                      {
                        "LoanInterestFeeChargeCap": [
                          {
                            "CappingPeriod": "FEAC",
                            "FeeCapAmount": "string",
                            "FeeCapOccurrence": 0,
                            "FeeType": [
                              "FEPF"
                            ],
                            "MinMaxType": "FMMN",
                            "Notes": [
                              "string"
                            ],
                            "OtherFeeType": [
                              {
                                "Code": "string",
                                "Description": "string",
                                "Name": "string"
                              }
                            ]
                          }
                        ],
                        "LoanInterestFeeChargeDetail": [
                          {
                            "ApplicationFrequency": "FEAC",
                            "CalculationFrequency": "FEAC",
                            "FeeAmount": "string",
                            "FeeRate": "string",
                            "FeeRateType": "INBB",
                            "FeeType": "FEPF",
                            "NegotiableIndicator": true,
                            "Notes": [
                              "string"
                            ],
                            "OtherApplicationFrequency": {
                              "Code": "string",
                              "Description": "string",
                              "Name": "string"
                            },
                            "OtherCalculationFrequency": {
                              "Code": "string",
                              "Description": "string",
                              "Name": "string"
                            },
                            "OtherFeeRateType": {
                              "Code": "string",
                              "Description": "string",
                              "Name": "string"
                            },
                            "OtherFeeType": {
                              "Code": "string",
                              "Description": "string",
                              "FeeCategory": "FCOT",
                              "Name": "string"
                            }
                          }
                        ]
                      }
                    ],
                    "LoanProviderInterestRate": "string",
                    "LoanProviderInterestRateType": "INBB",
                    "MaxTermPeriod": "PACT",
                    "MinTermPeriod": "PACT",
                    "Notes": [
                      "string"
                    ],
                    "OtherLoanProviderInterestRateType": {
                      "Code": "string",
                      "Description": "string",
                      "Name": "string"
                    },
                    "RepAPR": "string",
                    "TierValueMaxTerm": 0,
                    "TierValueMaximum": "string",
                    "TierValueMinTerm": 0,
                    "TierValueMinimum": "string"
                  }
                ],
                "Notes": [
                  "string"
                ],
                "OtherCalculationMethod": {
                  "Code": "string",
                  "Description": "string",
                  "Name": "string"
                },
                "TierBandMethod": "INBA"
              }
            ],
            "Notes": [
              "string"
            ]
          },
          "Name": "string",
          "OtherFeesCharges": [
            {
              "FeeChargeCap": [
                {
                  "CappingPeriod": "PACT",
                  "FeeCapAmount": "string",
                  "FeeCapOccurrence": 0,
                  "FeeType": [
                    "FEPF"
                  ],
                  "MinMaxType": "FMMN",
                  "Notes": [
                    "string"
                  ],
                  "OtherFeeType": [
                    {
                      "Code": "string",
                      "Description": "string",
                      "Name": "string"
                    }
                  ]
                }
              ],
              "FeeChargeDetail": [
                {
                  "ApplicationFrequency": "FEAC",
                  "CalculationFrequency": "FEAC",
                  "FeeAmount": "string",
                  "FeeApplicableRange": {
                    "MaximumAmount": "string",
                    "MaximumRate": "string",
                    "MinimumAmount": "string",
                    "MinimumRate": "string"
                  },
                  "FeeCategory": "FCOT",
                  "FeeChargeCap": [
                    {
                      "CappingPeriod": "PACT",
                      "FeeCapAmount": "string",
                      "FeeCapOccurrence": 0,
                      "FeeType": [
                        "FEPF"
                      ],
                      "MinMaxType": "FMMN",
                      "Notes": [
                        "string"
                      ],
                      "OtherFeeType": [
                        {
                          "Code": "string",
                          "Description": "string",
                          "Name": "string"
                        }
                      ]
                    }
                  ],
                  "FeeRate": "string",
                  "FeeRateType": "INBB",
                  "FeeType": "FEPF",
                  "NegotiableIndicator": true,
                  "Notes": [
                    "string"
                  ],
                  "OtherApplicationFrequency": {
                    "Code": "string",
                    "Description": "string",
                    "Name": "string"
                  },
                  "OtherCalculationFrequency": {
                    "Code": "string",
                    "Description": "string",
                    "Name": "string"
                  },
                  "OtherFeeCategoryType": {
                    "Code": "string",
                    "Description": "string",
                    "Name": "string"
                  },
                  "OtherFeeRateType": {
                    "Code": "string",
                    "Description": "string",
                    "Name": "string"
                  },
                  "OtherFeeType": {
                    "Code": "string",
                    "Description": "string",
                    "FeeCategory": "FCOT",
                    "Name": "string"
                  }
                }
              ],
              "OtherTariffType": {
                "Code": "string",
                "Description": "string",
                "Name": "string"
              },
              "TariffName": "string",
              "TariffType": "TTEL"
            }
          ],
          "Overdraft": {
            "Notes": [
              "string"
            ],
            "OverdraftTierBandSet": [
              {
                "AuthorisedIndicator": true,
                "BufferAmount": "string",
                "Identification": "string",
                "Notes": [
                  "string"
                ],
                "OverdraftFeesCharges": [
                  {
                    "OverdraftFeeChargeCap": [
                      {
                        "CappingPeriod": "PACT",
                        "FeeCapAmount": "string",
                        "FeeCapOccurrence": 0,
                        "FeeType": [
                          "FBAO"
                        ],
                        "MinMaxType": "FMMN",
                        "Notes": [
                          "string"
                        ],
                        "OtherFeeType": [
                          {
                            "Code": "string",
                            "Description": "string",
                            "Name": "string"
                          }
                        ]
                      }
                    ],
                    "OverdraftFeeChargeDetail": [
                      {
                        "ApplicationFrequency": "FEAC",
                        "CalculationFrequency": "FEAC",
                        "FeeAmount": "string",
                        "FeeRate": "string",
                        "FeeRateType": "INBB",
                        "FeeType": "FBAO",
                        "IncrementalBorrowingAmount": "string",
                        "NegotiableIndicator": true,
                        "Notes": [
                          "string"
                        ],
                        "OtherApplicationFrequency": {
                          "Code": "string",
                          "Description": "string",
                          "Name": "string"
                        },
                        "OtherCalculationFrequency": {
                          "Code": "string",
                          "Description": "string",
                          "Name": "string"
                        },
                        "OtherFeeRateType": {
                          "Code": "string",
                          "Description": "string",
                          "Name": "string"
                        },
                        "OtherFeeType": {
                          "Code": "string",
                          "Description": "string",
                          "Name": "string"
                        },
                        "OverdraftControlIndicator": true,
                        "OverdraftFeeChargeCap": [
                          {
                            "CappingPeriod": "PACT",
                            "FeeCapAmount": "string",
                            "FeeCapOccurrence": 0,
                            "FeeType": [
                              "FBAO"
                            ],
                            "MinMaxType": "FMMN",
                            "Notes": [
                              "string"
                            ],
                            "OtherFeeType": [
                              {
                                "Code": "string",
                                "Description": "string",
                                "Name": "string"
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ],
                "OverdraftTierBand": [
                  {
                    "AgreementLengthMax": 0,
                    "AgreementLengthMin": 0,
                    "AgreementPeriod": "PACT",
                    "BankGuaranteedIndicator": true,
                    "EAR": "string",
                    "Identification": "string",
                    "Notes": [
                      "string"
                    ],
                    "OverdraftFeesCharges": [
                      {
                        "OverdraftFeeChargeCap": [
                          {
                            "CappingPeriod": "PACT",
                            "FeeCapAmount": "string",
                            "FeeCapOccurrence": 0,
                            "FeeType": [
                              "FBAO"
                            ],
                            "MinMaxType": "FMMN",
                            "Notes": [
                              "string"
                            ],
                            "OtherFeeType": [
                              {
                                "Code": "string",
                                "Description": "string",
                                "Name": "string"
                              }
                            ]
                          }
                        ],
                        "OverdraftFeeChargeDetail": [
                          {
                            "ApplicationFrequency": "FEAC",
                            "CalculationFrequency": "FEAC",
                            "FeeAmount": "string",
                            "FeeRate": "string",
                            "FeeRateType": "INBB",
                            "FeeType": "FBAO",
                            "IncrementalBorrowingAmount": "string",
                            "NegotiableIndicator": true,
                            "Notes": [
                              "string"
                            ],
                            "OtherApplicationFrequency": {
                              "Code": "string",
                              "Description": "string",
                              "Name": "string"
                            },
                            "OtherCalculationFrequency": {
                              "Code": "string",
                              "Description": "string",
                              "Name": "string"
                            },
                            "OtherFeeRateType": {
                              "Code": "string",
                              "Description": "string",
                              "Name": "string"
                            },
                            "OtherFeeType": {
                              "Code": "string",
                              "Description": "string",
                              "Name": "string"
                            },
                            "OverdraftControlIndicator": true,
                            "OverdraftFeeChargeCap": [
                              {
                                "CappingPeriod": "PACT",
                                "FeeCapAmount": "string",
                                "FeeCapOccurrence": 0,
                                "FeeType": [
                                  "FBAO"
                                ],
                                "MinMaxType": "FMMN",
                                "Notes": [
                                  "string"
                                ],
                                "OtherFeeType": [
                                  {
                                    "Code": "string",
                                    "Description": "string",
                                    "Name": "string"
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ],
                    "OverdraftInterestChargingCoverage": "INBA",
                    "TierValueMax": "string",
                    "TierValueMin": "string"
                  }
                ],
                "OverdraftType": "OVCO",
                "TierBandMethod": "INBA"
              }
            ]
          },
          "ProductDetails": {
            "FeeFreeLength": 0,
            "FeeFreeLengthPeriod": "PACT",
            "MonthlyMaximumCharge": "string",
            "Notes": [
              "string"
            ],
            "OtherSegment": {
              "Code": "string",
              "Description": "string",
              "Name": "string"
            },
            "Segment": [
              "GEAS"
            ]
          },
          "Repayment": {
            "AmountType": "RABD",
            "Notes": [
              "string"
            ],
            "OtherAmountType": {
              "Code": "string",
              "Description": "string",
              "Name": "string"
            },
            "OtherRepaymentFrequency": {
              "Code": "string",
              "Description": "string",
              "Name": "string"
            },
            "OtherRepaymentType": {
              "Code": "string",
              "Description": "string",
              "Name": "string"
            },
            "RepaymentFeeCharges": {
              "RepaymentFeeChargeCap": [
                {
                  "CappingPeriod": "PACT",
                  "FeeCapAmount": "string",
                  "FeeCapOccurrence": 0,
                  "FeeType": [
                    "FEPF"
                  ],
                  "MinMaxType": "FMMN",
                  "Notes": [
                    "string"
                  ],
                  "OtherFeeType": [
                    {
                      "Code": "string",
                      "Description": "string",
                      "Name": "string"
                    }
                  ]
                }
              ],
              "RepaymentFeeChargeDetail": [
                {
                  "ApplicationFrequency": "FEAC",
                  "CalculationFrequency": "FEAC",
                  "FeeAmount": "string",
                  "FeeRate": "string",
                  "FeeRateType": "INBB",
                  "FeeType": "FEPF",
                  "NegotiableIndicator": true,
                  "Notes": [
                    "string"
                  ],
                  "OtherApplicationFrequency": {
                    "Code": "string",
                    "Description": "string",
                    "Name": "string"
                  },
                  "OtherCalculationFrequency": {
                    "Code": "string",
                    "Description": "string",
                    "Name": "string"
                  },
                  "OtherFeeRateType": {
                    "Code": "string",
                    "Description": "string",
                    "Name": "string"
                  },
                  "OtherFeeType": {
                    "Code": "string",
                    "Description": "string",
                    "FeeCategory": "FCOT",
                    "Name": "string"
                  }
                }
              ]
            },
            "RepaymentFrequency": "SMDA",
            "RepaymentHoliday": [
              {
                "MaxHolidayLength": 0,
                "MaxHolidayPeriod": "PACT",
                "Notes": [
                  "string"
                ]
              }
            ],
            "RepaymentType": "USBA"
          },
          "SupplementaryData": {}
        },
        "PCA": {
          "CreditInterest": {
            "TierBandSet": [
              {
                "CalculationMethod": "Compound",
                "Destination": "PayAway",
                "Notes": [
                  "string"
                ],
                "TierBand": [
                  {
                    "AER": "string",
                    "ApplicationFrequency": "PerAcademicTerm",
                    "BankInterestRate": "string",
                    "BankInterestRateType": "LinkedBaseRate",
                    "CalculationFrequency": "PerAcademicTerm",
                    "DepositInterestAppliedCoverage": "Tiered",
                    "FixedVariableInterestRateType": "Fixed",
                    "Identification": "string",
                    "Notes": [
                      "string"
                    ],
                    "OtherApplicationFrequency": {
                      "Code": "stri",
                      "Description": "string",
                      "Name": "string"
                    },
                    "OtherBankInterestType": {
                      "Code": "stri",
                      "Description": "string",
                      "Name": "string"
                    },
                    "OtherCalculationFrequency": {
                      "Code": "stri",
                      "Description": "string",
                      "Name": "string"
                    },
                    "TierValueMaximum": "string",
                    "TierValueMinimum": "string"
                  }
                ],
                "TierBandMethod": "Tiered"
              }
            ]
          },
          "OtherFeesCharges": {
            "FeeChargeCap": [
              {
                "CappingPeriod": "AcademicTerm",
                "FeeCapAmount": "string",
                "FeeCapOccurrence": 0,
                "FeeType": [
                  "ServiceCAccountFee"
                ],
                "MinMaxType": "Minimum",
                "Notes": [
                  "string"
                ],
                "OtherFeeType": [
                  {
                    "Code": "stri",
                    "Description": "string",
                    "Name": "string"
                  }
                ]
              }
            ],
            "FeeChargeDetail": [
              {
                "ApplicationFrequency": "AccountClosing",
                "CalculationFrequency": "AccountClosing",
                "FeeAmount": "string",
                "FeeApplicableRange": {
                  "MaximumAmount": "string",
                  "MaximumRate": "string",
                  "MinimumAmount": "string",
                  "MinimumRate": "string"
                },
                "FeeCategory": "Other",
                "FeeChargeCap": [
                  {
                    "CappingPeriod": "AcademicTerm",
                    "FeeCapAmount": "string",
                    "FeeCapOccurrence": 0,
                    "FeeType": [
                      "ServiceCAccountFee"
                    ],
                    "MinMaxType": "Minimum",
                    "Notes": [
                      "string"
                    ],
                    "OtherFeeType": [
                      {
                        "Code": "stri",
                        "Description": "string",
                        "Name": "string"
                      }
                    ]
                  }
                ],
                "FeeRate": "string",
                "FeeRateType": "LinkedBaseRate",
                "FeeType": "ServiceCAccountFee",
                "Notes": [
                  "string"
                ],
                "OtherApplicationFrequency": {
                  "Code": "stri",
                  "Description": "string",
                  "Name": "string"
                },
                "OtherCalculationFrequency": {
                  "Code": "stri",
                  "Description": "string",
                  "Name": "string"
                },
                "OtherFeeCategoryType": {
                  "Code": "stri",
                  "Description": "string",
                  "Name": "string"
                },
                "OtherFeeRateType": {
                  "Code": "stri",
                  "Description": "string",
                  "Name": "string"
                },
                "OtherFeeType": {
                  "Code": "stri",
                  "Description": "string",
                  "FeeCategory": "Other",
                  "Name": "string"
                }
              }
            ]
          },
          "Overdraft": {
            "Notes": [
              "string"
            ],
            "OverdraftTierBandSet": [
              {
                "AuthorisedIndicator": true,
                "BufferAmount": "string",
                "Identification": "string",
                "Notes": [
                  "string"
                ],
                "OverdraftFeesCharges": [
                  {
                    "OverdraftFeeChargeCap": [
                      {
                        "CappingPeriod": "AcademicTerm",
                        "FeeCapAmount": "string",
                        "FeeCapOccurrence": 0,
                        "FeeType": [
                          "ArrangedOverdraft"
                        ],
                        "MinMaxType": "Minimum",
                        "Notes": [
                          "string"
                        ],
                        "OtherFeeType": [
                          {
                            "Code": "stri",
                            "Description": "string",
                            "Name": "string"
                          }
                        ],
                        "OverdraftControlIndicator": true
                      }
                    ],
                    "OverdraftFeeChargeDetail": [
                      {
                        "ApplicationFrequency": "AccountClosing",
                        "CalculationFrequency": "AccountClosing",
                        "FeeAmount": "string",
                        "FeeRate": "string",
                        "FeeRateType": "LinkedBaseRate",
                        "FeeType": "ArrangedOverdraft",
                        "IncrementalBorrowingAmount": "string",
                        "Notes": [
                          "string"
                        ],
                        "OtherApplicationFrequency": {
                          "Code": "stri",
                          "Description": "string",
                          "Name": "string"
                        },
                        "OtherCalculationFrequency": {
                          "Code": "stri",
                          "Description": "string",
                          "Name": "string"
                        },
                        "OtherFeeRateType": {
                          "Code": "stri",
                          "Description": "string",
                          "Name": "string"
                        },
                        "OtherFeeType": {
                          "Code": "stri",
                          "Description": "string",
                          "Name": "string"
                        },
                        "OverdraftControlIndicator": true,
                        "OverdraftFeeChargeCap": {
                          "CappingPeriod": "AcademicTerm",
                          "FeeCapAmount": "string",
                          "FeeCapOccurrence": 0,
                          "FeeType": [
                            "ArrangedOverdraft"
                          ],
                          "MinMaxType": "Minimum",
                          "Notes": [
                            "string"
                          ],
                          "OtherFeeType": [
                            {
                              "Code": "stri",
                              "Description": "string",
                              "Name": "string"
                            }
                          ],
                          "OverdraftControlIndicator": true
                        }
                      }
                    ]
                  }
                ],
                "OverdraftTierBand": [
                  {
                    "BankGuaranteedIndicator": true,
                    "EAR": "string",
                    "Identification": "string",
                    "Notes": [
                      "string"
                    ],
                    "OverdraftFeesCharges": [
                      {
                        "OverdraftFeeChargeCap": [
                          {
                            "CappingPeriod": "AcademicTerm",
                            "FeeCapAmount": "string",
                            "FeeCapOccurrence": 0,
                            "FeeType": [
                              "ArrangedOverdraft"
                            ],
                            "MinMaxType": "Minimum",
                            "Notes": [
                              "string"
                            ],
                            "OtherFeeType": [
                              {
                                "Code": "stri",
                                "Description": "string",
                                "Name": "string"
                              }
                            ],
                            "OverdraftControlIndicator": true
                          }
                        ],
                        "OverdraftFeeChargeDetail": [
                          {
                            "ApplicationFrequency": "AccountClosing",
                            "CalculationFrequency": "AccountClosing",
                            "FeeAmount": "string",
                            "FeeRate": "string",
                            "FeeRateType": "LinkedBaseRate",
                            "FeeType": "ArrangedOverdraft",
                            "IncrementalBorrowingAmount": "string",
                            "Notes": [
                              "string"
                            ],
                            "OtherApplicationFrequency": {
                              "Code": "stri",
                              "Description": "string",
                              "Name": "string"
                            },
                            "OtherCalculationFrequency": {
                              "Code": "stri",
                              "Description": "string",
                              "Name": "string"
                            },
                            "OtherFeeRateType": {
                              "Code": "stri",
                              "Description": "string",
                              "Name": "string"
                            },
                            "OtherFeeType": {
                              "Code": "stri",
                              "Description": "string",
                              "Name": "string"
                            },
                            "OverdraftControlIndicator": true,
                            "OverdraftFeeChargeCap": {
                              "CappingPeriod": "AcademicTerm",
                              "FeeCapAmount": "string",
                              "FeeCapOccurrence": 0,
                              "FeeType": [
                                "ArrangedOverdraft"
                              ],
                              "MinMaxType": "Minimum",
                              "Notes": [
                                "string"
                              ],
                              "OtherFeeType": [
                                {
                                  "Code": "stri",
                                  "Description": "string",
                                  "Name": "string"
                                }
                              ],
                              "OverdraftControlIndicator": true
                            }
                          }
                        ]
                      }
                    ],
                    "OverdraftInterestChargingCoverage": "Tiered",
                    "RepresentativeAPR": "string",
                    "TierValueMax": "string",
                    "TierValueMin": "string"
                  }
                ],
                "OverdraftType": "Committed",
                "TierBandMethod": "Tiered"
              }
            ]
          },
          "ProductDetails": {
            "MonthlyMaximumCharge": "string",
            "Notes": [
              "string"
            ],
            "Segment": [
              "Basic"
            ]
          }
        },
        "ProductId": "string",
        "ProductName": "string",
        "ProductType": "BusinessCurrentAccount",
        "SecondaryProductId": "string"
      }
    ]
  },
  "Links": {
    "First": "http://example.com",
    "Last": "http://example.com",
    "Next": "http://example.com",
    "Prev": "http://example.com",
    "Self": "http://example.com"
  },
  "Meta": {
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z",
    "TotalPages": 0
  }
}
```

Product details of Other Product which is not avaiable in the standard list

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
        "AccountId": "string",
        "CreditorAccount": {
          "Identification": "string",
          "Name": "string",
          "SchemeName": "string",
          "SecondaryIdentification": "string"
        },
        "CreditorAgent": {
          "Identification": "string",
          "SchemeName": "string"
        },
        "DebtorReference": "string",
        "InstructedAmount": {
          "Amount": "string",
          "Currency": "string"
        },
        "Reference": "string",
        "ScheduledPaymentDateTime": "1970-01-01T00:00:00Z",
        "ScheduledPaymentId": "string",
        "ScheduledType": "Arrival"
      }
    ]
  },
  "Links": {
    "First": "http://example.com",
    "Last": "http://example.com",
    "Next": "http://example.com",
    "Prev": "http://example.com",
    "Self": "http://example.com"
  },
  "Meta": {
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z",
    "TotalPages": 0
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
        "AccountId": "string",
        "CreditorAccount": {
          "Identification": "string",
          "Name": "string",
          "SchemeName": "string",
          "SecondaryIdentification": "string"
        },
        "CreditorAgent": {
          "Identification": "string",
          "SchemeName": "string"
        },
        "FinalPaymentAmount": {
          "Amount": "string",
          "Currency": "string"
        },
        "FinalPaymentDateTime": "1970-01-01T00:00:00Z",
        "FirstPaymentAmount": {
          "Amount": "string",
          "Currency": "string"
        },
        "FirstPaymentDateTime": "1970-01-01T00:00:00Z",
        "Frequency": "string",
        "LastPaymentAmount": {
          "Amount": "string",
          "Currency": "string"
        },
        "LastPaymentDateTime": "1970-01-01T00:00:00Z",
        "NextPaymentAmount": {
          "Amount": "string",
          "Currency": "string"
        },
        "NextPaymentDateTime": "1970-01-01T00:00:00Z",
        "NumberOfPayments": "string",
        "Reference": "string",
        "StandingOrderId": "string",
        "StandingOrderStatusCode": "Active",
        "SupplementaryData": {}
      }
    ]
  },
  "Links": {
    "First": "http://example.com",
    "Last": "http://example.com",
    "Next": "http://example.com",
    "Prev": "http://example.com",
    "Self": "http://example.com"
  },
  "Meta": {
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z",
    "TotalPages": 0
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
        "AccountId": "string",
        "CreationDateTime": "1970-01-01T00:00:00Z",
        "EndDateTime": "1970-01-01T00:00:00Z",
        "StartDateTime": "1970-01-01T00:00:00Z",
        "StatementAmount": [
          {
            "Amount": {
              "Amount": "string",
              "Currency": "string"
            },
            "CreditDebitIndicator": "Credit",
            "Type": "string"
          }
        ],
        "StatementBenefit": [
          {
            "Amount": {
              "Amount": "string",
              "Currency": "string"
            },
            "Type": "string"
          }
        ],
        "StatementDateTime": [
          {
            "DateTime": "1970-01-01T00:00:00Z",
            "Type": "string"
          }
        ],
        "StatementDescription": [
          "string"
        ],
        "StatementFee": [
          {
            "Amount": {
              "Amount": "string",
              "Currency": "string"
            },
            "CreditDebitIndicator": "Credit",
            "Description": "string",
            "Frequency": "string",
            "Rate": 0,
            "RateType": "string",
            "Type": "string"
          }
        ],
        "StatementId": "string",
        "StatementInterest": [
          {
            "Amount": {
              "Amount": "string",
              "Currency": "string"
            },
            "CreditDebitIndicator": "Credit",
            "Description": "string",
            "Frequency": "string",
            "Rate": 0,
            "RateType": "string",
            "Type": "string"
          }
        ],
        "StatementRate": [
          {
            "Rate": "string",
            "Type": "string"
          }
        ],
        "StatementReference": "string",
        "StatementValue": [
          {
            "Type": "string",
            "Value": "string"
          }
        ],
        "Type": "AccountClosure"
      }
    ]
  },
  "Links": {
    "First": "http://example.com",
    "Last": "http://example.com",
    "Next": "http://example.com",
    "Prev": "http://example.com",
    "Self": "http://example.com"
  },
  "Meta": {
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z",
    "TotalPages": 0
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
        "AccountId": "string",
        "AddressLine": "string",
        "Amount": {
          "Amount": "string",
          "Currency": "string"
        },
        "Balance": {
          "Amount": {
            "Amount": "string",
            "Currency": "string"
          },
          "CreditDebitIndicator": "Credit",
          "Type": "ClosingAvailable"
        },
        "BankTransactionCode": {
          "Code": "string",
          "SubCode": "string"
        },
        "BookingDateTime": "1970-01-01T00:00:00Z",
        "CardInstrument": {
          "AuthorisationType": "ConsumerDevice",
          "CardSchemeName": "AmericanExpress",
          "Identification": "string",
          "Name": "string"
        },
        "ChargeAmount": {
          "Amount": "string",
          "Currency": "string"
        },
        "CreditDebitIndicator": "Credit",
        "CreditorAccount": {
          "Identification": "string",
          "Name": "string",
          "SchemeName": "string",
          "SecondaryIdentification": "string"
        },
        "CreditorAgent": {
          "Identification": "string",
          "Name": "string",
          "PostalAddress": {
            "AddressLine": [
              "string"
            ],
            "AddressType": "Business",
            "BuildingNumber": "string",
            "Country": "string",
            "CountrySubDivision": "string",
            "Department": "string",
            "PostCode": "string",
            "StreetName": "string",
            "SubDepartment": "string",
            "TownName": "string"
          },
          "SchemeName": "string"
        },
        "CurrencyExchange": {
          "ContractIdentification": "string",
          "ExchangeRate": 0,
          "InstructedAmount": {
            "Amount": "string",
            "Currency": "string"
          },
          "QuotationDate": "1970-01-01T00:00:00Z",
          "SourceCurrency": "string",
          "TargetCurrency": "string",
          "UnitCurrency": "string"
        },
        "DebtorAccount": {
          "Identification": "string",
          "Name": "string",
          "SchemeName": "string",
          "SecondaryIdentification": "string"
        },
        "DebtorAgent": {
          "Identification": "string",
          "Name": "string",
          "PostalAddress": {
            "AddressLine": [
              "string"
            ],
            "AddressType": "Business",
            "BuildingNumber": "string",
            "Country": "string",
            "CountrySubDivision": "string",
            "Department": "string",
            "PostCode": "string",
            "StreetName": "string",
            "SubDepartment": "string",
            "TownName": "string"
          },
          "SchemeName": "string"
        },
        "MerchantDetails": {
          "MerchantCategoryCode": "stri",
          "MerchantName": "string"
        },
        "ProprietaryBankTransactionCode": {
          "Code": "string",
          "Issuer": "string"
        },
        "StatementReference": [
          "string"
        ],
        "Status": "Booked",
        "SupplementaryData": {},
        "TransactionId": "string",
        "TransactionInformation": "string",
        "TransactionMutability": "Mutable",
        "TransactionReference": "string",
        "ValueDateTime": "1970-01-01T00:00:00Z"
      }
    ]
  },
  "Links": {
    "First": "http://example.com",
    "Last": "http://example.com",
    "Next": "http://example.com",
    "Prev": "http://example.com",
    "Self": "http://example.com"
  },
  "Meta": {
    "FirstAvailableDateTime": "1970-01-01T00:00:00Z",
    "LastAvailableDateTime": "1970-01-01T00:00:00Z",
    "TotalPages": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Data|[OBReadDataTransaction6](#schemaobreaddatatransaction6)|true|none|none|
|Links|[Links](#schemalinks)|false|none|Links relevant to the payload|
|Meta|[Meta](#schemameta)|false|none|Meta Data relevant to the payload|

<h2 id="tocS_OBRisk2">OBRisk2</h2>
<!-- backwards compatibility -->
<a id="schemaobrisk2"></a>
<a id="schema_OBRisk2"></a>
<a id="tocSobrisk2"></a>
<a id="tocsobrisk2"></a>

```json
{}
```

The Risk section is sent by the initiating party to the ASPSP. It is used to specify additional details for risk scoring for Account Info.

<h2 id="tocS_OBScheduledPayment3">OBScheduledPayment3</h2>
<!-- backwards compatibility -->
<a id="schemaobscheduledpayment3"></a>
<a id="schema_OBScheduledPayment3"></a>
<a id="tocSobscheduledpayment3"></a>
<a id="tocsobscheduledpayment3"></a>

```json
{
  "AccountId": "string",
  "CreditorAccount": {
    "Identification": "string",
    "Name": "string",
    "SchemeName": "string",
    "SecondaryIdentification": "string"
  },
  "CreditorAgent": {
    "Identification": "string",
    "SchemeName": "string"
  },
  "DebtorReference": "string",
  "InstructedAmount": {
    "Amount": "string",
    "Currency": "string"
  },
  "Reference": "string",
  "ScheduledPaymentDateTime": "1970-01-01T00:00:00Z",
  "ScheduledPaymentId": "string",
  "ScheduledType": "Arrival"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|[AccountId](#schemaaccountid)|true|none|A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.|
|CreditorAccount|[OBCashAccount5_1](#schemaobcashaccount5_1)|false|none|Provides the details to identify the beneficiary account.|
|CreditorAgent|[OBBranchAndFinancialInstitutionIdentification5_1](#schemaobbranchandfinancialinstitutionidentification5_1)|false|none|Party that manages the account on behalf of the account owner, that is manages the registration and booking of entries on the account, calculates balances on the account and provides information about the account.<br>This is the servicer of the beneficiary account.|
|DebtorReference|[DebtorReference](#schemadebtorreference)|false|none|A reference value provided by the PSU to the PISP while setting up the scheduled payment.|
|InstructedAmount|[OBActiveOrHistoricCurrencyAndAmount_1](#schemaobactiveorhistoriccurrencyandamount_1)|true|none|Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.<br>Usage: This amount has to be transported unchanged through the transaction chain.|
|Reference|[Reference](#schemareference)|false|none|Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.<br>Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.<br>If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.|
|ScheduledPaymentDateTime|[ScheduledPaymentDateTime](#schemascheduledpaymentdatetime)|true|none|The date on which the scheduled payment will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|ScheduledPaymentId|[ScheduledPaymentId](#schemascheduledpaymentid)|false|none|A unique and immutable identifier used to identify the scheduled payment resource. This identifier has no meaning to the account owner.|
|ScheduledType|[OBExternalScheduleType1Code](#schemaobexternalscheduletype1code)|true|none|Specifies the scheduled payment date type requested|

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
  "AccountId": "string",
  "DebtorReference": "string",
  "InstructedAmount": {
    "Amount": "string",
    "Currency": "string"
  },
  "Reference": "string",
  "ScheduledPaymentDateTime": "1970-01-01T00:00:00Z",
  "ScheduledPaymentId": "string",
  "ScheduledType": "Arrival"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|[AccountId](#schemaaccountid)|true|none|A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.|
|DebtorReference|[DebtorReference](#schemadebtorreference)|false|none|A reference value provided by the PSU to the PISP while setting up the scheduled payment.|
|InstructedAmount|[OBActiveOrHistoricCurrencyAndAmount_1](#schemaobactiveorhistoriccurrencyandamount_1)|true|none|Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.<br>Usage: This amount has to be transported unchanged through the transaction chain.|
|Reference|[Reference](#schemareference)|false|none|Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.<br>Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.<br>If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.|
|ScheduledPaymentDateTime|[ScheduledPaymentDateTime](#schemascheduledpaymentdatetime)|true|none|The date on which the scheduled payment will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|ScheduledPaymentId|[ScheduledPaymentId](#schemascheduledpaymentid)|false|none|A unique and immutable identifier used to identify the scheduled payment resource. This identifier has no meaning to the account owner.|
|ScheduledType|[OBExternalScheduleType1Code](#schemaobexternalscheduletype1code)|true|none|Specifies the scheduled payment date type requested|

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
  "AccountId": "string",
  "CreditorAccount": {
    "Identification": "string",
    "Name": "string",
    "SchemeName": "string",
    "SecondaryIdentification": "string"
  },
  "CreditorAgent": {
    "Identification": "string",
    "SchemeName": "string"
  },
  "DebtorReference": "string",
  "InstructedAmount": {
    "Amount": "string",
    "Currency": "string"
  },
  "Reference": "string",
  "ScheduledPaymentDateTime": "1970-01-01T00:00:00Z",
  "ScheduledPaymentId": "string",
  "ScheduledType": "Arrival"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|[AccountId](#schemaaccountid)|true|none|A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.|
|CreditorAccount|[OBCashAccount5_1](#schemaobcashaccount5_1)|true|none|Provides the details to identify the beneficiary account.|
|CreditorAgent|[OBBranchAndFinancialInstitutionIdentification5_1](#schemaobbranchandfinancialinstitutionidentification5_1)|false|none|Party that manages the account on behalf of the account owner, that is manages the registration and booking of entries on the account, calculates balances on the account and provides information about the account.<br>This is the servicer of the beneficiary account.|
|DebtorReference|[DebtorReference](#schemadebtorreference)|false|none|A reference value provided by the PSU to the PISP while setting up the scheduled payment.|
|InstructedAmount|[OBActiveOrHistoricCurrencyAndAmount_1](#schemaobactiveorhistoriccurrencyandamount_1)|true|none|Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.<br>Usage: This amount has to be transported unchanged through the transaction chain.|
|Reference|[Reference](#schemareference)|false|none|Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.<br>Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.<br>If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.|
|ScheduledPaymentDateTime|[ScheduledPaymentDateTime](#schemascheduledpaymentdatetime)|true|none|The date on which the scheduled payment will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|ScheduledPaymentId|[ScheduledPaymentId](#schemascheduledpaymentid)|false|none|A unique and immutable identifier used to identify the scheduled payment resource. This identifier has no meaning to the account owner.|
|ScheduledType|[OBExternalScheduleType1Code](#schemaobexternalscheduletype1code)|true|none|Specifies the scheduled payment date type requested|

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
  "AccountId": "string",
  "CreditorAccount": {
    "Identification": "string",
    "Name": "string",
    "SchemeName": "string",
    "SecondaryIdentification": "string"
  },
  "CreditorAgent": {
    "Identification": "string",
    "SchemeName": "string"
  },
  "FinalPaymentAmount": {
    "Amount": "string",
    "Currency": "string"
  },
  "FinalPaymentDateTime": "1970-01-01T00:00:00Z",
  "FirstPaymentAmount": {
    "Amount": "string",
    "Currency": "string"
  },
  "FirstPaymentDateTime": "1970-01-01T00:00:00Z",
  "Frequency": "string",
  "LastPaymentAmount": {
    "Amount": "string",
    "Currency": "string"
  },
  "LastPaymentDateTime": "1970-01-01T00:00:00Z",
  "NextPaymentAmount": {
    "Amount": "string",
    "Currency": "string"
  },
  "NextPaymentDateTime": "1970-01-01T00:00:00Z",
  "NumberOfPayments": "string",
  "Reference": "string",
  "StandingOrderId": "string",
  "StandingOrderStatusCode": "Active",
  "SupplementaryData": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|[AccountId](#schemaaccountid)|true|none|A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.|
|CreditorAccount|[OBCashAccount5_1](#schemaobcashaccount5_1)|false|none|Provides the details to identify the beneficiary account.|
|CreditorAgent|[OBBranchAndFinancialInstitutionIdentification5_1](#schemaobbranchandfinancialinstitutionidentification5_1)|false|none|Party that manages the account on behalf of the account owner, that is manages the registration and booking of entries on the account, calculates balances on the account and provides information about the account.<br>This is the servicer of the beneficiary account.|
|FinalPaymentAmount|[OBActiveOrHistoricCurrencyAndAmount_4](#schemaobactiveorhistoriccurrencyandamount_4)|false|none|The amount of the final Standing Order|
|FinalPaymentDateTime|[FinalPaymentDateTime](#schemafinalpaymentdatetime)|false|none|The date on which the final payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|FirstPaymentAmount|[OBActiveOrHistoricCurrencyAndAmount_2](#schemaobactiveorhistoriccurrencyandamount_2)|false|none|The amount of the first Standing Order|
|FirstPaymentDateTime|[FirstPaymentDateTime](#schemafirstpaymentdatetime)|false|none|The date on which the first payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|Frequency|[Frequency_1](#schemafrequency_1)|true|none|Individual Definitions:<br>NotKnown - Not Known<br>EvryDay - Every day<br>EvryWorkgDay - Every working day<br>IntrvlDay - An interval specified in number of calendar days (02 to 31)<br>IntrvlWkDay - An interval specified in weeks (01 to 09), and the day within the week (01 to 07)<br>WkInMnthDay - A monthly interval, specifying the week of the month (01 to 05) and day within the week (01 to 07)<br>IntrvlMnthDay - An interval specified in months (between 01 to 06, 12, 24), specifying the day within the month (-05 to -01, 01 to 31)<br>QtrDay - Quarterly (either ENGLISH, SCOTTISH, or RECEIVED)<br>ENGLISH = Paid on the 25th March, 24th June, 29th September and 25th December.<br>SCOTTISH = Paid on the 2nd February, 15th May, 1st August and 11th November.<br>RECEIVED = Paid on the 20th March, 19th June, 24th September and 20th December.<br>Individual Patterns:<br>NotKnown (ScheduleCode)<br>EvryDay (ScheduleCode)<br>EvryWorkgDay (ScheduleCode)<br>IntrvlDay:NoOfDay (ScheduleCode + NoOfDay)<br>IntrvlWkDay:IntervalInWeeks:DayInWeek (ScheduleCode + IntervalInWeeks + DayInWeek)<br>WkInMnthDay:WeekInMonth:DayInWeek (ScheduleCode + WeekInMonth + DayInWeek)<br>IntrvlMnthDay:IntervalInMonths:DayInMonth (ScheduleCode + IntervalInMonths + DayInMonth)<br>QtrDay: + either (ENGLISH, SCOTTISH or RECEIVED) ScheduleCode + QuarterDay<br>The regular expression for this element combines five smaller versions for each permitted pattern. To aid legibility - the components are presented individually here:<br>NotKnown<br>EvryDay<br>EvryWorkgDay<br>IntrvlDay:((0[2-9])\|([1-2][0-9])\|3[0-1])<br>IntrvlWkDay:0[1-9]:0[1-7]<br>WkInMnthDay:0[1-5]:0[1-7]<br>IntrvlMnthDay:(0[1-6]\|12\|24):(-0[1-5]\|0[1-9]\|[12][0-9]\|3[01])<br>QtrDay:(ENGLISH\|SCOTTISH\|RECEIVED)<br>Full Regular Expression:<br>^(NotKnown)$\|^(EvryDay)$\|^(EvryWorkgDay)$\|^(IntrvlDay:((0[2-9])\|([1-2][0-9])\|3[0-1]))$\|^(IntrvlWkDay:0[1-9]:0[1-7])$\|^(WkInMnthDay:0[1-5]:0[1-7])$\|^(IntrvlMnthDay:(0[1-6]\|12\|24):(-0[1-5]\|0[1-9]\|[12][0-9]\|3[01]))$\|^(QtrDay:(ENGLISH\|SCOTTISH\|RECEIVED))$|
|LastPaymentAmount|[OBActiveOrHistoricCurrencyAndAmount_11](#schemaobactiveorhistoriccurrencyandamount_11)|false|none|The amount of the last (most recent) Standing Order instruction.|
|LastPaymentDateTime|[LastPaymentDateTime](#schemalastpaymentdatetime)|false|none|The date on which the last (most recent) payment for a Standing Order schedule was made.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|NextPaymentAmount|[OBActiveOrHistoricCurrencyAndAmount_3](#schemaobactiveorhistoriccurrencyandamount_3)|false|none|The amount of the next Standing Order.|
|NextPaymentDateTime|[NextPaymentDateTime](#schemanextpaymentdatetime)|false|none|The date on which the next payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|NumberOfPayments|[NumberOfPayments](#schemanumberofpayments)|false|none|Number of the payments that will be made in completing this frequency sequence including any executed since the sequence start date.|
|Reference|[Reference](#schemareference)|false|none|Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.<br>Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.<br>If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.|
|StandingOrderId|[StandingOrderId](#schemastandingorderid)|false|none|A unique and immutable identifier used to identify the standing order resource. This identifier has no meaning to the account owner.|
|StandingOrderStatusCode|[OBExternalStandingOrderStatus1Code](#schemaobexternalstandingorderstatus1code)|false|none|Specifies the status of the standing order in code form.|
|SupplementaryData|[OBSupplementaryData1](#schemaobsupplementarydata1)|false|none|Additional information that can not be captured in the structured fields and/or any other specific block.|

#### Enumerated Values

|Property|Value|
|---|---|
|StandingOrderStatusCode|Active|
|StandingOrderStatusCode|Inactive|

<h2 id="tocS_OBStandingOrder6Basic">OBStandingOrder6Basic</h2>
<!-- backwards compatibility -->
<a id="schemaobstandingorder6basic"></a>
<a id="schema_OBStandingOrder6Basic"></a>
<a id="tocSobstandingorder6basic"></a>
<a id="tocsobstandingorder6basic"></a>

```json
{
  "AccountId": "string",
  "FinalPaymentAmount": {
    "Amount": "string",
    "Currency": "string"
  },
  "FinalPaymentDateTime": "1970-01-01T00:00:00Z",
  "FirstPaymentAmount": {
    "Amount": "string",
    "Currency": "string"
  },
  "FirstPaymentDateTime": "1970-01-01T00:00:00Z",
  "Frequency": "string",
  "LastPaymentAmount": {
    "Amount": "string",
    "Currency": "string"
  },
  "LastPaymentDateTime": "1970-01-01T00:00:00Z",
  "NextPaymentAmount": {
    "Amount": "string",
    "Currency": "string"
  },
  "NextPaymentDateTime": "1970-01-01T00:00:00Z",
  "NumberOfPayments": "string",
  "Reference": "string",
  "StandingOrderId": "string",
  "StandingOrderStatusCode": "Active",
  "SupplementaryData": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|[AccountId](#schemaaccountid)|true|none|A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.|
|FinalPaymentAmount|[OBActiveOrHistoricCurrencyAndAmount_4](#schemaobactiveorhistoriccurrencyandamount_4)|false|none|The amount of the final Standing Order|
|FinalPaymentDateTime|[FinalPaymentDateTime](#schemafinalpaymentdatetime)|false|none|The date on which the final payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|FirstPaymentAmount|[OBActiveOrHistoricCurrencyAndAmount_2](#schemaobactiveorhistoriccurrencyandamount_2)|false|none|The amount of the first Standing Order|
|FirstPaymentDateTime|[FirstPaymentDateTime](#schemafirstpaymentdatetime)|false|none|The date on which the first payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|Frequency|[Frequency_1](#schemafrequency_1)|true|none|Individual Definitions:<br>NotKnown - Not Known<br>EvryDay - Every day<br>EvryWorkgDay - Every working day<br>IntrvlDay - An interval specified in number of calendar days (02 to 31)<br>IntrvlWkDay - An interval specified in weeks (01 to 09), and the day within the week (01 to 07)<br>WkInMnthDay - A monthly interval, specifying the week of the month (01 to 05) and day within the week (01 to 07)<br>IntrvlMnthDay - An interval specified in months (between 01 to 06, 12, 24), specifying the day within the month (-05 to -01, 01 to 31)<br>QtrDay - Quarterly (either ENGLISH, SCOTTISH, or RECEIVED)<br>ENGLISH = Paid on the 25th March, 24th June, 29th September and 25th December.<br>SCOTTISH = Paid on the 2nd February, 15th May, 1st August and 11th November.<br>RECEIVED = Paid on the 20th March, 19th June, 24th September and 20th December.<br>Individual Patterns:<br>NotKnown (ScheduleCode)<br>EvryDay (ScheduleCode)<br>EvryWorkgDay (ScheduleCode)<br>IntrvlDay:NoOfDay (ScheduleCode + NoOfDay)<br>IntrvlWkDay:IntervalInWeeks:DayInWeek (ScheduleCode + IntervalInWeeks + DayInWeek)<br>WkInMnthDay:WeekInMonth:DayInWeek (ScheduleCode + WeekInMonth + DayInWeek)<br>IntrvlMnthDay:IntervalInMonths:DayInMonth (ScheduleCode + IntervalInMonths + DayInMonth)<br>QtrDay: + either (ENGLISH, SCOTTISH or RECEIVED) ScheduleCode + QuarterDay<br>The regular expression for this element combines five smaller versions for each permitted pattern. To aid legibility - the components are presented individually here:<br>NotKnown<br>EvryDay<br>EvryWorkgDay<br>IntrvlDay:((0[2-9])\|([1-2][0-9])\|3[0-1])<br>IntrvlWkDay:0[1-9]:0[1-7]<br>WkInMnthDay:0[1-5]:0[1-7]<br>IntrvlMnthDay:(0[1-6]\|12\|24):(-0[1-5]\|0[1-9]\|[12][0-9]\|3[01])<br>QtrDay:(ENGLISH\|SCOTTISH\|RECEIVED)<br>Full Regular Expression:<br>^(NotKnown)$\|^(EvryDay)$\|^(EvryWorkgDay)$\|^(IntrvlDay:((0[2-9])\|([1-2][0-9])\|3[0-1]))$\|^(IntrvlWkDay:0[1-9]:0[1-7])$\|^(WkInMnthDay:0[1-5]:0[1-7])$\|^(IntrvlMnthDay:(0[1-6]\|12\|24):(-0[1-5]\|0[1-9]\|[12][0-9]\|3[01]))$\|^(QtrDay:(ENGLISH\|SCOTTISH\|RECEIVED))$|
|LastPaymentAmount|[OBActiveOrHistoricCurrencyAndAmount_11](#schemaobactiveorhistoriccurrencyandamount_11)|false|none|The amount of the last (most recent) Standing Order instruction.|
|LastPaymentDateTime|[LastPaymentDateTime](#schemalastpaymentdatetime)|false|none|The date on which the last (most recent) payment for a Standing Order schedule was made.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|NextPaymentAmount|[OBActiveOrHistoricCurrencyAndAmount_3](#schemaobactiveorhistoriccurrencyandamount_3)|false|none|The amount of the next Standing Order.|
|NextPaymentDateTime|[NextPaymentDateTime](#schemanextpaymentdatetime)|false|none|The date on which the next payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|NumberOfPayments|[NumberOfPayments](#schemanumberofpayments)|false|none|Number of the payments that will be made in completing this frequency sequence including any executed since the sequence start date.|
|Reference|[Reference](#schemareference)|false|none|Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.<br>Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.<br>If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.|
|StandingOrderId|[StandingOrderId](#schemastandingorderid)|false|none|A unique and immutable identifier used to identify the standing order resource. This identifier has no meaning to the account owner.|
|StandingOrderStatusCode|[OBExternalStandingOrderStatus1Code](#schemaobexternalstandingorderstatus1code)|false|none|Specifies the status of the standing order in code form.|
|SupplementaryData|[OBSupplementaryData1](#schemaobsupplementarydata1)|false|none|Additional information that can not be captured in the structured fields and/or any other specific block.|

#### Enumerated Values

|Property|Value|
|---|---|
|StandingOrderStatusCode|Active|
|StandingOrderStatusCode|Inactive|

<h2 id="tocS_OBStandingOrder6Detail">OBStandingOrder6Detail</h2>
<!-- backwards compatibility -->
<a id="schemaobstandingorder6detail"></a>
<a id="schema_OBStandingOrder6Detail"></a>
<a id="tocSobstandingorder6detail"></a>
<a id="tocsobstandingorder6detail"></a>

```json
{
  "AccountId": "string",
  "CreditorAccount": {
    "Identification": "string",
    "Name": "string",
    "SchemeName": "string",
    "SecondaryIdentification": "string"
  },
  "CreditorAgent": {
    "Identification": "string",
    "SchemeName": "string"
  },
  "FinalPaymentAmount": {
    "Amount": "string",
    "Currency": "string"
  },
  "FinalPaymentDateTime": "1970-01-01T00:00:00Z",
  "FirstPaymentAmount": {
    "Amount": "string",
    "Currency": "string"
  },
  "FirstPaymentDateTime": "1970-01-01T00:00:00Z",
  "Frequency": "string",
  "LastPaymentAmount": {
    "Amount": "string",
    "Currency": "string"
  },
  "LastPaymentDateTime": "1970-01-01T00:00:00Z",
  "NextPaymentAmount": {
    "Amount": "string",
    "Currency": "string"
  },
  "NextPaymentDateTime": "1970-01-01T00:00:00Z",
  "NumberOfPayments": "string",
  "Reference": "string",
  "StandingOrderId": "string",
  "StandingOrderStatusCode": "Active",
  "SupplementaryData": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|[AccountId](#schemaaccountid)|true|none|A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.|
|CreditorAccount|[OBCashAccount5_1](#schemaobcashaccount5_1)|true|none|Provides the details to identify the beneficiary account.|
|CreditorAgent|[OBBranchAndFinancialInstitutionIdentification5_1](#schemaobbranchandfinancialinstitutionidentification5_1)|false|none|Party that manages the account on behalf of the account owner, that is manages the registration and booking of entries on the account, calculates balances on the account and provides information about the account.<br>This is the servicer of the beneficiary account.|
|FinalPaymentAmount|[OBActiveOrHistoricCurrencyAndAmount_4](#schemaobactiveorhistoriccurrencyandamount_4)|false|none|The amount of the final Standing Order|
|FinalPaymentDateTime|[FinalPaymentDateTime](#schemafinalpaymentdatetime)|false|none|The date on which the final payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|FirstPaymentAmount|[OBActiveOrHistoricCurrencyAndAmount_2](#schemaobactiveorhistoriccurrencyandamount_2)|false|none|The amount of the first Standing Order|
|FirstPaymentDateTime|[FirstPaymentDateTime](#schemafirstpaymentdatetime)|false|none|The date on which the first payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|Frequency|[Frequency_1](#schemafrequency_1)|true|none|Individual Definitions:<br>NotKnown - Not Known<br>EvryDay - Every day<br>EvryWorkgDay - Every working day<br>IntrvlDay - An interval specified in number of calendar days (02 to 31)<br>IntrvlWkDay - An interval specified in weeks (01 to 09), and the day within the week (01 to 07)<br>WkInMnthDay - A monthly interval, specifying the week of the month (01 to 05) and day within the week (01 to 07)<br>IntrvlMnthDay - An interval specified in months (between 01 to 06, 12, 24), specifying the day within the month (-05 to -01, 01 to 31)<br>QtrDay - Quarterly (either ENGLISH, SCOTTISH, or RECEIVED)<br>ENGLISH = Paid on the 25th March, 24th June, 29th September and 25th December.<br>SCOTTISH = Paid on the 2nd February, 15th May, 1st August and 11th November.<br>RECEIVED = Paid on the 20th March, 19th June, 24th September and 20th December.<br>Individual Patterns:<br>NotKnown (ScheduleCode)<br>EvryDay (ScheduleCode)<br>EvryWorkgDay (ScheduleCode)<br>IntrvlDay:NoOfDay (ScheduleCode + NoOfDay)<br>IntrvlWkDay:IntervalInWeeks:DayInWeek (ScheduleCode + IntervalInWeeks + DayInWeek)<br>WkInMnthDay:WeekInMonth:DayInWeek (ScheduleCode + WeekInMonth + DayInWeek)<br>IntrvlMnthDay:IntervalInMonths:DayInMonth (ScheduleCode + IntervalInMonths + DayInMonth)<br>QtrDay: + either (ENGLISH, SCOTTISH or RECEIVED) ScheduleCode + QuarterDay<br>The regular expression for this element combines five smaller versions for each permitted pattern. To aid legibility - the components are presented individually here:<br>NotKnown<br>EvryDay<br>EvryWorkgDay<br>IntrvlDay:((0[2-9])\|([1-2][0-9])\|3[0-1])<br>IntrvlWkDay:0[1-9]:0[1-7]<br>WkInMnthDay:0[1-5]:0[1-7]<br>IntrvlMnthDay:(0[1-6]\|12\|24):(-0[1-5]\|0[1-9]\|[12][0-9]\|3[01])<br>QtrDay:(ENGLISH\|SCOTTISH\|RECEIVED)<br>Full Regular Expression:<br>^(NotKnown)$\|^(EvryDay)$\|^(EvryWorkgDay)$\|^(IntrvlDay:((0[2-9])\|([1-2][0-9])\|3[0-1]))$\|^(IntrvlWkDay:0[1-9]:0[1-7])$\|^(WkInMnthDay:0[1-5]:0[1-7])$\|^(IntrvlMnthDay:(0[1-6]\|12\|24):(-0[1-5]\|0[1-9]\|[12][0-9]\|3[01]))$\|^(QtrDay:(ENGLISH\|SCOTTISH\|RECEIVED))$|
|LastPaymentAmount|[OBActiveOrHistoricCurrencyAndAmount_11](#schemaobactiveorhistoriccurrencyandamount_11)|false|none|The amount of the last (most recent) Standing Order instruction.|
|LastPaymentDateTime|[LastPaymentDateTime](#schemalastpaymentdatetime)|false|none|The date on which the last (most recent) payment for a Standing Order schedule was made.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|NextPaymentAmount|[OBActiveOrHistoricCurrencyAndAmount_3](#schemaobactiveorhistoriccurrencyandamount_3)|false|none|The amount of the next Standing Order.|
|NextPaymentDateTime|[NextPaymentDateTime](#schemanextpaymentdatetime)|false|none|The date on which the next payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|NumberOfPayments|[NumberOfPayments](#schemanumberofpayments)|false|none|Number of the payments that will be made in completing this frequency sequence including any executed since the sequence start date.|
|Reference|[Reference](#schemareference)|false|none|Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.<br>Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.<br>If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.|
|StandingOrderId|[StandingOrderId](#schemastandingorderid)|false|none|A unique and immutable identifier used to identify the standing order resource. This identifier has no meaning to the account owner.|
|StandingOrderStatusCode|[OBExternalStandingOrderStatus1Code](#schemaobexternalstandingorderstatus1code)|false|none|Specifies the status of the standing order in code form.|
|SupplementaryData|[OBSupplementaryData1](#schemaobsupplementarydata1)|false|none|Additional information that can not be captured in the structured fields and/or any other specific block.|

#### Enumerated Values

|Property|Value|
|---|---|
|StandingOrderStatusCode|Active|
|StandingOrderStatusCode|Inactive|

<h2 id="tocS_OBStatement2">OBStatement2</h2>
<!-- backwards compatibility -->
<a id="schemaobstatement2"></a>
<a id="schema_OBStatement2"></a>
<a id="tocSobstatement2"></a>
<a id="tocsobstatement2"></a>

```json
{
  "AccountId": "string",
  "CreationDateTime": "1970-01-01T00:00:00Z",
  "EndDateTime": "1970-01-01T00:00:00Z",
  "StartDateTime": "1970-01-01T00:00:00Z",
  "StatementAmount": [
    {
      "Amount": {
        "Amount": "string",
        "Currency": "string"
      },
      "CreditDebitIndicator": "Credit",
      "Type": "string"
    }
  ],
  "StatementBenefit": [
    {
      "Amount": {
        "Amount": "string",
        "Currency": "string"
      },
      "Type": "string"
    }
  ],
  "StatementDateTime": [
    {
      "DateTime": "1970-01-01T00:00:00Z",
      "Type": "string"
    }
  ],
  "StatementDescription": [
    "string"
  ],
  "StatementFee": [
    {
      "Amount": {
        "Amount": "string",
        "Currency": "string"
      },
      "CreditDebitIndicator": "Credit",
      "Description": "string",
      "Frequency": "string",
      "Rate": 0,
      "RateType": "string",
      "Type": "string"
    }
  ],
  "StatementId": "string",
  "StatementInterest": [
    {
      "Amount": {
        "Amount": "string",
        "Currency": "string"
      },
      "CreditDebitIndicator": "Credit",
      "Description": "string",
      "Frequency": "string",
      "Rate": 0,
      "RateType": "string",
      "Type": "string"
    }
  ],
  "StatementRate": [
    {
      "Rate": "string",
      "Type": "string"
    }
  ],
  "StatementReference": "string",
  "StatementValue": [
    {
      "Type": "string",
      "Value": "string"
    }
  ],
  "Type": "AccountClosure"
}
```

Provides further details on a statement resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|[AccountId](#schemaaccountid)|true|none|A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.|
|CreationDateTime|[CreationDateTime](#schemacreationdatetime)|true|none|Date and time at which the resource was created.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|EndDateTime|[EndDateTime](#schemaenddatetime)|true|none|Date and time at which the statement period ends.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|StartDateTime|[StartDateTime](#schemastartdatetime)|true|none|Date and time at which the statement period starts.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|StatementAmount|[object]|false|none|none|
|StatementBenefit|[object]|false|none|none|
|StatementDateTime|[object]|false|none|none|
|StatementDescription|[string]|false|none|none|
|StatementFee|[object]|false|none|none|
|StatementId|[StatementId](#schemastatementid)|false|none|Unique identifier for the statement resource within an servicing institution. This identifier is both unique and immutable.|
|StatementInterest|[object]|false|none|none|
|StatementRate|[object]|false|none|none|
|StatementReference|[StatementReference](#schemastatementreference)|false|none|Unique reference for the statement. This reference may be optionally populated if available.|
|StatementValue|[object]|false|none|none|
|Type|[OBExternalStatementType1Code](#schemaobexternalstatementtype1code)|true|none|Statement type, in a coded form.|

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
  "AccountId": "string",
  "CreationDateTime": "1970-01-01T00:00:00Z",
  "EndDateTime": "1970-01-01T00:00:00Z",
  "StartDateTime": "1970-01-01T00:00:00Z",
  "StatementBenefit": [
    {
      "Amount": {
        "Amount": "string",
        "Currency": "string"
      },
      "Type": "string"
    }
  ],
  "StatementDateTime": [
    {
      "DateTime": "1970-01-01T00:00:00Z",
      "Type": "string"
    }
  ],
  "StatementDescription": [
    "string"
  ],
  "StatementFee": [
    {
      "Amount": {
        "Amount": "string",
        "Currency": "string"
      },
      "CreditDebitIndicator": "Credit",
      "Description": "string",
      "Frequency": "string",
      "Rate": 0,
      "RateType": "string",
      "Type": "string"
    }
  ],
  "StatementId": "string",
  "StatementInterest": [
    {
      "Amount": {
        "Amount": "string",
        "Currency": "string"
      },
      "CreditDebitIndicator": "Credit",
      "Description": "string",
      "Frequency": "string",
      "Rate": 0,
      "RateType": "string",
      "Type": "string"
    }
  ],
  "StatementRate": [
    {
      "Rate": "string",
      "Type": "string"
    }
  ],
  "StatementReference": "string",
  "StatementValue": [
    {
      "Type": "string",
      "Value": "string"
    }
  ],
  "Type": "AccountClosure"
}
```

Provides further details on a statement resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|[AccountId](#schemaaccountid)|true|none|A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.|
|CreationDateTime|[CreationDateTime](#schemacreationdatetime)|true|none|Date and time at which the resource was created.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|EndDateTime|[EndDateTime](#schemaenddatetime)|true|none|Date and time at which the statement period ends.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|StartDateTime|[StartDateTime](#schemastartdatetime)|true|none|Date and time at which the statement period starts.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|StatementBenefit|[object]|false|none|none|
|StatementDateTime|[object]|false|none|none|
|StatementDescription|[string]|false|none|none|
|StatementFee|[object]|false|none|none|
|StatementId|[StatementId](#schemastatementid)|false|none|Unique identifier for the statement resource within an servicing institution. This identifier is both unique and immutable.|
|StatementInterest|[object]|false|none|none|
|StatementRate|[object]|false|none|none|
|StatementReference|[StatementReference](#schemastatementreference)|false|none|Unique reference for the statement. This reference may be optionally populated if available.|
|StatementValue|[object]|false|none|none|
|Type|[OBExternalStatementType1Code](#schemaobexternalstatementtype1code)|true|none|Statement type, in a coded form.|

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
  "AccountId": "string",
  "CreationDateTime": "1970-01-01T00:00:00Z",
  "EndDateTime": "1970-01-01T00:00:00Z",
  "StartDateTime": "1970-01-01T00:00:00Z",
  "StatementAmount": [
    {
      "Amount": {
        "Amount": "string",
        "Currency": "string"
      },
      "CreditDebitIndicator": "Credit",
      "Type": "string"
    }
  ],
  "StatementBenefit": [
    {
      "Amount": {
        "Amount": "string",
        "Currency": "string"
      },
      "Type": "string"
    }
  ],
  "StatementDateTime": [
    {
      "DateTime": "1970-01-01T00:00:00Z",
      "Type": "string"
    }
  ],
  "StatementDescription": [
    "string"
  ],
  "StatementFee": [
    {
      "Amount": {
        "Amount": "string",
        "Currency": "string"
      },
      "CreditDebitIndicator": "Credit",
      "Description": "string",
      "Frequency": "string",
      "Rate": 0,
      "RateType": "string",
      "Type": "string"
    }
  ],
  "StatementId": "string",
  "StatementInterest": [
    {
      "Amount": {
        "Amount": "string",
        "Currency": "string"
      },
      "CreditDebitIndicator": "Credit",
      "Description": "string",
      "Frequency": "string",
      "Rate": 0,
      "RateType": "string",
      "Type": "string"
    }
  ],
  "StatementRate": [
    {
      "Rate": "string",
      "Type": "string"
    }
  ],
  "StatementReference": "string",
  "StatementValue": [
    {
      "Type": "string",
      "Value": "string"
    }
  ],
  "Type": "AccountClosure"
}
```

Provides further details on a statement resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|[AccountId](#schemaaccountid)|true|none|A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.|
|CreationDateTime|[CreationDateTime](#schemacreationdatetime)|true|none|Date and time at which the resource was created.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|EndDateTime|[EndDateTime](#schemaenddatetime)|true|none|Date and time at which the statement period ends.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|StartDateTime|[StartDateTime](#schemastartdatetime)|true|none|Date and time at which the statement period starts.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|StatementAmount|[object]|false|none|none|
|StatementBenefit|[object]|false|none|none|
|StatementDateTime|[object]|false|none|none|
|StatementDescription|[string]|false|none|none|
|StatementFee|[object]|false|none|none|
|StatementId|[StatementId](#schemastatementid)|false|none|Unique identifier for the statement resource within an servicing institution. This identifier is both unique and immutable.|
|StatementInterest|[object]|false|none|none|
|StatementRate|[object]|false|none|none|
|StatementReference|[StatementReference](#schemastatementreference)|false|none|Unique reference for the statement. This reference may be optionally populated if available.|
|StatementValue|[object]|false|none|none|
|Type|[OBExternalStatementType1Code](#schemaobexternalstatementtype1code)|true|none|Statement type, in a coded form.|

#### Enumerated Values

|Property|Value|
|---|---|
|Type|AccountClosure|
|Type|AccountOpening|
|Type|Annual|
|Type|Interim|
|Type|RegularPeriodic|

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
  "AccountId": "string",
  "AddressLine": "string",
  "Amount": {
    "Amount": "string",
    "Currency": "string"
  },
  "Balance": {
    "Amount": {
      "Amount": "string",
      "Currency": "string"
    },
    "CreditDebitIndicator": "Credit",
    "Type": "ClosingAvailable"
  },
  "BankTransactionCode": {
    "Code": "string",
    "SubCode": "string"
  },
  "BookingDateTime": "1970-01-01T00:00:00Z",
  "CardInstrument": {
    "AuthorisationType": "ConsumerDevice",
    "CardSchemeName": "AmericanExpress",
    "Identification": "string",
    "Name": "string"
  },
  "ChargeAmount": {
    "Amount": "string",
    "Currency": "string"
  },
  "CreditDebitIndicator": "Credit",
  "CreditorAccount": {
    "Identification": "string",
    "Name": "string",
    "SchemeName": "string",
    "SecondaryIdentification": "string"
  },
  "CreditorAgent": {
    "Identification": "string",
    "Name": "string",
    "PostalAddress": {
      "AddressLine": [
        "string"
      ],
      "AddressType": "Business",
      "BuildingNumber": "string",
      "Country": "string",
      "CountrySubDivision": "string",
      "Department": "string",
      "PostCode": "string",
      "StreetName": "string",
      "SubDepartment": "string",
      "TownName": "string"
    },
    "SchemeName": "string"
  },
  "CurrencyExchange": {
    "ContractIdentification": "string",
    "ExchangeRate": 0,
    "InstructedAmount": {
      "Amount": "string",
      "Currency": "string"
    },
    "QuotationDate": "1970-01-01T00:00:00Z",
    "SourceCurrency": "string",
    "TargetCurrency": "string",
    "UnitCurrency": "string"
  },
  "DebtorAccount": {
    "Identification": "string",
    "Name": "string",
    "SchemeName": "string",
    "SecondaryIdentification": "string"
  },
  "DebtorAgent": {
    "Identification": "string",
    "Name": "string",
    "PostalAddress": {
      "AddressLine": [
        "string"
      ],
      "AddressType": "Business",
      "BuildingNumber": "string",
      "Country": "string",
      "CountrySubDivision": "string",
      "Department": "string",
      "PostCode": "string",
      "StreetName": "string",
      "SubDepartment": "string",
      "TownName": "string"
    },
    "SchemeName": "string"
  },
  "MerchantDetails": {
    "MerchantCategoryCode": "stri",
    "MerchantName": "string"
  },
  "ProprietaryBankTransactionCode": {
    "Code": "string",
    "Issuer": "string"
  },
  "StatementReference": [
    "string"
  ],
  "Status": "Booked",
  "SupplementaryData": {},
  "TransactionId": "string",
  "TransactionInformation": "string",
  "TransactionMutability": "Mutable",
  "TransactionReference": "string",
  "ValueDateTime": "1970-01-01T00:00:00Z"
}
```

Provides further details on an entry in the report.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|[AccountId](#schemaaccountid)|true|none|A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.|
|AddressLine|[AddressLine](#schemaaddressline)|false|none|Information that locates and identifies a specific address for a transaction entry, that is presented in free format text.|
|Amount|[OBActiveOrHistoricCurrencyAndAmount_9](#schemaobactiveorhistoriccurrencyandamount_9)|true|none|Amount of money in the cash transaction entry.|
|Balance|[OBTransactionCashBalance](#schemaobtransactioncashbalance)|false|none|Set of elements used to define the balance as a numerical representation of the net increases and decreases in an account after a transaction entry is applied to the account.|
|BankTransactionCode|[OBBankTransactionCodeStructure1](#schemaobbanktransactioncodestructure1)|false|none|Set of elements used to fully identify the type of underlying transaction resulting in an entry.|
|BookingDateTime|[BookingDateTime](#schemabookingdatetime)|true|none|Date and time when a transaction entry is posted to an account on the account servicer's books.<br>Usage: Booking date is the expected booking date, unless the status is booked, in which case it is the actual booking date.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|CardInstrument|[OBTransactionCardInstrument1](#schemaobtransactioncardinstrument1)|false|none|Set of elements to describe the card instrument used in the transaction.|
|ChargeAmount|[OBActiveOrHistoricCurrencyAndAmount_10](#schemaobactiveorhistoriccurrencyandamount_10)|false|none|Transaction charges to be paid by the charge bearer.|
|CreditDebitIndicator|[OBCreditDebitCode_1](#schemaobcreditdebitcode_1)|true|none|Indicates whether the transaction is a credit or a debit entry.|
|CreditorAccount|[OBCashAccount6_0](#schemaobcashaccount6_0)|false|none|Unambiguous identification of the account of the creditor, in the case of a debit transaction.|
|CreditorAgent|[OBBranchAndFinancialInstitutionIdentification6_1](#schemaobbranchandfinancialinstitutionidentification6_1)|false|none|Financial institution servicing an account for the creditor.|
|CurrencyExchange|[OBCurrencyExchange5](#schemaobcurrencyexchange5)|false|none|Set of elements used to provide details on the currency exchange.|
|DebtorAccount|[OBCashAccount6_1](#schemaobcashaccount6_1)|false|none|Unambiguous identification of the account of the debtor, in the case of a crebit transaction.|
|DebtorAgent|[OBBranchAndFinancialInstitutionIdentification6_2](#schemaobbranchandfinancialinstitutionidentification6_2)|false|none|Financial institution servicing an account for the debtor.|
|MerchantDetails|[OBMerchantDetails1](#schemaobmerchantdetails1)|false|none|Details of the merchant involved in the transaction.|
|ProprietaryBankTransactionCode|[ProprietaryBankTransactionCodeStructure1](#schemaproprietarybanktransactioncodestructure1)|false|none|Set of elements to fully identify a proprietary bank transaction code.|
|StatementReference|[[StatementReference](#schemastatementreference)]|false|none|none|
|Status|[OBEntryStatus1Code](#schemaobentrystatus1code)|true|none|Status of a transaction entry on the books of the account servicer.|
|SupplementaryData|[OBSupplementaryData1](#schemaobsupplementarydata1)|false|none|Additional information that can not be captured in the structured fields and/or any other specific block.|
|TransactionId|[TransactionId](#schematransactionid)|false|none|Unique identifier for the transaction within an servicing institution. This identifier is both unique and immutable.|
|TransactionInformation|[TransactionInformation](#schematransactioninformation)|false|none|Further details of the transaction. <br>This is the transaction narrative, which is unstructured text.|
|TransactionMutability|[OBTransactionMutability1Code](#schemaobtransactionmutability1code)|false|none|Specifies the Mutability of the Transaction record.|
|TransactionReference|[TransactionReference](#schematransactionreference)|false|none|Unique reference for the transaction. This reference is optionally populated, and may as an example be the FPID in the Faster Payments context.|
|ValueDateTime|[ValueDateTime](#schemavaluedatetime)|false|none|Date and time at which assets become available to the account owner in case of a credit entry, or cease to be available to the account owner in case of a debit transaction entry.<br>Usage: If transaction entry status is pending and value date is present, then the value date refers to an expected/requested value date.<br>For transaction entries subject to availability/float and for which availability information is provided, the value date must not be used. In this case the availability component identifies the number of availability days.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|

#### Enumerated Values

|Property|Value|
|---|---|
|CreditDebitIndicator|Credit|
|CreditDebitIndicator|Debit|
|Status|Booked|
|Status|Pending|
|TransactionMutability|Mutable|
|TransactionMutability|Immutable|

<h2 id="tocS_OBTransaction6Basic">OBTransaction6Basic</h2>
<!-- backwards compatibility -->
<a id="schemaobtransaction6basic"></a>
<a id="schema_OBTransaction6Basic"></a>
<a id="tocSobtransaction6basic"></a>
<a id="tocsobtransaction6basic"></a>

```json
{
  "AccountId": "string",
  "AddressLine": "string",
  "Amount": {
    "Amount": "string",
    "Currency": "string"
  },
  "BankTransactionCode": {
    "Code": "string",
    "SubCode": "string"
  },
  "BookingDateTime": "1970-01-01T00:00:00Z",
  "CardInstrument": {
    "AuthorisationType": "ConsumerDevice",
    "CardSchemeName": "AmericanExpress",
    "Identification": "string",
    "Name": "string"
  },
  "ChargeAmount": {
    "Amount": "string",
    "Currency": "string"
  },
  "CreditDebitIndicator": "Credit",
  "CurrencyExchange": {
    "ContractIdentification": "string",
    "ExchangeRate": 0,
    "InstructedAmount": {
      "Amount": "string",
      "Currency": "string"
    },
    "QuotationDate": "1970-01-01T00:00:00Z",
    "SourceCurrency": "string",
    "TargetCurrency": "string",
    "UnitCurrency": "string"
  },
  "ProprietaryBankTransactionCode": {
    "Code": "string",
    "Issuer": "string"
  },
  "StatementReference": [
    "string"
  ],
  "Status": "Booked",
  "SupplementaryData": {},
  "TransactionId": "string",
  "TransactionMutability": "Mutable",
  "TransactionReference": "string",
  "ValueDateTime": "1970-01-01T00:00:00Z"
}
```

Provides further details on an entry in the report.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|[AccountId](#schemaaccountid)|true|none|A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.|
|AddressLine|[AddressLine](#schemaaddressline)|false|none|Information that locates and identifies a specific address for a transaction entry, that is presented in free format text.|
|Amount|[OBActiveOrHistoricCurrencyAndAmount_9](#schemaobactiveorhistoriccurrencyandamount_9)|true|none|Amount of money in the cash transaction entry.|
|BankTransactionCode|[OBBankTransactionCodeStructure1](#schemaobbanktransactioncodestructure1)|false|none|Set of elements used to fully identify the type of underlying transaction resulting in an entry.|
|BookingDateTime|[BookingDateTime](#schemabookingdatetime)|true|none|Date and time when a transaction entry is posted to an account on the account servicer's books.<br>Usage: Booking date is the expected booking date, unless the status is booked, in which case it is the actual booking date.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|CardInstrument|[OBTransactionCardInstrument1](#schemaobtransactioncardinstrument1)|false|none|Set of elements to describe the card instrument used in the transaction.|
|ChargeAmount|[OBActiveOrHistoricCurrencyAndAmount_10](#schemaobactiveorhistoriccurrencyandamount_10)|false|none|Transaction charges to be paid by the charge bearer.|
|CreditDebitIndicator|[OBCreditDebitCode_1](#schemaobcreditdebitcode_1)|true|none|Indicates whether the transaction is a credit or a debit entry.|
|CurrencyExchange|[OBCurrencyExchange5](#schemaobcurrencyexchange5)|false|none|Set of elements used to provide details on the currency exchange.|
|ProprietaryBankTransactionCode|[ProprietaryBankTransactionCodeStructure1](#schemaproprietarybanktransactioncodestructure1)|false|none|Set of elements to fully identify a proprietary bank transaction code.|
|StatementReference|[[StatementReference](#schemastatementreference)]|false|none|none|
|Status|[OBEntryStatus1Code](#schemaobentrystatus1code)|true|none|Status of a transaction entry on the books of the account servicer.|
|SupplementaryData|[OBSupplementaryData1](#schemaobsupplementarydata1)|false|none|Additional information that can not be captured in the structured fields and/or any other specific block.|
|TransactionId|[TransactionId](#schematransactionid)|false|none|Unique identifier for the transaction within an servicing institution. This identifier is both unique and immutable.|
|TransactionMutability|[OBTransactionMutability1Code](#schemaobtransactionmutability1code)|false|none|Specifies the Mutability of the Transaction record.|
|TransactionReference|[TransactionReference](#schematransactionreference)|false|none|Unique reference for the transaction. This reference is optionally populated, and may as an example be the FPID in the Faster Payments context.|
|ValueDateTime|[ValueDateTime](#schemavaluedatetime)|false|none|Date and time at which assets become available to the account owner in case of a credit entry, or cease to be available to the account owner in case of a debit transaction entry.<br>Usage: If transaction entry status is pending and value date is present, then the value date refers to an expected/requested value date.<br>For transaction entries subject to availability/float and for which availability information is provided, the value date must not be used. In this case the availability component identifies the number of availability days.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|

#### Enumerated Values

|Property|Value|
|---|---|
|CreditDebitIndicator|Credit|
|CreditDebitIndicator|Debit|
|Status|Booked|
|Status|Pending|
|TransactionMutability|Mutable|
|TransactionMutability|Immutable|

<h2 id="tocS_OBTransaction6Detail">OBTransaction6Detail</h2>
<!-- backwards compatibility -->
<a id="schemaobtransaction6detail"></a>
<a id="schema_OBTransaction6Detail"></a>
<a id="tocSobtransaction6detail"></a>
<a id="tocsobtransaction6detail"></a>

```json
{
  "AccountId": "string",
  "AddressLine": "string",
  "Amount": {
    "Amount": "string",
    "Currency": "string"
  },
  "Balance": {
    "Amount": {
      "Amount": "string",
      "Currency": "string"
    },
    "CreditDebitIndicator": "Credit",
    "Type": "ClosingAvailable"
  },
  "BankTransactionCode": {
    "Code": "string",
    "SubCode": "string"
  },
  "BookingDateTime": "1970-01-01T00:00:00Z",
  "CardInstrument": {
    "AuthorisationType": "ConsumerDevice",
    "CardSchemeName": "AmericanExpress",
    "Identification": "string",
    "Name": "string"
  },
  "ChargeAmount": {
    "Amount": "string",
    "Currency": "string"
  },
  "CreditDebitIndicator": "Credit",
  "CreditorAccount": {
    "Identification": "string",
    "Name": "string",
    "SchemeName": "string",
    "SecondaryIdentification": "string"
  },
  "CreditorAgent": {
    "Identification": "string",
    "Name": "string",
    "PostalAddress": {
      "AddressLine": [
        "string"
      ],
      "AddressType": "Business",
      "BuildingNumber": "string",
      "Country": "string",
      "CountrySubDivision": "string",
      "Department": "string",
      "PostCode": "string",
      "StreetName": "string",
      "SubDepartment": "string",
      "TownName": "string"
    },
    "SchemeName": "string"
  },
  "CurrencyExchange": {
    "ContractIdentification": "string",
    "ExchangeRate": 0,
    "InstructedAmount": {
      "Amount": "string",
      "Currency": "string"
    },
    "QuotationDate": "1970-01-01T00:00:00Z",
    "SourceCurrency": "string",
    "TargetCurrency": "string",
    "UnitCurrency": "string"
  },
  "DebtorAccount": {
    "Identification": "string",
    "Name": "string",
    "SchemeName": "string",
    "SecondaryIdentification": "string"
  },
  "DebtorAgent": {
    "Identification": "string",
    "Name": "string",
    "PostalAddress": {
      "AddressLine": [
        "string"
      ],
      "AddressType": "Business",
      "BuildingNumber": "string",
      "Country": "string",
      "CountrySubDivision": "string",
      "Department": "string",
      "PostCode": "string",
      "StreetName": "string",
      "SubDepartment": "string",
      "TownName": "string"
    },
    "SchemeName": "string"
  },
  "MerchantDetails": {
    "MerchantCategoryCode": "stri",
    "MerchantName": "string"
  },
  "ProprietaryBankTransactionCode": {
    "Code": "string",
    "Issuer": "string"
  },
  "StatementReference": [
    "string"
  ],
  "Status": "Booked",
  "SupplementaryData": {},
  "TransactionId": "string",
  "TransactionInformation": "string",
  "TransactionMutability": "Mutable",
  "TransactionReference": "string",
  "ValueDateTime": "1970-01-01T00:00:00Z"
}
```

Provides further details on an entry in the report.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AccountId|[AccountId](#schemaaccountid)|true|none|A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.|
|AddressLine|[AddressLine](#schemaaddressline)|false|none|Information that locates and identifies a specific address for a transaction entry, that is presented in free format text.|
|Amount|[OBActiveOrHistoricCurrencyAndAmount_9](#schemaobactiveorhistoriccurrencyandamount_9)|true|none|Amount of money in the cash transaction entry.|
|Balance|[OBTransactionCashBalance](#schemaobtransactioncashbalance)|false|none|Set of elements used to define the balance as a numerical representation of the net increases and decreases in an account after a transaction entry is applied to the account.|
|BankTransactionCode|[OBBankTransactionCodeStructure1](#schemaobbanktransactioncodestructure1)|false|none|Set of elements used to fully identify the type of underlying transaction resulting in an entry.|
|BookingDateTime|[BookingDateTime](#schemabookingdatetime)|true|none|Date and time when a transaction entry is posted to an account on the account servicer's books.<br>Usage: Booking date is the expected booking date, unless the status is booked, in which case it is the actual booking date.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|
|CardInstrument|[OBTransactionCardInstrument1](#schemaobtransactioncardinstrument1)|false|none|Set of elements to describe the card instrument used in the transaction.|
|ChargeAmount|[OBActiveOrHistoricCurrencyAndAmount_10](#schemaobactiveorhistoriccurrencyandamount_10)|false|none|Transaction charges to be paid by the charge bearer.|
|CreditDebitIndicator|[OBCreditDebitCode_1](#schemaobcreditdebitcode_1)|true|none|Indicates whether the transaction is a credit or a debit entry.|
|CreditorAccount|[OBCashAccount6_0](#schemaobcashaccount6_0)|false|none|Unambiguous identification of the account of the creditor, in the case of a debit transaction.|
|CreditorAgent|[OBBranchAndFinancialInstitutionIdentification6_1](#schemaobbranchandfinancialinstitutionidentification6_1)|false|none|Financial institution servicing an account for the creditor.|
|CurrencyExchange|[OBCurrencyExchange5](#schemaobcurrencyexchange5)|false|none|Set of elements used to provide details on the currency exchange.|
|DebtorAccount|[OBCashAccount6_1](#schemaobcashaccount6_1)|false|none|Unambiguous identification of the account of the debtor, in the case of a crebit transaction.|
|DebtorAgent|[OBBranchAndFinancialInstitutionIdentification6_2](#schemaobbranchandfinancialinstitutionidentification6_2)|false|none|Financial institution servicing an account for the debtor.|
|MerchantDetails|[OBMerchantDetails1](#schemaobmerchantdetails1)|false|none|Details of the merchant involved in the transaction.|
|ProprietaryBankTransactionCode|[ProprietaryBankTransactionCodeStructure1](#schemaproprietarybanktransactioncodestructure1)|false|none|Set of elements to fully identify a proprietary bank transaction code.|
|StatementReference|[[StatementReference](#schemastatementreference)]|false|none|none|
|Status|[OBEntryStatus1Code](#schemaobentrystatus1code)|true|none|Status of a transaction entry on the books of the account servicer.|
|SupplementaryData|[OBSupplementaryData1](#schemaobsupplementarydata1)|false|none|Additional information that can not be captured in the structured fields and/or any other specific block.|
|TransactionId|[TransactionId](#schematransactionid)|false|none|Unique identifier for the transaction within an servicing institution. This identifier is both unique and immutable.|
|TransactionInformation|[TransactionInformation](#schematransactioninformation)|false|none|Further details of the transaction. <br>This is the transaction narrative, which is unstructured text.|
|TransactionMutability|[OBTransactionMutability1Code](#schemaobtransactionmutability1code)|false|none|Specifies the Mutability of the Transaction record.|
|TransactionReference|[TransactionReference](#schematransactionreference)|false|none|Unique reference for the transaction. This reference is optionally populated, and may as an example be the FPID in the Faster Payments context.|
|ValueDateTime|[ValueDateTime](#schemavaluedatetime)|false|none|Date and time at which assets become available to the account owner in case of a credit entry, or cease to be available to the account owner in case of a debit transaction entry.<br>Usage: If transaction entry status is pending and value date is present, then the value date refers to an expected/requested value date.<br>For transaction entries subject to availability/float and for which availability information is provided, the value date must not be used. In this case the availability component identifies the number of availability days.All dates in the JSON payloads are represented in ISO 8601 date-time format. <br>All date-time fields in responses must include the timezone. An example is below:<br>2017-04-05T10:43:07+00:00|

#### Enumerated Values

|Property|Value|
|---|---|
|CreditDebitIndicator|Credit|
|CreditDebitIndicator|Debit|
|Status|Booked|
|Status|Pending|
|TransactionMutability|Mutable|
|TransactionMutability|Immutable|

<h2 id="tocS_OBTransactionCardInstrument1">OBTransactionCardInstrument1</h2>
<!-- backwards compatibility -->
<a id="schemaobtransactioncardinstrument1"></a>
<a id="schema_OBTransactionCardInstrument1"></a>
<a id="tocSobtransactioncardinstrument1"></a>
<a id="tocsobtransactioncardinstrument1"></a>

```json
{
  "AuthorisationType": "ConsumerDevice",
  "CardSchemeName": "AmericanExpress",
  "Identification": "string",
  "Name": "string"
}
```

Set of elements to describe the card instrument used in the transaction.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AuthorisationType|string|false|none|The card authorisation type.|
|CardSchemeName|string|true|none|Name of the card scheme.|
|Identification|string|false|none|Identification assigned by an institution to identify the card instrument used in the transaction. This identification is known by the account owner, and may be masked.|
|Name|string|false|none|Name of the cardholder using the card instrument.|

#### Enumerated Values

|Property|Value|
|---|---|
|AuthorisationType|ConsumerDevice|
|AuthorisationType|Contactless|
|AuthorisationType|None|
|AuthorisationType|PIN|
|CardSchemeName|AmericanExpress|
|CardSchemeName|Diners|
|CardSchemeName|Discover|
|CardSchemeName|MasterCard|
|CardSchemeName|VISA|

<h2 id="tocS_OBTransactionCashBalance">OBTransactionCashBalance</h2>
<!-- backwards compatibility -->
<a id="schemaobtransactioncashbalance"></a>
<a id="schema_OBTransactionCashBalance"></a>
<a id="tocSobtransactioncashbalance"></a>
<a id="tocsobtransactioncashbalance"></a>

```json
{
  "Amount": {
    "Amount": "string",
    "Currency": "string"
  },
  "CreditDebitIndicator": "Credit",
  "Type": "ClosingAvailable"
}
```

Set of elements used to define the balance as a numerical representation of the net increases and decreases in an account after a transaction entry is applied to the account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Amount|object|true|none|Amount of money of the cash balance after a transaction entry is applied to the account..|
|CreditDebitIndicator|[OBCreditDebitCode_2](#schemaobcreditdebitcode_2)|true|none|Indicates whether the balance is a credit or a debit balance. <br>Usage: A zero balance is considered to be a credit balance.|
|Type|[OBBalanceType1Code](#schemaobbalancetype1code)|true|none|Balance type, in a coded form.|

#### Enumerated Values

|Property|Value|
|---|---|
|CreditDebitIndicator|Credit|
|CreditDebitIndicator|Debit|
|Type|ClosingAvailable|
|Type|ClosingBooked|
|Type|ClosingCleared|
|Type|Expected|
|Type|ForwardAvailable|
|Type|Information|
|Type|InterimAvailable|
|Type|InterimBooked|
|Type|InterimCleared|
|Type|OpeningAvailable|
|Type|OpeningBooked|
|Type|OpeningCleared|
|Type|PreviouslyClosedBooked|

<h2 id="tocS_OBTransactionMutability1Code">OBTransactionMutability1Code</h2>
<!-- backwards compatibility -->
<a id="schemaobtransactionmutability1code"></a>
<a id="schema_OBTransactionMutability1Code"></a>
<a id="tocSobtransactionmutability1code"></a>
<a id="tocsobtransactionmutability1code"></a>

```json
"Mutable"
```

Specifies the Mutability of the Transaction record.

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
  "Description": "string",
  "Name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Code|[OB_CodeMnemonic](#schemaob_codemnemonic)|false|none|The four letter Mnemonic used within an XML file to identify a code|
|Description|[Description_3](#schemadescription_3)|true|none|Description to describe the purpose of the code|
|Name|[Name_4](#schemaname_4)|true|none|Long name associated with the code|

<h2 id="tocS_OB_OtherCodeType1_1">OB_OtherCodeType1_1</h2>
<!-- backwards compatibility -->
<a id="schemaob_othercodetype1_1"></a>
<a id="schema_OB_OtherCodeType1_1"></a>
<a id="tocSob_othercodetype1_1"></a>
<a id="tocsob_othercodetype1_1"></a>

```json
{
  "Code": "string",
  "Description": "string",
  "Name": "string"
}
```

Other application frequencies that are not available in the standard code list

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Code|[OB_CodeMnemonic](#schemaob_codemnemonic)|false|none|The four letter Mnemonic used within an XML file to identify a code|
|Description|[Description_3](#schemadescription_3)|true|none|Description to describe the purpose of the code|
|Name|[Name_4](#schemaname_4)|true|none|Long name associated with the code|

<h2 id="tocS_OB_OtherCodeType1_2">OB_OtherCodeType1_2</h2>
<!-- backwards compatibility -->
<a id="schemaob_othercodetype1_2"></a>
<a id="schema_OB_OtherCodeType1_2"></a>
<a id="tocSob_othercodetype1_2"></a>
<a id="tocsob_othercodetype1_2"></a>

```json
{
  "Code": "string",
  "Description": "string",
  "Name": "string"
}
```

Other calculation frequency which is not available in the standard code set.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Code|[OB_CodeMnemonic](#schemaob_codemnemonic)|false|none|The four letter Mnemonic used within an XML file to identify a code|
|Description|[Description_3](#schemadescription_3)|true|none|Description to describe the purpose of the code|
|Name|[Name_4](#schemaname_4)|true|none|Long name associated with the code|

<h2 id="tocS_OB_OtherCodeType1_3">OB_OtherCodeType1_3</h2>
<!-- backwards compatibility -->
<a id="schemaob_othercodetype1_3"></a>
<a id="schema_OB_OtherCodeType1_3"></a>
<a id="tocSob_othercodetype1_3"></a>
<a id="tocsob_othercodetype1_3"></a>

```json
{
  "Code": "string",
  "Description": "string",
  "Name": "string"
}
```

Other Fee type which is not available in the standard code set

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Code|[OB_CodeMnemonic](#schemaob_codemnemonic)|false|none|The four letter Mnemonic used within an XML file to identify a code|
|Description|[Description_3](#schemadescription_3)|true|none|Description to describe the purpose of the code|
|Name|[Name_4](#schemaname_4)|true|none|Long name associated with the code|

<h2 id="tocS_OB_OtherCodeType1_4">OB_OtherCodeType1_4</h2>
<!-- backwards compatibility -->
<a id="schemaob_othercodetype1_4"></a>
<a id="schema_OB_OtherCodeType1_4"></a>
<a id="tocSob_othercodetype1_4"></a>
<a id="tocsob_othercodetype1_4"></a>

```json
{
  "Code": "string",
  "Description": "string",
  "Name": "string"
}
```

Other fee rate type code which is not available in the standard code set

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Code|[OB_CodeMnemonic](#schemaob_codemnemonic)|false|none|The four letter Mnemonic used within an XML file to identify a code|
|Description|[Description_3](#schemadescription_3)|true|none|Description to describe the purpose of the code|
|Name|[Name_4](#schemaname_4)|true|none|Long name associated with the code|

<h2 id="tocS_OB_OtherCodeType1_5">OB_OtherCodeType1_5</h2>
<!-- backwards compatibility -->
<a id="schemaob_othercodetype1_5"></a>
<a id="schema_OB_OtherCodeType1_5"></a>
<a id="tocSob_othercodetype1_5"></a>
<a id="tocsob_othercodetype1_5"></a>

```json
{
  "Code": "string",
  "Description": "string",
  "Name": "string"
}
```

Other fee rate type which is not in the standard rate type list

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Code|[OB_CodeMnemonic](#schemaob_codemnemonic)|false|none|The four letter Mnemonic used within an XML file to identify a code|
|Description|[Description_3](#schemadescription_3)|true|none|Description to describe the purpose of the code|
|Name|[Name_4](#schemaname_4)|true|none|Long name associated with the code|

<h2 id="tocS_OB_OtherCodeType1_6">OB_OtherCodeType1_6</h2>
<!-- backwards compatibility -->
<a id="schemaob_othercodetype1_6"></a>
<a id="schema_OB_OtherCodeType1_6"></a>
<a id="tocSob_othercodetype1_6"></a>
<a id="tocsob_othercodetype1_6"></a>

```json
{
  "Code": "string",
  "Description": "string",
  "Name": "string"
}
```

Other application frequencies not covered in the standard code list

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Code|[OB_CodeMnemonic](#schemaob_codemnemonic)|false|none|The four letter Mnemonic used within an XML file to identify a code|
|Description|[Description_3](#schemadescription_3)|true|none|Description to describe the purpose of the code|
|Name|[Name_4](#schemaname_4)|true|none|Long name associated with the code|

<h2 id="tocS_OB_OtherCodeType1_7">OB_OtherCodeType1_7</h2>
<!-- backwards compatibility -->
<a id="schemaob_othercodetype1_7"></a>
<a id="schema_OB_OtherCodeType1_7"></a>
<a id="tocSob_othercodetype1_7"></a>
<a id="tocsob_othercodetype1_7"></a>

```json
{
  "Code": "string",
  "Description": "string",
  "Name": "string"
}
```

Other calculation frequency which is not available in standard code set.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Code|[OB_CodeMnemonic](#schemaob_codemnemonic)|false|none|The four letter Mnemonic used within an XML file to identify a code|
|Description|[Description_3](#schemadescription_3)|true|none|Description to describe the purpose of the code|
|Name|[Name_4](#schemaname_4)|true|none|Long name associated with the code|

<h2 id="tocS_OB_OtherCodeType1_8">OB_OtherCodeType1_8</h2>
<!-- backwards compatibility -->
<a id="schemaob_othercodetype1_8"></a>
<a id="schema_OB_OtherCodeType1_8"></a>
<a id="tocSob_othercodetype1_8"></a>
<a id="tocsob_othercodetype1_8"></a>

```json
{
  "Code": "string",
  "Description": "string",
  "Name": "string"
}
```

Other fee rate type which is not available in the standard code set

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Code|[OB_CodeMnemonic](#schemaob_codemnemonic)|false|none|The four letter Mnemonic used within an XML file to identify a code|
|Description|[Description_3](#schemadescription_3)|true|none|Description to describe the purpose of the code|
|Name|[Name_4](#schemaname_4)|true|none|Long name associated with the code|

<h2 id="tocS_OB_OtherFeeChargeDetailType">OB_OtherFeeChargeDetailType</h2>
<!-- backwards compatibility -->
<a id="schemaob_otherfeechargedetailtype"></a>
<a id="schema_OB_OtherFeeChargeDetailType"></a>
<a id="tocSob_otherfeechargedetailtype"></a>
<a id="tocsob_otherfeechargedetailtype"></a>

```json
{
  "Code": "string",
  "Description": "string",
  "FeeCategory": "FCOT",
  "Name": "string"
}
```

Other Fee/charge type which is not available in the standard code set

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Code|[OB_CodeMnemonic](#schemaob_codemnemonic)|false|none|The four letter Mnemonic used within an XML file to identify a code|
|Description|[Description_3](#schemadescription_3)|true|none|Description to describe the purpose of the code|
|FeeCategory|[OB_FeeCategory1Code](#schemaob_feecategory1code)|true|none|Categorisation of fees and charges into standard categories.|
|Name|[Name_4](#schemaname_4)|true|none|Long name associated with the code|

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

<h2 id="tocS_OB_Rate1_0">OB_Rate1_0</h2>
<!-- backwards compatibility -->
<a id="schemaob_rate1_0"></a>
<a id="schema_OB_Rate1_0"></a>
<a id="tocSob_rate1_0"></a>
<a id="tocsob_rate1_0"></a>

```json
"string"
```

Rate charged for overdraft fee/charge (where it is charged in terms of a rate rather than an amount)

<h2 id="tocS_OB_Rate1_1">OB_Rate1_1</h2>
<!-- backwards compatibility -->
<a id="schemaob_rate1_1"></a>
<a id="schema_OB_Rate1_1"></a>
<a id="tocSob_rate1_1"></a>
<a id="tocsob_rate1_1"></a>

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

Date on which the account and related basic services are effectively operational for the account owner.All dates in the JSON payloads are represented in ISO 8601 date-time format. 
All date-time fields in responses must include the timezone. An example is below:
2017-04-05T10:43:07+00:00

<h2 id="tocS_PartyId">PartyId</h2>
<!-- backwards compatibility -->
<a id="schemapartyid"></a>
<a id="schema_PartyId"></a>
<a id="tocSpartyid"></a>
<a id="tocspartyid"></a>

```json
"string"
```

A unique and immutable identifier used to identify the customer resource. This identifier has no meaning to the account owner.

<h2 id="tocS_PartyNumber">PartyNumber</h2>
<!-- backwards compatibility -->
<a id="schemapartynumber"></a>
<a id="schema_PartyNumber"></a>
<a id="tocSpartynumber"></a>
<a id="tocspartynumber"></a>

```json
"string"
```

Number assigned by an agent to identify its customer.

<h2 id="tocS_PhoneNumber_0">PhoneNumber_0</h2>
<!-- backwards compatibility -->
<a id="schemaphonenumber_0"></a>
<a id="schema_PhoneNumber_0"></a>
<a id="tocSphonenumber_0"></a>
<a id="tocsphonenumber_0"></a>

```json
"string"
```

Collection of information that identifies a phone number, as defined by telecom services.

<h2 id="tocS_PhoneNumber_1">PhoneNumber_1</h2>
<!-- backwards compatibility -->
<a id="schemaphonenumber_1"></a>
<a id="schema_PhoneNumber_1"></a>
<a id="tocSphonenumber_1"></a>
<a id="tocsphonenumber_1"></a>

```json
"string"
```

Collection of information that identifies a mobile phone number, as defined by telecom services.

<h2 id="tocS_PostCode">PostCode</h2>
<!-- backwards compatibility -->
<a id="schemapostcode"></a>
<a id="schema_PostCode"></a>
<a id="tocSpostcode"></a>
<a id="tocspostcode"></a>

```json
"string"
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

Date of most recent direct debit collection.All dates in the JSON payloads are represented in ISO 8601 date-time format. 
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
"string"
```

Rate associated with the statement rate type.

<h2 id="tocS_Reference">Reference</h2>
<!-- backwards compatibility -->
<a id="schemareference"></a>
<a id="schema_Reference"></a>
<a id="tocSreference"></a>
<a id="tocsreference"></a>

```json
"string"
```

Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.
Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.
If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.

<h2 id="tocS_ScheduledPaymentDateTime">ScheduledPaymentDateTime</h2>
<!-- backwards compatibility -->
<a id="schemascheduledpaymentdatetime"></a>
<a id="schema_ScheduledPaymentDateTime"></a>
<a id="tocSscheduledpaymentdatetime"></a>
<a id="tocsscheduledpaymentdatetime"></a>

```json
"1970-01-01T00:00:00Z"
```

The date on which the scheduled payment will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format. 
All date-time fields in responses must include the timezone. An example is below:
2017-04-05T10:43:07+00:00

<h2 id="tocS_ScheduledPaymentId">ScheduledPaymentId</h2>
<!-- backwards compatibility -->
<a id="schemascheduledpaymentid"></a>
<a id="schema_ScheduledPaymentId"></a>
<a id="tocSscheduledpaymentid"></a>
<a id="tocsscheduledpaymentid"></a>

```json
"string"
```

A unique and immutable identifier used to identify the scheduled payment resource. This identifier has no meaning to the account owner.

<h2 id="tocS_SecondaryIdentification">SecondaryIdentification</h2>
<!-- backwards compatibility -->
<a id="schemasecondaryidentification"></a>
<a id="schema_SecondaryIdentification"></a>
<a id="tocSsecondaryidentification"></a>
<a id="tocssecondaryidentification"></a>

```json
"string"
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
"string"
```

A unique and immutable identifier used to identify the standing order resource. This identifier has no meaning to the account owner.

<h2 id="tocS_StartDateTime">StartDateTime</h2>
<!-- backwards compatibility -->
<a id="schemastartdatetime"></a>
<a id="schema_StartDateTime"></a>
<a id="tocSstartdatetime"></a>
<a id="tocsstartdatetime"></a>

```json
"1970-01-01T00:00:00Z"
```

Date and time at which the statement period starts.All dates in the JSON payloads are represented in ISO 8601 date-time format. 
All date-time fields in responses must include the timezone. An example is below:
2017-04-05T10:43:07+00:00

<h2 id="tocS_StatementId">StatementId</h2>
<!-- backwards compatibility -->
<a id="schemastatementid"></a>
<a id="schema_StatementId"></a>
<a id="tocSstatementid"></a>
<a id="tocsstatementid"></a>

```json
"string"
```

Unique identifier for the statement resource within an servicing institution. This identifier is both unique and immutable.

<h2 id="tocS_StatementReference">StatementReference</h2>
<!-- backwards compatibility -->
<a id="schemastatementreference"></a>
<a id="schema_StatementReference"></a>
<a id="tocSstatementreference"></a>
<a id="tocsstatementreference"></a>

```json
"string"
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

Date and time at which the resource status was updated.All dates in the JSON payloads are represented in ISO 8601 date-time format. 
All date-time fields in responses must include the timezone. An example is below:
2017-04-05T10:43:07+00:00

<h2 id="tocS_StreetName">StreetName</h2>
<!-- backwards compatibility -->
<a id="schemastreetname"></a>
<a id="schema_StreetName"></a>
<a id="tocSstreetname"></a>
<a id="tocsstreetname"></a>

```json
"string"
```

Name of a street or thoroughfare.

<h2 id="tocS_TownName">TownName</h2>
<!-- backwards compatibility -->
<a id="schematownname"></a>
<a id="schema_TownName"></a>
<a id="tocStownname"></a>
<a id="tocstownname"></a>

```json
"string"
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

Unique identifier for the transaction within an servicing institution. This identifier is both unique and immutable.

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
For transaction entries subject to availability/float and for which availability information is provided, the value date must not be used. In this case the availability component identifies the number of availability days.All dates in the JSON payloads are represented in ISO 8601 date-time format. 
All date-time fields in responses must include the timezone. An example is below:
2017-04-05T10:43:07+00:00
