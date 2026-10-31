import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/figshare.com/2.0.0/openapi.yaml',
  output: './src/figshare/routes.ts',
  docs: {
    output: './src/figshare/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
