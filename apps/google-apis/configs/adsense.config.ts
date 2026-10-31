import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/adsense/v1.4/openapi.yaml',
  output: './src/adsense/routes.ts',
  docs: {
    output: './src/adsense/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
