import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/velopayments.com/2.34.63/openapi.yaml',
  output: './src/velopayments/routes.ts',
  template: {},
  type: { output: './src/velopayments/types.ts' },
  client: { output: './src/velopayments/client.ts', baseUrl: '/' },
  rpc: { output: './src/velopayments/rpc.ts', parseResponse: true },
  swr: { output: './src/velopayments/hooks/swr.ts' },
  'tanstack-query': { output: './src/velopayments/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/velopayments/hooks/preact-query.ts' },
  'solid-query': { output: './src/velopayments/hooks/solid-query.ts' },
  'vue-query': { output: './src/velopayments/hooks/vue-query.ts' },
  'svelte-query': { output: './src/velopayments/hooks/svelte-query.ts' },
  'angular-query': { output: './src/velopayments/hooks/angular-query.ts' },
  docs: {
    output: './src/velopayments/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
