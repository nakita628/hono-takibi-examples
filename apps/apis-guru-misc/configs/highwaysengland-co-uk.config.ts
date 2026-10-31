import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/highwaysengland.co.uk/v1/openapi.yaml',
  output: './src/highwaysengland-co-uk/routes.ts',
  docs: {
    output: './src/highwaysengland-co-uk/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
