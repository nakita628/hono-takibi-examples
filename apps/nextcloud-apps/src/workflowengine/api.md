<h1 id="workflowengine-full">workflowengine-full v0.0.1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Nextcloud workflow engine

License: agpl

# Authentication

- HTTP Authentication, scheme: basic

- HTTP Authentication, scheme: bearer

<h1 id="workflowengine-full-globalworkflows">global_workflows</h1>

## Retrieve all configured workflow rules

<a id="opIdglobal_workflows-index"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/workflowengine/api/v1/workflows/global \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/apps/workflowengine/api/v1/workflows/global`

This endpoint requires admin access

<h3 id="retrieve-all-configured-workflow-rules-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": {
      "property1": [
        {
          "id": 0,
          "class": "string",
          "name": "string",
          "checks": [
            {
              "class": "string",
              "value": "string",
              "operator": "is"
            }
          ],
          "operation": "string",
          "entity": "string",
          "events": [
            "string"
          ]
        }
      ],
      "property2": [
        {
          "id": 0,
          "class": "string",
          "name": "string",
          "checks": [
            {
              "class": "string",
              "value": "string",
              "operator": "is"
            }
          ],
          "operation": "string",
          "entity": "string",
          "events": [
            "string"
          ]
        }
      ]
    }
  }
}
```

> 401 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

> 403 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="retrieve-all-configured-workflow-rules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of workflows returned|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|403|Forbidden|Logged in account must be an admin|Inline|

<h3 id="retrieve-all-configured-workflow-rules-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » **additionalProperties**|[[Rule](#schemarule)]|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Create a workflow

<a id="opIdglobal_workflows-create"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/workflowengine/api/v1/workflows/global \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true' \
  -d '{
    "class": "string",
    "name": "string",
    "checks": [
      {
        "class": "string",
        "value": "string",
        "operator": "is"
      }
    ],
    "operation": "string",
    "entity": "string",
    "events": [
      "string"
    ]
  }'
```

`POST /ocs/v2.php/apps/workflowengine/api/v1/workflows/global`

This endpoint requires admin access
This endpoint requires password confirmation

> Body parameter

```json
{
  "class": "string",
  "name": "string",
  "checks": [
    {
      "class": "string",
      "value": "string",
      "operator": "is"
    }
  ],
  "operation": "string",
  "entity": "string",
  "events": [
    "string"
  ]
}
```

<h3 id="create-a-workflow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|
|body|body|object|true|none|
|» class|body|string|true|Operation class to execute|
|» name|body|string|true|Name of the workflow rule|
|» checks|body|[[Check](#schemacheck)]|true|List of conditions that need to apply for the rule to match|
|» operation|body|string|true|Operation class to execute on match|
|» entity|body|string|true|The matched entity|
|» events|body|[string]|true|The list of events on which the rule should be validated|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": {
      "id": 0,
      "class": "string",
      "name": "string",
      "checks": [
        {
          "class": "string",
          "value": "string",
          "operator": "is"
        }
      ],
      "operation": "string",
      "entity": "string",
      "events": [
        "string"
      ]
    }
  }
}
```

> 400 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

> 401 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

> 403 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="create-a-workflow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Workflow created|Inline|
|400|Bad Request|Thrown when a check or check value is invalid|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|403|Forbidden|Logged in account must be an admin|Inline|

<h3 id="create-a-workflow-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|[Rule](#schemarule)|true|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Retrieve a specific workflow

<a id="opIdglobal_workflows-show"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/workflowengine/api/v1/workflows/global/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/apps/workflowengine/api/v1/workflows/global/{id}`

This endpoint requires admin access

<h3 id="retrieve-a-specific-workflow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Workflow ID to load|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": {
      "id": 0,
      "class": "string",
      "name": "string",
      "checks": [
        {
          "class": "string",
          "value": "string",
          "operator": "is"
        }
      ],
      "operation": "string",
      "entity": "string",
      "events": [
        "string"
      ]
    }
  }
}
```

> 401 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

> 403 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="retrieve-a-specific-workflow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Workflow returned or empty array if the ID is unknown in the scope|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|403|Forbidden|Logged in account must be an admin|Inline|

<h3 id="retrieve-a-specific-workflow-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|[Rule](#schemarule) \| array|true|none|none|
|» » *anyOf*|[Rule](#schemarule)|false|none|none|
|» » *anyOf*|array|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Modify a workflow

<a id="opIdglobal_workflows-update"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/workflowengine/api/v1/workflows/global/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true' \
  -d '{
    "name": "string",
    "checks": [
      {
        "class": "string",
        "value": "string",
        "operator": "is"
      }
    ],
    "operation": "string",
    "entity": "string",
    "events": [
      "string"
    ]
  }'
```

`PUT /ocs/v2.php/apps/workflowengine/api/v1/workflows/global/{id}`

This endpoint requires admin access
This endpoint requires password confirmation

> Body parameter

```json
{
  "name": "string",
  "checks": [
    {
      "class": "string",
      "value": "string",
      "operator": "is"
    }
  ],
  "operation": "string",
  "entity": "string",
  "events": [
    "string"
  ]
}
```

<h3 id="modify-a-workflow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Workflow ID to delete|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|
|body|body|object|true|none|
|» name|body|string|true|Name of the workflow rule|
|» checks|body|[[Check](#schemacheck)]|true|List of conditions that need to apply for the rule to match|
|» operation|body|string|true|Operation action to execute on match|
|» entity|body|string|true|The matched entity|
|» events|body|[string]|true|The list of events on which the rule should be validated|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": {
      "id": 0,
      "class": "string",
      "name": "string",
      "checks": [
        {
          "class": "string",
          "value": "string",
          "operator": "is"
        }
      ],
      "operation": "string",
      "entity": "string",
      "events": [
        "string"
      ]
    }
  }
}
```

> 400 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

> 401 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

> 403 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="modify-a-workflow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Workflow updated|Inline|
|400|Bad Request|Thrown when a check or check value is invalid|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|403|Forbidden|Thrown when workflow is from a different scope|Inline|

<h3 id="modify-a-workflow-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|[Rule](#schemarule)|true|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|object|false|none|none|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|*anyOf*|object|false|none|none|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Delete a workflow

<a id="opIdglobal_workflows-destroy"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/workflowengine/api/v1/workflows/global/0 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`DELETE /ocs/v2.php/apps/workflowengine/api/v1/workflows/global/{id}`

This endpoint requires admin access
This endpoint requires password confirmation

<h3 id="delete-a-workflow-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Workflow ID to delete|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": true
  }
}
```

> 401 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

> 403 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="delete-a-workflow-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Workflow deleted|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|403|Forbidden|Thrown when workflow is from a different scope|Inline|

<h3 id="delete-a-workflow-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|boolean|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|object|false|none|none|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|*anyOf*|object|false|none|none|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

<h1 id="workflowengine-full-userworkflows">user_workflows</h1>

## Retrieve all configured workflow rules

<a id="opIduser_workflows-index"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/workflowengine/api/v1/workflows/user \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/apps/workflowengine/api/v1/workflows/user`

<h3 id="retrieve-all-configured-workflow-rules-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": {
      "property1": [
        {
          "id": 0,
          "class": "string",
          "name": "string",
          "checks": [
            {
              "class": "string",
              "value": "string",
              "operator": "is"
            }
          ],
          "operation": "string",
          "entity": "string",
          "events": [
            "string"
          ]
        }
      ],
      "property2": [
        {
          "id": 0,
          "class": "string",
          "name": "string",
          "checks": [
            {
              "class": "string",
              "value": "string",
              "operator": "is"
            }
          ],
          "operation": "string",
          "entity": "string",
          "events": [
            "string"
          ]
        }
      ]
    }
  }
}
```

> 401 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="retrieve-all-configured-workflow-rules-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of workflows returned|Inline|
|401|Unauthorized|Current user is not logged in|Inline|

<h3 id="retrieve-all-configured-workflow-rules-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » **additionalProperties**|[[Rule](#schemarule)]|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Create a workflow

<a id="opIduser_workflows-create"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/workflowengine/api/v1/workflows/user \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true' \
  -d '{
    "class": "string",
    "name": "string",
    "checks": [
      {
        "class": "string",
        "value": "string",
        "operator": "is"
      }
    ],
    "operation": "string",
    "entity": "string",
    "events": [
      "string"
    ]
  }'
```

`POST /ocs/v2.php/apps/workflowengine/api/v1/workflows/user`

This endpoint requires password confirmation

> Body parameter

```json
{
  "class": "string",
  "name": "string",
  "checks": [
    {
      "class": "string",
      "value": "string",
      "operator": "is"
    }
  ],
  "operation": "string",
  "entity": "string",
  "events": [
    "string"
  ]
}
```

<h3 id="create-a-workflow-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|
|body|body|object|true|none|
|» class|body|string|true|Operation class to execute|
|» name|body|string|true|Name of the workflow rule|
|» checks|body|[[Check](#schemacheck)]|true|List of conditions that need to apply for the rule to match|
|» operation|body|string|true|Operation class to execute on match|
|» entity|body|string|true|The matched entity|
|» events|body|[string]|true|The list of events on which the rule should be validated|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": {
      "id": 0,
      "class": "string",
      "name": "string",
      "checks": [
        {
          "class": "string",
          "value": "string",
          "operator": "is"
        }
      ],
      "operation": "string",
      "entity": "string",
      "events": [
        "string"
      ]
    }
  }
}
```

> 400 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

> 401 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="create-a-workflow-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Workflow created|Inline|
|400|Bad Request|Thrown when a check or check value is invalid|Inline|
|401|Unauthorized|Current user is not logged in|Inline|

<h3 id="create-a-workflow-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|[Rule](#schemarule)|true|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Retrieve a specific workflow

<a id="opIduser_workflows-show"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/workflowengine/api/v1/workflows/user/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/apps/workflowengine/api/v1/workflows/user/{id}`

<h3 id="retrieve-a-specific-workflow-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Workflow ID to load|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": {
      "id": 0,
      "class": "string",
      "name": "string",
      "checks": [
        {
          "class": "string",
          "value": "string",
          "operator": "is"
        }
      ],
      "operation": "string",
      "entity": "string",
      "events": [
        "string"
      ]
    }
  }
}
```

> 401 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="retrieve-a-specific-workflow-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Workflow returned or empty array if the ID is unknown in the scope|Inline|
|401|Unauthorized|Current user is not logged in|Inline|

<h3 id="retrieve-a-specific-workflow-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|[Rule](#schemarule) \| array|true|none|none|
|» » *anyOf*|[Rule](#schemarule)|false|none|none|
|» » *anyOf*|array|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Modify a workflow

<a id="opIduser_workflows-update"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/workflowengine/api/v1/workflows/user/0 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true' \
  -d '{
    "name": "string",
    "checks": [
      {
        "class": "string",
        "value": "string",
        "operator": "is"
      }
    ],
    "operation": "string",
    "entity": "string",
    "events": [
      "string"
    ]
  }'
```

`PUT /ocs/v2.php/apps/workflowengine/api/v1/workflows/user/{id}`

This endpoint requires password confirmation

> Body parameter

```json
{
  "name": "string",
  "checks": [
    {
      "class": "string",
      "value": "string",
      "operator": "is"
    }
  ],
  "operation": "string",
  "entity": "string",
  "events": [
    "string"
  ]
}
```

<h3 id="modify-a-workflow-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Workflow ID to delete|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|
|body|body|object|true|none|
|» name|body|string|true|Name of the workflow rule|
|» checks|body|[[Check](#schemacheck)]|true|List of conditions that need to apply for the rule to match|
|» operation|body|string|true|Operation action to execute on match|
|» entity|body|string|true|The matched entity|
|» events|body|[string]|true|The list of events on which the rule should be validated|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": {
      "id": 0,
      "class": "string",
      "name": "string",
      "checks": [
        {
          "class": "string",
          "value": "string",
          "operator": "is"
        }
      ],
      "operation": "string",
      "entity": "string",
      "events": [
        "string"
      ]
    }
  }
}
```

> 400 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

> 401 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

> 403 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="modify-a-workflow-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Workflow updated|Inline|
|400|Bad Request|Thrown when a check or check value is invalid|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|403|Forbidden|Thrown when workflow is from a different scope|Inline|

<h3 id="modify-a-workflow-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|[Rule](#schemarule)|true|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Delete a workflow

<a id="opIduser_workflows-destroy"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/workflowengine/api/v1/workflows/user/0 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`DELETE /ocs/v2.php/apps/workflowengine/api/v1/workflows/user/{id}`

This endpoint requires password confirmation

<h3 id="delete-a-workflow-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|Workflow ID to delete|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": true
  }
}
```

> 401 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

> 403 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="delete-a-workflow-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Workflow deleted|Inline|
|401|Unauthorized|Current user is not logged in|Inline|
|403|Forbidden|Thrown when workflow is from a different scope|Inline|

<h3 id="delete-a-workflow-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|boolean|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

# Schemas

<h2 id="tocS_Check">Check</h2>
<!-- backwards compatibility -->
<a id="schemacheck"></a>
<a id="schema_Check"></a>
<a id="tocScheck"></a>
<a id="tocscheck"></a>

```json
{
  "class": "string",
  "value": "string",
  "operator": "is"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|class|string|true|none|none|
|value|string|true|none|none|
|operator|[Operator](#schemaoperator)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|operator|is|
|operator|in|
|operator|match|
|operator|less|
|operator|greater|
|operator|matchesIPv4|
|operator|matchesIPv6|
|operator|!is|
|operator|!in|
|operator|!match|
|operator|!less|
|operator|!greater|
|operator|!matchesIPv4|
|operator|!matchesIPv6|

<h2 id="tocS_OCSMeta">OCSMeta</h2>
<!-- backwards compatibility -->
<a id="schemaocsmeta"></a>
<a id="schema_OCSMeta"></a>
<a id="tocSocsmeta"></a>
<a id="tocsocsmeta"></a>

```json
{
  "status": "string",
  "statuscode": 0,
  "message": "string",
  "totalitems": "string",
  "itemsperpage": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|none|
|statuscode|integer|true|none|none|
|message|string|false|none|none|
|totalitems|string|false|none|none|
|itemsperpage|string|false|none|none|

<h2 id="tocS_Operator">Operator</h2>
<!-- backwards compatibility -->
<a id="schemaoperator"></a>
<a id="schema_Operator"></a>
<a id="tocSoperator"></a>
<a id="tocsoperator"></a>

```json
"is"
```

<h2 id="tocS_Rule">Rule</h2>
<!-- backwards compatibility -->
<a id="schemarule"></a>
<a id="schema_Rule"></a>
<a id="tocSrule"></a>
<a id="tocsrule"></a>

```json
{
  "id": 0,
  "class": "string",
  "name": "string",
  "checks": [
    {
      "class": "string",
      "value": "string",
      "operator": "is"
    }
  ],
  "operation": "string",
  "entity": "string",
  "events": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int64)|true|none|none|
|class|string|true|none|none|
|name|string|true|none|none|
|checks|[[Check](#schemacheck)]|true|none|none|
|operation|string|true|none|none|
|entity|string|true|none|none|
|events|[string]|true|none|none|
