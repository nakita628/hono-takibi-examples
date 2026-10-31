import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/presalytics.io/ooxml/0.1.0/openapi.yaml',
  output: './src/presalytics-io-ooxml/routes.ts',
  docs: {
    output: './src/presalytics-io-ooxml/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
