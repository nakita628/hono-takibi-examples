import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/asuarez.dev/searchly/1.0/openapi.yaml',
  output: './src/asuarez-dev-searchly/routes.ts',
  template: {},
  type: { output: './src/asuarez-dev-searchly/types.ts' },
  client: { output: './src/asuarez-dev-searchly/client.ts', baseUrl: '/' },
  rpc: { output: './src/asuarez-dev-searchly/rpc.ts', parseResponse: true },
  swr: { output: './src/asuarez-dev-searchly/hooks/swr.ts' },
  'tanstack-query': { output: './src/asuarez-dev-searchly/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/asuarez-dev-searchly/hooks/preact-query.ts' },
  'solid-query': { output: './src/asuarez-dev-searchly/hooks/solid-query.ts' },
  'vue-query': { output: './src/asuarez-dev-searchly/hooks/vue-query.ts' },
  'svelte-query': { output: './src/asuarez-dev-searchly/hooks/svelte-query.ts' },
  'angular-query': { output: './src/asuarez-dev-searchly/hooks/angular-query.ts' },
  docs: {
    output: './src/asuarez-dev-searchly/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
