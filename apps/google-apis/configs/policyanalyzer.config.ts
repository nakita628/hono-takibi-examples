import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/policyanalyzer/v1beta1/openapi.yaml',
  output: './src/policyanalyzer/routes.ts',
  docs: {
    output: './src/policyanalyzer/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
