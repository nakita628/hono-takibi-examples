import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/mbus.local/0.3.5/openapi.yaml',
  output: './src/mbus/routes.ts',
  docs: {
    output: './src/mbus/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
