import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/chromeuxreport/v1/openapi.yaml',
  output: './src/chromeuxreport/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/chromeuxreport/types.ts' },
  client: { output: './src/chromeuxreport/client.ts', baseUrl: '/' },
  rpc: { output: './src/chromeuxreport/rpc.ts', parseResponse: true },
  swr: { output: './src/chromeuxreport/hooks/swr.ts' },
  'tanstack-query': { output: './src/chromeuxreport/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/chromeuxreport/hooks/preact-query.ts' },
  'solid-query': { output: './src/chromeuxreport/hooks/solid-query.ts' },
  'vue-query': { output: './src/chromeuxreport/hooks/vue-query.ts' },
  'svelte-query': { output: './src/chromeuxreport/hooks/svelte-query.ts' },
  'angular-query': { output: './src/chromeuxreport/hooks/angular-query.ts' },
  docs: {
    output: './src/chromeuxreport/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
