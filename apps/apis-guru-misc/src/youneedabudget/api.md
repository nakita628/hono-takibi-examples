<h1 id="ynab-api-endpoints">YNAB API Endpoints v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Our API uses a REST based design, leverages the JSON data format, and relies upon HTTPS for transport. We respond with meaningful HTTP response codes and if an error occurs, we include error details in the response body.  API Documentation is at https://api.youneedabudget.com

Base URLs:

* <a href="https://api.youneedabudget.com/v1">https://api.youneedabudget.com/v1</a>

# Authentication

* API Key (bearer)
    - Parameter Name: **Authorization**, in: header.

<h1 id="ynab-api-endpoints-user">User</h1>

## User info

<a id="opIdgetUser"></a>

> Code samples

```bash
curl https://example.com/user \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /user`

Returns authenticated user information

> Example responses

> 200 Response

```json
{
  "data": {
    "user": {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  }
}
```

> default Response

```json
{
  "error": {
    "detail": "string",
    "id": "string",
    "name": "string"
  }
}
```

<h3 id="user-info-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The user info|[UserResponse](#schemauserresponse)|
|default|Default|An error occurred|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

<h1 id="ynab-api-endpoints-budgets">Budgets</h1>

## List budgets

<a id="opIdgetBudgets"></a>

> Code samples

```bash
curl https://example.com/budgets \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /budgets`

Returns budgets list with summary information

<h3 id="list-budgets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|include_accounts|query|boolean|false|Whether to include the list of budget accounts|

> Example responses

> 200 Response

```json
{
  "data": {
    "budgets": [
      {
        "accounts": [
          {
            "balance": 0,
            "cleared_balance": 0,
            "closed": true,
            "debt_escrow_amounts": {
              "property1": 0,
              "property2": 0
            },
            "debt_interest_rates": {
              "property1": 0,
              "property2": 0
            },
            "debt_minimum_payments": {
              "property1": 0,
              "property2": 0
            },
            "debt_original_balance": 0,
            "deleted": true,
            "direct_import_in_error": true,
            "direct_import_linked": true,
            "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "last_reconciled_at": "1970-01-01T00:00:00Z",
            "name": "string",
            "note": "string",
            "on_budget": true,
            "transfer_payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "type": "checking",
            "uncleared_balance": 0
          }
        ],
        "currency_format": {
          "currency_symbol": "string",
          "decimal_digits": 0,
          "decimal_separator": "string",
          "display_symbol": true,
          "example_format": "string",
          "group_separator": "string",
          "iso_code": "string",
          "symbol_first": true
        },
        "date_format": {
          "format": "string"
        },
        "first_month": "1970-01-01",
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "last_modified_on": "1970-01-01T00:00:00Z",
        "last_month": "1970-01-01",
        "name": "string"
      }
    ],
    "default_budget": {
      "accounts": [
        {
          "balance": 0,
          "cleared_balance": 0,
          "closed": true,
          "debt_escrow_amounts": {
            "property1": 0,
            "property2": 0
          },
          "debt_interest_rates": {
            "property1": 0,
            "property2": 0
          },
          "debt_minimum_payments": {
            "property1": 0,
            "property2": 0
          },
          "debt_original_balance": 0,
          "deleted": true,
          "direct_import_in_error": true,
          "direct_import_linked": true,
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "last_reconciled_at": "1970-01-01T00:00:00Z",
          "name": "string",
          "note": "string",
          "on_budget": true,
          "transfer_payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "type": "checking",
          "uncleared_balance": 0
        }
      ],
      "currency_format": {
        "currency_symbol": "string",
        "decimal_digits": 0,
        "decimal_separator": "string",
        "display_symbol": true,
        "example_format": "string",
        "group_separator": "string",
        "iso_code": "string",
        "symbol_first": true
      },
      "date_format": {
        "format": "string"
      },
      "first_month": "1970-01-01",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "last_modified_on": "1970-01-01T00:00:00Z",
      "last_month": "1970-01-01",
      "name": "string"
    }
  }
}
```

> 404 Response

```json
{
  "error": {
    "detail": "string",
    "id": "string",
    "name": "string"
  }
}
```

> default Response

```json
{
  "error": {
    "detail": "string",
    "id": "string",
    "name": "string"
  }
}
```

<h3 id="list-budgets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The list of budgets|[BudgetSummaryResponse](#schemabudgetsummaryresponse)|
|404|Not Found|No budgets were found|[ErrorResponse](#schemaerrorresponse)|
|default|Default|An error occurred|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Single budget

<a id="opIdgetBudgetById"></a>

> Code samples

```bash
curl https://example.com/budgets/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /budgets/{budget_id}`

Returns a single budget with all related entities.  This resource is effectively a full budget export.

<h3 id="single-budget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|budget_id|path|string|true|The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget).|
|last_knowledge_of_server|query|integer(int64)|false|The starting server knowledge.  If provided, only entities that have changed since `last_knowledge_of_server` will be included.|

> Example responses

> 200 Response

```json
{
  "data": {
    "budget": {
      "accounts": [
        {
          "balance": 0,
          "cleared_balance": 0,
          "closed": true,
          "debt_escrow_amounts": {
            "property1": 0,
            "property2": 0
          },
          "debt_interest_rates": {
            "property1": 0,
            "property2": 0
          },
          "debt_minimum_payments": {
            "property1": 0,
            "property2": 0
          },
          "debt_original_balance": 0,
          "deleted": true,
          "direct_import_in_error": true,
          "direct_import_linked": true,
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "last_reconciled_at": "1970-01-01T00:00:00Z",
          "name": "string",
          "note": "string",
          "on_budget": true,
          "transfer_payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "type": "checking",
          "uncleared_balance": 0
        }
      ],
      "currency_format": {
        "currency_symbol": "string",
        "decimal_digits": 0,
        "decimal_separator": "string",
        "display_symbol": true,
        "example_format": "string",
        "group_separator": "string",
        "iso_code": "string",
        "symbol_first": true
      },
      "date_format": {
        "format": "string"
      },
      "first_month": "1970-01-01",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "last_modified_on": "1970-01-01T00:00:00Z",
      "last_month": "1970-01-01",
      "name": "string",
      "categories": [
        {
          "activity": 0,
          "balance": 0,
          "budgeted": 0,
          "category_group_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "deleted": true,
          "goal_cadence": 0,
          "goal_cadence_frequency": 0,
          "goal_creation_month": "1970-01-01",
          "goal_day": 0,
          "goal_months_to_budget": 0,
          "goal_overall_funded": 0,
          "goal_overall_left": 0,
          "goal_percentage_complete": 0,
          "goal_target": 0,
          "goal_target_month": "1970-01-01",
          "goal_type": "TB",
          "goal_under_funded": 0,
          "hidden": true,
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "name": "string",
          "note": "string",
          "original_category_group_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
        }
      ],
      "category_groups": [
        {
          "deleted": true,
          "hidden": true,
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "name": "string"
        }
      ],
      "months": [
        {
          "activity": 0,
          "age_of_money": 0,
          "budgeted": 0,
          "deleted": true,
          "income": 0,
          "month": "1970-01-01",
          "note": "string",
          "to_be_budgeted": 0,
          "categories": [
            {
              "activity": 0,
              "balance": 0,
              "budgeted": 0,
              "category_group_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
              "deleted": true,
              "goal_cadence": 0,
              "goal_cadence_frequency": 0,
              "goal_creation_month": "1970-01-01",
              "goal_day": 0,
              "goal_months_to_budget": 0,
              "goal_overall_funded": 0,
              "goal_overall_left": 0,
              "goal_percentage_complete": 0,
              "goal_target": 0,
              "goal_target_month": "1970-01-01",
              "goal_type": "TB",
              "goal_under_funded": 0,
              "hidden": true,
              "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
              "name": "string",
              "note": "string",
              "original_category_group_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
            }
          ]
        }
      ],
      "payee_locations": [
        {
          "deleted": true,
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "latitude": "string",
          "longitude": "string",
          "payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
        }
      ],
      "payees": [
        {
          "deleted": true,
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "name": "string",
          "transfer_account_id": "string"
        }
      ],
      "scheduled_subtransactions": [
        {
          "amount": 0,
          "category_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "deleted": true,
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "memo": "string",
          "payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "scheduled_transaction_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "transfer_account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
        }
      ],
      "scheduled_transactions": [
        {
          "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "amount": 0,
          "category_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "date_first": "1970-01-01",
          "date_next": "1970-01-01",
          "deleted": true,
          "flag_color": "red",
          "frequency": "never",
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "memo": "string",
          "payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "transfer_account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
        }
      ],
      "subtransactions": [
        {
          "amount": 0,
          "category_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "category_name": "string",
          "deleted": true,
          "id": "string",
          "memo": "string",
          "payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "payee_name": "string",
          "transaction_id": "string",
          "transfer_account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "transfer_transaction_id": "string"
        }
      ],
      "transactions": [
        {
          "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "amount": 0,
          "approved": true,
          "category_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "cleared": "cleared",
          "date": "1970-01-01",
          "debt_transaction_type": "payment",
          "deleted": true,
          "flag_color": "red",
          "id": "string",
          "import_id": "string",
          "import_payee_name": "string",
          "import_payee_name_original": "string",
          "matched_transaction_id": "string",
          "memo": "string",
          "payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "transfer_account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "transfer_transaction_id": "string"
        }
      ]
    },
    "server_knowledge": 0
  }
}
```

> 404 Response

```json
{
  "error": {
    "detail": "string",
    "id": "string",
    "name": "string"
  }
}
```

> default Response

```json
{
  "error": {
    "detail": "string",
    "id": "string",
    "name": "string"
  }
}
```

<h3 id="single-budget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The requested budget|[BudgetDetailResponse](#schemabudgetdetailresponse)|
|404|Not Found|The specified budget was not found|[ErrorResponse](#schemaerrorresponse)|
|default|Default|An error occurred|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Budget Settings

<a id="opIdgetBudgetSettingsById"></a>

> Code samples

```bash
curl https://example.com/budgets/string/settings \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /budgets/{budget_id}/settings`

Returns settings for a budget

<h3 id="budget-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|budget_id|path|string|true|The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget).|

> Example responses

> 200 Response

```json
{
  "data": {
    "settings": {
      "currency_format": {
        "currency_symbol": "string",
        "decimal_digits": 0,
        "decimal_separator": "string",
        "display_symbol": true,
        "example_format": "string",
        "group_separator": "string",
        "iso_code": "string",
        "symbol_first": true
      },
      "date_format": {
        "format": "string"
      }
    }
  }
}
```

> 404 Response

```json
{
  "error": {
    "detail": "string",
    "id": "string",
    "name": "string"
  }
}
```

> default Response

```json
{
  "error": {
    "detail": "string",
    "id": "string",
    "name": "string"
  }
}
```

<h3 id="budget-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The requested budget settings|[BudgetSettingsResponse](#schemabudgetsettingsresponse)|
|404|Not Found|The specified Budget was not found|[ErrorResponse](#schemaerrorresponse)|
|default|Default|An error occurred|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

<h1 id="ynab-api-endpoints-accounts">Accounts</h1>

The accounts for a budget

## Account list

<a id="opIdgetAccounts"></a>

> Code samples

```bash
curl https://example.com/budgets/string/accounts \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /budgets/{budget_id}/accounts`

Returns all accounts

<h3 id="account-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|budget_id|path|string|true|The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget).|
|last_knowledge_of_server|query|integer(int64)|false|The starting server knowledge.  If provided, only entities that have changed since `last_knowledge_of_server` will be included.|

> Example responses

> 200 Response

```json
{
  "data": {
    "accounts": [
      {
        "balance": 0,
        "cleared_balance": 0,
        "closed": true,
        "debt_escrow_amounts": {
          "property1": 0,
          "property2": 0
        },
        "debt_interest_rates": {
          "property1": 0,
          "property2": 0
        },
        "debt_minimum_payments": {
          "property1": 0,
          "property2": 0
        },
        "debt_original_balance": 0,
        "deleted": true,
        "direct_import_in_error": true,
        "direct_import_linked": true,
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "last_reconciled_at": "1970-01-01T00:00:00Z",
        "name": "string",
        "note": "string",
        "on_budget": true,
        "transfer_payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "type": "checking",
        "uncleared_balance": 0
      }
    ],
    "server_knowledge": 0
  }
}
```

> 404 Response

```json
{
  "error": {
    "detail": "string",
    "id": "string",
    "name": "string"
  }
}
```

> default Response

```json
{
  "error": {
    "detail": "string",
    "id": "string",
    "name": "string"
  }
}
```

<h3 id="account-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The list of requested accounts|[AccountsResponse](#schemaaccountsresponse)|
|404|Not Found|No accounts were found|[ErrorResponse](#schemaerrorresponse)|
|default|Default|An error occurred|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Create a new account

<a id="opIdcreateAccount"></a>

> Code samples

```bash
curl https://example.com/budgets/string/accounts \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "account": {
      "balance": 0,
      "name": "string",
      "type": "checking"
    }
  }'
```

`POST /budgets/{budget_id}/accounts`

Creates a new account

> Body parameter

```json
{
  "account": {
    "balance": 0,
    "name": "string",
    "type": "checking"
  }
}
```

<h3 id="create-a-new-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|budget_id|path|string|true|The id of the budget ("last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget)|
|body|body|[PostAccountWrapper](#schemapostaccountwrapper)|true|The account to create.|
|» account|body|[SaveAccount](#schemasaveaccount)|true|none|

> Example responses

> 201 Response

```json
{
  "data": {
    "account": {
      "balance": 0,
      "cleared_balance": 0,
      "closed": true,
      "debt_escrow_amounts": {
        "property1": 0,
        "property2": 0
      },
      "debt_interest_rates": {
        "property1": 0,
        "property2": 0
      },
      "debt_minimum_payments": {
        "property1": 0,
        "property2": 0
      },
      "debt_original_balance": 0,
      "deleted": true,
      "direct_import_in_error": true,
      "direct_import_linked": true,
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "last_reconciled_at": "1970-01-01T00:00:00Z",
      "name": "string",
      "note": "string",
      "on_budget": true,
      "transfer_payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "type": "checking",
      "uncleared_balance": 0
    }
  }
}
```

> 400 Response

```json
{
  "error": {
    "detail": "string",
    "id": "string",
    "name": "string"
  }
}
```

<h3 id="create-a-new-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The account was successfully created|[AccountResponse](#schemaaccountresponse)|
|400|Bad Request|The request could not be understood due to malformed syntax or validation error(s).|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Single account

<a id="opIdgetAccountById"></a>

> Code samples

```bash
curl https://example.com/budgets/string/accounts/497f6eca-6276-4993-bfeb-53cbbbba6f08 \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /budgets/{budget_id}/accounts/{account_id}`

Returns a single account

<h3 id="single-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|budget_id|path|string|true|The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget).|
|account_id|path|string(uuid)|true|The id of the account|

> Example responses

> 200 Response

```json
{
  "data": {
    "account": {
      "balance": 0,
      "cleared_balance": 0,
      "closed": true,
      "debt_escrow_amounts": {
        "property1": 0,
        "property2": 0
      },
      "debt_interest_rates": {
        "property1": 0,
        "property2": 0
      },
      "debt_minimum_payments": {
        "property1": 0,
        "property2": 0
      },
      "debt_original_balance": 0,
      "deleted": true,
      "direct_import_in_error": true,
      "direct_import_linked": true,
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "last_reconciled_at": "1970-01-01T00:00:00Z",
      "name": "string",
      "note": "string",
      "on_budget": true,
      "transfer_payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "type": "checking",
      "uncleared_balance": 0
    }
  }
}
```

> 404 Response

```json
{
  "error": {
    "detail": "string",
    "id": "string",
    "name": "string"
  }
}
```

> default Response

```json
{
  "error": {
    "detail": "string",
    "id": "string",
    "name": "string"
  }
}
```

<h3 id="single-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The requested account|[AccountResponse](#schemaaccountresponse)|
|404|Not Found|The requested account was not found|[ErrorResponse](#schemaerrorresponse)|
|default|Default|An error occurred|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

<h1 id="ynab-api-endpoints-categories">Categories</h1>

The categories for a budget

## List categories

<a id="opIdgetCategories"></a>

> Code samples

```bash
curl https://example.com/budgets/string/categories \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /budgets/{budget_id}/categories`

Returns all categories grouped by category group.  Amounts (budgeted, activity, balance, etc.) are specific to the current budget month (UTC).

<h3 id="list-categories-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|budget_id|path|string|true|The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget).|
|last_knowledge_of_server|query|integer(int64)|false|The starting server knowledge.  If provided, only entities that have changed since `last_knowledge_of_server` will be included.|

> Example responses

> 200 Response

```json
{
  "data": {
    "category_groups": [
      {
        "deleted": true,
        "hidden": true,
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "name": "string",
        "categories": [
          {
            "activity": 0,
            "balance": 0,
            "budgeted": 0,
            "category_group_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "deleted": true,
            "goal_cadence": 0,
            "goal_cadence_frequency": 0,
            "goal_creation_month": "1970-01-01",
            "goal_day": 0,
            "goal_months_to_budget": 0,
            "goal_overall_funded": 0,
            "goal_overall_left": 0,
            "goal_percentage_complete": 0,
            "goal_target": 0,
            "goal_target_month": "1970-01-01",
            "goal_type": "TB",
            "goal_under_funded": 0,
            "hidden": true,
            "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "name": "string",
            "note": "string",
            "original_category_group_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
          }
        ]
      }
    ],
    "server_knowledge": 0
  }
}
```

> 404 Response

```json
{
  "error": {
    "detail": "string",
    "id": "string",
    "name": "string"
  }
}
```

> default Response

```json
{
  "error": {
    "detail": "string",
    "id": "string",
    "name": "string"
  }
}
```

<h3 id="list-categories-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The categories grouped by category group|[CategoriesResponse](#schemacategoriesresponse)|
|404|Not Found|No categories were found|[ErrorResponse](#schemaerrorresponse)|
|default|Default|An error occurred|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Single category

<a id="opIdgetCategoryById"></a>

> Code samples

```bash
curl https://example.com/budgets/string/categories/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /budgets/{budget_id}/categories/{category_id}`

Returns a single category.  Amounts (budgeted, activity, balance, etc.) are specific to the current budget month (UTC).

<h3 id="single-category-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|budget_id|path|string|true|The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget).|
|category_id|path|string|true|The id of the category|

> Example responses

> 200 Response

```json
{
  "data": {
    "category": {
      "activity": 0,
      "balance": 0,
      "budgeted": 0,
      "category_group_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "deleted": true,
      "goal_cadence": 0,
      "goal_cadence_frequency": 0,
      "goal_creation_month": "1970-01-01",
      "goal_day": 0,
      "goal_months_to_budget": 0,
      "goal_overall_funded": 0,
      "goal_overall_left": 0,
      "goal_percentage_complete": 0,
      "goal_target": 0,
      "goal_target_month": "1970-01-01",
      "goal_type": "TB",
      "goal_under_funded": 0,
      "hidden": true,
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "string",
      "note": "string",
      "original_category_group_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  }
}
```

> 404 Response

```json
{
  "error": {
    "detail": "string",
    "id": "string",
    "name": "string"
  }
}
```

> default Response

```json
{
  "error": {
    "detail": "string",
    "id": "string",
    "name": "string"
  }
}
```

<h3 id="single-category-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The requested category|[CategoryResponse](#schemacategoryresponse)|
|404|Not Found|The category not was found|[ErrorResponse](#schemaerrorresponse)|
|default|Default|An error occurred|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Single category for a specific budget month

<a id="opIdgetMonthCategoryById"></a>

> Code samples

```bash
curl https://example.com/budgets/string/months/1970-01-01/categories/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /budgets/{budget_id}/months/{month}/categories/{category_id}`

Returns a single category for a specific budget month.  Amounts (budgeted, activity, balance, etc.) are specific to the current budget month (UTC).

<h3 id="single-category-for-a-specific-budget-month-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|budget_id|path|string|true|The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget).|
|month|path|string(date)|true|The budget month in ISO format (e.g. 2016-12-01) ("current" can also be used to specify the current calendar month (UTC))|
|category_id|path|string|true|The id of the category|

> Example responses

> 200 Response

```json
{
  "data": {
    "category": {
      "activity": 0,
      "balance": 0,
      "budgeted": 0,
      "category_group_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "deleted": true,
      "goal_cadence": 0,
      "goal_cadence_frequency": 0,
      "goal_creation_month": "1970-01-01",
      "goal_day": 0,
      "goal_months_to_budget": 0,
      "goal_overall_funded": 0,
      "goal_overall_left": 0,
      "goal_percentage_complete": 0,
      "goal_target": 0,
      "goal_target_month": "1970-01-01",
      "goal_type": "TB",
      "goal_under_funded": 0,
      "hidden": true,
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "string",
      "note": "string",
      "original_category_group_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  }
}
```

> 404 Response

```json
{
  "error": {
    "detail": "string",
    "id": "string",
    "name": "string"
  }
}
```

> default Response

```json
{
  "error": {
    "detail": "string",
    "id": "string",
    "name": "string"
  }
}
```

<h3 id="single-category-for-a-specific-budget-month-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The requested month category|[CategoryResponse](#schemacategoryresponse)|
|404|Not Found|The month category was not was found|[ErrorResponse](#schemaerrorresponse)|
|default|Default|An error occurred|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Update a category for a specific month

<a id="opIdupdateMonthCategory"></a>

> Code samples

```bash
curl https://example.com/budgets/string/months/1970-01-01/categories/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "category": {
      "budgeted": 0
    }
  }'
```

`PATCH /budgets/{budget_id}/months/{month}/categories/{category_id}`

Update a category for a specific month.  Only `budgeted` amount can be updated.

> Body parameter

```json
{
  "category": {
    "budgeted": 0
  }
}
```

<h3 id="update-a-category-for-a-specific-month-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|budget_id|path|string|true|The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget).|
|month|path|string(date)|true|The budget month in ISO format (e.g. 2016-12-01) ("current" can also be used to specify the current calendar month (UTC))|
|category_id|path|string|true|The id of the category|
|body|body|[PatchMonthCategoryWrapper](#schemapatchmonthcategorywrapper)|true|The category to update.  Only `budgeted` amount can be updated and any other fields specified will be ignored.|
|» category|body|[SaveMonthCategory](#schemasavemonthcategory)|true|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "category": {
      "activity": 0,
      "balance": 0,
      "budgeted": 0,
      "category_group_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "deleted": true,
      "goal_cadence": 0,
      "goal_cadence_frequency": 0,
      "goal_creation_month": "1970-01-01",
      "goal_day": 0,
      "goal_months_to_budget": 0,
      "goal_overall_funded": 0,
      "goal_overall_left": 0,
      "goal_percentage_complete": 0,
      "goal_target": 0,
      "goal_target_month": "1970-01-01",
      "goal_type": "TB",
      "goal_under_funded": 0,
      "hidden": true,
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "string",
      "note": "string",
      "original_category_group_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    },
    "server_knowledge": 0
  }
}
```

> 400 Response

```json
{
  "error": {
    "detail": "string",
    "id": "string",
    "name": "string"
  }
}
```

<h3 id="update-a-category-for-a-specific-month-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The month category was successfully updated|[SaveCategoryResponse](#schemasavecategoryresponse)|
|400|Bad Request|The request could not be understood due to malformed syntax or validation error(s)|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

<h1 id="ynab-api-endpoints-payees">Payees</h1>

The payees for a budget

## List payees

<a id="opIdgetPayees"></a>

> Code samples

```bash
curl https://example.com/budgets/string/payees \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /budgets/{budget_id}/payees`

Returns all payees

<h3 id="list-payees-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|budget_id|path|string|true|The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget).|
|last_knowledge_of_server|query|integer(int64)|false|The starting server knowledge.  If provided, only entities that have changed since `last_knowledge_of_server` will be included.|

> Example responses

> 200 Response

```json
{
  "data": {
    "payees": [
      {
        "deleted": true,
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "name": "string",
        "transfer_account_id": "string"
      }
    ],
    "server_knowledge": 0
  }
}
```

> 404 Response

```json
{
  "error": {
    "detail": "string",
    "id": "string",
    "name": "string"
  }
}
```

> default Response

```json
{
  "error": {
    "detail": "string",
    "id": "string",
    "name": "string"
  }
}
```

<h3 id="list-payees-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The requested list of payees|[PayeesResponse](#schemapayeesresponse)|
|404|Not Found|No payees were found|[ErrorResponse](#schemaerrorresponse)|
|default|Default|An error occurred|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Single payee

<a id="opIdgetPayeeById"></a>

> Code samples

```bash
curl https://example.com/budgets/string/payees/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /budgets/{budget_id}/payees/{payee_id}`

Returns a single payee

<h3 id="single-payee-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|budget_id|path|string|true|The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget).|
|payee_id|path|string|true|The id of the payee|

> Example responses

> 200 Response

```json
{
  "data": {
    "payee": {
      "deleted": true,
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "string",
      "transfer_account_id": "string"
    }
  }
}
```

> 404 Response

```json
{
  "error": {
    "detail": "string",
    "id": "string",
    "name": "string"
  }
}
```

> default Response

```json
{
  "error": {
    "detail": "string",
    "id": "string",
    "name": "string"
  }
}
```

<h3 id="single-payee-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The requested payee|[PayeeResponse](#schemapayeeresponse)|
|404|Not Found|The payee was not found|[ErrorResponse](#schemaerrorresponse)|
|default|Default|An error occurred|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

<h1 id="ynab-api-endpoints-payee-locations">Payee Locations</h1>

When you enter a transaction and specify a payee on the YNAB mobile apps, the GPS coordinates for that location are stored, with your permission, so that the next time you are in the same place (like the Grocery store) we can pre-populate nearby payees for you!  It’s handy and saves you time.  This resource makes these locations available.  Locations will not be available for all payees.

## List payee locations

<a id="opIdgetPayeeLocations"></a>

> Code samples

```bash
curl https://example.com/budgets/string/payee_locations \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /budgets/{budget_id}/payee_locations`

Returns all payee locations

<h3 id="list-payee-locations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|budget_id|path|string|true|The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget).|

> Example responses

> 200 Response

```json
{
  "data": {
    "payee_locations": [
      {
        "deleted": true,
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "latitude": "string",
        "longitude": "string",
        "payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      }
    ]
  }
}
```

> 404 Response

```json
{
  "error": {
    "detail": "string",
    "id": "string",
    "name": "string"
  }
}
```

> default Response

```json
{
  "error": {
    "detail": "string",
    "id": "string",
    "name": "string"
  }
}
```

<h3 id="list-payee-locations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The list of payee locations|[PayeeLocationsResponse](#schemapayeelocationsresponse)|
|404|Not Found|No payees locations were found|[ErrorResponse](#schemaerrorresponse)|
|default|Default|An error occurred|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Single payee location

<a id="opIdgetPayeeLocationById"></a>

> Code samples

```bash
curl https://example.com/budgets/string/payee_locations/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /budgets/{budget_id}/payee_locations/{payee_location_id}`

Returns a single payee location

<h3 id="single-payee-location-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|budget_id|path|string|true|The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget).|
|payee_location_id|path|string|true|id of payee location|

> Example responses

> 200 Response

```json
{
  "data": {
    "payee_location": {
      "deleted": true,
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "latitude": "string",
      "longitude": "string",
      "payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  }
}
```

> 404 Response

```json
{
  "error": {
    "detail": "string",
    "id": "string",
    "name": "string"
  }
}
```

> default Response

```json
{
  "error": {
    "detail": "string",
    "id": "string",
    "name": "string"
  }
}
```

<h3 id="single-payee-location-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The payee location|[PayeeLocationResponse](#schemapayeelocationresponse)|
|404|Not Found|The payee location was not found|[ErrorResponse](#schemaerrorresponse)|
|default|Default|An error occurred|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## List locations for a payee

<a id="opIdgetPayeeLocationsByPayee"></a>

> Code samples

```bash
curl https://example.com/budgets/string/payees/string/payee_locations \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /budgets/{budget_id}/payees/{payee_id}/payee_locations`

Returns all payee locations for a specified payee

<h3 id="list-locations-for-a-payee-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|budget_id|path|string|true|The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget).|
|payee_id|path|string|true|id of payee|

> Example responses

> 200 Response

```json
{
  "data": {
    "payee_locations": [
      {
        "deleted": true,
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "latitude": "string",
        "longitude": "string",
        "payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      }
    ]
  }
}
```

> 404 Response

```json
{
  "error": {
    "detail": "string",
    "id": "string",
    "name": "string"
  }
}
```

> default Response

```json
{
  "error": {
    "detail": "string",
    "id": "string",
    "name": "string"
  }
}
```

<h3 id="list-locations-for-a-payee-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The list of requested payee locations|[PayeeLocationsResponse](#schemapayeelocationsresponse)|
|404|Not Found|No payees locations were found|[ErrorResponse](#schemaerrorresponse)|
|default|Default|An error occurred|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

<h1 id="ynab-api-endpoints-months">Months</h1>

Each budget contains one or more months, which is where Ready to Assign, Age of Money and category (budgeted / activity / balances) amounts are available.

## List budget months

<a id="opIdgetBudgetMonths"></a>

> Code samples

```bash
curl https://example.com/budgets/string/months \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /budgets/{budget_id}/months`

Returns all budget months

<h3 id="list-budget-months-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|budget_id|path|string|true|The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget).|
|last_knowledge_of_server|query|integer(int64)|false|The starting server knowledge.  If provided, only entities that have changed since `last_knowledge_of_server` will be included.|

> Example responses

> 200 Response

```json
{
  "data": {
    "months": [
      {
        "activity": 0,
        "age_of_money": 0,
        "budgeted": 0,
        "deleted": true,
        "income": 0,
        "month": "1970-01-01",
        "note": "string",
        "to_be_budgeted": 0
      }
    ],
    "server_knowledge": 0
  }
}
```

> 404 Response

```json
{
  "error": {
    "detail": "string",
    "id": "string",
    "name": "string"
  }
}
```

> default Response

```json
{
  "error": {
    "detail": "string",
    "id": "string",
    "name": "string"
  }
}
```

<h3 id="list-budget-months-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The list of budget months|[MonthSummariesResponse](#schemamonthsummariesresponse)|
|404|Not Found|No budget months were found|[ErrorResponse](#schemaerrorresponse)|
|default|Default|An error occurred|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Single budget month

<a id="opIdgetBudgetMonth"></a>

> Code samples

```bash
curl https://example.com/budgets/string/months/1970-01-01 \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /budgets/{budget_id}/months/{month}`

Returns a single budget month

<h3 id="single-budget-month-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|budget_id|path|string|true|The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget).|
|month|path|string(date)|true|The budget month in ISO format (e.g. 2016-12-01) ("current" can also be used to specify the current calendar month (UTC))|

> Example responses

> 200 Response

```json
{
  "data": {
    "month": {
      "activity": 0,
      "age_of_money": 0,
      "budgeted": 0,
      "deleted": true,
      "income": 0,
      "month": "1970-01-01",
      "note": "string",
      "to_be_budgeted": 0,
      "categories": [
        {
          "activity": 0,
          "balance": 0,
          "budgeted": 0,
          "category_group_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "deleted": true,
          "goal_cadence": 0,
          "goal_cadence_frequency": 0,
          "goal_creation_month": "1970-01-01",
          "goal_day": 0,
          "goal_months_to_budget": 0,
          "goal_overall_funded": 0,
          "goal_overall_left": 0,
          "goal_percentage_complete": 0,
          "goal_target": 0,
          "goal_target_month": "1970-01-01",
          "goal_type": "TB",
          "goal_under_funded": 0,
          "hidden": true,
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "name": "string",
          "note": "string",
          "original_category_group_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
        }
      ]
    }
  }
}
```

> 404 Response

```json
{
  "error": {
    "detail": "string",
    "id": "string",
    "name": "string"
  }
}
```

> default Response

```json
{
  "error": {
    "detail": "string",
    "id": "string",
    "name": "string"
  }
}
```

<h3 id="single-budget-month-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The budget month detail|[MonthDetailResponse](#schemamonthdetailresponse)|
|404|Not Found|The budget month was not found|[ErrorResponse](#schemaerrorresponse)|
|default|Default|An error occurred|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

<h1 id="ynab-api-endpoints-transactions">Transactions</h1>

The transactions for a budget

## List account transactions

<a id="opIdgetTransactionsByAccount"></a>

> Code samples

```bash
curl https://example.com/budgets/string/accounts/string/transactions \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /budgets/{budget_id}/accounts/{account_id}/transactions`

Returns all transactions for a specified account

<h3 id="list-account-transactions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|budget_id|path|string|true|The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget).|
|account_id|path|string|true|The id of the account|
|since_date|query|string(date)|false|If specified, only transactions on or after this date will be included.  The date should be ISO formatted (e.g. 2016-12-30).|
|type|query|string|false|If specified, only transactions of the specified type will be included. "uncategorized" and "unapproved" are currently supported.|
|last_knowledge_of_server|query|integer(int64)|false|The starting server knowledge.  If provided, only entities that have changed since `last_knowledge_of_server` will be included.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|uncategorized|
|type|unapproved|

> Example responses

> 200 Response

```json
{
  "data": {
    "server_knowledge": 0,
    "transactions": [
      {
        "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "amount": 0,
        "approved": true,
        "category_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "cleared": "cleared",
        "date": "1970-01-01",
        "debt_transaction_type": "payment",
        "deleted": true,
        "flag_color": "red",
        "id": "string",
        "import_id": "string",
        "import_payee_name": "string",
        "import_payee_name_original": "string",
        "matched_transaction_id": "string",
        "memo": "string",
        "payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "transfer_account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "transfer_transaction_id": "string",
        "account_name": "string",
        "category_name": "string",
        "payee_name": "string",
        "subtransactions": [
          {
            "amount": 0,
            "category_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "category_name": "string",
            "deleted": true,
            "id": "string",
            "memo": "string",
            "payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "payee_name": "string",
            "transaction_id": "string",
            "transfer_account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "transfer_transaction_id": "string"
          }
        ]
      }
    ]
  }
}
```

> 404 Response

```json
{
  "error": {
    "detail": "string",
    "id": "string",
    "name": "string"
  }
}
```

> default Response

```json
{
  "error": {
    "detail": "string",
    "id": "string",
    "name": "string"
  }
}
```

<h3 id="list-account-transactions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The list of requested transactions|[TransactionsResponse](#schematransactionsresponse)|
|404|Not Found|No transactions were found|[ErrorResponse](#schemaerrorresponse)|
|default|Default|An error occurred|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## List category transactions

<a id="opIdgetTransactionsByCategory"></a>

> Code samples

```bash
curl https://example.com/budgets/string/categories/string/transactions \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /budgets/{budget_id}/categories/{category_id}/transactions`

Returns all transactions for a specified category

<h3 id="list-category-transactions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|budget_id|path|string|true|The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget).|
|category_id|path|string|true|The id of the category|
|since_date|query|string(date)|false|If specified, only transactions on or after this date will be included.  The date should be ISO formatted (e.g. 2016-12-30).|
|type|query|string|false|If specified, only transactions of the specified type will be included. "uncategorized" and "unapproved" are currently supported.|
|last_knowledge_of_server|query|integer(int64)|false|The starting server knowledge.  If provided, only entities that have changed since `last_knowledge_of_server` will be included.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|uncategorized|
|type|unapproved|

> Example responses

> 200 Response

```json
{
  "data": {
    "server_knowledge": 0,
    "transactions": [
      {
        "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "amount": 0,
        "approved": true,
        "category_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "cleared": "cleared",
        "date": "1970-01-01",
        "debt_transaction_type": "payment",
        "deleted": true,
        "flag_color": "red",
        "id": "string",
        "import_id": "string",
        "import_payee_name": "string",
        "import_payee_name_original": "string",
        "matched_transaction_id": "string",
        "memo": "string",
        "payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "transfer_account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "transfer_transaction_id": "string",
        "account_name": "string",
        "category_name": "string",
        "parent_transaction_id": "string",
        "payee_name": "string",
        "type": "transaction"
      }
    ]
  }
}
```

> 404 Response

```json
{
  "error": {
    "detail": "string",
    "id": "string",
    "name": "string"
  }
}
```

> default Response

```json
{
  "error": {
    "detail": "string",
    "id": "string",
    "name": "string"
  }
}
```

<h3 id="list-category-transactions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The list of requested transactions|[HybridTransactionsResponse](#schemahybridtransactionsresponse)|
|404|Not Found|No transactions were found|[ErrorResponse](#schemaerrorresponse)|
|default|Default|An error occurred|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## List payee transactions

<a id="opIdgetTransactionsByPayee"></a>

> Code samples

```bash
curl https://example.com/budgets/string/payees/string/transactions \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /budgets/{budget_id}/payees/{payee_id}/transactions`

Returns all transactions for a specified payee

<h3 id="list-payee-transactions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|budget_id|path|string|true|The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget).|
|payee_id|path|string|true|The id of the payee|
|since_date|query|string(date)|false|If specified, only transactions on or after this date will be included.  The date should be ISO formatted (e.g. 2016-12-30).|
|type|query|string|false|If specified, only transactions of the specified type will be included. "uncategorized" and "unapproved" are currently supported.|
|last_knowledge_of_server|query|integer(int64)|false|The starting server knowledge.  If provided, only entities that have changed since `last_knowledge_of_server` will be included.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|uncategorized|
|type|unapproved|

> Example responses

> 200 Response

```json
{
  "data": {
    "server_knowledge": 0,
    "transactions": [
      {
        "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "amount": 0,
        "approved": true,
        "category_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "cleared": "cleared",
        "date": "1970-01-01",
        "debt_transaction_type": "payment",
        "deleted": true,
        "flag_color": "red",
        "id": "string",
        "import_id": "string",
        "import_payee_name": "string",
        "import_payee_name_original": "string",
        "matched_transaction_id": "string",
        "memo": "string",
        "payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "transfer_account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "transfer_transaction_id": "string",
        "account_name": "string",
        "category_name": "string",
        "parent_transaction_id": "string",
        "payee_name": "string",
        "type": "transaction"
      }
    ]
  }
}
```

> 404 Response

```json
{
  "error": {
    "detail": "string",
    "id": "string",
    "name": "string"
  }
}
```

> default Response

```json
{
  "error": {
    "detail": "string",
    "id": "string",
    "name": "string"
  }
}
```

<h3 id="list-payee-transactions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The list of requested transactions|[HybridTransactionsResponse](#schemahybridtransactionsresponse)|
|404|Not Found|No transactions were found|[ErrorResponse](#schemaerrorresponse)|
|default|Default|An error occurred|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## List transactions

<a id="opIdgetTransactions"></a>

> Code samples

```bash
curl https://example.com/budgets/string/transactions \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /budgets/{budget_id}/transactions`

Returns budget transactions

<h3 id="list-transactions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|budget_id|path|string|true|The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget).|
|since_date|query|string(date)|false|If specified, only transactions on or after this date will be included.  The date should be ISO formatted (e.g. 2016-12-30).|
|type|query|string|false|If specified, only transactions of the specified type will be included. "uncategorized" and "unapproved" are currently supported.|
|last_knowledge_of_server|query|integer(int64)|false|The starting server knowledge.  If provided, only entities that have changed since `last_knowledge_of_server` will be included.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|uncategorized|
|type|unapproved|

> Example responses

> 200 Response

```json
{
  "data": {
    "server_knowledge": 0,
    "transactions": [
      {
        "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "amount": 0,
        "approved": true,
        "category_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "cleared": "cleared",
        "date": "1970-01-01",
        "debt_transaction_type": "payment",
        "deleted": true,
        "flag_color": "red",
        "id": "string",
        "import_id": "string",
        "import_payee_name": "string",
        "import_payee_name_original": "string",
        "matched_transaction_id": "string",
        "memo": "string",
        "payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "transfer_account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "transfer_transaction_id": "string",
        "account_name": "string",
        "category_name": "string",
        "payee_name": "string",
        "subtransactions": [
          {
            "amount": 0,
            "category_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "category_name": "string",
            "deleted": true,
            "id": "string",
            "memo": "string",
            "payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "payee_name": "string",
            "transaction_id": "string",
            "transfer_account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "transfer_transaction_id": "string"
          }
        ]
      }
    ]
  }
}
```

> 400 Response

```json
{
  "error": {
    "detail": "string",
    "id": "string",
    "name": "string"
  }
}
```

> 404 Response

```json
{
  "error": {
    "detail": "string",
    "id": "string",
    "name": "string"
  }
}
```

<h3 id="list-transactions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The list of requested transactions|[TransactionsResponse](#schematransactionsresponse)|
|400|Bad Request|An error occurred|[ErrorResponse](#schemaerrorresponse)|
|404|Not Found|No transactions were found|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Create a single transaction or multiple transactions

<a id="opIdcreateTransaction"></a>

> Code samples

```bash
curl https://example.com/budgets/string/transactions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "transaction": {
      "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "amount": 0,
      "approved": true,
      "category_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "cleared": "cleared",
      "date": "1970-01-01",
      "flag_color": "red",
      "import_id": "string",
      "memo": "string",
      "payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "payee_name": "string",
      "subtransactions": [
        {
          "amount": 0,
          "category_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "memo": "string",
          "payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "payee_name": "string"
        }
      ]
    },
    "transactions": [
      {
        "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "amount": 0,
        "approved": true,
        "category_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "cleared": "cleared",
        "date": "1970-01-01",
        "flag_color": "red",
        "import_id": "string",
        "memo": "string",
        "payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "payee_name": "string",
        "subtransactions": [
          {
            "amount": 0,
            "category_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "memo": "string",
            "payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "payee_name": "string"
          }
        ]
      }
    ]
  }'
```

`POST /budgets/{budget_id}/transactions`

Creates a single transaction or multiple transactions.  If you provide a body containing a `transaction` object, a single transaction will be created and if you provide a body containing a `transactions` array, multiple transactions will be created.  Scheduled transactions cannot be created on this endpoint.

> Body parameter

```json
{
  "transaction": {
    "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "amount": 0,
    "approved": true,
    "category_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "cleared": "cleared",
    "date": "1970-01-01",
    "flag_color": "red",
    "import_id": "string",
    "memo": "string",
    "payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "payee_name": "string",
    "subtransactions": [
      {
        "amount": 0,
        "category_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "memo": "string",
        "payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "payee_name": "string"
      }
    ]
  },
  "transactions": [
    {
      "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "amount": 0,
      "approved": true,
      "category_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "cleared": "cleared",
      "date": "1970-01-01",
      "flag_color": "red",
      "import_id": "string",
      "memo": "string",
      "payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "payee_name": "string",
      "subtransactions": [
        {
          "amount": 0,
          "category_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "memo": "string",
          "payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "payee_name": "string"
        }
      ]
    }
  ]
}
```

<h3 id="create-a-single-transaction-or-multiple-transactions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|budget_id|path|string|true|The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget).|
|body|body|[PostTransactionsWrapper](#schemaposttransactionswrapper)|true|The transaction or transactions to create.  To create a single transaction you can specify a value for the `transaction` object and to create multiple transactions you can specify an array of `transactions`.  It is expected that you will only provide a value for one of these objects.|
|» transaction|body|[SaveTransaction](#schemasavetransaction)|false|none|
|» transactions|body|[[SaveTransaction](#schemasavetransaction)]|false|none|

> Example responses

> 201 Response

```json
{
  "data": {
    "duplicate_import_ids": [
      "string"
    ],
    "server_knowledge": 0,
    "transaction": {
      "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "amount": 0,
      "approved": true,
      "category_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "cleared": "cleared",
      "date": "1970-01-01",
      "debt_transaction_type": "payment",
      "deleted": true,
      "flag_color": "red",
      "id": "string",
      "import_id": "string",
      "import_payee_name": "string",
      "import_payee_name_original": "string",
      "matched_transaction_id": "string",
      "memo": "string",
      "payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "transfer_account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "transfer_transaction_id": "string",
      "account_name": "string",
      "category_name": "string",
      "payee_name": "string",
      "subtransactions": [
        {
          "amount": 0,
          "category_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "category_name": "string",
          "deleted": true,
          "id": "string",
          "memo": "string",
          "payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "payee_name": "string",
          "transaction_id": "string",
          "transfer_account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "transfer_transaction_id": "string"
        }
      ]
    },
    "transaction_ids": [
      "string"
    ],
    "transactions": [
      {
        "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "amount": 0,
        "approved": true,
        "category_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "cleared": "cleared",
        "date": "1970-01-01",
        "debt_transaction_type": "payment",
        "deleted": true,
        "flag_color": "red",
        "id": "string",
        "import_id": "string",
        "import_payee_name": "string",
        "import_payee_name_original": "string",
        "matched_transaction_id": "string",
        "memo": "string",
        "payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "transfer_account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "transfer_transaction_id": "string",
        "account_name": "string",
        "category_name": "string",
        "payee_name": "string",
        "subtransactions": [
          {
            "amount": 0,
            "category_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "category_name": "string",
            "deleted": true,
            "id": "string",
            "memo": "string",
            "payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "payee_name": "string",
            "transaction_id": "string",
            "transfer_account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "transfer_transaction_id": "string"
          }
        ]
      }
    ]
  }
}
```

> 400 Response

```json
{
  "error": {
    "detail": "string",
    "id": "string",
    "name": "string"
  }
}
```

> 409 Response

```json
{
  "error": {
    "detail": "string",
    "id": "string",
    "name": "string"
  }
}
```

<h3 id="create-a-single-transaction-or-multiple-transactions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The transaction or transactions were successfully created|[SaveTransactionsResponse](#schemasavetransactionsresponse)|
|400|Bad Request|The request could not be understood due to malformed syntax or validation error(s).|[ErrorResponse](#schemaerrorresponse)|
|409|Conflict|A transaction on the same account with the same `import_id` already exists.|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Update multiple transactions

<a id="opIdupdateTransactions"></a>

> Code samples

```bash
curl https://example.com/budgets/string/transactions \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "transactions": [
      {
        "id": "string",
        "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "amount": 0,
        "approved": true,
        "category_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "cleared": "cleared",
        "date": "1970-01-01",
        "flag_color": "red",
        "import_id": "string",
        "memo": "string",
        "payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "payee_name": "string",
        "subtransactions": [
          {
            "amount": 0,
            "category_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "memo": "string",
            "payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "payee_name": "string"
          }
        ]
      }
    ]
  }'
```

`PATCH /budgets/{budget_id}/transactions`

Updates multiple transactions, by `id` or `import_id`.

> Body parameter

```json
{
  "transactions": [
    {
      "id": "string",
      "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "amount": 0,
      "approved": true,
      "category_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "cleared": "cleared",
      "date": "1970-01-01",
      "flag_color": "red",
      "import_id": "string",
      "memo": "string",
      "payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "payee_name": "string",
      "subtransactions": [
        {
          "amount": 0,
          "category_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "memo": "string",
          "payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "payee_name": "string"
        }
      ]
    }
  ]
}
```

<h3 id="update-multiple-transactions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|budget_id|path|string|true|The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget).|
|body|body|[PatchTransactionsWrapper](#schemapatchtransactionswrapper)|true|The transactions to update. Each transaction must have either an `id` or `import_id` specified. If `id` is specified as null an `import_id` value can be provided which will allow transaction(s) to be updated by their `import_id`. If an `id` is specified, it will always be used for lookup.|
|» transactions|body|[[SaveTransactionWithId](#schemasavetransactionwithid)]|true|none|

> Example responses

> 209 Response

```json
{
  "data": {
    "duplicate_import_ids": [
      "string"
    ],
    "server_knowledge": 0,
    "transaction": {
      "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "amount": 0,
      "approved": true,
      "category_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "cleared": "cleared",
      "date": "1970-01-01",
      "debt_transaction_type": "payment",
      "deleted": true,
      "flag_color": "red",
      "id": "string",
      "import_id": "string",
      "import_payee_name": "string",
      "import_payee_name_original": "string",
      "matched_transaction_id": "string",
      "memo": "string",
      "payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "transfer_account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "transfer_transaction_id": "string",
      "account_name": "string",
      "category_name": "string",
      "payee_name": "string",
      "subtransactions": [
        {
          "amount": 0,
          "category_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "category_name": "string",
          "deleted": true,
          "id": "string",
          "memo": "string",
          "payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "payee_name": "string",
          "transaction_id": "string",
          "transfer_account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "transfer_transaction_id": "string"
        }
      ]
    },
    "transaction_ids": [
      "string"
    ],
    "transactions": [
      {
        "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "amount": 0,
        "approved": true,
        "category_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "cleared": "cleared",
        "date": "1970-01-01",
        "debt_transaction_type": "payment",
        "deleted": true,
        "flag_color": "red",
        "id": "string",
        "import_id": "string",
        "import_payee_name": "string",
        "import_payee_name_original": "string",
        "matched_transaction_id": "string",
        "memo": "string",
        "payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "transfer_account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "transfer_transaction_id": "string",
        "account_name": "string",
        "category_name": "string",
        "payee_name": "string",
        "subtransactions": [
          {
            "amount": 0,
            "category_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "category_name": "string",
            "deleted": true,
            "id": "string",
            "memo": "string",
            "payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "payee_name": "string",
            "transaction_id": "string",
            "transfer_account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "transfer_transaction_id": "string"
          }
        ]
      }
    ]
  }
}
```

> 400 Response

```json
{
  "error": {
    "detail": "string",
    "id": "string",
    "name": "string"
  }
}
```

<h3 id="update-multiple-transactions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|209|209|The transactions were successfully updated|[SaveTransactionsResponse](#schemasavetransactionsresponse)|
|400|Bad Request|The request could not be understood due to malformed syntax or validation error(s).|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Import transactions

<a id="opIdimportTransactions"></a>

> Code samples

```bash
curl https://example.com/budgets/string/transactions/import \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`POST /budgets/{budget_id}/transactions/import`

Imports available transactions on all linked accounts for the given budget.  Linked accounts allow transactions to be imported directly from a specified financial institution and this endpoint initiates that import.  Sending a request to this endpoint is the equivalent of clicking "Import" on each account in the web application or tapping the "New Transactions" banner in the mobile applications.  The response for this endpoint contains the transaction ids that have been imported.

<h3 id="import-transactions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|budget_id|path|string|true|The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget).|

> Example responses

> 200 Response

```json
{
  "data": {
    "transaction_ids": [
      "string"
    ]
  }
}
```

> 201 Response

```json
{
  "data": {
    "transaction_ids": [
      "string"
    ]
  }
}
```

> 400 Response

```json
{
  "error": {
    "detail": "string",
    "id": "string",
    "name": "string"
  }
}
```

<h3 id="import-transactions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request was successful but there were no transactions to import|[TransactionsImportResponse](#schematransactionsimportresponse)|
|201|Created|One or more transactions were imported successfully|[TransactionsImportResponse](#schematransactionsimportresponse)|
|400|Bad Request|The request could not be understood due to malformed syntax or validation error(s)|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Single transaction

<a id="opIdgetTransactionById"></a>

> Code samples

```bash
curl https://example.com/budgets/string/transactions/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /budgets/{budget_id}/transactions/{transaction_id}`

Returns a single transaction

<h3 id="single-transaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|budget_id|path|string|true|The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget).|
|transaction_id|path|string|true|The id of the transaction|

> Example responses

> 200 Response

```json
{
  "data": {
    "transaction": {
      "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "amount": 0,
      "approved": true,
      "category_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "cleared": "cleared",
      "date": "1970-01-01",
      "debt_transaction_type": "payment",
      "deleted": true,
      "flag_color": "red",
      "id": "string",
      "import_id": "string",
      "import_payee_name": "string",
      "import_payee_name_original": "string",
      "matched_transaction_id": "string",
      "memo": "string",
      "payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "transfer_account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "transfer_transaction_id": "string",
      "account_name": "string",
      "category_name": "string",
      "payee_name": "string",
      "subtransactions": [
        {
          "amount": 0,
          "category_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "category_name": "string",
          "deleted": true,
          "id": "string",
          "memo": "string",
          "payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "payee_name": "string",
          "transaction_id": "string",
          "transfer_account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "transfer_transaction_id": "string"
        }
      ]
    }
  }
}
```

> 404 Response

```json
{
  "error": {
    "detail": "string",
    "id": "string",
    "name": "string"
  }
}
```

> default Response

```json
{
  "error": {
    "detail": "string",
    "id": "string",
    "name": "string"
  }
}
```

<h3 id="single-transaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The requested transaction|[TransactionResponse](#schematransactionresponse)|
|404|Not Found|The transaction was not found|[ErrorResponse](#schemaerrorresponse)|
|default|Default|An error occurred|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Updates an existing transaction

<a id="opIdupdateTransaction"></a>

> Code samples

```bash
curl https://example.com/budgets/string/transactions/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "transaction": {
      "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "amount": 0,
      "approved": true,
      "category_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "cleared": "cleared",
      "date": "1970-01-01",
      "flag_color": "red",
      "import_id": "string",
      "memo": "string",
      "payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "payee_name": "string",
      "subtransactions": [
        {
          "amount": 0,
          "category_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "memo": "string",
          "payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "payee_name": "string"
        }
      ]
    }
  }'
```

`PUT /budgets/{budget_id}/transactions/{transaction_id}`

Updates a single transaction

> Body parameter

```json
{
  "transaction": {
    "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "amount": 0,
    "approved": true,
    "category_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "cleared": "cleared",
    "date": "1970-01-01",
    "flag_color": "red",
    "import_id": "string",
    "memo": "string",
    "payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "payee_name": "string",
    "subtransactions": [
      {
        "amount": 0,
        "category_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "memo": "string",
        "payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "payee_name": "string"
      }
    ]
  }
}
```

<h3 id="updates-an-existing-transaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|budget_id|path|string|true|The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget).|
|transaction_id|path|string|true|The id of the transaction|
|body|body|[PutTransactionWrapper](#schemaputtransactionwrapper)|true|The transaction to update|
|» transaction|body|[SaveTransaction](#schemasavetransaction)|true|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "transaction": {
      "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "amount": 0,
      "approved": true,
      "category_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "cleared": "cleared",
      "date": "1970-01-01",
      "debt_transaction_type": "payment",
      "deleted": true,
      "flag_color": "red",
      "id": "string",
      "import_id": "string",
      "import_payee_name": "string",
      "import_payee_name_original": "string",
      "matched_transaction_id": "string",
      "memo": "string",
      "payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "transfer_account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "transfer_transaction_id": "string",
      "account_name": "string",
      "category_name": "string",
      "payee_name": "string",
      "subtransactions": [
        {
          "amount": 0,
          "category_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "category_name": "string",
          "deleted": true,
          "id": "string",
          "memo": "string",
          "payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "payee_name": "string",
          "transaction_id": "string",
          "transfer_account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "transfer_transaction_id": "string"
        }
      ]
    }
  }
}
```

> 400 Response

```json
{
  "error": {
    "detail": "string",
    "id": "string",
    "name": "string"
  }
}
```

<h3 id="updates-an-existing-transaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The transaction was successfully updated|[TransactionResponse](#schematransactionresponse)|
|400|Bad Request|The request could not be understood due to malformed syntax or validation error(s)|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Deletes an existing transaction

<a id="opIddeleteTransaction"></a>

> Code samples

```bash
curl https://example.com/budgets/string/transactions/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`DELETE /budgets/{budget_id}/transactions/{transaction_id}`

Deletes a transaction

<h3 id="deletes-an-existing-transaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|budget_id|path|string|true|The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget).|
|transaction_id|path|string|true|The id of the transaction|

> Example responses

> 200 Response

```json
{
  "data": {
    "transaction": {
      "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "amount": 0,
      "approved": true,
      "category_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "cleared": "cleared",
      "date": "1970-01-01",
      "debt_transaction_type": "payment",
      "deleted": true,
      "flag_color": "red",
      "id": "string",
      "import_id": "string",
      "import_payee_name": "string",
      "import_payee_name_original": "string",
      "matched_transaction_id": "string",
      "memo": "string",
      "payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "transfer_account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "transfer_transaction_id": "string",
      "account_name": "string",
      "category_name": "string",
      "payee_name": "string",
      "subtransactions": [
        {
          "amount": 0,
          "category_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "category_name": "string",
          "deleted": true,
          "id": "string",
          "memo": "string",
          "payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "payee_name": "string",
          "transaction_id": "string",
          "transfer_account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "transfer_transaction_id": "string"
        }
      ]
    }
  }
}
```

> 404 Response

```json
{
  "error": {
    "detail": "string",
    "id": "string",
    "name": "string"
  }
}
```

<h3 id="deletes-an-existing-transaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The transaction was successfully deleted|[TransactionResponse](#schematransactionresponse)|
|404|Not Found|The transaction was not found|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

<h1 id="ynab-api-endpoints-scheduled-transactions">Scheduled Transactions</h1>

The scheduled transactions for a budget

## List scheduled transactions

<a id="opIdgetScheduledTransactions"></a>

> Code samples

```bash
curl https://example.com/budgets/string/scheduled_transactions \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /budgets/{budget_id}/scheduled_transactions`

Returns all scheduled transactions

<h3 id="list-scheduled-transactions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|budget_id|path|string|true|The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget).|
|last_knowledge_of_server|query|integer(int64)|false|The starting server knowledge.  If provided, only entities that have changed since `last_knowledge_of_server` will be included.|

> Example responses

> 200 Response

```json
{
  "data": {
    "scheduled_transactions": [
      {
        "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "amount": 0,
        "category_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "date_first": "1970-01-01",
        "date_next": "1970-01-01",
        "deleted": true,
        "flag_color": "red",
        "frequency": "never",
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "memo": "string",
        "payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "transfer_account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "account_name": "string",
        "category_name": "string",
        "payee_name": "string",
        "subtransactions": [
          {
            "amount": 0,
            "category_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "deleted": true,
            "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "memo": "string",
            "payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "scheduled_transaction_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "transfer_account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
          }
        ]
      }
    ],
    "server_knowledge": 0
  }
}
```

> 404 Response

```json
{
  "error": {
    "detail": "string",
    "id": "string",
    "name": "string"
  }
}
```

> default Response

```json
{
  "error": {
    "detail": "string",
    "id": "string",
    "name": "string"
  }
}
```

<h3 id="list-scheduled-transactions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The list of requested scheduled transactions|[ScheduledTransactionsResponse](#schemascheduledtransactionsresponse)|
|404|Not Found|No scheduled transactions were found|[ErrorResponse](#schemaerrorresponse)|
|default|Default|An error occurred|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

## Single scheduled transaction

<a id="opIdgetScheduledTransactionById"></a>

> Code samples

```bash
curl https://example.com/budgets/string/scheduled_transactions/string \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /budgets/{budget_id}/scheduled_transactions/{scheduled_transaction_id}`

Returns a single scheduled transaction

<h3 id="single-scheduled-transaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|budget_id|path|string|true|The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget).|
|scheduled_transaction_id|path|string|true|The id of the scheduled transaction|

> Example responses

> 200 Response

```json
{
  "data": {
    "scheduled_transaction": {
      "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "amount": 0,
      "category_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "date_first": "1970-01-01",
      "date_next": "1970-01-01",
      "deleted": true,
      "flag_color": "red",
      "frequency": "never",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "memo": "string",
      "payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "transfer_account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "account_name": "string",
      "category_name": "string",
      "payee_name": "string",
      "subtransactions": [
        {
          "amount": 0,
          "category_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "deleted": true,
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "memo": "string",
          "payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "scheduled_transaction_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "transfer_account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
        }
      ]
    }
  }
}
```

> 404 Response

```json
{
  "error": {
    "detail": "string",
    "id": "string",
    "name": "string"
  }
}
```

> default Response

```json
{
  "error": {
    "detail": "string",
    "id": "string",
    "name": "string"
  }
}
```

<h3 id="single-scheduled-transaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The requested Scheduled Transaction|[ScheduledTransactionResponse](#schemascheduledtransactionresponse)|
|404|Not Found|The scheduled transaction was not found|[ErrorResponse](#schemaerrorresponse)|
|default|Default|An error occurred|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
</aside>

<h1 id="ynab-api-endpoints-deprecated">Deprecated</h1>

## Bulk create transactions

<a id="opIdbulkCreateTransactions"></a>

> Code samples

```bash
curl https://example.com/budgets/string/transactions/bulk \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '{
    "transactions": [
      {
        "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "amount": 0,
        "approved": true,
        "category_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "cleared": "cleared",
        "date": "1970-01-01",
        "flag_color": "red",
        "import_id": "string",
        "memo": "string",
        "payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "payee_name": "string",
        "subtransactions": [
          {
            "amount": 0,
            "category_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "memo": "string",
            "payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "payee_name": "string"
          }
        ]
      }
    ]
  }'
```

`POST /budgets/{budget_id}/transactions/bulk`

Creates multiple transactions.  Although this endpoint is still supported, it is recommended to use 'POST /budgets/{budget_id}/transactions' to create multiple transactions.

> Body parameter

```json
{
  "transactions": [
    {
      "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "amount": 0,
      "approved": true,
      "category_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "cleared": "cleared",
      "date": "1970-01-01",
      "flag_color": "red",
      "import_id": "string",
      "memo": "string",
      "payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "payee_name": "string",
      "subtransactions": [
        {
          "amount": 0,
          "category_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "memo": "string",
          "payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "payee_name": "string"
        }
      ]
    }
  ]
}
```

<h3 id="bulk-create-transactions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|budget_id|path|string|true|The id of the budget. "last-used" can be used to specify the last used budget and "default" can be used if default budget selection is enabled (see: https://api.youneedabudget.com/#oauth-default-budget).|
|body|body|[BulkTransactions](#schemabulktransactions)|true|The list of transactions to create|
|» transactions|body|[[SaveTransaction](#schemasavetransaction)]|true|none|

> Example responses

> 201 Response

```json
{
  "data": {
    "bulk": {
      "duplicate_import_ids": [
        "string"
      ],
      "transaction_ids": [
        "string"
      ]
    }
  }
}
```

> 400 Response

```json
{
  "error": {
    "detail": "string",
    "id": "string",
    "name": "string"
  }
}
```

<h3 id="bulk-create-transactions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The bulk request was processed successfully|[BulkResponse](#schemabulkresponse)|
|400|Bad Request|The request could not be understood due to malformed syntax or validation error(s)|[ErrorResponse](#schemaerrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer
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
  "balance": 0,
  "cleared_balance": 0,
  "closed": true,
  "debt_escrow_amounts": {
    "property1": 0,
    "property2": 0
  },
  "debt_interest_rates": {
    "property1": 0,
    "property2": 0
  },
  "debt_minimum_payments": {
    "property1": 0,
    "property2": 0
  },
  "debt_original_balance": 0,
  "deleted": true,
  "direct_import_in_error": true,
  "direct_import_linked": true,
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "last_reconciled_at": "1970-01-01T00:00:00Z",
  "name": "string",
  "note": "string",
  "on_budget": true,
  "transfer_payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "type": "checking",
  "uncleared_balance": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|balance|integer(int64)|true|none|The current balance of the account in milliunits format|
|cleared_balance|integer(int64)|true|none|The current cleared balance of the account in milliunits format|
|closed|boolean|true|none|Whether this account is closed or not|
|debt_escrow_amounts|[LoanAccountPeriodicValue](#schemaloanaccountperiodicvalue)|false|none|none|
|debt_interest_rates|[LoanAccountPeriodicValue](#schemaloanaccountperiodicvalue)|false|none|none|
|debt_minimum_payments|[LoanAccountPeriodicValue](#schemaloanaccountperiodicvalue)|false|none|none|
|debt_original_balance|integer(int64)|false|none|The original debt/loan account balance, specified in milliunits format.|
|deleted|boolean|true|none|Whether or not the account has been deleted.  Deleted accounts will only be included in delta requests.|
|direct_import_in_error|boolean|false|none|If an account linked to a financial institution (direct_import_linked=true) and the linked connection is not in a healthy state, this will be true.|
|direct_import_linked|boolean|false|none|Whether or not the account is linked to a financial institution for automatic transaction import.|
|id|string(uuid)|true|none|none|
|last_reconciled_at|string(date-time)|false|none|A date/time specifying when the account was last reconciled.|
|name|string|true|none|none|
|note|string|false|none|none|
|on_budget|boolean|true|none|Whether this account is on budget or not|
|transfer_payee_id|string(uuid)|true|none|The payee id which should be used when transferring to this account|
|type|[AccountType](#schemaaccounttype)|true|none|The type of account|
|uncleared_balance|integer(int64)|true|none|The current uncleared balance of the account in milliunits format|

#### Enumerated Values

|Property|Value|
|---|---|
|type|checking|
|type|savings|
|type|cash|
|type|creditCard|
|type|lineOfCredit|
|type|otherAsset|
|type|otherLiability|
|type|mortgage|
|type|autoLoan|
|type|studentLoan|
|type|personalLoan|
|type|medicalDebt|
|type|otherDebt|

<h2 id="tocS_AccountResponse">AccountResponse</h2>
<!-- backwards compatibility -->
<a id="schemaaccountresponse"></a>
<a id="schema_AccountResponse"></a>
<a id="tocSaccountresponse"></a>
<a id="tocsaccountresponse"></a>

```json
{
  "data": {
    "account": {
      "balance": 0,
      "cleared_balance": 0,
      "closed": true,
      "debt_escrow_amounts": {
        "property1": 0,
        "property2": 0
      },
      "debt_interest_rates": {
        "property1": 0,
        "property2": 0
      },
      "debt_minimum_payments": {
        "property1": 0,
        "property2": 0
      },
      "debt_original_balance": 0,
      "deleted": true,
      "direct_import_in_error": true,
      "direct_import_linked": true,
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "last_reconciled_at": "1970-01-01T00:00:00Z",
      "name": "string",
      "note": "string",
      "on_budget": true,
      "transfer_payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "type": "checking",
      "uncleared_balance": 0
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|true|none|none|

<h2 id="tocS_AccountType">AccountType</h2>
<!-- backwards compatibility -->
<a id="schemaaccounttype"></a>
<a id="schema_AccountType"></a>
<a id="tocSaccounttype"></a>
<a id="tocsaccounttype"></a>

```json
"checking"
```

The type of account

<h2 id="tocS_AccountsResponse">AccountsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaaccountsresponse"></a>
<a id="schema_AccountsResponse"></a>
<a id="tocSaccountsresponse"></a>
<a id="tocsaccountsresponse"></a>

```json
{
  "data": {
    "accounts": [
      {
        "balance": 0,
        "cleared_balance": 0,
        "closed": true,
        "debt_escrow_amounts": {
          "property1": 0,
          "property2": 0
        },
        "debt_interest_rates": {
          "property1": 0,
          "property2": 0
        },
        "debt_minimum_payments": {
          "property1": 0,
          "property2": 0
        },
        "debt_original_balance": 0,
        "deleted": true,
        "direct_import_in_error": true,
        "direct_import_linked": true,
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "last_reconciled_at": "1970-01-01T00:00:00Z",
        "name": "string",
        "note": "string",
        "on_budget": true,
        "transfer_payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "type": "checking",
        "uncleared_balance": 0
      }
    ],
    "server_knowledge": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|true|none|none|

<h2 id="tocS_BudgetDetail">BudgetDetail</h2>
<!-- backwards compatibility -->
<a id="schemabudgetdetail"></a>
<a id="schema_BudgetDetail"></a>
<a id="tocSbudgetdetail"></a>
<a id="tocsbudgetdetail"></a>

```json
{
  "accounts": [
    {
      "balance": 0,
      "cleared_balance": 0,
      "closed": true,
      "debt_escrow_amounts": {
        "property1": 0,
        "property2": 0
      },
      "debt_interest_rates": {
        "property1": 0,
        "property2": 0
      },
      "debt_minimum_payments": {
        "property1": 0,
        "property2": 0
      },
      "debt_original_balance": 0,
      "deleted": true,
      "direct_import_in_error": true,
      "direct_import_linked": true,
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "last_reconciled_at": "1970-01-01T00:00:00Z",
      "name": "string",
      "note": "string",
      "on_budget": true,
      "transfer_payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "type": "checking",
      "uncleared_balance": 0
    }
  ],
  "currency_format": {
    "currency_symbol": "string",
    "decimal_digits": 0,
    "decimal_separator": "string",
    "display_symbol": true,
    "example_format": "string",
    "group_separator": "string",
    "iso_code": "string",
    "symbol_first": true
  },
  "date_format": {
    "format": "string"
  },
  "first_month": "1970-01-01",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "last_modified_on": "1970-01-01T00:00:00Z",
  "last_month": "1970-01-01",
  "name": "string",
  "categories": [
    {
      "activity": 0,
      "balance": 0,
      "budgeted": 0,
      "category_group_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "deleted": true,
      "goal_cadence": 0,
      "goal_cadence_frequency": 0,
      "goal_creation_month": "1970-01-01",
      "goal_day": 0,
      "goal_months_to_budget": 0,
      "goal_overall_funded": 0,
      "goal_overall_left": 0,
      "goal_percentage_complete": 0,
      "goal_target": 0,
      "goal_target_month": "1970-01-01",
      "goal_type": "TB",
      "goal_under_funded": 0,
      "hidden": true,
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "string",
      "note": "string",
      "original_category_group_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  ],
  "category_groups": [
    {
      "deleted": true,
      "hidden": true,
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "string"
    }
  ],
  "months": [
    {
      "activity": 0,
      "age_of_money": 0,
      "budgeted": 0,
      "deleted": true,
      "income": 0,
      "month": "1970-01-01",
      "note": "string",
      "to_be_budgeted": 0,
      "categories": [
        {
          "activity": 0,
          "balance": 0,
          "budgeted": 0,
          "category_group_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "deleted": true,
          "goal_cadence": 0,
          "goal_cadence_frequency": 0,
          "goal_creation_month": "1970-01-01",
          "goal_day": 0,
          "goal_months_to_budget": 0,
          "goal_overall_funded": 0,
          "goal_overall_left": 0,
          "goal_percentage_complete": 0,
          "goal_target": 0,
          "goal_target_month": "1970-01-01",
          "goal_type": "TB",
          "goal_under_funded": 0,
          "hidden": true,
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "name": "string",
          "note": "string",
          "original_category_group_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
        }
      ]
    }
  ],
  "payee_locations": [
    {
      "deleted": true,
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "latitude": "string",
      "longitude": "string",
      "payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  ],
  "payees": [
    {
      "deleted": true,
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "string",
      "transfer_account_id": "string"
    }
  ],
  "scheduled_subtransactions": [
    {
      "amount": 0,
      "category_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "deleted": true,
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "memo": "string",
      "payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "scheduled_transaction_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "transfer_account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  ],
  "scheduled_transactions": [
    {
      "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "amount": 0,
      "category_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "date_first": "1970-01-01",
      "date_next": "1970-01-01",
      "deleted": true,
      "flag_color": "red",
      "frequency": "never",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "memo": "string",
      "payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "transfer_account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  ],
  "subtransactions": [
    {
      "amount": 0,
      "category_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "category_name": "string",
      "deleted": true,
      "id": "string",
      "memo": "string",
      "payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "payee_name": "string",
      "transaction_id": "string",
      "transfer_account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "transfer_transaction_id": "string"
    }
  ],
  "transactions": [
    {
      "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "amount": 0,
      "approved": true,
      "category_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "cleared": "cleared",
      "date": "1970-01-01",
      "debt_transaction_type": "payment",
      "deleted": true,
      "flag_color": "red",
      "id": "string",
      "import_id": "string",
      "import_payee_name": "string",
      "import_payee_name_original": "string",
      "matched_transaction_id": "string",
      "memo": "string",
      "payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "transfer_account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "transfer_transaction_id": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accounts|[[Account](#schemaaccount)]|false|none|The budget accounts (only included if `include_accounts=true` specified as query parameter)|
|currency_format|[CurrencyFormat](#schemacurrencyformat)|false|none|The currency format setting for the budget.  In some cases the format will not be available and will be specified as null.|
|date_format|[DateFormat](#schemadateformat)|false|none|The date format setting for the budget.  In some cases the format will not be available and will be specified as null.|
|first_month|string(date)|false|none|The earliest budget month|
|id|string(uuid)|true|none|none|
|last_modified_on|string(date-time)|false|none|The last time any changes were made to the budget from either a web or mobile client|
|last_month|string(date)|false|none|The latest budget month|
|name|string|true|none|none|
|accounts|[[Account](#schemaaccount)]|false|none|none|
|categories|[[Category](#schemacategory)]|false|none|none|
|category_groups|[[CategoryGroup](#schemacategorygroup)]|false|none|none|
|months|[[MonthDetail](#schemamonthdetail)]|false|none|none|
|payee_locations|[[PayeeLocation](#schemapayeelocation)]|false|none|none|
|payees|[[Payee](#schemapayee)]|false|none|none|
|scheduled_subtransactions|[[ScheduledSubTransaction](#schemascheduledsubtransaction)]|false|none|none|
|scheduled_transactions|[[ScheduledTransactionSummary](#schemascheduledtransactionsummary)]|false|none|none|
|subtransactions|[[SubTransaction](#schemasubtransaction)]|false|none|none|
|transactions|[[TransactionSummary](#schematransactionsummary)]|false|none|none|

<h2 id="tocS_BudgetDetailResponse">BudgetDetailResponse</h2>
<!-- backwards compatibility -->
<a id="schemabudgetdetailresponse"></a>
<a id="schema_BudgetDetailResponse"></a>
<a id="tocSbudgetdetailresponse"></a>
<a id="tocsbudgetdetailresponse"></a>

```json
{
  "data": {
    "budget": {
      "accounts": [
        {
          "balance": 0,
          "cleared_balance": 0,
          "closed": true,
          "debt_escrow_amounts": {
            "property1": 0,
            "property2": 0
          },
          "debt_interest_rates": {
            "property1": 0,
            "property2": 0
          },
          "debt_minimum_payments": {
            "property1": 0,
            "property2": 0
          },
          "debt_original_balance": 0,
          "deleted": true,
          "direct_import_in_error": true,
          "direct_import_linked": true,
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "last_reconciled_at": "1970-01-01T00:00:00Z",
          "name": "string",
          "note": "string",
          "on_budget": true,
          "transfer_payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "type": "checking",
          "uncleared_balance": 0
        }
      ],
      "currency_format": {
        "currency_symbol": "string",
        "decimal_digits": 0,
        "decimal_separator": "string",
        "display_symbol": true,
        "example_format": "string",
        "group_separator": "string",
        "iso_code": "string",
        "symbol_first": true
      },
      "date_format": {
        "format": "string"
      },
      "first_month": "1970-01-01",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "last_modified_on": "1970-01-01T00:00:00Z",
      "last_month": "1970-01-01",
      "name": "string",
      "categories": [
        {
          "activity": 0,
          "balance": 0,
          "budgeted": 0,
          "category_group_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "deleted": true,
          "goal_cadence": 0,
          "goal_cadence_frequency": 0,
          "goal_creation_month": "1970-01-01",
          "goal_day": 0,
          "goal_months_to_budget": 0,
          "goal_overall_funded": 0,
          "goal_overall_left": 0,
          "goal_percentage_complete": 0,
          "goal_target": 0,
          "goal_target_month": "1970-01-01",
          "goal_type": "TB",
          "goal_under_funded": 0,
          "hidden": true,
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "name": "string",
          "note": "string",
          "original_category_group_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
        }
      ],
      "category_groups": [
        {
          "deleted": true,
          "hidden": true,
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "name": "string"
        }
      ],
      "months": [
        {
          "activity": 0,
          "age_of_money": 0,
          "budgeted": 0,
          "deleted": true,
          "income": 0,
          "month": "1970-01-01",
          "note": "string",
          "to_be_budgeted": 0,
          "categories": [
            {
              "activity": 0,
              "balance": 0,
              "budgeted": 0,
              "category_group_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
              "deleted": true,
              "goal_cadence": 0,
              "goal_cadence_frequency": 0,
              "goal_creation_month": "1970-01-01",
              "goal_day": 0,
              "goal_months_to_budget": 0,
              "goal_overall_funded": 0,
              "goal_overall_left": 0,
              "goal_percentage_complete": 0,
              "goal_target": 0,
              "goal_target_month": "1970-01-01",
              "goal_type": "TB",
              "goal_under_funded": 0,
              "hidden": true,
              "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
              "name": "string",
              "note": "string",
              "original_category_group_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
            }
          ]
        }
      ],
      "payee_locations": [
        {
          "deleted": true,
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "latitude": "string",
          "longitude": "string",
          "payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
        }
      ],
      "payees": [
        {
          "deleted": true,
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "name": "string",
          "transfer_account_id": "string"
        }
      ],
      "scheduled_subtransactions": [
        {
          "amount": 0,
          "category_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "deleted": true,
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "memo": "string",
          "payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "scheduled_transaction_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "transfer_account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
        }
      ],
      "scheduled_transactions": [
        {
          "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "amount": 0,
          "category_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "date_first": "1970-01-01",
          "date_next": "1970-01-01",
          "deleted": true,
          "flag_color": "red",
          "frequency": "never",
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "memo": "string",
          "payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "transfer_account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
        }
      ],
      "subtransactions": [
        {
          "amount": 0,
          "category_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "category_name": "string",
          "deleted": true,
          "id": "string",
          "memo": "string",
          "payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "payee_name": "string",
          "transaction_id": "string",
          "transfer_account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "transfer_transaction_id": "string"
        }
      ],
      "transactions": [
        {
          "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "amount": 0,
          "approved": true,
          "category_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "cleared": "cleared",
          "date": "1970-01-01",
          "debt_transaction_type": "payment",
          "deleted": true,
          "flag_color": "red",
          "id": "string",
          "import_id": "string",
          "import_payee_name": "string",
          "import_payee_name_original": "string",
          "matched_transaction_id": "string",
          "memo": "string",
          "payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "transfer_account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "transfer_transaction_id": "string"
        }
      ]
    },
    "server_knowledge": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|true|none|none|

<h2 id="tocS_BudgetSettings">BudgetSettings</h2>
<!-- backwards compatibility -->
<a id="schemabudgetsettings"></a>
<a id="schema_BudgetSettings"></a>
<a id="tocSbudgetsettings"></a>
<a id="tocsbudgetsettings"></a>

```json
{
  "currency_format": {
    "currency_symbol": "string",
    "decimal_digits": 0,
    "decimal_separator": "string",
    "display_symbol": true,
    "example_format": "string",
    "group_separator": "string",
    "iso_code": "string",
    "symbol_first": true
  },
  "date_format": {
    "format": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currency_format|[CurrencyFormat](#schemacurrencyformat)|true|none|The currency format setting for the budget.  In some cases the format will not be available and will be specified as null.|
|date_format|[DateFormat](#schemadateformat)|true|none|The date format setting for the budget.  In some cases the format will not be available and will be specified as null.|

<h2 id="tocS_BudgetSettingsResponse">BudgetSettingsResponse</h2>
<!-- backwards compatibility -->
<a id="schemabudgetsettingsresponse"></a>
<a id="schema_BudgetSettingsResponse"></a>
<a id="tocSbudgetsettingsresponse"></a>
<a id="tocsbudgetsettingsresponse"></a>

```json
{
  "data": {
    "settings": {
      "currency_format": {
        "currency_symbol": "string",
        "decimal_digits": 0,
        "decimal_separator": "string",
        "display_symbol": true,
        "example_format": "string",
        "group_separator": "string",
        "iso_code": "string",
        "symbol_first": true
      },
      "date_format": {
        "format": "string"
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|true|none|none|

<h2 id="tocS_BudgetSummary">BudgetSummary</h2>
<!-- backwards compatibility -->
<a id="schemabudgetsummary"></a>
<a id="schema_BudgetSummary"></a>
<a id="tocSbudgetsummary"></a>
<a id="tocsbudgetsummary"></a>

```json
{
  "accounts": [
    {
      "balance": 0,
      "cleared_balance": 0,
      "closed": true,
      "debt_escrow_amounts": {
        "property1": 0,
        "property2": 0
      },
      "debt_interest_rates": {
        "property1": 0,
        "property2": 0
      },
      "debt_minimum_payments": {
        "property1": 0,
        "property2": 0
      },
      "debt_original_balance": 0,
      "deleted": true,
      "direct_import_in_error": true,
      "direct_import_linked": true,
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "last_reconciled_at": "1970-01-01T00:00:00Z",
      "name": "string",
      "note": "string",
      "on_budget": true,
      "transfer_payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "type": "checking",
      "uncleared_balance": 0
    }
  ],
  "currency_format": {
    "currency_symbol": "string",
    "decimal_digits": 0,
    "decimal_separator": "string",
    "display_symbol": true,
    "example_format": "string",
    "group_separator": "string",
    "iso_code": "string",
    "symbol_first": true
  },
  "date_format": {
    "format": "string"
  },
  "first_month": "1970-01-01",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "last_modified_on": "1970-01-01T00:00:00Z",
  "last_month": "1970-01-01",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accounts|[[Account](#schemaaccount)]|false|none|The budget accounts (only included if `include_accounts=true` specified as query parameter)|
|currency_format|[CurrencyFormat](#schemacurrencyformat)|false|none|The currency format setting for the budget.  In some cases the format will not be available and will be specified as null.|
|date_format|[DateFormat](#schemadateformat)|false|none|The date format setting for the budget.  In some cases the format will not be available and will be specified as null.|
|first_month|string(date)|false|none|The earliest budget month|
|id|string(uuid)|true|none|none|
|last_modified_on|string(date-time)|false|none|The last time any changes were made to the budget from either a web or mobile client|
|last_month|string(date)|false|none|The latest budget month|
|name|string|true|none|none|

<h2 id="tocS_BudgetSummaryResponse">BudgetSummaryResponse</h2>
<!-- backwards compatibility -->
<a id="schemabudgetsummaryresponse"></a>
<a id="schema_BudgetSummaryResponse"></a>
<a id="tocSbudgetsummaryresponse"></a>
<a id="tocsbudgetsummaryresponse"></a>

```json
{
  "data": {
    "budgets": [
      {
        "accounts": [
          {
            "balance": 0,
            "cleared_balance": 0,
            "closed": true,
            "debt_escrow_amounts": {
              "property1": 0,
              "property2": 0
            },
            "debt_interest_rates": {
              "property1": 0,
              "property2": 0
            },
            "debt_minimum_payments": {
              "property1": 0,
              "property2": 0
            },
            "debt_original_balance": 0,
            "deleted": true,
            "direct_import_in_error": true,
            "direct_import_linked": true,
            "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "last_reconciled_at": "1970-01-01T00:00:00Z",
            "name": "string",
            "note": "string",
            "on_budget": true,
            "transfer_payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "type": "checking",
            "uncleared_balance": 0
          }
        ],
        "currency_format": {
          "currency_symbol": "string",
          "decimal_digits": 0,
          "decimal_separator": "string",
          "display_symbol": true,
          "example_format": "string",
          "group_separator": "string",
          "iso_code": "string",
          "symbol_first": true
        },
        "date_format": {
          "format": "string"
        },
        "first_month": "1970-01-01",
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "last_modified_on": "1970-01-01T00:00:00Z",
        "last_month": "1970-01-01",
        "name": "string"
      }
    ],
    "default_budget": {
      "accounts": [
        {
          "balance": 0,
          "cleared_balance": 0,
          "closed": true,
          "debt_escrow_amounts": {
            "property1": 0,
            "property2": 0
          },
          "debt_interest_rates": {
            "property1": 0,
            "property2": 0
          },
          "debt_minimum_payments": {
            "property1": 0,
            "property2": 0
          },
          "debt_original_balance": 0,
          "deleted": true,
          "direct_import_in_error": true,
          "direct_import_linked": true,
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "last_reconciled_at": "1970-01-01T00:00:00Z",
          "name": "string",
          "note": "string",
          "on_budget": true,
          "transfer_payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "type": "checking",
          "uncleared_balance": 0
        }
      ],
      "currency_format": {
        "currency_symbol": "string",
        "decimal_digits": 0,
        "decimal_separator": "string",
        "display_symbol": true,
        "example_format": "string",
        "group_separator": "string",
        "iso_code": "string",
        "symbol_first": true
      },
      "date_format": {
        "format": "string"
      },
      "first_month": "1970-01-01",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "last_modified_on": "1970-01-01T00:00:00Z",
      "last_month": "1970-01-01",
      "name": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|true|none|none|

<h2 id="tocS_BulkResponse">BulkResponse</h2>
<!-- backwards compatibility -->
<a id="schemabulkresponse"></a>
<a id="schema_BulkResponse"></a>
<a id="tocSbulkresponse"></a>
<a id="tocsbulkresponse"></a>

```json
{
  "data": {
    "bulk": {
      "duplicate_import_ids": [
        "string"
      ],
      "transaction_ids": [
        "string"
      ]
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|true|none|none|

<h2 id="tocS_BulkTransactions">BulkTransactions</h2>
<!-- backwards compatibility -->
<a id="schemabulktransactions"></a>
<a id="schema_BulkTransactions"></a>
<a id="tocSbulktransactions"></a>
<a id="tocsbulktransactions"></a>

```json
{
  "transactions": [
    {
      "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "amount": 0,
      "approved": true,
      "category_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "cleared": "cleared",
      "date": "1970-01-01",
      "flag_color": "red",
      "import_id": "string",
      "memo": "string",
      "payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "payee_name": "string",
      "subtransactions": [
        {
          "amount": 0,
          "category_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "memo": "string",
          "payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "payee_name": "string"
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|transactions|[[SaveTransaction](#schemasavetransaction)]|true|none|none|

<h2 id="tocS_CategoriesResponse">CategoriesResponse</h2>
<!-- backwards compatibility -->
<a id="schemacategoriesresponse"></a>
<a id="schema_CategoriesResponse"></a>
<a id="tocScategoriesresponse"></a>
<a id="tocscategoriesresponse"></a>

```json
{
  "data": {
    "category_groups": [
      {
        "deleted": true,
        "hidden": true,
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "name": "string",
        "categories": [
          {
            "activity": 0,
            "balance": 0,
            "budgeted": 0,
            "category_group_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "deleted": true,
            "goal_cadence": 0,
            "goal_cadence_frequency": 0,
            "goal_creation_month": "1970-01-01",
            "goal_day": 0,
            "goal_months_to_budget": 0,
            "goal_overall_funded": 0,
            "goal_overall_left": 0,
            "goal_percentage_complete": 0,
            "goal_target": 0,
            "goal_target_month": "1970-01-01",
            "goal_type": "TB",
            "goal_under_funded": 0,
            "hidden": true,
            "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "name": "string",
            "note": "string",
            "original_category_group_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
          }
        ]
      }
    ],
    "server_knowledge": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|true|none|none|

<h2 id="tocS_Category">Category</h2>
<!-- backwards compatibility -->
<a id="schemacategory"></a>
<a id="schema_Category"></a>
<a id="tocScategory"></a>
<a id="tocscategory"></a>

```json
{
  "activity": 0,
  "balance": 0,
  "budgeted": 0,
  "category_group_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "deleted": true,
  "goal_cadence": 0,
  "goal_cadence_frequency": 0,
  "goal_creation_month": "1970-01-01",
  "goal_day": 0,
  "goal_months_to_budget": 0,
  "goal_overall_funded": 0,
  "goal_overall_left": 0,
  "goal_percentage_complete": 0,
  "goal_target": 0,
  "goal_target_month": "1970-01-01",
  "goal_type": "TB",
  "goal_under_funded": 0,
  "hidden": true,
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "note": "string",
  "original_category_group_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activity|integer(int64)|true|none|Activity amount in milliunits format|
|balance|integer(int64)|true|none|Balance in milliunits format|
|budgeted|integer(int64)|true|none|Budgeted amount in milliunits format|
|category_group_id|string(uuid)|true|none|none|
|deleted|boolean|true|none|Whether or not the category has been deleted.  Deleted categories will only be included in delta requests.|
|goal_cadence|integer(int32)|false|none|The goal cadence|
|goal_cadence_frequency|integer(int32)|false|none|The goal cadence frequency|
|goal_creation_month|string(date)|false|none|The month a goal was created|
|goal_day|integer(int32)|false|none|The day of the goal|
|goal_months_to_budget|integer(int32)|false|none|The number of months, including the current month, left in the current goal period.|
|goal_overall_funded|integer(int64)|false|none|The total amount funded towards the goal within the current goal period.|
|goal_overall_left|integer(int64)|false|none|The amount of funding still needed to complete the goal within the current goal period.|
|goal_percentage_complete|integer(int32)|false|none|The percentage completion of the goal|
|goal_target|integer(int64)|false|none|The goal target amount in milliunits|
|goal_target_month|string(date)|false|none|The original target month for the goal to be completed.  Only some goal types specify this date.|
|goal_type|string|false|none|The type of goal, if the category has a goal (TB='Target Category Balance', TBD='Target Category Balance by Date', MF='Monthly Funding', NEED='Plan Your Spending')|
|goal_under_funded|integer(int64)|false|none|The amount of funding still needed in the current month to stay on track towards completing the goal within the current goal period.  This amount will generally correspond to the 'Underfunded' amount in the web and mobile clients except when viewing a category with a Needed for Spending Goal in a future month.  The web and mobile clients will ignore any funding from a prior goal period when viewing category with a Needed for Spending Goal in a future month.|
|hidden|boolean|true|none|Whether or not the category is hidden|
|id|string(uuid)|true|none|none|
|name|string|true|none|none|
|note|string|false|none|none|
|original_category_group_id|string(uuid)|false|none|If category is hidden this is the id of the category group it originally belonged to before it was hidden.|

#### Enumerated Values

|Property|Value|
|---|---|
|goal_type|TB|
|goal_type|TBD|
|goal_type|MF|
|goal_type|NEED|
|goal_type|DEBT|
|goal_type|null|

<h2 id="tocS_CategoryGroup">CategoryGroup</h2>
<!-- backwards compatibility -->
<a id="schemacategorygroup"></a>
<a id="schema_CategoryGroup"></a>
<a id="tocScategorygroup"></a>
<a id="tocscategorygroup"></a>

```json
{
  "deleted": true,
  "hidden": true,
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deleted|boolean|true|none|Whether or not the category group has been deleted.  Deleted category groups will only be included in delta requests.|
|hidden|boolean|true|none|Whether or not the category group is hidden|
|id|string(uuid)|true|none|none|
|name|string|true|none|none|

<h2 id="tocS_CategoryGroupWithCategories">CategoryGroupWithCategories</h2>
<!-- backwards compatibility -->
<a id="schemacategorygroupwithcategories"></a>
<a id="schema_CategoryGroupWithCategories"></a>
<a id="tocScategorygroupwithcategories"></a>
<a id="tocscategorygroupwithcategories"></a>

```json
{
  "deleted": true,
  "hidden": true,
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "categories": [
    {
      "activity": 0,
      "balance": 0,
      "budgeted": 0,
      "category_group_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "deleted": true,
      "goal_cadence": 0,
      "goal_cadence_frequency": 0,
      "goal_creation_month": "1970-01-01",
      "goal_day": 0,
      "goal_months_to_budget": 0,
      "goal_overall_funded": 0,
      "goal_overall_left": 0,
      "goal_percentage_complete": 0,
      "goal_target": 0,
      "goal_target_month": "1970-01-01",
      "goal_type": "TB",
      "goal_under_funded": 0,
      "hidden": true,
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "string",
      "note": "string",
      "original_category_group_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deleted|boolean|true|none|Whether or not the category group has been deleted.  Deleted category groups will only be included in delta requests.|
|hidden|boolean|true|none|Whether or not the category group is hidden|
|id|string(uuid)|true|none|none|
|name|string|true|none|none|
|categories|[[Category](#schemacategory)]|true|none|Category group categories.  Amounts (budgeted, activity, balance, etc.) are specific to the current budget month (UTC).|

<h2 id="tocS_CategoryResponse">CategoryResponse</h2>
<!-- backwards compatibility -->
<a id="schemacategoryresponse"></a>
<a id="schema_CategoryResponse"></a>
<a id="tocScategoryresponse"></a>
<a id="tocscategoryresponse"></a>

```json
{
  "data": {
    "category": {
      "activity": 0,
      "balance": 0,
      "budgeted": 0,
      "category_group_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "deleted": true,
      "goal_cadence": 0,
      "goal_cadence_frequency": 0,
      "goal_creation_month": "1970-01-01",
      "goal_day": 0,
      "goal_months_to_budget": 0,
      "goal_overall_funded": 0,
      "goal_overall_left": 0,
      "goal_percentage_complete": 0,
      "goal_target": 0,
      "goal_target_month": "1970-01-01",
      "goal_type": "TB",
      "goal_under_funded": 0,
      "hidden": true,
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "string",
      "note": "string",
      "original_category_group_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|true|none|none|

<h2 id="tocS_CurrencyFormat">CurrencyFormat</h2>
<!-- backwards compatibility -->
<a id="schemacurrencyformat"></a>
<a id="schema_CurrencyFormat"></a>
<a id="tocScurrencyformat"></a>
<a id="tocscurrencyformat"></a>

```json
{
  "currency_symbol": "string",
  "decimal_digits": 0,
  "decimal_separator": "string",
  "display_symbol": true,
  "example_format": "string",
  "group_separator": "string",
  "iso_code": "string",
  "symbol_first": true
}
```

The currency format setting for the budget.  In some cases the format will not be available and will be specified as null.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currency_symbol|string|true|none|none|
|decimal_digits|integer(int32)|true|none|none|
|decimal_separator|string|true|none|none|
|display_symbol|boolean|true|none|none|
|example_format|string|true|none|none|
|group_separator|string|true|none|none|
|iso_code|string|true|none|none|
|symbol_first|boolean|true|none|none|

<h2 id="tocS_DateFormat">DateFormat</h2>
<!-- backwards compatibility -->
<a id="schemadateformat"></a>
<a id="schema_DateFormat"></a>
<a id="tocSdateformat"></a>
<a id="tocsdateformat"></a>

```json
{
  "format": "string"
}
```

The date format setting for the budget.  In some cases the format will not be available and will be specified as null.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|format|string|true|none|none|

<h2 id="tocS_ErrorDetail">ErrorDetail</h2>
<!-- backwards compatibility -->
<a id="schemaerrordetail"></a>
<a id="schema_ErrorDetail"></a>
<a id="tocSerrordetail"></a>
<a id="tocserrordetail"></a>

```json
{
  "detail": "string",
  "id": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|true|none|none|
|id|string|true|none|none|
|name|string|true|none|none|

<h2 id="tocS_ErrorResponse">ErrorResponse</h2>
<!-- backwards compatibility -->
<a id="schemaerrorresponse"></a>
<a id="schema_ErrorResponse"></a>
<a id="tocSerrorresponse"></a>
<a id="tocserrorresponse"></a>

```json
{
  "error": {
    "detail": "string",
    "id": "string",
    "name": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|[ErrorDetail](#schemaerrordetail)|true|none|none|

<h2 id="tocS_HybridTransaction">HybridTransaction</h2>
<!-- backwards compatibility -->
<a id="schemahybridtransaction"></a>
<a id="schema_HybridTransaction"></a>
<a id="tocShybridtransaction"></a>
<a id="tocshybridtransaction"></a>

```json
{
  "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "amount": 0,
  "approved": true,
  "category_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "cleared": "cleared",
  "date": "1970-01-01",
  "debt_transaction_type": "payment",
  "deleted": true,
  "flag_color": "red",
  "id": "string",
  "import_id": "string",
  "import_payee_name": "string",
  "import_payee_name_original": "string",
  "matched_transaction_id": "string",
  "memo": "string",
  "payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "transfer_account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "transfer_transaction_id": "string",
  "account_name": "string",
  "category_name": "string",
  "parent_transaction_id": "string",
  "payee_name": "string",
  "type": "transaction"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|string(uuid)|true|none|none|
|amount|integer(int64)|true|none|The transaction amount in milliunits format|
|approved|boolean|true|none|Whether or not the transaction is approved|
|category_id|string(uuid)|false|none|none|
|cleared|string|true|none|The cleared status of the transaction|
|date|string(date)|true|none|The transaction date in ISO format (e.g. 2016-12-01)|
|debt_transaction_type|string|false|none|If the transaction is a debt/loan account transaction, the type of transaction|
|deleted|boolean|true|none|Whether or not the transaction has been deleted.  Deleted transactions will only be included in delta requests.|
|flag_color|string|false|none|The transaction flag|
|id|string|true|none|none|
|import_id|string|false|none|If the transaction was imported, this field is a unique (by account) import identifier.  If this transaction was imported through File Based Import or Direct Import and not through the API, the import_id will have the format: 'YNAB:[milliunit_amount]:[iso_date]:[occurrence]'.  For example, a transaction dated 2015-12-30 in the amount of -$294.23 USD would have an import_id of 'YNAB:-294230:2015-12-30:1'.  If a second transaction on the same account was imported and had the same date and same amount, its import_id would be 'YNAB:-294230:2015-12-30:2'.|
|import_payee_name|string|false|none|If the transaction was imported, the payee name that was used when importing and before applying any payee rename rules|
|import_payee_name_original|string|false|none|If the transaction was imported, the original payee name as it appeared on the statement|
|matched_transaction_id|string|false|none|If transaction is matched, the id of the matched transaction|
|memo|string|false|none|none|
|payee_id|string(uuid)|false|none|none|
|transfer_account_id|string(uuid)|false|none|If a transfer transaction, the account to which it transfers|
|transfer_transaction_id|string|false|none|If a transfer transaction, the id of transaction on the other side of the transfer|
|account_name|string|true|none|none|
|category_name|string|false|none|none|
|parent_transaction_id|string|false|none|For subtransaction types, this is the id of the parent transaction.  For transaction types, this id will be always be null.|
|payee_name|string|false|none|none|
|type|string|true|none|Whether the hybrid transaction represents a regular transaction or a subtransaction|

#### Enumerated Values

|Property|Value|
|---|---|
|cleared|cleared|
|cleared|uncleared|
|cleared|reconciled|
|debt_transaction_type|payment|
|debt_transaction_type|refund|
|debt_transaction_type|fee|
|debt_transaction_type|interest|
|debt_transaction_type|escrow|
|debt_transaction_type|balancedAdjustment|
|debt_transaction_type|credit|
|debt_transaction_type|charge|
|debt_transaction_type|null|
|flag_color|red|
|flag_color|orange|
|flag_color|yellow|
|flag_color|green|
|flag_color|blue|
|flag_color|purple|
|flag_color|null|
|type|transaction|
|type|subtransaction|

<h2 id="tocS_HybridTransactionsResponse">HybridTransactionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemahybridtransactionsresponse"></a>
<a id="schema_HybridTransactionsResponse"></a>
<a id="tocShybridtransactionsresponse"></a>
<a id="tocshybridtransactionsresponse"></a>

```json
{
  "data": {
    "server_knowledge": 0,
    "transactions": [
      {
        "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "amount": 0,
        "approved": true,
        "category_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "cleared": "cleared",
        "date": "1970-01-01",
        "debt_transaction_type": "payment",
        "deleted": true,
        "flag_color": "red",
        "id": "string",
        "import_id": "string",
        "import_payee_name": "string",
        "import_payee_name_original": "string",
        "matched_transaction_id": "string",
        "memo": "string",
        "payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "transfer_account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "transfer_transaction_id": "string",
        "account_name": "string",
        "category_name": "string",
        "parent_transaction_id": "string",
        "payee_name": "string",
        "type": "transaction"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|true|none|none|

<h2 id="tocS_LoanAccountPeriodicValue">LoanAccountPeriodicValue</h2>
<!-- backwards compatibility -->
<a id="schemaloanaccountperiodicvalue"></a>
<a id="schema_LoanAccountPeriodicValue"></a>
<a id="tocSloanaccountperiodicvalue"></a>
<a id="tocsloanaccountperiodicvalue"></a>

```json
{
  "property1": 0,
  "property2": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|integer(int64)|false|none|none|

<h2 id="tocS_MonthDetail">MonthDetail</h2>
<!-- backwards compatibility -->
<a id="schemamonthdetail"></a>
<a id="schema_MonthDetail"></a>
<a id="tocSmonthdetail"></a>
<a id="tocsmonthdetail"></a>

```json
{
  "activity": 0,
  "age_of_money": 0,
  "budgeted": 0,
  "deleted": true,
  "income": 0,
  "month": "1970-01-01",
  "note": "string",
  "to_be_budgeted": 0,
  "categories": [
    {
      "activity": 0,
      "balance": 0,
      "budgeted": 0,
      "category_group_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "deleted": true,
      "goal_cadence": 0,
      "goal_cadence_frequency": 0,
      "goal_creation_month": "1970-01-01",
      "goal_day": 0,
      "goal_months_to_budget": 0,
      "goal_overall_funded": 0,
      "goal_overall_left": 0,
      "goal_percentage_complete": 0,
      "goal_target": 0,
      "goal_target_month": "1970-01-01",
      "goal_type": "TB",
      "goal_under_funded": 0,
      "hidden": true,
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "string",
      "note": "string",
      "original_category_group_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activity|integer(int64)|true|none|The total amount of transactions in the month, excluding those categorized to 'Inflow: Ready to Assign'|
|age_of_money|integer(int32)|false|none|The Age of Money as of the month|
|budgeted|integer(int64)|true|none|The total amount budgeted in the month|
|deleted|boolean|true|none|Whether or not the month has been deleted.  Deleted months will only be included in delta requests.|
|income|integer(int64)|true|none|The total amount of transactions categorized to 'Inflow: Ready to Assign' in the month|
|month|string(date)|true|none|none|
|note|string|false|none|none|
|to_be_budgeted|integer(int64)|true|none|The available amount for 'Ready to Assign'|
|categories|[[Category](#schemacategory)]|true|none|The budget month categories.  Amounts (budgeted, activity, balance, etc.) are specific to the {month} parameter specified.|

<h2 id="tocS_MonthDetailResponse">MonthDetailResponse</h2>
<!-- backwards compatibility -->
<a id="schemamonthdetailresponse"></a>
<a id="schema_MonthDetailResponse"></a>
<a id="tocSmonthdetailresponse"></a>
<a id="tocsmonthdetailresponse"></a>

```json
{
  "data": {
    "month": {
      "activity": 0,
      "age_of_money": 0,
      "budgeted": 0,
      "deleted": true,
      "income": 0,
      "month": "1970-01-01",
      "note": "string",
      "to_be_budgeted": 0,
      "categories": [
        {
          "activity": 0,
          "balance": 0,
          "budgeted": 0,
          "category_group_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "deleted": true,
          "goal_cadence": 0,
          "goal_cadence_frequency": 0,
          "goal_creation_month": "1970-01-01",
          "goal_day": 0,
          "goal_months_to_budget": 0,
          "goal_overall_funded": 0,
          "goal_overall_left": 0,
          "goal_percentage_complete": 0,
          "goal_target": 0,
          "goal_target_month": "1970-01-01",
          "goal_type": "TB",
          "goal_under_funded": 0,
          "hidden": true,
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "name": "string",
          "note": "string",
          "original_category_group_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
        }
      ]
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|true|none|none|

<h2 id="tocS_MonthSummariesResponse">MonthSummariesResponse</h2>
<!-- backwards compatibility -->
<a id="schemamonthsummariesresponse"></a>
<a id="schema_MonthSummariesResponse"></a>
<a id="tocSmonthsummariesresponse"></a>
<a id="tocsmonthsummariesresponse"></a>

```json
{
  "data": {
    "months": [
      {
        "activity": 0,
        "age_of_money": 0,
        "budgeted": 0,
        "deleted": true,
        "income": 0,
        "month": "1970-01-01",
        "note": "string",
        "to_be_budgeted": 0
      }
    ],
    "server_knowledge": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|true|none|none|

<h2 id="tocS_MonthSummary">MonthSummary</h2>
<!-- backwards compatibility -->
<a id="schemamonthsummary"></a>
<a id="schema_MonthSummary"></a>
<a id="tocSmonthsummary"></a>
<a id="tocsmonthsummary"></a>

```json
{
  "activity": 0,
  "age_of_money": 0,
  "budgeted": 0,
  "deleted": true,
  "income": 0,
  "month": "1970-01-01",
  "note": "string",
  "to_be_budgeted": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activity|integer(int64)|true|none|The total amount of transactions in the month, excluding those categorized to 'Inflow: Ready to Assign'|
|age_of_money|integer(int32)|false|none|The Age of Money as of the month|
|budgeted|integer(int64)|true|none|The total amount budgeted in the month|
|deleted|boolean|true|none|Whether or not the month has been deleted.  Deleted months will only be included in delta requests.|
|income|integer(int64)|true|none|The total amount of transactions categorized to 'Inflow: Ready to Assign' in the month|
|month|string(date)|true|none|none|
|note|string|false|none|none|
|to_be_budgeted|integer(int64)|true|none|The available amount for 'Ready to Assign'|

<h2 id="tocS_PatchMonthCategoryWrapper">PatchMonthCategoryWrapper</h2>
<!-- backwards compatibility -->
<a id="schemapatchmonthcategorywrapper"></a>
<a id="schema_PatchMonthCategoryWrapper"></a>
<a id="tocSpatchmonthcategorywrapper"></a>
<a id="tocspatchmonthcategorywrapper"></a>

```json
{
  "category": {
    "budgeted": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|[SaveMonthCategory](#schemasavemonthcategory)|true|none|none|

<h2 id="tocS_PatchTransactionsWrapper">PatchTransactionsWrapper</h2>
<!-- backwards compatibility -->
<a id="schemapatchtransactionswrapper"></a>
<a id="schema_PatchTransactionsWrapper"></a>
<a id="tocSpatchtransactionswrapper"></a>
<a id="tocspatchtransactionswrapper"></a>

```json
{
  "transactions": [
    {
      "id": "string",
      "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "amount": 0,
      "approved": true,
      "category_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "cleared": "cleared",
      "date": "1970-01-01",
      "flag_color": "red",
      "import_id": "string",
      "memo": "string",
      "payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "payee_name": "string",
      "subtransactions": [
        {
          "amount": 0,
          "category_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "memo": "string",
          "payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "payee_name": "string"
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|transactions|[[SaveTransactionWithId](#schemasavetransactionwithid)]|true|none|none|

<h2 id="tocS_Payee">Payee</h2>
<!-- backwards compatibility -->
<a id="schemapayee"></a>
<a id="schema_Payee"></a>
<a id="tocSpayee"></a>
<a id="tocspayee"></a>

```json
{
  "deleted": true,
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "name": "string",
  "transfer_account_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deleted|boolean|true|none|Whether or not the payee has been deleted.  Deleted payees will only be included in delta requests.|
|id|string(uuid)|true|none|none|
|name|string|true|none|none|
|transfer_account_id|string|false|none|If a transfer payee, the `account_id` to which this payee transfers to|

<h2 id="tocS_PayeeLocation">PayeeLocation</h2>
<!-- backwards compatibility -->
<a id="schemapayeelocation"></a>
<a id="schema_PayeeLocation"></a>
<a id="tocSpayeelocation"></a>
<a id="tocspayeelocation"></a>

```json
{
  "deleted": true,
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "latitude": "string",
  "longitude": "string",
  "payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deleted|boolean|true|none|Whether or not the payee location has been deleted.  Deleted payee locations will only be included in delta requests.|
|id|string(uuid)|true|none|none|
|latitude|string|true|none|none|
|longitude|string|true|none|none|
|payee_id|string(uuid)|true|none|none|

<h2 id="tocS_PayeeLocationResponse">PayeeLocationResponse</h2>
<!-- backwards compatibility -->
<a id="schemapayeelocationresponse"></a>
<a id="schema_PayeeLocationResponse"></a>
<a id="tocSpayeelocationresponse"></a>
<a id="tocspayeelocationresponse"></a>

```json
{
  "data": {
    "payee_location": {
      "deleted": true,
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "latitude": "string",
      "longitude": "string",
      "payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|true|none|none|

<h2 id="tocS_PayeeLocationsResponse">PayeeLocationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemapayeelocationsresponse"></a>
<a id="schema_PayeeLocationsResponse"></a>
<a id="tocSpayeelocationsresponse"></a>
<a id="tocspayeelocationsresponse"></a>

```json
{
  "data": {
    "payee_locations": [
      {
        "deleted": true,
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "latitude": "string",
        "longitude": "string",
        "payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|true|none|none|

<h2 id="tocS_PayeeResponse">PayeeResponse</h2>
<!-- backwards compatibility -->
<a id="schemapayeeresponse"></a>
<a id="schema_PayeeResponse"></a>
<a id="tocSpayeeresponse"></a>
<a id="tocspayeeresponse"></a>

```json
{
  "data": {
    "payee": {
      "deleted": true,
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "string",
      "transfer_account_id": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|true|none|none|

<h2 id="tocS_PayeesResponse">PayeesResponse</h2>
<!-- backwards compatibility -->
<a id="schemapayeesresponse"></a>
<a id="schema_PayeesResponse"></a>
<a id="tocSpayeesresponse"></a>
<a id="tocspayeesresponse"></a>

```json
{
  "data": {
    "payees": [
      {
        "deleted": true,
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "name": "string",
        "transfer_account_id": "string"
      }
    ],
    "server_knowledge": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|true|none|none|

<h2 id="tocS_PostAccountWrapper">PostAccountWrapper</h2>
<!-- backwards compatibility -->
<a id="schemapostaccountwrapper"></a>
<a id="schema_PostAccountWrapper"></a>
<a id="tocSpostaccountwrapper"></a>
<a id="tocspostaccountwrapper"></a>

```json
{
  "account": {
    "balance": 0,
    "name": "string",
    "type": "checking"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account|[SaveAccount](#schemasaveaccount)|true|none|none|

<h2 id="tocS_PostTransactionsWrapper">PostTransactionsWrapper</h2>
<!-- backwards compatibility -->
<a id="schemaposttransactionswrapper"></a>
<a id="schema_PostTransactionsWrapper"></a>
<a id="tocSposttransactionswrapper"></a>
<a id="tocsposttransactionswrapper"></a>

```json
{
  "transaction": {
    "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "amount": 0,
    "approved": true,
    "category_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "cleared": "cleared",
    "date": "1970-01-01",
    "flag_color": "red",
    "import_id": "string",
    "memo": "string",
    "payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "payee_name": "string",
    "subtransactions": [
      {
        "amount": 0,
        "category_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "memo": "string",
        "payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "payee_name": "string"
      }
    ]
  },
  "transactions": [
    {
      "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "amount": 0,
      "approved": true,
      "category_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "cleared": "cleared",
      "date": "1970-01-01",
      "flag_color": "red",
      "import_id": "string",
      "memo": "string",
      "payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "payee_name": "string",
      "subtransactions": [
        {
          "amount": 0,
          "category_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "memo": "string",
          "payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "payee_name": "string"
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|transaction|[SaveTransaction](#schemasavetransaction)|false|none|none|
|transactions|[[SaveTransaction](#schemasavetransaction)]|false|none|none|

<h2 id="tocS_PutTransactionWrapper">PutTransactionWrapper</h2>
<!-- backwards compatibility -->
<a id="schemaputtransactionwrapper"></a>
<a id="schema_PutTransactionWrapper"></a>
<a id="tocSputtransactionwrapper"></a>
<a id="tocsputtransactionwrapper"></a>

```json
{
  "transaction": {
    "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "amount": 0,
    "approved": true,
    "category_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "cleared": "cleared",
    "date": "1970-01-01",
    "flag_color": "red",
    "import_id": "string",
    "memo": "string",
    "payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "payee_name": "string",
    "subtransactions": [
      {
        "amount": 0,
        "category_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "memo": "string",
        "payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "payee_name": "string"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|transaction|[SaveTransaction](#schemasavetransaction)|true|none|none|

<h2 id="tocS_SaveAccount">SaveAccount</h2>
<!-- backwards compatibility -->
<a id="schemasaveaccount"></a>
<a id="schema_SaveAccount"></a>
<a id="tocSsaveaccount"></a>
<a id="tocssaveaccount"></a>

```json
{
  "balance": 0,
  "name": "string",
  "type": "checking"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|balance|integer(int64)|true|none|The current balance of the account in milliunits format|
|name|string|true|none|The name of the account|
|type|[AccountType](#schemaaccounttype)|true|none|The type of account|

#### Enumerated Values

|Property|Value|
|---|---|
|type|checking|
|type|savings|
|type|cash|
|type|creditCard|
|type|lineOfCredit|
|type|otherAsset|
|type|otherLiability|
|type|mortgage|
|type|autoLoan|
|type|studentLoan|
|type|personalLoan|
|type|medicalDebt|
|type|otherDebt|

<h2 id="tocS_SaveCategoryResponse">SaveCategoryResponse</h2>
<!-- backwards compatibility -->
<a id="schemasavecategoryresponse"></a>
<a id="schema_SaveCategoryResponse"></a>
<a id="tocSsavecategoryresponse"></a>
<a id="tocssavecategoryresponse"></a>

```json
{
  "data": {
    "category": {
      "activity": 0,
      "balance": 0,
      "budgeted": 0,
      "category_group_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "deleted": true,
      "goal_cadence": 0,
      "goal_cadence_frequency": 0,
      "goal_creation_month": "1970-01-01",
      "goal_day": 0,
      "goal_months_to_budget": 0,
      "goal_overall_funded": 0,
      "goal_overall_left": 0,
      "goal_percentage_complete": 0,
      "goal_target": 0,
      "goal_target_month": "1970-01-01",
      "goal_type": "TB",
      "goal_under_funded": 0,
      "hidden": true,
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "string",
      "note": "string",
      "original_category_group_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    },
    "server_knowledge": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|true|none|none|

<h2 id="tocS_SaveMonthCategory">SaveMonthCategory</h2>
<!-- backwards compatibility -->
<a id="schemasavemonthcategory"></a>
<a id="schema_SaveMonthCategory"></a>
<a id="tocSsavemonthcategory"></a>
<a id="tocssavemonthcategory"></a>

```json
{
  "budgeted": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|budgeted|integer(int64)|true|none|Budgeted amount in milliunits format|

<h2 id="tocS_SaveSubTransaction">SaveSubTransaction</h2>
<!-- backwards compatibility -->
<a id="schemasavesubtransaction"></a>
<a id="schema_SaveSubTransaction"></a>
<a id="tocSsavesubtransaction"></a>
<a id="tocssavesubtransaction"></a>

```json
{
  "amount": 0,
  "category_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "memo": "string",
  "payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "payee_name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|integer(int64)|true|none|The subtransaction amount in milliunits format.|
|category_id|string(uuid)|false|none|The category for the subtransaction.  Credit Card Payment categories are not permitted and will be ignored if supplied.|
|memo|string|false|none|none|
|payee_id|string(uuid)|false|none|The payee for the subtransaction.|
|payee_name|string|false|none|The payee name.  If a `payee_name` value is provided and `payee_id` has a null value, the `payee_name` value will be used to resolve the payee by either (1) a matching payee rename rule (only if import_id is also specified on parent transaction) or (2) a payee with the same name or (3) creation of a new payee.|

<h2 id="tocS_SaveTransaction">SaveTransaction</h2>
<!-- backwards compatibility -->
<a id="schemasavetransaction"></a>
<a id="schema_SaveTransaction"></a>
<a id="tocSsavetransaction"></a>
<a id="tocssavetransaction"></a>

```json
{
  "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "amount": 0,
  "approved": true,
  "category_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "cleared": "cleared",
  "date": "1970-01-01",
  "flag_color": "red",
  "import_id": "string",
  "memo": "string",
  "payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "payee_name": "string",
  "subtransactions": [
    {
      "amount": 0,
      "category_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "memo": "string",
      "payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "payee_name": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|string(uuid)|true|none|none|
|amount|integer(int64)|true|none|The transaction amount in milliunits format.  Split transaction amounts cannot be changed and if a different amount is supplied it will be ignored.|
|approved|boolean|false|none|Whether or not the transaction is approved.  If not supplied, transaction will be unapproved by default.|
|category_id|string(uuid)|false|none|The category for the transaction.  To configure a split transaction, you can specify null for `category_id` and provide a `subtransactions` array as part of the transaction object.  If an existing transaction is a split, the `category_id` cannot be changed.  Credit Card Payment categories are not permitted and will be ignored if supplied.|
|cleared|string|false|none|The cleared status of the transaction|
|date|string(date)|true|none|The transaction date in ISO format (e.g. 2016-12-01).  Future dates (scheduled transactions) are not permitted.  Split transaction dates cannot be changed and if a different date is supplied it will be ignored.|
|flag_color|string|false|none|The transaction flag|
|import_id|string|false|none|If specified, the new transaction will be assigned this `import_id` and considered "imported".  We will also attempt to match this imported transaction to an existing "user-entered" transation on the same account, with the same amount, and with a date +/-10 days from the imported transaction date.<br><br>Transactions imported through File Based Import or Direct Import (not through the API) are assigned an import_id in the format: 'YNAB:[milliunit_amount]:[iso_date]:[occurrence]'. For example, a transaction dated 2015-12-30 in the amount of -$294.23 USD would have an import_id of 'YNAB:-294230:2015-12-30:1'.  If a second transaction on the same account was imported and had the same date and same amount, its import_id would be 'YNAB:-294230:2015-12-30:2'.  Using a consistent format will prevent duplicates through Direct Import and File Based Import.<br><br>If import_id is omitted or specified as null, the transaction will be treated as a "user-entered" transaction. As such, it will be eligible to be matched against transactions later being imported (via DI, FBI, or API).|
|memo|string|false|none|none|
|payee_id|string(uuid)|false|none|The payee for the transaction.  To create a transfer between two accounts, use the account transfer payee pointing to the target account.  Account transfer payees are specified as `tranfer_payee_id` on the account resource.|
|payee_name|string|false|none|The payee name.  If a `payee_name` value is provided and `payee_id` has a null value, the `payee_name` value will be used to resolve the payee by either (1) a matching payee rename rule (only if `import_id` is also specified) or (2) a payee with the same name or (3) creation of a new payee.|
|subtransactions|[[SaveSubTransaction](#schemasavesubtransaction)]|false|none|An array of subtransactions to configure a transaction as a split.  Updating `subtransactions` on an existing split transaction is not supported.|

#### Enumerated Values

|Property|Value|
|---|---|
|cleared|cleared|
|cleared|uncleared|
|cleared|reconciled|
|flag_color|red|
|flag_color|orange|
|flag_color|yellow|
|flag_color|green|
|flag_color|blue|
|flag_color|purple|
|flag_color|null|

<h2 id="tocS_SaveTransactionWithId">SaveTransactionWithId</h2>
<!-- backwards compatibility -->
<a id="schemasavetransactionwithid"></a>
<a id="schema_SaveTransactionWithId"></a>
<a id="tocSsavetransactionwithid"></a>
<a id="tocssavetransactionwithid"></a>

```json
{
  "id": "string",
  "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "amount": 0,
  "approved": true,
  "category_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "cleared": "cleared",
  "date": "1970-01-01",
  "flag_color": "red",
  "import_id": "string",
  "memo": "string",
  "payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "payee_name": "string",
  "subtransactions": [
    {
      "amount": 0,
      "category_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "memo": "string",
      "payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "payee_name": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|account_id|string(uuid)|false|none|none|
|amount|integer(int64)|false|none|The transaction amount in milliunits format.  Split transaction amounts cannot be changed and if a different amount is supplied it will be ignored.|
|approved|boolean|false|none|Whether or not the transaction is approved.  If not supplied, transaction will be unapproved by default.|
|category_id|string(uuid)|false|none|The category for the transaction.  To configure a split transaction, you can specify null for `category_id` and provide a `subtransactions` array as part of the transaction object.  If an existing transaction is a split, the `category_id` cannot be changed.  Credit Card Payment categories are not permitted and will be ignored if supplied.|
|cleared|string|false|none|The cleared status of the transaction|
|date|string(date)|false|none|The transaction date in ISO format (e.g. 2016-12-01).  Future dates (scheduled transactions) are not permitted.  Split transaction dates cannot be changed and if a different date is supplied it will be ignored.|
|flag_color|string|false|none|The transaction flag|
|import_id|string|false|none|If specified, the new transaction will be assigned this `import_id` and considered "imported".  We will also attempt to match this imported transaction to an existing "user-entered" transation on the same account, with the same amount, and with a date +/-10 days from the imported transaction date.<br><br>Transactions imported through File Based Import or Direct Import (not through the API) are assigned an import_id in the format: 'YNAB:[milliunit_amount]:[iso_date]:[occurrence]'. For example, a transaction dated 2015-12-30 in the amount of -$294.23 USD would have an import_id of 'YNAB:-294230:2015-12-30:1'.  If a second transaction on the same account was imported and had the same date and same amount, its import_id would be 'YNAB:-294230:2015-12-30:2'.  Using a consistent format will prevent duplicates through Direct Import and File Based Import.<br><br>If import_id is omitted or specified as null, the transaction will be treated as a "user-entered" transaction. As such, it will be eligible to be matched against transactions later being imported (via DI, FBI, or API).|
|memo|string|false|none|none|
|payee_id|string(uuid)|false|none|The payee for the transaction.  To create a transfer between two accounts, use the account transfer payee pointing to the target account.  Account transfer payees are specified as `tranfer_payee_id` on the account resource.|
|payee_name|string|false|none|The payee name.  If a `payee_name` value is provided and `payee_id` has a null value, the `payee_name` value will be used to resolve the payee by either (1) a matching payee rename rule (only if `import_id` is also specified) or (2) a payee with the same name or (3) creation of a new payee.|
|subtransactions|[[SaveSubTransaction](#schemasavesubtransaction)]|false|none|An array of subtransactions to configure a transaction as a split.  Updating `subtransactions` on an existing split transaction is not supported.|

#### Enumerated Values

|Property|Value|
|---|---|
|cleared|cleared|
|cleared|uncleared|
|cleared|reconciled|
|flag_color|red|
|flag_color|orange|
|flag_color|yellow|
|flag_color|green|
|flag_color|blue|
|flag_color|purple|
|flag_color|null|

<h2 id="tocS_SaveTransactionWithOptionalFields">SaveTransactionWithOptionalFields</h2>
<!-- backwards compatibility -->
<a id="schemasavetransactionwithoptionalfields"></a>
<a id="schema_SaveTransactionWithOptionalFields"></a>
<a id="tocSsavetransactionwithoptionalfields"></a>
<a id="tocssavetransactionwithoptionalfields"></a>

```json
{
  "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "amount": 0,
  "approved": true,
  "category_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "cleared": "cleared",
  "date": "1970-01-01",
  "flag_color": "red",
  "import_id": "string",
  "memo": "string",
  "payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "payee_name": "string",
  "subtransactions": [
    {
      "amount": 0,
      "category_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "memo": "string",
      "payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "payee_name": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|string(uuid)|false|none|none|
|amount|integer(int64)|false|none|The transaction amount in milliunits format.  Split transaction amounts cannot be changed and if a different amount is supplied it will be ignored.|
|approved|boolean|false|none|Whether or not the transaction is approved.  If not supplied, transaction will be unapproved by default.|
|category_id|string(uuid)|false|none|The category for the transaction.  To configure a split transaction, you can specify null for `category_id` and provide a `subtransactions` array as part of the transaction object.  If an existing transaction is a split, the `category_id` cannot be changed.  Credit Card Payment categories are not permitted and will be ignored if supplied.|
|cleared|string|false|none|The cleared status of the transaction|
|date|string(date)|false|none|The transaction date in ISO format (e.g. 2016-12-01).  Future dates (scheduled transactions) are not permitted.  Split transaction dates cannot be changed and if a different date is supplied it will be ignored.|
|flag_color|string|false|none|The transaction flag|
|import_id|string|false|none|If specified, the new transaction will be assigned this `import_id` and considered "imported".  We will also attempt to match this imported transaction to an existing "user-entered" transation on the same account, with the same amount, and with a date +/-10 days from the imported transaction date.<br><br>Transactions imported through File Based Import or Direct Import (not through the API) are assigned an import_id in the format: 'YNAB:[milliunit_amount]:[iso_date]:[occurrence]'. For example, a transaction dated 2015-12-30 in the amount of -$294.23 USD would have an import_id of 'YNAB:-294230:2015-12-30:1'.  If a second transaction on the same account was imported and had the same date and same amount, its import_id would be 'YNAB:-294230:2015-12-30:2'.  Using a consistent format will prevent duplicates through Direct Import and File Based Import.<br><br>If import_id is omitted or specified as null, the transaction will be treated as a "user-entered" transaction. As such, it will be eligible to be matched against transactions later being imported (via DI, FBI, or API).|
|memo|string|false|none|none|
|payee_id|string(uuid)|false|none|The payee for the transaction.  To create a transfer between two accounts, use the account transfer payee pointing to the target account.  Account transfer payees are specified as `tranfer_payee_id` on the account resource.|
|payee_name|string|false|none|The payee name.  If a `payee_name` value is provided and `payee_id` has a null value, the `payee_name` value will be used to resolve the payee by either (1) a matching payee rename rule (only if `import_id` is also specified) or (2) a payee with the same name or (3) creation of a new payee.|
|subtransactions|[[SaveSubTransaction](#schemasavesubtransaction)]|false|none|An array of subtransactions to configure a transaction as a split.  Updating `subtransactions` on an existing split transaction is not supported.|

#### Enumerated Values

|Property|Value|
|---|---|
|cleared|cleared|
|cleared|uncleared|
|cleared|reconciled|
|flag_color|red|
|flag_color|orange|
|flag_color|yellow|
|flag_color|green|
|flag_color|blue|
|flag_color|purple|
|flag_color|null|

<h2 id="tocS_SaveTransactionsResponse">SaveTransactionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemasavetransactionsresponse"></a>
<a id="schema_SaveTransactionsResponse"></a>
<a id="tocSsavetransactionsresponse"></a>
<a id="tocssavetransactionsresponse"></a>

```json
{
  "data": {
    "duplicate_import_ids": [
      "string"
    ],
    "server_knowledge": 0,
    "transaction": {
      "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "amount": 0,
      "approved": true,
      "category_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "cleared": "cleared",
      "date": "1970-01-01",
      "debt_transaction_type": "payment",
      "deleted": true,
      "flag_color": "red",
      "id": "string",
      "import_id": "string",
      "import_payee_name": "string",
      "import_payee_name_original": "string",
      "matched_transaction_id": "string",
      "memo": "string",
      "payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "transfer_account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "transfer_transaction_id": "string",
      "account_name": "string",
      "category_name": "string",
      "payee_name": "string",
      "subtransactions": [
        {
          "amount": 0,
          "category_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "category_name": "string",
          "deleted": true,
          "id": "string",
          "memo": "string",
          "payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "payee_name": "string",
          "transaction_id": "string",
          "transfer_account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "transfer_transaction_id": "string"
        }
      ]
    },
    "transaction_ids": [
      "string"
    ],
    "transactions": [
      {
        "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "amount": 0,
        "approved": true,
        "category_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "cleared": "cleared",
        "date": "1970-01-01",
        "debt_transaction_type": "payment",
        "deleted": true,
        "flag_color": "red",
        "id": "string",
        "import_id": "string",
        "import_payee_name": "string",
        "import_payee_name_original": "string",
        "matched_transaction_id": "string",
        "memo": "string",
        "payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "transfer_account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "transfer_transaction_id": "string",
        "account_name": "string",
        "category_name": "string",
        "payee_name": "string",
        "subtransactions": [
          {
            "amount": 0,
            "category_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "category_name": "string",
            "deleted": true,
            "id": "string",
            "memo": "string",
            "payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "payee_name": "string",
            "transaction_id": "string",
            "transfer_account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "transfer_transaction_id": "string"
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
|data|object|true|none|none|

<h2 id="tocS_ScheduledSubTransaction">ScheduledSubTransaction</h2>
<!-- backwards compatibility -->
<a id="schemascheduledsubtransaction"></a>
<a id="schema_ScheduledSubTransaction"></a>
<a id="tocSscheduledsubtransaction"></a>
<a id="tocsscheduledsubtransaction"></a>

```json
{
  "amount": 0,
  "category_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "deleted": true,
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "memo": "string",
  "payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "scheduled_transaction_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "transfer_account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|integer(int64)|true|none|The scheduled subtransaction amount in milliunits format|
|category_id|string(uuid)|false|none|none|
|deleted|boolean|true|none|Whether or not the scheduled subtransaction has been deleted.  Deleted scheduled subtransactions will only be included in delta requests.|
|id|string(uuid)|true|none|none|
|memo|string|false|none|none|
|payee_id|string(uuid)|false|none|none|
|scheduled_transaction_id|string(uuid)|true|none|none|
|transfer_account_id|string(uuid)|false|none|If a transfer, the account_id which the scheduled subtransaction transfers to|

<h2 id="tocS_ScheduledTransactionDetail">ScheduledTransactionDetail</h2>
<!-- backwards compatibility -->
<a id="schemascheduledtransactiondetail"></a>
<a id="schema_ScheduledTransactionDetail"></a>
<a id="tocSscheduledtransactiondetail"></a>
<a id="tocsscheduledtransactiondetail"></a>

```json
{
  "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "amount": 0,
  "category_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "date_first": "1970-01-01",
  "date_next": "1970-01-01",
  "deleted": true,
  "flag_color": "red",
  "frequency": "never",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "memo": "string",
  "payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "transfer_account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "account_name": "string",
  "category_name": "string",
  "payee_name": "string",
  "subtransactions": [
    {
      "amount": 0,
      "category_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "deleted": true,
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "memo": "string",
      "payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "scheduled_transaction_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "transfer_account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|string(uuid)|true|none|none|
|amount|integer(int64)|true|none|The scheduled transaction amount in milliunits format|
|category_id|string(uuid)|false|none|none|
|date_first|string(date)|true|none|The first date for which the Scheduled Transaction was scheduled.|
|date_next|string(date)|true|none|The next date for which the Scheduled Transaction is scheduled.|
|deleted|boolean|true|none|Whether or not the scheduled transaction has been deleted.  Deleted scheduled transactions will only be included in delta requests.|
|flag_color|string|false|none|The scheduled transaction flag|
|frequency|string|true|none|none|
|id|string(uuid)|true|none|none|
|memo|string|false|none|none|
|payee_id|string(uuid)|false|none|none|
|transfer_account_id|string(uuid)|false|none|If a transfer, the account_id which the scheduled transaction transfers to|
|account_name|string|true|none|none|
|category_name|string|false|none|none|
|payee_name|string|false|none|none|
|subtransactions|[[ScheduledSubTransaction](#schemascheduledsubtransaction)]|true|none|If a split scheduled transaction, the subtransactions.|

#### Enumerated Values

|Property|Value|
|---|---|
|flag_color|red|
|flag_color|orange|
|flag_color|yellow|
|flag_color|green|
|flag_color|blue|
|flag_color|purple|
|flag_color|null|
|frequency|never|
|frequency|daily|
|frequency|weekly|
|frequency|everyOtherWeek|
|frequency|twiceAMonth|
|frequency|every4Weeks|
|frequency|monthly|
|frequency|everyOtherMonth|
|frequency|every3Months|
|frequency|every4Months|
|frequency|twiceAYear|
|frequency|yearly|
|frequency|everyOtherYear|

<h2 id="tocS_ScheduledTransactionResponse">ScheduledTransactionResponse</h2>
<!-- backwards compatibility -->
<a id="schemascheduledtransactionresponse"></a>
<a id="schema_ScheduledTransactionResponse"></a>
<a id="tocSscheduledtransactionresponse"></a>
<a id="tocsscheduledtransactionresponse"></a>

```json
{
  "data": {
    "scheduled_transaction": {
      "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "amount": 0,
      "category_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "date_first": "1970-01-01",
      "date_next": "1970-01-01",
      "deleted": true,
      "flag_color": "red",
      "frequency": "never",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "memo": "string",
      "payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "transfer_account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "account_name": "string",
      "category_name": "string",
      "payee_name": "string",
      "subtransactions": [
        {
          "amount": 0,
          "category_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "deleted": true,
          "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "memo": "string",
          "payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "scheduled_transaction_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "transfer_account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
        }
      ]
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|true|none|none|

<h2 id="tocS_ScheduledTransactionSummary">ScheduledTransactionSummary</h2>
<!-- backwards compatibility -->
<a id="schemascheduledtransactionsummary"></a>
<a id="schema_ScheduledTransactionSummary"></a>
<a id="tocSscheduledtransactionsummary"></a>
<a id="tocsscheduledtransactionsummary"></a>

```json
{
  "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "amount": 0,
  "category_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "date_first": "1970-01-01",
  "date_next": "1970-01-01",
  "deleted": true,
  "flag_color": "red",
  "frequency": "never",
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "memo": "string",
  "payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "transfer_account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|string(uuid)|true|none|none|
|amount|integer(int64)|true|none|The scheduled transaction amount in milliunits format|
|category_id|string(uuid)|false|none|none|
|date_first|string(date)|true|none|The first date for which the Scheduled Transaction was scheduled.|
|date_next|string(date)|true|none|The next date for which the Scheduled Transaction is scheduled.|
|deleted|boolean|true|none|Whether or not the scheduled transaction has been deleted.  Deleted scheduled transactions will only be included in delta requests.|
|flag_color|string|false|none|The scheduled transaction flag|
|frequency|string|true|none|none|
|id|string(uuid)|true|none|none|
|memo|string|false|none|none|
|payee_id|string(uuid)|false|none|none|
|transfer_account_id|string(uuid)|false|none|If a transfer, the account_id which the scheduled transaction transfers to|

#### Enumerated Values

|Property|Value|
|---|---|
|flag_color|red|
|flag_color|orange|
|flag_color|yellow|
|flag_color|green|
|flag_color|blue|
|flag_color|purple|
|flag_color|null|
|frequency|never|
|frequency|daily|
|frequency|weekly|
|frequency|everyOtherWeek|
|frequency|twiceAMonth|
|frequency|every4Weeks|
|frequency|monthly|
|frequency|everyOtherMonth|
|frequency|every3Months|
|frequency|every4Months|
|frequency|twiceAYear|
|frequency|yearly|
|frequency|everyOtherYear|

<h2 id="tocS_ScheduledTransactionsResponse">ScheduledTransactionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemascheduledtransactionsresponse"></a>
<a id="schema_ScheduledTransactionsResponse"></a>
<a id="tocSscheduledtransactionsresponse"></a>
<a id="tocsscheduledtransactionsresponse"></a>

```json
{
  "data": {
    "scheduled_transactions": [
      {
        "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "amount": 0,
        "category_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "date_first": "1970-01-01",
        "date_next": "1970-01-01",
        "deleted": true,
        "flag_color": "red",
        "frequency": "never",
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "memo": "string",
        "payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "transfer_account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "account_name": "string",
        "category_name": "string",
        "payee_name": "string",
        "subtransactions": [
          {
            "amount": 0,
            "category_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "deleted": true,
            "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "memo": "string",
            "payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "scheduled_transaction_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "transfer_account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
          }
        ]
      }
    ],
    "server_knowledge": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|true|none|none|

<h2 id="tocS_SubTransaction">SubTransaction</h2>
<!-- backwards compatibility -->
<a id="schemasubtransaction"></a>
<a id="schema_SubTransaction"></a>
<a id="tocSsubtransaction"></a>
<a id="tocssubtransaction"></a>

```json
{
  "amount": 0,
  "category_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "category_name": "string",
  "deleted": true,
  "id": "string",
  "memo": "string",
  "payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "payee_name": "string",
  "transaction_id": "string",
  "transfer_account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "transfer_transaction_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|integer(int64)|true|none|The subtransaction amount in milliunits format|
|category_id|string(uuid)|false|none|none|
|category_name|string|false|none|none|
|deleted|boolean|true|none|Whether or not the subtransaction has been deleted.  Deleted subtransactions will only be included in delta requests.|
|id|string|true|none|none|
|memo|string|false|none|none|
|payee_id|string(uuid)|false|none|none|
|payee_name|string|false|none|none|
|transaction_id|string|true|none|none|
|transfer_account_id|string(uuid)|false|none|If a transfer, the account_id which the subtransaction transfers to|
|transfer_transaction_id|string|false|none|If a transfer, the id of transaction on the other side of the transfer|

<h2 id="tocS_TransactionDetail">TransactionDetail</h2>
<!-- backwards compatibility -->
<a id="schematransactiondetail"></a>
<a id="schema_TransactionDetail"></a>
<a id="tocStransactiondetail"></a>
<a id="tocstransactiondetail"></a>

```json
{
  "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "amount": 0,
  "approved": true,
  "category_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "cleared": "cleared",
  "date": "1970-01-01",
  "debt_transaction_type": "payment",
  "deleted": true,
  "flag_color": "red",
  "id": "string",
  "import_id": "string",
  "import_payee_name": "string",
  "import_payee_name_original": "string",
  "matched_transaction_id": "string",
  "memo": "string",
  "payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "transfer_account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "transfer_transaction_id": "string",
  "account_name": "string",
  "category_name": "string",
  "payee_name": "string",
  "subtransactions": [
    {
      "amount": 0,
      "category_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "category_name": "string",
      "deleted": true,
      "id": "string",
      "memo": "string",
      "payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "payee_name": "string",
      "transaction_id": "string",
      "transfer_account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "transfer_transaction_id": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|string(uuid)|true|none|none|
|amount|integer(int64)|true|none|The transaction amount in milliunits format|
|approved|boolean|true|none|Whether or not the transaction is approved|
|category_id|string(uuid)|false|none|none|
|cleared|string|true|none|The cleared status of the transaction|
|date|string(date)|true|none|The transaction date in ISO format (e.g. 2016-12-01)|
|debt_transaction_type|string|false|none|If the transaction is a debt/loan account transaction, the type of transaction|
|deleted|boolean|true|none|Whether or not the transaction has been deleted.  Deleted transactions will only be included in delta requests.|
|flag_color|string|false|none|The transaction flag|
|id|string|true|none|none|
|import_id|string|false|none|If the transaction was imported, this field is a unique (by account) import identifier.  If this transaction was imported through File Based Import or Direct Import and not through the API, the import_id will have the format: 'YNAB:[milliunit_amount]:[iso_date]:[occurrence]'.  For example, a transaction dated 2015-12-30 in the amount of -$294.23 USD would have an import_id of 'YNAB:-294230:2015-12-30:1'.  If a second transaction on the same account was imported and had the same date and same amount, its import_id would be 'YNAB:-294230:2015-12-30:2'.|
|import_payee_name|string|false|none|If the transaction was imported, the payee name that was used when importing and before applying any payee rename rules|
|import_payee_name_original|string|false|none|If the transaction was imported, the original payee name as it appeared on the statement|
|matched_transaction_id|string|false|none|If transaction is matched, the id of the matched transaction|
|memo|string|false|none|none|
|payee_id|string(uuid)|false|none|none|
|transfer_account_id|string(uuid)|false|none|If a transfer transaction, the account to which it transfers|
|transfer_transaction_id|string|false|none|If a transfer transaction, the id of transaction on the other side of the transfer|
|account_name|string|true|none|none|
|category_name|string|false|none|none|
|payee_name|string|false|none|none|
|subtransactions|[[SubTransaction](#schemasubtransaction)]|true|none|If a split transaction, the subtransactions.|

#### Enumerated Values

|Property|Value|
|---|---|
|cleared|cleared|
|cleared|uncleared|
|cleared|reconciled|
|debt_transaction_type|payment|
|debt_transaction_type|refund|
|debt_transaction_type|fee|
|debt_transaction_type|interest|
|debt_transaction_type|escrow|
|debt_transaction_type|balancedAdjustment|
|debt_transaction_type|credit|
|debt_transaction_type|charge|
|debt_transaction_type|null|
|flag_color|red|
|flag_color|orange|
|flag_color|yellow|
|flag_color|green|
|flag_color|blue|
|flag_color|purple|
|flag_color|null|

<h2 id="tocS_TransactionResponse">TransactionResponse</h2>
<!-- backwards compatibility -->
<a id="schematransactionresponse"></a>
<a id="schema_TransactionResponse"></a>
<a id="tocStransactionresponse"></a>
<a id="tocstransactionresponse"></a>

```json
{
  "data": {
    "transaction": {
      "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "amount": 0,
      "approved": true,
      "category_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "cleared": "cleared",
      "date": "1970-01-01",
      "debt_transaction_type": "payment",
      "deleted": true,
      "flag_color": "red",
      "id": "string",
      "import_id": "string",
      "import_payee_name": "string",
      "import_payee_name_original": "string",
      "matched_transaction_id": "string",
      "memo": "string",
      "payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "transfer_account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "transfer_transaction_id": "string",
      "account_name": "string",
      "category_name": "string",
      "payee_name": "string",
      "subtransactions": [
        {
          "amount": 0,
          "category_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "category_name": "string",
          "deleted": true,
          "id": "string",
          "memo": "string",
          "payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "payee_name": "string",
          "transaction_id": "string",
          "transfer_account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          "transfer_transaction_id": "string"
        }
      ]
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|true|none|none|

<h2 id="tocS_TransactionSummary">TransactionSummary</h2>
<!-- backwards compatibility -->
<a id="schematransactionsummary"></a>
<a id="schema_TransactionSummary"></a>
<a id="tocStransactionsummary"></a>
<a id="tocstransactionsummary"></a>

```json
{
  "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "amount": 0,
  "approved": true,
  "category_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "cleared": "cleared",
  "date": "1970-01-01",
  "debt_transaction_type": "payment",
  "deleted": true,
  "flag_color": "red",
  "id": "string",
  "import_id": "string",
  "import_payee_name": "string",
  "import_payee_name_original": "string",
  "matched_transaction_id": "string",
  "memo": "string",
  "payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "transfer_account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "transfer_transaction_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|string(uuid)|true|none|none|
|amount|integer(int64)|true|none|The transaction amount in milliunits format|
|approved|boolean|true|none|Whether or not the transaction is approved|
|category_id|string(uuid)|false|none|none|
|cleared|string|true|none|The cleared status of the transaction|
|date|string(date)|true|none|The transaction date in ISO format (e.g. 2016-12-01)|
|debt_transaction_type|string|false|none|If the transaction is a debt/loan account transaction, the type of transaction|
|deleted|boolean|true|none|Whether or not the transaction has been deleted.  Deleted transactions will only be included in delta requests.|
|flag_color|string|false|none|The transaction flag|
|id|string|true|none|none|
|import_id|string|false|none|If the transaction was imported, this field is a unique (by account) import identifier.  If this transaction was imported through File Based Import or Direct Import and not through the API, the import_id will have the format: 'YNAB:[milliunit_amount]:[iso_date]:[occurrence]'.  For example, a transaction dated 2015-12-30 in the amount of -$294.23 USD would have an import_id of 'YNAB:-294230:2015-12-30:1'.  If a second transaction on the same account was imported and had the same date and same amount, its import_id would be 'YNAB:-294230:2015-12-30:2'.|
|import_payee_name|string|false|none|If the transaction was imported, the payee name that was used when importing and before applying any payee rename rules|
|import_payee_name_original|string|false|none|If the transaction was imported, the original payee name as it appeared on the statement|
|matched_transaction_id|string|false|none|If transaction is matched, the id of the matched transaction|
|memo|string|false|none|none|
|payee_id|string(uuid)|false|none|none|
|transfer_account_id|string(uuid)|false|none|If a transfer transaction, the account to which it transfers|
|transfer_transaction_id|string|false|none|If a transfer transaction, the id of transaction on the other side of the transfer|

#### Enumerated Values

|Property|Value|
|---|---|
|cleared|cleared|
|cleared|uncleared|
|cleared|reconciled|
|debt_transaction_type|payment|
|debt_transaction_type|refund|
|debt_transaction_type|fee|
|debt_transaction_type|interest|
|debt_transaction_type|escrow|
|debt_transaction_type|balancedAdjustment|
|debt_transaction_type|credit|
|debt_transaction_type|charge|
|debt_transaction_type|null|
|flag_color|red|
|flag_color|orange|
|flag_color|yellow|
|flag_color|green|
|flag_color|blue|
|flag_color|purple|
|flag_color|null|

<h2 id="tocS_TransactionsImportResponse">TransactionsImportResponse</h2>
<!-- backwards compatibility -->
<a id="schematransactionsimportresponse"></a>
<a id="schema_TransactionsImportResponse"></a>
<a id="tocStransactionsimportresponse"></a>
<a id="tocstransactionsimportresponse"></a>

```json
{
  "data": {
    "transaction_ids": [
      "string"
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|true|none|none|

<h2 id="tocS_TransactionsResponse">TransactionsResponse</h2>
<!-- backwards compatibility -->
<a id="schematransactionsresponse"></a>
<a id="schema_TransactionsResponse"></a>
<a id="tocStransactionsresponse"></a>
<a id="tocstransactionsresponse"></a>

```json
{
  "data": {
    "server_knowledge": 0,
    "transactions": [
      {
        "account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "amount": 0,
        "approved": true,
        "category_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "cleared": "cleared",
        "date": "1970-01-01",
        "debt_transaction_type": "payment",
        "deleted": true,
        "flag_color": "red",
        "id": "string",
        "import_id": "string",
        "import_payee_name": "string",
        "import_payee_name_original": "string",
        "matched_transaction_id": "string",
        "memo": "string",
        "payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "transfer_account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "transfer_transaction_id": "string",
        "account_name": "string",
        "category_name": "string",
        "payee_name": "string",
        "subtransactions": [
          {
            "amount": 0,
            "category_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "category_name": "string",
            "deleted": true,
            "id": "string",
            "memo": "string",
            "payee_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "payee_name": "string",
            "transaction_id": "string",
            "transfer_account_id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "transfer_transaction_id": "string"
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
|data|object|true|none|none|

<h2 id="tocS_User">User</h2>
<!-- backwards compatibility -->
<a id="schemauser"></a>
<a id="schema_User"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```json
{
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string(uuid)|true|none|none|

<h2 id="tocS_UserResponse">UserResponse</h2>
<!-- backwards compatibility -->
<a id="schemauserresponse"></a>
<a id="schema_UserResponse"></a>
<a id="tocSuserresponse"></a>
<a id="tocsuserresponse"></a>

```json
{
  "data": {
    "user": {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|true|none|none|
