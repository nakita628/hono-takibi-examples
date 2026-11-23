import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/npsailu/3.0.0/openapi.yaml',
  output: './src/npsailu/routes.ts',
  template: {},
  type: { output: './src/npsailu/types.ts' },
  client: { output: './src/npsailu/client.ts', baseUrl: '/' },
  rpc: { output: './src/npsailu/rpc.ts', parseResponse: true },
  swr: { output: './src/npsailu/hooks/swr.ts' },
  'tanstack-query': { output: './src/npsailu/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/npsailu/hooks/preact-query.ts' },
  'solid-query': { output: './src/npsailu/hooks/solid-query.ts' },
  'vue-query': { output: './src/npsailu/hooks/vue-query.ts' },
  'svelte-query': { output: './src/npsailu/hooks/svelte-query.ts' },
  'angular-query': { output: './src/npsailu/hooks/angular-query.ts' },
  docs: {
    output: './src/npsailu/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
