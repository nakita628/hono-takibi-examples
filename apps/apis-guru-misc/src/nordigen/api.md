<h1 id="nordigen-account-information-services-api">Nordigen Account Information Services API v2.0 (v2)</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://ob.nordigen.com">https://ob.nordigen.com</a>

# Authentication

- HTTP Authentication, scheme: bearer

<h1 id="nordigen-account-information-services-api-premium">premium</h1>

## retrieve account transactions v2

<a id="opIdretrieve account transactions v2"></a>

> Code samples

```bash
curl https://example.com/api/v2/accounts/premium/497f6eca-6276-4993-bfeb-53cbbbba6f08/transactions/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v2/accounts/premium/{id}/transactions/`

Access account premium transactions.

<h3 id="retrieve-account-transactions-v2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|country|query|string|false|ISO 3166 two-character country code|
|date_from|query|string(date)|false|none|
|date_to|query|string(date)|false|none|
|id|path|string(uuid)|true|none|

> Example responses

> 400 Response

```json
{
  "detail": "Starting date '2023-03-13' is greater than end date '2023-03-03'. When specifying date range, starting date must precede the end date",
  "status_code": 400,
  "summary": "Incorrect date range"
}
```

> 401 Response

```json
{
  "detail": "Access has expired or it has been revoked. To restore access reconnect the account.",
  "status_code": 401,
  "summary": "Couldn't update account transactions",
  "type": "AccessExpiredError"
}
```

> 403 Response

```json
{
  "detail": "Access to account is forbidden. The user might not have the necessary permissions.",
  "status_code": 403,
  "summary": "Couldn't update account transactions",
  "type": "AccountAccessForbidden"
}
```

> 404 Response

```json
{
  "detail": "Please check whether you specified a valid Account ID",
  "status_code": 404,
  "summary": "Account ID $ACC_ID not found"
}
```

> 409 Response

```json
{
  "aspsp_identifier": "string",
  "created": "2023-03-03 17:05:05.270281+00:00",
  "iban": "string",
  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "last_accessed": "2023-03-03 17:05:05.270299+00:00",
  "status": "ERROR"
}
```

> 429 Response

```json
{
  "detail": "Daily request limit set by the Institution has been exceeded.",
  "status_code": 429,
  "summary": "Couldn't update account transactions",
  "type": "RateLimitError"
}
```

> 500 Response

```json
{
  "detail": "Request to Institution returned an error",
  "status_code": 500,
  "summary": "Couldn't update account transactions",
  "type": "UnknownRequestError"
}
```

> 503 Response

```json
{
  "detail": "Couldn't connect to Institution",
  "status_code": 503,
  "summary": "Couldn't update account transactions",
  "type": "ConnectionError"
}
```

<h3 id="retrieve-account-transactions-v2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|No response body|None|
|400|Bad Request||Inline|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found||Inline|
|409|Conflict||Inline|
|429|Too Many Requests||Inline|
|500|Internal Server Error||Inline|
|503|Service Unavailable||Inline|

<h3 id="retrieve-account-transactions-v2-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

Status Code **409**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

Status Code **503**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

<h1 id="nordigen-account-information-services-api-accounts">accounts</h1>

## retrieve account metadata

<a id="opIdretrieve account metadata"></a>

> Code samples

```bash
curl https://example.com/api/v2/accounts/497f6eca-6276-4993-bfeb-53cbbbba6f08/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v2/accounts/{id}/`

Access account metadata.

Information about the account record, such as the processing status and IBAN.

Account status is recalculated based on the error count in the latest req.

<h3 id="retrieve-account-metadata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "created": "1970-01-01T00:00:00Z",
  "iban": "string",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "institution_id": "string",
  "last_accessed": "1970-01-01T00:00:00Z",
  "owner_name": "string",
  "status": {}
}
```

> 401 Response

```json
{
  "detail": "Token is invalid or expired",
  "status_code": 401,
  "summary": "Invalid token"
}
```

> 403 Response

```json
{
  "detail": "Your IP $IP_ADDRESS isn't whitelisted to perform this action",
  "status_code": 403,
  "summary": "IP address access denied"
}
```

> 404 Response

```json
{
  "detail": "Please check whether you specified a valid Account ID",
  "status_code": 404,
  "summary": "Account ID $ACC_ID not found"
}
```

<h3 id="retrieve-account-metadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|sample account metadata|[AccountV2](#schemaaccountv2)|
|401|Unauthorized||Inline|
|403|Forbidden||Inline|
|404|Not Found|Account not found|Inline|

<h3 id="retrieve-account-metadata-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## accounts_balances_retrieve

<a id="opIdaccounts_balances_retrieve"></a>

> Code samples

```bash
curl https://example.com/api/v2/accounts/497f6eca-6276-4993-bfeb-53cbbbba6f08/balances/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v2/accounts/{id}/balances/`

Access account balances.

Balances will be returned in Berlin Group PSD2 format.

<h3 id="accountsbalancesretrieve-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

> Example responses

> 400 Response

```json
{
  "detail": "Starting date '2023-03-13' is greater than end date '2023-03-03'. When specifying date range, starting date must precede the end date",
  "status_code": 400,
  "summary": "Incorrect date range"
}
```

> 401 Response

```json
{
  "detail": "Access has expired or it has been revoked. To restore access reconnect the account.",
  "status_code": 401,
  "summary": "Couldn't update account balances",
  "type": "AccessExpiredError"
}
```

> 403 Response

```json
{
  "detail": "Access to account is forbidden. The user might not have the necessary permissions.",
  "status_code": 403,
  "summary": "Couldn't update account balances",
  "type": "AccountAccessForbidden"
}
```

> 404 Response

```json
{
  "detail": "Please check whether you specified a valid Account ID",
  "status_code": 404,
  "summary": "Account ID $ACC_ID not found"
}
```

> 409 Response

```json
{
  "aspsp_identifier": "string",
  "created": "2023-03-03 17:05:05.270281+00:00",
  "iban": "string",
  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "last_accessed": "2023-03-03 17:05:05.270299+00:00",
  "status": "ERROR"
}
```

> 429 Response

```json
{
  "detail": "Daily request limit set by the Institution has been exceeded.",
  "status_code": 429,
  "summary": "Couldn't update account balances",
  "type": "RateLimitError"
}
```

> 500 Response

```json
{
  "detail": "Request to Institution returned an error",
  "status_code": 500,
  "summary": "Couldn't update account balances",
  "type": "UnknownRequestError"
}
```

> 503 Response

```json
{
  "detail": "Couldn't connect to Institution",
  "status_code": 503,
  "summary": "Couldn't update account balances",
  "type": "ConnectionError"
}
```

<h3 id="accountsbalancesretrieve-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|Bad Request|Date range error|Inline|
|401|Unauthorized|Failed Authentication|Inline|
|403|Forbidden|Account Access Forbidden|Inline|
|404|Not Found|Account not found error|Inline|
|409|Conflict|Account state error|Inline|
|429|Too Many Requests|Rate Limit Error|Inline|
|500|Internal Server Error|Unknown Request Error|Inline|
|503|Service Unavailable|Connection Error|Inline|

<h3 id="accountsbalancesretrieve-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

Status Code **409**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

Status Code **503**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## accounts_details_retrieve

<a id="opIdaccounts_details_retrieve"></a>

> Code samples

```bash
curl https://example.com/api/v2/accounts/497f6eca-6276-4993-bfeb-53cbbbba6f08/details/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v2/accounts/{id}/details/`

Access account details.

Account details will be returned in Berlin Group PSD2 format.

<h3 id="accountsdetailsretrieve-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

> Example responses

> 400 Response

```json
{
  "detail": "Starting date '2023-03-13' is greater than end date '2023-03-03'. When specifying date range, starting date must precede the end date",
  "status_code": 400,
  "summary": "Incorrect date range"
}
```

> 401 Response

```json
{
  "detail": "Access has expired or it has been revoked. To restore access reconnect the account.",
  "status_code": 401,
  "summary": "Couldn't update account details",
  "type": "AccessExpiredError"
}
```

> 403 Response

```json
{
  "detail": "Access to account is forbidden. The user might not have the necessary permissions.",
  "status_code": 403,
  "summary": "Couldn't update account details",
  "type": "AccountAccessForbidden"
}
```

> 404 Response

```json
{
  "detail": "Please check whether you specified a valid Account ID",
  "status_code": 404,
  "summary": "Account ID $ACC_ID not found"
}
```

> 409 Response

```json
{
  "aspsp_identifier": "string",
  "created": "2023-03-03 17:05:05.270281+00:00",
  "iban": "string",
  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "last_accessed": "2023-03-03 17:05:05.270299+00:00",
  "status": "ERROR"
}
```

> 429 Response

```json
{
  "detail": "Daily request limit set by the Institution has been exceeded.",
  "status_code": 429,
  "summary": "Couldn't update account details",
  "type": "RateLimitError"
}
```

> 500 Response

```json
{
  "detail": "Request to Institution returned an error",
  "status_code": 500,
  "summary": "Couldn't update account details",
  "type": "UnknownRequestError"
}
```

> 503 Response

```json
{
  "detail": "Couldn't connect to Institution",
  "status_code": 503,
  "summary": "Couldn't update account details",
  "type": "ConnectionError"
}
```

<h3 id="accountsdetailsretrieve-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|Bad Request|Date range error|Inline|
|401|Unauthorized|Failed Authentication|Inline|
|403|Forbidden|Account Access Forbidden|Inline|
|404|Not Found|Account not found error|Inline|
|409|Conflict|Account state error|Inline|
|429|Too Many Requests|Rate Limit Error|Inline|
|500|Internal Server Error|Unknown Request Error|Inline|
|503|Service Unavailable|Connection Error|Inline|

<h3 id="accountsdetailsretrieve-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

Status Code **409**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

Status Code **503**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## accounts_transactions_retrieve

<a id="opIdaccounts_transactions_retrieve"></a>

> Code samples

```bash
curl https://example.com/api/v2/accounts/497f6eca-6276-4993-bfeb-53cbbbba6f08/transactions/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v2/accounts/{id}/transactions/`

Access account transactions.

Transactions will be returned in Berlin Group PSD2 format.

<h3 id="accountstransactionsretrieve-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|date_from|query|string(date)|false|none|
|date_to|query|string(date)|false|none|
|id|path|string(uuid)|true|none|

> Example responses

> 400 Response

```json
{
  "detail": "Starting date '2023-03-13' is greater than end date '2023-03-03'. When specifying date range, starting date must precede the end date",
  "status_code": 400,
  "summary": "Incorrect date range"
}
```

> 401 Response

```json
{
  "detail": "Access has expired or it has been revoked. To restore access reconnect the account.",
  "status_code": 401,
  "summary": "Couldn't update account transactions",
  "type": "AccessExpiredError"
}
```

> 403 Response

```json
{
  "detail": "Access to account is forbidden. The user might not have the necessary permissions.",
  "status_code": 403,
  "summary": "Couldn't update account transactions",
  "type": "AccountAccessForbidden"
}
```

> 404 Response

```json
{
  "detail": "Please check whether you specified a valid Account ID",
  "status_code": 404,
  "summary": "Account ID $ACC_ID not found"
}
```

> 409 Response

```json
{
  "aspsp_identifier": "string",
  "created": "2023-03-03 17:05:05.270281+00:00",
  "iban": "string",
  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "last_accessed": "2023-03-03 17:05:05.270299+00:00",
  "status": "ERROR"
}
```

> 429 Response

```json
{
  "detail": "Daily request limit set by the Institution has been exceeded.",
  "status_code": 429,
  "summary": "Couldn't update account transactions",
  "type": "RateLimitError"
}
```

> 500 Response

```json
{
  "detail": "Request to Institution returned an error",
  "status_code": 500,
  "summary": "Couldn't update account transactions",
  "type": "UnknownRequestError"
}
```

> 503 Response

```json
{
  "detail": "Couldn't connect to Institution",
  "status_code": 503,
  "summary": "Couldn't update account transactions",
  "type": "ConnectionError"
}
```

<h3 id="accountstransactionsretrieve-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|Bad Request|Date range error|Inline|
|401|Unauthorized|Failed Authentication|Inline|
|403|Forbidden|Account Access Forbidden|Inline|
|404|Not Found|Account not found error|Inline|
|409|Conflict|Account state error|Inline|
|429|Too Many Requests|Rate Limit Error|Inline|
|500|Internal Server Error|Unknown Request Error|Inline|
|503|Service Unavailable|Connection Error|Inline|

<h3 id="accountstransactionsretrieve-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

Status Code **409**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

Status Code **503**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

<h1 id="nordigen-account-information-services-api-agreements">agreements</h1>

## retrieve all EUAs for an end user v2

<a id="opIdretrieve all EUAs for an end user v2"></a>

> Code samples

```bash
curl https://example.com/api/v2/agreements/enduser/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v2/agreements/enduser/`

Retrieve all end user agreements belonging to the company

<h3 id="retrieve-all-euas-for-an-end-user-v2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|

> Example responses

> 200 Response

```json
{
  "count": 123,
  "next": "https://ob.nordigen.com/api/v2/agreements/enduser/?limit=100&offset=0",
  "previous": "https://ob.nordigen.com/api/v2/agreements/enduser/?limit=100&offset=0",
  "results": [
    {
      "accepted": "1970-01-01T00:00:00Z",
      "access_scope": [
        "balances",
        "details",
        "transactions"
      ],
      "access_valid_for_days": 90,
      "created": "1970-01-01T00:00:00Z",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "institution_id": "string",
      "max_historical_days": 90
    }
  ]
}
```

> 401 Response

```json
{
  "detail": "Token is invalid or expired",
  "status_code": 401,
  "summary": "Invalid token"
}
```

> 403 Response

```json
{
  "detail": "Your IP $IP_ADDRESS isn't whitelisted to perform this action",
  "status_code": 403,
  "summary": "IP address access denied"
}
```

> 404 Response

```json
{
  "detail": "Not found.",
  "status_code": 404,
  "summary": "Not found."
}
```

<h3 id="retrieve-all-euas-for-an-end-user-v2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Retrieve all end user agreements|[PaginatedEndUserAgreementList](#schemapaginatedenduseragreementlist)|
|401|Unauthorized|Invalid token|Inline|
|403|Forbidden|IP Access denied|Inline|
|404|Not Found|Not found error|Inline|

<h3 id="retrieve-all-euas-for-an-end-user-v2-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## create EUA v2

<a id="opIdcreate EUA v2"></a>

> Code samples

```bash
curl https://example.com/api/v2/agreements/enduser/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "access_scope": [
      "balances",
      "details",
      "transactions"
    ],
    "access_valid_for_days": 90,
    "institution_id": "string",
    "max_historical_days": 90
  }'
```

`POST /api/v2/agreements/enduser/`

Create an end user agreement

> Body parameter

```json
{
  "access_scope": [
    "balances",
    "details",
    "transactions"
  ],
  "access_valid_for_days": 90,
  "institution_id": "string",
  "max_historical_days": 90
}
```

<h3 id="create-eua-v2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[EndUserAgreementRequest](#schemaenduseragreementrequest)|true|none|
|» access_scope|body|[[object]]|false|Array containing one or several values of ['balances', 'details', 'transactions']|
|» access_valid_for_days|body|integer|false|Number of days from acceptance that the access can be used.|
|» institution_id|body|string|true|an Institution ID for this EUA|
|» max_historical_days|body|integer|false|Maximum number of days of transaction data to retrieve.|

> Example responses

> 201 Response

```json
{
  "accepted": "1970-01-01T00:00:00Z",
  "access_scope": [
    "balances",
    "details",
    "transactions"
  ],
  "access_valid_for_days": 90,
  "created": "1970-01-01T00:00:00Z",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "institution_id": "string",
  "max_historical_days": 90
}
```

> 400 Response

```json
{
  "access_scope": [
    {
      "detail": "Choose one or several from ['balances', 'details', 'transactions']",
      "summary": "Unknown value '$SCOPE' in access_scope"
    },
    {
      "detail": "For this institution the following scopes are required together: ['balances', 'details']",
      "summary": "Institution access scope dependencies error"
    },
    {
      "detail": "The following scopes are mandatory for this institution: ['transactions']",
      "summary": "Institution access scope dependencies error"
    }
  ],
  "status_code": 400
}
```

> 401 Response

```json
{
  "detail": "Token is invalid or expired",
  "status_code": 401,
  "summary": "Invalid token"
}
```

> 403 Response

```json
{
  "detail": "Your IP $IP_ADDRESS isn't whitelisted to perform this action",
  "status_code": 403,
  "summary": "IP address access denied"
}
```

<h3 id="create-eua-v2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Create enduser agreement|[EndUserAgreement](#schemaenduseragreement)|
|400|Bad Request|Agreement field errors|Inline|
|401|Unauthorized|Invalid token|Inline|
|403|Forbidden|IP Access denied|Inline|

<h3 id="create-eua-v2-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## retrieve EUA by id v2

<a id="opIdretrieve EUA by id v2"></a>

> Code samples

```bash
curl https://example.com/api/v2/agreements/enduser/497f6eca-6276-4993-bfeb-53cbbbba6f08/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v2/agreements/enduser/{id}/`

Retrieve end user agreement by ID

<h3 id="retrieve-eua-by-id-v2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|A UUID string identifying this end user agreement.|

> Example responses

> 200 Response

```json
{
  "accepted": "1970-01-01T00:00:00Z",
  "access_scope": [
    "balances",
    "details",
    "transactions"
  ],
  "access_valid_for_days": 90,
  "created": "1970-01-01T00:00:00Z",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "institution_id": "string",
  "max_historical_days": 90
}
```

> 400 Response

```json
{
  "detail": "272785d5-de45-4efb-aa1a-f8157ffa94 is not a valid UUID.",
  "status_code": 400,
  "summary": "Invalid ID"
}
```

> 401 Response

```json
{
  "detail": "Token is invalid or expired",
  "status_code": 401,
  "summary": "Invalid token"
}
```

> 403 Response

```json
{
  "detail": "Your IP $IP_ADDRESS isn't whitelisted to perform this action",
  "status_code": 403,
  "summary": "IP address access denied"
}
```

> 404 Response

```json
{
  "detail": "Not found.",
  "status_code": 404,
  "summary": "Not found."
}
```

<h3 id="retrieve-eua-by-id-v2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Retrieve end user agreement by ID|[EndUserAgreement](#schemaenduseragreement)|
|400|Bad Request|Invalid ID|Inline|
|401|Unauthorized|Invalid token|Inline|
|403|Forbidden|IP Access denied|Inline|
|404|Not Found|Not found error|Inline|

<h3 id="retrieve-eua-by-id-v2-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## delete EUA by id v2

<a id="opIddelete EUA by id v2"></a>

> Code samples

```bash
curl https://example.com/api/v2/agreements/enduser/497f6eca-6276-4993-bfeb-53cbbbba6f08/ \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v2/agreements/enduser/{id}/`

Delete an end user agreement

<h3 id="delete-eua-by-id-v2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|A UUID string identifying this end user agreement.|

> Example responses

> 400 Response

```json
{
  "detail": "Cannot delete accepted End User Agreement: $EUA_ID. Only non accepted agreements can be deleted",
  "status_code": 400,
  "summary": "Cannot delete End User Agreement"
}
```

> 401 Response

```json
{
  "detail": "Token is invalid or expired",
  "status_code": 401,
  "summary": "Invalid token"
}
```

> 403 Response

```json
{
  "detail": "Your IP $IP_ADDRESS isn't whitelisted to perform this action",
  "status_code": 403,
  "summary": "IP address access denied"
}
```

> 404 Response

```json
{
  "detail": "Not found.",
  "status_code": 404,
  "summary": "Not found."
}
```

<h3 id="delete-eua-by-id-v2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|Bad Request|Invalid ID|Inline|
|401|Unauthorized|Invalid token|Inline|
|403|Forbidden|IP Access denied|Inline|
|404|Not Found|Not found error|Inline|

<h3 id="delete-eua-by-id-v2-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## accept EUA

<a id="opIdaccept EUA"></a>

> Code samples

```bash
curl https://example.com/api/v2/agreements/enduser/497f6eca-6276-4993-bfeb-53cbbbba6f08/accept/ \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "ip_address": "string",
    "user_agent": "string"
  }'
```

`PUT /api/v2/agreements/enduser/{id}/accept/`

Accept an end-user agreement via the API

> Body parameter

```json
{
  "ip_address": "string",
  "user_agent": "string"
}
```

<h3 id="accept-eua-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|A UUID string identifying this end user agreement.|
|body|body|[EnduserAcceptanceDetailsRequest](#schemaenduseracceptancedetailsrequest)|true|none|
|» ip_address|body|string|true|none|
|» user_agent|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "accepted": "1970-01-01T00:00:00Z",
  "access_scope": [
    "balances",
    "details",
    "transactions"
  ],
  "access_valid_for_days": 90,
  "created": "1970-01-01T00:00:00Z",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "institution_id": "string",
  "max_historical_days": 90
}
```

> 400 Response

```json
{
  "detail": "272785d5-de45-4efb-aa1a-f8157ffa94 is not a valid UUID.",
  "status_code": 400,
  "summary": "Invalid ID"
}
```

> 401 Response

```json
{
  "detail": "Token is invalid or expired",
  "status_code": 401,
  "summary": "Invalid token"
}
```

> 403 Response

```json
{
  "detail": "Your IP $IP_ADDRESS isn't whitelisted to perform this action",
  "status_code": 403,
  "summary": "IP address access denied"
}
```

> 404 Response

```json
{
  "detail": "Not found.",
  "status_code": 404,
  "summary": "Not found."
}
```

> 405 Response

```json
{
  "detail": "End User Agreements cannot be accepted more than once",
  "status_code": 405,
  "summary": "EUA cannot be accepted more than once"
}
```

<h3 id="accept-eua-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|EUA|[EndUserAgreement](#schemaenduseragreement)|
|400|Bad Request|Invalid ID|Inline|
|401|Unauthorized|Invalid token|Inline|
|403|Forbidden|IP Access denied|Inline|
|404|Not Found|Not found error|Inline|
|405|Method Not Allowed|EUA accepted|Inline|

<h3 id="accept-eua-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

Status Code **405**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

<h1 id="nordigen-account-information-services-api-institutions">institutions</h1>

## retrieve all supported Institutions in a given country

<a id="opIdretrieve all supported Institutions in a given country"></a>

> Code samples

```bash
curl https://example.com/api/v2/institutions/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v2/institutions/`

List all available institutions

<h3 id="retrieve-all-supported-institutions-in-a-given-country-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|country|query|string|false|ISO 3166 two-character country code|
|payments_enabled|query|string|false|Boolean value, indicating if payments are enabled|

> Example responses

> 200 Response

```json
[
  {
    "bic": "NTSBDEB1",
    "countries": [
      "GB",
      "NO",
      "SE",
      "FI",
      "DK",
      "EE",
      "LV",
      "LT",
      "NL",
      "CZ",
      "ES",
      "PL",
      "BE",
      "DE",
      "AT",
      "BG",
      "HR",
      "CY",
      "FR",
      "GR",
      "HU",
      "IS",
      "IE",
      "IT",
      "LI",
      "LU",
      "MT",
      "PT",
      "RO",
      "SK",
      "SI"
    ],
    "id": "N26_NTSBDEB1",
    "logo": "https://cdn.nordigen.com/ais/N26_SANDBOX_NTSBDEB1.png",
    "name": "N26 Bank",
    "transaction_total_days": "90"
  },
  {
    "bic": "FTSBDEFAXXX",
    "countries": [
      "DE"
    ],
    "id": "ABNAMRO_FTSBDEFAXXX",
    "logo": "https://cdn.nordigen.com/ais/ABNAMRO_FTSBDEFAXXX.png",
    "name": "ABN AMRO Bank Commercial",
    "transaction_total_days": "558"
  }
]
```

> 400 Response

```json
{
  "country": [
    "GBA is not a valid choice."
  ],
  "status_code": 400,
  "summary": "Invalid country choice."
}
```

> 401 Response

```json
{
  "detail": "Token is invalid or expired",
  "status_code": 401,
  "summary": "Invalid token"
}
```

> 403 Response

```json
{
  "detail": "Your IP $IP_ADDRESS isn't whitelisted to perform this action",
  "status_code": 403,
  "summary": "IP address access denied"
}
```

> 404 Response

```json
{
  "detail": "Not found.",
  "status_code": 404,
  "summary": "Not found."
}
```

<h3 id="retrieve-all-supported-institutions-in-a-given-country-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|list of supported Institutions in the country|Inline|
|400|Bad Request|Unknown Fields|Inline|
|401|Unauthorized|Invalid token|Inline|
|403|Forbidden|IP Access denied|Inline|
|404|Not Found|Not found error|Inline|

<h3 id="retrieve-all-supported-institutions-in-a-given-country-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Integration](#schemaintegration)]|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## retrieve institution

<a id="opIdretrieve institution"></a>

> Code samples

```bash
curl https://example.com/api/v2/institutions/N26_NTSBDEB1/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v2/institutions/{id}/`

Get details about a specific Institution

<h3 id="retrieve-institution-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "bic": "FTSBDEFAXXX",
  "countries": [
    "DE"
  ],
  "id": "ABNAMRO_FTSBDEFAXXX",
  "logo": "https://cdn.nordigen.com/ais/ABNAMRO_FTSBDEFAXXX.png",
  "name": "ABN AMRO Bank Commercial",
  "transaction_total_days": "558"
}
```

> 401 Response

```json
{
  "detail": "Token is invalid or expired",
  "status_code": 401,
  "summary": "Invalid token"
}
```

> 403 Response

```json
{
  "detail": "Your IP $IP_ADDRESS isn't whitelisted to perform this action",
  "status_code": 403,
  "summary": "IP address access denied"
}
```

> 404 Response

```json
{
  "detail": "Not found.",
  "status_code": 404,
  "summary": "Not found."
}
```

<h3 id="retrieve-institution-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Retrieve institution by id|[Integration](#schemaintegration)|
|401|Unauthorized|Invalid token|Inline|
|403|Forbidden|IP Access denied|Inline|
|404|Not Found|Not found error|Inline|

<h3 id="retrieve-institution-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

<h1 id="nordigen-account-information-services-api-payments">payments</h1>

## list payments

<a id="opIdlist payments"></a>

> Code samples

```bash
curl https://example.com/api/v2/payments/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v2/payments/`

Retrieve all payments belonging to the company

<h3 id="list-payments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|

> Example responses

> 200 Response

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?offset=400&limit=100",
  "previous": "http://api.example.org/accounts/?offset=200&limit=100",
  "results": [
    {
      "creditor_account": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "custom_payment_id": "string",
      "debtor_account": {
        "account": "string",
        "address_country": "st",
        "address_street": "string",
        "currency": "str",
        "name": "string",
        "post_code": "string",
        "type": "IBAN",
        "type_number": "string"
      },
      "description": "GOCARDLESS",
      "instructed_amount": {
        "amount": "string",
        "currency": "str"
      },
      "payment_id": "string",
      "payment_product": "ISCT",
      "payment_status": {},
      "payment_type": {},
      "redirect": "http://example.com"
    }
  ]
}
```

> 400 Response

```json
{
  "detail": "Unknown fields {${FIELD}} in {${LOCATION}}",
  "status_code": 400,
  "summary": "Unknown fields"
}
```

> 401 Response

```json
{
  "detail": "Token is invalid or expired",
  "status_code": 401,
  "summary": "Invalid token"
}
```

> 403 Response

```json
{
  "detail": "Your IP $IP_ADDRESS isn't whitelisted to perform this action",
  "status_code": 403,
  "summary": "IP address access denied"
}
```

<h3 id="list-payments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List payments|[PaginatedPaymentReadList](#schemapaginatedpaymentreadlist)|
|400|Bad Request|Unknown Fields|Inline|
|401|Unauthorized|Invalid token|Inline|
|403|Forbidden|IP Access denied|Inline|

<h3 id="list-payments-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## create payment

<a id="opIdcreate payment"></a>

> Code samples

```bash
curl https://example.com/api/v2/payments/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "creditor_account": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "custom_payment_id": "string",
    "debtor_account": {
      "account": "string",
      "address_country": "st",
      "address_street": "string",
      "currency": "str",
      "name": "string",
      "post_code": "string",
      "type": "IBAN",
      "type_number": "string"
    },
    "description": "GOCARDLESS",
    "institution_id": "SWEDBANK_SANDBOX_SANDLV22",
    "instructed_amount": {
      "amount": "string",
      "currency": "str"
    },
    "payment_product": "ISCT",
    "periodic_payment": {
      "day_of_execution": "string",
      "end_date": "1970-01-01",
      "execution_rule": "following",
      "frequency": "Monthly",
      "start_date": "1970-01-01"
    },
    "redirect": "http://example.com",
    "requested_execution_date": "1970-01-01"
  }'
```

`POST /api/v2/payments/`

Create payment

> Body parameter

```json
{
  "creditor_account": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "custom_payment_id": "string",
  "debtor_account": {
    "account": "string",
    "address_country": "st",
    "address_street": "string",
    "currency": "str",
    "name": "string",
    "post_code": "string",
    "type": "IBAN",
    "type_number": "string"
  },
  "description": "GOCARDLESS",
  "institution_id": "SWEDBANK_SANDBOX_SANDLV22",
  "instructed_amount": {
    "amount": "string",
    "currency": "str"
  },
  "payment_product": "ISCT",
  "periodic_payment": {
    "day_of_execution": "string",
    "end_date": "1970-01-01",
    "execution_rule": "following",
    "frequency": "Monthly",
    "start_date": "1970-01-01"
  },
  "redirect": "http://example.com",
  "requested_execution_date": "1970-01-01"
}
```

<h3 id="create-payment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PaymentWriteRequest](#schemapaymentwriterequest)|true|none|
|» creditor_account|body|string(uuid)|true|Registered creditor account|
|» custom_payment_id|body|string|false|Payment Custom Payment ID|
|» debtor_account|body|object|false|Debtor account|
|» » account|body|string|false|Debtor account type identifier|
|» » address_country|body|string|false|Debtor account address country|
|» » address_street|body|string|false|Debtor account address street|
|» » currency|body|string|false|Debtor account currency|
|» » name|body|string|true|Debtor account name|
|» » post_code|body|string|false|Debtor account post code|
|» » type|body|object|false|Debtor account type|
|» » type_number|body|string|false|Debtor account type identifier|
|» description|body|string|false|Payment description|
|» institution_id|body|string|false|Institution ID for Payment|
|» instructed_amount|body|object|true|Instructed amount|
|» » amount|body|string(decimal)|true|Instructed amount|
|» » currency|body|string|true|Instructed amount currency|
|» payment_product|body|object|false|Payment product|
|» periodic_payment|body|[PeriodicPaymentRequest](#schemaperiodicpaymentrequest)|false|Periodic Payment Serializer.|
|» redirect|body|string(uri) \| null|true|Redirect URL to your application after payment is done|
|» requested_execution_date|body|string(date)|false|Payment Execution date (for periodic payments)|

> Example responses

> 201 Response

```json
{
  "creditor_account": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "custom_payment_id": "string",
  "description": "GOCARDLESS",
  "instructed_amount": {
    "amount": "string",
    "currency": "str"
  },
  "link": "https://ob.nordigen.com/pis/start/83ca8de5-dbef-45fc-a137-f185d0e7a0d8/{$INSTITUTION_ID}",
  "payment_id": "string",
  "payment_product": "ISCT",
  "payment_status": {},
  "payment_type": {},
  "periodic_payment": {
    "day_of_execution": "string",
    "end_date": "1970-01-01",
    "execution_rule": "following",
    "frequency": "Monthly",
    "start_date": "1970-01-01"
  },
  "redirect": "http://example.com",
  "requested_execution_date": "1970-01-01"
}
```

> 400 Response

```json
{
  "detail": "Unknown fields {${FIELD}} in {${LOCATION}}",
  "status_code": 400,
  "summary": "Unknown fields"
}
```

> 401 Response

```json
{
  "detail": "Token is invalid or expired",
  "status_code": 401,
  "summary": "Invalid token"
}
```

> 403 Response

```json
{
  "detail": "Your IP $IP_ADDRESS isn't whitelisted to perform this action",
  "status_code": 403,
  "summary": "IP address access denied"
}
```

<h3 id="create-payment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Create payment|[PaymentWrite](#schemapaymentwrite)|
|400|Bad Request|Unknown Fields|Inline|
|401|Unauthorized|Invalid token|Inline|
|403|Forbidden|IP Access denied|Inline|

<h3 id="create-payment-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## retrieve all payment creditor accounts

<a id="opIdretrieve all payment creditor accounts"></a>

> Code samples

```bash
curl https://example.com/api/v2/payments/account/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v2/payments/account/`

Retrieve all payment creditor accounts

> Example responses

> 200 Response

```json
[
  {
    "account": "string",
    "address_country": "st",
    "currency": "str",
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "type": "IBAN"
  }
]
```

> 400 Response

```json
{
  "detail": "Unknown fields {${FIELD}} in {${LOCATION}}",
  "status_code": 400,
  "summary": "Unknown fields"
}
```

> 401 Response

```json
{
  "detail": "Token is invalid or expired",
  "status_code": 401,
  "summary": "Invalid token"
}
```

> 403 Response

```json
{
  "detail": "Your IP $IP_ADDRESS isn't whitelisted to perform this action",
  "status_code": 403,
  "summary": "IP address access denied"
}
```

<h3 id="retrieve-all-payment-creditor-accounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Retrieve all payment creditor accounts|Inline|
|400|Bad Request|Unknown Fields|Inline|
|401|Unauthorized|Invalid token|Inline|
|403|Forbidden|IP Access denied|Inline|

<h3 id="retrieve-all-payment-creditor-accounts-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[CreditorAccount](#schemacreditoraccount)]|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## payments_creditors_list

<a id="opIdpayments_creditors_list"></a>

> Code samples

```bash
curl https://example.com/api/v2/payments/creditors/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v2/payments/creditors/`

API endpoints related to creditor accounts.

<h3 id="paymentscreditorslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account|query|string|false|none|
|address_country|query|string|false|none|
|agent|query|string|false|none|
|currency|query|string|false|none|
|limit|query|integer|false|Number of results to return per page.|
|name|query|string|false|none|
|offset|query|integer|false|The initial index from which to return the results.|
|type|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?offset=400&limit=100",
  "previous": "http://api.example.org/accounts/?offset=200&limit=100",
  "results": [
    {
      "account": "string",
      "address_country": "st",
      "currency": "str",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "string",
      "type": "IBAN"
    }
  ]
}
```

<h3 id="paymentscreditorslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[PaginatedCreditorAccountList](#schemapaginatedcreditoraccountlist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## payments_creditors_create

<a id="opIdpayments_creditors_create"></a>

> Code samples

```bash
curl https://example.com/api/v2/payments/creditors/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "account": "string",
    "address_country": "AT",
    "address_street": "string",
    "agent": "string",
    "agent_name": "string",
    "currency": "str",
    "institution_id": "string",
    "name": "string",
    "post_code": "string",
    "type": "IBAN"
  }'
```

`POST /api/v2/payments/creditors/`

API endpoints related to creditor accounts.

> Body parameter

```json
{
  "account": "string",
  "address_country": "AT",
  "address_street": "string",
  "agent": "string",
  "agent_name": "string",
  "currency": "str",
  "institution_id": "string",
  "name": "string",
  "post_code": "string",
  "type": "IBAN"
}
```

<h3 id="paymentscreditorscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreditorAccountWriteRequest](#schemacreditoraccountwriterequest)|true|none|
|» account|body|string|true|Creditor account type identifier|
|» address_country|body|[AddressCountryEnum](#schemaaddresscountryenum)|false|none|
|» address_street|body|string|false|Creditor account address street|
|» agent|body|string|false|Creditor account BICFI Identifier|
|» agent_name|body|string|false|Creditor account agent name|
|» currency|body|string|true|Creditor account currency|
|» institution_id|body|string|false|an Institution ID for this CreditorAccount|
|» name|body|string|true|Creditor account name|
|» post_code|body|string|false|Creditor account address post code|
|» type|body|object|false|Creditor account type|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» address_country|AT|
|» address_country|BE|
|» address_country|BG|
|» address_country|HR|
|» address_country|CY|
|» address_country|CZ|
|» address_country|DK|
|» address_country|EE|
|» address_country|FI|
|» address_country|FR|
|» address_country|DE|
|» address_country|GR|
|» address_country|HU|
|» address_country|IS|
|» address_country|IE|
|» address_country|IT|
|» address_country|LV|
|» address_country|LI|
|» address_country|LT|
|» address_country|LU|
|» address_country|MT|
|» address_country|NL|
|» address_country|NO|
|» address_country|PL|
|» address_country|PT|
|» address_country|RO|
|» address_country|SK|
|» address_country|SI|
|» address_country|ES|
|» address_country|SE|
|» address_country|GB|

> Example responses

> 201 Response

```json
{
  "account": "string",
  "address_country": "AT",
  "address_street": "string",
  "agent": "string",
  "agent_name": "string",
  "currency": "str",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "institution_id": "string",
  "name": "string",
  "post_code": "string",
  "type": "IBAN"
}
```

<h3 id="paymentscreditorscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created||[CreditorAccountWrite](#schemacreditoraccountwrite)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## payments_creditors_retrieve

<a id="opIdpayments_creditors_retrieve"></a>

> Code samples

```bash
curl https://example.com/api/v2/payments/creditors/497f6eca-6276-4993-bfeb-53cbbbba6f08/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v2/payments/creditors/{id}/`

API endpoints related to creditor accounts.

<h3 id="paymentscreditorsretrieve-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "account": "string",
  "address_country": "st",
  "currency": "str",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "type": "IBAN"
}
```

<h3 id="paymentscreditorsretrieve-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||[CreditorAccount](#schemacreditoraccount)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## payments_creditors_destroy

<a id="opIdpayments_creditors_destroy"></a>

> Code samples

```bash
curl https://example.com/api/v2/payments/creditors/497f6eca-6276-4993-bfeb-53cbbbba6f08/ \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v2/payments/creditors/{id}/`

API endpoints related to creditor accounts.

<h3 id="paymentscreditorsdestroy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

<h3 id="paymentscreditorsdestroy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No response body|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## list minimum required fields for institution

<a id="opIdlist minimum required fields for institution"></a>

> Code samples

```bash
curl https://example.com/api/v2/payments/fields/string/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v2/payments/fields/{institution_id}/`

List minimum required fields for institution

<h3 id="list-minimum-required-fields-for-institution-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|institution_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "single-payment": {
    "SCT": {
      "creditor_account": "<creditor_account_id>",
      "custom_payment_id": "<custom_payment_id>",
      "description": "<payment_description>",
      "institution_id": "<institution_id>",
      "instructed_amount": {
        "amount": 10,
        "currency": "EUR"
      },
      "payment_product": "SCT",
      "redirect": "<https://example.com>"
    }
  }
}
```

> 400 Response

```json
{
  "detail": "Unknown fields {${FIELD}} in {${LOCATION}}",
  "status_code": 400,
  "summary": "Unknown fields"
}
```

> 401 Response

```json
{
  "detail": "Token is invalid or expired",
  "status_code": 401,
  "summary": "Invalid token"
}
```

> 403 Response

```json
{
  "detail": "Your IP $IP_ADDRESS isn't whitelisted to perform this action",
  "status_code": 403,
  "summary": "IP address access denied"
}
```

<h3 id="list-minimum-required-fields-for-institution-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Minimum required fields|Inline|
|400|Bad Request|Unknown Fields|Inline|
|401|Unauthorized|Invalid token|Inline|
|403|Forbidden|IP Access denied|Inline|

<h3 id="list-minimum-required-fields-for-institution-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## retrieve payment

<a id="opIdretrieve payment"></a>

> Code samples

```bash
curl https://example.com/api/v2/payments/497f6eca-6276-4993-bfeb-53cbbbba6f08/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v2/payments/{id}/`

Retrieve payment

<h3 id="retrieve-payment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "creditor_account": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "custom_payment_id": "string",
  "debtor_account": {
    "account": "string",
    "address_country": "st",
    "address_street": "string",
    "currency": "str",
    "name": "string",
    "post_code": "string",
    "type": "IBAN",
    "type_number": "string"
  },
  "description": "GOCARDLESS",
  "instructed_amount": {
    "amount": "string",
    "currency": "str"
  },
  "payment_id": "string",
  "payment_product": "ISCT",
  "payment_status": {},
  "payment_type": {},
  "redirect": "http://example.com"
}
```

> 400 Response

```json
{
  "detail": "272785d5-de45-4efb-aa1a-f8157ffa94 is not a valid UUID.",
  "status_code": 400,
  "summary": "Invalid ID"
}
```

> 401 Response

```json
{
  "detail": "Token is invalid or expired",
  "status_code": 401,
  "summary": "Invalid token"
}
```

> 403 Response

```json
{
  "detail": "Your IP $IP_ADDRESS isn't whitelisted to perform this action",
  "status_code": 403,
  "summary": "IP address access denied"
}
```

> 404 Response

```json
{
  "detail": "Not found.",
  "status_code": 404,
  "summary": "Not found."
}
```

<h3 id="retrieve-payment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Retrieve payment information|[PaymentRead](#schemapaymentread)|
|400|Bad Request|Invalid ID|Inline|
|401|Unauthorized|Invalid token|Inline|
|403|Forbidden|IP Access denied|Inline|
|404|Not Found|Not found error|Inline|

<h3 id="retrieve-payment-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## delete periodic payment

<a id="opIddelete periodic payment"></a>

> Code samples

```bash
curl https://example.com/api/v2/payments/497f6eca-6276-4993-bfeb-53cbbbba6f08/ \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v2/payments/{id}/`

Delete periodic payment

<h3 id="delete-periodic-payment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|none|

> Example responses

> 200 Response

```json
{
  "detail": "Periodic payment '$PAYMENT_ID' deleted",
  "summary": "Periodic payment deleted"
}
```

> 400 Response

```json
{
  "detail": "272785d5-de45-4efb-aa1a-f8157ffa94 is not a valid UUID.",
  "status_code": 400,
  "summary": "Invalid ID"
}
```

> 401 Response

```json
{
  "detail": "Token is invalid or expired",
  "status_code": 401,
  "summary": "Invalid token"
}
```

> 403 Response

```json
{
  "detail": "Your IP $IP_ADDRESS isn't whitelisted to perform this action",
  "status_code": 403,
  "summary": "IP address access denied"
}
```

> 404 Response

```json
{
  "detail": "Not found.",
  "status_code": 404,
  "summary": "Not found."
}
```

> 409 Response

```json
{
  "detail": "Periodic payment '$PAYMENT_ID' cannot be deleted at this moment. Please try again later.",
  "status_code": 409,
  "summary": "Periodic payment cannot be deleted"
}
```

<h3 id="delete-periodic-payment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Payment deleted|Inline|
|400|Bad Request|Invalid ID|Inline|
|401|Unauthorized|Invalid token|Inline|
|403|Forbidden|IP Access denied|Inline|
|404|Not Found|Not found error|Inline|
|409|Conflict|Payment delete error|Inline|

<h3 id="delete-periodic-payment-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

Status Code **409**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

<h1 id="nordigen-account-information-services-api-requisitions">requisitions</h1>

## retrieve all requisitions

<a id="opIdretrieve all requisitions"></a>

> Code samples

```bash
curl https://example.com/api/v2/requisitions/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v2/requisitions/`

Retrieve all requisitions belonging to the company

<h3 id="retrieve-all-requisitions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|Number of results to return per page.|
|offset|query|integer|false|The initial index from which to return the results.|

> Example responses

> 200 Response

```json
{
  "count": 123,
  "next": "https://ob.nordigen.com/api/v2/requisitions/?limit=100&offset=0",
  "previous": "https://ob.nordigen.com/api/v2/requisitions/?limit=100&offset=0",
  "results": [
    {
      "account_selection": false,
      "accounts": [
        "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      ],
      "agreement": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "created": "1970-01-01T00:00:00Z",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "institution_id": "string",
      "link": "https://ob.nordigen.com/psd2/start/3fa85f64-5717-4562-b3fc-2c963f66afa6/{$INSTITUTION_ID}",
      "redirect": "http://example.com",
      "redirect_immediate": false,
      "reference": "string",
      "ssn": "string",
      "status": {},
      "user_language": "strin"
    }
  ]
}
```

> 400 Response

```json
{
  "detail": "Unknown fields {${FIELD}} in {${LOCATION}}",
  "status_code": 400,
  "summary": "Unknown fields"
}
```

> 401 Response

```json
{
  "detail": "Token is invalid or expired",
  "status_code": 401,
  "summary": "Invalid token"
}
```

> 403 Response

```json
{
  "detail": "Your IP $IP_ADDRESS isn't whitelisted to perform this action",
  "status_code": 403,
  "summary": "IP address access denied"
}
```

> 404 Response

```json
{
  "detail": "Not found.",
  "status_code": 404,
  "summary": "Not found."
}
```

<h3 id="retrieve-all-requisitions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Retrieve all requisitions|[PaginatedRequisitionV2List](#schemapaginatedrequisitionv2list)|
|400|Bad Request|Unknown Fields|Inline|
|401|Unauthorized|Invalid token|Inline|
|403|Forbidden|IP Access denied|Inline|
|404|Not Found|Not found error|Inline|

<h3 id="retrieve-all-requisitions-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## requisition created

<a id="opIdrequisition created"></a>

> Code samples

```bash
curl https://example.com/api/v2/requisitions/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "account_selection": false,
    "agreement": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "institution_id": "string",
    "redirect": "http://example.com",
    "redirect_immediate": false,
    "reference": "string",
    "ssn": "string",
    "user_language": "strin"
  }'
```

`POST /api/v2/requisitions/`

Create a new requisition

> Body parameter

```json
{
  "account_selection": false,
  "agreement": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "institution_id": "string",
  "redirect": "http://example.com",
  "redirect_immediate": false,
  "reference": "string",
  "ssn": "string",
  "user_language": "strin"
}
```

<h3 id="requisition-created-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[RequisitionV2Request](#schemarequisitionv2request)|true|none|
|» account_selection|body|boolean|false|option to enable account selection view for the end user|
|» agreement|body|string(uuid)|false|EUA associated with this requisition|
|» institution_id|body|string|true|an Institution ID for this Requisition|
|» redirect|body|string(uri) \| null|true|redirect URL to your application after end-user authorization with ASPSP|
|» redirect_immediate|body|boolean|false|enable redirect back to the client after account list received|
|» reference|body|string|false|additional ID to identify the end user|
|» ssn|body|string|false|optional SSN field to verify ownership of the account|
|» user_language|body|string|false|A two-letter country code (ISO 639-1)|

> Example responses

> 201 Response

```json
{
  "account_selection": false,
  "accounts": [],
  "agreement": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "created": "1970-01-01T00:00:00Z",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "institution_id": "string",
  "link": "https://ob.nordigen.com/psd2/start/3fa85f64-5717-4562-b3fc-2c963f66afa6/{$INSTITUTION_ID}",
  "redirect": "http://example.com",
  "redirect_immediate": false,
  "reference": "string",
  "ssn": "string",
  "status": {},
  "user_language": "strin"
}
```

> 400 Response

```json
{
  "account_selection": {
    "detail": "Account selection not supported for $INSTITUTION_ID",
    "summary": "Account selection not supported"
  },
  "status_code": 400
}
```

> 401 Response

```json
{
  "detail": "Token is invalid or expired",
  "status_code": 401,
  "summary": "Invalid token"
}
```

> 403 Response

```json
{
  "detail": "Your IP $IP_ADDRESS isn't whitelisted to perform this action",
  "status_code": 403,
  "summary": "IP address access denied"
}
```

> 404 Response

```json
{
  "agreement": {
    "detail": "Please check whether you specified a valid ID",
    "summary": "ID $AGREEMENT_ID not found"
  },
  "status_code": 404
}
```

<h3 id="requisition-created-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Requisition has been successfully created|[SpectacularRequisitionV2](#schemaspectacularrequisitionv2)|
|400|Bad Request|Fields required|Inline|
|401|Unauthorized|Invalid token|Inline|
|403|Forbidden|IP Access denied|Inline|
|404|Not Found|Agreement not found errors|Inline|

<h3 id="requisition-created-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## requisition by id

<a id="opIdrequisition by id"></a>

> Code samples

```bash
curl https://example.com/api/v2/requisitions/497f6eca-6276-4993-bfeb-53cbbbba6f08/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /api/v2/requisitions/{id}/`

Retrieve a requisition by ID

<h3 id="requisition-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|A UUID string identifying this requisition.|

> Example responses

> 200 Response

```json
{
  "account_selection": false,
  "accounts": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ],
  "agreement": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "created": "1970-01-01T00:00:00Z",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "institution_id": "string",
  "link": "https://ob.nordigen.com/psd2/start/3fa85f64-5717-4562-b3fc-2c963f66afa6/{$INSTITUTION_ID}",
  "redirect": "http://example.com",
  "redirect_immediate": false,
  "reference": "string",
  "ssn": "string",
  "status": {},
  "user_language": "strin"
}
```

> 400 Response

```json
{
  "detail": "272785d5-de45-4efb-aa1a-f8157ffa94 is not a valid UUID.",
  "status_code": 400,
  "summary": "Invalid ID"
}
```

> 401 Response

```json
{
  "detail": "Token is invalid or expired",
  "status_code": 401,
  "summary": "Invalid token"
}
```

> 403 Response

```json
{
  "detail": "Your IP $IP_ADDRESS isn't whitelisted to perform this action",
  "status_code": 403,
  "summary": "IP address access denied"
}
```

> 404 Response

```json
{
  "detail": "Not found.",
  "status_code": 404,
  "summary": "Not found."
}
```

<h3 id="requisition-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Get requisition by ID|[RequisitionV2](#schemarequisitionv2)|
|400|Bad Request|Invalid ID|Inline|
|401|Unauthorized|Invalid token|Inline|
|403|Forbidden|IP Access denied|Inline|
|404|Not Found|Not found error|Inline|

<h3 id="requisition-by-id-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## delete requisition by id v2

<a id="opIddelete requisition by id v2"></a>

> Code samples

```bash
curl https://example.com/api/v2/requisitions/497f6eca-6276-4993-bfeb-53cbbbba6f08/ \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /api/v2/requisitions/{id}/`

Delete requisition and its end user agreement

<h3 id="delete-requisition-by-id-v2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string(uuid)|true|A UUID string identifying this requisition.|

> Example responses

> 400 Response

```json
{
  "detail": "272785d5-de45-4efb-aa1a-f8157ffa94 is not a valid UUID.",
  "status_code": 400,
  "summary": "Invalid ID"
}
```

> 401 Response

```json
{
  "detail": "Token is invalid or expired",
  "status_code": 401,
  "summary": "Invalid token"
}
```

> 403 Response

```json
{
  "detail": "Your IP $IP_ADDRESS isn't whitelisted to perform this action",
  "status_code": 403,
  "summary": "IP address access denied"
}
```

> 404 Response

```json
{
  "detail": "Not found.",
  "status_code": 404,
  "summary": "Not found."
}
```

<h3 id="delete-requisition-by-id-v2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|Bad Request|Invalid ID|Inline|
|401|Unauthorized|Invalid token|Inline|
|403|Forbidden|IP Access denied|Inline|
|404|Not Found|Not found error|Inline|

<h3 id="delete-requisition-by-id-v2-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

<h1 id="nordigen-account-information-services-api-token">token</h1>

## JWT Obtain

<a id="opIdJWT Obtain"></a>

> Code samples

```bash
curl https://example.com/api/v2/token/new/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "secret_id": "string",
    "secret_key": "string"
  }'
```

`POST /api/v2/token/new/`

Obtain JWT pair

> Body parameter

```json
{
  "secret_id": "string",
  "secret_key": "string"
}
```

<h3 id="jwt-obtain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[JWTObtainPairRequest](#schemajwtobtainpairrequest)|true|none|
|» secret_id|body|string|true|Secret id from /user-secrets/|
|» secret_key|body|string|true|Secret key from /user-secrets/|

> Example responses

> 200 Response

```json
{
  "access": "string",
  "access_expires": 86400,
  "refresh": "string",
  "refresh_expires": 2592000
}
```

> 401 Response

```json
{
  "detail": "No active account found with the given credentials",
  "status_code": 401,
  "summary": "Authentication failed"
}
```

> 403 Response

```json
{
  "detail": "Your IP $IP_ADDRESS isn't whitelisted to perform this action",
  "status_code": 403,
  "summary": "IP address access denied"
}
```

<h3 id="jwt-obtain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Obtain JWT response.|[SpectacularJWTObtain](#schemaspectacularjwtobtain)|
|401|Unauthorized|Authentication failed|Inline|
|403|Forbidden|IP Access denied|Inline|

<h3 id="jwt-obtain-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

## JWT Refresh

<a id="opIdJWT Refresh"></a>

> Code samples

```bash
curl https://example.com/api/v2/token/refresh/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "refresh": "string"
  }'
```

`POST /api/v2/token/refresh/`

Refresh access token

> Body parameter

```json
{
  "refresh": "string"
}
```

<h3 id="jwt-refresh-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[JWTRefreshRequest](#schemajwtrefreshrequest)|true|none|
|» refresh|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "access": "string",
  "access_expires": 86400
}
```

> 401 Response

```json
{
  "detail": "Token is invalid or expired",
  "status_code": 401,
  "summary": "Invalid token"
}
```

> 403 Response

```json
{
  "detail": "Your IP $IP_ADDRESS isn't whitelisted to perform this action",
  "status_code": 403,
  "summary": "IP address access denied"
}
```

<h3 id="jwt-refresh-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Refresh access token.|[SpectacularJWTRefresh](#schemaspectacularjwtrefresh)|
|401|Unauthorized|Invalid token|Inline|
|403|Forbidden|IP Access denied|Inline|

<h3 id="jwt-refresh-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
jwtAuth
</aside>

# Schemas

<h2 id="tocS_AccountV2">AccountV2</h2>
<!-- backwards compatibility -->
<a id="schemaaccountv2"></a>
<a id="schema_AccountV2"></a>
<a id="tocSaccountv2"></a>
<a id="tocsaccountv2"></a>

```json
{
  "created": "1970-01-01T00:00:00Z",
  "iban": "string",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "institution_id": "string",
  "last_accessed": "1970-01-01T00:00:00Z",
  "owner_name": "string",
  "status": {}
}
```

AccountV2Serializer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created|string(date-time)|false|read-only|The date & time at which the account object was created.|
|iban|string|false|read-only|The Account IBAN|
|id|string(uuid)|false|read-only|The ID of this Account, used to refer to this account in other API calls.|
|institution_id|string|false|read-only|The ASPSP associated with this account.|
|last_accessed|string(date-time) \| null|false|read-only|The date & time at which the account object was last accessed.|
|owner_name|string|false|read-only|The name of the account owner.|
|status|object|false|read-only|The processing status of this account.|

<h2 id="tocS_AccountV2StatusEnum">AccountV2StatusEnum</h2>
<!-- backwards compatibility -->
<a id="schemaaccountv2statusenum"></a>
<a id="schema_AccountV2StatusEnum"></a>
<a id="tocSaccountv2statusenum"></a>
<a id="tocsaccountv2statusenum"></a>

```json
"DISCOVERED"
```

<h2 id="tocS_AddressCountryEnum">AddressCountryEnum</h2>
<!-- backwards compatibility -->
<a id="schemaaddresscountryenum"></a>
<a id="schema_AddressCountryEnum"></a>
<a id="tocSaddresscountryenum"></a>
<a id="tocsaddresscountryenum"></a>

```json
"AT"
```

<h2 id="tocS_CountryEnum">CountryEnum</h2>
<!-- backwards compatibility -->
<a id="schemacountryenum"></a>
<a id="schema_CountryEnum"></a>
<a id="tocScountryenum"></a>
<a id="tocscountryenum"></a>

```json
"AT"
```

<h2 id="tocS_CreditorAccount">CreditorAccount</h2>
<!-- backwards compatibility -->
<a id="schemacreditoraccount"></a>
<a id="schema_CreditorAccount"></a>
<a id="tocScreditoraccount"></a>
<a id="tocscreditoraccount"></a>

```json
{
  "account": "string",
  "address_country": "st",
  "currency": "str",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "type": "IBAN"
}
```

Creditor account read serializer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account|string|true|none|Creditor account type identifier|
|address_country|string|false|none|Creditor account address country|
|currency|string|true|none|Creditor account currency|
|id|string(uuid)|false|read-only|Unique entry ID|
|name|string|true|none|Creditor account name|
|type|object|false|none|Creditor account type|

<h2 id="tocS_CreditorAccountWrite">CreditorAccountWrite</h2>
<!-- backwards compatibility -->
<a id="schemacreditoraccountwrite"></a>
<a id="schema_CreditorAccountWrite"></a>
<a id="tocScreditoraccountwrite"></a>
<a id="tocscreditoraccountwrite"></a>

```json
{
  "account": "string",
  "address_country": "AT",
  "address_street": "string",
  "agent": "string",
  "agent_name": "string",
  "currency": "str",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "institution_id": "string",
  "name": "string",
  "post_code": "string",
  "type": "IBAN"
}
```

Creditor account write serializer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account|string|true|none|Creditor account type identifier|
|address_country|[AddressCountryEnum](#schemaaddresscountryenum)|false|none|none|
|address_street|string|false|none|Creditor account address street|
|agent|string|false|none|Creditor account BICFI Identifier|
|agent_name|string|false|none|Creditor account agent name|
|currency|string|true|none|Creditor account currency|
|id|string(uuid)|false|read-only|Unique entry ID|
|institution_id|string|false|none|an Institution ID for this CreditorAccount|
|name|string|true|none|Creditor account name|
|post_code|string|false|none|Creditor account address post code|
|type|object|false|none|Creditor account type|

#### Enumerated Values

|Property|Value|
|---|---|
|address_country|AT|
|address_country|BE|
|address_country|BG|
|address_country|HR|
|address_country|CY|
|address_country|CZ|
|address_country|DK|
|address_country|EE|
|address_country|FI|
|address_country|FR|
|address_country|DE|
|address_country|GR|
|address_country|HU|
|address_country|IS|
|address_country|IE|
|address_country|IT|
|address_country|LV|
|address_country|LI|
|address_country|LT|
|address_country|LU|
|address_country|MT|
|address_country|NL|
|address_country|NO|
|address_country|PL|
|address_country|PT|
|address_country|RO|
|address_country|SK|
|address_country|SI|
|address_country|ES|
|address_country|SE|
|address_country|GB|

<h2 id="tocS_CreditorAccountWriteRequest">CreditorAccountWriteRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreditoraccountwriterequest"></a>
<a id="schema_CreditorAccountWriteRequest"></a>
<a id="tocScreditoraccountwriterequest"></a>
<a id="tocscreditoraccountwriterequest"></a>

```json
{
  "account": "string",
  "address_country": "AT",
  "address_street": "string",
  "agent": "string",
  "agent_name": "string",
  "currency": "str",
  "institution_id": "string",
  "name": "string",
  "post_code": "string",
  "type": "IBAN"
}
```

Creditor account write serializer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account|string|true|none|Creditor account type identifier|
|address_country|[AddressCountryEnum](#schemaaddresscountryenum)|false|none|none|
|address_street|string|false|none|Creditor account address street|
|agent|string|false|none|Creditor account BICFI Identifier|
|agent_name|string|false|none|Creditor account agent name|
|currency|string|true|none|Creditor account currency|
|institution_id|string|false|none|an Institution ID for this CreditorAccount|
|name|string|true|none|Creditor account name|
|post_code|string|false|none|Creditor account address post code|
|type|object|false|none|Creditor account type|

#### Enumerated Values

|Property|Value|
|---|---|
|address_country|AT|
|address_country|BE|
|address_country|BG|
|address_country|HR|
|address_country|CY|
|address_country|CZ|
|address_country|DK|
|address_country|EE|
|address_country|FI|
|address_country|FR|
|address_country|DE|
|address_country|GR|
|address_country|HU|
|address_country|IS|
|address_country|IE|
|address_country|IT|
|address_country|LV|
|address_country|LI|
|address_country|LT|
|address_country|LU|
|address_country|MT|
|address_country|NL|
|address_country|NO|
|address_country|PL|
|address_country|PT|
|address_country|RO|
|address_country|SK|
|address_country|SI|
|address_country|ES|
|address_country|SE|
|address_country|GB|

<h2 id="tocS_DebtorAccountWrite">DebtorAccountWrite</h2>
<!-- backwards compatibility -->
<a id="schemadebtoraccountwrite"></a>
<a id="schema_DebtorAccountWrite"></a>
<a id="tocSdebtoraccountwrite"></a>
<a id="tocsdebtoraccountwrite"></a>

```json
{
  "account": "string",
  "address_country": "st",
  "address_street": "string",
  "currency": "str",
  "name": "string",
  "post_code": "string",
  "type": "IBAN",
  "type_number": "string"
}
```

Debtor account write serializer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account|string|false|none|Debtor account type identifier|
|address_country|string|false|none|Debtor account address country|
|address_street|string|false|none|Debtor account address street|
|currency|string|false|none|Debtor account currency|
|name|string|true|none|Debtor account name|
|post_code|string|false|none|Debtor account post code|
|type|object|false|none|Debtor account type|
|type_number|string|false|none|Debtor account type identifier|

<h2 id="tocS_DebtorAccountWriteRequest">DebtorAccountWriteRequest</h2>
<!-- backwards compatibility -->
<a id="schemadebtoraccountwriterequest"></a>
<a id="schema_DebtorAccountWriteRequest"></a>
<a id="tocSdebtoraccountwriterequest"></a>
<a id="tocsdebtoraccountwriterequest"></a>

```json
{
  "account": "string",
  "address_country": "st",
  "address_street": "string",
  "currency": "str",
  "name": "string",
  "post_code": "string",
  "type": "IBAN",
  "type_number": "string"
}
```

Debtor account write serializer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account|string|false|none|Debtor account type identifier|
|address_country|string|false|none|Debtor account address country|
|address_street|string|false|none|Debtor account address street|
|currency|string|false|none|Debtor account currency|
|name|string|true|none|Debtor account name|
|post_code|string|false|none|Debtor account post code|
|type|object|false|none|Debtor account type|
|type_number|string|false|none|Debtor account type identifier|

<h2 id="tocS_EndUserAgreement">EndUserAgreement</h2>
<!-- backwards compatibility -->
<a id="schemaenduseragreement"></a>
<a id="schema_EndUserAgreement"></a>
<a id="tocSenduseragreement"></a>
<a id="tocsenduseragreement"></a>

```json
{
  "accepted": "1970-01-01T00:00:00Z",
  "access_scope": [
    "balances",
    "details",
    "transactions"
  ],
  "access_valid_for_days": 90,
  "created": "1970-01-01T00:00:00Z",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "institution_id": "string",
  "max_historical_days": 90
}
```

EndUserAgreement.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accepted|string(date-time) \| null|false|read-only|The date & time at which the end user accepted the agreement.|
|access_scope|[[object]]|false|none|Array containing one or several values of ['balances', 'details', 'transactions']|
|access_valid_for_days|integer|false|none|Number of days from acceptance that the access can be used.|
|created|string(date-time)|false|read-only|The date & time at which the end user agreement was created.|
|id|string(uuid)|false|read-only|The ID of this End User Agreement, used to refer to this end user agreement in other API calls.|
|institution_id|string|true|none|an Institution ID for this EUA|
|max_historical_days|integer|false|none|Maximum number of days of transaction data to retrieve.|

<h2 id="tocS_EndUserAgreementRequest">EndUserAgreementRequest</h2>
<!-- backwards compatibility -->
<a id="schemaenduseragreementrequest"></a>
<a id="schema_EndUserAgreementRequest"></a>
<a id="tocSenduseragreementrequest"></a>
<a id="tocsenduseragreementrequest"></a>

```json
{
  "access_scope": [
    "balances",
    "details",
    "transactions"
  ],
  "access_valid_for_days": 90,
  "institution_id": "string",
  "max_historical_days": 90
}
```

EndUserAgreement.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|access_scope|[[object]]|false|none|Array containing one or several values of ['balances', 'details', 'transactions']|
|access_valid_for_days|integer|false|none|Number of days from acceptance that the access can be used.|
|institution_id|string|true|none|an Institution ID for this EUA|
|max_historical_days|integer|false|none|Maximum number of days of transaction data to retrieve.|

<h2 id="tocS_EnduserAcceptanceDetailsRequest">EnduserAcceptanceDetailsRequest</h2>
<!-- backwards compatibility -->
<a id="schemaenduseracceptancedetailsrequest"></a>
<a id="schema_EnduserAcceptanceDetailsRequest"></a>
<a id="tocSenduseracceptancedetailsrequest"></a>
<a id="tocsenduseracceptancedetailsrequest"></a>

```json
{
  "ip_address": "string",
  "user_agent": "string"
}
```

Represents end-user details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ip_address|string|true|none|none|
|user_agent|string|true|none|none|

<h2 id="tocS_ExecutionRuleEnum">ExecutionRuleEnum</h2>
<!-- backwards compatibility -->
<a id="schemaexecutionruleenum"></a>
<a id="schema_ExecutionRuleEnum"></a>
<a id="tocSexecutionruleenum"></a>
<a id="tocsexecutionruleenum"></a>

```json
"following"
```

<h2 id="tocS_FrequencyEnum">FrequencyEnum</h2>
<!-- backwards compatibility -->
<a id="schemafrequencyenum"></a>
<a id="schema_FrequencyEnum"></a>
<a id="tocSfrequencyenum"></a>
<a id="tocsfrequencyenum"></a>

```json
"Daily"
```

<h2 id="tocS_InstructedAmount">InstructedAmount</h2>
<!-- backwards compatibility -->
<a id="schemainstructedamount"></a>
<a id="schema_InstructedAmount"></a>
<a id="tocSinstructedamount"></a>
<a id="tocsinstructedamount"></a>

```json
{
  "amount": "string",
  "currency": "str"
}
```

InstructedAmountSerializer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|string(decimal)|true|none|Instructed amount|
|currency|string|true|none|Instructed amount currency|

<h2 id="tocS_InstructedAmountRequest">InstructedAmountRequest</h2>
<!-- backwards compatibility -->
<a id="schemainstructedamountrequest"></a>
<a id="schema_InstructedAmountRequest"></a>
<a id="tocSinstructedamountrequest"></a>
<a id="tocsinstructedamountrequest"></a>

```json
{
  "amount": "string",
  "currency": "str"
}
```

InstructedAmountSerializer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|string(decimal)|true|none|Instructed amount|
|currency|string|true|none|Instructed amount currency|

<h2 id="tocS_Integration">Integration</h2>
<!-- backwards compatibility -->
<a id="schemaintegration"></a>
<a id="schema_Integration"></a>
<a id="tocSintegration"></a>
<a id="tocsintegration"></a>

```json
{
  "bic": "string",
  "countries": [
    "string"
  ],
  "id": "string",
  "logo": "string",
  "name": "string",
  "transaction_total_days": "90"
}
```

Represents an Integration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bic|string|false|none|none|
|countries|[string]|true|none|none|
|id|string|true|none|none|
|logo|string|true|none|none|
|name|string|true|none|none|
|transaction_total_days|string|false|none|none|

<h2 id="tocS_JWTObtainPairRequest">JWTObtainPairRequest</h2>
<!-- backwards compatibility -->
<a id="schemajwtobtainpairrequest"></a>
<a id="schema_JWTObtainPairRequest"></a>
<a id="tocSjwtobtainpairrequest"></a>
<a id="tocsjwtobtainpairrequest"></a>

```json
{
  "secret_id": "string",
  "secret_key": "string"
}
```

Obtain JWT pair.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|secret_id|string|true|none|Secret id from /user-secrets/|
|secret_key|string|true|none|Secret key from /user-secrets/|

<h2 id="tocS_JWTRefreshRequest">JWTRefreshRequest</h2>
<!-- backwards compatibility -->
<a id="schemajwtrefreshrequest"></a>
<a id="schema_JWTRefreshRequest"></a>
<a id="tocSjwtrefreshrequest"></a>
<a id="tocsjwtrefreshrequest"></a>

```json
{
  "refresh": "string"
}
```

Refresh access token.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|refresh|string|true|none|none|

<h2 id="tocS_PaginatedCreditorAccountList">PaginatedCreditorAccountList</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedcreditoraccountlist"></a>
<a id="schema_PaginatedCreditorAccountList"></a>
<a id="tocSpaginatedcreditoraccountlist"></a>
<a id="tocspaginatedcreditoraccountlist"></a>

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?offset=400&limit=100",
  "previous": "http://api.example.org/accounts/?offset=200&limit=100",
  "results": [
    {
      "account": "string",
      "address_country": "st",
      "currency": "str",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "string",
      "type": "IBAN"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|false|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[CreditorAccount](#schemacreditoraccount)]|false|none|none|

<h2 id="tocS_PaginatedEndUserAgreementList">PaginatedEndUserAgreementList</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedenduseragreementlist"></a>
<a id="schema_PaginatedEndUserAgreementList"></a>
<a id="tocSpaginatedenduseragreementlist"></a>
<a id="tocspaginatedenduseragreementlist"></a>

```json
{
  "count": 123,
  "next": "https://ob.nordigen.com/api/v2/agreements/enduser/?limit=100&offset=0",
  "previous": "https://ob.nordigen.com/api/v2/agreements/enduser/?limit=100&offset=0",
  "results": [
    {
      "accepted": "1970-01-01T00:00:00Z",
      "access_scope": [
        "balances",
        "details",
        "transactions"
      ],
      "access_valid_for_days": 90,
      "created": "1970-01-01T00:00:00Z",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "institution_id": "string",
      "max_historical_days": 90
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|false|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[EndUserAgreement](#schemaenduseragreement)]|false|none|none|

<h2 id="tocS_PaginatedPaymentReadList">PaginatedPaymentReadList</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedpaymentreadlist"></a>
<a id="schema_PaginatedPaymentReadList"></a>
<a id="tocSpaginatedpaymentreadlist"></a>
<a id="tocspaginatedpaymentreadlist"></a>

```json
{
  "count": 123,
  "next": "http://api.example.org/accounts/?offset=400&limit=100",
  "previous": "http://api.example.org/accounts/?offset=200&limit=100",
  "results": [
    {
      "creditor_account": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "custom_payment_id": "string",
      "debtor_account": {
        "account": "string",
        "address_country": "st",
        "address_street": "string",
        "currency": "str",
        "name": "string",
        "post_code": "string",
        "type": "IBAN",
        "type_number": "string"
      },
      "description": "GOCARDLESS",
      "instructed_amount": {
        "amount": "string",
        "currency": "str"
      },
      "payment_id": "string",
      "payment_product": "ISCT",
      "payment_status": {},
      "payment_type": {},
      "redirect": "http://example.com"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|false|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[PaymentRead](#schemapaymentread)]|false|none|none|

<h2 id="tocS_PaginatedRequisitionV2List">PaginatedRequisitionV2List</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedrequisitionv2list"></a>
<a id="schema_PaginatedRequisitionV2List"></a>
<a id="tocSpaginatedrequisitionv2list"></a>
<a id="tocspaginatedrequisitionv2list"></a>

```json
{
  "count": 123,
  "next": "https://ob.nordigen.com/api/v2/requisitions/?limit=100&offset=0",
  "previous": "https://ob.nordigen.com/api/v2/requisitions/?limit=100&offset=0",
  "results": [
    {
      "account_selection": false,
      "accounts": [
        "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      ],
      "agreement": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "created": "1970-01-01T00:00:00Z",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "institution_id": "string",
      "link": "https://ob.nordigen.com/psd2/start/3fa85f64-5717-4562-b3fc-2c963f66afa6/{$INSTITUTION_ID}",
      "redirect": "http://example.com",
      "redirect_immediate": false,
      "reference": "string",
      "ssn": "string",
      "status": {},
      "user_language": "strin"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|false|none|none|
|next|string(uri) \| null|false|none|none|
|previous|string(uri) \| null|false|none|none|
|results|[[RequisitionV2](#schemarequisitionv2)]|false|none|none|

<h2 id="tocS_PaymentProductEnum">PaymentProductEnum</h2>
<!-- backwards compatibility -->
<a id="schemapaymentproductenum"></a>
<a id="schema_PaymentProductEnum"></a>
<a id="tocSpaymentproductenum"></a>
<a id="tocspaymentproductenum"></a>

```json
"T2P"
```

<h2 id="tocS_PaymentRead">PaymentRead</h2>
<!-- backwards compatibility -->
<a id="schemapaymentread"></a>
<a id="schema_PaymentRead"></a>
<a id="tocSpaymentread"></a>
<a id="tocspaymentread"></a>

```json
{
  "creditor_account": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "custom_payment_id": "string",
  "debtor_account": {
    "account": "string",
    "address_country": "st",
    "address_street": "string",
    "currency": "str",
    "name": "string",
    "post_code": "string",
    "type": "IBAN",
    "type_number": "string"
  },
  "description": "GOCARDLESS",
  "instructed_amount": {
    "amount": "string",
    "currency": "str"
  },
  "payment_id": "string",
  "payment_product": "ISCT",
  "payment_status": {},
  "payment_type": {},
  "redirect": "http://example.com"
}
```

PaymentReadSerializer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|creditor_account|string(uuid)|true|none|Registered creditor account|
|custom_payment_id|string|false|none|Payment Custom Payment ID|
|debtor_account|[DebtorAccountWrite](#schemadebtoraccountwrite)|true|none|Debtor account write serializer.|
|description|string|false|none|Payment description|
|instructed_amount|object|true|none|Instructed amount|
|payment_id|string|false|read-only|Payment ID|
|payment_product|object|false|none|Payment product|
|payment_status|object|false|read-only|Payment end to end identification|
|payment_type|object|false|read-only|Payment Type|
|redirect|string(uri) \| null|true|none|Redirect URL to your application after payment is done|

<h2 id="tocS_PaymentStatusEnum">PaymentStatusEnum</h2>
<!-- backwards compatibility -->
<a id="schemapaymentstatusenum"></a>
<a id="schema_PaymentStatusEnum"></a>
<a id="tocSpaymentstatusenum"></a>
<a id="tocspaymentstatusenum"></a>

```json
"INIT"
```

<h2 id="tocS_PaymentTypeEnum">PaymentTypeEnum</h2>
<!-- backwards compatibility -->
<a id="schemapaymenttypeenum"></a>
<a id="schema_PaymentTypeEnum"></a>
<a id="tocSpaymenttypeenum"></a>
<a id="tocspaymenttypeenum"></a>

```json
"single-payment"
```

<h2 id="tocS_PaymentWrite">PaymentWrite</h2>
<!-- backwards compatibility -->
<a id="schemapaymentwrite"></a>
<a id="schema_PaymentWrite"></a>
<a id="tocSpaymentwrite"></a>
<a id="tocspaymentwrite"></a>

```json
{
  "creditor_account": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "custom_payment_id": "string",
  "description": "GOCARDLESS",
  "instructed_amount": {
    "amount": "string",
    "currency": "str"
  },
  "link": "https://ob.nordigen.com/pis/start/83ca8de5-dbef-45fc-a137-f185d0e7a0d8/{$INSTITUTION_ID}",
  "payment_id": "string",
  "payment_product": "ISCT",
  "payment_status": {},
  "payment_type": {},
  "periodic_payment": {
    "day_of_execution": "string",
    "end_date": "1970-01-01",
    "execution_rule": "following",
    "frequency": "Monthly",
    "start_date": "1970-01-01"
  },
  "redirect": "http://example.com",
  "requested_execution_date": "1970-01-01"
}
```

PaymentWriteSerializer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|creditor_account|string(uuid)|true|none|Registered creditor account|
|custom_payment_id|string|false|none|Payment Custom Payment ID|
|description|string|false|none|Payment description|
|instructed_amount|object|true|none|Instructed amount|
|link|string(uri)|false|read-only|Link to initiate authorization with Institution|
|payment_id|string|false|read-only|Payment ID|
|payment_product|object|false|none|Payment product|
|payment_status|object|false|read-only|Payment end to end identification|
|payment_type|object|false|read-only|Payment Type|
|periodic_payment|[PeriodicPayment](#schemaperiodicpayment)|false|none|Periodic Payment Serializer.|
|redirect|string(uri) \| null|true|none|Redirect URL to your application after payment is done|
|requested_execution_date|string(date)|false|none|Payment Execution date (for periodic payments)|

<h2 id="tocS_PaymentWriteRequest">PaymentWriteRequest</h2>
<!-- backwards compatibility -->
<a id="schemapaymentwriterequest"></a>
<a id="schema_PaymentWriteRequest"></a>
<a id="tocSpaymentwriterequest"></a>
<a id="tocspaymentwriterequest"></a>

```json
{
  "creditor_account": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "custom_payment_id": "string",
  "debtor_account": {
    "account": "string",
    "address_country": "st",
    "address_street": "string",
    "currency": "str",
    "name": "string",
    "post_code": "string",
    "type": "IBAN",
    "type_number": "string"
  },
  "description": "GOCARDLESS",
  "institution_id": "SWEDBANK_SANDBOX_SANDLV22",
  "instructed_amount": {
    "amount": "string",
    "currency": "str"
  },
  "payment_product": "ISCT",
  "periodic_payment": {
    "day_of_execution": "string",
    "end_date": "1970-01-01",
    "execution_rule": "following",
    "frequency": "Monthly",
    "start_date": "1970-01-01"
  },
  "redirect": "http://example.com",
  "requested_execution_date": "1970-01-01"
}
```

PaymentWriteSerializer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|creditor_account|string(uuid)|true|none|Registered creditor account|
|custom_payment_id|string|false|none|Payment Custom Payment ID|
|debtor_account|object|false|write-only|Debtor account|
|description|string|false|none|Payment description|
|institution_id|string|false|write-only|Institution ID for Payment|
|instructed_amount|object|true|none|Instructed amount|
|payment_product|object|false|none|Payment product|
|periodic_payment|[PeriodicPaymentRequest](#schemaperiodicpaymentrequest)|false|none|Periodic Payment Serializer.|
|redirect|string(uri) \| null|true|none|Redirect URL to your application after payment is done|
|requested_execution_date|string(date)|false|none|Payment Execution date (for periodic payments)|

<h2 id="tocS_PeriodicPayment">PeriodicPayment</h2>
<!-- backwards compatibility -->
<a id="schemaperiodicpayment"></a>
<a id="schema_PeriodicPayment"></a>
<a id="tocSperiodicpayment"></a>
<a id="tocsperiodicpayment"></a>

```json
{
  "day_of_execution": "string",
  "end_date": "1970-01-01",
  "execution_rule": "following",
  "frequency": "Monthly",
  "start_date": "1970-01-01"
}
```

Periodic Payment Serializer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|day_of_execution|string|false|none|none|
|end_date|string(date)|false|none|none|
|execution_rule|object|false|none|Behavior when periodic payment dates fall on holiday.|
|frequency|object|false|none|none|
|start_date|string(date)|true|none|none|

<h2 id="tocS_PeriodicPaymentRequest">PeriodicPaymentRequest</h2>
<!-- backwards compatibility -->
<a id="schemaperiodicpaymentrequest"></a>
<a id="schema_PeriodicPaymentRequest"></a>
<a id="tocSperiodicpaymentrequest"></a>
<a id="tocsperiodicpaymentrequest"></a>

```json
{
  "day_of_execution": "string",
  "end_date": "1970-01-01",
  "execution_rule": "following",
  "frequency": "Monthly",
  "start_date": "1970-01-01"
}
```

Periodic Payment Serializer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|day_of_execution|string|false|none|none|
|end_date|string(date)|false|none|none|
|execution_rule|object|false|none|Behavior when periodic payment dates fall on holiday.|
|frequency|object|false|none|none|
|start_date|string(date)|true|none|none|

<h2 id="tocS_PremiumAccountQuery">PremiumAccountQuery</h2>
<!-- backwards compatibility -->
<a id="schemapremiumaccountquery"></a>
<a id="schema_PremiumAccountQuery"></a>
<a id="tocSpremiumaccountquery"></a>
<a id="tocspremiumaccountquery"></a>

```json
{
  "country": "AT",
  "date_from": "1970-01-01",
  "date_to": "1970-01-01"
}
```

Filter country.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|country|[CountryEnum](#schemacountryenum)|false|none|none|
|date_from|string(date)|false|none|none|
|date_to|string(date)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|country|AT|
|country|BE|
|country|BG|
|country|HR|
|country|CY|
|country|CZ|
|country|DK|
|country|EE|
|country|FI|
|country|FR|
|country|DE|
|country|GR|
|country|HU|
|country|IS|
|country|IE|
|country|IT|
|country|LV|
|country|LI|
|country|LT|
|country|LU|
|country|MT|
|country|NL|
|country|NO|
|country|PL|
|country|PT|
|country|RO|
|country|SK|
|country|SI|
|country|ES|
|country|SE|
|country|GB|

<h2 id="tocS_RequisitionLinkParamsRequest">RequisitionLinkParamsRequest</h2>
<!-- backwards compatibility -->
<a id="schemarequisitionlinkparamsrequest"></a>
<a id="schema_RequisitionLinkParamsRequest"></a>
<a id="tocSrequisitionlinkparamsrequest"></a>
<a id="tocsrequisitionlinkparamsrequest"></a>

```json
{
  "aspsp_id": "string"
}
```

RequisitionLinkParamsSerializer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aspsp_id|string|true|none|ASPSP ID. Should match one used while creating EUA, if it's linked to this requisition|

<h2 id="tocS_RequisitionLinks">RequisitionLinks</h2>
<!-- backwards compatibility -->
<a id="schemarequisitionlinks"></a>
<a id="schema_RequisitionLinks"></a>
<a id="tocSrequisitionlinks"></a>
<a id="tocsrequisitionlinks"></a>

```json
{
  "initiate": "http://example.com"
}
```

RequisitionLinksSerializer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|initiate|string(uri)|false|read-only|none|

<h2 id="tocS_RequisitionV2">RequisitionV2</h2>
<!-- backwards compatibility -->
<a id="schemarequisitionv2"></a>
<a id="schema_RequisitionV2"></a>
<a id="tocSrequisitionv2"></a>
<a id="tocsrequisitionv2"></a>

```json
{
  "account_selection": false,
  "accounts": [
    "497f6eca-6276-4993-bfeb-53cbbbba6f08"
  ],
  "agreement": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "created": "1970-01-01T00:00:00Z",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "institution_id": "string",
  "link": "https://ob.nordigen.com/psd2/start/3fa85f64-5717-4562-b3fc-2c963f66afa6/{$INSTITUTION_ID}",
  "redirect": "http://example.com",
  "redirect_immediate": false,
  "reference": "string",
  "ssn": "string",
  "status": {},
  "user_language": "strin"
}
```

RequisitionV2Serializer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_selection|boolean|false|none|option to enable account selection view for the end user|
|accounts|[string(uuid)]|false|read-only|array of account IDs retrieved within a scope of this requisition|
|agreement|string(uuid)|false|none|EUA associated with this requisition|
|created|string(date-time) \| null|false|read-only|The date & time at which the requisition was created.|
|id|string(uuid)|false|read-only|none|
|institution_id|string|true|none|an Institution ID for this Requisition|
|link|string(uri)|false|read-only|link to initiate authorization with Institution|
|redirect|string(uri) \| null|true|none|redirect URL to your application after end-user authorization with ASPSP|
|redirect_immediate|boolean|false|none|enable redirect back to the client after account list received|
|reference|string|false|none|additional ID to identify the end user|
|ssn|string|false|none|optional SSN field to verify ownership of the account|
|status|object|false|read-only|status of this requisition|
|user_language|string|false|none|A two-letter country code (ISO 639-1)|

<h2 id="tocS_RequisitionV2Request">RequisitionV2Request</h2>
<!-- backwards compatibility -->
<a id="schemarequisitionv2request"></a>
<a id="schema_RequisitionV2Request"></a>
<a id="tocSrequisitionv2request"></a>
<a id="tocsrequisitionv2request"></a>

```json
{
  "account_selection": false,
  "agreement": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "institution_id": "string",
  "redirect": "http://example.com",
  "redirect_immediate": false,
  "reference": "string",
  "ssn": "string",
  "user_language": "strin"
}
```

RequisitionV2Serializer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_selection|boolean|false|none|option to enable account selection view for the end user|
|agreement|string(uuid)|false|none|EUA associated with this requisition|
|institution_id|string|true|none|an Institution ID for this Requisition|
|redirect|string(uri) \| null|true|none|redirect URL to your application after end-user authorization with ASPSP|
|redirect_immediate|boolean|false|none|enable redirect back to the client after account list received|
|reference|string|false|none|additional ID to identify the end user|
|ssn|string|false|none|optional SSN field to verify ownership of the account|
|user_language|string|false|none|A two-letter country code (ISO 639-1)|

<h2 id="tocS_SpectacularJWTObtain">SpectacularJWTObtain</h2>
<!-- backwards compatibility -->
<a id="schemaspectacularjwtobtain"></a>
<a id="schema_SpectacularJWTObtain"></a>
<a id="tocSspectacularjwtobtain"></a>
<a id="tocsspectacularjwtobtain"></a>

```json
{
  "access": "string",
  "access_expires": 86400,
  "refresh": "string",
  "refresh_expires": 2592000
}
```

Obtain new JWT pair.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|access|string|false|read-only|Your access token|
|access_expires|integer|false|read-only|Access token expires in seconds|
|refresh|string|false|read-only|Your refresh token|
|refresh_expires|integer|false|read-only|Refresh token expires in seconds|

<h2 id="tocS_SpectacularJWTRefresh">SpectacularJWTRefresh</h2>
<!-- backwards compatibility -->
<a id="schemaspectacularjwtrefresh"></a>
<a id="schema_SpectacularJWTRefresh"></a>
<a id="tocSspectacularjwtrefresh"></a>
<a id="tocsspectacularjwtrefresh"></a>

```json
{
  "access": "string",
  "access_expires": 86400
}
```

Refresh Access token.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|access|string|false|read-only|Your access token|
|access_expires|integer|false|read-only|Access token expires in seconds|

<h2 id="tocS_SpectacularRequisitionV2">SpectacularRequisitionV2</h2>
<!-- backwards compatibility -->
<a id="schemaspectacularrequisitionv2"></a>
<a id="schema_SpectacularRequisitionV2"></a>
<a id="tocSspectacularrequisitionv2"></a>
<a id="tocsspectacularrequisitionv2"></a>

```json
{
  "account_selection": false,
  "accounts": [],
  "agreement": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "created": "1970-01-01T00:00:00Z",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "institution_id": "string",
  "link": "https://ob.nordigen.com/psd2/start/3fa85f64-5717-4562-b3fc-2c963f66afa6/{$INSTITUTION_ID}",
  "redirect": "http://example.com",
  "redirect_immediate": false,
  "reference": "string",
  "ssn": "string",
  "status": {},
  "user_language": "strin"
}
```

Create requisition.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_selection|boolean|false|none|option to enable account selection view for the end user|
|accounts|[object]|false|read-only|array of account IDs retrieved within a scope of this requisition|
|agreement|string(uuid)|false|none|EUA associated with this requisition|
|created|string(date-time) \| null|false|read-only|The date & time at which the requisition was created.|
|id|string(uuid)|false|read-only|none|
|institution_id|string|true|none|an Institution ID for this Requisition|
|link|string(uri)|false|read-only|link to initiate authorization with Institution|
|redirect|string(uri) \| null|true|none|redirect URL to your application after end-user authorization with ASPSP|
|redirect_immediate|boolean|false|none|enable redirect back to the client after account list received|
|reference|string|false|none|additional ID to identify the end user|
|ssn|string|false|none|optional SSN field to verify ownership of the account|
|status|object|false|read-only|status of this requisition|
|user_language|string|false|none|A two-letter country code (ISO 639-1)|

<h2 id="tocS_Status1c5Enum">Status1c5Enum</h2>
<!-- backwards compatibility -->
<a id="schemastatus1c5enum"></a>
<a id="schema_Status1c5Enum"></a>
<a id="tocSstatus1c5enum"></a>
<a id="tocsstatus1c5enum"></a>

```json
"CR"
```

<h2 id="tocS_TypeEnum">TypeEnum</h2>
<!-- backwards compatibility -->
<a id="schematypeenum"></a>
<a id="schema_TypeEnum"></a>
<a id="tocStypeenum"></a>
<a id="tocstypeenum"></a>

```json
"IBAN"
```
