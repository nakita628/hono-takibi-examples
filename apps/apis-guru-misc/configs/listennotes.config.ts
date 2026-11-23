import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/listennotes.com/2.0/openapi.yaml',
  output: './src/listennotes/routes.ts',
  template: {},
  type: { output: './src/listennotes/types.ts' },
  client: { output: './src/listennotes/client.ts', baseUrl: '/' },
  rpc: { output: './src/listennotes/rpc.ts', parseResponse: true },
  swr: { output: './src/listennotes/hooks/swr.ts' },
  'tanstack-query': { output: './src/listennotes/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/listennotes/hooks/preact-query.ts' },
  'solid-query': { output: './src/listennotes/hooks/solid-query.ts' },
  'vue-query': { output: './src/listennotes/hooks/vue-query.ts' },
  'svelte-query': { output: './src/listennotes/hooks/svelte-query.ts' },
  'angular-query': { output: './src/listennotes/hooks/angular-query.ts' },
  docs: {
    output: './src/listennotes/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
