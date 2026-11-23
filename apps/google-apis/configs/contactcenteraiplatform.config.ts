import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/contactcenteraiplatform/v1alpha1/openapi.yaml',
  output: './src/contactcenteraiplatform/routes.ts',
  template: {},
  type: { output: './src/contactcenteraiplatform/types.ts' },
  client: { output: './src/contactcenteraiplatform/client.ts', baseUrl: '/' },
  rpc: { output: './src/contactcenteraiplatform/rpc.ts', parseResponse: true },
  swr: { output: './src/contactcenteraiplatform/hooks/swr.ts' },
  'tanstack-query': { output: './src/contactcenteraiplatform/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/contactcenteraiplatform/hooks/preact-query.ts' },
  'solid-query': { output: './src/contactcenteraiplatform/hooks/solid-query.ts' },
  'vue-query': { output: './src/contactcenteraiplatform/hooks/vue-query.ts' },
  'svelte-query': { output: './src/contactcenteraiplatform/hooks/svelte-query.ts' },
  'angular-query': { output: './src/contactcenteraiplatform/hooks/angular-query.ts' },
  docs: {
    output: './src/contactcenteraiplatform/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
