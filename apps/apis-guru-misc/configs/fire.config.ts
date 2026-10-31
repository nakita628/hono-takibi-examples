import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/fire.com/1.0/openapi.yaml',
  output: './src/fire/routes.ts',
  docs: {
    output: './src/fire/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
