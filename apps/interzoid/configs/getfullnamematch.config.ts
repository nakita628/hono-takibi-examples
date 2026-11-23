import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/interzoid.com/getfullnamematch/1.0.0/openapi.yaml',
  output: './src/getfullnamematch/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/getfullnamematch/types.ts' },
  client: { output: './src/getfullnamematch/client.ts', baseUrl: '/' },
  rpc: { output: './src/getfullnamematch/rpc.ts', parseResponse: true },
  swr: { output: './src/getfullnamematch/hooks/swr.ts' },
  'tanstack-query': { output: './src/getfullnamematch/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/getfullnamematch/hooks/preact-query.ts' },
  'solid-query': { output: './src/getfullnamematch/hooks/solid-query.ts' },
  'vue-query': { output: './src/getfullnamematch/hooks/vue-query.ts' },
  'svelte-query': { output: './src/getfullnamematch/hooks/svelte-query.ts' },
  'angular-query': { output: './src/getfullnamematch/hooks/angular-query.ts' },
  docs: {
    output: './src/getfullnamematch/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
