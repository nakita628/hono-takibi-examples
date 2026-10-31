import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/mwaa/2020-07-01/openapi.yaml',
  output: './src/mwaa/routes.ts',
  docs: {
    output: './src/mwaa/api.md',
    curl: true,
    baseUrl: 'https://mwaa.us-east-1.amazonaws.com',
  },
})
