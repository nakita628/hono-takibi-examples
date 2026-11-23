import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/nytimes.com/archive/1.0.0/openapi.yaml',
  output: './src/archive/routes.ts',
  template: {},
  type: { output: './src/archive/types.ts' },
  client: { output: './src/archive/client.ts', baseUrl: '/' },
  rpc: { output: './src/archive/rpc.ts', parseResponse: true },
  swr: { output: './src/archive/hooks/swr.ts' },
  'tanstack-query': { output: './src/archive/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/archive/hooks/preact-query.ts' },
  'solid-query': { output: './src/archive/hooks/solid-query.ts' },
  'vue-query': { output: './src/archive/hooks/vue-query.ts' },
  'svelte-query': { output: './src/archive/hooks/svelte-query.ts' },
  'angular-query': { output: './src/archive/hooks/angular-query.ts' },
  docs: {
    output: './src/archive/api.md',
    curl: true,
    baseUrl: 'https://api.nytimes.com/svc',
  },
})
