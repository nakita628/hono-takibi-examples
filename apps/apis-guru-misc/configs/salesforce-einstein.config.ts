import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/salesforce.local/einstein/2.0.1/openapi.yaml',
  output: './src/salesforce-einstein/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/salesforce-einstein/types.ts' },
  client: { output: './src/salesforce-einstein/client.ts', baseUrl: '/' },
  rpc: { output: './src/salesforce-einstein/rpc.ts', parseResponse: true },
  swr: { output: './src/salesforce-einstein/hooks/swr.ts' },
  'tanstack-query': { output: './src/salesforce-einstein/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/salesforce-einstein/hooks/preact-query.ts' },
  'solid-query': { output: './src/salesforce-einstein/hooks/solid-query.ts' },
  'vue-query': { output: './src/salesforce-einstein/hooks/vue-query.ts' },
  'svelte-query': { output: './src/salesforce-einstein/hooks/svelte-query.ts' },
  'angular-query': { output: './src/salesforce-einstein/hooks/angular-query.ts' },
  docs: {
    output: './src/salesforce-einstein/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
