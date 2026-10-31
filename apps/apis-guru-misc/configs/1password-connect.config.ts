import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/1password.local/connect/1.5.7/openapi.yaml',
  output: './src/1password-connect/routes.ts',
  docs: {
    output: './src/1password-connect/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
