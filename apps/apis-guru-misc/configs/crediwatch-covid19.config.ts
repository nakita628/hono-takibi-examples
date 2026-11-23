import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/crediwatch.com/covid19/1.3.0/openapi.yaml',
  output: './src/crediwatch-covid19/routes.ts',
  template: {},
  type: { output: './src/crediwatch-covid19/types.ts' },
  client: { output: './src/crediwatch-covid19/client.ts', baseUrl: '/' },
  rpc: { output: './src/crediwatch-covid19/rpc.ts', parseResponse: true },
  swr: { output: './src/crediwatch-covid19/hooks/swr.ts' },
  'tanstack-query': { output: './src/crediwatch-covid19/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/crediwatch-covid19/hooks/preact-query.ts' },
  'solid-query': { output: './src/crediwatch-covid19/hooks/solid-query.ts' },
  'vue-query': { output: './src/crediwatch-covid19/hooks/vue-query.ts' },
  'svelte-query': { output: './src/crediwatch-covid19/hooks/svelte-query.ts' },
  'angular-query': { output: './src/crediwatch-covid19/hooks/angular-query.ts' },
  docs: {
    output: './src/crediwatch-covid19/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
