import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/microsoftgraph/msgraph-metadata/master/openapi/v1.0/openapi.yaml',
  // No docs: api.md would be 170 MB, over GitHub's 100 MB file limit (nakita628/hono-takibi#409).
  output: './src/routes.ts',
  template: {},
  // No type output and no hooks: 371 paths contain ' (OData function calls), which the type output and the
  // hooks' query keys do not escape, and the run aborts (nakita628/hono-takibi#505).
  client: { output: './src/client.ts', baseUrl: '/' },
  rpc: { output: './src/rpc.ts', parseResponse: true },
})
