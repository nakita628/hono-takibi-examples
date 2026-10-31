import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/civilsupplieskerala/3.0.0/openapi.yaml',
  output: './src/civilsupplieskerala/routes.ts',
  docs: {
    output: './src/civilsupplieskerala/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
