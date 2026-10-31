import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apis.guru/2.2.0/openapi.yaml',
  output: './src/apis-guru/routes.ts',
  docs: {
    output: './src/apis-guru/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
