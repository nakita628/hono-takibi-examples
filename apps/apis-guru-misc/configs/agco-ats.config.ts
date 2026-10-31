import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/agco-ats.com/v1/openapi.yaml',
  output: './src/agco-ats/routes.ts',
  docs: {
    output: './src/agco-ats/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
