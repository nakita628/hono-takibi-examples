import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/ipinfodb.com/1.0.0/openapi.yaml',
  output: './src/ipinfodb/routes.ts',
  template: {},
  type: { output: './src/ipinfodb/types.ts' },
  client: { output: './src/ipinfodb/client.ts', baseUrl: '/' },
  rpc: { output: './src/ipinfodb/rpc.ts', parseResponse: true },
  swr: { output: './src/ipinfodb/hooks/swr.ts' },
  'tanstack-query': { output: './src/ipinfodb/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/ipinfodb/hooks/preact-query.ts' },
  'solid-query': { output: './src/ipinfodb/hooks/solid-query.ts' },
  'vue-query': { output: './src/ipinfodb/hooks/vue-query.ts' },
  'svelte-query': { output: './src/ipinfodb/hooks/svelte-query.ts' },
  'angular-query': { output: './src/ipinfodb/hooks/angular-query.ts' },
  docs: {
    output: './src/ipinfodb/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
