import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/synthetics/2017-10-11/openapi.yaml',
  output: './src/synthetics/routes.ts',
  template: {},
  type: { output: './src/synthetics/types.ts' },
  client: { output: './src/synthetics/client.ts', baseUrl: '/' },
  rpc: { output: './src/synthetics/rpc.ts', parseResponse: true },
  swr: { output: './src/synthetics/hooks/swr.ts' },
  'tanstack-query': { output: './src/synthetics/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/synthetics/hooks/preact-query.ts' },
  'solid-query': { output: './src/synthetics/hooks/solid-query.ts' },
  'vue-query': { output: './src/synthetics/hooks/vue-query.ts' },
  'svelte-query': { output: './src/synthetics/hooks/svelte-query.ts' },
  'angular-query': { output: './src/synthetics/hooks/angular-query.ts' },
  docs: {
    output: './src/synthetics/api.md',
    curl: true,
    baseUrl: 'https://synthetics.us-east-1.amazonaws.com',
  },
})
