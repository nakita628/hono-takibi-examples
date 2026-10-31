import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/obono.at/1.4.0.0/openapi.yaml',
  output: './src/obono-at/routes.ts',
  docs: {
    output: './src/obono-at/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
