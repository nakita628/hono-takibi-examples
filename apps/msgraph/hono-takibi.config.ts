import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/microsoftgraph/msgraph-metadata/master/openapi/v1.0/openapi.yaml',
  // No docs: api.md would be 170 MB, over GitHub's 100 MB file limit (nakita628/hono-takibi#409).
  output: './src/routes.ts',
})
