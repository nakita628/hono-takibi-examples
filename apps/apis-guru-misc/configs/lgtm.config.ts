import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/lgtm.com/v1.0/openapi.yaml',
  output: './src/lgtm/routes.ts',
  docs: {
    output: './src/lgtm/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
