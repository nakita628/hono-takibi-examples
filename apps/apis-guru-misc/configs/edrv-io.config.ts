import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/edrv.io/v1/openapi.yaml',
  output: './src/edrv-io/routes.ts',
  docs: {
    output: './src/edrv-io/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
