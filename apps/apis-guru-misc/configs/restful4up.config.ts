import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/restful4up.local/1.0.0/openapi.yaml',
  output: './src/restful4up/routes.ts',
  docs: {
    output: './src/restful4up/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
