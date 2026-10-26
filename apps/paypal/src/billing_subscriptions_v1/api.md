<h1 id="subscriptions">Subscriptions v1.8</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

You can use billing plans and subscriptions to create subscriptions that process recurring PayPal payments for physical or digital goods, or services. A plan includes pricing and billing cycle information that defines the amount and frequency of charge for a subscription. You can also define a fixed plan, such as a $5 basic plan or a volume- or graduated-based plan with pricing tiers based on the quantity purchased. For more information, see <a href="/docs/subscriptions/">Subscriptions Overview</a>.

Base URLs:

* <a href="https://api-m.sandbox.paypal.com">https://api-m.sandbox.paypal.com</a> - PayPal Sandbox Environment

* <a href="https://api-m.paypal.com">https://api-m.paypal.com</a> - PayPal Live Environment

<a href="https://developer.paypal.com/docs/api/subscriptions/v1/">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 authentication

    - Flow: clientCredentials
    - Token URL = [/v1/oauth2/token](/v1/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://uri.paypal.com/services/subscriptions|Manage plan & subscription|

<h1 id="subscriptions-plans">plans</h1>

Use the `/billing/plans` resource to create and manage plans.

## List plans

<a id="opIdplans.list"></a>

> Code samples

```bash
curl https://api-m.paypal.com/v1/billing/plans \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/billing/plans`

Lists billing plans.

<h3 id="list-plans-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Prefer|header|string|false|The preferred server response upon successful completion of the request. Value is:<ul><li><code>return=minimal</code>. The server returns a minimal response to optimize communication between the API caller and the server. A minimal response includes the <code>id</code>, <code>status</code> and HATEOAS links.</li><li><code>return=representation</code>. The server returns a complete resource representation, including the current state of the resource.</li></ul>|
|product_id|query|string|false|Filters the response by a Product ID.|
|page_size|query|integer|false|The number of items to return in the response.|
|page|query|integer|false|A non-zero integer which is the start index of the entire list of items to return in the response. The combination of `page=1` and `page_size=20` returns the first 20 items. The combination of `page=2` and `page_size=20` returns the next 20 items.|
|total_required|query|boolean|false|Indicates whether to show the total count in the response.|

> Example responses

> 200 Response

```json
{
  "plans": [
    {
      "id": "stringstringstringstringst",
      "product_id": "stringstringstringstri",
      "name": "string",
      "status": "CREATED",
      "description": "string",
      "billing_cycles": [
        {
          "pricing_scheme": {
            "version": 0,
            "fixed_price": {
              "currency_code": "str",
              "value": "string"
            },
            "pricing_model": "VOLUME",
            "tiers": [
              {
                "starting_quantity": "string",
                "ending_quantity": "string",
                "amount": {
                  "currency_code": "str",
                  "value": "string"
                }
              }
            ],
            "create_time": "stringstringstringst",
            "update_time": "stringstringstringst"
          },
          "frequency": {
            "interval_unit": "DAY",
            "interval_count": 1
          },
          "tenure_type": "REGULAR",
          "sequence": 1,
          "total_cycles": 1
        }
      ],
      "payment_preferences": {
        "auto_bill_outstanding": true,
        "setup_fee": {
          "currency_code": "str",
          "value": "string"
        },
        "setup_fee_failure_action": "CANCEL",
        "payment_failure_threshold": 0
      },
      "taxes": {
        "percentage": "string",
        "inclusive": true
      },
      "quantity_supported": false,
      "create_time": "stringstringstringst",
      "update_time": "stringstringstringst",
      "links": [
        {
          "href": "string",
          "rel": "string",
          "method": "GET"
        }
      ]
    }
  ],
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

> 400 Response

```json
{
  "name": "INVALID_REQUEST",
  "message": "Request is not well-formed, syntactically incorrect, or violates schema.",
  "details": [
    {
      "issue": "INVALID_PARAMETER_VALUE",
      "description": "The value of a field is invalid."
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

> 401 Response

```json
{
  "name": "AUTHENTICATION_FAILURE",
  "message": "Authentication failed due to missing authorization header, or invalid authentication credentials.",
  "details": [
    {
      "issue": "INVALID_ACCOUNT_STATUS",
      "description": "Account validations failed for the user."
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
      "description": "You do not have permission to access or perform operations on this resource."
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

<h3 id="list-plans-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful request returns the HTTP `200 OK` status code and a JSON response body that lists billing plans.|[plan_collection](#schemaplan_collection)|
|400|Bad Request|Request is not well-formed, syntactically incorrect, or violates schema.|Inline|
|401|Unauthorized|Authentication failed due to missing authorization header, or invalid authentication credentials.|Inline|
|403|Forbidden|Authorization failed due to insufficient permissions.|Inline|
|404|Not Found|The specified resource does not exist.|[error_404](#schemaerror_404)|
|500|Internal Server Error|An internal server error has occurred.|[error_500](#schemaerror_500)|
|default|Default|The default response.|[error_default](#schemaerror_default)|

<h3 id="list-plans-responseschema">Response Schema</h3>

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

#### Enumerated Values

|Property|Value|
|---|---|
|name|INVALID_REQUEST|
|message|Request is not well-formed, syntactically incorrect, or violates schema.|
|» issue|INVALID_PARAMETER_VALUE|
|» description|The value of a field is invalid.|

Status Code **401**

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
|name|AUTHENTICATION_FAILURE|
|message|Authentication failed due to missing authorization header, or invalid authentication credentials.|
|» issue|INVALID_ACCOUNT_STATUS|
|» description|Account validations failed for the user.|

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
|» description|You do not have permission to access or perform operations on this resource.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://uri.paypal.com/services/subscriptions )
</aside>

## Create plan

<a id="opIdplans.create"></a>

> Code samples

```bash
curl https://api-m.paypal.com/v1/billing/plans \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "product_id": "PROD-XXCD1234QWER65782",
    "name": "Video Streaming Service Plan",
    "description": "Video Streaming Service basic plan",
    "status": "ACTIVE",
    "billing_cycles": [
      {
        "frequency": {
          "interval_unit": "MONTH",
          "interval_count": 1
        },
        "tenure_type": "TRIAL",
        "sequence": 1,
        "total_cycles": 2,
        "pricing_scheme": {
          "fixed_price": {
            "value": "3",
            "currency_code": "USD"
          }
        }
      },
      {
        "frequency": {
          "interval_unit": "MONTH",
          "interval_count": 1
        },
        "tenure_type": "TRIAL",
        "sequence": 2,
        "total_cycles": 3,
        "pricing_scheme": {
          "fixed_price": {
            "value": "6",
            "currency_code": "USD"
          }
        }
      },
      {
        "frequency": {
          "interval_unit": "MONTH",
          "interval_count": 1
        },
        "tenure_type": "REGULAR",
        "sequence": 3,
        "total_cycles": 12,
        "pricing_scheme": {
          "fixed_price": {
            "value": "10",
            "currency_code": "USD"
          }
        }
      }
    ],
    "payment_preferences": {
      "auto_bill_outstanding": true,
      "setup_fee": {
        "value": "10",
        "currency_code": "USD"
      },
      "setup_fee_failure_action": "CONTINUE",
      "payment_failure_threshold": 3
    },
    "taxes": {
      "percentage": "10",
      "inclusive": false
    }
  }'
```

`POST /v1/billing/plans`

Creates a plan that defines pricing and billing cycle details for subscriptions.

> Body parameter

```json
{
  "product_id": "PROD-XXCD1234QWER65782",
  "name": "Video Streaming Service Plan",
  "description": "Video Streaming Service basic plan",
  "status": "ACTIVE",
  "billing_cycles": [
    {
      "frequency": {
        "interval_unit": "MONTH",
        "interval_count": 1
      },
      "tenure_type": "TRIAL",
      "sequence": 1,
      "total_cycles": 2,
      "pricing_scheme": {
        "fixed_price": {
          "value": "3",
          "currency_code": "USD"
        }
      }
    },
    {
      "frequency": {
        "interval_unit": "MONTH",
        "interval_count": 1
      },
      "tenure_type": "TRIAL",
      "sequence": 2,
      "total_cycles": 3,
      "pricing_scheme": {
        "fixed_price": {
          "value": "6",
          "currency_code": "USD"
        }
      }
    },
    {
      "frequency": {
        "interval_unit": "MONTH",
        "interval_count": 1
      },
      "tenure_type": "REGULAR",
      "sequence": 3,
      "total_cycles": 12,
      "pricing_scheme": {
        "fixed_price": {
          "value": "10",
          "currency_code": "USD"
        }
      }
    }
  ],
  "payment_preferences": {
    "auto_bill_outstanding": true,
    "setup_fee": {
      "value": "10",
      "currency_code": "USD"
    },
    "setup_fee_failure_action": "CONTINUE",
    "payment_failure_threshold": 3
  },
  "taxes": {
    "percentage": "10",
    "inclusive": false
  }
}
```

<h3 id="create-plan-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Prefer|header|string|false|The preferred server response upon successful completion of the request. Value is:<ul><li><code>return=minimal</code>. The server returns a minimal response to optimize communication between the API caller and the server. A minimal response includes the <code>id</code>, <code>status</code> and HATEOAS links.</li><li><code>return=representation</code>. The server returns a complete resource representation, including the current state of the resource.</li></ul>|
|PayPal-Request-Id|header|string|false|The server stores keys for 72 hours.|
|body|body|[plan_request_POST](#schemaplan_request_post)|false|none|
|» product_id|body|string|true|The ID of the product created through Catalog Products API.|
|» name|body|string|true|The plan name.|
|» status|body|string|false|The initial state of the plan. Allowed input values are CREATED and ACTIVE.|
|» description|body|string|false|The detailed description of the plan.|
|» billing_cycles|body|[billing_cycle_list](#schemabilling_cycle_list)|true|An array of billing cycles for trial billing and regular billing. A plan can have at most two trial cycles and only one regular cycle.|
|» payment_preferences|body|[payment_preferences](#schemapayment_preferences)|true|The payment preferences for a subscription.|
|» taxes|body|[taxes](#schemataxes)|false|The tax details.|
|» quantity_supported|body|boolean|false|Indicates whether you can subscribe to this plan by providing a quantity for the goods or service.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» status|CREATED|
|» status|INACTIVE|
|» status|ACTIVE|

> Example responses

> 200 Response

```json
{
  "id": "P-5ML4271244454362WXNWU5NQ",
  "product_id": "PROD-XXCD1234QWER65782",
  "name": "Video Streaming Service Plan",
  "description": "Video Streaming Service basic plan",
  "status": "ACTIVE",
  "billing_cycles": [
    {
      "frequency": {
        "interval_unit": "MONTH",
        "interval_count": 1
      },
      "tenure_type": "TRIAL",
      "sequence": 1,
      "total_cycles": 2,
      "pricing_scheme": {
        "fixed_price": {
          "value": "3",
          "currency_code": "USD"
        },
        "version": 1,
        "create_time": "2020-05-27T12:13:51Z",
        "update_time": "2020-05-27T12:13:51Z"
      }
    },
    {
      "frequency": {
        "interval_unit": "MONTH",
        "interval_count": 1
      },
      "tenure_type": "TRIAL",
      "sequence": 2,
      "total_cycles": 3,
      "pricing_scheme": {
        "fixed_price": {
          "currency_code": "USD",
          "value": "6"
        },
        "version": 1,
        "create_time": "2020-05-27T12:13:51Z",
        "update_time": "2020-05-27T12:13:51Z"
      }
    },
    {
      "frequency": {
        "interval_unit": "MONTH",
        "interval_count": 1
      },
      "tenure_type": "REGULAR",
      "sequence": 3,
      "total_cycles": 12,
      "pricing_scheme": {
        "fixed_price": {
          "currency_code": "USD",
          "value": "10"
        },
        "version": 1,
        "create_time": "2020-05-27T12:13:51Z",
        "update_time": "2020-05-27T12:13:51Z"
      }
    }
  ],
  "payment_preferences": {
    "auto_bill_outstanding": true,
    "setup_fee": {
      "value": "10",
      "currency_code": "USD"
    },
    "setup_fee_failure_action": "CONTINUE",
    "payment_failure_threshold": 3
  },
  "taxes": {
    "percentage": "10",
    "inclusive": false
  },
  "create_time": "2020-05-27T12:13:51Z",
  "update_time": "2020-05-27T12:13:51Z",
  "links": [
    {
      "href": "https://api-m.paypal.com/v1/billing/plans/P-5ML4271244454362WXNWU5NQ",
      "rel": "self",
      "method": "GET"
    },
    {
      "href": "https://api-m.paypal.com/v1/billing/plans/P-5ML4271244454362WXNWU5NQ",
      "rel": "edit",
      "method": "PATCH"
    },
    {
      "href": "https://api-m.paypal.com/v1/billing/plans/P-5ML4271244454362WXNWU5NQ/deactivate",
      "rel": "deactivate",
      "method": "POST"
    },
    {
      "href": "https://api-m.paypal.com/v1/billing/plans/P-5ML4271244454362WXNWU5NQ/update-pricing-schemes",
      "rel": "edit",
      "method": "POST"
    }
  ]
}
```

> 201 Response

```json
{
  "id": "stringstringstringstringst",
  "product_id": "stringstringstringstri",
  "name": "string",
  "status": "CREATED",
  "description": "string",
  "billing_cycles": [
    {
      "pricing_scheme": {
        "version": 0,
        "fixed_price": {
          "currency_code": "str",
          "value": "string"
        },
        "pricing_model": "VOLUME",
        "tiers": [
          {
            "starting_quantity": "string",
            "ending_quantity": "string",
            "amount": {
              "currency_code": "str",
              "value": "string"
            }
          }
        ],
        "create_time": "stringstringstringst",
        "update_time": "stringstringstringst"
      },
      "frequency": {
        "interval_unit": "DAY",
        "interval_count": 1
      },
      "tenure_type": "REGULAR",
      "sequence": 1,
      "total_cycles": 1
    }
  ],
  "payment_preferences": {
    "auto_bill_outstanding": true,
    "setup_fee": {
      "currency_code": "str",
      "value": "string"
    },
    "setup_fee_failure_action": "CANCEL",
    "payment_failure_threshold": 0
  },
  "taxes": {
    "percentage": "string",
    "inclusive": true
  },
  "quantity_supported": false,
  "create_time": "stringstringstringst",
  "update_time": "stringstringstringst",
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
      "issue": "INVALID_PARAMETER_SYNTAX",
      "description": "The value of a field does not conform to the expected format."
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

> 401 Response

```json
{
  "name": "AUTHENTICATION_FAILURE",
  "message": "Authentication failed due to missing authorization header, or invalid authentication credentials.",
  "details": [
    {
      "issue": "INVALID_ACCOUNT_STATUS",
      "description": "Account validations failed for the user."
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
      "description": "You do not have permission to access or perform operations on this resource."
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
      "issue": "USER_ACCOUNT_CLOSED",
      "description": "User account locked or closed."
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

<h3 id="create-plan-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful request returns the HTTP `200 OK` status code and a JSON response body that shows billing plan details.|[plan](#schemaplan)|
|201|Created|A successful request returns the HTTP `201 Created` status code and a JSON response body that shows billing plan details.|[plan](#schemaplan)|
|400|Bad Request|Bad Request. Request is not well-formed, syntactically incorrect, or violates schema.|Inline|
|401|Unauthorized|Authentication failed due to missing authorization header, or invalid authentication credentials.|Inline|
|403|Forbidden|Authorization failed due to insufficient permissions.|Inline|
|422|Unprocessable Entity|The requested action could not be performed, semantically incorrect, or failed business validation.|Inline|
|500|Internal Server Error|An internal server error has occurred.|[error_500](#schemaerror_500)|
|default|Default|The default response.|[error_default](#schemaerror_default)|

<h3 id="create-plan-responseschema">Response Schema</h3>

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
|» issue|INVALID_PARAMETER_SYNTAX|
|» description|The value of a field does not conform to the expected format.|
|» issue|INVALID_PARAMETER_VALUE|
|» description|The value of a field is invalid.|
|» issue|MISSING_REQUIRED_PARAMETER|
|» description|A required field is missing.|
|» issue|INVALID_STRING_MIN_LENGTH|
|» description|The value of a field is too short.|
|» issue|INVALID_STRING_MAX_LENGTH|
|» description|The value of a field is too long.|
|» issue|INVALID_INTEGER_MIN_VALUE|
|» description|The integer value of a field is too small.|
|» issue|INVALID_INTEGER_MAX_VALUE|
|» description|The integer value of a field is too large.|

Status Code **401**

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
|name|AUTHENTICATION_FAILURE|
|message|Authentication failed due to missing authorization header, or invalid authentication credentials.|
|» issue|INVALID_ACCOUNT_STATUS|
|» description|Account validations failed for the user.|

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
|» description|You do not have permission to access or perform operations on this resource.|

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
|name|UNPROCESSABLE_ENTITY|
|message|The requested action could not be performed, semantically incorrect, or failed business validation.|
|» issue|USER_ACCOUNT_CLOSED|
|» description|User account locked or closed.|
|» issue|CURRENCY_MISMATCH|
|» description|All currency codes in the request should be of similar value.|
|» issue|MULTIPLE_FREE_TRIAL_BILLING_CYCLES_NOT_SUPPORTED|
|» description|Only one free trial billing cycle is allowed.|
|» issue|MORE_THAN_TWO_TRIAL_BILLING_CYCLE_NOT_SUPPORTED|
|» description|Only two trial billing cycles are allowed.|
|» issue|MISSING_REGULAR_BILLING_CYCLE|
|» description|Plan should have at least one regular billing cycle.|
|» issue|MULTIPLE_REGULAR_BILLING_CYCLES_NOT_SUPPORTED|
|» description|Only one regular billing cycle is allowed.|
|» issue|INVALID_BILLING_CYCLE_SEQUENCE|
|» description|Billing cycle sequence should start with `1` and be consecutive.|
|» issue|INVALID_BILLING_CYCLE_SEQUENCE|
|» description|Trial Billing cycle should precede regular billing cycle.|
|» issue|INVALID_TRIAL_BILLING_TOTAL_CYCLES|
|» description|Total cycles for trial billing must be greater than '0'.|
|» issue|INVALID_PRICING_TIER_AMOUNT|
|» description|Free tiers are not supported.|
|» issue|MISSING_PRICING_SCHEME_TIERS|
|» description|Tier(s) are missing for some quantities.|
|» issue|OVERLAPPING_PRICING_SCHEME_TIERS|
|» description|The specified quantity overlaps with multiple pricing tiers.|
|» issue|INVALID_PRICING_MODEL|
|» description|The specified pricing model is not supported for trial billing cycle.|
|» issue|FIXED_PRICE_NOT_SUPPORTED|
|» description|Fixed price is not supported for tiered pricing schemes.|
|» issue|INVALID_PRICING_TIER_QUANTITY|
|» description|Tier starting quantity must be less than ending quantity.|
|» issue|INVALID_QUANTITY_SUPPORTED|
|» description|Quantity is always supported for volume and tiered plans.|
|» issue|CURRENCY_NOT_SUPPORTED_FOR_RECEIVER|
|» description|This currency cannot be accepted for this recipient’s account.|
|» issue|INVALID_METADATA_CUSTOM_NOTE|
|» description|Merchant custom note cannot exceed 255 characters.|
|» issue|INVALID_METADATA_INVOICE_ID|
|» description|Invoice id cannot exceed 127 characters.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://uri.paypal.com/services/subscriptions )
</aside>

## Show plan details

<a id="opIdplans.get"></a>

> Code samples

```bash
curl https://api-m.paypal.com/v1/billing/plans/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/billing/plans/{id}`

Shows details for a plan, by ID.

<h3 id="show-plan-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the subscription.|

> Example responses

> 200 Response

```json
{
  "id": "stringstringstringstringst",
  "product_id": "stringstringstringstri",
  "name": "string",
  "status": "CREATED",
  "description": "string",
  "billing_cycles": [
    {
      "pricing_scheme": {
        "version": 0,
        "fixed_price": {
          "currency_code": "str",
          "value": "string"
        },
        "pricing_model": "VOLUME",
        "tiers": [
          {
            "starting_quantity": "string",
            "ending_quantity": "string",
            "amount": {
              "currency_code": "str",
              "value": "string"
            }
          }
        ],
        "create_time": "stringstringstringst",
        "update_time": "stringstringstringst"
      },
      "frequency": {
        "interval_unit": "DAY",
        "interval_count": 1
      },
      "tenure_type": "REGULAR",
      "sequence": 1,
      "total_cycles": 1
    }
  ],
  "payment_preferences": {
    "auto_bill_outstanding": true,
    "setup_fee": {
      "currency_code": "str",
      "value": "string"
    },
    "setup_fee_failure_action": "CANCEL",
    "payment_failure_threshold": 0
  },
  "taxes": {
    "percentage": "string",
    "inclusive": true
  },
  "quantity_supported": false,
  "create_time": "stringstringstringst",
  "update_time": "stringstringstringst",
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

> 401 Response

```json
{
  "name": "AUTHENTICATION_FAILURE",
  "message": "Authentication failed due to missing authorization header, or invalid authentication credentials.",
  "details": [
    {
      "issue": "INVALID_ACCOUNT_STATUS",
      "description": "Account validations failed for the user."
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
      "description": "You do not have permission to access or perform operations on this resource."
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
      "issue": "INVALID_RESOURCE_ID",
      "description": "Specified resource ID does not exist. Please check the resource ID and try again."
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

<h3 id="show-plan-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful request returns the HTTP `200 OK` status code and a JSON response body that shows plan details.|[plan](#schemaplan)|
|401|Unauthorized|Authentication failed due to missing authorization header, or invalid authentication credentials.|Inline|
|403|Forbidden|Authorization failed due to insufficient permissions.|Inline|
|404|Not Found|The specified resource does not exist.|Inline|
|500|Internal Server Error|An internal server error has occurred.|[error_500](#schemaerror_500)|
|default|Default|The default response.|[error_default](#schemaerror_default)|

<h3 id="show-plan-details-responseschema">Response Schema</h3>

Status Code **401**

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
|name|AUTHENTICATION_FAILURE|
|message|Authentication failed due to missing authorization header, or invalid authentication credentials.|
|» issue|INVALID_ACCOUNT_STATUS|
|» description|Account validations failed for the user.|

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
|» description|You do not have permission to access or perform operations on this resource.|

Status Code **404**

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
|name|RESOURCE_NOT_FOUND|
|message|The specified resource does not exist.|
|» issue|INVALID_RESOURCE_ID|
|» description|Specified resource ID does not exist. Please check the resource ID and try again.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://uri.paypal.com/services/subscriptions )
</aside>

## Update plan

<a id="opIdplans.patch"></a>

> Code samples

```bash
curl https://api-m.paypal.com/v1/billing/plans/string \
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

`PATCH /v1/billing/plans/{id}`

Updates a plan with the `CREATED` or `ACTIVE` status. For an `INACTIVE` plan, you can make only status updates.<br/>You can patch these attributes and objects:<table><thead><tr><th>Attribute or object</th><th>Operations</th></tr></thead><tbody><tr><td><code>description</code></td><td>replace</td></tr><tr><td><code>payment_preferences.auto_bill_outstanding</code></td><td>replace</td></tr><tr><td><code>taxes.percentage</code></td><td>replace</td></tr><tr><td><code>payment_preferences.payment_failure_threshold</code></td><td>replace</td></tr><tr><td><code>payment_preferences.setup_fee</code></td><td>replace</td></tr><tr><td><code>payment_preferences.setup_fee_failure_action</code></td><td>replace</td></tr><tr><td><code>name</code></td><td>replace</td></tr></tbody></table>

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

<h3 id="update-plan-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the subscription.|
|body|body|[patch_request](#schemapatch_request)|false|none|

> Example responses

> 400 Response

```json
{
  "name": "INVALID_REQUEST",
  "message": "Request is not well-formed, syntactically incorrect, or violates schema.",
  "details": [
    {
      "issue": "UNSUPPORTED_PATCH_OPERATION",
      "description": "The specified patch operation not supported for this field."
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

> 401 Response

```json
{
  "name": "AUTHENTICATION_FAILURE",
  "message": "Authentication failed due to missing authorization header, or invalid authentication credentials.",
  "details": [
    {
      "issue": "INVALID_ACCOUNT_STATUS",
      "description": "Account validations failed for the user."
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
      "description": "You do not have permission to access or perform operations on this resource."
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
      "issue": "INVALID_RESOURCE_ID",
      "description": "Specified resource ID does not exist. Please check the resource ID and try again."
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
      "issue": "USER_ACCOUNT_CLOSED",
      "description": "User account locked or closed."
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

<h3 id="update-plan-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|A successful request returns the HTTP `204 No Content` status code with no JSON response body.|None|
|400|Bad Request|Request is not well-formed, syntactically incorrect, or violates schema.|Inline|
|401|Unauthorized|Authentication failed due to missing authorization header, or invalid authentication credentials.|Inline|
|403|Forbidden|Authorization failed due to insufficient permissions.|Inline|
|404|Not Found|The specified resource does not exist.|Inline|
|422|Unprocessable Entity|The requested action could not be performed, semantically incorrect, or failed business validation.|Inline|
|500|Internal Server Error|An internal server error has occurred.|[error_500](#schemaerror_500)|
|default|Default|The default response.|[error_default](#schemaerror_default)|

<h3 id="update-plan-responseschema">Response Schema</h3>

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
|» issue|UNSUPPORTED_PATCH_OPERATION|
|» description|The specified patch operation not supported for this field.|
|» issue|INVALID_PATCH_PATH|
|» description|The specified field cannot be patched.|
|» issue|INVALID_PATCH_PATH|
|» description|Multiple operations on the same field are not allowed.|
|» issue|INVALID_PARAMETER_SYNTAX|
|» description|The value of a field does not conform to the expected format.|
|» issue|INVALID_PARAMETER_VALUE|
|» description|The value of a field is invalid.|
|» issue|INVALID_PARAMETER_VALUE|
|» description|The field is not eligible for '$value' patch operation.|

Status Code **401**

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
|name|AUTHENTICATION_FAILURE|
|message|Authentication failed due to missing authorization header, or invalid authentication credentials.|
|» issue|INVALID_ACCOUNT_STATUS|
|» description|Account validations failed for the user.|

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
|» description|You do not have permission to access or perform operations on this resource.|

Status Code **404**

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
|name|RESOURCE_NOT_FOUND|
|message|The specified resource does not exist.|
|» issue|INVALID_RESOURCE_ID|
|» description|Specified resource ID does not exist. Please check the resource ID and try again.|

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
|» issue|USER_ACCOUNT_CLOSED|
|» description|User account locked or closed.|
|» issue|PLAN_STATUS_INACTIVE|
|» description|Status update is the only patchable filed on an inactive plan.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://uri.paypal.com/services/subscriptions )
</aside>

## Activate plan

<a id="opIdplans.activate"></a>

> Code samples

```bash
curl https://api-m.paypal.com/v1/billing/plans/string/activate \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v1/billing/plans/{id}/activate`

Activates a plan, by ID.

<h3 id="activate-plan-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the subscription.|

> Example responses

> 401 Response

```json
{
  "name": "AUTHENTICATION_FAILURE",
  "message": "Authentication failed due to missing authorization header, or invalid authentication credentials.",
  "details": [
    {
      "issue": "INVALID_ACCOUNT_STATUS",
      "description": "Account validations failed for the user."
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
      "description": "You do not have permission to access or perform operations on this resource."
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
      "issue": "INVALID_RESOURCE_ID",
      "description": "Specified resource ID does not exist. Please check the resource ID and try again."
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
      "issue": "USER_ACCOUNT_CLOSED",
      "description": "User account locked or closed."
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

<h3 id="activate-plan-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|A successful request returns the HTTP `204 No Content` status code with no JSON response body.|None|
|401|Unauthorized|Authentication failed due to missing authorization header, or invalid authentication credentials.|Inline|
|403|Forbidden|Authorization failed due to insufficient permissions.|Inline|
|404|Not Found|The specified resource does not exist.|Inline|
|422|Unprocessable Entity|The requested action could not be performed, semantically incorrect, or failed business validation.|Inline|
|500|Internal Server Error|An internal server error has occurred.|[error_500](#schemaerror_500)|
|default|Default|The default response.|[error_default](#schemaerror_default)|

<h3 id="activate-plan-responseschema">Response Schema</h3>

Status Code **401**

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
|name|AUTHENTICATION_FAILURE|
|message|Authentication failed due to missing authorization header, or invalid authentication credentials.|
|» issue|INVALID_ACCOUNT_STATUS|
|» description|Account validations failed for the user.|

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
|» description|You do not have permission to access or perform operations on this resource.|

Status Code **404**

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
|name|RESOURCE_NOT_FOUND|
|message|The specified resource does not exist.|
|» issue|INVALID_RESOURCE_ID|
|» description|Specified resource ID does not exist. Please check the resource ID and try again.|

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
|» issue|USER_ACCOUNT_CLOSED|
|» description|User account locked or closed.|
|» issue|PLAN_STATUS_INVALID|
|» description|Invalid plan status for activate action; plan status should be either created or inactive.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://uri.paypal.com/services/subscriptions )
</aside>

## Deactivate plan

<a id="opIdplans.deactivate"></a>

> Code samples

```bash
curl https://api-m.paypal.com/v1/billing/plans/string/deactivate \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /v1/billing/plans/{id}/deactivate`

Deactivates a plan, by ID.

<h3 id="deactivate-plan-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the subscription.|

> Example responses

> 401 Response

```json
{
  "name": "AUTHENTICATION_FAILURE",
  "message": "Authentication failed due to missing authorization header, or invalid authentication credentials.",
  "details": [
    {
      "issue": "INVALID_ACCOUNT_STATUS",
      "description": "Account validations failed for the user."
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
      "description": "You do not have permission to access or perform operations on this resource."
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
      "issue": "INVALID_RESOURCE_ID",
      "description": "Specified resource ID does not exist. Please check the resource ID and try again."
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
      "issue": "USER_ACCOUNT_CLOSED",
      "description": "User account locked or closed."
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

<h3 id="deactivate-plan-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|A successful request returns the HTTP `204 No Content` status code with no JSON response body.|None|
|401|Unauthorized|Authentication failed due to missing authorization header, or invalid authentication credentials.|Inline|
|403|Forbidden|Authorization failed due to insufficient permissions.|Inline|
|404|Not Found|The specified resource does not exist.|Inline|
|422|Unprocessable Entity|The requested action could not be performed, semantically incorrect, or failed business validation.|Inline|
|500|Internal Server Error|An internal server error has occurred.|[error_500](#schemaerror_500)|
|default|Default|The default response.|[error_default](#schemaerror_default)|

<h3 id="deactivate-plan-responseschema">Response Schema</h3>

Status Code **401**

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
|name|AUTHENTICATION_FAILURE|
|message|Authentication failed due to missing authorization header, or invalid authentication credentials.|
|» issue|INVALID_ACCOUNT_STATUS|
|» description|Account validations failed for the user.|

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
|» description|You do not have permission to access or perform operations on this resource.|

Status Code **404**

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
|name|RESOURCE_NOT_FOUND|
|message|The specified resource does not exist.|
|» issue|INVALID_RESOURCE_ID|
|» description|Specified resource ID does not exist. Please check the resource ID and try again.|

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
|» issue|USER_ACCOUNT_CLOSED|
|» description|User account locked or closed.|
|» issue|PLAN_STATUS_INVALID|
|» description|Invalid plan status for deactivate action; plan status should be active.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://uri.paypal.com/services/subscriptions )
</aside>

## Update pricing

<a id="opIdplans.update-pricing-schemes"></a>

> Code samples

```bash
curl https://api-m.paypal.com/v1/billing/plans/string/update-pricing-schemes \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "pricing_schemes": [
      {
        "billing_cycle_sequence": 1,
        "pricing_scheme": {
          "fixed_price": {
            "value": "50",
            "currency_code": "USD"
          }
        }
      },
      {
        "billing_cycle_sequence": 2,
        "pricing_scheme": {
          "fixed_price": {
            "value": "100",
            "currency_code": "USD"
          },
          "pricing_model": "VOLUME",
          "tiers": [
            {
              "starting_quantity": "1",
              "ending_quantity": "1000",
              "amount": {
                "value": "150",
                "currency_code": "USD"
              }
            },
            {
              "starting_quantity": "1001",
              "amount": {
                "value": "250",
                "currency_code": "USD"
              }
            }
          ]
        }
      }
    ]
  }'
```

`POST /v1/billing/plans/{id}/update-pricing-schemes`

Updates pricing for a plan. For example, you can update a regular billing cycle from $5 per month to $7 per month.

> Body parameter

```json
{
  "pricing_schemes": [
    {
      "billing_cycle_sequence": 1,
      "pricing_scheme": {
        "fixed_price": {
          "value": "50",
          "currency_code": "USD"
        }
      }
    },
    {
      "billing_cycle_sequence": 2,
      "pricing_scheme": {
        "fixed_price": {
          "value": "100",
          "currency_code": "USD"
        },
        "pricing_model": "VOLUME",
        "tiers": [
          {
            "starting_quantity": "1",
            "ending_quantity": "1000",
            "amount": {
              "value": "150",
              "currency_code": "USD"
            }
          },
          {
            "starting_quantity": "1001",
            "amount": {
              "value": "250",
              "currency_code": "USD"
            }
          }
        ]
      }
    }
  ]
}
```

<h3 id="update-pricing-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the subscription.|
|body|body|[update_pricing_schemes_list_request](#schemaupdate_pricing_schemes_list_request)|false|none|
|» pricing_schemes|body|[update_pricing_scheme_request_list](#schemaupdate_pricing_scheme_request_list)|true|An array of pricing schemes.|

> Example responses

> 400 Response

```json
{
  "name": "INVALID_REQUEST",
  "message": "Request is not well-formed, syntactically incorrect, or violates schema.",
  "details": [
    {
      "issue": "INVALID_PARAMETER_VALUE",
      "description": "The value of a field is invalid."
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

> 401 Response

```json
{
  "name": "AUTHENTICATION_FAILURE",
  "message": "Authentication failed due to missing authorization header, or invalid authentication credentials.",
  "details": [
    {
      "issue": "INVALID_ACCOUNT_STATUS",
      "description": "Account validations failed for the user."
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
      "description": "You do not have permission to access or perform operations on this resource."
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
      "issue": "INVALID_RESOURCE_ID",
      "description": "Specified resource ID does not exist. Please check the resource ID and try again."
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
      "issue": "CURRENCY_MISMATCH",
      "description": "The currency code is different from the plan's currency code."
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

<h3 id="update-pricing-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|A successful request returns the HTTP `204 No Content` status code with no JSON response body.|None|
|400|Bad Request|Bad Request. Request is not well-formed, syntactically incorrect, or violates schema.|Inline|
|401|Unauthorized|Authentication failed due to missing authorization header, or invalid authentication credentials.|Inline|
|403|Forbidden|Authorization failed due to insufficient permissions.|Inline|
|404|Not Found|The specified resource does not exist.|Inline|
|422|Unprocessable Entity|The requested action could not be performed, semantically incorrect, or failed business validation.|Inline|
|500|Internal Server Error|An internal server error has occurred.|[error_500](#schemaerror_500)|
|default|Default|The default response.|[error_default](#schemaerror_default)|

<h3 id="update-pricing-responseschema">Response Schema</h3>

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
|» issue|INVALID_PARAMETER_VALUE|
|» description|The value of a field is invalid.|
|» issue|MISSING_REQUIRED_PARAMETER|
|» description|A required field is missing.|

Status Code **401**

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
|name|AUTHENTICATION_FAILURE|
|message|Authentication failed due to missing authorization header, or invalid authentication credentials.|
|» issue|INVALID_ACCOUNT_STATUS|
|» description|Account validations failed for the user.|

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
|» description|You do not have permission to access or perform operations on this resource.|

Status Code **404**

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
|name|RESOURCE_NOT_FOUND|
|message|The specified resource does not exist.|
|» issue|INVALID_RESOURCE_ID|
|» description|Specified resource ID does not exist. Please check the resource ID and try again.|

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
|» issue|CURRENCY_MISMATCH|
|» description|The currency code is different from the plan's currency code.|
|» issue|INVALID_BILLING_CYCLE_SEQUENCE|
|» description|The provided billing cycle sequence is not available.|
|» issue|INVALID_PRICING_SCHEME|
|» description|The new pricing scheme should be of the same type as that of the old one.|
|» issue|INVALID_PRICING_TIER_AMOUNT|
|» description|Free tiers are not supported.|
|» issue|MISSING_PRICING_SCHEME_TIERS|
|» description|Tier(s) are missing for some quantities.|
|» issue|OVERLAPPING_PRICING_SCHEME_TIERS|
|» description|The specified quantity overlaps with multiple pricing tiers.|
|» issue|INVALID_PRICING_MODEL|
|» description|The specified pricing model is not supported for trial billing cycle.|
|» issue|FIXED_PRICE_NOT_SUPPORTED|
|» description|Fixed price is not supported for tiered pricing schemes.|
|» issue|INVALID_PRICING_TIER_QUANTITY|
|» description|Tier starting quantity must be less than ending quantity.|
|» issue|PRICING_SCHEME_UPDATE_NOT_ALLOWED|
|» description|Pricing scheme update is not allowed for the plan.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://uri.paypal.com/services/subscriptions )
</aside>

<h1 id="subscriptions-subscriptions">subscriptions</h1>

Use the `/billing/subscriptions` resource to create and manage subscriptions.

## Create subscription

<a id="opIdsubscriptions.create"></a>

> Code samples

```bash
curl https://api-m.paypal.com/v1/billing/subscriptions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "plan_id": "P-5ML4271244454362WXNWU5NQ",
    "start_time": "2018-11-01T00:00:00Z",
    "quantity": "20",
    "shipping_amount": {
      "currency_code": "USD",
      "value": "10.00"
    },
    "subscriber": {
      "name": {
        "given_name": "John",
        "surname": "Doe"
      },
      "email_address": "customer@example.com",
      "shipping_address": {
        "name": {
          "full_name": "John Doe"
        },
        "address": {
          "address_line_1": "2211 N First Street",
          "address_line_2": "Building 17",
          "admin_area_2": "San Jose",
          "admin_area_1": "CA",
          "postal_code": "95131",
          "country_code": "US"
        }
      }
    },
    "application_context": {
      "brand_name": "walmart",
      "locale": "en-US",
      "shipping_preference": "SET_PROVIDED_ADDRESS",
      "user_action": "SUBSCRIBE_NOW",
      "payment_method": {
        "payer_selected": "PAYPAL",
        "payee_preferred": "IMMEDIATE_PAYMENT_REQUIRED"
      },
      "return_url": "https://example.com/returnUrl",
      "cancel_url": "https://example.com/cancelUrl"
    }
  }'
```

`POST /v1/billing/subscriptions`

Creates a subscription.

> Body parameter

```json
{
  "plan_id": "P-5ML4271244454362WXNWU5NQ",
  "start_time": "2018-11-01T00:00:00Z",
  "quantity": "20",
  "shipping_amount": {
    "currency_code": "USD",
    "value": "10.00"
  },
  "subscriber": {
    "name": {
      "given_name": "John",
      "surname": "Doe"
    },
    "email_address": "customer@example.com",
    "shipping_address": {
      "name": {
        "full_name": "John Doe"
      },
      "address": {
        "address_line_1": "2211 N First Street",
        "address_line_2": "Building 17",
        "admin_area_2": "San Jose",
        "admin_area_1": "CA",
        "postal_code": "95131",
        "country_code": "US"
      }
    }
  },
  "application_context": {
    "brand_name": "walmart",
    "locale": "en-US",
    "shipping_preference": "SET_PROVIDED_ADDRESS",
    "user_action": "SUBSCRIBE_NOW",
    "payment_method": {
      "payer_selected": "PAYPAL",
      "payee_preferred": "IMMEDIATE_PAYMENT_REQUIRED"
    },
    "return_url": "https://example.com/returnUrl",
    "cancel_url": "https://example.com/cancelUrl"
  }
}
```

<h3 id="create-subscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Prefer|header|string|false|The preferred server response upon successful completion of the request. Value is:<ul><li><code>return=minimal</code>. The server returns a minimal response to optimize communication between the API caller and the server. A minimal response includes the <code>id</code>, <code>status</code> and HATEOAS links.</li><li><code>return=representation</code>. The server returns a complete resource representation, including the current state of the resource.</li></ul>|
|PayPal-Request-Id|header|string|false|The server stores keys for 72 hours.|
|body|body|[subscription_request_post](#schemasubscription_request_post)|false|none|
|» plan_id|body|string|true|The ID of the plan.|
|» start_time|body|[date_time](#schemadate_time)|false|The date and time when the subscription started, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).|
|» quantity|body|string|false|The quantity of the product in the subscription.|
|» shipping_amount|body|[money](#schemamoney)|false|The shipping charges.|
|» subscriber|body|[subscriber_request](#schemasubscriber_request)|false|none|
|» auto_renewal|body|boolean|false|**Deprecated.** DEPRECATED. Indicates whether the subscription auto-renews after the billing cycles complete.|
|» application_context|body|[application_context](#schemaapplication_context)|false|The application context, which customizes the payer experience during the subscription approval process with PayPal.|
|» custom_id|body|string|false|The custom id for the subscription. Can be invoice id.|
|» plan|body|[plan_override](#schemaplan_override)|false|An inline plan object to customise the subscription. You can override plan level default attributes by providing customised values for the subscription in this object.|
|» merchant_inventory|body|[merchant_inventory](#schemamerchant_inventory)|false|Merchant's inventory identifier details for the WPS hosted button.|

> Example responses

> 200 Response

```json
{
  "id": "I-BW452GLLEP1G",
  "status": "APPROVAL_PENDING",
  "status_update_time": "2018-12-10T21:20:49Z",
  "plan_id": "P-5ML4271244454362WXNWU5NQ",
  "plan_overridden": false,
  "start_time": "2018-11-01T00:00:00Z",
  "quantity": "20",
  "shipping_amount": {
    "currency_code": "USD",
    "value": "10.00"
  },
  "subscriber": {
    "name": {
      "given_name": "John",
      "surname": "Doe"
    },
    "email_address": "customer@example.com",
    "payer_id": "2J6QB8YJQSJRJ",
    "shipping_address": {
      "name": {
        "full_name": "John Doe"
      },
      "address": {
        "address_line_1": "2211 N First Street",
        "address_line_2": "Building 17",
        "admin_area_2": "San Jose",
        "admin_area_1": "CA",
        "postal_code": "95131",
        "country_code": "US"
      }
    }
  },
  "create_time": "2018-12-10T21:20:49Z",
  "links": [
    {
      "href": "https://www.paypal.com/webapps/billing/subscriptions?ba_token=BA-2M539689T3856352J",
      "rel": "approve",
      "method": "GET"
    },
    {
      "href": "https://api-m.paypal.com/v1/billing/subscriptions/I-BW452GLLEP1G",
      "rel": "edit",
      "method": "PATCH"
    },
    {
      "href": "https://api-m.paypal.com/v1/billing/subscriptions/I-BW452GLLEP1G",
      "rel": "self",
      "method": "GET"
    }
  ]
}
```

> 201 Response

```json
{
  "id": "I-BW452GLLEP1G",
  "status": "APPROVAL_PENDING",
  "status_update_time": "2018-12-10T21:20:49Z",
  "plan_id": "P-5ML4271244454362WXNWU5NQ",
  "plan_overridden": false,
  "start_time": "2018-11-01T00:00:00Z",
  "quantity": "20",
  "shipping_amount": {
    "currency_code": "USD",
    "value": "10.00"
  },
  "subscriber": {
    "name": {
      "given_name": "John",
      "surname": "Doe"
    },
    "email_address": "customer@example.com",
    "payer_id": "2J6QB8YJQSJRJ",
    "shipping_address": {
      "name": {
        "full_name": "John Doe"
      },
      "address": {
        "address_line_1": "2211 N First Street",
        "address_line_2": "Building 17",
        "admin_area_2": "San Jose",
        "admin_area_1": "CA",
        "postal_code": "95131",
        "country_code": "US"
      }
    }
  },
  "create_time": "2018-12-10T21:20:49Z",
  "links": [
    {
      "href": "https://www.paypal.com/webapps/billing/subscriptions?ba_token=BA-2M539689T3856352J",
      "rel": "approve",
      "method": "GET"
    },
    {
      "href": "https://api-m.paypal.com/v1/billing/subscriptions/I-BW452GLLEP1G",
      "rel": "edit",
      "method": "PATCH"
    },
    {
      "href": "https://api-m.paypal.com/v1/billing/subscriptions/I-BW452GLLEP1G",
      "rel": "self",
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
      "issue": "INVALID_PARAMETER_SYNTAX",
      "description": "The value of a field does not conform to the expected format."
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

> 401 Response

```json
{
  "name": "AUTHENTICATION_FAILURE",
  "message": "Authentication failed due to missing authorization header, or invalid authentication credentials.",
  "details": [
    {
      "issue": "INVALID_ACCOUNT_STATUS",
      "description": "Account validations failed for the user."
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
      "description": "You do not have permission to access or perform operations on this resource."
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
      "issue": "USER_ACCOUNT_CLOSED",
      "description": "User account locked or closed."
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

<h3 id="create-subscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful request returns the HTTP `200 OK` status code and a JSON response body that shows subscription details.|[subscription](#schemasubscription)|
|201|Created|A successful request returns the HTTP `201 Created` status code and a JSON response body that shows subscription details.|[subscription](#schemasubscription)|
|400|Bad Request|Bad Request. Request is not well-formed, syntactically incorrect, or violates schema.|Inline|
|401|Unauthorized|Authentication failed due to missing authorization header, or invalid authentication credentials.|Inline|
|403|Forbidden|Authorization failed due to insufficient permissions.|Inline|
|422|Unprocessable Entity|The requested action could not be performed, semantically incorrect, or failed business validation.|Inline|
|500|Internal Server Error|An internal server error has occurred.|[error_500](#schemaerror_500)|
|default|Default|The default response.|[error_default](#schemaerror_default)|

<h3 id="create-subscription-responseschema">Response Schema</h3>

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

#### Enumerated Values

|Property|Value|
|---|---|
|name|INVALID_REQUEST|
|message|Request is not well-formed, syntactically incorrect, or violates schema.|
|» issue|INVALID_PARAMETER_SYNTAX|
|» description|The value of a field does not conform to the expected format.|
|» issue|INVALID_STRING_MAX_LENGTH|
|» description|The value of a field is too long.|
|» issue|INVALID_PARAMETER_VALUE|
|» description|The value of a field is invalid.|
|» issue|INVALID_INTEGER_MIN_VALUE|
|» description|The integer value of a field is too small.|
|» issue|INVALID_INTEGER_MAX_VALUE|
|» description|The integer value of a field is too large.|
|» issue|INVALID_PARAMETER_VALUE|
|» description|Start time must be a valid future date and time.|
|» issue|MISSING_REQUEST_BODY|
|» description|Request body is missing.|
|» issue|MISSING_REQUIRED_PARAMETER|
|» description|A required field is missing.|
|» issue|INVALID_STRING_MAX_LENGTH|
|» description|The value of a field is too long.|

Status Code **401**

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
|name|AUTHENTICATION_FAILURE|
|message|Authentication failed due to missing authorization header, or invalid authentication credentials.|
|» issue|INVALID_ACCOUNT_STATUS|
|» description|Account validations failed for the user.|

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
|» description|You do not have permission to access or perform operations on this resource.|

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
|name|UNPROCESSABLE_ENTITY|
|message|The requested action could not be performed, semantically incorrect, or failed business validation.|
|» issue|USER_ACCOUNT_CLOSED|
|» description|User account locked or closed.|
|» issue|PLAN_STATUS_INVALID|
|» description|Invalid plan status for subscription creation; plan status should be active.|
|» issue|SUBSCRIPTION_CANNOT_HAVE_QUANTITY|
|» description|Subscription can't have quantity as the plan does not support quantity.|
|» issue|CARD_SUBSCRIPTIONS_NOT_ENABLED|
|» description|The account is not setup to be able to process subscriptions funded by card payments. Please contact PayPal customer support.|
|» issue|3DS_CARDS_NOT_SUPPORTED|
|» description|Cards that require 3DS authentication not supported.|
|» issue|INVALID_BILLING_CYCLE_SEQUENCE|
|» description|The provided billing cycle sequence is not available.|
|» issue|INVALID_PRICING_SCHEME|
|» description|The override plan pricing scheme should be of the same type as that of the original plan.|
|» issue|INVALID_PRICING_TIER_AMOUNT|
|» description|Free tiers are not supported.|
|» issue|MISSING_PRICING_SCHEME_TIERS|
|» description|Tier(s) are missing for some quantities.|
|» issue|OVERLAPPING_PRICING_SCHEME_TIERS|
|» description|The specified quantity overlaps with multiple pricing tiers.|
|» issue|INVALID_PRICING_MODEL|
|» description|The specified pricing model is not supported for trial billing cycle.|
|» issue|FIXED_PRICE_NOT_SUPPORTED|
|» description|Fixed price is not supported for tiered pricing schemes.|
|» issue|INVALID_PRICING_TIER_QUANTITY|
|» description|Tier starting quantity must be less than ending quantity.|
|» issue|CURRENCY_MISMATCH|
|» description|The currency code is different from the plan's currency code.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://uri.paypal.com/services/subscriptions )
</aside>

## Show subscription details

<a id="opIdsubscriptions.get"></a>

> Code samples

```bash
curl https://api-m.paypal.com/v1/billing/subscriptions/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/billing/subscriptions/{id}`

Shows details for a subscription, by ID.

<h3 id="show-subscription-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the subscription.|
|fields|query|string|false|List of fields that are to be returned in the response. Possible value for fields are last_failed_payment and plan.|

> Example responses

> 200 Response

```json
{
  "status": "APPROVAL_PENDING",
  "status_change_note": "string",
  "status_update_time": "stringstringstringst",
  "id": "string",
  "plan_id": "string",
  "start_time": "stringstringstringst",
  "quantity": "string",
  "shipping_amount": {
    "currency_code": "str",
    "value": "string"
  },
  "subscriber": {
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
    "shipping_address": {
      "name": {
        "full_name": "string"
      },
      "type": "SHIPPING",
      "options": [
        {
          "id": "string",
          "label": "string",
          "type": "SHIPPING",
          "amount": {
            "currency_code": "str",
            "value": "string"
          },
          "selected": true
        }
      ],
      "address": {
        "address_line_1": "string",
        "address_line_2": "string",
        "admin_area_2": "string",
        "admin_area_1": "string",
        "postal_code": "string",
        "country_code": "st"
      }
    },
    "payment_source": {
      "card": {
        "name": "string",
        "last_digits": "string",
        "brand": "VISA",
        "available_networks": [
          "VISA"
        ],
        "type": "CREDIT",
        "authentication_result": {
          "liability_shift": "NO",
          "three_d_secure": {
            "authentication_status": "Y",
            "enrollment_status": "Y"
          }
        },
        "attributes": {
          "vault": {
            "id": "string",
            "status": "VAULTED",
            "customer": {
              "id": "string"
            },
            "links": [
              {
                "href": "string",
                "rel": "string",
                "method": "GET"
              }
            ]
          }
        },
        "from_request": {
          "expiry": "strings",
          "last_digits": "stri"
        },
        "expiry": "strings",
        "bin_details": {
          "bin": "string",
          "issuing_bank": "string",
          "bin_country_code": "st",
          "products": [
            "string"
          ]
        },
        "billing_address": {
          "address_line_1": "string",
          "address_line_2": "string",
          "admin_area_2": "string",
          "admin_area_1": "string",
          "postal_code": "string",
          "country_code": "st"
        },
        "currency_code": "str"
      }
    }
  },
  "billing_info": {
    "outstanding_balance": {
      "currency_code": "str",
      "value": "string"
    },
    "cycle_executions": [
      {
        "tenure_type": "REGULAR",
        "sequence": 0,
        "cycles_completed": 0,
        "cycles_remaining": 0,
        "current_pricing_scheme_version": 1,
        "total_cycles": 0
      }
    ],
    "last_payment": {
      "amount": {
        "currency_code": "str",
        "value": "string"
      },
      "time": "stringstringstringst"
    },
    "next_billing_time": "stringstringstringst",
    "final_payment_time": "stringstringstringst",
    "failed_payments_count": 0,
    "last_failed_payment": {
      "amount": {
        "currency_code": "str",
        "value": "string"
      },
      "time": "stringstringstringst",
      "reason_code": "PAYMENT_DENIED",
      "next_payment_retry_time": "stringstringstringst"
    }
  },
  "create_time": "stringstringstringst",
  "update_time": "stringstringstringst",
  "custom_id": "string",
  "plan_overridden": true,
  "plan": {
    "product_id": "stringstringstringstri",
    "name": "string",
    "description": "string",
    "billing_cycles": [
      {
        "pricing_scheme": {
          "version": 0,
          "fixed_price": {
            "currency_code": "str",
            "value": "string"
          },
          "pricing_model": "VOLUME",
          "tiers": [
            {
              "starting_quantity": "string",
              "ending_quantity": "string",
              "amount": {
                "currency_code": "str",
                "value": "string"
              }
            }
          ],
          "create_time": "stringstringstringst",
          "update_time": "stringstringstringst"
        },
        "frequency": {
          "interval_unit": "DAY",
          "interval_count": 1
        },
        "tenure_type": "REGULAR",
        "sequence": 1,
        "total_cycles": 1
      }
    ],
    "payment_preferences": {
      "auto_bill_outstanding": true,
      "setup_fee": {
        "currency_code": "str",
        "value": "string"
      },
      "setup_fee_failure_action": "CANCEL",
      "payment_failure_threshold": 0
    },
    "taxes": {
      "percentage": "string",
      "inclusive": true
    },
    "quantity_supported": false
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

> 401 Response

```json
{
  "name": "AUTHENTICATION_FAILURE",
  "message": "Authentication failed due to missing authorization header, or invalid authentication credentials.",
  "details": [
    {
      "issue": "INVALID_ACCOUNT_STATUS",
      "description": "Account validations failed for the user."
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
      "description": "You do not have permission to access or perform operations on this resource."
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
      "issue": "INVALID_RESOURCE_ID",
      "description": "Specified resource ID does not exist. Please check the resource ID and try again."
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

<h3 id="show-subscription-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful request returns the HTTP `200 OK` status code and a JSON response body that shows subscription details.|[subscription](#schemasubscription)|
|401|Unauthorized|Authentication failed due to missing authorization header, or invalid authentication credentials.|Inline|
|403|Forbidden|Authorization failed due to insufficient permissions.|Inline|
|404|Not Found|The specified resource does not exist.|Inline|
|500|Internal Server Error|An internal server error has occurred.|[error_500](#schemaerror_500)|
|default|Default|The default response.|[error_default](#schemaerror_default)|

<h3 id="show-subscription-details-responseschema">Response Schema</h3>

Status Code **401**

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
|name|AUTHENTICATION_FAILURE|
|message|Authentication failed due to missing authorization header, or invalid authentication credentials.|
|» issue|INVALID_ACCOUNT_STATUS|
|» description|Account validations failed for the user.|

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
|» description|You do not have permission to access or perform operations on this resource.|

Status Code **404**

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
|name|RESOURCE_NOT_FOUND|
|message|The specified resource does not exist.|
|» issue|INVALID_RESOURCE_ID|
|» description|Specified resource ID does not exist. Please check the resource ID and try again.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://uri.paypal.com/services/subscriptions )
</aside>

## Update subscription

<a id="opIdsubscriptions.patch"></a>

> Code samples

```bash
curl https://api-m.paypal.com/v1/billing/subscriptions/string \
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

`PATCH /v1/billing/subscriptions/{id}`

Updates a subscription which could be in <code>ACTIVE</code> or <code>SUSPENDED</code> status. You can override plan level default attributes by providing customised values for plan path in the patch request.<br /> <ul> <li>You cannot update attributes that have already completed (Example - trial cycles can’t be updated if completed).</li> <li>Once overridden, changes to plan resource will not impact subscription.</li> <li>Any price update will not impact billing cycles within next 10 days (Applicable only for subscriptions funded by PayPal account).</li> </ul> Following are the fields eligible for patch.<table><thead><tr><th>Attribute or object</th><th>Operations</th></tr></thead><tbody><tr><td><code>billing_info.outstanding_balance</code></td><td>replace</td></tr><tr><td><code>custom_id</code></td><td>add,replace</td></tr><tr><td><code>plan.billing_cycles[@sequence==n].<br/>pricing_scheme.fixed_price</code></td><td>add,replace</td></tr><tr><td><code>plan.billing_cycles[@sequence==n].<br/>pricing_scheme.tiers</code></td><td>replace</td></tr><tr><td><code>plan.billing_cycles[@sequence==n].<br/>total_cycles</code></td><td>replace</td></tr><tr><td><code>plan.payment_preferences.<br/>auto_bill_outstanding</code></td><td>replace</td></tr><tr><td><code>plan.payment_preferences.<br/>payment_failure_threshold</code></td><td>replace</td></tr><tr><td><code>plan.taxes.inclusive</code></td><td>add,replace</td></tr><tr><td><code>plan.taxes.percentage</code></td><td>add,replace</td></tr><tr><td><code>shipping_amount</code></td><td>add,replace</td></tr><tr><td><code>start_time</code></td><td>replace</td></tr><tr><td><code>subscriber.shipping_address</code></td><td>add,replace</td></tr><tr><td><code>subscriber.payment_source (for subscriptions funded<br/>by card payments)</code></td><td>replace</td></tr></tbody></table>

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

<h3 id="update-subscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the subscription.|
|body|body|[patch_request](#schemapatch_request)|false|none|

> Example responses

> 400 Response

```json
{
  "name": "INVALID_REQUEST",
  "message": "Request is not well-formed, syntactically incorrect, or violates schema.",
  "details": [
    {
      "issue": "UNSUPPORTED_PATCH_OPERATION",
      "description": "The specified patch operation not supported for this field."
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

> 401 Response

```json
{
  "name": "AUTHENTICATION_FAILURE",
  "message": "Authentication failed due to missing authorization header, or invalid authentication credentials.",
  "details": [
    {
      "issue": "INVALID_ACCOUNT_STATUS",
      "description": "Account validations failed for the user."
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
      "description": "You do not have permission to access or perform operations on this resource."
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
      "issue": "INVALID_RESOURCE_ID",
      "description": "Specified resource ID does not exist. Please check the resource ID and try again."
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
      "issue": "USER_ACCOUNT_CLOSED",
      "description": "User account locked or closed."
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

<h3 id="update-subscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|A successful request returns the HTTP `204 No Content` status code with no JSON response body.|None|
|400|Bad Request|Request is not well-formed, syntactically incorrect, or violates schema.|Inline|
|401|Unauthorized|Authentication failed due to missing authorization header, or invalid authentication credentials.|Inline|
|403|Forbidden|Authorization failed due to insufficient permissions.|Inline|
|404|Not Found|The specified resource does not exist.|Inline|
|422|Unprocessable Entity|The requested action could not be performed, semantically incorrect, or failed business validation.|Inline|
|500|Internal Server Error|An internal server error has occurred.|[error_500](#schemaerror_500)|
|default|Default|The default response.|[error_default](#schemaerror_default)|

<h3 id="update-subscription-responseschema">Response Schema</h3>

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
|» issue|UNSUPPORTED_PATCH_OPERATION|
|» description|The specified patch operation not supported for this field.|
|» issue|INVALID_PATCH_PATH|
|» description|The specified field cannot be patched.|
|» issue|INVALID_PATCH_PATH|
|» description|Multiple operations on the same field are not allowed.|
|» issue|INVALID_PARAMETER_SYNTAX|
|» description|The value of a field does not conform to the expected format.|
|» issue|INVALID_PARAMETER_VALUE|
|» description|The value of a field is invalid.|
|» issue|INVALID_STRING_MAX_LENGTH|
|» description|The value of a field is too long.|
|» issue|INVALID_STRING_MIN_LENGTH|
|» description|The value of a field is too short.|
|» issue|INVALID_INTEGER_MIN_VALUE|
|» description|The integer value of a field is too small.|
|» issue|INVALID_INTEGER_MAX_VALUE|
|» description|The integer value of a field is too large.|
|» issue|MISSING_REQUEST_BODY|
|» description|Request body is missing.|
|» issue|MISSING_REQUIRED_PARAMETER|
|» description|A required field is missing.|

Status Code **401**

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
|name|AUTHENTICATION_FAILURE|
|message|Authentication failed due to missing authorization header, or invalid authentication credentials.|
|» issue|INVALID_ACCOUNT_STATUS|
|» description|Account validations failed for the user.|

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
|» description|You do not have permission to access or perform operations on this resource.|

Status Code **404**

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
|name|RESOURCE_NOT_FOUND|
|message|The specified resource does not exist.|
|» issue|INVALID_RESOURCE_ID|
|» description|Specified resource ID does not exist. Please check the resource ID and try again.|

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
|name|UNPROCESSABLE_ENTITY|
|message|The requested action could not be performed, semantically incorrect, or failed business validation.|
|» issue|USER_ACCOUNT_CLOSED|
|» description|User account locked or closed.|
|» issue|SUBSCRIPTION_STATUS_INVALID|
|» description|Invalid subscription status for patch action; subscription status should be either active or suspended.|
|» issue|CARD_SUBSCRIPTIONS_NOT_ENABLED|
|» description|The account is not setup to be able to process subscriptions funded by card payments. Please contact PayPal customer support.|
|» issue|3DS_CARDS_NOT_SUPPORTED|
|» description|Cards that require 3DS authentication not supported.|
|» issue|BILLING_CYCLE_EXECUTION_COMPLETED|
|» description|Update cannot be performed on a billing cycle that has completed execution.|
|» issue|AMOUNT_GREATER_THAN_OUTSTANDING_BALANCE|
|» description|The new outstanding balance cannot be greater than the current outstanding balance.|
|» issue|INVALID_BILLING_TOTAL_CYCLES|
|» description|The total cycles cannot be less than the number of billing cycles completed.|
|» issue|INVALID_PRICING_TIER_AMOUNT|
|» description|Free tiers are not supported.|
|» issue|MISSING_PRICING_SCHEME_TIERS|
|» description|Tier(s) are missing for some quantities.|
|» issue|OVERLAPPING_PRICING_SCHEME_TIERS|
|» description|The specified quantity overlaps with multiple pricing tiers.|
|» issue|INVALID_PRICING_MODEL|
|» description|The specified pricing model is not supported for trial billing cycle.|
|» issue|FIXED_PRICE_NOT_SUPPORTED|
|» description|Fixed price is not supported for tiered pricing schemes.|
|» issue|INVALID_PRICING_TIER_QUANTITY|
|» description|Tier starting quantity must be less than ending quantity.|
|» issue|INVALID_START_TIME|
|» description|The start time cannot be updated for a subscription that has been activated.|
|» issue|CURRENCY_MISMATCH|
|» description|The currency code is different from the subscription's currency code.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://uri.paypal.com/services/subscriptions )
</aside>

## Revise plan or quantity of subscription

<a id="opIdsubscriptions.revise"></a>

> Code samples

```bash
curl https://api-m.paypal.com/v1/billing/subscriptions/string/revise \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "plan_id": "P-5ML4271244454362WXNWU5NQ",
    "shipping_amount": {
      "currency_code": "USD",
      "value": "10.00"
    },
    "shipping_address": {
      "name": {
        "full_name": "John Doe"
      },
      "address": {
        "address_line_1": "2211 N First Street",
        "address_line_2": "Building 17",
        "admin_area_2": "San Jose",
        "admin_area_1": "CA",
        "postal_code": "95131",
        "country_code": "US"
      }
    },
    "application_context": {
      "brand_name": "walmart",
      "locale": "en-US",
      "shipping_preference": "SET_PROVIDED_ADDRESS",
      "payment_method": {
        "payer_selected": "PAYPAL",
        "payee_preferred": "IMMEDIATE_PAYMENT_REQUIRED"
      },
      "return_url": "https://example.com/returnUrl",
      "cancel_url": "https://example.com/cancelUrl"
    }
  }'
```

`POST /v1/billing/subscriptions/{id}/revise`

Updates the quantity of the product or service in a subscription. You can also use this method to switch the plan and update the `shipping_amount`, `shipping_address` values for the subscription. This type of update requires the buyer's consent.

> Body parameter

```json
{
  "plan_id": "P-5ML4271244454362WXNWU5NQ",
  "shipping_amount": {
    "currency_code": "USD",
    "value": "10.00"
  },
  "shipping_address": {
    "name": {
      "full_name": "John Doe"
    },
    "address": {
      "address_line_1": "2211 N First Street",
      "address_line_2": "Building 17",
      "admin_area_2": "San Jose",
      "admin_area_1": "CA",
      "postal_code": "95131",
      "country_code": "US"
    }
  },
  "application_context": {
    "brand_name": "walmart",
    "locale": "en-US",
    "shipping_preference": "SET_PROVIDED_ADDRESS",
    "payment_method": {
      "payer_selected": "PAYPAL",
      "payee_preferred": "IMMEDIATE_PAYMENT_REQUIRED"
    },
    "return_url": "https://example.com/returnUrl",
    "cancel_url": "https://example.com/cancelUrl"
  }
}
```

<h3 id="revise-plan-or-quantity-of-subscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the subscription.|
|body|body|[subscription_revise_request](#schemasubscription_revise_request)|false|none|
|» plan_id|body|string|false|The unique PayPal-generated ID for the plan.|
|» quantity|body|string|false|The quantity of the product or service in the subscription.|
|» shipping_amount|body|[money](#schemamoney)|false|The shipping charges.|
|» shipping_address|body|[shipping_detail](#schemashipping_detail)|false|The shipping address of the subscriber.|
|» application_context|body|object|false|The application context, which customizes the payer experience during the subscription approval process with PayPal.|
|» » brand_name|body|string|false|The label that overrides the business name in the PayPal account on the PayPal site.|
|» » locale|body|[language](#schemalanguage)|false|The BCP 47-formatted locale of pages that the PayPal payment experience shows. PayPal supports a five-character code. For example, `da-DK`, `he-IL`, `id-ID`, `ja-JP`, `no-NO`, `pt-BR`, `ru-RU`, `sv-SE`, `th-TH`, `zh-CN`, `zh-HK`, or `zh-TW`.|
|» » shipping_preference|body|string|false|The location from which the shipping address is derived.|
|» » payment_method|body|object|false|The customer and merchant payment preferences.|
|» » » payee_preferred|body|[payee_payment_method_preference](#schemapayee_payment_method_preference)|false|The merchant-preferred payment methods.|
|» » return_url|body|string(uri)|true|The URL where the customer is redirected after the customer approves the payment.|
|» » cancel_url|body|string(uri)|true|The URL where the customer is redirected after the customer cancels the payment.|
|» plan|body|[plan_override](#schemaplan_override)|false|An inline plan object to customise the subscription. You can override plan level default attributes by providing customised values for the subscription in this object. Any existing overrides will not be carried forward during subscription revise.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » shipping_preference|GET_FROM_FILE|
|» » shipping_preference|NO_SHIPPING|
|» » shipping_preference|SET_PROVIDED_ADDRESS|
|» » » payee_preferred|UNRESTRICTED|
|» » » payee_preferred|IMMEDIATE_PAYMENT_REQUIRED|

> Example responses

> 200 Response

```json
{
  "plan_id": "P-5ML4271244454362WXNWU5NQ",
  "plan_overridden": false,
  "shipping_amount": {
    "currency_code": "USD",
    "value": "10.00"
  },
  "shipping_address": {
    "name": {
      "full_name": "John Doe"
    },
    "address": {
      "address_line_1": "2211 N First Street",
      "address_line_2": "Building 17",
      "admin_area_2": "San Jose",
      "admin_area_1": "CA",
      "postal_code": "95131",
      "country_code": "US"
    }
  },
  "links": [
    {
      "href": "https://www.paypal.com/webapps/billing/subscriptions/update?ba_token=BA-2M539689T3856352J",
      "rel": "approve",
      "method": "GET"
    },
    {
      "href": "https://api-m.paypal.com/v1/billing/subscriptions/I-BW452GLLEP1G",
      "rel": "edit",
      "method": "PATCH"
    },
    {
      "href": "https://api-m.paypal.com/v1/billing/subscriptions/I-BW452GLLEP1G",
      "rel": "self",
      "method": "GET"
    },
    {
      "href": "https://api-m.paypal.com/v1/billing/subscriptions/I-BW452GLLEP1G/cancel",
      "rel": "cancel",
      "method": "POST"
    },
    {
      "href": "https://api-m.paypal.com/v1/billing/subscriptions/I-BW452GLLEP1G/suspend",
      "rel": "suspend",
      "method": "POST"
    },
    {
      "href": "https://api-m.paypal.com/v1/billing/subscriptions/I-BW452GLLEP1G/capture",
      "rel": "capture",
      "method": "POST"
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
      "issue": "INVALID_PARAMETER_SYNTAX",
      "description": "The value of a field does not conform to the expected format."
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

> 401 Response

```json
{
  "name": "AUTHENTICATION_FAILURE",
  "message": "Authentication failed due to missing authorization header, or invalid authentication credentials.",
  "details": [
    {
      "issue": "INVALID_ACCOUNT_STATUS",
      "description": "Account validations failed for the user."
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
      "description": "You do not have permission to access or perform operations on this resource."
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
      "issue": "INVALID_RESOURCE_ID",
      "description": "Requested resource ID was not found."
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
      "issue": "USER_ACCOUNT_CLOSED",
      "description": "User account locked or closed."
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

<h3 id="revise-plan-or-quantity-of-subscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful request returns the HTTP `200 OK` status code and a JSON response body that shows subscription details.|[subscription_revise_response](#schemasubscription_revise_response)|
|400|Bad Request|Bad Request. Request is not well-formed, syntactically incorrect, or violates schema.|Inline|
|401|Unauthorized|Authentication failed due to missing authorization header, or invalid authentication credentials.|Inline|
|403|Forbidden|Authorization failed due to insufficient permissions.|Inline|
|404|Not Found|The specified resource does not exist.|Inline|
|422|Unprocessable Entity|The requested action could not be performed, semantically incorrect, or failed business validation.|Inline|
|500|Internal Server Error|An internal server error has occurred.|[error_500](#schemaerror_500)|
|default|Default|The default response.|[error_default](#schemaerror_default)|

<h3 id="revise-plan-or-quantity-of-subscription-responseschema">Response Schema</h3>

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
|» issue|INVALID_PARAMETER_SYNTAX|
|» description|The value of a field does not conform to the expected format.|
|» issue|INVALID_PARAMETER_VALUE|
|» description|The value of a field is invalid.|
|» issue|INVALID_INTEGER_MIN_VALUE|
|» description|The integer value of a field is too small.|
|» issue|INVALID_INTEGER_MAX_VALUE|
|» description|The integer value of a field is too large.|
|» issue|MISSING_REQUEST_BODY|
|» description|Request body is missing.|
|» issue|MISSING_REQUIRED_PARAMETER|
|» description|A required field is missing.|

Status Code **401**

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
|name|AUTHENTICATION_FAILURE|
|message|Authentication failed due to missing authorization header, or invalid authentication credentials.|
|» issue|INVALID_ACCOUNT_STATUS|
|» description|Account validations failed for the user.|

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
|» description|You do not have permission to access or perform operations on this resource.|

Status Code **404**

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
|name|RESOURCE_NOT_FOUND|
|message|The specified resource does not exist.|
|» issue|INVALID_RESOURCE_ID|
|» description|Requested resource ID was not found.|

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
|name|UNPROCESSABLE_ENTITY|
|message|The requested action could not be performed, semantically incorrect, or failed business validation.|
|» issue|USER_ACCOUNT_CLOSED|
|» description|User account locked or closed.|
|» issue|PLAN_PRODUCT_NOT_COMPATIBLE|
|» description|The old and the new plans should be for the same product.|
|» issue|INVALID_BILLING_CYCLE_SEQUENCE|
|» description|The provided billing cycle sequence is not available.|
|» issue|INVALID_PRICING_SCHEME|
|» description|The override plan pricing scheme should be of the same type as that of the original plan.|
|» issue|INVALID_PRICING_TIER_AMOUNT|
|» description|Free tiers are not supported.|
|» issue|MISSING_PRICING_SCHEME_TIERS|
|» description|Tier(s) are missing for some quantities.|
|» issue|OVERLAPPING_PRICING_SCHEME_TIERS|
|» description|The specified quantity overlaps with multiple pricing tiers.|
|» issue|INVALID_PRICING_MODEL|
|» description|The specified pricing model is not supported for trial billing cycle.|
|» issue|FIXED_PRICE_NOT_SUPPORTED|
|» description|Fixed price is not supported for tiered pricing schemes.|
|» issue|INVALID_PRICING_TIER_QUANTITY|
|» description|Tier starting quantity must be less than ending quantity.|
|» issue|CURRENCY_MISMATCH|
|» description|The currency code is different from the plan's currency code.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://uri.paypal.com/services/subscriptions )
</aside>

## Suspend subscription

<a id="opIdsubscriptions.suspend"></a>

> Code samples

```bash
curl https://api-m.paypal.com/v1/billing/subscriptions/string/suspend \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "reason": "Item out of stock"
  }'
```

`POST /v1/billing/subscriptions/{id}/suspend`

Suspends the subscription.

> Body parameter

```json
{
  "reason": "Item out of stock"
}
```

<h3 id="suspend-subscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the subscription.|
|body|body|[subscription_suspend_request](#schemasubscription_suspend_request)|false|none|
|» reason|body|string|true|The reason for suspension of the Subscription.|

> Example responses

> 400 Response

```json
{
  "name": "INVALID_REQUEST",
  "message": "Request is not well-formed, syntactically incorrect, or violates schema.",
  "details": [
    {
      "issue": "INVALID_STRING_MAX_LENGTH",
      "description": "The value of a field is too long."
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

> 401 Response

```json
{
  "name": "AUTHENTICATION_FAILURE",
  "message": "Authentication failed due to missing authorization header, or invalid authentication credentials.",
  "details": [
    {
      "issue": "INVALID_ACCOUNT_STATUS",
      "description": "Account validations failed for the user."
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
      "description": "You do not have permission to access or perform operations on this resource."
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
      "issue": "INVALID_RESOURCE_ID",
      "description": "Specified resource ID does not exist. Please check the resource ID and try again."
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
      "issue": "USER_ACCOUNT_CLOSED",
      "description": "User account locked or closed."
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

<h3 id="suspend-subscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|A successful request returns the HTTP `204 No Content` status code with no JSON response body.|None|
|400|Bad Request|Bad Request. Request is not well-formed, syntactically incorrect, or violates schema.|Inline|
|401|Unauthorized|Authentication failed due to missing authorization header, or invalid authentication credentials.|Inline|
|403|Forbidden|Authorization failed due to insufficient permissions.|Inline|
|404|Not Found|The specified resource does not exist.|Inline|
|422|Unprocessable Entity|The requested action could not be performed, semantically incorrect, or failed business validation.|Inline|
|500|Internal Server Error|An internal server error has occurred.|[error_500](#schemaerror_500)|
|default|Default|The default response.|[error_default](#schemaerror_default)|

<h3 id="suspend-subscription-responseschema">Response Schema</h3>

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

#### Enumerated Values

|Property|Value|
|---|---|
|name|INVALID_REQUEST|
|message|Request is not well-formed, syntactically incorrect, or violates schema.|
|» issue|INVALID_STRING_MAX_LENGTH|
|» description|The value of a field is too long.|

Status Code **401**

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
|name|AUTHENTICATION_FAILURE|
|message|Authentication failed due to missing authorization header, or invalid authentication credentials.|
|» issue|INVALID_ACCOUNT_STATUS|
|» description|Account validations failed for the user.|

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
|» description|You do not have permission to access or perform operations on this resource.|

Status Code **404**

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
|name|RESOURCE_NOT_FOUND|
|message|The specified resource does not exist.|
|» issue|INVALID_RESOURCE_ID|
|» description|Specified resource ID does not exist. Please check the resource ID and try again.|

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
|» issue|USER_ACCOUNT_CLOSED|
|» description|User account locked or closed.|
|» issue|SUBSCRIPTION_STATUS_INVALID|
|» description|Invalid subscription status for suspend action; subscription status should be active.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://uri.paypal.com/services/subscriptions )
</aside>

## Cancel subscription

<a id="opIdsubscriptions.cancel"></a>

> Code samples

```bash
curl https://api-m.paypal.com/v1/billing/subscriptions/string/cancel \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "reason": "Not satisfied with the service"
  }'
```

`POST /v1/billing/subscriptions/{id}/cancel`

Cancels the subscription.

> Body parameter

```json
{
  "reason": "Not satisfied with the service"
}
```

<h3 id="cancel-subscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the subscription.|
|body|body|[subscription_cancel_request](#schemasubscription_cancel_request)|false|none|
|» reason|body|string|true|The reason for the cancellation of a subscription.|

> Example responses

> 400 Response

```json
{
  "name": "INVALID_REQUEST",
  "message": "Request is not well-formed, syntactically incorrect, or violates schema.",
  "details": [
    {
      "issue": "INVALID_STRING_MAX_LENGTH",
      "description": "The value of a field is too long."
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

> 401 Response

```json
{
  "name": "AUTHENTICATION_FAILURE",
  "message": "Authentication failed due to missing authorization header, or invalid authentication credentials.",
  "details": [
    {
      "issue": "INVALID_ACCOUNT_STATUS",
      "description": "Account validations failed for the user."
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
      "description": "You do not have permission to access or perform operations on this resource."
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
      "issue": "INVALID_RESOURCE_ID",
      "description": "Specified resource ID does not exist. Please check the resource ID and try again."
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
      "issue": "USER_ACCOUNT_CLOSED",
      "description": "User account locked or closed."
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

<h3 id="cancel-subscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|A successful request returns the HTTP `204 No Content` status code with no JSON response body.|None|
|400|Bad Request|Bad Request. Request is not well-formed, syntactically incorrect, or violates schema.|Inline|
|401|Unauthorized|Authentication failed due to missing authorization header, or invalid authentication credentials.|Inline|
|403|Forbidden|Authorization failed due to insufficient permissions.|Inline|
|404|Not Found|The specified resource does not exist.|Inline|
|422|Unprocessable Entity|The requested action could not be performed, semantically incorrect, or failed business validation.|Inline|
|500|Internal Server Error|An internal server error has occurred.|[error_500](#schemaerror_500)|
|default|Default|The default response.|[error_default](#schemaerror_default)|

<h3 id="cancel-subscription-responseschema">Response Schema</h3>

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

#### Enumerated Values

|Property|Value|
|---|---|
|name|INVALID_REQUEST|
|message|Request is not well-formed, syntactically incorrect, or violates schema.|
|» issue|INVALID_STRING_MAX_LENGTH|
|» description|The value of a field is too long.|

Status Code **401**

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
|name|AUTHENTICATION_FAILURE|
|message|Authentication failed due to missing authorization header, or invalid authentication credentials.|
|» issue|INVALID_ACCOUNT_STATUS|
|» description|Account validations failed for the user.|

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
|» description|You do not have permission to access or perform operations on this resource.|

Status Code **404**

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
|name|RESOURCE_NOT_FOUND|
|message|The specified resource does not exist.|
|» issue|INVALID_RESOURCE_ID|
|» description|Specified resource ID does not exist. Please check the resource ID and try again.|

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
|» issue|USER_ACCOUNT_CLOSED|
|» description|User account locked or closed.|
|» issue|SUBSCRIPTION_STATUS_INVALID|
|» description|Invalid subscription status for cancel action; subscription status should be active or suspended.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://uri.paypal.com/services/subscriptions )
</aside>

## Activate subscription

<a id="opIdsubscriptions.activate"></a>

> Code samples

```bash
curl https://api-m.paypal.com/v1/billing/subscriptions/string/activate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "reason": "Reactivating the subscription"
  }'
```

`POST /v1/billing/subscriptions/{id}/activate`

Activates the subscription.

> Body parameter

```json
{
  "reason": "Reactivating the subscription"
}
```

<h3 id="activate-subscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the subscription.|
|body|body|[subscription_activate_request](#schemasubscription_activate_request)|false|none|
|» reason|body|string|false|The reason for activation of a subscription. Required to reactivate the subscription.|

> Example responses

> 400 Response

```json
{
  "name": "INVALID_REQUEST",
  "message": "Request is not well-formed, syntactically incorrect, or violates schema.",
  "details": [
    {
      "issue": "INVALID_STRING_MAX_LENGTH",
      "description": "The value of a field is too long."
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

> 401 Response

```json
{
  "name": "AUTHENTICATION_FAILURE",
  "message": "Authentication failed due to missing authorization header, or invalid authentication credentials.",
  "details": [
    {
      "issue": "INVALID_ACCOUNT_STATUS",
      "description": "Account validations failed for the user."
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
      "description": "You do not have permission to access or perform operations on this resource."
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
      "issue": "INVALID_RESOURCE_ID",
      "description": "Specified resource ID does not exist. Please check the resource ID and try again."
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
      "issue": "USER_ACCOUNT_CLOSED",
      "description": "User account locked or closed."
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

<h3 id="activate-subscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|A successful request returns the HTTP `204 No Content` status code with no JSON response body.|None|
|400|Bad Request|Bad Request. Request is not well-formed, syntactically incorrect, or violates schema.|Inline|
|401|Unauthorized|Authentication failed due to missing authorization header, or invalid authentication credentials.|Inline|
|403|Forbidden|Authorization failed due to insufficient permissions.|Inline|
|404|Not Found|The specified resource does not exist.|Inline|
|422|Unprocessable Entity|The requested action could not be performed, semantically incorrect, or failed business validation.|Inline|
|500|Internal Server Error|An internal server error has occurred.|[error_500](#schemaerror_500)|
|default|Default|The default response.|[error_default](#schemaerror_default)|

<h3 id="activate-subscription-responseschema">Response Schema</h3>

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

#### Enumerated Values

|Property|Value|
|---|---|
|name|INVALID_REQUEST|
|message|Request is not well-formed, syntactically incorrect, or violates schema.|
|» issue|INVALID_STRING_MAX_LENGTH|
|» description|The value of a field is too long.|

Status Code **401**

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
|name|AUTHENTICATION_FAILURE|
|message|Authentication failed due to missing authorization header, or invalid authentication credentials.|
|» issue|INVALID_ACCOUNT_STATUS|
|» description|Account validations failed for the user.|

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
|» description|You do not have permission to access or perform operations on this resource.|

Status Code **404**

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
|name|RESOURCE_NOT_FOUND|
|message|The specified resource does not exist.|
|» issue|INVALID_RESOURCE_ID|
|» description|Specified resource ID does not exist. Please check the resource ID and try again.|

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
|» issue|USER_ACCOUNT_CLOSED|
|» description|User account locked or closed.|
|» issue|SUBSCRIPTION_STATUS_INVALID|
|» description|Invalid subscription status for activate action; subscription status should be suspended.|
|» issue|SUBSCRIPTION_CANNOT_BE_ACTIVATED|
|» description|Subscription cannot be activated after payment failure threshold has reached.|
|» issue|SUBSCRIPTION_CANNOT_BE_ACTIVATED|
|» description|This subscription should be activated by the system.|
|» issue|SUBSCRIPTION_CANNOT_BE_ACTIVATED|
|» description|This subscription should be activated by the merchant.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://uri.paypal.com/services/subscriptions )
</aside>

## Capture authorized payment on subscription

<a id="opIdsubscriptions.capture"></a>

> Code samples

```bash
curl https://api-m.paypal.com/v1/billing/subscriptions/string/capture \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "note": "Charging as the balance reached the limit",
    "capture_type": "OUTSTANDING_BALANCE",
    "amount": {
      "currency_code": "USD",
      "value": "100"
    }
  }'
```

`POST /v1/billing/subscriptions/{id}/capture`

Captures an authorized payment from the subscriber on the subscription.

> Body parameter

```json
{
  "note": "Charging as the balance reached the limit",
  "capture_type": "OUTSTANDING_BALANCE",
  "amount": {
    "currency_code": "USD",
    "value": "100"
  }
}
```

<h3 id="capture-authorized-payment-on-subscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|PayPal-Request-Id|header|string|false|The server stores keys for 72 hours.|
|id|path|string|true|The ID of the subscription.|
|body|body|[subscription_capture_request](#schemasubscription_capture_request)|false|none|
|» note|body|string|true|The reason or note for the subscription charge.|
|» capture_type|body|string|true|The type of capture.|
|» amount|body|[money](#schemamoney)|true|The amount of the outstanding balance. This value cannot be greater than the current outstanding balance amount.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» capture_type|OUTSTANDING_BALANCE|

> Example responses

> 200 Response

```json
{
  "status": "COMPLETED",
  "id": "string",
  "amount_with_breakdown": {
    "gross_amount": {
      "currency_code": "str",
      "value": "string"
    },
    "total_item_amount": {
      "currency_code": "str",
      "value": "string"
    },
    "fee_amount": {
      "currency_code": "str",
      "value": "string"
    },
    "shipping_amount": {
      "currency_code": "str",
      "value": "string"
    },
    "tax_amount": {
      "currency_code": "str",
      "value": "string"
    },
    "net_amount": {
      "currency_code": "str",
      "value": "string"
    }
  },
  "payer_name": {
    "prefix": "string",
    "given_name": "string",
    "surname": "string",
    "middle_name": "string",
    "suffix": "string",
    "full_name": "string"
  },
  "payer_email": "string",
  "time": "stringstringstringst"
}
```

> 400 Response

```json
{
  "name": "INVALID_REQUEST",
  "message": "Request is not well-formed, syntactically incorrect, or violates schema.",
  "details": [
    {
      "issue": "MISSING_REQUEST_BODY",
      "description": "Request body is missing."
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

> 401 Response

```json
{
  "name": "AUTHENTICATION_FAILURE",
  "message": "Authentication failed due to missing authorization header, or invalid authentication credentials.",
  "details": [
    {
      "issue": "INVALID_ACCOUNT_STATUS",
      "description": "Account validations failed for the user."
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
      "description": "You do not have permission to access or perform operations on this resource."
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
      "issue": "INVALID_RESOURCE_ID",
      "description": "Specified resource ID does not exist. Please check the resource ID and try again."
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
      "issue": "USER_ACCOUNT_CLOSED",
      "description": "User account locked or closed."
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

<h3 id="capture-authorized-payment-on-subscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful request returns the HTTP `200 OK` status code and a JSON response body that shows subscription details.|[transaction](#schematransaction)|
|202|Accepted|Request Accepted.|None|
|400|Bad Request|Bad Request. Request is not well-formed, syntactically incorrect, or violates schema.|Inline|
|401|Unauthorized|Authentication failed due to missing authorization header, or invalid authentication credentials.|Inline|
|403|Forbidden|Authorization failed due to insufficient permissions.|Inline|
|404|Not Found|The specified resource does not exist.|Inline|
|422|Unprocessable Entity|The requested action could not be performed, semantically incorrect, or failed business validation.|Inline|
|500|Internal Server Error|An internal server error has occurred.|[error_500](#schemaerror_500)|
|default|Default|The default response.|[error_default](#schemaerror_default)|

<h3 id="capture-authorized-payment-on-subscription-responseschema">Response Schema</h3>

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

#### Enumerated Values

|Property|Value|
|---|---|
|name|INVALID_REQUEST|
|message|Request is not well-formed, syntactically incorrect, or violates schema.|
|» issue|MISSING_REQUEST_BODY|
|» description|Request body is missing.|
|» issue|INVALID_PARAMETER_VALUE|
|» description|The value of a field is invalid.|
|» issue|INVALID_STRING_MAX_LENGTH|
|» description|The value of a field is too long.|
|» issue|MISSING_REQUIRED_PARAMETER|
|» description|A required field is missing.|

Status Code **401**

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
|name|AUTHENTICATION_FAILURE|
|message|Authentication failed due to missing authorization header, or invalid authentication credentials.|
|» issue|INVALID_ACCOUNT_STATUS|
|» description|Account validations failed for the user.|

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
|» description|You do not have permission to access or perform operations on this resource.|

Status Code **404**

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
|name|RESOURCE_NOT_FOUND|
|message|The specified resource does not exist.|
|» issue|INVALID_RESOURCE_ID|
|» description|Specified resource ID does not exist. Please check the resource ID and try again.|

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
|» issue|USER_ACCOUNT_CLOSED|
|» description|User account locked or closed.|
|» issue|SUBSCRIBER_ACCOUNT_LOCKED|
|» description|Subscriber Account Locked.|
|» issue|SUBSCRIBER_ACCOUNT_CLOSED|
|» description|Subscriber Account Closed.|
|» issue|SUBSCRIBER_ACCOUNT_RESTRICTED|
|» description|Subscriber Account Restricted.|
|» issue|SUBSCRIPTION_STATUS_INVALID|
|» description|Invalid subscription status for capture action; subscription status should be active or suspended or expired.|
|» issue|ZERO_OUTSTANDING_BALANCE|
|» description|Current outstanding balance should be greater than zero.|
|» issue|CURRENCY_MISMATCH|
|» description|The currency code is different from the subscription's currency code.|
|» issue|AMOUNT_GREATER_THAN_OUTSTANDING_BALANCE|
|» description|The capture amount can not be greater than the current outstanding balance.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://uri.paypal.com/services/subscriptions )
</aside>

## List transactions for subscription

<a id="opIdsubscriptions.transactions"></a>

> Code samples

```bash
curl 'https://api-m.paypal.com/v1/billing/subscriptions/string/transactions?start_time=stringstringstringst&end_time=stringstringstringst' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1/billing/subscriptions/{id}/transactions`

Lists transactions for a subscription.

<h3 id="list-transactions-for-subscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the subscription.|
|start_time|query|string|true|The start time of the range of transactions to list.|
|end_time|query|string|true|The end time of the range of transactions to list.|

> Example responses

> 200 Response

```json
{
  "transactions": [
    {
      "status": "COMPLETED",
      "id": "string",
      "amount_with_breakdown": {
        "gross_amount": {
          "currency_code": "str",
          "value": "string"
        },
        "total_item_amount": {
          "currency_code": "str",
          "value": "string"
        },
        "fee_amount": {
          "currency_code": "str",
          "value": "string"
        },
        "shipping_amount": {
          "currency_code": "str",
          "value": "string"
        },
        "tax_amount": {
          "currency_code": "str",
          "value": "string"
        },
        "net_amount": {
          "currency_code": "str",
          "value": "string"
        }
      },
      "payer_name": {
        "prefix": "string",
        "given_name": "string",
        "surname": "string",
        "middle_name": "string",
        "suffix": "string",
        "full_name": "string"
      },
      "payer_email": "string",
      "time": "stringstringstringst"
    }
  ],
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

> 400 Response

```json
{
  "name": "INVALID_REQUEST",
  "message": "Request is not well-formed, syntactically incorrect, or violates schema.",
  "details": [
    {
      "issue": "INVALID_PARAMETER_SYNTAX",
      "description": "The value of a field does not conform to the expected format."
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

> 401 Response

```json
{
  "name": "AUTHENTICATION_FAILURE",
  "message": "Authentication failed due to missing authorization header, or invalid authentication credentials.",
  "details": [
    {
      "issue": "INVALID_ACCOUNT_STATUS",
      "description": "Account validations failed for the user."
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
      "description": "You do not have permission to access or perform operations on this resource."
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
      "issue": "INVALID_RESOURCE_ID",
      "description": "Specified resource ID does not exist. Please check the resource ID and try again."
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

<h3 id="list-transactions-for-subscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A successful request returns the HTTP `200 OK` status code and a JSON response body that shows subscription details.|[transactions_list](#schematransactions_list)|
|400|Bad Request|Bad Request. Request is not well-formed, syntactically incorrect, or violates schema.|Inline|
|401|Unauthorized|Authentication failed due to missing authorization header, or invalid authentication credentials.|Inline|
|403|Forbidden|Authorization failed due to insufficient permissions.|Inline|
|404|Not Found|The specified resource does not exist.|Inline|
|500|Internal Server Error|An internal server error has occurred.|[error_500](#schemaerror_500)|
|default|Default|The default response.|[error_default](#schemaerror_default)|

<h3 id="list-transactions-for-subscription-responseschema">Response Schema</h3>

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
|» issue|INVALID_PARAMETER_SYNTAX|
|» description|The value of a field does not conform to the expected format.|
|» issue|INVALID_PARAMETER_VALUE|
|» description|The value of a field is invalid.|
|» issue|MISSING_REQUIRED_PARAMETER|
|» description|A required field is missing.|

Status Code **401**

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
|name|AUTHENTICATION_FAILURE|
|message|Authentication failed due to missing authorization header, or invalid authentication credentials.|
|» issue|INVALID_ACCOUNT_STATUS|
|» description|Account validations failed for the user.|

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
|» description|You do not have permission to access or perform operations on this resource.|

Status Code **404**

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
|name|RESOURCE_NOT_FOUND|
|message|The specified resource does not exist.|
|» issue|INVALID_RESOURCE_ID|
|» description|Specified resource ID does not exist. Please check the resource ID and try again.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://uri.paypal.com/services/subscriptions )
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
      "issue": "INVALID_PARAMETER_VALUE",
      "description": "The value of a field is invalid."
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|[object]|false|none|none|

<h2 id="tocS_401">401</h2>
<!-- backwards compatibility -->
<a id="schema401"></a>
<a id="schema_401"></a>
<a id="tocS401"></a>
<a id="tocs401"></a>

```json
{
  "details": [
    {
      "issue": "INVALID_ACCOUNT_STATUS",
      "description": "Account validations failed for the user."
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
      "description": "You do not have permission to access or perform operations on this resource."
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|[object]|false|none|none|

<h2 id="tocS_404">404</h2>
<!-- backwards compatibility -->
<a id="schema404"></a>
<a id="schema_404"></a>
<a id="tocS404"></a>
<a id="tocs404"></a>

```json
{
  "details": [
    {
      "issue": "INVALID_RESOURCE_ID",
      "description": "Specified resource ID does not exist. Please check the resource ID and try again."
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
      "issue": "USER_ACCOUNT_CLOSED",
      "description": "User account locked or closed."
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|[object]|false|none|none|

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

<h2 id="tocS_amount_with_breakdown">amount_with_breakdown</h2>
<!-- backwards compatibility -->
<a id="schemaamount_with_breakdown"></a>
<a id="schema_amount_with_breakdown"></a>
<a id="tocSamount_with_breakdown"></a>
<a id="tocsamount_with_breakdown"></a>

```json
{
  "gross_amount": {
    "currency_code": "str",
    "value": "string"
  },
  "total_item_amount": {
    "currency_code": "str",
    "value": "string"
  },
  "fee_amount": {
    "currency_code": "str",
    "value": "string"
  },
  "shipping_amount": {
    "currency_code": "str",
    "value": "string"
  },
  "tax_amount": {
    "currency_code": "str",
    "value": "string"
  },
  "net_amount": {
    "currency_code": "str",
    "value": "string"
  }
}
```

The breakdown details for the amount. Includes the gross, tax, fee, and shipping amounts.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gross_amount|[money](#schemamoney)|true|none|The amount for this transaction.|
|total_item_amount|[money](#schemamoney)|false|none|The item total for the transaction.|
|fee_amount|[money](#schemamoney)|false|none|The fee details for the transaction.|
|shipping_amount|[money](#schemamoney)|false|none|The shipping amount for the transaction.|
|tax_amount|[money](#schemamoney)|false|none|The tax amount for the transaction.|
|net_amount|[money](#schemamoney)|false|none|The net amount that the payee receives for this transaction in their PayPal account. The net amount is computed as <code>gross_amount</code> minus the <code>paypal_fee</code>.|

<h2 id="tocS_application_context">application_context</h2>
<!-- backwards compatibility -->
<a id="schemaapplication_context"></a>
<a id="schema_application_context"></a>
<a id="tocSapplication_context"></a>
<a id="tocsapplication_context"></a>

```json
{
  "brand_name": "string",
  "locale": "string",
  "shipping_preference": "GET_FROM_FILE",
  "user_action": "SUBSCRIBE_NOW",
  "payment_method": {
    "payee_preferred": "UNRESTRICTED"
  },
  "return_url": "http://example.com",
  "cancel_url": "http://example.com"
}
```

The application context, which customizes the payer experience during the subscription approval process with PayPal.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|brand_name|string|false|none|The label that overrides the business name in the PayPal account on the PayPal site.|
|locale|[language](#schemalanguage)|false|none|The BCP 47-formatted locale of pages that the PayPal payment experience shows. PayPal supports a five-character code. For example, `da-DK`, `he-IL`, `id-ID`, `ja-JP`, `no-NO`, `pt-BR`, `ru-RU`, `sv-SE`, `th-TH`, `zh-CN`, `zh-HK`, or `zh-TW`.|
|shipping_preference|string|false|none|The location from which the shipping address is derived.|
|user_action|string|false|none|Configures the label name to `Continue` or `Subscribe Now` for subscription consent experience.|
|payment_method|object|false|none|The customer and merchant payment preferences.|
|return_url|string(uri)|true|none|The URL where the customer is redirected after the customer approves the payment.|
|cancel_url|string(uri)|true|none|The URL where the customer is redirected after the customer cancels the payment.|

#### Enumerated Values

|Property|Value|
|---|---|
|shipping_preference|GET_FROM_FILE|
|shipping_preference|NO_SHIPPING|
|shipping_preference|SET_PROVIDED_ADDRESS|
|user_action|CONTINUE|
|user_action|SUBSCRIBE_NOW|

<h2 id="tocS_authentication_response">authentication_response</h2>
<!-- backwards compatibility -->
<a id="schemaauthentication_response"></a>
<a id="schema_authentication_response"></a>
<a id="tocSauthentication_response"></a>
<a id="tocsauthentication_response"></a>

```json
{
  "liability_shift": "NO",
  "three_d_secure": {
    "authentication_status": "Y",
    "enrollment_status": "Y"
  }
}
```

Results of Authentication such as 3D Secure.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|liability_shift|[liability_shift](#schemaliability_shift)|false|none|Liability shift indicator. The outcome of the issuer's authentication.|
|three_d_secure|[three_d_secure_authentication_response](#schemathree_d_secure_authentication_response)|false|none|Results of 3D Secure Authentication.|

#### Enumerated Values

|Property|Value|
|---|---|
|liability_shift|NO|
|liability_shift|POSSIBLE|
|liability_shift|UNKNOWN|

<h2 id="tocS_billing_cycle">billing_cycle</h2>
<!-- backwards compatibility -->
<a id="schemabilling_cycle"></a>
<a id="schema_billing_cycle"></a>
<a id="tocSbilling_cycle"></a>
<a id="tocsbilling_cycle"></a>

```json
{
  "pricing_scheme": {
    "version": 0,
    "fixed_price": {
      "currency_code": "str",
      "value": "string"
    },
    "pricing_model": "VOLUME",
    "tiers": [
      {
        "starting_quantity": "string",
        "ending_quantity": "string",
        "amount": {
          "currency_code": "str",
          "value": "string"
        }
      }
    ],
    "create_time": "stringstringstringst",
    "update_time": "stringstringstringst"
  },
  "frequency": {
    "interval_unit": "DAY",
    "interval_count": 1
  },
  "tenure_type": "REGULAR",
  "sequence": 1,
  "total_cycles": 1
}
```

The billing cycle details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pricing_scheme|[pricing_scheme](#schemapricing_scheme)|false|none|The active pricing scheme for this billing cycle. A free trial billing cycle does not require a pricing scheme.|
|frequency|[frequency](#schemafrequency)|true|none|The frequency details for this billing cycle.|
|tenure_type|string|true|none|The tenure type of the billing cycle. In case of a plan having trial cycle, only 2 trial cycles are allowed per plan.|
|sequence|integer|true|none|The order in which this cycle is to run among other billing cycles. For example, a trial billing cycle has a `sequence` of `1` while a regular billing cycle has a `sequence` of `2`, so that trial cycle runs before the regular cycle.|
|total_cycles|integer|false|none|The number of times this billing cycle gets executed. Trial billing cycles can only be executed a finite number of times (value between <code>1</code> and <code>999</code> for <code>total_cycles</code>). Regular billing cycles can be executed infinite times (value of <code>0</code> for <code>total_cycles</code>) or a finite number of times (value between <code>1</code> and <code>999</code> for <code>total_cycles</code>).|

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
    "pricing_scheme": {
      "version": 0,
      "fixed_price": {
        "currency_code": "str",
        "value": "string"
      },
      "pricing_model": "VOLUME",
      "tiers": [
        {
          "starting_quantity": "string",
          "ending_quantity": "string",
          "amount": {
            "currency_code": "str",
            "value": "string"
          }
        }
      ],
      "create_time": "stringstringstringst",
      "update_time": "stringstringstringst"
    },
    "frequency": {
      "interval_unit": "DAY",
      "interval_count": 1
    },
    "tenure_type": "REGULAR",
    "sequence": 1,
    "total_cycles": 1
  }
]
```

An array of billing cycles for trial billing and regular billing. A plan can have at most two trial cycles and only one regular cycle.

<h2 id="tocS_billing_cycle_override">billing_cycle_override</h2>
<!-- backwards compatibility -->
<a id="schemabilling_cycle_override"></a>
<a id="schema_billing_cycle_override"></a>
<a id="tocSbilling_cycle_override"></a>
<a id="tocsbilling_cycle_override"></a>

```json
{
  "pricing_scheme": {
    "version": 0,
    "fixed_price": {
      "currency_code": "str",
      "value": "string"
    },
    "pricing_model": "VOLUME",
    "tiers": [
      {
        "starting_quantity": "string",
        "ending_quantity": "string",
        "amount": {
          "currency_code": "str",
          "value": "string"
        }
      }
    ],
    "create_time": "stringstringstringst",
    "update_time": "stringstringstringst"
  },
  "sequence": 1,
  "total_cycles": 0
}
```

The billing cycle details to override at subscription level. The subscription billing cycle definition has to adhere to the plan billing cycle definition.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pricing_scheme|[pricing_scheme](#schemapricing_scheme)|false|none|The active pricing scheme for this billing cycle. A free trial billing cycle does not require a pricing scheme.|
|sequence|integer|true|none|The order in which this cycle is to run among other billing cycles. For example, a trial billing cycle has a `sequence` of `1` while a regular billing cycle has a `sequence` of `2`, so that trial cycle runs before the regular cycle.|
|total_cycles|integer|false|none|The number of times this billing cycle gets executed. Trial billing cycles can only be executed a finite number of times (value between <code>1</code> and <code>999</code> for <code>total_cycles</code>). Regular billing cycles can be executed infinite times (value of <code>0</code> for <code>total_cycles</code>) or a finite number of times (value between <code>1</code> and <code>999</code> for <code>total_cycles</code>).|

<h2 id="tocS_billing_cycle_override_list">billing_cycle_override_list</h2>
<!-- backwards compatibility -->
<a id="schemabilling_cycle_override_list"></a>
<a id="schema_billing_cycle_override_list"></a>
<a id="tocSbilling_cycle_override_list"></a>
<a id="tocsbilling_cycle_override_list"></a>

```json
[
  {
    "pricing_scheme": {
      "version": 0,
      "fixed_price": {
        "currency_code": "str",
        "value": "string"
      },
      "pricing_model": "VOLUME",
      "tiers": [
        {
          "starting_quantity": "string",
          "ending_quantity": "string",
          "amount": {
            "currency_code": "str",
            "value": "string"
          }
        }
      ],
      "create_time": "stringstringstringst",
      "update_time": "stringstringstringst"
    },
    "sequence": 1,
    "total_cycles": 0
  }
]
```

An array of billing cycles for trial billing and regular billing. The subscription billing cycle definition has to adhere to the plan billing cycle definition.

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

<h2 id="tocS_card_attributes">card_attributes</h2>
<!-- backwards compatibility -->
<a id="schemacard_attributes"></a>
<a id="schema_card_attributes"></a>
<a id="tocScard_attributes"></a>
<a id="tocscard_attributes"></a>

```json
{
  "customer": {
    "id": "string",
    "email_address": "string",
    "phone": {
      "phone_type": "FAX",
      "phone_number": {
        "national_number": "string"
      }
    }
  },
  "vault": {
    "store_in_vault": "ON_SUCCESS"
  },
  "verification": {
    "method": "SCA_WHEN_REQUIRED"
  }
}
```

Additional attributes associated with the use of this card.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customer|[customer](#schemacustomer)|false|none|The details about a customer in PayPal's system of record.|
|vault|[vault_instruction_base](#schemavault_instruction_base)|false|none|Instruction to vault the card based on the specified strategy.|
|verification|[card_verification](#schemacard_verification)|false|none|Instruction to optionally verify the card based on the specified strategy.|

<h2 id="tocS_card_attributes_response">card_attributes_response</h2>
<!-- backwards compatibility -->
<a id="schemacard_attributes_response"></a>
<a id="schema_card_attributes_response"></a>
<a id="tocScard_attributes_response"></a>
<a id="tocscard_attributes_response"></a>

```json
{
  "vault": {
    "id": "string",
    "status": "VAULTED",
    "customer": {
      "id": "string"
    },
    "links": [
      {
        "href": "string",
        "rel": "string",
        "method": "GET"
      }
    ]
  }
}
```

Additional attributes associated with the use of this card.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|vault|[vault_response](#schemavault_response)|false|none|The details about a saved payment source.|

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

<h2 id="tocS_card_brand_list">card_brand_list</h2>
<!-- backwards compatibility -->
<a id="schemacard_brand_list"></a>
<a id="schema_card_brand_list"></a>
<a id="tocScard_brand_list"></a>
<a id="tocscard_brand_list"></a>

```json
[
  "VISA"
]
```

Array of brands or networks associated with the card.

<h2 id="tocS_card_from_request">card_from_request</h2>
<!-- backwards compatibility -->
<a id="schemacard_from_request"></a>
<a id="schema_card_from_request"></a>
<a id="tocScard_from_request"></a>
<a id="tocscard_from_request"></a>

```json
{
  "expiry": "strings",
  "last_digits": "stri"
}
```

Representation of card details as received in the request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expiry|[date_year_month](#schemadate_year_month)|false|none|The card expiration year and month, in [Internet date format](https://tools.ietf.org/html/rfc3339#section-5.6).|
|last_digits|string|false|read-only|The last digits of the payment card.|

<h2 id="tocS_card_response">card_response</h2>
<!-- backwards compatibility -->
<a id="schemacard_response"></a>
<a id="schema_card_response"></a>
<a id="tocScard_response"></a>
<a id="tocscard_response"></a>

```json
{
  "name": "string",
  "last_digits": "string",
  "brand": "VISA",
  "available_networks": [
    "VISA"
  ],
  "type": "CREDIT",
  "authentication_result": {
    "liability_shift": "NO",
    "three_d_secure": {
      "authentication_status": "Y",
      "enrollment_status": "Y"
    }
  },
  "attributes": {
    "vault": {
      "id": "string",
      "status": "VAULTED",
      "customer": {
        "id": "string"
      },
      "links": [
        {
          "href": "string",
          "rel": "string",
          "method": "GET"
        }
      ]
    }
  },
  "from_request": {
    "expiry": "strings",
    "last_digits": "stri"
  },
  "expiry": "strings",
  "bin_details": {
    "bin": "string",
    "issuing_bank": "string",
    "bin_country_code": "st",
    "products": [
      "string"
    ]
  }
}
```

The payment card to use to fund a payment. Card can be a credit or debit card.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The card holder's name as it appears on the card.|
|last_digits|string|false|read-only|The last digits of the payment card.|
|brand|[card_brand](#schemacard_brand)|false|none|The card brand or network. Typically used in the response.|
|available_networks|[card_brand_list](#schemacard_brand_list)|false|read-only|Array of brands or networks associated with the card.|
|type|[card_type](#schemacard_type)|false|none|The payment card type.|
|authentication_result|[authentication_response](#schemaauthentication_response)|false|none|Results of Authentication such as 3D Secure.|
|attributes|[card_attributes_response](#schemacard_attributes_response)|false|none|Additional attributes associated with the use of this card.|
|from_request|[card_from_request](#schemacard_from_request)|false|none|Representation of card details as received in the request.|
|expiry|[date_year_month](#schemadate_year_month)|false|none|The card expiration year and month, in [Internet date format](https://tools.ietf.org/html/rfc3339#section-5.6).|
|bin_details|[bin_details](#schemabin_details)|false|none|Bank Identification Number (BIN) details used to fund a payment.|

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
|brand|UNKNOWN|
|available_networks|VISA|
|available_networks|MASTERCARD|
|available_networks|DISCOVER|
|available_networks|AMEX|
|available_networks|SOLO|
|available_networks|JCB|
|available_networks|STAR|
|available_networks|DELTA|
|available_networks|SWITCH|
|available_networks|MAESTRO|
|available_networks|CB_NATIONALE|
|available_networks|CONFIGOGA|
|available_networks|CONFIDIS|
|available_networks|ELECTRON|
|available_networks|CETELEM|
|available_networks|CHINA_UNION_PAY|
|available_networks|DINERS|
|available_networks|ELO|
|available_networks|HIPER|
|available_networks|HIPERCARD|
|available_networks|RUPAY|
|available_networks|GE|
|available_networks|SYNCHRONY|
|available_networks|UNKNOWN|
|type|CREDIT|
|type|DEBIT|
|type|PREPAID|
|type|STORE|
|type|UNKNOWN|

<h2 id="tocS_card_response_with_billing_address">card_response_with_billing_address</h2>
<!-- backwards compatibility -->
<a id="schemacard_response_with_billing_address"></a>
<a id="schema_card_response_with_billing_address"></a>
<a id="tocScard_response_with_billing_address"></a>
<a id="tocscard_response_with_billing_address"></a>

```json
{
  "name": "string",
  "last_digits": "string",
  "brand": "VISA",
  "available_networks": [
    "VISA"
  ],
  "type": "CREDIT",
  "authentication_result": {
    "liability_shift": "NO",
    "three_d_secure": {
      "authentication_status": "Y",
      "enrollment_status": "Y"
    }
  },
  "attributes": {
    "vault": {
      "id": "string",
      "status": "VAULTED",
      "customer": {
        "id": "string"
      },
      "links": [
        {
          "href": "string",
          "rel": "string",
          "method": "GET"
        }
      ]
    }
  },
  "from_request": {
    "expiry": "strings",
    "last_digits": "stri"
  },
  "expiry": "strings",
  "bin_details": {
    "bin": "string",
    "issuing_bank": "string",
    "bin_country_code": "st",
    "products": [
      "string"
    ]
  },
  "billing_address": {
    "address_line_1": "string",
    "address_line_2": "string",
    "admin_area_2": "string",
    "admin_area_1": "string",
    "postal_code": "string",
    "country_code": "st"
  },
  "currency_code": "str"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The card holder's name as it appears on the card.|
|last_digits|string|false|read-only|The last digits of the payment card.|
|brand|[card_brand](#schemacard_brand)|false|none|The card brand or network. Typically used in the response.|
|available_networks|[card_brand_list](#schemacard_brand_list)|false|read-only|Array of brands or networks associated with the card.|
|type|[card_type](#schemacard_type)|false|none|The payment card type.|
|authentication_result|[authentication_response](#schemaauthentication_response)|false|none|Results of Authentication such as 3D Secure.|
|attributes|[card_attributes_response](#schemacard_attributes_response)|false|none|Additional attributes associated with the use of this card.|
|from_request|[card_from_request](#schemacard_from_request)|false|none|Representation of card details as received in the request.|
|expiry|[date_year_month](#schemadate_year_month)|false|none|The card expiration year and month, in [Internet date format](https://tools.ietf.org/html/rfc3339#section-5.6).|
|bin_details|[bin_details](#schemabin_details)|false|none|Bank Identification Number (BIN) details used to fund a payment.|
|name|string|false|none|The card holder's name as it appears on the card.|
|billing_address|object|false|none|The portable international postal address. Maps to [AddressValidationMetadata](https://github.com/googlei18n/libaddressinput/wiki/AddressValidationMetadata) and HTML 5.1 [Autofilling form controls: the autocomplete attribute](https://www.w3.org/TR/html51/sec-forms.html#autofilling-form-controls-the-autocomplete-attribute).|
|expiry|[date_year_month](#schemadate_year_month)|false|none|The card expiration year and month, in [Internet date format](https://tools.ietf.org/html/rfc3339#section-5.6).|
|currency_code|[currency_code](#schemacurrency_code)|false|none|Currency code of the given instrument|

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
|brand|UNKNOWN|
|available_networks|VISA|
|available_networks|MASTERCARD|
|available_networks|DISCOVER|
|available_networks|AMEX|
|available_networks|SOLO|
|available_networks|JCB|
|available_networks|STAR|
|available_networks|DELTA|
|available_networks|SWITCH|
|available_networks|MAESTRO|
|available_networks|CB_NATIONALE|
|available_networks|CONFIGOGA|
|available_networks|CONFIDIS|
|available_networks|ELECTRON|
|available_networks|CETELEM|
|available_networks|CHINA_UNION_PAY|
|available_networks|DINERS|
|available_networks|ELO|
|available_networks|HIPER|
|available_networks|HIPERCARD|
|available_networks|RUPAY|
|available_networks|GE|
|available_networks|SYNCHRONY|
|available_networks|UNKNOWN|
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

<h2 id="tocS_card_verification">card_verification</h2>
<!-- backwards compatibility -->
<a id="schemacard_verification"></a>
<a id="schema_card_verification"></a>
<a id="tocScard_verification"></a>
<a id="tocscard_verification"></a>

```json
{
  "method": "SCA_WHEN_REQUIRED"
}
```

The API caller can opt in to verify the card through PayPal offered verification services (e.g. Smart Dollar Auth, 3DS).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|method|string|false|none|The method used for card verification.|

#### Enumerated Values

|Property|Value|
|---|---|
|method|SCA_ALWAYS|
|method|SCA_WHEN_REQUIRED|
|method|3D_SECURE|
|method|AVS_CVV|

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
  "email_address": "string",
  "phone": {
    "phone_type": "FAX",
    "phone_number": {
      "national_number": "string"
    }
  }
}
```

The details about a customer in PayPal's system of record.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[merchant_partner_customer_id](#schemamerchant_partner_customer_id)|false|none|The unique ID for a customer generated by PayPal.|
|email_address|[email](#schemaemail)|false|none|Email address of the buyer as provided to the merchant or on file with the merchant. Email Address is required if you are processing the transaction using PayPal Guest Processing which is offered to select partners and merchants. For all other use cases we do not expect partners/merchant to send email_address of their customer.|
|phone|[phone_with_type](#schemaphone_with_type)|false|none|The phone number of the buyer as provided to the merchant or on file with the merchant. The `phone.phone_number` supports only `national_number`.|

<h2 id="tocS_cycle_execution">cycle_execution</h2>
<!-- backwards compatibility -->
<a id="schemacycle_execution"></a>
<a id="schema_cycle_execution"></a>
<a id="tocScycle_execution"></a>
<a id="tocscycle_execution"></a>

```json
{
  "tenure_type": "REGULAR",
  "sequence": 0,
  "cycles_completed": 0,
  "cycles_remaining": 0,
  "current_pricing_scheme_version": 1,
  "total_cycles": 0
}
```

The regular and trial execution details for a billing cycle.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tenure_type|string|true|read-only|The type of the billing cycle.|
|sequence|integer|true|none|The order in which to run this cycle among other billing cycles.|
|cycles_completed|integer|true|read-only|The number of billing cycles that have completed.|
|cycles_remaining|integer|false|read-only|For a finite billing cycle, cycles_remaining is the number of remaining cycles. For an infinite billing cycle, cycles_remaining is set as 0.|
|current_pricing_scheme_version|integer|false|read-only|The active pricing scheme version for the billing cycle.|
|total_cycles|integer|false|read-only|The number of times this billing cycle gets executed. Trial billing cycles can only be executed a finite number of times (value between <code>1</code> and <code>999</code> for <code>total_cycles</code>). Regular billing cycles can be executed infinite times (value of <code>0</code> for <code>total_cycles</code>) or a finite number of times (value between <code>1</code> and <code>999</code> for <code>total_cycles</code>).|

#### Enumerated Values

|Property|Value|
|---|---|
|tenure_type|REGULAR|
|tenure_type|TRIAL|

<h2 id="tocS_cycle_execution_list">cycle_execution_list</h2>
<!-- backwards compatibility -->
<a id="schemacycle_execution_list"></a>
<a id="schema_cycle_execution_list"></a>
<a id="tocScycle_execution_list"></a>
<a id="tocscycle_execution_list"></a>

```json
[
  {
    "tenure_type": "REGULAR",
    "sequence": 0,
    "cycles_completed": 0,
    "cycles_remaining": 0,
    "current_pricing_scheme_version": 1,
    "total_cycles": 0
  }
]
```

The trial and regular billing executions.

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

An array of request-related HATEOAS links.

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

<h2 id="tocS_failed_payment_details">failed_payment_details</h2>
<!-- backwards compatibility -->
<a id="schemafailed_payment_details"></a>
<a id="schema_failed_payment_details"></a>
<a id="tocSfailed_payment_details"></a>
<a id="tocsfailed_payment_details"></a>

```json
{
  "amount": {
    "currency_code": "str",
    "value": "string"
  },
  "time": "stringstringstringst",
  "reason_code": "PAYMENT_DENIED",
  "next_payment_retry_time": "stringstringstringst"
}
```

The details for the failed payment of the subscription.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|[money](#schemamoney)|true|none|The failed payment amount.|
|time|[date_time](#schemadate_time)|true|none|The date and time when the failed payment was made, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).|
|reason_code|string|false|read-only|The reason code for the payment failure.|
|next_payment_retry_time|[date_time](#schemadate_time)|false|none|The time when the retry attempt for the failed payment occurs, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).|

#### Enumerated Values

|Property|Value|
|---|---|
|reason_code|PAYMENT_DENIED|
|reason_code|INTERNAL_SERVER_ERROR|
|reason_code|PAYEE_ACCOUNT_RESTRICTED|
|reason_code|PAYER_ACCOUNT_RESTRICTED|
|reason_code|PAYER_CANNOT_PAY|
|reason_code|SENDING_LIMIT_EXCEEDED|
|reason_code|TRANSACTION_RECEIVING_LIMIT_EXCEEDED|
|reason_code|CURRENCY_MISMATCH|

<h2 id="tocS_frequency">frequency</h2>
<!-- backwards compatibility -->
<a id="schemafrequency"></a>
<a id="schema_frequency"></a>
<a id="tocSfrequency"></a>
<a id="tocsfrequency"></a>

```json
{
  "interval_unit": "DAY",
  "interval_count": 1
}
```

The frequency of the billing cycle.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|interval_unit|string|true|none|The interval at which the subscription is charged or billed.|
|interval_count|integer|false|none|The number of intervals after which a subscriber is billed. For example, if the `interval_unit` is `DAY` with an `interval_count` of  `2`, the subscription is billed once every two days. The following table lists the maximum allowed values for the `interval_count` for each `interval_unit`:<table><thead><tr><th><code>Interval unit</code></th><th>Maximum interval count</th></tr></thead><tbody><tr><td><code>DAY</code></td><td align="right">365</td></tr><tr><td><code>WEEK</code></td><td align="right">52</td></tr><tr><td><code>MONTH</code></td><td align="right">12</td></tr><tr><td><code>YEAR</code></td><td align="right">1</td></tr></tbody></table>|

#### Enumerated Values

|Property|Value|
|---|---|
|interval_unit|DAY|
|interval_unit|WEEK|
|interval_unit|MONTH|
|interval_unit|YEAR|

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

<h2 id="tocS_last_payment_details">last_payment_details</h2>
<!-- backwards compatibility -->
<a id="schemalast_payment_details"></a>
<a id="schema_last_payment_details"></a>
<a id="tocSlast_payment_details"></a>
<a id="tocslast_payment_details"></a>

```json
{
  "amount": {
    "currency_code": "str",
    "value": "string"
  },
  "time": "stringstringstringst"
}
```

The details for the last payment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|[money](#schemamoney)|true|none|The last payment amount.|
|time|[date_time](#schemadate_time)|true|none|The date and time when the last payment was made, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).|

<h2 id="tocS_liability_shift">liability_shift</h2>
<!-- backwards compatibility -->
<a id="schemaliability_shift"></a>
<a id="schema_liability_shift"></a>
<a id="tocSliability_shift"></a>
<a id="tocsliability_shift"></a>

```json
"NO"
```

Liability shift indicator. The outcome of the issuer's authentication.

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

<h2 id="tocS_merchant_inventory">merchant_inventory</h2>
<!-- backwards compatibility -->
<a id="schemamerchant_inventory"></a>
<a id="schema_merchant_inventory"></a>
<a id="tocSmerchant_inventory"></a>
<a id="tocsmerchant_inventory"></a>

```json
null
```

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
|full_name|string|false|none|When the party is a person, the party's full name.|

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

<h2 id="tocS_payee_payment_method_preference">payee_payment_method_preference</h2>
<!-- backwards compatibility -->
<a id="schemapayee_payment_method_preference"></a>
<a id="schema_payee_payment_method_preference"></a>
<a id="tocSpayee_payment_method_preference"></a>
<a id="tocspayee_payment_method_preference"></a>

```json
"UNRESTRICTED"
```

The merchant-preferred payment methods.

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

<h2 id="tocS_payment_preferences">payment_preferences</h2>
<!-- backwards compatibility -->
<a id="schemapayment_preferences"></a>
<a id="schema_payment_preferences"></a>
<a id="tocSpayment_preferences"></a>
<a id="tocspayment_preferences"></a>

```json
{
  "auto_bill_outstanding": true,
  "setup_fee": {
    "currency_code": "str",
    "value": "string"
  },
  "setup_fee_failure_action": "CANCEL",
  "payment_failure_threshold": 0
}
```

The payment preferences for a subscription.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|auto_bill_outstanding|boolean|false|none|Indicates whether to automatically bill the outstanding amount in the next billing cycle.|
|setup_fee|[money](#schemamoney)|false|none|The initial set-up fee for the service.|
|setup_fee_failure_action|string|false|none|The action to take on the subscription if the initial payment for the setup fails.|
|payment_failure_threshold|integer|false|none|The maximum number of payment failures before a subscription is suspended. For example, if `payment_failure_threshold` is `2`, the subscription automatically updates to the `SUSPEND` state if two consecutive payments fail.|

#### Enumerated Values

|Property|Value|
|---|---|
|setup_fee_failure_action|CONTINUE|
|setup_fee_failure_action|CANCEL|

<h2 id="tocS_payment_preferences_override">payment_preferences_override</h2>
<!-- backwards compatibility -->
<a id="schemapayment_preferences_override"></a>
<a id="schema_payment_preferences_override"></a>
<a id="tocSpayment_preferences_override"></a>
<a id="tocspayment_preferences_override"></a>

```json
{
  "auto_bill_outstanding": true,
  "setup_fee": {
    "currency_code": "str",
    "value": "string"
  },
  "setup_fee_failure_action": "CONTINUE",
  "payment_failure_threshold": 0
}
```

The payment preferences to override at subscription level.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|auto_bill_outstanding|boolean|false|none|Indicates whether to automatically bill the outstanding amount in the next billing cycle.|
|setup_fee|[money](#schemamoney)|false|none|The initial set-up fee for the service.|
|setup_fee_failure_action|string|false|none|The action to take on the subscription if the initial payment for the setup fails.|
|payment_failure_threshold|integer|false|none|The maximum number of payment failures before a subscription is suspended. For example, if `payment_failure_threshold` is `2`, the subscription automatically updates to the `SUSPEND` state if two consecutive payments fail.|

#### Enumerated Values

|Property|Value|
|---|---|
|setup_fee_failure_action|CONTINUE|
|setup_fee_failure_action|CANCEL|

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
    "number": "stringstrings",
    "expiry": "strings",
    "security_code": "stri",
    "type": "CREDIT",
    "brand": "VISA",
    "billing_address": {
      "address_line_1": "string",
      "address_line_2": "string",
      "admin_area_2": "string",
      "admin_area_1": "string",
      "postal_code": "string",
      "country_code": "st"
    },
    "attributes": {
      "customer": {
        "id": "string",
        "email_address": "string",
        "phone": {
          "phone_type": "FAX",
          "phone_number": {
            "national_number": "string"
          }
        }
      },
      "vault": {
        "store_in_vault": "ON_SUCCESS"
      },
      "verification": {
        "method": "SCA_WHEN_REQUIRED"
      }
    }
  }
}
```

The payment source definition. To be eligible to create subscription using debit or credit card, you will need to sign up here (https://www.paypal.com/bizsignup/entry/product/ppcp). Please note, its available only for non-3DS cards and for merchants in US and AU regions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|card|object|false|none|The payment card to use to fund a payment. Can be a credit or debit card.|

<h2 id="tocS_payment_source_response">payment_source_response</h2>
<!-- backwards compatibility -->
<a id="schemapayment_source_response"></a>
<a id="schema_payment_source_response"></a>
<a id="tocSpayment_source_response"></a>
<a id="tocspayment_source_response"></a>

```json
{
  "card": {
    "name": "string",
    "last_digits": "string",
    "brand": "VISA",
    "available_networks": [
      "VISA"
    ],
    "type": "CREDIT",
    "authentication_result": {
      "liability_shift": "NO",
      "three_d_secure": {
        "authentication_status": "Y",
        "enrollment_status": "Y"
      }
    },
    "attributes": {
      "vault": {
        "id": "string",
        "status": "VAULTED",
        "customer": {
          "id": "string"
        },
        "links": [
          {
            "href": "string",
            "rel": "string",
            "method": "GET"
          }
        ]
      }
    },
    "from_request": {
      "expiry": "strings",
      "last_digits": "stri"
    },
    "expiry": "strings",
    "bin_details": {
      "bin": "string",
      "issuing_bank": "string",
      "bin_country_code": "st",
      "products": [
        "string"
      ]
    },
    "billing_address": {
      "address_line_1": "string",
      "address_line_2": "string",
      "admin_area_2": "string",
      "admin_area_1": "string",
      "postal_code": "string",
      "country_code": "st"
    },
    "currency_code": "str"
  }
}
```

The payment source used to fund the payment.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|card|[card_response_with_billing_address](#schemacard_response_with_billing_address)|false|none|none|

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
  "id": "stringstringstringstringst",
  "product_id": "stringstringstringstri",
  "name": "string",
  "status": "CREATED",
  "description": "string",
  "billing_cycles": [
    {
      "pricing_scheme": {
        "version": 0,
        "fixed_price": {
          "currency_code": "str",
          "value": "string"
        },
        "pricing_model": "VOLUME",
        "tiers": [
          {
            "starting_quantity": "string",
            "ending_quantity": "string",
            "amount": {
              "currency_code": "str",
              "value": "string"
            }
          }
        ],
        "create_time": "stringstringstringst",
        "update_time": "stringstringstringst"
      },
      "frequency": {
        "interval_unit": "DAY",
        "interval_count": 1
      },
      "tenure_type": "REGULAR",
      "sequence": 1,
      "total_cycles": 1
    }
  ],
  "payment_preferences": {
    "auto_bill_outstanding": true,
    "setup_fee": {
      "currency_code": "str",
      "value": "string"
    },
    "setup_fee_failure_action": "CANCEL",
    "payment_failure_threshold": 0
  },
  "taxes": {
    "percentage": "string",
    "inclusive": true
  },
  "quantity_supported": false,
  "create_time": "stringstringstringst",
  "update_time": "stringstringstringst",
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

The plan details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|read-only|The unique PayPal-generated ID for the plan.|
|product_id|string|false|none|The ID for the product.|
|name|string|false|none|The plan name.|
|status|string|false|none|The plan status.|
|description|string|false|none|The detailed description of the plan.|
|billing_cycles|[billing_cycle_list](#schemabilling_cycle_list)|false|none|An array of billing cycles for trial billing and regular billing. A plan can have at most two trial cycles and only one regular cycle.|
|payment_preferences|[payment_preferences](#schemapayment_preferences)|false|none|The payment preferences for a subscription.|
|taxes|[taxes](#schemataxes)|false|none|The tax details.|
|quantity_supported|boolean|false|none|Indicates whether you can subscribe to this plan by providing a quantity for the goods or service.|
|create_time|[date_time](#schemadate_time)|false|none|The date and time when the plan was created, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).|
|update_time|[date_time](#schemadate_time)|false|none|The date and time when the plan was last updated, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).|
|links|[link_description_list](#schemalink_description_list)|false|read-only|An array of request-related [HATEOAS links](/docs/api/reference/api-responses/#hateoas-links).|

#### Enumerated Values

|Property|Value|
|---|---|
|status|CREATED|
|status|INACTIVE|
|status|ACTIVE|

<h2 id="tocS_plan_collection">plan_collection</h2>
<!-- backwards compatibility -->
<a id="schemaplan_collection"></a>
<a id="schema_plan_collection"></a>
<a id="tocSplan_collection"></a>
<a id="tocsplan_collection"></a>

```json
{
  "plans": [
    {
      "id": "stringstringstringstringst",
      "product_id": "stringstringstringstri",
      "name": "string",
      "status": "CREATED",
      "description": "string",
      "billing_cycles": [
        {
          "pricing_scheme": {
            "version": 0,
            "fixed_price": {
              "currency_code": "str",
              "value": "string"
            },
            "pricing_model": "VOLUME",
            "tiers": [
              {
                "starting_quantity": "string",
                "ending_quantity": "string",
                "amount": {
                  "currency_code": "str",
                  "value": "string"
                }
              }
            ],
            "create_time": "stringstringstringst",
            "update_time": "stringstringstringst"
          },
          "frequency": {
            "interval_unit": "DAY",
            "interval_count": 1
          },
          "tenure_type": "REGULAR",
          "sequence": 1,
          "total_cycles": 1
        }
      ],
      "payment_preferences": {
        "auto_bill_outstanding": true,
        "setup_fee": {
          "currency_code": "str",
          "value": "string"
        },
        "setup_fee_failure_action": "CANCEL",
        "payment_failure_threshold": 0
      },
      "taxes": {
        "percentage": "string",
        "inclusive": true
      },
      "quantity_supported": false,
      "create_time": "stringstringstringst",
      "update_time": "stringstringstringst",
      "links": [
        {
          "href": "string",
          "rel": "string",
          "method": "GET"
        }
      ]
    }
  ],
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

The list of plans with details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|plans|[plan_list](#schemaplan_list)|false|none|An array of plans.|
|total_items|integer|false|none|The total number of items.|
|total_pages|integer|false|none|The total number of pages.|
|links|[link_description_list](#schemalink_description_list)|false|read-only|An array of request-related [HATEOAS links](/docs/api/reference/api-responses/#hateoas-links).|

<h2 id="tocS_plan_list">plan_list</h2>
<!-- backwards compatibility -->
<a id="schemaplan_list"></a>
<a id="schema_plan_list"></a>
<a id="tocSplan_list"></a>
<a id="tocsplan_list"></a>

```json
[
  {
    "id": "stringstringstringstringst",
    "product_id": "stringstringstringstri",
    "name": "string",
    "status": "CREATED",
    "description": "string",
    "billing_cycles": [
      {
        "pricing_scheme": {
          "version": 0,
          "fixed_price": {
            "currency_code": "str",
            "value": "string"
          },
          "pricing_model": "VOLUME",
          "tiers": [
            {
              "starting_quantity": "string",
              "ending_quantity": "string",
              "amount": {
                "currency_code": "str",
                "value": "string"
              }
            }
          ],
          "create_time": "stringstringstringst",
          "update_time": "stringstringstringst"
        },
        "frequency": {
          "interval_unit": "DAY",
          "interval_count": 1
        },
        "tenure_type": "REGULAR",
        "sequence": 1,
        "total_cycles": 1
      }
    ],
    "payment_preferences": {
      "auto_bill_outstanding": true,
      "setup_fee": {
        "currency_code": "str",
        "value": "string"
      },
      "setup_fee_failure_action": "CANCEL",
      "payment_failure_threshold": 0
    },
    "taxes": {
      "percentage": "string",
      "inclusive": true
    },
    "quantity_supported": false,
    "create_time": "stringstringstringst",
    "update_time": "stringstringstringst",
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

An array of plans.

<h2 id="tocS_plan_override">plan_override</h2>
<!-- backwards compatibility -->
<a id="schemaplan_override"></a>
<a id="schema_plan_override"></a>
<a id="tocSplan_override"></a>
<a id="tocsplan_override"></a>

```json
{
  "billing_cycles": [
    {
      "pricing_scheme": {
        "version": 0,
        "fixed_price": {
          "currency_code": "str",
          "value": "string"
        },
        "pricing_model": "VOLUME",
        "tiers": [
          {
            "starting_quantity": "string",
            "ending_quantity": "string",
            "amount": {
              "currency_code": "str",
              "value": "string"
            }
          }
        ],
        "create_time": "stringstringstringst",
        "update_time": "stringstringstringst"
      },
      "sequence": 1,
      "total_cycles": 0
    }
  ],
  "payment_preferences": {
    "auto_bill_outstanding": true,
    "setup_fee": {
      "currency_code": "str",
      "value": "string"
    },
    "setup_fee_failure_action": "CONTINUE",
    "payment_failure_threshold": 0
  },
  "taxes": {
    "percentage": "string",
    "inclusive": true
  }
}
```

An inline plan object to customise the subscription. You can override plan level default attributes by providing customised values for the subscription in this object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billing_cycles|[billing_cycle_override_list](#schemabilling_cycle_override_list)|false|none|An array of billing cycles for trial billing and regular billing. The subscription billing cycle definition has to adhere to the plan billing cycle definition.|
|payment_preferences|[payment_preferences_override](#schemapayment_preferences_override)|false|none|The payment preferences to override at subscription level.|
|taxes|[taxes_override](#schemataxes_override)|false|none|The tax details.|

<h2 id="tocS_plan_request_POST">plan_request_POST</h2>
<!-- backwards compatibility -->
<a id="schemaplan_request_post"></a>
<a id="schema_plan_request_POST"></a>
<a id="tocSplan_request_post"></a>
<a id="tocsplan_request_post"></a>

```json
{
  "product_id": "stringstringstringstri",
  "name": "string",
  "status": "ACTIVE",
  "description": "string",
  "billing_cycles": [
    {
      "pricing_scheme": {
        "version": 0,
        "fixed_price": {
          "currency_code": "str",
          "value": "string"
        },
        "pricing_model": "VOLUME",
        "tiers": [
          {
            "starting_quantity": "string",
            "ending_quantity": "string",
            "amount": {
              "currency_code": "str",
              "value": "string"
            }
          }
        ],
        "create_time": "stringstringstringst",
        "update_time": "stringstringstringst"
      },
      "frequency": {
        "interval_unit": "DAY",
        "interval_count": 1
      },
      "tenure_type": "REGULAR",
      "sequence": 1,
      "total_cycles": 1
    }
  ],
  "payment_preferences": {
    "auto_bill_outstanding": true,
    "setup_fee": {
      "currency_code": "str",
      "value": "string"
    },
    "setup_fee_failure_action": "CANCEL",
    "payment_failure_threshold": 0
  },
  "taxes": {
    "percentage": "string",
    "inclusive": true
  },
  "quantity_supported": false
}
```

The create plan request details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|product_id|string|true|none|The ID of the product created through Catalog Products API.|
|name|string|true|none|The plan name.|
|status|string|false|none|The initial state of the plan. Allowed input values are CREATED and ACTIVE.|
|description|string|false|none|The detailed description of the plan.|
|billing_cycles|[billing_cycle_list](#schemabilling_cycle_list)|true|none|An array of billing cycles for trial billing and regular billing. A plan can have at most two trial cycles and only one regular cycle.|
|payment_preferences|[payment_preferences](#schemapayment_preferences)|true|none|The payment preferences for a subscription.|
|taxes|[taxes](#schemataxes)|false|none|The tax details.|
|quantity_supported|boolean|false|none|Indicates whether you can subscribe to this plan by providing a quantity for the goods or service.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|CREATED|
|status|INACTIVE|
|status|ACTIVE|

<h2 id="tocS_plans.activate-422">plans.activate-422</h2>
<!-- backwards compatibility -->
<a id="schemaplans.activate-422"></a>
<a id="schema_plans.activate-422"></a>
<a id="tocSplans.activate-422"></a>
<a id="tocsplans.activate-422"></a>

```json
{
  "details": [
    {
      "issue": "USER_ACCOUNT_CLOSED",
      "description": "User account locked or closed."
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|[object]|false|none|none|

<h2 id="tocS_plans.create-400">plans.create-400</h2>
<!-- backwards compatibility -->
<a id="schemaplans.create-400"></a>
<a id="schema_plans.create-400"></a>
<a id="tocSplans.create-400"></a>
<a id="tocsplans.create-400"></a>

```json
{
  "details": [
    {
      "issue": "INVALID_PARAMETER_SYNTAX",
      "description": "The value of a field does not conform to the expected format."
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|[object]|false|none|none|

<h2 id="tocS_plans.deactivate-422">plans.deactivate-422</h2>
<!-- backwards compatibility -->
<a id="schemaplans.deactivate-422"></a>
<a id="schema_plans.deactivate-422"></a>
<a id="tocSplans.deactivate-422"></a>
<a id="tocsplans.deactivate-422"></a>

```json
{
  "details": [
    {
      "issue": "USER_ACCOUNT_CLOSED",
      "description": "User account locked or closed."
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|[object]|false|none|none|

<h2 id="tocS_plans.patch-400">plans.patch-400</h2>
<!-- backwards compatibility -->
<a id="schemaplans.patch-400"></a>
<a id="schema_plans.patch-400"></a>
<a id="tocSplans.patch-400"></a>
<a id="tocsplans.patch-400"></a>

```json
{
  "details": [
    {
      "issue": "UNSUPPORTED_PATCH_OPERATION",
      "description": "The specified patch operation not supported for this field."
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|[object]|false|none|none|

<h2 id="tocS_plans.patch-422">plans.patch-422</h2>
<!-- backwards compatibility -->
<a id="schemaplans.patch-422"></a>
<a id="schema_plans.patch-422"></a>
<a id="tocSplans.patch-422"></a>
<a id="tocsplans.patch-422"></a>

```json
{
  "details": [
    {
      "issue": "USER_ACCOUNT_CLOSED",
      "description": "User account locked or closed."
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|[object]|false|none|none|

<h2 id="tocS_plans.update-pricing-schemes-400">plans.update-pricing-schemes-400</h2>
<!-- backwards compatibility -->
<a id="schemaplans.update-pricing-schemes-400"></a>
<a id="schema_plans.update-pricing-schemes-400"></a>
<a id="tocSplans.update-pricing-schemes-400"></a>
<a id="tocsplans.update-pricing-schemes-400"></a>

```json
{
  "details": [
    {
      "issue": "INVALID_PARAMETER_VALUE",
      "description": "The value of a field is invalid."
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|[object]|false|none|none|

<h2 id="tocS_plans.update-pricing-schemes-422">plans.update-pricing-schemes-422</h2>
<!-- backwards compatibility -->
<a id="schemaplans.update-pricing-schemes-422"></a>
<a id="schema_plans.update-pricing-schemes-422"></a>
<a id="tocSplans.update-pricing-schemes-422"></a>
<a id="tocsplans.update-pricing-schemes-422"></a>

```json
{
  "details": [
    {
      "issue": "CURRENCY_MISMATCH",
      "description": "The currency code is different from the plan's currency code."
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|[object]|false|none|none|

<h2 id="tocS_pricing_scheme">pricing_scheme</h2>
<!-- backwards compatibility -->
<a id="schemapricing_scheme"></a>
<a id="schema_pricing_scheme"></a>
<a id="tocSpricing_scheme"></a>
<a id="tocspricing_scheme"></a>

```json
{
  "version": 0,
  "fixed_price": {
    "currency_code": "str",
    "value": "string"
  },
  "pricing_model": "VOLUME",
  "tiers": [
    {
      "starting_quantity": "string",
      "ending_quantity": "string",
      "amount": {
        "currency_code": "str",
        "value": "string"
      }
    }
  ],
  "create_time": "stringstringstringst",
  "update_time": "stringstringstringst"
}
```

The pricing scheme details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|version|integer|false|read-only|The version of the pricing scheme.|
|fixed_price|[money](#schemamoney)|false|none|The fixed amount to charge for the subscription. The changes to fixed amount are applicable to both existing and future subscriptions. For existing subscriptions, payments within 10 days of price change are not affected.|
|pricing_model|string|false|none|The pricing model for tiered plan. The `tiers` parameter is required.|
|tiers|[pricing_tier_list](#schemapricing_tier_list)|false|none|An array of pricing tiers which are used for billing volume/tiered plans. pricing_model field has to be specified.|
|create_time|[date_time](#schemadate_time)|false|none|The date and time when this pricing scheme was created, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).|
|update_time|[date_time](#schemadate_time)|false|none|The date and time when this pricing scheme was last updated, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).|

#### Enumerated Values

|Property|Value|
|---|---|
|pricing_model|VOLUME|
|pricing_model|TIERED|

<h2 id="tocS_pricing_tier">pricing_tier</h2>
<!-- backwards compatibility -->
<a id="schemapricing_tier"></a>
<a id="schema_pricing_tier"></a>
<a id="tocSpricing_tier"></a>
<a id="tocspricing_tier"></a>

```json
{
  "starting_quantity": "string",
  "ending_quantity": "string",
  "amount": {
    "currency_code": "str",
    "value": "string"
  }
}
```

The pricing tier details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|starting_quantity|string|true|none|The starting quantity for the tier.|
|ending_quantity|string|false|none|The ending quantity for the tier. Optional for the last tier.|
|amount|[money](#schemamoney)|true|none|The pricing amount for the tier.|

<h2 id="tocS_pricing_tier_list">pricing_tier_list</h2>
<!-- backwards compatibility -->
<a id="schemapricing_tier_list"></a>
<a id="schema_pricing_tier_list"></a>
<a id="tocSpricing_tier_list"></a>
<a id="tocspricing_tier_list"></a>

```json
[
  {
    "starting_quantity": "string",
    "ending_quantity": "string",
    "amount": {
      "currency_code": "str",
      "value": "string"
    }
  }
]
```

An array of pricing tiers which are used for billing volume/tiered plans. pricing_model field has to be specified.

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

<h2 id="tocS_shipping_detail">shipping_detail</h2>
<!-- backwards compatibility -->
<a id="schemashipping_detail"></a>
<a id="schema_shipping_detail"></a>
<a id="tocSshipping_detail"></a>
<a id="tocsshipping_detail"></a>

```json
{
  "name": {
    "full_name": "string"
  },
  "type": "SHIPPING",
  "options": [
    {
      "id": "string",
      "label": "string",
      "type": "SHIPPING",
      "amount": {
        "currency_code": "str",
        "value": "string"
      },
      "selected": true
    }
  ],
  "address": {
    "address_line_1": "string",
    "address_line_2": "string",
    "admin_area_2": "string",
    "admin_area_1": "string",
    "postal_code": "string",
    "country_code": "st"
  }
}
```

The shipping details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|object|false|none|The name of the party.|
|type|string|false|none|A classification for the method of purchase fulfillment (e.g shipping, in-store pickup, etc). Either `type` or `options` may be present, but not both.|
|options|[shipping_option_list](#schemashipping_option_list)|false|none|An array of shipping options that the payee or merchant offers to the payer to ship or pick up their items.|
|address|object|false|none|The portable international postal address. Maps to [AddressValidationMetadata](https://github.com/googlei18n/libaddressinput/wiki/AddressValidationMetadata) and HTML 5.1 [Autofilling form controls: the autocomplete attribute](https://www.w3.org/TR/html51/sec-forms.html#autofilling-form-controls-the-autocomplete-attribute).|

#### Enumerated Values

|Property|Value|
|---|---|
|type|SHIPPING|
|type|PICKUP_IN_PERSON|
|type|PICKUP_IN_STORE|
|type|PICKUP_FROM_PERSON|

<h2 id="tocS_shipping_option">shipping_option</h2>
<!-- backwards compatibility -->
<a id="schemashipping_option"></a>
<a id="schema_shipping_option"></a>
<a id="tocSshipping_option"></a>
<a id="tocsshipping_option"></a>

```json
{
  "id": "string",
  "label": "string",
  "type": "SHIPPING",
  "amount": {
    "currency_code": "str",
    "value": "string"
  },
  "selected": true
}
```

The options that the payee or merchant offers to the payer to ship or pick up their items.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|A unique ID that identifies a payer-selected shipping option.|
|label|string|true|none|A description that the payer sees, which helps them choose an appropriate shipping option. For example, `Free Shipping`, `USPS Priority Shipping`, `Expédition prioritaire USPS`, or `USPS yōuxiān fā huò`. Localize this description to the payer's locale.|
|type|[shipping_type](#schemashipping_type)|false|none|A classification for the method of purchase fulfillment.|
|amount|[money](#schemamoney)|false|none|The shipping cost for the selected option.|
|selected|boolean|true|none|If the API request sets `selected = true`, it represents the shipping option that the payee or merchant expects to be pre-selected for the payer when they first view the `shipping.options` in the PayPal Checkout experience. As part of the response if a `shipping.option` contains `selected=true`, it represents the shipping option that the payer selected during the course of checkout with PayPal. Only one `shipping.option` can be set to `selected=true`.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|SHIPPING|
|type|PICKUP|
|type|PICKUP_IN_STORE|
|type|PICKUP_FROM_PERSON|

<h2 id="tocS_shipping_option_list">shipping_option_list</h2>
<!-- backwards compatibility -->
<a id="schemashipping_option_list"></a>
<a id="schema_shipping_option_list"></a>
<a id="tocSshipping_option_list"></a>
<a id="tocsshipping_option_list"></a>

```json
[
  {
    "id": "string",
    "label": "string",
    "type": "SHIPPING",
    "amount": {
      "currency_code": "str",
      "value": "string"
    },
    "selected": true
  }
]
```

An array of shipping options that the payee or merchant offers to the payer to ship or pick up their items.

<h2 id="tocS_shipping_type">shipping_type</h2>
<!-- backwards compatibility -->
<a id="schemashipping_type"></a>
<a id="schema_shipping_type"></a>
<a id="tocSshipping_type"></a>
<a id="tocsshipping_type"></a>

```json
"SHIPPING"
```

A classification for the method of purchase fulfillment.

<h2 id="tocS_store_in_vault_instruction">store_in_vault_instruction</h2>
<!-- backwards compatibility -->
<a id="schemastore_in_vault_instruction"></a>
<a id="schema_store_in_vault_instruction"></a>
<a id="tocSstore_in_vault_instruction"></a>
<a id="tocsstore_in_vault_instruction"></a>

```json
"ON_SUCCESS"
```

Defines how and when the payment source gets vaulted.

<h2 id="tocS_subscriber">subscriber</h2>
<!-- backwards compatibility -->
<a id="schemasubscriber"></a>
<a id="schema_subscriber"></a>
<a id="tocSsubscriber"></a>
<a id="tocssubscriber"></a>

```json
{
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
  "shipping_address": {
    "name": {
      "full_name": "string"
    },
    "type": "SHIPPING",
    "options": [
      {
        "id": "string",
        "label": "string",
        "type": "SHIPPING",
        "amount": {
          "currency_code": "str",
          "value": "string"
        },
        "selected": true
      }
    ],
    "address": {
      "address_line_1": "string",
      "address_line_2": "string",
      "admin_area_2": "string",
      "admin_area_1": "string",
      "postal_code": "string",
      "country_code": "st"
    }
  },
  "payment_source": {
    "card": {
      "name": "string",
      "last_digits": "string",
      "brand": "VISA",
      "available_networks": [
        "VISA"
      ],
      "type": "CREDIT",
      "authentication_result": {
        "liability_shift": "NO",
        "three_d_secure": {
          "authentication_status": "Y",
          "enrollment_status": "Y"
        }
      },
      "attributes": {
        "vault": {
          "id": "string",
          "status": "VAULTED",
          "customer": {
            "id": "string"
          },
          "links": [
            {
              "href": "string",
              "rel": "string",
              "method": "GET"
            }
          ]
        }
      },
      "from_request": {
        "expiry": "strings",
        "last_digits": "stri"
      },
      "expiry": "strings",
      "bin_details": {
        "bin": "string",
        "issuing_bank": "string",
        "bin_country_code": "st",
        "products": [
          "string"
        ]
      },
      "billing_address": {
        "address_line_1": "string",
        "address_line_2": "string",
        "admin_area_2": "string",
        "admin_area_1": "string",
        "postal_code": "string",
        "country_code": "st"
      },
      "currency_code": "str"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email_address|[email](#schemaemail)|false|none|The email address of the payer.|
|payer_id|[account_id](#schemaaccount_id)|false|none|The PayPal-assigned ID for the payer.|
|name|object|false|none|The name of the party.|
|phone|[phone_with_type](#schemaphone_with_type)|false|none|The phone number of the customer. Available only when you enable the **Contact Telephone Number** option in the <a href="https://www.paypal.com/cgi-bin/customerprofileweb?cmd=_profile-website-payments">**Profile & Settings**</a> for the merchant's PayPal account. The `phone.phone_number` supports only `national_number`.|
|shipping_address|[shipping_detail](#schemashipping_detail)|false|none|The shipping details.|
|payment_source|[payment_source_response](#schemapayment_source_response)|false|none|The payment source used to fund the payment.|

<h2 id="tocS_subscriber_request">subscriber_request</h2>
<!-- backwards compatibility -->
<a id="schemasubscriber_request"></a>
<a id="schema_subscriber_request"></a>
<a id="tocSsubscriber_request"></a>
<a id="tocssubscriber_request"></a>

```json
{
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
  "shipping_address": {
    "name": {
      "full_name": "string"
    },
    "type": "SHIPPING",
    "options": [
      {
        "id": "string",
        "label": "string",
        "type": "SHIPPING",
        "amount": {
          "currency_code": "str",
          "value": "string"
        },
        "selected": true
      }
    ],
    "address": {
      "address_line_1": "string",
      "address_line_2": "string",
      "admin_area_2": "string",
      "admin_area_1": "string",
      "postal_code": "string",
      "country_code": "st"
    }
  },
  "payment_source": {
    "card": {
      "name": "string",
      "number": "stringstrings",
      "expiry": "strings",
      "security_code": "stri",
      "type": "CREDIT",
      "brand": "VISA",
      "billing_address": {
        "address_line_1": "string",
        "address_line_2": "string",
        "admin_area_2": "string",
        "admin_area_1": "string",
        "postal_code": "string",
        "country_code": "st"
      },
      "attributes": {
        "customer": {
          "id": "string",
          "email_address": "string",
          "phone": {
            "phone_type": "FAX",
            "phone_number": {
              "national_number": "string"
            }
          }
        },
        "vault": {
          "store_in_vault": "ON_SUCCESS"
        },
        "verification": {
          "method": "SCA_WHEN_REQUIRED"
        }
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email_address|[email](#schemaemail)|false|none|The email address of the payer.|
|payer_id|[account_id](#schemaaccount_id)|false|none|The PayPal-assigned ID for the payer.|
|name|object|false|none|The name of the party.|
|phone|[phone_with_type](#schemaphone_with_type)|false|none|The phone number of the customer. Available only when you enable the **Contact Telephone Number** option in the <a href="https://www.paypal.com/cgi-bin/customerprofileweb?cmd=_profile-website-payments">**Profile & Settings**</a> for the merchant's PayPal account. The `phone.phone_number` supports only `national_number`.|
|shipping_address|[shipping_detail](#schemashipping_detail)|false|none|The shipping details.|
|payment_source|[payment_source](#schemapayment_source)|false|none|The payment source definition. To be eligible to create subscription using debit or credit card, you will need to sign up here (https://www.paypal.com/bizsignup/entry/product/ppcp). Please note, its available only for non-3DS cards and for merchants in US and AU regions.|

<h2 id="tocS_subscription">subscription</h2>
<!-- backwards compatibility -->
<a id="schemasubscription"></a>
<a id="schema_subscription"></a>
<a id="tocSsubscription"></a>
<a id="tocssubscription"></a>

```json
{
  "status": "APPROVAL_PENDING",
  "status_change_note": "string",
  "status_update_time": "stringstringstringst",
  "id": "string",
  "plan_id": "string",
  "start_time": "stringstringstringst",
  "quantity": "string",
  "shipping_amount": {
    "currency_code": "str",
    "value": "string"
  },
  "subscriber": {
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
    "shipping_address": {
      "name": {
        "full_name": "string"
      },
      "type": "SHIPPING",
      "options": [
        {
          "id": "string",
          "label": "string",
          "type": "SHIPPING",
          "amount": {
            "currency_code": "str",
            "value": "string"
          },
          "selected": true
        }
      ],
      "address": {
        "address_line_1": "string",
        "address_line_2": "string",
        "admin_area_2": "string",
        "admin_area_1": "string",
        "postal_code": "string",
        "country_code": "st"
      }
    },
    "payment_source": {
      "card": {
        "name": "string",
        "last_digits": "string",
        "brand": "VISA",
        "available_networks": [
          "VISA"
        ],
        "type": "CREDIT",
        "authentication_result": {
          "liability_shift": "NO",
          "three_d_secure": {
            "authentication_status": "Y",
            "enrollment_status": "Y"
          }
        },
        "attributes": {
          "vault": {
            "id": "string",
            "status": "VAULTED",
            "customer": {
              "id": "string"
            },
            "links": [
              {
                "href": "string",
                "rel": "string",
                "method": "GET"
              }
            ]
          }
        },
        "from_request": {
          "expiry": "strings",
          "last_digits": "stri"
        },
        "expiry": "strings",
        "bin_details": {
          "bin": "string",
          "issuing_bank": "string",
          "bin_country_code": "st",
          "products": [
            "string"
          ]
        },
        "billing_address": {
          "address_line_1": "string",
          "address_line_2": "string",
          "admin_area_2": "string",
          "admin_area_1": "string",
          "postal_code": "string",
          "country_code": "st"
        },
        "currency_code": "str"
      }
    }
  },
  "billing_info": {
    "outstanding_balance": {
      "currency_code": "str",
      "value": "string"
    },
    "cycle_executions": [
      {
        "tenure_type": "REGULAR",
        "sequence": 0,
        "cycles_completed": 0,
        "cycles_remaining": 0,
        "current_pricing_scheme_version": 1,
        "total_cycles": 0
      }
    ],
    "last_payment": {
      "amount": {
        "currency_code": "str",
        "value": "string"
      },
      "time": "stringstringstringst"
    },
    "next_billing_time": "stringstringstringst",
    "final_payment_time": "stringstringstringst",
    "failed_payments_count": 0,
    "last_failed_payment": {
      "amount": {
        "currency_code": "str",
        "value": "string"
      },
      "time": "stringstringstringst",
      "reason_code": "PAYMENT_DENIED",
      "next_payment_retry_time": "stringstringstringst"
    }
  },
  "create_time": "stringstringstringst",
  "update_time": "stringstringstringst",
  "custom_id": "string",
  "plan_overridden": true,
  "plan": {
    "product_id": "stringstringstringstri",
    "name": "string",
    "description": "string",
    "billing_cycles": [
      {
        "pricing_scheme": {
          "version": 0,
          "fixed_price": {
            "currency_code": "str",
            "value": "string"
          },
          "pricing_model": "VOLUME",
          "tiers": [
            {
              "starting_quantity": "string",
              "ending_quantity": "string",
              "amount": {
                "currency_code": "str",
                "value": "string"
              }
            }
          ],
          "create_time": "stringstringstringst",
          "update_time": "stringstringstringst"
        },
        "frequency": {
          "interval_unit": "DAY",
          "interval_count": 1
        },
        "tenure_type": "REGULAR",
        "sequence": 1,
        "total_cycles": 1
      }
    ],
    "payment_preferences": {
      "auto_bill_outstanding": true,
      "setup_fee": {
        "currency_code": "str",
        "value": "string"
      },
      "setup_fee_failure_action": "CANCEL",
      "payment_failure_threshold": 0
    },
    "taxes": {
      "percentage": "string",
      "inclusive": true
    },
    "quantity_supported": false
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

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|false|none|The status of the subscription.|
|status_change_note|string|false|none|The reason or notes for the status of the subscription.|
|status_update_time|[date_time](#schemadate_time)|false|none|The date and time, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). Seconds are required while fractional seconds are optional.<blockquote><strong>Note:</strong> The regular expression provides guidance but does not reject all invalid dates.</blockquote>|
|id|string|false|read-only|The PayPal-generated ID for the subscription.|
|plan_id|string|false|none|The ID of the plan.|
|start_time|[date_time](#schemadate_time)|false|none|The date and time, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). Seconds are required while fractional seconds are optional.<blockquote><strong>Note:</strong> The regular expression provides guidance but does not reject all invalid dates.</blockquote>|
|quantity|string|false|none|The quantity of the product in the subscription.|
|shipping_amount|[money](#schemamoney)|false|none|The currency and amount for a financial transaction, such as a balance or payment due.|
|subscriber|[subscriber](#schemasubscriber)|false|none|none|
|billing_info|[subscription_billing_info](#schemasubscription_billing_info)|false|none|The billing details for the subscription. If the subscription was or is active, these fields are populated.|
|create_time|[date_time](#schemadate_time)|false|none|The date and time, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). Seconds are required while fractional seconds are optional.<blockquote><strong>Note:</strong> The regular expression provides guidance but does not reject all invalid dates.</blockquote>|
|update_time|[date_time](#schemadate_time)|false|none|The date and time, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). Seconds are required while fractional seconds are optional.<blockquote><strong>Note:</strong> The regular expression provides guidance but does not reject all invalid dates.</blockquote>|
|custom_id|string|false|none|The custom id for the subscription. Can be invoice id.|
|plan_overridden|boolean|false|read-only|Indicates whether the subscription has overridden any plan attributes.|
|plan|object|false|none|The plan details.|
|links|[link_description_list](#schemalink_description_list)|false|read-only|An array of request-related [HATEOAS links](/docs/api/reference/api-responses/#hateoas-links).|

#### Enumerated Values

|Property|Value|
|---|---|
|status|APPROVAL_PENDING|
|status|APPROVED|
|status|ACTIVE|
|status|SUSPENDED|
|status|CANCELLED|
|status|EXPIRED|

<h2 id="tocS_subscription_activate_request">subscription_activate_request</h2>
<!-- backwards compatibility -->
<a id="schemasubscription_activate_request"></a>
<a id="schema_subscription_activate_request"></a>
<a id="tocSsubscription_activate_request"></a>
<a id="tocssubscription_activate_request"></a>

```json
{
  "reason": "string"
}
```

The activate subscription request details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reason|string|false|none|The reason for activation of a subscription. Required to reactivate the subscription.|

<h2 id="tocS_subscription_billing_info">subscription_billing_info</h2>
<!-- backwards compatibility -->
<a id="schemasubscription_billing_info"></a>
<a id="schema_subscription_billing_info"></a>
<a id="tocSsubscription_billing_info"></a>
<a id="tocssubscription_billing_info"></a>

```json
{
  "outstanding_balance": {
    "currency_code": "str",
    "value": "string"
  },
  "cycle_executions": [
    {
      "tenure_type": "REGULAR",
      "sequence": 0,
      "cycles_completed": 0,
      "cycles_remaining": 0,
      "current_pricing_scheme_version": 1,
      "total_cycles": 0
    }
  ],
  "last_payment": {
    "amount": {
      "currency_code": "str",
      "value": "string"
    },
    "time": "stringstringstringst"
  },
  "next_billing_time": "stringstringstringst",
  "final_payment_time": "stringstringstringst",
  "failed_payments_count": 0,
  "last_failed_payment": {
    "amount": {
      "currency_code": "str",
      "value": "string"
    },
    "time": "stringstringstringst",
    "reason_code": "PAYMENT_DENIED",
    "next_payment_retry_time": "stringstringstringst"
  }
}
```

The billing details for the subscription. If the subscription was or is active, these fields are populated.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|outstanding_balance|[money](#schemamoney)|true|none|The total pending bill amount, to be paid by the subscriber.|
|cycle_executions|[cycle_execution_list](#schemacycle_execution_list)|false|read-only|The trial and regular billing executions.|
|last_payment|[last_payment_details](#schemalast_payment_details)|false|none|The details for the last payment of the subscription.|
|next_billing_time|[date_time](#schemadate_time)|false|none|The next date and time for billing this subscription, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).|
|final_payment_time|[date_time](#schemadate_time)|false|none|The date and time when the final billing cycle occurs, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).|
|failed_payments_count|integer|true|read-only|The number of consecutive payment failures. Resets to `0` after a successful payment. If this reaches the `payment_failure_threshold` value, the subscription updates to the `SUSPENDED` state.|
|last_failed_payment|[failed_payment_details](#schemafailed_payment_details)|false|none|The details for the last failed payment of the subscription.|

<h2 id="tocS_subscription_cancel_request">subscription_cancel_request</h2>
<!-- backwards compatibility -->
<a id="schemasubscription_cancel_request"></a>
<a id="schema_subscription_cancel_request"></a>
<a id="tocSsubscription_cancel_request"></a>
<a id="tocssubscription_cancel_request"></a>

```json
{
  "reason": "string"
}
```

The cancel subscription request details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reason|string|true|none|The reason for the cancellation of a subscription.|

<h2 id="tocS_subscription_capture_request">subscription_capture_request</h2>
<!-- backwards compatibility -->
<a id="schemasubscription_capture_request"></a>
<a id="schema_subscription_capture_request"></a>
<a id="tocSsubscription_capture_request"></a>
<a id="tocssubscription_capture_request"></a>

```json
{
  "note": "string",
  "capture_type": "OUTSTANDING_BALANCE",
  "amount": {
    "currency_code": "str",
    "value": "string"
  }
}
```

The charge amount from the subscriber.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|note|string|true|none|The reason or note for the subscription charge.|
|capture_type|string|true|none|The type of capture.|
|amount|[money](#schemamoney)|true|none|The amount of the outstanding balance. This value cannot be greater than the current outstanding balance amount.|

#### Enumerated Values

|Property|Value|
|---|---|
|capture_type|OUTSTANDING_BALANCE|

<h2 id="tocS_subscription_request_post">subscription_request_post</h2>
<!-- backwards compatibility -->
<a id="schemasubscription_request_post"></a>
<a id="schema_subscription_request_post"></a>
<a id="tocSsubscription_request_post"></a>
<a id="tocssubscription_request_post"></a>

```json
{
  "plan_id": "stringstringstringstringst",
  "start_time": "stringstringstringst",
  "quantity": "string",
  "shipping_amount": {
    "currency_code": "str",
    "value": "string"
  },
  "subscriber": {
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
    "shipping_address": {
      "name": {
        "full_name": "string"
      },
      "type": "SHIPPING",
      "options": [
        {
          "id": "string",
          "label": "string",
          "type": "SHIPPING",
          "amount": {
            "currency_code": "str",
            "value": "string"
          },
          "selected": true
        }
      ],
      "address": {
        "address_line_1": "string",
        "address_line_2": "string",
        "admin_area_2": "string",
        "admin_area_1": "string",
        "postal_code": "string",
        "country_code": "st"
      }
    },
    "payment_source": {
      "card": {
        "name": "string",
        "number": "stringstrings",
        "expiry": "strings",
        "security_code": "stri",
        "type": "CREDIT",
        "brand": "VISA",
        "billing_address": {
          "address_line_1": "string",
          "address_line_2": "string",
          "admin_area_2": "string",
          "admin_area_1": "string",
          "postal_code": "string",
          "country_code": "st"
        },
        "attributes": {
          "customer": {
            "id": "string",
            "email_address": "string",
            "phone": {
              "phone_type": "FAX",
              "phone_number": {
                "national_number": "string"
              }
            }
          },
          "vault": {
            "store_in_vault": "ON_SUCCESS"
          },
          "verification": {
            "method": "SCA_WHEN_REQUIRED"
          }
        }
      }
    }
  },
  "auto_renewal": false,
  "application_context": {
    "brand_name": "string",
    "locale": "string",
    "shipping_preference": "GET_FROM_FILE",
    "user_action": "SUBSCRIBE_NOW",
    "payment_method": {
      "payee_preferred": "UNRESTRICTED"
    },
    "return_url": "http://example.com",
    "cancel_url": "http://example.com"
  },
  "custom_id": "string",
  "plan": {
    "billing_cycles": [
      {
        "pricing_scheme": {
          "version": 0,
          "fixed_price": {
            "currency_code": "str",
            "value": "string"
          },
          "pricing_model": "VOLUME",
          "tiers": [
            {
              "starting_quantity": "string",
              "ending_quantity": "string",
              "amount": {
                "currency_code": "str",
                "value": "string"
              }
            }
          ],
          "create_time": "stringstringstringst",
          "update_time": "stringstringstringst"
        },
        "sequence": 1,
        "total_cycles": 0
      }
    ],
    "payment_preferences": {
      "auto_bill_outstanding": true,
      "setup_fee": {
        "currency_code": "str",
        "value": "string"
      },
      "setup_fee_failure_action": "CONTINUE",
      "payment_failure_threshold": 0
    },
    "taxes": {
      "percentage": "string",
      "inclusive": true
    }
  },
  "merchant_inventory": null
}
```

The create subscription request details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|plan_id|string|true|none|The ID of the plan.|
|start_time|[date_time](#schemadate_time)|false|none|The date and time when the subscription started, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).|
|quantity|string|false|none|The quantity of the product in the subscription.|
|shipping_amount|[money](#schemamoney)|false|none|The shipping charges.|
|subscriber|[subscriber_request](#schemasubscriber_request)|false|none|none|
|auto_renewal|boolean|false|none|**Deprecated.** DEPRECATED. Indicates whether the subscription auto-renews after the billing cycles complete.|
|application_context|[application_context](#schemaapplication_context)|false|none|The application context, which customizes the payer experience during the subscription approval process with PayPal.|
|custom_id|string|false|none|The custom id for the subscription. Can be invoice id.|
|plan|[plan_override](#schemaplan_override)|false|none|An inline plan object to customise the subscription. You can override plan level default attributes by providing customised values for the subscription in this object.|
|merchant_inventory|[merchant_inventory](#schemamerchant_inventory)|false|none|Merchant's inventory identifier details for the WPS hosted button.|

<h2 id="tocS_subscription_revise_request">subscription_revise_request</h2>
<!-- backwards compatibility -->
<a id="schemasubscription_revise_request"></a>
<a id="schema_subscription_revise_request"></a>
<a id="tocSsubscription_revise_request"></a>
<a id="tocssubscription_revise_request"></a>

```json
{
  "plan_id": "stringstringstringstringst",
  "quantity": "string",
  "shipping_amount": {
    "currency_code": "str",
    "value": "string"
  },
  "shipping_address": {
    "name": {
      "full_name": "string"
    },
    "type": "SHIPPING",
    "options": [
      {
        "id": "string",
        "label": "string",
        "type": "SHIPPING",
        "amount": {
          "currency_code": "str",
          "value": "string"
        },
        "selected": true
      }
    ],
    "address": {
      "address_line_1": "string",
      "address_line_2": "string",
      "admin_area_2": "string",
      "admin_area_1": "string",
      "postal_code": "string",
      "country_code": "st"
    }
  },
  "application_context": {
    "brand_name": "string",
    "locale": "string",
    "shipping_preference": "GET_FROM_FILE",
    "payment_method": {
      "payee_preferred": "UNRESTRICTED"
    },
    "return_url": "http://example.com",
    "cancel_url": "http://example.com"
  },
  "plan": {
    "billing_cycles": [
      {
        "pricing_scheme": {
          "version": 0,
          "fixed_price": {
            "currency_code": "str",
            "value": "string"
          },
          "pricing_model": "VOLUME",
          "tiers": [
            {
              "starting_quantity": "string",
              "ending_quantity": "string",
              "amount": {
                "currency_code": "str",
                "value": "string"
              }
            }
          ],
          "create_time": "stringstringstringst",
          "update_time": "stringstringstringst"
        },
        "sequence": 1,
        "total_cycles": 0
      }
    ],
    "payment_preferences": {
      "auto_bill_outstanding": true,
      "setup_fee": {
        "currency_code": "str",
        "value": "string"
      },
      "setup_fee_failure_action": "CONTINUE",
      "payment_failure_threshold": 0
    },
    "taxes": {
      "percentage": "string",
      "inclusive": true
    }
  }
}
```

The request to update the quantity of the product or service in a subscription. You can also use this method to switch the plan and update the `shipping_amount` and `shipping_address` values for the subscription. This type of update requires the buyer's consent.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|plan_id|string|false|none|The unique PayPal-generated ID for the plan.|
|quantity|string|false|none|The quantity of the product or service in the subscription.|
|shipping_amount|[money](#schemamoney)|false|none|The shipping charges.|
|shipping_address|[shipping_detail](#schemashipping_detail)|false|none|The shipping address of the subscriber.|
|application_context|object|false|none|The application context, which customizes the payer experience during the subscription approval process with PayPal.|
|plan|[plan_override](#schemaplan_override)|false|none|An inline plan object to customise the subscription. You can override plan level default attributes by providing customised values for the subscription in this object. Any existing overrides will not be carried forward during subscription revise.|

<h2 id="tocS_subscription_revise_response">subscription_revise_response</h2>
<!-- backwards compatibility -->
<a id="schemasubscription_revise_response"></a>
<a id="schema_subscription_revise_response"></a>
<a id="tocSsubscription_revise_response"></a>
<a id="tocssubscription_revise_response"></a>

```json
{
  "plan_id": "stringstringstringstringst",
  "quantity": "string",
  "shipping_amount": {
    "currency_code": "str",
    "value": "string"
  },
  "shipping_address": {
    "name": {
      "full_name": "string"
    },
    "type": "SHIPPING",
    "options": [
      {
        "id": "string",
        "label": "string",
        "type": "SHIPPING",
        "amount": {
          "currency_code": "str",
          "value": "string"
        },
        "selected": true
      }
    ],
    "address": {
      "address_line_1": "string",
      "address_line_2": "string",
      "admin_area_2": "string",
      "admin_area_1": "string",
      "postal_code": "string",
      "country_code": "st"
    }
  },
  "plan": {
    "billing_cycles": [
      {
        "pricing_scheme": {
          "version": 0,
          "fixed_price": {
            "currency_code": "str",
            "value": "string"
          },
          "pricing_model": "VOLUME",
          "tiers": [
            {
              "starting_quantity": "string",
              "ending_quantity": "string",
              "amount": {
                "currency_code": "str",
                "value": "string"
              }
            }
          ],
          "create_time": "stringstringstringst",
          "update_time": "stringstringstringst"
        },
        "sequence": 1,
        "total_cycles": 0
      }
    ],
    "payment_preferences": {
      "auto_bill_outstanding": true,
      "setup_fee": {
        "currency_code": "str",
        "value": "string"
      },
      "setup_fee_failure_action": "CONTINUE",
      "payment_failure_threshold": 0
    },
    "taxes": {
      "percentage": "string",
      "inclusive": true
    }
  },
  "plan_overridden": true,
  "links": [
    {
      "href": "string",
      "rel": "string",
      "method": "GET"
    }
  ]
}
```

The response to a request to update the quantity of the product or service in a subscription. You can also use this method to switch the plan and update the `shipping_amount` and `shipping_address` values for the subscription. This type of update requires the buyer's consent.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|plan_id|string|false|none|The unique PayPal-generated ID for the plan.|
|quantity|string|false|none|The quantity of the product or service in the subscription.|
|shipping_amount|[money](#schemamoney)|false|none|The shipping charges.|
|shipping_address|[shipping_detail](#schemashipping_detail)|false|none|The shipping address of the subscriber.|
|plan|[plan_override](#schemaplan_override)|false|none|An inline plan object to customise the subscription. You can override plan level default attributes by providing customised values for the subscription in this object. Any existing overrides will not be carried forward during subscription revise.|
|plan_overridden|boolean|false|read-only|Indicates whether the subscription has overridden any plan attributes.|
|links|[subscription_revise_response_definitions-link_description_list](#schemasubscription_revise_response_definitions-link_description_list)|false|read-only|An array of request-related [HATEOAS links](/docs/api/reference/api-responses/#hateoas-links).|

<h2 id="tocS_subscription_revise_response_definitions-link_description_list">subscription_revise_response_definitions-link_description_list</h2>
<!-- backwards compatibility -->
<a id="schemasubscription_revise_response_definitions-link_description_list"></a>
<a id="schema_subscription_revise_response_definitions-link_description_list"></a>
<a id="tocSsubscription_revise_response_definitions-link_description_list"></a>
<a id="tocssubscription_revise_response_definitions-link_description_list"></a>

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

<h2 id="tocS_subscription_status">subscription_status</h2>
<!-- backwards compatibility -->
<a id="schemasubscription_status"></a>
<a id="schema_subscription_status"></a>
<a id="tocSsubscription_status"></a>
<a id="tocssubscription_status"></a>

```json
{
  "status": "APPROVAL_PENDING",
  "status_change_note": "string",
  "status_update_time": "stringstringstringst"
}
```

The subscription status details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|false|none|The status of the subscription.|
|status_change_note|string|false|none|The reason or notes for the status of the subscription.|
|status_update_time|[date_time](#schemadate_time)|false|none|The date and time, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). Seconds are required while fractional seconds are optional.<blockquote><strong>Note:</strong> The regular expression provides guidance but does not reject all invalid dates.</blockquote>|

#### Enumerated Values

|Property|Value|
|---|---|
|status|APPROVAL_PENDING|
|status|APPROVED|
|status|ACTIVE|
|status|SUSPENDED|
|status|CANCELLED|
|status|EXPIRED|

<h2 id="tocS_subscription_suspend_request">subscription_suspend_request</h2>
<!-- backwards compatibility -->
<a id="schemasubscription_suspend_request"></a>
<a id="schema_subscription_suspend_request"></a>
<a id="tocSsubscription_suspend_request"></a>
<a id="tocssubscription_suspend_request"></a>

```json
{
  "reason": "string"
}
```

The suspend subscription request details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reason|string|true|none|The reason for suspension of the Subscription.|

<h2 id="tocS_subscriptions.activate-400">subscriptions.activate-400</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptions.activate-400"></a>
<a id="schema_subscriptions.activate-400"></a>
<a id="tocSsubscriptions.activate-400"></a>
<a id="tocssubscriptions.activate-400"></a>

```json
{
  "details": [
    {
      "issue": "INVALID_STRING_MAX_LENGTH",
      "description": "The value of a field is too long."
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|[object]|false|none|none|

<h2 id="tocS_subscriptions.activate-422">subscriptions.activate-422</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptions.activate-422"></a>
<a id="schema_subscriptions.activate-422"></a>
<a id="tocSsubscriptions.activate-422"></a>
<a id="tocssubscriptions.activate-422"></a>

```json
{
  "details": [
    {
      "issue": "USER_ACCOUNT_CLOSED",
      "description": "User account locked or closed."
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|[object]|false|none|none|

<h2 id="tocS_subscriptions.cancel-400">subscriptions.cancel-400</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptions.cancel-400"></a>
<a id="schema_subscriptions.cancel-400"></a>
<a id="tocSsubscriptions.cancel-400"></a>
<a id="tocssubscriptions.cancel-400"></a>

```json
{
  "details": [
    {
      "issue": "INVALID_STRING_MAX_LENGTH",
      "description": "The value of a field is too long."
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|[object]|false|none|none|

<h2 id="tocS_subscriptions.cancel-422">subscriptions.cancel-422</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptions.cancel-422"></a>
<a id="schema_subscriptions.cancel-422"></a>
<a id="tocSsubscriptions.cancel-422"></a>
<a id="tocssubscriptions.cancel-422"></a>

```json
{
  "details": [
    {
      "issue": "USER_ACCOUNT_CLOSED",
      "description": "User account locked or closed."
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|[object]|false|none|none|

<h2 id="tocS_subscriptions.capture-400">subscriptions.capture-400</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptions.capture-400"></a>
<a id="schema_subscriptions.capture-400"></a>
<a id="tocSsubscriptions.capture-400"></a>
<a id="tocssubscriptions.capture-400"></a>

```json
{
  "details": [
    {
      "issue": "MISSING_REQUEST_BODY",
      "description": "Request body is missing."
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|[object]|false|none|none|

<h2 id="tocS_subscriptions.capture-422">subscriptions.capture-422</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptions.capture-422"></a>
<a id="schema_subscriptions.capture-422"></a>
<a id="tocSsubscriptions.capture-422"></a>
<a id="tocssubscriptions.capture-422"></a>

```json
{
  "details": [
    {
      "issue": "USER_ACCOUNT_CLOSED",
      "description": "User account locked or closed."
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|[object]|false|none|none|

<h2 id="tocS_subscriptions.create-400">subscriptions.create-400</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptions.create-400"></a>
<a id="schema_subscriptions.create-400"></a>
<a id="tocSsubscriptions.create-400"></a>
<a id="tocssubscriptions.create-400"></a>

```json
{
  "details": [
    {
      "issue": "INVALID_PARAMETER_SYNTAX",
      "description": "The value of a field does not conform to the expected format."
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|[object]|false|none|none|

<h2 id="tocS_subscriptions.create-422">subscriptions.create-422</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptions.create-422"></a>
<a id="schema_subscriptions.create-422"></a>
<a id="tocSsubscriptions.create-422"></a>
<a id="tocssubscriptions.create-422"></a>

```json
{
  "details": [
    {
      "issue": "USER_ACCOUNT_CLOSED",
      "description": "User account locked or closed."
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|[object]|false|none|none|

<h2 id="tocS_subscriptions.patch-400">subscriptions.patch-400</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptions.patch-400"></a>
<a id="schema_subscriptions.patch-400"></a>
<a id="tocSsubscriptions.patch-400"></a>
<a id="tocssubscriptions.patch-400"></a>

```json
{
  "details": [
    {
      "issue": "UNSUPPORTED_PATCH_OPERATION",
      "description": "The specified patch operation not supported for this field."
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|[object]|false|none|none|

<h2 id="tocS_subscriptions.patch-422">subscriptions.patch-422</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptions.patch-422"></a>
<a id="schema_subscriptions.patch-422"></a>
<a id="tocSsubscriptions.patch-422"></a>
<a id="tocssubscriptions.patch-422"></a>

```json
{
  "details": [
    {
      "issue": "USER_ACCOUNT_CLOSED",
      "description": "User account locked or closed."
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|[object]|false|none|none|

<h2 id="tocS_subscriptions.revise-400">subscriptions.revise-400</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptions.revise-400"></a>
<a id="schema_subscriptions.revise-400"></a>
<a id="tocSsubscriptions.revise-400"></a>
<a id="tocssubscriptions.revise-400"></a>

```json
{
  "details": [
    {
      "issue": "INVALID_PARAMETER_SYNTAX",
      "description": "The value of a field does not conform to the expected format."
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|[object]|false|none|none|

<h2 id="tocS_subscriptions.revise-404">subscriptions.revise-404</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptions.revise-404"></a>
<a id="schema_subscriptions.revise-404"></a>
<a id="tocSsubscriptions.revise-404"></a>
<a id="tocssubscriptions.revise-404"></a>

```json
{
  "details": [
    {
      "issue": "INVALID_RESOURCE_ID",
      "description": "Requested resource ID was not found."
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|[object]|false|none|none|

<h2 id="tocS_subscriptions.revise-422">subscriptions.revise-422</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptions.revise-422"></a>
<a id="schema_subscriptions.revise-422"></a>
<a id="tocSsubscriptions.revise-422"></a>
<a id="tocssubscriptions.revise-422"></a>

```json
{
  "details": [
    {
      "issue": "USER_ACCOUNT_CLOSED",
      "description": "User account locked or closed."
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|[object]|false|none|none|

<h2 id="tocS_subscriptions.suspend-400">subscriptions.suspend-400</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptions.suspend-400"></a>
<a id="schema_subscriptions.suspend-400"></a>
<a id="tocSsubscriptions.suspend-400"></a>
<a id="tocssubscriptions.suspend-400"></a>

```json
{
  "details": [
    {
      "issue": "INVALID_STRING_MAX_LENGTH",
      "description": "The value of a field is too long."
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|[object]|false|none|none|

<h2 id="tocS_subscriptions.suspend-422">subscriptions.suspend-422</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptions.suspend-422"></a>
<a id="schema_subscriptions.suspend-422"></a>
<a id="tocSsubscriptions.suspend-422"></a>
<a id="tocssubscriptions.suspend-422"></a>

```json
{
  "details": [
    {
      "issue": "USER_ACCOUNT_CLOSED",
      "description": "User account locked or closed."
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|[object]|false|none|none|

<h2 id="tocS_subscriptions.transactions-400">subscriptions.transactions-400</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptions.transactions-400"></a>
<a id="schema_subscriptions.transactions-400"></a>
<a id="tocSsubscriptions.transactions-400"></a>
<a id="tocssubscriptions.transactions-400"></a>

```json
{
  "details": [
    {
      "issue": "INVALID_PARAMETER_SYNTAX",
      "description": "The value of a field does not conform to the expected format."
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|[object]|false|none|none|

<h2 id="tocS_taxes">taxes</h2>
<!-- backwards compatibility -->
<a id="schemataxes"></a>
<a id="schema_taxes"></a>
<a id="tocStaxes"></a>
<a id="tocstaxes"></a>

```json
{
  "percentage": "string",
  "inclusive": true
}
```

The tax details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|percentage|[percentage](#schemapercentage)|true|none|The tax percentage on the billing amount.|
|inclusive|boolean|false|none|Indicates whether the tax was already included in the billing amount.|

<h2 id="tocS_taxes_override">taxes_override</h2>
<!-- backwards compatibility -->
<a id="schemataxes_override"></a>
<a id="schema_taxes_override"></a>
<a id="tocStaxes_override"></a>
<a id="tocstaxes_override"></a>

```json
{
  "percentage": "string",
  "inclusive": true
}
```

The tax details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|percentage|[percentage](#schemapercentage)|false|none|The tax percentage on the billing amount.|
|inclusive|boolean|false|none|Indicates whether the tax was already included in the billing amount.|

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

<h2 id="tocS_transaction">transaction</h2>
<!-- backwards compatibility -->
<a id="schematransaction"></a>
<a id="schema_transaction"></a>
<a id="tocStransaction"></a>
<a id="tocstransaction"></a>

```json
{
  "status": "COMPLETED",
  "id": "string",
  "amount_with_breakdown": {
    "gross_amount": {
      "currency_code": "str",
      "value": "string"
    },
    "total_item_amount": {
      "currency_code": "str",
      "value": "string"
    },
    "fee_amount": {
      "currency_code": "str",
      "value": "string"
    },
    "shipping_amount": {
      "currency_code": "str",
      "value": "string"
    },
    "tax_amount": {
      "currency_code": "str",
      "value": "string"
    },
    "net_amount": {
      "currency_code": "str",
      "value": "string"
    }
  },
  "payer_name": {
    "prefix": "string",
    "given_name": "string",
    "surname": "string",
    "middle_name": "string",
    "suffix": "string",
    "full_name": "string"
  },
  "payer_email": "string",
  "time": "stringstringstringst"
}
```

The transaction details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|false|read-only|The status of the captured payment.|
|id|string|true|read-only|The PayPal-generated transaction ID.|
|amount_with_breakdown|[amount_with_breakdown](#schemaamount_with_breakdown)|true|none|The breakdown details for the amount. Includes the gross, tax, fee, and shipping amounts.|
|payer_name|[name](#schemaname)|false|none|The name of the customer.|
|payer_email|[email_address](#schemaemail_address)|false|none|The email ID of the customer.|
|time|[date_time](#schemadate_time)|true|none|The date and time when the transaction was processed, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).|

#### Enumerated Values

|Property|Value|
|---|---|
|status|COMPLETED|
|status|DECLINED|
|status|PARTIALLY_REFUNDED|
|status|PENDING|
|status|REFUNDED|
|status|FAILED|

<h2 id="tocS_transaction_list">transaction_list</h2>
<!-- backwards compatibility -->
<a id="schematransaction_list"></a>
<a id="schema_transaction_list"></a>
<a id="tocStransaction_list"></a>
<a id="tocstransaction_list"></a>

```json
[
  {
    "status": "COMPLETED",
    "id": "string",
    "amount_with_breakdown": {
      "gross_amount": {
        "currency_code": "str",
        "value": "string"
      },
      "total_item_amount": {
        "currency_code": "str",
        "value": "string"
      },
      "fee_amount": {
        "currency_code": "str",
        "value": "string"
      },
      "shipping_amount": {
        "currency_code": "str",
        "value": "string"
      },
      "tax_amount": {
        "currency_code": "str",
        "value": "string"
      },
      "net_amount": {
        "currency_code": "str",
        "value": "string"
      }
    },
    "payer_name": {
      "prefix": "string",
      "given_name": "string",
      "surname": "string",
      "middle_name": "string",
      "suffix": "string",
      "full_name": "string"
    },
    "payer_email": "string",
    "time": "stringstringstringst"
  }
]
```

An array of transactions.

<h2 id="tocS_transactions_list">transactions_list</h2>
<!-- backwards compatibility -->
<a id="schematransactions_list"></a>
<a id="schema_transactions_list"></a>
<a id="tocStransactions_list"></a>
<a id="tocstransactions_list"></a>

```json
{
  "transactions": [
    {
      "status": "COMPLETED",
      "id": "string",
      "amount_with_breakdown": {
        "gross_amount": {
          "currency_code": "str",
          "value": "string"
        },
        "total_item_amount": {
          "currency_code": "str",
          "value": "string"
        },
        "fee_amount": {
          "currency_code": "str",
          "value": "string"
        },
        "shipping_amount": {
          "currency_code": "str",
          "value": "string"
        },
        "tax_amount": {
          "currency_code": "str",
          "value": "string"
        },
        "net_amount": {
          "currency_code": "str",
          "value": "string"
        }
      },
      "payer_name": {
        "prefix": "string",
        "given_name": "string",
        "surname": "string",
        "middle_name": "string",
        "suffix": "string",
        "full_name": "string"
      },
      "payer_email": "string",
      "time": "stringstringstringst"
    }
  ],
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

The list transactions for a subscription request details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|transactions|[transaction_list](#schematransaction_list)|false|none|An array of transactions.|
|total_items|integer|false|none|The total number of items.|
|total_pages|integer|false|none|The total number of pages.|
|links|[link_description_list](#schemalink_description_list)|false|read-only|An array of request-related [HATEOAS links](/docs/api/reference/api-responses/#hateoas-links).|

<h2 id="tocS_update_pricing_scheme_request">update_pricing_scheme_request</h2>
<!-- backwards compatibility -->
<a id="schemaupdate_pricing_scheme_request"></a>
<a id="schema_update_pricing_scheme_request"></a>
<a id="tocSupdate_pricing_scheme_request"></a>
<a id="tocsupdate_pricing_scheme_request"></a>

```json
{
  "billing_cycle_sequence": 1,
  "pricing_scheme": {
    "version": 0,
    "fixed_price": {
      "currency_code": "str",
      "value": "string"
    },
    "pricing_model": "VOLUME",
    "tiers": [
      {
        "starting_quantity": "string",
        "ending_quantity": "string",
        "amount": {
          "currency_code": "str",
          "value": "string"
        }
      }
    ],
    "create_time": "stringstringstringst",
    "update_time": "stringstringstringst"
  }
}
```

The update pricing scheme request details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billing_cycle_sequence|integer|true|none|The billing cycle sequence.|
|pricing_scheme|[pricing_scheme](#schemapricing_scheme)|true|none|The pricing scheme details.|

<h2 id="tocS_update_pricing_scheme_request_list">update_pricing_scheme_request_list</h2>
<!-- backwards compatibility -->
<a id="schemaupdate_pricing_scheme_request_list"></a>
<a id="schema_update_pricing_scheme_request_list"></a>
<a id="tocSupdate_pricing_scheme_request_list"></a>
<a id="tocsupdate_pricing_scheme_request_list"></a>

```json
[
  {
    "billing_cycle_sequence": 1,
    "pricing_scheme": {
      "version": 0,
      "fixed_price": {
        "currency_code": "str",
        "value": "string"
      },
      "pricing_model": "VOLUME",
      "tiers": [
        {
          "starting_quantity": "string",
          "ending_quantity": "string",
          "amount": {
            "currency_code": "str",
            "value": "string"
          }
        }
      ],
      "create_time": "stringstringstringst",
      "update_time": "stringstringstringst"
    }
  }
]
```

An array of pricing schemes.

<h2 id="tocS_update_pricing_schemes_list_request">update_pricing_schemes_list_request</h2>
<!-- backwards compatibility -->
<a id="schemaupdate_pricing_schemes_list_request"></a>
<a id="schema_update_pricing_schemes_list_request"></a>
<a id="tocSupdate_pricing_schemes_list_request"></a>
<a id="tocsupdate_pricing_schemes_list_request"></a>

```json
{
  "pricing_schemes": [
    {
      "billing_cycle_sequence": 1,
      "pricing_scheme": {
        "version": 0,
        "fixed_price": {
          "currency_code": "str",
          "value": "string"
        },
        "pricing_model": "VOLUME",
        "tiers": [
          {
            "starting_quantity": "string",
            "ending_quantity": "string",
            "amount": {
              "currency_code": "str",
              "value": "string"
            }
          }
        ],
        "create_time": "stringstringstringst",
        "update_time": "stringstringstringst"
      }
    }
  ]
}
```

The update pricing scheme request details.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pricing_schemes|[update_pricing_scheme_request_list](#schemaupdate_pricing_scheme_request_list)|true|none|An array of pricing schemes.|

<h2 id="tocS_vault_instruction_base">vault_instruction_base</h2>
<!-- backwards compatibility -->
<a id="schemavault_instruction_base"></a>
<a id="schema_vault_instruction_base"></a>
<a id="tocSvault_instruction_base"></a>
<a id="tocsvault_instruction_base"></a>

```json
{
  "store_in_vault": "ON_SUCCESS"
}
```

Basic vault instruction specification that can be extended by specific payment sources that supports vaulting.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|store_in_vault|[store_in_vault_instruction](#schemastore_in_vault_instruction)|false|none|Defines how and when the payment source gets vaulted.|

#### Enumerated Values

|Property|Value|
|---|---|
|store_in_vault|ON_SUCCESS|

<h2 id="tocS_vault_response">vault_response</h2>
<!-- backwards compatibility -->
<a id="schemavault_response"></a>
<a id="schema_vault_response"></a>
<a id="tocSvault_response"></a>
<a id="tocsvault_response"></a>

```json
{
  "id": "string",
  "status": "VAULTED",
  "customer": {
    "id": "string"
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

The details about a saved payment source.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The PayPal-generated ID for the saved payment source.|
|status|string|false|none|**Deprecated.** The vault status.|
|customer|object|false|none|The details about a customer in PayPal's system of record.|
|links|[definitions-link_description_list](#schemadefinitions-link_description_list)|false|read-only|An array of request-related HATEOAS links.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|VAULTED|
|status|CREATED|
|status|APPROVED|
