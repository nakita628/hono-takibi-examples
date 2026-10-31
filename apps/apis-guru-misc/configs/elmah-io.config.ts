import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/elmah.io/v3/openapi.yaml',
  output: './src/elmah-io/routes.ts',
  docs: {
    output: './src/elmah-io/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
