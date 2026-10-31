import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/interzoid.com/getcountrymatch/1.0.0/openapi.yaml',
  output: './src/getcountrymatch/routes.ts',
  docs: {
    output: './src/getcountrymatch/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
