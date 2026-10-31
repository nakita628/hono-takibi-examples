import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/edistrictpb/3.0.0/openapi.yaml',
  output: './src/edistrictpb/routes.ts',
  docs: {
    output: './src/edistrictpb/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
