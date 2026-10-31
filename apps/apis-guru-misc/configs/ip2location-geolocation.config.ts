import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/ip2location.com/geolocation/1.0/openapi.yaml',
  output: './src/ip2location-geolocation/routes.ts',
  docs: {
    output: './src/ip2location-geolocation/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
