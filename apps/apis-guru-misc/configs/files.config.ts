import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/files.com/0.0.1/openapi.yaml',
  output: './src/files/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/files/types.ts' },
  client: { output: './src/files/client.ts', baseUrl: '/' },
  rpc: { output: './src/files/rpc.ts', parseResponse: true },
  swr: { output: './src/files/hooks/swr.ts' },
  'tanstack-query': { output: './src/files/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/files/hooks/preact-query.ts' },
  'solid-query': { output: './src/files/hooks/solid-query.ts' },
  'vue-query': { output: './src/files/hooks/vue-query.ts' },
  'svelte-query': { output: './src/files/hooks/svelte-query.ts' },
  'angular-query': { output: './src/files/hooks/angular-query.ts' },
  docs: {
    output: './src/files/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
