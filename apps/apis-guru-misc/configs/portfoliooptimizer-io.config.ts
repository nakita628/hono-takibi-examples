import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/portfoliooptimizer.io/1.0.9/openapi.yaml',
  output: './src/portfoliooptimizer-io/routes.ts',
  docs: {
    output: './src/portfoliooptimizer-io/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
