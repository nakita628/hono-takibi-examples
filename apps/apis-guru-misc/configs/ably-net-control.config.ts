import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/ably.net/control/1.0.14/openapi.yaml',
  output: './src/ably-net-control/routes.ts',
  docs: {
    output: './src/ably-net-control/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
