import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/domains/v1beta1/openapi.yaml',
  output: './src/domains/routes.ts',
  template: {},
  type: { output: './src/domains/types.ts' },
  client: { output: './src/domains/client.ts', baseUrl: '/' },
  rpc: { output: './src/domains/rpc.ts', parseResponse: true },
  swr: { output: './src/domains/hooks/swr.ts' },
  'tanstack-query': { output: './src/domains/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/domains/hooks/preact-query.ts' },
  'solid-query': { output: './src/domains/hooks/solid-query.ts' },
  'vue-query': { output: './src/domains/hooks/vue-query.ts' },
  'svelte-query': { output: './src/domains/hooks/svelte-query.ts' },
  'angular-query': { output: './src/domains/hooks/angular-query.ts' },
  docs: {
    output: './src/domains/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
