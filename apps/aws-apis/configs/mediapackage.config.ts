import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/mediapackage/2017-10-12/openapi.yaml',
  output: './src/mediapackage/routes.ts',
  template: {},
  type: { output: './src/mediapackage/types.ts' },
  client: { output: './src/mediapackage/client.ts', baseUrl: '/' },
  rpc: { output: './src/mediapackage/rpc.ts', parseResponse: true },
  swr: { output: './src/mediapackage/hooks/swr.ts' },
  'tanstack-query': { output: './src/mediapackage/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/mediapackage/hooks/preact-query.ts' },
  'solid-query': { output: './src/mediapackage/hooks/solid-query.ts' },
  'vue-query': { output: './src/mediapackage/hooks/vue-query.ts' },
  'svelte-query': { output: './src/mediapackage/hooks/svelte-query.ts' },
  'angular-query': { output: './src/mediapackage/hooks/angular-query.ts' },
  docs: {
    output: './src/mediapackage/api.md',
    curl: true,
    baseUrl: 'https://mediapackage.us-east-1.amazonaws.com',
  },
})
