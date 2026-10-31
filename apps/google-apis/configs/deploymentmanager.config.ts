import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/deploymentmanager/v2beta/openapi.yaml',
  output: './src/deploymentmanager/routes.ts',
  docs: {
    output: './src/deploymentmanager/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
