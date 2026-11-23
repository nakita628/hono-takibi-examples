import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/circl.lu/hashlookup/1.2/openapi.yaml',
  output: './src/circl-lu-hashlookup/routes.ts',
  template: {},
  type: { output: './src/circl-lu-hashlookup/types.ts' },
  client: { output: './src/circl-lu-hashlookup/client.ts', baseUrl: '/' },
  rpc: { output: './src/circl-lu-hashlookup/rpc.ts', parseResponse: true },
  swr: { output: './src/circl-lu-hashlookup/hooks/swr.ts' },
  'tanstack-query': { output: './src/circl-lu-hashlookup/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/circl-lu-hashlookup/hooks/preact-query.ts' },
  'solid-query': { output: './src/circl-lu-hashlookup/hooks/solid-query.ts' },
  'vue-query': { output: './src/circl-lu-hashlookup/hooks/vue-query.ts' },
  'svelte-query': { output: './src/circl-lu-hashlookup/hooks/svelte-query.ts' },
  'angular-query': { output: './src/circl-lu-hashlookup/hooks/angular-query.ts' },
  docs: {
    output: './src/circl-lu-hashlookup/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
