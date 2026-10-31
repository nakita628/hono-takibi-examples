import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/servicenetworking/v1beta/openapi.yaml',
  output: './src/servicenetworking/routes.ts',
  docs: {
    output: './src/servicenetworking/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
