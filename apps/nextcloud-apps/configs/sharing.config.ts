import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/nextcloud/server/master/apps/sharing/openapi.json',
  output: './src/sharing/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/sharing/types.ts' },
  client: { output: './src/sharing/client.ts', baseUrl: '/' },
  rpc: { output: './src/sharing/rpc.ts', parseResponse: true },
  swr: { output: './src/sharing/hooks/swr.ts' },
  'tanstack-query': { output: './src/sharing/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/sharing/hooks/preact-query.ts' },
  'solid-query': { output: './src/sharing/hooks/solid-query.ts' },
  'vue-query': { output: './src/sharing/hooks/vue-query.ts' },
  'svelte-query': { output: './src/sharing/hooks/svelte-query.ts' },
  'angular-query': { output: './src/sharing/hooks/angular-query.ts' },
  docs: {
    output: './src/sharing/api.md',
    curl: true,
    baseUrl: 'https://cloud.example.com',
  },
})
