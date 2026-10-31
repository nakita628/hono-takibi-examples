import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/appflow/2020-08-23/openapi.yaml',
  output: './src/appflow/routes.ts',
  docs: {
    output: './src/appflow/api.md',
    curl: true,
    baseUrl: 'https://appflow.us-east-1.amazonaws.com',
  },
})
