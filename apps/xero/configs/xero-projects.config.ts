import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/XeroAPI/Xero-OpenAPI/master/xero-projects.yaml',
  output: './src/xero-projects/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/xero-projects/types.ts' },
  client: { output: './src/xero-projects/client.ts', baseUrl: '/' },
  rpc: { output: './src/xero-projects/rpc.ts', parseResponse: true },
  swr: { output: './src/xero-projects/hooks/swr.ts' },
  'tanstack-query': { output: './src/xero-projects/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/xero-projects/hooks/preact-query.ts' },
  'solid-query': { output: './src/xero-projects/hooks/solid-query.ts' },
  'vue-query': { output: './src/xero-projects/hooks/vue-query.ts' },
  'svelte-query': { output: './src/xero-projects/hooks/svelte-query.ts' },
  'angular-query': { output: './src/xero-projects/hooks/angular-query.ts' },
  docs: {
    output: './src/xero-projects/api.md',
    curl: true,
    baseUrl: 'https://api.xero.com/projects.xro/2.0',
  },
})
