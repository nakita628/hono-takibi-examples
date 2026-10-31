import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/onsched.com/utility/v1/openapi.yaml',
  output: './src/onsched-utility/routes.ts',
  docs: {
    output: './src/onsched-utility/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
