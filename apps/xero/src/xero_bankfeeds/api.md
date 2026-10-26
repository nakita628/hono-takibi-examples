<h1 id="xero-bank-feeds-api">Xero Bank Feeds API v19.1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Bank Feeds API is a closed API that is only available to financial institutions that have an established financial services partnership with Xero. If you're an existing financial services partner that wants access, contact your local Partner Manager. If you're a financial institution who wants to provide bank feeds to your business customers, contact us to become a financial services partner.

Base URLs:

* <a href="https://api.xero.com/bankfeeds.xro/1.0">https://api.xero.com/bankfeeds.xro/1.0</a> - Xero Bank Feeds API base url

<a href="https://developer.xero.com/xero-developer-platform-terms-conditions/">Terms of service</a>
Email: <a href="mailto:api@xero.com">Xero Platform Team</a> 
Web: <a href="https://developer.xero.com">Xero Platform Team</a> 
License: <a href="https://github.com/XeroAPI/Xero-OpenAPI/blob/master/LICENSE">MIT</a>

# Authentication

- oAuth2 authentication. For more information visit https://developer.xero.com/documentation/oauth2/overview

    - Flow: authorizationCode
    - Authorization URL = [https://login.xero.com/identity/connect/authorize](https://login.xero.com/identity/connect/authorize)
    - Token URL = [https://identity.xero.com/connect/token](https://identity.xero.com/connect/token)

|Scope|Scope Description|
|---|---|
|email|Grant read-only access to your email|
|openid|Grant read-only access to your open id|
|profile|your profile information|
|bankfeeds|Grant read-write access to bankfeeds|

<h1 id="xero-bank-feeds-api-bankfeeds">BankFeeds</h1>

## Searches for feed connections

<a id="opIdgetFeedConnections"></a>

> Code samples

```bash
curl https://api.xero.com/bankfeeds.xro/1.0/FeedConnections \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string'
```

`GET /FeedConnections`

By passing in the appropriate options, you can search for available feed connections in the system.

<h3 id="searches-for-feed-connections-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer|false|Page number which specifies the set of records to retrieve. By default the number of the records per set is 10. Example - https://api.xero.com/bankfeeds.xro/1.0/FeedConnections?page=1 to get the second set of the records. When page value is not a number or a negative number, by default, the first set of records is returned.|
|pageSize|query|integer|false|Page size which specifies how many records per page will be returned (default 10). Example - https://api.xero.com/bankfeeds.xro/1.0/FeedConnections?pageSize=100 to specify page size of 100.|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|

> Example responses

> 202 Response

```json
{
  "pagination": {
    "page": 1,
    "pageCount": 1,
    "pageSize": 87654321,
    "itemCount": 39
  },
  "items": [
    {
      "id": "c0eb97b5-4f97-465a-8268-276513c14396",
      "accountToken": "foobar31306",
      "accountType": "BANK",
      "accountNumber": "123496842",
      "accountName": "SDK Bank 95921",
      "accountId": "aefbf6be-4285-4ca5-bf39-0f486c8515c7",
      "currency": "GBP",
      "country": "GB"
    },
    {
      "id": "3b44b539-4e39-4d53-9334-d8ba01674752",
      "accountToken": "foobar74770",
      "accountType": "BANK",
      "accountNumber": "123481122",
      "accountName": "SDK Bank 11272",
      "accountId": "fc2f3cc2-126e-40d7-9fc1-12e52d0a71f1",
      "currency": "GBP",
      "country": "GB"
    }
  ]
}
```

<h3 id="searches-for-feed-connections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|search results matching criteria returned with pagination and items array|[FeedConnections](#schemafeedconnections)|
|400|Bad Request|validation error response|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: bankfeeds )
</aside>

## Create one or more new feed connection

<a id="opIdcreateFeedConnections"></a>

> Code samples

```bash
curl https://api.xero.com/bankfeeds.xro/1.0/FeedConnections \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string' \
  -d '{
    "items": [
      {
        "accountToken": "foobar71760",
        "accountNumber": "123458637",
        "accountName": "SDK Bank 90861",
        "accountType": "BANK",
        "currency": "GBP"
      }
    ]
  }'
```

`POST /FeedConnections`

By passing in the FeedConnections array object in the body, you can create one or more new feed connections

> Body parameter

```json
{
  "items": [
    {
      "accountToken": "foobar71760",
      "accountNumber": "123458637",
      "accountName": "SDK Bank 90861",
      "accountType": "BANK",
      "currency": "GBP"
    }
  ]
}
```

<h3 id="create-one-or-more-new-feed-connection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|This allows you to safely retry requests without the risk of duplicate processing. 128 character max.|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|
|body|body|[FeedConnections](#schemafeedconnections)|true|Feed Connection(s) array object in the body|
|» pagination|body|[Pagination](#schemapagination)|false|none|
|» items|body|[[FeedConnection](#schemafeedconnection)]|false|none|

> Example responses

> 202 Response

```json
{
  "items": [
    {
      "id": "2a19d46c-2a92-4e50-9401-dcf2cb895be7",
      "accountToken": "foobar71760",
      "status": "PENDING"
    }
  ]
}
```

> 400 Response

```json
{
  "items": [
    {
      "accountToken": "foobar71760",
      "status": "REJECTED",
      "error": {
        "type": "invalid-request",
        "title": "Invalid Request",
        "status": 400,
        "detail": "For the request field 'AccountNumber' exceeded the maximum length of 40."
      }
    }
  ]
}
```

<h3 id="create-one-or-more-new-feed-connection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|success new feed connection(s)response|[FeedConnections](#schemafeedconnections)|
|400|Bad Request|failed to create new feed connection(s)response|[FeedConnections](#schemafeedconnections)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: bankfeeds )
</aside>

## Retrieve single feed connection based on a unique id provided

<a id="opIdgetFeedConnection"></a>

> Code samples

```bash
curl https://api.xero.com/bankfeeds.xro/1.0/FeedConnections/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string'
```

`GET /FeedConnections/{id}`

By passing in a FeedConnection Id options, you can search for matching feed connections

<h3 id="retrieve-single-feed-connection-based-on-a-unique-id-provided-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|Unique identifier for retrieving single object|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
{
  "id": "b58b685a-1bee-4904-91f1-fee30bb6ea52",
  "accountToken": "foobar84778",
  "accountType": "BANK",
  "accountNumber": "123434859",
  "accountName": "SDK Bank 5517",
  "accountId": "f4c4d595-da94-493b-999a-19d1ae1f508a",
  "currency": "GBP",
  "country": "GB"
}
```

<h3 id="retrieve-single-feed-connection-based-on-a-unique-id-provided-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success returns a FeedConnection object matching the id in response|[FeedConnection](#schemafeedconnection)|
|400|Bad Request|bad input parameter|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: bankfeeds )
</aside>

## Delete an existing feed connection

<a id="opIddeleteFeedConnections"></a>

> Code samples

```bash
curl https://api.xero.com/bankfeeds.xro/1.0/FeedConnections/DeleteRequests \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string' \
  -d '{
    "items": [
      {
        "id": "b4cc693b-24d9-42ec-a6d4-2943d253ff63"
      }
    ]
  }'
```

`POST /FeedConnections/DeleteRequests`

By passing in FeedConnections array object in the body, you can delete a feed connection.

> Body parameter

```json
{
  "items": [
    {
      "id": "b4cc693b-24d9-42ec-a6d4-2943d253ff63"
    }
  ]
}
```

<h3 id="delete-an-existing-feed-connection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|This allows you to safely retry requests without the risk of duplicate processing. 128 character max.|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|
|body|body|[FeedConnections](#schemafeedconnections)|true|Feed Connections array object in the body|
|» pagination|body|[Pagination](#schemapagination)|false|none|
|» items|body|[[FeedConnection](#schemafeedconnection)]|false|none|

> Example responses

> 202 Response

```json
{
  "items": [
    {
      "id": "b4cc693b-24d9-42ec-a6d4-2943d253ff63",
      "status": "PENDING"
    },
    {
      "accountToken": "10000125",
      "status": "REJECTED",
      "error": {
        "type": "feed-connected-in-different-organisation",
        "title": "Feed connected in different organisation",
        "detail": "The AccountToken is connected to another Xero Bank Account associated with this bank. This Xero Bank Account belongs to a different Xero Organisation."
      }
    }
  ]
}
```

<h3 id="delete-an-existing-feed-connection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success response for deleted feed connection|[FeedConnections](#schemafeedconnections)|
|400|Bad Request|bad input parameter|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: bankfeeds )
</aside>

## Retrieve all statements

<a id="opIdgetStatements"></a>

> Code samples

```bash
curl https://api.xero.com/bankfeeds.xro/1.0/Statements \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string'
```

`GET /Statements`

By passing in parameters, you can search for matching statements

<h3 id="retrieve-all-statements-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer(int32)|false|unique id for single object|
|pageSize|query|integer(int32)|false|Page size which specifies how many records per page will be returned (default 10). Example - https://api.xero.com/bankfeeds.xro/1.0/Statements?pageSize=100 to specify page size of 100.|
|Xero-Application-Id|header|string|false|none|
|Xero-User-Id|header|string|false|none|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
{
  "pagination": {
    "page": 1,
    "pageCount": 210,
    "pageSize": 3,
    "itemCount": 3
  },
  "items": [
    {
      "id": "9817e4b8-82b3-4526-91f7-040bd278053f",
      "feedConnectionId": "6a4b9ff5-3a5f-4321-936b-4796163550f6",
      "status": "REJECTED",
      "startDate": "2019-08-01",
      "endDate": "2019-08-15",
      "startBalance": {
        "amount": "100.0000",
        "creditDebitIndicator": "CREDIT"
      },
      "endBalance": {
        "amount": "150.0000",
        "creditDebitIndicator": "CREDIT"
      },
      "statementLineCount": "1",
      "errors": [
        {
          "type": "duplicate-statement",
          "title": "Duplicate Statement Received",
          "status": 409,
          "detail": "The received statement was marked as a duplicate."
        }
      ]
    },
    {
      "id": "2fc57bac-7aa7-4981-a5cd-8aee83fe698c",
      "feedConnectionId": "6a4b9ff5-3a5f-4321-936b-4796163550f6",
      "status": "DELIVERED",
      "startDate": "2019-08-01",
      "endDate": "2019-08-15",
      "startBalance": {
        "amount": "100.0000",
        "creditDebitIndicator": "CREDIT"
      },
      "endBalance": {
        "amount": "150.0000",
        "creditDebitIndicator": "CREDIT"
      },
      "statementLineCount": "1"
    }
  ]
}
```

> 400 Response

```json
{
  "type": "invalid-request",
  "title": "Invalid Request",
  "status": 400,
  "detail": "For the request field missing parameter."
}
```

<h3 id="retrieve-all-statements-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success returns Statements array of objects response|[Statements](#schemastatements)|
|400|Bad Request|bad input parameter|[Statements](#schemastatements)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: bankfeeds )
</aside>

## Creates one or more new statements

<a id="opIdcreateStatements"></a>

> Code samples

```bash
curl https://api.xero.com/bankfeeds.xro/1.0/Statements \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string' \
  -d '{
    "items": [
      {
        "feedConnectionId": "6a4b9ff5-3a5f-4321-936b-4796163550f6",
        "startDate": "2019-08-11",
        "endDate": "2019-08-11",
        "startBalance": {
          "amount": "100",
          "creditDebitIndicator": "CREDIT"
        },
        "endBalance": {
          "amount": "150",
          "creditDebitIndicator": "CREDIT"
        },
        "statementLines": [
          {
            "postedDate": "2019-08-11",
            "description": "My new line",
            "amount": "50",
            "creditDebitIndicator": "CREDIT",
            "transactionId": "123446422",
            "payeeName": "StarLord90315",
            "reference": "Foobar95578",
            "chequeNumber": "12379009",
            "transactionType": "Refund"
          }
        ]
      },
      {
        "feedConnectionId": "2ebe6393-f3bb-48ab-9a0e-b04fa8585a70",
        "startDate": "2019-08-11",
        "endDate": "2019-08-11",
        "startBalance": {
          "amount": "100",
          "creditDebitIndicator": "CREDIT"
        },
        "endBalance": {
          "amount": "150",
          "creditDebitIndicator": "CREDIT"
        },
        "statementLines": [
          {
            "postedDate": "2019-08-11",
            "description": "My new line",
            "amount": "50",
            "creditDebitIndicator": "CREDIT",
            "transactionId": "123449402",
            "payeeName": "StarLord56705",
            "reference": "Foobar67355",
            "chequeNumber": "12379350",
            "transactionType": "Currency Conversion Fee"
          }
        ]
      }
    ]
  }'
```

`POST /Statements`

> Body parameter

```json
{
  "items": [
    {
      "feedConnectionId": "6a4b9ff5-3a5f-4321-936b-4796163550f6",
      "startDate": "2019-08-11",
      "endDate": "2019-08-11",
      "startBalance": {
        "amount": "100",
        "creditDebitIndicator": "CREDIT"
      },
      "endBalance": {
        "amount": "150",
        "creditDebitIndicator": "CREDIT"
      },
      "statementLines": [
        {
          "postedDate": "2019-08-11",
          "description": "My new line",
          "amount": "50",
          "creditDebitIndicator": "CREDIT",
          "transactionId": "123446422",
          "payeeName": "StarLord90315",
          "reference": "Foobar95578",
          "chequeNumber": "12379009",
          "transactionType": "Refund"
        }
      ]
    },
    {
      "feedConnectionId": "2ebe6393-f3bb-48ab-9a0e-b04fa8585a70",
      "startDate": "2019-08-11",
      "endDate": "2019-08-11",
      "startBalance": {
        "amount": "100",
        "creditDebitIndicator": "CREDIT"
      },
      "endBalance": {
        "amount": "150",
        "creditDebitIndicator": "CREDIT"
      },
      "statementLines": [
        {
          "postedDate": "2019-08-11",
          "description": "My new line",
          "amount": "50",
          "creditDebitIndicator": "CREDIT",
          "transactionId": "123449402",
          "payeeName": "StarLord56705",
          "reference": "Foobar67355",
          "chequeNumber": "12379350",
          "transactionType": "Currency Conversion Fee"
        }
      ]
    }
  ]
}
```

<h3 id="creates-one-or-more-new-statements-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Idempotency-Key|header|string|false|This allows you to safely retry requests without the risk of duplicate processing. 128 character max.|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|
|body|body|[Statements](#schemastatements)|true|Statements array of objects in the body|
|» pagination|body|[Pagination](#schemapagination)|false|none|
|» items|body|[[Statement](#schemastatement)]|false|none|

> Example responses

> 202 Response

```json
{
  "items": [
    {
      "id": "d69b02b7-a30c-464a-99cf-ba9770373c61",
      "feedConnectionId": "6a4b9ff5-3a5f-4321-936b-4796163550f6",
      "status": "PENDING"
    },
    {
      "id": "598f255c-015b-4138-93df-2e06c64565b3",
      "feedConnectionId": "2ebe6393-f3bb-48ab-9a0e-b04fa8585a70",
      "status": "PENDING"
    }
  ]
}
```

> 400 Response

```json
{
  "type": "invalid-request",
  "title": "Invalid Request",
  "status": 400,
  "detail": "For the request field 'StatementLine.ChequeNumber' exceeded the maximum length of 20."
}
```

> 403 Response

```json
{
  "type": "invalid-application",
  "title": "Invalid Application",
  "status": 403,
  "detail": "The application has not been configured to use these API endpoints."
}
```

> 409 Response

```json
{
  "items": [
    {
      "id": "29fefeb6-f449-470d-9179-f1d8900930d6",
      "feedConnectionId": "6a4b9ff5-3a5f-4321-936b-4796163550f6",
      "status": "REJECTED",
      "errors": [
        {
          "type": "duplicate-statement",
          "title": "Duplicate Statement Received",
          "status": 409,
          "detail": "The received statement was marked as a duplicate."
        }
      ]
    }
  ]
}
```

> 413 Response

```json
{
  "type": "invalid-request",
  "title": "Request too large",
  "status": 413,
  "detail": "Request size of 3500000 bytes exceeds the limit of 3000000 bytes."
}
```

> 422 Response

```json
{
  "type": "invalid-end-balance",
  "title": "Invalid End Balance",
  "status": 422,
  "detail": "End balance does not match start balance +/- statement line amounts."
}
```

> 500 Response

```json
{
  "type": "internal-error",
  "title": "Intermittent Internal Xero Error",
  "status": 500,
  "detail": "The request should be retried. If the error persists, a Xero support issue should be raised."
}
```

<h3 id="creates-one-or-more-new-statements-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Success returns Statements array of objects in response|[Statements](#schemastatements)|
|400|Bad Request|Statement failed validation|[Statements](#schemastatements)|
|403|Forbidden|Invalid application or feed connection|[Error](#schemaerror)|
|409|Conflict|Duplicate statement received|[Statements](#schemastatements)|
|413|Payload Too Large|Statement exceeds size limit|[Statements](#schemastatements)|
|422|Unprocessable Entity|Unprocessable Entity|[Statements](#schemastatements)|
|500|Internal Server Error|Intermittent Xero Error|[Statements](#schemastatements)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: bankfeeds )
</aside>

## Retrieve single statement based on unique id provided

<a id="opIdgetStatement"></a>

> Code samples

```bash
curl https://api.xero.com/bankfeeds.xro/1.0/Statements/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: string'
```

`GET /Statements/{statementId}`

By passing in a statement id, you can search for matching statements

<h3 id="retrieve-single-statement-based-on-unique-id-provided-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|statementId|path|string(uuid)|true|statement id for single object|
|Xero-Tenant-Id|header|string|true|Xero identifier for Tenant|

> Example responses

> 200 Response

```json
{
  "id": "97aca24a-dd10-4cda-98c7-1084a048257b",
  "feedConnectionId": "6a4b9ff5-3a5f-4321-936b-4796163550f6",
  "status": "DELIVERED",
  "startDate": "2019-08-11",
  "endDate": "2019-10-11",
  "startBalance": {
    "amount": "100.0000",
    "creditDebitIndicator": "CREDIT"
  },
  "endBalance": {
    "amount": "150.0000",
    "creditDebitIndicator": "CREDIT"
  },
  "statementLineCount": "1"
}
```

<h3 id="retrieve-single-statement-based-on-unique-id-provided-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|search results matching id for single statement|[Statement](#schemastatement)|
|404|Not Found|Statement not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: bankfeeds )
</aside>

# Schemas

<h2 id="tocS_FeedConnections">FeedConnections</h2>
<!-- backwards compatibility -->
<a id="schemafeedconnections"></a>
<a id="schema_FeedConnections"></a>
<a id="tocSfeedconnections"></a>
<a id="tocsfeedconnections"></a>

```json
{
  "pagination": {
    "page": 1,
    "pageSize": 10,
    "pageCount": 1,
    "itemCount": 2
  },
  "items": [
    {
      "id": "0d3cf8d-95dc-4466-8dc0-47e6d1197e28",
      "accountToken": "10000123",
      "accountNumber": "3809087654321500",
      "accountName": "Joe's Savings Account",
      "accountId": "079a88ea-276d-41fb-a1f1-366ef3e22921",
      "accountType": "BANK",
      "currency": "AUD",
      "country": "GB",
      "status": "REJECTED",
      "error": {
        "title": "Invalid Application",
        "status": 403,
        "detail": "The application has not been configured to use these API endpoints.",
        "type": "invalid-application"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pagination|[Pagination](#schemapagination)|false|none|none|
|items|[[FeedConnection](#schemafeedconnection)]|false|none|none|

<h2 id="tocS_FeedConnection">FeedConnection</h2>
<!-- backwards compatibility -->
<a id="schemafeedconnection"></a>
<a id="schema_FeedConnection"></a>
<a id="tocSfeedconnection"></a>
<a id="tocsfeedconnection"></a>

```json
{
  "id": "0d3cf8d-95dc-4466-8dc0-47e6d1197e28",
  "accountToken": "10000123",
  "accountNumber": "3809087654321500",
  "accountName": "Joe's Savings Account",
  "accountId": "079a88ea-276d-41fb-a1f1-366ef3e22921",
  "accountType": "BANK",
  "currency": "AUD",
  "country": "GB",
  "status": "REJECTED",
  "error": {
    "title": "Invalid Application",
    "status": 403,
    "detail": "The application has not been configured to use these API endpoints.",
    "type": "invalid-application"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|GUID used to identify the Account.|
|accountToken|string|false|none|This account identifier is generated by the financial institute (FI). This must be unique for your financial institute.|
|accountNumber|string|false|none|String(40) when AccountType is BANK String(4) when AccountType is CREDITCARD The Account Number is used to match the feed to a Xero Bank Account. The API will create a new Xero Bank Account if a match to an existing Xero Bank Account is not found. Only the last 4 digits must be supplied for Credit Card numbers. Must be included if AccountId is not specified.|
|accountName|string|false|none|The Account Name will be used for the creation of a new Xero Bank Account if a matching Xero Bank Account is not found.|
|accountId|string(uuid)|false|none|Xero identifier for a bank account in Xero. Must be included if AccountNumber is not specified.|
|accountType|string|false|none|High level bank account type - BANK CREDITCARD BANK encompasses all bank account types other than credit cards.|
|currency|[CurrencyCode](#schemacurrencycode)|false|none|3 letter alpha code for the ISO-4217 currency code, e.g. USD, AUD.|
|country|[CountryCode](#schemacountrycode)|false|none|ISO-3166 alpha-2 country code, e.g. US, AU This element is required only when the Application supports multi-region. Talk to your Partner Manager to confirm if this is the case.|
|status|string|false|none|the current status of the feed connection|
|error|[Error](#schemaerror)|false|none|On error, the API consumer will receive an HTTP response with a HTTP Status Code of 4xx or 5xx and a Content-Type of application/problem+json.|

#### Enumerated Values

|Property|Value|
|---|---|
|accountType|BANK|
|accountType|CREDITCARD|
|currency|AED|
|currency|AFN|
|currency|ALL|
|currency|AMD|
|currency|ANG|
|currency|AOA|
|currency|ARS|
|currency|AUD|
|currency|AWG|
|currency|AZN|
|currency|BAM|
|currency|BBD|
|currency|BDT|
|currency|BGN|
|currency|BHD|
|currency|BIF|
|currency|BMD|
|currency|BND|
|currency|BOB|
|currency|BRL|
|currency|BSD|
|currency|BTN|
|currency|BWP|
|currency|BYN|
|currency|BZD|
|currency|CAD|
|currency|CDF|
|currency|CHF|
|currency|CLP|
|currency|CNY|
|currency|COP|
|currency|CRC|
|currency|CUC|
|currency|CUP|
|currency|CVE|
|currency|CZK|
|currency|DJF|
|currency|DKK|
|currency|DOP|
|currency|DZD|
|currency|EGP|
|currency|ERN|
|currency|ETB|
|currency|EUR|
|currency|FJD|
|currency|FKP|
|currency|GBP|
|currency|GEL|
|currency|GGP|
|currency|GHS|
|currency|GIP|
|currency|GMD|
|currency|GNF|
|currency|GTQ|
|currency|GYD|
|currency|HKD|
|currency|HNL|
|currency|HRK|
|currency|HTG|
|currency|HUF|
|currency|IDR|
|currency|ILS|
|currency|IMP|
|currency|INR|
|currency|IQD|
|currency|IRR|
|currency|ISK|
|currency|JEP|
|currency|JMD|
|currency|JOD|
|currency|JPY|
|currency|KES|
|currency|KGS|
|currency|KHR|
|currency|KMF|
|currency|KPW|
|currency|KRW|
|currency|KWD|
|currency|KYD|
|currency|KZT|
|currency|LAK|
|currency|LBP|
|currency|LKR|
|currency|LRD|
|currency|LSL|
|currency|LYD|
|currency|MAD|
|currency|MDL|
|currency|MGA|
|currency|MKD|
|currency|MMK|
|currency|MNT|
|currency|MOP|
|currency|MRU|
|currency|MUR|
|currency|MVR|
|currency|MWK|
|currency|MXN|
|currency|MYR|
|currency|MZN|
|currency|NAD|
|currency|NGN|
|currency|NIO|
|currency|NOK|
|currency|NPR|
|currency|NZD|
|currency|OMR|
|currency|PAB|
|currency|PEN|
|currency|PGK|
|currency|PHP|
|currency|PKR|
|currency|PLN|
|currency|PYG|
|currency|QAR|
|currency|RON|
|currency|RSD|
|currency|RUB|
|currency|RWF|
|currency|SAR|
|currency|SBD|
|currency|SCR|
|currency|SDG|
|currency|SEK|
|currency|SGD|
|currency|SHP|
|currency|SLL|
|currency|SOS|
|currency|SPL|
|currency|SRD|
|currency|STN|
|currency|SVC|
|currency|SYP|
|currency|SZL|
|currency|THB|
|currency|TJS|
|currency|TMT|
|currency|TND|
|currency|TOP|
|currency|TRY|
|currency|TTD|
|currency|TVD|
|currency|TWD|
|currency|TZS|
|currency|UAH|
|currency|UGX|
|currency|USD|
|currency|UYU|
|currency|UZS|
|currency|VEF|
|currency|VND|
|currency|VUV|
|currency|WST|
|currency|XAF|
|currency|XCD|
|currency|XDR|
|currency|XOF|
|currency|XPF|
|currency|YER|
|currency|ZAR|
|currency|ZMW|
|currency|ZMK|
|currency|ZWD|
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
|country|BL|
|country|BM|
|country|BN|
|country|BO|
|country|BR|
|country|BS|
|country|BT|
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
|country|CU|
|country|CV|
|country|CW|
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
|country|GG|
|country|GH|
|country|GI|
|country|GL|
|country|GM|
|country|GN|
|country|GQ|
|country|GR|
|country|GT|
|country|GU|
|country|GW|
|country|GY|
|country|HK|
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
|country|IR|
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
|country|KP|
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
|country|MF|
|country|MG|
|country|MH|
|country|MK|
|country|ML|
|country|MM|
|country|MN|
|country|MO|
|country|MP|
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
|country|SD|
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
|country|SS|
|country|ST|
|country|SV|
|country|SX|
|country|SY|
|country|SZ|
|country|TC|
|country|TD|
|country|TG|
|country|TH|
|country|TJ|
|country|TK|
|country|TL|
|country|TM|
|country|TN|
|country|TO|
|country|TR|
|country|TT|
|country|TV|
|country|TW|
|country|TZ|
|country|UA|
|country|UG|
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
|country|XK|
|country|YE|
|country|YT|
|country|ZA|
|country|ZM|
|country|ZW|
|status|PENDING|
|status|REJECTED|

<h2 id="tocS_Statements">Statements</h2>
<!-- backwards compatibility -->
<a id="schemastatements"></a>
<a id="schema_Statements"></a>
<a id="tocSstatements"></a>
<a id="tocsstatements"></a>

```json
{
  "pagination": {
    "page": 1,
    "pageSize": 10,
    "pageCount": 1,
    "itemCount": 2
  },
  "items": [
    {
      "id": "ba4f3127-5e46-427d-80ea-dea2fcd26afe",
      "feedConnectionId": "87cb0dc8-fa32-409c-b622-19f8de8dcc83",
      "status": "PENDING",
      "startDate": "2018-07-27",
      "endDate": "2018-07-27",
      "startBalance": {
        "amount": "9.0000",
        "creditDebitIndicator": "CREDIT"
      },
      "endBalance": {
        "amount": "10.1340",
        "creditDebitIndicator": "CREDIT"
      },
      "statementLines": [
        {
          "postedDate": "2018-06-10",
          "description": "Description for statement line 2",
          "amount": "5.00",
          "creditDebitIndicator": "CREDIT",
          "transactionId": "transaction-id-2",
          "payeeName": "Payee name for statement line 2",
          "reference": "Reference for statement line 2",
          "chequeNumber": "021",
          "transactionType": "Refund"
        }
      ],
      "errors": [
        {
          "title": "Invalid Application",
          "status": 403,
          "detail": "The application has not been configured to use these API endpoints.",
          "type": "invalid-application"
        }
      ],
      "statementLineCount": 1
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pagination|[Pagination](#schemapagination)|false|none|none|
|items|[[Statement](#schemastatement)]|false|none|none|

<h2 id="tocS_Pagination">Pagination</h2>
<!-- backwards compatibility -->
<a id="schemapagination"></a>
<a id="schema_Pagination"></a>
<a id="tocSpagination"></a>
<a id="tocspagination"></a>

```json
{
  "page": 1,
  "pageSize": 10,
  "pageCount": 1,
  "itemCount": 2
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|page|integer|false|none|Page number which specifies the set of records to retrieve. Example - https://api.xero.com/bankfeeds.xro/1.0/Statements?page=2 to get the second set of the records. When page value is not a number or a negative number, by default, the first set of records is returned.|
|pageSize|integer|false|none|Page size which specifies how many records per page will be returned (default 50). Example - https://api.xero.com/bankfeeds.xro/1.0/Statements?pageSize=100 to specify page size of 100.|
|pageCount|integer|false|none|Number of pages available|
|itemCount|integer|false|none|Number of items returned|

<h2 id="tocS_Statement">Statement</h2>
<!-- backwards compatibility -->
<a id="schemastatement"></a>
<a id="schema_Statement"></a>
<a id="tocSstatement"></a>
<a id="tocsstatement"></a>

```json
{
  "id": "ba4f3127-5e46-427d-80ea-dea2fcd26afe",
  "feedConnectionId": "87cb0dc8-fa32-409c-b622-19f8de8dcc83",
  "status": "PENDING",
  "startDate": "2018-07-27",
  "endDate": "2018-07-27",
  "startBalance": {
    "amount": "9.0000",
    "creditDebitIndicator": "CREDIT"
  },
  "endBalance": {
    "amount": "10.1340",
    "creditDebitIndicator": "CREDIT"
  },
  "statementLines": [
    {
      "postedDate": "2018-06-10",
      "description": "Description for statement line 2",
      "amount": "5.00",
      "creditDebitIndicator": "CREDIT",
      "transactionId": "transaction-id-2",
      "payeeName": "Payee name for statement line 2",
      "reference": "Reference for statement line 2",
      "chequeNumber": "021",
      "transactionType": "Refund"
    }
  ],
  "errors": [
    {
      "title": "Invalid Application",
      "status": 403,
      "detail": "The application has not been configured to use these API endpoints.",
      "type": "invalid-application"
    }
  ],
  "statementLineCount": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|false|none|GUID used to identify the Statement.|
|feedConnectionId|string(uuid)|false|none|The Xero generated feed connection Id that identifies the Xero Bank Account Container into which the statement should be delivered. This is obtained by calling GET FeedConnections.|
|status|string|false|none|Current status of statements|
|startDate|string(date)|false|none|Opening balance date (can be no older than one year from the current date) ISO-8601 YYYY-MM-DD|
|endDate|string(date)|false|none|Closing balance date ISO-8601 YYYY-MM-DD|
|startBalance|[StartBalance](#schemastartbalance)|false|none|The starting balance of the statement|
|endBalance|[EndBalance](#schemaendbalance)|false|none|The StartBalance plus all the Statement Line Amounts should be equal to the EndBalance Amount.|
|statementLines|[StatementLines](#schemastatementlines)|false|none|none|
|errors|[[Error](#schemaerror)]|false|none|none|
|statementLineCount|integer|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|PENDING|
|status|REJECTED|
|status|DELIVERED|

<h2 id="tocS_StartBalance">StartBalance</h2>
<!-- backwards compatibility -->
<a id="schemastartbalance"></a>
<a id="schema_StartBalance"></a>
<a id="tocSstartbalance"></a>
<a id="tocsstartbalance"></a>

```json
{
  "amount": "9.0000",
  "creditDebitIndicator": "CREDIT"
}
```

The starting balance of the statement

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|number(double)|false|none|decimal(19,4) unsigned Opening/closing balance amount.|
|creditDebitIndicator|[CreditDebitIndicator](#schemacreditdebitindicator)|false|none|If the statement balances are credit or debit, the CreditDebitIndicator should be specified from the perspective of the Customer.|

#### Enumerated Values

|Property|Value|
|---|---|
|creditDebitIndicator|CREDIT|
|creditDebitIndicator|DEBIT|

<h2 id="tocS_EndBalance">EndBalance</h2>
<!-- backwards compatibility -->
<a id="schemaendbalance"></a>
<a id="schema_EndBalance"></a>
<a id="tocSendbalance"></a>
<a id="tocsendbalance"></a>

```json
{
  "amount": "10.1340",
  "creditDebitIndicator": "CREDIT"
}
```

The StartBalance plus all the Statement Line Amounts should be equal to the EndBalance Amount.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|number(double)|false|none|none|
|creditDebitIndicator|[CreditDebitIndicator](#schemacreditdebitindicator)|false|none|If the statement balances are credit or debit, the CreditDebitIndicator should be specified from the perspective of the Customer.|

#### Enumerated Values

|Property|Value|
|---|---|
|creditDebitIndicator|CREDIT|
|creditDebitIndicator|DEBIT|

<h2 id="tocS_StatementLines">StatementLines</h2>
<!-- backwards compatibility -->
<a id="schemastatementlines"></a>
<a id="schema_StatementLines"></a>
<a id="tocSstatementlines"></a>
<a id="tocsstatementlines"></a>

```json
[
  {
    "postedDate": "2018-06-10",
    "description": "Description for statement line 2",
    "amount": "5.00",
    "creditDebitIndicator": "CREDIT",
    "transactionId": "transaction-id-2",
    "payeeName": "Payee name for statement line 2",
    "reference": "Reference for statement line 2",
    "chequeNumber": "021",
    "transactionType": "Refund"
  }
]
```

<h2 id="tocS_StatementLine">StatementLine</h2>
<!-- backwards compatibility -->
<a id="schemastatementline"></a>
<a id="schema_StatementLine"></a>
<a id="tocSstatementline"></a>
<a id="tocsstatementline"></a>

```json
{
  "postedDate": "2018-06-10",
  "description": "Description for statement line 2",
  "amount": "5.00",
  "creditDebitIndicator": "CREDIT",
  "transactionId": "transaction-id-2",
  "payeeName": "Payee name for statement line 2",
  "reference": "Reference for statement line 2",
  "chequeNumber": "021",
  "transactionType": "Refund"
}
```

the lines details for a statement

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|postedDate|string(date)|false|none|The date that the transaction was processed or cleared as seen in internet banking ISO-8601 YYYY-MM-DD|
|description|string|false|none|Transaction description|
|amount|number(double)|false|none|Transaction amount|
|creditDebitIndicator|[CreditDebitIndicator](#schemacreditdebitindicator)|false|none|If the statement balances are credit or debit, the CreditDebitIndicator should be specified from the perspective of the Customer.|
|transactionId|string|false|none|Financial institute's internal transaction identifier. If provided this field is factored into duplicate detection.|
|payeeName|string|false|none|Typically the merchant or payee name|
|reference|string|false|none|Optional field to enhance the Description|
|chequeNumber|string|false|none|The cheque/check number|
|transactionType|string|false|none|Descriptive transaction type|

#### Enumerated Values

|Property|Value|
|---|---|
|creditDebitIndicator|CREDIT|
|creditDebitIndicator|DEBIT|

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "title": "Invalid Application",
  "status": 403,
  "detail": "The application has not been configured to use these API endpoints.",
  "type": "invalid-application"
}
```

On error, the API consumer will receive an HTTP response with a HTTP Status Code of 4xx or 5xx and a Content-Type of application/problem+json.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|title|string|false|none|Human readable high level error description.|
|status|integer|false|none|The numeric HTTP Status Code, e.g. 404|
|detail|string|false|none|Human readable detailed error description.|
|type|string|false|none|Identifies the type of error.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|invalid-request|
|type|invalid-application|
|type|invalid-feed-connection|
|type|duplicate-statement|
|type|invalid-end-balance|
|type|invalid-start-and-end-date|
|type|invalid-start-date|
|type|internal-error|
|type|feed-already-connected-in-current-organisation|
|type|invalid-end-date|
|type|statement-not-found|
|type|feed-connected-in-different-organisation|
|type|feed-already-connected-in-different-organisation|
|type|bank-feed-not-found|
|type|invalid-country-specified|
|type|invalid-organisation-bank-feeds|
|type|invalid-organisation-multi-currency|
|type|invalid-feed-connection-for-organisation|
|type|invalid-user-role|
|type|account-not-valid|
|type|feed-not-found-or-already-deleted|

<h2 id="tocS_CreditDebitIndicator">CreditDebitIndicator</h2>
<!-- backwards compatibility -->
<a id="schemacreditdebitindicator"></a>
<a id="schema_CreditDebitIndicator"></a>
<a id="tocScreditdebitindicator"></a>
<a id="tocscreditdebitindicator"></a>

```json
"CREDIT"
```

If the statement balances are credit or debit, the CreditDebitIndicator should be specified from the perspective of the Customer.

<h2 id="tocS_CurrencyCode">CurrencyCode</h2>
<!-- backwards compatibility -->
<a id="schemacurrencycode"></a>
<a id="schema_CurrencyCode"></a>
<a id="tocScurrencycode"></a>
<a id="tocscurrencycode"></a>

```json
"AUD"
```

3 letter alpha code for the ISO-4217 currency code, e.g. USD, AUD.

<h2 id="tocS_CountryCode">CountryCode</h2>
<!-- backwards compatibility -->
<a id="schemacountrycode"></a>
<a id="schema_CountryCode"></a>
<a id="tocScountrycode"></a>
<a id="tocscountrycode"></a>

```json
"GB"
```

ISO-3166 alpha-2 country code, e.g. US, AU This element is required only when the Application supports multi-region. Talk to your Partner Manager to confirm if this is the case.
