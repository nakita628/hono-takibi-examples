import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/googleapis.com/dns/v2/openapi.yaml',
  output: './src/dns/routes.ts',
  template: {},
  type: { output: './src/dns/types.ts' },
  client: { output: './src/dns/client.ts', baseUrl: '/' },
  rpc: { output: './src/dns/rpc.ts', parseResponse: true },
  swr: { output: './src/dns/hooks/swr.ts' },
  'tanstack-query': { output: './src/dns/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/dns/hooks/preact-query.ts' },
  'solid-query': { output: './src/dns/hooks/solid-query.ts' },
  'vue-query': { output: './src/dns/hooks/vue-query.ts' },
  'svelte-query': { output: './src/dns/hooks/svelte-query.ts' },
  'angular-query': { output: './src/dns/hooks/angular-query.ts' },
  docs: {
    output: './src/dns/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
