<h1 id="disputes">Disputes v1.11</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Occasionally, something goes wrong with a customer's order. To dispute a charge, a customer can create a dispute with PayPal. PayPal merchants, partners, and external developers can use the PayPal Disputes API to manage customer disputes.<blockquote><strong>Note:</strong> In the live environment, merchants cannot create disputes but can only respond to customer-created disputes. However, merchants can create disputes in the sandbox environment. When you create an app, enable Disputes in the App feature options section.</blockquote>A customer can also ask his or her bank or credit card company to dispute and reverse a charge, which is known as a <i>chargeback</i>. For more information, see <a href="https://www.paypal.com/us/brc/article/customer-disputes-claims-chargebacks-bank-reversals">Disputes, claims, chargebacks, and bank reversals</a>.<br/><br/>When a customer disputes a charge, you can use this API to provide evidence that the charge is legitimate. To provide evidence or appeal a dispute, you submit a proof of delivery or proof of refund document or notes, which can include logs.<br/><br/>Normally, an agent at PayPal creates a dispute, updates the dispute status, and settles disputes, but now you can run test cases in the sandbox that complete these operations.<br/><br/><blockquote><strong>Important:</strong> The create, cancel, compute metrics, change reason, and validate eligibility methods are available as a limited-release solution at this time. For more information, reach out to your PayPal account manager.</blockquote><br/>For details, see <a href="/docs/integration/direct/customer-disputes/">Disputes Overview</a> documentation.

Base URLs:

* <a href="https://api-m.sandbox.paypal.com">https://api-m.sandbox.paypal.com</a> - PayPal Sandbox Environment

* <a href="https://api-m.paypal.com">https://api-m.paypal.com</a> - PayPal Live Environment

<a href="https://developer.paypal.com/docs/api/customer-disputes/v1/">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 authentication

    - Flow: clientCredentials
    - Token URL = [/v1/oauth2/token](/v1/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://uri.paypal.com/services/disputes/read-seller|This privilege allows client to read and search a disputes of a merchant but gets only a limited and allowed set of fields back .|
|https://uri.paypal.com/services/disputes/read-buyer|This privilege allows client to read and search disputes but returns a limited and allowed set of fields back.|
|https://uri.paypal.com/services/disputes/read-ebay|This privilege allows client to read and search a disputes of an user but gets only a limited and allowed set of fields back to ebay.|
|https://uri.paypal.com/services/disputes/read|This privilege allows client to read and search a dispute of an user with all fields.|
|https://uri.paypal.com/services/disputes/webhooks|This privilege allows webhook platform to read a dispute event|
|https://uri.paypal.com/services/disputes/create|This privilege allows client to validate eligibility and create a dispute on his transaction(s).|
|https://uri.paypal.com/services/disputes/update-seller|This privilege allows client to update a dispute (Merchant actions).|
|https://uri.paypal.com/services/disputes/update-buyer|This privilege allows client to update a dispute (customer actions).|
|https://uri.paypal.com/services/referred-disputes/readwrite|This privilege allows client to read and update a referred dispute.|
|https://uri.paypal.com/services/disputes/read-partner|This privilege allows client to read and search disputes but returns a limited and allowed set of fields back.|
|https://uri.paypal.com/services/disputes/update-partner|This privilege allows client to update a dispute (Partner actions).|

<h1 id="disputes-disputes">disputes</h1>

Use the `/disputes` resource to list disputes, create disputes, show dispute details, and partially a dispute. Normally, an agent at PayPal creates disputes but now you can run test cases in the sandbox that create disputes.

## List disputes

<a id="opIddisputes.list"></a>

> Code samples

```bash
curl https://api-m.paypal.com/v1/customer/disputes \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/customer/disputes`

Lists disputes with a summary set of details, which shows the <code>dispute_id</code>, <code>reason</code>, <code>status</code>, <code>dispute_state</code>, <code>dispute_life_cycle_stage</code>, <code>dispute_channel</code>, <code>dispute_amount</code>, <code>create_time</code> and <code>update_time</code> fields.<br/><br/>To filter the disputes in the response, specify one or more optional query parameters. To limit the number of disputes in the response, specify the <code>page_size</code> query parameter.<br/><br/>To list multiple disputes, set these query parameters in the request:<ul><li><code>page_size=2</code></li><li><code>start_time</code> instead of <code>disputed_transaction_id</code></li></ul><br/>If the response contains more than two disputes, it lists two disputes and includes a HATEOAS link to the next page of results.

<h3 id="list-disputes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start_time|query|string|false|**Deprecated.** Filters the disputes in the response by a creation date and time. The start time must be within the last 180 days. Value is in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). For example, *`yyyy`*-*`MM`*-*`dd`*`T`*`HH`*:*`mm`*:*`ss`*.*`SSS`*`Z`.<br/><br/>You can specify either but not both the `start_time` and `disputed_transaction_id` query parameters.|
|disputed_transaction_id|query|string|false|Filters the disputes in the response by a transaction, by ID.<br/><br/>You can specify either but not both the `start_time` and `disputed_transaction_id` query parameter.|
|page_size|query|integer|false|Limits the number of disputes in the response to this value.|
|next_page_token|query|string|false|**Deprecated.** The token that describes the next page of results to fetch. The <a href="/docs/api/customer-disputes/v1/#disputes_list">list disputes</a> call returns this token in the HATEOAS links in the response.|
|dispute_state|query|string|false|Filters the disputes in the response by a state. Separate multiple values with a comma (`,`). When you specify more than one dispute_state, the response lists disputes that belong to any of the specified dispute_state.|
|update_time_before|query|string|false|The date and time when the dispute was last updated, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). For example, *`yyyy`*-*`MM`*-*`dd`*`T`*`HH`*:*`mm`*:*`ss`*.*`SSS`*`Z`. update_time_before must be within the last 180 days and the default is the current time.|
|update_time_after|query|string|false|The date and time when the dispute was last updated, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). For example, *`yyyy`*-*`MM`*-*`dd`*`T`*`HH`*:*`mm`*:*`ss`*.*`SSS`*`Z`. update_time_after must be within the last 180 days and the default is the maximum time (180 days) supported.|

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "dispute_id": "string",
      "create_time": "stringstringstringst",
      "update_time": "stringstringstringst",
      "reason": "MERCHANDISE_OR_SERVICE_NOT_RECEIVED",
      "status": "OPEN",
      "dispute_state": "OPEN_INQUIRIES",
      "dispute_amount": {
        "currency_code": "str",
        "value": "string"
      },
      "dispute_asset": {
        "asset_symbol": "BTC",
        "quantity": "string",
        "quantity_in_subunits": "string",
        "decimals": 0
      },
      "dispute_life_cycle_stage": "INQUIRY",
      "dispute_channel": "INTERNAL",
      "buyer_response_due_date": "stringstringstringst",
      "seller_response_due_date": "stringstringstringst",
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

<h3 id="list-disputes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful request returns the HTTP <code>200 OK</code> status code and a JSON response body that lists disputes with a full or summary set of details. Default is a summary set of details, which shows the <code>dispute_id</code>, <code>reason</code>, <code>status</code>, <code>dispute_amount</code>, <code>create_time</code>, and <code>update_time</code> fields for each dispute.|[dispute_search](#schemadispute_search)|
|400|Bad Request|The request failed due to a validation error. The request returns the HTTP `400 Bad Request` status code.|[error](#schemaerror)|
|default|Default|The error response.|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://uri.paypal.com/services/disputes/read-buyer ), Oauth2 ( Scopes: https://uri.paypal.com/services/disputes/read-seller ), Oauth2 ( Scopes: https://uri.paypal.com/services/disputes/read-ebay ), Oauth2 ( Scopes: https://uri.paypal.com/services/disputes/read ), Oauth2 ( Scopes: https://uri.paypal.com/services/disputes/read-partner )
</aside>

## Show dispute details

<a id="opIddisputes.get"></a>

> Code samples

```bash
curl https://api-m.paypal.com/v1/customer/disputes/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/customer/disputes/{id}`

Shows details for a dispute, by ID.<blockquote><strong>Note:</strong> The fields that appear in the response depend on the access. For example, if the merchant requests shows dispute details, the customer's email ID does not appear.</blockquote>

<h3 id="show-dispute-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the dispute for which to provide the supporting information.|

> Example responses

> 200 Response

```json
{
  "dispute_id": "string",
  "create_time": "stringstringstringst",
  "update_time": "stringstringstringst",
  "disputed_transactions": [
    {
      "buyer_transaction_id": "string",
      "seller_transaction_id": "string",
      "reference_id": "string",
      "create_time": "stringstringstringst",
      "transaction_status": "COMPLETED",
      "gross_amount": {
        "currency_code": "str",
        "value": "string"
      },
      "gross_asset": {
        "asset_symbol": "BTC",
        "quantity": "string",
        "quantity_in_subunits": "string",
        "decimals": 0
      },
      "invoice_number": "string",
      "custom": "string",
      "buyer": {
        "name": "string"
      },
      "seller": {
        "email": "string",
        "merchant_id": "string",
        "name": "string"
      },
      "items": [
        {
          "item_id": "string",
          "item_name": "string",
          "item_description": "string",
          "item_quantity": "string",
          "partner_transaction_id": "string",
          "reason": "MERCHANDISE_OR_SERVICE_NOT_RECEIVED",
          "dispute_amount": {
            "currency_code": "str",
            "value": "string"
          },
          "notes": "string",
          "item_type": "PRODUCT",
          "product_details": null,
          "service_details": null,
          "booking_details": null,
          "digital_download_details": null,
          "cancellation_details": null,
          "agreed_refund_details": null
        }
      ],
      "payment_processor": null
    }
  ],
  "reason": "MERCHANDISE_OR_SERVICE_NOT_RECEIVED",
  "status": "OPEN",
  "dispute_amount": {
    "currency_code": "str",
    "value": "string"
  },
  "dispute_asset": {
    "asset_symbol": "BTC",
    "quantity": "string",
    "quantity_in_subunits": "string",
    "decimals": 0
  },
  "fee_policy": {},
  "external_reason_code": "string",
  "dispute_outcome": {
    "outcome_code": "RESOLVED_BUYER_FAVOUR",
    "outcome_reason": "AMOUNT_DIFFERENCE_EXPECTED_DUE_TO_FEES",
    "amount_refunded": {
      "currency_code": "str",
      "value": "string"
    },
    "asset_refunded": {
      "asset_symbol": "BTC",
      "quantity": "string",
      "quantity_in_subunits": "string",
      "decimals": 0
    }
  },
  "adjudications": [
    {
      "type": "DENY_BUYER",
      "adjudication_time": "stringstringstringst",
      "reason": "AMOUNT_DIFFERENCE_EXPECTED_DUE_TO_FEES",
      "dispute_life_cycle_stage": "INQUIRY"
    }
  ],
  "money_movements": [
    {
      "affected_party": "SELLER",
      "amount": {
        "currency_code": "str",
        "value": "string"
      },
      "asset": {
        "asset_symbol": "BTC",
        "quantity": "string",
        "quantity_in_subunits": "string",
        "decimals": 0
      },
      "initiated_time": "stringstringstringst",
      "type": "DEBIT",
      "reason": "DISPUTE_SETTLEMENT_FEE"
    }
  ],
  "fund_movements": [
    {
      "party": "SELLER",
      "amount": {
        "currency_code": "str",
        "value": "string"
      },
      "asset": {
        "asset_symbol": "BTC",
        "quantity": "string",
        "quantity_in_subunits": "string",
        "decimals": 0
      },
      "initiated_time": "stringstringstringst",
      "type": "DEBIT",
      "reason": "REVERSED_TRANSACTION_FEE"
    }
  ],
  "dispute_life_cycle_stage": "INQUIRY",
  "dispute_channel": "INTERNAL",
  "messages": [
    {
      "posted_by": "BUYER",
      "time_posted": "stringstringstringst",
      "content": "string",
      "documents": [
        {
          "name": "string",
          "url": "http://example.com"
        }
      ]
    }
  ],
  "extensions": {
    "merchant_contacted": true,
    "merchant_contacted_outcome": "NO_RESPONSE",
    "merchant_contacted_time": "stringstringstringst",
    "merchant_contacted_mode": "WEBSITE",
    "buyer_contacted_time": "stringstringstringst",
    "buyer_contacted_channel": "string",
    "billing_dispute_properties": {
      "duplicate_transaction": {
        "received_duplicate": true,
        "original_transaction": {
          "buyer_transaction_id": "string",
          "seller_transaction_id": "string",
          "reference_id": "string",
          "create_time": "stringstringstringst",
          "transaction_status": "COMPLETED",
          "gross_amount": {
            "currency_code": "str",
            "value": "string"
          },
          "gross_asset": {
            "asset_symbol": "BTC",
            "quantity": "string",
            "quantity_in_subunits": "string",
            "decimals": 0
          },
          "invoice_number": "string",
          "custom": "string",
          "buyer": {
            "name": "string"
          },
          "seller": {
            "email": "string",
            "merchant_id": "string",
            "name": "string"
          },
          "items": [
            {
              "item_id": "string",
              "item_name": "string",
              "item_description": "string",
              "item_quantity": "string",
              "partner_transaction_id": "string",
              "reason": "MERCHANDISE_OR_SERVICE_NOT_RECEIVED",
              "dispute_amount": {
                "currency_code": "str",
                "value": "string"
              },
              "notes": "string",
              "item_type": "PRODUCT",
              "product_details": null,
              "service_details": null,
              "booking_details": null,
              "digital_download_details": null,
              "cancellation_details": null,
              "agreed_refund_details": null
            }
          ],
          "payment_processor": null
        }
      },
      "incorrect_transaction_amount": {
        "correct_transaction_amount": {
          "currency_code": "str",
          "value": "string"
        },
        "correct_transaction_asset": {
          "asset_symbol": "BTC",
          "quantity": "string",
          "quantity_in_subunits": "string",
          "decimals": 0
        },
        "correct_transaction_time": "stringstringstringst"
      },
      "payment_by_other_means": {
        "charge_different_from_original": true,
        "received_duplicate": true,
        "payment_method": "CASH",
        "payment_instrument_suffix": "stri"
      },
      "credit_not_processed": {
        "issue_type": "PRODUCT",
        "expected_refund": {
          "currency_code": "str",
          "value": "string"
        },
        "cancellation_details": {
          "cancellation_date": "stringstringstringst",
          "cancellation_number": "string",
          "cancelled": true,
          "cancellation_mode": "CANCELLED_PAYPAL_BILLING_AGREEMENT"
        },
        "product_details": {
          "description": "string",
          "product_received": "YES",
          "product_received_time": "stringstringstringst",
          "expected_delivery_date": "stringstringstringst",
          "sub_reasons": [
            "DAMAGED"
          ],
          "purchase_url": "http://example.com",
          "return_details": {
            "return_time": "stringstringstringst",
            "mode": "SHIPPED",
            "receipt": true,
            "return_confirmation_number": "string",
            "returned": true
          }
        },
        "service_details": {
          "description": "string",
          "service_started": "YES",
          "note": "string",
          "sub_reasons": [
            "DAMAGED"
          ],
          "purchase_url": "http://example.com"
        },
        "agreed_refund_details": {
          "merchant_agreed_refund": true,
          "merchant_agreed_refund_time": "stringstringstringst"
        }
      },
      "canceled_recurring_billing": {
        "expected_refund": {
          "currency_code": "str",
          "value": "string"
        },
        "cancellation_details": {
          "cancellation_date": "stringstringstringst",
          "cancellation_number": "string",
          "cancelled": true,
          "cancellation_mode": "CANCELLED_PAYPAL_BILLING_AGREEMENT"
        }
      }
    },
    "merchandize_dispute_properties": {
      "issue_type": "PRODUCT",
      "product_details": {
        "description": "string",
        "product_received": "YES",
        "product_received_time": "stringstringstringst",
        "expected_delivery_date": "stringstringstringst",
        "sub_reasons": [
          "DAMAGED"
        ],
        "purchase_url": "http://example.com",
        "return_details": {
          "return_time": "stringstringstringst",
          "mode": "SHIPPED",
          "receipt": true,
          "return_confirmation_number": "string",
          "returned": true
        }
      },
      "service_details": {
        "description": "string",
        "service_started": "YES",
        "note": "string",
        "sub_reasons": [
          "DAMAGED"
        ],
        "purchase_url": "http://example.com"
      },
      "cancellation_details": {
        "cancellation_date": "stringstringstringst",
        "cancellation_number": "string",
        "cancelled": true,
        "cancellation_mode": "CANCELLED_PAYPAL_BILLING_AGREEMENT"
      },
      "return_shipping_address": {
        "address_line_1": "string",
        "address_line_2": "string",
        "address_line_3": "string",
        "admin_area_4": "string",
        "admin_area_3": "string",
        "admin_area_2": "string",
        "admin_area_1": "string",
        "postal_code": "string",
        "country_code": "st",
        "address_details": {
          "street_number": "string",
          "street_name": "string",
          "street_type": "string",
          "delivery_service": "string",
          "building_name": "string",
          "sub_building": "string"
        }
      }
    },
    "reported_source": "EMAIL"
  },
  "evidences": [
    {
      "evidence_type": "PROOF_OF_FULFILLMENT",
      "evidence_info": {
        "tracking_info": [
          {
            "carrier_name": "UPS",
            "carrier_name_other": "string",
            "tracking_url": "http://example.com",
            "tracking_number": "string"
          }
        ],
        "refund_ids": [
          "string"
        ]
      },
      "documents": [
        {
          "name": "string",
          "url": "http://example.com"
        }
      ],
      "notes": "string",
      "source": "REQUESTED_FROM_BUYER",
      "date": "stringstringstringst",
      "item_id": "string",
      "item_type": "PRODUCT",
      "action_info": {
        "action": "ACKNOWLEDGE_RETURN_ITEM",
        "response_option": "string",
        "mandatory": true
      },
      "dispute_life_cycle_stage": "INQUIRY"
    }
  ],
  "buyer_response_due_date": "stringstringstringst",
  "seller_response_due_date": "stringstringstringst",
  "offer": {
    "buyer_requested_amount": {
      "currency_code": "str",
      "value": "string"
    },
    "seller_offered_amount": {
      "currency_code": "str",
      "value": "string"
    },
    "offer_type": "REFUND",
    "history": [
      {
        "offer_time": "stringstringstringst",
        "actor": "BUYER",
        "event_type": "PROPOSED",
        "offer_type": "REFUND",
        "offer_amount": {
          "currency_code": "str",
          "value": "string"
        },
        "notes": "string",
        "dispute_life_cycle_stage": "INQUIRY"
      }
    ]
  },
  "refund_details": {
    "allowed_refund_amount": {
      "currency_code": "str",
      "value": "string"
    }
  },
  "communication_details": {
    "email": "string",
    "note": "string",
    "time_posted": "stringstringstringst"
  },
  "supporting_info": [
    {
      "notes": "string",
      "documents": [
        {
          "name": "string",
          "url": "http://example.com"
        }
      ],
      "source": "SUBMITTED_BY_BUYER",
      "provided_time": "stringstringstringst",
      "dispute_life_cycle_stage": "INQUIRY"
    }
  ],
  "allowed_response_options": {
    "acknowledge_return_item": {
      "acknowledgement_types": [
        "ITEM_RECEIVED"
      ]
    },
    "accept_claim": {
      "accept_claim_types": [
        "REFUND"
      ]
    },
    "make_offer": {
      "offer_types": [
        "REFUND"
      ]
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

<h3 id="show-dispute-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful request returns the HTTP `200 OK` status code and a JSON response body that shows dispute details.|[dispute](#schemadispute)|
|500|Internal Server Error|An internal server error occurred. The request returns the HTTP `500 Internal Server Error` status code.|[error](#schemaerror)|
|default|Default|The error response.|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://uri.paypal.com/services/disputes/read-buyer ), Oauth2 ( Scopes: https://uri.paypal.com/services/disputes/read-seller ), Oauth2 ( Scopes: https://uri.paypal.com/services/disputes/read-ebay ), Oauth2 ( Scopes: https://uri.paypal.com/services/disputes/read ), Oauth2 ( Scopes: https://uri.paypal.com/services/disputes/read-partner )
</aside>

## Partially update dispute

<a id="opIddisputes.patch"></a>

> Code samples

```bash
curl https://api-m.paypal.com/v1/customer/disputes/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '[
    {
      "op": "add",
      "path": "string",
      "value": null,
      "from": "string"
    }
  ]'
```

`PATCH /v1/customer/disputes/{id}`

Partially updates a dispute, by ID. Seller can update the `communication_detail` value or The partner can add the `partner action` information.

> Body parameter

```json
[
  {
    "op": "add",
    "path": "string",
    "value": null,
    "from": "string"
  }
]
```

<h3 id="partially-update-dispute-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the dispute for which to provide the supporting information.|
|body|body|[patch_request](#schemapatch_request)|false|none|

> Example responses

> 202 Response

```json
{
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

> 422 Response

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

<h3 id="partially-update-dispute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|A successfully accepted request returns the HTTP `202 Accepted` status code and a JSON response body that includes a [HATEOAS link](/docs/api/reference/api-responses/#hateoas-links) to the ID of the request. The Clients can choose webhook option as well to receive dispute update notification.|[subsequent_action](#schemasubsequent_action)|
|204|No Content|A successful request returns the HTTP `204 No Content` status code with no JSON response body.|None|
|400|Bad Request|The request failed due to a validation error. The request returns the HTTP `400 Bad Request` status code.|[error](#schemaerror)|
|422|Unprocessable Entity|The requested action could not be completed. The request returns the HTTP `422 Unprocessable Entity` status code.|[error](#schemaerror)|
|500|Internal Server Error|An internal server error occurred. The request returns the HTTP `500 Internal Server Error` status code.|[error](#schemaerror)|
|default|Default|The error response.|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://uri.paypal.com/services/disputes/update-seller )
</aside>

<h1 id="disputes-disputes-actions">disputes-actions</h1>

Use the `/disputes` resource with a dispute ID and an action to:<ul><li>Accept a claim.</li><li>Accept an offer to resolve a dispute.</li><li>Acknowledge the return of an item related to a dispute.</li><li>Settle a dispute.</li><li>Appeal a dispute.</li><li>Cancel a dispute.</li><li>Change the reason for a dispute.</li><li>Deny an offer to resolve dispute.</li><li>Escalate a dispute to a claim.</li><li>Make an offer to resolve a dispute.</li><li>Make an offer to resolve a dispute.</li><li>Provide evidence for a dispute.</li><li>Provide supporting information for dispute.</li><li>In the sandbox, update the dispute status.</li><li>Send a message about a dispute to the other party in the dispute.</li><ul>

## Provide evidence

<a id="opIddisputes.provide-evidence"></a>

> Code samples

```bash
curl https://api-m.paypal.com/v1/customer/disputes/string/provide-evidence \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'evidence-file=@/path/to/file'
```

`POST /v1/customer/disputes/{id}/provide-evidence`

Provides evidence for a dispute, by ID. A merchant can provide evidence for disputes with the <code>WAITING_FOR_SELLER_RESPONSE</code> status while customers can provide evidence for disputes with the <code>WAITING_FOR_BUYER_RESPONSE</code> status. Evidence can be a proof of delivery or proof of refund document or notes, which can include logs. A proof of delivery document includes a tracking number while a proof of refund document includes a refund ID. For other evidence type, notes and documents can be given. Evidences requested from you can be found by checking the type of evidence for the corresponding source under the evidence section of the <a href="/docs/api/customer-disputes/v1/#disputes_get">show dispute details</a> response. The source will be <code>REQUESTED_FROM_SELLER</code> for evidences requested from the merchant while it will be <code>REQUESTED_FROM_BUYER</code> for evidences requested from the customer. For constraints and rules regarding documents, see <a href="/docs/integration/direct/customer-disputes/integration-guide/#documents">documents</a>.<br/>To make this request, specify the evidence in the JSON request body and use the <code>provide-evidence</code> link in the <a href="/docs/api/reference/api-responses/#hateoas-links/">HATEOAS links</a> of the <a href="/docs/api/customer-disputes/v1/#disputes_get">show dispute details</a> response. In case the link is not present in the response, you can't provide evidence for the dispute. For information about dispute reasons, see <a href="/docs/integration/direct/customer-disputes/integration-guide/#dispute-reasons">dispute reasons</a>.

> Body parameter

```yaml
evidence-file: string
```

<h3 id="provide-evidence-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the dispute for which to provide the supporting information.|
|body|body|object|false|none|
|» evidence-file|body|string(binary)|false|A file with evidence.|

> Example responses

> 200 Response

```json
{
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

<h3 id="provide-evidence-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful request returns the HTTP `200 OK` status code and a JSON response body that includes a link to the dispute.|[subsequent_action](#schemasubsequent_action)|
|400|Bad Request|The request failed due to a validation error. The request returns the HTTP `400 Bad Request` status code.|[error](#schemaerror)|
|default|Default|The error response.|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://uri.paypal.com/services/disputes/update-seller ), Oauth2 ( Scopes: https://uri.paypal.com/services/disputes/update-buyer ), Oauth2 ( Scopes: https://uri.paypal.com/services/disputes/update-partner )
</aside>

## Appeal dispute

<a id="opIddisputes.appeal"></a>

> Code samples

```bash
curl https://api-m.paypal.com/v1/customer/disputes/string/appeal \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'evidence-file=@/path/to/file'
```

`POST /v1/customer/disputes/{id}/appeal`

Appeals a dispute, by ID. To appeal a dispute, use the <code>appeal</code> link in the <a href="/docs/api/reference/api-responses/#hateoas-links/">HATEOAS links</a> from the show dispute details response. If this link does not appear, you cannot appeal the dispute. Submit new evidence as a document or notes in the JSON request body. For constraints and rules regarding documents, see <a href="/docs/integration/direct/customer-disputes/integration-guide/#documents">documents</a>.<br/>To make this request, specify the dispute ID in the URI and specify the evidence in the JSON request body. For information about dispute reasons, see <a href="/docs/integration/direct/customer-disputes/integration-guide/#dispute-reasons">dispute reasons</a>.

> Body parameter

```yaml
evidence-file: string
```

<h3 id="appeal-dispute-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the dispute for which to provide the supporting information.|
|body|body|object|false|none|
|» evidence-file|body|string(binary)|false|A file with evidence.|

> Example responses

> 200 Response

```json
{
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

<h3 id="appeal-dispute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful request returns the HTTP `200 OK` status code and a JSON response body that includes a link to the dispute.|[subsequent_action](#schemasubsequent_action)|
|400|Bad Request|The request failed due to a validation error. The request returns the HTTP `400 Bad Request` status code.|[error](#schemaerror)|
|default|Default|The error response.|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://uri.paypal.com/services/disputes/update-seller ), Oauth2 ( Scopes: https://uri.paypal.com/services/disputes/update-buyer )
</aside>

## Accept claim

<a id="opIddisputes.accept-claim"></a>

> Code samples

```bash
curl https://api-m.paypal.com/v1/customer/disputes/string/accept-claim \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'accept-claim-document=@/path/to/file'
```

`POST /v1/customer/disputes/{id}/accept-claim`

Accepts liability for a claim, by ID. When you accept liability for a claim, the dispute closes in the customer’s favor and PayPal automatically refunds money to the customer from the merchant's account. Allowed accept_claim_type values for the request is available in dispute details <a href="/docs/api/customer-disputes/v1/#definition-allowed_response_options">allowed response options</a> object.

> Body parameter

```yaml
accept-claim-document: string
```

<h3 id="accept-claim-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the dispute for which to provide the supporting information.|
|body|body|object|false|none|
|» accept-claim-document|body|string(binary)|false|A file with evidence.|

> Example responses

> 200 Response

```json
{
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

<h3 id="accept-claim-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful request returns the HTTP `200 OK` status code and a JSON response body that includes a link to the dispute.|[subsequent_action](#schemasubsequent_action)|
|400|Bad Request|The request failed due to a validation error. The request returns the HTTP `400 Bad Request` status code.|[error](#schemaerror)|
|default|Default|The error response.|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://uri.paypal.com/services/disputes/update-seller )
</aside>

## Settle dispute

<a id="opIddisputes.adjudicate"></a>

> Code samples

```bash
curl https://api-m.paypal.com/v1/customer/disputes/string/adjudicate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "adjudication_outcome": "BUYER_FAVOR"
  }'
```

`POST /v1/customer/disputes/{id}/adjudicate`

<blockquote><strong>Important:</strong> This method is for sandbox use only.</blockquote> Settles a dispute in either the customer's or merchant's favor. Merchants can make this call in the sandbox to complete end-to-end dispute resolution testing, which mimics the dispute resolution that PayPal agents normally complete. To make this call, the dispute <code>status</code> must be <code>UNDER_REVIEW</code> and <code>adjudicate</code> link  should be available in the <a href="/docs/api/customer-disputes/v1/#disputes_get!c=200&path=links&t=response/">HATEOAS links</a> of the <a href="/docs/api/customer-disputes/v1/#disputes_get">show dispute details</a> response.

> Body parameter

```json
{
  "adjudication_outcome": "BUYER_FAVOR"
}
```

<h3 id="settle-dispute-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the dispute for which to provide the supporting information.|
|body|body|[adjudicate](#schemaadjudicate)|false|none|
|» adjudication_outcome|body|string|true|The outcome of the adjudication.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» adjudication_outcome|BUYER_FAVOR|
|» adjudication_outcome|SELLER_FAVOR|

> Example responses

> 200 Response

```json
{
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

> 422 Response

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

<h3 id="settle-dispute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful request returns the HTTP `200 OK` status code and a JSON response body that includes a link to the dispute.|[subsequent_action](#schemasubsequent_action)|
|400|Bad Request|The request failed due to a validation error. The request returns the HTTP `400 Bad Request` status code.|[error](#schemaerror)|
|422|Unprocessable Entity|The requested action could not be completed. The request returns the HTTP `422 Unprocessable Entity` status code.|[error](#schemaerror)|
|500|Internal Server Error|An internal server error occurred. The request returns the HTTP `500 Internal Server Error` status code.|[error](#schemaerror)|
|default|Default|The error response.|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://uri.paypal.com/services/disputes/update-seller ), Oauth2 ( Scopes: https://uri.paypal.com/services/disputes/update-buyer )
</aside>

## Update dispute status

<a id="opIddisputes.require-evidence"></a>

> Code samples

```bash
curl https://api-m.paypal.com/v1/customer/disputes/string/require-evidence \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "note": "Escalating to PayPal claim for resolution."
  }'
```

`POST /v1/customer/disputes/{id}/require-evidence`

<blockquote><strong>Important:</strong> This method is for sandbox use only.</blockquote> Updates the status of a dispute, by ID, from <code>UNDER_REVIEW</code> to either:<ul><li><code>WAITING_FOR_BUYER_RESPONSE</code></li><li><code>WAITING_FOR_SELLER_RESPONSE</code></li></ul>This status change enables either the customer or merchant to submit evidence for the dispute. To make this call, the dispute <code>status</code> must be <code>UNDER_REVIEW</code> and <code>require-evidence</code> link  should be available in the <a href="/docs/api/customer-disputes/v1/#disputes_get!c=200&path=links&t=response/">HATEOAS links</a> of the <a href="/docs/api/customer-disputes/v1/#disputes_get">show dispute details</a> response. Specify an <code>action</code> value in the JSON request body to indicate whether the status change enables the customer or merchant to submit evidence:<table><thead><tr align="left"><th>If <code>action</code> is</th><th>The <code>status</code> updates to</th></tr></thead><tbody><tr><td><code>BUYER_EVIDENCE</code></td><td> <code>WAITING_FOR_BUYER_RESPONSE</code></td></tr><tr><td><code>SELLER_EVIDENCE</code></td><td> <code>WAITING_FOR_SELLER_RESPONSE</code></td></tr></tbody></table>.

> Body parameter

```json
{
  "note": "Escalating to PayPal claim for resolution."
}
```

<h3 id="update-dispute-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the dispute for which to provide the supporting information.|
|body|body|[require_evidence](#schemarequire_evidence)|true|none|
|» action|body|string|true|The action. Indicates whether the state change enables the customer or merchant to submit evidence.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» action|BUYER_EVIDENCE|
|» action|SELLER_EVIDENCE|

> Example responses

> 200 Response

```json
{
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

> 422 Response

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

<h3 id="update-dispute-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful request returns the HTTP `200 OK` status code and a JSON response body that includes a link to the dispute.|[subsequent_action](#schemasubsequent_action)|
|400|Bad Request|The request failed due to a validation error. The request returns the HTTP `400 Bad Request` status code.|[error](#schemaerror)|
|422|Unprocessable Entity|The requested action could not be completed. The request returns the HTTP `422 Unprocessable Entity` status code.|[error](#schemaerror)|
|500|Internal Server Error|An internal server error occurred. The request returns the HTTP `500 Internal Server Error` status code.|[error](#schemaerror)|
|default|Default|The error response.|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://uri.paypal.com/services/disputes/update-seller ), Oauth2 ( Scopes: https://uri.paypal.com/services/disputes/update-buyer )
</aside>

## Escalate dispute to claim

<a id="opIddisputes.escalate"></a>

> Code samples

```bash
curl https://api-m.paypal.com/v1/customer/disputes/string/escalate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "action": "BUYER_EVIDENCE"
  }'
```

`POST /v1/customer/disputes/{id}/escalate`

Escalates the dispute, by ID, to a PayPal claim. To make this call, the stage in the dispute lifecycle must be `INQUIRY`.

> Body parameter

```json
{
  "action": "BUYER_EVIDENCE"
}
```

<h3 id="escalate-dispute-to-claim-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the dispute for which to provide the supporting information.|
|body|body|[escalate](#schemaescalate)|false|none|
|» note|body|string|false|The notes about the escalation of the dispute to a claim.|
|» buyer_escalation_reason|body|[buyer_escalation_reason](#schemabuyer_escalation_reason)|false|none|

> Example responses

> 200 Response

```json
{
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

> 422 Response

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

<h3 id="escalate-dispute-to-claim-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful request returns the HTTP `200 OK` status code and a JSON response body that includes a link to the dispute.|[escalate_response](#schemaescalate_response)|
|400|Bad Request|The request failed due to a validation error. The request returns the HTTP `400 Bad Request` status code.|[error](#schemaerror)|
|422|Unprocessable Entity|The requested action could not be completed. The request returns the HTTP `422 Unprocessable Entity` status code.|[error](#schemaerror)|
|500|Internal Server Error|An internal server error occurred. The request returns the HTTP `500 Internal Server Error` status code.|[error](#schemaerror)|
|default|Default|The error response.|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://uri.paypal.com/services/disputes/update-seller ), Oauth2 ( Scopes: https://uri.paypal.com/services/disputes/update-buyer )
</aside>

## Send message about dispute to other party

<a id="opIddisputes.send-message"></a>

> Code samples

```bash
curl https://api-m.paypal.com/v1/customer/disputes/string/send-message \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'message_document=@/path/to/file'
```

`POST /v1/customer/disputes/{id}/send-message`

Sends a message about a dispute, by ID, to the other party in the dispute. Merchants and customers can only send messages if the `dispute_life_cycle_stage` value is `INQUIRY`. For constraints and rules regarding documents that can be attached as part of the message, see <a href="/docs/integration/direct/customer-disputes/integration-guide/#documents">documents</a>. To send a message, use the <code>send-message</code> link in the <a href="/docs/api/reference/api-responses/#hateoas-links/">HATEOAS links</a> of the <a href="/docs/api/customer-disputes/v1/#disputes_get">show dispute details</a> response and specify the message in the JSON request body. In case the link is not present in the response you can't send a message on the dispute.

> Body parameter

```yaml
message_document: string
```

<h3 id="send-message-about-dispute-to-other-party-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the dispute for which to provide the supporting information.|
|body|body|object|false|none|
|» message_document|body|string(binary)|false|A file that contains any additional info about the message posted.|

> Example responses

> 200 Response

```json
{
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

> 422 Response

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

<h3 id="send-message-about-dispute-to-other-party-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful request returns the HTTP `200 OK` status code and a JSON response body that includes a link to the dispute.|[subsequent_action](#schemasubsequent_action)|
|400|Bad Request|The request failed due to a validation error. The request returns the HTTP `400 Bad Request` status code.|[error](#schemaerror)|
|422|Unprocessable Entity|The requested action could not be completed. The request returns the HTTP `422 Unprocessable Entity` status code.|[error](#schemaerror)|
|500|Internal Server Error|An internal server error occurred. The request returns the HTTP `500 Internal Server Error` status code.|[error](#schemaerror)|
|default|Default|The error response.|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://uri.paypal.com/services/disputes/update-seller ), Oauth2 ( Scopes: https://uri.paypal.com/services/disputes/update-buyer )
</aside>

## Make offer to resolve dispute

<a id="opIddisputes.make-offer"></a>

> Code samples

```bash
curl https://api-m.paypal.com/v1/customer/disputes/string/make-offer \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "note": "Offer refund with replacement item.",
    "offer_amount": {
      "currency_code": "USD",
      "value": "23"
    },
    "offer_type": "REFUND_WITH_REPLACEMENT"
  }'
```

`POST /v1/customer/disputes/{id}/make-offer`

Makes an offer to the other party to resolve a dispute, by ID. To make this call, the stage in the dispute lifecycle must be `INQUIRY`. If the customer accepts the offer, PayPal automatically makes a refund. Allowed offer_type values for the request is available in dispute details <a href="/docs/api/customer-disputes/v1/#definition-allowed_response_options">allowed response options</a> object.

> Body parameter

```json
{
  "note": "Offer refund with replacement item.",
  "offer_amount": {
    "currency_code": "USD",
    "value": "23"
  },
  "offer_type": "REFUND_WITH_REPLACEMENT"
}
```

<h3 id="make-offer-to-resolve-dispute-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the dispute for which to provide the supporting information.|
|body|body|[make_offer](#schemamake_offer)|false|none|
|» note|body|string|true|The merchant's notes about the offer.|
|» offer_amount|body|[money](#schemamoney)|false|The amount proposed to resolve the dispute.|
|» return_shipping_address|body|[address_portable](#schemaaddress_portable)|false|The return address for the item. Required when the customer must return an item to the merchant for the <code>MERCHANDISE_OR_SERVICE_NOT_AS_DESCRIBED</code> dispute reason, especially if the refund amount is less than the dispute amount.|
|» invoice_id|body|string|false|The merchant-provided ID of the invoice for the refund. This optional value maps the refund to an invoice ID in the merchant's system.|
|» offer_type|body|[offer_type](#schemaoffer_type)|true|The merchant-proposed offer type for the dispute.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» offer_type|REFUND|
|» offer_type|REFUND_WITH_RETURN|
|» offer_type|REFUND_WITH_REPLACEMENT|
|» offer_type|REPLACEMENT_WITHOUT_REFUND|

> Example responses

> 200 Response

```json
{
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

> 422 Response

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

<h3 id="make-offer-to-resolve-dispute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful request returns the HTTP `200 OK` status code and a JSON response body that includes a link to the dispute.|[subsequent_action](#schemasubsequent_action)|
|400|Bad Request|The request failed due to a validation error. The request returns the HTTP `400 Bad Request` status code.|[error](#schemaerror)|
|422|Unprocessable Entity|The requested action could not be completed. The request returns the HTTP `422 Unprocessable Entity` status code.|[error](#schemaerror)|
|500|Internal Server Error|An internal server error occurred. The request returns the HTTP `500 Internal Server Error` status code.|[error](#schemaerror)|
|default|Default|The error response.|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://uri.paypal.com/services/disputes/update-seller ), Oauth2 ( Scopes: https://uri.paypal.com/services/disputes/update-buyer )
</aside>

## Accept offer to resolve dispute

<a id="opIddisputes.accept-offer"></a>

> Code samples

```bash
curl https://api-m.paypal.com/v1/customer/disputes/string/accept-offer \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "note": "I am ok with the refund offered."
  }'
```

`POST /v1/customer/disputes/{id}/accept-offer`

The customer accepts the offer from merchant to resolve a dispute, by ID. PayPal automatically refunds the amount proposed by merchant to the customer.

> Body parameter

```json
{
  "note": "I am ok with the refund offered."
}
```

<h3 id="accept-offer-to-resolve-dispute-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the dispute for which to provide the supporting information.|
|body|body|[accept_offer](#schemaaccept_offer)|false|none|
|» note|body|string|false|The customer notes about accepting of offer. PayPal can but the merchant cannot view these notes.|

> Example responses

> 200 Response

```json
{
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

> 202 Response

```json
{
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

> 422 Response

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

<h3 id="accept-offer-to-resolve-dispute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful request returns the HTTP `200 OK` status code and a JSON response body that includes a link to the dispute.|[subsequent_action](#schemasubsequent_action)|
|202|Accepted|A successfully accepted request returns the HTTP `202 Accepted` status code and a JSON response body that includes a [HATEOAS link](/docs/api/reference/api-responses/#hateoas-links) to the ID of the request. The request returns `202 Accepted` status in case money movement for the offer is delayed due to some internal reasons.|[subsequent_action](#schemasubsequent_action)|
|400|Bad Request|The request failed due to a validation error. The request returns the HTTP `400 Bad Request` status code.|[error](#schemaerror)|
|422|Unprocessable Entity|The requested action could not be completed. The request returns the HTTP `422 Unprocessable Entity` status code.|[error](#schemaerror)|
|500|Internal Server Error|An internal server error occurred. The request returns the HTTP `500 Internal Server Error` status code.|[error](#schemaerror)|
|default|Default|The error response.|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://uri.paypal.com/services/disputes/update-buyer )
</aside>

## Deny offer to resolve dispute

<a id="opIddisputes.deny-offer"></a>

> Code samples

```bash
curl https://api-m.paypal.com/v1/customer/disputes/string/deny-offer \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "note": "refund offer is very low."
  }'
```

`POST /v1/customer/disputes/{id}/deny-offer`

Denies an offer that the merchant proposes for a dispute, by ID.

> Body parameter

```json
{
  "note": "refund offer is very low."
}
```

<h3 id="deny-offer-to-resolve-dispute-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the dispute for which to provide the supporting information.|
|body|body|[deny_offer](#schemadeny_offer)|false|none|
|» note|body|string|true|The customer notes about the denial of offer. PayPal can but the merchant cannot view these notes.|

> Example responses

> 200 Response

```json
{
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

> 422 Response

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

<h3 id="deny-offer-to-resolve-dispute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful request returns the HTTP `200 OK` status code and a JSON response body that includes a link to the dispute.|[subsequent_action](#schemasubsequent_action)|
|400|Bad Request|The request failed due to a validation error. The request returns the HTTP `400 Bad Request` status code.|[error](#schemaerror)|
|422|Unprocessable Entity|The requested action could not be completed. The request returns the HTTP `422 Unprocessable Entity` status code.|[error](#schemaerror)|
|500|Internal Server Error|An internal server error occurred. The request returns the HTTP `500 Internal Server Error` status code.|[error](#schemaerror)|
|default|Default|The error response.|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://uri.paypal.com/services/disputes/update-buyer )
</aside>

## Acknowledge returned item

<a id="opIddisputes.acknowledge-return-item"></a>

> Code samples

```bash
curl https://api-m.paypal.com/v1/customer/disputes/string/acknowledge-return-item \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'acknowledgement_document=@/path/to/file'
```

`POST /v1/customer/disputes/{id}/acknowledge-return-item`

Acknowledges that the customer returned an item for a dispute, by ID. A merchant can make this request for disputes with the `MERCHANDISE_OR_SERVICE_NOT_AS_DESCRIBED` reason. Allowed acknowledgement_type values for the request is available in dispute details <a href="/docs/api/customer-disputes/v1/#definition-allowed_response_options">allowed response options</a> object. For constraints and rules regarding documents, see <a href="/docs/integration/direct/customer-disputes/integration-guide/#documents">documents</a>.

> Body parameter

```yaml
acknowledgement_document: string
```

<h3 id="acknowledge-returned-item-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the dispute for which to provide the supporting information.|
|body|body|object|false|none|
|» acknowledgement_document|body|string(binary)|false|A file with evidence.|

> Example responses

> 200 Response

```json
{
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

> 422 Response

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

<h3 id="acknowledge-returned-item-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful request returns the HTTP `200 OK` status code and a JSON response body that includes a link to the dispute.|[subsequent_action](#schemasubsequent_action)|
|400|Bad Request|The request failed due to a validation error. The request returns the HTTP `400 Bad Request` status code.|[error](#schemaerror)|
|422|Unprocessable Entity|The requested action could not be completed. The request returns the HTTP `422 Unprocessable Entity` status code.|[error](#schemaerror)|
|500|Internal Server Error|An internal server error occurred. The request returns the HTTP `500 Internal Server Error` status code.|[error](#schemaerror)|
|default|Default|The error response.|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://uri.paypal.com/services/disputes/update-seller )
</aside>

## Provide supporting information for dispute

<a id="opIddisputes.provide-supporting-info"></a>

> Code samples

```bash
curl https://api-m.paypal.com/v1/customer/disputes/string/provide-supporting-info \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'supporting document=@/path/to/file'
```

`POST /v1/customer/disputes/{id}/provide-supporting-info`

Provides supporting information for a dispute, by ID. A merchant or buyer can make this request for disputes if they find the `provide-supporting-info` link in the HATEOAS links in the list disputes response. The party can provide the supporting information to PayPal to defend themselves only when the `dispute_life_cycle_stage` is `CHARGEBACK`, `PRE_ARBITRATION`, or `ARBITRATION`. They can provide a note that describes their part with details or upload any supporting documents to support their side. For constraints and rules regarding documents, see <a href="/docs/integration/direct/customer-disputes/integration-guide/#documents">documents</a>.<br/>To make this request, specify the dispute ID in the URI and specify the notes in the JSON request body. This method differs from the provide evidence method which supports only multipart request, where PayPal asks the concerned party for evidence.

> Body parameter

```yaml
supporting document: string
```

<h3 id="provide-supporting-information-for-dispute-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the dispute for which to provide the supporting information.|
|body|body|object|false|none|
|» supporting document|body|string(binary)|false|A file with evidence.|

> Example responses

> 200 Response

```json
{
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

> 422 Response

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

<h3 id="provide-supporting-information-for-dispute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful request returns the HTTP `200 OK` status code and a JSON response body that includes a link to the dispute.|[subsequent_action](#schemasubsequent_action)|
|400|Bad Request|The request failed due to a validation error. The request returns the HTTP `400 Bad Request` status code.|[error](#schemaerror)|
|404|Not Found|The request failed due to the dispute is not available. The request returns the HTTP `404 Not Found` status code.|[error](#schemaerror)|
|422|Unprocessable Entity|The requested action could not be completed. The request returns the HTTP `422 Unprocessable Entity` status code.|[error](#schemaerror)|
|500|Internal Server Error|An internal server error occurred. The request returns the HTTP `500 Internal Server Error` status code.|[error](#schemaerror)|
|default|Default|The error response.|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://uri.paypal.com/services/disputes/update-seller https://uri.paypal.com/services/disputes/update-buyer https://uri.paypal.com/services/disputes/update-partner )
</aside>

# Schemas

<h2 id="tocS_accept_claim_response_options">accept_claim_response_options</h2>
<!-- backwards compatibility -->
<a id="schemaaccept_claim_response_options"></a>
<a id="schema_accept_claim_response_options"></a>
<a id="tocSaccept_claim_response_options"></a>
<a id="tocsaccept_claim_response_options"></a>

```json
{
  "accept_claim_types": [
    "REFUND"
  ]
}
```

The allowed response options when the merchant is accepting the claim.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accept_claim_types|[accept_claim_type_list](#schemaaccept_claim_type_list)|false|none|The types of refund the merchant can provide the customer.|

#### Enumerated Values

|Property|Value|
|---|---|
|accept_claim_types|REFUND|
|accept_claim_types|REFUND_WITH_RETURN|
|accept_claim_types|PARTIAL_REFUND|
|accept_claim_types|REFUND_WITH_RETURN_SHIPMENT_LABEL|

<h2 id="tocS_accept_claim_type">accept_claim_type</h2>
<!-- backwards compatibility -->
<a id="schemaaccept_claim_type"></a>
<a id="schema_accept_claim_type"></a>
<a id="tocSaccept_claim_type"></a>
<a id="tocsaccept_claim_type"></a>

```json
"REFUND"
```

The refund type proposed by the merchant for the dispute.

<h2 id="tocS_accept_claim_type_list">accept_claim_type_list</h2>
<!-- backwards compatibility -->
<a id="schemaaccept_claim_type_list"></a>
<a id="schema_accept_claim_type_list"></a>
<a id="tocSaccept_claim_type_list"></a>
<a id="tocsaccept_claim_type_list"></a>

```json
[
  "REFUND"
]
```

The types of refund the merchant can provide the customer.

<h2 id="tocS_accept_offer">accept_offer</h2>
<!-- backwards compatibility -->
<a id="schemaaccept_offer"></a>
<a id="schema_accept_offer"></a>
<a id="tocSaccept_offer"></a>
<a id="tocsaccept_offer"></a>

```json
{
  "note": "string"
}
```

A customer request to accept the offer made by the merchant.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|note|string|false|none|The customer notes about accepting of offer. PayPal can but the merchant cannot view these notes.|

<h2 id="tocS_acknowledge_return_item_response_options">acknowledge_return_item_response_options</h2>
<!-- backwards compatibility -->
<a id="schemaacknowledge_return_item_response_options"></a>
<a id="schema_acknowledge_return_item_response_options"></a>
<a id="tocSacknowledge_return_item_response_options"></a>
<a id="tocsacknowledge_return_item_response_options"></a>

```json
{
  "acknowledgement_types": [
    "ITEM_RECEIVED"
  ]
}
```

The allowed response options when the seller acknowledges that the buyer has returned an item for the dispute.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acknowledgement_types|[acknowledgement_type_list](#schemaacknowledgement_type_list)|false|none|The types of response when the merchant acknowledges a returned item.|

#### Enumerated Values

|Property|Value|
|---|---|
|acknowledgement_types|ITEM_RECEIVED|
|acknowledgement_types|ITEM_NOT_RECEIVED|
|acknowledgement_types|DAMAGED|
|acknowledgement_types|EMPTY_PACKAGE_OR_DIFFERENT|
|acknowledgement_types|MISSING_ITEMS|

<h2 id="tocS_acknowledgement_type">acknowledgement_type</h2>
<!-- backwards compatibility -->
<a id="schemaacknowledgement_type"></a>
<a id="schema_acknowledgement_type"></a>
<a id="tocSacknowledgement_type"></a>
<a id="tocsacknowledgement_type"></a>

```json
"ITEM_RECEIVED"
```

The type of acknowledgement allowed for the merchant after the customer has returned the item. The merchant can update whether the item was received and is as expected or if the item was not received.

<h2 id="tocS_acknowledgement_type_list">acknowledgement_type_list</h2>
<!-- backwards compatibility -->
<a id="schemaacknowledgement_type_list"></a>
<a id="schema_acknowledgement_type_list"></a>
<a id="tocSacknowledgement_type_list"></a>
<a id="tocsacknowledgement_type_list"></a>

```json
[
  "ITEM_RECEIVED"
]
```

The types of response when the merchant acknowledges a returned item.

<h2 id="tocS_action_info">action_info</h2>
<!-- backwards compatibility -->
<a id="schemaaction_info"></a>
<a id="schema_action_info"></a>
<a id="tocSaction_info"></a>
<a id="tocsaction_info"></a>

```json
{
  "action": "ACKNOWLEDGE_RETURN_ITEM",
  "response_option": "string",
  "mandatory": true
}
```

The extended properties for a evidence. Includes additional information such as the action for which the evidence was requested/submitted, and whether the evidence is mandatory.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|false|none|The action for which the evidence was requested or submitted.|
|response_option|string|false|none|The response option for the corresponding action. Possible values:<ul><li><a href="/docs/api/customer-disputes/v1/#definition-acknowledgement_type">Acknowledgement Types</a></li><li><a href="/docs/api/customer-disputes/v1/#definition-response-accept_claim_type">Accept Claim types</a></li></ul>.|
|mandatory|boolean|false|none|Indicates whether the evidence is mandatory for the corresponding action and response option.|

#### Enumerated Values

|Property|Value|
|---|---|
|action|ACKNOWLEDGE_RETURN_ITEM|
|action|ACCEPT_CLAIM|
|action|PROVIDE_EVIDENCE|
|action|APPEAL|
|action|CANCEL|
|action|CHANGE_REASON|
|action|ESCALATE|

<h2 id="tocS_address_details">address_details</h2>
<!-- backwards compatibility -->
<a id="schemaaddress_details"></a>
<a id="schema_address_details"></a>
<a id="tocSaddress_details"></a>
<a id="tocsaddress_details"></a>

```json
{
  "street_number": "string",
  "street_name": "string",
  "street_type": "string",
  "delivery_service": "string",
  "building_name": "string",
  "sub_building": "string"
}
```

The non-portable additional address details that are sometimes needed for compliance, risk, or other scenarios where fine-grain address information might be needed. Not portable with common third party and open source. Redundant with core fields.<br/>For example, `address_portable.address_line_1` is usually a combination of `address_details.street_number`, `street_name`, and `street_type`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|street_number|string|false|none|The street number.|
|street_name|string|false|none|The street name. Just `Drury` in `Drury Lane`.|
|street_type|string|false|none|The street type. For example, avenue, boulevard, road, or expressway.|
|delivery_service|string|false|none|The delivery service. Post office box, bag number, or post office name.|
|building_name|string|false|none|A named locations that represents the premise. Usually a building name or number or collection of buildings with a common name or number. For example, <code>Craven House</code>.|
|sub_building|string|false|none|The first-order entity below a named building or location that represents the sub-premises. Usually a single building within a collection of buildings with a common name. Can be a flat, story, floor, room, or apartment.|

<h2 id="tocS_address_portable">address_portable</h2>
<!-- backwards compatibility -->
<a id="schemaaddress_portable"></a>
<a id="schema_address_portable"></a>
<a id="tocSaddress_portable"></a>
<a id="tocsaddress_portable"></a>

```json
{
  "address_line_1": "string",
  "address_line_2": "string",
  "address_line_3": "string",
  "admin_area_4": "string",
  "admin_area_3": "string",
  "admin_area_2": "string",
  "admin_area_1": "string",
  "postal_code": "string",
  "country_code": "st",
  "address_details": {
    "street_number": "string",
    "street_name": "string",
    "street_type": "string",
    "delivery_service": "string",
    "building_name": "string",
    "sub_building": "string"
  }
}
```

The portable international postal address. Maps to [AddressValidationMetadata](https://github.com/googlei18n/libaddressinput/wiki/AddressValidationMetadata) and HTML 5.1 [Autofilling form controls: the autocomplete attribute](https://www.w3.org/TR/html51/sec-forms.html#autofilling-form-controls-the-autocomplete-attribute).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address_line_1|string|false|none|The first line of the address. For example, number or street. For example, `173 Drury Lane`. Required for data entry and compliance and risk checks. Must contain the full address.|
|address_line_2|string|false|none|The second line of the address. For example, suite or apartment number.|
|address_line_3|string|false|none|The third line of the address, if needed. For example, a street complement for Brazil, direction text, such as `next to Walmart`, or a landmark in an Indian address.|
|admin_area_4|string|false|none|The neighborhood, ward, or district. Smaller than `admin_area_level_3` or `sub_locality`. Value is:<ul><li>The postal sorting code for Guernsey and many French territories, such as French Guiana.</li><li>The fine-grained administrative levels in China.</li></ul>|
|admin_area_3|string|false|none|A sub-locality, suburb, neighborhood, or district. Smaller than `admin_area_level_2`. Value is:<ul><li>Brazil. Suburb, bairro, or neighborhood.</li><li>India. Sub-locality or district. Street name information is not always available but a sub-locality or district can be a very small area.</li></ul>|
|admin_area_2|string|false|none|A city, town, or village. Smaller than `admin_area_level_1`.|
|admin_area_1|string|false|none|The highest level sub-division in a country, which is usually a province, state, or ISO-3166-2 subdivision. Format for postal delivery. For example, `CA` and not `California`. Value, by country, is:<ul><li>UK. A county.</li><li>US. A state.</li><li>Canada. A province.</li><li>Japan. A prefecture.</li><li>Switzerland. A kanton.</li></ul>|
|postal_code|string|false|none|The postal code, which is the zip code or equivalent. Typically required for countries with a postal code or an equivalent. See [postal code](https://en.wikipedia.org/wiki/Postal_code).|
|country_code|[country_code](#schemacountry_code)|true|none|The [two-character ISO 3166-1 code](/api/rest/reference/country-codes/) that identifies the country or region.<blockquote><strong>Note:</strong> The country code for Great Britain is <code>GB</code> and not <code>UK</code> as used in the top-level domain names for that country. Use the `C2` country code for China worldwide for comparable uncontrolled price (CUP) method, bank card, and cross-border transactions.</blockquote>|
|address_details|[address_details](#schemaaddress_details)|false|none|The non-portable additional address details that are sometimes needed for compliance, risk, or other scenarios where fine-grain address information might be needed. Not portable with common third party and open source. Redundant with core fields.<br/>For example, `address_portable.address_line_1` is usually a combination of `address_details.street_number`, `street_name`, and `street_type`.|

<h2 id="tocS_adjudicate">adjudicate</h2>
<!-- backwards compatibility -->
<a id="schemaadjudicate"></a>
<a id="schema_adjudicate"></a>
<a id="tocSadjudicate"></a>
<a id="tocsadjudicate"></a>

```json
{
  "adjudication_outcome": "BUYER_FAVOR"
}
```

A request to settle a dispute in either the customer's or merchant's favor.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adjudication_outcome|string|true|none|The outcome of the adjudication.|

#### Enumerated Values

|Property|Value|
|---|---|
|adjudication_outcome|BUYER_FAVOR|
|adjudication_outcome|SELLER_FAVOR|

<h2 id="tocS_adjudication">adjudication</h2>
<!-- backwards compatibility -->
<a id="schemaadjudication"></a>
<a id="schema_adjudication"></a>
<a id="tocSadjudication"></a>
<a id="tocsadjudication"></a>

```json
{
  "type": "DENY_BUYER",
  "adjudication_time": "stringstringstringst",
  "reason": "AMOUNT_DIFFERENCE_EXPECTED_DUE_TO_FEES",
  "dispute_life_cycle_stage": "INQUIRY"
}
```

The Adjudication details for the dispute.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|[adjudication_type](#schemaadjudication_type)|true|none|The type of adjudication.|
|adjudication_time|[date_time](#schemadate_time)|true|none|The date and time when the adjudication was done, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).|
|reason|[adjudication_reason](#schemaadjudication_reason)|false|none|The reason for the adjudication type.|
|dispute_life_cycle_stage|[dispute_lifecycle_stage](#schemadispute_lifecycle_stage)|false|read-only|The dispute life cycle stage during the adjudication.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|DENY_BUYER|
|type|PAYOUT_TO_BUYER|
|type|PAYOUT_TO_SELLER|
|type|RECOVER_FROM_SELLER|
|reason|AMOUNT_DIFFERENCE_EXPECTED_DUE_TO_FEES|
|reason|BILLING_AGREEMENT_CHANGE_DISCLOSED|
|reason|BILLING_AGREEMENT_CHANGE_NOT_DISCLOSED|
|reason|BILLING_AGREEMENT_DATE_CHANGE_DISCLOSED|
|reason|BILLING_AGREEMENT_DATE_CHANGE_NOT_DISCLOSED|
|reason|BUYER_ATTEMPTED_RETURN|
|reason|BUYER_BILLED_ONLY_ONCE|
|reason|BUYER_CANCELLED_CASE|
|reason|BUYER_CANCELLED_SERVICE|
|reason|BUYER_FAILED_TO_DESCRIBE_ISSUE|
|reason|BUYER_HAS_POSSESSION_OF_THE_MERCHANDISE_OR_SERVICE|
|reason|BUYER_MADE_NO_ATTEMPT_TO_RESOLVE_WITH_SELLER|
|reason|BUYER_NOT_IN_POSSESSION_OF_ITEM_TO_RETURN|
|reason|BUYER_PROVIDED_CREDIT_RECEIPT|
|reason|BUYER_RECEIVED_DUPLICATE_REFUND|
|reason|CANCELLED_PER_TERMS_OF_BILLING_AGREEMENT|
|reason|CARD_NOT_STOLEN|
|reason|CARD_NOT_STOLEN_BEFORE_AUTH|
|reason|CUSTOMER_RECOGNIZES_TRANSACTION|
|reason|DECISION_BASED_ON_AVAILABLE_INFORMATION|
|reason|DELIVERY_AFTER_EXPECTED_DELIVERY_DATE|
|reason|DELIVERY_DUE_WITHIN_EXPECTED_DELIVERY_DATE|
|reason|DELIVERY_OR_SERVICE_REFUSED|
|reason|DOCUMENTATION_MATCHES_AMOUNT_CHARGED|
|reason|DOCUMENTATION_MATCHES_AMOUNT_IN_PAYPAL_ACCOUNT|
|reason|DUPLICATE_ADD_FUNDS|
|reason|EFFORTLESS_SELLER_PROTECTION|
|reason|IN_PERSON_DELIVERY|
|reason|INELIGIBLE_BUYER_PROTECTION_POLICY|
|reason|INELIGIBLE_SELLER_PROTECTION_POLICY|
|reason|INQUIRY_OFFER_ITEM_REPLACED|
|reason|INQUIRY_OFFER_PARTIAL_REFUND|
|reason|INQUIRY_OFFER_REFUND_WITH_ITEM_RETURN|
|reason|INQUIRY_OFFER_REFUND_WITH_REPLACEMENT|
|reason|INVALID_APPEAL_REASON|
|reason|INVALID_CHARGEBACK_SELLER_FAVOUR|
|reason|INVALID_DELIVERY_PROOF|
|reason|INVALID_DELIVERY_PROOF_SIGNATURE|
|reason|INVALID_DOCUMENTATION|
|reason|INVALID_PROOF_OF_SHIPMENT|
|reason|INVALID_REFUND_PROOF|
|reason|INVALID_RETURN_DELIVERY_NO_SIGNATURE_PROOF|
|reason|INVALID_RETURN_DELIVERY_PROOF|
|reason|INVALID_TRACKING|
|reason|ITEM_ALTERED_REPAIRED|
|reason|ITEM_NOT_AS_ADVERTISED|
|reason|ITEM_NOT_AS_DESCRIBED|
|reason|ITEM_NOT_DAMAGED|
|reason|ITEM_NOT_DELIVERED|
|reason|ITEM_NOT_RETURNED_TO_SELLER|
|reason|ITEM_NOT_SHIPPED|
|reason|ITEM_OF_DIFFERENT_QUALITY_OR_QUANTITY|
|reason|ITEM_OUT_OF_STOCK_AND_NOT_DELIVERED|
|reason|ITEM_RETURNED_TO_SELLER|
|reason|ITEM_SERVICE_MISREPRESENTED|
|reason|ITEM_SERVICE_NOT_MISREPRESENTED|
|reason|ITEM_SERVICE_RECEIVED_BY_BUYER|
|reason|ITEM_SOLD_AS_DESCRIBED|
|reason|ITEM_VALUE_UNAFFECTED|
|reason|MULTIPLE_APPEALS_WITH_SAME_REASON|
|reason|NO_DOCUMENTATION_FROM_BUYER|
|reason|NO_DOCUMENTATION_SUPPORTING_DUE_OF_CREDIT|
|reason|NO_PROOF_OF_DELIVERY|
|reason|NO_PROOF_OF_DELIVERY_INTANGIBLE|
|reason|NO_PROTECTION_FOR_DIGITAL_GOODS_SERVICE|
|reason|NO_RESPONSE_FROM_BUYER|
|reason|NO_RESPONSE_FROM_BUYER_FOR_ADDITIONAL_INFO_REQUEST|
|reason|NO_SELLER_RESPONSE|
|reason|NO_SELLER_RESPONSE_FOR_ADDITIONAL_INFO_REQUEST|
|reason|NO_VALID_SHIPMENT_PROOF|
|reason|NOT_A_BILLING_ERROR|
|reason|NOT_AN_UNAUTHORIZED_TRANSACTION|
|reason|NOT_DUPLICATE_FUNDS_ADDED_ONCE|
|reason|NOT_DUPLICATE_FUNDS_WITHDRAWN_ONCE|
|reason|NOT_SHIPPED_TO_CORRECT_ADDRESS|
|reason|PARTIAL_REFUND_ISSUED_FOR_MISSING_ITEMS|
|reason|PARTIAL_REFUND_OFFER_ACCEPTED|
|reason|PAYMENT_REVERSED_ALREADY|
|reason|POS_SUBMITTED_INSTEAD_OF_POD|
|reason|PREAUTH_INSTALLMENT_DUE|
|reason|PROOF_OF_BILLING_AFTER_CANCELLATION_ACCEPTED|
|reason|PROOF_OF_DUPLICATE_DENIED_OR_INSUFFICIENT|
|reason|PROOF_OF_INCORRECT_TRANSACTION_AMOUNT_ACCEPTED|
|reason|PROOF_OF_PAID_BY_OTHER_MEANS_NOT_SUBMITTED|
|reason|PROOF_OF_TRACKING_NOT_SUBMITTED|
|reason|PROTECTED_BY_PAYPAL|
|reason|REPRESENTED_BY_PAYPAL|
|reason|SELLER_ACCEPTED_MULTIPLE_PAYMENTS|
|reason|SELLER_AGREED_REFUND_WITHOUT_RETURN|
|reason|SELLER_AGREED_TO_ISSUE_CREDIT|
|reason|SELLER_ISSUED_CREDIT_TO_BUYER|
|reason|SELLER_ISSUED_REFUND|
|reason|SELLER_NOT_REACHABLE|
|reason|SELLER_RECEIVED_PAYMENT_TWICE_OR_FOR_REPLACEMENT|
|reason|SELLER_REFUSED_REFUND|
|reason|SELLER_REFUSED_RETURN|
|reason|SELLER_SURCHARGED_BUYER|
|reason|SERVICE_NOT_COMPLETED_AS_AGREED|
|reason|SHIPPING_COMPANY_WONT_SHIP|
|reason|TRACKING_PROOF_NOT_ENOUGH|
|reason|TRANSACTION_AUTHORIZED_BY_CARDHOLDER|
|reason|TRANSACTION_CANCELLED_AFTER_AUTHORIZATION_DATE|
|reason|TRANSACTION_CANCELLED_BEFORE_SHIPMENT_SERVICE_DATE|
|reason|TRANSACTION_MATCHES_BUYER_SPENDING_PATTERN|
|reason|TRANSACTION_PROCESSED_CORRECTLY|
|reason|TRUSTED_BUYER_PAYOUT|
|reason|UNUSED_SHIPPING_LABEL|
|reason|VALID_PROOF_OF_DELIVERY|
|reason|VALID_PROOF_OF_DELIVERY_WITH_SIGNATURE|
|reason|VALID_PROOF_OF_REFUND|
|reason|VALID_PROOF_SUPPORTING_CLAIM|
|reason|VALID_RETURN_DELIVERY_PROOF|
|reason|VALID_RETURN_DELIVERY_PROOF_WITH_SIGNATURE|
|reason|VALID_SHIPMENT_PROOF|
|reason|VALUE_AFFECTED_SIGNIFICANTLY|
|reason|PROTECTION_POLICY_APPLIES|
|reason|SNAD_DELAYED_FILING|
|reason|FUNDS_TRANSFERRED_TO_INCORRECT_RECIPIENT|
|dispute_life_cycle_stage|INQUIRY|
|dispute_life_cycle_stage|CHARGEBACK|
|dispute_life_cycle_stage|PRE_ARBITRATION|
|dispute_life_cycle_stage|ARBITRATION|

<h2 id="tocS_adjudication_list">adjudication_list</h2>
<!-- backwards compatibility -->
<a id="schemaadjudication_list"></a>
<a id="schema_adjudication_list"></a>
<a id="tocSadjudication_list"></a>
<a id="tocsadjudication_list"></a>

```json
[
  {
    "type": "DENY_BUYER",
    "adjudication_time": "stringstringstringst",
    "reason": "AMOUNT_DIFFERENCE_EXPECTED_DUE_TO_FEES",
    "dispute_life_cycle_stage": "INQUIRY"
  }
]
```

The Teammate Adjudication details for the dispute.

<h2 id="tocS_adjudication_reason">adjudication_reason</h2>
<!-- backwards compatibility -->
<a id="schemaadjudication_reason"></a>
<a id="schema_adjudication_reason"></a>
<a id="tocSadjudication_reason"></a>
<a id="tocsadjudication_reason"></a>

```json
"AMOUNT_DIFFERENCE_EXPECTED_DUE_TO_FEES"
```

The reason for the adjudication type.

<h2 id="tocS_adjudication_type">adjudication_type</h2>
<!-- backwards compatibility -->
<a id="schemaadjudication_type"></a>
<a id="schema_adjudication_type"></a>
<a id="tocSadjudication_type"></a>
<a id="tocsadjudication_type"></a>

```json
"DENY_BUYER"
```

The type of adjudication.

<h2 id="tocS_agreed_refund_details">agreed_refund_details</h2>
<!-- backwards compatibility -->
<a id="schemaagreed_refund_details"></a>
<a id="schema_agreed_refund_details"></a>
<a id="tocSagreed_refund_details"></a>
<a id="tocsagreed_refund_details"></a>

```json
{
  "merchant_agreed_refund": true,
  "merchant_agreed_refund_time": "stringstringstringst"
}
```

Details of Agreed Refund between customer and merchant.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|merchant_agreed_refund|boolean|false|none|Indicates whether merchant has agreed to refund the buyer or not.|
|merchant_agreed_refund_time|[date_time](#schemadate_time)|false|none|The date and time proposed by merchant to provide the refund, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).|

<h2 id="tocS_allowed_response_options">allowed_response_options</h2>
<!-- backwards compatibility -->
<a id="schemaallowed_response_options"></a>
<a id="schema_allowed_response_options"></a>
<a id="tocSallowed_response_options"></a>
<a id="tocsallowed_response_options"></a>

```json
{
  "acknowledge_return_item": {
    "acknowledgement_types": [
      "ITEM_RECEIVED"
    ]
  },
  "accept_claim": {
    "accept_claim_types": [
      "REFUND"
    ]
  },
  "make_offer": {
    "offer_types": [
      "REFUND"
    ]
  }
}
```

The allowed response options for the buyer/seller update actions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acknowledge_return_item|[acknowledge_return_item_response_options](#schemaacknowledge_return_item_response_options)|false|none|The allowed response options when the seller acknowledges that the buyer has returned an item for the dispute.|
|accept_claim|[accept_claim_response_options](#schemaaccept_claim_response_options)|false|none|The allowed response options when the merchant is accepting the claim.|
|make_offer|[make_offer_response_options](#schemamake_offer_response_options)|false|none|The allowed response options when the merchant makes offer to the customer.|

<h2 id="tocS_billing_disputes_properties">billing_disputes_properties</h2>
<!-- backwards compatibility -->
<a id="schemabilling_disputes_properties"></a>
<a id="schema_billing_disputes_properties"></a>
<a id="tocSbilling_disputes_properties"></a>
<a id="tocsbilling_disputes_properties"></a>

```json
{
  "duplicate_transaction": {
    "received_duplicate": true,
    "original_transaction": {
      "buyer_transaction_id": "string",
      "seller_transaction_id": "string",
      "reference_id": "string",
      "create_time": "stringstringstringst",
      "transaction_status": "COMPLETED",
      "gross_amount": {
        "currency_code": "str",
        "value": "string"
      },
      "gross_asset": {
        "asset_symbol": "BTC",
        "quantity": "string",
        "quantity_in_subunits": "string",
        "decimals": 0
      },
      "invoice_number": "string",
      "custom": "string",
      "buyer": {
        "name": "string"
      },
      "seller": {
        "email": "string",
        "merchant_id": "string",
        "name": "string"
      },
      "items": [
        {
          "item_id": "string",
          "item_name": "string",
          "item_description": "string",
          "item_quantity": "string",
          "partner_transaction_id": "string",
          "reason": "MERCHANDISE_OR_SERVICE_NOT_RECEIVED",
          "dispute_amount": {
            "currency_code": "str",
            "value": "string"
          },
          "notes": "string",
          "item_type": "PRODUCT",
          "product_details": null,
          "service_details": null,
          "booking_details": null,
          "digital_download_details": null,
          "cancellation_details": null,
          "agreed_refund_details": null
        }
      ],
      "payment_processor": null
    }
  },
  "incorrect_transaction_amount": {
    "correct_transaction_amount": {
      "currency_code": "str",
      "value": "string"
    },
    "correct_transaction_asset": {
      "asset_symbol": "BTC",
      "quantity": "string",
      "quantity_in_subunits": "string",
      "decimals": 0
    },
    "correct_transaction_time": "stringstringstringst"
  },
  "payment_by_other_means": {
    "charge_different_from_original": true,
    "received_duplicate": true,
    "payment_method": "CASH",
    "payment_instrument_suffix": "stri"
  },
  "credit_not_processed": {
    "issue_type": "PRODUCT",
    "expected_refund": {
      "currency_code": "str",
      "value": "string"
    },
    "cancellation_details": {
      "cancellation_date": "stringstringstringst",
      "cancellation_number": "string",
      "cancelled": true,
      "cancellation_mode": "CANCELLED_PAYPAL_BILLING_AGREEMENT"
    },
    "product_details": {
      "description": "string",
      "product_received": "YES",
      "product_received_time": "stringstringstringst",
      "expected_delivery_date": "stringstringstringst",
      "sub_reasons": [
        "DAMAGED"
      ],
      "purchase_url": "http://example.com",
      "return_details": {
        "return_time": "stringstringstringst",
        "mode": "SHIPPED",
        "receipt": true,
        "return_confirmation_number": "string",
        "returned": true
      }
    },
    "service_details": {
      "description": "string",
      "service_started": "YES",
      "note": "string",
      "sub_reasons": [
        "DAMAGED"
      ],
      "purchase_url": "http://example.com"
    },
    "agreed_refund_details": {
      "merchant_agreed_refund": true,
      "merchant_agreed_refund_time": "stringstringstringst"
    }
  },
  "canceled_recurring_billing": {
    "expected_refund": {
      "currency_code": "str",
      "value": "string"
    },
    "cancellation_details": {
      "cancellation_date": "stringstringstringst",
      "cancellation_number": "string",
      "cancelled": true,
      "cancellation_mode": "CANCELLED_PAYPAL_BILLING_AGREEMENT"
    }
  }
}
```

The billing issue details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|duplicate_transaction|[duplicate_transaction](#schemaduplicate_transaction)|false|none|The duplicate transaction details.|
|incorrect_transaction_amount|[incorrect_transaction_amount](#schemaincorrect_transaction_amount)|false|none|The incorrect transaction amount details.|
|payment_by_other_means|[payment_by_other_means](#schemapayment_by_other_means)|false|none|The payment by other means details.|
|credit_not_processed|[credit_not_processed](#schemacredit_not_processed)|false|none|The credit not processed details.|
|canceled_recurring_billing|[canceled_recurring_billing](#schemacanceled_recurring_billing)|false|none|The recurring billing canceled details.|

<h2 id="tocS_buyer">buyer</h2>
<!-- backwards compatibility -->
<a id="schemabuyer"></a>
<a id="schema_buyer"></a>
<a id="tocSbuyer"></a>
<a id="tocsbuyer"></a>

```json
{
  "name": "string"
}
```

The details for the customer who funds the payment. For example, the customer's first name, last name, and email address.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The customer's name.|

<h2 id="tocS_buyer_escalation_reason">buyer_escalation_reason</h2>
<!-- backwards compatibility -->
<a id="schemabuyer_escalation_reason"></a>
<a id="schema_buyer_escalation_reason"></a>
<a id="tocSbuyer_escalation_reason"></a>
<a id="tocsbuyer_escalation_reason"></a>

```json
null
```

<h2 id="tocS_canceled_recurring_billing">canceled_recurring_billing</h2>
<!-- backwards compatibility -->
<a id="schemacanceled_recurring_billing"></a>
<a id="schema_canceled_recurring_billing"></a>
<a id="tocScanceled_recurring_billing"></a>
<a id="tocscanceled_recurring_billing"></a>

```json
{
  "expected_refund": {
    "currency_code": "str",
    "value": "string"
  },
  "cancellation_details": {
    "cancellation_date": "stringstringstringst",
    "cancellation_number": "string",
    "cancelled": true,
    "cancellation_mode": "CANCELLED_PAYPAL_BILLING_AGREEMENT"
  }
}
```

The recurring billing canceled details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expected_refund|[money](#schemamoney)|false|none|The currency and amount for a financial transaction, such as a balance or payment due.|
|cancellation_details|[cancellation_details](#schemacancellation_details)|false|none|The cancellation details.|

<h2 id="tocS_cancellation_details">cancellation_details</h2>
<!-- backwards compatibility -->
<a id="schemacancellation_details"></a>
<a id="schema_cancellation_details"></a>
<a id="tocScancellation_details"></a>
<a id="tocscancellation_details"></a>

```json
{
  "cancellation_date": "stringstringstringst",
  "cancellation_number": "string",
  "cancelled": true,
  "cancellation_mode": "CANCELLED_PAYPAL_BILLING_AGREEMENT"
}
```

The cancellation details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cancellation_date|[date_time](#schemadate_time)|false|none|The date and time of the cancellation, in [Internet date and time format](http://tools.ietf.org/html/rfc3339#section-5.6).|
|cancellation_number|string|false|none|The cancellation number.|
|cancelled|boolean|false|none|Indicates whether the dispute was canceled.|
|cancellation_mode|string|false|none|Indicates the mode used for order cancellation.|

#### Enumerated Values

|Property|Value|
|---|---|
|cancellation_mode|CANCELLED_PAYPAL_BILLING_AGREEMENT|
|cancellation_mode|WEBSITE|
|cancellation_mode|PHONE|
|cancellation_mode|EMAIL|
|cancellation_mode|WRITTEN|
|cancellation_mode|IN_PERSON|

<h2 id="tocS_communication_details">communication_details</h2>
<!-- backwards compatibility -->
<a id="schemacommunication_details"></a>
<a id="schema_communication_details"></a>
<a id="tocScommunication_details"></a>
<a id="tocscommunication_details"></a>

```json
{
  "email": "string",
  "note": "string",
  "time_posted": "stringstringstringst"
}
```

The contact details that a merchant provides to the customer to use to share their evidence documents.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|[email_address](#schemaemail_address)|false|none|The email address that is provided by the merchant where the customer can share the evidences.|
|note|string|false|none|The merchant provided notes that are visible to both the customer and PayPal.|
|time_posted|[date_time](#schemadate_time)|false|none|The date and time when the contact details were posted, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).|

<h2 id="tocS_country_code">country_code</h2>
<!-- backwards compatibility -->
<a id="schemacountry_code"></a>
<a id="schema_country_code"></a>
<a id="tocScountry_code"></a>
<a id="tocscountry_code"></a>

```json
"st"
```

The [two-character ISO 3166-1 code](/api/rest/reference/country-codes/) that identifies the country or region.<blockquote><strong>Note:</strong> The country code for Great Britain is <code>GB</code> and not <code>UK</code> as used in the top-level domain names for that country. Use the `C2` country code for China worldwide for comparable uncontrolled price (CUP) method, bank card, and cross-border transactions.</blockquote>

<h2 id="tocS_credit_not_processed">credit_not_processed</h2>
<!-- backwards compatibility -->
<a id="schemacredit_not_processed"></a>
<a id="schema_credit_not_processed"></a>
<a id="tocScredit_not_processed"></a>
<a id="tocscredit_not_processed"></a>

```json
{
  "issue_type": "PRODUCT",
  "expected_refund": {
    "currency_code": "str",
    "value": "string"
  },
  "cancellation_details": {
    "cancellation_date": "stringstringstringst",
    "cancellation_number": "string",
    "cancelled": true,
    "cancellation_mode": "CANCELLED_PAYPAL_BILLING_AGREEMENT"
  },
  "product_details": {
    "description": "string",
    "product_received": "YES",
    "product_received_time": "stringstringstringst",
    "expected_delivery_date": "stringstringstringst",
    "sub_reasons": [
      "DAMAGED"
    ],
    "purchase_url": "http://example.com",
    "return_details": {
      "return_time": "stringstringstringst",
      "mode": "SHIPPED",
      "receipt": true,
      "return_confirmation_number": "string",
      "returned": true
    }
  },
  "service_details": {
    "description": "string",
    "service_started": "YES",
    "note": "string",
    "sub_reasons": [
      "DAMAGED"
    ],
    "purchase_url": "http://example.com"
  },
  "agreed_refund_details": {
    "merchant_agreed_refund": true,
    "merchant_agreed_refund_time": "stringstringstringst"
  }
}
```

The credit not processed details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|issue_type|string|false|none|The issue type.|
|expected_refund|[money](#schemamoney)|false|none|The currency and amount for a financial transaction, such as a balance or payment due.|
|cancellation_details|[cancellation_details](#schemacancellation_details)|false|none|The cancellation details.|
|product_details|[product_details](#schemaproduct_details)|false|none|The product information.|
|service_details|[service_details](#schemaservice_details)|false|none|The service details.|
|agreed_refund_details|[agreed_refund_details](#schemaagreed_refund_details)|false|none|Details of Agreed Refund between customer and merchant.|

#### Enumerated Values

|Property|Value|
|---|---|
|issue_type|PRODUCT|
|issue_type|SERVICE|

<h2 id="tocS_cryptocurrency">cryptocurrency</h2>
<!-- backwards compatibility -->
<a id="schemacryptocurrency"></a>
<a id="schema_cryptocurrency"></a>
<a id="tocScryptocurrency"></a>
<a id="tocscryptocurrency"></a>

```json
{
  "asset_symbol": "BTC",
  "quantity": "string",
  "quantity_in_subunits": "string",
  "decimals": 0
}
```

The details needed to represent a specific cryptocurrency balance, such as its symbol and quantity.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|asset_symbol|[cryptocurrency_symbol](#schemacryptocurrency_symbol)|true|none|The cryptocurrency symbol or code ticker options. Assigned by liquidity providers and exchanges.|
|quantity|[cryptocurrency_quantity](#schemacryptocurrency_quantity)|true|none|The quantity of a cryptocurrency asset. This is a decimal number with a scale defined for each cryptocurrency by its founders. For example, Bitcoin (BTC) has 8 as its scale, Ethereum (ETH) has 18 as its scale. The PayPal Cryptocurrency platform handles the scale to 8 digits for Bitcoin. including its forks or offshoots, as well as Ethereum.|
|quantity_in_subunits|[cryptocurrency_subunits_quantity](#schemacryptocurrency_subunits_quantity)|false|none|The quantity of a cryptocurrency asset in the currency's sub units.<br/>Amount is an integer in a string format.<br/>Floating point should be avoided to avoid precision errors. For example: <li>Bitcoin(BTC) has 8 decimals,</li> so 1 BTC will be represented as 100000000 (1 followed by 8 zeroes). <li>Ethereum(ETH) has 18 decimals,</li> so 1 ETH will be represented as 1000000000000000000 (1 followed by 18 zeroes).|
|decimals|[cryptocurrency_decimals](#schemacryptocurrency_decimals)|false|none|The number of decimal digits supported by this cryptocurrency. For example, for Bitcoin this value is 8 because there are 10^8 satoshis in one Bitcoin and for Ethereum it's 18 since there are 10^18 wei in one Ether.|

#### Enumerated Values

|Property|Value|
|---|---|
|asset_symbol|BTC|
|asset_symbol|ETH|
|asset_symbol|BCH|
|asset_symbol|LTC|
|asset_symbol|PYUSD|
|asset_symbol|LINK|
|asset_symbol|SOL|
|asset_symbol|MATIC|

<h2 id="tocS_cryptocurrency_decimals">cryptocurrency_decimals</h2>
<!-- backwards compatibility -->
<a id="schemacryptocurrency_decimals"></a>
<a id="schema_cryptocurrency_decimals"></a>
<a id="tocScryptocurrency_decimals"></a>
<a id="tocscryptocurrency_decimals"></a>

```json
0
```

The number of decimal digits supported by this cryptocurrency. For example, for Bitcoin this value is 8 because there are 10^8 satoshis in one Bitcoin and for Ethereum it's 18 since there are 10^18 wei in one Ether.

<h2 id="tocS_cryptocurrency_quantity">cryptocurrency_quantity</h2>
<!-- backwards compatibility -->
<a id="schemacryptocurrency_quantity"></a>
<a id="schema_cryptocurrency_quantity"></a>
<a id="tocScryptocurrency_quantity"></a>
<a id="tocscryptocurrency_quantity"></a>

```json
"string"
```

The quantity of a cryptocurrency asset. This is a decimal number with a scale defined for each cryptocurrency by its founders. For example, Bitcoin (BTC) has 8 as its scale, Ethereum (ETH) has 18 as its scale. The PayPal Cryptocurrency platform handles the scale to 8 digits for Bitcoin. including its forks or offshoots, as well as Ethereum.

<h2 id="tocS_cryptocurrency_subunits_quantity">cryptocurrency_subunits_quantity</h2>
<!-- backwards compatibility -->
<a id="schemacryptocurrency_subunits_quantity"></a>
<a id="schema_cryptocurrency_subunits_quantity"></a>
<a id="tocScryptocurrency_subunits_quantity"></a>
<a id="tocscryptocurrency_subunits_quantity"></a>

```json
"string"
```

The quantity of a cryptocurrency asset in the currency's sub units.<br/>Amount is an integer in a string format.<br/>Floating point should be avoided to avoid precision errors. For example: <li>Bitcoin(BTC) has 8 decimals,</li> so 1 BTC will be represented as 100000000 (1 followed by 8 zeroes). <li>Ethereum(ETH) has 18 decimals,</li> so 1 ETH will be represented as 1000000000000000000 (1 followed by 18 zeroes).

<h2 id="tocS_cryptocurrency_symbol">cryptocurrency_symbol</h2>
<!-- backwards compatibility -->
<a id="schemacryptocurrency_symbol"></a>
<a id="schema_cryptocurrency_symbol"></a>
<a id="tocScryptocurrency_symbol"></a>
<a id="tocscryptocurrency_symbol"></a>

```json
"BTC"
```

The cryptocurrency symbol or code ticker options. Assigned by liquidity providers and exchanges.

<h2 id="tocS_currency_code">currency_code</h2>
<!-- backwards compatibility -->
<a id="schemacurrency_code"></a>
<a id="schema_currency_code"></a>
<a id="tocScurrency_code"></a>
<a id="tocscurrency_code"></a>

```json
"str"
```

The [three-character ISO-4217 currency code](/api/rest/reference/currency-codes/) that identifies the currency.

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

<h2 id="tocS_definitions-document_list">definitions-document_list</h2>
<!-- backwards compatibility -->
<a id="schemadefinitions-document_list"></a>
<a id="schema_definitions-document_list"></a>
<a id="tocSdefinitions-document_list"></a>
<a id="tocsdefinitions-document_list"></a>

```json
[
  {
    "name": "string",
    "url": "http://example.com"
  }
]
```

An array of evidence documents.

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

An array of request-related [HATEOAS links](/docs/api/reference/api-responses/#hateoas-links/).

<h2 id="tocS_definitions-sub_reasons">definitions-sub_reasons</h2>
<!-- backwards compatibility -->
<a id="schemadefinitions-sub_reasons"></a>
<a id="schema_definitions-sub_reasons"></a>
<a id="tocSdefinitions-sub_reasons"></a>
<a id="tocsdefinitions-sub_reasons"></a>

```json
"DAMAGED"
```

The sub-reason for the service issue.

<h2 id="tocS_definitions-sub_reasons_list">definitions-sub_reasons_list</h2>
<!-- backwards compatibility -->
<a id="schemadefinitions-sub_reasons_list"></a>
<a id="schema_definitions-sub_reasons_list"></a>
<a id="tocSdefinitions-sub_reasons_list"></a>
<a id="tocsdefinitions-sub_reasons_list"></a>

```json
[
  "DAMAGED"
]
```

An array of sub-reasons for the service issue.

<h2 id="tocS_deny_offer">deny_offer</h2>
<!-- backwards compatibility -->
<a id="schemadeny_offer"></a>
<a id="schema_deny_offer"></a>
<a id="tocSdeny_offer"></a>
<a id="tocsdeny_offer"></a>

```json
{
  "note": "string"
}
```

A customer request to deny the offer made by the merchant.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|note|string|true|none|The customer notes about the denial of offer. PayPal can but the merchant cannot view these notes.|

<h2 id="tocS_dispute">dispute</h2>
<!-- backwards compatibility -->
<a id="schemadispute"></a>
<a id="schema_dispute"></a>
<a id="tocSdispute"></a>
<a id="tocsdispute"></a>

```json
{
  "dispute_id": "string",
  "create_time": "stringstringstringst",
  "update_time": "stringstringstringst",
  "disputed_transactions": [
    {
      "buyer_transaction_id": "string",
      "seller_transaction_id": "string",
      "reference_id": "string",
      "create_time": "stringstringstringst",
      "transaction_status": "COMPLETED",
      "gross_amount": {
        "currency_code": "str",
        "value": "string"
      },
      "gross_asset": {
        "asset_symbol": "BTC",
        "quantity": "string",
        "quantity_in_subunits": "string",
        "decimals": 0
      },
      "invoice_number": "string",
      "custom": "string",
      "buyer": {
        "name": "string"
      },
      "seller": {
        "email": "string",
        "merchant_id": "string",
        "name": "string"
      },
      "items": [
        {
          "item_id": "string",
          "item_name": "string",
          "item_description": "string",
          "item_quantity": "string",
          "partner_transaction_id": "string",
          "reason": "MERCHANDISE_OR_SERVICE_NOT_RECEIVED",
          "dispute_amount": {
            "currency_code": "str",
            "value": "string"
          },
          "notes": "string",
          "item_type": "PRODUCT",
          "product_details": null,
          "service_details": null,
          "booking_details": null,
          "digital_download_details": null,
          "cancellation_details": null,
          "agreed_refund_details": null
        }
      ],
      "payment_processor": null
    }
  ],
  "reason": "MERCHANDISE_OR_SERVICE_NOT_RECEIVED",
  "status": "OPEN",
  "dispute_amount": {
    "currency_code": "str",
    "value": "string"
  },
  "dispute_asset": {
    "asset_symbol": "BTC",
    "quantity": "string",
    "quantity_in_subunits": "string",
    "decimals": 0
  },
  "fee_policy": {},
  "external_reason_code": "string",
  "dispute_outcome": {
    "outcome_code": "RESOLVED_BUYER_FAVOUR",
    "outcome_reason": "AMOUNT_DIFFERENCE_EXPECTED_DUE_TO_FEES",
    "amount_refunded": {
      "currency_code": "str",
      "value": "string"
    },
    "asset_refunded": {
      "asset_symbol": "BTC",
      "quantity": "string",
      "quantity_in_subunits": "string",
      "decimals": 0
    }
  },
  "adjudications": [
    {
      "type": "DENY_BUYER",
      "adjudication_time": "stringstringstringst",
      "reason": "AMOUNT_DIFFERENCE_EXPECTED_DUE_TO_FEES",
      "dispute_life_cycle_stage": "INQUIRY"
    }
  ],
  "money_movements": [
    {
      "affected_party": "SELLER",
      "amount": {
        "currency_code": "str",
        "value": "string"
      },
      "asset": {
        "asset_symbol": "BTC",
        "quantity": "string",
        "quantity_in_subunits": "string",
        "decimals": 0
      },
      "initiated_time": "stringstringstringst",
      "type": "DEBIT",
      "reason": "DISPUTE_SETTLEMENT_FEE"
    }
  ],
  "fund_movements": [
    {
      "party": "SELLER",
      "amount": {
        "currency_code": "str",
        "value": "string"
      },
      "asset": {
        "asset_symbol": "BTC",
        "quantity": "string",
        "quantity_in_subunits": "string",
        "decimals": 0
      },
      "initiated_time": "stringstringstringst",
      "type": "DEBIT",
      "reason": "REVERSED_TRANSACTION_FEE"
    }
  ],
  "dispute_life_cycle_stage": "INQUIRY",
  "dispute_channel": "INTERNAL",
  "messages": [
    {
      "posted_by": "BUYER",
      "time_posted": "stringstringstringst",
      "content": "string",
      "documents": [
        {
          "name": "string",
          "url": "http://example.com"
        }
      ]
    }
  ],
  "extensions": {
    "merchant_contacted": true,
    "merchant_contacted_outcome": "NO_RESPONSE",
    "merchant_contacted_time": "stringstringstringst",
    "merchant_contacted_mode": "WEBSITE",
    "buyer_contacted_time": "stringstringstringst",
    "buyer_contacted_channel": "string",
    "billing_dispute_properties": {
      "duplicate_transaction": {
        "received_duplicate": true,
        "original_transaction": {
          "buyer_transaction_id": "string",
          "seller_transaction_id": "string",
          "reference_id": "string",
          "create_time": "stringstringstringst",
          "transaction_status": "COMPLETED",
          "gross_amount": {
            "currency_code": "str",
            "value": "string"
          },
          "gross_asset": {
            "asset_symbol": "BTC",
            "quantity": "string",
            "quantity_in_subunits": "string",
            "decimals": 0
          },
          "invoice_number": "string",
          "custom": "string",
          "buyer": {
            "name": "string"
          },
          "seller": {
            "email": "string",
            "merchant_id": "string",
            "name": "string"
          },
          "items": [
            {
              "item_id": "string",
              "item_name": "string",
              "item_description": "string",
              "item_quantity": "string",
              "partner_transaction_id": "string",
              "reason": "MERCHANDISE_OR_SERVICE_NOT_RECEIVED",
              "dispute_amount": {
                "currency_code": "str",
                "value": "string"
              },
              "notes": "string",
              "item_type": "PRODUCT",
              "product_details": null,
              "service_details": null,
              "booking_details": null,
              "digital_download_details": null,
              "cancellation_details": null,
              "agreed_refund_details": null
            }
          ],
          "payment_processor": null
        }
      },
      "incorrect_transaction_amount": {
        "correct_transaction_amount": {
          "currency_code": "str",
          "value": "string"
        },
        "correct_transaction_asset": {
          "asset_symbol": "BTC",
          "quantity": "string",
          "quantity_in_subunits": "string",
          "decimals": 0
        },
        "correct_transaction_time": "stringstringstringst"
      },
      "payment_by_other_means": {
        "charge_different_from_original": true,
        "received_duplicate": true,
        "payment_method": "CASH",
        "payment_instrument_suffix": "stri"
      },
      "credit_not_processed": {
        "issue_type": "PRODUCT",
        "expected_refund": {
          "currency_code": "str",
          "value": "string"
        },
        "cancellation_details": {
          "cancellation_date": "stringstringstringst",
          "cancellation_number": "string",
          "cancelled": true,
          "cancellation_mode": "CANCELLED_PAYPAL_BILLING_AGREEMENT"
        },
        "product_details": {
          "description": "string",
          "product_received": "YES",
          "product_received_time": "stringstringstringst",
          "expected_delivery_date": "stringstringstringst",
          "sub_reasons": [
            "DAMAGED"
          ],
          "purchase_url": "http://example.com",
          "return_details": {
            "return_time": "stringstringstringst",
            "mode": "SHIPPED",
            "receipt": true,
            "return_confirmation_number": "string",
            "returned": true
          }
        },
        "service_details": {
          "description": "string",
          "service_started": "YES",
          "note": "string",
          "sub_reasons": [
            "DAMAGED"
          ],
          "purchase_url": "http://example.com"
        },
        "agreed_refund_details": {
          "merchant_agreed_refund": true,
          "merchant_agreed_refund_time": "stringstringstringst"
        }
      },
      "canceled_recurring_billing": {
        "expected_refund": {
          "currency_code": "str",
          "value": "string"
        },
        "cancellation_details": {
          "cancellation_date": "stringstringstringst",
          "cancellation_number": "string",
          "cancelled": true,
          "cancellation_mode": "CANCELLED_PAYPAL_BILLING_AGREEMENT"
        }
      }
    },
    "merchandize_dispute_properties": {
      "issue_type": "PRODUCT",
      "product_details": {
        "description": "string",
        "product_received": "YES",
        "product_received_time": "stringstringstringst",
        "expected_delivery_date": "stringstringstringst",
        "sub_reasons": [
          "DAMAGED"
        ],
        "purchase_url": "http://example.com",
        "return_details": {
          "return_time": "stringstringstringst",
          "mode": "SHIPPED",
          "receipt": true,
          "return_confirmation_number": "string",
          "returned": true
        }
      },
      "service_details": {
        "description": "string",
        "service_started": "YES",
        "note": "string",
        "sub_reasons": [
          "DAMAGED"
        ],
        "purchase_url": "http://example.com"
      },
      "cancellation_details": {
        "cancellation_date": "stringstringstringst",
        "cancellation_number": "string",
        "cancelled": true,
        "cancellation_mode": "CANCELLED_PAYPAL_BILLING_AGREEMENT"
      },
      "return_shipping_address": {
        "address_line_1": "string",
        "address_line_2": "string",
        "address_line_3": "string",
        "admin_area_4": "string",
        "admin_area_3": "string",
        "admin_area_2": "string",
        "admin_area_1": "string",
        "postal_code": "string",
        "country_code": "st",
        "address_details": {
          "street_number": "string",
          "street_name": "string",
          "street_type": "string",
          "delivery_service": "string",
          "building_name": "string",
          "sub_building": "string"
        }
      }
    },
    "reported_source": "EMAIL"
  },
  "evidences": [
    {
      "evidence_type": "PROOF_OF_FULFILLMENT",
      "evidence_info": {
        "tracking_info": [
          {
            "carrier_name": "UPS",
            "carrier_name_other": "string",
            "tracking_url": "http://example.com",
            "tracking_number": "string"
          }
        ],
        "refund_ids": [
          "string"
        ]
      },
      "documents": [
        {
          "name": "string",
          "url": "http://example.com"
        }
      ],
      "notes": "string",
      "source": "REQUESTED_FROM_BUYER",
      "date": "stringstringstringst",
      "item_id": "string",
      "item_type": "PRODUCT",
      "action_info": {
        "action": "ACKNOWLEDGE_RETURN_ITEM",
        "response_option": "string",
        "mandatory": true
      },
      "dispute_life_cycle_stage": "INQUIRY"
    }
  ],
  "buyer_response_due_date": "stringstringstringst",
  "seller_response_due_date": "stringstringstringst",
  "offer": {
    "buyer_requested_amount": {
      "currency_code": "str",
      "value": "string"
    },
    "seller_offered_amount": {
      "currency_code": "str",
      "value": "string"
    },
    "offer_type": "REFUND",
    "history": [
      {
        "offer_time": "stringstringstringst",
        "actor": "BUYER",
        "event_type": "PROPOSED",
        "offer_type": "REFUND",
        "offer_amount": {
          "currency_code": "str",
          "value": "string"
        },
        "notes": "string",
        "dispute_life_cycle_stage": "INQUIRY"
      }
    ]
  },
  "refund_details": {
    "allowed_refund_amount": {
      "currency_code": "str",
      "value": "string"
    }
  },
  "communication_details": {
    "email": "string",
    "note": "string",
    "time_posted": "stringstringstringst"
  },
  "supporting_info": [
    {
      "notes": "string",
      "documents": [
        {
          "name": "string",
          "url": "http://example.com"
        }
      ],
      "source": "SUBMITTED_BY_BUYER",
      "provided_time": "stringstringstringst",
      "dispute_life_cycle_stage": "INQUIRY"
    }
  ],
  "allowed_response_options": {
    "acknowledge_return_item": {
      "acknowledgement_types": [
        "ITEM_RECEIVED"
      ]
    },
    "accept_claim": {
      "accept_claim_types": [
        "REFUND"
      ]
    },
    "make_offer": {
      "offer_types": [
        "REFUND"
      ]
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

The dispute details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dispute_id|string|false|read-only|The ID of the dispute.|
|create_time|[date_time](#schemadate_time)|false|none|The date and time when the dispute was created, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). For example, *`yyyy`*-*`MM`*-*`dd`*`T`*`HH`*:*`mm`*:*`ss`*.*`SSS`*`Z`.|
|update_time|[date_time](#schemadate_time)|false|none|The date and time when the dispute was last updated, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). For example, *`yyyy`*-*`MM`*-*`dd`*`T`*`HH`*:*`mm`*:*`ss`*.*`SSS`*`Z`.|
|disputed_transactions|[transaction_info_list](#schematransaction_info_list)|false|none|An array of transactions for which disputes were created.|
|reason|[dispute_reason](#schemadispute_reason)|false|none|The reason for the item-level dispute. For information about the required information for each dispute reason and associated evidence type, see <a href="/docs/integration/direct/customer-disputes/integration-guide/#dispute-reasons">dispute reasons</a>.|
|status|[status](#schemastatus)|false|read-only|The overall status of the dispute, constant for all the parties involved at anytime during the dispute lifecycle.|
|dispute_amount|[money](#schemamoney)|false|none|The amount in the transaction that the customer originally disputed. Because customers can sometimes dispute only part of the payment, the disputed amount might be different from the total gross or net amount of the original transaction.|
|dispute_asset|[cryptocurrency](#schemacryptocurrency)|false|none|The asset in the transaction that the customer disputed.|
|fee_policy|[fee_policy](#schemafee_policy)|false|none|Policy that determines whether the fee needs to be charged, retained or returned while moving the money as part of dispute process.|
|external_reason_code|string|false|none|The code that identifies the reason for the credit card chargeback. Each card issuer follows their own standards for defining reason type, code, and its format. For more details about the external reason code, see the card issue site. Available for only unbranded transactions.|
|dispute_outcome|[dispute_outcome](#schemadispute_outcome)|false|none|The outcome of a dispute.|
|adjudications|[adjudication_list](#schemaadjudication_list)|false|none|The Teammate Adjudication details for the dispute.|
|money_movements|[money_movement_list](#schemamoney_movement_list)|false|none|**Deprecated.** DEPRECATED The Money movement details for the dispute.|
|fund_movements|[fund_movement_list](#schemafund_movement_list)|false|none|The movements of fund due to the dispute.|
|dispute_life_cycle_stage|[dispute_lifecycle_stage](#schemadispute_lifecycle_stage)|false|read-only|The stage in the dispute lifecycle.|
|dispute_channel|[dispute_channel](#schemadispute_channel)|false|read-only|The channel where the customer created the dispute.|
|messages|[message_list](#schemamessage_list)|false|none|An array of customer- or merchant-posted messages for the dispute.|
|extensions|[extensions](#schemaextensions)|false|none|The extended properties for the dispute. Includes additional information for a dispute category, such as billing disputes, the original transaction ID, and the correct amount.|
|evidences|[evidence_list](#schemaevidence_list)|false|none|An array of evidence documents.|
|buyer_response_due_date|[date_time](#schemadate_time)|false|none|The date and time by when the customer must respond to the dispute, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). If the customer does not respond by this date and time, the dispute is closed in the merchant's favor. For example, *`yyyy`*-*`MM`*-*`dd`*`T`*`HH`*:*`mm`*:*`ss`*.*`SSS`*`Z`.|
|seller_response_due_date|[date_time](#schemadate_time)|false|none|The date and time by when the merchant must respond to the dispute, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). If the merchant does not respond by this date and time, the dispute is closed in the customer's favor. For example, *`yyyy`*-*`MM`*-*`dd`*`T`*`HH`*:*`mm`*:*`ss`*.*`SSS`*`Z`.|
|offer|[offer](#schemaoffer)|false|none|The merchant-proposed offer for a dispute.|
|refund_details|[refund_details](#schemarefund_details)|false|none|The refund details.|
|communication_details|[communication_details](#schemacommunication_details)|false|none|The contact details that a merchant provides to the customer to use to share their evidence documents.|
|supporting_info|[supporting_info_list](#schemasupporting_info_list)|false|read-only|An array of all the supporting information that are associated to this dispute.|
|allowed_response_options|[allowed_response_options](#schemaallowed_response_options)|false|none|The allowed response options for the buyer/seller update actions.|
|links|[definitions-link_description_list](#schemadefinitions-link_description_list)|false|read-only|An array of request-related [HATEOAS links](/docs/api/reference/api-responses/#hateoas-links/).|

#### Enumerated Values

|Property|Value|
|---|---|
|reason|MERCHANDISE_OR_SERVICE_NOT_RECEIVED|
|reason|MERCHANDISE_OR_SERVICE_NOT_AS_DESCRIBED|
|reason|UNAUTHORISED|
|reason|CREDIT_NOT_PROCESSED|
|reason|DUPLICATE_TRANSACTION|
|reason|INCORRECT_AMOUNT|
|reason|PAYMENT_BY_OTHER_MEANS|
|reason|CANCELED_RECURRING_BILLING|
|reason|PROBLEM_WITH_REMITTANCE|
|reason|OTHER|
|status|OPEN|
|status|WAITING_FOR_BUYER_RESPONSE|
|status|WAITING_FOR_SELLER_RESPONSE|
|status|UNDER_REVIEW|
|status|RESOLVED|
|status|OTHER|
|dispute_life_cycle_stage|INQUIRY|
|dispute_life_cycle_stage|CHARGEBACK|
|dispute_life_cycle_stage|PRE_ARBITRATION|
|dispute_life_cycle_stage|ARBITRATION|
|dispute_channel|INTERNAL|
|dispute_channel|EXTERNAL|
|dispute_channel|ALERT|

<h2 id="tocS_dispute_channel">dispute_channel</h2>
<!-- backwards compatibility -->
<a id="schemadispute_channel"></a>
<a id="schema_dispute_channel"></a>
<a id="tocSdispute_channel"></a>
<a id="tocsdispute_channel"></a>

```json
"INTERNAL"
```

The channel where the customer created the dispute.

<h2 id="tocS_dispute_info">dispute_info</h2>
<!-- backwards compatibility -->
<a id="schemadispute_info"></a>
<a id="schema_dispute_info"></a>
<a id="tocSdispute_info"></a>
<a id="tocsdispute_info"></a>

```json
{
  "dispute_id": "string",
  "create_time": "stringstringstringst",
  "update_time": "stringstringstringst",
  "reason": "MERCHANDISE_OR_SERVICE_NOT_RECEIVED",
  "status": "OPEN",
  "dispute_state": "OPEN_INQUIRIES",
  "dispute_amount": {
    "currency_code": "str",
    "value": "string"
  },
  "dispute_asset": {
    "asset_symbol": "BTC",
    "quantity": "string",
    "quantity_in_subunits": "string",
    "decimals": 0
  },
  "dispute_life_cycle_stage": "INQUIRY",
  "dispute_channel": "INTERNAL",
  "buyer_response_due_date": "stringstringstringst",
  "seller_response_due_date": "stringstringstringst",
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

The dispute summary information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dispute_id|string|false|read-only|The ID of the dispute.|
|create_time|[date_time](#schemadate_time)|false|none|The date and time when the dispute was created, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). For example, *`yyyy`*-*`MM`*-*`dd`*`T`*`HH`*:*`mm`*:*`ss`*.*`SSS`*`Z`.|
|update_time|[date_time](#schemadate_time)|false|none|The date and time when the dispute was last updated, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). For example, *`yyyy`*-*`MM`*-*`dd`*`T`*`HH`*:*`mm`*:*`ss`*.*`SSS`*`Z`.|
|reason|[dispute_reason](#schemadispute_reason)|false|none|The reason for the item-level dispute. For information about the required information for each dispute reason and associated evidence type, see <a href="/docs/integration/direct/customer-disputes/integration-guide/#dispute-reasons">dispute reasons</a>.|
|status|[status](#schemastatus)|false|read-only|The overall status of the dispute, constant for all the parties involved at anytime during the dispute lifecycle.|
|dispute_state|[dispute_state](#schemadispute_state)|false|none|The user specific state of the dispute, could vary between parties during the dispute lifecycle.|
|dispute_amount|[money](#schemamoney)|false|none|The amount in the transaction that the customer originally disputed. Because customers can sometimes dispute only part of the payment, the disputed amount might be different from the total gross or net amount of the original transaction.|
|dispute_asset|[cryptocurrency](#schemacryptocurrency)|false|none|The asset in the transaction that the customer disputed.|
|dispute_life_cycle_stage|[dispute_lifecycle_stage](#schemadispute_lifecycle_stage)|false|read-only|The stage in the dispute lifecycle.|
|dispute_channel|[dispute_channel](#schemadispute_channel)|false|read-only|The channel where the customer created the dispute.|
|buyer_response_due_date|[date_time](#schemadate_time)|false|none|The date and time by when the customer must respond to the dispute, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). If the customer does not respond by this date and time, the dispute is closed in the merchant's favor. For example, *`yyyy`*-*`MM`*-*`dd`*`T`*`HH`*:*`mm`*:*`ss`*.*`SSS`*`Z`.|
|seller_response_due_date|[date_time](#schemadate_time)|false|none|The date and time by when the merchant must respond to the dispute, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). If the merchant does not respond by this date and time, the dispute is closed in the customer's favor. For example, *`yyyy`*-*`MM`*-*`dd`*`T`*`HH`*:*`mm`*:*`ss`*.*`SSS`*`Z`.|
|links|[definitions-link_description_list](#schemadefinitions-link_description_list)|false|read-only|An array of request-related [HATEOAS links](/docs/api/reference/api-responses/#hateoas-links/).|

#### Enumerated Values

|Property|Value|
|---|---|
|reason|MERCHANDISE_OR_SERVICE_NOT_RECEIVED|
|reason|MERCHANDISE_OR_SERVICE_NOT_AS_DESCRIBED|
|reason|UNAUTHORISED|
|reason|CREDIT_NOT_PROCESSED|
|reason|DUPLICATE_TRANSACTION|
|reason|INCORRECT_AMOUNT|
|reason|PAYMENT_BY_OTHER_MEANS|
|reason|CANCELED_RECURRING_BILLING|
|reason|PROBLEM_WITH_REMITTANCE|
|reason|OTHER|
|status|OPEN|
|status|WAITING_FOR_BUYER_RESPONSE|
|status|WAITING_FOR_SELLER_RESPONSE|
|status|UNDER_REVIEW|
|status|RESOLVED|
|status|OTHER|
|dispute_state|OPEN_INQUIRIES|
|dispute_state|REQUIRED_ACTION|
|dispute_state|REQUIRED_OTHER_PARTY_ACTION|
|dispute_state|UNDER_PAYPAL_REVIEW|
|dispute_state|APPEALABLE|
|dispute_state|RESOLVED|
|dispute_life_cycle_stage|INQUIRY|
|dispute_life_cycle_stage|CHARGEBACK|
|dispute_life_cycle_stage|PRE_ARBITRATION|
|dispute_life_cycle_stage|ARBITRATION|
|dispute_channel|INTERNAL|
|dispute_channel|EXTERNAL|
|dispute_channel|ALERT|

<h2 id="tocS_dispute_info_list">dispute_info_list</h2>
<!-- backwards compatibility -->
<a id="schemadispute_info_list"></a>
<a id="schema_dispute_info_list"></a>
<a id="tocSdispute_info_list"></a>
<a id="tocsdispute_info_list"></a>

```json
[
  {
    "dispute_id": "string",
    "create_time": "stringstringstringst",
    "update_time": "stringstringstringst",
    "reason": "MERCHANDISE_OR_SERVICE_NOT_RECEIVED",
    "status": "OPEN",
    "dispute_state": "OPEN_INQUIRIES",
    "dispute_amount": {
      "currency_code": "str",
      "value": "string"
    },
    "dispute_asset": {
      "asset_symbol": "BTC",
      "quantity": "string",
      "quantity_in_subunits": "string",
      "decimals": 0
    },
    "dispute_life_cycle_stage": "INQUIRY",
    "dispute_channel": "INTERNAL",
    "buyer_response_due_date": "stringstringstringst",
    "seller_response_due_date": "stringstringstringst",
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

An array of disputes that match the filter criteria. Sorted in latest to earliest creation time order.

<h2 id="tocS_dispute_lifecycle_stage">dispute_lifecycle_stage</h2>
<!-- backwards compatibility -->
<a id="schemadispute_lifecycle_stage"></a>
<a id="schema_dispute_lifecycle_stage"></a>
<a id="tocSdispute_lifecycle_stage"></a>
<a id="tocsdispute_lifecycle_stage"></a>

```json
"INQUIRY"
```

The stage in the dispute lifecycle.

<h2 id="tocS_dispute_outcome">dispute_outcome</h2>
<!-- backwards compatibility -->
<a id="schemadispute_outcome"></a>
<a id="schema_dispute_outcome"></a>
<a id="tocSdispute_outcome"></a>
<a id="tocsdispute_outcome"></a>

```json
{
  "outcome_code": "RESOLVED_BUYER_FAVOUR",
  "outcome_reason": "AMOUNT_DIFFERENCE_EXPECTED_DUE_TO_FEES",
  "amount_refunded": {
    "currency_code": "str",
    "value": "string"
  },
  "asset_refunded": {
    "asset_symbol": "BTC",
    "quantity": "string",
    "quantity_in_subunits": "string",
    "decimals": 0
  }
}
```

The outcome of a dispute.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|outcome_code|string|false|none|The outcome of a resolved dispute.|
|outcome_reason|[adjudication_reason](#schemaadjudication_reason)|false|none|The justification for the adjudication outcome.|
|amount_refunded|[money](#schemamoney)|false|none|The amount that either the merchant or PayPal refunds the customer.|
|asset_refunded|[cryptocurrency](#schemacryptocurrency)|false|none|The asset that either the merchant or PayPal refunds the customer.|

#### Enumerated Values

|Property|Value|
|---|---|
|outcome_code|RESOLVED_BUYER_FAVOUR|
|outcome_code|RESOLVED_SELLER_FAVOUR|
|outcome_code|RESOLVED_WITH_PAYOUT|
|outcome_code|CANCELED_BY_BUYER|
|outcome_code|ACCEPTED|
|outcome_code|DENIED|
|outcome_code|NONE|
|outcome_reason|AMOUNT_DIFFERENCE_EXPECTED_DUE_TO_FEES|
|outcome_reason|BILLING_AGREEMENT_CHANGE_DISCLOSED|
|outcome_reason|BILLING_AGREEMENT_CHANGE_NOT_DISCLOSED|
|outcome_reason|BILLING_AGREEMENT_DATE_CHANGE_DISCLOSED|
|outcome_reason|BILLING_AGREEMENT_DATE_CHANGE_NOT_DISCLOSED|
|outcome_reason|BUYER_ATTEMPTED_RETURN|
|outcome_reason|BUYER_BILLED_ONLY_ONCE|
|outcome_reason|BUYER_CANCELLED_CASE|
|outcome_reason|BUYER_CANCELLED_SERVICE|
|outcome_reason|BUYER_FAILED_TO_DESCRIBE_ISSUE|
|outcome_reason|BUYER_HAS_POSSESSION_OF_THE_MERCHANDISE_OR_SERVICE|
|outcome_reason|BUYER_MADE_NO_ATTEMPT_TO_RESOLVE_WITH_SELLER|
|outcome_reason|BUYER_NOT_IN_POSSESSION_OF_ITEM_TO_RETURN|
|outcome_reason|BUYER_PROVIDED_CREDIT_RECEIPT|
|outcome_reason|BUYER_RECEIVED_DUPLICATE_REFUND|
|outcome_reason|CANCELLED_PER_TERMS_OF_BILLING_AGREEMENT|
|outcome_reason|CARD_NOT_STOLEN|
|outcome_reason|CARD_NOT_STOLEN_BEFORE_AUTH|
|outcome_reason|CUSTOMER_RECOGNIZES_TRANSACTION|
|outcome_reason|DECISION_BASED_ON_AVAILABLE_INFORMATION|
|outcome_reason|DELIVERY_AFTER_EXPECTED_DELIVERY_DATE|
|outcome_reason|DELIVERY_DUE_WITHIN_EXPECTED_DELIVERY_DATE|
|outcome_reason|DELIVERY_OR_SERVICE_REFUSED|
|outcome_reason|DOCUMENTATION_MATCHES_AMOUNT_CHARGED|
|outcome_reason|DOCUMENTATION_MATCHES_AMOUNT_IN_PAYPAL_ACCOUNT|
|outcome_reason|DUPLICATE_ADD_FUNDS|
|outcome_reason|EFFORTLESS_SELLER_PROTECTION|
|outcome_reason|IN_PERSON_DELIVERY|
|outcome_reason|INELIGIBLE_BUYER_PROTECTION_POLICY|
|outcome_reason|INELIGIBLE_SELLER_PROTECTION_POLICY|
|outcome_reason|INQUIRY_OFFER_ITEM_REPLACED|
|outcome_reason|INQUIRY_OFFER_PARTIAL_REFUND|
|outcome_reason|INQUIRY_OFFER_REFUND_WITH_ITEM_RETURN|
|outcome_reason|INQUIRY_OFFER_REFUND_WITH_REPLACEMENT|
|outcome_reason|INVALID_APPEAL_REASON|
|outcome_reason|INVALID_CHARGEBACK_SELLER_FAVOUR|
|outcome_reason|INVALID_DELIVERY_PROOF|
|outcome_reason|INVALID_DELIVERY_PROOF_SIGNATURE|
|outcome_reason|INVALID_DOCUMENTATION|
|outcome_reason|INVALID_PROOF_OF_SHIPMENT|
|outcome_reason|INVALID_REFUND_PROOF|
|outcome_reason|INVALID_RETURN_DELIVERY_NO_SIGNATURE_PROOF|
|outcome_reason|INVALID_RETURN_DELIVERY_PROOF|
|outcome_reason|INVALID_TRACKING|
|outcome_reason|ITEM_ALTERED_REPAIRED|
|outcome_reason|ITEM_NOT_AS_ADVERTISED|
|outcome_reason|ITEM_NOT_AS_DESCRIBED|
|outcome_reason|ITEM_NOT_DAMAGED|
|outcome_reason|ITEM_NOT_DELIVERED|
|outcome_reason|ITEM_NOT_RETURNED_TO_SELLER|
|outcome_reason|ITEM_NOT_SHIPPED|
|outcome_reason|ITEM_OF_DIFFERENT_QUALITY_OR_QUANTITY|
|outcome_reason|ITEM_OUT_OF_STOCK_AND_NOT_DELIVERED|
|outcome_reason|ITEM_RETURNED_TO_SELLER|
|outcome_reason|ITEM_SERVICE_MISREPRESENTED|
|outcome_reason|ITEM_SERVICE_NOT_MISREPRESENTED|
|outcome_reason|ITEM_SERVICE_RECEIVED_BY_BUYER|
|outcome_reason|ITEM_SOLD_AS_DESCRIBED|
|outcome_reason|ITEM_VALUE_UNAFFECTED|
|outcome_reason|MULTIPLE_APPEALS_WITH_SAME_REASON|
|outcome_reason|NO_DOCUMENTATION_FROM_BUYER|
|outcome_reason|NO_DOCUMENTATION_SUPPORTING_DUE_OF_CREDIT|
|outcome_reason|NO_PROOF_OF_DELIVERY|
|outcome_reason|NO_PROOF_OF_DELIVERY_INTANGIBLE|
|outcome_reason|NO_PROTECTION_FOR_DIGITAL_GOODS_SERVICE|
|outcome_reason|NO_RESPONSE_FROM_BUYER|
|outcome_reason|NO_RESPONSE_FROM_BUYER_FOR_ADDITIONAL_INFO_REQUEST|
|outcome_reason|NO_SELLER_RESPONSE|
|outcome_reason|NO_SELLER_RESPONSE_FOR_ADDITIONAL_INFO_REQUEST|
|outcome_reason|NO_VALID_SHIPMENT_PROOF|
|outcome_reason|NOT_A_BILLING_ERROR|
|outcome_reason|NOT_AN_UNAUTHORIZED_TRANSACTION|
|outcome_reason|NOT_DUPLICATE_FUNDS_ADDED_ONCE|
|outcome_reason|NOT_DUPLICATE_FUNDS_WITHDRAWN_ONCE|
|outcome_reason|NOT_SHIPPED_TO_CORRECT_ADDRESS|
|outcome_reason|PARTIAL_REFUND_ISSUED_FOR_MISSING_ITEMS|
|outcome_reason|PARTIAL_REFUND_OFFER_ACCEPTED|
|outcome_reason|PAYMENT_REVERSED_ALREADY|
|outcome_reason|POS_SUBMITTED_INSTEAD_OF_POD|
|outcome_reason|PREAUTH_INSTALLMENT_DUE|
|outcome_reason|PROOF_OF_BILLING_AFTER_CANCELLATION_ACCEPTED|
|outcome_reason|PROOF_OF_DUPLICATE_DENIED_OR_INSUFFICIENT|
|outcome_reason|PROOF_OF_INCORRECT_TRANSACTION_AMOUNT_ACCEPTED|
|outcome_reason|PROOF_OF_PAID_BY_OTHER_MEANS_NOT_SUBMITTED|
|outcome_reason|PROOF_OF_TRACKING_NOT_SUBMITTED|
|outcome_reason|PROTECTED_BY_PAYPAL|
|outcome_reason|REPRESENTED_BY_PAYPAL|
|outcome_reason|SELLER_ACCEPTED_MULTIPLE_PAYMENTS|
|outcome_reason|SELLER_AGREED_REFUND_WITHOUT_RETURN|
|outcome_reason|SELLER_AGREED_TO_ISSUE_CREDIT|
|outcome_reason|SELLER_ISSUED_CREDIT_TO_BUYER|
|outcome_reason|SELLER_ISSUED_REFUND|
|outcome_reason|SELLER_NOT_REACHABLE|
|outcome_reason|SELLER_RECEIVED_PAYMENT_TWICE_OR_FOR_REPLACEMENT|
|outcome_reason|SELLER_REFUSED_REFUND|
|outcome_reason|SELLER_REFUSED_RETURN|
|outcome_reason|SELLER_SURCHARGED_BUYER|
|outcome_reason|SERVICE_NOT_COMPLETED_AS_AGREED|
|outcome_reason|SHIPPING_COMPANY_WONT_SHIP|
|outcome_reason|TRACKING_PROOF_NOT_ENOUGH|
|outcome_reason|TRANSACTION_AUTHORIZED_BY_CARDHOLDER|
|outcome_reason|TRANSACTION_CANCELLED_AFTER_AUTHORIZATION_DATE|
|outcome_reason|TRANSACTION_CANCELLED_BEFORE_SHIPMENT_SERVICE_DATE|
|outcome_reason|TRANSACTION_MATCHES_BUYER_SPENDING_PATTERN|
|outcome_reason|TRANSACTION_PROCESSED_CORRECTLY|
|outcome_reason|TRUSTED_BUYER_PAYOUT|
|outcome_reason|UNUSED_SHIPPING_LABEL|
|outcome_reason|VALID_PROOF_OF_DELIVERY|
|outcome_reason|VALID_PROOF_OF_DELIVERY_WITH_SIGNATURE|
|outcome_reason|VALID_PROOF_OF_REFUND|
|outcome_reason|VALID_PROOF_SUPPORTING_CLAIM|
|outcome_reason|VALID_RETURN_DELIVERY_PROOF|
|outcome_reason|VALID_RETURN_DELIVERY_PROOF_WITH_SIGNATURE|
|outcome_reason|VALID_SHIPMENT_PROOF|
|outcome_reason|VALUE_AFFECTED_SIGNIFICANTLY|
|outcome_reason|PROTECTION_POLICY_APPLIES|
|outcome_reason|SNAD_DELAYED_FILING|
|outcome_reason|FUNDS_TRANSFERRED_TO_INCORRECT_RECIPIENT|

<h2 id="tocS_dispute_reason">dispute_reason</h2>
<!-- backwards compatibility -->
<a id="schemadispute_reason"></a>
<a id="schema_dispute_reason"></a>
<a id="tocSdispute_reason"></a>
<a id="tocsdispute_reason"></a>

```json
"MERCHANDISE_OR_SERVICE_NOT_RECEIVED"
```

The reason for the item-level dispute. For information about the required information for each dispute reason and associated evidence type, see <a href="/docs/integration/direct/customer-disputes/integration-guide/#dispute-reasons">dispute reasons</a>.

<h2 id="tocS_dispute_search">dispute_search</h2>
<!-- backwards compatibility -->
<a id="schemadispute_search"></a>
<a id="schema_dispute_search"></a>
<a id="tocSdispute_search"></a>
<a id="tocsdispute_search"></a>

```json
{
  "items": [
    {
      "dispute_id": "string",
      "create_time": "stringstringstringst",
      "update_time": "stringstringstringst",
      "reason": "MERCHANDISE_OR_SERVICE_NOT_RECEIVED",
      "status": "OPEN",
      "dispute_state": "OPEN_INQUIRIES",
      "dispute_amount": {
        "currency_code": "str",
        "value": "string"
      },
      "dispute_asset": {
        "asset_symbol": "BTC",
        "quantity": "string",
        "quantity_in_subunits": "string",
        "decimals": 0
      },
      "dispute_life_cycle_stage": "INQUIRY",
      "dispute_channel": "INTERNAL",
      "buyer_response_due_date": "stringstringstringst",
      "seller_response_due_date": "stringstringstringst",
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

An array of disputes. Includes links that enable you to navigate through the response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[dispute_info_list](#schemadispute_info_list)|false|none|An array of disputes that match the filter criteria. Sorted in latest to earliest creation time order.|
|links|[definitions-link_description_list](#schemadefinitions-link_description_list)|false|read-only|An array of request-related [HATEOAS links](/docs/api/reference/api-responses/#hateoas-links/).|

<h2 id="tocS_dispute_source">dispute_source</h2>
<!-- backwards compatibility -->
<a id="schemadispute_source"></a>
<a id="schema_dispute_source"></a>
<a id="tocSdispute_source"></a>
<a id="tocsdispute_source"></a>

```json
"EMAIL"
```

The dispute source through which customer initiated the dispute.

<h2 id="tocS_dispute_state">dispute_state</h2>
<!-- backwards compatibility -->
<a id="schemadispute_state"></a>
<a id="schema_dispute_state"></a>
<a id="tocSdispute_state"></a>
<a id="tocsdispute_state"></a>

```json
"OPEN_INQUIRIES"
```

The user specific state of the dispute, could vary between parties during the dispute lifecycle.

<h2 id="tocS_document">document</h2>
<!-- backwards compatibility -->
<a id="schemadocument"></a>
<a id="schema_document"></a>
<a id="tocSdocument"></a>
<a id="tocsdocument"></a>

```json
{
  "name": "string",
  "url": "http://example.com"
}
```

An uploaded document as a binary object that supports a dispute.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The document name.|
|url|string(uri)|false|read-only|The downloadable URL for the document for which the client has access.<br/><br/><blockquote><strong>Note:</strong> Document download may require some configuration setup and available as a limited release at this time. For more information, reach out to your PayPal account manager.</blockquote>.|

<h2 id="tocS_document_list">document_list</h2>
<!-- backwards compatibility -->
<a id="schemadocument_list"></a>
<a id="schema_document_list"></a>
<a id="tocSdocument_list"></a>
<a id="tocsdocument_list"></a>

```json
[
  {
    "name": "string",
    "url": "http://example.com"
  }
]
```

An array of metadata for the documents which contains any additional info about the message posted.

<h2 id="tocS_duplicate_transaction">duplicate_transaction</h2>
<!-- backwards compatibility -->
<a id="schemaduplicate_transaction"></a>
<a id="schema_duplicate_transaction"></a>
<a id="tocSduplicate_transaction"></a>
<a id="tocsduplicate_transaction"></a>

```json
{
  "received_duplicate": true,
  "original_transaction": {
    "buyer_transaction_id": "string",
    "seller_transaction_id": "string",
    "reference_id": "string",
    "create_time": "stringstringstringst",
    "transaction_status": "COMPLETED",
    "gross_amount": {
      "currency_code": "str",
      "value": "string"
    },
    "gross_asset": {
      "asset_symbol": "BTC",
      "quantity": "string",
      "quantity_in_subunits": "string",
      "decimals": 0
    },
    "invoice_number": "string",
    "custom": "string",
    "buyer": {
      "name": "string"
    },
    "seller": {
      "email": "string",
      "merchant_id": "string",
      "name": "string"
    },
    "items": [
      {
        "item_id": "string",
        "item_name": "string",
        "item_description": "string",
        "item_quantity": "string",
        "partner_transaction_id": "string",
        "reason": "MERCHANDISE_OR_SERVICE_NOT_RECEIVED",
        "dispute_amount": {
          "currency_code": "str",
          "value": "string"
        },
        "notes": "string",
        "item_type": "PRODUCT",
        "product_details": null,
        "service_details": null,
        "booking_details": null,
        "digital_download_details": null,
        "cancellation_details": null,
        "agreed_refund_details": null
      }
    ],
    "payment_processor": null
  }
}
```

The duplicate transaction details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|received_duplicate|boolean|false|none|If `true`, indicates that a duplicate transaction was received.|
|original_transaction|[transaction_info](#schematransaction_info)|false|none|The transaction details for the original transaction, when the dispute reason is `DUPLICATE_TRANSACTION`. Currently, contains only the date and amount.|

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
|links|[link_description_list](#schemalink_description_list)|false|read-only|An array of request-related [HATEOAS links](/api/rest/responses/#hateoas-links).|

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

<h2 id="tocS_escalate">escalate</h2>
<!-- backwards compatibility -->
<a id="schemaescalate"></a>
<a id="schema_escalate"></a>
<a id="tocSescalate"></a>
<a id="tocsescalate"></a>

```json
{
  "note": "string",
  "buyer_escalation_reason": null
}
```

A merchant request to escalate a dispute, by ID, to a PayPal claim.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|note|string|false|none|The notes about the escalation of the dispute to a claim.|
|buyer_escalation_reason|[buyer_escalation_reason](#schemabuyer_escalation_reason)|false|none|none|

<h2 id="tocS_escalate_response">escalate_response</h2>
<!-- backwards compatibility -->
<a id="schemaescalate_response"></a>
<a id="schema_escalate_response"></a>
<a id="tocSescalate_response"></a>
<a id="tocsescalate_response"></a>

```json
{
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

The response for escalate action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|links|[definitions-link_description_list](#schemadefinitions-link_description_list)|false|read-only|An array of request-related [HATEOAS links](/docs/api/reference/api-responses/#hateoas-links/).|

<h2 id="tocS_evidence">evidence</h2>
<!-- backwards compatibility -->
<a id="schemaevidence"></a>
<a id="schema_evidence"></a>
<a id="tocSevidence"></a>
<a id="tocsevidence"></a>

```json
{
  "evidence_type": "PROOF_OF_FULFILLMENT",
  "evidence_info": {
    "tracking_info": [
      {
        "carrier_name": "UPS",
        "carrier_name_other": "string",
        "tracking_url": "http://example.com",
        "tracking_number": "string"
      }
    ],
    "refund_ids": [
      "string"
    ]
  },
  "documents": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ],
  "notes": "string",
  "source": "REQUESTED_FROM_BUYER",
  "date": "stringstringstringst",
  "item_id": "string",
  "item_type": "PRODUCT",
  "action_info": {
    "action": "ACKNOWLEDGE_RETURN_ITEM",
    "response_option": "string",
    "mandatory": true
  },
  "dispute_life_cycle_stage": "INQUIRY"
}
```

A merchant- or customer-submitted evidence document. evidence_info is expected for PROOF_OF_FULFILLMENT,PROOF_OF_REFUND and PROOF_OF_RETURN evidence types. documents and notes can be given for rest of the evidence types.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|evidence_type|string|false|none|The evidence type.|
|evidence_info|[evidence_info](#schemaevidence_info)|false|none|The evidence-related information.|
|documents|[definitions-document_list](#schemadefinitions-document_list)|false|none|An array of evidence documents.|
|notes|string|false|none|Any evidence-related notes.|
|source|string|false|read-only|The source of the evidence.|
|date|[date_time](#schemadate_time)|false|none|The date and time when the evidence was received, in [Internet date and time format](http://tools.ietf.org/html/rfc3339#section-5.6).|
|item_id|string|false|none|The item ID. If the merchant provides multiple pieces of evidence and the transaction has multiple item IDs, the merchant can use this value to associate a piece of evidence with an item ID.|
|item_type|[item_type](#schemaitem_type)|false|none|The item type for which the evidence is requested or submitted.|
|action_info|[action_info](#schemaaction_info)|false|none|The action details for the information. Includes additional information such as the action for which the evidence was requested/submitted, and whether the evidence is mandatory for the corresponding action.|
|dispute_life_cycle_stage|[dispute_lifecycle_stage](#schemadispute_lifecycle_stage)|false|read-only|The dispute life cycle stage for the evidence.|

#### Enumerated Values

|Property|Value|
|---|---|
|evidence_type|PROOF_OF_FULFILLMENT|
|evidence_type|PROOF_OF_REFUND|
|evidence_type|PROOF_OF_DELIVERY_SIGNATURE|
|evidence_type|PROOF_OF_RECEIPT_COPY|
|evidence_type|RETURN_POLICY|
|evidence_type|BILLING_AGREEMENT|
|evidence_type|PROOF_OF_RESHIPMENT|
|evidence_type|ITEM_DESCRIPTION|
|evidence_type|POLICE_REPORT|
|evidence_type|AFFIDAVIT|
|evidence_type|PAID_WITH_OTHER_METHOD|
|evidence_type|COPY_OF_CONTRACT|
|evidence_type|TERMINAL_ATM_RECEIPT|
|evidence_type|PRICE_DIFFERENCE_REASON|
|evidence_type|SOURCE_CONVERSION_RATE|
|evidence_type|BANK_STATEMENT|
|evidence_type|CREDIT_DUE_REASON|
|evidence_type|REQUEST_CREDIT_RECEIPT|
|evidence_type|PROOF_OF_RETURN|
|evidence_type|CREATE|
|evidence_type|CHANGE_REASON|
|evidence_type|PROOF_OF_REFUND_OUTSIDE_PAYPAL|
|evidence_type|RECEIPT_OF_MERCHANDISE|
|evidence_type|CUSTOMS_DOCUMENT|
|evidence_type|CUSTOMS_FEE_RECEIPT|
|evidence_type|INFORMATION_ON_RESOLUTION|
|evidence_type|ADDITIONAL_INFORMATION_OF_ITEM|
|evidence_type|DETAILS_OF_PURCHASE|
|evidence_type|PROOF_OF_SIGNIFICANT_DIFFERENCE|
|evidence_type|PROOF_OF_SOFTWARE_OR_SERVICE_NOT_AS_DESCRIBED|
|evidence_type|PROOF_OF_CONFISCATION|
|evidence_type|PROOF_OF_DAMAGE|
|evidence_type|COPY_OF_LAW_ENFORCEMENT_AGENCY_REPORT|
|evidence_type|ADDITIONAL_PROOF_OF_SHIPMENT|
|evidence_type|PROOF_OF_DENIAL_BY_CARRIER|
|evidence_type|THIRDPARTY_PROOF_FOR_DAMAGE_OR_SIGNIFICANT_DIFFERENCE|
|evidence_type|VALID_SUPPORTING_DOCUMENT|
|evidence_type|LEGIBLE_SUPPORTING_DOCUMENT|
|evidence_type|RETURN_TRACKING_INFORMATION|
|evidence_type|DELIVERY_RECEIPT|
|evidence_type|PROOF_OF_INSTORE_RECEIPT|
|evidence_type|ADDITIONAL_TRACKING_INFORMATION|
|evidence_type|PROOF_OF_SHIPMENT_POSTAGE|
|evidence_type|ONLINE_TRACKING_INFORMATION|
|evidence_type|PROOF_OF_INSTORE_REFUND|
|evidence_type|PROOF_FOR_SOFTWARE_OR_SERVICE_DELIVERED|
|evidence_type|RETURN_ADDRESS_FOR_SHIPPING|
|evidence_type|COPY_OF_THE_EPARCEL_MANIFEST|
|evidence_type|COPY_OF_SHIPPING_MANIFEST|
|evidence_type|APPEAL_AFFIDAVIT|
|evidence_type|RECEIPT_OF_REPLACEMENT|
|evidence_type|COPY_OF_DRIVERS_LICENSE|
|evidence_type|ACCOUNT_CHANGE_INFORMATION|
|evidence_type|DELIVERY_ADDRESS|
|evidence_type|CONFIRMATION_OF_RESOLUTION|
|evidence_type|MERCHANT_RESPONSE|
|evidence_type|PERMISSION_DESCRIPTION|
|evidence_type|STATUS_OF_MERCHANDISE|
|evidence_type|LOST_CARD_DETAILS|
|evidence_type|LAST_VALID_TRANSACTION_DETAILS|
|evidence_type|ADDITIONAL_PROOF_OF_RETURN|
|evidence_type|DECLARATION|
|evidence_type|PROOF_OF_MISSING_ITEMS|
|evidence_type|PROOF_OF_EMPTY_PACKAGE_OR_DIFFERENT_ITEM|
|evidence_type|PROOF_OF_ITEM_NOT_RECEIVED|
|evidence_type|ORDER_DETAILS|
|evidence_type|LISTING_URL|
|evidence_type|SHIPPING_INSURANCE|
|evidence_type|BUYER_RESPONSE|
|evidence_type|PHOTOS_OF_SHIPPED_ITEM|
|evidence_type|OTHER|
|evidence_type|CANCELLATION_DETAILS|
|evidence_type|MERCHANT_CONTACT_DETAILS|
|evidence_type|ITEM_DETAILS|
|evidence_type|CORRECT_RECIPIENT_INFORMATION|
|evidence_type|EXPLANATION_OF_FUNDS_NOT_DELIVERED|
|source|REQUESTED_FROM_BUYER|
|source|REQUESTED_FROM_SELLER|
|source|SUBMITTED_BY_BUYER|
|source|SUBMITTED_BY_SELLER|
|source|SUBMITTED_BY_PARTNER|
|item_type|PRODUCT|
|item_type|SERVICE|
|item_type|BOOKING|
|item_type|DIGITAL_DOWNLOAD|
|dispute_life_cycle_stage|INQUIRY|
|dispute_life_cycle_stage|CHARGEBACK|
|dispute_life_cycle_stage|PRE_ARBITRATION|
|dispute_life_cycle_stage|ARBITRATION|

<h2 id="tocS_evidence_info">evidence_info</h2>
<!-- backwards compatibility -->
<a id="schemaevidence_info"></a>
<a id="schema_evidence_info"></a>
<a id="tocSevidence_info"></a>
<a id="tocsevidence_info"></a>

```json
{
  "tracking_info": [
    {
      "carrier_name": "UPS",
      "carrier_name_other": "string",
      "tracking_url": "http://example.com",
      "tracking_number": "string"
    }
  ],
  "refund_ids": [
    "string"
  ]
}
```

The evidence-related information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tracking_info|[tracking_info_list](#schematracking_info_list)|false|none|An array of relevant tracking information for the transaction involved in this dispute.|
|refund_ids|[refund_ids_list](#schemarefund_ids_list)|false|none|An array of refund IDs for the transaction involved in this dispute.|

<h2 id="tocS_evidence_list">evidence_list</h2>
<!-- backwards compatibility -->
<a id="schemaevidence_list"></a>
<a id="schema_evidence_list"></a>
<a id="tocSevidence_list"></a>
<a id="tocsevidence_list"></a>

```json
[
  {
    "evidence_type": "PROOF_OF_FULFILLMENT",
    "evidence_info": {
      "tracking_info": [
        {
          "carrier_name": "UPS",
          "carrier_name_other": "string",
          "tracking_url": "http://example.com",
          "tracking_number": "string"
        }
      ],
      "refund_ids": [
        "string"
      ]
    },
    "documents": [
      {
        "name": "string",
        "url": "http://example.com"
      }
    ],
    "notes": "string",
    "source": "REQUESTED_FROM_BUYER",
    "date": "stringstringstringst",
    "item_id": "string",
    "item_type": "PRODUCT",
    "action_info": {
      "action": "ACKNOWLEDGE_RETURN_ITEM",
      "response_option": "string",
      "mandatory": true
    },
    "dispute_life_cycle_stage": "INQUIRY"
  }
]
```

An array of evidence documents.

<h2 id="tocS_extensions">extensions</h2>
<!-- backwards compatibility -->
<a id="schemaextensions"></a>
<a id="schema_extensions"></a>
<a id="tocSextensions"></a>
<a id="tocsextensions"></a>

```json
{
  "merchant_contacted": true,
  "merchant_contacted_outcome": "NO_RESPONSE",
  "merchant_contacted_time": "stringstringstringst",
  "merchant_contacted_mode": "WEBSITE",
  "buyer_contacted_time": "stringstringstringst",
  "buyer_contacted_channel": "string",
  "billing_dispute_properties": {
    "duplicate_transaction": {
      "received_duplicate": true,
      "original_transaction": {
        "buyer_transaction_id": "string",
        "seller_transaction_id": "string",
        "reference_id": "string",
        "create_time": "stringstringstringst",
        "transaction_status": "COMPLETED",
        "gross_amount": {
          "currency_code": "str",
          "value": "string"
        },
        "gross_asset": {
          "asset_symbol": "BTC",
          "quantity": "string",
          "quantity_in_subunits": "string",
          "decimals": 0
        },
        "invoice_number": "string",
        "custom": "string",
        "buyer": {
          "name": "string"
        },
        "seller": {
          "email": "string",
          "merchant_id": "string",
          "name": "string"
        },
        "items": [
          {
            "item_id": "string",
            "item_name": "string",
            "item_description": "string",
            "item_quantity": "string",
            "partner_transaction_id": "string",
            "reason": "MERCHANDISE_OR_SERVICE_NOT_RECEIVED",
            "dispute_amount": {
              "currency_code": "str",
              "value": "string"
            },
            "notes": "string",
            "item_type": "PRODUCT",
            "product_details": null,
            "service_details": null,
            "booking_details": null,
            "digital_download_details": null,
            "cancellation_details": null,
            "agreed_refund_details": null
          }
        ],
        "payment_processor": null
      }
    },
    "incorrect_transaction_amount": {
      "correct_transaction_amount": {
        "currency_code": "str",
        "value": "string"
      },
      "correct_transaction_asset": {
        "asset_symbol": "BTC",
        "quantity": "string",
        "quantity_in_subunits": "string",
        "decimals": 0
      },
      "correct_transaction_time": "stringstringstringst"
    },
    "payment_by_other_means": {
      "charge_different_from_original": true,
      "received_duplicate": true,
      "payment_method": "CASH",
      "payment_instrument_suffix": "stri"
    },
    "credit_not_processed": {
      "issue_type": "PRODUCT",
      "expected_refund": {
        "currency_code": "str",
        "value": "string"
      },
      "cancellation_details": {
        "cancellation_date": "stringstringstringst",
        "cancellation_number": "string",
        "cancelled": true,
        "cancellation_mode": "CANCELLED_PAYPAL_BILLING_AGREEMENT"
      },
      "product_details": {
        "description": "string",
        "product_received": "YES",
        "product_received_time": "stringstringstringst",
        "expected_delivery_date": "stringstringstringst",
        "sub_reasons": [
          "DAMAGED"
        ],
        "purchase_url": "http://example.com",
        "return_details": {
          "return_time": "stringstringstringst",
          "mode": "SHIPPED",
          "receipt": true,
          "return_confirmation_number": "string",
          "returned": true
        }
      },
      "service_details": {
        "description": "string",
        "service_started": "YES",
        "note": "string",
        "sub_reasons": [
          "DAMAGED"
        ],
        "purchase_url": "http://example.com"
      },
      "agreed_refund_details": {
        "merchant_agreed_refund": true,
        "merchant_agreed_refund_time": "stringstringstringst"
      }
    },
    "canceled_recurring_billing": {
      "expected_refund": {
        "currency_code": "str",
        "value": "string"
      },
      "cancellation_details": {
        "cancellation_date": "stringstringstringst",
        "cancellation_number": "string",
        "cancelled": true,
        "cancellation_mode": "CANCELLED_PAYPAL_BILLING_AGREEMENT"
      }
    }
  },
  "merchandize_dispute_properties": {
    "issue_type": "PRODUCT",
    "product_details": {
      "description": "string",
      "product_received": "YES",
      "product_received_time": "stringstringstringst",
      "expected_delivery_date": "stringstringstringst",
      "sub_reasons": [
        "DAMAGED"
      ],
      "purchase_url": "http://example.com",
      "return_details": {
        "return_time": "stringstringstringst",
        "mode": "SHIPPED",
        "receipt": true,
        "return_confirmation_number": "string",
        "returned": true
      }
    },
    "service_details": {
      "description": "string",
      "service_started": "YES",
      "note": "string",
      "sub_reasons": [
        "DAMAGED"
      ],
      "purchase_url": "http://example.com"
    },
    "cancellation_details": {
      "cancellation_date": "stringstringstringst",
      "cancellation_number": "string",
      "cancelled": true,
      "cancellation_mode": "CANCELLED_PAYPAL_BILLING_AGREEMENT"
    },
    "return_shipping_address": {
      "address_line_1": "string",
      "address_line_2": "string",
      "address_line_3": "string",
      "admin_area_4": "string",
      "admin_area_3": "string",
      "admin_area_2": "string",
      "admin_area_1": "string",
      "postal_code": "string",
      "country_code": "st",
      "address_details": {
        "street_number": "string",
        "street_name": "string",
        "street_type": "string",
        "delivery_service": "string",
        "building_name": "string",
        "sub_building": "string"
      }
    }
  },
  "reported_source": "EMAIL"
}
```

The extended properties for the dispute. Includes additional information for a dispute category, such as billing disputes, the original transaction ID, and the correct amount.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|merchant_contacted|boolean|false|none|Indicates that the merchant was contacted.|
|merchant_contacted_outcome|[merchant_contacted_outcome](#schemamerchant_contacted_outcome)|false|none|The outcome when the customer has contacted the merchant.|
|merchant_contacted_time|[date_time](#schemadate_time)|false|none|The date and time when merchant was contacted.|
|merchant_contacted_mode|[merchant_contacted_mode](#schemamerchant_contacted_mode)|false|none|The method used to contact the merchant.|
|buyer_contacted_time|[date_time](#schemadate_time)|false|none|The date and time when the buyer contacted the partner to file a dispute, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). For example, *`yyyy`*-*`MM`*-*`dd`*`T`*`HH`*:*`mm`*:*`ss`*.*`SSS`*`Z`.|
|buyer_contacted_channel|string|false|none|The channel through which the buyer contacted the partner to file a dispute. Partners that allow buyers to create dispute from multiple channels can use this field to help identify which channel was used for each individual dispute.|
|billing_dispute_properties|[billing_disputes_properties](#schemabilling_disputes_properties)|false|none|The billing issue details.|
|merchandize_dispute_properties|[merchandize_dispute_properties](#schemamerchandize_dispute_properties)|false|none|The customer-provided merchandise issue details for the dispute.|
|reported_source|[dispute_source](#schemadispute_source)|false|none|The dispute source through which customer initiated the dispute.|

#### Enumerated Values

|Property|Value|
|---|---|
|merchant_contacted_outcome|NO_RESPONSE|
|merchant_contacted_outcome|FIXED|
|merchant_contacted_outcome|NOT_FIXED|
|merchant_contacted_mode|WEBSITE|
|merchant_contacted_mode|PHONE|
|merchant_contacted_mode|EMAIL|
|merchant_contacted_mode|WRITTEN|
|merchant_contacted_mode|IN_PERSON|
|reported_source|EMAIL|
|reported_source|WEB|
|reported_source|CHAT|
|reported_source|IVR|
|reported_source|PHONE|
|reported_source|MOBILE_APP|
|reported_source|MOBILE_WEB|
|reported_source|API|

<h2 id="tocS_fee_policy">fee_policy</h2>
<!-- backwards compatibility -->
<a id="schemafee_policy"></a>
<a id="schema_fee_policy"></a>
<a id="tocSfee_policy"></a>
<a id="tocsfee_policy"></a>

```json
{}
```

Policy that determines whether the fee needs to be charged, retained or returned while moving the money as part of dispute process.

<h2 id="tocS_fund_movement">fund_movement</h2>
<!-- backwards compatibility -->
<a id="schemafund_movement"></a>
<a id="schema_fund_movement"></a>
<a id="tocSfund_movement"></a>
<a id="tocsfund_movement"></a>

```json
{
  "party": "SELLER",
  "amount": {
    "currency_code": "str",
    "value": "string"
  },
  "asset": {
    "asset_symbol": "BTC",
    "quantity": "string",
    "quantity_in_subunits": "string",
    "decimals": 0
  },
  "initiated_time": "stringstringstringst",
  "type": "DEBIT",
  "reason": "REVERSED_TRANSACTION_FEE"
}
```

This section contains the details about the fund movement of the parties ,time , direction and the reason for it.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|party|string|false|none|The affected party in the money movement.|
|amount|[money](#schemamoney)|false|none|The amount transferred as part of the money movement.|
|asset|[cryptocurrency](#schemacryptocurrency)|false|none|The asset transferred as part of the money movement.|
|initiated_time|[date_time](#schemadate_time)|false|none|The date and time when the money movement was initiated, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).|
|type|string|false|none|The type of the money movement.|
|reason|[fund_movement_reason](#schemafund_movement_reason)|false|none|The reason for the fund movement.|

#### Enumerated Values

|Property|Value|
|---|---|
|party|SELLER|
|party|BUYER|
|party|PAYMENT_PROCESSOR|
|type|DEBIT|
|type|CREDIT|
|reason|REVERSED_TRANSACTION_FEE|
|reason|DISPUTE_SETTLEMENT|
|reason|DISPUTE_FEE|
|reason|CHARGEBACK_FEE|

<h2 id="tocS_fund_movement_list">fund_movement_list</h2>
<!-- backwards compatibility -->
<a id="schemafund_movement_list"></a>
<a id="schema_fund_movement_list"></a>
<a id="tocSfund_movement_list"></a>
<a id="tocsfund_movement_list"></a>

```json
[
  {
    "party": "SELLER",
    "amount": {
      "currency_code": "str",
      "value": "string"
    },
    "asset": {
      "asset_symbol": "BTC",
      "quantity": "string",
      "quantity_in_subunits": "string",
      "decimals": 0
    },
    "initiated_time": "stringstringstringst",
    "type": "DEBIT",
    "reason": "REVERSED_TRANSACTION_FEE"
  }
]
```

The movements of fund due to the dispute.

<h2 id="tocS_fund_movement_reason">fund_movement_reason</h2>
<!-- backwards compatibility -->
<a id="schemafund_movement_reason"></a>
<a id="schema_fund_movement_reason"></a>
<a id="tocSfund_movement_reason"></a>
<a id="tocsfund_movement_reason"></a>

```json
"REVERSED_TRANSACTION_FEE"
```

The reason for the fund movement.

<h2 id="tocS_incorrect_transaction_amount">incorrect_transaction_amount</h2>
<!-- backwards compatibility -->
<a id="schemaincorrect_transaction_amount"></a>
<a id="schema_incorrect_transaction_amount"></a>
<a id="tocSincorrect_transaction_amount"></a>
<a id="tocsincorrect_transaction_amount"></a>

```json
{
  "correct_transaction_amount": {
    "currency_code": "str",
    "value": "string"
  },
  "correct_transaction_asset": {
    "asset_symbol": "BTC",
    "quantity": "string",
    "quantity_in_subunits": "string",
    "decimals": 0
  },
  "correct_transaction_time": "stringstringstringst"
}
```

The incorrect transaction amount details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|correct_transaction_amount|[money](#schemamoney)|false|none|The currency and amount for a financial transaction, such as a balance or payment due.|
|correct_transaction_asset|[cryptocurrency](#schemacryptocurrency)|false|none|The correct asset quantity of the transaction.|
|correct_transaction_time|[date_time](#schemadate_time)|false|none|The date and time when the customer created the transaction, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).|

<h2 id="tocS_item_agreed_refund_details">item_agreed_refund_details</h2>
<!-- backwards compatibility -->
<a id="schemaitem_agreed_refund_details"></a>
<a id="schema_item_agreed_refund_details"></a>
<a id="tocSitem_agreed_refund_details"></a>
<a id="tocsitem_agreed_refund_details"></a>

```json
null
```

<h2 id="tocS_item_booking_details">item_booking_details</h2>
<!-- backwards compatibility -->
<a id="schemaitem_booking_details"></a>
<a id="schema_item_booking_details"></a>
<a id="tocSitem_booking_details"></a>
<a id="tocsitem_booking_details"></a>

```json
null
```

<h2 id="tocS_item_cancellation_details">item_cancellation_details</h2>
<!-- backwards compatibility -->
<a id="schemaitem_cancellation_details"></a>
<a id="schema_item_cancellation_details"></a>
<a id="tocSitem_cancellation_details"></a>
<a id="tocsitem_cancellation_details"></a>

```json
null
```

<h2 id="tocS_item_digital_download_details">item_digital_download_details</h2>
<!-- backwards compatibility -->
<a id="schemaitem_digital_download_details"></a>
<a id="schema_item_digital_download_details"></a>
<a id="tocSitem_digital_download_details"></a>
<a id="tocsitem_digital_download_details"></a>

```json
null
```

<h2 id="tocS_item_info">item_info</h2>
<!-- backwards compatibility -->
<a id="schemaitem_info"></a>
<a id="schema_item_info"></a>
<a id="tocSitem_info"></a>
<a id="tocsitem_info"></a>

```json
{
  "item_id": "string",
  "item_name": "string",
  "item_description": "string",
  "item_quantity": "string",
  "partner_transaction_id": "string",
  "reason": "MERCHANDISE_OR_SERVICE_NOT_RECEIVED",
  "dispute_amount": {
    "currency_code": "str",
    "value": "string"
  },
  "notes": "string",
  "item_type": "PRODUCT",
  "product_details": null,
  "service_details": null,
  "booking_details": null,
  "digital_download_details": null,
  "cancellation_details": null,
  "agreed_refund_details": null
}
```

The information for a purchased item in a disputed transaction.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|item_id|string|false|none|The item ID. If the merchant provides multiple pieces of evidence and the transaction has multiple item IDs, the merchant can use this value to associate a piece of evidence with an item ID.|
|item_name|string|false|none|The item name.|
|item_description|string|false|none|The item description.|
|item_quantity|string|false|none|The count of the item in the dispute. Must be a whole number.|
|partner_transaction_id|string|false|none|The ID of the transaction in the partner system. The partner transaction ID is returned at an item level because the partner might show different transactions for different items in the cart.|
|reason|[dispute_reason](#schemadispute_reason)|false|none|The reason for the item-level dispute. For information about the required information for each dispute reason and associated evidence type, see <a href="/docs/integration/direct/customer-disputes/integration-guide/#dispute-reasons">dispute reasons</a>.|
|dispute_amount|[money](#schemamoney)|false|none|The amount of the item in the dispute.|
|notes|string|false|none|Any notes provided with the item.|
|item_type|[item_type](#schemaitem_type)|false|none|The type of the item which has the issue.|
|product_details|[item_product_details](#schemaitem_product_details)|false|none|none|
|service_details|[item_service_details](#schemaitem_service_details)|false|none|none|
|booking_details|[item_booking_details](#schemaitem_booking_details)|false|none|none|
|digital_download_details|[item_digital_download_details](#schemaitem_digital_download_details)|false|none|none|
|cancellation_details|[item_cancellation_details](#schemaitem_cancellation_details)|false|none|none|
|agreed_refund_details|[item_agreed_refund_details](#schemaitem_agreed_refund_details)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|reason|MERCHANDISE_OR_SERVICE_NOT_RECEIVED|
|reason|MERCHANDISE_OR_SERVICE_NOT_AS_DESCRIBED|
|reason|UNAUTHORISED|
|reason|CREDIT_NOT_PROCESSED|
|reason|DUPLICATE_TRANSACTION|
|reason|INCORRECT_AMOUNT|
|reason|PAYMENT_BY_OTHER_MEANS|
|reason|CANCELED_RECURRING_BILLING|
|reason|PROBLEM_WITH_REMITTANCE|
|reason|OTHER|
|item_type|PRODUCT|
|item_type|SERVICE|
|item_type|BOOKING|
|item_type|DIGITAL_DOWNLOAD|

<h2 id="tocS_item_info_list">item_info_list</h2>
<!-- backwards compatibility -->
<a id="schemaitem_info_list"></a>
<a id="schema_item_info_list"></a>
<a id="tocSitem_info_list"></a>
<a id="tocsitem_info_list"></a>

```json
[
  {
    "item_id": "string",
    "item_name": "string",
    "item_description": "string",
    "item_quantity": "string",
    "partner_transaction_id": "string",
    "reason": "MERCHANDISE_OR_SERVICE_NOT_RECEIVED",
    "dispute_amount": {
      "currency_code": "str",
      "value": "string"
    },
    "notes": "string",
    "item_type": "PRODUCT",
    "product_details": null,
    "service_details": null,
    "booking_details": null,
    "digital_download_details": null,
    "cancellation_details": null,
    "agreed_refund_details": null
  }
]
```

An array of items that were purchased as part of the transaction.

<h2 id="tocS_item_product_details">item_product_details</h2>
<!-- backwards compatibility -->
<a id="schemaitem_product_details"></a>
<a id="schema_item_product_details"></a>
<a id="tocSitem_product_details"></a>
<a id="tocsitem_product_details"></a>

```json
null
```

<h2 id="tocS_item_service_details">item_service_details</h2>
<!-- backwards compatibility -->
<a id="schemaitem_service_details"></a>
<a id="schema_item_service_details"></a>
<a id="tocSitem_service_details"></a>
<a id="tocsitem_service_details"></a>

```json
null
```

<h2 id="tocS_item_type">item_type</h2>
<!-- backwards compatibility -->
<a id="schemaitem_type"></a>
<a id="schema_item_type"></a>
<a id="tocSitem_type"></a>
<a id="tocsitem_type"></a>

```json
"PRODUCT"
```

The type of the item which has the issue.

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

<h2 id="tocS_make_offer">make_offer</h2>
<!-- backwards compatibility -->
<a id="schemamake_offer"></a>
<a id="schema_make_offer"></a>
<a id="tocSmake_offer"></a>
<a id="tocsmake_offer"></a>

```json
{
  "note": "string",
  "offer_amount": {
    "currency_code": "str",
    "value": "string"
  },
  "return_shipping_address": {
    "address_line_1": "string",
    "address_line_2": "string",
    "address_line_3": "string",
    "admin_area_4": "string",
    "admin_area_3": "string",
    "admin_area_2": "string",
    "admin_area_1": "string",
    "postal_code": "string",
    "country_code": "st",
    "address_details": {
      "street_number": "string",
      "street_name": "string",
      "street_type": "string",
      "delivery_service": "string",
      "building_name": "string",
      "sub_building": "string"
    }
  },
  "invoice_id": "string",
  "offer_type": "REFUND"
}
```

A merchant request to make an offer to resolve a dispute.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|note|string|true|none|The merchant's notes about the offer.|
|offer_amount|[money](#schemamoney)|false|none|The amount proposed to resolve the dispute.|
|return_shipping_address|[address_portable](#schemaaddress_portable)|false|none|The return address for the item. Required when the customer must return an item to the merchant for the <code>MERCHANDISE_OR_SERVICE_NOT_AS_DESCRIBED</code> dispute reason, especially if the refund amount is less than the dispute amount.|
|invoice_id|string|false|none|The merchant-provided ID of the invoice for the refund. This optional value maps the refund to an invoice ID in the merchant's system.|
|offer_type|[offer_type](#schemaoffer_type)|true|none|The merchant-proposed offer type for the dispute.|

#### Enumerated Values

|Property|Value|
|---|---|
|offer_type|REFUND|
|offer_type|REFUND_WITH_RETURN|
|offer_type|REFUND_WITH_REPLACEMENT|
|offer_type|REPLACEMENT_WITHOUT_REFUND|

<h2 id="tocS_make_offer_response_options">make_offer_response_options</h2>
<!-- backwards compatibility -->
<a id="schemamake_offer_response_options"></a>
<a id="schema_make_offer_response_options"></a>
<a id="tocSmake_offer_response_options"></a>
<a id="tocsmake_offer_response_options"></a>

```json
{
  "offer_types": [
    "REFUND"
  ]
}
```

The allowed response options when the merchant makes offer to the customer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|offer_types|[offer_type_list](#schemaoffer_type_list)|false|none|The types of offer the merchant can offer the customer.|

#### Enumerated Values

|Property|Value|
|---|---|
|offer_types|REFUND|
|offer_types|REFUND_WITH_RETURN|
|offer_types|REFUND_WITH_REPLACEMENT|
|offer_types|REPLACEMENT_WITHOUT_REFUND|

<h2 id="tocS_merchandize_dispute_properties">merchandize_dispute_properties</h2>
<!-- backwards compatibility -->
<a id="schemamerchandize_dispute_properties"></a>
<a id="schema_merchandize_dispute_properties"></a>
<a id="tocSmerchandize_dispute_properties"></a>
<a id="tocsmerchandize_dispute_properties"></a>

```json
{
  "issue_type": "PRODUCT",
  "product_details": {
    "description": "string",
    "product_received": "YES",
    "product_received_time": "stringstringstringst",
    "expected_delivery_date": "stringstringstringst",
    "sub_reasons": [
      "DAMAGED"
    ],
    "purchase_url": "http://example.com",
    "return_details": {
      "return_time": "stringstringstringst",
      "mode": "SHIPPED",
      "receipt": true,
      "return_confirmation_number": "string",
      "returned": true
    }
  },
  "service_details": {
    "description": "string",
    "service_started": "YES",
    "note": "string",
    "sub_reasons": [
      "DAMAGED"
    ],
    "purchase_url": "http://example.com"
  },
  "cancellation_details": {
    "cancellation_date": "stringstringstringst",
    "cancellation_number": "string",
    "cancelled": true,
    "cancellation_mode": "CANCELLED_PAYPAL_BILLING_AGREEMENT"
  },
  "return_shipping_address": {
    "address_line_1": "string",
    "address_line_2": "string",
    "address_line_3": "string",
    "admin_area_4": "string",
    "admin_area_3": "string",
    "admin_area_2": "string",
    "admin_area_1": "string",
    "postal_code": "string",
    "country_code": "st",
    "address_details": {
      "street_number": "string",
      "street_name": "string",
      "street_type": "string",
      "delivery_service": "string",
      "building_name": "string",
      "sub_building": "string"
    }
  }
}
```

The customer-provided merchandise issue details for the dispute.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|issue_type|string|false|none|The issue type.|
|product_details|[product_details](#schemaproduct_details)|false|none|The product information.|
|service_details|[service_details](#schemaservice_details)|false|none|The service details.|
|cancellation_details|[cancellation_details](#schemacancellation_details)|false|none|The cancellation details.|
|return_shipping_address|[address_portable](#schemaaddress_portable)|false|none|The return address for the item. Required when the customer must return an item to the merchant for the <a href="/docs/integration/direct/customer-disputes/integration-guide/#merchandise_or_service_not_as_described"><code>MERCHANDISE_OR_SERVICE_NOT_AS_DESCRIBED</code></a> dispute reason.|

#### Enumerated Values

|Property|Value|
|---|---|
|issue_type|PRODUCT|
|issue_type|SERVICE|

<h2 id="tocS_merchant_contacted_mode">merchant_contacted_mode</h2>
<!-- backwards compatibility -->
<a id="schemamerchant_contacted_mode"></a>
<a id="schema_merchant_contacted_mode"></a>
<a id="tocSmerchant_contacted_mode"></a>
<a id="tocsmerchant_contacted_mode"></a>

```json
"WEBSITE"
```

The method used to contact the merchant.

<h2 id="tocS_merchant_contacted_outcome">merchant_contacted_outcome</h2>
<!-- backwards compatibility -->
<a id="schemamerchant_contacted_outcome"></a>
<a id="schema_merchant_contacted_outcome"></a>
<a id="tocSmerchant_contacted_outcome"></a>
<a id="tocsmerchant_contacted_outcome"></a>

```json
"NO_RESPONSE"
```

The outcome when the customer has contacted the merchant.

<h2 id="tocS_message">message</h2>
<!-- backwards compatibility -->
<a id="schemamessage"></a>
<a id="schema_message"></a>
<a id="tocSmessage"></a>
<a id="tocsmessage"></a>

```json
{
  "posted_by": "BUYER",
  "time_posted": "stringstringstringst",
  "content": "string",
  "documents": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ]
}
```

A customer- or merchant-posted message for the dispute.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|posted_by|string|false|read-only|Indicates whether the customer, merchant, or dispute arbiter posted the message.|
|time_posted|[date_time](#schemadate_time)|false|none|The date and time when the message was posted, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).|
|content|string|false|none|The message text.|
|documents|[document_list](#schemadocument_list)|false|read-only|An array of metadata for the documents which contains any additional info about the message posted.|

#### Enumerated Values

|Property|Value|
|---|---|
|posted_by|BUYER|
|posted_by|SELLER|
|posted_by|ARBITER|

<h2 id="tocS_message_list">message_list</h2>
<!-- backwards compatibility -->
<a id="schemamessage_list"></a>
<a id="schema_message_list"></a>
<a id="tocSmessage_list"></a>
<a id="tocsmessage_list"></a>

```json
[
  {
    "posted_by": "BUYER",
    "time_posted": "stringstringstringst",
    "content": "string",
    "documents": [
      {
        "name": "string",
        "url": "http://example.com"
      }
    ]
  }
]
```

An array of customer- or merchant-posted messages for the dispute.

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
|currency_code|[currency_code](#schemacurrency_code)|true|none|The [three-character ISO-4217 currency code](/api/rest/reference/currency-codes/) that identifies the currency.|
|value|string|true|none|The value, which might be:<ul><li>An integer for currencies like `JPY` that are not typically fractional.</li><li>A decimal fraction for currencies like `TND` that are subdivided into thousandths.</li></ul>For the required number of decimal places for a currency code, see [Currency Codes](/api/rest/reference/currency-codes/).|

<h2 id="tocS_money_movement">money_movement</h2>
<!-- backwards compatibility -->
<a id="schemamoney_movement"></a>
<a id="schema_money_movement"></a>
<a id="tocSmoney_movement"></a>
<a id="tocsmoney_movement"></a>

```json
{
  "affected_party": "SELLER",
  "amount": {
    "currency_code": "str",
    "value": "string"
  },
  "asset": {
    "asset_symbol": "BTC",
    "quantity": "string",
    "quantity_in_subunits": "string",
    "decimals": 0
  },
  "initiated_time": "stringstringstringst",
  "type": "DEBIT",
  "reason": "DISPUTE_SETTLEMENT_FEE"
}
```

The Money movement details with party.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|affected_party|string|false|none|The affected party in the money movement.|
|amount|[money](#schemamoney)|false|none|The amount transferred as part of the money movement.|
|asset|[cryptocurrency](#schemacryptocurrency)|false|none|The asset transferred as part of the money movement.|
|initiated_time|[date_time](#schemadate_time)|false|none|The date and time when the money movement was initiated, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).|
|type|string|false|none|The type of the money movement.|
|reason|[money_movement_reason](#schemamoney_movement_reason)|false|none|**Deprecated.** The reason for the money movement.|

#### Enumerated Values

|Property|Value|
|---|---|
|affected_party|SELLER|
|affected_party|BUYER|
|affected_party|PAYMENT_PROCESSOR|
|type|DEBIT|
|type|CREDIT|
|reason|DISPUTE_SETTLEMENT_FEE|
|reason|DISPUTE_SETTLEMENT|
|reason|DISPUTE_FEE|
|reason|CHARGEBACK_FEE|

<h2 id="tocS_money_movement_list">money_movement_list</h2>
<!-- backwards compatibility -->
<a id="schemamoney_movement_list"></a>
<a id="schema_money_movement_list"></a>
<a id="tocSmoney_movement_list"></a>
<a id="tocsmoney_movement_list"></a>

```json
[
  {
    "affected_party": "SELLER",
    "amount": {
      "currency_code": "str",
      "value": "string"
    },
    "asset": {
      "asset_symbol": "BTC",
      "quantity": "string",
      "quantity_in_subunits": "string",
      "decimals": 0
    },
    "initiated_time": "stringstringstringst",
    "type": "DEBIT",
    "reason": "DISPUTE_SETTLEMENT_FEE"
  }
]
```

DEPRECATED The Money movement details for the dispute.

<h2 id="tocS_money_movement_reason">money_movement_reason</h2>
<!-- backwards compatibility -->
<a id="schemamoney_movement_reason"></a>
<a id="schema_money_movement_reason"></a>
<a id="tocSmoney_movement_reason"></a>
<a id="tocsmoney_movement_reason"></a>

```json
"DISPUTE_SETTLEMENT_FEE"
```

The reason for the money movement.

<h2 id="tocS_offer">offer</h2>
<!-- backwards compatibility -->
<a id="schemaoffer"></a>
<a id="schema_offer"></a>
<a id="tocSoffer"></a>
<a id="tocsoffer"></a>

```json
{
  "buyer_requested_amount": {
    "currency_code": "str",
    "value": "string"
  },
  "seller_offered_amount": {
    "currency_code": "str",
    "value": "string"
  },
  "offer_type": "REFUND",
  "history": [
    {
      "offer_time": "stringstringstringst",
      "actor": "BUYER",
      "event_type": "PROPOSED",
      "offer_type": "REFUND",
      "offer_amount": {
        "currency_code": "str",
        "value": "string"
      },
      "notes": "string",
      "dispute_life_cycle_stage": "INQUIRY"
    }
  ]
}
```

The merchant-proposed offer for a dispute.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|buyer_requested_amount|[money](#schemamoney)|false|none|The customer-requested refund for this dispute.|
|seller_offered_amount|[money](#schemamoney)|false|none|The merchant-offered refund for this dispute.|
|offer_type|[offer_type](#schemaoffer_type)|false|none|The merchant-proposed offer type for the dispute.|
|history|[offer_history_list](#schemaoffer_history_list)|false|none|An array of history information for an offer.|

#### Enumerated Values

|Property|Value|
|---|---|
|offer_type|REFUND|
|offer_type|REFUND_WITH_RETURN|
|offer_type|REFUND_WITH_REPLACEMENT|
|offer_type|REPLACEMENT_WITHOUT_REFUND|

<h2 id="tocS_offer_history">offer_history</h2>
<!-- backwards compatibility -->
<a id="schemaoffer_history"></a>
<a id="schema_offer_history"></a>
<a id="tocSoffer_history"></a>
<a id="tocsoffer_history"></a>

```json
{
  "offer_time": "stringstringstringst",
  "actor": "BUYER",
  "event_type": "PROPOSED",
  "offer_type": "REFUND",
  "offer_amount": {
    "currency_code": "str",
    "value": "string"
  },
  "notes": "string",
  "dispute_life_cycle_stage": "INQUIRY"
}
```

The offer history.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|offer_time|[date_time](#schemadate_time)|false|none|The date and time when the event occurred, in [Internet date and time format](http://tools.ietf.org/html/rfc3339#section-5.6).|
|actor|string|false|none|The event-related actor.|
|event_type|string|false|none|The type of the history event.|
|offer_type|[offer_type](#schemaoffer_type)|false|none|The merchant-proposed offer type for the dispute.|
|offer_amount|[money](#schemamoney)|false|none|The offer amount.|
|notes|string|false|read-only|The user submitted notes.|
|dispute_life_cycle_stage|[dispute_lifecycle_stage](#schemadispute_lifecycle_stage)|false|read-only|The dispute life cycle stage during the offer event.|

#### Enumerated Values

|Property|Value|
|---|---|
|actor|BUYER|
|actor|SELLER|
|event_type|PROPOSED|
|event_type|ACCEPTED|
|event_type|DENIED|
|offer_type|REFUND|
|offer_type|REFUND_WITH_RETURN|
|offer_type|REFUND_WITH_REPLACEMENT|
|offer_type|REPLACEMENT_WITHOUT_REFUND|
|dispute_life_cycle_stage|INQUIRY|
|dispute_life_cycle_stage|CHARGEBACK|
|dispute_life_cycle_stage|PRE_ARBITRATION|
|dispute_life_cycle_stage|ARBITRATION|

<h2 id="tocS_offer_history_list">offer_history_list</h2>
<!-- backwards compatibility -->
<a id="schemaoffer_history_list"></a>
<a id="schema_offer_history_list"></a>
<a id="tocSoffer_history_list"></a>
<a id="tocsoffer_history_list"></a>

```json
[
  {
    "offer_time": "stringstringstringst",
    "actor": "BUYER",
    "event_type": "PROPOSED",
    "offer_type": "REFUND",
    "offer_amount": {
      "currency_code": "str",
      "value": "string"
    },
    "notes": "string",
    "dispute_life_cycle_stage": "INQUIRY"
  }
]
```

An array of history information for an offer.

<h2 id="tocS_offer_type">offer_type</h2>
<!-- backwards compatibility -->
<a id="schemaoffer_type"></a>
<a id="schema_offer_type"></a>
<a id="tocSoffer_type"></a>
<a id="tocsoffer_type"></a>

```json
"REFUND"
```

The merchant-proposed offer type for the dispute.

<h2 id="tocS_offer_type_list">offer_type_list</h2>
<!-- backwards compatibility -->
<a id="schemaoffer_type_list"></a>
<a id="schema_offer_type_list"></a>
<a id="tocSoffer_type_list"></a>
<a id="tocsoffer_type_list"></a>

```json
[
  "REFUND"
]
```

The types of offer the merchant can offer the customer.

<h2 id="tocS_patch">patch</h2>
<!-- backwards compatibility -->
<a id="schemapatch"></a>
<a id="schema_patch"></a>
<a id="tocSpatch"></a>
<a id="tocspatch"></a>

```json
{
  "op": "add",
  "path": "string",
  "value": null,
  "from": "string"
}
```

The JSON patch object to apply partial updates to resources.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|op|string|true|none|The operation.|
|path|string|false|none|The <a href="https://tools.ietf.org/html/rfc6901">JSON Pointer</a> to the target document location at which to complete the operation.|
|value|object|false|none|The value to apply. The <code>remove</code>, <code>copy</code>, and <code>move</code> operations do not require a value. Since <a href="https://www.rfc-editor.org/rfc/rfc69021">JSON Patch</a> allows any type for <code>value</code>, the <code>type</code> property is not specified.|
|from|string|false|none|The <a href="https://tools.ietf.org/html/rfc6901">JSON Pointer</a> to the target document location from which to move the value. Required for the <code>move</code> operation.|

#### Enumerated Values

|Property|Value|
|---|---|
|op|add|
|op|remove|
|op|replace|
|op|move|
|op|copy|
|op|test|

<h2 id="tocS_patch_request">patch_request</h2>
<!-- backwards compatibility -->
<a id="schemapatch_request"></a>
<a id="schema_patch_request"></a>
<a id="tocSpatch_request"></a>
<a id="tocspatch_request"></a>

```json
[
  {
    "op": "add",
    "path": "string",
    "value": null,
    "from": "string"
  }
]
```

An array of JSON patch objects to apply partial updates to resources.

<h2 id="tocS_payment_by_other_means">payment_by_other_means</h2>
<!-- backwards compatibility -->
<a id="schemapayment_by_other_means"></a>
<a id="schema_payment_by_other_means"></a>
<a id="tocSpayment_by_other_means"></a>
<a id="tocspayment_by_other_means"></a>

```json
{
  "charge_different_from_original": true,
  "received_duplicate": true,
  "payment_method": "CASH",
  "payment_instrument_suffix": "stri"
}
```

The payment by other means details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|charge_different_from_original|boolean|false|none|If `true`, indicates that a charge was made that is different from the original charge.|
|received_duplicate|boolean|false|none|If `true`, indicates that a duplicate transaction was received.|
|payment_method|string|false|none|The payment method.|
|payment_instrument_suffix|string|false|none|Last 2-4 characters of the payment instrument. For payment_method CHECK, payment_instrument_suffix entered must be of minimum length 2-4 characters. For payment_method CREDIT_CARD, DEBIT_CARD, GIFT_CARD, BANK_TRANSFER, payment_instrument_suffix entered must be of length 4.|

#### Enumerated Values

|Property|Value|
|---|---|
|payment_method|CASH|
|payment_method|CREDIT_CARD|
|payment_method|CHECK|
|payment_method|PAYPAL|
|payment_method|DEBIT_CARD|
|payment_method|GIFT_CARD|
|payment_method|BANK_TRANSFER|

<h2 id="tocS_payment_processor">payment_processor</h2>
<!-- backwards compatibility -->
<a id="schemapayment_processor"></a>
<a id="schema_payment_processor"></a>
<a id="tocSpayment_processor"></a>
<a id="tocspayment_processor"></a>

```json
null
```

<h2 id="tocS_product_details">product_details</h2>
<!-- backwards compatibility -->
<a id="schemaproduct_details"></a>
<a id="schema_product_details"></a>
<a id="tocSproduct_details"></a>
<a id="tocsproduct_details"></a>

```json
{
  "description": "string",
  "product_received": "YES",
  "product_received_time": "stringstringstringst",
  "expected_delivery_date": "stringstringstringst",
  "sub_reasons": [
    "DAMAGED"
  ],
  "purchase_url": "http://example.com",
  "return_details": {
    "return_time": "stringstringstringst",
    "mode": "SHIPPED",
    "receipt": true,
    "return_confirmation_number": "string",
    "returned": true
  }
}
```

The product information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|The product description.|
|product_received|string|false|none|Indicates whether the product was, or was not, received or returned.|
|product_received_time|[date_time](#schemadate_time)|false|none|The date and time when product was delivered.|
|expected_delivery_date|[date_time](#schemadate_time)|false|none|The expected delivery date and time of the product.|
|sub_reasons|[sub_reasons_list](#schemasub_reasons_list)|false|none|An array of sub-reasons for the product issue.|
|purchase_url|string(uri)|false|none|The URL where the customer purchased the product.|
|return_details|[return_details](#schemareturn_details)|false|none|The return details for the product.|

#### Enumerated Values

|Property|Value|
|---|---|
|product_received|YES|
|product_received|NO|
|product_received|RETURNED|
|sub_reasons|DAMAGED|
|sub_reasons|DIFFERENT|
|sub_reasons|MISSING_PARTS|
|sub_reasons|OTHER|

<h2 id="tocS_refund_details">refund_details</h2>
<!-- backwards compatibility -->
<a id="schemarefund_details"></a>
<a id="schema_refund_details"></a>
<a id="tocSrefund_details"></a>
<a id="tocsrefund_details"></a>

```json
{
  "allowed_refund_amount": {
    "currency_code": "str",
    "value": "string"
  }
}
```

The refund details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowed_refund_amount|[money](#schemamoney)|false|none|The maximum refundable amount.|

<h2 id="tocS_refund_ids">refund_ids</h2>
<!-- backwards compatibility -->
<a id="schemarefund_ids"></a>
<a id="schema_refund_ids"></a>
<a id="tocSrefund_ids"></a>
<a id="tocsrefund_ids"></a>

```json
"string"
```

The ID of the refunded transaction.

<h2 id="tocS_refund_ids_list">refund_ids_list</h2>
<!-- backwards compatibility -->
<a id="schemarefund_ids_list"></a>
<a id="schema_refund_ids_list"></a>
<a id="tocSrefund_ids_list"></a>
<a id="tocsrefund_ids_list"></a>

```json
[
  "string"
]
```

An array of refund IDs for the transaction involved in this dispute.

<h2 id="tocS_require_evidence">require_evidence</h2>
<!-- backwards compatibility -->
<a id="schemarequire_evidence"></a>
<a id="schema_require_evidence"></a>
<a id="tocSrequire_evidence"></a>
<a id="tocsrequire_evidence"></a>

```json
{
  "action": "BUYER_EVIDENCE"
}
```

Sandbox only. Updates the state of a dispute, by ID, to either <code>WAITING_FOR_BUYER_RESPONSE</code> or <code>WAITING_FOR_SELLER_RESPONSE</code>. This state change enables either the customer or merchant to submit evidence for the dispute. Specify an <code>action</code> value in the JSON request body to indicate whether the state change enables the customer or merchant to submit evidence.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|The action. Indicates whether the state change enables the customer or merchant to submit evidence.|

#### Enumerated Values

|Property|Value|
|---|---|
|action|BUYER_EVIDENCE|
|action|SELLER_EVIDENCE|

<h2 id="tocS_return_details">return_details</h2>
<!-- backwards compatibility -->
<a id="schemareturn_details"></a>
<a id="schema_return_details"></a>
<a id="tocSreturn_details"></a>
<a id="tocsreturn_details"></a>

```json
{
  "return_time": "stringstringstringst",
  "mode": "SHIPPED",
  "receipt": true,
  "return_confirmation_number": "string",
  "returned": true
}
```

The return details for the product.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|return_time|[date_time](#schemadate_time)|false|none|The date and time when the product was returned, [Internet date and time format](http://tools.ietf.org/html/rfc3339#section-5.6).|
|mode|string|false|none|The method that the customer used to return the product.|
|receipt|boolean|false|none|Indicates whether customer has the return receipt.|
|return_confirmation_number|string|false|none|The confirmation number for the item return.|
|returned|boolean|false|none|If `true`, indicates that the item was returned but the seller refused to accept the return and if `false`, indicates the item was not attempted to return.|

#### Enumerated Values

|Property|Value|
|---|---|
|mode|SHIPPED|
|mode|IN_PERSON|

<h2 id="tocS_seller">seller</h2>
<!-- backwards compatibility -->
<a id="schemaseller"></a>
<a id="schema_seller"></a>
<a id="tocSseller"></a>
<a id="tocsseller"></a>

```json
{
  "email": "string",
  "merchant_id": "string",
  "name": "string"
}
```

The details for the merchant who receives the funds and fulfills the order. For example, merchant ID, and contact email address.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|[email_address](#schemaemail_address)|false|none|The email address for the merchant's PayPal account.|
|merchant_id|string|false|none|The PayPal account ID for the merchant.|
|name|string|false|none|The name of the merchant.|

<h2 id="tocS_service_details">service_details</h2>
<!-- backwards compatibility -->
<a id="schemaservice_details"></a>
<a id="schema_service_details"></a>
<a id="tocSservice_details"></a>
<a id="tocsservice_details"></a>

```json
{
  "description": "string",
  "service_started": "YES",
  "note": "string",
  "sub_reasons": [
    "DAMAGED"
  ],
  "purchase_url": "http://example.com"
}
```

The service details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|The service description.|
|service_started|string|false|none|Indicates whether the service was started or cancelled.|
|note|string|false|none|The customer specified note about the service usage.|
|sub_reasons|[definitions-sub_reasons_list](#schemadefinitions-sub_reasons_list)|false|none|An array of sub-reasons for the service issue.|
|purchase_url|string(uri)|false|none|The URL of the merchant or marketplace site where the customer purchased the service.|

#### Enumerated Values

|Property|Value|
|---|---|
|service_started|YES|
|service_started|NO|
|service_started|CANCELLED|
|sub_reasons|DAMAGED|
|sub_reasons|DIFFERENT|
|sub_reasons|INCOMPLETE|
|sub_reasons|OTHER|

<h2 id="tocS_status">status</h2>
<!-- backwards compatibility -->
<a id="schemastatus"></a>
<a id="schema_status"></a>
<a id="tocSstatus"></a>
<a id="tocsstatus"></a>

```json
"OPEN"
```

The overall status of the dispute, constant for all the parties involved at anytime during the dispute lifecycle.

<h2 id="tocS_sub_reasons">sub_reasons</h2>
<!-- backwards compatibility -->
<a id="schemasub_reasons"></a>
<a id="schema_sub_reasons"></a>
<a id="tocSsub_reasons"></a>
<a id="tocssub_reasons"></a>

```json
"DAMAGED"
```

The sub-reason for the product issue.

<h2 id="tocS_sub_reasons_list">sub_reasons_list</h2>
<!-- backwards compatibility -->
<a id="schemasub_reasons_list"></a>
<a id="schema_sub_reasons_list"></a>
<a id="tocSsub_reasons_list"></a>
<a id="tocssub_reasons_list"></a>

```json
[
  "DAMAGED"
]
```

An array of sub-reasons for the product issue.

<h2 id="tocS_subsequent_action">subsequent_action</h2>
<!-- backwards compatibility -->
<a id="schemasubsequent_action"></a>
<a id="schema_subsequent_action"></a>
<a id="tocSsubsequent_action"></a>
<a id="tocssubsequent_action"></a>

```json
{
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

The subsequent action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|links|[definitions-link_description_list](#schemadefinitions-link_description_list)|false|read-only|An array of request-related [HATEOAS links](/docs/api/reference/api-responses/#hateoas-links/).|

<h2 id="tocS_supporting_info">supporting_info</h2>
<!-- backwards compatibility -->
<a id="schemasupporting_info"></a>
<a id="schema_supporting_info"></a>
<a id="tocSsupporting_info"></a>
<a id="tocssupporting_info"></a>

```json
{
  "notes": "string",
  "documents": [
    {
      "name": "string",
      "url": "http://example.com"
    }
  ],
  "source": "SUBMITTED_BY_BUYER",
  "provided_time": "stringstringstringst",
  "dispute_life_cycle_stage": "INQUIRY"
}
```

A merchant- or customer-submitted supporting information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|notes|string|false|read-only|Any supporting notes.|
|documents|[supporting_info_definitions-document_list](#schemasupporting_info_definitions-document_list)|false|read-only|An array of metadata for the documents which were uploaded as supporting information for the dispute.|
|source|string|false|read-only|The source of the Information.|
|provided_time|[date_time](#schemadate_time)|false|none|The date and time when the information was received, in [Internet date and time format](http://tools.ietf.org/html/rfc3339#section-5.6).|
|dispute_life_cycle_stage|[dispute_lifecycle_stage](#schemadispute_lifecycle_stage)|false|read-only|The dispute life cycle stage for the supporting info.|

#### Enumerated Values

|Property|Value|
|---|---|
|source|SUBMITTED_BY_BUYER|
|source|SUBMITTED_BY_SELLER|
|source|SUBMITTED_BY_PARTNER|
|dispute_life_cycle_stage|INQUIRY|
|dispute_life_cycle_stage|CHARGEBACK|
|dispute_life_cycle_stage|PRE_ARBITRATION|
|dispute_life_cycle_stage|ARBITRATION|

<h2 id="tocS_supporting_info_definitions-document_list">supporting_info_definitions-document_list</h2>
<!-- backwards compatibility -->
<a id="schemasupporting_info_definitions-document_list"></a>
<a id="schema_supporting_info_definitions-document_list"></a>
<a id="tocSsupporting_info_definitions-document_list"></a>
<a id="tocssupporting_info_definitions-document_list"></a>

```json
[
  {
    "name": "string",
    "url": "http://example.com"
  }
]
```

An array of metadata for the documents which were uploaded as supporting information for the dispute.

<h2 id="tocS_supporting_info_list">supporting_info_list</h2>
<!-- backwards compatibility -->
<a id="schemasupporting_info_list"></a>
<a id="schema_supporting_info_list"></a>
<a id="tocSsupporting_info_list"></a>
<a id="tocssupporting_info_list"></a>

```json
[
  {
    "notes": "string",
    "documents": [
      {
        "name": "string",
        "url": "http://example.com"
      }
    ],
    "source": "SUBMITTED_BY_BUYER",
    "provided_time": "stringstringstringst",
    "dispute_life_cycle_stage": "INQUIRY"
  }
]
```

An array of all the supporting information that are associated to this dispute.

<h2 id="tocS_tracking_info">tracking_info</h2>
<!-- backwards compatibility -->
<a id="schematracking_info"></a>
<a id="schema_tracking_info"></a>
<a id="tocStracking_info"></a>
<a id="tocstracking_info"></a>

```json
{
  "carrier_name": "UPS",
  "carrier_name_other": "string",
  "tracking_url": "http://example.com",
  "tracking_number": "string"
}
```

The tracking information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|carrier_name|string|true|none|The name of the shipment carrier for the transaction for this dispute.|
|carrier_name_other|string|false|none|The name of carrier in free-form text for unavailable carriers. This field is mandatory when <code>carrier_name</code> is <code>OTHER</code>.|
|tracking_url|string(uri)|false|none|The URL to track the dispute-related transaction shipment.|
|tracking_number|string|true|none|The number to track the dispute-related transaction shipment.|

#### Enumerated Values

|Property|Value|
|---|---|
|carrier_name|UPS|
|carrier_name|USPS|
|carrier_name|FEDEX|
|carrier_name|AIRBORNE_EXPRESS|
|carrier_name|DHL|
|carrier_name|AIRSURE|
|carrier_name|ROYAL_MAIL|
|carrier_name|PARCELFORCE|
|carrier_name|SWIFTAIR|
|carrier_name|OTHER|
|carrier_name|UK_PARCELFORCE|
|carrier_name|UK_ROYALMAIL_SPECIAL|
|carrier_name|UK_ROYALMAIL_RECORDED|
|carrier_name|UK_ROYALMAIL_INT_SIGNED|
|carrier_name|UK_ROYALMAIL_AIRSURE|
|carrier_name|UK_UPS|
|carrier_name|UK_FEDEX|
|carrier_name|UK_AIRBORNE_EXPRESS|
|carrier_name|UK_DHL|
|carrier_name|UK_OTHER|
|carrier_name|UK_CANNOT_PROV_TRACK|
|carrier_name|UK_CANNOT_PROVIDE_TRACKING|
|carrier_name|CA_CANADA_POST|
|carrier_name|CA_PUROLATOR|
|carrier_name|CA_CANPAR|
|carrier_name|CA_LOOMIS|
|carrier_name|CA_TNT|
|carrier_name|TNT|
|carrier_name|CA_OTHER|
|carrier_name|CA_CANNOT_PROV_TRACK|
|carrier_name|DE_DP_DHL_WITHIN_EUROPE|
|carrier_name|DE_DP_DHL_T_AND_T_EXPRESS|
|carrier_name|DE_DHL_DP_INTL_SHIPMENTS|
|carrier_name|CA_CANNOT_PROVIDE_TRACKING|
|carrier_name|DE_GLS|
|carrier_name|DE_DPD_DELISTACK|
|carrier_name|DE_HERMES|
|carrier_name|DE_UPS|
|carrier_name|DE_FEDEX|
|carrier_name|DE_TNT|
|carrier_name|DE_OTHER|
|carrier_name|FR_CHRONOPOST|
|carrier_name|FR_COLIPOSTE|
|carrier_name|FR_DHL|
|carrier_name|FR_UPS|
|carrier_name|FR_FEDEX|
|carrier_name|FR_TNT|
|carrier_name|FR_GLS|
|carrier_name|FR_OTHER|
|carrier_name|IT_POSTE_ITALIA|
|carrier_name|IT_DHL|
|carrier_name|IT_UPS|
|carrier_name|IT_FEDEX|
|carrier_name|IT_TNT|
|carrier_name|IT_GLS|
|carrier_name|IT_OTHER|
|carrier_name|AU_AUSTRALIA_POST_EP_PLAT|
|carrier_name|AU_AUSTRALIA_POST_EPARCEL|
|carrier_name|AU_AUSTRALIA_POST_EMS|
|carrier_name|AU_DHL|
|carrier_name|AU_STAR_TRACK_EXPRESS|
|carrier_name|AU_UPS|
|carrier_name|AU_FEDEX|
|carrier_name|AU_TNT|
|carrier_name|AU_TOLL_IPEC|
|carrier_name|AU_OTHER|
|carrier_name|FR_SUIVI|
|carrier_name|IT_EBOOST_SDA|
|carrier_name|ES_CORREOS_DE_ESPANA|
|carrier_name|ES_DHL|
|carrier_name|ES_UPS|
|carrier_name|ES_FEDEX|
|carrier_name|ES_TNT|
|carrier_name|ES_OTHER|
|carrier_name|AT_AUSTRIAN_POST_EMS|
|carrier_name|AT_AUSTRIAN_POST_PPRIME|
|carrier_name|BE_CHRONOPOST|
|carrier_name|BE_TAXIPOST|
|carrier_name|CH_SWISS_POST_EXPRES|
|carrier_name|CH_SWISS_POST_PRIORITY|
|carrier_name|CN_CHINA_POST|
|carrier_name|HK_HONGKONG_POST|
|carrier_name|IE_AN_POST_SDS_EMS|
|carrier_name|IE_AN_POST_SDS_PRIORITY|
|carrier_name|IE_AN_POST_REGISTERED|
|carrier_name|IE_AN_POST_SWIFTPOST|
|carrier_name|IN_INDIAPOST|
|carrier_name|JP_JAPANPOST|
|carrier_name|KR_KOREA_POST|
|carrier_name|NL_TPG|
|carrier_name|SG_SINGPOST|
|carrier_name|TW_CHUNGHWA_POST|
|carrier_name|CN_CHINA_POST_EMS|
|carrier_name|CN_FEDEX|
|carrier_name|CN_TNT|
|carrier_name|CN_UPS|
|carrier_name|CN_OTHER|
|carrier_name|NL_TNT|
|carrier_name|NL_DHL|
|carrier_name|NL_UPS|
|carrier_name|NL_FEDEX|
|carrier_name|NL_KIALA|
|carrier_name|BE_KIALA|
|carrier_name|PL_POCZTA_POLSKA|
|carrier_name|PL_POCZTEX|
|carrier_name|PL_GLS|
|carrier_name|PL_MASTERLINK|
|carrier_name|PL_TNT|
|carrier_name|PL_DHL|
|carrier_name|PL_UPS|
|carrier_name|PL_FEDEX|
|carrier_name|JP_SAGAWA_KYUU_BIN|
|carrier_name|JP_NITTSU_PELICAN_BIN|
|carrier_name|JP_KURO_NEKO_YAMATO_UNYUU|
|carrier_name|JP_TNT|
|carrier_name|JP_DHL|
|carrier_name|JP_UPS|
|carrier_name|JP_FEDEX|
|carrier_name|NL_PICKUP|
|carrier_name|NL_INTANGIBLE|
|carrier_name|NL_ABC_MAIL|
|carrier_name|HK_FOUR_PX_EXPRESS|
|carrier_name|HK_FLYT_EXPRESS|
|carrier_name|US_ASCENDIA|
|carrier_name|US_ENSENDA|
|carrier_name|US_GLOBEGISTICS|
|carrier_name|US_ONTRAC|
|carrier_name|RRDONNELLEY|
|carrier_name|ASENDIA_UK|
|carrier_name|UK_COLLECTPLUS|
|carrier_name|UK_DPD|
|carrier_name|UK_HERMESWORLD|
|carrier_name|UK_INTERLINK_EXPRESS|
|carrier_name|UK_TNT|
|carrier_name|UK_UK_MAIL|
|carrier_name|UK_YODEL|
|carrier_name|BUYLOGIC|
|carrier_name|CN_EMS|
|carrier_name|CHINA_POST|
|carrier_name|CNEXPS|
|carrier_name|CPACKET|
|carrier_name|CUCKOOEXPRESS|
|carrier_name|CN_EC|
|carrier_name|CN_EMPS|
|carrier_name|DE_ASENDIA|
|carrier_name|UK_DELTEC|
|carrier_name|DE_DEUTSCHE|
|carrier_name|DE_DPD|
|carrier_name|RABEN_GROUP|
|carrier_name|GLOBAL_TNT|
|carrier_name|ADSONE|
|carrier_name|AU_AU_POST|
|carrier_name|BONDSCOURIERS|
|carrier_name|COURIERS_PLEASE|
|carrier_name|DTDC_AU|
|carrier_name|AU_FASTWAY|
|carrier_name|HUNTER_EXPRESS|
|carrier_name|SENDLE|
|carrier_name|AUS_TOLL|
|carrier_name|TOLL|
|carrier_name|UBI_LOGISTICS|
|carrier_name|OMNIPARCEL|
|carrier_name|QUANTIUM|
|carrier_name|CN_SF_EXPRESS|
|carrier_name|SEKOLOGISTICS|
|carrier_name|HK_TAQBIN|
|carrier_name|GB_APC|
|carrier_name|CA_CANPAR_COURIER|
|carrier_name|GLOBAL_ESTES|
|carrier_name|CA_GREYHOUND|
|carrier_name|PUROLATOR|
|carrier_name|US_RL|
|carrier_name|IT_BRT|
|carrier_name|DMM_NETWORK|
|carrier_name|IT_FERCAM|
|carrier_name|HERMES_IT|
|carrier_name|IT_POSTE_ITALIANE|
|carrier_name|IT_SDA|
|carrier_name|IT_SGT|
|carrier_name|GLOBAL_SKYNET|
|carrier_name|FR_BERT|
|carrier_name|FR_COLIS|
|carrier_name|FR_GEODIS|
|carrier_name|FR_LAPOSTE|
|carrier_name|FR_TELIWAY|
|carrier_name|DPD_POLAND|
|carrier_name|INPOST_PACZKOMATY|
|carrier_name|POL_POCZTA|
|carrier_name|POL_SIODEMKA|
|carrier_name|ESP_CORREOS|
|carrier_name|ES_CORREOS|
|carrier_name|ESP_NACEX|
|carrier_name|ESP_ASM|
|carrier_name|ESP_REDUR|
|carrier_name|CBL_LOGISTICA|
|carrier_name|EKART|
|carrier_name|IND_DELHIVERY|
|carrier_name|IND_BLUEDART|
|carrier_name|IND_DTDC|
|carrier_name|IND_PROFESSIONAL_COURIERS|
|carrier_name|IND_REDEXPRESS|
|carrier_name|IND_XPRESSBEES|
|carrier_name|IND_DOTZOT|
|carrier_name|THA_KERRY|
|carrier_name|SENDIT|
|carrier_name|ACOMMERCE|
|carrier_name|NINJAVAN_THAI|
|carrier_name|NIM_EXPRESS|
|carrier_name|THA_THAILAND_POST|
|carrier_name|THA_DYNAMIC_LOGISTICS|
|carrier_name|ALPHAFAST|
|carrier_name|FASTRAK_TH|
|carrier_name|EPARCEL_KR|
|carrier_name|CJ_KOREA_THAI|
|carrier_name|RINCOS|
|carrier_name|KOR_KOREA_POST|
|carrier_name|KOR_CJ|
|carrier_name|KOR_ECARGO|
|carrier_name|SREKOREA|
|carrier_name|ROCKETPARCEL|
|carrier_name|BG_BULGARIAN_POST|
|carrier_name|JPN_JAPAN_POST|
|carrier_name|JPN_YAMATO|
|carrier_name|JPN_SAGAWA|
|carrier_name|TUR_PTT|
|carrier_name|AUT_AUSTRIAN_POST|
|carrier_name|AU_AUSTRIAN_POST|
|carrier_name|RUSSIAN_POST|
|carrier_name|BEL_DHL|
|carrier_name|FR_MONDIAL|
|carrier_name|EU_BPOST|
|carrier_name|LANDMARK_GLOBAL|
|carrier_name|IDN_POS|
|carrier_name|IDN_POS_INT|
|carrier_name|IDN_JNE|
|carrier_name|IDN_PANDU|
|carrier_name|RPX|
|carrier_name|IDN_TIKI|
|carrier_name|IDN_LION_PARCEL|
|carrier_name|NINJAVAN_ID|
|carrier_name|IDN_WAHANA|
|carrier_name|IDN_FIRST_LOGISTICS|
|carrier_name|UK_AN_POST|
|carrier_name|DPD|
|carrier_name|UK_FASTWAY|
|carrier_name|UK_NIGHTLINE|
|carrier_name|WISELOADS|
|carrier_name|GR_ELTA|
|carrier_name|GRC_ACS|
|carrier_name|GR_GENIKI|
|carrier_name|NINJAVAN_PHILIPPINES|
|carrier_name|PHL_XEND_EXPRESS|
|carrier_name|PHL_LBC|
|carrier_name|PHL_JAMEXPRESS|
|carrier_name|PHL_AIRSPEED|
|carrier_name|PHL_RAF|
|carrier_name|DIRECTLOG|
|carrier_name|BRA_CORREIOS|
|carrier_name|NLD_DHL|
|carrier_name|NLD_POSTNL|
|carrier_name|NLD_GLS|
|carrier_name|NLD_TRANSMISSION|
|carrier_name|CORREOS_DE_MEXICO|
|carrier_name|MEX_ESTAFETA|
|carrier_name|MEX_SENDA|
|carrier_name|MEX_REDPACK|
|carrier_name|MEX_AEROFLASH|
|carrier_name|NATIONWIDE_MY|
|carrier_name|MYS_MYS_POST|
|carrier_name|MYS_TAQBIN|
|carrier_name|MYS_SKYNET|
|carrier_name|MYS_CITYLINK|
|carrier_name|MYS_AIRPAK|
|carrier_name|NINJAVAN_MY|
|carrier_name|KANGAROO_MY|
|carrier_name|VNM_VIETNAM_POST|
|carrier_name|VNPOST_EMS|
|carrier_name|PRT_INT_SEUR|
|carrier_name|PRT_CTT|
|carrier_name|PRT_CHRONOPOST|
|carrier_name|PRT_SEUR|
|carrier_name|ADICIONAL|
|carrier_name|LTU_LIETUVOS|
|carrier_name|DPEX|
|carrier_name|LWE_HK|
|carrier_name|SG_SG_POST|
|carrier_name|SG_TAQBIN|
|carrier_name|SG_NINJAVAN|
|carrier_name|SG_ZALORA|
|carrier_name|JET_SHIP|
|carrier_name|SG_PARCELPOST|
|carrier_name|CHE_SWISS_POST|
|carrier_name|ASENDIA_HK|
|carrier_name|HUN_MAGYAR|
|carrier_name|POSTNORD_LOGISTICS|
|carrier_name|SWE_DIRECTLINK|
|carrier_name|SWE_POSTNORD|
|carrier_name|SWE_DB|
|carrier_name|CZE_CESKA|
|carrier_name|NZ_NZ_POST|
|carrier_name|NZ_COURIER_POST|
|carrier_name|FASTWAY_NZ|
|carrier_name|TW_TAIWAN_POST|
|carrier_name|SPREADEL|
|carrier_name|ARE_EMIRATES_POST|
|carrier_name|AXL|
|carrier_name|CYP_CYPRUS_POST|
|carrier_name|HRV_HRVATSKA|
|carrier_name|NOR_POSTEN|
|carrier_name|RAM|
|carrier_name|THECOURIERGUY|
|carrier_name|ZA_FASTWAY|
|carrier_name|DPE_EXPRESS|
|carrier_name|POSTI|
|carrier_name|MATKAHUOLTO|
|carrier_name|GLOBAL_DHL|
|carrier_name|ARG_CORREO|
|carrier_name|ARG_OCA|
|carrier_name|POST_SERBIA|
|carrier_name|BH_POSTA|
|carrier_name|CORREOS_CHILE|
|carrier_name|APR_72|
|carrier_name|CORREOS_DE_COSTA_RICA|
|carrier_name|POSTUR_IS|
|carrier_name|SPEEDEXCOURIER|
|carrier_name|ROU_POSTA|
|carrier_name|UKR_NOVA|
|carrier_name|UKR_POSHTA|
|carrier_name|NGA_NIPOST|
|carrier_name|NG_COURIERPLUS|
|carrier_name|ESHOPWORLD|
|carrier_name|WEBINTERPRET|
|carrier_name|HERMES|
|carrier_name|ABC_MAIL|
|carrier_name|ARAMEX|
|carrier_name|YANWEN|
|carrier_name|INTERNATIONAL_BRIDGE|
|carrier_name|SFC_LOGISTICS|
|carrier_name|BQC_EXPRESS|
|carrier_name|ONE_WORLD|
|carrier_name|IT_REGISTER_MAIL|
|carrier_name|WINIT|
|carrier_name|CONTINENTAL|
|carrier_name|EFS|
|carrier_name|PANTOS|
|carrier_name|RELAIS_COLIS|
|carrier_name|US_DHL_EXPRESS|
|carrier_name|US_DHL_PARCEL|
|carrier_name|US_DHL_ECOMMERCE|
|carrier_name|US_DHL_GLOBALFORWARDING|
|carrier_name|UK_DHL_EXPRESS|
|carrier_name|UK_DHL_PARCEL|
|carrier_name|UK_DHL_GLOBALFORWARDING|
|carrier_name|CN_DHL_EXPRESS|
|carrier_name|CN_DHL_ECOMMERCE|
|carrier_name|CN_DHL_GLOBALFORWARDING|
|carrier_name|DE_DHL_EXPRESS|
|carrier_name|DE_DHL_PARCEL|
|carrier_name|DE_DHL_PACKET|
|carrier_name|DE_DHL_ECOMMERCE|
|carrier_name|DE_DHL_GLOBALFORWARDING|
|carrier_name|DE_DHL_DEUTSCHEPOST|
|carrier_name|AU_DHL_EXPRESS|
|carrier_name|AU_DHL_ECOMMERCE|
|carrier_name|AU_DHL_GLOBALFORWARDING|
|carrier_name|HK_DHL_EXPRESS|
|carrier_name|HK_DHL_ECOMMERCE|
|carrier_name|HK_DHL_GLOBALFORWARDING|
|carrier_name|CA_DHL_EXPRESS|
|carrier_name|CA_DHL_ECOMMERCE|
|carrier_name|CA_DHL_GLOBALFORWARDING|
|carrier_name|IT_DHL_EXPRESS|
|carrier_name|IT_DHL_ECOMMERCE|
|carrier_name|IT_DHL_GLOBALFORWARDING|
|carrier_name|FR_DHL_EXPRESS|
|carrier_name|FR_DHL_PARCEL|
|carrier_name|FR_DHL_GLOBALFORWARDING|
|carrier_name|PL_DHL_EXPRESS|
|carrier_name|PL_DHL_PARCEL|
|carrier_name|PL_DHL_GLOBALFORWARDING|
|carrier_name|ABC_PACKAGE|
|carrier_name|AN_POST|
|carrier_name|APC_OVERNIGHT|
|carrier_name|ASM_ES|
|carrier_name|AUPOST_CN|
|carrier_name|ACOMMMERCE|
|carrier_name|ADICIONAL_PT|
|carrier_name|AIR_21|
|carrier_name|AIRBORNE_EXPRESS_UK|
|carrier_name|AIRPAK_MY|
|carrier_name|AIRSPEED|
|carrier_name|ASENDIA_DE|
|carrier_name|ASENDIA_US|
|carrier_name|AUSTRALIA_POST|
|carrier_name|TOLL_AU|
|carrier_name|AUSTRIAN_POST_EXPRESS|
|carrier_name|AUSTRIAN_POST|
|carrier_name|B_TWO_C_EUROPE|
|carrier_name|BERT|
|carrier_name|BPOST|
|carrier_name|BRT_IT|
|carrier_name|BLUEDART|
|carrier_name|BONDS_COURIERS|
|carrier_name|BPOST_INT|
|carrier_name|BULGARIAN_POST|
|carrier_name|CJ_LOGISTICS|
|carrier_name|CJ_INT_MY|
|carrier_name|CJ_MY|
|carrier_name|CJ_TH|
|carrier_name|CANADA_POST|
|carrier_name|CANPAR|
|carrier_name|CESKA_CZ|
|carrier_name|CHRONOPOST_FR|
|carrier_name|CHRONOPOST_PT|
|carrier_name|CHUNGHWA_POST|
|carrier_name|CITYLINK_MY|
|carrier_name|COLIPOSTE|
|carrier_name|COLIS|
|carrier_name|COLLECTPLUS|
|carrier_name|CORREOS_AG|
|carrier_name|CORREOS_BR|
|carrier_name|CORREOS_CL|
|carrier_name|CORREOS_CR|
|carrier_name|CORREOS_MX|
|carrier_name|CORREOS_ES|
|carrier_name|CORREOS_EXPRESS|
|carrier_name|COURIERPLUS|
|carrier_name|COURIER_POST|
|carrier_name|CYPRUS_POST_CYP|
|carrier_name|DBSCHENKER_SE|
|carrier_name|DHL_ES|
|carrier_name|DHL_ACTIVE_TRACING|
|carrier_name|DHL_AU|
|carrier_name|DHL_BENELUX|
|carrier_name|DHL_DEUTSCHE_POST|
|carrier_name|DHL_FR|
|carrier_name|DHL_GLOBAL_ECOMMERCE|
|carrier_name|DHL_HK|
|carrier_name|DHL_IT|
|carrier_name|DHL_JP|
|carrier_name|DHL_NL|
|carrier_name|DHL_PACKET|
|carrier_name|DHL_PARCEL_NL|
|carrier_name|DHL_PARCEL_ES|
|carrier_name|DHL_PL|
|carrier_name|DHL_SG|
|carrier_name|DHL_UK|
|carrier_name|DHL_GLOBAL_MAIL_ASIA|
|carrier_name|DHL_GLOBAL_MAIL|
|carrier_name|DHL_AT|
|carrier_name|DPD_DELISTRACK|
|carrier_name|DPD_FR|
|carrier_name|DPD_DE|
|carrier_name|DPD_HK|
|carrier_name|DPD_IR|
|carrier_name|DPD_LOCAL_REF|
|carrier_name|DPD_LOCAL|
|carrier_name|DPD_PL|
|carrier_name|DPD_RO|
|carrier_name|DPD_RU|
|carrier_name|DPD_UK|
|carrier_name|DTDC_EXPRESS|
|carrier_name|DTDC_IN|
|carrier_name|DAWN_WING|
|carrier_name|DELHIVERY_IN|
|carrier_name|DELTEC_DE|
|carrier_name|DELTEC_UK|
|carrier_name|DEUTSCHE_DE|
|carrier_name|DIRECTLINK_SE|
|carrier_name|DIRECTLOG_BR|
|carrier_name|DOTZOT|
|carrier_name|EC_CN|
|carrier_name|ELTA_GR|
|carrier_name|EMPS_CN|
|carrier_name|EMS_CN|
|carrier_name|ECARGO|
|carrier_name|EMIRATES_POST|
|carrier_name|ENSENDA|
|carrier_name|ESTAFETA|
|carrier_name|ESTES|
|carrier_name|FERCAM_IT|
|carrier_name|FLYT_EXPRESS|
|carrier_name|FASTRACK|
|carrier_name|FASTWAY_US|
|carrier_name|FASTWAY_ZA|
|carrier_name|FASTWAY_UK|
|carrier_name|FASTWAY_AU|
|carrier_name|FIRST_LOGISITCS|
|carrier_name|FOUR_PX_EXPRESS|
|carrier_name|GEODIS|
|carrier_name|GLS_CZ|
|carrier_name|GLS_FR|
|carrier_name|GLS_DE|
|carrier_name|GLS_IT|
|carrier_name|GLS_NL|
|carrier_name|GLS_ES|
|carrier_name|GLS|
|carrier_name|ACS_GR|
|carrier_name|GENIKI_GR|
|carrier_name|GLOBEGISTICS|
|carrier_name|GREYHOUND|
|carrier_name|HERMES_DE|
|carrier_name|HERMESWORLD_UK|
|carrier_name|HK_POST|
|carrier_name|HRVATSKA_HR|
|carrier_name|HUAHAN_EXPRESS|
|carrier_name|IMX|
|carrier_name|ITIS|
|carrier_name|INDIA_POST|
|carrier_name|INTERLINK|
|carrier_name|INT_SEUR|
|carrier_name|INT_SUER|
|carrier_name|ISRAEL_POST|
|carrier_name|JNE_IDN|
|carrier_name|JAMEXPRESS_PH|
|carrier_name|JAPAN_POST|
|carrier_name|JP_POST|
|carrier_name|JETSHIP_MY|
|carrier_name|JETSHIP_SG|
|carrier_name|KERRY_EXPRESS_VN|
|carrier_name|KERRY_EXPRESS_HK|
|carrier_name|KERRY_EXPRESS_TH|
|carrier_name|KIALA|
|carrier_name|KOREA_POST|
|carrier_name|CJ_KR|
|carrier_name|LAPOSTE|
|carrier_name|LBC_PH|
|carrier_name|LIETUVOS_LT|
|carrier_name|LION_PARCEL|
|carrier_name|LOGISTICSWORLDWIDE_HK|
|carrier_name|LOGISTICSWORLDWIDE_KR|
|carrier_name|LOGISTICSWORLDWIDE_MY|
|carrier_name|LOOMIS|
|carrier_name|MONDIAL|
|carrier_name|MAGYAR_HU|
|carrier_name|MALAYSIA_POST|
|carrier_name|MASTERLINK|
|carrier_name|AEROFLASH|
|carrier_name|REDPACK|
|carrier_name|SENDA_MX|
|carrier_name|MONDIAL_BE|
|carrier_name|MYHERMES|
|carrier_name|NACEX_ES|
|carrier_name|NATIONWIDE|
|carrier_name|NZ_POST|
|carrier_name|NIPOST_NG|
|carrier_name|NIGHTLINE_UK|
|carrier_name|NINJAVAN_PH|
|carrier_name|NINJAVAN_SG|
|carrier_name|NOVA_POSHTA_INT|
|carrier_name|NOVA_POSHTA|
|carrier_name|OCA_AR|
|carrier_name|ONTRAC|
|carrier_name|PTT_POST|
|carrier_name|PANDU|
|carrier_name|PARCELPOST_SG|
|carrier_name|POCZTA_POLSKA|
|carrier_name|POCZTEX|
|carrier_name|CTT_PT|
|carrier_name|SEUR_PT|
|carrier_name|POS_ID|
|carrier_name|POS_INT|
|carrier_name|POSTNL_INT_3_S|
|carrier_name|POSTNL|
|carrier_name|POSTNL_INT|
|carrier_name|POSTNORD_LOGISTICS_DK|
|carrier_name|POSTNORD_LOGISTICS_SE|
|carrier_name|POSTNORD_LOGISTICS_GLOBAL|
|carrier_name|POSTA_RO|
|carrier_name|POSTE_ITALIANE|
|carrier_name|POSTEN_NORGE|
|carrier_name|PROFESSIONAL_COURIERS|
|carrier_name|RAF_PH|
|carrier_name|RL_US|
|carrier_name|RPD_2_MAN|
|carrier_name|RPX_ID|
|carrier_name|REDEXPRESS|
|carrier_name|REDUR_ES|
|carrier_name|REGISTER_MAIL_IT|
|carrier_name|RELAIS_COLIS_FR|
|carrier_name|ROCKET_PARCEL|
|carrier_name|SDA_IT|
|carrier_name|SF_EXPRESS|
|carrier_name|SFC_EXPRESS|
|carrier_name|SGT_IT|
|carrier_name|SRE_KOREA|
|carrier_name|SAGAWA|
|carrier_name|SAGAWA_JP|
|carrier_name|POST_SERBIA_CS|
|carrier_name|SINGPOST|
|carrier_name|SIODEMKA|
|carrier_name|SKYNET_WORLDWIDE|
|carrier_name|SKYNET_MY|
|carrier_name|SKYNET_UAE|
|carrier_name|SKYNET_UK|
|carrier_name|SEUR_ES|
|carrier_name|STARTRACK_EXPRESS|
|carrier_name|STARTRACK|
|carrier_name|SWISS_POST|
|carrier_name|TNT_AU|
|carrier_name|TNT_CN|
|carrier_name|TNT_CLICK_IT|
|carrier_name|TNT_FR|
|carrier_name|TNT_DE|
|carrier_name|TNT_IT|
|carrier_name|TNT_JP|
|carrier_name|TNT_NL|
|carrier_name|TNT_PL|
|carrier_name|TNT_ES|
|carrier_name|TNT_UK|
|carrier_name|TPG|
|carrier_name|TAIWAN_POST_TW|
|carrier_name|TAQBIN_HK|
|carrier_name|TAQBIN_MY|
|carrier_name|TAQBIN_SG|
|carrier_name|TAXIPOST|
|carrier_name|TELIWAY|
|carrier_name|THAILAND_POST|
|carrier_name|THE_COURIER_GUY|
|carrier_name|TIKI_ID|
|carrier_name|TOLL_IPEC|
|carrier_name|TWO_GO|
|carrier_name|TRANSMISSION|
|carrier_name|UK_MAIL|
|carrier_name|UPS_MI|
|carrier_name|VIETNAM_POST|
|carrier_name|WAHANA_ID|
|carrier_name|XEND_EXPRESS_PH|
|carrier_name|XPRESSBEES|
|carrier_name|YAMATO|
|carrier_name|YANWEN_CN|
|carrier_name|YODEL|
|carrier_name|UPS_CANADA|
|carrier_name|UPS_MAIL_INNOVATIONS|
|carrier_name|DE_DELTEC|
|carrier_name|DE_INTERNATIONALSEUR|
|carrier_name|FR_DPD|
|carrier_name|FR_IMX|
|carrier_name|IT_IMX|
|carrier_name|AU_DTDC|
|carrier_name|AU_SENDLE|
|carrier_name|AU_SKYNET|
|carrier_name|ES_GLS|
|carrier_name|ES_INTERNATIONALSEUR|
|carrier_name|ES_IMX|
|carrier_name|CN_HUAHANEXPRESS|
|carrier_name|LOCAL_PICKUP|
|carrier_name|HK_DPEX|
|carrier_name|HK_KERRYEXPRESS|
|carrier_name|HK_LOGISTICSWORLDWIDEEXPRESS|
|carrier_name|HK_RPX|
|carrier_name|HK_SPREADEL|
|carrier_name|IN_SPREADEL|
|carrier_name|TH_CJ|
|carrier_name|KR_LOGISTICSWORLDWIDE|
|carrier_name|AT_DHL|
|carrier_name|BE_IMX|
|carrier_name|MY_LOGISTICSWORLDWIDE|
|carrier_name|MY_JETSHIP|
|carrier_name|SG_DHL|
|carrier_name|SG_SPREADEL|
|carrier_name|POSTAROMANA|
|carrier_name|US_PUROLATOR|
|carrier_name|US_FASTWAY|
|carrier_name|CHRONOPOST|
|carrier_name|CORREOS_DE_ESPANA|
|carrier_name|DEUTSCHE_POST_DHL|
|carrier_name|EBOOST_SDA|
|carrier_name|HONGKONG_POST|
|carrier_name|INTANGIBLE_DIGITAL_SERVICES|
|carrier_name|LA_POSTE|
|carrier_name|LA_POSTE_SUIVI|
|carrier_name|NEKO_YAMATO_UNYUU|
|carrier_name|NITTSU_PELICAN_BIN|
|carrier_name|POSTE_ITALIA|
|carrier_name|SAGAWA_KYUU_BIN|
|carrier_name|STAR_TRACK_EXPRESS|
|carrier_name|US_DTDC|
|carrier_name|US_STARTRACK|
|carrier_name|ISR_ISRAEL_POST|
|carrier_name|BE_MONDIAL|
|carrier_name|B_2_CEUROPE|
|carrier_name|PHL_2_GO|
|carrier_name|PHL_AIR_21|
|carrier_name|PT_SPANISH_SEUR|
|carrier_name|ES_SPANISH_SEUR|
|carrier_name|SG_DPEX|
|carrier_name|CH_IMX|
|carrier_name|DHLG|
|carrier_name|RUSTON|
|carrier_name|MIKROPAKKET|
|carrier_name|XPOST|
|carrier_name|PAN_ASIA|
|carrier_name|PARCELONE|
|carrier_name|SPEEDEE|
|carrier_name|VENIPAK|
|carrier_name|CROSHOT|
|carrier_name|SHREENANDANCOURIER|
|carrier_name|EPST_GLBL|
|carrier_name|NEWGISTICS|
|carrier_name|POST_SLOVENIA|
|carrier_name|JERSEY_POST|
|carrier_name|WMG|
|carrier_name|BOMBINOEXP|
|carrier_name|XQ_EXPRESS|
|carrier_name|FURDECO|
|carrier_name|LEGION_EXPRESS|
|carrier_name|YDH_EXPRESS|
|carrier_name|LHT_EXPRESS|
|carrier_name|SOUTH_AFRICAN_POST_OFFICE|
|carrier_name|GRUPO|
|carrier_name|SPOTON|
|carrier_name|DIMERCO|
|carrier_name|INTERPARCEL_UK|
|carrier_name|ABCUSTOM|
|carrier_name|IND_DELIVREE|
|carrier_name|GLOBAL_ABF|
|carrier_name|CN_BESTEXPRESS|
|carrier_name|DX_SFTP|
|carrier_name|PICKUPP_MYS|
|carrier_name|XPERT_DELIVERY|
|carrier_name|FMX|
|carrier_name|HELLMANN|
|carrier_name|DHL_REFR|
|carrier_name|DHL_HK|
|carrier_name|SHIP_IT_ASIA|
|carrier_name|KERRY_ECOMMERCE|
|carrier_name|GOJEK|
|carrier_name|FRETERAPIDO|
|carrier_name|YODEL_INTNL|
|carrier_name|CFL_LOGISTICS|
|carrier_name|PITNEY_BOWES|
|carrier_name|ZA_SPECIALISED_FREIGHT|
|carrier_name|JANCO|
|carrier_name|XPRESSEN_DK|
|carrier_name|YTO|
|carrier_name|RPD2MAN|
|carrier_name|SEUR_SP_API|
|carrier_name|DELIVERYONTIME|
|carrier_name|WISE_EXPRESS|
|carrier_name|JINSUNG|
|carrier_name|JTEXPRESS_VN|
|carrier_name|CHUKOU1|
|carrier_name|TRANS_KARGO|
|carrier_name|FEDEX_INTL_MLSERV|
|carrier_name|SWISHIP_DE|
|carrier_name|IVOY_WEBHOOK|
|carrier_name|AIRMEE_WEBHOOK|
|carrier_name|VAMOX|
|carrier_name|FIRSTMILE|
|carrier_name|AMS_GRP|
|carrier_name|FASTWAY_IR|
|carrier_name|HH_EXP|
|carrier_name|HRPARCEL|
|carrier_name|MYS_MYPOST_ONLINE|
|carrier_name|GESWL|
|carrier_name|BLUESTAR|
|carrier_name|TIPSA|
|carrier_name|CDEK_TR|
|carrier_name|KGMHUB|
|carrier_name|INTEXPRESS|
|carrier_name|DESCARTES|
|carrier_name|OVERSE_EXP|
|carrier_name|ONECLICK|
|carrier_name|ROADRUNNER_FREIGHT|
|carrier_name|GLS_CROTIA|
|carrier_name|TOURLINE|
|carrier_name|MRW_FTP|
|carrier_name|BH_WORLDWIDE|
|carrier_name|BLUEX|
|carrier_name|DYLT|
|carrier_name|OCS|
|carrier_name|YINGNUO_LOGISTICS|
|carrier_name|SIN_GLBL|
|carrier_name|TUFFNELLS_REFERENCE|
|carrier_name|CJPACKET|
|carrier_name|MILKMAN|
|carrier_name|FIEGE_NL|
|carrier_name|ASIGNA|
|carrier_name|ONEWORLDEXPRESS|
|carrier_name|LTIANEXP|
|carrier_name|KWE_GLOBAL|
|carrier_name|CTC_EXPRESS|
|carrier_name|LAO_POST|
|carrier_name|EU_IMX|
|carrier_name|GLS_SLOV|
|carrier_name|AMAZON|
|carrier_name|MORE_LINK|
|carrier_name|JX|
|carrier_name|MYS_EMS|
|carrier_name|EASY_MAIL|
|carrier_name|ADUIEPYLE|
|carrier_name|GB_PANTHER|
|carrier_name|SG_DETRACK|
|carrier_name|EXPRESSSALE|
|carrier_name|DICOM|
|carrier_name|MATDESPATCH|
|carrier_name|TRUNKRS_WEBHOOK|
|carrier_name|WESTBANK_COURIER|
|carrier_name|MBW|
|carrier_name|KHM_CAMBODIA_POST|
|carrier_name|FEDEX_CROSSBORDER|
|carrier_name|JANIO|
|carrier_name|SINOTRANS|
|carrier_name|BRT_IT_PARCELID|
|carrier_name|A1POST|
|carrier_name|DHL_SUPPLY_CHAIN|
|carrier_name|TAZMANIAN_FREIGHT|
|carrier_name|TOPYOU|
|carrier_name|PALEXPRESS|
|carrier_name|SAIA_FREIGHT|
|carrier_name|CN_WEDO|
|carrier_name|FULFILLME|
|carrier_name|SG_QXPRESS|
|carrier_name|UPS_REFERENCE|
|carrier_name|NHANS_SOLUTIONS|
|carrier_name|CARIBOU|
|carrier_name|LOCUS_WEBHOOK|
|carrier_name|DSV|
|carrier_name|CN_GOFLY|
|carrier_name|COORDINADORA|
|carrier_name|P2P_TRC|
|carrier_name|ANDREANI|
|carrier_name|DIRECTPARCELS|
|carrier_name|DOORA|
|carrier_name|FEDEX_POLAND|
|carrier_name|INTERPARCEL_NZ|
|carrier_name|XDP_UK_REFERENCE|
|carrier_name|ETOMARS|
|carrier_name|CN_JCEX|
|carrier_name|IND_ECOM|
|carrier_name|FAR_INTERNATIONAL|
|carrier_name|ESP_ENVIALIA|
|carrier_name|IDEXPRESS|
|carrier_name|GANGBAO|
|carrier_name|SMSA_EXPRESS|
|carrier_name|NEWAY|
|carrier_name|DEX_I|
|carrier_name|DESIGNERTRANSPORT_WEBHOOK|
|carrier_name|BUDBEE_WEBHOOK|
|carrier_name|GLS_SLOVEN|
|carrier_name|PARCELLED_IN|
|carrier_name|COPA_COURIER|
|carrier_name|GSI_EXPRESS|
|carrier_name|CON_WAY|
|carrier_name|BROUWER_TRANSPORT|
|carrier_name|TOLL_NZ|
|carrier_name|CPEX|
|carrier_name|ECHO|
|carrier_name|FEDEX_FR|
|carrier_name|XDE_WEBHOOK|
|carrier_name|TOLOS|
|carrier_name|BORDEREXPRESS|
|carrier_name|GIAO_HANG|
|carrier_name|MAILPLUS_JPN|
|carrier_name|GEODIS_ESPACE|
|carrier_name|TNT_UK_REFR|
|carrier_name|DOORDASH_WEBHOOK|
|carrier_name|KEC|
|carrier_name|CJ_HK_INTERNATIONAL|
|carrier_name|HELTHJEM|
|carrier_name|ZA_COURIERIT|
|carrier_name|SFB2C|
|carrier_name|FREIGHTQUOTE|
|carrier_name|FR_EXAPAQ|
|carrier_name|LANDMARK_GLOBAL_REFERENCE|
|carrier_name|PARCEL2GO|
|carrier_name|DELNEXT|
|carrier_name|TCK_EXPRESS|
|carrier_name|ENDEAVOUR_DELIVERY|
|carrier_name|NANJINGWOYUAN|
|carrier_name|HEPPNER_FR|
|carrier_name|PICKRR|
|carrier_name|FONSEN|
|carrier_name|APC_OVERNIGHT_CONNUM|
|carrier_name|STAR_TRACK_NEXT_FLIGHT|
|carrier_name|UPS_FREIGHT|
|carrier_name|DAJIN|
|carrier_name|POSTA_PLUS|
|carrier_name|CEVA|
|carrier_name|ORANGE_DS|
|carrier_name|ANSERX|
|carrier_name|JS_EXPRESS|
|carrier_name|PADTF|
|carrier_name|GAC|
|carrier_name|EZSHIP|
|carrier_name|GEIS|
|carrier_name|SYPOST|
|carrier_name|AMAZON_SHIP_MCF|
|carrier_name|SF_EX|
|carrier_name|YUSEN|
|carrier_name|ESP_MRW|
|carrier_name|BRING|
|carrier_name|PAGO|
|carrier_name|AO_COURIER|
|carrier_name|GBA|
|carrier_name|DIAMOND_EUROGISTICS|
|carrier_name|NEWEGGEXPRESS|
|carrier_name|LALAMOVE|
|carrier_name|SPEEDCOURIERS_GR|
|carrier_name|CORPORATECOURIERS_WEBHOOK|
|carrier_name|FORRUN|
|carrier_name|PICKUP|
|carrier_name|BOND|
|carrier_name|ECMS|
|carrier_name|INTELIPOST|
|carrier_name|SK_POSTA|
|carrier_name|FLASHEXPRESS|
|carrier_name|FETCHR_WEBHOOK|
|carrier_name|CN_STO|
|carrier_name|SEKO_SFTP|
|carrier_name|THEDELIVERYGROUP|
|carrier_name|CELLO_SQUARE|
|carrier_name|HOME_DELIVERY_SOLUTIONS|
|carrier_name|DPD_HGRY|
|carrier_name|KERRYTTC_VN|
|carrier_name|TARRIVE|
|carrier_name|JOYING_BOX|
|carrier_name|COLLIVERY|
|carrier_name|TOTAL_EXPRESS|
|carrier_name|ZJS_EXPRESS|
|carrier_name|STARKEN|
|carrier_name|MAINFREIGHT|
|carrier_name|IND_FIRSTFLIGHT|
|carrier_name|BE_BPOST|
|carrier_name|DEMANDSHIP|
|carrier_name|CN_DPEX|
|carrier_name|ACSWORLDWIDE|
|carrier_name|LOGISTERS|
|carrier_name|GOGLOBALPOST|
|carrier_name|AMSTAN|
|carrier_name|OKAYPARCEL|
|carrier_name|I_DIKA|
|carrier_name|ENVIALIA_REFERENCE|
|carrier_name|PAACK_WEBHOOK|
|carrier_name|GRAB_WEBHOOK|
|carrier_name|PARCELPOINT|
|carrier_name|ICUMULUS|
|carrier_name|FDSEXPRESS|
|carrier_name|DAIGLOBALTRACK|
|carrier_name|CNDEXPRESS|
|carrier_name|GLOBAL_IPARCEL|
|carrier_name|AMAZON_FBA_SWISHIP|
|carrier_name|WYNGS|
|carrier_name|YURTICI_KARGO|
|carrier_name|CN_PAYPAL_PACKAGE|
|carrier_name|PARCEL_2_POST|
|carrier_name|ZYLLEM|
|carrier_name|VIA_EXPRESS|
|carrier_name|WIZMO|
|carrier_name|TIGFREIGHT|
|carrier_name|PIL_LOGISTICS|
|carrier_name|ZTO_EXPRESS|
|carrier_name|HEPPNER|
|carrier_name|GENERAL_OVERNIGHT|
|carrier_name|HAPPY2POINT|
|carrier_name|ARCO_SPEDIZIONI|
|carrier_name|CHITCHATS|
|carrier_name|IML|
|carrier_name|SMOOTH|
|carrier_name|INTEL_VALLEY|
|carrier_name|CLE_LOGISTICS|
|carrier_name|FIEGE|
|carrier_name|MX_CARGO|
|carrier_name|ZIINGFINALMILE|
|carrier_name|TCS|
|carrier_name|DAYTON_FREIGHT|
|carrier_name|ROADBULL|
|carrier_name|YODEL_DIR|
|carrier_name|STONE3PL|
|carrier_name|PARCELPAL_WEBHOOK|
|carrier_name|DHL_ECOMERCE_ASA|
|carrier_name|SIMPLYPOST|
|carrier_name|KY_EXPRESS|
|carrier_name|SHENZHEN|
|carrier_name|UC_EXPRE|
|carrier_name|US_LASERSHIP|
|carrier_name|DIDADI|
|carrier_name|DYNALOGIC|
|carrier_name|DBSCHENKER_B2B|
|carrier_name|MXE|
|carrier_name|PFCEXPRESS|
|carrier_name|WHISTL|
|carrier_name|CAE_DELIVERS|
|carrier_name|WEPOST|
|carrier_name|ALLIEDEXPRESS|
|carrier_name|SHIPPIT|
|carrier_name|DDEXPRESS|
|carrier_name|ARAMEX_AU|
|carrier_name|TFM|
|carrier_name|BNEED|
|carrier_name|M_XPRESS|
|carrier_name|HK_TGX|
|carrier_name|LATVIJAS_PASTS|
|carrier_name|HDB_BOX|
|carrier_name|VIAEUROPE|
|carrier_name|CORREO_UY|
|carrier_name|CLEVY_LINKS|
|carrier_name|IBEONE|
|carrier_name|J_NET|
|carrier_name|RCL|
|carrier_name|6LS|
|carrier_name|CGS_EXPRESS|
|carrier_name|BLR_BELPOST|
|carrier_name|BIRDSYSTEM|
|carrier_name|DOBROPOST|
|carrier_name|SAP_EXPRESS|
|carrier_name|WEASHIP|
|carrier_name|SONICTL|
|carrier_name|KWT|
|carrier_name|AFLLOG_FTP|
|carrier_name|IND_SAFEEXPRESS|
|carrier_name|TOPHATTEREXPRESS|
|carrier_name|SEINO|
|carrier_name|MGLOBAL|
|carrier_name|SZENDEX|
|carrier_name|AVERITT|
|carrier_name|DBSCHENKER_SV|
|carrier_name|LEADER|
|carrier_name|AO_DEUTSCHLAND|
|carrier_name|2EBOX|
|carrier_name|EU_FLEET_SOLUTIONS|
|carrier_name|SG_SPEEDPOST|
|carrier_name|PCFCORP|
|carrier_name|AERONET|
|carrier_name|LINKBRIDGE|
|carrier_name|DE_DEUTSCHE_POST_DHL_WITHIN_EUROPE_TRACKNET|
|carrier_name|PRIMAMULTICIPTA|
|carrier_name|ISR_POST_DOMESTIC|
|carrier_name|COUREX|
|carrier_name|ZAJIL_EXPRESS|
|carrier_name|BESTWAYPARCEL|
|carrier_name|COLLECTCO|
|carrier_name|AEX|
|carrier_name|JTEXPRESS|
|carrier_name|FEDEX_UK|
|carrier_name|USHIP|
|carrier_name|ROUTIFIC_WEBHOOK|
|carrier_name|GLOBAL_EXPRESS|
|carrier_name|BRT_IT_SENDER_REF|
|carrier_name|GLOBAVEND|
|carrier_name|PIXSELL|
|carrier_name|SHIPTOR|
|carrier_name|CDEK|
|carrier_name|VNM_VIETTELPOST|
|carrier_name|PHL_AIR21|
|carrier_name|PALLET_NETWORK|
|carrier_name|CJ_CENTURY|
|carrier_name|UK_XDP|
|carrier_name|GSO|
|carrier_name|VIWO|
|carrier_name|SKYBOX|
|carrier_name|PAPER_EXPRESS|
|carrier_name|KERRYTJ|
|carrier_name|NTLOGISTICS_VN|
|carrier_name|SDH_SCM|
|carrier_name|PALLETWAYS|
|carrier_name|NOX_NACHTEXPRESS|
|carrier_name|ZINC|
|carrier_name|DPE_SOUTH_AFRC|
|carrier_name|LOGISTIKA|
|carrier_name|CELERITAS|
|carrier_name|PRESSIODE|
|carrier_name|SHREE_MARUTI|
|carrier_name|PARCELINKLOGISTICS|
|carrier_name|EFEX|
|carrier_name|LOTTE|
|carrier_name|LONESTAR|
|carrier_name|GB_NORSK|
|carrier_name|APRISAEXPRESS|
|carrier_name|BEL_RS|
|carrier_name|OSM_WORLDWIDE|
|carrier_name|SAILPOST|
|carrier_name|MAILAMERICAS|
|carrier_name|WESTGATE_GL|
|carrier_name|DTD_EXPR|
|carrier_name|ALFATREX|
|carrier_name|THABIT_LOGISTICS|
|carrier_name|PROMEDDELIVERY|
|carrier_name|PAQUETEXPRESS|
|carrier_name|NEWZEALAND_COURIERS|
|carrier_name|LIEFERY|
|carrier_name|JOOM_LOGIS|
|carrier_name|STRECK_TRANSPORT|
|carrier_name|HCT_LOGISTICS|
|carrier_name|ZA_FASTWAY|
|carrier_name|CARRY_FLAP|
|carrier_name|PONY_EXPRESS|
|carrier_name|US_OLD_DOMINION|
|carrier_name|ANICAM_BOX|
|carrier_name|ALWAYS_EXPRESS|
|carrier_name|WANBEXPRESS|
|carrier_name|AUS_STARTRACK|
|carrier_name|GBS_BROKER|
|carrier_name|STALLIONEXPRESS|
|carrier_name|RAIDEREX|
|carrier_name|ALLJOY|
|carrier_name|SHOPFANS|
|carrier_name|KYUNGDONG_PARCEL|
|carrier_name|CHAMPION_LOGISTICS|
|carrier_name|PICKUPP_SGP|
|carrier_name|DEALERSEND|
|carrier_name|MORNING_EXPRESS|
|carrier_name|NACEX|
|carrier_name|THENILE_WEBHOOK|
|carrier_name|JOCOM|
|carrier_name|HOLISOL|
|carrier_name|LBCEXPRESS_FTP|
|carrier_name|CSE|
|carrier_name|TFORCE_FINALMILE|
|carrier_name|KURASI|
|carrier_name|GEMWORLDWIDE|
|carrier_name|SHIP_GATE|
|carrier_name|USF_REDDAWAY|
|carrier_name|SHIPTER|
|carrier_name|NATIONAL_SAMEDAY|
|carrier_name|APG|
|carrier_name|CN_BOXC|
|carrier_name|YUNEXPRESS|
|carrier_name|INTEGRA2_FTP|
|carrier_name|CAINIAO|
|carrier_name|ECOSCOOTING|
|carrier_name|DMS_MATRIX|
|carrier_name|MAINWAY|
|carrier_name|ASENDIA_USA|
|carrier_name|PAPERFLY|
|carrier_name|HOUNDEXPRESS|
|carrier_name|3JMSLOGISTICS|
|carrier_name|EP_BOX|
|carrier_name|BOX_BERRY|
|carrier_name|LICCARDI_EXPRESS|
|carrier_name|PLUS_LOG_UK|
|carrier_name|FULFILLA|
|carrier_name|SKY_POSTAL|
|carrier_name|ASE|
|carrier_name|CNWANGTONG|
|carrier_name|PITTOHIO|
|carrier_name|MAIL_PLUS|
|carrier_name|XPO_LOGISTICS|
|carrier_name|WNDIRECT|
|carrier_name|CLOUDWISH_ASIA|
|carrier_name|ZELERIS|
|carrier_name|MARA_XPRESS|
|carrier_name|GIO_EXPRESS|
|carrier_name|OCS_WORLDWIDE|
|carrier_name|DESTINY|
|carrier_name|ARK_LOGISTICS|
|carrier_name|DE_DPD_DELISTRACK|
|carrier_name|COMET_TECH|
|carrier_name|DHL_PARCEL_RU|
|carrier_name|AQUILINE|
|carrier_name|PILOT_FREIGHT|
|carrier_name|TNT_REFR|
|carrier_name|QWINTRY|
|carrier_name|DANSKE_FRAGT|
|carrier_name|SHREE_ANJANI_COURIER|
|carrier_name|CARRIERS|
|carrier_name|AIR_CANADA_GLOBAL|
|carrier_name|PRESIDENT_TRANS|
|carrier_name|STEPFORWARDFS|
|carrier_name|ESHIPPING|
|carrier_name|SHREETIRUPATI|
|carrier_name|HX_EXPRESS|
|carrier_name|INDOPAKET|
|carrier_name|CN_17POST|
|carrier_name|K1_EXPRESS|
|carrier_name|CJ_GLS|
|carrier_name|MYS_GDEX|
|carrier_name|NATIONEX|
|carrier_name|CN_EQUICK|
|carrier_name|ANJUN|
|carrier_name|VIRTRANSPORT|
|carrier_name|FARGOOD|
|carrier_name|SMG_EXPRESS|
|carrier_name|RZYEXPRESS|
|carrier_name|SEFL|
|carrier_name|HIPSHIPPER|
|carrier_name|HDB|
|carrier_name|RPXLOGISTICS|
|carrier_name|MIKROPAKKET_BE|
|carrier_name|KUEHNE|
|carrier_name|IT_NEXIVE|
|carrier_name|PTS|
|carrier_name|ETS_EXPRESS|
|carrier_name|SWISS_POST_FTP|
|carrier_name|COLIS_PRIVE|
|carrier_name|FASTRK_SERV|
|carrier_name|4_72|
|carrier_name|US_YRC|
|carrier_name|CN_YUNDA|
|carrier_name|POSTNL_INTL_3S|
|carrier_name|AAA_COOPER|
|carrier_name|ELIAN_POST|
|carrier_name|CUBYN|
|carrier_name|SAU_SAUDI_POST|
|carrier_name|360LION|
|carrier_name|ABXEXPRESS_MY|
|carrier_name|NINJAVAN_WB|
|carrier_name|ESP_PACKLINK|
|carrier_name|IND_JAYONEXPRESS|
|carrier_name|GB_ARROW|
|carrier_name|ZES_EXPRESS|
|carrier_name|IND_GOJAVAS|
|carrier_name|ZEPTO_EXPRESS|
|carrier_name|SKYNET_ZA|
|carrier_name|KPOST|
|carrier_name|ZEEK_2_DOOR|
|carrier_name|DHL_FREIGHT|
|carrier_name|BLUECARE|
|carrier_name|BLINKLASTMILE|
|carrier_name|POSTA_UKR|
|carrier_name|LOGISTYX_TRANSGROUP|
|carrier_name|JINDOUYUN|
|carrier_name|CHROBINSON|
|carrier_name|TRACKON|
|carrier_name|CN_POST56|
|carrier_name|GB_TUFFNELLS|
|carrier_name|COURANT_PLUS|
|carrier_name|SCUDEX_EXPRESS|
|carrier_name|SHIPENTEGRA|
|carrier_name|TRUMPCARD|
|carrier_name|CHOIR_EXP|
|carrier_name|ETOTAL|
|carrier_name|COPE|
|carrier_name|SFPLUS_WEBHOOK|
|carrier_name|IND_GATI|
|carrier_name|HERMES_2MANN_HANDLING|
|carrier_name|CN_WISHPOST|
|carrier_name|GLOBALTRANZ|
|carrier_name|HKD|
|carrier_name|UDS|
|carrier_name|BJSHOMEDELIVERY|
|carrier_name|YAKIT|
|carrier_name|LEXSHIP|
|carrier_name|OMNIVA|
|carrier_name|SUTTON|
|carrier_name|COSTMETICSNOW|
|carrier_name|PANTHER_REFERENCE|
|carrier_name|SFCSERVICE|
|carrier_name|PFLOGISTICS|
|carrier_name|LTL|
|carrier_name|LOOMIS_EXPRESS|
|carrier_name|PARKNPARCEL|
|carrier_name|SPRING_GDS|
|carrier_name|GLS_ITALY|
|carrier_name|ECEXPRESS|
|carrier_name|LINE|
|carrier_name|INTERPARCEL_AU|
|carrier_name|GEL_EXPRESS|
|carrier_name|AGILITY|
|carrier_name|XL_EXPRESS|
|carrier_name|ADERONLINE|
|carrier_name|DIRECTCOURIERS|
|carrier_name|PLANZER|
|carrier_name|NOX_NIGHT_TIME_EXPRESS|
|carrier_name|SENDING|
|carrier_name|HUODULL|

<h2 id="tocS_tracking_info_list">tracking_info_list</h2>
<!-- backwards compatibility -->
<a id="schematracking_info_list"></a>
<a id="schema_tracking_info_list"></a>
<a id="tocStracking_info_list"></a>
<a id="tocstracking_info_list"></a>

```json
[
  {
    "carrier_name": "UPS",
    "carrier_name_other": "string",
    "tracking_url": "http://example.com",
    "tracking_number": "string"
  }
]
```

An array of relevant tracking information for the transaction involved in this dispute.

<h2 id="tocS_transaction_info">transaction_info</h2>
<!-- backwards compatibility -->
<a id="schematransaction_info"></a>
<a id="schema_transaction_info"></a>
<a id="tocStransaction_info"></a>
<a id="tocstransaction_info"></a>

```json
{
  "buyer_transaction_id": "string",
  "seller_transaction_id": "string",
  "reference_id": "string",
  "create_time": "stringstringstringst",
  "transaction_status": "COMPLETED",
  "gross_amount": {
    "currency_code": "str",
    "value": "string"
  },
  "gross_asset": {
    "asset_symbol": "BTC",
    "quantity": "string",
    "quantity_in_subunits": "string",
    "decimals": 0
  },
  "invoice_number": "string",
  "custom": "string",
  "buyer": {
    "name": "string"
  },
  "seller": {
    "email": "string",
    "merchant_id": "string",
    "name": "string"
  },
  "items": [
    {
      "item_id": "string",
      "item_name": "string",
      "item_description": "string",
      "item_quantity": "string",
      "partner_transaction_id": "string",
      "reason": "MERCHANDISE_OR_SERVICE_NOT_RECEIVED",
      "dispute_amount": {
        "currency_code": "str",
        "value": "string"
      },
      "notes": "string",
      "item_type": "PRODUCT",
      "product_details": null,
      "service_details": null,
      "booking_details": null,
      "digital_download_details": null,
      "cancellation_details": null,
      "agreed_refund_details": null
    }
  ],
  "payment_processor": null
}
```

The information about the disputed transaction.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|buyer_transaction_id|string|false|none|The ID, as seen by the customer, for this transaction.|
|seller_transaction_id|string|false|none|The ID, as seen by the merchant, for this transaction.|
|reference_id|string|false|none|The ID, as seen by the partner, for this transaction.|
|create_time|[date_time](#schemadate_time)|false|none|The date and time when the transaction was created, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). For example, *`yyyy`*-*`MM`*-*`dd`*`T`*`HH`*:*`mm`*:*`ss`*.*`SSS`*`Z`.|
|transaction_status|string|false|none|The transaction status.|
|gross_amount|[money](#schemamoney)|false|none|The gross amount of the transaction.|
|gross_asset|[cryptocurrency](#schemacryptocurrency)|false|none|The gross asset of the transaction.|
|invoice_number|string|false|none|The ID of the invoice for the payment.|
|custom|string|false|none|A free-text field that is entered by the merchant during checkout.|
|buyer|[buyer](#schemabuyer)|false|none|The details for the customer who funds the payment. For example, the customer's first name, last name, and email address.|
|seller|[seller](#schemaseller)|false|none|The details for the merchant who receives the funds and fulfills the order. For example, merchant ID, and contact email address.|
|items|[item_info_list](#schemaitem_info_list)|false|read-only|An array of items that were purchased as part of the transaction.|
|payment_processor|[payment_processor](#schemapayment_processor)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|transaction_status|COMPLETED|
|transaction_status|UNCLAIMED|
|transaction_status|DENIED|
|transaction_status|FAILED|
|transaction_status|HELD|
|transaction_status|PENDING|
|transaction_status|PARTIALLY_REFUNDED|
|transaction_status|REFUNDED|
|transaction_status|REVERSED|
|transaction_status|CANCELLED|

<h2 id="tocS_transaction_info_list">transaction_info_list</h2>
<!-- backwards compatibility -->
<a id="schematransaction_info_list"></a>
<a id="schema_transaction_info_list"></a>
<a id="tocStransaction_info_list"></a>
<a id="tocstransaction_info_list"></a>

```json
[
  {
    "buyer_transaction_id": "string",
    "seller_transaction_id": "string",
    "reference_id": "string",
    "create_time": "stringstringstringst",
    "transaction_status": "COMPLETED",
    "gross_amount": {
      "currency_code": "str",
      "value": "string"
    },
    "gross_asset": {
      "asset_symbol": "BTC",
      "quantity": "string",
      "quantity_in_subunits": "string",
      "decimals": 0
    },
    "invoice_number": "string",
    "custom": "string",
    "buyer": {
      "name": "string"
    },
    "seller": {
      "email": "string",
      "merchant_id": "string",
      "name": "string"
    },
    "items": [
      {
        "item_id": "string",
        "item_name": "string",
        "item_description": "string",
        "item_quantity": "string",
        "partner_transaction_id": "string",
        "reason": "MERCHANDISE_OR_SERVICE_NOT_RECEIVED",
        "dispute_amount": {
          "currency_code": "str",
          "value": "string"
        },
        "notes": "string",
        "item_type": "PRODUCT",
        "product_details": null,
        "service_details": null,
        "booking_details": null,
        "digital_download_details": null,
        "cancellation_details": null,
        "agreed_refund_details": null
      }
    ],
    "payment_processor": null
  }
]
```

An array of transactions for which disputes were created.
