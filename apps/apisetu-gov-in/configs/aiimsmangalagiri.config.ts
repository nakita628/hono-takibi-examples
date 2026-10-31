import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/aiimsmangalagiri/3.0.0/openapi.yaml',
  output: './src/aiimsmangalagiri/routes.ts',
  docs: {
    output: './src/aiimsmangalagiri/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
