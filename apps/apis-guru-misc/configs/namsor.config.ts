import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/namsor.com/2.0.24/openapi.yaml',
  output: './src/namsor/routes.ts',
  docs: {
    output: './src/namsor/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
