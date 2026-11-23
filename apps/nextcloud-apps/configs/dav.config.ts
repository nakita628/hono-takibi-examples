import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/nextcloud/server/master/apps/dav/openapi.json',
  output: './src/dav/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/dav/types.ts' },
  client: { output: './src/dav/client.ts', baseUrl: '/' },
  rpc: { output: './src/dav/rpc.ts', parseResponse: true },
  swr: { output: './src/dav/hooks/swr.ts' },
  'tanstack-query': { output: './src/dav/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/dav/hooks/preact-query.ts' },
  'solid-query': { output: './src/dav/hooks/solid-query.ts' },
  'vue-query': { output: './src/dav/hooks/vue-query.ts' },
  'svelte-query': { output: './src/dav/hooks/svelte-query.ts' },
  'angular-query': { output: './src/dav/hooks/angular-query.ts' },
  docs: {
    output: './src/dav/api.md',
    curl: true,
    baseUrl: 'https://cloud.example.com',
  },
})
