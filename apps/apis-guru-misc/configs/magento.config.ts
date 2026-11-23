import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/magento.com/2.2.10/openapi.yaml',
  output: './src/magento/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/magento/types.ts' },
  client: { output: './src/magento/client.ts', baseUrl: '/' },
  rpc: { output: './src/magento/rpc.ts', parseResponse: true },
  swr: { output: './src/magento/hooks/swr.ts' },
  'tanstack-query': { output: './src/magento/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/magento/hooks/preact-query.ts' },
  'solid-query': { output: './src/magento/hooks/solid-query.ts' },
  'vue-query': { output: './src/magento/hooks/vue-query.ts' },
  'svelte-query': { output: './src/magento/hooks/svelte-query.ts' },
  'angular-query': { output: './src/magento/hooks/angular-query.ts' },
  docs: {
    output: './src/magento/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
