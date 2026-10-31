import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/gov.bc.ca/bcgnws/3.x.x/openapi.yaml',
  output: './src/bcgnws/routes.ts',
  docs: {
    output: './src/bcgnws/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
