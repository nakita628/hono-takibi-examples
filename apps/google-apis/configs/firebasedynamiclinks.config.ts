import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/firebasedynamiclinks/v1/openapi.yaml',
  output: './src/firebasedynamiclinks/routes.ts',
  docs: {
    output: './src/firebasedynamiclinks/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
