import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/datumbox.com/1.0/openapi.yaml',
  output: './src/datumbox/routes.ts',
  template: {},
  type: { output: './src/datumbox/types.ts' },
  client: { output: './src/datumbox/client.ts', baseUrl: '/' },
  rpc: { output: './src/datumbox/rpc.ts', parseResponse: true },
  swr: { output: './src/datumbox/hooks/swr.ts' },
  'tanstack-query': { output: './src/datumbox/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/datumbox/hooks/preact-query.ts' },
  'solid-query': { output: './src/datumbox/hooks/solid-query.ts' },
  'vue-query': { output: './src/datumbox/hooks/vue-query.ts' },
  'svelte-query': { output: './src/datumbox/hooks/svelte-query.ts' },
  'angular-query': { output: './src/datumbox/hooks/angular-query.ts' },
  docs: {
    output: './src/datumbox/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
