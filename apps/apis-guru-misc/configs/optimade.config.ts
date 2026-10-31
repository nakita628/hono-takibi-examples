import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/optimade.local/1.1.0~develop/openapi.yaml',
  output: './src/optimade/routes.ts',
  docs: {
    output: './src/optimade/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
