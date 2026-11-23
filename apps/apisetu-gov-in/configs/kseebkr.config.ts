import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/kseebkr/3.0.0/openapi.yaml',
  output: './src/kseebkr/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/kseebkr/types.ts' },
  client: { output: './src/kseebkr/client.ts', baseUrl: '/' },
  rpc: { output: './src/kseebkr/rpc.ts', parseResponse: true },
  swr: { output: './src/kseebkr/hooks/swr.ts' },
  'tanstack-query': { output: './src/kseebkr/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/kseebkr/hooks/preact-query.ts' },
  'solid-query': { output: './src/kseebkr/hooks/solid-query.ts' },
  'vue-query': { output: './src/kseebkr/hooks/vue-query.ts' },
  'svelte-query': { output: './src/kseebkr/hooks/svelte-query.ts' },
  'angular-query': { output: './src/kseebkr/hooks/angular-query.ts' },
  docs: {
    output: './src/kseebkr/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
