import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/exlibrisgroup.com/tasklists/1.0/openapi.yaml',
  output: './src/exlibrisgroup-tasklists/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/exlibrisgroup-tasklists/types.ts' },
  client: { output: './src/exlibrisgroup-tasklists/client.ts', baseUrl: '/' },
  rpc: { output: './src/exlibrisgroup-tasklists/rpc.ts', parseResponse: true },
  swr: { output: './src/exlibrisgroup-tasklists/hooks/swr.ts' },
  'tanstack-query': { output: './src/exlibrisgroup-tasklists/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/exlibrisgroup-tasklists/hooks/preact-query.ts' },
  'solid-query': { output: './src/exlibrisgroup-tasklists/hooks/solid-query.ts' },
  'vue-query': { output: './src/exlibrisgroup-tasklists/hooks/vue-query.ts' },
  'svelte-query': { output: './src/exlibrisgroup-tasklists/hooks/svelte-query.ts' },
  'angular-query': { output: './src/exlibrisgroup-tasklists/hooks/angular-query.ts' },
  docs: {
    output: './src/exlibrisgroup-tasklists/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
