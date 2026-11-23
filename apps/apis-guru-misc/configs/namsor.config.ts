import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/namsor.com/2.0.24/openapi.yaml',
  output: './src/namsor/routes.ts',
  template: {},
  type: { output: './src/namsor/types.ts' },
  client: { output: './src/namsor/client.ts', baseUrl: '/' },
  rpc: { output: './src/namsor/rpc.ts', parseResponse: true },
  swr: { output: './src/namsor/hooks/swr.ts' },
  'tanstack-query': { output: './src/namsor/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/namsor/hooks/preact-query.ts' },
  'solid-query': { output: './src/namsor/hooks/solid-query.ts' },
  'vue-query': { output: './src/namsor/hooks/vue-query.ts' },
  'svelte-query': { output: './src/namsor/hooks/svelte-query.ts' },
  'angular-query': { output: './src/namsor/hooks/angular-query.ts' },
  docs: {
    output: './src/namsor/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
