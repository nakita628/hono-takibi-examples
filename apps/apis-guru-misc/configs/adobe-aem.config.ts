import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/adobe.com/aem/3.7.1-pre.0/openapi.yaml',
  output: './src/adobe-aem/routes.ts',
  docs: {
    output: './src/adobe-aem/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
