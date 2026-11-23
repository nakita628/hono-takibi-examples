import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/qualtrics.com/0.2/openapi.yaml',
  output: './src/qualtrics/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/qualtrics/types.ts' },
  client: { output: './src/qualtrics/client.ts', baseUrl: '/' },
  rpc: { output: './src/qualtrics/rpc.ts', parseResponse: true },
  swr: { output: './src/qualtrics/hooks/swr.ts' },
  'tanstack-query': { output: './src/qualtrics/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/qualtrics/hooks/preact-query.ts' },
  'solid-query': { output: './src/qualtrics/hooks/solid-query.ts' },
  'vue-query': { output: './src/qualtrics/hooks/vue-query.ts' },
  'svelte-query': { output: './src/qualtrics/hooks/svelte-query.ts' },
  'angular-query': { output: './src/qualtrics/hooks/angular-query.ts' },
  docs: {
    output: './src/qualtrics/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
