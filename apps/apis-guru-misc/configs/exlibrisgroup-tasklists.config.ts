import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/exlibrisgroup.com/tasklists/1.0/openapi.yaml',
  output: './src/exlibrisgroup-tasklists/routes.ts',
  docs: {
    output: './src/exlibrisgroup-tasklists/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
