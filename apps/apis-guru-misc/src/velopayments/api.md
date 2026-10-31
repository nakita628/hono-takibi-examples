<h1 id="velo-payments-apis">Velo Payments APIs v2.34.63</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

## Terms and Definitions

Throughout this document and the Velo platform the following terms are used:

* **Payor.** An entity (typically a corporation) which wishes to pay funds to one or more payees via a payout.
* **Payee.** The recipient of funds paid out by a payor.
* **Payment.** A single transfer of funds from a payor to a payee.
* **Payout.** A batch of Payments, typically used by a payor to logically group payments (e.g. by business day). Technically there need be no relationship between the payments in a payout - a single payout can contain payments to multiple payees and/or multiple payments to a single payee.
* **Sandbox.** An integration environment provided by Velo Payments which offers a similar API experience to the production environment, but all funding and payment events are simulated, along with many other services such as OFAC sanctions list checking.

## Overview

The Velo Payments API allows a payor to perform a number of operations. The following is a list of the main capabilities in a natural order of execution:

* Authenticate with the Velo platform
* Maintain a collection of payees
* Query the payor’s current balance of funds within the platform and perform additional funding
* Issue payments to payees
* Query the platform for a history of those payments

This document describes the main concepts and APIs required to get up and running with the Velo Payments platform. It is not an exhaustive API reference. For that, please see the separate Velo Payments API Reference.

## API Considerations

The Velo Payments API is REST based and uses the JSON format for requests and responses.

Most calls are secured using OAuth 2 security and require a valid authentication access token for successful operation. See the Authentication section for details.

Where a dynamic value is required in the examples below, the {token} format is used, suggesting that the caller needs to supply the appropriate value of the token in question (without including the { or } characters).

Where curl examples are given, the –d @filename.json approach is used, indicating that the request body should be placed into a file named filename.json in the current directory. Each of the curl examples in this document should be considered a single line on the command-line, regardless of how they appear in print.

## Authenticating with the Velo Platform

Once Velo backoffice staff have added your organization as a payor within the Velo platform sandbox, they will create you a payor Id, an API key and an API secret and share these with you in a secure manner.

You will need to use these values to authenticate with the Velo platform in order to gain access to the APIs. The steps to take are explained in the following:

create a string comprising the API key (e.g. 44a9537d-d55d-4b47-8082-14061c2bcdd8) and API secret (e.g. c396b26b-137a-44fd-87f5-34631f8fd529) with a colon between them. E.g. 44a9537d-d55d-4b47-8082-14061c2bcdd8:c396b26b-137a-44fd-87f5-34631f8fd529

base64 encode this string. E.g.: NDRhOTUzN2QtZDU1ZC00YjQ3LTgwODItMTQwNjFjMmJjZGQ4OmMzOTZiMjZiLTEzN2EtNDRmZC04N2Y1LTM0NjMxZjhmZDUyOQ==

create an HTTP **Authorization** header with the value set to e.g. Basic NDRhOTUzN2QtZDU1ZC00YjQ3LTgwODItMTQwNjFjMmJjZGQ4OmMzOTZiMjZiLTEzN2EtNDRmZC04N2Y1LTM0NjMxZjhmZDUyOQ==

perform the Velo authentication REST call using the HTTP header created above e.g. via curl:

```
  curl -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: Basic NDRhOTUzN2QtZDU1ZC00YjQ3LTgwODItMTQwNjFjMmJjZGQ4OmMzOTZiMjZiLTEzN2EtNDRmZC04N2Y1LTM0NjMxZjhmZDUyOQ==" \
  'https://api.sandbox.velopayments.com/v1/authenticate?grant_type=client_credentials'
```

If successful, this call will result in a **200** HTTP status code and a response body such as:

```
  {
    "access_token":"19f6bafd-93fd-4747-b229-00507bbc991f",
    "token_type":"bearer",
    "expires_in":1799,
    "scope":"..."
  }
```
## API access following authentication
Following successful authentication, the value of the access_token field in the response (indicated in green above) should then be presented with all subsequent API calls to allow the Velo platform to validate that the caller is authenticated.

This is achieved by setting the HTTP Authorization header with the value set to e.g. Bearer 19f6bafd-93fd-4747-b229-00507bbc991f such as the curl example below:

```
  -H "Authorization: Bearer 19f6bafd-93fd-4747-b229-00507bbc991f "
```

If you make other Velo API calls which require authorization but the Authorization header is missing or invalid then you will get a **401** HTTP status response.

Base URLs:

* <a href="https://api.sandbox.velopayments.com/">https://api.sandbox.velopayments.com/</a> - Velo Payments Sandbox for testing

* <a href="https://api.payouts.velopayments.com">https://api.payouts.velopayments.com</a> - Velo Payments Production URL

License: <a href="https://www.apache.org/licenses/LICENSE-2.0.html">Apache License 2.0</a>

# Authentication

- oAuth2 authentication. This API uses OAuth 2 with the Client Credentials grant flow. [More info](https://www.oauth.com/oauth2-servers/access-tokens/client-credentials)

    - Flow: clientCredentials
    - Token URL = [https://api.sandbox.velopayments.com/v1/login](https://api.sandbox.velopayments.com/v1/login)

|Scope|Scope Description|
|---|---|
| |Scopes not required|

- HTTP Authentication, scheme: basic

- oAuth2 authentication. This API uses OAuth 2 with the implicit grant flow. Authenticated user must have backoffice role [More info](https://api.example.com/docs/auth)

    - Flow: clientCredentials
    - Token URL = [https://api.sandbox.velopayments.com/oauth/token](https://api.sandbox.velopayments.com/oauth/token)

|Scope|Scope Description|
|---|---|
| |Scopes not required|

<h1 id="velo-payments-apis-payees">Payees</h1>

A payee is a person you wish to transfer money to. In this section you will find API opertions for working with Payees.


## List Payees

<a id="opIdlistPayeesV3"></a>

> Code samples

```bash
curl 'https://example.com/v3/payees?payorId=497f6eca-6276-4993-bfeb-53cbbbba6f08' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v3/payees`

<aside class="warning">
This operation is deprecated
</aside>

<p>Use v4 instead</p>
Get a paginated response listing the payees for a payor.


<h3 id="list-payees-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|payorId|query|string(uuid)|true|The account owner Payor ID|
|watchlistStatus|query|[WatchlistStatusV3](#schemawatchliststatusv3)|false|The watchlistStatus of the payees.|
|disabled|query|boolean|false|Payee disabled|
|onboardedStatus|query|[OnboardedStatusV4](#schemaonboardedstatusv4)|false|The onboarded status of the payees.|
|email|query|string(email)|false|Email address|
|displayName|query|string|false|The display name of the payees.|
|remoteId|query|string|false|The remote id of the payees.|
|payeeType|query|[PayeeType_2](#schemapayeetype_2)|false|The onboarded status of the payees.|
|payeeCountry|query|string|false|The country of the payee - 2 letter ISO 3166-1 country code (upper case)|
|page|query|integer(int32)|false|Page number. Default is 1.|
|pageSize|query|integer(int32)|false|Page size. Default is 25. Max allowable is 100.|
|sort|query|string|false|List of sort fields (e.g. ?sort=onboardedStatus:asc,name:asc) Default is name:asc 'name' is treated as company name for companies - last name + ',' + firstName for individuals The supported sort fields are - payeeId, displayName, payoutStatus, onboardedStatus.<br>|

> Example responses

> 200 Response

```json
{
  "content": [
    {
      "company": {
        "name": "ABC Group Plc",
        "operatingName": "ABC Co"
      },
      "country": "US",
      "created": "2019-01-20T09:00:00Z",
      "disabled": true,
      "disabledComment": "reason for disabled",
      "disabledUpdatedTimestamp": "2019-01-20T09:00:00Z",
      "displayName": "ABC",
      "email": "bob@example.com",
      "individual": {
        "name": {
          "firstName": "Bob",
          "lastName": "Smith",
          "otherNames": "H",
          "title": "Mr"
        }
      },
      "language": "en-US",
      "onboardedStatus": "onboardedStatus",
      "payeeId": "2aa5d7e0-2ecb-403f-8494-1865ed0454e9",
      "payeeType": "payeeType",
      "payorRefs": [
        {
          "invitationStatus": "invitationStatus",
          "invitationStatusTimestamp": "2019-01-20T09:00:00Z",
          "payableIssues": [
            {
              "code": "3",
              "message": "payee-disabled"
            },
            {
              "code": "3",
              "message": "payee-disabled"
            }
          ],
          "payableStatus": true,
          "paymentChannelId": "70faaff7-2c32-4b44-b27f-f0b6c484e6f3",
          "payorId": "ba08877f-9d96-41e4-9c26-44a872d856ae",
          "remoteId": "uniqueIdForRemoteEntity"
        },
        {
          "invitationStatus": "invitationStatus",
          "invitationStatusTimestamp": "2019-01-20T09:00:00Z",
          "payableIssues": [
            {
              "code": "3",
              "message": "payee-disabled"
            },
            {
              "code": "3",
              "message": "payee-disabled"
            }
          ],
          "payableStatus": true,
          "paymentChannelId": "70faaff7-2c32-4b44-b27f-f0b6c484e6f3",
          "payorId": "ba08877f-9d96-41e4-9c26-44a872d856ae",
          "remoteId": "uniqueIdForRemoteEntity"
        }
      ],
      "watchlistOverrideComment": "Example reason for the watchlist status being overridden",
      "watchlistStatus": "watchlistStatus",
      "watchlistStatusUpdatedTimestamp": "2019-01-20T09:00:00+00:00"
    },
    {
      "company": {
        "name": "ABC Group Plc",
        "operatingName": "ABC Co"
      },
      "country": "US",
      "created": "2019-01-20T09:00:00Z",
      "disabled": true,
      "disabledComment": "reason for disabled",
      "disabledUpdatedTimestamp": "2019-01-20T09:00:00Z",
      "displayName": "ABC",
      "email": "bob@example.com",
      "individual": {
        "name": {
          "firstName": "Bob",
          "lastName": "Smith",
          "otherNames": "H",
          "title": "Mr"
        }
      },
      "language": "en-US",
      "onboardedStatus": "onboardedStatus",
      "payeeId": "2aa5d7e0-2ecb-403f-8494-1865ed0454e9",
      "payeeType": "payeeType",
      "payorRefs": [
        {
          "invitationStatus": "invitationStatus",
          "invitationStatusTimestamp": "2019-01-20T09:00:00Z",
          "payableIssues": [
            {
              "code": "3",
              "message": "payee-disabled"
            },
            {
              "code": "3",
              "message": "payee-disabled"
            }
          ],
          "payableStatus": true,
          "paymentChannelId": "70faaff7-2c32-4b44-b27f-f0b6c484e6f3",
          "payorId": "ba08877f-9d96-41e4-9c26-44a872d856ae",
          "remoteId": "uniqueIdForRemoteEntity"
        },
        {
          "invitationStatus": "invitationStatus",
          "invitationStatusTimestamp": "2019-01-20T09:00:00Z",
          "payableIssues": [
            {
              "code": "3",
              "message": "payee-disabled"
            },
            {
              "code": "3",
              "message": "payee-disabled"
            }
          ],
          "payableStatus": true,
          "paymentChannelId": "70faaff7-2c32-4b44-b27f-f0b6c484e6f3",
          "payorId": "ba08877f-9d96-41e4-9c26-44a872d856ae",
          "remoteId": "uniqueIdForRemoteEntity"
        }
      ],
      "watchlistOverrideComment": "Example reason for the watchlist status being overridden",
      "watchlistStatus": "watchlistStatus",
      "watchlistStatusUpdatedTimestamp": "2019-01-20T09:00:00+00:00"
    }
  ],
  "links": [
    {
      "href": "href",
      "rel": "rel"
    },
    {
      "href": "href",
      "rel": "rel"
    }
  ],
  "page": {
    "numberOfElements": 10,
    "page": 10,
    "pageSize": 10,
    "totalElements": 10,
    "totalPages": 10
  },
  "summary": {
    "totalInvitedCount": 10,
    "totalOnboardedCount": 10,
    "totalPayeesCount": 10,
    "totalRegisteredCount": 10,
    "totalWatchlistFailedCount": 0
  }
}
```

> 400 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 400
}
```

> 401 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 401
}
```

> 403 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 403
}
```

> 404 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 404
}
```

<h3 id="list-payees-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Details of Payee|[PagedPayeeResponseV3](#schemapagedpayeeresponsev3)|
|400|Bad Request|Invalid request. See Error message payload for details of failure|[inline_response_400](#schemainline_response_400)|
|401|Unauthorized|Invalid access token. May be expired or invalid|[inline_response_401](#schemainline_response_401)|
|403|Forbidden|The authentication does not have permissions to access the resource<br>This usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions<br>|[inline_response_403](#schemainline_response_403)|
|404|Not Found|The resource was not found or is no longer available<br>|[inline_response_404](#schemainline_response_404)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## List Payee Changes

<a id="opIdlistPayeeChangesV3"></a>

> Code samples

```bash
curl 'https://example.com/v3/payees/deltas?payorId=497f6eca-6276-4993-bfeb-53cbbbba6f08&updatedSince=1970-01-01T00%3A00%3A00Z' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v3/payees/deltas`

<aside class="warning">
This operation is deprecated
</aside>

<p>Use v4 instead</p>
<p>Get a paginated response listing payee changes.</p>


<h3 id="list-payee-changes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|payorId|query|string(uuid)|true|The Payor ID to find associated Payees|
|updatedSince|query|string(date-time)|true|The updatedSince filter in the format YYYY-MM-DDThh:mm:ss+hh:mm|
|page|query|integer(int32)|false|Page number. Default is 1.|
|pageSize|query|integer(int32)|false|Page size. Default is 100. Max allowable is 1000.|

> Example responses

> 200 Response

```json
{
  "content": [
    {
      "dbaName": "Payee DBA Name",
      "displayName": "Payee1",
      "email": "payee1@example.com",
      "onboardedStatus": "onboardedStatus",
      "payeeCountry": "US",
      "payeeId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "remoteId": "payee_1"
    },
    {
      "dbaName": "Payee DBA Name",
      "displayName": "Payee1",
      "email": "payee1@example.com",
      "onboardedStatus": "onboardedStatus",
      "payeeCountry": "US",
      "payeeId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "remoteId": "payee_1"
    }
  ],
  "links": [
    {
      "href": "http://api.sandbox.velopayments.com/v3/payees/deltas?payorId=0a818933-087d-47f2-ad83-2f986ed087eb&updatedSince=2019-01-20T09:00:00+00:00&page=1&pageSize=1000",
      "rel": "first"
    },
    {
      "href": "http://api.sandbox.velopayments.com/v3/payees/deltas?payorId=0a818933-087d-47f2-ad83-2f986ed087eb&updatedSince=2019-01-20T09:00:00+00:00&page=1&pageSize=1000",
      "rel": "first"
    }
  ],
  "page": {
    "numberOfElements": 2,
    "page": 1,
    "pageSize": 25,
    "totalElements": 2,
    "totalPages": 1
  }
}
```

<h3 id="list-payee-changes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Details of Payee Changes|[PayeeDeltaResponseV3](#schemapayeedeltaresponsev3)|
|400|Bad Request|Bad Request|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Get Payee by Id

<a id="opIdgetPayeeByIdV3"></a>

> Code samples

```bash
curl https://example.com/v3/payees/2aa5d7e0-2ecb-403f-8494-1865ed0454e9 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v3/payees/{payeeId}`

<aside class="warning">
This operation is deprecated
</aside>

<p>Use v4 instead</p>
<p>Get Payee by Id</p>


<h3 id="get-payee-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|payeeId|path|string(uuid)|true|The UUID of the payee.|
|sensitive|query|boolean|false|Optional. If omitted or set to false, any Personal Identifiable Information (PII) values are returned masked.<br>If set to true, and you have permission, the PII values will be returned as their original unmasked values.<br>|

> Example responses

> 200 Response

```json
{
  "acceptTermsAndConditionsTimestamp": "2019-01-20T09:00:00Z",
  "address": {
    "city": "Key West",
    "country": "US",
    "countyOrProvince": "FL",
    "line1": "500 Duval St",
    "line2": "line2",
    "line3": "line3",
    "line4": "line4",
    "zipOrPostcode": "33945"
  },
  "cellphoneNumber": "1234567890",
  "challenge": {
    "description": "challenge description",
    "value": "challenge test"
  },
  "company": {
    "name": "ABC Group Plc",
    "operatingName": "ABC Co",
    "taxId": "123123123"
  },
  "country": "US",
  "created": "2019-01-20T09:00:00Z",
  "disabled": true,
  "disabledComment": "reason for disabled",
  "disabledUpdatedTimestamp": "2019-01-20T09:00:00Z",
  "displayName": "Bob",
  "email": "bob@example.com",
  "enhancedKycCompleted": true,
  "gracePeriodEndDate": "2019-01-20T00:00:00.000+0000",
  "individual": {
    "dateOfBirth": "1985-01-01",
    "name": {
      "firstName": "Bob",
      "lastName": "Smith",
      "otherNames": "A",
      "title": "Mr"
    },
    "nationalIdentification": "AB123456C"
  },
  "kycCompletedTimestamp": "2019-01-20T09:00:00+00:00",
  "language": "en-US",
  "marketingOptInDecision": true,
  "marketingOptInTimestamp": "2019-01-20T09:00:00+00:00",
  "onboardedStatus": "onboardedStatus",
  "pausePayment": true,
  "pausePaymentTimestamp": "2019-01-20T09:00:00+00:00",
  "payeeId": "2aa5d7e0-2ecb-403f-8494-1865ed0454e9",
  "payeeType": "payeeType",
  "payorRefs": [
    {
      "invitationStatus": "invitationStatus",
      "invitationStatusTimestamp": "2019-01-20T09:00:00Z",
      "payableIssues": [
        {
          "code": "3",
          "message": "payee-disabled"
        },
        {
          "code": "3",
          "message": "payee-disabled"
        }
      ],
      "payableStatus": true,
      "paymentChannelId": "70faaff7-2c32-4b44-b27f-f0b6c484e6f3",
      "payorId": "ba08877f-9d96-41e4-9c26-44a872d856ae",
      "remoteId": "uniqueIdForRemoteEntity"
    },
    {
      "invitationStatus": "invitationStatus",
      "invitationStatusTimestamp": "2019-01-20T09:00:00Z",
      "payableIssues": [
        {
          "code": "3",
          "message": "payee-disabled"
        },
        {
          "code": "3",
          "message": "payee-disabled"
        }
      ],
      "payableStatus": true,
      "paymentChannelId": "70faaff7-2c32-4b44-b27f-f0b6c484e6f3",
      "payorId": "ba08877f-9d96-41e4-9c26-44a872d856ae",
      "remoteId": "uniqueIdForRemoteEntity"
    }
  ],
  "watchlistOverrideComment": "watchlist override comment",
  "watchlistOverrideExpiresAtTimestamp": "2019-01-20T09:00:00Z",
  "watchlistStatus": "watchlistStatus",
  "watchlistStatusUpdatedTimestamp": "2019-01-20T09:00:00+00:00"
}
```

<h3 id="get-payee-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success response, request completed okay|[PayeeDetailResponseV3](#schemapayeedetailresponsev3)|
|404|Not Found|Payee Not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Delete Payee by Id

<a id="opIddeletePayeeByIdV3"></a>

> Code samples

```bash
curl https://example.com/v3/payees/2aa5d7e0-2ecb-403f-8494-1865ed0454e9 \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v3/payees/{payeeId}`

<aside class="warning">
This operation is deprecated
</aside>

<p>Use v4 instead</p>
<p>This API will delete Payee by Id (UUID). Deletion by ID is not allowed if:</p>
<p>* Payee ID is not found</p>
<p>* If Payee has not been on-boarded</p>
<p>* If Payee is in grace period</p>
<p>* If Payee has existing payments</p>


<h3 id="delete-payee-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|payeeId|path|string(uuid)|true|The UUID of the payee.|

<h3 id="delete-payee-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content. Payee Id accepted for deletion.|None|
|400|Bad Request|Bad Request. Payee Id failed validation for deletion.|None|
|404|Not Found|Payee Id not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Update Payee Details

<a id="opIdpayeeDetailsUpdateV3"></a>

> Code samples

```bash
curl https://example.com/v3/payees/2aa5d7e0-2ecb-403f-8494-1865ed0454e9/payeeDetailsUpdate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "address": {
      "city": "Key West",
      "country": "US",
      "countyOrProvince": "FL",
      "line1": "500 Duval St",
      "line2": "line2",
      "line3": "line3",
      "line4": "line4",
      "zipOrPostcode": "33945"
    },
    "challenge": {
      "description": "challenge description",
      "value": "challenge test"
    },
    "company": {
      "name": "ABC Group Plc",
      "operatingName": "ABC Co",
      "taxId": "123123123"
    },
    "email": "bob@example.com",
    "individual": {
      "dateOfBirth": "1985-01-01",
      "name": {
        "firstName": "Bob",
        "lastName": "Smith",
        "otherNames": "A",
        "title": "Mr"
      },
      "nationalIdentification": "AB123456C"
    },
    "language": "en-US"
  }'
```

`POST /v3/payees/{payeeId}/payeeDetailsUpdate`

<aside class="warning">
This operation is deprecated
</aside>

<p>Use v4 instead</p>
<p>Update payee details for the given Payee Id.<p>


> Body parameter

```json
{
  "address": {
    "city": "Key West",
    "country": "US",
    "countyOrProvince": "FL",
    "line1": "500 Duval St",
    "line2": "line2",
    "line3": "line3",
    "line4": "line4",
    "zipOrPostcode": "33945"
  },
  "challenge": {
    "description": "challenge description",
    "value": "challenge test"
  },
  "company": {
    "name": "ABC Group Plc",
    "operatingName": "ABC Co",
    "taxId": "123123123"
  },
  "email": "bob@example.com",
  "individual": {
    "dateOfBirth": "1985-01-01",
    "name": {
      "firstName": "Bob",
      "lastName": "Smith",
      "otherNames": "A",
      "title": "Mr"
    },
    "nationalIdentification": "AB123456C"
  },
  "language": "en-US"
}
```

<h3 id="update-payee-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|payeeId|path|string(uuid)|true|The UUID of the payee.|
|body|body|[UpdatePayeeDetailsRequestV3](#schemaupdatepayeedetailsrequestv3)|true|Request to update payee details|
|» address|body|[PayeeAddressV3](#schemapayeeaddressv3)|false|none|
|» challenge|body|[ChallengeV3](#schemachallengev3)|false|none|
|» company|body|[CompanyV3](#schemacompanyv3)|false|none|
|» email|body|string(email) \| null|false|none|
|» individual|body|[IndividualV3](#schemaindividualv3)|false|none|
|» language|body|string|false|An IETF BCP 47 language code which has been configured for use within this Velo environment.<BR><br>See the /v1/supportedLanguages endpoint to list the available codes for an environment.<br>|
|» payeeType|body|[PayeeTypeEnum](#schemapayeetypeenum)|false|The type of the payee|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» payeeType|Individual|
|» payeeType|Company|

> Example responses

> 400 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 400
}
```

> 401 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 401
}
```

> 403 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 403
}
```

> 404 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 404
}
```

<h3 id="update-payee-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Request accepted|None|
|400|Bad Request|Invalid request. See Error message payload for details of failure|[inline_response_400](#schemainline_response_400)|
|401|Unauthorized|Invalid access token. May be expired or invalid|[inline_response_401](#schemainline_response_401)|
|403|Forbidden|The authentication does not have permissions to access the resource<br>This usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions<br>|[inline_response_403](#schemainline_response_403)|
|404|Not Found|The resource was not found or is no longer available<br>|[inline_response_404](#schemainline_response_404)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Update Payee Remote Id

> Code samples

```bash
curl https://example.com/v3/payees/2aa5d7e0-2ecb-403f-8494-1865ed0454e9/remoteIdUpdate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "payorId": "9ac75325-5dcd-42d5-b992-175d7e0a035e",
    "remoteId": "remoteId123"
  }'
```

`POST /v3/payees/{payeeId}/remoteIdUpdate`

<aside class="warning">
This operation is deprecated
</aside>

<p>Use v4 instead</p>
<p>Update the remote Id for the given Payee Id.</p>


> Body parameter

```json
{
  "payorId": "9ac75325-5dcd-42d5-b992-175d7e0a035e",
  "remoteId": "remoteId123"
}
```

<h3 id="update-payee-remote-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|payeeId|path|string(uuid)|true|The UUID of the payee.|
|body|body|[UpdateRemoteIdRequestV3](#schemaupdateremoteidrequestv3)|true|Request to update payee remote id v3|
|» payorId|body|string(uuid)|true|none|
|» remoteId|body|string|true|none|

> Example responses

> 400 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 400
}
```

> 401 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 401
}
```

> 403 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 403
}
```

> 404 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 404
}
```

> 409 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 409
}
```

<h3 id="update-payee-remote-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Accepted, No Content|None|
|400|Bad Request|Invalid request. See Error message payload for details of failure|[inline_response_400](#schemainline_response_400)|
|401|Unauthorized|Invalid access token. May be expired or invalid|[inline_response_401](#schemainline_response_401)|
|403|Forbidden|The authentication does not have permissions to access the resource<br>This usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions<br>|[inline_response_403](#schemainline_response_403)|
|404|Not Found|The resource was not found or is no longer available<br>|[inline_response_404](#schemainline_response_404)|
|409|Conflict|The request contained data that would result in a duplicate value<br>|[inline_response_409](#schemainline_response_409)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## List Payees

<a id="opIdlistPayeesV4"></a>

> Code samples

```bash
curl 'https://example.com/v4/payees?payorId=497f6eca-6276-4993-bfeb-53cbbbba6f08' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v4/payees`

Get a paginated response listing the payees for a payor.

<h3 id="list-payees-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|payorId|query|string(uuid)|true|The account owner Payor ID|
|watchlistStatus|query|[WatchlistStatusV3](#schemawatchliststatusv3)|false|The watchlistStatus of the payees.|
|disabled|query|boolean|false|Payee disabled|
|onboardedStatus|query|[OnboardedStatusV4](#schemaonboardedstatusv4)|false|The onboarded status of the payees.|
|email|query|string(email)|false|Email address|
|displayName|query|string|false|The display name of the payees.|
|remoteId|query|string|false|The remote id of the payees.|
|payeeType|query|[PayeeType_2](#schemapayeetype_2)|false|The onboarded status of the payees.|
|payeeCountry|query|string|false|The country of the payee - 2 letter ISO 3166-1 country code (upper case)|
|ofacStatus|query|[OfacStatusV4](#schemaofacstatusv4)|false|The ofacStatus of the payees.|
|page|query|integer(int32)|false|Page number. Default is 1.|
|pageSize|query|integer(int32)|false|Page size. Default is 25. Max allowable is 100.|
|sort|query|string|false|List of sort fields (e.g. ?sort=onboardedStatus:asc,name:asc) Default is name:asc 'name' is treated as company name for companies - last name + ',' + firstName for individuals The supported sort fields are - payeeId, displayName, payoutStatus, onboardedStatus.<br>|

> Example responses

> 200 Response

```json
{
  "content": [
    {
      "company": {
        "name": "ABC Group Plc",
        "operatingName": "ABC Co"
      },
      "country": "US",
      "created": "2019-01-20T09:00:00Z",
      "disabled": true,
      "disabledComment": "reason for disabled",
      "disabledUpdatedTimestamp": "2019-01-20T09:00:00Z",
      "displayName": "ABC",
      "email": "bob@example.com",
      "individual": {
        "name": {
          "firstName": "Bob",
          "lastName": "Smith",
          "otherNames": "H",
          "title": "Mr"
        }
      },
      "language": "en-US",
      "onboardedStatus": "onboardedStatus",
      "payeeId": "2aa5d7e0-2ecb-403f-8494-1865ed0454e9",
      "payeeType": "payeeType",
      "payorRefs": [
        {
          "invitationStatus": "invitationStatus",
          "invitationStatusTimestamp": "2019-01-20T09:00:00Z",
          "payableIssues": [
            {
              "code": "3",
              "message": "payee-disabled"
            },
            {
              "code": "3",
              "message": "payee-disabled"
            }
          ],
          "payableStatus": true,
          "paymentChannelId": "70faaff7-2c32-4b44-b27f-f0b6c484e6f3",
          "payorId": "ba08877f-9d96-41e4-9c26-44a872d856ae",
          "remoteId": "uniqueIdForRemoteEntity"
        },
        {
          "invitationStatus": "invitationStatus",
          "invitationStatusTimestamp": "2019-01-20T09:00:00Z",
          "payableIssues": [
            {
              "code": "3",
              "message": "payee-disabled"
            },
            {
              "code": "3",
              "message": "payee-disabled"
            }
          ],
          "payableStatus": true,
          "paymentChannelId": "70faaff7-2c32-4b44-b27f-f0b6c484e6f3",
          "payorId": "ba08877f-9d96-41e4-9c26-44a872d856ae",
          "remoteId": "uniqueIdForRemoteEntity"
        }
      ],
      "watchlistOverrideComment": "Example reason for the watchlist status being overridden",
      "watchlistStatus": "watchlistStatus",
      "watchlistStatusUpdatedTimestamp": "2019-01-20T09:00:00+00:00"
    },
    {
      "company": {
        "name": "ABC Group Plc",
        "operatingName": "ABC Co"
      },
      "country": "US",
      "created": "2019-01-20T09:00:00Z",
      "disabled": true,
      "disabledComment": "reason for disabled",
      "disabledUpdatedTimestamp": "2019-01-20T09:00:00Z",
      "displayName": "ABC",
      "email": "bob@example.com",
      "individual": {
        "name": {
          "firstName": "Bob",
          "lastName": "Smith",
          "otherNames": "H",
          "title": "Mr"
        }
      },
      "language": "en-US",
      "onboardedStatus": "onboardedStatus",
      "payeeId": "2aa5d7e0-2ecb-403f-8494-1865ed0454e9",
      "payeeType": "payeeType",
      "payorRefs": [
        {
          "invitationStatus": "invitationStatus",
          "invitationStatusTimestamp": "2019-01-20T09:00:00Z",
          "payableIssues": [
            {
              "code": "3",
              "message": "payee-disabled"
            },
            {
              "code": "3",
              "message": "payee-disabled"
            }
          ],
          "payableStatus": true,
          "paymentChannelId": "70faaff7-2c32-4b44-b27f-f0b6c484e6f3",
          "payorId": "ba08877f-9d96-41e4-9c26-44a872d856ae",
          "remoteId": "uniqueIdForRemoteEntity"
        },
        {
          "invitationStatus": "invitationStatus",
          "invitationStatusTimestamp": "2019-01-20T09:00:00Z",
          "payableIssues": [
            {
              "code": "3",
              "message": "payee-disabled"
            },
            {
              "code": "3",
              "message": "payee-disabled"
            }
          ],
          "payableStatus": true,
          "paymentChannelId": "70faaff7-2c32-4b44-b27f-f0b6c484e6f3",
          "payorId": "ba08877f-9d96-41e4-9c26-44a872d856ae",
          "remoteId": "uniqueIdForRemoteEntity"
        }
      ],
      "watchlistOverrideComment": "Example reason for the watchlist status being overridden",
      "watchlistStatus": "watchlistStatus",
      "watchlistStatusUpdatedTimestamp": "2019-01-20T09:00:00+00:00"
    }
  ],
  "links": [
    {
      "href": "href",
      "rel": "rel"
    },
    {
      "href": "href",
      "rel": "rel"
    }
  ],
  "page": {
    "numberOfElements": 10,
    "page": 10,
    "pageSize": 10,
    "totalElements": 10,
    "totalPages": 10
  },
  "summary": {
    "totalInvitedCount": 10,
    "totalOnboardedCount": 10,
    "totalPayeesCount": 10,
    "totalRegisteredCount": 10,
    "totalWatchlistFailedCount": 0
  }
}
```

> 400 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 400
}
```

> 401 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 401
}
```

> 403 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 403
}
```

> 404 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 404
}
```

<h3 id="list-payees-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Details of Payee|[PagedPayeeResponseV4](#schemapagedpayeeresponsev4)|
|400|Bad Request|Invalid request. See Error message payload for details of failure|[inline_response_400](#schemainline_response_400)|
|401|Unauthorized|Invalid access token. May be expired or invalid|[inline_response_401](#schemainline_response_401)|
|403|Forbidden|The authentication does not have permissions to access the resource<br>This usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions<br>|[inline_response_403](#schemainline_response_403)|
|404|Not Found|The resource was not found or is no longer available<br>|[inline_response_404](#schemainline_response_404)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## List Payee Changes

<a id="opIdlistPayeeChangesV4"></a>

> Code samples

```bash
curl 'https://example.com/v4/payees/deltas?payorId=497f6eca-6276-4993-bfeb-53cbbbba6f08&updatedSince=1970-01-01T00%3A00%3A00Z' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v4/payees/deltas`

Get a paginated response listing payee changes (updated since a particular time) to a limited set of fields:
- dbaName
- displayName
- email
- onboardedStatus
- payeeCountry
- payeeId
- remoteId


<h3 id="list-payee-changes-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|payorId|query|string(uuid)|true|The Payor ID to find associated Payees|
|updatedSince|query|string(date-time)|true|The updatedSince filter in the format YYYY-MM-DDThh:mm:ss+hh:mm|
|page|query|integer(int32)|false|Page number. Default is 1.|
|pageSize|query|integer(int32)|false|Page size. Default is 100. Max allowable is 1000.|

> Example responses

> 200 Response

```json
{
  "content": [
    {
      "dbaName": "Payee DBA Name",
      "displayName": "Payee1",
      "email": "payee1@example.com",
      "onboardedStatus": "onboardedStatus",
      "payeeCountry": "US",
      "payeeId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "remoteId": "payee_1"
    },
    {
      "dbaName": "Payee DBA Name",
      "displayName": "Payee1",
      "email": "payee1@example.com",
      "onboardedStatus": "onboardedStatus",
      "payeeCountry": "US",
      "payeeId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "remoteId": "payee_1"
    }
  ],
  "links": [
    {
      "href": "http://api.sandbox.velopayments.com/v4/payees/deltas?payorId=0a818933-087d-47f2-ad83-2f986ed087eb&updatedSince=2019-01-20T09:00:00+00:00&page=1&pageSize=1000",
      "rel": "first"
    },
    {
      "href": "http://api.sandbox.velopayments.com/v4/payees/deltas?payorId=0a818933-087d-47f2-ad83-2f986ed087eb&updatedSince=2019-01-20T09:00:00+00:00&page=1&pageSize=1000",
      "rel": "first"
    }
  ],
  "page": {
    "numberOfElements": 2,
    "page": 1,
    "pageSize": 25,
    "totalElements": 2,
    "totalPages": 1
  }
}
```

<h3 id="list-payee-changes-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Details of Payee Changes|[PayeeDeltaResponseV4](#schemapayeedeltaresponsev4)|
|400|Bad Request|Bad Request|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Get Payee by Id

<a id="opIdgetPayeeByIdV4"></a>

> Code samples

```bash
curl https://example.com/v4/payees/2aa5d7e0-2ecb-403f-8494-1865ed0454e9 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v4/payees/{payeeId}`

Get Payee by Id

<h3 id="get-payee-by-id-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|payeeId|path|string(uuid)|true|The UUID of the payee.|
|sensitive|query|boolean|false|Optional. If omitted or set to false, any Personal Identifiable Information (PII) values are returned masked.<br>If set to true, and you have permission, the PII values will be returned as their original unmasked values.<br>|

> Example responses

> 200 Response

```json
{
  "acceptTermsAndConditionsTimestamp": "2019-01-20T09:00:00Z",
  "address": {
    "city": "Key West",
    "country": "US",
    "countyOrProvince": "FL",
    "line1": "500 Duval St",
    "line2": "line2",
    "line3": "line3",
    "line4": "line4",
    "zipOrPostcode": "33945"
  },
  "cellphoneNumber": "1234567890",
  "challenge": {
    "description": "challenge description",
    "value": "11984567"
  },
  "company": {
    "name": "ABC Group Plc",
    "operatingName": "ABC Co",
    "taxId": "123123123"
  },
  "country": "US",
  "created": "2019-01-20T09:00:00Z",
  "disabled": true,
  "disabledComment": "reason for disabled",
  "disabledUpdatedTimestamp": "2019-01-20T09:00:00Z",
  "displayName": "Bob",
  "email": "bob@example.com",
  "enhancedKycCompleted": true,
  "gracePeriodEndDate": "2019-01-20T00:00:00.000+0000",
  "individual": {
    "dateOfBirth": "1985-01-01",
    "name": {
      "firstName": "Bob",
      "lastName": "Smith",
      "otherNames": "A",
      "title": "Mr"
    },
    "nationalIdentification": "AB123456C"
  },
  "kycCompletedTimestamp": "2019-01-20T09:00:00+00:00",
  "language": "en-US",
  "marketingOptInDecision": true,
  "marketingOptInTimestamp": "2019-01-20T09:00:00+00:00",
  "onboardedStatus": "onboardedStatus",
  "pausePayment": true,
  "pausePaymentTimestamp": "2019-01-20T09:00:00+00:00",
  "payeeId": "2aa5d7e0-2ecb-403f-8494-1865ed0454e9",
  "payeeType": "payeeType",
  "payorRefs": [
    {
      "invitationStatus": "invitationStatus",
      "invitationStatusTimestamp": "2019-01-20T09:00:00Z",
      "payableIssues": [
        {
          "code": "3",
          "message": "payee-disabled"
        },
        {
          "code": "3",
          "message": "payee-disabled"
        }
      ],
      "payableStatus": true,
      "paymentChannelId": "70faaff7-2c32-4b44-b27f-f0b6c484e6f3",
      "payorId": "ba08877f-9d96-41e4-9c26-44a872d856ae",
      "remoteId": "uniqueIdForRemoteEntity"
    },
    {
      "invitationStatus": "invitationStatus",
      "invitationStatusTimestamp": "2019-01-20T09:00:00Z",
      "payableIssues": [
        {
          "code": "3",
          "message": "payee-disabled"
        },
        {
          "code": "3",
          "message": "payee-disabled"
        }
      ],
      "payableStatus": true,
      "paymentChannelId": "70faaff7-2c32-4b44-b27f-f0b6c484e6f3",
      "payorId": "ba08877f-9d96-41e4-9c26-44a872d856ae",
      "remoteId": "uniqueIdForRemoteEntity"
    }
  ],
  "watchlistOverrideComment": "watchlist override comment",
  "watchlistOverrideExpiresAtTimestamp": "2019-01-20T09:00:00Z",
  "watchlistStatus": "watchlistStatus",
  "watchlistStatusUpdatedTimestamp": "2019-01-20T09:00:00+00:00"
}
```

<h3 id="get-payee-by-id-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success response, request completed okay|[PayeeDetailResponseV4](#schemapayeedetailresponsev4)|
|404|Not Found|Payee Not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Delete Payee by Id

<a id="opIddeletePayeeByIdV4"></a>

> Code samples

```bash
curl https://example.com/v4/payees/2aa5d7e0-2ecb-403f-8494-1865ed0454e9 \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v4/payees/{payeeId}`

<p>This API will delete Payee by Id (UUID). Deletion by ID is not allowed if:</p>
<p>* Payee ID is not found</p>
<p>* If Payee has not been on-boarded</p>
<p>* If Payee is in grace period</p>
<p>* If Payee has existing payments</p>


<h3 id="delete-payee-by-id-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|payeeId|path|string(uuid)|true|The UUID of the payee.|

<h3 id="delete-payee-by-id-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content. Payee Id accepted for deletion.|None|
|400|Bad Request|Bad Request. Payee Id failed validation for deletion.|None|
|404|Not Found|Payee Id not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Update Payee Details

<a id="opIdpayeeDetailsUpdateV4"></a>

> Code samples

```bash
curl https://example.com/v4/payees/2aa5d7e0-2ecb-403f-8494-1865ed0454e9/payeeDetailsUpdate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "address": {
      "city": "Key West",
      "country": "US",
      "countyOrProvince": "FL",
      "line1": "500 Duval St",
      "line2": "line2",
      "line3": "line3",
      "line4": "line4",
      "zipOrPostcode": "33945"
    },
    "challenge": {
      "description": "challenge description",
      "value": "11984567"
    },
    "company": {
      "name": "ABC Group Plc",
      "operatingName": "ABC Co",
      "taxId": "123123123"
    },
    "contactSmsNumber": "11235555555",
    "email": "bob@example.com",
    "individual": {
      "dateOfBirth": "1985-01-01",
      "name": {
        "firstName": "Bob",
        "lastName": "Smith",
        "otherNames": "A",
        "title": "Mr"
      },
      "nationalIdentification": "AB123456C"
    },
    "language": "en-US"
  }'
```

`POST /v4/payees/{payeeId}/payeeDetailsUpdate`

<p>Update payee details for the given Payee Id.</p>
<p>Payors may only update the payee details if the payee has not yet onboarded</p>


> Body parameter

```json
{
  "address": {
    "city": "Key West",
    "country": "US",
    "countyOrProvince": "FL",
    "line1": "500 Duval St",
    "line2": "line2",
    "line3": "line3",
    "line4": "line4",
    "zipOrPostcode": "33945"
  },
  "challenge": {
    "description": "challenge description",
    "value": "11984567"
  },
  "company": {
    "name": "ABC Group Plc",
    "operatingName": "ABC Co",
    "taxId": "123123123"
  },
  "contactSmsNumber": "11235555555",
  "email": "bob@example.com",
  "individual": {
    "dateOfBirth": "1985-01-01",
    "name": {
      "firstName": "Bob",
      "lastName": "Smith",
      "otherNames": "A",
      "title": "Mr"
    },
    "nationalIdentification": "AB123456C"
  },
  "language": "en-US"
}
```

<h3 id="update-payee-details-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|payeeId|path|string(uuid)|true|The UUID of the payee.|
|body|body|[UpdatePayeeDetailsRequestV4](#schemaupdatepayeedetailsrequestv4)|true|Request to update payee details|
|» address|body|[PayeeAddressV4](#schemapayeeaddressv4)|false|none|
|» challenge|body|[ChallengeV4](#schemachallengev4)|false|<p>Used to override the default challenge presented to the payee when they onboard</p><br><p>Not used after the payee has onboarded</p><br>|
|» company|body|[CompanyV4](#schemacompanyv4)|false|none|
|» contactSmsNumber|body|string|false|The phone number of a device that the payee wishes to receive sms messages on<br>|
|» email|body|string(email) \| null|false|none|
|» individual|body|[IndividualV4](#schemaindividualv4)|false|none|
|» language|body|string|false|An IETF BCP 47 language code which has been configured for use within this Velo environment.<BR><br>See the /v1/supportedLanguages endpoint to list the available codes for an environment.<br>|
|» payeeType|body|[PayeeTypeEnum](#schemapayeetypeenum)|false|The type of the payee|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» payeeType|Individual|
|» payeeType|Company|

> Example responses

> 400 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 400
}
```

> 401 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 401
}
```

> 403 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 403
}
```

> 404 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 404
}
```

<h3 id="update-payee-details-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Request accepted|None|
|400|Bad Request|Invalid request. See Error message payload for details of failure|[inline_response_400](#schemainline_response_400)|
|401|Unauthorized|Invalid access token. May be expired or invalid|[inline_response_401](#schemainline_response_401)|
|403|Forbidden|The authentication does not have permissions to access the resource<br>This usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions<br>|[inline_response_403](#schemainline_response_403)|
|404|Not Found|The resource was not found or is no longer available<br>|[inline_response_404](#schemainline_response_404)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Update Payee Remote Id

> Code samples

```bash
curl https://example.com/v4/payees/2aa5d7e0-2ecb-403f-8494-1865ed0454e9/remoteIdUpdate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "payorId": "9ac75325-5dcd-42d5-b992-175d7e0a035e",
    "remoteId": "remoteId123"
  }'
```

`POST /v4/payees/{payeeId}/remoteIdUpdate`

<p>Update the remote Id for the given Payee Id.</p>


> Body parameter

```json
{
  "payorId": "9ac75325-5dcd-42d5-b992-175d7e0a035e",
  "remoteId": "remoteId123"
}
```

<h3 id="update-payee-remote-id-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|payeeId|path|string(uuid)|true|The UUID of the payee.|
|body|body|[UpdateRemoteIdRequestV4](#schemaupdateremoteidrequestv4)|true|Request to update payee remote id v4|
|» payorId|body|string(uuid)|true|none|
|» remoteId|body|string|true|none|

> Example responses

> 400 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 400
}
```

> 401 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 401
}
```

> 403 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 403
}
```

> 404 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 404
}
```

> 409 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 409
}
```

<h3 id="update-payee-remote-id-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Accepted, No Content|None|
|400|Bad Request|Invalid request. See Error message payload for details of failure|[inline_response_400](#schemainline_response_400)|
|401|Unauthorized|Invalid access token. May be expired or invalid|[inline_response_401](#schemainline_response_401)|
|403|Forbidden|The authentication does not have permissions to access the resource<br>This usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions<br>|[inline_response_403](#schemainline_response_403)|
|404|Not Found|The resource was not found or is no longer available<br>|[inline_response_404](#schemainline_response_404)|
|409|Conflict|The request contained data that would result in a duplicate value<br>|[inline_response_409](#schemainline_response_409)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

<h1 id="velo-payments-apis-payee-invitation">Payee Invitation</h1>

Payee invitation is a process of inviting individual payees to the Velo platform. In this sction you will find APIs for working with Payee Invitations.

## Initiate Payee Creation

<a id="opIdcreatePayeeV3"></a>

> Code samples

```bash
curl https://example.com/v3/payees \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "payees": [
      {
        "address": {
          "city": "Key West",
          "country": "US",
          "countyOrProvince": "FL",
          "line1": "500 Duval St",
          "line2": "line2",
          "line3": "line3",
          "line4": "line4",
          "zipOrPostcode": "33945"
        },
        "challenge": {
          "description": "challenge description",
          "value": "challenge test"
        },
        "company": {
          "name": "ABC Group Plc",
          "operatingName": "ABC Co",
          "taxId": "123123123"
        },
        "email": "bob@example.com",
        "individual": {
          "dateOfBirth": "1970-05-20T00:00:00.000+0000",
          "name": {
            "firstName": "Bob",
            "lastName": "Smith",
            "otherNames": "H",
            "title": "Mr"
          },
          "nationalIdentification": "SA211123K"
        },
        "language": "en-US",
        "payeeId": "2aa5d7e0-2ecb-403f-8494-1865ed0454e9",
        "paymentChannel": {
          "accountName": "My account",
          "accountNumber": "XXXXXX5678",
          "countryCode": "US",
          "currency": "USD",
          "iban": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX1234",
          "paymentChannelName": "My Payment Channel",
          "routingNumber": "XXXXX6789"
        },
        "payorRefs": [
          {
            "invitationStatus": "invitationStatus",
            "invitationStatusTimestamp": "2019-01-20T09:00:00Z",
            "payableIssues": [
              {
                "code": "3",
                "message": "payee-disabled"
              },
              {
                "code": "3",
                "message": "payee-disabled"
              }
            ],
            "payableStatus": true,
            "paymentChannelId": "70faaff7-2c32-4b44-b27f-f0b6c484e6f3",
            "payorId": "ba08877f-9d96-41e4-9c26-44a872d856ae",
            "remoteId": "uniqueIdForRemoteEntity"
          },
          {
            "invitationStatus": "invitationStatus",
            "invitationStatusTimestamp": "2019-01-20T09:00:00Z",
            "payableIssues": [
              {
                "code": "3",
                "message": "payee-disabled"
              },
              {
                "code": "3",
                "message": "payee-disabled"
              }
            ],
            "payableStatus": true,
            "paymentChannelId": "70faaff7-2c32-4b44-b27f-f0b6c484e6f3",
            "payorId": "ba08877f-9d96-41e4-9c26-44a872d856ae",
            "remoteId": "uniqueIdForRemoteEntity"
          }
        ],
        "remoteId": "Remote ID",
        "type": "type"
      },
      {
        "address": {
          "city": "Key West",
          "country": "US",
          "countyOrProvince": "FL",
          "line1": "500 Duval St",
          "line2": "line2",
          "line3": "line3",
          "line4": "line4",
          "zipOrPostcode": "33945"
        },
        "challenge": {
          "description": "challenge description",
          "value": "challenge test"
        },
        "company": {
          "name": "ABC Group Plc",
          "operatingName": "ABC Co",
          "taxId": "123123123"
        },
        "email": "bob@example.com",
        "individual": {
          "dateOfBirth": "1970-05-20T00:00:00.000+0000",
          "name": {
            "firstName": "Bob",
            "lastName": "Smith",
            "otherNames": "H",
            "title": "Mr"
          },
          "nationalIdentification": "SA211123K"
        },
        "language": "en-US",
        "payeeId": "2aa5d7e0-2ecb-403f-8494-1865ed0454e9",
        "paymentChannel": {
          "accountName": "My account",
          "accountNumber": "XXXXXX5678",
          "countryCode": "US",
          "currency": "USD",
          "iban": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX1234",
          "paymentChannelName": "My Payment Channel",
          "routingNumber": "XXXXX6789"
        },
        "payorRefs": [
          {
            "invitationStatus": "invitationStatus",
            "invitationStatusTimestamp": "2019-01-20T09:00:00Z",
            "payableIssues": [
              {
                "code": "3",
                "message": "payee-disabled"
              },
              {
                "code": "3",
                "message": "payee-disabled"
              }
            ],
            "payableStatus": true,
            "paymentChannelId": "70faaff7-2c32-4b44-b27f-f0b6c484e6f3",
            "payorId": "ba08877f-9d96-41e4-9c26-44a872d856ae",
            "remoteId": "uniqueIdForRemoteEntity"
          },
          {
            "invitationStatus": "invitationStatus",
            "invitationStatusTimestamp": "2019-01-20T09:00:00Z",
            "payableIssues": [
              {
                "code": "3",
                "message": "payee-disabled"
              },
              {
                "code": "3",
                "message": "payee-disabled"
              }
            ],
            "payableStatus": true,
            "paymentChannelId": "70faaff7-2c32-4b44-b27f-f0b6c484e6f3",
            "payorId": "ba08877f-9d96-41e4-9c26-44a872d856ae",
            "remoteId": "uniqueIdForRemoteEntity"
          }
        ],
        "remoteId": "Remote ID",
        "type": "type"
      }
    ],
    "payorId": "9ac75325-5dcd-42d5-b992-175d7e0a035e"
  }'
```

`POST /v3/payees`

<aside class="warning">
This operation is deprecated
</aside>

<p>Use v4 instead</p>
Initiate the process of creating 1 to 2000 payees in a batch Use the response location header to query
for status (201 - Created, 400 - invalid request body. In addition to standard semantic validations, a
400 will also result if there is a duplicate remote id within the batch / if there is a duplicate email
within the batch, i.e. if there is a conflict between the data provided for one payee within the batch and
that provided for another payee within the same batch). The validation at this stage is intra-batch only.
Validation against payees who have already been invited occurs subsequently during processing of the batch.


> Body parameter

```json
{
  "payees": [
    {
      "address": {
        "city": "Key West",
        "country": "US",
        "countyOrProvince": "FL",
        "line1": "500 Duval St",
        "line2": "line2",
        "line3": "line3",
        "line4": "line4",
        "zipOrPostcode": "33945"
      },
      "challenge": {
        "description": "challenge description",
        "value": "challenge test"
      },
      "company": {
        "name": "ABC Group Plc",
        "operatingName": "ABC Co",
        "taxId": "123123123"
      },
      "email": "bob@example.com",
      "individual": {
        "dateOfBirth": "1970-05-20T00:00:00.000+0000",
        "name": {
          "firstName": "Bob",
          "lastName": "Smith",
          "otherNames": "H",
          "title": "Mr"
        },
        "nationalIdentification": "SA211123K"
      },
      "language": "en-US",
      "payeeId": "2aa5d7e0-2ecb-403f-8494-1865ed0454e9",
      "paymentChannel": {
        "accountName": "My account",
        "accountNumber": "XXXXXX5678",
        "countryCode": "US",
        "currency": "USD",
        "iban": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX1234",
        "paymentChannelName": "My Payment Channel",
        "routingNumber": "XXXXX6789"
      },
      "payorRefs": [
        {
          "invitationStatus": "invitationStatus",
          "invitationStatusTimestamp": "2019-01-20T09:00:00Z",
          "payableIssues": [
            {
              "code": "3",
              "message": "payee-disabled"
            },
            {
              "code": "3",
              "message": "payee-disabled"
            }
          ],
          "payableStatus": true,
          "paymentChannelId": "70faaff7-2c32-4b44-b27f-f0b6c484e6f3",
          "payorId": "ba08877f-9d96-41e4-9c26-44a872d856ae",
          "remoteId": "uniqueIdForRemoteEntity"
        },
        {
          "invitationStatus": "invitationStatus",
          "invitationStatusTimestamp": "2019-01-20T09:00:00Z",
          "payableIssues": [
            {
              "code": "3",
              "message": "payee-disabled"
            },
            {
              "code": "3",
              "message": "payee-disabled"
            }
          ],
          "payableStatus": true,
          "paymentChannelId": "70faaff7-2c32-4b44-b27f-f0b6c484e6f3",
          "payorId": "ba08877f-9d96-41e4-9c26-44a872d856ae",
          "remoteId": "uniqueIdForRemoteEntity"
        }
      ],
      "remoteId": "Remote ID",
      "type": "type"
    },
    {
      "address": {
        "city": "Key West",
        "country": "US",
        "countyOrProvince": "FL",
        "line1": "500 Duval St",
        "line2": "line2",
        "line3": "line3",
        "line4": "line4",
        "zipOrPostcode": "33945"
      },
      "challenge": {
        "description": "challenge description",
        "value": "challenge test"
      },
      "company": {
        "name": "ABC Group Plc",
        "operatingName": "ABC Co",
        "taxId": "123123123"
      },
      "email": "bob@example.com",
      "individual": {
        "dateOfBirth": "1970-05-20T00:00:00.000+0000",
        "name": {
          "firstName": "Bob",
          "lastName": "Smith",
          "otherNames": "H",
          "title": "Mr"
        },
        "nationalIdentification": "SA211123K"
      },
      "language": "en-US",
      "payeeId": "2aa5d7e0-2ecb-403f-8494-1865ed0454e9",
      "paymentChannel": {
        "accountName": "My account",
        "accountNumber": "XXXXXX5678",
        "countryCode": "US",
        "currency": "USD",
        "iban": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX1234",
        "paymentChannelName": "My Payment Channel",
        "routingNumber": "XXXXX6789"
      },
      "payorRefs": [
        {
          "invitationStatus": "invitationStatus",
          "invitationStatusTimestamp": "2019-01-20T09:00:00Z",
          "payableIssues": [
            {
              "code": "3",
              "message": "payee-disabled"
            },
            {
              "code": "3",
              "message": "payee-disabled"
            }
          ],
          "payableStatus": true,
          "paymentChannelId": "70faaff7-2c32-4b44-b27f-f0b6c484e6f3",
          "payorId": "ba08877f-9d96-41e4-9c26-44a872d856ae",
          "remoteId": "uniqueIdForRemoteEntity"
        },
        {
          "invitationStatus": "invitationStatus",
          "invitationStatusTimestamp": "2019-01-20T09:00:00Z",
          "payableIssues": [
            {
              "code": "3",
              "message": "payee-disabled"
            },
            {
              "code": "3",
              "message": "payee-disabled"
            }
          ],
          "payableStatus": true,
          "paymentChannelId": "70faaff7-2c32-4b44-b27f-f0b6c484e6f3",
          "payorId": "ba08877f-9d96-41e4-9c26-44a872d856ae",
          "remoteId": "uniqueIdForRemoteEntity"
        }
      ],
      "remoteId": "Remote ID",
      "type": "type"
    }
  ],
  "payorId": "9ac75325-5dcd-42d5-b992-175d7e0a035e"
}
```

<h3 id="initiate-payee-creation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreatePayeesRequestV3](#schemacreatepayeesrequestv3)|false|Post payees to create.|
|» payees|body|[[CreatePayeeV3](#schemacreatepayeev3)]|true|none|
|» payorId|body|string|true|none|

> Example responses

> 201 Response

```json
{
  "batchId": "cb6ff8c6-85e9-45a6-b7d9-d05305db67f3",
  "rejectedCsvRows": [
    {
      "lineNumber": 3,
      "message": "rejected message 1",
      "rejectedContent": "unable,to,process,csv,line"
    },
    {
      "lineNumber": 3,
      "message": "rejected message 1",
      "rejectedContent": "unable,to,process,csv,line"
    }
  ]
}
```

> 400 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 400
}
```

> 401 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 401
}
```

> 403 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 403
}
```

> 404 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 404
}
```

<h3 id="initiate-payee-creation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|HTTP Created. Body created only on CSV requests|[CreatePayeesCSVResponseV3](#schemacreatepayeescsvresponsev3)|
|400|Bad Request|Invalid request. See Error message payload for details of failure|[inline_response_400](#schemainline_response_400)|
|401|Unauthorized|Invalid access token. May be expired or invalid|[inline_response_401](#schemainline_response_401)|
|403|Forbidden|The authentication does not have permissions to access the resource<br>This usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions<br>|[inline_response_403](#schemainline_response_403)|
|404|Not Found|The resource was not found or is no longer available<br>|[inline_response_404](#schemainline_response_404)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Query Batch Status

<a id="opIdqueryBatchStatusV3"></a>

> Code samples

```bash
curl https://example.com/v3/payees/batch/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v3/payees/batch/{batchId}`

<aside class="warning">
This operation is deprecated
</aside>

<p>Use v4 instead</p>
Fetch the status of a specific batch of payees. The batch is fully processed when status is ACCEPTED and pendingCount is 0 ( 200 - OK, 404 - batch not found ).


<h3 id="query-batch-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|batchId|path|string(uuid)|true|Batch Id|

> Example responses

> 200 Response

```json
{
  "failureCount": 2,
  "failures": [
    {
      "failedSubmission": {
        "address": {
          "city": "Key West",
          "country": "US",
          "countyOrProvince": "FL",
          "line1": "500 Duval St",
          "line2": "line2",
          "line3": "line3",
          "line4": "line4",
          "zipOrPostcode": "33945"
        },
        "challenge": {
          "description": "challenge description",
          "value": "challenge test"
        },
        "company": {
          "name": "ABC Group Plc",
          "operatingName": "ABC Co",
          "taxId": "123123123"
        },
        "email": "bob@example.com",
        "individual": {
          "dateOfBirth": "1970-05-20T00:00:00.000+0000",
          "name": {
            "firstName": "Bob",
            "lastName": "Smith",
            "otherNames": "H",
            "title": "Mr"
          },
          "nationalIdentification": "SA211123K"
        },
        "language": "en-US",
        "payeeId": "2aa5d7e0-2ecb-403f-8494-1865ed0454e9",
        "paymentChannel": {
          "accountName": "My account",
          "accountNumber": "XXXXXX5678",
          "countryCode": "US",
          "currency": "USD",
          "iban": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX1234",
          "paymentChannelName": "My Payment Channel",
          "routingNumber": "XXXXX6789"
        },
        "payorRefs": [
          {
            "invitationStatus": "invitationStatus",
            "invitationStatusTimestamp": "2019-01-20T09:00:00Z",
            "payableIssues": [
              {
                "code": "3",
                "message": "payee-disabled"
              },
              {
                "code": "3",
                "message": "payee-disabled"
              }
            ],
            "payableStatus": true,
            "paymentChannelId": "70faaff7-2c32-4b44-b27f-f0b6c484e6f3",
            "payorId": "ba08877f-9d96-41e4-9c26-44a872d856ae",
            "remoteId": "uniqueIdForRemoteEntity"
          },
          {
            "invitationStatus": "invitationStatus",
            "invitationStatusTimestamp": "2019-01-20T09:00:00Z",
            "payableIssues": [
              {
                "code": "3",
                "message": "payee-disabled"
              },
              {
                "code": "3",
                "message": "payee-disabled"
              }
            ],
            "payableStatus": true,
            "paymentChannelId": "70faaff7-2c32-4b44-b27f-f0b6c484e6f3",
            "payorId": "ba08877f-9d96-41e4-9c26-44a872d856ae",
            "remoteId": "uniqueIdForRemoteEntity"
          }
        ],
        "remoteId": "Remote ID",
        "type": "type"
      },
      "failureMessage": "failure reason"
    },
    {
      "failedSubmission": {
        "address": {
          "city": "Key West",
          "country": "US",
          "countyOrProvince": "FL",
          "line1": "500 Duval St",
          "line2": "line2",
          "line3": "line3",
          "line4": "line4",
          "zipOrPostcode": "33945"
        },
        "challenge": {
          "description": "challenge description",
          "value": "challenge test"
        },
        "company": {
          "name": "ABC Group Plc",
          "operatingName": "ABC Co",
          "taxId": "123123123"
        },
        "email": "bob@example.com",
        "individual": {
          "dateOfBirth": "1970-05-20T00:00:00.000+0000",
          "name": {
            "firstName": "Bob",
            "lastName": "Smith",
            "otherNames": "H",
            "title": "Mr"
          },
          "nationalIdentification": "SA211123K"
        },
        "language": "en-US",
        "payeeId": "2aa5d7e0-2ecb-403f-8494-1865ed0454e9",
        "paymentChannel": {
          "accountName": "My account",
          "accountNumber": "XXXXXX5678",
          "countryCode": "US",
          "currency": "USD",
          "iban": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX1234",
          "paymentChannelName": "My Payment Channel",
          "routingNumber": "XXXXX6789"
        },
        "payorRefs": [
          {
            "invitationStatus": "invitationStatus",
            "invitationStatusTimestamp": "2019-01-20T09:00:00Z",
            "payableIssues": [
              {
                "code": "3",
                "message": "payee-disabled"
              },
              {
                "code": "3",
                "message": "payee-disabled"
              }
            ],
            "payableStatus": true,
            "paymentChannelId": "70faaff7-2c32-4b44-b27f-f0b6c484e6f3",
            "payorId": "ba08877f-9d96-41e4-9c26-44a872d856ae",
            "remoteId": "uniqueIdForRemoteEntity"
          },
          {
            "invitationStatus": "invitationStatus",
            "invitationStatusTimestamp": "2019-01-20T09:00:00Z",
            "payableIssues": [
              {
                "code": "3",
                "message": "payee-disabled"
              },
              {
                "code": "3",
                "message": "payee-disabled"
              }
            ],
            "payableStatus": true,
            "paymentChannelId": "70faaff7-2c32-4b44-b27f-f0b6c484e6f3",
            "payorId": "ba08877f-9d96-41e4-9c26-44a872d856ae",
            "remoteId": "uniqueIdForRemoteEntity"
          }
        ],
        "remoteId": "Remote ID",
        "type": "type"
      },
      "failureMessage": "failure reason"
    }
  ],
  "pendingCount": 2,
  "status": "status"
}
```

> 400 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 400
}
```

> 401 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 401
}
```

> 403 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 403
}
```

> 404 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 404
}
```

<h3 id="query-batch-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Get Batch Status|[QueryBatchResponseV3](#schemaquerybatchresponsev3)|
|400|Bad Request|Invalid request. See Error message payload for details of failure|[inline_response_400](#schemainline_response_400)|
|401|Unauthorized|Invalid access token. May be expired or invalid|[inline_response_401](#schemainline_response_401)|
|403|Forbidden|The authentication does not have permissions to access the resource<br>This usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions<br>|[inline_response_403](#schemainline_response_403)|
|404|Not Found|The resource was not found or is no longer available<br>|[inline_response_404](#schemainline_response_404)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Get Payee Invitation Status

<a id="opIdgetPayeesInvitationStatusV3"></a>

> Code samples

```bash
curl https://example.com/v3/payees/payors/9ac75325-5dcd-42d5-b992-175d7e0a035e/invitationStatus \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v3/payees/payors/{payorId}/invitationStatus`

<aside class="warning">
This operation is deprecated
</aside>

<p>Use v4 instead</p>
<p>Returns a filtered, paginated list of payees associated with a payor, along with invitation status and grace period end date.</p>


<h3 id="get-payee-invitation-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|payorId|path|string(uuid)|true|The account owner Payor ID|
|payeeId|query|string(uuid)|false|The UUID of the payee.|
|invitationStatus|query|[InvitationStatusV4](#schemainvitationstatusv4)|false|The invitation status of the payees.|
|page|query|integer(int32)|false|Page number. Default is 1.|
|pageSize|query|integer(int32)|false|Page size. Default is 25. Max allowable is 100.|

> Example responses

> 200 Response

```json
{
  "content": [
    {
      "gracePeriodEndDate": "2019-01-20T00:00:00.000+0000",
      "invitationStatus": "invitationStatus",
      "payeeId": "2aa5d7e0-2ecb-403f-8494-1865ed0454e9"
    },
    {
      "gracePeriodEndDate": "2019-01-20T00:00:00.000+0000",
      "invitationStatus": "invitationStatus",
      "payeeId": "2aa5d7e0-2ecb-403f-8494-1865ed0454e9"
    }
  ],
  "links": [
    {
      "href": "href",
      "rel": "rel"
    },
    {
      "href": "href",
      "rel": "rel"
    }
  ],
  "page": {
    "numberOfElements": 0,
    "page": 5,
    "pageSize": 5,
    "totalElements": 6,
    "totalPages": 1
  }
}
```

> 400 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 400
}
```

> 401 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 401
}
```

> 403 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 403
}
```

> 404 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 404
}
```

<h3 id="get-payee-invitation-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Get Payees with Invitaion status - filters of payeeId and invitationStatus|[PagedPayeeInvitationStatusResponseV3](#schemapagedpayeeinvitationstatusresponsev3)|
|400|Bad Request|Invalid request. See Error message payload for details of failure|[inline_response_400](#schemainline_response_400)|
|401|Unauthorized|Invalid access token. May be expired or invalid|[inline_response_401](#schemainline_response_401)|
|403|Forbidden|The authentication does not have permissions to access the resource<br>This usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions<br>|[inline_response_403](#schemainline_response_403)|
|404|Not Found|The resource was not found or is no longer available<br>|[inline_response_404](#schemainline_response_404)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Resend Payee Invite

<a id="opIdresendPayeeInviteV3"></a>

> Code samples

```bash
curl https://example.com/v3/payees/2aa5d7e0-2ecb-403f-8494-1865ed0454e9/invite \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "payorId": "9ac75325-5dcd-42d5-b992-175d7e0a035e"
  }'
```

`POST /v3/payees/{payeeId}/invite`

<aside class="warning">
This operation is deprecated
</aside>

<p>Use v4 instead</p>
<p>Resend an invite to the Payee The payee must have already been invited by the payor and not yet accepted or declined</p>
<p>Any previous invites to the payee by this Payor will be invalidated</p>


> Body parameter

```json
{
  "payorId": "9ac75325-5dcd-42d5-b992-175d7e0a035e"
}
```

<h3 id="resend-payee-invite-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|payeeId|path|string(uuid)|true|The UUID of the payee.|
|body|body|[InvitePayeeRequestV3](#schemainvitepayeerequestv3)|true|Provide Payor Id in body of request|
|» payorId|body|string(uuid)|true|none|

> Example responses

> 400 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 400
}
```

> 401 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 401
}
```

> 403 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 403
}
```

> 404 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 404
}
```

> 409 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 409
}
```

<h3 id="resend-payee-invite-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|the request was accepted|None|
|400|Bad Request|Invalid request. See Error message payload for details of failure|[inline_response_400](#schemainline_response_400)|
|401|Unauthorized|Invalid access token. May be expired or invalid|[inline_response_401](#schemainline_response_401)|
|403|Forbidden|The authentication does not have permissions to access the resource<br>This usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions<br>|[inline_response_403](#schemainline_response_403)|
|404|Not Found|The resource was not found or is no longer available<br>|[inline_response_404](#schemainline_response_404)|
|409|Conflict|The request contained data that would result in a duplicate value<br>|[inline_response_409](#schemainline_response_409)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Initiate Payee Creation

<a id="opIdv4CreatePayee"></a>

> Code samples

```bash
curl https://example.com/v4/payees \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "payees": [
      {
        "address": {
          "city": "Key West",
          "country": "US",
          "countyOrProvince": "FL",
          "line1": "500 Duval St",
          "line2": "line2",
          "line3": "line3",
          "line4": "line4",
          "zipOrPostcode": "33945"
        },
        "challenge": {
          "description": "challenge description",
          "value": "11984567"
        },
        "company": {
          "name": "ABC Group Plc",
          "operatingName": "ABC Co",
          "taxId": "123123123"
        },
        "email": "bob@example.com",
        "individual": {
          "dateOfBirth": "1970-05-20T00:00:00.000+0000",
          "name": {
            "firstName": "Bob",
            "lastName": "Smith",
            "otherNames": "H",
            "title": "Mr"
          },
          "nationalIdentification": "SA211123K"
        },
        "language": "en-US",
        "paymentChannel": {
          "accountName": "My account",
          "accountNumber": "XXXXXX5678",
          "countryCode": "US",
          "currency": "USD",
          "iban": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX1234",
          "paymentChannelName": "My Payment Channel",
          "routingNumber": "XXXXX6789"
        },
        "remoteId": "Remote ID"
      },
      {
        "address": {
          "city": "Key West",
          "country": "US",
          "countyOrProvince": "FL",
          "line1": "500 Duval St",
          "line2": "line2",
          "line3": "line3",
          "line4": "line4",
          "zipOrPostcode": "33945"
        },
        "challenge": {
          "description": "challenge description",
          "value": "11984567"
        },
        "company": {
          "name": "ABC Group Plc",
          "operatingName": "ABC Co",
          "taxId": "123123123"
        },
        "email": "bob@example.com",
        "individual": {
          "dateOfBirth": "1970-05-20T00:00:00.000+0000",
          "name": {
            "firstName": "Bob",
            "lastName": "Smith",
            "otherNames": "H",
            "title": "Mr"
          },
          "nationalIdentification": "SA211123K"
        },
        "language": "en-US",
        "paymentChannel": {
          "accountName": "My account",
          "accountNumber": "XXXXXX5678",
          "countryCode": "US",
          "currency": "USD",
          "iban": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX1234",
          "paymentChannelName": "My Payment Channel",
          "routingNumber": "XXXXX6789"
        },
        "remoteId": "Remote ID"
      }
    ],
    "payorId": "9ac75325-5dcd-42d5-b992-175d7e0a035e"
  }'
```

`POST /v4/payees`

<p>Initiate the process of creating 1 to 2000 payees in a batch</p>
<p>Use the batchId in the response to query for status.</p>
<p>In addition to standard semantic validations, a 400 will also result if: </p>
<ul>
<li>there is a duplicate remote id within the batch</li>
<li>there is a duplicate email within the batch, i.e. if there is a conflict between the data provided for one payee within the batch and
that provided for another payee within the same batch).</li>
</ul>
<p>The validation at this stage is intra-batch only.</p>
<p>Validation against payees who have already been invited occurs subsequently during processing of the batch.</p>


> Body parameter

```json
{
  "payees": [
    {
      "address": {
        "city": "Key West",
        "country": "US",
        "countyOrProvince": "FL",
        "line1": "500 Duval St",
        "line2": "line2",
        "line3": "line3",
        "line4": "line4",
        "zipOrPostcode": "33945"
      },
      "challenge": {
        "description": "challenge description",
        "value": "11984567"
      },
      "company": {
        "name": "ABC Group Plc",
        "operatingName": "ABC Co",
        "taxId": "123123123"
      },
      "email": "bob@example.com",
      "individual": {
        "dateOfBirth": "1970-05-20T00:00:00.000+0000",
        "name": {
          "firstName": "Bob",
          "lastName": "Smith",
          "otherNames": "H",
          "title": "Mr"
        },
        "nationalIdentification": "SA211123K"
      },
      "language": "en-US",
      "paymentChannel": {
        "accountName": "My account",
        "accountNumber": "XXXXXX5678",
        "countryCode": "US",
        "currency": "USD",
        "iban": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX1234",
        "paymentChannelName": "My Payment Channel",
        "routingNumber": "XXXXX6789"
      },
      "remoteId": "Remote ID"
    },
    {
      "address": {
        "city": "Key West",
        "country": "US",
        "countyOrProvince": "FL",
        "line1": "500 Duval St",
        "line2": "line2",
        "line3": "line3",
        "line4": "line4",
        "zipOrPostcode": "33945"
      },
      "challenge": {
        "description": "challenge description",
        "value": "11984567"
      },
      "company": {
        "name": "ABC Group Plc",
        "operatingName": "ABC Co",
        "taxId": "123123123"
      },
      "email": "bob@example.com",
      "individual": {
        "dateOfBirth": "1970-05-20T00:00:00.000+0000",
        "name": {
          "firstName": "Bob",
          "lastName": "Smith",
          "otherNames": "H",
          "title": "Mr"
        },
        "nationalIdentification": "SA211123K"
      },
      "language": "en-US",
      "paymentChannel": {
        "accountName": "My account",
        "accountNumber": "XXXXXX5678",
        "countryCode": "US",
        "currency": "USD",
        "iban": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX1234",
        "paymentChannelName": "My Payment Channel",
        "routingNumber": "XXXXX6789"
      },
      "remoteId": "Remote ID"
    }
  ],
  "payorId": "9ac75325-5dcd-42d5-b992-175d7e0a035e"
}
```

<h3 id="initiate-payee-creation-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreatePayeesRequestV4](#schemacreatepayeesrequestv4)|false|Post payees to create.|
|» payees|body|[[CreatePayeeV4](#schemacreatepayeev4)]|true|none|
|» payorId|body|string|true|none|

> Example responses

> 201 Response

```json
{
  "batchId": "cb6ff8c6-85e9-45a6-b7d9-d05305db67f3",
  "rejectedCsvRows": [
    {
      "lineNumber": 3,
      "message": "rejected message 1",
      "rejectedContent": "unable,to,process,csv,line"
    },
    {
      "lineNumber": 3,
      "message": "rejected message 1",
      "rejectedContent": "unable,to,process,csv,line"
    }
  ]
}
```

> 400 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 400
}
```

> 401 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 401
}
```

> 403 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 403
}
```

> 404 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 404
}
```

<h3 id="initiate-payee-creation-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|HTTP Created. Body created only on CSV requests|[CreatePayeesCSVResponseV4](#schemacreatepayeescsvresponsev4)|
|400|Bad Request|Invalid request. See Error message payload for details of failure|[inline_response_400](#schemainline_response_400)|
|401|Unauthorized|Invalid access token. May be expired or invalid|[inline_response_401](#schemainline_response_401)|
|403|Forbidden|The authentication does not have permissions to access the resource<br>This usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions<br>|[inline_response_403](#schemainline_response_403)|
|404|Not Found|The resource was not found or is no longer available<br>|[inline_response_404](#schemainline_response_404)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Query Batch Status

<a id="opIdqueryBatchStatusV4"></a>

> Code samples

```bash
curl https://example.com/v4/payees/batch/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v4/payees/batch/{batchId}`

Fetch the status of a specific batch of payees. The batch is fully processed when status is ACCEPTED and pendingCount is 0 ( 200 - OK, 404 - batch not found ).


<h3 id="query-batch-status-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|batchId|path|string(uuid)|true|Batch Id|

> Example responses

> 200 Response

```json
{
  "failureCount": 2,
  "failures": [
    {
      "failedSubmission": {
        "address": {
          "city": "Key West",
          "country": "US",
          "countyOrProvince": "FL",
          "line1": "500 Duval St",
          "line2": "line2",
          "line3": "line3",
          "line4": "line4",
          "zipOrPostcode": "33945"
        },
        "challenge": {
          "description": "challenge description",
          "value": "11984567"
        },
        "company": {
          "name": "ABC Group Plc",
          "operatingName": "ABC Co",
          "taxId": "123123123"
        },
        "email": "bob@example.com",
        "individual": {
          "dateOfBirth": "1970-05-20T00:00:00.000+0000",
          "name": {
            "firstName": "Bob",
            "lastName": "Smith",
            "otherNames": "H",
            "title": "Mr"
          },
          "nationalIdentification": "SA211123K"
        },
        "language": "en-US",
        "payeeId": "2aa5d7e0-2ecb-403f-8494-1865ed0454e9",
        "paymentChannel": {
          "accountName": "My account",
          "accountNumber": "XXXXXX5678",
          "countryCode": "US",
          "currency": "USD",
          "iban": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX1234",
          "paymentChannelName": "My Payment Channel",
          "routingNumber": "XXXXX6789"
        },
        "payorRefs": [
          {
            "invitationStatus": "invitationStatus",
            "invitationStatusTimestamp": "2019-01-20T09:00:00Z",
            "payableIssues": [
              {
                "code": "3",
                "message": "payee-disabled"
              },
              {
                "code": "3",
                "message": "payee-disabled"
              }
            ],
            "payableStatus": true,
            "paymentChannelId": "70faaff7-2c32-4b44-b27f-f0b6c484e6f3",
            "payorId": "ba08877f-9d96-41e4-9c26-44a872d856ae",
            "remoteId": "uniqueIdForRemoteEntity"
          },
          {
            "invitationStatus": "invitationStatus",
            "invitationStatusTimestamp": "2019-01-20T09:00:00Z",
            "payableIssues": [
              {
                "code": "3",
                "message": "payee-disabled"
              },
              {
                "code": "3",
                "message": "payee-disabled"
              }
            ],
            "payableStatus": true,
            "paymentChannelId": "70faaff7-2c32-4b44-b27f-f0b6c484e6f3",
            "payorId": "ba08877f-9d96-41e4-9c26-44a872d856ae",
            "remoteId": "uniqueIdForRemoteEntity"
          }
        ],
        "remoteId": "Remote ID",
        "type": "type"
      },
      "failureMessage": "failure reason"
    },
    {
      "failedSubmission": {
        "address": {
          "city": "Key West",
          "country": "US",
          "countyOrProvince": "FL",
          "line1": "500 Duval St",
          "line2": "line2",
          "line3": "line3",
          "line4": "line4",
          "zipOrPostcode": "33945"
        },
        "challenge": {
          "description": "challenge description",
          "value": "11984567"
        },
        "company": {
          "name": "ABC Group Plc",
          "operatingName": "ABC Co",
          "taxId": "123123123"
        },
        "email": "bob@example.com",
        "individual": {
          "dateOfBirth": "1970-05-20T00:00:00.000+0000",
          "name": {
            "firstName": "Bob",
            "lastName": "Smith",
            "otherNames": "H",
            "title": "Mr"
          },
          "nationalIdentification": "SA211123K"
        },
        "language": "en-US",
        "payeeId": "2aa5d7e0-2ecb-403f-8494-1865ed0454e9",
        "paymentChannel": {
          "accountName": "My account",
          "accountNumber": "XXXXXX5678",
          "countryCode": "US",
          "currency": "USD",
          "iban": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX1234",
          "paymentChannelName": "My Payment Channel",
          "routingNumber": "XXXXX6789"
        },
        "payorRefs": [
          {
            "invitationStatus": "invitationStatus",
            "invitationStatusTimestamp": "2019-01-20T09:00:00Z",
            "payableIssues": [
              {
                "code": "3",
                "message": "payee-disabled"
              },
              {
                "code": "3",
                "message": "payee-disabled"
              }
            ],
            "payableStatus": true,
            "paymentChannelId": "70faaff7-2c32-4b44-b27f-f0b6c484e6f3",
            "payorId": "ba08877f-9d96-41e4-9c26-44a872d856ae",
            "remoteId": "uniqueIdForRemoteEntity"
          },
          {
            "invitationStatus": "invitationStatus",
            "invitationStatusTimestamp": "2019-01-20T09:00:00Z",
            "payableIssues": [
              {
                "code": "3",
                "message": "payee-disabled"
              },
              {
                "code": "3",
                "message": "payee-disabled"
              }
            ],
            "payableStatus": true,
            "paymentChannelId": "70faaff7-2c32-4b44-b27f-f0b6c484e6f3",
            "payorId": "ba08877f-9d96-41e4-9c26-44a872d856ae",
            "remoteId": "uniqueIdForRemoteEntity"
          }
        ],
        "remoteId": "Remote ID",
        "type": "type"
      },
      "failureMessage": "failure reason"
    }
  ],
  "pendingCount": 2,
  "status": "status"
}
```

> 400 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 400
}
```

> 401 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 401
}
```

> 403 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 403
}
```

> 404 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 404
}
```

<h3 id="query-batch-status-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Get Batch Status|[QueryBatchResponseV4](#schemaquerybatchresponsev4)|
|400|Bad Request|Invalid request. See Error message payload for details of failure|[inline_response_400](#schemainline_response_400)|
|401|Unauthorized|Invalid access token. May be expired or invalid|[inline_response_401](#schemainline_response_401)|
|403|Forbidden|The authentication does not have permissions to access the resource<br>This usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions<br>|[inline_response_403](#schemainline_response_403)|
|404|Not Found|The resource was not found or is no longer available<br>|[inline_response_404](#schemainline_response_404)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Get Payee Invitation Status

<a id="opIdgetPayeesInvitationStatusV4"></a>

> Code samples

```bash
curl https://example.com/v4/payees/payors/9ac75325-5dcd-42d5-b992-175d7e0a035e/invitationStatus \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v4/payees/payors/{payorId}/invitationStatus`

Returns a filtered, paginated list of payees associated with a payor, along with invitation status and grace period end date.


<h3 id="get-payee-invitation-status-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|payorId|path|string(uuid)|true|The account owner Payor ID|
|payeeId|query|string(uuid)|false|The UUID of the payee.|
|invitationStatus|query|[InvitationStatusV4](#schemainvitationstatusv4)|false|The invitation status of the payees.|
|page|query|integer(int32)|false|Page number. Default is 1.|
|pageSize|query|integer(int32)|false|Page size. Default is 25. Max allowable is 100.|

> Example responses

> 200 Response

```json
{
  "content": [
    {
      "gracePeriodEndDate": "2019-01-20T00:00:00.000+0000",
      "invitationStatus": "invitationStatus",
      "payeeId": "2aa5d7e0-2ecb-403f-8494-1865ed0454e9"
    },
    {
      "gracePeriodEndDate": "2019-01-20T00:00:00.000+0000",
      "invitationStatus": "invitationStatus",
      "payeeId": "2aa5d7e0-2ecb-403f-8494-1865ed0454e9"
    }
  ],
  "links": [
    {
      "href": "href",
      "rel": "rel"
    },
    {
      "href": "href",
      "rel": "rel"
    }
  ],
  "page": {
    "numberOfElements": 0,
    "page": 5,
    "pageSize": 5,
    "totalElements": 6,
    "totalPages": 1
  }
}
```

> 400 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 400
}
```

> 401 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 401
}
```

> 403 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 403
}
```

> 404 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 404
}
```

<h3 id="get-payee-invitation-status-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Get Payees with Invitaion status - filters of payeeId and invitationStatus|[PagedPayeeInvitationStatusResponseV4](#schemapagedpayeeinvitationstatusresponsev4)|
|400|Bad Request|Invalid request. See Error message payload for details of failure|[inline_response_400](#schemainline_response_400)|
|401|Unauthorized|Invalid access token. May be expired or invalid|[inline_response_401](#schemainline_response_401)|
|403|Forbidden|The authentication does not have permissions to access the resource<br>This usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions<br>|[inline_response_403](#schemainline_response_403)|
|404|Not Found|The resource was not found or is no longer available<br>|[inline_response_404](#schemainline_response_404)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Resend Payee Invite

<a id="opIdresendPayeeInviteV4"></a>

> Code samples

```bash
curl https://example.com/v4/payees/2aa5d7e0-2ecb-403f-8494-1865ed0454e9/invite \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "payorId": "9ac75325-5dcd-42d5-b992-175d7e0a035e"
  }'
```

`POST /v4/payees/{payeeId}/invite`

<p>Resend an invite to the Payee The payee must have already been invited by the payor and not yet accepted or declined</p>
<p>Any previous invites to the payee by this Payor will be invalidated</p>


> Body parameter

```json
{
  "payorId": "9ac75325-5dcd-42d5-b992-175d7e0a035e"
}
```

<h3 id="resend-payee-invite-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|payeeId|path|string(uuid)|true|The UUID of the payee.|
|body|body|[InvitePayeeRequestV4](#schemainvitepayeerequestv4)|true|Provide Payor Id in body of request|
|» payorId|body|string(uuid)|true|none|

> Example responses

> 400 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 400
}
```

> 401 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 401
}
```

> 403 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 403
}
```

> 404 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 404
}
```

> 409 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 409
}
```

<h3 id="resend-payee-invite-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|the request was accepted|None|
|400|Bad Request|Invalid request. See Error message payload for details of failure|[inline_response_400](#schemainline_response_400)|
|401|Unauthorized|Invalid access token. May be expired or invalid|[inline_response_401](#schemainline_response_401)|
|403|Forbidden|The authentication does not have permissions to access the resource<br>This usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions<br>|[inline_response_403](#schemainline_response_403)|
|404|Not Found|The resource was not found or is no longer available<br>|[inline_response_404](#schemainline_response_404)|
|409|Conflict|The request contained data that would result in a duplicate value<br>|[inline_response_409](#schemainline_response_409)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

<h1 id="velo-payments-apis-payors">Payors</h1>

A Payor is the entity which is sending money. Here you will find the available APIs for working with Payors.

## Get Payor

<a id="opIdgetPayorByIdV1"></a>

> Code samples

```bash
curl https://example.com/v1/payors/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/payors/{payorId}`

<aside class="warning">
This operation is deprecated
</aside>

<p>Get a Single Payor by Id.</p>
<p>deprecated since v2.10 - Use /v2/payors


<h3 id="get-payor-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|payorId|path|string(uuid)|true|The Payor Id|

> Example responses

> 200 Response

```json
{
  "address": {
    "city": "Key West",
    "country": "US",
    "countyOrProvince": "FL",
    "line1": "500 Duval St",
    "line2": "line2",
    "line3": "line3",
    "line4": "line4",
    "zipOrPostcode": "33945"
  },
  "allowsLanguageChoice": true,
  "collectiveAlias": "Payee",
  "dbaName": "Some Biz",
  "fundingAccountAccountName": "Example Corp BOA",
  "fundingAccountAccountNumber": "1234567890123",
  "fundingAccountRoutingNumber": "123456789",
  "includesReports": true,
  "kycState": "PASSED_KYC",
  "language": "EN",
  "manualLockout": true,
  "maxMasterPayorAdmins": 6,
  "payeeGracePeriodDays": 0,
  "payeeGracePeriodProcessingEnabled": true,
  "payorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "payorName": "Example, Corp",
  "primaryContactEmail": "joe.buck@example.com",
  "primaryContactName": "Joe Buck",
  "primaryContactPhone": "123-123-1234",
  "reminderEmailsOptOut": true,
  "supportContact": "support@example.com",
  "transmissionTypes": {
    "ACH": true,
    "SAME_DAY_ACH": true,
    "WIRE": true
  }
}
```

> 403 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 403
}
```

> 404 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 400
}
```

<h3 id="get-payor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Get Payor Details|[PayorV1](#schemapayorv1)|
|403|Forbidden|The authentication does not have permissions to access the resource<br>This usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions<br>|[inline_response_403](#schemainline_response_403)|
|404|Not Found|Payor Id Not Found|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Create Application

<a id="opIdpayorCreateApplicationV1"></a>

> Code samples

```bash
curl https://example.com/v1/payors/497f6eca-6276-4993-bfeb-53cbbbba6f08/applications \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "SAP Application integration",
    "name": "SAP"
  }'
```

`POST /v1/payors/{payorId}/applications`

<p>Create an application for the given Payor ID.</p>
<p>Applications provide a means to group your API Keys</p>
<p>For example you might have an SAP application that you wish to integrate with Velo</p>
<p>You can create an application and then create one or more API keys for the application</p>


> Body parameter

```json
{
  "description": "SAP Application integration",
  "name": "SAP"
}
```

<h3 id="create-application-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|payorId|path|string(uuid)|true|The Payor Id|
|body|body|[PayorCreateApplicationRequest](#schemapayorcreateapplicationrequest)|true|Details of application to create|
|» description|body|string \| null|false|Description of the application.|
|» name|body|string|true|The name of the application.|

> Example responses

> 400 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 400
}
```

> 403 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 403
}
```

> 404 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 404
}
```

> 409 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 409
}
```

<h3 id="create-application-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|None|
|400|Bad Request|Invalid request. See Error message payload for details of failure|[inline_response_400](#schemainline_response_400)|
|403|Forbidden|The authentication does not have permissions to access the resource<br>This usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions<br>|[inline_response_403](#schemainline_response_403)|
|404|Not Found|The resource was not found or is no longer available<br>|[inline_response_404](#schemainline_response_404)|
|409|Conflict|The request contained data that would result in a duplicate value<br>|[inline_response_409](#schemainline_response_409)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||location|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Create API Key

<a id="opIdpayorCreateApiKeyV1"></a>

> Code samples

```bash
curl https://example.com/v1/payors/497f6eca-6276-4993-bfeb-53cbbbba6f08/applications/497f6eca-6276-4993-bfeb-53cbbbba6f08/keys \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "Key for iOS mobile application",
    "name": "iOS Key",
    "roles": [
      "velo.payor.admin"
    ]
  }'
```

`POST /v1/payors/{payorId}/applications/{applicationId}/keys`

<p>Create an an API key for the given payor Id and application Id</p>
<p>You can create multiple API Keys for a given application</p>
<p>API Keys are programmatic users for integrating your application with the Velo platform</p>


> Body parameter

```json
{
  "description": "Key for iOS mobile application",
  "name": "iOS Key",
  "roles": [
    "velo.payor.admin"
  ]
}
```

<h3 id="create-api-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|payorId|path|string(uuid)|true|The Payor Id|
|applicationId|path|string(uuid)|true|Application ID|
|body|body|[PayorCreateApiKeyRequest](#schemapayorcreateapikeyrequest)|true|Details of application API key to create|
|» description|body|string \| null|false|Description of the key.|
|» name|body|string|true|A name for the key.|
|» roles|body|[string]|true|<p>A role to assign to the key.</p><br><p>If you want your API key to have write access then assign the role velo.payor.admin</p><br><p>A later version will change this property from a list to string</p><br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» roles|velo.payor.admin|
|» roles|velo.payor.support|

> Example responses

> 200 Response

```json
{
  "apiKey": "385d4506-e7dd-446e-a092-5f30b98e7b26",
  "apiSecret": "f25767d9-342a-48ac-a788-0a7a38ae6fb3"
}
```

> 400 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 400
}
```

> 403 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 403
}
```

> 404 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 404
}
```

<h3 id="create-api-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|HTTP Ok, key created|[PayorCreateApiKeyResponse](#schemapayorcreateapikeyresponse)|
|400|Bad Request|Invalid request. See Error message payload for details of failure|[inline_response_400](#schemainline_response_400)|
|403|Forbidden|The authentication does not have permissions to access the resource<br>This usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions<br>|[inline_response_403](#schemainline_response_403)|
|404|Not Found|The resource was not found or is no longer available<br>|[inline_response_404](#schemainline_response_404)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Get Branding

<a id="opIdpayorGetBranding"></a>

> Code samples

```bash
curl https://example.com/v1/payors/497f6eca-6276-4993-bfeb-53cbbbba6f08/branding \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/payors/{payorId}/branding`

Get the payor branding details.

<h3 id="get-branding-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|payorId|path|string(uuid)|true|The Payor Id|

> Example responses

> 200 Response

```json
{
  "collectiveAlias": "Contractors",
  "dbaName": "Key West Imports",
  "logoUrl": "https://images.example.com/450ecb66-df18-4d0c-b557-f718782775df/logo.png",
  "payorName": "Key West Imports, Inc",
  "supportContact": "support@example.com"
}
```

> 400 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 400
}
```

> 403 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 403
}
```

> 404 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 400
}
```

<h3 id="get-branding-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|HTTP Ok, key created|[PayorBrandingResponse](#schemapayorbrandingresponse)|
|400|Bad Request|Invalid request. See Error message payload for details of failure|[inline_response_400](#schemainline_response_400)|
|403|Forbidden|The authentication does not have permissions to access the resource<br>This usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions<br>|[inline_response_403](#schemainline_response_403)|
|404|Not Found|Payor Id Not Found|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Add Logo

<a id="opIdpayorAddPayorLogoV1"></a>

> Code samples

```bash
curl https://example.com/v1/payors/497f6eca-6276-4993-bfeb-53cbbbba6f08/branding/logos \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'logo=@/path/to/file'
```

`POST /v1/payors/{payorId}/branding/logos`

<p>Add Payor Logo</p>
<p>Logo file is used in your branding and emails sent to payees</p>


> Body parameter

```yaml
logo: string
```

<h3 id="add-logo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|payorId|path|string(uuid)|true|The Payor Id|
|body|body|[PayorLogoRequest](#schemapayorlogorequest)|true|Image file to upload|
|» logo|body|string(binary)|false|none|

> Example responses

> 400 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 400
}
```

> 403 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 403
}
```

> 404 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 404
}
```

<h3 id="add-logo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|
|400|Bad Request|Invalid request. See Error message payload for details of failure|[inline_response_400](#schemainline_response_400)|
|403|Forbidden|The authentication does not have permissions to access the resource<br>This usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions<br>|[inline_response_403](#schemainline_response_403)|
|404|Not Found|The resource was not found or is no longer available<br>|[inline_response_404](#schemainline_response_404)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Reminder Email Opt-Out

<a id="opIdpayorEmailOptOut"></a>

> Code samples

```bash
curl https://example.com/v1/payors/497f6eca-6276-4993-bfeb-53cbbbba6f08/reminderEmailsUpdate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "reminderEmailsOptOut": true
  }'
```

`POST /v1/payors/{payorId}/reminderEmailsUpdate`

Update the emailRemindersOptOut field for a Payor. This API can be used to opt out
or opt into Payor Reminder emails. These emails are typically around payee events
such as payees registering and onboarding.


> Body parameter

```json
{
  "reminderEmailsOptOut": true
}
```

<h3 id="reminder-email-opt-out-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|payorId|path|string(uuid)|true|The Payor Id|
|body|body|[PayorEmailOptOutRequest](#schemapayoremailoptoutrequest)|true|Reminder Emails Opt-Out Request|
|» reminderEmailsOptOut|body|boolean|true|none|

> Example responses

> 400 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 400
}
```

> 403 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 403
}
```

> 404 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 400
}
```

<h3 id="reminder-email-opt-out-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|HTTP Accepted|None|
|400|Bad Request|Invalid request. See Error message payload for details of failure|[inline_response_400](#schemainline_response_400)|
|403|Forbidden|The authentication does not have permissions to access the resource<br>This usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions<br>|[inline_response_403](#schemainline_response_403)|
|404|Not Found|Payor Id Not Found|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Get Payor

<a id="opIdgetPayorByIdV2"></a>

> Code samples

```bash
curl https://example.com/v2/payors/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/payors/{payorId}`

Get a Single Payor by Id.


<h3 id="get-payor-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|payorId|path|string(uuid)|true|The Payor Id|

> Example responses

> 200 Response

```json
{
  "address": {
    "city": "Key West",
    "country": "US",
    "countyOrProvince": "FL",
    "line1": "500 Duval St",
    "line2": "line2",
    "line3": "line3",
    "line4": "line4",
    "zipOrPostcode": "33945"
  },
  "allowsLanguageChoice": true,
  "collectiveAlias": "Payee",
  "dbaName": "Some Biz",
  "includesReports": true,
  "kycState": "PASSED_KYC",
  "language": "EN",
  "managingPayees": true,
  "manualLockout": true,
  "maxMasterPayorAdmins": 6,
  "openBankingEnabled": true,
  "payeeGracePeriodDays": 0,
  "payeeGracePeriodProcessingEnabled": true,
  "paymentRails": "paymentRails",
  "payorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "payorName": "Example, Corp",
  "payorXid": "ABC_201234",
  "primaryContactEmail": "joe.buck@example.com",
  "primaryContactName": "Joe Buck",
  "primaryContactPhone": "123-123-1234",
  "provider": "provider",
  "reminderEmailsOptOut": true,
  "remoteSystemIds": [
    "REMOTE_SYSTEM_ID",
    "REMOTE_SYSTEM_ID"
  ],
  "supportContact": "support@example.com",
  "transmissionTypes": {
    "ACH": true,
    "SAME_DAY_ACH": true,
    "WIRE": true
  },
  "usdTxnValueReportingThreshold": 1000000,
  "wuCustomerId": "wuCustomerId"
}
```

> 400 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 400
}
```

> 403 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 403
}
```

> 404 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 400
}
```

<h3 id="get-payor-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Get Payor Details|[PayorV2](#schemapayorv2)|
|400|Bad Request|Invalid request. See Error message payload for details of failure|[inline_response_400](#schemainline_response_400)|
|403|Forbidden|The authentication does not have permissions to access the resource<br>This usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions<br>|[inline_response_403](#schemainline_response_403)|
|404|Not Found|Payor Id Not Found|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

<h1 id="velo-payments-apis-payor-hierarchy">Payor Hierarchy</h1>

<p>Payors that are part of the same organization can be linked together in a hierarchical fashion</p>
<p>Payors higher up in the tree can read and write data on behalf of payors below them</p>
<p>For example Payor A can make payouts on behalf of Payor B if Payor B is linked below Payor A</p>
<p>Payors can not access data of payors above them in the hierarchy</p>
<p>Contact Velo if you need to link payors in your organization</p>


## List Payor Links

<a id="opIdpayorLinksV1"></a>

> Code samples

```bash
curl https://example.com/v1/payorLinks \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/payorLinks`

<p>If the payor is set up as part of a hierarchy you can use this API to traverse the hierarchy</p>


<h3 id="list-payor-links-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|descendantsOfPayor|query|string(uuid)|false|The Payor ID from which to start the query to show all descendants|
|parentOfPayor|query|string(uuid)|false|Query for the parent payor details for this payor id|
|fields|query|string|false|<p>List of additional Payor fields to include in the response for each Payor</p><br><p>The values of payorId and payorName are always included for each Payor by default</p><br><p>You can add fields to the response for each payor by including them in the fields parameter separated by commas</p><br><p>The supported fields are any combination of: primaryContactEmail,kycState</p><br>|

> Example responses

> 200 Response

```json
{
  "links": [
    {
      "fromPayorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "linkId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "linkType": "linkType",
      "toPayorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
    },
    {
      "fromPayorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "linkId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "linkType": "linkType",
      "toPayorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
    }
  ],
  "payors": [
    {
      "kycState": "kycState",
      "payorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "payorName": "payorName",
      "primaryContactEmail": "primaryContactEmail"
    },
    {
      "kycState": "kycState",
      "payorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "payorName": "payorName",
      "primaryContactEmail": "primaryContactEmail"
    }
  ]
}
```

> 400 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 400
}
```

> 403 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 403
}
```

> 404 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 404
}
```

<h3 id="list-payor-links-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Details of Payor Links|[PayorLinksResponse](#schemapayorlinksresponse)|
|400|Bad Request|Invalid request. See Error message payload for details of failure|[inline_response_400](#schemainline_response_400)|
|403|Forbidden|The authentication does not have permissions to access the resource<br>This usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions<br>|[inline_response_403](#schemainline_response_403)|
|404|Not Found|The resource was not found or is no longer available<br>|[inline_response_404](#schemainline_response_404)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

<h1 id="velo-payments-apis-payouts">Payouts</h1>

<p>Payout APIs allow you to create and instruct payouts to payees</p>
<p>There are three phases to a payout:</p>
<ul>
    <li>Submit - the payments are created within the platform</li>
    <li>Quote - optional step if FX is involved</li>
    <li>Instruct - the payments are sent to the payment rails for processing</li>
</ul>
<p>Between 1 and 2000 payments can be created within the platform as part of a Payout</p>


## Withdraw a Payment

<a id="opIdwithdrawPayment"></a>

> Code samples

```bash
curl https://example.com/v1/payments/497f6eca-6276-4993-bfeb-53cbbbba6f08/withdraw \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "reason": "Payment submitted in error"
  }'
```

`POST /v1/payments/{paymentId}/withdraw`

<p>withdraw a payment </p>
<p>There are a variety of reasons why this can fail</p>
<ul>
    <li>the payment must be in a state of 'accepted' or 'unfunded'</li>
    <li>the payout must not be in a state of 'instructed'</li>
</ul>


> Body parameter

```json
{
  "reason": "Payment submitted in error"
}
```

<h3 id="withdraw-a-payment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|paymentId|path|string(uuid)|true|Id of the Payment|
|body|body|[WithdrawPaymentRequest](#schemawithdrawpaymentrequest)|true|details for withdrawal|
|» reason|body|string|true|Reason for withdrawal|

> Example responses

> 400 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 400
}
```

> 401 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 401
}
```

> 403 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 403
}
```

> 404 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 404
}
```

<h3 id="withdraw-a-payment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The payment was withdrawn|None|
|400|Bad Request|Invalid request. See Error message payload for details of failure|[inline_response_400](#schemainline_response_400)|
|401|Unauthorized|Invalid access token. May be expired or invalid|[inline_response_401](#schemainline_response_401)|
|403|Forbidden|The authentication does not have permissions to access the resource<br>This usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions<br>|[inline_response_403](#schemainline_response_403)|
|404|Not Found|The resource was not found or is no longer available<br>|[inline_response_404](#schemainline_response_404)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Submit Payout

<a id="opIdsubmitPayoutV3"></a>

> Code samples

```bash
curl https://example.com/v3/payouts \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "payments": [
      {
        "amount": 1299,
        "currency": "USD",
        "paymentMemo": "my memo",
        "paymentMetadata": "invoiceeId_123|abc001:12345|xyz002:4567",
        "payorPaymentId": "123211321ABSD",
        "remoteId": "remoteId1234",
        "remoteSystemId": "remoteSystemId",
        "sourceAccountName": "MyAccountName",
        "transmissionType": "ACH"
      },
      {
        "amount": 1299,
        "currency": "USD",
        "paymentMemo": "my memo",
        "paymentMetadata": "invoiceeId_123|abc001:12345|xyz002:4567",
        "payorPaymentId": "123211321ABSD",
        "remoteId": "remoteId1234",
        "remoteSystemId": "remoteSystemId",
        "sourceAccountName": "MyAccountName",
        "transmissionType": "ACH"
      },
      {
        "amount": 1299,
        "currency": "USD",
        "paymentMemo": "my memo",
        "paymentMetadata": "invoiceeId_123|abc001:12345|xyz002:4567",
        "payorPaymentId": "123211321ABSD",
        "remoteId": "remoteId1234",
        "remoteSystemId": "remoteSystemId",
        "sourceAccountName": "MyAccountName",
        "transmissionType": "ACH"
      },
      {
        "amount": 1299,
        "currency": "USD",
        "paymentMemo": "my memo",
        "paymentMetadata": "invoiceeId_123|abc001:12345|xyz002:4567",
        "payorPaymentId": "123211321ABSD",
        "remoteId": "remoteId1234",
        "remoteSystemId": "remoteSystemId",
        "sourceAccountName": "MyAccountName",
        "transmissionType": "ACH"
      },
      {
        "amount": 1299,
        "currency": "USD",
        "paymentMemo": "my memo",
        "paymentMetadata": "invoiceeId_123|abc001:12345|xyz002:4567",
        "payorPaymentId": "123211321ABSD",
        "remoteId": "remoteId1234",
        "remoteSystemId": "remoteSystemId",
        "sourceAccountName": "MyAccountName",
        "transmissionType": "ACH"
      }
    ],
    "payoutFromPayorId": "c4261044-13df-4a6c-b1d4-fa8be2b46f5a",
    "payoutMemo": "Monthly Payment",
    "payoutToPayorId": "9afc6b39-de12-466a-a9ca-07c7a23b312d"
  }'
```

`POST /v3/payouts`

<p>Create a new payout and return a location header with a link to the payout</p>
<p>Basic validation of the payout is performed before returning but more comprehensive validation is done asynchronously</p>
<p>The results can be obtained by issuing a HTTP GET to the URL returned in the location header</p>
<p>**NOTE:** amount values in payments must be in 'minor units' format. E.g. cents for USD, pence for GBP etc with no decimal places</p>


> Body parameter

```json
{
  "payments": [
    {
      "amount": 1299,
      "currency": "USD",
      "paymentMemo": "my memo",
      "paymentMetadata": "invoiceeId_123|abc001:12345|xyz002:4567",
      "payorPaymentId": "123211321ABSD",
      "remoteId": "remoteId1234",
      "remoteSystemId": "remoteSystemId",
      "sourceAccountName": "MyAccountName",
      "transmissionType": "ACH"
    },
    {
      "amount": 1299,
      "currency": "USD",
      "paymentMemo": "my memo",
      "paymentMetadata": "invoiceeId_123|abc001:12345|xyz002:4567",
      "payorPaymentId": "123211321ABSD",
      "remoteId": "remoteId1234",
      "remoteSystemId": "remoteSystemId",
      "sourceAccountName": "MyAccountName",
      "transmissionType": "ACH"
    },
    {
      "amount": 1299,
      "currency": "USD",
      "paymentMemo": "my memo",
      "paymentMetadata": "invoiceeId_123|abc001:12345|xyz002:4567",
      "payorPaymentId": "123211321ABSD",
      "remoteId": "remoteId1234",
      "remoteSystemId": "remoteSystemId",
      "sourceAccountName": "MyAccountName",
      "transmissionType": "ACH"
    },
    {
      "amount": 1299,
      "currency": "USD",
      "paymentMemo": "my memo",
      "paymentMetadata": "invoiceeId_123|abc001:12345|xyz002:4567",
      "payorPaymentId": "123211321ABSD",
      "remoteId": "remoteId1234",
      "remoteSystemId": "remoteSystemId",
      "sourceAccountName": "MyAccountName",
      "transmissionType": "ACH"
    },
    {
      "amount": 1299,
      "currency": "USD",
      "paymentMemo": "my memo",
      "paymentMetadata": "invoiceeId_123|abc001:12345|xyz002:4567",
      "payorPaymentId": "123211321ABSD",
      "remoteId": "remoteId1234",
      "remoteSystemId": "remoteSystemId",
      "sourceAccountName": "MyAccountName",
      "transmissionType": "ACH"
    }
  ],
  "payoutFromPayorId": "c4261044-13df-4a6c-b1d4-fa8be2b46f5a",
  "payoutMemo": "Monthly Payment",
  "payoutToPayorId": "9afc6b39-de12-466a-a9ca-07c7a23b312d"
}
```

<h3 id="submit-payout-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreatePayoutRequestV3](#schemacreatepayoutrequestv3)|true|Post amount to transfer using stored funding account details.|
|» payments|body|[[PaymentInstructionV3](#schemapaymentinstructionv3)]|true|none|
|» payoutFromPayorId|body|string(uuid)|false|<p>The id of the payor whose source account(s) will be debited</p><br><p>payoutFromPayorId and payoutToPayorId must be both supplied or both omitted</p><br>|
|» payoutMemo|body|string|false|<p>Text applied to all payment memos unless specified explicitly on a payment</p><br><p>This should be the reference field on the statement seen by the payee (but not via ACH)</p><br>|
|» payoutToPayorId|body|string(uuid)|false|<p>The id of the payor whose payees will be paid</p><br><p>payoutFromPayorId and payoutToPayorId must be both supplied or both omitted</p><br>|

> Example responses

> 400 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 400
}
```

> 401 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 401
}
```

> 403 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 403
}
```

<h3 id="submit-payout-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Successful submission of the payout|None|
|400|Bad Request|Invalid request. See Error message payload for details of failure|[inline_response_400](#schemainline_response_400)|
|401|Unauthorized|Invalid access token. May be expired or invalid|[inline_response_401](#schemainline_response_401)|
|403|Forbidden|The authentication does not have permissions to access the resource<br>This usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions<br>|[inline_response_403](#schemainline_response_403)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|202|Location|string|uri|Reference to created payout|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Get Payout Summary

<a id="opIdgetPayoutSummaryV3"></a>

> Code samples

```bash
curl https://example.com/v3/payouts/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v3/payouts/{payoutId}`

Get payout summary - returns the current state of the payout.

<h3 id="get-payout-summary-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|payoutId|path|string(uuid)|true|Id of the payout|

> Example responses

> 200 Response

```json
{
  "acceptedPayments": [
    {
      "amount": 10000,
      "currencyType": "USD",
      "paymentMemo": "INV00112",
      "paymentMetadata": "invoiceeId_123|abc001:12345|xyz002:4567",
      "payorPaymentId": "123211321ABSD",
      "railsId": "SVB",
      "remoteId": "remoteId1234",
      "remoteSystemId": "OB012",
      "sourceAccountName": "Chase Bank Account"
    },
    {
      "amount": 10000,
      "currencyType": "USD",
      "paymentMemo": "INV00112",
      "paymentMetadata": "invoiceeId_123|abc001:12345|xyz002:4567",
      "payorPaymentId": "123211321ABSD",
      "railsId": "SVB",
      "remoteId": "remoteId1234",
      "remoteSystemId": "OB012",
      "sourceAccountName": "Chase Bank Account"
    }
  ],
  "accounts": [
    {
      "currency": "USD",
      "sourceAccountId": "cf81e490-4ab8-49c2-bd68-9d1e725480cb",
      "sourceAccountName": "AccountName",
      "totalPayoutCost": 1000000
    },
    {
      "currency": "USD",
      "sourceAccountId": "cf81e490-4ab8-49c2-bd68-9d1e725480cb",
      "sourceAccountName": "AccountName",
      "totalPayoutCost": 1000000
    }
  ],
  "fxSummaries": [
    {
      "creationTime": "2022-10-30T09:45:09Z",
      "expiryTime": "2022-10-30T09:50:09Z",
      "fundingStatus": "FUNDED",
      "invertedRate": 1.12,
      "paymentCurrency": "USD",
      "quoteId": "af80d455-29dd-4e72-a000-495a9829a7d0",
      "rate": 0.89,
      "sourceCurrency": "USD",
      "status": "QUOTED",
      "totalPaymentAmount": 890000,
      "totalSourceAmount": 1000000
    },
    {
      "creationTime": "2022-10-30T09:45:09Z",
      "expiryTime": "2022-10-30T09:50:09Z",
      "fundingStatus": "FUNDED",
      "invertedRate": 1.12,
      "paymentCurrency": "USD",
      "quoteId": "af80d455-29dd-4e72-a000-495a9829a7d0",
      "rate": 0.89,
      "sourceCurrency": "USD",
      "status": "QUOTED",
      "totalPaymentAmount": 890000,
      "totalSourceAmount": 1000000
    }
  ],
  "paymentsAccepted": 9,
  "paymentsRejected": 1,
  "paymentsSubmitted": 10,
  "paymentsWithdrawn": 0,
  "payoutId": "cf81e490-4ab8-49c2-bd68-9d1e725480cb",
  "rejectedPayments": [
    {
      "amount": 10000,
      "currencyType": "USD",
      "lineNumber": 34,
      "message": "Payment cannot be processed because of the Payee's OFAC or Compliance Status",
      "paymentMetadata": "invoiceeId_123|abc001:12345|xyz002:4567",
      "payorPaymentId": "123211321ABSD",
      "reason": "The payee has not been onboarded",
      "reasonCode": "VE1012",
      "remoteId": "remoteIdVal123",
      "remoteSystemId": "OB012",
      "sourceAccountName": "Chase Bank Account"
    },
    {
      "amount": 10000,
      "currencyType": "USD",
      "lineNumber": 34,
      "message": "Payment cannot be processed because of the Payee's OFAC or Compliance Status",
      "paymentMetadata": "invoiceeId_123|abc001:12345|xyz002:4567",
      "payorPaymentId": "123211321ABSD",
      "reason": "The payee has not been onboarded",
      "reasonCode": "VE1012",
      "remoteId": "remoteIdVal123",
      "remoteSystemId": "OB012",
      "sourceAccountName": "Chase Bank Account"
    }
  ],
  "schedule": {
    "notificationsEnabled": true,
    "scheduleStatus": "SCHEDULED",
    "scheduledAt": "2000-01-23T04:56:07.000+00:00",
    "scheduledByPrincipalId": "8946953b-1e3b-49cf-9da4-b704cbb78f3e",
    "scheduledFor": "2000-01-23T04:56:07.000+00:00"
  },
  "status": "COMPLETED"
}
```

> 401 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 401
}
```

> 403 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 403
}
```

> 404 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 404
}
```

<h3 id="get-payout-summary-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Details of Payout|[PayoutSummaryResponseV3](#schemapayoutsummaryresponsev3)|
|401|Unauthorized|Invalid access token. May be expired or invalid|[inline_response_401](#schemainline_response_401)|
|403|Forbidden|The authentication does not have permissions to access the resource<br>This usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions<br>|[inline_response_403](#schemainline_response_403)|
|404|Not Found|The resource was not found or is no longer available<br>|[inline_response_404](#schemainline_response_404)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Instruct Payout

<a id="opIdinstructPayoutV3"></a>

> Code samples

```bash
curl https://example.com/v3/payouts/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "fxRateDegredationThresholdPercentage": 0.8008282
  }'
```

`POST /v3/payouts/{payoutId}`

Instruct a payout to be made for the specified payoutId.

> Body parameter

```json
{
  "fxRateDegredationThresholdPercentage": 0.8008282
}
```

<h3 id="instruct-payout-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|payoutId|path|string(uuid)|true|Id of the payout|
|body|body|[InstructPayoutRequestV3](#schemainstructpayoutrequestv3)|false|Additional instruct payout parameters|
|» fxRateDegredationThresholdPercentage|body|number(float)|false|Halt instruction if the FX rates have become worse since the last quote|

> Example responses

> 400 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 400
}
```

> 401 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 401
}
```

> 403 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 403
}
```

> 404 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 404
}
```

> 409 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 409
}
```

<h3 id="instruct-payout-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|HTTP 202 Accepted|None|
|400|Bad Request|Invalid request. See Error message payload for details of failure|[inline_response_400](#schemainline_response_400)|
|401|Unauthorized|Invalid access token. May be expired or invalid|[inline_response_401](#schemainline_response_401)|
|403|Forbidden|The authentication does not have permissions to access the resource<br>This usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions<br>|[inline_response_403](#schemainline_response_403)|
|404|Not Found|The resource was not found or is no longer available<br>|[inline_response_404](#schemainline_response_404)|
|409|Conflict|The request contained data that would result in a duplicate value<br>|[inline_response_409](#schemainline_response_409)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Withdraw Payout

<a id="opIdwithdrawPayoutV3"></a>

> Code samples

```bash
curl https://example.com/v3/payouts/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v3/payouts/{payoutId}`

Withdraw Payout will remove the payout details from the rails but the payout will still be accessible in payout service in WITHDRAWN status.

<h3 id="withdraw-payout-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|payoutId|path|string(uuid)|true|Id of the payout|

> Example responses

> 400 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 400
}
```

> 401 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 401
}
```

> 403 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 403
}
```

> 404 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 404
}
```

<h3 id="withdraw-payout-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|HTTP 202 Accepted|None|
|400|Bad Request|Invalid request. See Error message payload for details of failure|[inline_response_400](#schemainline_response_400)|
|401|Unauthorized|Invalid access token. May be expired or invalid|[inline_response_401](#schemainline_response_401)|
|403|Forbidden|The authentication does not have permissions to access the resource<br>This usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions<br>|[inline_response_403](#schemainline_response_403)|
|404|Not Found|The resource was not found or is no longer available<br>|[inline_response_404](#schemainline_response_404)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Retrieve payments for a payout

<a id="opIdgetPaymentsForPayoutV3"></a>

> Code samples

```bash
curl https://example.com/v3/payouts/497f6eca-6276-4993-bfeb-53cbbbba6f08/payments \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v3/payouts/{payoutId}/payments`

Retrieve payments for a payout

<h3 id="retrieve-payments-for-a-payout-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|payoutId|path|string(uuid)|true|Id of the payout|
|status|query|string|false|Payment Status<br>* ACCEPTED: any payment which was accepted at submission time (status may have changed since)<br>* REJECTED: any payment rejected by initial submission processing<br>* WITHDRAWN: any payment which has been withdrawn<br>* WITHDRAWABLE: any payment eligible for withdrawal<br>|
|remoteId|query|string|false|The remote id of the payees.|
|payorPaymentId|query|string|false|Payor's Id of the Payment|
|sourceAccountName|query|string|false|Physical Account Name|
|transmissionType|query|string|false|Transmission Type<br>* ACH<br>* SAME_DAY_ACH<br>* WIRE<br>|
|paymentMemo|query|string|false|Payment Memo of the Payment|
|pageSize|query|integer(int32)|false|The number of results to return in a page|
|page|query|integer(int32)|false|Page number. Default is 1.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status|ACCEPTED|
|status|REJECTED|
|status|WITHDRAWN|
|status|WITHDRAWABLE|
|transmissionType|ACH|
|transmissionType|SAME_DAY_ACH|
|transmissionType|WIRE|

> Example responses

> 200 Response

```json
{
  "content": [
    {
      "amount": 10000,
      "autoWithdrawnReasonCode": "VE0003",
      "currency": "USD",
      "payee": {
        "company": {
          "companyName": "ACME Anvils PLC"
        },
        "individual": {
          "name": {
            "firstName": "Fred",
            "lastName": "Flintstone"
          }
        },
        "payeeId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
      },
      "paymentId": "859af785-223b-4d5b-a708-5fa57f006dbb",
      "paymentMemo": "INV00112",
      "paymentMetadata": "invoiceeId_123|abc001:12345|xyz002:4567",
      "payorPaymentId": "123211321ABSD",
      "railsId": "SVB",
      "remoteId": "remoteIdVal123",
      "remoteSystemId": "OB012",
      "sourceAccountName": "Chase Bank Account",
      "status": "AWAITING_FUNDS",
      "transmissionType": "LOCAL",
      "withdrawable": false
    },
    {
      "amount": 10000,
      "autoWithdrawnReasonCode": "VE0003",
      "currency": "USD",
      "payee": {
        "company": {
          "companyName": "ACME Anvils PLC"
        },
        "individual": {
          "name": {
            "firstName": "Fred",
            "lastName": "Flintstone"
          }
        },
        "payeeId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
      },
      "paymentId": "859af785-223b-4d5b-a708-5fa57f006dbb",
      "paymentMemo": "INV00112",
      "paymentMetadata": "invoiceeId_123|abc001:12345|xyz002:4567",
      "payorPaymentId": "123211321ABSD",
      "railsId": "SVB",
      "remoteId": "remoteIdVal123",
      "remoteSystemId": "OB012",
      "sourceAccountName": "Chase Bank Account",
      "status": "AWAITING_FUNDS",
      "transmissionType": "LOCAL",
      "withdrawable": false
    }
  ],
  "links": [
    {
      "href": "href",
      "rel": "rel"
    },
    {
      "href": "href",
      "rel": "rel"
    }
  ],
  "page": {
    "numberOfElements": 0,
    "page": 5,
    "pageSize": 5,
    "totalElements": 6,
    "totalPages": 1
  }
}
```

> 404 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 404
}
```

<h3 id="retrieve-payments-for-a-payout-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Payments for payout|[PagedPaymentsResponseV3](#schemapagedpaymentsresponsev3)|
|404|Not Found|The resource was not found or is no longer available<br>|[inline_response_404](#schemainline_response_404)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Create a quote for the payout

<a id="opIdcreateQuoteForPayoutV3"></a>

> Code samples

```bash
curl https://example.com/v3/payouts/497f6eca-6276-4993-bfeb-53cbbbba6f08/quote \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v3/payouts/{payoutId}/quote`

Create quote for a payout

<h3 id="create-a-quote-for-the-payout-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|payoutId|path|string(uuid)|true|Id of the payout|

> Example responses

> 200 Response

```json
{
  "fxSummaries": [
    {
      "creationTime": "2022-10-30T09:45:09Z",
      "expiryTime": "2022-10-30T09:50:09Z",
      "fundingStatus": "FUNDED",
      "invertedRate": 1.12,
      "paymentCurrency": "USD",
      "quoteId": "af80d455-29dd-4e72-a000-495a9829a7d0",
      "rate": 0.89,
      "sourceCurrency": "USD",
      "status": "QUOTED",
      "totalPaymentAmount": 890000,
      "totalSourceAmount": 1000000
    },
    {
      "creationTime": "2022-10-30T09:45:09Z",
      "expiryTime": "2022-10-30T09:50:09Z",
      "fundingStatus": "FUNDED",
      "invertedRate": 1.12,
      "paymentCurrency": "USD",
      "quoteId": "af80d455-29dd-4e72-a000-495a9829a7d0",
      "rate": 0.89,
      "sourceCurrency": "USD",
      "status": "QUOTED",
      "totalPaymentAmount": 890000,
      "totalSourceAmount": 1000000
    }
  ]
}
```

> 404 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 404
}
```

> 409 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 409
}
```

<h3 id="create-a-quote-for-the-payout-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Quote for payout|[QuoteResponseV3](#schemaquoteresponsev3)|
|404|Not Found|The resource was not found or is no longer available<br>|[inline_response_404](#schemainline_response_404)|
|409|Conflict|The request contained data that would result in a duplicate value<br>|[inline_response_409](#schemainline_response_409)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Schedule a payout

<a id="opIdscheduleForPayout"></a>

> Code samples

```bash
curl https://example.com/v3/payouts/497f6eca-6276-4993-bfeb-53cbbbba6f08/schedule \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "notificationsEnabled": true,
    "scheduledFor": "2025-01-01T10:00:00Z"
  }'
```

`POST /v3/payouts/{payoutId}/schedule`

<p>Schedule a payout for auto-instruction in the future
or update existing payout schedule if the payout has been scheduled before.</p>


> Body parameter

```json
{
  "notificationsEnabled": true,
  "scheduledFor": "2025-01-01T10:00:00Z"
}
```

<h3 id="schedule-a-payout-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|payoutId|path|string(uuid)|true|Id of the payout|
|body|body|[SchedulePayoutRequestV3](#schemaschedulepayoutrequestv3)|false|schedule payout parameters|
|» notificationsEnabled|body|boolean|true|Flag to indicate whether to receive notifications when scheduled payout is processed|
|» scheduledFor|body|string(date-time)|true|UTC timestamp for instructing the payout. Format is ISO-8601.|

> Example responses

> 400 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 400
}
```

> 401 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 401
}
```

> 403 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 403
}
```

> 404 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 404
}
```

> 409 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 409
}
```

<h3 id="schedule-a-payout-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Payout is scheduled successfully|None|
|400|Bad Request|Invalid request. See Error message payload for details of failure|[inline_response_400](#schemainline_response_400)|
|401|Unauthorized|Invalid access token. May be expired or invalid|[inline_response_401](#schemainline_response_401)|
|403|Forbidden|The authentication does not have permissions to access the resource<br>This usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions<br>|[inline_response_403](#schemainline_response_403)|
|404|Not Found|The resource was not found or is no longer available<br>|[inline_response_404](#schemainline_response_404)|
|409|Conflict|The request contained data that would result in a duplicate value<br>|[inline_response_409](#schemainline_response_409)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Deschedule a payout

<a id="opIddeschedulePayout"></a>

> Code samples

```bash
curl https://example.com/v3/payouts/497f6eca-6276-4993-bfeb-53cbbbba6f08/schedule \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v3/payouts/{payoutId}/schedule`

Remove the schedule for a scheduled payout

<h3 id="deschedule-a-payout-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|payoutId|path|string(uuid)|true|Id of the payout|

> Example responses

> 401 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 401
}
```

> 403 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 403
}
```

> 404 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 404
}
```

> 409 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 409
}
```

<h3 id="deschedule-a-payout-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Descheduled payout successfully|None|
|401|Unauthorized|Invalid access token. May be expired or invalid|[inline_response_401](#schemainline_response_401)|
|403|Forbidden|The authentication does not have permissions to access the resource<br>This usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions<br>|[inline_response_403](#schemainline_response_403)|
|404|Not Found|The resource was not found or is no longer available<br>|[inline_response_404](#schemainline_response_404)|
|409|Conflict|The request contained data that would result in a duplicate value<br>|[inline_response_409](#schemainline_response_409)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

<h1 id="velo-payments-apis-funding">Funding</h1>

<p>APIs for initiating funding of source accounts from external sources and viewing balance updates</p>


## Get Funding Audit Delta

<a id="opIdlistFundingAuditDeltas"></a>

> Code samples

```bash
curl 'https://example.com/v1/deltas/fundings?payorId=497f6eca-6276-4993-bfeb-53cbbbba6f08&updatedSince=1970-01-01T00%3A00%3A00Z' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/deltas/fundings`

Get funding audit deltas for a payor

<h3 id="get-funding-audit-delta-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|payorId|query|string(uuid)|true|none|
|updatedSince|query|string(date-time)|true|none|
|page|query|integer(int32)|false|Page number. Default is 1.|
|pageSize|query|integer(int32)|false|The number of results to return in a page|

> Example responses

> 200 Response

```json
{
  "content": [
    {
      "amount": 2,
      "currency": "USD",
      "fundingId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "status": "status"
    },
    {
      "amount": 2,
      "currency": "USD",
      "fundingId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "status": "status"
    }
  ],
  "links": [
    {
      "href": "href",
      "rel": "rel"
    },
    {
      "href": "href",
      "rel": "rel"
    }
  ],
  "page": {
    "numberOfElements": 0,
    "page": 5,
    "pageSize": 5,
    "totalElements": 6,
    "totalPages": 1
  }
}
```

> 400 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 400
}
```

> 401 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 401
}
```

> 403 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 403
}
```

<h3 id="get-funding-audit-delta-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Funding Account Deltas|[PageResourceFundingPayorStatusAuditResponseFundingPayorStatusAuditResponse](#schemapageresourcefundingpayorstatusauditresponsefundingpayorstatusauditresponse)|
|400|Bad Request|Invalid request. See Error message payload for details of failure|[inline_response_400](#schemainline_response_400)|
|401|Unauthorized|Invalid access token. May be expired or invalid|[inline_response_401](#schemainline_response_401)|
|403|Forbidden|The authentication does not have permissions to access the resource<br>This usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions<br>|[inline_response_403](#schemainline_response_403)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Get Funding

<a id="opIdgetFundingByIdV1"></a>

> Code samples

```bash
curl https://example.com/v1/fundings/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/fundings/{fundingId}`

Get Funding by Id

<h3 id="get-funding-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fundingId|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "allocationDate": "2000-01-23T04:56:07.000+00:00",
  "allocationType": "allocationType",
  "amount": 0,
  "currency": "USD",
  "detectedFundingRef": "detectedFundingRef",
  "fundingAccountType": "FBO",
  "fundingId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "hiddenDate": "2000-01-23T04:56:07.000+00:00",
  "payorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "physicalAccountName": "physicalAccountName",
  "reason": "reason",
  "sourceAccountId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "status": "ALLOCATED",
  "text": "text"
}
```

> 400 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 400
}
```

> 401 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 401
}
```

> 403 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 403
}
```

> 404 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 404
}
```

<h3 id="get-funding-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Funding response|[FundingResponse](#schemafundingresponse)|
|400|Bad Request|Invalid request. See Error message payload for details of failure|[inline_response_400](#schemainline_response_400)|
|401|Unauthorized|Invalid access token. May be expired or invalid|[inline_response_401](#schemainline_response_401)|
|403|Forbidden|The authentication does not have permissions to access the resource<br>This usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions<br>|[inline_response_403](#schemainline_response_403)|
|404|Not Found|The resource was not found or is no longer available<br>|[inline_response_404](#schemainline_response_404)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Get Funding Accounts

<a id="opIdgetFundingAccountsV2"></a>

> Code samples

```bash
curl https://example.com/v2/fundingAccounts \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/fundingAccounts`

Get the funding accounts.

<h3 id="get-funding-accounts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|payorId|query|string(uuid)|false|none|
|name|query|string|false|The descriptive funding account name|
|country|query|string|false|The 2 letter ISO 3166-1 country code (upper case)|
|currency|query|string|false|The ISO 4217 currency code|
|type|query|[FundingAccountTypeV2](#schemafundingaccounttypev2)|false|The type of funding account.|
|page|query|integer(int32)|false|Page number. Default is 1.|
|pageSize|query|integer(int32)|false|The number of results to return in a page|
|sort|query|string|false|List of sort fields (e.g. ?sort=accountName:asc,name:asc) Default is accountName:asc The supported sort fields are - accountName, name.|
|sensitive|query|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "content": [
    {
      "accountName": "Payor Corp",
      "accountNumber": "7001001234",
      "archived": true,
      "country": "US",
      "currency": "USD",
      "id": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "name": "My Funding Account",
      "payorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "routingNumber": 12345678,
      "type": "FBO"
    },
    {
      "accountName": "Payor Corp",
      "accountNumber": "7001001234",
      "archived": true,
      "country": "US",
      "currency": "USD",
      "id": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "name": "My Funding Account",
      "payorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "routingNumber": 12345678,
      "type": "FBO"
    }
  ],
  "links": [
    {
      "href": "https://api.sandbox.velopayments.com/v1/sourceAccounts?payorId=a2967711-df07-41e5-b5ea-f563088911c6&page=1&pageSize=0&sort=fundingRef:asc",
      "rel": "first"
    },
    {
      "href": "https://api.sandbox.velopayments.com/v1/sourceAccounts?payorId=a2967711-df07-41e5-b5ea-f563088911c6&page=1&pageSize=0&sort=fundingRef:asc",
      "rel": "first"
    }
  ],
  "page": {
    "numberOfElements": 1,
    "page": 1,
    "pageSize": 25,
    "totalElements": 1,
    "totalPages": 2
  }
}
```

> 400 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 400
}
```

> 403 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 403
}
```

<h3 id="get-funding-accounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Get Funding Accounts Response|[ListFundingAccountsResponseV2](#schemalistfundingaccountsresponsev2)|
|400|Bad Request|Invalid request. See Error message payload for details of failure|[inline_response_400](#schemainline_response_400)|
|403|Forbidden|The authentication does not have permissions to access the resource<br>This usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions<br>|[inline_response_403](#schemainline_response_403)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Get Funding Account

<a id="opIdgetFundingAccountV2"></a>

> Code samples

```bash
curl https://example.com/v2/fundingAccounts/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/fundingAccounts/{fundingAccountId}`

Get Funding Account by ID

<h3 id="get-funding-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fundingAccountId|path|string(uuid)|true|none|
|sensitive|query|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "accountName": "Payor Corp",
  "accountNumber": "7001001234",
  "archived": true,
  "country": "US",
  "currency": "USD",
  "id": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "name": "My Funding Account",
  "payorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "routingNumber": 12345678,
  "type": "FBO"
}
```

> 401 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 401
}
```

> 403 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 403
}
```

> 404 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 404
}
```

<h3 id="get-funding-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Funding Account Response|[FundingAccountResponseV2](#schemafundingaccountresponsev2)|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Invalid access token. May be expired or invalid|[inline_response_401](#schemainline_response_401)|
|403|Forbidden|The authentication does not have permissions to access the resource<br>This usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions<br>|[inline_response_403](#schemainline_response_403)|
|404|Not Found|The resource was not found or is no longer available<br>|[inline_response_404](#schemainline_response_404)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Create Funding Request

<a id="opIdcreateFundingRequestV2"></a>

> Code samples

```bash
curl https://example.com/v2/sourceAccounts/497f6eca-6276-4993-bfeb-53cbbbba6f08/fundingRequest \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "amount": 800828191
  }'
```

`POST /v2/sourceAccounts/{sourceAccountId}/fundingRequest`

<aside class="warning">
This operation is deprecated
</aside>

Instruct a funding request to transfer funds from the payor’s funding bank to the payor’s balance held within Velo  (202 - accepted, 400 - invalid request body, 404 - source account not found).

> Body parameter

```json
{
  "amount": 800828191
}
```

<h3 id="create-funding-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sourceAccountId|path|string(uuid)|true|Source account id|
|body|body|[FundingRequestV2](#schemafundingrequestv2)|true|Body to included amount to be funded|
|» amount|body|integer(int64)|true|Amount to fund, decimal implied|

> Example responses

> 400 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 400
}
```

> 401 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 401
}
```

> 403 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 403
}
```

> 404 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 404
}
```

<h3 id="create-funding-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Request Accepted|None|
|400|Bad Request|Invalid request. See Error message payload for details of failure|[inline_response_400](#schemainline_response_400)|
|401|Unauthorized|Invalid access token. May be expired or invalid|[inline_response_401](#schemainline_response_401)|
|403|Forbidden|The authentication does not have permissions to access the resource<br>This usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions<br>|[inline_response_403](#schemainline_response_403)|
|404|Not Found|The resource was not found or is no longer available<br>|[inline_response_404](#schemainline_response_404)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Create Funding Request

<a id="opIdcreateFundingRequestV3"></a>

> Code samples

```bash
curl https://example.com/v3/sourceAccounts/497f6eca-6276-4993-bfeb-53cbbbba6f08/fundingRequest \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "amount": 800828191,
    "fundingAccountId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
  }'
```

`POST /v3/sourceAccounts/{sourceAccountId}/fundingRequest`

<p>Instruct a funding request to transfer funds from the payor’s funding bank to the payor’s balance held within Velo</p>


> Body parameter

```json
{
  "amount": 800828191,
  "fundingAccountId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
}
```

<h3 id="create-funding-request-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sourceAccountId|path|string(uuid)|true|Source account id|
|body|body|[FundingRequestV3](#schemafundingrequestv3)|true|Body to included amount to be funded|
|» amount|body|integer(int64)|true|Amount to fund in minor units|
|» fundingAccountId|body|string(uuid)|true|The funding account id|

> Example responses

> 400 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 400
}
```

> 401 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 401
}
```

> 403 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 403
}
```

> 404 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 404
}
```

<h3 id="create-funding-request-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Request Accepted|None|
|400|Bad Request|Invalid request. See Error message payload for details of failure|[inline_response_400](#schemainline_response_400)|
|401|Unauthorized|Invalid access token. May be expired or invalid|[inline_response_401](#schemainline_response_401)|
|403|Forbidden|The authentication does not have permissions to access the resource<br>This usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions<br>|[inline_response_403](#schemainline_response_403)|
|404|Not Found|The resource was not found or is no longer available<br>|[inline_response_404](#schemainline_response_404)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|202|Location|string||Reference to created Funding Request|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

<h1 id="velo-payments-apis-source-accounts">Source Accounts</h1>

<p>Source Accounts are where funds are drawn from for making payouts</p>


## Set notifications

<a id="opIdsetNotificationsRequest"></a>

> Code samples

```bash
curl https://example.com/v1/sourceAccounts/497f6eca-6276-4993-bfeb-53cbbbba6f08/notifications \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "minimumBalance": 800828190
  }'
```

`POST /v1/sourceAccounts/{sourceAccountId}/notifications`

<aside class="warning">
This operation is deprecated
</aside>

<p>Set notifications for a given source account</p>
<p>deprecated since 2.34 (use v3 version)</p>


> Body parameter

```json
{
  "minimumBalance": 800828190
}
```

<h3 id="set-notifications-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sourceAccountId|path|string(uuid)|true|Source account id|
|body|body|[SetNotificationsRequest](#schemasetnotificationsrequest)|true|Body to included minimum balance to set|
|» minimumBalance|body|integer(int64)|true|Amount to set as minimum balance in minor units|

> Example responses

> 400 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 400
}
```

> 401 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 401
}
```

> 403 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 403
}
```

> 404 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 404
}
```

<h3 id="set-notifications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Request Fulfilled|None|
|400|Bad Request|Invalid request. See Error message payload for details of failure|[inline_response_400](#schemainline_response_400)|
|401|Unauthorized|Invalid access token. May be expired or invalid|[inline_response_401](#schemainline_response_401)|
|403|Forbidden|The authentication does not have permissions to access the resource<br>This usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions<br>|[inline_response_403](#schemainline_response_403)|
|404|Not Found|The resource was not found or is no longer available<br>|[inline_response_404](#schemainline_response_404)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Get list of source accounts

<a id="opIdgetSourceAccountsV2"></a>

> Code samples

```bash
curl https://example.com/v2/sourceAccounts \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/sourceAccounts`

<aside class="warning">
This operation is deprecated
</aside>

List source accounts.

<h3 id="get-list-of-source-accounts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|physicalAccountName|query|string|false|Physical Account Name|
|physicalAccountId|query|string(uuid)|false|The physical account ID|
|payorId|query|string(uuid)|false|The account owner Payor ID|
|fundingAccountId|query|string(uuid)|false|The funding account ID|
|page|query|integer(int32)|false|Page number. Default is 1.|
|pageSize|query|integer(int32)|false|The number of results to return in a page|
|sort|query|string|false|List of sort fields e.g. ?sort=name:asc<br>Default is name:asc<br>The supported sort fields are - fundingRef, name, balance<br>|

> Example responses

> 200 Response

```json
{
  "content": [
    {
      "accountType": "FBO",
      "autoTopUpConfig": {
        "enabled": true,
        "minBalance": 10000,
        "targetBalance": 300000
      },
      "balance": 1203489,
      "balanceVisible": true,
      "currency": "USD",
      "customerId": "Joe Customer",
      "fundingAccountId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "fundingRef": "a1b2c3d4",
      "id": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "name": "MyAccountName",
      "notifications": {
        "minimumBalance": 120000
      },
      "payorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "physicalAccountId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "physicalAccountName": "VELO_FBO_MYBANKA_USD",
      "pooled": true,
      "railsId": "BOA_RAIL"
    },
    {
      "accountType": "FBO",
      "autoTopUpConfig": {
        "enabled": true,
        "minBalance": 10000,
        "targetBalance": 300000
      },
      "balance": 1203489,
      "balanceVisible": true,
      "currency": "USD",
      "customerId": "Joe Customer",
      "fundingAccountId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "fundingRef": "a1b2c3d4",
      "id": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "name": "MyAccountName",
      "notifications": {
        "minimumBalance": 120000
      },
      "payorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "physicalAccountId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "physicalAccountName": "VELO_FBO_MYBANKA_USD",
      "pooled": true,
      "railsId": "BOA_RAIL"
    }
  ],
  "links": [
    {
      "href": "https://api.sandbox.velopayments.com/v2/sourceAccounts?payorId=a2967711-df07-41e5-b5ea-f563088911c6&page=1&pageSize=0&sort=fundingRef:asc",
      "rel": "first"
    },
    {
      "href": "https://api.sandbox.velopayments.com/v2/sourceAccounts?payorId=a2967711-df07-41e5-b5ea-f563088911c6&page=1&pageSize=0&sort=fundingRef:asc",
      "rel": "first"
    }
  ],
  "page": {
    "numberOfElements": 12,
    "page": 1,
    "pageSize": 25,
    "totalElements": 33,
    "totalPages": 2
  }
}
```

> 400 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 400
}
```

> 401 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 401
}
```

> 403 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 403
}
```

> 404 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 404
}
```

<h3 id="get-list-of-source-accounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List Source Account response|[ListSourceAccountResponseV2](#schemalistsourceaccountresponsev2)|
|400|Bad Request|Invalid request. See Error message payload for details of failure|[inline_response_400](#schemainline_response_400)|
|401|Unauthorized|Invalid access token. May be expired or invalid|[inline_response_401](#schemainline_response_401)|
|403|Forbidden|The authentication does not have permissions to access the resource<br>This usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions<br>|[inline_response_403](#schemainline_response_403)|
|404|Not Found|The resource was not found or is no longer available<br>|[inline_response_404](#schemainline_response_404)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Get Source Account

<a id="opIdgetSourceAccountV2"></a>

> Code samples

```bash
curl https://example.com/v2/sourceAccounts/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/sourceAccounts/{sourceAccountId}`

<aside class="warning">
This operation is deprecated
</aside>

Get details about given source account.

<h3 id="get-source-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sourceAccountId|path|string(uuid)|true|Source account id|

> Example responses

> 200 Response

```json
{
  "accountType": "FBO",
  "autoTopUpConfig": {
    "enabled": true,
    "minBalance": 10000,
    "targetBalance": 300000
  },
  "balance": 1203489,
  "balanceVisible": true,
  "currency": "USD",
  "customerId": "Joe Customer",
  "fundingAccountId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "fundingRef": "a1b2c3d4",
  "id": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "name": "MyAccountName",
  "notifications": {
    "minimumBalance": 120000
  },
  "payorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "physicalAccountId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "physicalAccountName": "VELO_FBO_MYBANKA_USD",
  "pooled": true,
  "railsId": "BOA_RAIL"
}
```

> 400 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 400
}
```

> 401 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 401
}
```

> 403 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 403
}
```

> 404 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 404
}
```

<h3 id="get-source-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Source account response|[SourceAccountResponseV2](#schemasourceaccountresponsev2)|
|400|Bad Request|Invalid request. See Error message payload for details of failure|[inline_response_400](#schemainline_response_400)|
|401|Unauthorized|Invalid access token. May be expired or invalid|[inline_response_401](#schemainline_response_401)|
|403|Forbidden|The authentication does not have permissions to access the resource<br>This usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions<br>|[inline_response_403](#schemainline_response_403)|
|404|Not Found|The resource was not found or is no longer available<br>|[inline_response_404](#schemainline_response_404)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Transfer Funds between source accounts

<a id="opIdtransferFundsV2"></a>

> Code samples

```bash
curl https://example.com/v2/sourceAccounts/497f6eca-6276-4993-bfeb-53cbbbba6f08/transfers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "amount": 800828191,
    "currency": "USD",
    "toSourceAccountId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
  }'
```

`POST /v2/sourceAccounts/{sourceAccountId}/transfers`

<aside class="warning">
This operation is deprecated
</aside>

Transfer funds between source accounts for a Payor. The 'from' source account is identified in the URL, and is the account which will be debited. The 'to' (destination) source account is in the body, and is the account which will be credited. Both source accounts must belong to the same Payor. There must be sufficient balance in the 'from' source account, otherwise the transfer attempt will fail.

> Body parameter

```json
{
  "amount": 800828191,
  "currency": "USD",
  "toSourceAccountId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
}
```

<h3 id="transfer-funds-between-source-accounts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sourceAccountId|path|string(uuid)|true|The 'from' source account id, which will be debited|
|body|body|[TransferRequestV2](#schematransferrequestv2)|true|Body|
|» amount|body|integer(int64)|true|Amount to transfer, in minor units|
|» currency|body|string|true|none|
|» toSourceAccountId|body|string(uuid)|true|The 'to' source account id, which will be credited|

> Example responses

> 400 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 400
}
```

> 401 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 401
}
```

> 403 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 403
}
```

> 404 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 404
}
```

<h3 id="transfer-funds-between-source-accounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Request Processed|None|
|400|Bad Request|Invalid request. See Error message payload for details of failure|[inline_response_400](#schemainline_response_400)|
|401|Unauthorized|Invalid access token. May be expired or invalid|[inline_response_401](#schemainline_response_401)|
|403|Forbidden|The authentication does not have permissions to access the resource<br>This usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions<br>|[inline_response_403](#schemainline_response_403)|
|404|Not Found|The resource was not found or is no longer available<br>|[inline_response_404](#schemainline_response_404)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Get list of source accounts

<a id="opIdgetSourceAccountsV3"></a>

> Code samples

```bash
curl https://example.com/v3/sourceAccounts \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v3/sourceAccounts`

List source accounts.

<h3 id="get-list-of-source-accounts-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|physicalAccountName|query|string|false|Physical Account Name|
|physicalAccountId|query|string(uuid)|false|The physical account ID|
|payorId|query|string(uuid)|false|The account owner Payor ID|
|fundingAccountId|query|string(uuid)|false|The funding account ID|
|includeUserDeleted|query|string(boolean)|false|A filter for retrieving both active accounts and user deleted ones|
|type|query|[SourceAccountTypeV3](#schemasourceaccounttypev3)|false|The type of source account.|
|page|query|integer(int32)|false|Page number. Default is 1.|
|pageSize|query|integer(int32)|false|The number of results to return in a page|
|sort|query|string|false|List of sort fields e.g. ?sort=name:asc<br>Default is name:asc<br>The supported sort fields are - fundingRef, name, balance<br>|

> Example responses

> 200 Response

```json
{
  "content": [
    {
      "autoTopUpConfig": {
        "enabled": true,
        "fundingAccountId": "640ab1bd-8a6a-4603-a83a-1edbc3ed5689",
        "minBalance": 10000,
        "targetBalance": 300000
      },
      "balance": 1203489,
      "country": "US",
      "currency": "USD",
      "customerId": "Joe Customer",
      "deleted": true,
      "deletedAt": "2021-01-27T10:08:25.701Z",
      "fundingRef": "a1b2c3d4",
      "id": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "name": "MyAccountName",
      "notifications": {
        "minimumBalance": 120000
      },
      "payorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "physicalAccountId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "physicalAccountName": "VELO_FBO_MYBANKA_USD",
      "pooled": true,
      "railsId": "BOA_RAIL",
      "type": "FBO",
      "userDeleted": true
    },
    {
      "autoTopUpConfig": {
        "enabled": true,
        "fundingAccountId": "640ab1bd-8a6a-4603-a83a-1edbc3ed5689",
        "minBalance": 10000,
        "targetBalance": 300000
      },
      "balance": 1203489,
      "country": "US",
      "currency": "USD",
      "customerId": "Joe Customer",
      "deleted": true,
      "deletedAt": "2021-01-27T10:08:25.701Z",
      "fundingRef": "a1b2c3d4",
      "id": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "name": "MyAccountName",
      "notifications": {
        "minimumBalance": 120000
      },
      "payorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "physicalAccountId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "physicalAccountName": "VELO_FBO_MYBANKA_USD",
      "pooled": true,
      "railsId": "BOA_RAIL",
      "type": "FBO",
      "userDeleted": true
    }
  ],
  "links": [
    {
      "href": "https://api.sandbox.velopayments.com/v3/sourceAccounts?payorId=a2967711-df07-41e5-b5ea-f563088911c6&page=1&pageSize=0&sort=fundingRef:asc",
      "rel": "first"
    },
    {
      "href": "https://api.sandbox.velopayments.com/v3/sourceAccounts?payorId=a2967711-df07-41e5-b5ea-f563088911c6&page=1&pageSize=0&sort=fundingRef:asc",
      "rel": "first"
    }
  ],
  "page": {
    "numberOfElements": 12,
    "page": 1,
    "pageSize": 25,
    "totalElements": 33,
    "totalPages": 2
  }
}
```

> 400 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 400
}
```

> 401 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 401
}
```

> 403 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 403
}
```

> 404 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 404
}
```

<h3 id="get-list-of-source-accounts-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List Source Account response|[ListSourceAccountResponseV3](#schemalistsourceaccountresponsev3)|
|400|Bad Request|Invalid request. See Error message payload for details of failure|[inline_response_400](#schemainline_response_400)|
|401|Unauthorized|Invalid access token. May be expired or invalid|[inline_response_401](#schemainline_response_401)|
|403|Forbidden|The authentication does not have permissions to access the resource<br>This usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions<br>|[inline_response_403](#schemainline_response_403)|
|404|Not Found|The resource was not found or is no longer available<br>|[inline_response_404](#schemainline_response_404)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Get details about given source account.

<a id="opIdgetSourceAccountV3"></a>

> Code samples

```bash
curl https://example.com/v3/sourceAccounts/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v3/sourceAccounts/{sourceAccountId}`

Get details about given source account.

<h3 id="get-details-about-given-source-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sourceAccountId|path|string(uuid)|true|Source account id|

> Example responses

> 200 Response

```json
{
  "autoTopUpConfig": {
    "enabled": true,
    "fundingAccountId": "640ab1bd-8a6a-4603-a83a-1edbc3ed5689",
    "minBalance": 10000,
    "targetBalance": 300000
  },
  "balance": 1203489,
  "country": "US",
  "currency": "USD",
  "customerId": "Joe Customer",
  "deleted": true,
  "deletedAt": "2021-01-27T10:08:25.701Z",
  "fundingRef": "a1b2c3d4",
  "id": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "name": "MyAccountName",
  "notifications": {
    "minimumBalance": 120000
  },
  "payorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "physicalAccountId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "physicalAccountName": "VELO_FBO_MYBANKA_USD",
  "pooled": true,
  "railsId": "BOA_RAIL",
  "type": "FBO",
  "userDeleted": true
}
```

> 400 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 400
}
```

> 401 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 401
}
```

> 403 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 403
}
```

> 404 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 404
}
```

<h3 id="get-details-about-given-source-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Source account response|[SourceAccountResponseV3](#schemasourceaccountresponsev3)|
|400|Bad Request|Invalid request. See Error message payload for details of failure|[inline_response_400](#schemainline_response_400)|
|401|Unauthorized|Invalid access token. May be expired or invalid|[inline_response_401](#schemainline_response_401)|
|403|Forbidden|The authentication does not have permissions to access the resource<br>This usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions<br>|[inline_response_403](#schemainline_response_403)|
|404|Not Found|The resource was not found or is no longer available<br>|[inline_response_404](#schemainline_response_404)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Set notifications

<a id="opIdsetNotificationsRequestV3"></a>

> Code samples

```bash
curl https://example.com/v3/sourceAccounts/497f6eca-6276-4993-bfeb-53cbbbba6f08/notifications \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "minimumBalance": 10000000
  }'
```

`POST /v3/sourceAccounts/{sourceAccountId}/notifications`

<p>Set notifications for a given source account</p>
<p>If the balance falls below the amount set in the request an email notification will be sent to the email address registered in the payor profile</p>


> Body parameter

```json
{
  "minimumBalance": 10000000
}
```

<h3 id="set-notifications-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sourceAccountId|path|string(uuid)|true|Source account id|
|body|body|[SetNotificationsRequest_2](#schemasetnotificationsrequest_2)|true|Body to included minimum balance to set|
|» minimumBalance|body|integer(int64)|true|Amount to set as minimum balance for notifications in minor units|

> Example responses

> 400 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 400
}
```

> 401 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 401
}
```

> 403 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 403
}
```

> 404 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 404
}
```

<h3 id="set-notifications-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Request Fulfilled|None|
|400|Bad Request|Invalid request. See Error message payload for details of failure|[inline_response_400](#schemainline_response_400)|
|401|Unauthorized|Invalid access token. May be expired or invalid|[inline_response_401](#schemainline_response_401)|
|403|Forbidden|The authentication does not have permissions to access the resource<br>This usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions<br>|[inline_response_403](#schemainline_response_403)|
|404|Not Found|The resource was not found or is no longer available<br>|[inline_response_404](#schemainline_response_404)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Transfer Funds between source accounts

<a id="opIdtransferFundsV3"></a>

> Code samples

```bash
curl https://example.com/v3/sourceAccounts/497f6eca-6276-4993-bfeb-53cbbbba6f08/transfers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "amount": 800828191,
    "currency": "USD",
    "toSourceAccountId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
  }'
```

`POST /v3/sourceAccounts/{sourceAccountId}/transfers`

Transfer funds between source accounts for a Payor. The 'from' source account is identified in the URL, and is the account which will be debited. The 'to' (destination) source account is in the body, and is the account which will be credited. Both source accounts must belong to the same Payor. There must be sufficient balance in the 'from' source account, otherwise the transfer attempt will fail.

> Body parameter

```json
{
  "amount": 800828191,
  "currency": "USD",
  "toSourceAccountId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
}
```

<h3 id="transfer-funds-between-source-accounts-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sourceAccountId|path|string(uuid)|true|The 'from' source account id, which will be debited|
|body|body|[TransferRequestV3](#schematransferrequestv3)|true|Body|
|» amount|body|integer(int64)|true|Amount to transfer, in minor units|
|» currency|body|string|true|Valid ISO 4217 3 letter currency code. See the <a href="https://www.iso.org/iso-4217-currency-codes.html" target="_blank" a>ISO specification</a> for details.|
|» toSourceAccountId|body|string(uuid)|true|The 'to' source account id, which will be credited|

> Example responses

> 400 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 400
}
```

> 401 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 401
}
```

> 403 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 403
}
```

> 404 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 404
}
```

<h3 id="transfer-funds-between-source-accounts-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Request Processed|None|
|400|Bad Request|Invalid request. See Error message payload for details of failure|[inline_response_400](#schemainline_response_400)|
|401|Unauthorized|Invalid access token. May be expired or invalid|[inline_response_401](#schemainline_response_401)|
|403|Forbidden|The authentication does not have permissions to access the resource<br>This usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions<br>|[inline_response_403](#schemainline_response_403)|
|404|Not Found|The resource was not found or is no longer available<br>|[inline_response_404](#schemainline_response_404)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

<h1 id="velo-payments-apis-payment-audit-service">Payment Audit Service</h1>

Payment Audit Service APIs allow you to see the history of fundings, payouts, and payments to payees.

## Get Fundings for Payor

<a id="opIdgetFundingsV4"></a>

> Code samples

```bash
curl 'https://example.com/v4/paymentaudit/fundings?payorId=497f6eca-6276-4993-bfeb-53cbbbba6f08' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v4/paymentaudit/fundings`

<p>Get a list of Fundings for a payor.</p>


<h3 id="get-fundings-for-payor-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|payorId|query|string(uuid)|true|The account owner Payor ID|
|sourceAccountName|query|string|false|The source account name|
|page|query|integer(int32)|false|Page number. Default is 1.|
|pageSize|query|integer(int32)|false|The number of results to return in a page|
|sort|query|string|false|List of sort fields. Example: ```?sort=destinationCurrency:asc,destinationAmount:asc```<br>Default is no sort. The supported sort fields are: dateTime and amount.<br>|

> Example responses

> 200 Response

```json
{
  "content": [
    {
      "amount": 120000,
      "currency": "USD",
      "dateTime": "2000-01-23T04:56:07.000+00:00",
      "events": [
        {
          "eventDateTime": "2000-01-23T04:56:07.000+00:00",
          "eventId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
          "fundingEventType": "fundingEventType",
          "principal": "principal"
        },
        {
          "eventDateTime": "2000-01-23T04:56:07.000+00:00",
          "eventId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
          "fundingEventType": "fundingEventType",
          "principal": "principal"
        }
      ],
      "fundingAccountName": "fundingAccountName",
      "fundingType": "fundingType",
      "sourceAccountName": "sourceAccountName",
      "status": "status",
      "topupType": "topupType"
    },
    {
      "amount": 120000,
      "currency": "USD",
      "dateTime": "2000-01-23T04:56:07.000+00:00",
      "events": [
        {
          "eventDateTime": "2000-01-23T04:56:07.000+00:00",
          "eventId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
          "fundingEventType": "fundingEventType",
          "principal": "principal"
        },
        {
          "eventDateTime": "2000-01-23T04:56:07.000+00:00",
          "eventId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
          "fundingEventType": "fundingEventType",
          "principal": "principal"
        }
      ],
      "fundingAccountName": "fundingAccountName",
      "fundingType": "fundingType",
      "sourceAccountName": "sourceAccountName",
      "status": "status",
      "topupType": "topupType"
    }
  ],
  "links": [
    {
      "href": "https://api.sandbox.velopayments.com/v1/paymentaudit/fundings?payorId=2a5d8af2-a1ed-4d7f-b9a7-ebe4b333be5a&page=1&pageSize=10",
      "rel": "first"
    },
    {
      "href": "https://api.sandbox.velopayments.com/v1/paymentaudit/fundings?payorId=2a5d8af2-a1ed-4d7f-b9a7-ebe4b333be5a&page=1&pageSize=10",
      "rel": "first"
    }
  ],
  "page": {
    "numberOfElements": 12,
    "page": 1,
    "pageSize": 25,
    "totalElements": 33,
    "totalPages": 2
  }
}
```

> 400 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 400
}
```

> 401 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 401
}
```

> 403 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 403
}
```

> 404 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 404
}
```

<h3 id="get-fundings-for-payor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Get Fundings normal response|[GetFundingsResponse](#schemagetfundingsresponse)|
|400|Bad Request|Invalid request. See Error message payload for details of failure|[inline_response_400](#schemainline_response_400)|
|401|Unauthorized|Invalid access token. May be expired or invalid|[inline_response_401](#schemainline_response_401)|
|403|Forbidden|The authentication does not have permissions to access the resource<br>This usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions<br>|[inline_response_403](#schemainline_response_403)|
|404|Not Found|The resource was not found or is no longer available<br>|[inline_response_404](#schemainline_response_404)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Get List of Payments

<a id="opIdlistPaymentsAuditV4"></a>

> Code samples

```bash
curl https://example.com/v4/paymentaudit/payments \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v4/paymentaudit/payments`

Get payments for the given payor Id

<h3 id="get-list-of-payments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|payeeId|query|string(uuid)|false|The UUID of the payee.|
|payorId|query|string(uuid)|false|The account owner Payor Id. Required for external users.|
|payorName|query|string|false|The payor’s name. This filters via a case insensitive substring match.|
|remoteId|query|string|false|The remote id of the payees.|
|remoteSystemId|query|string|false|The id of the remote system that is orchestrating payments|
|status|query|string|false|Payment Status|
|transmissionType|query|string|false|Transmission Type<br>* ACH<br>* SAME_DAY_ACH<br>* WIRE<br>* GACHO<br>|
|sourceAccountName|query|string|false|The source account name filter. This filters via a case insensitive substring match.|
|sourceAmountFrom|query|integer(int32)|false|The source amount from range filter. Filters for sourceAmount >= sourceAmountFrom|
|sourceAmountTo|query|integer(int32)|false|The source amount to range filter. Filters for sourceAmount ⇐ sourceAmountTo|
|sourceCurrency|query|string|false|The source currency filter. Filters based on an exact match on the currency.|
|paymentAmountFrom|query|integer(int32)|false|The payment amount from range filter. Filters for paymentAmount >= paymentAmountFrom|
|paymentAmountTo|query|integer(int32)|false|The payment amount to range filter. Filters for paymentAmount ⇐ paymentAmountTo|
|paymentCurrency|query|string|false|The payment currency filter. Filters based on an exact match on the currency.|
|submittedDateFrom|query|string(date)|false|The submitted date from range filter. Format is yyyy-MM-dd.|
|submittedDateTo|query|string(date)|false|The submitted date to range filter. Format is yyyy-MM-dd.|
|paymentMemo|query|string|false|The payment memo filter. This filters via a case insensitive substring match.|
|railsId|query|string|false|Payout Rails ID filter - case insensitive match.<br>Any value is allowed, but you should use one of the supported railsId values.<br>To get this list of values, you should call the 'Get Supported Rails' endpoint.<br>|
|scheduledForDateFrom|query|string(date)|false|Filter payouts scheduled to run on or after the given date. Format is yyyy-MM-dd.|
|scheduledForDateTo|query|string(date)|false|Filter payouts scheduled to run on or before the given date. Format is yyyy-MM-dd.|
|scheduleStatus|query|string|false|Payout Schedule Status|
|postInstructFxStatus|query|string|false|The status of the post instruct FX step if one was required for the payment|
|page|query|integer(int32)|false|Page number. Default is 1.|
|pageSize|query|integer(int32)|false|The number of results to return in a page|
|sort|query|string|false|List of sort fields (e.g. ?sort=submittedDateTime:asc,status:asc). Default is sort by submittedDateTime:desc,paymentId:asc<br>The supported sort fields are: sourceAmount, sourceCurrency, paymentAmount, paymentCurrency,<br>routingNumber, accountNumber, remoteId, submittedDateTime, status and paymentId<br>|
|sensitive|query|boolean|false|Optional. If omitted or set to false, any Personal Identifiable Information (PII) values are returned masked.<br>If set to true, and you have permission, the PII values will be returned as their original unmasked values.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status|ACCEPTED|
|status|AWAITING_FUNDS|
|status|FUNDED|
|status|UNFUNDED|
|status|BANK_PAYMENT_REQUESTED|
|status|REJECTED|
|status|ACCEPTED_BY_RAILS|
|status|CONFIRMED|
|status|FAILED|
|status|RETURNED|
|status|WITHDRAWN|
|transmissionType|ACH|
|transmissionType|SAME_DAY_ACH|
|transmissionType|WIRE|
|transmissionType|LOCAL|
|transmissionType|GACHO|
|scheduleStatus|ANY|
|scheduleStatus|SCHEDULED|
|scheduleStatus|EXECUTED|
|scheduleStatus|FAILED|
|postInstructFxStatus|ANY|
|postInstructFxStatus|INITIATED|
|postInstructFxStatus|CANCELLED|
|postInstructFxStatus|EXECUTED|
|postInstructFxStatus|COMPLETED|
|postInstructFxStatus|RETURNED|
|postInstructFxStatus|RESUBMITTED|
|postInstructFxStatus|REFUNDED|

> Example responses

> 200 Response

```json
{
  "content": [
    {
      "accountName": "My Account Name",
      "accountNumber": "123123232323",
      "autoWithdrawnReasonCode": "autoWithdrawnReasonCode",
      "countryCode": "US",
      "events": [
        {
          "accountName": "accountName",
          "accountNumber": "accountNumber",
          "eventDateTime": "2000-01-23T04:56:07.000+00:00",
          "eventId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
          "eventType": "eventType",
          "iban": "iban",
          "paymentAmount": 1299,
          "paymentCurrency": "EUR",
          "principal": "principal",
          "routingNumber": "routingNumber",
          "scheduledAt": "2000-01-23T04:56:07.000+00:00",
          "scheduledBy": "Aphra Behn",
          "scheduledFor": "2000-01-23T04:56:07.000+00:00",
          "sourceAmount": 1299,
          "sourceCurrency": "EUR"
        },
        {
          "accountName": "accountName",
          "accountNumber": "accountNumber",
          "eventDateTime": "2000-01-23T04:56:07.000+00:00",
          "eventId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
          "eventType": "eventType",
          "iban": "iban",
          "paymentAmount": 1299,
          "paymentCurrency": "EUR",
          "principal": "principal",
          "routingNumber": "routingNumber",
          "scheduledAt": "2000-01-23T04:56:07.000+00:00",
          "scheduledBy": "Aphra Behn",
          "scheduledFor": "2000-01-23T04:56:07.000+00:00",
          "sourceAmount": 1299,
          "sourceCurrency": "EUR"
        }
      ],
      "filenameReference": "file ref",
      "fundingStatus": "fundingStatus",
      "iban": "DE89 3704 0044 0532 0130 00",
      "individualIdentificationNumber": "1231231adf",
      "invertedRate": 3.616076749251911,
      "isPaymentCcyBaseCcy": true,
      "payeeAddressCountryCode": "US",
      "payeeId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "paymentAmount": 7,
      "paymentChannelId": "123asdf",
      "paymentChannelName": "My Payment Channel",
      "paymentCurrency": "EUR",
      "paymentId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "paymentMemo": "Payment memo",
      "paymentMetadata": "sample metadata",
      "paymentScheme": "paymentScheme",
      "paymentTrackingReference": "paymentTrackingReference",
      "payorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "payorName": "payorName",
      "payorPaymentId": "123123asdf",
      "payout": {
        "payoutFrom": {
          "dbaName": "dbaName",
          "payorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
          "payorName": "payorName",
          "principal": "principal",
          "principalId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
        },
        "payoutId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
        "payoutTo": {
          "dbaName": "dbaName",
          "payorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
          "payorName": "payorName",
          "principal": "principal",
          "principalId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
        }
      },
      "postInstructFxInfo": {
        "fxMode": "MANUAL",
        "fxStatus": "INITIATED",
        "fxStatusUpdatedAt": "2000-01-23T04:56:07.000+00:00",
        "fxTransactionReference": "AB123GHI"
      },
      "quoteId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "railsBatchId": "railsBatchId",
      "railsId": "asdf123",
      "railsPaymentId": "railsPaymentId",
      "rate": 9.301444243932576,
      "rejectionReason": "rejectionReason",
      "remoteId": "aasdf123",
      "remoteSystemId": "REMOTE_SYSTEM_ID",
      "remoteSystemPaymentId": "remoteSystemPaymentId",
      "returnCost": 1232,
      "returnReason": "Some Reason Value",
      "routingNumber": "123123123123",
      "schedule": {
        "notificationsEnabled": true,
        "scheduleStatus": "SCHEDULED",
        "scheduledAt": "2000-01-23T04:56:07.000+00:00",
        "scheduledBy": "Aphra Behn",
        "scheduledByPrincipalId": "8946953b-1e3b-49cf-9da4-b704cbb78f3e",
        "scheduledFor": "2000-01-23T04:56:07.000+00:00"
      },
      "sourceAccountId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "sourceAccountName": "My Account",
      "sourceAmount": 12345,
      "sourceCurrency": "EUR",
      "status": "status",
      "submittedDateTime": "2000-01-23T04:56:07.000+00:00",
      "traceNumber": "abodu123",
      "transmissionType": "transmissionType",
      "withdrawable": true,
      "withdrawnReason": "withdrawnReason"
    },
    {
      "accountName": "My Account Name",
      "accountNumber": "123123232323",
      "autoWithdrawnReasonCode": "autoWithdrawnReasonCode",
      "countryCode": "US",
      "events": [
        {
          "accountName": "accountName",
          "accountNumber": "accountNumber",
          "eventDateTime": "2000-01-23T04:56:07.000+00:00",
          "eventId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
          "eventType": "eventType",
          "iban": "iban",
          "paymentAmount": 1299,
          "paymentCurrency": "EUR",
          "principal": "principal",
          "routingNumber": "routingNumber",
          "scheduledAt": "2000-01-23T04:56:07.000+00:00",
          "scheduledBy": "Aphra Behn",
          "scheduledFor": "2000-01-23T04:56:07.000+00:00",
          "sourceAmount": 1299,
          "sourceCurrency": "EUR"
        },
        {
          "accountName": "accountName",
          "accountNumber": "accountNumber",
          "eventDateTime": "2000-01-23T04:56:07.000+00:00",
          "eventId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
          "eventType": "eventType",
          "iban": "iban",
          "paymentAmount": 1299,
          "paymentCurrency": "EUR",
          "principal": "principal",
          "routingNumber": "routingNumber",
          "scheduledAt": "2000-01-23T04:56:07.000+00:00",
          "scheduledBy": "Aphra Behn",
          "scheduledFor": "2000-01-23T04:56:07.000+00:00",
          "sourceAmount": 1299,
          "sourceCurrency": "EUR"
        }
      ],
      "filenameReference": "file ref",
      "fundingStatus": "fundingStatus",
      "iban": "DE89 3704 0044 0532 0130 00",
      "individualIdentificationNumber": "1231231adf",
      "invertedRate": 3.616076749251911,
      "isPaymentCcyBaseCcy": true,
      "payeeAddressCountryCode": "US",
      "payeeId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "paymentAmount": 7,
      "paymentChannelId": "123asdf",
      "paymentChannelName": "My Payment Channel",
      "paymentCurrency": "EUR",
      "paymentId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "paymentMemo": "Payment memo",
      "paymentMetadata": "sample metadata",
      "paymentScheme": "paymentScheme",
      "paymentTrackingReference": "paymentTrackingReference",
      "payorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "payorName": "payorName",
      "payorPaymentId": "123123asdf",
      "payout": {
        "payoutFrom": {
          "dbaName": "dbaName",
          "payorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
          "payorName": "payorName",
          "principal": "principal",
          "principalId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
        },
        "payoutId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
        "payoutTo": {
          "dbaName": "dbaName",
          "payorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
          "payorName": "payorName",
          "principal": "principal",
          "principalId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
        }
      },
      "postInstructFxInfo": {
        "fxMode": "MANUAL",
        "fxStatus": "INITIATED",
        "fxStatusUpdatedAt": "2000-01-23T04:56:07.000+00:00",
        "fxTransactionReference": "AB123GHI"
      },
      "quoteId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "railsBatchId": "railsBatchId",
      "railsId": "asdf123",
      "railsPaymentId": "railsPaymentId",
      "rate": 9.301444243932576,
      "rejectionReason": "rejectionReason",
      "remoteId": "aasdf123",
      "remoteSystemId": "REMOTE_SYSTEM_ID",
      "remoteSystemPaymentId": "remoteSystemPaymentId",
      "returnCost": 1232,
      "returnReason": "Some Reason Value",
      "routingNumber": "123123123123",
      "schedule": {
        "notificationsEnabled": true,
        "scheduleStatus": "SCHEDULED",
        "scheduledAt": "2000-01-23T04:56:07.000+00:00",
        "scheduledBy": "Aphra Behn",
        "scheduledByPrincipalId": "8946953b-1e3b-49cf-9da4-b704cbb78f3e",
        "scheduledFor": "2000-01-23T04:56:07.000+00:00"
      },
      "sourceAccountId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "sourceAccountName": "My Account",
      "sourceAmount": 12345,
      "sourceCurrency": "EUR",
      "status": "status",
      "submittedDateTime": "2000-01-23T04:56:07.000+00:00",
      "traceNumber": "abodu123",
      "transmissionType": "transmissionType",
      "withdrawable": true,
      "withdrawnReason": "withdrawnReason"
    }
  ],
  "links": [
    {
      "href": "https://example.com",
      "rel": "first"
    },
    {
      "href": "https://example.com",
      "rel": "first"
    }
  ],
  "page": {
    "numberOfElements": 12,
    "page": 1,
    "pageSize": 25,
    "totalElements": 12,
    "totalPages": 12
  }
}
```

> 400 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 400
}
```

> 401 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 401
}
```

> 403 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 403
}
```

<h3 id="get-list-of-payments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Paginated list of payments|[ListPaymentsResponseV4](#schemalistpaymentsresponsev4)|
|400|Bad Request|Invalid request. See Error message payload for details of failure|[inline_response_400](#schemainline_response_400)|
|401|Unauthorized|Invalid access token. May be expired or invalid|[inline_response_401](#schemainline_response_401)|
|403|Forbidden|The authentication does not have permissions to access the resource<br>This usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions<br>|[inline_response_403](#schemainline_response_403)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Get Payment

<a id="opIdgetPaymentDetailsV4"></a>

> Code samples

```bash
curl https://example.com/v4/paymentaudit/payments/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v4/paymentaudit/payments/{paymentId}`

Get the payment with the given id. This contains the payment history.


<h3 id="get-payment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|paymentId|path|string(uuid)|true|Payment Id|
|sensitive|query|boolean|false|Optional. If omitted or set to false, any Personal Identifiable Information (PII) values are returned masked.<br>If set to true, and you have permission, the PII values will be returned as their original unmasked values.<br>|

> Example responses

> 200 Response

```json
{
  "accountName": "My Account Name",
  "accountNumber": "123123232323",
  "autoWithdrawnReasonCode": "autoWithdrawnReasonCode",
  "countryCode": "US",
  "events": [
    {
      "accountName": "accountName",
      "accountNumber": "accountNumber",
      "eventDateTime": "2000-01-23T04:56:07.000+00:00",
      "eventId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "eventType": "eventType",
      "iban": "iban",
      "paymentAmount": 1299,
      "paymentCurrency": "EUR",
      "principal": "principal",
      "routingNumber": "routingNumber",
      "scheduledAt": "2000-01-23T04:56:07.000+00:00",
      "scheduledBy": "Aphra Behn",
      "scheduledFor": "2000-01-23T04:56:07.000+00:00",
      "sourceAmount": 1299,
      "sourceCurrency": "EUR"
    },
    {
      "accountName": "accountName",
      "accountNumber": "accountNumber",
      "eventDateTime": "2000-01-23T04:56:07.000+00:00",
      "eventId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "eventType": "eventType",
      "iban": "iban",
      "paymentAmount": 1299,
      "paymentCurrency": "EUR",
      "principal": "principal",
      "routingNumber": "routingNumber",
      "scheduledAt": "2000-01-23T04:56:07.000+00:00",
      "scheduledBy": "Aphra Behn",
      "scheduledFor": "2000-01-23T04:56:07.000+00:00",
      "sourceAmount": 1299,
      "sourceCurrency": "EUR"
    }
  ],
  "filenameReference": "file ref",
  "fundingStatus": "fundingStatus",
  "iban": "DE89 3704 0044 0532 0130 00",
  "individualIdentificationNumber": "1231231adf",
  "invertedRate": 3.616076749251911,
  "isPaymentCcyBaseCcy": true,
  "payeeAddressCountryCode": "US",
  "payeeId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "paymentAmount": 7,
  "paymentChannelId": "123asdf",
  "paymentChannelName": "My Payment Channel",
  "paymentCurrency": "EUR",
  "paymentId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "paymentMemo": "Payment memo",
  "paymentMetadata": "sample metadata",
  "paymentScheme": "paymentScheme",
  "paymentTrackingReference": "paymentTrackingReference",
  "payorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "payorName": "payorName",
  "payorPaymentId": "123123asdf",
  "payout": {
    "payoutFrom": {
      "dbaName": "dbaName",
      "payorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "payorName": "payorName",
      "principal": "principal",
      "principalId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
    },
    "payoutId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "payoutTo": {
      "dbaName": "dbaName",
      "payorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "payorName": "payorName",
      "principal": "principal",
      "principalId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
    }
  },
  "postInstructFxInfo": {
    "fxMode": "MANUAL",
    "fxStatus": "INITIATED",
    "fxStatusUpdatedAt": "2000-01-23T04:56:07.000+00:00",
    "fxTransactionReference": "AB123GHI"
  },
  "quoteId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "railsBatchId": "railsBatchId",
  "railsId": "asdf123",
  "railsPaymentId": "railsPaymentId",
  "rate": 9.301444243932576,
  "rejectionReason": "rejectionReason",
  "remoteId": "aasdf123",
  "remoteSystemId": "REMOTE_SYSTEM_ID",
  "remoteSystemPaymentId": "remoteSystemPaymentId",
  "returnCost": 1232,
  "returnReason": "Some Reason Value",
  "routingNumber": "123123123123",
  "schedule": {
    "notificationsEnabled": true,
    "scheduleStatus": "SCHEDULED",
    "scheduledAt": "2000-01-23T04:56:07.000+00:00",
    "scheduledBy": "Aphra Behn",
    "scheduledByPrincipalId": "8946953b-1e3b-49cf-9da4-b704cbb78f3e",
    "scheduledFor": "2000-01-23T04:56:07.000+00:00"
  },
  "sourceAccountId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "sourceAccountName": "My Account",
  "sourceAmount": 12345,
  "sourceCurrency": "EUR",
  "status": "status",
  "submittedDateTime": "2000-01-23T04:56:07.000+00:00",
  "traceNumber": "abodu123",
  "transmissionType": "transmissionType",
  "withdrawable": true,
  "withdrawnReason": "withdrawnReason"
}
```

> 400 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 400
}
```

> 401 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 401
}
```

> 403 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 403
}
```

> 404 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 404
}
```

<h3 id="get-payment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response, request completed okay|[PaymentResponseV4](#schemapaymentresponsev4)|
|400|Bad Request|Invalid request. See Error message payload for details of failure|[inline_response_400](#schemainline_response_400)|
|401|Unauthorized|Invalid access token. May be expired or invalid|[inline_response_401](#schemainline_response_401)|
|403|Forbidden|The authentication does not have permissions to access the resource<br>This usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions<br>|[inline_response_403](#schemainline_response_403)|
|404|Not Found|The resource was not found or is no longer available<br>|[inline_response_404](#schemainline_response_404)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Get Payout Statistics

<a id="opIdgetPayoutStatsV4"></a>

> Code samples

```bash
curl https://example.com/v4/paymentaudit/payoutStatistics \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v4/paymentaudit/payoutStatistics`

<p>Get payout statistics for a payor.</p>


<h3 id="get-payout-statistics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|payorId|query|string(uuid)|false|The account owner Payor ID. Required for external users.|

> Example responses

> 200 Response

```json
{
  "thisMonthFailedPaymentsCount": 6,
  "thisMonthPayoutsCount": 0
}
```

> 400 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 400
}
```

> 401 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 401
}
```

> 403 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 403
}
```

> 404 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 404
}
```

<h3 id="get-payout-statistics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Payout Statistics response|[GetPayoutStatistics](#schemagetpayoutstatistics)|
|400|Bad Request|Invalid request. See Error message payload for details of failure|[inline_response_400](#schemainline_response_400)|
|401|Unauthorized|Invalid access token. May be expired or invalid|[inline_response_401](#schemainline_response_401)|
|403|Forbidden|The authentication does not have permissions to access the resource<br>This usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions<br>|[inline_response_403](#schemainline_response_403)|
|404|Not Found|The resource was not found or is no longer available<br>|[inline_response_404](#schemainline_response_404)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Get Payouts for Payor

<a id="opIdgetPayoutsForPayorV4"></a>

> Code samples

```bash
curl https://example.com/v4/paymentaudit/payouts \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v4/paymentaudit/payouts`

Get List of payouts for payor


<h3 id="get-payouts-for-payor-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|payorId|query|string(uuid)|false|The id (UUID) of the payor funding the payout or the payor whose payees are being paid.|
|payoutMemo|query|string|false|Payout Memo filter - case insensitive sub-string match|
|status|query|string|false|Payout Status|
|submittedDateFrom|query|string(date)|false|The submitted date from range filter. Format is yyyy-MM-dd.|
|submittedDateTo|query|string(date)|false|The submitted date to range filter. Format is yyyy-MM-dd.|
|fromPayorName|query|string|false|The name of the payor whose payees are being paid. This filters via a case insensitive substring match.|
|scheduledForDateFrom|query|string(date)|false|Filter payouts scheduled to run on or after the given date. Format is yyyy-MM-dd.|
|scheduledForDateTo|query|string(date)|false|Filter payouts scheduled to run on or before the given date. Format is yyyy-MM-dd.|
|scheduleStatus|query|string|false|Payout Schedule Status|
|page|query|integer(int32)|false|Page number. Default is 1.|
|pageSize|query|integer(int32)|false|The number of results to return in a page|
|sort|query|string|false|List of sort fields (e.g. ?sort=submittedDateTime:asc,instructedDateTime:asc,status:asc)<br>Default is submittedDateTime:asc<br>The supported sort fields are: submittedDateTime, instructedDateTime, status, totalPayments, payoutId, scheduledFor<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status|ACCEPTED|
|status|REJECTED|
|status|SUBMITTED|
|status|QUOTED|
|status|INSTRUCTED|
|status|COMPLETED|
|status|INCOMPLETE|
|status|CONFIRMED|
|status|WITHDRAWN|
|scheduleStatus|ANY|
|scheduleStatus|SCHEDULED|
|scheduleStatus|EXECUTED|
|scheduleStatus|FAILED|

> Example responses

> 200 Response

```json
{
  "content": [
    {
      "dateTime": "2000-01-23T04:56:07.000+00:00",
      "fxSummaries": [
        {
          "creationDateTime": "2000-01-23T04:56:07.000+00:00",
          "fundingStatus": "fundingStatus",
          "invertedRate": 123.23,
          "paymentCurrency": "EUR",
          "quoteId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
          "rate": 123.23,
          "sourceCurrency": "EUR",
          "status": "status",
          "totalCost": 5,
          "totalPaymentAmount": 34235
        },
        {
          "creationDateTime": "2000-01-23T04:56:07.000+00:00",
          "fundingStatus": "fundingStatus",
          "invertedRate": 123.23,
          "paymentCurrency": "EUR",
          "quoteId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
          "rate": 123.23,
          "sourceCurrency": "EUR",
          "status": "status",
          "totalCost": 5,
          "totalPaymentAmount": 34235
        }
      ],
      "instructedDateTime": "instructedDateTime",
      "payorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "payorName": "payorName",
      "payoutId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "payoutMemo": "payoutMemo",
      "payoutType": "payoutType",
      "schedule": {
        "notificationsEnabled": true,
        "scheduleStatus": "SCHEDULED",
        "scheduledAt": "2000-01-23T04:56:07.000+00:00",
        "scheduledBy": "Aphra Behn",
        "scheduledByPrincipalId": "8946953b-1e3b-49cf-9da4-b704cbb78f3e",
        "scheduledFor": "2000-01-23T04:56:07.000+00:00"
      },
      "sourceAccountSummary": [
        {
          "currency": "EUR",
          "sourceAccountId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
          "totalCost": 3344
        },
        {
          "currency": "EUR",
          "sourceAccountId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
          "totalCost": 3344
        }
      ],
      "status": "status",
      "submittedDateTime": "submittedDateTime",
      "totalIncompletePayments": 6,
      "totalPayments": 0,
      "totalReturnedPayments": 1,
      "totalWithdrawnPayments": 5,
      "withdrawnDateTime": "2000-01-23T04:56:07.000+00:00"
    },
    {
      "dateTime": "2000-01-23T04:56:07.000+00:00",
      "fxSummaries": [
        {
          "creationDateTime": "2000-01-23T04:56:07.000+00:00",
          "fundingStatus": "fundingStatus",
          "invertedRate": 123.23,
          "paymentCurrency": "EUR",
          "quoteId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
          "rate": 123.23,
          "sourceCurrency": "EUR",
          "status": "status",
          "totalCost": 5,
          "totalPaymentAmount": 34235
        },
        {
          "creationDateTime": "2000-01-23T04:56:07.000+00:00",
          "fundingStatus": "fundingStatus",
          "invertedRate": 123.23,
          "paymentCurrency": "EUR",
          "quoteId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
          "rate": 123.23,
          "sourceCurrency": "EUR",
          "status": "status",
          "totalCost": 5,
          "totalPaymentAmount": 34235
        }
      ],
      "instructedDateTime": "instructedDateTime",
      "payorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "payorName": "payorName",
      "payoutId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "payoutMemo": "payoutMemo",
      "payoutType": "payoutType",
      "schedule": {
        "notificationsEnabled": true,
        "scheduleStatus": "SCHEDULED",
        "scheduledAt": "2000-01-23T04:56:07.000+00:00",
        "scheduledBy": "Aphra Behn",
        "scheduledByPrincipalId": "8946953b-1e3b-49cf-9da4-b704cbb78f3e",
        "scheduledFor": "2000-01-23T04:56:07.000+00:00"
      },
      "sourceAccountSummary": [
        {
          "currency": "EUR",
          "sourceAccountId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
          "totalCost": 3344
        },
        {
          "currency": "EUR",
          "sourceAccountId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
          "totalCost": 3344
        }
      ],
      "status": "status",
      "submittedDateTime": "submittedDateTime",
      "totalIncompletePayments": 6,
      "totalPayments": 0,
      "totalReturnedPayments": 1,
      "totalWithdrawnPayments": 5,
      "withdrawnDateTime": "2000-01-23T04:56:07.000+00:00"
    }
  ],
  "links": [
    {
      "href": "href",
      "rel": "rel"
    },
    {
      "href": "href",
      "rel": "rel"
    }
  ],
  "page": {
    "numberOfElements": 0,
    "page": 5,
    "pageSize": 5,
    "totalElements": 6,
    "totalPages": 1
  }
}
```

> 400 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 400
}
```

> 401 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 401
}
```

> 403 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 403
}
```

> 404 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 404
}
```

<h3 id="get-payouts-for-payor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Payor data found|[GetPayoutsResponse](#schemagetpayoutsresponse)|
|400|Bad Request|Invalid request. See Error message payload for details of failure|[inline_response_400](#schemainline_response_400)|
|401|Unauthorized|Invalid access token. May be expired or invalid|[inline_response_401](#schemainline_response_401)|
|403|Forbidden|The authentication does not have permissions to access the resource<br>This usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions<br>|[inline_response_403](#schemainline_response_403)|
|404|Not Found|The resource was not found or is no longer available<br>|[inline_response_404](#schemainline_response_404)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Get Payments for Payout

<a id="opIdgetPaymentsForPayoutV4"></a>

> Code samples

```bash
curl https://example.com/v4/paymentaudit/payouts/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v4/paymentaudit/payouts/{payoutId}`

Get List of payments for Payout, allowing for RETURNED status


<h3 id="get-payments-for-payout-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|payoutId|path|string(uuid)|true|The id (UUID) of the payout.|
|remoteId|query|string|false|The remote id of the payees.|
|remoteSystemId|query|string|false|The id of the remote system that is orchestrating payments|
|status|query|string|false|Payment Status|
|sourceAmountFrom|query|integer(int32)|false|The source amount from range filter. Filters for sourceAmount >= sourceAmountFrom|
|sourceAmountTo|query|integer(int32)|false|The source amount to range filter. Filters for sourceAmount ⇐ sourceAmountTo|
|paymentAmountFrom|query|integer(int32)|false|The payment amount from range filter. Filters for paymentAmount >= paymentAmountFrom|
|paymentAmountTo|query|integer(int32)|false|The payment amount to range filter. Filters for paymentAmount ⇐ paymentAmountTo|
|submittedDateFrom|query|string(date)|false|The submitted date from range filter. Format is yyyy-MM-dd.|
|submittedDateTo|query|string(date)|false|The submitted date to range filter. Format is yyyy-MM-dd.|
|transmissionType|query|string|false|Transmission Type<br>* ACH<br>* SAME_DAY_ACH<br>* WIRE<br>* GACHO<br>|
|page|query|integer(int32)|false|Page number. Default is 1.|
|pageSize|query|integer(int32)|false|The number of results to return in a page|
|sort|query|string|false|List of sort fields (e.g. ?sort=submittedDateTime:asc,status:asc). Default is sort by remoteId<br>The supported sort fields are: sourceAmount, sourceCurrency, paymentAmount, paymentCurrency,<br>routingNumber, accountNumber, remoteId, submittedDateTime and status<br>|
|sensitive|query|boolean|false|Optional. If omitted or set to false, any Personal Identifiable Information (PII) values are returned masked.<br>If set to true, and you have permission, the PII values will be returned as their original unmasked values.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status|ACCEPTED|
|status|AWAITING_FUNDS|
|status|FUNDED|
|status|UNFUNDED|
|status|BANK_PAYMENT_REQUESTED|
|status|REJECTED|
|status|ACCEPTED_BY_RAILS|
|status|CONFIRMED|
|status|FAILED|
|status|RETURNED|
|status|WITHDRAWN|
|transmissionType|ACH|
|transmissionType|SAME_DAY_ACH|
|transmissionType|WIRE|
|transmissionType|LOCAL|
|transmissionType|GACHO|

> Example responses

> 200 Response

```json
{
  "content": [
    {
      "accountName": "My Account Name",
      "accountNumber": "123123232323",
      "autoWithdrawnReasonCode": "autoWithdrawnReasonCode",
      "countryCode": "US",
      "events": [
        {
          "accountName": "accountName",
          "accountNumber": "accountNumber",
          "eventDateTime": "2000-01-23T04:56:07.000+00:00",
          "eventId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
          "eventType": "eventType",
          "iban": "iban",
          "paymentAmount": 1299,
          "paymentCurrency": "EUR",
          "principal": "principal",
          "routingNumber": "routingNumber",
          "scheduledAt": "2000-01-23T04:56:07.000+00:00",
          "scheduledBy": "Aphra Behn",
          "scheduledFor": "2000-01-23T04:56:07.000+00:00",
          "sourceAmount": 1299,
          "sourceCurrency": "EUR"
        },
        {
          "accountName": "accountName",
          "accountNumber": "accountNumber",
          "eventDateTime": "2000-01-23T04:56:07.000+00:00",
          "eventId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
          "eventType": "eventType",
          "iban": "iban",
          "paymentAmount": 1299,
          "paymentCurrency": "EUR",
          "principal": "principal",
          "routingNumber": "routingNumber",
          "scheduledAt": "2000-01-23T04:56:07.000+00:00",
          "scheduledBy": "Aphra Behn",
          "scheduledFor": "2000-01-23T04:56:07.000+00:00",
          "sourceAmount": 1299,
          "sourceCurrency": "EUR"
        }
      ],
      "filenameReference": "file ref",
      "fundingStatus": "fundingStatus",
      "iban": "DE89 3704 0044 0532 0130 00",
      "individualIdentificationNumber": "1231231adf",
      "invertedRate": 3.616076749251911,
      "isPaymentCcyBaseCcy": true,
      "payeeAddressCountryCode": "US",
      "payeeId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "paymentAmount": 7,
      "paymentChannelId": "123asdf",
      "paymentChannelName": "My Payment Channel",
      "paymentCurrency": "EUR",
      "paymentId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "paymentMemo": "Payment memo",
      "paymentMetadata": "sample metadata",
      "paymentScheme": "paymentScheme",
      "paymentTrackingReference": "paymentTrackingReference",
      "payorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "payorName": "payorName",
      "payorPaymentId": "123123asdf",
      "payout": {
        "payoutFrom": {
          "dbaName": "dbaName",
          "payorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
          "payorName": "payorName",
          "principal": "principal",
          "principalId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
        },
        "payoutId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
        "payoutTo": {
          "dbaName": "dbaName",
          "payorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
          "payorName": "payorName",
          "principal": "principal",
          "principalId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
        }
      },
      "postInstructFxInfo": {
        "fxMode": "MANUAL",
        "fxStatus": "INITIATED",
        "fxStatusUpdatedAt": "2000-01-23T04:56:07.000+00:00",
        "fxTransactionReference": "AB123GHI"
      },
      "quoteId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "railsBatchId": "railsBatchId",
      "railsId": "asdf123",
      "railsPaymentId": "railsPaymentId",
      "rate": 9.301444243932576,
      "rejectionReason": "rejectionReason",
      "remoteId": "aasdf123",
      "remoteSystemId": "REMOTE_SYSTEM_ID",
      "remoteSystemPaymentId": "remoteSystemPaymentId",
      "returnCost": 1232,
      "returnReason": "Some Reason Value",
      "routingNumber": "123123123123",
      "schedule": {
        "notificationsEnabled": true,
        "scheduleStatus": "SCHEDULED",
        "scheduledAt": "2000-01-23T04:56:07.000+00:00",
        "scheduledBy": "Aphra Behn",
        "scheduledByPrincipalId": "8946953b-1e3b-49cf-9da4-b704cbb78f3e",
        "scheduledFor": "2000-01-23T04:56:07.000+00:00"
      },
      "sourceAccountId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "sourceAccountName": "My Account",
      "sourceAmount": 12345,
      "sourceCurrency": "EUR",
      "status": "status",
      "submittedDateTime": "2000-01-23T04:56:07.000+00:00",
      "traceNumber": "abodu123",
      "transmissionType": "transmissionType",
      "withdrawable": true,
      "withdrawnReason": "withdrawnReason"
    },
    {
      "accountName": "My Account Name",
      "accountNumber": "123123232323",
      "autoWithdrawnReasonCode": "autoWithdrawnReasonCode",
      "countryCode": "US",
      "events": [
        {
          "accountName": "accountName",
          "accountNumber": "accountNumber",
          "eventDateTime": "2000-01-23T04:56:07.000+00:00",
          "eventId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
          "eventType": "eventType",
          "iban": "iban",
          "paymentAmount": 1299,
          "paymentCurrency": "EUR",
          "principal": "principal",
          "routingNumber": "routingNumber",
          "scheduledAt": "2000-01-23T04:56:07.000+00:00",
          "scheduledBy": "Aphra Behn",
          "scheduledFor": "2000-01-23T04:56:07.000+00:00",
          "sourceAmount": 1299,
          "sourceCurrency": "EUR"
        },
        {
          "accountName": "accountName",
          "accountNumber": "accountNumber",
          "eventDateTime": "2000-01-23T04:56:07.000+00:00",
          "eventId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
          "eventType": "eventType",
          "iban": "iban",
          "paymentAmount": 1299,
          "paymentCurrency": "EUR",
          "principal": "principal",
          "routingNumber": "routingNumber",
          "scheduledAt": "2000-01-23T04:56:07.000+00:00",
          "scheduledBy": "Aphra Behn",
          "scheduledFor": "2000-01-23T04:56:07.000+00:00",
          "sourceAmount": 1299,
          "sourceCurrency": "EUR"
        }
      ],
      "filenameReference": "file ref",
      "fundingStatus": "fundingStatus",
      "iban": "DE89 3704 0044 0532 0130 00",
      "individualIdentificationNumber": "1231231adf",
      "invertedRate": 3.616076749251911,
      "isPaymentCcyBaseCcy": true,
      "payeeAddressCountryCode": "US",
      "payeeId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "paymentAmount": 7,
      "paymentChannelId": "123asdf",
      "paymentChannelName": "My Payment Channel",
      "paymentCurrency": "EUR",
      "paymentId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "paymentMemo": "Payment memo",
      "paymentMetadata": "sample metadata",
      "paymentScheme": "paymentScheme",
      "paymentTrackingReference": "paymentTrackingReference",
      "payorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "payorName": "payorName",
      "payorPaymentId": "123123asdf",
      "payout": {
        "payoutFrom": {
          "dbaName": "dbaName",
          "payorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
          "payorName": "payorName",
          "principal": "principal",
          "principalId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
        },
        "payoutId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
        "payoutTo": {
          "dbaName": "dbaName",
          "payorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
          "payorName": "payorName",
          "principal": "principal",
          "principalId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
        }
      },
      "postInstructFxInfo": {
        "fxMode": "MANUAL",
        "fxStatus": "INITIATED",
        "fxStatusUpdatedAt": "2000-01-23T04:56:07.000+00:00",
        "fxTransactionReference": "AB123GHI"
      },
      "quoteId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "railsBatchId": "railsBatchId",
      "railsId": "asdf123",
      "railsPaymentId": "railsPaymentId",
      "rate": 9.301444243932576,
      "rejectionReason": "rejectionReason",
      "remoteId": "aasdf123",
      "remoteSystemId": "REMOTE_SYSTEM_ID",
      "remoteSystemPaymentId": "remoteSystemPaymentId",
      "returnCost": 1232,
      "returnReason": "Some Reason Value",
      "routingNumber": "123123123123",
      "schedule": {
        "notificationsEnabled": true,
        "scheduleStatus": "SCHEDULED",
        "scheduledAt": "2000-01-23T04:56:07.000+00:00",
        "scheduledBy": "Aphra Behn",
        "scheduledByPrincipalId": "8946953b-1e3b-49cf-9da4-b704cbb78f3e",
        "scheduledFor": "2000-01-23T04:56:07.000+00:00"
      },
      "sourceAccountId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "sourceAccountName": "My Account",
      "sourceAmount": 12345,
      "sourceCurrency": "EUR",
      "status": "status",
      "submittedDateTime": "2000-01-23T04:56:07.000+00:00",
      "traceNumber": "abodu123",
      "transmissionType": "transmissionType",
      "withdrawable": true,
      "withdrawnReason": "withdrawnReason"
    }
  ],
  "links": [
    {
      "href": "href",
      "rel": "rel"
    },
    {
      "href": "href",
      "rel": "rel"
    }
  ],
  "page": {
    "numberOfElements": 0,
    "page": 5,
    "pageSize": 5,
    "totalElements": 6,
    "totalPages": 1
  },
  "summary": {
    "confirmedPayments": 6,
    "incompletePayments": 5,
    "instructed": {
      "principal": "principal",
      "principalId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
    },
    "instructedDateTime": "2000-01-23T04:56:07.000+00:00",
    "payoutFrom": {
      "dbaName": "dbaName",
      "payorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "payorName": "payorName",
      "principal": "principal",
      "principalId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
    },
    "payoutMemo": "payoutMemo",
    "payoutStatus": "payoutStatus",
    "payoutTo": {
      "dbaName": "dbaName",
      "payorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "payorName": "payorName",
      "principal": "principal",
      "principalId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
    },
    "payoutType": "payoutType",
    "quoted": {
      "principal": "principal",
      "principalId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
    },
    "quotedDateTime": "2000-01-23T04:56:07.000+00:00",
    "releasedPayments": 1,
    "returnedPayments": 5,
    "schedule": {
      "notificationsEnabled": true,
      "scheduleStatus": "SCHEDULED",
      "scheduledAt": "2000-01-23T04:56:07.000+00:00",
      "scheduledBy": "Aphra Behn",
      "scheduledByPrincipalId": "8946953b-1e3b-49cf-9da4-b704cbb78f3e",
      "scheduledFor": "2000-01-23T04:56:07.000+00:00"
    },
    "submittedDateTime": "2000-01-23T04:56:07.000+00:00",
    "submitting": {
      "dbaName": "dbaName",
      "payorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "payorName": "payorName",
      "principal": "principal",
      "principalId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
    },
    "totalPayments": 0,
    "withdrawn": {
      "principal": "principal",
      "principalId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
    },
    "withdrawnDateTime": "2000-01-23T04:56:07.000+00:00",
    "withdrawnPayments": 2
  }
}
```

> 400 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 400
}
```

> 401 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 401
}
```

> 403 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 403
}
```

> 404 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 404
}
```

<h3 id="get-payments-for-payout-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response, data found okay|[GetPaymentsForPayoutResponseV4](#schemagetpaymentsforpayoutresponsev4)|
|400|Bad Request|Invalid request. See Error message payload for details of failure|[inline_response_400](#schemainline_response_400)|
|401|Unauthorized|Invalid access token. May be expired or invalid|[inline_response_401](#schemainline_response_401)|
|403|Forbidden|The authentication does not have permissions to access the resource<br>This usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions<br>|[inline_response_403](#schemainline_response_403)|
|404|Not Found|The resource was not found or is no longer available<br>|[inline_response_404](#schemainline_response_404)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Export Transactions

<a id="opIdexportTransactionsCSVV4"></a>

> Code samples

```bash
curl https://example.com/v4/paymentaudit/transactions \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v4/paymentaudit/transactions`

Download a CSV file containing payments in a date range. Uses Transfer-Encoding - chunked to stream to the client. Date range is inclusive of both the start and end dates.

<h3 id="export-transactions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|payorId|query|string(uuid)|false|<p>The Payor ID for whom you wish to run the report.</p><br><p>For a Payor requesting the report, this could be their exact Payor, or it could be a child/descendant Payor.</p><br>|
|startDate|query|string(date)|false|Start date, inclusive. Format is YYYY-MM-DD|
|endDate|query|string(date)|false|End date, inclusive. Format is YYYY-MM-DD|
|include|query|string|false|<p>Mode to determine whether to include other Payor's data in the results.</p><br><p>May only be used if payorId is specified.</p><br><p>Can be omitted or set to 'payorOnly' or 'payorAndDescendants'.</p><br><p>payorOnly: Only include results for the specified Payor. This is the default if 'include' is omitted.</p><br><p>payorAndDescendants: Aggregate results for all descendant Payors of the specified Payor. Should only be used if the Payor with the specified payorId has at least one child Payor.</p><br><p>Note when a Payor requests the report and include=payorAndDescendants is used, the following additional columns are included in the CSV: Payor Name, Payor Id</p><br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|include|payorOnly|
|include|payorAndDescendants|

<h3 id="export-transactions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Export Transactions response|[PayorAmlTransaction](#schemapayoramltransaction)|
|400|Bad Request|invalid Request|None|
|401|Unauthorized|Not Authorized|None|
|403|Forbidden|Forbidden|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## List Payment Changes

<a id="opIdlistPaymentChangesV4"></a>

> Code samples

```bash
curl 'https://example.com/v4/payments/deltas?payorId=497f6eca-6276-4993-bfeb-53cbbbba6f08&updatedSince=1970-01-01T00%3A00%3A00Z' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v4/payments/deltas`

Get a paginated response listing payment changes.

<h3 id="list-payment-changes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|payorId|query|string(uuid)|true|The Payor ID to find associated Payments|
|updatedSince|query|string(date-time)|true|The updatedSince filter in the format YYYY-MM-DDThh:mm:ss+hh:mm|
|page|query|integer(int32)|false|Page number. Default is 1.|
|pageSize|query|integer(int32)|false|The number of results to return in a page|

> Example responses

> 200 Response

```json
{
  "content": [
    {
      "paymentAmount": 0,
      "paymentCurrency": "paymentCurrency",
      "paymentId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "payorPaymentId": "payorPaymentId",
      "payoutId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "sourceAmount": 6,
      "sourceCurrency": "sourceCurrency",
      "status": "status"
    },
    {
      "paymentAmount": 0,
      "paymentCurrency": "paymentCurrency",
      "paymentId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "payorPaymentId": "payorPaymentId",
      "payoutId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "sourceAmount": 6,
      "sourceCurrency": "sourceCurrency",
      "status": "status"
    }
  ],
  "links": [
    {
      "href": "href",
      "rel": "rel"
    },
    {
      "href": "href",
      "rel": "rel"
    }
  ],
  "page": {
    "numberOfElements": 0,
    "page": 5,
    "pageSize": 5,
    "totalElements": 6,
    "totalPages": 1
  }
}
```

<h3 id="list-payment-changes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Details of Payment Changes|[PaymentDeltaResponse](#schemapaymentdeltaresponse)|
|400|Bad Request|Bad Request|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

<h1 id="velo-payments-apis-tokens">Tokens</h1>

<p>Verification tokens allow users to complete authenitcation flows such as user invite, MFA registration and password reset</p>
<p>Tokens have an expiry and are one-time use only</p>


## Resend a token

<a id="opIdresendToken"></a>

> Code samples

```bash
curl https://example.com/v2/users/497f6eca-6276-4993-bfeb-53cbbbba6f08/tokens \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "tokenType": "INVITE_MFA_USER",
    "verificationCode": "123456"
  }'
```

`POST /v2/users/{userId}/tokens`

<p>Resend the specified token </p>
<p>The token to resend must already exist for the user </p>
<p>It will be revoked and a new one issued</p>


> Body parameter

```json
{
  "tokenType": "INVITE_MFA_USER",
  "verificationCode": "123456"
}
```

<h3 id="resend-a-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string(uuid)|true|The UUID of the User.|
|body|body|[ResendTokenRequest](#schemaresendtokenrequest)|true|The type of token to resend|
|» tokenType|body|string|true|The type of the token to resend|
|» verificationCode|body|string \| null|false|<p>Optional property that MUST be suppied when manually verifying a user</p><br><p>The user's smsNumber is registered via a separate endpoint and an OTP sent to them</p><br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» tokenType|INVITE_MFA_USER|
|» tokenType|MFA_REGISTRATION|

> Example responses

> 400 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 400
}
```

> 401 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 401
}
```

> 403 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 403
}
```

<h3 id="resend-a-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|request completed okay|None|
|400|Bad Request|Invalid request. See Error message payload for details of failure|[inline_response_400](#schemainline_response_400)|
|401|Unauthorized|Invalid access token. May be expired or invalid|[inline_response_401](#schemainline_response_401)|
|403|Forbidden|The authentication does not have permissions to access the resource<br>This usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions<br>|[inline_response_403](#schemainline_response_403)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

<h1 id="velo-payments-apis-login">Login</h1>

## Authentication endpoint

<a id="opIdveloAuth"></a>

> Code samples

```bash
curl https://example.com/v1/authenticate \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`POST /v1/authenticate`

<p>Use this endpoint to obtain an access token for calling Velo Payments APIs. </p>
<p>You need your API key and API secret issued by Velo</p>
<p>To login and get an access token the API key and API secret must be Base64 encoded by concatenating them with a colon between them</p>
<p>e.g. Given an ApiKey: 44a9537d-d55d-4b47-8082-14061c2bcdd8 and ApiSecret: c396b26b-137a-44fd-87f5-34631f8fd529</p>
<p>Using a Base64 encode function Base64Encoder().encode("44a9537d-d55d-4b47-8082-14061c2bcdd8:c396b26b-137a-44fd-87f5-34631f8fd529")</p>
<p>Included as a Basic Authorization header: -H "Authorization: Basic NDRhOTUzN2QtZDU1ZC00YjQ3LTgwODItMTQwNjFjMmJjZGQ4OmMzOTZiMjZiLTEzN2EtNDRmZC04N2Y1LTM0NjMxZjhmZDUyOQ==" </p>


<h3 id="authentication-endpoint-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|grant_type|query|string|false|OAuth grant type. Should use 'client_credentials'|

> Example responses

> 200 Response

```json
{
  "access_token": "IwOGYzYTlmM2YxOTQ5MGE3YmNmMDFkNTVk",
  "entityIds": [
    "entityIds",
    "entityIds"
  ],
  "expires_in": 1799,
  "refresh_token": "IwOGYzYTlmM2YxOTQ5MGE3YmNmMDFkNTVk",
  "scope": "example_scope",
  "token_type": "bearer"
}
```

<h3 id="authentication-endpoint-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Valid Authenication response|[AuthResponse](#schemaauthresponse)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Cache-Control|string||Ensure clients do not cache request|
|200|Pragma|string||Ensure clients do not cache request|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Logout

<a id="opIdlogout"></a>

> Code samples

```bash
curl https://example.com/v1/logout \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v1/logout`

<p>Given a valid access token in the header then log out the authenticated user or client </p>
<p>Will revoke the token</p>


> Example responses

> 401 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 401
}
```

> 403 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 403
}
```

<h3 id="logout-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|User has been logged out|None|
|401|Unauthorized|Invalid access token. May be expired or invalid|[inline_response_401](#schemainline_response_401)|
|403|Forbidden|The authentication does not have permissions to access the resource<br>This usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions<br>|[inline_response_403](#schemainline_response_403)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Reset password

<a id="opIdresetPassword"></a>

> Code samples

```bash
curl https://example.com/v1/password/reset \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "email": "foo@example.com"
  }'
```

`POST /v1/password/reset`

<p>Reset password </p>
<p>An email with an embedded link will be sent to the receipient of the email address </p>
<p>The link will contain a token to be used for resetting the password </p>


> Body parameter

```json
{
  "email": "foo@example.com"
}
```

<h3 id="reset-password-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ResetPasswordRequest](#schemaresetpasswordrequest)|true|An Email address to send the reset password link to|
|» email|body|string(email)|true|the email address of the user requesting the reset password|

> Example responses

> 400 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 400
}
```

<h3 id="reset-password-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|the request was accepted|None|
|400|Bad Request|Invalid request. See Error message payload for details of failure|[inline_response_400](#schemainline_response_400)|

<aside class="success">
This operation does not require authentication
</aside>

## validate

<a id="opIdvalidateAccessToken"></a>

> Code samples

```bash
curl https://example.com/v1/validate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "otp": "123456"
  }'
```

`POST /v1/validate`

<p>The second part of login involves validating using an MFA device</p>
<p>An access token with PRE_AUTH authorities is required</p>


> Body parameter

```json
{
  "otp": "123456"
}
```

<h3 id="validate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|false|Bearer token authorization leg of validate|
|body|body|[AccessTokenValidationRequest](#schemaaccesstokenvalidationrequest)|true|An OTP from the user's registered MFA Device<br>|
|» otp|body|string|true|an OTP either sent via sms or generated by a registered MFA device|

> Example responses

> 200 Response

```json
{
  "access_token": "9b58410b-e1b7-4f90-bebb-7e09c5427020",
  "entityIds": [
    "ed89eaa0-4450-4916-a4ff-62a328d60bd6"
  ],
  "expires_in": 1800,
  "refresh_token": "c3d0f771-0997-4814-84e3-09690208545a",
  "scope": "https://api.velopayments.com/scopes/auth/users",
  "token_type": "bearer",
  "user_info": {
    "mfa_details": {
      "mfa_type": "TOTP",
      "verified": true
    },
    "userType": "PAYOR",
    "user_id": "39976ee5-dc4c-4b21-a966-a04fa71ef9e1"
  }
}
```

> 401 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 401
}
```

> 403 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 403
}
```

<h3 id="validate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User request has been validated|[AccessTokenResponse](#schemaaccesstokenresponse)|
|401|Unauthorized|Invalid access token. May be expired or invalid|[inline_response_401](#schemainline_response_401)|
|403|Forbidden|The authentication does not have permissions to access the resource<br>This usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions<br>|[inline_response_403](#schemainline_response_403)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

<h1 id="velo-payments-apis-payment-audit-service-deprecated">Payment Audit Service (Deprecated)</h1>

## V1 List Payment Changes

<a id="opIdlistPaymentChanges"></a>

> Code samples

```bash
curl 'https://example.com/v1/deltas/payments?payorId=497f6eca-6276-4993-bfeb-53cbbbba6f08&updatedSince=1970-01-01T00%3A00%3A00Z' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/deltas/payments`

<aside class="warning">
This operation is deprecated
</aside>

Deprecated (use /v4/payments/deltas instead)

<h3 id="v1-list-payment-changes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|payorId|query|string(uuid)|true|The Payor ID to find associated Payments|
|updatedSince|query|string(date-time)|true|The updatedSince filter in the format YYYY-MM-DDThh:mm:ss+hh:mm|
|page|query|integer(int32)|false|Page number. Default is 1.|
|pageSize|query|integer(int32)|false|The number of results to return in a page|

> Example responses

> 200 Response

```json
{
  "content": [
    {
      "paymentAmount": 0,
      "paymentCurrency": "paymentCurrency",
      "paymentId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "payorPaymentId": "payorPaymentId",
      "payoutId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "sourceAmount": 6,
      "sourceCurrency": "sourceCurrency",
      "status": "status"
    },
    {
      "paymentAmount": 0,
      "paymentCurrency": "paymentCurrency",
      "paymentId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "payorPaymentId": "payorPaymentId",
      "payoutId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "sourceAmount": 6,
      "sourceCurrency": "sourceCurrency",
      "status": "status"
    }
  ],
  "links": [
    {
      "href": "href",
      "rel": "rel"
    },
    {
      "href": "href",
      "rel": "rel"
    }
  ],
  "page": {
    "numberOfElements": 0,
    "page": 5,
    "pageSize": 5,
    "totalElements": 6,
    "totalPages": 1
  }
}
```

<h3 id="v1-list-payment-changes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Details of Payment Changes|[PaymentDeltaResponseV1](#schemapaymentdeltaresponsev1)|
|400|Bad Request|Bad Request|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## V1 Get Fundings for Payor

<a id="opIdgetFundingsV1"></a>

> Code samples

```bash
curl 'https://example.com/v1/paymentaudit/fundings?payorId=497f6eca-6276-4993-bfeb-53cbbbba6f08' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/paymentaudit/fundings`

<aside class="warning">
This operation is deprecated
</aside>

Deprecated (use /v4/paymentaudit/fundings)

<h3 id="v1-get-fundings-for-payor-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|payorId|query|string(uuid)|true|The account owner Payor ID|
|page|query|integer(int32)|false|Page number. Default is 1.|
|pageSize|query|integer(int32)|false|The number of results to return in a page|
|sort|query|string|false|List of sort fields. Example: ```?sort=destinationCurrency:asc,destinationAmount:asc```<br>Default is no sort. The supported sort fields are: dateTime and amount.<br>|

> Example responses

> 200 Response

```json
{
  "content": [
    {
      "amount": 120000,
      "currency": "USD",
      "dateTime": "2000-01-23T04:56:07.000+00:00",
      "events": [
        {
          "eventDateTime": "2000-01-23T04:56:07.000+00:00",
          "eventId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
          "fundingEventType": "fundingEventType",
          "principal": "principal"
        },
        {
          "eventDateTime": "2000-01-23T04:56:07.000+00:00",
          "eventId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
          "fundingEventType": "fundingEventType",
          "principal": "principal"
        }
      ],
      "fundingAccountName": "fundingAccountName",
      "fundingType": "fundingType",
      "sourceAccountName": "sourceAccountName",
      "status": "status",
      "topupType": "topupType"
    },
    {
      "amount": 120000,
      "currency": "USD",
      "dateTime": "2000-01-23T04:56:07.000+00:00",
      "events": [
        {
          "eventDateTime": "2000-01-23T04:56:07.000+00:00",
          "eventId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
          "fundingEventType": "fundingEventType",
          "principal": "principal"
        },
        {
          "eventDateTime": "2000-01-23T04:56:07.000+00:00",
          "eventId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
          "fundingEventType": "fundingEventType",
          "principal": "principal"
        }
      ],
      "fundingAccountName": "fundingAccountName",
      "fundingType": "fundingType",
      "sourceAccountName": "sourceAccountName",
      "status": "status",
      "topupType": "topupType"
    }
  ],
  "links": [
    {
      "href": "https://api.sandbox.velopayments.com/v1/paymentaudit/fundings?payorId=2a5d8af2-a1ed-4d7f-b9a7-ebe4b333be5a&page=1&pageSize=10",
      "rel": "first"
    },
    {
      "href": "https://api.sandbox.velopayments.com/v1/paymentaudit/fundings?payorId=2a5d8af2-a1ed-4d7f-b9a7-ebe4b333be5a&page=1&pageSize=10",
      "rel": "first"
    }
  ],
  "page": {
    "numberOfElements": 12,
    "page": 1,
    "pageSize": 25,
    "totalElements": 33,
    "totalPages": 2
  }
}
```

> 400 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 400
}
```

> 401 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 401
}
```

> 403 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 403
}
```

> 404 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 404
}
```

<h3 id="v1-get-fundings-for-payor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Get Fundings normal response|[GetFundingsResponse](#schemagetfundingsresponse)|
|400|Bad Request|Invalid request. See Error message payload for details of failure|[inline_response_400](#schemainline_response_400)|
|401|Unauthorized|Invalid access token. May be expired or invalid|[inline_response_401](#schemainline_response_401)|
|403|Forbidden|The authentication does not have permissions to access the resource<br>This usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions<br>|[inline_response_403](#schemainline_response_403)|
|404|Not Found|The resource was not found or is no longer available<br>|[inline_response_404](#schemainline_response_404)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## V1 Get Payout Statistics

<a id="opIdgetPayoutStatsV1"></a>

> Code samples

```bash
curl https://example.com/v1/paymentaudit/payoutStatistics \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/paymentaudit/payoutStatistics`

<aside class="warning">
This operation is deprecated
</aside>

Deprecated (Use /v4/paymentaudit/payoutStatistics)

<h3 id="v1-get-payout-statistics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|payorId|query|string(uuid)|false|The account owner Payor ID. Required for external users.|

> Example responses

> 200 Response

```json
{
  "thisMonthFailedPaymentsCount": 6,
  "thisMonthPayoutsCount": 0
}
```

> 400 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 400
}
```

> 401 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 401
}
```

> 403 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 403
}
```

> 404 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 404
}
```

<h3 id="v1-get-payout-statistics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Payout Statistics response|[GetPayoutStatistics](#schemagetpayoutstatistics)|
|400|Bad Request|Invalid request. See Error message payload for details of failure|[inline_response_400](#schemainline_response_400)|
|401|Unauthorized|Invalid access token. May be expired or invalid|[inline_response_401](#schemainline_response_401)|
|403|Forbidden|The authentication does not have permissions to access the resource<br>This usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions<br>|[inline_response_403](#schemainline_response_403)|
|404|Not Found|The resource was not found or is no longer available<br>|[inline_response_404](#schemainline_response_404)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## V3 Get List of Payments

<a id="opIdlistPaymentsAuditV3"></a>

> Code samples

```bash
curl https://example.com/v3/paymentaudit/payments \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v3/paymentaudit/payments`

<aside class="warning">
This operation is deprecated
</aside>

Deprecated (use /v4/paymentaudit/payments instead)

<h3 id="v3-get-list-of-payments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|payeeId|query|string(uuid)|false|The UUID of the payee.|
|payorId|query|string(uuid)|false|The account owner Payor Id. Required for external users.|
|payorName|query|string|false|The payor’s name. This filters via a case insensitive substring match.|
|remoteId|query|string|false|The remote id of the payees.|
|status|query|string|false|Payment Status|
|sourceAccountName|query|string|false|The source account name filter. This filters via a case insensitive substring match.|
|sourceAmountFrom|query|integer(int32)|false|The source amount from range filter. Filters for sourceAmount >= sourceAmountFrom|
|sourceAmountTo|query|integer(int32)|false|The source amount to range filter. Filters for sourceAmount ⇐ sourceAmountTo|
|sourceCurrency|query|string|false|The source currency filter. Filters based on an exact match on the currency.|
|paymentAmountFrom|query|integer(int32)|false|The payment amount from range filter. Filters for paymentAmount >= paymentAmountFrom|
|paymentAmountTo|query|integer(int32)|false|The payment amount to range filter. Filters for paymentAmount ⇐ paymentAmountTo|
|paymentCurrency|query|string|false|The payment currency filter. Filters based on an exact match on the currency.|
|submittedDateFrom|query|string(date)|false|The submitted date from range filter. Format is yyyy-MM-dd.|
|submittedDateTo|query|string(date)|false|The submitted date to range filter. Format is yyyy-MM-dd.|
|paymentMemo|query|string|false|The payment memo filter. This filters via a case insensitive substring match.|
|page|query|integer(int32)|false|Page number. Default is 1.|
|pageSize|query|integer(int32)|false|The number of results to return in a page|
|sort|query|string|false|List of sort fields (e.g. ?sort=submittedDateTime:asc,status:asc). Default is sort by remoteId<br>The supported sort fields are: sourceAmount, sourceCurrency, paymentAmount, paymentCurrency,<br>routingNumber, accountNumber, remoteId, submittedDateTime and status<br>|
|sensitive|query|boolean|false|Optional. If omitted or set to false, any Personal Identifiable Information (PII) values are returned masked.<br>If set to true, and you have permission, the PII values will be returned as their original unmasked values.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status|ACCEPTED|
|status|AWAITING_FUNDS|
|status|FUNDED|
|status|UNFUNDED|
|status|BANK_PAYMENT_REQUESTED|
|status|REJECTED|
|status|ACCEPTED_BY_RAILS|
|status|CONFIRMED|
|status|FAILED|
|status|RETURNED|
|status|WITHDRAWN|

> Example responses

> 200 Response

```json
{
  "content": [
    {
      "accountName": "My Account Name",
      "accountNumber": "123123232323",
      "countryCode": "US",
      "events": [
        {
          "accountName": "My account",
          "accountNumber": "123123123",
          "eventDateTime": "2000-01-23T04:56:07.000+00:00",
          "eventId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
          "eventType": "eventType",
          "iban": "DE89 3704 0044 0532 0130 00",
          "paymentAmount": 1299,
          "paymentCurrency": "paymentCurrency",
          "principal": "Prinicple example",
          "routingNumber": "123123123",
          "sourceAmount": 1299,
          "sourceCurrency": "sourceCurrency"
        },
        {
          "accountName": "My account",
          "accountNumber": "123123123",
          "eventDateTime": "2000-01-23T04:56:07.000+00:00",
          "eventId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
          "eventType": "eventType",
          "iban": "DE89 3704 0044 0532 0130 00",
          "paymentAmount": 1299,
          "paymentCurrency": "paymentCurrency",
          "principal": "Prinicple example",
          "routingNumber": "123123123",
          "sourceAmount": 1299,
          "sourceCurrency": "sourceCurrency"
        }
      ],
      "filenameReference": "file ref",
      "fundingStatus": "fundingStatus",
      "iban": "DE89 3704 0044 0532 0130 00",
      "individualIdentificationNumber": "1231231adf",
      "invertedRate": 1.4658129,
      "payeeId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "paymentAmount": 0,
      "paymentChannelId": "123asdf",
      "paymentChannelName": "My Payment Channel",
      "paymentCurrency": "paymentCurrency",
      "paymentId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "paymentMemo": "Payment memo",
      "paymentScheme": "paymentScheme",
      "payorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "payorName": "payorName",
      "payorPaymentId": "123123asdf",
      "quoteId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "railsBatchId": "railsBatchId",
      "railsId": "asdf123",
      "railsPaymentId": "railsPaymentId",
      "rate": 6.0274563,
      "rejectionReason": "rejectionReason",
      "remoteId": "aasdf123",
      "returnCost": 1232,
      "returnReason": "Some Reason Value",
      "routingNumber": "123123123123",
      "sourceAccountId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "sourceAccountName": "My Account",
      "sourceAmount": 12345,
      "sourceCurrency": "sourceCurrency",
      "status": "status",
      "submittedDateTime": "2000-01-23T04:56:07.000+00:00",
      "traceNumber": "abodu123"
    },
    {
      "accountName": "My Account Name",
      "accountNumber": "123123232323",
      "countryCode": "US",
      "events": [
        {
          "accountName": "My account",
          "accountNumber": "123123123",
          "eventDateTime": "2000-01-23T04:56:07.000+00:00",
          "eventId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
          "eventType": "eventType",
          "iban": "DE89 3704 0044 0532 0130 00",
          "paymentAmount": 1299,
          "paymentCurrency": "paymentCurrency",
          "principal": "Prinicple example",
          "routingNumber": "123123123",
          "sourceAmount": 1299,
          "sourceCurrency": "sourceCurrency"
        },
        {
          "accountName": "My account",
          "accountNumber": "123123123",
          "eventDateTime": "2000-01-23T04:56:07.000+00:00",
          "eventId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
          "eventType": "eventType",
          "iban": "DE89 3704 0044 0532 0130 00",
          "paymentAmount": 1299,
          "paymentCurrency": "paymentCurrency",
          "principal": "Prinicple example",
          "routingNumber": "123123123",
          "sourceAmount": 1299,
          "sourceCurrency": "sourceCurrency"
        }
      ],
      "filenameReference": "file ref",
      "fundingStatus": "fundingStatus",
      "iban": "DE89 3704 0044 0532 0130 00",
      "individualIdentificationNumber": "1231231adf",
      "invertedRate": 1.4658129,
      "payeeId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "paymentAmount": 0,
      "paymentChannelId": "123asdf",
      "paymentChannelName": "My Payment Channel",
      "paymentCurrency": "paymentCurrency",
      "paymentId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "paymentMemo": "Payment memo",
      "paymentScheme": "paymentScheme",
      "payorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "payorName": "payorName",
      "payorPaymentId": "123123asdf",
      "quoteId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "railsBatchId": "railsBatchId",
      "railsId": "asdf123",
      "railsPaymentId": "railsPaymentId",
      "rate": 6.0274563,
      "rejectionReason": "rejectionReason",
      "remoteId": "aasdf123",
      "returnCost": 1232,
      "returnReason": "Some Reason Value",
      "routingNumber": "123123123123",
      "sourceAccountId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "sourceAccountName": "My Account",
      "sourceAmount": 12345,
      "sourceCurrency": "sourceCurrency",
      "status": "status",
      "submittedDateTime": "2000-01-23T04:56:07.000+00:00",
      "traceNumber": "abodu123"
    }
  ],
  "links": [
    {
      "href": "https://example.com",
      "rel": "first"
    },
    {
      "href": "https://example.com",
      "rel": "first"
    }
  ],
  "page": {
    "numberOfElements": 12,
    "page": 1,
    "pageSize": 25,
    "totalElements": 12,
    "totalPages": 12
  }
}
```

> 400 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 400
}
```

> 401 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 401
}
```

> 403 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 403
}
```

<h3 id="v3-get-list-of-payments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Paginated list of payments|[ListPaymentsResponseV3](#schemalistpaymentsresponsev3)|
|400|Bad Request|Invalid request. See Error message payload for details of failure|[inline_response_400](#schemainline_response_400)|
|401|Unauthorized|Invalid access token. May be expired or invalid|[inline_response_401](#schemainline_response_401)|
|403|Forbidden|The authentication does not have permissions to access the resource<br>This usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions<br>|[inline_response_403](#schemainline_response_403)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## V3 Get Payment

<a id="opIdgetPaymentDetailsV3"></a>

> Code samples

```bash
curl https://example.com/v3/paymentaudit/payments/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v3/paymentaudit/payments/{paymentId}`

<aside class="warning">
This operation is deprecated
</aside>

Deprecated (use /v4/paymentaudit/payments/<paymentId> instead)

<h3 id="v3-get-payment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|paymentId|path|string(uuid)|true|Payment Id|
|sensitive|query|boolean|false|Optional. If omitted or set to false, any Personal Identifiable Information (PII) values are returned masked.<br>If set to true, and you have permission, the PII values will be returned as their original unmasked values.<br>|

> Example responses

> 200 Response

```json
{
  "accountName": "My Account Name",
  "accountNumber": "123123232323",
  "countryCode": "US",
  "events": [
    {
      "accountName": "My account",
      "accountNumber": "123123123",
      "eventDateTime": "2000-01-23T04:56:07.000+00:00",
      "eventId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "eventType": "eventType",
      "iban": "DE89 3704 0044 0532 0130 00",
      "paymentAmount": 1299,
      "paymentCurrency": "paymentCurrency",
      "principal": "Prinicple example",
      "routingNumber": "123123123",
      "sourceAmount": 1299,
      "sourceCurrency": "sourceCurrency"
    },
    {
      "accountName": "My account",
      "accountNumber": "123123123",
      "eventDateTime": "2000-01-23T04:56:07.000+00:00",
      "eventId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "eventType": "eventType",
      "iban": "DE89 3704 0044 0532 0130 00",
      "paymentAmount": 1299,
      "paymentCurrency": "paymentCurrency",
      "principal": "Prinicple example",
      "routingNumber": "123123123",
      "sourceAmount": 1299,
      "sourceCurrency": "sourceCurrency"
    }
  ],
  "filenameReference": "file ref",
  "fundingStatus": "fundingStatus",
  "iban": "DE89 3704 0044 0532 0130 00",
  "individualIdentificationNumber": "1231231adf",
  "invertedRate": 1.4658129,
  "payeeId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "paymentAmount": 0,
  "paymentChannelId": "123asdf",
  "paymentChannelName": "My Payment Channel",
  "paymentCurrency": "paymentCurrency",
  "paymentId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "paymentMemo": "Payment memo",
  "paymentScheme": "paymentScheme",
  "payorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "payorName": "payorName",
  "payorPaymentId": "123123asdf",
  "quoteId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "railsBatchId": "railsBatchId",
  "railsId": "asdf123",
  "railsPaymentId": "railsPaymentId",
  "rate": 6.0274563,
  "rejectionReason": "rejectionReason",
  "remoteId": "aasdf123",
  "returnCost": 1232,
  "returnReason": "Some Reason Value",
  "routingNumber": "123123123123",
  "sourceAccountId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "sourceAccountName": "My Account",
  "sourceAmount": 12345,
  "sourceCurrency": "sourceCurrency",
  "status": "status",
  "submittedDateTime": "2000-01-23T04:56:07.000+00:00",
  "traceNumber": "abodu123"
}
```

> 400 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 400
}
```

> 401 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 401
}
```

> 403 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 403
}
```

> 404 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 404
}
```

<h3 id="v3-get-payment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response, request completed okay|[PaymentResponseV3](#schemapaymentresponsev3)|
|400|Bad Request|Invalid request. See Error message payload for details of failure|[inline_response_400](#schemainline_response_400)|
|401|Unauthorized|Invalid access token. May be expired or invalid|[inline_response_401](#schemainline_response_401)|
|403|Forbidden|The authentication does not have permissions to access the resource<br>This usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions<br>|[inline_response_403](#schemainline_response_403)|
|404|Not Found|The resource was not found or is no longer available<br>|[inline_response_404](#schemainline_response_404)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## V3 Get Payouts for Payor

<a id="opIdgetPayoutsForPayorV3"></a>

> Code samples

```bash
curl 'https://example.com/v3/paymentaudit/payouts?payorId=497f6eca-6276-4993-bfeb-53cbbbba6f08' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v3/paymentaudit/payouts`

<aside class="warning">
This operation is deprecated
</aside>

Deprecated (use /v4/paymentaudit/payouts instead)

<h3 id="v3-get-payouts-for-payor-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|payorId|query|string(uuid)|true|The account owner Payor ID|
|payoutMemo|query|string|false|Payout Memo filter - case insensitive sub-string match|
|status|query|string|false|Payout Status|
|submittedDateFrom|query|string(date)|false|The submitted date from range filter. Format is yyyy-MM-dd.|
|submittedDateTo|query|string(date)|false|The submitted date to range filter. Format is yyyy-MM-dd.|
|page|query|integer(int32)|false|Page number. Default is 1.|
|pageSize|query|integer(int32)|false|The number of results to return in a page|
|sort|query|string|false|List of sort fields (e.g. ?sort=submittedDateTime:asc,instructedDateTime:asc,status:asc)<br>Default is submittedDateTime:asc<br>The supported sort fields are: submittedDateTime, instructedDateTime, status.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status|ACCEPTED|
|status|REJECTED|
|status|SUBMITTED|
|status|QUOTED|
|status|INSTRUCTED|
|status|COMPLETED|
|status|INCOMPLETE|
|status|CONFIRMED|
|status|WITHDRAWN|

> Example responses

> 200 Response

```json
{
  "content": [
    {
      "fxSummaries": [
        {
          "creationDateTime": "2000-01-23T04:56:07.000+00:00",
          "fundingStatus": "fundingStatus",
          "invertedRate": 1.12,
          "paymentCurrency": "paymentCurrency",
          "quoteId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
          "rate": 1.12,
          "sourceCurrency": "sourceCurrency",
          "status": "status",
          "totalCost": 1234,
          "totalPaymentAmount": 1234
        },
        {
          "creationDateTime": "2000-01-23T04:56:07.000+00:00",
          "fundingStatus": "fundingStatus",
          "invertedRate": 1.12,
          "paymentCurrency": "paymentCurrency",
          "quoteId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
          "rate": 1.12,
          "sourceCurrency": "sourceCurrency",
          "status": "status",
          "totalCost": 1234,
          "totalPaymentAmount": 1234
        }
      ],
      "instructedDateTime": "instructedDateTime",
      "payorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "payoutId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "payoutMemo": "payoutMemo",
      "sourceAccountSummary": [
        {
          "currency": "currency",
          "sourceAccountId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
          "totalCost": 3434
        },
        {
          "currency": "currency",
          "sourceAccountId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
          "totalCost": 3434
        }
      ],
      "status": "status",
      "submittedDateTime": "submittedDateTime",
      "totalFailedPayments": 123,
      "totalIncompletePayments": 123,
      "totalPayments": 123,
      "withdrawnDateTime": "withdrawnDateTime"
    },
    {
      "fxSummaries": [
        {
          "creationDateTime": "2000-01-23T04:56:07.000+00:00",
          "fundingStatus": "fundingStatus",
          "invertedRate": 1.12,
          "paymentCurrency": "paymentCurrency",
          "quoteId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
          "rate": 1.12,
          "sourceCurrency": "sourceCurrency",
          "status": "status",
          "totalCost": 1234,
          "totalPaymentAmount": 1234
        },
        {
          "creationDateTime": "2000-01-23T04:56:07.000+00:00",
          "fundingStatus": "fundingStatus",
          "invertedRate": 1.12,
          "paymentCurrency": "paymentCurrency",
          "quoteId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
          "rate": 1.12,
          "sourceCurrency": "sourceCurrency",
          "status": "status",
          "totalCost": 1234,
          "totalPaymentAmount": 1234
        }
      ],
      "instructedDateTime": "instructedDateTime",
      "payorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "payoutId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "payoutMemo": "payoutMemo",
      "sourceAccountSummary": [
        {
          "currency": "currency",
          "sourceAccountId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
          "totalCost": 3434
        },
        {
          "currency": "currency",
          "sourceAccountId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
          "totalCost": 3434
        }
      ],
      "status": "status",
      "submittedDateTime": "submittedDateTime",
      "totalFailedPayments": 123,
      "totalIncompletePayments": 123,
      "totalPayments": 123,
      "withdrawnDateTime": "withdrawnDateTime"
    }
  ],
  "links": [
    {
      "href": "https://example.com",
      "rel": "first"
    },
    {
      "href": "https://example.com",
      "rel": "first"
    }
  ],
  "page": {
    "numberOfElements": 12,
    "page": 1,
    "pageSize": 25,
    "totalElements": 123,
    "totalPages": 123
  }
}
```

> 400 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 400
}
```

> 401 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 401
}
```

> 403 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 403
}
```

> 404 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 404
}
```

<h3 id="v3-get-payouts-for-payor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Payor data found|[GetPayoutsResponseV3](#schemagetpayoutsresponsev3)|
|400|Bad Request|Invalid request. See Error message payload for details of failure|[inline_response_400](#schemainline_response_400)|
|401|Unauthorized|Invalid access token. May be expired or invalid|[inline_response_401](#schemainline_response_401)|
|403|Forbidden|The authentication does not have permissions to access the resource<br>This usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions<br>|[inline_response_403](#schemainline_response_403)|
|404|Not Found|The resource was not found or is no longer available<br>|[inline_response_404](#schemainline_response_404)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## V3 Get Payments for Payout

<a id="opIdgetPaymentsForPayout_PA_V3"></a>

> Code samples

```bash
curl https://example.com/v3/paymentaudit/payouts/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v3/paymentaudit/payouts/{payoutId}`

<aside class="warning">
This operation is deprecated
</aside>

Deprecated (use /v4/paymentaudit/payouts/<payoutId> instead)

<h3 id="v3-get-payments-for-payout-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|payoutId|path|string(uuid)|true|The id (UUID) of the payout.|
|remoteId|query|string|false|The remote id of the payees.|
|status|query|string|false|Payment Status|
|sourceAmountFrom|query|integer(int32)|false|The source amount from range filter. Filters for sourceAmount >= sourceAmountFrom|
|sourceAmountTo|query|integer(int32)|false|The source amount to range filter. Filters for sourceAmount ⇐ sourceAmountTo|
|paymentAmountFrom|query|integer(int32)|false|The payment amount from range filter. Filters for paymentAmount >= paymentAmountFrom|
|paymentAmountTo|query|integer(int32)|false|The payment amount to range filter. Filters for paymentAmount ⇐ paymentAmountTo|
|submittedDateFrom|query|string(date)|false|The submitted date from range filter. Format is yyyy-MM-dd.|
|submittedDateTo|query|string(date)|false|The submitted date to range filter. Format is yyyy-MM-dd.|
|page|query|integer(int32)|false|Page number. Default is 1.|
|pageSize|query|integer(int32)|false|The number of results to return in a page|
|sort|query|string|false|<p>List of sort fields (e.g. ?sort=submittedDateTime:asc,status:asc). Default is sort by remoteId</p><br><p>The supported sort fields are: sourceAmount, sourceCurrency, paymentAmount, paymentCurrency,<br>routingNumber, accountNumber, remoteId, submittedDateTime and status</p><br>|
|sensitive|query|boolean|false|Optional. If omitted or set to false, any Personal Identifiable Information (PII) values are returned masked.<br>If set to true, and you have permission, the PII values will be returned as their original unmasked values.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status|ACCEPTED|
|status|AWAITING_FUNDS|
|status|FUNDED|
|status|UNFUNDED|
|status|BANK_PAYMENT_REQUESTED|
|status|REJECTED|
|status|ACCEPTED_BY_RAILS|
|status|CONFIRMED|
|status|FAILED|
|status|RETURNED|
|status|WITHDRAWN|

> Example responses

> 200 Response

```json
{
  "content": [
    {
      "accountName": "My Account Name",
      "accountNumber": "123123232323",
      "countryCode": "US",
      "events": [
        {
          "accountName": "My account",
          "accountNumber": "123123123",
          "eventDateTime": "2000-01-23T04:56:07.000+00:00",
          "eventId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
          "eventType": "eventType",
          "iban": "DE89 3704 0044 0532 0130 00",
          "paymentAmount": 1299,
          "paymentCurrency": "paymentCurrency",
          "principal": "Prinicple example",
          "routingNumber": "123123123",
          "sourceAmount": 1299,
          "sourceCurrency": "sourceCurrency"
        },
        {
          "accountName": "My account",
          "accountNumber": "123123123",
          "eventDateTime": "2000-01-23T04:56:07.000+00:00",
          "eventId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
          "eventType": "eventType",
          "iban": "DE89 3704 0044 0532 0130 00",
          "paymentAmount": 1299,
          "paymentCurrency": "paymentCurrency",
          "principal": "Prinicple example",
          "routingNumber": "123123123",
          "sourceAmount": 1299,
          "sourceCurrency": "sourceCurrency"
        }
      ],
      "filenameReference": "file ref",
      "fundingStatus": "fundingStatus",
      "iban": "DE89 3704 0044 0532 0130 00",
      "individualIdentificationNumber": "1231231adf",
      "invertedRate": 1.4658129,
      "payeeId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "paymentAmount": 0,
      "paymentChannelId": "123asdf",
      "paymentChannelName": "My Payment Channel",
      "paymentCurrency": "paymentCurrency",
      "paymentId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "paymentMemo": "Payment memo",
      "paymentScheme": "paymentScheme",
      "payorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "payorName": "payorName",
      "payorPaymentId": "123123asdf",
      "quoteId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "railsBatchId": "railsBatchId",
      "railsId": "asdf123",
      "railsPaymentId": "railsPaymentId",
      "rate": 6.0274563,
      "rejectionReason": "rejectionReason",
      "remoteId": "aasdf123",
      "returnCost": 1232,
      "returnReason": "Some Reason Value",
      "routingNumber": "123123123123",
      "sourceAccountId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "sourceAccountName": "My Account",
      "sourceAmount": 12345,
      "sourceCurrency": "sourceCurrency",
      "status": "status",
      "submittedDateTime": "2000-01-23T04:56:07.000+00:00",
      "traceNumber": "abodu123"
    },
    {
      "accountName": "My Account Name",
      "accountNumber": "123123232323",
      "countryCode": "US",
      "events": [
        {
          "accountName": "My account",
          "accountNumber": "123123123",
          "eventDateTime": "2000-01-23T04:56:07.000+00:00",
          "eventId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
          "eventType": "eventType",
          "iban": "DE89 3704 0044 0532 0130 00",
          "paymentAmount": 1299,
          "paymentCurrency": "paymentCurrency",
          "principal": "Prinicple example",
          "routingNumber": "123123123",
          "sourceAmount": 1299,
          "sourceCurrency": "sourceCurrency"
        },
        {
          "accountName": "My account",
          "accountNumber": "123123123",
          "eventDateTime": "2000-01-23T04:56:07.000+00:00",
          "eventId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
          "eventType": "eventType",
          "iban": "DE89 3704 0044 0532 0130 00",
          "paymentAmount": 1299,
          "paymentCurrency": "paymentCurrency",
          "principal": "Prinicple example",
          "routingNumber": "123123123",
          "sourceAmount": 1299,
          "sourceCurrency": "sourceCurrency"
        }
      ],
      "filenameReference": "file ref",
      "fundingStatus": "fundingStatus",
      "iban": "DE89 3704 0044 0532 0130 00",
      "individualIdentificationNumber": "1231231adf",
      "invertedRate": 1.4658129,
      "payeeId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "paymentAmount": 0,
      "paymentChannelId": "123asdf",
      "paymentChannelName": "My Payment Channel",
      "paymentCurrency": "paymentCurrency",
      "paymentId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "paymentMemo": "Payment memo",
      "paymentScheme": "paymentScheme",
      "payorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "payorName": "payorName",
      "payorPaymentId": "123123asdf",
      "quoteId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "railsBatchId": "railsBatchId",
      "railsId": "asdf123",
      "railsPaymentId": "railsPaymentId",
      "rate": 6.0274563,
      "rejectionReason": "rejectionReason",
      "remoteId": "aasdf123",
      "returnCost": 1232,
      "returnReason": "Some Reason Value",
      "routingNumber": "123123123123",
      "sourceAccountId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "sourceAccountName": "My Account",
      "sourceAmount": 12345,
      "sourceCurrency": "sourceCurrency",
      "status": "status",
      "submittedDateTime": "2000-01-23T04:56:07.000+00:00",
      "traceNumber": "abodu123"
    }
  ],
  "links": [
    {
      "href": "https://example.com",
      "rel": "first"
    },
    {
      "href": "https://example.com",
      "rel": "first"
    }
  ],
  "page": {
    "numberOfElements": 12,
    "page": 1,
    "pageSize": 25,
    "totalElements": 12,
    "totalPages": 10
  },
  "summary": {
    "confirmedPayments": 123,
    "failedPayments": 0,
    "incompletePayments": 123,
    "instructedDateTime": "2000-01-23T04:56:07.000+00:00",
    "payoutMemo": "Payment Memo value",
    "payoutStatus": "payoutStatus",
    "releasedPayments": 123,
    "submittedDateTime": "2000-01-23T04:56:07.000+00:00",
    "totalPayments": 123,
    "withdrawnDateTime": "2000-01-23T04:56:07.000+00:00"
  }
}
```

> 400 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 400
}
```

> 401 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 401
}
```

> 403 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 403
}
```

> 404 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 404
}
```

<h3 id="v3-get-payments-for-payout-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 response, data found okay|[GetPaymentsForPayoutResponseV3](#schemagetpaymentsforpayoutresponsev3)|
|400|Bad Request|Invalid request. See Error message payload for details of failure|[inline_response_400](#schemainline_response_400)|
|401|Unauthorized|Invalid access token. May be expired or invalid|[inline_response_401](#schemainline_response_401)|
|403|Forbidden|The authentication does not have permissions to access the resource<br>This usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions<br>|[inline_response_403](#schemainline_response_403)|
|404|Not Found|The resource was not found or is no longer available<br>|[inline_response_404](#schemainline_response_404)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## V3 Export Transactions

<a id="opIdexportTransactionsCSVV3"></a>

> Code samples

```bash
curl https://example.com/v3/paymentaudit/transactions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v3/paymentaudit/transactions`

<aside class="warning">
This operation is deprecated
</aside>

Deprecated (use /v4/paymentaudit/transactions instead)

<h3 id="v3-export-transactions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|payorId|query|string(uuid)|false|The Payor ID for whom you wish to run the report.<br>For a Payor requesting the report, this could be their exact Payor, or it could be a child/descendant Payor.<br>|
|startDate|query|string(date)|false|Start date, inclusive. Format is YYYY-MM-DD|
|endDate|query|string(date)|false|End date, inclusive. Format is YYYY-MM-DD|

> Example responses

> 400 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 400
}
```

> 401 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 401
}
```

> 403 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 403
}
```

<h3 id="v3-export-transactions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Export Transactions response|[PayorAmlTransactionV3](#schemapayoramltransactionv3)|
|400|Bad Request|Invalid request. See Error message payload for details of failure|[inline_response_400](#schemainline_response_400)|
|401|Unauthorized|Invalid access token. May be expired or invalid|[inline_response_401](#schemainline_response_401)|
|403|Forbidden|The authentication does not have permissions to access the resource<br>This usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions<br>|[inline_response_403](#schemainline_response_403)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

<h1 id="velo-payments-apis-countries">Countries</h1>

## List Payment Channel Country Rules

<a id="opIdlistPaymentChannelRulesV1"></a>

> Code samples

```bash
curl https://example.com/v1/paymentChannelRules \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/paymentChannelRules`

List the country specific payment channel rules.

> Example responses

> 200 Response

```json
{
  "bank": [
    {
      "isoCountryCode": "US",
      "rules": [
        {
          "displayName": "Account Name",
          "displayOrder": 0,
          "element": "accountName",
          "maxLength": 50,
          "minLength": 5,
          "required": true,
          "validation": "^[0-9]{6,11}$"
        },
        {
          "displayName": "Account Name",
          "displayOrder": 0,
          "element": "accountName",
          "maxLength": 50,
          "minLength": 5,
          "required": true,
          "validation": "^[0-9]{6,11}$"
        }
      ]
    },
    {
      "isoCountryCode": "US",
      "rules": [
        {
          "displayName": "Account Name",
          "displayOrder": 0,
          "element": "accountName",
          "maxLength": 50,
          "minLength": 5,
          "required": true,
          "validation": "^[0-9]{6,11}$"
        },
        {
          "displayName": "Account Name",
          "displayOrder": 0,
          "element": "accountName",
          "maxLength": 50,
          "minLength": 5,
          "required": true,
          "validation": "^[0-9]{6,11}$"
        }
      ]
    }
  ]
}
```

> 401 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 401
}
```

<h3 id="list-payment-channel-country-rules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List Payment Channel Country Rules|[PaymentChannelRulesResponse](#schemapaymentchannelrulesresponse)|
|401|Unauthorized|Invalid access token. May be expired or invalid|[inline_response_401](#schemainline_response_401)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## List Supported Countries

<a id="opIdlistSupportedCountriesV1"></a>

> Code samples

```bash
curl https://example.com/v1/supportedCountries \
  -H 'Accept: application/json'
```

`GET /v1/supportedCountries`

<aside class="warning">
This operation is deprecated
</aside>

<p>List the supported countries.</p>
<p>This version will be retired in March 2020. Use /v2/supportedCountries</p>


> Example responses

> 200 Response

```json
{
  "countries": [
    {
      "currencies": [
        "USD",
        "USD"
      ],
      "isoCountryCode": "US"
    },
    {
      "currencies": [
        "USD",
        "USD"
      ],
      "isoCountryCode": "US"
    }
  ]
}
```

<h3 id="list-supported-countries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of Supported Countries|[SupportedCountriesResponse](#schemasupportedcountriesresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## List Supported Countries

<a id="opIdlistSupportedCountriesV2"></a>

> Code samples

```bash
curl https://example.com/v2/supportedCountries \
  -H 'Accept: application/json'
```

`GET /v2/supportedCountries`

List the supported countries.

> Example responses

> 200 Response

```json
{
  "countries": [
    {
      "currencies": [
        "USD",
        "USD"
      ],
      "isoCountryCode": "US",
      "regions": [
        {
          "abbreviation": "CA",
          "name": "California"
        },
        {
          "abbreviation": "CA",
          "name": "California"
        }
      ]
    },
    {
      "currencies": [
        "USD",
        "USD"
      ],
      "isoCountryCode": "US",
      "regions": [
        {
          "abbreviation": "CA",
          "name": "California"
        },
        {
          "abbreviation": "CA",
          "name": "California"
        }
      ]
    }
  ]
}
```

<h3 id="list-supported-countries-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of Supported Countries|[SupportedCountriesResponseV2](#schemasupportedcountriesresponsev2)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="velo-payments-apis-payors-private">Payors Private</h1>

## Create a Payor Link

<a id="opIdcreatePayorLinks"></a>

> Code samples

```bash
curl https://example.com/v1/payorLinks \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "fromPayorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "linkType": "PARENT_OF",
    "toPayorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
  }'
```

`POST /v1/payorLinks`

This endpoint allows you to create a payor link.

> Body parameter

```json
{
  "fromPayorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "linkType": "PARENT_OF",
  "toPayorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
}
```

<h3 id="create-a-payor-link-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreatePayorLinkRequest](#schemacreatepayorlinkrequest)|true|Request to create a payor link|
|» fromPayorId|body|string(uuid)|true|none|
|» linkType|body|string|true|none|
|» toPayorId|body|string(uuid)|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» linkType|PARENT_OF|

> Example responses

> 400 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 400
}
```

> 403 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 403
}
```

> 404 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 404
}
```

<h3 id="create-a-payor-link-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|HTTP Creeated|None|
|400|Bad Request|Invalid request. See Error message payload for details of failure|[inline_response_400](#schemainline_response_400)|
|403|Forbidden|The authentication does not have permissions to access the resource<br>This usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions<br>|[inline_response_403](#schemainline_response_403)|
|404|Not Found|The resource was not found or is no longer available<br>|[inline_response_404](#schemainline_response_404)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||URI to location of created resource|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oAuthVeloBackOffice
</aside>

<h1 id="velo-payments-apis-webhooks">Webhooks</h1>

## List the details about the webhooks for the given payor.

<a id="opIdlistWebhooksV1"></a>

> Code samples

```bash
curl 'https://example.com/v1/webhooks?payorId=497f6eca-6276-4993-bfeb-53cbbbba6f08' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/webhooks`

List the details about the webhooks for the given payor.

<h3 id="list-the-details-about-the-webhooks-for-the-given-payor-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer(int32)|false|Page number. Default is 1.|
|pageSize|query|integer(int32)|false|The number of results to return in a page|
|payorId|query|string(uuid)|true|The Payor ID|

> Example responses

> 200 Response

```json
{
  "content": [
    {
      "authorizationHeader": "authorizationHeader",
      "categories": [
        null,
        null
      ],
      "enabled": true,
      "id": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "payorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "webhookUrl": "webhookUrl"
    },
    {
      "authorizationHeader": "authorizationHeader",
      "categories": [
        null,
        null
      ],
      "enabled": true,
      "id": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "payorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "webhookUrl": "webhookUrl"
    }
  ],
  "links": [
    {
      "href": "href",
      "rel": "rel"
    },
    {
      "href": "href",
      "rel": "rel"
    }
  ],
  "page": {
    "numberOfElements": 0,
    "page": 5,
    "pageSize": 5,
    "totalElements": 6,
    "totalPages": 1
  }
}
```

> 401 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 401
}
```

> 403 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 403
}
```

<h3 id="list-the-details-about-the-webhooks-for-the-given-payor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Webhook response|[WebhooksResponse](#schemawebhooksresponse)|
|400|Bad Request|Invalid Request Parameters|None|
|401|Unauthorized|Invalid access token. May be expired or invalid|[inline_response_401](#schemainline_response_401)|
|403|Forbidden|The authentication does not have permissions to access the resource<br>This usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions<br>|[inline_response_403](#schemainline_response_403)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Create Webhook

<a id="opIdcreateWebhookV1"></a>

> Code samples

```bash
curl https://example.com/v1/webhooks \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "authorizationHeader": "authorizationHeader",
    "categories": [
      null,
      null
    ],
    "enabled": true,
    "payorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "webhookUrl": "webhookUrl"
  }'
```

`POST /v1/webhooks`

Create Webhook

> Body parameter

```json
{
  "authorizationHeader": "authorizationHeader",
  "categories": [
    null,
    null
  ],
  "enabled": true,
  "payorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "webhookUrl": "webhookUrl"
}
```

<h3 id="create-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateWebhookRequest](#schemacreatewebhookrequest)|false|none|
|» authorizationHeader|body|string|false|the authorization header to include with the notification.|
|» categories|body|[[Category](#schemacategory)]|false|the categories to enable.|
|» enabled|body|boolean|true|whether the webhook is enabled.|
|» payorId|body|string(uuid)|true|none|
|» webhookUrl|body|string|true|the webhook URL to use.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» categories|payment|
|» categories|payee|
|» categories|debit|

> Example responses

> 400 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 400
}
```

> 401 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 401
}
```

> 403 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 403
}
```

<h3 id="create-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Webhook Created|None|
|400|Bad Request|Invalid request. See Error message payload for details of failure|[inline_response_400](#schemainline_response_400)|
|401|Unauthorized|Invalid access token. May be expired or invalid|[inline_response_401](#schemainline_response_401)|
|403|Forbidden|The authentication does not have permissions to access the resource<br>This usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions<br>|[inline_response_403](#schemainline_response_403)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||Reference to Webhook object|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Get details about the given webhook.

<a id="opIdgetWebhookV1"></a>

> Code samples

```bash
curl https://example.com/v1/webhooks/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/webhooks/{webhookId}`

Get details about the given webhook.

<h3 id="get-details-about-the-given-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|webhookId|path|string(uuid)|true|Webhook id|

> Example responses

> 200 Response

```json
{
  "authorizationHeader": "authorizationHeader",
  "categories": [
    null,
    null
  ],
  "enabled": true,
  "id": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "payorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "webhookUrl": "webhookUrl"
}
```

> 401 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 401
}
```

> 403 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 403
}
```

> 404 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 404
}
```

<h3 id="get-details-about-the-given-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Webhook response|[WebhookResponse](#schemawebhookresponse)|
|400|Bad Request|Bad Request, Invalid path parameter|None|
|401|Unauthorized|Invalid access token. May be expired or invalid|[inline_response_401](#schemainline_response_401)|
|403|Forbidden|The authentication does not have permissions to access the resource<br>This usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions<br>|[inline_response_403](#schemainline_response_403)|
|404|Not Found|The resource was not found or is no longer available<br>|[inline_response_404](#schemainline_response_404)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Update Webhook

<a id="opIdupdateWebhookV1"></a>

> Code samples

```bash
curl https://example.com/v1/webhooks/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "authorizationHeader": "authorizationHeader",
    "categories": [
      null,
      null
    ],
    "enabled": true,
    "webhookUrl": "webhookUrl"
  }'
```

`POST /v1/webhooks/{webhookId}`

Update Webhook

> Body parameter

```json
{
  "authorizationHeader": "authorizationHeader",
  "categories": [
    null,
    null
  ],
  "enabled": true,
  "webhookUrl": "webhookUrl"
}
```

<h3 id="update-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|webhookId|path|string(uuid)|true|Webhook id|
|body|body|[UpdateWebhookRequest](#schemaupdatewebhookrequest)|false|none|
|» authorizationHeader|body|string \| null|false|the authorization header to include with the notification.|
|» categories|body|[[Category](#schemacategory)]|false|The notification categories to enable.|
|» enabled|body|boolean|false|whether the webhook is enabled.|
|» webhookUrl|body|string|false|the webhook URL to use.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» categories|payment|
|» categories|payee|
|» categories|debit|

> Example responses

> 400 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 400
}
```

> 401 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 401
}
```

> 403 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 403
}
```

> 404 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 404
}
```

<h3 id="update-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Webhook Updated|None|
|400|Bad Request|Invalid request. See Error message payload for details of failure|[inline_response_400](#schemainline_response_400)|
|401|Unauthorized|Invalid access token. May be expired or invalid|[inline_response_401](#schemainline_response_401)|
|403|Forbidden|The authentication does not have permissions to access the resource<br>This usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions<br>|[inline_response_403](#schemainline_response_403)|
|404|Not Found|The resource was not found or is no longer available<br>|[inline_response_404](#schemainline_response_404)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## pingWebhookV1

<a id="opIdpingWebhookV1"></a>

> Code samples

```bash
curl https://example.com/v1/webhooks/497f6eca-6276-4993-bfeb-53cbbbba6f08/ping \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v1/webhooks/{webhookId}/ping`

<h3 id="pingwebhookv1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|webhookId|path|string(uuid)|true|Webhook id|

> Example responses

> 202 Response

```json
{
  "id": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "webhookId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
}
```

> 401 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 401
}
```

> 403 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 403
}
```

> 404 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 404
}
```

<h3 id="pingwebhookv1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Send ping|[PingResponse](#schemapingresponse)|
|400|Bad Request|Bad Request, Invalid path parameter|None|
|401|Unauthorized|Invalid access token. May be expired or invalid|[inline_response_401](#schemainline_response_401)|
|403|Forbidden|The authentication does not have permissions to access the resource<br>This usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions<br>|[inline_response_403](#schemainline_response_403)|
|404|Not Found|The resource was not found or is no longer available<br>|[inline_response_404](#schemainline_response_404)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

<h1 id="velo-payments-apis-currencies">Currencies</h1>

## List Supported Currencies

<a id="opIdlistSupportedCurrenciesV2"></a>

> Code samples

```bash
curl https://example.com/v2/currencies \
  -H 'Accept: application/json'
```

`GET /v2/currencies`

List the supported currencies.

> Example responses

> 200 Response

```json
{
  "currencies": [
    {
      "currency": "USD",
      "maxPaymentAmount": 100000
    },
    {
      "currency": "USD",
      "maxPaymentAmount": 100000
    }
  ]
}
```

<h3 id="list-supported-currencies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List Supported Currencies|[SupportedCurrencyResponseV2](#schemasupportedcurrencyresponsev2)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="velo-payments-apis-funding-manager-private">Funding Manager Private</h1>

## Create Funding Account

<a id="opIdcreateFundingAccountV2"></a>

> Code samples

```bash
curl https://example.com/v2/fundingAccounts \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "accountName": "My Account Name",
    "accountNumber": 1231231234556,
    "name": "My FBO Account",
    "payorId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
    "routingNumber": 123456789,
    "type": "FBO"
  }'
```

`POST /v2/fundingAccounts`

Create Funding Account

> Body parameter

```json
{
  "accountName": "My Account Name",
  "accountNumber": 1231231234556,
  "name": "My FBO Account",
  "payorId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "routingNumber": 123456789,
  "type": "FBO"
}
```

<h3 id="create-funding-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateFundingAccountRequestV2](#schemacreatefundingaccountrequestv2)|false|none|
|» accountName|body|string|false|Required if type is either FBO or PRIVATE|
|» accountNumber|body|string|false|Required if type is either FBO or PRIVATE|
|» currency|body|string|false|ISO 4217 currency code, Required if type is either WUBS_DECOUPLED or PRIVATE|
|» name|body|string|true|none|
|» payorId|body|string(uuid)|true|none|
|» routingNumber|body|string|false|Required if type is either FBO or PRIVATE|
|» type|body|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|FBO|
|» type|WUBS_DECOUPLED|
|» type|PRIVATE|

> Example responses

> 400 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 400
}
```

> 401 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 401
}
```

> 403 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 403
}
```

<h3 id="create-funding-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Funding Account Creation Request Accepted|None|
|400|Bad Request|Invalid request. See Error message payload for details of failure|[inline_response_400](#schemainline_response_400)|
|401|Unauthorized|Invalid access token. May be expired or invalid|[inline_response_401](#schemainline_response_401)|
|403|Forbidden|The authentication does not have permissions to access the resource<br>This usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions<br>|[inline_response_403](#schemainline_response_403)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|202|Location|string|uri|Reference to status object|
|202|Retry-After|integer||How long the user agent should wait before making a follow-up request (seconds)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Delete a source account by ID

<a id="opIddeleteSourceAccountV3"></a>

> Code samples

```bash
curl https://example.com/v3/sourceAccounts/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v3/sourceAccounts/{sourceAccountId}`

Mark a source account as deleted by ID

<h3 id="delete-a-source-account-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sourceAccountId|path|string(uuid)|true|Source account id|

> Example responses

> 400 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 400
}
```

> 401 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 401
}
```

> 403 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 403
}
```

> 404 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 404
}
```

> 409 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 409
}
```

<h3 id="delete-a-source-account-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content - Source account is deleted|None|
|400|Bad Request|Invalid request. See Error message payload for details of failure|[inline_response_400](#schemainline_response_400)|
|401|Unauthorized|Invalid access token. May be expired or invalid|[inline_response_401](#schemainline_response_401)|
|403|Forbidden|The authentication does not have permissions to access the resource<br>This usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions<br>|[inline_response_403](#schemainline_response_403)|
|404|Not Found|The resource was not found or is no longer available<br>|[inline_response_404](#schemainline_response_404)|
|409|Conflict|The request contained data that would result in a duplicate value<br>|[inline_response_409](#schemainline_response_409)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

<h1 id="velo-payments-apis-users">Users</h1>

## List Users

<a id="opIdlistUsers"></a>

> Code samples

```bash
curl https://example.com/v2/users \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/users`

Get a paginated response listing the Users

<h3 id="list-users-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|query|[UserType](#schemausertype)|false|The Type of the User.|
|status|query|[UserStatus](#schemauserstatus)|false|The status of the User.|
|entityId|query|string(uuid)|false|The entityId of the User.|
|payeeType|query|[PayeeType](#schemapayeetype)|false|The Type of the Payee entity. Either COMPANY or INDIVIDUAL.|
|page|query|integer(int32)|false|Page number. Default is 1.|
|pageSize|query|integer(int32)|false|The number of results to return in a page|
|sort|query|string|false|List of sort fields (e.g. ?sort=email:asc,lastName:asc)<br>Default is email:asc 'name'<br>The supported sort fields are - email, lastNmae.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|BACKOFFICE|
|type|PAYOR|
|type|PAYEE|
|status|ENABLED|
|status|DISABLED|
|status|PENDING|
|payeeType|COMPANY|
|payeeType|INDIVIDUAL|

> Example responses

> 200 Response

```json
{
  "content": [
    {
      "companyName": "Acme Corp",
      "email": "foo@example.com",
      "entityId": "7fffa261-ac68-49e6-b605-d24a444d9206",
      "firstName": "John",
      "id": "8bbf301c-948f-4445-b411-357eec53e441",
      "lastName": "Doe",
      "lockedOut": true,
      "lockedOutTimestamp": "2000-01-23T04:56:07.000+00:00",
      "mfaStatus": "REGISTERED",
      "mfaType": "TOTP",
      "primaryContactNumber": "11235555555",
      "roles": [
        "payor.admin"
      ],
      "secondaryContactNumber": "11235555550",
      "smsNumber": "11235555555",
      "status": "ENABLED",
      "userType": "PAYOR"
    },
    {
      "companyName": "Acme Corp",
      "email": "foo@example.com",
      "entityId": "7fffa261-ac68-49e6-b605-d24a444d9206",
      "firstName": "John",
      "id": "8bbf301c-948f-4445-b411-357eec53e441",
      "lastName": "Doe",
      "lockedOut": true,
      "lockedOutTimestamp": "2000-01-23T04:56:07.000+00:00",
      "mfaStatus": "REGISTERED",
      "mfaType": "TOTP",
      "primaryContactNumber": "11235555555",
      "roles": [
        "payor.admin"
      ],
      "secondaryContactNumber": "11235555550",
      "smsNumber": "11235555555",
      "status": "ENABLED",
      "userType": "PAYOR"
    }
  ],
  "links": [
    {
      "href": "https://api.sandbox.velopayments.com/v2/users??type=PAYOR&page=1&pageSize=10",
      "rel": "first"
    },
    {
      "href": "https://api.sandbox.velopayments.com/v2/users??type=PAYOR&page=1&pageSize=10",
      "rel": "first"
    }
  ],
  "page": {
    "numberOfElements": 12,
    "page": 1,
    "pageSize": 25,
    "totalElements": 33,
    "totalPages": 2
  }
}
```

> 400 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 400
}
```

> 401 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 401
}
```

> 403 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 403
}
```

<h3 id="list-users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Paginated list of Users filtered by query parameters|[PagedUserResponse](#schemapageduserresponse)|
|400|Bad Request|Invalid request. See Error message payload for details of failure|[inline_response_400](#schemainline_response_400)|
|401|Unauthorized|Invalid access token. May be expired or invalid|[inline_response_401](#schemainline_response_401)|
|403|Forbidden|The authentication does not have permissions to access the resource<br>This usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions<br>|[inline_response_403](#schemainline_response_403)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Invite a User

<a id="opIdinviteUser"></a>

> Code samples

```bash
curl https://example.com/v2/users/invite \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "email": "foo@example.com",
    "entityId": "7fffa261-ac68-49e6-b605-d24a444d9206",
    "firstName": "John",
    "lastName": "Doe",
    "mfaType": "TOTP",
    "primaryContactNumber": "11235555555",
    "roles": [
      "velo.payor.admin"
    ],
    "secondaryContactNumber": "11235555550",
    "smsNumber": "11235555555",
    "userType": "PAYEE",
    "verificationCode": "123456"
  }'
```

`POST /v2/users/invite`

Create a User and invite them to the system


> Body parameter

```json
{
  "email": "foo@example.com",
  "entityId": "7fffa261-ac68-49e6-b605-d24a444d9206",
  "firstName": "John",
  "lastName": "Doe",
  "mfaType": "TOTP",
  "primaryContactNumber": "11235555555",
  "roles": [
    "velo.payor.admin"
  ],
  "secondaryContactNumber": "11235555550",
  "smsNumber": "11235555555",
  "userType": "PAYEE",
  "verificationCode": "123456"
}
```

<h3 id="invite-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[InviteUserRequest](#schemainviteuserrequest)|true|Details of User to invite|
|» email|body|string(email)|true|the email address of the invited user|
|» entityId|body|string(uuid) \| null|false|The payorId or payeeId or null if the user is a backoffice admin<br>|
|» firstName|body|string|false|none|
|» lastName|body|string|false|none|
|» mfaType|body|string|true|<p>The MFA type that the user will use</p><br><p>The type may be conditional on the role(s) the user has</p><br>|
|» primaryContactNumber|body|string|true|The main contact number for the user<br>|
|» roles|body|[string]|true|The role(s) for the user<br>The role must exist<br>The role can be a custom role or a system role but the invoker must have the permissions to assign the role<br>System roles are: velo.backoffice.admin, velo.payor.master_admin, velo.payor.admin, velo.payor.support, velo.payee.admin, velo.payee.support<br>|
|» secondaryContactNumber|body|string \| null|false|The secondary contact number for the user<br>|
|» smsNumber|body|string|true|The phone number of a device that the user can receive sms messages on<br>|
|» userType|body|string|false|Will default to PAYOR if not provided but entityId is provided|
|» verificationCode|body|string \| null|false|Optional property that MUST be suppied when manually verifying a user<br>The user's smsNumber is registered via a separate endpoint and an OTP sent to them<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» mfaType|SMS|
|» mfaType|YUBIKEY|
|» mfaType|TOTP|
|» userType|BACKOFFICE|
|» userType|PAYOR|
|» userType|PAYEE|

> Example responses

> 400 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 400
}
```

> 401 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 401
}
```

> 403 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 403
}
```

> 409 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 409
}
```

> 412 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 412
}
```

<h3 id="invite-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content. The user was invited successfully|None|
|400|Bad Request|Invalid request. See Error message payload for details of failure|[inline_response_400](#schemainline_response_400)|
|401|Unauthorized|Invalid access token. May be expired or invalid|[inline_response_401](#schemainline_response_401)|
|403|Forbidden|The authentication does not have permissions to access the resource<br>This usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions<br>|[inline_response_403](#schemainline_response_403)|
|409|Conflict|The request contained data that would result in a duplicate value<br>|[inline_response_409](#schemainline_response_409)|
|412|Precondition Failed|The request could not be completed as a precondition was not met<br>|[inline_response_412](#schemainline_response_412)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Register SMS Number

<a id="opIdregisterSms"></a>

> Code samples

```bash
curl https://example.com/v2/users/registration/sms \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "smsNumber": "11235555555"
  }'
```

`POST /v2/users/registration/sms`

<p>Register an Sms number and send an OTP to it </p>
<p>Used for manual verification of a user </p>
<p>The backoffice user initiates the request to send the OTP to the user's sms </p>
<p>The user then reads back the OTP which the backoffice user enters in the verifactionCode property for requests that require it</p>


> Body parameter

```json
{
  "smsNumber": "11235555555"
}
```

<h3 id="register-sms-number-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[RegisterSmsRequest](#schemaregistersmsrequest)|true|a SMS Number to send an OTP to|
|» smsNumber|body|string|true|The phone number of a device that the user can receive sms messages on<br>|

> Example responses

> 400 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 400
}
```

> 401 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 401
}
```

> 403 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 403
}
```

<h3 id="register-sms-number-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|request completed okay|None|
|400|Bad Request|Invalid request. See Error message payload for details of failure|[inline_response_400](#schemainline_response_400)|
|401|Unauthorized|Invalid access token. May be expired or invalid|[inline_response_401](#schemainline_response_401)|
|403|Forbidden|The authentication does not have permissions to access the resource<br>This usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions<br>|[inline_response_403](#schemainline_response_403)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Get Self

<a id="opIdgetSelf"></a>

> Code samples

```bash
curl https://example.com/v2/users/self \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/users/self`

Get the user's details


> Example responses

> 200 Response

```json
{
  "companyName": "Acme Corp",
  "email": "foo@example.com",
  "entityId": "7fffa261-ac68-49e6-b605-d24a444d9206",
  "firstName": "John",
  "id": "8bbf301c-948f-4445-b411-357eec53e441",
  "lastName": "Doe",
  "lockedOut": true,
  "lockedOutTimestamp": "2000-01-23T04:56:07.000+00:00",
  "mfaStatus": "REGISTERED",
  "mfaType": "TOTP",
  "primaryContactNumber": "11235555555",
  "roles": [
    "payor.admin"
  ],
  "secondaryContactNumber": "11235555550",
  "smsNumber": "11235555555",
  "status": "ENABLED",
  "userType": "PAYOR"
}
```

> 401 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 401
}
```

> 403 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 403
}
```

<h3 id="get-self-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Get User Details|[UserResponse](#schemauserresponse)|
|401|Unauthorized|Invalid access token. May be expired or invalid|[inline_response_401](#schemainline_response_401)|
|403|Forbidden|The authentication does not have permissions to access the resource<br>This usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions<br>|[inline_response_403](#schemainline_response_403)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Unregister MFA for Self

<a id="opIdunregisterMFAForSelf"></a>

> Code samples

```bash
curl https://example.com/v2/users/self/mfa/unregister \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "mfaType": "TOTP"
  }'
```

`POST /v2/users/self/mfa/unregister`

<p>Unregister the MFA device for the user </p>
<p>If the user does not require further verification then a register new MFA device token will be sent to them via their email address</p>


> Body parameter

```json
{
  "mfaType": "TOTP"
}
```

<h3 id="unregister-mfa-for-self-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|false|Bearer token authorization leg of validate|
|body|body|[SelfMFATypeUnregisterRequest](#schemaselfmfatypeunregisterrequest)|true|The MFA Type to unregister|
|» mfaType|body|string|true|The type of the MFA device|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» mfaType|SMS|
|» mfaType|YUBIKEY|
|» mfaType|TOTP|

> Example responses

> 400 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 400
}
```

> 401 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 401
}
```

> 403 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 403
}
```

<h3 id="unregister-mfa-for-self-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|the MFA Type to unregister|None|
|400|Bad Request|Invalid request. See Error message payload for details of failure|[inline_response_400](#schemainline_response_400)|
|401|Unauthorized|Invalid access token. May be expired or invalid|[inline_response_401](#schemainline_response_401)|
|403|Forbidden|The authentication does not have permissions to access the resource<br>This usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions<br>|[inline_response_403](#schemainline_response_403)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Update Password for self

<a id="opIdupdatePasswordSelf"></a>

> Code samples

```bash
curl https://example.com/v2/users/self/password \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "newPassword": "My_new_password",
    "oldPassword": "My_current_password"
  }'
```

`POST /v2/users/self/password`

Update password for self


> Body parameter

```json
{
  "newPassword": "My_new_password",
  "oldPassword": "My_current_password"
}
```

<h3 id="update-password-for-self-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SelfUpdatePasswordRequest](#schemaselfupdatepasswordrequest)|true|The password|
|» newPassword|body|string|true|The new password|
|» oldPassword|body|string|true|The user's current password|

> Example responses

> 400 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 400
}
```

> 401 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 401
}
```

> 403 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 403
}
```

<h3 id="update-password-for-self-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|the password was submitted and accepted|None|
|400|Bad Request|Invalid request. See Error message payload for details of failure|[inline_response_400](#schemainline_response_400)|
|401|Unauthorized|Invalid access token. May be expired or invalid|[inline_response_401](#schemainline_response_401)|
|403|Forbidden|The authentication does not have permissions to access the resource<br>This usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions<br>|[inline_response_403](#schemainline_response_403)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Validate the proposed password

<a id="opIdvalidatePasswordSelf"></a>

> Code samples

```bash
curl https://example.com/v2/users/self/password/validate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "password": "My_strong_password"
  }'
```

`POST /v2/users/self/password/validate`

validate the password and return a score


> Body parameter

```json
{
  "password": "My_strong_password"
}
```

<h3 id="validate-the-proposed-password-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PasswordRequest](#schemapasswordrequest)|true|The password|
|» password|body|string|true|a password that passes validation|

> Example responses

> 200 Response

```json
{
  "score": 2,
  "suggestions": [
    "[password has been used before]",
    "[password has been used before]"
  ],
  "valid": true,
  "warning": "Historic Password"
}
```

> 400 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 400
}
```

> 401 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 401
}
```

> 403 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 403
}
```

<h3 id="validate-the-proposed-password-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|the password was checked and a score returned|[ValidatePasswordResponse](#schemavalidatepasswordresponse)|
|400|Bad Request|Invalid request. See Error message payload for details of failure|[inline_response_400](#schemainline_response_400)|
|401|Unauthorized|Invalid access token. May be expired or invalid|[inline_response_401](#schemainline_response_401)|
|403|Forbidden|The authentication does not have permissions to access the resource<br>This usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions<br>|[inline_response_403](#schemainline_response_403)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Update User Details for self

<a id="opIduserDetailsUpdateForSelf"></a>

> Code samples

```bash
curl https://example.com/v2/users/self/userDetailsUpdate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "email": "foo@example.com",
    "firstName": "John",
    "lastName": "Doe",
    "primaryContactNumber": "11235555555",
    "secondaryContactNumber": "11235555550",
    "smsNumber": "11235555555"
  }'
```

`POST /v2/users/self/userDetailsUpdate`

<p>Update the profile details for the given user</p>
<p>Only Payee user types are supported</p>


> Body parameter

```json
{
  "email": "foo@example.com",
  "firstName": "John",
  "lastName": "Doe",
  "primaryContactNumber": "11235555555",
  "secondaryContactNumber": "11235555550",
  "smsNumber": "11235555555"
}
```

<h3 id="update-user-details-for-self-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PayeeUserSelfUpdateRequest](#schemapayeeuserselfupdaterequest)|true|The details of the user to update|
|» email|body|string(email) \| null|false|the email address of the user|
|» firstName|body|string \| null|false|none|
|» lastName|body|string \| null|false|none|
|» primaryContactNumber|body|string \| null|false|The main contact number for the user<br>|
|» secondaryContactNumber|body|string \| null|false|The secondary contact number for the user<br>|
|» smsNumber|body|string \| null|false|The phone number of a device that the user can receive sms messages on<br>|

> Example responses

> 400 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 400
}
```

> 401 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 401
}
```

> 403 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 403
}
```

> 409 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 409
}
```

<h3 id="update-user-details-for-self-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|request completed okay|None|
|400|Bad Request|Invalid request. See Error message payload for details of failure|[inline_response_400](#schemainline_response_400)|
|401|Unauthorized|Invalid access token. May be expired or invalid|[inline_response_401](#schemainline_response_401)|
|403|Forbidden|The authentication does not have permissions to access the resource<br>This usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions<br>|[inline_response_403](#schemainline_response_403)|
|409|Conflict|The request contained data that would result in a duplicate value<br>|[inline_response_409](#schemainline_response_409)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Get User

<a id="opIdgetUserByIdV2"></a>

> Code samples

```bash
curl https://example.com/v2/users/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/users/{userId}`

Get a Single User by Id.


<h3 id="get-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string(uuid)|true|The UUID of the User.|

> Example responses

> 200 Response

```json
{
  "companyName": "Acme Corp",
  "email": "foo@example.com",
  "entityId": "7fffa261-ac68-49e6-b605-d24a444d9206",
  "firstName": "John",
  "id": "8bbf301c-948f-4445-b411-357eec53e441",
  "lastName": "Doe",
  "lockedOut": true,
  "lockedOutTimestamp": "2000-01-23T04:56:07.000+00:00",
  "mfaStatus": "REGISTERED",
  "mfaType": "TOTP",
  "primaryContactNumber": "11235555555",
  "roles": [
    "payor.admin"
  ],
  "secondaryContactNumber": "11235555550",
  "smsNumber": "11235555555",
  "status": "ENABLED",
  "userType": "PAYOR"
}
```

> 401 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 401
}
```

> 403 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 403
}
```

> 404 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 404
}
```

<h3 id="get-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Get User Details|[UserResponse](#schemauserresponse)|
|401|Unauthorized|Invalid access token. May be expired or invalid|[inline_response_401](#schemainline_response_401)|
|403|Forbidden|The authentication does not have permissions to access the resource<br>This usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions<br>|[inline_response_403](#schemainline_response_403)|
|404|Not Found|The resource was not found or is no longer available<br>|[inline_response_404](#schemainline_response_404)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Delete a User

<a id="opIddeleteUserByIdV2"></a>

> Code samples

```bash
curl https://example.com/v2/users/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v2/users/{userId}`

Delete User by Id.


<h3 id="delete-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string(uuid)|true|The UUID of the User.|

> Example responses

> 401 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 401
}
```

> 403 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 403
}
```

> 404 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 404
}
```

<h3 id="delete-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|request completed okay|None|
|401|Unauthorized|Invalid access token. May be expired or invalid|[inline_response_401](#schemainline_response_401)|
|403|Forbidden|The authentication does not have permissions to access the resource<br>This usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions<br>|[inline_response_403](#schemainline_response_403)|
|404|Not Found|The resource was not found or is no longer available<br>|[inline_response_404](#schemainline_response_404)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Disable a User

<a id="opIddisableUserV2"></a>

> Code samples

```bash
curl https://example.com/v2/users/497f6eca-6276-4993-bfeb-53cbbbba6f08/disable \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v2/users/{userId}/disable`

<p>If a user is enabled this endpoint will disable them </p>
<p>The invoker must have the appropriate permission </p>
<p>A user cannot disable themself </p>
<p>When a user is disabled any active access tokens will be revoked and the user will not be able to log in</p>


<h3 id="disable-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string(uuid)|true|The UUID of the User.|

> Example responses

> 400 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 400
}
```

> 401 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 401
}
```

> 403 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 403
}
```

> 404 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 404
}
```

<h3 id="disable-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success the user was disabled or was already disabled|None|
|400|Bad Request|Invalid request. See Error message payload for details of failure|[inline_response_400](#schemainline_response_400)|
|401|Unauthorized|Invalid access token. May be expired or invalid|[inline_response_401](#schemainline_response_401)|
|403|Forbidden|The authentication does not have permissions to access the resource<br>This usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions<br>|[inline_response_403](#schemainline_response_403)|
|404|Not Found|The resource was not found or is no longer available<br>|[inline_response_404](#schemainline_response_404)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Enable a User

<a id="opIdenableUserV2"></a>

> Code samples

```bash
curl https://example.com/v2/users/497f6eca-6276-4993-bfeb-53cbbbba6f08/enable \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v2/users/{userId}/enable`

<p>If a user has been disabled this endpoints will enable them </p>
<p>The invoker must have the appropriate permission </p>
<p>A user cannot enable themself </p>
<p>If the user is a payor user and the payor is disabled this operation is not allowed</p>
<p>If enabling a payor user would breach the limit for master admin payor users the request will be rejected </p>


<h3 id="enable-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string(uuid)|true|The UUID of the User.|

> Example responses

> 400 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 400
}
```

> 401 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 401
}
```

> 403 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 403
}
```

> 404 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 404
}
```

<h3 id="enable-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success the user was enabled or was already enabled|None|
|400|Bad Request|Invalid request. See Error message payload for details of failure|[inline_response_400](#schemainline_response_400)|
|401|Unauthorized|Invalid access token. May be expired or invalid|[inline_response_401](#schemainline_response_401)|
|403|Forbidden|The authentication does not have permissions to access the resource<br>This usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions<br>|[inline_response_403](#schemainline_response_403)|
|404|Not Found|The resource was not found or is no longer available<br>|[inline_response_404](#schemainline_response_404)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Unregister MFA for the user

<a id="opIdunregisterMFA"></a>

> Code samples

```bash
curl https://example.com/v2/users/497f6eca-6276-4993-bfeb-53cbbbba6f08/mfa/unregister \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "mfaType": "TOTP",
    "verificationCode": "123456"
  }'
```

`POST /v2/users/{userId}/mfa/unregister`

<p>Unregister the MFA device for the user </p>
<p>If the user does not require further verification then a register new MFA device token will be sent to them via their email address</p>


> Body parameter

```json
{
  "mfaType": "TOTP",
  "verificationCode": "123456"
}
```

<h3 id="unregister-mfa-for-the-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string(uuid)|true|The UUID of the User.|
|body|body|[UnregisterMFARequest](#schemaunregistermfarequest)|true|The MFA Type to unregister|
|» mfaType|body|string|true|The type of the MFA device|
|» verificationCode|body|string \| null|false|<p>Optional property that MUST be suppied when manually verifying a user</p><br><p>The user's smsNumber is registered via a separate endpoint and an OTP sent to them</p><br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» mfaType|YUBIKEY|
|» mfaType|TOTP|

> Example responses

> 400 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 400
}
```

> 401 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 401
}
```

> 403 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 403
}
```

> 404 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 404
}
```

<h3 id="unregister-mfa-for-the-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|the MFA Type to unregister|None|
|400|Bad Request|Invalid request. See Error message payload for details of failure|[inline_response_400](#schemainline_response_400)|
|401|Unauthorized|Invalid access token. May be expired or invalid|[inline_response_401](#schemainline_response_401)|
|403|Forbidden|The authentication does not have permissions to access the resource<br>This usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions<br>|[inline_response_403](#schemainline_response_403)|
|404|Not Found|The resource was not found or is no longer available<br>|[inline_response_404](#schemainline_response_404)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Update User Role

<a id="opIdroleUpdate"></a>

> Code samples

```bash
curl https://example.com/v2/users/497f6eca-6276-4993-bfeb-53cbbbba6f08/roleUpdate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "roles": [
      "payor.admin"
    ],
    "verificationCode": "123456"
  }'
```

`POST /v2/users/{userId}/roleUpdate`

<p>Update the user's Role</p>


> Body parameter

```json
{
  "roles": [
    "payor.admin"
  ],
  "verificationCode": "123456"
}
```

<h3 id="update-user-role-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string(uuid)|true|The UUID of the User.|
|body|body|[RoleUpdateRequest](#schemaroleupdaterequest)|true|The Role to change to|
|» roles|body|[string]|true|<p>The role(s) for the user</p><br><p>The role must exist</p><br><p>The role can be a custom role or a system role but the invoker must have the permissions to assign the role</p><br><p>System roles are: backoffice.admin, payor.master_admin, payor.admin, payor.support</p><br>|
|» verificationCode|body|string \| null|false|<p>Optional property that MUST be suppied when manually verifying a user</p><br><p>The user's smsNumber is registered via a separate endpoint and an OTP sent to them</p><br>|

> Example responses

> 400 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 400
}
```

> 401 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 401
}
```

> 403 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 403
}
```

> 404 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 404
}
```

<h3 id="update-user-role-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|request completed okay|None|
|400|Bad Request|Invalid request. See Error message payload for details of failure|[inline_response_400](#schemainline_response_400)|
|401|Unauthorized|Invalid access token. May be expired or invalid|[inline_response_401](#schemainline_response_401)|
|403|Forbidden|The authentication does not have permissions to access the resource<br>This usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions<br>|[inline_response_403](#schemainline_response_403)|
|404|Not Found|The resource was not found or is no longer available<br>|[inline_response_404](#schemainline_response_404)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Unlock a User

<a id="opIdunlockUserV2"></a>

> Code samples

```bash
curl https://example.com/v2/users/497f6eca-6276-4993-bfeb-53cbbbba6f08/unlock \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v2/users/{userId}/unlock`

If a user is locked this endpoint will unlock them


<h3 id="unlock-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string(uuid)|true|The UUID of the User.|

> Example responses

> 400 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 400
}
```

> 401 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 401
}
```

> 403 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 403
}
```

> 404 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 404
}
```

<h3 id="unlock-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success the user was unlocked or was already unlocked|None|
|400|Bad Request|Invalid request. See Error message payload for details of failure|[inline_response_400](#schemainline_response_400)|
|401|Unauthorized|Invalid access token. May be expired or invalid|[inline_response_401](#schemainline_response_401)|
|403|Forbidden|The authentication does not have permissions to access the resource<br>This usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions<br>|[inline_response_403](#schemainline_response_403)|
|404|Not Found|The resource was not found or is no longer available<br>|[inline_response_404](#schemainline_response_404)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Update User Details

<a id="opIduserDetailsUpdate"></a>

> Code samples

```bash
curl https://example.com/v2/users/497f6eca-6276-4993-bfeb-53cbbbba6f08/userDetailsUpdate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "email": "foo@example.com",
    "firstName": "John",
    "lastName": "Doe",
    "mfaType": "TOTP",
    "primaryContactNumber": "11235555555",
    "secondaryContactNumber": "11235555550",
    "smsNumber": "11235555555",
    "verificationCode": "123456"
  }'
```

`POST /v2/users/{userId}/userDetailsUpdate`

<p>Update the profile details for the given user</p>
<p>When updating Payor users with the role of payor.master_admin a verificationCode is required</p>


> Body parameter

```json
{
  "email": "foo@example.com",
  "firstName": "John",
  "lastName": "Doe",
  "mfaType": "TOTP",
  "primaryContactNumber": "11235555555",
  "secondaryContactNumber": "11235555550",
  "smsNumber": "11235555555",
  "verificationCode": "123456"
}
```

<h3 id="update-user-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string(uuid)|true|The UUID of the User.|
|body|body|[UserDetailsUpdateRequest](#schemauserdetailsupdaterequest)|true|The details of the user to update|
|» email|body|string(email) \| null|false|the email address of the user|
|» firstName|body|string \| null|false|none|
|» lastName|body|string \| null|false|none|
|» mfaType|body|[MFAType](#schemamfatype)|false|The type of the MFA device|
|» primaryContactNumber|body|string \| null|false|The main contact number for the user<br>|
|» secondaryContactNumber|body|string \| null|false|The secondary contact number for the user<br>|
|» smsNumber|body|string \| null|false|The phone number of a device that the user can receive sms messages on<br>|
|» verificationCode|body|string \| null|false|<p>Optional property that MUST be suppied when manually verifying a user</p><br><p>The user's smsNumber is registered via a separate endpoint and an OTP sent to them</p><br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» mfaType|SMS|
|» mfaType|YUBIKEY|
|» mfaType|TOTP|

> Example responses

> 400 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 400
}
```

> 401 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 401
}
```

> 403 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 403
}
```

> 404 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 404
}
```

> 409 Response

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 409
}
```

<h3 id="update-user-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|request completed okay|None|
|400|Bad Request|Invalid request. See Error message payload for details of failure|[inline_response_400](#schemainline_response_400)|
|401|Unauthorized|Invalid access token. May be expired or invalid|[inline_response_401](#schemainline_response_401)|
|403|Forbidden|The authentication does not have permissions to access the resource<br>This usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions<br>|[inline_response_403](#schemainline_response_403)|
|404|Not Found|The resource was not found or is no longer available<br>|[inline_response_404](#schemainline_response_404)|
|409|Conflict|The request contained data that would result in a duplicate value<br>|[inline_response_409](#schemainline_response_409)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

# Schemas

<h2 id="tocS_AcceptedPaymentV3">AcceptedPaymentV3</h2>
<!-- backwards compatibility -->
<a id="schemaacceptedpaymentv3"></a>
<a id="schema_AcceptedPaymentV3"></a>
<a id="tocSacceptedpaymentv3"></a>
<a id="tocsacceptedpaymentv3"></a>

```json
{
  "amount": 10000,
  "currencyType": "USD",
  "paymentMemo": "INV00112",
  "paymentMetadata": "invoiceeId_123|abc001:12345|xyz002:4567",
  "payorPaymentId": "123211321ABSD",
  "railsId": "SVB",
  "remoteId": "remoteId1234",
  "remoteSystemId": "OB012",
  "sourceAccountName": "Chase Bank Account"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|integer|true|none|The amount of the payment in minor units|
|currencyType|string|true|none|Valid ISO 4217 3 letter currency code. See the <a href="https://www.iso.org/iso-4217-currency-codes.html" target="_blank" a>ISO specification</a> for details.|
|paymentMemo|string|false|none|<p>Any value here will override the memo value in the parent payout</p><br><p>This should be the reference field on the statement seen by the payee (but not via ACH)</p><br>|
|paymentMetadata|string|false|none|<p>Metadata about the payment that may be relevant to the specific rails or remote system making the payout</p><br><p>The structure of the data will be dictated by the requirements of the payment rails</p><br>|
|payorPaymentId|string|true|none|A reference identifier for the payor for the given payee payment|
|railsId|string|true|none|Indicates the 3rd party system involved in making this payment|
|remoteId|string|true|none|Your identifier for the payee|
|remoteSystemId|string|false|none|<p>The identifier for the remote payments system if not Velo</p><br>|
|sourceAccountName|string|true|none|The identifier of the source account to debit the payment from|

<h2 id="tocS_AccessTokenResponse">AccessTokenResponse</h2>
<!-- backwards compatibility -->
<a id="schemaaccesstokenresponse"></a>
<a id="schema_AccessTokenResponse"></a>
<a id="tocSaccesstokenresponse"></a>
<a id="tocsaccesstokenresponse"></a>

```json
{
  "access_token": "9b58410b-e1b7-4f90-bebb-7e09c5427020",
  "entityIds": [
    "ed89eaa0-4450-4916-a4ff-62a328d60bd6"
  ],
  "expires_in": 1800,
  "refresh_token": "c3d0f771-0997-4814-84e3-09690208545a",
  "scope": "https://api.velopayments.com/scopes/auth/users",
  "token_type": "bearer",
  "user_info": {
    "mfa_details": {
      "mfa_type": "TOTP",
      "verified": true
    },
    "userType": "PAYOR",
    "user_id": "39976ee5-dc4c-4b21-a966-a04fa71ef9e1"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|access_token|string|false|none|Bearer token used in headers to access secure endpoints<br>|
|entityIds|[string]|false|none|If the user is a payee then the payeeId<P><br>If the user is a payor then the payorId<br>|
|expires_in|integer|false|none|The lifetime in seconds of the access token|
|refresh_token|string|false|none|can be used to obtain a new access token|
|scope|string|false|none|the scope of the access token|
|token_type|string|false|none|the type of the token|
|user_info|[UserInfo](#schemauserinfo)|false|none|none|

<h2 id="tocS_AccessTokenValidationRequest">AccessTokenValidationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaccesstokenvalidationrequest"></a>
<a id="schema_AccessTokenValidationRequest"></a>
<a id="tocSaccesstokenvalidationrequest"></a>
<a id="tocsaccesstokenvalidationrequest"></a>

```json
{
  "otp": "123456"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|otp|string|true|none|an OTP either sent via sms or generated by a registered MFA device|

<h2 id="tocS_AllocationType">AllocationType</h2>
<!-- backwards compatibility -->
<a id="schemaallocationtype"></a>
<a id="schema_AllocationType"></a>
<a id="tocSallocationtype"></a>
<a id="tocsallocationtype"></a>

```json
"string"
```

Funding Allocation Type. One of the following values: AUTOMATIC, MANUAL

<h2 id="tocS_AuthResponse">AuthResponse</h2>
<!-- backwards compatibility -->
<a id="schemaauthresponse"></a>
<a id="schema_AuthResponse"></a>
<a id="tocSauthresponse"></a>
<a id="tocsauthresponse"></a>

```json
{
  "access_token": "IwOGYzYTlmM2YxOTQ5MGE3YmNmMDFkNTVk",
  "entityIds": [
    "entityIds",
    "entityIds"
  ],
  "expires_in": 1799,
  "refresh_token": "IwOGYzYTlmM2YxOTQ5MGE3YmNmMDFkNTVk",
  "scope": "example_scope",
  "token_type": "bearer"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|access_token|string|true|none|none|
|entityIds|[string]|false|none|none|
|expires_in|number|false|none|none|
|refresh_token|string|false|none|none|
|scope|string|false|none|none|
|token_type|string|true|none|none|

<h2 id="tocS_AutoTopUpConfigV2">AutoTopUpConfigV2</h2>
<!-- backwards compatibility -->
<a id="schemaautotopupconfigv2"></a>
<a id="schema_AutoTopUpConfigV2"></a>
<a id="tocSautotopupconfigv2"></a>
<a id="tocsautotopupconfigv2"></a>

```json
{
  "enabled": true,
  "minBalance": 10000,
  "targetBalance": 300000
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|true|none|Is auto top-up enabled? automatically trigger funding to top-up the source account balance when the balance falls below the configured minimum level.|
|minBalance|integer(int64) \| null|false|none|When the payor balance falls below this level then auto top-up will be triggered. Note - This is in minor units.|
|targetBalance|integer(int64) \| null|false|none|When the payor balance falls below the min balance then auto top-up will request funds bring the balance to this level. Note - this is in minor units.|

<h2 id="tocS_AutoTopUpConfigV3">AutoTopUpConfigV3</h2>
<!-- backwards compatibility -->
<a id="schemaautotopupconfigv3"></a>
<a id="schema_AutoTopUpConfigV3"></a>
<a id="tocSautotopupconfigv3"></a>
<a id="tocsautotopupconfigv3"></a>

```json
{
  "enabled": true,
  "fundingAccountId": "640ab1bd-8a6a-4603-a83a-1edbc3ed5689",
  "minBalance": 10000,
  "targetBalance": 300000
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|true|none|Is auto top-up enabled? automatically trigger funding to top-up the source account balance when the balance falls below the configured minimum level.|
|fundingAccountId|string(uuid)|false|none|Id of funding account from which to pull funds when auto top-up is triggered.  Note - if this is not set then auto top-up is effectively disabled.|
|minBalance|integer(int64) \| null|false|none|When the payor balance falls below this level then auto top-up will be triggered. Note - This is in minor units.|
|targetBalance|integer(int64) \| null|false|none|When the payor balance falls below the min balance then auto top-up will request funds bring the balance to this level. Note - this is in minor units.|

<h2 id="tocS_Category">Category</h2>
<!-- backwards compatibility -->
<a id="schemacategory"></a>
<a id="schema_Category"></a>
<a id="tocScategory"></a>
<a id="tocscategory"></a>

```json
"payment"
```

The notification category.  One of "payment", "payee", "debit".

<h2 id="tocS_ChallengeV3">ChallengeV3</h2>
<!-- backwards compatibility -->
<a id="schemachallengev3"></a>
<a id="schema_ChallengeV3"></a>
<a id="tocSchallengev3"></a>
<a id="tocschallengev3"></a>

```json
{
  "description": "challenge description",
  "value": "challenge test"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|true|none|none|
|value|string|true|none|none|

<h2 id="tocS_ChallengeV4">ChallengeV4</h2>
<!-- backwards compatibility -->
<a id="schemachallengev4"></a>
<a id="schema_ChallengeV4"></a>
<a id="tocSchallengev4"></a>
<a id="tocschallengev4"></a>

```json
{
  "description": "challenge description",
  "value": "11984567"
}
```

<p>Used to override the default challenge presented to the payee when they onboard</p>
<p>Not used after the payee has onboarded</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|true|none|none|
|value|string|true|none|The value that the user will be asked to verify when they onboard|

<h2 id="tocS_CompanyV3">CompanyV3</h2>
<!-- backwards compatibility -->
<a id="schemacompanyv3"></a>
<a id="schema_CompanyV3"></a>
<a id="tocScompanyv3"></a>
<a id="tocscompanyv3"></a>

```json
{
  "name": "ABC Group Plc",
  "operatingName": "ABC Co",
  "taxId": "123123123"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|operatingName|string \| null|false|none|none|
|taxId|string \| null|false|none|Company Tax Id must be between 6 and 30 characters long|

<h2 id="tocS_CompanyV4">CompanyV4</h2>
<!-- backwards compatibility -->
<a id="schemacompanyv4"></a>
<a id="schema_CompanyV4"></a>
<a id="tocScompanyv4"></a>
<a id="tocscompanyv4"></a>

```json
{
  "name": "ABC Group Plc",
  "operatingName": "ABC Co",
  "taxId": "123123123"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|operatingName|string \| null|false|none|none|
|taxId|string \| null|false|none|Company Tax Id must be between 6 and 30 characters long|

<h2 id="tocS_CreateFundingAccountRequestV2">CreateFundingAccountRequestV2</h2>
<!-- backwards compatibility -->
<a id="schemacreatefundingaccountrequestv2"></a>
<a id="schema_CreateFundingAccountRequestV2"></a>
<a id="tocScreatefundingaccountrequestv2"></a>
<a id="tocscreatefundingaccountrequestv2"></a>

```json
{
  "accountName": "accountName",
  "accountNumber": "accountNumber",
  "currency": "USD",
  "name": "name",
  "payorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "routingNumber": "routingNumber",
  "type": "FBO"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountName|string|false|none|Required if type is either FBO or PRIVATE|
|accountNumber|string|false|none|Required if type is either FBO or PRIVATE|
|currency|string|false|none|ISO 4217 currency code, Required if type is either WUBS_DECOUPLED or PRIVATE|
|name|string|true|none|none|
|payorId|string(uuid)|true|none|none|
|routingNumber|string|false|none|Required if type is either FBO or PRIVATE|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|FBO|
|type|WUBS_DECOUPLED|
|type|PRIVATE|

<h2 id="tocS_CreateIndividualV3">CreateIndividualV3</h2>
<!-- backwards compatibility -->
<a id="schemacreateindividualv3"></a>
<a id="schema_CreateIndividualV3"></a>
<a id="tocScreateindividualv3"></a>
<a id="tocscreateindividualv3"></a>

```json
{
  "dateOfBirth": "1970-05-20T00:00:00.000+0000",
  "name": {
    "firstName": "Bob",
    "lastName": "Smith",
    "otherNames": "H",
    "title": "Mr"
  },
  "nationalIdentification": "SA211123K"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dateOfBirth|string(date)|true|none|Must not be date in future. Example - 1970-05-20|
|name|[CreateIndividualV3_name](#schemacreateindividualv3_name)|true|none|none|
|nationalIdentification|string|false|none|none|

<h2 id="tocS_CreateIndividualV3_name">CreateIndividualV3_name</h2>
<!-- backwards compatibility -->
<a id="schemacreateindividualv3_name"></a>
<a id="schema_CreateIndividualV3_name"></a>
<a id="tocScreateindividualv3_name"></a>
<a id="tocscreateindividualv3_name"></a>

```json
{
  "firstName": "Bob",
  "lastName": "Smith",
  "otherNames": "H",
  "title": "Mr"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|firstName|string|true|none|none|
|lastName|string|true|none|none|
|otherNames|string|false|none|none|
|title|string|false|none|none|

<h2 id="tocS_CreateIndividualV4">CreateIndividualV4</h2>
<!-- backwards compatibility -->
<a id="schemacreateindividualv4"></a>
<a id="schema_CreateIndividualV4"></a>
<a id="tocScreateindividualv4"></a>
<a id="tocscreateindividualv4"></a>

```json
{
  "dateOfBirth": "1970-05-20T00:00:00.000+0000",
  "name": {
    "firstName": "Bob",
    "lastName": "Smith",
    "otherNames": "H",
    "title": "Mr"
  },
  "nationalIdentification": "SA211123K"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dateOfBirth|string(date)|true|none|Must not be date in future. Example - 1970-05-20|
|name|[CreateIndividualV3_name](#schemacreateindividualv3_name)|true|none|none|
|nationalIdentification|string|false|none|none|

<h2 id="tocS_CreatePayeeAddressV3">CreatePayeeAddressV3</h2>
<!-- backwards compatibility -->
<a id="schemacreatepayeeaddressv3"></a>
<a id="schema_CreatePayeeAddressV3"></a>
<a id="tocScreatepayeeaddressv3"></a>
<a id="tocscreatepayeeaddressv3"></a>

```json
{
  "city": "Key West",
  "country": "US",
  "countyOrProvince": "FL",
  "line1": "500 Duval St",
  "line2": "line2",
  "line3": "line3",
  "line4": "line4",
  "zipOrPostcode": "33945"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|city|string|true|none|none|
|country|string|true|none|2 letter ISO 3166-1 country code|
|countyOrProvince|string \| null|false|none|none|
|line1|string|true|none|none|
|line2|string \| null|false|none|none|
|line3|string \| null|false|none|none|
|line4|string \| null|false|none|none|
|zipOrPostcode|string \| null|false|none|none|

<h2 id="tocS_CreatePayeeAddressV4">CreatePayeeAddressV4</h2>
<!-- backwards compatibility -->
<a id="schemacreatepayeeaddressv4"></a>
<a id="schema_CreatePayeeAddressV4"></a>
<a id="tocScreatepayeeaddressv4"></a>
<a id="tocscreatepayeeaddressv4"></a>

```json
{
  "city": "Key West",
  "country": "US",
  "countyOrProvince": "FL",
  "line1": "500 Duval St",
  "line2": "line2",
  "line3": "line3",
  "line4": "line4",
  "zipOrPostcode": "33945"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|city|string|true|none|none|
|country|string|true|none|Valid ISO 3166 2 character country code. See the <a href="https://www.iso.org/iso-3166-country-codes.html" target="_blank" a>ISO specification</a> for details.|
|countyOrProvince|string \| null|false|none|none|
|line1|string|true|none|none|
|line2|string \| null|false|none|none|
|line3|string \| null|false|none|none|
|line4|string \| null|false|none|none|
|zipOrPostcode|string \| null|false|none|none|

<h2 id="tocS_CreatePayeeV3">CreatePayeeV3</h2>
<!-- backwards compatibility -->
<a id="schemacreatepayeev3"></a>
<a id="schema_CreatePayeeV3"></a>
<a id="tocScreatepayeev3"></a>
<a id="tocscreatepayeev3"></a>

```json
{
  "address": {
    "city": "Key West",
    "country": "US",
    "countyOrProvince": "FL",
    "line1": "500 Duval St",
    "line2": "line2",
    "line3": "line3",
    "line4": "line4",
    "zipOrPostcode": "33945"
  },
  "challenge": {
    "description": "challenge description",
    "value": "challenge test"
  },
  "company": {
    "name": "ABC Group Plc",
    "operatingName": "ABC Co",
    "taxId": "123123123"
  },
  "email": "bob@example.com",
  "individual": {
    "dateOfBirth": "1970-05-20T00:00:00.000+0000",
    "name": {
      "firstName": "Bob",
      "lastName": "Smith",
      "otherNames": "H",
      "title": "Mr"
    },
    "nationalIdentification": "SA211123K"
  },
  "language": "en-US",
  "payeeId": "2aa5d7e0-2ecb-403f-8494-1865ed0454e9",
  "paymentChannel": {
    "accountName": "My account",
    "accountNumber": "XXXXXX5678",
    "countryCode": "US",
    "currency": "USD",
    "iban": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX1234",
    "paymentChannelName": "My Payment Channel",
    "routingNumber": "XXXXX6789"
  },
  "payorRefs": [
    {
      "invitationStatus": "invitationStatus",
      "invitationStatusTimestamp": "2019-01-20T09:00:00Z",
      "payableIssues": [
        {
          "code": "3",
          "message": "payee-disabled"
        },
        {
          "code": "3",
          "message": "payee-disabled"
        }
      ],
      "payableStatus": true,
      "paymentChannelId": "70faaff7-2c32-4b44-b27f-f0b6c484e6f3",
      "payorId": "ba08877f-9d96-41e4-9c26-44a872d856ae",
      "remoteId": "uniqueIdForRemoteEntity"
    },
    {
      "invitationStatus": "invitationStatus",
      "invitationStatusTimestamp": "2019-01-20T09:00:00Z",
      "payableIssues": [
        {
          "code": "3",
          "message": "payee-disabled"
        },
        {
          "code": "3",
          "message": "payee-disabled"
        }
      ],
      "payableStatus": true,
      "paymentChannelId": "70faaff7-2c32-4b44-b27f-f0b6c484e6f3",
      "payorId": "ba08877f-9d96-41e4-9c26-44a872d856ae",
      "remoteId": "uniqueIdForRemoteEntity"
    }
  ],
  "remoteId": "Remote ID",
  "type": "type"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|[CreatePayeeAddressV3](#schemacreatepayeeaddressv3)|true|none|none|
|challenge|[ChallengeV3](#schemachallengev3)|false|none|none|
|company|[CompanyV3](#schemacompanyv3)|false|none|none|
|email|string(email)|true|none|none|
|individual|[CreateIndividualV3](#schemacreateindividualv3)|false|none|none|
|language|string|false|none|An IETF BCP 47 language code which has been configured for use within this Velo environment.<BR><br>See the /v1/supportedLanguages endpoint to list the available codes for an environment.<br>|
|payeeId|string(uuid)|false|read-only|none|
|paymentChannel|[CreatePaymentChannelV3](#schemacreatepaymentchannelv3)|false|none|none|
|payorRefs|[[PayeePayorRefV3](#schemapayeepayorrefv3)]|false|read-only|none|
|remoteId|string|true|none|none|
|type|string|true|none|Type of Payee. One of the following values: Individual, Company|

<h2 id="tocS_CreatePayeeV4">CreatePayeeV4</h2>
<!-- backwards compatibility -->
<a id="schemacreatepayeev4"></a>
<a id="schema_CreatePayeeV4"></a>
<a id="tocScreatepayeev4"></a>
<a id="tocscreatepayeev4"></a>

```json
{
  "address": {
    "city": "Key West",
    "country": "US",
    "countyOrProvince": "FL",
    "line1": "500 Duval St",
    "line2": "line2",
    "line3": "line3",
    "line4": "line4",
    "zipOrPostcode": "33945"
  },
  "challenge": {
    "description": "challenge description",
    "value": "11984567"
  },
  "company": {
    "name": "ABC Group Plc",
    "operatingName": "ABC Co",
    "taxId": "123123123"
  },
  "email": "bob@example.com",
  "individual": {
    "dateOfBirth": "1970-05-20T00:00:00.000+0000",
    "name": {
      "firstName": "Bob",
      "lastName": "Smith",
      "otherNames": "H",
      "title": "Mr"
    },
    "nationalIdentification": "SA211123K"
  },
  "language": "en-US",
  "paymentChannel": {
    "accountName": "My account",
    "accountNumber": "XXXXXX5678",
    "countryCode": "US",
    "currency": "USD",
    "iban": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX1234",
    "paymentChannelName": "My Payment Channel",
    "routingNumber": "XXXXX6789"
  },
  "remoteId": "Remote ID"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|[CreatePayeeAddressV4](#schemacreatepayeeaddressv4)|true|none|none|
|challenge|[ChallengeV4](#schemachallengev4)|false|none|<p>Used to override the default challenge presented to the payee when they onboard</p><br><p>Not used after the payee has onboarded</p><br>|
|company|[CompanyV4](#schemacompanyv4)|false|none|none|
|email|string(email)|true|none|none|
|individual|[CreateIndividualV4](#schemacreateindividualv4)|false|none|none|
|language|string|false|none|An IETF BCP 47 language code which has been configured for use within this Velo environment.<BR><br>See the /v1/supportedLanguages endpoint to list the available codes for an environment.<br>|
|paymentChannel|[CreatePaymentChannelV4](#schemacreatepaymentchannelv4)|false|none|none|
|remoteId|string|true|none|none|
|type|[PayeeTypeEnum](#schemapayeetypeenum)|true|none|The type of the payee|

#### Enumerated Values

|Property|Value|
|---|---|
|type|Individual|
|type|Company|

<h2 id="tocS_CreatePayeesCSVRequestV3">CreatePayeesCSVRequestV3</h2>
<!-- backwards compatibility -->
<a id="schemacreatepayeescsvrequestv3"></a>
<a id="schema_CreatePayeesCSVRequestV3"></a>
<a id="tocScreatepayeescsvrequestv3"></a>
<a id="tocscreatepayeescsvrequestv3"></a>

```json
{
  "addressCity": "Key West",
  "addressCountry": "US",
  "addressCountyOrProvince": "FL",
  "addressLine1": "500 Duval St",
  "addressLine2": "string",
  "addressLine3": "string",
  "addressLine4": "string",
  "addressZipOrPostcode": "33945",
  "challengeDescription": "challenge description",
  "challengeValue": "challenge value",
  "companyEIN": "123456789",
  "companyName": "ABC Ltd",
  "companyOperatingName": "ABC",
  "email": "bob@example.com",
  "individualDateOfBirth": "1985-01-01",
  "individualFirstName": "string",
  "individualLastName": "Smith",
  "individualNationalIdentification": "AB123456C",
  "individualOtherNames": "Bob",
  "individualTitle": "Mr",
  "payeeLanguage": "en-US",
  "paymentChannelAccountName": "My Account",
  "paymentChannelAccountNumber": "XXXXXX5678",
  "paymentChannelCountryCode": "US",
  "paymentChannelCurrency": "USD",
  "paymentChannelIban": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX1234",
  "paymentChannelRoutingNumber": "XXXXX6789",
  "remoteId": "remoteId123",
  "type": "Individual"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addressCity|string|true|none|none|
|addressCountry|string|true|none|Valid ISO 3166 2 character country code. See the <a href="https://www.iso.org/iso-3166-country-codes.html" target="_blank" a>ISO specification</a> for details.|
|addressCountyOrProvince|string|false|none|none|
|addressLine1|string|true|none|none|
|addressLine2|string|false|none|none|
|addressLine3|string|false|none|none|
|addressLine4|string|false|none|none|
|addressZipOrPostcode|string|true|none|none|
|challengeDescription|string|false|none|none|
|challengeValue|string|false|none|none|
|companyEIN|string|false|none|none|
|companyName|string|false|none|none|
|companyOperatingName|string|false|none|none|
|email|string(email)|true|none|none|
|individualDateOfBirth|string(date)|false|none|Must not be date in future. Example - 1970-05-20|
|individualFirstName|string|false|none|none|
|individualLastName|string|false|none|none|
|individualNationalIdentification|string|false|none|none|
|individualOtherNames|string|false|none|none|
|individualTitle|string|false|none|none|
|payeeLanguage|string|false|none|An IETF BCP 47 language code which has been configured for use within this Velo environment.<BR><br>See the /v1/supportedLanguages endpoint to list the available codes for an environment.<br>|
|paymentChannelAccountName|string|false|none|none|
|paymentChannelAccountNumber|string|false|none|Either routing number and account number or only iban must be set|
|paymentChannelCountryCode|string|false|none|Valid ISO 3166 2 character country code. See the <a href="https://www.iso.org/iso-3166-country-codes.html" target="_blank" a>ISO specification</a> for details.|
|paymentChannelCurrency|string|false|none|none|
|paymentChannelIban|string|false|none|Must match the regular expression ```^[A-Za-z0-9]+$```.|
|paymentChannelRoutingNumber|string|false|none|Either routing number and account number or only iban must be set|
|remoteId|string|true|none|none|
|type|[PayeeTypeEnum](#schemapayeetypeenum)|true|none|The type of the payee|

#### Enumerated Values

|Property|Value|
|---|---|
|type|Individual|
|type|Company|

<h2 id="tocS_CreatePayeesCSVRequestV4">CreatePayeesCSVRequestV4</h2>
<!-- backwards compatibility -->
<a id="schemacreatepayeescsvrequestv4"></a>
<a id="schema_CreatePayeesCSVRequestV4"></a>
<a id="tocScreatepayeescsvrequestv4"></a>
<a id="tocscreatepayeescsvrequestv4"></a>

```json
{
  "addressCity": "Key West",
  "addressCountry": "US",
  "addressCountyOrProvince": "FL",
  "addressLine1": "500 Duval St",
  "addressLine2": "string",
  "addressLine3": "string",
  "addressLine4": "string",
  "addressZipOrPostcode": "33945",
  "challengeDescription": "challenge description",
  "challengeValue": "challenge value",
  "companyEIN": "123456789",
  "companyName": "ABC Ltd",
  "companyOperatingName": "ABC",
  "email": "bob@example.com",
  "individualDateOfBirth": "1985-01-01",
  "individualFirstName": "string",
  "individualLastName": "Smith",
  "individualNationalIdentification": "AB123456C",
  "individualOtherNames": "Bob",
  "individualTitle": "Mr",
  "payeeLanguage": "en-US",
  "paymentChannelAccountName": "My Account",
  "paymentChannelAccountNumber": "XXXXXX5678",
  "paymentChannelCountryCode": "US",
  "paymentChannelCurrency": "USD",
  "paymentChannelIban": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX1234",
  "paymentChannelRoutingNumber": "XXXXX6789",
  "remoteId": "remoteId123",
  "type": "Individual"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addressCity|string|true|none|none|
|addressCountry|string|true|none|Valid ISO 3166 2 character country code. See the <a href="https://www.iso.org/iso-3166-country-codes.html" target="_blank" a>ISO specification</a> for details.|
|addressCountyOrProvince|string|false|none|none|
|addressLine1|string|true|none|none|
|addressLine2|string|false|none|none|
|addressLine3|string|false|none|none|
|addressLine4|string|false|none|none|
|addressZipOrPostcode|string|true|none|none|
|challengeDescription|string|false|none|none|
|challengeValue|string|false|none|none|
|companyEIN|string|false|none|none|
|companyName|string|false|none|none|
|companyOperatingName|string|false|none|none|
|email|string(email)|true|none|none|
|individualDateOfBirth|string(date)|false|none|Must not be date in future. Example - 1970-05-20|
|individualFirstName|string|false|none|none|
|individualLastName|string|false|none|none|
|individualNationalIdentification|string|false|none|none|
|individualOtherNames|string|false|none|none|
|individualTitle|string|false|none|none|
|payeeLanguage|string|false|none|An IETF BCP 47 language code which has been configured for use within this Velo environment.<BR><br>See the /v1/supportedLanguages endpoint to list the available codes for an environment.<br>|
|paymentChannelAccountName|string|false|none|none|
|paymentChannelAccountNumber|string|false|none|Either routing number and account number or only iban must be set|
|paymentChannelCountryCode|string|false|none|Valid ISO 3166 2 character country code. See the <a href="https://www.iso.org/iso-3166-country-codes.html" target="_blank" a>ISO specification</a> for details.|
|paymentChannelCurrency|string|false|none|none|
|paymentChannelIban|string|false|none|Must match the regular expression ```^[A-Za-z0-9]+$```.|
|paymentChannelRoutingNumber|string|false|none|Either routing number and account number or only iban must be set|
|remoteId|string|true|none|none|
|type|[PayeeTypeEnum](#schemapayeetypeenum)|true|none|The type of the payee|

#### Enumerated Values

|Property|Value|
|---|---|
|type|Individual|
|type|Company|

<h2 id="tocS_CreatePayeesCSVResponseV3">CreatePayeesCSVResponseV3</h2>
<!-- backwards compatibility -->
<a id="schemacreatepayeescsvresponsev3"></a>
<a id="schema_CreatePayeesCSVResponseV3"></a>
<a id="tocScreatepayeescsvresponsev3"></a>
<a id="tocscreatepayeescsvresponsev3"></a>

```json
{
  "batchId": "cb6ff8c6-85e9-45a6-b7d9-d05305db67f3",
  "rejectedCsvRows": [
    {
      "lineNumber": 3,
      "message": "rejected message 1",
      "rejectedContent": "unable,to,process,csv,line"
    },
    {
      "lineNumber": 3,
      "message": "rejected message 1",
      "rejectedContent": "unable,to,process,csv,line"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|batchId|string(uuid)|false|none|none|
|rejectedCsvRows|[[CreatePayeesCSVResponseV3_rejectedCsvRows](#schemacreatepayeescsvresponsev3_rejectedcsvrows)]|false|none|none|

<h2 id="tocS_CreatePayeesCSVResponseV3_rejectedCsvRows">CreatePayeesCSVResponseV3_rejectedCsvRows</h2>
<!-- backwards compatibility -->
<a id="schemacreatepayeescsvresponsev3_rejectedcsvrows"></a>
<a id="schema_CreatePayeesCSVResponseV3_rejectedCsvRows"></a>
<a id="tocScreatepayeescsvresponsev3_rejectedcsvrows"></a>
<a id="tocscreatepayeescsvresponsev3_rejectedcsvrows"></a>

```json
{
  "lineNumber": 3,
  "message": "rejected message 1",
  "rejectedContent": "unable,to,process,csv,line"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lineNumber|integer|false|none|none|
|message|string|false|none|none|
|rejectedContent|string|false|none|none|

<h2 id="tocS_CreatePayeesCSVResponseV4">CreatePayeesCSVResponseV4</h2>
<!-- backwards compatibility -->
<a id="schemacreatepayeescsvresponsev4"></a>
<a id="schema_CreatePayeesCSVResponseV4"></a>
<a id="tocScreatepayeescsvresponsev4"></a>
<a id="tocscreatepayeescsvresponsev4"></a>

```json
{
  "batchId": "cb6ff8c6-85e9-45a6-b7d9-d05305db67f3",
  "rejectedCsvRows": [
    {
      "lineNumber": 3,
      "message": "rejected message 1",
      "rejectedContent": "unable,to,process,csv,line"
    },
    {
      "lineNumber": 3,
      "message": "rejected message 1",
      "rejectedContent": "unable,to,process,csv,line"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|batchId|string(uuid)|false|none|none|
|rejectedCsvRows|[[CreatePayeesCSVResponseV3_rejectedCsvRows](#schemacreatepayeescsvresponsev3_rejectedcsvrows)]|false|none|none|

<h2 id="tocS_CreatePayeesRequestV3">CreatePayeesRequestV3</h2>
<!-- backwards compatibility -->
<a id="schemacreatepayeesrequestv3"></a>
<a id="schema_CreatePayeesRequestV3"></a>
<a id="tocScreatepayeesrequestv3"></a>
<a id="tocscreatepayeesrequestv3"></a>

```json
{
  "payees": [
    {
      "address": {
        "city": "Key West",
        "country": "US",
        "countyOrProvince": "FL",
        "line1": "500 Duval St",
        "line2": "line2",
        "line3": "line3",
        "line4": "line4",
        "zipOrPostcode": "33945"
      },
      "challenge": {
        "description": "challenge description",
        "value": "challenge test"
      },
      "company": {
        "name": "ABC Group Plc",
        "operatingName": "ABC Co",
        "taxId": "123123123"
      },
      "email": "bob@example.com",
      "individual": {
        "dateOfBirth": "1970-05-20T00:00:00.000+0000",
        "name": {
          "firstName": "Bob",
          "lastName": "Smith",
          "otherNames": "H",
          "title": "Mr"
        },
        "nationalIdentification": "SA211123K"
      },
      "language": "en-US",
      "payeeId": "2aa5d7e0-2ecb-403f-8494-1865ed0454e9",
      "paymentChannel": {
        "accountName": "My account",
        "accountNumber": "XXXXXX5678",
        "countryCode": "US",
        "currency": "USD",
        "iban": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX1234",
        "paymentChannelName": "My Payment Channel",
        "routingNumber": "XXXXX6789"
      },
      "payorRefs": [
        {
          "invitationStatus": "invitationStatus",
          "invitationStatusTimestamp": "2019-01-20T09:00:00Z",
          "payableIssues": [
            {
              "code": "3",
              "message": "payee-disabled"
            },
            {
              "code": "3",
              "message": "payee-disabled"
            }
          ],
          "payableStatus": true,
          "paymentChannelId": "70faaff7-2c32-4b44-b27f-f0b6c484e6f3",
          "payorId": "ba08877f-9d96-41e4-9c26-44a872d856ae",
          "remoteId": "uniqueIdForRemoteEntity"
        },
        {
          "invitationStatus": "invitationStatus",
          "invitationStatusTimestamp": "2019-01-20T09:00:00Z",
          "payableIssues": [
            {
              "code": "3",
              "message": "payee-disabled"
            },
            {
              "code": "3",
              "message": "payee-disabled"
            }
          ],
          "payableStatus": true,
          "paymentChannelId": "70faaff7-2c32-4b44-b27f-f0b6c484e6f3",
          "payorId": "ba08877f-9d96-41e4-9c26-44a872d856ae",
          "remoteId": "uniqueIdForRemoteEntity"
        }
      ],
      "remoteId": "Remote ID",
      "type": "type"
    },
    {
      "address": {
        "city": "Key West",
        "country": "US",
        "countyOrProvince": "FL",
        "line1": "500 Duval St",
        "line2": "line2",
        "line3": "line3",
        "line4": "line4",
        "zipOrPostcode": "33945"
      },
      "challenge": {
        "description": "challenge description",
        "value": "challenge test"
      },
      "company": {
        "name": "ABC Group Plc",
        "operatingName": "ABC Co",
        "taxId": "123123123"
      },
      "email": "bob@example.com",
      "individual": {
        "dateOfBirth": "1970-05-20T00:00:00.000+0000",
        "name": {
          "firstName": "Bob",
          "lastName": "Smith",
          "otherNames": "H",
          "title": "Mr"
        },
        "nationalIdentification": "SA211123K"
      },
      "language": "en-US",
      "payeeId": "2aa5d7e0-2ecb-403f-8494-1865ed0454e9",
      "paymentChannel": {
        "accountName": "My account",
        "accountNumber": "XXXXXX5678",
        "countryCode": "US",
        "currency": "USD",
        "iban": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX1234",
        "paymentChannelName": "My Payment Channel",
        "routingNumber": "XXXXX6789"
      },
      "payorRefs": [
        {
          "invitationStatus": "invitationStatus",
          "invitationStatusTimestamp": "2019-01-20T09:00:00Z",
          "payableIssues": [
            {
              "code": "3",
              "message": "payee-disabled"
            },
            {
              "code": "3",
              "message": "payee-disabled"
            }
          ],
          "payableStatus": true,
          "paymentChannelId": "70faaff7-2c32-4b44-b27f-f0b6c484e6f3",
          "payorId": "ba08877f-9d96-41e4-9c26-44a872d856ae",
          "remoteId": "uniqueIdForRemoteEntity"
        },
        {
          "invitationStatus": "invitationStatus",
          "invitationStatusTimestamp": "2019-01-20T09:00:00Z",
          "payableIssues": [
            {
              "code": "3",
              "message": "payee-disabled"
            },
            {
              "code": "3",
              "message": "payee-disabled"
            }
          ],
          "payableStatus": true,
          "paymentChannelId": "70faaff7-2c32-4b44-b27f-f0b6c484e6f3",
          "payorId": "ba08877f-9d96-41e4-9c26-44a872d856ae",
          "remoteId": "uniqueIdForRemoteEntity"
        }
      ],
      "remoteId": "Remote ID",
      "type": "type"
    }
  ],
  "payorId": "9ac75325-5dcd-42d5-b992-175d7e0a035e"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|payees|[[CreatePayeeV3](#schemacreatepayeev3)]|true|none|none|
|payorId|string|true|none|none|

<h2 id="tocS_CreatePayeesRequestV4">CreatePayeesRequestV4</h2>
<!-- backwards compatibility -->
<a id="schemacreatepayeesrequestv4"></a>
<a id="schema_CreatePayeesRequestV4"></a>
<a id="tocScreatepayeesrequestv4"></a>
<a id="tocscreatepayeesrequestv4"></a>

```json
{
  "payees": [
    {
      "address": {
        "city": "Key West",
        "country": "US",
        "countyOrProvince": "FL",
        "line1": "500 Duval St",
        "line2": "line2",
        "line3": "line3",
        "line4": "line4",
        "zipOrPostcode": "33945"
      },
      "challenge": {
        "description": "challenge description",
        "value": "11984567"
      },
      "company": {
        "name": "ABC Group Plc",
        "operatingName": "ABC Co",
        "taxId": "123123123"
      },
      "email": "bob@example.com",
      "individual": {
        "dateOfBirth": "1970-05-20T00:00:00.000+0000",
        "name": {
          "firstName": "Bob",
          "lastName": "Smith",
          "otherNames": "H",
          "title": "Mr"
        },
        "nationalIdentification": "SA211123K"
      },
      "language": "en-US",
      "paymentChannel": {
        "accountName": "My account",
        "accountNumber": "XXXXXX5678",
        "countryCode": "US",
        "currency": "USD",
        "iban": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX1234",
        "paymentChannelName": "My Payment Channel",
        "routingNumber": "XXXXX6789"
      },
      "remoteId": "Remote ID"
    },
    {
      "address": {
        "city": "Key West",
        "country": "US",
        "countyOrProvince": "FL",
        "line1": "500 Duval St",
        "line2": "line2",
        "line3": "line3",
        "line4": "line4",
        "zipOrPostcode": "33945"
      },
      "challenge": {
        "description": "challenge description",
        "value": "11984567"
      },
      "company": {
        "name": "ABC Group Plc",
        "operatingName": "ABC Co",
        "taxId": "123123123"
      },
      "email": "bob@example.com",
      "individual": {
        "dateOfBirth": "1970-05-20T00:00:00.000+0000",
        "name": {
          "firstName": "Bob",
          "lastName": "Smith",
          "otherNames": "H",
          "title": "Mr"
        },
        "nationalIdentification": "SA211123K"
      },
      "language": "en-US",
      "paymentChannel": {
        "accountName": "My account",
        "accountNumber": "XXXXXX5678",
        "countryCode": "US",
        "currency": "USD",
        "iban": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX1234",
        "paymentChannelName": "My Payment Channel",
        "routingNumber": "XXXXX6789"
      },
      "remoteId": "Remote ID"
    }
  ],
  "payorId": "9ac75325-5dcd-42d5-b992-175d7e0a035e"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|payees|[[CreatePayeeV4](#schemacreatepayeev4)]|true|none|none|
|payorId|string|true|none|none|

<h2 id="tocS_CreatePaymentChannelV3">CreatePaymentChannelV3</h2>
<!-- backwards compatibility -->
<a id="schemacreatepaymentchannelv3"></a>
<a id="schema_CreatePaymentChannelV3"></a>
<a id="tocScreatepaymentchannelv3"></a>
<a id="tocscreatepaymentchannelv3"></a>

```json
{
  "accountName": "My account",
  "accountNumber": "XXXXXX5678",
  "countryCode": "US",
  "currency": "USD",
  "iban": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX1234",
  "paymentChannelName": "My Payment Channel",
  "routingNumber": "XXXXX6789"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountName|string|true|none|none|
|accountNumber|string|false|none|Either routing number and account number or only iban must be set|
|countryCode|string|true|none|Valid ISO 3166 2 character country code. See the <a href="https://www.iso.org/iso-3166-country-codes.html" target="_blank" a>ISO specification</a> for details.|
|currency|string|true|none|Valid ISO 4217 3 letter currency code. See the <a href="https://www.iso.org/iso-4217-currency-codes.html" target="_blank" a>ISO specification</a> for details.|
|iban|string|false|none|Must match the regular expression ```^[A-Za-z0-9]+$```.|
|paymentChannelName|string|false|none|none|
|routingNumber|string|false|none|Either routing number and account number or only iban must be set|

<h2 id="tocS_CreatePaymentChannelV4">CreatePaymentChannelV4</h2>
<!-- backwards compatibility -->
<a id="schemacreatepaymentchannelv4"></a>
<a id="schema_CreatePaymentChannelV4"></a>
<a id="tocScreatepaymentchannelv4"></a>
<a id="tocscreatepaymentchannelv4"></a>

```json
{
  "accountName": "My account",
  "accountNumber": "XXXXXX5678",
  "countryCode": "US",
  "currency": "USD",
  "iban": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX1234",
  "paymentChannelName": "My Payment Channel",
  "routingNumber": "XXXXX6789"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountName|string|true|none|none|
|accountNumber|string|false|none|Either routing number and account number or only iban must be set|
|countryCode|string|true|none|Valid ISO 3166 2 character country code. See the <a href="https://www.iso.org/iso-3166-country-codes.html" target="_blank" a>ISO specification</a> for details.|
|currency|string|true|none|Valid ISO 4217 3 letter currency code. See the <a href="https://www.iso.org/iso-4217-currency-codes.html" target="_blank" a>ISO specification</a> for details.|
|iban|string|false|none|Must match the regular expression ```^[A-Za-z0-9]+$```.|
|paymentChannelName|string|false|none|none|
|routingNumber|string|false|none|Either routing number and account number or only iban must be set|

<h2 id="tocS_CreatePayorLinkRequest">CreatePayorLinkRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatepayorlinkrequest"></a>
<a id="schema_CreatePayorLinkRequest"></a>
<a id="tocScreatepayorlinkrequest"></a>
<a id="tocscreatepayorlinkrequest"></a>

```json
{
  "fromPayorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "linkType": "PARENT_OF",
  "toPayorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fromPayorId|string(uuid)|true|none|none|
|linkType|string|true|none|none|
|toPayorId|string(uuid)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|linkType|PARENT_OF|

<h2 id="tocS_CreatePayoutRequestV3">CreatePayoutRequestV3</h2>
<!-- backwards compatibility -->
<a id="schemacreatepayoutrequestv3"></a>
<a id="schema_CreatePayoutRequestV3"></a>
<a id="tocScreatepayoutrequestv3"></a>
<a id="tocscreatepayoutrequestv3"></a>

```json
{
  "payments": [
    {
      "amount": 1299,
      "currency": "USD",
      "paymentMemo": "my memo",
      "paymentMetadata": "invoiceeId_123|abc001:12345|xyz002:4567",
      "payorPaymentId": "123211321ABSD",
      "remoteId": "remoteId1234",
      "remoteSystemId": "remoteSystemId",
      "sourceAccountName": "MyAccountName",
      "transmissionType": "ACH"
    },
    {
      "amount": 1299,
      "currency": "USD",
      "paymentMemo": "my memo",
      "paymentMetadata": "invoiceeId_123|abc001:12345|xyz002:4567",
      "payorPaymentId": "123211321ABSD",
      "remoteId": "remoteId1234",
      "remoteSystemId": "remoteSystemId",
      "sourceAccountName": "MyAccountName",
      "transmissionType": "ACH"
    },
    {
      "amount": 1299,
      "currency": "USD",
      "paymentMemo": "my memo",
      "paymentMetadata": "invoiceeId_123|abc001:12345|xyz002:4567",
      "payorPaymentId": "123211321ABSD",
      "remoteId": "remoteId1234",
      "remoteSystemId": "remoteSystemId",
      "sourceAccountName": "MyAccountName",
      "transmissionType": "ACH"
    },
    {
      "amount": 1299,
      "currency": "USD",
      "paymentMemo": "my memo",
      "paymentMetadata": "invoiceeId_123|abc001:12345|xyz002:4567",
      "payorPaymentId": "123211321ABSD",
      "remoteId": "remoteId1234",
      "remoteSystemId": "remoteSystemId",
      "sourceAccountName": "MyAccountName",
      "transmissionType": "ACH"
    },
    {
      "amount": 1299,
      "currency": "USD",
      "paymentMemo": "my memo",
      "paymentMetadata": "invoiceeId_123|abc001:12345|xyz002:4567",
      "payorPaymentId": "123211321ABSD",
      "remoteId": "remoteId1234",
      "remoteSystemId": "remoteSystemId",
      "sourceAccountName": "MyAccountName",
      "transmissionType": "ACH"
    }
  ],
  "payoutFromPayorId": "c4261044-13df-4a6c-b1d4-fa8be2b46f5a",
  "payoutMemo": "Monthly Payment",
  "payoutToPayorId": "9afc6b39-de12-466a-a9ca-07c7a23b312d"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|payments|[[PaymentInstructionV3](#schemapaymentinstructionv3)]|true|none|none|
|payoutFromPayorId|string(uuid)|false|none|<p>The id of the payor whose source account(s) will be debited</p><br><p>payoutFromPayorId and payoutToPayorId must be both supplied or both omitted</p><br>|
|payoutMemo|string|false|none|<p>Text applied to all payment memos unless specified explicitly on a payment</p><br><p>This should be the reference field on the statement seen by the payee (but not via ACH)</p><br>|
|payoutToPayorId|string(uuid)|false|none|<p>The id of the payor whose payees will be paid</p><br><p>payoutFromPayorId and payoutToPayorId must be both supplied or both omitted</p><br>|

<h2 id="tocS_CreateWebhookRequest">CreateWebhookRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatewebhookrequest"></a>
<a id="schema_CreateWebhookRequest"></a>
<a id="tocScreatewebhookrequest"></a>
<a id="tocscreatewebhookrequest"></a>

```json
{
  "authorizationHeader": "authorizationHeader",
  "categories": [
    null,
    null
  ],
  "enabled": true,
  "payorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "webhookUrl": "webhookUrl"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authorizationHeader|string|false|none|the authorization header to include with the notification.|
|categories|[[Category](#schemacategory)]|false|none|the categories to enable.|
|enabled|boolean|true|none|whether the webhook is enabled.|
|payorId|string(uuid)|true|none|none|
|webhookUrl|string|true|none|the webhook URL to use.|

#### Enumerated Values

|Property|Value|
|---|---|
|categories|payment|
|categories|payee|
|categories|debit|

<h2 id="tocS_DebitEvent">DebitEvent</h2>
<!-- backwards compatibility -->
<a id="schemadebitevent"></a>
<a id="schema_DebitEvent"></a>
<a id="tocSdebitevent"></a>
<a id="tocsdebitevent"></a>

```json
{
  "createdAt": "2020-06-18T15:09:42Z",
  "eventId": "270ab907-27ec-4b83-8028-0ff432bbdec4",
  "sourceType": "payment_status_changed",
  "debitTransactionId": "cbd9280f-8fde-4190-b014-979d88f3ec54"
}
```

Base type for all Debit Events

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(date-time)|true|none|ISO8601 timestamp indicating when the source event was created|
|eventId|string(uuid)|true|none|UUID id of the source event in the Velo platform|
|sourceType|string|true|none|OA3 Schema type name for the source info which is used as the discriminator value to ensure that data binding works correctly|
|debitTransactionId|string(uuid)|true|none|ID of this debit transaction within the Velo platform|

<h2 id="tocS_DebitEvent_allOf">DebitEvent_allOf</h2>
<!-- backwards compatibility -->
<a id="schemadebitevent_allof"></a>
<a id="schema_DebitEvent_allOf"></a>
<a id="tocSdebitevent_allof"></a>
<a id="tocsdebitevent_allof"></a>

```json
{
  "debitTransactionId": "cbd9280f-8fde-4190-b014-979d88f3ec54"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|debitTransactionId|string(uuid)|true|none|ID of this debit transaction within the Velo platform|

<h2 id="tocS_DebitStatusChanged">DebitStatusChanged</h2>
<!-- backwards compatibility -->
<a id="schemadebitstatuschanged"></a>
<a id="schema_DebitStatusChanged"></a>
<a id="tocSdebitstatuschanged"></a>
<a id="tocsdebitstatuschanged"></a>

```json
{
  "createdAt": "2020-06-18T15:09:42Z",
  "eventId": "270ab907-27ec-4b83-8028-0ff432bbdec4",
  "sourceType": "payment_status_changed",
  "debitTransactionId": "cbd9280f-8fde-4190-b014-979d88f3ec54",
  "status": "PENDING"
}
```

Base type for all debit status changed events

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(date-time)|true|none|ISO8601 timestamp indicating when the source event was created|
|eventId|string(uuid)|true|none|UUID id of the source event in the Velo platform|
|sourceType|string|true|none|OA3 Schema type name for the source info which is used as the discriminator value to ensure that data binding works correctly|
|debitTransactionId|string(uuid)|true|none|ID of this debit transaction within the Velo platform|
|status|string|true|none|The new status of the debit. One of "PENDING" "PROCESSING" "REJECTED" "RELEASED"|

<h2 id="tocS_DebitStatusChanged_allOf">DebitStatusChanged_allOf</h2>
<!-- backwards compatibility -->
<a id="schemadebitstatuschanged_allof"></a>
<a id="schema_DebitStatusChanged_allOf"></a>
<a id="tocSdebitstatuschanged_allof"></a>
<a id="tocsdebitstatuschanged_allof"></a>

```json
{
  "status": "PENDING"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|The new status of the debit. One of "PENDING" "PROCESSING" "REJECTED" "RELEASED"|

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "errorCode": "20110003",
  "errorData": {
    "content": {},
    "description": "The rejected CSV rows"
  },
  "errorMessage": "size must be between 0 and 10",
  "localisationDetails": {
    "parameters": {
      "max": "10",
      "min": "0"
    },
    "template": "size must be between {min} and {max}"
  },
  "location": "firstName",
  "locationType": "requestBody",
  "reasonCode": "validationError"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorCode|string|false|none|Unique numeric code that can be used for switching client behavior or to drive translated or customised error messages|
|errorData|[ErrorData](#schemaerrordata)|false|none|none|
|errorMessage|string|false|none|English language message indicating the nature of the error|
|localisationDetails|[LocalisationDetails](#schemalocalisationdetails)|false|none|none|
|location|string|false|none|the property or object that caused the error|
|locationType|string|false|none|**Deprecated.** the location type in the request that was the cause of the error<br>|
|reasonCode|string|false|none|**Deprecated.** a camel-cased string that can be used by clients to localise client error messages (deprecated)|

#### Enumerated Values

|Property|Value|
|---|---|
|locationType|requestBody|
|locationType|queryParam|
|locationType|requestParam|
|locationType|header|
|locationType|pathParam|

<h2 id="tocS_ErrorData">ErrorData</h2>
<!-- backwards compatibility -->
<a id="schemaerrordata"></a>
<a id="schema_ErrorData"></a>
<a id="tocSerrordata"></a>
<a id="tocserrordata"></a>

```json
{
  "content": {},
  "description": "The rejected CSV rows"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|object|false|none|Object containing typed error data specific to the API|
|description|string|false|none|The description of the error data content|

<h2 id="tocS_ErrorResponse">ErrorResponse</h2>
<!-- backwards compatibility -->
<a id="schemaerrorresponse"></a>
<a id="schema_ErrorResponse"></a>
<a id="tocSerrorresponse"></a>
<a id="tocserrorresponse"></a>

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 400
}
```

Error response returned by all error conditions in Velo Services

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|correlationId|string(uuid)|false|none|a unique identifier to track a request or related sequence of requests|
|errors|[[Error](#schemaerror)]|false|none|one or more errors|
|httpStatusCode|integer|false|none|this will mirror the Status-Code part of the Status-Line http response header and is included for extra clarity|

<h2 id="tocS_FailedPayeeV3">FailedPayeeV3</h2>
<!-- backwards compatibility -->
<a id="schemafailedpayeev3"></a>
<a id="schema_FailedPayeeV3"></a>
<a id="tocSfailedpayeev3"></a>
<a id="tocsfailedpayeev3"></a>

```json
{
  "address": {
    "city": "Key West",
    "country": "US",
    "countyOrProvince": "FL",
    "line1": "500 Duval St",
    "line2": "line2",
    "line3": "line3",
    "line4": "line4",
    "zipOrPostcode": "33945"
  },
  "challenge": {
    "description": "challenge description",
    "value": "challenge test"
  },
  "company": {
    "name": "ABC Group Plc",
    "operatingName": "ABC Co",
    "taxId": "123123123"
  },
  "email": "bob@example.com",
  "individual": {
    "dateOfBirth": "1970-05-20T00:00:00.000+0000",
    "name": {
      "firstName": "Bob",
      "lastName": "Smith",
      "otherNames": "H",
      "title": "Mr"
    },
    "nationalIdentification": "SA211123K"
  },
  "language": "en-US",
  "payeeId": "2aa5d7e0-2ecb-403f-8494-1865ed0454e9",
  "paymentChannel": {
    "accountName": "My account",
    "accountNumber": "XXXXXX5678",
    "countryCode": "US",
    "currency": "USD",
    "iban": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX1234",
    "paymentChannelName": "My Payment Channel",
    "routingNumber": "XXXXX6789"
  },
  "payorRefs": [
    {
      "invitationStatus": "invitationStatus",
      "invitationStatusTimestamp": "2019-01-20T09:00:00Z",
      "payableIssues": [
        {
          "code": "3",
          "message": "payee-disabled"
        },
        {
          "code": "3",
          "message": "payee-disabled"
        }
      ],
      "payableStatus": true,
      "paymentChannelId": "70faaff7-2c32-4b44-b27f-f0b6c484e6f3",
      "payorId": "ba08877f-9d96-41e4-9c26-44a872d856ae",
      "remoteId": "uniqueIdForRemoteEntity"
    },
    {
      "invitationStatus": "invitationStatus",
      "invitationStatusTimestamp": "2019-01-20T09:00:00Z",
      "payableIssues": [
        {
          "code": "3",
          "message": "payee-disabled"
        },
        {
          "code": "3",
          "message": "payee-disabled"
        }
      ],
      "payableStatus": true,
      "paymentChannelId": "70faaff7-2c32-4b44-b27f-f0b6c484e6f3",
      "payorId": "ba08877f-9d96-41e4-9c26-44a872d856ae",
      "remoteId": "uniqueIdForRemoteEntity"
    }
  ],
  "remoteId": "Remote ID",
  "type": "type"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|[CreatePayeeAddressV3](#schemacreatepayeeaddressv3)|false|none|none|
|challenge|[ChallengeV3](#schemachallengev3)|false|none|none|
|company|[CompanyV3](#schemacompanyv3)|false|none|none|
|email|string(email)|false|none|none|
|individual|[CreateIndividualV3](#schemacreateindividualv3)|false|none|none|
|language|string|false|none|An IETF BCP 47 language code which has been configured for use within this Velo environment.<BR><br>See the /v1/supportedLanguages endpoint to list the available codes for an environment.<br>|
|payeeId|string(uuid)|false|read-only|none|
|paymentChannel|[CreatePaymentChannelV3](#schemacreatepaymentchannelv3)|false|none|none|
|payorRefs|[[PayeePayorRefV3](#schemapayeepayorrefv3)]|false|read-only|none|
|remoteId|string|false|none|none|
|type|string|false|none|Type of Payee. One of the following values: Individual, Company|

<h2 id="tocS_FailedPayeeV4">FailedPayeeV4</h2>
<!-- backwards compatibility -->
<a id="schemafailedpayeev4"></a>
<a id="schema_FailedPayeeV4"></a>
<a id="tocSfailedpayeev4"></a>
<a id="tocsfailedpayeev4"></a>

```json
{
  "address": {
    "city": "Key West",
    "country": "US",
    "countyOrProvince": "FL",
    "line1": "500 Duval St",
    "line2": "line2",
    "line3": "line3",
    "line4": "line4",
    "zipOrPostcode": "33945"
  },
  "challenge": {
    "description": "challenge description",
    "value": "11984567"
  },
  "company": {
    "name": "ABC Group Plc",
    "operatingName": "ABC Co",
    "taxId": "123123123"
  },
  "email": "bob@example.com",
  "individual": {
    "dateOfBirth": "1970-05-20T00:00:00.000+0000",
    "name": {
      "firstName": "Bob",
      "lastName": "Smith",
      "otherNames": "H",
      "title": "Mr"
    },
    "nationalIdentification": "SA211123K"
  },
  "language": "en-US",
  "payeeId": "2aa5d7e0-2ecb-403f-8494-1865ed0454e9",
  "paymentChannel": {
    "accountName": "My account",
    "accountNumber": "XXXXXX5678",
    "countryCode": "US",
    "currency": "USD",
    "iban": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX1234",
    "paymentChannelName": "My Payment Channel",
    "routingNumber": "XXXXX6789"
  },
  "payorRefs": [
    {
      "invitationStatus": "invitationStatus",
      "invitationStatusTimestamp": "2019-01-20T09:00:00Z",
      "payableIssues": [
        {
          "code": "3",
          "message": "payee-disabled"
        },
        {
          "code": "3",
          "message": "payee-disabled"
        }
      ],
      "payableStatus": true,
      "paymentChannelId": "70faaff7-2c32-4b44-b27f-f0b6c484e6f3",
      "payorId": "ba08877f-9d96-41e4-9c26-44a872d856ae",
      "remoteId": "uniqueIdForRemoteEntity"
    },
    {
      "invitationStatus": "invitationStatus",
      "invitationStatusTimestamp": "2019-01-20T09:00:00Z",
      "payableIssues": [
        {
          "code": "3",
          "message": "payee-disabled"
        },
        {
          "code": "3",
          "message": "payee-disabled"
        }
      ],
      "payableStatus": true,
      "paymentChannelId": "70faaff7-2c32-4b44-b27f-f0b6c484e6f3",
      "payorId": "ba08877f-9d96-41e4-9c26-44a872d856ae",
      "remoteId": "uniqueIdForRemoteEntity"
    }
  ],
  "remoteId": "Remote ID",
  "type": "type"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|[CreatePayeeAddressV4](#schemacreatepayeeaddressv4)|false|none|none|
|challenge|[ChallengeV4](#schemachallengev4)|false|none|<p>Used to override the default challenge presented to the payee when they onboard</p><br><p>Not used after the payee has onboarded</p><br>|
|company|[CompanyV4](#schemacompanyv4)|false|none|none|
|email|string(email)|false|none|none|
|individual|[CreateIndividualV4](#schemacreateindividualv4)|false|none|none|
|language|string|false|none|An IETF BCP 47 language code which has been configured for use within this Velo environment.<BR><br>See the /v1/supportedLanguages endpoint to list the available codes for an environment.<br>|
|payeeId|string(uuid)|false|read-only|none|
|paymentChannel|[CreatePaymentChannelV4](#schemacreatepaymentchannelv4)|false|none|none|
|payorRefs|[[PayeePayorRefV4](#schemapayeepayorrefv4)]|false|read-only|none|
|remoteId|string|false|none|none|
|type|string|false|none|Type of Payee. One of the following values: Individual, Company|

<h2 id="tocS_FailedSubmissionV3">FailedSubmissionV3</h2>
<!-- backwards compatibility -->
<a id="schemafailedsubmissionv3"></a>
<a id="schema_FailedSubmissionV3"></a>
<a id="tocSfailedsubmissionv3"></a>
<a id="tocsfailedsubmissionv3"></a>

```json
{
  "failedSubmission": {
    "address": {
      "city": "Key West",
      "country": "US",
      "countyOrProvince": "FL",
      "line1": "500 Duval St",
      "line2": "line2",
      "line3": "line3",
      "line4": "line4",
      "zipOrPostcode": "33945"
    },
    "challenge": {
      "description": "challenge description",
      "value": "challenge test"
    },
    "company": {
      "name": "ABC Group Plc",
      "operatingName": "ABC Co",
      "taxId": "123123123"
    },
    "email": "bob@example.com",
    "individual": {
      "dateOfBirth": "1970-05-20T00:00:00.000+0000",
      "name": {
        "firstName": "Bob",
        "lastName": "Smith",
        "otherNames": "H",
        "title": "Mr"
      },
      "nationalIdentification": "SA211123K"
    },
    "language": "en-US",
    "payeeId": "2aa5d7e0-2ecb-403f-8494-1865ed0454e9",
    "paymentChannel": {
      "accountName": "My account",
      "accountNumber": "XXXXXX5678",
      "countryCode": "US",
      "currency": "USD",
      "iban": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX1234",
      "paymentChannelName": "My Payment Channel",
      "routingNumber": "XXXXX6789"
    },
    "payorRefs": [
      {
        "invitationStatus": "invitationStatus",
        "invitationStatusTimestamp": "2019-01-20T09:00:00Z",
        "payableIssues": [
          {
            "code": "3",
            "message": "payee-disabled"
          },
          {
            "code": "3",
            "message": "payee-disabled"
          }
        ],
        "payableStatus": true,
        "paymentChannelId": "70faaff7-2c32-4b44-b27f-f0b6c484e6f3",
        "payorId": "ba08877f-9d96-41e4-9c26-44a872d856ae",
        "remoteId": "uniqueIdForRemoteEntity"
      },
      {
        "invitationStatus": "invitationStatus",
        "invitationStatusTimestamp": "2019-01-20T09:00:00Z",
        "payableIssues": [
          {
            "code": "3",
            "message": "payee-disabled"
          },
          {
            "code": "3",
            "message": "payee-disabled"
          }
        ],
        "payableStatus": true,
        "paymentChannelId": "70faaff7-2c32-4b44-b27f-f0b6c484e6f3",
        "payorId": "ba08877f-9d96-41e4-9c26-44a872d856ae",
        "remoteId": "uniqueIdForRemoteEntity"
      }
    ],
    "remoteId": "Remote ID",
    "type": "type"
  },
  "failureMessage": "failure reason"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|failedSubmission|[FailedPayeeV3](#schemafailedpayeev3)|false|none|none|
|failureMessage|string|false|none|none|

<h2 id="tocS_FailedSubmissionV4">FailedSubmissionV4</h2>
<!-- backwards compatibility -->
<a id="schemafailedsubmissionv4"></a>
<a id="schema_FailedSubmissionV4"></a>
<a id="tocSfailedsubmissionv4"></a>
<a id="tocsfailedsubmissionv4"></a>

```json
{
  "failedSubmission": {
    "address": {
      "city": "Key West",
      "country": "US",
      "countyOrProvince": "FL",
      "line1": "500 Duval St",
      "line2": "line2",
      "line3": "line3",
      "line4": "line4",
      "zipOrPostcode": "33945"
    },
    "challenge": {
      "description": "challenge description",
      "value": "11984567"
    },
    "company": {
      "name": "ABC Group Plc",
      "operatingName": "ABC Co",
      "taxId": "123123123"
    },
    "email": "bob@example.com",
    "individual": {
      "dateOfBirth": "1970-05-20T00:00:00.000+0000",
      "name": {
        "firstName": "Bob",
        "lastName": "Smith",
        "otherNames": "H",
        "title": "Mr"
      },
      "nationalIdentification": "SA211123K"
    },
    "language": "en-US",
    "payeeId": "2aa5d7e0-2ecb-403f-8494-1865ed0454e9",
    "paymentChannel": {
      "accountName": "My account",
      "accountNumber": "XXXXXX5678",
      "countryCode": "US",
      "currency": "USD",
      "iban": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX1234",
      "paymentChannelName": "My Payment Channel",
      "routingNumber": "XXXXX6789"
    },
    "payorRefs": [
      {
        "invitationStatus": "invitationStatus",
        "invitationStatusTimestamp": "2019-01-20T09:00:00Z",
        "payableIssues": [
          {
            "code": "3",
            "message": "payee-disabled"
          },
          {
            "code": "3",
            "message": "payee-disabled"
          }
        ],
        "payableStatus": true,
        "paymentChannelId": "70faaff7-2c32-4b44-b27f-f0b6c484e6f3",
        "payorId": "ba08877f-9d96-41e4-9c26-44a872d856ae",
        "remoteId": "uniqueIdForRemoteEntity"
      },
      {
        "invitationStatus": "invitationStatus",
        "invitationStatusTimestamp": "2019-01-20T09:00:00Z",
        "payableIssues": [
          {
            "code": "3",
            "message": "payee-disabled"
          },
          {
            "code": "3",
            "message": "payee-disabled"
          }
        ],
        "payableStatus": true,
        "paymentChannelId": "70faaff7-2c32-4b44-b27f-f0b6c484e6f3",
        "payorId": "ba08877f-9d96-41e4-9c26-44a872d856ae",
        "remoteId": "uniqueIdForRemoteEntity"
      }
    ],
    "remoteId": "Remote ID",
    "type": "type"
  },
  "failureMessage": "failure reason"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|failedSubmission|[FailedPayeeV4](#schemafailedpayeev4)|false|none|none|
|failureMessage|string|false|none|none|

<h2 id="tocS_FundingAccountResponseV2">FundingAccountResponseV2</h2>
<!-- backwards compatibility -->
<a id="schemafundingaccountresponsev2"></a>
<a id="schema_FundingAccountResponseV2"></a>
<a id="tocSfundingaccountresponsev2"></a>
<a id="tocsfundingaccountresponsev2"></a>

```json
{
  "accountName": "Payor Corp",
  "accountNumber": "7001001234",
  "archived": true,
  "country": "US",
  "currency": "USD",
  "id": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "name": "My Funding Account",
  "payorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "routingNumber": 12345678,
  "type": "FBO"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountName|string|false|none|name on the bank account|
|accountNumber|string|false|none|bank account number|
|archived|boolean|false|none|A flag for whether the funding account has been archived.  Only present in the response if true.|
|country|string|false|none|ISO 3166-1 2 letter country code (upper case)|
|currency|string|false|none|Valid ISO 4217 3 letter currency code. See the <a href="https://www.iso.org/iso-4217-currency-codes.html" target="_blank" a>ISO specification</a> for details.|
|id|string(uuid)|false|none|Funding Account Id|
|name|string|false|none|name of funding account|
|payorId|string(uuid)|false|none|none|
|routingNumber|string|false|none|bank account routing number|
|type|string|false|none|Funding account type. One of the following values: FBO, WUBS_DECOUPLED, PRIVATE|

<h2 id="tocS_FundingAccountType">FundingAccountType</h2>
<!-- backwards compatibility -->
<a id="schemafundingaccounttype"></a>
<a id="schema_FundingAccountType"></a>
<a id="tocSfundingaccounttype"></a>
<a id="tocsfundingaccounttype"></a>

```json
"FBO"
```

Funding Account Type. One of the following values: FBO, WUBS_DECOUPLED, PRIVATE

<h2 id="tocS_FundingAccountTypeV2">FundingAccountTypeV2</h2>
<!-- backwards compatibility -->
<a id="schemafundingaccounttypev2"></a>
<a id="schema_FundingAccountTypeV2"></a>
<a id="tocSfundingaccounttypev2"></a>
<a id="tocsfundingaccounttypev2"></a>

```json
"FBO"
```

Funding account type. One of the following values: FBO, WUBS_DECOUPLED, PRIVATE

<h2 id="tocS_FundingAudit">FundingAudit</h2>
<!-- backwards compatibility -->
<a id="schemafundingaudit"></a>
<a id="schema_FundingAudit"></a>
<a id="tocSfundingaudit"></a>
<a id="tocsfundingaudit"></a>

```json
{
  "amount": 120000,
  "currency": "USD",
  "dateTime": "2000-01-23T04:56:07.000+00:00",
  "events": [
    {
      "eventDateTime": "2000-01-23T04:56:07.000+00:00",
      "eventId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "fundingEventType": "fundingEventType",
      "principal": "principal"
    },
    {
      "eventDateTime": "2000-01-23T04:56:07.000+00:00",
      "eventId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "fundingEventType": "fundingEventType",
      "principal": "principal"
    }
  ],
  "fundingAccountName": "fundingAccountName",
  "fundingType": "fundingType",
  "sourceAccountName": "sourceAccountName",
  "status": "status",
  "topupType": "topupType"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|number(double)|false|none|The amount funded|
|currency|string|false|none|The currency of the funding|
|dateTime|string(date-time)|false|none|none|
|events|[[FundingEvent](#schemafundingevent)]|false|none|none|
|fundingAccountName|string|false|none|none|
|fundingType|string|false|none|Funding type. One of the following values: ACH, WIRE, EMBEDDED, BANK_TRANSFER|
|sourceAccountName|string|false|none|none|
|status|string|false|none|Status of the funding. One of the following values: PENDING, FAILED, CREDIT, DEBIT|
|topupType|string|false|none|Type of top up. One of the following values: AUTOMATIC, MANUAL|

<h2 id="tocS_FundingEvent">FundingEvent</h2>
<!-- backwards compatibility -->
<a id="schemafundingevent"></a>
<a id="schema_FundingEvent"></a>
<a id="tocSfundingevent"></a>
<a id="tocsfundingevent"></a>

```json
{
  "eventDateTime": "2000-01-23T04:56:07.000+00:00",
  "eventId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "fundingEventType": "fundingEventType",
  "principal": "principal"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eventDateTime|string(date-time)|false|none|none|
|eventId|string(uuid)|false|none|none|
|fundingEventType|string|false|none|Funding event type. One of the following values: PAYOR_FUNDING_DETECTED, PAYOR_FUNDING_REQUESTED, PAYOR_FUNDING_RETURN_RECEIVED, FUNDING_RETURN_DETECTED, PAYOR_FUNDING_REQUEST_SUBMITTED, PAYOR_FUNDING_ENTRY_DETAIL_RECEIVED, FUNDING_DEALLOCATED|
|principal|string|false|none|none|

<h2 id="tocS_FundingEventType">FundingEventType</h2>
<!-- backwards compatibility -->
<a id="schemafundingeventtype"></a>
<a id="schema_FundingEventType"></a>
<a id="tocSfundingeventtype"></a>
<a id="tocsfundingeventtype"></a>

```json
"string"
```

Funding event type. One of the following values: PAYOR_FUNDING_DETECTED, PAYOR_FUNDING_REQUESTED, PAYOR_FUNDING_RETURN_RECEIVED, FUNDING_RETURN_DETECTED, PAYOR_FUNDING_REQUEST_SUBMITTED, PAYOR_FUNDING_ENTRY_DETAIL_RECEIVED, FUNDING_DEALLOCATED

<h2 id="tocS_FundingPayorStatusAuditResponse">FundingPayorStatusAuditResponse</h2>
<!-- backwards compatibility -->
<a id="schemafundingpayorstatusauditresponse"></a>
<a id="schema_FundingPayorStatusAuditResponse"></a>
<a id="tocSfundingpayorstatusauditresponse"></a>
<a id="tocsfundingpayorstatusauditresponse"></a>

```json
{
  "amount": 2,
  "currency": "USD",
  "fundingId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "status": "status"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|integer(int64)|false|none|none|
|currency|string|false|none|Valid ISO 4217 3 letter currency code. See the <a href="https://www.iso.org/iso-4217-currency-codes.html" target="_blank" a>ISO specification</a> for details.|
|fundingId|string(uuid)|false|none|none|
|status|string|false|none|none|

<h2 id="tocS_FundingRequestV2">FundingRequestV2</h2>
<!-- backwards compatibility -->
<a id="schemafundingrequestv2"></a>
<a id="schema_FundingRequestV2"></a>
<a id="tocSfundingrequestv2"></a>
<a id="tocsfundingrequestv2"></a>

```json
{
  "amount": 800828191
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|integer(int64)|true|none|Amount to fund, decimal implied|

<h2 id="tocS_FundingRequestV3">FundingRequestV3</h2>
<!-- backwards compatibility -->
<a id="schemafundingrequestv3"></a>
<a id="schema_FundingRequestV3"></a>
<a id="tocSfundingrequestv3"></a>
<a id="tocsfundingrequestv3"></a>

```json
{
  "amount": 800828191,
  "fundingAccountId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|integer(int64)|true|none|Amount to fund in minor units|
|fundingAccountId|string(uuid)|true|none|The funding account id|

<h2 id="tocS_FundingResponse">FundingResponse</h2>
<!-- backwards compatibility -->
<a id="schemafundingresponse"></a>
<a id="schema_FundingResponse"></a>
<a id="tocSfundingresponse"></a>
<a id="tocsfundingresponse"></a>

```json
{
  "allocationDate": "2000-01-23T04:56:07.000+00:00",
  "allocationType": "allocationType",
  "amount": 0,
  "currency": "USD",
  "detectedFundingRef": "detectedFundingRef",
  "fundingAccountType": "FBO",
  "fundingId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "hiddenDate": "2000-01-23T04:56:07.000+00:00",
  "payorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "physicalAccountName": "physicalAccountName",
  "reason": "reason",
  "sourceAccountId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "status": "ALLOCATED",
  "text": "text"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allocationDate|string(date-time)|true|none|none|
|allocationType|string|false|none|Funding Allocation Type. One of the following values: AUTOMATIC, MANUAL|
|amount|integer(int64)|true|none|none|
|currency|string|true|none|Valid ISO 4217 3 letter currency code. See the <a href="https://www.iso.org/iso-4217-currency-codes.html" target="_blank" a>ISO specification</a> for details.|
|detectedFundingRef|string|false|none|none|
|fundingAccountType|string|true|none|Funding Account Type. One of the following values: FBO, WUBS_DECOUPLED, PRIVATE|
|fundingId|string(uuid)|true|none|none|
|hiddenDate|string(date-time)|false|none|none|
|payorId|string(uuid)|true|none|none|
|physicalAccountName|string|false|none|none|
|reason|string|false|none|none|
|sourceAccountId|string(uuid)|false|none|none|
|status|string|true|none|Current status of the funding. One of the follwing values: PENDING, UNALLOCATED, ALLOCATED, HIDDEN, RETURNED, RETURNING, BULK_RETURN, OTHER|
|text|string|false|none|none|

<h2 id="tocS_FundingStatus">FundingStatus</h2>
<!-- backwards compatibility -->
<a id="schemafundingstatus"></a>
<a id="schema_FundingStatus"></a>
<a id="tocSfundingstatus"></a>
<a id="tocsfundingstatus"></a>

```json
"ALLOCATED"
```

Current status of the funding. One of the follwing values: PENDING, UNALLOCATED, ALLOCATED, HIDDEN, RETURNED, RETURNING, BULK_RETURN, OTHER

<h2 id="tocS_FxSummary">FxSummary</h2>
<!-- backwards compatibility -->
<a id="schemafxsummary"></a>
<a id="schema_FxSummary"></a>
<a id="tocSfxsummary"></a>
<a id="tocsfxsummary"></a>

```json
{
  "creationDateTime": "2000-01-23T04:56:07.000+00:00",
  "fundingStatus": "fundingStatus",
  "invertedRate": 123.23,
  "paymentCurrency": "EUR",
  "quoteId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "rate": 123.23,
  "sourceCurrency": "EUR",
  "status": "status",
  "totalCost": 5,
  "totalPaymentAmount": 34235
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|creationDateTime|string(date-time)|true|none|none|
|fundingStatus|string|true|none|Current status of the funding. One of the following values: FUNDED, INSTRUCTED, UNFUNDED|
|invertedRate|number(double)|true|none|none|
|paymentCurrency|string|false|none|ISO-4217 3 character currency code|
|quoteId|string(uuid)|true|none|none|
|rate|number(double)|true|none|none|
|sourceCurrency|string|false|none|ISO-4217 3 character currency code|
|status|string|true|none|Current status of the FX Summary. One of the following values: UNQUOTED, QUOTED, EXPIRED, EXECUTED|
|totalCost|integer|true|none|none|
|totalPaymentAmount|integer|true|none|none|

<h2 id="tocS_FxSummaryV3">FxSummaryV3</h2>
<!-- backwards compatibility -->
<a id="schemafxsummaryv3"></a>
<a id="schema_FxSummaryV3"></a>
<a id="tocSfxsummaryv3"></a>
<a id="tocsfxsummaryv3"></a>

```json
{
  "creationDateTime": "2000-01-23T04:56:07.000+00:00",
  "fundingStatus": "fundingStatus",
  "invertedRate": 1.12,
  "paymentCurrency": "paymentCurrency",
  "quoteId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "rate": 1.12,
  "sourceCurrency": "sourceCurrency",
  "status": "status",
  "totalCost": 1234,
  "totalPaymentAmount": 1234
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|creationDateTime|string(date-time)|true|none|none|
|fundingStatus|string|true|none|Current status of the funding. One of the following values: FUNDED, INSTRUCTED, UNFUNDED|
|invertedRate|number(float)|true|none|none|
|paymentCurrency|string|false|none|ISO 3 character currency code|
|quoteId|string(uuid)|true|none|none|
|rate|number(float)|true|none|none|
|sourceCurrency|string|false|none|ISO 3 character currency code|
|status|string|true|none|Current status of the FX Summary. One of the following values: UNQUOTED, QUOTED, EXPIRED, EXECUTED|
|totalCost|integer|true|none|none|
|totalPaymentAmount|integer|true|none|none|

<h2 id="tocS_GetFundingsResponse">GetFundingsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetfundingsresponse"></a>
<a id="schema_GetFundingsResponse"></a>
<a id="tocSgetfundingsresponse"></a>
<a id="tocsgetfundingsresponse"></a>

```json
{
  "content": [
    {
      "amount": 120000,
      "currency": "USD",
      "dateTime": "2000-01-23T04:56:07.000+00:00",
      "events": [
        {
          "eventDateTime": "2000-01-23T04:56:07.000+00:00",
          "eventId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
          "fundingEventType": "fundingEventType",
          "principal": "principal"
        },
        {
          "eventDateTime": "2000-01-23T04:56:07.000+00:00",
          "eventId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
          "fundingEventType": "fundingEventType",
          "principal": "principal"
        }
      ],
      "fundingAccountName": "fundingAccountName",
      "fundingType": "fundingType",
      "sourceAccountName": "sourceAccountName",
      "status": "status",
      "topupType": "topupType"
    },
    {
      "amount": 120000,
      "currency": "USD",
      "dateTime": "2000-01-23T04:56:07.000+00:00",
      "events": [
        {
          "eventDateTime": "2000-01-23T04:56:07.000+00:00",
          "eventId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
          "fundingEventType": "fundingEventType",
          "principal": "principal"
        },
        {
          "eventDateTime": "2000-01-23T04:56:07.000+00:00",
          "eventId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
          "fundingEventType": "fundingEventType",
          "principal": "principal"
        }
      ],
      "fundingAccountName": "fundingAccountName",
      "fundingType": "fundingType",
      "sourceAccountName": "sourceAccountName",
      "status": "status",
      "topupType": "topupType"
    }
  ],
  "links": [
    {
      "href": "https://api.sandbox.velopayments.com/v1/paymentaudit/fundings?payorId=2a5d8af2-a1ed-4d7f-b9a7-ebe4b333be5a&page=1&pageSize=10",
      "rel": "first"
    },
    {
      "href": "https://api.sandbox.velopayments.com/v1/paymentaudit/fundings?payorId=2a5d8af2-a1ed-4d7f-b9a7-ebe4b333be5a&page=1&pageSize=10",
      "rel": "first"
    }
  ],
  "page": {
    "numberOfElements": 12,
    "page": 1,
    "pageSize": 25,
    "totalElements": 33,
    "totalPages": 2
  }
}
```

List Users Response Object

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|[[FundingAudit](#schemafundingaudit)]|false|none|none|
|links|[[GetFundingsResponse_links](#schemagetfundingsresponse_links)]|false|none|none|
|page|[PagedUserResponse_page](#schemapageduserresponse_page)|false|none|none|

<h2 id="tocS_GetFundingsResponse_links">GetFundingsResponse_links</h2>
<!-- backwards compatibility -->
<a id="schemagetfundingsresponse_links"></a>
<a id="schema_GetFundingsResponse_links"></a>
<a id="tocSgetfundingsresponse_links"></a>
<a id="tocsgetfundingsresponse_links"></a>

```json
{
  "href": "https://api.sandbox.velopayments.com/v1/paymentaudit/fundings?payorId=2a5d8af2-a1ed-4d7f-b9a7-ebe4b333be5a&page=1&pageSize=10",
  "rel": "first"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|href|string|false|none|none|
|rel|string|false|none|none|

<h2 id="tocS_GetPayeeListResponseCompanyV3">GetPayeeListResponseCompanyV3</h2>
<!-- backwards compatibility -->
<a id="schemagetpayeelistresponsecompanyv3"></a>
<a id="schema_GetPayeeListResponseCompanyV3"></a>
<a id="tocSgetpayeelistresponsecompanyv3"></a>
<a id="tocsgetpayeelistresponsecompanyv3"></a>

```json
{
  "name": "ABC Group Plc",
  "operatingName": "ABC Co"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|operatingName|string \| null|false|none|none|

<h2 id="tocS_GetPayeeListResponseCompanyV4">GetPayeeListResponseCompanyV4</h2>
<!-- backwards compatibility -->
<a id="schemagetpayeelistresponsecompanyv4"></a>
<a id="schema_GetPayeeListResponseCompanyV4"></a>
<a id="tocSgetpayeelistresponsecompanyv4"></a>
<a id="tocsgetpayeelistresponsecompanyv4"></a>

```json
{
  "name": "ABC Group Plc",
  "operatingName": "ABC Co"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|operatingName|string \| null|false|none|none|

<h2 id="tocS_GetPayeeListResponseIndividualV3">GetPayeeListResponseIndividualV3</h2>
<!-- backwards compatibility -->
<a id="schemagetpayeelistresponseindividualv3"></a>
<a id="schema_GetPayeeListResponseIndividualV3"></a>
<a id="tocSgetpayeelistresponseindividualv3"></a>
<a id="tocsgetpayeelistresponseindividualv3"></a>

```json
{
  "name": {
    "firstName": "Bob",
    "lastName": "Smith",
    "otherNames": "H",
    "title": "Mr"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|[NameV3](#schemanamev3)|false|none|none|

<h2 id="tocS_GetPayeeListResponseIndividualV4">GetPayeeListResponseIndividualV4</h2>
<!-- backwards compatibility -->
<a id="schemagetpayeelistresponseindividualv4"></a>
<a id="schema_GetPayeeListResponseIndividualV4"></a>
<a id="tocSgetpayeelistresponseindividualv4"></a>
<a id="tocsgetpayeelistresponseindividualv4"></a>

```json
{
  "name": {
    "firstName": "Bob",
    "lastName": "Smith",
    "otherNames": "H",
    "title": "Mr"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|[NameV4](#schemanamev4)|false|none|none|

<h2 id="tocS_GetPayeeListResponseV3">GetPayeeListResponseV3</h2>
<!-- backwards compatibility -->
<a id="schemagetpayeelistresponsev3"></a>
<a id="schema_GetPayeeListResponseV3"></a>
<a id="tocSgetpayeelistresponsev3"></a>
<a id="tocsgetpayeelistresponsev3"></a>

```json
{
  "company": {
    "name": "ABC Group Plc",
    "operatingName": "ABC Co"
  },
  "country": "US",
  "created": "2019-01-20T09:00:00Z",
  "disabled": true,
  "disabledComment": "reason for disabled",
  "disabledUpdatedTimestamp": "2019-01-20T09:00:00Z",
  "displayName": "ABC",
  "email": "bob@example.com",
  "individual": {
    "name": {
      "firstName": "Bob",
      "lastName": "Smith",
      "otherNames": "H",
      "title": "Mr"
    }
  },
  "language": "en-US",
  "onboardedStatus": "onboardedStatus",
  "payeeId": "2aa5d7e0-2ecb-403f-8494-1865ed0454e9",
  "payeeType": "payeeType",
  "payorRefs": [
    {
      "invitationStatus": "invitationStatus",
      "invitationStatusTimestamp": "2019-01-20T09:00:00Z",
      "payableIssues": [
        {
          "code": "3",
          "message": "payee-disabled"
        },
        {
          "code": "3",
          "message": "payee-disabled"
        }
      ],
      "payableStatus": true,
      "paymentChannelId": "70faaff7-2c32-4b44-b27f-f0b6c484e6f3",
      "payorId": "ba08877f-9d96-41e4-9c26-44a872d856ae",
      "remoteId": "uniqueIdForRemoteEntity"
    },
    {
      "invitationStatus": "invitationStatus",
      "invitationStatusTimestamp": "2019-01-20T09:00:00Z",
      "payableIssues": [
        {
          "code": "3",
          "message": "payee-disabled"
        },
        {
          "code": "3",
          "message": "payee-disabled"
        }
      ],
      "payableStatus": true,
      "paymentChannelId": "70faaff7-2c32-4b44-b27f-f0b6c484e6f3",
      "payorId": "ba08877f-9d96-41e4-9c26-44a872d856ae",
      "remoteId": "uniqueIdForRemoteEntity"
    }
  ],
  "watchlistOverrideComment": "Example reason for the watchlist status being overridden",
  "watchlistStatus": "watchlistStatus",
  "watchlistStatusUpdatedTimestamp": "2019-01-20T09:00:00+00:00"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|company|[GetPayeeListResponseCompanyV3](#schemagetpayeelistresponsecompanyv3)|false|none|none|
|country|string|false|none|Valid ISO 3166 2 character country code. See the <a href="https://www.iso.org/iso-3166-country-codes.html" target="_blank" a>ISO specification</a> for details.|
|created|string(date-time)|false|none|none|
|disabled|boolean|false|none|none|
|disabledComment|string|false|none|none|
|disabledUpdatedTimestamp|string(date-time)|false|none|none|
|displayName|string|false|none|none|
|email|string(email) \| null|false|none|none|
|individual|[GetPayeeListResponseIndividualV3](#schemagetpayeelistresponseindividualv3)|false|none|none|
|language|string|false|none|An IETF BCP 47 language code which has been configured for use within this Velo environment.<BR><br>See the /v1/supportedLanguages endpoint to list the available codes for an environment.<br>|
|onboardedStatus|string|false|none|Onboarded status. One of the following values: CREATED, INVITED, REGISTERED, ONBOARDED|
|payeeId|string(uuid)|false|read-only|none|
|payeeType|string|false|none|Type of Payee. One of the following values: Individual, Company|
|payorRefs|[[PayeePayorRefV3](#schemapayeepayorrefv3)]|false|read-only|none|
|watchlistOverrideComment|string \| null|false|none|none|
|watchlistStatus|string|false|none|Current watchlist status. One of the following values: NONE, PENDING, REVIEW, PASSED, FAILED|
|watchlistStatusUpdatedTimestamp|string(date_time) \| null|false|read-only|none|

<h2 id="tocS_GetPayeeListResponseV4">GetPayeeListResponseV4</h2>
<!-- backwards compatibility -->
<a id="schemagetpayeelistresponsev4"></a>
<a id="schema_GetPayeeListResponseV4"></a>
<a id="tocSgetpayeelistresponsev4"></a>
<a id="tocsgetpayeelistresponsev4"></a>

```json
{
  "company": {
    "name": "ABC Group Plc",
    "operatingName": "ABC Co"
  },
  "country": "US",
  "created": "2019-01-20T09:00:00Z",
  "disabled": true,
  "disabledComment": "reason for disabled",
  "disabledUpdatedTimestamp": "2019-01-20T09:00:00Z",
  "displayName": "ABC",
  "email": "bob@example.com",
  "individual": {
    "name": {
      "firstName": "Bob",
      "lastName": "Smith",
      "otherNames": "H",
      "title": "Mr"
    }
  },
  "language": "en-US",
  "onboardedStatus": "onboardedStatus",
  "payeeId": "2aa5d7e0-2ecb-403f-8494-1865ed0454e9",
  "payeeType": "payeeType",
  "payorRefs": [
    {
      "invitationStatus": "invitationStatus",
      "invitationStatusTimestamp": "2019-01-20T09:00:00Z",
      "payableIssues": [
        {
          "code": "3",
          "message": "payee-disabled"
        },
        {
          "code": "3",
          "message": "payee-disabled"
        }
      ],
      "payableStatus": true,
      "paymentChannelId": "70faaff7-2c32-4b44-b27f-f0b6c484e6f3",
      "payorId": "ba08877f-9d96-41e4-9c26-44a872d856ae",
      "remoteId": "uniqueIdForRemoteEntity"
    },
    {
      "invitationStatus": "invitationStatus",
      "invitationStatusTimestamp": "2019-01-20T09:00:00Z",
      "payableIssues": [
        {
          "code": "3",
          "message": "payee-disabled"
        },
        {
          "code": "3",
          "message": "payee-disabled"
        }
      ],
      "payableStatus": true,
      "paymentChannelId": "70faaff7-2c32-4b44-b27f-f0b6c484e6f3",
      "payorId": "ba08877f-9d96-41e4-9c26-44a872d856ae",
      "remoteId": "uniqueIdForRemoteEntity"
    }
  ],
  "watchlistOverrideComment": "Example reason for the watchlist status being overridden",
  "watchlistStatus": "watchlistStatus",
  "watchlistStatusUpdatedTimestamp": "2019-01-20T09:00:00+00:00"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|company|[GetPayeeListResponseCompanyV4](#schemagetpayeelistresponsecompanyv4)|false|none|none|
|country|string|false|none|Valid ISO 3166 2 character country code. See the <a href="https://www.iso.org/iso-3166-country-codes.html" target="_blank" a>ISO specification</a> for details.|
|created|string(date-time)|false|none|none|
|disabled|boolean|false|none|none|
|disabledComment|string|false|none|none|
|disabledUpdatedTimestamp|string(date-time)|false|none|none|
|displayName|string|false|none|none|
|email|string(email) \| null|false|none|none|
|individual|[GetPayeeListResponseIndividualV4](#schemagetpayeelistresponseindividualv4)|false|none|none|
|language|string|false|none|An IETF BCP 47 language code which has been configured for use within this Velo environment.<BR><br>See the /v1/supportedLanguages endpoint to list the available codes for an environment.<br>|
|onboardedStatus|string|false|none|Payee onboarded status. One of the following values: CREATED, INVITED, REGISTERED, ONBOARDED|
|payeeId|string(uuid)|false|read-only|none|
|payeeType|string|false|none|Type of Payee. One of the following values: Individual, Company|
|payorRefs|[[PayeePayorRefV4](#schemapayeepayorrefv4)]|false|read-only|none|
|watchlistOverrideComment|string \| null|false|none|none|
|watchlistStatus|string|false|none|Current watchlist status. One of the following values: NONE, PENDING, REVIEW, PASSED, FAILED|
|watchlistStatusUpdatedTimestamp|string(date_time) \| null|false|read-only|none|

<h2 id="tocS_GetPaymentsForPayoutResponseV3">GetPaymentsForPayoutResponseV3</h2>
<!-- backwards compatibility -->
<a id="schemagetpaymentsforpayoutresponsev3"></a>
<a id="schema_GetPaymentsForPayoutResponseV3"></a>
<a id="tocSgetpaymentsforpayoutresponsev3"></a>
<a id="tocsgetpaymentsforpayoutresponsev3"></a>

```json
{
  "content": [
    {
      "accountName": "My Account Name",
      "accountNumber": "123123232323",
      "countryCode": "US",
      "events": [
        {
          "accountName": "My account",
          "accountNumber": "123123123",
          "eventDateTime": "2000-01-23T04:56:07.000+00:00",
          "eventId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
          "eventType": "eventType",
          "iban": "DE89 3704 0044 0532 0130 00",
          "paymentAmount": 1299,
          "paymentCurrency": "paymentCurrency",
          "principal": "Prinicple example",
          "routingNumber": "123123123",
          "sourceAmount": 1299,
          "sourceCurrency": "sourceCurrency"
        },
        {
          "accountName": "My account",
          "accountNumber": "123123123",
          "eventDateTime": "2000-01-23T04:56:07.000+00:00",
          "eventId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
          "eventType": "eventType",
          "iban": "DE89 3704 0044 0532 0130 00",
          "paymentAmount": 1299,
          "paymentCurrency": "paymentCurrency",
          "principal": "Prinicple example",
          "routingNumber": "123123123",
          "sourceAmount": 1299,
          "sourceCurrency": "sourceCurrency"
        }
      ],
      "filenameReference": "file ref",
      "fundingStatus": "fundingStatus",
      "iban": "DE89 3704 0044 0532 0130 00",
      "individualIdentificationNumber": "1231231adf",
      "invertedRate": 1.4658129,
      "payeeId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "paymentAmount": 0,
      "paymentChannelId": "123asdf",
      "paymentChannelName": "My Payment Channel",
      "paymentCurrency": "paymentCurrency",
      "paymentId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "paymentMemo": "Payment memo",
      "paymentScheme": "paymentScheme",
      "payorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "payorName": "payorName",
      "payorPaymentId": "123123asdf",
      "quoteId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "railsBatchId": "railsBatchId",
      "railsId": "asdf123",
      "railsPaymentId": "railsPaymentId",
      "rate": 6.0274563,
      "rejectionReason": "rejectionReason",
      "remoteId": "aasdf123",
      "returnCost": 1232,
      "returnReason": "Some Reason Value",
      "routingNumber": "123123123123",
      "sourceAccountId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "sourceAccountName": "My Account",
      "sourceAmount": 12345,
      "sourceCurrency": "sourceCurrency",
      "status": "status",
      "submittedDateTime": "2000-01-23T04:56:07.000+00:00",
      "traceNumber": "abodu123"
    },
    {
      "accountName": "My Account Name",
      "accountNumber": "123123232323",
      "countryCode": "US",
      "events": [
        {
          "accountName": "My account",
          "accountNumber": "123123123",
          "eventDateTime": "2000-01-23T04:56:07.000+00:00",
          "eventId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
          "eventType": "eventType",
          "iban": "DE89 3704 0044 0532 0130 00",
          "paymentAmount": 1299,
          "paymentCurrency": "paymentCurrency",
          "principal": "Prinicple example",
          "routingNumber": "123123123",
          "sourceAmount": 1299,
          "sourceCurrency": "sourceCurrency"
        },
        {
          "accountName": "My account",
          "accountNumber": "123123123",
          "eventDateTime": "2000-01-23T04:56:07.000+00:00",
          "eventId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
          "eventType": "eventType",
          "iban": "DE89 3704 0044 0532 0130 00",
          "paymentAmount": 1299,
          "paymentCurrency": "paymentCurrency",
          "principal": "Prinicple example",
          "routingNumber": "123123123",
          "sourceAmount": 1299,
          "sourceCurrency": "sourceCurrency"
        }
      ],
      "filenameReference": "file ref",
      "fundingStatus": "fundingStatus",
      "iban": "DE89 3704 0044 0532 0130 00",
      "individualIdentificationNumber": "1231231adf",
      "invertedRate": 1.4658129,
      "payeeId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "paymentAmount": 0,
      "paymentChannelId": "123asdf",
      "paymentChannelName": "My Payment Channel",
      "paymentCurrency": "paymentCurrency",
      "paymentId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "paymentMemo": "Payment memo",
      "paymentScheme": "paymentScheme",
      "payorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "payorName": "payorName",
      "payorPaymentId": "123123asdf",
      "quoteId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "railsBatchId": "railsBatchId",
      "railsId": "asdf123",
      "railsPaymentId": "railsPaymentId",
      "rate": 6.0274563,
      "rejectionReason": "rejectionReason",
      "remoteId": "aasdf123",
      "returnCost": 1232,
      "returnReason": "Some Reason Value",
      "routingNumber": "123123123123",
      "sourceAccountId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "sourceAccountName": "My Account",
      "sourceAmount": 12345,
      "sourceCurrency": "sourceCurrency",
      "status": "status",
      "submittedDateTime": "2000-01-23T04:56:07.000+00:00",
      "traceNumber": "abodu123"
    }
  ],
  "links": [
    {
      "href": "https://example.com",
      "rel": "first"
    },
    {
      "href": "https://example.com",
      "rel": "first"
    }
  ],
  "page": {
    "numberOfElements": 12,
    "page": 1,
    "pageSize": 25,
    "totalElements": 12,
    "totalPages": 10
  },
  "summary": {
    "confirmedPayments": 123,
    "failedPayments": 0,
    "incompletePayments": 123,
    "instructedDateTime": "2000-01-23T04:56:07.000+00:00",
    "payoutMemo": "Payment Memo value",
    "payoutStatus": "payoutStatus",
    "releasedPayments": 123,
    "submittedDateTime": "2000-01-23T04:56:07.000+00:00",
    "totalPayments": 123,
    "withdrawnDateTime": "2000-01-23T04:56:07.000+00:00"
  }
}
```

List Payments for payout

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|[[PaymentResponseV3](#schemapaymentresponsev3)]|false|none|none|
|links|[[GetPayoutsResponseV3_links](#schemagetpayoutsresponsev3_links)]|false|none|none|
|page|[GetPaymentsForPayoutResponseV3_page](#schemagetpaymentsforpayoutresponsev3_page)|false|none|none|
|summary|[GetPaymentsForPayoutResponseV3_summary](#schemagetpaymentsforpayoutresponsev3_summary)|false|none|none|

<h2 id="tocS_GetPaymentsForPayoutResponseV3_page">GetPaymentsForPayoutResponseV3_page</h2>
<!-- backwards compatibility -->
<a id="schemagetpaymentsforpayoutresponsev3_page"></a>
<a id="schema_GetPaymentsForPayoutResponseV3_page"></a>
<a id="tocSgetpaymentsforpayoutresponsev3_page"></a>
<a id="tocsgetpaymentsforpayoutresponsev3_page"></a>

```json
{
  "numberOfElements": 12,
  "page": 1,
  "pageSize": 25,
  "totalElements": 12,
  "totalPages": 10
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|numberOfElements|integer|false|none|none|
|page|integer|false|none|none|
|pageSize|integer|false|none|none|
|totalElements|integer|false|none|none|
|totalPages|integer|false|none|none|

<h2 id="tocS_GetPaymentsForPayoutResponseV3_summary">GetPaymentsForPayoutResponseV3_summary</h2>
<!-- backwards compatibility -->
<a id="schemagetpaymentsforpayoutresponsev3_summary"></a>
<a id="schema_GetPaymentsForPayoutResponseV3_summary"></a>
<a id="tocSgetpaymentsforpayoutresponsev3_summary"></a>
<a id="tocsgetpaymentsforpayoutresponsev3_summary"></a>

```json
{
  "confirmedPayments": 123,
  "failedPayments": 0,
  "incompletePayments": 123,
  "instructedDateTime": "2000-01-23T04:56:07.000+00:00",
  "payoutMemo": "Payment Memo value",
  "payoutStatus": "payoutStatus",
  "releasedPayments": 123,
  "submittedDateTime": "2000-01-23T04:56:07.000+00:00",
  "totalPayments": 123,
  "withdrawnDateTime": "2000-01-23T04:56:07.000+00:00"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|confirmedPayments|integer|false|none|The count of payments within the payout which have been confirmed.|
|failedPayments|integer|false|none|The count of payments within the payout which have failed or been returned.|
|incompletePayments|integer|false|none|The count of payments within the payout which are incomplete.|
|instructedDateTime|string(date-time)|false|none|The date/time at which the payout was instructed.|
|payoutMemo|string|false|none|The memo attached to the payout.|
|payoutStatus|string|false|none|The current status of the payout. One of the following values: ACCEPTED, REJECTED, SUBMITTED, QUOTED, INSTRUCTED, COMPLETED, INCOMPLETE, CONFIRMED, WITHDRAWN|
|releasedPayments|integer|false|none|The count of payments within the payout which have been released.|
|submittedDateTime|string(date-time)|false|none|The date/time at which the payout was submitted.|
|totalPayments|integer|false|none|The count of payments within the payout.|
|withdrawnDateTime|string(date-time)|false|none|The date/time at which the payout was withdrawn.|

<h2 id="tocS_GetPaymentsForPayoutResponseV4">GetPaymentsForPayoutResponseV4</h2>
<!-- backwards compatibility -->
<a id="schemagetpaymentsforpayoutresponsev4"></a>
<a id="schema_GetPaymentsForPayoutResponseV4"></a>
<a id="tocSgetpaymentsforpayoutresponsev4"></a>
<a id="tocsgetpaymentsforpayoutresponsev4"></a>

```json
{
  "content": [
    {
      "accountName": "My Account Name",
      "accountNumber": "123123232323",
      "autoWithdrawnReasonCode": "autoWithdrawnReasonCode",
      "countryCode": "US",
      "events": [
        {
          "accountName": "accountName",
          "accountNumber": "accountNumber",
          "eventDateTime": "2000-01-23T04:56:07.000+00:00",
          "eventId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
          "eventType": "eventType",
          "iban": "iban",
          "paymentAmount": 1299,
          "paymentCurrency": "EUR",
          "principal": "principal",
          "routingNumber": "routingNumber",
          "scheduledAt": "2000-01-23T04:56:07.000+00:00",
          "scheduledBy": "Aphra Behn",
          "scheduledFor": "2000-01-23T04:56:07.000+00:00",
          "sourceAmount": 1299,
          "sourceCurrency": "EUR"
        },
        {
          "accountName": "accountName",
          "accountNumber": "accountNumber",
          "eventDateTime": "2000-01-23T04:56:07.000+00:00",
          "eventId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
          "eventType": "eventType",
          "iban": "iban",
          "paymentAmount": 1299,
          "paymentCurrency": "EUR",
          "principal": "principal",
          "routingNumber": "routingNumber",
          "scheduledAt": "2000-01-23T04:56:07.000+00:00",
          "scheduledBy": "Aphra Behn",
          "scheduledFor": "2000-01-23T04:56:07.000+00:00",
          "sourceAmount": 1299,
          "sourceCurrency": "EUR"
        }
      ],
      "filenameReference": "file ref",
      "fundingStatus": "fundingStatus",
      "iban": "DE89 3704 0044 0532 0130 00",
      "individualIdentificationNumber": "1231231adf",
      "invertedRate": 3.616076749251911,
      "isPaymentCcyBaseCcy": true,
      "payeeAddressCountryCode": "US",
      "payeeId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "paymentAmount": 7,
      "paymentChannelId": "123asdf",
      "paymentChannelName": "My Payment Channel",
      "paymentCurrency": "EUR",
      "paymentId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "paymentMemo": "Payment memo",
      "paymentMetadata": "sample metadata",
      "paymentScheme": "paymentScheme",
      "paymentTrackingReference": "paymentTrackingReference",
      "payorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "payorName": "payorName",
      "payorPaymentId": "123123asdf",
      "payout": {
        "payoutFrom": {
          "dbaName": "dbaName",
          "payorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
          "payorName": "payorName",
          "principal": "principal",
          "principalId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
        },
        "payoutId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
        "payoutTo": {
          "dbaName": "dbaName",
          "payorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
          "payorName": "payorName",
          "principal": "principal",
          "principalId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
        }
      },
      "postInstructFxInfo": {
        "fxMode": "MANUAL",
        "fxStatus": "INITIATED",
        "fxStatusUpdatedAt": "2000-01-23T04:56:07.000+00:00",
        "fxTransactionReference": "AB123GHI"
      },
      "quoteId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "railsBatchId": "railsBatchId",
      "railsId": "asdf123",
      "railsPaymentId": "railsPaymentId",
      "rate": 9.301444243932576,
      "rejectionReason": "rejectionReason",
      "remoteId": "aasdf123",
      "remoteSystemId": "REMOTE_SYSTEM_ID",
      "remoteSystemPaymentId": "remoteSystemPaymentId",
      "returnCost": 1232,
      "returnReason": "Some Reason Value",
      "routingNumber": "123123123123",
      "schedule": {
        "notificationsEnabled": true,
        "scheduleStatus": "SCHEDULED",
        "scheduledAt": "2000-01-23T04:56:07.000+00:00",
        "scheduledBy": "Aphra Behn",
        "scheduledByPrincipalId": "8946953b-1e3b-49cf-9da4-b704cbb78f3e",
        "scheduledFor": "2000-01-23T04:56:07.000+00:00"
      },
      "sourceAccountId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "sourceAccountName": "My Account",
      "sourceAmount": 12345,
      "sourceCurrency": "EUR",
      "status": "status",
      "submittedDateTime": "2000-01-23T04:56:07.000+00:00",
      "traceNumber": "abodu123",
      "transmissionType": "transmissionType",
      "withdrawable": true,
      "withdrawnReason": "withdrawnReason"
    },
    {
      "accountName": "My Account Name",
      "accountNumber": "123123232323",
      "autoWithdrawnReasonCode": "autoWithdrawnReasonCode",
      "countryCode": "US",
      "events": [
        {
          "accountName": "accountName",
          "accountNumber": "accountNumber",
          "eventDateTime": "2000-01-23T04:56:07.000+00:00",
          "eventId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
          "eventType": "eventType",
          "iban": "iban",
          "paymentAmount": 1299,
          "paymentCurrency": "EUR",
          "principal": "principal",
          "routingNumber": "routingNumber",
          "scheduledAt": "2000-01-23T04:56:07.000+00:00",
          "scheduledBy": "Aphra Behn",
          "scheduledFor": "2000-01-23T04:56:07.000+00:00",
          "sourceAmount": 1299,
          "sourceCurrency": "EUR"
        },
        {
          "accountName": "accountName",
          "accountNumber": "accountNumber",
          "eventDateTime": "2000-01-23T04:56:07.000+00:00",
          "eventId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
          "eventType": "eventType",
          "iban": "iban",
          "paymentAmount": 1299,
          "paymentCurrency": "EUR",
          "principal": "principal",
          "routingNumber": "routingNumber",
          "scheduledAt": "2000-01-23T04:56:07.000+00:00",
          "scheduledBy": "Aphra Behn",
          "scheduledFor": "2000-01-23T04:56:07.000+00:00",
          "sourceAmount": 1299,
          "sourceCurrency": "EUR"
        }
      ],
      "filenameReference": "file ref",
      "fundingStatus": "fundingStatus",
      "iban": "DE89 3704 0044 0532 0130 00",
      "individualIdentificationNumber": "1231231adf",
      "invertedRate": 3.616076749251911,
      "isPaymentCcyBaseCcy": true,
      "payeeAddressCountryCode": "US",
      "payeeId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "paymentAmount": 7,
      "paymentChannelId": "123asdf",
      "paymentChannelName": "My Payment Channel",
      "paymentCurrency": "EUR",
      "paymentId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "paymentMemo": "Payment memo",
      "paymentMetadata": "sample metadata",
      "paymentScheme": "paymentScheme",
      "paymentTrackingReference": "paymentTrackingReference",
      "payorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "payorName": "payorName",
      "payorPaymentId": "123123asdf",
      "payout": {
        "payoutFrom": {
          "dbaName": "dbaName",
          "payorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
          "payorName": "payorName",
          "principal": "principal",
          "principalId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
        },
        "payoutId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
        "payoutTo": {
          "dbaName": "dbaName",
          "payorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
          "payorName": "payorName",
          "principal": "principal",
          "principalId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
        }
      },
      "postInstructFxInfo": {
        "fxMode": "MANUAL",
        "fxStatus": "INITIATED",
        "fxStatusUpdatedAt": "2000-01-23T04:56:07.000+00:00",
        "fxTransactionReference": "AB123GHI"
      },
      "quoteId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "railsBatchId": "railsBatchId",
      "railsId": "asdf123",
      "railsPaymentId": "railsPaymentId",
      "rate": 9.301444243932576,
      "rejectionReason": "rejectionReason",
      "remoteId": "aasdf123",
      "remoteSystemId": "REMOTE_SYSTEM_ID",
      "remoteSystemPaymentId": "remoteSystemPaymentId",
      "returnCost": 1232,
      "returnReason": "Some Reason Value",
      "routingNumber": "123123123123",
      "schedule": {
        "notificationsEnabled": true,
        "scheduleStatus": "SCHEDULED",
        "scheduledAt": "2000-01-23T04:56:07.000+00:00",
        "scheduledBy": "Aphra Behn",
        "scheduledByPrincipalId": "8946953b-1e3b-49cf-9da4-b704cbb78f3e",
        "scheduledFor": "2000-01-23T04:56:07.000+00:00"
      },
      "sourceAccountId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "sourceAccountName": "My Account",
      "sourceAmount": 12345,
      "sourceCurrency": "EUR",
      "status": "status",
      "submittedDateTime": "2000-01-23T04:56:07.000+00:00",
      "traceNumber": "abodu123",
      "transmissionType": "transmissionType",
      "withdrawable": true,
      "withdrawnReason": "withdrawnReason"
    }
  ],
  "links": [
    {
      "href": "href",
      "rel": "rel"
    },
    {
      "href": "href",
      "rel": "rel"
    }
  ],
  "page": {
    "numberOfElements": 0,
    "page": 5,
    "pageSize": 5,
    "totalElements": 6,
    "totalPages": 1
  },
  "summary": {
    "confirmedPayments": 6,
    "incompletePayments": 5,
    "instructed": {
      "principal": "principal",
      "principalId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
    },
    "instructedDateTime": "2000-01-23T04:56:07.000+00:00",
    "payoutFrom": {
      "dbaName": "dbaName",
      "payorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "payorName": "payorName",
      "principal": "principal",
      "principalId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
    },
    "payoutMemo": "payoutMemo",
    "payoutStatus": "payoutStatus",
    "payoutTo": {
      "dbaName": "dbaName",
      "payorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "payorName": "payorName",
      "principal": "principal",
      "principalId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
    },
    "payoutType": "payoutType",
    "quoted": {
      "principal": "principal",
      "principalId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
    },
    "quotedDateTime": "2000-01-23T04:56:07.000+00:00",
    "releasedPayments": 1,
    "returnedPayments": 5,
    "schedule": {
      "notificationsEnabled": true,
      "scheduleStatus": "SCHEDULED",
      "scheduledAt": "2000-01-23T04:56:07.000+00:00",
      "scheduledBy": "Aphra Behn",
      "scheduledByPrincipalId": "8946953b-1e3b-49cf-9da4-b704cbb78f3e",
      "scheduledFor": "2000-01-23T04:56:07.000+00:00"
    },
    "submittedDateTime": "2000-01-23T04:56:07.000+00:00",
    "submitting": {
      "dbaName": "dbaName",
      "payorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "payorName": "payorName",
      "principal": "principal",
      "principalId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
    },
    "totalPayments": 0,
    "withdrawn": {
      "principal": "principal",
      "principalId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
    },
    "withdrawnDateTime": "2000-01-23T04:56:07.000+00:00",
    "withdrawnPayments": 2
  }
}
```

List Payments for payout

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|[[PaymentResponseV4](#schemapaymentresponsev4)]|false|none|none|
|links|[[PagedPayeeResponseV3_links](#schemapagedpayeeresponsev3_links)]|false|none|none|
|page|[PagedPayeeInvitationStatusResponseV3_page](#schemapagedpayeeinvitationstatusresponsev3_page)|false|none|none|
|summary|[GetPaymentsForPayoutResponseV4_summary](#schemagetpaymentsforpayoutresponsev4_summary)|false|none|none|

<h2 id="tocS_GetPaymentsForPayoutResponseV4_summary">GetPaymentsForPayoutResponseV4_summary</h2>
<!-- backwards compatibility -->
<a id="schemagetpaymentsforpayoutresponsev4_summary"></a>
<a id="schema_GetPaymentsForPayoutResponseV4_summary"></a>
<a id="tocSgetpaymentsforpayoutresponsev4_summary"></a>
<a id="tocsgetpaymentsforpayoutresponsev4_summary"></a>

```json
{
  "confirmedPayments": 6,
  "incompletePayments": 5,
  "instructed": {
    "principal": "principal",
    "principalId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
  },
  "instructedDateTime": "2000-01-23T04:56:07.000+00:00",
  "payoutFrom": {
    "dbaName": "dbaName",
    "payorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "payorName": "payorName",
    "principal": "principal",
    "principalId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
  },
  "payoutMemo": "payoutMemo",
  "payoutStatus": "payoutStatus",
  "payoutTo": {
    "dbaName": "dbaName",
    "payorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "payorName": "payorName",
    "principal": "principal",
    "principalId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
  },
  "payoutType": "payoutType",
  "quoted": {
    "principal": "principal",
    "principalId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
  },
  "quotedDateTime": "2000-01-23T04:56:07.000+00:00",
  "releasedPayments": 1,
  "returnedPayments": 5,
  "schedule": {
    "notificationsEnabled": true,
    "scheduleStatus": "SCHEDULED",
    "scheduledAt": "2000-01-23T04:56:07.000+00:00",
    "scheduledBy": "Aphra Behn",
    "scheduledByPrincipalId": "8946953b-1e3b-49cf-9da4-b704cbb78f3e",
    "scheduledFor": "2000-01-23T04:56:07.000+00:00"
  },
  "submittedDateTime": "2000-01-23T04:56:07.000+00:00",
  "submitting": {
    "dbaName": "dbaName",
    "payorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "payorName": "payorName",
    "principal": "principal",
    "principalId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
  },
  "totalPayments": 0,
  "withdrawn": {
    "principal": "principal",
    "principalId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
  },
  "withdrawnDateTime": "2000-01-23T04:56:07.000+00:00",
  "withdrawnPayments": 2
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|confirmedPayments|integer|false|none|The count of payments within the payout which have been confirmed.|
|incompletePayments|integer|false|none|The count of payments within the payout which are incomplete.|
|instructed|[PayoutPrincipal](#schemapayoutprincipal)|false|none|Details of principal participating in a payout.|
|instructedDateTime|string(date-time)|false|none|The date/time at which the payout was instructed.|
|payoutFrom|[PayoutPayor](#schemapayoutpayor)|false|none|Details of payor and principal participating in a payout.|
|payoutMemo|string|false|none|The memo attached to the payout.|
|payoutStatus|string|false|none|Current status of the Payout. One of the following values: ACCEPTED, REJECTED, SUBMITTED, QUOTED, INSTRUCTED, COMPLETED, INCOMPLETE, CONFIRMED, WITHDRAWN|
|payoutTo|[PayoutPayor](#schemapayoutpayor)|false|none|Details of payor and principal participating in a payout.|
|payoutType|string|false|none|The type of payout. One of the following values: STANDARD, AS, ON_BEHALF_OF|
|quoted|[PayoutPrincipal](#schemapayoutprincipal)|false|none|Details of principal participating in a payout.|
|quotedDateTime|string(date-time)|false|none|The date/time at which the payout was quoted.|
|releasedPayments|integer|false|none|The count of payments within the payout which have been released.|
|returnedPayments|integer|false|none|The count of payments within the payout which have been returned.|
|schedule|[PayoutSchedule](#schemapayoutschedule)|false|none|Details relating to a payout that was executed via a schedule or is still waiting to be executed|
|submittedDateTime|string(date-time)|false|none|The date/time at which the payout was submitted.|
|submitting|[PayoutPayor](#schemapayoutpayor)|false|none|Details of payor and principal participating in a payout.|
|totalPayments|integer|false|none|The count of payments within the payout.|
|withdrawn|[PayoutPrincipal](#schemapayoutprincipal)|false|none|Details of principal participating in a payout.|
|withdrawnDateTime|string(date-time)|false|none|none|
|withdrawnPayments|integer|false|none|The count of payments within the payout which have been withdrawn.|

<h2 id="tocS_GetPayoutStatistics">GetPayoutStatistics</h2>
<!-- backwards compatibility -->
<a id="schemagetpayoutstatistics"></a>
<a id="schema_GetPayoutStatistics"></a>
<a id="tocSgetpayoutstatistics"></a>
<a id="tocsgetpayoutstatistics"></a>

```json
{
  "thisMonthFailedPaymentsCount": 6,
  "thisMonthPayoutsCount": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|thisMonthFailedPaymentsCount|integer|true|none|none|
|thisMonthPayoutsCount|integer|true|none|none|

<h2 id="tocS_GetPayoutsResponse">GetPayoutsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetpayoutsresponse"></a>
<a id="schema_GetPayoutsResponse"></a>
<a id="tocSgetpayoutsresponse"></a>
<a id="tocsgetpayoutsresponse"></a>

```json
{
  "content": [
    {
      "dateTime": "2000-01-23T04:56:07.000+00:00",
      "fxSummaries": [
        {
          "creationDateTime": "2000-01-23T04:56:07.000+00:00",
          "fundingStatus": "fundingStatus",
          "invertedRate": 123.23,
          "paymentCurrency": "EUR",
          "quoteId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
          "rate": 123.23,
          "sourceCurrency": "EUR",
          "status": "status",
          "totalCost": 5,
          "totalPaymentAmount": 34235
        },
        {
          "creationDateTime": "2000-01-23T04:56:07.000+00:00",
          "fundingStatus": "fundingStatus",
          "invertedRate": 123.23,
          "paymentCurrency": "EUR",
          "quoteId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
          "rate": 123.23,
          "sourceCurrency": "EUR",
          "status": "status",
          "totalCost": 5,
          "totalPaymentAmount": 34235
        }
      ],
      "instructedDateTime": "instructedDateTime",
      "payorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "payorName": "payorName",
      "payoutId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "payoutMemo": "payoutMemo",
      "payoutType": "payoutType",
      "schedule": {
        "notificationsEnabled": true,
        "scheduleStatus": "SCHEDULED",
        "scheduledAt": "2000-01-23T04:56:07.000+00:00",
        "scheduledBy": "Aphra Behn",
        "scheduledByPrincipalId": "8946953b-1e3b-49cf-9da4-b704cbb78f3e",
        "scheduledFor": "2000-01-23T04:56:07.000+00:00"
      },
      "sourceAccountSummary": [
        {
          "currency": "EUR",
          "sourceAccountId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
          "totalCost": 3344
        },
        {
          "currency": "EUR",
          "sourceAccountId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
          "totalCost": 3344
        }
      ],
      "status": "status",
      "submittedDateTime": "submittedDateTime",
      "totalIncompletePayments": 6,
      "totalPayments": 0,
      "totalReturnedPayments": 1,
      "totalWithdrawnPayments": 5,
      "withdrawnDateTime": "2000-01-23T04:56:07.000+00:00"
    },
    {
      "dateTime": "2000-01-23T04:56:07.000+00:00",
      "fxSummaries": [
        {
          "creationDateTime": "2000-01-23T04:56:07.000+00:00",
          "fundingStatus": "fundingStatus",
          "invertedRate": 123.23,
          "paymentCurrency": "EUR",
          "quoteId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
          "rate": 123.23,
          "sourceCurrency": "EUR",
          "status": "status",
          "totalCost": 5,
          "totalPaymentAmount": 34235
        },
        {
          "creationDateTime": "2000-01-23T04:56:07.000+00:00",
          "fundingStatus": "fundingStatus",
          "invertedRate": 123.23,
          "paymentCurrency": "EUR",
          "quoteId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
          "rate": 123.23,
          "sourceCurrency": "EUR",
          "status": "status",
          "totalCost": 5,
          "totalPaymentAmount": 34235
        }
      ],
      "instructedDateTime": "instructedDateTime",
      "payorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "payorName": "payorName",
      "payoutId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "payoutMemo": "payoutMemo",
      "payoutType": "payoutType",
      "schedule": {
        "notificationsEnabled": true,
        "scheduleStatus": "SCHEDULED",
        "scheduledAt": "2000-01-23T04:56:07.000+00:00",
        "scheduledBy": "Aphra Behn",
        "scheduledByPrincipalId": "8946953b-1e3b-49cf-9da4-b704cbb78f3e",
        "scheduledFor": "2000-01-23T04:56:07.000+00:00"
      },
      "sourceAccountSummary": [
        {
          "currency": "EUR",
          "sourceAccountId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
          "totalCost": 3344
        },
        {
          "currency": "EUR",
          "sourceAccountId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
          "totalCost": 3344
        }
      ],
      "status": "status",
      "submittedDateTime": "submittedDateTime",
      "totalIncompletePayments": 6,
      "totalPayments": 0,
      "totalReturnedPayments": 1,
      "totalWithdrawnPayments": 5,
      "withdrawnDateTime": "2000-01-23T04:56:07.000+00:00"
    }
  ],
  "links": [
    {
      "href": "href",
      "rel": "rel"
    },
    {
      "href": "href",
      "rel": "rel"
    }
  ],
  "page": {
    "numberOfElements": 0,
    "page": 5,
    "pageSize": 5,
    "totalElements": 6,
    "totalPages": 1
  }
}
```

List Payouts Response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|[[PayoutSummaryAudit](#schemapayoutsummaryaudit)]|false|none|none|
|links|[[PagedPayeeResponseV3_links](#schemapagedpayeeresponsev3_links)]|false|none|none|
|page|[PagedPayeeInvitationStatusResponseV3_page](#schemapagedpayeeinvitationstatusresponsev3_page)|false|none|none|

<h2 id="tocS_GetPayoutsResponseV3">GetPayoutsResponseV3</h2>
<!-- backwards compatibility -->
<a id="schemagetpayoutsresponsev3"></a>
<a id="schema_GetPayoutsResponseV3"></a>
<a id="tocSgetpayoutsresponsev3"></a>
<a id="tocsgetpayoutsresponsev3"></a>

```json
{
  "content": [
    {
      "fxSummaries": [
        {
          "creationDateTime": "2000-01-23T04:56:07.000+00:00",
          "fundingStatus": "fundingStatus",
          "invertedRate": 1.12,
          "paymentCurrency": "paymentCurrency",
          "quoteId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
          "rate": 1.12,
          "sourceCurrency": "sourceCurrency",
          "status": "status",
          "totalCost": 1234,
          "totalPaymentAmount": 1234
        },
        {
          "creationDateTime": "2000-01-23T04:56:07.000+00:00",
          "fundingStatus": "fundingStatus",
          "invertedRate": 1.12,
          "paymentCurrency": "paymentCurrency",
          "quoteId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
          "rate": 1.12,
          "sourceCurrency": "sourceCurrency",
          "status": "status",
          "totalCost": 1234,
          "totalPaymentAmount": 1234
        }
      ],
      "instructedDateTime": "instructedDateTime",
      "payorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "payoutId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "payoutMemo": "payoutMemo",
      "sourceAccountSummary": [
        {
          "currency": "currency",
          "sourceAccountId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
          "totalCost": 3434
        },
        {
          "currency": "currency",
          "sourceAccountId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
          "totalCost": 3434
        }
      ],
      "status": "status",
      "submittedDateTime": "submittedDateTime",
      "totalFailedPayments": 123,
      "totalIncompletePayments": 123,
      "totalPayments": 123,
      "withdrawnDateTime": "withdrawnDateTime"
    },
    {
      "fxSummaries": [
        {
          "creationDateTime": "2000-01-23T04:56:07.000+00:00",
          "fundingStatus": "fundingStatus",
          "invertedRate": 1.12,
          "paymentCurrency": "paymentCurrency",
          "quoteId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
          "rate": 1.12,
          "sourceCurrency": "sourceCurrency",
          "status": "status",
          "totalCost": 1234,
          "totalPaymentAmount": 1234
        },
        {
          "creationDateTime": "2000-01-23T04:56:07.000+00:00",
          "fundingStatus": "fundingStatus",
          "invertedRate": 1.12,
          "paymentCurrency": "paymentCurrency",
          "quoteId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
          "rate": 1.12,
          "sourceCurrency": "sourceCurrency",
          "status": "status",
          "totalCost": 1234,
          "totalPaymentAmount": 1234
        }
      ],
      "instructedDateTime": "instructedDateTime",
      "payorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "payoutId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "payoutMemo": "payoutMemo",
      "sourceAccountSummary": [
        {
          "currency": "currency",
          "sourceAccountId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
          "totalCost": 3434
        },
        {
          "currency": "currency",
          "sourceAccountId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
          "totalCost": 3434
        }
      ],
      "status": "status",
      "submittedDateTime": "submittedDateTime",
      "totalFailedPayments": 123,
      "totalIncompletePayments": 123,
      "totalPayments": 123,
      "withdrawnDateTime": "withdrawnDateTime"
    }
  ],
  "links": [
    {
      "href": "https://example.com",
      "rel": "first"
    },
    {
      "href": "https://example.com",
      "rel": "first"
    }
  ],
  "page": {
    "numberOfElements": 12,
    "page": 1,
    "pageSize": 25,
    "totalElements": 123,
    "totalPages": 123
  }
}
```

List Payouts Response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|[[PayoutSummaryAuditV3](#schemapayoutsummaryauditv3)]|false|none|none|
|links|[[GetPayoutsResponseV3_links](#schemagetpayoutsresponsev3_links)]|false|none|none|
|page|[GetPayoutsResponseV3_page](#schemagetpayoutsresponsev3_page)|false|none|none|

<h2 id="tocS_GetPayoutsResponseV3_links">GetPayoutsResponseV3_links</h2>
<!-- backwards compatibility -->
<a id="schemagetpayoutsresponsev3_links"></a>
<a id="schema_GetPayoutsResponseV3_links"></a>
<a id="tocSgetpayoutsresponsev3_links"></a>
<a id="tocsgetpayoutsresponsev3_links"></a>

```json
{
  "href": "https://example.com",
  "rel": "first"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|href|string|false|none|none|
|rel|string|false|none|none|

<h2 id="tocS_GetPayoutsResponseV3_page">GetPayoutsResponseV3_page</h2>
<!-- backwards compatibility -->
<a id="schemagetpayoutsresponsev3_page"></a>
<a id="schema_GetPayoutsResponseV3_page"></a>
<a id="tocSgetpayoutsresponsev3_page"></a>
<a id="tocsgetpayoutsresponsev3_page"></a>

```json
{
  "numberOfElements": 12,
  "page": 1,
  "pageSize": 25,
  "totalElements": 123,
  "totalPages": 123
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|numberOfElements|integer|false|none|none|
|page|integer|false|none|none|
|pageSize|integer|false|none|none|
|totalElements|integer|false|none|none|
|totalPages|integer|false|none|none|

<h2 id="tocS_Iban">Iban</h2>
<!-- backwards compatibility -->
<a id="schemaiban"></a>
<a id="schema_Iban"></a>
<a id="tocSiban"></a>
<a id="tocsiban"></a>

```json
"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX1234"
```

Must match the regular expression ```^[A-Za-z0-9]+$```.

<h2 id="tocS_IndividualV3">IndividualV3</h2>
<!-- backwards compatibility -->
<a id="schemaindividualv3"></a>
<a id="schema_IndividualV3"></a>
<a id="tocSindividualv3"></a>
<a id="tocsindividualv3"></a>

```json
{
  "dateOfBirth": "1985-01-01",
  "name": {
    "firstName": "Bob",
    "lastName": "Smith",
    "otherNames": "A",
    "title": "Mr"
  },
  "nationalIdentification": "AB123456C"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dateOfBirth|string|true|read-only|If not authorized to view, value will be masked. Example: - XXXX-XX-XX|
|name|[IndividualV3_name](#schemaindividualv3_name)|true|none|none|
|nationalIdentification|string|false|read-only|If not authorized to view, value will be masked. Example: XXXXX1234|

<h2 id="tocS_IndividualV3_name">IndividualV3_name</h2>
<!-- backwards compatibility -->
<a id="schemaindividualv3_name"></a>
<a id="schema_IndividualV3_name"></a>
<a id="tocSindividualv3_name"></a>
<a id="tocsindividualv3_name"></a>

```json
{
  "firstName": "Bob",
  "lastName": "Smith",
  "otherNames": "A",
  "title": "Mr"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|firstName|string|true|none|none|
|lastName|string|true|none|none|
|otherNames|string|false|none|none|
|title|string|false|none|none|

<h2 id="tocS_IndividualV4">IndividualV4</h2>
<!-- backwards compatibility -->
<a id="schemaindividualv4"></a>
<a id="schema_IndividualV4"></a>
<a id="tocSindividualv4"></a>
<a id="tocsindividualv4"></a>

```json
{
  "dateOfBirth": "1985-01-01",
  "name": {
    "firstName": "Bob",
    "lastName": "Smith",
    "otherNames": "A",
    "title": "Mr"
  },
  "nationalIdentification": "AB123456C"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dateOfBirth|string|true|read-only|If not authorized to view, value will be masked. Example: - XXXX-XX-XX|
|name|[IndividualV3_name](#schemaindividualv3_name)|true|none|none|
|nationalIdentification|string|false|read-only|If not authorized to view, value will be masked. Example: XXXXX1234|

<h2 id="tocS_InstructPayoutRequestV3">InstructPayoutRequestV3</h2>
<!-- backwards compatibility -->
<a id="schemainstructpayoutrequestv3"></a>
<a id="schema_InstructPayoutRequestV3"></a>
<a id="tocSinstructpayoutrequestv3"></a>
<a id="tocsinstructpayoutrequestv3"></a>

```json
{
  "fxRateDegredationThresholdPercentage": 0.8008282
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fxRateDegredationThresholdPercentage|number(float)|false|none|Halt instruction if the FX rates have become worse since the last quote|

<h2 id="tocS_InvitationStatusV3">InvitationStatusV3</h2>
<!-- backwards compatibility -->
<a id="schemainvitationstatusv3"></a>
<a id="schema_InvitationStatusV3"></a>
<a id="tocSinvitationstatusv3"></a>
<a id="tocsinvitationstatusv3"></a>

```json
"string"
```

<h2 id="tocS_InvitationStatusV4">InvitationStatusV4</h2>
<!-- backwards compatibility -->
<a id="schemainvitationstatusv4"></a>
<a id="schema_InvitationStatusV4"></a>
<a id="tocSinvitationstatusv4"></a>
<a id="tocsinvitationstatusv4"></a>

```json
"string"
```

<h2 id="tocS_InvitePayeeRequestV3">InvitePayeeRequestV3</h2>
<!-- backwards compatibility -->
<a id="schemainvitepayeerequestv3"></a>
<a id="schema_InvitePayeeRequestV3"></a>
<a id="tocSinvitepayeerequestv3"></a>
<a id="tocsinvitepayeerequestv3"></a>

```json
{
  "payorId": "9ac75325-5dcd-42d5-b992-175d7e0a035e"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|payorId|string(uuid)|true|none|none|

<h2 id="tocS_InvitePayeeRequestV4">InvitePayeeRequestV4</h2>
<!-- backwards compatibility -->
<a id="schemainvitepayeerequestv4"></a>
<a id="schema_InvitePayeeRequestV4"></a>
<a id="tocSinvitepayeerequestv4"></a>
<a id="tocsinvitepayeerequestv4"></a>

```json
{
  "payorId": "9ac75325-5dcd-42d5-b992-175d7e0a035e"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|payorId|string(uuid)|true|none|none|

<h2 id="tocS_InviteUserRequest">InviteUserRequest</h2>
<!-- backwards compatibility -->
<a id="schemainviteuserrequest"></a>
<a id="schema_InviteUserRequest"></a>
<a id="tocSinviteuserrequest"></a>
<a id="tocsinviteuserrequest"></a>

```json
{
  "email": "foo@example.com",
  "entityId": "7fffa261-ac68-49e6-b605-d24a444d9206",
  "firstName": "John",
  "lastName": "Doe",
  "mfaType": "TOTP",
  "primaryContactNumber": "11235555555",
  "roles": [
    "velo.payor.admin"
  ],
  "secondaryContactNumber": "11235555550",
  "smsNumber": "11235555555",
  "userType": "PAYEE",
  "verificationCode": "123456"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string(email)|true|none|the email address of the invited user|
|entityId|string(uuid) \| null|false|none|The payorId or payeeId or null if the user is a backoffice admin<br>|
|firstName|string|false|none|none|
|lastName|string|false|none|none|
|mfaType|string|true|none|<p>The MFA type that the user will use</p><br><p>The type may be conditional on the role(s) the user has</p><br>|
|primaryContactNumber|string|true|none|The main contact number for the user<br>|
|roles|[string]|true|none|The role(s) for the user<br>The role must exist<br>The role can be a custom role or a system role but the invoker must have the permissions to assign the role<br>System roles are: velo.backoffice.admin, velo.payor.master_admin, velo.payor.admin, velo.payor.support, velo.payee.admin, velo.payee.support<br>|
|secondaryContactNumber|string \| null|false|none|The secondary contact number for the user<br>|
|smsNumber|string|true|none|The phone number of a device that the user can receive sms messages on<br>|
|userType|string|false|none|Will default to PAYOR if not provided but entityId is provided|
|verificationCode|string \| null|false|none|Optional property that MUST be suppied when manually verifying a user<br>The user's smsNumber is registered via a separate endpoint and an OTP sent to them<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|mfaType|SMS|
|mfaType|YUBIKEY|
|mfaType|TOTP|
|userType|BACKOFFICE|
|userType|PAYOR|
|userType|PAYEE|

<h2 id="tocS_IsoCountryCode">IsoCountryCode</h2>
<!-- backwards compatibility -->
<a id="schemaisocountrycode"></a>
<a id="schema_IsoCountryCode"></a>
<a id="tocSisocountrycode"></a>
<a id="tocsisocountrycode"></a>

```json
"US"
```

Valid ISO 3166 2 character country code. See the <a href="https://www.iso.org/iso-3166-country-codes.html" target="_blank" a>ISO specification</a> for details.

<h2 id="tocS_IsoCurrency">IsoCurrency</h2>
<!-- backwards compatibility -->
<a id="schemaisocurrency"></a>
<a id="schema_IsoCurrency"></a>
<a id="tocSisocurrency"></a>
<a id="tocsisocurrency"></a>

```json
"USD"
```

Valid ISO 4217 3 letter currency code. See the <a href="https://www.iso.org/iso-4217-currency-codes.html" target="_blank" a>ISO specification</a> for details.

<h2 id="tocS_KycState">KycState</h2>
<!-- backwards compatibility -->
<a id="schemakycstate"></a>
<a id="schema_KycState"></a>
<a id="tocSkycstate"></a>
<a id="tocskycstate"></a>

```json
"PASSED_KYC"
```

The kyc state of the payor. One of the following values: FAILED_KYC, PASSED_KYC, REQUIRES_KYC

<h2 id="tocS_LanguageV3">LanguageV3</h2>
<!-- backwards compatibility -->
<a id="schemalanguagev3"></a>
<a id="schema_LanguageV3"></a>
<a id="tocSlanguagev3"></a>
<a id="tocslanguagev3"></a>

```json
"en-US"
```

An IETF BCP 47 language code which has been configured for use within this Velo environment.<BR>
See the /v1/supportedLanguages endpoint to list the available codes for an environment.

<h2 id="tocS_LanguageV4">LanguageV4</h2>
<!-- backwards compatibility -->
<a id="schemalanguagev4"></a>
<a id="schema_LanguageV4"></a>
<a id="tocSlanguagev4"></a>
<a id="tocslanguagev4"></a>

```json
"en-US"
```

An IETF BCP 47 language code which has been configured for use within this Velo environment.<BR>
See the /v1/supportedLanguages endpoint to list the available codes for an environment.

<h2 id="tocS_LinkForResponse">LinkForResponse</h2>
<!-- backwards compatibility -->
<a id="schemalinkforresponse"></a>
<a id="schema_LinkForResponse"></a>
<a id="tocSlinkforresponse"></a>
<a id="tocslinkforresponse"></a>

```json
{
  "href": "href",
  "rel": "rel"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|href|string|false|none|none|
|rel|string|false|none|none|

<h2 id="tocS_ListFundingAccountsResponseV2">ListFundingAccountsResponseV2</h2>
<!-- backwards compatibility -->
<a id="schemalistfundingaccountsresponsev2"></a>
<a id="schema_ListFundingAccountsResponseV2"></a>
<a id="tocSlistfundingaccountsresponsev2"></a>
<a id="tocslistfundingaccountsresponsev2"></a>

```json
{
  "content": [
    {
      "accountName": "Payor Corp",
      "accountNumber": "7001001234",
      "archived": true,
      "country": "US",
      "currency": "USD",
      "id": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "name": "My Funding Account",
      "payorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "routingNumber": 12345678,
      "type": "FBO"
    },
    {
      "accountName": "Payor Corp",
      "accountNumber": "7001001234",
      "archived": true,
      "country": "US",
      "currency": "USD",
      "id": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "name": "My Funding Account",
      "payorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "routingNumber": 12345678,
      "type": "FBO"
    }
  ],
  "links": [
    {
      "href": "https://api.sandbox.velopayments.com/v1/sourceAccounts?payorId=a2967711-df07-41e5-b5ea-f563088911c6&page=1&pageSize=0&sort=fundingRef:asc",
      "rel": "first"
    },
    {
      "href": "https://api.sandbox.velopayments.com/v1/sourceAccounts?payorId=a2967711-df07-41e5-b5ea-f563088911c6&page=1&pageSize=0&sort=fundingRef:asc",
      "rel": "first"
    }
  ],
  "page": {
    "numberOfElements": 1,
    "page": 1,
    "pageSize": 25,
    "totalElements": 1,
    "totalPages": 2
  }
}
```

List Funding Accounts Response Object

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|[[FundingAccountResponseV2](#schemafundingaccountresponsev2)]|false|none|none|
|links|[[ListFundingAccountsResponseV2_links](#schemalistfundingaccountsresponsev2_links)]|false|none|none|
|page|[ListFundingAccountsResponseV2_page](#schemalistfundingaccountsresponsev2_page)|false|none|none|

<h2 id="tocS_ListFundingAccountsResponseV2_links">ListFundingAccountsResponseV2_links</h2>
<!-- backwards compatibility -->
<a id="schemalistfundingaccountsresponsev2_links"></a>
<a id="schema_ListFundingAccountsResponseV2_links"></a>
<a id="tocSlistfundingaccountsresponsev2_links"></a>
<a id="tocslistfundingaccountsresponsev2_links"></a>

```json
{
  "href": "https://api.sandbox.velopayments.com/v1/sourceAccounts?payorId=a2967711-df07-41e5-b5ea-f563088911c6&page=1&pageSize=0&sort=fundingRef:asc",
  "rel": "first"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|href|string|false|none|none|
|rel|string|false|none|none|

<h2 id="tocS_ListFundingAccountsResponseV2_page">ListFundingAccountsResponseV2_page</h2>
<!-- backwards compatibility -->
<a id="schemalistfundingaccountsresponsev2_page"></a>
<a id="schema_ListFundingAccountsResponseV2_page"></a>
<a id="tocSlistfundingaccountsresponsev2_page"></a>
<a id="tocslistfundingaccountsresponsev2_page"></a>

```json
{
  "numberOfElements": 1,
  "page": 1,
  "pageSize": 25,
  "totalElements": 1,
  "totalPages": 2
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|numberOfElements|integer|false|none|none|
|page|integer|false|none|none|
|pageSize|integer|false|none|none|
|totalElements|integer|false|none|none|
|totalPages|integer|false|none|none|

<h2 id="tocS_ListPaymentsResponseV3">ListPaymentsResponseV3</h2>
<!-- backwards compatibility -->
<a id="schemalistpaymentsresponsev3"></a>
<a id="schema_ListPaymentsResponseV3"></a>
<a id="tocSlistpaymentsresponsev3"></a>
<a id="tocslistpaymentsresponsev3"></a>

```json
{
  "content": [
    {
      "accountName": "My Account Name",
      "accountNumber": "123123232323",
      "countryCode": "US",
      "events": [
        {
          "accountName": "My account",
          "accountNumber": "123123123",
          "eventDateTime": "2000-01-23T04:56:07.000+00:00",
          "eventId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
          "eventType": "eventType",
          "iban": "DE89 3704 0044 0532 0130 00",
          "paymentAmount": 1299,
          "paymentCurrency": "paymentCurrency",
          "principal": "Prinicple example",
          "routingNumber": "123123123",
          "sourceAmount": 1299,
          "sourceCurrency": "sourceCurrency"
        },
        {
          "accountName": "My account",
          "accountNumber": "123123123",
          "eventDateTime": "2000-01-23T04:56:07.000+00:00",
          "eventId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
          "eventType": "eventType",
          "iban": "DE89 3704 0044 0532 0130 00",
          "paymentAmount": 1299,
          "paymentCurrency": "paymentCurrency",
          "principal": "Prinicple example",
          "routingNumber": "123123123",
          "sourceAmount": 1299,
          "sourceCurrency": "sourceCurrency"
        }
      ],
      "filenameReference": "file ref",
      "fundingStatus": "fundingStatus",
      "iban": "DE89 3704 0044 0532 0130 00",
      "individualIdentificationNumber": "1231231adf",
      "invertedRate": 1.4658129,
      "payeeId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "paymentAmount": 0,
      "paymentChannelId": "123asdf",
      "paymentChannelName": "My Payment Channel",
      "paymentCurrency": "paymentCurrency",
      "paymentId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "paymentMemo": "Payment memo",
      "paymentScheme": "paymentScheme",
      "payorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "payorName": "payorName",
      "payorPaymentId": "123123asdf",
      "quoteId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "railsBatchId": "railsBatchId",
      "railsId": "asdf123",
      "railsPaymentId": "railsPaymentId",
      "rate": 6.0274563,
      "rejectionReason": "rejectionReason",
      "remoteId": "aasdf123",
      "returnCost": 1232,
      "returnReason": "Some Reason Value",
      "routingNumber": "123123123123",
      "sourceAccountId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "sourceAccountName": "My Account",
      "sourceAmount": 12345,
      "sourceCurrency": "sourceCurrency",
      "status": "status",
      "submittedDateTime": "2000-01-23T04:56:07.000+00:00",
      "traceNumber": "abodu123"
    },
    {
      "accountName": "My Account Name",
      "accountNumber": "123123232323",
      "countryCode": "US",
      "events": [
        {
          "accountName": "My account",
          "accountNumber": "123123123",
          "eventDateTime": "2000-01-23T04:56:07.000+00:00",
          "eventId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
          "eventType": "eventType",
          "iban": "DE89 3704 0044 0532 0130 00",
          "paymentAmount": 1299,
          "paymentCurrency": "paymentCurrency",
          "principal": "Prinicple example",
          "routingNumber": "123123123",
          "sourceAmount": 1299,
          "sourceCurrency": "sourceCurrency"
        },
        {
          "accountName": "My account",
          "accountNumber": "123123123",
          "eventDateTime": "2000-01-23T04:56:07.000+00:00",
          "eventId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
          "eventType": "eventType",
          "iban": "DE89 3704 0044 0532 0130 00",
          "paymentAmount": 1299,
          "paymentCurrency": "paymentCurrency",
          "principal": "Prinicple example",
          "routingNumber": "123123123",
          "sourceAmount": 1299,
          "sourceCurrency": "sourceCurrency"
        }
      ],
      "filenameReference": "file ref",
      "fundingStatus": "fundingStatus",
      "iban": "DE89 3704 0044 0532 0130 00",
      "individualIdentificationNumber": "1231231adf",
      "invertedRate": 1.4658129,
      "payeeId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "paymentAmount": 0,
      "paymentChannelId": "123asdf",
      "paymentChannelName": "My Payment Channel",
      "paymentCurrency": "paymentCurrency",
      "paymentId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "paymentMemo": "Payment memo",
      "paymentScheme": "paymentScheme",
      "payorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "payorName": "payorName",
      "payorPaymentId": "123123asdf",
      "quoteId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "railsBatchId": "railsBatchId",
      "railsId": "asdf123",
      "railsPaymentId": "railsPaymentId",
      "rate": 6.0274563,
      "rejectionReason": "rejectionReason",
      "remoteId": "aasdf123",
      "returnCost": 1232,
      "returnReason": "Some Reason Value",
      "routingNumber": "123123123123",
      "sourceAccountId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "sourceAccountName": "My Account",
      "sourceAmount": 12345,
      "sourceCurrency": "sourceCurrency",
      "status": "status",
      "submittedDateTime": "2000-01-23T04:56:07.000+00:00",
      "traceNumber": "abodu123"
    }
  ],
  "links": [
    {
      "href": "https://example.com",
      "rel": "first"
    },
    {
      "href": "https://example.com",
      "rel": "first"
    }
  ],
  "page": {
    "numberOfElements": 12,
    "page": 1,
    "pageSize": 25,
    "totalElements": 12,
    "totalPages": 12
  }
}
```

List Payments Response Object

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|[[PaymentResponseV3](#schemapaymentresponsev3)]|false|none|none|
|links|[[GetPayoutsResponseV3_links](#schemagetpayoutsresponsev3_links)]|false|none|none|
|page|[ListPaymentsResponseV3_page](#schemalistpaymentsresponsev3_page)|false|none|none|

<h2 id="tocS_ListPaymentsResponseV3_page">ListPaymentsResponseV3_page</h2>
<!-- backwards compatibility -->
<a id="schemalistpaymentsresponsev3_page"></a>
<a id="schema_ListPaymentsResponseV3_page"></a>
<a id="tocSlistpaymentsresponsev3_page"></a>
<a id="tocslistpaymentsresponsev3_page"></a>

```json
{
  "numberOfElements": 12,
  "page": 1,
  "pageSize": 25,
  "totalElements": 12,
  "totalPages": 12
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|numberOfElements|integer|false|none|none|
|page|integer|false|none|none|
|pageSize|integer|false|none|none|
|totalElements|integer|false|none|none|
|totalPages|integer|false|none|none|

<h2 id="tocS_ListPaymentsResponseV4">ListPaymentsResponseV4</h2>
<!-- backwards compatibility -->
<a id="schemalistpaymentsresponsev4"></a>
<a id="schema_ListPaymentsResponseV4"></a>
<a id="tocSlistpaymentsresponsev4"></a>
<a id="tocslistpaymentsresponsev4"></a>

```json
{
  "content": [
    {
      "accountName": "My Account Name",
      "accountNumber": "123123232323",
      "autoWithdrawnReasonCode": "autoWithdrawnReasonCode",
      "countryCode": "US",
      "events": [
        {
          "accountName": "accountName",
          "accountNumber": "accountNumber",
          "eventDateTime": "2000-01-23T04:56:07.000+00:00",
          "eventId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
          "eventType": "eventType",
          "iban": "iban",
          "paymentAmount": 1299,
          "paymentCurrency": "EUR",
          "principal": "principal",
          "routingNumber": "routingNumber",
          "scheduledAt": "2000-01-23T04:56:07.000+00:00",
          "scheduledBy": "Aphra Behn",
          "scheduledFor": "2000-01-23T04:56:07.000+00:00",
          "sourceAmount": 1299,
          "sourceCurrency": "EUR"
        },
        {
          "accountName": "accountName",
          "accountNumber": "accountNumber",
          "eventDateTime": "2000-01-23T04:56:07.000+00:00",
          "eventId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
          "eventType": "eventType",
          "iban": "iban",
          "paymentAmount": 1299,
          "paymentCurrency": "EUR",
          "principal": "principal",
          "routingNumber": "routingNumber",
          "scheduledAt": "2000-01-23T04:56:07.000+00:00",
          "scheduledBy": "Aphra Behn",
          "scheduledFor": "2000-01-23T04:56:07.000+00:00",
          "sourceAmount": 1299,
          "sourceCurrency": "EUR"
        }
      ],
      "filenameReference": "file ref",
      "fundingStatus": "fundingStatus",
      "iban": "DE89 3704 0044 0532 0130 00",
      "individualIdentificationNumber": "1231231adf",
      "invertedRate": 3.616076749251911,
      "isPaymentCcyBaseCcy": true,
      "payeeAddressCountryCode": "US",
      "payeeId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "paymentAmount": 7,
      "paymentChannelId": "123asdf",
      "paymentChannelName": "My Payment Channel",
      "paymentCurrency": "EUR",
      "paymentId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "paymentMemo": "Payment memo",
      "paymentMetadata": "sample metadata",
      "paymentScheme": "paymentScheme",
      "paymentTrackingReference": "paymentTrackingReference",
      "payorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "payorName": "payorName",
      "payorPaymentId": "123123asdf",
      "payout": {
        "payoutFrom": {
          "dbaName": "dbaName",
          "payorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
          "payorName": "payorName",
          "principal": "principal",
          "principalId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
        },
        "payoutId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
        "payoutTo": {
          "dbaName": "dbaName",
          "payorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
          "payorName": "payorName",
          "principal": "principal",
          "principalId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
        }
      },
      "postInstructFxInfo": {
        "fxMode": "MANUAL",
        "fxStatus": "INITIATED",
        "fxStatusUpdatedAt": "2000-01-23T04:56:07.000+00:00",
        "fxTransactionReference": "AB123GHI"
      },
      "quoteId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "railsBatchId": "railsBatchId",
      "railsId": "asdf123",
      "railsPaymentId": "railsPaymentId",
      "rate": 9.301444243932576,
      "rejectionReason": "rejectionReason",
      "remoteId": "aasdf123",
      "remoteSystemId": "REMOTE_SYSTEM_ID",
      "remoteSystemPaymentId": "remoteSystemPaymentId",
      "returnCost": 1232,
      "returnReason": "Some Reason Value",
      "routingNumber": "123123123123",
      "schedule": {
        "notificationsEnabled": true,
        "scheduleStatus": "SCHEDULED",
        "scheduledAt": "2000-01-23T04:56:07.000+00:00",
        "scheduledBy": "Aphra Behn",
        "scheduledByPrincipalId": "8946953b-1e3b-49cf-9da4-b704cbb78f3e",
        "scheduledFor": "2000-01-23T04:56:07.000+00:00"
      },
      "sourceAccountId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "sourceAccountName": "My Account",
      "sourceAmount": 12345,
      "sourceCurrency": "EUR",
      "status": "status",
      "submittedDateTime": "2000-01-23T04:56:07.000+00:00",
      "traceNumber": "abodu123",
      "transmissionType": "transmissionType",
      "withdrawable": true,
      "withdrawnReason": "withdrawnReason"
    },
    {
      "accountName": "My Account Name",
      "accountNumber": "123123232323",
      "autoWithdrawnReasonCode": "autoWithdrawnReasonCode",
      "countryCode": "US",
      "events": [
        {
          "accountName": "accountName",
          "accountNumber": "accountNumber",
          "eventDateTime": "2000-01-23T04:56:07.000+00:00",
          "eventId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
          "eventType": "eventType",
          "iban": "iban",
          "paymentAmount": 1299,
          "paymentCurrency": "EUR",
          "principal": "principal",
          "routingNumber": "routingNumber",
          "scheduledAt": "2000-01-23T04:56:07.000+00:00",
          "scheduledBy": "Aphra Behn",
          "scheduledFor": "2000-01-23T04:56:07.000+00:00",
          "sourceAmount": 1299,
          "sourceCurrency": "EUR"
        },
        {
          "accountName": "accountName",
          "accountNumber": "accountNumber",
          "eventDateTime": "2000-01-23T04:56:07.000+00:00",
          "eventId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
          "eventType": "eventType",
          "iban": "iban",
          "paymentAmount": 1299,
          "paymentCurrency": "EUR",
          "principal": "principal",
          "routingNumber": "routingNumber",
          "scheduledAt": "2000-01-23T04:56:07.000+00:00",
          "scheduledBy": "Aphra Behn",
          "scheduledFor": "2000-01-23T04:56:07.000+00:00",
          "sourceAmount": 1299,
          "sourceCurrency": "EUR"
        }
      ],
      "filenameReference": "file ref",
      "fundingStatus": "fundingStatus",
      "iban": "DE89 3704 0044 0532 0130 00",
      "individualIdentificationNumber": "1231231adf",
      "invertedRate": 3.616076749251911,
      "isPaymentCcyBaseCcy": true,
      "payeeAddressCountryCode": "US",
      "payeeId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "paymentAmount": 7,
      "paymentChannelId": "123asdf",
      "paymentChannelName": "My Payment Channel",
      "paymentCurrency": "EUR",
      "paymentId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "paymentMemo": "Payment memo",
      "paymentMetadata": "sample metadata",
      "paymentScheme": "paymentScheme",
      "paymentTrackingReference": "paymentTrackingReference",
      "payorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "payorName": "payorName",
      "payorPaymentId": "123123asdf",
      "payout": {
        "payoutFrom": {
          "dbaName": "dbaName",
          "payorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
          "payorName": "payorName",
          "principal": "principal",
          "principalId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
        },
        "payoutId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
        "payoutTo": {
          "dbaName": "dbaName",
          "payorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
          "payorName": "payorName",
          "principal": "principal",
          "principalId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
        }
      },
      "postInstructFxInfo": {
        "fxMode": "MANUAL",
        "fxStatus": "INITIATED",
        "fxStatusUpdatedAt": "2000-01-23T04:56:07.000+00:00",
        "fxTransactionReference": "AB123GHI"
      },
      "quoteId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "railsBatchId": "railsBatchId",
      "railsId": "asdf123",
      "railsPaymentId": "railsPaymentId",
      "rate": 9.301444243932576,
      "rejectionReason": "rejectionReason",
      "remoteId": "aasdf123",
      "remoteSystemId": "REMOTE_SYSTEM_ID",
      "remoteSystemPaymentId": "remoteSystemPaymentId",
      "returnCost": 1232,
      "returnReason": "Some Reason Value",
      "routingNumber": "123123123123",
      "schedule": {
        "notificationsEnabled": true,
        "scheduleStatus": "SCHEDULED",
        "scheduledAt": "2000-01-23T04:56:07.000+00:00",
        "scheduledBy": "Aphra Behn",
        "scheduledByPrincipalId": "8946953b-1e3b-49cf-9da4-b704cbb78f3e",
        "scheduledFor": "2000-01-23T04:56:07.000+00:00"
      },
      "sourceAccountId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "sourceAccountName": "My Account",
      "sourceAmount": 12345,
      "sourceCurrency": "EUR",
      "status": "status",
      "submittedDateTime": "2000-01-23T04:56:07.000+00:00",
      "traceNumber": "abodu123",
      "transmissionType": "transmissionType",
      "withdrawable": true,
      "withdrawnReason": "withdrawnReason"
    }
  ],
  "links": [
    {
      "href": "https://example.com",
      "rel": "first"
    },
    {
      "href": "https://example.com",
      "rel": "first"
    }
  ],
  "page": {
    "numberOfElements": 12,
    "page": 1,
    "pageSize": 25,
    "totalElements": 12,
    "totalPages": 12
  }
}
```

List Payments Response Object

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|[[PaymentResponseV4](#schemapaymentresponsev4)]|false|none|none|
|links|[[GetPayoutsResponseV3_links](#schemagetpayoutsresponsev3_links)]|false|none|none|
|page|[ListPaymentsResponseV3_page](#schemalistpaymentsresponsev3_page)|false|none|none|

<h2 id="tocS_ListSourceAccountResponseV2">ListSourceAccountResponseV2</h2>
<!-- backwards compatibility -->
<a id="schemalistsourceaccountresponsev2"></a>
<a id="schema_ListSourceAccountResponseV2"></a>
<a id="tocSlistsourceaccountresponsev2"></a>
<a id="tocslistsourceaccountresponsev2"></a>

```json
{
  "content": [
    {
      "accountType": "FBO",
      "autoTopUpConfig": {
        "enabled": true,
        "minBalance": 10000,
        "targetBalance": 300000
      },
      "balance": 1203489,
      "balanceVisible": true,
      "currency": "USD",
      "customerId": "Joe Customer",
      "fundingAccountId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "fundingRef": "a1b2c3d4",
      "id": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "name": "MyAccountName",
      "notifications": {
        "minimumBalance": 120000
      },
      "payorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "physicalAccountId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "physicalAccountName": "VELO_FBO_MYBANKA_USD",
      "pooled": true,
      "railsId": "BOA_RAIL"
    },
    {
      "accountType": "FBO",
      "autoTopUpConfig": {
        "enabled": true,
        "minBalance": 10000,
        "targetBalance": 300000
      },
      "balance": 1203489,
      "balanceVisible": true,
      "currency": "USD",
      "customerId": "Joe Customer",
      "fundingAccountId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "fundingRef": "a1b2c3d4",
      "id": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "name": "MyAccountName",
      "notifications": {
        "minimumBalance": 120000
      },
      "payorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "physicalAccountId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "physicalAccountName": "VELO_FBO_MYBANKA_USD",
      "pooled": true,
      "railsId": "BOA_RAIL"
    }
  ],
  "links": [
    {
      "href": "https://api.sandbox.velopayments.com/v2/sourceAccounts?payorId=a2967711-df07-41e5-b5ea-f563088911c6&page=1&pageSize=0&sort=fundingRef:asc",
      "rel": "first"
    },
    {
      "href": "https://api.sandbox.velopayments.com/v2/sourceAccounts?payorId=a2967711-df07-41e5-b5ea-f563088911c6&page=1&pageSize=0&sort=fundingRef:asc",
      "rel": "first"
    }
  ],
  "page": {
    "numberOfElements": 12,
    "page": 1,
    "pageSize": 25,
    "totalElements": 33,
    "totalPages": 2
  }
}
```

List Source Accounts Response Object

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|[[SourceAccountResponseV2](#schemasourceaccountresponsev2)]|false|none|none|
|links|[[ListSourceAccountResponseV2_links](#schemalistsourceaccountresponsev2_links)]|false|none|none|
|page|[PagedUserResponse_page](#schemapageduserresponse_page)|false|none|none|

<h2 id="tocS_ListSourceAccountResponseV2_links">ListSourceAccountResponseV2_links</h2>
<!-- backwards compatibility -->
<a id="schemalistsourceaccountresponsev2_links"></a>
<a id="schema_ListSourceAccountResponseV2_links"></a>
<a id="tocSlistsourceaccountresponsev2_links"></a>
<a id="tocslistsourceaccountresponsev2_links"></a>

```json
{
  "href": "https://api.sandbox.velopayments.com/v2/sourceAccounts?payorId=a2967711-df07-41e5-b5ea-f563088911c6&page=1&pageSize=0&sort=fundingRef:asc",
  "rel": "first"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|href|string|false|none|none|
|rel|string|false|none|none|

<h2 id="tocS_ListSourceAccountResponseV3">ListSourceAccountResponseV3</h2>
<!-- backwards compatibility -->
<a id="schemalistsourceaccountresponsev3"></a>
<a id="schema_ListSourceAccountResponseV3"></a>
<a id="tocSlistsourceaccountresponsev3"></a>
<a id="tocslistsourceaccountresponsev3"></a>

```json
{
  "content": [
    {
      "autoTopUpConfig": {
        "enabled": true,
        "fundingAccountId": "640ab1bd-8a6a-4603-a83a-1edbc3ed5689",
        "minBalance": 10000,
        "targetBalance": 300000
      },
      "balance": 1203489,
      "country": "US",
      "currency": "USD",
      "customerId": "Joe Customer",
      "deleted": true,
      "deletedAt": "2021-01-27T10:08:25.701Z",
      "fundingRef": "a1b2c3d4",
      "id": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "name": "MyAccountName",
      "notifications": {
        "minimumBalance": 120000
      },
      "payorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "physicalAccountId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "physicalAccountName": "VELO_FBO_MYBANKA_USD",
      "pooled": true,
      "railsId": "BOA_RAIL",
      "type": "FBO",
      "userDeleted": true
    },
    {
      "autoTopUpConfig": {
        "enabled": true,
        "fundingAccountId": "640ab1bd-8a6a-4603-a83a-1edbc3ed5689",
        "minBalance": 10000,
        "targetBalance": 300000
      },
      "balance": 1203489,
      "country": "US",
      "currency": "USD",
      "customerId": "Joe Customer",
      "deleted": true,
      "deletedAt": "2021-01-27T10:08:25.701Z",
      "fundingRef": "a1b2c3d4",
      "id": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "name": "MyAccountName",
      "notifications": {
        "minimumBalance": 120000
      },
      "payorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "physicalAccountId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "physicalAccountName": "VELO_FBO_MYBANKA_USD",
      "pooled": true,
      "railsId": "BOA_RAIL",
      "type": "FBO",
      "userDeleted": true
    }
  ],
  "links": [
    {
      "href": "https://api.sandbox.velopayments.com/v3/sourceAccounts?payorId=a2967711-df07-41e5-b5ea-f563088911c6&page=1&pageSize=0&sort=fundingRef:asc",
      "rel": "first"
    },
    {
      "href": "https://api.sandbox.velopayments.com/v3/sourceAccounts?payorId=a2967711-df07-41e5-b5ea-f563088911c6&page=1&pageSize=0&sort=fundingRef:asc",
      "rel": "first"
    }
  ],
  "page": {
    "numberOfElements": 12,
    "page": 1,
    "pageSize": 25,
    "totalElements": 33,
    "totalPages": 2
  }
}
```

List Source Accounts Response Object

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|[[SourceAccountResponseV3](#schemasourceaccountresponsev3)]|false|none|none|
|links|[[ListSourceAccountResponseV3_links](#schemalistsourceaccountresponsev3_links)]|false|none|none|
|page|[PagedUserResponse_page](#schemapageduserresponse_page)|false|none|none|

<h2 id="tocS_ListSourceAccountResponseV3_links">ListSourceAccountResponseV3_links</h2>
<!-- backwards compatibility -->
<a id="schemalistsourceaccountresponsev3_links"></a>
<a id="schema_ListSourceAccountResponseV3_links"></a>
<a id="tocSlistsourceaccountresponsev3_links"></a>
<a id="tocslistsourceaccountresponsev3_links"></a>

```json
{
  "href": "https://api.sandbox.velopayments.com/v3/sourceAccounts?payorId=a2967711-df07-41e5-b5ea-f563088911c6&page=1&pageSize=0&sort=fundingRef:asc",
  "rel": "first"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|href|string|false|none|none|
|rel|string|false|none|none|

<h2 id="tocS_LocalisationDetails">LocalisationDetails</h2>
<!-- backwards compatibility -->
<a id="schemalocalisationdetails"></a>
<a id="schema_LocalisationDetails"></a>
<a id="tocSlocalisationdetails"></a>
<a id="tocslocalisationdetails"></a>

```json
{
  "parameters": {
    "max": "10",
    "min": "0"
  },
  "template": "size must be between {min} and {max}"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|parameters|object|false|none|name to value map containing any named parameters that appear in the message template|
|template|string|false|none|the English language message template used to construct the error message|

<h2 id="tocS_MFADetails">MFADetails</h2>
<!-- backwards compatibility -->
<a id="schemamfadetails"></a>
<a id="schema_MFADetails"></a>
<a id="tocSmfadetails"></a>
<a id="tocsmfadetails"></a>

```json
{
  "mfa_type": "TOTP",
  "verified": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mfa_type|[MFAType](#schemamfatype)|false|none|The type of the MFA device|
|verified|boolean|false|none|true if the user has used the MFA device for login|

#### Enumerated Values

|Property|Value|
|---|---|
|mfa_type|SMS|
|mfa_type|YUBIKEY|
|mfa_type|TOTP|

<h2 id="tocS_MFAType">MFAType</h2>
<!-- backwards compatibility -->
<a id="schemamfatype"></a>
<a id="schema_MFAType"></a>
<a id="tocSmfatype"></a>
<a id="tocsmfatype"></a>

```json
"TOTP"
```

The type of the MFA device

<h2 id="tocS_NameV3">NameV3</h2>
<!-- backwards compatibility -->
<a id="schemanamev3"></a>
<a id="schema_NameV3"></a>
<a id="tocSnamev3"></a>
<a id="tocsnamev3"></a>

```json
{
  "firstName": "Bob",
  "lastName": "Smith",
  "otherNames": "H",
  "title": "Mr"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|firstName|string|false|none|none|
|lastName|string|false|none|none|
|otherNames|string|false|none|none|
|title|string|false|none|none|

<h2 id="tocS_NameV4">NameV4</h2>
<!-- backwards compatibility -->
<a id="schemanamev4"></a>
<a id="schema_NameV4"></a>
<a id="tocSnamev4"></a>
<a id="tocsnamev4"></a>

```json
{
  "firstName": "Bob",
  "lastName": "Smith",
  "otherNames": "H",
  "title": "Mr"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|firstName|string|false|none|none|
|lastName|string|false|none|none|
|otherNames|string|false|none|none|
|title|string|false|none|none|

<h2 id="tocS_Notification">Notification</h2>
<!-- backwards compatibility -->
<a id="schemanotification"></a>
<a id="schema_Notification"></a>
<a id="tocSnotification"></a>
<a id="tocsnotification"></a>

```json
{
  "apiVersion": "1",
  "category": "payment",
  "eventName": "payment.accepted",
  "sequenceNumber": 1234,
  "source": {
    "createdAt": "2020-06-18T15:09:42Z",
    "eventId": "270ab907-27ec-4b83-8028-0ff432bbdec4",
    "paymentId": "cbd9280f-8fde-4190-b014-979d88f3ec54",
    "payorPaymentId": "ourpayment-id12345",
    "payoutPayorIds": {
      "payoutFromPayorId": "ac207f97-663c-4429-9d57-ba5b35d6672d",
      "payoutToPayorId": "ac207f97-663c-4429-9d57-ba5b35d6672d",
      "submittingPayorId": "ac207f97-663c-4429-9d57-ba5b35d6672d"
    },
    "status": "ACCEPTED",
    "type": "payment_status_changed"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiVersion|string|true|none|The API version of the notification schema|
|category|string|true|none|The category that the notification relates to. One of "payment", "payee", "debit" or "system"|
|eventName|string|true|none|The name of event that led to this notification|
|sequenceNumber|integer(int64)|true|none|This is a payor specific sequence number starting at 1 for the first notification sent|
|source|[Ping](#schemaping) \| [PaymentStatusChanged](#schemapaymentstatuschanged) \| [PaymentRejectedOrReturned](#schemapaymentrejectedorreturned) \| [OnboardingStatusChanged](#schemaonboardingstatuschanged) \| [PayableStatusChanged](#schemapayablestatuschanged) \| [PayeeDetailsChanged](#schemapayeedetailschanged) \| [DebitStatusChanged](#schemadebitstatuschanged)|false|none|One of the available set of source event payloads|

<h2 id="tocS_NotificationsV2">NotificationsV2</h2>
<!-- backwards compatibility -->
<a id="schemanotificationsv2"></a>
<a id="schema_NotificationsV2"></a>
<a id="tocSnotificationsv2"></a>
<a id="tocsnotificationsv2"></a>

```json
{
  "minimumBalance": 120000
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|minimumBalance|integer|false|none|none|

<h2 id="tocS_NotificationsV3">NotificationsV3</h2>
<!-- backwards compatibility -->
<a id="schemanotificationsv3"></a>
<a id="schema_NotificationsV3"></a>
<a id="tocSnotificationsv3"></a>
<a id="tocsnotificationsv3"></a>

```json
{
  "minimumBalance": 120000
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|minimumBalance|integer|false|none|none|

<h2 id="tocS_OfacStatusV4">OfacStatusV4</h2>
<!-- backwards compatibility -->
<a id="schemaofacstatusv4"></a>
<a id="schema_OfacStatusV4"></a>
<a id="tocSofacstatusv4"></a>
<a id="tocsofacstatusv4"></a>

```json
"string"
```

OFAC status. One of the following values: PENDING, PASSED, FAILED

<h2 id="tocS_OnboardedStatusV3">OnboardedStatusV3</h2>
<!-- backwards compatibility -->
<a id="schemaonboardedstatusv3"></a>
<a id="schema_OnboardedStatusV3"></a>
<a id="tocSonboardedstatusv3"></a>
<a id="tocsonboardedstatusv3"></a>

```json
"string"
```

Onboarded status. One of the following values: CREATED, INVITED, REGISTERED, ONBOARDED

<h2 id="tocS_OnboardedStatusV3_2">OnboardedStatusV3_2</h2>
<!-- backwards compatibility -->
<a id="schemaonboardedstatusv3_2"></a>
<a id="schema_OnboardedStatusV3_2"></a>
<a id="tocSonboardedstatusv3_2"></a>
<a id="tocsonboardedstatusv3_2"></a>

```json
"string"
```

Onboarded status. One of the following values: CREATED, INVITED, REGISTERED, ONBOARDED

<h2 id="tocS_OnboardedStatusV4">OnboardedStatusV4</h2>
<!-- backwards compatibility -->
<a id="schemaonboardedstatusv4"></a>
<a id="schema_OnboardedStatusV4"></a>
<a id="tocSonboardedstatusv4"></a>
<a id="tocsonboardedstatusv4"></a>

```json
"string"
```

Payee onboarded status. One of the following values: CREATED, INVITED, REGISTERED, ONBOARDED

<h2 id="tocS_OnboardedStatusV4_2">OnboardedStatusV4_2</h2>
<!-- backwards compatibility -->
<a id="schemaonboardedstatusv4_2"></a>
<a id="schema_OnboardedStatusV4_2"></a>
<a id="tocSonboardedstatusv4_2"></a>
<a id="tocsonboardedstatusv4_2"></a>

```json
"string"
```

Payee onboarded status. One of the following value: CREATED, INVITED, REGISTERED, ONBOARDED

<h2 id="tocS_OnboardingStatusChanged">OnboardingStatusChanged</h2>
<!-- backwards compatibility -->
<a id="schemaonboardingstatuschanged"></a>
<a id="schema_OnboardingStatusChanged"></a>
<a id="tocSonboardingstatuschanged"></a>
<a id="tocsonboardingstatuschanged"></a>

```json
{
  "createdAt": "2020-06-18T15:09:42Z",
  "eventId": "270ab907-27ec-4b83-8028-0ff432bbdec4",
  "sourceType": "payment_status_changed",
  "payeeId": "cbd9280f-8fde-4190-b014-979d88f3ec54",
  "reasons": [
    {
      "code": "00001",
      "message": "payment channel disabled"
    }
  ]
}
```

Base type for all onboarding status changed events

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(date-time)|true|none|ISO8601 timestamp indicating when the source event was created|
|eventId|string(uuid)|true|none|UUID id of the source event in the Velo platform|
|sourceType|string|true|none|OA3 Schema type name for the source info which is used as the discriminator value to ensure that data binding works correctly|
|payeeId|string(uuid)|true|none|ID of this payee within the Velo platform|
|reasons|[[PayeeEvent_allOf_reasons](#schemapayeeevent_allof_reasons)]|false|none|The reasons for the event notification.|

<h2 id="tocS_PageForResponse">PageForResponse</h2>
<!-- backwards compatibility -->
<a id="schemapageforresponse"></a>
<a id="schema_PageForResponse"></a>
<a id="tocSpageforresponse"></a>
<a id="tocspageforresponse"></a>

```json
{
  "numberOfElements": 0,
  "page": 5,
  "pageSize": 5,
  "totalElements": 6,
  "totalPages": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|numberOfElements|integer(int32)|false|none|none|
|page|integer(int32)|false|none|none|
|pageSize|integer(int32)|false|none|none|
|totalElements|integer(int64)|false|none|none|
|totalPages|integer(int32)|false|none|none|

<h2 id="tocS_PageResourceFundingPayorStatusAuditResponseFundingPayorStatusAuditResponse">PageResourceFundingPayorStatusAuditResponseFundingPayorStatusAuditResponse</h2>
<!-- backwards compatibility -->
<a id="schemapageresourcefundingpayorstatusauditresponsefundingpayorstatusauditresponse"></a>
<a id="schema_PageResourceFundingPayorStatusAuditResponseFundingPayorStatusAuditResponse"></a>
<a id="tocSpageresourcefundingpayorstatusauditresponsefundingpayorstatusauditresponse"></a>
<a id="tocspageresourcefundingpayorstatusauditresponsefundingpayorstatusauditresponse"></a>

```json
{
  "content": [
    {
      "amount": 2,
      "currency": "USD",
      "fundingId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "status": "status"
    },
    {
      "amount": 2,
      "currency": "USD",
      "fundingId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "status": "status"
    }
  ],
  "links": [
    {
      "href": "href",
      "rel": "rel"
    },
    {
      "href": "href",
      "rel": "rel"
    }
  ],
  "page": {
    "numberOfElements": 0,
    "page": 5,
    "pageSize": 5,
    "totalElements": 6,
    "totalPages": 1
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|[[FundingPayorStatusAuditResponse](#schemafundingpayorstatusauditresponse)]|false|none|none|
|links|[[LinkForResponse](#schemalinkforresponse)]|false|none|none|
|page|[PageForResponse](#schemapageforresponse)|false|none|none|

<h2 id="tocS_PagedPayeeInvitationStatusResponseV3">PagedPayeeInvitationStatusResponseV3</h2>
<!-- backwards compatibility -->
<a id="schemapagedpayeeinvitationstatusresponsev3"></a>
<a id="schema_PagedPayeeInvitationStatusResponseV3"></a>
<a id="tocSpagedpayeeinvitationstatusresponsev3"></a>
<a id="tocspagedpayeeinvitationstatusresponsev3"></a>

```json
{
  "content": [
    {
      "gracePeriodEndDate": "2019-01-20T00:00:00.000+0000",
      "invitationStatus": "invitationStatus",
      "payeeId": "2aa5d7e0-2ecb-403f-8494-1865ed0454e9"
    },
    {
      "gracePeriodEndDate": "2019-01-20T00:00:00.000+0000",
      "invitationStatus": "invitationStatus",
      "payeeId": "2aa5d7e0-2ecb-403f-8494-1865ed0454e9"
    }
  ],
  "links": [
    {
      "href": "href",
      "rel": "rel"
    },
    {
      "href": "href",
      "rel": "rel"
    }
  ],
  "page": {
    "numberOfElements": 0,
    "page": 5,
    "pageSize": 5,
    "totalElements": 6,
    "totalPages": 1
  }
}
```

List Payees Invitation Status Object

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|[[PayeeInvitationStatusResponseV3](#schemapayeeinvitationstatusresponsev3)]|false|none|none|
|links|[[PagedPayeeResponseV3_links](#schemapagedpayeeresponsev3_links)]|false|none|none|
|page|[PagedPayeeInvitationStatusResponseV3_page](#schemapagedpayeeinvitationstatusresponsev3_page)|false|none|none|

<h2 id="tocS_PagedPayeeInvitationStatusResponseV3_page">PagedPayeeInvitationStatusResponseV3_page</h2>
<!-- backwards compatibility -->
<a id="schemapagedpayeeinvitationstatusresponsev3_page"></a>
<a id="schema_PagedPayeeInvitationStatusResponseV3_page"></a>
<a id="tocSpagedpayeeinvitationstatusresponsev3_page"></a>
<a id="tocspagedpayeeinvitationstatusresponsev3_page"></a>

```json
{
  "numberOfElements": 0,
  "page": 5,
  "pageSize": 5,
  "totalElements": 6,
  "totalPages": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|numberOfElements|integer|false|none|none|
|page|integer|false|none|none|
|pageSize|integer|false|none|none|
|totalElements|integer|false|none|none|
|totalPages|integer|false|none|none|

<h2 id="tocS_PagedPayeeInvitationStatusResponseV4">PagedPayeeInvitationStatusResponseV4</h2>
<!-- backwards compatibility -->
<a id="schemapagedpayeeinvitationstatusresponsev4"></a>
<a id="schema_PagedPayeeInvitationStatusResponseV4"></a>
<a id="tocSpagedpayeeinvitationstatusresponsev4"></a>
<a id="tocspagedpayeeinvitationstatusresponsev4"></a>

```json
{
  "content": [
    {
      "gracePeriodEndDate": "2019-01-20T00:00:00.000+0000",
      "invitationStatus": "invitationStatus",
      "payeeId": "2aa5d7e0-2ecb-403f-8494-1865ed0454e9"
    },
    {
      "gracePeriodEndDate": "2019-01-20T00:00:00.000+0000",
      "invitationStatus": "invitationStatus",
      "payeeId": "2aa5d7e0-2ecb-403f-8494-1865ed0454e9"
    }
  ],
  "links": [
    {
      "href": "href",
      "rel": "rel"
    },
    {
      "href": "href",
      "rel": "rel"
    }
  ],
  "page": {
    "numberOfElements": 0,
    "page": 5,
    "pageSize": 5,
    "totalElements": 6,
    "totalPages": 1
  }
}
```

List Payees Invitation Status Object

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|[[PayeeInvitationStatusResponseV4](#schemapayeeinvitationstatusresponsev4)]|false|none|none|
|links|[[PagedPayeeResponseV3_links](#schemapagedpayeeresponsev3_links)]|false|none|none|
|page|[PagedPayeeInvitationStatusResponseV3_page](#schemapagedpayeeinvitationstatusresponsev3_page)|false|none|none|

<h2 id="tocS_PagedPayeeResponseV3">PagedPayeeResponseV3</h2>
<!-- backwards compatibility -->
<a id="schemapagedpayeeresponsev3"></a>
<a id="schema_PagedPayeeResponseV3"></a>
<a id="tocSpagedpayeeresponsev3"></a>
<a id="tocspagedpayeeresponsev3"></a>

```json
{
  "content": [
    {
      "company": {
        "name": "ABC Group Plc",
        "operatingName": "ABC Co"
      },
      "country": "US",
      "created": "2019-01-20T09:00:00Z",
      "disabled": true,
      "disabledComment": "reason for disabled",
      "disabledUpdatedTimestamp": "2019-01-20T09:00:00Z",
      "displayName": "ABC",
      "email": "bob@example.com",
      "individual": {
        "name": {
          "firstName": "Bob",
          "lastName": "Smith",
          "otherNames": "H",
          "title": "Mr"
        }
      },
      "language": "en-US",
      "onboardedStatus": "onboardedStatus",
      "payeeId": "2aa5d7e0-2ecb-403f-8494-1865ed0454e9",
      "payeeType": "payeeType",
      "payorRefs": [
        {
          "invitationStatus": "invitationStatus",
          "invitationStatusTimestamp": "2019-01-20T09:00:00Z",
          "payableIssues": [
            {
              "code": "3",
              "message": "payee-disabled"
            },
            {
              "code": "3",
              "message": "payee-disabled"
            }
          ],
          "payableStatus": true,
          "paymentChannelId": "70faaff7-2c32-4b44-b27f-f0b6c484e6f3",
          "payorId": "ba08877f-9d96-41e4-9c26-44a872d856ae",
          "remoteId": "uniqueIdForRemoteEntity"
        },
        {
          "invitationStatus": "invitationStatus",
          "invitationStatusTimestamp": "2019-01-20T09:00:00Z",
          "payableIssues": [
            {
              "code": "3",
              "message": "payee-disabled"
            },
            {
              "code": "3",
              "message": "payee-disabled"
            }
          ],
          "payableStatus": true,
          "paymentChannelId": "70faaff7-2c32-4b44-b27f-f0b6c484e6f3",
          "payorId": "ba08877f-9d96-41e4-9c26-44a872d856ae",
          "remoteId": "uniqueIdForRemoteEntity"
        }
      ],
      "watchlistOverrideComment": "Example reason for the watchlist status being overridden",
      "watchlistStatus": "watchlistStatus",
      "watchlistStatusUpdatedTimestamp": "2019-01-20T09:00:00+00:00"
    },
    {
      "company": {
        "name": "ABC Group Plc",
        "operatingName": "ABC Co"
      },
      "country": "US",
      "created": "2019-01-20T09:00:00Z",
      "disabled": true,
      "disabledComment": "reason for disabled",
      "disabledUpdatedTimestamp": "2019-01-20T09:00:00Z",
      "displayName": "ABC",
      "email": "bob@example.com",
      "individual": {
        "name": {
          "firstName": "Bob",
          "lastName": "Smith",
          "otherNames": "H",
          "title": "Mr"
        }
      },
      "language": "en-US",
      "onboardedStatus": "onboardedStatus",
      "payeeId": "2aa5d7e0-2ecb-403f-8494-1865ed0454e9",
      "payeeType": "payeeType",
      "payorRefs": [
        {
          "invitationStatus": "invitationStatus",
          "invitationStatusTimestamp": "2019-01-20T09:00:00Z",
          "payableIssues": [
            {
              "code": "3",
              "message": "payee-disabled"
            },
            {
              "code": "3",
              "message": "payee-disabled"
            }
          ],
          "payableStatus": true,
          "paymentChannelId": "70faaff7-2c32-4b44-b27f-f0b6c484e6f3",
          "payorId": "ba08877f-9d96-41e4-9c26-44a872d856ae",
          "remoteId": "uniqueIdForRemoteEntity"
        },
        {
          "invitationStatus": "invitationStatus",
          "invitationStatusTimestamp": "2019-01-20T09:00:00Z",
          "payableIssues": [
            {
              "code": "3",
              "message": "payee-disabled"
            },
            {
              "code": "3",
              "message": "payee-disabled"
            }
          ],
          "payableStatus": true,
          "paymentChannelId": "70faaff7-2c32-4b44-b27f-f0b6c484e6f3",
          "payorId": "ba08877f-9d96-41e4-9c26-44a872d856ae",
          "remoteId": "uniqueIdForRemoteEntity"
        }
      ],
      "watchlistOverrideComment": "Example reason for the watchlist status being overridden",
      "watchlistStatus": "watchlistStatus",
      "watchlistStatusUpdatedTimestamp": "2019-01-20T09:00:00+00:00"
    }
  ],
  "links": [
    {
      "href": "href",
      "rel": "rel"
    },
    {
      "href": "href",
      "rel": "rel"
    }
  ],
  "page": {
    "numberOfElements": 10,
    "page": 10,
    "pageSize": 10,
    "totalElements": 10,
    "totalPages": 10
  },
  "summary": {
    "totalInvitedCount": 10,
    "totalOnboardedCount": 10,
    "totalPayeesCount": 10,
    "totalRegisteredCount": 10,
    "totalWatchlistFailedCount": 0
  }
}
```

List Payees Response Object

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|[[GetPayeeListResponseV3](#schemagetpayeelistresponsev3)]|false|none|none|
|links|[[PagedPayeeResponseV3_links](#schemapagedpayeeresponsev3_links)]|false|none|none|
|page|[PagedPayeeResponseV3_page](#schemapagedpayeeresponsev3_page)|false|none|none|
|summary|[PagedPayeeResponseV3_summary](#schemapagedpayeeresponsev3_summary)|false|none|none|

<h2 id="tocS_PagedPayeeResponseV3_links">PagedPayeeResponseV3_links</h2>
<!-- backwards compatibility -->
<a id="schemapagedpayeeresponsev3_links"></a>
<a id="schema_PagedPayeeResponseV3_links"></a>
<a id="tocSpagedpayeeresponsev3_links"></a>
<a id="tocspagedpayeeresponsev3_links"></a>

```json
{
  "href": "href",
  "rel": "rel"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|href|string|false|none|none|
|rel|string|false|none|none|

<h2 id="tocS_PagedPayeeResponseV3_page">PagedPayeeResponseV3_page</h2>
<!-- backwards compatibility -->
<a id="schemapagedpayeeresponsev3_page"></a>
<a id="schema_PagedPayeeResponseV3_page"></a>
<a id="tocSpagedpayeeresponsev3_page"></a>
<a id="tocspagedpayeeresponsev3_page"></a>

```json
{
  "numberOfElements": 10,
  "page": 10,
  "pageSize": 10,
  "totalElements": 10,
  "totalPages": 10
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|numberOfElements|integer|false|none|none|
|page|integer|false|none|none|
|pageSize|integer|false|none|none|
|totalElements|integer|false|none|none|
|totalPages|integer|false|none|none|

<h2 id="tocS_PagedPayeeResponseV3_summary">PagedPayeeResponseV3_summary</h2>
<!-- backwards compatibility -->
<a id="schemapagedpayeeresponsev3_summary"></a>
<a id="schema_PagedPayeeResponseV3_summary"></a>
<a id="tocSpagedpayeeresponsev3_summary"></a>
<a id="tocspagedpayeeresponsev3_summary"></a>

```json
{
  "totalInvitedCount": 10,
  "totalOnboardedCount": 10,
  "totalPayeesCount": 10,
  "totalRegisteredCount": 10,
  "totalWatchlistFailedCount": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|totalInvitedCount|integer|false|none|none|
|totalOnboardedCount|integer|false|none|none|
|totalPayeesCount|integer|false|none|none|
|totalRegisteredCount|integer|false|none|none|
|totalWatchlistFailedCount|integer|false|none|none|

<h2 id="tocS_PagedPayeeResponseV4">PagedPayeeResponseV4</h2>
<!-- backwards compatibility -->
<a id="schemapagedpayeeresponsev4"></a>
<a id="schema_PagedPayeeResponseV4"></a>
<a id="tocSpagedpayeeresponsev4"></a>
<a id="tocspagedpayeeresponsev4"></a>

```json
{
  "content": [
    {
      "company": {
        "name": "ABC Group Plc",
        "operatingName": "ABC Co"
      },
      "country": "US",
      "created": "2019-01-20T09:00:00Z",
      "disabled": true,
      "disabledComment": "reason for disabled",
      "disabledUpdatedTimestamp": "2019-01-20T09:00:00Z",
      "displayName": "ABC",
      "email": "bob@example.com",
      "individual": {
        "name": {
          "firstName": "Bob",
          "lastName": "Smith",
          "otherNames": "H",
          "title": "Mr"
        }
      },
      "language": "en-US",
      "onboardedStatus": "onboardedStatus",
      "payeeId": "2aa5d7e0-2ecb-403f-8494-1865ed0454e9",
      "payeeType": "payeeType",
      "payorRefs": [
        {
          "invitationStatus": "invitationStatus",
          "invitationStatusTimestamp": "2019-01-20T09:00:00Z",
          "payableIssues": [
            {
              "code": "3",
              "message": "payee-disabled"
            },
            {
              "code": "3",
              "message": "payee-disabled"
            }
          ],
          "payableStatus": true,
          "paymentChannelId": "70faaff7-2c32-4b44-b27f-f0b6c484e6f3",
          "payorId": "ba08877f-9d96-41e4-9c26-44a872d856ae",
          "remoteId": "uniqueIdForRemoteEntity"
        },
        {
          "invitationStatus": "invitationStatus",
          "invitationStatusTimestamp": "2019-01-20T09:00:00Z",
          "payableIssues": [
            {
              "code": "3",
              "message": "payee-disabled"
            },
            {
              "code": "3",
              "message": "payee-disabled"
            }
          ],
          "payableStatus": true,
          "paymentChannelId": "70faaff7-2c32-4b44-b27f-f0b6c484e6f3",
          "payorId": "ba08877f-9d96-41e4-9c26-44a872d856ae",
          "remoteId": "uniqueIdForRemoteEntity"
        }
      ],
      "watchlistOverrideComment": "Example reason for the watchlist status being overridden",
      "watchlistStatus": "watchlistStatus",
      "watchlistStatusUpdatedTimestamp": "2019-01-20T09:00:00+00:00"
    },
    {
      "company": {
        "name": "ABC Group Plc",
        "operatingName": "ABC Co"
      },
      "country": "US",
      "created": "2019-01-20T09:00:00Z",
      "disabled": true,
      "disabledComment": "reason for disabled",
      "disabledUpdatedTimestamp": "2019-01-20T09:00:00Z",
      "displayName": "ABC",
      "email": "bob@example.com",
      "individual": {
        "name": {
          "firstName": "Bob",
          "lastName": "Smith",
          "otherNames": "H",
          "title": "Mr"
        }
      },
      "language": "en-US",
      "onboardedStatus": "onboardedStatus",
      "payeeId": "2aa5d7e0-2ecb-403f-8494-1865ed0454e9",
      "payeeType": "payeeType",
      "payorRefs": [
        {
          "invitationStatus": "invitationStatus",
          "invitationStatusTimestamp": "2019-01-20T09:00:00Z",
          "payableIssues": [
            {
              "code": "3",
              "message": "payee-disabled"
            },
            {
              "code": "3",
              "message": "payee-disabled"
            }
          ],
          "payableStatus": true,
          "paymentChannelId": "70faaff7-2c32-4b44-b27f-f0b6c484e6f3",
          "payorId": "ba08877f-9d96-41e4-9c26-44a872d856ae",
          "remoteId": "uniqueIdForRemoteEntity"
        },
        {
          "invitationStatus": "invitationStatus",
          "invitationStatusTimestamp": "2019-01-20T09:00:00Z",
          "payableIssues": [
            {
              "code": "3",
              "message": "payee-disabled"
            },
            {
              "code": "3",
              "message": "payee-disabled"
            }
          ],
          "payableStatus": true,
          "paymentChannelId": "70faaff7-2c32-4b44-b27f-f0b6c484e6f3",
          "payorId": "ba08877f-9d96-41e4-9c26-44a872d856ae",
          "remoteId": "uniqueIdForRemoteEntity"
        }
      ],
      "watchlistOverrideComment": "Example reason for the watchlist status being overridden",
      "watchlistStatus": "watchlistStatus",
      "watchlistStatusUpdatedTimestamp": "2019-01-20T09:00:00+00:00"
    }
  ],
  "links": [
    {
      "href": "href",
      "rel": "rel"
    },
    {
      "href": "href",
      "rel": "rel"
    }
  ],
  "page": {
    "numberOfElements": 10,
    "page": 10,
    "pageSize": 10,
    "totalElements": 10,
    "totalPages": 10
  },
  "summary": {
    "totalInvitedCount": 10,
    "totalOnboardedCount": 10,
    "totalPayeesCount": 10,
    "totalRegisteredCount": 10,
    "totalWatchlistFailedCount": 0
  }
}
```

List Payees Response Object

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|[[GetPayeeListResponseV4](#schemagetpayeelistresponsev4)]|false|none|none|
|links|[[PagedPayeeResponseV3_links](#schemapagedpayeeresponsev3_links)]|false|none|none|
|page|[PagedPayeeResponseV3_page](#schemapagedpayeeresponsev3_page)|false|none|none|
|summary|[PagedPayeeResponseV3_summary](#schemapagedpayeeresponsev3_summary)|false|none|none|

<h2 id="tocS_PagedPaymentsResponseV3">PagedPaymentsResponseV3</h2>
<!-- backwards compatibility -->
<a id="schemapagedpaymentsresponsev3"></a>
<a id="schema_PagedPaymentsResponseV3"></a>
<a id="tocSpagedpaymentsresponsev3"></a>
<a id="tocspagedpaymentsresponsev3"></a>

```json
{
  "content": [
    {
      "amount": 10000,
      "autoWithdrawnReasonCode": "VE0003",
      "currency": "USD",
      "payee": {
        "company": {
          "companyName": "ACME Anvils PLC"
        },
        "individual": {
          "name": {
            "firstName": "Fred",
            "lastName": "Flintstone"
          }
        },
        "payeeId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
      },
      "paymentId": "859af785-223b-4d5b-a708-5fa57f006dbb",
      "paymentMemo": "INV00112",
      "paymentMetadata": "invoiceeId_123|abc001:12345|xyz002:4567",
      "payorPaymentId": "123211321ABSD",
      "railsId": "SVB",
      "remoteId": "remoteIdVal123",
      "remoteSystemId": "OB012",
      "sourceAccountName": "Chase Bank Account",
      "status": "AWAITING_FUNDS",
      "transmissionType": "LOCAL",
      "withdrawable": false
    },
    {
      "amount": 10000,
      "autoWithdrawnReasonCode": "VE0003",
      "currency": "USD",
      "payee": {
        "company": {
          "companyName": "ACME Anvils PLC"
        },
        "individual": {
          "name": {
            "firstName": "Fred",
            "lastName": "Flintstone"
          }
        },
        "payeeId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
      },
      "paymentId": "859af785-223b-4d5b-a708-5fa57f006dbb",
      "paymentMemo": "INV00112",
      "paymentMetadata": "invoiceeId_123|abc001:12345|xyz002:4567",
      "payorPaymentId": "123211321ABSD",
      "railsId": "SVB",
      "remoteId": "remoteIdVal123",
      "remoteSystemId": "OB012",
      "sourceAccountName": "Chase Bank Account",
      "status": "AWAITING_FUNDS",
      "transmissionType": "LOCAL",
      "withdrawable": false
    }
  ],
  "links": [
    {
      "href": "href",
      "rel": "rel"
    },
    {
      "href": "href",
      "rel": "rel"
    }
  ],
  "page": {
    "numberOfElements": 0,
    "page": 5,
    "pageSize": 5,
    "totalElements": 6,
    "totalPages": 1
  }
}
```

List Payees Response Object

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|[[PaymentV3](#schemapaymentv3)]|false|none|none|
|links|[[PagedPayeeResponseV3_links](#schemapagedpayeeresponsev3_links)]|false|none|none|
|page|[PagedPayeeInvitationStatusResponseV3_page](#schemapagedpayeeinvitationstatusresponsev3_page)|false|none|none|

<h2 id="tocS_PagedUserResponse">PagedUserResponse</h2>
<!-- backwards compatibility -->
<a id="schemapageduserresponse"></a>
<a id="schema_PagedUserResponse"></a>
<a id="tocSpageduserresponse"></a>
<a id="tocspageduserresponse"></a>

```json
{
  "content": [
    {
      "companyName": "Acme Corp",
      "email": "foo@example.com",
      "entityId": "7fffa261-ac68-49e6-b605-d24a444d9206",
      "firstName": "John",
      "id": "8bbf301c-948f-4445-b411-357eec53e441",
      "lastName": "Doe",
      "lockedOut": true,
      "lockedOutTimestamp": "2000-01-23T04:56:07.000+00:00",
      "mfaStatus": "REGISTERED",
      "mfaType": "TOTP",
      "primaryContactNumber": "11235555555",
      "roles": [
        "payor.admin"
      ],
      "secondaryContactNumber": "11235555550",
      "smsNumber": "11235555555",
      "status": "ENABLED",
      "userType": "PAYOR"
    },
    {
      "companyName": "Acme Corp",
      "email": "foo@example.com",
      "entityId": "7fffa261-ac68-49e6-b605-d24a444d9206",
      "firstName": "John",
      "id": "8bbf301c-948f-4445-b411-357eec53e441",
      "lastName": "Doe",
      "lockedOut": true,
      "lockedOutTimestamp": "2000-01-23T04:56:07.000+00:00",
      "mfaStatus": "REGISTERED",
      "mfaType": "TOTP",
      "primaryContactNumber": "11235555555",
      "roles": [
        "payor.admin"
      ],
      "secondaryContactNumber": "11235555550",
      "smsNumber": "11235555555",
      "status": "ENABLED",
      "userType": "PAYOR"
    }
  ],
  "links": [
    {
      "href": "https://api.sandbox.velopayments.com/v2/users??type=PAYOR&page=1&pageSize=10",
      "rel": "first"
    },
    {
      "href": "https://api.sandbox.velopayments.com/v2/users??type=PAYOR&page=1&pageSize=10",
      "rel": "first"
    }
  ],
  "page": {
    "numberOfElements": 12,
    "page": 1,
    "pageSize": 25,
    "totalElements": 33,
    "totalPages": 2
  }
}
```

List Users Response Object

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|[[UserResponse](#schemauserresponse)]|false|none|none|
|links|[[PagedUserResponse_links](#schemapageduserresponse_links)]|false|none|none|
|page|[PagedUserResponse_page](#schemapageduserresponse_page)|false|none|none|

<h2 id="tocS_PagedUserResponse_links">PagedUserResponse_links</h2>
<!-- backwards compatibility -->
<a id="schemapageduserresponse_links"></a>
<a id="schema_PagedUserResponse_links"></a>
<a id="tocSpageduserresponse_links"></a>
<a id="tocspageduserresponse_links"></a>

```json
{
  "href": "https://api.sandbox.velopayments.com/v2/users??type=PAYOR&page=1&pageSize=10",
  "rel": "first"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|href|string|false|none|none|
|rel|string|false|none|none|

<h2 id="tocS_PagedUserResponse_page">PagedUserResponse_page</h2>
<!-- backwards compatibility -->
<a id="schemapageduserresponse_page"></a>
<a id="schema_PagedUserResponse_page"></a>
<a id="tocSpageduserresponse_page"></a>
<a id="tocspageduserresponse_page"></a>

```json
{
  "numberOfElements": 12,
  "page": 1,
  "pageSize": 25,
  "totalElements": 33,
  "totalPages": 2
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|numberOfElements|integer|false|none|none|
|page|integer|false|none|none|
|pageSize|integer|false|none|none|
|totalElements|integer|false|none|none|
|totalPages|integer|false|none|none|

<h2 id="tocS_PasswordRequest">PasswordRequest</h2>
<!-- backwards compatibility -->
<a id="schemapasswordrequest"></a>
<a id="schema_PasswordRequest"></a>
<a id="tocSpasswordrequest"></a>
<a id="tocspasswordrequest"></a>

```json
{
  "password": "My_strong_password"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|password|string|true|none|a password that passes validation|

<h2 id="tocS_PayableIssueV3">PayableIssueV3</h2>
<!-- backwards compatibility -->
<a id="schemapayableissuev3"></a>
<a id="schema_PayableIssueV3"></a>
<a id="tocSpayableissuev3"></a>
<a id="tocspayableissuev3"></a>

```json
{
  "code": "3",
  "message": "payee-disabled"
}
```

payable issues for the payee and payor combination

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|true|none|none|
|message|string|true|none|none|

<h2 id="tocS_PayableIssueV4">PayableIssueV4</h2>
<!-- backwards compatibility -->
<a id="schemapayableissuev4"></a>
<a id="schema_PayableIssueV4"></a>
<a id="tocSpayableissuev4"></a>
<a id="tocspayableissuev4"></a>

```json
{
  "code": "3",
  "message": "payee-disabled"
}
```

payable issues for the payee and payor combination

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|true|none|none|
|message|string|true|none|none|

<h2 id="tocS_PayableStatusChanged">PayableStatusChanged</h2>
<!-- backwards compatibility -->
<a id="schemapayablestatuschanged"></a>
<a id="schema_PayableStatusChanged"></a>
<a id="tocSpayablestatuschanged"></a>
<a id="tocspayablestatuschanged"></a>

```json
{
  "createdAt": "2020-06-18T15:09:42Z",
  "eventId": "270ab907-27ec-4b83-8028-0ff432bbdec4",
  "sourceType": "payment_status_changed",
  "payeeId": "cbd9280f-8fde-4190-b014-979d88f3ec54",
  "reasons": [
    {
      "code": "00001",
      "message": "payment channel disabled"
    }
  ]
}
```

Base type for all payable status changed events

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(date-time)|true|none|ISO8601 timestamp indicating when the source event was created|
|eventId|string(uuid)|true|none|UUID id of the source event in the Velo platform|
|sourceType|string|true|none|OA3 Schema type name for the source info which is used as the discriminator value to ensure that data binding works correctly|
|payeeId|string(uuid)|true|none|ID of this payee within the Velo platform|
|reasons|[[PayeeEvent_allOf_reasons](#schemapayeeevent_allof_reasons)]|false|none|The reasons for the event notification.|

<h2 id="tocS_PayeeAddressV3">PayeeAddressV3</h2>
<!-- backwards compatibility -->
<a id="schemapayeeaddressv3"></a>
<a id="schema_PayeeAddressV3"></a>
<a id="tocSpayeeaddressv3"></a>
<a id="tocspayeeaddressv3"></a>

```json
{
  "city": "Key West",
  "country": "US",
  "countyOrProvince": "FL",
  "line1": "500 Duval St",
  "line2": "line2",
  "line3": "line3",
  "line4": "line4",
  "zipOrPostcode": "33945"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|city|string|true|none|none|
|country|string|true|none|Valid ISO 3166 2 character country code. See the <a href="https://www.iso.org/iso-3166-country-codes.html" target="_blank" a>ISO specification</a> for details.|
|countyOrProvince|string \| null|false|none|none|
|line1|string|true|none|none|
|line2|string \| null|false|none|none|
|line3|string \| null|false|none|none|
|line4|string \| null|false|none|none|
|zipOrPostcode|string \| null|false|none|none|

<h2 id="tocS_PayeeAddressV4">PayeeAddressV4</h2>
<!-- backwards compatibility -->
<a id="schemapayeeaddressv4"></a>
<a id="schema_PayeeAddressV4"></a>
<a id="tocSpayeeaddressv4"></a>
<a id="tocspayeeaddressv4"></a>

```json
{
  "city": "Key West",
  "country": "US",
  "countyOrProvince": "FL",
  "line1": "500 Duval St",
  "line2": "line2",
  "line3": "line3",
  "line4": "line4",
  "zipOrPostcode": "33945"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|city|string|true|none|none|
|country|string|true|none|none|
|countyOrProvince|string \| null|false|none|none|
|line1|string|true|none|none|
|line2|string \| null|false|none|none|
|line3|string \| null|false|none|none|
|line4|string \| null|false|none|none|
|zipOrPostcode|string \| null|false|none|none|

<h2 id="tocS_PayeeDeltaResponseV3">PayeeDeltaResponseV3</h2>
<!-- backwards compatibility -->
<a id="schemapayeedeltaresponsev3"></a>
<a id="schema_PayeeDeltaResponseV3"></a>
<a id="tocSpayeedeltaresponsev3"></a>
<a id="tocspayeedeltaresponsev3"></a>

```json
{
  "content": [
    {
      "dbaName": "Payee DBA Name",
      "displayName": "Payee1",
      "email": "payee1@example.com",
      "onboardedStatus": "onboardedStatus",
      "payeeCountry": "US",
      "payeeId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "remoteId": "payee_1"
    },
    {
      "dbaName": "Payee DBA Name",
      "displayName": "Payee1",
      "email": "payee1@example.com",
      "onboardedStatus": "onboardedStatus",
      "payeeCountry": "US",
      "payeeId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "remoteId": "payee_1"
    }
  ],
  "links": [
    {
      "href": "http://api.sandbox.velopayments.com/v3/payees/deltas?payorId=0a818933-087d-47f2-ad83-2f986ed087eb&updatedSince=2019-01-20T09:00:00+00:00&page=1&pageSize=1000",
      "rel": "first"
    },
    {
      "href": "http://api.sandbox.velopayments.com/v3/payees/deltas?payorId=0a818933-087d-47f2-ad83-2f986ed087eb&updatedSince=2019-01-20T09:00:00+00:00&page=1&pageSize=1000",
      "rel": "first"
    }
  ],
  "page": {
    "numberOfElements": 2,
    "page": 1,
    "pageSize": 25,
    "totalElements": 2,
    "totalPages": 1
  }
}
```

List Payee Changes Response Object

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|[[PayeeDeltaV3](#schemapayeedeltav3)]|false|none|none|
|links|[[PayeeDeltaResponseV3_links](#schemapayeedeltaresponsev3_links)]|false|none|none|
|page|[PayeeDeltaResponseV3_page](#schemapayeedeltaresponsev3_page)|false|none|none|

<h2 id="tocS_PayeeDeltaResponseV3_links">PayeeDeltaResponseV3_links</h2>
<!-- backwards compatibility -->
<a id="schemapayeedeltaresponsev3_links"></a>
<a id="schema_PayeeDeltaResponseV3_links"></a>
<a id="tocSpayeedeltaresponsev3_links"></a>
<a id="tocspayeedeltaresponsev3_links"></a>

```json
{
  "href": "http://api.sandbox.velopayments.com/v3/payees/deltas?payorId=0a818933-087d-47f2-ad83-2f986ed087eb&updatedSince=2019-01-20T09:00:00+00:00&page=1&pageSize=1000",
  "rel": "first"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|href|string|false|none|none|
|rel|string|false|none|none|

<h2 id="tocS_PayeeDeltaResponseV3_page">PayeeDeltaResponseV3_page</h2>
<!-- backwards compatibility -->
<a id="schemapayeedeltaresponsev3_page"></a>
<a id="schema_PayeeDeltaResponseV3_page"></a>
<a id="tocSpayeedeltaresponsev3_page"></a>
<a id="tocspayeedeltaresponsev3_page"></a>

```json
{
  "numberOfElements": 2,
  "page": 1,
  "pageSize": 25,
  "totalElements": 2,
  "totalPages": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|numberOfElements|integer|false|none|none|
|page|integer|false|none|none|
|pageSize|integer|false|none|none|
|totalElements|integer|false|none|none|
|totalPages|integer|false|none|none|

<h2 id="tocS_PayeeDeltaResponseV4">PayeeDeltaResponseV4</h2>
<!-- backwards compatibility -->
<a id="schemapayeedeltaresponsev4"></a>
<a id="schema_PayeeDeltaResponseV4"></a>
<a id="tocSpayeedeltaresponsev4"></a>
<a id="tocspayeedeltaresponsev4"></a>

```json
{
  "content": [
    {
      "dbaName": "Payee DBA Name",
      "displayName": "Payee1",
      "email": "payee1@example.com",
      "onboardedStatus": "onboardedStatus",
      "payeeCountry": "US",
      "payeeId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "remoteId": "payee_1"
    },
    {
      "dbaName": "Payee DBA Name",
      "displayName": "Payee1",
      "email": "payee1@example.com",
      "onboardedStatus": "onboardedStatus",
      "payeeCountry": "US",
      "payeeId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "remoteId": "payee_1"
    }
  ],
  "links": [
    {
      "href": "http://api.sandbox.velopayments.com/v4/payees/deltas?payorId=0a818933-087d-47f2-ad83-2f986ed087eb&updatedSince=2019-01-20T09:00:00+00:00&page=1&pageSize=1000",
      "rel": "first"
    },
    {
      "href": "http://api.sandbox.velopayments.com/v4/payees/deltas?payorId=0a818933-087d-47f2-ad83-2f986ed087eb&updatedSince=2019-01-20T09:00:00+00:00&page=1&pageSize=1000",
      "rel": "first"
    }
  ],
  "page": {
    "numberOfElements": 2,
    "page": 1,
    "pageSize": 25,
    "totalElements": 2,
    "totalPages": 1
  }
}
```

List Payee Changes Response Object

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|[[PayeeDeltaV4](#schemapayeedeltav4)]|false|none|none|
|links|[[PayeeDeltaResponseV4_links](#schemapayeedeltaresponsev4_links)]|false|none|none|
|page|[PayeeDeltaResponseV3_page](#schemapayeedeltaresponsev3_page)|false|none|none|

<h2 id="tocS_PayeeDeltaResponseV4_links">PayeeDeltaResponseV4_links</h2>
<!-- backwards compatibility -->
<a id="schemapayeedeltaresponsev4_links"></a>
<a id="schema_PayeeDeltaResponseV4_links"></a>
<a id="tocSpayeedeltaresponsev4_links"></a>
<a id="tocspayeedeltaresponsev4_links"></a>

```json
{
  "href": "http://api.sandbox.velopayments.com/v4/payees/deltas?payorId=0a818933-087d-47f2-ad83-2f986ed087eb&updatedSince=2019-01-20T09:00:00+00:00&page=1&pageSize=1000",
  "rel": "first"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|href|string|false|none|none|
|rel|string|false|none|none|

<h2 id="tocS_PayeeDeltaV3">PayeeDeltaV3</h2>
<!-- backwards compatibility -->
<a id="schemapayeedeltav3"></a>
<a id="schema_PayeeDeltaV3"></a>
<a id="tocSpayeedeltav3"></a>
<a id="tocspayeedeltav3"></a>

```json
{
  "dbaName": "Payee DBA Name",
  "displayName": "Payee1",
  "email": "payee1@example.com",
  "onboardedStatus": "onboardedStatus",
  "payeeCountry": "US",
  "payeeId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "remoteId": "payee_1"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dbaName|string|false|none|none|
|displayName|string|false|none|none|
|email|string(email) \| null|false|none|none|
|onboardedStatus|string|false|none|Onboarded status. One of the following values: CREATED, INVITED, REGISTERED, ONBOARDED|
|payeeCountry|string|false|none|none|
|payeeId|string(uuid)|true|read-only|none|
|remoteId|string|true|none|none|

<h2 id="tocS_PayeeDeltaV4">PayeeDeltaV4</h2>
<!-- backwards compatibility -->
<a id="schemapayeedeltav4"></a>
<a id="schema_PayeeDeltaV4"></a>
<a id="tocSpayeedeltav4"></a>
<a id="tocspayeedeltav4"></a>

```json
{
  "dbaName": "Payee DBA Name",
  "displayName": "Payee1",
  "email": "payee1@example.com",
  "onboardedStatus": "onboardedStatus",
  "payeeCountry": "US",
  "payeeId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "remoteId": "payee_1"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dbaName|string|false|none|none|
|displayName|string|false|none|none|
|email|string(email) \| null|false|none|none|
|onboardedStatus|string|false|none|Payee onboarded status. One of the following value: CREATED, INVITED, REGISTERED, ONBOARDED|
|payeeCountry|string|false|none|Valid ISO 3166 2 character country code. See the <a href="https://www.iso.org/iso-3166-country-codes.html" target="_blank" a>ISO specification</a> for details.|
|payeeId|string(uuid)|true|read-only|none|
|remoteId|string|true|none|none|

<h2 id="tocS_PayeeDetailResponseV3">PayeeDetailResponseV3</h2>
<!-- backwards compatibility -->
<a id="schemapayeedetailresponsev3"></a>
<a id="schema_PayeeDetailResponseV3"></a>
<a id="tocSpayeedetailresponsev3"></a>
<a id="tocspayeedetailresponsev3"></a>

```json
{
  "acceptTermsAndConditionsTimestamp": "2019-01-20T09:00:00Z",
  "address": {
    "city": "Key West",
    "country": "US",
    "countyOrProvince": "FL",
    "line1": "500 Duval St",
    "line2": "line2",
    "line3": "line3",
    "line4": "line4",
    "zipOrPostcode": "33945"
  },
  "cellphoneNumber": "1234567890",
  "challenge": {
    "description": "challenge description",
    "value": "challenge test"
  },
  "company": {
    "name": "ABC Group Plc",
    "operatingName": "ABC Co",
    "taxId": "123123123"
  },
  "country": "US",
  "created": "2019-01-20T09:00:00Z",
  "disabled": true,
  "disabledComment": "reason for disabled",
  "disabledUpdatedTimestamp": "2019-01-20T09:00:00Z",
  "displayName": "Bob",
  "email": "bob@example.com",
  "enhancedKycCompleted": true,
  "gracePeriodEndDate": "2019-01-20T00:00:00.000+0000",
  "individual": {
    "dateOfBirth": "1985-01-01",
    "name": {
      "firstName": "Bob",
      "lastName": "Smith",
      "otherNames": "A",
      "title": "Mr"
    },
    "nationalIdentification": "AB123456C"
  },
  "kycCompletedTimestamp": "2019-01-20T09:00:00+00:00",
  "language": "en-US",
  "marketingOptInDecision": true,
  "marketingOptInTimestamp": "2019-01-20T09:00:00+00:00",
  "onboardedStatus": "onboardedStatus",
  "pausePayment": true,
  "pausePaymentTimestamp": "2019-01-20T09:00:00+00:00",
  "payeeId": "2aa5d7e0-2ecb-403f-8494-1865ed0454e9",
  "payeeType": "payeeType",
  "payorRefs": [
    {
      "invitationStatus": "invitationStatus",
      "invitationStatusTimestamp": "2019-01-20T09:00:00Z",
      "payableIssues": [
        {
          "code": "3",
          "message": "payee-disabled"
        },
        {
          "code": "3",
          "message": "payee-disabled"
        }
      ],
      "payableStatus": true,
      "paymentChannelId": "70faaff7-2c32-4b44-b27f-f0b6c484e6f3",
      "payorId": "ba08877f-9d96-41e4-9c26-44a872d856ae",
      "remoteId": "uniqueIdForRemoteEntity"
    },
    {
      "invitationStatus": "invitationStatus",
      "invitationStatusTimestamp": "2019-01-20T09:00:00Z",
      "payableIssues": [
        {
          "code": "3",
          "message": "payee-disabled"
        },
        {
          "code": "3",
          "message": "payee-disabled"
        }
      ],
      "payableStatus": true,
      "paymentChannelId": "70faaff7-2c32-4b44-b27f-f0b6c484e6f3",
      "payorId": "ba08877f-9d96-41e4-9c26-44a872d856ae",
      "remoteId": "uniqueIdForRemoteEntity"
    }
  ],
  "watchlistOverrideComment": "watchlist override comment",
  "watchlistOverrideExpiresAtTimestamp": "2019-01-20T09:00:00Z",
  "watchlistStatus": "watchlistStatus",
  "watchlistStatusUpdatedTimestamp": "2019-01-20T09:00:00+00:00"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acceptTermsAndConditionsTimestamp|string(date-time) \| null|false|read-only|The timestamp when the payee last accepted T&Cs|
|address|[PayeeAddressV3](#schemapayeeaddressv3)|false|none|none|
|cellphoneNumber|string|false|none|none|
|challenge|[ChallengeV3](#schemachallengev3)|false|none|none|
|company|[CompanyV3](#schemacompanyv3)|false|none|none|
|country|string|false|none|Valid ISO 3166 2 character country code. See the <a href="https://www.iso.org/iso-3166-country-codes.html" target="_blank" a>ISO specification</a> for details.|
|created|string(date-time)|false|none|none|
|disabled|boolean|false|none|none|
|disabledComment|string|false|none|none|
|disabledUpdatedTimestamp|string(date-time)|false|none|none|
|displayName|string|false|none|none|
|email|string(email) \| null|false|none|none|
|enhancedKycCompleted|boolean|false|none|none|
|gracePeriodEndDate|string(date) \| null|false|read-only|none|
|individual|[IndividualV3](#schemaindividualv3)|false|none|none|
|kycCompletedTimestamp|string(date_time) \| null|false|none|none|
|language|string|false|none|An IETF BCP 47 language code which has been configured for use within this Velo environment.<BR><br>See the /v1/supportedLanguages endpoint to list the available codes for an environment.<br>|
|marketingOptInDecision|boolean|false|none|none|
|marketingOptInTimestamp|string(date_time) \| null|false|none|none|
|onboardedStatus|string|false|none|Onboarded status. One of the following values: CREATED, INVITED, REGISTERED, ONBOARDED|
|pausePayment|boolean|false|none|none|
|pausePaymentTimestamp|string(date_time) \| null|false|none|none|
|payeeId|string(uuid)|false|read-only|none|
|payeeType|string|false|none|Type of Payee. One of the following values: Individual, Company|
|payorRefs|[[PayeePayorRefV3](#schemapayeepayorrefv3)]|false|read-only|none|
|watchlistOverrideComment|string|false|none|none|
|watchlistOverrideExpiresAtTimestamp|string(date-time) \| null|false|none|none|
|watchlistStatus|string|false|none|Current watchlist status. One of the following values: NONE, PENDING, REVIEW, PASSED, FAILED|
|watchlistStatusUpdatedTimestamp|string(date_time) \| null|false|read-only|none|

<h2 id="tocS_PayeeDetailResponseV4">PayeeDetailResponseV4</h2>
<!-- backwards compatibility -->
<a id="schemapayeedetailresponsev4"></a>
<a id="schema_PayeeDetailResponseV4"></a>
<a id="tocSpayeedetailresponsev4"></a>
<a id="tocspayeedetailresponsev4"></a>

```json
{
  "acceptTermsAndConditionsTimestamp": "2019-01-20T09:00:00Z",
  "address": {
    "city": "Key West",
    "country": "US",
    "countyOrProvince": "FL",
    "line1": "500 Duval St",
    "line2": "line2",
    "line3": "line3",
    "line4": "line4",
    "zipOrPostcode": "33945"
  },
  "cellphoneNumber": "1234567890",
  "challenge": {
    "description": "challenge description",
    "value": "11984567"
  },
  "company": {
    "name": "ABC Group Plc",
    "operatingName": "ABC Co",
    "taxId": "123123123"
  },
  "country": "US",
  "created": "2019-01-20T09:00:00Z",
  "disabled": true,
  "disabledComment": "reason for disabled",
  "disabledUpdatedTimestamp": "2019-01-20T09:00:00Z",
  "displayName": "Bob",
  "email": "bob@example.com",
  "enhancedKycCompleted": true,
  "gracePeriodEndDate": "2019-01-20T00:00:00.000+0000",
  "individual": {
    "dateOfBirth": "1985-01-01",
    "name": {
      "firstName": "Bob",
      "lastName": "Smith",
      "otherNames": "A",
      "title": "Mr"
    },
    "nationalIdentification": "AB123456C"
  },
  "kycCompletedTimestamp": "2019-01-20T09:00:00+00:00",
  "language": "en-US",
  "marketingOptInDecision": true,
  "marketingOptInTimestamp": "2019-01-20T09:00:00+00:00",
  "onboardedStatus": "onboardedStatus",
  "pausePayment": true,
  "pausePaymentTimestamp": "2019-01-20T09:00:00+00:00",
  "payeeId": "2aa5d7e0-2ecb-403f-8494-1865ed0454e9",
  "payeeType": "payeeType",
  "payorRefs": [
    {
      "invitationStatus": "invitationStatus",
      "invitationStatusTimestamp": "2019-01-20T09:00:00Z",
      "payableIssues": [
        {
          "code": "3",
          "message": "payee-disabled"
        },
        {
          "code": "3",
          "message": "payee-disabled"
        }
      ],
      "payableStatus": true,
      "paymentChannelId": "70faaff7-2c32-4b44-b27f-f0b6c484e6f3",
      "payorId": "ba08877f-9d96-41e4-9c26-44a872d856ae",
      "remoteId": "uniqueIdForRemoteEntity"
    },
    {
      "invitationStatus": "invitationStatus",
      "invitationStatusTimestamp": "2019-01-20T09:00:00Z",
      "payableIssues": [
        {
          "code": "3",
          "message": "payee-disabled"
        },
        {
          "code": "3",
          "message": "payee-disabled"
        }
      ],
      "payableStatus": true,
      "paymentChannelId": "70faaff7-2c32-4b44-b27f-f0b6c484e6f3",
      "payorId": "ba08877f-9d96-41e4-9c26-44a872d856ae",
      "remoteId": "uniqueIdForRemoteEntity"
    }
  ],
  "watchlistOverrideComment": "watchlist override comment",
  "watchlistOverrideExpiresAtTimestamp": "2019-01-20T09:00:00Z",
  "watchlistStatus": "watchlistStatus",
  "watchlistStatusUpdatedTimestamp": "2019-01-20T09:00:00+00:00"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acceptTermsAndConditionsTimestamp|string(date-time) \| null|false|read-only|The timestamp when the payee last accepted T&Cs|
|address|[PayeeAddressV4](#schemapayeeaddressv4)|false|none|none|
|cellphoneNumber|string|false|none|none|
|challenge|[ChallengeV4](#schemachallengev4)|false|none|<p>Used to override the default challenge presented to the payee when they onboard</p><br><p>Not used after the payee has onboarded</p><br>|
|company|[CompanyV4](#schemacompanyv4)|false|none|none|
|country|string|false|none|none|
|created|string(date-time)|false|none|none|
|disabled|boolean|false|none|none|
|disabledComment|string|false|none|none|
|disabledUpdatedTimestamp|string(date-time)|false|none|none|
|displayName|string|false|none|none|
|email|string(email) \| null|false|none|none|
|enhancedKycCompleted|boolean|false|none|none|
|gracePeriodEndDate|string(date) \| null|false|read-only|none|
|individual|[IndividualV4](#schemaindividualv4)|false|none|none|
|kycCompletedTimestamp|string(date_time) \| null|false|none|none|
|language|string|false|none|An IETF BCP 47 language code which has been configured for use within this Velo environment.<BR><br>See the /v1/supportedLanguages endpoint to list the available codes for an environment.<br>|
|marketingOptInDecision|boolean|false|none|none|
|marketingOptInTimestamp|string(date_time) \| null|false|none|none|
|onboardedStatus|string|false|none|Payee onboarded status. One of the following values: CREATED, INVITED, REGISTERED, ONBOARDED|
|pausePayment|boolean|false|none|none|
|pausePaymentTimestamp|string(date_time) \| null|false|none|none|
|payeeId|string(uuid)|false|read-only|none|
|payeeType|string|false|none|Type of Payee. One of the following values: Individual, Company|
|payorRefs|[[PayeePayorRefV4](#schemapayeepayorrefv4)]|false|read-only|none|
|watchlistOverrideComment|string|false|none|none|
|watchlistOverrideExpiresAtTimestamp|string(date-time) \| null|false|none|none|
|watchlistStatus|string|false|none|Current watchlist status. One of the following values: NONE, PENDING, REVIEW, PASSED, FAILED|
|watchlistStatusUpdatedTimestamp|string(date_time) \| null|false|read-only|none|

<h2 id="tocS_PayeeDetailsChanged">PayeeDetailsChanged</h2>
<!-- backwards compatibility -->
<a id="schemapayeedetailschanged"></a>
<a id="schema_PayeeDetailsChanged"></a>
<a id="tocSpayeedetailschanged"></a>
<a id="tocspayeedetailschanged"></a>

```json
{
  "createdAt": "2020-06-18T15:09:42Z",
  "eventId": "270ab907-27ec-4b83-8028-0ff432bbdec4",
  "sourceType": "payment_status_changed",
  "payeeId": "cbd9280f-8fde-4190-b014-979d88f3ec54",
  "reasons": [
    {
      "code": "00001",
      "message": "payment channel disabled"
    }
  ]
}
```

Base type for all payee details changed events

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(date-time)|true|none|ISO8601 timestamp indicating when the source event was created|
|eventId|string(uuid)|true|none|UUID id of the source event in the Velo platform|
|sourceType|string|true|none|OA3 Schema type name for the source info which is used as the discriminator value to ensure that data binding works correctly|
|payeeId|string(uuid)|true|none|ID of this payee within the Velo platform|
|reasons|[[PayeeEvent_allOf_reasons](#schemapayeeevent_allof_reasons)]|false|none|The reasons for the event notification.|

<h2 id="tocS_PayeeEvent">PayeeEvent</h2>
<!-- backwards compatibility -->
<a id="schemapayeeevent"></a>
<a id="schema_PayeeEvent"></a>
<a id="tocSpayeeevent"></a>
<a id="tocspayeeevent"></a>

```json
{
  "createdAt": "2020-06-18T15:09:42Z",
  "eventId": "270ab907-27ec-4b83-8028-0ff432bbdec4",
  "sourceType": "payment_status_changed",
  "payeeId": "cbd9280f-8fde-4190-b014-979d88f3ec54",
  "reasons": [
    {
      "code": "00001",
      "message": "payment channel disabled"
    }
  ]
}
```

Base type for all Payee Events

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(date-time)|true|none|ISO8601 timestamp indicating when the source event was created|
|eventId|string(uuid)|true|none|UUID id of the source event in the Velo platform|
|sourceType|string|true|none|OA3 Schema type name for the source info which is used as the discriminator value to ensure that data binding works correctly|
|payeeId|string(uuid)|true|none|ID of this payee within the Velo platform|
|reasons|[[PayeeEvent_allOf_reasons](#schemapayeeevent_allof_reasons)]|false|none|The reasons for the event notification.|

<h2 id="tocS_PayeeEvent_allOf">PayeeEvent_allOf</h2>
<!-- backwards compatibility -->
<a id="schemapayeeevent_allof"></a>
<a id="schema_PayeeEvent_allOf"></a>
<a id="tocSpayeeevent_allof"></a>
<a id="tocspayeeevent_allof"></a>

```json
{
  "payeeId": "cbd9280f-8fde-4190-b014-979d88f3ec54",
  "reasons": [
    {
      "code": "00001",
      "message": "payment channel disabled"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|payeeId|string(uuid)|true|none|ID of this payee within the Velo platform|
|reasons|[[PayeeEvent_allOf_reasons](#schemapayeeevent_allof_reasons)]|false|none|The reasons for the event notification.|

<h2 id="tocS_PayeeEvent_allOf_reasons">PayeeEvent_allOf_reasons</h2>
<!-- backwards compatibility -->
<a id="schemapayeeevent_allof_reasons"></a>
<a id="schema_PayeeEvent_allOf_reasons"></a>
<a id="tocSpayeeevent_allof_reasons"></a>
<a id="tocspayeeevent_allof_reasons"></a>

```json
{
  "code": "00001",
  "message": "payment channel disabled"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|true|none|none|
|message|string|true|none|none|

<h2 id="tocS_PayeeInvitationStatusResponseV3">PayeeInvitationStatusResponseV3</h2>
<!-- backwards compatibility -->
<a id="schemapayeeinvitationstatusresponsev3"></a>
<a id="schema_PayeeInvitationStatusResponseV3"></a>
<a id="tocSpayeeinvitationstatusresponsev3"></a>
<a id="tocspayeeinvitationstatusresponsev3"></a>

```json
{
  "gracePeriodEndDate": "2019-01-20T00:00:00.000+0000",
  "invitationStatus": "invitationStatus",
  "payeeId": "2aa5d7e0-2ecb-403f-8494-1865ed0454e9"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gracePeriodEndDate|string(date)|false|none|none|
|invitationStatus|string|true|none|Payee invitation status. One of the following values: ACCEPTED, PENDING, DECLINED|
|payeeId|string(uuid)|true|none|none|

<h2 id="tocS_PayeeInvitationStatusResponseV4">PayeeInvitationStatusResponseV4</h2>
<!-- backwards compatibility -->
<a id="schemapayeeinvitationstatusresponsev4"></a>
<a id="schema_PayeeInvitationStatusResponseV4"></a>
<a id="tocSpayeeinvitationstatusresponsev4"></a>
<a id="tocspayeeinvitationstatusresponsev4"></a>

```json
{
  "gracePeriodEndDate": "2019-01-20T00:00:00.000+0000",
  "invitationStatus": "invitationStatus",
  "payeeId": "2aa5d7e0-2ecb-403f-8494-1865ed0454e9"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gracePeriodEndDate|string(date)|false|none|none|
|invitationStatus|string|true|none|Payee invitation status. One of the following values: ACCEPTED, PENDING, DECLINED|
|payeeId|string(uuid)|true|none|none|

<h2 id="tocS_PayeePayorRefV3">PayeePayorRefV3</h2>
<!-- backwards compatibility -->
<a id="schemapayeepayorrefv3"></a>
<a id="schema_PayeePayorRefV3"></a>
<a id="tocSpayeepayorrefv3"></a>
<a id="tocspayeepayorrefv3"></a>

```json
{
  "invitationStatus": "invitationStatus",
  "invitationStatusTimestamp": "2019-01-20T09:00:00Z",
  "payableIssues": [
    {
      "code": "3",
      "message": "payee-disabled"
    },
    {
      "code": "3",
      "message": "payee-disabled"
    }
  ],
  "payableStatus": true,
  "paymentChannelId": "70faaff7-2c32-4b44-b27f-f0b6c484e6f3",
  "payorId": "ba08877f-9d96-41e4-9c26-44a872d856ae",
  "remoteId": "uniqueIdForRemoteEntity"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|invitationStatus|string|false|none|none|
|invitationStatusTimestamp|string(date-time) \| null|false|none|The timestamp when the invitation status is updated|
|payableIssues|[[PayableIssueV3](#schemapayableissuev3)]|false|none|Indicates any conditions which prevent the payee from being payable for this payor|
|payableStatus|boolean|false|none|Indicates if the payee is payable for this payor|
|paymentChannelId|string(uuid)|false|none|none|
|payorId|string(uuid)|false|none|none|
|remoteId|string|false|none|none|

<h2 id="tocS_PayeePayorRefV4">PayeePayorRefV4</h2>
<!-- backwards compatibility -->
<a id="schemapayeepayorrefv4"></a>
<a id="schema_PayeePayorRefV4"></a>
<a id="tocSpayeepayorrefv4"></a>
<a id="tocspayeepayorrefv4"></a>

```json
{
  "invitationStatus": "invitationStatus",
  "invitationStatusTimestamp": "2019-01-20T09:00:00Z",
  "payableIssues": [
    {
      "code": "3",
      "message": "payee-disabled"
    },
    {
      "code": "3",
      "message": "payee-disabled"
    }
  ],
  "payableStatus": true,
  "paymentChannelId": "70faaff7-2c32-4b44-b27f-f0b6c484e6f3",
  "payorId": "ba08877f-9d96-41e4-9c26-44a872d856ae",
  "remoteId": "uniqueIdForRemoteEntity"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|invitationStatus|string|false|none|none|
|invitationStatusTimestamp|string(date-time) \| null|false|none|The timestamp when the invitation status is updated|
|payableIssues|[[PayableIssueV4](#schemapayableissuev4)]|false|none|Indicates any conditions which prevent the payee from being payable for this payor|
|payableStatus|boolean|false|none|Indicates if the payee is payable for this payor|
|paymentChannelId|string(uuid)|false|none|none|
|payorId|string(uuid)|false|none|none|
|remoteId|string|false|none|none|

<h2 id="tocS_PayeeType">PayeeType</h2>
<!-- backwards compatibility -->
<a id="schemapayeetype"></a>
<a id="schema_PayeeType"></a>
<a id="tocSpayeetype"></a>
<a id="tocspayeetype"></a>

```json
"COMPANY"
```

<h2 id="tocS_PayeeTypeEnum">PayeeTypeEnum</h2>
<!-- backwards compatibility -->
<a id="schemapayeetypeenum"></a>
<a id="schema_PayeeTypeEnum"></a>
<a id="tocSpayeetypeenum"></a>
<a id="tocspayeetypeenum"></a>

```json
"Individual"
```

The type of the payee

<h2 id="tocS_PayeeType_2">PayeeType_2</h2>
<!-- backwards compatibility -->
<a id="schemapayeetype_2"></a>
<a id="schema_PayeeType_2"></a>
<a id="tocSpayeetype_2"></a>
<a id="tocspayeetype_2"></a>

```json
"string"
```

Type of Payee. One of the following values: Individual, Company

<h2 id="tocS_PayeeUserSelfUpdateRequest">PayeeUserSelfUpdateRequest</h2>
<!-- backwards compatibility -->
<a id="schemapayeeuserselfupdaterequest"></a>
<a id="schema_PayeeUserSelfUpdateRequest"></a>
<a id="tocSpayeeuserselfupdaterequest"></a>
<a id="tocspayeeuserselfupdaterequest"></a>

```json
{
  "email": "foo@example.com",
  "firstName": "John",
  "lastName": "Doe",
  "primaryContactNumber": "11235555555",
  "secondaryContactNumber": "11235555550",
  "smsNumber": "11235555555"
}
```

<p>All properties are optional</p>
<p>Only provided properties will be updated</p>
<p>Use null to null out a property that is allowed to be nullable</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string(email) \| null|false|none|the email address of the user|
|firstName|string \| null|false|none|none|
|lastName|string \| null|false|none|none|
|primaryContactNumber|string \| null|false|none|The main contact number for the user<br>|
|secondaryContactNumber|string \| null|false|none|The secondary contact number for the user<br>|
|smsNumber|string \| null|false|none|The phone number of a device that the user can receive sms messages on<br>|

<h2 id="tocS_PaymentAuditCurrency">PaymentAuditCurrency</h2>
<!-- backwards compatibility -->
<a id="schemapaymentauditcurrency"></a>
<a id="schema_PaymentAuditCurrency"></a>
<a id="tocSpaymentauditcurrency"></a>
<a id="tocspaymentauditcurrency"></a>

```json
"EUR"
```

ISO-4217 3 character currency code

<h2 id="tocS_PaymentAuditCurrencyV3">PaymentAuditCurrencyV3</h2>
<!-- backwards compatibility -->
<a id="schemapaymentauditcurrencyv3"></a>
<a id="schema_PaymentAuditCurrencyV3"></a>
<a id="tocSpaymentauditcurrencyv3"></a>
<a id="tocspaymentauditcurrencyv3"></a>

```json
"str"
```

ISO 3 character currency code

<h2 id="tocS_PaymentChannelCountry">PaymentChannelCountry</h2>
<!-- backwards compatibility -->
<a id="schemapaymentchannelcountry"></a>
<a id="schema_PaymentChannelCountry"></a>
<a id="tocSpaymentchannelcountry"></a>
<a id="tocspaymentchannelcountry"></a>

```json
{
  "isoCountryCode": "US",
  "rules": [
    {
      "displayName": "Account Name",
      "displayOrder": 0,
      "element": "accountName",
      "maxLength": 50,
      "minLength": 5,
      "required": true,
      "validation": "^[0-9]{6,11}$"
    },
    {
      "displayName": "Account Name",
      "displayOrder": 0,
      "element": "accountName",
      "maxLength": 50,
      "minLength": 5,
      "required": true,
      "validation": "^[0-9]{6,11}$"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|isoCountryCode|string|true|none|The ISO code for the country|
|rules|[[PaymentChannelRule](#schemapaymentchannelrule)]|true|none|The rules for the given country|

<h2 id="tocS_PaymentChannelRule">PaymentChannelRule</h2>
<!-- backwards compatibility -->
<a id="schemapaymentchannelrule"></a>
<a id="schema_PaymentChannelRule"></a>
<a id="tocSpaymentchannelrule"></a>
<a id="tocspaymentchannelrule"></a>

```json
{
  "displayName": "Account Name",
  "displayOrder": 0,
  "element": "accountName",
  "maxLength": 50,
  "minLength": 5,
  "required": true,
  "validation": "^[0-9]{6,11}$"
}
```

Rules that will get applied when creating or updating a payment channel for the given country

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|true|none|User friendly name|
|displayOrder|integer|false|none|none|
|element|string|true|none|<p>the rule element</p><br><p>will match a given element name for a payment channel configuration<br>|
|maxLength|integer|false|none|maximum length of the element data|
|minLength|integer|false|none|mininum length of the element data|
|required|boolean|true|none|is this element required|
|validation|string|true|none|a regex to validate the element data|

<h2 id="tocS_PaymentChannelRulesResponse">PaymentChannelRulesResponse</h2>
<!-- backwards compatibility -->
<a id="schemapaymentchannelrulesresponse"></a>
<a id="schema_PaymentChannelRulesResponse"></a>
<a id="tocSpaymentchannelrulesresponse"></a>
<a id="tocspaymentchannelrulesresponse"></a>

```json
{
  "bank": [
    {
      "isoCountryCode": "US",
      "rules": [
        {
          "displayName": "Account Name",
          "displayOrder": 0,
          "element": "accountName",
          "maxLength": 50,
          "minLength": 5,
          "required": true,
          "validation": "^[0-9]{6,11}$"
        },
        {
          "displayName": "Account Name",
          "displayOrder": 0,
          "element": "accountName",
          "maxLength": 50,
          "minLength": 5,
          "required": true,
          "validation": "^[0-9]{6,11}$"
        }
      ]
    },
    {
      "isoCountryCode": "US",
      "rules": [
        {
          "displayName": "Account Name",
          "displayOrder": 0,
          "element": "accountName",
          "maxLength": 50,
          "minLength": 5,
          "required": true,
          "validation": "^[0-9]{6,11}$"
        },
        {
          "displayName": "Account Name",
          "displayOrder": 0,
          "element": "accountName",
          "maxLength": 50,
          "minLength": 5,
          "required": true,
          "validation": "^[0-9]{6,11}$"
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bank|[[PaymentChannelCountry](#schemapaymentchannelcountry)]|false|none|none|

<h2 id="tocS_PaymentDelta">PaymentDelta</h2>
<!-- backwards compatibility -->
<a id="schemapaymentdelta"></a>
<a id="schema_PaymentDelta"></a>
<a id="tocSpaymentdelta"></a>
<a id="tocspaymentdelta"></a>

```json
{
  "paymentAmount": 0,
  "paymentCurrency": "paymentCurrency",
  "paymentId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "payorPaymentId": "payorPaymentId",
  "payoutId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "sourceAmount": 6,
  "sourceCurrency": "sourceCurrency",
  "status": "status"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|paymentAmount|integer \| null|false|none|none|
|paymentCurrency|string \| null|false|none|none|
|paymentId|string(uuid)|true|read-only|none|
|payorPaymentId|string \| null|false|none|none|
|payoutId|string(uuid)|true|read-only|none|
|sourceAmount|integer \| null|false|none|none|
|sourceCurrency|string \| null|false|none|none|
|status|string \| null|false|none|none|

<h2 id="tocS_PaymentDeltaResponse">PaymentDeltaResponse</h2>
<!-- backwards compatibility -->
<a id="schemapaymentdeltaresponse"></a>
<a id="schema_PaymentDeltaResponse"></a>
<a id="tocSpaymentdeltaresponse"></a>
<a id="tocspaymentdeltaresponse"></a>

```json
{
  "content": [
    {
      "paymentAmount": 0,
      "paymentCurrency": "paymentCurrency",
      "paymentId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "payorPaymentId": "payorPaymentId",
      "payoutId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "sourceAmount": 6,
      "sourceCurrency": "sourceCurrency",
      "status": "status"
    },
    {
      "paymentAmount": 0,
      "paymentCurrency": "paymentCurrency",
      "paymentId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "payorPaymentId": "payorPaymentId",
      "payoutId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "sourceAmount": 6,
      "sourceCurrency": "sourceCurrency",
      "status": "status"
    }
  ],
  "links": [
    {
      "href": "href",
      "rel": "rel"
    },
    {
      "href": "href",
      "rel": "rel"
    }
  ],
  "page": {
    "numberOfElements": 0,
    "page": 5,
    "pageSize": 5,
    "totalElements": 6,
    "totalPages": 1
  }
}
```

List Payment Changes Response Object

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|[[PaymentDelta](#schemapaymentdelta)]|false|none|none|
|links|[[PagedPayeeResponseV3_links](#schemapagedpayeeresponsev3_links)]|false|none|none|
|page|[PagedPayeeInvitationStatusResponseV3_page](#schemapagedpayeeinvitationstatusresponsev3_page)|false|none|none|

<h2 id="tocS_PaymentDeltaResponseV1">PaymentDeltaResponseV1</h2>
<!-- backwards compatibility -->
<a id="schemapaymentdeltaresponsev1"></a>
<a id="schema_PaymentDeltaResponseV1"></a>
<a id="tocSpaymentdeltaresponsev1"></a>
<a id="tocspaymentdeltaresponsev1"></a>

```json
{
  "content": [
    {
      "paymentAmount": 0,
      "paymentCurrency": "paymentCurrency",
      "paymentId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "payorPaymentId": "payorPaymentId",
      "payoutId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "sourceAmount": 6,
      "sourceCurrency": "sourceCurrency",
      "status": "status"
    },
    {
      "paymentAmount": 0,
      "paymentCurrency": "paymentCurrency",
      "paymentId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "payorPaymentId": "payorPaymentId",
      "payoutId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "sourceAmount": 6,
      "sourceCurrency": "sourceCurrency",
      "status": "status"
    }
  ],
  "links": [
    {
      "href": "href",
      "rel": "rel"
    },
    {
      "href": "href",
      "rel": "rel"
    }
  ],
  "page": {
    "numberOfElements": 0,
    "page": 5,
    "pageSize": 5,
    "totalElements": 6,
    "totalPages": 1
  }
}
```

List Payment Changes Response Object

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|[[PaymentDeltaV1](#schemapaymentdeltav1)]|false|none|none|
|links|[[PagedPayeeResponseV3_links](#schemapagedpayeeresponsev3_links)]|false|none|none|
|page|[PagedPayeeInvitationStatusResponseV3_page](#schemapagedpayeeinvitationstatusresponsev3_page)|false|none|none|

<h2 id="tocS_PaymentDeltaV1">PaymentDeltaV1</h2>
<!-- backwards compatibility -->
<a id="schemapaymentdeltav1"></a>
<a id="schema_PaymentDeltaV1"></a>
<a id="tocSpaymentdeltav1"></a>
<a id="tocspaymentdeltav1"></a>

```json
{
  "paymentAmount": 0,
  "paymentCurrency": "paymentCurrency",
  "paymentId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "payorPaymentId": "payorPaymentId",
  "payoutId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "sourceAmount": 6,
  "sourceCurrency": "sourceCurrency",
  "status": "status"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|paymentAmount|integer \| null|false|none|none|
|paymentCurrency|string \| null|false|none|none|
|paymentId|string(uuid)|true|read-only|none|
|payorPaymentId|string \| null|false|none|none|
|payoutId|string(uuid)|true|read-only|none|
|sourceAmount|integer \| null|false|none|none|
|sourceCurrency|string \| null|false|none|none|
|status|string \| null|false|none|none|

<h2 id="tocS_PaymentEvent">PaymentEvent</h2>
<!-- backwards compatibility -->
<a id="schemapaymentevent"></a>
<a id="schema_PaymentEvent"></a>
<a id="tocSpaymentevent"></a>
<a id="tocspaymentevent"></a>

```json
{
  "createdAt": "2020-06-18T15:09:42Z",
  "eventId": "270ab907-27ec-4b83-8028-0ff432bbdec4",
  "sourceType": "payment_status_changed",
  "paymentId": "cbd9280f-8fde-4190-b014-979d88f3ec54",
  "payorPaymentId": "ourpayment-id12345",
  "payoutPayorIds": {
    "payoutFromPayorId": "35198f08-1c7b-4a91-8921-cd760ed92bca",
    "payoutToPayorId": "3eb99144-6ebf-4b02-9483-ad86b2ff1bca",
    "submittingPayorId": "ac207f97-663c-4429-9d57-ba5b35d6672d"
  }
}
```

Base type for all Payment Events

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(date-time)|true|none|ISO8601 timestamp indicating when the source event was created|
|eventId|string(uuid)|true|none|UUID id of the source event in the Velo platform|
|sourceType|string|true|none|OA3 Schema type name for the source info which is used as the discriminator value to ensure that data binding works correctly|
|paymentId|string(uuid)|true|none|ID of this payment within the Velo platform|
|payorPaymentId|string|false|none|ID of this payment in the payors system|
|payoutPayorIds|[PayoutPayorIds](#schemapayoutpayorids)|false|none|Holder for all payor ids associated with a Payout|

<h2 id="tocS_PaymentEventResponse">PaymentEventResponse</h2>
<!-- backwards compatibility -->
<a id="schemapaymenteventresponse"></a>
<a id="schema_PaymentEventResponse"></a>
<a id="tocSpaymenteventresponse"></a>
<a id="tocspaymenteventresponse"></a>

```json
{
  "accountName": "accountName",
  "accountNumber": "accountNumber",
  "eventDateTime": "2000-01-23T04:56:07.000+00:00",
  "eventId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "eventType": "eventType",
  "iban": "iban",
  "paymentAmount": 1299,
  "paymentCurrency": "EUR",
  "principal": "principal",
  "routingNumber": "routingNumber",
  "scheduledAt": "2000-01-23T04:56:07.000+00:00",
  "scheduledBy": "Aphra Behn",
  "scheduledFor": "2000-01-23T04:56:07.000+00:00",
  "sourceAmount": 1299,
  "sourceCurrency": "EUR"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountName|string|false|none|none|
|accountNumber|string|false|none|The account number attached to the event.|
|eventDateTime|string(date-time)|true|none|The date/time at which the event occurred.|
|eventId|string(uuid)|true|none|The id of the event.|
|eventType|string|true|none|One of the following values: PAYOUT_SUBMITTED, PAYOUT_COMPLETED, PAYOUT_INSTRUCTED_V3, BANK_PAYMENT_REQUESTED, SOURCE_AMOUNT_CONFIRMED, PAYMENT_SUBMITTED, PAYMENT_SUBMITTED_ACCEPTED, PAYMENT_SUBMITTED_REJECTED, PAYMENT_CONFIRMED, PAYMENT_AWAITING_FUNDS, PAYMENT_FUNDED, PAYMENT_UNFUNDED, PAYMENT_FAILED, PAYMENT_TRACKING_DETAILS_UPDATED, ACH_SUBMITTED_TO_ODFI, PAYMENT_ACCEPTED_BY_RAILS, ACH_RETURN_RECEIVED, RETURN_PAYMENT_FUNDING_REQUESTED, PAYOUT_BATCH_EXECUTED, PAYOUT_BATCH_QUOTE_EXPIRED, PAYOUT_BATCH_FUNDED, PAYOUT_BATCH_FUNDS_RETURN_REQUEST, PAYOUT_BATCH_FUNDS_RETURNED, PAYOUT_FUNDS_REQUEST, PAYOUT_FUNDS_GRANTED, PAYOUT_FUNDS_DENIED, PAYOUT_BATCH_QUOTED, PAYOUT_QUOTED, ACH_PAYMENT_RETURN_CANCELLED, RETURN_PAYMENT_CANCELLATION_REQUESTED, PAYOUT_WITHDRAWN, ORCHESTRATED_PAYMENT_BATCH_REQUESTED, ORCHESTRATED_PAYMENT_BATCH_CONFIRMED, ORCHESTRATED_PAYMENT_REQUESTED|
|iban|string|false|none|none|
|paymentAmount|integer(int64)|false|none|The destination amount exposed by the event.|
|paymentCurrency|string|false|none|ISO-4217 3 character currency code|
|principal|string|false|none|none|
|routingNumber|string|false|none|The routing number attached to the event.|
|scheduledAt|string(date-time)|false|none|none|
|scheduledBy|string|false|none|Optional display name as a hint for who scheduled the payout. Not populated if payout was scheduled by an application.|
|scheduledFor|string(date-time)|false|none|none|
|sourceAmount|integer(int64)|false|none|The source amount exposed by the event.|
|sourceCurrency|string|false|none|ISO-4217 3 character currency code|

<h2 id="tocS_PaymentEventResponseV3">PaymentEventResponseV3</h2>
<!-- backwards compatibility -->
<a id="schemapaymenteventresponsev3"></a>
<a id="schema_PaymentEventResponseV3"></a>
<a id="tocSpaymenteventresponsev3"></a>
<a id="tocspaymenteventresponsev3"></a>

```json
{
  "accountName": "My account",
  "accountNumber": "123123123",
  "eventDateTime": "2000-01-23T04:56:07.000+00:00",
  "eventId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "eventType": "eventType",
  "iban": "DE89 3704 0044 0532 0130 00",
  "paymentAmount": 1299,
  "paymentCurrency": "paymentCurrency",
  "principal": "Prinicple example",
  "routingNumber": "123123123",
  "sourceAmount": 1299,
  "sourceCurrency": "sourceCurrency"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountName|string|false|none|none|
|accountNumber|string|false|none|The account number attached to the event.|
|eventDateTime|string(date-time)|true|none|The date/time at which the event occurred.|
|eventId|string(uuid)|true|none|The id of the event.|
|eventType|string|true|none|The type of the event. One of the following values: PAYOUT_SUBMITTED, PAYOUT_COMPLETED, PAYOUT_INSTRUCTED_V3, BANK_PAYMENT_REQUESTED, SOURCE_AMOUNT_CONFIRMED, PAYMENT_SUBMITTED, PAYMENT_SUBMITTED_ACCEPTED, PAYMENT_SUBMITTED_REJECTED, PAYMENT_CONFIRMED, PAYMENT_AWAITING_FUNDS, PAYMENT_FUNDED, PAYMENT_UNFUNDED, PAYMENT_FAILED, ACH_SUBMITTED_TO_ODFI, PAYMENT_ACCEPTED_BY_RAILS, ACH_RETURN_RECEIVED, RETURN_PAYMENT_FUNDING_REQUESTED, PAYOUT_BATCH_EXECUTED, PAYOUT_BATCH_QUOTE_EXPIRED, PAYOUT_BATCH_FUNDED, PAYOUT_BATCH_FUNDS_RETURN_REQUEST, PAYOUT_BATCH_FUNDS_RETURNED, PAYOUT_FUNDS_REQUEST, PAYOUT_FUNDS_GRANTED, PAYOUT_FUNDS_DENIED, PAYOUT_BATCH_QUOTED, PAYOUT_QUOTED, ACH_PAYMENT_RETURN_CANCELLED, RETURN_PAYMENT_CANCELLATION_REQUESTED, PAYOUT_WITHDRAWN|
|iban|string|false|none|none|
|paymentAmount|integer(int64)|false|none|The destination amount exposed by the event.|
|paymentCurrency|string|false|none|ISO 3 character currency code|
|principal|string|false|none|none|
|routingNumber|string|false|none|The routing number attached to the event.|
|sourceAmount|integer(int64)|false|none|The source amount exposed by the event.|
|sourceCurrency|string|false|none|ISO 3 character currency code|

<h2 id="tocS_PaymentEvent_allOf">PaymentEvent_allOf</h2>
<!-- backwards compatibility -->
<a id="schemapaymentevent_allof"></a>
<a id="schema_PaymentEvent_allOf"></a>
<a id="tocSpaymentevent_allof"></a>
<a id="tocspaymentevent_allof"></a>

```json
{
  "paymentId": "cbd9280f-8fde-4190-b014-979d88f3ec54",
  "payorPaymentId": "ourpayment-id12345",
  "payoutPayorIds": {
    "payoutFromPayorId": "35198f08-1c7b-4a91-8921-cd760ed92bca",
    "payoutToPayorId": "3eb99144-6ebf-4b02-9483-ad86b2ff1bca",
    "submittingPayorId": "ac207f97-663c-4429-9d57-ba5b35d6672d"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|paymentId|string(uuid)|true|none|ID of this payment within the Velo platform|
|payorPaymentId|string|false|none|ID of this payment in the payors system|
|payoutPayorIds|[PayoutPayorIds](#schemapayoutpayorids)|false|none|Holder for all payor ids associated with a Payout|

<h2 id="tocS_PaymentInstructionV3">PaymentInstructionV3</h2>
<!-- backwards compatibility -->
<a id="schemapaymentinstructionv3"></a>
<a id="schema_PaymentInstructionV3"></a>
<a id="tocSpaymentinstructionv3"></a>
<a id="tocspaymentinstructionv3"></a>

```json
{
  "amount": 1299,
  "currency": "USD",
  "paymentMemo": "my memo",
  "paymentMetadata": "invoiceeId_123|abc001:12345|xyz002:4567",
  "payorPaymentId": "123211321ABSD",
  "remoteId": "remoteId1234",
  "remoteSystemId": "remoteSystemId",
  "sourceAccountName": "MyAccountName",
  "transmissionType": "ACH"
}
```

Instruction for creating a payment

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|integer(int64)|true|none|<p>Amount to send to Payee</p><br><p>The maximum payment amount is dependent on the currency</p><br>|
|currency|string|true|none|Valid ISO 4217 3 letter currency code. See the <a href="https://www.iso.org/iso-4217-currency-codes.html" target="_blank" a>ISO specification</a> for details.|
|paymentMemo|string|false|none|<p>Any value here will override the memo value in the parent payout</p><br><p>This should be the reference field on the statement seen by the payee (but not via ACH)</p><br>|
|paymentMetadata|string|false|none|<p>Metadata about the payment that may be relevant to the specific rails or remote system making the payout</p><br><p>The structure of the data will be dictated by the requirements of the payment rails</p><br>|
|payorPaymentId|string|false|none|A reference identifier for the payor for the given payee payment|
|remoteId|string|true|none|Your identifier for the payee|
|remoteSystemId|string|false|none|<p>The identifier for the remote payments system if not Velo</p><br><p>Should only be used after consultation with Velo Payments</p><br>|
|sourceAccountName|string|true|none|Must match a valid source account name belonging to the payor|
|transmissionType|string|false|none|Optionally choose a specific transmission method for the payment|

#### Enumerated Values

|Property|Value|
|---|---|
|transmissionType|SAME_DAY_ACH|
|transmissionType|WIRE|
|transmissionType|ACH|
|transmissionType|LOCAL|
|transmissionType|SWIFT|

<h2 id="tocS_PaymentRails">PaymentRails</h2>
<!-- backwards compatibility -->
<a id="schemapaymentrails"></a>
<a id="schema_PaymentRails"></a>
<a id="tocSpaymentrails"></a>
<a id="tocspaymentrails"></a>

```json
"string"
```

The id of the payment rails

<h2 id="tocS_PaymentRejectedOrReturned">PaymentRejectedOrReturned</h2>
<!-- backwards compatibility -->
<a id="schemapaymentrejectedorreturned"></a>
<a id="schema_PaymentRejectedOrReturned"></a>
<a id="tocSpaymentrejectedorreturned"></a>
<a id="tocspaymentrejectedorreturned"></a>

```json
{
  "createdAt": "2020-06-18T15:09:42Z",
  "eventId": "270ab907-27ec-4b83-8028-0ff432bbdec4",
  "sourceType": "payment_status_changed",
  "paymentId": "cbd9280f-8fde-4190-b014-979d88f3ec54",
  "payorPaymentId": "ourpayment-id12345",
  "payoutPayorIds": {
    "payoutFromPayorId": "35198f08-1c7b-4a91-8921-cd760ed92bca",
    "payoutToPayorId": "3eb99144-6ebf-4b02-9483-ad86b2ff1bca",
    "submittingPayorId": "ac207f97-663c-4429-9d57-ba5b35d6672d"
  },
  "status": "ACCEPTED",
  "reasonCode": "VE0001",
  "reasonMessage": "VE0001"
}
```

Base type for all rejection or return payment events

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(date-time)|true|none|ISO8601 timestamp indicating when the source event was created|
|eventId|string(uuid)|true|none|UUID id of the source event in the Velo platform|
|sourceType|string|true|none|OA3 Schema type name for the source info which is used as the discriminator value to ensure that data binding works correctly|
|paymentId|string(uuid)|true|none|ID of this payment within the Velo platform|
|payorPaymentId|string|false|none|ID of this payment in the payors system|
|payoutPayorIds|[PayoutPayorIds](#schemapayoutpayorids)|false|none|Holder for all payor ids associated with a Payout|
|status|string|true|none|The new status of the payment. One of "SUBMITTED" "ACCEPTED" "REJECTED" "ACCEPTED_BY_RAILS" "CONFIRMED" "RETURNED" "WITHDRAWN"|
|reasonCode|string|true|none|The Velo code that indicates why the payment was rejected or returned|
|reasonMessage|string|true|none|The description of why the payment was rejected or returned|

<h2 id="tocS_PaymentRejectedOrReturned_allOf">PaymentRejectedOrReturned_allOf</h2>
<!-- backwards compatibility -->
<a id="schemapaymentrejectedorreturned_allof"></a>
<a id="schema_PaymentRejectedOrReturned_allOf"></a>
<a id="tocSpaymentrejectedorreturned_allof"></a>
<a id="tocspaymentrejectedorreturned_allof"></a>

```json
{
  "reasonCode": "VE0001",
  "reasonMessage": "VE0001"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reasonCode|string|true|none|The Velo code that indicates why the payment was rejected or returned|
|reasonMessage|string|true|none|The description of why the payment was rejected or returned|

<h2 id="tocS_PaymentResponseV3">PaymentResponseV3</h2>
<!-- backwards compatibility -->
<a id="schemapaymentresponsev3"></a>
<a id="schema_PaymentResponseV3"></a>
<a id="tocSpaymentresponsev3"></a>
<a id="tocspaymentresponsev3"></a>

```json
{
  "accountName": "My Account Name",
  "accountNumber": "123123232323",
  "countryCode": "US",
  "events": [
    {
      "accountName": "My account",
      "accountNumber": "123123123",
      "eventDateTime": "2000-01-23T04:56:07.000+00:00",
      "eventId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "eventType": "eventType",
      "iban": "DE89 3704 0044 0532 0130 00",
      "paymentAmount": 1299,
      "paymentCurrency": "paymentCurrency",
      "principal": "Prinicple example",
      "routingNumber": "123123123",
      "sourceAmount": 1299,
      "sourceCurrency": "sourceCurrency"
    },
    {
      "accountName": "My account",
      "accountNumber": "123123123",
      "eventDateTime": "2000-01-23T04:56:07.000+00:00",
      "eventId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "eventType": "eventType",
      "iban": "DE89 3704 0044 0532 0130 00",
      "paymentAmount": 1299,
      "paymentCurrency": "paymentCurrency",
      "principal": "Prinicple example",
      "routingNumber": "123123123",
      "sourceAmount": 1299,
      "sourceCurrency": "sourceCurrency"
    }
  ],
  "filenameReference": "file ref",
  "fundingStatus": "fundingStatus",
  "iban": "DE89 3704 0044 0532 0130 00",
  "individualIdentificationNumber": "1231231adf",
  "invertedRate": 1.4658129,
  "payeeId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "paymentAmount": 0,
  "paymentChannelId": "123asdf",
  "paymentChannelName": "My Payment Channel",
  "paymentCurrency": "paymentCurrency",
  "paymentId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "paymentMemo": "Payment memo",
  "paymentScheme": "paymentScheme",
  "payorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "payorName": "payorName",
  "payorPaymentId": "123123asdf",
  "quoteId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "railsBatchId": "railsBatchId",
  "railsId": "asdf123",
  "railsPaymentId": "railsPaymentId",
  "rate": 6.0274563,
  "rejectionReason": "rejectionReason",
  "remoteId": "aasdf123",
  "returnCost": 1232,
  "returnReason": "Some Reason Value",
  "routingNumber": "123123123123",
  "sourceAccountId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "sourceAccountName": "My Account",
  "sourceAmount": 12345,
  "sourceCurrency": "sourceCurrency",
  "status": "status",
  "submittedDateTime": "2000-01-23T04:56:07.000+00:00",
  "traceNumber": "abodu123"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountName|string|false|none|none|
|accountNumber|string|false|none|The account number for the account which will receive the payment.|
|countryCode|string|false|none|The country code of the payment channel.|
|events|[[PaymentEventResponseV3](#schemapaymenteventresponsev3)]|true|none|none|
|filenameReference|string|false|none|ACH file payment was submitted in, if applicable|
|fundingStatus|string|true|none|The funding status of the payment. One of the following values: [FUNDED, INSTRUCTED, UNFUNDED|
|iban|string|false|none|The iban for the payment.|
|individualIdentificationNumber|string|false|none|Individual Identification Number assigned to the payment in the ACH file, if applicable|
|invertedRate|number(float)|false|none|The inverted FX rate for the payment, if FX was involved. **Note** that (depending on the role of the caller) this information may not be displayed|
|payeeId|string(uuid)|true|none|The id of the paymeee|
|paymentAmount|integer|true|none|The amount which the payee will receive|
|paymentChannelId|string|false|none|none|
|paymentChannelName|string|false|none|none|
|paymentCurrency|string|false|none|ISO 3 character currency code|
|paymentId|string(uuid)|true|none|The id of the payment|
|paymentMemo|string|false|none|The payment memo set by the payor|
|paymentScheme|string|false|none|none|
|payorId|string(uuid)|true|none|The id of the payor|
|payorName|string|false|none|The name of the payor|
|payorPaymentId|string|false|none|none|
|quoteId|string(uuid)|true|none|The quote Id used for the FX|
|railsBatchId|string|false|none|none|
|railsId|string|true|none|The rails ID. Default value is RAILS ID UNAVAILABLE when not populated.|
|railsPaymentId|string|false|none|none|
|rate|number(float)|false|none|The FX rate for the payment, if FX was involved. **Note** that (depending on the role of the caller) this information may not be displayed|
|rejectionReason|string|false|none|none|
|remoteId|string|false|none|The remote id by which the payor refers to the payee. Only populated once payment is confirmed|
|returnCost|integer|false|none|The return cost if a returned payment.|
|returnReason|string|false|none|none|
|routingNumber|string|false|none|The routing number for the payment.|
|sourceAccountId|string(uuid)|true|none|The id of the source account from which the payment was taken|
|sourceAccountName|string|false|none|The name of the source account from which the payment was taken|
|sourceAmount|integer|false|none|The source amount for the payment (amount debited to make the payment)|
|sourceCurrency|string|false|none|ISO 3 character currency code|
|status|string|true|none|Current status of the payment. One of the following values: ACCEPTED, AWAITING_FUNDS, FUNDED, UNFUNDED, BANK_PAYMENT_REQUESTED, REJECTED, ACCEPTED_BY_RAILS, CONFIRMED, FAILED, WITHDRAWN|
|submittedDateTime|string(date-time)|true|none|none|
|traceNumber|string|false|none|Trace Number assigned to the payment in the ACH file, if applicable|

<h2 id="tocS_PaymentResponseV4">PaymentResponseV4</h2>
<!-- backwards compatibility -->
<a id="schemapaymentresponsev4"></a>
<a id="schema_PaymentResponseV4"></a>
<a id="tocSpaymentresponsev4"></a>
<a id="tocspaymentresponsev4"></a>

```json
{
  "accountName": "My Account Name",
  "accountNumber": "123123232323",
  "autoWithdrawnReasonCode": "autoWithdrawnReasonCode",
  "countryCode": "US",
  "events": [
    {
      "accountName": "accountName",
      "accountNumber": "accountNumber",
      "eventDateTime": "2000-01-23T04:56:07.000+00:00",
      "eventId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "eventType": "eventType",
      "iban": "iban",
      "paymentAmount": 1299,
      "paymentCurrency": "EUR",
      "principal": "principal",
      "routingNumber": "routingNumber",
      "scheduledAt": "2000-01-23T04:56:07.000+00:00",
      "scheduledBy": "Aphra Behn",
      "scheduledFor": "2000-01-23T04:56:07.000+00:00",
      "sourceAmount": 1299,
      "sourceCurrency": "EUR"
    },
    {
      "accountName": "accountName",
      "accountNumber": "accountNumber",
      "eventDateTime": "2000-01-23T04:56:07.000+00:00",
      "eventId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "eventType": "eventType",
      "iban": "iban",
      "paymentAmount": 1299,
      "paymentCurrency": "EUR",
      "principal": "principal",
      "routingNumber": "routingNumber",
      "scheduledAt": "2000-01-23T04:56:07.000+00:00",
      "scheduledBy": "Aphra Behn",
      "scheduledFor": "2000-01-23T04:56:07.000+00:00",
      "sourceAmount": 1299,
      "sourceCurrency": "EUR"
    }
  ],
  "filenameReference": "file ref",
  "fundingStatus": "fundingStatus",
  "iban": "DE89 3704 0044 0532 0130 00",
  "individualIdentificationNumber": "1231231adf",
  "invertedRate": 3.616076749251911,
  "isPaymentCcyBaseCcy": true,
  "payeeAddressCountryCode": "US",
  "payeeId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "paymentAmount": 7,
  "paymentChannelId": "123asdf",
  "paymentChannelName": "My Payment Channel",
  "paymentCurrency": "EUR",
  "paymentId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "paymentMemo": "Payment memo",
  "paymentMetadata": "sample metadata",
  "paymentScheme": "paymentScheme",
  "paymentTrackingReference": "paymentTrackingReference",
  "payorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "payorName": "payorName",
  "payorPaymentId": "123123asdf",
  "payout": {
    "payoutFrom": {
      "dbaName": "dbaName",
      "payorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "payorName": "payorName",
      "principal": "principal",
      "principalId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
    },
    "payoutId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "payoutTo": {
      "dbaName": "dbaName",
      "payorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "payorName": "payorName",
      "principal": "principal",
      "principalId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
    }
  },
  "postInstructFxInfo": {
    "fxMode": "MANUAL",
    "fxStatus": "INITIATED",
    "fxStatusUpdatedAt": "2000-01-23T04:56:07.000+00:00",
    "fxTransactionReference": "AB123GHI"
  },
  "quoteId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "railsBatchId": "railsBatchId",
  "railsId": "asdf123",
  "railsPaymentId": "railsPaymentId",
  "rate": 9.301444243932576,
  "rejectionReason": "rejectionReason",
  "remoteId": "aasdf123",
  "remoteSystemId": "REMOTE_SYSTEM_ID",
  "remoteSystemPaymentId": "remoteSystemPaymentId",
  "returnCost": 1232,
  "returnReason": "Some Reason Value",
  "routingNumber": "123123123123",
  "schedule": {
    "notificationsEnabled": true,
    "scheduleStatus": "SCHEDULED",
    "scheduledAt": "2000-01-23T04:56:07.000+00:00",
    "scheduledBy": "Aphra Behn",
    "scheduledByPrincipalId": "8946953b-1e3b-49cf-9da4-b704cbb78f3e",
    "scheduledFor": "2000-01-23T04:56:07.000+00:00"
  },
  "sourceAccountId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "sourceAccountName": "My Account",
  "sourceAmount": 12345,
  "sourceCurrency": "EUR",
  "status": "status",
  "submittedDateTime": "2000-01-23T04:56:07.000+00:00",
  "traceNumber": "abodu123",
  "transmissionType": "transmissionType",
  "withdrawable": true,
  "withdrawnReason": "withdrawnReason"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountName|string|false|none|none|
|accountNumber|string|false|none|The account number for the account which will receive the payment.|
|autoWithdrawnReasonCode|string|false|none|Populated with rejection reason code if the payment was withdrawn automatically at instruct time|
|countryCode|string|false|none|The country code of the payment channel.|
|events|[[PaymentEventResponse](#schemapaymenteventresponse)]|true|none|none|
|filenameReference|string|false|none|ACH file payment was submitted in, if applicable|
|fundingStatus|string|true|none|Current funding status of the payment. One of the following values: FUNDED, INSTRUCTED, UNFUNDED|
|iban|string|false|none|The iban for the payment.|
|individualIdentificationNumber|string|false|none|Individual Identification Number assigned to the payment in the ACH file, if applicable|
|invertedRate|number(double)|false|none|The inverted FX rate for the payment, if FX was involved. **Note** that (depending on the role of the caller) this information may not be displayed|
|isPaymentCcyBaseCcy|boolean|false|none|none|
|payeeAddressCountryCode|string|false|none|The country code of the payee's address.|
|payeeId|string(uuid)|true|none|The id of the paymeee|
|paymentAmount|integer|true|none|The amount which the payee will receive|
|paymentChannelId|string|false|none|none|
|paymentChannelName|string|false|none|none|
|paymentCurrency|string|false|none|ISO-4217 3 character currency code|
|paymentId|string(uuid)|true|none|The id of the payment|
|paymentMemo|string|false|none|The payment memo set by the payor|
|paymentMetadata|string|false|none|Metadata for the payment|
|paymentScheme|string|false|none|none|
|paymentTrackingReference|string|false|none|none|
|payorId|string(uuid)|true|none|The id of the payor|
|payorName|string|false|none|The name of the payor|
|payorPaymentId|string|false|none|none|
|payout|[PaymentResponseV4_payout](#schemapaymentresponsev4_payout)|false|none|none|
|postInstructFxInfo|[PostInstructFxInfo](#schemapostinstructfxinfo)|false|none|FX details relating to a payout that was executed or is still waiting to be executed|
|quoteId|string(uuid)|true|none|The quote Id used for the FX|
|railsBatchId|string|false|none|none|
|railsId|string|true|none|The rails ID. Default value is RAILS ID UNAVAILABLE when not populated.|
|railsPaymentId|string|false|none|none|
|rate|number(double)|false|none|The FX rate for the payment, if FX was involved. **Note** that (depending on the role of the caller) this information may not be displayed|
|rejectionReason|string|false|none|none|
|remoteId|string|false|none|The remote id by which the payor refers to the payee. Only populated once payment is confirmed|
|remoteSystemId|string|false|none|The velo id of the remote system orchestrating the payment. Not populated for normal Velo payments.|
|remoteSystemPaymentId|string|false|none|The id of the payment in the remote system. Not populated for normal Velo payments.|
|returnCost|integer|false|none|The return cost if a returned payment.|
|returnReason|string|false|none|none|
|routingNumber|string|false|none|The routing number for the payment.|
|schedule|[PayoutSchedule](#schemapayoutschedule)|false|none|Details relating to a payout that was executed via a schedule or is still waiting to be executed|
|sourceAccountId|string(uuid)|true|none|The id of the source account from which the payment was taken|
|sourceAccountName|string|false|none|The name of the source account from which the payment was taken|
|sourceAmount|integer|false|none|The source amount for the payment (amount debited to make the payment)|
|sourceCurrency|string|false|none|ISO-4217 3 character currency code|
|status|string|true|none|Current status of the payment. One of the following values: ACCEPTED, AWAITING_FUNDS, FUNDED, UNFUNDED, BANK_PAYMENT_REQUESTED, REJECTED, ACCEPTED_BY_RAILS, CONFIRMED, RETURNED, WITHDRAWN|
|submittedDateTime|string(date-time)|true|none|none|
|traceNumber|string|false|none|Trace Number assigned to the payment in the ACH file, if applicable|
|transmissionType|string|false|none|The transmission type of the payment, e.g. ACH, SAME_DAY_ACH, WIRE, GACHO|
|withdrawable|boolean|false|none|none|
|withdrawnReason|string|false|none|none|

<h2 id="tocS_PaymentResponseV4_payout">PaymentResponseV4_payout</h2>
<!-- backwards compatibility -->
<a id="schemapaymentresponsev4_payout"></a>
<a id="schema_PaymentResponseV4_payout"></a>
<a id="tocSpaymentresponsev4_payout"></a>
<a id="tocspaymentresponsev4_payout"></a>

```json
{
  "payoutFrom": {
    "dbaName": "dbaName",
    "payorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "payorName": "payorName",
    "principal": "principal",
    "principalId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
  },
  "payoutId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "payoutTo": {
    "dbaName": "dbaName",
    "payorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "payorName": "payorName",
    "principal": "principal",
    "principalId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|payoutFrom|[PayoutPayor](#schemapayoutpayor)|false|none|Details of payor and principal participating in a payout.|
|payoutId|string(uuid)|false|none|none|
|payoutTo|[PayoutPayor](#schemapayoutpayor)|false|none|Details of payor and principal participating in a payout.|

<h2 id="tocS_PaymentStatusChanged">PaymentStatusChanged</h2>
<!-- backwards compatibility -->
<a id="schemapaymentstatuschanged"></a>
<a id="schema_PaymentStatusChanged"></a>
<a id="tocSpaymentstatuschanged"></a>
<a id="tocspaymentstatuschanged"></a>

```json
{
  "createdAt": "2020-06-18T15:09:42Z",
  "eventId": "270ab907-27ec-4b83-8028-0ff432bbdec4",
  "sourceType": "payment_status_changed",
  "paymentId": "cbd9280f-8fde-4190-b014-979d88f3ec54",
  "payorPaymentId": "ourpayment-id12345",
  "payoutPayorIds": {
    "payoutFromPayorId": "35198f08-1c7b-4a91-8921-cd760ed92bca",
    "payoutToPayorId": "3eb99144-6ebf-4b02-9483-ad86b2ff1bca",
    "submittingPayorId": "ac207f97-663c-4429-9d57-ba5b35d6672d"
  },
  "status": "ACCEPTED"
}
```

Base type for all payment status changed events

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(date-time)|true|none|ISO8601 timestamp indicating when the source event was created|
|eventId|string(uuid)|true|none|UUID id of the source event in the Velo platform|
|sourceType|string|true|none|OA3 Schema type name for the source info which is used as the discriminator value to ensure that data binding works correctly|
|paymentId|string(uuid)|true|none|ID of this payment within the Velo platform|
|payorPaymentId|string|false|none|ID of this payment in the payors system|
|payoutPayorIds|[PayoutPayorIds](#schemapayoutpayorids)|false|none|Holder for all payor ids associated with a Payout|
|status|string|true|none|The new status of the payment. One of "SUBMITTED" "ACCEPTED" "REJECTED" "ACCEPTED_BY_RAILS" "CONFIRMED" "RETURNED" "WITHDRAWN"|

<h2 id="tocS_PaymentStatusChanged_allOf">PaymentStatusChanged_allOf</h2>
<!-- backwards compatibility -->
<a id="schemapaymentstatuschanged_allof"></a>
<a id="schema_PaymentStatusChanged_allOf"></a>
<a id="tocSpaymentstatuschanged_allof"></a>
<a id="tocspaymentstatuschanged_allof"></a>

```json
{
  "status": "ACCEPTED"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|The new status of the payment. One of "SUBMITTED" "ACCEPTED" "REJECTED" "ACCEPTED_BY_RAILS" "CONFIRMED" "RETURNED" "WITHDRAWN"|

<h2 id="tocS_PaymentV3">PaymentV3</h2>
<!-- backwards compatibility -->
<a id="schemapaymentv3"></a>
<a id="schema_PaymentV3"></a>
<a id="tocSpaymentv3"></a>
<a id="tocspaymentv3"></a>

```json
{
  "amount": 10000,
  "autoWithdrawnReasonCode": "VE0003",
  "currency": "USD",
  "payee": {
    "company": {
      "companyName": "ACME Anvils PLC"
    },
    "individual": {
      "name": {
        "firstName": "Fred",
        "lastName": "Flintstone"
      }
    },
    "payeeId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
  },
  "paymentId": "859af785-223b-4d5b-a708-5fa57f006dbb",
  "paymentMemo": "INV00112",
  "paymentMetadata": "invoiceeId_123|abc001:12345|xyz002:4567",
  "payorPaymentId": "123211321ABSD",
  "railsId": "SVB",
  "remoteId": "remoteIdVal123",
  "remoteSystemId": "OB012",
  "sourceAccountName": "Chase Bank Account",
  "status": "AWAITING_FUNDS",
  "transmissionType": "LOCAL",
  "withdrawable": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|integer|false|none|The amount of the payment in minor units|
|autoWithdrawnReasonCode|string|false|none|Populated only if the payment was automatically withdrawn during instruction for being invalid|
|currency|string|false|none|The currency that the payment was made in|
|payee|[PayoutPayeeV3](#schemapayoutpayeev3)|false|none|Payee data associated with a payment. Either individual or company must be populated|
|paymentId|string(uuid)|true|none|The id of the payment|
|paymentMemo|string|false|none|<p>Any value here will override the memo value in the parent payout</p><br><p>This should be the reference field on the statement seen by the payee (but not via ACH)</p><br>|
|paymentMetadata|string|false|none|<p>Metadata about the payment that may be relevant to the specific rails or remote system making the payout</p><br><p>The structure of the data will be dictated by the requirements of the payment rails</p><br>|
|payorPaymentId|string|false|none|A reference identifier for the payor for the given payee payment|
|railsId|string|false|none|Indicates the 3rd party system involved in making this payment|
|remoteId|string|false|none|The remoteId supplied by the payor that identifies the payee|
|remoteSystemId|string|false|none|<p>The identifier for the remote payments system if not Velo</p><br>|
|sourceAccountName|string|false|none|The identifier of the source account to debit the payment from|
|status|string|false|none|Current status of payment. One of the following values: SUBMITTED, ACCEPTED, REJECTED, WITHDRAWN, RETURNED, AWAITING_FUNDS, FUNDED, UNFUNDED, CANCELLED, BANK_PAYMENT_REQUESTED|
|transmissionType|string|false|none|The transmission method of the payment. One of the following values: ACH, SAME_DAY_ACH, WIRE, LOCAL, SWIFT|
|withdrawable|boolean|false|none|Can this paynent be withdrawn|

<h2 id="tocS_PayorAddress">PayorAddress</h2>
<!-- backwards compatibility -->
<a id="schemapayoraddress"></a>
<a id="schema_PayorAddress"></a>
<a id="tocSpayoraddress"></a>
<a id="tocspayoraddress"></a>

```json
{
  "city": "Key West",
  "country": "US",
  "countyOrProvince": "FL",
  "line1": "500 Duval St",
  "line2": "line2",
  "line3": "line3",
  "line4": "line4",
  "zipOrPostcode": "33945"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|city|string|true|none|none|
|country|string|true|none|none|
|countyOrProvince|string \| null|false|none|none|
|line1|string|true|none|none|
|line2|string \| null|false|none|none|
|line3|string \| null|false|none|none|
|line4|string \| null|false|none|none|
|zipOrPostcode|string \| null|false|none|none|

<h2 id="tocS_PayorAddressV2">PayorAddressV2</h2>
<!-- backwards compatibility -->
<a id="schemapayoraddressv2"></a>
<a id="schema_PayorAddressV2"></a>
<a id="tocSpayoraddressv2"></a>
<a id="tocspayoraddressv2"></a>

```json
{
  "city": "Key West",
  "country": "US",
  "countyOrProvince": "FL",
  "line1": "500 Duval St",
  "line2": "line2",
  "line3": "line3",
  "line4": "line4",
  "zipOrPostcode": "33945"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|city|string|true|none|none|
|country|string|true|none|none|
|countyOrProvince|string \| null|false|none|none|
|line1|string|true|none|none|
|line2|string \| null|false|none|none|
|line3|string \| null|false|none|none|
|line4|string \| null|false|none|none|
|zipOrPostcode|string \| null|false|none|none|

<h2 id="tocS_PayorAmlTransaction">PayorAmlTransaction</h2>
<!-- backwards compatibility -->
<a id="schemapayoramltransaction"></a>
<a id="schema_PayorAmlTransaction"></a>
<a id="tocSpayoramltransaction"></a>
<a id="tocspayoramltransaction"></a>

```json
{
  "credit": 0,
  "creditCurrency": "string",
  "dateFundingRequested": "string",
  "debit": 0,
  "debitCurrency": "string",
  "fundingType": "string",
  "fxApplied": 0,
  "payeeEmail": "user@example.com",
  "payeeName": "string",
  "payeeType": "string",
  "paymentAmount": 0,
  "paymentCurrency": "string",
  "paymentMemo": "string",
  "paymentRails": "string",
  "paymentStatus": "string",
  "payorPaymentId": "string",
  "rejectReason": "string",
  "remoteId": "string",
  "reportTransactionType": "string",
  "returnCode": "string",
  "returnDescription": "string",
  "returnFee": "string",
  "returnFeeCurrency": "string",
  "returnFeeDescription": "string",
  "sourceAccount": "string",
  "transactionDate": "1970-01-01",
  "transactionTime": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|credit|integer(int64)|false|none|none|
|creditCurrency|string|false|none|ISO 4217 3 character currency code|
|dateFundingRequested|string|false|none|none|
|debit|integer(int64)|false|none|none|
|debitCurrency|string|false|none|ISO 4217 3 character currency code|
|fundingType|string|false|none|none|
|fxApplied|number(double)|false|none|none|
|payeeEmail|string(email)|false|none|none|
|payeeName|string|false|none|none|
|payeeType|string|false|none|none|
|paymentAmount|integer(int64)|false|none|none|
|paymentCurrency|string|false|none|ISO 4217 3 character currency code|
|paymentMemo|string|false|none|none|
|paymentRails|string|false|none|none|
|paymentStatus|string|false|none|none|
|payorPaymentId|string|false|none|none|
|rejectReason|string|false|none|none|
|remoteId|string|false|none|Remote ID of the Payee, set by Payor|
|reportTransactionType|string|false|none|none|
|returnCode|string|false|none|none|
|returnDescription|string|false|none|none|
|returnFee|string|false|none|none|
|returnFeeCurrency|string|false|none|ISO 4217 3 character currency code|
|returnFeeDescription|string|false|none|none|
|sourceAccount|string|false|none|none|
|transactionDate|string(date)|false|none|none|
|transactionTime|string|false|none|none|

<h2 id="tocS_PayorAmlTransactionV3">PayorAmlTransactionV3</h2>
<!-- backwards compatibility -->
<a id="schemapayoramltransactionv3"></a>
<a id="schema_PayorAmlTransactionV3"></a>
<a id="tocSpayoramltransactionv3"></a>
<a id="tocspayoramltransactionv3"></a>

```json
{
  "credit": 6,
  "creditCurrency": "creditCurrency",
  "dateFundingRequested": "dateFundingRequested",
  "debit": 0,
  "debitCurrency": "debitCurrency",
  "fundingType": "fundingType",
  "fxApplied": 5.962133916683182,
  "payeeType": "payeeType",
  "paymentAmount": 1,
  "paymentCurrency": "paymentCurrency",
  "paymentMemo": "paymentMemo",
  "paymentRails": "paymentRails",
  "paymentStatus": "paymentStatus",
  "payorPaymentId": "payorPaymentId",
  "rejectReason": "rejectReason",
  "remoteId": "remoteId",
  "reportTransactionType": "reportTransactionType",
  "returnCode": "returnCode",
  "returnDescription": "returnDescription",
  "returnFee": "returnFee",
  "returnFeeCurrency": "returnFeeCurrency",
  "returnFeeDescription": "returnFeeDescription",
  "sourceAccount": "sourceAccount",
  "transactionDate": "2000-01-23",
  "transactionTime": "transactionTime"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|credit|integer(int64)|false|none|none|
|creditCurrency|string|false|none|ISO 4217 3 character currency code|
|dateFundingRequested|string|false|none|none|
|debit|integer(int64)|false|none|none|
|debitCurrency|string|false|none|ISO 4217 3 character currency code|
|fundingType|string|false|none|none|
|fxApplied|number(double)|false|none|none|
|payeeType|string|false|none|none|
|paymentAmount|integer(int64)|false|none|none|
|paymentCurrency|string|false|none|ISO 4217 3 character currency code|
|paymentMemo|string|false|none|none|
|paymentRails|string|false|none|none|
|paymentStatus|string|false|none|none|
|payorPaymentId|string|false|none|none|
|rejectReason|string|false|none|none|
|remoteId|string|false|none|Remote ID of the Payee, set by Payor|
|reportTransactionType|string|false|none|none|
|returnCode|string|false|none|none|
|returnDescription|string|false|none|none|
|returnFee|string|false|none|none|
|returnFeeCurrency|string|false|none|ISO 4217 3 character currency code|
|returnFeeDescription|string|false|none|none|
|sourceAccount|string|false|none|none|
|transactionDate|string(date)|false|none|none|
|transactionTime|string|false|none|none|

<h2 id="tocS_PayorBrandingResponse">PayorBrandingResponse</h2>
<!-- backwards compatibility -->
<a id="schemapayorbrandingresponse"></a>
<a id="schema_PayorBrandingResponse"></a>
<a id="tocSpayorbrandingresponse"></a>
<a id="tocspayorbrandingresponse"></a>

```json
{
  "collectiveAlias": "Contractors",
  "dbaName": "Key West Imports",
  "logoUrl": "https://images.example.com/450ecb66-df18-4d0c-b557-f718782775df/logo.png",
  "payorName": "Key West Imports, Inc",
  "supportContact": "support@example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|collectiveAlias|string \| null|false|none|How the payor has chosen to refer to payees|
|dbaName|string \| null|false|none|The payor’s 'Doing Business As' name|
|logoUrl|string(uri)|true|none|<p>The URL to use for this payor’s logo</p><br><p>This will be an immutable system-generated URL</p><br>|
|payorName|string|true|none|The name of the payor|
|supportContact|string \| null|false|none|The payor’s support contact address|

<h2 id="tocS_PayorCreateApiKeyRequest">PayorCreateApiKeyRequest</h2>
<!-- backwards compatibility -->
<a id="schemapayorcreateapikeyrequest"></a>
<a id="schema_PayorCreateApiKeyRequest"></a>
<a id="tocSpayorcreateapikeyrequest"></a>
<a id="tocspayorcreateapikeyrequest"></a>

```json
{
  "description": "Key for iOS mobile application",
  "name": "iOS Key",
  "roles": [
    "velo.payor.admin"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string \| null|false|none|Description of the key.|
|name|string|true|none|A name for the key.|
|roles|[string]|true|none|<p>A role to assign to the key.</p><br><p>If you want your API key to have write access then assign the role velo.payor.admin</p><br><p>A later version will change this property from a list to string</p><br>|

#### Enumerated Values

|Property|Value|
|---|---|
|roles|velo.payor.admin|
|roles|velo.payor.support|

<h2 id="tocS_PayorCreateApiKeyResponse">PayorCreateApiKeyResponse</h2>
<!-- backwards compatibility -->
<a id="schemapayorcreateapikeyresponse"></a>
<a id="schema_PayorCreateApiKeyResponse"></a>
<a id="tocSpayorcreateapikeyresponse"></a>
<a id="tocspayorcreateapikeyresponse"></a>

```json
{
  "apiKey": "385d4506-e7dd-446e-a092-5f30b98e7b26",
  "apiSecret": "f25767d9-342a-48ac-a788-0a7a38ae6fb3"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiKey|string(uuid)|false|none|API Key|
|apiSecret|string(uuid)|false|none|API Secret|

<h2 id="tocS_PayorCreateApplicationRequest">PayorCreateApplicationRequest</h2>
<!-- backwards compatibility -->
<a id="schemapayorcreateapplicationrequest"></a>
<a id="schema_PayorCreateApplicationRequest"></a>
<a id="tocSpayorcreateapplicationrequest"></a>
<a id="tocspayorcreateapplicationrequest"></a>

```json
{
  "description": "SAP Application integration",
  "name": "SAP"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string \| null|false|none|Description of the application.|
|name|string|true|none|The name of the application.|

<h2 id="tocS_PayorEmailOptOutRequest">PayorEmailOptOutRequest</h2>
<!-- backwards compatibility -->
<a id="schemapayoremailoptoutrequest"></a>
<a id="schema_PayorEmailOptOutRequest"></a>
<a id="tocSpayoremailoptoutrequest"></a>
<a id="tocspayoremailoptoutrequest"></a>

```json
{
  "reminderEmailsOptOut": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reminderEmailsOptOut|boolean|true|none|none|

<h2 id="tocS_PayorLinksResponse">PayorLinksResponse</h2>
<!-- backwards compatibility -->
<a id="schemapayorlinksresponse"></a>
<a id="schema_PayorLinksResponse"></a>
<a id="tocSpayorlinksresponse"></a>
<a id="tocspayorlinksresponse"></a>

```json
{
  "links": [
    {
      "fromPayorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "linkId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "linkType": "linkType",
      "toPayorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
    },
    {
      "fromPayorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "linkId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "linkType": "linkType",
      "toPayorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
    }
  ],
  "payors": [
    {
      "kycState": "kycState",
      "payorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "payorName": "payorName",
      "primaryContactEmail": "primaryContactEmail"
    },
    {
      "kycState": "kycState",
      "payorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "payorName": "payorName",
      "primaryContactEmail": "primaryContactEmail"
    }
  ]
}
```

List Payor Links Response Object

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|links|[[PayorLinksResponse_links](#schemapayorlinksresponse_links)]|false|none|none|
|payors|[[PayorLinksResponse_payors](#schemapayorlinksresponse_payors)]|false|none|none|

<h2 id="tocS_PayorLinksResponse_links">PayorLinksResponse_links</h2>
<!-- backwards compatibility -->
<a id="schemapayorlinksresponse_links"></a>
<a id="schema_PayorLinksResponse_links"></a>
<a id="tocSpayorlinksresponse_links"></a>
<a id="tocspayorlinksresponse_links"></a>

```json
{
  "fromPayorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "linkId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "linkType": "linkType",
  "toPayorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fromPayorId|string(uuid)|true|none|none|
|linkId|string(uuid)|true|none|none|
|linkType|string|true|none|The type of the link. One of the following values: PARENT_OF|
|toPayorId|string(uuid)|true|none|none|

<h2 id="tocS_PayorLinksResponse_payors">PayorLinksResponse_payors</h2>
<!-- backwards compatibility -->
<a id="schemapayorlinksresponse_payors"></a>
<a id="schema_PayorLinksResponse_payors"></a>
<a id="tocSpayorlinksresponse_payors"></a>
<a id="tocspayorlinksresponse_payors"></a>

```json
{
  "kycState": "kycState",
  "payorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "payorName": "payorName",
  "primaryContactEmail": "primaryContactEmail"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kycState|string|false|none|Current KYC state. One of the following values: FAILED_KYC, PASSED_KYC, REQUIRES_KYC|
|payorId|string(uuid)|true|none|none|
|payorName|string|true|none|none|
|primaryContactEmail|string|false|none|none|

<h2 id="tocS_PayorLogoRequest">PayorLogoRequest</h2>
<!-- backwards compatibility -->
<a id="schemapayorlogorequest"></a>
<a id="schema_PayorLogoRequest"></a>
<a id="tocSpayorlogorequest"></a>
<a id="tocspayorlogorequest"></a>

```json
{
  "logo": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|logo|string(binary)|false|none|none|

<h2 id="tocS_PayorV1">PayorV1</h2>
<!-- backwards compatibility -->
<a id="schemapayorv1"></a>
<a id="schema_PayorV1"></a>
<a id="tocSpayorv1"></a>
<a id="tocspayorv1"></a>

```json
{
  "address": {
    "city": "Key West",
    "country": "US",
    "countyOrProvince": "FL",
    "line1": "500 Duval St",
    "line2": "line2",
    "line3": "line3",
    "line4": "line4",
    "zipOrPostcode": "33945"
  },
  "allowsLanguageChoice": true,
  "collectiveAlias": "Payee",
  "dbaName": "Some Biz",
  "fundingAccountAccountName": "Example Corp BOA",
  "fundingAccountAccountNumber": "1234567890123",
  "fundingAccountRoutingNumber": "123456789",
  "includesReports": true,
  "kycState": "PASSED_KYC",
  "language": "EN",
  "manualLockout": true,
  "maxMasterPayorAdmins": 6,
  "payeeGracePeriodDays": 0,
  "payeeGracePeriodProcessingEnabled": true,
  "payorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "payorName": "Example, Corp",
  "primaryContactEmail": "joe.buck@example.com",
  "primaryContactName": "Joe Buck",
  "primaryContactPhone": "123-123-1234",
  "reminderEmailsOptOut": true,
  "supportContact": "support@example.com",
  "transmissionTypes": {
    "ACH": true,
    "SAME_DAY_ACH": true,
    "WIRE": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|[PayorAddress](#schemapayoraddress)|false|none|none|
|allowsLanguageChoice|boolean|false|none|Whether or not the payor allows language choice in the UI.|
|collectiveAlias|string|false|none|How the payor has chosen to refer to payees.|
|dbaName|string|false|none|The payor’s 'Doing Business As' name.|
|fundingAccountAccountName|string|false|none|The funding account name to be used for the payor.|
|fundingAccountAccountNumber|string|false|none|The funding account number to be used for the payor.|
|fundingAccountRoutingNumber|string|false|none|The funding account routing number to be used for the payor.|
|includesReports|boolean|false|none|none|
|kycState|string|false|read-only|The kyc state of the payor. One of the following values: FAILED_KYC, PASSED_KYC, REQUIRES_KYC|
|language|string|false|none|The payor’s language preference. Must be one of [EN, FR].|
|manualLockout|boolean|false|none|Whether or not the payor has been manually locked by the backoffice.|
|maxMasterPayorAdmins|integer|false|none|none|
|payeeGracePeriodDays|integer|false|read-only|The grace period for paying payees in days.|
|payeeGracePeriodProcessingEnabled|boolean|false|read-only|Whether grace period processing is enabled.|
|payorId|string(uuid)|false|read-only|none|
|payorName|string|true|none|The name of the payor.|
|primaryContactEmail|string(email)|false|none|Primary contact email for the payor.|
|primaryContactName|string|false|none|Name of primary contact for the payor.|
|primaryContactPhone|string|false|none|Primary contact phone number for the payor.|
|reminderEmailsOptOut|boolean|false|read-only|Whether or not the payor has opted-out of reminder emails being sent.|
|supportContact|string|false|none|The payor’s support contact email address.|
|transmissionTypes|[TransmissionTypes](#schematransmissiontypes)|false|none|none|

<h2 id="tocS_PayorV2">PayorV2</h2>
<!-- backwards compatibility -->
<a id="schemapayorv2"></a>
<a id="schema_PayorV2"></a>
<a id="tocSpayorv2"></a>
<a id="tocspayorv2"></a>

```json
{
  "address": {
    "city": "Key West",
    "country": "US",
    "countyOrProvince": "FL",
    "line1": "500 Duval St",
    "line2": "line2",
    "line3": "line3",
    "line4": "line4",
    "zipOrPostcode": "33945"
  },
  "allowsLanguageChoice": true,
  "collectiveAlias": "Payee",
  "dbaName": "Some Biz",
  "includesReports": true,
  "kycState": "PASSED_KYC",
  "language": "EN",
  "managingPayees": true,
  "manualLockout": true,
  "maxMasterPayorAdmins": 6,
  "openBankingEnabled": true,
  "payeeGracePeriodDays": 0,
  "payeeGracePeriodProcessingEnabled": true,
  "paymentRails": "paymentRails",
  "payorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "payorName": "Example, Corp",
  "payorXid": "ABC_201234",
  "primaryContactEmail": "joe.buck@example.com",
  "primaryContactName": "Joe Buck",
  "primaryContactPhone": "123-123-1234",
  "provider": "provider",
  "reminderEmailsOptOut": true,
  "remoteSystemIds": [
    "REMOTE_SYSTEM_ID",
    "REMOTE_SYSTEM_ID"
  ],
  "supportContact": "support@example.com",
  "transmissionTypes": {
    "ACH": true,
    "SAME_DAY_ACH": true,
    "WIRE": true
  },
  "usdTxnValueReportingThreshold": 1000000,
  "wuCustomerId": "wuCustomerId"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|[PayorAddressV2](#schemapayoraddressv2)|false|none|none|
|allowsLanguageChoice|boolean|false|none|Whether or not the payor allows language choice in the UI.|
|collectiveAlias|string|false|none|How the payor has chosen to refer to payees.|
|dbaName|string|false|none|The payor’s 'Doing Business As' name.|
|includesReports|boolean|false|none|none|
|kycState|string|false|read-only|The kyc state of the payor. One of the following values: FAILED_KYC, PASSED_KYC, REQUIRES_KYC|
|language|string|false|none|The payor’s language preference. Must be one of [EN, FR]|
|managingPayees|boolean|false|none|none|
|manualLockout|boolean|false|none|Whether or not the payor has been manually locked by the backoffice.|
|maxMasterPayorAdmins|integer|false|none|none|
|openBankingEnabled|boolean|false|none|Is Open Banking supported for this payor|
|payeeGracePeriodDays|integer|false|read-only|The grace period for paying payees in days.|
|payeeGracePeriodProcessingEnabled|boolean|false|read-only|Whether grace period processing is enabled.|
|paymentRails|string|false|none|The id of the payment rails|
|payorId|string(uuid)|true|read-only|none|
|payorName|string|true|none|The name of the payor.|
|payorXid|string|false|none|A unique identifier that an external system uses to reference the payor in their system|
|primaryContactEmail|string(email)|false|none|Primary contact email for the payor.|
|primaryContactName|string|false|none|Name of primary contact for the payor.|
|primaryContactPhone|string|false|none|Primary contact phone number for the payor.|
|provider|string|false|none|The source of the payorXid, default is null which means Velo|
|reminderEmailsOptOut|boolean|false|read-only|Whether or not the payor has opted-out of reminder emails being sent.|
|remoteSystemIds|[string]|false|none|The payor’s supported remote systems by id|
|supportContact|string|false|none|The payor’s support contact email address.|
|transmissionTypes|[TransmissionTypes_2](#schematransmissiontypes_2)|false|none|none|
|usdTxnValueReportingThreshold|integer|false|none|USD in minor units|
|wuCustomerId|string|false|none|none|

<h2 id="tocS_PayoutCompanyV3">PayoutCompanyV3</h2>
<!-- backwards compatibility -->
<a id="schemapayoutcompanyv3"></a>
<a id="schema_PayoutCompanyV3"></a>
<a id="tocSpayoutcompanyv3"></a>
<a id="tocspayoutcompanyv3"></a>

```json
{
  "companyName": "ACME Anvils PLC"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|companyName|string|true|none|none|

<h2 id="tocS_PayoutIndividualV3">PayoutIndividualV3</h2>
<!-- backwards compatibility -->
<a id="schemapayoutindividualv3"></a>
<a id="schema_PayoutIndividualV3"></a>
<a id="tocSpayoutindividualv3"></a>
<a id="tocspayoutindividualv3"></a>

```json
{
  "name": {
    "firstName": "Fred",
    "lastName": "Flintstone"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|[PayoutNameV3](#schemapayoutnamev3)|true|none|none|

<h2 id="tocS_PayoutNameV3">PayoutNameV3</h2>
<!-- backwards compatibility -->
<a id="schemapayoutnamev3"></a>
<a id="schema_PayoutNameV3"></a>
<a id="tocSpayoutnamev3"></a>
<a id="tocspayoutnamev3"></a>

```json
{
  "firstName": "Fred",
  "lastName": "Flintstone"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|firstName|string|true|none|none|
|lastName|string|true|none|none|

<h2 id="tocS_PayoutPayeeV3">PayoutPayeeV3</h2>
<!-- backwards compatibility -->
<a id="schemapayoutpayeev3"></a>
<a id="schema_PayoutPayeeV3"></a>
<a id="tocSpayoutpayeev3"></a>
<a id="tocspayoutpayeev3"></a>

```json
{
  "company": {
    "companyName": "ACME Anvils PLC"
  },
  "individual": {
    "name": {
      "firstName": "Fred",
      "lastName": "Flintstone"
    }
  },
  "payeeId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
}
```

Payee data associated with a payment. Either individual or company must be populated

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|company|[PayoutCompanyV3](#schemapayoutcompanyv3)|false|none|none|
|individual|[PayoutIndividualV3](#schemapayoutindividualv3)|false|none|none|
|payeeId|string(uuid)|true|none|none|

<h2 id="tocS_PayoutPayor">PayoutPayor</h2>
<!-- backwards compatibility -->
<a id="schemapayoutpayor"></a>
<a id="schema_PayoutPayor"></a>
<a id="tocSpayoutpayor"></a>
<a id="tocspayoutpayor"></a>

```json
{
  "dbaName": "dbaName",
  "payorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "payorName": "payorName",
  "principal": "principal",
  "principalId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
}
```

Details of payor and principal participating in a payout.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dbaName|string|true|none|The alternate name of the payor.|
|payorId|string(uuid)|true|none|The id of the payor.|
|payorName|string|true|none|The name of the payor.|
|principal|string|true|none|Email address if principal is a user or ID if application.|
|principalId|string(uuid)|true|none|The id of the principal.|

<h2 id="tocS_PayoutPayorIds">PayoutPayorIds</h2>
<!-- backwards compatibility -->
<a id="schemapayoutpayorids"></a>
<a id="schema_PayoutPayorIds"></a>
<a id="tocSpayoutpayorids"></a>
<a id="tocspayoutpayorids"></a>

```json
{
  "payoutFromPayorId": "35198f08-1c7b-4a91-8921-cd760ed92bca",
  "payoutToPayorId": "3eb99144-6ebf-4b02-9483-ad86b2ff1bca",
  "submittingPayorId": "ac207f97-663c-4429-9d57-ba5b35d6672d"
}
```

Holder for all payor ids associated with a Payout

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|payoutFromPayorId|string(uuid)|true|none|The ID of the Payor providing the source account for the payout|
|payoutToPayorId|string(uuid)|true|none|The ID of the Payor that owns the Payee (on behalf of)|
|submittingPayorId|string(uuid)|true|none|The ID of the Payor that is submitting the payout|

<h2 id="tocS_PayoutPrincipal">PayoutPrincipal</h2>
<!-- backwards compatibility -->
<a id="schemapayoutprincipal"></a>
<a id="schema_PayoutPrincipal"></a>
<a id="tocSpayoutprincipal"></a>
<a id="tocspayoutprincipal"></a>

```json
{
  "principal": "principal",
  "principalId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
}
```

Details of principal participating in a payout.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|principal|string|true|none|Email address if principal is a user or ID if application.|
|principalId|string(uuid)|true|none|The id of the principal.|

<h2 id="tocS_PayoutSchedule">PayoutSchedule</h2>
<!-- backwards compatibility -->
<a id="schemapayoutschedule"></a>
<a id="schema_PayoutSchedule"></a>
<a id="tocSpayoutschedule"></a>
<a id="tocspayoutschedule"></a>

```json
{
  "notificationsEnabled": true,
  "scheduleStatus": "SCHEDULED",
  "scheduledAt": "2000-01-23T04:56:07.000+00:00",
  "scheduledBy": "Aphra Behn",
  "scheduledByPrincipalId": "8946953b-1e3b-49cf-9da4-b704cbb78f3e",
  "scheduledFor": "2000-01-23T04:56:07.000+00:00"
}
```

Details relating to a payout that was executed via a schedule or is still waiting to be executed

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|notificationsEnabled|boolean|true|none|none|
|scheduleStatus|string|true|none|Current status of the payout schedule. One of the following values: SCHEDULED, EXECUTED, FAILED|
|scheduledAt|string(date-time)|true|none|none|
|scheduledBy|string|false|none|Optional display name as a hint for who scheduled the payout. Not populated if payout was scheduled by an application.|
|scheduledByPrincipalId|string|true|none|ID of the user or application that scheduled the payout|
|scheduledFor|string(date-time)|true|none|none|

<h2 id="tocS_PayoutScheduleV3">PayoutScheduleV3</h2>
<!-- backwards compatibility -->
<a id="schemapayoutschedulev3"></a>
<a id="schema_PayoutScheduleV3"></a>
<a id="tocSpayoutschedulev3"></a>
<a id="tocspayoutschedulev3"></a>

```json
{
  "notificationsEnabled": true,
  "scheduleStatus": "SCHEDULED",
  "scheduledAt": "2000-01-23T04:56:07.000+00:00",
  "scheduledByPrincipalId": "8946953b-1e3b-49cf-9da4-b704cbb78f3e",
  "scheduledFor": "2000-01-23T04:56:07.000+00:00"
}
```

Details relating to a payout that was executed via a schedule or is still waiting to be executed

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|notificationsEnabled|boolean|true|none|none|
|scheduleStatus|string|true|none|The current status of the payout schedule. One of the following values: SCHEDULED, EXECUTED, FAILED|
|scheduledAt|string(date-time)|true|none|none|
|scheduledByPrincipalId|string|true|none|ID of the user or application that scheduled the payout|
|scheduledFor|string(date-time)|true|none|none|

<h2 id="tocS_PayoutStatus">PayoutStatus</h2>
<!-- backwards compatibility -->
<a id="schemapayoutstatus"></a>
<a id="schema_PayoutStatus"></a>
<a id="tocSpayoutstatus"></a>
<a id="tocspayoutstatus"></a>

```json
"string"
```

Current status of the Payout. One of the following values: ACCEPTED, REJECTED, SUBMITTED, QUOTED, INSTRUCTED, COMPLETED, INCOMPLETE, CONFIRMED, WITHDRAWN

<h2 id="tocS_PayoutStatusV3">PayoutStatusV3</h2>
<!-- backwards compatibility -->
<a id="schemapayoutstatusv3"></a>
<a id="schema_PayoutStatusV3"></a>
<a id="tocSpayoutstatusv3"></a>
<a id="tocspayoutstatusv3"></a>

```json
"string"
```

Current status of the payout. One of the following values: ACCEPTED, REJECTED, SUBMITTED, QUOTED, INSTRUCTED, COMPLETED, INCOMPLETE, CONFIRMED, WITHDRAWN

<h2 id="tocS_PayoutSummaryAudit">PayoutSummaryAudit</h2>
<!-- backwards compatibility -->
<a id="schemapayoutsummaryaudit"></a>
<a id="schema_PayoutSummaryAudit"></a>
<a id="tocSpayoutsummaryaudit"></a>
<a id="tocspayoutsummaryaudit"></a>

```json
{
  "dateTime": "2000-01-23T04:56:07.000+00:00",
  "fxSummaries": [
    {
      "creationDateTime": "2000-01-23T04:56:07.000+00:00",
      "fundingStatus": "fundingStatus",
      "invertedRate": 123.23,
      "paymentCurrency": "EUR",
      "quoteId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "rate": 123.23,
      "sourceCurrency": "EUR",
      "status": "status",
      "totalCost": 5,
      "totalPaymentAmount": 34235
    },
    {
      "creationDateTime": "2000-01-23T04:56:07.000+00:00",
      "fundingStatus": "fundingStatus",
      "invertedRate": 123.23,
      "paymentCurrency": "EUR",
      "quoteId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "rate": 123.23,
      "sourceCurrency": "EUR",
      "status": "status",
      "totalCost": 5,
      "totalPaymentAmount": 34235
    }
  ],
  "instructedDateTime": "instructedDateTime",
  "payorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "payorName": "payorName",
  "payoutId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "payoutMemo": "payoutMemo",
  "payoutType": "payoutType",
  "schedule": {
    "notificationsEnabled": true,
    "scheduleStatus": "SCHEDULED",
    "scheduledAt": "2000-01-23T04:56:07.000+00:00",
    "scheduledBy": "Aphra Behn",
    "scheduledByPrincipalId": "8946953b-1e3b-49cf-9da4-b704cbb78f3e",
    "scheduledFor": "2000-01-23T04:56:07.000+00:00"
  },
  "sourceAccountSummary": [
    {
      "currency": "EUR",
      "sourceAccountId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "totalCost": 3344
    },
    {
      "currency": "EUR",
      "sourceAccountId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "totalCost": 3344
    }
  ],
  "status": "status",
  "submittedDateTime": "submittedDateTime",
  "totalIncompletePayments": 6,
  "totalPayments": 0,
  "totalReturnedPayments": 1,
  "totalWithdrawnPayments": 5,
  "withdrawnDateTime": "2000-01-23T04:56:07.000+00:00"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dateTime|string(date-time)|false|none|none|
|fxSummaries|[[FxSummary](#schemafxsummary)]|false|none|none|
|instructedDateTime|string|false|none|none|
|payorId|string(uuid)|false|none|none|
|payorName|string|true|none|none|
|payoutId|string(uuid)|false|none|none|
|payoutMemo|string|false|none|none|
|payoutType|string|true|none|The type of payout. One of the following values: STANDARD, AS, ON_BEHALF_OF|
|schedule|[PayoutSchedule](#schemapayoutschedule)|false|none|Details relating to a payout that was executed via a schedule or is still waiting to be executed|
|sourceAccountSummary|[[SourceAccountSummary](#schemasourceaccountsummary)]|false|none|none|
|status|string|true|none|Current status of the Payout. One of the following values: ACCEPTED, REJECTED, SUBMITTED, QUOTED, INSTRUCTED, COMPLETED, INCOMPLETE, CONFIRMED, WITHDRAWN|
|submittedDateTime|string|true|none|none|
|totalIncompletePayments|integer|false|none|none|
|totalPayments|integer|false|none|none|
|totalReturnedPayments|integer|false|none|none|
|totalWithdrawnPayments|integer|false|none|none|
|withdrawnDateTime|string(date-time)|false|none|none|

<h2 id="tocS_PayoutSummaryAuditV3">PayoutSummaryAuditV3</h2>
<!-- backwards compatibility -->
<a id="schemapayoutsummaryauditv3"></a>
<a id="schema_PayoutSummaryAuditV3"></a>
<a id="tocSpayoutsummaryauditv3"></a>
<a id="tocspayoutsummaryauditv3"></a>

```json
{
  "fxSummaries": [
    {
      "creationDateTime": "2000-01-23T04:56:07.000+00:00",
      "fundingStatus": "fundingStatus",
      "invertedRate": 1.12,
      "paymentCurrency": "paymentCurrency",
      "quoteId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "rate": 1.12,
      "sourceCurrency": "sourceCurrency",
      "status": "status",
      "totalCost": 1234,
      "totalPaymentAmount": 1234
    },
    {
      "creationDateTime": "2000-01-23T04:56:07.000+00:00",
      "fundingStatus": "fundingStatus",
      "invertedRate": 1.12,
      "paymentCurrency": "paymentCurrency",
      "quoteId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "rate": 1.12,
      "sourceCurrency": "sourceCurrency",
      "status": "status",
      "totalCost": 1234,
      "totalPaymentAmount": 1234
    }
  ],
  "instructedDateTime": "instructedDateTime",
  "payorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "payoutId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "payoutMemo": "payoutMemo",
  "sourceAccountSummary": [
    {
      "currency": "currency",
      "sourceAccountId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "totalCost": 3434
    },
    {
      "currency": "currency",
      "sourceAccountId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "totalCost": 3434
    }
  ],
  "status": "status",
  "submittedDateTime": "submittedDateTime",
  "totalFailedPayments": 123,
  "totalIncompletePayments": 123,
  "totalPayments": 123,
  "withdrawnDateTime": "withdrawnDateTime"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fxSummaries|[[FxSummaryV3](#schemafxsummaryv3)]|false|none|none|
|instructedDateTime|string|false|none|none|
|payorId|string(uuid)|false|none|none|
|payoutId|string(uuid)|true|none|none|
|payoutMemo|string|false|none|none|
|sourceAccountSummary|[[SourceAccountSummaryV3](#schemasourceaccountsummaryv3)]|false|none|none|
|status|string|true|none|Current status of the payout. One of the following values: ACCEPTED, REJECTED, SUBMITTED, QUOTED, INSTRUCTED, COMPLETED, INCOMPLETE, CONFIRMED, WITHDRAWN|
|submittedDateTime|string|true|none|none|
|totalFailedPayments|integer|false|none|none|
|totalIncompletePayments|integer|false|none|none|
|totalPayments|integer|false|none|none|
|withdrawnDateTime|string|false|none|none|

<h2 id="tocS_PayoutSummaryResponseV3">PayoutSummaryResponseV3</h2>
<!-- backwards compatibility -->
<a id="schemapayoutsummaryresponsev3"></a>
<a id="schema_PayoutSummaryResponseV3"></a>
<a id="tocSpayoutsummaryresponsev3"></a>
<a id="tocspayoutsummaryresponsev3"></a>

```json
{
  "acceptedPayments": [
    {
      "amount": 10000,
      "currencyType": "USD",
      "paymentMemo": "INV00112",
      "paymentMetadata": "invoiceeId_123|abc001:12345|xyz002:4567",
      "payorPaymentId": "123211321ABSD",
      "railsId": "SVB",
      "remoteId": "remoteId1234",
      "remoteSystemId": "OB012",
      "sourceAccountName": "Chase Bank Account"
    },
    {
      "amount": 10000,
      "currencyType": "USD",
      "paymentMemo": "INV00112",
      "paymentMetadata": "invoiceeId_123|abc001:12345|xyz002:4567",
      "payorPaymentId": "123211321ABSD",
      "railsId": "SVB",
      "remoteId": "remoteId1234",
      "remoteSystemId": "OB012",
      "sourceAccountName": "Chase Bank Account"
    }
  ],
  "accounts": [
    {
      "currency": "USD",
      "sourceAccountId": "cf81e490-4ab8-49c2-bd68-9d1e725480cb",
      "sourceAccountName": "AccountName",
      "totalPayoutCost": 1000000
    },
    {
      "currency": "USD",
      "sourceAccountId": "cf81e490-4ab8-49c2-bd68-9d1e725480cb",
      "sourceAccountName": "AccountName",
      "totalPayoutCost": 1000000
    }
  ],
  "fxSummaries": [
    {
      "creationTime": "2022-10-30T09:45:09Z",
      "expiryTime": "2022-10-30T09:50:09Z",
      "fundingStatus": "FUNDED",
      "invertedRate": 1.12,
      "paymentCurrency": "USD",
      "quoteId": "af80d455-29dd-4e72-a000-495a9829a7d0",
      "rate": 0.89,
      "sourceCurrency": "USD",
      "status": "QUOTED",
      "totalPaymentAmount": 890000,
      "totalSourceAmount": 1000000
    },
    {
      "creationTime": "2022-10-30T09:45:09Z",
      "expiryTime": "2022-10-30T09:50:09Z",
      "fundingStatus": "FUNDED",
      "invertedRate": 1.12,
      "paymentCurrency": "USD",
      "quoteId": "af80d455-29dd-4e72-a000-495a9829a7d0",
      "rate": 0.89,
      "sourceCurrency": "USD",
      "status": "QUOTED",
      "totalPaymentAmount": 890000,
      "totalSourceAmount": 1000000
    }
  ],
  "paymentsAccepted": 9,
  "paymentsRejected": 1,
  "paymentsSubmitted": 10,
  "paymentsWithdrawn": 0,
  "payoutId": "cf81e490-4ab8-49c2-bd68-9d1e725480cb",
  "rejectedPayments": [
    {
      "amount": 10000,
      "currencyType": "USD",
      "lineNumber": 34,
      "message": "Payment cannot be processed because of the Payee's OFAC or Compliance Status",
      "paymentMetadata": "invoiceeId_123|abc001:12345|xyz002:4567",
      "payorPaymentId": "123211321ABSD",
      "reason": "The payee has not been onboarded",
      "reasonCode": "VE1012",
      "remoteId": "remoteIdVal123",
      "remoteSystemId": "OB012",
      "sourceAccountName": "Chase Bank Account"
    },
    {
      "amount": 10000,
      "currencyType": "USD",
      "lineNumber": 34,
      "message": "Payment cannot be processed because of the Payee's OFAC or Compliance Status",
      "paymentMetadata": "invoiceeId_123|abc001:12345|xyz002:4567",
      "payorPaymentId": "123211321ABSD",
      "reason": "The payee has not been onboarded",
      "reasonCode": "VE1012",
      "remoteId": "remoteIdVal123",
      "remoteSystemId": "OB012",
      "sourceAccountName": "Chase Bank Account"
    }
  ],
  "schedule": {
    "notificationsEnabled": true,
    "scheduleStatus": "SCHEDULED",
    "scheduledAt": "2000-01-23T04:56:07.000+00:00",
    "scheduledByPrincipalId": "8946953b-1e3b-49cf-9da4-b704cbb78f3e",
    "scheduledFor": "2000-01-23T04:56:07.000+00:00"
  },
  "status": "COMPLETED"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acceptedPayments|[[AcceptedPaymentV3](#schemaacceptedpaymentv3)]|true|none|none|
|accounts|[[SourceAccountV3](#schemasourceaccountv3)]|true|none|none|
|fxSummaries|[[QuoteFxSummaryV3](#schemaquotefxsummaryv3)]|true|none|none|
|paymentsAccepted|integer|false|none|The number of payments that were accepted in the payout|
|paymentsRejected|integer|false|none|The number of payments that were rejected in the payout|
|paymentsSubmitted|integer|false|none|The number of payments that were submitted in the payout|
|paymentsWithdrawn|integer|true|none|The number of payments that were withdrawn in the payout|
|payoutId|string(uuid)|false|none|The id of the payout|
|rejectedPayments|[[RejectedPaymentV3](#schemarejectedpaymentv3)]|true|none|none|
|schedule|[PayoutScheduleV3](#schemapayoutschedulev3)|false|none|Details relating to a payout that was executed via a schedule or is still waiting to be executed|
|status|string|false|none|The status of the payout (one of SUBMITTED, ACCEPTED, REJECTED, QUOTED, INSTRUCTED, COMPLETED, INCOMPLETE, WITHDRAWN)|

<h2 id="tocS_PayoutType">PayoutType</h2>
<!-- backwards compatibility -->
<a id="schemapayouttype"></a>
<a id="schema_PayoutType"></a>
<a id="tocSpayouttype"></a>
<a id="tocspayouttype"></a>

```json
"string"
```

The type of payout. One of the following values: STANDARD, AS, ON_BEHALF_OF

<h2 id="tocS_Ping">Ping</h2>
<!-- backwards compatibility -->
<a id="schemaping"></a>
<a id="schema_Ping"></a>
<a id="tocSping"></a>
<a id="tocsping"></a>

```json
{
  "createdAt": "2020-06-18T15:09:42Z",
  "eventId": "270ab907-27ec-4b83-8028-0ff432bbdec4",
  "sourceType": "payment_status_changed"
}
```

Ping event for testing the webhook integration. Can be initiated via the Web UI.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(date-time)|true|none|ISO8601 timestamp indicating when the source event was created|
|eventId|string(uuid)|true|none|UUID id of the source event in the Velo platform|
|sourceType|string|true|none|OA3 Schema type name for the source info which is used as the discriminator value to ensure that data binding works correctly|

<h2 id="tocS_PingResponse">PingResponse</h2>
<!-- backwards compatibility -->
<a id="schemapingresponse"></a>
<a id="schema_PingResponse"></a>
<a id="tocSpingresponse"></a>
<a id="tocspingresponse"></a>

```json
{
  "id": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "webhookId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|none|
|webhookId|string(uuid)|false|none|none|

<h2 id="tocS_PostInstructFxInfo">PostInstructFxInfo</h2>
<!-- backwards compatibility -->
<a id="schemapostinstructfxinfo"></a>
<a id="schema_PostInstructFxInfo"></a>
<a id="tocSpostinstructfxinfo"></a>
<a id="tocspostinstructfxinfo"></a>

```json
{
  "fxMode": "MANUAL",
  "fxStatus": "INITIATED",
  "fxStatusUpdatedAt": "2000-01-23T04:56:07.000+00:00",
  "fxTransactionReference": "AB123GHI"
}
```

FX details relating to a payout that was executed or is still waiting to be executed

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fxMode|string|true|none|The mode by which the FX rate is to be determined (MANUAL or AUTO)|
|fxStatus|string|true|none|The state to which the Post-Instruct FX process has reached (INITIATED or COMPLETED)|
|fxStatusUpdatedAt|string(date-time)|true|none|The date-time at which the most recent fxStatus was determined.|
|fxTransactionReference|string|false|none|The reference assigned to the FX funding that will fulfil this payment.|

<h2 id="tocS_PostInstructFxMode">PostInstructFxMode</h2>
<!-- backwards compatibility -->
<a id="schemapostinstructfxmode"></a>
<a id="schema_PostInstructFxMode"></a>
<a id="tocSpostinstructfxmode"></a>
<a id="tocspostinstructfxmode"></a>

```json
"MANUAL"
```

The mode by which the FX rate is to be determined (MANUAL or AUTO)

<h2 id="tocS_PostInstructFxStatus">PostInstructFxStatus</h2>
<!-- backwards compatibility -->
<a id="schemapostinstructfxstatus"></a>
<a id="schema_PostInstructFxStatus"></a>
<a id="tocSpostinstructfxstatus"></a>
<a id="tocspostinstructfxstatus"></a>

```json
"INITIATED"
```

The state to which the Post-Instruct FX process has reached (INITIATED or COMPLETED)

<h2 id="tocS_QueryBatchResponseV3">QueryBatchResponseV3</h2>
<!-- backwards compatibility -->
<a id="schemaquerybatchresponsev3"></a>
<a id="schema_QueryBatchResponseV3"></a>
<a id="tocSquerybatchresponsev3"></a>
<a id="tocsquerybatchresponsev3"></a>

```json
{
  "failureCount": 2,
  "failures": [
    {
      "failedSubmission": {
        "address": {
          "city": "Key West",
          "country": "US",
          "countyOrProvince": "FL",
          "line1": "500 Duval St",
          "line2": "line2",
          "line3": "line3",
          "line4": "line4",
          "zipOrPostcode": "33945"
        },
        "challenge": {
          "description": "challenge description",
          "value": "challenge test"
        },
        "company": {
          "name": "ABC Group Plc",
          "operatingName": "ABC Co",
          "taxId": "123123123"
        },
        "email": "bob@example.com",
        "individual": {
          "dateOfBirth": "1970-05-20T00:00:00.000+0000",
          "name": {
            "firstName": "Bob",
            "lastName": "Smith",
            "otherNames": "H",
            "title": "Mr"
          },
          "nationalIdentification": "SA211123K"
        },
        "language": "en-US",
        "payeeId": "2aa5d7e0-2ecb-403f-8494-1865ed0454e9",
        "paymentChannel": {
          "accountName": "My account",
          "accountNumber": "XXXXXX5678",
          "countryCode": "US",
          "currency": "USD",
          "iban": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX1234",
          "paymentChannelName": "My Payment Channel",
          "routingNumber": "XXXXX6789"
        },
        "payorRefs": [
          {
            "invitationStatus": "invitationStatus",
            "invitationStatusTimestamp": "2019-01-20T09:00:00Z",
            "payableIssues": [
              {
                "code": "3",
                "message": "payee-disabled"
              },
              {
                "code": "3",
                "message": "payee-disabled"
              }
            ],
            "payableStatus": true,
            "paymentChannelId": "70faaff7-2c32-4b44-b27f-f0b6c484e6f3",
            "payorId": "ba08877f-9d96-41e4-9c26-44a872d856ae",
            "remoteId": "uniqueIdForRemoteEntity"
          },
          {
            "invitationStatus": "invitationStatus",
            "invitationStatusTimestamp": "2019-01-20T09:00:00Z",
            "payableIssues": [
              {
                "code": "3",
                "message": "payee-disabled"
              },
              {
                "code": "3",
                "message": "payee-disabled"
              }
            ],
            "payableStatus": true,
            "paymentChannelId": "70faaff7-2c32-4b44-b27f-f0b6c484e6f3",
            "payorId": "ba08877f-9d96-41e4-9c26-44a872d856ae",
            "remoteId": "uniqueIdForRemoteEntity"
          }
        ],
        "remoteId": "Remote ID",
        "type": "type"
      },
      "failureMessage": "failure reason"
    },
    {
      "failedSubmission": {
        "address": {
          "city": "Key West",
          "country": "US",
          "countyOrProvince": "FL",
          "line1": "500 Duval St",
          "line2": "line2",
          "line3": "line3",
          "line4": "line4",
          "zipOrPostcode": "33945"
        },
        "challenge": {
          "description": "challenge description",
          "value": "challenge test"
        },
        "company": {
          "name": "ABC Group Plc",
          "operatingName": "ABC Co",
          "taxId": "123123123"
        },
        "email": "bob@example.com",
        "individual": {
          "dateOfBirth": "1970-05-20T00:00:00.000+0000",
          "name": {
            "firstName": "Bob",
            "lastName": "Smith",
            "otherNames": "H",
            "title": "Mr"
          },
          "nationalIdentification": "SA211123K"
        },
        "language": "en-US",
        "payeeId": "2aa5d7e0-2ecb-403f-8494-1865ed0454e9",
        "paymentChannel": {
          "accountName": "My account",
          "accountNumber": "XXXXXX5678",
          "countryCode": "US",
          "currency": "USD",
          "iban": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX1234",
          "paymentChannelName": "My Payment Channel",
          "routingNumber": "XXXXX6789"
        },
        "payorRefs": [
          {
            "invitationStatus": "invitationStatus",
            "invitationStatusTimestamp": "2019-01-20T09:00:00Z",
            "payableIssues": [
              {
                "code": "3",
                "message": "payee-disabled"
              },
              {
                "code": "3",
                "message": "payee-disabled"
              }
            ],
            "payableStatus": true,
            "paymentChannelId": "70faaff7-2c32-4b44-b27f-f0b6c484e6f3",
            "payorId": "ba08877f-9d96-41e4-9c26-44a872d856ae",
            "remoteId": "uniqueIdForRemoteEntity"
          },
          {
            "invitationStatus": "invitationStatus",
            "invitationStatusTimestamp": "2019-01-20T09:00:00Z",
            "payableIssues": [
              {
                "code": "3",
                "message": "payee-disabled"
              },
              {
                "code": "3",
                "message": "payee-disabled"
              }
            ],
            "payableStatus": true,
            "paymentChannelId": "70faaff7-2c32-4b44-b27f-f0b6c484e6f3",
            "payorId": "ba08877f-9d96-41e4-9c26-44a872d856ae",
            "remoteId": "uniqueIdForRemoteEntity"
          }
        ],
        "remoteId": "Remote ID",
        "type": "type"
      },
      "failureMessage": "failure reason"
    }
  ],
  "pendingCount": 2,
  "status": "status"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|failureCount|integer(int64)|false|none|none|
|failures|[[FailedSubmissionV3](#schemafailedsubmissionv3)]|false|none|none|
|pendingCount|integer(int64)|false|none|none|
|status|string|false|none|Batch Status. One of the following values: SUBMITTED, ACCEPTED|

<h2 id="tocS_QueryBatchResponseV4">QueryBatchResponseV4</h2>
<!-- backwards compatibility -->
<a id="schemaquerybatchresponsev4"></a>
<a id="schema_QueryBatchResponseV4"></a>
<a id="tocSquerybatchresponsev4"></a>
<a id="tocsquerybatchresponsev4"></a>

```json
{
  "failureCount": 2,
  "failures": [
    {
      "failedSubmission": {
        "address": {
          "city": "Key West",
          "country": "US",
          "countyOrProvince": "FL",
          "line1": "500 Duval St",
          "line2": "line2",
          "line3": "line3",
          "line4": "line4",
          "zipOrPostcode": "33945"
        },
        "challenge": {
          "description": "challenge description",
          "value": "11984567"
        },
        "company": {
          "name": "ABC Group Plc",
          "operatingName": "ABC Co",
          "taxId": "123123123"
        },
        "email": "bob@example.com",
        "individual": {
          "dateOfBirth": "1970-05-20T00:00:00.000+0000",
          "name": {
            "firstName": "Bob",
            "lastName": "Smith",
            "otherNames": "H",
            "title": "Mr"
          },
          "nationalIdentification": "SA211123K"
        },
        "language": "en-US",
        "payeeId": "2aa5d7e0-2ecb-403f-8494-1865ed0454e9",
        "paymentChannel": {
          "accountName": "My account",
          "accountNumber": "XXXXXX5678",
          "countryCode": "US",
          "currency": "USD",
          "iban": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX1234",
          "paymentChannelName": "My Payment Channel",
          "routingNumber": "XXXXX6789"
        },
        "payorRefs": [
          {
            "invitationStatus": "invitationStatus",
            "invitationStatusTimestamp": "2019-01-20T09:00:00Z",
            "payableIssues": [
              {
                "code": "3",
                "message": "payee-disabled"
              },
              {
                "code": "3",
                "message": "payee-disabled"
              }
            ],
            "payableStatus": true,
            "paymentChannelId": "70faaff7-2c32-4b44-b27f-f0b6c484e6f3",
            "payorId": "ba08877f-9d96-41e4-9c26-44a872d856ae",
            "remoteId": "uniqueIdForRemoteEntity"
          },
          {
            "invitationStatus": "invitationStatus",
            "invitationStatusTimestamp": "2019-01-20T09:00:00Z",
            "payableIssues": [
              {
                "code": "3",
                "message": "payee-disabled"
              },
              {
                "code": "3",
                "message": "payee-disabled"
              }
            ],
            "payableStatus": true,
            "paymentChannelId": "70faaff7-2c32-4b44-b27f-f0b6c484e6f3",
            "payorId": "ba08877f-9d96-41e4-9c26-44a872d856ae",
            "remoteId": "uniqueIdForRemoteEntity"
          }
        ],
        "remoteId": "Remote ID",
        "type": "type"
      },
      "failureMessage": "failure reason"
    },
    {
      "failedSubmission": {
        "address": {
          "city": "Key West",
          "country": "US",
          "countyOrProvince": "FL",
          "line1": "500 Duval St",
          "line2": "line2",
          "line3": "line3",
          "line4": "line4",
          "zipOrPostcode": "33945"
        },
        "challenge": {
          "description": "challenge description",
          "value": "11984567"
        },
        "company": {
          "name": "ABC Group Plc",
          "operatingName": "ABC Co",
          "taxId": "123123123"
        },
        "email": "bob@example.com",
        "individual": {
          "dateOfBirth": "1970-05-20T00:00:00.000+0000",
          "name": {
            "firstName": "Bob",
            "lastName": "Smith",
            "otherNames": "H",
            "title": "Mr"
          },
          "nationalIdentification": "SA211123K"
        },
        "language": "en-US",
        "payeeId": "2aa5d7e0-2ecb-403f-8494-1865ed0454e9",
        "paymentChannel": {
          "accountName": "My account",
          "accountNumber": "XXXXXX5678",
          "countryCode": "US",
          "currency": "USD",
          "iban": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX1234",
          "paymentChannelName": "My Payment Channel",
          "routingNumber": "XXXXX6789"
        },
        "payorRefs": [
          {
            "invitationStatus": "invitationStatus",
            "invitationStatusTimestamp": "2019-01-20T09:00:00Z",
            "payableIssues": [
              {
                "code": "3",
                "message": "payee-disabled"
              },
              {
                "code": "3",
                "message": "payee-disabled"
              }
            ],
            "payableStatus": true,
            "paymentChannelId": "70faaff7-2c32-4b44-b27f-f0b6c484e6f3",
            "payorId": "ba08877f-9d96-41e4-9c26-44a872d856ae",
            "remoteId": "uniqueIdForRemoteEntity"
          },
          {
            "invitationStatus": "invitationStatus",
            "invitationStatusTimestamp": "2019-01-20T09:00:00Z",
            "payableIssues": [
              {
                "code": "3",
                "message": "payee-disabled"
              },
              {
                "code": "3",
                "message": "payee-disabled"
              }
            ],
            "payableStatus": true,
            "paymentChannelId": "70faaff7-2c32-4b44-b27f-f0b6c484e6f3",
            "payorId": "ba08877f-9d96-41e4-9c26-44a872d856ae",
            "remoteId": "uniqueIdForRemoteEntity"
          }
        ],
        "remoteId": "Remote ID",
        "type": "type"
      },
      "failureMessage": "failure reason"
    }
  ],
  "pendingCount": 2,
  "status": "status"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|failureCount|integer(int64)|false|none|none|
|failures|[[FailedSubmissionV4](#schemafailedsubmissionv4)]|false|none|none|
|pendingCount|integer(int64)|false|none|none|
|status|string|false|none|Batch Status. One of the following values: SUBMITTED, ACCEPTED|

<h2 id="tocS_QuoteFxSummaryV3">QuoteFxSummaryV3</h2>
<!-- backwards compatibility -->
<a id="schemaquotefxsummaryv3"></a>
<a id="schema_QuoteFxSummaryV3"></a>
<a id="tocSquotefxsummaryv3"></a>
<a id="tocsquotefxsummaryv3"></a>

```json
{
  "creationTime": "2022-10-30T09:45:09Z",
  "expiryTime": "2022-10-30T09:50:09Z",
  "fundingStatus": "FUNDED",
  "invertedRate": 1.12,
  "paymentCurrency": "USD",
  "quoteId": "af80d455-29dd-4e72-a000-495a9829a7d0",
  "rate": 0.89,
  "sourceCurrency": "USD",
  "status": "QUOTED",
  "totalPaymentAmount": 890000,
  "totalSourceAmount": 1000000
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|creationTime|string(date-time)|true|none|Timestamp of when the quote was created|
|expiryTime|string(date-time)|false|none|The timestamp for when the quote will expire|
|fundingStatus|string|true|none|Current status of the funding associated with this quote. One of the following values: UNFUNDED, INSTRUCTED, FUNDED|
|invertedRate|number(float)|false|none|The inverse conversion rate (from paymnent currency to source currency)|
|paymentCurrency|string|true|none|Valid ISO 4217 3 letter currency code. See the <a href="https://www.iso.org/iso-4217-currency-codes.html" target="_blank" a>ISO specification</a> for details.|
|quoteId|string(uuid)|true|none|The id of the created quote|
|rate|number(float)|true|none|The conversion rate (from the source currency to the payment currency)|
|sourceCurrency|string|true|none|Valid ISO 4217 3 letter currency code. See the <a href="https://www.iso.org/iso-4217-currency-codes.html" target="_blank" a>ISO specification</a> for details.|
|status|string|true|none|Current status of the fx quote. One of the following values: UNQUOTED, QUOTED, EXPIRED, EXECUTED, REJECTED|
|totalPaymentAmount|integer|true|none|The amount (in minor units) that the payee will receive|
|totalSourceAmount|integer|true|none|The amount (in minor units) that will be paid from the source account|

<h2 id="tocS_QuoteResponseV3">QuoteResponseV3</h2>
<!-- backwards compatibility -->
<a id="schemaquoteresponsev3"></a>
<a id="schema_QuoteResponseV3"></a>
<a id="tocSquoteresponsev3"></a>
<a id="tocsquoteresponsev3"></a>

```json
{
  "fxSummaries": [
    {
      "creationTime": "2022-10-30T09:45:09Z",
      "expiryTime": "2022-10-30T09:50:09Z",
      "fundingStatus": "FUNDED",
      "invertedRate": 1.12,
      "paymentCurrency": "USD",
      "quoteId": "af80d455-29dd-4e72-a000-495a9829a7d0",
      "rate": 0.89,
      "sourceCurrency": "USD",
      "status": "QUOTED",
      "totalPaymentAmount": 890000,
      "totalSourceAmount": 1000000
    },
    {
      "creationTime": "2022-10-30T09:45:09Z",
      "expiryTime": "2022-10-30T09:50:09Z",
      "fundingStatus": "FUNDED",
      "invertedRate": 1.12,
      "paymentCurrency": "USD",
      "quoteId": "af80d455-29dd-4e72-a000-495a9829a7d0",
      "rate": 0.89,
      "sourceCurrency": "USD",
      "status": "QUOTED",
      "totalPaymentAmount": 890000,
      "totalSourceAmount": 1000000
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fxSummaries|[[QuoteFxSummaryV3](#schemaquotefxsummaryv3)]|false|none|none|

<h2 id="tocS_RegionV2">RegionV2</h2>
<!-- backwards compatibility -->
<a id="schemaregionv2"></a>
<a id="schema_RegionV2"></a>
<a id="tocSregionv2"></a>
<a id="tocsregionv2"></a>

```json
{
  "abbreviation": "CA",
  "name": "California"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|abbreviation|string|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_RegisterSmsRequest">RegisterSmsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaregistersmsrequest"></a>
<a id="schema_RegisterSmsRequest"></a>
<a id="tocSregistersmsrequest"></a>
<a id="tocsregistersmsrequest"></a>

```json
{
  "smsNumber": "11235555555"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|smsNumber|string|true|none|The phone number of a device that the user can receive sms messages on<br>|

<h2 id="tocS_RejectedPaymentV3">RejectedPaymentV3</h2>
<!-- backwards compatibility -->
<a id="schemarejectedpaymentv3"></a>
<a id="schema_RejectedPaymentV3"></a>
<a id="tocSrejectedpaymentv3"></a>
<a id="tocsrejectedpaymentv3"></a>

```json
{
  "amount": 10000,
  "currencyType": "USD",
  "lineNumber": 34,
  "message": "Payment cannot be processed because of the Payee's OFAC or Compliance Status",
  "paymentMetadata": "invoiceeId_123|abc001:12345|xyz002:4567",
  "payorPaymentId": "123211321ABSD",
  "reason": "The payee has not been onboarded",
  "reasonCode": "VE1012",
  "remoteId": "remoteIdVal123",
  "remoteSystemId": "OB012",
  "sourceAccountName": "Chase Bank Account"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|integer|true|none|The amount of the payment in minor units|
|currencyType|string|true|none|Valid ISO 4217 3 letter currency code. See the <a href="https://www.iso.org/iso-4217-currency-codes.html" target="_blank" a>ISO specification</a> for details.|
|lineNumber|integer|false|none|If the payment was submitted in a csv payout then this will be the line number of the payment in the file|
|message|string|false|none|A more general rejection message than the reason property|
|paymentMetadata|string|false|none|<p>Metadata about the payment that may be relevant to the specific rails or remote system making the payout</p><br><p>The structure of the data will be dictated by the requirements of the payment rails</p><br>|
|payorPaymentId|string|true|none|A reference identifier for the payor for the given payee payment|
|reason|string|true|none|The reason for the payment being rejected|
|reasonCode|string|false|none|The reason code as determined by Velo|
|remoteId|string|true|none|The remoteId supplied by the payor that identifies the payee|
|remoteSystemId|string|false|none|<p>The identifier for the remote payments system if not Velo</p><br>|
|sourceAccountName|string|true|none|The identifier of the source account to debit the payment from|

<h2 id="tocS_ResendTokenRequest">ResendTokenRequest</h2>
<!-- backwards compatibility -->
<a id="schemaresendtokenrequest"></a>
<a id="schema_ResendTokenRequest"></a>
<a id="tocSresendtokenrequest"></a>
<a id="tocsresendtokenrequest"></a>

```json
{
  "tokenType": "INVITE_MFA_USER",
  "verificationCode": "123456"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tokenType|string|true|none|The type of the token to resend|
|verificationCode|string \| null|false|none|<p>Optional property that MUST be suppied when manually verifying a user</p><br><p>The user's smsNumber is registered via a separate endpoint and an OTP sent to them</p><br>|

#### Enumerated Values

|Property|Value|
|---|---|
|tokenType|INVITE_MFA_USER|
|tokenType|MFA_REGISTRATION|

<h2 id="tocS_ResetPasswordRequest">ResetPasswordRequest</h2>
<!-- backwards compatibility -->
<a id="schemaresetpasswordrequest"></a>
<a id="schema_ResetPasswordRequest"></a>
<a id="tocSresetpasswordrequest"></a>
<a id="tocsresetpasswordrequest"></a>

```json
{
  "email": "foo@example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string(email)|true|none|the email address of the user requesting the reset password|

<h2 id="tocS_Role">Role</h2>
<!-- backwards compatibility -->
<a id="schemarole"></a>
<a id="schema_Role"></a>
<a id="tocSrole"></a>
<a id="tocsrole"></a>

```json
{
  "name": "payor.admin"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|the name of the role|

<h2 id="tocS_RoleUpdateRequest">RoleUpdateRequest</h2>
<!-- backwards compatibility -->
<a id="schemaroleupdaterequest"></a>
<a id="schema_RoleUpdateRequest"></a>
<a id="tocSroleupdaterequest"></a>
<a id="tocsroleupdaterequest"></a>

```json
{
  "roles": [
    "payor.admin"
  ],
  "verificationCode": "123456"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|roles|[string]|true|none|<p>The role(s) for the user</p><br><p>The role must exist</p><br><p>The role can be a custom role or a system role but the invoker must have the permissions to assign the role</p><br><p>System roles are: backoffice.admin, payor.master_admin, payor.admin, payor.support</p><br>|
|verificationCode|string \| null|false|none|<p>Optional property that MUST be suppied when manually verifying a user</p><br><p>The user's smsNumber is registered via a separate endpoint and an OTP sent to them</p><br>|

<h2 id="tocS_SchedulePayoutRequestV3">SchedulePayoutRequestV3</h2>
<!-- backwards compatibility -->
<a id="schemaschedulepayoutrequestv3"></a>
<a id="schema_SchedulePayoutRequestV3"></a>
<a id="tocSschedulepayoutrequestv3"></a>
<a id="tocsschedulepayoutrequestv3"></a>

```json
{
  "notificationsEnabled": true,
  "scheduledFor": "2025-01-01T10:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|notificationsEnabled|boolean|true|none|Flag to indicate whether to receive notifications when scheduled payout is processed|
|scheduledFor|string(date-time)|true|none|UTC timestamp for instructing the payout. Format is ISO-8601.|

<h2 id="tocS_ScheduleStatus">ScheduleStatus</h2>
<!-- backwards compatibility -->
<a id="schemaschedulestatus"></a>
<a id="schema_ScheduleStatus"></a>
<a id="tocSschedulestatus"></a>
<a id="tocsschedulestatus"></a>

```json
"SCHEDULED"
```

Current status of the payout schedule. One of the following values: SCHEDULED, EXECUTED, FAILED

<h2 id="tocS_SelfMFATypeUnregisterRequest">SelfMFATypeUnregisterRequest</h2>
<!-- backwards compatibility -->
<a id="schemaselfmfatypeunregisterrequest"></a>
<a id="schema_SelfMFATypeUnregisterRequest"></a>
<a id="tocSselfmfatypeunregisterrequest"></a>
<a id="tocsselfmfatypeunregisterrequest"></a>

```json
{
  "mfaType": "TOTP"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mfaType|string|true|none|The type of the MFA device|

#### Enumerated Values

|Property|Value|
|---|---|
|mfaType|SMS|
|mfaType|YUBIKEY|
|mfaType|TOTP|

<h2 id="tocS_SelfUpdatePasswordRequest">SelfUpdatePasswordRequest</h2>
<!-- backwards compatibility -->
<a id="schemaselfupdatepasswordrequest"></a>
<a id="schema_SelfUpdatePasswordRequest"></a>
<a id="tocSselfupdatepasswordrequest"></a>
<a id="tocsselfupdatepasswordrequest"></a>

```json
{
  "newPassword": "My_new_password",
  "oldPassword": "My_current_password"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|newPassword|string|true|none|The new password|
|oldPassword|string|true|none|The user's current password|

<h2 id="tocS_SetNotificationsRequest">SetNotificationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemasetnotificationsrequest"></a>
<a id="schema_SetNotificationsRequest"></a>
<a id="tocSsetnotificationsrequest"></a>
<a id="tocssetnotificationsrequest"></a>

```json
{
  "minimumBalance": 800828190
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|minimumBalance|integer(int64)|true|none|Amount to set as minimum balance in minor units|

<h2 id="tocS_SetNotificationsRequest_2">SetNotificationsRequest_2</h2>
<!-- backwards compatibility -->
<a id="schemasetnotificationsrequest_2"></a>
<a id="schema_SetNotificationsRequest_2"></a>
<a id="tocSsetnotificationsrequest_2"></a>
<a id="tocssetnotificationsrequest_2"></a>

```json
{
  "minimumBalance": 10000000
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|minimumBalance|integer(int64)|true|none|Amount to set as minimum balance for notifications in minor units|

<h2 id="tocS_SourceAccountResponseV2">SourceAccountResponseV2</h2>
<!-- backwards compatibility -->
<a id="schemasourceaccountresponsev2"></a>
<a id="schema_SourceAccountResponseV2"></a>
<a id="tocSsourceaccountresponsev2"></a>
<a id="tocssourceaccountresponsev2"></a>

```json
{
  "accountType": "FBO",
  "autoTopUpConfig": {
    "enabled": true,
    "minBalance": 10000,
    "targetBalance": 300000
  },
  "balance": 1203489,
  "balanceVisible": true,
  "currency": "USD",
  "customerId": "Joe Customer",
  "fundingAccountId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "fundingRef": "a1b2c3d4",
  "id": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "name": "MyAccountName",
  "notifications": {
    "minimumBalance": 120000
  },
  "payorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "physicalAccountId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "physicalAccountName": "VELO_FBO_MYBANKA_USD",
  "pooled": true,
  "railsId": "BOA_RAIL"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountType|string|true|none|none|
|autoTopUpConfig|[AutoTopUpConfigV2](#schemaautotopupconfigv2)|false|none|none|
|balance|integer(int64)|false|none|Decimal implied|
|balanceVisible|boolean|true|none|none|
|currency|string|false|none|none|
|customerId|string \| null|false|none|none|
|fundingAccountId|string(uuid) \| null|false|none|none|
|fundingRef|string|true|none|none|
|id|string(uuid)|true|none|Source Account Id|
|name|string|false|none|none|
|notifications|[NotificationsV2](#schemanotificationsv2)|false|none|none|
|payorId|string(uuid)|false|none|none|
|physicalAccountId|string(uuid)|false|none|none|
|physicalAccountName|string|true|none|none|
|pooled|boolean|true|none|none|
|railsId|string|true|none|none|

<h2 id="tocS_SourceAccountResponseV3">SourceAccountResponseV3</h2>
<!-- backwards compatibility -->
<a id="schemasourceaccountresponsev3"></a>
<a id="schema_SourceAccountResponseV3"></a>
<a id="tocSsourceaccountresponsev3"></a>
<a id="tocssourceaccountresponsev3"></a>

```json
{
  "autoTopUpConfig": {
    "enabled": true,
    "fundingAccountId": "640ab1bd-8a6a-4603-a83a-1edbc3ed5689",
    "minBalance": 10000,
    "targetBalance": 300000
  },
  "balance": 1203489,
  "country": "US",
  "currency": "USD",
  "customerId": "Joe Customer",
  "deleted": true,
  "deletedAt": "2021-01-27T10:08:25.701Z",
  "fundingRef": "a1b2c3d4",
  "id": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "name": "MyAccountName",
  "notifications": {
    "minimumBalance": 120000
  },
  "payorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "physicalAccountId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "physicalAccountName": "VELO_FBO_MYBANKA_USD",
  "pooled": true,
  "railsId": "BOA_RAIL",
  "type": "FBO",
  "userDeleted": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|autoTopUpConfig|[AutoTopUpConfigV3](#schemaautotopupconfigv3)|false|none|none|
|balance|integer(int64)|false|none|Decimal implied|
|country|string|false|none|Valid ISO 3166 2 character country code. See the <a href="https://www.iso.org/iso-3166-country-codes.html" target="_blank" a>ISO specification</a> for details.|
|currency|string|false|none|Valid ISO 4217 3 letter currency code. See the <a href="https://www.iso.org/iso-4217-currency-codes.html" target="_blank" a>ISO specification</a> for details.|
|customerId|string \| null|false|none|none|
|deleted|boolean|false|none|An optional flag for whether the source account has been deleted. Only present in the response if true.|
|deletedAt|string(date-time)|false|none|An optional timestamp when the source account has been deleted. Only present in the response if deleted.|
|fundingRef|string|false|none|The funding reference (will not be set for DECOUPLED accounts).|
|id|string(uuid)|true|none|Source Account Id|
|name|string|false|none|none|
|notifications|[NotificationsV3](#schemanotificationsv3)|false|none|none|
|payorId|string(uuid)|false|none|none|
|physicalAccountId|string(uuid)|false|none|The physical account id (will not be set for DECOUPLED accounts).|
|physicalAccountName|string|false|none|The physical account name (will not be set for DECOUPLED accounts).|
|pooled|boolean|false|none|The pooled account flag (will not be set for DECOUPLED accounts).|
|railsId|string|true|none|none|
|type|string|true|none|none|
|userDeleted|boolean|false|none|An optional flag for whether the source account has been deleted by a user. Only present in the response if true.|

<h2 id="tocS_SourceAccountSummary">SourceAccountSummary</h2>
<!-- backwards compatibility -->
<a id="schemasourceaccountsummary"></a>
<a id="schema_SourceAccountSummary"></a>
<a id="tocSsourceaccountsummary"></a>
<a id="tocssourceaccountsummary"></a>

```json
{
  "currency": "EUR",
  "sourceAccountId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "totalCost": 3344
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currency|string|false|none|ISO-4217 3 character currency code|
|sourceAccountId|string(uuid)|true|none|none|
|totalCost|integer(int64)|true|none|none|

<h2 id="tocS_SourceAccountSummaryV3">SourceAccountSummaryV3</h2>
<!-- backwards compatibility -->
<a id="schemasourceaccountsummaryv3"></a>
<a id="schema_SourceAccountSummaryV3"></a>
<a id="tocSsourceaccountsummaryv3"></a>
<a id="tocssourceaccountsummaryv3"></a>

```json
{
  "currency": "currency",
  "sourceAccountId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "totalCost": 3434
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currency|string|false|none|ISO 3 character currency code|
|sourceAccountId|string(uuid)|true|none|none|
|totalCost|integer(int64)|true|none|none|

<h2 id="tocS_SourceAccountTypeV3">SourceAccountTypeV3</h2>
<!-- backwards compatibility -->
<a id="schemasourceaccounttypev3"></a>
<a id="schema_SourceAccountTypeV3"></a>
<a id="tocSsourceaccounttypev3"></a>
<a id="tocssourceaccounttypev3"></a>

```json
"string"
```

Type of source account. One of the following values: FBO,PRIVATE,WUBS_DECOUPLED

<h2 id="tocS_SourceAccountV3">SourceAccountV3</h2>
<!-- backwards compatibility -->
<a id="schemasourceaccountv3"></a>
<a id="schema_SourceAccountV3"></a>
<a id="tocSsourceaccountv3"></a>
<a id="tocssourceaccountv3"></a>

```json
{
  "currency": "USD",
  "sourceAccountId": "cf81e490-4ab8-49c2-bd68-9d1e725480cb",
  "sourceAccountName": "AccountName",
  "totalPayoutCost": 1000000
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currency|string|true|none|Valid ISO 4217 3 letter currency code. See the <a href="https://www.iso.org/iso-4217-currency-codes.html" target="_blank" a>ISO specification</a> for details.|
|sourceAccountId|string(uuid)|true|none|The id of the payout|
|sourceAccountName|string|true|none|The name of the source account as referencec in the payout|
|totalPayoutCost|integer|true|none|The total amount (in mnor units) that will be debited from the source account for the payout|

<h2 id="tocS_SourceEvent">SourceEvent</h2>
<!-- backwards compatibility -->
<a id="schemasourceevent"></a>
<a id="schema_SourceEvent"></a>
<a id="tocSsourceevent"></a>
<a id="tocssourceevent"></a>

```json
{
  "createdAt": "2020-06-18T15:09:42Z",
  "eventId": "270ab907-27ec-4b83-8028-0ff432bbdec4",
  "sourceType": "payment_status_changed"
}
```

Base type for each source event payload

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(date-time)|true|none|ISO8601 timestamp indicating when the source event was created|
|eventId|string(uuid)|true|none|UUID id of the source event in the Velo platform|
|sourceType|string|true|none|OA3 Schema type name for the source info which is used as the discriminator value to ensure that data binding works correctly|

<h2 id="tocS_SupportedCountriesResponse">SupportedCountriesResponse</h2>
<!-- backwards compatibility -->
<a id="schemasupportedcountriesresponse"></a>
<a id="schema_SupportedCountriesResponse"></a>
<a id="tocSsupportedcountriesresponse"></a>
<a id="tocssupportedcountriesresponse"></a>

```json
{
  "countries": [
    {
      "currencies": [
        "USD",
        "USD"
      ],
      "isoCountryCode": "US"
    },
    {
      "currencies": [
        "USD",
        "USD"
      ],
      "isoCountryCode": "US"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|countries|[[SupportedCountry](#schemasupportedcountry)]|false|none|none|

<h2 id="tocS_SupportedCountriesResponseV2">SupportedCountriesResponseV2</h2>
<!-- backwards compatibility -->
<a id="schemasupportedcountriesresponsev2"></a>
<a id="schema_SupportedCountriesResponseV2"></a>
<a id="tocSsupportedcountriesresponsev2"></a>
<a id="tocssupportedcountriesresponsev2"></a>

```json
{
  "countries": [
    {
      "currencies": [
        "USD",
        "USD"
      ],
      "isoCountryCode": "US",
      "regions": [
        {
          "abbreviation": "CA",
          "name": "California"
        },
        {
          "abbreviation": "CA",
          "name": "California"
        }
      ]
    },
    {
      "currencies": [
        "USD",
        "USD"
      ],
      "isoCountryCode": "US",
      "regions": [
        {
          "abbreviation": "CA",
          "name": "California"
        },
        {
          "abbreviation": "CA",
          "name": "California"
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|countries|[[SupportedCountryV2](#schemasupportedcountryv2)]|false|none|none|

<h2 id="tocS_SupportedCountry">SupportedCountry</h2>
<!-- backwards compatibility -->
<a id="schemasupportedcountry"></a>
<a id="schema_SupportedCountry"></a>
<a id="tocSsupportedcountry"></a>
<a id="tocssupportedcountry"></a>

```json
{
  "currencies": [
    "USD",
    "USD"
  ],
  "isoCountryCode": "US"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currencies|[[IsoCurrency](#schemaisocurrency)]|false|none|none|
|isoCountryCode|string|false|none|Valid ISO 3166 2 character country code. See the <a href="https://www.iso.org/iso-3166-country-codes.html" target="_blank" a>ISO specification</a> for details.|

<h2 id="tocS_SupportedCountryV2">SupportedCountryV2</h2>
<!-- backwards compatibility -->
<a id="schemasupportedcountryv2"></a>
<a id="schema_SupportedCountryV2"></a>
<a id="tocSsupportedcountryv2"></a>
<a id="tocssupportedcountryv2"></a>

```json
{
  "currencies": [
    "USD",
    "USD"
  ],
  "isoCountryCode": "US",
  "regions": [
    {
      "abbreviation": "CA",
      "name": "California"
    },
    {
      "abbreviation": "CA",
      "name": "California"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currencies|[[IsoCurrency](#schemaisocurrency)]|false|none|none|
|isoCountryCode|string|false|none|Valid ISO 3166 2 character country code. See the <a href="https://www.iso.org/iso-3166-country-codes.html" target="_blank" a>ISO specification</a> for details.|
|regions|[[RegionV2](#schemaregionv2)]|false|none|none|

<h2 id="tocS_SupportedCurrencyResponseV2">SupportedCurrencyResponseV2</h2>
<!-- backwards compatibility -->
<a id="schemasupportedcurrencyresponsev2"></a>
<a id="schema_SupportedCurrencyResponseV2"></a>
<a id="tocSsupportedcurrencyresponsev2"></a>
<a id="tocssupportedcurrencyresponsev2"></a>

```json
{
  "currencies": [
    {
      "currency": "USD",
      "maxPaymentAmount": 100000
    },
    {
      "currency": "USD",
      "maxPaymentAmount": 100000
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currencies|[[SupportedCurrencyV2](#schemasupportedcurrencyv2)]|false|none|none|

<h2 id="tocS_SupportedCurrencyV2">SupportedCurrencyV2</h2>
<!-- backwards compatibility -->
<a id="schemasupportedcurrencyv2"></a>
<a id="schema_SupportedCurrencyV2"></a>
<a id="tocSsupportedcurrencyv2"></a>
<a id="tocssupportedcurrencyv2"></a>

```json
{
  "currency": "USD",
  "maxPaymentAmount": 100000
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currency|string|false|none|Valid ISO 4217 3 letter currency code. See the <a href="https://www.iso.org/iso-4217-currency-codes.html" target="_blank" a>ISO specification</a> for details.|
|maxPaymentAmount|integer|false|none|The max amount allowed in this currency|

<h2 id="tocS_SupportedLanguage">SupportedLanguage</h2>
<!-- backwards compatibility -->
<a id="schemasupportedlanguage"></a>
<a id="schema_SupportedLanguage"></a>
<a id="tocSsupportedlanguage"></a>
<a id="tocssupportedlanguage"></a>

```json
"en-US"
```

An IETF BCP 47 language code which has been configured for use within this Velo environment.<BR>
See the /v1/supportedLanguages endpoint to list the available codes for an environment.

<h2 id="tocS_TransferRequestV2">TransferRequestV2</h2>
<!-- backwards compatibility -->
<a id="schematransferrequestv2"></a>
<a id="schema_TransferRequestV2"></a>
<a id="tocStransferrequestv2"></a>
<a id="tocstransferrequestv2"></a>

```json
{
  "amount": 800828191,
  "currency": "USD",
  "toSourceAccountId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|integer(int64)|true|none|Amount to transfer, in minor units|
|currency|string|true|none|none|
|toSourceAccountId|string(uuid)|true|none|The 'to' source account id, which will be credited|

<h2 id="tocS_TransferRequestV3">TransferRequestV3</h2>
<!-- backwards compatibility -->
<a id="schematransferrequestv3"></a>
<a id="schema_TransferRequestV3"></a>
<a id="tocStransferrequestv3"></a>
<a id="tocstransferrequestv3"></a>

```json
{
  "amount": 800828191,
  "currency": "USD",
  "toSourceAccountId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|integer(int64)|true|none|Amount to transfer, in minor units|
|currency|string|true|none|Valid ISO 4217 3 letter currency code. See the <a href="https://www.iso.org/iso-4217-currency-codes.html" target="_blank" a>ISO specification</a> for details.|
|toSourceAccountId|string(uuid)|true|none|The 'to' source account id, which will be credited|

<h2 id="tocS_TransmissionTypes">TransmissionTypes</h2>
<!-- backwards compatibility -->
<a id="schematransmissiontypes"></a>
<a id="schema_TransmissionTypes"></a>
<a id="tocStransmissiontypes"></a>
<a id="tocstransmissiontypes"></a>

```json
{
  "ACH": true,
  "SAME_DAY_ACH": true,
  "WIRE": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ACH|boolean|true|none|Whether the Payor is allowed to pay via ACH|
|SAME_DAY_ACH|boolean|true|none|Whether the Payor is allowed to pay via same day ACH|
|WIRE|boolean|true|none|Whether the Payor is allowed to pay via wire|

<h2 id="tocS_TransmissionTypes_2">TransmissionTypes_2</h2>
<!-- backwards compatibility -->
<a id="schematransmissiontypes_2"></a>
<a id="schema_TransmissionTypes_2"></a>
<a id="tocStransmissiontypes_2"></a>
<a id="tocstransmissiontypes_2"></a>

```json
{
  "ACH": true,
  "SAME_DAY_ACH": true,
  "WIRE": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ACH|boolean|true|none|Whether the Payor is allowed to pay via ACH|
|SAME_DAY_ACH|boolean|true|none|Whether the Payor is allowed to pay via same day ACH|
|WIRE|boolean|true|none|Whether the Payor is allowed to pay via wire|

<h2 id="tocS_UnregisterMFARequest">UnregisterMFARequest</h2>
<!-- backwards compatibility -->
<a id="schemaunregistermfarequest"></a>
<a id="schema_UnregisterMFARequest"></a>
<a id="tocSunregistermfarequest"></a>
<a id="tocsunregistermfarequest"></a>

```json
{
  "mfaType": "TOTP",
  "verificationCode": "123456"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mfaType|string|true|none|The type of the MFA device|
|verificationCode|string \| null|false|none|<p>Optional property that MUST be suppied when manually verifying a user</p><br><p>The user's smsNumber is registered via a separate endpoint and an OTP sent to them</p><br>|

#### Enumerated Values

|Property|Value|
|---|---|
|mfaType|YUBIKEY|
|mfaType|TOTP|

<h2 id="tocS_UpdatePayeeDetailsRequestV3">UpdatePayeeDetailsRequestV3</h2>
<!-- backwards compatibility -->
<a id="schemaupdatepayeedetailsrequestv3"></a>
<a id="schema_UpdatePayeeDetailsRequestV3"></a>
<a id="tocSupdatepayeedetailsrequestv3"></a>
<a id="tocsupdatepayeedetailsrequestv3"></a>

```json
{
  "address": {
    "city": "Key West",
    "country": "US",
    "countyOrProvince": "FL",
    "line1": "500 Duval St",
    "line2": "line2",
    "line3": "line3",
    "line4": "line4",
    "zipOrPostcode": "33945"
  },
  "challenge": {
    "description": "challenge description",
    "value": "challenge test"
  },
  "company": {
    "name": "ABC Group Plc",
    "operatingName": "ABC Co",
    "taxId": "123123123"
  },
  "email": "bob@example.com",
  "individual": {
    "dateOfBirth": "1985-01-01",
    "name": {
      "firstName": "Bob",
      "lastName": "Smith",
      "otherNames": "A",
      "title": "Mr"
    },
    "nationalIdentification": "AB123456C"
  },
  "language": "en-US"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|[PayeeAddressV3](#schemapayeeaddressv3)|false|none|none|
|challenge|[ChallengeV3](#schemachallengev3)|false|none|none|
|company|[CompanyV3](#schemacompanyv3)|false|none|none|
|email|string(email) \| null|false|none|none|
|individual|[IndividualV3](#schemaindividualv3)|false|none|none|
|language|string|false|none|An IETF BCP 47 language code which has been configured for use within this Velo environment.<BR><br>See the /v1/supportedLanguages endpoint to list the available codes for an environment.<br>|
|payeeType|[PayeeTypeEnum](#schemapayeetypeenum)|false|none|The type of the payee|

#### Enumerated Values

|Property|Value|
|---|---|
|payeeType|Individual|
|payeeType|Company|

<h2 id="tocS_UpdatePayeeDetailsRequestV4">UpdatePayeeDetailsRequestV4</h2>
<!-- backwards compatibility -->
<a id="schemaupdatepayeedetailsrequestv4"></a>
<a id="schema_UpdatePayeeDetailsRequestV4"></a>
<a id="tocSupdatepayeedetailsrequestv4"></a>
<a id="tocsupdatepayeedetailsrequestv4"></a>

```json
{
  "address": {
    "city": "Key West",
    "country": "US",
    "countyOrProvince": "FL",
    "line1": "500 Duval St",
    "line2": "line2",
    "line3": "line3",
    "line4": "line4",
    "zipOrPostcode": "33945"
  },
  "challenge": {
    "description": "challenge description",
    "value": "11984567"
  },
  "company": {
    "name": "ABC Group Plc",
    "operatingName": "ABC Co",
    "taxId": "123123123"
  },
  "contactSmsNumber": "11235555555",
  "email": "bob@example.com",
  "individual": {
    "dateOfBirth": "1985-01-01",
    "name": {
      "firstName": "Bob",
      "lastName": "Smith",
      "otherNames": "A",
      "title": "Mr"
    },
    "nationalIdentification": "AB123456C"
  },
  "language": "en-US"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|[PayeeAddressV4](#schemapayeeaddressv4)|false|none|none|
|challenge|[ChallengeV4](#schemachallengev4)|false|none|<p>Used to override the default challenge presented to the payee when they onboard</p><br><p>Not used after the payee has onboarded</p><br>|
|company|[CompanyV4](#schemacompanyv4)|false|none|none|
|contactSmsNumber|string|false|none|The phone number of a device that the payee wishes to receive sms messages on<br>|
|email|string(email) \| null|false|none|none|
|individual|[IndividualV4](#schemaindividualv4)|false|none|none|
|language|string|false|none|An IETF BCP 47 language code which has been configured for use within this Velo environment.<BR><br>See the /v1/supportedLanguages endpoint to list the available codes for an environment.<br>|
|payeeType|[PayeeTypeEnum](#schemapayeetypeenum)|false|none|The type of the payee|

#### Enumerated Values

|Property|Value|
|---|---|
|payeeType|Individual|
|payeeType|Company|

<h2 id="tocS_UpdateRemoteIdRequestV3">UpdateRemoteIdRequestV3</h2>
<!-- backwards compatibility -->
<a id="schemaupdateremoteidrequestv3"></a>
<a id="schema_UpdateRemoteIdRequestV3"></a>
<a id="tocSupdateremoteidrequestv3"></a>
<a id="tocsupdateremoteidrequestv3"></a>

```json
{
  "payorId": "9ac75325-5dcd-42d5-b992-175d7e0a035e",
  "remoteId": "remoteId123"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|payorId|string(uuid)|true|none|none|
|remoteId|string|true|none|none|

<h2 id="tocS_UpdateRemoteIdRequestV4">UpdateRemoteIdRequestV4</h2>
<!-- backwards compatibility -->
<a id="schemaupdateremoteidrequestv4"></a>
<a id="schema_UpdateRemoteIdRequestV4"></a>
<a id="tocSupdateremoteidrequestv4"></a>
<a id="tocsupdateremoteidrequestv4"></a>

```json
{
  "payorId": "9ac75325-5dcd-42d5-b992-175d7e0a035e",
  "remoteId": "remoteId123"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|payorId|string(uuid)|true|none|none|
|remoteId|string|true|none|none|

<h2 id="tocS_UpdateWebhookRequest">UpdateWebhookRequest</h2>
<!-- backwards compatibility -->
<a id="schemaupdatewebhookrequest"></a>
<a id="schema_UpdateWebhookRequest"></a>
<a id="tocSupdatewebhookrequest"></a>
<a id="tocsupdatewebhookrequest"></a>

```json
{
  "authorizationHeader": "authorizationHeader",
  "categories": [
    null,
    null
  ],
  "enabled": true,
  "webhookUrl": "webhookUrl"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authorizationHeader|string \| null|false|none|the authorization header to include with the notification.|
|categories|[[Category](#schemacategory)]|false|none|The notification categories to enable.|
|enabled|boolean|false|none|whether the webhook is enabled.|
|webhookUrl|string|false|none|the webhook URL to use.|

#### Enumerated Values

|Property|Value|
|---|---|
|categories|payment|
|categories|payee|
|categories|debit|

<h2 id="tocS_UserDetailsUpdateRequest">UserDetailsUpdateRequest</h2>
<!-- backwards compatibility -->
<a id="schemauserdetailsupdaterequest"></a>
<a id="schema_UserDetailsUpdateRequest"></a>
<a id="tocSuserdetailsupdaterequest"></a>
<a id="tocsuserdetailsupdaterequest"></a>

```json
{
  "email": "foo@example.com",
  "firstName": "John",
  "lastName": "Doe",
  "mfaType": "TOTP",
  "primaryContactNumber": "11235555555",
  "secondaryContactNumber": "11235555550",
  "smsNumber": "11235555555",
  "verificationCode": "123456"
}
```

<p>All properties are optional</p>
<p>Only provided properties will be updated</p>
<p>Use null to null out a property that is allowed to be nullable</p>

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string(email) \| null|false|none|the email address of the user|
|firstName|string \| null|false|none|none|
|lastName|string \| null|false|none|none|
|mfaType|[MFAType](#schemamfatype)|false|none|The type of the MFA device|
|primaryContactNumber|string \| null|false|none|The main contact number for the user<br>|
|secondaryContactNumber|string \| null|false|none|The secondary contact number for the user<br>|
|smsNumber|string \| null|false|none|The phone number of a device that the user can receive sms messages on<br>|
|verificationCode|string \| null|false|none|<p>Optional property that MUST be suppied when manually verifying a user</p><br><p>The user's smsNumber is registered via a separate endpoint and an OTP sent to them</p><br>|

#### Enumerated Values

|Property|Value|
|---|---|
|mfaType|SMS|
|mfaType|YUBIKEY|
|mfaType|TOTP|

<h2 id="tocS_UserInfo">UserInfo</h2>
<!-- backwards compatibility -->
<a id="schemauserinfo"></a>
<a id="schema_UserInfo"></a>
<a id="tocSuserinfo"></a>
<a id="tocsuserinfo"></a>

```json
{
  "mfa_details": {
    "mfa_type": "TOTP",
    "verified": true
  },
  "userType": "PAYOR",
  "user_id": "39976ee5-dc4c-4b21-a966-a04fa71ef9e1"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mfa_details|[MFADetails](#schemamfadetails)|false|none|none|
|userType|[UserType_2](#schemausertype_2)|false|none|none|
|user_id|string(uuid)|false|none|the id of the user|

#### Enumerated Values

|Property|Value|
|---|---|
|userType|BACKOFFICE|
|userType|PAYOR|
|userType|PAYEE|

<h2 id="tocS_UserResponse">UserResponse</h2>
<!-- backwards compatibility -->
<a id="schemauserresponse"></a>
<a id="schema_UserResponse"></a>
<a id="tocSuserresponse"></a>
<a id="tocsuserresponse"></a>

```json
{
  "companyName": "Acme Corp",
  "email": "foo@example.com",
  "entityId": "7fffa261-ac68-49e6-b605-d24a444d9206",
  "firstName": "John",
  "id": "8bbf301c-948f-4445-b411-357eec53e441",
  "lastName": "Doe",
  "lockedOut": true,
  "lockedOutTimestamp": "2000-01-23T04:56:07.000+00:00",
  "mfaStatus": "REGISTERED",
  "mfaType": "TOTP",
  "primaryContactNumber": "11235555555",
  "roles": [
    "payor.admin"
  ],
  "secondaryContactNumber": "11235555550",
  "smsNumber": "11235555555",
  "status": "ENABLED",
  "userType": "PAYOR"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|companyName|string|false|none|The payor or payee company name or null if the user is not a payor or payee user<br>|
|email|string(email)|false|none|the email address of the user|
|entityId|string(uuid)|false|none|The payorId or payeeId or null if the user is not a payor or payee user<br>|
|firstName|string|false|none|none|
|id|string(uuid)|false|none|The id of the user|
|lastName|string|false|none|none|
|lockedOut|boolean|false|none|If true the user is currently locked out and unable to log in|
|lockedOutTimestamp|string(date-time) \| null|false|none|A timestamp showing when the user was locked out<br>If null then the user is not currently locked out<br>|
|mfaStatus|string|false|none|The status of the MFA device|
|mfaType|string|false|none|The type of the MFA device|
|primaryContactNumber|string|false|none|The main contact number for the user<br>|
|roles|[[Role](#schemarole)]|false|none|The role(s) for the user<br>|
|secondaryContactNumber|string|false|none|The secondary contact number for the user<br>|
|smsNumber|string|false|none|The phone number of a device that the user can receive sms messages on<br>|
|status|string|false|none|The status of the user<br>when the user has been invited but not yet enrolled they will have a PENDING status<br>|
|userType|string|false|none|Indicates the type of user. Could be BACKOFFICE, PAYOR or PAYEE.|

#### Enumerated Values

|Property|Value|
|---|---|
|mfaStatus|REGISTERED|
|mfaStatus|UNREGISTERED|
|mfaType|SMS|
|mfaType|YUBIKEY|
|mfaType|TOTP|
|status|ENABLED|
|status|DISABLED|
|status|PENDING|
|userType|BACKOFFICE|
|userType|PAYOR|
|userType|PAYEE|

<h2 id="tocS_UserStatus">UserStatus</h2>
<!-- backwards compatibility -->
<a id="schemauserstatus"></a>
<a id="schema_UserStatus"></a>
<a id="tocSuserstatus"></a>
<a id="tocsuserstatus"></a>

```json
"ENABLED"
```

The status of the user
when the user has been invited but not yet enrolled they will have a PENDING status

<h2 id="tocS_UserType">UserType</h2>
<!-- backwards compatibility -->
<a id="schemausertype"></a>
<a id="schema_UserType"></a>
<a id="tocSusertype"></a>
<a id="tocsusertype"></a>

```json
"PAYOR"
```

<h2 id="tocS_UserType_2">UserType_2</h2>
<!-- backwards compatibility -->
<a id="schemausertype_2"></a>
<a id="schema_UserType_2"></a>
<a id="tocSusertype_2"></a>
<a id="tocsusertype_2"></a>

```json
"PAYOR"
```

<h2 id="tocS_ValidatePasswordResponse">ValidatePasswordResponse</h2>
<!-- backwards compatibility -->
<a id="schemavalidatepasswordresponse"></a>
<a id="schema_ValidatePasswordResponse"></a>
<a id="tocSvalidatepasswordresponse"></a>
<a id="tocsvalidatepasswordresponse"></a>

```json
{
  "score": 2,
  "suggestions": [
    "[password has been used before]",
    "[password has been used before]"
  ],
  "valid": true,
  "warning": "Historic Password"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|score|integer(int32)|false|none|More secure passwords are given a higher score. <P><br>For a password to be acceptable for use in Velo, it must score at least 3<br>|
|suggestions|[string]|false|none|none|
|valid|boolean|false|none|if true then the password can be accepted|
|warning|string|false|none|Any warning message as a reason for the given score.|

<h2 id="tocS_VerificationCode">VerificationCode</h2>
<!-- backwards compatibility -->
<a id="schemaverificationcode"></a>
<a id="schema_VerificationCode"></a>
<a id="tocSverificationcode"></a>
<a id="tocsverificationcode"></a>

```json
"123456"
```

<p>Optional property that MUST be suppied when manually verifying a user</p>
<p>The user's smsNumber is registered via a separate endpoint and an OTP sent to them</p>

<h2 id="tocS_WatchlistStatusV3">WatchlistStatusV3</h2>
<!-- backwards compatibility -->
<a id="schemawatchliststatusv3"></a>
<a id="schema_WatchlistStatusV3"></a>
<a id="tocSwatchliststatusv3"></a>
<a id="tocswatchliststatusv3"></a>

```json
"string"
```

Current watchlist status. One of the following values: NONE, PENDING, REVIEW, PASSED, FAILED

<h2 id="tocS_WatchlistStatusV4">WatchlistStatusV4</h2>
<!-- backwards compatibility -->
<a id="schemawatchliststatusv4"></a>
<a id="schema_WatchlistStatusV4"></a>
<a id="tocSwatchliststatusv4"></a>
<a id="tocswatchliststatusv4"></a>

```json
"string"
```

Current watchlist status. One of the following values: NONE, PENDING, REVIEW, PASSED, FAILED

<h2 id="tocS_WebhookResponse">WebhookResponse</h2>
<!-- backwards compatibility -->
<a id="schemawebhookresponse"></a>
<a id="schema_WebhookResponse"></a>
<a id="tocSwebhookresponse"></a>
<a id="tocswebhookresponse"></a>

```json
{
  "authorizationHeader": "authorizationHeader",
  "categories": [
    null,
    null
  ],
  "enabled": true,
  "id": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "payorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "webhookUrl": "webhookUrl"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authorizationHeader|string|false|none|none|
|categories|[[Category](#schemacategory)]|false|none|none|
|enabled|boolean|false|none|none|
|id|string(uuid)|false|none|none|
|payorId|string(uuid)|false|none|none|
|webhookUrl|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|categories|payment|
|categories|payee|
|categories|debit|

<h2 id="tocS_WebhooksResponse">WebhooksResponse</h2>
<!-- backwards compatibility -->
<a id="schemawebhooksresponse"></a>
<a id="schema_WebhooksResponse"></a>
<a id="tocSwebhooksresponse"></a>
<a id="tocswebhooksresponse"></a>

```json
{
  "content": [
    {
      "authorizationHeader": "authorizationHeader",
      "categories": [
        null,
        null
      ],
      "enabled": true,
      "id": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "payorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "webhookUrl": "webhookUrl"
    },
    {
      "authorizationHeader": "authorizationHeader",
      "categories": [
        null,
        null
      ],
      "enabled": true,
      "id": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "payorId": "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
      "webhookUrl": "webhookUrl"
    }
  ],
  "links": [
    {
      "href": "href",
      "rel": "rel"
    },
    {
      "href": "href",
      "rel": "rel"
    }
  ],
  "page": {
    "numberOfElements": 0,
    "page": 5,
    "pageSize": 5,
    "totalElements": 6,
    "totalPages": 1
  }
}
```

List Webhooks Object

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|[[WebhookResponse](#schemawebhookresponse)]|false|none|none|
|links|[[PagedPayeeResponseV3_links](#schemapagedpayeeresponsev3_links)]|false|none|none|
|page|[PagedPayeeInvitationStatusResponseV3_page](#schemapagedpayeeinvitationstatusresponsev3_page)|false|none|none|

<h2 id="tocS_WithdrawPaymentRequest">WithdrawPaymentRequest</h2>
<!-- backwards compatibility -->
<a id="schemawithdrawpaymentrequest"></a>
<a id="schema_WithdrawPaymentRequest"></a>
<a id="tocSwithdrawpaymentrequest"></a>
<a id="tocswithdrawpaymentrequest"></a>

```json
{
  "reason": "Payment submitted in error"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reason|string|true|none|Reason for withdrawal|

<h2 id="tocS_inline_response_400">inline_response_400</h2>
<!-- backwards compatibility -->
<a id="schemainline_response_400"></a>
<a id="schema_inline_response_400"></a>
<a id="tocSinline_response_400"></a>
<a id="tocsinline_response_400"></a>

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 400
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|correlationId|string(uuid) \| null|false|none|a unique identifier to track a request or related sequence of requests|
|errors|[[Error](#schemaerror)]|false|none|one or more errors|
|httpStatusCode|integer|false|none|this will mirror the Status-Code part of the Status-Line http response header and is included for extra clarity|

<h2 id="tocS_inline_response_401">inline_response_401</h2>
<!-- backwards compatibility -->
<a id="schemainline_response_401"></a>
<a id="schema_inline_response_401"></a>
<a id="tocSinline_response_401"></a>
<a id="tocsinline_response_401"></a>

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 401
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|correlationId|string(uuid) \| null|false|none|a unique identifier to track a request or related sequence of requests|
|errors|[[Error](#schemaerror)]|false|none|one or more errors|
|httpStatusCode|integer|false|none|this will mirror the Status-Code part of the Status-Line http response header and is included for extra clarity|

<h2 id="tocS_inline_response_403">inline_response_403</h2>
<!-- backwards compatibility -->
<a id="schemainline_response_403"></a>
<a id="schema_inline_response_403"></a>
<a id="tocSinline_response_403"></a>
<a id="tocsinline_response_403"></a>

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 403
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|correlationId|string(uuid) \| null|false|none|a unique identifier to track a request or related sequence of requests|
|errors|[[Error](#schemaerror)]|false|none|one or more errors|
|httpStatusCode|integer|false|none|this will mirror the Status-Code part of the Status-Line http response header and is included for extra clarity|

<h2 id="tocS_inline_response_404">inline_response_404</h2>
<!-- backwards compatibility -->
<a id="schemainline_response_404"></a>
<a id="schema_inline_response_404"></a>
<a id="tocSinline_response_404"></a>
<a id="tocsinline_response_404"></a>

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 404
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|correlationId|string(uuid) \| null|false|none|a unique identifier to track a request or related sequence of requests|
|errors|[[Error](#schemaerror)]|false|none|one or more errors|
|httpStatusCode|integer|false|none|this will mirror the Status-Code part of the Status-Line http response header and is included for extra clarity|

<h2 id="tocS_inline_response_409">inline_response_409</h2>
<!-- backwards compatibility -->
<a id="schemainline_response_409"></a>
<a id="schema_inline_response_409"></a>
<a id="tocSinline_response_409"></a>
<a id="tocsinline_response_409"></a>

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 409
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|correlationId|string(uuid) \| null|false|none|a unique identifier to track a request or related sequence of requests|
|errors|[[Error](#schemaerror)]|false|none|one or more errors|
|httpStatusCode|integer|false|none|this will mirror the Status-Code part of the Status-Line http response header and is included for extra clarity|

<h2 id="tocS_inline_response_412">inline_response_412</h2>
<!-- backwards compatibility -->
<a id="schemainline_response_412"></a>
<a id="schema_inline_response_412"></a>
<a id="tocSinline_response_412"></a>
<a id="tocsinline_response_412"></a>

```json
{
  "correlationId": "ee53e01d-c078-43fd-abd4-47e92f4a06cf",
  "errors": [
    {
      "errorCode": "20110003",
      "errorData": {
        "content": {},
        "description": "The rejected CSV rows"
      },
      "errorMessage": "size must be between 0 and 10",
      "localisationDetails": {
        "parameters": {
          "max": "10",
          "min": "0"
        },
        "template": "size must be between {min} and {max}"
      },
      "location": "firstName",
      "locationType": "requestBody",
      "reasonCode": "validationError"
    }
  ],
  "httpStatusCode": 412
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|correlationId|string(uuid) \| null|false|none|a unique identifier to track a request or related sequence of requests|
|errors|[[Error](#schemaerror)]|false|none|one or more errors|
|httpStatusCode|integer|false|none|this will mirror the Status-Code part of the Status-Line http response header and is included for extra clarity|
