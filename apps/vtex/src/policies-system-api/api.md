<h1 id="policies-system-api">Policies System API v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.


 This API will create promotion alarms when selling products with undesired prices and promotions. It will create conditions that will check if the prices and the promotions are correct. If not, the system will alarm the store with information about the product sold at unexpected prices.

 ## Index

 `GET` [Get Policy List](https://developers.vtex.com/docs/api-reference/policies-system-api#get-/api/policy-engine/policies)
 `POST` [Evaluate Policies](https://developers.vtex.com/docs/api-reference/policies-system-api#post-/api/policy-engine/evaluate)
 `GET` [Get Policy by ID](https://developers.vtex.com/docs/api-reference/policies-system-api#get-/api/policy-engine/policies/-id-)
 `POST` [Create Policy](https://developers.vtex.com/docs/api-reference/policies-system-api#post-/api/policy-engine/policies/-id-)
 `PUT` [Update Policy](https://developers.vtex.com/docs/api-reference/policies-system-api#put-/api/policy-engine/policies/-id-)
 `DELETE` [Delete Policy by ID](https://developers.vtex.com/docs/api-reference/policies-system-api#delete-/api/policy-engine/policies/-id-)

Base URLs:

* <a href="https://vtex.local">https://vtex.local</a>

* <a href="https://{accountName}.{environment}.com.br">https://{accountName}.{environment}.com.br</a> - VTEX server url

<h1 id="policies-system-api-policy">Policy</h1>

## Evaluate Policies

<a id="opIdPolicy_Evaluate"></a>

> Code samples

```bash
curl https://example.com/api/policy-engine/evaluate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "context": {
      "brandId": "2000001",
      "discountPercentage": "91.00"
    },
    "resource": "vrn:vtex.promotions-alert:aws-us-east-1:kamila:master:/_v/promotions_alert"
  }'
```

`POST /api/policy-engine/evaluate`

This endpoint consults all policies and checks the ones that satisfy the request body’s conditions.

> Body parameter

```json
{
  "context": {
    "brandId": "2000001",
    "discountPercentage": "91.00"
  },
  "resource": "vrn:vtex.promotions-alert:aws-us-east-1:kamila:master:/_v/promotions_alert"
}
```

<h3 id="evaluate-policies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand |
|body|body|[EvaluatePolicyRequest](#schemaevaluatepolicyrequest)|true|none|
|» context|body|object|true|Conditions that the Policy needs to satisfy|
|» resource|body|string|true|Scope on which this policy must be evaluated|

> Example responses

> 200 Response

```json
[
  {
    "id": "SendSlackMessage",
    "metadata": {
      "alertDescription": "Avoid selling products from Berenice with a discount greater than 70%.",
      "channel": "C01NJFF35R6",
      "relatedUsers": [
        "URUNDC2NB"
      ]
    }
  }
]
```

<h3 id="evaluate-policies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="evaluate-policies-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PolicyActionGetResponse](#schemapolicyactiongetresponse)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get Policy List

<a id="opIdPolicy_List"></a>

> Code samples

```bash
curl https://example.com/api/policy-engine/policies \
  -H 'Accept: application/json'
```

`GET /api/policy-engine/policies`

Retrieves a list of all policies in the account and general information of each policy.

<h3 id="get-policy-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand |

> Example responses

> 200 Response

```json
[
  {
    "description": "TesteMarcosPromotionsAlert",
    "id": "pa_test_001",
    "name": "TestAlarmBerenice",
    "statements": [
      {
        "actions": [
          {
            "id": "SendSlackMessage",
            "metadata": {
              "alertDescription": "Avoid selling products from Berenice with a discount greater than 70%.",
              "channel": "C01NJFF35R6",
              "relatedUsers": [
                "URUNDC2NB"
              ]
            }
          }
        ],
        "condition": {
          "conditions": [
            {
              "conditions": [],
              "key": "brandId",
              "operation": "stringEquals",
              "values": [
                "2000001"
              ]
            },
            {
              "conditions": [],
              "key": "discountPercentage",
              "operation": "numericGreaterThan",
              "values": [
                "70.00"
              ]
            }
          ],
          "operation": "and"
        },
        "effect": "Allow",
        "resource": "vrn:vtex.promotions-alert:aws-us-east-1:kamila:master:/_v/promotions_alert"
      }
    ]
  }
]
```

<h3 id="get-policy-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="get-policy-list-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PolicyGetResponse](#schemapolicygetresponse)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get Policy by ID

<a id="opIdPolicy_Get"></a>

> Code samples

```bash
curl https://example.com/api/policy-engine/policies/pa_test_001 \
  -H 'Accept: application/json'
```

`GET /api/policy-engine/policies/{id}`

Retrieves general information of a policy by its ID.

<h3 id="get-policy-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand |
|id|path|string|true|Policy ID|

> Example responses

> 200 Response

```json
[
  {
    "description": "TesteMarcosPromotionsAlert",
    "id": "pa_test_001",
    "name": "TestAlarmBerenice",
    "statements": [
      {
        "actions": [
          {
            "id": "SendSlackMessage",
            "metadata": {
              "alertDescription": "Avoid selling products from Berenice with a discount greater than 70%.",
              "channel": "C01NJFF35R6",
              "relatedUsers": [
                "URUNDC2NB"
              ]
            }
          }
        ],
        "condition": {
          "conditions": [
            {
              "conditions": [],
              "key": "brandId",
              "operation": "stringEquals",
              "values": [
                "2000001"
              ]
            },
            {
              "conditions": [],
              "key": "discountPercentage",
              "operation": "numericGreaterThan",
              "values": [
                "70.00"
              ]
            }
          ],
          "operation": "and"
        },
        "effect": "Allow",
        "resource": "vrn:vtex.promotions-alert:aws-us-east-1:kamila:master:/_v/promotions_alert"
      }
    ]
  }
]
```

<h3 id="get-policy-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="get-policy-by-id-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PolicyGetResponse](#schemapolicygetresponse)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Update Policy

> Code samples

```bash
curl https://example.com/api/policy-engine/policies/pa_test_001 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "description": "string",
    "name": "string",
    "statements": [
      {
        "actions": [
          null
        ],
        "condition": {
          "conditions": [
            {
              "conditions": [
                "string"
              ],
              "key": "string",
              "operation": "string",
              "values": [
                "string"
              ]
            }
          ]
        },
        "effect": "Allow",
        "operation": "string",
        "resource": "string"
      }
    ]
  }'
```

`PUT /api/policy-engine/policies/{id}`

Updates an existing policy at your account.

> Body parameter

```json
{
  "description": "string",
  "name": "string",
  "statements": [
    {
      "actions": [
        null
      ],
      "condition": {
        "conditions": [
          {
            "conditions": [
              "string"
            ],
            "key": "string",
            "operation": "string",
            "values": [
              "string"
            ]
          }
        ]
      },
      "effect": "Allow",
      "operation": "string",
      "resource": "string"
    }
  ]
}
```

<h3 id="update-policy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand |
|id|path|string|true|Policy ID|
|body|body|[PolicySaveRequest](#schemapolicysaverequest)|true|none|
|» description|body|string|true|Policy description. This description is only for internal use of identification|
|» name|body|string|true|Policy Name|
|» statements|body|[[StatementGetResponse](#schemastatementgetresponse)]|true|Requirements to the Policy be applied|

<h3 id="update-policy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="update-policy-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PolicyGetResponse](#schemapolicygetresponse)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Create Policy

<a id="opIdPolicy_CreateOrUpdate"></a>

> Code samples

```bash
curl https://example.com/api/policy-engine/policies/pa_test_001 \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "description": "TesteMarcosPromotionsAlert",
    "name": "TestAlarmBerenice",
    "statements": [
      {
        "actions": [
          {
            "id": "SendSlackMessage",
            "metadata": {
              "alertDescription": "Avoid selling products from Berenice with a discount greater than 40%.",
              "channel": "C01NJFF35R6",
              "relatedUsers": [
                "URUNDC2NB"
              ]
            }
          }
        ],
        "condition": {
          "conditions": [
            {
              "conditions": [],
              "key": "brandId",
              "operation": "stringEquals",
              "values": [
                "2000001"
              ]
            },
            {
              "conditions": [],
              "key": "discountPercentage",
              "operation": "numericGreaterThan",
              "values": [
                "40.00"
              ]
            }
          ],
          "operation": "and"
        },
        "effect": "Allow",
        "resource": "vrn:vtex.promotions-alert:aws-us-east-1:kamila:master:/_v/promotions_alert"
      }
    ]
  }'
```

`POST /api/policy-engine/policies/{id}`

Creates a new policy from scratch.

> Body parameter

```json
{
  "description": "TesteMarcosPromotionsAlert",
  "name": "TestAlarmBerenice",
  "statements": [
    {
      "actions": [
        {
          "id": "SendSlackMessage",
          "metadata": {
            "alertDescription": "Avoid selling products from Berenice with a discount greater than 40%.",
            "channel": "C01NJFF35R6",
            "relatedUsers": [
              "URUNDC2NB"
            ]
          }
        }
      ],
      "condition": {
        "conditions": [
          {
            "conditions": [],
            "key": "brandId",
            "operation": "stringEquals",
            "values": [
              "2000001"
            ]
          },
          {
            "conditions": [],
            "key": "discountPercentage",
            "operation": "numericGreaterThan",
            "values": [
              "40.00"
            ]
          }
        ],
        "operation": "and"
      },
      "effect": "Allow",
      "resource": "vrn:vtex.promotions-alert:aws-us-east-1:kamila:master:/_v/promotions_alert"
    }
  ]
}
```

<h3 id="create-policy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand |
|id|path|string|true|Policy ID|
|body|body|[PolicySaveRequest](#schemapolicysaverequest)|false|none|
|» description|body|string|true|Policy description. This description is only for internal use of identification|
|» name|body|string|true|Policy Name|
|» statements|body|[[StatementGetResponse](#schemastatementgetresponse)]|true|Requirements to the Policy be applied|

<h3 id="create-policy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="create-policy-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PolicyGetResponse](#schemapolicygetresponse)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Delete Policy by ID

<a id="opIdPolicy_Delete"></a>

> Code samples

```bash
curl https://example.com/api/policy-engine/policies/pa_test_001 \
  -X DELETE
```

`DELETE /api/policy-engine/policies/{id}`

Deletes a specific policy of the account by its ID.

<h3 id="delete-policy-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|Describes the type of the content being sent|
|Accept|header|string|true|HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand |
|id|path|string|true|Policy ID|

<h3 id="delete-policy-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|200 OK|None|

<aside class="success">
This operation does not require authentication
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
  "accountType": 0,
  "id": "string",
  "isActive": true,
  "isOperating": true,
  "mainAccountName": "string",
  "name": "string",
  "operationDate": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountType|[AccountType](#schemaaccounttype)|false|none|none|
|id|string|false|none|none|
|isActive|boolean|false|none|none|
|isOperating|boolean|false|none|none|
|mainAccountName|string|false|none|none|
|name|string|false|none|none|
|operationDate|string(date-time)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|accountType|0|
|accountType|1|

<h2 id="tocS_AccountType">AccountType</h2>
<!-- backwards compatibility -->
<a id="schemaaccounttype"></a>
<a id="schema_AccountType"></a>
<a id="tocSaccounttype"></a>
<a id="tocsaccounttype"></a>

```json
0
```

<h2 id="tocS_EvaluatePolicyRequest">EvaluatePolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemaevaluatepolicyrequest"></a>
<a id="schema_EvaluatePolicyRequest"></a>
<a id="tocSevaluatepolicyrequest"></a>
<a id="tocsevaluatepolicyrequest"></a>

```json
{
  "context": {
    "brandId": "2000001",
    "discountPercentage": "91.00"
  },
  "resource": "vrn:vtex.promotions-alert:aws-us-east-1:kamila:master:/_v/promotions_alert"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|context|object|true|none|Conditions that the Policy needs to satisfy|
|resource|string|true|none|Scope on which this policy must be evaluated|

<h2 id="tocS_PolicyActionGetResponse">PolicyActionGetResponse</h2>
<!-- backwards compatibility -->
<a id="schemapolicyactiongetresponse"></a>
<a id="schema_PolicyActionGetResponse"></a>
<a id="tocSpolicyactiongetresponse"></a>
<a id="tocspolicyactiongetresponse"></a>

```json
{
  "id": "string",
  "metadata": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|Action ID|
|metadata|object|false|none|Metadata object from the current action|

<h2 id="tocS_PolicyGetResponse">PolicyGetResponse</h2>
<!-- backwards compatibility -->
<a id="schemapolicygetresponse"></a>
<a id="schema_PolicyGetResponse"></a>
<a id="tocSpolicygetresponse"></a>
<a id="tocspolicygetresponse"></a>

```json
{
  "description": "string",
  "id": "string",
  "name": "string",
  "statements": [
    {
      "actions": [
        null
      ],
      "condition": {
        "conditions": [
          {
            "conditions": [
              "string"
            ],
            "key": "string",
            "operation": "string",
            "values": [
              "string"
            ]
          }
        ]
      },
      "effect": "Allow",
      "operation": "string",
      "resource": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Policy description. This description is only for internal use of identification|
|id|string|false|none|Policy ID|
|name|string|false|none|Policy Name|
|statements|[[StatementGetResponse](#schemastatementgetresponse)]|false|none|Requirements to the Policy be applied|

<h2 id="tocS_PolicySaveRequest">PolicySaveRequest</h2>
<!-- backwards compatibility -->
<a id="schemapolicysaverequest"></a>
<a id="schema_PolicySaveRequest"></a>
<a id="tocSpolicysaverequest"></a>
<a id="tocspolicysaverequest"></a>

```json
{
  "description": "string",
  "name": "string",
  "statements": [
    {
      "actions": [
        null
      ],
      "condition": {
        "conditions": [
          {
            "conditions": [
              "string"
            ],
            "key": "string",
            "operation": "string",
            "values": [
              "string"
            ]
          }
        ]
      },
      "effect": "Allow",
      "operation": "string",
      "resource": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|true|none|Policy description. This description is only for internal use of identification|
|name|string|true|none|Policy Name|
|statements|[[StatementGetResponse](#schemastatementgetresponse)]|true|none|Requirements to the Policy be applied|

<h2 id="tocS_StatementGetResponse">StatementGetResponse</h2>
<!-- backwards compatibility -->
<a id="schemastatementgetresponse"></a>
<a id="schema_StatementGetResponse"></a>
<a id="tocSstatementgetresponse"></a>
<a id="tocsstatementgetresponse"></a>

```json
{
  "actions": [
    null
  ],
  "condition": {
    "conditions": [
      {
        "conditions": [
          "string"
        ],
        "key": "string",
        "operation": "string",
        "values": [
          "string"
        ]
      }
    ]
  },
  "effect": "Allow",
  "operation": "string",
  "resource": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actions|[object]|false|none|Actions that the Policy will execute|
|condition|object|false|none|Condition to activate this policy. This object can have a maximum of ten recursive conditions|
|effect|string|true|none|This field is not functional at the moment. To create a correct request, fill the field with `Allow`|
|operation|string|false|none|This operation will determine if all the conditions need to be valid or at least one of them, if the conditions array is not empty.  The possible values to these fields are `None`, `stringEquals`, `stringEqualsIgnoreCase`, `numericEquals`, `numericLessThan`, `numericLessThanEquals`,   `numericGreaterThan`, `numericGreaterThanEquals`, `bool`, `not`, `or`, `and`, `dateTimeUtcGreaterThan`, `dateTimeUtcLessThan`, and `between`|
|resource|string|false|none|Scope on which this policy must be evaluated|
