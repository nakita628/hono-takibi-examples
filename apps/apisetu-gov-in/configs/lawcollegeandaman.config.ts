import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/lawcollegeandaman/3.0.0/openapi.yaml',
  output: './src/lawcollegeandaman/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/lawcollegeandaman/types.ts' },
  client: { output: './src/lawcollegeandaman/client.ts', baseUrl: '/' },
  rpc: { output: './src/lawcollegeandaman/rpc.ts', parseResponse: true },
  swr: { output: './src/lawcollegeandaman/hooks/swr.ts' },
  'tanstack-query': { output: './src/lawcollegeandaman/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/lawcollegeandaman/hooks/preact-query.ts' },
  'solid-query': { output: './src/lawcollegeandaman/hooks/solid-query.ts' },
  'vue-query': { output: './src/lawcollegeandaman/hooks/vue-query.ts' },
  'svelte-query': { output: './src/lawcollegeandaman/hooks/svelte-query.ts' },
  'angular-query': { output: './src/lawcollegeandaman/hooks/angular-query.ts' },
  docs: {
    output: './src/lawcollegeandaman/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
