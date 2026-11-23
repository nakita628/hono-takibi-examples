import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/rapidapi.com/dynamicdocs/1.0/openapi.yaml',
  output: './src/rapidapi-dynamicdocs/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/rapidapi-dynamicdocs/types.ts' },
  client: { output: './src/rapidapi-dynamicdocs/client.ts', baseUrl: '/' },
  rpc: { output: './src/rapidapi-dynamicdocs/rpc.ts', parseResponse: true },
  swr: { output: './src/rapidapi-dynamicdocs/hooks/swr.ts' },
  'tanstack-query': { output: './src/rapidapi-dynamicdocs/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/rapidapi-dynamicdocs/hooks/preact-query.ts' },
  'solid-query': { output: './src/rapidapi-dynamicdocs/hooks/solid-query.ts' },
  'vue-query': { output: './src/rapidapi-dynamicdocs/hooks/vue-query.ts' },
  'svelte-query': { output: './src/rapidapi-dynamicdocs/hooks/svelte-query.ts' },
  'angular-query': { output: './src/rapidapi-dynamicdocs/hooks/angular-query.ts' },
  docs: {
    output: './src/rapidapi-dynamicdocs/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
