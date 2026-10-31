import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/vtex.local/Headless-CMS-API/0.31.2/openapi.yaml',
  output: './src/headless-cms-api/routes.ts',
  docs: {
    output: './src/headless-cms-api/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
