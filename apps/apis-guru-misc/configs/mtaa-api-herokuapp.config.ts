import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/mtaa-api.herokuapp.com/1.0/openapi.yaml',
  output: './src/mtaa-api-herokuapp/routes.ts',
  docs: {
    output: './src/mtaa-api-herokuapp/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
