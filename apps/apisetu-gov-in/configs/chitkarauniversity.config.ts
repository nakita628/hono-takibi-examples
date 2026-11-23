import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/chitkarauniversity/3.0.0/openapi.yaml',
  output: './src/chitkarauniversity/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/chitkarauniversity/types.ts' },
  client: { output: './src/chitkarauniversity/client.ts', baseUrl: '/' },
  rpc: { output: './src/chitkarauniversity/rpc.ts', parseResponse: true },
  swr: { output: './src/chitkarauniversity/hooks/swr.ts' },
  'tanstack-query': { output: './src/chitkarauniversity/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/chitkarauniversity/hooks/preact-query.ts' },
  'solid-query': { output: './src/chitkarauniversity/hooks/solid-query.ts' },
  'vue-query': { output: './src/chitkarauniversity/hooks/vue-query.ts' },
  'svelte-query': { output: './src/chitkarauniversity/hooks/svelte-query.ts' },
  'angular-query': { output: './src/chitkarauniversity/hooks/angular-query.ts' },
  docs: {
    output: './src/chitkarauniversity/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
