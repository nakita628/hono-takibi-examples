import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/eventarc/v1beta1/openapi.yaml',
  output: './src/eventarc/routes.ts',
  docs: {
    output: './src/eventarc/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
