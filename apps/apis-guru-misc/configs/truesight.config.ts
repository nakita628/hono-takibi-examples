import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/truesight.local/11.1.00/openapi.yaml',
  output: './src/truesight/routes.ts',
  docs: {
    output: './src/truesight/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
