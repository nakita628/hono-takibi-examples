import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/cloudrf.com/2.0.0/openapi.yaml',
  output: './src/cloudrf/routes.ts',
  template: {},
  type: { output: './src/cloudrf/types.ts' },
  client: { output: './src/cloudrf/client.ts', baseUrl: '/' },
  rpc: { output: './src/cloudrf/rpc.ts', parseResponse: true },
  swr: { output: './src/cloudrf/hooks/swr.ts' },
  'tanstack-query': { output: './src/cloudrf/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/cloudrf/hooks/preact-query.ts' },
  'solid-query': { output: './src/cloudrf/hooks/solid-query.ts' },
  'vue-query': { output: './src/cloudrf/hooks/vue-query.ts' },
  'svelte-query': { output: './src/cloudrf/hooks/svelte-query.ts' },
  'angular-query': { output: './src/cloudrf/hooks/angular-query.ts' },
  docs: {
    output: './src/cloudrf/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
