import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/pdfgeneratorapi.com/3.1.1/openapi.yaml',
  output: './src/pdfgeneratorapi/routes.ts',
  template: {},
  type: { output: './src/pdfgeneratorapi/types.ts' },
  client: { output: './src/pdfgeneratorapi/client.ts', baseUrl: '/' },
  rpc: { output: './src/pdfgeneratorapi/rpc.ts', parseResponse: true },
  swr: { output: './src/pdfgeneratorapi/hooks/swr.ts' },
  'tanstack-query': { output: './src/pdfgeneratorapi/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/pdfgeneratorapi/hooks/preact-query.ts' },
  'solid-query': { output: './src/pdfgeneratorapi/hooks/solid-query.ts' },
  'vue-query': { output: './src/pdfgeneratorapi/hooks/vue-query.ts' },
  'svelte-query': { output: './src/pdfgeneratorapi/hooks/svelte-query.ts' },
  'angular-query': { output: './src/pdfgeneratorapi/hooks/angular-query.ts' },
  docs: {
    output: './src/pdfgeneratorapi/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
