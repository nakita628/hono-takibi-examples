import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/parliament.uk/members/v1/openapi.yaml',
  output: './src/members/routes.ts',
  docs: {
    output: './src/members/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
