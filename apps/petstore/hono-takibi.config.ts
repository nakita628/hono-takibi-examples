import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // The input can be a URL: hono-takibi fetches and bundles it (external $refs included).
  input: 'https://petstore3.swagger.io/api/v3/openapi.json',
  // Route definitions (createRoute + Zod schemas) in one file.
  output: './src/routes.ts',
  template: {},
  type: { output: './src/types.ts' },
  client: { output: './src/client.ts', baseUrl: '/' },
  rpc: { output: './src/rpc.ts', parseResponse: true },
  swr: { output: './src/hooks/swr.ts' },
  'tanstack-query': { output: './src/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/hooks/preact-query.ts' },
  'solid-query': { output: './src/hooks/solid-query.ts' },
  'vue-query': { output: './src/hooks/vue-query.ts' },
  'svelte-query': { output: './src/hooks/svelte-query.ts' },
  'angular-query': { output: './src/hooks/angular-query.ts' },
  // Markdown API reference. Without an app entry, `curl: true` emits curl commands against `baseUrl`.
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://petstore3.swagger.io/api/v3',
  },
})
