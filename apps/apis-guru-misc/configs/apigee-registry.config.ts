import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apigee.local/registry/0.0.1/openapi.yaml',
  output: './src/apigee-registry/routes.ts',
  template: {},
  type: { output: './src/apigee-registry/types.ts' },
  client: { output: './src/apigee-registry/client.ts', baseUrl: '/' },
  rpc: { output: './src/apigee-registry/rpc.ts', parseResponse: true },
  swr: { output: './src/apigee-registry/hooks/swr.ts' },
  'tanstack-query': { output: './src/apigee-registry/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/apigee-registry/hooks/preact-query.ts' },
  'solid-query': { output: './src/apigee-registry/hooks/solid-query.ts' },
  'vue-query': { output: './src/apigee-registry/hooks/vue-query.ts' },
  'svelte-query': { output: './src/apigee-registry/hooks/svelte-query.ts' },
  'angular-query': { output: './src/apigee-registry/hooks/angular-query.ts' },
  docs: {
    output: './src/apigee-registry/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
