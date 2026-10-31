import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/freetv-app.com/v1/openapi.yaml',
  output: './src/freetv-app/routes.ts',
  docs: {
    output: './src/freetv-app/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
