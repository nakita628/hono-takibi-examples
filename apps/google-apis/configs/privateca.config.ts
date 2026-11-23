import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/privateca/v1beta1/openapi.yaml',
  output: './src/privateca/routes.ts',
  template: {},
  type: { output: './src/privateca/types.ts' },
  client: { output: './src/privateca/client.ts', baseUrl: '/' },
  rpc: { output: './src/privateca/rpc.ts', parseResponse: true },
  swr: { output: './src/privateca/hooks/swr.ts' },
  'tanstack-query': { output: './src/privateca/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/privateca/hooks/preact-query.ts' },
  'solid-query': { output: './src/privateca/hooks/solid-query.ts' },
  'vue-query': { output: './src/privateca/hooks/vue-query.ts' },
  'svelte-query': { output: './src/privateca/hooks/svelte-query.ts' },
  'angular-query': { output: './src/privateca/hooks/angular-query.ts' },
  docs: {
    output: './src/privateca/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
