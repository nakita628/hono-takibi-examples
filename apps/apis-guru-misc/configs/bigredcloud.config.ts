import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/bigredcloud.com/v1/openapi.yaml',
  output: './src/bigredcloud/routes.ts',
  docs: {
    output: './src/bigredcloud/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
