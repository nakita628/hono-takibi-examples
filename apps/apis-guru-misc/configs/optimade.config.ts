import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/optimade.local/1.1.0~develop/openapi.yaml',
  output: './src/optimade/routes.ts',
  template: {},
  type: { output: './src/optimade/types.ts' },
  client: { output: './src/optimade/client.ts', baseUrl: '/' },
  rpc: { output: './src/optimade/rpc.ts', parseResponse: true },
  swr: { output: './src/optimade/hooks/swr.ts' },
  'tanstack-query': { output: './src/optimade/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/optimade/hooks/preact-query.ts' },
  'solid-query': { output: './src/optimade/hooks/solid-query.ts' },
  'vue-query': { output: './src/optimade/hooks/vue-query.ts' },
  'svelte-query': { output: './src/optimade/hooks/svelte-query.ts' },
  'angular-query': { output: './src/optimade/hooks/angular-query.ts' },
  docs: {
    output: './src/optimade/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
