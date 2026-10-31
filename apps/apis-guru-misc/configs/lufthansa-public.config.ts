import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/lufthansa.com/public/1.0/openapi.yaml',
  output: './src/lufthansa-public/routes.ts',
  docs: {
    output: './src/lufthansa-public/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
