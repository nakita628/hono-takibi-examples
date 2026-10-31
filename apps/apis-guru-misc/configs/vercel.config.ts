import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/vercel.com/0.0.1/openapi.yaml',
  output: './src/vercel/routes.ts',
  docs: {
    output: './src/vercel/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
