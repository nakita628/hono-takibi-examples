import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/files.com/0.0.1/openapi.yaml',
  output: './src/files/routes.ts',
  docs: {
    output: './src/files/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
