import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/tafqit.herokuapp.com/v1/openapi.yaml',
  output: './src/tafqit-herokuapp/routes.ts',
  docs: {
    output: './src/tafqit-herokuapp/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
