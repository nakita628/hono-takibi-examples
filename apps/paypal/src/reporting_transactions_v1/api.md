<h1 id="transaction-search">Transaction Search v1.9</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Use the Transaction Search API to get the history of transactions for a PayPal account. To use the API on behalf of third parties, you must be part of the PayPal partner network. Reach out to your partner manager for the next steps. To enroll in the partner program, see <a href="https://www.paypal.com/my/webapps/mpp/partner-program/global-programs">Partner with PayPal</a>. For more information about the API, see the <a href="/docs/transaction-search/">Transaction Search API Integration Guide</a>.<blockquote><strong>Note:</strong> To use the API on behalf of third parties, you must be part of the PayPal partner network. Reach out to your partner manager for the next steps. To enroll in the partner program, see <a href="https://www.paypal.com/my/webapps/mpp/partner-program/global-programs">Partner with PayPal</a>.</blockquote>

Base URLs:

* <a href="https://api-m.sandbox.paypal.com">https://api-m.sandbox.paypal.com</a> - PayPal Sandbox Environment

* <a href="https://api-m.paypal.com">https://api-m.paypal.com</a> - PayPal Live Environment

<a href="https://developer.paypal.com/docs/api/reporting/v1/">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 authentication

    - Flow: clientCredentials
    - Token URL = [/v1/oauth2/token](/v1/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://uri.paypal.com/services/reporting/search/read|Transactions Search|
|https://uri.paypal.com/services/reporting/balances/read|List Balances|

<h1 id="transaction-search-transactions">transactions</h1>

Use the `/transactions` resource to list transactions.

## List transactions

<a id="opIdsearch.get"></a>

> Code samples

```bash
curl 'https://api-m.paypal.com/v1/reporting/transactions?start_date=stringstringstringst&end_date=stringstringstringst' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/reporting/transactions`

Lists transactions. Specify one or more query parameters to filter the transaction that appear in the response.<blockquote><strong>Notes:</strong> <ul><li>If you specify one or more optional query parameters, the <code>ending_balance</code> response field is empty.</li><li>It takes a maximum of three hours for executed transactions to appear in the list transactions call.</li><li>This call lists transaction for the previous three years.</li></ul></blockquote>

<h3 id="list-transactions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|transaction_id|query|string|false|Filters the transactions in the response by a PayPal transaction ID. A valid transaction ID is 17 characters long, except for an <a href="/docs/api/payments/v1/#definition-order">order ID</a>, which is 19 characters long.<blockquote><strong>Note:</strong> A transaction ID is not unique in the reporting system. The response can list two transactions with the same ID. One transaction can be balance affecting while the other is non-balance affecting.</blockquote>|
|transaction_type|query|string|false|Filters the transactions in the response by a PayPal transaction event code. See [Transaction event codes](/docs/integration/direct/transaction-search/transaction-event-codes/).|
|transaction_status|query|string|false|Filters the transactions in the response by a PayPal transaction status code. Value is:<table><thead><tr><th>Status&nbsp;code</th><th>Description</th></tr></thead><tbody><tr><td><code>D</code></td><td>PayPal or merchant rules denied the transaction.</td></tr><tr><td><code>P</code></td><td>The transaction is pending. The transaction was created but waits for another payment process to complete, such as an ACH transaction, before the status changes to <code>S</code>.</td></tr><tr><td><code>S</code></td><td>The transaction successfully completed without a denial and after any pending statuses.</td></tr><tr><td><code>V</code></td><td>A successful transaction was reversed and funds were refunded to the original sender.</td></tr></tbody></table>|
|transaction_amount|query|string|false|Filters the transactions in the response by a gross transaction amount range. Specify the range as `<start-range> TO <end-range>`, where `<start-range>` is the lower limit of the gross PayPal transaction amount and `<end-range>` is the upper limit of the gross transaction amount. Specify the amounts in lower denominations. For example, to search for transactions from $5.00 to $10.05, specify `[500 TO 1005]`.<blockquote><strong>Note:</strong>The values must be URL encoded.</blockquote>|
|transaction_currency|query|string|false|Filters the transactions in the response by a [three-character ISO-4217 currency code](/api/rest/reference/currency-codes/) for the PayPal transaction currency.|
|start_date|query|string|true|Filters the transactions in the response by a start date and time, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). Seconds are required. Fractional seconds are optional.|
|end_date|query|string|true|Filters the transactions in the response by an end date and time, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). Seconds are required. Fractional seconds are optional. The maximum supported range is 31 days.|
|payment_instrument_type|query|string|false|Filters the transactions in the response by a payment instrument type. Value is either:<ul><li><code>CREDITCARD</code>. Returns a direct credit card transaction with a corresponding value.</li><li><code>DEBITCARD</code>. Returns a debit card transaction with a corresponding value.</li></ul>If you omit this parameter, the API does not apply this filter.|
|store_id|query|string|false|Filters the transactions in the response by a store ID.|
|terminal_id|query|string|false|Filters the transactions in the response by a terminal ID.|
|fields|query|string|false|Indicates which fields appear in the response. Value is a single field or a comma-separated list of fields. The <code>transaction_info</code> value returns only the transaction details in the response. To include all fields in the response, specify <code>fields=all</code>. Valid fields are:<ul><li><a href="/docs/api/transaction-search/v1/#definition-transaction_info"><code>transaction_info</code></a>. The transaction information. Includes the ID of the PayPal account of the payee, the PayPal-generated transaction ID, the PayPal-generated base ID, the PayPal reference ID type, the transaction event code, the date and time when the transaction was initiated and was last updated, the transaction amounts including the PayPal fee, any discounts, insurance, the transaction status, and other information about the transaction.</li><li><a href="/docs/api/transaction-search/v1/#definition-payer_info"><code>payer_info</code></a>. The payer information. Includes the PayPal customer account ID and the payer's email address, primary phone number, name, country code, address, and whether the payer is verified or unverified.</li><li><a href="/docs/api/transaction-search/v1/#definition-shipping_info"><code>shipping_info</code></a>. The shipping information. Includes the recipient's name, the shipping method for this order, the shipping address for this order, and the secondary address associated with this order.</li><li><a href="/docs/api/transaction-search/v1/#definition-auction_info"><code>auction_info</code></a>. The auction information. Includes the name of the auction site, the auction site URL, the ID of the customer who makes the purchase in the auction, and the date and time when the auction closes.</li><li><a href="/docs/api/transaction-search/v1/#definition-cart_info"><code>cart_info</code></a>. The cart information. Includes an array of item details, whether the item amount or the shipping amount already includes tax, and the ID of the invoice for PayPal-generated invoices.</li><li><a href="/docs/api/transaction-search/v1/#definition-incentive_info"><code>incentive_info</code></a>. An array of incentive detail objects. Each object includes the incentive, such as a special offer or coupon, the incentive amount, and the incentive program code that identifies a merchant loyalty or incentive program.</li><li><a href="/docs/api/transaction-search/v1/#definition-store_info"><code>store_info</code></a>. The store information. Includes the ID of the merchant store and the terminal ID for the checkout stand in the merchant store.</li></ul>|
|balance_affecting_records_only|query|string|false|Indicates whether the response includes only balance-impacting transactions or all transactions. Value is either:<ul><li><code>Y</code>. The default. The response includes only balance transactions.</li><li><code>N</code>. The response includes all transactions.</li></ul>|
|page_size|query|integer|false|The number of items to return in the response. So, the combination of `page=1` and `page_size=20` returns the first 20 items. The combination of `page=2` and `page_size=20` returns the next 20 items.|
|page|query|integer|false|The zero-relative start index of the entire list of items that are returned in the response. So, the combination of `page=1` and `page_size=20` returns the first 20 items.|

> Example responses

> 200 Response

```json
{
  "transaction_details": [
    {
      "transaction_info": {
        "paypal_account_id": "string",
        "transaction_id": "string",
        "paypal_reference_id": "string",
        "paypal_reference_id_type": "ODR",
        "transaction_event_code": "strin",
        "transaction_initiation_date": "stringstringstringst",
        "transaction_updated_date": "stringstringstringst",
        "transaction_amount": {
          "currency_code": "str",
          "value": "string"
        },
        "fee_amount": {
          "currency_code": "str",
          "value": "string"
        },
        "discount_amount": {
          "currency_code": "str",
          "value": "string"
        },
        "insurance_amount": {
          "currency_code": "str",
          "value": "string"
        },
        "sales_tax_amount": {
          "currency_code": "str",
          "value": "string"
        },
        "shipping_amount": {
          "currency_code": "str",
          "value": "string"
        },
        "shipping_discount_amount": {
          "currency_code": "str",
          "value": "string"
        },
        "shipping_tax_amount": {
          "currency_code": "str",
          "value": "string"
        },
        "other_amount": {
          "currency_code": "str",
          "value": "string"
        },
        "tip_amount": {
          "currency_code": "str",
          "value": "string"
        },
        "transaction_status": "s",
        "transaction_subject": "string",
        "transaction_note": "string",
        "payment_tracking_id": "string",
        "bank_reference_id": "string",
        "ending_balance": {
          "currency_code": "str",
          "value": "string"
        },
        "available_balance": {
          "currency_code": "str",
          "value": "string"
        },
        "invoice_id": "string",
        "custom_field": "string",
        "protection_eligibility": "st",
        "credit_term": "string",
        "credit_transactional_fee": {
          "currency_code": "str",
          "value": "string"
        },
        "credit_promotional_fee": {
          "currency_code": "str",
          "value": "string"
        },
        "annual_percentage_rate": "string",
        "payment_method_type": "string",
        "instrument_type": "string",
        "instrument_sub_type": "string"
      },
      "payer_info": {
        "account_id": "string",
        "email_address": "string",
        "phone_number": {
          "country_code": "str",
          "national_number": "string",
          "extension_number": "string"
        },
        "address_status": "s",
        "payer_status": "s",
        "payer_name": {
          "prefix": "string",
          "given_name": "string",
          "surname": "string",
          "middle_name": "string",
          "suffix": "string",
          "alternate_full_name": "string",
          "full_name": "string"
        },
        "country_code": "st",
        "address": {
          "line1": "string",
          "line2": "string",
          "city": "string",
          "state": "string",
          "country_code": "st",
          "postal_code": "string"
        }
      },
      "shipping_info": {
        "name": "string",
        "method": "string",
        "address": {
          "line1": "string",
          "line2": "string",
          "city": "string",
          "state": "string",
          "country_code": "st",
          "postal_code": "string"
        },
        "secondary_shipping_address": {
          "line1": "string",
          "line2": "string",
          "city": "string",
          "state": "string",
          "country_code": "st",
          "postal_code": "string"
        }
      },
      "cart_info": {
        "item_details": [
          {
            "item_code": "string",
            "item_name": "string",
            "item_description": "string",
            "item_options": "string",
            "item_quantity": "string",
            "item_unit_price": {
              "currency_code": "str",
              "value": "string"
            },
            "item_amount": {
              "currency_code": "str",
              "value": "string"
            },
            "discount_amount": {
              "currency_code": "str",
              "value": "string"
            },
            "adjustment_amount": {
              "currency_code": "str",
              "value": "string"
            },
            "gift_wrap_amount": {
              "currency_code": "str",
              "value": "string"
            },
            "tax_percentage": "string",
            "tax_amounts": [
              {
                "tax_amount": {
                  "currency_code": "str",
                  "value": "string"
                }
              }
            ],
            "basic_shipping_amount": {
              "currency_code": "str",
              "value": "string"
            },
            "extra_shipping_amount": {
              "currency_code": "str",
              "value": "string"
            },
            "handling_amount": {
              "currency_code": "str",
              "value": "string"
            },
            "insurance_amount": {
              "currency_code": "str",
              "value": "string"
            },
            "total_item_amount": {
              "currency_code": "str",
              "value": "string"
            },
            "invoice_number": "string",
            "checkout_options": [
              {
                "checkout_option_name": "string",
                "checkout_option_value": "string"
              }
            ]
          }
        ],
        "tax_inclusive": false,
        "paypal_invoice_id": "string"
      },
      "store_info": {
        "store_id": "string",
        "terminal_id": "string"
      },
      "auction_info": {
        "auction_site": "string",
        "auction_item_site": "string",
        "auction_buyer_id": "string",
        "auction_closing_date": "stringstringstringst"
      },
      "incentive_info": {
        "incentive_details": [
          {
            "incentive_type": "string",
            "incentive_code": "string",
            "incentive_amount": {
              "currency_code": "str",
              "value": "string"
            },
            "incentive_program_code": "string"
          }
        ]
      }
    }
  ],
  "account_number": "string",
  "start_date": "stringstringstringst",
  "end_date": "stringstringstringst",
  "last_refreshed_datetime": "stringstringstringst",
  "page": 0,
  "total_items": 0,
  "total_pages": 0,
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

> default Response

```json
{
  "name": "INVALID_REQUEST",
  "message": "Request is not well-formed, syntactically incorrect, or violates schema.",
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "description": "string"
    }
  ],
  "debug_id": "string",
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

<h3 id="list-transactions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful request returns the HTTP `200 OK` status code and a JSON response body that lists transactions .|[search_response](#schemasearch_response)|
|default|Default|The default response.|[error_default](#schemaerror_default)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://uri.paypal.com/services/reporting/search/read )
</aside>

<h1 id="transaction-search-balances">balances</h1>

Use the `/balances` resource to list balances.

## List all balances

<a id="opIdbalances.get"></a>

> Code samples

```bash
curl https://api-m.paypal.com/v1/reporting/balances \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/reporting/balances`

List all balances. Specify date time to list balances for that time that appear in the response.<blockquote><strong>Notes:</strong> <ul><li>It takes a maximum of three hours for balances to appear in the list balances call.</li><li>This call lists balances upto the previous three years.</li></ul></blockquote>

<h3 id="list-all-balances-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|as_of_time|query|string|false|List balances in the response at the date time provided, will return the last refreshed balance in the system when not provided.|
|currency_code|query|string|false|Filters the transactions in the response by a [three-character ISO-4217 currency code](/api/rest/reference/currency-codes/) for the PayPal transaction currency.|

> Example responses

> 200 Response

```json
{
  "balances": [
    {
      "currency": "str",
      "primary": true,
      "total_balance": {
        "currency_code": "str",
        "value": "string"
      },
      "available_balance": {
        "currency_code": "str",
        "value": "string"
      },
      "withheld_balance": {
        "currency_code": "str",
        "value": "string"
      }
    }
  ],
  "account_id": "stringstrings",
  "as_of_time": "stringstringstringst",
  "last_refresh_time": "stringstringstringst"
}
```

> 400 Response

```json
{
  "name": "INVALID_REQUEST",
  "message": "Request is not well-formed, syntactically incorrect, or violates schema.",
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "description": "string"
    }
  ],
  "debug_id": "string",
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

> 403 Response

```json
{
  "name": "NOT_AUTHORIZED",
  "message": "Authorization failed due to insufficient permissions.",
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "description": "string"
    }
  ],
  "debug_id": "string",
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

> 500 Response

```json
{
  "name": "INTERNAL_SERVER_ERROR",
  "message": "An internal server error occurred.",
  "debug_id": "90957fca61718",
  "links": [
    {
      "href": "https://developer.paypal.com/api/orders/v2/#error-INTERNAL_SERVER_ERROR",
      "rel": "information_link"
    }
  ]
}
```

> default Response

```json
{
  "name": "INVALID_REQUEST",
  "message": "Request is not well-formed, syntactically incorrect, or violates schema.",
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "description": "string"
    }
  ],
  "debug_id": "string",
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

<h3 id="list-all-balances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful request returns the HTTP `200 OK` status code and a JSON response body that lists balances .|[balances_response](#schemabalances_response)|
|400|Bad Request|The request is not well-formed, is syntactically incorrect, or violates schema.|[error_400](#schemaerror_400)|
|403|Forbidden|Authorization failed due to insufficient permissions.|[error_403](#schemaerror_403)|
|500|Internal Server Error|An internal server error occurred.|[error_500](#schemaerror_500)|
|default|Default|The default response.|[error_default](#schemaerror_default)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://uri.paypal.com/services/reporting/balances/read )
</aside>

# Schemas

<h2 id="tocS_account_id">account_id</h2>
<!-- backwards compatibility -->
<a id="schemaaccount_id"></a>
<a id="schema_account_id"></a>
<a id="tocSaccount_id"></a>
<a id="tocsaccount_id"></a>

```json
"stringstrings"
```

The PayPal payer ID, which is a masked version of the PayPal account number intended for use with third parties. The account number is reversibly encrypted and a proprietary variant of Base32 is used to encode the result.

<h2 id="tocS_address">address</h2>
<!-- backwards compatibility -->
<a id="schemaaddress"></a>
<a id="schema_address"></a>
<a id="tocSaddress"></a>
<a id="tocsaddress"></a>

```json
{
  "line1": "string",
  "line2": "string",
  "city": "string",
  "state": "string",
  "country_code": "st",
  "postal_code": "string"
}
```

A simple postal address with coarse-grained fields. Do not use for an international address. Use for backward compatibility only. Does not contain phone.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|line1|string|true|none|The first line of the address. For example, number or street.|
|line2|string|false|none|The second line of the address. For example, suite or apartment number.|
|city|string|true|none|The city name.|
|state|string|false|none|The [code](/docs/api/reference/state-codes/) for a US state or the equivalent for other countries. Required for transactions if the address is in one of these countries: [Argentina](/docs/api/reference/state-codes/#argentina), [Brazil](/docs/api/reference/state-codes/#brazil), [Canada](/docs/api/reference/state-codes/#canada), [China](/docs/api/reference/state-codes/#china), [India](/docs/api/reference/state-codes/#india), [Italy](/docs/api/reference/state-codes/#italy), [Japan](/docs/api/reference/state-codes/#japan), [Mexico](/docs/api/reference/state-codes/#mexico), [Thailand](/docs/api/reference/state-codes/#thailand), or [United States](/docs/api/reference/state-codes/#usa). Maximum length is 40 single-byte characters.|
|country_code|[country_code](#schemacountry_code)|true|none|The [two-character ISO 3166-1 code](/docs/integration/direct/rest/country-codes/) that identifies the country or region.<blockquote><strong>Note:</strong> The country code for Great Britain is <code>GB</code> and not <code>UK</code> as used in the top-level domain names for that country. Use the `C2` country code for China worldwide for comparable uncontrolled price (CUP) method, bank card, and cross-border transactions.</blockquote>|
|postal_code|string|false|none|The postal code, which is the zip code or equivalent. Typically required for countries with a postal code or an equivalent. See [postal code](https://en.wikipedia.org/wiki/Postal_code).|

<h2 id="tocS_auction_info">auction_info</h2>
<!-- backwards compatibility -->
<a id="schemaauction_info"></a>
<a id="schema_auction_info"></a>
<a id="tocSauction_info"></a>
<a id="tocsauction_info"></a>

```json
{
  "auction_site": "string",
  "auction_item_site": "string",
  "auction_buyer_id": "string",
  "auction_closing_date": "stringstringstringst"
}
```

The auction information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|auction_site|string|false|none|The name of the auction site.|
|auction_item_site|string|false|none|The auction site URL.|
|auction_buyer_id|string|false|none|The ID of the buyer who makes the purchase in the auction. This ID might be different from the payer ID provided for the payment.|
|auction_closing_date|[date_time](#schemadate_time)|false|none|The date and time when the auction closes, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).|

<h2 id="tocS_balance_detail">balance_detail</h2>
<!-- backwards compatibility -->
<a id="schemabalance_detail"></a>
<a id="schema_balance_detail"></a>
<a id="tocSbalance_detail"></a>
<a id="tocsbalance_detail"></a>

```json
{
  "currency": "str",
  "primary": true,
  "total_balance": {
    "currency_code": "str",
    "value": "string"
  },
  "available_balance": {
    "currency_code": "str",
    "value": "string"
  },
  "withheld_balance": {
    "currency_code": "str",
    "value": "string"
  }
}
```

The Balance information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currency|[currency_code](#schemacurrency_code)|true|none|Currency Code of the balances listed.|
|primary|boolean|false|none|Optional field representing if the currency is primary currency or not.|
|total_balance|[money](#schemamoney)|true|none|The total amount in PayPal account. It is the sum of all the other balances.|
|available_balance|[money](#schemamoney)|false|none|The amount of cash in an Account which is at the customer's disposal. This amount is captured at settlement cutoff time in the user's time zone as defined for the user.|
|withheld_balance|[money](#schemamoney)|false|none|Balance withheld in the account. The portion of funds that PayPal holds for the customer that is not currently at the customer's disposal.|

<h2 id="tocS_balance_detail_list">balance_detail_list</h2>
<!-- backwards compatibility -->
<a id="schemabalance_detail_list"></a>
<a id="schema_balance_detail_list"></a>
<a id="tocSbalance_detail_list"></a>
<a id="tocsbalance_detail_list"></a>

```json
[
  {
    "currency": "str",
    "primary": true,
    "total_balance": {
      "currency_code": "str",
      "value": "string"
    },
    "available_balance": {
      "currency_code": "str",
      "value": "string"
    },
    "withheld_balance": {
      "currency_code": "str",
      "value": "string"
    }
  }
]
```

An array of balance detail objects.

<h2 id="tocS_balances_response">balances_response</h2>
<!-- backwards compatibility -->
<a id="schemabalances_response"></a>
<a id="schema_balances_response"></a>
<a id="tocSbalances_response"></a>
<a id="tocsbalances_response"></a>

```json
{
  "balances": [
    {
      "currency": "str",
      "primary": true,
      "total_balance": {
        "currency_code": "str",
        "value": "string"
      },
      "available_balance": {
        "currency_code": "str",
        "value": "string"
      },
      "withheld_balance": {
        "currency_code": "str",
        "value": "string"
      }
    }
  ],
  "account_id": "stringstrings",
  "as_of_time": "stringstringstringst",
  "last_refresh_time": "stringstringstringst"
}
```

The balances response information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|balances|[balance_detail_list](#schemabalance_detail_list)|false|none|An array of balance detail objects.|
|account_id|[account_id](#schemaaccount_id)|false|none|The PayPal payer ID, which is a masked version of the PayPal account number intended for use with third parties. The account number is reversibly encrypted and a proprietary variant of Base32 is used to encode the result.|
|as_of_time|[date_time](#schemadate_time)|false|none|The requested date and time or the last date and time when the balances can be served, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).|
|last_refresh_time|[date_time](#schemadate_time)|false|none|The date and time when the balances was last refreshed, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).|

<h2 id="tocS_cart_info">cart_info</h2>
<!-- backwards compatibility -->
<a id="schemacart_info"></a>
<a id="schema_cart_info"></a>
<a id="tocScart_info"></a>
<a id="tocscart_info"></a>

```json
{
  "item_details": [
    {
      "item_code": "string",
      "item_name": "string",
      "item_description": "string",
      "item_options": "string",
      "item_quantity": "string",
      "item_unit_price": {
        "currency_code": "str",
        "value": "string"
      },
      "item_amount": {
        "currency_code": "str",
        "value": "string"
      },
      "discount_amount": {
        "currency_code": "str",
        "value": "string"
      },
      "adjustment_amount": {
        "currency_code": "str",
        "value": "string"
      },
      "gift_wrap_amount": {
        "currency_code": "str",
        "value": "string"
      },
      "tax_percentage": "string",
      "tax_amounts": [
        {
          "tax_amount": {
            "currency_code": "str",
            "value": "string"
          }
        }
      ],
      "basic_shipping_amount": {
        "currency_code": "str",
        "value": "string"
      },
      "extra_shipping_amount": {
        "currency_code": "str",
        "value": "string"
      },
      "handling_amount": {
        "currency_code": "str",
        "value": "string"
      },
      "insurance_amount": {
        "currency_code": "str",
        "value": "string"
      },
      "total_item_amount": {
        "currency_code": "str",
        "value": "string"
      },
      "invoice_number": "string",
      "checkout_options": [
        {
          "checkout_option_name": "string",
          "checkout_option_value": "string"
        }
      ]
    }
  ],
  "tax_inclusive": false,
  "paypal_invoice_id": "string"
}
```

The cart information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|item_details|[item_detail_list](#schemaitem_detail_list)|false|none|An array of item details.|
|tax_inclusive|boolean|false|none|Indicates whether the item amount or the shipping amount already includes tax.|
|paypal_invoice_id|string|false|none|The ID of the invoice. Appears for only PayPal-generated invoices.|

<h2 id="tocS_checkout_option">checkout_option</h2>
<!-- backwards compatibility -->
<a id="schemacheckout_option"></a>
<a id="schema_checkout_option"></a>
<a id="tocScheckout_option"></a>
<a id="tocscheckout_option"></a>

```json
{
  "checkout_option_name": "string",
  "checkout_option_value": "string"
}
```

A checkout option as a name-and-value pair.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checkout_option_name|string|false|none|The checkout option name, such as `color` or `texture`.|
|checkout_option_value|string|false|none|The checkout option value. For example, the checkout option `color` might be `blue` or `red` while the checkout option `texture` might be `smooth` or `rippled`.|

<h2 id="tocS_checkout_option_list">checkout_option_list</h2>
<!-- backwards compatibility -->
<a id="schemacheckout_option_list"></a>
<a id="schema_checkout_option_list"></a>
<a id="tocScheckout_option_list"></a>
<a id="tocscheckout_option_list"></a>

```json
[
  {
    "checkout_option_name": "string",
    "checkout_option_value": "string"
  }
]
```

An array of checkout options. Each option has a name and value.

<h2 id="tocS_country_code">country_code</h2>
<!-- backwards compatibility -->
<a id="schemacountry_code"></a>
<a id="schema_country_code"></a>
<a id="tocScountry_code"></a>
<a id="tocscountry_code"></a>

```json
"st"
```

The [two-character ISO 3166-1 code](/docs/integration/direct/rest/country-codes/) that identifies the country or region.<blockquote><strong>Note:</strong> The country code for Great Britain is <code>GB</code> and not <code>UK</code> as used in the top-level domain names for that country. Use the `C2` country code for China worldwide for comparable uncontrolled price (CUP) method, bank card, and cross-border transactions.</blockquote>

<h2 id="tocS_currency_code">currency_code</h2>
<!-- backwards compatibility -->
<a id="schemacurrency_code"></a>
<a id="schema_currency_code"></a>
<a id="tocScurrency_code"></a>
<a id="tocscurrency_code"></a>

```json
"str"
```

The [three-character ISO-4217 currency code](/docs/integration/direct/rest/currency-codes/) that identifies the currency.

<h2 id="tocS_date_time">date_time</h2>
<!-- backwards compatibility -->
<a id="schemadate_time"></a>
<a id="schema_date_time"></a>
<a id="tocSdate_time"></a>
<a id="tocsdate_time"></a>

```json
"stringstringstringst"
```

The date and time, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). Seconds are required while fractional seconds are optional.<blockquote><strong>Note:</strong> The regular expression provides guidance but does not reject all invalid dates.</blockquote>

<h2 id="tocS_email_address">email_address</h2>
<!-- backwards compatibility -->
<a id="schemaemail_address"></a>
<a id="schema_email_address"></a>
<a id="tocSemail_address"></a>
<a id="tocsemail_address"></a>

```json
"string"
```

The internationalized email address.<blockquote><strong>Note:</strong> Up to 64 characters are allowed before and 255 characters are allowed after the <code>@</code> sign. However, the generally accepted maximum length for an email address is 254 characters. The pattern verifies that an unquoted <code>@</code> sign exists.</blockquote>

<h2 id="tocS_error_400">error_400</h2>
<!-- backwards compatibility -->
<a id="schemaerror_400"></a>
<a id="schema_error_400"></a>
<a id="tocSerror_400"></a>
<a id="tocserror_400"></a>

```json
{
  "name": "INVALID_REQUEST",
  "message": "Request is not well-formed, syntactically incorrect, or violates schema.",
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "description": "string"
    }
  ],
  "debug_id": "string",
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

Request is not well-formed, syntactically incorrect, or violates schema.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|message|string|false|none|none|
|details|[[error_details](#schemaerror_details)]|false|none|none|
|debug_id|string|false|none|The PayPal internal ID. Used for correlation purposes.|
|links|[[error_link_description](#schemaerror_link_description)]|false|none|An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).|

#### Enumerated Values

|Property|Value|
|---|---|
|name|INVALID_REQUEST|
|message|Request is not well-formed, syntactically incorrect, or violates schema.|

<h2 id="tocS_error_401">error_401</h2>
<!-- backwards compatibility -->
<a id="schemaerror_401"></a>
<a id="schema_error_401"></a>
<a id="tocSerror_401"></a>
<a id="tocserror_401"></a>

```json
{
  "name": "AUTHENTICATION_FAILURE",
  "message": "Authentication failed due to missing authorization header, or invalid authentication credentials.",
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "description": "string"
    }
  ],
  "debug_id": "string",
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

Authentication failed due to missing Authorization header, or invalid authentication credentials.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|message|string|false|none|none|
|details|[[error_details](#schemaerror_details)]|false|none|none|
|debug_id|string|false|none|The PayPal internal ID. Used for correlation purposes.|
|links|[[error_link_description](#schemaerror_link_description)]|false|none|An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).|

#### Enumerated Values

|Property|Value|
|---|---|
|name|AUTHENTICATION_FAILURE|
|message|Authentication failed due to missing authorization header, or invalid authentication credentials.|

<h2 id="tocS_error_403">error_403</h2>
<!-- backwards compatibility -->
<a id="schemaerror_403"></a>
<a id="schema_error_403"></a>
<a id="tocSerror_403"></a>
<a id="tocserror_403"></a>

```json
{
  "name": "NOT_AUTHORIZED",
  "message": "Authorization failed due to insufficient permissions.",
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "description": "string"
    }
  ],
  "debug_id": "string",
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

The client is not authorized to access this resource, although it may have valid credentials.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|message|string|false|none|none|
|details|[[error_details](#schemaerror_details)]|false|none|none|
|debug_id|string|false|none|The PayPal internal ID. Used for correlation purposes.|
|links|[[error_link_description](#schemaerror_link_description)]|false|none|An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).|

#### Enumerated Values

|Property|Value|
|---|---|
|name|NOT_AUTHORIZED|
|message|Authorization failed due to insufficient permissions.|

<h2 id="tocS_error_404">error_404</h2>
<!-- backwards compatibility -->
<a id="schemaerror_404"></a>
<a id="schema_error_404"></a>
<a id="tocSerror_404"></a>
<a id="tocserror_404"></a>

```json
{
  "name": "RESOURCE_NOT_FOUND",
  "message": "The specified resource does not exist.",
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "description": "string"
    }
  ],
  "debug_id": "string",
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

The server has not found anything matching the request URI. This either means that the URI is incorrect or the resource is not available.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|message|string|false|none|none|
|details|[[error_details](#schemaerror_details)]|false|none|none|
|debug_id|string|false|none|The PayPal internal ID. Used for correlation purposes.|
|links|[[error_link_description](#schemaerror_link_description)]|false|none|An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).|

#### Enumerated Values

|Property|Value|
|---|---|
|name|RESOURCE_NOT_FOUND|
|message|The specified resource does not exist.|

<h2 id="tocS_error_409">error_409</h2>
<!-- backwards compatibility -->
<a id="schemaerror_409"></a>
<a id="schema_error_409"></a>
<a id="tocSerror_409"></a>
<a id="tocserror_409"></a>

```json
{
  "name": "RESOURCE_CONFLICT",
  "message": "The server has detected a conflict while processing this request.",
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "description": "string"
    }
  ],
  "debug_id": "string",
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

The server has detected a conflict while processing this request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|message|string|false|none|none|
|details|[[error_details](#schemaerror_details)]|false|none|none|
|debug_id|string|false|none|The PayPal internal ID. Used for correlation purposes.|
|links|[[error_link_description](#schemaerror_link_description)]|false|none|An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).|

#### Enumerated Values

|Property|Value|
|---|---|
|name|RESOURCE_CONFLICT|
|message|The server has detected a conflict while processing this request.|

<h2 id="tocS_error_415">error_415</h2>
<!-- backwards compatibility -->
<a id="schemaerror_415"></a>
<a id="schema_error_415"></a>
<a id="tocSerror_415"></a>
<a id="tocserror_415"></a>

```json
{
  "name": "UNSUPPORTED_MEDIA_TYPE",
  "message": "The server does not support the request payload's media type.",
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "description": "string"
    }
  ],
  "debug_id": "string",
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

The server does not support the request payload's media type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|message|string|false|none|none|
|details|[[error_details](#schemaerror_details)]|false|none|none|
|debug_id|string|false|none|The PayPal internal ID. Used for correlation purposes.|
|links|[[error_link_description](#schemaerror_link_description)]|false|none|An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).|

#### Enumerated Values

|Property|Value|
|---|---|
|name|UNSUPPORTED_MEDIA_TYPE|
|message|The server does not support the request payload's media type.|

<h2 id="tocS_error_422">error_422</h2>
<!-- backwards compatibility -->
<a id="schemaerror_422"></a>
<a id="schema_error_422"></a>
<a id="tocSerror_422"></a>
<a id="tocserror_422"></a>

```json
{
  "name": "UNPROCESSABLE_ENTITY",
  "message": "The requested action could not be performed, semantically incorrect, or failed business validation.",
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "description": "string"
    }
  ],
  "debug_id": "string",
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

The requested action cannot be performed and may require interaction with APIs or processes outside of the current request. This is distinct from a 500 response in that there are no systemic problems limiting the API from performing the request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|message|string|false|none|none|
|details|[[error_details](#schemaerror_details)]|false|none|none|
|debug_id|string|false|none|The PayPal internal ID. Used for correlation purposes.|
|links|[[error_link_description](#schemaerror_link_description)]|false|none|An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).|

#### Enumerated Values

|Property|Value|
|---|---|
|name|UNPROCESSABLE_ENTITY|
|message|The requested action could not be performed, semantically incorrect, or failed business validation.|

<h2 id="tocS_error_500">error_500</h2>
<!-- backwards compatibility -->
<a id="schemaerror_500"></a>
<a id="schema_error_500"></a>
<a id="tocSerror_500"></a>
<a id="tocserror_500"></a>

```json
{
  "name": "INTERNAL_SERVER_ERROR",
  "message": "An internal server error occurred.",
  "debug_id": "90957fca61718",
  "links": [
    {
      "href": "https://developer.paypal.com/api/orders/v2/#error-INTERNAL_SERVER_ERROR",
      "rel": "information_link"
    }
  ]
}
```

This is either a system or application error, and generally indicates that although the client appeared to provide a correct request, something unexpected has gone wrong on the server.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|message|string|false|none|none|
|debug_id|string|false|none|The PayPal internal ID. Used for correlation purposes.|
|links|[[error_link_description](#schemaerror_link_description)]|false|none|An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).|

#### Enumerated Values

|Property|Value|
|---|---|
|name|INTERNAL_SERVER_ERROR|
|message|An internal server error occurred.|

<h2 id="tocS_error_503">error_503</h2>
<!-- backwards compatibility -->
<a id="schemaerror_503"></a>
<a id="schema_error_503"></a>
<a id="tocSerror_503"></a>
<a id="tocserror_503"></a>

```json
{
  "name": "SERVICE_UNAVAILABLE",
  "message": "Service Unavailable.",
  "debug_id": "90957fca61718",
  "information_link": "https://developer.paypal.com/docs/api/orders/v2/#error-SERVICE_UNAVAILABLE"
}
```

The server is temporarily unable to handle the request, for example, because of planned maintenance or downtime.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|message|string|false|none|none|
|debug_id|string|false|none|The PayPal internal ID. Used for correlation purposes.|
|links|[[error_link_description](#schemaerror_link_description)]|false|none|An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).|

#### Enumerated Values

|Property|Value|
|---|---|
|name|SERVICE_UNAVAILABLE|
|message|Service Unavailable.|

<h2 id="tocS_error_default">error_default</h2>
<!-- backwards compatibility -->
<a id="schemaerror_default"></a>
<a id="schema_error_default"></a>
<a id="tocSerror_default"></a>
<a id="tocserror_default"></a>

```json
{
  "name": "INVALID_REQUEST",
  "message": "Request is not well-formed, syntactically incorrect, or violates schema.",
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "description": "string"
    }
  ],
  "debug_id": "string",
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

The default error response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[error_400](#schemaerror_400)|false|none|Request is not well-formed, syntactically incorrect, or violates schema.|
|*oneOf*|[error_401](#schemaerror_401)|false|none|Authentication failed due to missing Authorization header, or invalid authentication credentials.|
|*oneOf*|[error_403](#schemaerror_403)|false|none|The client is not authorized to access this resource, although it may have valid credentials. |
|*oneOf*|[error_404](#schemaerror_404)|false|none|The server has not found anything matching the request URI. This either means that the URI is incorrect or the resource is not available.|
|*oneOf*|[error_409](#schemaerror_409)|false|none|The server has detected a conflict while processing this request.|
|*oneOf*|[error_415](#schemaerror_415)|false|none|The server does not support the request payload's media type.|
|*oneOf*|[error_422](#schemaerror_422)|false|none|The requested action cannot be performed and may require interaction with APIs or processes outside of the current request. This is distinct from a 500 response in that there are no systemic problems limiting the API from performing the request.|
|*oneOf*|[error_500](#schemaerror_500)|false|none|This is either a system or application error, and generally indicates that although the client appeared to provide a correct request, something unexpected has gone wrong on the server.|
|*oneOf*|[error_503](#schemaerror_503)|false|none|The server is temporarily unable to handle the request, for example, because of planned maintenance or downtime.|

<h2 id="tocS_error_details">error_details</h2>
<!-- backwards compatibility -->
<a id="schemaerror_details"></a>
<a id="schema_error_details"></a>
<a id="tocSerror_details"></a>
<a id="tocserror_details"></a>

```json
{
  "field": "string",
  "value": "string",
  "location": "body",
  "issue": "string",
  "description": "string"
}
```

The error details. Required for client-side `4XX` errors.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field|string|false|none|The field that caused the error. If this field is in the body, set this value to the field's JSON pointer value. Required for client-side errors.|
|value|string|false|none|The value of the field that caused the error.|
|location|[error_location](#schemaerror_location)|false|none|The location of the field that caused the error. Value is `body`, `path`, or `query`.|
|issue|string|true|none|The unique, fine-grained application-level error code.|
|description|string|false|none|The human-readable description for an issue. The description can change over the lifetime of an API, so clients must not depend on this value.|

#### Enumerated Values

|Property|Value|
|---|---|
|location|body|
|location|path|
|location|query|

<h2 id="tocS_error_link_description">error_link_description</h2>
<!-- backwards compatibility -->
<a id="schemaerror_link_description"></a>
<a id="schema_error_link_description"></a>
<a id="tocSerror_link_description"></a>
<a id="tocserror_link_description"></a>

```json
{
  "href": "string",
  "rel": "string",
  "method": "GET"
}
```

The request-related [HATEOAS link](/api/rest/responses/#hateoas-links) information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|href|string|true|none|The complete target URL. To make the related call, combine the method with this [URI Template-formatted](https://tools.ietf.org/html/rfc6570) link. For pre-processing, include the `$`, `(`, and `)` characters. The `href` is the key HATEOAS component that links a completed call with a subsequent call.|
|rel|string|true|none|The [link relation type](https://tools.ietf.org/html/rfc5988#section-4), which serves as an ID for a link that unambiguously describes the semantics of the link. See [Link Relations](https://www.iana.org/assignments/link-relations/link-relations.xhtml).|
|method|string|false|none|The HTTP method required to make the related call.|

#### Enumerated Values

|Property|Value|
|---|---|
|method|GET|
|method|POST|
|method|PUT|
|method|DELETE|
|method|PATCH|

<h2 id="tocS_error_location">error_location</h2>
<!-- backwards compatibility -->
<a id="schemaerror_location"></a>
<a id="schema_error_location"></a>
<a id="tocSerror_location"></a>
<a id="tocserror_location"></a>

```json
"body"
```

The location of the field that caused the error. Value is `body`, `path`, or `query`.

<h2 id="tocS_incentive_detail">incentive_detail</h2>
<!-- backwards compatibility -->
<a id="schemaincentive_detail"></a>
<a id="schema_incentive_detail"></a>
<a id="tocSincentive_detail"></a>
<a id="tocsincentive_detail"></a>

```json
{
  "incentive_type": "string",
  "incentive_code": "string",
  "incentive_amount": {
    "currency_code": "str",
    "value": "string"
  },
  "incentive_program_code": "string"
}
```

The incentive details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|incentive_type|string|false|none|The type of incentive, such as a special offer or coupon.|
|incentive_code|string|false|none|The code that identifies an incentive, such as a coupon.|
|incentive_amount|[money](#schemamoney)|false|none|The incentive amount.|
|incentive_program_code|string|false|none|The incentive program code that identifies a merchant loyalty or incentive program.|

<h2 id="tocS_incentive_detail_list">incentive_detail_list</h2>
<!-- backwards compatibility -->
<a id="schemaincentive_detail_list"></a>
<a id="schema_incentive_detail_list"></a>
<a id="tocSincentive_detail_list"></a>
<a id="tocsincentive_detail_list"></a>

```json
[
  {
    "incentive_type": "string",
    "incentive_code": "string",
    "incentive_amount": {
      "currency_code": "str",
      "value": "string"
    },
    "incentive_program_code": "string"
  }
]
```

An array of incentive details.

<h2 id="tocS_incentive_info">incentive_info</h2>
<!-- backwards compatibility -->
<a id="schemaincentive_info"></a>
<a id="schema_incentive_info"></a>
<a id="tocSincentive_info"></a>
<a id="tocsincentive_info"></a>

```json
{
  "incentive_details": [
    {
      "incentive_type": "string",
      "incentive_code": "string",
      "incentive_amount": {
        "currency_code": "str",
        "value": "string"
      },
      "incentive_program_code": "string"
    }
  ]
}
```

The incentive details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|incentive_details|[incentive_detail_list](#schemaincentive_detail_list)|false|none|An array of incentive details.|

<h2 id="tocS_item_detail">item_detail</h2>
<!-- backwards compatibility -->
<a id="schemaitem_detail"></a>
<a id="schema_item_detail"></a>
<a id="tocSitem_detail"></a>
<a id="tocsitem_detail"></a>

```json
{
  "item_code": "string",
  "item_name": "string",
  "item_description": "string",
  "item_options": "string",
  "item_quantity": "string",
  "item_unit_price": {
    "currency_code": "str",
    "value": "string"
  },
  "item_amount": {
    "currency_code": "str",
    "value": "string"
  },
  "discount_amount": {
    "currency_code": "str",
    "value": "string"
  },
  "adjustment_amount": {
    "currency_code": "str",
    "value": "string"
  },
  "gift_wrap_amount": {
    "currency_code": "str",
    "value": "string"
  },
  "tax_percentage": "string",
  "tax_amounts": [
    {
      "tax_amount": {
        "currency_code": "str",
        "value": "string"
      }
    }
  ],
  "basic_shipping_amount": {
    "currency_code": "str",
    "value": "string"
  },
  "extra_shipping_amount": {
    "currency_code": "str",
    "value": "string"
  },
  "handling_amount": {
    "currency_code": "str",
    "value": "string"
  },
  "insurance_amount": {
    "currency_code": "str",
    "value": "string"
  },
  "total_item_amount": {
    "currency_code": "str",
    "value": "string"
  },
  "invoice_number": "string",
  "checkout_options": [
    {
      "checkout_option_name": "string",
      "checkout_option_value": "string"
    }
  ]
}
```

The item details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|item_code|string|false|none|An item code that identifies a merchant's goods or service.|
|item_name|string|false|none|The item name.|
|item_description|string|false|none|The item description.|
|item_options|string|false|none|The item options. Describes option choices on the purchase of the item in some detail.|
|item_quantity|string|false|none|The number of purchased units of goods or a service.|
|item_unit_price|[money](#schemamoney)|false|none|The cost for each instance of goods or a service.|
|item_amount|[money](#schemamoney)|false|none|The amount of the payment for the item.|
|discount_amount|[money](#schemamoney)|false|none|The reduction in price associated with goods or a service.|
|adjustment_amount|[money](#schemamoney)|false|none|An increment or decrement to a purchase amount.|
|gift_wrap_amount|[money](#schemamoney)|false|none|The amount of money charged for gift wrapping an item.|
|tax_percentage|[percentage](#schemapercentage)|false|none|A rate, expressed in hundreds, that is used to calculate a levy for the purchase of goods or services.|
|tax_amounts|[item_detail_tax_amount_list](#schemaitem_detail_tax_amount_list)|false|none|An array of tax amounts levied by a government on the purchase of goods or services.|
|basic_shipping_amount|[money](#schemamoney)|false|none|The delivery cost.|
|extra_shipping_amount|[money](#schemamoney)|false|none|The cost for expedited delivery of the goods.|
|handling_amount|[money](#schemamoney)|false|none|A charge for processing the purchase of goods or services.|
|insurance_amount|[money](#schemamoney)|false|none|A charge for guaranteeing the quality of a product or delivery of a product.|
|total_item_amount|[money](#schemamoney)|false|none|The sum of all factors, item cost, discounts, tax, shipping, and so on, that goes into the cost of an item.|
|invoice_number|string|false|none|The invoice number. An alphanumeric string that identifies a billing for a merchant.|
|checkout_options|[checkout_option_list](#schemacheckout_option_list)|false|none|An array of checkout options. Each option has a name and value.|

<h2 id="tocS_item_detail_list">item_detail_list</h2>
<!-- backwards compatibility -->
<a id="schemaitem_detail_list"></a>
<a id="schema_item_detail_list"></a>
<a id="tocSitem_detail_list"></a>
<a id="tocsitem_detail_list"></a>

```json
[
  {
    "item_code": "string",
    "item_name": "string",
    "item_description": "string",
    "item_options": "string",
    "item_quantity": "string",
    "item_unit_price": {
      "currency_code": "str",
      "value": "string"
    },
    "item_amount": {
      "currency_code": "str",
      "value": "string"
    },
    "discount_amount": {
      "currency_code": "str",
      "value": "string"
    },
    "adjustment_amount": {
      "currency_code": "str",
      "value": "string"
    },
    "gift_wrap_amount": {
      "currency_code": "str",
      "value": "string"
    },
    "tax_percentage": "string",
    "tax_amounts": [
      {
        "tax_amount": {
          "currency_code": "str",
          "value": "string"
        }
      }
    ],
    "basic_shipping_amount": {
      "currency_code": "str",
      "value": "string"
    },
    "extra_shipping_amount": {
      "currency_code": "str",
      "value": "string"
    },
    "handling_amount": {
      "currency_code": "str",
      "value": "string"
    },
    "insurance_amount": {
      "currency_code": "str",
      "value": "string"
    },
    "total_item_amount": {
      "currency_code": "str",
      "value": "string"
    },
    "invoice_number": "string",
    "checkout_options": [
      {
        "checkout_option_name": "string",
        "checkout_option_value": "string"
      }
    ]
  }
]
```

An array of item details.

<h2 id="tocS_item_detail_tax_amount">item_detail_tax_amount</h2>
<!-- backwards compatibility -->
<a id="schemaitem_detail_tax_amount"></a>
<a id="schema_item_detail_tax_amount"></a>
<a id="tocSitem_detail_tax_amount"></a>
<a id="tocsitem_detail_tax_amount"></a>

```json
{
  "tax_amount": {
    "currency_code": "str",
    "value": "string"
  }
}
```

The tax levied by a government on the purchase of goods or services.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tax_amount|[money](#schemamoney)|false|none|The tax levied by a government on the purchase of goods or services.|

<h2 id="tocS_item_detail_tax_amount_list">item_detail_tax_amount_list</h2>
<!-- backwards compatibility -->
<a id="schemaitem_detail_tax_amount_list"></a>
<a id="schema_item_detail_tax_amount_list"></a>
<a id="tocSitem_detail_tax_amount_list"></a>
<a id="tocsitem_detail_tax_amount_list"></a>

```json
[
  {
    "tax_amount": {
      "currency_code": "str",
      "value": "string"
    }
  }
]
```

An array of tax amounts levied by a government on the purchase of goods or services.

<h2 id="tocS_link_description">link_description</h2>
<!-- backwards compatibility -->
<a id="schemalink_description"></a>
<a id="schema_link_description"></a>
<a id="tocSlink_description"></a>
<a id="tocslink_description"></a>

```json
{
  "href": "string",
  "rel": "string",
  "method": "GET"
}
```

The request-related [HATEOAS link](/docs/api/reference/api-responses/#hateoas-links) information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|href|string|true|none|The complete target URL. To make the related call, combine the method with this [URI Template-formatted](https://tools.ietf.org/html/rfc6570) link. For pre-processing, include the `$`, `(`, and `)` characters. The `href` is the key HATEOAS component that links a completed call with a subsequent call.|
|rel|string|true|none|The [link relation type](https://tools.ietf.org/html/rfc5988#section-4), which serves as an ID for a link that unambiguously describes the semantics of the link. See [Link Relations](https://www.iana.org/assignments/link-relations/link-relations.xhtml).|
|method|string|false|none|The HTTP method required to make the related call.|

#### Enumerated Values

|Property|Value|
|---|---|
|method|GET|
|method|POST|
|method|PUT|
|method|DELETE|
|method|HEAD|
|method|CONNECT|
|method|OPTIONS|
|method|PATCH|

<h2 id="tocS_link_description_list">link_description_list</h2>
<!-- backwards compatibility -->
<a id="schemalink_description_list"></a>
<a id="schema_link_description_list"></a>
<a id="tocSlink_description_list"></a>
<a id="tocslink_description_list"></a>

```json
[
  {
    "href": "string",
    "rel": "string",
    "method": "GET"
  }
]
```

An array of request-related [HATEOAS links](/api/rest/responses/#hateoas-links).

<h2 id="tocS_money">money</h2>
<!-- backwards compatibility -->
<a id="schemamoney"></a>
<a id="schema_money"></a>
<a id="tocSmoney"></a>
<a id="tocsmoney"></a>

```json
{
  "currency_code": "str",
  "value": "string"
}
```

The currency and amount for a financial transaction, such as a balance or payment due.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currency_code|[currency_code](#schemacurrency_code)|true|none|The [three-character ISO-4217 currency code](/docs/integration/direct/rest/currency-codes/) that identifies the currency.|
|value|string|true|none|The value, which might be:<ul><li>An integer for currencies like `JPY` that are not typically fractional.</li><li>A decimal fraction for currencies like `TND` that are subdivided into thousandths.</li></ul>For the required number of decimal places for a currency code, see [Currency Codes](/docs/integration/direct/rest/currency-codes/).|

<h2 id="tocS_name">name</h2>
<!-- backwards compatibility -->
<a id="schemaname"></a>
<a id="schema_name"></a>
<a id="tocSname"></a>
<a id="tocsname"></a>

```json
{
  "prefix": "string",
  "given_name": "string",
  "surname": "string",
  "middle_name": "string",
  "suffix": "string",
  "alternate_full_name": "string",
  "full_name": "string"
}
```

The name of the party.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|prefix|string|false|none|The prefix, or title, to the party's name.|
|given_name|string|false|none|When the party is a person, the party's given, or first, name.|
|surname|string|false|none|When the party is a person, the party's surname or family name. Also known as the last name. Required when the party is a person. Use also to store multiple surnames including the matronymic, or mother's, surname.|
|middle_name|string|false|none|When the party is a person, the party's middle name. Use also to store multiple middle names including the patronymic, or father's, middle name.|
|suffix|string|false|none|The suffix for the party's name.|
|alternate_full_name|string|false|none|DEPRECATED. The party's alternate name. Can be a business name, nickname, or any other name that cannot be split into first, last name. Required when the party is a business.|
|full_name|string|false|none|When the party is a person, the party's full name.|

<h2 id="tocS_payer_info">payer_info</h2>
<!-- backwards compatibility -->
<a id="schemapayer_info"></a>
<a id="schema_payer_info"></a>
<a id="tocSpayer_info"></a>
<a id="tocspayer_info"></a>

```json
{
  "account_id": "string",
  "email_address": "string",
  "phone_number": {
    "country_code": "str",
    "national_number": "string",
    "extension_number": "string"
  },
  "address_status": "s",
  "payer_status": "s",
  "payer_name": {
    "prefix": "string",
    "given_name": "string",
    "surname": "string",
    "middle_name": "string",
    "suffix": "string",
    "alternate_full_name": "string",
    "full_name": "string"
  },
  "country_code": "st",
  "address": {
    "line1": "string",
    "line2": "string",
    "city": "string",
    "state": "string",
    "country_code": "st",
    "postal_code": "string"
  }
}
```

The payer information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account_id|string|false|none|The PayPal` customer account ID.|
|email_address|[email_address](#schemaemail_address)|false|none|The email address of the payer.|
|phone_number|[phone](#schemaphone)|false|none|The primary phone number of the payer.|
|address_status|string|false|none|The address status of the payer. Value is either:<ul><li><code>Y</code>. Verified.</li><li><code>N</code>. Not verified.</li></ul>|
|payer_status|string|false|none|The status of the payer. Value is `Y` or `N`.|
|payer_name|[name](#schemaname)|false|none|The payer name.|
|country_code|[country_code](#schemacountry_code)|false|none|The [two-character ISO 3166-1 code](/api/rest/reference/country-codes/) that identifies the country or region of the payer.<blockquote><strong>Note:</strong> The country code for Great Britain is <code>GB</code> and not <code>UK</code> as used in the top-level domain names for that country. Use the `C2` country code for China worldwide for comparable uncontrolled price (CUP) method, bank card, and cross-border transactions.</blockquote>|
|address|[address](#schemaaddress)|false|none|The payer address.|

<h2 id="tocS_percentage">percentage</h2>
<!-- backwards compatibility -->
<a id="schemapercentage"></a>
<a id="schema_percentage"></a>
<a id="tocSpercentage"></a>
<a id="tocspercentage"></a>

```json
"string"
```

The percentage, as a fixed-point, signed decimal number. For example, define a 19.99% interest rate as `19.99`.

<h2 id="tocS_phone">phone</h2>
<!-- backwards compatibility -->
<a id="schemaphone"></a>
<a id="schema_phone"></a>
<a id="tocSphone"></a>
<a id="tocsphone"></a>

```json
{
  "country_code": "str",
  "national_number": "string",
  "extension_number": "string"
}
```

The phone number, in its canonical international [E.164 numbering plan format](https://www.itu.int/rec/T-REC-E.164/en).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|country_code|string|true|none|The country calling code (CC), in its canonical international [E.164 numbering plan format](https://www.itu.int/rec/T-REC-E.164/en). The combined length of the CC and the national number must not be greater than 15 digits. The national number consists of a national destination code (NDC) and subscriber number (SN).|
|national_number|string|true|none|The national number, in its canonical international [E.164 numbering plan format](https://www.itu.int/rec/T-REC-E.164/en). The combined length of the country calling code (CC) and the national number must not be greater than 15 digits. The national number consists of a national destination code (NDC) and subscriber number (SN).|
|extension_number|string|false|none|The extension number.|

<h2 id="tocS_search_response">search_response</h2>
<!-- backwards compatibility -->
<a id="schemasearch_response"></a>
<a id="schema_search_response"></a>
<a id="tocSsearch_response"></a>
<a id="tocssearch_response"></a>

```json
{
  "transaction_details": [
    {
      "transaction_info": {
        "paypal_account_id": "string",
        "transaction_id": "string",
        "paypal_reference_id": "string",
        "paypal_reference_id_type": "ODR",
        "transaction_event_code": "strin",
        "transaction_initiation_date": "stringstringstringst",
        "transaction_updated_date": "stringstringstringst",
        "transaction_amount": {
          "currency_code": "str",
          "value": "string"
        },
        "fee_amount": {
          "currency_code": "str",
          "value": "string"
        },
        "discount_amount": {
          "currency_code": "str",
          "value": "string"
        },
        "insurance_amount": {
          "currency_code": "str",
          "value": "string"
        },
        "sales_tax_amount": {
          "currency_code": "str",
          "value": "string"
        },
        "shipping_amount": {
          "currency_code": "str",
          "value": "string"
        },
        "shipping_discount_amount": {
          "currency_code": "str",
          "value": "string"
        },
        "shipping_tax_amount": {
          "currency_code": "str",
          "value": "string"
        },
        "other_amount": {
          "currency_code": "str",
          "value": "string"
        },
        "tip_amount": {
          "currency_code": "str",
          "value": "string"
        },
        "transaction_status": "s",
        "transaction_subject": "string",
        "transaction_note": "string",
        "payment_tracking_id": "string",
        "bank_reference_id": "string",
        "ending_balance": {
          "currency_code": "str",
          "value": "string"
        },
        "available_balance": {
          "currency_code": "str",
          "value": "string"
        },
        "invoice_id": "string",
        "custom_field": "string",
        "protection_eligibility": "st",
        "credit_term": "string",
        "credit_transactional_fee": {
          "currency_code": "str",
          "value": "string"
        },
        "credit_promotional_fee": {
          "currency_code": "str",
          "value": "string"
        },
        "annual_percentage_rate": "string",
        "payment_method_type": "string",
        "instrument_type": "string",
        "instrument_sub_type": "string"
      },
      "payer_info": {
        "account_id": "string",
        "email_address": "string",
        "phone_number": {
          "country_code": "str",
          "national_number": "string",
          "extension_number": "string"
        },
        "address_status": "s",
        "payer_status": "s",
        "payer_name": {
          "prefix": "string",
          "given_name": "string",
          "surname": "string",
          "middle_name": "string",
          "suffix": "string",
          "alternate_full_name": "string",
          "full_name": "string"
        },
        "country_code": "st",
        "address": {
          "line1": "string",
          "line2": "string",
          "city": "string",
          "state": "string",
          "country_code": "st",
          "postal_code": "string"
        }
      },
      "shipping_info": {
        "name": "string",
        "method": "string",
        "address": {
          "line1": "string",
          "line2": "string",
          "city": "string",
          "state": "string",
          "country_code": "st",
          "postal_code": "string"
        },
        "secondary_shipping_address": {
          "line1": "string",
          "line2": "string",
          "city": "string",
          "state": "string",
          "country_code": "st",
          "postal_code": "string"
        }
      },
      "cart_info": {
        "item_details": [
          {
            "item_code": "string",
            "item_name": "string",
            "item_description": "string",
            "item_options": "string",
            "item_quantity": "string",
            "item_unit_price": {
              "currency_code": "str",
              "value": "string"
            },
            "item_amount": {
              "currency_code": "str",
              "value": "string"
            },
            "discount_amount": {
              "currency_code": "str",
              "value": "string"
            },
            "adjustment_amount": {
              "currency_code": "str",
              "value": "string"
            },
            "gift_wrap_amount": {
              "currency_code": "str",
              "value": "string"
            },
            "tax_percentage": "string",
            "tax_amounts": [
              {
                "tax_amount": {
                  "currency_code": "str",
                  "value": "string"
                }
              }
            ],
            "basic_shipping_amount": {
              "currency_code": "str",
              "value": "string"
            },
            "extra_shipping_amount": {
              "currency_code": "str",
              "value": "string"
            },
            "handling_amount": {
              "currency_code": "str",
              "value": "string"
            },
            "insurance_amount": {
              "currency_code": "str",
              "value": "string"
            },
            "total_item_amount": {
              "currency_code": "str",
              "value": "string"
            },
            "invoice_number": "string",
            "checkout_options": [
              {
                "checkout_option_name": "string",
                "checkout_option_value": "string"
              }
            ]
          }
        ],
        "tax_inclusive": false,
        "paypal_invoice_id": "string"
      },
      "store_info": {
        "store_id": "string",
        "terminal_id": "string"
      },
      "auction_info": {
        "auction_site": "string",
        "auction_item_site": "string",
        "auction_buyer_id": "string",
        "auction_closing_date": "stringstringstringst"
      },
      "incentive_info": {
        "incentive_details": [
          {
            "incentive_type": "string",
            "incentive_code": "string",
            "incentive_amount": {
              "currency_code": "str",
              "value": "string"
            },
            "incentive_program_code": "string"
          }
        ]
      }
    }
  ],
  "account_number": "string",
  "start_date": "stringstringstringst",
  "end_date": "stringstringstringst",
  "last_refreshed_datetime": "stringstringstringst",
  "page": 0,
  "total_items": 0,
  "total_pages": 0,
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

The search response information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|transaction_details|[transaction_detail_list](#schematransaction_detail_list)|false|none|An array of transaction detail objects.|
|account_number|string|false|none|The merchant account number.|
|start_date|[date_time](#schemadate_time)|false|none|The start date and time, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).|
|end_date|[date_time](#schemadate_time)|false|none|The end date and time or the last date when the data can be served, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).|
|last_refreshed_datetime|[date_time](#schemadate_time)|false|none|The date and time when the data was last refreshed, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).|
|page|integer|false|none|A zero-relative index of transactions.|
|total_items|integer|false|none|The total number of transactions as an integer beginning with the specified `page` in the full result and not just in this response.|
|total_pages|integer|false|none|The total number of pages, as an `integer`, when the `total_items` is divided into pages of the specified `page_size`.|
|links|[link_description_list](#schemalink_description_list)|false|read-only|An array of request-related [HATEOAS links](/api/rest/responses/#hateoas-links).|

<h2 id="tocS_shipping_info">shipping_info</h2>
<!-- backwards compatibility -->
<a id="schemashipping_info"></a>
<a id="schema_shipping_info"></a>
<a id="tocSshipping_info"></a>
<a id="tocsshipping_info"></a>

```json
{
  "name": "string",
  "method": "string",
  "address": {
    "line1": "string",
    "line2": "string",
    "city": "string",
    "state": "string",
    "country_code": "st",
    "postal_code": "string"
  },
  "secondary_shipping_address": {
    "line1": "string",
    "line2": "string",
    "city": "string",
    "state": "string",
    "country_code": "st",
    "postal_code": "string"
  }
}
```

The shipping information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The recipient's name.|
|method|string|false|none|The shipping method that is associated with this order.|
|address|[address](#schemaaddress)|false|none|The shipping address that is associated with this order.|
|secondary_shipping_address|[address](#schemaaddress)|false|none|The secondary shipping address that is associated with this order.|

<h2 id="tocS_store_info">store_info</h2>
<!-- backwards compatibility -->
<a id="schemastore_info"></a>
<a id="schema_store_info"></a>
<a id="tocSstore_info"></a>
<a id="tocsstore_info"></a>

```json
{
  "store_id": "string",
  "terminal_id": "string"
}
```

The store information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|store_id|string|false|none|The ID of a store for a merchant in the system of record.|
|terminal_id|string|false|none|The terminal ID for the checkout stand in a merchant store.|

<h2 id="tocS_transaction_detail">transaction_detail</h2>
<!-- backwards compatibility -->
<a id="schematransaction_detail"></a>
<a id="schema_transaction_detail"></a>
<a id="tocStransaction_detail"></a>
<a id="tocstransaction_detail"></a>

```json
{
  "transaction_info": {
    "paypal_account_id": "string",
    "transaction_id": "string",
    "paypal_reference_id": "string",
    "paypal_reference_id_type": "ODR",
    "transaction_event_code": "strin",
    "transaction_initiation_date": "stringstringstringst",
    "transaction_updated_date": "stringstringstringst",
    "transaction_amount": {
      "currency_code": "str",
      "value": "string"
    },
    "fee_amount": {
      "currency_code": "str",
      "value": "string"
    },
    "discount_amount": {
      "currency_code": "str",
      "value": "string"
    },
    "insurance_amount": {
      "currency_code": "str",
      "value": "string"
    },
    "sales_tax_amount": {
      "currency_code": "str",
      "value": "string"
    },
    "shipping_amount": {
      "currency_code": "str",
      "value": "string"
    },
    "shipping_discount_amount": {
      "currency_code": "str",
      "value": "string"
    },
    "shipping_tax_amount": {
      "currency_code": "str",
      "value": "string"
    },
    "other_amount": {
      "currency_code": "str",
      "value": "string"
    },
    "tip_amount": {
      "currency_code": "str",
      "value": "string"
    },
    "transaction_status": "s",
    "transaction_subject": "string",
    "transaction_note": "string",
    "payment_tracking_id": "string",
    "bank_reference_id": "string",
    "ending_balance": {
      "currency_code": "str",
      "value": "string"
    },
    "available_balance": {
      "currency_code": "str",
      "value": "string"
    },
    "invoice_id": "string",
    "custom_field": "string",
    "protection_eligibility": "st",
    "credit_term": "string",
    "credit_transactional_fee": {
      "currency_code": "str",
      "value": "string"
    },
    "credit_promotional_fee": {
      "currency_code": "str",
      "value": "string"
    },
    "annual_percentage_rate": "string",
    "payment_method_type": "string",
    "instrument_type": "string",
    "instrument_sub_type": "string"
  },
  "payer_info": {
    "account_id": "string",
    "email_address": "string",
    "phone_number": {
      "country_code": "str",
      "national_number": "string",
      "extension_number": "string"
    },
    "address_status": "s",
    "payer_status": "s",
    "payer_name": {
      "prefix": "string",
      "given_name": "string",
      "surname": "string",
      "middle_name": "string",
      "suffix": "string",
      "alternate_full_name": "string",
      "full_name": "string"
    },
    "country_code": "st",
    "address": {
      "line1": "string",
      "line2": "string",
      "city": "string",
      "state": "string",
      "country_code": "st",
      "postal_code": "string"
    }
  },
  "shipping_info": {
    "name": "string",
    "method": "string",
    "address": {
      "line1": "string",
      "line2": "string",
      "city": "string",
      "state": "string",
      "country_code": "st",
      "postal_code": "string"
    },
    "secondary_shipping_address": {
      "line1": "string",
      "line2": "string",
      "city": "string",
      "state": "string",
      "country_code": "st",
      "postal_code": "string"
    }
  },
  "cart_info": {
    "item_details": [
      {
        "item_code": "string",
        "item_name": "string",
        "item_description": "string",
        "item_options": "string",
        "item_quantity": "string",
        "item_unit_price": {
          "currency_code": "str",
          "value": "string"
        },
        "item_amount": {
          "currency_code": "str",
          "value": "string"
        },
        "discount_amount": {
          "currency_code": "str",
          "value": "string"
        },
        "adjustment_amount": {
          "currency_code": "str",
          "value": "string"
        },
        "gift_wrap_amount": {
          "currency_code": "str",
          "value": "string"
        },
        "tax_percentage": "string",
        "tax_amounts": [
          {
            "tax_amount": {
              "currency_code": "str",
              "value": "string"
            }
          }
        ],
        "basic_shipping_amount": {
          "currency_code": "str",
          "value": "string"
        },
        "extra_shipping_amount": {
          "currency_code": "str",
          "value": "string"
        },
        "handling_amount": {
          "currency_code": "str",
          "value": "string"
        },
        "insurance_amount": {
          "currency_code": "str",
          "value": "string"
        },
        "total_item_amount": {
          "currency_code": "str",
          "value": "string"
        },
        "invoice_number": "string",
        "checkout_options": [
          {
            "checkout_option_name": "string",
            "checkout_option_value": "string"
          }
        ]
      }
    ],
    "tax_inclusive": false,
    "paypal_invoice_id": "string"
  },
  "store_info": {
    "store_id": "string",
    "terminal_id": "string"
  },
  "auction_info": {
    "auction_site": "string",
    "auction_item_site": "string",
    "auction_buyer_id": "string",
    "auction_closing_date": "stringstringstringst"
  },
  "incentive_info": {
    "incentive_details": [
      {
        "incentive_type": "string",
        "incentive_code": "string",
        "incentive_amount": {
          "currency_code": "str",
          "value": "string"
        },
        "incentive_program_code": "string"
      }
    ]
  }
}
```

The transaction details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|transaction_info|[transaction_info](#schematransaction_info)|false|none|The transaction information.|
|payer_info|[payer_info](#schemapayer_info)|false|none|The payer information.|
|shipping_info|[shipping_info](#schemashipping_info)|false|none|The shipping information.|
|cart_info|[cart_info](#schemacart_info)|false|none|The cart information.|
|store_info|[store_info](#schemastore_info)|false|none|The store information.|
|auction_info|[auction_info](#schemaauction_info)|false|none|The auction information.|
|incentive_info|[incentive_info](#schemaincentive_info)|false|none|The incentive information.|

<h2 id="tocS_transaction_detail_list">transaction_detail_list</h2>
<!-- backwards compatibility -->
<a id="schematransaction_detail_list"></a>
<a id="schema_transaction_detail_list"></a>
<a id="tocStransaction_detail_list"></a>
<a id="tocstransaction_detail_list"></a>

```json
[
  {
    "transaction_info": {
      "paypal_account_id": "string",
      "transaction_id": "string",
      "paypal_reference_id": "string",
      "paypal_reference_id_type": "ODR",
      "transaction_event_code": "strin",
      "transaction_initiation_date": "stringstringstringst",
      "transaction_updated_date": "stringstringstringst",
      "transaction_amount": {
        "currency_code": "str",
        "value": "string"
      },
      "fee_amount": {
        "currency_code": "str",
        "value": "string"
      },
      "discount_amount": {
        "currency_code": "str",
        "value": "string"
      },
      "insurance_amount": {
        "currency_code": "str",
        "value": "string"
      },
      "sales_tax_amount": {
        "currency_code": "str",
        "value": "string"
      },
      "shipping_amount": {
        "currency_code": "str",
        "value": "string"
      },
      "shipping_discount_amount": {
        "currency_code": "str",
        "value": "string"
      },
      "shipping_tax_amount": {
        "currency_code": "str",
        "value": "string"
      },
      "other_amount": {
        "currency_code": "str",
        "value": "string"
      },
      "tip_amount": {
        "currency_code": "str",
        "value": "string"
      },
      "transaction_status": "s",
      "transaction_subject": "string",
      "transaction_note": "string",
      "payment_tracking_id": "string",
      "bank_reference_id": "string",
      "ending_balance": {
        "currency_code": "str",
        "value": "string"
      },
      "available_balance": {
        "currency_code": "str",
        "value": "string"
      },
      "invoice_id": "string",
      "custom_field": "string",
      "protection_eligibility": "st",
      "credit_term": "string",
      "credit_transactional_fee": {
        "currency_code": "str",
        "value": "string"
      },
      "credit_promotional_fee": {
        "currency_code": "str",
        "value": "string"
      },
      "annual_percentage_rate": "string",
      "payment_method_type": "string",
      "instrument_type": "string",
      "instrument_sub_type": "string"
    },
    "payer_info": {
      "account_id": "string",
      "email_address": "string",
      "phone_number": {
        "country_code": "str",
        "national_number": "string",
        "extension_number": "string"
      },
      "address_status": "s",
      "payer_status": "s",
      "payer_name": {
        "prefix": "string",
        "given_name": "string",
        "surname": "string",
        "middle_name": "string",
        "suffix": "string",
        "alternate_full_name": "string",
        "full_name": "string"
      },
      "country_code": "st",
      "address": {
        "line1": "string",
        "line2": "string",
        "city": "string",
        "state": "string",
        "country_code": "st",
        "postal_code": "string"
      }
    },
    "shipping_info": {
      "name": "string",
      "method": "string",
      "address": {
        "line1": "string",
        "line2": "string",
        "city": "string",
        "state": "string",
        "country_code": "st",
        "postal_code": "string"
      },
      "secondary_shipping_address": {
        "line1": "string",
        "line2": "string",
        "city": "string",
        "state": "string",
        "country_code": "st",
        "postal_code": "string"
      }
    },
    "cart_info": {
      "item_details": [
        {
          "item_code": "string",
          "item_name": "string",
          "item_description": "string",
          "item_options": "string",
          "item_quantity": "string",
          "item_unit_price": {
            "currency_code": "str",
            "value": "string"
          },
          "item_amount": {
            "currency_code": "str",
            "value": "string"
          },
          "discount_amount": {
            "currency_code": "str",
            "value": "string"
          },
          "adjustment_amount": {
            "currency_code": "str",
            "value": "string"
          },
          "gift_wrap_amount": {
            "currency_code": "str",
            "value": "string"
          },
          "tax_percentage": "string",
          "tax_amounts": [
            {
              "tax_amount": {
                "currency_code": "str",
                "value": "string"
              }
            }
          ],
          "basic_shipping_amount": {
            "currency_code": "str",
            "value": "string"
          },
          "extra_shipping_amount": {
            "currency_code": "str",
            "value": "string"
          },
          "handling_amount": {
            "currency_code": "str",
            "value": "string"
          },
          "insurance_amount": {
            "currency_code": "str",
            "value": "string"
          },
          "total_item_amount": {
            "currency_code": "str",
            "value": "string"
          },
          "invoice_number": "string",
          "checkout_options": [
            {
              "checkout_option_name": "string",
              "checkout_option_value": "string"
            }
          ]
        }
      ],
      "tax_inclusive": false,
      "paypal_invoice_id": "string"
    },
    "store_info": {
      "store_id": "string",
      "terminal_id": "string"
    },
    "auction_info": {
      "auction_site": "string",
      "auction_item_site": "string",
      "auction_buyer_id": "string",
      "auction_closing_date": "stringstringstringst"
    },
    "incentive_info": {
      "incentive_details": [
        {
          "incentive_type": "string",
          "incentive_code": "string",
          "incentive_amount": {
            "currency_code": "str",
            "value": "string"
          },
          "incentive_program_code": "string"
        }
      ]
    }
  }
]
```

An array of transaction detail objects.

<h2 id="tocS_transaction_info">transaction_info</h2>
<!-- backwards compatibility -->
<a id="schematransaction_info"></a>
<a id="schema_transaction_info"></a>
<a id="tocStransaction_info"></a>
<a id="tocstransaction_info"></a>

```json
{
  "paypal_account_id": "string",
  "transaction_id": "string",
  "paypal_reference_id": "string",
  "paypal_reference_id_type": "ODR",
  "transaction_event_code": "strin",
  "transaction_initiation_date": "stringstringstringst",
  "transaction_updated_date": "stringstringstringst",
  "transaction_amount": {
    "currency_code": "str",
    "value": "string"
  },
  "fee_amount": {
    "currency_code": "str",
    "value": "string"
  },
  "discount_amount": {
    "currency_code": "str",
    "value": "string"
  },
  "insurance_amount": {
    "currency_code": "str",
    "value": "string"
  },
  "sales_tax_amount": {
    "currency_code": "str",
    "value": "string"
  },
  "shipping_amount": {
    "currency_code": "str",
    "value": "string"
  },
  "shipping_discount_amount": {
    "currency_code": "str",
    "value": "string"
  },
  "shipping_tax_amount": {
    "currency_code": "str",
    "value": "string"
  },
  "other_amount": {
    "currency_code": "str",
    "value": "string"
  },
  "tip_amount": {
    "currency_code": "str",
    "value": "string"
  },
  "transaction_status": "s",
  "transaction_subject": "string",
  "transaction_note": "string",
  "payment_tracking_id": "string",
  "bank_reference_id": "string",
  "ending_balance": {
    "currency_code": "str",
    "value": "string"
  },
  "available_balance": {
    "currency_code": "str",
    "value": "string"
  },
  "invoice_id": "string",
  "custom_field": "string",
  "protection_eligibility": "st",
  "credit_term": "string",
  "credit_transactional_fee": {
    "currency_code": "str",
    "value": "string"
  },
  "credit_promotional_fee": {
    "currency_code": "str",
    "value": "string"
  },
  "annual_percentage_rate": "string",
  "payment_method_type": "string",
  "instrument_type": "string",
  "instrument_sub_type": "string"
}
```

The transaction information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|paypal_account_id|string|false|none|The ID of the PayPal account of the counterparty.|
|transaction_id|string|false|read-only|The PayPal-generated transaction ID.|
|paypal_reference_id|string|false|none|The PayPal-generated base ID. PayPal exclusive. Cannot be altered. Defined as a related, pre-existing transaction or event.|
|paypal_reference_id_type|string|false|none|The PayPal reference ID type.|
|transaction_event_code|string|false|none|A five-digit transaction event code that classifies the transaction type based on money movement and debit or credit. For example, <code>T0001</code>. See [Transaction event codes](/docs/integration/direct/transaction-search/transaction-event-codes/).|
|transaction_initiation_date|[date_time](#schemadate_time)|false|none|The date and time when work on a transaction began in the PayPal system, as expressed in the time zone of the account on this side of the payment. Specify the value in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).|
|transaction_updated_date|[date_time](#schemadate_time)|false|none|The date and time when the transaction was last changed, as expressed in the time zone of the account on this side of the payment. Specify the value in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).|
|transaction_amount|[money](#schemamoney)|false|none|The all-inclusive gross transaction amount that was transferred between the sender and receiver through PayPal.|
|fee_amount|[money](#schemamoney)|false|none|The PayPal fee amount. All transaction fees are included in this amount, which is the record of fee associated with the transaction.<blockquote><strong>Note:</strong> This field contains a value only when a transaction fee is applied and processed for this transaction.</blockquote>|
|discount_amount|[money](#schemamoney)|false|none|The reduction in price offered for goods or services purchased.<blockquote><strong>Note:</strong> This discount is for a price reduction that is offered for other than that at a individual item level.</blockquote>|
|insurance_amount|[money](#schemamoney)|false|none|An insurance charge. Guarantees the quality or delivery of a product.|
|sales_tax_amount|[money](#schemamoney)|false|none|The PayPal- or merchant-reported sales tax amount for the transaction.|
|shipping_amount|[money](#schemamoney)|false|none|The PayPal- or merchant-reported shipping amount for the transaction.|
|shipping_discount_amount|[money](#schemamoney)|false|none|The discount on the shipping amount.|
|shipping_tax_amount|[money](#schemamoney)|false|none|The tax on the shipping service.|
|other_amount|[money](#schemamoney)|false|none|The special amount that is added to the transaction.|
|tip_amount|[money](#schemamoney)|false|none|The tip.|
|transaction_status|string|false|none|A code that indicates the transaction status. Value is:<table><thead><tr><th>Status&nbsp;code</th><th>Description</th></tr></thead><tbody><tr><td><code>D</code></td><td>PayPal or merchant rules denied the transaction.</td></tr><tr><td><code>P</code></td><td>The transaction is pending. The transaction was created but waits for another payment process to complete, such as an ACH transaction, before the status changes to <code>S</code>.</td></tr><tr><td><code>S</code></td><td>The transaction successfully completed without a denial and after any pending statuses.</td></tr><tr><td><code>V</code></td><td>A successful transaction was fully reversed and funds were refunded to the original sender.</td></tr></tbody></table>|
|transaction_subject|string|false|none|The subject of payment. The payer passes this value to the payee. The payer controls this data through the interface through which he or she sends the data.|
|transaction_note|string|false|none|A special note that the payer passes to the payee. Might contain special customer requests, such as shipping instructions.|
|payment_tracking_id|string|false|none|The payment tracking ID, which is a unique ID that partners specify to either get information about a payment or request a refund.|
|bank_reference_id|string|false|none|The bank reference ID. The bank provides this value for an ACH transaction.|
|ending_balance|[money](#schemamoney)|false|none|The ending balance.<blockquote><strong>Note:</strong> If you specify one or more optional query parameters, the <code>ending_balance</code> response field is empty.</blockquote>|
|available_balance|[money](#schemamoney)|false|none|The available amount of transaction currency during the completion of this transaction.|
|invoice_id|string|false|none|The invoice ID that is sent by the merchant with the transaction.<blockquote><strong>Note:</strong> If an invoice ID was sent with the capture request, the value is reported. Otherwise, the invoice ID of the authorizing transaction is reported.</blockquote>|
|custom_field|string|false|none|The merchant-provided custom text.<blockquote><strong>Note:</strong> Usually, this field includes the unique ID for payments made with MassPay type transaction.</blockquote>|
|protection_eligibility|string|false|none|Indicates whether the transaction is eligible for protection. Value is:<ul><li><code>01</code>. Eligible.</li><li><code>02</code>. Not eligible</li><li><code>03</code>. Partially eligible.</li></ul>|
|credit_term|string|false|none|The credit term. The time span covered by the installment payments as expressed in the term length plus the length time unit code.|
|credit_transactional_fee|[money](#schemamoney)|false|none|The overall amount of the credit transaction fee.|
|credit_promotional_fee|[money](#schemamoney)|false|none|The overall amount of the credit promotional fee.|
|annual_percentage_rate|[percentage](#schemapercentage)|false|none|The annual percentage rate (APR). Determines the amount of interest a consumer pays to finance a purchase at a merchant.|
|payment_method_type|string|false|none|The payment method that was used for a transaction. Value is <code>PUI</code>, <code>installment</code>, or <code>mEFT</code>.<blockquote><strong>Note:</strong> Appears only for pay upon invoice (PUI), installment, and mEFT transactions. Merchants and partners in the EMEA region can use this attribute to note transactions that attract turn-over tax.</blockquote>|
|instrument_type|string|false|none|A high-level classification of the type of financial instrument that was used to fund a payment. The pattern is not provided because the value is defined by an external party. E.g. PAYPAL, CREDIT_CARD, DEBIT_CARD, APPLE_PAY, BANK , VENMO ,Pay Upon Invoice, Pay Later  or <a href="https://developer.paypal.com/docs/checkout/integration-features/alternative-payment-methods/" title="Link to available APM list">Alternative Payment Methods (APM)</a>.|
|instrument_sub_type|string|false|none|A finer-grained classification of the financial instrument that was used to fund a payment. For example, `Visa card` or a `Mastercard` for a credit card, BANKCARD ,DISCOVER etc. The pattern is not provided because the value is defined by an external party.|

#### Enumerated Values

|Property|Value|
|---|---|
|paypal_reference_id_type|ODR|
|paypal_reference_id_type|TXN|
|paypal_reference_id_type|SUB|
|paypal_reference_id_type|PAP|
