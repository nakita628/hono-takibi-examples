import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/mist.com/0.36.1/openapi.yaml',
  output: './src/mist/routes.ts',
  docs: {
    output: './src/mist/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
