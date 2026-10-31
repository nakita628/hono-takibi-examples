import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/fcmdata/v1beta1/openapi.yaml',
  output: './src/fcmdata/routes.ts',
  docs: {
    output: './src/fcmdata/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
