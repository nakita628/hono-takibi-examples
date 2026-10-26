import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // The input can be a URL: hono-takibi fetches and bundles it (external $refs included).
  input: 'https://petstore3.swagger.io/api/v3/openapi.json',
  // Route definitions (createRoute + Zod schemas) in one file.
  output: './src/routes.ts',
  // Markdown API reference. Without an app entry, `curl: true` emits curl commands against `baseUrl`.
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://petstore3.swagger.io/api/v3',
  },
})
