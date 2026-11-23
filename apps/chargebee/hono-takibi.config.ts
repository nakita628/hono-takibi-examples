import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // Chargebee API v2 / Product Catalog v2, official OpenAPI spec:
  // https://github.com/chargebee/openapi/blob/main/spec/chargebee_api_v2_pc_v2_spec.yaml
  input:
    'https://raw.githubusercontent.com/chargebee/openapi/main/spec/chargebee_api_v2_pc_v2_spec.yaml',
  output: './src/routes.ts',
  template: {},
  type: { output: './src/types.ts' },
  client: { output: './src/client.ts', baseUrl: '/' },
  rpc: { output: './src/rpc.ts', parseResponse: true },
  swr: { output: './src/hooks/swr.ts' },
  'tanstack-query': { output: './src/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/hooks/preact-query.ts' },
  'solid-query': { output: './src/hooks/solid-query.ts' },
  'vue-query': { output: './src/hooks/vue-query.ts' },
  'svelte-query': { output: './src/hooks/svelte-query.ts' },
  'angular-query': { output: './src/hooks/angular-query.ts' },
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://{site}.chargebee.com/api/v2',
  },
})
