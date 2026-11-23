import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/memcache/v1beta2/openapi.yaml',
  output: './src/memcache/routes.ts',
  template: {},
  type: { output: './src/memcache/types.ts' },
  client: { output: './src/memcache/client.ts', baseUrl: '/' },
  rpc: { output: './src/memcache/rpc.ts', parseResponse: true },
  swr: { output: './src/memcache/hooks/swr.ts' },
  'tanstack-query': { output: './src/memcache/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/memcache/hooks/preact-query.ts' },
  'solid-query': { output: './src/memcache/hooks/solid-query.ts' },
  'vue-query': { output: './src/memcache/hooks/vue-query.ts' },
  'svelte-query': { output: './src/memcache/hooks/svelte-query.ts' },
  'angular-query': { output: './src/memcache/hooks/angular-query.ts' },
  docs: {
    output: './src/memcache/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
