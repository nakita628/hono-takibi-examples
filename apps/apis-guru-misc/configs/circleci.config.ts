import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/circleci.com/v1/openapi.yaml',
  output: './src/circleci/routes.ts',
  docs: {
    output: './src/circleci/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
