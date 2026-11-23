import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/interzoid.com/getcurrencyrate/1.0.0/openapi.yaml',
  output: './src/getcurrencyrate/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/getcurrencyrate/types.ts' },
  client: { output: './src/getcurrencyrate/client.ts', baseUrl: '/' },
  rpc: { output: './src/getcurrencyrate/rpc.ts', parseResponse: true },
  swr: { output: './src/getcurrencyrate/hooks/swr.ts' },
  'tanstack-query': { output: './src/getcurrencyrate/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/getcurrencyrate/hooks/preact-query.ts' },
  'solid-query': { output: './src/getcurrencyrate/hooks/solid-query.ts' },
  'vue-query': { output: './src/getcurrencyrate/hooks/vue-query.ts' },
  'svelte-query': { output: './src/getcurrencyrate/hooks/svelte-query.ts' },
  'angular-query': { output: './src/getcurrencyrate/hooks/angular-query.ts' },
  docs: {
    output: './src/getcurrencyrate/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
