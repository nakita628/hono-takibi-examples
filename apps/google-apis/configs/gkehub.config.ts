import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/gkehub/v1beta1/openapi.yaml',
  output: './src/gkehub/routes.ts',
  docs: {
    output: './src/gkehub/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
