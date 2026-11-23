import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/gauhati/3.0.0/openapi.yaml',
  output: './src/gauhati/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/gauhati/types.ts' },
  client: { output: './src/gauhati/client.ts', baseUrl: '/' },
  rpc: { output: './src/gauhati/rpc.ts', parseResponse: true },
  swr: { output: './src/gauhati/hooks/swr.ts' },
  'tanstack-query': { output: './src/gauhati/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/gauhati/hooks/preact-query.ts' },
  'solid-query': { output: './src/gauhati/hooks/solid-query.ts' },
  'vue-query': { output: './src/gauhati/hooks/vue-query.ts' },
  'svelte-query': { output: './src/gauhati/hooks/svelte-query.ts' },
  'angular-query': { output: './src/gauhati/hooks/angular-query.ts' },
  docs: {
    output: './src/gauhati/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
