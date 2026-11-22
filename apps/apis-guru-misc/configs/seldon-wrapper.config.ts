import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/seldon.local/wrapper/0.1/openapi.yaml',
  output: './src/seldon-wrapper/routes.ts',
  template: {},
  type: { output: './src/seldon-wrapper/types.ts' },
  client: { output: './src/seldon-wrapper/client.ts', baseUrl: '/' },
  rpc: { output: './src/seldon-wrapper/rpc.ts', parseResponse: true },
  swr: { output: './src/seldon-wrapper/hooks/swr.ts' },
  'tanstack-query': { output: './src/seldon-wrapper/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/seldon-wrapper/hooks/preact-query.ts' },
  'solid-query': { output: './src/seldon-wrapper/hooks/solid-query.ts' },
  'vue-query': { output: './src/seldon-wrapper/hooks/vue-query.ts' },
  'svelte-query': { output: './src/seldon-wrapper/hooks/svelte-query.ts' },
  'angular-query': { output: './src/seldon-wrapper/hooks/angular-query.ts' },
  docs: {
    output: './src/seldon-wrapper/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
