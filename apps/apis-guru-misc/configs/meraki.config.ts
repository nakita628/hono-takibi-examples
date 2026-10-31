import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/meraki.com/0.0.0-streaming/openapi.yaml',
  output: './src/meraki/routes.ts',
  docs: {
    output: './src/meraki/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
