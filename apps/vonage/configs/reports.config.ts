import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/nexmo.com/reports/2.2.2/openapi.yaml',
  output: './src/reports/routes.ts',
  template: {},
  type: { output: './src/reports/types.ts' },
  client: { output: './src/reports/client.ts', baseUrl: '/' },
  rpc: { output: './src/reports/rpc.ts', parseResponse: true },
  swr: { output: './src/reports/hooks/swr.ts' },
  'tanstack-query': { output: './src/reports/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/reports/hooks/preact-query.ts' },
  'solid-query': { output: './src/reports/hooks/solid-query.ts' },
  'vue-query': { output: './src/reports/hooks/vue-query.ts' },
  'svelte-query': { output: './src/reports/hooks/svelte-query.ts' },
  'angular-query': { output: './src/reports/hooks/angular-query.ts' },
  docs: {
    output: './src/reports/api.md',
    curl: true,
    baseUrl: 'https://api.nexmo.com',
  },
})
