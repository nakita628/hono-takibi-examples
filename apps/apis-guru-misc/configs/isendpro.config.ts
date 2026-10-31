import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/isendpro.com/1.1.1/openapi.yaml',
  output: './src/isendpro/routes.ts',
  docs: {
    output: './src/isendpro/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
