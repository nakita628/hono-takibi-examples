import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/byautomata.io/1.0.1/openapi.yaml',
  output: './src/byautomata-io/routes.ts',
  docs: {
    output: './src/byautomata-io/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
