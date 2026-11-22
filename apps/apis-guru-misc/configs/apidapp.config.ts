import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apidapp.com/2019-02-14T164701Z/openapi.yaml',
  output: './src/apidapp/routes.ts',
  template: {},
  type: { output: './src/apidapp/types.ts' },
  client: { output: './src/apidapp/client.ts', baseUrl: '/' },
  rpc: { output: './src/apidapp/rpc.ts', parseResponse: true },
  swr: { output: './src/apidapp/hooks/swr.ts' },
  'tanstack-query': { output: './src/apidapp/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/apidapp/hooks/preact-query.ts' },
  'solid-query': { output: './src/apidapp/hooks/solid-query.ts' },
  'vue-query': { output: './src/apidapp/hooks/vue-query.ts' },
  'svelte-query': { output: './src/apidapp/hooks/svelte-query.ts' },
  'angular-query': { output: './src/apidapp/hooks/angular-query.ts' },
  docs: {
    output: './src/apidapp/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
