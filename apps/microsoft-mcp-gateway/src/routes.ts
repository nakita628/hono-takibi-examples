import { createRoute, z } from '@hono/zod-openapi'

const McpRequestSchema = z
  .object({
    jsonrpc: z.literal('2.0'),
    id: z.xor([z.int(), z.string()]),
    method: z.string().openapi({ example: 'server/discover' }),
    params: z
      .looseObject({
        _meta: z
          .object({
            'io.modelcontextprotocol/protocolVersion': z.literal('2026-07-28'),
            'io.modelcontextprotocol/clientCapabilities': z.object({}),
            'io.modelcontextprotocol/clientInfo': z
              .object({})
              .exactOptional()
              .openapi({
                description:
                  'Optional self-reported implementation metadata, not authenticated identity.',
              }),
          })
          .openapi({
            required: [
              'io.modelcontextprotocol/protocolVersion',
              'io.modelcontextprotocol/clientCapabilities',
            ],
          }),
      })
      .openapi({ required: ['_meta'] }),
  })
  .openapi({ required: ['jsonrpc', 'id', 'method', 'params'] })
  .openapi('McpRequest')

const AdapterSchema = z
  .object({
    id: z.string().exactOptional(),
    name: z.string().exactOptional(),
    imageName: z.string().exactOptional(),
    imageVersion: z.string().exactOptional(),
    environmentVariables: z.object({}).exactOptional(),
    replicaCount: z.int().exactOptional(),
    protocol: z.string().exactOptional(),
    connectionType: z.string().exactOptional(),
    description: z.string().exactOptional(),
    createdBy: z.string().exactOptional(),
    createdAt: z.iso.datetime({ offset: true }).exactOptional(),
    lastUpdatedAt: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Adapter')

const McpToolSchema = z
  .object({
    name: z.string().openapi({ description: 'The unique name of the MCP tool' }),
    title: z.string().exactOptional().openapi({ description: 'Human-readable title of the tool' }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Human-readable description of what the tool does' }),
    type: z
      .enum(['http', 'function'])
      .default('http')
      .exactOptional()
      .openapi({ description: 'The type of tool execution' }),
    properties: z
      .object({
        method: z
          .enum(['GET', 'POST', 'PUT', 'DELETE', 'PATCH'])
          .exactOptional()
          .openapi({ description: 'HTTP method for the tool execution' }),
        path: z
          .string()
          .exactOptional()
          .openapi({ description: 'Path for the tool execution endpoint' }),
      })
      .exactOptional()
      .openapi({ description: 'Tool-specific properties like HTTP method and path', required: [] }),
    inputSchema: z
      .object({
        type: z.literal('object').exactOptional(),
        properties: z.looseObject({}).exactOptional(),
        required: z.array(z.string()).exactOptional(),
      })
      .openapi({ description: "JSON Schema defining the tool's input parameters", required: [] }),
    annotations: z
      .looseObject({
        readOnly: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Indicates if the tool is read-only' }),
      })
      .exactOptional()
      .openapi({ description: 'Additional metadata annotations for the tool', required: [] }),
  })
  .openapi({ required: ['name', 'inputSchema'] })
  .openapi('McpTool')

const ToolDefinitionSchema = z
  .object({
    tool: McpToolSchema,
    port: z
      .int()
      .default(8000)
      .exactOptional()
      .openapi({ description: 'Port for the tool server endpoint' }),
  })
  .openapi({ required: ['tool'] })
  .openapi('ToolDefinition')

const ToolDataSchema = z
  .object({
    name: z
      .string()
      .openapi({
        description: 'Unique name of the tool, must match the tool name in toolDefinition',
      }),
    imageName: z.string().openapi({ description: 'Container image name for the tool server' }),
    imageVersion: z.string().openapi({ description: 'Container image version/tag' }),
    toolDefinition: ToolDefinitionSchema,
    environmentVariables: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Environment variables for the tool server' }),
    replicaCount: z
      .int()
      .default(1)
      .exactOptional()
      .openapi({ description: 'Number of replicas for the tool server' }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Human-readable description of the tool' }),
    useWorkloadIdentity: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'Whether to use Azure Workload Identity for authentication. Requires the mcp.admin role or a role listed in WorkloadIdentitySettings:RequiredRoles; otherwise the request is rejected with 403.',
      }),
  })
  .openapi({ required: ['name', 'imageName', 'imageVersion', 'toolDefinition'] })
  .openapi('ToolData')

const ToolResourceSchema = ToolDataSchema.and(
  z
    .object({
      id: z
        .string()
        .exactOptional()
        .openapi({ description: 'Unique identifier for the tool resource' }),
      createdBy: z.string().exactOptional().openapi({ description: 'User who created the tool' }),
      createdAt: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({ description: 'Timestamp when the tool was created' }),
      lastUpdatedAt: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({ description: 'Timestamp when the tool was last updated' }),
    })
    .openapi({ required: [] }),
).openapi('ToolResource')

const McpResponseResponse = {
  description:
    'JSON-RPC response or an incremental SSE response scoped to this request. Modern results include resultType; complete discovery/list/read results carry ttlMs and cacheScope. A subscription stream stays open until cancelled or completed. No transport session ID is returned.',
  content: {
    'application/json': { schema: z.object({}) },
    'text/event-stream': { schema: z.string() },
  },
}

const McpBadRequestResponse = {
  description:
    'Missing/malformed headers or metadata, HeaderMismatch (-32020), MissingRequiredClientCapability (-32021), or UnsupportedProtocolVersion (-32022). Backend status and error body are preserved; no legacy fallback.',
  content: { 'application/json': { schema: z.object({}) } },
}

const McpMethodNotAllowedResponse = {
  description: 'MCP endpoints support POST, not standalone GET streams or session DELETE.',
  headers: z.object({
    Allow: {
      schema: z
        .string()
        .exactOptional()
        .openapi({ param: { required: false }, example: 'POST' }),
    },
  }),
}

const McpProtocolVersionParamsSchema = z
  .literal('2026-07-28')
  .openapi({
    param: {
      name: 'MCP-Protocol-Version',
      in: 'header',
      required: true,
      description:
        'Must match params._meta protocolVersion. Legacy and unknown revisions are rejected.',
      schema: { type: 'string', enum: ['2026-07-28'] },
    },
  })

const McpMethodParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'Mcp-Method',
      in: 'header',
      required: true,
      description: 'Must match the JSON-RPC method.',
      schema: { type: 'string' },
    },
  })

const McpNameParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'Mcp-Name',
      in: 'header',
      description:
        'Required for tools/call and prompts/get (params.name) and resources/read (params.uri). Use the MCP Base64 sentinel encoding for unsafe header values. Mcp-Param-* headers similarly mirror schema-annotated arguments.',
      schema: { type: 'string' },
      required: false,
    },
  })

const McpAcceptParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'Accept',
      in: 'header',
      required: true,
      schema: { type: 'string', example: 'application/json, text/event-stream' },
    },
    example: 'application/json, text/event-stream',
  })

const McpRequestRequestBody = {
  content: { 'application/json': { schema: McpRequestSchema } },
  required: true,
}

export const getAdaptersRoute = createRoute({
  method: 'get',
  path: '/adapters',
  summary: 'List all MCP servers the user can access',
  responses: {
    200: {
      description: 'List of adapters',
      content: { 'application/json': { schema: z.array(AdapterSchema) } },
    },
  },
})

export const postAdaptersRoute = createRoute({
  method: 'post',
  path: '/adapters',
  summary: 'Deploy and register a new MCP server',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z.string(),
              imageName: z.string(),
              imageVersion: z.string(),
              description: z.string().exactOptional(),
            })
            .openapi({ required: ['name', 'imageName', 'imageVersion'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Adapter created',
      content: { 'application/json': { schema: AdapterSchema } },
    },
  },
})

export const getAdaptersNameRoute = createRoute({
  method: 'get',
  path: '/adapters/{name}',
  summary: 'Retrieve metadata for a specific adapter',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: { name: 'name', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Adapter metadata',
      content: { 'application/json': { schema: AdapterSchema } },
    },
  },
})

export const putAdaptersNameRoute = createRoute({
  method: 'put',
  path: '/adapters/{name}',
  summary: 'Update the deployment',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: { name: 'name', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: AdapterSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Adapter updated',
      content: { 'application/json': { schema: AdapterSchema } },
    },
  },
})

export const deleteAdaptersNameRoute = createRoute({
  method: 'delete',
  path: '/adapters/{name}',
  summary: 'Remove the server',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: { name: 'name', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 204: { description: 'No Content' } },
})

export const getAdaptersNameStatusRoute = createRoute({
  method: 'get',
  path: '/adapters/{name}/status',
  summary: 'Check the deployment status',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: { name: 'name', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Adapter status',
      content: {
        'application/json': {
          schema: z
            .object({
              readyReplicas: z.int().exactOptional(),
              updatedReplicas: z.int().exactOptional(),
              availableReplicas: z.int().exactOptional(),
              image: z.string().exactOptional(),
              replicaStatus: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getAdaptersNameLogsRoute = createRoute({
  method: 'get',
  path: '/adapters/{name}/logs',
  summary: "Access the server's running logs",
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: { name: 'name', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'Log output', content: { 'text/plain': { schema: z.string() } } },
  },
})

export const getToolsRoute = createRoute({
  method: 'get',
  path: '/tools',
  summary: 'List all registered tools the user can access',
  responses: {
    200: {
      description: 'List of tools',
      content: { 'application/json': { schema: z.array(ToolResourceSchema) } },
    },
  },
})

export const postToolsRoute = createRoute({
  method: 'post',
  path: '/tools',
  summary: 'Register and deploy a new tool with MCP tool definition',
  description:
    'Creates a tool deployment that includes tool definition metadata for routing by the tool gateway router',
  request: {
    body: { content: { 'application/json': { schema: ToolDataSchema } }, required: true },
  },
  responses: {
    201: {
      description: 'Tool created',
      content: { 'application/json': { schema: ToolResourceSchema } },
    },
    400: { description: 'Bad request' },
  },
})

export const getToolsNameRoute = createRoute({
  method: 'get',
  path: '/tools/{name}',
  summary: 'Retrieve metadata for a specific tool',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: { name: 'name', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Tool metadata',
      content: { 'application/json': { schema: ToolResourceSchema } },
    },
    404: { description: 'Tool not found' },
  },
})

export const putToolsNameRoute = createRoute({
  method: 'put',
  path: '/tools/{name}',
  summary: 'Update a tool deployment',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: { name: 'name', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    body: { content: { 'application/json': { schema: ToolDataSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Tool updated',
      content: { 'application/json': { schema: ToolResourceSchema } },
    },
    400: { description: 'Bad request' },
    404: { description: 'Tool not found' },
  },
})

export const deleteToolsNameRoute = createRoute({
  method: 'delete',
  path: '/tools/{name}',
  summary: 'Remove a registered tool',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: { name: 'name', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: { 204: { description: 'Tool deleted' }, 400: { description: 'Bad request' } },
})

export const getToolsNameStatusRoute = createRoute({
  method: 'get',
  path: '/tools/{name}/status',
  summary: 'Check the deployment status of a tool',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: { name: 'name', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Tool deployment status',
      content: {
        'application/json': {
          schema: z
            .object({
              readyReplicas: z.int().exactOptional(),
              updatedReplicas: z.int().exactOptional(),
              availableReplicas: z.int().exactOptional(),
              image: z.string().exactOptional(),
              replicaStatus: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    404: { description: 'Tool not found' },
  },
})

export const getToolsNameLogsRoute = createRoute({
  method: 'get',
  path: '/tools/{name}/logs',
  summary: "Access the tool server's running logs",
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: { name: 'name', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      instance: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            name: 'instance',
            in: 'query',
            required: false,
            schema: { type: 'integer', default: 0 },
            description: 'The instance index (0-based) of the tool pod to retrieve logs from',
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Log output', content: { 'text/plain': { schema: z.string() } } },
    404: { description: 'Tool not found' },
  },
})

export const postMcpRoute = createRoute({
  method: 'post',
  path: '/mcp',
  summary: 'Send a stateless MCP request to the tool gateway',
  description:
    'Requires MCP 2026-07-28. Every request is independently authorized; no initialize handshake or transport session is supported. Caller-filtered tool catalogs are private. Annotated tool parameters require matching Mcp-Param-* headers. GET and DELETE are not supported.',
  request: {
    headers: z.object({
      'MCP-Protocol-Version': McpProtocolVersionParamsSchema,
      'Mcp-Method': McpMethodParamsSchema,
      'Mcp-Name': McpNameParamsSchema,
      Accept: McpAcceptParamsSchema,
    }),
    body: McpRequestRequestBody,
  },
  responses: {
    200: McpResponseResponse,
    400: McpBadRequestResponse,
    401: { description: 'Authentication required' },
    403: { description: 'Access denied or supplied Origin not allowed' },
    404: { description: 'Unknown MCP method; backend JSON-RPC error is preserved' },
    405: McpMethodNotAllowedResponse,
    503: { description: 'No ready tool gateway instances' },
  },
})

export const postAdaptersNameMcpRoute = createRoute({
  method: 'post',
  path: '/adapters/{name}/mcp',
  summary: 'Send a stateless MCP request to an adapter',
  description:
    'Requires a MCP 2026-07-28 adapter and client. Independently selects a ready adapter pod after authorizing access. Legacy session headers and session_id query values do not affect routing. Backend errors and request-scoped SSE are preserved; subscriptions/listen is forwarded when implemented by the adapter. GET and DELETE are not supported.',
  request: {
    params: z.object({
      name: z
        .string()
        .openapi({
          param: { name: 'name', in: 'path', required: true, schema: { type: 'string' } },
        }),
    }),
    headers: z.object({
      'MCP-Protocol-Version': McpProtocolVersionParamsSchema,
      'Mcp-Method': McpMethodParamsSchema,
      'Mcp-Name': McpNameParamsSchema,
      Accept: McpAcceptParamsSchema,
    }),
    body: McpRequestRequestBody,
  },
  responses: {
    200: McpResponseResponse,
    400: McpBadRequestResponse,
    401: { description: 'Authentication required' },
    403: { description: 'Adapter access denied or supplied Origin not allowed' },
    404: { description: 'Adapter or MCP method not found; backend error bodies are preserved' },
    405: McpMethodNotAllowedResponse,
    503: { description: 'No ready adapter instances' },
  },
})
