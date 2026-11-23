import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/microsoftgraph/msgraph-metadata/master/openapi/v1.0/openapi.yaml',
  // No docs: api.md would be 170 MB, over GitHub's 100 MB file limit (nakita628/hono-takibi#409).
  output: './src/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/types.ts' },
  // No hooks: the hooks' query keys write paths that contain ' (OData function calls) without escaping,
  // and the run aborts (nakita628/hono-takibi#541).
  client: { output: './src/client.ts', baseUrl: '/' },
  rpc: { output: './src/rpc.ts', parseResponse: true },
})
