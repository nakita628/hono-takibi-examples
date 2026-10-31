import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/nrel.gov/transportation-incentives-laws/0.1.0/openapi.yaml',
  output: './src/nrel-gov-transportation-incentives-laws/routes.ts',
  docs: {
    output: './src/nrel-gov-transportation-incentives-laws/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
