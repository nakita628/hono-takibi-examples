import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/climate.com/4.0.11/openapi.yaml',
  output: './src/climate/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/climate/types.ts' },
  client: { output: './src/climate/client.ts', baseUrl: '/' },
  rpc: { output: './src/climate/rpc.ts', parseResponse: true },
  swr: { output: './src/climate/hooks/swr.ts' },
  'tanstack-query': { output: './src/climate/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/climate/hooks/preact-query.ts' },
  'solid-query': { output: './src/climate/hooks/solid-query.ts' },
  'vue-query': { output: './src/climate/hooks/vue-query.ts' },
  'svelte-query': { output: './src/climate/hooks/svelte-query.ts' },
  'angular-query': { output: './src/climate/hooks/angular-query.ts' },
  docs: {
    output: './src/climate/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
