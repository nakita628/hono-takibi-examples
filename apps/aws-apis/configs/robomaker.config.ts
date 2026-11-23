import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/robomaker/2018-06-29/openapi.yaml',
  output: './src/robomaker/routes.ts',
  template: {},
  type: { output: './src/robomaker/types.ts' },
  client: { output: './src/robomaker/client.ts', baseUrl: '/' },
  rpc: { output: './src/robomaker/rpc.ts', parseResponse: true },
  swr: { output: './src/robomaker/hooks/swr.ts' },
  'tanstack-query': { output: './src/robomaker/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/robomaker/hooks/preact-query.ts' },
  'solid-query': { output: './src/robomaker/hooks/solid-query.ts' },
  'vue-query': { output: './src/robomaker/hooks/vue-query.ts' },
  'svelte-query': { output: './src/robomaker/hooks/svelte-query.ts' },
  'angular-query': { output: './src/robomaker/hooks/angular-query.ts' },
  docs: {
    output: './src/robomaker/api.md',
    curl: true,
    baseUrl: 'https://robomaker.us-east-1.amazonaws.com',
  },
})
