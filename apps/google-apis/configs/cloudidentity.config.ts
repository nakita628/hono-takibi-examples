import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/cloudidentity/v1beta1/openapi.yaml',
  output: './src/cloudidentity/routes.ts',
  template: {},
  type: { output: './src/cloudidentity/types.ts' },
  client: { output: './src/cloudidentity/client.ts', baseUrl: '/' },
  rpc: { output: './src/cloudidentity/rpc.ts', parseResponse: true },
  swr: { output: './src/cloudidentity/hooks/swr.ts' },
  'tanstack-query': { output: './src/cloudidentity/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/cloudidentity/hooks/preact-query.ts' },
  'solid-query': { output: './src/cloudidentity/hooks/solid-query.ts' },
  'vue-query': { output: './src/cloudidentity/hooks/vue-query.ts' },
  'svelte-query': { output: './src/cloudidentity/hooks/svelte-query.ts' },
  'angular-query': { output: './src/cloudidentity/hooks/angular-query.ts' },
  docs: {
    output: './src/cloudidentity/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
