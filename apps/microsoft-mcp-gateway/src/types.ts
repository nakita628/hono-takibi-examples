type Adapter = {
  id?: string | undefined
  name?: string | undefined
  imageName?: string | undefined
  imageVersion?: string | undefined
  environmentVariables?: { [x: string]: unknown } | undefined
  replicaCount?: number | undefined
  protocol?: string | undefined
  connectionType?: string | undefined
  description?: string | undefined
  createdBy?: string | undefined
  createdAt?: string | undefined
  lastUpdatedAt?: string | undefined
}
type McpTool = {
  name: string
  title?: string | undefined
  description?: string | undefined
  type?: 'http' | 'function' | undefined
  properties?:
    | {
        method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | undefined
        path?: string | undefined
      }
    | undefined
  inputSchema: {
    type?: 'object' | undefined
    properties?: { [x: string]: unknown } | undefined
    required?: string[] | undefined
  }
  annotations?: { readOnly?: boolean | undefined } | undefined
}
type ToolDefinition = { tool: McpTool; port?: number | undefined }
type ToolData = {
  name: string
  imageName: string
  imageVersion: string
  toolDefinition: ToolDefinition
  environmentVariables?: { [x: string]: string } | undefined
  replicaCount?: number | undefined
  description?: string | undefined
  useWorkloadIdentity?: boolean | undefined
}
type ToolResource = {
  name: string
  imageName: string
  imageVersion: string
  toolDefinition: ToolDefinition
  environmentVariables?: { [x: string]: string } | undefined
  replicaCount?: number | undefined
  description?: string | undefined
  useWorkloadIdentity?: boolean | undefined
  id?: string | undefined
  createdBy?: string | undefined
  createdAt?: string | undefined
  lastUpdatedAt?: string | undefined
}
type McpRequest = {
  jsonrpc: '2.0'
  id: number | string
  method: string
  params: {
    _meta: {
      'io.modelcontextprotocol/protocolVersion': '2026-07-28'
      'io.modelcontextprotocol/clientCapabilities': { [x: string]: unknown }
      'io.modelcontextprotocol/clientInfo'?: { [x: string]: unknown } | undefined
    }
  }
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/adapters': {
      $post: {
        input: {
          json: {
            name: string
            imageName: string
            imageVersion: string
            description?: string | undefined
          }
        }
        output: Adapter
        outputFormat: 'json'
        status: 200
      }
      $get: { input: {}; output: Adapter[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/adapters/:name': {
      $get: {
        input: { param: { name: string } }
        output: Adapter
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { name: string } } & { json: Adapter }
        output: Adapter
        outputFormat: 'json'
        status: 200
      }
      $delete: { input: { param: { name: string } }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/adapters/:name/status': {
      $get: {
        input: { param: { name: string } }
        output: {
          readyReplicas?: number | undefined
          updatedReplicas?: number | undefined
          availableReplicas?: number | undefined
          image?: string | undefined
          replicaStatus?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/adapters/:name/logs': {
      $get: {
        input: { param: { name: string } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/tools': {
      $post:
        | { input: { json: ToolData }; output: ToolResource; outputFormat: 'json'; status: 201 }
        | { input: { json: ToolData }; output: {}; outputFormat: string; status: 400 }
      $get: { input: {}; output: ToolResource[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/tools/:name': {
      $get:
        | {
            input: { param: { name: string } }
            output: ToolResource
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { name: string } }; output: {}; outputFormat: string; status: 404 }
      $put:
        | {
            input: { param: { name: string } } & { json: ToolData }
            output: ToolResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & { json: ToolData }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { name: string } } & { json: ToolData }
            output: {}
            outputFormat: string
            status: 404
          }
      $delete:
        | { input: { param: { name: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { name: string } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/tools/:name/status': {
      $get:
        | {
            input: { param: { name: string } }
            output: {
              readyReplicas?: number | undefined
              updatedReplicas?: number | undefined
              availableReplicas?: number | undefined
              image?: string | undefined
              replicaStatus?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { name: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/tools/:name/logs': {
      $get:
        | {
            input: { param: { name: string } } & { query: { instance?: number | undefined } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string } } & { query: { instance?: number | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/mcp': {
      $post:
        | {
            input: {
              header: {
                'MCP-Protocol-Version': '2026-07-28'
                'Mcp-Method': string
                'Mcp-Name'?: string | undefined
                Accept: string
              }
            } & { json: McpRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'MCP-Protocol-Version': '2026-07-28'
                'Mcp-Method': string
                'Mcp-Name'?: string | undefined
                Accept: string
              }
            } & { json: McpRequest }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              header: {
                'MCP-Protocol-Version': '2026-07-28'
                'Mcp-Method': string
                'Mcp-Name'?: string | undefined
                Accept: string
              }
            } & { json: McpRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              header: {
                'MCP-Protocol-Version': '2026-07-28'
                'Mcp-Method': string
                'Mcp-Name'?: string | undefined
                Accept: string
              }
            } & { json: McpRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              header: {
                'MCP-Protocol-Version': '2026-07-28'
                'Mcp-Method': string
                'Mcp-Name'?: string | undefined
                Accept: string
              }
            } & { json: McpRequest }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              header: {
                'MCP-Protocol-Version': '2026-07-28'
                'Mcp-Method': string
                'Mcp-Name'?: string | undefined
                Accept: string
              }
            } & { json: McpRequest }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              header: {
                'MCP-Protocol-Version': '2026-07-28'
                'Mcp-Method': string
                'Mcp-Name'?: string | undefined
                Accept: string
              }
            } & { json: McpRequest }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              header: {
                'MCP-Protocol-Version': '2026-07-28'
                'Mcp-Method': string
                'Mcp-Name'?: string | undefined
                Accept: string
              }
            } & { json: McpRequest }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/adapters/:name/mcp': {
      $post:
        | {
            input: { param: { name: string } } & {
              header: {
                'MCP-Protocol-Version': '2026-07-28'
                'Mcp-Method': string
                'Mcp-Name'?: string | undefined
                Accept: string
              }
            } & { json: McpRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              header: {
                'MCP-Protocol-Version': '2026-07-28'
                'Mcp-Method': string
                'Mcp-Name'?: string | undefined
                Accept: string
              }
            } & { json: McpRequest }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              header: {
                'MCP-Protocol-Version': '2026-07-28'
                'Mcp-Method': string
                'Mcp-Name'?: string | undefined
                Accept: string
              }
            } & { json: McpRequest }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { name: string } } & {
              header: {
                'MCP-Protocol-Version': '2026-07-28'
                'Mcp-Method': string
                'Mcp-Name'?: string | undefined
                Accept: string
              }
            } & { json: McpRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { name: string } } & {
              header: {
                'MCP-Protocol-Version': '2026-07-28'
                'Mcp-Method': string
                'Mcp-Name'?: string | undefined
                Accept: string
              }
            } & { json: McpRequest }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { name: string } } & {
              header: {
                'MCP-Protocol-Version': '2026-07-28'
                'Mcp-Method': string
                'Mcp-Name'?: string | undefined
                Accept: string
              }
            } & { json: McpRequest }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { name: string } } & {
              header: {
                'MCP-Protocol-Version': '2026-07-28'
                'Mcp-Method': string
                'Mcp-Name'?: string | undefined
                Accept: string
              }
            } & { json: McpRequest }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { name: string } } & {
              header: {
                'MCP-Protocol-Version': '2026-07-28'
                'Mcp-Method': string
                'Mcp-Name'?: string | undefined
                Accept: string
              }
            } & { json: McpRequest }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  },
  '/'
>
export default routes
