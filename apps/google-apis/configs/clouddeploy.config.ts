import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/clouddeploy/v1/openapi.yaml',
  output: './src/clouddeploy/routes.ts',
  docs: {
    output: './src/clouddeploy/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
