import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/binaryauthorization/v1beta1/openapi.yaml',
  output: './src/binaryauthorization/routes.ts',
  docs: {
    output: './src/binaryauthorization/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
