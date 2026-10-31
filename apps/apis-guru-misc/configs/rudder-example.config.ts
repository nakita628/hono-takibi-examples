import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/rudder.example.local/16/openapi.yaml',
  output: './src/rudder-example/routes.ts',
  docs: {
    output: './src/rudder-example/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
