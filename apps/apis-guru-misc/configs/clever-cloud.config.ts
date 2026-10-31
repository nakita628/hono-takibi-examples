import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/clever-cloud.com/1.0.0/openapi.yaml',
  output: './src/clever-cloud/routes.ts',
  docs: {
    output: './src/clever-cloud/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
