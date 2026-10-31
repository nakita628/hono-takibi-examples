import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/bigdatacloud.net/1.0.0/openapi.yaml',
  output: './src/bigdatacloud-net/routes.ts',
  docs: {
    output: './src/bigdatacloud-net/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
