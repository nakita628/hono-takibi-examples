import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/transportan/3.0.0/openapi.yaml',
  output: './src/transportan/routes.ts',
  template: {},
  type: { output: './src/transportan/types.ts' },
  client: { output: './src/transportan/client.ts', baseUrl: '/' },
  rpc: { output: './src/transportan/rpc.ts', parseResponse: true },
  swr: { output: './src/transportan/hooks/swr.ts' },
  'tanstack-query': { output: './src/transportan/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/transportan/hooks/preact-query.ts' },
  'solid-query': { output: './src/transportan/hooks/solid-query.ts' },
  'vue-query': { output: './src/transportan/hooks/vue-query.ts' },
  'svelte-query': { output: './src/transportan/hooks/svelte-query.ts' },
  'angular-query': { output: './src/transportan/hooks/angular-query.ts' },
  docs: {
    output: './src/transportan/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
