import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/lambdatest.com/1.0.1/openapi.yaml',
  output: './src/lambdatest/routes.ts',
  docs: {
    output: './src/lambdatest/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
