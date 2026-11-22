import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apis.guru/2.2.0/openapi.yaml',
  output: './src/apis-guru/routes.ts',
  template: {},
  type: { output: './src/apis-guru/types.ts' },
  client: { output: './src/apis-guru/client.ts', baseUrl: '/' },
  rpc: { output: './src/apis-guru/rpc.ts', parseResponse: true },
  swr: { output: './src/apis-guru/hooks/swr.ts' },
  'tanstack-query': { output: './src/apis-guru/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/apis-guru/hooks/preact-query.ts' },
  'solid-query': { output: './src/apis-guru/hooks/solid-query.ts' },
  'vue-query': { output: './src/apis-guru/hooks/vue-query.ts' },
  'svelte-query': { output: './src/apis-guru/hooks/svelte-query.ts' },
  'angular-query': { output: './src/apis-guru/hooks/angular-query.ts' },
  docs: {
    output: './src/apis-guru/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
