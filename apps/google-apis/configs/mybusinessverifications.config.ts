import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/mybusinessverifications/v1/openapi.yaml',
  output: './src/mybusinessverifications/routes.ts',
  docs: {
    output: './src/mybusinessverifications/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
