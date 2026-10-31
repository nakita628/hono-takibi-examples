import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amentum.space/aviation_radiation/1.5.0/openapi.yaml',
  output: './src/amentum-space-aviation-radiation/routes.ts',
  docs: {
    output: './src/amentum-space-aviation-radiation/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
