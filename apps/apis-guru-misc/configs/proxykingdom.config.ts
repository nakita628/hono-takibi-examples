import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/proxykingdom.com/v1/openapi.yaml',
  output: './src/proxykingdom/routes.ts',
  docs: {
    output: './src/proxykingdom/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
