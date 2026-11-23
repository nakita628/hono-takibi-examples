import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/cur/2017-01-06/openapi.yaml',
  output: './src/cur/routes.ts',
  template: {},
  type: { output: './src/cur/types.ts' },
  client: { output: './src/cur/client.ts', baseUrl: '/' },
  rpc: { output: './src/cur/rpc.ts', parseResponse: true },
  swr: { output: './src/cur/hooks/swr.ts' },
  'tanstack-query': { output: './src/cur/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/cur/hooks/preact-query.ts' },
  'solid-query': { output: './src/cur/hooks/solid-query.ts' },
  'vue-query': { output: './src/cur/hooks/vue-query.ts' },
  'svelte-query': { output: './src/cur/hooks/svelte-query.ts' },
  'angular-query': { output: './src/cur/hooks/angular-query.ts' },
  docs: {
    output: './src/cur/api.md',
    curl: true,
    baseUrl: 'https://cur.us-east-1.amazonaws.com',
  },
})
