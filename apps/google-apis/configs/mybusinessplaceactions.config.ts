import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/mybusinessplaceactions/v1/openapi.yaml',
  output: './src/mybusinessplaceactions/routes.ts',
  docs: {
    output: './src/mybusinessplaceactions/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
