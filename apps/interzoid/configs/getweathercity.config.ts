import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/interzoid.com/getweathercity/1.0.0/openapi.yaml',
  output: './src/getweathercity/routes.ts',
  docs: {
    output: './src/getweathercity/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
