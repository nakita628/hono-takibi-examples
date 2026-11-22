import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/rapidapi.com/ecowetter/1.0.0/openapi.yaml',
  output: './src/rapidapi-ecowetter/routes.ts',
  template: {},
  type: { output: './src/rapidapi-ecowetter/types.ts' },
  client: { output: './src/rapidapi-ecowetter/client.ts', baseUrl: '/' },
  rpc: { output: './src/rapidapi-ecowetter/rpc.ts', parseResponse: true },
  swr: { output: './src/rapidapi-ecowetter/hooks/swr.ts' },
  'tanstack-query': { output: './src/rapidapi-ecowetter/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/rapidapi-ecowetter/hooks/preact-query.ts' },
  'solid-query': { output: './src/rapidapi-ecowetter/hooks/solid-query.ts' },
  'vue-query': { output: './src/rapidapi-ecowetter/hooks/vue-query.ts' },
  'svelte-query': { output: './src/rapidapi-ecowetter/hooks/svelte-query.ts' },
  'angular-query': { output: './src/rapidapi-ecowetter/hooks/angular-query.ts' },
  docs: {
    output: './src/rapidapi-ecowetter/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
