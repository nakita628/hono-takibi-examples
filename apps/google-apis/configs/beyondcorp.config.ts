import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/beyondcorp/v1/openapi.yaml',
  output: './src/beyondcorp/routes.ts',
  template: {},
  type: { output: './src/beyondcorp/types.ts' },
  client: { output: './src/beyondcorp/client.ts', baseUrl: '/' },
  rpc: { output: './src/beyondcorp/rpc.ts', parseResponse: true },
  swr: { output: './src/beyondcorp/hooks/swr.ts' },
  'tanstack-query': { output: './src/beyondcorp/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/beyondcorp/hooks/preact-query.ts' },
  'solid-query': { output: './src/beyondcorp/hooks/solid-query.ts' },
  'vue-query': { output: './src/beyondcorp/hooks/vue-query.ts' },
  'svelte-query': { output: './src/beyondcorp/hooks/svelte-query.ts' },
  'angular-query': { output: './src/beyondcorp/hooks/angular-query.ts' },
  docs: {
    output: './src/beyondcorp/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
