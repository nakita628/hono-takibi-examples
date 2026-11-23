import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/fungenerators.com/barcode/1.5/openapi.yaml',
  output: './src/fungenerators-barcode/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/fungenerators-barcode/types.ts' },
  client: { output: './src/fungenerators-barcode/client.ts', baseUrl: '/' },
  rpc: { output: './src/fungenerators-barcode/rpc.ts', parseResponse: true },
  swr: { output: './src/fungenerators-barcode/hooks/swr.ts' },
  'tanstack-query': { output: './src/fungenerators-barcode/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/fungenerators-barcode/hooks/preact-query.ts' },
  'solid-query': { output: './src/fungenerators-barcode/hooks/solid-query.ts' },
  'vue-query': { output: './src/fungenerators-barcode/hooks/vue-query.ts' },
  'svelte-query': { output: './src/fungenerators-barcode/hooks/svelte-query.ts' },
  'angular-query': { output: './src/fungenerators-barcode/hooks/angular-query.ts' },
  docs: {
    output: './src/fungenerators-barcode/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
