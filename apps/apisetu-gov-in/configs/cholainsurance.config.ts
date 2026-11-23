import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/cholainsurance/3.0.0/openapi.yaml',
  output: './src/cholainsurance/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/cholainsurance/types.ts' },
  client: { output: './src/cholainsurance/client.ts', baseUrl: '/' },
  rpc: { output: './src/cholainsurance/rpc.ts', parseResponse: true },
  swr: { output: './src/cholainsurance/hooks/swr.ts' },
  'tanstack-query': { output: './src/cholainsurance/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/cholainsurance/hooks/preact-query.ts' },
  'solid-query': { output: './src/cholainsurance/hooks/solid-query.ts' },
  'vue-query': { output: './src/cholainsurance/hooks/vue-query.ts' },
  'svelte-query': { output: './src/cholainsurance/hooks/svelte-query.ts' },
  'angular-query': { output: './src/cholainsurance/hooks/angular-query.ts' },
  docs: {
    output: './src/cholainsurance/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
