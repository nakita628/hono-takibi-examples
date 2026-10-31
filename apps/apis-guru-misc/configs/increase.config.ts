import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/increase.com/0.0.1/openapi.yaml',
  output: './src/increase/routes.ts',
  docs: {
    output: './src/increase/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
