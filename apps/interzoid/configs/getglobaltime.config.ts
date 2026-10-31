import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/interzoid.com/getglobaltime/1.0.0/openapi.yaml',
  output: './src/getglobaltime/routes.ts',
  docs: {
    output: './src/getglobaltime/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
