import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/firebaseappcheck/v1/openapi.yaml',
  output: './src/firebaseappcheck/routes.ts',
  template: {},
  type: { output: './src/firebaseappcheck/types.ts' },
  client: { output: './src/firebaseappcheck/client.ts', baseUrl: '/' },
  rpc: { output: './src/firebaseappcheck/rpc.ts', parseResponse: true },
  swr: { output: './src/firebaseappcheck/hooks/swr.ts' },
  'tanstack-query': { output: './src/firebaseappcheck/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/firebaseappcheck/hooks/preact-query.ts' },
  'solid-query': { output: './src/firebaseappcheck/hooks/solid-query.ts' },
  'vue-query': { output: './src/firebaseappcheck/hooks/vue-query.ts' },
  'svelte-query': { output: './src/firebaseappcheck/hooks/svelte-query.ts' },
  'angular-query': { output: './src/firebaseappcheck/hooks/angular-query.ts' },
  docs: {
    output: './src/firebaseappcheck/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
