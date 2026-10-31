import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/readmeio/oas-examples/main/3.1/yaml/webhooks.yaml',
  output: './src/3-1-webhooks/routes.ts',
  docs: {
    output: './src/3-1-webhooks/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
