import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // Algolia Search API, bundled from the official multi-file spec:
  // https://github.com/algolia/api-clients-automation/tree/main/specs/search
  input:
    'https://raw.githubusercontent.com/algolia/api-clients-automation/main/specs/bundled/search.yml',
  output: './src/routes.ts',
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://{appId}.algolia.net',
  },
})
