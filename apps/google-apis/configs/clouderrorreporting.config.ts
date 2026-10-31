import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/clouderrorreporting/v1beta1/openapi.yaml',
  output: './src/clouderrorreporting/routes.ts',
  docs: {
    output: './src/clouderrorreporting/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
