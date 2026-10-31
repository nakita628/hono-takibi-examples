import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/presalytics.io/converter/0.1/openapi.yaml',
  output: './src/presalytics-io-converter/routes.ts',
  docs: {
    output: './src/presalytics-io-converter/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
