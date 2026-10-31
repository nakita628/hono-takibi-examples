import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/firebasehosting/v1beta1/openapi.yaml',
  output: './src/firebasehosting/routes.ts',
  docs: {
    output: './src/firebasehosting/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
