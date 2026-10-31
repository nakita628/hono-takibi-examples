import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/enode.io/1.3.10/openapi.yaml',
  output: './src/enode-io/routes.ts',
  docs: {
    output: './src/enode-io/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
