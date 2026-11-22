import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/pandascore.co/2.23.1/openapi.yaml',
  output: './src/pandascore-co/routes.ts',
  template: {},
  type: { output: './src/pandascore-co/types.ts' },
  client: { output: './src/pandascore-co/client.ts', baseUrl: '/' },
  rpc: { output: './src/pandascore-co/rpc.ts', parseResponse: true },
  swr: { output: './src/pandascore-co/hooks/swr.ts' },
  'tanstack-query': { output: './src/pandascore-co/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/pandascore-co/hooks/preact-query.ts' },
  'solid-query': { output: './src/pandascore-co/hooks/solid-query.ts' },
  'vue-query': { output: './src/pandascore-co/hooks/vue-query.ts' },
  'svelte-query': { output: './src/pandascore-co/hooks/svelte-query.ts' },
  'angular-query': { output: './src/pandascore-co/hooks/angular-query.ts' },
  docs: {
    output: './src/pandascore-co/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
