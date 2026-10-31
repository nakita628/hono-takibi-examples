import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/easypdfserver.com/1/openapi.yaml',
  output: './src/easypdfserver/routes.ts',
  docs: {
    output: './src/easypdfserver/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
