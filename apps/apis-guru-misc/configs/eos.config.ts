import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/eos.local/1.0.0/openapi.yaml',
  output: './src/eos/routes.ts',
  docs: {
    output: './src/eos/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
