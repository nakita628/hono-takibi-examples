import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/mediastore-data/2017-09-01/openapi.yaml',
  output: './src/mediastore-data/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/mediastore-data/types.ts' },
  client: { output: './src/mediastore-data/client.ts', baseUrl: '/' },
  rpc: { output: './src/mediastore-data/rpc.ts', parseResponse: true },
  swr: { output: './src/mediastore-data/hooks/swr.ts' },
  'tanstack-query': { output: './src/mediastore-data/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/mediastore-data/hooks/preact-query.ts' },
  'solid-query': { output: './src/mediastore-data/hooks/solid-query.ts' },
  'vue-query': { output: './src/mediastore-data/hooks/vue-query.ts' },
  'svelte-query': { output: './src/mediastore-data/hooks/svelte-query.ts' },
  'angular-query': { output: './src/mediastore-data/hooks/angular-query.ts' },
  docs: {
    output: './src/mediastore-data/api.md',
    curl: true,
    baseUrl: 'https://mediastore-data.us-east-1.amazonaws.com',
  },
})
