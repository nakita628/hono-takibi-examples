import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/location/2020-11-19/openapi.yaml',
  output: './src/location/routes.ts',
  docs: {
    output: './src/location/api.md',
    curl: true,
    baseUrl: 'https://location.us-east-1.amazonaws.com',
  },
})
