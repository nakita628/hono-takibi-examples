import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/just-eat.co.uk/1.0.0/openapi.yaml',
  output: './src/just-eat-co-uk/routes.ts',
  docs: {
    output: './src/just-eat-co-uk/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
