import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/prod_tt_sasportal/v1alpha1/openapi.yaml',
  output: './src/prod-tt-sasportal/routes.ts',
  docs: {
    output: './src/prod-tt-sasportal/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
