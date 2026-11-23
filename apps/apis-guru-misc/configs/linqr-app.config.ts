import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/linqr.app/2.0/openapi.yaml',
  output: './src/linqr-app/routes.ts',
  template: {},
  type: { output: './src/linqr-app/types.ts' },
  client: { output: './src/linqr-app/client.ts', baseUrl: '/' },
  rpc: { output: './src/linqr-app/rpc.ts', parseResponse: true },
  swr: { output: './src/linqr-app/hooks/swr.ts' },
  'tanstack-query': { output: './src/linqr-app/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/linqr-app/hooks/preact-query.ts' },
  'solid-query': { output: './src/linqr-app/hooks/solid-query.ts' },
  'vue-query': { output: './src/linqr-app/hooks/vue-query.ts' },
  'svelte-query': { output: './src/linqr-app/hooks/svelte-query.ts' },
  'angular-query': { output: './src/linqr-app/hooks/angular-query.ts' },
  docs: {
    output: './src/linqr-app/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
