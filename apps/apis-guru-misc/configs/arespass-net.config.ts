import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/arespass.net/1.0/openapi.yaml',
  output: './src/arespass-net/routes.ts',
  docs: {
    output: './src/arespass-net/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
