import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/storecove.com/2.0.1/openapi.yaml',
  output: './src/storecove/routes.ts',
  docs: {
    output: './src/storecove/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
