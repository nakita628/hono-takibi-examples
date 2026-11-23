import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/visualstudio.com/v1/openapi.yaml',
  output: './src/visualstudio/routes.ts',
  template: {},
  type: { output: './src/visualstudio/types.ts' },
  client: { output: './src/visualstudio/client.ts', baseUrl: '/' },
  rpc: { output: './src/visualstudio/rpc.ts', parseResponse: true },
  swr: { output: './src/visualstudio/hooks/swr.ts' },
  'tanstack-query': { output: './src/visualstudio/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/visualstudio/hooks/preact-query.ts' },
  'solid-query': { output: './src/visualstudio/hooks/solid-query.ts' },
  'vue-query': { output: './src/visualstudio/hooks/vue-query.ts' },
  'svelte-query': { output: './src/visualstudio/hooks/svelte-query.ts' },
  'angular-query': { output: './src/visualstudio/hooks/angular-query.ts' },
  docs: {
    output: './src/visualstudio/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
