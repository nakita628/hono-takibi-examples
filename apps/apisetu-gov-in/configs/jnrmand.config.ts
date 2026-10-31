import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/jnrmand/3.0.0/openapi.yaml',
  output: './src/jnrmand/routes.ts',
  docs: {
    output: './src/jnrmand/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
