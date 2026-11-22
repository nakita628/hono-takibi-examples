import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/microsoft.com/graph/1.0.1/openapi.yaml',
  output: './src/microsoft-graph/routes.ts',
  template: {},
  // No type output and no hooks: paths contain ' (OData function calls), which the type output and the
  // hooks' query keys do not escape, and the run aborts (nakita628/hono-takibi#505).
  client: { output: './src/microsoft-graph/client.ts', baseUrl: '/' },
  rpc: { output: './src/microsoft-graph/rpc.ts', parseResponse: true },
  docs: {
    output: './src/microsoft-graph/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
