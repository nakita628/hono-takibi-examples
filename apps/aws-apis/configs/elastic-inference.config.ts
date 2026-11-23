import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/elastic-inference/2017-07-25/openapi.yaml',
  output: './src/elastic-inference/routes.ts',
  template: {},
  type: { output: './src/elastic-inference/types.ts' },
  client: { output: './src/elastic-inference/client.ts', baseUrl: '/' },
  rpc: { output: './src/elastic-inference/rpc.ts', parseResponse: true },
  swr: { output: './src/elastic-inference/hooks/swr.ts' },
  'tanstack-query': { output: './src/elastic-inference/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/elastic-inference/hooks/preact-query.ts' },
  'solid-query': { output: './src/elastic-inference/hooks/solid-query.ts' },
  'vue-query': { output: './src/elastic-inference/hooks/vue-query.ts' },
  'svelte-query': { output: './src/elastic-inference/hooks/svelte-query.ts' },
  'angular-query': { output: './src/elastic-inference/hooks/angular-query.ts' },
  docs: {
    output: './src/elastic-inference/api.md',
    curl: true,
    baseUrl: 'https://elastic-inference.us-east-1.amazonaws.com',
  },
})
