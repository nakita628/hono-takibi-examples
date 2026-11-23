import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/scideas.net/perfectpdf/1.0/openapi.yaml',
  output: './src/scideas-net-perfectpdf/routes.ts',
  template: {},
  type: { output: './src/scideas-net-perfectpdf/types.ts' },
  client: { output: './src/scideas-net-perfectpdf/client.ts', baseUrl: '/' },
  rpc: { output: './src/scideas-net-perfectpdf/rpc.ts', parseResponse: true },
  swr: { output: './src/scideas-net-perfectpdf/hooks/swr.ts' },
  'tanstack-query': { output: './src/scideas-net-perfectpdf/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/scideas-net-perfectpdf/hooks/preact-query.ts' },
  'solid-query': { output: './src/scideas-net-perfectpdf/hooks/solid-query.ts' },
  'vue-query': { output: './src/scideas-net-perfectpdf/hooks/vue-query.ts' },
  'svelte-query': { output: './src/scideas-net-perfectpdf/hooks/svelte-query.ts' },
  'angular-query': { output: './src/scideas-net-perfectpdf/hooks/angular-query.ts' },
  docs: {
    output: './src/scideas-net-perfectpdf/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
