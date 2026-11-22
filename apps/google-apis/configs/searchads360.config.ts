import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/searchads360/v0/openapi.yaml',
  output: './src/searchads360/routes.ts',
  template: {},
  type: { output: './src/searchads360/types.ts' },
  client: { output: './src/searchads360/client.ts', baseUrl: '/' },
  rpc: { output: './src/searchads360/rpc.ts', parseResponse: true },
  swr: { output: './src/searchads360/hooks/swr.ts' },
  'tanstack-query': { output: './src/searchads360/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/searchads360/hooks/preact-query.ts' },
  'solid-query': { output: './src/searchads360/hooks/solid-query.ts' },
  'vue-query': { output: './src/searchads360/hooks/vue-query.ts' },
  'svelte-query': { output: './src/searchads360/hooks/svelte-query.ts' },
  'angular-query': { output: './src/searchads360/hooks/angular-query.ts' },
  docs: {
    output: './src/searchads360/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
