import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/ljaero.com/dflight/V 1.0.0/openapi.yaml',
  output: './src/ljaero-dflight/routes.ts',
  docs: {
    output: './src/ljaero-dflight/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
