import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/xtrf.eu/2.0/openapi.yaml',
  output: './src/xtrf-eu/routes.ts',
  docs: {
    output: './src/xtrf-eu/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
