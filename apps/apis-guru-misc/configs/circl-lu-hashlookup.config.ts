import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/circl.lu/hashlookup/1.2/openapi.yaml',
  output: './src/circl-lu-hashlookup/routes.ts',
  docs: {
    output: './src/circl-lu-hashlookup/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
