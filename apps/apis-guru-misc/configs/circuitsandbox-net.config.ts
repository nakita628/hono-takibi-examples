import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/circuitsandbox.net/2.9.235/openapi.yaml',
  output: './src/circuitsandbox-net/routes.ts',
  docs: {
    output: './src/circuitsandbox-net/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
