import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/workflowexecutions/v1beta/openapi.yaml',
  output: './src/workflowexecutions/routes.ts',
  docs: {
    output: './src/workflowexecutions/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
