import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/sso/2019-06-10/openapi.yaml',
  output: './src/sso/routes.ts',
  docs: {
    output: './src/sso/api.md',
    curl: true,
    baseUrl: 'https://sso.us-east-1.amazonaws.com',
  },
})
