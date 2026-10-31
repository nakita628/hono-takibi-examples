import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/openstates.org/2021.11.12/openapi.yaml',
  output: './src/openstates-org/routes.ts',
  docs: {
    output: './src/openstates-org/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
