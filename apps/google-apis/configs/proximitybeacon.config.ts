import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/proximitybeacon/v1beta1/openapi.yaml',
  output: './src/proximitybeacon/routes.ts',
  docs: {
    output: './src/proximitybeacon/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
