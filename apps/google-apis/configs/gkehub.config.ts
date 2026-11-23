import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/gkehub/v1beta1/openapi.yaml',
  output: './src/gkehub/routes.ts',
  template: {},
  type: { output: './src/gkehub/types.ts' },
  client: { output: './src/gkehub/client.ts', baseUrl: '/' },
  rpc: { output: './src/gkehub/rpc.ts', parseResponse: true },
  swr: { output: './src/gkehub/hooks/swr.ts' },
  'tanstack-query': { output: './src/gkehub/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/gkehub/hooks/preact-query.ts' },
  'solid-query': { output: './src/gkehub/hooks/solid-query.ts' },
  'vue-query': { output: './src/gkehub/hooks/vue-query.ts' },
  'svelte-query': { output: './src/gkehub/hooks/svelte-query.ts' },
  'angular-query': { output: './src/gkehub/hooks/angular-query.ts' },
  docs: {
    output: './src/gkehub/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
