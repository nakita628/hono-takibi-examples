import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/owncloud/libre-graph-api/main/api/openapi-spec/v1.0.yaml',
  output: './src/routes.ts',
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://ocis.example.com/graph',
  },
})
