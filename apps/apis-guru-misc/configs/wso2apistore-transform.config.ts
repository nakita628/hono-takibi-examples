import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/wso2apistore.com/transform/1.0.0/openapi.yaml',
  output: './src/wso2apistore-transform/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/wso2apistore-transform/types.ts' },
  client: { output: './src/wso2apistore-transform/client.ts', baseUrl: '/' },
  rpc: { output: './src/wso2apistore-transform/rpc.ts', parseResponse: true },
  swr: { output: './src/wso2apistore-transform/hooks/swr.ts' },
  'tanstack-query': { output: './src/wso2apistore-transform/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/wso2apistore-transform/hooks/preact-query.ts' },
  'solid-query': { output: './src/wso2apistore-transform/hooks/solid-query.ts' },
  'vue-query': { output: './src/wso2apistore-transform/hooks/vue-query.ts' },
  'svelte-query': { output: './src/wso2apistore-transform/hooks/svelte-query.ts' },
  'angular-query': { output: './src/wso2apistore-transform/hooks/angular-query.ts' },
  docs: {
    output: './src/wso2apistore-transform/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
