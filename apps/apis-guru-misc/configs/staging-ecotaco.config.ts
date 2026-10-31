import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/staging-ecotaco.com/1.0.0/openapi.yaml',
  output: './src/staging-ecotaco/routes.ts',
  docs: {
    output: './src/staging-ecotaco/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
