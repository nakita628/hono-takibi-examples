import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/lookoutvision/2020-11-20/openapi.yaml',
  output: './src/lookoutvision/routes.ts',
  docs: {
    output: './src/lookoutvision/api.md',
    curl: true,
    baseUrl: 'https://lookoutvision.us-east-1.amazonaws.com',
  },
})
