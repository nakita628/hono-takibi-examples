import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/documentai/v1beta3/openapi.yaml',
  output: './src/documentai/routes.ts',
  template: {},
  type: { output: './src/documentai/types.ts' },
  client: { output: './src/documentai/client.ts', baseUrl: '/' },
  rpc: { output: './src/documentai/rpc.ts', parseResponse: true },
  swr: { output: './src/documentai/hooks/swr.ts' },
  'tanstack-query': { output: './src/documentai/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/documentai/hooks/preact-query.ts' },
  'solid-query': { output: './src/documentai/hooks/solid-query.ts' },
  'vue-query': { output: './src/documentai/hooks/vue-query.ts' },
  'svelte-query': { output: './src/documentai/hooks/svelte-query.ts' },
  'angular-query': { output: './src/documentai/hooks/angular-query.ts' },
  docs: {
    output: './src/documentai/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
