import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/truora.com/1.0.0/openapi.yaml',
  output: './src/truora/routes.ts',
  docs: {
    output: './src/truora/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
