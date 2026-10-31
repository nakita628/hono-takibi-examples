import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/onsched.com/consumer/v1/openapi.yaml',
  output: './src/onsched-consumer/routes.ts',
  docs: {
    output: './src/onsched-consumer/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
