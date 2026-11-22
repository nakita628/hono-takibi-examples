import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/dfareporting/v3.4/openapi.yaml',
  output: './src/dfareporting/routes.ts',
  template: {},
  type: { output: './src/dfareporting/types.ts' },
  client: { output: './src/dfareporting/client.ts', baseUrl: '/' },
  rpc: { output: './src/dfareporting/rpc.ts', parseResponse: true },
  swr: { output: './src/dfareporting/hooks/swr.ts' },
  'tanstack-query': { output: './src/dfareporting/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/dfareporting/hooks/preact-query.ts' },
  'solid-query': { output: './src/dfareporting/hooks/solid-query.ts' },
  'vue-query': { output: './src/dfareporting/hooks/vue-query.ts' },
  'svelte-query': { output: './src/dfareporting/hooks/svelte-query.ts' },
  'angular-query': { output: './src/dfareporting/hooks/angular-query.ts' },
  docs: {
    output: './src/dfareporting/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
