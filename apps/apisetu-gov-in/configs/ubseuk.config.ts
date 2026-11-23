import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/ubseuk/3.0.0/openapi.yaml',
  output: './src/ubseuk/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/ubseuk/types.ts' },
  client: { output: './src/ubseuk/client.ts', baseUrl: '/' },
  rpc: { output: './src/ubseuk/rpc.ts', parseResponse: true },
  swr: { output: './src/ubseuk/hooks/swr.ts' },
  'tanstack-query': { output: './src/ubseuk/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/ubseuk/hooks/preact-query.ts' },
  'solid-query': { output: './src/ubseuk/hooks/solid-query.ts' },
  'vue-query': { output: './src/ubseuk/hooks/vue-query.ts' },
  'svelte-query': { output: './src/ubseuk/hooks/svelte-query.ts' },
  'angular-query': { output: './src/ubseuk/hooks/angular-query.ts' },
  docs: {
    output: './src/ubseuk/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
