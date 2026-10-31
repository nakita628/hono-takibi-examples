import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/daniweb.com/4/openapi.yaml',
  output: './src/daniweb/routes.ts',
  docs: {
    output: './src/daniweb/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
