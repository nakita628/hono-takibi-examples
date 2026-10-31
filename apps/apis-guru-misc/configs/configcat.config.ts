import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/configcat.com/v1/openapi.yaml',
  output: './src/configcat/routes.ts',
  docs: {
    output: './src/configcat/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
