import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/nrel.gov/transportation-incentives-laws/0.1.0/openapi.yaml',
  output: './src/nrel-gov-transportation-incentives-laws/routes.ts',
  template: {},
  type: { output: './src/nrel-gov-transportation-incentives-laws/types.ts' },
  client: { output: './src/nrel-gov-transportation-incentives-laws/client.ts', baseUrl: '/' },
  rpc: { output: './src/nrel-gov-transportation-incentives-laws/rpc.ts', parseResponse: true },
  swr: { output: './src/nrel-gov-transportation-incentives-laws/hooks/swr.ts' },
  'tanstack-query': { output: './src/nrel-gov-transportation-incentives-laws/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/nrel-gov-transportation-incentives-laws/hooks/preact-query.ts' },
  'solid-query': { output: './src/nrel-gov-transportation-incentives-laws/hooks/solid-query.ts' },
  'vue-query': { output: './src/nrel-gov-transportation-incentives-laws/hooks/vue-query.ts' },
  'svelte-query': { output: './src/nrel-gov-transportation-incentives-laws/hooks/svelte-query.ts' },
  'angular-query': { output: './src/nrel-gov-transportation-incentives-laws/hooks/angular-query.ts' },
  docs: {
    output: './src/nrel-gov-transportation-incentives-laws/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
