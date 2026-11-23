import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/dodo.ac/1.5.0/openapi.yaml',
  output: './src/dodo-ac/routes.ts',
  template: {},
  type: { output: './src/dodo-ac/types.ts' },
  client: { output: './src/dodo-ac/client.ts', baseUrl: '/' },
  rpc: { output: './src/dodo-ac/rpc.ts', parseResponse: true },
  swr: { output: './src/dodo-ac/hooks/swr.ts' },
  'tanstack-query': { output: './src/dodo-ac/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/dodo-ac/hooks/preact-query.ts' },
  'solid-query': { output: './src/dodo-ac/hooks/solid-query.ts' },
  'vue-query': { output: './src/dodo-ac/hooks/vue-query.ts' },
  'svelte-query': { output: './src/dodo-ac/hooks/svelte-query.ts' },
  'angular-query': { output: './src/dodo-ac/hooks/angular-query.ts' },
  docs: {
    output: './src/dodo-ac/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
