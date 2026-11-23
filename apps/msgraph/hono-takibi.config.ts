import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/microsoftgraph/msgraph-metadata/master/openapi/v1.0/openapi.yaml',
  // No docs: api.md would be 170 MB, over GitHub's 100 MB file limit (nakita628/hono-takibi#409).
  output: './src/routes.ts',
  // template: { routeHandler: true }: with the default template, the largest handler file chains about 2,000
  // .openapi() calls, and reading it back overflows the stack. With routeHandler, index.ts chains every route
  // instead, so only a run on a fresh src/ (no handlers/, no index.ts) gets through (nakita628/hono-takibi#521).
  template: { routeHandler: true },
  // No type output and no hooks: 371 paths contain ' (OData function calls), which the type output and the
  // hooks' query keys do not escape, and the run aborts (nakita628/hono-takibi#505).
  client: { output: './src/client.ts', baseUrl: '/' },
  rpc: { output: './src/rpc.ts', parseResponse: true },
})
