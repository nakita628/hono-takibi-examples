import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/servicedirectory/v1beta1/openapi.yaml',
  output: './src/servicedirectory/routes.ts',
  docs: {
    output: './src/servicedirectory/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
