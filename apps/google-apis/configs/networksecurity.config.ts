import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/networksecurity/v1beta1/openapi.yaml',
  output: './src/networksecurity/routes.ts',
  docs: {
    output: './src/networksecurity/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
