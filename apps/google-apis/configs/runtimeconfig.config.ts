import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/runtimeconfig/v1beta1/openapi.yaml',
  output: './src/runtimeconfig/routes.ts',
  docs: {
    output: './src/runtimeconfig/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
