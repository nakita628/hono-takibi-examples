import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/securitycenter/v1beta2/openapi.yaml',
  output: './src/securitycenter/routes.ts',
  docs: {
    output: './src/securitycenter/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
