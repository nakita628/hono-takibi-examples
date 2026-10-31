import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/reloadly.com/1.0.0/openapi.yaml',
  output: './src/reloadly/routes.ts',
  docs: {
    output: './src/reloadly/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
