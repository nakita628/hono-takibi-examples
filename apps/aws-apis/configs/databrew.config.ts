import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/databrew/2017-07-25/openapi.yaml',
  output: './src/databrew/routes.ts',
  template: {},
  type: { output: './src/databrew/types.ts' },
  client: { output: './src/databrew/client.ts', baseUrl: '/' },
  rpc: { output: './src/databrew/rpc.ts', parseResponse: true },
  swr: { output: './src/databrew/hooks/swr.ts' },
  'tanstack-query': { output: './src/databrew/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/databrew/hooks/preact-query.ts' },
  'solid-query': { output: './src/databrew/hooks/solid-query.ts' },
  'vue-query': { output: './src/databrew/hooks/vue-query.ts' },
  'svelte-query': { output: './src/databrew/hooks/svelte-query.ts' },
  'angular-query': { output: './src/databrew/hooks/angular-query.ts' },
  docs: {
    output: './src/databrew/api.md',
    curl: true,
    baseUrl: 'https://databrew.us-east-1.amazonaws.com',
  },
})
