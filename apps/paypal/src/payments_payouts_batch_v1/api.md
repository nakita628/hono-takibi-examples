<h1 id="payouts">Payouts v1.9</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Use the Payouts API to make payments to multiple PayPal or Venmo recipients. The Payouts API is a fast, convenient way to send commissions, rebates, rewards, and general disbursements. You can send up to 15,000 payments per call. If you integrated the Payouts API before September 1, 2017, you receive transaction reports through <a href="/docs/payouts/standard/reports/">Payouts Reporting</a>. The Payouts API uses the <a href="https://tools.ietf.org/html/rfc3339#section-5.6">ISO 8601 Internet date and time format</a>.

Base URLs:

* <a href="https://api-m.sandbox.paypal.com">https://api-m.sandbox.paypal.com</a> - PayPal Sandbox Environment

* <a href="https://api-m.paypal.com">https://api-m.paypal.com</a> - PayPal Live Environment

<a href="https://developer.paypal.com/docs/api/payments.payouts-batch/v1/">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 authentication

    - Flow: clientCredentials
    - Token URL = [/v1/oauth2/token](/v1/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://uri.paypal.com/payments/payouts|Payout to a list of recipients.|
|https://uri.paypal.com/services/payments/payouts-item/reverse|For reversing a completed payout item.|
|https://uri.paypal.com/services/payments/payout-applications/status|For retrieving payouts application status|
|https://uri.paypal.com/services/payments/payout-applications/update-status|For updating payouts application status|

<h1 id="payouts-payouts">payouts</h1>

Use the `/payouts` resource to create a batch payout, update the status for a batch payout, show the status of a batch payout with the transaction status and other data for individual payout items, and request approval for a batch payout.

## Create batch payout

<a id="opIdpayouts.post"></a>

> Code samples

```bash
curl https://api-m.paypal.com/v1/payments/payouts \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "sender_batch_header": {
      "sender_batch_id": "Payouts_2018_100007",
      "email_subject": "You have a payout!",
      "email_message": "You have received a payout! Thanks for using our service!"
    },
    "items": [
      {
        "recipient_type": "EMAIL",
        "amount": {
          "value": "9.87",
          "currency": "USD"
        },
        "note": "Thanks for your patronage!",
        "sender_item_id": "201403140001",
        "receiver": "receiver@example.com",
        "alternate_notification_method": {
          "phone": {
            "country_code": "91",
            "national_number": "9999988888"
          }
        },
        "notification_language": "fr-FR"
      },
      {
        "recipient_type": "PHONE",
        "amount": {
          "value": "112.34",
          "currency": "USD"
        },
        "note": "Thanks for your support!",
        "sender_item_id": "201403140002",
        "receiver": "91-734-234-1234"
      },
      {
        "recipient_type": "PAYPAL_ID",
        "amount": {
          "value": "5.32",
          "currency": "USD"
        },
        "note": "Thanks for your patronage!",
        "sender_item_id": "201403140003",
        "receiver": "G83JXTJ5EHCQ2"
      }
    ]
  }'
```

`POST /v1/payments/payouts`

Creates a batch payout. In the JSON request body, pass a `sender_batch_header` and an `items` array. The `sender_batch_header` defines how to handle the payout. The `items` array defines the payout items.<br/>You can make payouts to one or more recipients.<blockquote><strong>Notes:</strong> <ul><li><p>PayPal does not process duplicate payouts. If you specify a <code>sender_batch_id</code> that was used in the last 30 days, the API rejects the request with an error message that shows the duplicate <code>sender_batch_id</code> and includes a HATEOAS link to the original payout with the same <code>sender_batch_id</code>.</p><p>If you receive an HTTP <code>5<i>nn</i></code> status code, you can safely retry the request with the same <code>sender_batch_id</code>.</p></li><li><p>The Payouts API does not support build notation (BN) codes. In a future Payouts release, you can optionally provide BN codes in the <code>PayPal-Partner-Attribution-Id</code> request header.</p><p>For information about the <code>PayPal-Partner-Attribution-Id</code> header, see <a href="/api/rest/requests/#http-request-headers">HTTP request headers</a>. To learn about or request a BN code, contact your partner manager or see <a href="https://www.paypal.com/us/webapps/mpp/partner-program">PayPal Partner Program</a>.</p></li></ul></blockquote>

> Body parameter

```json
{
  "sender_batch_header": {
    "sender_batch_id": "Payouts_2018_100007",
    "email_subject": "You have a payout!",
    "email_message": "You have received a payout! Thanks for using our service!"
  },
  "items": [
    {
      "recipient_type": "EMAIL",
      "amount": {
        "value": "9.87",
        "currency": "USD"
      },
      "note": "Thanks for your patronage!",
      "sender_item_id": "201403140001",
      "receiver": "receiver@example.com",
      "alternate_notification_method": {
        "phone": {
          "country_code": "91",
          "national_number": "9999988888"
        }
      },
      "notification_language": "fr-FR"
    },
    {
      "recipient_type": "PHONE",
      "amount": {
        "value": "112.34",
        "currency": "USD"
      },
      "note": "Thanks for your support!",
      "sender_item_id": "201403140002",
      "receiver": "91-734-234-1234"
    },
    {
      "recipient_type": "PAYPAL_ID",
      "amount": {
        "value": "5.32",
        "currency": "USD"
      },
      "note": "Thanks for your patronage!",
      "sender_item_id": "201403140003",
      "receiver": "G83JXTJ5EHCQ2"
    }
  ]
}
```

<h3 id="create-batch-payout-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|PayPal-Request-Id|header|string|false|The server stores keys for 30 days.|
|body|body|[create_payout_request](#schemacreate_payout_request)|false|none|
|» sender_batch_header|body|[sender_batch_header](#schemasender_batch_header)|true|The sender-provided payout header for a payout request.|
|» items|body|[payout_item_request_list](#schemapayout_item_request_list)|true|An array of individual payout items.|

> Example responses

> 201 Response

```json
{
  "batch_header": {
    "payout_batch_id": "string",
    "batch_status": "DENIED",
    "time_created": "1970-01-01T00:00:00Z",
    "sender_batch_header": {
      "sender_batch_id": "string",
      "recipient_type": "EMAIL",
      "email_subject": "string",
      "email_message": "string"
    }
  },
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

> 400 Response

```json
{
  "name": "string",
  "message": "string",
  "debug_id": "string",
  "information_link": "string",
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "description": "string"
    }
  ],
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
  "name": "string",
  "message": "string",
  "debug_id": "string",
  "information_link": "string",
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "description": "string"
    }
  ],
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
  "name": "string",
  "message": "string",
  "debug_id": "string",
  "information_link": "string",
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "description": "string"
    }
  ],
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
  "name": "string",
  "message": "string",
  "debug_id": "string",
  "information_link": "string",
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "description": "string"
    }
  ],
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

<h3 id="create-batch-payout-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|A successful request returns the HTTP <code>201 Created</code> status code and a JSON response body that shows the ID for the payout and payout details. To show payout status, use the <code>payout_batch_id</code> value that appears in the response. If the initial scan that checks for syntax errors, missing or duplicated keywords, and more succeeds, the <code>batch_status</code> is <code>PENDING</code>. The initial scan checks for syntax errors and missing or duplicated keywords. The API does not immediately validate some payout item values, such as the receiver phone numbers.|[payout](#schemapayout)|
|400|Bad Request|Request is not well-formed, syntactically incorrect, or violates schema.|[error](#schemaerror)|
|403|Forbidden|Authorization failed due to insufficient permissions.|[error](#schemaerror)|
|500|Internal Server Error|An internal server error has occurred.|[error](#schemaerror)|
|default|Default|The error response.|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://uri.paypal.com/payments/payouts )
</aside>

## Show payout batch details

<a id="opIdpayouts.get"></a>

> Code samples

```bash
curl https://api-m.paypal.com/v1/payments/payouts/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/payments/payouts/{id}`

Shows the latest status of a batch payout. Includes the transaction status and other data for individual payout items.

<h3 id="show-payout-batch-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the payout for which to show details.|
|fields|query|string|false|Shows details for only the specified fields.|
|page|query|integer|false|A non-zero integer representing the page of the results.|
|page_size|query|integer|false|The maximum number of results to return at one time. Value is a non-negative, non-zero integer. If the user chooses pagination, the maximum page is `1000`.|
|total_required|query|boolean|false|Indicates whether to show the total items and total pages count in the response.|

> Example responses

> 200 Response

```json
{
  "total_items": 0,
  "total_pages": 0,
  "batch_header": {
    "payout_batch_id": "string",
    "batch_status": "DENIED",
    "time_created": "1970-01-01T00:00:00Z",
    "time_completed": "1970-01-01T00:00:00Z",
    "time_closed": "1970-01-01T00:00:00Z",
    "sender_batch_header": {
      "sender_batch_id": "string",
      "recipient_type": "EMAIL",
      "email_subject": "string",
      "email_message": "string"
    },
    "funding_source": "BALANCE",
    "amount": {
      "currency": "string",
      "value": "string"
    },
    "fees": {
      "currency": "string",
      "value": "string"
    }
  },
  "items": [
    {
      "payout_item_id": "string",
      "transaction_id": "string",
      "activity_id": "string",
      "transaction_status": "SUCCESS",
      "payout_item_fee": {
        "currency": "string",
        "value": "string"
      },
      "payout_batch_id": "string",
      "payout_item": {
        "recipient_type": "EMAIL",
        "amount": {
          "currency": "string",
          "value": "string"
        },
        "note": "string",
        "receiver": "string",
        "sender_item_id": "string",
        "recipient_name": {
          "prefix": "string",
          "given_name": "string",
          "surname": "string",
          "middle_name": "string",
          "suffix": "string",
          "alternate_full_name": "string",
          "full_name": "string"
        },
        "recipient_wallet": "PAYPAL",
        "purpose": "AWARDS"
      },
      "currency_conversion": {
        "from_amount": {
          "currency": "string",
          "value": "string"
        },
        "to_amount": {
          "currency": "string",
          "value": "string"
        },
        "exchange_rate": "string"
      },
      "time_processed": "1970-01-01T00:00:00Z",
      "errors": {
        "name": "string",
        "message": "string",
        "debug_id": "string",
        "information_link": "string",
        "details": [
          {
            "field": "string",
            "value": "string",
            "location": "body",
            "issue": "string",
            "description": "string"
          }
        ],
        "links": [
          {
            "href": "string",
            "rel": "string",
            "method": "GET"
          }
        ]
      },
      "links": [
        {
          "href": "string",
          "rel": "string",
          "method": "GET"
        }
      ]
    }
  ],
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

> 404 Response

```json
{
  "name": "string",
  "message": "string",
  "debug_id": "string",
  "information_link": "string",
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "description": "string"
    }
  ],
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
  "name": "string",
  "message": "string",
  "debug_id": "string",
  "information_link": "string",
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "description": "string"
    }
  ],
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
  "name": "string",
  "message": "string",
  "debug_id": "string",
  "information_link": "string",
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "description": "string"
    }
  ],
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

<h3 id="show-payout-batch-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful request returns the HTTP `200 OK` status code and a JSON response body that shows batch payout details.|[payout_batch](#schemapayout_batch)|
|404|Not Found|Resource Not Found.|[error](#schemaerror)|
|500|Internal Server Error|An internal server error has occurred.|[error](#schemaerror)|
|default|Default|The error response.|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://uri.paypal.com/payments/payouts )
</aside>

<h1 id="payouts-payouts-item">payouts-item</h1>

Use the `/payouts-item` resource to show payout item details and cancel an unclaimed payout item.

## Show payout item details

<a id="opIdpayouts-item.get"></a>

> Code samples

```bash
curl https://api-m.paypal.com/v1/payments/payouts-item/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/payments/payouts-item/{payout_item_id}`

Shows details for a payout item, by ID. A <code>payout_item_id</code> helps you identify denied payments. If a payment is denied, you can use the <code>payout_item_id</code> to identify the payment even if it lacks a <code>transaction_id</code>.

<h3 id="show-payout-item-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|payout_item_id|path|string|true|The ID of the payout item to cancel.|

> Example responses

> 200 Response

```json
{
  "payout_item_id": "string",
  "transaction_id": "string",
  "activity_id": "string",
  "transaction_status": "SUCCESS",
  "payout_item_fee": {
    "currency": "string",
    "value": "string"
  },
  "payout_batch_id": "string",
  "sender_batch_id": "string",
  "payout_item": {
    "recipient_type": "EMAIL",
    "amount": {
      "currency": "string",
      "value": "string"
    },
    "note": "string",
    "receiver": "string",
    "sender_item_id": "string",
    "recipient_name": {
      "prefix": "string",
      "given_name": "string",
      "surname": "string",
      "middle_name": "string",
      "suffix": "string",
      "alternate_full_name": "string",
      "full_name": "string"
    },
    "recipient_wallet": "PAYPAL",
    "purpose": "AWARDS"
  },
  "currency_conversion": {
    "from_amount": {
      "currency": "string",
      "value": "string"
    },
    "to_amount": {
      "currency": "string",
      "value": "string"
    },
    "exchange_rate": "string"
  },
  "time_processed": "1970-01-01T00:00:00Z",
  "errors": {
    "name": "string",
    "message": "string",
    "debug_id": "string",
    "information_link": "string",
    "details": [
      {
        "field": "string",
        "value": "string",
        "location": "body",
        "issue": "string",
        "description": "string"
      }
    ],
    "links": [
      {
        "href": "string",
        "rel": "string",
        "method": "GET"
      }
    ]
  },
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

> 404 Response

```json
{
  "name": "string",
  "message": "string",
  "debug_id": "string",
  "information_link": "string",
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "description": "string"
    }
  ],
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
  "name": "string",
  "message": "string",
  "debug_id": "string",
  "information_link": "string",
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "description": "string"
    }
  ],
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
  "name": "string",
  "message": "string",
  "debug_id": "string",
  "information_link": "string",
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "description": "string"
    }
  ],
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

<h3 id="show-payout-item-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful request returns the HTTP <code>200 OK</code> status code and a JSON response body with a <code>payout_item_details</code> object, which contains data about a payout item including the transaction status.|[payout_item](#schemapayout_item)|
|404|Not Found|Resource Not Found.|[error](#schemaerror)|
|500|Internal Server Error|An internal server error has occurred.|[error](#schemaerror)|
|default|Default|The error response.|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://uri.paypal.com/payments/payouts )
</aside>

## Cancel unclaimed payout item

<a id="opIdpayouts-item.cancel"></a>

> Code samples

```bash
curl https://api-m.paypal.com/v1/payments/payouts-item/string/cancel \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v1/payments/payouts-item/{payout_item_id}/cancel`

Cancels an unclaimed payout item, by ID. If no one claims the unclaimed item within 30 days, the API automatically returns the funds to the sender. Use this call to cancel the unclaimed item before the automatic 30-day refund. You can cancel payout items with a <code>transaction_status</code> of <code>UNCLAIMED</code>.

<h3 id="cancel-unclaimed-payout-item-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|payout_item_id|path|string|true|The ID of the payout item to cancel.|

> Example responses

> 200 Response

```json
{
  "payout_item_id": "string",
  "transaction_id": "string",
  "activity_id": "string",
  "transaction_status": "SUCCESS",
  "payout_item_fee": {
    "currency": "string",
    "value": "string"
  },
  "payout_batch_id": "string",
  "sender_batch_id": "string",
  "payout_item": {
    "recipient_type": "EMAIL",
    "amount": {
      "currency": "string",
      "value": "string"
    },
    "note": "string",
    "receiver": "string",
    "sender_item_id": "string",
    "recipient_name": {
      "prefix": "string",
      "given_name": "string",
      "surname": "string",
      "middle_name": "string",
      "suffix": "string",
      "alternate_full_name": "string",
      "full_name": "string"
    },
    "recipient_wallet": "PAYPAL",
    "purpose": "AWARDS"
  },
  "currency_conversion": {
    "from_amount": {
      "currency": "string",
      "value": "string"
    },
    "to_amount": {
      "currency": "string",
      "value": "string"
    },
    "exchange_rate": "string"
  },
  "time_processed": "1970-01-01T00:00:00Z",
  "errors": {
    "name": "string",
    "message": "string",
    "debug_id": "string",
    "information_link": "string",
    "details": [
      {
        "field": "string",
        "value": "string",
        "location": "body",
        "issue": "string",
        "description": "string"
      }
    ],
    "links": [
      {
        "href": "string",
        "rel": "string",
        "method": "GET"
      }
    ]
  },
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

> 400 Response

```json
{
  "name": "string",
  "message": "string",
  "debug_id": "string",
  "information_link": "string",
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "description": "string"
    }
  ],
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

> 404 Response

```json
{
  "name": "string",
  "message": "string",
  "debug_id": "string",
  "information_link": "string",
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "description": "string"
    }
  ],
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
  "name": "string",
  "message": "string",
  "debug_id": "string",
  "information_link": "string",
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "description": "string"
    }
  ],
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
  "name": "string",
  "message": "string",
  "debug_id": "string",
  "information_link": "string",
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "description": "string"
    }
  ],
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

<h3 id="cancel-unclaimed-payout-item-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful request returns the HTTP `200 OK` status code with a JSON response body that shows payout item details.|[payout_item](#schemapayout_item)|
|400|Bad Request|Request is not well-formed, syntactically incorrect, or violates schema.|[error](#schemaerror)|
|404|Not Found|Resource Not Found.|[error](#schemaerror)|
|500|Internal Server Error|An internal server error has occurred.|[error](#schemaerror)|
|default|Default|The error response.|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://uri.paypal.com/payments/payouts )
</aside>

# Schemas

<h2 id="tocS_alternate_notification_method">alternate_notification_method</h2>
<!-- backwards compatibility -->
<a id="schemaalternate_notification_method"></a>
<a id="schema_alternate_notification_method"></a>
<a id="tocSalternate_notification_method"></a>
<a id="tocsalternate_notification_method"></a>

```json
{
  "phone": {
    "country_code": "str",
    "national_number": "string",
    "extension_number": "string"
  }
}
```

Captures additional notification modes to reach out to the receiver regarding this payment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|phone|[phone](#schemaphone)|false|none|The mobile phone number of the receiver.|

<h2 id="tocS_application_context">application_context</h2>
<!-- backwards compatibility -->
<a id="schemaapplication_context"></a>
<a id="schema_application_context"></a>
<a id="tocSapplication_context"></a>
<a id="tocsapplication_context"></a>

```json
{
  "social_feed_privacy": "PRIVATE",
  "holler_url": "http://example.com",
  "logo_url": "http://example.com"
}
```

Metadata for Venmo transactions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|social_feed_privacy|string|false|none|This attribute controls the privacy of a payout transaction in recipient’s feed. PUBLIC, FRIENDS_ONLY & PRIVATE are the values that can be used. PUBLIC - The payment displays on the recipient's public Venmo feed. FRIENDS_ONLY - The payment displays only to the recipient's Venmo friends. PRIVATE - The payment displays only on the recipient's personal feed. Defaults to `PRIVATE` if left blank.|
|holler_url|string(uri)|false|none|**Deprecated.** Link to a Holler sticker. For Venmo recipients, the sticker displays with the payout message. The maximum URL length is 151.|
|logo_url|string(uri)|false|none|Link to a logo that displays as the sender's profile image in the recipient's Venmo feed. Used to add or update the business profile image. Max image size: 1024 x 1024 pixels. The image should be square and maximum URL length is 2000.|

<h2 id="tocS_batch_enum">batch_enum</h2>
<!-- backwards compatibility -->
<a id="schemabatch_enum"></a>
<a id="schema_batch_enum"></a>
<a id="tocSbatch_enum"></a>
<a id="tocsbatch_enum"></a>

```json
"DENIED"
```

The payouts status.

<h2 id="tocS_create_payout_request">create_payout_request</h2>
<!-- backwards compatibility -->
<a id="schemacreate_payout_request"></a>
<a id="schema_create_payout_request"></a>
<a id="tocScreate_payout_request"></a>
<a id="tocscreate_payout_request"></a>

```json
{
  "sender_batch_header": {
    "sender_batch_id": "string",
    "recipient_type": "string",
    "email_subject": "string",
    "email_message": "string",
    "note": "string"
  },
  "items": [
    {
      "recipient_type": "string",
      "amount": {
        "currency": "string",
        "value": "string"
      },
      "note": "string",
      "receiver": "string",
      "sender_item_id": "string",
      "recipient_wallet": "PAYPAL",
      "alternate_notification_method": {
        "phone": {
          "country_code": "str",
          "national_number": "string",
          "extension_number": "string"
        }
      },
      "notification_language": "string",
      "application_context": {
        "social_feed_privacy": "PRIVATE",
        "holler_url": "http://example.com",
        "logo_url": "http://example.com"
      },
      "purpose": "AWARDS"
    }
  ]
}
```

The create payout request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sender_batch_header|[sender_batch_header](#schemasender_batch_header)|true|none|The sender-provided payout header for a payout request.|
|items|[payout_item_request_list](#schemapayout_item_request_list)|true|none|An array of individual payout items.|

<h2 id="tocS_currency">currency</h2>
<!-- backwards compatibility -->
<a id="schemacurrency"></a>
<a id="schema_currency"></a>
<a id="tocScurrency"></a>
<a id="tocscurrency"></a>

```json
{
  "currency": "string",
  "value": "string"
}
```

The currency and amount for a financial transaction, such as a balance or payment due.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currency|string|true|none|The [three-character ISO-4217 currency code](/docs/integration/direct/rest/currency-codes/).|
|value|string|true|none|The value, which might be:<ul><li>An integer for currencies like `JPY` that are not typically fractional.</li><li>A decimal fraction for currencies like `TND` that are subdivided into thousandths.</li></ul>For the required number of decimal places for a currency code, see [Currency codes - ISO 4217](https://www.iso.org/iso-4217-currency-codes.html).|

<h2 id="tocS_definitions-link_description_list">definitions-link_description_list</h2>
<!-- backwards compatibility -->
<a id="schemadefinitions-link_description_list"></a>
<a id="schema_definitions-link_description_list"></a>
<a id="tocSdefinitions-link_description_list"></a>
<a id="tocsdefinitions-link_description_list"></a>

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

<h2 id="tocS_error">error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "name": "string",
  "message": "string",
  "debug_id": "string",
  "information_link": "string",
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "description": "string"
    }
  ],
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

The error details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The human-readable, unique name of the error.|
|message|string|true|none|The message that describes the error.|
|debug_id|string|true|none|The PayPal internal ID. Used for correlation purposes.|
|information_link|string|false|read-only|The information link, or URI, that shows detailed information about this error for the developer.|
|details|[error_details_list](#schemaerror_details_list)|false|none|An array of additional details about the error.|
|links|[link_description_list](#schemalink_description_list)|false|read-only|An array of request-related [HATEOAS links](/docs/api/reference/api-responses/#hateoas-links).|

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

<h2 id="tocS_error_details-2">error_details-2</h2>
<!-- backwards compatibility -->
<a id="schemaerror_details-2"></a>
<a id="schema_error_details-2"></a>
<a id="tocSerror_details-2"></a>
<a id="tocserror_details-2"></a>

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
|location|string|false|none|The location of the field that caused the error. Value is `body`, `path`, or `query`.|
|issue|string|true|none|The unique, fine-grained application-level error code.|
|description|string|false|none|The human-readable description for an issue. The description can change over the lifetime of an API, so clients must not depend on this value.|

<h2 id="tocS_error_details_list">error_details_list</h2>
<!-- backwards compatibility -->
<a id="schemaerror_details_list"></a>
<a id="schema_error_details_list"></a>
<a id="tocSerror_details_list"></a>
<a id="tocserror_details_list"></a>

```json
[
  {
    "field": "string",
    "value": "string",
    "location": "body",
    "issue": "string",
    "description": "string"
  }
]
```

An array of additional details about the error.

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

<h2 id="tocS_funding_source">funding_source</h2>
<!-- backwards compatibility -->
<a id="schemafunding_source"></a>
<a id="schema_funding_source"></a>
<a id="tocSfunding_source"></a>
<a id="tocsfunding_source"></a>

```json
"BALANCE"
```

Identifies a funding source type.

<h2 id="tocS_language">language</h2>
<!-- backwards compatibility -->
<a id="schemalanguage"></a>
<a id="schema_language"></a>
<a id="tocSlanguage"></a>
<a id="tocslanguage"></a>

```json
"string"
```

The [language tag](https://tools.ietf.org/html/bcp47#section-2) for the language in which to localize the error-related strings, such as messages, issues, and suggested actions. The tag is made up of the [ISO 639-2 language code](https://www.loc.gov/standards/iso639-2/php/code_list.php), the optional [ISO-15924 script tag](https://www.unicode.org/iso15924/codelists.html), and the [ISO-3166 alpha-2 country code](/docs/integration/direct/rest/country-codes/).

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

An array of request-related [HATEOAS links](/docs/api/reference/api-responses/#hateoas-links).

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

<h2 id="tocS_payout">payout</h2>
<!-- backwards compatibility -->
<a id="schemapayout"></a>
<a id="schema_payout"></a>
<a id="tocSpayout"></a>
<a id="tocspayout"></a>

```json
{
  "batch_header": {
    "payout_batch_id": "string",
    "batch_status": "DENIED",
    "time_created": "1970-01-01T00:00:00Z",
    "sender_batch_header": {
      "sender_batch_id": "string",
      "recipient_type": "EMAIL",
      "email_subject": "string",
      "email_message": "string"
    }
  },
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

The create payout response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|batch_header|[payout_header](#schemapayout_header)|false|none|The payout header.|
|links|[definitions-link_description_list](#schemadefinitions-link_description_list)|false|read-only|An array of request-related [HATEOAS links](/api/rest/responses/#hateoas-links).|

<h2 id="tocS_payout_batch">payout_batch</h2>
<!-- backwards compatibility -->
<a id="schemapayout_batch"></a>
<a id="schema_payout_batch"></a>
<a id="tocSpayout_batch"></a>
<a id="tocspayout_batch"></a>

```json
{
  "total_items": 0,
  "total_pages": 0,
  "batch_header": {
    "payout_batch_id": "string",
    "batch_status": "DENIED",
    "time_created": "1970-01-01T00:00:00Z",
    "time_completed": "1970-01-01T00:00:00Z",
    "time_closed": "1970-01-01T00:00:00Z",
    "sender_batch_header": {
      "sender_batch_id": "string",
      "recipient_type": "EMAIL",
      "email_subject": "string",
      "email_message": "string"
    },
    "funding_source": "BALANCE",
    "amount": {
      "currency": "string",
      "value": "string"
    },
    "fees": {
      "currency": "string",
      "value": "string"
    }
  },
  "items": [
    {
      "payout_item_id": "string",
      "transaction_id": "string",
      "activity_id": "string",
      "transaction_status": "SUCCESS",
      "payout_item_fee": {
        "currency": "string",
        "value": "string"
      },
      "payout_batch_id": "string",
      "payout_item": {
        "recipient_type": "EMAIL",
        "amount": {
          "currency": "string",
          "value": "string"
        },
        "note": "string",
        "receiver": "string",
        "sender_item_id": "string",
        "recipient_name": {
          "prefix": "string",
          "given_name": "string",
          "surname": "string",
          "middle_name": "string",
          "suffix": "string",
          "alternate_full_name": "string",
          "full_name": "string"
        },
        "recipient_wallet": "PAYPAL",
        "purpose": "AWARDS"
      },
      "currency_conversion": {
        "from_amount": {
          "currency": "string",
          "value": "string"
        },
        "to_amount": {
          "currency": "string",
          "value": "string"
        },
        "exchange_rate": "string"
      },
      "time_processed": "1970-01-01T00:00:00Z",
      "errors": {
        "name": "string",
        "message": "string",
        "debug_id": "string",
        "information_link": "string",
        "details": [
          {
            "field": "string",
            "value": "string",
            "location": "body",
            "issue": "string",
            "description": "string"
          }
        ],
        "links": [
          {
            "href": "string",
            "rel": "string",
            "method": "GET"
          }
        ]
      },
      "links": [
        {
          "href": "string",
          "rel": "string",
          "method": "GET"
        }
      ]
    }
  ],
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

The PayPal-generated batch status.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total_items|integer|false|none|The total number of items in the full result list.|
|total_pages|integer|false|none|The total number of pages.|
|batch_header|[payout_batch_header](#schemapayout_batch_header)|false|none|A payout header. Includes the generated payout status.|
|items|[payout_batch_items_list](#schemapayout_batch_items_list)|false|none|An array of individual items.|
|links|[payout_batch_definitions-link_description_list](#schemapayout_batch_definitions-link_description_list)|false|read-only|An array of request-related [HATEOAS links](/api/rest/responses/#hateoas-links).|

<h2 id="tocS_payout_batch_definitions-link_description_list">payout_batch_definitions-link_description_list</h2>
<!-- backwards compatibility -->
<a id="schemapayout_batch_definitions-link_description_list"></a>
<a id="schema_payout_batch_definitions-link_description_list"></a>
<a id="tocSpayout_batch_definitions-link_description_list"></a>
<a id="tocspayout_batch_definitions-link_description_list"></a>

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

<h2 id="tocS_payout_batch_header">payout_batch_header</h2>
<!-- backwards compatibility -->
<a id="schemapayout_batch_header"></a>
<a id="schema_payout_batch_header"></a>
<a id="tocSpayout_batch_header"></a>
<a id="tocspayout_batch_header"></a>

```json
{
  "payout_batch_id": "string",
  "batch_status": "DENIED",
  "time_created": "1970-01-01T00:00:00Z",
  "time_completed": "1970-01-01T00:00:00Z",
  "time_closed": "1970-01-01T00:00:00Z",
  "sender_batch_header": {
    "sender_batch_id": "string",
    "recipient_type": "EMAIL",
    "email_subject": "string",
    "email_message": "string"
  },
  "funding_source": "BALANCE",
  "amount": {
    "currency": "string",
    "value": "string"
  },
  "fees": {
    "currency": "string",
    "value": "string"
  }
}
```

The payout header that is returned in response to a payout header request. Shows details for an entire payout request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|payout_batch_id|string|true|none|The PayPal-generated ID for a payout.|
|batch_status|[batch_enum](#schemabatch_enum)|true|none|The PayPal-generated payout status. If the payout passes preliminary checks, the status is `PENDING`.|
|time_created|string(date-time)|false|none|The date and time when processing for the payout began, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).|
|time_completed|string(date-time)|false|none|The date and time when processing for the payout was completed, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).|
|time_closed|string(date-time)|false|none|The date and time when the payout was closed, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). A payout is considered closed when all items in a batch are processed and the available balance from the temporary hold is released.|
|sender_batch_header|[payout_sender_batch_header](#schemapayout_sender_batch_header)|true|none|The original payout header, as provided by the payment sender.|
|funding_source|[funding_source](#schemafunding_source)|false|none|The ID to differentiate a PayPal balance-funded transaction from a PayPal treasury-funded transaction.|
|amount|[currency](#schemacurrency)|false|none|The currency and total amount requested for the payouts.|
|fees|[currency](#schemacurrency)|false|none|The currency and amount of the total estimate for the applicable payouts fees. Initially, the fee is `0`. The fee is populated after the payout moves to the `PROCESSING` state.|

#### Enumerated Values

|Property|Value|
|---|---|
|batch_status|DENIED|
|batch_status|PENDING|
|batch_status|PROCESSING|
|batch_status|SUCCESS|
|batch_status|CANCELED|
|funding_source|BALANCE|

<h2 id="tocS_payout_batch_items">payout_batch_items</h2>
<!-- backwards compatibility -->
<a id="schemapayout_batch_items"></a>
<a id="schema_payout_batch_items"></a>
<a id="tocSpayout_batch_items"></a>
<a id="tocspayout_batch_items"></a>

```json
{
  "payout_item_id": "string",
  "transaction_id": "string",
  "activity_id": "string",
  "transaction_status": "SUCCESS",
  "payout_item_fee": {
    "currency": "string",
    "value": "string"
  },
  "payout_batch_id": "string",
  "payout_item": {
    "recipient_type": "EMAIL",
    "amount": {
      "currency": "string",
      "value": "string"
    },
    "note": "string",
    "receiver": "string",
    "sender_item_id": "string",
    "recipient_name": {
      "prefix": "string",
      "given_name": "string",
      "surname": "string",
      "middle_name": "string",
      "suffix": "string",
      "alternate_full_name": "string",
      "full_name": "string"
    },
    "recipient_wallet": "PAYPAL",
    "purpose": "AWARDS"
  },
  "currency_conversion": {
    "from_amount": {
      "currency": "string",
      "value": "string"
    },
    "to_amount": {
      "currency": "string",
      "value": "string"
    },
    "exchange_rate": "string"
  },
  "time_processed": "1970-01-01T00:00:00Z",
  "errors": {
    "name": "string",
    "message": "string",
    "debug_id": "string",
    "information_link": "string",
    "details": [
      {
        "field": "string",
        "value": "string",
        "location": "body",
        "issue": "string",
        "description": "string"
      }
    ],
    "links": [
      {
        "href": "string",
        "rel": "string",
        "method": "GET"
      }
    ]
  },
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

The payout item status and other details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|payout_item_id|string|true|none|The ID for the payout item. Viewable when you show details for a payout.|
|transaction_id|string|false|none|The PayPal-generated ID for the transaction.|
|activity_id|string|false|none|The unique PayPal-generated common ID created to link sender side and receiver side transaction. Used for tracking.|
|transaction_status|[transaction_enum](#schematransaction_enum)|false|none|The item transaction status.<blockquote><strong>Note:</strong> For <code>POST/v1/payments/payouts-item/{payout_item_id}/cancel</code>, the only possible <code>transaction_status</code> value is <code>RETURNED</code>.</blockquote>|
|payout_item_fee|[currency](#schemacurrency)|false|none|The fee, in U.S. dollars.|
|payout_batch_id|string|true|none|The PayPal-generated ID for the payout.|
|payout_item|[payout_item_detail](#schemapayout_item_detail)|true|none|The sender-provided information for the payout item.|
|currency_conversion|[payout_currency_conversion](#schemapayout_currency_conversion)|false|none|The currency conversion applicable for this payout item.|
|time_processed|string(date-time)|false|none|The date and time when this item was last processed, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).|
|errors|[error](#schemaerror)|false|none|The error details.|
|links|[payout_batch_items_definitions-link_description_list](#schemapayout_batch_items_definitions-link_description_list)|false|read-only|An array of request-related [HATEOAS links](/api/rest/responses/#hateoas-links).|

#### Enumerated Values

|Property|Value|
|---|---|
|transaction_status|SUCCESS|
|transaction_status|FAILED|
|transaction_status|PENDING|
|transaction_status|UNCLAIMED|
|transaction_status|RETURNED|
|transaction_status|ONHOLD|
|transaction_status|BLOCKED|
|transaction_status|REFUNDED|
|transaction_status|REVERSED|

<h2 id="tocS_payout_batch_items_definitions-link_description_list">payout_batch_items_definitions-link_description_list</h2>
<!-- backwards compatibility -->
<a id="schemapayout_batch_items_definitions-link_description_list"></a>
<a id="schema_payout_batch_items_definitions-link_description_list"></a>
<a id="tocSpayout_batch_items_definitions-link_description_list"></a>
<a id="tocspayout_batch_items_definitions-link_description_list"></a>

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

<h2 id="tocS_payout_batch_items_list">payout_batch_items_list</h2>
<!-- backwards compatibility -->
<a id="schemapayout_batch_items_list"></a>
<a id="schema_payout_batch_items_list"></a>
<a id="tocSpayout_batch_items_list"></a>
<a id="tocspayout_batch_items_list"></a>

```json
[
  {
    "payout_item_id": "string",
    "transaction_id": "string",
    "activity_id": "string",
    "transaction_status": "SUCCESS",
    "payout_item_fee": {
      "currency": "string",
      "value": "string"
    },
    "payout_batch_id": "string",
    "payout_item": {
      "recipient_type": "EMAIL",
      "amount": {
        "currency": "string",
        "value": "string"
      },
      "note": "string",
      "receiver": "string",
      "sender_item_id": "string",
      "recipient_name": {
        "prefix": "string",
        "given_name": "string",
        "surname": "string",
        "middle_name": "string",
        "suffix": "string",
        "alternate_full_name": "string",
        "full_name": "string"
      },
      "recipient_wallet": "PAYPAL",
      "purpose": "AWARDS"
    },
    "currency_conversion": {
      "from_amount": {
        "currency": "string",
        "value": "string"
      },
      "to_amount": {
        "currency": "string",
        "value": "string"
      },
      "exchange_rate": "string"
    },
    "time_processed": "1970-01-01T00:00:00Z",
    "errors": {
      "name": "string",
      "message": "string",
      "debug_id": "string",
      "information_link": "string",
      "details": [
        {
          "field": "string",
          "value": "string",
          "location": "body",
          "issue": "string",
          "description": "string"
        }
      ],
      "links": [
        {
          "href": "string",
          "rel": "string",
          "method": "GET"
        }
      ]
    },
    "links": [
      {
        "href": "string",
        "rel": "string",
        "method": "GET"
      }
    ]
  }
]
```

An array of individual items.

<h2 id="tocS_payout_currency_conversion">payout_currency_conversion</h2>
<!-- backwards compatibility -->
<a id="schemapayout_currency_conversion"></a>
<a id="schema_payout_currency_conversion"></a>
<a id="tocSpayout_currency_conversion"></a>
<a id="tocspayout_currency_conversion"></a>

```json
{
  "from_amount": {
    "currency": "string",
    "value": "string"
  },
  "to_amount": {
    "currency": "string",
    "value": "string"
  },
  "exchange_rate": "string"
}
```

The currency conversion resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|from_amount|[currency](#schemacurrency)|false|none|The amount that is converted from.|
|to_amount|[currency](#schemacurrency)|false|none|The amount that is converted to.|
|exchange_rate|string|false|none|The exchange rate that is applied for this payout.|

<h2 id="tocS_payout_header">payout_header</h2>
<!-- backwards compatibility -->
<a id="schemapayout_header"></a>
<a id="schema_payout_header"></a>
<a id="tocSpayout_header"></a>
<a id="tocspayout_header"></a>

```json
{
  "payout_batch_id": "string",
  "batch_status": "DENIED",
  "time_created": "1970-01-01T00:00:00Z",
  "sender_batch_header": {
    "sender_batch_id": "string",
    "recipient_type": "EMAIL",
    "email_subject": "string",
    "email_message": "string"
  }
}
```

The payout header that is returned in response to a payout header request. Shows details for an entire payout request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|payout_batch_id|string|true|none|The PayPal-generated ID for a payout.|
|batch_status|[batch_enum](#schemabatch_enum)|true|none|The PayPal-generated payout status. If the payout passes preliminary checks, the status is `PENDING`.|
|time_created|string(date-time)|false|none|The date and time when processing for the payout began, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).|
|sender_batch_header|[payout_sender_batch_header](#schemapayout_sender_batch_header)|true|none|The original payout header, as provided by the payment sender.|

#### Enumerated Values

|Property|Value|
|---|---|
|batch_status|DENIED|
|batch_status|PENDING|
|batch_status|PROCESSING|
|batch_status|SUCCESS|
|batch_status|CANCELED|

<h2 id="tocS_payout_item">payout_item</h2>
<!-- backwards compatibility -->
<a id="schemapayout_item"></a>
<a id="schema_payout_item"></a>
<a id="tocSpayout_item"></a>
<a id="tocspayout_item"></a>

```json
{
  "payout_item_id": "string",
  "transaction_id": "string",
  "activity_id": "string",
  "transaction_status": "SUCCESS",
  "payout_item_fee": {
    "currency": "string",
    "value": "string"
  },
  "payout_batch_id": "string",
  "sender_batch_id": "string",
  "payout_item": {
    "recipient_type": "EMAIL",
    "amount": {
      "currency": "string",
      "value": "string"
    },
    "note": "string",
    "receiver": "string",
    "sender_item_id": "string",
    "recipient_name": {
      "prefix": "string",
      "given_name": "string",
      "surname": "string",
      "middle_name": "string",
      "suffix": "string",
      "alternate_full_name": "string",
      "full_name": "string"
    },
    "recipient_wallet": "PAYPAL",
    "purpose": "AWARDS"
  },
  "currency_conversion": {
    "from_amount": {
      "currency": "string",
      "value": "string"
    },
    "to_amount": {
      "currency": "string",
      "value": "string"
    },
    "exchange_rate": "string"
  },
  "time_processed": "1970-01-01T00:00:00Z",
  "errors": {
    "name": "string",
    "message": "string",
    "debug_id": "string",
    "information_link": "string",
    "details": [
      {
        "field": "string",
        "value": "string",
        "location": "body",
        "issue": "string",
        "description": "string"
      }
    ],
    "links": [
      {
        "href": "string",
        "rel": "string",
        "method": "GET"
      }
    ]
  },
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

The payout item status and other details. A <code>payout_item_id</code> helps you identify denied payments. If a payment is denied, you can use the <code>payout_item_id</code> to identify the payment even if it lacks a <code>transaction_id</code>.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|payout_item_id|string|true|none|The ID for the payout item. Visible when you show details for a payout.|
|transaction_id|string|false|none|The PayPal-generated ID for the transaction.|
|activity_id|string|false|none|The unique PayPal-generated common ID that links the sender- and receiver-side transactions. Used for tracking.|
|transaction_status|[transaction_enum](#schematransaction_enum)|false|none|The item transaction status.<blockquote><strong>Note:</strong> For <code>POST/v1/payments/payouts-item/{payout_item_id}/cancel</code>, the only possible <code>transaction_status</code> value is <code>RETURNED</code>.</blockquote>|
|payout_item_fee|[currency](#schemacurrency)|false|none|The estimate for the payout fee. Initially, the fee is `0`. The fee is populated after the item moves to the `PENDING` state|
|payout_batch_id|string|true|none|The PayPal-generated ID for the payout batch.|
|sender_batch_id|string|false|none|A sender-specified ID. Tracks the payout in an accounting system. Should be unique within 30 days.|
|payout_item|[payout_item_detail](#schemapayout_item_detail)|true|none|The sender-provided information for the payout item.|
|currency_conversion|[payout_currency_conversion](#schemapayout_currency_conversion)|false|none|The currency conversion applicable for this payout item.|
|time_processed|string(date-time)|false|none|The date and time when this item was last processed, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).|
|errors|[error](#schemaerror)|false|none|The error details.|
|links|[payout_item_definitions-link_description_list](#schemapayout_item_definitions-link_description_list)|false|read-only|An array of request-related [HATEOAS links](/api/rest/responses/#hateoas-links).|

#### Enumerated Values

|Property|Value|
|---|---|
|transaction_status|SUCCESS|
|transaction_status|FAILED|
|transaction_status|PENDING|
|transaction_status|UNCLAIMED|
|transaction_status|RETURNED|
|transaction_status|ONHOLD|
|transaction_status|BLOCKED|
|transaction_status|REFUNDED|
|transaction_status|REVERSED|

<h2 id="tocS_payout_item_definitions-link_description_list">payout_item_definitions-link_description_list</h2>
<!-- backwards compatibility -->
<a id="schemapayout_item_definitions-link_description_list"></a>
<a id="schema_payout_item_definitions-link_description_list"></a>
<a id="tocSpayout_item_definitions-link_description_list"></a>
<a id="tocspayout_item_definitions-link_description_list"></a>

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

<h2 id="tocS_payout_item_detail">payout_item_detail</h2>
<!-- backwards compatibility -->
<a id="schemapayout_item_detail"></a>
<a id="schema_payout_item_detail"></a>
<a id="tocSpayout_item_detail"></a>
<a id="tocspayout_item_detail"></a>

```json
{
  "recipient_type": "EMAIL",
  "amount": {
    "currency": "string",
    "value": "string"
  },
  "note": "string",
  "receiver": "string",
  "sender_item_id": "string",
  "recipient_name": {
    "prefix": "string",
    "given_name": "string",
    "surname": "string",
    "middle_name": "string",
    "suffix": "string",
    "alternate_full_name": "string",
    "full_name": "string"
  },
  "recipient_wallet": "PAYPAL",
  "purpose": "AWARDS"
}
```

The details for a sender-created payout to a single recipient.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|recipient_type|[recipient_enum](#schemarecipient_enum)|false|none|The ID type that identifies the payment receiver.|
|amount|[currency](#schemacurrency)|true|none|The currency and amount of payout item. Might be an integer for currencies like `JPY` that are not typically fractional or a decimal fraction for currencies like `TND` that are subdivided into thousandths. For the required number of decimal places for a currency code, see [Currency codes - ISO 4217](https://www.iso.org/iso-4217-currency-codes.html).|
|note|string|false|none|The sender-specified note for notifications. Supports up to 4000 ASCII characters and 1000 non-ASCII characters.|
|receiver|string|true|none|The receiver of the payment. Corresponds to the `recipient_type` value in the request.|
|sender_item_id|string|false|none|A sender-specified ID number. Tracks the payout in an accounting system.|
|recipient_name|[name](#schemaname)|false|none|The name of the recipient where money is credited. For `UNCLAIMED` payments, the recipient name is populated after the payment is claimed.|
|recipient_wallet|[recipient_wallet_enum](#schemarecipient_wallet_enum)|false|none|The recipient wallet.|
|purpose|[purpose_enum](#schemapurpose_enum)|false|none|The purpose of the transaction.|

#### Enumerated Values

|Property|Value|
|---|---|
|recipient_type|EMAIL|
|recipient_type|PHONE|
|recipient_type|PAYPAL_ID|
|recipient_wallet|PAYPAL|
|recipient_wallet|VENMO|
|purpose|AWARDS|
|purpose|PRIZES|
|purpose|DONATIONS|
|purpose|GOODS|
|purpose|SERVICES|
|purpose|REBATES|
|purpose|CASHBACK|
|purpose|DISCOUNTS|
|purpose|NON_GOODS_OR_SERVICES|

<h2 id="tocS_payout_item_request">payout_item_request</h2>
<!-- backwards compatibility -->
<a id="schemapayout_item_request"></a>
<a id="schema_payout_item_request"></a>
<a id="tocSpayout_item_request"></a>
<a id="tocspayout_item_request"></a>

```json
{
  "recipient_type": "string",
  "amount": {
    "currency": "string",
    "value": "string"
  },
  "note": "string",
  "receiver": "string",
  "sender_item_id": "string",
  "recipient_wallet": "PAYPAL",
  "alternate_notification_method": {
    "phone": {
      "country_code": "str",
      "national_number": "string",
      "extension_number": "string"
    }
  },
  "notification_language": "string",
  "application_context": {
    "social_feed_privacy": "PRIVATE",
    "holler_url": "http://example.com",
    "logo_url": "http://example.com"
  },
  "purpose": "AWARDS"
}
```

The sender-created payout to a recipient.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|recipient_type|string|false|none|The recipient type. Value is:<ul><li><p><code>EMAIL</code>. The unencrypted email. Value is a string of up to 127 single-byte characters.</p></li><li><p><code>PHONE</code>. The unencrypted phone number.</p><blockquote><strong>Note:</strong> The PayPal sandbox does not support the <code>PHONE</code> recipient type.</blockquote></li><li><p><code>PAYPAL_ID</code>. The encrypted PayPal account number.</p></li><li><p><code>USER_HANDLE</code>. User handle (or) Username associated with Venmo account.</p></li></ul><br/>If the <code>sender_batch_header</code> includes the <code>recipient_type</code> attribute, payout items use the <code>recipient_type</code> of the <code>sender_batch_header</code>, unless a payout item has its own <code>recipient_type</code> attribute. If the <code>sender_batch_header</code> omits the <code>recipient_type</code> attribute, each payout item must include its own <code>recipient_type</code> value.|
|amount|[currency](#schemacurrency)|true|none|The currency and amount to pay the receiver.|
|note|string|false|none|The sender-specified note for notifications. Supports up to 4000 ASCII characters and 1000 non-ASCII characters.|
|receiver|string|true|none|The receiver of the payment. Corresponds to the `recipient_type` value in the request. Max value of up to 127 single-byte characters.|
|sender_item_id|string|false|none|The sender-specified ID number. Tracks the payout in an accounting system.|
|recipient_wallet|string|false|none|The recipient wallet.|
|alternate_notification_method|[alternate_notification_method](#schemaalternate_notification_method)|false|none|Captures additional notification modes to reach out to the receiver regarding this payment.|
|notification_language|[language](#schemalanguage)|false|none|The language in which to show the payout recipient's email message. Used only when the recipient does not have a PayPal account. If you omit the language or provide invalid language and the recipient does not have a PayPal account, the email message is sent in the language of the merchant's PayPal account.|
|application_context|[application_context](#schemaapplication_context)|false|none|Metadata for accepting additional information from merchants to Venmo.|
|purpose|[purpose_enum](#schemapurpose_enum)|false|none|The purpose of the transaction.|

#### Enumerated Values

|Property|Value|
|---|---|
|purpose|AWARDS|
|purpose|PRIZES|
|purpose|DONATIONS|
|purpose|GOODS|
|purpose|SERVICES|
|purpose|REBATES|
|purpose|CASHBACK|
|purpose|DISCOUNTS|
|purpose|NON_GOODS_OR_SERVICES|

<h2 id="tocS_payout_item_request_list">payout_item_request_list</h2>
<!-- backwards compatibility -->
<a id="schemapayout_item_request_list"></a>
<a id="schema_payout_item_request_list"></a>
<a id="tocSpayout_item_request_list"></a>
<a id="tocspayout_item_request_list"></a>

```json
[
  {
    "recipient_type": "string",
    "amount": {
      "currency": "string",
      "value": "string"
    },
    "note": "string",
    "receiver": "string",
    "sender_item_id": "string",
    "recipient_wallet": "PAYPAL",
    "alternate_notification_method": {
      "phone": {
        "country_code": "str",
        "national_number": "string",
        "extension_number": "string"
      }
    },
    "notification_language": "string",
    "application_context": {
      "social_feed_privacy": "PRIVATE",
      "holler_url": "http://example.com",
      "logo_url": "http://example.com"
    },
    "purpose": "AWARDS"
  }
]
```

An array of individual payout items.

<h2 id="tocS_payout_sender_batch_header">payout_sender_batch_header</h2>
<!-- backwards compatibility -->
<a id="schemapayout_sender_batch_header"></a>
<a id="schema_payout_sender_batch_header"></a>
<a id="tocSpayout_sender_batch_header"></a>
<a id="tocspayout_sender_batch_header"></a>

```json
{
  "sender_batch_id": "string",
  "recipient_type": "EMAIL",
  "email_subject": "string",
  "email_message": "string"
}
```

The sender-provided header for a payout request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sender_batch_id|string|false|none|The sender-specified ID number. Tracks the payout in an accounting system.<blockquote><strong>Note:</strong> <p>PayPal does not process duplicate payouts. If you specify a <code>sender_batch_id</code> that was used in the last 30 days, the API rejects the request with an error message that shows the duplicate <code>sender_batch_id</code> and includes a HATEOAS link to the original payout with the same <code>sender_batch_id</code>.</p><p>If you receive an HTTP <code>5<i>nn</i></code> status code, you can safely retry the request with the same <code>sender_batch_id</code>. The API completes a payment only once for a <code>sender_batch_id</code> that is used within 30 days.</p></blockquote>|
|recipient_type|[recipient_enum](#schemarecipient_enum)|false|none|The ID type that identifies the payment receiver.|
|email_subject|string|false|none|The subject line for the email that PayPal sends when payment for a payout item completes. The subject line is the same for all recipients. Value is an alphanumeric string with a maximum length of 255 single-byte characters.|
|email_message|string|false|none|The email message that PayPal sends when the payout item completes. The message is the same for all recipients.|

#### Enumerated Values

|Property|Value|
|---|---|
|recipient_type|EMAIL|
|recipient_type|PHONE|
|recipient_type|PAYPAL_ID|

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

The phone number in its canonical international [E.164 numbering plan format](https://www.itu.int/rec/T-REC-E.164/en).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|country_code|string|true|none|The country calling code (CC), in its canonical international [E.164 numbering plan format](https://www.itu.int/rec/T-REC-E.164/en). The combined length of the CC and the national number must not be greater than 15 digits. The national number consists of a national destination code (NDC) and subscriber number (SN).|
|national_number|string|true|none|The national number, in its canonical international [E.164 numbering plan format](https://www.itu.int/rec/T-REC-E.164/en). The combined length of the country calling code (CC) and the national number must not be greater than 15 digits. The national number consists of a national destination code (NDC) and subscriber number (SN).|
|extension_number|string|false|none|The extension number.|

<h2 id="tocS_purpose_enum">purpose_enum</h2>
<!-- backwards compatibility -->
<a id="schemapurpose_enum"></a>
<a id="schema_purpose_enum"></a>
<a id="tocSpurpose_enum"></a>
<a id="tocspurpose_enum"></a>

```json
"AWARDS"
```

The purpose of the transaction.

<h2 id="tocS_recipient_enum">recipient_enum</h2>
<!-- backwards compatibility -->
<a id="schemarecipient_enum"></a>
<a id="schema_recipient_enum"></a>
<a id="tocSrecipient_enum"></a>
<a id="tocsrecipient_enum"></a>

```json
"EMAIL"
```

The ID type that identifies the payment receiver.

<h2 id="tocS_recipient_wallet_enum">recipient_wallet_enum</h2>
<!-- backwards compatibility -->
<a id="schemarecipient_wallet_enum"></a>
<a id="schema_recipient_wallet_enum"></a>
<a id="tocSrecipient_wallet_enum"></a>
<a id="tocsrecipient_wallet_enum"></a>

```json
"PAYPAL"
```

The wallet where the recipient receives the payout. Payouts to Venmo recipients require a 'note' string and a US mobile phone number.

<h2 id="tocS_sender_batch_header">sender_batch_header</h2>
<!-- backwards compatibility -->
<a id="schemasender_batch_header"></a>
<a id="schema_sender_batch_header"></a>
<a id="tocSsender_batch_header"></a>
<a id="tocssender_batch_header"></a>

```json
{
  "sender_batch_id": "string",
  "recipient_type": "string",
  "email_subject": "string",
  "email_message": "string",
  "note": "string"
}
```

The sender-provided payout header for a payout request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sender_batch_id|string|false|none|A sender-specified ID number. Tracks the payout in an accounting system.<blockquote><strong>Note:</strong> <p>PayPal does not process duplicate payouts. If you specify a <code>sender_batch_id</code> that was used in the last 30 days, the API rejects the request with an error message that shows the duplicate <code>sender_batch_id</code> and includes a HATEOAS link to the original payout with the same <code>sender_batch_id</code>.</p><p>If you receive an HTTP <code>5<i>nn</i></code> status code, you can safely retry the request with the same <code>sender_batch_id</code>. The API completes a payment only once for a <code>sender_batch_id</code> that is used within 30 days.</p></blockquote>|
|recipient_type|string|false|none|The ID type that identifies the recipient of the payment. For example, <code>EMAIL</code>.|
|email_subject|string|false|none|The subject line for the email that PayPal sends when payment for a payout item completes. The subject line is the same for all recipients. Value is an alphanumeric string of up to 255 single-byte characters.|
|email_message|string|false|none|The email message that PayPal sends when the payout item completes. The message is the same for all recipients.|
|note|string|false|none|The payouts and item-level notes are concatenated in the email. The maximum combined length of the notes is 1000 characters.|

<h2 id="tocS_transaction_enum">transaction_enum</h2>
<!-- backwards compatibility -->
<a id="schematransaction_enum"></a>
<a id="schema_transaction_enum"></a>
<a id="tocStransaction_enum"></a>
<a id="tocstransaction_enum"></a>

```json
"SUCCESS"
```

The item transaction status.<blockquote><strong>Note:</strong> For <code>POST/v1/payments/payouts-item/{payout_item_id}/cancel</code>, the only possible <code>transaction_status</code> value is <code>RETURNED</code>.</blockquote>
