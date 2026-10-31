import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/dgft/3.0.0/openapi.yaml',
  output: './src/dgft/routes.ts',
  docs: {
    output: './src/dgft/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
