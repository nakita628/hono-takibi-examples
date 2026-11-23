import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/ote-godaddy.com/aftermarket/1.0.0/openapi.yaml',
  output: './src/aftermarket/routes.ts',
  template: {},
  type: { output: './src/aftermarket/types.ts' },
  client: { output: './src/aftermarket/client.ts', baseUrl: '/' },
  rpc: { output: './src/aftermarket/rpc.ts', parseResponse: true },
  swr: { output: './src/aftermarket/hooks/swr.ts' },
  'tanstack-query': { output: './src/aftermarket/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/aftermarket/hooks/preact-query.ts' },
  'solid-query': { output: './src/aftermarket/hooks/solid-query.ts' },
  'vue-query': { output: './src/aftermarket/hooks/vue-query.ts' },
  'svelte-query': { output: './src/aftermarket/hooks/svelte-query.ts' },
  'angular-query': { output: './src/aftermarket/hooks/angular-query.ts' },
  docs: {
    output: './src/aftermarket/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
