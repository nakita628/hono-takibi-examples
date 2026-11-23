import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apideck.com/ecommerce/9.3.0/openapi.yaml',
  output: './src/ecommerce/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/ecommerce/types.ts' },
  client: { output: './src/ecommerce/client.ts', baseUrl: '/' },
  rpc: { output: './src/ecommerce/rpc.ts', parseResponse: true },
  swr: { output: './src/ecommerce/hooks/swr.ts' },
  'tanstack-query': { output: './src/ecommerce/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/ecommerce/hooks/preact-query.ts' },
  'solid-query': { output: './src/ecommerce/hooks/solid-query.ts' },
  'vue-query': { output: './src/ecommerce/hooks/vue-query.ts' },
  'svelte-query': { output: './src/ecommerce/hooks/svelte-query.ts' },
  'angular-query': { output: './src/ecommerce/hooks/angular-query.ts' },
  docs: {
    output: './src/ecommerce/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
