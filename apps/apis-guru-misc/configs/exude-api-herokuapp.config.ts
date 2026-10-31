import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/exude-api.herokuapp.com/1.0.0/openapi.yaml',
  output: './src/exude-api-herokuapp/routes.ts',
  docs: {
    output: './src/exude-api-herokuapp/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
