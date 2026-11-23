import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/vtex.local/License-Manager-API/1.0/openapi.yaml',
  output: './src/license-manager-api/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/license-manager-api/types.ts' },
  client: { output: './src/license-manager-api/client.ts', baseUrl: '/' },
  rpc: { output: './src/license-manager-api/rpc.ts', parseResponse: true },
  swr: { output: './src/license-manager-api/hooks/swr.ts' },
  'tanstack-query': { output: './src/license-manager-api/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/license-manager-api/hooks/preact-query.ts' },
  'solid-query': { output: './src/license-manager-api/hooks/solid-query.ts' },
  'vue-query': { output: './src/license-manager-api/hooks/vue-query.ts' },
  'svelte-query': { output: './src/license-manager-api/hooks/svelte-query.ts' },
  'angular-query': { output: './src/license-manager-api/hooks/angular-query.ts' },
  docs: {
    output: './src/license-manager-api/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
