import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/dlm/2018-01-12/openapi.yaml',
  output: './src/dlm/routes.ts',
  template: {},
  type: { output: './src/dlm/types.ts' },
  client: { output: './src/dlm/client.ts', baseUrl: '/' },
  rpc: { output: './src/dlm/rpc.ts', parseResponse: true },
  swr: { output: './src/dlm/hooks/swr.ts' },
  'tanstack-query': { output: './src/dlm/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/dlm/hooks/preact-query.ts' },
  'solid-query': { output: './src/dlm/hooks/solid-query.ts' },
  'vue-query': { output: './src/dlm/hooks/vue-query.ts' },
  'svelte-query': { output: './src/dlm/hooks/svelte-query.ts' },
  'angular-query': { output: './src/dlm/hooks/angular-query.ts' },
  docs: {
    output: './src/dlm/api.md',
    curl: true,
    baseUrl: 'https://dlm.us-east-1.amazonaws.com',
  },
})
