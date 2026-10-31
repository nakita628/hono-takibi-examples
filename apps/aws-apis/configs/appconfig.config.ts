import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/appconfig/2019-10-09/openapi.yaml',
  output: './src/appconfig/routes.ts',
  docs: {
    output: './src/appconfig/api.md',
    curl: true,
    baseUrl: 'https://appconfig.us-east-1.amazonaws.com',
  },
})
