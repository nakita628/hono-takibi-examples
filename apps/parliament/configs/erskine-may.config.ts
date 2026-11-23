import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/parliament.uk/erskine-may/v1/openapi.yaml',
  output: './src/erskine-may/routes.ts',
  template: {},
  type: { output: './src/erskine-may/types.ts' },
  client: { output: './src/erskine-may/client.ts', baseUrl: '/' },
  rpc: { output: './src/erskine-may/rpc.ts', parseResponse: true },
  swr: { output: './src/erskine-may/hooks/swr.ts' },
  'tanstack-query': { output: './src/erskine-may/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/erskine-may/hooks/preact-query.ts' },
  'solid-query': { output: './src/erskine-may/hooks/solid-query.ts' },
  'vue-query': { output: './src/erskine-may/hooks/vue-query.ts' },
  'svelte-query': { output: './src/erskine-may/hooks/svelte-query.ts' },
  'angular-query': { output: './src/erskine-may/hooks/angular-query.ts' },
  docs: {
    output: './src/erskine-may/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
