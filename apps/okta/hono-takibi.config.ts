import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // Okta Management API (okta/okta-management-openapi-spec)
  input: 'https://raw.githubusercontent.com/okta/okta-management-openapi-spec/master/dist/current/management-minimal.yaml',
  output: './src/routes.ts',
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://{yourOktaDomain}',
  },
})
