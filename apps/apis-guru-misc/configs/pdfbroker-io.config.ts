import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/pdfbroker.io/v1/openapi.yaml',
  output: './src/pdfbroker-io/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/pdfbroker-io/types.ts' },
  client: { output: './src/pdfbroker-io/client.ts', baseUrl: '/' },
  rpc: { output: './src/pdfbroker-io/rpc.ts', parseResponse: true },
  swr: { output: './src/pdfbroker-io/hooks/swr.ts' },
  'tanstack-query': { output: './src/pdfbroker-io/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/pdfbroker-io/hooks/preact-query.ts' },
  'solid-query': { output: './src/pdfbroker-io/hooks/solid-query.ts' },
  'vue-query': { output: './src/pdfbroker-io/hooks/vue-query.ts' },
  'svelte-query': { output: './src/pdfbroker-io/hooks/svelte-query.ts' },
  'angular-query': { output: './src/pdfbroker-io/hooks/angular-query.ts' },
  docs: {
    output: './src/pdfbroker-io/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
