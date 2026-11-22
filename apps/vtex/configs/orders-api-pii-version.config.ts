import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/vtex.local/Orders-API-(PII-version)/1.0/openapi.yaml',
  output: './src/orders-api-pii-version/routes.ts',
  template: {},
  type: { output: './src/orders-api-pii-version/types.ts' },
  client: { output: './src/orders-api-pii-version/client.ts', baseUrl: '/' },
  rpc: { output: './src/orders-api-pii-version/rpc.ts', parseResponse: true },
  swr: { output: './src/orders-api-pii-version/hooks/swr.ts' },
  'tanstack-query': { output: './src/orders-api-pii-version/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/orders-api-pii-version/hooks/preact-query.ts' },
  'solid-query': { output: './src/orders-api-pii-version/hooks/solid-query.ts' },
  'vue-query': { output: './src/orders-api-pii-version/hooks/vue-query.ts' },
  'svelte-query': { output: './src/orders-api-pii-version/hooks/svelte-query.ts' },
  'angular-query': { output: './src/orders-api-pii-version/hooks/angular-query.ts' },
  docs: {
    output: './src/orders-api-pii-version/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
