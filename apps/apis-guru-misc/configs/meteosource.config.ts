import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/meteosource.com/v1/openapi.yaml',
  output: './src/meteosource/routes.ts',
  docs: {
    output: './src/meteosource/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
