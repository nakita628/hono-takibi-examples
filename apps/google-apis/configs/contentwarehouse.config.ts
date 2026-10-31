import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/contentwarehouse/v1/openapi.yaml',
  output: './src/contentwarehouse/routes.ts',
  docs: {
    output: './src/contentwarehouse/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
