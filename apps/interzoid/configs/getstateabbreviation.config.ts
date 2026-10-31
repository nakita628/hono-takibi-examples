import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/interzoid.com/getstateabbreviation/1.0.0/openapi.yaml',
  output: './src/getstateabbreviation/routes.ts',
  docs: {
    output: './src/getstateabbreviation/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
