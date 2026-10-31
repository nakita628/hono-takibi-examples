import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/cloudasset/v1p7beta1/openapi.yaml',
  output: './src/cloudasset/routes.ts',
  docs: {
    output: './src/cloudasset/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
