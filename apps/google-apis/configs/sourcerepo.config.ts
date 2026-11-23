import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/sourcerepo/v1/openapi.yaml',
  output: './src/sourcerepo/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/sourcerepo/types.ts' },
  client: { output: './src/sourcerepo/client.ts', baseUrl: '/' },
  rpc: { output: './src/sourcerepo/rpc.ts', parseResponse: true },
  swr: { output: './src/sourcerepo/hooks/swr.ts' },
  'tanstack-query': { output: './src/sourcerepo/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/sourcerepo/hooks/preact-query.ts' },
  'solid-query': { output: './src/sourcerepo/hooks/solid-query.ts' },
  'vue-query': { output: './src/sourcerepo/hooks/vue-query.ts' },
  'svelte-query': { output: './src/sourcerepo/hooks/svelte-query.ts' },
  'angular-query': { output: './src/sourcerepo/hooks/angular-query.ts' },
  docs: {
    output: './src/sourcerepo/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
