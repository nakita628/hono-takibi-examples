import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/icons8.com/1.0.0/openapi.yaml',
  output: './src/icons8/routes.ts',
  template: {},
  type: { output: './src/icons8/types.ts' },
  client: { output: './src/icons8/client.ts', baseUrl: '/' },
  rpc: { output: './src/icons8/rpc.ts', parseResponse: true },
  swr: { output: './src/icons8/hooks/swr.ts' },
  'tanstack-query': { output: './src/icons8/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/icons8/hooks/preact-query.ts' },
  'solid-query': { output: './src/icons8/hooks/solid-query.ts' },
  'vue-query': { output: './src/icons8/hooks/vue-query.ts' },
  'svelte-query': { output: './src/icons8/hooks/svelte-query.ts' },
  'angular-query': { output: './src/icons8/hooks/angular-query.ts' },
  docs: {
    output: './src/icons8/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
