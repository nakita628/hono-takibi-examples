import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/sinao.app/1.1.0/openapi.yaml',
  output: './src/sinao-app/routes.ts',
  docs: {
    output: './src/sinao-app/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
