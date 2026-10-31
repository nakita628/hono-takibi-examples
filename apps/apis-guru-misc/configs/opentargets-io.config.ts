import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/opentargets.io/19.02.1/openapi.yaml',
  output: './src/opentargets-io/routes.ts',
  docs: {
    output: './src/opentargets-io/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
