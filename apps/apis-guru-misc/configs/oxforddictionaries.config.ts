import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/oxforddictionaries.com/1.11.0/openapi.yaml',
  output: './src/oxforddictionaries/routes.ts',
  docs: {
    output: './src/oxforddictionaries/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
