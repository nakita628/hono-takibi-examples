import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/parliament.uk/erskine-may/v1/openapi.yaml',
  output: './src/erskine-may/routes.ts',
  docs: {
    output: './src/erskine-may/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
