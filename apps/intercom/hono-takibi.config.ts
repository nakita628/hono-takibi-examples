import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/intercom/Intercom-OpenAPI/main/descriptions/2.17/api.intercom.io.yaml',
  output: './src/routes.ts',
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://api.intercom.io',
  },
})
