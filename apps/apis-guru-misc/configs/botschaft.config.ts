import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/botschaft.local/0.1.0/openapi.yaml',
  output: './src/botschaft/routes.ts',
  docs: {
    output: './src/botschaft/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
