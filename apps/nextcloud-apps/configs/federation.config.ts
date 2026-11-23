import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/nextcloud/server/master/apps/federation/openapi-full.json',
  output: './src/federation/routes.ts',
  template: {},
  type: { output: './src/federation/types.ts' },
  client: { output: './src/federation/client.ts', baseUrl: '/' },
  rpc: { output: './src/federation/rpc.ts', parseResponse: true },
  swr: { output: './src/federation/hooks/swr.ts' },
  'tanstack-query': { output: './src/federation/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/federation/hooks/preact-query.ts' },
  'solid-query': { output: './src/federation/hooks/solid-query.ts' },
  'vue-query': { output: './src/federation/hooks/vue-query.ts' },
  'svelte-query': { output: './src/federation/hooks/svelte-query.ts' },
  'angular-query': { output: './src/federation/hooks/angular-query.ts' },
  docs: {
    output: './src/federation/api.md',
    curl: true,
    baseUrl: 'https://cloud.example.com',
  },
})
