import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/nextcloud/server/master/apps/viewer/openapi.json',
  output: './src/viewer/routes.ts',
  template: {},
  type: { output: './src/viewer/types.ts' },
  client: { output: './src/viewer/client.ts', baseUrl: '/' },
  rpc: { output: './src/viewer/rpc.ts', parseResponse: true },
  swr: { output: './src/viewer/hooks/swr.ts' },
  'tanstack-query': { output: './src/viewer/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/viewer/hooks/preact-query.ts' },
  'solid-query': { output: './src/viewer/hooks/solid-query.ts' },
  'vue-query': { output: './src/viewer/hooks/vue-query.ts' },
  'svelte-query': { output: './src/viewer/hooks/svelte-query.ts' },
  'angular-query': { output: './src/viewer/hooks/angular-query.ts' },
  docs: {
    output: './src/viewer/api.md',
    curl: true,
    baseUrl: 'https://cloud.example.com',
  },
})
