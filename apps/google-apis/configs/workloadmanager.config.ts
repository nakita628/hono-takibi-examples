import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/workloadmanager/v1/openapi.yaml',
  output: './src/workloadmanager/routes.ts',
  docs: {
    output: './src/workloadmanager/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
