import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/migrationhub-config/2019-06-30/openapi.yaml',
  output: './src/migrationhub-config/routes.ts',
  docs: {
    output: './src/migrationhub-config/api.md',
    curl: true,
    baseUrl: 'https://migrationhub-config.us-east-1.amazonaws.com',
  },
})
