import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apptigent.com/2021.1.01/openapi.yaml',
  output: './src/apptigent/routes.ts',
  docs: {
    output: './src/apptigent/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
