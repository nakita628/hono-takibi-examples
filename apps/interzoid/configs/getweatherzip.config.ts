import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/interzoid.com/getweatherzip/1.0.0/openapi.yaml',
  output: './src/getweatherzip/routes.ts',
  docs: {
    output: './src/getweatherzip/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
