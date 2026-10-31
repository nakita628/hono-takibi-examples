import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/factchecktools/v1alpha1/openapi.yaml',
  output: './src/factchecktools/routes.ts',
  docs: {
    output: './src/factchecktools/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
