import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/abstractapi.com/geolocation/1.0.0/openapi.yaml',
  output: './src/abstractapi-geolocation/routes.ts',
  docs: {
    output: './src/abstractapi-geolocation/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
