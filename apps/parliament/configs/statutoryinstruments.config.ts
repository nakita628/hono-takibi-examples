import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/parliament.uk/statutoryinstruments/v1/openapi.yaml',
  output: './src/statutoryinstruments/routes.ts',
  template: {},
  type: { output: './src/statutoryinstruments/types.ts' },
  client: { output: './src/statutoryinstruments/client.ts', baseUrl: '/' },
  rpc: { output: './src/statutoryinstruments/rpc.ts', parseResponse: true },
  swr: { output: './src/statutoryinstruments/hooks/swr.ts' },
  'tanstack-query': { output: './src/statutoryinstruments/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/statutoryinstruments/hooks/preact-query.ts' },
  'solid-query': { output: './src/statutoryinstruments/hooks/solid-query.ts' },
  'vue-query': { output: './src/statutoryinstruments/hooks/vue-query.ts' },
  'svelte-query': { output: './src/statutoryinstruments/hooks/svelte-query.ts' },
  'angular-query': { output: './src/statutoryinstruments/hooks/angular-query.ts' },
  docs: {
    output: './src/statutoryinstruments/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
