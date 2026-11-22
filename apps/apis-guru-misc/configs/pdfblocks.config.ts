import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/pdfblocks.com/1.5.0/openapi.yaml',
  output: './src/pdfblocks/routes.ts',
  template: {},
  type: { output: './src/pdfblocks/types.ts' },
  client: { output: './src/pdfblocks/client.ts', baseUrl: '/' },
  rpc: { output: './src/pdfblocks/rpc.ts', parseResponse: true },
  swr: { output: './src/pdfblocks/hooks/swr.ts' },
  'tanstack-query': { output: './src/pdfblocks/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/pdfblocks/hooks/preact-query.ts' },
  'solid-query': { output: './src/pdfblocks/hooks/solid-query.ts' },
  'vue-query': { output: './src/pdfblocks/hooks/vue-query.ts' },
  'svelte-query': { output: './src/pdfblocks/hooks/svelte-query.ts' },
  'angular-query': { output: './src/pdfblocks/hooks/angular-query.ts' },
  docs: {
    output: './src/pdfblocks/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
