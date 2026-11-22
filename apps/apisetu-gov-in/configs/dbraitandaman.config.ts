import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/dbraitandaman/3.0.0/openapi.yaml',
  output: './src/dbraitandaman/routes.ts',
  template: {},
  type: { output: './src/dbraitandaman/types.ts' },
  client: { output: './src/dbraitandaman/client.ts', baseUrl: '/' },
  rpc: { output: './src/dbraitandaman/rpc.ts', parseResponse: true },
  swr: { output: './src/dbraitandaman/hooks/swr.ts' },
  'tanstack-query': { output: './src/dbraitandaman/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/dbraitandaman/hooks/preact-query.ts' },
  'solid-query': { output: './src/dbraitandaman/hooks/solid-query.ts' },
  'vue-query': { output: './src/dbraitandaman/hooks/vue-query.ts' },
  'svelte-query': { output: './src/dbraitandaman/hooks/svelte-query.ts' },
  'angular-query': { output: './src/dbraitandaman/hooks/angular-query.ts' },
  docs: {
    output: './src/dbraitandaman/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
