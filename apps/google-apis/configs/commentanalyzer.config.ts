import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/commentanalyzer/v1alpha1/openapi.yaml',
  output: './src/commentanalyzer/routes.ts',
  docs: {
    output: './src/commentanalyzer/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
