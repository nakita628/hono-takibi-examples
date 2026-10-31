import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/climate.com/4.0.11/openapi.yaml',
  output: './src/climate/routes.ts',
  docs: {
    output: './src/climate/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
