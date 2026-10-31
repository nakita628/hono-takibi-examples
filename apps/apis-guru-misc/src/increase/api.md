<h1 id="increase-api">Increase API v0.0.1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://api.increase.com">https://api.increase.com</a>

* <a href="https://sandbox.increase.com">https://sandbox.increase.com</a>

# Authentication

- HTTP Authentication, scheme: bearer

<h1 id="increase-api-default">Default</h1>

## List Account Numbers

<a id="opIdlist_account_numbers"></a>

> Code samples

```bash
curl https://example.com/account_numbers \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /account_numbers`

<h3 id="list-account-numbers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|none|
|limit|query|integer|false|none|
|status|query|string|false|none|
|account_id|query|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status|active|
|status|disabled|
|status|canceled|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "account_id": "account_in71c4amph0vgo2qllky",
      "account_number": "987654321",
      "created_at": "2020-01-31T23:59:59Z",
      "id": "account_number_v18nkfqm6afpsrvy82b2",
      "name": "ACH",
      "replacement": {
        "replaced_account_number_id": null,
        "replaced_by_account_number_id": null
      },
      "routing_number": "101050001",
      "status": "active",
      "type": "account_number"
    }
  ],
  "next_cursor": "v57w5d"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="list-account-numbers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Account Number List|[account_number_list](#schemaaccount_number_list)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create an Account Number

<a id="opIdcreate_an_account_number"></a>

> Code samples

```bash
curl https://example.com/account_numbers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "account_id": "account_in71c4amph0vgo2qllky",
    "name": "Rent payments"
  }'
```

`POST /account_numbers`

> Body parameter

```json
{
  "account_id": "account_in71c4amph0vgo2qllky",
  "name": "Rent payments"
}
```

<h3 id="create-an-account-number-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[create_an_account_number_parameters](#schemacreate_an_account_number_parameters)|true|none|
|» account_id|body|string|true|The Account the Account Number should belong to.|
|» name|body|string|true|The name you choose for the Account Number.|

> Example responses

> 200 Response

```json
{
  "account_id": "account_in71c4amph0vgo2qllky",
  "account_number": "987654321",
  "created_at": "2020-01-31T23:59:59Z",
  "id": "account_number_v18nkfqm6afpsrvy82b2",
  "name": "ACH",
  "replacement": {
    "replaced_account_number_id": null,
    "replaced_by_account_number_id": null
  },
  "routing_number": "101050001",
  "status": "active",
  "type": "account_number"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="create-an-account-number-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Account Number|[account_number](#schemaaccount_number)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Retrieve an Account Number

<a id="opIdretrieve_an_account_number"></a>

> Code samples

```bash
curl https://example.com/account_numbers/account_number_v18nkfqm6afpsrvy82b2 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /account_numbers/{account_number_id}`

<h3 id="retrieve-an-account-number-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_number_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "account_id": "account_in71c4amph0vgo2qllky",
  "account_number": "987654321",
  "created_at": "2020-01-31T23:59:59Z",
  "id": "account_number_v18nkfqm6afpsrvy82b2",
  "name": "ACH",
  "replacement": {
    "replaced_account_number_id": null,
    "replaced_by_account_number_id": null
  },
  "routing_number": "101050001",
  "status": "active",
  "type": "account_number"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="retrieve-an-account-number-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Account Number|[account_number](#schemaaccount_number)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Update an Account Number

<a id="opIdupdate_an_account_number"></a>

> Code samples

```bash
curl https://example.com/account_numbers/account_number_v18nkfqm6afpsrvy82b2 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "status": "disabled"
  }'
```

`PATCH /account_numbers/{account_number_id}`

> Body parameter

```json
{
  "status": "disabled"
}
```

<h3 id="update-an-account-number-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_number_id|path|string|true|none|
|body|body|[update_an_account_number_parameters](#schemaupdate_an_account_number_parameters)|true|none|
|» name|body|string|false|The name you choose for the Account Number.|
|» status|body|string|false|This indicates if transfers can be made to the Account Number.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|active|
|» status|disabled|
|» status|canceled|

> Example responses

> 200 Response

```json
{
  "account_id": "account_in71c4amph0vgo2qllky",
  "account_number": "987654321",
  "created_at": "2020-01-31T23:59:59Z",
  "id": "account_number_v18nkfqm6afpsrvy82b2",
  "name": "ACH",
  "replacement": {
    "replaced_account_number_id": null,
    "replaced_by_account_number_id": null
  },
  "routing_number": "101050001",
  "status": "active",
  "type": "account_number"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="update-an-account-number-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Account Number|[account_number](#schemaaccount_number)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## List Account Statements

<a id="opIdlist_account_statements"></a>

> Code samples

```bash
curl https://example.com/account_statements \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /account_statements`

<h3 id="list-account-statements-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|none|
|limit|query|integer|false|none|
|account_id|query|string|false|none|
|statement_period_start.after|query|string(date-time)|false|none|
|statement_period_start.before|query|string(date-time)|false|none|
|statement_period_start.on_or_after|query|string(date-time)|false|none|
|statement_period_start.on_or_before|query|string(date-time)|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "account_id": "account_in71c4amph0vgo2qllky",
      "created_at": "2020-01-31T23:59:59Z",
      "ending_balance": 100,
      "file_id": "file_makxrc67oh9l6sg7w9yc",
      "id": "account_statement_lkc03a4skm2k7f38vj15",
      "starting_balance": 0,
      "statement_period_end": "2020-01-31T23:59:59Z",
      "statement_period_start": "2020-01-31T23:59:59Z",
      "type": "account_statement"
    }
  ],
  "next_cursor": "v57w5d"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="list-account-statements-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Account Statement List|[account_statement_list](#schemaaccount_statement_list)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Retrieve an Account Statement

<a id="opIdretrieve_an_account_statement"></a>

> Code samples

```bash
curl https://example.com/account_statements/account_statement_lkc03a4skm2k7f38vj15 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /account_statements/{account_statement_id}`

<h3 id="retrieve-an-account-statement-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_statement_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "account_id": "account_in71c4amph0vgo2qllky",
  "created_at": "2020-01-31T23:59:59Z",
  "ending_balance": 100,
  "file_id": "file_makxrc67oh9l6sg7w9yc",
  "id": "account_statement_lkc03a4skm2k7f38vj15",
  "starting_balance": 0,
  "statement_period_end": "2020-01-31T23:59:59Z",
  "statement_period_start": "2020-01-31T23:59:59Z",
  "type": "account_statement"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="retrieve-an-account-statement-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Account Statement|[account_statement](#schemaaccount_statement)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## List Account Transfers

<a id="opIdlist_account_transfers"></a>

> Code samples

```bash
curl https://example.com/account_transfers \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /account_transfers`

<h3 id="list-account-transfers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|none|
|limit|query|integer|false|none|
|account_id|query|string|false|none|
|created_at.after|query|string(date-time)|false|none|
|created_at.before|query|string(date-time)|false|none|
|created_at.on_or_after|query|string(date-time)|false|none|
|created_at.on_or_before|query|string(date-time)|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "account_id": "account_in71c4amph0vgo2qllky",
      "amount": 100,
      "approval": {
        "approved_at": "2020-01-31T23:59:59Z"
      },
      "cancellation": null,
      "created_at": "2020-01-31T23:59:59Z",
      "currency": "USD",
      "description": "Move money into savings",
      "destination_account_id": "account_uf16sut2ct5bevmq3eh",
      "destination_transaction_id": "transaction_j3itv8dtk5o8pw3p1xj4",
      "id": "account_transfer_7k9qe1ysdgqztnt63l7n",
      "network": "account",
      "status": "complete",
      "template_id": "account_transfer_template_5nloco84eijzw0wcfhnn",
      "transaction_id": "transaction_uyrp7fld2ium70oa7oi",
      "type": "account_transfer"
    }
  ],
  "next_cursor": "v57w5d"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="list-account-transfers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Account Transfer List|[account_transfer_list](#schemaaccount_transfer_list)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create an Account Transfer

<a id="opIdcreate_an_account_transfer"></a>

> Code samples

```bash
curl https://example.com/account_transfers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "account_id": "account_in71c4amph0vgo2qllky",
    "amount": 100,
    "description": "Creating liquidity",
    "destination_account_id": "account_uf16sut2ct5bevmq3eh"
  }'
```

`POST /account_transfers`

> Body parameter

```json
{
  "account_id": "account_in71c4amph0vgo2qllky",
  "amount": 100,
  "description": "Creating liquidity",
  "destination_account_id": "account_uf16sut2ct5bevmq3eh"
}
```

<h3 id="create-an-account-transfer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[create_an_account_transfer_parameters](#schemacreate_an_account_transfer_parameters)|true|none|
|» account_id|body|string|true|The identifier for the account that will send the transfer.|
|» amount|body|integer|true|The transfer amount in the minor unit of the account currency. For dollars, for example, this is cents.|
|» description|body|string|true|The description you choose to give the transfer.|
|» destination_account_id|body|string|true|The identifier for the account that will receive the transfer.|
|» require_approval|body|boolean|false|Whether the transfer requires explicit approval via the dashboard or API.|

> Example responses

> 200 Response

```json
{
  "account_id": "account_in71c4amph0vgo2qllky",
  "amount": 100,
  "approval": {
    "approved_at": "2020-01-31T23:59:59Z"
  },
  "cancellation": null,
  "created_at": "2020-01-31T23:59:59Z",
  "currency": "USD",
  "description": "Move money into savings",
  "destination_account_id": "account_uf16sut2ct5bevmq3eh",
  "destination_transaction_id": "transaction_j3itv8dtk5o8pw3p1xj4",
  "id": "account_transfer_7k9qe1ysdgqztnt63l7n",
  "network": "account",
  "status": "complete",
  "template_id": "account_transfer_template_5nloco84eijzw0wcfhnn",
  "transaction_id": "transaction_uyrp7fld2ium70oa7oi",
  "type": "account_transfer"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="create-an-account-transfer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Account Transfer|[account_transfer](#schemaaccount_transfer)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Retrieve an Account Transfer

<a id="opIdretrieve_an_account_transfer"></a>

> Code samples

```bash
curl https://example.com/account_transfers/account_transfer_7k9qe1ysdgqztnt63l7n \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /account_transfers/{account_transfer_id}`

<h3 id="retrieve-an-account-transfer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_transfer_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "account_id": "account_in71c4amph0vgo2qllky",
  "amount": 100,
  "approval": {
    "approved_at": "2020-01-31T23:59:59Z"
  },
  "cancellation": null,
  "created_at": "2020-01-31T23:59:59Z",
  "currency": "USD",
  "description": "Move money into savings",
  "destination_account_id": "account_uf16sut2ct5bevmq3eh",
  "destination_transaction_id": "transaction_j3itv8dtk5o8pw3p1xj4",
  "id": "account_transfer_7k9qe1ysdgqztnt63l7n",
  "network": "account",
  "status": "complete",
  "template_id": "account_transfer_template_5nloco84eijzw0wcfhnn",
  "transaction_id": "transaction_uyrp7fld2ium70oa7oi",
  "type": "account_transfer"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="retrieve-an-account-transfer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Account Transfer|[account_transfer](#schemaaccount_transfer)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Approve an Account Transfer

<a id="opIdapprove_an_account_transfer"></a>

> Code samples

```bash
curl https://example.com/account_transfers/account_transfer_7k9qe1ysdgqztnt63l7n/approve \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /account_transfers/{account_transfer_id}/approve`

<h3 id="approve-an-account-transfer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_transfer_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "account_id": "account_in71c4amph0vgo2qllky",
  "amount": 100,
  "approval": {
    "approved_at": "2020-01-31T23:59:59Z"
  },
  "cancellation": null,
  "created_at": "2020-01-31T23:59:59Z",
  "currency": "USD",
  "description": "Move money into savings",
  "destination_account_id": "account_uf16sut2ct5bevmq3eh",
  "destination_transaction_id": "transaction_j3itv8dtk5o8pw3p1xj4",
  "id": "account_transfer_7k9qe1ysdgqztnt63l7n",
  "network": "account",
  "status": "complete",
  "template_id": "account_transfer_template_5nloco84eijzw0wcfhnn",
  "transaction_id": "transaction_uyrp7fld2ium70oa7oi",
  "type": "account_transfer"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="approve-an-account-transfer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Account Transfer|[account_transfer](#schemaaccount_transfer)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Cancel an Account Transfer

<a id="opIdcancel_an_account_transfer"></a>

> Code samples

```bash
curl https://example.com/account_transfers/account_transfer_7k9qe1ysdgqztnt63l7n/cancel \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /account_transfers/{account_transfer_id}/cancel`

<h3 id="cancel-an-account-transfer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_transfer_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "account_id": "account_in71c4amph0vgo2qllky",
  "amount": 100,
  "approval": {
    "approved_at": "2020-01-31T23:59:59Z"
  },
  "cancellation": null,
  "created_at": "2020-01-31T23:59:59Z",
  "currency": "USD",
  "description": "Move money into savings",
  "destination_account_id": "account_uf16sut2ct5bevmq3eh",
  "destination_transaction_id": "transaction_j3itv8dtk5o8pw3p1xj4",
  "id": "account_transfer_7k9qe1ysdgqztnt63l7n",
  "network": "account",
  "status": "complete",
  "template_id": "account_transfer_template_5nloco84eijzw0wcfhnn",
  "transaction_id": "transaction_uyrp7fld2ium70oa7oi",
  "type": "account_transfer"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="cancel-an-account-transfer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Account Transfer|[account_transfer](#schemaaccount_transfer)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## List Accounts

<a id="opIdlist_accounts"></a>

> Code samples

```bash
curl https://example.com/accounts \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /accounts`

<h3 id="list-accounts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|none|
|limit|query|integer|false|none|
|entity_id|query|string|false|none|
|status|query|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status|open|
|status|closed|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "balances": {
        "available_balance": 100,
        "current_balance": 100
      },
      "bank": "first_internet_bank",
      "created_at": "2020-01-31T23:59:59Z",
      "currency": "USD",
      "entity_id": "entity_n8y8tnk2p9339ti393yi",
      "id": "account_in71c4amph0vgo2qllky",
      "informational_entity_id": null,
      "interest_accrued": "0.01",
      "interest_accrued_at": "2020-01-31",
      "name": "My first account!",
      "replacement": {
        "replaced_account_id": null,
        "replaced_by_account_id": null
      },
      "status": "open",
      "type": "account"
    }
  ],
  "next_cursor": "v57w5d"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="list-accounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Account List|[account_list](#schemaaccount_list)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create an Account

<a id="opIdcreate_an_account"></a>

> Code samples

```bash
curl https://example.com/accounts \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "New Account!"
  }'
```

`POST /accounts`

> Body parameter

```json
{
  "name": "New Account!"
}
```

<h3 id="create-an-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[create_an_account_parameters](#schemacreate_an_account_parameters)|true|none|
|» entity_id|body|string|false|The identifier for the Entity that will own the Account.|
|» informational_entity_id|body|string|false|The identifier of an Entity that, while not owning the Account, is associated with its activity. Its relationship to your group must be `informational`.|
|» name|body|string|true|The name you choose for the Account.|

> Example responses

> 200 Response

```json
{
  "balances": {
    "available_balance": 100,
    "current_balance": 100
  },
  "bank": "first_internet_bank",
  "created_at": "2020-01-31T23:59:59Z",
  "currency": "USD",
  "entity_id": "entity_n8y8tnk2p9339ti393yi",
  "id": "account_in71c4amph0vgo2qllky",
  "informational_entity_id": null,
  "interest_accrued": "0.01",
  "interest_accrued_at": "2020-01-31",
  "name": "My first account!",
  "replacement": {
    "replaced_account_id": null,
    "replaced_by_account_id": null
  },
  "status": "open",
  "type": "account"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="create-an-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Account|[account](#schemaaccount)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Retrieve an Account

<a id="opIdretrieve_an_account"></a>

> Code samples

```bash
curl https://example.com/accounts/account_in71c4amph0vgo2qllky \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /accounts/{account_id}`

<h3 id="retrieve-an-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "balances": {
    "available_balance": 100,
    "current_balance": 100
  },
  "bank": "first_internet_bank",
  "created_at": "2020-01-31T23:59:59Z",
  "currency": "USD",
  "entity_id": "entity_n8y8tnk2p9339ti393yi",
  "id": "account_in71c4amph0vgo2qllky",
  "informational_entity_id": null,
  "interest_accrued": "0.01",
  "interest_accrued_at": "2020-01-31",
  "name": "My first account!",
  "replacement": {
    "replaced_account_id": null,
    "replaced_by_account_id": null
  },
  "status": "open",
  "type": "account"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="retrieve-an-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Account|[account](#schemaaccount)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Update an Account

<a id="opIdupdate_an_account"></a>

> Code samples

```bash
curl https://example.com/accounts/account_in71c4amph0vgo2qllky \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "My renamed account"
  }'
```

`PATCH /accounts/{account_id}`

> Body parameter

```json
{
  "name": "My renamed account"
}
```

<h3 id="update-an-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|string|true|none|
|body|body|[update_an_account_parameters](#schemaupdate_an_account_parameters)|true|none|
|» name|body|string|false|The new name of the Account.|

> Example responses

> 200 Response

```json
{
  "balances": {
    "available_balance": 100,
    "current_balance": 100
  },
  "bank": "first_internet_bank",
  "created_at": "2020-01-31T23:59:59Z",
  "currency": "USD",
  "entity_id": "entity_n8y8tnk2p9339ti393yi",
  "id": "account_in71c4amph0vgo2qllky",
  "informational_entity_id": null,
  "interest_accrued": "0.01",
  "interest_accrued_at": "2020-01-31",
  "name": "My first account!",
  "replacement": {
    "replaced_account_id": null,
    "replaced_by_account_id": null
  },
  "status": "open",
  "type": "account"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="update-an-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Account|[account](#schemaaccount)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Close an Account

<a id="opIdclose_an_account"></a>

> Code samples

```bash
curl https://example.com/accounts/account_in71c4amph0vgo2qllky/close \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /accounts/{account_id}/close`

<h3 id="close-an-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "balances": {
    "available_balance": 100,
    "current_balance": 100
  },
  "bank": "first_internet_bank",
  "created_at": "2020-01-31T23:59:59Z",
  "currency": "USD",
  "entity_id": "entity_n8y8tnk2p9339ti393yi",
  "id": "account_in71c4amph0vgo2qllky",
  "informational_entity_id": null,
  "interest_accrued": "0.01",
  "interest_accrued_at": "2020-01-31",
  "name": "My first account!",
  "replacement": {
    "replaced_account_id": null,
    "replaced_by_account_id": null
  },
  "status": "open",
  "type": "account"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="close-an-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Account|[account](#schemaaccount)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## List ACH Prenotifications

<a id="opIdlist_ach_prenotifications"></a>

> Code samples

```bash
curl https://example.com/ach_prenotifications \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /ach_prenotifications`

<h3 id="list-ach-prenotifications-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|none|
|limit|query|integer|false|none|
|created_at.after|query|string(date-time)|false|none|
|created_at.before|query|string(date-time)|false|none|
|created_at.on_or_after|query|string(date-time)|false|none|
|created_at.on_or_before|query|string(date-time)|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "account_number": "987654321",
      "addendum": null,
      "company_descriptive_date": null,
      "company_discretionary_data": null,
      "company_entry_description": null,
      "company_name": null,
      "created_at": "2020-01-31T23:59:59Z",
      "credit_debit_indicator": null,
      "effective_date": null,
      "id": "ach_prenotification_ubjf9qqsxl3obbcn1u34",
      "prenotification_return": null,
      "routing_number": "101050001",
      "status": "submitted",
      "type": "ach_prenotification"
    }
  ],
  "next_cursor": "v57w5d"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="list-ach-prenotifications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ACH Prenotification List|[ach_prenotification_list](#schemaach_prenotification_list)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create an ACH Prenotification

<a id="opIdcreate_an_ach_prenotification"></a>

> Code samples

```bash
curl https://example.com/ach_prenotifications \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "account_number": "987654321",
    "routing_number": "101050001"
  }'
```

`POST /ach_prenotifications`

> Body parameter

```json
{
  "account_number": "987654321",
  "routing_number": "101050001"
}
```

<h3 id="create-an-ach-prenotification-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[create_an_ach_prenotification_parameters](#schemacreate_an_ach_prenotification_parameters)|true|none|
|» account_number|body|string|true|The account number for the destination account.|
|» addendum|body|string|false|Additional information that will be sent to the recipient.|
|» company_descriptive_date|body|string|false|The description of the date of the transfer.|
|» company_discretionary_data|body|string|false|The data you choose to associate with the transfer.|
|» company_entry_description|body|string|false|The description of the transfer you wish to be shown to the recipient.|
|» company_name|body|string|false|The name by which the recipient knows you.|
|» credit_debit_indicator|body|string|false|Whether the Prenotification is for a future debit or credit.|
|» effective_date|body|string(date)|false|The transfer effective date in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.|
|» individual_id|body|string|false|Your identifer for the transfer recipient.|
|» individual_name|body|string|false|The name of the transfer recipient. This value is information and not verified by the recipient's bank.|
|» routing_number|body|string|true|The American Bankers' Association (ABA) Routing Transit Number (RTN) for the destination account.|
|» standard_entry_class_code|body|string|false|The Standard Entry Class (SEC) code to use for the ACH Prenotification.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» credit_debit_indicator|credit|
|» credit_debit_indicator|debit|
|» standard_entry_class_code|corporate_credit_or_debit|
|» standard_entry_class_code|prearranged_payments_and_deposit|
|» standard_entry_class_code|internet_initiated|

> Example responses

> 200 Response

```json
{
  "account_number": "987654321",
  "addendum": null,
  "company_descriptive_date": null,
  "company_discretionary_data": null,
  "company_entry_description": null,
  "company_name": null,
  "created_at": "2020-01-31T23:59:59Z",
  "credit_debit_indicator": null,
  "effective_date": null,
  "id": "ach_prenotification_ubjf9qqsxl3obbcn1u34",
  "prenotification_return": null,
  "routing_number": "101050001",
  "status": "submitted",
  "type": "ach_prenotification"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="create-an-ach-prenotification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ACH Prenotification|[ach_prenotification](#schemaach_prenotification)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Retrieve an ACH Prenotification

<a id="opIdretrieve_an_ach_prenotification"></a>

> Code samples

```bash
curl https://example.com/ach_prenotifications/ach_prenotification_ubjf9qqsxl3obbcn1u34 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /ach_prenotifications/{ach_prenotification_id}`

<h3 id="retrieve-an-ach-prenotification-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ach_prenotification_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "account_number": "987654321",
  "addendum": null,
  "company_descriptive_date": null,
  "company_discretionary_data": null,
  "company_entry_description": null,
  "company_name": null,
  "created_at": "2020-01-31T23:59:59Z",
  "credit_debit_indicator": null,
  "effective_date": null,
  "id": "ach_prenotification_ubjf9qqsxl3obbcn1u34",
  "prenotification_return": null,
  "routing_number": "101050001",
  "status": "submitted",
  "type": "ach_prenotification"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="retrieve-an-ach-prenotification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ACH Prenotification|[ach_prenotification](#schemaach_prenotification)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## List ACH Transfers

<a id="opIdlist_ach_transfers"></a>

> Code samples

```bash
curl https://example.com/ach_transfers \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /ach_transfers`

<h3 id="list-ach-transfers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|none|
|limit|query|integer|false|none|
|account_id|query|string|false|none|
|external_account_id|query|string|false|none|
|created_at.after|query|string(date-time)|false|none|
|created_at.before|query|string(date-time)|false|none|
|created_at.on_or_after|query|string(date-time)|false|none|
|created_at.on_or_before|query|string(date-time)|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "account_id": "account_in71c4amph0vgo2qllky",
      "account_number": "987654321",
      "addendum": null,
      "amount": 100,
      "approval": {
        "approved_at": "2020-01-31T23:59:59Z"
      },
      "cancellation": null,
      "company_descriptive_date": null,
      "company_discretionary_data": null,
      "company_entry_description": null,
      "company_name": "National Phonograph Company",
      "created_at": "2020-01-31T23:59:59Z",
      "currency": "USD",
      "external_account_id": "external_account_ukk55lr923a3ac0pp7iv",
      "funding": "checking",
      "id": "ach_transfer_uoxatyh3lt5evrsdvo7q",
      "individual_id": null,
      "individual_name": "Ian Crease",
      "network": "ach",
      "notification_of_change": null,
      "return": null,
      "routing_number": "101050001",
      "standard_entry_class_code": "corporate_credit_or_debit",
      "statement_descriptor": "Statement descriptor",
      "status": "returned",
      "submission": {
        "submitted_at": "2020-01-31T23:59:59Z",
        "trace_number": "058349238292834"
      },
      "template_id": "ach_transfer_template_wofoi8uhkjzi5rubh3kt",
      "transaction_id": "transaction_uyrp7fld2ium70oa7oi",
      "type": "ach_transfer"
    }
  ],
  "next_cursor": "v57w5d"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="list-ach-transfers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ACH Transfer List|[ach_transfer_list](#schemaach_transfer_list)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create an ACH Transfer

<a id="opIdcreate_an_ach_transfer"></a>

> Code samples

```bash
curl https://example.com/ach_transfers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "account_id": "account_in71c4amph0vgo2qllky",
    "account_number": "987654321",
    "amount": 100,
    "routing_number": "101050001",
    "statement_descriptor": "New ACH transfer"
  }'
```

`POST /ach_transfers`

> Body parameter

```json
{
  "account_id": "account_in71c4amph0vgo2qllky",
  "account_number": "987654321",
  "amount": 100,
  "routing_number": "101050001",
  "statement_descriptor": "New ACH transfer"
}
```

<h3 id="create-an-ach-transfer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[create_an_ach_transfer_parameters](#schemacreate_an_ach_transfer_parameters)|true|none|
|» account_id|body|string|true|The Increase identifier for the account that will send the transfer.|
|» account_number|body|string|false|The account number for the destination account.|
|» addendum|body|string|false|Additional information that will be sent to the recipient. This is included in the transfer data sent to the receiving bank.|
|» amount|body|integer|true|The transfer amount in cents. A positive amount originates a credit transfer pushing funds to the receiving account. A negative amount originates a debit transfer pulling funds from the receiving account.|
|» company_descriptive_date|body|string|false|The description of the date of the transfer, usually in the format `YYYYMMDD`. This is included in the transfer data sent to the receiving bank.|
|» company_discretionary_data|body|string|false|The data you choose to associate with the transfer. This is included in the transfer data sent to the receiving bank.|
|» company_entry_description|body|string|false|A description of the transfer. This is included in the transfer data sent to the receiving bank.|
|» company_name|body|string|false|The name by which the recipient knows you. This is included in the transfer data sent to the receiving bank.|
|» effective_date|body|string(date)|false|The transfer effective date in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.|
|» external_account_id|body|string|false|The ID of an External Account to initiate a transfer to. If this parameter is provided, `account_number`, `routing_number`, and `funding` must be absent.|
|» funding|body|string|false|The type of the account to which the transfer will be sent.|
|» individual_id|body|string|false|Your identifer for the transfer recipient.|
|» individual_name|body|string|false|The name of the transfer recipient. This value is informational and not verified by the recipient's bank.|
|» require_approval|body|boolean|false|Whether the transfer requires explicit approval via the dashboard or API.|
|» routing_number|body|string|false|The American Bankers' Association (ABA) Routing Transit Number (RTN) for the destination account.|
|» standard_entry_class_code|body|string|false|The Standard Entry Class (SEC) code to use for the transfer.|
|» statement_descriptor|body|string|true|A description you choose to give the transfer. This will be saved with the transfer details, displayed in the dashboard, and returned by the API. If `individual_name` and `company_name` are not explicitly set by this API, the `statement_descriptor` will be sent in those fields to the receiving bank to help the customer recognize the transfer. You are highly encouraged to pass `individual_name` and `company_name` instead of relying on this fallback.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» funding|checking|
|» funding|savings|
|» standard_entry_class_code|corporate_credit_or_debit|
|» standard_entry_class_code|prearranged_payments_and_deposit|
|» standard_entry_class_code|internet_initiated|

> Example responses

> 200 Response

```json
{
  "account_id": "account_in71c4amph0vgo2qllky",
  "account_number": "987654321",
  "addendum": null,
  "amount": 100,
  "approval": {
    "approved_at": "2020-01-31T23:59:59Z"
  },
  "cancellation": null,
  "company_descriptive_date": null,
  "company_discretionary_data": null,
  "company_entry_description": null,
  "company_name": "National Phonograph Company",
  "created_at": "2020-01-31T23:59:59Z",
  "currency": "USD",
  "external_account_id": "external_account_ukk55lr923a3ac0pp7iv",
  "funding": "checking",
  "id": "ach_transfer_uoxatyh3lt5evrsdvo7q",
  "individual_id": null,
  "individual_name": "Ian Crease",
  "network": "ach",
  "notification_of_change": null,
  "return": null,
  "routing_number": "101050001",
  "standard_entry_class_code": "corporate_credit_or_debit",
  "statement_descriptor": "Statement descriptor",
  "status": "returned",
  "submission": {
    "submitted_at": "2020-01-31T23:59:59Z",
    "trace_number": "058349238292834"
  },
  "template_id": "ach_transfer_template_wofoi8uhkjzi5rubh3kt",
  "transaction_id": "transaction_uyrp7fld2ium70oa7oi",
  "type": "ach_transfer"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="create-an-ach-transfer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ACH Transfer|[ach_transfer](#schemaach_transfer)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Retrieve an ACH Transfer

<a id="opIdretrieve_an_ach_transfer"></a>

> Code samples

```bash
curl https://example.com/ach_transfers/ach_transfer_uoxatyh3lt5evrsdvo7q \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /ach_transfers/{ach_transfer_id}`

<h3 id="retrieve-an-ach-transfer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ach_transfer_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "account_id": "account_in71c4amph0vgo2qllky",
  "account_number": "987654321",
  "addendum": null,
  "amount": 100,
  "approval": {
    "approved_at": "2020-01-31T23:59:59Z"
  },
  "cancellation": null,
  "company_descriptive_date": null,
  "company_discretionary_data": null,
  "company_entry_description": null,
  "company_name": "National Phonograph Company",
  "created_at": "2020-01-31T23:59:59Z",
  "currency": "USD",
  "external_account_id": "external_account_ukk55lr923a3ac0pp7iv",
  "funding": "checking",
  "id": "ach_transfer_uoxatyh3lt5evrsdvo7q",
  "individual_id": null,
  "individual_name": "Ian Crease",
  "network": "ach",
  "notification_of_change": null,
  "return": null,
  "routing_number": "101050001",
  "standard_entry_class_code": "corporate_credit_or_debit",
  "statement_descriptor": "Statement descriptor",
  "status": "returned",
  "submission": {
    "submitted_at": "2020-01-31T23:59:59Z",
    "trace_number": "058349238292834"
  },
  "template_id": "ach_transfer_template_wofoi8uhkjzi5rubh3kt",
  "transaction_id": "transaction_uyrp7fld2ium70oa7oi",
  "type": "ach_transfer"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="retrieve-an-ach-transfer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ACH Transfer|[ach_transfer](#schemaach_transfer)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Approve an ACH Transfer

<a id="opIdapprove_an_ach_transfer"></a>

> Code samples

```bash
curl https://example.com/ach_transfers/ach_transfer_uoxatyh3lt5evrsdvo7q/approve \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /ach_transfers/{ach_transfer_id}/approve`

Approves an ACH Transfer in a pending_approval state.

<h3 id="approve-an-ach-transfer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ach_transfer_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "account_id": "account_in71c4amph0vgo2qllky",
  "account_number": "987654321",
  "addendum": null,
  "amount": 100,
  "approval": {
    "approved_at": "2020-01-31T23:59:59Z"
  },
  "cancellation": null,
  "company_descriptive_date": null,
  "company_discretionary_data": null,
  "company_entry_description": null,
  "company_name": "National Phonograph Company",
  "created_at": "2020-01-31T23:59:59Z",
  "currency": "USD",
  "external_account_id": "external_account_ukk55lr923a3ac0pp7iv",
  "funding": "checking",
  "id": "ach_transfer_uoxatyh3lt5evrsdvo7q",
  "individual_id": null,
  "individual_name": "Ian Crease",
  "network": "ach",
  "notification_of_change": null,
  "return": null,
  "routing_number": "101050001",
  "standard_entry_class_code": "corporate_credit_or_debit",
  "statement_descriptor": "Statement descriptor",
  "status": "returned",
  "submission": {
    "submitted_at": "2020-01-31T23:59:59Z",
    "trace_number": "058349238292834"
  },
  "template_id": "ach_transfer_template_wofoi8uhkjzi5rubh3kt",
  "transaction_id": "transaction_uyrp7fld2ium70oa7oi",
  "type": "ach_transfer"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="approve-an-ach-transfer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ACH Transfer|[ach_transfer](#schemaach_transfer)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Cancel a pending ACH Transfer

<a id="opIdcancel_a_pending_ach_transfer"></a>

> Code samples

```bash
curl https://example.com/ach_transfers/ach_transfer_uoxatyh3lt5evrsdvo7q/cancel \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /ach_transfers/{ach_transfer_id}/cancel`

Cancels an ACH Transfer in a pending_approval state.

<h3 id="cancel-a-pending-ach-transfer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ach_transfer_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "account_id": "account_in71c4amph0vgo2qllky",
  "account_number": "987654321",
  "addendum": null,
  "amount": 100,
  "approval": {
    "approved_at": "2020-01-31T23:59:59Z"
  },
  "cancellation": null,
  "company_descriptive_date": null,
  "company_discretionary_data": null,
  "company_entry_description": null,
  "company_name": "National Phonograph Company",
  "created_at": "2020-01-31T23:59:59Z",
  "currency": "USD",
  "external_account_id": "external_account_ukk55lr923a3ac0pp7iv",
  "funding": "checking",
  "id": "ach_transfer_uoxatyh3lt5evrsdvo7q",
  "individual_id": null,
  "individual_name": "Ian Crease",
  "network": "ach",
  "notification_of_change": null,
  "return": null,
  "routing_number": "101050001",
  "standard_entry_class_code": "corporate_credit_or_debit",
  "statement_descriptor": "Statement descriptor",
  "status": "returned",
  "submission": {
    "submitted_at": "2020-01-31T23:59:59Z",
    "trace_number": "058349238292834"
  },
  "template_id": "ach_transfer_template_wofoi8uhkjzi5rubh3kt",
  "transaction_id": "transaction_uyrp7fld2ium70oa7oi",
  "type": "ach_transfer"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="cancel-a-pending-ach-transfer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ACH Transfer|[ach_transfer](#schemaach_transfer)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## List Card Disputes

<a id="opIdlist_card_disputes"></a>

> Code samples

```bash
curl https://example.com/card_disputes \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /card_disputes`

<h3 id="list-card-disputes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|none|
|limit|query|integer|false|none|
|created_at.after|query|string(date-time)|false|none|
|created_at.before|query|string(date-time)|false|none|
|created_at.on_or_after|query|string(date-time)|false|none|
|created_at.on_or_before|query|string(date-time)|false|none|
|status.in|query|[string]|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status.in|pending_reviewing|
|status.in|accepted|
|status.in|rejected|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "acceptance": null,
      "created_at": "2020-01-31T23:59:59Z",
      "disputed_transaction_id": "transaction_uyrp7fld2ium70oa7oi",
      "explanation": "Unauthorized recurring purchase",
      "id": "card_dispute_h9sc95nbl1cgltpp7men",
      "rejection": null,
      "status": "pending_reviewing",
      "type": "card_dispute"
    }
  ],
  "next_cursor": "v57w5d"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="list-card-disputes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Card Dispute List|[card_dispute_list](#schemacard_dispute_list)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create a Card Dispute

<a id="opIdcreate_a_card_dispute"></a>

> Code samples

```bash
curl https://example.com/card_disputes \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "disputed_transaction_id": "transaction_uyrp7fld2ium70oa7oi",
    "explanation": "Unauthorized recurring transaction."
  }'
```

`POST /card_disputes`

> Body parameter

```json
{
  "disputed_transaction_id": "transaction_uyrp7fld2ium70oa7oi",
  "explanation": "Unauthorized recurring transaction."
}
```

<h3 id="create-a-card-dispute-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[create_a_card_dispute_parameters](#schemacreate_a_card_dispute_parameters)|true|none|
|» disputed_transaction_id|body|string|true|The Transaction you wish to dispute. This Transaction must have a `source_type` of `card_settlement`.|
|» explanation|body|string|true|Why you are disputing this Transaction.|

> Example responses

> 200 Response

```json
{
  "acceptance": null,
  "created_at": "2020-01-31T23:59:59Z",
  "disputed_transaction_id": "transaction_uyrp7fld2ium70oa7oi",
  "explanation": "Unauthorized recurring purchase",
  "id": "card_dispute_h9sc95nbl1cgltpp7men",
  "rejection": null,
  "status": "pending_reviewing",
  "type": "card_dispute"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="create-a-card-dispute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Card Dispute|[card_dispute](#schemacard_dispute)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Retrieve a Card Dispute

<a id="opIdretrieve_a_card_dispute"></a>

> Code samples

```bash
curl https://example.com/card_disputes/card_dispute_h9sc95nbl1cgltpp7men \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /card_disputes/{card_dispute_id}`

<h3 id="retrieve-a-card-dispute-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|card_dispute_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "acceptance": null,
  "created_at": "2020-01-31T23:59:59Z",
  "disputed_transaction_id": "transaction_uyrp7fld2ium70oa7oi",
  "explanation": "Unauthorized recurring purchase",
  "id": "card_dispute_h9sc95nbl1cgltpp7men",
  "rejection": null,
  "status": "pending_reviewing",
  "type": "card_dispute"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="retrieve-a-card-dispute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Card Dispute|[card_dispute](#schemacard_dispute)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## List Card Profiles

<a id="opIdlist_card_profiles"></a>

> Code samples

```bash
curl https://example.com/card_profiles \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /card_profiles`

<h3 id="list-card-profiles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|none|
|limit|query|integer|false|none|
|status.in|query|[string]|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status.in|pending|
|status.in|rejected|
|status.in|active|
|status.in|archived|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "created_at": "2020-01-31T23:59:59Z",
      "description": "My Card Profile",
      "digital_wallets": {
        "app_icon_file_id": "file_8zxqkwlh43wo144u8yec",
        "background_image_file_id": "file_1ai913suu1zfn1pdetru",
        "card_description": "MyBank Signature Card",
        "contact_email": "user@example.com",
        "contact_phone": "+18885551212",
        "contact_website": "https://example.com",
        "issuer_name": "MyBank",
        "text_color": {
          "blue": 59,
          "green": 43,
          "red": 26
        }
      },
      "id": "card_profile_cox5y73lob2eqly18piy",
      "status": "active",
      "type": "card_profile"
    }
  ],
  "next_cursor": "v57w5d"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="list-card-profiles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Card Profile List|[card_profile_list](#schemacard_profile_list)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create a Card Profile

<a id="opIdcreate_a_card_profile"></a>

> Code samples

```bash
curl https://example.com/card_profiles \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "My Card Profile",
    "digital_wallets": {
      "app_icon_file_id": "file_8zxqkwlh43wo144u8yec",
      "background_image_file_id": "file_1ai913suu1zfn1pdetru",
      "card_description": "MyBank Signature Card",
      "contact_email": "user@example.com",
      "contact_phone": "+18885551212",
      "contact_website": "https://example.com",
      "issuer_name": "MyBank",
      "text_color": {
        "blue": 59,
        "green": 43,
        "red": 26
      }
    }
  }'
```

`POST /card_profiles`

> Body parameter

```json
{
  "description": "My Card Profile",
  "digital_wallets": {
    "app_icon_file_id": "file_8zxqkwlh43wo144u8yec",
    "background_image_file_id": "file_1ai913suu1zfn1pdetru",
    "card_description": "MyBank Signature Card",
    "contact_email": "user@example.com",
    "contact_phone": "+18885551212",
    "contact_website": "https://example.com",
    "issuer_name": "MyBank",
    "text_color": {
      "blue": 59,
      "green": 43,
      "red": 26
    }
  }
}
```

<h3 id="create-a-card-profile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[create_a_card_profile_parameters](#schemacreate_a_card_profile_parameters)|true|none|
|» description|body|string|true|A description you can use to identify the Card Profile.|
|» digital_wallets|body|object|true|How Cards should appear in digital wallets such as Apple Pay. Different wallets will use these values to render card artwork appropriately for their app.|
|» » app_icon_file_id|body|string|true|The identifier of the File containing the card's icon image.|
|» » background_image_file_id|body|string|true|The identifier of the File containing the card's front image.|
|» » card_description|body|string|true|A user-facing description for the card itself.|
|» » contact_email|body|string|false|An email address the user can contact to receive support for their card.|
|» » contact_phone|body|string|false|A phone number the user can contact to receive support for their card.|
|» » contact_website|body|string|false|A website the user can visit to view and receive support for their card.|
|» » issuer_name|body|string|true|A user-facing description for whoever is issuing the card.|
|» » text_color|body|object|false|The Card's text color, specified as an RGB triple. The default is white.|
|» » » blue|body|integer|true|The value of the blue channel in the RGB color.|
|» » » green|body|integer|true|The value of the green channel in the RGB color.|
|» » » red|body|integer|true|The value of the red channel in the RGB color.|

> Example responses

> 200 Response

```json
{
  "created_at": "2020-01-31T23:59:59Z",
  "description": "My Card Profile",
  "digital_wallets": {
    "app_icon_file_id": "file_8zxqkwlh43wo144u8yec",
    "background_image_file_id": "file_1ai913suu1zfn1pdetru",
    "card_description": "MyBank Signature Card",
    "contact_email": "user@example.com",
    "contact_phone": "+18885551212",
    "contact_website": "https://example.com",
    "issuer_name": "MyBank",
    "text_color": {
      "blue": 59,
      "green": 43,
      "red": 26
    }
  },
  "id": "card_profile_cox5y73lob2eqly18piy",
  "status": "active",
  "type": "card_profile"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="create-a-card-profile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Card Profile|[card_profile](#schemacard_profile)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Retrieve a Card Profile

<a id="opIdretrieve_a_card_profile"></a>

> Code samples

```bash
curl https://example.com/card_profiles/card_profile_cox5y73lob2eqly18piy \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /card_profiles/{card_profile_id}`

<h3 id="retrieve-a-card-profile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|card_profile_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "created_at": "2020-01-31T23:59:59Z",
  "description": "My Card Profile",
  "digital_wallets": {
    "app_icon_file_id": "file_8zxqkwlh43wo144u8yec",
    "background_image_file_id": "file_1ai913suu1zfn1pdetru",
    "card_description": "MyBank Signature Card",
    "contact_email": "user@example.com",
    "contact_phone": "+18885551212",
    "contact_website": "https://example.com",
    "issuer_name": "MyBank",
    "text_color": {
      "blue": 59,
      "green": 43,
      "red": 26
    }
  },
  "id": "card_profile_cox5y73lob2eqly18piy",
  "status": "active",
  "type": "card_profile"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="retrieve-a-card-profile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Card Profile|[card_profile](#schemacard_profile)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## List Cards

<a id="opIdlist_cards"></a>

> Code samples

```bash
curl https://example.com/cards \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /cards`

<h3 id="list-cards-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|none|
|limit|query|integer|false|none|
|account_id|query|string|false|none|
|created_at.after|query|string(date-time)|false|none|
|created_at.before|query|string(date-time)|false|none|
|created_at.on_or_after|query|string(date-time)|false|none|
|created_at.on_or_before|query|string(date-time)|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "account_id": "account_in71c4amph0vgo2qllky",
      "billing_address": {
        "city": "New York",
        "line1": "33 Liberty Street",
        "line2": null,
        "postal_code": "10045",
        "state": "NY"
      },
      "created_at": "2020-01-31T23:59:59Z",
      "description": "Office Expenses",
      "digital_wallet": {
        "card_profile_id": "card_profile_cox5y73lob2eqly18piy",
        "email": "user@example.com",
        "phone": "+15551234567"
      },
      "expiration_month": 11,
      "expiration_year": 2028,
      "id": "card_oubs0hwk5rn6knuecxg2",
      "last4": "4242",
      "replacement": {
        "replaced_by_card_id": null,
        "replaced_card_id": null
      },
      "status": "active",
      "type": "card"
    }
  ],
  "next_cursor": "v57w5d"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="list-cards-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Card List|[card_list](#schemacard_list)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create a Card

<a id="opIdcreate_a_card"></a>

> Code samples

```bash
curl https://example.com/cards \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "account_id": "account_in71c4amph0vgo2qllky",
    "description": "Card for Ian Crease"
  }'
```

`POST /cards`

> Body parameter

```json
{
  "account_id": "account_in71c4amph0vgo2qllky",
  "description": "Card for Ian Crease"
}
```

<h3 id="create-a-card-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[create_a_card_parameters](#schemacreate_a_card_parameters)|true|none|
|» account_id|body|string|true|The Account the card should belong to.|
|» billing_address|body|object|false|The card's billing address.|
|» » city|body|string|true|The city of the billing address.|
|» » line1|body|string|true|The first line of the billing address.|
|» » line2|body|string|false|The second line of the billing address.|
|» » postal_code|body|string|true|The postal code of the billing address.|
|» » state|body|string|true|The US state of the billing address.|
|» description|body|string|false|The description you choose to give the card.|
|» digital_wallet|body|object|false|The contact information used in the two-factor steps for digital wallet card creation. At least one field must be present to complete the digital wallet steps.|
|» » card_profile_id|body|string|false|The card profile assigned to this digital card. Card profiles may also be assigned at the program level.|
|» » email|body|string|false|An email address that can be used to verify the cardholder via one-time passcode over email.|
|» » phone|body|string|false|A phone number that can be used to verify the cardholder via one-time passcode over SMS.|

> Example responses

> 200 Response

```json
{
  "account_id": "account_in71c4amph0vgo2qllky",
  "billing_address": {
    "city": "New York",
    "line1": "33 Liberty Street",
    "line2": null,
    "postal_code": "10045",
    "state": "NY"
  },
  "created_at": "2020-01-31T23:59:59Z",
  "description": "Office Expenses",
  "digital_wallet": {
    "card_profile_id": "card_profile_cox5y73lob2eqly18piy",
    "email": "user@example.com",
    "phone": "+15551234567"
  },
  "expiration_month": 11,
  "expiration_year": 2028,
  "id": "card_oubs0hwk5rn6knuecxg2",
  "last4": "4242",
  "replacement": {
    "replaced_by_card_id": null,
    "replaced_card_id": null
  },
  "status": "active",
  "type": "card"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="create-a-card-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Card|[card](#schemacard)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Retrieve a Card

<a id="opIdretrieve_a_card"></a>

> Code samples

```bash
curl https://example.com/cards/card_oubs0hwk5rn6knuecxg2 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /cards/{card_id}`

<h3 id="retrieve-a-card-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|card_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "account_id": "account_in71c4amph0vgo2qllky",
  "billing_address": {
    "city": "New York",
    "line1": "33 Liberty Street",
    "line2": null,
    "postal_code": "10045",
    "state": "NY"
  },
  "created_at": "2020-01-31T23:59:59Z",
  "description": "Office Expenses",
  "digital_wallet": {
    "card_profile_id": "card_profile_cox5y73lob2eqly18piy",
    "email": "user@example.com",
    "phone": "+15551234567"
  },
  "expiration_month": 11,
  "expiration_year": 2028,
  "id": "card_oubs0hwk5rn6knuecxg2",
  "last4": "4242",
  "replacement": {
    "replaced_by_card_id": null,
    "replaced_card_id": null
  },
  "status": "active",
  "type": "card"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="retrieve-a-card-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Card|[card](#schemacard)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Update a Card

<a id="opIdupdate_a_card"></a>

> Code samples

```bash
curl https://example.com/cards/card_oubs0hwk5rn6knuecxg2 \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "New description"
  }'
```

`PATCH /cards/{card_id}`

> Body parameter

```json
{
  "description": "New description"
}
```

<h3 id="update-a-card-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|card_id|path|string|true|none|
|body|body|[update_a_card_parameters](#schemaupdate_a_card_parameters)|true|none|
|» billing_address|body|object|false|The card's updated billing address.|
|» » city|body|string|true|The city of the billing address.|
|» » line1|body|string|true|The first line of the billing address.|
|» » line2|body|string|false|The second line of the billing address.|
|» » postal_code|body|string|true|The postal code of the billing address.|
|» » state|body|string|true|The US state of the billing address.|
|» description|body|string|false|The description you choose to give the card.|
|» digital_wallet|body|object|false|The contact information used in the two-factor steps for digital wallet card creation. At least one field must be present to complete the digital wallet steps.|
|» » card_profile_id|body|string|false|The card profile assigned to this digital card. Card profiles may also be assigned at the program level.|
|» » email|body|string|false|An email address that can be used to verify the cardholder via one-time passcode over email.|
|» » phone|body|string|false|A phone number that can be used to verify the cardholder via one-time passcode over SMS.|
|» status|body|string|false|The status to update the Card with.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|active|
|» status|disabled|
|» status|canceled|

> Example responses

> 200 Response

```json
{
  "account_id": "account_in71c4amph0vgo2qllky",
  "billing_address": {
    "city": "New York",
    "line1": "33 Liberty Street",
    "line2": null,
    "postal_code": "10045",
    "state": "NY"
  },
  "created_at": "2020-01-31T23:59:59Z",
  "description": "Office Expenses",
  "digital_wallet": {
    "card_profile_id": "card_profile_cox5y73lob2eqly18piy",
    "email": "user@example.com",
    "phone": "+15551234567"
  },
  "expiration_month": 11,
  "expiration_year": 2028,
  "id": "card_oubs0hwk5rn6knuecxg2",
  "last4": "4242",
  "replacement": {
    "replaced_by_card_id": null,
    "replaced_card_id": null
  },
  "status": "active",
  "type": "card"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="update-a-card-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Card|[card](#schemacard)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Retrieve sensitive details for a Card

<a id="opIdretrieve_sensitive_details_for_a_card"></a>

> Code samples

```bash
curl https://example.com/cards/card_oubs0hwk5rn6knuecxg2/details \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /cards/{card_id}/details`

<h3 id="retrieve-sensitive-details-for-a-card-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|card_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "card_id": "card_oubs0hwk5rn6knuecxg2",
  "expiration_month": 7,
  "expiration_year": 2025,
  "primary_account_number": "4242424242424242",
  "type": "card_details",
  "verification_code": "123"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="retrieve-sensitive-details-for-a-card-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Card Details|[card_details](#schemacard_details)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## List Check Deposits

<a id="opIdlist_check_deposits"></a>

> Code samples

```bash
curl https://example.com/check_deposits \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /check_deposits`

<h3 id="list-check-deposits-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|none|
|limit|query|integer|false|none|
|account_id|query|string|false|none|
|created_at.after|query|string(date-time)|false|none|
|created_at.before|query|string(date-time)|false|none|
|created_at.on_or_after|query|string(date-time)|false|none|
|created_at.on_or_before|query|string(date-time)|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "account_id": "account_in71c4amph0vgo2qllky",
      "amount": 1000,
      "back_image_file_id": null,
      "created_at": "2020-01-31T23:59:59Z",
      "currency": "USD",
      "deposit_acceptance": null,
      "deposit_rejection": null,
      "deposit_return": null,
      "front_image_file_id": "file_makxrc67oh9l6sg7w9yc",
      "id": "check_deposit_f06n9gpg7sxn8t19lfc1",
      "status": "submitted",
      "transaction_id": "transaction_uyrp7fld2ium70oa7oi",
      "type": "check_deposit"
    }
  ],
  "next_cursor": "v57w5d"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="list-check-deposits-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Check Deposit List|[check_deposit_list](#schemacheck_deposit_list)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create a Check Deposit

<a id="opIdcreate_a_check_deposit"></a>

> Code samples

```bash
curl https://example.com/check_deposits \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "account_id": "account_in71c4amph0vgo2qllky",
    "amount": 1000,
    "back_image_file_id": "file_26khfk98mzfz90a11oqx",
    "currency": "USD",
    "front_image_file_id": "file_hkv175ovmc2tb2v2zbrm"
  }'
```

`POST /check_deposits`

> Body parameter

```json
{
  "account_id": "account_in71c4amph0vgo2qllky",
  "amount": 1000,
  "back_image_file_id": "file_26khfk98mzfz90a11oqx",
  "currency": "USD",
  "front_image_file_id": "file_hkv175ovmc2tb2v2zbrm"
}
```

<h3 id="create-a-check-deposit-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[create_a_check_deposit_parameters](#schemacreate_a_check_deposit_parameters)|true|none|
|» account_id|body|string|true|The identifier for the Account to deposit the check in.|
|» amount|body|integer|true|The deposit amount in the minor unit of the account currency. For dollars, for example, this is cents.|
|» back_image_file_id|body|string|true|The File containing the check's back image.|
|» currency|body|string|true|The currency to use for the deposit.|
|» front_image_file_id|body|string|true|The File containing the check's front image.|

> Example responses

> 200 Response

```json
{
  "account_id": "account_in71c4amph0vgo2qllky",
  "amount": 1000,
  "back_image_file_id": null,
  "created_at": "2020-01-31T23:59:59Z",
  "currency": "USD",
  "deposit_acceptance": null,
  "deposit_rejection": null,
  "deposit_return": null,
  "front_image_file_id": "file_makxrc67oh9l6sg7w9yc",
  "id": "check_deposit_f06n9gpg7sxn8t19lfc1",
  "status": "submitted",
  "transaction_id": "transaction_uyrp7fld2ium70oa7oi",
  "type": "check_deposit"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="create-a-check-deposit-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Check Deposit|[check_deposit](#schemacheck_deposit)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Retrieve a Check Deposit

<a id="opIdretrieve_a_check_deposit"></a>

> Code samples

```bash
curl https://example.com/check_deposits/check_deposit_instruction_q2shv7x9qhevfm71kor8 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /check_deposits/{check_deposit_id}`

<h3 id="retrieve-a-check-deposit-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|check_deposit_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "account_id": "account_in71c4amph0vgo2qllky",
  "amount": 1000,
  "back_image_file_id": null,
  "created_at": "2020-01-31T23:59:59Z",
  "currency": "USD",
  "deposit_acceptance": null,
  "deposit_rejection": null,
  "deposit_return": null,
  "front_image_file_id": "file_makxrc67oh9l6sg7w9yc",
  "id": "check_deposit_f06n9gpg7sxn8t19lfc1",
  "status": "submitted",
  "transaction_id": "transaction_uyrp7fld2ium70oa7oi",
  "type": "check_deposit"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="retrieve-a-check-deposit-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Check Deposit|[check_deposit](#schemacheck_deposit)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## List Check Transfers

<a id="opIdlist_check_transfers"></a>

> Code samples

```bash
curl https://example.com/check_transfers \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /check_transfers`

<h3 id="list-check-transfers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|none|
|limit|query|integer|false|none|
|account_id|query|string|false|none|
|created_at.after|query|string(date-time)|false|none|
|created_at.before|query|string(date-time)|false|none|
|created_at.on_or_after|query|string(date-time)|false|none|
|created_at.on_or_before|query|string(date-time)|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "account_id": "account_in71c4amph0vgo2qllky",
      "address_city": "New York",
      "address_line1": "33 Liberty Street",
      "address_line2": null,
      "address_state": "NY",
      "address_zip": "10045",
      "amount": 1000,
      "created_at": "2020-01-31T23:59:59Z",
      "currency": "USD",
      "deposit": null,
      "id": "check_transfer_30b43acfu9vw8fyc4f5",
      "mailed_at": "2020-01-31T23:59:59Z",
      "message": "Invoice 29582",
      "note": null,
      "recipient_name": "Ian Crease",
      "return_address": null,
      "status": "mailed",
      "stop_payment_request": null,
      "submission": {
        "check_number": "130670"
      },
      "submitted_at": "2020-01-31T23:59:59Z",
      "template_id": "check_transfer_template_tr96ajellz6awlki022o",
      "transaction_id": "transaction_uyrp7fld2ium70oa7oi",
      "type": "check_transfer"
    }
  ],
  "next_cursor": "v57w5d"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="list-check-transfers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Check Transfer List|[check_transfer_list](#schemacheck_transfer_list)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create a Check Transfer

<a id="opIdcreate_a_check_transfer"></a>

> Code samples

```bash
curl https://example.com/check_transfers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "account_id": "account_in71c4amph0vgo2qllky",
    "address_city": "New York",
    "address_line1": "33 Liberty Street",
    "address_state": "NY",
    "address_zip": "10045",
    "amount": 1000,
    "currency": "USD",
    "message": "Check payment",
    "recipient_name": "Ian Crease"
  }'
```

`POST /check_transfers`

> Body parameter

```json
{
  "account_id": "account_in71c4amph0vgo2qllky",
  "address_city": "New York",
  "address_line1": "33 Liberty Street",
  "address_state": "NY",
  "address_zip": "10045",
  "amount": 1000,
  "currency": "USD",
  "message": "Check payment",
  "recipient_name": "Ian Crease"
}
```

<h3 id="create-a-check-transfer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[create_a_check_transfer_parameters](#schemacreate_a_check_transfer_parameters)|true|none|
|» account_id|body|string|true|The identifier for the account that will send the transfer.|
|» address_city|body|string|true|The city of the check's destination.|
|» address_line1|body|string|true|The street address of the check's destination.|
|» address_line2|body|string|false|The second line of the address of the check's destination.|
|» address_state|body|string|true|The state of the check's destination.|
|» address_zip|body|string|true|The postal code of the check's destination.|
|» amount|body|integer|true|The transfer amount in cents.|
|» message|body|string|true|The descriptor that will be printed on the memo field on the check.|
|» note|body|string|false|The descriptor that will be printed on the letter included with the check.|
|» recipient_name|body|string|true|The name that will be printed on the check.|
|» require_approval|body|boolean|false|Whether the transfer requires explicit approval via the dashboard or API.|
|» return_address|body|object|false|The return address to be printed on the check. If omitted this will default to the address of the Entity of the Account used to make the Check Transfer.|
|» » city|body|string|true|The city of the return address.|
|» » line1|body|string|true|The first line of the return address.|
|» » line2|body|string|false|The second line of the return address.|
|» » name|body|string|true|The name of the return address.|
|» » state|body|string|true|The US state of the return address.|
|» » zip|body|string|true|The postal code of the return address.|

> Example responses

> 200 Response

```json
{
  "account_id": "account_in71c4amph0vgo2qllky",
  "address_city": "New York",
  "address_line1": "33 Liberty Street",
  "address_line2": null,
  "address_state": "NY",
  "address_zip": "10045",
  "amount": 1000,
  "created_at": "2020-01-31T23:59:59Z",
  "currency": "USD",
  "deposit": null,
  "id": "check_transfer_30b43acfu9vw8fyc4f5",
  "mailed_at": "2020-01-31T23:59:59Z",
  "message": "Invoice 29582",
  "note": null,
  "recipient_name": "Ian Crease",
  "return_address": null,
  "status": "mailed",
  "stop_payment_request": null,
  "submission": {
    "check_number": "130670"
  },
  "submitted_at": "2020-01-31T23:59:59Z",
  "template_id": "check_transfer_template_tr96ajellz6awlki022o",
  "transaction_id": "transaction_uyrp7fld2ium70oa7oi",
  "type": "check_transfer"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="create-a-check-transfer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Check Transfer|[check_transfer](#schemacheck_transfer)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Retrieve a Check Transfer

<a id="opIdretrieve_a_check_transfer"></a>

> Code samples

```bash
curl https://example.com/check_transfers/check_transfer_30b43acfu9vw8fyc4f5 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /check_transfers/{check_transfer_id}`

<h3 id="retrieve-a-check-transfer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|check_transfer_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "account_id": "account_in71c4amph0vgo2qllky",
  "address_city": "New York",
  "address_line1": "33 Liberty Street",
  "address_line2": null,
  "address_state": "NY",
  "address_zip": "10045",
  "amount": 1000,
  "created_at": "2020-01-31T23:59:59Z",
  "currency": "USD",
  "deposit": null,
  "id": "check_transfer_30b43acfu9vw8fyc4f5",
  "mailed_at": "2020-01-31T23:59:59Z",
  "message": "Invoice 29582",
  "note": null,
  "recipient_name": "Ian Crease",
  "return_address": null,
  "status": "mailed",
  "stop_payment_request": null,
  "submission": {
    "check_number": "130670"
  },
  "submitted_at": "2020-01-31T23:59:59Z",
  "template_id": "check_transfer_template_tr96ajellz6awlki022o",
  "transaction_id": "transaction_uyrp7fld2ium70oa7oi",
  "type": "check_transfer"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="retrieve-a-check-transfer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Check Transfer|[check_transfer](#schemacheck_transfer)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Approve a Check Transfer

<a id="opIdapprove_a_check_transfer"></a>

> Code samples

```bash
curl https://example.com/check_transfers/check_transfer_30b43acfu9vw8fyc4f5/approve \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /check_transfers/{check_transfer_id}/approve`

<h3 id="approve-a-check-transfer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|check_transfer_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "account_id": "account_in71c4amph0vgo2qllky",
  "address_city": "New York",
  "address_line1": "33 Liberty Street",
  "address_line2": null,
  "address_state": "NY",
  "address_zip": "10045",
  "amount": 1000,
  "created_at": "2020-01-31T23:59:59Z",
  "currency": "USD",
  "deposit": null,
  "id": "check_transfer_30b43acfu9vw8fyc4f5",
  "mailed_at": "2020-01-31T23:59:59Z",
  "message": "Invoice 29582",
  "note": null,
  "recipient_name": "Ian Crease",
  "return_address": null,
  "status": "mailed",
  "stop_payment_request": null,
  "submission": {
    "check_number": "130670"
  },
  "submitted_at": "2020-01-31T23:59:59Z",
  "template_id": "check_transfer_template_tr96ajellz6awlki022o",
  "transaction_id": "transaction_uyrp7fld2ium70oa7oi",
  "type": "check_transfer"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="approve-a-check-transfer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Check Transfer|[check_transfer](#schemacheck_transfer)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Cancel a pending Check Transfer

<a id="opIdcancel_a_pending_check_transfer"></a>

> Code samples

```bash
curl https://example.com/check_transfers/check_transfer_30b43acfu9vw8fyc4f5/cancel \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /check_transfers/{check_transfer_id}/cancel`

<h3 id="cancel-a-pending-check-transfer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|check_transfer_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "account_id": "account_in71c4amph0vgo2qllky",
  "address_city": "New York",
  "address_line1": "33 Liberty Street",
  "address_line2": null,
  "address_state": "NY",
  "address_zip": "10045",
  "amount": 1000,
  "created_at": "2020-01-31T23:59:59Z",
  "currency": "USD",
  "deposit": null,
  "id": "check_transfer_30b43acfu9vw8fyc4f5",
  "mailed_at": "2020-01-31T23:59:59Z",
  "message": "Invoice 29582",
  "note": null,
  "recipient_name": "Ian Crease",
  "return_address": null,
  "status": "mailed",
  "stop_payment_request": null,
  "submission": {
    "check_number": "130670"
  },
  "submitted_at": "2020-01-31T23:59:59Z",
  "template_id": "check_transfer_template_tr96ajellz6awlki022o",
  "transaction_id": "transaction_uyrp7fld2ium70oa7oi",
  "type": "check_transfer"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="cancel-a-pending-check-transfer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Check Transfer|[check_transfer](#schemacheck_transfer)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Request a stop payment on a Check Transfer

<a id="opIdrequest_a_stop_payment_on_a_check_transfer"></a>

> Code samples

```bash
curl https://example.com/check_transfers/check_transfer_30b43acfu9vw8fyc4f5/stop_payment \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /check_transfers/{check_transfer_id}/stop_payment`

<h3 id="request-a-stop-payment-on-a-check-transfer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|check_transfer_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "account_id": "account_in71c4amph0vgo2qllky",
  "address_city": "New York",
  "address_line1": "33 Liberty Street",
  "address_line2": null,
  "address_state": "NY",
  "address_zip": "10045",
  "amount": 1000,
  "created_at": "2020-01-31T23:59:59Z",
  "currency": "USD",
  "deposit": null,
  "id": "check_transfer_30b43acfu9vw8fyc4f5",
  "mailed_at": "2020-01-31T23:59:59Z",
  "message": "Invoice 29582",
  "note": null,
  "recipient_name": "Ian Crease",
  "return_address": null,
  "status": "mailed",
  "stop_payment_request": null,
  "submission": {
    "check_number": "130670"
  },
  "submitted_at": "2020-01-31T23:59:59Z",
  "template_id": "check_transfer_template_tr96ajellz6awlki022o",
  "transaction_id": "transaction_uyrp7fld2ium70oa7oi",
  "type": "check_transfer"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="request-a-stop-payment-on-a-check-transfer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Check Transfer|[check_transfer](#schemacheck_transfer)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## List Declined Transactions

<a id="opIdlist_declined_transactions"></a>

> Code samples

```bash
curl https://example.com/declined_transactions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /declined_transactions`

<h3 id="list-declined-transactions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|none|
|limit|query|integer|false|none|
|account_id|query|string|false|none|
|created_at.after|query|string(date-time)|false|none|
|created_at.before|query|string(date-time)|false|none|
|created_at.on_or_after|query|string(date-time)|false|none|
|created_at.on_or_before|query|string(date-time)|false|none|
|route_id|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "account_id": "account_in71c4amph0vgo2qllky",
      "amount": 1750,
      "created_at": "2020-01-31T23:59:59Z",
      "currency": "USD",
      "description": "Frederick S. Holmes",
      "id": "declined_transaction_17jbn0yyhvkt4v4ooym8",
      "route_id": "account_number_v18nkfqm6afpsrvy82b2",
      "route_type": "account_number",
      "source": {
        "ach_decline": {
          "amount": 1750,
          "originator_company_descriptive_date": null,
          "originator_company_discretionary_data": null,
          "originator_company_id": "0987654321",
          "originator_company_name": "BIG BANK",
          "reason": "insufficient_funds",
          "receiver_id_number": "12345678900",
          "receiver_name": "IAN CREASE",
          "trace_number": "021000038461022"
        },
        "category": "ach_decline"
      },
      "type": "declined_transaction"
    }
  ],
  "next_cursor": "v57w5d"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="list-declined-transactions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Declined Transaction List|[declined_transaction_list](#schemadeclined_transaction_list)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Retrieve a Declined Transaction

<a id="opIdretrieve_a_declined_transaction"></a>

> Code samples

```bash
curl https://example.com/declined_transactions/declined_transaction_17jbn0yyhvkt4v4ooym8 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /declined_transactions/{declined_transaction_id}`

<h3 id="retrieve-a-declined-transaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|declined_transaction_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "account_id": "account_in71c4amph0vgo2qllky",
  "amount": 1750,
  "created_at": "2020-01-31T23:59:59Z",
  "currency": "USD",
  "description": "Frederick S. Holmes",
  "id": "declined_transaction_17jbn0yyhvkt4v4ooym8",
  "route_id": "account_number_v18nkfqm6afpsrvy82b2",
  "route_type": "account_number",
  "source": {
    "ach_decline": {
      "amount": 1750,
      "originator_company_descriptive_date": null,
      "originator_company_discretionary_data": null,
      "originator_company_id": "0987654321",
      "originator_company_name": "BIG BANK",
      "reason": "insufficient_funds",
      "receiver_id_number": "12345678900",
      "receiver_name": "IAN CREASE",
      "trace_number": "021000038461022"
    },
    "category": "ach_decline"
  },
  "type": "declined_transaction"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="retrieve-a-declined-transaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Declined Transaction|[declined_transaction](#schemadeclined_transaction)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## List Digital Wallet Tokens

<a id="opIdlist_digital_wallet_tokens"></a>

> Code samples

```bash
curl https://example.com/digital_wallet_tokens \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /digital_wallet_tokens`

<h3 id="list-digital-wallet-tokens-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|none|
|limit|query|integer|false|none|
|card_id|query|string|false|none|
|created_at.after|query|string(date-time)|false|none|
|created_at.before|query|string(date-time)|false|none|
|created_at.on_or_after|query|string(date-time)|false|none|
|created_at.on_or_before|query|string(date-time)|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "card_id": "card_oubs0hwk5rn6knuecxg2",
      "created_at": "2020-01-31T23:59:59Z",
      "id": "digital_wallet_token_izi62go3h51p369jrie0",
      "status": "active",
      "token_requestor": "apple_pay",
      "type": "digital_wallet_token"
    }
  ],
  "next_cursor": "v57w5d"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="list-digital-wallet-tokens-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Digital Wallet Token List|[digital_wallet_token_list](#schemadigital_wallet_token_list)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Retrieve a Digital Wallet Token

<a id="opIdretrieve_a_digital_wallet_token"></a>

> Code samples

```bash
curl https://example.com/digital_wallet_tokens/digital_wallet_token_izi62go3h51p369jrie0 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /digital_wallet_tokens/{digital_wallet_token_id}`

<h3 id="retrieve-a-digital-wallet-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|digital_wallet_token_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "card_id": "card_oubs0hwk5rn6knuecxg2",
  "created_at": "2020-01-31T23:59:59Z",
  "id": "digital_wallet_token_izi62go3h51p369jrie0",
  "status": "active",
  "token_requestor": "apple_pay",
  "type": "digital_wallet_token"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="retrieve-a-digital-wallet-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Digital Wallet Token|[digital_wallet_token](#schemadigital_wallet_token)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## List Documents

<a id="opIdlist_documents"></a>

> Code samples

```bash
curl https://example.com/documents \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /documents`

<h3 id="list-documents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|none|
|limit|query|integer|false|none|
|entity_id|query|string|false|none|
|category.in|query|[string]|false|none|
|created_at.after|query|string(date-time)|false|none|
|created_at.before|query|string(date-time)|false|none|
|created_at.on_or_after|query|string(date-time)|false|none|
|created_at.on_or_before|query|string(date-time)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|category.in|form_1099_int|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "category": "form_1099_int",
      "created_at": "2020-01-31T23:59:59Z",
      "entity_id": "entity_n8y8tnk2p9339ti393yi",
      "file_id": "file_makxrc67oh9l6sg7w9yc",
      "id": "document_qjtqc6s4c14ve2q89izm",
      "type": "document"
    }
  ],
  "next_cursor": "v57w5d"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="list-documents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Document List|[document_list](#schemadocument_list)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Retrieve a Document

<a id="opIdretrieve_a_document"></a>

> Code samples

```bash
curl https://example.com/documents/document_qjtqc6s4c14ve2q89izm \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /documents/{document_id}`

<h3 id="retrieve-a-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|document_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "category": "form_1099_int",
  "created_at": "2020-01-31T23:59:59Z",
  "entity_id": "entity_n8y8tnk2p9339ti393yi",
  "file_id": "file_makxrc67oh9l6sg7w9yc",
  "id": "document_qjtqc6s4c14ve2q89izm",
  "type": "document"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="retrieve-a-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Document|[document](#schemadocument)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## List Entities

<a id="opIdlist_entities"></a>

> Code samples

```bash
curl https://example.com/entities \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /entities`

<h3 id="list-entities-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|none|
|limit|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "corporation": {
        "address": {
          "city": "New York",
          "line1": "33 Liberty Street",
          "line2": null,
          "state": "NY",
          "zip": "10045"
        },
        "beneficial_owners": [
          {
            "company_title": "CEO",
            "individual": {
              "address": {
                "city": "New York",
                "line1": "33 Liberty Street",
                "line2": null,
                "state": "NY",
                "zip": "10045"
              },
              "date_of_birth": "1970-01-31",
              "identification": {
                "country": "US",
                "method": "social_security_number",
                "number_last4": "1120"
              },
              "name": "Ian Crease"
            },
            "prong": "control"
          }
        ],
        "incorporation_state": "NY",
        "name": "National Phonograph Company",
        "tax_identifier": "602214076",
        "website": "https://example.com"
      },
      "description": null,
      "id": "entity_n8y8tnk2p9339ti393yi",
      "joint": null,
      "natural_person": null,
      "relationship": "informational",
      "structure": "corporation",
      "supplemental_documents": [
        {
          "file_id": "file_makxrc67oh9l6sg7w9yc"
        }
      ],
      "trust": null,
      "type": "entity"
    }
  ],
  "next_cursor": "v57w5d"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="list-entities-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Entity List|[entity_list](#schemaentity_list)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create an Entity

<a id="opIdcreate_an_entity"></a>

> Code samples

```bash
curl https://example.com/entities \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "corporation": {
      "address": {
        "city": "New York",
        "line1": "33 Liberty Street",
        "state": "NY",
        "zip": "10045"
      },
      "beneficial_owners": [
        {
          "company_title": "CEO",
          "individual": {
            "address": {
              "city": "New York",
              "line1": "33 Liberty Street",
              "state": "NY",
              "zip": "10045"
            },
            "date_of_birth": "1970-01-31",
            "identification": {
              "method": "social_security_number",
              "number": "078051120"
            },
            "name": "Ian Crease"
          },
          "prong": "control"
        }
      ],
      "incorporation_state": "NY",
      "name": "National Phonograph Company",
      "tax_identifier": "602214076",
      "website": "https://example.com"
    },
    "relationship": "informational",
    "structure": "corporation",
    "supplemental_documents": [
      {
        "file_id": "file_makxrc67oh9l6sg7w9yc"
      }
    ]
  }'
```

`POST /entities`

> Body parameter

```json
{
  "corporation": {
    "address": {
      "city": "New York",
      "line1": "33 Liberty Street",
      "state": "NY",
      "zip": "10045"
    },
    "beneficial_owners": [
      {
        "company_title": "CEO",
        "individual": {
          "address": {
            "city": "New York",
            "line1": "33 Liberty Street",
            "state": "NY",
            "zip": "10045"
          },
          "date_of_birth": "1970-01-31",
          "identification": {
            "method": "social_security_number",
            "number": "078051120"
          },
          "name": "Ian Crease"
        },
        "prong": "control"
      }
    ],
    "incorporation_state": "NY",
    "name": "National Phonograph Company",
    "tax_identifier": "602214076",
    "website": "https://example.com"
  },
  "relationship": "informational",
  "structure": "corporation",
  "supplemental_documents": [
    {
      "file_id": "file_makxrc67oh9l6sg7w9yc"
    }
  ]
}
```

<h3 id="create-an-entity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[create_an_entity_parameters](#schemacreate_an_entity_parameters)|true|none|
|» corporation|body|object|false|Details of the corporation entity to create. Required if `structure` is equal to `corporation`.|
|» » address|body|object|true|The corporation's address.|
|» » » city|body|string|true|The city of the address.|
|» » » line1|body|string|true|The first line of the address. This is usually the street number and street.|
|» » » line2|body|string|false|The second line of the address. This might be the floor or room number.|
|» » » state|body|string|true|The two-letter United States Postal Service (USPS) abbreviation for the state of the address.|
|» » » zip|body|string|true|The ZIP code of the address.|
|» » beneficial_owners|body|[object]|true|The identifying details of anyone controlling or owning 25% or more of the corporation.|
|» » » company_title|body|string|false|This person's role or title within the entity.|
|» » » individual|body|object|true|Personal details for the beneficial owner.|
|» » » » address|body|object|true|The individual's address.|
|» » » » » city|body|string|true|The city of the address.|
|» » » » » line1|body|string|true|The first line of the address. This is usually the street number and street.|
|» » » » » line2|body|string|false|The second line of the address. This might be the floor or room number.|
|» » » » » state|body|string|true|The two-letter United States Postal Service (USPS) abbreviation for the state of the address.|
|» » » » » zip|body|string|true|The ZIP code of the address.|
|» » » » confirmed_no_us_tax_id|body|boolean|false|The identification method for an individual can only be a passport, driver's license, or other document if you've confirmed the individual does not have a US tax id (either a Social Security Number or Individual Taxpayer Identification Number).|
|» » » » date_of_birth|body|string(date)|true|The person's date of birth in YYYY-MM-DD format.|
|» » » » identification|body|object|true|A means of verifying the person's identity.|
|» » » » » drivers_license|body|object|false|Information about the United States driver's license used for identification. Required if `method` is equal to `drivers_license`.|
|» » » » » » expiration_date|body|string(date)|true|The driver's license's expiration date in YYYY-MM-DD format.|
|» » » » » » file_id|body|string|true|The identifier of the File containing the driver's license.|
|» » » » » » state|body|string|true|The state that issued the provided driver's license.|
|» » » » » method|body|string|true|A method that can be used to verify the individual's identity.|
|» » » » » number|body|string|true|An identification number that can be used to verify the individual's identity, such as a social security number.|
|» » » » » other|body|object|false|Information about the identification document provided. Required if `method` is equal to `other`.|
|» » » » » » country|body|string|true|The two-character ISO 3166-1 code representing the country that issued the document.|
|» » » » » » description|body|string|true|A description of the document submitted.|
|» » » » » » expiration_date|body|string(date)|false|The document's expiration date in YYYY-MM-DD format.|
|» » » » » » file_id|body|string|true|The identifier of the File containing the document.|
|» » » » » passport|body|object|false|Information about the passport used for identification. Required if `method` is equal to `passport`.|
|» » » » » » country|body|string|true|The country that issued the passport.|
|» » » » » » expiration_date|body|string(date)|true|The passport's expiration date in YYYY-MM-DD format.|
|» » » » » » file_id|body|string|true|The identifier of the File containing the passport.|
|» » » » name|body|string|true|The person's legal name.|
|» » » prong|body|string|true|Why this person is considered a beneficial owner of the entity.|
|» » incorporation_state|body|string|false|The two-letter United States Postal Service (USPS) abbreviation for the corporation's state of incorporation.|
|» » name|body|string|true|The legal name of the corporation.|
|» » tax_identifier|body|string|true|The Employer Identification Number (EIN) for the corporation.|
|» » website|body|string|false|The website of the corporation.|
|» description|body|string|false|The description you choose to give the entity.|
|» joint|body|object|false|Details of the joint entity to create. Required if `structure` is equal to `joint`.|
|» » individuals|body|[object]|true|The two individuals that share control of the entity.|
|» » » address|body|object|true|The individual's address.|
|» » » » city|body|string|true|The city of the address.|
|» » » » line1|body|string|true|The first line of the address. This is usually the street number and street.|
|» » » » line2|body|string|false|The second line of the address. This might be the floor or room number.|
|» » » » state|body|string|true|The two-letter United States Postal Service (USPS) abbreviation for the state of the address.|
|» » » » zip|body|string|true|The ZIP code of the address.|
|» » » confirmed_no_us_tax_id|body|boolean|false|The identification method for an individual can only be a passport, driver's license, or other document if you've confirmed the individual does not have a US tax id (either a Social Security Number or Individual Taxpayer Identification Number).|
|» » » date_of_birth|body|string(date)|true|The person's date of birth in YYYY-MM-DD format.|
|» » » identification|body|object|true|A means of verifying the person's identity.|
|» » » » drivers_license|body|object|false|Information about the United States driver's license used for identification. Required if `method` is equal to `drivers_license`.|
|» » » » » expiration_date|body|string(date)|true|The driver's license's expiration date in YYYY-MM-DD format.|
|» » » » » file_id|body|string|true|The identifier of the File containing the driver's license.|
|» » » » » state|body|string|true|The state that issued the provided driver's license.|
|» » » » method|body|string|true|A method that can be used to verify the individual's identity.|
|» » » » number|body|string|true|An identification number that can be used to verify the individual's identity, such as a social security number.|
|» » » » other|body|object|false|Information about the identification document provided. Required if `method` is equal to `other`.|
|» » » » » country|body|string|true|The two-character ISO 3166-1 code representing the country that issued the document.|
|» » » » » description|body|string|true|A description of the document submitted.|
|» » » » » expiration_date|body|string(date)|false|The document's expiration date in YYYY-MM-DD format.|
|» » » » » file_id|body|string|true|The identifier of the File containing the document.|
|» » » » passport|body|object|false|Information about the passport used for identification. Required if `method` is equal to `passport`.|
|» » » » » country|body|string|true|The country that issued the passport.|
|» » » » » expiration_date|body|string(date)|true|The passport's expiration date in YYYY-MM-DD format.|
|» » » » » file_id|body|string|true|The identifier of the File containing the passport.|
|» » » name|body|string|true|The person's legal name.|
|» » name|body|string|false|The name of the joint entity.|
|» natural_person|body|object|false|Details of the natural person entity to create. Required if `structure` is equal to `natural_person`. Natural people entities should be submitted with `social_security_number` or `individual_taxpayer_identification_number` identification methods.|
|» » address|body|object|true|The individual's address.|
|» » » city|body|string|true|The city of the address.|
|» » » line1|body|string|true|The first line of the address. This is usually the street number and street.|
|» » » line2|body|string|false|The second line of the address. This might be the floor or room number.|
|» » » state|body|string|true|The two-letter United States Postal Service (USPS) abbreviation for the state of the address.|
|» » » zip|body|string|true|The ZIP code of the address.|
|» » confirmed_no_us_tax_id|body|boolean|false|The identification method for an individual can only be a passport, driver's license, or other document if you've confirmed the individual does not have a US tax id (either a Social Security Number or Individual Taxpayer Identification Number).|
|» » date_of_birth|body|string(date)|true|The person's date of birth in YYYY-MM-DD format.|
|» » identification|body|object|true|A means of verifying the person's identity.|
|» » » drivers_license|body|object|false|Information about the United States driver's license used for identification. Required if `method` is equal to `drivers_license`.|
|» » » » expiration_date|body|string(date)|true|The driver's license's expiration date in YYYY-MM-DD format.|
|» » » » file_id|body|string|true|The identifier of the File containing the driver's license.|
|» » » » state|body|string|true|The state that issued the provided driver's license.|
|» » » method|body|string|true|A method that can be used to verify the individual's identity.|
|» » » number|body|string|true|An identification number that can be used to verify the individual's identity, such as a social security number.|
|» » » other|body|object|false|Information about the identification document provided. Required if `method` is equal to `other`.|
|» » » » country|body|string|true|The two-character ISO 3166-1 code representing the country that issued the document.|
|» » » » description|body|string|true|A description of the document submitted.|
|» » » » expiration_date|body|string(date)|false|The document's expiration date in YYYY-MM-DD format.|
|» » » » file_id|body|string|true|The identifier of the File containing the document.|
|» » » passport|body|object|false|Information about the passport used for identification. Required if `method` is equal to `passport`.|
|» » » » country|body|string|true|The country that issued the passport.|
|» » » » expiration_date|body|string(date)|true|The passport's expiration date in YYYY-MM-DD format.|
|» » » » file_id|body|string|true|The identifier of the File containing the passport.|
|» » name|body|string|true|The person's legal name.|
|» relationship|body|string|true|The relationship between your group and the entity.|
|» structure|body|string|true|The type of Entity to create.|
|» supplemental_documents|body|[object]|false|Additional documentation associated with the entity.|
|» » file_id|body|string|true|The identifier of the File containing the document.|
|» trust|body|object|false|Details of the trust entity to create. Required if `structure` is equal to `trust`.|
|» » address|body|object|true|The trust's address.|
|» » » city|body|string|true|The city of the address.|
|» » » line1|body|string|true|The first line of the address. This is usually the street number and street.|
|» » » line2|body|string|false|The second line of the address. This might be the floor or room number.|
|» » » state|body|string|true|The two-letter United States Postal Service (USPS) abbreviation for the state of the address.|
|» » » zip|body|string|true|The ZIP code of the address.|
|» » category|body|string|true|Whether the trust is `revocable` or `irrevocable`. Irrevocable trusts require their own Employer Identification Number. Revocable trusts require information about the individual `grantor` who created the trust.|
|» » formation_document_file_id|body|string|false|The identifier of the File containing the formation document of the trust.|
|» » formation_state|body|string|false|The two-letter United States Postal Service (USPS) abbreviation for the state in which the trust was formed.|
|» » grantor|body|object|false|The grantor of the trust. Required if `category` is equal to `revocable`.|
|» » » address|body|object|true|The individual's address.|
|» » » » city|body|string|true|The city of the address.|
|» » » » line1|body|string|true|The first line of the address. This is usually the street number and street.|
|» » » » line2|body|string|false|The second line of the address. This might be the floor or room number.|
|» » » » state|body|string|true|The two-letter United States Postal Service (USPS) abbreviation for the state of the address.|
|» » » » zip|body|string|true|The ZIP code of the address.|
|» » » confirmed_no_us_tax_id|body|boolean|false|The identification method for an individual can only be a passport, driver's license, or other document if you've confirmed the individual does not have a US tax id (either a Social Security Number or Individual Taxpayer Identification Number).|
|» » » date_of_birth|body|string(date)|true|The person's date of birth in YYYY-MM-DD format.|
|» » » identification|body|object|true|A means of verifying the person's identity.|
|» » » » drivers_license|body|object|false|Information about the United States driver's license used for identification. Required if `method` is equal to `drivers_license`.|
|» » » » » expiration_date|body|string(date)|true|The driver's license's expiration date in YYYY-MM-DD format.|
|» » » » » file_id|body|string|true|The identifier of the File containing the driver's license.|
|» » » » » state|body|string|true|The state that issued the provided driver's license.|
|» » » » method|body|string|true|A method that can be used to verify the individual's identity.|
|» » » » number|body|string|true|An identification number that can be used to verify the individual's identity, such as a social security number.|
|» » » » other|body|object|false|Information about the identification document provided. Required if `method` is equal to `other`.|
|» » » » » country|body|string|true|The two-character ISO 3166-1 code representing the country that issued the document.|
|» » » » » description|body|string|true|A description of the document submitted.|
|» » » » » expiration_date|body|string(date)|false|The document's expiration date in YYYY-MM-DD format.|
|» » » » » file_id|body|string|true|The identifier of the File containing the document.|
|» » » » passport|body|object|false|Information about the passport used for identification. Required if `method` is equal to `passport`.|
|» » » » » country|body|string|true|The country that issued the passport.|
|» » » » » expiration_date|body|string(date)|true|The passport's expiration date in YYYY-MM-DD format.|
|» » » » » file_id|body|string|true|The identifier of the File containing the passport.|
|» » » name|body|string|true|The person's legal name.|
|» » name|body|string|true|The legal name of the trust.|
|» » tax_identifier|body|string|false|The Employer Identification Number (EIN) for the trust. Required if `category` is equal to `irrevocable`.|
|» » trustees|body|[object]|true|The trustees of the trust.|
|» » » individual|body|object|false|Details of the individual trustee. Required when the trustee `structure` is equal to `individual`.|
|» » » » address|body|object|true|The individual's address.|
|» » » » » city|body|string|true|The city of the address.|
|» » » » » line1|body|string|true|The first line of the address. This is usually the street number and street.|
|» » » » » line2|body|string|false|The second line of the address. This might be the floor or room number.|
|» » » » » state|body|string|true|The two-letter United States Postal Service (USPS) abbreviation for the state of the address.|
|» » » » » zip|body|string|true|The ZIP code of the address.|
|» » » » confirmed_no_us_tax_id|body|boolean|false|The identification method for an individual can only be a passport, driver's license, or other document if you've confirmed the individual does not have a US tax id (either a Social Security Number or Individual Taxpayer Identification Number).|
|» » » » date_of_birth|body|string(date)|true|The person's date of birth in YYYY-MM-DD format.|
|» » » » identification|body|object|true|A means of verifying the person's identity.|
|» » » » » drivers_license|body|object|false|Information about the United States driver's license used for identification. Required if `method` is equal to `drivers_license`.|
|» » » » » » expiration_date|body|string(date)|true|The driver's license's expiration date in YYYY-MM-DD format.|
|» » » » » » file_id|body|string|true|The identifier of the File containing the driver's license.|
|» » » » » » state|body|string|true|The state that issued the provided driver's license.|
|» » » » » method|body|string|true|A method that can be used to verify the individual's identity.|
|» » » » » number|body|string|true|An identification number that can be used to verify the individual's identity, such as a social security number.|
|» » » » » other|body|object|false|Information about the identification document provided. Required if `method` is equal to `other`.|
|» » » » » » country|body|string|true|The two-character ISO 3166-1 code representing the country that issued the document.|
|» » » » » » description|body|string|true|A description of the document submitted.|
|» » » » » » expiration_date|body|string(date)|false|The document's expiration date in YYYY-MM-DD format.|
|» » » » » » file_id|body|string|true|The identifier of the File containing the document.|
|» » » » » passport|body|object|false|Information about the passport used for identification. Required if `method` is equal to `passport`.|
|» » » » » » country|body|string|true|The country that issued the passport.|
|» » » » » » expiration_date|body|string(date)|true|The passport's expiration date in YYYY-MM-DD format.|
|» » » » » » file_id|body|string|true|The identifier of the File containing the passport.|
|» » » » name|body|string|true|The person's legal name.|
|» » » structure|body|string|true|The structure of the trustee.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » » » » method|social_security_number|
|» » » » » method|individual_taxpayer_identification_number|
|» » » » » method|passport|
|» » » » » method|drivers_license|
|» » » » » method|other|
|» » » prong|ownership|
|» » » prong|control|
|» » » » method|social_security_number|
|» » » » method|individual_taxpayer_identification_number|
|» » » » method|passport|
|» » » » method|drivers_license|
|» » » » method|other|
|» » » method|social_security_number|
|» » » method|individual_taxpayer_identification_number|
|» » » method|passport|
|» » » method|drivers_license|
|» » » method|other|
|» relationship|affiliated|
|» relationship|informational|
|» relationship|unaffiliated|
|» structure|corporation|
|» structure|natural_person|
|» structure|joint|
|» structure|trust|
|» » category|revocable|
|» » category|irrevocable|
|» » » » method|social_security_number|
|» » » » method|individual_taxpayer_identification_number|
|» » » » method|passport|
|» » » » method|drivers_license|
|» » » » method|other|
|» » » » » method|social_security_number|
|» » » » » method|individual_taxpayer_identification_number|
|» » » » » method|passport|
|» » » » » method|drivers_license|
|» » » » » method|other|
|» » » structure|individual|

> Example responses

> 200 Response

```json
{
  "corporation": {
    "address": {
      "city": "New York",
      "line1": "33 Liberty Street",
      "line2": null,
      "state": "NY",
      "zip": "10045"
    },
    "beneficial_owners": [
      {
        "company_title": "CEO",
        "individual": {
          "address": {
            "city": "New York",
            "line1": "33 Liberty Street",
            "line2": null,
            "state": "NY",
            "zip": "10045"
          },
          "date_of_birth": "1970-01-31",
          "identification": {
            "country": "US",
            "method": "social_security_number",
            "number_last4": "1120"
          },
          "name": "Ian Crease"
        },
        "prong": "control"
      }
    ],
    "incorporation_state": "NY",
    "name": "National Phonograph Company",
    "tax_identifier": "602214076",
    "website": "https://example.com"
  },
  "description": null,
  "id": "entity_n8y8tnk2p9339ti393yi",
  "joint": null,
  "natural_person": null,
  "relationship": "informational",
  "structure": "corporation",
  "supplemental_documents": [
    {
      "file_id": "file_makxrc67oh9l6sg7w9yc"
    }
  ],
  "trust": null,
  "type": "entity"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="create-an-entity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Entity|[entity](#schemaentity)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Retrieve an Entity

<a id="opIdretrieve_an_entity"></a>

> Code samples

```bash
curl https://example.com/entities/entity_n8y8tnk2p9339ti393yi \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /entities/{entity_id}`

<h3 id="retrieve-an-entity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|entity_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "corporation": {
    "address": {
      "city": "New York",
      "line1": "33 Liberty Street",
      "line2": null,
      "state": "NY",
      "zip": "10045"
    },
    "beneficial_owners": [
      {
        "company_title": "CEO",
        "individual": {
          "address": {
            "city": "New York",
            "line1": "33 Liberty Street",
            "line2": null,
            "state": "NY",
            "zip": "10045"
          },
          "date_of_birth": "1970-01-31",
          "identification": {
            "country": "US",
            "method": "social_security_number",
            "number_last4": "1120"
          },
          "name": "Ian Crease"
        },
        "prong": "control"
      }
    ],
    "incorporation_state": "NY",
    "name": "National Phonograph Company",
    "tax_identifier": "602214076",
    "website": "https://example.com"
  },
  "description": null,
  "id": "entity_n8y8tnk2p9339ti393yi",
  "joint": null,
  "natural_person": null,
  "relationship": "informational",
  "structure": "corporation",
  "supplemental_documents": [
    {
      "file_id": "file_makxrc67oh9l6sg7w9yc"
    }
  ],
  "trust": null,
  "type": "entity"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="retrieve-an-entity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Entity|[entity](#schemaentity)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create a supplemental document for an Entity

<a id="opIdcreate_a_supplemental_document_for_an_entity"></a>

> Code samples

```bash
curl https://example.com/entities/entity_n8y8tnk2p9339ti393yi/supplemental_documents \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "file_id": "file_makxrc67oh9l6sg7w9yc"
  }'
```

`POST /entities/{entity_id}/supplemental_documents`

> Body parameter

```json
{
  "file_id": "file_makxrc67oh9l6sg7w9yc"
}
```

<h3 id="create-a-supplemental-document-for-an-entity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|entity_id|path|string|true|none|
|body|body|[create_a_supplemental_document_for_an_entity_parameters](#schemacreate_a_supplemental_document_for_an_entity_parameters)|true|none|
|» file_id|body|string|true|The identifier of the File containing the document.|

> Example responses

> 200 Response

```json
{
  "corporation": {
    "address": {
      "city": "New York",
      "line1": "33 Liberty Street",
      "line2": null,
      "state": "NY",
      "zip": "10045"
    },
    "beneficial_owners": [
      {
        "company_title": "CEO",
        "individual": {
          "address": {
            "city": "New York",
            "line1": "33 Liberty Street",
            "line2": null,
            "state": "NY",
            "zip": "10045"
          },
          "date_of_birth": "1970-01-31",
          "identification": {
            "country": "US",
            "method": "social_security_number",
            "number_last4": "1120"
          },
          "name": "Ian Crease"
        },
        "prong": "control"
      }
    ],
    "incorporation_state": "NY",
    "name": "National Phonograph Company",
    "tax_identifier": "602214076",
    "website": "https://example.com"
  },
  "description": null,
  "id": "entity_n8y8tnk2p9339ti393yi",
  "joint": null,
  "natural_person": null,
  "relationship": "informational",
  "structure": "corporation",
  "supplemental_documents": [
    {
      "file_id": "file_makxrc67oh9l6sg7w9yc"
    }
  ],
  "trust": null,
  "type": "entity"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="create-a-supplemental-document-for-an-entity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Entity|[entity](#schemaentity)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## List Event Subscriptions

<a id="opIdlist_event_subscriptions"></a>

> Code samples

```bash
curl https://example.com/event_subscriptions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /event_subscriptions`

<h3 id="list-event-subscriptions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|none|
|limit|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "created_at": "2020-01-31T23:59:59Z",
      "id": "event_subscription_001dzz0r20rcdxgb013zqb8m04g",
      "selected_event_category": null,
      "shared_secret": "b88l20",
      "status": "active",
      "type": "event_subscription",
      "url": "https://website.com/webhooks"
    }
  ],
  "next_cursor": "v57w5d"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="list-event-subscriptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Event Subscription List|[event_subscription_list](#schemaevent_subscription_list)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create an Event Subscription

<a id="opIdcreate_an_event_subscription"></a>

> Code samples

```bash
curl https://example.com/event_subscriptions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "url": "https://website.com/webhooks"
  }'
```

`POST /event_subscriptions`

> Body parameter

```json
{
  "url": "https://website.com/webhooks"
}
```

<h3 id="create-an-event-subscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[create_an_event_subscription_parameters](#schemacreate_an_event_subscription_parameters)|true|none|
|» selected_event_category|body|string|false|If specified, this subscription will only receive webhooks for Events with the specified `category`.|
|» shared_secret|body|string|false|The key that will be used to sign webhooks. If no value is passed, a random string will be used as default.|
|» url|body|string|true|The URL you'd like us to send webhooks to.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» selected_event_category|account.created|
|» selected_event_category|account.updated|
|» selected_event_category|account_number.created|
|» selected_event_category|account_number.updated|
|» selected_event_category|account_statement.created|
|» selected_event_category|account_transfer.created|
|» selected_event_category|account_transfer.updated|
|» selected_event_category|ach_prenotification.created|
|» selected_event_category|ach_prenotification.updated|
|» selected_event_category|ach_transfer.created|
|» selected_event_category|ach_transfer.updated|
|» selected_event_category|card.created|
|» selected_event_category|card.updated|
|» selected_event_category|card_dispute.created|
|» selected_event_category|card_dispute.updated|
|» selected_event_category|check_deposit.created|
|» selected_event_category|check_deposit.updated|
|» selected_event_category|check_transfer.created|
|» selected_event_category|check_transfer.updated|
|» selected_event_category|declined_transaction.created|
|» selected_event_category|digital_wallet_token.created|
|» selected_event_category|digital_wallet_token.updated|
|» selected_event_category|document.created|
|» selected_event_category|entity.created|
|» selected_event_category|entity.updated|
|» selected_event_category|external_account.created|
|» selected_event_category|file.created|
|» selected_event_category|group.updated|
|» selected_event_category|group.heartbeat|
|» selected_event_category|inbound_ach_transfer_return.created|
|» selected_event_category|inbound_ach_transfer_return.updated|
|» selected_event_category|inbound_wire_drawdown_request.created|
|» selected_event_category|oauth_connection.created|
|» selected_event_category|oauth_connection.deactivated|
|» selected_event_category|pending_transaction.created|
|» selected_event_category|pending_transaction.updated|
|» selected_event_category|real_time_decision.card_authorization_requested|
|» selected_event_category|real_time_decision.digital_wallet_token_requested|
|» selected_event_category|real_time_decision.digital_wallet_authentication_requested|
|» selected_event_category|real_time_payments_transfer.created|
|» selected_event_category|real_time_payments_transfer.updated|
|» selected_event_category|real_time_payments_request_for_payment.created|
|» selected_event_category|real_time_payments_request_for_payment.updated|
|» selected_event_category|transaction.created|
|» selected_event_category|wire_drawdown_request.created|
|» selected_event_category|wire_drawdown_request.updated|
|» selected_event_category|wire_transfer.created|
|» selected_event_category|wire_transfer.updated|

> Example responses

> 200 Response

```json
{
  "created_at": "2020-01-31T23:59:59Z",
  "id": "event_subscription_001dzz0r20rcdxgb013zqb8m04g",
  "selected_event_category": null,
  "shared_secret": "b88l20",
  "status": "active",
  "type": "event_subscription",
  "url": "https://website.com/webhooks"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="create-an-event-subscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Event Subscription|[event_subscription](#schemaevent_subscription)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Retrieve an Event Subscription

<a id="opIdretrieve_an_event_subscription"></a>

> Code samples

```bash
curl https://example.com/event_subscriptions/event_subscription_001dzz0r20rcdxgb013zqb8m04g \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /event_subscriptions/{event_subscription_id}`

<h3 id="retrieve-an-event-subscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|event_subscription_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "created_at": "2020-01-31T23:59:59Z",
  "id": "event_subscription_001dzz0r20rcdxgb013zqb8m04g",
  "selected_event_category": null,
  "shared_secret": "b88l20",
  "status": "active",
  "type": "event_subscription",
  "url": "https://website.com/webhooks"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="retrieve-an-event-subscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Event Subscription|[event_subscription](#schemaevent_subscription)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Update an Event Subscription

<a id="opIdupdate_an_event_subscription"></a>

> Code samples

```bash
curl https://example.com/event_subscriptions/event_subscription_001dzz0r20rcdxgb013zqb8m04g \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`PATCH /event_subscriptions/{event_subscription_id}`

> Body parameter

```json
{}
```

<h3 id="update-an-event-subscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|event_subscription_id|path|string|true|none|
|body|body|[update_an_event_subscription_parameters](#schemaupdate_an_event_subscription_parameters)|true|none|
|» status|body|string|false|The status to update the Event Subscription with.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|active|
|» status|disabled|
|» status|deleted|

> Example responses

> 200 Response

```json
{
  "created_at": "2020-01-31T23:59:59Z",
  "id": "event_subscription_001dzz0r20rcdxgb013zqb8m04g",
  "selected_event_category": null,
  "shared_secret": "b88l20",
  "status": "active",
  "type": "event_subscription",
  "url": "https://website.com/webhooks"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="update-an-event-subscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Event Subscription|[event_subscription](#schemaevent_subscription)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## List Events

<a id="opIdlist_events"></a>

> Code samples

```bash
curl https://example.com/events \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /events`

<h3 id="list-events-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|none|
|limit|query|integer|false|none|
|created_at.after|query|string(date-time)|false|none|
|created_at.before|query|string(date-time)|false|none|
|created_at.on_or_after|query|string(date-time)|false|none|
|created_at.on_or_before|query|string(date-time)|false|none|
|category.in|query|[string]|false|none|
|associated_object_id|query|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|category.in|account.created|
|category.in|account.updated|
|category.in|account_number.created|
|category.in|account_number.updated|
|category.in|account_statement.created|
|category.in|account_transfer.created|
|category.in|account_transfer.updated|
|category.in|ach_prenotification.created|
|category.in|ach_prenotification.updated|
|category.in|ach_transfer.created|
|category.in|ach_transfer.updated|
|category.in|card.created|
|category.in|card.updated|
|category.in|card_dispute.created|
|category.in|card_dispute.updated|
|category.in|check_deposit.created|
|category.in|check_deposit.updated|
|category.in|check_transfer.created|
|category.in|check_transfer.updated|
|category.in|declined_transaction.created|
|category.in|digital_wallet_token.created|
|category.in|digital_wallet_token.updated|
|category.in|document.created|
|category.in|entity.created|
|category.in|entity.updated|
|category.in|external_account.created|
|category.in|file.created|
|category.in|group.updated|
|category.in|group.heartbeat|
|category.in|inbound_ach_transfer_return.created|
|category.in|inbound_ach_transfer_return.updated|
|category.in|inbound_wire_drawdown_request.created|
|category.in|oauth_connection.created|
|category.in|oauth_connection.deactivated|
|category.in|pending_transaction.created|
|category.in|pending_transaction.updated|
|category.in|real_time_decision.card_authorization_requested|
|category.in|real_time_decision.digital_wallet_token_requested|
|category.in|real_time_decision.digital_wallet_authentication_requested|
|category.in|real_time_payments_transfer.created|
|category.in|real_time_payments_transfer.updated|
|category.in|real_time_payments_request_for_payment.created|
|category.in|real_time_payments_request_for_payment.updated|
|category.in|transaction.created|
|category.in|wire_drawdown_request.created|
|category.in|wire_drawdown_request.updated|
|category.in|wire_transfer.created|
|category.in|wire_transfer.updated|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "associated_object_id": "account_in71c4amph0vgo2qllky",
      "associated_object_type": "account",
      "category": "account.created",
      "created_at": "2020-01-31T23:59:59Z",
      "id": "event_001dzz0r20rzr4zrhrr1364hy80",
      "type": "event"
    }
  ],
  "next_cursor": "v57w5d"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="list-events-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Event List|[event_list](#schemaevent_list)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Retrieve an Event

<a id="opIdretrieve_an_event"></a>

> Code samples

```bash
curl https://example.com/events/event_001dzz0r20rzr4zrhrr1364hy80 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /events/{event_id}`

<h3 id="retrieve-an-event-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|event_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "associated_object_id": "account_in71c4amph0vgo2qllky",
  "associated_object_type": "account",
  "category": "account.created",
  "created_at": "2020-01-31T23:59:59Z",
  "id": "event_001dzz0r20rzr4zrhrr1364hy80",
  "type": "event"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="retrieve-an-event-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Event|[event](#schemaevent)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## List External Accounts

<a id="opIdlist_external_accounts"></a>

> Code samples

```bash
curl https://example.com/external_accounts \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /external_accounts`

<h3 id="list-external-accounts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|none|
|limit|query|integer|false|none|
|status.in|query|[string]|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status.in|active|
|status.in|archived|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "account_number": "987654321",
      "created_at": "2020-01-31T23:59:59Z",
      "description": "Landlord",
      "funding": "checking",
      "id": "external_account_ukk55lr923a3ac0pp7iv",
      "routing_number": "101050001",
      "status": "active",
      "type": "external_account",
      "verification_status": "verified"
    }
  ],
  "next_cursor": "v57w5d"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="list-external-accounts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|External Account List|[external_account_list](#schemaexternal_account_list)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create an External Account

<a id="opIdcreate_an_external_account"></a>

> Code samples

```bash
curl https://example.com/external_accounts \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "account_number": "987654321",
    "description": "Landlord",
    "routing_number": "101050001"
  }'
```

`POST /external_accounts`

> Body parameter

```json
{
  "account_number": "987654321",
  "description": "Landlord",
  "routing_number": "101050001"
}
```

<h3 id="create-an-external-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[create_an_external_account_parameters](#schemacreate_an_external_account_parameters)|true|none|
|» account_number|body|string|true|The account number for the destination account.|
|» description|body|string|true|The name you choose for the Account.|
|» funding|body|string|false|The type of the destination account. Defaults to `checking`.|
|» routing_number|body|string|true|The American Bankers' Association (ABA) Routing Transit Number (RTN) for the destination account.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» funding|checking|
|» funding|savings|
|» funding|other|

> Example responses

> 200 Response

```json
{
  "account_number": "987654321",
  "created_at": "2020-01-31T23:59:59Z",
  "description": "Landlord",
  "funding": "checking",
  "id": "external_account_ukk55lr923a3ac0pp7iv",
  "routing_number": "101050001",
  "status": "active",
  "type": "external_account",
  "verification_status": "verified"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="create-an-external-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|External Account|[external_account](#schemaexternal_account)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Retrieve an External Account

<a id="opIdretrieve_an_external_account"></a>

> Code samples

```bash
curl https://example.com/external_accounts/external_account_ukk55lr923a3ac0pp7iv \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /external_accounts/{external_account_id}`

<h3 id="retrieve-an-external-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|external_account_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "account_number": "987654321",
  "created_at": "2020-01-31T23:59:59Z",
  "description": "Landlord",
  "funding": "checking",
  "id": "external_account_ukk55lr923a3ac0pp7iv",
  "routing_number": "101050001",
  "status": "active",
  "type": "external_account",
  "verification_status": "verified"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="retrieve-an-external-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|External Account|[external_account](#schemaexternal_account)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Update an External Account

<a id="opIdupdate_an_external_account"></a>

> Code samples

```bash
curl https://example.com/external_accounts/external_account_ukk55lr923a3ac0pp7iv \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "New description"
  }'
```

`PATCH /external_accounts/{external_account_id}`

> Body parameter

```json
{
  "description": "New description"
}
```

<h3 id="update-an-external-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|external_account_id|path|string|true|none|
|body|body|[update_an_external_account_parameters](#schemaupdate_an_external_account_parameters)|true|none|
|» description|body|string|false|The description you choose to give the external account.|
|» status|body|string|false|The status of the External Account.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|active|
|» status|archived|

> Example responses

> 200 Response

```json
{
  "account_number": "987654321",
  "created_at": "2020-01-31T23:59:59Z",
  "description": "Landlord",
  "funding": "checking",
  "id": "external_account_ukk55lr923a3ac0pp7iv",
  "routing_number": "101050001",
  "status": "active",
  "type": "external_account",
  "verification_status": "verified"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="update-an-external-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|External Account|[external_account](#schemaexternal_account)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## List Files

<a id="opIdlist_files"></a>

> Code samples

```bash
curl https://example.com/files \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /files`

<h3 id="list-files-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|none|
|limit|query|integer|false|none|
|created_at.after|query|string(date-time)|false|none|
|created_at.before|query|string(date-time)|false|none|
|created_at.on_or_after|query|string(date-time)|false|none|
|created_at.on_or_before|query|string(date-time)|false|none|
|purpose.in|query|[string]|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|purpose.in|check_image_front|
|purpose.in|check_image_back|
|purpose.in|form_1099_int|
|purpose.in|form_ss_4|
|purpose.in|identity_document|
|purpose.in|increase_statement|
|purpose.in|other|
|purpose.in|trust_formation_document|
|purpose.in|digital_wallet_artwork|
|purpose.in|digital_wallet_app_icon|
|purpose.in|entity_supplemental_document|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "created_at": "2020-01-31T23:59:59Z",
      "description": "2022-05 statement for checking account",
      "direction": "from_increase",
      "download_url": "https://api.increase.com/files/file_makxrc67oh9l6sg7w9yc/download",
      "filename": "statement.pdf",
      "id": "file_makxrc67oh9l6sg7w9yc",
      "purpose": "increase_statement",
      "type": "file"
    }
  ],
  "next_cursor": "v57w5d"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="list-files-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|File List|[file_list](#schemafile_list)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create a File

<a id="opIdcreate_a_file"></a>

> Code samples

```bash
curl https://example.com/files \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'file=@/path/to/file' \
  -F 'purpose=check_image_front'
```

`POST /files`

To upload a file to Increase, you'll need to send a request of Content-Type `multipart/form-data`. The request should contain the file you would like to upload, as well as the parameters for creating a file.

> Body parameter

```yaml
file: "\"@tax_form.pdf\""
purpose: check_image_front
```

<h3 id="create-a-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[create_a_file_parameters](#schemacreate_a_file_parameters)|true|none|
|» description|body|string|false|The description you choose to give the File.|
|» file|body|string(binary)|true|The file contents. This should follow the specifications of [RFC 7578](https://datatracker.ietf.org/doc/html/rfc7578) which defines file transfers for the multipart/form-data protocol.|
|» purpose|body|string|true|What the File will be used for in Increase's systems.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» purpose|check_image_front|
|» purpose|check_image_back|
|» purpose|form_ss_4|
|» purpose|identity_document|
|» purpose|other|
|» purpose|trust_formation_document|
|» purpose|digital_wallet_artwork|
|» purpose|digital_wallet_app_icon|
|» purpose|entity_supplemental_document|

> Example responses

> 200 Response

```json
{
  "created_at": "2020-01-31T23:59:59Z",
  "description": "2022-05 statement for checking account",
  "direction": "from_increase",
  "download_url": "https://api.increase.com/files/file_makxrc67oh9l6sg7w9yc/download",
  "filename": "statement.pdf",
  "id": "file_makxrc67oh9l6sg7w9yc",
  "purpose": "increase_statement",
  "type": "file"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="create-a-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|File|[file](#schemafile)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Retrieve a File

<a id="opIdretrieve_a_file"></a>

> Code samples

```bash
curl https://example.com/files/file_makxrc67oh9l6sg7w9yc \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /files/{file_id}`

<h3 id="retrieve-a-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|file_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "created_at": "2020-01-31T23:59:59Z",
  "description": "2022-05 statement for checking account",
  "direction": "from_increase",
  "download_url": "https://api.increase.com/files/file_makxrc67oh9l6sg7w9yc/download",
  "filename": "statement.pdf",
  "id": "file_makxrc67oh9l6sg7w9yc",
  "purpose": "increase_statement",
  "type": "file"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="retrieve-a-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|File|[file](#schemafile)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Retrieve Group details

<a id="opIdretrieve_group_details"></a>

> Code samples

```bash
curl https://example.com/groups/current \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /groups/current`

Returns details for the currently authenticated Group.

> Example responses

> 200 Response

```json
{
  "ach_debit_status": "disabled",
  "activation_status": "activated",
  "created_at": "2020-01-31T23:59:59Z",
  "id": "group_1g4mhziu6kvrs3vz35um",
  "type": "group"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="retrieve-group-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Group|[group](#schemagroup)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## List Inbound ACH Transfer Returns

<a id="opIdlist_inbound_ach_transfer_returns"></a>

> Code samples

```bash
curl https://example.com/inbound_ach_transfer_returns \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /inbound_ach_transfer_returns`

<h3 id="list-inbound-ach-transfer-returns-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|none|
|limit|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "class_name": "inbound_ach_transfer_return",
      "id": "inbound_ach_transfer_return_fhcxk5huskwhmt7iz0gk",
      "inbound_ach_transfer_transaction_id": "transaction_uyrp7fld2ium70oa7oi",
      "reason": "payment_stopped",
      "status": "submitted",
      "submission": {
        "submitted_at": "2020-01-31T23:59:59Z",
        "trace_number": "058349238292834"
      },
      "transaction_id": null,
      "type": "inbound_ach_transfer_return"
    }
  ],
  "next_cursor": "v57w5d"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="list-inbound-ach-transfer-returns-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Inbound ACH Transfer Return List|[inbound_ach_transfer_return_list](#schemainbound_ach_transfer_return_list)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create an ACH Return

<a id="opIdcreate_an_ach_return"></a>

> Code samples

```bash
curl https://example.com/inbound_ach_transfer_returns \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "reason": "payment_stopped",
    "transaction_id": "transaction_uyrp7fld2ium70oa7oi"
  }'
```

`POST /inbound_ach_transfer_returns`

> Body parameter

```json
{
  "reason": "payment_stopped",
  "transaction_id": "transaction_uyrp7fld2ium70oa7oi"
}
```

<h3 id="create-an-ach-return-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[create_an_ach_return_parameters](#schemacreate_an_ach_return_parameters)|true|none|
|» reason|body|string|true|The reason why this transfer will be returned. The most usual return codes are `payment_stopped` for debits and `credit_entry_refused_by_receiver` for credits.|
|» transaction_id|body|string|true|The transaction identifier of the Inbound ACH Transfer to return to the originating financial institution.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» reason|authorization_revoked_by_customer|
|» reason|payment_stopped|
|» reason|customer_advised_unauthorized_improper_ineligible_or_incomplete|
|» reason|representative_payee_deceased_or_unable_to_continue_in_that_capacity|
|» reason|beneficiary_or_account_holder_deceased|
|» reason|credit_entry_refused_by_receiver|
|» reason|duplicate_entry|
|» reason|corporate_customer_advised_not_authorized|

> Example responses

> 200 Response

```json
{
  "class_name": "inbound_ach_transfer_return",
  "id": "inbound_ach_transfer_return_fhcxk5huskwhmt7iz0gk",
  "inbound_ach_transfer_transaction_id": "transaction_uyrp7fld2ium70oa7oi",
  "reason": "payment_stopped",
  "status": "submitted",
  "submission": {
    "submitted_at": "2020-01-31T23:59:59Z",
    "trace_number": "058349238292834"
  },
  "transaction_id": null,
  "type": "inbound_ach_transfer_return"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="create-an-ach-return-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Inbound ACH Transfer Return|[inbound_ach_transfer_return](#schemainbound_ach_transfer_return)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Retrieve an Inbound ACH Transfer Return

<a id="opIdretrieve_an_inbound_ach_transfer_return"></a>

> Code samples

```bash
curl https://example.com/inbound_ach_transfer_returns/inbound_ach_transfer_return_fhcxk5huskwhmt7iz0gk \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /inbound_ach_transfer_returns/{inbound_ach_transfer_return_id}`

<h3 id="retrieve-an-inbound-ach-transfer-return-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|inbound_ach_transfer_return_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "class_name": "inbound_ach_transfer_return",
  "id": "inbound_ach_transfer_return_fhcxk5huskwhmt7iz0gk",
  "inbound_ach_transfer_transaction_id": "transaction_uyrp7fld2ium70oa7oi",
  "reason": "payment_stopped",
  "status": "submitted",
  "submission": {
    "submitted_at": "2020-01-31T23:59:59Z",
    "trace_number": "058349238292834"
  },
  "transaction_id": null,
  "type": "inbound_ach_transfer_return"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="retrieve-an-inbound-ach-transfer-return-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Inbound ACH Transfer Return|[inbound_ach_transfer_return](#schemainbound_ach_transfer_return)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## List Inbound Wire Drawdown Requests

<a id="opIdlist_inbound_wire_drawdown_requests"></a>

> Code samples

```bash
curl https://example.com/inbound_wire_drawdown_requests \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /inbound_wire_drawdown_requests`

<h3 id="list-inbound-wire-drawdown-requests-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|none|
|limit|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "amount": 10000,
      "beneficiary_account_number": "987654321",
      "beneficiary_address_line1": "33 Liberty Street",
      "beneficiary_address_line2": "New York, NY, 10045",
      "beneficiary_address_line3": null,
      "beneficiary_name": "Ian Crease",
      "beneficiary_routing_number": "101050001",
      "currency": "USD",
      "id": "inbound_wire_drawdown_request_u5a92ikqhz1ytphn799e",
      "message_to_recipient": "Invoice 29582",
      "originator_account_number": "987654321",
      "originator_address_line1": "33 Liberty Street",
      "originator_address_line2": "New York, NY, 10045",
      "originator_address_line3": null,
      "originator_name": "Ian Crease",
      "originator_routing_number": "101050001",
      "originator_to_beneficiary_information_line1": null,
      "originator_to_beneficiary_information_line2": null,
      "originator_to_beneficiary_information_line3": null,
      "originator_to_beneficiary_information_line4": null,
      "recipient_account_number_id": "account_number_v18nkfqm6afpsrvy82b2",
      "type": "inbound_wire_drawdown_request"
    }
  ],
  "next_cursor": "v57w5d"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="list-inbound-wire-drawdown-requests-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Inbound Wire Drawdown Request List|[inbound_wire_drawdown_request_list](#schemainbound_wire_drawdown_request_list)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Retrieve an Inbound Wire Drawdown Request

<a id="opIdretrieve_an_inbound_wire_drawdown_request"></a>

> Code samples

```bash
curl https://example.com/inbound_wire_drawdown_requests/inbound_wire_drawdown_request_u5a92ikqhz1ytphn799e \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /inbound_wire_drawdown_requests/{inbound_wire_drawdown_request_id}`

<h3 id="retrieve-an-inbound-wire-drawdown-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|inbound_wire_drawdown_request_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "amount": 10000,
  "beneficiary_account_number": "987654321",
  "beneficiary_address_line1": "33 Liberty Street",
  "beneficiary_address_line2": "New York, NY, 10045",
  "beneficiary_address_line3": null,
  "beneficiary_name": "Ian Crease",
  "beneficiary_routing_number": "101050001",
  "currency": "USD",
  "id": "inbound_wire_drawdown_request_u5a92ikqhz1ytphn799e",
  "message_to_recipient": "Invoice 29582",
  "originator_account_number": "987654321",
  "originator_address_line1": "33 Liberty Street",
  "originator_address_line2": "New York, NY, 10045",
  "originator_address_line3": null,
  "originator_name": "Ian Crease",
  "originator_routing_number": "101050001",
  "originator_to_beneficiary_information_line1": null,
  "originator_to_beneficiary_information_line2": null,
  "originator_to_beneficiary_information_line3": null,
  "originator_to_beneficiary_information_line4": null,
  "recipient_account_number_id": "account_number_v18nkfqm6afpsrvy82b2",
  "type": "inbound_wire_drawdown_request"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="retrieve-an-inbound-wire-drawdown-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Inbound Wire Drawdown Request|[inbound_wire_drawdown_request](#schemainbound_wire_drawdown_request)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## List Limits

<a id="opIdlist_limits"></a>

> Code samples

```bash
curl https://example.com/limits \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /limits`

<h3 id="list-limits-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|none|
|limit|query|integer|false|none|
|model_id|query|string|false|none|
|status|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "limit_fku42k0qtc8ulsuas38q",
      "interval": "month",
      "metric": "volume",
      "model_id": "account_number_v18nkfqm6afpsrvy82b2",
      "model_type": "account_number",
      "status": "active",
      "type": "limit",
      "value": 0
    }
  ],
  "next_cursor": "v57w5d"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="list-limits-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Limit List|[limit_list](#schemalimit_list)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create a Limit

<a id="opIdcreate_a_limit"></a>

> Code samples

```bash
curl https://example.com/limits \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "interval": "month",
    "metric": "volume",
    "model_id": "account_in71c4amph0vgo2qllky",
    "value": 1234
  }'
```

`POST /limits`

> Body parameter

```json
{
  "interval": "month",
  "metric": "volume",
  "model_id": "account_in71c4amph0vgo2qllky",
  "value": 1234
}
```

<h3 id="create-a-limit-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[create_a_limit_parameters](#schemacreate_a_limit_parameters)|true|none|
|» interval|body|string|false|The interval for the metric. Required if `metric` is `count` or `volume`.|
|» metric|body|string|true|The metric for the limit.|
|» model_id|body|string|true|The identifier of the Account or Account Number you wish to associate the limit with.|
|» value|body|integer|true|The value to test the limit against.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» interval|transaction|
|» interval|day|
|» interval|week|
|» interval|month|
|» interval|year|
|» interval|all_time|
|» metric|count|
|» metric|volume|

> Example responses

> 200 Response

```json
{
  "id": "limit_fku42k0qtc8ulsuas38q",
  "interval": "month",
  "metric": "volume",
  "model_id": "account_number_v18nkfqm6afpsrvy82b2",
  "model_type": "account_number",
  "status": "active",
  "type": "limit",
  "value": 0
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="create-a-limit-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Limit|[limit](#schemalimit)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Retrieve a Limit

<a id="opIdretrieve_a_limit"></a>

> Code samples

```bash
curl https://example.com/limits/limit_fku42k0qtc8ulsuas38q \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /limits/{limit_id}`

<h3 id="retrieve-a-limit-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "limit_fku42k0qtc8ulsuas38q",
  "interval": "month",
  "metric": "volume",
  "model_id": "account_number_v18nkfqm6afpsrvy82b2",
  "model_type": "account_number",
  "status": "active",
  "type": "limit",
  "value": 0
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="retrieve-a-limit-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Limit|[limit](#schemalimit)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Update a Limit

<a id="opIdupdate_a_limit"></a>

> Code samples

```bash
curl https://example.com/limits/limit_fku42k0qtc8ulsuas38q \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "status": "inactive"
  }'
```

`PATCH /limits/{limit_id}`

> Body parameter

```json
{
  "status": "inactive"
}
```

<h3 id="update-a-limit-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit_id|path|string|true|none|
|body|body|[update_a_limit_parameters](#schemaupdate_a_limit_parameters)|true|none|
|» status|body|string|true|The status to update the limit with.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|inactive|
|» status|active|

> Example responses

> 200 Response

```json
{
  "id": "limit_fku42k0qtc8ulsuas38q",
  "interval": "month",
  "metric": "volume",
  "model_id": "account_number_v18nkfqm6afpsrvy82b2",
  "model_type": "account_number",
  "status": "active",
  "type": "limit",
  "value": 0
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="update-a-limit-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Limit|[limit](#schemalimit)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## List OAuth Connections

<a id="opIdlist_oauth_connections"></a>

> Code samples

```bash
curl https://example.com/oauth_connections \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /oauth_connections`

<h3 id="list-oauth-connections-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|none|
|limit|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "created_at": "2020-01-31T23:59:59Z",
      "group_id": "group_1g4mhziu6kvrs3vz35um",
      "id": "connection_dauknoksyr4wilz4e6my",
      "status": "active",
      "type": "oauth_connection"
    }
  ],
  "next_cursor": "v57w5d"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="list-oauth-connections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OAuth Connection List|[oauth_connection_list](#schemaoauth_connection_list)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Retrieve an OAuth Connection

<a id="opIdretrieve_an_oauth_connection"></a>

> Code samples

```bash
curl https://example.com/oauth_connections/connection_dauknoksyr4wilz4e6my \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /oauth_connections/{oauth_connection_id}`

<h3 id="retrieve-an-oauth-connection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|oauth_connection_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "created_at": "2020-01-31T23:59:59Z",
  "group_id": "group_1g4mhziu6kvrs3vz35um",
  "id": "connection_dauknoksyr4wilz4e6my",
  "status": "active",
  "type": "oauth_connection"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="retrieve-an-oauth-connection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OAuth Connection|[oauth_connection](#schemaoauth_connection)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## List Pending Transactions

<a id="opIdlist_pending_transactions"></a>

> Code samples

```bash
curl https://example.com/pending_transactions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /pending_transactions`

<h3 id="list-pending-transactions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|none|
|limit|query|integer|false|none|
|account_id|query|string|false|none|
|route_id|query|string|false|none|
|source_id|query|string|false|none|
|status.in|query|[string]|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status.in|pending|
|status.in|complete|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "account_id": "account_in71c4amph0vgo2qllky",
      "amount": 100,
      "created_at": "2020-01-31T23:59:59Z",
      "currency": "USD",
      "description": "Frederick S. Holmes",
      "id": "pending_transaction_k1sfetcau2qbvjbzgju4",
      "route_id": "card_route_jk5pd79u6ydmbf9qzu6i",
      "route_type": "transfer_instruction",
      "source": {
        "ach_transfer_instruction": {
          "amount": 100,
          "transfer_id": "ach_transfer_uoxatyh3lt5evrsdvo7q"
        },
        "category": "ach_transfer_instruction"
      },
      "status": "pending",
      "type": "pending_transaction"
    }
  ],
  "next_cursor": "v57w5d"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="list-pending-transactions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Pending Transaction List|[pending_transaction_list](#schemapending_transaction_list)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Retrieve a Pending Transaction

<a id="opIdretrieve_a_pending_transaction"></a>

> Code samples

```bash
curl https://example.com/pending_transactions/pending_transaction_k1sfetcau2qbvjbzgju4 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /pending_transactions/{pending_transaction_id}`

<h3 id="retrieve-a-pending-transaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pending_transaction_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "account_id": "account_in71c4amph0vgo2qllky",
  "amount": 100,
  "created_at": "2020-01-31T23:59:59Z",
  "currency": "USD",
  "description": "Frederick S. Holmes",
  "id": "pending_transaction_k1sfetcau2qbvjbzgju4",
  "route_id": "card_route_jk5pd79u6ydmbf9qzu6i",
  "route_type": "transfer_instruction",
  "source": {
    "ach_transfer_instruction": {
      "amount": 100,
      "transfer_id": "ach_transfer_uoxatyh3lt5evrsdvo7q"
    },
    "category": "ach_transfer_instruction"
  },
  "status": "pending",
  "type": "pending_transaction"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="retrieve-a-pending-transaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Pending Transaction|[pending_transaction](#schemapending_transaction)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Retrieve a Real-Time Decision

<a id="opIdretrieve_a_real_time_decision"></a>

> Code samples

```bash
curl https://example.com/real_time_decisions/real_time_decision_j76n2e810ezcg3zh5qtn \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /real_time_decisions/{real_time_decision_id}`

<h3 id="retrieve-a-real-time-decision-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|real_time_decision_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "card_authorization": {
    "account_id": "account_in71c4amph0vgo2qllky",
    "card_id": "card_oubs0hwk5rn6knuecxg2",
    "decision": "approve",
    "merchant_acceptor_id": "5665270011000168",
    "merchant_category_code": "5734",
    "merchant_city": "New York",
    "merchant_country": "US",
    "merchant_descriptor": "AMAZON.COM",
    "network": "visa",
    "network_details": {
      "visa": {
        "electronic_commerce_indicator": "secure_electronic_commerce",
        "point_of_service_entry_mode": "manual"
      }
    },
    "presentment_amount": 100,
    "presentment_currency": "USD",
    "settlement_amount": 100,
    "settlement_currency": "USD"
  },
  "category": "card_authorization_requested",
  "created_at": "2020-01-31T23:59:59Z",
  "digital_wallet_authentication": null,
  "digital_wallet_token": null,
  "id": "real_time_decision_j76n2e810ezcg3zh5qtn",
  "status": "pending",
  "timeout_at": "2020-01-31T23:59:59Z",
  "type": "real_time_decision"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="retrieve-a-real-time-decision-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Real-Time Decision|[real_time_decision](#schemareal_time_decision)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Action a Real-Time Decision

<a id="opIdaction_a_real_time_decision"></a>

> Code samples

```bash
curl https://example.com/real_time_decisions/real_time_decision_j76n2e810ezcg3zh5qtn/action \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "card_authorization": {
      "decision": "approve"
    }
  }'
```

`POST /real_time_decisions/{real_time_decision_id}/action`

> Body parameter

```json
{
  "card_authorization": {
    "decision": "approve"
  }
}
```

<h3 id="action-a-real-time-decision-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|real_time_decision_id|path|string|true|none|
|body|body|[action_a_real_time_decision_parameters](#schemaaction_a_real_time_decision_parameters)|true|none|
|» card_authorization|body|object|false|If the Real-Time Decision relates to a card authorization attempt, this object contains your response to the authorization.|
|» » decision|body|string|true|Whether the card authorization should be approved or declined.|
|» digital_wallet_authentication|body|object|false|If the Real-Time Decision relates to a digital wallet authentication attempt, this object contains your response to the authentication.|
|» » result|body|string|true|Whether your application was able to deliver the one-time passcode.|
|» digital_wallet_token|body|object|false|If the Real-Time Decision relates to a digital wallet token provisioning attempt, this object contains your response to the attempt.|
|» » approval|body|object|false|If your application approves the provisioning attempt, this contains metadata about the digital wallet token that will be generated.|
|» » » card_profile_id|body|string|true|The identifier of the Card Profile to assign to the Digital Wallet token.|
|» » » email|body|string|false|An email address that can be used to verify the cardholder via one-time passcode.|
|» » » phone|body|string|false|A phone number that can be used to verify the cardholder via one-time passcode over SMS.|
|» » decline|body|object|false|If your application declines the provisioning attempt, this contains details about the decline.|
|» » » reason|body|string|false|Why the tokenization attempt was declined. This is for logging purposes only and is not displayed to the end-user.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » decision|approve|
|» » decision|decline|
|» » result|success|
|» » result|failure|

> Example responses

> 200 Response

```json
{
  "card_authorization": {
    "account_id": "account_in71c4amph0vgo2qllky",
    "card_id": "card_oubs0hwk5rn6knuecxg2",
    "decision": "approve",
    "merchant_acceptor_id": "5665270011000168",
    "merchant_category_code": "5734",
    "merchant_city": "New York",
    "merchant_country": "US",
    "merchant_descriptor": "AMAZON.COM",
    "network": "visa",
    "network_details": {
      "visa": {
        "electronic_commerce_indicator": "secure_electronic_commerce",
        "point_of_service_entry_mode": "manual"
      }
    },
    "presentment_amount": 100,
    "presentment_currency": "USD",
    "settlement_amount": 100,
    "settlement_currency": "USD"
  },
  "category": "card_authorization_requested",
  "created_at": "2020-01-31T23:59:59Z",
  "digital_wallet_authentication": null,
  "digital_wallet_token": null,
  "id": "real_time_decision_j76n2e810ezcg3zh5qtn",
  "status": "pending",
  "timeout_at": "2020-01-31T23:59:59Z",
  "type": "real_time_decision"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="action-a-real-time-decision-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Real-Time Decision|[real_time_decision](#schemareal_time_decision)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## List Routing Numbers

<a id="opIdlist_routing_numbers"></a>

> Code samples

```bash
curl 'https://example.com/routing_numbers?routing_number=021000021' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /routing_numbers`

You can use this API to confirm if a routing number is valid, such as when a user is providing you with bank account details. Since routing numbers uniquely identify a bank, this will always return 0 or 1 entry. In Sandbox, the only valid routing number for this method is 110000000.

<h3 id="list-routing-numbers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|none|
|limit|query|integer|false|none|
|routing_number|query|string|true|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "ach_transfers": "supported",
      "name": "Chase",
      "real_time_payments_transfers": "supported",
      "routing_number": "021000021",
      "type": "routing_number",
      "wire_transfers": "supported"
    }
  ],
  "next_cursor": "v57w5d"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="list-routing-numbers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Routing Number List|[routing_number_list](#schemarouting_number_list)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Simulate an Account Statement being created

<a id="opIdsimulate_an_account_statement_being_created"></a>

> Code samples

```bash
curl https://example.com/simulations/account_statements \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "account_id": "account_in71c4amph0vgo2qllky"
  }'
```

`POST /simulations/account_statements`

Simulates an [Account Statement](#account-statements) being created for an account. In production, Account Statements are generated once per month.

> Body parameter

```json
{
  "account_id": "account_in71c4amph0vgo2qllky"
}
```

<h3 id="simulate-an-account-statement-being-created-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[simulate_an_account_statement_being_created_parameters](#schemasimulate_an_account_statement_being_created_parameters)|true|none|
|» account_id|body|string|true|The identifier of the Account the statement is for.|

> Example responses

> 200 Response

```json
{
  "account_id": "account_in71c4amph0vgo2qllky",
  "created_at": "2020-01-31T23:59:59Z",
  "ending_balance": 100,
  "file_id": "file_makxrc67oh9l6sg7w9yc",
  "id": "account_statement_lkc03a4skm2k7f38vj15",
  "starting_balance": 0,
  "statement_period_end": "2020-01-31T23:59:59Z",
  "statement_period_start": "2020-01-31T23:59:59Z",
  "type": "account_statement"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="simulate-an-account-statement-being-created-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Account Statement|[account_statement](#schemaaccount_statement)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Complete a Sandbox Account Transfer

<a id="opIdcomplete_a_sandbox_account_transfer"></a>

> Code samples

```bash
curl https://example.com/simulations/account_transfers/account_transfer_7k9qe1ysdgqztnt63l7n/complete \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /simulations/account_transfers/{account_transfer_id}/complete`

If your account is configured to require approval for each transfer, this endpoint simulates the approval of an [Account Transfer](#account-transfers). You can also approve sandbox Account Transfers in the dashboard. This transfer must first have a `status` of `pending_approval`.

<h3 id="complete-a-sandbox-account-transfer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account_transfer_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "account_id": "account_in71c4amph0vgo2qllky",
  "amount": 100,
  "approval": {
    "approved_at": "2020-01-31T23:59:59Z"
  },
  "cancellation": null,
  "created_at": "2020-01-31T23:59:59Z",
  "currency": "USD",
  "description": "Move money into savings",
  "destination_account_id": "account_uf16sut2ct5bevmq3eh",
  "destination_transaction_id": "transaction_j3itv8dtk5o8pw3p1xj4",
  "id": "account_transfer_7k9qe1ysdgqztnt63l7n",
  "network": "account",
  "status": "complete",
  "template_id": "account_transfer_template_5nloco84eijzw0wcfhnn",
  "transaction_id": "transaction_uyrp7fld2ium70oa7oi",
  "type": "account_transfer"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="complete-a-sandbox-account-transfer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Account Transfer|[account_transfer](#schemaaccount_transfer)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Return a Sandbox ACH Transfer

<a id="opIdreturn_a_sandbox_ach_transfer"></a>

> Code samples

```bash
curl https://example.com/simulations/ach_transfers/ach_transfer_uoxatyh3lt5evrsdvo7q/return \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /simulations/ach_transfers/{ach_transfer_id}/return`

Simulates the return of an [ACH Transfer](#ach-transfers) by the Federal Reserve due to an error condition. This will also create a Transaction to account for the returned funds. This transfer must first have a `status` of `submitted`.

> Body parameter

```json
{}
```

<h3 id="return-a-sandbox-ach-transfer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ach_transfer_id|path|string|true|none|
|body|body|[return_a_sandbox_ach_transfer_parameters](#schemareturn_a_sandbox_ach_transfer_parameters)|true|none|
|» reason|body|string|false|The reason why the Federal Reserve or destination bank returned this transfer. Defaults to `no_account`.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» reason|insufficient_fund|
|» reason|no_account|
|» reason|account_closed|
|» reason|invalid_account_number_structure|
|» reason|account_frozen_entry_returned_per_ofac_instruction|
|» reason|credit_entry_refused_by_receiver|
|» reason|unauthorized_debit_to_consumer_account_using_corporate_sec_code|
|» reason|corporate_customer_advised_not_authorized|
|» reason|payment_stopped|
|» reason|non_transaction_account|
|» reason|uncollected_funds|
|» reason|routing_number_check_digit_error|
|» reason|customer_advised_unauthorized_improper_ineligible_or_incomplete|
|» reason|amount_field_error|
|» reason|authorization_revoked_by_customer|
|» reason|invalid_ach_routing_number|
|» reason|file_record_edit_criteria|
|» reason|enr_invalid_individual_name|
|» reason|returned_per_odfi_request|
|» reason|addenda_error|
|» reason|limited_participation_dfi|
|» reason|incorrectly_coded_outbound_international_payment|
|» reason|other|

> Example responses

> 200 Response

```json
{
  "account_id": "account_in71c4amph0vgo2qllky",
  "account_number": "987654321",
  "addendum": null,
  "amount": 100,
  "approval": {
    "approved_at": "2020-01-31T23:59:59Z"
  },
  "cancellation": null,
  "company_descriptive_date": null,
  "company_discretionary_data": null,
  "company_entry_description": null,
  "company_name": "National Phonograph Company",
  "created_at": "2020-01-31T23:59:59Z",
  "currency": "USD",
  "external_account_id": "external_account_ukk55lr923a3ac0pp7iv",
  "funding": "checking",
  "id": "ach_transfer_uoxatyh3lt5evrsdvo7q",
  "individual_id": null,
  "individual_name": "Ian Crease",
  "network": "ach",
  "notification_of_change": null,
  "return": null,
  "routing_number": "101050001",
  "standard_entry_class_code": "corporate_credit_or_debit",
  "statement_descriptor": "Statement descriptor",
  "status": "returned",
  "submission": {
    "submitted_at": "2020-01-31T23:59:59Z",
    "trace_number": "058349238292834"
  },
  "template_id": "ach_transfer_template_wofoi8uhkjzi5rubh3kt",
  "transaction_id": "transaction_uyrp7fld2ium70oa7oi",
  "type": "ach_transfer"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="return-a-sandbox-ach-transfer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ACH Transfer|[ach_transfer](#schemaach_transfer)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Submit a Sandbox ACH Transfer

<a id="opIdsubmit_a_sandbox_ach_transfer"></a>

> Code samples

```bash
curl https://example.com/simulations/ach_transfers/ach_transfer_uoxatyh3lt5evrsdvo7q/submit \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /simulations/ach_transfers/{ach_transfer_id}/submit`

Simulates the submission of an [ACH Transfer](#ach-transfers) to the Federal Reserve. This transfer must first have a `status` of `pending_approval` or `pending_submission`. In production, Increase submits ACH Transfers to the Federal Reserve three times per day on weekdays. Since sandbox ACH Transfers are not submitted to the Federal Reserve, this endpoint allows you to skip that delay and transition the ACH Transfer to a status of `submitted`.

<h3 id="submit-a-sandbox-ach-transfer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ach_transfer_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "account_id": "account_in71c4amph0vgo2qllky",
  "account_number": "987654321",
  "addendum": null,
  "amount": 100,
  "approval": {
    "approved_at": "2020-01-31T23:59:59Z"
  },
  "cancellation": null,
  "company_descriptive_date": null,
  "company_discretionary_data": null,
  "company_entry_description": null,
  "company_name": "National Phonograph Company",
  "created_at": "2020-01-31T23:59:59Z",
  "currency": "USD",
  "external_account_id": "external_account_ukk55lr923a3ac0pp7iv",
  "funding": "checking",
  "id": "ach_transfer_uoxatyh3lt5evrsdvo7q",
  "individual_id": null,
  "individual_name": "Ian Crease",
  "network": "ach",
  "notification_of_change": null,
  "return": null,
  "routing_number": "101050001",
  "standard_entry_class_code": "corporate_credit_or_debit",
  "statement_descriptor": "Statement descriptor",
  "status": "returned",
  "submission": {
    "submitted_at": "2020-01-31T23:59:59Z",
    "trace_number": "058349238292834"
  },
  "template_id": "ach_transfer_template_wofoi8uhkjzi5rubh3kt",
  "transaction_id": "transaction_uyrp7fld2ium70oa7oi",
  "type": "ach_transfer"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="submit-a-sandbox-ach-transfer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ACH Transfer|[ach_transfer](#schemaach_transfer)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Simulate an authorization on a Card

<a id="opIdsimulate_an_authorization_on_a_card"></a>

> Code samples

```bash
curl https://example.com/simulations/card_authorizations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "amount": 1000,
    "card_id": "card_oubs0hwk5rn6knuecxg2"
  }'
```

`POST /simulations/card_authorizations`

Simulates a purchase authorization on a [Card](#cards). Depending on the balance available to the card and the `amount` submitted, the authorization activity will result in a [Pending Transaction](#pending-transactions) of type `card_authorization` or a [Declined Transaction](#declined-transactions) of type `card_decline`. You can pass either a Card id or a [Digital Wallet Token](#digital-wallet-tokens) id to simulate the two different ways purchases can be made.

> Body parameter

```json
{
  "amount": 1000,
  "card_id": "card_oubs0hwk5rn6knuecxg2"
}
```

<h3 id="simulate-an-authorization-on-a-card-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[simulate_an_authorization_on_a_card_parameters](#schemasimulate_an_authorization_on_a_card_parameters)|true|none|
|» amount|body|integer|true|The authorization amount in cents.|
|» card_id|body|string|false|The identifier of the Card to be authorized.|
|» digital_wallet_token_id|body|string|false|The identifier of the Digital Wallet Token to be authorized.|

> Example responses

> 200 Response

```json
{
  "declined_transaction": null,
  "pending_transaction": {
    "account_id": "account_in71c4amph0vgo2qllky",
    "amount": 100,
    "created_at": "2020-01-31T23:59:59Z",
    "currency": "USD",
    "description": "Frederick S. Holmes",
    "id": "pending_transaction_k1sfetcau2qbvjbzgju4",
    "route_id": "card_route_jk5pd79u6ydmbf9qzu6i",
    "route_type": "transfer_instruction",
    "source": {
      "card_authorization": {
        "amount": 100,
        "currency": "USD",
        "digital_wallet_token_id": null,
        "merchant_acceptor_id": "5665270011000168",
        "merchant_category_code": "5734",
        "merchant_city": "New York",
        "merchant_country": "US",
        "merchant_descriptor": "AMAZON.COM",
        "network": "visa",
        "network_details": {
          "visa": {
            "electronic_commerce_indicator": "secure_electronic_commerce",
            "point_of_service_entry_mode": "manual"
          }
        },
        "real_time_decision_id": null
      },
      "category": "card_authorization"
    },
    "status": "pending",
    "type": "pending_transaction"
  },
  "type": "inbound_card_authorization_simulation_result"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="simulate-an-authorization-on-a-card-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Inbound Card Authorization Simulation Result|[inbound_card_authorization_simulation_result](#schemainbound_card_authorization_simulation_result)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Simulates advancing the state of a card dispute

<a id="opIdsimulates_advancing_the_state_of_a_card_dispute"></a>

> Code samples

```bash
curl https://example.com/simulations/card_disputes/card_dispute_h9sc95nbl1cgltpp7men/action \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "explanation": "This was a valid recurring transaction",
    "status": "rejected"
  }'
```

`POST /simulations/card_disputes/{card_dispute_id}/action`

After a [Card Dispute](#card-disputes) is created in production, the dispute will be reviewed. Since no review happens in sandbox, this endpoint simulates moving a Card Dispute into a rejected or accepted state. A Card Dispute can only be actioned one time and must have a status of `pending_reviewing`.

> Body parameter

```json
{
  "explanation": "This was a valid recurring transaction",
  "status": "rejected"
}
```

<h3 id="simulates-advancing-the-state-of-a-card-dispute-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|card_dispute_id|path|string|true|none|
|body|body|[simulates_advancing_the_state_of_a_card_dispute_parameters](#schemasimulates_advancing_the_state_of_a_card_dispute_parameters)|true|none|
|» explanation|body|string|false|Why the dispute was rejected. Not required for accepting disputes.|
|» status|body|string|true|The status to move the dispute to.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|accepted|
|» status|rejected|

> Example responses

> 200 Response

```json
{
  "acceptance": null,
  "created_at": "2020-01-31T23:59:59Z",
  "disputed_transaction_id": "transaction_uyrp7fld2ium70oa7oi",
  "explanation": "Unauthorized recurring purchase",
  "id": "card_dispute_h9sc95nbl1cgltpp7men",
  "rejection": null,
  "status": "pending_reviewing",
  "type": "card_dispute"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="simulates-advancing-the-state-of-a-card-dispute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Card Dispute|[card_dispute](#schemacard_dispute)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Simulate a refund on a card

<a id="opIdsimulate_a_refund_on_a_card"></a>

> Code samples

```bash
curl https://example.com/simulations/card_refunds \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "transaction_id": "transaction_uyrp7fld2ium70oa7oi"
  }'
```

`POST /simulations/card_refunds`

Simulates refunding a card transaction. The full value of the original sandbox transaction is refunded.

> Body parameter

```json
{
  "transaction_id": "transaction_uyrp7fld2ium70oa7oi"
}
```

<h3 id="simulate-a-refund-on-a-card-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[simulate_a_refund_on_a_card_parameters](#schemasimulate_a_refund_on_a_card_parameters)|true|none|
|» transaction_id|body|string|true|The identifier for the Transaction to refund. The Transaction's source must have a category of card_settlement.|

> Example responses

> 200 Response

```json
{
  "account_id": "account_in71c4amph0vgo2qllky",
  "amount": 100,
  "created_at": "2020-01-31T23:59:59Z",
  "currency": "USD",
  "description": "Frederick S. Holmes",
  "id": "transaction_uyrp7fld2ium70oa7oi",
  "route_id": "account_number_v18nkfqm6afpsrvy82b2",
  "route_type": "account_number",
  "source": {
    "category": "inbound_ach_transfer",
    "inbound_ach_transfer": {
      "amount": 100,
      "originator_company_descriptive_date": null,
      "originator_company_discretionary_data": null,
      "originator_company_entry_description": "RESERVE",
      "originator_company_id": "0987654321",
      "originator_company_name": "BIG BANK",
      "receiver_id_number": "12345678900",
      "receiver_name": "IAN CREASE",
      "trace_number": "021000038461022"
    }
  },
  "type": "transaction"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="simulate-a-refund-on-a-card-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Transaction|[transaction](#schematransaction)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Simulate settling a card authorization

<a id="opIdsimulate_settling_a_card_authorization"></a>

> Code samples

```bash
curl https://example.com/simulations/card_settlements \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "card_id": "card_oubs0hwk5rn6knuecxg2",
    "pending_transaction_id": "pending_transaction_k1sfetcau2qbvjbzgju4"
  }'
```

`POST /simulations/card_settlements`

Simulates the settlement of an authorization by a card acquirer. After a card authorization is created, the merchant will eventually send a settlement. This simulates that event, which may occur many days after the purchase in production. The amount settled can be different from the amount originally authorized, for example, when adding a tip to a restaurant bill.

> Body parameter

```json
{
  "card_id": "card_oubs0hwk5rn6knuecxg2",
  "pending_transaction_id": "pending_transaction_k1sfetcau2qbvjbzgju4"
}
```

<h3 id="simulate-settling-a-card-authorization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[simulate_settling_a_card_authorization_parameters](#schemasimulate_settling_a_card_authorization_parameters)|true|none|
|» amount|body|integer|false|The amount to be settled. This defaults to the amount of the Pending Transaction being settled.|
|» card_id|body|string|true|The identifier of the Card to create a settlement on.|
|» pending_transaction_id|body|string|true|The identifier of the Pending Transaction for the Card Authorization you wish to settle.|

> Example responses

> 200 Response

```json
{
  "account_id": "account_in71c4amph0vgo2qllky",
  "amount": 100,
  "created_at": "2020-01-31T23:59:59Z",
  "currency": "USD",
  "description": "Frederick S. Holmes",
  "id": "transaction_uyrp7fld2ium70oa7oi",
  "route_id": "account_number_v18nkfqm6afpsrvy82b2",
  "route_type": "account_number",
  "source": {
    "category": "inbound_ach_transfer",
    "inbound_ach_transfer": {
      "amount": 100,
      "originator_company_descriptive_date": null,
      "originator_company_discretionary_data": null,
      "originator_company_entry_description": "RESERVE",
      "originator_company_id": "0987654321",
      "originator_company_name": "BIG BANK",
      "receiver_id_number": "12345678900",
      "receiver_name": "IAN CREASE",
      "trace_number": "021000038461022"
    }
  },
  "type": "transaction"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="simulate-settling-a-card-authorization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Transaction|[transaction](#schematransaction)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Reject a Sandbox Check Deposit

<a id="opIdreject_a_sandbox_check_deposit"></a>

> Code samples

```bash
curl https://example.com/simulations/check_deposits/check_deposit_f06n9gpg7sxn8t19lfc1/reject \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /simulations/check_deposits/{check_deposit_id}/reject`

Simulates the rejection of a [Check Deposit](#check-deposits) by Increase due to factors like poor image quality. This Check Deposit must first have a `status` of `pending`.

<h3 id="reject-a-sandbox-check-deposit-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|check_deposit_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "account_id": "account_in71c4amph0vgo2qllky",
  "amount": 1000,
  "back_image_file_id": null,
  "created_at": "2020-01-31T23:59:59Z",
  "currency": "USD",
  "deposit_acceptance": null,
  "deposit_rejection": null,
  "deposit_return": null,
  "front_image_file_id": "file_makxrc67oh9l6sg7w9yc",
  "id": "check_deposit_f06n9gpg7sxn8t19lfc1",
  "status": "submitted",
  "transaction_id": "transaction_uyrp7fld2ium70oa7oi",
  "type": "check_deposit"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="reject-a-sandbox-check-deposit-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Check Deposit|[check_deposit](#schemacheck_deposit)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Return a Sandbox Check Deposit

<a id="opIdreturn_a_sandbox_check_deposit"></a>

> Code samples

```bash
curl https://example.com/simulations/check_deposits/check_deposit_f06n9gpg7sxn8t19lfc1/return \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /simulations/check_deposits/{check_deposit_id}/return`

Simulates the return of a [Check Deposit](#check-deposits). This Check Deposit must first have a `status` of `submitted`.

<h3 id="return-a-sandbox-check-deposit-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|check_deposit_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "account_id": "account_in71c4amph0vgo2qllky",
  "amount": 1000,
  "back_image_file_id": null,
  "created_at": "2020-01-31T23:59:59Z",
  "currency": "USD",
  "deposit_acceptance": null,
  "deposit_rejection": null,
  "deposit_return": null,
  "front_image_file_id": "file_makxrc67oh9l6sg7w9yc",
  "id": "check_deposit_f06n9gpg7sxn8t19lfc1",
  "status": "submitted",
  "transaction_id": "transaction_uyrp7fld2ium70oa7oi",
  "type": "check_deposit"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="return-a-sandbox-check-deposit-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Check Deposit|[check_deposit](#schemacheck_deposit)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Submit a Sandbox Check Deposit

<a id="opIdsubmit_a_sandbox_check_deposit"></a>

> Code samples

```bash
curl https://example.com/simulations/check_deposits/check_deposit_f06n9gpg7sxn8t19lfc1/submit \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /simulations/check_deposits/{check_deposit_id}/submit`

Simulates the submission of a [Check Deposit](#check-deposits) to the Federal Reserve. This Check Deposit must first have a `status` of `pending`.

<h3 id="submit-a-sandbox-check-deposit-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|check_deposit_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "account_id": "account_in71c4amph0vgo2qllky",
  "amount": 1000,
  "back_image_file_id": null,
  "created_at": "2020-01-31T23:59:59Z",
  "currency": "USD",
  "deposit_acceptance": null,
  "deposit_rejection": null,
  "deposit_return": null,
  "front_image_file_id": "file_makxrc67oh9l6sg7w9yc",
  "id": "check_deposit_f06n9gpg7sxn8t19lfc1",
  "status": "submitted",
  "transaction_id": "transaction_uyrp7fld2ium70oa7oi",
  "type": "check_deposit"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="submit-a-sandbox-check-deposit-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Check Deposit|[check_deposit](#schemacheck_deposit)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Deposit a Sandbox Check Transfer

<a id="opIddeposit_a_sandbox_check_transfer"></a>

> Code samples

```bash
curl https://example.com/simulations/check_transfers/check_transfer_30b43acfu9vw8fyc4f5/deposit \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /simulations/check_transfers/{check_transfer_id}/deposit`

Simulates a [Check Transfer](#check-transfers) being deposited at a bank. This transfer must first have a `status` of `mailed`.

<h3 id="deposit-a-sandbox-check-transfer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|check_transfer_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "account_id": "account_in71c4amph0vgo2qllky",
  "address_city": "New York",
  "address_line1": "33 Liberty Street",
  "address_line2": null,
  "address_state": "NY",
  "address_zip": "10045",
  "amount": 1000,
  "created_at": "2020-01-31T23:59:59Z",
  "currency": "USD",
  "deposit": null,
  "id": "check_transfer_30b43acfu9vw8fyc4f5",
  "mailed_at": "2020-01-31T23:59:59Z",
  "message": "Invoice 29582",
  "note": null,
  "recipient_name": "Ian Crease",
  "return_address": null,
  "status": "mailed",
  "stop_payment_request": null,
  "submission": {
    "check_number": "130670"
  },
  "submitted_at": "2020-01-31T23:59:59Z",
  "template_id": "check_transfer_template_tr96ajellz6awlki022o",
  "transaction_id": "transaction_uyrp7fld2ium70oa7oi",
  "type": "check_transfer"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="deposit-a-sandbox-check-transfer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Check Transfer|[check_transfer](#schemacheck_transfer)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Mail a Sandbox Check Transfer

<a id="opIdmail_a_sandbox_check_transfer"></a>

> Code samples

```bash
curl https://example.com/simulations/check_transfers/check_transfer_30b43acfu9vw8fyc4f5/mail \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /simulations/check_transfers/{check_transfer_id}/mail`

Simulates the mailing of a [Check Transfer](#check-transfers), which happens once per weekday in production but can be sped up in sandbox. This transfer must first have a `status` of `pending_approval` or `pending_submission`.

<h3 id="mail-a-sandbox-check-transfer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|check_transfer_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "account_id": "account_in71c4amph0vgo2qllky",
  "address_city": "New York",
  "address_line1": "33 Liberty Street",
  "address_line2": null,
  "address_state": "NY",
  "address_zip": "10045",
  "amount": 1000,
  "created_at": "2020-01-31T23:59:59Z",
  "currency": "USD",
  "deposit": null,
  "id": "check_transfer_30b43acfu9vw8fyc4f5",
  "mailed_at": "2020-01-31T23:59:59Z",
  "message": "Invoice 29582",
  "note": null,
  "recipient_name": "Ian Crease",
  "return_address": null,
  "status": "mailed",
  "stop_payment_request": null,
  "submission": {
    "check_number": "130670"
  },
  "submitted_at": "2020-01-31T23:59:59Z",
  "template_id": "check_transfer_template_tr96ajellz6awlki022o",
  "transaction_id": "transaction_uyrp7fld2ium70oa7oi",
  "type": "check_transfer"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="mail-a-sandbox-check-transfer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Check Transfer|[check_transfer](#schemacheck_transfer)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Simulate digital wallet provisioning for a card

<a id="opIdsimulate_digital_wallet_provisioning_for_a_card"></a>

> Code samples

```bash
curl https://example.com/simulations/digital_wallet_token_requests \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "card_id": "card_oubs0hwk5rn6knuecxg2"
  }'
```

`POST /simulations/digital_wallet_token_requests`

Simulates a user attempting add a [Card](#cards) to a digital wallet such as Apple Pay.

> Body parameter

```json
{
  "card_id": "card_oubs0hwk5rn6knuecxg2"
}
```

<h3 id="simulate-digital-wallet-provisioning-for-a-card-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[simulate_digital_wallet_provisioning_for_a_card_parameters](#schemasimulate_digital_wallet_provisioning_for_a_card_parameters)|true|none|
|» card_id|body|string|true|The identifier of the Card to be authorized.|

> Example responses

> 200 Response

```json
{
  "decline_reason": null,
  "digital_wallet_token_id": "digital_wallet_token_izi62go3h51p369jrie0",
  "type": "inbound_digital_wallet_token_request_simulation_result"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="simulate-digital-wallet-provisioning-for-a-card-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Inbound Digital Wallet Token Request Simulation Result|[inbound_digital_wallet_token_request_simulation_result](#schemainbound_digital_wallet_token_request_simulation_result)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Simulate a tax document being created

<a id="opIdsimulate_a_tax_document_being_created"></a>

> Code samples

```bash
curl https://example.com/simulations/documents \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "account_id": "account_in71c4amph0vgo2qllky"
  }'
```

`POST /simulations/documents`

Simulates an tax document being created for an account.

> Body parameter

```json
{
  "account_id": "account_in71c4amph0vgo2qllky"
}
```

<h3 id="simulate-a-tax-document-being-created-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[simulate_a_tax_document_being_created_parameters](#schemasimulate_a_tax_document_being_created_parameters)|true|none|
|» account_id|body|string|true|The identifier of the Account the tax document is for.|

> Example responses

> 200 Response

```json
{
  "category": "form_1099_int",
  "created_at": "2020-01-31T23:59:59Z",
  "entity_id": "entity_n8y8tnk2p9339ti393yi",
  "file_id": "file_makxrc67oh9l6sg7w9yc",
  "id": "document_qjtqc6s4c14ve2q89izm",
  "type": "document"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="simulate-a-tax-document-being-created-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Document|[document](#schemadocument)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Simulate an ACH Transfer to your account

<a id="opIdsimulate_an_ach_transfer_to_your_account"></a>

> Code samples

```bash
curl https://example.com/simulations/inbound_ach_transfers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "account_number_id": "account_number_v18nkfqm6afpsrvy82b2",
    "amount": 1000
  }'
```

`POST /simulations/inbound_ach_transfers`

Simulates an inbound ACH transfer to your account. This imitates initiating a transaction to an Increase account from a different financial institution. The transfer may be either a credit or a debit depending on if the `amount` is positive or negative. The result of calling this API will be either a [Transaction](#transactions) or a [Declined Transaction](#declined-transactions) depending on whether or not the transfer is allowed.

> Body parameter

```json
{
  "account_number_id": "account_number_v18nkfqm6afpsrvy82b2",
  "amount": 1000
}
```

<h3 id="simulate-an-ach-transfer-to-your-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[simulate_an_ach_transfer_to_your_account_parameters](#schemasimulate_an_ach_transfer_to_your_account_parameters)|true|none|
|» account_number_id|body|string|true|The identifier of the Account Number the inbound ACH Transfer is for.|
|» amount|body|integer|true|The transfer amount in cents. A positive amount originates a credit transfer pushing funds to the receiving account. A negative amount originates a debit transfer pulling funds from the receiving account.|
|» company_descriptive_date|body|string|false|The description of the date of the transfer.|
|» company_discretionary_data|body|string|false|Data associated with the transfer set by the sender.|
|» company_entry_description|body|string|false|The description of the transfer set by the sender.|
|» company_id|body|string|false|The sender's company id.|
|» company_name|body|string|false|The name of the sender.|

> Example responses

> 200 Response

```json
{
  "declined_transaction": null,
  "transaction": {
    "account_id": "account_in71c4amph0vgo2qllky",
    "amount": 100,
    "created_at": "2020-01-31T23:59:59Z",
    "currency": "USD",
    "description": "Frederick S. Holmes",
    "id": "transaction_uyrp7fld2ium70oa7oi",
    "route_id": "account_number_v18nkfqm6afpsrvy82b2",
    "route_type": "account_number",
    "source": {
      "category": "inbound_ach_transfer",
      "inbound_ach_transfer": {
        "amount": 100,
        "originator_company_descriptive_date": null,
        "originator_company_discretionary_data": null,
        "originator_company_entry_description": "RESERVE",
        "originator_company_id": "0987654321",
        "originator_company_name": "BIG BANK",
        "receiver_id_number": "12345678900",
        "receiver_name": "IAN CREASE",
        "trace_number": "021000038461022"
      }
    },
    "type": "transaction"
  },
  "type": "inbound_ach_transfer_simulation_result"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="simulate-an-ach-transfer-to-your-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Inbound ACH Transfer Simulation Result|[inbound_ach_transfer_simulation_result](#schemainbound_ach_transfer_simulation_result)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Simulate a Real Time Payments Transfer to your account

<a id="opIdsimulate_a_real_time_payments_transfer_to_your_account"></a>

> Code samples

```bash
curl https://example.com/simulations/inbound_real_time_payments_transfers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "account_number_id": "account_number_v18nkfqm6afpsrvy82b2",
    "amount": 1000,
    "request_for_payment_id": "real_time_payments_request_for_payment_28kcliz1oevcnqyn9qp7"
  }'
```

`POST /simulations/inbound_real_time_payments_transfers`

Simulates an inbound Real Time Payments transfer to your account. Real Time Payments are a beta feature.

> Body parameter

```json
{
  "account_number_id": "account_number_v18nkfqm6afpsrvy82b2",
  "amount": 1000,
  "request_for_payment_id": "real_time_payments_request_for_payment_28kcliz1oevcnqyn9qp7"
}
```

<h3 id="simulate-a-real-time-payments-transfer-to-your-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[simulate_a_real_time_payments_transfer_to_your_account_parameters](#schemasimulate_a_real_time_payments_transfer_to_your_account_parameters)|true|none|
|» account_number_id|body|string|true|The identifier of the Account Number the inbound Real Time Payments Transfer is for.|
|» amount|body|integer|true|The transfer amount in USD cents. Must be positive.|
|» debtor_account_number|body|string|false|The account number of the account that sent the transfer.|
|» debtor_name|body|string|false|The name provided by the sender of the transfer.|
|» debtor_routing_number|body|string|false|The routing number of the account that sent the transfer.|
|» remittance_information|body|string|false|Additional information included with the transfer.|
|» request_for_payment_id|body|string|false|The identifier of a pending Request for Payment that this transfer will fulfill.|

> Example responses

> 200 Response

```json
{
  "declined_transaction": null,
  "transaction": {
    "account_id": "account_in71c4amph0vgo2qllky",
    "amount": 100,
    "created_at": "2020-01-31T23:59:59Z",
    "currency": "USD",
    "description": "Frederick S. Holmes",
    "id": "transaction_uyrp7fld2ium70oa7oi",
    "route_id": "account_number_v18nkfqm6afpsrvy82b2",
    "route_type": "account_number",
    "source": {
      "category": "inbound_real_time_payments_transfer_confirmation",
      "inbound_real_time_payments_transfer_confirmation": {
        "amount": 100,
        "creditor_name": "Ian Crease",
        "currency": "USD",
        "debtor_account_number": "987654321",
        "debtor_name": "National Phonograph Company",
        "debtor_routing_number": "101050001",
        "remittance_information": "Invoice 29582",
        "transaction_identification": "20220501234567891T1BSLZO01745013025"
      }
    },
    "type": "transaction"
  },
  "type": "inbound_real_time_payments_transfer_simulation_result"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="simulate-a-real-time-payments-transfer-to-your-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Inbound Real Time Payments Transfer Simulation Result|[inbound_real_time_payments_transfer_simulation_result](#schemainbound_real_time_payments_transfer_simulation_result)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Simulate an Inbound Wire Drawdown request being created

<a id="opIdsimulate_an_inbound_wire_drawdown_request_being_created"></a>

> Code samples

```bash
curl https://example.com/simulations/inbound_wire_drawdown_requests \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "amount": 10000,
    "beneficiary_account_number": "987654321",
    "beneficiary_address_line1": "33 Liberty Street",
    "beneficiary_address_line2": "New York, NY, 10045",
    "beneficiary_name": "Ian Crease",
    "beneficiary_routing_number": "101050001",
    "currency": "USD",
    "message_to_recipient": "Invoice 29582",
    "originator_account_number": "987654321",
    "originator_address_line1": "33 Liberty Street",
    "originator_address_line2": "New York, NY, 10045",
    "originator_name": "Ian Crease",
    "originator_routing_number": "101050001",
    "recipient_account_number_id": "account_number_v18nkfqm6afpsrvy82b2"
  }'
```

`POST /simulations/inbound_wire_drawdown_requests`

Simulates the receival of an [Inbound Wire Drawdown Request](#inbound-wire-drawdown-requests).

> Body parameter

```json
{
  "amount": 10000,
  "beneficiary_account_number": "987654321",
  "beneficiary_address_line1": "33 Liberty Street",
  "beneficiary_address_line2": "New York, NY, 10045",
  "beneficiary_name": "Ian Crease",
  "beneficiary_routing_number": "101050001",
  "currency": "USD",
  "message_to_recipient": "Invoice 29582",
  "originator_account_number": "987654321",
  "originator_address_line1": "33 Liberty Street",
  "originator_address_line2": "New York, NY, 10045",
  "originator_name": "Ian Crease",
  "originator_routing_number": "101050001",
  "recipient_account_number_id": "account_number_v18nkfqm6afpsrvy82b2"
}
```

<h3 id="simulate-an-inbound-wire-drawdown-request-being-created-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[simulate_an_inbound_wire_drawdown_request_being_created_parameters](#schemasimulate_an_inbound_wire_drawdown_request_being_created_parameters)|true|none|
|» amount|body|integer|true|The amount being requested in cents.|
|» beneficiary_account_number|body|string|true|The drawdown request's beneficiary's account number.|
|» beneficiary_address_line1|body|string|false|Line 1 of the drawdown request's beneficiary's address.|
|» beneficiary_address_line2|body|string|false|Line 2 of the drawdown request's beneficiary's address.|
|» beneficiary_address_line3|body|string|false|Line 3 of the drawdown request's beneficiary's address.|
|» beneficiary_name|body|string|false|The drawdown request's beneficiary's name.|
|» beneficiary_routing_number|body|string|true|The drawdown request's beneficiary's routing number.|
|» currency|body|string|true|The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the amount being requested. Will always be "USD".|
|» message_to_recipient|body|string|true|A message from the drawdown request's originator.|
|» originator_account_number|body|string|true|The drawdown request's originator's account number.|
|» originator_address_line1|body|string|false|Line 1 of the drawdown request's originator's address.|
|» originator_address_line2|body|string|false|Line 2 of the drawdown request's originator's address.|
|» originator_address_line3|body|string|false|Line 3 of the drawdown request's originator's address.|
|» originator_name|body|string|false|The drawdown request's originator's name.|
|» originator_routing_number|body|string|true|The drawdown request's originator's routing number.|
|» originator_to_beneficiary_information_line1|body|string|false|Line 1 of the information conveyed from the originator of the message to the beneficiary.|
|» originator_to_beneficiary_information_line2|body|string|false|Line 2 of the information conveyed from the originator of the message to the beneficiary.|
|» originator_to_beneficiary_information_line3|body|string|false|Line 3 of the information conveyed from the originator of the message to the beneficiary.|
|» originator_to_beneficiary_information_line4|body|string|false|Line 4 of the information conveyed from the originator of the message to the beneficiary.|
|» recipient_account_number_id|body|string|true|The Account Number to which the recipient of this request is being requested to send funds from.|

> Example responses

> 200 Response

```json
{
  "amount": 10000,
  "beneficiary_account_number": "987654321",
  "beneficiary_address_line1": "33 Liberty Street",
  "beneficiary_address_line2": "New York, NY, 10045",
  "beneficiary_address_line3": null,
  "beneficiary_name": "Ian Crease",
  "beneficiary_routing_number": "101050001",
  "currency": "USD",
  "id": "inbound_wire_drawdown_request_u5a92ikqhz1ytphn799e",
  "message_to_recipient": "Invoice 29582",
  "originator_account_number": "987654321",
  "originator_address_line1": "33 Liberty Street",
  "originator_address_line2": "New York, NY, 10045",
  "originator_address_line3": null,
  "originator_name": "Ian Crease",
  "originator_routing_number": "101050001",
  "originator_to_beneficiary_information_line1": null,
  "originator_to_beneficiary_information_line2": null,
  "originator_to_beneficiary_information_line3": null,
  "originator_to_beneficiary_information_line4": null,
  "recipient_account_number_id": "account_number_v18nkfqm6afpsrvy82b2",
  "type": "inbound_wire_drawdown_request"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="simulate-an-inbound-wire-drawdown-request-being-created-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Inbound Wire Drawdown Request|[inbound_wire_drawdown_request](#schemainbound_wire_drawdown_request)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Simulate a Wire Transfer to your account

<a id="opIdsimulate_a_wire_transfer_to_your_account"></a>

> Code samples

```bash
curl https://example.com/simulations/inbound_wire_transfers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "account_number_id": "account_number_v18nkfqm6afpsrvy82b2",
    "amount": 1000
  }'
```

`POST /simulations/inbound_wire_transfers`

Simulates an inbound Wire Transfer to your account.

> Body parameter

```json
{
  "account_number_id": "account_number_v18nkfqm6afpsrvy82b2",
  "amount": 1000
}
```

<h3 id="simulate-a-wire-transfer-to-your-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[simulate_a_wire_transfer_to_your_account_parameters](#schemasimulate_a_wire_transfer_to_your_account_parameters)|true|none|
|» account_number_id|body|string|true|The identifier of the Account Number the inbound Wire Transfer is for.|
|» amount|body|integer|true|The transfer amount in cents. Must be positive.|
|» beneficiary_address_line1|body|string|false|The sending bank will set beneficiary_address_line1 in production. You can simulate any value here.|
|» beneficiary_address_line2|body|string|false|The sending bank will set beneficiary_address_line2 in production. You can simulate any value here.|
|» beneficiary_address_line3|body|string|false|The sending bank will set beneficiary_address_line3 in production. You can simulate any value here.|
|» beneficiary_name|body|string|false|The sending bank will set beneficiary_name in production. You can simulate any value here.|
|» beneficiary_reference|body|string|false|The sending bank will set beneficiary_reference in production. You can simulate any value here.|
|» originator_address_line1|body|string|false|The sending bank will set originator_address_line1 in production. You can simulate any value here.|
|» originator_address_line2|body|string|false|The sending bank will set originator_address_line2 in production. You can simulate any value here.|
|» originator_address_line3|body|string|false|The sending bank will set originator_address_line3 in production. You can simulate any value here.|
|» originator_name|body|string|false|The sending bank will set originator_name in production. You can simulate any value here.|
|» originator_to_beneficiary_information_line1|body|string|false|The sending bank will set originator_to_beneficiary_information_line1 in production. You can simulate any value here.|
|» originator_to_beneficiary_information_line2|body|string|false|The sending bank will set originator_to_beneficiary_information_line2 in production. You can simulate any value here.|
|» originator_to_beneficiary_information_line3|body|string|false|The sending bank will set originator_to_beneficiary_information_line3 in production. You can simulate any value here.|
|» originator_to_beneficiary_information_line4|body|string|false|The sending bank will set originator_to_beneficiary_information_line4 in production. You can simulate any value here.|

> Example responses

> 200 Response

```json
{
  "transaction": {
    "account_id": "account_in71c4amph0vgo2qllky",
    "amount": 100,
    "created_at": "2020-01-31T23:59:59Z",
    "currency": "USD",
    "description": "Frederick S. Holmes",
    "id": "transaction_uyrp7fld2ium70oa7oi",
    "route_id": "account_number_v18nkfqm6afpsrvy82b2",
    "route_type": "account_number",
    "source": {
      "category": "inbound_wire_transfer",
      "inbound_wire_transfer": {
        "amount": 100,
        "beneficiary_address_line1": null,
        "beneficiary_address_line2": null,
        "beneficiary_address_line3": null,
        "beneficiary_name": null,
        "beneficiary_reference": null,
        "description": "Inbound wire transfer",
        "input_message_accountability_data": null,
        "originator_address_line1": null,
        "originator_address_line2": null,
        "originator_address_line3": null,
        "originator_name": null,
        "originator_to_beneficiary_information": null,
        "originator_to_beneficiary_information_line1": null,
        "originator_to_beneficiary_information_line2": null,
        "originator_to_beneficiary_information_line3": null,
        "originator_to_beneficiary_information_line4": null
      }
    },
    "type": "transaction"
  },
  "type": "inbound_wire_transfer_simulation_result"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="simulate-a-wire-transfer-to-your-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Inbound Wire Transfer Simulation Result|[inbound_wire_transfer_simulation_result](#schemainbound_wire_transfer_simulation_result)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Reverse a Sandbox Wire Transfer

<a id="opIdreverse_a_sandbox_wire_transfer"></a>

> Code samples

```bash
curl https://example.com/simulations/wire_transfers/wire_transfer_5akynk7dqsq25qwk9q2u/reverse \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /simulations/wire_transfers/{wire_transfer_id}/reverse`

Simulates the reversal of a [Wire Transfer](#wire-transfers) by the Federal Reserve due to error conditions. This will also create a [Transaction](#transaction) to account for the returned funds. This Wire Transfer must first have a `status` of `complete`.'

<h3 id="reverse-a-sandbox-wire-transfer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|wire_transfer_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "account_id": "account_in71c4amph0vgo2qllky",
  "account_number": "987654321",
  "amount": 100,
  "approval": {
    "approved_at": "2020-01-31T23:59:59Z"
  },
  "beneficiary_address_line1": null,
  "beneficiary_address_line2": null,
  "beneficiary_address_line3": null,
  "beneficiary_financial_institution_address_line1": null,
  "beneficiary_financial_institution_address_line2": null,
  "beneficiary_financial_institution_address_line3": null,
  "beneficiary_financial_institution_identifier": null,
  "beneficiary_financial_institution_identifier_type": null,
  "beneficiary_financial_institution_name": null,
  "beneficiary_name": null,
  "cancellation": null,
  "created_at": "2020-01-31T23:59:59Z",
  "currency": "USD",
  "external_account_id": "external_account_ukk55lr923a3ac0pp7iv",
  "id": "wire_transfer_5akynk7dqsq25qwk9q2u",
  "message_to_recipient": "Message to recipient",
  "network": "wire",
  "reversal": null,
  "routing_number": "101050001",
  "status": "complete",
  "submission": null,
  "template_id": "wire_transfer_template_1brjk98vuwdd2er5o5sy",
  "transaction_id": "transaction_uyrp7fld2ium70oa7oi",
  "type": "wire_transfer"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="reverse-a-sandbox-wire-transfer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Wire Transfer|[wire_transfer](#schemawire_transfer)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Submit a Sandbox Wire Transfer

<a id="opIdsubmit_a_sandbox_wire_transfer"></a>

> Code samples

```bash
curl https://example.com/simulations/wire_transfers/wire_transfer_5akynk7dqsq25qwk9q2u/submit \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /simulations/wire_transfers/{wire_transfer_id}/submit`

Simulates the submission of a [Wire Transfer](#wire-transfers) to the Federal Reserve. This transfer must first have a `status` of `pending_approval` or `pending_creating`.

<h3 id="submit-a-sandbox-wire-transfer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|wire_transfer_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "account_id": "account_in71c4amph0vgo2qllky",
  "account_number": "987654321",
  "amount": 100,
  "approval": {
    "approved_at": "2020-01-31T23:59:59Z"
  },
  "beneficiary_address_line1": null,
  "beneficiary_address_line2": null,
  "beneficiary_address_line3": null,
  "beneficiary_financial_institution_address_line1": null,
  "beneficiary_financial_institution_address_line2": null,
  "beneficiary_financial_institution_address_line3": null,
  "beneficiary_financial_institution_identifier": null,
  "beneficiary_financial_institution_identifier_type": null,
  "beneficiary_financial_institution_name": null,
  "beneficiary_name": null,
  "cancellation": null,
  "created_at": "2020-01-31T23:59:59Z",
  "currency": "USD",
  "external_account_id": "external_account_ukk55lr923a3ac0pp7iv",
  "id": "wire_transfer_5akynk7dqsq25qwk9q2u",
  "message_to_recipient": "Message to recipient",
  "network": "wire",
  "reversal": null,
  "routing_number": "101050001",
  "status": "complete",
  "submission": null,
  "template_id": "wire_transfer_template_1brjk98vuwdd2er5o5sy",
  "transaction_id": "transaction_uyrp7fld2ium70oa7oi",
  "type": "wire_transfer"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="submit-a-sandbox-wire-transfer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Wire Transfer|[wire_transfer](#schemawire_transfer)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## List Transactions

<a id="opIdlist_transactions"></a>

> Code samples

```bash
curl https://example.com/transactions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /transactions`

<h3 id="list-transactions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|none|
|limit|query|integer|false|none|
|account_id|query|string|false|none|
|created_at.after|query|string(date-time)|false|none|
|created_at.before|query|string(date-time)|false|none|
|created_at.on_or_after|query|string(date-time)|false|none|
|created_at.on_or_before|query|string(date-time)|false|none|
|category.in|query|[string]|false|none|
|route_id|query|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|category.in|account_transfer_intention|
|category.in|ach_check_conversion_return|
|category.in|ach_check_conversion|
|category.in|ach_transfer_intention|
|category.in|ach_transfer_rejection|
|category.in|ach_transfer_return|
|category.in|card_dispute_acceptance|
|category.in|card_refund|
|category.in|card_settlement|
|category.in|check_deposit_acceptance|
|category.in|check_deposit_return|
|category.in|check_transfer_intention|
|category.in|check_transfer_return|
|category.in|check_transfer_rejection|
|category.in|check_transfer_stop_payment_request|
|category.in|dispute_resolution|
|category.in|empyreal_cash_deposit|
|category.in|inbound_ach_transfer|
|category.in|inbound_ach_transfer_return_intention|
|category.in|inbound_check|
|category.in|inbound_international_ach_transfer|
|category.in|inbound_real_time_payments_transfer_confirmation|
|category.in|inbound_wire_drawdown_payment_reversal|
|category.in|inbound_wire_drawdown_payment|
|category.in|inbound_wire_reversal|
|category.in|inbound_wire_transfer|
|category.in|interest_payment|
|category.in|internal_general_ledger_transaction|
|category.in|internal_source|
|category.in|card_route_refund|
|category.in|card_route_settlement|
|category.in|real_time_payments_transfer_acknowledgement|
|category.in|sample_funds|
|category.in|wire_drawdown_payment_intention|
|category.in|wire_drawdown_payment_rejection|
|category.in|wire_transfer_intention|
|category.in|wire_transfer_rejection|
|category.in|other|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "account_id": "account_in71c4amph0vgo2qllky",
      "amount": 100,
      "created_at": "2020-01-31T23:59:59Z",
      "currency": "USD",
      "description": "Frederick S. Holmes",
      "id": "transaction_uyrp7fld2ium70oa7oi",
      "route_id": "account_number_v18nkfqm6afpsrvy82b2",
      "route_type": "account_number",
      "source": {
        "category": "inbound_ach_transfer",
        "inbound_ach_transfer": {
          "amount": 100,
          "originator_company_descriptive_date": null,
          "originator_company_discretionary_data": null,
          "originator_company_entry_description": "RESERVE",
          "originator_company_id": "0987654321",
          "originator_company_name": "BIG BANK",
          "receiver_id_number": "12345678900",
          "receiver_name": "IAN CREASE",
          "trace_number": "021000038461022"
        }
      },
      "type": "transaction"
    }
  ],
  "next_cursor": "v57w5d"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="list-transactions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Transaction List|[transaction_list](#schematransaction_list)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Retrieve a Transaction

<a id="opIdretrieve_a_transaction"></a>

> Code samples

```bash
curl https://example.com/transactions/transaction_uyrp7fld2ium70oa7oi \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /transactions/{transaction_id}`

<h3 id="retrieve-a-transaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|transaction_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "account_id": "account_in71c4amph0vgo2qllky",
  "amount": 100,
  "created_at": "2020-01-31T23:59:59Z",
  "currency": "USD",
  "description": "Frederick S. Holmes",
  "id": "transaction_uyrp7fld2ium70oa7oi",
  "route_id": "account_number_v18nkfqm6afpsrvy82b2",
  "route_type": "account_number",
  "source": {
    "category": "inbound_ach_transfer",
    "inbound_ach_transfer": {
      "amount": 100,
      "originator_company_descriptive_date": null,
      "originator_company_discretionary_data": null,
      "originator_company_entry_description": "RESERVE",
      "originator_company_id": "0987654321",
      "originator_company_name": "BIG BANK",
      "receiver_id_number": "12345678900",
      "receiver_name": "IAN CREASE",
      "trace_number": "021000038461022"
    }
  },
  "type": "transaction"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="retrieve-a-transaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Transaction|[transaction](#schematransaction)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## List Wire Drawdown Requests

<a id="opIdlist_wire_drawdown_requests"></a>

> Code samples

```bash
curl https://example.com/wire_drawdown_requests \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /wire_drawdown_requests`

<h3 id="list-wire-drawdown-requests-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|none|
|limit|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "account_number_id": "account_number_v18nkfqm6afpsrvy82b2",
      "amount": 10000,
      "currency": "USD",
      "fulfillment_transaction_id": "transaction_uyrp7fld2ium70oa7oi",
      "id": "wire_drawdown_request_q6lmocus3glo0lr2bfv3",
      "message_to_recipient": "Invoice 29582",
      "recipient_account_number": "987654321",
      "recipient_address_line1": "33 Liberty Street",
      "recipient_address_line2": "New York, NY, 10045",
      "recipient_address_line3": null,
      "recipient_name": "Ian Crease",
      "recipient_routing_number": "101050001",
      "status": "fulfilled",
      "submission": {
        "input_message_accountability_data": "20220118MMQFMP0P000003"
      },
      "type": "wire_drawdown_request"
    }
  ],
  "next_cursor": "v57w5d"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="list-wire-drawdown-requests-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Wire Drawdown Request List|[wire_drawdown_request_list](#schemawire_drawdown_request_list)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create a Wire Drawdown Request

<a id="opIdcreate_a_wire_drawdown_request"></a>

> Code samples

```bash
curl https://example.com/wire_drawdown_requests \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "account_number_id": "account_number_v18nkfqm6afpsrvy82b2",
    "amount": 10000,
    "message_to_recipient": "Invoice 29582",
    "recipient_account_number": "987654321",
    "recipient_address_line1": "33 Liberty Street",
    "recipient_address_line2": "New York, NY, 10045",
    "recipient_name": "Ian Crease",
    "recipient_routing_number": "101050001"
  }'
```

`POST /wire_drawdown_requests`

> Body parameter

```json
{
  "account_number_id": "account_number_v18nkfqm6afpsrvy82b2",
  "amount": 10000,
  "message_to_recipient": "Invoice 29582",
  "recipient_account_number": "987654321",
  "recipient_address_line1": "33 Liberty Street",
  "recipient_address_line2": "New York, NY, 10045",
  "recipient_name": "Ian Crease",
  "recipient_routing_number": "101050001"
}
```

<h3 id="create-a-wire-drawdown-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[create_a_wire_drawdown_request_parameters](#schemacreate_a_wire_drawdown_request_parameters)|true|none|
|» account_number_id|body|string|true|The Account Number to which the recipient should send funds.|
|» amount|body|integer|true|The amount requested from the recipient, in cents.|
|» message_to_recipient|body|string|true|A message the recipient will see as part of the request.|
|» recipient_account_number|body|string|true|The drawdown request's recipient's account number.|
|» recipient_address_line1|body|string|false|Line 1 of the drawdown request's recipient's address.|
|» recipient_address_line2|body|string|false|Line 2 of the drawdown request's recipient's address.|
|» recipient_address_line3|body|string|false|Line 3 of the drawdown request's recipient's address.|
|» recipient_name|body|string|true|The drawdown request's recipient's name.|
|» recipient_routing_number|body|string|true|The drawdown request's recipient's routing number.|

> Example responses

> 200 Response

```json
{
  "account_number_id": "account_number_v18nkfqm6afpsrvy82b2",
  "amount": 10000,
  "currency": "USD",
  "fulfillment_transaction_id": "transaction_uyrp7fld2ium70oa7oi",
  "id": "wire_drawdown_request_q6lmocus3glo0lr2bfv3",
  "message_to_recipient": "Invoice 29582",
  "recipient_account_number": "987654321",
  "recipient_address_line1": "33 Liberty Street",
  "recipient_address_line2": "New York, NY, 10045",
  "recipient_address_line3": null,
  "recipient_name": "Ian Crease",
  "recipient_routing_number": "101050001",
  "status": "fulfilled",
  "submission": {
    "input_message_accountability_data": "20220118MMQFMP0P000003"
  },
  "type": "wire_drawdown_request"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="create-a-wire-drawdown-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Wire Drawdown Request|[wire_drawdown_request](#schemawire_drawdown_request)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Retrieve a Wire Drawdown Request

<a id="opIdretrieve_a_wire_drawdown_request"></a>

> Code samples

```bash
curl https://example.com/wire_drawdown_requests/wire_drawdown_request_q6lmocus3glo0lr2bfv3 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /wire_drawdown_requests/{wire_drawdown_request_id}`

<h3 id="retrieve-a-wire-drawdown-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|wire_drawdown_request_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "account_number_id": "account_number_v18nkfqm6afpsrvy82b2",
  "amount": 10000,
  "currency": "USD",
  "fulfillment_transaction_id": "transaction_uyrp7fld2ium70oa7oi",
  "id": "wire_drawdown_request_q6lmocus3glo0lr2bfv3",
  "message_to_recipient": "Invoice 29582",
  "recipient_account_number": "987654321",
  "recipient_address_line1": "33 Liberty Street",
  "recipient_address_line2": "New York, NY, 10045",
  "recipient_address_line3": null,
  "recipient_name": "Ian Crease",
  "recipient_routing_number": "101050001",
  "status": "fulfilled",
  "submission": {
    "input_message_accountability_data": "20220118MMQFMP0P000003"
  },
  "type": "wire_drawdown_request"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="retrieve-a-wire-drawdown-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Wire Drawdown Request|[wire_drawdown_request](#schemawire_drawdown_request)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## List Wire Transfers

<a id="opIdlist_wire_transfers"></a>

> Code samples

```bash
curl https://example.com/wire_transfers \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /wire_transfers`

<h3 id="list-wire-transfers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cursor|query|string|false|none|
|limit|query|integer|false|none|
|account_id|query|string|false|none|
|external_account_id|query|string|false|none|
|created_at.after|query|string(date-time)|false|none|
|created_at.before|query|string(date-time)|false|none|
|created_at.on_or_after|query|string(date-time)|false|none|
|created_at.on_or_before|query|string(date-time)|false|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "account_id": "account_in71c4amph0vgo2qllky",
      "account_number": "987654321",
      "amount": 100,
      "approval": {
        "approved_at": "2020-01-31T23:59:59Z"
      },
      "beneficiary_address_line1": null,
      "beneficiary_address_line2": null,
      "beneficiary_address_line3": null,
      "beneficiary_financial_institution_address_line1": null,
      "beneficiary_financial_institution_address_line2": null,
      "beneficiary_financial_institution_address_line3": null,
      "beneficiary_financial_institution_identifier": null,
      "beneficiary_financial_institution_identifier_type": null,
      "beneficiary_financial_institution_name": null,
      "beneficiary_name": null,
      "cancellation": null,
      "created_at": "2020-01-31T23:59:59Z",
      "currency": "USD",
      "external_account_id": "external_account_ukk55lr923a3ac0pp7iv",
      "id": "wire_transfer_5akynk7dqsq25qwk9q2u",
      "message_to_recipient": "Message to recipient",
      "network": "wire",
      "reversal": null,
      "routing_number": "101050001",
      "status": "complete",
      "submission": null,
      "template_id": "wire_transfer_template_1brjk98vuwdd2er5o5sy",
      "transaction_id": "transaction_uyrp7fld2ium70oa7oi",
      "type": "wire_transfer"
    }
  ],
  "next_cursor": "v57w5d"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="list-wire-transfers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Wire Transfer List|[wire_transfer_list](#schemawire_transfer_list)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Create a Wire Transfer

<a id="opIdcreate_a_wire_transfer"></a>

> Code samples

```bash
curl https://example.com/wire_transfers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "account_id": "account_in71c4amph0vgo2qllky",
    "account_number": "987654321",
    "amount": 100,
    "beneficiary_address_line1": "33 Liberty Street",
    "beneficiary_address_line2": "New York",
    "beneficiary_address_line3": "NY 10045",
    "beneficiary_name": "Ian Crease",
    "message_to_recipient": "New account transfer",
    "routing_number": "101050001"
  }'
```

`POST /wire_transfers`

> Body parameter

```json
{
  "account_id": "account_in71c4amph0vgo2qllky",
  "account_number": "987654321",
  "amount": 100,
  "beneficiary_address_line1": "33 Liberty Street",
  "beneficiary_address_line2": "New York",
  "beneficiary_address_line3": "NY 10045",
  "beneficiary_name": "Ian Crease",
  "message_to_recipient": "New account transfer",
  "routing_number": "101050001"
}
```

<h3 id="create-a-wire-transfer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[create_a_wire_transfer_parameters](#schemacreate_a_wire_transfer_parameters)|true|none|
|» account_id|body|string|true|The identifier for the account that will send the transfer.|
|» account_number|body|string|false|The account number for the destination account.|
|» amount|body|integer|true|The transfer amount in cents.|
|» beneficiary_address_line1|body|string|false|The beneficiary's address line 1.|
|» beneficiary_address_line2|body|string|false|The beneficiary's address line 2.|
|» beneficiary_address_line3|body|string|false|The beneficiary's address line 3.|
|» beneficiary_name|body|string|true|The beneficiary's name.|
|» external_account_id|body|string|false|The ID of an External Account to initiate a transfer to. If this parameter is provided, `account_number` and `routing_number` must be absent.|
|» message_to_recipient|body|string|true|The message that will show on the recipient's bank statement.|
|» require_approval|body|boolean|false|Whether the transfer requires explicit approval via the dashboard or API.|
|» routing_number|body|string|false|The American Bankers' Association (ABA) Routing Transit Number (RTN) for the destination account.|

> Example responses

> 200 Response

```json
{
  "account_id": "account_in71c4amph0vgo2qllky",
  "account_number": "987654321",
  "amount": 100,
  "approval": {
    "approved_at": "2020-01-31T23:59:59Z"
  },
  "beneficiary_address_line1": null,
  "beneficiary_address_line2": null,
  "beneficiary_address_line3": null,
  "beneficiary_financial_institution_address_line1": null,
  "beneficiary_financial_institution_address_line2": null,
  "beneficiary_financial_institution_address_line3": null,
  "beneficiary_financial_institution_identifier": null,
  "beneficiary_financial_institution_identifier_type": null,
  "beneficiary_financial_institution_name": null,
  "beneficiary_name": null,
  "cancellation": null,
  "created_at": "2020-01-31T23:59:59Z",
  "currency": "USD",
  "external_account_id": "external_account_ukk55lr923a3ac0pp7iv",
  "id": "wire_transfer_5akynk7dqsq25qwk9q2u",
  "message_to_recipient": "Message to recipient",
  "network": "wire",
  "reversal": null,
  "routing_number": "101050001",
  "status": "complete",
  "submission": null,
  "template_id": "wire_transfer_template_1brjk98vuwdd2er5o5sy",
  "transaction_id": "transaction_uyrp7fld2ium70oa7oi",
  "type": "wire_transfer"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="create-a-wire-transfer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Wire Transfer|[wire_transfer](#schemawire_transfer)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Retrieve a Wire Transfer

<a id="opIdretrieve_a_wire_transfer"></a>

> Code samples

```bash
curl https://example.com/wire_transfers/wire_transfer_5akynk7dqsq25qwk9q2u \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /wire_transfers/{wire_transfer_id}`

<h3 id="retrieve-a-wire-transfer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|wire_transfer_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "account_id": "account_in71c4amph0vgo2qllky",
  "account_number": "987654321",
  "amount": 100,
  "approval": {
    "approved_at": "2020-01-31T23:59:59Z"
  },
  "beneficiary_address_line1": null,
  "beneficiary_address_line2": null,
  "beneficiary_address_line3": null,
  "beneficiary_financial_institution_address_line1": null,
  "beneficiary_financial_institution_address_line2": null,
  "beneficiary_financial_institution_address_line3": null,
  "beneficiary_financial_institution_identifier": null,
  "beneficiary_financial_institution_identifier_type": null,
  "beneficiary_financial_institution_name": null,
  "beneficiary_name": null,
  "cancellation": null,
  "created_at": "2020-01-31T23:59:59Z",
  "currency": "USD",
  "external_account_id": "external_account_ukk55lr923a3ac0pp7iv",
  "id": "wire_transfer_5akynk7dqsq25qwk9q2u",
  "message_to_recipient": "Message to recipient",
  "network": "wire",
  "reversal": null,
  "routing_number": "101050001",
  "status": "complete",
  "submission": null,
  "template_id": "wire_transfer_template_1brjk98vuwdd2er5o5sy",
  "transaction_id": "transaction_uyrp7fld2ium70oa7oi",
  "type": "wire_transfer"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="retrieve-a-wire-transfer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Wire Transfer|[wire_transfer](#schemawire_transfer)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Approve a Wire Transfer

<a id="opIdapprove_a_wire_transfer"></a>

> Code samples

```bash
curl https://example.com/wire_transfers/wire_transfer_5akynk7dqsq25qwk9q2u/approve \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /wire_transfers/{wire_transfer_id}/approve`

<h3 id="approve-a-wire-transfer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|wire_transfer_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "account_id": "account_in71c4amph0vgo2qllky",
  "account_number": "987654321",
  "amount": 100,
  "approval": {
    "approved_at": "2020-01-31T23:59:59Z"
  },
  "beneficiary_address_line1": null,
  "beneficiary_address_line2": null,
  "beneficiary_address_line3": null,
  "beneficiary_financial_institution_address_line1": null,
  "beneficiary_financial_institution_address_line2": null,
  "beneficiary_financial_institution_address_line3": null,
  "beneficiary_financial_institution_identifier": null,
  "beneficiary_financial_institution_identifier_type": null,
  "beneficiary_financial_institution_name": null,
  "beneficiary_name": null,
  "cancellation": null,
  "created_at": "2020-01-31T23:59:59Z",
  "currency": "USD",
  "external_account_id": "external_account_ukk55lr923a3ac0pp7iv",
  "id": "wire_transfer_5akynk7dqsq25qwk9q2u",
  "message_to_recipient": "Message to recipient",
  "network": "wire",
  "reversal": null,
  "routing_number": "101050001",
  "status": "complete",
  "submission": null,
  "template_id": "wire_transfer_template_1brjk98vuwdd2er5o5sy",
  "transaction_id": "transaction_uyrp7fld2ium70oa7oi",
  "type": "wire_transfer"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="approve-a-wire-transfer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Wire Transfer|[wire_transfer](#schemawire_transfer)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Cancel a pending Wire Transfer

<a id="opIdcancel_a_pending_wire_transfer"></a>

> Code samples

```bash
curl https://example.com/wire_transfers/wire_transfer_5akynk7dqsq25qwk9q2u/cancel \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /wire_transfers/{wire_transfer_id}/cancel`

<h3 id="cancel-a-pending-wire-transfer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|wire_transfer_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "account_id": "account_in71c4amph0vgo2qllky",
  "account_number": "987654321",
  "amount": 100,
  "approval": {
    "approved_at": "2020-01-31T23:59:59Z"
  },
  "beneficiary_address_line1": null,
  "beneficiary_address_line2": null,
  "beneficiary_address_line3": null,
  "beneficiary_financial_institution_address_line1": null,
  "beneficiary_financial_institution_address_line2": null,
  "beneficiary_financial_institution_address_line3": null,
  "beneficiary_financial_institution_identifier": null,
  "beneficiary_financial_institution_identifier_type": null,
  "beneficiary_financial_institution_name": null,
  "beneficiary_name": null,
  "cancellation": null,
  "created_at": "2020-01-31T23:59:59Z",
  "currency": "USD",
  "external_account_id": "external_account_ukk55lr923a3ac0pp7iv",
  "id": "wire_transfer_5akynk7dqsq25qwk9q2u",
  "message_to_recipient": "Message to recipient",
  "network": "wire",
  "reversal": null,
  "routing_number": "101050001",
  "status": "complete",
  "submission": null,
  "template_id": "wire_transfer_template_1brjk98vuwdd2er5o5sy",
  "transaction_id": "transaction_uyrp7fld2ium70oa7oi",
  "type": "wire_transfer"
}
```

> default Response

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

<h3 id="cancel-a-pending-wire-transfer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Wire Transfer|[wire_transfer](#schemawire_transfer)|
|default|Default|Error|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

# Schemas

<h2 id="tocS_account">account</h2>
<!-- backwards compatibility -->
<a id="schemaaccount"></a>
<a id="schema_account"></a>
<a id="tocSaccount"></a>
<a id="tocsaccount"></a>

```json
{
  "balances": {
    "available_balance": 100,
    "current_balance": 100
  },
  "bank": "first_internet_bank",
  "created_at": "2020-01-31T23:59:59Z",
  "currency": "USD",
  "entity_id": "entity_n8y8tnk2p9339ti393yi",
  "id": "account_in71c4amph0vgo2qllky",
  "informational_entity_id": null,
  "interest_accrued": "0.01",
  "interest_accrued_at": "2020-01-31",
  "name": "My first account!",
  "replacement": {
    "replaced_account_id": null,
    "replaced_by_account_id": null
  },
  "status": "open",
  "type": "account"
}
```

Accounts are your bank accounts with Increase. They store money, receive transfers, and send payments. They earn interest and have depository insurance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|balances|object|true|none|The Account's balances in the minor unit of its currency. For dollars, for example, these values will represent cents.|
|created_at|string(date-time)|true|none|The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time at which the Account was created.|
|currency|string|true|none|The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the Account currency.|
|entity_id|string \| null|true|none|The identifier for the Entity the Account belongs to.|
|id|string|true|none|The Account identifier.|
|informational_entity_id|string \| null|true|none|The identifier of an Entity that, while not owning the Account, is associated with its activity.|
|interest_accrued|string|true|none|The interest accrued but not yet paid, expressed as a string containing a floating-point value.|
|interest_accrued_at|string(date) \| null|true|none|The latest [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date on which interest was accrued.|
|name|string|true|none|The name you choose for the Account.|
|status|string|true|none|The status of the Account.|
|type|string|true|none|A constant representing the object's type. For this resource it will always be `account`.|

#### Enumerated Values

|Property|Value|
|---|---|
|currency|CAD|
|currency|CHF|
|currency|EUR|
|currency|GBP|
|currency|JPY|
|currency|USD|
|status|open|
|status|closed|
|type|account|

<h2 id="tocS_account_list">account_list</h2>
<!-- backwards compatibility -->
<a id="schemaaccount_list"></a>
<a id="schema_account_list"></a>
<a id="tocSaccount_list"></a>
<a id="tocsaccount_list"></a>

```json
{
  "data": [
    {
      "balances": {
        "available_balance": 100,
        "current_balance": 100
      },
      "bank": "first_internet_bank",
      "created_at": "2020-01-31T23:59:59Z",
      "currency": "USD",
      "entity_id": "entity_n8y8tnk2p9339ti393yi",
      "id": "account_in71c4amph0vgo2qllky",
      "informational_entity_id": null,
      "interest_accrued": "0.01",
      "interest_accrued_at": "2020-01-31",
      "name": "My first account!",
      "replacement": {
        "replaced_account_id": null,
        "replaced_by_account_id": null
      },
      "status": "open",
      "type": "account"
    }
  ],
  "next_cursor": "v57w5d"
}
```

A list of Account objects

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[account](#schemaaccount)]|true|none|The contents of the list.|
|next_cursor|string \| null|true|none|A pointer to a place in the list.|

<h2 id="tocS_account_number">account_number</h2>
<!-- backwards compatibility -->
<a id="schemaaccount_number"></a>
<a id="schema_account_number"></a>
<a id="tocSaccount_number"></a>
<a id="tocsaccount_number"></a>

```json
{
  "account_id": "account_in71c4amph0vgo2qllky",
  "account_number": "987654321",
  "created_at": "2020-01-31T23:59:59Z",
  "id": "account_number_v18nkfqm6afpsrvy82b2",
  "name": "ACH",
  "replacement": {
    "replaced_account_number_id": null,
    "replaced_by_account_number_id": null
  },
  "routing_number": "101050001",
  "status": "active",
  "type": "account_number"
}
```

Each account can have multiple account and routing numbers. We recommend that you use a set per vendor. This is similar to how you use different passwords for different websites. Account numbers can also be used to seamlessly reconcile inbound payments. Generating a unique account number per vendor ensures you always know the originator of an incoming payment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|string|true|none|The identifier for the account this Account Number belongs to.|
|account_number|string|true|none|The account number.|
|created_at|string(date-time)|true|none|The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time at which the Account Number was created.|
|id|string|true|none|The Account Number identifier.|
|name|string|true|none|The name you choose for the Account Number.|
|routing_number|string|true|none|The American Bankers' Association (ABA) Routing Transit Number (RTN).|
|status|string|true|none|This indicates if payments can be made to the Account Number.|
|type|string|true|none|A constant representing the object's type. For this resource it will always be `account_number`.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|active|
|status|disabled|
|status|canceled|
|type|account_number|

<h2 id="tocS_account_number_list">account_number_list</h2>
<!-- backwards compatibility -->
<a id="schemaaccount_number_list"></a>
<a id="schema_account_number_list"></a>
<a id="tocSaccount_number_list"></a>
<a id="tocsaccount_number_list"></a>

```json
{
  "data": [
    {
      "account_id": "account_in71c4amph0vgo2qllky",
      "account_number": "987654321",
      "created_at": "2020-01-31T23:59:59Z",
      "id": "account_number_v18nkfqm6afpsrvy82b2",
      "name": "ACH",
      "replacement": {
        "replaced_account_number_id": null,
        "replaced_by_account_number_id": null
      },
      "routing_number": "101050001",
      "status": "active",
      "type": "account_number"
    }
  ],
  "next_cursor": "v57w5d"
}
```

A list of Account Number objects

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[account_number](#schemaaccount_number)]|true|none|The contents of the list.|
|next_cursor|string \| null|true|none|A pointer to a place in the list.|

<h2 id="tocS_account_statement">account_statement</h2>
<!-- backwards compatibility -->
<a id="schemaaccount_statement"></a>
<a id="schema_account_statement"></a>
<a id="tocSaccount_statement"></a>
<a id="tocsaccount_statement"></a>

```json
{
  "account_id": "account_in71c4amph0vgo2qllky",
  "created_at": "2020-01-31T23:59:59Z",
  "ending_balance": 100,
  "file_id": "file_makxrc67oh9l6sg7w9yc",
  "id": "account_statement_lkc03a4skm2k7f38vj15",
  "starting_balance": 0,
  "statement_period_end": "2020-01-31T23:59:59Z",
  "statement_period_start": "2020-01-31T23:59:59Z",
  "type": "account_statement"
}
```

Account Statements are generated monthly for every active Account. You can access the statement's data via the API or retrieve a PDF with its details via its associated File.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|string|true|none|The identifier for the Account this Account Statement belongs to.|
|created_at|string(date-time)|true|none|The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time at which the Account Statement was created.|
|ending_balance|integer|true|none|The Account's balance at the start of its statement period.|
|file_id|string|true|none|The identifier of the File containing a PDF of the statement.|
|id|string|true|none|The Account Statement identifier.|
|starting_balance|integer|true|none|The Account's balance at the start of its statement period.|
|statement_period_end|string(date-time)|true|none|The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time representing the end of the period the Account Statement covers.|
|statement_period_start|string(date-time)|true|none|The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time representing the start of the period the Account Statement covers.|
|type|string|true|none|A constant representing the object's type. For this resource it will always be `account_statement`.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|account_statement|

<h2 id="tocS_account_statement_list">account_statement_list</h2>
<!-- backwards compatibility -->
<a id="schemaaccount_statement_list"></a>
<a id="schema_account_statement_list"></a>
<a id="tocSaccount_statement_list"></a>
<a id="tocsaccount_statement_list"></a>

```json
{
  "data": [
    {
      "account_id": "account_in71c4amph0vgo2qllky",
      "created_at": "2020-01-31T23:59:59Z",
      "ending_balance": 100,
      "file_id": "file_makxrc67oh9l6sg7w9yc",
      "id": "account_statement_lkc03a4skm2k7f38vj15",
      "starting_balance": 0,
      "statement_period_end": "2020-01-31T23:59:59Z",
      "statement_period_start": "2020-01-31T23:59:59Z",
      "type": "account_statement"
    }
  ],
  "next_cursor": "v57w5d"
}
```

A list of Account Statement objects

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[account_statement](#schemaaccount_statement)]|true|none|The contents of the list.|
|next_cursor|string \| null|true|none|A pointer to a place in the list.|

<h2 id="tocS_account_transfer">account_transfer</h2>
<!-- backwards compatibility -->
<a id="schemaaccount_transfer"></a>
<a id="schema_account_transfer"></a>
<a id="tocSaccount_transfer"></a>
<a id="tocsaccount_transfer"></a>

```json
{
  "account_id": "account_in71c4amph0vgo2qllky",
  "amount": 100,
  "approval": {
    "approved_at": "2020-01-31T23:59:59Z"
  },
  "cancellation": null,
  "created_at": "2020-01-31T23:59:59Z",
  "currency": "USD",
  "description": "Move money into savings",
  "destination_account_id": "account_uf16sut2ct5bevmq3eh",
  "destination_transaction_id": "transaction_j3itv8dtk5o8pw3p1xj4",
  "id": "account_transfer_7k9qe1ysdgqztnt63l7n",
  "network": "account",
  "status": "complete",
  "template_id": "account_transfer_template_5nloco84eijzw0wcfhnn",
  "transaction_id": "transaction_uyrp7fld2ium70oa7oi",
  "type": "account_transfer"
}
```

Account transfers move funds between your own accounts at Increase.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|string|true|none|The Account to which the transfer belongs.|
|amount|integer|true|none|The transfer amount in the minor unit of the destination account currency. For dollars, for example, this is cents.|
|approval|object \| null|true|none|If your account requires approvals for transfers and the transfer was approved, this will contain details of the approval.|
|cancellation|object \| null|true|none|If your account requires approvals for transfers and the transfer was not approved, this will contain details of the cancellation.|
|created_at|string(date-time)|true|none|The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which the transfer was created.|
|currency|string|true|none|The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the destination account currency.|
|description|string|true|none|The description that will show on the transactions.|
|destination_account_id|string|true|none|The destination account's identifier.|
|destination_transaction_id|string \| null|true|none|The ID for the transaction receiving the transfer.|
|id|string|true|none|The account transfer's identifier.|
|network|string|true|none|The transfer's network.|
|status|string|true|none|The lifecycle status of the transfer.|
|template_id|string \| null|true|none|If the transfer was created from a template, this will be the template's ID.|
|transaction_id|string \| null|true|none|The ID for the transaction funding the transfer.|
|type|string|true|none|A constant representing the object's type. For this resource it will always be `account_transfer`.|

#### Enumerated Values

|Property|Value|
|---|---|
|currency|CAD|
|currency|CHF|
|currency|EUR|
|currency|GBP|
|currency|JPY|
|currency|USD|
|network|account|
|status|pending_submission|
|status|pending_approval|
|status|canceled|
|status|requires_attention|
|status|flagged_by_operator|
|status|complete|
|type|account_transfer|

<h2 id="tocS_account_transfer_list">account_transfer_list</h2>
<!-- backwards compatibility -->
<a id="schemaaccount_transfer_list"></a>
<a id="schema_account_transfer_list"></a>
<a id="tocSaccount_transfer_list"></a>
<a id="tocsaccount_transfer_list"></a>

```json
{
  "data": [
    {
      "account_id": "account_in71c4amph0vgo2qllky",
      "amount": 100,
      "approval": {
        "approved_at": "2020-01-31T23:59:59Z"
      },
      "cancellation": null,
      "created_at": "2020-01-31T23:59:59Z",
      "currency": "USD",
      "description": "Move money into savings",
      "destination_account_id": "account_uf16sut2ct5bevmq3eh",
      "destination_transaction_id": "transaction_j3itv8dtk5o8pw3p1xj4",
      "id": "account_transfer_7k9qe1ysdgqztnt63l7n",
      "network": "account",
      "status": "complete",
      "template_id": "account_transfer_template_5nloco84eijzw0wcfhnn",
      "transaction_id": "transaction_uyrp7fld2ium70oa7oi",
      "type": "account_transfer"
    }
  ],
  "next_cursor": "v57w5d"
}
```

A list of Account Transfer objects

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[account_transfer](#schemaaccount_transfer)]|true|none|The contents of the list.|
|next_cursor|string \| null|true|none|A pointer to a place in the list.|

<h2 id="tocS_ach_prenotification">ach_prenotification</h2>
<!-- backwards compatibility -->
<a id="schemaach_prenotification"></a>
<a id="schema_ach_prenotification"></a>
<a id="tocSach_prenotification"></a>
<a id="tocsach_prenotification"></a>

```json
{
  "account_number": "987654321",
  "addendum": null,
  "company_descriptive_date": null,
  "company_discretionary_data": null,
  "company_entry_description": null,
  "company_name": null,
  "created_at": "2020-01-31T23:59:59Z",
  "credit_debit_indicator": null,
  "effective_date": null,
  "id": "ach_prenotification_ubjf9qqsxl3obbcn1u34",
  "prenotification_return": null,
  "routing_number": "101050001",
  "status": "submitted",
  "type": "ach_prenotification"
}
```

ACH Prenotifications are one way you can verify account and routing numbers by Automated Clearing House (ACH).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_number|string|true|none|The destination account number.|
|addendum|string \| null|true|none|Additional information for the recipient.|
|company_descriptive_date|string \| null|true|none|The description of the date of the notification.|
|company_discretionary_data|string \| null|true|none|Optional data associated with the notification.|
|company_entry_description|string \| null|true|none|The description of the notification.|
|company_name|string \| null|true|none|The name by which you know the company.|
|created_at|string(date-time)|true|none|The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which the prenotification was created.|
|credit_debit_indicator|string \| null|true|none|If the notification is for a future credit or debit.|
|effective_date|string(date-time) \| null|true|none|The effective date in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.|
|id|string|true|none|The ACH Prenotification's identifier.|
|prenotification_return|object \| null|true|none|If your prenotification is returned, this will contain details of the return.|
|routing_number|string|true|none|The American Bankers' Association (ABA) Routing Transit Number (RTN).|
|status|string|true|none|The lifecycle status of the ACH Prenotification.|
|type|string|true|none|A constant representing the object's type. For this resource it will always be `ach_prenotification`.|

#### Enumerated Values

|Property|Value|
|---|---|
|credit_debit_indicator|credit|
|credit_debit_indicator|debit|
|status|pending_submitting|
|status|requires_attention|
|status|returned|
|status|submitted|
|type|ach_prenotification|

<h2 id="tocS_ach_prenotification_list">ach_prenotification_list</h2>
<!-- backwards compatibility -->
<a id="schemaach_prenotification_list"></a>
<a id="schema_ach_prenotification_list"></a>
<a id="tocSach_prenotification_list"></a>
<a id="tocsach_prenotification_list"></a>

```json
{
  "data": [
    {
      "account_number": "987654321",
      "addendum": null,
      "company_descriptive_date": null,
      "company_discretionary_data": null,
      "company_entry_description": null,
      "company_name": null,
      "created_at": "2020-01-31T23:59:59Z",
      "credit_debit_indicator": null,
      "effective_date": null,
      "id": "ach_prenotification_ubjf9qqsxl3obbcn1u34",
      "prenotification_return": null,
      "routing_number": "101050001",
      "status": "submitted",
      "type": "ach_prenotification"
    }
  ],
  "next_cursor": "v57w5d"
}
```

A list of ACH Prenotification objects

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[ach_prenotification](#schemaach_prenotification)]|true|none|The contents of the list.|
|next_cursor|string \| null|true|none|A pointer to a place in the list.|

<h2 id="tocS_ach_transfer">ach_transfer</h2>
<!-- backwards compatibility -->
<a id="schemaach_transfer"></a>
<a id="schema_ach_transfer"></a>
<a id="tocSach_transfer"></a>
<a id="tocsach_transfer"></a>

```json
{
  "account_id": "account_in71c4amph0vgo2qllky",
  "account_number": "987654321",
  "addendum": null,
  "amount": 100,
  "approval": {
    "approved_at": "2020-01-31T23:59:59Z"
  },
  "cancellation": null,
  "company_descriptive_date": null,
  "company_discretionary_data": null,
  "company_entry_description": null,
  "company_name": "National Phonograph Company",
  "created_at": "2020-01-31T23:59:59Z",
  "currency": "USD",
  "external_account_id": "external_account_ukk55lr923a3ac0pp7iv",
  "funding": "checking",
  "id": "ach_transfer_uoxatyh3lt5evrsdvo7q",
  "individual_id": null,
  "individual_name": "Ian Crease",
  "network": "ach",
  "notification_of_change": null,
  "return": null,
  "routing_number": "101050001",
  "standard_entry_class_code": "corporate_credit_or_debit",
  "statement_descriptor": "Statement descriptor",
  "status": "returned",
  "submission": {
    "submitted_at": "2020-01-31T23:59:59Z",
    "trace_number": "058349238292834"
  },
  "template_id": "ach_transfer_template_wofoi8uhkjzi5rubh3kt",
  "transaction_id": "transaction_uyrp7fld2ium70oa7oi",
  "type": "ach_transfer"
}
```

ACH transfers move funds between your Increase account and any other account accessible by the Automated Clearing House (ACH).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|string|true|none|The Account to which the transfer belongs.|
|account_number|string|true|none|The destination account number.|
|addendum|string \| null|true|none|Additional information that will be sent to the recipient.|
|amount|integer|true|none|The transfer amount in USD cents. A positive amount indicates a credit transfer pushing funds to the receiving account. A negative amount indicates a debit transfer pulling funds from the receiving account.|
|approval|object \| null|true|none|If your account requires approvals for transfers and the transfer was approved, this will contain details of the approval.|
|cancellation|object \| null|true|none|If your account requires approvals for transfers and the transfer was not approved, this will contain details of the cancellation.|
|company_descriptive_date|string \| null|true|none|The description of the date of the transfer.|
|company_discretionary_data|string \| null|true|none|The data you chose to associate with the transfer.|
|company_entry_description|string \| null|true|none|The description of the transfer you set to be shown to the recipient.|
|company_name|string \| null|true|none|The name by which the recipient knows you.|
|created_at|string(date-time)|true|none|The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which the transfer was created.|
|currency|string|true|none|The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the transfer's currency. For ACH transfers this is always equal to `usd`.|
|external_account_id|string \| null|true|none|The identifier of the External Account the transfer was made to, if any.|
|funding|string|true|none|The type of the account to which the transfer will be sent.|
|id|string|true|none|The ACH transfer's identifier.|
|individual_id|string \| null|true|none|Your identifer for the transfer recipient.|
|individual_name|string \| null|true|none|The name of the transfer recipient. This value is information and not verified by the recipient's bank.|
|network|string|true|none|The transfer's network.|
|notification_of_change|object \| null|true|none|If the receiving bank accepts the transfer but notifies that future transfers should use different details, this will contain those details.|
|return|object \| null|true|none|If your transfer is returned, this will contain details of the return.|
|routing_number|string|true|none|The American Bankers' Association (ABA) Routing Transit Number (RTN).|
|standard_entry_class_code|string|true|none|The Standard Entry Class (SEC) code to use for the transfer.|
|statement_descriptor|string|true|none|The descriptor that will show on the recipient's bank statement.|
|status|string|true|none|The lifecycle status of the transfer.|
|submission|object \| null|true|none|After the transfer is submitted to FedACH, this will contain supplemental details.|
|template_id|string \| null|true|none|If the transfer was created from a template, this will be the template's ID.|
|transaction_id|string \| null|true|none|The ID for the transaction funding the transfer.|
|type|string|true|none|A constant representing the object's type. For this resource it will always be `ach_transfer`.|

#### Enumerated Values

|Property|Value|
|---|---|
|currency|CAD|
|currency|CHF|
|currency|EUR|
|currency|GBP|
|currency|JPY|
|currency|USD|
|funding|checking|
|funding|savings|
|network|ach|
|standard_entry_class_code|corporate_credit_or_debit|
|standard_entry_class_code|prearranged_payments_and_deposit|
|standard_entry_class_code|internet_initiated|
|status|pending_approval|
|status|canceled|
|status|pending_submission|
|status|submitted|
|status|returned|
|status|requires_attention|
|status|rejected|
|type|ach_transfer|

<h2 id="tocS_ach_transfer_list">ach_transfer_list</h2>
<!-- backwards compatibility -->
<a id="schemaach_transfer_list"></a>
<a id="schema_ach_transfer_list"></a>
<a id="tocSach_transfer_list"></a>
<a id="tocsach_transfer_list"></a>

```json
{
  "data": [
    {
      "account_id": "account_in71c4amph0vgo2qllky",
      "account_number": "987654321",
      "addendum": null,
      "amount": 100,
      "approval": {
        "approved_at": "2020-01-31T23:59:59Z"
      },
      "cancellation": null,
      "company_descriptive_date": null,
      "company_discretionary_data": null,
      "company_entry_description": null,
      "company_name": "National Phonograph Company",
      "created_at": "2020-01-31T23:59:59Z",
      "currency": "USD",
      "external_account_id": "external_account_ukk55lr923a3ac0pp7iv",
      "funding": "checking",
      "id": "ach_transfer_uoxatyh3lt5evrsdvo7q",
      "individual_id": null,
      "individual_name": "Ian Crease",
      "network": "ach",
      "notification_of_change": null,
      "return": null,
      "routing_number": "101050001",
      "standard_entry_class_code": "corporate_credit_or_debit",
      "statement_descriptor": "Statement descriptor",
      "status": "returned",
      "submission": {
        "submitted_at": "2020-01-31T23:59:59Z",
        "trace_number": "058349238292834"
      },
      "template_id": "ach_transfer_template_wofoi8uhkjzi5rubh3kt",
      "transaction_id": "transaction_uyrp7fld2ium70oa7oi",
      "type": "ach_transfer"
    }
  ],
  "next_cursor": "v57w5d"
}
```

A list of ACH Transfer objects

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[ach_transfer](#schemaach_transfer)]|true|none|The contents of the list.|
|next_cursor|string \| null|true|none|A pointer to a place in the list.|

<h2 id="tocS_action_a_real_time_decision_parameters">action_a_real_time_decision_parameters</h2>
<!-- backwards compatibility -->
<a id="schemaaction_a_real_time_decision_parameters"></a>
<a id="schema_action_a_real_time_decision_parameters"></a>
<a id="tocSaction_a_real_time_decision_parameters"></a>
<a id="tocsaction_a_real_time_decision_parameters"></a>

```json
{
  "card_authorization": {
    "decision": "approve"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|card_authorization|object|false|none|If the Real-Time Decision relates to a card authorization attempt, this object contains your response to the authorization.|
|digital_wallet_authentication|object|false|none|If the Real-Time Decision relates to a digital wallet authentication attempt, this object contains your response to the authentication.|
|digital_wallet_token|object|false|none|If the Real-Time Decision relates to a digital wallet token provisioning attempt, this object contains your response to the attempt.|

<h2 id="tocS_card">card</h2>
<!-- backwards compatibility -->
<a id="schemacard"></a>
<a id="schema_card"></a>
<a id="tocScard"></a>
<a id="tocscard"></a>

```json
{
  "account_id": "account_in71c4amph0vgo2qllky",
  "billing_address": {
    "city": "New York",
    "line1": "33 Liberty Street",
    "line2": null,
    "postal_code": "10045",
    "state": "NY"
  },
  "created_at": "2020-01-31T23:59:59Z",
  "description": "Office Expenses",
  "digital_wallet": {
    "card_profile_id": "card_profile_cox5y73lob2eqly18piy",
    "email": "user@example.com",
    "phone": "+15551234567"
  },
  "expiration_month": 11,
  "expiration_year": 2028,
  "id": "card_oubs0hwk5rn6knuecxg2",
  "last4": "4242",
  "replacement": {
    "replaced_by_card_id": null,
    "replaced_card_id": null
  },
  "status": "active",
  "type": "card"
}
```

Cards are commercial credit cards. They'll immediately work for online purchases after you create them. All cards maintain a credit limit of 100% of the Account’s available balance at the time of transaction. Funds are deducted from the Account upon transaction settlement.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|string|true|none|The identifier for the account this card belongs to.|
|billing_address|object|true|none|The Card's billing address.|
|created_at|string(date-time)|true|none|The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which the Card was created.|
|description|string \| null|true|none|The card's description for display purposes.|
|digital_wallet|object \| null|true|none|The contact information used in the two-factor steps for digital wallet card creation. At least one field must be present to complete the digital wallet steps.|
|expiration_month|integer|true|none|The month the card expires in M format (e.g., August is 8).|
|expiration_year|integer|true|none|The year the card expires in YYYY format (e.g., 2025).|
|id|string|true|none|The card identifier.|
|last4|string|true|none|The last 4 digits of the Card's Primary Account Number.|
|status|string|true|none|This indicates if payments can be made with the card.|
|type|string|true|none|A constant representing the object's type. For this resource it will always be `card`.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|active|
|status|disabled|
|status|canceled|
|type|card|

<h2 id="tocS_card_details">card_details</h2>
<!-- backwards compatibility -->
<a id="schemacard_details"></a>
<a id="schema_card_details"></a>
<a id="tocScard_details"></a>
<a id="tocscard_details"></a>

```json
{
  "card_id": "card_oubs0hwk5rn6knuecxg2",
  "expiration_month": 7,
  "expiration_year": 2025,
  "primary_account_number": "4242424242424242",
  "type": "card_details",
  "verification_code": "123"
}
```

An object containing the sensitive details (card number, cvc, etc) for a Card.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|card_id|string|true|none|The identifier for the Card for which sensitive details have been returned.|
|expiration_month|integer|true|none|The month the card expires in M format (e.g., August is 8).|
|expiration_year|integer|true|none|The year the card expires in YYYY format (e.g., 2025).|
|primary_account_number|string|true|none|The card number.|
|type|string|true|none|A constant representing the object's type. For this resource it will always be `card_details`.|
|verification_code|string|true|none|The three-digit verification code for the card. It's also known as the Card Verification Code (CVC), the Card Verification Value (CVV), or the Card Identification (CID).|

#### Enumerated Values

|Property|Value|
|---|---|
|type|card_details|

<h2 id="tocS_card_dispute">card_dispute</h2>
<!-- backwards compatibility -->
<a id="schemacard_dispute"></a>
<a id="schema_card_dispute"></a>
<a id="tocScard_dispute"></a>
<a id="tocscard_dispute"></a>

```json
{
  "acceptance": null,
  "created_at": "2020-01-31T23:59:59Z",
  "disputed_transaction_id": "transaction_uyrp7fld2ium70oa7oi",
  "explanation": "Unauthorized recurring purchase",
  "id": "card_dispute_h9sc95nbl1cgltpp7men",
  "rejection": null,
  "status": "pending_reviewing",
  "type": "card_dispute"
}
```

If unauthorized activity occurs on a card, you can create a Card Dispute and we'll return the funds if appropriate.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acceptance|object \| null|true|none|If the Card Dispute's status is `accepted`, this will contain details of the successful dispute.|
|created_at|string(date-time)|true|none|The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which the Card Dispute was created.|
|disputed_transaction_id|string|true|none|The identifier of the Transaction that was disputed.|
|explanation|string|true|none|Why you disputed the Transaction in question.|
|id|string|true|none|The Card Dispute identifier.|
|rejection|object \| null|true|none|If the Card Dispute's status is `rejected`, this will contain details of the unsuccessful dispute.|
|status|string|true|none|The results of the Dispute investigation.|
|type|string|true|none|A constant representing the object's type. For this resource it will always be `card_dispute`.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|pending_reviewing|
|status|accepted|
|status|rejected|
|type|card_dispute|

<h2 id="tocS_card_dispute_list">card_dispute_list</h2>
<!-- backwards compatibility -->
<a id="schemacard_dispute_list"></a>
<a id="schema_card_dispute_list"></a>
<a id="tocScard_dispute_list"></a>
<a id="tocscard_dispute_list"></a>

```json
{
  "data": [
    {
      "acceptance": null,
      "created_at": "2020-01-31T23:59:59Z",
      "disputed_transaction_id": "transaction_uyrp7fld2ium70oa7oi",
      "explanation": "Unauthorized recurring purchase",
      "id": "card_dispute_h9sc95nbl1cgltpp7men",
      "rejection": null,
      "status": "pending_reviewing",
      "type": "card_dispute"
    }
  ],
  "next_cursor": "v57w5d"
}
```

A list of Card Dispute objects

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[card_dispute](#schemacard_dispute)]|true|none|The contents of the list.|
|next_cursor|string \| null|true|none|A pointer to a place in the list.|

<h2 id="tocS_card_list">card_list</h2>
<!-- backwards compatibility -->
<a id="schemacard_list"></a>
<a id="schema_card_list"></a>
<a id="tocScard_list"></a>
<a id="tocscard_list"></a>

```json
{
  "data": [
    {
      "account_id": "account_in71c4amph0vgo2qllky",
      "billing_address": {
        "city": "New York",
        "line1": "33 Liberty Street",
        "line2": null,
        "postal_code": "10045",
        "state": "NY"
      },
      "created_at": "2020-01-31T23:59:59Z",
      "description": "Office Expenses",
      "digital_wallet": {
        "card_profile_id": "card_profile_cox5y73lob2eqly18piy",
        "email": "user@example.com",
        "phone": "+15551234567"
      },
      "expiration_month": 11,
      "expiration_year": 2028,
      "id": "card_oubs0hwk5rn6knuecxg2",
      "last4": "4242",
      "replacement": {
        "replaced_by_card_id": null,
        "replaced_card_id": null
      },
      "status": "active",
      "type": "card"
    }
  ],
  "next_cursor": "v57w5d"
}
```

A list of Card objects

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[card](#schemacard)]|true|none|The contents of the list.|
|next_cursor|string \| null|true|none|A pointer to a place in the list.|

<h2 id="tocS_card_profile">card_profile</h2>
<!-- backwards compatibility -->
<a id="schemacard_profile"></a>
<a id="schema_card_profile"></a>
<a id="tocScard_profile"></a>
<a id="tocscard_profile"></a>

```json
{
  "created_at": "2020-01-31T23:59:59Z",
  "description": "My Card Profile",
  "digital_wallets": {
    "app_icon_file_id": "file_8zxqkwlh43wo144u8yec",
    "background_image_file_id": "file_1ai913suu1zfn1pdetru",
    "card_description": "MyBank Signature Card",
    "contact_email": "user@example.com",
    "contact_phone": "+18885551212",
    "contact_website": "https://example.com",
    "issuer_name": "MyBank",
    "text_color": {
      "blue": 59,
      "green": 43,
      "red": 26
    }
  },
  "id": "card_profile_cox5y73lob2eqly18piy",
  "status": "active",
  "type": "card_profile"
}
```

This contains artwork and metadata relating to a Card's appearance in digital wallet apps like Apple Pay and Google Pay. For more information, see our guide on [digital card artwork](https://increase.com/documentation/card-art)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_at|string(date-time)|true|none|The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which the Card Dispute was created.|
|description|string|true|none|A description you can use to identify the Card Profile.|
|digital_wallets|object|true|none|How Cards should appear in digital wallets such as Apple Pay. Different wallets will use these values to render card artwork appropriately for their app.|
|id|string|true|none|The Card Profile identifier.|
|status|string|true|none|The status of the Card Profile.|
|type|string|true|none|A constant representing the object's type. For this resource it will always be `card_profile`.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|pending|
|status|rejected|
|status|active|
|status|archived|
|type|card_profile|

<h2 id="tocS_card_profile_list">card_profile_list</h2>
<!-- backwards compatibility -->
<a id="schemacard_profile_list"></a>
<a id="schema_card_profile_list"></a>
<a id="tocScard_profile_list"></a>
<a id="tocscard_profile_list"></a>

```json
{
  "data": [
    {
      "created_at": "2020-01-31T23:59:59Z",
      "description": "My Card Profile",
      "digital_wallets": {
        "app_icon_file_id": "file_8zxqkwlh43wo144u8yec",
        "background_image_file_id": "file_1ai913suu1zfn1pdetru",
        "card_description": "MyBank Signature Card",
        "contact_email": "user@example.com",
        "contact_phone": "+18885551212",
        "contact_website": "https://example.com",
        "issuer_name": "MyBank",
        "text_color": {
          "blue": 59,
          "green": 43,
          "red": 26
        }
      },
      "id": "card_profile_cox5y73lob2eqly18piy",
      "status": "active",
      "type": "card_profile"
    }
  ],
  "next_cursor": "v57w5d"
}
```

A list of Card Profile objects

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[card_profile](#schemacard_profile)]|true|none|The contents of the list.|
|next_cursor|string \| null|true|none|A pointer to a place in the list.|

<h2 id="tocS_check_deposit">check_deposit</h2>
<!-- backwards compatibility -->
<a id="schemacheck_deposit"></a>
<a id="schema_check_deposit"></a>
<a id="tocScheck_deposit"></a>
<a id="tocscheck_deposit"></a>

```json
{
  "account_id": "account_in71c4amph0vgo2qllky",
  "amount": 1000,
  "back_image_file_id": null,
  "created_at": "2020-01-31T23:59:59Z",
  "currency": "USD",
  "deposit_acceptance": null,
  "deposit_rejection": null,
  "deposit_return": null,
  "front_image_file_id": "file_makxrc67oh9l6sg7w9yc",
  "id": "check_deposit_f06n9gpg7sxn8t19lfc1",
  "status": "submitted",
  "transaction_id": "transaction_uyrp7fld2ium70oa7oi",
  "type": "check_deposit"
}
```

Check Deposits allow you to deposit images of paper checks into your account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|string|true|none|The Account the check was deposited into.|
|amount|integer|true|none|The deposited amount in the minor unit of the destination account currency. For dollars, for example, this is cents.|
|back_image_file_id|string \| null|true|none|The ID for the File containing the image of the back of the check.|
|created_at|string(date-time)|true|none|The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which the transfer was created.|
|currency|string|true|none|The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the deposit.|
|deposit_acceptance|object \| null|true|none|If your deposit is successfully parsed and accepted by Increase, this will contain details of the parsed check.|
|deposit_rejection|object \| null|true|none|If your deposit is rejected by Increase, this will contain details as to why it was rejected.|
|deposit_return|object \| null|true|none|If your deposit is returned, this will contain details as to why it was returned.|
|front_image_file_id|string|true|none|The ID for the File containing the image of the front of the check.|
|id|string|true|none|The deposit's identifier.|
|status|string|true|none|The status of the Check Deposit.|
|transaction_id|string \| null|true|none|The ID for the Transaction created by the deposit.|
|type|string|true|none|A constant representing the object's type. For this resource it will always be `check_deposit`.|

#### Enumerated Values

|Property|Value|
|---|---|
|currency|CAD|
|currency|CHF|
|currency|EUR|
|currency|GBP|
|currency|JPY|
|currency|USD|
|status|pending|
|status|submitted|
|status|rejected|
|status|returned|
|type|check_deposit|

<h2 id="tocS_check_deposit_list">check_deposit_list</h2>
<!-- backwards compatibility -->
<a id="schemacheck_deposit_list"></a>
<a id="schema_check_deposit_list"></a>
<a id="tocScheck_deposit_list"></a>
<a id="tocscheck_deposit_list"></a>

```json
{
  "data": [
    {
      "account_id": "account_in71c4amph0vgo2qllky",
      "amount": 1000,
      "back_image_file_id": null,
      "created_at": "2020-01-31T23:59:59Z",
      "currency": "USD",
      "deposit_acceptance": null,
      "deposit_rejection": null,
      "deposit_return": null,
      "front_image_file_id": "file_makxrc67oh9l6sg7w9yc",
      "id": "check_deposit_f06n9gpg7sxn8t19lfc1",
      "status": "submitted",
      "transaction_id": "transaction_uyrp7fld2ium70oa7oi",
      "type": "check_deposit"
    }
  ],
  "next_cursor": "v57w5d"
}
```

A list of Check Deposit objects

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[check_deposit](#schemacheck_deposit)]|true|none|The contents of the list.|
|next_cursor|string \| null|true|none|A pointer to a place in the list.|

<h2 id="tocS_check_transfer">check_transfer</h2>
<!-- backwards compatibility -->
<a id="schemacheck_transfer"></a>
<a id="schema_check_transfer"></a>
<a id="tocScheck_transfer"></a>
<a id="tocscheck_transfer"></a>

```json
{
  "account_id": "account_in71c4amph0vgo2qllky",
  "address_city": "New York",
  "address_line1": "33 Liberty Street",
  "address_line2": null,
  "address_state": "NY",
  "address_zip": "10045",
  "amount": 1000,
  "created_at": "2020-01-31T23:59:59Z",
  "currency": "USD",
  "deposit": null,
  "id": "check_transfer_30b43acfu9vw8fyc4f5",
  "mailed_at": "2020-01-31T23:59:59Z",
  "message": "Invoice 29582",
  "note": null,
  "recipient_name": "Ian Crease",
  "return_address": null,
  "status": "mailed",
  "stop_payment_request": null,
  "submission": {
    "check_number": "130670"
  },
  "submitted_at": "2020-01-31T23:59:59Z",
  "template_id": "check_transfer_template_tr96ajellz6awlki022o",
  "transaction_id": "transaction_uyrp7fld2ium70oa7oi",
  "type": "check_transfer"
}
```

Check Transfers move funds from your Increase account by mailing a physical check.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|string|true|none|The identifier of the Account from which funds will be transferred.|
|address_city|string|true|none|The city of the check's destination.|
|address_line1|string|true|none|The street address of the check's destination.|
|address_line2|string \| null|true|none|The second line of the address of the check's destination.|
|address_state|string|true|none|The state of the check's destination.|
|address_zip|string|true|none|The postal code of the check's destination.|
|amount|integer|true|none|The transfer amount in USD cents.|
|created_at|string(date-time)|true|none|The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which the transfer was created.|
|currency|string|true|none|The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the check's currency.|
|deposit|object \| null|true|none|After a check transfer is deposited, this will contain supplemental details.|
|id|string|true|none|The Check transfer's identifier.|
|mailed_at|string(date-time) \| null|true|none|The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which the check was mailed.|
|message|string|true|none|The descriptor that will be printed on the memo field on the check.|
|note|string \| null|true|none|The descriptor that will be printed on the letter included with the check.|
|recipient_name|string|true|none|The name that will be printed on the check.|
|return_address|object \| null|true|none|The return address to be printed on the check.|
|status|string|true|none|The lifecycle status of the transfer.|
|stop_payment_request|object \| null|true|none|After a stop-payment is requested on the check, this will contain supplemental details.|
|submission|object \| null|true|none|After the transfer is submitted, this will contain supplemental details.|
|submitted_at|string(date-time) \| null|true|none|The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which the check was submitted.|
|template_id|string \| null|true|none|If the transfer was created from a template, this will be the template's ID.|
|transaction_id|string \| null|true|none|The ID for the transaction caused by the transfer.|
|type|string|true|none|A constant representing the object's type. For this resource it will always be `check_transfer`.|

#### Enumerated Values

|Property|Value|
|---|---|
|currency|CAD|
|currency|CHF|
|currency|EUR|
|currency|GBP|
|currency|JPY|
|currency|USD|
|status|pending_approval|
|status|pending_submission|
|status|submitting|
|status|submitted|
|status|pending_mailing|
|status|mailed|
|status|canceled|
|status|deposited|
|status|stopped|
|status|returned|
|status|rejected|
|status|requires_attention|
|type|check_transfer|

<h2 id="tocS_check_transfer_list">check_transfer_list</h2>
<!-- backwards compatibility -->
<a id="schemacheck_transfer_list"></a>
<a id="schema_check_transfer_list"></a>
<a id="tocScheck_transfer_list"></a>
<a id="tocscheck_transfer_list"></a>

```json
{
  "data": [
    {
      "account_id": "account_in71c4amph0vgo2qllky",
      "address_city": "New York",
      "address_line1": "33 Liberty Street",
      "address_line2": null,
      "address_state": "NY",
      "address_zip": "10045",
      "amount": 1000,
      "created_at": "2020-01-31T23:59:59Z",
      "currency": "USD",
      "deposit": null,
      "id": "check_transfer_30b43acfu9vw8fyc4f5",
      "mailed_at": "2020-01-31T23:59:59Z",
      "message": "Invoice 29582",
      "note": null,
      "recipient_name": "Ian Crease",
      "return_address": null,
      "status": "mailed",
      "stop_payment_request": null,
      "submission": {
        "check_number": "130670"
      },
      "submitted_at": "2020-01-31T23:59:59Z",
      "template_id": "check_transfer_template_tr96ajellz6awlki022o",
      "transaction_id": "transaction_uyrp7fld2ium70oa7oi",
      "type": "check_transfer"
    }
  ],
  "next_cursor": "v57w5d"
}
```

A list of Check Transfer objects

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[check_transfer](#schemacheck_transfer)]|true|none|The contents of the list.|
|next_cursor|string \| null|true|none|A pointer to a place in the list.|

<h2 id="tocS_create_a_card_dispute_parameters">create_a_card_dispute_parameters</h2>
<!-- backwards compatibility -->
<a id="schemacreate_a_card_dispute_parameters"></a>
<a id="schema_create_a_card_dispute_parameters"></a>
<a id="tocScreate_a_card_dispute_parameters"></a>
<a id="tocscreate_a_card_dispute_parameters"></a>

```json
{
  "disputed_transaction_id": "transaction_uyrp7fld2ium70oa7oi",
  "explanation": "Unauthorized recurring transaction."
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|disputed_transaction_id|string|true|none|The Transaction you wish to dispute. This Transaction must have a `source_type` of `card_settlement`.|
|explanation|string|true|none|Why you are disputing this Transaction.|

<h2 id="tocS_create_a_card_parameters">create_a_card_parameters</h2>
<!-- backwards compatibility -->
<a id="schemacreate_a_card_parameters"></a>
<a id="schema_create_a_card_parameters"></a>
<a id="tocScreate_a_card_parameters"></a>
<a id="tocscreate_a_card_parameters"></a>

```json
{
  "account_id": "account_in71c4amph0vgo2qllky",
  "description": "Card for Ian Crease"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|string|true|none|The Account the card should belong to.|
|billing_address|object|false|none|The card's billing address.|
|description|string|false|none|The description you choose to give the card.|
|digital_wallet|object|false|none|The contact information used in the two-factor steps for digital wallet card creation. At least one field must be present to complete the digital wallet steps.|

<h2 id="tocS_create_a_card_profile_parameters">create_a_card_profile_parameters</h2>
<!-- backwards compatibility -->
<a id="schemacreate_a_card_profile_parameters"></a>
<a id="schema_create_a_card_profile_parameters"></a>
<a id="tocScreate_a_card_profile_parameters"></a>
<a id="tocscreate_a_card_profile_parameters"></a>

```json
{
  "description": "My Card Profile",
  "digital_wallets": {
    "app_icon_file_id": "file_8zxqkwlh43wo144u8yec",
    "background_image_file_id": "file_1ai913suu1zfn1pdetru",
    "card_description": "MyBank Signature Card",
    "contact_email": "user@example.com",
    "contact_phone": "+18885551212",
    "contact_website": "https://example.com",
    "issuer_name": "MyBank",
    "text_color": {
      "blue": 59,
      "green": 43,
      "red": 26
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|true|none|A description you can use to identify the Card Profile.|
|digital_wallets|object|true|none|How Cards should appear in digital wallets such as Apple Pay. Different wallets will use these values to render card artwork appropriately for their app.|

<h2 id="tocS_create_a_check_deposit_parameters">create_a_check_deposit_parameters</h2>
<!-- backwards compatibility -->
<a id="schemacreate_a_check_deposit_parameters"></a>
<a id="schema_create_a_check_deposit_parameters"></a>
<a id="tocScreate_a_check_deposit_parameters"></a>
<a id="tocscreate_a_check_deposit_parameters"></a>

```json
{
  "account_id": "account_in71c4amph0vgo2qllky",
  "amount": 1000,
  "back_image_file_id": "file_26khfk98mzfz90a11oqx",
  "currency": "USD",
  "front_image_file_id": "file_hkv175ovmc2tb2v2zbrm"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|string|true|none|The identifier for the Account to deposit the check in.|
|amount|integer|true|none|The deposit amount in the minor unit of the account currency. For dollars, for example, this is cents.|
|back_image_file_id|string|true|none|The File containing the check's back image.|
|currency|string|true|none|The currency to use for the deposit.|
|front_image_file_id|string|true|none|The File containing the check's front image.|

<h2 id="tocS_create_a_check_transfer_parameters">create_a_check_transfer_parameters</h2>
<!-- backwards compatibility -->
<a id="schemacreate_a_check_transfer_parameters"></a>
<a id="schema_create_a_check_transfer_parameters"></a>
<a id="tocScreate_a_check_transfer_parameters"></a>
<a id="tocscreate_a_check_transfer_parameters"></a>

```json
{
  "account_id": "account_in71c4amph0vgo2qllky",
  "address_city": "New York",
  "address_line1": "33 Liberty Street",
  "address_state": "NY",
  "address_zip": "10045",
  "amount": 1000,
  "currency": "USD",
  "message": "Check payment",
  "recipient_name": "Ian Crease"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|string|true|none|The identifier for the account that will send the transfer.|
|address_city|string|true|none|The city of the check's destination.|
|address_line1|string|true|none|The street address of the check's destination.|
|address_line2|string|false|none|The second line of the address of the check's destination.|
|address_state|string|true|none|The state of the check's destination.|
|address_zip|string|true|none|The postal code of the check's destination.|
|amount|integer|true|none|The transfer amount in cents.|
|message|string|true|none|The descriptor that will be printed on the memo field on the check.|
|note|string|false|none|The descriptor that will be printed on the letter included with the check.|
|recipient_name|string|true|none|The name that will be printed on the check.|
|require_approval|boolean|false|none|Whether the transfer requires explicit approval via the dashboard or API.|
|return_address|object|false|none|The return address to be printed on the check. If omitted this will default to the address of the Entity of the Account used to make the Check Transfer.|

<h2 id="tocS_create_a_file_parameters">create_a_file_parameters</h2>
<!-- backwards compatibility -->
<a id="schemacreate_a_file_parameters"></a>
<a id="schema_create_a_file_parameters"></a>
<a id="tocScreate_a_file_parameters"></a>
<a id="tocscreate_a_file_parameters"></a>

```json
{
  "file": "\"@tax_form.pdf\"",
  "purpose": "check_image_front"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|The description you choose to give the File.|
|file|string(binary)|true|none|The file contents. This should follow the specifications of [RFC 7578](https://datatracker.ietf.org/doc/html/rfc7578) which defines file transfers for the multipart/form-data protocol.|
|purpose|string|true|none|What the File will be used for in Increase's systems.|

#### Enumerated Values

|Property|Value|
|---|---|
|purpose|check_image_front|
|purpose|check_image_back|
|purpose|form_ss_4|
|purpose|identity_document|
|purpose|other|
|purpose|trust_formation_document|
|purpose|digital_wallet_artwork|
|purpose|digital_wallet_app_icon|
|purpose|entity_supplemental_document|

<h2 id="tocS_create_a_limit_parameters">create_a_limit_parameters</h2>
<!-- backwards compatibility -->
<a id="schemacreate_a_limit_parameters"></a>
<a id="schema_create_a_limit_parameters"></a>
<a id="tocScreate_a_limit_parameters"></a>
<a id="tocscreate_a_limit_parameters"></a>

```json
{
  "interval": "month",
  "metric": "volume",
  "model_id": "account_in71c4amph0vgo2qllky",
  "value": 1234
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|interval|string|false|none|The interval for the metric. Required if `metric` is `count` or `volume`.|
|metric|string|true|none|The metric for the limit.|
|model_id|string|true|none|The identifier of the Account or Account Number you wish to associate the limit with.|
|value|integer|true|none|The value to test the limit against.|

#### Enumerated Values

|Property|Value|
|---|---|
|interval|transaction|
|interval|day|
|interval|week|
|interval|month|
|interval|year|
|interval|all_time|
|metric|count|
|metric|volume|

<h2 id="tocS_create_a_supplemental_document_for_an_entity_parameters">create_a_supplemental_document_for_an_entity_parameters</h2>
<!-- backwards compatibility -->
<a id="schemacreate_a_supplemental_document_for_an_entity_parameters"></a>
<a id="schema_create_a_supplemental_document_for_an_entity_parameters"></a>
<a id="tocScreate_a_supplemental_document_for_an_entity_parameters"></a>
<a id="tocscreate_a_supplemental_document_for_an_entity_parameters"></a>

```json
{
  "file_id": "file_makxrc67oh9l6sg7w9yc"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|file_id|string|true|none|The identifier of the File containing the document.|

<h2 id="tocS_create_a_wire_drawdown_request_parameters">create_a_wire_drawdown_request_parameters</h2>
<!-- backwards compatibility -->
<a id="schemacreate_a_wire_drawdown_request_parameters"></a>
<a id="schema_create_a_wire_drawdown_request_parameters"></a>
<a id="tocScreate_a_wire_drawdown_request_parameters"></a>
<a id="tocscreate_a_wire_drawdown_request_parameters"></a>

```json
{
  "account_number_id": "account_number_v18nkfqm6afpsrvy82b2",
  "amount": 10000,
  "message_to_recipient": "Invoice 29582",
  "recipient_account_number": "987654321",
  "recipient_address_line1": "33 Liberty Street",
  "recipient_address_line2": "New York, NY, 10045",
  "recipient_name": "Ian Crease",
  "recipient_routing_number": "101050001"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_number_id|string|true|none|The Account Number to which the recipient should send funds.|
|amount|integer|true|none|The amount requested from the recipient, in cents.|
|message_to_recipient|string|true|none|A message the recipient will see as part of the request.|
|recipient_account_number|string|true|none|The drawdown request's recipient's account number.|
|recipient_address_line1|string|false|none|Line 1 of the drawdown request's recipient's address.|
|recipient_address_line2|string|false|none|Line 2 of the drawdown request's recipient's address.|
|recipient_address_line3|string|false|none|Line 3 of the drawdown request's recipient's address.|
|recipient_name|string|true|none|The drawdown request's recipient's name.|
|recipient_routing_number|string|true|none|The drawdown request's recipient's routing number.|

<h2 id="tocS_create_a_wire_transfer_parameters">create_a_wire_transfer_parameters</h2>
<!-- backwards compatibility -->
<a id="schemacreate_a_wire_transfer_parameters"></a>
<a id="schema_create_a_wire_transfer_parameters"></a>
<a id="tocScreate_a_wire_transfer_parameters"></a>
<a id="tocscreate_a_wire_transfer_parameters"></a>

```json
{
  "account_id": "account_in71c4amph0vgo2qllky",
  "account_number": "987654321",
  "amount": 100,
  "beneficiary_address_line1": "33 Liberty Street",
  "beneficiary_address_line2": "New York",
  "beneficiary_address_line3": "NY 10045",
  "beneficiary_name": "Ian Crease",
  "message_to_recipient": "New account transfer",
  "routing_number": "101050001"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|string|true|none|The identifier for the account that will send the transfer.|
|account_number|string|false|none|The account number for the destination account.|
|amount|integer|true|none|The transfer amount in cents.|
|beneficiary_address_line1|string|false|none|The beneficiary's address line 1.|
|beneficiary_address_line2|string|false|none|The beneficiary's address line 2.|
|beneficiary_address_line3|string|false|none|The beneficiary's address line 3.|
|beneficiary_name|string|true|none|The beneficiary's name.|
|external_account_id|string|false|none|The ID of an External Account to initiate a transfer to. If this parameter is provided, `account_number` and `routing_number` must be absent.|
|message_to_recipient|string|true|none|The message that will show on the recipient's bank statement.|
|require_approval|boolean|false|none|Whether the transfer requires explicit approval via the dashboard or API.|
|routing_number|string|false|none|The American Bankers' Association (ABA) Routing Transit Number (RTN) for the destination account.|

<h2 id="tocS_create_an_account_number_parameters">create_an_account_number_parameters</h2>
<!-- backwards compatibility -->
<a id="schemacreate_an_account_number_parameters"></a>
<a id="schema_create_an_account_number_parameters"></a>
<a id="tocScreate_an_account_number_parameters"></a>
<a id="tocscreate_an_account_number_parameters"></a>

```json
{
  "account_id": "account_in71c4amph0vgo2qllky",
  "name": "Rent payments"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|string|true|none|The Account the Account Number should belong to.|
|name|string|true|none|The name you choose for the Account Number.|

<h2 id="tocS_create_an_account_parameters">create_an_account_parameters</h2>
<!-- backwards compatibility -->
<a id="schemacreate_an_account_parameters"></a>
<a id="schema_create_an_account_parameters"></a>
<a id="tocScreate_an_account_parameters"></a>
<a id="tocscreate_an_account_parameters"></a>

```json
{
  "name": "New Account!"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entity_id|string|false|none|The identifier for the Entity that will own the Account.|
|informational_entity_id|string|false|none|The identifier of an Entity that, while not owning the Account, is associated with its activity. Its relationship to your group must be `informational`.|
|name|string|true|none|The name you choose for the Account.|

<h2 id="tocS_create_an_account_transfer_parameters">create_an_account_transfer_parameters</h2>
<!-- backwards compatibility -->
<a id="schemacreate_an_account_transfer_parameters"></a>
<a id="schema_create_an_account_transfer_parameters"></a>
<a id="tocScreate_an_account_transfer_parameters"></a>
<a id="tocscreate_an_account_transfer_parameters"></a>

```json
{
  "account_id": "account_in71c4amph0vgo2qllky",
  "amount": 100,
  "description": "Creating liquidity",
  "destination_account_id": "account_uf16sut2ct5bevmq3eh"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|string|true|none|The identifier for the account that will send the transfer.|
|amount|integer|true|none|The transfer amount in the minor unit of the account currency. For dollars, for example, this is cents.|
|description|string|true|none|The description you choose to give the transfer.|
|destination_account_id|string|true|none|The identifier for the account that will receive the transfer.|
|require_approval|boolean|false|none|Whether the transfer requires explicit approval via the dashboard or API.|

<h2 id="tocS_create_an_ach_prenotification_parameters">create_an_ach_prenotification_parameters</h2>
<!-- backwards compatibility -->
<a id="schemacreate_an_ach_prenotification_parameters"></a>
<a id="schema_create_an_ach_prenotification_parameters"></a>
<a id="tocScreate_an_ach_prenotification_parameters"></a>
<a id="tocscreate_an_ach_prenotification_parameters"></a>

```json
{
  "account_number": "987654321",
  "routing_number": "101050001"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_number|string|true|none|The account number for the destination account.|
|addendum|string|false|none|Additional information that will be sent to the recipient.|
|company_descriptive_date|string|false|none|The description of the date of the transfer.|
|company_discretionary_data|string|false|none|The data you choose to associate with the transfer.|
|company_entry_description|string|false|none|The description of the transfer you wish to be shown to the recipient.|
|company_name|string|false|none|The name by which the recipient knows you.|
|credit_debit_indicator|string|false|none|Whether the Prenotification is for a future debit or credit.|
|effective_date|string(date)|false|none|The transfer effective date in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.|
|individual_id|string|false|none|Your identifer for the transfer recipient.|
|individual_name|string|false|none|The name of the transfer recipient. This value is information and not verified by the recipient's bank.|
|routing_number|string|true|none|The American Bankers' Association (ABA) Routing Transit Number (RTN) for the destination account.|
|standard_entry_class_code|string|false|none|The Standard Entry Class (SEC) code to use for the ACH Prenotification.|

#### Enumerated Values

|Property|Value|
|---|---|
|credit_debit_indicator|credit|
|credit_debit_indicator|debit|
|standard_entry_class_code|corporate_credit_or_debit|
|standard_entry_class_code|prearranged_payments_and_deposit|
|standard_entry_class_code|internet_initiated|

<h2 id="tocS_create_an_ach_return_parameters">create_an_ach_return_parameters</h2>
<!-- backwards compatibility -->
<a id="schemacreate_an_ach_return_parameters"></a>
<a id="schema_create_an_ach_return_parameters"></a>
<a id="tocScreate_an_ach_return_parameters"></a>
<a id="tocscreate_an_ach_return_parameters"></a>

```json
{
  "reason": "payment_stopped",
  "transaction_id": "transaction_uyrp7fld2ium70oa7oi"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reason|string|true|none|The reason why this transfer will be returned. The most usual return codes are `payment_stopped` for debits and `credit_entry_refused_by_receiver` for credits.|
|transaction_id|string|true|none|The transaction identifier of the Inbound ACH Transfer to return to the originating financial institution.|

#### Enumerated Values

|Property|Value|
|---|---|
|reason|authorization_revoked_by_customer|
|reason|payment_stopped|
|reason|customer_advised_unauthorized_improper_ineligible_or_incomplete|
|reason|representative_payee_deceased_or_unable_to_continue_in_that_capacity|
|reason|beneficiary_or_account_holder_deceased|
|reason|credit_entry_refused_by_receiver|
|reason|duplicate_entry|
|reason|corporate_customer_advised_not_authorized|

<h2 id="tocS_create_an_ach_transfer_parameters">create_an_ach_transfer_parameters</h2>
<!-- backwards compatibility -->
<a id="schemacreate_an_ach_transfer_parameters"></a>
<a id="schema_create_an_ach_transfer_parameters"></a>
<a id="tocScreate_an_ach_transfer_parameters"></a>
<a id="tocscreate_an_ach_transfer_parameters"></a>

```json
{
  "account_id": "account_in71c4amph0vgo2qllky",
  "account_number": "987654321",
  "amount": 100,
  "routing_number": "101050001",
  "statement_descriptor": "New ACH transfer"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|string|true|none|The Increase identifier for the account that will send the transfer.|
|account_number|string|false|none|The account number for the destination account.|
|addendum|string|false|none|Additional information that will be sent to the recipient. This is included in the transfer data sent to the receiving bank.|
|amount|integer|true|none|The transfer amount in cents. A positive amount originates a credit transfer pushing funds to the receiving account. A negative amount originates a debit transfer pulling funds from the receiving account.|
|company_descriptive_date|string|false|none|The description of the date of the transfer, usually in the format `YYYYMMDD`. This is included in the transfer data sent to the receiving bank.|
|company_discretionary_data|string|false|none|The data you choose to associate with the transfer. This is included in the transfer data sent to the receiving bank.|
|company_entry_description|string|false|none|A description of the transfer. This is included in the transfer data sent to the receiving bank.|
|company_name|string|false|none|The name by which the recipient knows you. This is included in the transfer data sent to the receiving bank.|
|effective_date|string(date)|false|none|The transfer effective date in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.|
|external_account_id|string|false|none|The ID of an External Account to initiate a transfer to. If this parameter is provided, `account_number`, `routing_number`, and `funding` must be absent.|
|funding|string|false|none|The type of the account to which the transfer will be sent.|
|individual_id|string|false|none|Your identifer for the transfer recipient.|
|individual_name|string|false|none|The name of the transfer recipient. This value is informational and not verified by the recipient's bank.|
|require_approval|boolean|false|none|Whether the transfer requires explicit approval via the dashboard or API.|
|routing_number|string|false|none|The American Bankers' Association (ABA) Routing Transit Number (RTN) for the destination account.|
|standard_entry_class_code|string|false|none|The Standard Entry Class (SEC) code to use for the transfer.|
|statement_descriptor|string|true|none|A description you choose to give the transfer. This will be saved with the transfer details, displayed in the dashboard, and returned by the API. If `individual_name` and `company_name` are not explicitly set by this API, the `statement_descriptor` will be sent in those fields to the receiving bank to help the customer recognize the transfer. You are highly encouraged to pass `individual_name` and `company_name` instead of relying on this fallback.|

#### Enumerated Values

|Property|Value|
|---|---|
|funding|checking|
|funding|savings|
|standard_entry_class_code|corporate_credit_or_debit|
|standard_entry_class_code|prearranged_payments_and_deposit|
|standard_entry_class_code|internet_initiated|

<h2 id="tocS_create_an_entity_parameters">create_an_entity_parameters</h2>
<!-- backwards compatibility -->
<a id="schemacreate_an_entity_parameters"></a>
<a id="schema_create_an_entity_parameters"></a>
<a id="tocScreate_an_entity_parameters"></a>
<a id="tocscreate_an_entity_parameters"></a>

```json
{
  "corporation": {
    "address": {
      "city": "New York",
      "line1": "33 Liberty Street",
      "state": "NY",
      "zip": "10045"
    },
    "beneficial_owners": [
      {
        "company_title": "CEO",
        "individual": {
          "address": {
            "city": "New York",
            "line1": "33 Liberty Street",
            "state": "NY",
            "zip": "10045"
          },
          "date_of_birth": "1970-01-31",
          "identification": {
            "method": "social_security_number",
            "number": "078051120"
          },
          "name": "Ian Crease"
        },
        "prong": "control"
      }
    ],
    "incorporation_state": "NY",
    "name": "National Phonograph Company",
    "tax_identifier": "602214076",
    "website": "https://example.com"
  },
  "relationship": "informational",
  "structure": "corporation",
  "supplemental_documents": [
    {
      "file_id": "file_makxrc67oh9l6sg7w9yc"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|corporation|object|false|none|Details of the corporation entity to create. Required if `structure` is equal to `corporation`.|
|description|string|false|none|The description you choose to give the entity.|
|joint|object|false|none|Details of the joint entity to create. Required if `structure` is equal to `joint`.|
|natural_person|object|false|none|Details of the natural person entity to create. Required if `structure` is equal to `natural_person`. Natural people entities should be submitted with `social_security_number` or `individual_taxpayer_identification_number` identification methods.|
|relationship|string|true|none|The relationship between your group and the entity.|
|structure|string|true|none|The type of Entity to create.|
|supplemental_documents|[object]|false|none|Additional documentation associated with the entity.|
|trust|object|false|none|Details of the trust entity to create. Required if `structure` is equal to `trust`.|

#### Enumerated Values

|Property|Value|
|---|---|
|relationship|affiliated|
|relationship|informational|
|relationship|unaffiliated|
|structure|corporation|
|structure|natural_person|
|structure|joint|
|structure|trust|

<h2 id="tocS_create_an_event_subscription_parameters">create_an_event_subscription_parameters</h2>
<!-- backwards compatibility -->
<a id="schemacreate_an_event_subscription_parameters"></a>
<a id="schema_create_an_event_subscription_parameters"></a>
<a id="tocScreate_an_event_subscription_parameters"></a>
<a id="tocscreate_an_event_subscription_parameters"></a>

```json
{
  "url": "https://website.com/webhooks"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|selected_event_category|string|false|none|If specified, this subscription will only receive webhooks for Events with the specified `category`.|
|shared_secret|string|false|none|The key that will be used to sign webhooks. If no value is passed, a random string will be used as default.|
|url|string|true|none|The URL you'd like us to send webhooks to.|

#### Enumerated Values

|Property|Value|
|---|---|
|selected_event_category|account.created|
|selected_event_category|account.updated|
|selected_event_category|account_number.created|
|selected_event_category|account_number.updated|
|selected_event_category|account_statement.created|
|selected_event_category|account_transfer.created|
|selected_event_category|account_transfer.updated|
|selected_event_category|ach_prenotification.created|
|selected_event_category|ach_prenotification.updated|
|selected_event_category|ach_transfer.created|
|selected_event_category|ach_transfer.updated|
|selected_event_category|card.created|
|selected_event_category|card.updated|
|selected_event_category|card_dispute.created|
|selected_event_category|card_dispute.updated|
|selected_event_category|check_deposit.created|
|selected_event_category|check_deposit.updated|
|selected_event_category|check_transfer.created|
|selected_event_category|check_transfer.updated|
|selected_event_category|declined_transaction.created|
|selected_event_category|digital_wallet_token.created|
|selected_event_category|digital_wallet_token.updated|
|selected_event_category|document.created|
|selected_event_category|entity.created|
|selected_event_category|entity.updated|
|selected_event_category|external_account.created|
|selected_event_category|file.created|
|selected_event_category|group.updated|
|selected_event_category|group.heartbeat|
|selected_event_category|inbound_ach_transfer_return.created|
|selected_event_category|inbound_ach_transfer_return.updated|
|selected_event_category|inbound_wire_drawdown_request.created|
|selected_event_category|oauth_connection.created|
|selected_event_category|oauth_connection.deactivated|
|selected_event_category|pending_transaction.created|
|selected_event_category|pending_transaction.updated|
|selected_event_category|real_time_decision.card_authorization_requested|
|selected_event_category|real_time_decision.digital_wallet_token_requested|
|selected_event_category|real_time_decision.digital_wallet_authentication_requested|
|selected_event_category|real_time_payments_transfer.created|
|selected_event_category|real_time_payments_transfer.updated|
|selected_event_category|real_time_payments_request_for_payment.created|
|selected_event_category|real_time_payments_request_for_payment.updated|
|selected_event_category|transaction.created|
|selected_event_category|wire_drawdown_request.created|
|selected_event_category|wire_drawdown_request.updated|
|selected_event_category|wire_transfer.created|
|selected_event_category|wire_transfer.updated|

<h2 id="tocS_create_an_external_account_parameters">create_an_external_account_parameters</h2>
<!-- backwards compatibility -->
<a id="schemacreate_an_external_account_parameters"></a>
<a id="schema_create_an_external_account_parameters"></a>
<a id="tocScreate_an_external_account_parameters"></a>
<a id="tocscreate_an_external_account_parameters"></a>

```json
{
  "account_number": "987654321",
  "description": "Landlord",
  "routing_number": "101050001"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_number|string|true|none|The account number for the destination account.|
|description|string|true|none|The name you choose for the Account.|
|funding|string|false|none|The type of the destination account. Defaults to `checking`.|
|routing_number|string|true|none|The American Bankers' Association (ABA) Routing Transit Number (RTN) for the destination account.|

#### Enumerated Values

|Property|Value|
|---|---|
|funding|checking|
|funding|savings|
|funding|other|

<h2 id="tocS_declined_transaction">declined_transaction</h2>
<!-- backwards compatibility -->
<a id="schemadeclined_transaction"></a>
<a id="schema_declined_transaction"></a>
<a id="tocSdeclined_transaction"></a>
<a id="tocsdeclined_transaction"></a>

```json
{
  "account_id": "account_in71c4amph0vgo2qllky",
  "amount": 1750,
  "created_at": "2020-01-31T23:59:59Z",
  "currency": "USD",
  "description": "Frederick S. Holmes",
  "id": "declined_transaction_17jbn0yyhvkt4v4ooym8",
  "route_id": "account_number_v18nkfqm6afpsrvy82b2",
  "route_type": "account_number",
  "source": {
    "ach_decline": {
      "amount": 1750,
      "originator_company_descriptive_date": null,
      "originator_company_discretionary_data": null,
      "originator_company_id": "0987654321",
      "originator_company_name": "BIG BANK",
      "reason": "insufficient_funds",
      "receiver_id_number": "12345678900",
      "receiver_name": "IAN CREASE",
      "trace_number": "021000038461022"
    },
    "category": "ach_decline"
  },
  "type": "declined_transaction"
}
```

Declined Transactions are refused additions and removals of money from your bank account. For example, Declined Transactions are caused when your Account has an insufficient balance or your Limits are triggered.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|string|true|none|The identifier for the Account the Declined Transaction belongs to.|
|amount|integer|true|none|The Declined Transaction amount in the minor unit of its currency. For dollars, for example, this is cents.|
|created_at|string(date-time)|true|none|The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date on which the Transaction occured.|
|currency|string|true|none|The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the Declined Transaction's currency. This will match the currency on the Declined Transcation's Account.|
|description|string|true|none|This is the description the vendor provides.|
|id|string|true|none|The Declined Transaction identifier.|
|route_id|string \| null|true|none|The identifier for the route this Declined Transaction came through. Routes are things like cards and ACH details.|
|route_type|string \| null|true|none|The type of the route this Declined Transaction came through.|
|source|object|true|none|This is an object giving more details on the network-level event that caused the Declined Transaction. For example, for a card transaction this lists the merchant's industry and location. Note that for backwards compatibility reasons, additional undocumented keys may appear in this object. These should be treated as deprecated and will be removed in the future.|
|type|string|true|none|A constant representing the object's type. For this resource it will always be `declined_transaction`.|

#### Enumerated Values

|Property|Value|
|---|---|
|currency|CAD|
|currency|CHF|
|currency|EUR|
|currency|GBP|
|currency|JPY|
|currency|USD|
|type|declined_transaction|

<h2 id="tocS_declined_transaction_list">declined_transaction_list</h2>
<!-- backwards compatibility -->
<a id="schemadeclined_transaction_list"></a>
<a id="schema_declined_transaction_list"></a>
<a id="tocSdeclined_transaction_list"></a>
<a id="tocsdeclined_transaction_list"></a>

```json
{
  "data": [
    {
      "account_id": "account_in71c4amph0vgo2qllky",
      "amount": 1750,
      "created_at": "2020-01-31T23:59:59Z",
      "currency": "USD",
      "description": "Frederick S. Holmes",
      "id": "declined_transaction_17jbn0yyhvkt4v4ooym8",
      "route_id": "account_number_v18nkfqm6afpsrvy82b2",
      "route_type": "account_number",
      "source": {
        "ach_decline": {
          "amount": 1750,
          "originator_company_descriptive_date": null,
          "originator_company_discretionary_data": null,
          "originator_company_id": "0987654321",
          "originator_company_name": "BIG BANK",
          "reason": "insufficient_funds",
          "receiver_id_number": "12345678900",
          "receiver_name": "IAN CREASE",
          "trace_number": "021000038461022"
        },
        "category": "ach_decline"
      },
      "type": "declined_transaction"
    }
  ],
  "next_cursor": "v57w5d"
}
```

A list of Declined Transaction objects

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[declined_transaction](#schemadeclined_transaction)]|true|none|The contents of the list.|
|next_cursor|string \| null|true|none|A pointer to a place in the list.|

<h2 id="tocS_digital_wallet_token">digital_wallet_token</h2>
<!-- backwards compatibility -->
<a id="schemadigital_wallet_token"></a>
<a id="schema_digital_wallet_token"></a>
<a id="tocSdigital_wallet_token"></a>
<a id="tocsdigital_wallet_token"></a>

```json
{
  "card_id": "card_oubs0hwk5rn6knuecxg2",
  "created_at": "2020-01-31T23:59:59Z",
  "id": "digital_wallet_token_izi62go3h51p369jrie0",
  "status": "active",
  "token_requestor": "apple_pay",
  "type": "digital_wallet_token"
}
```

A Digital Wallet Token is created when a user adds a Card to their Apple Pay or Google Pay app. The Digital Wallet Token can be used for purchases just like a Card.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|card_id|string|true|none|The identifier for the Card this Digital Wallet Token belongs to.|
|created_at|string(date-time)|true|none|The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which the Card was created.|
|id|string|true|none|The Digital Wallet Token identifier.|
|status|string|true|none|This indicates if payments can be made with the Digital Wallet Token.|
|token_requestor|string|true|none|The digital wallet app being used.|
|type|string|true|none|A constant representing the object's type. For this resource it will always be `digital_wallet_token`.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|active|
|status|inactive|
|status|suspended|
|status|deactivated|
|token_requestor|apple_pay|
|token_requestor|google_pay|
|type|digital_wallet_token|

<h2 id="tocS_digital_wallet_token_list">digital_wallet_token_list</h2>
<!-- backwards compatibility -->
<a id="schemadigital_wallet_token_list"></a>
<a id="schema_digital_wallet_token_list"></a>
<a id="tocSdigital_wallet_token_list"></a>
<a id="tocsdigital_wallet_token_list"></a>

```json
{
  "data": [
    {
      "card_id": "card_oubs0hwk5rn6knuecxg2",
      "created_at": "2020-01-31T23:59:59Z",
      "id": "digital_wallet_token_izi62go3h51p369jrie0",
      "status": "active",
      "token_requestor": "apple_pay",
      "type": "digital_wallet_token"
    }
  ],
  "next_cursor": "v57w5d"
}
```

A list of Digital Wallet Token objects

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[digital_wallet_token](#schemadigital_wallet_token)]|true|none|The contents of the list.|
|next_cursor|string \| null|true|none|A pointer to a place in the list.|

<h2 id="tocS_document">document</h2>
<!-- backwards compatibility -->
<a id="schemadocument"></a>
<a id="schema_document"></a>
<a id="tocSdocument"></a>
<a id="tocsdocument"></a>

```json
{
  "category": "form_1099_int",
  "created_at": "2020-01-31T23:59:59Z",
  "entity_id": "entity_n8y8tnk2p9339ti393yi",
  "file_id": "file_makxrc67oh9l6sg7w9yc",
  "id": "document_qjtqc6s4c14ve2q89izm",
  "type": "document"
}
```

Increase generates certain documents / forms automatically for your application; they can be listed here. Currently the only supported document type is IRS Form 1099-INT.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|string|true|none|The type of document.|
|created_at|string(date-time)|true|none|The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time at which the Document was created.|
|entity_id|string \| null|true|none|The identifier of the Entity the document was generated for.|
|file_id|string|true|none|The identifier of the File containing the Document's contents.|
|id|string|true|none|The Document identifier.|
|type|string|true|none|A constant representing the object's type. For this resource it will always be `document`.|

#### Enumerated Values

|Property|Value|
|---|---|
|category|form_1099_int|
|type|document|

<h2 id="tocS_document_list">document_list</h2>
<!-- backwards compatibility -->
<a id="schemadocument_list"></a>
<a id="schema_document_list"></a>
<a id="tocSdocument_list"></a>
<a id="tocsdocument_list"></a>

```json
{
  "data": [
    {
      "category": "form_1099_int",
      "created_at": "2020-01-31T23:59:59Z",
      "entity_id": "entity_n8y8tnk2p9339ti393yi",
      "file_id": "file_makxrc67oh9l6sg7w9yc",
      "id": "document_qjtqc6s4c14ve2q89izm",
      "type": "document"
    }
  ],
  "next_cursor": "v57w5d"
}
```

A list of Document objects

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[document](#schemadocument)]|true|none|The contents of the list.|
|next_cursor|string \| null|true|none|A pointer to a place in the list.|

<h2 id="tocS_entity">entity</h2>
<!-- backwards compatibility -->
<a id="schemaentity"></a>
<a id="schema_entity"></a>
<a id="tocSentity"></a>
<a id="tocsentity"></a>

```json
{
  "corporation": {
    "address": {
      "city": "New York",
      "line1": "33 Liberty Street",
      "line2": null,
      "state": "NY",
      "zip": "10045"
    },
    "beneficial_owners": [
      {
        "company_title": "CEO",
        "individual": {
          "address": {
            "city": "New York",
            "line1": "33 Liberty Street",
            "line2": null,
            "state": "NY",
            "zip": "10045"
          },
          "date_of_birth": "1970-01-31",
          "identification": {
            "country": "US",
            "method": "social_security_number",
            "number_last4": "1120"
          },
          "name": "Ian Crease"
        },
        "prong": "control"
      }
    ],
    "incorporation_state": "NY",
    "name": "National Phonograph Company",
    "tax_identifier": "602214076",
    "website": "https://example.com"
  },
  "description": null,
  "id": "entity_n8y8tnk2p9339ti393yi",
  "joint": null,
  "natural_person": null,
  "relationship": "informational",
  "structure": "corporation",
  "supplemental_documents": [
    {
      "file_id": "file_makxrc67oh9l6sg7w9yc"
    }
  ],
  "trust": null,
  "type": "entity"
}
```

Entities are the legal entities that own accounts. They can be people, corporations, partnerships, or trusts.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|corporation|object \| null|true|none|Details of the corporation entity. Will be present if `structure` is equal to `corporation`.|
|description|string \| null|true|none|The entity's description for display purposes.|
|id|string|true|none|The entity's identifier.|
|joint|object \| null|true|none|Details of the joint entity. Will be present if `structure` is equal to `joint`.|
|natural_person|object \| null|true|none|Details of the natural person entity. Will be present if `structure` is equal to `natural_person`.|
|relationship|string|true|none|The relationship between your group and the entity.|
|structure|string|true|none|The entity's legal structure.|
|supplemental_documents|[object]|true|none|Additional documentation associated with the entity.|
|trust|object \| null|true|none|Details of the trust entity. Will be present if `structure` is equal to `trust`.|
|type|string|true|none|A constant representing the object's type. For this resource it will always be `entity`.|

#### Enumerated Values

|Property|Value|
|---|---|
|relationship|affiliated|
|relationship|informational|
|relationship|unaffiliated|
|structure|corporation|
|structure|natural_person|
|structure|joint|
|structure|trust|
|type|entity|

<h2 id="tocS_entity_list">entity_list</h2>
<!-- backwards compatibility -->
<a id="schemaentity_list"></a>
<a id="schema_entity_list"></a>
<a id="tocSentity_list"></a>
<a id="tocsentity_list"></a>

```json
{
  "data": [
    {
      "corporation": {
        "address": {
          "city": "New York",
          "line1": "33 Liberty Street",
          "line2": null,
          "state": "NY",
          "zip": "10045"
        },
        "beneficial_owners": [
          {
            "company_title": "CEO",
            "individual": {
              "address": {
                "city": "New York",
                "line1": "33 Liberty Street",
                "line2": null,
                "state": "NY",
                "zip": "10045"
              },
              "date_of_birth": "1970-01-31",
              "identification": {
                "country": "US",
                "method": "social_security_number",
                "number_last4": "1120"
              },
              "name": "Ian Crease"
            },
            "prong": "control"
          }
        ],
        "incorporation_state": "NY",
        "name": "National Phonograph Company",
        "tax_identifier": "602214076",
        "website": "https://example.com"
      },
      "description": null,
      "id": "entity_n8y8tnk2p9339ti393yi",
      "joint": null,
      "natural_person": null,
      "relationship": "informational",
      "structure": "corporation",
      "supplemental_documents": [
        {
          "file_id": "file_makxrc67oh9l6sg7w9yc"
        }
      ],
      "trust": null,
      "type": "entity"
    }
  ],
  "next_cursor": "v57w5d"
}
```

A list of Entity objects

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[entity](#schemaentity)]|true|none|The contents of the list.|
|next_cursor|string \| null|true|none|A pointer to a place in the list.|

<h2 id="tocS_error">error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "detail": "string",
  "status": 404,
  "title": "string",
  "type": "api_method_not_found_error"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|object|false|none|none|
|detail|string \| null|true|none|none|
|status|integer|true|none|none|
|title|string|true|none|none|
|type|string|true|none|none|
|*anyOf*|object|false|none|none|
|detail|string \| null|true|none|none|
|status|integer|true|none|none|
|title|string|true|none|none|
|type|string|true|none|none|
|*anyOf*|object|false|none|none|
|detail|string \| null|true|none|none|
|status|integer|true|none|none|
|title|string|true|none|none|
|type|string|true|none|none|
|*anyOf*|object|false|none|none|
|detail|string \| null|true|none|none|
|status|integer|true|none|none|
|title|string|true|none|none|
|type|string|true|none|none|
|*anyOf*|object|false|none|none|
|detail|string \| null|true|none|none|
|status|integer|true|none|none|
|title|string|true|none|none|
|type|string|true|none|none|
|*anyOf*|object|false|none|none|
|detail|string \| null|true|none|none|
|status|integer|true|none|none|
|title|string|true|none|none|
|type|string|true|none|none|
|*anyOf*|object|false|none|none|
|detail|string \| null|true|none|none|
|status|integer|true|none|none|
|title|string|true|none|none|
|type|string|true|none|none|
|*anyOf*|object|false|none|none|
|detail|string \| null|true|none|none|
|status|integer|true|none|none|
|title|string|true|none|none|
|type|string|true|none|none|
|*anyOf*|object|false|none|none|
|detail|string \| null|true|none|none|
|errors|[object]|false|none|All errors related to parsing the request parameters.|
|status|integer|true|none|none|
|title|string|true|none|none|
|type|string|true|none|none|
|*anyOf*|object|false|none|none|
|detail|string \| null|true|none|none|
|status|integer|true|none|none|
|title|string|true|none|none|
|type|string|true|none|none|
|*anyOf*|object|false|none|none|
|detail|string \| null|true|none|none|
|status|integer|true|none|none|
|title|string|true|none|none|
|type|string|true|none|none|
|*anyOf*|object|false|none|none|
|detail|string \| null|true|none|none|
|status|integer|true|none|none|
|title|string|true|none|none|
|type|string|true|none|none|
|*anyOf*|object|false|none|none|
|detail|string \| null|true|none|none|
|retry_after|integer \| null|false|none|none|
|status|integer|true|none|none|
|title|string|true|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|404|
|type|api_method_not_found_error|
|status|403|
|type|environment_mismatch_error|
|status|409|
|type|idempotency_conflict_error|
|status|422|
|type|idempotency_unprocessable_error|
|status|403|
|type|insufficient_permissions_error|
|status|500|
|type|internal_server_error|
|status|401|
|type|invalid_api_key_error|
|status|409|
|type|invalid_operation_error|
|status|400|
|type|invalid_parameters_error|
|status|400|
|type|malformed_request_error|
|status|404|
|type|object_not_found_error|
|status|403|
|type|private_feature_error|
|status|429|
|type|rate_limited_error|

<h2 id="tocS_event">event</h2>
<!-- backwards compatibility -->
<a id="schemaevent"></a>
<a id="schema_event"></a>
<a id="tocSevent"></a>
<a id="tocsevent"></a>

```json
{
  "associated_object_id": "account_in71c4amph0vgo2qllky",
  "associated_object_type": "account",
  "category": "account.created",
  "created_at": "2020-01-31T23:59:59Z",
  "id": "event_001dzz0r20rzr4zrhrr1364hy80",
  "type": "event"
}
```

Events are records of things that happened to objects in the API. They also result in webhooks being generated.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|associated_object_id|string|true|none|The identifier of the object that generated this Event.|
|associated_object_type|string|true|none|The type of the object that generated this Event.|
|category|string|true|none|The category of the Event. We may add additional possible values for this enum over time; your application should be able to handle such additions gracefully.|
|created_at|string(date-time)|true|none|The time the Event was created.|
|id|string|true|none|The Event identifier.|
|type|string|true|none|A constant representing the object's type. For this resource it will always be `event`.|

#### Enumerated Values

|Property|Value|
|---|---|
|category|account.created|
|category|account.updated|
|category|account_number.created|
|category|account_number.updated|
|category|account_statement.created|
|category|account_transfer.created|
|category|account_transfer.updated|
|category|ach_prenotification.created|
|category|ach_prenotification.updated|
|category|ach_transfer.created|
|category|ach_transfer.updated|
|category|card.created|
|category|card.updated|
|category|card_dispute.created|
|category|card_dispute.updated|
|category|check_deposit.created|
|category|check_deposit.updated|
|category|check_transfer.created|
|category|check_transfer.updated|
|category|declined_transaction.created|
|category|digital_wallet_token.created|
|category|digital_wallet_token.updated|
|category|document.created|
|category|entity.created|
|category|entity.updated|
|category|external_account.created|
|category|file.created|
|category|group.updated|
|category|group.heartbeat|
|category|inbound_ach_transfer_return.created|
|category|inbound_ach_transfer_return.updated|
|category|inbound_wire_drawdown_request.created|
|category|oauth_connection.created|
|category|oauth_connection.deactivated|
|category|pending_transaction.created|
|category|pending_transaction.updated|
|category|real_time_decision.card_authorization_requested|
|category|real_time_decision.digital_wallet_token_requested|
|category|real_time_decision.digital_wallet_authentication_requested|
|category|real_time_payments_transfer.created|
|category|real_time_payments_transfer.updated|
|category|real_time_payments_request_for_payment.created|
|category|real_time_payments_request_for_payment.updated|
|category|transaction.created|
|category|wire_drawdown_request.created|
|category|wire_drawdown_request.updated|
|category|wire_transfer.created|
|category|wire_transfer.updated|
|type|event|

<h2 id="tocS_event_list">event_list</h2>
<!-- backwards compatibility -->
<a id="schemaevent_list"></a>
<a id="schema_event_list"></a>
<a id="tocSevent_list"></a>
<a id="tocsevent_list"></a>

```json
{
  "data": [
    {
      "associated_object_id": "account_in71c4amph0vgo2qllky",
      "associated_object_type": "account",
      "category": "account.created",
      "created_at": "2020-01-31T23:59:59Z",
      "id": "event_001dzz0r20rzr4zrhrr1364hy80",
      "type": "event"
    }
  ],
  "next_cursor": "v57w5d"
}
```

A list of Event objects

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[event](#schemaevent)]|true|none|The contents of the list.|
|next_cursor|string \| null|true|none|A pointer to a place in the list.|

<h2 id="tocS_event_subscription">event_subscription</h2>
<!-- backwards compatibility -->
<a id="schemaevent_subscription"></a>
<a id="schema_event_subscription"></a>
<a id="tocSevent_subscription"></a>
<a id="tocsevent_subscription"></a>

```json
{
  "created_at": "2020-01-31T23:59:59Z",
  "id": "event_subscription_001dzz0r20rcdxgb013zqb8m04g",
  "selected_event_category": null,
  "shared_secret": "b88l20",
  "status": "active",
  "type": "event_subscription",
  "url": "https://website.com/webhooks"
}
```

Webhooks are event notifications we send to you by HTTPS POST requests. Event Subscriptions are how you configure your application to listen for them. You can create an Event Subscription through your [developer dashboard](https://dashboard.increase.com/developers/webhooks) or the API. For more information, see our [webhooks guide](https://increase.com/documentation/webhooks).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_at|string(date-time)|true|none|The time the event subscription was created.|
|id|string|true|none|The event subscription identifier.|
|selected_event_category|string \| null|true|none|If specified, this subscription will only receive webhooks for Events with the specified `category`.|
|shared_secret|string|true|none|The key that will be used to sign webhooks.|
|status|string|true|none|This indicates if we'll send notifications to this subscription.|
|type|string|true|none|A constant representing the object's type. For this resource it will always be `event_subscription`.|
|url|string|true|none|The webhook url where we'll send notifications.|

#### Enumerated Values

|Property|Value|
|---|---|
|selected_event_category|account.created|
|selected_event_category|account.updated|
|selected_event_category|account_number.created|
|selected_event_category|account_number.updated|
|selected_event_category|account_statement.created|
|selected_event_category|account_transfer.created|
|selected_event_category|account_transfer.updated|
|selected_event_category|ach_prenotification.created|
|selected_event_category|ach_prenotification.updated|
|selected_event_category|ach_transfer.created|
|selected_event_category|ach_transfer.updated|
|selected_event_category|card.created|
|selected_event_category|card.updated|
|selected_event_category|card_dispute.created|
|selected_event_category|card_dispute.updated|
|selected_event_category|check_deposit.created|
|selected_event_category|check_deposit.updated|
|selected_event_category|check_transfer.created|
|selected_event_category|check_transfer.updated|
|selected_event_category|declined_transaction.created|
|selected_event_category|digital_wallet_token.created|
|selected_event_category|digital_wallet_token.updated|
|selected_event_category|document.created|
|selected_event_category|entity.created|
|selected_event_category|entity.updated|
|selected_event_category|external_account.created|
|selected_event_category|file.created|
|selected_event_category|group.updated|
|selected_event_category|group.heartbeat|
|selected_event_category|inbound_ach_transfer_return.created|
|selected_event_category|inbound_ach_transfer_return.updated|
|selected_event_category|inbound_wire_drawdown_request.created|
|selected_event_category|oauth_connection.created|
|selected_event_category|oauth_connection.deactivated|
|selected_event_category|pending_transaction.created|
|selected_event_category|pending_transaction.updated|
|selected_event_category|real_time_decision.card_authorization_requested|
|selected_event_category|real_time_decision.digital_wallet_token_requested|
|selected_event_category|real_time_decision.digital_wallet_authentication_requested|
|selected_event_category|real_time_payments_transfer.created|
|selected_event_category|real_time_payments_transfer.updated|
|selected_event_category|real_time_payments_request_for_payment.created|
|selected_event_category|real_time_payments_request_for_payment.updated|
|selected_event_category|transaction.created|
|selected_event_category|wire_drawdown_request.created|
|selected_event_category|wire_drawdown_request.updated|
|selected_event_category|wire_transfer.created|
|selected_event_category|wire_transfer.updated|
|status|active|
|status|disabled|
|status|deleted|
|status|requires_attention|
|type|event_subscription|

<h2 id="tocS_event_subscription_list">event_subscription_list</h2>
<!-- backwards compatibility -->
<a id="schemaevent_subscription_list"></a>
<a id="schema_event_subscription_list"></a>
<a id="tocSevent_subscription_list"></a>
<a id="tocsevent_subscription_list"></a>

```json
{
  "data": [
    {
      "created_at": "2020-01-31T23:59:59Z",
      "id": "event_subscription_001dzz0r20rcdxgb013zqb8m04g",
      "selected_event_category": null,
      "shared_secret": "b88l20",
      "status": "active",
      "type": "event_subscription",
      "url": "https://website.com/webhooks"
    }
  ],
  "next_cursor": "v57w5d"
}
```

A list of Event Subscription objects

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[event_subscription](#schemaevent_subscription)]|true|none|The contents of the list.|
|next_cursor|string \| null|true|none|A pointer to a place in the list.|

<h2 id="tocS_external_account">external_account</h2>
<!-- backwards compatibility -->
<a id="schemaexternal_account"></a>
<a id="schema_external_account"></a>
<a id="tocSexternal_account"></a>
<a id="tocsexternal_account"></a>

```json
{
  "account_number": "987654321",
  "created_at": "2020-01-31T23:59:59Z",
  "description": "Landlord",
  "funding": "checking",
  "id": "external_account_ukk55lr923a3ac0pp7iv",
  "routing_number": "101050001",
  "status": "active",
  "type": "external_account",
  "verification_status": "verified"
}
```

External Accounts represent accounts at financial institutions other than Increase. You can use this API to store their details for reuse.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_number|string|true|none|The destination account number.|
|created_at|string(date-time)|true|none|The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which the External Account was created.|
|description|string|true|none|The External Account's description for display purposes.|
|funding|string|true|none|The type of the account to which the transfer will be sent.|
|id|string|true|none|The External Account's identifier.|
|routing_number|string|true|none|The American Bankers' Association (ABA) Routing Transit Number (RTN).|
|status|string|true|none|The External Account's status.|
|type|string|true|none|A constant representing the object's type. For this resource it will always be `external_account`.|
|verification_status|string|true|none|If you have verified ownership of the External Account.|

#### Enumerated Values

|Property|Value|
|---|---|
|funding|checking|
|funding|savings|
|funding|other|
|status|active|
|status|archived|
|type|external_account|
|verification_status|unverified|
|verification_status|pending|
|verification_status|verified|

<h2 id="tocS_external_account_list">external_account_list</h2>
<!-- backwards compatibility -->
<a id="schemaexternal_account_list"></a>
<a id="schema_external_account_list"></a>
<a id="tocSexternal_account_list"></a>
<a id="tocsexternal_account_list"></a>

```json
{
  "data": [
    {
      "account_number": "987654321",
      "created_at": "2020-01-31T23:59:59Z",
      "description": "Landlord",
      "funding": "checking",
      "id": "external_account_ukk55lr923a3ac0pp7iv",
      "routing_number": "101050001",
      "status": "active",
      "type": "external_account",
      "verification_status": "verified"
    }
  ],
  "next_cursor": "v57w5d"
}
```

A list of External Account objects

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[external_account](#schemaexternal_account)]|true|none|The contents of the list.|
|next_cursor|string \| null|true|none|A pointer to a place in the list.|

<h2 id="tocS_file">file</h2>
<!-- backwards compatibility -->
<a id="schemafile"></a>
<a id="schema_file"></a>
<a id="tocSfile"></a>
<a id="tocsfile"></a>

```json
{
  "created_at": "2020-01-31T23:59:59Z",
  "description": "2022-05 statement for checking account",
  "direction": "from_increase",
  "download_url": "https://api.increase.com/files/file_makxrc67oh9l6sg7w9yc/download",
  "filename": "statement.pdf",
  "id": "file_makxrc67oh9l6sg7w9yc",
  "purpose": "increase_statement",
  "type": "file"
}
```

Files are objects that represent a file hosted on Increase's servers. The file may have been uploaded by you (for example, when uploading a check image) or it may have been created by Increase (for example, an autogenerated statement PDF).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_at|string(date-time)|true|none|The time the File was created.|
|description|string \| null|true|none|A description of the File.|
|direction|string|true|none|Whether the File was generated by Increase or by you and sent to Increase.|
|download_url|string \| null|true|none|A URL from where the File can be downloaded at this point in time. The location of this URL may change over time.|
|filename|string \| null|true|none|The filename that was provided upon upload or generated by Increase.|
|id|string|true|none|The File's identifier.|
|purpose|string|true|none|What the File will be used for. We may add additional possible values for this enum over time; your application should be able to handle such additions gracefully.|
|type|string|true|none|A constant representing the object's type. For this resource it will always be `file`.|

#### Enumerated Values

|Property|Value|
|---|---|
|direction|to_increase|
|direction|from_increase|
|purpose|check_image_front|
|purpose|check_image_back|
|purpose|form_1099_int|
|purpose|form_ss_4|
|purpose|identity_document|
|purpose|increase_statement|
|purpose|other|
|purpose|trust_formation_document|
|purpose|digital_wallet_artwork|
|purpose|digital_wallet_app_icon|
|purpose|entity_supplemental_document|
|type|file|

<h2 id="tocS_file_list">file_list</h2>
<!-- backwards compatibility -->
<a id="schemafile_list"></a>
<a id="schema_file_list"></a>
<a id="tocSfile_list"></a>
<a id="tocsfile_list"></a>

```json
{
  "data": [
    {
      "created_at": "2020-01-31T23:59:59Z",
      "description": "2022-05 statement for checking account",
      "direction": "from_increase",
      "download_url": "https://api.increase.com/files/file_makxrc67oh9l6sg7w9yc/download",
      "filename": "statement.pdf",
      "id": "file_makxrc67oh9l6sg7w9yc",
      "purpose": "increase_statement",
      "type": "file"
    }
  ],
  "next_cursor": "v57w5d"
}
```

A list of File objects

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[file](#schemafile)]|true|none|The contents of the list.|
|next_cursor|string \| null|true|none|A pointer to a place in the list.|

<h2 id="tocS_group">group</h2>
<!-- backwards compatibility -->
<a id="schemagroup"></a>
<a id="schema_group"></a>
<a id="tocSgroup"></a>
<a id="tocsgroup"></a>

```json
{
  "ach_debit_status": "disabled",
  "activation_status": "activated",
  "created_at": "2020-01-31T23:59:59Z",
  "id": "group_1g4mhziu6kvrs3vz35um",
  "type": "group"
}
```

Groups represent organizations using Increase. You can retrieve information about your own organization via the API, or (more commonly) OAuth platforms can retrieve information about the organizations that have granted them access.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ach_debit_status|string|true|none|If the Group is allowed to create ACH debits.|
|activation_status|string|true|none|If the Group is activated or not.|
|created_at|string(date-time)|true|none|The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time at which the Group was created.|
|id|string|true|none|The Group identifier.|
|type|string|true|none|A constant representing the object's type. For this resource it will always be `group`.|

#### Enumerated Values

|Property|Value|
|---|---|
|ach_debit_status|disabled|
|ach_debit_status|enabled|
|activation_status|unactivated|
|activation_status|activated|
|type|group|

<h2 id="tocS_inbound_ach_transfer_return">inbound_ach_transfer_return</h2>
<!-- backwards compatibility -->
<a id="schemainbound_ach_transfer_return"></a>
<a id="schema_inbound_ach_transfer_return"></a>
<a id="tocSinbound_ach_transfer_return"></a>
<a id="tocsinbound_ach_transfer_return"></a>

```json
{
  "class_name": "inbound_ach_transfer_return",
  "id": "inbound_ach_transfer_return_fhcxk5huskwhmt7iz0gk",
  "inbound_ach_transfer_transaction_id": "transaction_uyrp7fld2ium70oa7oi",
  "reason": "payment_stopped",
  "status": "submitted",
  "submission": {
    "submitted_at": "2020-01-31T23:59:59Z",
    "trace_number": "058349238292834"
  },
  "transaction_id": null,
  "type": "inbound_ach_transfer_return"
}
```

If unauthorized activity occurs via ACH, you can create an Inbound ACH Transfer Return and we'll reverse the transaction. You can create an Inbound ACH Transfer return the first two days after receiving an Inbound ACH Transfer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The ID of the Inbound ACH Transfer Return.|
|inbound_ach_transfer_transaction_id|string|true|none|The ID for the Transaction that is being returned.|
|reason|string|true|none|The reason why this transfer will be returned. This is sent to the initiating bank.|
|status|string|true|none|The lifecycle status of the transfer.|
|submission|object \| null|true|none|After the return is submitted to FedACH, this will contain supplemental details.|
|transaction_id|string \| null|true|none|The ID for the transaction refunding the transfer.|
|type|string|true|none|A constant representing the object's type. For this resource it will always be `inbound_ach_transfer_return`.|

#### Enumerated Values

|Property|Value|
|---|---|
|reason|authorization_revoked_by_customer|
|reason|payment_stopped|
|reason|customer_advised_unauthorized_improper_ineligible_or_incomplete|
|reason|representative_payee_deceased_or_unable_to_continue_in_that_capacity|
|reason|beneficiary_or_account_holder_deceased|
|reason|credit_entry_refused_by_receiver|
|reason|duplicate_entry|
|reason|corporate_customer_advised_not_authorized|
|status|pending_submitting|
|status|submitted|
|type|inbound_ach_transfer_return|

<h2 id="tocS_inbound_ach_transfer_return_list">inbound_ach_transfer_return_list</h2>
<!-- backwards compatibility -->
<a id="schemainbound_ach_transfer_return_list"></a>
<a id="schema_inbound_ach_transfer_return_list"></a>
<a id="tocSinbound_ach_transfer_return_list"></a>
<a id="tocsinbound_ach_transfer_return_list"></a>

```json
{
  "data": [
    {
      "class_name": "inbound_ach_transfer_return",
      "id": "inbound_ach_transfer_return_fhcxk5huskwhmt7iz0gk",
      "inbound_ach_transfer_transaction_id": "transaction_uyrp7fld2ium70oa7oi",
      "reason": "payment_stopped",
      "status": "submitted",
      "submission": {
        "submitted_at": "2020-01-31T23:59:59Z",
        "trace_number": "058349238292834"
      },
      "transaction_id": null,
      "type": "inbound_ach_transfer_return"
    }
  ],
  "next_cursor": "v57w5d"
}
```

A list of Inbound ACH Transfer Return objects

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[inbound_ach_transfer_return](#schemainbound_ach_transfer_return)]|true|none|The contents of the list.|
|next_cursor|string \| null|true|none|A pointer to a place in the list.|

<h2 id="tocS_inbound_ach_transfer_simulation_result">inbound_ach_transfer_simulation_result</h2>
<!-- backwards compatibility -->
<a id="schemainbound_ach_transfer_simulation_result"></a>
<a id="schema_inbound_ach_transfer_simulation_result"></a>
<a id="tocSinbound_ach_transfer_simulation_result"></a>
<a id="tocsinbound_ach_transfer_simulation_result"></a>

```json
{
  "declined_transaction": null,
  "transaction": {
    "account_id": "account_in71c4amph0vgo2qllky",
    "amount": 100,
    "created_at": "2020-01-31T23:59:59Z",
    "currency": "USD",
    "description": "Frederick S. Holmes",
    "id": "transaction_uyrp7fld2ium70oa7oi",
    "route_id": "account_number_v18nkfqm6afpsrvy82b2",
    "route_type": "account_number",
    "source": {
      "category": "inbound_ach_transfer",
      "inbound_ach_transfer": {
        "amount": 100,
        "originator_company_descriptive_date": null,
        "originator_company_discretionary_data": null,
        "originator_company_entry_description": "RESERVE",
        "originator_company_id": "0987654321",
        "originator_company_name": "BIG BANK",
        "receiver_id_number": "12345678900",
        "receiver_name": "IAN CREASE",
        "trace_number": "021000038461022"
      }
    },
    "type": "transaction"
  },
  "type": "inbound_ach_transfer_simulation_result"
}
```

The results of an inbound ACH Transfer simulation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|declined_transaction|object \| null|true|none|If the ACH Transfer attempt fails, this will contain the resulting [Declined Transaction](#declined-transactions) object. The Declined Transaction's `source` will be of `category: inbound_ach_transfer`.|
|transaction|object \| null|true|none|If the ACH Transfer attempt succeeds, this will contain the resulting [Transaction](#transactions) object. The Transaction's `source` will be of `category: inbound_ach_transfer`.|
|type|string|true|none|A constant representing the object's type. For this resource it will always be `inbound_ach_transfer_simulation_result`.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|inbound_ach_transfer_simulation_result|

<h2 id="tocS_inbound_card_authorization_simulation_result">inbound_card_authorization_simulation_result</h2>
<!-- backwards compatibility -->
<a id="schemainbound_card_authorization_simulation_result"></a>
<a id="schema_inbound_card_authorization_simulation_result"></a>
<a id="tocSinbound_card_authorization_simulation_result"></a>
<a id="tocsinbound_card_authorization_simulation_result"></a>

```json
{
  "declined_transaction": null,
  "pending_transaction": {
    "account_id": "account_in71c4amph0vgo2qllky",
    "amount": 100,
    "created_at": "2020-01-31T23:59:59Z",
    "currency": "USD",
    "description": "Frederick S. Holmes",
    "id": "pending_transaction_k1sfetcau2qbvjbzgju4",
    "route_id": "card_route_jk5pd79u6ydmbf9qzu6i",
    "route_type": "transfer_instruction",
    "source": {
      "card_authorization": {
        "amount": 100,
        "currency": "USD",
        "digital_wallet_token_id": null,
        "merchant_acceptor_id": "5665270011000168",
        "merchant_category_code": "5734",
        "merchant_city": "New York",
        "merchant_country": "US",
        "merchant_descriptor": "AMAZON.COM",
        "network": "visa",
        "network_details": {
          "visa": {
            "electronic_commerce_indicator": "secure_electronic_commerce",
            "point_of_service_entry_mode": "manual"
          }
        },
        "real_time_decision_id": null
      },
      "category": "card_authorization"
    },
    "status": "pending",
    "type": "pending_transaction"
  },
  "type": "inbound_card_authorization_simulation_result"
}
```

The results of a Card Authorization simulation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|declined_transaction|object \| null|true|none|If the authorization attempt fails, this will contain the resulting [Declined Transaction](#declined-transactions) object. The Declined Transaction's `source` will be of `category: card_decline`.|
|pending_transaction|object \| null|true|none|If the authorization attempt succeeds, this will contain the resulting Pending Transaction object. The Pending Transaction's `source` will be of `category: card_authorization`.|
|type|string|true|none|A constant representing the object's type. For this resource it will always be `inbound_card_authorization_simulation_result`.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|inbound_card_authorization_simulation_result|

<h2 id="tocS_inbound_digital_wallet_token_request_simulation_result">inbound_digital_wallet_token_request_simulation_result</h2>
<!-- backwards compatibility -->
<a id="schemainbound_digital_wallet_token_request_simulation_result"></a>
<a id="schema_inbound_digital_wallet_token_request_simulation_result"></a>
<a id="tocSinbound_digital_wallet_token_request_simulation_result"></a>
<a id="tocsinbound_digital_wallet_token_request_simulation_result"></a>

```json
{
  "decline_reason": null,
  "digital_wallet_token_id": "digital_wallet_token_izi62go3h51p369jrie0",
  "type": "inbound_digital_wallet_token_request_simulation_result"
}
```

The results of a Digital Wallet Token simulation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|decline_reason|string \| null|true|none|If the simulated tokenization attempt was declined, this field contains details as to why.|
|digital_wallet_token_id|string \| null|true|none|If the simulated tokenization attempt was accepted, this field contains the id of the Digital Wallet Token that was created.|
|type|string|true|none|A constant representing the object's type. For this resource it will always be `inbound_digital_wallet_token_request_simulation_result`.|

#### Enumerated Values

|Property|Value|
|---|---|
|decline_reason|card_not_active|
|decline_reason|no_verification_method|
|decline_reason|webhook_timed_out|
|decline_reason|webhook_declined|
|type|inbound_digital_wallet_token_request_simulation_result|

<h2 id="tocS_inbound_real_time_payments_transfer_simulation_result">inbound_real_time_payments_transfer_simulation_result</h2>
<!-- backwards compatibility -->
<a id="schemainbound_real_time_payments_transfer_simulation_result"></a>
<a id="schema_inbound_real_time_payments_transfer_simulation_result"></a>
<a id="tocSinbound_real_time_payments_transfer_simulation_result"></a>
<a id="tocsinbound_real_time_payments_transfer_simulation_result"></a>

```json
{
  "declined_transaction": null,
  "transaction": {
    "account_id": "account_in71c4amph0vgo2qllky",
    "amount": 100,
    "created_at": "2020-01-31T23:59:59Z",
    "currency": "USD",
    "description": "Frederick S. Holmes",
    "id": "transaction_uyrp7fld2ium70oa7oi",
    "route_id": "account_number_v18nkfqm6afpsrvy82b2",
    "route_type": "account_number",
    "source": {
      "category": "inbound_real_time_payments_transfer_confirmation",
      "inbound_real_time_payments_transfer_confirmation": {
        "amount": 100,
        "creditor_name": "Ian Crease",
        "currency": "USD",
        "debtor_account_number": "987654321",
        "debtor_name": "National Phonograph Company",
        "debtor_routing_number": "101050001",
        "remittance_information": "Invoice 29582",
        "transaction_identification": "20220501234567891T1BSLZO01745013025"
      }
    },
    "type": "transaction"
  },
  "type": "inbound_real_time_payments_transfer_simulation_result"
}
```

The results of an inbound Real Time Payments Transfer simulation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|declined_transaction|object \| null|true|none|If the Real Time Payments Transfer attempt fails, this will contain the resulting [Declined Transaction](#declined-transactions) object. The Declined Transaction's `source` will be of `category: inbound_real_time_payments_transfer_decline`.|
|transaction|object \| null|true|none|If the Real Time Payments Transfer attempt succeeds, this will contain the resulting [Transaction](#transactions) object. The Transaction's `source` will be of `category: inbound_real_time_payments_transfer_confirmation`.|
|type|string|true|none|A constant representing the object's type. For this resource it will always be `inbound_real_time_payments_transfer_simulation_result`.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|inbound_real_time_payments_transfer_simulation_result|

<h2 id="tocS_inbound_wire_drawdown_request">inbound_wire_drawdown_request</h2>
<!-- backwards compatibility -->
<a id="schemainbound_wire_drawdown_request"></a>
<a id="schema_inbound_wire_drawdown_request"></a>
<a id="tocSinbound_wire_drawdown_request"></a>
<a id="tocsinbound_wire_drawdown_request"></a>

```json
{
  "amount": 10000,
  "beneficiary_account_number": "987654321",
  "beneficiary_address_line1": "33 Liberty Street",
  "beneficiary_address_line2": "New York, NY, 10045",
  "beneficiary_address_line3": null,
  "beneficiary_name": "Ian Crease",
  "beneficiary_routing_number": "101050001",
  "currency": "USD",
  "id": "inbound_wire_drawdown_request_u5a92ikqhz1ytphn799e",
  "message_to_recipient": "Invoice 29582",
  "originator_account_number": "987654321",
  "originator_address_line1": "33 Liberty Street",
  "originator_address_line2": "New York, NY, 10045",
  "originator_address_line3": null,
  "originator_name": "Ian Crease",
  "originator_routing_number": "101050001",
  "originator_to_beneficiary_information_line1": null,
  "originator_to_beneficiary_information_line2": null,
  "originator_to_beneficiary_information_line3": null,
  "originator_to_beneficiary_information_line4": null,
  "recipient_account_number_id": "account_number_v18nkfqm6afpsrvy82b2",
  "type": "inbound_wire_drawdown_request"
}
```

Inbound wire drawdown requests are requests from someone else to send them a wire. This feature is in beta; reach out to [support@increase.com](mailto:support@increase.com) to learn more.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|integer|true|none|The amount being requested in cents.|
|beneficiary_account_number|string|true|none|The drawdown request's beneficiary's account number.|
|beneficiary_address_line1|string \| null|true|none|Line 1 of the drawdown request's beneficiary's address.|
|beneficiary_address_line2|string \| null|true|none|Line 2 of the drawdown request's beneficiary's address.|
|beneficiary_address_line3|string \| null|true|none|Line 3 of the drawdown request's beneficiary's address.|
|beneficiary_name|string \| null|true|none|The drawdown request's beneficiary's name.|
|beneficiary_routing_number|string|true|none|The drawdown request's beneficiary's routing number.|
|currency|string|true|none|The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the amount being requested. Will always be "USD".|
|id|string|true|none|The Wire drawdown request identifier.|
|message_to_recipient|string \| null|true|none|A message from the drawdown request's originator.|
|originator_account_number|string|true|none|The drawdown request's originator's account number.|
|originator_address_line1|string \| null|true|none|Line 1 of the drawdown request's originator's address.|
|originator_address_line2|string \| null|true|none|Line 2 of the drawdown request's originator's address.|
|originator_address_line3|string \| null|true|none|Line 3 of the drawdown request's originator's address.|
|originator_name|string \| null|true|none|The drawdown request's originator's name.|
|originator_routing_number|string|true|none|The drawdown request's originator's routing number.|
|originator_to_beneficiary_information_line1|string \| null|true|none|Line 1 of the information conveyed from the originator of the message to the beneficiary.|
|originator_to_beneficiary_information_line2|string \| null|true|none|Line 2 of the information conveyed from the originator of the message to the beneficiary.|
|originator_to_beneficiary_information_line3|string \| null|true|none|Line 3 of the information conveyed from the originator of the message to the beneficiary.|
|originator_to_beneficiary_information_line4|string \| null|true|none|Line 4 of the information conveyed from the originator of the message to the beneficiary.|
|recipient_account_number_id|string|true|none|The Account Number from which the recipient of this request is being requested to send funds.|
|type|string|true|none|A constant representing the object's type. For this resource it will always be `inbound_wire_drawdown_request`.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|inbound_wire_drawdown_request|

<h2 id="tocS_inbound_wire_drawdown_request_list">inbound_wire_drawdown_request_list</h2>
<!-- backwards compatibility -->
<a id="schemainbound_wire_drawdown_request_list"></a>
<a id="schema_inbound_wire_drawdown_request_list"></a>
<a id="tocSinbound_wire_drawdown_request_list"></a>
<a id="tocsinbound_wire_drawdown_request_list"></a>

```json
{
  "data": [
    {
      "amount": 10000,
      "beneficiary_account_number": "987654321",
      "beneficiary_address_line1": "33 Liberty Street",
      "beneficiary_address_line2": "New York, NY, 10045",
      "beneficiary_address_line3": null,
      "beneficiary_name": "Ian Crease",
      "beneficiary_routing_number": "101050001",
      "currency": "USD",
      "id": "inbound_wire_drawdown_request_u5a92ikqhz1ytphn799e",
      "message_to_recipient": "Invoice 29582",
      "originator_account_number": "987654321",
      "originator_address_line1": "33 Liberty Street",
      "originator_address_line2": "New York, NY, 10045",
      "originator_address_line3": null,
      "originator_name": "Ian Crease",
      "originator_routing_number": "101050001",
      "originator_to_beneficiary_information_line1": null,
      "originator_to_beneficiary_information_line2": null,
      "originator_to_beneficiary_information_line3": null,
      "originator_to_beneficiary_information_line4": null,
      "recipient_account_number_id": "account_number_v18nkfqm6afpsrvy82b2",
      "type": "inbound_wire_drawdown_request"
    }
  ],
  "next_cursor": "v57w5d"
}
```

A list of Inbound Wire Drawdown Request objects

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[inbound_wire_drawdown_request](#schemainbound_wire_drawdown_request)]|true|none|The contents of the list.|
|next_cursor|string \| null|true|none|A pointer to a place in the list.|

<h2 id="tocS_inbound_wire_transfer_simulation_result">inbound_wire_transfer_simulation_result</h2>
<!-- backwards compatibility -->
<a id="schemainbound_wire_transfer_simulation_result"></a>
<a id="schema_inbound_wire_transfer_simulation_result"></a>
<a id="tocSinbound_wire_transfer_simulation_result"></a>
<a id="tocsinbound_wire_transfer_simulation_result"></a>

```json
{
  "transaction": {
    "account_id": "account_in71c4amph0vgo2qllky",
    "amount": 100,
    "created_at": "2020-01-31T23:59:59Z",
    "currency": "USD",
    "description": "Frederick S. Holmes",
    "id": "transaction_uyrp7fld2ium70oa7oi",
    "route_id": "account_number_v18nkfqm6afpsrvy82b2",
    "route_type": "account_number",
    "source": {
      "category": "inbound_wire_transfer",
      "inbound_wire_transfer": {
        "amount": 100,
        "beneficiary_address_line1": null,
        "beneficiary_address_line2": null,
        "beneficiary_address_line3": null,
        "beneficiary_name": null,
        "beneficiary_reference": null,
        "description": "Inbound wire transfer",
        "input_message_accountability_data": null,
        "originator_address_line1": null,
        "originator_address_line2": null,
        "originator_address_line3": null,
        "originator_name": null,
        "originator_to_beneficiary_information": null,
        "originator_to_beneficiary_information_line1": null,
        "originator_to_beneficiary_information_line2": null,
        "originator_to_beneficiary_information_line3": null,
        "originator_to_beneficiary_information_line4": null
      }
    },
    "type": "transaction"
  },
  "type": "inbound_wire_transfer_simulation_result"
}
```

The results of an inbound Wire Transfer simulation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|transaction|object|true|none|If the Wire Transfer attempt succeeds, this will contain the resulting [Transaction](#transactions) object. The Transaction's `source` will be of `category: inbound_wire_transfer`.|
|type|string|true|none|A constant representing the object's type. For this resource it will always be `inbound_wire_transfer_simulation_result`.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|inbound_wire_transfer_simulation_result|

<h2 id="tocS_limit">limit</h2>
<!-- backwards compatibility -->
<a id="schemalimit"></a>
<a id="schema_limit"></a>
<a id="tocSlimit"></a>
<a id="tocslimit"></a>

```json
{
  "id": "limit_fku42k0qtc8ulsuas38q",
  "interval": "month",
  "metric": "volume",
  "model_id": "account_number_v18nkfqm6afpsrvy82b2",
  "model_type": "account_number",
  "status": "active",
  "type": "limit",
  "value": 0
}
```

You can set limits at the Account, Account Number, or Card level. Limits applied to Accounts will apply to all Account Numbers and Cards in the Account. You can specify any number of Limits and they will all be applied to inbound debits and card authorizations. Volume and count Limits are designed to prevent unauthorized debits.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The Limit identifier.|
|interval|string \| null|true|none|The interval for the metric. This is required if `metric` is `count` or `volume`.|
|metric|string|true|none|The metric for the Limit.|
|model_id|string|true|none|The identifier of the Account Number, Account, or Card the Limit applies to.|
|model_type|string|true|none|The type of the model you wish to associate the Limit with.|
|status|string|true|none|The current status of the Limit.|
|type|string|true|none|A constant representing the object's type. For this resource it will always be `limit`.|
|value|integer|true|none|The value to evaluate the Limit against.|

#### Enumerated Values

|Property|Value|
|---|---|
|interval|transaction|
|interval|day|
|interval|week|
|interval|month|
|interval|year|
|interval|all_time|
|metric|count|
|metric|volume|
|model_type|account|
|model_type|account_number|
|model_type|card|
|status|active|
|status|inactive|
|type|limit|

<h2 id="tocS_limit_list">limit_list</h2>
<!-- backwards compatibility -->
<a id="schemalimit_list"></a>
<a id="schema_limit_list"></a>
<a id="tocSlimit_list"></a>
<a id="tocslimit_list"></a>

```json
{
  "data": [
    {
      "id": "limit_fku42k0qtc8ulsuas38q",
      "interval": "month",
      "metric": "volume",
      "model_id": "account_number_v18nkfqm6afpsrvy82b2",
      "model_type": "account_number",
      "status": "active",
      "type": "limit",
      "value": 0
    }
  ],
  "next_cursor": "v57w5d"
}
```

A list of Limit objects

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[limit](#schemalimit)]|true|none|The contents of the list.|
|next_cursor|string \| null|true|none|A pointer to a place in the list.|

<h2 id="tocS_oauth_connection">oauth_connection</h2>
<!-- backwards compatibility -->
<a id="schemaoauth_connection"></a>
<a id="schema_oauth_connection"></a>
<a id="tocSoauth_connection"></a>
<a id="tocsoauth_connection"></a>

```json
{
  "created_at": "2020-01-31T23:59:59Z",
  "group_id": "group_1g4mhziu6kvrs3vz35um",
  "id": "connection_dauknoksyr4wilz4e6my",
  "status": "active",
  "type": "oauth_connection"
}
```

When a user authorizes your OAuth application, an OAuth Connection object is created.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_at|string(date-time)|true|none|The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) timestamp when the OAuth Connection was created.|
|group_id|string|true|none|The identifier of the Group that has authorized your OAuth application.|
|id|string|true|none|The OAuth Connection's identifier.|
|status|string|true|none|Whether the connection is active.|
|type|string|true|none|A constant representing the object's type. For this resource it will always be `oauth_connection`.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|active|
|status|inactive|
|type|oauth_connection|

<h2 id="tocS_oauth_connection_list">oauth_connection_list</h2>
<!-- backwards compatibility -->
<a id="schemaoauth_connection_list"></a>
<a id="schema_oauth_connection_list"></a>
<a id="tocSoauth_connection_list"></a>
<a id="tocsoauth_connection_list"></a>

```json
{
  "data": [
    {
      "created_at": "2020-01-31T23:59:59Z",
      "group_id": "group_1g4mhziu6kvrs3vz35um",
      "id": "connection_dauknoksyr4wilz4e6my",
      "status": "active",
      "type": "oauth_connection"
    }
  ],
  "next_cursor": "v57w5d"
}
```

A list of OAuth Connection objects

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[oauth_connection](#schemaoauth_connection)]|true|none|The contents of the list.|
|next_cursor|string \| null|true|none|A pointer to a place in the list.|

<h2 id="tocS_pending_transaction">pending_transaction</h2>
<!-- backwards compatibility -->
<a id="schemapending_transaction"></a>
<a id="schema_pending_transaction"></a>
<a id="tocSpending_transaction"></a>
<a id="tocspending_transaction"></a>

```json
{
  "account_id": "account_in71c4amph0vgo2qllky",
  "amount": 100,
  "created_at": "2020-01-31T23:59:59Z",
  "currency": "USD",
  "description": "Frederick S. Holmes",
  "id": "pending_transaction_k1sfetcau2qbvjbzgju4",
  "route_id": "card_route_jk5pd79u6ydmbf9qzu6i",
  "route_type": "transfer_instruction",
  "source": {
    "ach_transfer_instruction": {
      "amount": 100,
      "transfer_id": "ach_transfer_uoxatyh3lt5evrsdvo7q"
    },
    "category": "ach_transfer_instruction"
  },
  "status": "pending",
  "type": "pending_transaction"
}
```

Pending Transactions are potential future additions and removals of money from your bank account.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|string|true|none|The identifier for the account this Pending Transaction belongs to.|
|amount|integer|true|none|The Pending Transaction amount in the minor unit of its currency. For dollars, for example, this is cents.|
|created_at|string(date-time)|true|none|The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date on which the Pending Transaction occured.|
|currency|string|true|none|The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the Pending Transaction's currency. This will match the currency on the Pending Transcation's Account.|
|description|string|true|none|For a Pending Transaction related to a transfer, this is the description you provide. For a Pending Transaction related to a payment, this is the description the vendor provides.|
|id|string|true|none|The Pending Transaction identifier.|
|route_id|string \| null|true|none|The identifier for the route this Pending Transaction came through. Routes are things like cards and ACH details.|
|route_type|string \| null|true|none|The type of the route this Pending Transaction came through.|
|source|object|true|none|This is an object giving more details on the network-level event that caused the Pending Transaction. For example, for a card transaction this lists the merchant's industry and location.|
|status|string|true|none|Whether the Pending Transaction has been confirmed and has an associated Transaction.|
|type|string|true|none|A constant representing the object's type. For this resource it will always be `pending_transaction`.|

#### Enumerated Values

|Property|Value|
|---|---|
|currency|CAD|
|currency|CHF|
|currency|EUR|
|currency|GBP|
|currency|JPY|
|currency|USD|
|status|pending|
|status|complete|
|type|pending_transaction|

<h2 id="tocS_pending_transaction_list">pending_transaction_list</h2>
<!-- backwards compatibility -->
<a id="schemapending_transaction_list"></a>
<a id="schema_pending_transaction_list"></a>
<a id="tocSpending_transaction_list"></a>
<a id="tocspending_transaction_list"></a>

```json
{
  "data": [
    {
      "account_id": "account_in71c4amph0vgo2qllky",
      "amount": 100,
      "created_at": "2020-01-31T23:59:59Z",
      "currency": "USD",
      "description": "Frederick S. Holmes",
      "id": "pending_transaction_k1sfetcau2qbvjbzgju4",
      "route_id": "card_route_jk5pd79u6ydmbf9qzu6i",
      "route_type": "transfer_instruction",
      "source": {
        "ach_transfer_instruction": {
          "amount": 100,
          "transfer_id": "ach_transfer_uoxatyh3lt5evrsdvo7q"
        },
        "category": "ach_transfer_instruction"
      },
      "status": "pending",
      "type": "pending_transaction"
    }
  ],
  "next_cursor": "v57w5d"
}
```

A list of Pending Transaction objects

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[pending_transaction](#schemapending_transaction)]|true|none|The contents of the list.|
|next_cursor|string \| null|true|none|A pointer to a place in the list.|

<h2 id="tocS_real_time_decision">real_time_decision</h2>
<!-- backwards compatibility -->
<a id="schemareal_time_decision"></a>
<a id="schema_real_time_decision"></a>
<a id="tocSreal_time_decision"></a>
<a id="tocsreal_time_decision"></a>

```json
{
  "card_authorization": {
    "account_id": "account_in71c4amph0vgo2qllky",
    "card_id": "card_oubs0hwk5rn6knuecxg2",
    "decision": "approve",
    "merchant_acceptor_id": "5665270011000168",
    "merchant_category_code": "5734",
    "merchant_city": "New York",
    "merchant_country": "US",
    "merchant_descriptor": "AMAZON.COM",
    "network": "visa",
    "network_details": {
      "visa": {
        "electronic_commerce_indicator": "secure_electronic_commerce",
        "point_of_service_entry_mode": "manual"
      }
    },
    "presentment_amount": 100,
    "presentment_currency": "USD",
    "settlement_amount": 100,
    "settlement_currency": "USD"
  },
  "category": "card_authorization_requested",
  "created_at": "2020-01-31T23:59:59Z",
  "digital_wallet_authentication": null,
  "digital_wallet_token": null,
  "id": "real_time_decision_j76n2e810ezcg3zh5qtn",
  "status": "pending",
  "timeout_at": "2020-01-31T23:59:59Z",
  "type": "real_time_decision"
}
```

Real Time Decisions are created when your application needs to take action in real-time to some event such as a card authorization. Real time decisions are currently in beta; please contact support@increase.com if you're interested in trying them out!

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|card_authorization|object \| null|true|none|Fields related to a card authorization.|
|category|string|true|none|The category of the Real-Time Decision.|
|created_at|string(date-time)|true|none|The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which the Real-Time Decision was created.|
|digital_wallet_authentication|object \| null|true|none|Fields related to a digital wallet authentication attempt.|
|digital_wallet_token|object \| null|true|none|Fields related to a digital wallet token provisioning attempt.|
|id|string|true|none|The Real-Time Decision identifier.|
|status|string|true|none|The status of the Real-Time Decision.|
|timeout_at|string(date-time)|true|none|The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which your application can no longer respond to the Real-Time Decision.|
|type|string|true|none|A constant representing the object's type. For this resource it will always be `real_time_decision`.|

#### Enumerated Values

|Property|Value|
|---|---|
|category|card_authorization_requested|
|category|digital_wallet_token_requested|
|category|digital_wallet_authentication_requested|
|status|pending|
|status|responded|
|status|timed_out|
|type|real_time_decision|

<h2 id="tocS_return_a_sandbox_ach_transfer_parameters">return_a_sandbox_ach_transfer_parameters</h2>
<!-- backwards compatibility -->
<a id="schemareturn_a_sandbox_ach_transfer_parameters"></a>
<a id="schema_return_a_sandbox_ach_transfer_parameters"></a>
<a id="tocSreturn_a_sandbox_ach_transfer_parameters"></a>
<a id="tocsreturn_a_sandbox_ach_transfer_parameters"></a>

```json
{}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reason|string|false|none|The reason why the Federal Reserve or destination bank returned this transfer. Defaults to `no_account`.|

#### Enumerated Values

|Property|Value|
|---|---|
|reason|insufficient_fund|
|reason|no_account|
|reason|account_closed|
|reason|invalid_account_number_structure|
|reason|account_frozen_entry_returned_per_ofac_instruction|
|reason|credit_entry_refused_by_receiver|
|reason|unauthorized_debit_to_consumer_account_using_corporate_sec_code|
|reason|corporate_customer_advised_not_authorized|
|reason|payment_stopped|
|reason|non_transaction_account|
|reason|uncollected_funds|
|reason|routing_number_check_digit_error|
|reason|customer_advised_unauthorized_improper_ineligible_or_incomplete|
|reason|amount_field_error|
|reason|authorization_revoked_by_customer|
|reason|invalid_ach_routing_number|
|reason|file_record_edit_criteria|
|reason|enr_invalid_individual_name|
|reason|returned_per_odfi_request|
|reason|addenda_error|
|reason|limited_participation_dfi|
|reason|incorrectly_coded_outbound_international_payment|
|reason|other|

<h2 id="tocS_routing_number">routing_number</h2>
<!-- backwards compatibility -->
<a id="schemarouting_number"></a>
<a id="schema_routing_number"></a>
<a id="tocSrouting_number"></a>
<a id="tocsrouting_number"></a>

```json
{
  "ach_transfers": "supported",
  "name": "Chase",
  "real_time_payments_transfers": "supported",
  "routing_number": "021000021",
  "type": "routing_number",
  "wire_transfers": "supported"
}
```

Routing numbers are used to identify your bank in a financial transaction.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ach_transfers|string|true|none|This routing number's support for ACH Transfers.|
|name|string|true|none|The name of the financial institution belonging to a routing number.|
|real_time_payments_transfers|string|true|none|This routing number's support for Real Time Payments Transfers.|
|routing_number|string|true|none|The nine digit routing number identifier.|
|type|string|true|none|A constant representing the object's type. For this resource it will always be `routing_number`.|
|wire_transfers|string|true|none|This routing number's support for Wire Transfers.|

#### Enumerated Values

|Property|Value|
|---|---|
|ach_transfers|supported|
|ach_transfers|not_supported|
|real_time_payments_transfers|supported|
|real_time_payments_transfers|not_supported|
|type|routing_number|
|wire_transfers|supported|
|wire_transfers|not_supported|

<h2 id="tocS_routing_number_list">routing_number_list</h2>
<!-- backwards compatibility -->
<a id="schemarouting_number_list"></a>
<a id="schema_routing_number_list"></a>
<a id="tocSrouting_number_list"></a>
<a id="tocsrouting_number_list"></a>

```json
{
  "data": [
    {
      "ach_transfers": "supported",
      "name": "Chase",
      "real_time_payments_transfers": "supported",
      "routing_number": "021000021",
      "type": "routing_number",
      "wire_transfers": "supported"
    }
  ],
  "next_cursor": "v57w5d"
}
```

A list of Routing Number objects

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[routing_number](#schemarouting_number)]|true|none|The contents of the list.|
|next_cursor|string \| null|true|none|A pointer to a place in the list.|

<h2 id="tocS_simulate_a_real_time_payments_transfer_to_your_account_parameters">simulate_a_real_time_payments_transfer_to_your_account_parameters</h2>
<!-- backwards compatibility -->
<a id="schemasimulate_a_real_time_payments_transfer_to_your_account_parameters"></a>
<a id="schema_simulate_a_real_time_payments_transfer_to_your_account_parameters"></a>
<a id="tocSsimulate_a_real_time_payments_transfer_to_your_account_parameters"></a>
<a id="tocssimulate_a_real_time_payments_transfer_to_your_account_parameters"></a>

```json
{
  "account_number_id": "account_number_v18nkfqm6afpsrvy82b2",
  "amount": 1000,
  "request_for_payment_id": "real_time_payments_request_for_payment_28kcliz1oevcnqyn9qp7"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_number_id|string|true|none|The identifier of the Account Number the inbound Real Time Payments Transfer is for.|
|amount|integer|true|none|The transfer amount in USD cents. Must be positive.|
|debtor_account_number|string|false|none|The account number of the account that sent the transfer.|
|debtor_name|string|false|none|The name provided by the sender of the transfer.|
|debtor_routing_number|string|false|none|The routing number of the account that sent the transfer.|
|remittance_information|string|false|none|Additional information included with the transfer.|
|request_for_payment_id|string|false|none|The identifier of a pending Request for Payment that this transfer will fulfill.|

<h2 id="tocS_simulate_a_refund_on_a_card_parameters">simulate_a_refund_on_a_card_parameters</h2>
<!-- backwards compatibility -->
<a id="schemasimulate_a_refund_on_a_card_parameters"></a>
<a id="schema_simulate_a_refund_on_a_card_parameters"></a>
<a id="tocSsimulate_a_refund_on_a_card_parameters"></a>
<a id="tocssimulate_a_refund_on_a_card_parameters"></a>

```json
{
  "transaction_id": "transaction_uyrp7fld2ium70oa7oi"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|transaction_id|string|true|none|The identifier for the Transaction to refund. The Transaction's source must have a category of card_settlement.|

<h2 id="tocS_simulate_a_tax_document_being_created_parameters">simulate_a_tax_document_being_created_parameters</h2>
<!-- backwards compatibility -->
<a id="schemasimulate_a_tax_document_being_created_parameters"></a>
<a id="schema_simulate_a_tax_document_being_created_parameters"></a>
<a id="tocSsimulate_a_tax_document_being_created_parameters"></a>
<a id="tocssimulate_a_tax_document_being_created_parameters"></a>

```json
{
  "account_id": "account_in71c4amph0vgo2qllky"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|string|true|none|The identifier of the Account the tax document is for.|

<h2 id="tocS_simulate_a_wire_transfer_to_your_account_parameters">simulate_a_wire_transfer_to_your_account_parameters</h2>
<!-- backwards compatibility -->
<a id="schemasimulate_a_wire_transfer_to_your_account_parameters"></a>
<a id="schema_simulate_a_wire_transfer_to_your_account_parameters"></a>
<a id="tocSsimulate_a_wire_transfer_to_your_account_parameters"></a>
<a id="tocssimulate_a_wire_transfer_to_your_account_parameters"></a>

```json
{
  "account_number_id": "account_number_v18nkfqm6afpsrvy82b2",
  "amount": 1000
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_number_id|string|true|none|The identifier of the Account Number the inbound Wire Transfer is for.|
|amount|integer|true|none|The transfer amount in cents. Must be positive.|
|beneficiary_address_line1|string|false|none|The sending bank will set beneficiary_address_line1 in production. You can simulate any value here.|
|beneficiary_address_line2|string|false|none|The sending bank will set beneficiary_address_line2 in production. You can simulate any value here.|
|beneficiary_address_line3|string|false|none|The sending bank will set beneficiary_address_line3 in production. You can simulate any value here.|
|beneficiary_name|string|false|none|The sending bank will set beneficiary_name in production. You can simulate any value here.|
|beneficiary_reference|string|false|none|The sending bank will set beneficiary_reference in production. You can simulate any value here.|
|originator_address_line1|string|false|none|The sending bank will set originator_address_line1 in production. You can simulate any value here.|
|originator_address_line2|string|false|none|The sending bank will set originator_address_line2 in production. You can simulate any value here.|
|originator_address_line3|string|false|none|The sending bank will set originator_address_line3 in production. You can simulate any value here.|
|originator_name|string|false|none|The sending bank will set originator_name in production. You can simulate any value here.|
|originator_to_beneficiary_information_line1|string|false|none|The sending bank will set originator_to_beneficiary_information_line1 in production. You can simulate any value here.|
|originator_to_beneficiary_information_line2|string|false|none|The sending bank will set originator_to_beneficiary_information_line2 in production. You can simulate any value here.|
|originator_to_beneficiary_information_line3|string|false|none|The sending bank will set originator_to_beneficiary_information_line3 in production. You can simulate any value here.|
|originator_to_beneficiary_information_line4|string|false|none|The sending bank will set originator_to_beneficiary_information_line4 in production. You can simulate any value here.|

<h2 id="tocS_simulate_an_account_statement_being_created_parameters">simulate_an_account_statement_being_created_parameters</h2>
<!-- backwards compatibility -->
<a id="schemasimulate_an_account_statement_being_created_parameters"></a>
<a id="schema_simulate_an_account_statement_being_created_parameters"></a>
<a id="tocSsimulate_an_account_statement_being_created_parameters"></a>
<a id="tocssimulate_an_account_statement_being_created_parameters"></a>

```json
{
  "account_id": "account_in71c4amph0vgo2qllky"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|string|true|none|The identifier of the Account the statement is for.|

<h2 id="tocS_simulate_an_ach_transfer_to_your_account_parameters">simulate_an_ach_transfer_to_your_account_parameters</h2>
<!-- backwards compatibility -->
<a id="schemasimulate_an_ach_transfer_to_your_account_parameters"></a>
<a id="schema_simulate_an_ach_transfer_to_your_account_parameters"></a>
<a id="tocSsimulate_an_ach_transfer_to_your_account_parameters"></a>
<a id="tocssimulate_an_ach_transfer_to_your_account_parameters"></a>

```json
{
  "account_number_id": "account_number_v18nkfqm6afpsrvy82b2",
  "amount": 1000
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_number_id|string|true|none|The identifier of the Account Number the inbound ACH Transfer is for.|
|amount|integer|true|none|The transfer amount in cents. A positive amount originates a credit transfer pushing funds to the receiving account. A negative amount originates a debit transfer pulling funds from the receiving account.|
|company_descriptive_date|string|false|none|The description of the date of the transfer.|
|company_discretionary_data|string|false|none|Data associated with the transfer set by the sender.|
|company_entry_description|string|false|none|The description of the transfer set by the sender.|
|company_id|string|false|none|The sender's company id.|
|company_name|string|false|none|The name of the sender.|

<h2 id="tocS_simulate_an_authorization_on_a_card_parameters">simulate_an_authorization_on_a_card_parameters</h2>
<!-- backwards compatibility -->
<a id="schemasimulate_an_authorization_on_a_card_parameters"></a>
<a id="schema_simulate_an_authorization_on_a_card_parameters"></a>
<a id="tocSsimulate_an_authorization_on_a_card_parameters"></a>
<a id="tocssimulate_an_authorization_on_a_card_parameters"></a>

```json
{
  "amount": 1000,
  "card_id": "card_oubs0hwk5rn6knuecxg2"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|integer|true|none|The authorization amount in cents.|
|card_id|string|false|none|The identifier of the Card to be authorized.|
|digital_wallet_token_id|string|false|none|The identifier of the Digital Wallet Token to be authorized.|

<h2 id="tocS_simulate_an_inbound_wire_drawdown_request_being_created_parameters">simulate_an_inbound_wire_drawdown_request_being_created_parameters</h2>
<!-- backwards compatibility -->
<a id="schemasimulate_an_inbound_wire_drawdown_request_being_created_parameters"></a>
<a id="schema_simulate_an_inbound_wire_drawdown_request_being_created_parameters"></a>
<a id="tocSsimulate_an_inbound_wire_drawdown_request_being_created_parameters"></a>
<a id="tocssimulate_an_inbound_wire_drawdown_request_being_created_parameters"></a>

```json
{
  "amount": 10000,
  "beneficiary_account_number": "987654321",
  "beneficiary_address_line1": "33 Liberty Street",
  "beneficiary_address_line2": "New York, NY, 10045",
  "beneficiary_name": "Ian Crease",
  "beneficiary_routing_number": "101050001",
  "currency": "USD",
  "message_to_recipient": "Invoice 29582",
  "originator_account_number": "987654321",
  "originator_address_line1": "33 Liberty Street",
  "originator_address_line2": "New York, NY, 10045",
  "originator_name": "Ian Crease",
  "originator_routing_number": "101050001",
  "recipient_account_number_id": "account_number_v18nkfqm6afpsrvy82b2"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|integer|true|none|The amount being requested in cents.|
|beneficiary_account_number|string|true|none|The drawdown request's beneficiary's account number.|
|beneficiary_address_line1|string|false|none|Line 1 of the drawdown request's beneficiary's address.|
|beneficiary_address_line2|string|false|none|Line 2 of the drawdown request's beneficiary's address.|
|beneficiary_address_line3|string|false|none|Line 3 of the drawdown request's beneficiary's address.|
|beneficiary_name|string|false|none|The drawdown request's beneficiary's name.|
|beneficiary_routing_number|string|true|none|The drawdown request's beneficiary's routing number.|
|currency|string|true|none|The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the amount being requested. Will always be "USD".|
|message_to_recipient|string|true|none|A message from the drawdown request's originator.|
|originator_account_number|string|true|none|The drawdown request's originator's account number.|
|originator_address_line1|string|false|none|Line 1 of the drawdown request's originator's address.|
|originator_address_line2|string|false|none|Line 2 of the drawdown request's originator's address.|
|originator_address_line3|string|false|none|Line 3 of the drawdown request's originator's address.|
|originator_name|string|false|none|The drawdown request's originator's name.|
|originator_routing_number|string|true|none|The drawdown request's originator's routing number.|
|originator_to_beneficiary_information_line1|string|false|none|Line 1 of the information conveyed from the originator of the message to the beneficiary.|
|originator_to_beneficiary_information_line2|string|false|none|Line 2 of the information conveyed from the originator of the message to the beneficiary.|
|originator_to_beneficiary_information_line3|string|false|none|Line 3 of the information conveyed from the originator of the message to the beneficiary.|
|originator_to_beneficiary_information_line4|string|false|none|Line 4 of the information conveyed from the originator of the message to the beneficiary.|
|recipient_account_number_id|string|true|none|The Account Number to which the recipient of this request is being requested to send funds from.|

<h2 id="tocS_simulate_digital_wallet_provisioning_for_a_card_parameters">simulate_digital_wallet_provisioning_for_a_card_parameters</h2>
<!-- backwards compatibility -->
<a id="schemasimulate_digital_wallet_provisioning_for_a_card_parameters"></a>
<a id="schema_simulate_digital_wallet_provisioning_for_a_card_parameters"></a>
<a id="tocSsimulate_digital_wallet_provisioning_for_a_card_parameters"></a>
<a id="tocssimulate_digital_wallet_provisioning_for_a_card_parameters"></a>

```json
{
  "card_id": "card_oubs0hwk5rn6knuecxg2"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|card_id|string|true|none|The identifier of the Card to be authorized.|

<h2 id="tocS_simulate_settling_a_card_authorization_parameters">simulate_settling_a_card_authorization_parameters</h2>
<!-- backwards compatibility -->
<a id="schemasimulate_settling_a_card_authorization_parameters"></a>
<a id="schema_simulate_settling_a_card_authorization_parameters"></a>
<a id="tocSsimulate_settling_a_card_authorization_parameters"></a>
<a id="tocssimulate_settling_a_card_authorization_parameters"></a>

```json
{
  "card_id": "card_oubs0hwk5rn6knuecxg2",
  "pending_transaction_id": "pending_transaction_k1sfetcau2qbvjbzgju4"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|integer|false|none|The amount to be settled. This defaults to the amount of the Pending Transaction being settled.|
|card_id|string|true|none|The identifier of the Card to create a settlement on.|
|pending_transaction_id|string|true|none|The identifier of the Pending Transaction for the Card Authorization you wish to settle.|

<h2 id="tocS_simulates_advancing_the_state_of_a_card_dispute_parameters">simulates_advancing_the_state_of_a_card_dispute_parameters</h2>
<!-- backwards compatibility -->
<a id="schemasimulates_advancing_the_state_of_a_card_dispute_parameters"></a>
<a id="schema_simulates_advancing_the_state_of_a_card_dispute_parameters"></a>
<a id="tocSsimulates_advancing_the_state_of_a_card_dispute_parameters"></a>
<a id="tocssimulates_advancing_the_state_of_a_card_dispute_parameters"></a>

```json
{
  "explanation": "This was a valid recurring transaction",
  "status": "rejected"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|explanation|string|false|none|Why the dispute was rejected. Not required for accepting disputes.|
|status|string|true|none|The status to move the dispute to.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|accepted|
|status|rejected|

<h2 id="tocS_transaction">transaction</h2>
<!-- backwards compatibility -->
<a id="schematransaction"></a>
<a id="schema_transaction"></a>
<a id="tocStransaction"></a>
<a id="tocstransaction"></a>

```json
{
  "account_id": "account_in71c4amph0vgo2qllky",
  "amount": 100,
  "created_at": "2020-01-31T23:59:59Z",
  "currency": "USD",
  "description": "Frederick S. Holmes",
  "id": "transaction_uyrp7fld2ium70oa7oi",
  "route_id": "account_number_v18nkfqm6afpsrvy82b2",
  "route_type": "account_number",
  "source": {
    "category": "inbound_ach_transfer",
    "inbound_ach_transfer": {
      "amount": 100,
      "originator_company_descriptive_date": null,
      "originator_company_discretionary_data": null,
      "originator_company_entry_description": "RESERVE",
      "originator_company_id": "0987654321",
      "originator_company_name": "BIG BANK",
      "receiver_id_number": "12345678900",
      "receiver_name": "IAN CREASE",
      "trace_number": "021000038461022"
    }
  },
  "type": "transaction"
}
```

Transactions are the immutable additions and removals of money from your bank account. They're the equivalent of line items on your bank statement.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|string|true|none|The identifier for the Account the Transaction belongs to.|
|amount|integer|true|none|The Transaction amount in the minor unit of its currency. For dollars, for example, this is cents.|
|created_at|string(date-time)|true|none|The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date on which the Transaction occured.|
|currency|string|true|none|The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the Transaction's currency. This will match the currency on the Transcation's Account.|
|description|string|true|none|For a Transaction related to a transfer, this is the description you provide. For a Transaction related to a payment, this is the description the vendor provides.|
|id|string|true|none|The Transaction identifier.|
|route_id|string \| null|true|none|The identifier for the route this Transaction came through. Routes are things like cards and ACH details.|
|route_type|string \| null|true|none|The type of the route this Transaction came through.|
|source|object|true|none|This is an object giving more details on the network-level event that caused the Transaction. Note that for backwards compatibility reasons, additional undocumented keys may appear in this object. These should be treated as deprecated and will be removed in the future.|
|type|string|true|none|A constant representing the object's type. For this resource it will always be `transaction`.|

#### Enumerated Values

|Property|Value|
|---|---|
|currency|CAD|
|currency|CHF|
|currency|EUR|
|currency|GBP|
|currency|JPY|
|currency|USD|
|type|transaction|

<h2 id="tocS_transaction_list">transaction_list</h2>
<!-- backwards compatibility -->
<a id="schematransaction_list"></a>
<a id="schema_transaction_list"></a>
<a id="tocStransaction_list"></a>
<a id="tocstransaction_list"></a>

```json
{
  "data": [
    {
      "account_id": "account_in71c4amph0vgo2qllky",
      "amount": 100,
      "created_at": "2020-01-31T23:59:59Z",
      "currency": "USD",
      "description": "Frederick S. Holmes",
      "id": "transaction_uyrp7fld2ium70oa7oi",
      "route_id": "account_number_v18nkfqm6afpsrvy82b2",
      "route_type": "account_number",
      "source": {
        "category": "inbound_ach_transfer",
        "inbound_ach_transfer": {
          "amount": 100,
          "originator_company_descriptive_date": null,
          "originator_company_discretionary_data": null,
          "originator_company_entry_description": "RESERVE",
          "originator_company_id": "0987654321",
          "originator_company_name": "BIG BANK",
          "receiver_id_number": "12345678900",
          "receiver_name": "IAN CREASE",
          "trace_number": "021000038461022"
        }
      },
      "type": "transaction"
    }
  ],
  "next_cursor": "v57w5d"
}
```

A list of Transaction objects

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[transaction](#schematransaction)]|true|none|The contents of the list.|
|next_cursor|string \| null|true|none|A pointer to a place in the list.|

<h2 id="tocS_update_a_card_parameters">update_a_card_parameters</h2>
<!-- backwards compatibility -->
<a id="schemaupdate_a_card_parameters"></a>
<a id="schema_update_a_card_parameters"></a>
<a id="tocSupdate_a_card_parameters"></a>
<a id="tocsupdate_a_card_parameters"></a>

```json
{
  "description": "New description"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billing_address|object|false|none|The card's updated billing address.|
|description|string|false|none|The description you choose to give the card.|
|digital_wallet|object|false|none|The contact information used in the two-factor steps for digital wallet card creation. At least one field must be present to complete the digital wallet steps.|
|status|string|false|none|The status to update the Card with.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|active|
|status|disabled|
|status|canceled|

<h2 id="tocS_update_a_limit_parameters">update_a_limit_parameters</h2>
<!-- backwards compatibility -->
<a id="schemaupdate_a_limit_parameters"></a>
<a id="schema_update_a_limit_parameters"></a>
<a id="tocSupdate_a_limit_parameters"></a>
<a id="tocsupdate_a_limit_parameters"></a>

```json
{
  "status": "inactive"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|The status to update the limit with.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|inactive|
|status|active|

<h2 id="tocS_update_an_account_number_parameters">update_an_account_number_parameters</h2>
<!-- backwards compatibility -->
<a id="schemaupdate_an_account_number_parameters"></a>
<a id="schema_update_an_account_number_parameters"></a>
<a id="tocSupdate_an_account_number_parameters"></a>
<a id="tocsupdate_an_account_number_parameters"></a>

```json
{
  "status": "disabled"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The name you choose for the Account Number.|
|status|string|false|none|This indicates if transfers can be made to the Account Number.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|active|
|status|disabled|
|status|canceled|

<h2 id="tocS_update_an_account_parameters">update_an_account_parameters</h2>
<!-- backwards compatibility -->
<a id="schemaupdate_an_account_parameters"></a>
<a id="schema_update_an_account_parameters"></a>
<a id="tocSupdate_an_account_parameters"></a>
<a id="tocsupdate_an_account_parameters"></a>

```json
{
  "name": "My renamed account"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The new name of the Account.|

<h2 id="tocS_update_an_event_subscription_parameters">update_an_event_subscription_parameters</h2>
<!-- backwards compatibility -->
<a id="schemaupdate_an_event_subscription_parameters"></a>
<a id="schema_update_an_event_subscription_parameters"></a>
<a id="tocSupdate_an_event_subscription_parameters"></a>
<a id="tocsupdate_an_event_subscription_parameters"></a>

```json
{}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|false|none|The status to update the Event Subscription with.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|active|
|status|disabled|
|status|deleted|

<h2 id="tocS_update_an_external_account_parameters">update_an_external_account_parameters</h2>
<!-- backwards compatibility -->
<a id="schemaupdate_an_external_account_parameters"></a>
<a id="schema_update_an_external_account_parameters"></a>
<a id="tocSupdate_an_external_account_parameters"></a>
<a id="tocsupdate_an_external_account_parameters"></a>

```json
{
  "description": "New description"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|The description you choose to give the external account.|
|status|string|false|none|The status of the External Account.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|active|
|status|archived|

<h2 id="tocS_wire_drawdown_request">wire_drawdown_request</h2>
<!-- backwards compatibility -->
<a id="schemawire_drawdown_request"></a>
<a id="schema_wire_drawdown_request"></a>
<a id="tocSwire_drawdown_request"></a>
<a id="tocswire_drawdown_request"></a>

```json
{
  "account_number_id": "account_number_v18nkfqm6afpsrvy82b2",
  "amount": 10000,
  "currency": "USD",
  "fulfillment_transaction_id": "transaction_uyrp7fld2ium70oa7oi",
  "id": "wire_drawdown_request_q6lmocus3glo0lr2bfv3",
  "message_to_recipient": "Invoice 29582",
  "recipient_account_number": "987654321",
  "recipient_address_line1": "33 Liberty Street",
  "recipient_address_line2": "New York, NY, 10045",
  "recipient_address_line3": null,
  "recipient_name": "Ian Crease",
  "recipient_routing_number": "101050001",
  "status": "fulfilled",
  "submission": {
    "input_message_accountability_data": "20220118MMQFMP0P000003"
  },
  "type": "wire_drawdown_request"
}
```

Wire drawdown requests enable you to request that someone else send you a wire. This feature is in beta; reach out to [support@increase.com](mailto:support@increase.com) to learn more.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_number_id|string|true|none|The Account Number to which the recipient of this request is being requested to send funds.|
|amount|integer|true|none|The amount being requested in cents.|
|currency|string|true|none|The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the amount being requested. Will always be "USD".|
|fulfillment_transaction_id|string \| null|true|none|If the recipient fulfills the drawdown request by sending funds, then this will be the identifier of the corresponding Transaction.|
|id|string|true|none|The Wire drawdown request identifier.|
|message_to_recipient|string|true|none|The message the recipient will see as part of the drawdown request.|
|recipient_account_number|string|true|none|The drawdown request's recipient's account number.|
|recipient_address_line1|string \| null|true|none|Line 1 of the drawdown request's recipient's address.|
|recipient_address_line2|string \| null|true|none|Line 2 of the drawdown request's recipient's address.|
|recipient_address_line3|string \| null|true|none|Line 3 of the drawdown request's recipient's address.|
|recipient_name|string \| null|true|none|The drawdown request's recipient's name.|
|recipient_routing_number|string|true|none|The drawdown request's recipient's routing number.|
|status|string|true|none|The lifecycle status of the drawdown request.|
|submission|object \| null|true|none|After the drawdown request is submitted to Fedwire, this will contain supplemental details.|
|type|string|true|none|A constant representing the object's type. For this resource it will always be `wire_drawdown_request`.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|pending_submission|
|status|pending_response|
|status|fulfilled|
|status|refused|
|type|wire_drawdown_request|

<h2 id="tocS_wire_drawdown_request_list">wire_drawdown_request_list</h2>
<!-- backwards compatibility -->
<a id="schemawire_drawdown_request_list"></a>
<a id="schema_wire_drawdown_request_list"></a>
<a id="tocSwire_drawdown_request_list"></a>
<a id="tocswire_drawdown_request_list"></a>

```json
{
  "data": [
    {
      "account_number_id": "account_number_v18nkfqm6afpsrvy82b2",
      "amount": 10000,
      "currency": "USD",
      "fulfillment_transaction_id": "transaction_uyrp7fld2ium70oa7oi",
      "id": "wire_drawdown_request_q6lmocus3glo0lr2bfv3",
      "message_to_recipient": "Invoice 29582",
      "recipient_account_number": "987654321",
      "recipient_address_line1": "33 Liberty Street",
      "recipient_address_line2": "New York, NY, 10045",
      "recipient_address_line3": null,
      "recipient_name": "Ian Crease",
      "recipient_routing_number": "101050001",
      "status": "fulfilled",
      "submission": {
        "input_message_accountability_data": "20220118MMQFMP0P000003"
      },
      "type": "wire_drawdown_request"
    }
  ],
  "next_cursor": "v57w5d"
}
```

A list of Wire Drawdown Request objects

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[wire_drawdown_request](#schemawire_drawdown_request)]|true|none|The contents of the list.|
|next_cursor|string \| null|true|none|A pointer to a place in the list.|

<h2 id="tocS_wire_transfer">wire_transfer</h2>
<!-- backwards compatibility -->
<a id="schemawire_transfer"></a>
<a id="schema_wire_transfer"></a>
<a id="tocSwire_transfer"></a>
<a id="tocswire_transfer"></a>

```json
{
  "account_id": "account_in71c4amph0vgo2qllky",
  "account_number": "987654321",
  "amount": 100,
  "approval": {
    "approved_at": "2020-01-31T23:59:59Z"
  },
  "beneficiary_address_line1": null,
  "beneficiary_address_line2": null,
  "beneficiary_address_line3": null,
  "beneficiary_financial_institution_address_line1": null,
  "beneficiary_financial_institution_address_line2": null,
  "beneficiary_financial_institution_address_line3": null,
  "beneficiary_financial_institution_identifier": null,
  "beneficiary_financial_institution_identifier_type": null,
  "beneficiary_financial_institution_name": null,
  "beneficiary_name": null,
  "cancellation": null,
  "created_at": "2020-01-31T23:59:59Z",
  "currency": "USD",
  "external_account_id": "external_account_ukk55lr923a3ac0pp7iv",
  "id": "wire_transfer_5akynk7dqsq25qwk9q2u",
  "message_to_recipient": "Message to recipient",
  "network": "wire",
  "reversal": null,
  "routing_number": "101050001",
  "status": "complete",
  "submission": null,
  "template_id": "wire_transfer_template_1brjk98vuwdd2er5o5sy",
  "transaction_id": "transaction_uyrp7fld2ium70oa7oi",
  "type": "wire_transfer"
}
```

Wire transfers move funds between your Increase account and any other account accessible by Fedwire.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|string|true|none|The Account to which the transfer belongs.|
|account_number|string|true|none|The destination account number.|
|amount|integer|true|none|The transfer amount in USD cents.|
|approval|object \| null|true|none|If your account requires approvals for transfers and the transfer was approved, this will contain details of the approval.|
|beneficiary_address_line1|string \| null|true|none|The beneficiary's address line 1.|
|beneficiary_address_line2|string \| null|true|none|The beneficiary's address line 2.|
|beneficiary_address_line3|string \| null|true|none|The beneficiary's address line 3.|
|beneficiary_name|string \| null|true|none|The beneficiary's name.|
|cancellation|object \| null|true|none|If your account requires approvals for transfers and the transfer was not approved, this will contain details of the cancellation.|
|created_at|string(date-time)|true|none|The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which the transfer was created.|
|currency|string|true|none|The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the transfer's currency. For wire transfers this is always equal to `usd`.|
|external_account_id|string \| null|true|none|The identifier of the External Account the transfer was made to, if any.|
|id|string|true|none|The wire transfer's identifier.|
|message_to_recipient|string \| null|true|none|The message that will show on the recipient's bank statement.|
|network|string|true|none|The transfer's network.|
|reversal|object \| null|true|none|If your transfer is reversed, this will contain details of the reversal.|
|routing_number|string|true|none|The American Bankers' Association (ABA) Routing Transit Number (RTN).|
|status|string|true|none|The lifecycle status of the transfer.|
|submission|object \| null|true|none|After the transfer is submitted to Fedwire, this will contain supplemental details.|
|template_id|string \| null|true|none|If the transfer was created from a template, this will be the template's ID.|
|transaction_id|string \| null|true|none|The ID for the transaction funding the transfer.|
|type|string|true|none|A constant representing the object's type. For this resource it will always be `wire_transfer`.|

#### Enumerated Values

|Property|Value|
|---|---|
|currency|CAD|
|currency|CHF|
|currency|EUR|
|currency|GBP|
|currency|JPY|
|currency|USD|
|network|wire|
|status|canceled|
|status|requires_attention|
|status|pending_approval|
|status|rejected|
|status|reversed|
|status|complete|
|status|pending_creating|
|type|wire_transfer|

<h2 id="tocS_wire_transfer_list">wire_transfer_list</h2>
<!-- backwards compatibility -->
<a id="schemawire_transfer_list"></a>
<a id="schema_wire_transfer_list"></a>
<a id="tocSwire_transfer_list"></a>
<a id="tocswire_transfer_list"></a>

```json
{
  "data": [
    {
      "account_id": "account_in71c4amph0vgo2qllky",
      "account_number": "987654321",
      "amount": 100,
      "approval": {
        "approved_at": "2020-01-31T23:59:59Z"
      },
      "beneficiary_address_line1": null,
      "beneficiary_address_line2": null,
      "beneficiary_address_line3": null,
      "beneficiary_financial_institution_address_line1": null,
      "beneficiary_financial_institution_address_line2": null,
      "beneficiary_financial_institution_address_line3": null,
      "beneficiary_financial_institution_identifier": null,
      "beneficiary_financial_institution_identifier_type": null,
      "beneficiary_financial_institution_name": null,
      "beneficiary_name": null,
      "cancellation": null,
      "created_at": "2020-01-31T23:59:59Z",
      "currency": "USD",
      "external_account_id": "external_account_ukk55lr923a3ac0pp7iv",
      "id": "wire_transfer_5akynk7dqsq25qwk9q2u",
      "message_to_recipient": "Message to recipient",
      "network": "wire",
      "reversal": null,
      "routing_number": "101050001",
      "status": "complete",
      "submission": null,
      "template_id": "wire_transfer_template_1brjk98vuwdd2er5o5sy",
      "transaction_id": "transaction_uyrp7fld2ium70oa7oi",
      "type": "wire_transfer"
    }
  ],
  "next_cursor": "v57w5d"
}
```

A list of Wire Transfer objects

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[wire_transfer](#schemawire_transfer)]|true|none|The contents of the list.|
|next_cursor|string \| null|true|none|A pointer to a place in the list.|
