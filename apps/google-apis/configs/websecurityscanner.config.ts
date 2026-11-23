import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/websecurityscanner/v1beta/openapi.yaml',
  output: './src/websecurityscanner/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/websecurityscanner/types.ts' },
  client: { output: './src/websecurityscanner/client.ts', baseUrl: '/' },
  rpc: { output: './src/websecurityscanner/rpc.ts', parseResponse: true },
  swr: { output: './src/websecurityscanner/hooks/swr.ts' },
  'tanstack-query': { output: './src/websecurityscanner/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/websecurityscanner/hooks/preact-query.ts' },
  'solid-query': { output: './src/websecurityscanner/hooks/solid-query.ts' },
  'vue-query': { output: './src/websecurityscanner/hooks/vue-query.ts' },
  'svelte-query': { output: './src/websecurityscanner/hooks/svelte-query.ts' },
  'angular-query': { output: './src/websecurityscanner/hooks/angular-query.ts' },
  docs: {
    output: './src/websecurityscanner/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
