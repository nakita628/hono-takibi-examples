import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/covid19-api.com/1.2.6/openapi.yaml',
  output: './src/covid19-api/routes.ts',
  docs: {
    output: './src/covid19-api/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
