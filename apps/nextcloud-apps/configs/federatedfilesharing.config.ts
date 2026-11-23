import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/nextcloud/server/master/apps/federatedfilesharing/openapi.json',
  output: './src/federatedfilesharing/routes.ts',
  template: {},
  type: { output: './src/federatedfilesharing/types.ts' },
  client: { output: './src/federatedfilesharing/client.ts', baseUrl: '/' },
  rpc: { output: './src/federatedfilesharing/rpc.ts', parseResponse: true },
  swr: { output: './src/federatedfilesharing/hooks/swr.ts' },
  'tanstack-query': { output: './src/federatedfilesharing/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/federatedfilesharing/hooks/preact-query.ts' },
  'solid-query': { output: './src/federatedfilesharing/hooks/solid-query.ts' },
  'vue-query': { output: './src/federatedfilesharing/hooks/vue-query.ts' },
  'svelte-query': { output: './src/federatedfilesharing/hooks/svelte-query.ts' },
  'angular-query': { output: './src/federatedfilesharing/hooks/angular-query.ts' },
  docs: {
    output: './src/federatedfilesharing/api.md',
    curl: true,
    baseUrl: 'https://cloud.example.com',
  },
})
