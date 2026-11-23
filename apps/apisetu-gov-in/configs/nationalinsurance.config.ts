import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/nationalinsurance/3.0.0/openapi.yaml',
  output: './src/nationalinsurance/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/nationalinsurance/types.ts' },
  client: { output: './src/nationalinsurance/client.ts', baseUrl: '/' },
  rpc: { output: './src/nationalinsurance/rpc.ts', parseResponse: true },
  swr: { output: './src/nationalinsurance/hooks/swr.ts' },
  'tanstack-query': { output: './src/nationalinsurance/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/nationalinsurance/hooks/preact-query.ts' },
  'solid-query': { output: './src/nationalinsurance/hooks/solid-query.ts' },
  'vue-query': { output: './src/nationalinsurance/hooks/vue-query.ts' },
  'svelte-query': { output: './src/nationalinsurance/hooks/svelte-query.ts' },
  'angular-query': { output: './src/nationalinsurance/hooks/angular-query.ts' },
  docs: {
    output: './src/nationalinsurance/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
