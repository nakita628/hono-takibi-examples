import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/reliancegeneral/3.0.0/openapi.yaml',
  output: './src/reliancegeneral/routes.ts',
  docs: {
    output: './src/reliancegeneral/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
