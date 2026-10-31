import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/cloudidentity/v1beta1/openapi.yaml',
  output: './src/cloudidentity/routes.ts',
  docs: {
    output: './src/cloudidentity/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
