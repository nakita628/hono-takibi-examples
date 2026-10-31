import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/hhs.gov/2/openapi.yaml',
  output: './src/hhs-gov/routes.ts',
  docs: {
    output: './src/hhs-gov/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
