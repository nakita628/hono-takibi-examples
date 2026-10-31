<h1 id="open-policy-agent-opa-rest-api">Open Policy Agent (OPA) REST API v0.28.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

OPA provides policy-based control for cloud native environments. The following *endpoints* (such as `PUT /v1/policies`) provide reference documentation for the OPA REST API.

### API specification viewing options

- **[View the specification in *Redoc* (default)](index.html)**
- **[View the specification in *Swagger UI*](swagger-ui.html)**

Base URLs:

* <a href="http://openpolicy.local">http://openpolicy.local</a>

Web: <a href="https://github.com/open-policy-agent/opa">The OPA team</a> 
License: <a href="https://www.apache.org/licenses/LICENSE-2.0">Apache 2.0</a>

<a href="https://www.openpolicyagent.org/docs/latest/">OPA documentation</a>

<h1 id="open-policy-agent-opa-rest-api-policy-api">Policy API</h1>

Allows you to add, remove and modify policy modules. *Policy module identifiers are only used for management purposes. They are not used outside the Policy API.*

## List policies

<a id="opIdgetPolicies"></a>

> Code samples

```bash
curl https://example.com/v1/policies \
  -H 'Accept: application/json'
```

`GET /v1/policies`

This API endpoint responds with a list of all policy modules on the server (result response)

<h3 id="list-policies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pretty|query|boolean|false|If true, response will be in a human-readable format.|

> Example responses

> 200 Response

```json
{
  "result": [
    {
      "ast": {
        "package": {
          "path": [
            {
              "type": "import",
              "value": "data.opa.example"
            }
          ]
        },
        "rules": [
          {
            "body": [
              {
                "index": 1,
                "terms": [
                  {
                    "type": "var",
                    "value": [
                      {
                        "type": "string",
                        "value": "string"
                      }
                    ]
                  }
                ]
              }
            ],
            "head": {
              "key": {
                "type": "var",
                "value": "$0"
              },
              "name": "violations"
            }
          }
        ]
      },
      "id": "example2",
      "raw": "package opa.examples\\n\\nimport data.servers\\n\\nviolations[server] {\\n\\tserver = servers[_]\\n\\tserver.protocols[_] = \\\"http\\\"\\n\\tpublic_servers[server]\\n}\\n"
    }
  ]
}
```

> 500 Response

```json
{
  "code": "invalid_parameter",
  "errors": [
    {
      "code": "rego_unsafe_var_error",
      "location": {
        "col": 1,
        "file": "example1",
        "row": 3
      },
      "message": "var x is unsafe"
    }
  ],
  "message": "error(s) occurred while compiling module(s)"
}
```

<h3 id="list-policies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[200Result](#schema200result)|
|500|Internal Server Error|Server error|[400](#schema400)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a policy module

<a id="opIdgetPolicyModule"></a>

> Code samples

```bash
curl https://example.com/v1/policies/example1 \
  -H 'Accept: application/json'
```

`GET /v1/policies/{id}`

This API endpoint returns the details of the specified policy module (`{id}`)

<h3 id="get-a-policy-module-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pretty|query|boolean|false|If true, response will be in a human-readable format.|
|id|path|string|true|The name of a policy module|

> Example responses

> 200 Response

```json
{
  "result": [
    {
      "ast": {
        "package": {
          "path": [
            {
              "type": "import",
              "value": "data.opa.example"
            }
          ]
        },
        "rules": [
          {
            "body": [
              {
                "index": 1,
                "terms": [
                  {
                    "type": "var",
                    "value": [
                      {
                        "type": "string",
                        "value": "string"
                      }
                    ]
                  }
                ]
              }
            ],
            "head": {
              "key": {
                "type": "var",
                "value": "$0"
              },
              "name": "violations"
            }
          }
        ]
      },
      "id": "example2",
      "raw": "package opa.examples\\n\\nimport data.servers\\n\\nviolations[server] {\\n\\tserver = servers[_]\\n\\tserver.protocols[_] = \\\"http\\\"\\n\\tpublic_servers[server]\\n}\\n"
    }
  ]
}
```

> 404 Response

```json
{
  "code": "resource_not_found",
  "message": "storage_not_found_error: policy id \\\"partial\\\""
}
```

> 500 Response

```json
{
  "code": "invalid_parameter",
  "errors": [
    {
      "code": "rego_unsafe_var_error",
      "location": {
        "col": 1,
        "file": "example1",
        "row": 3
      },
      "message": "var x is unsafe"
    }
  ],
  "message": "error(s) occurred while compiling module(s)"
}
```

<h3 id="get-a-policy-module-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[200Result](#schema200result)|
|404|Not Found|Not found (for example, a requested policy module or document does not exist)|[404](#schema404)|
|500|Internal Server Error|Server error|[400](#schema400)|

<aside class="success">
This operation does not require authentication
</aside>

## Create or update a policy module

<a id="opIdputPolicyModule"></a>

> Code samples

```bash
curl https://example.com/v1/policies/example1 \
  -X PUT \
  -H 'Content-Type: text/plain' \
  -H 'Accept: application/json' \
  -d 'package opa.examples

import data.servers
import data.networks
import data.ports

public_servers[server] {
  some k, m
  	server := servers[_]
  	server.ports[_] == ports[k].id
  	ports[k].networks[_] == networks[m].id
  	networks[m].public == true
}'
```

`PUT /v1/policies/{id}`

- If the policy module does not exist, it is created.
- If the policy module already exists, it is replaced.

If the policy module isn't correctly defined, a *bad request* (400) response is returned.

### Example policy module
```yaml
package opa.examples

import data.servers
import data.networks
import data.ports

public_servers[server] {
  some k, m
  	server := servers[_]
  	server.ports[_] == ports[k].id
  	ports[k].networks[_] == networks[m].id
  	networks[m].public == true
}
```

> Body parameter

```text
package opa.examples

import data.servers
import data.networks
import data.ports

public_servers[server] {
  some k, m
  	server := servers[_]
  	server.ports[_] == ports[k].id
  	ports[k].networks[_] == networks[m].id
  	networks[m].public == true
}
```

<h3 id="create-or-update-a-policy-module-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pretty|query|boolean|false|If true, response will be in a human-readable format.|
|metrics|query|boolean|false|If true, compiler performance metrics will be returned in the response.|
|id|path|string|true|The name of a policy module|
|body|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "result": [
    {
      "ast": {
        "package": {
          "path": [
            {
              "type": "import",
              "value": "data.opa.example"
            }
          ]
        },
        "rules": [
          {
            "body": [
              {
                "index": 1,
                "terms": [
                  {
                    "type": "var",
                    "value": [
                      {
                        "type": "string",
                        "value": "string"
                      }
                    ]
                  }
                ]
              }
            ],
            "head": {
              "key": {
                "type": "var",
                "value": "$0"
              },
              "name": "violations"
            }
          }
        ]
      },
      "id": "example2",
      "raw": "package opa.examples\\n\\nimport data.servers\\n\\nviolations[server] {\\n\\tserver = servers[_]\\n\\tserver.protocols[_] = \\\"http\\\"\\n\\tpublic_servers[server]\\n}\\n"
    }
  ]
}
```

> 400 Response

```json
{
  "code": "invalid_parameter",
  "errors": [
    {
      "code": "rego_unsafe_var_error",
      "location": {
        "col": 1,
        "file": "example1",
        "row": 3
      },
      "message": "var x is unsafe"
    }
  ],
  "message": "error(s) occurred while compiling module(s)"
}
```

> 500 Response

```json
{
  "code": "invalid_parameter",
  "errors": [
    {
      "code": "rego_unsafe_var_error",
      "location": {
        "col": 1,
        "file": "example1",
        "row": 3
      },
      "message": "var x is unsafe"
    }
  ],
  "message": "error(s) occurred while compiling module(s)"
}
```

<h3 id="create-or-update-a-policy-module-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[200Result](#schema200result)|
|400|Bad Request|Bad request|[400](#schema400)|
|500|Internal Server Error|Server error|[400](#schema400)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a policy module

<a id="opIddeletePolicyModule"></a>

> Code samples

```bash
curl https://example.com/v1/policies/example1 \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /v1/policies/{id}`

This API endpoint removes an existing policy module from the server

<h3 id="delete-a-policy-module-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pretty|query|boolean|false|If true, response will be in a human-readable format.|
|id|path|string|true|The name of a policy module|

> Example responses

> 200 Response

```json
{
  "result": [
    {
      "ast": {
        "package": {
          "path": [
            {
              "type": "import",
              "value": "data.opa.example"
            }
          ]
        },
        "rules": [
          {
            "body": [
              {
                "index": 1,
                "terms": [
                  {
                    "type": "var",
                    "value": [
                      {
                        "type": "string",
                        "value": "string"
                      }
                    ]
                  }
                ]
              }
            ],
            "head": {
              "key": {
                "type": "var",
                "value": "$0"
              },
              "name": "violations"
            }
          }
        ]
      },
      "id": "example2",
      "raw": "package opa.examples\\n\\nimport data.servers\\n\\nviolations[server] {\\n\\tserver = servers[_]\\n\\tserver.protocols[_] = \\\"http\\\"\\n\\tpublic_servers[server]\\n}\\n"
    }
  ],
  "provenance": {
    "build_commit": "4c6e524",
    "build_hostname": "3bb58334a5a9",
    "build_timestamp": "string",
    "bundles": {
      "property1": null,
      "property2": null
    },
    "version": "string"
  },
  "metrics": {
    "counter_server_query_cache_hit": 0,
    "timer_query_compile_stage_build_comprehension_index_ns": 43000,
    "timer_query_compile_stage_check_safety_ns": 852000,
    "timer_query_compile_stage_check_types_ns": 577000,
    "timer_query_compile_stage_check_undefined_funcs_ns": 426000,
    "timer_query_compile_stage_check_unsafe_builtins_ns": 14000,
    "timer_query_compile_stage_resolve_refs_ns": 3000,
    "timer_query_compile_stage_rewrite_comprehension_terms_ns": 329000,
    "timer_query_compile_stage_rewrite_dynamic_terms_ns": 27000,
    "timer_query_compile_stage_rewrite_expr_terms_ns": 40000,
    "timer_query_compile_stage_rewrite_local_vars_ns": 187000,
    "timer_query_compile_stage_rewrite_to_capture_value_ns": 1178000,
    "timer_query_compile_stage_rewrite_with_values_ns": 23000,
    "timer_rego_input_parse_ns": 69994,
    "timer_rego_module_compile_ns": 69994,
    "timer_rego_module_parse_ns": 12345,
    "timer_rego_query_compile_ns": 4096,
    "timer_rego_query_eval_ns": 69994,
    "timer_rego_query_parse_ns": 4096,
    "timer_server_handler_ns": 631000,
    "timer_server_read_bytes_ns": 631000
  },
  "explanation": [
    {
      "locals": [
        {
          "key": {
            "type": "string",
            "value": "string"
          },
          "value": {
            "type": "string",
            "value": "string"
          }
        }
      ],
      "node": {
        "index": 0,
        "terms": [
          {
            "type": "var",
            "value": "$term1"
          }
        ]
      },
      "op": "enter",
      "parent_id": 0,
      "query_id": 0,
      "type": "expr"
    }
  ]
}
```

> 400 Response

```json
{
  "code": "invalid_parameter",
  "errors": [
    {
      "code": "rego_unsafe_var_error",
      "location": {
        "col": 1,
        "file": "example1",
        "row": 3
      },
      "message": "var x is unsafe"
    }
  ],
  "message": "error(s) occurred while compiling module(s)"
}
```

> 404 Response

```json
{
  "code": "resource_not_found",
  "message": "storage_not_found_error: policy id \\\"partial\\\""
}
```

> 500 Response

```json
{
  "code": "invalid_parameter",
  "errors": [
    {
      "code": "rego_unsafe_var_error",
      "location": {
        "col": 1,
        "file": "example1",
        "row": 3
      },
      "message": "var x is unsafe"
    }
  ],
  "message": "error(s) occurred while compiling module(s)"
}
```

<h3 id="delete-a-policy-module-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad request|[400](#schema400)|
|404|Not Found|Not found (for example, a requested policy module or document does not exist)|[404](#schema404)|
|500|Internal Server Error|Server error|[400](#schema400)|

<h3 id="delete-a-policy-module-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|[object]|false|none|none|
|» ast|object|false|none|The types for declarations and runtime objects passed to your implementation. This consists of an abstract syntax tree (AST) of policy modules, package and import declarations, rules, expressions, and terms.|
|» » package|object|false|none|none|
|» » » path|[object]|false|none|The path to the package|
|» » » » type|string|false|none|The type of the path operation|
|» » » » value|string|false|none|The path variable|
|» » rules|[object]|false|none|When OPA evaluates a rule, it generates the content of a [virtual documents](https://www.openpolicyagent.org/docs/latest/philosophy/#the-opa-document-model)|
|» » » body|[object]|false|none|A list of the terms in this rule|
|» » » » index|number|false|none|The location of this term in the list (starts at 0)|
|» » » » terms|[object]|false|none|The type/value pairing for this term|
|» » » » » type|string|false|none|The type of the term variable|
|» » » » » value|[object]|false|none|The list of types and values for the term variable|
|» » » » » » type|string|false|none|none|
|» » » » » » value|string|false|none|none|
|» » » head|object|false|none|none|
|» » » » key|object|false|none|The type/value pairing for this rule's head|
|» » » » » type|string|false|none|The type of the head|
|» » » » » value|string|false|none|The value of the head|
|» » » » name|string|false|none|The head of the rule|
|» id|string|false|none|The name of a policy module|
|» raw|string|false|none|A string representation of the full Rego policy|
|provenance|object|false|none|none|
|» build_commit|string|false|none|The Git commit id of this OPA build.|
|» build_hostname|string|false|none|The hostname where this instance was built.|
|» build_timestamp|string|false|none|When this OPA instance was built (in [ISO8601 format](https://www.w3.org/TR/NOTE-datetime))|
|» bundles|object|false|none|A set of key-value pairs describing each bundle activated on the server.|
|» » **additionalProperties**|object|false|none|none|
|» version|string|false|none|The version of this OPA instance|
|metrics|object|false|none|none|
|» counter_server_query_cache_hit|number|false|none|*Description is forthcoming*|
|» timer_query_compile_stage_build_comprehension_index_ns|number|false|none|(Only returned if `instrument` is true.) *Description is forthcoming*|
|» timer_query_compile_stage_check_safety_ns|number|false|none|(Only returned if `instrument` is true.) *Description is forthcoming*|
|» timer_query_compile_stage_check_types_ns|number|false|none|(Only returned if `instrument` is true.) *Description is forthcoming*|
|» timer_query_compile_stage_check_undefined_funcs_ns|number|false|none|(Only returned if `instrument` is true.) *Description is forthcoming*|
|» timer_query_compile_stage_check_unsafe_builtins_ns|number|false|none|(Only returned if `instrument` is true.) *Description is forthcoming*|
|» timer_query_compile_stage_resolve_refs_ns|number|false|none|(Only returned if `instrument` is true.) *Description is forthcoming*|
|» timer_query_compile_stage_rewrite_comprehension_terms_ns|number|false|none|(Only returned if `instrument` is true.) *Description is forthcoming*|
|» timer_query_compile_stage_rewrite_dynamic_terms_ns|number|false|none|(Only returned if `instrument` is true.) *Description is forthcoming*|
|» timer_query_compile_stage_rewrite_expr_terms_ns|number|false|none|(Only returned if `instrument` is true.) *Description is forthcoming*|
|» timer_query_compile_stage_rewrite_local_vars_ns|number|false|none|(Only returned if `instrument` is true.) *Description is forthcoming*|
|» timer_query_compile_stage_rewrite_to_capture_value_ns|number|false|none|(Only returned if `instrument` is true.) *Description is forthcoming*|
|» timer_query_compile_stage_rewrite_with_values_ns|number|false|none|(Only returned if `instrument` is true.) *Description is forthcoming*|
|» timer_rego_input_parse_ns|number|false|none|Time taken (in nanonseconds) to parse the input|
|» timer_rego_module_compile_ns|number|false|none|Time taken (in nanonseconds) to compile the loaded policy modules|
|» timer_rego_module_parse_ns|number|false|none|Time taken (in nanoseconds) to parse the input policy module|
|» timer_rego_query_compile_ns|number|false|none|Time taken (in nanoseconds) to compile the query|
|» timer_rego_query_eval_ns|number|false|none|Time taken (in nanonseconds) to evaluate the query|
|» timer_rego_query_parse_ns|number|false|none|Time taken (in nanoseconds) to parse the query|
|» timer_server_handler_ns|number|false|none|Time taken (in nanoseconds) to handle the API request|
|» timer_server_read_bytes_ns|number|false|none|*Description is forthcoming*|
|explanation|[object]|false|none|none|
|» locals|[object]|false|none|The query's term bindings at the point when the trace event was emitted.|
|» » key|object|false|none|none|
|» » » type|string|false|none|none|
|» » » value|string|false|none|none|
|» » value|object|false|none|none|
|» » » type|string|false|none|none|
|» » » value|string|false|none|none|
|» node|object|false|none|The AST element associated with the evaluation step.|
|» » index|number|false|none|Node number|
|» » terms|[object]|false|none|none|
|» » » type|string|false|none|none|
|» » » value|string|false|none|none|
|» op|string|false|none|The kind of *trace event*<br><br>Each trace event represents a step in the query evaluation process. Trace events are emitted at the following points:<br>- enter - before a body or rule is evaluated<br>- exit - after a body or rule has evaluated successfully<br>- eval - before an expression is evaluated<br>- fail - after an expression has evaluated to false.<br>- redo - before evaluation restarts from a body, rule, or expression.<br><br>By default, OPA searches for all sets of term bindings that make all expressions in the query evaluate to true. Because there may be multiple answers, the search can restart when OPA determines the query is true or false. When the search restarts, a *redo trace event* is emitted.|
|» parent_id|number|false|none|The parent query. Use this field to identify trace events from related queries.<br><br>For example, if query A references rule R, trace events emitted when evaluating rule R will have the *parent_id* field set to query A’s *query_id*.|
|» query_id|number|false|none|The query that the trace event was emitted for. Use this field to distinguish trace events emitted by from different queries.|
|» type|string|false|none|The type of the **node** field|

#### Enumerated Values

|Property|Value|
|---|---|
|» » » » type|import|
|» » » » type|package|
|» op|enter|
|» op|exit|
|» op|eval|
|» op|fail|
|» op|redo|
|» type|expr|
|» type|rule|
|» type|body|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="open-policy-agent-opa-rest-api-data-api">Data API</h1>

Exposes endpoints for reading and writing documents in OPA. For an explanation of the different types of documents, see [the OPA document model](https://www.openpolicyagent.org/docs/latest/philosophy/#the-opa-document-model)

## Get a document (with webhook)

<a id="opIdgetDocumentWithWebHook"></a>

> Code samples

```bash
curl https://example.com/v0/data/opa%2Fexamples%2Fallow_request \
  -X POST \
  -H 'Content-Type: application/x-yaml' \
  -H 'Accept: application/json' \
  -d '{
  "example": {
    "flag": true
    }
 }'
```

`POST /v0/data/{path}`

The example given here assumes you have created a policy (with `PUT /v1/policies/{path}`), such as:

  ```yaml
  package opa.examples
  import input.example.flag
  allow_request { flag == true }
  ```

The server will return a *not found* (404) response if the requested document is missing or undefined.


> Body parameter

```text
{
  "example": {
    "flag": true
    }
 }
```

<h3 id="get-a-document-with-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pretty|query|boolean|false|If true, response will be in a human-readable format.|
|path|path|string|true|A backslash (/) delimited path to access values inside object and array documents. If the path points to an array, the server will attempt to convert the array index to an integer. If the path element cannot be converted to an integer, the server will respond with 404.|
|body|body|[webhookInputSchema](#schemawebhookinputschema)|true|The input document (in JSON format)|
|» **additionalProperties**|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "result": [
    {
      "ast": {
        "package": {
          "path": [
            {
              "type": "import",
              "value": "data.opa.example"
            }
          ]
        },
        "rules": [
          {
            "body": [
              {
                "index": 1,
                "terms": [
                  {
                    "type": "var",
                    "value": [
                      {
                        "type": "string",
                        "value": "string"
                      }
                    ]
                  }
                ]
              }
            ],
            "head": {
              "key": {
                "type": "var",
                "value": "$0"
              },
              "name": "violations"
            }
          }
        ]
      },
      "id": "example2",
      "raw": "package opa.examples\\n\\nimport data.servers\\n\\nviolations[server] {\\n\\tserver = servers[_]\\n\\tserver.protocols[_] = \\\"http\\\"\\n\\tpublic_servers[server]\\n}\\n"
    }
  ],
  "provenance": {
    "build_commit": "4c6e524",
    "build_hostname": "3bb58334a5a9",
    "build_timestamp": "string",
    "bundles": {
      "property1": null,
      "property2": null
    },
    "version": "string"
  },
  "metrics": {
    "counter_server_query_cache_hit": 0,
    "timer_query_compile_stage_build_comprehension_index_ns": 43000,
    "timer_query_compile_stage_check_safety_ns": 852000,
    "timer_query_compile_stage_check_types_ns": 577000,
    "timer_query_compile_stage_check_undefined_funcs_ns": 426000,
    "timer_query_compile_stage_check_unsafe_builtins_ns": 14000,
    "timer_query_compile_stage_resolve_refs_ns": 3000,
    "timer_query_compile_stage_rewrite_comprehension_terms_ns": 329000,
    "timer_query_compile_stage_rewrite_dynamic_terms_ns": 27000,
    "timer_query_compile_stage_rewrite_expr_terms_ns": 40000,
    "timer_query_compile_stage_rewrite_local_vars_ns": 187000,
    "timer_query_compile_stage_rewrite_to_capture_value_ns": 1178000,
    "timer_query_compile_stage_rewrite_with_values_ns": 23000,
    "timer_rego_input_parse_ns": 69994,
    "timer_rego_module_compile_ns": 69994,
    "timer_rego_module_parse_ns": 12345,
    "timer_rego_query_compile_ns": 4096,
    "timer_rego_query_eval_ns": 69994,
    "timer_rego_query_parse_ns": 4096,
    "timer_server_handler_ns": 631000,
    "timer_server_read_bytes_ns": 631000
  },
  "explanation": [
    {
      "locals": [
        {
          "key": {
            "type": "string",
            "value": "string"
          },
          "value": {
            "type": "string",
            "value": "string"
          }
        }
      ],
      "node": {
        "index": 0,
        "terms": [
          {
            "type": "var",
            "value": "$term1"
          }
        ]
      },
      "op": "enter",
      "parent_id": 0,
      "query_id": 0,
      "type": "expr"
    }
  ]
}
```

> 400 Response

```json
{
  "code": "invalid_parameter",
  "errors": [
    {
      "code": "rego_unsafe_var_error",
      "location": {
        "col": 1,
        "file": "example1",
        "row": 3
      },
      "message": "var x is unsafe"
    }
  ],
  "message": "error(s) occurred while compiling module(s)"
}
```

> 404 Response

```json
{
  "code": "resource_not_found",
  "message": "storage_not_found_error: policy id \\\"partial\\\""
}
```

> 500 Response

```json
{
  "code": "invalid_parameter",
  "errors": [
    {
      "code": "rego_unsafe_var_error",
      "location": {
        "col": 1,
        "file": "example1",
        "row": 3
      },
      "message": "var x is unsafe"
    }
  ],
  "message": "error(s) occurred while compiling module(s)"
}
```

<h3 id="get-a-document-with-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad request|[400](#schema400)|
|404|Not Found|Not found (for example, a requested policy module or document does not exist)|[404](#schema404)|
|500|Internal Server Error|Server error|[400](#schema400)|

<h3 id="get-a-document-with-webhook-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|[object]|false|none|none|
|» ast|object|false|none|The types for declarations and runtime objects passed to your implementation. This consists of an abstract syntax tree (AST) of policy modules, package and import declarations, rules, expressions, and terms.|
|» » package|object|false|none|none|
|» » » path|[object]|false|none|The path to the package|
|» » » » type|string|false|none|The type of the path operation|
|» » » » value|string|false|none|The path variable|
|» » rules|[object]|false|none|When OPA evaluates a rule, it generates the content of a [virtual documents](https://www.openpolicyagent.org/docs/latest/philosophy/#the-opa-document-model)|
|» » » body|[object]|false|none|A list of the terms in this rule|
|» » » » index|number|false|none|The location of this term in the list (starts at 0)|
|» » » » terms|[object]|false|none|The type/value pairing for this term|
|» » » » » type|string|false|none|The type of the term variable|
|» » » » » value|[object]|false|none|The list of types and values for the term variable|
|» » » » » » type|string|false|none|none|
|» » » » » » value|string|false|none|none|
|» » » head|object|false|none|none|
|» » » » key|object|false|none|The type/value pairing for this rule's head|
|» » » » » type|string|false|none|The type of the head|
|» » » » » value|string|false|none|The value of the head|
|» » » » name|string|false|none|The head of the rule|
|» id|string|false|none|The name of a policy module|
|» raw|string|false|none|A string representation of the full Rego policy|
|provenance|object|false|none|none|
|» build_commit|string|false|none|The Git commit id of this OPA build.|
|» build_hostname|string|false|none|The hostname where this instance was built.|
|» build_timestamp|string|false|none|When this OPA instance was built (in [ISO8601 format](https://www.w3.org/TR/NOTE-datetime))|
|» bundles|object|false|none|A set of key-value pairs describing each bundle activated on the server.|
|» » **additionalProperties**|object|false|none|none|
|» version|string|false|none|The version of this OPA instance|
|metrics|object|false|none|none|
|» counter_server_query_cache_hit|number|false|none|*Description is forthcoming*|
|» timer_query_compile_stage_build_comprehension_index_ns|number|false|none|(Only returned if `instrument` is true.) *Description is forthcoming*|
|» timer_query_compile_stage_check_safety_ns|number|false|none|(Only returned if `instrument` is true.) *Description is forthcoming*|
|» timer_query_compile_stage_check_types_ns|number|false|none|(Only returned if `instrument` is true.) *Description is forthcoming*|
|» timer_query_compile_stage_check_undefined_funcs_ns|number|false|none|(Only returned if `instrument` is true.) *Description is forthcoming*|
|» timer_query_compile_stage_check_unsafe_builtins_ns|number|false|none|(Only returned if `instrument` is true.) *Description is forthcoming*|
|» timer_query_compile_stage_resolve_refs_ns|number|false|none|(Only returned if `instrument` is true.) *Description is forthcoming*|
|» timer_query_compile_stage_rewrite_comprehension_terms_ns|number|false|none|(Only returned if `instrument` is true.) *Description is forthcoming*|
|» timer_query_compile_stage_rewrite_dynamic_terms_ns|number|false|none|(Only returned if `instrument` is true.) *Description is forthcoming*|
|» timer_query_compile_stage_rewrite_expr_terms_ns|number|false|none|(Only returned if `instrument` is true.) *Description is forthcoming*|
|» timer_query_compile_stage_rewrite_local_vars_ns|number|false|none|(Only returned if `instrument` is true.) *Description is forthcoming*|
|» timer_query_compile_stage_rewrite_to_capture_value_ns|number|false|none|(Only returned if `instrument` is true.) *Description is forthcoming*|
|» timer_query_compile_stage_rewrite_with_values_ns|number|false|none|(Only returned if `instrument` is true.) *Description is forthcoming*|
|» timer_rego_input_parse_ns|number|false|none|Time taken (in nanonseconds) to parse the input|
|» timer_rego_module_compile_ns|number|false|none|Time taken (in nanonseconds) to compile the loaded policy modules|
|» timer_rego_module_parse_ns|number|false|none|Time taken (in nanoseconds) to parse the input policy module|
|» timer_rego_query_compile_ns|number|false|none|Time taken (in nanoseconds) to compile the query|
|» timer_rego_query_eval_ns|number|false|none|Time taken (in nanonseconds) to evaluate the query|
|» timer_rego_query_parse_ns|number|false|none|Time taken (in nanoseconds) to parse the query|
|» timer_server_handler_ns|number|false|none|Time taken (in nanoseconds) to handle the API request|
|» timer_server_read_bytes_ns|number|false|none|*Description is forthcoming*|
|explanation|[object]|false|none|none|
|» locals|[object]|false|none|The query's term bindings at the point when the trace event was emitted.|
|» » key|object|false|none|none|
|» » » type|string|false|none|none|
|» » » value|string|false|none|none|
|» » value|object|false|none|none|
|» » » type|string|false|none|none|
|» » » value|string|false|none|none|
|» node|object|false|none|The AST element associated with the evaluation step.|
|» » index|number|false|none|Node number|
|» » terms|[object]|false|none|none|
|» » » type|string|false|none|none|
|» » » value|string|false|none|none|
|» op|string|false|none|The kind of *trace event*<br><br>Each trace event represents a step in the query evaluation process. Trace events are emitted at the following points:<br>- enter - before a body or rule is evaluated<br>- exit - after a body or rule has evaluated successfully<br>- eval - before an expression is evaluated<br>- fail - after an expression has evaluated to false.<br>- redo - before evaluation restarts from a body, rule, or expression.<br><br>By default, OPA searches for all sets of term bindings that make all expressions in the query evaluate to true. Because there may be multiple answers, the search can restart when OPA determines the query is true or false. When the search restarts, a *redo trace event* is emitted.|
|» parent_id|number|false|none|The parent query. Use this field to identify trace events from related queries.<br><br>For example, if query A references rule R, trace events emitted when evaluating rule R will have the *parent_id* field set to query A’s *query_id*.|
|» query_id|number|false|none|The query that the trace event was emitted for. Use this field to distinguish trace events emitted by from different queries.|
|» type|string|false|none|The type of the **node** field|

#### Enumerated Values

|Property|Value|
|---|---|
|» » » » type|import|
|» » » » type|package|
|» op|enter|
|» op|exit|
|» op|eval|
|» op|fail|
|» op|redo|
|» type|expr|
|» type|rule|
|» type|body|

<aside class="success">
This operation does not require authentication
</aside>

## Get a document

<a id="opIdgetDocument"></a>

> Code samples

```bash
curl https://example.com/v1/data/opa%2Fexamples%2Fpublic_servers \
  -H 'Accept: application/json'
```

`GET /v1/data/{path}`

This API endpoint returns the document specified by `path`.

The server will return a *bad request* (400) response if either:
- The query requires an input document and you do not provide it
- You provide the input document but the query has already defined it.

<h3 id="get-a-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|input|query|object|false|Provide the text for an [input document](https://www.openpolicyagent.org/docs/latest/kubernetes-primer/#input-document) in JSON format|
|pretty|query|boolean|false|If true, response will be in a human-readable format.|
|provenance|query|boolean|false|If true, response will include build and version information in addition to the result.|
|explain|query|string|false|If set to *full*, response will include query explanations in addition to the result.|
|metrics|query|boolean|false|If true, compiler performance metrics will be returned in the response.|
|instrument|query|boolean|false|If true, response will return additional performance metrics in addition to the result and the standard metrics.<br><br>**Caution:** This can add significant overhead to query evaluation. The recommendation is to only use this parameter if you are debugging a performance problem.|
|path|path|string|true|A backslash (/) delimited path to access values inside object and array documents. If the path points to an array, the server will attempt to convert the array index to an integer. If the path element cannot be converted to an integer, the server will respond with 404.|

> Example responses

> 200 Response

```json
{
  "result": [
    {
      "ast": {
        "package": {
          "path": [
            {
              "type": "import",
              "value": "data.opa.example"
            }
          ]
        },
        "rules": [
          {
            "body": [
              {
                "index": 1,
                "terms": [
                  {
                    "type": "var",
                    "value": [
                      {
                        "type": "string",
                        "value": "string"
                      }
                    ]
                  }
                ]
              }
            ],
            "head": {
              "key": {
                "type": "var",
                "value": "$0"
              },
              "name": "violations"
            }
          }
        ]
      },
      "id": "example2",
      "raw": "package opa.examples\\n\\nimport data.servers\\n\\nviolations[server] {\\n\\tserver = servers[_]\\n\\tserver.protocols[_] = \\\"http\\\"\\n\\tpublic_servers[server]\\n}\\n"
    }
  ],
  "provenance": {
    "build_commit": "4c6e524",
    "build_hostname": "3bb58334a5a9",
    "build_timestamp": "string",
    "bundles": {
      "property1": null,
      "property2": null
    },
    "version": "string"
  },
  "metrics": {
    "counter_server_query_cache_hit": 0,
    "timer_query_compile_stage_build_comprehension_index_ns": 43000,
    "timer_query_compile_stage_check_safety_ns": 852000,
    "timer_query_compile_stage_check_types_ns": 577000,
    "timer_query_compile_stage_check_undefined_funcs_ns": 426000,
    "timer_query_compile_stage_check_unsafe_builtins_ns": 14000,
    "timer_query_compile_stage_resolve_refs_ns": 3000,
    "timer_query_compile_stage_rewrite_comprehension_terms_ns": 329000,
    "timer_query_compile_stage_rewrite_dynamic_terms_ns": 27000,
    "timer_query_compile_stage_rewrite_expr_terms_ns": 40000,
    "timer_query_compile_stage_rewrite_local_vars_ns": 187000,
    "timer_query_compile_stage_rewrite_to_capture_value_ns": 1178000,
    "timer_query_compile_stage_rewrite_with_values_ns": 23000,
    "timer_rego_input_parse_ns": 69994,
    "timer_rego_module_compile_ns": 69994,
    "timer_rego_module_parse_ns": 12345,
    "timer_rego_query_compile_ns": 4096,
    "timer_rego_query_eval_ns": 69994,
    "timer_rego_query_parse_ns": 4096,
    "timer_server_handler_ns": 631000,
    "timer_server_read_bytes_ns": 631000
  },
  "explanation": [
    {
      "locals": [
        {
          "key": {
            "type": "string",
            "value": "string"
          },
          "value": {
            "type": "string",
            "value": "string"
          }
        }
      ],
      "node": {
        "index": 0,
        "terms": [
          {
            "type": "var",
            "value": "$term1"
          }
        ]
      },
      "op": "enter",
      "parent_id": 0,
      "query_id": 0,
      "type": "expr"
    }
  ]
}
```

> 400 Response

```json
{
  "code": "invalid_parameter",
  "errors": [
    {
      "code": "rego_unsafe_var_error",
      "location": {
        "col": 1,
        "file": "example1",
        "row": 3
      },
      "message": "var x is unsafe"
    }
  ],
  "message": "error(s) occurred while compiling module(s)"
}
```

> 500 Response

```json
{
  "code": "invalid_parameter",
  "errors": [
    {
      "code": "rego_unsafe_var_error",
      "location": {
        "col": 1,
        "file": "example1",
        "row": 3
      },
      "message": "var x is unsafe"
    }
  ],
  "message": "error(s) occurred while compiling module(s)"
}
```

<h3 id="get-a-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad request|[400](#schema400)|
|500|Internal Server Error|Server error|[400](#schema400)|

<h3 id="get-a-document-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|[object]|false|none|none|
|» ast|object|false|none|The types for declarations and runtime objects passed to your implementation. This consists of an abstract syntax tree (AST) of policy modules, package and import declarations, rules, expressions, and terms.|
|» » package|object|false|none|none|
|» » » path|[object]|false|none|The path to the package|
|» » » » type|string|false|none|The type of the path operation|
|» » » » value|string|false|none|The path variable|
|» » rules|[object]|false|none|When OPA evaluates a rule, it generates the content of a [virtual documents](https://www.openpolicyagent.org/docs/latest/philosophy/#the-opa-document-model)|
|» » » body|[object]|false|none|A list of the terms in this rule|
|» » » » index|number|false|none|The location of this term in the list (starts at 0)|
|» » » » terms|[object]|false|none|The type/value pairing for this term|
|» » » » » type|string|false|none|The type of the term variable|
|» » » » » value|[object]|false|none|The list of types and values for the term variable|
|» » » » » » type|string|false|none|none|
|» » » » » » value|string|false|none|none|
|» » » head|object|false|none|none|
|» » » » key|object|false|none|The type/value pairing for this rule's head|
|» » » » » type|string|false|none|The type of the head|
|» » » » » value|string|false|none|The value of the head|
|» » » » name|string|false|none|The head of the rule|
|» id|string|false|none|The name of a policy module|
|» raw|string|false|none|A string representation of the full Rego policy|
|provenance|object|false|none|none|
|» build_commit|string|false|none|The Git commit id of this OPA build.|
|» build_hostname|string|false|none|The hostname where this instance was built.|
|» build_timestamp|string|false|none|When this OPA instance was built (in [ISO8601 format](https://www.w3.org/TR/NOTE-datetime))|
|» bundles|object|false|none|A set of key-value pairs describing each bundle activated on the server.|
|» » **additionalProperties**|object|false|none|none|
|» version|string|false|none|The version of this OPA instance|
|metrics|object|false|none|none|
|» counter_server_query_cache_hit|number|false|none|*Description is forthcoming*|
|» timer_query_compile_stage_build_comprehension_index_ns|number|false|none|(Only returned if `instrument` is true.) *Description is forthcoming*|
|» timer_query_compile_stage_check_safety_ns|number|false|none|(Only returned if `instrument` is true.) *Description is forthcoming*|
|» timer_query_compile_stage_check_types_ns|number|false|none|(Only returned if `instrument` is true.) *Description is forthcoming*|
|» timer_query_compile_stage_check_undefined_funcs_ns|number|false|none|(Only returned if `instrument` is true.) *Description is forthcoming*|
|» timer_query_compile_stage_check_unsafe_builtins_ns|number|false|none|(Only returned if `instrument` is true.) *Description is forthcoming*|
|» timer_query_compile_stage_resolve_refs_ns|number|false|none|(Only returned if `instrument` is true.) *Description is forthcoming*|
|» timer_query_compile_stage_rewrite_comprehension_terms_ns|number|false|none|(Only returned if `instrument` is true.) *Description is forthcoming*|
|» timer_query_compile_stage_rewrite_dynamic_terms_ns|number|false|none|(Only returned if `instrument` is true.) *Description is forthcoming*|
|» timer_query_compile_stage_rewrite_expr_terms_ns|number|false|none|(Only returned if `instrument` is true.) *Description is forthcoming*|
|» timer_query_compile_stage_rewrite_local_vars_ns|number|false|none|(Only returned if `instrument` is true.) *Description is forthcoming*|
|» timer_query_compile_stage_rewrite_to_capture_value_ns|number|false|none|(Only returned if `instrument` is true.) *Description is forthcoming*|
|» timer_query_compile_stage_rewrite_with_values_ns|number|false|none|(Only returned if `instrument` is true.) *Description is forthcoming*|
|» timer_rego_input_parse_ns|number|false|none|Time taken (in nanonseconds) to parse the input|
|» timer_rego_module_compile_ns|number|false|none|Time taken (in nanonseconds) to compile the loaded policy modules|
|» timer_rego_module_parse_ns|number|false|none|Time taken (in nanoseconds) to parse the input policy module|
|» timer_rego_query_compile_ns|number|false|none|Time taken (in nanoseconds) to compile the query|
|» timer_rego_query_eval_ns|number|false|none|Time taken (in nanonseconds) to evaluate the query|
|» timer_rego_query_parse_ns|number|false|none|Time taken (in nanoseconds) to parse the query|
|» timer_server_handler_ns|number|false|none|Time taken (in nanoseconds) to handle the API request|
|» timer_server_read_bytes_ns|number|false|none|*Description is forthcoming*|
|explanation|[object]|false|none|none|
|» locals|[object]|false|none|The query's term bindings at the point when the trace event was emitted.|
|» » key|object|false|none|none|
|» » » type|string|false|none|none|
|» » » value|string|false|none|none|
|» » value|object|false|none|none|
|» » » type|string|false|none|none|
|» » » value|string|false|none|none|
|» node|object|false|none|The AST element associated with the evaluation step.|
|» » index|number|false|none|Node number|
|» » terms|[object]|false|none|none|
|» » » type|string|false|none|none|
|» » » value|string|false|none|none|
|» op|string|false|none|The kind of *trace event*<br><br>Each trace event represents a step in the query evaluation process. Trace events are emitted at the following points:<br>- enter - before a body or rule is evaluated<br>- exit - after a body or rule has evaluated successfully<br>- eval - before an expression is evaluated<br>- fail - after an expression has evaluated to false.<br>- redo - before evaluation restarts from a body, rule, or expression.<br><br>By default, OPA searches for all sets of term bindings that make all expressions in the query evaluate to true. Because there may be multiple answers, the search can restart when OPA determines the query is true or false. When the search restarts, a *redo trace event* is emitted.|
|» parent_id|number|false|none|The parent query. Use this field to identify trace events from related queries.<br><br>For example, if query A references rule R, trace events emitted when evaluating rule R will have the *parent_id* field set to query A’s *query_id*.|
|» query_id|number|false|none|The query that the trace event was emitted for. Use this field to distinguish trace events emitted by from different queries.|
|» type|string|false|none|The type of the **node** field|

#### Enumerated Values

|Property|Value|
|---|---|
|» » » » type|import|
|» » » » type|package|
|» op|enter|
|» op|exit|
|» op|eval|
|» op|fail|
|» op|redo|
|» type|expr|
|» type|rule|
|» type|body|

<aside class="success">
This operation does not require authentication
</aside>

## Create or overwrite a document

<a id="opIdputDocument"></a>

> Code samples

```bash
curl https://example.com/v1/data/opa%2Fexamples%2Fpublic_servers \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '"{\n  \"users\": {\n    \"user-id-1\": {\n      \"isAdmin\": true\n    }\n  }\n}"'
```

`PUT /v1/data/{path}`

If the path does not refer to an existing document (for example *us-west/servers*), the server will attempt to create all the necessary containing documents.

This behavior is similar to the Unix command [mkdir -p](https://en.wikipedia.org/wiki/Mkdir#Options).

> Body parameter

```json
"{\n  \"users\": {\n    \"user-id-1\": {\n      \"isAdmin\": true\n    }\n  }\n}"
```

<h3 id="create-or-overwrite-a-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|If-None-Match|header|string|false|The server will respect the If-None-Match header if it is set to * (in other words, it will not overwrite an existing document located at the specified `path`).|
|path|path|string|true|A backslash (/) delimited path to access values inside object and array documents. If the path points to an array, the server will attempt to convert the array index to an integer. If the path element cannot be converted to an integer, the server will respond with 404.|
|body|body|[dataSchema](#schemadataschema)|true|The JSON document to write to the specified path.|

> Example responses

> 400 Response

```json
{
  "code": "invalid_parameter",
  "errors": [
    {
      "code": "rego_unsafe_var_error",
      "location": {
        "col": 1,
        "file": "example1",
        "row": 3
      },
      "message": "var x is unsafe"
    }
  ],
  "message": "error(s) occurred while compiling module(s)"
}
```

> 404 Response

```json
{
  "code": "resource_not_found",
  "message": "storage_not_found_error: policy id \\\"partial\\\""
}
```

> 500 Response

```json
{
  "code": "invalid_parameter",
  "errors": [
    {
      "code": "rego_unsafe_var_error",
      "location": {
        "col": 1,
        "file": "example1",
        "row": 3
      },
      "message": "var x is unsafe"
    }
  ],
  "message": "error(s) occurred while compiling module(s)"
}
```

<h3 id="create-or-overwrite-a-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|304|Not Modified|Document was not modified|None|
|400|Bad Request|Bad request|[400](#schema400)|
|404|Not Found|Not found (for example, a requested policy module or document does not exist)|[404](#schema404)|
|500|Internal Server Error|Server error|[400](#schema400)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a document (with input)

<a id="opIdgetDocumentWithPath"></a>

> Code samples

```bash
curl https://example.com/v1/data/opa%2Fexamples%2Fpublic_servers \
  -X POST \
  -H 'Content-Type: application/x-yaml' \
  -H 'Accept: application/json' \
  -d '{
  "input": {
   "example": {
     "flag": true
     }
   }
 }'
```

`POST /v1/data/{path}`

The server will return a *bad request* (400) response if either:
- The query requires an input document and you do not provide it
- You provided an input document but the query has already defined it.

If `path` indexes into an array, the server will attempt to convert the array index to an integer. If the path element cannot be converted to an integer, a *not found* response (404) will be returned.

> Body parameter

```text
{
  "input": {
   "example": {
     "flag": true
     }
   }
 }
```

<h3 id="get-a-document-with-input-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pretty|query|boolean|false|If true, response will be in a human-readable format.|
|provenance|query|boolean|false|If true, response will include build and version information in addition to the result.|
|explain|query|string|false|If set to *full*, response will include query explanations in addition to the result.|
|metrics|query|boolean|false|If true, compiler performance metrics will be returned in the response.|
|instrument|query|boolean|false|If true, response will return additional performance metrics in addition to the result and the standard metrics.<br><br>**Caution:** This can add significant overhead to query evaluation. The recommendation is to only use this parameter if you are debugging a performance problem.|
|path|path|string|true|A backslash (/) delimited path to access values inside object and array documents. If the path points to an array, the server will attempt to convert the array index to an integer. If the path element cannot be converted to an integer, the server will respond with 404.|
|body|body|[inputSchema](#schemainputschema)|true|The input document (in JSON format)|
|» **additionalProperties**|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "result": [
    {
      "ast": {
        "package": {
          "path": [
            {
              "type": "import",
              "value": "data.opa.example"
            }
          ]
        },
        "rules": [
          {
            "body": [
              {
                "index": 1,
                "terms": [
                  {
                    "type": "var",
                    "value": [
                      {
                        "type": "string",
                        "value": "string"
                      }
                    ]
                  }
                ]
              }
            ],
            "head": {
              "key": {
                "type": "var",
                "value": "$0"
              },
              "name": "violations"
            }
          }
        ]
      },
      "id": "example2",
      "raw": "package opa.examples\\n\\nimport data.servers\\n\\nviolations[server] {\\n\\tserver = servers[_]\\n\\tserver.protocols[_] = \\\"http\\\"\\n\\tpublic_servers[server]\\n}\\n"
    }
  ],
  "provenance": {
    "build_commit": "4c6e524",
    "build_hostname": "3bb58334a5a9",
    "build_timestamp": "string",
    "bundles": {
      "property1": null,
      "property2": null
    },
    "version": "string"
  },
  "metrics": {
    "counter_server_query_cache_hit": 0,
    "timer_query_compile_stage_build_comprehension_index_ns": 43000,
    "timer_query_compile_stage_check_safety_ns": 852000,
    "timer_query_compile_stage_check_types_ns": 577000,
    "timer_query_compile_stage_check_undefined_funcs_ns": 426000,
    "timer_query_compile_stage_check_unsafe_builtins_ns": 14000,
    "timer_query_compile_stage_resolve_refs_ns": 3000,
    "timer_query_compile_stage_rewrite_comprehension_terms_ns": 329000,
    "timer_query_compile_stage_rewrite_dynamic_terms_ns": 27000,
    "timer_query_compile_stage_rewrite_expr_terms_ns": 40000,
    "timer_query_compile_stage_rewrite_local_vars_ns": 187000,
    "timer_query_compile_stage_rewrite_to_capture_value_ns": 1178000,
    "timer_query_compile_stage_rewrite_with_values_ns": 23000,
    "timer_rego_input_parse_ns": 69994,
    "timer_rego_module_compile_ns": 69994,
    "timer_rego_module_parse_ns": 12345,
    "timer_rego_query_compile_ns": 4096,
    "timer_rego_query_eval_ns": 69994,
    "timer_rego_query_parse_ns": 4096,
    "timer_server_handler_ns": 631000,
    "timer_server_read_bytes_ns": 631000
  },
  "explanation": [
    {
      "locals": [
        {
          "key": {
            "type": "string",
            "value": "string"
          },
          "value": {
            "type": "string",
            "value": "string"
          }
        }
      ],
      "node": {
        "index": 0,
        "terms": [
          {
            "type": "var",
            "value": "$term1"
          }
        ]
      },
      "op": "enter",
      "parent_id": 0,
      "query_id": 0,
      "type": "expr"
    }
  ]
}
```

> 400 Response

```json
{
  "code": "invalid_parameter",
  "errors": [
    {
      "code": "rego_unsafe_var_error",
      "location": {
        "col": 1,
        "file": "example1",
        "row": 3
      },
      "message": "var x is unsafe"
    }
  ],
  "message": "error(s) occurred while compiling module(s)"
}
```

> 500 Response

```json
{
  "code": "invalid_parameter",
  "errors": [
    {
      "code": "rego_unsafe_var_error",
      "location": {
        "col": 1,
        "file": "example1",
        "row": 3
      },
      "message": "var x is unsafe"
    }
  ],
  "message": "error(s) occurred while compiling module(s)"
}
```

<h3 id="get-a-document-with-input-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad request|[400](#schema400)|
|500|Internal Server Error|Server error|[400](#schema400)|

<h3 id="get-a-document-with-input-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|[object]|false|none|none|
|» ast|object|false|none|The types for declarations and runtime objects passed to your implementation. This consists of an abstract syntax tree (AST) of policy modules, package and import declarations, rules, expressions, and terms.|
|» » package|object|false|none|none|
|» » » path|[object]|false|none|The path to the package|
|» » » » type|string|false|none|The type of the path operation|
|» » » » value|string|false|none|The path variable|
|» » rules|[object]|false|none|When OPA evaluates a rule, it generates the content of a [virtual documents](https://www.openpolicyagent.org/docs/latest/philosophy/#the-opa-document-model)|
|» » » body|[object]|false|none|A list of the terms in this rule|
|» » » » index|number|false|none|The location of this term in the list (starts at 0)|
|» » » » terms|[object]|false|none|The type/value pairing for this term|
|» » » » » type|string|false|none|The type of the term variable|
|» » » » » value|[object]|false|none|The list of types and values for the term variable|
|» » » » » » type|string|false|none|none|
|» » » » » » value|string|false|none|none|
|» » » head|object|false|none|none|
|» » » » key|object|false|none|The type/value pairing for this rule's head|
|» » » » » type|string|false|none|The type of the head|
|» » » » » value|string|false|none|The value of the head|
|» » » » name|string|false|none|The head of the rule|
|» id|string|false|none|The name of a policy module|
|» raw|string|false|none|A string representation of the full Rego policy|
|provenance|object|false|none|none|
|» build_commit|string|false|none|The Git commit id of this OPA build.|
|» build_hostname|string|false|none|The hostname where this instance was built.|
|» build_timestamp|string|false|none|When this OPA instance was built (in [ISO8601 format](https://www.w3.org/TR/NOTE-datetime))|
|» bundles|object|false|none|A set of key-value pairs describing each bundle activated on the server.|
|» » **additionalProperties**|object|false|none|none|
|» version|string|false|none|The version of this OPA instance|
|metrics|object|false|none|none|
|» counter_server_query_cache_hit|number|false|none|*Description is forthcoming*|
|» timer_query_compile_stage_build_comprehension_index_ns|number|false|none|(Only returned if `instrument` is true.) *Description is forthcoming*|
|» timer_query_compile_stage_check_safety_ns|number|false|none|(Only returned if `instrument` is true.) *Description is forthcoming*|
|» timer_query_compile_stage_check_types_ns|number|false|none|(Only returned if `instrument` is true.) *Description is forthcoming*|
|» timer_query_compile_stage_check_undefined_funcs_ns|number|false|none|(Only returned if `instrument` is true.) *Description is forthcoming*|
|» timer_query_compile_stage_check_unsafe_builtins_ns|number|false|none|(Only returned if `instrument` is true.) *Description is forthcoming*|
|» timer_query_compile_stage_resolve_refs_ns|number|false|none|(Only returned if `instrument` is true.) *Description is forthcoming*|
|» timer_query_compile_stage_rewrite_comprehension_terms_ns|number|false|none|(Only returned if `instrument` is true.) *Description is forthcoming*|
|» timer_query_compile_stage_rewrite_dynamic_terms_ns|number|false|none|(Only returned if `instrument` is true.) *Description is forthcoming*|
|» timer_query_compile_stage_rewrite_expr_terms_ns|number|false|none|(Only returned if `instrument` is true.) *Description is forthcoming*|
|» timer_query_compile_stage_rewrite_local_vars_ns|number|false|none|(Only returned if `instrument` is true.) *Description is forthcoming*|
|» timer_query_compile_stage_rewrite_to_capture_value_ns|number|false|none|(Only returned if `instrument` is true.) *Description is forthcoming*|
|» timer_query_compile_stage_rewrite_with_values_ns|number|false|none|(Only returned if `instrument` is true.) *Description is forthcoming*|
|» timer_rego_input_parse_ns|number|false|none|Time taken (in nanonseconds) to parse the input|
|» timer_rego_module_compile_ns|number|false|none|Time taken (in nanonseconds) to compile the loaded policy modules|
|» timer_rego_module_parse_ns|number|false|none|Time taken (in nanoseconds) to parse the input policy module|
|» timer_rego_query_compile_ns|number|false|none|Time taken (in nanoseconds) to compile the query|
|» timer_rego_query_eval_ns|number|false|none|Time taken (in nanonseconds) to evaluate the query|
|» timer_rego_query_parse_ns|number|false|none|Time taken (in nanoseconds) to parse the query|
|» timer_server_handler_ns|number|false|none|Time taken (in nanoseconds) to handle the API request|
|» timer_server_read_bytes_ns|number|false|none|*Description is forthcoming*|
|explanation|[object]|false|none|none|
|» locals|[object]|false|none|The query's term bindings at the point when the trace event was emitted.|
|» » key|object|false|none|none|
|» » » type|string|false|none|none|
|» » » value|string|false|none|none|
|» » value|object|false|none|none|
|» » » type|string|false|none|none|
|» » » value|string|false|none|none|
|» node|object|false|none|The AST element associated with the evaluation step.|
|» » index|number|false|none|Node number|
|» » terms|[object]|false|none|none|
|» » » type|string|false|none|none|
|» » » value|string|false|none|none|
|» op|string|false|none|The kind of *trace event*<br><br>Each trace event represents a step in the query evaluation process. Trace events are emitted at the following points:<br>- enter - before a body or rule is evaluated<br>- exit - after a body or rule has evaluated successfully<br>- eval - before an expression is evaluated<br>- fail - after an expression has evaluated to false.<br>- redo - before evaluation restarts from a body, rule, or expression.<br><br>By default, OPA searches for all sets of term bindings that make all expressions in the query evaluate to true. Because there may be multiple answers, the search can restart when OPA determines the query is true or false. When the search restarts, a *redo trace event* is emitted.|
|» parent_id|number|false|none|The parent query. Use this field to identify trace events from related queries.<br><br>For example, if query A references rule R, trace events emitted when evaluating rule R will have the *parent_id* field set to query A’s *query_id*.|
|» query_id|number|false|none|The query that the trace event was emitted for. Use this field to distinguish trace events emitted by from different queries.|
|» type|string|false|none|The type of the **node** field|

#### Enumerated Values

|Property|Value|
|---|---|
|» » » » type|import|
|» » » » type|package|
|» op|enter|
|» op|exit|
|» op|eval|
|» op|fail|
|» op|redo|
|» type|expr|
|» type|rule|
|» type|body|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a document

<a id="opIddeleteDocument"></a>

> Code samples

```bash
curl https://example.com/v1/data/opa%2Fexamples%2Fpublic_servers \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /v1/data/{path}`

This API endpoint deletes an existing document from the server

<h3 id="delete-a-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|path|path|string|true|A backslash (/) delimited path to access values inside object and array documents. If the path points to an array, the server will attempt to convert the array index to an integer. If the path element cannot be converted to an integer, the server will respond with 404.|

> Example responses

> 404 Response

```json
{
  "code": "resource_not_found",
  "message": "storage_not_found_error: policy id \\\"partial\\\""
}
```

> 500 Response

```json
{
  "code": "invalid_parameter",
  "errors": [
    {
      "code": "rego_unsafe_var_error",
      "location": {
        "col": 1,
        "file": "example1",
        "row": 3
      },
      "message": "var x is unsafe"
    }
  ],
  "message": "error(s) occurred while compiling module(s)"
}
```

<h3 id="delete-a-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|404|Not Found|Not found (for example, a requested policy module or document does not exist)|[404](#schema404)|
|500|Internal Server Error|Server error|[400](#schema400)|

<aside class="success">
This operation does not require authentication
</aside>

## Update a document

<a id="opIdpatchDocument"></a>

> Code samples

```bash
curl https://example.com/v1/data/opa%2Fexamples%2Fpublic_servers \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '[
    {
      "op": "add",
      "path": "-",
      "value": "{\n  \"id\": \"s5\",\n  \"name\": \"job\",\n  \"protocols\": [\"amqp\"],\n  \"ports\": [\"p3\"]\n}"
    }
  ]'
```

`PATCH /v1/data/{path}`

This API endpoint updates an existing document on the server by describing the changes required (using [JSON patch operations](http://jsonpatch.com/))

> Body parameter

```json
[
  {
    "op": "add",
    "path": "-",
    "value": "{\n  \"id\": \"s5\",\n  \"name\": \"job\",\n  \"protocols\": [\"amqp\"],\n  \"ports\": [\"p3\"]\n}"
  }
]
```

<h3 id="update-a-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|path|path|string|true|A backslash (/) delimited path to access values inside object and array documents. If the path points to an array, the server will attempt to convert the array index to an integer. If the path element cannot be converted to an integer, the server will respond with 404.|
|body|body|[patchesSchema](#schemapatchesschema)|true|The list of JSON patch operations.|
|» op|body|string|true|JSON patch operation type|
|» path|body|string|true|A [JSON pointer](https://tools.ietf.org/html/rfc6901) to a location within the target document where the operation is performed.<br><br>The *effective path* is this value prefixed with the API call's `path` parameter.<br><br>The server will return a *bad request* (404) response if:<br><br>- The *parent* of the effective path does not refer to an existing document<br>- For **remove** and **replace** operations, the effective path does not refer to an existing document.|
|» value|body|object|false|The value to add, replace or test.|
|» » **additionalProperties**|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» op|add|
|» op|remove|
|» op|replace|
|» op|move|
|» op|copy|
|» op|test|

> Example responses

> 400 Response

```json
{
  "code": "invalid_parameter",
  "errors": [
    {
      "code": "rego_unsafe_var_error",
      "location": {
        "col": 1,
        "file": "example1",
        "row": 3
      },
      "message": "var x is unsafe"
    }
  ],
  "message": "error(s) occurred while compiling module(s)"
}
```

> 404 Response

```json
{
  "code": "resource_not_found",
  "message": "storage_not_found_error: policy id \\\"partial\\\""
}
```

> 500 Response

```json
{
  "code": "invalid_parameter",
  "errors": [
    {
      "code": "rego_unsafe_var_error",
      "location": {
        "col": 1,
        "file": "example1",
        "row": 3
      },
      "message": "var x is unsafe"
    }
  ],
  "message": "error(s) occurred while compiling module(s)"
}
```

<h3 id="update-a-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Success|None|
|400|Bad Request|Bad request|[400](#schema400)|
|404|Not Found|Not found (for example, a requested policy module or document does not exist)|[404](#schema404)|
|500|Internal Server Error|Server error|[400](#schema400)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="open-policy-agent-opa-rest-api-query-api">Query API</h1>

Posting queries to OPA

## Execute a simple query

<a id="opIdpostSimpleQuery"></a>

> Code samples

```bash
curl https://example.com/ \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '"{\n  \"user\": [\"alice\"]\n}"'
```

`POST /`

This API queries the document at */data/system/main* by default (however, you can [configure OPA](https://www.openpolicyagent.org/docs/latest/configuration/) to use a different path to serve these queries). That document defines the response.
For example, use the following in `PUT /v1/policies/{path}`) to define a rule that will produce a value for the */data/system/main* document:

  ```yaml
  package system
  main = msg {
    msg := sprintf("hello, %v", input.user)
  }
  ```

The server will return a *not found* (404) response if */data/system/main* is undefined.

> Body parameter

```json
"{\n  \"user\": [\"alice\"]\n}"
```

<h3 id="execute-a-simple-query-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pretty|query|boolean|false|If true, response will be in a human-readable format.|
|body|body|[queryInputSchema](#schemaqueryinputschema)|true|The text of the input document (in JSON format)|
|» **additionalProperties**|body|object|false|none|

> Example responses

> 400 Response

```json
{
  "code": "invalid_parameter",
  "errors": [
    {
      "code": "rego_unsafe_var_error",
      "location": {
        "col": 1,
        "file": "example1",
        "row": 3
      },
      "message": "var x is unsafe"
    }
  ],
  "message": "error(s) occurred while compiling module(s)"
}
```

> 404 Response

```json
{
  "code": "resource_not_found",
  "message": "storage_not_found_error: policy id \\\"partial\\\""
}
```

> 500 Response

```json
{
  "code": "invalid_parameter",
  "errors": [
    {
      "code": "rego_unsafe_var_error",
      "location": {
        "col": 1,
        "file": "example1",
        "row": 3
      },
      "message": "var x is unsafe"
    }
  ],
  "message": "error(s) occurred while compiling module(s)"
}
```

<h3 id="execute-a-simple-query-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Bad request|[400](#schema400)|
|404|Not Found|Not found (for example, a requested policy module or document does not exist)|[404](#schema404)|
|500|Internal Server Error|Server error|[400](#schema400)|

<aside class="success">
This operation does not require authentication
</aside>

## Execute an ad-hoc query (simple)

<a id="opIdgetQuery"></a>

> Code samples

```bash
curl 'https://example.com/v1/query?q=%7B%22query%22%3A%20%22data.servers%5Bi%5D.ports%5B_%5D%20%3D%20%5C%22p2%5C%22%3B%20data.servers%5Bi%5D.name%20%3D%20name%22%7D' \
  -H 'Accept: application/json'
```

`GET /v1/query`

This API endpoint returns bindings for the variables in the query.

For more complex JSON queries, use `POST /v1/query` instead.

<h3 id="execute-an-ad-hoc-query-simple-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|q|query|string|true|The [URL-encoded](https://www.w3schools.com/tags/ref_urlencode.ASP) ad-hoc query to execute.|
|pretty|query|boolean|false|If true, response will be in a human-readable format.|
|explain|query|string|false|If set to *full*, response will include query explanations in addition to the result.|
|metrics|query|boolean|false|If true, compiler performance metrics will be returned in the response.|

> Example responses

> 200 Response

```json
{
  "result": [
    {
      "ast": {
        "package": {
          "path": [
            {
              "type": "import",
              "value": "data.opa.example"
            }
          ]
        },
        "rules": [
          {
            "body": [
              {
                "index": 1,
                "terms": [
                  {
                    "type": "var",
                    "value": [
                      {
                        "type": "string",
                        "value": "string"
                      }
                    ]
                  }
                ]
              }
            ],
            "head": {
              "key": {
                "type": "var",
                "value": "$0"
              },
              "name": "violations"
            }
          }
        ]
      },
      "id": "example2",
      "raw": "package opa.examples\\n\\nimport data.servers\\n\\nviolations[server] {\\n\\tserver = servers[_]\\n\\tserver.protocols[_] = \\\"http\\\"\\n\\tpublic_servers[server]\\n}\\n"
    }
  ],
  "metrics": {
    "counter_server_query_cache_hit": 0,
    "timer_query_compile_stage_build_comprehension_index_ns": 43000,
    "timer_query_compile_stage_check_safety_ns": 852000,
    "timer_query_compile_stage_check_types_ns": 577000,
    "timer_query_compile_stage_check_undefined_funcs_ns": 426000,
    "timer_query_compile_stage_check_unsafe_builtins_ns": 14000,
    "timer_query_compile_stage_resolve_refs_ns": 3000,
    "timer_query_compile_stage_rewrite_comprehension_terms_ns": 329000,
    "timer_query_compile_stage_rewrite_dynamic_terms_ns": 27000,
    "timer_query_compile_stage_rewrite_expr_terms_ns": 40000,
    "timer_query_compile_stage_rewrite_local_vars_ns": 187000,
    "timer_query_compile_stage_rewrite_to_capture_value_ns": 1178000,
    "timer_query_compile_stage_rewrite_with_values_ns": 23000,
    "timer_rego_input_parse_ns": 69994,
    "timer_rego_module_compile_ns": 69994,
    "timer_rego_module_parse_ns": 12345,
    "timer_rego_query_compile_ns": 4096,
    "timer_rego_query_eval_ns": 69994,
    "timer_rego_query_parse_ns": 4096,
    "timer_server_handler_ns": 631000,
    "timer_server_read_bytes_ns": 631000
  },
  "explanation": [
    {
      "locals": [
        {
          "key": {
            "type": "string",
            "value": "string"
          },
          "value": {
            "type": "string",
            "value": "string"
          }
        }
      ],
      "node": {
        "index": 0,
        "terms": [
          {
            "type": "var",
            "value": "$term1"
          }
        ]
      },
      "op": "enter",
      "parent_id": 0,
      "query_id": 0,
      "type": "expr"
    }
  ]
}
```

> 400 Response

```json
{
  "code": "invalid_parameter",
  "errors": [
    {
      "code": "rego_unsafe_var_error",
      "location": {
        "col": 1,
        "file": "example1",
        "row": 3
      },
      "message": "var x is unsafe"
    }
  ],
  "message": "error(s) occurred while compiling module(s)"
}
```

> 500 Response

```json
{
  "code": "invalid_parameter",
  "errors": [
    {
      "code": "rego_unsafe_var_error",
      "location": {
        "col": 1,
        "file": "example1",
        "row": 3
      },
      "message": "var x is unsafe"
    }
  ],
  "message": "error(s) occurred while compiling module(s)"
}
```

<h3 id="execute-an-ad-hoc-query-simple-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad request|[400](#schema400)|
|500|Internal Server Error|Server error|[400](#schema400)|

<h3 id="execute-an-ad-hoc-query-simple-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|[object]|false|none|none|
|» ast|object|false|none|The types for declarations and runtime objects passed to your implementation. This consists of an abstract syntax tree (AST) of policy modules, package and import declarations, rules, expressions, and terms.|
|» » package|object|false|none|none|
|» » » path|[object]|false|none|The path to the package|
|» » » » type|string|false|none|The type of the path operation|
|» » » » value|string|false|none|The path variable|
|» » rules|[object]|false|none|When OPA evaluates a rule, it generates the content of a [virtual documents](https://www.openpolicyagent.org/docs/latest/philosophy/#the-opa-document-model)|
|» » » body|[object]|false|none|A list of the terms in this rule|
|» » » » index|number|false|none|The location of this term in the list (starts at 0)|
|» » » » terms|[object]|false|none|The type/value pairing for this term|
|» » » » » type|string|false|none|The type of the term variable|
|» » » » » value|[object]|false|none|The list of types and values for the term variable|
|» » » » » » type|string|false|none|none|
|» » » » » » value|string|false|none|none|
|» » » head|object|false|none|none|
|» » » » key|object|false|none|The type/value pairing for this rule's head|
|» » » » » type|string|false|none|The type of the head|
|» » » » » value|string|false|none|The value of the head|
|» » » » name|string|false|none|The head of the rule|
|» id|string|false|none|The name of a policy module|
|» raw|string|false|none|A string representation of the full Rego policy|
|metrics|object|false|none|none|
|» counter_server_query_cache_hit|number|false|none|*Description is forthcoming*|
|» timer_query_compile_stage_build_comprehension_index_ns|number|false|none|(Only returned if `instrument` is true.) *Description is forthcoming*|
|» timer_query_compile_stage_check_safety_ns|number|false|none|(Only returned if `instrument` is true.) *Description is forthcoming*|
|» timer_query_compile_stage_check_types_ns|number|false|none|(Only returned if `instrument` is true.) *Description is forthcoming*|
|» timer_query_compile_stage_check_undefined_funcs_ns|number|false|none|(Only returned if `instrument` is true.) *Description is forthcoming*|
|» timer_query_compile_stage_check_unsafe_builtins_ns|number|false|none|(Only returned if `instrument` is true.) *Description is forthcoming*|
|» timer_query_compile_stage_resolve_refs_ns|number|false|none|(Only returned if `instrument` is true.) *Description is forthcoming*|
|» timer_query_compile_stage_rewrite_comprehension_terms_ns|number|false|none|(Only returned if `instrument` is true.) *Description is forthcoming*|
|» timer_query_compile_stage_rewrite_dynamic_terms_ns|number|false|none|(Only returned if `instrument` is true.) *Description is forthcoming*|
|» timer_query_compile_stage_rewrite_expr_terms_ns|number|false|none|(Only returned if `instrument` is true.) *Description is forthcoming*|
|» timer_query_compile_stage_rewrite_local_vars_ns|number|false|none|(Only returned if `instrument` is true.) *Description is forthcoming*|
|» timer_query_compile_stage_rewrite_to_capture_value_ns|number|false|none|(Only returned if `instrument` is true.) *Description is forthcoming*|
|» timer_query_compile_stage_rewrite_with_values_ns|number|false|none|(Only returned if `instrument` is true.) *Description is forthcoming*|
|» timer_rego_input_parse_ns|number|false|none|Time taken (in nanonseconds) to parse the input|
|» timer_rego_module_compile_ns|number|false|none|Time taken (in nanonseconds) to compile the loaded policy modules|
|» timer_rego_module_parse_ns|number|false|none|Time taken (in nanoseconds) to parse the input policy module|
|» timer_rego_query_compile_ns|number|false|none|Time taken (in nanoseconds) to compile the query|
|» timer_rego_query_eval_ns|number|false|none|Time taken (in nanonseconds) to evaluate the query|
|» timer_rego_query_parse_ns|number|false|none|Time taken (in nanoseconds) to parse the query|
|» timer_server_handler_ns|number|false|none|Time taken (in nanoseconds) to handle the API request|
|» timer_server_read_bytes_ns|number|false|none|*Description is forthcoming*|
|explanation|[object]|false|none|none|
|» locals|[object]|false|none|The query's term bindings at the point when the trace event was emitted.|
|» » key|object|false|none|none|
|» » » type|string|false|none|none|
|» » » value|string|false|none|none|
|» » value|object|false|none|none|
|» » » type|string|false|none|none|
|» » » value|string|false|none|none|
|» node|object|false|none|The AST element associated with the evaluation step.|
|» » index|number|false|none|Node number|
|» » terms|[object]|false|none|none|
|» » » type|string|false|none|none|
|» » » value|string|false|none|none|
|» op|string|false|none|The kind of *trace event*<br><br>Each trace event represents a step in the query evaluation process. Trace events are emitted at the following points:<br>- enter - before a body or rule is evaluated<br>- exit - after a body or rule has evaluated successfully<br>- eval - before an expression is evaluated<br>- fail - after an expression has evaluated to false.<br>- redo - before evaluation restarts from a body, rule, or expression.<br><br>By default, OPA searches for all sets of term bindings that make all expressions in the query evaluate to true. Because there may be multiple answers, the search can restart when OPA determines the query is true or false. When the search restarts, a *redo trace event* is emitted.|
|» parent_id|number|false|none|The parent query. Use this field to identify trace events from related queries.<br><br>For example, if query A references rule R, trace events emitted when evaluating rule R will have the *parent_id* field set to query A’s *query_id*.|
|» query_id|number|false|none|The query that the trace event was emitted for. Use this field to distinguish trace events emitted by from different queries.|
|» type|string|false|none|The type of the **node** field|

#### Enumerated Values

|Property|Value|
|---|---|
|» » » » type|import|
|» » » » type|package|
|» op|enter|
|» op|exit|
|» op|eval|
|» op|fail|
|» op|redo|
|» type|expr|
|» type|rule|
|» type|body|

<aside class="success">
This operation does not require authentication
</aside>

## Execute an ad-hoc query (complex)

<a id="opIdpostQuery"></a>

> Code samples

```bash
curl https://example.com/v1/query \
  -X POST \
  -H 'Content-Type: application/x-yaml' \
  -H 'Accept: application/json' \
  -d '{
  "query": "data.servers[i].ports[_] = \"p2\"; data.servers[i].name = name"
}'
```

`POST /v1/query`

This API endpoint returns bindings for the variables in the query.

For simpler JSON queries, you may use `GET /v1/query` instead.

> Body parameter

```text
{
  "query": "data.servers[i].ports[_] = \"p2\"; data.servers[i].name = name"
}
```

<h3 id="execute-an-ad-hoc-query-complex-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pretty|query|boolean|false|If true, response will be in a human-readable format.|
|explain|query|string|false|If set to *full*, response will include query explanations in addition to the result.|
|metrics|query|boolean|false|If true, compiler performance metrics will be returned in the response.|
|body|body|[qSchema](#schemaqschema)|true|The test of the query (in JSON format)|
|» **additionalProperties**|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "result": [
    {
      "ast": {
        "package": {
          "path": [
            {
              "type": "import",
              "value": "data.opa.example"
            }
          ]
        },
        "rules": [
          {
            "body": [
              {
                "index": 1,
                "terms": [
                  {
                    "type": "var",
                    "value": [
                      {
                        "type": "string",
                        "value": "string"
                      }
                    ]
                  }
                ]
              }
            ],
            "head": {
              "key": {
                "type": "var",
                "value": "$0"
              },
              "name": "violations"
            }
          }
        ]
      },
      "id": "example2",
      "raw": "package opa.examples\\n\\nimport data.servers\\n\\nviolations[server] {\\n\\tserver = servers[_]\\n\\tserver.protocols[_] = \\\"http\\\"\\n\\tpublic_servers[server]\\n}\\n"
    }
  ],
  "metrics": {
    "counter_server_query_cache_hit": 0,
    "timer_query_compile_stage_build_comprehension_index_ns": 43000,
    "timer_query_compile_stage_check_safety_ns": 852000,
    "timer_query_compile_stage_check_types_ns": 577000,
    "timer_query_compile_stage_check_undefined_funcs_ns": 426000,
    "timer_query_compile_stage_check_unsafe_builtins_ns": 14000,
    "timer_query_compile_stage_resolve_refs_ns": 3000,
    "timer_query_compile_stage_rewrite_comprehension_terms_ns": 329000,
    "timer_query_compile_stage_rewrite_dynamic_terms_ns": 27000,
    "timer_query_compile_stage_rewrite_expr_terms_ns": 40000,
    "timer_query_compile_stage_rewrite_local_vars_ns": 187000,
    "timer_query_compile_stage_rewrite_to_capture_value_ns": 1178000,
    "timer_query_compile_stage_rewrite_with_values_ns": 23000,
    "timer_rego_input_parse_ns": 69994,
    "timer_rego_module_compile_ns": 69994,
    "timer_rego_module_parse_ns": 12345,
    "timer_rego_query_compile_ns": 4096,
    "timer_rego_query_eval_ns": 69994,
    "timer_rego_query_parse_ns": 4096,
    "timer_server_handler_ns": 631000,
    "timer_server_read_bytes_ns": 631000
  },
  "explanation": [
    {
      "locals": [
        {
          "key": {
            "type": "string",
            "value": "string"
          },
          "value": {
            "type": "string",
            "value": "string"
          }
        }
      ],
      "node": {
        "index": 0,
        "terms": [
          {
            "type": "var",
            "value": "$term1"
          }
        ]
      },
      "op": "enter",
      "parent_id": 0,
      "query_id": 0,
      "type": "expr"
    }
  ]
}
```

> 400 Response

```json
{
  "code": "invalid_parameter",
  "errors": [
    {
      "code": "rego_unsafe_var_error",
      "location": {
        "col": 1,
        "file": "example1",
        "row": 3
      },
      "message": "var x is unsafe"
    }
  ],
  "message": "error(s) occurred while compiling module(s)"
}
```

> 500 Response

```json
{
  "code": "invalid_parameter",
  "errors": [
    {
      "code": "rego_unsafe_var_error",
      "location": {
        "col": 1,
        "file": "example1",
        "row": 3
      },
      "message": "var x is unsafe"
    }
  ],
  "message": "error(s) occurred while compiling module(s)"
}
```

<h3 id="execute-an-ad-hoc-query-complex-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad request|[400](#schema400)|
|500|Internal Server Error|Server error|[400](#schema400)|
|501|Not Implemented|Streaming not implemented|None|

<h3 id="execute-an-ad-hoc-query-complex-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|[object]|false|none|none|
|» ast|object|false|none|The types for declarations and runtime objects passed to your implementation. This consists of an abstract syntax tree (AST) of policy modules, package and import declarations, rules, expressions, and terms.|
|» » package|object|false|none|none|
|» » » path|[object]|false|none|The path to the package|
|» » » » type|string|false|none|The type of the path operation|
|» » » » value|string|false|none|The path variable|
|» » rules|[object]|false|none|When OPA evaluates a rule, it generates the content of a [virtual documents](https://www.openpolicyagent.org/docs/latest/philosophy/#the-opa-document-model)|
|» » » body|[object]|false|none|A list of the terms in this rule|
|» » » » index|number|false|none|The location of this term in the list (starts at 0)|
|» » » » terms|[object]|false|none|The type/value pairing for this term|
|» » » » » type|string|false|none|The type of the term variable|
|» » » » » value|[object]|false|none|The list of types and values for the term variable|
|» » » » » » type|string|false|none|none|
|» » » » » » value|string|false|none|none|
|» » » head|object|false|none|none|
|» » » » key|object|false|none|The type/value pairing for this rule's head|
|» » » » » type|string|false|none|The type of the head|
|» » » » » value|string|false|none|The value of the head|
|» » » » name|string|false|none|The head of the rule|
|» id|string|false|none|The name of a policy module|
|» raw|string|false|none|A string representation of the full Rego policy|
|metrics|object|false|none|none|
|» counter_server_query_cache_hit|number|false|none|*Description is forthcoming*|
|» timer_query_compile_stage_build_comprehension_index_ns|number|false|none|(Only returned if `instrument` is true.) *Description is forthcoming*|
|» timer_query_compile_stage_check_safety_ns|number|false|none|(Only returned if `instrument` is true.) *Description is forthcoming*|
|» timer_query_compile_stage_check_types_ns|number|false|none|(Only returned if `instrument` is true.) *Description is forthcoming*|
|» timer_query_compile_stage_check_undefined_funcs_ns|number|false|none|(Only returned if `instrument` is true.) *Description is forthcoming*|
|» timer_query_compile_stage_check_unsafe_builtins_ns|number|false|none|(Only returned if `instrument` is true.) *Description is forthcoming*|
|» timer_query_compile_stage_resolve_refs_ns|number|false|none|(Only returned if `instrument` is true.) *Description is forthcoming*|
|» timer_query_compile_stage_rewrite_comprehension_terms_ns|number|false|none|(Only returned if `instrument` is true.) *Description is forthcoming*|
|» timer_query_compile_stage_rewrite_dynamic_terms_ns|number|false|none|(Only returned if `instrument` is true.) *Description is forthcoming*|
|» timer_query_compile_stage_rewrite_expr_terms_ns|number|false|none|(Only returned if `instrument` is true.) *Description is forthcoming*|
|» timer_query_compile_stage_rewrite_local_vars_ns|number|false|none|(Only returned if `instrument` is true.) *Description is forthcoming*|
|» timer_query_compile_stage_rewrite_to_capture_value_ns|number|false|none|(Only returned if `instrument` is true.) *Description is forthcoming*|
|» timer_query_compile_stage_rewrite_with_values_ns|number|false|none|(Only returned if `instrument` is true.) *Description is forthcoming*|
|» timer_rego_input_parse_ns|number|false|none|Time taken (in nanonseconds) to parse the input|
|» timer_rego_module_compile_ns|number|false|none|Time taken (in nanonseconds) to compile the loaded policy modules|
|» timer_rego_module_parse_ns|number|false|none|Time taken (in nanoseconds) to parse the input policy module|
|» timer_rego_query_compile_ns|number|false|none|Time taken (in nanoseconds) to compile the query|
|» timer_rego_query_eval_ns|number|false|none|Time taken (in nanonseconds) to evaluate the query|
|» timer_rego_query_parse_ns|number|false|none|Time taken (in nanoseconds) to parse the query|
|» timer_server_handler_ns|number|false|none|Time taken (in nanoseconds) to handle the API request|
|» timer_server_read_bytes_ns|number|false|none|*Description is forthcoming*|
|explanation|[object]|false|none|none|
|» locals|[object]|false|none|The query's term bindings at the point when the trace event was emitted.|
|» » key|object|false|none|none|
|» » » type|string|false|none|none|
|» » » value|string|false|none|none|
|» » value|object|false|none|none|
|» » » type|string|false|none|none|
|» » » value|string|false|none|none|
|» node|object|false|none|The AST element associated with the evaluation step.|
|» » index|number|false|none|Node number|
|» » terms|[object]|false|none|none|
|» » » type|string|false|none|none|
|» » » value|string|false|none|none|
|» op|string|false|none|The kind of *trace event*<br><br>Each trace event represents a step in the query evaluation process. Trace events are emitted at the following points:<br>- enter - before a body or rule is evaluated<br>- exit - after a body or rule has evaluated successfully<br>- eval - before an expression is evaluated<br>- fail - after an expression has evaluated to false.<br>- redo - before evaluation restarts from a body, rule, or expression.<br><br>By default, OPA searches for all sets of term bindings that make all expressions in the query evaluate to true. Because there may be multiple answers, the search can restart when OPA determines the query is true or false. When the search restarts, a *redo trace event* is emitted.|
|» parent_id|number|false|none|The parent query. Use this field to identify trace events from related queries.<br><br>For example, if query A references rule R, trace events emitted when evaluating rule R will have the *parent_id* field set to query A’s *query_id*.|
|» query_id|number|false|none|The query that the trace event was emitted for. Use this field to distinguish trace events emitted by from different queries.|
|» type|string|false|none|The type of the **node** field|

#### Enumerated Values

|Property|Value|
|---|---|
|» » » » type|import|
|» » » » type|package|
|» op|enter|
|» op|exit|
|» op|eval|
|» op|fail|
|» op|redo|
|» type|expr|
|» type|rule|
|» type|body|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="open-policy-agent-opa-rest-api-compile-api">Compile API</h1>

Posting partial queries to OPA

## Compile

<a id="opIdpostCompile"></a>

> Code samples

```bash
curl https://example.com/v1/compile \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '"{\n  \"query\": \"data.example.allow == true\",\n  \"input\": {\n    \"subject\": {\n      \"clearance_level\": 4\n    }\n  },\n  \"unknowns\": [\n    \"data.reports\"\n    ]\n}"'
```

`POST /v1/compile`

This API endpoint allows you to partially evaluate Rego queries and obtain a simplified version of the policy. The example below assumes that OPA has been given the following policy (use `PUT /v1/policies/{path}`):

```yaml
package example
allow {
  input.subject.clearance_level >= data.reports[_].clearance_level
}
```
Compile API **request body** so that it contain the following fields:

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `query` | `string` | Yes | The query to partially evaluate and compile. |
| `input` | `any` | No | The input document to use during partial evaluation (default: undefined). |
| `unknowns` | `array[string]` | No | The terms to treat as unknown during partial evaluation (default: `["input"]`]). |

For example:

```json
{
  "query": "data.example.allow == true",
  "input": {
    "subject": {
      "clearance_level": 4
    }
  },
  "unknowns": [
    "data.reports"
    ]
}
```
### Partial evaluation
In some cases, the result of partial valuation is a conclusive, unconditional answer. See [the guidance](https://www.openpolicyagent.org/docs/latest/rest-api/#unconditional-results-from-partial-evaluation) for details.

<a href="https://blog.openpolicyagent.org/partial-evaluation-162750eaf422">Partial evaluation article</a>

> Body parameter

```json
"{\n  \"query\": \"data.example.allow == true\",\n  \"input\": {\n    \"subject\": {\n      \"clearance_level\": 4\n    }\n  },\n  \"unknowns\": [\n    \"data.reports\"\n    ]\n}"
```

<h3 id="compile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pretty|query|boolean|false|If true, response will be in a human-readable format.|
|explain|query|string|false|If set to *full*, response will include query explanations in addition to the result.|
|metrics|query|boolean|false|If true, compiler performance metrics will be returned in the response.|
|instrument|query|boolean|false|If true, response will return additional performance metrics in addition to the result and the standard metrics.<br><br>**Caution:** This can add significant overhead to query evaluation. The recommendation is to only use this parameter if you are debugging a performance problem.|
|body|body|[partialQuerySchema](#schemapartialqueryschema)|false|The query (in JSON format)|
|» **additionalProperties**|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "result": [
    {
      "ast": {
        "package": {
          "path": [
            {
              "type": "import",
              "value": "data.opa.example"
            }
          ]
        },
        "rules": [
          {
            "body": [
              {
                "index": 1,
                "terms": [
                  {
                    "type": "var",
                    "value": [
                      {
                        "type": "string",
                        "value": "string"
                      }
                    ]
                  }
                ]
              }
            ],
            "head": {
              "key": {
                "type": "var",
                "value": "$0"
              },
              "name": "violations"
            }
          }
        ]
      },
      "id": "example2",
      "raw": "package opa.examples\\n\\nimport data.servers\\n\\nviolations[server] {\\n\\tserver = servers[_]\\n\\tserver.protocols[_] = \\\"http\\\"\\n\\tpublic_servers[server]\\n}\\n"
    }
  ],
  "metrics": {
    "counter_server_query_cache_hit": 0,
    "timer_query_compile_stage_build_comprehension_index_ns": 43000,
    "timer_query_compile_stage_check_safety_ns": 852000,
    "timer_query_compile_stage_check_types_ns": 577000,
    "timer_query_compile_stage_check_undefined_funcs_ns": 426000,
    "timer_query_compile_stage_check_unsafe_builtins_ns": 14000,
    "timer_query_compile_stage_resolve_refs_ns": 3000,
    "timer_query_compile_stage_rewrite_comprehension_terms_ns": 329000,
    "timer_query_compile_stage_rewrite_dynamic_terms_ns": 27000,
    "timer_query_compile_stage_rewrite_expr_terms_ns": 40000,
    "timer_query_compile_stage_rewrite_local_vars_ns": 187000,
    "timer_query_compile_stage_rewrite_to_capture_value_ns": 1178000,
    "timer_query_compile_stage_rewrite_with_values_ns": 23000,
    "timer_rego_input_parse_ns": 69994,
    "timer_rego_module_compile_ns": 69994,
    "timer_rego_module_parse_ns": 12345,
    "timer_rego_query_compile_ns": 4096,
    "timer_rego_query_eval_ns": 69994,
    "timer_rego_query_parse_ns": 4096,
    "timer_server_handler_ns": 631000,
    "timer_server_read_bytes_ns": 631000
  },
  "explanation": [
    {
      "locals": [
        {
          "key": {
            "type": "string",
            "value": "string"
          },
          "value": {
            "type": "string",
            "value": "string"
          }
        }
      ],
      "node": {
        "index": 0,
        "terms": [
          {
            "type": "var",
            "value": "$term1"
          }
        ]
      },
      "op": "enter",
      "parent_id": 0,
      "query_id": 0,
      "type": "expr"
    }
  ]
}
```

> 400 Response

```json
{
  "code": "invalid_parameter",
  "errors": [
    {
      "code": "rego_unsafe_var_error",
      "location": {
        "col": 1,
        "file": "example1",
        "row": 3
      },
      "message": "var x is unsafe"
    }
  ],
  "message": "error(s) occurred while compiling module(s)"
}
```

> 500 Response

```json
{
  "code": "invalid_parameter",
  "errors": [
    {
      "code": "rego_unsafe_var_error",
      "location": {
        "col": 1,
        "file": "example1",
        "row": 3
      },
      "message": "var x is unsafe"
    }
  ],
  "message": "error(s) occurred while compiling module(s)"
}
```

<h3 id="compile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|400|Bad Request|Bad request|[400](#schema400)|
|500|Internal Server Error|Server error|[400](#schema400)|

<h3 id="compile-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|[object]|false|none|none|
|» ast|object|false|none|The types for declarations and runtime objects passed to your implementation. This consists of an abstract syntax tree (AST) of policy modules, package and import declarations, rules, expressions, and terms.|
|» » package|object|false|none|none|
|» » » path|[object]|false|none|The path to the package|
|» » » » type|string|false|none|The type of the path operation|
|» » » » value|string|false|none|The path variable|
|» » rules|[object]|false|none|When OPA evaluates a rule, it generates the content of a [virtual documents](https://www.openpolicyagent.org/docs/latest/philosophy/#the-opa-document-model)|
|» » » body|[object]|false|none|A list of the terms in this rule|
|» » » » index|number|false|none|The location of this term in the list (starts at 0)|
|» » » » terms|[object]|false|none|The type/value pairing for this term|
|» » » » » type|string|false|none|The type of the term variable|
|» » » » » value|[object]|false|none|The list of types and values for the term variable|
|» » » » » » type|string|false|none|none|
|» » » » » » value|string|false|none|none|
|» » » head|object|false|none|none|
|» » » » key|object|false|none|The type/value pairing for this rule's head|
|» » » » » type|string|false|none|The type of the head|
|» » » » » value|string|false|none|The value of the head|
|» » » » name|string|false|none|The head of the rule|
|» id|string|false|none|The name of a policy module|
|» raw|string|false|none|A string representation of the full Rego policy|
|metrics|object|false|none|none|
|» counter_server_query_cache_hit|number|false|none|*Description is forthcoming*|
|» timer_query_compile_stage_build_comprehension_index_ns|number|false|none|(Only returned if `instrument` is true.) *Description is forthcoming*|
|» timer_query_compile_stage_check_safety_ns|number|false|none|(Only returned if `instrument` is true.) *Description is forthcoming*|
|» timer_query_compile_stage_check_types_ns|number|false|none|(Only returned if `instrument` is true.) *Description is forthcoming*|
|» timer_query_compile_stage_check_undefined_funcs_ns|number|false|none|(Only returned if `instrument` is true.) *Description is forthcoming*|
|» timer_query_compile_stage_check_unsafe_builtins_ns|number|false|none|(Only returned if `instrument` is true.) *Description is forthcoming*|
|» timer_query_compile_stage_resolve_refs_ns|number|false|none|(Only returned if `instrument` is true.) *Description is forthcoming*|
|» timer_query_compile_stage_rewrite_comprehension_terms_ns|number|false|none|(Only returned if `instrument` is true.) *Description is forthcoming*|
|» timer_query_compile_stage_rewrite_dynamic_terms_ns|number|false|none|(Only returned if `instrument` is true.) *Description is forthcoming*|
|» timer_query_compile_stage_rewrite_expr_terms_ns|number|false|none|(Only returned if `instrument` is true.) *Description is forthcoming*|
|» timer_query_compile_stage_rewrite_local_vars_ns|number|false|none|(Only returned if `instrument` is true.) *Description is forthcoming*|
|» timer_query_compile_stage_rewrite_to_capture_value_ns|number|false|none|(Only returned if `instrument` is true.) *Description is forthcoming*|
|» timer_query_compile_stage_rewrite_with_values_ns|number|false|none|(Only returned if `instrument` is true.) *Description is forthcoming*|
|» timer_rego_input_parse_ns|number|false|none|Time taken (in nanonseconds) to parse the input|
|» timer_rego_module_compile_ns|number|false|none|Time taken (in nanonseconds) to compile the loaded policy modules|
|» timer_rego_module_parse_ns|number|false|none|Time taken (in nanoseconds) to parse the input policy module|
|» timer_rego_query_compile_ns|number|false|none|Time taken (in nanoseconds) to compile the query|
|» timer_rego_query_eval_ns|number|false|none|Time taken (in nanonseconds) to evaluate the query|
|» timer_rego_query_parse_ns|number|false|none|Time taken (in nanoseconds) to parse the query|
|» timer_server_handler_ns|number|false|none|Time taken (in nanoseconds) to handle the API request|
|» timer_server_read_bytes_ns|number|false|none|*Description is forthcoming*|
|explanation|[object]|false|none|none|
|» locals|[object]|false|none|The query's term bindings at the point when the trace event was emitted.|
|» » key|object|false|none|none|
|» » » type|string|false|none|none|
|» » » value|string|false|none|none|
|» » value|object|false|none|none|
|» » » type|string|false|none|none|
|» » » value|string|false|none|none|
|» node|object|false|none|The AST element associated with the evaluation step.|
|» » index|number|false|none|Node number|
|» » terms|[object]|false|none|none|
|» » » type|string|false|none|none|
|» » » value|string|false|none|none|
|» op|string|false|none|The kind of *trace event*<br><br>Each trace event represents a step in the query evaluation process. Trace events are emitted at the following points:<br>- enter - before a body or rule is evaluated<br>- exit - after a body or rule has evaluated successfully<br>- eval - before an expression is evaluated<br>- fail - after an expression has evaluated to false.<br>- redo - before evaluation restarts from a body, rule, or expression.<br><br>By default, OPA searches for all sets of term bindings that make all expressions in the query evaluate to true. Because there may be multiple answers, the search can restart when OPA determines the query is true or false. When the search restarts, a *redo trace event* is emitted.|
|» parent_id|number|false|none|The parent query. Use this field to identify trace events from related queries.<br><br>For example, if query A references rule R, trace events emitted when evaluating rule R will have the *parent_id* field set to query A’s *query_id*.|
|» query_id|number|false|none|The query that the trace event was emitted for. Use this field to distinguish trace events emitted by from different queries.|
|» type|string|false|none|The type of the **node** field|

#### Enumerated Values

|Property|Value|
|---|---|
|» » » » type|import|
|» » » » type|package|
|» op|enter|
|» op|exit|
|» op|eval|
|» op|fail|
|» op|redo|
|» type|expr|
|» type|rule|
|» type|body|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="open-policy-agent-opa-rest-api-health-api">Health API</h1>

Executes a simple built-in policy query to verify that the server is operational

## Health

<a id="opIdgetHealth"></a>

> Code samples

```bash
curl https://example.com/health
```

`GET /health`

This API endpoint verifies that the server is operational.

The response from the server is either 200 or 500:
- **200** - OPA service is healthy. If `bundles` is true, then all configured bundles have been activated. If `plugins` is true, then all plugins are in an 'OK' state.
- **500** - OPA service is *not* healthy. If `bundles` is true, at least one of configured bundles has not yet been activated. If `plugins` is true, at least one plugins is in a 'not OK' state.

---
**Note**
This check is only for initial bundle activation. Subsequent downloads will not affect the health check.

Use the **status** endpoint (in the (management API)[management.html]) for more fine-grained bundle status monitoring.

---

<a href="https://www.openpolicyagent.org/docs/latest/management/#bundles">Bundles</a>

<h3 id="health-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|bundles|query|boolean|false|Reports on bundle activation status (useful for 'ready' checks at startup).<br><br>This includes any discovery bundles or bundles defined in the loaded discovery configuration.|
|plugins|query|boolean|false|Reports on plugin status|

<h3 id="health-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OPA service is healthy|None|
|500|Internal Server Error|OPA service is not healthy|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="open-policy-agent-opa-rest-api-config-api">Config API</h1>

## Get configurations

<a id="opIdgetConfig"></a>

> Code samples

```bash
curl https://example.com/v1/config \
  -H 'Accept: application/json'
```

`GET /v1/config`

This API endpoint responds with active configuration (result response)

---
**Note**
The `credentials` field in the `services` configuration and

The `private_key` and `key` fields in the `keys` configuration will be omitted from the API response

---

<h3 id="get-configurations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pretty|query|boolean|false|If true, response will be in a human-readable format.|

> Example responses

> 200 Response

```json
{
  "result": {
    "bundles": {
      "authz": {
        "service": "acmecorp"
      }
    },
    "decision_logs": {
      "service": "acmecorp"
    },
    "default_authorization_decision": "/system/authz/allow",
    "default_decision": "/system/main",
    "keys": {
      "global-key": {
        "scope": "read"
      }
    },
    "labels": {
      "id": "test-id",
      "version": "0.27.0"
    },
    "services": {
      "acmecorp": {
        "url": "https://example.com/control-plane-api/v1"
      }
    },
    "status": {
      "service": "acmecorp"
    }
  }
}
```

> 500 Response

```json
{
  "code": "invalid_parameter",
  "errors": [
    {
      "code": "rego_unsafe_var_error",
      "location": {
        "col": 1,
        "file": "example1",
        "row": 3
      },
      "message": "var x is unsafe"
    }
  ],
  "message": "error(s) occurred while compiling module(s)"
}
```

<h3 id="get-configurations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[200SingleResult](#schema200singleresult)|
|500|Internal Server Error|Server error|[400](#schema400)|

<aside class="success">
This operation does not require authentication
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
  "code": "invalid_parameter",
  "errors": [
    {
      "code": "rego_unsafe_var_error",
      "location": {
        "col": 1,
        "file": "example1",
        "row": 3
      },
      "message": "var x is unsafe"
    }
  ],
  "message": "error(s) occurred while compiling module(s)"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|true|none|The error code name|
|errors|[object]|false|none|Errors that may have been generated during the parse, compile, or installation of a policy module|
|message|string|true|none|The description of the error|

<h2 id="tocS_404">404</h2>
<!-- backwards compatibility -->
<a id="schema404"></a>
<a id="schema_404"></a>
<a id="tocS404"></a>
<a id="tocs404"></a>

```json
{
  "code": "resource_not_found",
  "message": "storage_not_found_error: policy id \\\"partial\\\""
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|true|none|The error code name|
|message|string|true|none|The description of the error (including the name of any undefined policy module)|

<h2 id="tocS_200Explanations">200Explanations</h2>
<!-- backwards compatibility -->
<a id="schema200explanations"></a>
<a id="schema_200Explanations"></a>
<a id="tocS200explanations"></a>
<a id="tocs200explanations"></a>

```json
{
  "explanation": [
    {
      "locals": [
        {
          "key": {
            "type": "string",
            "value": "string"
          },
          "value": {
            "type": "string",
            "value": "string"
          }
        }
      ],
      "node": {
        "index": 0,
        "terms": [
          {
            "type": "var",
            "value": "$term1"
          }
        ]
      },
      "op": "enter",
      "parent_id": 0,
      "query_id": 0,
      "type": "expr"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|explanation|[object]|false|none|none|

<h2 id="tocS_200Metrics">200Metrics</h2>
<!-- backwards compatibility -->
<a id="schema200metrics"></a>
<a id="schema_200Metrics"></a>
<a id="tocS200metrics"></a>
<a id="tocs200metrics"></a>

```json
{
  "metrics": {
    "counter_server_query_cache_hit": 0,
    "timer_query_compile_stage_build_comprehension_index_ns": 43000,
    "timer_query_compile_stage_check_safety_ns": 852000,
    "timer_query_compile_stage_check_types_ns": 577000,
    "timer_query_compile_stage_check_undefined_funcs_ns": 426000,
    "timer_query_compile_stage_check_unsafe_builtins_ns": 14000,
    "timer_query_compile_stage_resolve_refs_ns": 3000,
    "timer_query_compile_stage_rewrite_comprehension_terms_ns": 329000,
    "timer_query_compile_stage_rewrite_dynamic_terms_ns": 27000,
    "timer_query_compile_stage_rewrite_expr_terms_ns": 40000,
    "timer_query_compile_stage_rewrite_local_vars_ns": 187000,
    "timer_query_compile_stage_rewrite_to_capture_value_ns": 1178000,
    "timer_query_compile_stage_rewrite_with_values_ns": 23000,
    "timer_rego_input_parse_ns": 69994,
    "timer_rego_module_compile_ns": 69994,
    "timer_rego_module_parse_ns": 12345,
    "timer_rego_query_compile_ns": 4096,
    "timer_rego_query_eval_ns": 69994,
    "timer_rego_query_parse_ns": 4096,
    "timer_server_handler_ns": 631000,
    "timer_server_read_bytes_ns": 631000
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metrics|object|false|none|none|

<h2 id="tocS_200Provenance">200Provenance</h2>
<!-- backwards compatibility -->
<a id="schema200provenance"></a>
<a id="schema_200Provenance"></a>
<a id="tocS200provenance"></a>
<a id="tocs200provenance"></a>

```json
{
  "provenance": {
    "build_commit": "4c6e524",
    "build_hostname": "3bb58334a5a9",
    "build_timestamp": "string",
    "bundles": {
      "property1": null,
      "property2": null
    },
    "version": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|provenance|object|false|none|none|

<h2 id="tocS_200Result">200Result</h2>
<!-- backwards compatibility -->
<a id="schema200result"></a>
<a id="schema_200Result"></a>
<a id="tocS200result"></a>
<a id="tocs200result"></a>

```json
{
  "result": [
    {
      "ast": {
        "package": {
          "path": [
            {
              "type": "import",
              "value": "data.opa.example"
            }
          ]
        },
        "rules": [
          {
            "body": [
              {
                "index": 1,
                "terms": [
                  {
                    "type": "var",
                    "value": [
                      {
                        "type": "string",
                        "value": "string"
                      }
                    ]
                  }
                ]
              }
            ],
            "head": {
              "key": {
                "type": "var",
                "value": "$0"
              },
              "name": "violations"
            }
          }
        ]
      },
      "id": "example2",
      "raw": "package opa.examples\\n\\nimport data.servers\\n\\nviolations[server] {\\n\\tserver = servers[_]\\n\\tserver.protocols[_] = \\\"http\\\"\\n\\tpublic_servers[server]\\n}\\n"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|[object]|false|none|none|

<h2 id="tocS_200SingleResult">200SingleResult</h2>
<!-- backwards compatibility -->
<a id="schema200singleresult"></a>
<a id="schema_200SingleResult"></a>
<a id="tocS200singleresult"></a>
<a id="tocs200singleresult"></a>

```json
{
  "result": {
    "bundles": {
      "authz": {
        "service": "acmecorp"
      }
    },
    "decision_logs": {
      "service": "acmecorp"
    },
    "default_authorization_decision": "/system/authz/allow",
    "default_decision": "/system/main",
    "keys": {
      "global-key": {
        "scope": "read"
      }
    },
    "labels": {
      "id": "test-id",
      "version": "0.27.0"
    },
    "services": {
      "acmecorp": {
        "url": "https://example.com/control-plane-api/v1"
      }
    },
    "status": {
      "service": "acmecorp"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|result|object|false|none|none|

<h2 id="tocS_dataSchema">dataSchema</h2>
<!-- backwards compatibility -->
<a id="schemadataschema"></a>
<a id="schema_dataSchema"></a>
<a id="tocSdataschema"></a>
<a id="tocsdataschema"></a>

```json
"{\n  \"users\": {\n    \"user-id-1\": {\n      \"isAdmin\": true\n    }\n  }\n}"
```

<h2 id="tocS_inputSchema">inputSchema</h2>
<!-- backwards compatibility -->
<a id="schemainputschema"></a>
<a id="schema_inputSchema"></a>
<a id="tocSinputschema"></a>
<a id="tocsinputschema"></a>

```json
"{\n  \"input\": {\n   \"example\": {\n     \"flag\": true\n     }\n   }\n }"
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

<h2 id="tocS_partialQuerySchema">partialQuerySchema</h2>
<!-- backwards compatibility -->
<a id="schemapartialqueryschema"></a>
<a id="schema_partialQuerySchema"></a>
<a id="tocSpartialqueryschema"></a>
<a id="tocspartialqueryschema"></a>

```json
"{\n  \"query\": \"data.example.allow == true\",\n  \"input\": {\n    \"subject\": {\n      \"clearance_level\": 4\n    }\n  },\n  \"unknowns\": [\n    \"data.reports\"\n    ]\n}"
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

<h2 id="tocS_patchesSchema">patchesSchema</h2>
<!-- backwards compatibility -->
<a id="schemapatchesschema"></a>
<a id="schema_patchesSchema"></a>
<a id="tocSpatchesschema"></a>
<a id="tocspatchesschema"></a>

```json
[
  {
    "op": "add",
    "path": "-",
    "value": "{\n  \"id\": \"s5\",\n  \"name\": \"job\",\n  \"protocols\": [\"amqp\"],\n  \"ports\": [\"p3\"]\n}"
  }
]
```

A list of one or more [JSON patch operations](http://jsonpatch.com/)

<h2 id="tocS_qSchema">qSchema</h2>
<!-- backwards compatibility -->
<a id="schemaqschema"></a>
<a id="schema_qSchema"></a>
<a id="tocSqschema"></a>
<a id="tocsqschema"></a>

```json
"{\n  \"query\": \"data.servers[i].ports[_] = \\\"p2\\\"; data.servers[i].name = name\"\n}"
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

<h2 id="tocS_queryInputSchema">queryInputSchema</h2>
<!-- backwards compatibility -->
<a id="schemaqueryinputschema"></a>
<a id="schema_queryInputSchema"></a>
<a id="tocSqueryinputschema"></a>
<a id="tocsqueryinputschema"></a>

```json
"{\n  \"user\": [\"alice\"]\n}"
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

<h2 id="tocS_webhookInputSchema">webhookInputSchema</h2>
<!-- backwards compatibility -->
<a id="schemawebhookinputschema"></a>
<a id="schema_webhookInputSchema"></a>
<a id="tocSwebhookinputschema"></a>
<a id="tocswebhookinputschema"></a>

```json
"{\n  \"example\": {\n    \"flag\": true\n    }\n }"
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|
