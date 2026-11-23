import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/ote-godaddy.com/countries/1.0.0/openapi.yaml',
  output: './src/countries/routes.ts',
  template: {},
  type: { output: './src/countries/types.ts' },
  client: { output: './src/countries/client.ts', baseUrl: '/' },
  rpc: { output: './src/countries/rpc.ts', parseResponse: true },
  swr: { output: './src/countries/hooks/swr.ts' },
  'tanstack-query': { output: './src/countries/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/countries/hooks/preact-query.ts' },
  'solid-query': { output: './src/countries/hooks/solid-query.ts' },
  'vue-query': { output: './src/countries/hooks/vue-query.ts' },
  'svelte-query': { output: './src/countries/hooks/svelte-query.ts' },
  'angular-query': { output: './src/countries/hooks/angular-query.ts' },
  docs: {
    output: './src/countries/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
