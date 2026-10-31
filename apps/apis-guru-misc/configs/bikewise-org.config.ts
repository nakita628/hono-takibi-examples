import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/bikewise.org/v2/openapi.yaml',
  output: './src/bikewise-org/routes.ts',
  docs: {
    output: './src/bikewise-org/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
