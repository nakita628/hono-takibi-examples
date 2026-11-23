import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/microcks.local/1.7.0/openapi.yaml',
  output: './src/microcks/routes.ts',
  template: {},
  type: { output: './src/microcks/types.ts' },
  client: { output: './src/microcks/client.ts', baseUrl: '/' },
  rpc: { output: './src/microcks/rpc.ts', parseResponse: true },
  swr: { output: './src/microcks/hooks/swr.ts' },
  'tanstack-query': { output: './src/microcks/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/microcks/hooks/preact-query.ts' },
  'solid-query': { output: './src/microcks/hooks/solid-query.ts' },
  'vue-query': { output: './src/microcks/hooks/vue-query.ts' },
  'svelte-query': { output: './src/microcks/hooks/svelte-query.ts' },
  'angular-query': { output: './src/microcks/hooks/angular-query.ts' },
  docs: {
    output: './src/microcks/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
