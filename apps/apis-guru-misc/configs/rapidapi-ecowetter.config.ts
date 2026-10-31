import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/rapidapi.com/ecowetter/1.0.0/openapi.yaml',
  output: './src/rapidapi-ecowetter/routes.ts',
  docs: {
    output: './src/rapidapi-ecowetter/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
