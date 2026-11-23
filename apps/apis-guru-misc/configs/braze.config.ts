import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/braze.com/1.0.0/openapi.yaml',
  output: './src/braze/routes.ts',
  template: {},
  type: { output: './src/braze/types.ts' },
  client: { output: './src/braze/client.ts', baseUrl: '/' },
  rpc: { output: './src/braze/rpc.ts', parseResponse: true },
  swr: { output: './src/braze/hooks/swr.ts' },
  'tanstack-query': { output: './src/braze/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/braze/hooks/preact-query.ts' },
  'solid-query': { output: './src/braze/hooks/solid-query.ts' },
  'vue-query': { output: './src/braze/hooks/vue-query.ts' },
  'svelte-query': { output: './src/braze/hooks/svelte-query.ts' },
  'angular-query': { output: './src/braze/hooks/angular-query.ts' },
  docs: {
    output: './src/braze/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
