import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amentum.space/global-magnet/1.3.0/openapi.yaml',
  output: './src/amentum-space-global-magnet/routes.ts',
  docs: {
    output: './src/amentum-space-global-magnet/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
