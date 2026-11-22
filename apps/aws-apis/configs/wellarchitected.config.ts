import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/wellarchitected/2020-03-31/openapi.yaml',
  output: './src/wellarchitected/routes.ts',
  template: {},
  type: { output: './src/wellarchitected/types.ts' },
  client: { output: './src/wellarchitected/client.ts', baseUrl: '/' },
  rpc: { output: './src/wellarchitected/rpc.ts', parseResponse: true },
  swr: { output: './src/wellarchitected/hooks/swr.ts' },
  'tanstack-query': { output: './src/wellarchitected/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/wellarchitected/hooks/preact-query.ts' },
  'solid-query': { output: './src/wellarchitected/hooks/solid-query.ts' },
  'vue-query': { output: './src/wellarchitected/hooks/vue-query.ts' },
  'svelte-query': { output: './src/wellarchitected/hooks/svelte-query.ts' },
  'angular-query': { output: './src/wellarchitected/hooks/angular-query.ts' },
  docs: {
    output: './src/wellarchitected/api.md',
    curl: true,
    baseUrl: 'https://wellarchitected.us-east-1.amazonaws.com',
  },
})
