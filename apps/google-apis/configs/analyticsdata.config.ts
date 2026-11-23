import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/googleapis.com/analyticsdata/v1beta/openapi.yaml',
  output: './src/analyticsdata/routes.ts',
  template: {},
  type: { output: './src/analyticsdata/types.ts' },
  client: { output: './src/analyticsdata/client.ts', baseUrl: '/' },
  rpc: { output: './src/analyticsdata/rpc.ts', parseResponse: true },
  swr: { output: './src/analyticsdata/hooks/swr.ts' },
  'tanstack-query': { output: './src/analyticsdata/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/analyticsdata/hooks/preact-query.ts' },
  'solid-query': { output: './src/analyticsdata/hooks/solid-query.ts' },
  'vue-query': { output: './src/analyticsdata/hooks/vue-query.ts' },
  'svelte-query': { output: './src/analyticsdata/hooks/svelte-query.ts' },
  'angular-query': { output: './src/analyticsdata/hooks/angular-query.ts' },
  docs: {
    output: './src/analyticsdata/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
