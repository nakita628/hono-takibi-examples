import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/script/v1/openapi.yaml',
  output: './src/script/routes.ts',
  template: {},
  type: { output: './src/script/types.ts' },
  client: { output: './src/script/client.ts', baseUrl: '/' },
  rpc: { output: './src/script/rpc.ts', parseResponse: true },
  swr: { output: './src/script/hooks/swr.ts' },
  'tanstack-query': { output: './src/script/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/script/hooks/preact-query.ts' },
  'solid-query': { output: './src/script/hooks/solid-query.ts' },
  'vue-query': { output: './src/script/hooks/vue-query.ts' },
  'svelte-query': { output: './src/script/hooks/svelte-query.ts' },
  'angular-query': { output: './src/script/hooks/angular-query.ts' },
  docs: {
    output: './src/script/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
