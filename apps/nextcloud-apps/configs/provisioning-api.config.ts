import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/nextcloud/server/master/apps/provisioning_api/openapi-full.json',
  output: './src/provisioning-api/routes.ts',
  template: {},
  type: { output: './src/provisioning-api/types.ts' },
  client: { output: './src/provisioning-api/client.ts', baseUrl: '/' },
  rpc: { output: './src/provisioning-api/rpc.ts', parseResponse: true },
  swr: { output: './src/provisioning-api/hooks/swr.ts' },
  'tanstack-query': { output: './src/provisioning-api/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/provisioning-api/hooks/preact-query.ts' },
  'solid-query': { output: './src/provisioning-api/hooks/solid-query.ts' },
  'vue-query': { output: './src/provisioning-api/hooks/vue-query.ts' },
  'svelte-query': { output: './src/provisioning-api/hooks/svelte-query.ts' },
  'angular-query': { output: './src/provisioning-api/hooks/angular-query.ts' },
  docs: {
    output: './src/provisioning-api/api.md',
    curl: true,
    baseUrl: 'https://cloud.example.com',
  },
})
