import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/contract-p.fit/1.0/openapi.yaml',
  output: './src/contract-p-fit/routes.ts',
  docs: {
    output: './src/contract-p-fit/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
