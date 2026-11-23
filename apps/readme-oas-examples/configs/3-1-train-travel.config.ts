import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/readmeio/oas-examples/main/3.1/yaml/train-travel.yaml',
  output: './src/3-1-train-travel/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/3-1-train-travel/types.ts' },
  client: { output: './src/3-1-train-travel/client.ts', baseUrl: '/' },
  rpc: { output: './src/3-1-train-travel/rpc.ts', parseResponse: true },
  swr: { output: './src/3-1-train-travel/hooks/swr.ts' },
  'tanstack-query': { output: './src/3-1-train-travel/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/3-1-train-travel/hooks/preact-query.ts' },
  'solid-query': { output: './src/3-1-train-travel/hooks/solid-query.ts' },
  'vue-query': { output: './src/3-1-train-travel/hooks/vue-query.ts' },
  'svelte-query': { output: './src/3-1-train-travel/hooks/svelte-query.ts' },
  'angular-query': { output: './src/3-1-train-travel/hooks/angular-query.ts' },
  docs: {
    output: './src/3-1-train-travel/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
