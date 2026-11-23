import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/neowsapp.com/1.0/openapi.yaml',
  output: './src/neowsapp/routes.ts',
  template: {},
  type: { output: './src/neowsapp/types.ts' },
  client: { output: './src/neowsapp/client.ts', baseUrl: '/' },
  rpc: { output: './src/neowsapp/rpc.ts', parseResponse: true },
  swr: { output: './src/neowsapp/hooks/swr.ts' },
  'tanstack-query': { output: './src/neowsapp/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/neowsapp/hooks/preact-query.ts' },
  'solid-query': { output: './src/neowsapp/hooks/solid-query.ts' },
  'vue-query': { output: './src/neowsapp/hooks/vue-query.ts' },
  'svelte-query': { output: './src/neowsapp/hooks/svelte-query.ts' },
  'angular-query': { output: './src/neowsapp/hooks/angular-query.ts' },
  docs: {
    output: './src/neowsapp/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
