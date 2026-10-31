import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/chompthis.com/1.0.0-oas3/openapi.yaml',
  output: './src/chompthis/routes.ts',
  docs: {
    output: './src/chompthis/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
