import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/sso-admin/2020-07-20/openapi.yaml',
  output: './src/sso-admin/routes.ts',
  docs: {
    output: './src/sso-admin/api.md',
    curl: true,
    baseUrl: 'https://sso-admin.us-east-1.amazonaws.com',
  },
})
