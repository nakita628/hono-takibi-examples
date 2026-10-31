import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/mediapackage/2017-10-12/openapi.yaml',
  output: './src/mediapackage/routes.ts',
  docs: {
    output: './src/mediapackage/api.md',
    curl: true,
    baseUrl: 'https://mediapackage.us-east-1.amazonaws.com',
  },
})
