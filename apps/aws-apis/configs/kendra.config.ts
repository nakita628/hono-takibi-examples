import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/kendra/2019-02-03/openapi.yaml',
  output: './src/kendra/routes.ts',
  template: {},
  type: { output: './src/kendra/types.ts' },
  client: { output: './src/kendra/client.ts', baseUrl: '/' },
  rpc: { output: './src/kendra/rpc.ts', parseResponse: true },
  swr: { output: './src/kendra/hooks/swr.ts' },
  'tanstack-query': { output: './src/kendra/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/kendra/hooks/preact-query.ts' },
  'solid-query': { output: './src/kendra/hooks/solid-query.ts' },
  'vue-query': { output: './src/kendra/hooks/vue-query.ts' },
  'svelte-query': { output: './src/kendra/hooks/svelte-query.ts' },
  'angular-query': { output: './src/kendra/hooks/angular-query.ts' },
  docs: {
    output: './src/kendra/api.md',
    curl: true,
    baseUrl: 'https://kendra.us-east-1.amazonaws.com',
  },
})
