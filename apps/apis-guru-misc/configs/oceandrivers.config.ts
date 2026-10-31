import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/oceandrivers.com/1.0/openapi.yaml',
  output: './src/oceandrivers/routes.ts',
  docs: {
    output: './src/oceandrivers/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
