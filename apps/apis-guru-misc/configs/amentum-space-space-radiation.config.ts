import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amentum.space/space_radiation/1.1.2/openapi.yaml',
  output: './src/amentum-space-space-radiation/routes.ts',
  docs: {
    output: './src/amentum-space-space-radiation/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
