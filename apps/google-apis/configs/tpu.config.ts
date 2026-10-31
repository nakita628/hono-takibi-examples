import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/tpu/v2/openapi.yaml',
  output: './src/tpu/routes.ts',
  docs: {
    output: './src/tpu/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
