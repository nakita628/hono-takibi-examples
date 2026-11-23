import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/stellastra.com/1.0/openapi.yaml',
  output: './src/stellastra/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/stellastra/types.ts' },
  client: { output: './src/stellastra/client.ts', baseUrl: '/' },
  rpc: { output: './src/stellastra/rpc.ts', parseResponse: true },
  swr: { output: './src/stellastra/hooks/swr.ts' },
  'tanstack-query': { output: './src/stellastra/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/stellastra/hooks/preact-query.ts' },
  'solid-query': { output: './src/stellastra/hooks/solid-query.ts' },
  'vue-query': { output: './src/stellastra/hooks/vue-query.ts' },
  'svelte-query': { output: './src/stellastra/hooks/svelte-query.ts' },
  'angular-query': { output: './src/stellastra/hooks/angular-query.ts' },
  docs: {
    output: './src/stellastra/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
