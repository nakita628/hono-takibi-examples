import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/tokenjay.app/1.0.0/openapi.yaml',
  output: './src/tokenjay-app/routes.ts',
  template: {},
  type: { output: './src/tokenjay-app/types.ts' },
  client: { output: './src/tokenjay-app/client.ts', baseUrl: '/' },
  rpc: { output: './src/tokenjay-app/rpc.ts', parseResponse: true },
  swr: { output: './src/tokenjay-app/hooks/swr.ts' },
  'tanstack-query': { output: './src/tokenjay-app/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/tokenjay-app/hooks/preact-query.ts' },
  'solid-query': { output: './src/tokenjay-app/hooks/solid-query.ts' },
  'vue-query': { output: './src/tokenjay-app/hooks/vue-query.ts' },
  'svelte-query': { output: './src/tokenjay-app/hooks/svelte-query.ts' },
  'angular-query': { output: './src/tokenjay-app/hooks/angular-query.ts' },
  docs: {
    output: './src/tokenjay-app/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
