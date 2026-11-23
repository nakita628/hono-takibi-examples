import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/content/v2.1/openapi.yaml',
  output: './src/content/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/content/types.ts' },
  client: { output: './src/content/client.ts', baseUrl: '/' },
  rpc: { output: './src/content/rpc.ts', parseResponse: true },
  swr: { output: './src/content/hooks/swr.ts' },
  'tanstack-query': { output: './src/content/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/content/hooks/preact-query.ts' },
  'solid-query': { output: './src/content/hooks/solid-query.ts' },
  'vue-query': { output: './src/content/hooks/vue-query.ts' },
  'svelte-query': { output: './src/content/hooks/svelte-query.ts' },
  'angular-query': { output: './src/content/hooks/angular-query.ts' },
  docs: {
    output: './src/content/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
