import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/javatpoint.com/v1/openapi.yaml',
  output: './src/javatpoint/routes.ts',
  docs: {
    output: './src/javatpoint/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
