import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/lifesciences/v2beta/openapi.yaml',
  output: './src/lifesciences/routes.ts',
  template: {},
  type: { output: './src/lifesciences/types.ts' },
  client: { output: './src/lifesciences/client.ts', baseUrl: '/' },
  rpc: { output: './src/lifesciences/rpc.ts', parseResponse: true },
  swr: { output: './src/lifesciences/hooks/swr.ts' },
  'tanstack-query': { output: './src/lifesciences/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/lifesciences/hooks/preact-query.ts' },
  'solid-query': { output: './src/lifesciences/hooks/solid-query.ts' },
  'vue-query': { output: './src/lifesciences/hooks/vue-query.ts' },
  'svelte-query': { output: './src/lifesciences/hooks/svelte-query.ts' },
  'angular-query': { output: './src/lifesciences/hooks/angular-query.ts' },
  docs: {
    output: './src/lifesciences/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
