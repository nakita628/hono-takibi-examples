import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/change.local/v1/openapi.yaml',
  output: './src/change/routes.ts',
  template: {},
  type: { output: './src/change/types.ts' },
  client: { output: './src/change/client.ts', baseUrl: '/' },
  rpc: { output: './src/change/rpc.ts', parseResponse: true },
  swr: { output: './src/change/hooks/swr.ts' },
  'tanstack-query': { output: './src/change/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/change/hooks/preact-query.ts' },
  'solid-query': { output: './src/change/hooks/solid-query.ts' },
  'vue-query': { output: './src/change/hooks/vue-query.ts' },
  'svelte-query': { output: './src/change/hooks/svelte-query.ts' },
  'angular-query': { output: './src/change/hooks/angular-query.ts' },
  docs: {
    output: './src/change/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
