import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/appflow/2020-08-23/openapi.yaml',
  output: './src/appflow/routes.ts',
  template: {},
  type: { output: './src/appflow/types.ts' },
  client: { output: './src/appflow/client.ts', baseUrl: '/' },
  rpc: { output: './src/appflow/rpc.ts', parseResponse: true },
  swr: { output: './src/appflow/hooks/swr.ts' },
  'tanstack-query': { output: './src/appflow/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/appflow/hooks/preact-query.ts' },
  'solid-query': { output: './src/appflow/hooks/solid-query.ts' },
  'vue-query': { output: './src/appflow/hooks/vue-query.ts' },
  'svelte-query': { output: './src/appflow/hooks/svelte-query.ts' },
  'angular-query': { output: './src/appflow/hooks/angular-query.ts' },
  docs: {
    output: './src/appflow/api.md',
    curl: true,
    baseUrl: 'https://appflow.us-east-1.amazonaws.com',
  },
})
