import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/cgbse/3.0.0/openapi.yaml',
  output: './src/cgbse/routes.ts',
  docs: {
    output: './src/cgbse/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
