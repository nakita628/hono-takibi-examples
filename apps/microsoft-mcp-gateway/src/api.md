<h1 id="mcp-gateway-mangement-api">MCP Gateway Mangement API v2.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

RESTful APIs for MCP Server Management

Base URLs:

* <a href="http://&lt;resourceLabel&gt;.&lt;location&gt;.cloudapp.azure.com">http://&lt;resourceLabel&gt;.&lt;location&gt;.cloudapp.azure.com</a> - Azure Deployment

* <a href="http://localhost:8000">http://localhost:8000</a> - Local development

<h1 id="mcp-gateway-mangement-api-default">Default</h1>

## List all MCP servers the user can access

> Code samples

```bash
curl http://localhost:8000/adapters \
  -H 'Accept: application/json'
```

`GET /adapters`

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "name": "string",
    "imageName": "string",
    "imageVersion": "string",
    "environmentVariables": {},
    "replicaCount": 0,
    "protocol": "string",
    "connectionType": "string",
    "description": "string",
    "createdBy": "string",
    "createdAt": "1970-01-01T00:00:00Z",
    "lastUpdatedAt": "1970-01-01T00:00:00Z"
  }
]
```

<h3 id="list-all-mcp-servers-the-user-can-access-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of adapters|Inline|

<h3 id="list-all-mcp-servers-the-user-can-access-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Adapter](#schemaadapter)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Deploy and register a new MCP server

> Code samples

```bash
curl http://localhost:8000/adapters \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "string",
    "imageName": "string",
    "imageVersion": "string",
    "description": "string"
  }'
```

`POST /adapters`

> Body parameter

```json
{
  "name": "string",
  "imageName": "string",
  "imageVersion": "string",
  "description": "string"
}
```

<h3 id="deploy-and-register-a-new-mcp-server-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» name|body|string|true|none|
|» imageName|body|string|true|none|
|» imageVersion|body|string|true|none|
|» description|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string",
  "imageName": "string",
  "imageVersion": "string",
  "environmentVariables": {},
  "replicaCount": 0,
  "protocol": "string",
  "connectionType": "string",
  "description": "string",
  "createdBy": "string",
  "createdAt": "1970-01-01T00:00:00Z",
  "lastUpdatedAt": "1970-01-01T00:00:00Z"
}
```

<h3 id="deploy-and-register-a-new-mcp-server-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Adapter created|[Adapter](#schemaadapter)|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve metadata for a specific adapter

> Code samples

```bash
curl http://localhost:8000/adapters/string \
  -H 'Accept: application/json'
```

`GET /adapters/{name}`

<h3 id="retrieve-metadata-for-a-specific-adapter-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string",
  "imageName": "string",
  "imageVersion": "string",
  "environmentVariables": {},
  "replicaCount": 0,
  "protocol": "string",
  "connectionType": "string",
  "description": "string",
  "createdBy": "string",
  "createdAt": "1970-01-01T00:00:00Z",
  "lastUpdatedAt": "1970-01-01T00:00:00Z"
}
```

<h3 id="retrieve-metadata-for-a-specific-adapter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Adapter metadata|[Adapter](#schemaadapter)|

<aside class="success">
This operation does not require authentication
</aside>

## Update the deployment

> Code samples

```bash
curl http://localhost:8000/adapters/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "id": "string",
    "name": "string",
    "imageName": "string",
    "imageVersion": "string",
    "environmentVariables": {},
    "replicaCount": 0,
    "protocol": "string",
    "connectionType": "string",
    "description": "string",
    "createdBy": "string",
    "createdAt": "1970-01-01T00:00:00Z",
    "lastUpdatedAt": "1970-01-01T00:00:00Z"
  }'
```

`PUT /adapters/{name}`

> Body parameter

```json
{
  "id": "string",
  "name": "string",
  "imageName": "string",
  "imageVersion": "string",
  "environmentVariables": {},
  "replicaCount": 0,
  "protocol": "string",
  "connectionType": "string",
  "description": "string",
  "createdBy": "string",
  "createdAt": "1970-01-01T00:00:00Z",
  "lastUpdatedAt": "1970-01-01T00:00:00Z"
}
```

<h3 id="update-the-deployment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|none|
|body|body|[Adapter](#schemaadapter)|true|none|
|» id|body|string|false|none|
|» name|body|string|false|none|
|» imageName|body|string|false|none|
|» imageVersion|body|string|false|none|
|» environmentVariables|body|object|false|none|
|» replicaCount|body|integer|false|none|
|» protocol|body|string|false|none|
|» connectionType|body|string|false|none|
|» description|body|string|false|none|
|» createdBy|body|string|false|none|
|» createdAt|body|string(date-time)|false|none|
|» lastUpdatedAt|body|string(date-time)|false|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string",
  "imageName": "string",
  "imageVersion": "string",
  "environmentVariables": {},
  "replicaCount": 0,
  "protocol": "string",
  "connectionType": "string",
  "description": "string",
  "createdBy": "string",
  "createdAt": "1970-01-01T00:00:00Z",
  "lastUpdatedAt": "1970-01-01T00:00:00Z"
}
```

<h3 id="update-the-deployment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Adapter updated|[Adapter](#schemaadapter)|

<aside class="success">
This operation does not require authentication
</aside>

## Remove the server

> Code samples

```bash
curl http://localhost:8000/adapters/string \
  -X DELETE
```

`DELETE /adapters/{name}`

<h3 id="remove-the-server-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|none|

<h3 id="remove-the-server-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="success">
This operation does not require authentication
</aside>

## Check the deployment status

> Code samples

```bash
curl http://localhost:8000/adapters/string/status \
  -H 'Accept: application/json'
```

`GET /adapters/{name}/status`

<h3 id="check-the-deployment-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "readyReplicas": 0,
  "updatedReplicas": 0,
  "availableReplicas": 0,
  "image": "string",
  "replicaStatus": "string"
}
```

<h3 id="check-the-deployment-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Adapter status|Inline|

<h3 id="check-the-deployment-status-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|readyReplicas|integer|false|none|none|
|updatedReplicas|integer|false|none|none|
|availableReplicas|integer|false|none|none|
|image|string|false|none|none|
|replicaStatus|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Access the server's running logs

> Code samples

```bash
curl http://localhost:8000/adapters/string/logs
```

`GET /adapters/{name}/logs`

<h3 id="access-the-servers-running-logs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|none|

<h3 id="access-the-servers-running-logs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Log output|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## List all registered tools the user can access

> Code samples

```bash
curl http://localhost:8000/tools \
  -H 'Accept: application/json'
```

`GET /tools`

> Example responses

> 200 Response

```json
[
  {
    "name": "string",
    "imageName": "string",
    "imageVersion": "string",
    "toolDefinition": {
      "tool": {
        "name": "string",
        "title": "string",
        "description": "string",
        "type": "http",
        "properties": {
          "method": "GET",
          "path": "string"
        },
        "inputSchema": {
          "type": "object",
          "properties": {},
          "required": [
            "string"
          ]
        },
        "annotations": {
          "readOnly": true
        }
      },
      "port": 8000
    },
    "environmentVariables": {
      "property1": "string",
      "property2": "string"
    },
    "replicaCount": 1,
    "description": "string",
    "useWorkloadIdentity": false,
    "id": "string",
    "createdBy": "string",
    "createdAt": "1970-01-01T00:00:00Z",
    "lastUpdatedAt": "1970-01-01T00:00:00Z"
  }
]
```

<h3 id="list-all-registered-tools-the-user-can-access-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of tools|Inline|

<h3 id="list-all-registered-tools-the-user-can-access-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ToolResource](#schematoolresource)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Register and deploy a new tool with MCP tool definition

> Code samples

```bash
curl http://localhost:8000/tools \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "string",
    "imageName": "string",
    "imageVersion": "string",
    "toolDefinition": {
      "tool": {
        "name": "string",
        "title": "string",
        "description": "string",
        "type": "http",
        "properties": {
          "method": "GET",
          "path": "string"
        },
        "inputSchema": {
          "type": "object",
          "properties": {},
          "required": [
            "string"
          ]
        },
        "annotations": {
          "readOnly": true
        }
      },
      "port": 8000
    },
    "environmentVariables": {
      "property1": "string",
      "property2": "string"
    },
    "replicaCount": 1,
    "description": "string",
    "useWorkloadIdentity": false
  }'
```

`POST /tools`

Creates a tool deployment that includes tool definition metadata for routing by the tool gateway router

> Body parameter

```json
{
  "name": "string",
  "imageName": "string",
  "imageVersion": "string",
  "toolDefinition": {
    "tool": {
      "name": "string",
      "title": "string",
      "description": "string",
      "type": "http",
      "properties": {
        "method": "GET",
        "path": "string"
      },
      "inputSchema": {
        "type": "object",
        "properties": {},
        "required": [
          "string"
        ]
      },
      "annotations": {
        "readOnly": true
      }
    },
    "port": 8000
  },
  "environmentVariables": {
    "property1": "string",
    "property2": "string"
  },
  "replicaCount": 1,
  "description": "string",
  "useWorkloadIdentity": false
}
```

<h3 id="register-and-deploy-a-new-tool-with-mcp-tool-definition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ToolData](#schematooldata)|true|none|
|» name|body|string|true|Unique name of the tool, must match the tool name in toolDefinition|
|» imageName|body|string|true|Container image name for the tool server|
|» imageVersion|body|string|true|Container image version/tag|
|» toolDefinition|body|[ToolDefinition](#schematooldefinition)|true|none|
|» environmentVariables|body|object|false|Environment variables for the tool server|
|» » **additionalProperties**|body|string|false|none|
|» replicaCount|body|integer|false|Number of replicas for the tool server|
|» description|body|string|false|Human-readable description of the tool|
|» useWorkloadIdentity|body|boolean|false|Whether to use Azure Workload Identity for authentication. Requires the mcp.admin role or a role listed in WorkloadIdentitySettings:RequiredRoles; otherwise the request is rejected with 403.|

> Example responses

> 201 Response

```json
{
  "name": "string",
  "imageName": "string",
  "imageVersion": "string",
  "toolDefinition": {
    "tool": {
      "name": "string",
      "title": "string",
      "description": "string",
      "type": "http",
      "properties": {
        "method": "GET",
        "path": "string"
      },
      "inputSchema": {
        "type": "object",
        "properties": {},
        "required": [
          "string"
        ]
      },
      "annotations": {
        "readOnly": true
      }
    },
    "port": 8000
  },
  "environmentVariables": {
    "property1": "string",
    "property2": "string"
  },
  "replicaCount": 1,
  "description": "string",
  "useWorkloadIdentity": false,
  "id": "string",
  "createdBy": "string",
  "createdAt": "1970-01-01T00:00:00Z",
  "lastUpdatedAt": "1970-01-01T00:00:00Z"
}
```

<h3 id="register-and-deploy-a-new-tool-with-mcp-tool-definition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Tool created|[ToolResource](#schematoolresource)|
|400|Bad Request|Bad request|None|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve metadata for a specific tool

> Code samples

```bash
curl http://localhost:8000/tools/string \
  -H 'Accept: application/json'
```

`GET /tools/{name}`

<h3 id="retrieve-metadata-for-a-specific-tool-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "imageName": "string",
  "imageVersion": "string",
  "toolDefinition": {
    "tool": {
      "name": "string",
      "title": "string",
      "description": "string",
      "type": "http",
      "properties": {
        "method": "GET",
        "path": "string"
      },
      "inputSchema": {
        "type": "object",
        "properties": {},
        "required": [
          "string"
        ]
      },
      "annotations": {
        "readOnly": true
      }
    },
    "port": 8000
  },
  "environmentVariables": {
    "property1": "string",
    "property2": "string"
  },
  "replicaCount": 1,
  "description": "string",
  "useWorkloadIdentity": false,
  "id": "string",
  "createdBy": "string",
  "createdAt": "1970-01-01T00:00:00Z",
  "lastUpdatedAt": "1970-01-01T00:00:00Z"
}
```

<h3 id="retrieve-metadata-for-a-specific-tool-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Tool metadata|[ToolResource](#schematoolresource)|
|404|Not Found|Tool not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Update a tool deployment

> Code samples

```bash
curl http://localhost:8000/tools/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "string",
    "imageName": "string",
    "imageVersion": "string",
    "toolDefinition": {
      "tool": {
        "name": "string",
        "title": "string",
        "description": "string",
        "type": "http",
        "properties": {
          "method": "GET",
          "path": "string"
        },
        "inputSchema": {
          "type": "object",
          "properties": {},
          "required": [
            "string"
          ]
        },
        "annotations": {
          "readOnly": true
        }
      },
      "port": 8000
    },
    "environmentVariables": {
      "property1": "string",
      "property2": "string"
    },
    "replicaCount": 1,
    "description": "string",
    "useWorkloadIdentity": false
  }'
```

`PUT /tools/{name}`

> Body parameter

```json
{
  "name": "string",
  "imageName": "string",
  "imageVersion": "string",
  "toolDefinition": {
    "tool": {
      "name": "string",
      "title": "string",
      "description": "string",
      "type": "http",
      "properties": {
        "method": "GET",
        "path": "string"
      },
      "inputSchema": {
        "type": "object",
        "properties": {},
        "required": [
          "string"
        ]
      },
      "annotations": {
        "readOnly": true
      }
    },
    "port": 8000
  },
  "environmentVariables": {
    "property1": "string",
    "property2": "string"
  },
  "replicaCount": 1,
  "description": "string",
  "useWorkloadIdentity": false
}
```

<h3 id="update-a-tool-deployment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|none|
|body|body|[ToolData](#schematooldata)|true|none|
|» name|body|string|true|Unique name of the tool, must match the tool name in toolDefinition|
|» imageName|body|string|true|Container image name for the tool server|
|» imageVersion|body|string|true|Container image version/tag|
|» toolDefinition|body|[ToolDefinition](#schematooldefinition)|true|none|
|» environmentVariables|body|object|false|Environment variables for the tool server|
|» » **additionalProperties**|body|string|false|none|
|» replicaCount|body|integer|false|Number of replicas for the tool server|
|» description|body|string|false|Human-readable description of the tool|
|» useWorkloadIdentity|body|boolean|false|Whether to use Azure Workload Identity for authentication. Requires the mcp.admin role or a role listed in WorkloadIdentitySettings:RequiredRoles; otherwise the request is rejected with 403.|

> Example responses

> 200 Response

```json
{
  "name": "string",
  "imageName": "string",
  "imageVersion": "string",
  "toolDefinition": {
    "tool": {
      "name": "string",
      "title": "string",
      "description": "string",
      "type": "http",
      "properties": {
        "method": "GET",
        "path": "string"
      },
      "inputSchema": {
        "type": "object",
        "properties": {},
        "required": [
          "string"
        ]
      },
      "annotations": {
        "readOnly": true
      }
    },
    "port": 8000
  },
  "environmentVariables": {
    "property1": "string",
    "property2": "string"
  },
  "replicaCount": 1,
  "description": "string",
  "useWorkloadIdentity": false,
  "id": "string",
  "createdBy": "string",
  "createdAt": "1970-01-01T00:00:00Z",
  "lastUpdatedAt": "1970-01-01T00:00:00Z"
}
```

<h3 id="update-a-tool-deployment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Tool updated|[ToolResource](#schematoolresource)|
|400|Bad Request|Bad request|None|
|404|Not Found|Tool not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Remove a registered tool

> Code samples

```bash
curl http://localhost:8000/tools/string \
  -X DELETE
```

`DELETE /tools/{name}`

<h3 id="remove-a-registered-tool-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|none|

<h3 id="remove-a-registered-tool-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Tool deleted|None|
|400|Bad Request|Bad request|None|

<aside class="success">
This operation does not require authentication
</aside>

## Check the deployment status of a tool

> Code samples

```bash
curl http://localhost:8000/tools/string/status \
  -H 'Accept: application/json'
```

`GET /tools/{name}/status`

<h3 id="check-the-deployment-status-of-a-tool-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "readyReplicas": 0,
  "updatedReplicas": 0,
  "availableReplicas": 0,
  "image": "string",
  "replicaStatus": "string"
}
```

<h3 id="check-the-deployment-status-of-a-tool-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Tool deployment status|Inline|
|404|Not Found|Tool not found|None|

<h3 id="check-the-deployment-status-of-a-tool-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|readyReplicas|integer|false|none|none|
|updatedReplicas|integer|false|none|none|
|availableReplicas|integer|false|none|none|
|image|string|false|none|none|
|replicaStatus|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Access the tool server's running logs

> Code samples

```bash
curl http://localhost:8000/tools/string/logs
```

`GET /tools/{name}/logs`

<h3 id="access-the-tool-servers-running-logs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|none|
|instance|query|integer|false|The instance index (0-based) of the tool pod to retrieve logs from|

<h3 id="access-the-tool-servers-running-logs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Log output|Inline|
|404|Not Found|Tool not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Send a stateless MCP request to the tool gateway

> Code samples

```bash
curl http://localhost:8000/mcp \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'MCP-Protocol-Version: 2026-07-28' \
  -H 'Mcp-Method: string' \
  -d '{
    "jsonrpc": "2.0",
    "id": 0,
    "method": "server/discover",
    "params": {
      "_meta": {
        "io.modelcontextprotocol/protocolVersion": "2026-07-28",
        "io.modelcontextprotocol/clientCapabilities": {},
        "io.modelcontextprotocol/clientInfo": {}
      }
    }
  }'
```

`POST /mcp`

Requires MCP 2026-07-28. Every request is independently authorized; no initialize handshake or transport session is supported. Caller-filtered tool catalogs are private. Annotated tool parameters require matching Mcp-Param-* headers. GET and DELETE are not supported.

> Body parameter

```json
{
  "jsonrpc": "2.0",
  "id": 0,
  "method": "server/discover",
  "params": {
    "_meta": {
      "io.modelcontextprotocol/protocolVersion": "2026-07-28",
      "io.modelcontextprotocol/clientCapabilities": {},
      "io.modelcontextprotocol/clientInfo": {}
    }
  }
}
```

<h3 id="send-a-stateless-mcp-request-to-the-tool-gateway-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MCP-Protocol-Version|header|string|true|Must match params._meta protocolVersion. Legacy and unknown revisions are rejected.|
|Mcp-Method|header|string|true|Must match the JSON-RPC method.|
|Mcp-Name|header|string|false|Required for tools/call and prompts/get (params.name) and resources/read (params.uri). Use the MCP Base64 sentinel encoding for unsafe header values. Mcp-Param-* headers similarly mirror schema-annotated arguments.|
|Accept|header|string|true|none|
|body|body|[McpRequest](#schemamcprequest)|true|none|
|» jsonrpc|body|string|true|none|
|» id|body|integer \| string|true|none|
|» » *oneOf*|body|integer|false|none|
|» » *oneOf*|body|string|false|none|
|» method|body|string|true|none|
|» params|body|object|true|none|
|» » _meta|body|object|true|none|
|» » » io.modelcontextprotocol/protocolVersion|body|string|true|none|
|» » » io.modelcontextprotocol/clientCapabilities|body|object|true|none|
|» » » io.modelcontextprotocol/clientInfo|body|object|false|Optional self-reported implementation metadata, not authenticated identity.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|MCP-Protocol-Version|2026-07-28|
|» jsonrpc|2.0|
|» » » io.modelcontextprotocol/protocolVersion|2026-07-28|

> Example responses

> 200 Response

```json
{}
```

> 400 Response

```json
{}
```

<h3 id="send-a-stateless-mcp-request-to-the-tool-gateway-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|JSON-RPC response or an incremental SSE response scoped to this request. Modern results include resultType; complete discovery/list/read results carry ttlMs and cacheScope. A subscription stream stays open until cancelled or completed. No transport session ID is returned.|Inline|
|400|Bad Request|Missing/malformed headers or metadata, HeaderMismatch (-32020), MissingRequiredClientCapability (-32021), or UnsupportedProtocolVersion (-32022). Backend status and error body are preserved; no legacy fallback.|Inline|
|401|Unauthorized|Authentication required|None|
|403|Forbidden|Access denied or supplied Origin not allowed|None|
|404|Not Found|Unknown MCP method; backend JSON-RPC error is preserved|None|
|405|Method Not Allowed|MCP endpoints support POST, not standalone GET streams or session DELETE.|None|
|503|Service Unavailable|No ready tool gateway instances|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|405|Allow|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## Send a stateless MCP request to an adapter

> Code samples

```bash
curl http://localhost:8000/adapters/string/mcp \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'MCP-Protocol-Version: 2026-07-28' \
  -H 'Mcp-Method: string' \
  -d '{
    "jsonrpc": "2.0",
    "id": 0,
    "method": "server/discover",
    "params": {
      "_meta": {
        "io.modelcontextprotocol/protocolVersion": "2026-07-28",
        "io.modelcontextprotocol/clientCapabilities": {},
        "io.modelcontextprotocol/clientInfo": {}
      }
    }
  }'
```

`POST /adapters/{name}/mcp`

Requires a MCP 2026-07-28 adapter and client. Independently selects a ready adapter pod after authorizing access. Legacy session headers and session_id query values do not affect routing. Backend errors and request-scoped SSE are preserved; subscriptions/listen is forwarded when implemented by the adapter. GET and DELETE are not supported.

> Body parameter

```json
{
  "jsonrpc": "2.0",
  "id": 0,
  "method": "server/discover",
  "params": {
    "_meta": {
      "io.modelcontextprotocol/protocolVersion": "2026-07-28",
      "io.modelcontextprotocol/clientCapabilities": {},
      "io.modelcontextprotocol/clientInfo": {}
    }
  }
}
```

<h3 id="send-a-stateless-mcp-request-to-an-adapter-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|none|
|MCP-Protocol-Version|header|string|true|Must match params._meta protocolVersion. Legacy and unknown revisions are rejected.|
|Mcp-Method|header|string|true|Must match the JSON-RPC method.|
|Mcp-Name|header|string|false|Required for tools/call and prompts/get (params.name) and resources/read (params.uri). Use the MCP Base64 sentinel encoding for unsafe header values. Mcp-Param-* headers similarly mirror schema-annotated arguments.|
|Accept|header|string|true|none|
|body|body|[McpRequest](#schemamcprequest)|true|none|
|» jsonrpc|body|string|true|none|
|» id|body|integer \| string|true|none|
|» » *oneOf*|body|integer|false|none|
|» » *oneOf*|body|string|false|none|
|» method|body|string|true|none|
|» params|body|object|true|none|
|» » _meta|body|object|true|none|
|» » » io.modelcontextprotocol/protocolVersion|body|string|true|none|
|» » » io.modelcontextprotocol/clientCapabilities|body|object|true|none|
|» » » io.modelcontextprotocol/clientInfo|body|object|false|Optional self-reported implementation metadata, not authenticated identity.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|MCP-Protocol-Version|2026-07-28|
|» jsonrpc|2.0|
|» » » io.modelcontextprotocol/protocolVersion|2026-07-28|

> Example responses

> 200 Response

```json
{}
```

> 400 Response

```json
{}
```

<h3 id="send-a-stateless-mcp-request-to-an-adapter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|JSON-RPC response or an incremental SSE response scoped to this request. Modern results include resultType; complete discovery/list/read results carry ttlMs and cacheScope. A subscription stream stays open until cancelled or completed. No transport session ID is returned.|Inline|
|400|Bad Request|Missing/malformed headers or metadata, HeaderMismatch (-32020), MissingRequiredClientCapability (-32021), or UnsupportedProtocolVersion (-32022). Backend status and error body are preserved; no legacy fallback.|Inline|
|401|Unauthorized|Authentication required|None|
|403|Forbidden|Adapter access denied or supplied Origin not allowed|None|
|404|Not Found|Adapter or MCP method not found; backend error bodies are preserved|None|
|405|Method Not Allowed|MCP endpoints support POST, not standalone GET streams or session DELETE.|None|
|503|Service Unavailable|No ready adapter instances|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|405|Allow|string||none|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_McpRequest">McpRequest</h2>
<!-- backwards compatibility -->
<a id="schemamcprequest"></a>
<a id="schema_McpRequest"></a>
<a id="tocSmcprequest"></a>
<a id="tocsmcprequest"></a>

```json
{
  "jsonrpc": "2.0",
  "id": 0,
  "method": "server/discover",
  "params": {
    "_meta": {
      "io.modelcontextprotocol/protocolVersion": "2026-07-28",
      "io.modelcontextprotocol/clientCapabilities": {},
      "io.modelcontextprotocol/clientInfo": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jsonrpc|string|true|none|none|
|id|integer \| string|true|none|none|
|method|string|true|none|none|
|params|object|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|jsonrpc|2.0|

<h2 id="tocS_Adapter">Adapter</h2>
<!-- backwards compatibility -->
<a id="schemaadapter"></a>
<a id="schema_Adapter"></a>
<a id="tocSadapter"></a>
<a id="tocsadapter"></a>

```json
{
  "id": "string",
  "name": "string",
  "imageName": "string",
  "imageVersion": "string",
  "environmentVariables": {},
  "replicaCount": 0,
  "protocol": "string",
  "connectionType": "string",
  "description": "string",
  "createdBy": "string",
  "createdAt": "1970-01-01T00:00:00Z",
  "lastUpdatedAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|name|string|false|none|none|
|imageName|string|false|none|none|
|imageVersion|string|false|none|none|
|environmentVariables|object|false|none|none|
|replicaCount|integer|false|none|none|
|protocol|string|false|none|none|
|connectionType|string|false|none|none|
|description|string|false|none|none|
|createdBy|string|false|none|none|
|createdAt|string(date-time)|false|none|none|
|lastUpdatedAt|string(date-time)|false|none|none|

<h2 id="tocS_ToolData">ToolData</h2>
<!-- backwards compatibility -->
<a id="schematooldata"></a>
<a id="schema_ToolData"></a>
<a id="tocStooldata"></a>
<a id="tocstooldata"></a>

```json
{
  "name": "string",
  "imageName": "string",
  "imageVersion": "string",
  "toolDefinition": {
    "tool": {
      "name": "string",
      "title": "string",
      "description": "string",
      "type": "http",
      "properties": {
        "method": "GET",
        "path": "string"
      },
      "inputSchema": {
        "type": "object",
        "properties": {},
        "required": [
          "string"
        ]
      },
      "annotations": {
        "readOnly": true
      }
    },
    "port": 8000
  },
  "environmentVariables": {
    "property1": "string",
    "property2": "string"
  },
  "replicaCount": 1,
  "description": "string",
  "useWorkloadIdentity": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Unique name of the tool, must match the tool name in toolDefinition|
|imageName|string|true|none|Container image name for the tool server|
|imageVersion|string|true|none|Container image version/tag|
|toolDefinition|[ToolDefinition](#schematooldefinition)|true|none|none|
|environmentVariables|object|false|none|Environment variables for the tool server|
|replicaCount|integer|false|none|Number of replicas for the tool server|
|description|string|false|none|Human-readable description of the tool|
|useWorkloadIdentity|boolean|false|none|Whether to use Azure Workload Identity for authentication. Requires the mcp.admin role or a role listed in WorkloadIdentitySettings:RequiredRoles; otherwise the request is rejected with 403.|

<h2 id="tocS_ToolResource">ToolResource</h2>
<!-- backwards compatibility -->
<a id="schematoolresource"></a>
<a id="schema_ToolResource"></a>
<a id="tocStoolresource"></a>
<a id="tocstoolresource"></a>

```json
{
  "name": "string",
  "imageName": "string",
  "imageVersion": "string",
  "toolDefinition": {
    "tool": {
      "name": "string",
      "title": "string",
      "description": "string",
      "type": "http",
      "properties": {
        "method": "GET",
        "path": "string"
      },
      "inputSchema": {
        "type": "object",
        "properties": {},
        "required": [
          "string"
        ]
      },
      "annotations": {
        "readOnly": true
      }
    },
    "port": 8000
  },
  "environmentVariables": {
    "property1": "string",
    "property2": "string"
  },
  "replicaCount": 1,
  "description": "string",
  "useWorkloadIdentity": false,
  "id": "string",
  "createdBy": "string",
  "createdAt": "1970-01-01T00:00:00Z",
  "lastUpdatedAt": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Unique name of the tool, must match the tool name in toolDefinition|
|imageName|string|true|none|Container image name for the tool server|
|imageVersion|string|true|none|Container image version/tag|
|toolDefinition|[ToolDefinition](#schematooldefinition)|true|none|none|
|environmentVariables|object|false|none|Environment variables for the tool server|
|replicaCount|integer|false|none|Number of replicas for the tool server|
|description|string|false|none|Human-readable description of the tool|
|useWorkloadIdentity|boolean|false|none|Whether to use Azure Workload Identity for authentication. Requires the mcp.admin role or a role listed in WorkloadIdentitySettings:RequiredRoles; otherwise the request is rejected with 403.|
|id|string|false|none|Unique identifier for the tool resource|
|createdBy|string|false|none|User who created the tool|
|createdAt|string(date-time)|false|none|Timestamp when the tool was created|
|lastUpdatedAt|string(date-time)|false|none|Timestamp when the tool was last updated|

<h2 id="tocS_ToolDefinition">ToolDefinition</h2>
<!-- backwards compatibility -->
<a id="schematooldefinition"></a>
<a id="schema_ToolDefinition"></a>
<a id="tocStooldefinition"></a>
<a id="tocstooldefinition"></a>

```json
{
  "tool": {
    "name": "string",
    "title": "string",
    "description": "string",
    "type": "http",
    "properties": {
      "method": "GET",
      "path": "string"
    },
    "inputSchema": {
      "type": "object",
      "properties": {},
      "required": [
        "string"
      ]
    },
    "annotations": {
      "readOnly": true
    }
  },
  "port": 8000
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tool|[McpTool](#schemamcptool)|true|none|none|
|port|integer|false|none|Port for the tool server endpoint|

<h2 id="tocS_McpTool">McpTool</h2>
<!-- backwards compatibility -->
<a id="schemamcptool"></a>
<a id="schema_McpTool"></a>
<a id="tocSmcptool"></a>
<a id="tocsmcptool"></a>

```json
{
  "name": "string",
  "title": "string",
  "description": "string",
  "type": "http",
  "properties": {
    "method": "GET",
    "path": "string"
  },
  "inputSchema": {
    "type": "object",
    "properties": {},
    "required": [
      "string"
    ]
  },
  "annotations": {
    "readOnly": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The unique name of the MCP tool|
|title|string|false|none|Human-readable title of the tool|
|description|string|false|none|Human-readable description of what the tool does|
|type|string|false|none|The type of tool execution|
|properties|object|false|none|Tool-specific properties like HTTP method and path|
|inputSchema|object|true|none|JSON Schema defining the tool's input parameters|
|annotations|object|false|none|Additional metadata annotations for the tool|

#### Enumerated Values

|Property|Value|
|---|---|
|type|http|
|type|function|
