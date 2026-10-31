import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/shutterstock.com/1.1.32/openapi.yaml',
  output: './src/shutterstock/routes.ts',
  docs: {
    output: './src/shutterstock/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
