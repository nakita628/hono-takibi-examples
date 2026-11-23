import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/nextcloud/server/master/apps/dashboard/openapi.json',
  output: './src/dashboard/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/dashboard/types.ts' },
  client: { output: './src/dashboard/client.ts', baseUrl: '/' },
  rpc: { output: './src/dashboard/rpc.ts', parseResponse: true },
  swr: { output: './src/dashboard/hooks/swr.ts' },
  'tanstack-query': { output: './src/dashboard/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/dashboard/hooks/preact-query.ts' },
  'solid-query': { output: './src/dashboard/hooks/solid-query.ts' },
  'vue-query': { output: './src/dashboard/hooks/vue-query.ts' },
  'svelte-query': { output: './src/dashboard/hooks/svelte-query.ts' },
  'angular-query': { output: './src/dashboard/hooks/angular-query.ts' },
  docs: {
    output: './src/dashboard/api.md',
    curl: true,
    baseUrl: 'https://cloud.example.com',
  },
})
