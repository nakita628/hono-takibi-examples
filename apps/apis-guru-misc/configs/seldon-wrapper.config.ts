import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/seldon.local/wrapper/0.1/openapi.yaml',
  output: './src/seldon-wrapper/routes.ts',
  docs: {
    output: './src/seldon-wrapper/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
