import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/visualstudio.com/v1/openapi.yaml',
  output: './src/visualstudio/routes.ts',
  docs: {
    output: './src/visualstudio/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
