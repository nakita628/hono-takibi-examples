import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/interzoid.com/getcompanymatch/1.0.0/openapi.yaml',
  output: './src/getcompanymatch/routes.ts',
  docs: {
    output: './src/getcompanymatch/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
