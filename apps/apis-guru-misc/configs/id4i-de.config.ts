import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/id4i.de/1.0.2/openapi.yaml',
  output: './src/id4i-de/routes.ts',
  docs: {
    output: './src/id4i-de/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
