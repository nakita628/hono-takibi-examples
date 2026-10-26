<h1 id="payment-method-tokens">Payment Method Tokens v3.4</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Payment Method Tokens API saves payment methods so payers don't have to enter details for future transactions. Payers can check out faster or pay without being present after they agree to save a payment method.<br><br>The API associates a payment method with a temporary setup token. Pass the setup token to the API to exchange the setup token for a permanent token.<br><br>The permanent token represents a payment method that's saved to the vault. This token can be used repeatedly for checkout or recurring transactions such as subscriptions.

Base URLs:

* <a href="https://api-m.sandbox.paypal.com">https://api-m.sandbox.paypal.com</a> - PayPal Sandbox Environment

* <a href="https://api-m.paypal.com">https://api-m.paypal.com</a> - PayPal Live Environment

<a href="https://developer.paypal.com/docs/api/vault/v3/">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 authentication

    - Flow: clientCredentials
    - Token URL = [/v1/oauth2/token](/v1/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://uri.paypal.com/services/vault/payment-tokens/readwrite|Manage payment instruments|
|https://uri.paypal.com/services/vault/payment-tokens/read|Permission to only read from vault|
|https://uri.paypal.com/services/vault/customers/read|Permission to read customer information.|
|https://uri.paypal.com/services/vault/customers/readwrite|Permission to create/update customer information.|

<h1 id="payment-method-tokens-payment-tokens">payment-tokens</h1>

Use the `/vault/payment-tokens` resource to create, retrieve, and delete a payment token that may optionally be associated with a customer.

## List all payment tokens

<a id="opIdcustomer.payment-tokens.get"></a>

> Code samples

```bash
curl 'https://api-m.paypal.com/v3/vault/payment-tokens?customer_id=strings' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v3/vault/payment-tokens`

Returns all payment tokens for a customer.

<h3 id="list-all-payment-tokens-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|customer_id|query|string|true|A unique identifier representing a specific customer in merchant's/partner's system or records.|
|page_size|query|integer|false|A non-negative, non-zero integer indicating the maximum number of results to return at one time.|
|page|query|integer|false|A non-negative, non-zero integer representing the page of the results.|
|total_required|query|boolean|false|A boolean indicating total number of items (total_items) and pages (total_pages) are expected to be returned in the response.|

> Example responses

> 200 Response

```json
{
  "customer": {
    "id": "customer_4029352050"
  },
  "payment_tokens": [
    {
      "id": "8kk8451t",
      "customer": {
        "id": "customer_4029352050"
      },
      "payment_source": {
        "card": {
          "brand": "VISA",
          "last_digits": "1111",
          "expiry": "2027-02",
          "name": "John Doe",
          "billing_address": {
            "address_line_1": "2211 N First Street",
            "address_line_2": "17.3.160",
            "admin_area_2": "San Jose",
            "admin_area_1": "CA",
            "postal_code": "95131",
            "country_code": "US"
          }
        }
      },
      "links": [
        {
          "rel": "self",
          "href": "https://api-m.paypal.com/v3/vault/payment-tokens/8kk8451t",
          "method": "GET",
          "encType": "application/json"
        },
        {
          "rel": "delete",
          "href": "https://api-m.paypal.com/v3/vault/payment-tokens/8kk8451t",
          "method": "DELETE",
          "encType": "application/json"
        }
      ]
    },
    {
      "id": "fgh6561t",
      "customer": {
        "id": "customer_4029352050"
      },
      "payment_source": {
        "paypal": {
          "description": "Description for PayPal to be shown to PayPal payer",
          "email_address": "john.doe@example.com",
          "account_id": "VYYFH3WJ4JPJQ",
          "shipping": {
            "name": {
              "full_name": "John Doe"
            },
            "address": {
              "address_line_1": "2211 N First Street",
              "address_line_2": "17.3.160",
              "admin_area_2": "San Jose",
              "admin_area_1": "CA",
              "postal_code": "95131",
              "country_code": "US"
            }
          },
          "usage_pattern": "IMMEDIATE",
          "usage_type": "MERCHANT",
          "customer_type": "CONSUMER",
          "name": {
            "given_name": "John",
            "surname": "Doe"
          },
          "address": {
            "address_line_1": "2211 N First Street",
            "address_line_2": "17.3.160",
            "admin_area_2": "San Jose",
            "admin_area_1": "CA",
            "postal_code": "95131",
            "country_code": "US"
          }
        }
      },
      "links": [
        {
          "rel": "self",
          "href": "https://api-m.paypal.com/v3/vault/payment-tokens/fgh6561t",
          "method": "GET",
          "encType": "application/json"
        },
        {
          "rel": "delete",
          "href": "https://api-m.paypal.com/v3/vault/payment-tokens/fgh6561t",
          "method": "DELETE",
          "encType": "application/json"
        }
      ]
    },
    {
      "id": "hg654s1t",
      "customer": {
        "id": "customer_4029352050"
      },
      "payment_source": {
        "venmo": {
          "description": "Description for Venmo to be shown to Venmo payer",
          "shipping": {
            "name": {
              "full_name": "John Doe"
            },
            "address": {
              "address_line_1": "2211 N First Street",
              "address_line_2": "17.3.160",
              "admin_area_2": "San Jose",
              "admin_area_1": "CA",
              "postal_code": "95131",
              "country_code": "US"
            }
          },
          "usage_pattern": "IMMEDIATE",
          "usage_type": "MERCHANT",
          "customer_type": "CONSUMER",
          "email_address": "john.doe@example.com",
          "user_name": "johndoe",
          "name": {
            "given_name": "John",
            "surname": "Doe"
          },
          "account_id": "VYYFH3WJ4JPJQ",
          "address": {
            "address_line_1": "PayPal",
            "address_line_2": "2211 North 1st Street",
            "admin_area_1": "CA",
            "admin_area_2": "San Jose",
            "postal_code": "96112",
            "country_code": "US"
          }
        }
      },
      "links": [
        {
          "rel": "self",
          "href": "https://api-m.paypal.com/v3/vault/payment-tokens/hg654s1t",
          "method": "GET",
          "encType": "application/json"
        },
        {
          "rel": "delete",
          "href": "https://api-m.paypal.com/v3/vault/payment-tokens/hg654s1t",
          "method": "DELETE",
          "encType": "application/json"
        }
      ]
    }
  ],
  "links": [
    {
      "rel": "self",
      "href": "https://api-m.paypal.com/v3/vault/payment-tokens?customer_id=customer_4029352050&page=1&page_size=5&total_required=false",
      "method": "GET",
      "encType": "application/json"
    },
    {
      "rel": "first",
      "href": "https://api-m.paypal.com/v3/vault/payment-tokens?customer_id=customer_4029352050&page=1&page_size=5&total_required=false",
      "method": "GET",
      "encType": "application/json"
    },
    {
      "rel": "last",
      "href": "https://api-m.paypal.com/v3/vault/payment-tokens?customer_id=customer_4029352050&page=1&page_size=5&total_required=false",
      "method": "GET",
      "encType": "application/json"
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
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "links": [
        {
          "href": "string",
          "rel": "string",
          "method": "GET"
        }
      ],
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
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "links": [
        {
          "href": "string",
          "rel": "string",
          "method": "GET"
        }
      ],
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
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "links": [
        {
          "href": "string",
          "rel": "string",
          "method": "GET"
        }
      ],
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

<h3 id="list-all-payment-tokens-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful execution.|[customer_vault_payment_tokens_response](#schemacustomer_vault_payment_tokens_response)|
|400|Bad Request|Request is not well-formed, syntactically incorrect, or violates schema.|[error](#schemaerror)|
|403|Forbidden|Authorization failed due to insufficient permissions.|[error](#schemaerror)|
|500|Internal Server Error|An internal server error has occurred.|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://uri.paypal.com/services/vault/payment-tokens/readwrite )
</aside>

## Create payment token for a given payment source

<a id="opIdpayment-tokens.create"></a>

> Code samples

```bash
curl https://api-m.paypal.com/v3/vault/payment-tokens \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "payment_source": {
      "token": {
        "id": "5C991763VB2781612",
        "type": "BILLING_AGREEMENT"
      }
    }
  }'
```

`POST /v3/vault/payment-tokens`

Creates a Payment Token from the given payment source and adds it to the Vault of the associated customer.

> Body parameter

```json
{
  "payment_source": {
    "token": {
      "id": "5C991763VB2781612",
      "type": "BILLING_AGREEMENT"
    }
  }
}
```

<h3 id="create-payment-token-for-a-given-payment-source-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|PayPal-Request-Id|header|string|false|The server stores keys for 3 hours.|
|body|body|[payment_token_request](#schemapayment_token_request)|true|Payment Token creation with a financial instrument and an optional customer_id.|
|» customer|body|object|false|This object defines a customer in your system. Use it to manage customer profiles, save payment methods and contact details.|
|» » id|body|[merchant_partner_customer_id](#schemamerchant_partner_customer_id)|false|The unique ID for a customer in merchant's or partner's system of records.|
|» » merchant_customer_id|body|string|false|Merchants and partners may already have a data-store where their customer information is persisted. Use merchant_customer_id to associate the PayPal-generated customer.id to your representation of a customer.|
|» payment_source|body|[definitions-payment_source](#schemadefinitions-payment_source)|true|The payment method to vault with the instrument details.|

> Example responses

> 200 Response

```json
{
  "id": "8kk8451t",
  "customer": {
    "id": "customer_4029352050"
  },
  "payment_source": {
    "card": {
      "last_digits": "1111",
      "expiry": "2027-02",
      "brand": "VISA",
      "name": "John Doe",
      "billing_address": {
        "address_line_1": "2211 N First Street",
        "address_line_2": "17.3.160",
        "admin_area_2": "San Jose",
        "admin_area_1": "CA",
        "postal_code": "95131",
        "country_code": "US"
      }
    }
  },
  "links": [
    {
      "rel": "self",
      "href": "https://api-m.paypal.com/v3/vault/payment-tokens/8kk8451t",
      "method": "GET",
      "encType": "application/json"
    },
    {
      "rel": "delete",
      "href": "https://api-m.paypal.com/v3/vault/payment-tokens/8kk8451t",
      "method": "DELETE",
      "encType": "application/json"
    }
  ]
}
```

> 201 Response

```json
{
  "id": "8kk8451t",
  "customer": {
    "id": "customer_4029352050"
  },
  "payment_source": {
    "card": {
      "last_digits": "1111",
      "expiry": "2027-02",
      "brand": "VISA",
      "name": "John Doe",
      "billing_address": {
        "address_line_1": "2211 N First Street",
        "address_line_2": "17.3.160",
        "admin_area_2": "San Jose",
        "admin_area_1": "CA",
        "postal_code": "95131",
        "country_code": "US"
      }
    }
  },
  "links": [
    {
      "rel": "self",
      "href": "https://api-m.paypal.com/v3/vault/payment-tokens/8kk8451t",
      "method": "GET",
      "encType": "application/json"
    },
    {
      "rel": "delete",
      "href": "https://api-m.paypal.com/v3/vault/payment-tokens/8kk8451t",
      "method": "DELETE",
      "encType": "application/json"
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
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "links": [
        {
          "href": "string",
          "rel": "string",
          "method": "GET"
        }
      ],
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
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "links": [
        {
          "href": "string",
          "rel": "string",
          "method": "GET"
        }
      ],
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
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "links": [
        {
          "href": "string",
          "rel": "string",
          "method": "GET"
        }
      ],
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
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "links": [
        {
          "href": "string",
          "rel": "string",
          "method": "GET"
        }
      ],
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
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "links": [
        {
          "href": "string",
          "rel": "string",
          "method": "GET"
        }
      ],
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

<h3 id="create-payment-token-for-a-given-payment-source-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Idempotent response for a successful creation of payment token.|[payment_token_response](#schemapayment_token_response)|
|201|Created|A successful creation of payment token.|[payment_token_response](#schemapayment_token_response)|
|400|Bad Request|Request is not well-formed, syntactically incorrect, or violates schema.|[error](#schemaerror)|
|403|Forbidden|Authorization failed due to insufficient permissions.|[error](#schemaerror)|
|404|Not Found|Request contains reference to resources that do not exist.|[error](#schemaerror)|
|422|Unprocessable Entity|The requested action could not be performed, semantically incorrect, or failed business validation.|[error](#schemaerror)|
|500|Internal Server Error|An internal server error has occurred.|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://uri.paypal.com/services/vault/payment-tokens/readwrite )
</aside>

## Retrieve a payment token

<a id="opIdpayment-tokens.get"></a>

> Code samples

```bash
curl https://api-m.paypal.com/v3/vault/payment-tokens/strings \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v3/vault/payment-tokens/{id}`

Returns a readable representation of vaulted payment source associated with the payment token id.

<h3 id="retrieve-a-payment-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the setup token.|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "customer": {
    "id": "string",
    "merchant_customer_id": "string"
  },
  "payment_source": {
    "card": {
      "name": "string",
      "last_digits": "stri",
      "brand": "VISA",
      "expiry": "strings",
      "billing_address": {
        "address_line_1": "string",
        "address_line_2": "string",
        "admin_area_2": "string",
        "admin_area_1": "string",
        "postal_code": "string",
        "country_code": "st",
        "id": "string"
      },
      "verification_status": "VERIFIED",
      "verification": {
        "network_transaction_id": "string",
        "date": "stri",
        "network": "VISA",
        "time": "stringstringstringst",
        "amount": {
          "currency_code": "str",
          "value": "string"
        },
        "processor_response": {
          "avs_code": "A",
          "cvv_code": "E"
        },
        "three_d_secure": null
      },
      "network_transaction_reference": {
        "id": "stringstr",
        "date": "stri",
        "network": "VISA",
        "time": "stringstringstringst"
      },
      "authentication_result": {
        "three_d_secure": {
          "authentication_status": "Y",
          "enrollment_status": "Y",
          "authentication_id": "string"
        }
      },
      "bin_details": {
        "bin": "string",
        "issuing_bank": "string",
        "bin_country_code": "st",
        "products": [
          "string"
        ]
      },
      "type": "CREDIT",
      "network_token": null
    },
    "paypal": {
      "description": "string",
      "usage_pattern": "IMMEDIATE",
      "shipping": {
        "name": {
          "full_name": "string"
        },
        "phone_number": {
          "country_code": "str",
          "national_number": "string"
        },
        "type": "SHIPPING",
        "address": {
          "address_line_1": "string",
          "address_line_2": "string",
          "admin_area_2": "string",
          "admin_area_1": "string",
          "postal_code": "string",
          "country_code": "st"
        }
      },
      "permit_multiple_payment_tokens": false,
      "usage_type": "MERCHANT",
      "customer_type": "CONSUMER",
      "email_address": "string",
      "payer_id": "stringstrings",
      "name": {
        "given_name": "string",
        "surname": "string"
      },
      "phone": {
        "phone_type": "FAX",
        "phone_number": {
          "national_number": "string"
        }
      },
      "address": {
        "address_line_1": "string",
        "address_line_2": "string",
        "admin_area_2": "string",
        "admin_area_1": "string",
        "postal_code": "string",
        "country_code": "st"
      },
      "account_id": "stringstrings",
      "phone_number": {
        "country_code": "str",
        "national_number": "string",
        "extension_number": "string"
      }
    },
    "venmo": {
      "description": "string",
      "usage_pattern": "IMMEDIATE",
      "shipping": {
        "name": {
          "full_name": "string"
        },
        "phone_number": {
          "country_code": "str",
          "national_number": "string"
        },
        "type": "SHIPPING",
        "address": {
          "address_line_1": "string",
          "address_line_2": "string",
          "admin_area_2": "string",
          "admin_area_1": "string",
          "postal_code": "string",
          "country_code": "st"
        }
      },
      "permit_multiple_payment_tokens": false,
      "usage_type": "MERCHANT",
      "customer_type": "CONSUMER",
      "email_address": "string",
      "payer_id": "stringstrings",
      "name": {
        "given_name": "string",
        "surname": "string"
      },
      "phone": {
        "phone_type": "FAX",
        "phone_number": {
          "national_number": "string"
        }
      },
      "address": {
        "address_line_1": "string",
        "address_line_2": "string",
        "admin_area_2": "string",
        "admin_area_1": "string",
        "postal_code": "string",
        "country_code": "st"
      },
      "user_name": "string"
    },
    "apple_pay": {
      "card": {
        "name": "string",
        "last_digits": "stri",
        "type": "CREDIT",
        "brand": "VISA",
        "billing_address": {
          "address_line_1": "string",
          "address_line_2": "string",
          "admin_area_2": "string",
          "admin_area_1": "string",
          "postal_code": "string",
          "country_code": "st"
        }
      }
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

> 403 Response

```json
{
  "name": "string",
  "message": "string",
  "debug_id": "string",
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "links": [
        {
          "href": "string",
          "rel": "string",
          "method": "GET"
        }
      ],
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
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "links": [
        {
          "href": "string",
          "rel": "string",
          "method": "GET"
        }
      ],
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
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "links": [
        {
          "href": "string",
          "rel": "string",
          "method": "GET"
        }
      ],
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
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "links": [
        {
          "href": "string",
          "rel": "string",
          "method": "GET"
        }
      ],
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

<h3 id="retrieve-a-payment-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful execution.|[payment_token_response](#schemapayment_token_response)|
|403|Forbidden|Authorization failed due to insufficient permissions.|[error](#schemaerror)|
|404|Not Found|The specified resource does not exist.|[error](#schemaerror)|
|422|Unprocessable Entity|The requested action could not be performed, semantically incorrect, or failed business validation.|[error](#schemaerror)|
|500|Internal Server Error|An internal server error has occurred.|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://uri.paypal.com/services/vault/payment-tokens/readwrite )
</aside>

## Delete payment token

<a id="opIdpayment-tokens.delete"></a>

> Code samples

```bash
curl https://api-m.paypal.com/v3/vault/payment-tokens/strings \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v3/vault/payment-tokens/{id}`

Delete the payment token associated with the payment token id.

<h3 id="delete-payment-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the setup token.|

> Example responses

> 400 Response

```json
{
  "name": "string",
  "message": "string",
  "debug_id": "string",
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "links": [
        {
          "href": "string",
          "rel": "string",
          "method": "GET"
        }
      ],
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
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "links": [
        {
          "href": "string",
          "rel": "string",
          "method": "GET"
        }
      ],
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
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "links": [
        {
          "href": "string",
          "rel": "string",
          "method": "GET"
        }
      ],
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

<h3 id="delete-payment-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The server has successfully executed the method, but there is no entity body to return.|None|
|400|Bad Request|Request is not well-formed, syntactically incorrect, or violates schema.|[error](#schemaerror)|
|403|Forbidden|Authorization failed due to insufficient permissions.|[error](#schemaerror)|
|500|Internal Server Error|An internal server error has occurred.|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://uri.paypal.com/services/vault/payment-tokens/readwrite )
</aside>

<h1 id="payment-method-tokens-setup-tokens">setup-tokens</h1>

Use the `/vault/setup-tokens` resource to create and retrieve temporary vault payment methods.

## Create a setup token

<a id="opIdsetup-tokens.create"></a>

> Code samples

```bash
curl https://api-m.paypal.com/v3/vault/setup-tokens \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "payment_source": {
      "card": {
        "number": "4111111111111111",
        "expiry": "2027-02",
        "name": "John Doe",
        "billing_address": {
          "address_line_1": "2211 N First Street",
          "address_line_2": "17.3.160",
          "admin_area_1": "CA",
          "admin_area_2": "San Jose",
          "postal_code": "95131",
          "country_code": "US"
        },
        "experience_context": {
          "brand_name": "YourBrandName",
          "locale": "en-US",
          "return_url": "https://example.com/returnUrl",
          "cancel_url": "https://example.com/cancelUrl"
        }
      }
    }
  }'
```

`POST /v3/vault/setup-tokens`

Creates a Setup Token from the given payment source and adds it to the Vault of the associated customer.

> Body parameter

```json
{
  "payment_source": {
    "card": {
      "number": "4111111111111111",
      "expiry": "2027-02",
      "name": "John Doe",
      "billing_address": {
        "address_line_1": "2211 N First Street",
        "address_line_2": "17.3.160",
        "admin_area_1": "CA",
        "admin_area_2": "San Jose",
        "postal_code": "95131",
        "country_code": "US"
      },
      "experience_context": {
        "brand_name": "YourBrandName",
        "locale": "en-US",
        "return_url": "https://example.com/returnUrl",
        "cancel_url": "https://example.com/cancelUrl"
      }
    }
  }
}
```

<h3 id="create-a-setup-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|PayPal-Request-Id|header|string|false|The server stores keys for 3 hours.|
|body|body|[setup_token_request](#schemasetup_token_request)|true|Setup Token creation with a instrument type optional financial instrument details and customer_id.|
|» customer|body|object|false|This object defines a customer in your system. Use it to manage customer profiles, save payment methods and contact details.|
|» » id|body|[merchant_partner_customer_id](#schemamerchant_partner_customer_id)|false|The unique ID for a customer in merchant's or partner's system of records.|
|» » merchant_customer_id|body|string|false|Merchants and partners may already have a data-store where their customer information is persisted. Use merchant_customer_id to associate the PayPal-generated customer.id to your representation of a customer.|
|» payment_source|body|object|true|The payment method to vault with the instrument details.|
|» » card|body|object|false|A Resource representing a request to vault a Card.|
|» » » name|body|string|false|The card holder's name as it appears on the card.|
|» » » number|body|string|false|The primary account number (PAN) for the payment card.|
|» » » expiry|body|[date_year_month](#schemadate_year_month)|false|The card expiration year and month, in [Internet date format](https://tools.ietf.org/html/rfc3339#section-5.6).|
|» » » security_code|body|string|false|The three- or four-digit security code of the card. Also known as the CVV, CVC, CVN, CVE, or CID. This parameter cannot be present in the request when `payment_initiator=MERCHANT`.|
|» » » brand|body|[card_brand](#schemacard_brand)|false|The card brand or network. Typically used in the response.|
|» » » billing_address|body|object|false|The portable international postal address. Maps to [AddressValidationMetadata](https://github.com/googlei18n/libaddressinput/wiki/AddressValidationMetadata) and HTML 5.1 [Autofilling form controls: the autocomplete attribute](https://www.w3.org/TR/html51/sec-forms.html#autofilling-form-controls-the-autocomplete-attribute).|
|» » » » address_line_1|body|string|false|The first line of the address, such as number and street, for example, `173 Drury Lane`. Needed for data entry, and Compliance and Risk checks. This field needs to pass the full address.|
|» » » » address_line_2|body|string|false|The second line of the address, for example, a suite or apartment number.|
|» » » » admin_area_2|body|string|false|A city, town, or village. Smaller than `admin_area_level_1`.|
|» » » » admin_area_1|body|string|false|The highest-level sub-division in a country, which is usually a province, state, or ISO-3166-2 subdivision. This data is formatted for postal delivery, for example, `CA` and not `California`. Value, by country, is:<ul><li>UK. A county.</li><li>US. A state.</li><li>Canada. A province.</li><li>Japan. A prefecture.</li><li>Switzerland. A *kanton*.</li></ul>|
|» » » » postal_code|body|string|false|The postal code, which is the ZIP code or equivalent. Typically required for countries with a postal code or an equivalent. See [postal code](https://en.wikipedia.org/wiki/Postal_code).|
|» » » » country_code|body|[country_code](#schemacountry_code)|true|The [2-character ISO 3166-1 code](/api/rest/reference/country-codes/) that identifies the country or region.<blockquote><strong>Note:</strong> The country code for Great Britain is <code>GB</code> and not <code>UK</code> as used in the top-level domain names for that country. Use the `C2` country code for China worldwide for comparable uncontrolled price (CUP) method, bank card, and cross-border transactions.</blockquote>|
|» » » verification_method|body|[card_verification_method](#schemacard_verification_method)|false|The API caller can opt in to verify the payment token through PayPal offered verification services (e.g. Smart Dollar Auth, 3DS).|
|» » » experience_context|body|object|false|Customizes the Vault creation flow experience for your customers.|
|» » » » brand_name|body|string|false|The label that overrides the business name in the PayPal account on the PayPal site. The pattern is defined by an external party and supports Unicode.|
|» » » » locale|body|[language](#schemalanguage)|false|The BCP 47-formatted locale of pages that the PayPal vaulting experience shows. PayPal supports a five-character code. For example, `DA-DK`, `HE-IL`, `ID-ID`, `JA-JP`, `NO-NO`, `PT-BR`, `RU-RU`, `SV-SE`, `TH-TH`, `ZH-CN`, `ZH-HK`, or `ZH-TW`.|
|» » » » return_url|body|string(uri)|false|The URL where the customer is redirected after customer approves leaves the flow. It is a required field for contingency flows like PayPal wallet, 3DS.|
|» » » » cancel_url|body|string(uri)|false|The URL where the customer is redirected after customer cancels or leaves the flow. It is a required field for contingency flows like PayPal wallet, 3DS.|
|» » » » vault_instruction|body|[vault_instruction](#schemavault_instruction)|false|Vault Instruction on action to be performed after a successful payer approval.|
|» » » network_transaction_reference|body|[network_transaction_reference_request](#schemanetwork_transaction_reference_request)|false|none|
|» » paypal|body|[paypal_wallet_request](#schemapaypal_wallet_request)|false|A resource representing a request to vault PayPal Wallet.|
|» » venmo|body|[venmo_request](#schemavenmo_request)|false|none|
|» » token|body|[token_id_request](#schematoken_id_request)|false|The Tokenized Payment Source representing a Request to Vault a Token.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » » brand|VISA|
|» » » brand|MASTERCARD|
|» » » brand|DISCOVER|
|» » » brand|AMEX|
|» » » brand|SOLO|
|» » » brand|JCB|
|» » » brand|STAR|
|» » » brand|DELTA|
|» » » brand|SWITCH|
|» » » brand|MAESTRO|
|» » » brand|CB_NATIONALE|
|» » » brand|CONFIGOGA|
|» » » brand|CONFIDIS|
|» » » brand|ELECTRON|
|» » » brand|CETELEM|
|» » » brand|CHINA_UNION_PAY|
|» » » brand|DINERS|
|» » » brand|ELO|
|» » » brand|HIPER|
|» » » brand|HIPERCARD|
|» » » brand|RUPAY|
|» » » brand|GE|
|» » » brand|SYNCHRONY|
|» » » brand|EFTPOS|
|» » » brand|UNKNOWN|
|» » » verification_method|SCA_WHEN_REQUIRED|
|» » » verification_method|SCA_ALWAYS|
|» » » » vault_instruction|ON_CREATE_PAYMENT_TOKENS|
|» » » » vault_instruction|ON_PAYER_APPROVAL|

> Example responses

> 200 Response

```json
{
  "id": "5C991763VB2781612",
  "customer": {
    "id": "customer_4029352050"
  },
  "status": "APPROVED",
  "payment_source": {
    "card": {
      "last_digits": "1111",
      "expiry": "2027-02",
      "name": "John Doe",
      "billing_address": {
        "address_line_1": "2211 N First Street",
        "address_line_2": "17.3.160",
        "admin_area_1": "CA",
        "admin_area_2": "San Jose",
        "postal_code": "95131",
        "country_code": "US"
      }
    }
  },
  "links": [
    {
      "rel": "self",
      "href": "https://api-m.paypal.com/v3/vault/setup-tokens/5C991763VB2781612",
      "method": "GET",
      "encType": "application/json"
    },
    {
      "rel": "confirm",
      "href": "https://api-m.paypal.com/v3/vault/payment-token",
      "method": "POST",
      "encType": "application/json"
    }
  ]
}
```

> 201 Response

```json
{
  "id": "5C991763VB2781612",
  "customer": {
    "id": "customer_4029352050"
  },
  "status": "APPROVED",
  "payment_source": {
    "card": {
      "last_digits": "1111",
      "expiry": "2027-02",
      "name": "John Doe",
      "billing_address": {
        "address_line_1": "2211 N First Street",
        "address_line_2": "17.3.160",
        "admin_area_1": "CA",
        "admin_area_2": "San Jose",
        "postal_code": "95131",
        "country_code": "US"
      }
    }
  },
  "links": [
    {
      "rel": "self",
      "href": "https://api-m.paypal.com/v3/vault/setup-tokens/5C991763VB2781612",
      "method": "GET",
      "encType": "application/json"
    },
    {
      "rel": "confirm",
      "href": "https://api-m.paypal.com/v3/vault/payment-token",
      "method": "POST",
      "encType": "application/json"
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
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "links": [
        {
          "href": "string",
          "rel": "string",
          "method": "GET"
        }
      ],
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
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "links": [
        {
          "href": "string",
          "rel": "string",
          "method": "GET"
        }
      ],
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
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "links": [
        {
          "href": "string",
          "rel": "string",
          "method": "GET"
        }
      ],
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
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "links": [
        {
          "href": "string",
          "rel": "string",
          "method": "GET"
        }
      ],
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

<h3 id="create-a-setup-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Idempotent response for a successful creation of setup token.|[setup_token_response](#schemasetup_token_response)|
|201|Created|A successful creation of setup token.|[setup_token_response](#schemasetup_token_response)|
|400|Bad Request|Request is not well-formed, syntactically incorrect, or violates schema.|[error](#schemaerror)|
|403|Forbidden|Authorization failed due to insufficient permissions.|[error](#schemaerror)|
|422|Unprocessable Entity|The requested action could not be performed, semantically incorrect, or failed business validation.|[error](#schemaerror)|
|500|Internal Server Error|An internal server error has occurred.|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://uri.paypal.com/services/vault/payment-tokens/read )
</aside>

## Retrieve a setup token

<a id="opIdsetup-tokens.get"></a>

> Code samples

```bash
curl https://api-m.paypal.com/v3/vault/setup-tokens/strings \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v3/vault/setup-tokens/{id}`

Returns a readable representation of temporarily vaulted payment source associated with the setup token id.

<h3 id="retrieve-a-setup-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the setup token.|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "customer": {
    "id": "string",
    "merchant_customer_id": "string"
  },
  "status": "CREATED",
  "payment_source": {
    "card": {
      "name": "string",
      "last_digits": "stri",
      "brand": "VISA",
      "expiry": "strings",
      "billing_address": {
        "address_line_1": "string",
        "address_line_2": "string",
        "admin_area_2": "string",
        "admin_area_1": "string",
        "postal_code": "string",
        "country_code": "st",
        "id": "string"
      },
      "verification_status": "VERIFIED",
      "verification": {
        "network_transaction_id": "string",
        "date": "stri",
        "network": "VISA",
        "time": "stringstringstringst",
        "amount": {
          "currency_code": "str",
          "value": "string"
        },
        "processor_response": {
          "avs_code": "A",
          "cvv_code": "E"
        },
        "three_d_secure": null
      },
      "network_transaction_reference": {
        "id": "stringstr",
        "date": "stri",
        "network": "VISA",
        "time": "stringstringstringst"
      },
      "authentication_result": {
        "three_d_secure": {
          "authentication_status": "Y",
          "enrollment_status": "Y",
          "authentication_id": "string"
        }
      },
      "bin_details": {
        "bin": "string",
        "issuing_bank": "string",
        "bin_country_code": "st",
        "products": [
          "string"
        ]
      },
      "type": "CREDIT"
    },
    "paypal": {
      "description": "string",
      "usage_pattern": "IMMEDIATE",
      "shipping": {
        "name": {
          "full_name": "string"
        },
        "phone_number": {
          "country_code": "str",
          "national_number": "string"
        },
        "type": "SHIPPING",
        "address": {
          "address_line_1": "string",
          "address_line_2": "string",
          "admin_area_2": "string",
          "admin_area_1": "string",
          "postal_code": "string",
          "country_code": "st"
        }
      },
      "permit_multiple_payment_tokens": false,
      "usage_type": "MERCHANT",
      "customer_type": "CONSUMER",
      "email_address": "string",
      "payer_id": "stringstrings",
      "name": {
        "given_name": "string",
        "surname": "string"
      },
      "phone": {
        "phone_type": "FAX",
        "phone_number": {
          "national_number": "string"
        }
      },
      "address": {
        "address_line_1": "string",
        "address_line_2": "string",
        "admin_area_2": "string",
        "admin_area_1": "string",
        "postal_code": "string",
        "country_code": "st"
      },
      "account_id": "stringstrings",
      "phone_number": {
        "country_code": "str",
        "national_number": "string",
        "extension_number": "string"
      }
    },
    "venmo": {
      "description": "string",
      "usage_pattern": "IMMEDIATE",
      "shipping": {
        "name": {
          "full_name": "string"
        },
        "phone_number": {
          "country_code": "str",
          "national_number": "string"
        },
        "type": "SHIPPING",
        "address": {
          "address_line_1": "string",
          "address_line_2": "string",
          "admin_area_2": "string",
          "admin_area_1": "string",
          "postal_code": "string",
          "country_code": "st"
        }
      },
      "permit_multiple_payment_tokens": false,
      "usage_type": "MERCHANT",
      "customer_type": "CONSUMER",
      "email_address": "string",
      "payer_id": "stringstrings",
      "name": {
        "given_name": "string",
        "surname": "string"
      },
      "phone": {
        "phone_type": "FAX",
        "phone_number": {
          "national_number": "string"
        }
      },
      "address": {
        "address_line_1": "string",
        "address_line_2": "string",
        "admin_area_2": "string",
        "admin_area_1": "string",
        "postal_code": "string",
        "country_code": "st"
      },
      "user_name": "string"
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

> 403 Response

```json
{
  "name": "string",
  "message": "string",
  "debug_id": "string",
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "links": [
        {
          "href": "string",
          "rel": "string",
          "method": "GET"
        }
      ],
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
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "links": [
        {
          "href": "string",
          "rel": "string",
          "method": "GET"
        }
      ],
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
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "links": [
        {
          "href": "string",
          "rel": "string",
          "method": "GET"
        }
      ],
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
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "links": [
        {
          "href": "string",
          "rel": "string",
          "method": "GET"
        }
      ],
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

<h3 id="retrieve-a-setup-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Found requested setup-token, returned a payment method associated with the token.|[setup_token_response](#schemasetup_token_response)|
|403|Forbidden|Authorization failed due to insufficient permissions.|[error](#schemaerror)|
|404|Not Found|The specified resource does not exist.|[error](#schemaerror)|
|422|Unprocessable Entity|The requested action could not be performed, semantically incorrect, or failed business validation.|[error](#schemaerror)|
|500|Internal Server Error|An internal server error has occurred.|[error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://uri.paypal.com/services/vault/payment-tokens/read )
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

The account identifier for a PayPal account.

<h2 id="tocS_apple_pay_payment_token_response">apple_pay_payment_token_response</h2>
<!-- backwards compatibility -->
<a id="schemaapple_pay_payment_token_response"></a>
<a id="schema_apple_pay_payment_token_response"></a>
<a id="tocSapple_pay_payment_token_response"></a>
<a id="tocsapple_pay_payment_token_response"></a>

```json
{
  "card": {
    "name": "string",
    "last_digits": "stri",
    "type": "CREDIT",
    "brand": "VISA",
    "billing_address": {
      "address_line_1": "string",
      "address_line_2": "string",
      "admin_area_2": "string",
      "admin_area_1": "string",
      "postal_code": "string",
      "country_code": "st"
    }
  }
}
```

A resource representing a response for Apple Pay.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|card|object|false|none|The payment card to be used to fund a payment. Can be a credit or debit card.|

<h2 id="tocS_billing_cycle">billing_cycle</h2>
<!-- backwards compatibility -->
<a id="schemabilling_cycle"></a>
<a id="schema_billing_cycle"></a>
<a id="tocSbilling_cycle"></a>
<a id="tocsbilling_cycle"></a>

```json
{
  "tenure_type": "REGULAR",
  "pricing_scheme": {
    "price": {
      "currency_code": "str",
      "value": "string"
    },
    "pricing_model": "FIXED",
    "reload_threshold_amount": {
      "currency_code": "str",
      "value": "string"
    }
  },
  "frequency": null,
  "total_cycles": 1,
  "sequence": 1,
  "start_date": "stringstri"
}
```

The billing cycle providing details of the billing frequency, amount, duration and if the billing cycle is a free, discounted or regular billing cycle. The sequence of the billing cycle will be in the following order - free trial billing cycle(s), discounted trial billing cycle(s), regular billing cycle(s).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tenure_type|string|true|none|The tenure type of the billing cycle identifies if the billing cycle is a trial(free or discounted) or regular billing cycle.|
|pricing_scheme|[pricing_scheme](#schemapricing_scheme)|false|none|The active pricing scheme for this billing cycle. A free trial billing cycle does not require a pricing scheme.|
|frequency|[frequency](#schemafrequency)|false|none|The frequency details for this billing cycle.|
|total_cycles|integer(int32)|false|none|The number of times this billing cycle gets executed. Trial billing cycles can only be executed a finite number of times (value between <code>1</code> and <code>999</code> for <code>total_cycles</code>). Regular billing cycles can be executed infinite times (value of <code>0</code> for <code>total_cycles</code>) or a finite number of times (value between <code>1</code> and <code>999</code> for <code>total_cycles</code>).|
|sequence|integer(int32)|false|none|The order in which this cycle is to run among other billing cycles. For example, a trial billing cycle has a `sequence` of `1` while a regular billing cycle has a `sequence` of `2`, so that trial cycle runs before the regular cycle.|
|start_date|[date_no_time](#schemadate_no_time)|false|none|The start date for the billing cycle, in YYYY-MM-DD. This field should be not be provided if the billing cycle starts at the time of checkout. When this field is not provided, the billing cycle amount will be included in any data validations confirming that the total provided by the merchant match the sum of individual items due at the time of checkout. Only one billing cycle (with sequence equal to 1) can have a no start date.|

#### Enumerated Values

|Property|Value|
|---|---|
|tenure_type|REGULAR|
|tenure_type|TRIAL|

<h2 id="tocS_billing_cycle_list">billing_cycle_list</h2>
<!-- backwards compatibility -->
<a id="schemabilling_cycle_list"></a>
<a id="schema_billing_cycle_list"></a>
<a id="tocSbilling_cycle_list"></a>
<a id="tocsbilling_cycle_list"></a>

```json
[
  {
    "tenure_type": "REGULAR",
    "pricing_scheme": {
      "price": {
        "currency_code": "str",
        "value": "string"
      },
      "pricing_model": "FIXED",
      "reload_threshold_amount": {
        "currency_code": "str",
        "value": "string"
      }
    },
    "frequency": null,
    "total_cycles": 1,
    "sequence": 1,
    "start_date": "stringstri"
  }
]
```

An array of billing cycles for trial billing and regular billing. A plan can have at most two trial cycles and only one regular cycle.

<h2 id="tocS_bin_details">bin_details</h2>
<!-- backwards compatibility -->
<a id="schemabin_details"></a>
<a id="schema_bin_details"></a>
<a id="tocSbin_details"></a>
<a id="tocsbin_details"></a>

```json
{
  "bin": "string",
  "issuing_bank": "string",
  "bin_country_code": "st",
  "products": [
    "string"
  ]
}
```

Bank Identification Number (BIN) details used to fund a payment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bin|string|false|none|The Bank Identification Number (BIN) signifies the number that is being used to identify the granular level details (except the PII information) of the card.|
|issuing_bank|string|false|none|The issuer of the card instrument.|
|bin_country_code|[country_code-2](#schemacountry_code-2)|false|none|The [two-character ISO-3166-1 country code](/docs/integration/direct/rest/country-codes/) of the bank.|
|products|[products_list](#schemaproducts_list)|false|none|The type of card product assigned to the BIN by the issuer. These values are defined by the issuer and may change over time. Some examples include: PREPAID_GIFT, CONSUMER, CORPORATE.|

<h2 id="tocS_card_brand">card_brand</h2>
<!-- backwards compatibility -->
<a id="schemacard_brand"></a>
<a id="schema_card_brand"></a>
<a id="tocScard_brand"></a>
<a id="tocscard_brand"></a>

```json
"VISA"
```

The card network or brand. Applies to credit, debit, gift, and payment cards.

<h2 id="tocS_card_response">card_response</h2>
<!-- backwards compatibility -->
<a id="schemacard_response"></a>
<a id="schema_card_response"></a>
<a id="tocScard_response"></a>
<a id="tocscard_response"></a>

```json
{
  "name": "string",
  "last_digits": "stri",
  "brand": "VISA",
  "expiry": "strings",
  "billing_address": {
    "address_line_1": "string",
    "address_line_2": "string",
    "admin_area_2": "string",
    "admin_area_1": "string",
    "postal_code": "string",
    "country_code": "st",
    "id": "string"
  },
  "verification_status": "VERIFIED",
  "verification": {
    "network_transaction_id": "string",
    "date": "stri",
    "network": "VISA",
    "time": "stringstringstringst",
    "amount": {
      "currency_code": "str",
      "value": "string"
    },
    "processor_response": {
      "avs_code": "A",
      "cvv_code": "E"
    },
    "three_d_secure": null
  },
  "network_transaction_reference": {
    "id": "stringstr",
    "date": "stri",
    "network": "VISA",
    "time": "stringstringstringst"
  },
  "authentication_result": {
    "three_d_secure": {
      "authentication_status": "Y",
      "enrollment_status": "Y",
      "authentication_id": "string"
    }
  },
  "bin_details": {
    "bin": "string",
    "issuing_bank": "string",
    "bin_country_code": "st",
    "products": [
      "string"
    ]
  },
  "type": "CREDIT",
  "network_token": null
}
```

Full representation of a Card Payment Token including network token.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The card holder's name as it appears on the card.|
|last_digits|string|false|read-only|The last digits of the payment card.|
|brand|[card_brand](#schemacard_brand)|false|none|The card brand or network. Typically used in the response.|
|expiry|[date_year_month](#schemadate_year_month)|false|none|The card expiration year and month, in [Internet date format](https://tools.ietf.org/html/rfc3339#section-5.6).|
|billing_address|object|false|none|Address request details.|
|verification_status|[card_verification_status](#schemacard_verification_status)|false|none|Card Verification status.|
|verification|[card_verification_details](#schemacard_verification_details)|false|none|Card Verification details including the authorization details and 3D SECURE details.|
|network_transaction_reference|[network_transaction_reference_response](#schemanetwork_transaction_reference_response)|false|none|Previous network transaction reference including id in response.|
|authentication_result|object|false|none|Results of Authentication such as 3D Secure.|
|bin_details|[bin_details](#schemabin_details)|false|none|Bank Identification Number (BIN) details used to fund a payment.|
|type|[card_type](#schemacard_type)|false|none|The payment card type.|
|network_token|[network_token_entity](#schemanetwork_token_entity)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|brand|VISA|
|brand|MASTERCARD|
|brand|DISCOVER|
|brand|AMEX|
|brand|SOLO|
|brand|JCB|
|brand|STAR|
|brand|DELTA|
|brand|SWITCH|
|brand|MAESTRO|
|brand|CB_NATIONALE|
|brand|CONFIGOGA|
|brand|CONFIDIS|
|brand|ELECTRON|
|brand|CETELEM|
|brand|CHINA_UNION_PAY|
|brand|DINERS|
|brand|ELO|
|brand|HIPER|
|brand|HIPERCARD|
|brand|RUPAY|
|brand|GE|
|brand|SYNCHRONY|
|brand|EFTPOS|
|brand|UNKNOWN|
|verification_status|VERIFIED|
|verification_status|FAILED|
|type|CREDIT|
|type|DEBIT|
|type|PREPAID|
|type|STORE|
|type|UNKNOWN|

<h2 id="tocS_card_response_entity">card_response_entity</h2>
<!-- backwards compatibility -->
<a id="schemacard_response_entity"></a>
<a id="schema_card_response_entity"></a>
<a id="tocScard_response_entity"></a>
<a id="tocscard_response_entity"></a>

```json
{
  "name": "string",
  "last_digits": "stri",
  "brand": "VISA",
  "expiry": "strings",
  "billing_address": {
    "address_line_1": "string",
    "address_line_2": "string",
    "admin_area_2": "string",
    "admin_area_1": "string",
    "postal_code": "string",
    "country_code": "st",
    "id": "string"
  },
  "verification_status": "VERIFIED",
  "verification": {
    "network_transaction_id": "string",
    "date": "stri",
    "network": "VISA",
    "time": "stringstringstringst",
    "amount": {
      "currency_code": "str",
      "value": "string"
    },
    "processor_response": {
      "avs_code": "A",
      "cvv_code": "E"
    },
    "three_d_secure": null
  },
  "network_transaction_reference": {
    "id": "stringstr",
    "date": "stri",
    "network": "VISA",
    "time": "stringstringstringst"
  },
  "authentication_result": {
    "three_d_secure": {
      "authentication_status": "Y",
      "enrollment_status": "Y",
      "authentication_id": "string"
    }
  },
  "bin_details": {
    "bin": "string",
    "issuing_bank": "string",
    "bin_country_code": "st",
    "products": [
      "string"
    ]
  },
  "type": "CREDIT"
}
```

Full representation of a Card Payment Token.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The card holder's name as it appears on the card.|
|last_digits|string|false|read-only|The last digits of the payment card.|
|brand|[card_brand](#schemacard_brand)|false|none|The card brand or network. Typically used in the response.|
|expiry|[date_year_month](#schemadate_year_month)|false|none|The card expiration year and month, in [Internet date format](https://tools.ietf.org/html/rfc3339#section-5.6).|
|billing_address|object|false|none|Address request details.|
|verification_status|[card_verification_status](#schemacard_verification_status)|false|none|Card Verification status.|
|verification|[card_verification_details](#schemacard_verification_details)|false|none|Card Verification details including the authorization details and 3D SECURE details.|
|network_transaction_reference|[network_transaction_reference_response](#schemanetwork_transaction_reference_response)|false|none|Previous network transaction reference including id in response.|
|authentication_result|object|false|none|Results of Authentication such as 3D Secure.|
|bin_details|[bin_details](#schemabin_details)|false|none|Bank Identification Number (BIN) details used to fund a payment.|
|type|[card_type](#schemacard_type)|false|none|The payment card type.|

#### Enumerated Values

|Property|Value|
|---|---|
|brand|VISA|
|brand|MASTERCARD|
|brand|DISCOVER|
|brand|AMEX|
|brand|SOLO|
|brand|JCB|
|brand|STAR|
|brand|DELTA|
|brand|SWITCH|
|brand|MAESTRO|
|brand|CB_NATIONALE|
|brand|CONFIGOGA|
|brand|CONFIDIS|
|brand|ELECTRON|
|brand|CETELEM|
|brand|CHINA_UNION_PAY|
|brand|DINERS|
|brand|ELO|
|brand|HIPER|
|brand|HIPERCARD|
|brand|RUPAY|
|brand|GE|
|brand|SYNCHRONY|
|brand|EFTPOS|
|brand|UNKNOWN|
|verification_status|VERIFIED|
|verification_status|FAILED|
|type|CREDIT|
|type|DEBIT|
|type|PREPAID|
|type|STORE|
|type|UNKNOWN|

<h2 id="tocS_card_type">card_type</h2>
<!-- backwards compatibility -->
<a id="schemacard_type"></a>
<a id="schema_card_type"></a>
<a id="tocScard_type"></a>
<a id="tocscard_type"></a>

```json
"CREDIT"
```

Type of card. i.e Credit, Debit and so on.

<h2 id="tocS_card_verification_details">card_verification_details</h2>
<!-- backwards compatibility -->
<a id="schemacard_verification_details"></a>
<a id="schema_card_verification_details"></a>
<a id="tocScard_verification_details"></a>
<a id="tocscard_verification_details"></a>

```json
{
  "network_transaction_id": "string",
  "date": "stri",
  "network": "VISA",
  "time": "stringstringstringst",
  "amount": {
    "currency_code": "str",
    "value": "string"
  },
  "processor_response": {
    "avs_code": "A",
    "cvv_code": "E"
  },
  "three_d_secure": null
}
```

Card Verification details including the authorization details and 3D SECURE details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|network_transaction_id|string|false|none|**Deprecated.** DEPRECATED. This field is DEPRECATED. Please find the network transaction id data in the 'id' field under the 'network_transaction_reference' object instead of the 'verification' object.|
|date|string|false|none|**Deprecated.** DEPRECATED. This field is DEPRECATED. Please find the date data in the 'date' field under the 'network_transaction_reference' object instead of the 'verification' object.|
|network|[card_brand](#schemacard_brand)|false|none|**Deprecated.** DEPRECATED. This field is DEPRECATED. Please find the network data in the 'network' field under the 'network_transaction_reference' object instead of the 'verification' object.|
|time|[date_time](#schemadate_time)|false|none|**Deprecated.** DEPRECATED. This field is DEPRECATED. Please find the time data in the 'time' field under the 'network_transaction_reference' object instead of the 'verification' object.|
|amount|[money](#schemamoney)|false|none|The amount used for card verification.|
|processor_response|object|false|none|The processor response information for payment requests, such as direct credit card transactions.|
|three_d_secure|object|false|none|**Deprecated.** DEPRECATED. This field is DEPRECATED. Please find the 3D secure authentication data in the 'three_d_secure' object under the 'authentication_result' object instead of the 'verification' object.|

#### Enumerated Values

|Property|Value|
|---|---|
|network|VISA|
|network|MASTERCARD|
|network|DISCOVER|
|network|AMEX|
|network|SOLO|
|network|JCB|
|network|STAR|
|network|DELTA|
|network|SWITCH|
|network|MAESTRO|
|network|CB_NATIONALE|
|network|CONFIGOGA|
|network|CONFIDIS|
|network|ELECTRON|
|network|CETELEM|
|network|CHINA_UNION_PAY|
|network|DINERS|
|network|ELO|
|network|HIPER|
|network|HIPERCARD|
|network|RUPAY|
|network|GE|
|network|SYNCHRONY|
|network|EFTPOS|
|network|UNKNOWN|

<h2 id="tocS_card_verification_method">card_verification_method</h2>
<!-- backwards compatibility -->
<a id="schemacard_verification_method"></a>
<a id="schema_card_verification_method"></a>
<a id="tocScard_verification_method"></a>
<a id="tocscard_verification_method"></a>

```json
"SCA_WHEN_REQUIRED"
```

The verification method of the card.

<h2 id="tocS_card_verification_status">card_verification_status</h2>
<!-- backwards compatibility -->
<a id="schemacard_verification_status"></a>
<a id="schema_card_verification_status"></a>
<a id="tocScard_verification_status"></a>
<a id="tocscard_verification_status"></a>

```json
"VERIFIED"
```

Verification status of Card.

<h2 id="tocS_country_code">country_code</h2>
<!-- backwards compatibility -->
<a id="schemacountry_code"></a>
<a id="schema_country_code"></a>
<a id="tocScountry_code"></a>
<a id="tocscountry_code"></a>

```json
"st"
```

The [2-character ISO 3166-1 code](/api/rest/reference/country-codes/) that identifies the country or region.<blockquote><strong>Note:</strong> The country code for Great Britain is <code>GB</code> and not <code>UK</code> as used in the top-level domain names for that country. Use the `C2` country code for China worldwide for comparable uncontrolled price (CUP) method, bank card, and cross-border transactions.</blockquote>

<h2 id="tocS_country_code-2">country_code-2</h2>
<!-- backwards compatibility -->
<a id="schemacountry_code-2"></a>
<a id="schema_country_code-2"></a>
<a id="tocScountry_code-2"></a>
<a id="tocscountry_code-2"></a>

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

<h2 id="tocS_customer">customer</h2>
<!-- backwards compatibility -->
<a id="schemacustomer"></a>
<a id="schema_customer"></a>
<a id="tocScustomer"></a>
<a id="tocscustomer"></a>

```json
{
  "id": "string",
  "merchant_customer_id": "string"
}
```

This object defines a customer in your system. Use it to manage customer profiles, save payment methods and contact details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[merchant_partner_customer_id](#schemamerchant_partner_customer_id)|false|none|The unique ID for a customer in merchant's or partner's system of records.|
|merchant_customer_id|string|false|none|Merchants and partners may already have a data-store where their customer information is persisted. Use merchant_customer_id to associate the PayPal-generated customer.id to your representation of a customer.|

<h2 id="tocS_customer_vault_payment_tokens_response">customer_vault_payment_tokens_response</h2>
<!-- backwards compatibility -->
<a id="schemacustomer_vault_payment_tokens_response"></a>
<a id="schema_customer_vault_payment_tokens_response"></a>
<a id="tocScustomer_vault_payment_tokens_response"></a>
<a id="tocscustomer_vault_payment_tokens_response"></a>

```json
{
  "total_items": 1,
  "total_pages": 1,
  "customer": {
    "id": "string",
    "merchant_customer_id": "string"
  },
  "payment_tokens": [
    {
      "id": "string",
      "customer": {
        "id": "string",
        "merchant_customer_id": "string"
      },
      "payment_source": {
        "card": {
          "name": "string",
          "last_digits": "stri",
          "brand": "VISA",
          "expiry": "strings",
          "billing_address": {
            "address_line_1": "string",
            "address_line_2": "string",
            "admin_area_2": "string",
            "admin_area_1": "string",
            "postal_code": "string",
            "country_code": "st",
            "id": "string"
          },
          "verification_status": "VERIFIED",
          "verification": {
            "network_transaction_id": "string",
            "date": "stri",
            "network": "VISA",
            "time": "stringstringstringst",
            "amount": {
              "currency_code": "str",
              "value": "string"
            },
            "processor_response": {
              "avs_code": "A",
              "cvv_code": "E"
            },
            "three_d_secure": null
          },
          "network_transaction_reference": {
            "id": "stringstr",
            "date": "stri",
            "network": "VISA",
            "time": "stringstringstringst"
          },
          "authentication_result": {
            "three_d_secure": {
              "authentication_status": "Y",
              "enrollment_status": "Y",
              "authentication_id": "string"
            }
          },
          "bin_details": {
            "bin": "string",
            "issuing_bank": "string",
            "bin_country_code": "st",
            "products": [
              "string"
            ]
          },
          "type": "CREDIT",
          "network_token": null
        },
        "paypal": {
          "description": "string",
          "usage_pattern": "IMMEDIATE",
          "shipping": {
            "name": {
              "full_name": "string"
            },
            "phone_number": {
              "country_code": "str",
              "national_number": "string"
            },
            "type": "SHIPPING",
            "address": {
              "address_line_1": "string",
              "address_line_2": "string",
              "admin_area_2": "string",
              "admin_area_1": "string",
              "postal_code": "string",
              "country_code": "st"
            }
          },
          "permit_multiple_payment_tokens": false,
          "usage_type": "MERCHANT",
          "customer_type": "CONSUMER",
          "email_address": "string",
          "payer_id": "stringstrings",
          "name": {
            "given_name": "string",
            "surname": "string"
          },
          "phone": {
            "phone_type": "FAX",
            "phone_number": {
              "national_number": "string"
            }
          },
          "address": {
            "address_line_1": "string",
            "address_line_2": "string",
            "admin_area_2": "string",
            "admin_area_1": "string",
            "postal_code": "string",
            "country_code": "st"
          },
          "account_id": "stringstrings",
          "phone_number": {
            "country_code": "str",
            "national_number": "string",
            "extension_number": "string"
          }
        },
        "venmo": {
          "description": "string",
          "usage_pattern": "IMMEDIATE",
          "shipping": {
            "name": {
              "full_name": "string"
            },
            "phone_number": {
              "country_code": "str",
              "national_number": "string"
            },
            "type": "SHIPPING",
            "address": {
              "address_line_1": "string",
              "address_line_2": "string",
              "admin_area_2": "string",
              "admin_area_1": "string",
              "postal_code": "string",
              "country_code": "st"
            }
          },
          "permit_multiple_payment_tokens": false,
          "usage_type": "MERCHANT",
          "customer_type": "CONSUMER",
          "email_address": "string",
          "payer_id": "stringstrings",
          "name": {
            "given_name": "string",
            "surname": "string"
          },
          "phone": {
            "phone_type": "FAX",
            "phone_number": {
              "national_number": "string"
            }
          },
          "address": {
            "address_line_1": "string",
            "address_line_2": "string",
            "admin_area_2": "string",
            "admin_area_1": "string",
            "postal_code": "string",
            "country_code": "st"
          },
          "user_name": "string"
        },
        "apple_pay": {
          "card": {
            "name": "string",
            "last_digits": "stri",
            "type": "CREDIT",
            "brand": "VISA",
            "billing_address": {
              "address_line_1": "string",
              "address_line_2": "string",
              "admin_area_2": "string",
              "admin_area_1": "string",
              "postal_code": "string",
              "country_code": "st"
            }
          }
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

Collection of payment tokens saved for a given customer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|total_items|integer|false|none|Total number of items.|
|total_pages|integer|false|none|Total number of pages.|
|customer|object|false|none|This object defines a customer in your system. Use it to manage customer profiles, save payment methods and contact details.|
|payment_tokens|[payment_token_response_list](#schemapayment_token_response_list)|false|none|none|
|links|[link_description_list](#schemalink_description_list)|false|read-only|An array of related [HATEOAS links](/api/rest/responses/#hateoas).|

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

<h2 id="tocS_date_year_month">date_year_month</h2>
<!-- backwards compatibility -->
<a id="schemadate_year_month"></a>
<a id="schema_date_year_month"></a>
<a id="tocSdate_year_month"></a>
<a id="tocsdate_year_month"></a>

```json
"strings"
```

The year and month, in ISO-8601 `YYYY-MM` date format. See [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).

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

An array of request-related [HATEOAS links](/api/rest/responses/#hateoas-links) that are either relevant to the issue by providing additional information or offering potential resolutions.

<h2 id="tocS_definitions-payment_source">definitions-payment_source</h2>
<!-- backwards compatibility -->
<a id="schemadefinitions-payment_source"></a>
<a id="schema_definitions-payment_source"></a>
<a id="tocSdefinitions-payment_source"></a>
<a id="tocsdefinitions-payment_source"></a>

```json
{
  "card": {
    "name": "string",
    "number": "stringstrings",
    "expiry": "strings",
    "security_code": "stri",
    "brand": "VISA",
    "billing_address": {
      "address_line_1": "string",
      "address_line_2": "string",
      "admin_area_2": "string",
      "admin_area_1": "string",
      "postal_code": "string",
      "country_code": "st"
    },
    "network_transaction_reference": null
  },
  "token": {
    "id": "string",
    "type": "SETUP_TOKEN"
  }
}
```

The payment method to vault with the instrument details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|card|object|false|none|A Resource representing a request to vault a Card.|
|token|[token_id_request](#schematoken_id_request)|false|none|The Tokenized Payment Source representing a Request to Vault a Token.|

<h2 id="tocS_email">email</h2>
<!-- backwards compatibility -->
<a id="schemaemail"></a>
<a id="schema_email"></a>
<a id="tocSemail"></a>
<a id="tocsemail"></a>

```json
"string"
```

The internationalized email address.<blockquote><strong>Note:</strong> Up to 64 characters are allowed before and 255 characters are allowed after the <code>@</code> sign. However, the generally accepted maximum length for an email address is 254 characters. The pattern verifies that an unquoted <code>@</code> sign exists.</blockquote>

<h2 id="tocS_enrolled">enrolled</h2>
<!-- backwards compatibility -->
<a id="schemaenrolled"></a>
<a id="schema_enrolled"></a>
<a id="tocSenrolled"></a>
<a id="tocsenrolled"></a>

```json
"Y"
```

Status of Authentication eligibility.

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
  "details": [
    {
      "field": "string",
      "value": "string",
      "location": "body",
      "issue": "string",
      "links": [
        {
          "href": "string",
          "rel": "string",
          "method": "GET"
        }
      ],
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
|details|[error_details_list](#schemaerror_details_list)|false|none|An array of additional details about the error.|
|links|[error_definitions-link_description_list](#schemaerror_definitions-link_description_list)|false|read-only|An array of request-related [HATEOAS links](/api/rest/responses/#hateoas-links).|

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

<h2 id="tocS_error_definitions-link_description_list">error_definitions-link_description_list</h2>
<!-- backwards compatibility -->
<a id="schemaerror_definitions-link_description_list"></a>
<a id="schema_error_definitions-link_description_list"></a>
<a id="tocSerror_definitions-link_description_list"></a>
<a id="tocserror_definitions-link_description_list"></a>

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
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ],
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
|links|[definitions-link_description_list](#schemadefinitions-link_description_list)|false|read-only|An array of request-related [HATEOAS links](/api/rest/responses/#hateoas-links) that are either relevant to the issue by providing additional information or offering potential resolutions.|
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
    "links": [
      {
        "href": "string",
        "rel": "string",
        "method": "GET"
      }
    ],
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

<h2 id="tocS_experience_context">experience_context</h2>
<!-- backwards compatibility -->
<a id="schemaexperience_context"></a>
<a id="schema_experience_context"></a>
<a id="tocSexperience_context"></a>
<a id="tocsexperience_context"></a>

```json
{
  "brand_name": "string",
  "locale": "string",
  "return_url": "http://example.com",
  "cancel_url": "http://example.com",
  "shipping_preference": "GET_FROM_FILE",
  "vault_instruction": "ON_CREATE_PAYMENT_TOKENS"
}
```

Customizes the Vault creation flow experience for your customers.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|brand_name|string|false|none|The label that overrides the business name in the PayPal account on the PayPal site. The pattern is defined by an external party and supports Unicode.|
|locale|[language](#schemalanguage)|false|none|The BCP 47-formatted locale of pages that the PayPal vaulting experience shows. PayPal supports a five-character code. For example, `DA-DK`, `HE-IL`, `ID-ID`, `JA-JP`, `NO-NO`, `PT-BR`, `RU-RU`, `SV-SE`, `TH-TH`, `ZH-CN`, `ZH-HK`, or `ZH-TW`.|
|return_url|string(uri)|false|none|The URL where the customer is redirected after customer approves leaves the flow. It is a required field for contingency flows like PayPal wallet, 3DS.|
|cancel_url|string(uri)|false|none|The URL where the customer is redirected after customer cancels or leaves the flow. It is a required field for contingency flows like PayPal wallet, 3DS.|
|shipping_preference|string|false|none|The shipping preference. This only applies to PayPal payment source.|
|vault_instruction|[vault_instruction](#schemavault_instruction)|false|none|Vault Instruction on action to be performed after a successful payer approval.|

#### Enumerated Values

|Property|Value|
|---|---|
|shipping_preference|GET_FROM_FILE|
|shipping_preference|NO_SHIPPING|
|shipping_preference|SET_PROVIDED_ADDRESS|
|vault_instruction|ON_CREATE_PAYMENT_TOKENS|
|vault_instruction|ON_PAYER_APPROVAL|

<h2 id="tocS_frequency">frequency</h2>
<!-- backwards compatibility -->
<a id="schemafrequency"></a>
<a id="schema_frequency"></a>
<a id="tocSfrequency"></a>
<a id="tocsfrequency"></a>

```json
null
```

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

An array of related [HATEOAS links](/api/rest/responses/#hateoas).

<h2 id="tocS_merchant_partner_customer_id">merchant_partner_customer_id</h2>
<!-- backwards compatibility -->
<a id="schemamerchant_partner_customer_id"></a>
<a id="schema_merchant_partner_customer_id"></a>
<a id="tocSmerchant_partner_customer_id"></a>
<a id="tocsmerchant_partner_customer_id"></a>

```json
"string"
```

The unique ID for a customer generated by PayPal.

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

<h2 id="tocS_network_token_entity">network_token_entity</h2>
<!-- backwards compatibility -->
<a id="schemanetwork_token_entity"></a>
<a id="schema_network_token_entity"></a>
<a id="tocSnetwork_token_entity"></a>
<a id="tocsnetwork_token_entity"></a>

```json
null
```

<h2 id="tocS_network_transaction_reference_entity">network_transaction_reference_entity</h2>
<!-- backwards compatibility -->
<a id="schemanetwork_transaction_reference_entity"></a>
<a id="schema_network_transaction_reference_entity"></a>
<a id="tocSnetwork_transaction_reference_entity"></a>
<a id="tocsnetwork_transaction_reference_entity"></a>

```json
{
  "id": "stringstr",
  "date": "stri",
  "network": "VISA",
  "time": "stringstringstringst"
}
```

Previous network transaction reference including id and network.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Transaction reference id returned by the scheme. For Visa and Amex, this is the "Tran id" field in response. For MasterCard, this is the "BankNet reference id" field in response. For Discover, this is the "NRID" field in response. The pattern we expect for this field from Visa/Amex/CB/Discover is numeric, Mastercard/BNPP is alphanumeric and Paysecure is alphanumeric with special character -.|
|date|string|false|none|The date that the transaction was authorized by the scheme. This field may not be returned for all networks. MasterCard refers to this field as "BankNet reference date.|
|network|[card_brand](#schemacard_brand)|false|none|Name of the card network through which the transaction was routed.|
|time|[date_time](#schemadate_time)|false|none|The date and time when the instrument was verified.|

#### Enumerated Values

|Property|Value|
|---|---|
|network|VISA|
|network|MASTERCARD|
|network|DISCOVER|
|network|AMEX|
|network|SOLO|
|network|JCB|
|network|STAR|
|network|DELTA|
|network|SWITCH|
|network|MAESTRO|
|network|CB_NATIONALE|
|network|CONFIGOGA|
|network|CONFIDIS|
|network|ELECTRON|
|network|CETELEM|
|network|CHINA_UNION_PAY|
|network|DINERS|
|network|ELO|
|network|HIPER|
|network|HIPERCARD|
|network|RUPAY|
|network|GE|
|network|SYNCHRONY|
|network|EFTPOS|
|network|UNKNOWN|

<h2 id="tocS_network_transaction_reference_request">network_transaction_reference_request</h2>
<!-- backwards compatibility -->
<a id="schemanetwork_transaction_reference_request"></a>
<a id="schema_network_transaction_reference_request"></a>
<a id="tocSnetwork_transaction_reference_request"></a>
<a id="tocsnetwork_transaction_reference_request"></a>

```json
null
```

<h2 id="tocS_network_transaction_reference_response">network_transaction_reference_response</h2>
<!-- backwards compatibility -->
<a id="schemanetwork_transaction_reference_response"></a>
<a id="schema_network_transaction_reference_response"></a>
<a id="tocSnetwork_transaction_reference_response"></a>
<a id="tocsnetwork_transaction_reference_response"></a>

```json
{
  "id": "stringstr",
  "date": "stri",
  "network": "VISA",
  "time": "stringstringstringst"
}
```

Previous network transaction reference including id in response.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Transaction reference id returned by the scheme. For Visa and Amex, this is the "Tran id" field in response. For MasterCard, this is the "BankNet reference id" field in response. For Discover, this is the "NRID" field in response. The pattern we expect for this field from Visa/Amex/CB/Discover is numeric, Mastercard/BNPP is alphanumeric and Paysecure is alphanumeric with special character -.|
|date|string|false|none|The date that the transaction was authorized by the scheme. This field may not be returned for all networks. MasterCard refers to this field as "BankNet reference date.|
|network|[card_brand](#schemacard_brand)|false|none|Name of the card network through which the transaction was routed.|
|time|[date_time](#schemadate_time)|false|none|The date and time when the instrument was verified.|

#### Enumerated Values

|Property|Value|
|---|---|
|network|VISA|
|network|MASTERCARD|
|network|DISCOVER|
|network|AMEX|
|network|SOLO|
|network|JCB|
|network|STAR|
|network|DELTA|
|network|SWITCH|
|network|MAESTRO|
|network|CB_NATIONALE|
|network|CONFIGOGA|
|network|CONFIDIS|
|network|ELECTRON|
|network|CETELEM|
|network|CHINA_UNION_PAY|
|network|DINERS|
|network|ELO|
|network|HIPER|
|network|HIPERCARD|
|network|RUPAY|
|network|GE|
|network|SYNCHRONY|
|network|EFTPOS|
|network|UNKNOWN|

<h2 id="tocS_one_time_charges">one_time_charges</h2>
<!-- backwards compatibility -->
<a id="schemaone_time_charges"></a>
<a id="schema_one_time_charges"></a>
<a id="tocSone_time_charges"></a>
<a id="tocsone_time_charges"></a>

```json
{
  "setup_fee": {
    "currency_code": "str",
    "value": "string"
  },
  "shipping_amount": {
    "currency_code": "str",
    "value": "string"
  },
  "taxes": {
    "currency_code": "str",
    "value": "string"
  },
  "product_price": {
    "currency_code": "str",
    "value": "string"
  },
  "subtotal": {
    "currency_code": "str",
    "value": "string"
  },
  "total_amount": {
    "currency_code": "str",
    "value": "string"
  }
}
```

The one-time charge info at the time of checkout.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|setup_fee|[money](#schemamoney)|false|none|The setup fee for the recurring plan.|
|shipping_amount|[money](#schemamoney)|false|none|The shipping amount due at the time of checkout.|
|taxes|[money](#schemamoney)|false|none|The taxes due at the time of checkout.|
|product_price|[money](#schemamoney)|false|none|The product price for any one-time product purchased at the time of checkout.|
|subtotal|[money](#schemamoney)|false|none|The subtotal at the time of checkout. This is calculated by using the formula x + y + z where x is first-recurring-charge, y is setup-fee and z is item-price.|
|total_amount|[money](#schemamoney)|true|none|The total amount at the time of checkout. This is calculated by using the formula x + y + z where x is subtotal, y is shipping-amount and z is taxes.|

<h2 id="tocS_pares_status">pares_status</h2>
<!-- backwards compatibility -->
<a id="schemapares_status"></a>
<a id="schema_pares_status"></a>
<a id="tocSpares_status"></a>
<a id="tocspares_status"></a>

```json
"Y"
```

Transactions status result identifier. The outcome of the issuer's authentication.

<h2 id="tocS_payer_base">payer_base</h2>
<!-- backwards compatibility -->
<a id="schemapayer_base"></a>
<a id="schema_payer_base"></a>
<a id="tocSpayer_base"></a>
<a id="tocspayer_base"></a>

```json
{
  "email_address": "string",
  "payer_id": "stringstrings"
}
```

The customer who approves and pays for the order. The customer is also known as the payer.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email_address|[email](#schemaemail)|false|none|The email address of the payer.|
|payer_id|[account_id](#schemaaccount_id)|false|none|The PayPal-assigned ID for the payer.|

<h2 id="tocS_payment_source">payment_source</h2>
<!-- backwards compatibility -->
<a id="schemapayment_source"></a>
<a id="schema_payment_source"></a>
<a id="tocSpayment_source"></a>
<a id="tocspayment_source"></a>

```json
{
  "card": {
    "name": "string",
    "last_digits": "stri",
    "brand": "VISA",
    "expiry": "strings",
    "billing_address": {
      "address_line_1": "string",
      "address_line_2": "string",
      "admin_area_2": "string",
      "admin_area_1": "string",
      "postal_code": "string",
      "country_code": "st",
      "id": "string"
    },
    "verification_status": "VERIFIED",
    "verification": {
      "network_transaction_id": "string",
      "date": "stri",
      "network": "VISA",
      "time": "stringstringstringst",
      "amount": {
        "currency_code": "str",
        "value": "string"
      },
      "processor_response": {
        "avs_code": "A",
        "cvv_code": "E"
      },
      "three_d_secure": null
    },
    "network_transaction_reference": {
      "id": "stringstr",
      "date": "stri",
      "network": "VISA",
      "time": "stringstringstringst"
    },
    "authentication_result": {
      "three_d_secure": {
        "authentication_status": "Y",
        "enrollment_status": "Y",
        "authentication_id": "string"
      }
    },
    "bin_details": {
      "bin": "string",
      "issuing_bank": "string",
      "bin_country_code": "st",
      "products": [
        "string"
      ]
    },
    "type": "CREDIT",
    "network_token": null
  },
  "paypal": {
    "description": "string",
    "usage_pattern": "IMMEDIATE",
    "shipping": {
      "name": {
        "full_name": "string"
      },
      "phone_number": {
        "country_code": "str",
        "national_number": "string"
      },
      "type": "SHIPPING",
      "address": {
        "address_line_1": "string",
        "address_line_2": "string",
        "admin_area_2": "string",
        "admin_area_1": "string",
        "postal_code": "string",
        "country_code": "st"
      }
    },
    "permit_multiple_payment_tokens": false,
    "usage_type": "MERCHANT",
    "customer_type": "CONSUMER",
    "email_address": "string",
    "payer_id": "stringstrings",
    "name": {
      "given_name": "string",
      "surname": "string"
    },
    "phone": {
      "phone_type": "FAX",
      "phone_number": {
        "national_number": "string"
      }
    },
    "address": {
      "address_line_1": "string",
      "address_line_2": "string",
      "admin_area_2": "string",
      "admin_area_1": "string",
      "postal_code": "string",
      "country_code": "st"
    },
    "account_id": "stringstrings",
    "phone_number": {
      "country_code": "str",
      "national_number": "string",
      "extension_number": "string"
    }
  },
  "venmo": {
    "description": "string",
    "usage_pattern": "IMMEDIATE",
    "shipping": {
      "name": {
        "full_name": "string"
      },
      "phone_number": {
        "country_code": "str",
        "national_number": "string"
      },
      "type": "SHIPPING",
      "address": {
        "address_line_1": "string",
        "address_line_2": "string",
        "admin_area_2": "string",
        "admin_area_1": "string",
        "postal_code": "string",
        "country_code": "st"
      }
    },
    "permit_multiple_payment_tokens": false,
    "usage_type": "MERCHANT",
    "customer_type": "CONSUMER",
    "email_address": "string",
    "payer_id": "stringstrings",
    "name": {
      "given_name": "string",
      "surname": "string"
    },
    "phone": {
      "phone_type": "FAX",
      "phone_number": {
        "national_number": "string"
      }
    },
    "address": {
      "address_line_1": "string",
      "address_line_2": "string",
      "admin_area_2": "string",
      "admin_area_1": "string",
      "postal_code": "string",
      "country_code": "st"
    },
    "user_name": "string"
  },
  "apple_pay": {
    "card": {
      "name": "string",
      "last_digits": "stri",
      "type": "CREDIT",
      "brand": "VISA",
      "billing_address": {
        "address_line_1": "string",
        "address_line_2": "string",
        "admin_area_2": "string",
        "admin_area_1": "string",
        "postal_code": "string",
        "country_code": "st"
      }
    }
  }
}
```

The vaulted payment method details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|card|[card_response](#schemacard_response)|false|none|Full representation of a Card Payment Token including network token.|
|paypal|[paypal_wallet_response](#schemapaypal_wallet_response)|false|none|none|
|venmo|[venmo_response](#schemavenmo_response)|false|none|none|
|apple_pay|[apple_pay_payment_token_response](#schemaapple_pay_payment_token_response)|false|none|A resource representing a response for Apple Pay.|

<h2 id="tocS_payment_token_request">payment_token_request</h2>
<!-- backwards compatibility -->
<a id="schemapayment_token_request"></a>
<a id="schema_payment_token_request"></a>
<a id="tocSpayment_token_request"></a>
<a id="tocspayment_token_request"></a>

```json
{
  "customer": {
    "id": "string",
    "merchant_customer_id": "string"
  },
  "payment_source": {
    "card": {
      "name": "string",
      "number": "stringstrings",
      "expiry": "strings",
      "security_code": "stri",
      "brand": "VISA",
      "billing_address": {
        "address_line_1": "string",
        "address_line_2": "string",
        "admin_area_2": "string",
        "admin_area_1": "string",
        "postal_code": "string",
        "country_code": "st"
      },
      "network_transaction_reference": null
    },
    "token": {
      "id": "string",
      "type": "SETUP_TOKEN"
    }
  }
}
```

Payment Token Request where the `source` defines the type of instrument to be stored.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customer|object|false|none|This object defines a customer in your system. Use it to manage customer profiles, save payment methods and contact details.|
|payment_source|[definitions-payment_source](#schemadefinitions-payment_source)|true|none|The payment method to vault with the instrument details.|

<h2 id="tocS_payment_token_response">payment_token_response</h2>
<!-- backwards compatibility -->
<a id="schemapayment_token_response"></a>
<a id="schema_payment_token_response"></a>
<a id="tocSpayment_token_response"></a>
<a id="tocspayment_token_response"></a>

```json
{
  "id": "string",
  "customer": {
    "id": "string",
    "merchant_customer_id": "string"
  },
  "payment_source": {
    "card": {
      "name": "string",
      "last_digits": "stri",
      "brand": "VISA",
      "expiry": "strings",
      "billing_address": {
        "address_line_1": "string",
        "address_line_2": "string",
        "admin_area_2": "string",
        "admin_area_1": "string",
        "postal_code": "string",
        "country_code": "st",
        "id": "string"
      },
      "verification_status": "VERIFIED",
      "verification": {
        "network_transaction_id": "string",
        "date": "stri",
        "network": "VISA",
        "time": "stringstringstringst",
        "amount": {
          "currency_code": "str",
          "value": "string"
        },
        "processor_response": {
          "avs_code": "A",
          "cvv_code": "E"
        },
        "three_d_secure": null
      },
      "network_transaction_reference": {
        "id": "stringstr",
        "date": "stri",
        "network": "VISA",
        "time": "stringstringstringst"
      },
      "authentication_result": {
        "three_d_secure": {
          "authentication_status": "Y",
          "enrollment_status": "Y",
          "authentication_id": "string"
        }
      },
      "bin_details": {
        "bin": "string",
        "issuing_bank": "string",
        "bin_country_code": "st",
        "products": [
          "string"
        ]
      },
      "type": "CREDIT",
      "network_token": null
    },
    "paypal": {
      "description": "string",
      "usage_pattern": "IMMEDIATE",
      "shipping": {
        "name": {
          "full_name": "string"
        },
        "phone_number": {
          "country_code": "str",
          "national_number": "string"
        },
        "type": "SHIPPING",
        "address": {
          "address_line_1": "string",
          "address_line_2": "string",
          "admin_area_2": "string",
          "admin_area_1": "string",
          "postal_code": "string",
          "country_code": "st"
        }
      },
      "permit_multiple_payment_tokens": false,
      "usage_type": "MERCHANT",
      "customer_type": "CONSUMER",
      "email_address": "string",
      "payer_id": "stringstrings",
      "name": {
        "given_name": "string",
        "surname": "string"
      },
      "phone": {
        "phone_type": "FAX",
        "phone_number": {
          "national_number": "string"
        }
      },
      "address": {
        "address_line_1": "string",
        "address_line_2": "string",
        "admin_area_2": "string",
        "admin_area_1": "string",
        "postal_code": "string",
        "country_code": "st"
      },
      "account_id": "stringstrings",
      "phone_number": {
        "country_code": "str",
        "national_number": "string",
        "extension_number": "string"
      }
    },
    "venmo": {
      "description": "string",
      "usage_pattern": "IMMEDIATE",
      "shipping": {
        "name": {
          "full_name": "string"
        },
        "phone_number": {
          "country_code": "str",
          "national_number": "string"
        },
        "type": "SHIPPING",
        "address": {
          "address_line_1": "string",
          "address_line_2": "string",
          "admin_area_2": "string",
          "admin_area_1": "string",
          "postal_code": "string",
          "country_code": "st"
        }
      },
      "permit_multiple_payment_tokens": false,
      "usage_type": "MERCHANT",
      "customer_type": "CONSUMER",
      "email_address": "string",
      "payer_id": "stringstrings",
      "name": {
        "given_name": "string",
        "surname": "string"
      },
      "phone": {
        "phone_type": "FAX",
        "phone_number": {
          "national_number": "string"
        }
      },
      "address": {
        "address_line_1": "string",
        "address_line_2": "string",
        "admin_area_2": "string",
        "admin_area_1": "string",
        "postal_code": "string",
        "country_code": "st"
      },
      "user_name": "string"
    },
    "apple_pay": {
      "card": {
        "name": "string",
        "last_digits": "stri",
        "type": "CREDIT",
        "brand": "VISA",
        "billing_address": {
          "address_line_1": "string",
          "address_line_2": "string",
          "admin_area_2": "string",
          "admin_area_1": "string",
          "postal_code": "string",
          "country_code": "st"
        }
      }
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

Full representation of a saved payment token.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[vault_id](#schemavault_id)|false|none|The PayPal-generated ID for the vault token.|
|customer|[customer](#schemacustomer)|false|none|Customer in merchant's or partner's system of records.|
|payment_source|[payment_source](#schemapayment_source)|false|none|The vaulted payment method details.|
|links|[link_description_list](#schemalink_description_list)|false|read-only|An array of related [HATEOAS links](/api/rest/responses/#hateoas).|

<h2 id="tocS_payment_token_response_list">payment_token_response_list</h2>
<!-- backwards compatibility -->
<a id="schemapayment_token_response_list"></a>
<a id="schema_payment_token_response_list"></a>
<a id="tocSpayment_token_response_list"></a>
<a id="tocspayment_token_response_list"></a>

```json
[
  {
    "id": "string",
    "customer": {
      "id": "string",
      "merchant_customer_id": "string"
    },
    "payment_source": {
      "card": {
        "name": "string",
        "last_digits": "stri",
        "brand": "VISA",
        "expiry": "strings",
        "billing_address": {
          "address_line_1": "string",
          "address_line_2": "string",
          "admin_area_2": "string",
          "admin_area_1": "string",
          "postal_code": "string",
          "country_code": "st",
          "id": "string"
        },
        "verification_status": "VERIFIED",
        "verification": {
          "network_transaction_id": "string",
          "date": "stri",
          "network": "VISA",
          "time": "stringstringstringst",
          "amount": {
            "currency_code": "str",
            "value": "string"
          },
          "processor_response": {
            "avs_code": "A",
            "cvv_code": "E"
          },
          "three_d_secure": null
        },
        "network_transaction_reference": {
          "id": "stringstr",
          "date": "stri",
          "network": "VISA",
          "time": "stringstringstringst"
        },
        "authentication_result": {
          "three_d_secure": {
            "authentication_status": "Y",
            "enrollment_status": "Y",
            "authentication_id": "string"
          }
        },
        "bin_details": {
          "bin": "string",
          "issuing_bank": "string",
          "bin_country_code": "st",
          "products": [
            "string"
          ]
        },
        "type": "CREDIT",
        "network_token": null
      },
      "paypal": {
        "description": "string",
        "usage_pattern": "IMMEDIATE",
        "shipping": {
          "name": {
            "full_name": "string"
          },
          "phone_number": {
            "country_code": "str",
            "national_number": "string"
          },
          "type": "SHIPPING",
          "address": {
            "address_line_1": "string",
            "address_line_2": "string",
            "admin_area_2": "string",
            "admin_area_1": "string",
            "postal_code": "string",
            "country_code": "st"
          }
        },
        "permit_multiple_payment_tokens": false,
        "usage_type": "MERCHANT",
        "customer_type": "CONSUMER",
        "email_address": "string",
        "payer_id": "stringstrings",
        "name": {
          "given_name": "string",
          "surname": "string"
        },
        "phone": {
          "phone_type": "FAX",
          "phone_number": {
            "national_number": "string"
          }
        },
        "address": {
          "address_line_1": "string",
          "address_line_2": "string",
          "admin_area_2": "string",
          "admin_area_1": "string",
          "postal_code": "string",
          "country_code": "st"
        },
        "account_id": "stringstrings",
        "phone_number": {
          "country_code": "str",
          "national_number": "string",
          "extension_number": "string"
        }
      },
      "venmo": {
        "description": "string",
        "usage_pattern": "IMMEDIATE",
        "shipping": {
          "name": {
            "full_name": "string"
          },
          "phone_number": {
            "country_code": "str",
            "national_number": "string"
          },
          "type": "SHIPPING",
          "address": {
            "address_line_1": "string",
            "address_line_2": "string",
            "admin_area_2": "string",
            "admin_area_1": "string",
            "postal_code": "string",
            "country_code": "st"
          }
        },
        "permit_multiple_payment_tokens": false,
        "usage_type": "MERCHANT",
        "customer_type": "CONSUMER",
        "email_address": "string",
        "payer_id": "stringstrings",
        "name": {
          "given_name": "string",
          "surname": "string"
        },
        "phone": {
          "phone_type": "FAX",
          "phone_number": {
            "national_number": "string"
          }
        },
        "address": {
          "address_line_1": "string",
          "address_line_2": "string",
          "admin_area_2": "string",
          "admin_area_1": "string",
          "postal_code": "string",
          "country_code": "st"
        },
        "user_name": "string"
      },
      "apple_pay": {
        "card": {
          "name": "string",
          "last_digits": "stri",
          "type": "CREDIT",
          "brand": "VISA",
          "billing_address": {
            "address_line_1": "string",
            "address_line_2": "string",
            "admin_area_2": "string",
            "admin_area_1": "string",
            "postal_code": "string",
            "country_code": "st"
          }
        }
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
]
```

<h2 id="tocS_payment_token_status">payment_token_status</h2>
<!-- backwards compatibility -->
<a id="schemapayment_token_status"></a>
<a id="schema_payment_token_status"></a>
<a id="tocSpayment_token_status"></a>
<a id="tocspayment_token_status"></a>

```json
"CREATED"
```

The status of the payment token.

<h2 id="tocS_paypal_wallet_request">paypal_wallet_request</h2>
<!-- backwards compatibility -->
<a id="schemapaypal_wallet_request"></a>
<a id="schema_paypal_wallet_request"></a>
<a id="tocSpaypal_wallet_request"></a>
<a id="tocspaypal_wallet_request"></a>

```json
{
  "description": "string",
  "usage_pattern": "IMMEDIATE",
  "shipping": {
    "name": {
      "full_name": "string"
    },
    "phone_number": {
      "country_code": "str",
      "national_number": "string"
    },
    "type": "SHIPPING",
    "address": {
      "address_line_1": "string",
      "address_line_2": "string",
      "admin_area_2": "string",
      "admin_area_1": "string",
      "postal_code": "string",
      "country_code": "st"
    }
  },
  "permit_multiple_payment_tokens": false,
  "usage_type": "MERCHANT",
  "customer_type": "CONSUMER",
  "billing_plan": {
    "billing_cycles": [
      {
        "tenure_type": "REGULAR",
        "pricing_scheme": {
          "price": {
            "currency_code": "str",
            "value": "string"
          },
          "pricing_model": "FIXED",
          "reload_threshold_amount": {
            "currency_code": "str",
            "value": "string"
          }
        },
        "frequency": null,
        "total_cycles": 1,
        "sequence": 1,
        "start_date": "stringstri"
      }
    ],
    "product": null,
    "one_time_charges": {
      "setup_fee": {
        "currency_code": "str",
        "value": "string"
      },
      "shipping_amount": {
        "currency_code": "str",
        "value": "string"
      },
      "taxes": {
        "currency_code": "str",
        "value": "string"
      },
      "product_price": {
        "currency_code": "str",
        "value": "string"
      },
      "subtotal": {
        "currency_code": "str",
        "value": "string"
      },
      "total_amount": {
        "currency_code": "str",
        "value": "string"
      }
    },
    "name": "string"
  },
  "experience_context": {
    "brand_name": "string",
    "locale": "string",
    "return_url": "http://example.com",
    "cancel_url": "http://example.com",
    "shipping_preference": "GET_FROM_FILE",
    "vault_instruction": "ON_CREATE_PAYMENT_TOKENS"
  }
}
```

A resource representing a request to vault PayPal Wallet.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|The description displayed to the consumer on the approval flow for a digital wallet, as well as on the merchant view of the payment token management experience. exp: PayPal.com.|
|usage_pattern|string|false|none|Expected business/charge model for the billing agreement.|
|shipping|object|false|none|The shipping details.|
|permit_multiple_payment_tokens|boolean|false|none|Create multiple payment tokens for the same payer, merchant/platform combination. Use this when the customer has not logged in at merchant/platform. The payment token thus generated, can then also be used to create the customer account at merchant/platform. Use this also when multiple payment tokens are required for the same payer, different customer at merchant/platform. This helps to identify customers distinctly even though they may share the same PayPal account. This only applies to PayPal payment source.|
|usage_type|string|false|none|The usage type associated with a digital wallet payment token.|
|customer_type|string|false|none|The customer type associated with a digital wallet payment token. This is to indicate whether the customer acting on the merchant / platform is either a business or a consumer.|
|billing_plan|[plan](#schemaplan)|false|none|The merchant level Recurring Billing plan metadata for the Billing Agreement.|
|experience_context|[experience_context](#schemaexperience_context)|false|none|Customizes the Vault creation flow experience for your customers.|

#### Enumerated Values

|Property|Value|
|---|---|
|usage_pattern|IMMEDIATE|
|usage_pattern|DEFERRED|
|usage_pattern|RECURRING_PREPAID|
|usage_pattern|RECURRING_POSTPAID|
|usage_pattern|THRESHOLD_PREPAID|
|usage_pattern|THRESHOLD_POSTPAID|
|usage_pattern|UNSCHEDULED_POSTPAID|
|usage_pattern|UNSCHEDULED_PREPAID|
|usage_pattern|SUBSCRIPTION_PREPAID|
|usage_pattern|SUBSCRIPTION_POSTPAID|
|usage_pattern|INSTALLMENT_POSTPAID|
|usage_pattern|INSTALLMENT_PREPAID|
|usage_type|MERCHANT|
|usage_type|PLATFORM|
|customer_type|CONSUMER|
|customer_type|BUSINESS|

<h2 id="tocS_paypal_wallet_response">paypal_wallet_response</h2>
<!-- backwards compatibility -->
<a id="schemapaypal_wallet_response"></a>
<a id="schema_paypal_wallet_response"></a>
<a id="tocSpaypal_wallet_response"></a>
<a id="tocspaypal_wallet_response"></a>

```json
{
  "description": "string",
  "usage_pattern": "IMMEDIATE",
  "shipping": {
    "name": {
      "full_name": "string"
    },
    "phone_number": {
      "country_code": "str",
      "national_number": "string"
    },
    "type": "SHIPPING",
    "address": {
      "address_line_1": "string",
      "address_line_2": "string",
      "admin_area_2": "string",
      "admin_area_1": "string",
      "postal_code": "string",
      "country_code": "st"
    }
  },
  "permit_multiple_payment_tokens": false,
  "usage_type": "MERCHANT",
  "customer_type": "CONSUMER",
  "email_address": "string",
  "payer_id": "stringstrings",
  "name": {
    "given_name": "string",
    "surname": "string"
  },
  "phone": {
    "phone_type": "FAX",
    "phone_number": {
      "national_number": "string"
    }
  },
  "address": {
    "address_line_1": "string",
    "address_line_2": "string",
    "admin_area_2": "string",
    "admin_area_1": "string",
    "postal_code": "string",
    "country_code": "st"
  },
  "account_id": "stringstrings",
  "phone_number": {
    "country_code": "str",
    "national_number": "string",
    "extension_number": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|The description displayed to the consumer on the approval flow for a digital wallet, as well as on the merchant view of the payment token management experience. exp: PayPal.com.|
|usage_pattern|string|false|none|Expected business/charge model for the billing agreement.|
|shipping|object|false|none|The shipping details.|
|permit_multiple_payment_tokens|boolean|false|none|Create multiple payment tokens for the same payer, merchant/platform combination. Use this when the customer has not logged in at merchant/platform. The payment token thus generated, can then also be used to create the customer account at merchant/platform. Use this also when multiple payment tokens are required for the same payer, different customer at merchant/platform. This helps to identify customers distinctly even though they may share the same PayPal account. This only applies to PayPal payment source.|
|usage_type|string|false|none|The usage type associated with a digital wallet payment token.|
|customer_type|string|false|none|The customer type associated with a digital wallet payment token. This is to indicate whether the customer acting on the merchant / platform is either a business or a consumer.|
|email_address|[email](#schemaemail)|false|none|The email address of the payer.|
|payer_id|[account_id](#schemaaccount_id)|false|none|The PayPal-assigned ID for the payer.|
|name|object|false|none|The name of the party.|
|phone|[phone_with_type](#schemaphone_with_type)|false|none|The phone number of the customer. Available only when you enable the **Contact Telephone Number** option in the <a href="https://www.paypal.com/cgi-bin/customerprofileweb?cmd=_profile-website-payments">**Profile & Settings**</a> for the merchant's PayPal account. The `phone.phone_number` supports only `national_number`.|
|address|object|false|none|The portable international postal address. Maps to [AddressValidationMetadata](https://github.com/googlei18n/libaddressinput/wiki/AddressValidationMetadata) and HTML 5.1 [Autofilling form controls: the autocomplete attribute](https://www.w3.org/TR/html51/sec-forms.html#autofilling-form-controls-the-autocomplete-attribute).|
|account_id|[account_id](#schemaaccount_id)|false|none|The account identifier for a PayPal account.|
|phone_number|[phone](#schemaphone)|false|none|The phone number, in its canonical international [E.164 numbering plan format](https://www.itu.int/rec/T-REC-E.164/en).|

#### Enumerated Values

|Property|Value|
|---|---|
|usage_pattern|IMMEDIATE|
|usage_pattern|DEFERRED|
|usage_pattern|RECURRING_PREPAID|
|usage_pattern|RECURRING_POSTPAID|
|usage_pattern|THRESHOLD_PREPAID|
|usage_pattern|THRESHOLD_POSTPAID|
|usage_pattern|UNSCHEDULED_POSTPAID|
|usage_pattern|UNSCHEDULED_PREPAID|
|usage_pattern|SUBSCRIPTION_PREPAID|
|usage_pattern|SUBSCRIPTION_POSTPAID|
|usage_pattern|INSTALLMENT_POSTPAID|
|usage_pattern|INSTALLMENT_PREPAID|
|usage_type|MERCHANT|
|usage_type|PLATFORM|
|customer_type|CONSUMER|
|customer_type|BUSINESS|

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

<h2 id="tocS_phone_with_type">phone_with_type</h2>
<!-- backwards compatibility -->
<a id="schemaphone_with_type"></a>
<a id="schema_phone_with_type"></a>
<a id="tocSphone_with_type"></a>
<a id="tocsphone_with_type"></a>

```json
{
  "phone_type": "FAX",
  "phone_number": {
    "national_number": "string"
  }
}
```

The phone information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|phone_type|[phone_type](#schemaphone_type)|false|none|The phone type.|
|phone_number|object|true|none|The phone number, in its canonical international [E.164 numbering plan format](https://www.itu.int/rec/T-REC-E.164/en).|

#### Enumerated Values

|Property|Value|
|---|---|
|phone_type|FAX|
|phone_type|HOME|
|phone_type|MOBILE|
|phone_type|OTHER|
|phone_type|PAGER|

<h2 id="tocS_plan">plan</h2>
<!-- backwards compatibility -->
<a id="schemaplan"></a>
<a id="schema_plan"></a>
<a id="tocSplan"></a>
<a id="tocsplan"></a>

```json
{
  "billing_cycles": [
    {
      "tenure_type": "REGULAR",
      "pricing_scheme": {
        "price": {
          "currency_code": "str",
          "value": "string"
        },
        "pricing_model": "FIXED",
        "reload_threshold_amount": {
          "currency_code": "str",
          "value": "string"
        }
      },
      "frequency": null,
      "total_cycles": 1,
      "sequence": 1,
      "start_date": "stringstri"
    }
  ],
  "product": null,
  "one_time_charges": {
    "setup_fee": {
      "currency_code": "str",
      "value": "string"
    },
    "shipping_amount": {
      "currency_code": "str",
      "value": "string"
    },
    "taxes": {
      "currency_code": "str",
      "value": "string"
    },
    "product_price": {
      "currency_code": "str",
      "value": "string"
    },
    "subtotal": {
      "currency_code": "str",
      "value": "string"
    },
    "total_amount": {
      "currency_code": "str",
      "value": "string"
    }
  },
  "name": "string"
}
```

The merchant level Recurring Billing plan metadata for the Billing Agreement.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billing_cycles|[billing_cycle_list](#schemabilling_cycle_list)|true|none|An array of billing cycles for trial billing and regular billing. A plan can have at most two trial cycles and only one regular cycle.|
|product|[product_override](#schemaproduct_override)|false|none|Product details associated with any one-time product purchase.|
|one_time_charges|[one_time_charges](#schemaone_time_charges)|true|none|Price and currency for any one-time charges due at plan signup.|
|name|string|false|none|Name of the recurring plan.|

<h2 id="tocS_pricing_scheme">pricing_scheme</h2>
<!-- backwards compatibility -->
<a id="schemapricing_scheme"></a>
<a id="schema_pricing_scheme"></a>
<a id="tocSpricing_scheme"></a>
<a id="tocspricing_scheme"></a>

```json
{
  "price": {
    "currency_code": "str",
    "value": "string"
  },
  "pricing_model": "FIXED",
  "reload_threshold_amount": {
    "currency_code": "str",
    "value": "string"
  }
}
```

The pricing scheme details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|price|[money](#schemamoney)|false|none|The price the customer will be charged based on the pricing model|
|pricing_model|string|true|none|The pricing model for the billing cycle.|
|reload_threshold_amount|[money](#schemamoney)|false|none|The threshold amount on which the reload charge would be triggered. This will be associated with the account-balance where if the account-balance goes below this amount then customer would incur reload charge.|

#### Enumerated Values

|Property|Value|
|---|---|
|pricing_model|FIXED|
|pricing_model|VARIABLE|
|pricing_model|AUTO_RELOAD|

<h2 id="tocS_product_override">product_override</h2>
<!-- backwards compatibility -->
<a id="schemaproduct_override"></a>
<a id="schema_product_override"></a>
<a id="tocSproduct_override"></a>
<a id="tocsproduct_override"></a>

```json
null
```

<h2 id="tocS_products">products</h2>
<!-- backwards compatibility -->
<a id="schemaproducts"></a>
<a id="schema_products"></a>
<a id="tocSproducts"></a>
<a id="tocsproducts"></a>

```json
"string"
```

This value provides the category of the BIN.

<h2 id="tocS_products_list">products_list</h2>
<!-- backwards compatibility -->
<a id="schemaproducts_list"></a>
<a id="schema_products_list"></a>
<a id="tocSproducts_list"></a>
<a id="tocsproducts_list"></a>

```json
[
  "string"
]
```

The type of card product assigned to the BIN by the issuer. These values are defined by the issuer and may change over time. Some examples include: PREPAID_GIFT, CONSUMER, CORPORATE.

<h2 id="tocS_setup_token_request">setup_token_request</h2>
<!-- backwards compatibility -->
<a id="schemasetup_token_request"></a>
<a id="schema_setup_token_request"></a>
<a id="tocSsetup_token_request"></a>
<a id="tocssetup_token_request"></a>

```json
{
  "customer": {
    "id": "string",
    "merchant_customer_id": "string"
  },
  "payment_source": {
    "card": {
      "name": "string",
      "number": "stringstrings",
      "expiry": "strings",
      "security_code": "stri",
      "brand": "VISA",
      "billing_address": {
        "address_line_1": "string",
        "address_line_2": "string",
        "admin_area_2": "string",
        "admin_area_1": "string",
        "postal_code": "string",
        "country_code": "st"
      },
      "verification_method": "SCA_WHEN_REQUIRED",
      "experience_context": {
        "brand_name": "string",
        "locale": "string",
        "return_url": "http://example.com",
        "cancel_url": "http://example.com",
        "vault_instruction": "ON_CREATE_PAYMENT_TOKENS"
      },
      "network_transaction_reference": null
    },
    "paypal": {
      "description": "string",
      "usage_pattern": "IMMEDIATE",
      "shipping": {
        "name": {
          "full_name": "string"
        },
        "phone_number": {
          "country_code": "str",
          "national_number": "string"
        },
        "type": "SHIPPING",
        "address": {
          "address_line_1": "string",
          "address_line_2": "string",
          "admin_area_2": "string",
          "admin_area_1": "string",
          "postal_code": "string",
          "country_code": "st"
        }
      },
      "permit_multiple_payment_tokens": false,
      "usage_type": "MERCHANT",
      "customer_type": "CONSUMER",
      "billing_plan": {
        "billing_cycles": [
          {
            "tenure_type": "REGULAR",
            "pricing_scheme": {
              "price": {
                "currency_code": "str",
                "value": "string"
              },
              "pricing_model": "FIXED",
              "reload_threshold_amount": {
                "currency_code": "str",
                "value": "string"
              }
            },
            "frequency": null,
            "total_cycles": 1,
            "sequence": 1,
            "start_date": "stringstri"
          }
        ],
        "product": null,
        "one_time_charges": {
          "setup_fee": {
            "currency_code": "str",
            "value": "string"
          },
          "shipping_amount": {
            "currency_code": "str",
            "value": "string"
          },
          "taxes": {
            "currency_code": "str",
            "value": "string"
          },
          "product_price": {
            "currency_code": "str",
            "value": "string"
          },
          "subtotal": {
            "currency_code": "str",
            "value": "string"
          },
          "total_amount": {
            "currency_code": "str",
            "value": "string"
          }
        },
        "name": "string"
      },
      "experience_context": {
        "brand_name": "string",
        "locale": "string",
        "return_url": "http://example.com",
        "cancel_url": "http://example.com",
        "shipping_preference": "GET_FROM_FILE",
        "vault_instruction": "ON_CREATE_PAYMENT_TOKENS"
      }
    },
    "venmo": {
      "description": "string",
      "usage_pattern": "IMMEDIATE",
      "shipping": {
        "name": {
          "full_name": "string"
        },
        "phone_number": {
          "country_code": "str",
          "national_number": "string"
        },
        "type": "SHIPPING",
        "address": {
          "address_line_1": "string",
          "address_line_2": "string",
          "admin_area_2": "string",
          "admin_area_1": "string",
          "postal_code": "string",
          "country_code": "st"
        }
      },
      "permit_multiple_payment_tokens": false,
      "usage_type": "MERCHANT",
      "customer_type": "CONSUMER",
      "experience_context": {
        "brand_name": "string",
        "shipping_preference": "GET_FROM_FILE",
        "vault_instruction": "ON_CREATE_PAYMENT_TOKENS"
      }
    },
    "token": {
      "id": "string",
      "type": "SETUP_TOKEN"
    }
  }
}
```

Setup Token Request where the `source` defines the type of instrument to be stored.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customer|object|false|none|This object defines a customer in your system. Use it to manage customer profiles, save payment methods and contact details.|
|payment_source|object|true|none|The payment method to vault with the instrument details.|

<h2 id="tocS_setup_token_response">setup_token_response</h2>
<!-- backwards compatibility -->
<a id="schemasetup_token_response"></a>
<a id="schema_setup_token_response"></a>
<a id="tocSsetup_token_response"></a>
<a id="tocssetup_token_response"></a>

```json
{
  "id": "string",
  "customer": {
    "id": "string",
    "merchant_customer_id": "string"
  },
  "status": "CREATED",
  "payment_source": {
    "card": {
      "name": "string",
      "last_digits": "stri",
      "brand": "VISA",
      "expiry": "strings",
      "billing_address": {
        "address_line_1": "string",
        "address_line_2": "string",
        "admin_area_2": "string",
        "admin_area_1": "string",
        "postal_code": "string",
        "country_code": "st",
        "id": "string"
      },
      "verification_status": "VERIFIED",
      "verification": {
        "network_transaction_id": "string",
        "date": "stri",
        "network": "VISA",
        "time": "stringstringstringst",
        "amount": {
          "currency_code": "str",
          "value": "string"
        },
        "processor_response": {
          "avs_code": "A",
          "cvv_code": "E"
        },
        "three_d_secure": null
      },
      "network_transaction_reference": {
        "id": "stringstr",
        "date": "stri",
        "network": "VISA",
        "time": "stringstringstringst"
      },
      "authentication_result": {
        "three_d_secure": {
          "authentication_status": "Y",
          "enrollment_status": "Y",
          "authentication_id": "string"
        }
      },
      "bin_details": {
        "bin": "string",
        "issuing_bank": "string",
        "bin_country_code": "st",
        "products": [
          "string"
        ]
      },
      "type": "CREDIT"
    },
    "paypal": {
      "description": "string",
      "usage_pattern": "IMMEDIATE",
      "shipping": {
        "name": {
          "full_name": "string"
        },
        "phone_number": {
          "country_code": "str",
          "national_number": "string"
        },
        "type": "SHIPPING",
        "address": {
          "address_line_1": "string",
          "address_line_2": "string",
          "admin_area_2": "string",
          "admin_area_1": "string",
          "postal_code": "string",
          "country_code": "st"
        }
      },
      "permit_multiple_payment_tokens": false,
      "usage_type": "MERCHANT",
      "customer_type": "CONSUMER",
      "email_address": "string",
      "payer_id": "stringstrings",
      "name": {
        "given_name": "string",
        "surname": "string"
      },
      "phone": {
        "phone_type": "FAX",
        "phone_number": {
          "national_number": "string"
        }
      },
      "address": {
        "address_line_1": "string",
        "address_line_2": "string",
        "admin_area_2": "string",
        "admin_area_1": "string",
        "postal_code": "string",
        "country_code": "st"
      },
      "account_id": "stringstrings",
      "phone_number": {
        "country_code": "str",
        "national_number": "string",
        "extension_number": "string"
      }
    },
    "venmo": {
      "description": "string",
      "usage_pattern": "IMMEDIATE",
      "shipping": {
        "name": {
          "full_name": "string"
        },
        "phone_number": {
          "country_code": "str",
          "national_number": "string"
        },
        "type": "SHIPPING",
        "address": {
          "address_line_1": "string",
          "address_line_2": "string",
          "admin_area_2": "string",
          "admin_area_1": "string",
          "postal_code": "string",
          "country_code": "st"
        }
      },
      "permit_multiple_payment_tokens": false,
      "usage_type": "MERCHANT",
      "customer_type": "CONSUMER",
      "email_address": "string",
      "payer_id": "stringstrings",
      "name": {
        "given_name": "string",
        "surname": "string"
      },
      "phone": {
        "phone_type": "FAX",
        "phone_number": {
          "national_number": "string"
        }
      },
      "address": {
        "address_line_1": "string",
        "address_line_2": "string",
        "admin_area_2": "string",
        "admin_area_1": "string",
        "postal_code": "string",
        "country_code": "st"
      },
      "user_name": "string"
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

Minimal representation of a cached setup token.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[vault_id](#schemavault_id)|false|none|The PayPal-generated ID for the vault token.|
|customer|object|false|none|This object defines a customer in your system. Use it to manage customer profiles, save payment methods and contact details.|
|status|[payment_token_status](#schemapayment_token_status)|false|none|The status of the payment token.|
|payment_source|object|false|none|The setup payment method details.|
|links|[link_description_list](#schemalink_description_list)|false|read-only|An array of related [HATEOAS links](/api/rest/responses/#hateoas).|

#### Enumerated Values

|Property|Value|
|---|---|
|status|CREATED|
|status|PAYER_ACTION_REQUIRED|
|status|APPROVED|
|status|VAULTED|
|status|TOKENIZED|

<h2 id="tocS_three_d_secure_authentication_response">three_d_secure_authentication_response</h2>
<!-- backwards compatibility -->
<a id="schemathree_d_secure_authentication_response"></a>
<a id="schema_three_d_secure_authentication_response"></a>
<a id="tocSthree_d_secure_authentication_response"></a>
<a id="tocsthree_d_secure_authentication_response"></a>

```json
{
  "authentication_status": "Y",
  "enrollment_status": "Y"
}
```

Results of 3D Secure Authentication.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authentication_status|[pares_status](#schemapares_status)|false|none|The outcome of the issuer's authentication.|
|enrollment_status|[enrolled](#schemaenrolled)|false|none|Status of authentication eligibility.|

#### Enumerated Values

|Property|Value|
|---|---|
|authentication_status|Y|
|authentication_status|N|
|authentication_status|U|
|authentication_status|A|
|authentication_status|C|
|authentication_status|R|
|authentication_status|D|
|authentication_status|I|
|enrollment_status|Y|
|enrollment_status|N|
|enrollment_status|U|
|enrollment_status|B|

<h2 id="tocS_three_d_secure_authentication_response-2">three_d_secure_authentication_response-2</h2>
<!-- backwards compatibility -->
<a id="schemathree_d_secure_authentication_response-2"></a>
<a id="schema_three_d_secure_authentication_response-2"></a>
<a id="tocSthree_d_secure_authentication_response-2"></a>
<a id="tocsthree_d_secure_authentication_response-2"></a>

```json
{
  "authentication_status": "Y",
  "enrollment_status": "Y",
  "authentication_id": "string"
}
```

Results of 3D Secure Authentication.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authentication_status|[pares_status](#schemapares_status)|false|none|The outcome of the issuer's authentication.|
|enrollment_status|[enrolled](#schemaenrolled)|false|none|Status of authentication eligibility.|
|authentication_id|string|false|none|The externally received 3ds authentication id, to be returned in card detokenization response.|

#### Enumerated Values

|Property|Value|
|---|---|
|authentication_status|Y|
|authentication_status|N|
|authentication_status|U|
|authentication_status|A|
|authentication_status|C|
|authentication_status|R|
|authentication_status|D|
|authentication_status|I|
|enrollment_status|Y|
|enrollment_status|N|
|enrollment_status|U|
|enrollment_status|B|

<h2 id="tocS_token_id_request">token_id_request</h2>
<!-- backwards compatibility -->
<a id="schematoken_id_request"></a>
<a id="schema_token_id_request"></a>
<a id="tocStoken_id_request"></a>
<a id="tocstoken_id_request"></a>

```json
{
  "id": "string",
  "type": "SETUP_TOKEN"
}
```

The Tokenized Payment Source representing a Request to Vault a Token.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|The PayPal-generated ID for the token.|
|type|string|true|none|The tokenization method that generated the ID.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|SETUP_TOKEN|

<h2 id="tocS_vault_id">vault_id</h2>
<!-- backwards compatibility -->
<a id="schemavault_id"></a>
<a id="schema_vault_id"></a>
<a id="tocSvault_id"></a>
<a id="tocsvault_id"></a>

```json
"string"
```

The PayPal-generated ID for the vault token.

<h2 id="tocS_vault_instruction">vault_instruction</h2>
<!-- backwards compatibility -->
<a id="schemavault_instruction"></a>
<a id="schema_vault_instruction"></a>
<a id="tocSvault_instruction"></a>
<a id="tocsvault_instruction"></a>

```json
"ON_CREATE_PAYMENT_TOKENS"
```

Vault Instruction on action to be performed after a successful payer approval.

<h2 id="tocS_venmo_request">venmo_request</h2>
<!-- backwards compatibility -->
<a id="schemavenmo_request"></a>
<a id="schema_venmo_request"></a>
<a id="tocSvenmo_request"></a>
<a id="tocsvenmo_request"></a>

```json
{
  "description": "string",
  "usage_pattern": "IMMEDIATE",
  "shipping": {
    "name": {
      "full_name": "string"
    },
    "phone_number": {
      "country_code": "str",
      "national_number": "string"
    },
    "type": "SHIPPING",
    "address": {
      "address_line_1": "string",
      "address_line_2": "string",
      "admin_area_2": "string",
      "admin_area_1": "string",
      "postal_code": "string",
      "country_code": "st"
    }
  },
  "permit_multiple_payment_tokens": false,
  "usage_type": "MERCHANT",
  "customer_type": "CONSUMER",
  "experience_context": {
    "brand_name": "string",
    "shipping_preference": "GET_FROM_FILE",
    "vault_instruction": "ON_CREATE_PAYMENT_TOKENS"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|The description displayed to the consumer on the approval flow for a digital wallet, as well as on the merchant view of the payment token management experience. exp: PayPal.com.|
|usage_pattern|string|false|none|Expected business/charge model for the billing agreement.|
|shipping|object|false|none|The shipping details.|
|permit_multiple_payment_tokens|boolean|false|none|Create multiple payment tokens for the same payer, merchant/platform combination. Use this when the customer has not logged in at merchant/platform. The payment token thus generated, can then also be used to create the customer account at merchant/platform. Use this also when multiple payment tokens are required for the same payer, different customer at merchant/platform. This helps to identify customers distinctly even though they may share the same PayPal account. This only applies to PayPal payment source.|
|usage_type|string|false|none|The usage type associated with a digital wallet payment token.|
|customer_type|string|false|none|The customer type associated with a digital wallet payment token. This is to indicate whether the customer acting on the merchant / platform is either a business or a consumer.|
|experience_context|object|false|none|Customizes the Vault creation flow experience for your customers.|

#### Enumerated Values

|Property|Value|
|---|---|
|usage_pattern|IMMEDIATE|
|usage_pattern|DEFERRED|
|usage_pattern|RECURRING_PREPAID|
|usage_pattern|RECURRING_POSTPAID|
|usage_pattern|THRESHOLD_PREPAID|
|usage_pattern|THRESHOLD_POSTPAID|
|usage_pattern|UNSCHEDULED_POSTPAID|
|usage_pattern|UNSCHEDULED_PREPAID|
|usage_pattern|SUBSCRIPTION_PREPAID|
|usage_pattern|SUBSCRIPTION_POSTPAID|
|usage_pattern|INSTALLMENT_POSTPAID|
|usage_pattern|INSTALLMENT_PREPAID|
|usage_type|MERCHANT|
|usage_type|PLATFORM|
|customer_type|CONSUMER|
|customer_type|BUSINESS|

<h2 id="tocS_venmo_response">venmo_response</h2>
<!-- backwards compatibility -->
<a id="schemavenmo_response"></a>
<a id="schema_venmo_response"></a>
<a id="tocSvenmo_response"></a>
<a id="tocsvenmo_response"></a>

```json
{
  "description": "string",
  "usage_pattern": "IMMEDIATE",
  "shipping": {
    "name": {
      "full_name": "string"
    },
    "phone_number": {
      "country_code": "str",
      "national_number": "string"
    },
    "type": "SHIPPING",
    "address": {
      "address_line_1": "string",
      "address_line_2": "string",
      "admin_area_2": "string",
      "admin_area_1": "string",
      "postal_code": "string",
      "country_code": "st"
    }
  },
  "permit_multiple_payment_tokens": false,
  "usage_type": "MERCHANT",
  "customer_type": "CONSUMER",
  "email_address": "string",
  "payer_id": "stringstrings",
  "name": {
    "given_name": "string",
    "surname": "string"
  },
  "phone": {
    "phone_type": "FAX",
    "phone_number": {
      "national_number": "string"
    }
  },
  "address": {
    "address_line_1": "string",
    "address_line_2": "string",
    "admin_area_2": "string",
    "admin_area_1": "string",
    "postal_code": "string",
    "country_code": "st"
  },
  "user_name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|The description displayed to the consumer on the approval flow for a digital wallet, as well as on the merchant view of the payment token management experience. exp: PayPal.com.|
|usage_pattern|string|false|none|Expected business/charge model for the billing agreement.|
|shipping|object|false|none|The shipping details.|
|permit_multiple_payment_tokens|boolean|false|none|Create multiple payment tokens for the same payer, merchant/platform combination. Use this when the customer has not logged in at merchant/platform. The payment token thus generated, can then also be used to create the customer account at merchant/platform. Use this also when multiple payment tokens are required for the same payer, different customer at merchant/platform. This helps to identify customers distinctly even though they may share the same PayPal account. This only applies to PayPal payment source.|
|usage_type|string|false|none|The usage type associated with a digital wallet payment token.|
|customer_type|string|false|none|The customer type associated with a digital wallet payment token. This is to indicate whether the customer acting on the merchant / platform is either a business or a consumer.|
|email_address|[email](#schemaemail)|false|none|The email address of the payer.|
|payer_id|[account_id](#schemaaccount_id)|false|none|The PayPal-assigned ID for the payer.|
|name|object|false|none|The name of the party.|
|phone|[phone_with_type](#schemaphone_with_type)|false|none|The phone number of the customer. Available only when you enable the **Contact Telephone Number** option in the <a href="https://www.paypal.com/cgi-bin/customerprofileweb?cmd=_profile-website-payments">**Profile & Settings**</a> for the merchant's PayPal account. The `phone.phone_number` supports only `national_number`.|
|address|object|false|none|The portable international postal address. Maps to [AddressValidationMetadata](https://github.com/googlei18n/libaddressinput/wiki/AddressValidationMetadata) and HTML 5.1 [Autofilling form controls: the autocomplete attribute](https://www.w3.org/TR/html51/sec-forms.html#autofilling-form-controls-the-autocomplete-attribute).|
|user_name|string|false|none|The Venmo username, as chosen by the user.|

#### Enumerated Values

|Property|Value|
|---|---|
|usage_pattern|IMMEDIATE|
|usage_pattern|DEFERRED|
|usage_pattern|RECURRING_PREPAID|
|usage_pattern|RECURRING_POSTPAID|
|usage_pattern|THRESHOLD_PREPAID|
|usage_pattern|THRESHOLD_POSTPAID|
|usage_pattern|UNSCHEDULED_POSTPAID|
|usage_pattern|UNSCHEDULED_PREPAID|
|usage_pattern|SUBSCRIPTION_PREPAID|
|usage_pattern|SUBSCRIPTION_POSTPAID|
|usage_pattern|INSTALLMENT_POSTPAID|
|usage_pattern|INSTALLMENT_PREPAID|
|usage_type|MERCHANT|
|usage_type|PLATFORM|
|customer_type|CONSUMER|
|customer_type|BUSINESS|

<h2 id="tocS_wallet_base">wallet_base</h2>
<!-- backwards compatibility -->
<a id="schemawallet_base"></a>
<a id="schema_wallet_base"></a>
<a id="tocSwallet_base"></a>
<a id="tocswallet_base"></a>

```json
{
  "description": "string",
  "usage_pattern": "IMMEDIATE",
  "shipping": {
    "name": {
      "full_name": "string"
    },
    "phone_number": {
      "country_code": "str",
      "national_number": "string"
    },
    "type": "SHIPPING",
    "address": {
      "address_line_1": "string",
      "address_line_2": "string",
      "admin_area_2": "string",
      "admin_area_1": "string",
      "postal_code": "string",
      "country_code": "st"
    }
  },
  "permit_multiple_payment_tokens": false,
  "usage_type": "MERCHANT",
  "customer_type": "CONSUMER"
}
```

Resource consolidating common request and response attributes for vaulting a Digital Wallet.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|The description displayed to the consumer on the approval flow for a digital wallet, as well as on the merchant view of the payment token management experience. exp: PayPal.com.|
|usage_pattern|string|false|none|Expected business/charge model for the billing agreement.|
|shipping|object|false|none|The shipping details.|
|permit_multiple_payment_tokens|boolean|false|none|Create multiple payment tokens for the same payer, merchant/platform combination. Use this when the customer has not logged in at merchant/platform. The payment token thus generated, can then also be used to create the customer account at merchant/platform. Use this also when multiple payment tokens are required for the same payer, different customer at merchant/platform. This helps to identify customers distinctly even though they may share the same PayPal account. This only applies to PayPal payment source.|
|usage_type|string|false|none|The usage type associated with a digital wallet payment token.|
|customer_type|string|false|none|The customer type associated with a digital wallet payment token. This is to indicate whether the customer acting on the merchant / platform is either a business or a consumer.|

#### Enumerated Values

|Property|Value|
|---|---|
|usage_pattern|IMMEDIATE|
|usage_pattern|DEFERRED|
|usage_pattern|RECURRING_PREPAID|
|usage_pattern|RECURRING_POSTPAID|
|usage_pattern|THRESHOLD_PREPAID|
|usage_pattern|THRESHOLD_POSTPAID|
|usage_pattern|UNSCHEDULED_POSTPAID|
|usage_pattern|UNSCHEDULED_PREPAID|
|usage_pattern|SUBSCRIPTION_PREPAID|
|usage_pattern|SUBSCRIPTION_POSTPAID|
|usage_pattern|INSTALLMENT_POSTPAID|
|usage_pattern|INSTALLMENT_PREPAID|
|usage_type|MERCHANT|
|usage_type|PLATFORM|
|customer_type|CONSUMER|
|customer_type|BUSINESS|
