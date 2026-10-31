import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/payrun.io/22.23.10.42/openapi.yaml',
  output: './src/payrun-io/routes.ts',
  docs: {
    output: './src/payrun-io/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
