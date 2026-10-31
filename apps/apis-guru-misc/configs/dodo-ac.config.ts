import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/dodo.ac/1.5.0/openapi.yaml',
  output: './src/dodo-ac/routes.ts',
  docs: {
    output: './src/dodo-ac/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
