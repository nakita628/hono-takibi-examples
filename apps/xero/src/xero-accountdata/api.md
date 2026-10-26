<h1 id="xero-account-data-api-beta">Xero Account Data API (Beta) v19.1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

**Beta:** this API is in beta. Endpoints, request parameters and response shapes may change before general availability.

The Account Data API provides read access to general ledger account data for a Xero organisation: account balances as at a date, account movements over a date range, and the individual account transactions behind them.

Base URLs:

* <a href="https://api.xero.com/accountdata.xro/1.0">https://api.xero.com/accountdata.xro/1.0</a> - Xero Account Data API base url

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
|accountdata.balances.read|Read general ledger account balances|
|accountdata.movements.read|Read general ledger account movements|
|accountdata.transactions.read|Read general ledger account transactions|

<h1 id="xero-account-data-api-beta-accountdata">AccountData</h1>

## Get the balance of each general ledger account as at a given date

<a id="opIdgetAccountBalances"></a>

> Code samples

```bash
curl 'https://api.xero.com/accountdata.xro/1.0/account-balances?accountingBasis=ACCRUAL&date=2024-12-31' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: 2ae32d9e-4711-4201-9f2a-ac80e5318359'
```

`GET /account-balances`

Retrieves account balances as at `date`, optionally including balances for one or
more prior comparison periods, and optionally filtered by account class, type,
account IDs, system account code, or tracking item.

### Filtering

- Filter by `class`, `type`, `accountIds`, and/or `systemAccountCodes`. These can be
  combined freely — when more than one is supplied, the server returns only accounts
  that match **all** of the supplied filters (an intersection, not a union).
- `type` values are matched case-sensitively, so use uppercase (for example `BANK`). Inventory
  asset accounts are reported as, and can only be filtered by, `INVENTORY`; filtering by
  their underlying account type does not match them.
- `trackingItemIds` and `unassignedToTrackingCategoryIds` can be used independently of
  the filters above to further narrow which accounts are returned.

### Comparison periods

- Supplying `comparisonPeriodCount` together with `comparisonPeriodSize` returns
  additional balances at prior points in time, in addition to the balance at `date`.
- The n-th comparison date is `date` shifted back n times `comparisonPeriodSize`. For `MONTH`,
  `QUARTER`, and `YEAR` sizes, a `date` that falls on the last day of its month keeps landing
  on the last day of the shifted month (so comparisons across February behave correctly).
- `comparisonPeriodCount` and `comparisonPeriodSize` must be supplied together.

### Bank accounts

Bank account data is only available to users with bank account view permission for the
organisation.

- If the request would include bank accounts and the user lacks this permission, it is
  rejected with `403 Forbidden`. A request is treated as including bank accounts when it
  has no account filters, filters by all five `class` values and nothing else, includes
  `BANK` in `type`, or lists a bank account in `accountIds`.
- For other requests (for example `class=ASSET`), bank accounts are silently excluded from
  the response for users without this permission, instead of the request being rejected.

### Results

Only accounts with a non-zero balance at a given date are returned; accounts and comparison
dates with a net-zero balance are omitted, so the response can be empty.

### Pagination

This endpoint does not paginate — all matching account balances are returned in a single
response.


<h3 id="get-the-balance-of-each-general-ledger-account-as-at-a-given-date-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountingBasis|query|string|true|Accounting basis for the balance calculation.|
|date|query|string(date)|true|The date to calculate account balances as at, in ISO 8601 format (YYYY-MM-DD).<br>|
|comparisonPeriodCount|query|integer(int32)|false|Number of additional comparison balances to return, each one further back in<br>time than the last. Must be supplied together with `comparisonPeriodSize`.<br><br>- **Minimum**: 1<br>- **Maximum**: 100<br>|
|comparisonPeriodSize|query|string|false|The unit of time each comparison period steps back by. Must be supplied<br>together with `comparisonPeriodCount`.<br>|
|accountIds|query|[string(uuid)]|false|Filter to specific account IDs (GUIDs). Repeat the parameter for multiple<br>accounts.<br><br>- **Maximum**: 50 account IDs<br>- **Validation**: Returns 404 if any ID does not exist for the organisation<br>|
|class|query|[string]|false|Account classes to filter by. Can be combined with other filters.|
|type|query|[string]|false|Account types to filter by (e.g. `BANK`, `CURRENT`, etc). Use `INVENTORY` to<br>match inventory asset accounts, regardless of their underlying account type.<br>Can be combined with other filters.<br>|
|systemAccountCodes|query|[string]|false|System account codes to filter by (e.g. `RETAINEDEARNINGS`,<br>`UNREALISEDGAINS`). Can be combined with other filters.<br>|
|trackingItemIds|query|[string(uuid)]|false|Filter to accounts assigned to any of the given tracking item IDs.|
|unassignedToTrackingCategoryIds|query|[string(uuid)]|false|Filter to accounts that are not assigned to any tracking option within the<br>given tracking category IDs.<br>|
|Xero-Tenant-Id|header|string(uuid)|true|The ID of the Xero organisation to query.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|accountingBasis|ACCRUAL|
|accountingBasis|CASH|
|comparisonPeriodSize|DAY|
|comparisonPeriodSize|WEEK|
|comparisonPeriodSize|MONTH|
|comparisonPeriodSize|QUARTER|
|comparisonPeriodSize|YEAR|
|class|ASSET|
|class|LIABILITY|
|class|EQUITY|
|class|REVENUE|
|class|EXPENSE|

> Example responses

> 200 Response

```json
{
  "accountBalances": [
    {
      "accountId": "88ed287a-d039-4dca-b3e9-b5f7b125e39b",
      "date": "2024-12-31",
      "balance": {
        "value": 5230,
        "type": "DEBIT"
      },
      "signedBalance": 5230,
      "account": {
        "code": "630",
        "name": "Inventory",
        "class": "ASSET",
        "type": "INVENTORY",
        "status": "ACTIVE",
        "systemAccountCode": "NONE"
      }
    }
  ]
}
```

> 400 Response

```json
{
  "fieldValidationErrors": [
    {
      "fieldName": "",
      "detail": "'comparisonPeriodCount' and 'comparisonPeriodSize' must be provided together."
    }
  ],
  "title": "Invalid Request",
  "status": 400,
  "detail": "Validation errors:\r\n'comparisonPeriodCount' and 'comparisonPeriodSize' must be provided together.\r\n"
}
```

> 401 Response

```json
{
  "Type": null,
  "Title": "Unauthorized",
  "Status": 401,
  "Detail": "AuthenticationUnsuccessful",
  "Instance": "76295f13-127d-4464-adde-18f181faf38c",
  "Extensions": {}
}
```

> 403 Response

```json
{
  "Type": null,
  "Title": "Forbidden",
  "Status": 403,
  "Detail": "AuthenticationUnsuccessful",
  "Instance": "07b4c7cd-b60d-4d8b-bd03-96a1244d1d3d",
  "Extensions": {}
}
```

> 404 Response

```json
{
  "title": "Not found",
  "status": 404,
  "detail": "Account not found."
}
```

<h3 id="get-the-balance-of-each-general-ledger-account-as-at-a-given-date-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success - returns account balances as at `date`.|[AccountBalancesResponse](#schemaaccountbalancesresponse)|
|400|Bad Request|**Bad Request** - The request failed validation. The body is a `ValidationProblem` with a<br>`fieldValidationErrors` array.<br><br>Common causes:<br>- A required parameter (`accountingBasis`, `date`) is missing, or a value is not a valid date or enum value<br>- `comparisonPeriodCount` supplied without `comparisonPeriodSize` (or vice versa)<br>- `comparisonPeriodCount` outside the 1-100 range<br>- More than 50 `accountIds` specified<br>- An empty value in `type` or `systemAccountCodes`<br>- The organisation is not active<br>|[ValidationProblem](#schemavalidationproblem)|
|401|Unauthorized|**Unauthorized** - Returned by the gateway when the access token is missing, invalid or expired (`Detail` is `AuthenticationUnsuccessful`), or does not include the scope this endpoint requires (`Detail` is `AuthorizationUnsuccessful` and `WWW-Authenticate` is `insufficient_scope`).<br>|[GatewayProblem](#schemagatewayproblem)|
|403|Forbidden|**Forbidden** - Returned by the gateway when `Xero-Tenant-Id` is missing, or the token is not authorised for that organisation (a `GatewayProblem` body).<br><br>The service also returns `403` with no response body when the user's role does not allow reading account balances, or when the request would include bank accounts and the user lacks bank account view permission (see Bank accounts above).<br>|[GatewayProblem](#schemagatewayproblem)|
|404|Not Found|**Not Found** - One or more requested `accountIds` or `systemAccountCodes` do not exist for this organisation, or the organisation was not found.<br>|[ProblemDetails](#schemaproblemdetails)|
|429|Too Many Requests|**Too Many Requests** - Returned by the gateway when the app has exceeded a rate limit. The response has no body. Wait the number of seconds in `Retry-After` before retrying; `X-Rate-Limit-Problem` says which limit was exceeded (for example `day` for the daily limit).<br>|None|
|500|Internal Server Error|**Internal Server Error** - An unexpected error occurred. The request can be retried. The response body is not guaranteed to follow a particular format.<br>|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|WWW-Authenticate|string||`Bearer`, or `insufficient_scope` when the token lacks the required scope.|
|401|Xero-Correlation-Id|string|uuid|The correlation ID of the request.|
|429|Retry-After|integer||Number of seconds to wait before retrying.|
|429|X-Rate-Limit-Problem|string||The limit that was exceeded, for example `day`.|
|429|X-DayLimit-Remaining|integer||Calls remaining for the app and organisation today.|
|429|Xero-Correlation-Id|string|uuid|The correlation ID of the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: accountdata.balances.read )
</aside>

## Get the net movement of each general ledger account over a date range

<a id="opIdgetAccountMovements"></a>

> Code samples

```bash
curl 'https://api.xero.com/accountdata.xro/1.0/account-movements?accountingBasis=ACCRUAL&startDate=2024-01-01&endDate=2024-12-31' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: 2ae32d9e-4711-4201-9f2a-ac80e5318359'
```

`GET /account-movements`

Retrieves account movements between `startDate` and `endDate`, optionally
including movements for one or more prior comparison periods of the same length,
and optionally filtered by account class, type, account IDs, system account code,
or tracking item.

### Filtering

- Filter by `class`, `type`, `accountIds`, and/or `systemAccountCodes`. These can be
  combined freely — when more than one is supplied, the server returns only accounts
  that match **all** of the supplied filters (an intersection, not a union).
- `type` values are matched case-sensitively, so use uppercase (for example `BANK`). Inventory
  asset accounts are reported as, and can only be filtered by, `INVENTORY`; filtering by
  their underlying account type does not match them.
- `trackingItemIds` and `unassignedToTrackingCategoryIds` can be used independently of
  the filters above to further narrow which accounts are returned.

### Comparison periods

- Supplying `comparisonPeriodCount` together with `comparisonPeriodSize` returns
  additional movements for prior date ranges of the same length, in addition to the
  movement between `startDate` and `endDate`.
- Each comparison range is calculated by moving the primary range back by
  `comparisonPeriodSize`, `comparisonPeriodCount` times. For `MONTH`, `QUARTER`, and
  `YEAR` sizes, range boundaries that fall on the last day of a month keep landing on
  the last day of the shifted month.
- `comparisonPeriodCount` and `comparisonPeriodSize` must be supplied together.
- The primary range and every comparison range must not overlap each other. A request
  whose periods would overlap is rejected with `400 Bad Request`. Ranges that share a single boundary day count as
  overlapping, which month-end adjustment can cause when shifting by `MONTH`, `QUARTER`, or
  `YEAR`.

### Bank accounts

Bank account data is only available to users with bank account view permission for the
organisation.

- If the request would include bank accounts and the user lacks this permission, it is
  rejected with `403 Forbidden`. A request is treated as including bank accounts when it
  has no account filters, filters by all five `class` values and nothing else, includes
  `BANK` in `type`, or lists a bank account in `accountIds`.
- For other requests (for example `class=ASSET`), bank accounts are silently excluded from
  the response for users without this permission, instead of the request being rejected.

### Pagination

This endpoint does not paginate — the full set of matching account movements is
returned in a single response.

### Results

Only combinations of account and date range with non-zero movement are returned; comparison
ranges are not zero-filled. The response is a flat list with no guaranteed ordering.


<h3 id="get-the-net-movement-of-each-general-ledger-account-over-a-date-range-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountingBasis|query|string|true|Accounting basis for the movement calculation.|
|startDate|query|string(date)|true|Start date of the movement range, in ISO 8601 format (YYYY-MM-DD).|
|endDate|query|string(date)|true|End date of the movement range, in ISO 8601 format (YYYY-MM-DD).|
|comparisonPeriodCount|query|integer(int32)|false|Number of additional comparison movements to return, each covering a range<br>further back in time than the last. Must be supplied together with<br>`comparisonPeriodSize`.<br><br>- **Minimum**: 1<br>- **Maximum**: 100<br>|
|comparisonPeriodSize|query|string|false|The unit of time each comparison range steps back by. Must be supplied<br>together with `comparisonPeriodCount`.<br>|
|accountIds|query|[string(uuid)]|false|Filter to specific account IDs (GUIDs). Repeat the parameter for multiple<br>accounts.<br><br>- **Maximum**: 50 account IDs<br>- **Validation**: Returns 404 if any ID does not exist for the organisation<br>|
|class|query|[string]|false|Account classes to filter by. Can be combined with other filters.|
|type|query|[string]|false|Account types to filter by (e.g. `BANK`, `CURRENT`, etc). Use `INVENTORY` to<br>match inventory asset accounts, regardless of their underlying account type.<br>Can be combined with other filters.<br>|
|systemAccountCodes|query|[string]|false|System account codes to filter by (e.g. `RETAINEDEARNINGS`,<br>`UNREALISEDGAINS`). Can be combined with other filters.<br>|
|trackingItemIds|query|[string(uuid)]|false|Filter to accounts assigned to any of the given tracking item IDs.|
|unassignedToTrackingCategoryIds|query|[string(uuid)]|false|Filter to accounts that are not assigned to any tracking option within the<br>given tracking category IDs.<br>|
|Xero-Tenant-Id|header|string(uuid)|true|The ID of the Xero organisation to query.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|accountingBasis|ACCRUAL|
|accountingBasis|CASH|
|comparisonPeriodSize|DAY|
|comparisonPeriodSize|WEEK|
|comparisonPeriodSize|MONTH|
|comparisonPeriodSize|QUARTER|
|comparisonPeriodSize|YEAR|
|class|ASSET|
|class|LIABILITY|
|class|EQUITY|
|class|REVENUE|
|class|EXPENSE|

> Example responses

> 200 Response

```json
{
  "accountMovements": [
    {
      "accountId": "88ed287a-d039-4dca-b3e9-b5f7b125e39b",
      "dateRange": {
        "startDate": "2024-01-01",
        "endDate": "2024-12-31"
      },
      "debits": 1200,
      "credits": 300,
      "movement": {
        "value": 900,
        "type": "DEBIT"
      },
      "signedMovement": 900,
      "taxDebits": 120,
      "taxCredits": 30,
      "signedTaxMovement": 90,
      "account": {
        "code": "630",
        "name": "Inventory",
        "class": "ASSET",
        "type": "INVENTORY",
        "status": "ACTIVE",
        "systemAccountCode": "NONE"
      }
    }
  ]
}
```

> 400 Response

```json
{
  "fieldValidationErrors": [
    {
      "fieldName": "",
      "detail": "The requested comparison periods overlap. Adjust the date range, 'comparisonPeriodSize', or 'comparisonPeriodCount' so the periods do not overlap."
    }
  ],
  "title": "Invalid Request",
  "status": 400,
  "detail": "Validation errors:\r\nThe requested comparison periods overlap. Adjust the date range, 'comparisonPeriodSize', or 'comparisonPeriodCount' so the periods do not overlap.\r\n"
}
```

> 401 Response

```json
{
  "Type": null,
  "Title": "Unauthorized",
  "Status": 401,
  "Detail": "AuthenticationUnsuccessful",
  "Instance": "76295f13-127d-4464-adde-18f181faf38c",
  "Extensions": {}
}
```

> 403 Response

```json
{
  "Type": null,
  "Title": "Forbidden",
  "Status": 403,
  "Detail": "AuthenticationUnsuccessful",
  "Instance": "07b4c7cd-b60d-4d8b-bd03-96a1244d1d3d",
  "Extensions": {}
}
```

> 404 Response

```json
{
  "title": "Not found",
  "status": 404,
  "detail": "Account not found."
}
```

<h3 id="get-the-net-movement-of-each-general-ledger-account-over-a-date-range-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success - returns account movements for the requested range(s).|[AccountMovementsResponse](#schemaaccountmovementsresponse)|
|400|Bad Request|**Bad Request** - The request failed validation. The body is a `ValidationProblem` with a<br>`fieldValidationErrors` array.<br><br>Common causes:<br>- A required parameter (`accountingBasis`, `startDate`, `endDate`) is missing, or a value is not a valid date or enum value<br>- `comparisonPeriodCount` supplied without `comparisonPeriodSize` (or vice versa)<br>- `comparisonPeriodCount` outside the 1-100 range<br>- The primary range and one or more comparison ranges overlap<br>- `startDate` after `endDate`<br>- More than 50 `accountIds` specified<br>- An empty value in `type` or `systemAccountCodes`<br>- The organisation is not active<br>|[ValidationProblem](#schemavalidationproblem)|
|401|Unauthorized|**Unauthorized** - Returned by the gateway when the access token is missing, invalid or expired (`Detail` is `AuthenticationUnsuccessful`), or does not include the scope this endpoint requires (`Detail` is `AuthorizationUnsuccessful` and `WWW-Authenticate` is `insufficient_scope`).<br>|[GatewayProblem](#schemagatewayproblem)|
|403|Forbidden|**Forbidden** - Returned by the gateway when `Xero-Tenant-Id` is missing, or the token is not authorised for that organisation (a `GatewayProblem` body).<br><br>The service also returns `403` with no response body when the user's role does not allow reading account movements, or when the request would include bank accounts and the user lacks bank account view permission (see Bank accounts above).<br>|[GatewayProblem](#schemagatewayproblem)|
|404|Not Found|**Not Found** - One or more requested `accountIds` or `systemAccountCodes` do not exist for this organisation, or the organisation was not found.<br>|[ProblemDetails](#schemaproblemdetails)|
|429|Too Many Requests|**Too Many Requests** - Returned by the gateway when the app has exceeded a rate limit. The response has no body. Wait the number of seconds in `Retry-After` before retrying; `X-Rate-Limit-Problem` says which limit was exceeded (for example `day` for the daily limit).<br>|None|
|500|Internal Server Error|**Internal Server Error** - An unexpected error occurred. The request can be retried. The response body is not guaranteed to follow a particular format.<br>|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|WWW-Authenticate|string||`Bearer`, or `insufficient_scope` when the token lacks the required scope.|
|401|Xero-Correlation-Id|string|uuid|The correlation ID of the request.|
|429|Retry-After|integer||Number of seconds to wait before retrying.|
|429|X-Rate-Limit-Problem|string||The limit that was exceeded, for example `day`.|
|429|X-DayLimit-Remaining|integer||Calls remaining for the app and organisation today.|
|429|Xero-Correlation-Id|string|uuid|The correlation ID of the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: accountdata.movements.read )
</aside>

## Get general ledger account transactions between two dates, with pagination and filtering

<a id="opIdgetAccountTransactions"></a>

> Code samples

```bash
curl https://api.xero.com/accountdata.xro/1.0/account-transactions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'Xero-Tenant-Id: 2ae32d9e-4711-4201-9f2a-ac80e5318359'
```

`GET /account-transactions`

Retrieves transactions posted between `startDate` and `endDate` (inclusive),
optionally filtered by account IDs, class, type, or system account code, with
cursor-based pagination for large result sets.

**First call:** omit `token`. Supply `accountingBasis`, `startDate`, and
`endDate` (all required), plus any optional filters.

**Continuation calls:** supply only `token`, taken from the previous response's
`pagination.nextToken`. Do not send any other query parameters — they are
ignored if present, since the original request is captured by the token.

### Pagination

- Results are returned in pages of 200 lines.
- Use `pagination.nextToken` from the response as the `token` query parameter to fetch
  the next page. Send only the `token` query parameter on continuation requests — all
  other query parameters are
  ignored on a continuation call, since the original request's parameters are already
  captured by the token.
- The `token` value is an opaque string. Treat it as an opaque string only — do not
  parse, modify, or construct it yourself. Tokens may expire.
- When `pagination` is `null`, you've reached the last page.
- The API captures a consistent snapshot at the time of the first request (via
  `maxJournalNumber`), so transactions added while you are paginating through a
  result set won't appear partway through, and won't cause duplicates or gaps.

### Filtering

- Filter by `accountIds`, `class`, `type`, and/or `systemAccountCodes`. These can be
  combined freely — when more than one is supplied, the server returns only
  transactions for accounts that match **all** of the supplied filters (an
  intersection, not a union).
- `type` values are matched case-sensitively, so use uppercase (for example `BANK`). Inventory
  asset accounts are reported as, and can only be filtered by, `INVENTORY`; filtering by
  their underlying account type does not match them.
- Use `systemAccountCodes=NONE` to match accounts that have no system account code.
- Filters are only read from the first request in a pagination sequence — see
  Pagination above.

### Bank accounts

Bank account transactions are only available to users with bank account view permission for
the organisation.

- If the user lacks this permission and the request includes `BANK` in `type`, or lists a
  bank account in `accountIds`, it is rejected with `403 Forbidden`.
- For all other requests, including unfiltered requests, bank account transactions are
  silently excluded from the results for users without this permission.


<h3 id="get-general-ledger-account-transactions-between-two-dates-with-pagination-and-filtering-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountingBasis|query|string|false|Accounting basis for the transaction query. Required on the first call;<br>not used (and ignored) on continuation calls made with `token`.<br>|
|startDate|query|string(date)|false|Start date in ISO 8601 format (YYYY-MM-DD). Required on the first call; not<br>used (and ignored) on continuation calls made with `token`.<br>|
|endDate|query|string(date)|false|End date in ISO 8601 format (YYYY-MM-DD). Required on the first call; not<br>used (and ignored) on continuation calls made with `token`.<br>|
|accountIds|query|[string(uuid)]|false|Filter to specific account IDs (GUIDs). Repeat the parameter for multiple<br>accounts. Only used on the first call.<br><br>- **Maximum**: 20 account IDs<br>- **Validation**: Returns 404 if any ID does not exist for the organisation<br>|
|class|query|[string]|false|Account classes to filter by. Can be combined with other filters. Only used<br>on the first call.<br>|
|type|query|[string]|false|Account types to filter by (e.g. `BANK`, `CURRENT`, etc). Use `INVENTORY` to<br>match inventory asset accounts, regardless of their underlying account type.<br>Can be combined with other filters. Only used on the first call.<br>|
|systemAccountCodes|query|[string]|false|System account codes to filter by (e.g. `RETAINEDEARNINGS`,<br>`UNREALISEDGAINS`). Use `NONE` to match accounts with no system account code.<br>Can be combined with other filters. Only used on the first call.<br>|
|include|query|[string]|false|Additional data to include in the response. Only used on the first call.<br>|
|maxJournalNumber|query|integer(int64)|false|Maximum journal number to include in results, for point-in-time queries. If<br>omitted, the server captures the current maximum journal number at the time<br>of the first request and reuses it for every subsequent page, so the whole<br>paginated result set is consistent as at the moment you started. Only used on<br>the first call.<br>|
|token|query|string|false|Continuation token from a previous response's `pagination.nextToken`. When<br>present, all other query parameters are ignored. Opaque — do not parse,<br>modify, or construct it.<br>|
|Xero-Tenant-Id|header|string(uuid)|true|The ID of the Xero organisation to query.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|accountingBasis|ACCRUAL|
|accountingBasis|CASH|
|class|ASSET|
|class|LIABILITY|
|class|EQUITY|
|class|REVENUE|
|class|EXPENSE|
|include|trackingCategories|

> Example responses

> 200 Response

```json
{
  "currencyCode": "USD",
  "maxJournalNumber": 546,
  "lines": [
    {
      "journalNumber": 546,
      "journalDate": "2024-12-31",
      "description": "Inventory Opening Balance",
      "account": {
        "id": "88ed287a-d039-4dca-b3e9-b5f7b125e39b",
        "code": "630",
        "name": "Inventory",
        "class": "ASSET",
        "type": "INVENTORY",
        "status": "ACTIVE",
        "systemAccountCode": "NONE"
      },
      "netAmount": {
        "value": 80,
        "type": "CREDIT"
      },
      "signedNetAmount": -80,
      "taxAmount": {
        "value": 0,
        "type": "CREDIT"
      },
      "signedTaxAmount": 0,
      "source": {
        "documentId": "4dbbb217-b8a6-42c1-acef-dc35ba440683",
        "documentType": "PURCHASE_ORDER",
        "eventType": "CREATE",
        "contactId": "1f2bdcdf-1c10-42b0-a6cc-f08ecd768a73",
        "contactName": "Acme Supplies",
        "reference": "PO-1042"
      },
      "taxRate": {
        "code": "OUTPUT",
        "name": "GST on Sales",
        "percentage": 10
      }
    }
  ],
  "pagination": {
    "pageSize": 200,
    "nextToken": "ZXhhbXBsZS1jb250aW51YXRpb24tdG9rZW4"
  }
}
```

> 400 Response

```json
{
  "fieldValidationErrors": [
    {
      "fieldName": "token",
      "detail": "The value for the 'token' parameter was invalid."
    }
  ],
  "title": "Invalid Request",
  "status": 400,
  "detail": "Validation errors:\r\nThe value for the 'token' parameter was invalid.\r\n"
}
```

> 401 Response

```json
{
  "Type": null,
  "Title": "Unauthorized",
  "Status": 401,
  "Detail": "AuthenticationUnsuccessful",
  "Instance": "76295f13-127d-4464-adde-18f181faf38c",
  "Extensions": {}
}
```

> 403 Response

```json
{
  "Type": null,
  "Title": "Forbidden",
  "Status": 403,
  "Detail": "AuthenticationUnsuccessful",
  "Instance": "07b4c7cd-b60d-4d8b-bd03-96a1244d1d3d",
  "Extensions": {}
}
```

> 404 Response

```json
{
  "title": "Account could not be found",
  "status": 404,
  "detail": "One or more of the specified account IDs could not be found."
}
```

<h3 id="get-general-ledger-account-transactions-between-two-dates-with-pagination-and-filtering-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success - returns account transactions with pagination.<br><br>- `lines`: transaction lines for this page (max 200)<br>- `pagination.nextToken`: token for the next page (`pagination` is `null` on the last page)<br>- `currencyCode`: organisation's base currency<br>- `maxJournalNumber`: the snapshot boundary used for pagination consistency<br>|[AccountTransactionsResponse](#schemaaccounttransactionsresponse)|
|400|Bad Request|**Bad Request** - The request failed validation. The body is a `ValidationProblem` with a<br>`fieldValidationErrors` array.<br><br>Common causes:<br>- A required first-call parameter (`accountingBasis`, `startDate`, `endDate`) is missing, or a value is not a valid date or enum value<br>- `endDate` before `startDate`<br>- More than 20, or no, `accountIds` specified<br>- An empty value in `type` or `systemAccountCodes`<br>- `include` has a value other than `trackingCategories`<br>- `maxJournalNumber` is negative<br>- Invalid `token`, or a `token` that is no longer valid<br>- The organisation is not active<br>|[ValidationProblem](#schemavalidationproblem)|
|401|Unauthorized|**Unauthorized** - Returned by the gateway when the access token is missing, invalid or expired (`Detail` is `AuthenticationUnsuccessful`), or does not include the scope this endpoint requires (`Detail` is `AuthorizationUnsuccessful` and `WWW-Authenticate` is `insufficient_scope`).<br>|[GatewayProblem](#schemagatewayproblem)|
|403|Forbidden|**Forbidden** - Returned by the gateway when `Xero-Tenant-Id` is missing, or the token is not authorised for that organisation (a `GatewayProblem` body).<br><br>The service also returns `403` with no response body when the user's role does not allow reading account transactions, or when the request would include bank accounts and the user lacks bank account view permission (see Bank accounts above).<br>|[GatewayProblem](#schemagatewayproblem)|
|404|Not Found|**Not Found** - One or more requested `accountIds` do not exist for this organisation, or the organisation was not found.<br>|[ProblemDetails](#schemaproblemdetails)|
|429|Too Many Requests|**Too Many Requests** - Returned by the gateway when the app has exceeded a rate limit. The response has no body. Wait the number of seconds in `Retry-After` before retrying; `X-Rate-Limit-Problem` says which limit was exceeded (for example `day` for the daily limit).<br>|None|
|500|Internal Server Error|**Internal Server Error** - An unexpected error occurred. The request can be retried. The response body is not guaranteed to follow a particular format.<br>|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|401|WWW-Authenticate|string||`Bearer`, or `insufficient_scope` when the token lacks the required scope.|
|401|Xero-Correlation-Id|string|uuid|The correlation ID of the request.|
|429|Retry-After|integer||Number of seconds to wait before retrying.|
|429|X-Rate-Limit-Problem|string||The limit that was exceeded, for example `day`.|
|429|X-DayLimit-Remaining|integer||Calls remaining for the app and organisation today.|
|429|Xero-Correlation-Id|string|uuid|The correlation ID of the request.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: accountdata.transactions.read )
</aside>

# Schemas

<h2 id="tocS_AccountBalancesResponse">AccountBalancesResponse</h2>
<!-- backwards compatibility -->
<a id="schemaaccountbalancesresponse"></a>
<a id="schema_AccountBalancesResponse"></a>
<a id="tocSaccountbalancesresponse"></a>
<a id="tocsaccountbalancesresponse"></a>

```json
{
  "accountBalances": [
    {
      "accountId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "date": "1970-01-01",
      "balance": {
        "value": 0,
        "type": "DEBIT"
      },
      "signedBalance": 0,
      "account": {
        "code": "string",
        "name": "string",
        "class": "ASSET",
        "type": "string",
        "status": "ACTIVE",
        "systemAccountCode": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountBalances|[[AccountBalance](#schemaaccountbalance)]|true|none|none|

<h2 id="tocS_AccountBalance">AccountBalance</h2>
<!-- backwards compatibility -->
<a id="schemaaccountbalance"></a>
<a id="schema_AccountBalance"></a>
<a id="tocSaccountbalance"></a>
<a id="tocsaccountbalance"></a>

```json
{
  "accountId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "date": "1970-01-01",
  "balance": {
    "value": 0,
    "type": "DEBIT"
  },
  "signedBalance": 0,
  "account": {
    "code": "string",
    "name": "string",
    "class": "ASSET",
    "type": "string",
    "status": "ACTIVE",
    "systemAccountCode": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|string(uuid)|true|none|The account this balance is for.|
|date|string(date)|true|none|The date this balance applies to (YYYY-MM-DD).|
|balance|[LedgerDecimal](#schemaledgerdecimal)|true|none|none|
|signedBalance|number(double)|true|none|Balance as a signed number (positive for debit, negative for credit).|
|account|[Account](#schemaaccount)|true|none|none|

<h2 id="tocS_Account">Account</h2>
<!-- backwards compatibility -->
<a id="schemaaccount"></a>
<a id="schema_Account"></a>
<a id="tocSaccount"></a>
<a id="tocsaccount"></a>

```json
{
  "code": "string",
  "name": "string",
  "class": "ASSET",
  "type": "string",
  "status": "ACTIVE",
  "systemAccountCode": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string \| null|false|none|none|
|name|string|true|none|none|
|class|string|true|none|none|
|type|string|true|none|Account type (e.g. `BANK`, `CURRENT`). Reported as `INVENTORY` for inventory<br>asset accounts, regardless of the account's underlying type.<br>|
|status|string|true|none|none|
|systemAccountCode|string|true|none|System account code, or `NONE` if the account has no system account code.|

#### Enumerated Values

|Property|Value|
|---|---|
|class|ASSET|
|class|LIABILITY|
|class|EQUITY|
|class|REVENUE|
|class|EXPENSE|
|status|ACTIVE|
|status|ARCHIVED|
|status|DELETED|

<h2 id="tocS_LedgerDecimal">LedgerDecimal</h2>
<!-- backwards compatibility -->
<a id="schemaledgerdecimal"></a>
<a id="schema_LedgerDecimal"></a>
<a id="tocSledgerdecimal"></a>
<a id="tocsledgerdecimal"></a>

```json
{
  "value": 0,
  "type": "DEBIT"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|number(double)|true|none|Amount value (always positive).|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|DEBIT|
|type|CREDIT|

<h2 id="tocS_ProblemDetails">ProblemDetails</h2>
<!-- backwards compatibility -->
<a id="schemaproblemdetails"></a>
<a id="schema_ProblemDetails"></a>
<a id="tocSproblemdetails"></a>
<a id="tocsproblemdetails"></a>

```json
{
  "type": "string",
  "title": "string",
  "status": 0,
  "detail": "string",
  "instance": "string"
}
```

Problem details for HTTP APIs, in the style of RFC 7807.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|URI reference identifying the problem type.|
|title|string|true|none|Short, human-readable summary.|
|status|integer|true|none|HTTP status code.|
|detail|string|false|none|Detailed explanation of the problem.|
|instance|string|false|none|URI reference identifying the specific occurrence.|

<h2 id="tocS_AccountMovementsResponse">AccountMovementsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaaccountmovementsresponse"></a>
<a id="schema_AccountMovementsResponse"></a>
<a id="tocSaccountmovementsresponse"></a>
<a id="tocsaccountmovementsresponse"></a>

```json
{
  "accountMovements": [
    {
      "accountId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "dateRange": {
        "startDate": "1970-01-01",
        "endDate": "1970-01-01"
      },
      "debits": 0,
      "credits": 0,
      "movement": {
        "value": 0,
        "type": "DEBIT"
      },
      "signedMovement": 0,
      "taxDebits": 0,
      "taxCredits": 0,
      "signedTaxMovement": 0,
      "account": {
        "code": "string",
        "name": "string",
        "class": "ASSET",
        "type": "string",
        "status": "ACTIVE",
        "systemAccountCode": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountMovements|[[AccountMovement](#schemaaccountmovement)]|true|none|none|

<h2 id="tocS_AccountMovement">AccountMovement</h2>
<!-- backwards compatibility -->
<a id="schemaaccountmovement"></a>
<a id="schema_AccountMovement"></a>
<a id="tocSaccountmovement"></a>
<a id="tocsaccountmovement"></a>

```json
{
  "accountId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "dateRange": {
    "startDate": "1970-01-01",
    "endDate": "1970-01-01"
  },
  "debits": 0,
  "credits": 0,
  "movement": {
    "value": 0,
    "type": "DEBIT"
  },
  "signedMovement": 0,
  "taxDebits": 0,
  "taxCredits": 0,
  "signedTaxMovement": 0,
  "account": {
    "code": "string",
    "name": "string",
    "class": "ASSET",
    "type": "string",
    "status": "ACTIVE",
    "systemAccountCode": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|string(uuid)|true|none|The account this movement is for.|
|dateRange|[AccountingDateRange](#schemaaccountingdaterange)|true|none|none|
|debits|number(double)|true|none|Total debits posted to this account within the date range.|
|credits|number(double)|true|none|Total credits posted to this account within the date range.|
|movement|[LedgerDecimal](#schemaledgerdecimal)|true|none|none|
|signedMovement|number(double)|true|none|Movement as a signed number (positive for debit, negative for credit).|
|taxDebits|number(double)|false|none|Total tax debits within the date range. Omitted from the response when tax values are not available.|
|taxCredits|number(double)|false|none|Total tax credits within the date range. Omitted from the response when tax values are not available.|
|signedTaxMovement|number(double)|false|none|Tax movement as a signed number (positive for debit, negative for credit). Omitted from the response when tax values are not available.|
|account|[Account](#schemaaccount)|true|none|none|

<h2 id="tocS_AccountingDateRange">AccountingDateRange</h2>
<!-- backwards compatibility -->
<a id="schemaaccountingdaterange"></a>
<a id="schema_AccountingDateRange"></a>
<a id="tocSaccountingdaterange"></a>
<a id="tocsaccountingdaterange"></a>

```json
{
  "startDate": "1970-01-01",
  "endDate": "1970-01-01"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|startDate|string(date)|true|none|none|
|endDate|string(date)|true|none|none|

<h2 id="tocS_AccountTransactionsResponse">AccountTransactionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaaccounttransactionsresponse"></a>
<a id="schema_AccountTransactionsResponse"></a>
<a id="tocSaccounttransactionsresponse"></a>
<a id="tocsaccounttransactionsresponse"></a>

```json
{
  "currencyCode": "USD",
  "maxJournalNumber": 546,
  "lines": [
    {
      "journalNumber": 0,
      "journalDate": "1970-01-01",
      "description": "string",
      "account": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "code": "string",
        "name": "string",
        "class": "ASSET",
        "type": "string",
        "status": "ACTIVE",
        "systemAccountCode": "string"
      },
      "netAmount": {
        "value": 0,
        "type": "DEBIT"
      },
      "signedNetAmount": 0,
      "taxAmount": {
        "value": 0,
        "type": "DEBIT"
      },
      "signedTaxAmount": 0,
      "source": {
        "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "documentType": "string",
        "eventType": "string",
        "contactId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "contactName": "string",
        "reference": "string"
      },
      "taxRate": {
        "code": "string",
        "name": "string",
        "percentage": 0
      },
      "trackingCategories": {
        "property1": {
          "categoryName": "string",
          "optionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "optionName": "string"
        },
        "property2": {
          "categoryName": "string",
          "optionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "optionName": "string"
        }
      }
    }
  ],
  "pagination": {
    "pageSize": 200,
    "nextToken": "ZXhhbXBsZS1jb250aW51YXRpb24tdG9rZW4"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currencyCode|string|true|none|Organisation's base currency code (ISO 4217).|
|maxJournalNumber|integer(int64)|true|none|Maximum journal number included in this result set. Captured at the first<br>request and held constant across all pages for consistency.<br>|
|lines|[[AccountTransactionLine](#schemaaccounttransactionline)]|true|none|Transaction lines for this page (max 200).|
|pagination|object \| null|false|none|Pagination metadata. `null` on the last page, including when there are no results.|

<h2 id="tocS_AccountTransactionLine">AccountTransactionLine</h2>
<!-- backwards compatibility -->
<a id="schemaaccounttransactionline"></a>
<a id="schema_AccountTransactionLine"></a>
<a id="tocSaccounttransactionline"></a>
<a id="tocsaccounttransactionline"></a>

```json
{
  "journalNumber": 0,
  "journalDate": "1970-01-01",
  "description": "string",
  "account": {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "code": "string",
    "name": "string",
    "class": "ASSET",
    "type": "string",
    "status": "ACTIVE",
    "systemAccountCode": "string"
  },
  "netAmount": {
    "value": 0,
    "type": "DEBIT"
  },
  "signedNetAmount": 0,
  "taxAmount": {
    "value": 0,
    "type": "DEBIT"
  },
  "signedTaxAmount": 0,
  "source": {
    "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "documentType": "string",
    "eventType": "string",
    "contactId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "contactName": "string",
    "reference": "string"
  },
  "taxRate": {
    "code": "string",
    "name": "string",
    "percentage": 0
  },
  "trackingCategories": {
    "property1": {
      "categoryName": "string",
      "optionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "optionName": "string"
    },
    "property2": {
      "categoryName": "string",
      "optionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "optionName": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|journalNumber|integer(int64)|true|none|Unique journal number for this transaction.|
|journalDate|string(date)|true|none|Accounting date of the transaction (YYYY-MM-DD).|
|description|string|true|none|Line description, falling back to the journal narration. Empty if neither is set.|
|account|[TransactionAccount](#schematransactionaccount)|true|none|none|
|netAmount|[LedgerDecimal](#schemaledgerdecimal)|true|none|none|
|signedNetAmount|number(double)|false|none|Net amount as a signed number (positive for debit, negative for credit).|
|taxAmount|[LedgerDecimal](#schemaledgerdecimal)|false|none|none|
|signedTaxAmount|number(double)|false|none|Tax amount as a signed number (positive for debit, negative for credit).|
|source|[LineSource](#schemalinesource)|true|none|The originating document/event for this transaction line. Always present; its fields are null when the source is unknown.|
|taxRate|[LineTaxRate](#schemalinetaxrate)|true|none|The tax rate applied to this transaction line. Always present; its fields are null when no tax rate applies.|
|trackingCategories|object|false|none|Present only when `include=trackingCategories` was requested, and omitted otherwise. Keys are<br>tracking category IDs (UUIDs); values describe the selected tracking option. The object is empty<br>when the line has no tracking.<br>|

<h2 id="tocS_LineSource">LineSource</h2>
<!-- backwards compatibility -->
<a id="schemalinesource"></a>
<a id="schema_LineSource"></a>
<a id="tocSlinesource"></a>
<a id="tocslinesource"></a>

```json
{
  "documentId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "documentType": "string",
  "eventType": "string",
  "contactId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "contactName": "string",
  "reference": "string"
}
```

The originating document/event for this transaction line. Always present; its fields are null when the source is unknown.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|documentId|string(uuid) \| null|false|none|none|
|documentType|string \| null|false|none|none|
|eventType|string \| null|false|none|none|
|contactId|string(uuid) \| null|false|none|none|
|contactName|string \| null|false|none|none|
|reference|string \| null|false|none|none|

<h2 id="tocS_LineTaxRate">LineTaxRate</h2>
<!-- backwards compatibility -->
<a id="schemalinetaxrate"></a>
<a id="schema_LineTaxRate"></a>
<a id="tocSlinetaxrate"></a>
<a id="tocslinetaxrate"></a>

```json
{
  "code": "string",
  "name": "string",
  "percentage": 0
}
```

The tax rate applied to this transaction line. Always present; its fields are null when no tax rate applies.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string \| null|false|none|none|
|name|string \| null|false|none|none|
|percentage|number(double) \| null|false|none|none|

<h2 id="tocS_TrackingItemDetails">TrackingItemDetails</h2>
<!-- backwards compatibility -->
<a id="schematrackingitemdetails"></a>
<a id="schema_TrackingItemDetails"></a>
<a id="tocStrackingitemdetails"></a>
<a id="tocstrackingitemdetails"></a>

```json
{
  "categoryName": "string",
  "optionId": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "optionName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|categoryName|string|true|none|none|
|optionId|string(uuid)|true|none|none|
|optionName|string|true|none|none|

<h2 id="tocS_TransactionAccount">TransactionAccount</h2>
<!-- backwards compatibility -->
<a id="schematransactionaccount"></a>
<a id="schema_TransactionAccount"></a>
<a id="tocStransactionaccount"></a>
<a id="tocstransactionaccount"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "code": "string",
  "name": "string",
  "class": "ASSET",
  "type": "string",
  "status": "ACTIVE",
  "systemAccountCode": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|none|
|code|string \| null|false|none|none|
|name|string|true|none|none|
|class|string|true|none|none|
|type|string|true|none|Account type (e.g. `BANK`, `CURRENT`). Reported as `INVENTORY` for inventory<br>asset accounts, regardless of the account's underlying type.<br>|
|status|string|true|none|none|
|systemAccountCode|string|true|none|System account code, or `NONE` if the account has no system account code.|

#### Enumerated Values

|Property|Value|
|---|---|
|class|ASSET|
|class|LIABILITY|
|class|EQUITY|
|class|REVENUE|
|class|EXPENSE|
|status|ACTIVE|
|status|ARCHIVED|
|status|DELETED|

<h2 id="tocS_FieldProblem">FieldProblem</h2>
<!-- backwards compatibility -->
<a id="schemafieldproblem"></a>
<a id="schema_FieldProblem"></a>
<a id="tocSfieldproblem"></a>
<a id="tocsfieldproblem"></a>

```json
{
  "fieldName": "string",
  "type": "string",
  "title": "string",
  "status": 0,
  "detail": "string",
  "instance": "string"
}
```

A single validation failure.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fieldName|string \| null|false|none|The name of the offending parameter, or an empty string when the failure is not tied to one parameter.|
|type|string \| null|false|none|none|
|title|string \| null|false|none|none|
|status|integer(int32) \| null|false|none|none|
|detail|string \| null|false|none|none|
|instance|string \| null|false|none|none|

<h2 id="tocS_ValidationProblem">ValidationProblem</h2>
<!-- backwards compatibility -->
<a id="schemavalidationproblem"></a>
<a id="schema_ValidationProblem"></a>
<a id="tocSvalidationproblem"></a>
<a id="tocsvalidationproblem"></a>

```json
{
  "type": "string",
  "title": "string",
  "status": 0,
  "detail": "string",
  "instance": "string",
  "fieldValidationErrors": [
    {
      "fieldName": "string",
      "type": "string",
      "title": "string",
      "status": 0,
      "detail": "string",
      "instance": "string"
    }
  ]
}
```

Returned with `400 Bad Request` when the request fails validation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|URI reference identifying the problem type.|
|title|string|false|none|Short, human-readable summary.|
|status|integer|false|none|HTTP status code.|
|detail|string|false|none|Detailed explanation of the problem.|
|instance|string|false|none|URI reference identifying the specific occurrence.|
|fieldValidationErrors|[[FieldProblem](#schemafieldproblem)]|false|none|none|

<h2 id="tocS_GatewayProblem">GatewayProblem</h2>
<!-- backwards compatibility -->
<a id="schemagatewayproblem"></a>
<a id="schema_GatewayProblem"></a>
<a id="tocSgatewayproblem"></a>
<a id="tocsgatewayproblem"></a>

```json
{
  "Type": "string",
  "Title": "Unauthorized",
  "Status": 0,
  "Detail": "string",
  "Instance": "string",
  "Extensions": {}
}
```

Error body produced by the Xero API gateway (authentication, authorisation and tenant checks). Note the PascalCase property names.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Type|string \| null|false|none|none|
|Title|string|true|none|none|
|Status|integer(int32)|true|none|none|
|Detail|string|false|none|none|
|Instance|string|false|none|The correlation ID of the request, also returned in the `Xero-Correlation-Id` header.|
|Extensions|object|false|none|none|
