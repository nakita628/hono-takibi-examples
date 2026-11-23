import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/microsoft.com/graph/1.0.1/openapi.yaml',
  output: './src/microsoft-graph/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/microsoft-graph/types.ts' },
  // No hooks: the hooks' query keys write paths that contain ' (OData function calls) without escaping,
  // and the run aborts (nakita628/hono-takibi#541).
  client: { output: './src/microsoft-graph/client.ts', baseUrl: '/' },
  rpc: { output: './src/microsoft-graph/rpc.ts', parseResponse: true },
  docs: {
    output: './src/microsoft-graph/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
