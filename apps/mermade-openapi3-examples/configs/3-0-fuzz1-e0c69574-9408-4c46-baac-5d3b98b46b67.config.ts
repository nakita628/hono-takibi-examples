import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Mermade/openapi3-examples/master/3.0/pass/fuzz1/e0c69574-9408-4c46-baac-5d3b98b46b67.yaml',
  output: './src/3-0-fuzz1-e0c69574-9408-4c46-baac-5d3b98b46b67/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/3-0-fuzz1-e0c69574-9408-4c46-baac-5d3b98b46b67/types.ts' },
  client: { output: './src/3-0-fuzz1-e0c69574-9408-4c46-baac-5d3b98b46b67/client.ts', baseUrl: '/' },
  rpc: { output: './src/3-0-fuzz1-e0c69574-9408-4c46-baac-5d3b98b46b67/rpc.ts', parseResponse: true },
  swr: { output: './src/3-0-fuzz1-e0c69574-9408-4c46-baac-5d3b98b46b67/hooks/swr.ts' },
  'tanstack-query': { output: './src/3-0-fuzz1-e0c69574-9408-4c46-baac-5d3b98b46b67/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/3-0-fuzz1-e0c69574-9408-4c46-baac-5d3b98b46b67/hooks/preact-query.ts' },
  'solid-query': { output: './src/3-0-fuzz1-e0c69574-9408-4c46-baac-5d3b98b46b67/hooks/solid-query.ts' },
  'vue-query': { output: './src/3-0-fuzz1-e0c69574-9408-4c46-baac-5d3b98b46b67/hooks/vue-query.ts' },
  'svelte-query': { output: './src/3-0-fuzz1-e0c69574-9408-4c46-baac-5d3b98b46b67/hooks/svelte-query.ts' },
  'angular-query': { output: './src/3-0-fuzz1-e0c69574-9408-4c46-baac-5d3b98b46b67/hooks/angular-query.ts' },
  docs: {
    output: './src/3-0-fuzz1-e0c69574-9408-4c46-baac-5d3b98b46b67/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
