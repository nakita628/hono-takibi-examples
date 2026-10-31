import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amentum.space/atmosphere/1.1.1/openapi.yaml',
  output: './src/amentum-space-atmosphere/routes.ts',
  docs: {
    output: './src/amentum-space-atmosphere/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
