import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/openfigi.com/1.4.0/openapi.yaml',
  output: './src/openfigi/routes.ts',
  docs: {
    output: './src/openfigi/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
