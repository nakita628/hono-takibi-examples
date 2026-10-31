import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/asana.com/1.0/openapi.yaml',
  output: './src/asana/routes.ts',
  docs: {
    output: './src/asana/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
