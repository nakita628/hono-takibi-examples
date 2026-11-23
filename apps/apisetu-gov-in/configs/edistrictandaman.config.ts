import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/edistrictandaman/3.0.0/openapi.yaml',
  output: './src/edistrictandaman/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/edistrictandaman/types.ts' },
  client: { output: './src/edistrictandaman/client.ts', baseUrl: '/' },
  rpc: { output: './src/edistrictandaman/rpc.ts', parseResponse: true },
  swr: { output: './src/edistrictandaman/hooks/swr.ts' },
  'tanstack-query': { output: './src/edistrictandaman/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/edistrictandaman/hooks/preact-query.ts' },
  'solid-query': { output: './src/edistrictandaman/hooks/solid-query.ts' },
  'vue-query': { output: './src/edistrictandaman/hooks/vue-query.ts' },
  'svelte-query': { output: './src/edistrictandaman/hooks/svelte-query.ts' },
  'angular-query': { output: './src/edistrictandaman/hooks/angular-query.ts' },
  docs: {
    output: './src/edistrictandaman/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
