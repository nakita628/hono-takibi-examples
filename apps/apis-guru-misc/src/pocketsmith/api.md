<h1 id="pocketsmith">PocketSmith v2.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The PocketSmith API

Base URLs:

* <a href="https://api.pocketsmith.com/v2">https://api.pocketsmith.com/v2</a> - Production

Email: <a href="mailto:api@pocketsmith.com">API Support</a> 

# Authentication

* API Key (developerKey)
    - Parameter Name: **X-Developer-Key**, in: header. If you want to build a tool just for yourself, be it a desktop widget to display your balances or a tool to import transactions from a bank without a bank feed, you can use our developer keys feature. You can issue yourself a key which will give you persistent API access to just your account. You should rotate your keys regularly.

- oAuth2 authentication. If you want to a create an app for PocketSmith that other PocketSmith users can use, you'll be using OAuth 2. To register an app with PocketSmith, please email us on api@pocketsmith.com. Let us know a bit about yourself and what you plan on building. When approved, you will be provided with your client_id and client_secret to start using OAuth. Then, check out our guide for integrating OAuth to get started.

    - Flow: authorizationCode
    - Authorization URL = [https://my.pocketsmith.com/oauth/authorize](https://my.pocketsmith.com/oauth/authorize)
    - Token URL = [https://api.pocketsmith.com/v2/oauth/access_token](https://api.pocketsmith.com/v2/oauth/access_token)

|Scope|Scope Description|
|---|---|
|accounts.read|Access to list and view transaction accounts|
|accounts.write|Access to update and delete transaction accounts|
|attachments.read|Access to view attachments|
|attachments.write|Ability to create, update and delete attachments|
|categories.read|Access to view categories|
|categories.write|Ability to edit and delete categories|
|events.read|Access to view events|
|events.write|Ability to create, update and delete events|
|transactions.read|Access to list and view accounts and transactions|
|transactions.write|Access to create, update and delete transactions|
|user.read|Access the user's details and preferences|
|user.write|Access to change the user's details and preferences|

<h1 id="pocketsmith-accounts">Accounts</h1>

## Get account

> Code samples

```bash
curl https://example.com/accounts/42 \
  -H 'Accept: application/json' \
  -H "X-Developer-Key: ${API_KEY}"
```

`GET /accounts/{id}`

Gets an account by its ID.

<h3 id="get-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|The unique identifier of the account.|

> Example responses

> 200 Response

```json
{
  "created_at": "2018-02-27",
  "currency_code": "NZD",
  "current_balance": 2694.39,
  "current_balance_date": "2018-02-27",
  "current_balance_exchange_rate": 1.5,
  "current_balance_in_base_currency": 4041.59,
  "id": 42,
  "is_net_worth": false,
  "primary_scenario": {
    "achieve_date": "string",
    "closing_balance": 5431.2,
    "closing_balance_date": "2018-02-27",
    "created_at": "2015-04-21T22:42:22Z",
    "current_balance": 5431.2,
    "current_balance_date": "2018-02-27",
    "current_balance_exchange_rate": 1.5,
    "current_balance_in_base_currency": 8146.8,
    "description": "string",
    "id": 42,
    "interest_rate": 2.4,
    "interest_rate_repeat_id": 4,
    "maximum-value": 42,
    "minimum-value": 4000,
    "safe_balance": 5431.2,
    "safe_balance_in_base_currency": 8146.8,
    "starting_balance": 2450,
    "starting_balance_date": "2018-02-27",
    "title": "Wedding",
    "type": "no-interest",
    "updated_at": "2015-04-21T22:42:22Z"
  },
  "primary_transaction_account": {
    "created_at": "2015-03-17T02:42:10Z",
    "currency_code": "NZD",
    "current_balance": 2694.39,
    "current_balance_date": "2015-07-03",
    "current_balance_exchange_rate": 1.5,
    "current_balance_in_base_currency": 4041.59,
    "id": 96027,
    "institution": {
      "created_at": "2015-04-21T22:42:22Z",
      "currency_code": "NZD",
      "id": 57,
      "title": "Bank of Foo",
      "updated_at": "2015-04-21T22:42:22Z"
    },
    "name": "Sample Credit",
    "number": "ASBCRD44554",
    "safe_balance": 2694.39,
    "safe_balance_in_base_currency": 4041.59,
    "starting_balance": 3547.45,
    "starting_balance_date": "2015-03-15",
    "type": "bank",
    "updated_at": "2015-07-02T22:14:49Z"
  },
  "safe_balance": 2694.39,
  "safe_balance_in_base_currency": 4041.59,
  "scenarios": [
    {
      "achieve_date": "string",
      "closing_balance": 5431.2,
      "closing_balance_date": "2018-02-27",
      "created_at": "2015-04-21T22:42:22Z",
      "current_balance": 5431.2,
      "current_balance_date": "2018-02-27",
      "current_balance_exchange_rate": 1.5,
      "current_balance_in_base_currency": 8146.8,
      "description": "string",
      "id": 42,
      "interest_rate": 2.4,
      "interest_rate_repeat_id": 4,
      "maximum-value": 42,
      "minimum-value": 4000,
      "safe_balance": 5431.2,
      "safe_balance_in_base_currency": 8146.8,
      "starting_balance": 2450,
      "starting_balance_date": "2018-02-27",
      "title": "Wedding",
      "type": "no-interest",
      "updated_at": "2015-04-21T22:42:22Z"
    }
  ],
  "title": "Bank of Foo",
  "transaction_accounts": [
    {
      "created_at": "2015-03-17T02:42:10Z",
      "currency_code": "NZD",
      "current_balance": 2694.39,
      "current_balance_date": "2015-07-03",
      "current_balance_exchange_rate": 1.5,
      "current_balance_in_base_currency": 4041.59,
      "id": 96027,
      "institution": {
        "created_at": "2015-04-21T22:42:22Z",
        "currency_code": "NZD",
        "id": 57,
        "title": "Bank of Foo",
        "updated_at": "2015-04-21T22:42:22Z"
      },
      "name": "Sample Credit",
      "number": "ASBCRD44554",
      "safe_balance": 2694.39,
      "safe_balance_in_base_currency": 4041.59,
      "starting_balance": 3547.45,
      "starting_balance_date": "2015-03-15",
      "type": "bank",
      "updated_at": "2015-07-02T22:14:49Z"
    }
  ],
  "type": "bank",
  "updated_at": "2018-02-27"
}
```

> 403 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

> 404 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

<h3 id="get-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Account](#schemaaccount)|
|403|Forbidden|Not Allowed|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developerKey
</aside>

## Update account

> Code samples

```bash
curl https://example.com/accounts/42 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Developer-Key: ${API_KEY}" \
  -d '{
    "currency_code": "NZD",
    "is_net_worth": false,
    "title": "Savings",
    "type": "bank"
  }'
```

`PUT /accounts/{id}`

Updates and returns an account by its ID.

> Body parameter

```json
{
  "currency_code": "NZD",
  "is_net_worth": false,
  "title": "Savings",
  "type": "bank"
}
```

<h3 id="update-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|The unique identifier of the account.|
|body|body|object|false|none|
|» currency_code|body|string|false|A new currency code for the account.|
|» is_net_worth|body|boolean|false|Whether the account is a net worth account.|
|» title|body|string|false|A new title for the account.|
|» type|body|string|false|The type of the account.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|bank|
|» type|credits|
|» type|cash|
|» type|loans|
|» type|mortgage|
|» type|stocks|
|» type|vehicle|
|» type|property|
|» type|insurance|
|» type|other_asset|
|» type|other_liability|

> Example responses

> 200 Response

```json
{
  "created_at": "2018-02-27",
  "currency_code": "NZD",
  "current_balance": 2694.39,
  "current_balance_date": "2018-02-27",
  "current_balance_exchange_rate": 1.5,
  "current_balance_in_base_currency": 4041.59,
  "id": 42,
  "is_net_worth": false,
  "primary_scenario": {
    "achieve_date": "string",
    "closing_balance": 5431.2,
    "closing_balance_date": "2018-02-27",
    "created_at": "2015-04-21T22:42:22Z",
    "current_balance": 5431.2,
    "current_balance_date": "2018-02-27",
    "current_balance_exchange_rate": 1.5,
    "current_balance_in_base_currency": 8146.8,
    "description": "string",
    "id": 42,
    "interest_rate": 2.4,
    "interest_rate_repeat_id": 4,
    "maximum-value": 42,
    "minimum-value": 4000,
    "safe_balance": 5431.2,
    "safe_balance_in_base_currency": 8146.8,
    "starting_balance": 2450,
    "starting_balance_date": "2018-02-27",
    "title": "Wedding",
    "type": "no-interest",
    "updated_at": "2015-04-21T22:42:22Z"
  },
  "primary_transaction_account": {
    "created_at": "2015-03-17T02:42:10Z",
    "currency_code": "NZD",
    "current_balance": 2694.39,
    "current_balance_date": "2015-07-03",
    "current_balance_exchange_rate": 1.5,
    "current_balance_in_base_currency": 4041.59,
    "id": 96027,
    "institution": {
      "created_at": "2015-04-21T22:42:22Z",
      "currency_code": "NZD",
      "id": 57,
      "title": "Bank of Foo",
      "updated_at": "2015-04-21T22:42:22Z"
    },
    "name": "Sample Credit",
    "number": "ASBCRD44554",
    "safe_balance": 2694.39,
    "safe_balance_in_base_currency": 4041.59,
    "starting_balance": 3547.45,
    "starting_balance_date": "2015-03-15",
    "type": "bank",
    "updated_at": "2015-07-02T22:14:49Z"
  },
  "safe_balance": 2694.39,
  "safe_balance_in_base_currency": 4041.59,
  "scenarios": [
    {
      "achieve_date": "string",
      "closing_balance": 5431.2,
      "closing_balance_date": "2018-02-27",
      "created_at": "2015-04-21T22:42:22Z",
      "current_balance": 5431.2,
      "current_balance_date": "2018-02-27",
      "current_balance_exchange_rate": 1.5,
      "current_balance_in_base_currency": 8146.8,
      "description": "string",
      "id": 42,
      "interest_rate": 2.4,
      "interest_rate_repeat_id": 4,
      "maximum-value": 42,
      "minimum-value": 4000,
      "safe_balance": 5431.2,
      "safe_balance_in_base_currency": 8146.8,
      "starting_balance": 2450,
      "starting_balance_date": "2018-02-27",
      "title": "Wedding",
      "type": "no-interest",
      "updated_at": "2015-04-21T22:42:22Z"
    }
  ],
  "title": "Bank of Foo",
  "transaction_accounts": [
    {
      "created_at": "2015-03-17T02:42:10Z",
      "currency_code": "NZD",
      "current_balance": 2694.39,
      "current_balance_date": "2015-07-03",
      "current_balance_exchange_rate": 1.5,
      "current_balance_in_base_currency": 4041.59,
      "id": 96027,
      "institution": {
        "created_at": "2015-04-21T22:42:22Z",
        "currency_code": "NZD",
        "id": 57,
        "title": "Bank of Foo",
        "updated_at": "2015-04-21T22:42:22Z"
      },
      "name": "Sample Credit",
      "number": "ASBCRD44554",
      "safe_balance": 2694.39,
      "safe_balance_in_base_currency": 4041.59,
      "starting_balance": 3547.45,
      "starting_balance_date": "2015-03-15",
      "type": "bank",
      "updated_at": "2015-07-02T22:14:49Z"
    }
  ],
  "type": "bank",
  "updated_at": "2018-02-27"
}
```

> 403 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

> 404 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

> 422 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

<h3 id="update-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Account](#schemaaccount)|
|403|Forbidden|Not Allowed|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|
|422|Unprocessable Entity|Validation Error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developerKey
</aside>

## Delete account

> Code samples

```bash
curl https://example.com/accounts/42 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-Developer-Key: ${API_KEY}"
```

`DELETE /accounts/{id}`

Deletes an account and all its data by ID, optionally merge scenarios into another account.

<h3 id="delete-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|The unique identifier of the account.|

> Example responses

> 403 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

> 404 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

> 422 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

<h3 id="delete-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|403|Forbidden|Not Allowed|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|
|422|Unprocessable Entity|Validation Error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developerKey
</aside>

## List accounts in institution

> Code samples

```bash
curl https://example.com/institutions/42/accounts \
  -H 'Accept: application/json' \
  -H "X-Developer-Key: ${API_KEY}"
```

`GET /institutions/{id}/accounts`

Lists accounts belonging to an institution by its ID.

<h3 id="list-accounts-in-institution-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|The unique identifier of the institution.|

> Example responses

> 200 Response

```json
[
  {
    "created_at": "2018-02-27",
    "currency_code": "NZD",
    "current_balance": 2694.39,
    "current_balance_date": "2018-02-27",
    "current_balance_exchange_rate": 1.5,
    "current_balance_in_base_currency": 4041.59,
    "id": 42,
    "is_net_worth": false,
    "primary_scenario": {
      "achieve_date": "string",
      "closing_balance": 5431.2,
      "closing_balance_date": "2018-02-27",
      "created_at": "2015-04-21T22:42:22Z",
      "current_balance": 5431.2,
      "current_balance_date": "2018-02-27",
      "current_balance_exchange_rate": 1.5,
      "current_balance_in_base_currency": 8146.8,
      "description": "string",
      "id": 42,
      "interest_rate": 2.4,
      "interest_rate_repeat_id": 4,
      "maximum-value": 42,
      "minimum-value": 4000,
      "safe_balance": 5431.2,
      "safe_balance_in_base_currency": 8146.8,
      "starting_balance": 2450,
      "starting_balance_date": "2018-02-27",
      "title": "Wedding",
      "type": "no-interest",
      "updated_at": "2015-04-21T22:42:22Z"
    },
    "primary_transaction_account": {
      "created_at": "2015-03-17T02:42:10Z",
      "currency_code": "NZD",
      "current_balance": 2694.39,
      "current_balance_date": "2015-07-03",
      "current_balance_exchange_rate": 1.5,
      "current_balance_in_base_currency": 4041.59,
      "id": 96027,
      "institution": {
        "created_at": "2015-04-21T22:42:22Z",
        "currency_code": "NZD",
        "id": 57,
        "title": "Bank of Foo",
        "updated_at": "2015-04-21T22:42:22Z"
      },
      "name": "Sample Credit",
      "number": "ASBCRD44554",
      "safe_balance": 2694.39,
      "safe_balance_in_base_currency": 4041.59,
      "starting_balance": 3547.45,
      "starting_balance_date": "2015-03-15",
      "type": "bank",
      "updated_at": "2015-07-02T22:14:49Z"
    },
    "safe_balance": 2694.39,
    "safe_balance_in_base_currency": 4041.59,
    "scenarios": [
      {
        "achieve_date": "string",
        "closing_balance": 5431.2,
        "closing_balance_date": "2018-02-27",
        "created_at": "2015-04-21T22:42:22Z",
        "current_balance": 5431.2,
        "current_balance_date": "2018-02-27",
        "current_balance_exchange_rate": 1.5,
        "current_balance_in_base_currency": 8146.8,
        "description": "string",
        "id": 42,
        "interest_rate": 2.4,
        "interest_rate_repeat_id": 4,
        "maximum-value": 42,
        "minimum-value": 4000,
        "safe_balance": 5431.2,
        "safe_balance_in_base_currency": 8146.8,
        "starting_balance": 2450,
        "starting_balance_date": "2018-02-27",
        "title": "Wedding",
        "type": "no-interest",
        "updated_at": "2015-04-21T22:42:22Z"
      }
    ],
    "title": "Bank of Foo",
    "transaction_accounts": [
      {
        "created_at": "2015-03-17T02:42:10Z",
        "currency_code": "NZD",
        "current_balance": 2694.39,
        "current_balance_date": "2015-07-03",
        "current_balance_exchange_rate": 1.5,
        "current_balance_in_base_currency": 4041.59,
        "id": 96027,
        "institution": {
          "created_at": "2015-04-21T22:42:22Z",
          "currency_code": "NZD",
          "id": 57,
          "title": "Bank of Foo",
          "updated_at": "2015-04-21T22:42:22Z"
        },
        "name": "Sample Credit",
        "number": "ASBCRD44554",
        "safe_balance": 2694.39,
        "safe_balance_in_base_currency": 4041.59,
        "starting_balance": 3547.45,
        "starting_balance_date": "2015-03-15",
        "type": "bank",
        "updated_at": "2015-07-02T22:14:49Z"
      }
    ],
    "type": "bank",
    "updated_at": "2018-02-27"
  }
]
```

> 403 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

> 404 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

<h3 id="list-accounts-in-institution-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|403|Forbidden|Not Allowed|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<h3 id="list-accounts-in-institution-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Account](#schemaaccount)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developerKey
</aside>

## List accounts in user

> Code samples

```bash
curl https://example.com/users/42/accounts \
  -H 'Accept: application/json' \
  -H "X-Developer-Key: ${API_KEY}"
```

`GET /users/{id}/accounts`

Lists all accounts belonging to the user by their ID.

<h3 id="list-accounts-in-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|The unique identifier of the user.|

> Example responses

> 200 Response

```json
[
  {
    "created_at": "2018-02-27",
    "currency_code": "NZD",
    "current_balance": 2694.39,
    "current_balance_date": "2018-02-27",
    "current_balance_exchange_rate": 1.5,
    "current_balance_in_base_currency": 4041.59,
    "id": 42,
    "is_net_worth": false,
    "primary_scenario": {
      "achieve_date": "string",
      "closing_balance": 5431.2,
      "closing_balance_date": "2018-02-27",
      "created_at": "2015-04-21T22:42:22Z",
      "current_balance": 5431.2,
      "current_balance_date": "2018-02-27",
      "current_balance_exchange_rate": 1.5,
      "current_balance_in_base_currency": 8146.8,
      "description": "string",
      "id": 42,
      "interest_rate": 2.4,
      "interest_rate_repeat_id": 4,
      "maximum-value": 42,
      "minimum-value": 4000,
      "safe_balance": 5431.2,
      "safe_balance_in_base_currency": 8146.8,
      "starting_balance": 2450,
      "starting_balance_date": "2018-02-27",
      "title": "Wedding",
      "type": "no-interest",
      "updated_at": "2015-04-21T22:42:22Z"
    },
    "primary_transaction_account": {
      "created_at": "2015-03-17T02:42:10Z",
      "currency_code": "NZD",
      "current_balance": 2694.39,
      "current_balance_date": "2015-07-03",
      "current_balance_exchange_rate": 1.5,
      "current_balance_in_base_currency": 4041.59,
      "id": 96027,
      "institution": {
        "created_at": "2015-04-21T22:42:22Z",
        "currency_code": "NZD",
        "id": 57,
        "title": "Bank of Foo",
        "updated_at": "2015-04-21T22:42:22Z"
      },
      "name": "Sample Credit",
      "number": "ASBCRD44554",
      "safe_balance": 2694.39,
      "safe_balance_in_base_currency": 4041.59,
      "starting_balance": 3547.45,
      "starting_balance_date": "2015-03-15",
      "type": "bank",
      "updated_at": "2015-07-02T22:14:49Z"
    },
    "safe_balance": 2694.39,
    "safe_balance_in_base_currency": 4041.59,
    "scenarios": [
      {
        "achieve_date": "string",
        "closing_balance": 5431.2,
        "closing_balance_date": "2018-02-27",
        "created_at": "2015-04-21T22:42:22Z",
        "current_balance": 5431.2,
        "current_balance_date": "2018-02-27",
        "current_balance_exchange_rate": 1.5,
        "current_balance_in_base_currency": 8146.8,
        "description": "string",
        "id": 42,
        "interest_rate": 2.4,
        "interest_rate_repeat_id": 4,
        "maximum-value": 42,
        "minimum-value": 4000,
        "safe_balance": 5431.2,
        "safe_balance_in_base_currency": 8146.8,
        "starting_balance": 2450,
        "starting_balance_date": "2018-02-27",
        "title": "Wedding",
        "type": "no-interest",
        "updated_at": "2015-04-21T22:42:22Z"
      }
    ],
    "title": "Bank of Foo",
    "transaction_accounts": [
      {
        "created_at": "2015-03-17T02:42:10Z",
        "currency_code": "NZD",
        "current_balance": 2694.39,
        "current_balance_date": "2015-07-03",
        "current_balance_exchange_rate": 1.5,
        "current_balance_in_base_currency": 4041.59,
        "id": 96027,
        "institution": {
          "created_at": "2015-04-21T22:42:22Z",
          "currency_code": "NZD",
          "id": 57,
          "title": "Bank of Foo",
          "updated_at": "2015-04-21T22:42:22Z"
        },
        "name": "Sample Credit",
        "number": "ASBCRD44554",
        "safe_balance": 2694.39,
        "safe_balance_in_base_currency": 4041.59,
        "starting_balance": 3547.45,
        "starting_balance_date": "2015-03-15",
        "type": "bank",
        "updated_at": "2015-07-02T22:14:49Z"
      }
    ],
    "type": "bank",
    "updated_at": "2018-02-27"
  }
]
```

> 403 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

> 404 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

<h3 id="list-accounts-in-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|403|Forbidden|Not Allowed|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<h3 id="list-accounts-in-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Account](#schemaaccount)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developerKey
</aside>

## Update the display order of accounts in user

> Code samples

```bash
curl https://example.com/users/42/accounts \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Developer-Key: ${API_KEY}" \
  -d '{
    "accounts": [
      {
        "created_at": "2018-02-27",
        "currency_code": "NZD",
        "current_balance": 2694.39,
        "current_balance_date": "2018-02-27",
        "current_balance_exchange_rate": 1.5,
        "current_balance_in_base_currency": 4041.59,
        "id": 42,
        "is_net_worth": false,
        "primary_scenario": {
          "achieve_date": "string",
          "closing_balance": 5431.2,
          "closing_balance_date": "2018-02-27",
          "created_at": "2015-04-21T22:42:22Z",
          "current_balance": 5431.2,
          "current_balance_date": "2018-02-27",
          "current_balance_exchange_rate": 1.5,
          "current_balance_in_base_currency": 8146.8,
          "description": "string",
          "id": 42,
          "interest_rate": 2.4,
          "interest_rate_repeat_id": 4,
          "maximum-value": 42,
          "minimum-value": 4000,
          "safe_balance": 5431.2,
          "safe_balance_in_base_currency": 8146.8,
          "starting_balance": 2450,
          "starting_balance_date": "2018-02-27",
          "title": "Wedding",
          "type": "no-interest",
          "updated_at": "2015-04-21T22:42:22Z"
        },
        "primary_transaction_account": {
          "created_at": "2015-03-17T02:42:10Z",
          "currency_code": "NZD",
          "current_balance": 2694.39,
          "current_balance_date": "2015-07-03",
          "current_balance_exchange_rate": 1.5,
          "current_balance_in_base_currency": 4041.59,
          "id": 96027,
          "institution": {
            "created_at": "2015-04-21T22:42:22Z",
            "currency_code": "NZD",
            "id": 57,
            "title": "Bank of Foo",
            "updated_at": "2015-04-21T22:42:22Z"
          },
          "name": "Sample Credit",
          "number": "ASBCRD44554",
          "safe_balance": 2694.39,
          "safe_balance_in_base_currency": 4041.59,
          "starting_balance": 3547.45,
          "starting_balance_date": "2015-03-15",
          "type": "bank",
          "updated_at": "2015-07-02T22:14:49Z"
        },
        "safe_balance": 2694.39,
        "safe_balance_in_base_currency": 4041.59,
        "scenarios": [
          {
            "achieve_date": "string",
            "closing_balance": 5431.2,
            "closing_balance_date": "2018-02-27",
            "created_at": "2015-04-21T22:42:22Z",
            "current_balance": 5431.2,
            "current_balance_date": "2018-02-27",
            "current_balance_exchange_rate": 1.5,
            "current_balance_in_base_currency": 8146.8,
            "description": "string",
            "id": 42,
            "interest_rate": 2.4,
            "interest_rate_repeat_id": 4,
            "maximum-value": 42,
            "minimum-value": 4000,
            "safe_balance": 5431.2,
            "safe_balance_in_base_currency": 8146.8,
            "starting_balance": 2450,
            "starting_balance_date": "2018-02-27",
            "title": "Wedding",
            "type": "no-interest",
            "updated_at": "2015-04-21T22:42:22Z"
          }
        ],
        "title": "Bank of Foo",
        "transaction_accounts": [
          {
            "created_at": "2015-03-17T02:42:10Z",
            "currency_code": "NZD",
            "current_balance": 2694.39,
            "current_balance_date": "2015-07-03",
            "current_balance_exchange_rate": 1.5,
            "current_balance_in_base_currency": 4041.59,
            "id": 96027,
            "institution": {
              "created_at": "2015-04-21T22:42:22Z",
              "currency_code": "NZD",
              "id": 57,
              "title": "Bank of Foo",
              "updated_at": "2015-04-21T22:42:22Z"
            },
            "name": "Sample Credit",
            "number": "ASBCRD44554",
            "safe_balance": 2694.39,
            "safe_balance_in_base_currency": 4041.59,
            "starting_balance": 3547.45,
            "starting_balance_date": "2015-03-15",
            "type": "bank",
            "updated_at": "2015-07-02T22:14:49Z"
          }
        ],
        "type": "bank",
        "updated_at": "2018-02-27"
      }
    ]
  }'
```

`PUT /users/{id}/accounts`

Updates the display order of accounts belonging to the user, by accepting an array of accounts in their new display order.

> Body parameter

```json
{
  "accounts": [
    {
      "created_at": "2018-02-27",
      "currency_code": "NZD",
      "current_balance": 2694.39,
      "current_balance_date": "2018-02-27",
      "current_balance_exchange_rate": 1.5,
      "current_balance_in_base_currency": 4041.59,
      "id": 42,
      "is_net_worth": false,
      "primary_scenario": {
        "achieve_date": "string",
        "closing_balance": 5431.2,
        "closing_balance_date": "2018-02-27",
        "created_at": "2015-04-21T22:42:22Z",
        "current_balance": 5431.2,
        "current_balance_date": "2018-02-27",
        "current_balance_exchange_rate": 1.5,
        "current_balance_in_base_currency": 8146.8,
        "description": "string",
        "id": 42,
        "interest_rate": 2.4,
        "interest_rate_repeat_id": 4,
        "maximum-value": 42,
        "minimum-value": 4000,
        "safe_balance": 5431.2,
        "safe_balance_in_base_currency": 8146.8,
        "starting_balance": 2450,
        "starting_balance_date": "2018-02-27",
        "title": "Wedding",
        "type": "no-interest",
        "updated_at": "2015-04-21T22:42:22Z"
      },
      "primary_transaction_account": {
        "created_at": "2015-03-17T02:42:10Z",
        "currency_code": "NZD",
        "current_balance": 2694.39,
        "current_balance_date": "2015-07-03",
        "current_balance_exchange_rate": 1.5,
        "current_balance_in_base_currency": 4041.59,
        "id": 96027,
        "institution": {
          "created_at": "2015-04-21T22:42:22Z",
          "currency_code": "NZD",
          "id": 57,
          "title": "Bank of Foo",
          "updated_at": "2015-04-21T22:42:22Z"
        },
        "name": "Sample Credit",
        "number": "ASBCRD44554",
        "safe_balance": 2694.39,
        "safe_balance_in_base_currency": 4041.59,
        "starting_balance": 3547.45,
        "starting_balance_date": "2015-03-15",
        "type": "bank",
        "updated_at": "2015-07-02T22:14:49Z"
      },
      "safe_balance": 2694.39,
      "safe_balance_in_base_currency": 4041.59,
      "scenarios": [
        {
          "achieve_date": "string",
          "closing_balance": 5431.2,
          "closing_balance_date": "2018-02-27",
          "created_at": "2015-04-21T22:42:22Z",
          "current_balance": 5431.2,
          "current_balance_date": "2018-02-27",
          "current_balance_exchange_rate": 1.5,
          "current_balance_in_base_currency": 8146.8,
          "description": "string",
          "id": 42,
          "interest_rate": 2.4,
          "interest_rate_repeat_id": 4,
          "maximum-value": 42,
          "minimum-value": 4000,
          "safe_balance": 5431.2,
          "safe_balance_in_base_currency": 8146.8,
          "starting_balance": 2450,
          "starting_balance_date": "2018-02-27",
          "title": "Wedding",
          "type": "no-interest",
          "updated_at": "2015-04-21T22:42:22Z"
        }
      ],
      "title": "Bank of Foo",
      "transaction_accounts": [
        {
          "created_at": "2015-03-17T02:42:10Z",
          "currency_code": "NZD",
          "current_balance": 2694.39,
          "current_balance_date": "2015-07-03",
          "current_balance_exchange_rate": 1.5,
          "current_balance_in_base_currency": 4041.59,
          "id": 96027,
          "institution": {
            "created_at": "2015-04-21T22:42:22Z",
            "currency_code": "NZD",
            "id": 57,
            "title": "Bank of Foo",
            "updated_at": "2015-04-21T22:42:22Z"
          },
          "name": "Sample Credit",
          "number": "ASBCRD44554",
          "safe_balance": 2694.39,
          "safe_balance_in_base_currency": 4041.59,
          "starting_balance": 3547.45,
          "starting_balance_date": "2015-03-15",
          "type": "bank",
          "updated_at": "2015-07-02T22:14:49Z"
        }
      ],
      "type": "bank",
      "updated_at": "2018-02-27"
    }
  ]
}
```

<h3 id="update-the-display-order-of-accounts-in-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|The unique identifier of the user.|
|body|body|object|false|none|
|» accounts|body|[[Account](#schemaaccount)]|true|List the account objects in their new display order.|

> Example responses

> 200 Response

```json
[
  {
    "created_at": "2018-02-27",
    "currency_code": "NZD",
    "current_balance": 2694.39,
    "current_balance_date": "2018-02-27",
    "current_balance_exchange_rate": 1.5,
    "current_balance_in_base_currency": 4041.59,
    "id": 42,
    "is_net_worth": false,
    "primary_scenario": {
      "achieve_date": "string",
      "closing_balance": 5431.2,
      "closing_balance_date": "2018-02-27",
      "created_at": "2015-04-21T22:42:22Z",
      "current_balance": 5431.2,
      "current_balance_date": "2018-02-27",
      "current_balance_exchange_rate": 1.5,
      "current_balance_in_base_currency": 8146.8,
      "description": "string",
      "id": 42,
      "interest_rate": 2.4,
      "interest_rate_repeat_id": 4,
      "maximum-value": 42,
      "minimum-value": 4000,
      "safe_balance": 5431.2,
      "safe_balance_in_base_currency": 8146.8,
      "starting_balance": 2450,
      "starting_balance_date": "2018-02-27",
      "title": "Wedding",
      "type": "no-interest",
      "updated_at": "2015-04-21T22:42:22Z"
    },
    "primary_transaction_account": {
      "created_at": "2015-03-17T02:42:10Z",
      "currency_code": "NZD",
      "current_balance": 2694.39,
      "current_balance_date": "2015-07-03",
      "current_balance_exchange_rate": 1.5,
      "current_balance_in_base_currency": 4041.59,
      "id": 96027,
      "institution": {
        "created_at": "2015-04-21T22:42:22Z",
        "currency_code": "NZD",
        "id": 57,
        "title": "Bank of Foo",
        "updated_at": "2015-04-21T22:42:22Z"
      },
      "name": "Sample Credit",
      "number": "ASBCRD44554",
      "safe_balance": 2694.39,
      "safe_balance_in_base_currency": 4041.59,
      "starting_balance": 3547.45,
      "starting_balance_date": "2015-03-15",
      "type": "bank",
      "updated_at": "2015-07-02T22:14:49Z"
    },
    "safe_balance": 2694.39,
    "safe_balance_in_base_currency": 4041.59,
    "scenarios": [
      {
        "achieve_date": "string",
        "closing_balance": 5431.2,
        "closing_balance_date": "2018-02-27",
        "created_at": "2015-04-21T22:42:22Z",
        "current_balance": 5431.2,
        "current_balance_date": "2018-02-27",
        "current_balance_exchange_rate": 1.5,
        "current_balance_in_base_currency": 8146.8,
        "description": "string",
        "id": 42,
        "interest_rate": 2.4,
        "interest_rate_repeat_id": 4,
        "maximum-value": 42,
        "minimum-value": 4000,
        "safe_balance": 5431.2,
        "safe_balance_in_base_currency": 8146.8,
        "starting_balance": 2450,
        "starting_balance_date": "2018-02-27",
        "title": "Wedding",
        "type": "no-interest",
        "updated_at": "2015-04-21T22:42:22Z"
      }
    ],
    "title": "Bank of Foo",
    "transaction_accounts": [
      {
        "created_at": "2015-03-17T02:42:10Z",
        "currency_code": "NZD",
        "current_balance": 2694.39,
        "current_balance_date": "2015-07-03",
        "current_balance_exchange_rate": 1.5,
        "current_balance_in_base_currency": 4041.59,
        "id": 96027,
        "institution": {
          "created_at": "2015-04-21T22:42:22Z",
          "currency_code": "NZD",
          "id": 57,
          "title": "Bank of Foo",
          "updated_at": "2015-04-21T22:42:22Z"
        },
        "name": "Sample Credit",
        "number": "ASBCRD44554",
        "safe_balance": 2694.39,
        "safe_balance_in_base_currency": 4041.59,
        "starting_balance": 3547.45,
        "starting_balance_date": "2015-03-15",
        "type": "bank",
        "updated_at": "2015-07-02T22:14:49Z"
      }
    ],
    "type": "bank",
    "updated_at": "2018-02-27"
  }
]
```

> 400 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

> 403 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

> 404 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

<h3 id="update-the-display-order-of-accounts-in-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|403|Forbidden|Not Allowed|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<h3 id="update-the-display-order-of-accounts-in-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Account](#schemaaccount)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developerKey
</aside>

## Create an account in user

> Code samples

```bash
curl https://example.com/users/42/accounts \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Developer-Key: ${API_KEY}" \
  -d '{
    "currency_code": "NZD",
    "institution_id": 42,
    "title": "Foo",
    "type": "bank"
  }'
```

`POST /users/{id}/accounts`

Creates and returns an account belonging to the user by their ID.

> Body parameter

```json
{
  "currency_code": "NZD",
  "institution_id": 42,
  "title": "Foo",
  "type": "bank"
}
```

<h3 id="create-an-account-in-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|The unique identifier of the user.|
|body|body|object|false|none|
|» currency_code|body|string|true|A currency code for the account.|
|» institution_id|body|integer|true|The ID of the institution to create this account in.|
|» title|body|string|true|A title for the account.|
|» type|body|string|true|The type of the account.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|bank|
|» type|credits|
|» type|cash|
|» type|loans|
|» type|mortgage|
|» type|stocks|
|» type|vehicle|
|» type|property|
|» type|insurance|
|» type|other_asset|
|» type|other_liability|

> Example responses

> 201 Response

```json
{
  "created_at": "2018-02-27",
  "currency_code": "NZD",
  "current_balance": 2694.39,
  "current_balance_date": "2018-02-27",
  "current_balance_exchange_rate": 1.5,
  "current_balance_in_base_currency": 4041.59,
  "id": 42,
  "is_net_worth": false,
  "primary_scenario": {
    "achieve_date": "string",
    "closing_balance": 5431.2,
    "closing_balance_date": "2018-02-27",
    "created_at": "2015-04-21T22:42:22Z",
    "current_balance": 5431.2,
    "current_balance_date": "2018-02-27",
    "current_balance_exchange_rate": 1.5,
    "current_balance_in_base_currency": 8146.8,
    "description": "string",
    "id": 42,
    "interest_rate": 2.4,
    "interest_rate_repeat_id": 4,
    "maximum-value": 42,
    "minimum-value": 4000,
    "safe_balance": 5431.2,
    "safe_balance_in_base_currency": 8146.8,
    "starting_balance": 2450,
    "starting_balance_date": "2018-02-27",
    "title": "Wedding",
    "type": "no-interest",
    "updated_at": "2015-04-21T22:42:22Z"
  },
  "primary_transaction_account": {
    "created_at": "2015-03-17T02:42:10Z",
    "currency_code": "NZD",
    "current_balance": 2694.39,
    "current_balance_date": "2015-07-03",
    "current_balance_exchange_rate": 1.5,
    "current_balance_in_base_currency": 4041.59,
    "id": 96027,
    "institution": {
      "created_at": "2015-04-21T22:42:22Z",
      "currency_code": "NZD",
      "id": 57,
      "title": "Bank of Foo",
      "updated_at": "2015-04-21T22:42:22Z"
    },
    "name": "Sample Credit",
    "number": "ASBCRD44554",
    "safe_balance": 2694.39,
    "safe_balance_in_base_currency": 4041.59,
    "starting_balance": 3547.45,
    "starting_balance_date": "2015-03-15",
    "type": "bank",
    "updated_at": "2015-07-02T22:14:49Z"
  },
  "safe_balance": 2694.39,
  "safe_balance_in_base_currency": 4041.59,
  "scenarios": [
    {
      "achieve_date": "string",
      "closing_balance": 5431.2,
      "closing_balance_date": "2018-02-27",
      "created_at": "2015-04-21T22:42:22Z",
      "current_balance": 5431.2,
      "current_balance_date": "2018-02-27",
      "current_balance_exchange_rate": 1.5,
      "current_balance_in_base_currency": 8146.8,
      "description": "string",
      "id": 42,
      "interest_rate": 2.4,
      "interest_rate_repeat_id": 4,
      "maximum-value": 42,
      "minimum-value": 4000,
      "safe_balance": 5431.2,
      "safe_balance_in_base_currency": 8146.8,
      "starting_balance": 2450,
      "starting_balance_date": "2018-02-27",
      "title": "Wedding",
      "type": "no-interest",
      "updated_at": "2015-04-21T22:42:22Z"
    }
  ],
  "title": "Bank of Foo",
  "transaction_accounts": [
    {
      "created_at": "2015-03-17T02:42:10Z",
      "currency_code": "NZD",
      "current_balance": 2694.39,
      "current_balance_date": "2015-07-03",
      "current_balance_exchange_rate": 1.5,
      "current_balance_in_base_currency": 4041.59,
      "id": 96027,
      "institution": {
        "created_at": "2015-04-21T22:42:22Z",
        "currency_code": "NZD",
        "id": 57,
        "title": "Bank of Foo",
        "updated_at": "2015-04-21T22:42:22Z"
      },
      "name": "Sample Credit",
      "number": "ASBCRD44554",
      "safe_balance": 2694.39,
      "safe_balance_in_base_currency": 4041.59,
      "starting_balance": 3547.45,
      "starting_balance_date": "2015-03-15",
      "type": "bank",
      "updated_at": "2015-07-02T22:14:49Z"
    }
  ],
  "type": "bank",
  "updated_at": "2018-02-27"
}
```

> 403 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

> 404 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

> 422 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

<h3 id="create-an-account-in-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[Account](#schemaaccount)|
|403|Forbidden|Not Allowed|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|
|422|Unprocessable Entity|Validation Error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developerKey
</aside>

<h1 id="pocketsmith-transactions">Transactions</h1>

## List transactions in account

> Code samples

```bash
curl https://example.com/accounts/42/transactions \
  -H 'Accept: application/json' \
  -H "X-Developer-Key: ${API_KEY}"
```

`GET /accounts/{id}/transactions`

Lists transactions belonging to an account by its ID.

<h3 id="list-transactions-in-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|The unique identifier of the account.|
|start_date|query|string|false|Limit to transactions on or after this date. Required if end_date is provided. If not provided, defaults to the furtherest date allowed by the user's subscription.|
|end_date|query|string|false|Limit to transactions on or before this date. Required if start_date is provided. If not provided, defaults to today's date.|
|updated_since|query|string|false|Limit to transactions updated since an ISO 8601 timestamp.|
|uncategorised|query|integer|false|Limit to uncategorised transactions.|
|type|query|string|false|Limit to transactions of this type.|
|needs_review|query|integer|false|Limit to transactions that need to be reviewed.|
|search|query|string|false|Limit to transactions matching a keyword search string. The provided string is matched against the transaction amount, account name, payee, category title, note, labels, and the date in ISO 8601 format.|
|page|query|integer|false|Choose a particular page of the results.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|debit|
|type|credit|

> Example responses

> 200 Response

```json
[
  {
    "amount": 34.6,
    "amount_in_base_currency": 51.9,
    "category": {
      "children": [
        {}
      ],
      "colour": "#00ff00",
      "created_at": "2015-08-16T02:17:02Z",
      "id": 1438154,
      "is_bill": true,
      "is_transfer": false,
      "parent_id": 42,
      "refund_behaviour": "credits_are_refunds",
      "roll_up": false,
      "title": "Beer",
      "updated_at": "2015-08-16T02:17:02Z"
    },
    "cheque_number": "503113643691",
    "closing_balance": 4312.32,
    "created_at": "2018-02-27T22:42:22Z",
    "date": "2018-02-27",
    "id": 42,
    "is_transfer": false,
    "labels": [
      "foo",
      "bar",
      "baz"
    ],
    "memo": "An example memo",
    "needs_review": true,
    "note": "I spent way too much on cheese here",
    "original_payee": "CARD4083ST MARTINS NEW WORLD CHRISTCHURCH",
    "payee": "St Martins New World",
    "status": "pending",
    "transaction_account": {
      "created_at": "2015-03-17T02:42:10Z",
      "currency_code": "NZD",
      "current_balance": 2694.39,
      "current_balance_date": "2015-07-03",
      "current_balance_exchange_rate": 1.5,
      "current_balance_in_base_currency": 4041.59,
      "id": 96027,
      "institution": {
        "created_at": "2015-04-21T22:42:22Z",
        "currency_code": "NZD",
        "id": 57,
        "title": "Bank of Foo",
        "updated_at": "2015-04-21T22:42:22Z"
      },
      "name": "Sample Credit",
      "number": "ASBCRD44554",
      "safe_balance": 2694.39,
      "safe_balance_in_base_currency": 4041.59,
      "starting_balance": 3547.45,
      "starting_balance_date": "2015-03-15",
      "type": "bank",
      "updated_at": "2015-07-02T22:14:49Z"
    },
    "type": "credit",
    "updated_at": "2018-02-27T22:42:22Z",
    "upload_source": "file"
  }
]
```

> 400 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

> 403 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

> 404 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

<h3 id="list-transactions-in-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|403|Forbidden|Not Allowed|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<h3 id="list-transactions-in-account-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Transaction](#schematransaction)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developerKey
</aside>

## List transactions in categories

> Code samples

```bash
curl https://example.com/categories/42%2C43/transactions \
  -H 'Accept: application/json' \
  -H "X-Developer-Key: ${API_KEY}"
```

`GET /categories/{id}/transactions`

Lists transactions belonging to one or more categories by their IDs.

<h3 id="list-transactions-in-categories-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|A comma-separated list of category IDs.|
|start_date|query|string|false|Limit to transactions on or after this date. Required if end_date is provided. If not provided, defaults to the furtherest date allowed by the user's subscription.|
|end_date|query|string|false|Limit to transactions on or before this date. Required if start_date is provided. If not provided, defaults to today's date.|
|updated_since|query|string|false|Limit to transactions updated since an ISO 8601 timestamp.|
|uncategorised|query|integer|false|Limit to uncategorised transactions.|
|type|query|string|false|Limit to transactions of this type.|
|needs_review|query|integer|false|Limit to transactions that need to be reviewed.|
|search|query|string|false|Limit to transactions matching a keyword search string. The provided string is matched against the transaction amount, account name, payee, category title, note, labels, and the date in ISO 8601 format.|
|page|query|integer|false|Choose a particular page of the results.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|debit|
|type|credit|

> Example responses

> 200 Response

```json
[
  {
    "amount": 34.6,
    "amount_in_base_currency": 51.9,
    "category": {
      "children": [
        {}
      ],
      "colour": "#00ff00",
      "created_at": "2015-08-16T02:17:02Z",
      "id": 1438154,
      "is_bill": true,
      "is_transfer": false,
      "parent_id": 42,
      "refund_behaviour": "credits_are_refunds",
      "roll_up": false,
      "title": "Beer",
      "updated_at": "2015-08-16T02:17:02Z"
    },
    "cheque_number": "503113643691",
    "closing_balance": 4312.32,
    "created_at": "2018-02-27T22:42:22Z",
    "date": "2018-02-27",
    "id": 42,
    "is_transfer": false,
    "labels": [
      "foo",
      "bar",
      "baz"
    ],
    "memo": "An example memo",
    "needs_review": true,
    "note": "I spent way too much on cheese here",
    "original_payee": "CARD4083ST MARTINS NEW WORLD CHRISTCHURCH",
    "payee": "St Martins New World",
    "status": "pending",
    "transaction_account": {
      "created_at": "2015-03-17T02:42:10Z",
      "currency_code": "NZD",
      "current_balance": 2694.39,
      "current_balance_date": "2015-07-03",
      "current_balance_exchange_rate": 1.5,
      "current_balance_in_base_currency": 4041.59,
      "id": 96027,
      "institution": {
        "created_at": "2015-04-21T22:42:22Z",
        "currency_code": "NZD",
        "id": 57,
        "title": "Bank of Foo",
        "updated_at": "2015-04-21T22:42:22Z"
      },
      "name": "Sample Credit",
      "number": "ASBCRD44554",
      "safe_balance": 2694.39,
      "safe_balance_in_base_currency": 4041.59,
      "starting_balance": 3547.45,
      "starting_balance_date": "2015-03-15",
      "type": "bank",
      "updated_at": "2015-07-02T22:14:49Z"
    },
    "type": "credit",
    "updated_at": "2018-02-27T22:42:22Z",
    "upload_source": "file"
  }
]
```

> 400 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

> 403 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

> 404 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

<h3 id="list-transactions-in-categories-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|403|Forbidden|Not Allowed|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<h3 id="list-transactions-in-categories-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Transaction](#schematransaction)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developerKey
</aside>

## List transactions in transaction account

> Code samples

```bash
curl https://example.com/transaction_accounts/42/transactions \
  -H 'Accept: application/json' \
  -H "X-Developer-Key: ${API_KEY}"
```

`GET /transaction_accounts/{id}/transactions`

Lists transactions belonging to a transaction account by its ID.

<h3 id="list-transactions-in-transaction-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|The unique identifier of the transaction account.|
|start_date|query|string|false|Limit to transactions on or after this date. Required if end_date is provided. If not provided, defaults to the furtherest date allowed by the user's subscription.|
|end_date|query|string|false|Limit to transactions on or before this date. Required if start_date is provided. If not provided, defaults to today's date.|
|updated_since|query|string|false|Limit to transactions updated since an ISO 8601 timestamp.|
|uncategorised|query|integer|false|Limit to uncategorised transactions.|
|type|query|string|false|Limit to transactions of this type.|
|needs_review|query|integer|false|Limit to transactions that need to be reviewed.|
|search|query|string|false|Limit to transactions matching a keyword search string. The provided string is matched against the transaction amount, account name, payee, category title, note, labels, and the date in ISO 8601 format.|
|page|query|integer|false|Choose a particular page of the results.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|debit|
|type|credit|

> Example responses

> 200 Response

```json
[
  {
    "amount": 34.6,
    "amount_in_base_currency": 51.9,
    "category": {
      "children": [
        {}
      ],
      "colour": "#00ff00",
      "created_at": "2015-08-16T02:17:02Z",
      "id": 1438154,
      "is_bill": true,
      "is_transfer": false,
      "parent_id": 42,
      "refund_behaviour": "credits_are_refunds",
      "roll_up": false,
      "title": "Beer",
      "updated_at": "2015-08-16T02:17:02Z"
    },
    "cheque_number": "503113643691",
    "closing_balance": 4312.32,
    "created_at": "2018-02-27T22:42:22Z",
    "date": "2018-02-27",
    "id": 42,
    "is_transfer": false,
    "labels": [
      "foo",
      "bar",
      "baz"
    ],
    "memo": "An example memo",
    "needs_review": true,
    "note": "I spent way too much on cheese here",
    "original_payee": "CARD4083ST MARTINS NEW WORLD CHRISTCHURCH",
    "payee": "St Martins New World",
    "status": "pending",
    "transaction_account": {
      "created_at": "2015-03-17T02:42:10Z",
      "currency_code": "NZD",
      "current_balance": 2694.39,
      "current_balance_date": "2015-07-03",
      "current_balance_exchange_rate": 1.5,
      "current_balance_in_base_currency": 4041.59,
      "id": 96027,
      "institution": {
        "created_at": "2015-04-21T22:42:22Z",
        "currency_code": "NZD",
        "id": 57,
        "title": "Bank of Foo",
        "updated_at": "2015-04-21T22:42:22Z"
      },
      "name": "Sample Credit",
      "number": "ASBCRD44554",
      "safe_balance": 2694.39,
      "safe_balance_in_base_currency": 4041.59,
      "starting_balance": 3547.45,
      "starting_balance_date": "2015-03-15",
      "type": "bank",
      "updated_at": "2015-07-02T22:14:49Z"
    },
    "type": "credit",
    "updated_at": "2018-02-27T22:42:22Z",
    "upload_source": "file"
  }
]
```

> 400 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

> 403 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

> 404 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

<h3 id="list-transactions-in-transaction-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|403|Forbidden|Not Allowed|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<h3 id="list-transactions-in-transaction-account-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Transaction](#schematransaction)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developerKey
</aside>

## Create a transaction in transaction account

> Code samples

```bash
curl https://example.com/transaction_accounts/42/transactions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Developer-Key: ${API_KEY}" \
  -d '{
    "amount": 11.5,
    "category_id": 42,
    "cheque_number": "string",
    "date": "2018-02-27",
    "is_transfer": false,
    "labels": "lunch,mexican",
    "memo": "string",
    "needs_review": false,
    "note": "I really enjoyed the loaded corn chips",
    "payee": "Tex Otago"
  }'
```

`POST /transaction_accounts/{id}/transactions`

Creates a transaction in a transaction account by its ID.

> Body parameter

```json
{
  "amount": 11.5,
  "category_id": 42,
  "cheque_number": "string",
  "date": "2018-02-27",
  "is_transfer": false,
  "labels": "lunch,mexican",
  "memo": "string",
  "needs_review": false,
  "note": "I really enjoyed the loaded corn chips",
  "payee": "Tex Otago"
}
```

<h3 id="create-a-transaction-in-transaction-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|The unique identifier of the transaction account.|
|body|body|object|false|none|
|» amount|body|number|true|The amount of the transaction. A positive amount is a credit, and a negative amount is a debit.|
|» category_id|body|integer|false|The unique identifier of a category for the transaction.|
|» cheque_number|body|string|false|A cheque number for the transaction.|
|» date|body|string|true|The date when the transaction occurred.|
|» is_transfer|body|boolean|false|Whether the transaction should be indicated as a transfer.|
|» labels|body|string|false|A set of comma-separated labels for the transaction.|
|» memo|body|string|false|A memo for the transaction.|
|» needs_review|body|boolean|false|Whether the transaction needs to be reviewed or not.|
|» note|body|string|false|A note for the transaction.|
|» payee|body|string|true|The payee/merchant of the transaction.|

> Example responses

> 201 Response

```json
{
  "amount": 34.6,
  "amount_in_base_currency": 51.9,
  "category": {
    "children": [
      {}
    ],
    "colour": "#00ff00",
    "created_at": "2015-08-16T02:17:02Z",
    "id": 1438154,
    "is_bill": true,
    "is_transfer": false,
    "parent_id": 42,
    "refund_behaviour": "credits_are_refunds",
    "roll_up": false,
    "title": "Beer",
    "updated_at": "2015-08-16T02:17:02Z"
  },
  "cheque_number": "503113643691",
  "closing_balance": 4312.32,
  "created_at": "2018-02-27T22:42:22Z",
  "date": "2018-02-27",
  "id": 42,
  "is_transfer": false,
  "labels": [
    "foo",
    "bar",
    "baz"
  ],
  "memo": "An example memo",
  "needs_review": true,
  "note": "I spent way too much on cheese here",
  "original_payee": "CARD4083ST MARTINS NEW WORLD CHRISTCHURCH",
  "payee": "St Martins New World",
  "status": "pending",
  "transaction_account": {
    "created_at": "2015-03-17T02:42:10Z",
    "currency_code": "NZD",
    "current_balance": 2694.39,
    "current_balance_date": "2015-07-03",
    "current_balance_exchange_rate": 1.5,
    "current_balance_in_base_currency": 4041.59,
    "id": 96027,
    "institution": {
      "created_at": "2015-04-21T22:42:22Z",
      "currency_code": "NZD",
      "id": 57,
      "title": "Bank of Foo",
      "updated_at": "2015-04-21T22:42:22Z"
    },
    "name": "Sample Credit",
    "number": "ASBCRD44554",
    "safe_balance": 2694.39,
    "safe_balance_in_base_currency": 4041.59,
    "starting_balance": 3547.45,
    "starting_balance_date": "2015-03-15",
    "type": "bank",
    "updated_at": "2015-07-02T22:14:49Z"
  },
  "type": "credit",
  "updated_at": "2018-02-27T22:42:22Z",
  "upload_source": "file"
}
```

> 403 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

> 404 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

> 422 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

<h3 id="create-a-transaction-in-transaction-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[Transaction](#schematransaction)|
|403|Forbidden|Not Allowed|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|
|422|Unprocessable Entity|Validation Error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developerKey
</aside>

## Get a transaction

> Code samples

```bash
curl https://example.com/transactions/42 \
  -H 'Accept: application/json' \
  -H "X-Developer-Key: ${API_KEY}"
```

`GET /transactions/{id}`

Gets a transaction by its ID.

<h3 id="get-a-transaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|The unique identifier of the transaction.|

> Example responses

> 200 Response

```json
{
  "amount": 34.6,
  "amount_in_base_currency": 51.9,
  "category": {
    "children": [
      {}
    ],
    "colour": "#00ff00",
    "created_at": "2015-08-16T02:17:02Z",
    "id": 1438154,
    "is_bill": true,
    "is_transfer": false,
    "parent_id": 42,
    "refund_behaviour": "credits_are_refunds",
    "roll_up": false,
    "title": "Beer",
    "updated_at": "2015-08-16T02:17:02Z"
  },
  "cheque_number": "503113643691",
  "closing_balance": 4312.32,
  "created_at": "2018-02-27T22:42:22Z",
  "date": "2018-02-27",
  "id": 42,
  "is_transfer": false,
  "labels": [
    "foo",
    "bar",
    "baz"
  ],
  "memo": "An example memo",
  "needs_review": true,
  "note": "I spent way too much on cheese here",
  "original_payee": "CARD4083ST MARTINS NEW WORLD CHRISTCHURCH",
  "payee": "St Martins New World",
  "status": "pending",
  "transaction_account": {
    "created_at": "2015-03-17T02:42:10Z",
    "currency_code": "NZD",
    "current_balance": 2694.39,
    "current_balance_date": "2015-07-03",
    "current_balance_exchange_rate": 1.5,
    "current_balance_in_base_currency": 4041.59,
    "id": 96027,
    "institution": {
      "created_at": "2015-04-21T22:42:22Z",
      "currency_code": "NZD",
      "id": 57,
      "title": "Bank of Foo",
      "updated_at": "2015-04-21T22:42:22Z"
    },
    "name": "Sample Credit",
    "number": "ASBCRD44554",
    "safe_balance": 2694.39,
    "safe_balance_in_base_currency": 4041.59,
    "starting_balance": 3547.45,
    "starting_balance_date": "2015-03-15",
    "type": "bank",
    "updated_at": "2015-07-02T22:14:49Z"
  },
  "type": "credit",
  "updated_at": "2018-02-27T22:42:22Z",
  "upload_source": "file"
}
```

> 403 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

> 404 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

<h3 id="get-a-transaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Transaction](#schematransaction)|
|403|Forbidden|Not Allowed|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developerKey
</aside>

## Update a transaction

> Code samples

```bash
curl https://example.com/transactions/42 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Developer-Key: ${API_KEY}" \
  -d '{
    "amount": 225,
    "category_id": 42,
    "cheque_number": "503113643691",
    "date": "2018-02-27",
    "is_transfer": false,
    "labels": "foo,bar,baz",
    "memo": "Rent",
    "needs_review": false,
    "note": "string",
    "payee": "Bill"
  }'
```

`PUT /transactions/{id}`

Updates a transaction by its ID.

> Body parameter

```json
{
  "amount": 225,
  "category_id": 42,
  "cheque_number": "503113643691",
  "date": "2018-02-27",
  "is_transfer": false,
  "labels": "foo,bar,baz",
  "memo": "Rent",
  "needs_review": false,
  "note": "string",
  "payee": "Bill"
}
```

<h3 id="update-a-transaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|The unique identifier of the transaction.|
|body|body|object|false|none|
|» amount|body|number|false|A new amount for the transaction.|
|» category_id|body|integer|false|The unique identifier of a new category for the transaction.|
|» cheque_number|body|string|false|A new cheque number for the transaction.|
|» date|body|string|false|A new date for the transaction.|
|» is_transfer|body|boolean|false|Whether the transaction is a transfer or not.|
|» labels|body|string|false|A new comma-separated set of labels for the transaction.|
|» memo|body|string|false|A new memo for the transaction.|
|» needs_review|body|boolean|false|Whether the transaction needs to be reviewed or not.|
|» note|body|string|false|A new note for the transaction.|
|» payee|body|string|false|A new payee for the transaction.|

> Example responses

> 200 Response

```json
{
  "amount": 34.6,
  "amount_in_base_currency": 51.9,
  "category": {
    "children": [
      {}
    ],
    "colour": "#00ff00",
    "created_at": "2015-08-16T02:17:02Z",
    "id": 1438154,
    "is_bill": true,
    "is_transfer": false,
    "parent_id": 42,
    "refund_behaviour": "credits_are_refunds",
    "roll_up": false,
    "title": "Beer",
    "updated_at": "2015-08-16T02:17:02Z"
  },
  "cheque_number": "503113643691",
  "closing_balance": 4312.32,
  "created_at": "2018-02-27T22:42:22Z",
  "date": "2018-02-27",
  "id": 42,
  "is_transfer": false,
  "labels": [
    "foo",
    "bar",
    "baz"
  ],
  "memo": "An example memo",
  "needs_review": true,
  "note": "I spent way too much on cheese here",
  "original_payee": "CARD4083ST MARTINS NEW WORLD CHRISTCHURCH",
  "payee": "St Martins New World",
  "status": "pending",
  "transaction_account": {
    "created_at": "2015-03-17T02:42:10Z",
    "currency_code": "NZD",
    "current_balance": 2694.39,
    "current_balance_date": "2015-07-03",
    "current_balance_exchange_rate": 1.5,
    "current_balance_in_base_currency": 4041.59,
    "id": 96027,
    "institution": {
      "created_at": "2015-04-21T22:42:22Z",
      "currency_code": "NZD",
      "id": 57,
      "title": "Bank of Foo",
      "updated_at": "2015-04-21T22:42:22Z"
    },
    "name": "Sample Credit",
    "number": "ASBCRD44554",
    "safe_balance": 2694.39,
    "safe_balance_in_base_currency": 4041.59,
    "starting_balance": 3547.45,
    "starting_balance_date": "2015-03-15",
    "type": "bank",
    "updated_at": "2015-07-02T22:14:49Z"
  },
  "type": "credit",
  "updated_at": "2018-02-27T22:42:22Z",
  "upload_source": "file"
}
```

> 403 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

> 404 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

> 422 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

<h3 id="update-a-transaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Transaction](#schematransaction)|
|403|Forbidden|Not Allowed|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|
|422|Unprocessable Entity|Validation Error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developerKey
</aside>

## Delete transaction

> Code samples

```bash
curl https://example.com/transactions/42 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-Developer-Key: ${API_KEY}"
```

`DELETE /transactions/{id}`

Deletes a transaction and all its data by ID.

<h3 id="delete-transaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|The unique identifier of the transaction.|

> Example responses

> 403 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

> 404 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

<h3 id="delete-transaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|403|Forbidden|Not Allowed|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developerKey
</aside>

## List transactions in user

> Code samples

```bash
curl https://example.com/users/42/transactions \
  -H 'Accept: application/json' \
  -H "X-Developer-Key: ${API_KEY}"
```

`GET /users/{id}/transactions`

Lists transactions belonging to a user by their ID.

<h3 id="list-transactions-in-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|The unique identifier of the account.|
|start_date|query|string|false|Limit to transactions on or after this date. Required if end_date is provided. If not provided, defaults to the furtherest date allowed by the user's subscription.|
|end_date|query|string|false|Limit to transactions on or before this date. Required if start_date is provided. If not provided, defaults to today's date.|
|updated_since|query|string|false|Limit to transactions updated since an ISO 8601 timestamp.|
|uncategorised|query|integer|false|Limit to uncategorised transactions.|
|type|query|string|false|Limit to transactions of this type.|
|needs_review|query|integer|false|Limit to transactions that need to be reviewed.|
|search|query|string|false|Limit to transactions matching a keyword search string. The provided string is matched against the transaction amount, account name, payee, category title, note, labels, and the date in ISO 8601 format.|
|page|query|integer|false|Choose a particular page of the results.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|debit|
|type|credit|

> Example responses

> 200 Response

```json
[
  {
    "amount": 34.6,
    "amount_in_base_currency": 51.9,
    "category": {
      "children": [
        {}
      ],
      "colour": "#00ff00",
      "created_at": "2015-08-16T02:17:02Z",
      "id": 1438154,
      "is_bill": true,
      "is_transfer": false,
      "parent_id": 42,
      "refund_behaviour": "credits_are_refunds",
      "roll_up": false,
      "title": "Beer",
      "updated_at": "2015-08-16T02:17:02Z"
    },
    "cheque_number": "503113643691",
    "closing_balance": 4312.32,
    "created_at": "2018-02-27T22:42:22Z",
    "date": "2018-02-27",
    "id": 42,
    "is_transfer": false,
    "labels": [
      "foo",
      "bar",
      "baz"
    ],
    "memo": "An example memo",
    "needs_review": true,
    "note": "I spent way too much on cheese here",
    "original_payee": "CARD4083ST MARTINS NEW WORLD CHRISTCHURCH",
    "payee": "St Martins New World",
    "status": "pending",
    "transaction_account": {
      "created_at": "2015-03-17T02:42:10Z",
      "currency_code": "NZD",
      "current_balance": 2694.39,
      "current_balance_date": "2015-07-03",
      "current_balance_exchange_rate": 1.5,
      "current_balance_in_base_currency": 4041.59,
      "id": 96027,
      "institution": {
        "created_at": "2015-04-21T22:42:22Z",
        "currency_code": "NZD",
        "id": 57,
        "title": "Bank of Foo",
        "updated_at": "2015-04-21T22:42:22Z"
      },
      "name": "Sample Credit",
      "number": "ASBCRD44554",
      "safe_balance": 2694.39,
      "safe_balance_in_base_currency": 4041.59,
      "starting_balance": 3547.45,
      "starting_balance_date": "2015-03-15",
      "type": "bank",
      "updated_at": "2015-07-02T22:14:49Z"
    },
    "type": "credit",
    "updated_at": "2018-02-27T22:42:22Z",
    "upload_source": "file"
  }
]
```

> 400 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

> 403 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

> 404 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

<h3 id="list-transactions-in-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|403|Forbidden|Not Allowed|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<h3 id="list-transactions-in-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Transaction](#schematransaction)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developerKey
</aside>

<h1 id="pocketsmith-attachments">Attachments</h1>

## Get attachment

> Code samples

```bash
curl https://example.com/attachments/42 \
  -H 'Accept: application/json' \
  -H "X-Developer-Key: ${API_KEY}"
```

`GET /attachments/{id}`

Gets a particular attachment by its ID.

<h3 id="get-attachment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|The unique identifier of the attachment.|

> Example responses

> 200 Response

```json
{
  "content_type": "image/png",
  "content_type_meta": {
    "description": "PNG image",
    "extension": "png",
    "title": "PNG"
  },
  "created_at": "2015-08-16T02:17:02Z",
  "file_name": "taxi.png",
  "id": 42,
  "original_url": "https://image.com/image.png",
  "title": "Invoice for taxi",
  "type": "image",
  "updated_at": "2015-08-16T02:17:02Z",
  "variants": {
    "large_url": "https://image.com/image.png",
    "thumb_url": "https://image.com/image.png"
  }
}
```

> 403 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

> 404 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

<h3 id="get-attachment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Attachment](#schemaattachment)|
|403|Forbidden|Not Allowed|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developerKey
</aside>

## Update attachment

> Code samples

```bash
curl https://example.com/attachments/42 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Developer-Key: ${API_KEY}" \
  -d '{
    "title": "Invoice for taxi"
  }'
```

`PUT /attachments/{id}`

Updates the title of the attachment.

> Body parameter

```json
{
  "title": "Invoice for taxi"
}
```

<h3 id="update-attachment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|The unique identifier of the attachment.|
|body|body|object|false|none|
|» title|body|string|false|The new title of the attachment. If the title is blank or not provided, the server will derive a title from the file name.|

> Example responses

> 200 Response

```json
{
  "content_type": "image/png",
  "content_type_meta": {
    "description": "PNG image",
    "extension": "png",
    "title": "PNG"
  },
  "created_at": "2015-08-16T02:17:02Z",
  "file_name": "taxi.png",
  "id": 42,
  "original_url": "https://image.com/image.png",
  "title": "Invoice for taxi",
  "type": "image",
  "updated_at": "2015-08-16T02:17:02Z",
  "variants": {
    "large_url": "https://image.com/image.png",
    "thumb_url": "https://image.com/image.png"
  }
}
```

> 403 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

> 404 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

> 422 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

<h3 id="update-attachment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Attachment](#schemaattachment)|
|403|Forbidden|Not Allowed|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|
|422|Unprocessable Entity|Validation Error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developerKey
</aside>

## Delete attachment

> Code samples

```bash
curl https://example.com/attachments/42 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-Developer-Key: ${API_KEY}"
```

`DELETE /attachments/{id}`

Deletes a particular attachment by its ID.

<h3 id="delete-attachment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|The unique identifier of the attachment.|

> Example responses

> 403 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

> 404 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

<h3 id="delete-attachment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|403|Forbidden|Not Allowed|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developerKey
</aside>

## List attachments in transaction

> Code samples

```bash
curl https://example.com/transactions/42/attachments \
  -H 'Accept: application/json' \
  -H "X-Developer-Key: ${API_KEY}"
```

`GET /transactions/{id}/attachments`

Lists attachments belonging to a transaction by their ID.

<h3 id="list-attachments-in-transaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|The unique identifier of the transaction.|

> Example responses

> 200 Response

```json
[
  {
    "content_type": "image/png",
    "content_type_meta": {
      "description": "PNG image",
      "extension": "png",
      "title": "PNG"
    },
    "created_at": "2015-08-16T02:17:02Z",
    "file_name": "taxi.png",
    "id": 42,
    "original_url": "https://image.com/image.png",
    "title": "Invoice for taxi",
    "type": "image",
    "updated_at": "2015-08-16T02:17:02Z",
    "variants": {
      "large_url": "https://image.com/image.png",
      "thumb_url": "https://image.com/image.png"
    }
  }
]
```

> 403 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

> 404 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

<h3 id="list-attachments-in-transaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|403|Forbidden|Not Allowed|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<h3 id="list-attachments-in-transaction-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Attachment](#schemaattachment)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developerKey
</aside>

## Assigns attachment to transaction

> Code samples

```bash
curl https://example.com/transactions/42/attachments \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Developer-Key: ${API_KEY}" \
  -d '{
    "attachment_id": 1438154
  }'
```

`POST /transactions/{id}/attachments`

Assigns an attachment to the transaction by their ID.

> Body parameter

```json
{
  "attachment_id": 1438154
}
```

<h3 id="assigns-attachment-to-transaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|The unique identifier of the transaction.|
|body|body|object|false|none|
|» attachment_id|body|integer|false|The unique identifier of the attachment.|

> Example responses

> 201 Response

```json
{
  "content_type": "image/png",
  "content_type_meta": {
    "description": "PNG image",
    "extension": "png",
    "title": "PNG"
  },
  "created_at": "2015-08-16T02:17:02Z",
  "file_name": "taxi.png",
  "id": 42,
  "original_url": "https://image.com/image.png",
  "title": "Invoice for taxi",
  "type": "image",
  "updated_at": "2015-08-16T02:17:02Z",
  "variants": {
    "large_url": "https://image.com/image.png",
    "thumb_url": "https://image.com/image.png"
  }
}
```

> 403 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

> 404 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

<h3 id="assigns-attachment-to-transaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[Attachment](#schemaattachment)|
|403|Forbidden|Not Allowed|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developerKey
</aside>

## Unassigns attachment in transaction

> Code samples

```bash
curl https://example.com/transactions/42/attachments/1438154 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-Developer-Key: ${API_KEY}"
```

`DELETE /transactions/{transaction_id}/attachments/{attachment_id}`

Unassigns a particular attachment by its ID from the transaction ID. This does not delete the attachment, it only removes its association from the transaction.

<h3 id="unassigns-attachment-in-transaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|transaction_id|path|integer|true|The unique identifier of the transaction.|
|attachment_id|path|integer|true|The unique identifier of the attachment.|

> Example responses

> 403 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

> 404 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

<h3 id="unassigns-attachment-in-transaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|403|Forbidden|Not Allowed|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developerKey
</aside>

## Lists attachments in user

> Code samples

```bash
curl https://example.com/users/42/attachments \
  -H 'Accept: application/json' \
  -H "X-Developer-Key: ${API_KEY}"
```

`GET /users/{id}/attachments`

Lists attachments belonging to a user by their ID.

<h3 id="lists-attachments-in-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|The unique identifier of the user.|
|unassigned|query|integer|false|If set, returns unassigned attachments, that are available for assigning to a transaction.|

> Example responses

> 200 Response

```json
[
  {
    "content_type": "image/png",
    "content_type_meta": {
      "description": "PNG image",
      "extension": "png",
      "title": "PNG"
    },
    "created_at": "2015-08-16T02:17:02Z",
    "file_name": "taxi.png",
    "id": 42,
    "original_url": "https://image.com/image.png",
    "title": "Invoice for taxi",
    "type": "image",
    "updated_at": "2015-08-16T02:17:02Z",
    "variants": {
      "large_url": "https://image.com/image.png",
      "thumb_url": "https://image.com/image.png"
    }
  }
]
```

> 403 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

> 404 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

<h3 id="lists-attachments-in-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|403|Forbidden|Not Allowed|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<h3 id="lists-attachments-in-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Attachment](#schemaattachment)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developerKey
</aside>

## Create attachment in user

> Code samples

```bash
curl https://example.com/users/42/attachments \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Developer-Key: ${API_KEY}" \
  -d '{
    "file_data": "string",
    "file_name": "taxi.png",
    "title": "Invoice for taxi"
  }'
```

`POST /users/{id}/attachments`

Creates an attachment belonging to the user by their ID.

> Body parameter

```json
{
  "file_data": "string",
  "file_name": "taxi.png",
  "title": "Invoice for taxi"
}
```

<h3 id="create-attachment-in-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|The unique identifier of the user.|
|body|body|object|false|none|
|» file_data|body|string(base64)|false|The base64-encoded contents of the source file. The supported file types are png, jpg, pdf, xls, xlsx, doc, docx.|
|» file_name|body|string|false|The file name of the attachment.|
|» title|body|string|false|The title of the attachment. If the title is blank or not provided, the title will derived from the file name.|

> Example responses

> 200 Response

```json
{
  "content_type": "image/png",
  "content_type_meta": {
    "description": "PNG image",
    "extension": "png",
    "title": "PNG"
  },
  "created_at": "2015-08-16T02:17:02Z",
  "file_name": "taxi.png",
  "id": 42,
  "original_url": "https://image.com/image.png",
  "title": "Invoice for taxi",
  "type": "image",
  "updated_at": "2015-08-16T02:17:02Z",
  "variants": {
    "large_url": "https://image.com/image.png",
    "thumb_url": "https://image.com/image.png"
  }
}
```

> 403 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

> 404 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

> 422 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

<h3 id="create-attachment-in-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Attachment](#schemaattachment)|
|403|Forbidden|Not Allowed|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|
|422|Unprocessable Entity|Validation Error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developerKey
</aside>

<h1 id="pocketsmith-categories">Categories</h1>

## Get category

> Code samples

```bash
curl https://example.com/categories/42 \
  -H 'Accept: application/json' \
  -H "X-Developer-Key: ${API_KEY}"
```

`GET /categories/{id}`

Gets a particular category by its ID.

<h3 id="get-category-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|The unique identifier of the category.|

> Example responses

> 200 Response

```json
{
  "children": [
    {}
  ],
  "colour": "#00ff00",
  "created_at": "2015-08-16T02:17:02Z",
  "id": 1438154,
  "is_bill": true,
  "is_transfer": false,
  "parent_id": 42,
  "refund_behaviour": "credits_are_refunds",
  "roll_up": false,
  "title": "Beer",
  "updated_at": "2015-08-16T02:17:02Z"
}
```

> 403 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

> 404 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

<h3 id="get-category-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Category](#schemacategory)|
|403|Forbidden|Not Allowed|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developerKey
</aside>

## Update category

> Code samples

```bash
curl https://example.com/categories/42 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Developer-Key: ${API_KEY}" \
  -d '{
    "colour": "#e0e7ff",
    "is_bill": true,
    "is_transfer": false,
    "parent_id": 42,
    "refund_behaviour": "credits_are_refunds",
    "roll_up": false,
    "title": "Food"
  }'
```

`PUT /categories/{id}`

Updates a category by its ID.

> Body parameter

```json
{
  "colour": "#e0e7ff",
  "is_bill": true,
  "is_transfer": false,
  "parent_id": 42,
  "refund_behaviour": "credits_are_refunds",
  "roll_up": false,
  "title": "Food"
}
```

<h3 id="update-category-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|The unique identifier of the category.|
|body|body|object|false|none|
|» colour|body|string|false|A new CSS-style hex colour for the category.|
|» is_bill|body|boolean|false|Set the category as a bill category.|
|» is_transfer|body|boolean|false|Set the category as a transfer category.|
|» parent_id|body|integer|false|The unique identifier of a parent category for the category, making this category a child of that category.|
|» refund_behaviour|body|string \| null|false|Set the refund behaviour of the category.|
|» roll_up|body|boolean|false|Set the category to be rolled up into its parent category.|
|» title|body|string|false|A new title for the category.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» refund_behaviour|debits_are_deductions|
|» refund_behaviour|credits_are_refunds|
|» refund_behaviour|null|

> Example responses

> 200 Response

```json
{
  "children": [
    {}
  ],
  "colour": "#00ff00",
  "created_at": "2015-08-16T02:17:02Z",
  "id": 1438154,
  "is_bill": true,
  "is_transfer": false,
  "parent_id": 42,
  "refund_behaviour": "credits_are_refunds",
  "roll_up": false,
  "title": "Beer",
  "updated_at": "2015-08-16T02:17:02Z"
}
```

> 403 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

> 404 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

> 422 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

<h3 id="update-category-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Category](#schemacategory)|
|403|Forbidden|Not Allowed|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|
|422|Unprocessable Entity|Validation Error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developerKey
</aside>

## Delete category

> Code samples

```bash
curl https://example.com/categories/42 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-Developer-Key: ${API_KEY}"
```

`DELETE /categories/{id}`

Deletes a particular category by its ID. This will delete all budgets within the category, and uncategorize all transactions assigned to the category.

<h3 id="delete-category-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|The unique identifier of the category.|

> Example responses

> 403 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

> 404 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

<h3 id="delete-category-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|403|Forbidden|Not Allowed|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developerKey
</aside>

## List categories in user

> Code samples

```bash
curl https://example.com/users/42/categories \
  -H 'Accept: application/json' \
  -H "X-Developer-Key: ${API_KEY}"
```

`GET /users/{id}/categories`

Lists all categories belonging to a user by their ID.

<h3 id="list-categories-in-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|The unique identifier of the user.|

> Example responses

> 200 Response

```json
[
  {
    "children": [
      {}
    ],
    "colour": "#00ff00",
    "created_at": "2015-08-16T02:17:02Z",
    "id": 1438154,
    "is_bill": true,
    "is_transfer": false,
    "parent_id": 42,
    "refund_behaviour": "credits_are_refunds",
    "roll_up": false,
    "title": "Beer",
    "updated_at": "2015-08-16T02:17:02Z"
  }
]
```

> 403 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

> 404 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

<h3 id="list-categories-in-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|403|Forbidden|Not Allowed|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<h3 id="list-categories-in-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Category](#schemacategory)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developerKey
</aside>

## Create category in user

> Code samples

```bash
curl https://example.com/users/42/categories \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Developer-Key: ${API_KEY}" \
  -d '{
    "colour": "#e0e7ff",
    "is_bill": true,
    "is_transfer": false,
    "parent_id": 42,
    "refund_behaviour": "credits_are_refunds",
    "roll_up": false,
    "title": "Food"
  }'
```

`POST /users/{id}/categories`

Creates a category belonging to the user by their ID.

> Body parameter

```json
{
  "colour": "#e0e7ff",
  "is_bill": true,
  "is_transfer": false,
  "parent_id": 42,
  "refund_behaviour": "credits_are_refunds",
  "roll_up": false,
  "title": "Food"
}
```

<h3 id="create-category-in-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|The unique identifier of the user.|
|body|body|object|false|none|
|» colour|body|string|false|A CSS-style hex colour for the category.|
|» is_bill|body|boolean|false|Set the category as a bill category.|
|» is_transfer|body|boolean|false|Set the category as a transfer category.|
|» parent_id|body|integer|false|The unique identifier of a category to be the parent of this category.|
|» refund_behaviour|body|string \| null|false|Set the refund behaviour of the category.|
|» roll_up|body|boolean|false|Set the category to be rolled up into its parent category.|
|» title|body|string|true|A title for the category.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» refund_behaviour|debits_are_deductions|
|» refund_behaviour|credits_are_refunds|
|» refund_behaviour|null|

> Example responses

> 201 Response

```json
{
  "children": [
    {}
  ],
  "colour": "#00ff00",
  "created_at": "2015-08-16T02:17:02Z",
  "id": 1438154,
  "is_bill": true,
  "is_transfer": false,
  "parent_id": 42,
  "refund_behaviour": "credits_are_refunds",
  "roll_up": false,
  "title": "Beer",
  "updated_at": "2015-08-16T02:17:02Z"
}
```

> 403 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

> 404 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

> 422 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

<h3 id="create-category-in-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[Category](#schemacategory)|
|403|Forbidden|Not Allowed|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|
|422|Unprocessable Entity|Validation Error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developerKey
</aside>

<h1 id="pocketsmith-category-rules">Category Rules</h1>

## Create category rule in category

> Code samples

```bash
curl https://example.com/categories/42/category_rules \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Developer-Key: ${API_KEY}" \
  -d '{
    "apply_to_all": false,
    "apply_to_uncategorised": true,
    "payee_matches": "Countdown"
  }'
```

`POST /categories/{id}/category_rules`

Creates a rule to allocate a category to transactions.

> Body parameter

```json
{
  "apply_to_all": false,
  "apply_to_uncategorised": true,
  "payee_matches": "Countdown"
}
```

<h3 id="create-category-rule-in-category-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|The unique identifier of the category.|
|body|body|object|false|none|
|» apply_to_all|body|boolean|false|Apply the created category rule to all transactions.|
|» apply_to_uncategorised|body|boolean|false|Apply the created category rule to all uncategorised transactions.|
|» payee_matches|body|string|true|The keyword/s to match the transaction payees.|

> Example responses

> 200 Response

```json
{
  "category": {
    "children": [
      {}
    ],
    "colour": "#00ff00",
    "created_at": "2015-08-16T02:17:02Z",
    "id": 1438154,
    "is_bill": true,
    "is_transfer": false,
    "parent_id": 42,
    "refund_behaviour": "credits_are_refunds",
    "roll_up": false,
    "title": "Beer",
    "updated_at": "2015-08-16T02:17:02Z"
  },
  "created_at": "2019-07-09T10:06:02Z",
  "id": 1438154,
  "payee_matches": "Countdown",
  "updated_at": "2019-07-09T10:06:02Z"
}
```

> 403 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

> 404 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

> 422 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

<h3 id="create-category-rule-in-category-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CategoryRule](#schemacategoryrule)|
|403|Forbidden|Not Allowed|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|
|422|Unprocessable Entity|Validation Error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developerKey
</aside>

## List category rules in user

> Code samples

```bash
curl https://example.com/users/42/category_rules \
  -H 'Accept: application/json' \
  -H "X-Developer-Key: ${API_KEY}"
```

`GET /users/{id}/category_rules`

Lists all category rules belonging to a user by their ID.

<h3 id="list-category-rules-in-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|The unique identifier of the user.|

> Example responses

> 200 Response

```json
[
  {
    "category": {
      "children": [
        {}
      ],
      "colour": "#00ff00",
      "created_at": "2015-08-16T02:17:02Z",
      "id": 1438154,
      "is_bill": true,
      "is_transfer": false,
      "parent_id": 42,
      "refund_behaviour": "credits_are_refunds",
      "roll_up": false,
      "title": "Beer",
      "updated_at": "2015-08-16T02:17:02Z"
    },
    "created_at": "2019-07-09T10:06:02Z",
    "id": 1438154,
    "payee_matches": "Countdown",
    "updated_at": "2019-07-09T10:06:02Z"
  }
]
```

> 403 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

> 404 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

<h3 id="list-category-rules-in-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|403|Forbidden|Not Allowed|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<h3 id="list-category-rules-in-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[CategoryRule](#schemacategoryrule)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developerKey
</aside>

<h1 id="pocketsmith-currencies">Currencies</h1>

## List currencies

> Code samples

```bash
curl https://example.com/currencies \
  -H 'Accept: application/json' \
  -H "X-Developer-Key: ${API_KEY}"
```

`GET /currencies`

Lists currencies supported by PocketSmith.

> Example responses

> 200 Response

```json
[
  {
    "id": "nzd",
    "minor_unit": 2,
    "name": "New Zealand Dollar",
    "separators": {
      "major": ",",
      "minor": "."
    },
    "symbol": "$"
  }
]
```

<h3 id="list-currencies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="list-currencies-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Currency](#schemacurrency)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developerKey
</aside>

## Get currency

> Code samples

```bash
curl https://example.com/currencies/nzd \
  -H 'Accept: application/json' \
  -H "X-Developer-Key: ${API_KEY}"
```

`GET /currencies/{id}`

Gets a particular currency by its ID.

<h3 id="get-currency-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique identifier of the currency.|

> Example responses

> 200 Response

```json
{
  "id": "nzd",
  "minor_unit": 2,
  "name": "New Zealand Dollar",
  "separators": {
    "major": ",",
    "minor": "."
  },
  "symbol": "$"
}
```

> 404 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

<h3 id="get-currency-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Currency](#schemacurrency)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developerKey
</aside>

<h1 id="pocketsmith-events">Events</h1>

## Get event

> Code samples

```bash
curl https://example.com/events/42-1601942400 \
  -H 'Accept: application/json' \
  -H "X-Developer-Key: ${API_KEY}"
```

`GET /events/{id}`

Gets a particular event by its ID.

<h3 id="get-event-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique identifier of the event.|

> Example responses

> 200 Response

```json
{
  "amount": 250.5,
  "amount_in_base_currency": 375.75,
  "category": {
    "children": [
      {}
    ],
    "colour": "#00ff00",
    "created_at": "2015-08-16T02:17:02Z",
    "id": 1438154,
    "is_bill": true,
    "is_transfer": false,
    "parent_id": 42,
    "refund_behaviour": "credits_are_refunds",
    "roll_up": false,
    "title": "Beer",
    "updated_at": "2015-08-16T02:17:02Z"
  },
  "colour": "#F63737",
  "currency_code": "nzd",
  "date": "2020-10-27",
  "id": "42-1601942400",
  "infinite_series": true,
  "note": "Buy more beer every Friday from the local brewery.",
  "repeat_interval": 1,
  "repeat_type": "weekly",
  "scenario": {
    "achieve_date": "string",
    "closing_balance": 5431.2,
    "closing_balance_date": "2018-02-27",
    "created_at": "2015-04-21T22:42:22Z",
    "current_balance": 5431.2,
    "current_balance_date": "2018-02-27",
    "current_balance_exchange_rate": 1.5,
    "current_balance_in_base_currency": 8146.8,
    "description": "string",
    "id": 42,
    "interest_rate": 2.4,
    "interest_rate_repeat_id": 4,
    "maximum-value": 42,
    "minimum-value": 4000,
    "safe_balance": 5431.2,
    "safe_balance_in_base_currency": 8146.8,
    "starting_balance": 2450,
    "starting_balance_date": "2018-02-27",
    "title": "Wedding",
    "type": "no-interest",
    "updated_at": "2015-04-21T22:42:22Z"
  },
  "series_id": 42,
  "series_start_id": "42-1593993600"
}
```

> 403 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

> 404 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

<h3 id="get-event-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Event](#schemaevent)|
|403|Forbidden|Not Allowed|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developerKey
</aside>

## Update event

> Code samples

```bash
curl https://example.com/events/42-1601942400 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Developer-Key: ${API_KEY}" \
  -d '{
    "amount": 11.5,
    "behaviour": "all",
    "note": "Need more beer.",
    "repeat_interval": 1,
    "repeat_type": "weekly"
  }'
```

`PUT /events/{id}`

Updates an event by its ID.

> Body parameter

```json
{
  "amount": 11.5,
  "behaviour": "all",
  "note": "Need more beer.",
  "repeat_interval": 1,
  "repeat_type": "weekly"
}
```

<h3 id="update-event-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique identifier of the event.|
|body|body|object|false|none|
|» amount|body|number|false|The amount of the event. A positive amount is a credit, and a negative amount is a debit.|
|» behaviour|body|string|true|Whether the update applies only to this event, to all events within the series from this event or to all events within the series.|
|» note|body|string|false|A note for the event.|
|» repeat_interval|body|integer|false|The repeat interval of the event.|
|» repeat_type|body|string|false|The repeat type of the event.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» behaviour|one|
|» behaviour|forward|
|» behaviour|all|
|» repeat_type|once|
|» repeat_type|daily|
|» repeat_type|weekly|
|» repeat_type|fortnightly|
|» repeat_type|monthly|
|» repeat_type|yearly|
|» repeat_type|each weekday|

> Example responses

> 200 Response

```json
{
  "amount": 250.5,
  "amount_in_base_currency": 375.75,
  "category": {
    "children": [
      {}
    ],
    "colour": "#00ff00",
    "created_at": "2015-08-16T02:17:02Z",
    "id": 1438154,
    "is_bill": true,
    "is_transfer": false,
    "parent_id": 42,
    "refund_behaviour": "credits_are_refunds",
    "roll_up": false,
    "title": "Beer",
    "updated_at": "2015-08-16T02:17:02Z"
  },
  "colour": "#F63737",
  "currency_code": "nzd",
  "date": "2020-10-27",
  "id": "42-1601942400",
  "infinite_series": true,
  "note": "Buy more beer every Friday from the local brewery.",
  "repeat_interval": 1,
  "repeat_type": "weekly",
  "scenario": {
    "achieve_date": "string",
    "closing_balance": 5431.2,
    "closing_balance_date": "2018-02-27",
    "created_at": "2015-04-21T22:42:22Z",
    "current_balance": 5431.2,
    "current_balance_date": "2018-02-27",
    "current_balance_exchange_rate": 1.5,
    "current_balance_in_base_currency": 8146.8,
    "description": "string",
    "id": 42,
    "interest_rate": 2.4,
    "interest_rate_repeat_id": 4,
    "maximum-value": 42,
    "minimum-value": 4000,
    "safe_balance": 5431.2,
    "safe_balance_in_base_currency": 8146.8,
    "starting_balance": 2450,
    "starting_balance_date": "2018-02-27",
    "title": "Wedding",
    "type": "no-interest",
    "updated_at": "2015-04-21T22:42:22Z"
  },
  "series_id": 42,
  "series_start_id": "42-1593993600"
}
```

> 400 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

> 403 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

> 404 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

> 409 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

> 422 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

<h3 id="update-event-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Event](#schemaevent)|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|403|Forbidden|Not Allowed|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|
|409|Conflict|Conflict|[Error](#schemaerror)|
|422|Unprocessable Entity|Validation Error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developerKey
</aside>

## Delete event

> Code samples

```bash
curl 'https://example.com/events/42-1601942400?behaviour=one' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-Developer-Key: ${API_KEY}"
```

`DELETE /events/{id}`

Deletes an event by its ID.

<h3 id="delete-event-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The unique identifier of the event.|
|behaviour|query|string|true|Whether the delete applies only to this event, to all events within the series from this event or to all events within the series.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|behaviour|one|
|behaviour|forward|
|behaviour|all|

> Example responses

> 400 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

> 403 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

> 404 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

> 409 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

<h3 id="delete-event-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|403|Forbidden|Not Allowed|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|
|409|Conflict|Conflict|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developerKey
</aside>

## List events in scenario.

> Code samples

```bash
curl 'https://example.com/scenarios/42/events?start_date=2020-10-01&end_date=2020-10-30' \
  -H 'Accept: application/json' \
  -H "X-Developer-Key: ${API_KEY}"
```

`GET /scenarios/{id}/events`

Lists events belonging to a scenario by their ID.

<h3 id="list-events-in-scenario-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|The unique identifier of the scenario.|
|start_date|query|string|true|Return the events from and including this date.|
|end_date|query|string|true|Return the events until and including this date.|

> Example responses

> 200 Response

```json
[
  {
    "amount": 250.5,
    "amount_in_base_currency": 375.75,
    "category": {
      "children": [
        {}
      ],
      "colour": "#00ff00",
      "created_at": "2015-08-16T02:17:02Z",
      "id": 1438154,
      "is_bill": true,
      "is_transfer": false,
      "parent_id": 42,
      "refund_behaviour": "credits_are_refunds",
      "roll_up": false,
      "title": "Beer",
      "updated_at": "2015-08-16T02:17:02Z"
    },
    "colour": "#F63737",
    "currency_code": "nzd",
    "date": "2020-10-27",
    "id": "42-1601942400",
    "infinite_series": true,
    "note": "Buy more beer every Friday from the local brewery.",
    "repeat_interval": 1,
    "repeat_type": "weekly",
    "scenario": {
      "achieve_date": "string",
      "closing_balance": 5431.2,
      "closing_balance_date": "2018-02-27",
      "created_at": "2015-04-21T22:42:22Z",
      "current_balance": 5431.2,
      "current_balance_date": "2018-02-27",
      "current_balance_exchange_rate": 1.5,
      "current_balance_in_base_currency": 8146.8,
      "description": "string",
      "id": 42,
      "interest_rate": 2.4,
      "interest_rate_repeat_id": 4,
      "maximum-value": 42,
      "minimum-value": 4000,
      "safe_balance": 5431.2,
      "safe_balance_in_base_currency": 8146.8,
      "starting_balance": 2450,
      "starting_balance_date": "2018-02-27",
      "title": "Wedding",
      "type": "no-interest",
      "updated_at": "2015-04-21T22:42:22Z"
    },
    "series_id": 42,
    "series_start_id": "42-1593993600"
  }
]
```

> 403 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

> 404 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

<h3 id="list-events-in-scenario-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|403|Forbidden|Not Allowed|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<h3 id="list-events-in-scenario-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Event](#schemaevent)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developerKey
</aside>

## Create event in scenario

> Code samples

```bash
curl https://example.com/scenarios/42/events \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Developer-Key: ${API_KEY}" \
  -d '{
    "amount": 11.5,
    "category_id": 42,
    "date": "2020-10-27",
    "note": "New beers for sampling over the weekends.",
    "repeat_interval": 1,
    "repeat_type": "weekly"
  }'
```

`POST /scenarios/{id}/events`

Creates an event in a scenario by its ID.

> Body parameter

```json
{
  "amount": 11.5,
  "category_id": 42,
  "date": "2020-10-27",
  "note": "New beers for sampling over the weekends.",
  "repeat_interval": 1,
  "repeat_type": "weekly"
}
```

<h3 id="create-event-in-scenario-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|The unique identifier of the scenario.|
|body|body|object|false|none|
|» amount|body|number|true|The amount of the event. A positive amount is a credit, and a negative amount is a debit.|
|» category_id|body|integer|true|The unique identifier of the category for the event.|
|» date|body|string|true|The starting date of the event.|
|» note|body|string|false|A note for the event.|
|» repeat_interval|body|integer|false|The repeat interval of the event.|
|» repeat_type|body|string|true|The repeat type of the event.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» repeat_type|once|
|» repeat_type|daily|
|» repeat_type|weekly|
|» repeat_type|fortnightly|
|» repeat_type|monthly|
|» repeat_type|yearly|
|» repeat_type|each weekday|

> Example responses

> 201 Response

```json
{
  "amount": 250.5,
  "amount_in_base_currency": 375.75,
  "category": {
    "children": [
      {}
    ],
    "colour": "#00ff00",
    "created_at": "2015-08-16T02:17:02Z",
    "id": 1438154,
    "is_bill": true,
    "is_transfer": false,
    "parent_id": 42,
    "refund_behaviour": "credits_are_refunds",
    "roll_up": false,
    "title": "Beer",
    "updated_at": "2015-08-16T02:17:02Z"
  },
  "colour": "#F63737",
  "currency_code": "nzd",
  "date": "2020-10-27",
  "id": "42-1601942400",
  "infinite_series": true,
  "note": "Buy more beer every Friday from the local brewery.",
  "repeat_interval": 1,
  "repeat_type": "weekly",
  "scenario": {
    "achieve_date": "string",
    "closing_balance": 5431.2,
    "closing_balance_date": "2018-02-27",
    "created_at": "2015-04-21T22:42:22Z",
    "current_balance": 5431.2,
    "current_balance_date": "2018-02-27",
    "current_balance_exchange_rate": 1.5,
    "current_balance_in_base_currency": 8146.8,
    "description": "string",
    "id": 42,
    "interest_rate": 2.4,
    "interest_rate_repeat_id": 4,
    "maximum-value": 42,
    "minimum-value": 4000,
    "safe_balance": 5431.2,
    "safe_balance_in_base_currency": 8146.8,
    "starting_balance": 2450,
    "starting_balance_date": "2018-02-27",
    "title": "Wedding",
    "type": "no-interest",
    "updated_at": "2015-04-21T22:42:22Z"
  },
  "series_id": 42,
  "series_start_id": "42-1593993600"
}
```

> 403 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

> 404 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

> 409 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

> 422 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

<h3 id="create-event-in-scenario-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[Event](#schemaevent)|
|403|Forbidden|Not Allowed|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|
|409|Conflict|Conflict|[Error](#schemaerror)|
|422|Unprocessable Entity|Validation Error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developerKey
</aside>

## List events in user.

> Code samples

```bash
curl 'https://example.com/users/42/events?start_date=2020-10-01&end_date=2020-10-30' \
  -H 'Accept: application/json' \
  -H "X-Developer-Key: ${API_KEY}"
```

`GET /users/{id}/events`

Lists events belonging to a user by their ID.

<h3 id="list-events-in-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|The unique identifier of the user.|
|start_date|query|string|true|Return the events from and including this date.|
|end_date|query|string|true|Return the events until and including this date.|

> Example responses

> 200 Response

```json
[
  {
    "amount": 250.5,
    "amount_in_base_currency": 375.75,
    "category": {
      "children": [
        {}
      ],
      "colour": "#00ff00",
      "created_at": "2015-08-16T02:17:02Z",
      "id": 1438154,
      "is_bill": true,
      "is_transfer": false,
      "parent_id": 42,
      "refund_behaviour": "credits_are_refunds",
      "roll_up": false,
      "title": "Beer",
      "updated_at": "2015-08-16T02:17:02Z"
    },
    "colour": "#F63737",
    "currency_code": "nzd",
    "date": "2020-10-27",
    "id": "42-1601942400",
    "infinite_series": true,
    "note": "Buy more beer every Friday from the local brewery.",
    "repeat_interval": 1,
    "repeat_type": "weekly",
    "scenario": {
      "achieve_date": "string",
      "closing_balance": 5431.2,
      "closing_balance_date": "2018-02-27",
      "created_at": "2015-04-21T22:42:22Z",
      "current_balance": 5431.2,
      "current_balance_date": "2018-02-27",
      "current_balance_exchange_rate": 1.5,
      "current_balance_in_base_currency": 8146.8,
      "description": "string",
      "id": 42,
      "interest_rate": 2.4,
      "interest_rate_repeat_id": 4,
      "maximum-value": 42,
      "minimum-value": 4000,
      "safe_balance": 5431.2,
      "safe_balance_in_base_currency": 8146.8,
      "starting_balance": 2450,
      "starting_balance_date": "2018-02-27",
      "title": "Wedding",
      "type": "no-interest",
      "updated_at": "2015-04-21T22:42:22Z"
    },
    "series_id": 42,
    "series_start_id": "42-1593993600"
  }
]
```

> 403 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

> 404 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

<h3 id="list-events-in-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|403|Forbidden|Not Allowed|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<h3 id="list-events-in-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Event](#schemaevent)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developerKey
</aside>

<h1 id="pocketsmith-institutions">Institutions</h1>

## Get institution

> Code samples

```bash
curl https://example.com/institutions/42 \
  -H 'Accept: application/json' \
  -H "X-Developer-Key: ${API_KEY}"
```

`GET /institutions/{id}`

Gets an institution by its ID.

<h3 id="get-institution-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|The unique identifier of the institution.|

> Example responses

> 200 Response

```json
{
  "created_at": "2015-04-21T22:42:22Z",
  "currency_code": "NZD",
  "id": 57,
  "title": "Bank of Foo",
  "updated_at": "2015-04-21T22:42:22Z"
}
```

> 403 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

> 404 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

<h3 id="get-institution-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Institution](#schemainstitution)|
|403|Forbidden|Not Allowed|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developerKey
</aside>

## Update institution

> Code samples

```bash
curl https://example.com/institutions/42 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Developer-Key: ${API_KEY}" \
  -d '{
    "currency_code": "NZD",
    "title": "Bank of Foo"
  }'
```

`PUT /institutions/{id}`

Updates the title and currency code for an institution.

> Body parameter

```json
{
  "currency_code": "NZD",
  "title": "Bank of Foo"
}
```

<h3 id="update-institution-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|The unique identifier of the institution.|
|body|body|object|false|none|
|» currency_code|body|string|false|A new currency code for the institution.|
|» title|body|string|false|A new title for the institution.|

> Example responses

> 200 Response

```json
{
  "created_at": "2015-04-21T22:42:22Z",
  "currency_code": "NZD",
  "id": 57,
  "title": "Bank of Foo",
  "updated_at": "2015-04-21T22:42:22Z"
}
```

> 403 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

> 404 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

> 422 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

<h3 id="update-institution-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Institution](#schemainstitution)|
|403|Forbidden|Not Allowed|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|
|422|Unprocessable Entity|Validation Error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developerKey
</aside>

## Delete institution

> Code samples

```bash
curl https://example.com/institutions/42 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-Developer-Key: ${API_KEY}"
```

`DELETE /institutions/{id}`

Deletes an institution and all data within. Alternatively, another institution can be provided to merge the data into to avoid losing it.

<h3 id="delete-institution-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|The unique identifier of the institution.|
|merge_into_institution_id|query|integer|false|The unique identifier of the institution to merge into.|

> Example responses

> 403 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

> 404 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

> 422 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

<h3 id="delete-institution-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|403|Forbidden|Not Allowed|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|
|422|Unprocessable Entity|Validation Error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developerKey
</aside>

## List institutions in user

> Code samples

```bash
curl https://example.com/users/42/institutions \
  -H 'Accept: application/json' \
  -H "X-Developer-Key: ${API_KEY}"
```

`GET /users/{id}/institutions`

Lists all the institutions belonging to the user.

<h3 id="list-institutions-in-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|The unique identifier of the user|

> Example responses

> 200 Response

```json
[
  {
    "created_at": "2015-04-21T22:42:22Z",
    "currency_code": "NZD",
    "id": 57,
    "title": "Bank of Foo",
    "updated_at": "2015-04-21T22:42:22Z"
  }
]
```

> 403 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

> 404 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

<h3 id="list-institutions-in-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|403|Forbidden|Not Allowed|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<h3 id="list-institutions-in-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Institution](#schemainstitution)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developerKey
</aside>

## Create institution in user

> Code samples

```bash
curl https://example.com/users/42/institutions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Developer-Key: ${API_KEY}" \
  -d '{
    "currency_code": "NZD",
    "title": "Bank of Foo"
  }'
```

`POST /users/{id}/institutions`

Creates an institution belonging to a user.

> Body parameter

```json
{
  "currency_code": "NZD",
  "title": "Bank of Foo"
}
```

<h3 id="create-institution-in-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|The unique identifier of the user|
|body|body|object|false|none|
|» currency_code|body|string|true|A currency code for the institution.|
|» title|body|string|true|A title for the institution.|

> Example responses

> 201 Response

```json
{
  "created_at": "2015-04-21T22:42:22Z",
  "currency_code": "NZD",
  "id": 57,
  "title": "Bank of Foo",
  "updated_at": "2015-04-21T22:42:22Z"
}
```

> 403 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

> 404 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

> 422 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

<h3 id="create-institution-in-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Success|[Institution](#schemainstitution)|
|403|Forbidden|Not Allowed|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|
|422|Unprocessable Entity|Validation Error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developerKey
</aside>

<h1 id="pocketsmith-users">Users</h1>

## Get the authorised user

> Code samples

```bash
curl https://example.com/me \
  -H 'Accept: application/json' \
  -H "X-Developer-Key: ${API_KEY}"
```

`GET /me`

Gets the user that corresponds to the access token used in the request.

> Example responses

> 200 Response

```json
{
  "always_show_base_currency": false,
  "available_accounts": 3,
  "available_budgets": 3,
  "avatar_url": "https://image.com/image.png",
  "base_currency_code": "NZD",
  "beta_user": true,
  "created_at": "2015-07-02T22:14:49Z",
  "email": "user69@sample.com",
  "forecast_defer_recalculate": false,
  "forecast_end_date": "2015-07-15",
  "forecast_last_accessed_at": "2015-07-02T22:14:49Z",
  "forecast_last_updated_at": "2015-07-02T22:14:49Z",
  "forecast_needs_recalculate": true,
  "forecast_start_date": "2015-07-01",
  "id": 42,
  "is_reviewing_transactions": true,
  "last_activity_at": "2015-07-02T22:14:49Z",
  "last_logged_in_at": "2015-07-02T22:14:49Z",
  "login": "sampleuser69",
  "name": "Foo Barrington",
  "time_zone": "Auckland",
  "updated_at": "2015-07-02T22:14:49Z",
  "using_multiple_currencies": true,
  "week_start_day": 1
}
```

> 403 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

<h3 id="get-the-authorised-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[User](#schemauser)|
|403|Forbidden|Not Allowed|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developerKey
</aside>

## Get user

> Code samples

```bash
curl https://example.com/users/42 \
  -H 'Accept: application/json' \
  -H "X-Developer-Key: ${API_KEY}"
```

`GET /users/{id}`

Gets a user by ID. You must be authorised as the target user in order to make this request.

<h3 id="get-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|The unique identifier of the user.|

> Example responses

> 200 Response

```json
{
  "always_show_base_currency": false,
  "available_accounts": 3,
  "available_budgets": 3,
  "avatar_url": "https://image.com/image.png",
  "base_currency_code": "NZD",
  "beta_user": true,
  "created_at": "2015-07-02T22:14:49Z",
  "email": "user69@sample.com",
  "forecast_defer_recalculate": false,
  "forecast_end_date": "2015-07-15",
  "forecast_last_accessed_at": "2015-07-02T22:14:49Z",
  "forecast_last_updated_at": "2015-07-02T22:14:49Z",
  "forecast_needs_recalculate": true,
  "forecast_start_date": "2015-07-01",
  "id": 42,
  "is_reviewing_transactions": true,
  "last_activity_at": "2015-07-02T22:14:49Z",
  "last_logged_in_at": "2015-07-02T22:14:49Z",
  "login": "sampleuser69",
  "name": "Foo Barrington",
  "time_zone": "Auckland",
  "updated_at": "2015-07-02T22:14:49Z",
  "using_multiple_currencies": true,
  "week_start_day": 1
}
```

> 403 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

> 404 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

<h3 id="get-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[User](#schemauser)|
|403|Forbidden|Not Allowed|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developerKey
</aside>

## Update user

> Code samples

```bash
curl https://example.com/users/42 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Developer-Key: ${API_KEY}" \
  -d '{
    "always_show_base_currency": true,
    "base_currency_code": "nzd",
    "beta_user": true,
    "email": "foo@bar.com",
    "name": "John Appleseed",
    "time_zone": "Auckland",
    "week_start_day": 1
  }'
```

`PUT /users/{id}`

Updates the user by their ID. You must be authorised as the target user in order to make this request.

> Body parameter

```json
{
  "always_show_base_currency": true,
  "base_currency_code": "nzd",
  "beta_user": true,
  "email": "foo@bar.com",
  "name": "John Appleseed",
  "time_zone": "Auckland",
  "week_start_day": 1
}
```

<h3 id="update-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|The unique identifier of the user.|
|body|body|object|false|none|
|» always_show_base_currency|body|boolean|false|Whether the user wishes to have all monetary values converted to their base currency.|
|» base_currency_code|body|string|false|A new base currency code for the user.|
|» beta_user|body|boolean|false|Whether the user is a beta user, and wishes to try out new features.|
|» email|body|string|false|A new email address for the user.|
|» name|body|string|false|A new name for the user.|
|» time_zone|body|string|false|A new time zone for the user.|
|» week_start_day|body|integer|false|The day of the week the user wishes their calendars to start on. A number between 0 and 6, where 0 is Sunday and 6 is Saturday.|

> Example responses

> 200 Response

```json
{
  "always_show_base_currency": false,
  "available_accounts": 3,
  "available_budgets": 3,
  "avatar_url": "https://image.com/image.png",
  "base_currency_code": "NZD",
  "beta_user": true,
  "created_at": "2015-07-02T22:14:49Z",
  "email": "user69@sample.com",
  "forecast_defer_recalculate": false,
  "forecast_end_date": "2015-07-15",
  "forecast_last_accessed_at": "2015-07-02T22:14:49Z",
  "forecast_last_updated_at": "2015-07-02T22:14:49Z",
  "forecast_needs_recalculate": true,
  "forecast_start_date": "2015-07-01",
  "id": 42,
  "is_reviewing_transactions": true,
  "last_activity_at": "2015-07-02T22:14:49Z",
  "last_logged_in_at": "2015-07-02T22:14:49Z",
  "login": "sampleuser69",
  "name": "Foo Barrington",
  "time_zone": "Auckland",
  "updated_at": "2015-07-02T22:14:49Z",
  "using_multiple_currencies": true,
  "week_start_day": 1
}
```

> 403 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

> 404 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

> 422 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

<h3 id="update-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[User](#schemauser)|
|403|Forbidden|Not Allowed|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|
|422|Unprocessable Entity|Validation Error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developerKey
</aside>

<h1 id="pocketsmith-time-zones">Time Zones</h1>

## List time zones

> Code samples

```bash
curl https://example.com/time_zones \
  -H 'Accept: application/json' \
  -H "X-Developer-Key: ${API_KEY}"
```

`GET /time_zones`

Lists time zones.

> Example responses

> 200 Response

```json
[
  {
    "abbreviation": "NZDT",
    "formatted_name": "(GMT+13:00) Auckland",
    "formatted_offset": "+13:00",
    "identifier": "Pacific/Auckland",
    "name": "Auckland",
    "utc_offset": 46800
  }
]
```

<h3 id="list-time-zones-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="list-time-zones-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[TimeZone](#schematimezone)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developerKey
</aside>

<h1 id="pocketsmith-transaction-accounts">Transaction Accounts</h1>

## Get transaction account

> Code samples

```bash
curl https://example.com/transaction_accounts/42 \
  -H 'Accept: application/json' \
  -H "X-Developer-Key: ${API_KEY}"
```

`GET /transaction_accounts/{id}`

Gets a transaction account by its ID.

<h3 id="get-transaction-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|The unique identifier of the transaction account.|

> Example responses

> 200 Response

```json
{
  "created_at": "2015-03-17T02:42:10Z",
  "currency_code": "NZD",
  "current_balance": 2694.39,
  "current_balance_date": "2015-07-03",
  "current_balance_exchange_rate": 1.5,
  "current_balance_in_base_currency": 4041.59,
  "id": 96027,
  "institution": {
    "created_at": "2015-04-21T22:42:22Z",
    "currency_code": "NZD",
    "id": 57,
    "title": "Bank of Foo",
    "updated_at": "2015-04-21T22:42:22Z"
  },
  "name": "Sample Credit",
  "number": "ASBCRD44554",
  "safe_balance": 2694.39,
  "safe_balance_in_base_currency": 4041.59,
  "starting_balance": 3547.45,
  "starting_balance_date": "2015-03-15",
  "type": "bank",
  "updated_at": "2015-07-02T22:14:49Z"
}
```

> 403 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

> 404 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

<h3 id="get-transaction-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TransactionAccount](#schematransactionaccount)|
|403|Forbidden|Not Allowed|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developerKey
</aside>

## Update transaction account

> Code samples

```bash
curl https://example.com/transaction_accounts/42 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Developer-Key: ${API_KEY}" \
  -d '{
    "institution_id": 42,
    "starting_balance": 3547.45,
    "starting_balance_date": "2015-03-15"
  }'
```

`PUT /transaction_accounts/{id}`

Updates the transaction account by its ID.

> Body parameter

```json
{
  "institution_id": 42,
  "starting_balance": 3547.45,
  "starting_balance_date": "2015-03-15"
}
```

<h3 id="update-transaction-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|The unique identifier of the transaction account.|
|body|body|object|false|none|
|» institution_id|body|integer|false|The unique identifier of a new institution for the transaction account.|
|» starting_balance|body|number|false|The starting balance amount of the transaction account.|
|» starting_balance_date|body|string|false|The starting balance date of the transaction account.|

> Example responses

> 200 Response

```json
{
  "created_at": "2015-03-17T02:42:10Z",
  "currency_code": "NZD",
  "current_balance": 2694.39,
  "current_balance_date": "2015-07-03",
  "current_balance_exchange_rate": 1.5,
  "current_balance_in_base_currency": 4041.59,
  "id": 96027,
  "institution": {
    "created_at": "2015-04-21T22:42:22Z",
    "currency_code": "NZD",
    "id": 57,
    "title": "Bank of Foo",
    "updated_at": "2015-04-21T22:42:22Z"
  },
  "name": "Sample Credit",
  "number": "ASBCRD44554",
  "safe_balance": 2694.39,
  "safe_balance_in_base_currency": 4041.59,
  "starting_balance": 3547.45,
  "starting_balance_date": "2015-03-15",
  "type": "bank",
  "updated_at": "2015-07-02T22:14:49Z"
}
```

> 403 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

> 404 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

> 422 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

<h3 id="update-transaction-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TransactionAccount](#schematransactionaccount)|
|403|Forbidden|Not Allowed|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|
|422|Unprocessable Entity|Validation Error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developerKey
</aside>

## List transaction accounts in user

> Code samples

```bash
curl https://example.com/users/42/transaction_accounts \
  -H 'Accept: application/json' \
  -H "X-Developer-Key: ${API_KEY}"
```

`GET /users/{id}/transaction_accounts`

List all transaction accounts belonging to a user.

<h3 id="list-transaction-accounts-in-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|The unique identifier of the user.|

> Example responses

> 200 Response

```json
[
  {
    "created_at": "2015-03-17T02:42:10Z",
    "currency_code": "NZD",
    "current_balance": 2694.39,
    "current_balance_date": "2015-07-03",
    "current_balance_exchange_rate": 1.5,
    "current_balance_in_base_currency": 4041.59,
    "id": 96027,
    "institution": {
      "created_at": "2015-04-21T22:42:22Z",
      "currency_code": "NZD",
      "id": 57,
      "title": "Bank of Foo",
      "updated_at": "2015-04-21T22:42:22Z"
    },
    "name": "Sample Credit",
    "number": "ASBCRD44554",
    "safe_balance": 2694.39,
    "safe_balance_in_base_currency": 4041.59,
    "starting_balance": 3547.45,
    "starting_balance_date": "2015-03-15",
    "type": "bank",
    "updated_at": "2015-07-02T22:14:49Z"
  }
]
```

> 403 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

> 404 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

<h3 id="list-transaction-accounts-in-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|403|Forbidden|Not Allowed|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<h3 id="list-transaction-accounts-in-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[TransactionAccount](#schematransactionaccount)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developerKey
</aside>

<h1 id="pocketsmith-budgeting">Budgeting</h1>

## List budget for user

> Code samples

```bash
curl https://example.com/users/42/budget \
  -H 'Accept: application/json' \
  -H "X-Developer-Key: ${API_KEY}"
```

`GET /users/{id}/budget`

Lists the user's budget, consisting of one or more budget analysis packages, one per category. Akin to the list on the Budget page in PocketSmith.

<h3 id="list-budget-for-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|The unique identifier of the account.|
|roll_up|query|boolean|false|Whether parent categories should have their children rolled up into them. When used, the children will still appear in the collection on their own, but their actual and forecast figures will be rolled up to the root parent.|

> Example responses

> 200 Response

```json
[
  {
    "category": {
      "children": [
        {}
      ],
      "colour": "#00ff00",
      "created_at": "2015-08-16T02:17:02Z",
      "id": 1438154,
      "is_bill": true,
      "is_transfer": false,
      "parent_id": 42,
      "refund_behaviour": "credits_are_refunds",
      "roll_up": false,
      "title": "Beer",
      "updated_at": "2015-08-16T02:17:02Z"
    },
    "expense": {
      "average_actual_amount": -42.3,
      "average_forecast_amount": -60,
      "currency_code": "nzd",
      "end_date": "2016-11-30",
      "periods": [
        {
          "actual_amount": -42.3,
          "currency_code": "nzd",
          "current": true,
          "end_date": "2016-11-30",
          "forecast_amount": -60,
          "over_budget": false,
          "over_by": 0,
          "percentage_used": 70.5,
          "refund_amount": 5.6,
          "start_date": "2016-11-01",
          "under_budget": true,
          "under_by": 17.7
        }
      ],
      "start_date": "2016-11-01",
      "total_actual_amount": -42.3,
      "total_forecast_amount": -60,
      "total_over_by": 0,
      "total_under_by": 17.7
    },
    "income": {
      "average_actual_amount": -42.3,
      "average_forecast_amount": -60,
      "currency_code": "nzd",
      "end_date": "2016-11-30",
      "periods": [
        {
          "actual_amount": -42.3,
          "currency_code": "nzd",
          "current": true,
          "end_date": "2016-11-30",
          "forecast_amount": -60,
          "over_budget": false,
          "over_by": 0,
          "percentage_used": 70.5,
          "refund_amount": 5.6,
          "start_date": "2016-11-01",
          "under_budget": true,
          "under_by": 17.7
        }
      ],
      "start_date": "2016-11-01",
      "total_actual_amount": -42.3,
      "total_forecast_amount": -60,
      "total_over_by": 0,
      "total_under_by": 17.7
    },
    "is_transfer": false
  }
]
```

<h3 id="list-budget-for-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="list-budget-for-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[BudgetAnalysisPackage](#schemabudgetanalysispackage)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developerKey
</aside>

## Get budget summary for user

> Code samples

```bash
curl 'https://example.com/users/42/budget_summary?period=weeks&interval=2&start_date=2016-11-01&end_date=2016-11-30' \
  -H 'Accept: application/json' \
  -H "X-Developer-Key: ${API_KEY}"
```

`GET /users/{id}/budget_summary`

Get the user's budget summary, containing an expense and income analysis for all categories (excluding transfer categories) for the given period and date range. Akin to the overall budget shown on the Budget page in PocketSmith.

<h3 id="get-budget-summary-for-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|The unique identifier of the user.|
|period|query|string|true|The period to analyse in, one of `weeks`, `months` or `years`. Also supported is `event`, although event period analysis is only possible when the budget events gathered align, so in this case where all categories are analysed together, it's highly unlikely that event period analysis will be possible.|
|interval|query|integer|true|The period interval, e.g. if the interval is 2 and the period is weeks, the budget will be analysed fortnightly.|
|start_date|query|string|true|The date to start analysing the budget from. This will be bumped out to make full periods as necessary.|
|end_date|query|string|true|The date to stop analysing the budget from. This will be bumped out to make full periods as necessary.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|period|weeks|
|period|months|
|period|years|
|period|event|

> Example responses

> 200 Response

```json
[
  {
    "category": {
      "children": [
        {}
      ],
      "colour": "#00ff00",
      "created_at": "2015-08-16T02:17:02Z",
      "id": 1438154,
      "is_bill": true,
      "is_transfer": false,
      "parent_id": 42,
      "refund_behaviour": "credits_are_refunds",
      "roll_up": false,
      "title": "Beer",
      "updated_at": "2015-08-16T02:17:02Z"
    },
    "expense": {
      "average_actual_amount": -42.3,
      "average_forecast_amount": -60,
      "currency_code": "nzd",
      "end_date": "2016-11-30",
      "periods": [
        {
          "actual_amount": -42.3,
          "currency_code": "nzd",
          "current": true,
          "end_date": "2016-11-30",
          "forecast_amount": -60,
          "over_budget": false,
          "over_by": 0,
          "percentage_used": 70.5,
          "refund_amount": 5.6,
          "start_date": "2016-11-01",
          "under_budget": true,
          "under_by": 17.7
        }
      ],
      "start_date": "2016-11-01",
      "total_actual_amount": -42.3,
      "total_forecast_amount": -60,
      "total_over_by": 0,
      "total_under_by": 17.7
    },
    "income": {
      "average_actual_amount": -42.3,
      "average_forecast_amount": -60,
      "currency_code": "nzd",
      "end_date": "2016-11-30",
      "periods": [
        {
          "actual_amount": -42.3,
          "currency_code": "nzd",
          "current": true,
          "end_date": "2016-11-30",
          "forecast_amount": -60,
          "over_budget": false,
          "over_by": 0,
          "percentage_used": 70.5,
          "refund_amount": 5.6,
          "start_date": "2016-11-01",
          "under_budget": true,
          "under_by": 17.7
        }
      ],
      "start_date": "2016-11-01",
      "total_actual_amount": -42.3,
      "total_forecast_amount": -60,
      "total_over_by": 0,
      "total_under_by": 17.7
    },
    "is_transfer": false
  }
]
```

> 400 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

> 403 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

> 404 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

<h3 id="get-budget-summary-for-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|403|Forbidden|Not Allowed|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<h3 id="get-budget-summary-for-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[BudgetAnalysisPackage](#schemabudgetanalysispackage)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developerKey
</aside>

## Delete forecast cache for user

> Code samples

```bash
curl https://example.com/users/42/forecast_cache \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-Developer-Key: ${API_KEY}"
```

`DELETE /users/{id}/forecast_cache`

Delete the user's cached forecast by recalculating the forecast.

<h3 id="delete-forecast-cache-for-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|The unique identifier of the user.|

> Example responses

> 403 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

> 404 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

<h3 id="delete-forecast-cache-for-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|403|Forbidden|Not Allowed|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developerKey
</aside>

## Get trend analysis for user

> Code samples

```bash
curl 'https://example.com/users/42/trend_analysis?period=weeks&interval=true&start_date=2016-11-01&end_date=2016-11-30&categories=42%2C49&scenarios=11%2C29' \
  -H 'Accept: application/json' \
  -H "X-Developer-Key: ${API_KEY}"
```

`GET /users/{id}/trend_analysis`

Get an income and/or expense budget analysis for the given date range and period across any number of categories and scenarios. Akin to the Trends page in PocketSmith.

<h3 id="get-trend-analysis-for-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|The unique identifier of the user.|
|period|query|string|true|The period to analyse in, one of `weeks`, `months` or `years`. Also supported is `event`, although event period analysis is only possible when the budget events gathered align, so in this case where all categories are analysed together, it's highly unlikely that event period analysis will be possible.|
|interval|query|integer|true|The period interval, e.g. if the interval is 2 and the period is weeks, the budget will be analysed fortnightly.|
|start_date|query|string|true|The date to start analysing the budget from. This will be bumped out to make full periods as necessary.|
|end_date|query|string|true|The date to stop analysing the budget from. This will be bumped out to make full periods as necessary.|
|categories|query|string|true|A comma-separated list of category IDs to analyse.|
|scenarios|query|string|true|A comma-separated list of scenario IDs to analyse. You're likely going to want to include all a user's scenarios here, unless you have reason to only analyse for a subset of scenarios. Regardless of what scenarios are analysed, all actuals (transactions) across all accounts will be included.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|period|weeks|
|period|months|
|period|years|
|period|event|

> Example responses

> 200 Response

```json
[
  {
    "category": {
      "children": [
        {}
      ],
      "colour": "#00ff00",
      "created_at": "2015-08-16T02:17:02Z",
      "id": 1438154,
      "is_bill": true,
      "is_transfer": false,
      "parent_id": 42,
      "refund_behaviour": "credits_are_refunds",
      "roll_up": false,
      "title": "Beer",
      "updated_at": "2015-08-16T02:17:02Z"
    },
    "expense": {
      "average_actual_amount": -42.3,
      "average_forecast_amount": -60,
      "currency_code": "nzd",
      "end_date": "2016-11-30",
      "periods": [
        {
          "actual_amount": -42.3,
          "currency_code": "nzd",
          "current": true,
          "end_date": "2016-11-30",
          "forecast_amount": -60,
          "over_budget": false,
          "over_by": 0,
          "percentage_used": 70.5,
          "refund_amount": 5.6,
          "start_date": "2016-11-01",
          "under_budget": true,
          "under_by": 17.7
        }
      ],
      "start_date": "2016-11-01",
      "total_actual_amount": -42.3,
      "total_forecast_amount": -60,
      "total_over_by": 0,
      "total_under_by": 17.7
    },
    "income": {
      "average_actual_amount": -42.3,
      "average_forecast_amount": -60,
      "currency_code": "nzd",
      "end_date": "2016-11-30",
      "periods": [
        {
          "actual_amount": -42.3,
          "currency_code": "nzd",
          "current": true,
          "end_date": "2016-11-30",
          "forecast_amount": -60,
          "over_budget": false,
          "over_by": 0,
          "percentage_used": 70.5,
          "refund_amount": 5.6,
          "start_date": "2016-11-01",
          "under_budget": true,
          "under_by": 17.7
        }
      ],
      "start_date": "2016-11-01",
      "total_actual_amount": -42.3,
      "total_forecast_amount": -60,
      "total_over_by": 0,
      "total_under_by": 17.7
    },
    "is_transfer": false
  }
]
```

> 400 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

> 403 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

> 404 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

> 422 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

<h3 id="get-trend-analysis-for-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad Request|[Error](#schemaerror)|
|403|Forbidden|Not Allowed|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|
|422|Unprocessable Entity|Validation Error|[Error](#schemaerror)|

<h3 id="get-trend-analysis-for-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[BudgetAnalysisPackage](#schemabudgetanalysispackage)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developerKey
</aside>

<h1 id="pocketsmith-labels">Labels</h1>

## List labels in user

> Code samples

```bash
curl https://example.com/users/42/labels \
  -H 'Accept: application/json' \
  -H "X-Developer-Key: ${API_KEY}"
```

`GET /users/{id}/labels`

Lists labels belonging to a user by their ID.

<h3 id="list-labels-in-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|The unique identifier of the user.|

> Example responses

> 200 Response

```json
[
  "craftbeer",
  "bargains",
  "gaming",
  "Trip to Auckland"
]
```

> 403 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

> 404 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

<h3 id="list-labels-in-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|403|Forbidden|Not Allowed|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<h3 id="list-labels-in-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developerKey
</aside>

<h1 id="pocketsmith-saved-searches">Saved Searches</h1>

## List saved searches in user

> Code samples

```bash
curl https://example.com/users/42/saved_searches \
  -H 'Accept: application/json' \
  -H "X-Developer-Key: ${API_KEY}"
```

`GET /users/{id}/saved_searches`

Lists saved searches belonging to a user by their ID.

<h3 id="list-saved-searches-in-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|The unique identifier of the user.|

> Example responses

> 200 Response

```json
[
  {
    "created_at": "2015-08-16T02:17:02Z",
    "id": 42,
    "title": "Craft beer",
    "updated_at": "2015-08-16T02:17:02Z"
  }
]
```

> 403 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

> 404 Response

```json
{
  "error": "A message describing the error that occurred."
}
```

<h3 id="list-saved-searches-in-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|403|Forbidden|Not Allowed|[Error](#schemaerror)|
|404|Not Found|Not Found|[Error](#schemaerror)|

<h3 id="list-saved-searches-in-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[SavedSearch](#schemasavedsearch)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
developerKey
</aside>

# Schemas

<h2 id="tocS_Account">Account</h2>
<!-- backwards compatibility -->
<a id="schemaaccount"></a>
<a id="schema_Account"></a>
<a id="tocSaccount"></a>
<a id="tocsaccount"></a>

```json
{
  "created_at": "2018-02-27",
  "currency_code": "NZD",
  "current_balance": 2694.39,
  "current_balance_date": "2018-02-27",
  "current_balance_exchange_rate": 1.5,
  "current_balance_in_base_currency": 4041.59,
  "id": 42,
  "is_net_worth": false,
  "primary_scenario": {
    "achieve_date": "string",
    "closing_balance": 5431.2,
    "closing_balance_date": "2018-02-27",
    "created_at": "2015-04-21T22:42:22Z",
    "current_balance": 5431.2,
    "current_balance_date": "2018-02-27",
    "current_balance_exchange_rate": 1.5,
    "current_balance_in_base_currency": 8146.8,
    "description": "string",
    "id": 42,
    "interest_rate": 2.4,
    "interest_rate_repeat_id": 4,
    "maximum-value": 42,
    "minimum-value": 4000,
    "safe_balance": 5431.2,
    "safe_balance_in_base_currency": 8146.8,
    "starting_balance": 2450,
    "starting_balance_date": "2018-02-27",
    "title": "Wedding",
    "type": "no-interest",
    "updated_at": "2015-04-21T22:42:22Z"
  },
  "primary_transaction_account": {
    "created_at": "2015-03-17T02:42:10Z",
    "currency_code": "NZD",
    "current_balance": 2694.39,
    "current_balance_date": "2015-07-03",
    "current_balance_exchange_rate": 1.5,
    "current_balance_in_base_currency": 4041.59,
    "id": 96027,
    "institution": {
      "created_at": "2015-04-21T22:42:22Z",
      "currency_code": "NZD",
      "id": 57,
      "title": "Bank of Foo",
      "updated_at": "2015-04-21T22:42:22Z"
    },
    "name": "Sample Credit",
    "number": "ASBCRD44554",
    "safe_balance": 2694.39,
    "safe_balance_in_base_currency": 4041.59,
    "starting_balance": 3547.45,
    "starting_balance_date": "2015-03-15",
    "type": "bank",
    "updated_at": "2015-07-02T22:14:49Z"
  },
  "safe_balance": 2694.39,
  "safe_balance_in_base_currency": 4041.59,
  "scenarios": [
    {
      "achieve_date": "string",
      "closing_balance": 5431.2,
      "closing_balance_date": "2018-02-27",
      "created_at": "2015-04-21T22:42:22Z",
      "current_balance": 5431.2,
      "current_balance_date": "2018-02-27",
      "current_balance_exchange_rate": 1.5,
      "current_balance_in_base_currency": 8146.8,
      "description": "string",
      "id": 42,
      "interest_rate": 2.4,
      "interest_rate_repeat_id": 4,
      "maximum-value": 42,
      "minimum-value": 4000,
      "safe_balance": 5431.2,
      "safe_balance_in_base_currency": 8146.8,
      "starting_balance": 2450,
      "starting_balance_date": "2018-02-27",
      "title": "Wedding",
      "type": "no-interest",
      "updated_at": "2015-04-21T22:42:22Z"
    }
  ],
  "title": "Bank of Foo",
  "transaction_accounts": [
    {
      "created_at": "2015-03-17T02:42:10Z",
      "currency_code": "NZD",
      "current_balance": 2694.39,
      "current_balance_date": "2015-07-03",
      "current_balance_exchange_rate": 1.5,
      "current_balance_in_base_currency": 4041.59,
      "id": 96027,
      "institution": {
        "created_at": "2015-04-21T22:42:22Z",
        "currency_code": "NZD",
        "id": 57,
        "title": "Bank of Foo",
        "updated_at": "2015-04-21T22:42:22Z"
      },
      "name": "Sample Credit",
      "number": "ASBCRD44554",
      "safe_balance": 2694.39,
      "safe_balance_in_base_currency": 4041.59,
      "starting_balance": 3547.45,
      "starting_balance_date": "2015-03-15",
      "type": "bank",
      "updated_at": "2015-07-02T22:14:49Z"
    }
  ],
  "type": "bank",
  "updated_at": "2018-02-27"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_at|string|false|none|When the account was created.|
|currency_code|string|false|none|The currency code for the account.|
|current_balance|number|false|none|The current balance of the account.|
|current_balance_date|string|false|none|The date of the current balance.|
|current_balance_exchange_rate|number|false|none|The exchange rate between the account's currency and the user's base currency, when different. If the currencies are the same, null is returned.|
|current_balance_in_base_currency|number|false|none|The current balance of the account in the user's base currency.|
|id|integer|false|none|The unique identifier of the account.|
|is_net_worth|boolean|false|none|Whether the account is a net worth asset.|
|primary_scenario|[Scenario](#schemascenario)|false|none|none|
|primary_transaction_account|[TransactionAccount](#schematransactionaccount)|false|none|none|
|safe_balance|number|false|none|The current safe balance, if safe balance is activated on the account. If safe balance is not activated, then null is returned.|
|safe_balance_in_base_currency|number|false|none|The current safe balance in the user's base currency, if safe balance is activated on the account. If safe balance is not activated, then null is returned.|
|scenarios|[[Scenario](#schemascenario)]|false|none|All scenarios that compose the account, including the primary.|
|title|string|false|none|The title of the account.|
|transaction_accounts|[[TransactionAccount](#schematransactionaccount)]|false|none|All transaction accounts that compose the account, including the primary.|
|type|string|false|none|The type of the account.|
|updated_at|string|false|none|When the account was last updated.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|bank|
|type|credits|
|type|cash|
|type|stocks|
|type|mortgage|
|type|loans|
|type|vehicle|
|type|property|
|type|insurance|
|type|other_asset|
|type|other_liability|

<h2 id="tocS_Attachment">Attachment</h2>
<!-- backwards compatibility -->
<a id="schemaattachment"></a>
<a id="schema_Attachment"></a>
<a id="tocSattachment"></a>
<a id="tocsattachment"></a>

```json
{
  "content_type": "image/png",
  "content_type_meta": {
    "description": "PNG image",
    "extension": "png",
    "title": "PNG"
  },
  "created_at": "2015-08-16T02:17:02Z",
  "file_name": "taxi.png",
  "id": 42,
  "original_url": "https://image.com/image.png",
  "title": "Invoice for taxi",
  "type": "image",
  "updated_at": "2015-08-16T02:17:02Z",
  "variants": {
    "large_url": "https://image.com/image.png",
    "thumb_url": "https://image.com/image.png"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content_type|string|false|none|The content type of the attachment.|
|content_type_meta|object|false|none|none|
|created_at|string(ISO 8601 timestamp)|false|none|When the attachment was created.|
|file_name|string|false|none|The file name of the attachment.|
|id|integer|false|none|The unique identifier of the attachment|
|original_url|string|false|none|The url of the attachment.|
|title|string|false|none|The title of the attachment. If blank or not provided, the title will be derived from the file name.|
|type|string|false|none|The type of attachment.|
|updated_at|string(ISO 8601 timestamp)|false|none|When the attachment was last updated.|
|variants|object|false|none|none|

<h2 id="tocS_BudgetAnalysis">BudgetAnalysis</h2>
<!-- backwards compatibility -->
<a id="schemabudgetanalysis"></a>
<a id="schema_BudgetAnalysis"></a>
<a id="tocSbudgetanalysis"></a>
<a id="tocsbudgetanalysis"></a>

```json
{
  "average_actual_amount": -42.3,
  "average_forecast_amount": -60,
  "currency_code": "nzd",
  "end_date": "2016-11-30",
  "periods": [
    {
      "actual_amount": -42.3,
      "currency_code": "nzd",
      "current": true,
      "end_date": "2016-11-30",
      "forecast_amount": -60,
      "over_budget": false,
      "over_by": 0,
      "percentage_used": 70.5,
      "refund_amount": 5.6,
      "start_date": "2016-11-01",
      "under_budget": true,
      "under_by": 17.7
    }
  ],
  "start_date": "2016-11-01",
  "total_actual_amount": -42.3,
  "total_forecast_amount": -60,
  "total_over_by": 0,
  "total_under_by": 17.7
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|average_actual_amount|number|false|none|The average actual (transactions) amount across all periods.|
|average_forecast_amount|number|false|none|The average budgeted amount across all periods.|
|currency_code|string|false|none|The currency of the budget analysis.|
|end_date|string|false|none|The end date of the budget analysis.|
|periods|[[Period](#schemaperiod)]|false|none|The period analyses that this budget analysis comprises.|
|start_date|string|false|none|The start date of the budget analysis.|
|total_actual_amount|number|false|none|The total actual (transactions) amount across all periods.|
|total_forecast_amount|number|false|none|The total budgeted amount across all periods.|
|total_over_by|number|false|none|The total amount the budget was exceeded across all periods.|
|total_under_by|number|false|none|The total amount the budget was under by across all periods.|

<h2 id="tocS_BudgetAnalysisPackage">BudgetAnalysisPackage</h2>
<!-- backwards compatibility -->
<a id="schemabudgetanalysispackage"></a>
<a id="schema_BudgetAnalysisPackage"></a>
<a id="tocSbudgetanalysispackage"></a>
<a id="tocsbudgetanalysispackage"></a>

```json
{
  "category": {
    "children": [
      {}
    ],
    "colour": "#00ff00",
    "created_at": "2015-08-16T02:17:02Z",
    "id": 1438154,
    "is_bill": true,
    "is_transfer": false,
    "parent_id": 42,
    "refund_behaviour": "credits_are_refunds",
    "roll_up": false,
    "title": "Beer",
    "updated_at": "2015-08-16T02:17:02Z"
  },
  "expense": {
    "average_actual_amount": -42.3,
    "average_forecast_amount": -60,
    "currency_code": "nzd",
    "end_date": "2016-11-30",
    "periods": [
      {
        "actual_amount": -42.3,
        "currency_code": "nzd",
        "current": true,
        "end_date": "2016-11-30",
        "forecast_amount": -60,
        "over_budget": false,
        "over_by": 0,
        "percentage_used": 70.5,
        "refund_amount": 5.6,
        "start_date": "2016-11-01",
        "under_budget": true,
        "under_by": 17.7
      }
    ],
    "start_date": "2016-11-01",
    "total_actual_amount": -42.3,
    "total_forecast_amount": -60,
    "total_over_by": 0,
    "total_under_by": 17.7
  },
  "income": {
    "average_actual_amount": -42.3,
    "average_forecast_amount": -60,
    "currency_code": "nzd",
    "end_date": "2016-11-30",
    "periods": [
      {
        "actual_amount": -42.3,
        "currency_code": "nzd",
        "current": true,
        "end_date": "2016-11-30",
        "forecast_amount": -60,
        "over_budget": false,
        "over_by": 0,
        "percentage_used": 70.5,
        "refund_amount": 5.6,
        "start_date": "2016-11-01",
        "under_budget": true,
        "under_by": 17.7
      }
    ],
    "start_date": "2016-11-01",
    "total_actual_amount": -42.3,
    "total_forecast_amount": -60,
    "total_over_by": 0,
    "total_under_by": 17.7
  },
  "is_transfer": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|[Category](#schemacategory)|false|none|none|
|expense|[BudgetAnalysis](#schemabudgetanalysis)|false|none|none|
|income|[BudgetAnalysis](#schemabudgetanalysis)|false|none|none|
|is_transfer|boolean|false|none|Whether the expense budget analysis looks like a transfer to the income budget analysis, based on a number of heuristics.|

<h2 id="tocS_Category">Category</h2>
<!-- backwards compatibility -->
<a id="schemacategory"></a>
<a id="schema_Category"></a>
<a id="tocScategory"></a>
<a id="tocscategory"></a>

```json
{
  "children": [
    {
      "children": [
        {}
      ],
      "colour": "#00ff00",
      "created_at": "2015-08-16T02:17:02Z",
      "id": 1438154,
      "is_bill": true,
      "is_transfer": false,
      "parent_id": 42,
      "refund_behaviour": "credits_are_refunds",
      "roll_up": false,
      "title": "Beer",
      "updated_at": "2015-08-16T02:17:02Z"
    }
  ],
  "colour": "#00ff00",
  "created_at": "2015-08-16T02:17:02Z",
  "id": 1438154,
  "is_bill": true,
  "is_transfer": false,
  "parent_id": 42,
  "refund_behaviour": "credits_are_refunds",
  "roll_up": false,
  "title": "Beer",
  "updated_at": "2015-08-16T02:17:02Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|children|[[Category](#schemacategory)]|false|none|The category's child categories.|
|colour|string(CSS-style hex triplet)|false|none|The colour for the category.|
|created_at|string(ISO 8601 timestamp)|false|none|When the category was created.|
|id|integer|false|none|The unique identifier of the category.|
|is_bill|boolean|false|none|Whether the category is a bill category. A bill category is when budgeted amounts are normally spent at once, instead of spread across a budgeting period. This category will be included in the bill reminder email when set to true.|
|is_transfer|boolean|false|none|Whether this category has been marked as a transfer category.|
|parent_id|integer|false|none|The unique identifier of the parent category of this category, or null if this category has no parent (i.e. is a top-level category)|
|refund_behaviour|string \| null|false|none|How the category's refunds or deductions should be reported on.|
|roll_up|boolean|false|none|Whether the category's budget is rolled up into its parent category, if a parent category is present.|
|title|string|false|none|The title of the category.|
|updated_at|string(ISO 8601 timestamp)|false|none|When the category was last updated.|

#### Enumerated Values

|Property|Value|
|---|---|
|refund_behaviour|debits_are_deductions|
|refund_behaviour|credits_are_refunds|
|refund_behaviour|null|

<h2 id="tocS_CategoryRule">CategoryRule</h2>
<!-- backwards compatibility -->
<a id="schemacategoryrule"></a>
<a id="schema_CategoryRule"></a>
<a id="tocScategoryrule"></a>
<a id="tocscategoryrule"></a>

```json
{
  "category": {
    "children": [
      {}
    ],
    "colour": "#00ff00",
    "created_at": "2015-08-16T02:17:02Z",
    "id": 1438154,
    "is_bill": true,
    "is_transfer": false,
    "parent_id": 42,
    "refund_behaviour": "credits_are_refunds",
    "roll_up": false,
    "title": "Beer",
    "updated_at": "2015-08-16T02:17:02Z"
  },
  "created_at": "2019-07-09T10:06:02Z",
  "id": 1438154,
  "payee_matches": "Countdown",
  "updated_at": "2019-07-09T10:06:02Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|[Category](#schemacategory)|false|none|none|
|created_at|string(ISO 8601 timestamp)|false|none|When the category rule was created.|
|id|integer|false|none|The unique identifier of the category rule.|
|payee_matches|string|false|none|The keyword/s to match the transactions payees.|
|updated_at|string(ISO 8601 timestamp)|false|none|When the category rule was last updated.|

<h2 id="tocS_Currency">Currency</h2>
<!-- backwards compatibility -->
<a id="schemacurrency"></a>
<a id="schema_Currency"></a>
<a id="tocScurrency"></a>
<a id="tocscurrency"></a>

```json
{
  "id": "nzd",
  "minor_unit": 2,
  "name": "New Zealand Dollar",
  "separators": {
    "major": ",",
    "minor": "."
  },
  "symbol": "$"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The ISO 4217 or unofficial currency code.|
|minor_unit|integer|false|none|The number of digits after the minor unit separator.|
|name|string|false|none|The name of the currency.|
|separators|[CurrencySeparators](#schemacurrencyseparators)|false|none|none|
|symbol|string|false|none|The symbol of the currency.|

<h2 id="tocS_CurrencySeparators">CurrencySeparators</h2>
<!-- backwards compatibility -->
<a id="schemacurrencyseparators"></a>
<a id="schema_CurrencySeparators"></a>
<a id="tocScurrencyseparators"></a>
<a id="tocscurrencyseparators"></a>

```json
{
  "major": ",",
  "minor": "."
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|major|string|false|none|The separator used in the major unit.|
|minor|string|false|none|The seperator used for the minor unit.|

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "error": "A message describing the error that occurred."
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|A message describing the error that occurred.|

<h2 id="tocS_Event">Event</h2>
<!-- backwards compatibility -->
<a id="schemaevent"></a>
<a id="schema_Event"></a>
<a id="tocSevent"></a>
<a id="tocsevent"></a>

```json
{
  "amount": 250.5,
  "amount_in_base_currency": 375.75,
  "category": {
    "children": [
      {}
    ],
    "colour": "#00ff00",
    "created_at": "2015-08-16T02:17:02Z",
    "id": 1438154,
    "is_bill": true,
    "is_transfer": false,
    "parent_id": 42,
    "refund_behaviour": "credits_are_refunds",
    "roll_up": false,
    "title": "Beer",
    "updated_at": "2015-08-16T02:17:02Z"
  },
  "colour": "#F63737",
  "currency_code": "nzd",
  "date": "2020-10-27",
  "id": "42-1601942400",
  "infinite_series": true,
  "note": "Buy more beer every Friday from the local brewery.",
  "repeat_interval": 1,
  "repeat_type": "weekly",
  "scenario": {
    "achieve_date": "string",
    "closing_balance": 5431.2,
    "closing_balance_date": "2018-02-27",
    "created_at": "2015-04-21T22:42:22Z",
    "current_balance": 5431.2,
    "current_balance_date": "2018-02-27",
    "current_balance_exchange_rate": 1.5,
    "current_balance_in_base_currency": 8146.8,
    "description": "string",
    "id": 42,
    "interest_rate": 2.4,
    "interest_rate_repeat_id": 4,
    "maximum-value": 42,
    "minimum-value": 4000,
    "safe_balance": 5431.2,
    "safe_balance_in_base_currency": 8146.8,
    "starting_balance": 2450,
    "starting_balance_date": "2018-02-27",
    "title": "Wedding",
    "type": "no-interest",
    "updated_at": "2015-04-21T22:42:22Z"
  },
  "series_id": 42,
  "series_start_id": "42-1593993600"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|number|false|none|The amount of the event.|
|amount_in_base_currency|number|false|none|The amount of the event in the user's base currency.|
|category|[Category](#schemacategory)|false|none|none|
|colour|string|false|none|The CSS hex-style colour of the event.|
|currency_code|string|false|none|The currency code of the event.|
|date|string|false|none|The date of the event.|
|id|string|false|none|The unique identifier of the event.|
|infinite_series|boolean|false|none|Whether the event repeats and does not have an end date.|
|note|string|false|none|The note of the event.|
|repeat_interval|integer|false|none|The repeat interval of how often the event takes place.|
|repeat_type|string|false|none|The repeat type of the event.|
|scenario|[Scenario](#schemascenario)|false|none|none|
|series_id|integer|false|none|The unique identifier of the series that the event belongs to.|
|series_start_id|string|false|none|The unique identifier of the series followed by the series's start date.|

#### Enumerated Values

|Property|Value|
|---|---|
|repeat_type|once|
|repeat_type|daily|
|repeat_type|weekly|
|repeat_type|fortnightly|
|repeat_type|monthly|
|repeat_type|yearly|
|repeat_type|each weekday|

<h2 id="tocS_Institution">Institution</h2>
<!-- backwards compatibility -->
<a id="schemainstitution"></a>
<a id="schema_Institution"></a>
<a id="tocSinstitution"></a>
<a id="tocsinstitution"></a>

```json
{
  "created_at": "2015-04-21T22:42:22Z",
  "currency_code": "NZD",
  "id": 57,
  "title": "Bank of Foo",
  "updated_at": "2015-04-21T22:42:22Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_at|string|false|none|When the institution was created.|
|currency_code|string|false|none|The currency code of the institution.|
|id|integer|false|none|The unique identifier of the institution.|
|title|string|false|none|The title of the institution.|
|updated_at|string|false|none|When the institution was last updated.|

<h2 id="tocS_Period">Period</h2>
<!-- backwards compatibility -->
<a id="schemaperiod"></a>
<a id="schema_Period"></a>
<a id="tocSperiod"></a>
<a id="tocsperiod"></a>

```json
{
  "actual_amount": -42.3,
  "currency_code": "nzd",
  "current": true,
  "end_date": "2016-11-30",
  "forecast_amount": -60,
  "over_budget": false,
  "over_by": 0,
  "percentage_used": 70.5,
  "refund_amount": 5.6,
  "start_date": "2016-11-01",
  "under_budget": true,
  "under_by": 17.7
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actual_amount|number|false|none|The sum of all actuals (transactions) in the period.|
|currency_code|string|false|none|The currency of the period.|
|current|boolean|false|none|Whether this period is current, such that the current date (in the user's time zone) falls within the date range.|
|end_date|string|false|none|The end date of the period.|
|forecast_amount|number|false|none|The sum of all forecast sources (budget events) in the period, for comparison against the actual amount.|
|over_budget|boolean|false|none|Whether the budget has been exceeded in the period.|
|over_by|number|false|none|How much the budget has been exceeded by in the period.|
|percentage_used|number|false|none|The percentage of the budget that has been used in the period.|
|refund_amount|number|false|none|This attribute tracks the amount that has been refunded or deducted to the actual amount. When a category is set to "always expense", any credit transactions are treated as refunds and when set to "always income", any debit transactions are treated as deductions.|
|start_date|string|false|none|The start date of the period.|
|under_budget|boolean|false|none|Whether the budget has not been exceeded in the period.|
|under_by|number|false|none|How much there is left in the budget for the period.|

<h2 id="tocS_SavedSearch">SavedSearch</h2>
<!-- backwards compatibility -->
<a id="schemasavedsearch"></a>
<a id="schema_SavedSearch"></a>
<a id="tocSsavedsearch"></a>
<a id="tocssavedsearch"></a>

```json
{
  "created_at": "2015-08-16T02:17:02Z",
  "id": 42,
  "title": "Craft beer",
  "updated_at": "2015-08-16T02:17:02Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_at|string(ISO 8601 timestamp)|false|none|When the saved search was created.|
|id|integer|false|none|The unique identifier of the saved search.|
|title|string|false|none|The title of the saved search.|
|updated_at|string(ISO 8601 timestamp)|false|none|When the saved search was last updated.|

<h2 id="tocS_Scenario">Scenario</h2>
<!-- backwards compatibility -->
<a id="schemascenario"></a>
<a id="schema_Scenario"></a>
<a id="tocSscenario"></a>
<a id="tocsscenario"></a>

```json
{
  "achieve_date": "string",
  "closing_balance": 5431.2,
  "closing_balance_date": "2018-02-27",
  "created_at": "2015-04-21T22:42:22Z",
  "current_balance": 5431.2,
  "current_balance_date": "2018-02-27",
  "current_balance_exchange_rate": 1.5,
  "current_balance_in_base_currency": 8146.8,
  "description": "string",
  "id": 42,
  "interest_rate": 2.4,
  "interest_rate_repeat_id": 4,
  "maximum-value": 42,
  "minimum-value": 4000,
  "safe_balance": 5431.2,
  "safe_balance_in_base_currency": 8146.8,
  "starting_balance": 2450,
  "starting_balance_date": "2018-02-27",
  "title": "Wedding",
  "type": "no-interest",
  "updated_at": "2015-04-21T22:42:22Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|achieve_date|string|false|none|For goals, the date that they should be achieved by.|
|closing_balance|number|false|none|The closing balance of the scenario.|
|closing_balance_date|string|false|none|The date of the closing balance.|
|created_at|string|false|none|When the scenario was created.|
|current_balance|number|false|none|The current balance of the scenario.|
|current_balance_date|string|false|none|The date of the current balance.|
|current_balance_exchange_rate|number|false|none|The exchange rate between the scenario's currency and the user's base currency, when different. If the currencies are the same, null is returned.|
|current_balance_in_base_currency|number|false|none|The current balance of the scenario in the user's base currency.|
|description|string|false|none|A short description of what the scenario is modelling.|
|id|integer|false|none|The unique identifier of the scenario.|
|interest_rate|number|false|none|The amount of interest to apply to the balance. Will apply periodically depending on what `interest_rate_repeat_id` is set to.|
|interest_rate_repeat_id|integer|false|none|A number representing how often the interest should be applied. 0 is used for no interest, 2 is weekly, 3 is fortnightly, 4 is monthly, 5 is yearly and 7 for quarterly.|
|maximum-value|number|false|none|none|
|minimum-value|number|false|none|none|
|safe_balance|number|false|none|The current safe balance in the user's base currency, if safe balance is activated on the account associated with the scenario. If safe balance is not activated, then null is returned.|
|safe_balance_in_base_currency|number|false|none|The current safe balance in the user's base currency, if safe balance is activated on the account associated with the scenario. If safe balance is not available, then null is returned.|
|starting_balance|number|false|none|The starting balance of the scenario.|
|starting_balance_date|string|false|none|The date of the starting balance.|
|title|string|false|none|The title of the scenario.|
|type|string|false|none|The type of the scenario.|
|updated_at|string|false|none|When the scenario was last updated.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|no-interest|
|type|savings|
|type|debt|

<h2 id="tocS_TimeZone">TimeZone</h2>
<!-- backwards compatibility -->
<a id="schematimezone"></a>
<a id="schema_TimeZone"></a>
<a id="tocStimezone"></a>
<a id="tocstimezone"></a>

```json
{
  "abbreviation": "NZDT",
  "formatted_name": "(GMT+13:00) Auckland",
  "formatted_offset": "+13:00",
  "identifier": "Pacific/Auckland",
  "name": "Auckland",
  "utc_offset": 46800
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|abbreviation|string|false|none|The abbreviation of the time zone.|
|formatted_name|string|false|none|The formatted name of the time zone.|
|formatted_offset|string|false|none|The formatted offset of the time zone.|
|identifier|string|false|none|The tz database name of the time zone.|
|name|string|false|none|The name of the time zone.|
|utc_offset|integer|false|none|The time zone's UTC offset in seconds.|

<h2 id="tocS_Transaction">Transaction</h2>
<!-- backwards compatibility -->
<a id="schematransaction"></a>
<a id="schema_Transaction"></a>
<a id="tocStransaction"></a>
<a id="tocstransaction"></a>

```json
{
  "amount": 34.6,
  "amount_in_base_currency": 51.9,
  "category": {
    "children": [
      {}
    ],
    "colour": "#00ff00",
    "created_at": "2015-08-16T02:17:02Z",
    "id": 1438154,
    "is_bill": true,
    "is_transfer": false,
    "parent_id": 42,
    "refund_behaviour": "credits_are_refunds",
    "roll_up": false,
    "title": "Beer",
    "updated_at": "2015-08-16T02:17:02Z"
  },
  "cheque_number": "503113643691",
  "closing_balance": 4312.32,
  "created_at": "2018-02-27T22:42:22Z",
  "date": "2018-02-27",
  "id": 42,
  "is_transfer": false,
  "labels": [
    "foo",
    "bar",
    "baz"
  ],
  "memo": "An example memo",
  "needs_review": true,
  "note": "I spent way too much on cheese here",
  "original_payee": "CARD4083ST MARTINS NEW WORLD CHRISTCHURCH",
  "payee": "St Martins New World",
  "status": "pending",
  "transaction_account": {
    "created_at": "2015-03-17T02:42:10Z",
    "currency_code": "NZD",
    "current_balance": 2694.39,
    "current_balance_date": "2015-07-03",
    "current_balance_exchange_rate": 1.5,
    "current_balance_in_base_currency": 4041.59,
    "id": 96027,
    "institution": {
      "created_at": "2015-04-21T22:42:22Z",
      "currency_code": "NZD",
      "id": 57,
      "title": "Bank of Foo",
      "updated_at": "2015-04-21T22:42:22Z"
    },
    "name": "Sample Credit",
    "number": "ASBCRD44554",
    "safe_balance": 2694.39,
    "safe_balance_in_base_currency": 4041.59,
    "starting_balance": 3547.45,
    "starting_balance_date": "2015-03-15",
    "type": "bank",
    "updated_at": "2015-07-02T22:14:49Z"
  },
  "type": "credit",
  "updated_at": "2018-02-27T22:42:22Z",
  "upload_source": "file"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|number|false|none|none|
|amount_in_base_currency|number|false|none|The amount of the transaction in the user's base currency.|
|category|[Category](#schemacategory)|false|none|none|
|cheque_number|string|false|none|none|
|closing_balance|number|false|none|The closing balance of the account at the transaction.|
|created_at|string|false|none|When the transaction was created.|
|date|string|false|none|The date the transaction took place.|
|id|integer|false|none|The unique identifier of the transaction.|
|is_transfer|boolean|false|none|Whether the transaction is a transfer.|
|labels|[string]|false|none|none|
|memo|string|false|none|none|
|needs_review|boolean|false|none|Whether the transaction needs to be reviewed.|
|note|string|false|none|none|
|original_payee|string|false|none|The payee the transaction was created with.|
|payee|string|false|none|The payee/merchant of the transaction.|
|status|string|false|none|The status of the transaction. Pending transactions are temporary and may be superseded later by their posted counterparts, which are permanent.|
|transaction_account|[TransactionAccount](#schematransactionaccount)|false|none|none|
|type|string|false|none|Whether the transaction is a debit or a credit|
|updated_at|string|false|none|When the transaction was last updated.|
|upload_source|string|false|none|Where the transaction came from.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|pending|
|status|posted|
|type|debit|
|type|credit|

<h2 id="tocS_TransactionAccount">TransactionAccount</h2>
<!-- backwards compatibility -->
<a id="schematransactionaccount"></a>
<a id="schema_TransactionAccount"></a>
<a id="tocStransactionaccount"></a>
<a id="tocstransactionaccount"></a>

```json
{
  "created_at": "2015-03-17T02:42:10Z",
  "currency_code": "NZD",
  "current_balance": 2694.39,
  "current_balance_date": "2015-07-03",
  "current_balance_exchange_rate": 1.5,
  "current_balance_in_base_currency": 4041.59,
  "id": 96027,
  "institution": {
    "created_at": "2015-04-21T22:42:22Z",
    "currency_code": "NZD",
    "id": 57,
    "title": "Bank of Foo",
    "updated_at": "2015-04-21T22:42:22Z"
  },
  "name": "Sample Credit",
  "number": "ASBCRD44554",
  "safe_balance": 2694.39,
  "safe_balance_in_base_currency": 4041.59,
  "starting_balance": 3547.45,
  "starting_balance_date": "2015-03-15",
  "type": "bank",
  "updated_at": "2015-07-02T22:14:49Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_at|string|false|none|none|
|currency_code|string|false|none|The currency that the account is in. This is determined by the account that the transaction account belongs to.|
|current_balance|number|false|none|none|
|current_balance_date|string|false|none|none|
|current_balance_exchange_rate|number|false|none|The exchange rate between the transaction account's currency and the user's base currency, when different. If the currencies are the same, null is returned.|
|current_balance_in_base_currency|number|false|none|The current balance of the transaction account in the user's base currency.|
|id|integer|false|none|none|
|institution|[Institution](#schemainstitution)|false|none|none|
|name|string|false|none|none|
|number|string|false|none|none|
|safe_balance|number|false|none|The current safe balance, if safe balance is activated and available for the transaction account. If safe balance is not available, then null is returned.|
|safe_balance_in_base_currency|number|false|none|The current safe balance in the user's base currency, if safe balance is activated and available for the transaction account. If safe balance is not available, then null is returned.|
|starting_balance|number|false|none|none|
|starting_balance_date|string|false|none|none|
|type|string|false|none|The type of the transaction account.|
|updated_at|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|bank|
|type|credits|
|type|cash|
|type|stocks|
|type|mortgage|
|type|loans|
|type|vehicle|
|type|property|
|type|insurance|
|type|other_asset|
|type|other_liability|

<h2 id="tocS_User">User</h2>
<!-- backwards compatibility -->
<a id="schemauser"></a>
<a id="schema_User"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```json
{
  "always_show_base_currency": false,
  "available_accounts": 3,
  "available_budgets": 3,
  "avatar_url": "https://image.com/image.png",
  "base_currency_code": "NZD",
  "beta_user": true,
  "created_at": "2015-07-02T22:14:49Z",
  "email": "user69@sample.com",
  "forecast_defer_recalculate": false,
  "forecast_end_date": "2015-07-15",
  "forecast_last_accessed_at": "2015-07-02T22:14:49Z",
  "forecast_last_updated_at": "2015-07-02T22:14:49Z",
  "forecast_needs_recalculate": true,
  "forecast_start_date": "2015-07-01",
  "id": 42,
  "is_reviewing_transactions": true,
  "last_activity_at": "2015-07-02T22:14:49Z",
  "last_logged_in_at": "2015-07-02T22:14:49Z",
  "login": "sampleuser69",
  "name": "Foo Barrington",
  "time_zone": "Auckland",
  "updated_at": "2015-07-02T22:14:49Z",
  "using_multiple_currencies": true,
  "week_start_day": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|always_show_base_currency|boolean|false|none|Whether the user wants to see all accounts in their base currency instead of the native account currency.|
|available_accounts|integer|false|none|The user's total number of available accounts.|
|available_budgets|integer|false|none|The user's total number of available budgets.|
|avatar_url|string|false|none|The URL to the user's avatar.|
|base_currency_code|string|false|none|The user's base currency.|
|beta_user|boolean|false|none|Whether the user has opted in to beta features.|
|created_at|string|false|none|When the user signed up.|
|email|string|false|none|The user's email address.|
|forecast_defer_recalculate|boolean|false|none|Whether the user's forecast recalculation should be deferred.|
|forecast_end_date|string|false|none|The date that the user's forecast ends.|
|forecast_last_accessed_at|string|false|none|When the user's forecast was last accessed.|
|forecast_last_updated_at|string|false|none|When the user's forecast was last updated.|
|forecast_needs_recalculate|boolean|false|none|Whether the user's forecast needs to be recalculated.|
|forecast_start_date|string|false|none|The date that the user's forecast starts.|
|id|integer|false|none|The unique identifier of the user.|
|is_reviewing_transactions|boolean|false|none|Whether the user wants to review new transactions, transfer transactions or categorisation.|
|last_activity_at|string|false|none|When the user last interacted with PocketSmith, via any application or the API.|
|last_logged_in_at|string|false|none|When the user last logged into PocketSmith.|
|login|string|false|none|The user's username.|
|name|string|false|none|The full name of the user, although not all users will have a name set.|
|time_zone|string|false|none|The user's time zone.|
|updated_at|string|false|none|When the user was last updated.|
|using_multiple_currencies|boolean|false|none|Whether the user has multiple currencies in use across their account.|
|week_start_day|integer|false|none|The day of the week the user wishes their calendars to start on. A number between 0 and 6, where 0 is Sunday and 6 is Saturday.|
