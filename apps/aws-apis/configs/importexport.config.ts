import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/importexport/2010-06-01/openapi.yaml',
  output: './src/importexport/routes.ts',
  template: {},
  type: { output: './src/importexport/types.ts' },
  client: { output: './src/importexport/client.ts', baseUrl: '/' },
  rpc: { output: './src/importexport/rpc.ts', parseResponse: true },
  swr: { output: './src/importexport/hooks/swr.ts' },
  'tanstack-query': { output: './src/importexport/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/importexport/hooks/preact-query.ts' },
  'solid-query': { output: './src/importexport/hooks/solid-query.ts' },
  'vue-query': { output: './src/importexport/hooks/vue-query.ts' },
  'svelte-query': { output: './src/importexport/hooks/svelte-query.ts' },
  'angular-query': { output: './src/importexport/hooks/angular-query.ts' },
  docs: {
    output: './src/importexport/api.md',
    curl: true,
    baseUrl: 'https://importexport.us-east-1.amazonaws.com',
  },
})
