import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/comprehendmedical/2018-10-30/openapi.yaml',
  output: './src/comprehendmedical/routes.ts',
  template: {},
  type: { output: './src/comprehendmedical/types.ts' },
  client: { output: './src/comprehendmedical/client.ts', baseUrl: '/' },
  rpc: { output: './src/comprehendmedical/rpc.ts', parseResponse: true },
  swr: { output: './src/comprehendmedical/hooks/swr.ts' },
  'tanstack-query': { output: './src/comprehendmedical/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/comprehendmedical/hooks/preact-query.ts' },
  'solid-query': { output: './src/comprehendmedical/hooks/solid-query.ts' },
  'vue-query': { output: './src/comprehendmedical/hooks/vue-query.ts' },
  'svelte-query': { output: './src/comprehendmedical/hooks/svelte-query.ts' },
  'angular-query': { output: './src/comprehendmedical/hooks/angular-query.ts' },
  docs: {
    output: './src/comprehendmedical/api.md',
    curl: true,
    baseUrl: 'https://comprehendmedical.us-east-1.amazonaws.com',
  },
})
