import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // bunq API, official OpenAPI spec:
  // https://github.com/bunq/doc/blob/1d5e1e0eba19a91a2b21bee25780f124c9743711/swagger.json
  input: 'https://raw.githubusercontent.com/bunq/doc/master/swagger.json',
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
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://api.bunq.com/v1',
  },
})
