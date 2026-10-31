import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/signl4.com/v1/openapi.yaml',
  output: './src/signl4/routes.ts',
  docs: {
    output: './src/signl4/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
