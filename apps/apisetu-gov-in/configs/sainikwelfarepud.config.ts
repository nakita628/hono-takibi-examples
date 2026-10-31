import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/sainikwelfarepud/3.0.0/openapi.yaml',
  output: './src/sainikwelfarepud/routes.ts',
  docs: {
    output: './src/sainikwelfarepud/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
