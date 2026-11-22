import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/nextcloud/server/master/apps/cloud_federation_api/openapi.json',
  output: './src/cloud-federation-api/routes.ts',
  template: {},
  type: { output: './src/cloud-federation-api/types.ts' },
  client: { output: './src/cloud-federation-api/client.ts', baseUrl: '/' },
  rpc: { output: './src/cloud-federation-api/rpc.ts', parseResponse: true },
  swr: { output: './src/cloud-federation-api/hooks/swr.ts' },
  'tanstack-query': { output: './src/cloud-federation-api/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/cloud-federation-api/hooks/preact-query.ts' },
  'solid-query': { output: './src/cloud-federation-api/hooks/solid-query.ts' },
  'vue-query': { output: './src/cloud-federation-api/hooks/vue-query.ts' },
  'svelte-query': { output: './src/cloud-federation-api/hooks/svelte-query.ts' },
  'angular-query': { output: './src/cloud-federation-api/hooks/angular-query.ts' },
  docs: {
    output: './src/cloud-federation-api/api.md',
    curl: true,
    baseUrl: 'https://cloud.example.com',
  },
})
