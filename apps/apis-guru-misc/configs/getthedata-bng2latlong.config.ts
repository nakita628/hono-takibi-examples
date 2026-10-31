import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/getthedata.com/bng2latlong/1.0/openapi.yaml',
  output: './src/getthedata-bng2latlong/routes.ts',
  docs: {
    output: './src/getthedata-bng2latlong/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
