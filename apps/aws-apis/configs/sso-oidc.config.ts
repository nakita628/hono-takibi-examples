import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/sso-oidc/2019-06-10/openapi.yaml',
  output: './src/sso-oidc/routes.ts',
  docs: {
    output: './src/sso-oidc/api.md',
    curl: true,
    baseUrl: 'https://sso-oidc.us-east-1.amazonaws.com',
  },
})
