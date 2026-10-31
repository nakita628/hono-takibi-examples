import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/license-manager/2018-08-01/openapi.yaml',
  output: './src/license-manager/routes.ts',
  docs: {
    output: './src/license-manager/api.md',
    curl: true,
    baseUrl: 'https://license-manager.us-east-1.amazonaws.com',
  },
})
