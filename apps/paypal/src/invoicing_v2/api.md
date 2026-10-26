<h1 id="invoices">Invoices v2.6</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Use the Invoicing API to create, send, and manage invoices. You can also use the API or webhooks to track invoice payments. When you send an invoice to a customer, the invoice moves from draft to payable state. PayPal then emails the customer a link to the invoice on the PayPal website. Customers with a PayPal account can log in and pay the invoice with PayPal. Alternatively, customers can pay as a guest with a debit card or credit card. For more information, see the <a href="/docs/invoicing/">Invoicing Overview</a> and the <a href="/docs/invoicing/basic-integration/">Invoicing Integration Guide</a>.

Base URLs:

* <a href="https://api-m.sandbox.paypal.com">https://api-m.sandbox.paypal.com</a> - PayPal Sandbox Environment

* <a href="https://api-m.paypal.com">https://api-m.paypal.com</a> - PayPal Live Environment

<a href="https://developer.paypal.com/docs/api/invoicing/v2/">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 authentication

    - Flow: clientCredentials
    - Token URL = [/v1/oauth2/token](/v1/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://uri.paypal.com/services/invoicing/invoices/read|For Reading the invoice details.|
|https://uri.paypal.com/services/invoicing/invoices/readwrite|For managing (Create, Update, Delete) invoice.|
|https://uri.paypal.com/services/invoicing/internal|Manage invoice resource internal clients.|

<h1 id="invoices-invoices">invoices</h1>

Use the `/invoices` resource to create, update, and send invoices and invoice reminders. To manage invoices, you can also list invoices, show details for invoices, delete draft invoices, and cancel sent invoices. You can also record payments for invoices to mark them as fully or partially paid, or record refunds for invoices to mark them as fully or partially refunded. You can create QR codes for invoices that can be scanned, viewed, and paid by a mobile phone.

## List invoices

<a id="opIdinvoices.list"></a>

> Code samples

```bash
curl https://api-m.paypal.com/v2/invoicing/invoices \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/invoicing/invoices`

Lists invoices. To filter the invoices that appear in the response, you can specify one or more optional query parameters.

<h3 id="list-invoices-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer|false|The page number to be retrieved, for the list of templates. So, a combination of `page=1` and `page_size=20` returns the first 20 templates. A combination of `page=2` and `page_size=20` returns the next 20 templates.|
|page_size|query|integer|false|The maximum number of templates to return in the response.|
|total_required|query|boolean|false|Indicates whether the to show <code>total_pages</code> and <code>total_items</code> in the response.|
|fields|query|string|false|The fields to return in the response. Value is `all` or `none`. To return only the template name, ID, and default attributes, specify `none`.|

> Example responses

> 200 Response

```json
{
  "total_pages": 0,
  "total_items": 0,
  "items": [
    {
      "id": "string",
      "parent_id": "string",
      "status": "DRAFT",
      "detail": {
        "reference": "string",
        "currency_code": "str",
        "note": "string",
        "terms_and_conditions": "string",
        "memo": "string",
        "attachments": [
          {
            "id": "string",
            "reference_url": "http://example.com",
            "content_type": "string",
            "create_time": "stringstringstringst",
            "size": "string"
          }
        ],
        "invoice_number": "string",
        "invoice_date": "stringstri",
        "payment_term": {
          "term_type": "DUE_ON_RECEIPT",
          "due_date": "stringstri"
        },
        "metadata": {
          "create_time": "stringstringstringst",
          "created_by": "string",
          "last_update_time": "stringstringstringst",
          "last_updated_by": "string",
          "cancel_time": "stringstringstringst",
          "cancelled_by": "string",
          "first_sent_time": "stringstringstringst",
          "last_sent_time": "stringstringstringst",
          "last_sent_by": "string",
          "created_by_flow": "MULTIPLE_RECIPIENTS_GROUP",
          "recipient_view_url": "http://example.com",
          "invoicer_view_url": "http://example.com"
        }
      },
      "invoicer": {
        "business_name": "string",
        "name": {
          "prefix": "string",
          "given_name": "string",
          "surname": "string",
          "middle_name": "string",
          "suffix": "string",
          "alternate_full_name": "string",
          "full_name": "string"
        },
        "address": {
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
        "email_address": "string",
        "phones": [
          {
            "country_code": "str",
            "national_number": "string",
            "extension_number": "string",
            "phone_type": "FAX"
          }
        ],
        "website": "http://example.com",
        "tax_id": "string",
        "additional_notes": "string",
        "logo_url": "http://example.com"
      },
      "primary_recipients": [
        {
          "billing_info": {
            "business_name": "string",
            "name": {
              "prefix": "string",
              "given_name": "string",
              "surname": "string",
              "middle_name": "string",
              "suffix": "string",
              "alternate_full_name": "string",
              "full_name": "string"
            },
            "address": {
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
            "email_address": "string",
            "phones": [
              {
                "country_code": "str",
                "national_number": "string",
                "extension_number": "string",
                "phone_type": "FAX"
              }
            ],
            "additional_info": "string",
            "language": "string"
          },
          "shipping_info": {
            "business_name": "string",
            "name": {
              "prefix": "string",
              "given_name": "string",
              "surname": "string",
              "middle_name": "string",
              "suffix": "string",
              "alternate_full_name": "string",
              "full_name": "string"
            },
            "address": {
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
        }
      ],
      "additional_recipients": [
        "string"
      ],
      "items": [
        {
          "id": "string",
          "name": "string",
          "description": "string",
          "quantity": "string",
          "unit_amount": {
            "currency_code": "str",
            "value": "string"
          },
          "tax": {
            "name": "string",
            "percent": "string",
            "amount": {
              "currency_code": "str",
              "value": "string"
            },
            "tax_note": "string"
          },
          "item_date": "stringstri",
          "discount": {
            "percent": "string",
            "amount": {
              "currency_code": "str",
              "value": "string"
            }
          },
          "unit_of_measure": "QUANTITY"
        }
      ],
      "configuration": {
        "tax_calculated_after_discount": true,
        "tax_inclusive": false,
        "allow_tip": false,
        "partial_payment": {
          "allow_partial_payment": false,
          "minimum_amount_due": {
            "currency_code": "str",
            "value": "string"
          }
        },
        "has_conditional_rule": false,
        "template_id": "PayPal system template"
      },
      "amount": {
        "currency_code": "str",
        "value": "string",
        "breakdown": {
          "item_total": {
            "currency_code": "str",
            "value": "string"
          },
          "discount": {
            "invoice_discount": {
              "percent": "string",
              "amount": {
                "currency_code": "str",
                "value": "string"
              }
            },
            "item_discount": {
              "currency_code": "str",
              "value": "string"
            }
          },
          "tax_total": {
            "currency_code": "str",
            "value": "string"
          },
          "shipping": {
            "amount": {
              "currency_code": "str",
              "value": "string"
            },
            "tax": {
              "name": "string",
              "percent": "string",
              "amount": {
                "currency_code": "str",
                "value": "string"
              },
              "tax_note": "string"
            }
          },
          "custom": {
            "label": "string",
            "amount": {
              "currency_code": "str",
              "value": "string"
            }
          }
        }
      },
      "due_amount": {
        "currency_code": "str",
        "value": "string"
      },
      "gratuity": {
        "currency_code": "str",
        "value": "string"
      },
      "payments": {
        "paid_amount": {
          "currency_code": "str",
          "value": "string"
        },
        "transactions": [
          {
            "type": "PAYPAL",
            "payment_id": "string",
            "payment_date": "stringstri",
            "method": "BANK_TRANSFER",
            "note": "string",
            "amount": {
              "currency_code": "str",
              "value": "string"
            },
            "shipping_info": {
              "business_name": "string",
              "name": {
                "prefix": "string",
                "given_name": "string",
                "surname": "string",
                "middle_name": "string",
                "suffix": "string",
                "alternate_full_name": "string",
                "full_name": "string"
              },
              "address": {
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
          }
        ]
      },
      "refunds": {
        "refund_amount": {
          "currency_code": "str",
          "value": "string"
        },
        "transactions": [
          {
            "type": "PAYPAL",
            "refund_id": "string",
            "refund_date": "stringstri",
            "amount": {
              "currency_code": "str",
              "value": "string"
            },
            "method": "BANK_TRANSFER"
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

> 400 Response

```json
{
  "name": "INVALID_REQUEST",
  "message": "Request is not well-formed, syntactically incorrect, or violates schema.",
  "details": [
    {
      "issue": "INVALID_INTEGER_MAX_VALUE",
      "description": "Value exceeds max value."
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

<h3 id="list-invoices-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful request returns the HTTP `200 OK` status code and a JSON response body that lists invoices with details.|[invoices](#schemainvoices)|
|400|Bad Request|Invalid request.|Inline|
|403|Forbidden|Authorization Error.|[error_403](#schemaerror_403)|
|500|Internal Server Error|An internal server error has occurred.|[error_500](#schemaerror_500)|
|default|Default|The default response.|[error_default](#schemaerror_default)|

<h3 id="list-invoices-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|message|string|false|none|none|
|details|[[error_details](#schemaerror_details)]|false|none|none|
|debug_id|string|false|none|The PayPal internal ID. Used for correlation purposes.|
|links|[[error_link_description](#schemaerror_link_description)]|false|none|An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).|
|details|[object]|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|name|INVALID_REQUEST|
|message|Request is not well-formed, syntactically incorrect, or violates schema.|
|» issue|INVALID_INTEGER_MAX_VALUE|
|» description|Value exceeds max value.|
|» issue|INVALID_INTEGER_MIN_VALUE|
|» description|Value less than minimum value.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://uri.paypal.com/services/invoicing/invoices/read )
</aside>

## Create draft invoice

<a id="opIdinvoices.create"></a>

> Code samples

```bash
curl https://api-m.paypal.com/v2/invoicing/invoices \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "detail": {
      "reference": "string",
      "currency_code": "str",
      "note": "string",
      "terms_and_conditions": "string",
      "memo": "string",
      "attachments": [
        {
          "id": "string",
          "reference_url": "http://example.com",
          "content_type": "string",
          "create_time": "stringstringstringst",
          "size": "string"
        }
      ],
      "invoice_number": "string",
      "invoice_date": "stringstri",
      "payment_term": {
        "term_type": "DUE_ON_RECEIPT",
        "due_date": "stringstri"
      }
    },
    "invoicer": {
      "business_name": "string",
      "name": {
        "prefix": "string",
        "given_name": "string",
        "surname": "string",
        "middle_name": "string",
        "suffix": "string",
        "alternate_full_name": "string",
        "full_name": "string"
      },
      "address": {
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
      "email_address": "string",
      "phones": [
        {
          "country_code": "str",
          "national_number": "string",
          "extension_number": "string",
          "phone_type": "FAX"
        }
      ],
      "website": "http://example.com",
      "tax_id": "string",
      "additional_notes": "string",
      "logo_url": "http://example.com"
    },
    "primary_recipients": [
      {
        "billing_info": {
          "business_name": "string",
          "name": {
            "prefix": "string",
            "given_name": "string",
            "surname": "string",
            "middle_name": "string",
            "suffix": "string",
            "alternate_full_name": "string",
            "full_name": "string"
          },
          "address": {
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
          "email_address": "string",
          "phones": [
            {
              "country_code": "str",
              "national_number": "string",
              "extension_number": "string",
              "phone_type": "FAX"
            }
          ],
          "additional_info": "string",
          "language": "string"
        },
        "shipping_info": {
          "business_name": "string",
          "name": {
            "prefix": "string",
            "given_name": "string",
            "surname": "string",
            "middle_name": "string",
            "suffix": "string",
            "alternate_full_name": "string",
            "full_name": "string"
          },
          "address": {
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
      }
    ],
    "additional_recipients": [
      "string"
    ],
    "items": [
      {
        "name": "string",
        "description": "string",
        "quantity": "string",
        "unit_amount": {
          "currency_code": "str",
          "value": "string"
        },
        "tax": {
          "name": "string",
          "percent": "string",
          "tax_note": "string"
        },
        "item_date": "stringstri",
        "discount": {
          "percent": "string",
          "amount": {
            "currency_code": "str",
            "value": "string"
          }
        },
        "unit_of_measure": "QUANTITY"
      }
    ],
    "configuration": {
      "tax_calculated_after_discount": true,
      "tax_inclusive": false,
      "allow_tip": false,
      "partial_payment": {
        "allow_partial_payment": false,
        "minimum_amount_due": {
          "currency_code": "str",
          "value": "string"
        }
      },
      "has_conditional_rule": false,
      "template_id": "PayPal system template"
    },
    "amount": {
      "currency_code": "str",
      "value": "string",
      "breakdown": {
        "item_total": {
          "currency_code": "str",
          "value": "string"
        },
        "discount": {
          "invoice_discount": {
            "percent": "string",
            "amount": {
              "currency_code": "str",
              "value": "string"
            }
          },
          "item_discount": {
            "currency_code": "str",
            "value": "string"
          }
        },
        "tax_total": {
          "currency_code": "str",
          "value": "string"
        },
        "shipping": {
          "amount": {
            "currency_code": "str",
            "value": "string"
          },
          "tax": {
            "name": "string",
            "percent": "string",
            "tax_note": "string"
          }
        },
        "custom": {
          "label": "string",
          "amount": {
            "currency_code": "str",
            "value": "string"
          }
        }
      }
    },
    "payments": {},
    "refunds": {}
  }'
```

`POST /v2/invoicing/invoices`

Creates a draft invoice. To move the invoice from a draft to payable state, you must <a href="#invoices_send">send the invoice</a>.<br/><br/>In the JSON request body, include invoice details including merchant information. The <code>invoice</code> object must include an <code>items</code> array.<blockquote><strong>Note:</strong> The merchant that you specify in an invoice must have a PayPal account in good standing.</blockquote>.

> Body parameter

```json
{
  "detail": {
    "reference": "string",
    "currency_code": "str",
    "note": "string",
    "terms_and_conditions": "string",
    "memo": "string",
    "attachments": [
      {
        "id": "string",
        "reference_url": "http://example.com",
        "content_type": "string",
        "create_time": "stringstringstringst",
        "size": "string"
      }
    ],
    "invoice_number": "string",
    "invoice_date": "stringstri",
    "payment_term": {
      "term_type": "DUE_ON_RECEIPT",
      "due_date": "stringstri"
    }
  },
  "invoicer": {
    "business_name": "string",
    "name": {
      "prefix": "string",
      "given_name": "string",
      "surname": "string",
      "middle_name": "string",
      "suffix": "string",
      "alternate_full_name": "string",
      "full_name": "string"
    },
    "address": {
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
    "email_address": "string",
    "phones": [
      {
        "country_code": "str",
        "national_number": "string",
        "extension_number": "string",
        "phone_type": "FAX"
      }
    ],
    "website": "http://example.com",
    "tax_id": "string",
    "additional_notes": "string",
    "logo_url": "http://example.com"
  },
  "primary_recipients": [
    {
      "billing_info": {
        "business_name": "string",
        "name": {
          "prefix": "string",
          "given_name": "string",
          "surname": "string",
          "middle_name": "string",
          "suffix": "string",
          "alternate_full_name": "string",
          "full_name": "string"
        },
        "address": {
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
        "email_address": "string",
        "phones": [
          {
            "country_code": "str",
            "national_number": "string",
            "extension_number": "string",
            "phone_type": "FAX"
          }
        ],
        "additional_info": "string",
        "language": "string"
      },
      "shipping_info": {
        "business_name": "string",
        "name": {
          "prefix": "string",
          "given_name": "string",
          "surname": "string",
          "middle_name": "string",
          "suffix": "string",
          "alternate_full_name": "string",
          "full_name": "string"
        },
        "address": {
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
    }
  ],
  "additional_recipients": [
    "string"
  ],
  "items": [
    {
      "name": "string",
      "description": "string",
      "quantity": "string",
      "unit_amount": {
        "currency_code": "str",
        "value": "string"
      },
      "tax": {
        "name": "string",
        "percent": "string",
        "tax_note": "string"
      },
      "item_date": "stringstri",
      "discount": {
        "percent": "string",
        "amount": {
          "currency_code": "str",
          "value": "string"
        }
      },
      "unit_of_measure": "QUANTITY"
    }
  ],
  "configuration": {
    "tax_calculated_after_discount": true,
    "tax_inclusive": false,
    "allow_tip": false,
    "partial_payment": {
      "allow_partial_payment": false,
      "minimum_amount_due": {
        "currency_code": "str",
        "value": "string"
      }
    },
    "has_conditional_rule": false,
    "template_id": "PayPal system template"
  },
  "amount": {
    "currency_code": "str",
    "value": "string",
    "breakdown": {
      "item_total": {
        "currency_code": "str",
        "value": "string"
      },
      "discount": {
        "invoice_discount": {
          "percent": "string",
          "amount": {
            "currency_code": "str",
            "value": "string"
          }
        },
        "item_discount": {
          "currency_code": "str",
          "value": "string"
        }
      },
      "tax_total": {
        "currency_code": "str",
        "value": "string"
      },
      "shipping": {
        "amount": {
          "currency_code": "str",
          "value": "string"
        },
        "tax": {
          "name": "string",
          "percent": "string",
          "tax_note": "string"
        }
      },
      "custom": {
        "label": "string",
        "amount": {
          "currency_code": "str",
          "value": "string"
        }
      }
    }
  },
  "payments": {},
  "refunds": {}
}
```

<h3 id="create-draft-invoice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[invoice](#schemainvoice)|true|The invoice details which includes all information of the invoice like items, billing information.|
|» detail|body|[invoice_detail](#schemainvoice_detail)|true|The details of the invoice. Includes the invoice number, date, payment terms, and audit metadata.|
|» invoicer|body|[invoicer_info](#schemainvoicer_info)|false|The invoicer information. Includes the business name, email, address, phone, fax, tax ID, additional notes, and logo URL.|
|» primary_recipients|body|[recipient_info_list](#schemarecipient_info_list)|false|The billing and shipping information. Includes name, email, address, phone and language.|
|» additional_recipients|body|[email_address_list](#schemaemail_address_list)|false|An array of one or more CC: emails to which notifications are sent. If you omit this parameter, a notification is sent to all CC: email addresses that are part of the invoice.<blockquote><strong>Note:</strong> Valid values are email addresses in the `additional_recipients` value associated with the invoice.</blockquote>|
|» items|body|[item_list](#schemaitem_list)|false|An array of invoice line item information.|
|» configuration|body|[configuration](#schemaconfiguration)|false|The invoice configuration details. Includes partial payment, tip, and tax calculated after discount.|
|» amount|body|[amount_summary_detail](#schemaamount_summary_detail)|false|The invoice amount summary of item total, discount, tax total and shipping..|
|» payments|body|[payments](#schemapayments)|false|List of payments registered against the invoice..|
|» refunds|body|[refunds](#schemarefunds)|false|List of refunds against this invoice. The invoicing refund details includes refund type, date, amount, and method.|

> Example responses

> 201 Response

```json
{
  "id": "string",
  "parent_id": "string",
  "status": "DRAFT",
  "detail": {
    "reference": "string",
    "currency_code": "str",
    "note": "string",
    "terms_and_conditions": "string",
    "memo": "string",
    "attachments": [
      {
        "id": "string",
        "reference_url": "http://example.com",
        "content_type": "string",
        "create_time": "stringstringstringst",
        "size": "string"
      }
    ],
    "invoice_number": "string",
    "invoice_date": "stringstri",
    "payment_term": {
      "term_type": "DUE_ON_RECEIPT",
      "due_date": "stringstri"
    },
    "metadata": {
      "create_time": "stringstringstringst",
      "created_by": "string",
      "last_update_time": "stringstringstringst",
      "last_updated_by": "string",
      "cancel_time": "stringstringstringst",
      "cancelled_by": "string",
      "first_sent_time": "stringstringstringst",
      "last_sent_time": "stringstringstringst",
      "last_sent_by": "string",
      "created_by_flow": "MULTIPLE_RECIPIENTS_GROUP",
      "recipient_view_url": "http://example.com",
      "invoicer_view_url": "http://example.com"
    }
  },
  "invoicer": {
    "business_name": "string",
    "name": {
      "prefix": "string",
      "given_name": "string",
      "surname": "string",
      "middle_name": "string",
      "suffix": "string",
      "alternate_full_name": "string",
      "full_name": "string"
    },
    "address": {
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
    "email_address": "string",
    "phones": [
      {
        "country_code": "str",
        "national_number": "string",
        "extension_number": "string",
        "phone_type": "FAX"
      }
    ],
    "website": "http://example.com",
    "tax_id": "string",
    "additional_notes": "string",
    "logo_url": "http://example.com"
  },
  "primary_recipients": [
    {
      "billing_info": {
        "business_name": "string",
        "name": {
          "prefix": "string",
          "given_name": "string",
          "surname": "string",
          "middle_name": "string",
          "suffix": "string",
          "alternate_full_name": "string",
          "full_name": "string"
        },
        "address": {
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
        "email_address": "string",
        "phones": [
          {
            "country_code": "str",
            "national_number": "string",
            "extension_number": "string",
            "phone_type": "FAX"
          }
        ],
        "additional_info": "string",
        "language": "string"
      },
      "shipping_info": {
        "business_name": "string",
        "name": {
          "prefix": "string",
          "given_name": "string",
          "surname": "string",
          "middle_name": "string",
          "suffix": "string",
          "alternate_full_name": "string",
          "full_name": "string"
        },
        "address": {
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
    }
  ],
  "additional_recipients": [
    "string"
  ],
  "items": [
    {
      "id": "string",
      "name": "string",
      "description": "string",
      "quantity": "string",
      "unit_amount": {
        "currency_code": "str",
        "value": "string"
      },
      "tax": {
        "name": "string",
        "percent": "string",
        "amount": {
          "currency_code": "str",
          "value": "string"
        },
        "tax_note": "string"
      },
      "item_date": "stringstri",
      "discount": {
        "percent": "string",
        "amount": {
          "currency_code": "str",
          "value": "string"
        }
      },
      "unit_of_measure": "QUANTITY"
    }
  ],
  "configuration": {
    "tax_calculated_after_discount": true,
    "tax_inclusive": false,
    "allow_tip": false,
    "partial_payment": {
      "allow_partial_payment": false,
      "minimum_amount_due": {
        "currency_code": "str",
        "value": "string"
      }
    },
    "has_conditional_rule": false,
    "template_id": "PayPal system template"
  },
  "amount": {
    "currency_code": "str",
    "value": "string",
    "breakdown": {
      "item_total": {
        "currency_code": "str",
        "value": "string"
      },
      "discount": {
        "invoice_discount": {
          "percent": "string",
          "amount": {
            "currency_code": "str",
            "value": "string"
          }
        },
        "item_discount": {
          "currency_code": "str",
          "value": "string"
        }
      },
      "tax_total": {
        "currency_code": "str",
        "value": "string"
      },
      "shipping": {
        "amount": {
          "currency_code": "str",
          "value": "string"
        },
        "tax": {
          "name": "string",
          "percent": "string",
          "amount": {
            "currency_code": "str",
            "value": "string"
          },
          "tax_note": "string"
        }
      },
      "custom": {
        "label": "string",
        "amount": {
          "currency_code": "str",
          "value": "string"
        }
      }
    }
  },
  "due_amount": {
    "currency_code": "str",
    "value": "string"
  },
  "gratuity": {
    "currency_code": "str",
    "value": "string"
  },
  "payments": {
    "paid_amount": {
      "currency_code": "str",
      "value": "string"
    },
    "transactions": [
      {
        "type": "PAYPAL",
        "payment_id": "string",
        "payment_date": "stringstri",
        "method": "BANK_TRANSFER",
        "note": "string",
        "amount": {
          "currency_code": "str",
          "value": "string"
        },
        "shipping_info": {
          "business_name": "string",
          "name": {
            "prefix": "string",
            "given_name": "string",
            "surname": "string",
            "middle_name": "string",
            "suffix": "string",
            "alternate_full_name": "string",
            "full_name": "string"
          },
          "address": {
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
      }
    ]
  },
  "refunds": {
    "refund_amount": {
      "currency_code": "str",
      "value": "string"
    },
    "transactions": [
      {
        "type": "PAYPAL",
        "refund_id": "string",
        "refund_date": "stringstri",
        "amount": {
          "currency_code": "str",
          "value": "string"
        },
        "method": "BANK_TRANSFER"
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
  "name": "INVALID_REQUEST",
  "message": "Request is not well-formed, syntactically incorrect, or violates schema.",
  "details": [
    {
      "issue": "INVALID_STRING_MAX_LENGTH",
      "description": "Address line2 length should be less than 300 characters."
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

> 422 Response

```json
{
  "name": "UNPROCESSABLE_ENTITY",
  "message": "The requested action could not be performed, semantically incorrect, or failed business validation.",
  "details": [
    {
      "issue": "USER_NOT_FOUND",
      "description": "User is not associated with paypal based on invoicer email."
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

<h3 id="create-draft-invoice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|A successful request returns the HTTP `201 Created` status code. A JSON response body that shows invoice details is returned if you set <code>prefer=return=representation</code>.|[invoice](#schemainvoice)|
|400|Bad Request|Invalid request.|Inline|
|403|Forbidden|Authorization Error.|[error_403](#schemaerror_403)|
|422|Unprocessable Entity|Unprocessable Entity.|Inline|
|500|Internal Server Error|An internal server error has occurred.|[error_500](#schemaerror_500)|
|default|Default|The default response.|[error_default](#schemaerror_default)|

<h3 id="create-draft-invoice-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|message|string|false|none|none|
|details|[[error_details](#schemaerror_details)]|false|none|none|
|debug_id|string|false|none|The PayPal internal ID. Used for correlation purposes.|
|links|[[error_link_description](#schemaerror_link_description)]|false|none|An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).|
|details|[object]|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|name|INVALID_REQUEST|
|message|Request is not well-formed, syntactically incorrect, or violates schema.|
|» issue|INVALID_STRING_MAX_LENGTH|
|» description|Address line2 length should be less than 300 characters.|
|» issue|INVALID_STRING_LENGTH|
|» description|National Number length should be between 1 and 14.|
|» issue|INVALID_STRING_MAX_LENGTH|
|» description|Address line1 length should be less than 300 characters.|
|» issue|INVALID_PARAMETER_SYNTAX|
|» description|Country code is invalid.|
|» issue|INVALID_STRING_MAX_LENGTH|
|» description|Custom label length should be less than 50 characters.|
|» issue|INVALID_STRING_MAX_LENGTH|
|» description|Given name length should be less than 140 characters.|
|» issue|INVALID_STRING_LENGTH|
|» description|Language is invalid.|
|» issue|INVALID_STRING_MAX_LENGTH|
|» description|Admin area1 length should be less than 300 characters.|
|» issue|INVALID_STRING_LENGTH|
|» description|Item quantity length should be 1 and 14.|
|» issue|INVALID_STRING_MAX_LENGTH|
|» description|Surname length should be less than 140 characters.|
|» issue|INVALID_STRING_LENGTH|
|» description|Attachment reference url length should be between 1 and 2000.|
|» issue|INVALID_STRING_LENGTH|
|» description|Country code length should be 2 characters.|
|» issue|INVALID_STRING_LENGTH|
|» description|Currency code length should be 3 characters.|
|» issue|INVALID_STRING_MAX_LENGTH|
|» description|Business name length should be less than 300 characters.|
|» issue|INVALID_STRING_MAX_LENGTH|
|» description|Minimum due amount length should be less than 32 characters.|
|» issue|INVALID_STRING_LENGTH|
|» description|Attachment id length should be between 1 and 255.|
|» issue|INVALID_STRING_MAX_LENGTH|
|» description|Admin area2 length should be less than 300 characters.|
|» issue|INVALID_STRING_MAX_LENGTH|
|» description|Tax name length should be less than 100.|
|» issue|INVALID_STRING_MAX_LENGTH|
|» description|Website url length should be less than 2048 characters.|
|» issue|INVALID_STRING_MAX_LENGTH|
|» description|Postal code length should be less than 60 characters.|
|» issue|INVALID_PARAMETER_SYNTAX|
|» description|National Number is not valid.|
|» issue|INVALID_STRING_MAX_LENGTH|
|» description|Memo length should be less than 4000 characters.|
|» issue|INVALID_STRING_MAX_LENGTH|
|» description|Item name length should be less than 200 characters.|
|» issue|INVALID_STRING_LENGTH|
|» description|country code length should be between 1 and 3.|
|» issue|INVALID_STRING_MAX_LENGTH|
|» description|Template Id length should be less than 22 characters.|
|» issue|INVALID_STRING_MAX_LENGTH|
|» description|Logo url length should be less than 4000 characters.|
|» issue|INVALID_STRING_MAX_LENGTH|
|» description|Invoice note length should be less than 4000 characters.|
|» issue|INVALID_STRING_MAX_LENGTH|
|» description|Reference field length should be less than 120 characters.|
|» issue|INVALID_PARAMETER_SYNTAX|
|» description|Due date is invalid.|
|» issue|INVALID_STRING_MAX_LENGTH|
|» description|Terms and Conditions length should be less than 4000 characters.|
|» issue|INVALID_STRING_LENGTH|
|» description|Email address length should be between 3 and 254.|
|» issue|INVALID_STRING_MAX_LENGTH|
|» description|Additional data length should be less than 4000.|
|» issue|INVALID_STRING_MAX_LENGTH|
|» description|Additional information value length should be less than 40 characters.|
|» issue|INVALID_STRING_MAX_LENGTH|
|» description|Tax id length should be less than 100 characters.|
|» issue|INVALID_PARAMETER_SYNTAX|
|» description|Invoice date is invalid.|
|» issue|INVALID_STRING_LENGTH|
|» description|Invoice date is invalid.|
|» issue|INVALID_STRING_MAX_LENGTH|
|» description|Invoice number length should be less than 25 characters.|
|» issue|INVALID_PARAMETER_SYNTAX|
|» description|Item Date is invalid.|
|» issue|INVALID_STRING_MAX_LENGTH|
|» description|Item description length should be less than 1000 characters.|
|» issue|INVALID_STRING_MAX_LENGTH|
|» description|Shipping Tax name length should be less than 100 characters.|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|message|string|false|none|none|
|details|[[error_details](#schemaerror_details)]|false|none|none|
|debug_id|string|false|none|The PayPal internal ID. Used for correlation purposes.|
|links|[[error_link_description](#schemaerror_link_description)]|false|none|An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).|
|details|[object]|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|name|UNPROCESSABLE_ENTITY|
|message|The requested action could not be performed, semantically incorrect, or failed business validation.|
|» issue|USER_NOT_FOUND|
|» description|User is not associated with paypal based on invoicer email.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://uri.paypal.com/services/invoicing/invoices/readwrite )
</aside>

## Send invoice

<a id="opIdinvoices.send"></a>

> Code samples

```bash
curl https://api-m.paypal.com/v2/invoicing/invoices/string/send \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "subject": "string",
    "note": "string",
    "send_to_invoicer": false,
    "send_to_recipient": true,
    "additional_recipients": [
      "string"
    ]
  }'
```

`POST /v2/invoicing/invoices/{invoice_id}/send`

Sends or schedules an invoice, by ID, to be sent to a customer. The action depends on the invoice issue date:<ul><li>If the invoice issue date is current or in the past, sends the invoice immediately.</li><li>If the invoice issue date is in the future, schedules the invoice to be sent on that date.</li></ul>To suppress the merchant's email notification, set the `send_to_invoicer` body parameter to `false`. To send the invoice through a share link and not through PayPal, set the <code>send_to_recipient</code> parameter to <code>false</code> in the <code>notification</code> object. The <code>send_to_recipient</code> parameter does not apply to a future issue date because the invoice is scheduled to be sent through PayPal on that date.<blockquote><strong>Notes:</strong><ul><li>After you send an invoice, resending it has no effect.</li><li>To send a notification for updates, <a href="#invoices_update">update the invoice</a> and set the <code>send_to_recipient</code> body parameter to <code>true</code>.</li></ul></blockquote>

> Body parameter

```json
{
  "subject": "string",
  "note": "string",
  "send_to_invoicer": false,
  "send_to_recipient": true,
  "additional_recipients": [
    "string"
  ]
}
```

<h3 id="send-invoice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|invoice_id|path|string|true|The ID of the draft invoice to delete.|
|body|body|[notification](#schemanotification)|false|The email or SMS notification to send to the payer when they send an invoice..|
|» subject|body|string|false|The subject of the email that is sent as a notification to the recipient.<blockquote><strong>Note:</strong> User-provided values for this field will not be honored and the subject will always be defaulted to a system-defined value.</blockquote>|
|» note|body|string|false|A note to the payer.<blockquote><strong>Note:</strong> User-provided values for this field will not be honored and the note will always be defaulted to a system-defined value.</blockquote>|
|» send_to_invoicer|body|boolean|false|Indicates whether to send a copy of the email to the merchant.|
|» send_to_recipient|body|boolean|false|Indicates whether to send a copy of the email to the recipient.|
|» additional_recipients|body|[email_address_list](#schemaemail_address_list)|false|An array of one or more CC: emails to which notifications are sent. If you omit this parameter, a notification is sent to all CC: email addresses that are part of the invoice.<blockquote><strong>Note:</strong> Valid values are email addresses in the `additional_recipients` value associated with the invoice.</blockquote>|

> Example responses

> 200 Response

```json
{
  "href": "string",
  "rel": "string",
  "method": "GET"
}
```

> 202 Response

```json
{
  "href": "string",
  "rel": "string",
  "method": "GET"
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

> 404 Response

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

> 422 Response

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

<h3 id="send-invoice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful request returns the HTTP `200 OK` when the invoice issue date is current date.|[link_description](#schemalink_description)|
|202|Accepted|The server has accepted the request and will execute it at a later time.|[link_description](#schemalink_description)|
|400|Bad Request|Invalid request.|[error_400](#schemaerror_400)|
|403|Forbidden|Authorization Error.|[error_403](#schemaerror_403)|
|404|Not Found|Resource Not Found.|[error_404](#schemaerror_404)|
|422|Unprocessable Entity|Unprocessable Entity.|[error_422](#schemaerror_422)|
|500|Internal Server Error|An internal server error has occurred.|[error_500](#schemaerror_500)|
|default|Default|The default response.|[error_default](#schemaerror_default)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://uri.paypal.com/services/invoicing/invoices/readwrite )
</aside>

## Send invoice reminder

<a id="opIdinvoices.remind"></a>

> Code samples

```bash
curl https://api-m.paypal.com/v2/invoicing/invoices/string/remind \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "subject": "string",
    "note": "string",
    "send_to_invoicer": false,
    "send_to_recipient": true,
    "additional_recipients": [
      "string"
    ]
  }'
```

`POST /v2/invoicing/invoices/{invoice_id}/remind`

Sends a reminder to the payer about an invoice, by ID. In the JSON request body, include a `notification` object that defines the subject of the reminder and other details. <blockquote><strong>Notes:</strong><ul><li>API caller can send only 2 reminders in a day.</li></ul></blockquote>.

> Body parameter

```json
{
  "subject": "string",
  "note": "string",
  "send_to_invoicer": false,
  "send_to_recipient": true,
  "additional_recipients": [
    "string"
  ]
}
```

<h3 id="send-invoice-reminder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|invoice_id|path|string|true|The ID of the draft invoice to delete.|
|body|body|[notification](#schemanotification)|false|The email or SMS notification that will be sent to the payer for reminder.|
|» subject|body|string|false|The subject of the email that is sent as a notification to the recipient.<blockquote><strong>Note:</strong> User-provided values for this field will not be honored and the subject will always be defaulted to a system-defined value.</blockquote>|
|» note|body|string|false|A note to the payer.<blockquote><strong>Note:</strong> User-provided values for this field will not be honored and the note will always be defaulted to a system-defined value.</blockquote>|
|» send_to_invoicer|body|boolean|false|Indicates whether to send a copy of the email to the merchant.|
|» send_to_recipient|body|boolean|false|Indicates whether to send a copy of the email to the recipient.|
|» additional_recipients|body|[email_address_list](#schemaemail_address_list)|false|An array of one or more CC: emails to which notifications are sent. If you omit this parameter, a notification is sent to all CC: email addresses that are part of the invoice.<blockquote><strong>Note:</strong> Valid values are email addresses in the `additional_recipients` value associated with the invoice.</blockquote>|

> Example responses

> 400 Response

```json
{
  "name": "INVALID_REQUEST",
  "message": "Request is not well-formed, syntactically incorrect, or violates schema.",
  "details": [
    {
      "issue": "INVALID_STRING_MAX_LENGTH",
      "description": "the value of a field is too long."
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
      "issue": "PERMISSION_DENIED",
      "description": "The requested invoice is not associated with the requested user."
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

> 404 Response

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

> 422 Response

```json
{
  "name": "UNPROCESSABLE_ENTITY",
  "message": "The requested action could not be performed, semantically incorrect, or failed business validation.",
  "details": [
    {
      "issue": "CANNOT_REMIND_INVOICE",
      "description": "You cannot remind an invoice which is in DRAFT status. Only UNPAID, SENT and PARTIALLY_PAID invoices can be reminded."
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

<h3 id="send-invoice-reminder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|A successful request returns the HTTP `204 No Content` status code with no JSON response body.|None|
|400|Bad Request|Invalid request.|Inline|
|403|Forbidden|Authorization Error.|Inline|
|404|Not Found|Resource Not Found.|[error_404](#schemaerror_404)|
|422|Unprocessable Entity|Unprocessable Entity.|Inline|
|500|Internal Server Error|An internal server error has occurred.|[error_500](#schemaerror_500)|
|default|Default|The default response.|[error_default](#schemaerror_default)|

<h3 id="send-invoice-reminder-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|message|string|false|none|none|
|details|[[error_details](#schemaerror_details)]|false|none|none|
|debug_id|string|false|none|The PayPal internal ID. Used for correlation purposes.|
|links|[[error_link_description](#schemaerror_link_description)]|false|none|An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).|
|details|[object]|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|name|INVALID_REQUEST|
|message|Request is not well-formed, syntactically incorrect, or violates schema.|
|» issue|INVALID_STRING_MAX_LENGTH|
|» description|the value of a field is too long.|
|» issue|INVALID_ARRAY_MAX_ITEMS|
|» description|Only maximum of 100 email address is supported in additional recipients.|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|message|string|false|none|none|
|details|[[error_details](#schemaerror_details)]|false|none|none|
|debug_id|string|false|none|The PayPal internal ID. Used for correlation purposes.|
|links|[[error_link_description](#schemaerror_link_description)]|false|none|An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).|
|details|[object]|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|name|NOT_AUTHORIZED|
|message|Authorization failed due to insufficient permissions.|
|» issue|PERMISSION_DENIED|
|» description|The requested invoice is not associated with the requested user.|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|message|string|false|none|none|
|details|[[error_details](#schemaerror_details)]|false|none|none|
|debug_id|string|false|none|The PayPal internal ID. Used for correlation purposes.|
|links|[[error_link_description](#schemaerror_link_description)]|false|none|An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).|
|details|[object]|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|name|UNPROCESSABLE_ENTITY|
|message|The requested action could not be performed, semantically incorrect, or failed business validation.|
|» issue|CANNOT_REMIND_INVOICE|
|» description|You cannot remind an invoice which is in DRAFT status. Only UNPAID, SENT and PARTIALLY_PAID invoices can be reminded.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://uri.paypal.com/services/invoicing/invoices/readwrite )
</aside>

## Cancel sent invoice

<a id="opIdinvoices.cancel"></a>

> Code samples

```bash
curl https://api-m.paypal.com/v2/invoicing/invoices/string/cancel \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "subject": "string",
    "note": "string",
    "send_to_invoicer": false,
    "send_to_recipient": true,
    "additional_recipients": [
      "string"
    ]
  }'
```

`POST /v2/invoicing/invoices/{invoice_id}/cancel`

Cancels a sent invoice, by ID, and, optionally, sends a notification about the cancellation to the payer, merchant, and CC: emails.

> Body parameter

```json
{
  "subject": "string",
  "note": "string",
  "send_to_invoicer": false,
  "send_to_recipient": true,
  "additional_recipients": [
    "string"
  ]
}
```

<h3 id="cancel-sent-invoice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|invoice_id|path|string|true|The ID of the draft invoice to delete.|
|body|body|[notification](#schemanotification)|true|The email or SMS notification that will be sent to the payer on cancellation.|
|» subject|body|string|false|The subject of the email that is sent as a notification to the recipient.<blockquote><strong>Note:</strong> User-provided values for this field will not be honored and the subject will always be defaulted to a system-defined value.</blockquote>|
|» note|body|string|false|A note to the payer.<blockquote><strong>Note:</strong> User-provided values for this field will not be honored and the note will always be defaulted to a system-defined value.</blockquote>|
|» send_to_invoicer|body|boolean|false|Indicates whether to send a copy of the email to the merchant.|
|» send_to_recipient|body|boolean|false|Indicates whether to send a copy of the email to the recipient.|
|» additional_recipients|body|[email_address_list](#schemaemail_address_list)|false|An array of one or more CC: emails to which notifications are sent. If you omit this parameter, a notification is sent to all CC: email addresses that are part of the invoice.<blockquote><strong>Note:</strong> Valid values are email addresses in the `additional_recipients` value associated with the invoice.</blockquote>|

> Example responses

> 400 Response

```json
{
  "name": "INVALID_REQUEST",
  "message": "Request is not well-formed, syntactically incorrect, or violates schema.",
  "details": [
    {
      "issue": "INVALID_STRING_MAX_LENGTH",
      "description": "Field value exceeded the maximum allowed number of characters."
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
      "issue": "PERMISSION_DENIED",
      "description": "The requested invoice is not associated with the requested user."
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

> 404 Response

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

> 422 Response

```json
{
  "name": "UNPROCESSABLE_ENTITY",
  "message": "The requested action could not be performed, semantically incorrect, or failed business validation.",
  "details": [
    {
      "issue": "CANNOT_CANCEL_DRAFT_INVOICE",
      "description": "Draft invoice cannot be canceled."
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

<h3 id="cancel-sent-invoice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|A successful request returns the HTTP `204 No Content` status code with no JSON response body.|None|
|400|Bad Request|Invalid request.|Inline|
|403|Forbidden|Authorization Error.|Inline|
|404|Not Found|Resource Not Found.|[error_404](#schemaerror_404)|
|422|Unprocessable Entity|Unprocessable Entity.|Inline|
|500|Internal Server Error|An internal server error has occurred.|[error_500](#schemaerror_500)|
|default|Default|The default response.|[error_default](#schemaerror_default)|

<h3 id="cancel-sent-invoice-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|message|string|false|none|none|
|details|[[error_details](#schemaerror_details)]|false|none|none|
|debug_id|string|false|none|The PayPal internal ID. Used for correlation purposes.|
|links|[[error_link_description](#schemaerror_link_description)]|false|none|An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).|
|details|[object]|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|name|INVALID_REQUEST|
|message|Request is not well-formed, syntactically incorrect, or violates schema.|
|» issue|INVALID_STRING_MAX_LENGTH|
|» description|Field value exceeded the maximum allowed number of characters.|
|» issue|INVALID_ARRAY_MAX_ITEMS|
|» description|Only maximum of 100 email address is supported in additional recipients.|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|message|string|false|none|none|
|details|[[error_details](#schemaerror_details)]|false|none|none|
|debug_id|string|false|none|The PayPal internal ID. Used for correlation purposes.|
|links|[[error_link_description](#schemaerror_link_description)]|false|none|An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).|
|details|[object]|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|name|NOT_AUTHORIZED|
|message|Authorization failed due to insufficient permissions.|
|» issue|PERMISSION_DENIED|
|» description|The requested invoice is not associated with the requested user.|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|message|string|false|none|none|
|details|[[error_details](#schemaerror_details)]|false|none|none|
|debug_id|string|false|none|The PayPal internal ID. Used for correlation purposes.|
|links|[[error_link_description](#schemaerror_link_description)]|false|none|An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).|
|details|[object]|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|name|UNPROCESSABLE_ENTITY|
|message|The requested action could not be performed, semantically incorrect, or failed business validation.|
|» issue|CANNOT_CANCEL_DRAFT_INVOICE|
|» description|Draft invoice cannot be canceled.|
|» issue|CANNOT_CANCEL_PAID_INVOICE|
|» description|Cannot cancel a paid or partially paid invoice.|
|» issue|CANNOT_CANCEL_REFUNDED_INVOICE|
|» description|Cannot cancel a refunded or partially refunded invoice.|
|» issue|CANNOT_CANCEL_SCHEDULED_INVOICE|
|» description|Cannot cancel a scheduled invoice.|
|» issue|INVOICE_CANCELED_ALREADY|
|» description|Invoice is already cancelled.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://uri.paypal.com/services/invoicing/invoices/readwrite )
</aside>

## Record payment for invoice

<a id="opIdinvoices.payments"></a>

> Code samples

```bash
curl https://api-m.paypal.com/v2/invoicing/invoices/string/payments \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "payment_id": "string",
    "payment_date": "stringstri",
    "method": "BANK_TRANSFER",
    "note": "string",
    "amount": {
      "currency_code": "str",
      "value": "string"
    },
    "shipping_info": {
      "business_name": "string",
      "name": {
        "prefix": "string",
        "given_name": "string",
        "surname": "string",
        "middle_name": "string",
        "suffix": "string",
        "alternate_full_name": "string",
        "full_name": "string"
      },
      "address": {
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
  }'
```

`POST /v2/invoicing/invoices/{invoice_id}/payments`

Records a payment for the invoice. If no payment is due, the invoice is marked as `PAID`. Otherwise, the invoice is marked as `PARTIALLY PAID`.

> Body parameter

```json
{
  "payment_id": "string",
  "payment_date": "stringstri",
  "method": "BANK_TRANSFER",
  "note": "string",
  "amount": {
    "currency_code": "str",
    "value": "string"
  },
  "shipping_info": {
    "business_name": "string",
    "name": {
      "prefix": "string",
      "given_name": "string",
      "surname": "string",
      "middle_name": "string",
      "suffix": "string",
      "alternate_full_name": "string",
      "full_name": "string"
    },
    "address": {
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
}
```

<h3 id="record-payment-for-invoice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|invoice_id|path|string|true|The ID of the draft invoice to delete.|
|body|body|[payment_detail](#schemapayment_detail)|true|The details of the payment to record against the invoice.|
|» payment_id|body|string|false|The ID for a PayPal payment transaction. Required for the `PAYPAL` payment type.|
|» payment_date|body|[date_no_time](#schemadate_no_time)|false|The date when the invoice was paid, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). For example, *yyyy*-*MM*-*dd* *z*.|
|» method|body|[payment_method](#schemapayment_method)|true|The payment mode or method through which the invoicer can accept the payment.|
|» note|body|string|false|A note associated with an external cash or check payment.|
|» amount|body|[money](#schemamoney)|false|The payment amount to record against the invoice. If you omit this parameter, the total invoice amount is marked as paid. This amount cannot exceed the amount due.|
|» shipping_info|body|[contact_name_address](#schemacontact_name_address)|false|The recipient's shipping information. Includes the user's contact information, which includes name and address.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» method|BANK_TRANSFER|
|» method|CASH|
|» method|CHECK|
|» method|CREDIT_CARD|
|» method|DEBIT_CARD|
|» method|PAYPAL|
|» method|WIRE_TRANSFER|
|» method|OTHER|

> Example responses

> 200 Response

```json
{
  "payment_id": "string"
}
```

> 400 Response

```json
{
  "name": "INVALID_REQUEST",
  "message": "Request is not well-formed, syntactically incorrect, or violates schema.",
  "details": [
    {
      "issue": "MISSING_REQUIRED_PARAMETER",
      "description": "Payment method is missing. Please provide a valid payment method."
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
      "issue": "PERMISSION_DENIED",
      "description": "The requested invoice is not associated with the requested user."
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

> 404 Response

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

> 422 Response

```json
{
  "name": "UNPROCESSABLE_ENTITY",
  "message": "The requested action could not be performed, semantically incorrect, or failed business validation.",
  "details": [
    {
      "issue": "PAYMENT_AMOUNT_GREATER_THAN_AMOUNT_DUE",
      "description": "Payment amount is greater than the amount due."
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

<h3 id="record-payment-for-invoice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful request returns the HTTP `200 Created` status code and a reference to the recorded payment.|[payment_reference](#schemapayment_reference)|
|400|Bad Request|Invalid request.|Inline|
|403|Forbidden|Authorization Error.|Inline|
|404|Not Found|Resource Not Found.|[error_404](#schemaerror_404)|
|422|Unprocessable Entity|Unprocessable Entity.|Inline|
|500|Internal Server Error|An internal server error has occurred.|[error_500](#schemaerror_500)|
|default|Default|The default response.|[error_default](#schemaerror_default)|

<h3 id="record-payment-for-invoice-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|message|string|false|none|none|
|details|[[error_details](#schemaerror_details)]|false|none|none|
|debug_id|string|false|none|The PayPal internal ID. Used for correlation purposes.|
|links|[[error_link_description](#schemaerror_link_description)]|false|none|An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).|
|details|[object]|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|name|INVALID_REQUEST|
|message|Request is not well-formed, syntactically incorrect, or violates schema.|
|» issue|MISSING_REQUIRED_PARAMETER|
|» description|Payment method is missing. Please provide a valid payment method.|
|» issue|INVALID_PAYMENT_METHOD|
|» description|The value provided is not an acceptable method of payment.|
|» issue|NOT_SUPPORTED|
|» description|Currency code is not supported.|
|» issue|INVALID_STRING_LENGTH|
|» description|Currency code length should be 3 characters.|
|» issue|MISSING_REQUIRED_PARAMETER|
|» description|Amount value is missing. Please provide a valid amount.|
|» issue|INVALID_STRING_MAX_LENGTH|
|» description|Amount value cannot be greater than the maximum limit of 32 characters length.|
|» issue|INVALID_PARAMETER_SYNTAX|
|» description|Amount value is invalid. Should be a numeric value.|
|» issue|VALUE_CANNOT_BE_ZERO|
|» description|Payment amount cannot be zero. Please provide a valid amount.|
|» issue|INVALID_DECIMAL_VALUE|
|» description|Payment amount value is invalid. Can have non-negative value with maximum 7 digits and upto 2 fractions.|
|» issue|INVALID_INTEGER_VALUE|
|» description|Payment amount value is invalid. Can have non-negative value with maximum 6 digits.|
|» issue|INVALID_PARAMETER_SYNTAX|
|» description|Date should be of format yyyy-mm-dd.|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|message|string|false|none|none|
|details|[[error_details](#schemaerror_details)]|false|none|none|
|debug_id|string|false|none|The PayPal internal ID. Used for correlation purposes.|
|links|[[error_link_description](#schemaerror_link_description)]|false|none|An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).|
|details|[object]|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|name|NOT_AUTHORIZED|
|message|Authorization failed due to insufficient permissions.|
|» issue|PERMISSION_DENIED|
|» description|The requested invoice is not associated with the requested user.|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|message|string|false|none|none|
|details|[[error_details](#schemaerror_details)]|false|none|none|
|debug_id|string|false|none|The PayPal internal ID. Used for correlation purposes.|
|links|[[error_link_description](#schemaerror_link_description)]|false|none|An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).|
|details|[object]|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|name|UNPROCESSABLE_ENTITY|
|message|The requested action could not be performed, semantically incorrect, or failed business validation.|
|» issue|PAYMENT_AMOUNT_GREATER_THAN_AMOUNT_DUE|
|» description|Payment amount is greater than the amount due.|
|» issue|INVALID_INVOICE_TYPE|
|» description|The invoice type is not valid for paying an invoice.|
|» issue|CANNOT_PROCESS_PAYMENTS|
|» description|Current invoice state does not support payment processing.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://uri.paypal.com/services/invoicing/invoices/readwrite )
</aside>

## Delete external payment

<a id="opIdinvoices.payments-delete"></a>

> Code samples

```bash
curl https://api-m.paypal.com/v2/invoicing/invoices/string/payments/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v2/invoicing/invoices/{invoice_id}/payments/{transaction_id}`

Deletes an external payment, by invoice ID and transaction ID.

<h3 id="delete-external-payment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|invoice_id|path|string|true|The ID of the draft invoice to delete.|
|transaction_id|path|string|true|The ID of the external refund transaction to delete.|

> Example responses

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
      "issue": "PERMISSION_DENIED",
      "description": "The requested invoice is not associated with the requested user."
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

> 404 Response

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

> 422 Response

```json
{
  "name": "UNPROCESSABLE_ENTITY",
  "message": "The requested action could not be performed, semantically incorrect, or failed business validation.",
  "details": [
    {
      "issue": "CANNOT_DELETE_EXTERNAL_PAYMENT",
      "description": "The external payment cannot be deleted as the recorded refund cannot exceed the recored payment for an invoice."
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

<h3 id="delete-external-payment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|A successful request returns the HTTP `204 No Content` status code with no JSON response body.|None|
|400|Bad Request|Invalid request.|[error_400](#schemaerror_400)|
|403|Forbidden|Authorization Error.|Inline|
|404|Not Found|Resource Not Found.|[error_404](#schemaerror_404)|
|422|Unprocessable Entity|Unprocessable Entity.|Inline|
|500|Internal Server Error|An internal server error has occurred.|[error_500](#schemaerror_500)|
|default|Default|The default response.|[error_default](#schemaerror_default)|

<h3 id="delete-external-payment-responseschema">Response Schema</h3>

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|message|string|false|none|none|
|details|[[error_details](#schemaerror_details)]|false|none|none|
|debug_id|string|false|none|The PayPal internal ID. Used for correlation purposes.|
|links|[[error_link_description](#schemaerror_link_description)]|false|none|An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).|
|details|[object]|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|name|NOT_AUTHORIZED|
|message|Authorization failed due to insufficient permissions.|
|» issue|PERMISSION_DENIED|
|» description|The requested invoice is not associated with the requested user.|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|message|string|false|none|none|
|details|[[error_details](#schemaerror_details)]|false|none|none|
|debug_id|string|false|none|The PayPal internal ID. Used for correlation purposes.|
|links|[[error_link_description](#schemaerror_link_description)]|false|none|An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).|
|details|[object]|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|name|UNPROCESSABLE_ENTITY|
|message|The requested action could not be performed, semantically incorrect, or failed business validation.|
|» issue|CANNOT_DELETE_EXTERNAL_PAYMENT|
|» description|The external payment cannot be deleted as the recorded refund cannot exceed the recored payment for an invoice.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://uri.paypal.com/services/invoicing/invoices/readwrite )
</aside>

## Record refund for invoice

<a id="opIdinvoices.refunds"></a>

> Code samples

```bash
curl https://api-m.paypal.com/v2/invoicing/invoices/string/refunds \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "refund_date": "stringstri",
    "amount": {
      "currency_code": "str",
      "value": "string"
    },
    "method": "BANK_TRANSFER"
  }'
```

`POST /v2/invoicing/invoices/{invoice_id}/refunds`

Records a refund for the invoice. If all payments are refunded, the invoice is marked as `REFUNDED`. Otherwise, the invoice is marked as `PARTIALLY REFUNDED`.

> Body parameter

```json
{
  "refund_date": "stringstri",
  "amount": {
    "currency_code": "str",
    "value": "string"
  },
  "method": "BANK_TRANSFER"
}
```

<h3 id="record-refund-for-invoice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|invoice_id|path|string|true|The ID of the draft invoice to delete.|
|body|body|[refund_detail](#schemarefund_detail)|true|The details of the refund to record against the invoice.|
|» refund_date|body|[date_no_time](#schemadate_no_time)|false|The date when the invoice was refunded, in [Internet date format](https://tools.ietf.org/html/rfc3339#section-5.6). For example, `2014-02-27`.|
|» amount|body|[money](#schemamoney)|false|The amount to record as refunded. If you omit the amount, the total invoice paid amount is recorded as refunded.|
|» method|body|[payment_method](#schemapayment_method)|true|The payment mode or method through which the invoicer can accept the payments.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» method|BANK_TRANSFER|
|» method|CASH|
|» method|CHECK|
|» method|CREDIT_CARD|
|» method|DEBIT_CARD|
|» method|PAYPAL|
|» method|WIRE_TRANSFER|
|» method|OTHER|

> Example responses

> 200 Response

```json
{
  "refund_id": "string"
}
```

> 400 Response

```json
{
  "name": "INVALID_REQUEST",
  "message": "Request is not well-formed, syntactically incorrect, or violates schema.",
  "details": [
    {
      "issue": "MISSING_REQUIRED_PARAMETER",
      "description": "Payment method is missing. Please provide a valid payment method."
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
      "issue": "PERMISSION_DENIED",
      "description": "The requested invoice is not associated with the requested user."
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

> 404 Response

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

> 422 Response

```json
{
  "name": "UNPROCESSABLE_ENTITY",
  "message": "The requested action could not be performed, semantically incorrect, or failed business validation.",
  "details": [
    {
      "issue": "INVALID_REFUND_AMOUNT",
      "description": "Recorded refunds cannot exceed recorded payments."
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

<h3 id="record-refund-for-invoice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful request returns the HTTP `200 Created` status code and a reference to the recorded refund.|[refund_reference](#schemarefund_reference)|
|400|Bad Request|Invalid request.|Inline|
|403|Forbidden|Authorization Error.|Inline|
|404|Not Found|Resource Not Found.|[error_404](#schemaerror_404)|
|422|Unprocessable Entity|Unprocessable Entity.|Inline|
|500|Internal Server Error|An internal server error has occurred.|[error_500](#schemaerror_500)|
|default|Default|The default response.|[error_default](#schemaerror_default)|

<h3 id="record-refund-for-invoice-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|message|string|false|none|none|
|details|[[error_details](#schemaerror_details)]|false|none|none|
|debug_id|string|false|none|The PayPal internal ID. Used for correlation purposes.|
|links|[[error_link_description](#schemaerror_link_description)]|false|none|An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).|
|details|[object]|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|name|INVALID_REQUEST|
|message|Request is not well-formed, syntactically incorrect, or violates schema.|
|» issue|MISSING_REQUIRED_PARAMETER|
|» description|Payment method is missing. Please provide a valid payment method.|
|» issue|INVALID_REFUND_METHOD|
|» description|The value provided is not an acceptable method of refund.|
|» issue|INVALID_PARAMETER_SYNTAX|
|» description|The value provided is not an acceptable method of refund.|
|» issue|INVALID_STRING_LENGTH|
|» description|Currency code length should be 3 characters.|
|» issue|NOT_SUPPORTED|
|» description|Currency code is not supported. Please provide a valid currency code.|
|» issue|MISSING_REQUIRED_PARAMETER|
|» description|Amount value is missing. Please provide a valid amount.|
|» issue|INVALID_PARAMETER_SYNTAX|
|» description|Amount value is invalid. Should be a numeric value.|
|» issue|INVALID_STRING_MAX_LENGTH|
|» description|Amount value cannot be greater than the maximum limit of 32 characters length.|
|» issue|VALUE_CANNOT_BE_ZERO|
|» description|Refund amount cannot be zero.|
|» issue|INVALID_INTEGER_VALUE|
|» description|Refund amount value is invalid. Can have non-negative value with maximum 6 digits.|
|» issue|INVALID_DECIMAL_VALUE|
|» description|Refund amount value is invalid. Can have non-negative value with maximum 7 digits and upto 2 fractions.|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|message|string|false|none|none|
|details|[[error_details](#schemaerror_details)]|false|none|none|
|debug_id|string|false|none|The PayPal internal ID. Used for correlation purposes.|
|links|[[error_link_description](#schemaerror_link_description)]|false|none|An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).|
|details|[object]|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|name|NOT_AUTHORIZED|
|message|Authorization failed due to insufficient permissions.|
|» issue|PERMISSION_DENIED|
|» description|The requested invoice is not associated with the requested user.|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|message|string|false|none|none|
|details|[[error_details](#schemaerror_details)]|false|none|none|
|debug_id|string|false|none|The PayPal internal ID. Used for correlation purposes.|
|links|[[error_link_description](#schemaerror_link_description)]|false|none|An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).|
|details|[object]|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|name|UNPROCESSABLE_ENTITY|
|message|The requested action could not be performed, semantically incorrect, or failed business validation.|
|» issue|INVALID_REFUND_AMOUNT|
|» description|Recorded refunds cannot exceed recorded payments.|
|» issue|CANNOT_PROCESS_REFUNDS|
|» description|Current invoice state does not support refunds.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://uri.paypal.com/services/invoicing/invoices/readwrite )
</aside>

## Delete external refund

<a id="opIdinvoices.refunds-delete"></a>

> Code samples

```bash
curl https://api-m.paypal.com/v2/invoicing/invoices/string/refunds/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v2/invoicing/invoices/{invoice_id}/refunds/{transaction_id}`

Deletes an external refund, by invoice ID and transaction ID.

<h3 id="delete-external-refund-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|invoice_id|path|string|true|The ID of the draft invoice to delete.|
|transaction_id|path|string|true|The ID of the external refund transaction to delete.|

> Example responses

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
      "issue": "PERMISSION_DENIED",
      "description": "The requested invoice is not associated with the requested user."
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

> 404 Response

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

<h3 id="delete-external-refund-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|A successful request returns the HTTP `204 No Content` status code with no JSON response body.|None|
|400|Bad Request|Invalid request.|[error_400](#schemaerror_400)|
|403|Forbidden|Authorization Error.|Inline|
|404|Not Found|Resource Not Found.|[error_404](#schemaerror_404)|
|500|Internal Server Error|An internal server error has occurred.|[error_500](#schemaerror_500)|
|default|Default|The default response.|[error_default](#schemaerror_default)|

<h3 id="delete-external-refund-responseschema">Response Schema</h3>

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|message|string|false|none|none|
|details|[[error_details](#schemaerror_details)]|false|none|none|
|debug_id|string|false|none|The PayPal internal ID. Used for correlation purposes.|
|links|[[error_link_description](#schemaerror_link_description)]|false|none|An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).|
|details|[object]|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|name|NOT_AUTHORIZED|
|message|Authorization failed due to insufficient permissions.|
|» issue|PERMISSION_DENIED|
|» description|The requested invoice is not associated with the requested user.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://uri.paypal.com/services/invoicing/invoices/readwrite )
</aside>

## Generate QR code

<a id="opIdinvoices.generate-qr-code"></a>

> Code samples

```bash
curl https://api-m.paypal.com/v2/invoicing/invoices/string/generate-qr-code \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "width": 500,
    "height": 500,
    "action": "pay"
  }'
```

`POST /v2/invoicing/invoices/{invoice_id}/generate-qr-code`

Generates a QR code for an invoice, by ID. The QR code is a PNG image in <a href="https://www.base64encode.org/">Base64-encoded</a> format that corresponds to the invoice ID. You can generate a QR code for an invoice and add it to a paper or PDF invoice. When customers use their mobile devices to scan the QR code, they are redirected to the PayPal mobile payment flow where they can view the invoice and pay online with PayPal or a credit card. Before you get a QR code, you must <a href="#invoices_create">create an invoice</a> and <a href="#invoices_send">send an invoice</a> to move the invoice from a draft to payable state. Do not include an email address if you do not want the invoice emailed.

> Body parameter

```json
{
  "width": 500,
  "height": 500,
  "action": "pay"
}
```

<h3 id="generate-qr-code-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|invoice_id|path|string|true|The ID of the draft invoice to delete.|
|body|body|[qr_config](#schemaqr_config)|false|Optional configuration parameters to adjust QR code width, height and the encoded URL.|
|» width|body|integer|false|The width, in pixels, of the QR code image. Value is from `150` to `500`.|
|» height|body|integer|false|The height, in pixels, of the QR code image. Value is from `150` to `500`.|
|» action|body|string|false|The type of URL for which to generate a QR code. Valid values are `pay` and `details`.|

> Example responses

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

<h3 id="generate-qr-code-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful request returns the HTTP `200 OK` status code and a JSON response body that shows the QR code as a PNG image.|None|
|400|Bad Request|Invalid request.|Inline|
|403|Forbidden|Authorization Error.|Inline|
|404|Not Found|Resource Not Found.|[error_404](#schemaerror_404)|
|500|Internal Server Error|An internal server error has occurred.|[error_500](#schemaerror_500)|
|default|Default|The default response.|[error_default](#schemaerror_default)|

<h3 id="generate-qr-code-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|message|string|false|none|none|
|details|[[error_details](#schemaerror_details)]|false|none|none|
|debug_id|string|false|none|The PayPal internal ID. Used for correlation purposes.|
|links|[[error_link_description](#schemaerror_link_description)]|false|none|An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).|
|details|[object]|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|name|INVALID_REQUEST|
|message|Request is not well-formed, syntactically incorrect, or violates schema.|
|» issue|INVALID_INTEGER_MAX_VALUE|
|» description|Value exceeds max value.|
|» issue|INVALID_INTEGER_MIN_VALUE|
|» description|Value less than minimum value.|
|» issue|INVALID_PARAMETER_SYNTAX|
|» description|Value of the field does not conform to the expected format.|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|message|string|false|none|none|
|details|[[error_details](#schemaerror_details)]|false|none|none|
|debug_id|string|false|none|The PayPal internal ID. Used for correlation purposes.|
|links|[[error_link_description](#schemaerror_link_description)]|false|none|An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).|
|details|[object]|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|name|NOT_AUTHORIZED|
|message|Authorization failed due to insufficient permissions.|
|» issue|PERMISSION_DENIED|
|» description|The requested invoice is not associated with the requested user.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://uri.paypal.com/services/invoicing/invoices/readwrite )
</aside>

## Generate invoice number

<a id="opIdinvoicing.generate-next-invoice-number"></a>

> Code samples

```bash
curl https://api-m.paypal.com/v2/invoicing/generate-next-invoice-number \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "fetch_id": "false"
  }'
```

`POST /v2/invoicing/generate-next-invoice-number`

Generates the next invoice number that is available to the merchant. The next invoice number uses the prefix and suffix from the last invoice number and increments the number by one. For example, the next invoice number after `INVOICE-1234` is `INVOICE-1235`.

> Body parameter

```json
{
  "fetch_id": "false"
}
```

<h3 id="generate-invoice-number-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[fetchtype](#schemafetchtype)|false|Is the fetch type invoice number or id.|
|» fetch_id|body|boolean|false|Optional to decide the number or ID.|

> Example responses

> 200 Response

```json
{
  "invoice_number": "string",
  "invoice_id": "string"
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

<h3 id="generate-invoice-number-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful request returns the HTTP `200 OK` status code and a JSON response body that shows the next invoice number.|[invoice_number](#schemainvoice_number)|
|400|Bad Request|Invalid request.|[error_400](#schemaerror_400)|
|403|Forbidden|Authorization Error.|[error_403](#schemaerror_403)|
|500|Internal Server Error|An internal server error has occurred.|[error_500](#schemaerror_500)|
|default|Default|The default response.|[error_default](#schemaerror_default)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://uri.paypal.com/services/invoicing/invoices/readwrite )
</aside>

## Show invoice details

<a id="opIdinvoices.get"></a>

> Code samples

```bash
curl https://api-m.paypal.com/v2/invoicing/invoices/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/invoicing/invoices/{invoice_id}`

Shows details for an invoice, by ID.

<h3 id="show-invoice-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|invoice_id|path|string|true|The ID of the draft invoice to delete.|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "parent_id": "string",
  "status": "DRAFT",
  "detail": {
    "reference": "string",
    "currency_code": "str",
    "note": "string",
    "terms_and_conditions": "string",
    "memo": "string",
    "attachments": [
      {
        "id": "string",
        "reference_url": "http://example.com",
        "content_type": "string",
        "create_time": "stringstringstringst",
        "size": "string"
      }
    ],
    "invoice_number": "string",
    "invoice_date": "stringstri",
    "payment_term": {
      "term_type": "DUE_ON_RECEIPT",
      "due_date": "stringstri"
    },
    "metadata": {
      "create_time": "stringstringstringst",
      "created_by": "string",
      "last_update_time": "stringstringstringst",
      "last_updated_by": "string",
      "cancel_time": "stringstringstringst",
      "cancelled_by": "string",
      "first_sent_time": "stringstringstringst",
      "last_sent_time": "stringstringstringst",
      "last_sent_by": "string",
      "created_by_flow": "MULTIPLE_RECIPIENTS_GROUP",
      "recipient_view_url": "http://example.com",
      "invoicer_view_url": "http://example.com"
    }
  },
  "invoicer": {
    "business_name": "string",
    "name": {
      "prefix": "string",
      "given_name": "string",
      "surname": "string",
      "middle_name": "string",
      "suffix": "string",
      "alternate_full_name": "string",
      "full_name": "string"
    },
    "address": {
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
    "email_address": "string",
    "phones": [
      {
        "country_code": "str",
        "national_number": "string",
        "extension_number": "string",
        "phone_type": "FAX"
      }
    ],
    "website": "http://example.com",
    "tax_id": "string",
    "additional_notes": "string",
    "logo_url": "http://example.com"
  },
  "primary_recipients": [
    {
      "billing_info": {
        "business_name": "string",
        "name": {
          "prefix": "string",
          "given_name": "string",
          "surname": "string",
          "middle_name": "string",
          "suffix": "string",
          "alternate_full_name": "string",
          "full_name": "string"
        },
        "address": {
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
        "email_address": "string",
        "phones": [
          {
            "country_code": "str",
            "national_number": "string",
            "extension_number": "string",
            "phone_type": "FAX"
          }
        ],
        "additional_info": "string",
        "language": "string"
      },
      "shipping_info": {
        "business_name": "string",
        "name": {
          "prefix": "string",
          "given_name": "string",
          "surname": "string",
          "middle_name": "string",
          "suffix": "string",
          "alternate_full_name": "string",
          "full_name": "string"
        },
        "address": {
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
    }
  ],
  "additional_recipients": [
    "string"
  ],
  "items": [
    {
      "id": "string",
      "name": "string",
      "description": "string",
      "quantity": "string",
      "unit_amount": {
        "currency_code": "str",
        "value": "string"
      },
      "tax": {
        "name": "string",
        "percent": "string",
        "amount": {
          "currency_code": "str",
          "value": "string"
        },
        "tax_note": "string"
      },
      "item_date": "stringstri",
      "discount": {
        "percent": "string",
        "amount": {
          "currency_code": "str",
          "value": "string"
        }
      },
      "unit_of_measure": "QUANTITY"
    }
  ],
  "configuration": {
    "tax_calculated_after_discount": true,
    "tax_inclusive": false,
    "allow_tip": false,
    "partial_payment": {
      "allow_partial_payment": false,
      "minimum_amount_due": {
        "currency_code": "str",
        "value": "string"
      }
    },
    "has_conditional_rule": false,
    "template_id": "PayPal system template"
  },
  "amount": {
    "currency_code": "str",
    "value": "string",
    "breakdown": {
      "item_total": {
        "currency_code": "str",
        "value": "string"
      },
      "discount": {
        "invoice_discount": {
          "percent": "string",
          "amount": {
            "currency_code": "str",
            "value": "string"
          }
        },
        "item_discount": {
          "currency_code": "str",
          "value": "string"
        }
      },
      "tax_total": {
        "currency_code": "str",
        "value": "string"
      },
      "shipping": {
        "amount": {
          "currency_code": "str",
          "value": "string"
        },
        "tax": {
          "name": "string",
          "percent": "string",
          "amount": {
            "currency_code": "str",
            "value": "string"
          },
          "tax_note": "string"
        }
      },
      "custom": {
        "label": "string",
        "amount": {
          "currency_code": "str",
          "value": "string"
        }
      }
    }
  },
  "due_amount": {
    "currency_code": "str",
    "value": "string"
  },
  "gratuity": {
    "currency_code": "str",
    "value": "string"
  },
  "payments": {
    "paid_amount": {
      "currency_code": "str",
      "value": "string"
    },
    "transactions": [
      {
        "type": "PAYPAL",
        "payment_id": "string",
        "payment_date": "stringstri",
        "method": "BANK_TRANSFER",
        "note": "string",
        "amount": {
          "currency_code": "str",
          "value": "string"
        },
        "shipping_info": {
          "business_name": "string",
          "name": {
            "prefix": "string",
            "given_name": "string",
            "surname": "string",
            "middle_name": "string",
            "suffix": "string",
            "alternate_full_name": "string",
            "full_name": "string"
          },
          "address": {
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
      }
    ]
  },
  "refunds": {
    "refund_amount": {
      "currency_code": "str",
      "value": "string"
    },
    "transactions": [
      {
        "type": "PAYPAL",
        "refund_id": "string",
        "refund_date": "stringstri",
        "amount": {
          "currency_code": "str",
          "value": "string"
        },
        "method": "BANK_TRANSFER"
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
      "issue": "PERMISSION_DENIED",
      "description": "The requested invoice is not associated with the requested user."
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

> 404 Response

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

<h3 id="show-invoice-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful request returns the HTTP `200 OK` status code and a JSON response body that shows invoice details.|[invoice](#schemainvoice)|
|400|Bad Request|Invalid request.|[error_400](#schemaerror_400)|
|403|Forbidden|Authorization Error.|Inline|
|404|Not Found|Resource Not Found.|[error_404](#schemaerror_404)|
|500|Internal Server Error|An internal server error has occurred.|[error_500](#schemaerror_500)|
|default|Default|The default response.|[error_default](#schemaerror_default)|

<h3 id="show-invoice-details-responseschema">Response Schema</h3>

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|message|string|false|none|none|
|details|[[error_details](#schemaerror_details)]|false|none|none|
|debug_id|string|false|none|The PayPal internal ID. Used for correlation purposes.|
|links|[[error_link_description](#schemaerror_link_description)]|false|none|An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).|
|details|[object]|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|name|NOT_AUTHORIZED|
|message|Authorization failed due to insufficient permissions.|
|» issue|PERMISSION_DENIED|
|» description|The requested invoice is not associated with the requested user.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://uri.paypal.com/services/invoicing/invoices/read )
</aside>

## Fully update invoice

<a id="opIdinvoices.update"></a>

> Code samples

```bash
curl https://api-m.paypal.com/v2/invoicing/invoices/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "detail": {
      "reference": "string",
      "currency_code": "str",
      "note": "string",
      "terms_and_conditions": "string",
      "memo": "string",
      "attachments": [
        {
          "id": "string",
          "reference_url": "http://example.com",
          "content_type": "string",
          "create_time": "stringstringstringst",
          "size": "string"
        }
      ],
      "invoice_number": "string",
      "invoice_date": "stringstri",
      "payment_term": {
        "term_type": "DUE_ON_RECEIPT",
        "due_date": "stringstri"
      }
    },
    "invoicer": {
      "business_name": "string",
      "name": {
        "prefix": "string",
        "given_name": "string",
        "surname": "string",
        "middle_name": "string",
        "suffix": "string",
        "alternate_full_name": "string",
        "full_name": "string"
      },
      "address": {
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
      "email_address": "string",
      "phones": [
        {
          "country_code": "str",
          "national_number": "string",
          "extension_number": "string",
          "phone_type": "FAX"
        }
      ],
      "website": "http://example.com",
      "tax_id": "string",
      "additional_notes": "string",
      "logo_url": "http://example.com"
    },
    "primary_recipients": [
      {
        "billing_info": {
          "business_name": "string",
          "name": {
            "prefix": "string",
            "given_name": "string",
            "surname": "string",
            "middle_name": "string",
            "suffix": "string",
            "alternate_full_name": "string",
            "full_name": "string"
          },
          "address": {
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
          "email_address": "string",
          "phones": [
            {
              "country_code": "str",
              "national_number": "string",
              "extension_number": "string",
              "phone_type": "FAX"
            }
          ],
          "additional_info": "string",
          "language": "string"
        },
        "shipping_info": {
          "business_name": "string",
          "name": {
            "prefix": "string",
            "given_name": "string",
            "surname": "string",
            "middle_name": "string",
            "suffix": "string",
            "alternate_full_name": "string",
            "full_name": "string"
          },
          "address": {
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
      }
    ],
    "additional_recipients": [
      "string"
    ],
    "items": [
      {
        "name": "string",
        "description": "string",
        "quantity": "string",
        "unit_amount": {
          "currency_code": "str",
          "value": "string"
        },
        "tax": {
          "name": "string",
          "percent": "string",
          "tax_note": "string"
        },
        "item_date": "stringstri",
        "discount": {
          "percent": "string",
          "amount": {
            "currency_code": "str",
            "value": "string"
          }
        },
        "unit_of_measure": "QUANTITY"
      }
    ],
    "configuration": {
      "tax_calculated_after_discount": true,
      "tax_inclusive": false,
      "allow_tip": false,
      "partial_payment": {
        "allow_partial_payment": false,
        "minimum_amount_due": {
          "currency_code": "str",
          "value": "string"
        }
      },
      "has_conditional_rule": false,
      "template_id": "PayPal system template"
    },
    "amount": {
      "currency_code": "str",
      "value": "string",
      "breakdown": {
        "item_total": {
          "currency_code": "str",
          "value": "string"
        },
        "discount": {
          "invoice_discount": {
            "percent": "string",
            "amount": {
              "currency_code": "str",
              "value": "string"
            }
          },
          "item_discount": {
            "currency_code": "str",
            "value": "string"
          }
        },
        "tax_total": {
          "currency_code": "str",
          "value": "string"
        },
        "shipping": {
          "amount": {
            "currency_code": "str",
            "value": "string"
          },
          "tax": {
            "name": "string",
            "percent": "string",
            "tax_note": "string"
          }
        },
        "custom": {
          "label": "string",
          "amount": {
            "currency_code": "str",
            "value": "string"
          }
        }
      }
    },
    "payments": {},
    "refunds": {}
  }'
```

`PUT /v2/invoicing/invoices/{invoice_id}`

Fully updates an invoice, by ID. In the JSON request body, include a complete `invoice` object. This call does not support partial updates. <blockquote><strong>Notes:</strong><ul><li>API caller can change/modify recipient only 2 times in 72 hours.</li></ul></blockquote>.

> Body parameter

```json
{
  "detail": {
    "reference": "string",
    "currency_code": "str",
    "note": "string",
    "terms_and_conditions": "string",
    "memo": "string",
    "attachments": [
      {
        "id": "string",
        "reference_url": "http://example.com",
        "content_type": "string",
        "create_time": "stringstringstringst",
        "size": "string"
      }
    ],
    "invoice_number": "string",
    "invoice_date": "stringstri",
    "payment_term": {
      "term_type": "DUE_ON_RECEIPT",
      "due_date": "stringstri"
    }
  },
  "invoicer": {
    "business_name": "string",
    "name": {
      "prefix": "string",
      "given_name": "string",
      "surname": "string",
      "middle_name": "string",
      "suffix": "string",
      "alternate_full_name": "string",
      "full_name": "string"
    },
    "address": {
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
    "email_address": "string",
    "phones": [
      {
        "country_code": "str",
        "national_number": "string",
        "extension_number": "string",
        "phone_type": "FAX"
      }
    ],
    "website": "http://example.com",
    "tax_id": "string",
    "additional_notes": "string",
    "logo_url": "http://example.com"
  },
  "primary_recipients": [
    {
      "billing_info": {
        "business_name": "string",
        "name": {
          "prefix": "string",
          "given_name": "string",
          "surname": "string",
          "middle_name": "string",
          "suffix": "string",
          "alternate_full_name": "string",
          "full_name": "string"
        },
        "address": {
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
        "email_address": "string",
        "phones": [
          {
            "country_code": "str",
            "national_number": "string",
            "extension_number": "string",
            "phone_type": "FAX"
          }
        ],
        "additional_info": "string",
        "language": "string"
      },
      "shipping_info": {
        "business_name": "string",
        "name": {
          "prefix": "string",
          "given_name": "string",
          "surname": "string",
          "middle_name": "string",
          "suffix": "string",
          "alternate_full_name": "string",
          "full_name": "string"
        },
        "address": {
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
    }
  ],
  "additional_recipients": [
    "string"
  ],
  "items": [
    {
      "name": "string",
      "description": "string",
      "quantity": "string",
      "unit_amount": {
        "currency_code": "str",
        "value": "string"
      },
      "tax": {
        "name": "string",
        "percent": "string",
        "tax_note": "string"
      },
      "item_date": "stringstri",
      "discount": {
        "percent": "string",
        "amount": {
          "currency_code": "str",
          "value": "string"
        }
      },
      "unit_of_measure": "QUANTITY"
    }
  ],
  "configuration": {
    "tax_calculated_after_discount": true,
    "tax_inclusive": false,
    "allow_tip": false,
    "partial_payment": {
      "allow_partial_payment": false,
      "minimum_amount_due": {
        "currency_code": "str",
        "value": "string"
      }
    },
    "has_conditional_rule": false,
    "template_id": "PayPal system template"
  },
  "amount": {
    "currency_code": "str",
    "value": "string",
    "breakdown": {
      "item_total": {
        "currency_code": "str",
        "value": "string"
      },
      "discount": {
        "invoice_discount": {
          "percent": "string",
          "amount": {
            "currency_code": "str",
            "value": "string"
          }
        },
        "item_discount": {
          "currency_code": "str",
          "value": "string"
        }
      },
      "tax_total": {
        "currency_code": "str",
        "value": "string"
      },
      "shipping": {
        "amount": {
          "currency_code": "str",
          "value": "string"
        },
        "tax": {
          "name": "string",
          "percent": "string",
          "tax_note": "string"
        }
      },
      "custom": {
        "label": "string",
        "amount": {
          "currency_code": "str",
          "value": "string"
        }
      }
    }
  },
  "payments": {},
  "refunds": {}
}
```

<h3 id="fully-update-invoice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|invoice_id|path|string|true|The ID of the draft invoice to delete.|
|send_to_recipient|query|boolean|false|Indicates whether to send the invoice update notification to the recipient.|
|send_to_invoicer|query|boolean|false|Indicates whether to send the invoice update notification to the merchant.|
|body|body|[invoice](#schemainvoice)|true|A representation of changes to make in the invoice.|
|» detail|body|[invoice_detail](#schemainvoice_detail)|true|The details of the invoice. Includes the invoice number, date, payment terms, and audit metadata.|
|» invoicer|body|[invoicer_info](#schemainvoicer_info)|false|The invoicer information. Includes the business name, email, address, phone, fax, tax ID, additional notes, and logo URL.|
|» primary_recipients|body|[recipient_info_list](#schemarecipient_info_list)|false|The billing and shipping information. Includes name, email, address, phone and language.|
|» additional_recipients|body|[email_address_list](#schemaemail_address_list)|false|An array of one or more CC: emails to which notifications are sent. If you omit this parameter, a notification is sent to all CC: email addresses that are part of the invoice.<blockquote><strong>Note:</strong> Valid values are email addresses in the `additional_recipients` value associated with the invoice.</blockquote>|
|» items|body|[item_list](#schemaitem_list)|false|An array of invoice line item information.|
|» configuration|body|[configuration](#schemaconfiguration)|false|The invoice configuration details. Includes partial payment, tip, and tax calculated after discount.|
|» amount|body|[amount_summary_detail](#schemaamount_summary_detail)|false|The invoice amount summary of item total, discount, tax total and shipping..|
|» payments|body|[payments](#schemapayments)|false|List of payments registered against the invoice..|
|» refunds|body|[refunds](#schemarefunds)|false|List of refunds against this invoice. The invoicing refund details includes refund type, date, amount, and method.|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "parent_id": "string",
  "status": "DRAFT",
  "detail": {
    "reference": "string",
    "currency_code": "str",
    "note": "string",
    "terms_and_conditions": "string",
    "memo": "string",
    "attachments": [
      {
        "id": "string",
        "reference_url": "http://example.com",
        "content_type": "string",
        "create_time": "stringstringstringst",
        "size": "string"
      }
    ],
    "invoice_number": "string",
    "invoice_date": "stringstri",
    "payment_term": {
      "term_type": "DUE_ON_RECEIPT",
      "due_date": "stringstri"
    },
    "metadata": {
      "create_time": "stringstringstringst",
      "created_by": "string",
      "last_update_time": "stringstringstringst",
      "last_updated_by": "string",
      "cancel_time": "stringstringstringst",
      "cancelled_by": "string",
      "first_sent_time": "stringstringstringst",
      "last_sent_time": "stringstringstringst",
      "last_sent_by": "string",
      "created_by_flow": "MULTIPLE_RECIPIENTS_GROUP",
      "recipient_view_url": "http://example.com",
      "invoicer_view_url": "http://example.com"
    }
  },
  "invoicer": {
    "business_name": "string",
    "name": {
      "prefix": "string",
      "given_name": "string",
      "surname": "string",
      "middle_name": "string",
      "suffix": "string",
      "alternate_full_name": "string",
      "full_name": "string"
    },
    "address": {
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
    "email_address": "string",
    "phones": [
      {
        "country_code": "str",
        "national_number": "string",
        "extension_number": "string",
        "phone_type": "FAX"
      }
    ],
    "website": "http://example.com",
    "tax_id": "string",
    "additional_notes": "string",
    "logo_url": "http://example.com"
  },
  "primary_recipients": [
    {
      "billing_info": {
        "business_name": "string",
        "name": {
          "prefix": "string",
          "given_name": "string",
          "surname": "string",
          "middle_name": "string",
          "suffix": "string",
          "alternate_full_name": "string",
          "full_name": "string"
        },
        "address": {
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
        "email_address": "string",
        "phones": [
          {
            "country_code": "str",
            "national_number": "string",
            "extension_number": "string",
            "phone_type": "FAX"
          }
        ],
        "additional_info": "string",
        "language": "string"
      },
      "shipping_info": {
        "business_name": "string",
        "name": {
          "prefix": "string",
          "given_name": "string",
          "surname": "string",
          "middle_name": "string",
          "suffix": "string",
          "alternate_full_name": "string",
          "full_name": "string"
        },
        "address": {
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
    }
  ],
  "additional_recipients": [
    "string"
  ],
  "items": [
    {
      "id": "string",
      "name": "string",
      "description": "string",
      "quantity": "string",
      "unit_amount": {
        "currency_code": "str",
        "value": "string"
      },
      "tax": {
        "name": "string",
        "percent": "string",
        "amount": {
          "currency_code": "str",
          "value": "string"
        },
        "tax_note": "string"
      },
      "item_date": "stringstri",
      "discount": {
        "percent": "string",
        "amount": {
          "currency_code": "str",
          "value": "string"
        }
      },
      "unit_of_measure": "QUANTITY"
    }
  ],
  "configuration": {
    "tax_calculated_after_discount": true,
    "tax_inclusive": false,
    "allow_tip": false,
    "partial_payment": {
      "allow_partial_payment": false,
      "minimum_amount_due": {
        "currency_code": "str",
        "value": "string"
      }
    },
    "has_conditional_rule": false,
    "template_id": "PayPal system template"
  },
  "amount": {
    "currency_code": "str",
    "value": "string",
    "breakdown": {
      "item_total": {
        "currency_code": "str",
        "value": "string"
      },
      "discount": {
        "invoice_discount": {
          "percent": "string",
          "amount": {
            "currency_code": "str",
            "value": "string"
          }
        },
        "item_discount": {
          "currency_code": "str",
          "value": "string"
        }
      },
      "tax_total": {
        "currency_code": "str",
        "value": "string"
      },
      "shipping": {
        "amount": {
          "currency_code": "str",
          "value": "string"
        },
        "tax": {
          "name": "string",
          "percent": "string",
          "amount": {
            "currency_code": "str",
            "value": "string"
          },
          "tax_note": "string"
        }
      },
      "custom": {
        "label": "string",
        "amount": {
          "currency_code": "str",
          "value": "string"
        }
      }
    }
  },
  "due_amount": {
    "currency_code": "str",
    "value": "string"
  },
  "gratuity": {
    "currency_code": "str",
    "value": "string"
  },
  "payments": {
    "paid_amount": {
      "currency_code": "str",
      "value": "string"
    },
    "transactions": [
      {
        "type": "PAYPAL",
        "payment_id": "string",
        "payment_date": "stringstri",
        "method": "BANK_TRANSFER",
        "note": "string",
        "amount": {
          "currency_code": "str",
          "value": "string"
        },
        "shipping_info": {
          "business_name": "string",
          "name": {
            "prefix": "string",
            "given_name": "string",
            "surname": "string",
            "middle_name": "string",
            "suffix": "string",
            "alternate_full_name": "string",
            "full_name": "string"
          },
          "address": {
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
      }
    ]
  },
  "refunds": {
    "refund_amount": {
      "currency_code": "str",
      "value": "string"
    },
    "transactions": [
      {
        "type": "PAYPAL",
        "refund_id": "string",
        "refund_date": "stringstri",
        "amount": {
          "currency_code": "str",
          "value": "string"
        },
        "method": "BANK_TRANSFER"
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
  "name": "INVALID_REQUEST",
  "message": "Request is not well-formed, syntactically incorrect, or violates schema.",
  "details": [
    {
      "issue": "INVALID_STRING_MAX_LENGTH",
      "description": "Address line2 length should be less than 300 characters."
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
      "issue": "PERMISSION_DENIED",
      "description": "The requested invoice is not associated with the requested user."
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

> 404 Response

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

> 422 Response

```json
{
  "name": "UNPROCESSABLE_ENTITY",
  "message": "The requested action could not be performed, semantically incorrect, or failed business validation.",
  "details": [
    {
      "issue": "USER_NOT_FOUND",
      "description": "User is not associated with paypal based on invoicer email."
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

<h3 id="fully-update-invoice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful request returns the HTTP `200 OK` status code. A JSON response body that shows invoice details is returned if you set <code>prefer=return=representation</code>.|[invoice](#schemainvoice)|
|400|Bad Request|Invalid request.|Inline|
|403|Forbidden|Authorization Error.|Inline|
|404|Not Found|Resource Not Found.|[error_404](#schemaerror_404)|
|422|Unprocessable Entity|Unprocessable Entity.|Inline|
|500|Internal Server Error|An internal server error has occurred.|[error_500](#schemaerror_500)|
|default|Default|The default response.|[error_default](#schemaerror_default)|

<h3 id="fully-update-invoice-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|message|string|false|none|none|
|details|[[error_details](#schemaerror_details)]|false|none|none|
|debug_id|string|false|none|The PayPal internal ID. Used for correlation purposes.|
|links|[[error_link_description](#schemaerror_link_description)]|false|none|An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).|
|details|[object]|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|name|INVALID_REQUEST|
|message|Request is not well-formed, syntactically incorrect, or violates schema.|
|» issue|INVALID_STRING_MAX_LENGTH|
|» description|Address line2 length should be less than 300 characters.|
|» issue|INVALID_STRING_LENGTH|
|» description|National Number length should be between 1 and 14.|
|» issue|INVALID_STRING_MAX_LENGTH|
|» description|Address line1 length should be less than 300 characters.|
|» issue|INVALID_PARAMETER_SYNTAX|
|» description|Country code is invalid.|
|» issue|INVALID_STRING_MAX_LENGTH|
|» description|Custom label length should be less than 50 characters.|
|» issue|INVALID_STRING_MAX_LENGTH|
|» description|Given name length should be less than 140 characters.|
|» issue|INVALID_STRING_LENGTH|
|» description|Language is invalid.|
|» issue|INVALID_STRING_MAX_LENGTH|
|» description|Admin area1 length should be less than 300 characters.|
|» issue|INVALID_STRING_LENGTH|
|» description|Item quantity length should be 1 and 14.|
|» issue|INVALID_STRING_MAX_LENGTH|
|» description|Surname length should be less than 140 characters.|
|» issue|INVALID_STRING_LENGTH|
|» description|Attachment reference url length should be between 1 and 2000.|
|» issue|INVALID_STRING_LENGTH|
|» description|Country code length should be 2 characters.|
|» issue|INVALID_STRING_LENGTH|
|» description|Currency code length should be 3 characters.|
|» issue|INVALID_STRING_MAX_LENGTH|
|» description|Business name length should be less than 300 characters.|
|» issue|INVALID_STRING_MAX_LENGTH|
|» description|Minimum due amount length should be less than 32 characters.|
|» issue|INVALID_STRING_LENGTH|
|» description|Attachment id length should be between 1 and 255.|
|» issue|INVALID_STRING_MAX_LENGTH|
|» description|Admin area2 length should be less than 300 characters.|
|» issue|INVALID_STRING_MAX_LENGTH|
|» description|Tax name length should be less than 100.|
|» issue|INVALID_STRING_MAX_LENGTH|
|» description|Website url length should be less than 2048 characters.|
|» issue|INVALID_STRING_MAX_LENGTH|
|» description|Postal code length should be less than 60 characters.|
|» issue|INVALID_PARAMETER_SYNTAX|
|» description|National Number is not valid.|
|» issue|INVALID_STRING_MAX_LENGTH|
|» description|Memo length should be less than 4000 characters.|
|» issue|INVALID_STRING_MAX_LENGTH|
|» description|Item name length should be less than 200 characters.|
|» issue|INVALID_STRING_LENGTH|
|» description|country code length should be between 1 and 3.|
|» issue|INVALID_STRING_MAX_LENGTH|
|» description|Template Id length should be less than 22 characters.|
|» issue|INVALID_STRING_MAX_LENGTH|
|» description|Logo url length should be less than 4000 characters.|
|» issue|INVALID_STRING_MAX_LENGTH|
|» description|Invoice note length should be less than 4000 characters.|
|» issue|INVALID_STRING_MAX_LENGTH|
|» description|Reference field length should be less than 120 characters.|
|» issue|INVALID_PARAMETER_SYNTAX|
|» description|Due date is invalid.|
|» issue|INVALID_STRING_MAX_LENGTH|
|» description|Terms and Conditions length should be less than 4000 characters.|
|» issue|INVALID_STRING_LENGTH|
|» description|Email address length should be between 3 and 254.|
|» issue|INVALID_STRING_MAX_LENGTH|
|» description|Additional data length should be less than 4000.|
|» issue|INVALID_STRING_MAX_LENGTH|
|» description|Additional information value length should be less than 40 characters.|
|» issue|INVALID_STRING_MAX_LENGTH|
|» description|Tax id length should be less than 100 characters.|
|» issue|INVALID_PARAMETER_SYNTAX|
|» description|Invoice date is invalid.|
|» issue|INVALID_STRING_LENGTH|
|» description|Invoice date is invalid.|
|» issue|INVALID_STRING_MAX_LENGTH|
|» description|Invoice number length should be less than 25 characters.|
|» issue|INVALID_PARAMETER_SYNTAX|
|» description|Item Date is invalid.|
|» issue|INVALID_STRING_MAX_LENGTH|
|» description|Item description length should be less than 1000 characters.|
|» issue|INVALID_STRING_MAX_LENGTH|
|» description|Shipping Tax name length should be less than 100 characters.|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|message|string|false|none|none|
|details|[[error_details](#schemaerror_details)]|false|none|none|
|debug_id|string|false|none|The PayPal internal ID. Used for correlation purposes.|
|links|[[error_link_description](#schemaerror_link_description)]|false|none|An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).|
|details|[object]|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|name|NOT_AUTHORIZED|
|message|Authorization failed due to insufficient permissions.|
|» issue|PERMISSION_DENIED|
|» description|The requested invoice is not associated with the requested user.|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|message|string|false|none|none|
|details|[[error_details](#schemaerror_details)]|false|none|none|
|debug_id|string|false|none|The PayPal internal ID. Used for correlation purposes.|
|links|[[error_link_description](#schemaerror_link_description)]|false|none|An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).|
|details|[object]|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|name|UNPROCESSABLE_ENTITY|
|message|The requested action could not be performed, semantically incorrect, or failed business validation.|
|» issue|USER_NOT_FOUND|
|» description|User is not associated with paypal based on invoicer email.|
|» issue|AUTH_FLOW_REQUIRED|
|» description|User is required to pass auth challenge|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://uri.paypal.com/services/invoicing/invoices/readwrite )
</aside>

## Delete invoice

<a id="opIdinvoices.delete"></a>

> Code samples

```bash
curl https://api-m.paypal.com/v2/invoicing/invoices/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v2/invoicing/invoices/{invoice_id}`

Deletes a draft or scheduled invoice, by ID. Deletes invoices in the draft or scheduled state only. For invoices that have already been sent, you can <a href="/docs/api/invoicing/v2/#invoices_cancel">cancel the invoice</a>. After you delete a draft or scheduled invoice, you can no longer use it or show its details. However, you can reuse its invoice number.

<h3 id="delete-invoice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|invoice_id|path|string|true|The ID of the draft invoice to delete.|

> Example responses

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
      "issue": "PERMISSION_DENIED",
      "description": "The requested invoice is not associated with the requested user."
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

> 404 Response

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

<h3 id="delete-invoice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|A successful request returns the HTTP `204 No Content` status code with no JSON response body.|None|
|400|Bad Request|Invalid request.|[error_400](#schemaerror_400)|
|403|Forbidden|Authorization Error.|Inline|
|404|Not Found|Resource Not Found.|[error_404](#schemaerror_404)|
|500|Internal Server Error|An internal server error has occurred.|[error_500](#schemaerror_500)|
|default|Default|The default response.|[error_default](#schemaerror_default)|

<h3 id="delete-invoice-responseschema">Response Schema</h3>

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|message|string|false|none|none|
|details|[[error_details](#schemaerror_details)]|false|none|none|
|debug_id|string|false|none|The PayPal internal ID. Used for correlation purposes.|
|links|[[error_link_description](#schemaerror_link_description)]|false|none|An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).|
|details|[object]|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|name|NOT_AUTHORIZED|
|message|Authorization failed due to insufficient permissions.|
|» issue|PERMISSION_DENIED|
|» description|The requested invoice is not associated with the requested user.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://uri.paypal.com/services/invoicing/invoices/readwrite )
</aside>

<h1 id="invoices-search-invoices">search-invoices</h1>

Use the `/search-invoices` resource to search for and list invoices that match search criteria.

## Search for invoices

<a id="opIdinvoices.search-invoices"></a>

> Code samples

```bash
curl https://api-m.paypal.com/v2/invoicing/search-invoices \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "recipient_email": "string",
    "recipient_first_name": "string",
    "recipient_last_name": "string",
    "recipient_business_name": "string",
    "invoice_number": "string",
    "status": [
      "DRAFT"
    ],
    "reference": "string",
    "currency_code": "str",
    "memo": "string",
    "total_amount_range": {
      "lower_amount": {
        "currency_code": "str",
        "value": "string"
      },
      "upper_amount": {
        "currency_code": "str",
        "value": "string"
      }
    },
    "invoice_date_range": {
      "start": "stringstri",
      "end": "stringstri"
    },
    "due_date_range": {
      "start": "stringstri",
      "end": "stringstri"
    },
    "payment_date_range": {
      "start": "stringstringstringst",
      "end": "stringstringstringst"
    },
    "creation_date_range": {
      "start": "stringstringstringst",
      "end": "stringstringstringst"
    },
    "archived": true,
    "fields": [
      "string"
    ]
  }'
```

`POST /v2/invoicing/search-invoices`

Searches for and lists invoices that match search criteria. If you pass multiple criteria, the response lists invoices that match all criteria.

> Body parameter

```json
{
  "recipient_email": "string",
  "recipient_first_name": "string",
  "recipient_last_name": "string",
  "recipient_business_name": "string",
  "invoice_number": "string",
  "status": [
    "DRAFT"
  ],
  "reference": "string",
  "currency_code": "str",
  "memo": "string",
  "total_amount_range": {
    "lower_amount": {
      "currency_code": "str",
      "value": "string"
    },
    "upper_amount": {
      "currency_code": "str",
      "value": "string"
    }
  },
  "invoice_date_range": {
    "start": "stringstri",
    "end": "stringstri"
  },
  "due_date_range": {
    "start": "stringstri",
    "end": "stringstri"
  },
  "payment_date_range": {
    "start": "stringstringstringst",
    "end": "stringstringstringst"
  },
  "creation_date_range": {
    "start": "stringstringstringst",
    "end": "stringstringstringst"
  },
  "archived": true,
  "fields": [
    "string"
  ]
}
```

<h3 id="search-for-invoices-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer|false|The page number to be retrieved, for the list of templates. So, a combination of `page=1` and `page_size=20` returns the first 20 templates. A combination of `page=2` and `page_size=20` returns the next 20 templates.|
|page_size|query|integer|false|The maximum number of templates to return in the response.|
|total_required|query|boolean|false|Indicates whether the to show <code>total_pages</code> and <code>total_items</code> in the response.|
|body|body|[search_data](#schemasearch_data)|false|The invoice search can be used to retrieve the invoices based on the search parameters.|
|» recipient_email|body|string|false|Filters the search by the email address.|
|» recipient_first_name|body|string|false|Filters the search by the recipient first name.|
|» recipient_last_name|body|string|false|Filters the search by the recipient last name.|
|» recipient_business_name|body|string|false|Filters the search by the recipient business name.|
|» invoice_number|body|string|false|Filters the search by the invoice number.|
|» status|body|[invoice_status_list](#schemainvoice_status_list)|false|An array of status values.|
|» reference|body|string|false|The reference data. Includes a Purchase Order (PO) number.|
|» currency_code|body|[currency_code](#schemacurrency_code)|false|The [three-character ISO-4217 currency code](/docs/integration/direct/rest/currency-codes/) that identifies the currency.|
|» memo|body|string|false|A private bookkeeping memo for the user.|
|» total_amount_range|body|[amount_range](#schemaamount_range)|false|Filters the search by the total amount.|
|» invoice_date_range|body|[date_range](#schemadate_range)|false|Filters the search by a date range for the invoice, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).|
|» due_date_range|body|[date_range](#schemadate_range)|false|Filters the search by a due date range for the invoice, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).|
|» payment_date_range|body|[date_time_range](#schemadate_time_range)|false|The date and time range. Filters invoices by creation date, invoice date, due date, and payment date.|
|» creation_date_range|body|[date_time_range](#schemadate_time_range)|false|Filters the search by a creation date range for the invoice, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).|
|» archived|body|boolean|false|Indicates whether to list merchant-archived invoices in the response. Value is:<ul><li><code>true</code>. Response lists only merchant-archived invoices.</li><li><code>false</code>. Response lists only unarchived invoices.</li><li><code>null</code>. Response lists all invoices.</li></ul>|
|» fields|body|[fields_list](#schemafields_list)|false|A CSV file of fields to return for the user, if available. Because the invoice object can be very large, field filtering is required. Valid collection fields are <code>items</code>, <code>payments</code>, <code>refunds</code>, <code>additional_recipients_info</code>, and <code>attachments</code>.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|DRAFT|
|» status|SENT|
|» status|SCHEDULED|
|» status|PAID|
|» status|MARKED_AS_PAID|
|» status|CANCELLED|
|» status|REFUNDED|
|» status|PARTIALLY_PAID|
|» status|PARTIALLY_REFUNDED|
|» status|MARKED_AS_REFUNDED|
|» status|UNPAID|
|» status|PAYMENT_PENDING|
|» status|AUTO_CANCELLED|
|» status|PAID_EXTERNAL|
|» status|REFUNDED_EXTERNAL|
|» status|SHARED|

> Example responses

> 200 Response

```json
{
  "total_pages": 0,
  "total_items": 0,
  "items": [
    {
      "id": "string",
      "parent_id": "string",
      "status": "DRAFT",
      "detail": {
        "reference": "string",
        "currency_code": "str",
        "note": "string",
        "terms_and_conditions": "string",
        "memo": "string",
        "attachments": [
          {
            "id": "string",
            "reference_url": "http://example.com",
            "content_type": "string",
            "create_time": "stringstringstringst",
            "size": "string"
          }
        ],
        "invoice_number": "string",
        "invoice_date": "stringstri",
        "payment_term": {
          "term_type": "DUE_ON_RECEIPT",
          "due_date": "stringstri"
        },
        "metadata": {
          "create_time": "stringstringstringst",
          "created_by": "string",
          "last_update_time": "stringstringstringst",
          "last_updated_by": "string",
          "cancel_time": "stringstringstringst",
          "cancelled_by": "string",
          "first_sent_time": "stringstringstringst",
          "last_sent_time": "stringstringstringst",
          "last_sent_by": "string",
          "created_by_flow": "MULTIPLE_RECIPIENTS_GROUP",
          "recipient_view_url": "http://example.com",
          "invoicer_view_url": "http://example.com"
        }
      },
      "invoicer": {
        "business_name": "string",
        "name": {
          "prefix": "string",
          "given_name": "string",
          "surname": "string",
          "middle_name": "string",
          "suffix": "string",
          "alternate_full_name": "string",
          "full_name": "string"
        },
        "address": {
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
        "email_address": "string",
        "phones": [
          {
            "country_code": "str",
            "national_number": "string",
            "extension_number": "string",
            "phone_type": "FAX"
          }
        ],
        "website": "http://example.com",
        "tax_id": "string",
        "additional_notes": "string",
        "logo_url": "http://example.com"
      },
      "primary_recipients": [
        {
          "billing_info": {
            "business_name": "string",
            "name": {
              "prefix": "string",
              "given_name": "string",
              "surname": "string",
              "middle_name": "string",
              "suffix": "string",
              "alternate_full_name": "string",
              "full_name": "string"
            },
            "address": {
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
            "email_address": "string",
            "phones": [
              {
                "country_code": "str",
                "national_number": "string",
                "extension_number": "string",
                "phone_type": "FAX"
              }
            ],
            "additional_info": "string",
            "language": "string"
          },
          "shipping_info": {
            "business_name": "string",
            "name": {
              "prefix": "string",
              "given_name": "string",
              "surname": "string",
              "middle_name": "string",
              "suffix": "string",
              "alternate_full_name": "string",
              "full_name": "string"
            },
            "address": {
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
        }
      ],
      "additional_recipients": [
        "string"
      ],
      "items": [
        {
          "id": "string",
          "name": "string",
          "description": "string",
          "quantity": "string",
          "unit_amount": {
            "currency_code": "str",
            "value": "string"
          },
          "tax": {
            "name": "string",
            "percent": "string",
            "amount": {
              "currency_code": "str",
              "value": "string"
            },
            "tax_note": "string"
          },
          "item_date": "stringstri",
          "discount": {
            "percent": "string",
            "amount": {
              "currency_code": "str",
              "value": "string"
            }
          },
          "unit_of_measure": "QUANTITY"
        }
      ],
      "configuration": {
        "tax_calculated_after_discount": true,
        "tax_inclusive": false,
        "allow_tip": false,
        "partial_payment": {
          "allow_partial_payment": false,
          "minimum_amount_due": {
            "currency_code": "str",
            "value": "string"
          }
        },
        "has_conditional_rule": false,
        "template_id": "PayPal system template"
      },
      "amount": {
        "currency_code": "str",
        "value": "string",
        "breakdown": {
          "item_total": {
            "currency_code": "str",
            "value": "string"
          },
          "discount": {
            "invoice_discount": {
              "percent": "string",
              "amount": {
                "currency_code": "str",
                "value": "string"
              }
            },
            "item_discount": {
              "currency_code": "str",
              "value": "string"
            }
          },
          "tax_total": {
            "currency_code": "str",
            "value": "string"
          },
          "shipping": {
            "amount": {
              "currency_code": "str",
              "value": "string"
            },
            "tax": {
              "name": "string",
              "percent": "string",
              "amount": {
                "currency_code": "str",
                "value": "string"
              },
              "tax_note": "string"
            }
          },
          "custom": {
            "label": "string",
            "amount": {
              "currency_code": "str",
              "value": "string"
            }
          }
        }
      },
      "due_amount": {
        "currency_code": "str",
        "value": "string"
      },
      "gratuity": {
        "currency_code": "str",
        "value": "string"
      },
      "payments": {
        "paid_amount": {
          "currency_code": "str",
          "value": "string"
        },
        "transactions": [
          {
            "type": "PAYPAL",
            "payment_id": "string",
            "payment_date": "stringstri",
            "method": "BANK_TRANSFER",
            "note": "string",
            "amount": {
              "currency_code": "str",
              "value": "string"
            },
            "shipping_info": {
              "business_name": "string",
              "name": {
                "prefix": "string",
                "given_name": "string",
                "surname": "string",
                "middle_name": "string",
                "suffix": "string",
                "alternate_full_name": "string",
                "full_name": "string"
              },
              "address": {
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
          }
        ]
      },
      "refunds": {
        "refund_amount": {
          "currency_code": "str",
          "value": "string"
        },
        "transactions": [
          {
            "type": "PAYPAL",
            "refund_id": "string",
            "refund_date": "stringstri",
            "amount": {
              "currency_code": "str",
              "value": "string"
            },
            "method": "BANK_TRANSFER"
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

> 400 Response

```json
{
  "name": "INVALID_REQUEST",
  "message": "Request is not well-formed, syntactically incorrect, or violates schema.",
  "details": [
    {
      "issue": "INVALID_INTEGER_MAX_VALUE",
      "description": "Value exceeds max value."
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

<h3 id="search-for-invoices-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful request returns the HTTP `200 OK` status code and a JSON response body that lists the invoices that match the search criteria.|[invoices](#schemainvoices)|
|400|Bad Request|Invalid request.|Inline|
|403|Forbidden|Authorization Error.|[error_403](#schemaerror_403)|
|500|Internal Server Error|An internal server error has occurred.|[error_500](#schemaerror_500)|
|default|Default|The default response.|[error_default](#schemaerror_default)|

<h3 id="search-for-invoices-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|message|string|false|none|none|
|details|[[error_details](#schemaerror_details)]|false|none|none|
|debug_id|string|false|none|The PayPal internal ID. Used for correlation purposes.|
|links|[[error_link_description](#schemaerror_link_description)]|false|none|An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).|
|details|[object]|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|name|INVALID_REQUEST|
|message|Request is not well-formed, syntactically incorrect, or violates schema.|
|» issue|INVALID_INTEGER_MAX_VALUE|
|» description|Value exceeds max value.|
|» issue|INVALID_INTEGER_MIN_VALUE|
|» description|Value less than minimum value.|
|» issue|INVALID_STRING_MAX_LENGTH|
|» description|the value of a field is too long.|
|» issue|INVALID_ARRAY_MAX_ITEMS|
|» description|the number of items in an array parameter is too large.|
|» issue|INVALID_STRING_LENGTH|
|» description|the value of a field is either too short or too long.|
|» issue|INVALID_STRING_MAX_LENGTH|
|» description|the value of a field is too long.|
|» issue|INVALID_PARAMETER_SYNTAX|
|» description|the value of a field does not conform to the expected format.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://uri.paypal.com/services/invoicing/invoices/read )
</aside>

<h1 id="invoices-templates">templates</h1>

Use the `/templates` resource to create, list, show details for, update, and delete invoice templates. Use the `/templates` resource when you create a third-party invoicing application. For instance, a business can create a template with predefined invoice data. Later, the business can select the template to populate the invoice data.<blockquote><strong>Note:</strong> To upload a logo to display on an invoice, you can use the <strong>Template Settings</strong> dashboard to <a href="https://www.paypal.com/invoice/settings/templates">create a template</a>. When you create an invoice, you can use the URI for that logo.</blockquote>

## List templates

<a id="opIdtemplates.list"></a>

> Code samples

```bash
curl https://api-m.paypal.com/v2/invoicing/templates \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/invoicing/templates`

Lists merchant-created templates with associated details. The associated details include the emails, addresses, and phone numbers from the user's PayPal profile.<br/>The user can select which values to show in the business information section of their template.

<h3 id="list-templates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fields|query|string|false|The fields to return in the response. Value is `all` or `none`. To return only the template name, ID, and default attributes, specify `none`.|
|page|query|integer|false|The page number to be retrieved, for the list of templates. So, a combination of `page=1` and `page_size=20` returns the first 20 templates. A combination of `page=2` and `page_size=20` returns the next 20 templates.|
|page_size|query|integer|false|The maximum number of templates to return in the response.|

> Example responses

> 200 Response

```json
{
  "addresses": [
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
  ],
  "emails": "string",
  "phones": [
    {
      "country_code": "str",
      "national_number": "string",
      "extension_number": "string",
      "phone_type": "FAX"
    }
  ],
  "templates": [
    {
      "id": "string",
      "name": "string",
      "default_template": true,
      "template_info": {
        "detail": {
          "reference": "string",
          "currency_code": "str",
          "note": "string",
          "terms_and_conditions": "string",
          "memo": "string",
          "attachments": [
            {
              "id": "string",
              "reference_url": "http://example.com",
              "content_type": "string",
              "create_time": "stringstringstringst",
              "size": "string"
            }
          ],
          "payment_term": {
            "term_type": "DUE_ON_RECEIPT"
          },
          "metadata": {
            "create_time": "stringstringstringst",
            "created_by": "string",
            "last_update_time": "stringstringstringst",
            "last_updated_by": "string"
          }
        },
        "invoicer": {
          "business_name": "string",
          "name": {
            "prefix": "string",
            "given_name": "string",
            "surname": "string",
            "middle_name": "string",
            "suffix": "string",
            "alternate_full_name": "string",
            "full_name": "string"
          },
          "address": {
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
          "email_address": "string",
          "phones": [
            {
              "country_code": "str",
              "national_number": "string",
              "extension_number": "string",
              "phone_type": "FAX"
            }
          ],
          "website": "http://example.com",
          "tax_id": "string",
          "additional_notes": "string",
          "logo_url": "http://example.com"
        },
        "primary_recipients": [
          {
            "billing_info": {
              "business_name": "string",
              "name": {
                "prefix": "string",
                "given_name": "string",
                "surname": "string",
                "middle_name": "string",
                "suffix": "string",
                "alternate_full_name": "string",
                "full_name": "string"
              },
              "address": {
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
              "email_address": "string",
              "phones": [
                {
                  "country_code": "str",
                  "national_number": "string",
                  "extension_number": "string",
                  "phone_type": "FAX"
                }
              ],
              "additional_info": "string",
              "language": "string"
            },
            "shipping_info": {
              "business_name": "string",
              "name": {
                "prefix": "string",
                "given_name": "string",
                "surname": "string",
                "middle_name": "string",
                "suffix": "string",
                "alternate_full_name": "string",
                "full_name": "string"
              },
              "address": {
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
          }
        ],
        "additional_recipients": [
          "string"
        ],
        "items": [
          {
            "id": "string",
            "name": "string",
            "description": "string",
            "quantity": "string",
            "unit_amount": {
              "currency_code": "str",
              "value": "string"
            },
            "tax": {
              "name": "string",
              "percent": "string",
              "amount": {
                "currency_code": "str",
                "value": "string"
              },
              "tax_note": "string"
            },
            "item_date": "stringstri",
            "discount": {
              "percent": "string",
              "amount": {
                "currency_code": "str",
                "value": "string"
              }
            },
            "unit_of_measure": "QUANTITY"
          }
        ],
        "configuration": {
          "tax_calculated_after_discount": true,
          "tax_inclusive": false,
          "allow_tip": false,
          "partial_payment": {
            "allow_partial_payment": false,
            "minimum_amount_due": {
              "currency_code": "str",
              "value": "string"
            }
          },
          "has_conditional_rule": false
        },
        "amount": {
          "currency_code": "str",
          "value": "string",
          "breakdown": {
            "item_total": {
              "currency_code": "str",
              "value": "string"
            },
            "discount": {
              "invoice_discount": {
                "percent": "string",
                "amount": {
                  "currency_code": "str",
                  "value": "string"
                }
              },
              "item_discount": {
                "currency_code": "str",
                "value": "string"
              }
            },
            "tax_total": {
              "currency_code": "str",
              "value": "string"
            },
            "shipping": {
              "amount": {
                "currency_code": "str",
                "value": "string"
              },
              "tax": {
                "name": "string",
                "percent": "string",
                "amount": {
                  "currency_code": "str",
                  "value": "string"
                },
                "tax_note": "string"
              }
            },
            "custom": {
              "label": "string",
              "amount": {
                "currency_code": "str",
                "value": "string"
              }
            }
          }
        },
        "due_amount": {
          "currency_code": "str",
          "value": "string"
        }
      },
      "settings": {
        "template_item_settings": [
          {
            "field_name": "ITEMS_QUANTITY",
            "display_preference": {
              "hidden": false
            }
          }
        ],
        "template_subtotal_settings": [
          {
            "field_name": "DISCOUNT",
            "display_preference": {
              "hidden": false
            }
          }
        ]
      },
      "unit_of_measure": "QUANTITY",
      "standard_template": true,
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
  "name": "INVALID_REQUEST",
  "message": "Request is not well-formed, syntactically incorrect, or violates schema.",
  "details": [
    {
      "issue": "INVALID_INTEGER_MAX_VALUE",
      "description": "Value exceeds max value."
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

<h3 id="list-templates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful request returns the HTTP `200 OK` status code and a JSON response body that lists invoices.|[templates](#schematemplates)|
|400|Bad Request|Invalid request.|Inline|
|403|Forbidden|Authorization Error.|[error_403](#schemaerror_403)|
|500|Internal Server Error|An internal server error has occurred.|[error_500](#schemaerror_500)|
|default|Default|The default response.|[error_default](#schemaerror_default)|

<h3 id="list-templates-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|message|string|false|none|none|
|details|[[error_details](#schemaerror_details)]|false|none|none|
|debug_id|string|false|none|The PayPal internal ID. Used for correlation purposes.|
|links|[[error_link_description](#schemaerror_link_description)]|false|none|An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).|
|details|[object]|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|name|INVALID_REQUEST|
|message|Request is not well-formed, syntactically incorrect, or violates schema.|
|» issue|INVALID_INTEGER_MAX_VALUE|
|» description|Value exceeds max value.|
|» issue|INVALID_INTEGER_MIN_VALUE|
|» description|Value less than minimum value.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://uri.paypal.com/services/invoicing/invoices/read )
</aside>

## Create template

<a id="opIdtemplates.create"></a>

> Code samples

```bash
curl https://api-m.paypal.com/v2/invoicing/templates \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string",
    "default_template": true,
    "template_info": {
      "detail": {
        "reference": "string",
        "currency_code": "str",
        "note": "string",
        "terms_and_conditions": "string",
        "memo": "string",
        "attachments": [
          {
            "id": "string",
            "reference_url": "http://example.com",
            "content_type": "string",
            "create_time": "stringstringstringst",
            "size": "string"
          }
        ],
        "payment_term": {
          "term_type": "DUE_ON_RECEIPT"
        },
        "metadata": {}
      },
      "invoicer": {
        "business_name": "string",
        "name": {
          "prefix": "string",
          "given_name": "string",
          "surname": "string",
          "middle_name": "string",
          "suffix": "string",
          "alternate_full_name": "string",
          "full_name": "string"
        },
        "address": {
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
        "email_address": "string",
        "phones": [
          {
            "country_code": "str",
            "national_number": "string",
            "extension_number": "string",
            "phone_type": "FAX"
          }
        ],
        "website": "http://example.com",
        "tax_id": "string",
        "additional_notes": "string",
        "logo_url": "http://example.com"
      },
      "primary_recipients": [
        {
          "billing_info": {
            "business_name": "string",
            "name": {
              "prefix": "string",
              "given_name": "string",
              "surname": "string",
              "middle_name": "string",
              "suffix": "string",
              "alternate_full_name": "string",
              "full_name": "string"
            },
            "address": {
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
            "email_address": "string",
            "phones": [
              {
                "country_code": "str",
                "national_number": "string",
                "extension_number": "string",
                "phone_type": "FAX"
              }
            ],
            "additional_info": "string",
            "language": "string"
          },
          "shipping_info": {
            "business_name": "string",
            "name": {
              "prefix": "string",
              "given_name": "string",
              "surname": "string",
              "middle_name": "string",
              "suffix": "string",
              "alternate_full_name": "string",
              "full_name": "string"
            },
            "address": {
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
        }
      ],
      "additional_recipients": [
        "string"
      ],
      "items": [
        {
          "name": "string",
          "description": "string",
          "quantity": "string",
          "unit_amount": {
            "currency_code": "str",
            "value": "string"
          },
          "tax": {
            "name": "string",
            "percent": "string",
            "tax_note": "string"
          },
          "item_date": "stringstri",
          "discount": {
            "percent": "string",
            "amount": {
              "currency_code": "str",
              "value": "string"
            }
          },
          "unit_of_measure": "QUANTITY"
        }
      ],
      "configuration": {
        "tax_calculated_after_discount": true,
        "tax_inclusive": false,
        "allow_tip": false,
        "partial_payment": {
          "allow_partial_payment": false,
          "minimum_amount_due": {
            "currency_code": "str",
            "value": "string"
          }
        },
        "has_conditional_rule": false
      },
      "amount": {
        "currency_code": "str",
        "value": "string",
        "breakdown": {
          "item_total": {
            "currency_code": "str",
            "value": "string"
          },
          "discount": {
            "invoice_discount": {
              "percent": "string",
              "amount": {
                "currency_code": "str",
                "value": "string"
              }
            },
            "item_discount": {
              "currency_code": "str",
              "value": "string"
            }
          },
          "tax_total": {
            "currency_code": "str",
            "value": "string"
          },
          "shipping": {
            "amount": {
              "currency_code": "str",
              "value": "string"
            },
            "tax": {
              "name": "string",
              "percent": "string",
              "tax_note": "string"
            }
          },
          "custom": {
            "label": "string",
            "amount": {
              "currency_code": "str",
              "value": "string"
            }
          }
        }
      }
    },
    "settings": {
      "template_item_settings": [
        {
          "field_name": "ITEMS_QUANTITY",
          "display_preference": {
            "hidden": false
          }
        }
      ],
      "template_subtotal_settings": [
        {
          "field_name": "DISCOUNT",
          "display_preference": {
            "hidden": false
          }
        }
      ]
    },
    "unit_of_measure": "QUANTITY"
  }'
```

`POST /v2/invoicing/templates`

Creates an invoice template. You can use details from this template to create an invoice. You can create up to 50 templates.<blockquote><strong>Note:</strong> Every merchant starts with three PayPal system templates that are optimized for the unit type billed. The template includes `Quantity`, `Hours`, and `Amount`.</blockquote>

> Body parameter

```json
{
  "name": "string",
  "default_template": true,
  "template_info": {
    "detail": {
      "reference": "string",
      "currency_code": "str",
      "note": "string",
      "terms_and_conditions": "string",
      "memo": "string",
      "attachments": [
        {
          "id": "string",
          "reference_url": "http://example.com",
          "content_type": "string",
          "create_time": "stringstringstringst",
          "size": "string"
        }
      ],
      "payment_term": {
        "term_type": "DUE_ON_RECEIPT"
      },
      "metadata": {}
    },
    "invoicer": {
      "business_name": "string",
      "name": {
        "prefix": "string",
        "given_name": "string",
        "surname": "string",
        "middle_name": "string",
        "suffix": "string",
        "alternate_full_name": "string",
        "full_name": "string"
      },
      "address": {
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
      "email_address": "string",
      "phones": [
        {
          "country_code": "str",
          "national_number": "string",
          "extension_number": "string",
          "phone_type": "FAX"
        }
      ],
      "website": "http://example.com",
      "tax_id": "string",
      "additional_notes": "string",
      "logo_url": "http://example.com"
    },
    "primary_recipients": [
      {
        "billing_info": {
          "business_name": "string",
          "name": {
            "prefix": "string",
            "given_name": "string",
            "surname": "string",
            "middle_name": "string",
            "suffix": "string",
            "alternate_full_name": "string",
            "full_name": "string"
          },
          "address": {
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
          "email_address": "string",
          "phones": [
            {
              "country_code": "str",
              "national_number": "string",
              "extension_number": "string",
              "phone_type": "FAX"
            }
          ],
          "additional_info": "string",
          "language": "string"
        },
        "shipping_info": {
          "business_name": "string",
          "name": {
            "prefix": "string",
            "given_name": "string",
            "surname": "string",
            "middle_name": "string",
            "suffix": "string",
            "alternate_full_name": "string",
            "full_name": "string"
          },
          "address": {
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
      }
    ],
    "additional_recipients": [
      "string"
    ],
    "items": [
      {
        "name": "string",
        "description": "string",
        "quantity": "string",
        "unit_amount": {
          "currency_code": "str",
          "value": "string"
        },
        "tax": {
          "name": "string",
          "percent": "string",
          "tax_note": "string"
        },
        "item_date": "stringstri",
        "discount": {
          "percent": "string",
          "amount": {
            "currency_code": "str",
            "value": "string"
          }
        },
        "unit_of_measure": "QUANTITY"
      }
    ],
    "configuration": {
      "tax_calculated_after_discount": true,
      "tax_inclusive": false,
      "allow_tip": false,
      "partial_payment": {
        "allow_partial_payment": false,
        "minimum_amount_due": {
          "currency_code": "str",
          "value": "string"
        }
      },
      "has_conditional_rule": false
    },
    "amount": {
      "currency_code": "str",
      "value": "string",
      "breakdown": {
        "item_total": {
          "currency_code": "str",
          "value": "string"
        },
        "discount": {
          "invoice_discount": {
            "percent": "string",
            "amount": {
              "currency_code": "str",
              "value": "string"
            }
          },
          "item_discount": {
            "currency_code": "str",
            "value": "string"
          }
        },
        "tax_total": {
          "currency_code": "str",
          "value": "string"
        },
        "shipping": {
          "amount": {
            "currency_code": "str",
            "value": "string"
          },
          "tax": {
            "name": "string",
            "percent": "string",
            "tax_note": "string"
          }
        },
        "custom": {
          "label": "string",
          "amount": {
            "currency_code": "str",
            "value": "string"
          }
        }
      }
    }
  },
  "settings": {
    "template_item_settings": [
      {
        "field_name": "ITEMS_QUANTITY",
        "display_preference": {
          "hidden": false
        }
      }
    ],
    "template_subtotal_settings": [
      {
        "field_name": "DISCOUNT",
        "display_preference": {
          "hidden": false
        }
      }
    ]
  },
  "unit_of_measure": "QUANTITY"
}
```

<h3 id="create-template-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[template](#schematemplate)|true|none|
|» name|body|string|false|The template name.<blockquote><strong>Note:</strong> The template name must be unique.</blockquote>|
|» default_template|body|boolean|false|Indicates whether this template is the default template. A invoicer can have one default template.|
|» template_info|body|[template_info](#schematemplate_info)|false|The template details. Includes invoicer business information, invoice recipients, items, and configuration.|
|» settings|body|[template_settings](#schematemplate_settings)|false|The template settings. Describes which fields to show or hide when you create an invoice.|
|» unit_of_measure|body|[unit_of_measure](#schemaunit_of_measure)|false|The unit of measure for the template. Value is quantity, hours, or amount.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» unit_of_measure|QUANTITY|
|» unit_of_measure|HOURS|
|» unit_of_measure|AMOUNT|

> Example responses

> 201 Response

```json
{
  "id": "string",
  "name": "string",
  "default_template": true,
  "template_info": {
    "detail": {
      "reference": "string",
      "currency_code": "str",
      "note": "string",
      "terms_and_conditions": "string",
      "memo": "string",
      "attachments": [
        {
          "id": "string",
          "reference_url": "http://example.com",
          "content_type": "string",
          "create_time": "stringstringstringst",
          "size": "string"
        }
      ],
      "payment_term": {
        "term_type": "DUE_ON_RECEIPT"
      },
      "metadata": {
        "create_time": "stringstringstringst",
        "created_by": "string",
        "last_update_time": "stringstringstringst",
        "last_updated_by": "string"
      }
    },
    "invoicer": {
      "business_name": "string",
      "name": {
        "prefix": "string",
        "given_name": "string",
        "surname": "string",
        "middle_name": "string",
        "suffix": "string",
        "alternate_full_name": "string",
        "full_name": "string"
      },
      "address": {
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
      "email_address": "string",
      "phones": [
        {
          "country_code": "str",
          "national_number": "string",
          "extension_number": "string",
          "phone_type": "FAX"
        }
      ],
      "website": "http://example.com",
      "tax_id": "string",
      "additional_notes": "string",
      "logo_url": "http://example.com"
    },
    "primary_recipients": [
      {
        "billing_info": {
          "business_name": "string",
          "name": {
            "prefix": "string",
            "given_name": "string",
            "surname": "string",
            "middle_name": "string",
            "suffix": "string",
            "alternate_full_name": "string",
            "full_name": "string"
          },
          "address": {
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
          "email_address": "string",
          "phones": [
            {
              "country_code": "str",
              "national_number": "string",
              "extension_number": "string",
              "phone_type": "FAX"
            }
          ],
          "additional_info": "string",
          "language": "string"
        },
        "shipping_info": {
          "business_name": "string",
          "name": {
            "prefix": "string",
            "given_name": "string",
            "surname": "string",
            "middle_name": "string",
            "suffix": "string",
            "alternate_full_name": "string",
            "full_name": "string"
          },
          "address": {
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
      }
    ],
    "additional_recipients": [
      "string"
    ],
    "items": [
      {
        "id": "string",
        "name": "string",
        "description": "string",
        "quantity": "string",
        "unit_amount": {
          "currency_code": "str",
          "value": "string"
        },
        "tax": {
          "name": "string",
          "percent": "string",
          "amount": {
            "currency_code": "str",
            "value": "string"
          },
          "tax_note": "string"
        },
        "item_date": "stringstri",
        "discount": {
          "percent": "string",
          "amount": {
            "currency_code": "str",
            "value": "string"
          }
        },
        "unit_of_measure": "QUANTITY"
      }
    ],
    "configuration": {
      "tax_calculated_after_discount": true,
      "tax_inclusive": false,
      "allow_tip": false,
      "partial_payment": {
        "allow_partial_payment": false,
        "minimum_amount_due": {
          "currency_code": "str",
          "value": "string"
        }
      },
      "has_conditional_rule": false
    },
    "amount": {
      "currency_code": "str",
      "value": "string",
      "breakdown": {
        "item_total": {
          "currency_code": "str",
          "value": "string"
        },
        "discount": {
          "invoice_discount": {
            "percent": "string",
            "amount": {
              "currency_code": "str",
              "value": "string"
            }
          },
          "item_discount": {
            "currency_code": "str",
            "value": "string"
          }
        },
        "tax_total": {
          "currency_code": "str",
          "value": "string"
        },
        "shipping": {
          "amount": {
            "currency_code": "str",
            "value": "string"
          },
          "tax": {
            "name": "string",
            "percent": "string",
            "amount": {
              "currency_code": "str",
              "value": "string"
            },
            "tax_note": "string"
          }
        },
        "custom": {
          "label": "string",
          "amount": {
            "currency_code": "str",
            "value": "string"
          }
        }
      }
    },
    "due_amount": {
      "currency_code": "str",
      "value": "string"
    }
  },
  "settings": {
    "template_item_settings": [
      {
        "field_name": "ITEMS_QUANTITY",
        "display_preference": {
          "hidden": false
        }
      }
    ],
    "template_subtotal_settings": [
      {
        "field_name": "DISCOUNT",
        "display_preference": {
          "hidden": false
        }
      }
    ]
  },
  "unit_of_measure": "QUANTITY",
  "standard_template": true,
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
  "name": "INVALID_REQUEST",
  "message": "Request is not well-formed, syntactically incorrect, or violates schema.",
  "details": [
    {
      "issue": "TEMPLATE_NAME_ALREADY_EXISTS",
      "description": "Template name already exists."
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

> 422 Response

```json
{
  "name": "UNPROCESSABLE_ENTITY",
  "message": "The requested action could not be performed, semantically incorrect, or failed business validation.",
  "details": [
    {
      "issue": "CANNOT_CANCEL_DRAFT_INVOICE",
      "description": "Cannot cancel a draft invoice."
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

<h3 id="create-template-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|A successful request returns the HTTP `201 Created` status code. A JSON response body that shows template details is returned if you set <code>prefer=return=representation</code>.|[template](#schematemplate)|
|400|Bad Request|Invalid request.|Inline|
|403|Forbidden|Authorization Error.|[error_403](#schemaerror_403)|
|422|Unprocessable Entity|Unprocessable Entity.|Inline|
|500|Internal Server Error|An internal server error has occurred.|[error_500](#schemaerror_500)|
|default|Default|The default response.|[error_default](#schemaerror_default)|

<h3 id="create-template-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|message|string|false|none|none|
|details|[[error_details](#schemaerror_details)]|false|none|none|
|debug_id|string|false|none|The PayPal internal ID. Used for correlation purposes.|
|links|[[error_link_description](#schemaerror_link_description)]|false|none|An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).|
|details|[object]|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|name|INVALID_REQUEST|
|message|Request is not well-formed, syntactically incorrect, or violates schema.|
|» issue|TEMPLATE_NAME_ALREADY_EXISTS|
|» description|Template name already exists.|
|» issue|INVALID_STRING_LENGTH|
|» description|Template name length should be between 1 and 500.|
|» issue|INVALID_STRING_LENGTH|
|» description|Currency code length should be 3 characters.|
|» issue|INVALID_STRING_LENGTH|
|» description|the value of a field is either too short or too long.|
|» issue|INVALID_STRING_MAX_LENGTH|
|» description|Value of the field is too long.|
|» issue|INVALID_PARAMETER_SYNTAX|
|» description|the value of a field does not conform to the expected format.|

Status Code **422**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|message|string|false|none|none|
|details|[[error_details](#schemaerror_details)]|false|none|none|
|debug_id|string|false|none|The PayPal internal ID. Used for correlation purposes.|
|links|[[error_link_description](#schemaerror_link_description)]|false|none|An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).|
|details|[object]|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|name|UNPROCESSABLE_ENTITY|
|message|The requested action could not be performed, semantically incorrect, or failed business validation.|
|» issue|CANNOT_CANCEL_DRAFT_INVOICE|
|» description|Cannot cancel a draft invoice.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://uri.paypal.com/services/invoicing/invoices/readwrite )
</aside>

## Show template details

<a id="opIdtemplates.get"></a>

> Code samples

```bash
curl https://api-m.paypal.com/v2/invoicing/templates/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/invoicing/templates/{template_id}`

Shows details for a template, by ID.

<h3 id="show-template-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|template_id|path|string|true|The ID of the template to delete.|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string",
  "default_template": true,
  "template_info": {
    "detail": {
      "reference": "string",
      "currency_code": "str",
      "note": "string",
      "terms_and_conditions": "string",
      "memo": "string",
      "attachments": [
        {
          "id": "string",
          "reference_url": "http://example.com",
          "content_type": "string",
          "create_time": "stringstringstringst",
          "size": "string"
        }
      ],
      "payment_term": {
        "term_type": "DUE_ON_RECEIPT"
      },
      "metadata": {
        "create_time": "stringstringstringst",
        "created_by": "string",
        "last_update_time": "stringstringstringst",
        "last_updated_by": "string"
      }
    },
    "invoicer": {
      "business_name": "string",
      "name": {
        "prefix": "string",
        "given_name": "string",
        "surname": "string",
        "middle_name": "string",
        "suffix": "string",
        "alternate_full_name": "string",
        "full_name": "string"
      },
      "address": {
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
      "email_address": "string",
      "phones": [
        {
          "country_code": "str",
          "national_number": "string",
          "extension_number": "string",
          "phone_type": "FAX"
        }
      ],
      "website": "http://example.com",
      "tax_id": "string",
      "additional_notes": "string",
      "logo_url": "http://example.com"
    },
    "primary_recipients": [
      {
        "billing_info": {
          "business_name": "string",
          "name": {
            "prefix": "string",
            "given_name": "string",
            "surname": "string",
            "middle_name": "string",
            "suffix": "string",
            "alternate_full_name": "string",
            "full_name": "string"
          },
          "address": {
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
          "email_address": "string",
          "phones": [
            {
              "country_code": "str",
              "national_number": "string",
              "extension_number": "string",
              "phone_type": "FAX"
            }
          ],
          "additional_info": "string",
          "language": "string"
        },
        "shipping_info": {
          "business_name": "string",
          "name": {
            "prefix": "string",
            "given_name": "string",
            "surname": "string",
            "middle_name": "string",
            "suffix": "string",
            "alternate_full_name": "string",
            "full_name": "string"
          },
          "address": {
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
      }
    ],
    "additional_recipients": [
      "string"
    ],
    "items": [
      {
        "id": "string",
        "name": "string",
        "description": "string",
        "quantity": "string",
        "unit_amount": {
          "currency_code": "str",
          "value": "string"
        },
        "tax": {
          "name": "string",
          "percent": "string",
          "amount": {
            "currency_code": "str",
            "value": "string"
          },
          "tax_note": "string"
        },
        "item_date": "stringstri",
        "discount": {
          "percent": "string",
          "amount": {
            "currency_code": "str",
            "value": "string"
          }
        },
        "unit_of_measure": "QUANTITY"
      }
    ],
    "configuration": {
      "tax_calculated_after_discount": true,
      "tax_inclusive": false,
      "allow_tip": false,
      "partial_payment": {
        "allow_partial_payment": false,
        "minimum_amount_due": {
          "currency_code": "str",
          "value": "string"
        }
      },
      "has_conditional_rule": false
    },
    "amount": {
      "currency_code": "str",
      "value": "string",
      "breakdown": {
        "item_total": {
          "currency_code": "str",
          "value": "string"
        },
        "discount": {
          "invoice_discount": {
            "percent": "string",
            "amount": {
              "currency_code": "str",
              "value": "string"
            }
          },
          "item_discount": {
            "currency_code": "str",
            "value": "string"
          }
        },
        "tax_total": {
          "currency_code": "str",
          "value": "string"
        },
        "shipping": {
          "amount": {
            "currency_code": "str",
            "value": "string"
          },
          "tax": {
            "name": "string",
            "percent": "string",
            "amount": {
              "currency_code": "str",
              "value": "string"
            },
            "tax_note": "string"
          }
        },
        "custom": {
          "label": "string",
          "amount": {
            "currency_code": "str",
            "value": "string"
          }
        }
      }
    },
    "due_amount": {
      "currency_code": "str",
      "value": "string"
    }
  },
  "settings": {
    "template_item_settings": [
      {
        "field_name": "ITEMS_QUANTITY",
        "display_preference": {
          "hidden": false
        }
      }
    ],
    "template_subtotal_settings": [
      {
        "field_name": "DISCOUNT",
        "display_preference": {
          "hidden": false
        }
      }
    ]
  },
  "unit_of_measure": "QUANTITY",
  "standard_template": true,
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
      "issue": "PERMISSION_DENIED",
      "description": "The requested template is not associated with the requested user."
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

> 404 Response

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

<h3 id="show-template-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful request returns the HTTP `200 OK` status code and a JSON response body that shows template details.|[template](#schematemplate)|
|403|Forbidden|Authorization Error.|Inline|
|404|Not Found|Resource Not Found.|[error_404](#schemaerror_404)|
|500|Internal Server Error|An internal server error has occurred.|[error_500](#schemaerror_500)|
|default|Default|The default response.|[error_default](#schemaerror_default)|

<h3 id="show-template-details-responseschema">Response Schema</h3>

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|message|string|false|none|none|
|details|[[error_details](#schemaerror_details)]|false|none|none|
|debug_id|string|false|none|The PayPal internal ID. Used for correlation purposes.|
|links|[[error_link_description](#schemaerror_link_description)]|false|none|An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).|
|details|[object]|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|name|NOT_AUTHORIZED|
|message|Authorization failed due to insufficient permissions.|
|» issue|PERMISSION_DENIED|
|» description|The requested template is not associated with the requested user.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://uri.paypal.com/services/invoicing/invoices/read )
</aside>

## Fully update template

<a id="opIdtemplates.update"></a>

> Code samples

```bash
curl https://api-m.paypal.com/v2/invoicing/templates/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string",
    "default_template": true,
    "template_info": {
      "detail": {
        "reference": "string",
        "currency_code": "str",
        "note": "string",
        "terms_and_conditions": "string",
        "memo": "string",
        "attachments": [
          {
            "id": "string",
            "reference_url": "http://example.com",
            "content_type": "string",
            "create_time": "stringstringstringst",
            "size": "string"
          }
        ],
        "payment_term": {
          "term_type": "DUE_ON_RECEIPT"
        },
        "metadata": {}
      },
      "invoicer": {
        "business_name": "string",
        "name": {
          "prefix": "string",
          "given_name": "string",
          "surname": "string",
          "middle_name": "string",
          "suffix": "string",
          "alternate_full_name": "string",
          "full_name": "string"
        },
        "address": {
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
        "email_address": "string",
        "phones": [
          {
            "country_code": "str",
            "national_number": "string",
            "extension_number": "string",
            "phone_type": "FAX"
          }
        ],
        "website": "http://example.com",
        "tax_id": "string",
        "additional_notes": "string",
        "logo_url": "http://example.com"
      },
      "primary_recipients": [
        {
          "billing_info": {
            "business_name": "string",
            "name": {
              "prefix": "string",
              "given_name": "string",
              "surname": "string",
              "middle_name": "string",
              "suffix": "string",
              "alternate_full_name": "string",
              "full_name": "string"
            },
            "address": {
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
            "email_address": "string",
            "phones": [
              {
                "country_code": "str",
                "national_number": "string",
                "extension_number": "string",
                "phone_type": "FAX"
              }
            ],
            "additional_info": "string",
            "language": "string"
          },
          "shipping_info": {
            "business_name": "string",
            "name": {
              "prefix": "string",
              "given_name": "string",
              "surname": "string",
              "middle_name": "string",
              "suffix": "string",
              "alternate_full_name": "string",
              "full_name": "string"
            },
            "address": {
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
        }
      ],
      "additional_recipients": [
        "string"
      ],
      "items": [
        {
          "name": "string",
          "description": "string",
          "quantity": "string",
          "unit_amount": {
            "currency_code": "str",
            "value": "string"
          },
          "tax": {
            "name": "string",
            "percent": "string",
            "tax_note": "string"
          },
          "item_date": "stringstri",
          "discount": {
            "percent": "string",
            "amount": {
              "currency_code": "str",
              "value": "string"
            }
          },
          "unit_of_measure": "QUANTITY"
        }
      ],
      "configuration": {
        "tax_calculated_after_discount": true,
        "tax_inclusive": false,
        "allow_tip": false,
        "partial_payment": {
          "allow_partial_payment": false,
          "minimum_amount_due": {
            "currency_code": "str",
            "value": "string"
          }
        },
        "has_conditional_rule": false
      },
      "amount": {
        "currency_code": "str",
        "value": "string",
        "breakdown": {
          "item_total": {
            "currency_code": "str",
            "value": "string"
          },
          "discount": {
            "invoice_discount": {
              "percent": "string",
              "amount": {
                "currency_code": "str",
                "value": "string"
              }
            },
            "item_discount": {
              "currency_code": "str",
              "value": "string"
            }
          },
          "tax_total": {
            "currency_code": "str",
            "value": "string"
          },
          "shipping": {
            "amount": {
              "currency_code": "str",
              "value": "string"
            },
            "tax": {
              "name": "string",
              "percent": "string",
              "tax_note": "string"
            }
          },
          "custom": {
            "label": "string",
            "amount": {
              "currency_code": "str",
              "value": "string"
            }
          }
        }
      }
    },
    "settings": {
      "template_item_settings": [
        {
          "field_name": "ITEMS_QUANTITY",
          "display_preference": {
            "hidden": false
          }
        }
      ],
      "template_subtotal_settings": [
        {
          "field_name": "DISCOUNT",
          "display_preference": {
            "hidden": false
          }
        }
      ]
    },
    "unit_of_measure": "QUANTITY"
  }'
```

`PUT /v2/invoicing/templates/{template_id}`

Fully updates a template, by ID. In the JSON request body, include a complete `template` object. This call does not support partial updates.

> Body parameter

```json
{
  "name": "string",
  "default_template": true,
  "template_info": {
    "detail": {
      "reference": "string",
      "currency_code": "str",
      "note": "string",
      "terms_and_conditions": "string",
      "memo": "string",
      "attachments": [
        {
          "id": "string",
          "reference_url": "http://example.com",
          "content_type": "string",
          "create_time": "stringstringstringst",
          "size": "string"
        }
      ],
      "payment_term": {
        "term_type": "DUE_ON_RECEIPT"
      },
      "metadata": {}
    },
    "invoicer": {
      "business_name": "string",
      "name": {
        "prefix": "string",
        "given_name": "string",
        "surname": "string",
        "middle_name": "string",
        "suffix": "string",
        "alternate_full_name": "string",
        "full_name": "string"
      },
      "address": {
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
      "email_address": "string",
      "phones": [
        {
          "country_code": "str",
          "national_number": "string",
          "extension_number": "string",
          "phone_type": "FAX"
        }
      ],
      "website": "http://example.com",
      "tax_id": "string",
      "additional_notes": "string",
      "logo_url": "http://example.com"
    },
    "primary_recipients": [
      {
        "billing_info": {
          "business_name": "string",
          "name": {
            "prefix": "string",
            "given_name": "string",
            "surname": "string",
            "middle_name": "string",
            "suffix": "string",
            "alternate_full_name": "string",
            "full_name": "string"
          },
          "address": {
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
          "email_address": "string",
          "phones": [
            {
              "country_code": "str",
              "national_number": "string",
              "extension_number": "string",
              "phone_type": "FAX"
            }
          ],
          "additional_info": "string",
          "language": "string"
        },
        "shipping_info": {
          "business_name": "string",
          "name": {
            "prefix": "string",
            "given_name": "string",
            "surname": "string",
            "middle_name": "string",
            "suffix": "string",
            "alternate_full_name": "string",
            "full_name": "string"
          },
          "address": {
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
      }
    ],
    "additional_recipients": [
      "string"
    ],
    "items": [
      {
        "name": "string",
        "description": "string",
        "quantity": "string",
        "unit_amount": {
          "currency_code": "str",
          "value": "string"
        },
        "tax": {
          "name": "string",
          "percent": "string",
          "tax_note": "string"
        },
        "item_date": "stringstri",
        "discount": {
          "percent": "string",
          "amount": {
            "currency_code": "str",
            "value": "string"
          }
        },
        "unit_of_measure": "QUANTITY"
      }
    ],
    "configuration": {
      "tax_calculated_after_discount": true,
      "tax_inclusive": false,
      "allow_tip": false,
      "partial_payment": {
        "allow_partial_payment": false,
        "minimum_amount_due": {
          "currency_code": "str",
          "value": "string"
        }
      },
      "has_conditional_rule": false
    },
    "amount": {
      "currency_code": "str",
      "value": "string",
      "breakdown": {
        "item_total": {
          "currency_code": "str",
          "value": "string"
        },
        "discount": {
          "invoice_discount": {
            "percent": "string",
            "amount": {
              "currency_code": "str",
              "value": "string"
            }
          },
          "item_discount": {
            "currency_code": "str",
            "value": "string"
          }
        },
        "tax_total": {
          "currency_code": "str",
          "value": "string"
        },
        "shipping": {
          "amount": {
            "currency_code": "str",
            "value": "string"
          },
          "tax": {
            "name": "string",
            "percent": "string",
            "tax_note": "string"
          }
        },
        "custom": {
          "label": "string",
          "amount": {
            "currency_code": "str",
            "value": "string"
          }
        }
      }
    }
  },
  "settings": {
    "template_item_settings": [
      {
        "field_name": "ITEMS_QUANTITY",
        "display_preference": {
          "hidden": false
        }
      }
    ],
    "template_subtotal_settings": [
      {
        "field_name": "DISCOUNT",
        "display_preference": {
          "hidden": false
        }
      }
    ]
  },
  "unit_of_measure": "QUANTITY"
}
```

<h3 id="fully-update-template-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|template_id|path|string|true|The ID of the template to delete.|
|body|body|[template](#schematemplate)|true|A representation of changes to make in the template.|
|» name|body|string|false|The template name.<blockquote><strong>Note:</strong> The template name must be unique.</blockquote>|
|» default_template|body|boolean|false|Indicates whether this template is the default template. A invoicer can have one default template.|
|» template_info|body|[template_info](#schematemplate_info)|false|The template details. Includes invoicer business information, invoice recipients, items, and configuration.|
|» settings|body|[template_settings](#schematemplate_settings)|false|The template settings. Describes which fields to show or hide when you create an invoice.|
|» unit_of_measure|body|[unit_of_measure](#schemaunit_of_measure)|false|The unit of measure for the template. Value is quantity, hours, or amount.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» unit_of_measure|QUANTITY|
|» unit_of_measure|HOURS|
|» unit_of_measure|AMOUNT|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string",
  "default_template": true,
  "template_info": {
    "detail": {
      "reference": "string",
      "currency_code": "str",
      "note": "string",
      "terms_and_conditions": "string",
      "memo": "string",
      "attachments": [
        {
          "id": "string",
          "reference_url": "http://example.com",
          "content_type": "string",
          "create_time": "stringstringstringst",
          "size": "string"
        }
      ],
      "payment_term": {
        "term_type": "DUE_ON_RECEIPT"
      },
      "metadata": {
        "create_time": "stringstringstringst",
        "created_by": "string",
        "last_update_time": "stringstringstringst",
        "last_updated_by": "string"
      }
    },
    "invoicer": {
      "business_name": "string",
      "name": {
        "prefix": "string",
        "given_name": "string",
        "surname": "string",
        "middle_name": "string",
        "suffix": "string",
        "alternate_full_name": "string",
        "full_name": "string"
      },
      "address": {
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
      "email_address": "string",
      "phones": [
        {
          "country_code": "str",
          "national_number": "string",
          "extension_number": "string",
          "phone_type": "FAX"
        }
      ],
      "website": "http://example.com",
      "tax_id": "string",
      "additional_notes": "string",
      "logo_url": "http://example.com"
    },
    "primary_recipients": [
      {
        "billing_info": {
          "business_name": "string",
          "name": {
            "prefix": "string",
            "given_name": "string",
            "surname": "string",
            "middle_name": "string",
            "suffix": "string",
            "alternate_full_name": "string",
            "full_name": "string"
          },
          "address": {
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
          "email_address": "string",
          "phones": [
            {
              "country_code": "str",
              "national_number": "string",
              "extension_number": "string",
              "phone_type": "FAX"
            }
          ],
          "additional_info": "string",
          "language": "string"
        },
        "shipping_info": {
          "business_name": "string",
          "name": {
            "prefix": "string",
            "given_name": "string",
            "surname": "string",
            "middle_name": "string",
            "suffix": "string",
            "alternate_full_name": "string",
            "full_name": "string"
          },
          "address": {
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
      }
    ],
    "additional_recipients": [
      "string"
    ],
    "items": [
      {
        "id": "string",
        "name": "string",
        "description": "string",
        "quantity": "string",
        "unit_amount": {
          "currency_code": "str",
          "value": "string"
        },
        "tax": {
          "name": "string",
          "percent": "string",
          "amount": {
            "currency_code": "str",
            "value": "string"
          },
          "tax_note": "string"
        },
        "item_date": "stringstri",
        "discount": {
          "percent": "string",
          "amount": {
            "currency_code": "str",
            "value": "string"
          }
        },
        "unit_of_measure": "QUANTITY"
      }
    ],
    "configuration": {
      "tax_calculated_after_discount": true,
      "tax_inclusive": false,
      "allow_tip": false,
      "partial_payment": {
        "allow_partial_payment": false,
        "minimum_amount_due": {
          "currency_code": "str",
          "value": "string"
        }
      },
      "has_conditional_rule": false
    },
    "amount": {
      "currency_code": "str",
      "value": "string",
      "breakdown": {
        "item_total": {
          "currency_code": "str",
          "value": "string"
        },
        "discount": {
          "invoice_discount": {
            "percent": "string",
            "amount": {
              "currency_code": "str",
              "value": "string"
            }
          },
          "item_discount": {
            "currency_code": "str",
            "value": "string"
          }
        },
        "tax_total": {
          "currency_code": "str",
          "value": "string"
        },
        "shipping": {
          "amount": {
            "currency_code": "str",
            "value": "string"
          },
          "tax": {
            "name": "string",
            "percent": "string",
            "amount": {
              "currency_code": "str",
              "value": "string"
            },
            "tax_note": "string"
          }
        },
        "custom": {
          "label": "string",
          "amount": {
            "currency_code": "str",
            "value": "string"
          }
        }
      }
    },
    "due_amount": {
      "currency_code": "str",
      "value": "string"
    }
  },
  "settings": {
    "template_item_settings": [
      {
        "field_name": "ITEMS_QUANTITY",
        "display_preference": {
          "hidden": false
        }
      }
    ],
    "template_subtotal_settings": [
      {
        "field_name": "DISCOUNT",
        "display_preference": {
          "hidden": false
        }
      }
    ]
  },
  "unit_of_measure": "QUANTITY",
  "standard_template": true,
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
  "name": "INVALID_REQUEST",
  "message": "Request is not well-formed, syntactically incorrect, or violates schema.",
  "details": [
    {
      "issue": "TEMPLATE_NAME_ALREADY_EXISTS",
      "description": "Template name already exists."
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
      "issue": "PERMISSION_DENIED",
      "description": "The requested invoice is not associated with the requested user."
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

> 404 Response

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

<h3 id="fully-update-template-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful request returns the HTTP `200 OK` status code. A JSON response body that shows template details is returned if you set <code>prefer=return=representation</code>.|[template](#schematemplate)|
|400|Bad Request|Invalid request.|Inline|
|403|Forbidden|Authorization Error.|Inline|
|404|Not Found|Resource Not Found.|[error_404](#schemaerror_404)|
|500|Internal Server Error|An internal server error has occurred.|[error_500](#schemaerror_500)|
|default|Default|The default response.|[error_default](#schemaerror_default)|

<h3 id="fully-update-template-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|message|string|false|none|none|
|details|[[error_details](#schemaerror_details)]|false|none|none|
|debug_id|string|false|none|The PayPal internal ID. Used for correlation purposes.|
|links|[[error_link_description](#schemaerror_link_description)]|false|none|An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).|
|details|[object]|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|name|INVALID_REQUEST|
|message|Request is not well-formed, syntactically incorrect, or violates schema.|
|» issue|TEMPLATE_NAME_ALREADY_EXISTS|
|» description|Template name already exists.|
|» issue|INVALID_STRING_LENGTH|
|» description|Template name length should be between 1 and 500.|
|» issue|INVALID_STRING_LENGTH|
|» description|Currency code length should be 3 characters.|
|» issue|INVALID_STRING_LENGTH|
|» description|Value of the field is either too short or too long.|
|» issue|INVALID_STRING_MAX_LENGTH|
|» description|Value of the field is too long.|
|» issue|INVALID_PARAMETER_SYNTAX|
|» description|Value of the field does not conform to the expected format.|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|message|string|false|none|none|
|details|[[error_details](#schemaerror_details)]|false|none|none|
|debug_id|string|false|none|The PayPal internal ID. Used for correlation purposes.|
|links|[[error_link_description](#schemaerror_link_description)]|false|none|An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).|
|details|[object]|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|name|NOT_AUTHORIZED|
|message|Authorization failed due to insufficient permissions.|
|» issue|PERMISSION_DENIED|
|» description|The requested invoice is not associated with the requested user.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://uri.paypal.com/services/invoicing/invoices/readwrite )
</aside>

## Delete template

<a id="opIdtemplates.delete"></a>

> Code samples

```bash
curl https://api-m.paypal.com/v2/invoicing/templates/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v2/invoicing/templates/{template_id}`

Deletes a template, by ID.

<h3 id="delete-template-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|template_id|path|string|true|The ID of the template to delete.|

> Example responses

> 403 Response

```json
{
  "name": "NOT_AUTHORIZED",
  "message": "Authorization failed due to insufficient permissions.",
  "details": [
    {
      "issue": "PERMISSION_DENIED",
      "description": "The requested template is not associated with the requested user."
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

> 404 Response

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

<h3 id="delete-template-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|A successful request returns the HTTP `204 No Content` status code with no JSON response body.|None|
|403|Forbidden|Authorization Error.|Inline|
|404|Not Found|Resource Not Found.|[error_404](#schemaerror_404)|
|500|Internal Server Error|An internal server error has occurred.|[error_500](#schemaerror_500)|
|default|Default|The default response.|[error_default](#schemaerror_default)|

<h3 id="delete-template-responseschema">Response Schema</h3>

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|message|string|false|none|none|
|details|[[error_details](#schemaerror_details)]|false|none|none|
|debug_id|string|false|none|The PayPal internal ID. Used for correlation purposes.|
|links|[[error_link_description](#schemaerror_link_description)]|false|none|An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).|
|details|[object]|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|
|» *anyOf*|object|false|none|none|
|» issue|string|false|none|none|
|» description|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|name|NOT_AUTHORIZED|
|message|Authorization failed due to insufficient permissions.|
|» issue|PERMISSION_DENIED|
|» description|The requested template is not associated with the requested user.|
|» issue|CANNOT_DELETE_GLOBAL_TEMPLATE|
|» description|Global templates cannot be deleted.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://uri.paypal.com/services/invoicing/invoices/readwrite )
</aside>

<h1 id="invoices-connections">connections</h1>

Use the `accounting-sync/merchants/connections` resource to get active connections list.

## List Connections.

<a id="opIdconnections.get"></a>

> Code samples

```bash
curl https://api-m.paypal.com/v2/invoicing/accounting-sync/merchant/connections \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/invoicing/accounting-sync/merchant/connections`

Lists connections to accounting platforms per merchant.

> Example responses

> 200 Response

```json
{
  "connections": [
    {
      "platform_name": "string",
      "last_sync_time": "stringstringstringst",
      "last_sync_status": "IN_PROGRESS"
    }
  ]
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

> 404 Response

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

<h3 id="list-connections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful request returns the HTTP `200 OK` status code and a JSON response body.|[connections](#schemaconnections)|
|400|Bad Request|Invalid request.|[error_400](#schemaerror_400)|
|403|Forbidden|Authorization Error.|[error_403](#schemaerror_403)|
|404|Not Found|Resource Not Found.|[error_404](#schemaerror_404)|
|500|Internal Server Error|An internal server error has occurred.|[error_500](#schemaerror_500)|
|default|Default|The default response.|[error_default](#schemaerror_default)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://uri.paypal.com/services/invoicing/invoices/read https://uri.paypal.com/services/invoicing/invoices/readwrite https://uri.paypal.com/services/invoicing/internal )
</aside>

<h1 id="invoices-invoice-connection-details">invoice-connection-details</h1>

Use the `accounting-sync/invoices/{id}/connections` resource to get active connections list.

## List Connection Status for an Invoice.

<a id="opIdinvoice_connection_details.get"></a>

> Code samples

```bash
curl https://api-m.paypal.com/v2/invoicing/accounting-sync/invoices/string/connections \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2/invoicing/accounting-sync/invoices/{id}/connections`

Lists connections to accounting platforms per invoice.

<h3 id="list-connection-status-for-an-invoice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The invoice id of the account.|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "connection_status": [
    {
      "connections": [
        {
          "platform_name": "string",
          "last_sync_time": "stringstringstringst",
          "last_sync_status": "IN_PROGRESS"
        }
      ]
    }
  ]
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

> 404 Response

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

<h3 id="list-connection-status-for-an-invoice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful request returns the HTTP `200 OK` status code and a JSON response body.|[invoice_connection_details](#schemainvoice_connection_details)|
|400|Bad Request|Invalid request.|[error_400](#schemaerror_400)|
|403|Forbidden|Authorization Error.|[error_403](#schemaerror_403)|
|404|Not Found|Resource Not Found.|[error_404](#schemaerror_404)|
|500|Internal Server Error|An internal server error has occurred.|[error_500](#schemaerror_500)|
|default|Default|The default response.|[error_default](#schemaerror_default)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://uri.paypal.com/services/invoicing/invoices/read https://uri.paypal.com/services/invoicing/invoices/readwrite https://uri.paypal.com/services/invoicing/internal )
</aside>

# Schemas

<h2 id="tocS_400">400</h2>
<!-- backwards compatibility -->
<a id="schema400"></a>
<a id="schema_400"></a>
<a id="tocS400"></a>
<a id="tocs400"></a>

```json
{
  "details": [
    {
      "issue": "INVALID_INTEGER_MAX_VALUE",
      "description": "Value exceeds max value."
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|[object]|false|none|none|

<h2 id="tocS_403">403</h2>
<!-- backwards compatibility -->
<a id="schema403"></a>
<a id="schema_403"></a>
<a id="tocS403"></a>
<a id="tocs403"></a>

```json
{
  "details": [
    {
      "issue": "PERMISSION_DENIED",
      "description": "The requested invoice is not associated with the requested user."
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|[object]|false|none|none|

<h2 id="tocS_422">422</h2>
<!-- backwards compatibility -->
<a id="schema422"></a>
<a id="schema_422"></a>
<a id="tocS422"></a>
<a id="tocs422"></a>

```json
{
  "details": [
    {
      "issue": "USER_NOT_FOUND",
      "description": "User is not associated with paypal based on invoicer email."
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|[object]|false|none|none|

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

<h2 id="tocS_address_portable_list">address_portable_list</h2>
<!-- backwards compatibility -->
<a id="schemaaddress_portable_list"></a>
<a id="schema_address_portable_list"></a>
<a id="tocSaddress_portable_list"></a>
<a id="tocsaddress_portable_list"></a>

```json
[
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
]
```

An array of addresses in the user's PayPal profile.

<h2 id="tocS_aggregated_discount">aggregated_discount</h2>
<!-- backwards compatibility -->
<a id="schemaaggregated_discount"></a>
<a id="schema_aggregated_discount"></a>
<a id="tocSaggregated_discount"></a>
<a id="tocsaggregated_discount"></a>

```json
{
  "invoice_discount": {
    "percent": "string",
    "amount": {
      "currency_code": "str",
      "value": "string"
    }
  },
  "item_discount": {
    "currency_code": "str",
    "value": "string"
  }
}
```

The discount. Can be an item- or invoice-level discount, or both. Can be applied as a percent or amount. If you provide both amount and percent, amount takes precedent.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|invoice_discount|[discount](#schemadiscount)|false|none|The discount as a percent or amount at invoice level. The invoice discount amount is subtracted from the item total.|
|item_discount|[money](#schemamoney)|false|none|The discount as a percent or amount at item level. The item discount amount is subtracted from each item amount.|

<h2 id="tocS_amount_range">amount_range</h2>
<!-- backwards compatibility -->
<a id="schemaamount_range"></a>
<a id="schema_amount_range"></a>
<a id="tocSamount_range"></a>
<a id="tocsamount_range"></a>

```json
{
  "lower_amount": {
    "currency_code": "str",
    "value": "string"
  },
  "upper_amount": {
    "currency_code": "str",
    "value": "string"
  }
}
```

The amount range.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lower_amount|[money](#schemamoney)|true|none|The lower limit of the amount range.|
|upper_amount|[money](#schemamoney)|true|none|The upper limit of the amount range.|

<h2 id="tocS_amount_summary_detail">amount_summary_detail</h2>
<!-- backwards compatibility -->
<a id="schemaamount_summary_detail"></a>
<a id="schema_amount_summary_detail"></a>
<a id="tocSamount_summary_detail"></a>
<a id="tocsamount_summary_detail"></a>

```json
{
  "currency_code": "str",
  "value": "string",
  "breakdown": {
    "item_total": {
      "currency_code": "str",
      "value": "string"
    },
    "discount": {
      "invoice_discount": {
        "percent": "string",
        "amount": {
          "currency_code": "str",
          "value": "string"
        }
      },
      "item_discount": {
        "currency_code": "str",
        "value": "string"
      }
    },
    "tax_total": {
      "currency_code": "str",
      "value": "string"
    },
    "shipping": {
      "amount": {
        "currency_code": "str",
        "value": "string"
      },
      "tax": {
        "name": "string",
        "percent": "string",
        "amount": {
          "currency_code": "str",
          "value": "string"
        },
        "tax_note": "string"
      }
    },
    "custom": {
      "label": "string",
      "amount": {
        "currency_code": "str",
        "value": "string"
      }
    }
  }
}
```

The invoice amount summary of item total, discount, tax total, and shipping.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currency_code|[currency_code](#schemacurrency_code)|false|none|The [three-character ISO-4217 currency code](/api/rest/reference/currency-codes/) that identifies the currency.|
|value|string|false|none|The value, which might be:<ul><li>An integer for currencies like `JPY` that are not typically fractional.</li><li>A decimal fraction for currencies like `TND` that are subdivided into thousandths.</li></ul>For the required number of decimal places for a currency code, see [Currency Codes](/docs/integration/direct/rest/currency-codes/).|
|breakdown|[amount_with_breakdown](#schemaamount_with_breakdown)|false|none|The breakdown of the amount. Breakdown provides details such as total item amount, total tax amount, custom amount, shipping and discounts, if any.|

<h2 id="tocS_amount_with_breakdown">amount_with_breakdown</h2>
<!-- backwards compatibility -->
<a id="schemaamount_with_breakdown"></a>
<a id="schema_amount_with_breakdown"></a>
<a id="tocSamount_with_breakdown"></a>
<a id="tocsamount_with_breakdown"></a>

```json
{
  "item_total": {
    "currency_code": "str",
    "value": "string"
  },
  "discount": {
    "invoice_discount": {
      "percent": "string",
      "amount": {
        "currency_code": "str",
        "value": "string"
      }
    },
    "item_discount": {
      "currency_code": "str",
      "value": "string"
    }
  },
  "tax_total": {
    "currency_code": "str",
    "value": "string"
  },
  "shipping": {
    "amount": {
      "currency_code": "str",
      "value": "string"
    },
    "tax": {
      "name": "string",
      "percent": "string",
      "amount": {
        "currency_code": "str",
        "value": "string"
      },
      "tax_note": "string"
    }
  },
  "custom": {
    "label": "string",
    "amount": {
      "currency_code": "str",
      "value": "string"
    }
  }
}
```

The breakdown of the amount. Includes total item amount, total tax amount, custom amount, and shipping and discounts, if any.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|item_total|[money](#schemamoney)|false|none|The subtotal for all items. Must equal the sum of (`items[].unit_amount` * `items[].quantity`) for all items.|
|discount|[aggregated_discount](#schemaaggregated_discount)|false|none|The discount can be at the item or invoice level, or both. Can be applied as a percent or amount. If you provide both amount and percent, amount takes precedent.|
|tax_total|[money](#schemamoney)|false|none|The aggregated amount of the item and shipping taxes.|
|shipping|[shipping_cost](#schemashipping_cost)|false|none|The shipping fee for all items. Includes tax on shipping.|
|custom|[custom_amount](#schemacustom_amount)|false|none|The custom amount to apply to an invoice. If you include a label, you must include the custom amount.|

<h2 id="tocS_billing_info">billing_info</h2>
<!-- backwards compatibility -->
<a id="schemabilling_info"></a>
<a id="schema_billing_info"></a>
<a id="tocSbilling_info"></a>
<a id="tocsbilling_info"></a>

```json
{
  "business_name": "string",
  "name": {
    "prefix": "string",
    "given_name": "string",
    "surname": "string",
    "middle_name": "string",
    "suffix": "string",
    "alternate_full_name": "string",
    "full_name": "string"
  },
  "address": {
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
  "email_address": "string",
  "phones": [
    {
      "country_code": "str",
      "national_number": "string",
      "extension_number": "string",
      "phone_type": "FAX"
    }
  ],
  "additional_info": "string",
  "language": "string"
}
```

The billing information of the invoice recipient. Includes name, address, email, phone, and language.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|business_name|string|false|none|Required. The business name of the party.|
|name|[name](#schemaname)|false|none|The first and Last name of the recipient.|
|address|[address_portable](#schemaaddress_portable)|false|none|The address of the recipient.|
|email_address|[restrictive_email_address](#schemarestrictive_email_address)|false|none|The invoice recipient email address. If you omit this value, the invoice is payable and a notification email is not sent.|
|phones|[definitions-phone_detail_list](#schemadefinitions-phone_detail_list)|false|none|The invoice recipient's phone numbers. Extension number is not supported.|
|additional_info|string|false|none|Any additional information about the recipient.|
|language|[language](#schemalanguage)|false|none|The language in which to show the invoice recipient's email message. Used only when the recipient does not have a PayPal account. If you omit the language and the recipient does not have a PayPal account, the email message is sent in the language of the merchant's PayPal account.|

<h2 id="tocS_business_name">business_name</h2>
<!-- backwards compatibility -->
<a id="schemabusiness_name"></a>
<a id="schema_business_name"></a>
<a id="tocSbusiness_name"></a>
<a id="tocsbusiness_name"></a>

```json
{
  "business_name": "string"
}
```

The business name of the party.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|business_name|string|false|none|Required. The business name of the party.|

<h2 id="tocS_configuration">configuration</h2>
<!-- backwards compatibility -->
<a id="schemaconfiguration"></a>
<a id="schema_configuration"></a>
<a id="tocSconfiguration"></a>
<a id="tocsconfiguration"></a>

```json
{
  "tax_calculated_after_discount": true,
  "tax_inclusive": false,
  "allow_tip": false,
  "partial_payment": {
    "allow_partial_payment": false,
    "minimum_amount_due": {
      "currency_code": "str",
      "value": "string"
    }
  },
  "has_conditional_rule": false,
  "template_id": "PayPal system template"
}
```

The invoice configuration details. Includes partial payment, tip, and tax calculated after discount.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tax_calculated_after_discount|boolean|false|none|Indicates whether the tax is calculated before or after a discount. If `false`, the tax is calculated before a discount. If `true`, the tax is calculated after a discount.|
|tax_inclusive|boolean|false|none|Indicates whether the unit price includes tax.|
|allow_tip|boolean|false|none|Indicates whether the invoice enables the customer to enter a tip amount during payment. If `true`, the invoice shows a tip amount field so that the customer can enter a tip amount. If `false`, the invoice does not show a tip amount field.<blockquote><strong>Note:</strong> This feature is not available for users in `Hong Kong`, `Taiwan`, `India`, or `Japan`.</blockquote>|
|partial_payment|[partial_payment](#schemapartial_payment)|false|none|The partial payment details. Includes the minimum amount that the invoicer wants the payer to pay.|
|has_conditional_rule|boolean|false|none|Indicates whether conditional pricing rules are applied to the invoice. If `true`, pricing rules (such as discounts or surcharges based on specific conditions) are applied. If `false`, no conditional pricing rules are applied.|
|template_id|string|false|none|The template ID. The template determines the layout of the invoice. Includes which fields to show and hide.<blockquote><strong>Note:</strong> This is an optional field. If you wish to customize the invoice layout using a specific template, provide a valid template ID here. You can either use an existing template ID or create a new template via the create template API and then use the newly created template's ID.</blockquote>|

<h2 id="tocS_connection">connection</h2>
<!-- backwards compatibility -->
<a id="schemaconnection"></a>
<a id="schema_connection"></a>
<a id="tocSconnection"></a>
<a id="tocsconnection"></a>

```json
{
  "platform_name": "string",
  "last_sync_time": "stringstringstringst",
  "last_sync_status": "IN_PROGRESS"
}
```

This lists last sync status and connection platform name.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|platform_name|string|false|none|The name of the platform. This property supports Unicode. The pattern is not provided because the value is defined by an external party.|
|last_sync_time|[date_time](#schemadate_time)|false|none|The date and time when the resource is last synced with the accounting platform. This property supports Unicode.|
|last_sync_status|string|false|none|The status of the last sync. This property supports Unicode.|

#### Enumerated Values

|Property|Value|
|---|---|
|last_sync_status|IN_PROGRESS|
|last_sync_status|SUCCESS|
|last_sync_status|FAILED|

<h2 id="tocS_connection_list">connection_list</h2>
<!-- backwards compatibility -->
<a id="schemaconnection_list"></a>
<a id="schema_connection_list"></a>
<a id="tocSconnection_list"></a>
<a id="tocsconnection_list"></a>

```json
[
  {
    "platform_name": "string",
    "last_sync_time": "stringstringstringst",
    "last_sync_status": "IN_PROGRESS"
  }
]
```

An array of connection-level details.

<h2 id="tocS_connections">connections</h2>
<!-- backwards compatibility -->
<a id="schemaconnections"></a>
<a id="schema_connections"></a>
<a id="tocSconnections"></a>
<a id="tocsconnections"></a>

```json
{
  "connections": [
    {
      "platform_name": "string",
      "last_sync_time": "stringstringstringst",
      "last_sync_status": "IN_PROGRESS"
    }
  ]
}
```

This object contains an array of connection details. It is used to load sync status for a user.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connections|[connection_list](#schemaconnection_list)|false|none|An array of connection-level details.|

<h2 id="tocS_connections_list">connections_list</h2>
<!-- backwards compatibility -->
<a id="schemaconnections_list"></a>
<a id="schema_connections_list"></a>
<a id="tocSconnections_list"></a>
<a id="tocsconnections_list"></a>

```json
[
  {
    "connections": [
      {
        "platform_name": "string",
        "last_sync_time": "stringstringstringst",
        "last_sync_status": "IN_PROGRESS"
      }
    ]
  }
]
```

An array of connection-level details.

<h2 id="tocS_contact_name_address">contact_name_address</h2>
<!-- backwards compatibility -->
<a id="schemacontact_name_address"></a>
<a id="schema_contact_name_address"></a>
<a id="tocScontact_name_address"></a>
<a id="tocscontact_name_address"></a>

```json
{
  "business_name": "string",
  "name": {
    "prefix": "string",
    "given_name": "string",
    "surname": "string",
    "middle_name": "string",
    "suffix": "string",
    "alternate_full_name": "string",
    "full_name": "string"
  },
  "address": {
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

The contact information of the user. Includes name and address.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|business_name|string|false|none|Required. The business name of the party.|
|name|[name](#schemaname)|false|none|The first and Last name of the recipient.|
|address|[address_portable](#schemaaddress_portable)|false|none|The address of the recipient.|

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

<h2 id="tocS_custom_amount">custom_amount</h2>
<!-- backwards compatibility -->
<a id="schemacustom_amount"></a>
<a id="schema_custom_amount"></a>
<a id="tocScustom_amount"></a>
<a id="tocscustom_amount"></a>

```json
{
  "label": "string",
  "amount": {
    "currency_code": "str",
    "value": "string"
  }
}
```

The custom amount to apply to an invoice. If you include a label, you must include a custom amount.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|label|string|true|none|The label to the custom amount of the invoice.|
|amount|[money](#schemamoney)|false|none|The custom amount value. Value is from `-1000000` to `1000000`. Supports up to two decimal places.|

<h2 id="tocS_date_no_time">date_no_time</h2>
<!-- backwards compatibility -->
<a id="schemadate_no_time"></a>
<a id="schema_date_no_time"></a>
<a id="tocSdate_no_time"></a>
<a id="tocsdate_no_time"></a>

```json
"stringstri"
```

The stand-alone date, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). To represent special legal values, such as a date of birth, you should use dates with no associated time or time-zone data. Whenever possible, use the standard `date_time` type. This regular expression does not validate all dates. For example, February 31 is valid and nothing is known about leap years.

<h2 id="tocS_date_range">date_range</h2>
<!-- backwards compatibility -->
<a id="schemadate_range"></a>
<a id="schema_date_range"></a>
<a id="tocSdate_range"></a>
<a id="tocsdate_range"></a>

```json
{
  "start": "stringstri",
  "end": "stringstri"
}
```

The date range. Filters invoices by creation date, invoice date, due date, and payment date.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|start|[date_no_time](#schemadate_no_time)|true|none|The start date of the range. Filters invoices by creation date, invoice date, due date, and payment date.|
|end|[date_no_time](#schemadate_no_time)|true|none|The end date of the range. Filters invoices by creation date, invoice date, due date, and payment date.|

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

<h2 id="tocS_date_time_range">date_time_range</h2>
<!-- backwards compatibility -->
<a id="schemadate_time_range"></a>
<a id="schema_date_time_range"></a>
<a id="tocSdate_time_range"></a>
<a id="tocsdate_time_range"></a>

```json
{
  "start": "stringstringstringst",
  "end": "stringstringstringst"
}
```

The date and time range. Filters invoices by creation date, invoice date, due date, and payment date.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|start|[date_time](#schemadate_time)|true|none|The start date of the range. Filters invoices by creation date, invoice date, due date, and payment date.|
|end|[date_time](#schemadate_time)|true|none|The end date of the range. Filters invoices by creation date, invoice date, due date, and payment date. <blockquote><strong>Note: The regular expression provides guidance but does not reject all invalid dates.</strong></blockquote><br/>Minimum length: 20.<br/>Maximum length: 64<br/>Pattern: <code>^[0-9]{4}-(0[1-9]\|1[0-2])-(0[1-9]\|[1-2][0-9]\|3[0-1])[T,t]([0-1][0-9]\|2[0-3]):[0-5][0-9]:([0-5][0-9]\|60)([.][0-9]+)?([Zz]\|[+-][0-9]{2}:[0-9]{2})$</code>|

<h2 id="tocS_definitions-item_list">definitions-item_list</h2>
<!-- backwards compatibility -->
<a id="schemadefinitions-item_list"></a>
<a id="schema_definitions-item_list"></a>
<a id="tocSdefinitions-item_list"></a>
<a id="tocsdefinitions-item_list"></a>

```json
[
  {
    "id": "string",
    "name": "string",
    "description": "string",
    "quantity": "string",
    "unit_amount": {
      "currency_code": "str",
      "value": "string"
    },
    "tax": {
      "name": "string",
      "percent": "string",
      "amount": {
        "currency_code": "str",
        "value": "string"
      },
      "tax_note": "string"
    },
    "item_date": "stringstri",
    "discount": {
      "percent": "string",
      "amount": {
        "currency_code": "str",
        "value": "string"
      }
    },
    "unit_of_measure": "QUANTITY"
  }
]
```

An array of invoice line-item information.

<h2 id="tocS_definitions-phone_detail_list">definitions-phone_detail_list</h2>
<!-- backwards compatibility -->
<a id="schemadefinitions-phone_detail_list"></a>
<a id="schema_definitions-phone_detail_list"></a>
<a id="tocSdefinitions-phone_detail_list"></a>
<a id="tocsdefinitions-phone_detail_list"></a>

```json
[
  {
    "country_code": "str",
    "national_number": "string",
    "extension_number": "string",
    "phone_type": "FAX"
  }
]
```

The invoice recipient's phone numbers. Extension number is not supported.

<h2 id="tocS_definitions-recipient_info_list">definitions-recipient_info_list</h2>
<!-- backwards compatibility -->
<a id="schemadefinitions-recipient_info_list"></a>
<a id="schema_definitions-recipient_info_list"></a>
<a id="tocSdefinitions-recipient_info_list"></a>
<a id="tocsdefinitions-recipient_info_list"></a>

```json
[
  {
    "billing_info": {
      "business_name": "string",
      "name": {
        "prefix": "string",
        "given_name": "string",
        "surname": "string",
        "middle_name": "string",
        "suffix": "string",
        "alternate_full_name": "string",
        "full_name": "string"
      },
      "address": {
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
      "email_address": "string",
      "phones": [
        {
          "country_code": "str",
          "national_number": "string",
          "extension_number": "string",
          "phone_type": "FAX"
        }
      ],
      "additional_info": "string",
      "language": "string"
    },
    "shipping_info": {
      "business_name": "string",
      "name": {
        "prefix": "string",
        "given_name": "string",
        "surname": "string",
        "middle_name": "string",
        "suffix": "string",
        "alternate_full_name": "string",
        "full_name": "string"
      },
      "address": {
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
  }
]
```

The billing and shipping information. Includes name, email, address, phone, and language.

<h2 id="tocS_detail">detail</h2>
<!-- backwards compatibility -->
<a id="schemadetail"></a>
<a id="schema_detail"></a>
<a id="tocSdetail"></a>
<a id="tocsdetail"></a>

```json
{
  "reference": "string",
  "currency_code": "str",
  "note": "string",
  "terms_and_conditions": "string",
  "memo": "string",
  "attachments": [
    {
      "id": "string",
      "reference_url": "http://example.com",
      "content_type": "string",
      "create_time": "stringstringstringst",
      "size": "string"
    }
  ]
}
```

The details of the invoice like notes, terms and conditions, memo, attachments.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reference|string|false|none|The reference data. Includes a Purchase Order (PO) number.|
|currency_code|[currency_code](#schemacurrency_code)|true|none|The [three-character ISO-4217 currency code](/docs/integration/direct/rest/currency-codes/) that identifies the currency.|
|note|string|false|none|A note to the invoice recipient. Also appears on the invoice notification email.|
|terms_and_conditions|string|false|none|The general terms of the invoice. Can include return or cancellation policy and other terms and conditions.|
|memo|string|false|none|A private bookkeeping memo for the user.|
|attachments|[file_reference_list](#schemafile_reference_list)|false|none|An array of PayPal IDs for the files that are attached to an invoice.|

<h2 id="tocS_discount">discount</h2>
<!-- backwards compatibility -->
<a id="schemadiscount"></a>
<a id="schema_discount"></a>
<a id="tocSdiscount"></a>
<a id="tocsdiscount"></a>

```json
{
  "percent": "string",
  "amount": {
    "currency_code": "str",
    "value": "string"
  }
}
```

The discount as a percent or amount at invoice level. The invoice discount amount is subtracted from the item total.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|percent|[percentage](#schemapercentage)|false|none|The discount as a percentage value. Value is from `0` to `100`. Supports up to five decimal places.|
|amount|[money](#schemamoney)|false|none|The invoice level discount amount. Value is from `0` to `1000000`. Supports up to two decimal places.|

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

<h2 id="tocS_email_address_list">email_address_list</h2>
<!-- backwards compatibility -->
<a id="schemaemail_address_list"></a>
<a id="schema_email_address_list"></a>
<a id="tocSemail_address_list"></a>
<a id="tocsemail_address_list"></a>

```json
[
  "string"
]
```

An array of one or more CC: emails to which notifications are sent. If you omit this parameter, a notification is sent to all CC: email addresses that are part of the invoice.<blockquote><strong>Note:</strong> Valid values are email addresses in the `additional_recipients` value associated with the invoice.</blockquote>

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

<h2 id="tocS_fetchtype">fetchtype</h2>
<!-- backwards compatibility -->
<a id="schemafetchtype"></a>
<a id="schema_fetchtype"></a>
<a id="tocSfetchtype"></a>
<a id="tocsfetchtype"></a>

```json
{
  "fetch_id": "false"
}
```

Is the fetch type invoice number or id.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fetch_id|boolean|false|none|Optional to decide the number or ID.|

<h2 id="tocS_fields">fields</h2>
<!-- backwards compatibility -->
<a id="schemafields"></a>
<a id="schema_fields"></a>
<a id="tocSfields"></a>
<a id="tocsfields"></a>

```json
"string"
```

The name of the field.

<h2 id="tocS_fields_list">fields_list</h2>
<!-- backwards compatibility -->
<a id="schemafields_list"></a>
<a id="schema_fields_list"></a>
<a id="tocSfields_list"></a>
<a id="tocsfields_list"></a>

```json
[
  "string"
]
```

A CSV file of fields to return for the user, if available. Because the invoice object can be very large, field filtering is required. Valid collection fields are <code>items</code>, <code>payments</code>, <code>refunds</code>, <code>additional_recipients_info</code>, and <code>attachments</code>.

<h2 id="tocS_file_reference">file_reference</h2>
<!-- backwards compatibility -->
<a id="schemafile_reference"></a>
<a id="schema_file_reference"></a>
<a id="tocSfile_reference"></a>
<a id="tocsfile_reference"></a>

```json
{
  "id": "string",
  "reference_url": "http://example.com",
  "content_type": "string",
  "create_time": "stringstringstringst",
  "size": "string"
}
```

The file reference. Can be a file in PayPal MediaServ, PayPal DMS, or other custom store.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The ID of the referenced file.|
|reference_url|string(uri)|false|none|The reference URL for the file.|
|content_type|string|false|none|The [Internet Assigned Numbers Authority (IANA) media type of the file](https://www.iana.org/assignments/media-types/media-types.xhtml).|
|create_time|[date_time](#schemadate_time)|false|none|The date and time when the file was created, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).|
|size|string|false|none|The size of the file, in bytes.|

<h2 id="tocS_file_reference_list">file_reference_list</h2>
<!-- backwards compatibility -->
<a id="schemafile_reference_list"></a>
<a id="schema_file_reference_list"></a>
<a id="tocSfile_reference_list"></a>
<a id="tocsfile_reference_list"></a>

```json
[
  {
    "id": "string",
    "reference_url": "http://example.com",
    "content_type": "string",
    "create_time": "stringstringstringst",
    "size": "string"
  }
]
```

An array of PayPal IDs for the files that are attached to an invoice.

<h2 id="tocS_invoice">invoice</h2>
<!-- backwards compatibility -->
<a id="schemainvoice"></a>
<a id="schema_invoice"></a>
<a id="tocSinvoice"></a>
<a id="tocsinvoice"></a>

```json
{
  "id": "string",
  "parent_id": "string",
  "status": "DRAFT",
  "detail": {
    "reference": "string",
    "currency_code": "str",
    "note": "string",
    "terms_and_conditions": "string",
    "memo": "string",
    "attachments": [
      {
        "id": "string",
        "reference_url": "http://example.com",
        "content_type": "string",
        "create_time": "stringstringstringst",
        "size": "string"
      }
    ],
    "invoice_number": "string",
    "invoice_date": "stringstri",
    "payment_term": {
      "term_type": "DUE_ON_RECEIPT",
      "due_date": "stringstri"
    },
    "metadata": {
      "create_time": "stringstringstringst",
      "created_by": "string",
      "last_update_time": "stringstringstringst",
      "last_updated_by": "string",
      "cancel_time": "stringstringstringst",
      "cancelled_by": "string",
      "first_sent_time": "stringstringstringst",
      "last_sent_time": "stringstringstringst",
      "last_sent_by": "string",
      "created_by_flow": "MULTIPLE_RECIPIENTS_GROUP",
      "recipient_view_url": "http://example.com",
      "invoicer_view_url": "http://example.com"
    }
  },
  "invoicer": {
    "business_name": "string",
    "name": {
      "prefix": "string",
      "given_name": "string",
      "surname": "string",
      "middle_name": "string",
      "suffix": "string",
      "alternate_full_name": "string",
      "full_name": "string"
    },
    "address": {
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
    "email_address": "string",
    "phones": [
      {
        "country_code": "str",
        "national_number": "string",
        "extension_number": "string",
        "phone_type": "FAX"
      }
    ],
    "website": "http://example.com",
    "tax_id": "string",
    "additional_notes": "string",
    "logo_url": "http://example.com"
  },
  "primary_recipients": [
    {
      "billing_info": {
        "business_name": "string",
        "name": {
          "prefix": "string",
          "given_name": "string",
          "surname": "string",
          "middle_name": "string",
          "suffix": "string",
          "alternate_full_name": "string",
          "full_name": "string"
        },
        "address": {
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
        "email_address": "string",
        "phones": [
          {
            "country_code": "str",
            "national_number": "string",
            "extension_number": "string",
            "phone_type": "FAX"
          }
        ],
        "additional_info": "string",
        "language": "string"
      },
      "shipping_info": {
        "business_name": "string",
        "name": {
          "prefix": "string",
          "given_name": "string",
          "surname": "string",
          "middle_name": "string",
          "suffix": "string",
          "alternate_full_name": "string",
          "full_name": "string"
        },
        "address": {
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
    }
  ],
  "additional_recipients": [
    "string"
  ],
  "items": [
    {
      "id": "string",
      "name": "string",
      "description": "string",
      "quantity": "string",
      "unit_amount": {
        "currency_code": "str",
        "value": "string"
      },
      "tax": {
        "name": "string",
        "percent": "string",
        "amount": {
          "currency_code": "str",
          "value": "string"
        },
        "tax_note": "string"
      },
      "item_date": "stringstri",
      "discount": {
        "percent": "string",
        "amount": {
          "currency_code": "str",
          "value": "string"
        }
      },
      "unit_of_measure": "QUANTITY"
    }
  ],
  "configuration": {
    "tax_calculated_after_discount": true,
    "tax_inclusive": false,
    "allow_tip": false,
    "partial_payment": {
      "allow_partial_payment": false,
      "minimum_amount_due": {
        "currency_code": "str",
        "value": "string"
      }
    },
    "has_conditional_rule": false,
    "template_id": "PayPal system template"
  },
  "amount": {
    "currency_code": "str",
    "value": "string",
    "breakdown": {
      "item_total": {
        "currency_code": "str",
        "value": "string"
      },
      "discount": {
        "invoice_discount": {
          "percent": "string",
          "amount": {
            "currency_code": "str",
            "value": "string"
          }
        },
        "item_discount": {
          "currency_code": "str",
          "value": "string"
        }
      },
      "tax_total": {
        "currency_code": "str",
        "value": "string"
      },
      "shipping": {
        "amount": {
          "currency_code": "str",
          "value": "string"
        },
        "tax": {
          "name": "string",
          "percent": "string",
          "amount": {
            "currency_code": "str",
            "value": "string"
          },
          "tax_note": "string"
        }
      },
      "custom": {
        "label": "string",
        "amount": {
          "currency_code": "str",
          "value": "string"
        }
      }
    }
  },
  "due_amount": {
    "currency_code": "str",
    "value": "string"
  },
  "gratuity": {
    "currency_code": "str",
    "value": "string"
  },
  "payments": {
    "paid_amount": {
      "currency_code": "str",
      "value": "string"
    },
    "transactions": [
      {
        "type": "PAYPAL",
        "payment_id": "string",
        "payment_date": "stringstri",
        "method": "BANK_TRANSFER",
        "note": "string",
        "amount": {
          "currency_code": "str",
          "value": "string"
        },
        "shipping_info": {
          "business_name": "string",
          "name": {
            "prefix": "string",
            "given_name": "string",
            "surname": "string",
            "middle_name": "string",
            "suffix": "string",
            "alternate_full_name": "string",
            "full_name": "string"
          },
          "address": {
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
      }
    ]
  },
  "refunds": {
    "refund_amount": {
      "currency_code": "str",
      "value": "string"
    },
    "transactions": [
      {
        "type": "PAYPAL",
        "refund_id": "string",
        "refund_date": "stringstri",
        "amount": {
          "currency_code": "str",
          "value": "string"
        },
        "method": "BANK_TRANSFER"
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

The invoice details which includes all information of the invoice like items, billing information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|read-only|The ID of the invoice.|
|parent_id|string|false|read-only|The parent ID to an invoice that defines the group invoice to which the invoice is related.|
|status|[invoice_status](#schemainvoice_status)|false|none|The status of the invoice.|
|detail|[invoice_detail](#schemainvoice_detail)|true|none|The details of the invoice. Includes the invoice number, date, payment terms, and audit metadata.|
|invoicer|[invoicer_info](#schemainvoicer_info)|false|none|The invoicer information. Includes the business name, email, address, phone, fax, tax ID, additional notes, and logo URL.|
|primary_recipients|[recipient_info_list](#schemarecipient_info_list)|false|none|The billing and shipping information. Includes name, email, address, phone and language.|
|additional_recipients|[email_address_list](#schemaemail_address_list)|false|none|An array of one or more CC: emails to which notifications are sent. If you omit this parameter, a notification is sent to all CC: email addresses that are part of the invoice.<blockquote><strong>Note:</strong> Valid values are email addresses in the `additional_recipients` value associated with the invoice.</blockquote>|
|items|[item_list](#schemaitem_list)|false|none|An array of invoice line item information.|
|configuration|[configuration](#schemaconfiguration)|false|none|The invoice configuration details. Includes partial payment, tip, and tax calculated after discount.|
|amount|[amount_summary_detail](#schemaamount_summary_detail)|false|none|The invoice amount summary of item total, discount, tax total and shipping..|
|due_amount|[money](#schemamoney)|false|none|The due amount, which is the balance amount outstanding after payments.|
|gratuity|[money](#schemamoney)|false|none|The amount paid by the payer as gratuity to the invoicer.|
|payments|[payments](#schemapayments)|false|none|List of payments registered against the invoice..|
|refunds|[refunds](#schemarefunds)|false|none|List of refunds against this invoice. The invoicing refund details includes refund type, date, amount, and method.|
|links|[link_description_list](#schemalink_description_list)|false|read-only|An array of request-related [HATEOAS links](/docs/api/reference/api-responses/#hateoas-links).|

#### Enumerated Values

|Property|Value|
|---|---|
|status|DRAFT|
|status|SENT|
|status|SCHEDULED|
|status|PAID|
|status|MARKED_AS_PAID|
|status|CANCELLED|
|status|REFUNDED|
|status|PARTIALLY_PAID|
|status|PARTIALLY_REFUNDED|
|status|MARKED_AS_REFUNDED|
|status|UNPAID|
|status|PAYMENT_PENDING|
|status|AUTO_CANCELLED|
|status|PAID_EXTERNAL|
|status|REFUNDED_EXTERNAL|
|status|SHARED|

<h2 id="tocS_invoice_connection_details">invoice_connection_details</h2>
<!-- backwards compatibility -->
<a id="schemainvoice_connection_details"></a>
<a id="schema_invoice_connection_details"></a>
<a id="tocSinvoice_connection_details"></a>
<a id="tocsinvoice_connection_details"></a>

```json
{
  "id": "string",
  "connection_status": [
    {
      "connections": [
        {
          "platform_name": "string",
          "last_sync_time": "stringstringstringst",
          "last_sync_status": "IN_PROGRESS"
        }
      ]
    }
  ]
}
```

Returns invoice connection status with timestamp per invoice.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The ID of the invoice. This property supports Unicode.|
|connection_status|[connections_list](#schemaconnections_list)|false|none|An array of connection-level details.|

<h2 id="tocS_invoice_creation_flow">invoice_creation_flow</h2>
<!-- backwards compatibility -->
<a id="schemainvoice_creation_flow"></a>
<a id="schema_invoice_creation_flow"></a>
<a id="tocSinvoice_creation_flow"></a>
<a id="tocsinvoice_creation_flow"></a>

```json
"MULTIPLE_RECIPIENTS_GROUP"
```

The frequency at which the invoice is sent:<ul><li>Multiple recipient. Sent to multiple recipients.</li><li>Batch. Sent in a batch.</li><li>Regular single. Sent one time to a single recipient.</li></ul>

<h2 id="tocS_invoice_detail">invoice_detail</h2>
<!-- backwards compatibility -->
<a id="schemainvoice_detail"></a>
<a id="schema_invoice_detail"></a>
<a id="tocSinvoice_detail"></a>
<a id="tocsinvoice_detail"></a>

```json
{
  "reference": "string",
  "currency_code": "str",
  "note": "string",
  "terms_and_conditions": "string",
  "memo": "string",
  "attachments": [
    {
      "id": "string",
      "reference_url": "http://example.com",
      "content_type": "string",
      "create_time": "stringstringstringst",
      "size": "string"
    }
  ],
  "invoice_number": "string",
  "invoice_date": "stringstri",
  "payment_term": {
    "term_type": "DUE_ON_RECEIPT",
    "due_date": "stringstri"
  },
  "metadata": {
    "create_time": "stringstringstringst",
    "created_by": "string",
    "last_update_time": "stringstringstringst",
    "last_updated_by": "string",
    "cancel_time": "stringstringstringst",
    "cancelled_by": "string",
    "first_sent_time": "stringstringstringst",
    "last_sent_time": "stringstringstringst",
    "last_sent_by": "string",
    "created_by_flow": "MULTIPLE_RECIPIENTS_GROUP",
    "recipient_view_url": "http://example.com",
    "invoicer_view_url": "http://example.com"
  }
}
```

The details of the invoice. Includes invoice number, date, payment terms, and audit metadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reference|string|false|none|The reference data. Includes a Purchase Order (PO) number.|
|currency_code|[currency_code](#schemacurrency_code)|true|none|The [three-character ISO-4217 currency code](/docs/integration/direct/rest/currency-codes/) that identifies the currency.|
|note|string|false|none|A note to the invoice recipient. Also appears on the invoice notification email.|
|terms_and_conditions|string|false|none|The general terms of the invoice. Can include return or cancellation policy and other terms and conditions.|
|memo|string|false|none|A private bookkeeping memo for the user.|
|attachments|[file_reference_list](#schemafile_reference_list)|false|none|An array of PayPal IDs for the files that are attached to an invoice.|
|invoice_number|string|false|none|The invoice number. Default is the number that is auto-incremented number from the last number.|
|invoice_date|[date_no_time](#schemadate_no_time)|false|none|The invoice date as specificed by the sender, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). Only UTC is supported in response. For example, *yyyy*-*MM*-*dd*T*z*.|
|payment_term|[invoice_payment_term](#schemainvoice_payment_term)|false|none|The payment due date for the invoice. Value is either but not both <code>term_type</code> or <code>due_date</code>.|
|metadata|[metadata](#schemametadata)|false|none|The audit metadata. Captures all invoicing actions on create, send, update, and cancel.|

<h2 id="tocS_invoice_list">invoice_list</h2>
<!-- backwards compatibility -->
<a id="schemainvoice_list"></a>
<a id="schema_invoice_list"></a>
<a id="tocSinvoice_list"></a>
<a id="tocsinvoice_list"></a>

```json
[
  {
    "id": "string",
    "parent_id": "string",
    "status": "DRAFT",
    "detail": {
      "reference": "string",
      "currency_code": "str",
      "note": "string",
      "terms_and_conditions": "string",
      "memo": "string",
      "attachments": [
        {
          "id": "string",
          "reference_url": "http://example.com",
          "content_type": "string",
          "create_time": "stringstringstringst",
          "size": "string"
        }
      ],
      "invoice_number": "string",
      "invoice_date": "stringstri",
      "payment_term": {
        "term_type": "DUE_ON_RECEIPT",
        "due_date": "stringstri"
      },
      "metadata": {
        "create_time": "stringstringstringst",
        "created_by": "string",
        "last_update_time": "stringstringstringst",
        "last_updated_by": "string",
        "cancel_time": "stringstringstringst",
        "cancelled_by": "string",
        "first_sent_time": "stringstringstringst",
        "last_sent_time": "stringstringstringst",
        "last_sent_by": "string",
        "created_by_flow": "MULTIPLE_RECIPIENTS_GROUP",
        "recipient_view_url": "http://example.com",
        "invoicer_view_url": "http://example.com"
      }
    },
    "invoicer": {
      "business_name": "string",
      "name": {
        "prefix": "string",
        "given_name": "string",
        "surname": "string",
        "middle_name": "string",
        "suffix": "string",
        "alternate_full_name": "string",
        "full_name": "string"
      },
      "address": {
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
      "email_address": "string",
      "phones": [
        {
          "country_code": "str",
          "national_number": "string",
          "extension_number": "string",
          "phone_type": "FAX"
        }
      ],
      "website": "http://example.com",
      "tax_id": "string",
      "additional_notes": "string",
      "logo_url": "http://example.com"
    },
    "primary_recipients": [
      {
        "billing_info": {
          "business_name": "string",
          "name": {
            "prefix": "string",
            "given_name": "string",
            "surname": "string",
            "middle_name": "string",
            "suffix": "string",
            "alternate_full_name": "string",
            "full_name": "string"
          },
          "address": {
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
          "email_address": "string",
          "phones": [
            {
              "country_code": "str",
              "national_number": "string",
              "extension_number": "string",
              "phone_type": "FAX"
            }
          ],
          "additional_info": "string",
          "language": "string"
        },
        "shipping_info": {
          "business_name": "string",
          "name": {
            "prefix": "string",
            "given_name": "string",
            "surname": "string",
            "middle_name": "string",
            "suffix": "string",
            "alternate_full_name": "string",
            "full_name": "string"
          },
          "address": {
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
      }
    ],
    "additional_recipients": [
      "string"
    ],
    "items": [
      {
        "id": "string",
        "name": "string",
        "description": "string",
        "quantity": "string",
        "unit_amount": {
          "currency_code": "str",
          "value": "string"
        },
        "tax": {
          "name": "string",
          "percent": "string",
          "amount": {
            "currency_code": "str",
            "value": "string"
          },
          "tax_note": "string"
        },
        "item_date": "stringstri",
        "discount": {
          "percent": "string",
          "amount": {
            "currency_code": "str",
            "value": "string"
          }
        },
        "unit_of_measure": "QUANTITY"
      }
    ],
    "configuration": {
      "tax_calculated_after_discount": true,
      "tax_inclusive": false,
      "allow_tip": false,
      "partial_payment": {
        "allow_partial_payment": false,
        "minimum_amount_due": {
          "currency_code": "str",
          "value": "string"
        }
      },
      "has_conditional_rule": false,
      "template_id": "PayPal system template"
    },
    "amount": {
      "currency_code": "str",
      "value": "string",
      "breakdown": {
        "item_total": {
          "currency_code": "str",
          "value": "string"
        },
        "discount": {
          "invoice_discount": {
            "percent": "string",
            "amount": {
              "currency_code": "str",
              "value": "string"
            }
          },
          "item_discount": {
            "currency_code": "str",
            "value": "string"
          }
        },
        "tax_total": {
          "currency_code": "str",
          "value": "string"
        },
        "shipping": {
          "amount": {
            "currency_code": "str",
            "value": "string"
          },
          "tax": {
            "name": "string",
            "percent": "string",
            "amount": {
              "currency_code": "str",
              "value": "string"
            },
            "tax_note": "string"
          }
        },
        "custom": {
          "label": "string",
          "amount": {
            "currency_code": "str",
            "value": "string"
          }
        }
      }
    },
    "due_amount": {
      "currency_code": "str",
      "value": "string"
    },
    "gratuity": {
      "currency_code": "str",
      "value": "string"
    },
    "payments": {
      "paid_amount": {
        "currency_code": "str",
        "value": "string"
      },
      "transactions": [
        {
          "type": "PAYPAL",
          "payment_id": "string",
          "payment_date": "stringstri",
          "method": "BANK_TRANSFER",
          "note": "string",
          "amount": {
            "currency_code": "str",
            "value": "string"
          },
          "shipping_info": {
            "business_name": "string",
            "name": {
              "prefix": "string",
              "given_name": "string",
              "surname": "string",
              "middle_name": "string",
              "suffix": "string",
              "alternate_full_name": "string",
              "full_name": "string"
            },
            "address": {
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
        }
      ]
    },
    "refunds": {
      "refund_amount": {
        "currency_code": "str",
        "value": "string"
      },
      "transactions": [
        {
          "type": "PAYPAL",
          "refund_id": "string",
          "refund_date": "stringstri",
          "amount": {
            "currency_code": "str",
            "value": "string"
          },
          "method": "BANK_TRANSFER"
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

The list of invoices that match the search criteria.

<h2 id="tocS_invoice_number">invoice_number</h2>
<!-- backwards compatibility -->
<a id="schemainvoice_number"></a>
<a id="schema_invoice_number"></a>
<a id="tocSinvoice_number"></a>
<a id="tocsinvoice_number"></a>

```json
{
  "invoice_number": "string",
  "invoice_id": "string"
}
```

The invoice number.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|invoice_number|string|false|read-only|The invoice number. If you omit this value, the default is the auto-incremented number from the last number.|
|invoice_id|string|false|read-only|Resource Id.|

<h2 id="tocS_invoice_payment_term">invoice_payment_term</h2>
<!-- backwards compatibility -->
<a id="schemainvoice_payment_term"></a>
<a id="schema_invoice_payment_term"></a>
<a id="tocSinvoice_payment_term"></a>
<a id="tocsinvoice_payment_term"></a>

```json
{
  "term_type": "DUE_ON_RECEIPT",
  "due_date": "stringstri"
}
```

The payment term of the invoice. Payment can be due upon receipt, a specified date, or in a set number of days.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|term_type|[payment_term_type](#schemapayment_term_type)|false|none|The payment term. Payment can be due upon receipt, a specified date, or in a set number of days.|
|due_date|[date_no_time](#schemadate_no_time)|false|none|The date when the invoice payment is due, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). For example, *yyyy*-*MM*-*dd*T*z*.|

#### Enumerated Values

|Property|Value|
|---|---|
|term_type|DUE_ON_RECEIPT|
|term_type|DUE_ON_DATE_SPECIFIED|
|term_type|NET_10|
|term_type|NET_15|
|term_type|NET_30|
|term_type|NET_45|
|term_type|NET_60|
|term_type|NET_90|
|term_type|NO_DUE_DATE|

<h2 id="tocS_invoice_status">invoice_status</h2>
<!-- backwards compatibility -->
<a id="schemainvoice_status"></a>
<a id="schema_invoice_status"></a>
<a id="tocSinvoice_status"></a>
<a id="tocsinvoice_status"></a>

```json
"DRAFT"
```

The status of the invoice.

<h2 id="tocS_invoice_status_list">invoice_status_list</h2>
<!-- backwards compatibility -->
<a id="schemainvoice_status_list"></a>
<a id="schema_invoice_status_list"></a>
<a id="tocSinvoice_status_list"></a>
<a id="tocsinvoice_status_list"></a>

```json
[
  "DRAFT"
]
```

An array of status values.

<h2 id="tocS_invoicer_info">invoicer_info</h2>
<!-- backwards compatibility -->
<a id="schemainvoicer_info"></a>
<a id="schema_invoicer_info"></a>
<a id="tocSinvoicer_info"></a>
<a id="tocsinvoicer_info"></a>

```json
{
  "business_name": "string",
  "name": {
    "prefix": "string",
    "given_name": "string",
    "surname": "string",
    "middle_name": "string",
    "suffix": "string",
    "alternate_full_name": "string",
    "full_name": "string"
  },
  "address": {
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
  "email_address": "string",
  "phones": [
    {
      "country_code": "str",
      "national_number": "string",
      "extension_number": "string",
      "phone_type": "FAX"
    }
  ],
  "website": "http://example.com",
  "tax_id": "string",
  "additional_notes": "string",
  "logo_url": "http://example.com"
}
```

The invoicer business information that appears on the invoice.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|business_name|string|false|none|Required. The business name of the party.|
|name|[name](#schemaname)|false|none|The first and Last name of the recipient.|
|address|[address_portable](#schemaaddress_portable)|false|none|The address of the recipient.|
|email_address|[restrictive_email_address](#schemarestrictive_email_address)|false|none|The invoicer email address, which must be listed in the user's PayPal profile. If you omit this value, notifications are sent from and to the primary email address but do not appear on the invoice.|
|phones|[phone_detail_list](#schemaphone_detail_list)|false|none|An array of invoicer's phone numbers. The invoicer can choose to hide the phone number on the invoice.|
|website|string(uri)|false|none|The invoicer's website.|
|tax_id|string|false|none|The invoicer's tax ID.|
|additional_notes|string|false|none|Any additional information. Includes business hours.|
|logo_url|string(uri)|false|none|The full URL to an external logo image. The logo image must not be larger than 250 pixels wide by 90 pixels high.|

<h2 id="tocS_invoices">invoices</h2>
<!-- backwards compatibility -->
<a id="schemainvoices"></a>
<a id="schema_invoices"></a>
<a id="tocSinvoices"></a>
<a id="tocsinvoices"></a>

```json
{
  "total_pages": 0,
  "total_items": 0,
  "items": [
    {
      "id": "string",
      "parent_id": "string",
      "status": "DRAFT",
      "detail": {
        "reference": "string",
        "currency_code": "str",
        "note": "string",
        "terms_and_conditions": "string",
        "memo": "string",
        "attachments": [
          {
            "id": "string",
            "reference_url": "http://example.com",
            "content_type": "string",
            "create_time": "stringstringstringst",
            "size": "string"
          }
        ],
        "invoice_number": "string",
        "invoice_date": "stringstri",
        "payment_term": {
          "term_type": "DUE_ON_RECEIPT",
          "due_date": "stringstri"
        },
        "metadata": {
          "create_time": "stringstringstringst",
          "created_by": "string",
          "last_update_time": "stringstringstringst",
          "last_updated_by": "string",
          "cancel_time": "stringstringstringst",
          "cancelled_by": "string",
          "first_sent_time": "stringstringstringst",
          "last_sent_time": "stringstringstringst",
          "last_sent_by": "string",
          "created_by_flow": "MULTIPLE_RECIPIENTS_GROUP",
          "recipient_view_url": "http://example.com",
          "invoicer_view_url": "http://example.com"
        }
      },
      "invoicer": {
        "business_name": "string",
        "name": {
          "prefix": "string",
          "given_name": "string",
          "surname": "string",
          "middle_name": "string",
          "suffix": "string",
          "alternate_full_name": "string",
          "full_name": "string"
        },
        "address": {
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
        "email_address": "string",
        "phones": [
          {
            "country_code": "str",
            "national_number": "string",
            "extension_number": "string",
            "phone_type": "FAX"
          }
        ],
        "website": "http://example.com",
        "tax_id": "string",
        "additional_notes": "string",
        "logo_url": "http://example.com"
      },
      "primary_recipients": [
        {
          "billing_info": {
            "business_name": "string",
            "name": {
              "prefix": "string",
              "given_name": "string",
              "surname": "string",
              "middle_name": "string",
              "suffix": "string",
              "alternate_full_name": "string",
              "full_name": "string"
            },
            "address": {
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
            "email_address": "string",
            "phones": [
              {
                "country_code": "str",
                "national_number": "string",
                "extension_number": "string",
                "phone_type": "FAX"
              }
            ],
            "additional_info": "string",
            "language": "string"
          },
          "shipping_info": {
            "business_name": "string",
            "name": {
              "prefix": "string",
              "given_name": "string",
              "surname": "string",
              "middle_name": "string",
              "suffix": "string",
              "alternate_full_name": "string",
              "full_name": "string"
            },
            "address": {
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
        }
      ],
      "additional_recipients": [
        "string"
      ],
      "items": [
        {
          "id": "string",
          "name": "string",
          "description": "string",
          "quantity": "string",
          "unit_amount": {
            "currency_code": "str",
            "value": "string"
          },
          "tax": {
            "name": "string",
            "percent": "string",
            "amount": {
              "currency_code": "str",
              "value": "string"
            },
            "tax_note": "string"
          },
          "item_date": "stringstri",
          "discount": {
            "percent": "string",
            "amount": {
              "currency_code": "str",
              "value": "string"
            }
          },
          "unit_of_measure": "QUANTITY"
        }
      ],
      "configuration": {
        "tax_calculated_after_discount": true,
        "tax_inclusive": false,
        "allow_tip": false,
        "partial_payment": {
          "allow_partial_payment": false,
          "minimum_amount_due": {
            "currency_code": "str",
            "value": "string"
          }
        },
        "has_conditional_rule": false,
        "template_id": "PayPal system template"
      },
      "amount": {
        "currency_code": "str",
        "value": "string",
        "breakdown": {
          "item_total": {
            "currency_code": "str",
            "value": "string"
          },
          "discount": {
            "invoice_discount": {
              "percent": "string",
              "amount": {
                "currency_code": "str",
                "value": "string"
              }
            },
            "item_discount": {
              "currency_code": "str",
              "value": "string"
            }
          },
          "tax_total": {
            "currency_code": "str",
            "value": "string"
          },
          "shipping": {
            "amount": {
              "currency_code": "str",
              "value": "string"
            },
            "tax": {
              "name": "string",
              "percent": "string",
              "amount": {
                "currency_code": "str",
                "value": "string"
              },
              "tax_note": "string"
            }
          },
          "custom": {
            "label": "string",
            "amount": {
              "currency_code": "str",
              "value": "string"
            }
          }
        }
      },
      "due_amount": {
        "currency_code": "str",
        "value": "string"
      },
      "gratuity": {
        "currency_code": "str",
        "value": "string"
      },
      "payments": {
        "paid_amount": {
          "currency_code": "str",
          "value": "string"
        },
        "transactions": [
          {
            "type": "PAYPAL",
            "payment_id": "string",
            "payment_date": "stringstri",
            "method": "BANK_TRANSFER",
            "note": "string",
            "amount": {
              "currency_code": "str",
              "value": "string"
            },
            "shipping_info": {
              "business_name": "string",
              "name": {
                "prefix": "string",
                "given_name": "string",
                "surname": "string",
                "middle_name": "string",
                "suffix": "string",
                "alternate_full_name": "string",
                "full_name": "string"
              },
              "address": {
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
          }
        ]
      },
      "refunds": {
        "refund_amount": {
          "currency_code": "str",
          "value": "string"
        },
        "transactions": [
          {
            "type": "PAYPAL",
            "refund_id": "string",
            "refund_date": "stringstri",
            "amount": {
              "currency_code": "str",
              "value": "string"
            },
            "method": "BANK_TRANSFER"
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

An array of merchant invoices. Includes the total invoices count and [HATEOAS links](/docs/api/reference/api-responses/#hateoas-links) for navigation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total_pages|integer|false|read-only|The total number of pages that are available for the search criteria. <blockquote><strong>Note:</strong> Clients MUST NOT assume that the value of total_pages is constant. The value MAY change from one request to the next</blockquote>|
|total_items|integer|false|read-only|The total number of invoices that match the search criteria.<blockquote><strong>Note:</strong> Clients MUST NOT assume that the value of <code>total_items</code> is constant. The value MAY change from one request to the next.</blockquote>|
|items|[invoice_list](#schemainvoice_list)|false|read-only|The list of invoices that match the search criteria.|
|links|[link_description_list](#schemalink_description_list)|false|read-only|An array of request-related [HATEOAS links](/docs/api/reference/api-responses/#hateoas-links).|

<h2 id="tocS_invoices.cancel-400">invoices.cancel-400</h2>
<!-- backwards compatibility -->
<a id="schemainvoices.cancel-400"></a>
<a id="schema_invoices.cancel-400"></a>
<a id="tocSinvoices.cancel-400"></a>
<a id="tocsinvoices.cancel-400"></a>

```json
{
  "details": [
    {
      "issue": "INVALID_STRING_MAX_LENGTH",
      "description": "Field value exceeded the maximum allowed number of characters."
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|[object]|false|none|none|

<h2 id="tocS_invoices.cancel-422">invoices.cancel-422</h2>
<!-- backwards compatibility -->
<a id="schemainvoices.cancel-422"></a>
<a id="schema_invoices.cancel-422"></a>
<a id="tocSinvoices.cancel-422"></a>
<a id="tocsinvoices.cancel-422"></a>

```json
{
  "details": [
    {
      "issue": "CANNOT_CANCEL_DRAFT_INVOICE",
      "description": "Draft invoice cannot be canceled."
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|[object]|false|none|none|

<h2 id="tocS_invoices.create-400">invoices.create-400</h2>
<!-- backwards compatibility -->
<a id="schemainvoices.create-400"></a>
<a id="schema_invoices.create-400"></a>
<a id="tocSinvoices.create-400"></a>
<a id="tocsinvoices.create-400"></a>

```json
{
  "details": [
    {
      "issue": "INVALID_STRING_MAX_LENGTH",
      "description": "Address line2 length should be less than 300 characters."
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|[object]|false|none|none|

<h2 id="tocS_invoices.generate-qr-code-400">invoices.generate-qr-code-400</h2>
<!-- backwards compatibility -->
<a id="schemainvoices.generate-qr-code-400"></a>
<a id="schema_invoices.generate-qr-code-400"></a>
<a id="tocSinvoices.generate-qr-code-400"></a>
<a id="tocsinvoices.generate-qr-code-400"></a>

```json
{
  "details": [
    {
      "issue": "INVALID_INTEGER_MAX_VALUE",
      "description": "Value exceeds max value."
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|[object]|false|none|none|

<h2 id="tocS_invoices.payments-400">invoices.payments-400</h2>
<!-- backwards compatibility -->
<a id="schemainvoices.payments-400"></a>
<a id="schema_invoices.payments-400"></a>
<a id="tocSinvoices.payments-400"></a>
<a id="tocsinvoices.payments-400"></a>

```json
{
  "details": [
    {
      "issue": "MISSING_REQUIRED_PARAMETER",
      "description": "Payment method is missing. Please provide a valid payment method."
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|[object]|false|none|none|

<h2 id="tocS_invoices.payments-422">invoices.payments-422</h2>
<!-- backwards compatibility -->
<a id="schemainvoices.payments-422"></a>
<a id="schema_invoices.payments-422"></a>
<a id="tocSinvoices.payments-422"></a>
<a id="tocsinvoices.payments-422"></a>

```json
{
  "details": [
    {
      "issue": "PAYMENT_AMOUNT_GREATER_THAN_AMOUNT_DUE",
      "description": "Payment amount is greater than the amount due."
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|[object]|false|none|none|

<h2 id="tocS_invoices.payments-delete-422">invoices.payments-delete-422</h2>
<!-- backwards compatibility -->
<a id="schemainvoices.payments-delete-422"></a>
<a id="schema_invoices.payments-delete-422"></a>
<a id="tocSinvoices.payments-delete-422"></a>
<a id="tocsinvoices.payments-delete-422"></a>

```json
{
  "details": [
    {
      "issue": "CANNOT_DELETE_EXTERNAL_PAYMENT",
      "description": "The external payment cannot be deleted as the recorded refund cannot exceed the recored payment for an invoice."
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|[object]|false|none|none|

<h2 id="tocS_invoices.refunds-400">invoices.refunds-400</h2>
<!-- backwards compatibility -->
<a id="schemainvoices.refunds-400"></a>
<a id="schema_invoices.refunds-400"></a>
<a id="tocSinvoices.refunds-400"></a>
<a id="tocsinvoices.refunds-400"></a>

```json
{
  "details": [
    {
      "issue": "MISSING_REQUIRED_PARAMETER",
      "description": "Payment method is missing. Please provide a valid payment method."
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|[object]|false|none|none|

<h2 id="tocS_invoices.refunds-422">invoices.refunds-422</h2>
<!-- backwards compatibility -->
<a id="schemainvoices.refunds-422"></a>
<a id="schema_invoices.refunds-422"></a>
<a id="tocSinvoices.refunds-422"></a>
<a id="tocsinvoices.refunds-422"></a>

```json
{
  "details": [
    {
      "issue": "INVALID_REFUND_AMOUNT",
      "description": "Recorded refunds cannot exceed recorded payments."
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|[object]|false|none|none|

<h2 id="tocS_invoices.remind-400">invoices.remind-400</h2>
<!-- backwards compatibility -->
<a id="schemainvoices.remind-400"></a>
<a id="schema_invoices.remind-400"></a>
<a id="tocSinvoices.remind-400"></a>
<a id="tocsinvoices.remind-400"></a>

```json
{
  "details": [
    {
      "issue": "INVALID_STRING_MAX_LENGTH",
      "description": "the value of a field is too long."
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|[object]|false|none|none|

<h2 id="tocS_invoices.remind-422">invoices.remind-422</h2>
<!-- backwards compatibility -->
<a id="schemainvoices.remind-422"></a>
<a id="schema_invoices.remind-422"></a>
<a id="tocSinvoices.remind-422"></a>
<a id="tocsinvoices.remind-422"></a>

```json
{
  "details": [
    {
      "issue": "CANNOT_REMIND_INVOICE",
      "description": "You cannot remind an invoice which is in DRAFT status. Only UNPAID, SENT and PARTIALLY_PAID invoices can be reminded."
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|[object]|false|none|none|

<h2 id="tocS_invoices.search-invoices-400">invoices.search-invoices-400</h2>
<!-- backwards compatibility -->
<a id="schemainvoices.search-invoices-400"></a>
<a id="schema_invoices.search-invoices-400"></a>
<a id="tocSinvoices.search-invoices-400"></a>
<a id="tocsinvoices.search-invoices-400"></a>

```json
{
  "details": [
    {
      "issue": "INVALID_INTEGER_MAX_VALUE",
      "description": "Value exceeds max value."
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|[object]|false|none|none|

<h2 id="tocS_invoices.update-400">invoices.update-400</h2>
<!-- backwards compatibility -->
<a id="schemainvoices.update-400"></a>
<a id="schema_invoices.update-400"></a>
<a id="tocSinvoices.update-400"></a>
<a id="tocsinvoices.update-400"></a>

```json
{
  "details": [
    {
      "issue": "INVALID_STRING_MAX_LENGTH",
      "description": "Address line2 length should be less than 300 characters."
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|[object]|false|none|none|

<h2 id="tocS_invoices.update-422">invoices.update-422</h2>
<!-- backwards compatibility -->
<a id="schemainvoices.update-422"></a>
<a id="schema_invoices.update-422"></a>
<a id="tocSinvoices.update-422"></a>
<a id="tocsinvoices.update-422"></a>

```json
{
  "details": [
    {
      "issue": "USER_NOT_FOUND",
      "description": "User is not associated with paypal based on invoicer email."
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|[object]|false|none|none|

<h2 id="tocS_item">item</h2>
<!-- backwards compatibility -->
<a id="schemaitem"></a>
<a id="schema_item"></a>
<a id="tocSitem"></a>
<a id="tocsitem"></a>

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "quantity": "string",
  "unit_amount": {
    "currency_code": "str",
    "value": "string"
  },
  "tax": {
    "name": "string",
    "percent": "string",
    "amount": {
      "currency_code": "str",
      "value": "string"
    },
    "tax_note": "string"
  },
  "item_date": "stringstri",
  "discount": {
    "percent": "string",
    "amount": {
      "currency_code": "str",
      "value": "string"
    }
  },
  "unit_of_measure": "QUANTITY"
}
```

An array of invoice line item information. The maximum items for an invoice is `100`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|read-only|The ID of the invoice line item.|
|name|string|true|none|The item name for the invoice line item.|
|description|string|false|none|The item description for the invoice line item.|
|quantity|string|true|none|The quantity of the item that the invoicer provides to the payer. Value is from `-1000000` to `1000000`. Supports up to five decimal places.|
|unit_amount|[money](#schemamoney)|true|none|The unit price of the item. This does not include tax and discount. Value is from `-1000000` to `1000000`. Supports up to two decimal places.|
|tax|[tax](#schematax)|false|none|The tax associated with the item. The tax amount is added to the item total. Value is from `0` to `100`. Supports up to five decimal places.|
|item_date|[date_no_time](#schemadate_no_time)|false|none|The date when the item or service was provided, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). For example, *yyyy*-*MM*-*dd*T*z*.|
|discount|[discount](#schemadiscount)|false|none|Discount as a percent or amount at invoice level. The invoice discount amount is subtracted from the item total.|
|unit_of_measure|[unit_of_measure](#schemaunit_of_measure)|false|none|The unit of measure for the invoiced item. For `AMOUNT` the `unit_amount` and `quantity` are not shown on the invoice.<blockquote><strong>Note:</strong> If your specify different `unit_of_measure` values for the same invoice, the invoice uses the first value.</blockquote>|

#### Enumerated Values

|Property|Value|
|---|---|
|unit_of_measure|QUANTITY|
|unit_of_measure|HOURS|
|unit_of_measure|AMOUNT|

<h2 id="tocS_item_list">item_list</h2>
<!-- backwards compatibility -->
<a id="schemaitem_list"></a>
<a id="schema_item_list"></a>
<a id="tocSitem_list"></a>
<a id="tocsitem_list"></a>

```json
[
  {
    "id": "string",
    "name": "string",
    "description": "string",
    "quantity": "string",
    "unit_amount": {
      "currency_code": "str",
      "value": "string"
    },
    "tax": {
      "name": "string",
      "percent": "string",
      "amount": {
        "currency_code": "str",
        "value": "string"
      },
      "tax_note": "string"
    },
    "item_date": "stringstri",
    "discount": {
      "percent": "string",
      "amount": {
        "currency_code": "str",
        "value": "string"
      }
    },
    "unit_of_measure": "QUANTITY"
  }
]
```

An array of invoice line item information.

<h2 id="tocS_language">language</h2>
<!-- backwards compatibility -->
<a id="schemalanguage"></a>
<a id="schema_language"></a>
<a id="tocSlanguage"></a>
<a id="tocslanguage"></a>

```json
"string"
```

The [language tag](https://tools.ietf.org/html/bcp47#section-2) for the language in which to localize the error-related strings, such as messages, issues, and suggested actions. The tag is made up of the [ISO 639-2 language code](https://www.loc.gov/standards/iso639-2/php/code_list.php), the optional [ISO-15924 script tag](https://www.unicode.org/iso15924/codelists.html), and the [ISO-3166 alpha-2 country code](/api/rest/reference/country-codes/) or [M49 region code](https://unstats.un.org/unsd/methodology/m49/).

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

An array of request-related [HATEOAS links](/docs/api/reference/api-responses/#hateoas-links).

<h2 id="tocS_metadata">metadata</h2>
<!-- backwards compatibility -->
<a id="schemametadata"></a>
<a id="schema_metadata"></a>
<a id="tocSmetadata"></a>
<a id="tocsmetadata"></a>

```json
{
  "create_time": "stringstringstringst",
  "created_by": "string",
  "last_update_time": "stringstringstringst",
  "last_updated_by": "string",
  "cancel_time": "stringstringstringst",
  "cancelled_by": "string",
  "first_sent_time": "stringstringstringst",
  "last_sent_time": "stringstringstringst",
  "last_sent_by": "string",
  "created_by_flow": "MULTIPLE_RECIPIENTS_GROUP",
  "recipient_view_url": "http://example.com",
  "invoicer_view_url": "http://example.com"
}
```

The audit metadata. Captures all invoicing actions on create, send, update, and cancel.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|create_time|[date_time](#schemadate_time)|false|none|The date and time when the resource was created, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).|
|created_by|string|false|read-only|The email address of the account that created the resource.|
|last_update_time|[date_time](#schemadate_time)|false|none|The date and time when the resource was last edited, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).|
|last_updated_by|string|false|read-only|The email address of the account that last edited the resource.|
|cancel_time|[date_time](#schemadate_time)|false|none|The date and time when the resource was canceled, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).|
|cancelled_by|string|false|read-only|The actor who canceled the resource.|
|first_sent_time|[date_time](#schemadate_time)|false|none|The date and time when the resource was first sent, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).|
|last_sent_time|[date_time](#schemadate_time)|false|none|The date and time when the resource was last sent, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).|
|last_sent_by|string|false|read-only|The email address of the account that last sent the resource.|
|created_by_flow|[invoice_creation_flow](#schemainvoice_creation_flow)|false|none|The flow variation that created this invoice.|
|recipient_view_url|string(uri)|false|read-only|The URL for the invoice payer view hosted on paypal.com.|
|invoicer_view_url|string(uri)|false|read-only|The URL for the invoice merchant view hosted on paypal.com.|

#### Enumerated Values

|Property|Value|
|---|---|
|created_by_flow|MULTIPLE_RECIPIENTS_GROUP|
|created_by_flow|BATCH|
|created_by_flow|REGULAR_SINGLE|

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

<h2 id="tocS_notification">notification</h2>
<!-- backwards compatibility -->
<a id="schemanotification"></a>
<a id="schema_notification"></a>
<a id="tocSnotification"></a>
<a id="tocsnotification"></a>

```json
{
  "subject": "string",
  "note": "string",
  "send_to_invoicer": false,
  "send_to_recipient": true,
  "additional_recipients": [
    "string"
  ]
}
```

The email or SMS notification to send to the invoicer or payer on sending an invoice.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|subject|string|false|none|The subject of the email that is sent as a notification to the recipient.<blockquote><strong>Note:</strong> User-provided values for this field will not be honored and the subject will always be defaulted to a system-defined value.</blockquote>|
|note|string|false|none|A note to the payer.<blockquote><strong>Note:</strong> User-provided values for this field will not be honored and the note will always be defaulted to a system-defined value.</blockquote>|
|send_to_invoicer|boolean|false|none|Indicates whether to send a copy of the email to the merchant.|
|send_to_recipient|boolean|false|none|Indicates whether to send a copy of the email to the recipient.|
|additional_recipients|[email_address_list](#schemaemail_address_list)|false|none|An array of one or more CC: emails to which notifications are sent. If you omit this parameter, a notification is sent to all CC: email addresses that are part of the invoice.<blockquote><strong>Note:</strong> Valid values are email addresses in the `additional_recipients` value associated with the invoice.</blockquote>|

<h2 id="tocS_partial_payment">partial_payment</h2>
<!-- backwards compatibility -->
<a id="schemapartial_payment"></a>
<a id="schema_partial_payment"></a>
<a id="tocSpartial_payment"></a>
<a id="tocspartial_payment"></a>

```json
{
  "allow_partial_payment": false,
  "minimum_amount_due": {
    "currency_code": "str",
    "value": "string"
  }
}
```

The partial payment details. Includes the minimum amount that the invoicer expects from the payer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allow_partial_payment|boolean|false|none|Indicates whether the invoice allows a partial payment. If `false`, the invoice must be paid in full. If `true`, the invoice allows partial payments.<blockquote><strong>Note:</strong> This feature is not available for users in `India`, `Brazil`, or `Israel`.</blockquote>|
|minimum_amount_due|[money](#schemamoney)|false|none|The minimum amount allowed for a partial payment. Valid only when `allow_partial_payment` is `true`.|

<h2 id="tocS_payment_detail">payment_detail</h2>
<!-- backwards compatibility -->
<a id="schemapayment_detail"></a>
<a id="schema_payment_detail"></a>
<a id="tocSpayment_detail"></a>
<a id="tocspayment_detail"></a>

```json
{
  "type": "PAYPAL",
  "payment_id": "string",
  "payment_date": "stringstri",
  "method": "BANK_TRANSFER",
  "note": "string",
  "amount": {
    "currency_code": "str",
    "value": "string"
  },
  "shipping_info": {
    "business_name": "string",
    "name": {
      "prefix": "string",
      "given_name": "string",
      "surname": "string",
      "middle_name": "string",
      "suffix": "string",
      "alternate_full_name": "string",
      "full_name": "string"
    },
    "address": {
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
}
```

The payment details of the invoice. Includes payment type, method, date, discount, and transaction type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|[payment_type](#schemapayment_type)|false|none|The payment type in an invoicing flow which can be PayPal or an external cash or check payment.|
|payment_id|string|false|none|The ID for a PayPal payment transaction. Required for the `PAYPAL` payment type.|
|payment_date|[date_no_time](#schemadate_no_time)|false|none|The date when the invoice was paid, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). For example, *yyyy*-*MM*-*dd* *z*.|
|method|[payment_method](#schemapayment_method)|true|none|The payment mode or method through which the invoicer can accept the payment.|
|note|string|false|none|A note associated with an external cash or check payment.|
|amount|[money](#schemamoney)|false|none|The payment amount to record against the invoice. If you omit this parameter, the total invoice amount is marked as paid. This amount cannot exceed the amount due.|
|shipping_info|[contact_name_address](#schemacontact_name_address)|false|none|The recipient's shipping information. Includes the user's contact information, which includes name and address.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|PAYPAL|
|type|EXTERNAL|
|method|BANK_TRANSFER|
|method|CASH|
|method|CHECK|
|method|CREDIT_CARD|
|method|DEBIT_CARD|
|method|PAYPAL|
|method|WIRE_TRANSFER|
|method|OTHER|

<h2 id="tocS_payment_detail_list">payment_detail_list</h2>
<!-- backwards compatibility -->
<a id="schemapayment_detail_list"></a>
<a id="schema_payment_detail_list"></a>
<a id="tocSpayment_detail_list"></a>
<a id="tocspayment_detail_list"></a>

```json
[
  {
    "type": "PAYPAL",
    "payment_id": "string",
    "payment_date": "stringstri",
    "method": "BANK_TRANSFER",
    "note": "string",
    "amount": {
      "currency_code": "str",
      "value": "string"
    },
    "shipping_info": {
      "business_name": "string",
      "name": {
        "prefix": "string",
        "given_name": "string",
        "surname": "string",
        "middle_name": "string",
        "suffix": "string",
        "alternate_full_name": "string",
        "full_name": "string"
      },
      "address": {
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
  }
]
```

An array of payment details for the invoice. The payment details of the invoice like payment type, method, date, discount and transaction type.

<h2 id="tocS_payment_method">payment_method</h2>
<!-- backwards compatibility -->
<a id="schemapayment_method"></a>
<a id="schema_payment_method"></a>
<a id="tocSpayment_method"></a>
<a id="tocspayment_method"></a>

```json
"BANK_TRANSFER"
```

The payment mode or method through which the invoicer can accept the payments.

<h2 id="tocS_payment_reference">payment_reference</h2>
<!-- backwards compatibility -->
<a id="schemapayment_reference"></a>
<a id="schema_payment_reference"></a>
<a id="tocSpayment_reference"></a>
<a id="tocspayment_reference"></a>

```json
{
  "payment_id": "string"
}
```

The reference to the payment detail.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|payment_id|string|false|read-only|The ID for the invoice payment.|

<h2 id="tocS_payment_term">payment_term</h2>
<!-- backwards compatibility -->
<a id="schemapayment_term"></a>
<a id="schema_payment_term"></a>
<a id="tocSpayment_term"></a>
<a id="tocspayment_term"></a>

```json
{
  "term_type": "DUE_ON_RECEIPT"
}
```

The payment term of the invoice. Payment can be due upon receipt, a specified date, or in a set number of days.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|term_type|[payment_term_type](#schemapayment_term_type)|false|none|The payment term. Payment can be due upon receipt, a specified date, or in a set number of days.|

#### Enumerated Values

|Property|Value|
|---|---|
|term_type|DUE_ON_RECEIPT|
|term_type|DUE_ON_DATE_SPECIFIED|
|term_type|NET_10|
|term_type|NET_15|
|term_type|NET_30|
|term_type|NET_45|
|term_type|NET_60|
|term_type|NET_90|
|term_type|NO_DUE_DATE|

<h2 id="tocS_payment_term_type">payment_term_type</h2>
<!-- backwards compatibility -->
<a id="schemapayment_term_type"></a>
<a id="schema_payment_term_type"></a>
<a id="tocSpayment_term_type"></a>
<a id="tocspayment_term_type"></a>

```json
"DUE_ON_RECEIPT"
```

The payment term. Payment can be due upon receipt, a specified date, or in a set number of days.

<h2 id="tocS_payment_type">payment_type</h2>
<!-- backwards compatibility -->
<a id="schemapayment_type"></a>
<a id="schema_payment_type"></a>
<a id="tocSpayment_type"></a>
<a id="tocspayment_type"></a>

```json
"PAYPAL"
```

The payment type. Can be PayPal or an external payment. Includes cash or a check.

<h2 id="tocS_payments">payments</h2>
<!-- backwards compatibility -->
<a id="schemapayments"></a>
<a id="schema_payments"></a>
<a id="tocSpayments"></a>
<a id="tocspayments"></a>

```json
{
  "paid_amount": {
    "currency_code": "str",
    "value": "string"
  },
  "transactions": [
    {
      "type": "PAYPAL",
      "payment_id": "string",
      "payment_date": "stringstri",
      "method": "BANK_TRANSFER",
      "note": "string",
      "amount": {
        "currency_code": "str",
        "value": "string"
      },
      "shipping_info": {
        "business_name": "string",
        "name": {
          "prefix": "string",
          "given_name": "string",
          "surname": "string",
          "middle_name": "string",
          "suffix": "string",
          "alternate_full_name": "string",
          "full_name": "string"
        },
        "address": {
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
    }
  ]
}
```

An array of payments registered against the invoice.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|paid_amount|[money](#schemamoney)|false|none|The aggregated payment amounts against this invoice.|
|transactions|[payment_detail_list](#schemapayment_detail_list)|false|read-only|An array of payment details for the invoice. The payment details of the invoice like payment type, method, date, discount and transaction type.|

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

<h2 id="tocS_phone_detail">phone_detail</h2>
<!-- backwards compatibility -->
<a id="schemaphone_detail"></a>
<a id="schema_phone_detail"></a>
<a id="tocSphone_detail"></a>
<a id="tocsphone_detail"></a>

```json
{
  "country_code": "str",
  "national_number": "string",
  "extension_number": "string",
  "phone_type": "FAX"
}
```

The phone details. Includes the phone number and type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|country_code|string|true|none|The country calling code (CC), in its canonical international [E.164 numbering plan format](https://www.itu.int/rec/T-REC-E.164/en). The combined length of the CC and the national number must not be greater than 15 digits. The national number consists of a national destination code (NDC) and subscriber number (SN).|
|national_number|string|true|none|The national number, in its canonical international [E.164 numbering plan format](https://www.itu.int/rec/T-REC-E.164/en). The combined length of the country calling code (CC) and the national number must not be greater than 15 digits. The national number consists of a national destination code (NDC) and subscriber number (SN).|
|extension_number|string|false|none|The extension number.|
|phone_type|[phone_type](#schemaphone_type)|true|none|The phone type.|

#### Enumerated Values

|Property|Value|
|---|---|
|phone_type|FAX|
|phone_type|HOME|
|phone_type|MOBILE|
|phone_type|OTHER|
|phone_type|PAGER|

<h2 id="tocS_phone_detail_list">phone_detail_list</h2>
<!-- backwards compatibility -->
<a id="schemaphone_detail_list"></a>
<a id="schema_phone_detail_list"></a>
<a id="tocSphone_detail_list"></a>
<a id="tocsphone_detail_list"></a>

```json
[
  {
    "country_code": "str",
    "national_number": "string",
    "extension_number": "string",
    "phone_type": "FAX"
  }
]
```

An array of invoicer's phone numbers. The invoicer can choose to hide the phone number on the invoice.

<h2 id="tocS_phone_type">phone_type</h2>
<!-- backwards compatibility -->
<a id="schemaphone_type"></a>
<a id="schema_phone_type"></a>
<a id="tocSphone_type"></a>
<a id="tocsphone_type"></a>

```json
"FAX"
```

The phone type.

<h2 id="tocS_qr_config">qr_config</h2>
<!-- backwards compatibility -->
<a id="schemaqr_config"></a>
<a id="schema_qr_config"></a>
<a id="tocSqr_config"></a>
<a id="tocsqr_config"></a>

```json
{
  "width": 500,
  "height": 500,
  "action": "pay"
}
```

The configuration for a QR code.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|width|integer|false|none|The width, in pixels, of the QR code image. Value is from `150` to `500`.|
|height|integer|false|none|The height, in pixels, of the QR code image. Value is from `150` to `500`.|
|action|string|false|none|The type of URL for which to generate a QR code. Valid values are `pay` and `details`.|

<h2 id="tocS_recipient_info">recipient_info</h2>
<!-- backwards compatibility -->
<a id="schemarecipient_info"></a>
<a id="schema_recipient_info"></a>
<a id="tocSrecipient_info"></a>
<a id="tocsrecipient_info"></a>

```json
{
  "billing_info": {
    "business_name": "string",
    "name": {
      "prefix": "string",
      "given_name": "string",
      "surname": "string",
      "middle_name": "string",
      "suffix": "string",
      "alternate_full_name": "string",
      "full_name": "string"
    },
    "address": {
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
    "email_address": "string",
    "phones": [
      {
        "country_code": "str",
        "national_number": "string",
        "extension_number": "string",
        "phone_type": "FAX"
      }
    ],
    "additional_info": "string",
    "language": "string"
  },
  "shipping_info": {
    "business_name": "string",
    "name": {
      "prefix": "string",
      "given_name": "string",
      "surname": "string",
      "middle_name": "string",
      "suffix": "string",
      "alternate_full_name": "string",
      "full_name": "string"
    },
    "address": {
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
}
```

The billing and shipping information. Includes name, email, address, phone, and language.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billing_info|[billing_info](#schemabilling_info)|false|none|The billing information for the invoice recipient. Includes name, address, email, phone, and language.|
|shipping_info|[contact_name_address](#schemacontact_name_address)|false|none|The recipient's shipping information. Includes the user's contact information, which includes name and address.|

<h2 id="tocS_recipient_info_list">recipient_info_list</h2>
<!-- backwards compatibility -->
<a id="schemarecipient_info_list"></a>
<a id="schema_recipient_info_list"></a>
<a id="tocSrecipient_info_list"></a>
<a id="tocsrecipient_info_list"></a>

```json
[
  {
    "billing_info": {
      "business_name": "string",
      "name": {
        "prefix": "string",
        "given_name": "string",
        "surname": "string",
        "middle_name": "string",
        "suffix": "string",
        "alternate_full_name": "string",
        "full_name": "string"
      },
      "address": {
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
      "email_address": "string",
      "phones": [
        {
          "country_code": "str",
          "national_number": "string",
          "extension_number": "string",
          "phone_type": "FAX"
        }
      ],
      "additional_info": "string",
      "language": "string"
    },
    "shipping_info": {
      "business_name": "string",
      "name": {
        "prefix": "string",
        "given_name": "string",
        "surname": "string",
        "middle_name": "string",
        "suffix": "string",
        "alternate_full_name": "string",
        "full_name": "string"
      },
      "address": {
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
  }
]
```

The billing and shipping information. Includes name, email, address, phone and language.

<h2 id="tocS_refund_detail">refund_detail</h2>
<!-- backwards compatibility -->
<a id="schemarefund_detail"></a>
<a id="schema_refund_detail"></a>
<a id="tocSrefund_detail"></a>
<a id="tocsrefund_detail"></a>

```json
{
  "type": "PAYPAL",
  "refund_id": "string",
  "refund_date": "stringstri",
  "amount": {
    "currency_code": "str",
    "value": "string"
  },
  "method": "BANK_TRANSFER"
}
```

The refund details of the invoice. Includes the refund type, date, amount, and method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|[payment_type](#schemapayment_type)|false|none|The PayPal refund type. Indicates whether the refund was paid through PayPal or externally in the invoicing flow. The record refund method supports the `EXTERNAL` refund type. The `PAYPAL` refund type is supported for backward compatibility.|
|refund_id|string|false|read-only|The ID for a PayPal payment transaction. Required for the `PAYPAL` payment type.|
|refund_date|[date_no_time](#schemadate_no_time)|false|none|The date when the invoice was refunded, in [Internet date format](https://tools.ietf.org/html/rfc3339#section-5.6). For example, `2014-02-27`.|
|amount|[money](#schemamoney)|false|none|The amount to record as refunded. If you omit the amount, the total invoice paid amount is recorded as refunded.|
|method|[payment_method](#schemapayment_method)|true|none|The payment mode or method through which the invoicer can accept the payments.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|PAYPAL|
|type|EXTERNAL|
|method|BANK_TRANSFER|
|method|CASH|
|method|CHECK|
|method|CREDIT_CARD|
|method|DEBIT_CARD|
|method|PAYPAL|
|method|WIRE_TRANSFER|
|method|OTHER|

<h2 id="tocS_refund_detail_list">refund_detail_list</h2>
<!-- backwards compatibility -->
<a id="schemarefund_detail_list"></a>
<a id="schema_refund_detail_list"></a>
<a id="tocSrefund_detail_list"></a>
<a id="tocsrefund_detail_list"></a>

```json
[
  {
    "type": "PAYPAL",
    "refund_id": "string",
    "refund_date": "stringstri",
    "amount": {
      "currency_code": "str",
      "value": "string"
    },
    "method": "BANK_TRANSFER"
  }
]
```

An array of refund details for the invoice. Includes the refund type, date, amount, and method.

<h2 id="tocS_refund_reference">refund_reference</h2>
<!-- backwards compatibility -->
<a id="schemarefund_reference"></a>
<a id="schema_refund_reference"></a>
<a id="tocSrefund_reference"></a>
<a id="tocsrefund_reference"></a>

```json
{
  "refund_id": "string"
}
```

The reference to the refund payment detail.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|refund_id|string|false|read-only|The ID of the refund of an invoice payment.|

<h2 id="tocS_refunds">refunds</h2>
<!-- backwards compatibility -->
<a id="schemarefunds"></a>
<a id="schema_refunds"></a>
<a id="tocSrefunds"></a>
<a id="tocsrefunds"></a>

```json
{
  "refund_amount": {
    "currency_code": "str",
    "value": "string"
  },
  "transactions": [
    {
      "type": "PAYPAL",
      "refund_id": "string",
      "refund_date": "stringstri",
      "amount": {
        "currency_code": "str",
        "value": "string"
      },
      "method": "BANK_TRANSFER"
    }
  ]
}
```

The invoicing refund details. Includes the refund type, date, amount, and method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|refund_amount|[money](#schemamoney)|false|none|The aggregated refund amounts.|
|transactions|[refund_detail_list](#schemarefund_detail_list)|false|read-only|An array of refund details for the invoice. Includes the refund type, date, amount, and method.|

<h2 id="tocS_restrictive_email_address">restrictive_email_address</h2>
<!-- backwards compatibility -->
<a id="schemarestrictive_email_address"></a>
<a id="schema_restrictive_email_address"></a>
<a id="tocSrestrictive_email_address"></a>
<a id="tocsrestrictive_email_address"></a>

```json
"string"
```

The internationalized email address with more restrictive rules. This version restricts the local-part to a dot-atom as defined in https://www.ietf.org/rfc/rfc5322.txt. It does not allow for a quoted-string or an obs-local-part. <ul><li>Allows alphanumeric and RFC-allowed special characters, !#$%&'*+-/=?^_`{|}~</li><li>Ensures that the local part does not start with dot (.), have consecutive dots, or end with dot. Ensures that the domain part does not have consecutive dots.</li><li>Ensures that the local part does not exceed 64 characters.</li></ul><blockquote><strong>Note:</strong> Up to 64 characters are allowed before and 255 characters are allowed after the <code>@</code> sign. However, the generally accepted maximum length for an email address is 254 characters. The pattern verifies that an unquoted <code>@</code> sign exists.</blockquote>

<h2 id="tocS_search_data">search_data</h2>
<!-- backwards compatibility -->
<a id="schemasearch_data"></a>
<a id="schema_search_data"></a>
<a id="tocSsearch_data"></a>
<a id="tocssearch_data"></a>

```json
{
  "recipient_email": "string",
  "recipient_first_name": "string",
  "recipient_last_name": "string",
  "recipient_business_name": "string",
  "invoice_number": "string",
  "status": [
    "DRAFT"
  ],
  "reference": "string",
  "currency_code": "str",
  "memo": "string",
  "total_amount_range": {
    "lower_amount": {
      "currency_code": "str",
      "value": "string"
    },
    "upper_amount": {
      "currency_code": "str",
      "value": "string"
    }
  },
  "invoice_date_range": {
    "start": "stringstri",
    "end": "stringstri"
  },
  "due_date_range": {
    "start": "stringstri",
    "end": "stringstri"
  },
  "payment_date_range": {
    "start": "stringstringstringst",
    "end": "stringstringstringst"
  },
  "creation_date_range": {
    "start": "stringstringstringst",
    "end": "stringstringstringst"
  },
  "archived": true,
  "fields": [
    "string"
  ]
}
```

The invoice search parameters.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|recipient_email|string|false|none|Filters the search by the email address.|
|recipient_first_name|string|false|none|Filters the search by the recipient first name.|
|recipient_last_name|string|false|none|Filters the search by the recipient last name.|
|recipient_business_name|string|false|none|Filters the search by the recipient business name.|
|invoice_number|string|false|none|Filters the search by the invoice number.|
|status|[invoice_status_list](#schemainvoice_status_list)|false|none|An array of status values.|
|reference|string|false|none|The reference data. Includes a Purchase Order (PO) number.|
|currency_code|[currency_code](#schemacurrency_code)|false|none|The [three-character ISO-4217 currency code](/docs/integration/direct/rest/currency-codes/) that identifies the currency.|
|memo|string|false|none|A private bookkeeping memo for the user.|
|total_amount_range|[amount_range](#schemaamount_range)|false|none|Filters the search by the total amount.|
|invoice_date_range|[date_range](#schemadate_range)|false|none|Filters the search by a date range for the invoice, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).|
|due_date_range|[date_range](#schemadate_range)|false|none|Filters the search by a due date range for the invoice, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).|
|payment_date_range|[date_time_range](#schemadate_time_range)|false|none|The date and time range. Filters invoices by creation date, invoice date, due date, and payment date.|
|creation_date_range|[date_time_range](#schemadate_time_range)|false|none|Filters the search by a creation date range for the invoice, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).|
|archived|boolean|false|none|Indicates whether to list merchant-archived invoices in the response. Value is:<ul><li><code>true</code>. Response lists only merchant-archived invoices.</li><li><code>false</code>. Response lists only unarchived invoices.</li><li><code>null</code>. Response lists all invoices.</li></ul>|
|fields|[fields_list](#schemafields_list)|false|none|A CSV file of fields to return for the user, if available. Because the invoice object can be very large, field filtering is required. Valid collection fields are <code>items</code>, <code>payments</code>, <code>refunds</code>, <code>additional_recipients_info</code>, and <code>attachments</code>.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|DRAFT|
|status|SENT|
|status|SCHEDULED|
|status|PAID|
|status|MARKED_AS_PAID|
|status|CANCELLED|
|status|REFUNDED|
|status|PARTIALLY_PAID|
|status|PARTIALLY_REFUNDED|
|status|MARKED_AS_REFUNDED|
|status|UNPAID|
|status|PAYMENT_PENDING|
|status|AUTO_CANCELLED|
|status|PAID_EXTERNAL|
|status|REFUNDED_EXTERNAL|
|status|SHARED|

<h2 id="tocS_shipping_cost">shipping_cost</h2>
<!-- backwards compatibility -->
<a id="schemashipping_cost"></a>
<a id="schema_shipping_cost"></a>
<a id="tocSshipping_cost"></a>
<a id="tocsshipping_cost"></a>

```json
{
  "amount": {
    "currency_code": "str",
    "value": "string"
  },
  "tax": {
    "name": "string",
    "percent": "string",
    "amount": {
      "currency_code": "str",
      "value": "string"
    },
    "tax_note": "string"
  }
}
```

The shipping fee for all items. Includes tax on shipping.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|[money](#schemamoney)|false|none|The shipping amount. Value is from `0` to `1000000`. Supports up to two decimal places.|
|tax|[tax](#schematax)|false|none|The tax associated with the shipping.|

<h2 id="tocS_tax">tax</h2>
<!-- backwards compatibility -->
<a id="schematax"></a>
<a id="schema_tax"></a>
<a id="tocStax"></a>
<a id="tocstax"></a>

```json
{
  "name": "string",
  "percent": "string",
  "amount": {
    "currency_code": "str",
    "value": "string"
  },
  "tax_note": "string"
}
```

The tax information. Includes the tax name and tax rate of invoice items. The tax amount is added to the item total.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The name of the tax applied on the invoice items.|
|percent|[percentage](#schemapercentage)|true|none|The tax rate. Value is from `0` to `100`. Supports up to five decimal places.|
|amount|[money](#schemamoney)|false|none|The calculated tax amount. The tax amount is added to the item total.|
|tax_note|string|false|none|The tax note used to track the tax related data.|

<h2 id="tocS_template">template</h2>
<!-- backwards compatibility -->
<a id="schematemplate"></a>
<a id="schema_template"></a>
<a id="tocStemplate"></a>
<a id="tocstemplate"></a>

```json
{
  "id": "string",
  "name": "string",
  "default_template": true,
  "template_info": {
    "detail": {
      "reference": "string",
      "currency_code": "str",
      "note": "string",
      "terms_and_conditions": "string",
      "memo": "string",
      "attachments": [
        {
          "id": "string",
          "reference_url": "http://example.com",
          "content_type": "string",
          "create_time": "stringstringstringst",
          "size": "string"
        }
      ],
      "payment_term": {
        "term_type": "DUE_ON_RECEIPT"
      },
      "metadata": {
        "create_time": "stringstringstringst",
        "created_by": "string",
        "last_update_time": "stringstringstringst",
        "last_updated_by": "string"
      }
    },
    "invoicer": {
      "business_name": "string",
      "name": {
        "prefix": "string",
        "given_name": "string",
        "surname": "string",
        "middle_name": "string",
        "suffix": "string",
        "alternate_full_name": "string",
        "full_name": "string"
      },
      "address": {
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
      "email_address": "string",
      "phones": [
        {
          "country_code": "str",
          "national_number": "string",
          "extension_number": "string",
          "phone_type": "FAX"
        }
      ],
      "website": "http://example.com",
      "tax_id": "string",
      "additional_notes": "string",
      "logo_url": "http://example.com"
    },
    "primary_recipients": [
      {
        "billing_info": {
          "business_name": "string",
          "name": {
            "prefix": "string",
            "given_name": "string",
            "surname": "string",
            "middle_name": "string",
            "suffix": "string",
            "alternate_full_name": "string",
            "full_name": "string"
          },
          "address": {
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
          "email_address": "string",
          "phones": [
            {
              "country_code": "str",
              "national_number": "string",
              "extension_number": "string",
              "phone_type": "FAX"
            }
          ],
          "additional_info": "string",
          "language": "string"
        },
        "shipping_info": {
          "business_name": "string",
          "name": {
            "prefix": "string",
            "given_name": "string",
            "surname": "string",
            "middle_name": "string",
            "suffix": "string",
            "alternate_full_name": "string",
            "full_name": "string"
          },
          "address": {
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
      }
    ],
    "additional_recipients": [
      "string"
    ],
    "items": [
      {
        "id": "string",
        "name": "string",
        "description": "string",
        "quantity": "string",
        "unit_amount": {
          "currency_code": "str",
          "value": "string"
        },
        "tax": {
          "name": "string",
          "percent": "string",
          "amount": {
            "currency_code": "str",
            "value": "string"
          },
          "tax_note": "string"
        },
        "item_date": "stringstri",
        "discount": {
          "percent": "string",
          "amount": {
            "currency_code": "str",
            "value": "string"
          }
        },
        "unit_of_measure": "QUANTITY"
      }
    ],
    "configuration": {
      "tax_calculated_after_discount": true,
      "tax_inclusive": false,
      "allow_tip": false,
      "partial_payment": {
        "allow_partial_payment": false,
        "minimum_amount_due": {
          "currency_code": "str",
          "value": "string"
        }
      },
      "has_conditional_rule": false
    },
    "amount": {
      "currency_code": "str",
      "value": "string",
      "breakdown": {
        "item_total": {
          "currency_code": "str",
          "value": "string"
        },
        "discount": {
          "invoice_discount": {
            "percent": "string",
            "amount": {
              "currency_code": "str",
              "value": "string"
            }
          },
          "item_discount": {
            "currency_code": "str",
            "value": "string"
          }
        },
        "tax_total": {
          "currency_code": "str",
          "value": "string"
        },
        "shipping": {
          "amount": {
            "currency_code": "str",
            "value": "string"
          },
          "tax": {
            "name": "string",
            "percent": "string",
            "amount": {
              "currency_code": "str",
              "value": "string"
            },
            "tax_note": "string"
          }
        },
        "custom": {
          "label": "string",
          "amount": {
            "currency_code": "str",
            "value": "string"
          }
        }
      }
    },
    "due_amount": {
      "currency_code": "str",
      "value": "string"
    }
  },
  "settings": {
    "template_item_settings": [
      {
        "field_name": "ITEMS_QUANTITY",
        "display_preference": {
          "hidden": false
        }
      }
    ],
    "template_subtotal_settings": [
      {
        "field_name": "DISCOUNT",
        "display_preference": {
          "hidden": false
        }
      }
    ]
  },
  "unit_of_measure": "QUANTITY",
  "standard_template": true,
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

The template with invoice details to load with all captured fields.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|read-only|The ID of the template.|
|name|string|false|none|The template name.<blockquote><strong>Note:</strong> The template name must be unique.</blockquote>|
|default_template|boolean|false|none|Indicates whether this template is the default template. A invoicer can have one default template.|
|template_info|[template_info](#schematemplate_info)|false|none|The template details. Includes invoicer business information, invoice recipients, items, and configuration.|
|settings|[template_settings](#schematemplate_settings)|false|none|The template settings. Describes which fields to show or hide when you create an invoice.|
|unit_of_measure|[unit_of_measure](#schemaunit_of_measure)|false|none|The unit of measure for the template. Value is quantity, hours, or amount.|
|standard_template|boolean|false|read-only|Indicates whether this template is a invoicer-created custom template. The system generates non-custom templates.|
|links|[link_description_list](#schemalink_description_list)|false|read-only|An array of request-related [HATEOAS links](/docs/api/reference/api-responses/#hateoas-links).|

#### Enumerated Values

|Property|Value|
|---|---|
|unit_of_measure|QUANTITY|
|unit_of_measure|HOURS|
|unit_of_measure|AMOUNT|

<h2 id="tocS_template_configuration">template_configuration</h2>
<!-- backwards compatibility -->
<a id="schematemplate_configuration"></a>
<a id="schema_template_configuration"></a>
<a id="tocStemplate_configuration"></a>
<a id="tocstemplate_configuration"></a>

```json
{
  "tax_calculated_after_discount": true,
  "tax_inclusive": false,
  "allow_tip": false,
  "partial_payment": {
    "allow_partial_payment": false,
    "minimum_amount_due": {
      "currency_code": "str",
      "value": "string"
    }
  },
  "has_conditional_rule": false
}
```

The template configuration details. Includes tax information, tip, and partial payment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tax_calculated_after_discount|boolean|false|none|Indicates whether the tax is calculated before or after a discount. If `false`, the tax is calculated before a discount. If `true`, the tax is calculated after a discount.|
|tax_inclusive|boolean|false|none|Indicates whether the unit price includes tax.|
|allow_tip|boolean|false|none|Indicates whether the invoice enables the customer to enter a tip amount during payment. If `true`, the invoice shows a tip amount field so that the customer can enter a tip amount. If `false`, the invoice does not show a tip amount field.<blockquote><strong>Note:</strong> This feature is not available for users in `Hong Kong`, `Taiwan`, `India`, or `Japan`.</blockquote>|
|partial_payment|[partial_payment](#schemapartial_payment)|false|none|The partial payment details. Includes the minimum amount that the invoicer wants the payer to pay.|
|has_conditional_rule|boolean|false|none|Indicates whether conditional pricing rules are applied to the invoice. If `true`, pricing rules (such as discounts or surcharges based on specific conditions) are applied. If `false`, no conditional pricing rules are applied.|

<h2 id="tocS_template_detail">template_detail</h2>
<!-- backwards compatibility -->
<a id="schematemplate_detail"></a>
<a id="schema_template_detail"></a>
<a id="tocStemplate_detail"></a>
<a id="tocstemplate_detail"></a>

```json
{
  "reference": "string",
  "currency_code": "str",
  "note": "string",
  "terms_and_conditions": "string",
  "memo": "string",
  "attachments": [
    {
      "id": "string",
      "reference_url": "http://example.com",
      "content_type": "string",
      "create_time": "stringstringstringst",
      "size": "string"
    }
  ],
  "payment_term": {
    "term_type": "DUE_ON_RECEIPT"
  },
  "metadata": {
    "create_time": "stringstringstringst",
    "created_by": "string",
    "last_update_time": "stringstringstringst",
    "last_updated_by": "string"
  }
}
```

The template-related details. Includes notes, terms and conditions, memo, and attachments.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reference|string|false|none|The reference data. Includes a Purchase Order (PO) number.|
|currency_code|[currency_code](#schemacurrency_code)|true|none|The [three-character ISO-4217 currency code](/docs/integration/direct/rest/currency-codes/) that identifies the currency.|
|note|string|false|none|A note to the invoice recipient. Also appears on the invoice notification email.|
|terms_and_conditions|string|false|none|The general terms of the invoice. Can include return or cancellation policy and other terms and conditions.|
|memo|string|false|none|A private bookkeeping memo for the user.|
|attachments|[file_reference_list](#schemafile_reference_list)|false|none|An array of PayPal IDs for the files that are attached to an invoice.|
|payment_term|[payment_term](#schemapayment_term)|false|none|The payment due date for the invoice. Value is either but not both <code>term_type</code> or <code>due_date</code>.|
|metadata|[template_metadata](#schematemplate_metadata)|false|none|The audit metadata. Captures all template actions on create and update.|

<h2 id="tocS_template_display_preference">template_display_preference</h2>
<!-- backwards compatibility -->
<a id="schematemplate_display_preference"></a>
<a id="schema_template_display_preference"></a>
<a id="tocStemplate_display_preference"></a>
<a id="tocstemplate_display_preference"></a>

```json
{
  "hidden": false
}
```

The template display preference.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hidden|boolean|false|none|Indicates whether to show or hide this field.|

<h2 id="tocS_template_info">template_info</h2>
<!-- backwards compatibility -->
<a id="schematemplate_info"></a>
<a id="schema_template_info"></a>
<a id="tocStemplate_info"></a>
<a id="tocstemplate_info"></a>

```json
{
  "detail": {
    "reference": "string",
    "currency_code": "str",
    "note": "string",
    "terms_and_conditions": "string",
    "memo": "string",
    "attachments": [
      {
        "id": "string",
        "reference_url": "http://example.com",
        "content_type": "string",
        "create_time": "stringstringstringst",
        "size": "string"
      }
    ],
    "payment_term": {
      "term_type": "DUE_ON_RECEIPT"
    },
    "metadata": {
      "create_time": "stringstringstringst",
      "created_by": "string",
      "last_update_time": "stringstringstringst",
      "last_updated_by": "string"
    }
  },
  "invoicer": {
    "business_name": "string",
    "name": {
      "prefix": "string",
      "given_name": "string",
      "surname": "string",
      "middle_name": "string",
      "suffix": "string",
      "alternate_full_name": "string",
      "full_name": "string"
    },
    "address": {
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
    "email_address": "string",
    "phones": [
      {
        "country_code": "str",
        "national_number": "string",
        "extension_number": "string",
        "phone_type": "FAX"
      }
    ],
    "website": "http://example.com",
    "tax_id": "string",
    "additional_notes": "string",
    "logo_url": "http://example.com"
  },
  "primary_recipients": [
    {
      "billing_info": {
        "business_name": "string",
        "name": {
          "prefix": "string",
          "given_name": "string",
          "surname": "string",
          "middle_name": "string",
          "suffix": "string",
          "alternate_full_name": "string",
          "full_name": "string"
        },
        "address": {
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
        "email_address": "string",
        "phones": [
          {
            "country_code": "str",
            "national_number": "string",
            "extension_number": "string",
            "phone_type": "FAX"
          }
        ],
        "additional_info": "string",
        "language": "string"
      },
      "shipping_info": {
        "business_name": "string",
        "name": {
          "prefix": "string",
          "given_name": "string",
          "surname": "string",
          "middle_name": "string",
          "suffix": "string",
          "alternate_full_name": "string",
          "full_name": "string"
        },
        "address": {
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
    }
  ],
  "additional_recipients": [
    "string"
  ],
  "items": [
    {
      "id": "string",
      "name": "string",
      "description": "string",
      "quantity": "string",
      "unit_amount": {
        "currency_code": "str",
        "value": "string"
      },
      "tax": {
        "name": "string",
        "percent": "string",
        "amount": {
          "currency_code": "str",
          "value": "string"
        },
        "tax_note": "string"
      },
      "item_date": "stringstri",
      "discount": {
        "percent": "string",
        "amount": {
          "currency_code": "str",
          "value": "string"
        }
      },
      "unit_of_measure": "QUANTITY"
    }
  ],
  "configuration": {
    "tax_calculated_after_discount": true,
    "tax_inclusive": false,
    "allow_tip": false,
    "partial_payment": {
      "allow_partial_payment": false,
      "minimum_amount_due": {
        "currency_code": "str",
        "value": "string"
      }
    },
    "has_conditional_rule": false
  },
  "amount": {
    "currency_code": "str",
    "value": "string",
    "breakdown": {
      "item_total": {
        "currency_code": "str",
        "value": "string"
      },
      "discount": {
        "invoice_discount": {
          "percent": "string",
          "amount": {
            "currency_code": "str",
            "value": "string"
          }
        },
        "item_discount": {
          "currency_code": "str",
          "value": "string"
        }
      },
      "tax_total": {
        "currency_code": "str",
        "value": "string"
      },
      "shipping": {
        "amount": {
          "currency_code": "str",
          "value": "string"
        },
        "tax": {
          "name": "string",
          "percent": "string",
          "amount": {
            "currency_code": "str",
            "value": "string"
          },
          "tax_note": "string"
        }
      },
      "custom": {
        "label": "string",
        "amount": {
          "currency_code": "str",
          "value": "string"
        }
      }
    }
  },
  "due_amount": {
    "currency_code": "str",
    "value": "string"
  }
}
```

The template details. Includes invoicer business information, invoice recipients, items, and configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|[template_detail](#schematemplate_detail)|false|none|The template-related details. Includes notes, terms and conditions, memo, and attachments.|
|invoicer|[invoicer_info](#schemainvoicer_info)|false|none|The invoicer information. Includes business name, email, address, phone, fax, tax ID, additional notes, and logo URL.|
|primary_recipients|[definitions-recipient_info_list](#schemadefinitions-recipient_info_list)|false|none|The billing and shipping information. Includes name, email, address, phone, and language.|
|additional_recipients|[email_address_list](#schemaemail_address_list)|false|none|An array of one or more CC: emails to which notifications are sent. If you omit this parameter, a notification is sent to all CC: email addresses that are part of the invoice.<blockquote><strong>Note:</strong> Valid values are email addresses in the `additional_recipients` value associated with the invoice.</blockquote>|
|items|[definitions-item_list](#schemadefinitions-item_list)|false|none|An array of invoice line-item information.|
|configuration|[template_configuration](#schematemplate_configuration)|false|none|The template configuration details. Includes tax information, tip, and partial payment.|
|amount|[amount_summary_detail](#schemaamount_summary_detail)|false|none|The invoice amount summary of the item total, discount, tax total, and shipping.|
|due_amount|[money](#schemamoney)|false|none|The amount due for the invoice.|

<h2 id="tocS_template_item_field">template_item_field</h2>
<!-- backwards compatibility -->
<a id="schematemplate_item_field"></a>
<a id="schema_template_item_field"></a>
<a id="tocStemplate_item_field"></a>
<a id="tocstemplate_item_field"></a>

```json
"ITEMS_QUANTITY"
```

The field names for the invoice line items in the template.

<h2 id="tocS_template_item_setting">template_item_setting</h2>
<!-- backwards compatibility -->
<a id="schematemplate_item_setting"></a>
<a id="schema_template_item_setting"></a>
<a id="tocStemplate_item_setting"></a>
<a id="tocstemplate_item_setting"></a>

```json
{
  "field_name": "ITEMS_QUANTITY",
  "display_preference": {
    "hidden": false
  }
}
```

The template item setting. Sets a template as the default template or edit template.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field_name|[template_item_field](#schematemplate_item_field)|false|none|The field name in `template_data` for which to map corresponding display preferences.|
|display_preference|[template_display_preference](#schematemplate_display_preference)|false|none|The display preference.|

#### Enumerated Values

|Property|Value|
|---|---|
|field_name|ITEMS_QUANTITY|
|field_name|ITEMS_DESCRIPTION|
|field_name|ITEMS_DATE|
|field_name|ITEMS_DISCOUNT|
|field_name|ITEMS_TAX|

<h2 id="tocS_template_item_setting_list">template_item_setting_list</h2>
<!-- backwards compatibility -->
<a id="schematemplate_item_setting_list"></a>
<a id="schema_template_item_setting_list"></a>
<a id="tocStemplate_item_setting_list"></a>
<a id="tocstemplate_item_setting_list"></a>

```json
[
  {
    "field_name": "ITEMS_QUANTITY",
    "display_preference": {
      "hidden": false
    }
  }
]
```

The template item headers display preference.

<h2 id="tocS_template_list">template_list</h2>
<!-- backwards compatibility -->
<a id="schematemplate_list"></a>
<a id="schema_template_list"></a>
<a id="tocStemplate_list"></a>
<a id="tocstemplate_list"></a>

```json
[
  {
    "id": "string",
    "name": "string",
    "default_template": true,
    "template_info": {
      "detail": {
        "reference": "string",
        "currency_code": "str",
        "note": "string",
        "terms_and_conditions": "string",
        "memo": "string",
        "attachments": [
          {
            "id": "string",
            "reference_url": "http://example.com",
            "content_type": "string",
            "create_time": "stringstringstringst",
            "size": "string"
          }
        ],
        "payment_term": {
          "term_type": "DUE_ON_RECEIPT"
        },
        "metadata": {
          "create_time": "stringstringstringst",
          "created_by": "string",
          "last_update_time": "stringstringstringst",
          "last_updated_by": "string"
        }
      },
      "invoicer": {
        "business_name": "string",
        "name": {
          "prefix": "string",
          "given_name": "string",
          "surname": "string",
          "middle_name": "string",
          "suffix": "string",
          "alternate_full_name": "string",
          "full_name": "string"
        },
        "address": {
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
        "email_address": "string",
        "phones": [
          {
            "country_code": "str",
            "national_number": "string",
            "extension_number": "string",
            "phone_type": "FAX"
          }
        ],
        "website": "http://example.com",
        "tax_id": "string",
        "additional_notes": "string",
        "logo_url": "http://example.com"
      },
      "primary_recipients": [
        {
          "billing_info": {
            "business_name": "string",
            "name": {
              "prefix": "string",
              "given_name": "string",
              "surname": "string",
              "middle_name": "string",
              "suffix": "string",
              "alternate_full_name": "string",
              "full_name": "string"
            },
            "address": {
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
            "email_address": "string",
            "phones": [
              {
                "country_code": "str",
                "national_number": "string",
                "extension_number": "string",
                "phone_type": "FAX"
              }
            ],
            "additional_info": "string",
            "language": "string"
          },
          "shipping_info": {
            "business_name": "string",
            "name": {
              "prefix": "string",
              "given_name": "string",
              "surname": "string",
              "middle_name": "string",
              "suffix": "string",
              "alternate_full_name": "string",
              "full_name": "string"
            },
            "address": {
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
        }
      ],
      "additional_recipients": [
        "string"
      ],
      "items": [
        {
          "id": "string",
          "name": "string",
          "description": "string",
          "quantity": "string",
          "unit_amount": {
            "currency_code": "str",
            "value": "string"
          },
          "tax": {
            "name": "string",
            "percent": "string",
            "amount": {
              "currency_code": "str",
              "value": "string"
            },
            "tax_note": "string"
          },
          "item_date": "stringstri",
          "discount": {
            "percent": "string",
            "amount": {
              "currency_code": "str",
              "value": "string"
            }
          },
          "unit_of_measure": "QUANTITY"
        }
      ],
      "configuration": {
        "tax_calculated_after_discount": true,
        "tax_inclusive": false,
        "allow_tip": false,
        "partial_payment": {
          "allow_partial_payment": false,
          "minimum_amount_due": {
            "currency_code": "str",
            "value": "string"
          }
        },
        "has_conditional_rule": false
      },
      "amount": {
        "currency_code": "str",
        "value": "string",
        "breakdown": {
          "item_total": {
            "currency_code": "str",
            "value": "string"
          },
          "discount": {
            "invoice_discount": {
              "percent": "string",
              "amount": {
                "currency_code": "str",
                "value": "string"
              }
            },
            "item_discount": {
              "currency_code": "str",
              "value": "string"
            }
          },
          "tax_total": {
            "currency_code": "str",
            "value": "string"
          },
          "shipping": {
            "amount": {
              "currency_code": "str",
              "value": "string"
            },
            "tax": {
              "name": "string",
              "percent": "string",
              "amount": {
                "currency_code": "str",
                "value": "string"
              },
              "tax_note": "string"
            }
          },
          "custom": {
            "label": "string",
            "amount": {
              "currency_code": "str",
              "value": "string"
            }
          }
        }
      },
      "due_amount": {
        "currency_code": "str",
        "value": "string"
      }
    },
    "settings": {
      "template_item_settings": [
        {
          "field_name": "ITEMS_QUANTITY",
          "display_preference": {
            "hidden": false
          }
        }
      ],
      "template_subtotal_settings": [
        {
          "field_name": "DISCOUNT",
          "display_preference": {
            "hidden": false
          }
        }
      ]
    },
    "unit_of_measure": "QUANTITY",
    "standard_template": true,
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

An array of details for each template. If `fields` is `none`, returns only the template name, ID, and default status.

<h2 id="tocS_template_metadata">template_metadata</h2>
<!-- backwards compatibility -->
<a id="schematemplate_metadata"></a>
<a id="schema_template_metadata"></a>
<a id="tocStemplate_metadata"></a>
<a id="tocstemplate_metadata"></a>

```json
{
  "create_time": "stringstringstringst",
  "created_by": "string",
  "last_update_time": "stringstringstringst",
  "last_updated_by": "string"
}
```

The audit metadata. Captures all template actions on create and update.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|create_time|[date_time](#schemadate_time)|false|none|The date and time when the resource was created, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).|
|created_by|string|false|read-only|The email address of the account that created the resource.|
|last_update_time|[date_time](#schemadate_time)|false|none|The date and time when the resource was last edited, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).|
|last_updated_by|string|false|read-only|The email address of the account that last edited the resource.|

<h2 id="tocS_template_settings">template_settings</h2>
<!-- backwards compatibility -->
<a id="schematemplate_settings"></a>
<a id="schema_template_settings"></a>
<a id="tocStemplate_settings"></a>
<a id="tocstemplate_settings"></a>

```json
{
  "template_item_settings": [
    {
      "field_name": "ITEMS_QUANTITY",
      "display_preference": {
        "hidden": false
      }
    }
  ],
  "template_subtotal_settings": [
    {
      "field_name": "DISCOUNT",
      "display_preference": {
        "hidden": false
      }
    }
  ]
}
```

The template settings. Sets a template as the default template or edit template.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|template_item_settings|[template_item_setting_list](#schematemplate_item_setting_list)|false|none|The template item headers display preference.|
|template_subtotal_settings|[template_subtotal_setting_list](#schematemplate_subtotal_setting_list)|false|none|The template subtotal headers display preference.|

<h2 id="tocS_template_subtotal_field">template_subtotal_field</h2>
<!-- backwards compatibility -->
<a id="schematemplate_subtotal_field"></a>
<a id="schema_template_subtotal_field"></a>
<a id="tocStemplate_subtotal_field"></a>
<a id="tocstemplate_subtotal_field"></a>

```json
"DISCOUNT"
```

The field names in the template for discount, shipping, and custom amounts.

<h2 id="tocS_template_subtotal_setting">template_subtotal_setting</h2>
<!-- backwards compatibility -->
<a id="schematemplate_subtotal_setting"></a>
<a id="schema_template_subtotal_setting"></a>
<a id="tocStemplate_subtotal_setting"></a>
<a id="tocstemplate_subtotal_setting"></a>

```json
{
  "field_name": "DISCOUNT",
  "display_preference": {
    "hidden": false
  }
}
```

The template subtotal setting. Includes the field name and display preference.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field_name|[template_subtotal_field](#schematemplate_subtotal_field)|false|none|The field name in `template_data` for which to map corresponding display preferences.|
|display_preference|[template_display_preference](#schematemplate_display_preference)|false|none|The display preference.|

#### Enumerated Values

|Property|Value|
|---|---|
|field_name|DISCOUNT|
|field_name|SHIPPING|
|field_name|CUSTOM|

<h2 id="tocS_template_subtotal_setting_list">template_subtotal_setting_list</h2>
<!-- backwards compatibility -->
<a id="schematemplate_subtotal_setting_list"></a>
<a id="schema_template_subtotal_setting_list"></a>
<a id="tocStemplate_subtotal_setting_list"></a>
<a id="tocstemplate_subtotal_setting_list"></a>

```json
[
  {
    "field_name": "DISCOUNT",
    "display_preference": {
      "hidden": false
    }
  }
]
```

The template subtotal headers display preference.

<h2 id="tocS_templates">templates</h2>
<!-- backwards compatibility -->
<a id="schematemplates"></a>
<a id="schema_templates"></a>
<a id="tocStemplates"></a>
<a id="tocstemplates"></a>

```json
{
  "addresses": [
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
  ],
  "emails": "string",
  "phones": [
    {
      "country_code": "str",
      "national_number": "string",
      "extension_number": "string",
      "phone_type": "FAX"
    }
  ],
  "templates": [
    {
      "id": "string",
      "name": "string",
      "default_template": true,
      "template_info": {
        "detail": {
          "reference": "string",
          "currency_code": "str",
          "note": "string",
          "terms_and_conditions": "string",
          "memo": "string",
          "attachments": [
            {
              "id": "string",
              "reference_url": "http://example.com",
              "content_type": "string",
              "create_time": "stringstringstringst",
              "size": "string"
            }
          ],
          "payment_term": {
            "term_type": "DUE_ON_RECEIPT"
          },
          "metadata": {
            "create_time": "stringstringstringst",
            "created_by": "string",
            "last_update_time": "stringstringstringst",
            "last_updated_by": "string"
          }
        },
        "invoicer": {
          "business_name": "string",
          "name": {
            "prefix": "string",
            "given_name": "string",
            "surname": "string",
            "middle_name": "string",
            "suffix": "string",
            "alternate_full_name": "string",
            "full_name": "string"
          },
          "address": {
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
          "email_address": "string",
          "phones": [
            {
              "country_code": "str",
              "national_number": "string",
              "extension_number": "string",
              "phone_type": "FAX"
            }
          ],
          "website": "http://example.com",
          "tax_id": "string",
          "additional_notes": "string",
          "logo_url": "http://example.com"
        },
        "primary_recipients": [
          {
            "billing_info": {
              "business_name": "string",
              "name": {
                "prefix": "string",
                "given_name": "string",
                "surname": "string",
                "middle_name": "string",
                "suffix": "string",
                "alternate_full_name": "string",
                "full_name": "string"
              },
              "address": {
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
              "email_address": "string",
              "phones": [
                {
                  "country_code": "str",
                  "national_number": "string",
                  "extension_number": "string",
                  "phone_type": "FAX"
                }
              ],
              "additional_info": "string",
              "language": "string"
            },
            "shipping_info": {
              "business_name": "string",
              "name": {
                "prefix": "string",
                "given_name": "string",
                "surname": "string",
                "middle_name": "string",
                "suffix": "string",
                "alternate_full_name": "string",
                "full_name": "string"
              },
              "address": {
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
          }
        ],
        "additional_recipients": [
          "string"
        ],
        "items": [
          {
            "id": "string",
            "name": "string",
            "description": "string",
            "quantity": "string",
            "unit_amount": {
              "currency_code": "str",
              "value": "string"
            },
            "tax": {
              "name": "string",
              "percent": "string",
              "amount": {
                "currency_code": "str",
                "value": "string"
              },
              "tax_note": "string"
            },
            "item_date": "stringstri",
            "discount": {
              "percent": "string",
              "amount": {
                "currency_code": "str",
                "value": "string"
              }
            },
            "unit_of_measure": "QUANTITY"
          }
        ],
        "configuration": {
          "tax_calculated_after_discount": true,
          "tax_inclusive": false,
          "allow_tip": false,
          "partial_payment": {
            "allow_partial_payment": false,
            "minimum_amount_due": {
              "currency_code": "str",
              "value": "string"
            }
          },
          "has_conditional_rule": false
        },
        "amount": {
          "currency_code": "str",
          "value": "string",
          "breakdown": {
            "item_total": {
              "currency_code": "str",
              "value": "string"
            },
            "discount": {
              "invoice_discount": {
                "percent": "string",
                "amount": {
                  "currency_code": "str",
                  "value": "string"
                }
              },
              "item_discount": {
                "currency_code": "str",
                "value": "string"
              }
            },
            "tax_total": {
              "currency_code": "str",
              "value": "string"
            },
            "shipping": {
              "amount": {
                "currency_code": "str",
                "value": "string"
              },
              "tax": {
                "name": "string",
                "percent": "string",
                "amount": {
                  "currency_code": "str",
                  "value": "string"
                },
                "tax_note": "string"
              }
            },
            "custom": {
              "label": "string",
              "amount": {
                "currency_code": "str",
                "value": "string"
              }
            }
          }
        },
        "due_amount": {
          "currency_code": "str",
          "value": "string"
        }
      },
      "settings": {
        "template_item_settings": [
          {
            "field_name": "ITEMS_QUANTITY",
            "display_preference": {
              "hidden": false
            }
          }
        ],
        "template_subtotal_settings": [
          {
            "field_name": "DISCOUNT",
            "display_preference": {
              "hidden": false
            }
          }
        ]
      },
      "unit_of_measure": "QUANTITY",
      "standard_template": true,
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

An array of merchant-created templates with associated details that include the emails, addresses, and phone numbers from the user's PayPal profile.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addresses|[address_portable_list](#schemaaddress_portable_list)|false|read-only|An array of addresses in the user's PayPal profile.|
|emails|[email_address](#schemaemail_address)|false|none|An array of emails in the user's PayPal profile.|
|phones|[templates_definitions-phone_detail_list](#schematemplates_definitions-phone_detail_list)|false|none|An array of phone numbers in the user's PayPal profile.|
|templates|[template_list](#schematemplate_list)|false|none|An array of details for each template. If `fields` is `none`, returns only the template name, ID, and default status.|
|links|[link_description_list](#schemalink_description_list)|false|read-only|An array of request-related [HATEOAS links](/docs/api/reference/api-responses/#hateoas-links).|

<h2 id="tocS_templates.create-400">templates.create-400</h2>
<!-- backwards compatibility -->
<a id="schematemplates.create-400"></a>
<a id="schema_templates.create-400"></a>
<a id="tocStemplates.create-400"></a>
<a id="tocstemplates.create-400"></a>

```json
{
  "details": [
    {
      "issue": "TEMPLATE_NAME_ALREADY_EXISTS",
      "description": "Template name already exists."
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|[object]|false|none|none|

<h2 id="tocS_templates.create-422">templates.create-422</h2>
<!-- backwards compatibility -->
<a id="schematemplates.create-422"></a>
<a id="schema_templates.create-422"></a>
<a id="tocStemplates.create-422"></a>
<a id="tocstemplates.create-422"></a>

```json
{
  "details": [
    {
      "issue": "CANNOT_CANCEL_DRAFT_INVOICE",
      "description": "Cannot cancel a draft invoice."
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|[object]|false|none|none|

<h2 id="tocS_templates.delete-403">templates.delete-403</h2>
<!-- backwards compatibility -->
<a id="schematemplates.delete-403"></a>
<a id="schema_templates.delete-403"></a>
<a id="tocStemplates.delete-403"></a>
<a id="tocstemplates.delete-403"></a>

```json
{
  "details": [
    {
      "issue": "PERMISSION_DENIED",
      "description": "The requested template is not associated with the requested user."
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|[object]|false|none|none|

<h2 id="tocS_templates.get-403">templates.get-403</h2>
<!-- backwards compatibility -->
<a id="schematemplates.get-403"></a>
<a id="schema_templates.get-403"></a>
<a id="tocStemplates.get-403"></a>
<a id="tocstemplates.get-403"></a>

```json
{
  "details": [
    {
      "issue": "PERMISSION_DENIED",
      "description": "The requested template is not associated with the requested user."
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|[object]|false|none|none|

<h2 id="tocS_templates.update-400">templates.update-400</h2>
<!-- backwards compatibility -->
<a id="schematemplates.update-400"></a>
<a id="schema_templates.update-400"></a>
<a id="tocStemplates.update-400"></a>
<a id="tocstemplates.update-400"></a>

```json
{
  "details": [
    {
      "issue": "TEMPLATE_NAME_ALREADY_EXISTS",
      "description": "Template name already exists."
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|[object]|false|none|none|

<h2 id="tocS_templates_definitions-phone_detail_list">templates_definitions-phone_detail_list</h2>
<!-- backwards compatibility -->
<a id="schematemplates_definitions-phone_detail_list"></a>
<a id="schema_templates_definitions-phone_detail_list"></a>
<a id="tocStemplates_definitions-phone_detail_list"></a>
<a id="tocstemplates_definitions-phone_detail_list"></a>

```json
[
  {
    "country_code": "str",
    "national_number": "string",
    "extension_number": "string",
    "phone_type": "FAX"
  }
]
```

An array of phone numbers in the user's PayPal profile.

<h2 id="tocS_unit_of_measure">unit_of_measure</h2>
<!-- backwards compatibility -->
<a id="schemaunit_of_measure"></a>
<a id="schema_unit_of_measure"></a>
<a id="tocSunit_of_measure"></a>
<a id="tocsunit_of_measure"></a>

```json
"QUANTITY"
```

The unit of measure for the invoiced item.
