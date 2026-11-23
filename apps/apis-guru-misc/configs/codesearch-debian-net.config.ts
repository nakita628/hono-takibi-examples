import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/codesearch.debian.net/1.4.0/openapi.yaml',
  output: './src/codesearch-debian-net/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/codesearch-debian-net/types.ts' },
  client: { output: './src/codesearch-debian-net/client.ts', baseUrl: '/' },
  rpc: { output: './src/codesearch-debian-net/rpc.ts', parseResponse: true },
  swr: { output: './src/codesearch-debian-net/hooks/swr.ts' },
  'tanstack-query': { output: './src/codesearch-debian-net/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/codesearch-debian-net/hooks/preact-query.ts' },
  'solid-query': { output: './src/codesearch-debian-net/hooks/solid-query.ts' },
  'vue-query': { output: './src/codesearch-debian-net/hooks/vue-query.ts' },
  'svelte-query': { output: './src/codesearch-debian-net/hooks/svelte-query.ts' },
  'angular-query': { output: './src/codesearch-debian-net/hooks/angular-query.ts' },
  docs: {
    output: './src/codesearch-debian-net/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
