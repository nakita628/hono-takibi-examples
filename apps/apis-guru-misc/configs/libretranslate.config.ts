import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/libretranslate.local/1.3.9/openapi.yaml',
  output: './src/libretranslate/routes.ts',
  docs: {
    output: './src/libretranslate/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
