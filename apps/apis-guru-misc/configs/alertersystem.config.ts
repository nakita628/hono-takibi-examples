import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/alertersystem.com/1.6.0/openapi.yaml',
  output: './src/alertersystem/routes.ts',
  docs: {
    output: './src/alertersystem/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
