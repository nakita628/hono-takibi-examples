import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://developer.zendesk.com/zendesk/oas.yaml',
  output: './src/routes.ts',
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://example.zendesk.com',
  },
})
