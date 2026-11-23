import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/forecastquery/2018-06-26/openapi.yaml',
  output: './src/forecastquery/routes.ts',
  template: {},
  type: { output: './src/forecastquery/types.ts' },
  client: { output: './src/forecastquery/client.ts', baseUrl: '/' },
  rpc: { output: './src/forecastquery/rpc.ts', parseResponse: true },
  swr: { output: './src/forecastquery/hooks/swr.ts' },
  'tanstack-query': { output: './src/forecastquery/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/forecastquery/hooks/preact-query.ts' },
  'solid-query': { output: './src/forecastquery/hooks/solid-query.ts' },
  'vue-query': { output: './src/forecastquery/hooks/vue-query.ts' },
  'svelte-query': { output: './src/forecastquery/hooks/svelte-query.ts' },
  'angular-query': { output: './src/forecastquery/hooks/angular-query.ts' },
  docs: {
    output: './src/forecastquery/api.md',
    curl: true,
    baseUrl: 'https://forecastquery.us-east-1.amazonaws.com',
  },
})
