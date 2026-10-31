import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/telnyx.com/2.0.0/openapi.yaml',
  output: './src/telnyx/routes.ts',
  docs: {
    output: './src/telnyx/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
