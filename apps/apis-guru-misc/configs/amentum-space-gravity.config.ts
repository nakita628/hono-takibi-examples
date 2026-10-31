import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amentum.space/gravity/1.1.1/openapi.yaml',
  output: './src/amentum-space-gravity/routes.ts',
  docs: {
    output: './src/amentum-space-gravity/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
