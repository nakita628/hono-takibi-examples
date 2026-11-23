import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/nfusionsolutions.biz/1/openapi.yaml',
  output: './src/nfusionsolutions-biz/routes.ts',
  template: {},
  type: { output: './src/nfusionsolutions-biz/types.ts' },
  client: { output: './src/nfusionsolutions-biz/client.ts', baseUrl: '/' },
  rpc: { output: './src/nfusionsolutions-biz/rpc.ts', parseResponse: true },
  swr: { output: './src/nfusionsolutions-biz/hooks/swr.ts' },
  'tanstack-query': { output: './src/nfusionsolutions-biz/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/nfusionsolutions-biz/hooks/preact-query.ts' },
  'solid-query': { output: './src/nfusionsolutions-biz/hooks/solid-query.ts' },
  'vue-query': { output: './src/nfusionsolutions-biz/hooks/vue-query.ts' },
  'svelte-query': { output: './src/nfusionsolutions-biz/hooks/svelte-query.ts' },
  'angular-query': { output: './src/nfusionsolutions-biz/hooks/angular-query.ts' },
  docs: {
    output: './src/nfusionsolutions-biz/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
