import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/clickmeter.com/v2/openapi.yaml',
  output: './src/clickmeter/routes.ts',
  docs: {
    output: './src/clickmeter/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
