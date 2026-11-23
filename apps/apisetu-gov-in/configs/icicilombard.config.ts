import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/icicilombard/3.0.0/openapi.yaml',
  output: './src/icicilombard/routes.ts',
  template: {},
  type: { output: './src/icicilombard/types.ts' },
  client: { output: './src/icicilombard/client.ts', baseUrl: '/' },
  rpc: { output: './src/icicilombard/rpc.ts', parseResponse: true },
  swr: { output: './src/icicilombard/hooks/swr.ts' },
  'tanstack-query': { output: './src/icicilombard/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/icicilombard/hooks/preact-query.ts' },
  'solid-query': { output: './src/icicilombard/hooks/solid-query.ts' },
  'vue-query': { output: './src/icicilombard/hooks/vue-query.ts' },
  'svelte-query': { output: './src/icicilombard/hooks/svelte-query.ts' },
  'angular-query': { output: './src/icicilombard/hooks/angular-query.ts' },
  docs: {
    output: './src/icicilombard/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
