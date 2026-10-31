import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/ibanapi.com/1.0.0/openapi.yaml',
  output: './src/ibanapi/routes.ts',
  docs: {
    output: './src/ibanapi/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
