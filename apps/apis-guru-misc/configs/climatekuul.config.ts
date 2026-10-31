import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/climatekuul.com/1.0/openapi.yaml',
  output: './src/climatekuul/routes.ts',
  docs: {
    output: './src/climatekuul/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
