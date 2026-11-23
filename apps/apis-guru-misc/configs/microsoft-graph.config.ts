import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/microsoft.com/graph/1.0.1/openapi.yaml',
  output: './src/microsoft-graph/routes.ts',
  // template: { routeHandler: true }: with the default template, the largest handler file chains about 2,000
  // .openapi() calls, and reading it back overflows the stack. With routeHandler, index.ts chains every route
  // instead, so only a run on a fresh src/ (no handlers/, no index.ts) gets through (nakita628/hono-takibi#521).
  template: { routeHandler: true },
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
