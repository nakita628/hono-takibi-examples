import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/dlm/2018-01-12/openapi.yaml',
  output: './src/dlm/routes.ts',
  docs: {
    output: './src/dlm/api.md',
    curl: true,
    baseUrl: 'https://dlm.us-east-1.amazonaws.com',
  },
})
