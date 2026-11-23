import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/essentialcontacts/v1/openapi.yaml',
  output: './src/essentialcontacts/routes.ts',
  template: {},
  type: { output: './src/essentialcontacts/types.ts' },
  client: { output: './src/essentialcontacts/client.ts', baseUrl: '/' },
  rpc: { output: './src/essentialcontacts/rpc.ts', parseResponse: true },
  swr: { output: './src/essentialcontacts/hooks/swr.ts' },
  'tanstack-query': { output: './src/essentialcontacts/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/essentialcontacts/hooks/preact-query.ts' },
  'solid-query': { output: './src/essentialcontacts/hooks/solid-query.ts' },
  'vue-query': { output: './src/essentialcontacts/hooks/vue-query.ts' },
  'svelte-query': { output: './src/essentialcontacts/hooks/svelte-query.ts' },
  'angular-query': { output: './src/essentialcontacts/hooks/angular-query.ts' },
  docs: {
    output: './src/essentialcontacts/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
