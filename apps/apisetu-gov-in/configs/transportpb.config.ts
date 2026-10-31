import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/transportpb/3.0.0/openapi.yaml',
  output: './src/transportpb/routes.ts',
  docs: {
    output: './src/transportpb/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
