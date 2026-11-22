import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/dhsekerala/3.0.0/openapi.yaml',
  output: './src/dhsekerala/routes.ts',
  template: {},
  type: { output: './src/dhsekerala/types.ts' },
  client: { output: './src/dhsekerala/client.ts', baseUrl: '/' },
  rpc: { output: './src/dhsekerala/rpc.ts', parseResponse: true },
  swr: { output: './src/dhsekerala/hooks/swr.ts' },
  'tanstack-query': { output: './src/dhsekerala/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/dhsekerala/hooks/preact-query.ts' },
  'solid-query': { output: './src/dhsekerala/hooks/solid-query.ts' },
  'vue-query': { output: './src/dhsekerala/hooks/vue-query.ts' },
  'svelte-query': { output: './src/dhsekerala/hooks/svelte-query.ts' },
  'angular-query': { output: './src/dhsekerala/hooks/angular-query.ts' },
  docs: {
    output: './src/dhsekerala/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
