import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/worklink/2018-09-25/openapi.yaml',
  output: './src/worklink/routes.ts',
  template: {},
  type: { output: './src/worklink/types.ts' },
  client: { output: './src/worklink/client.ts', baseUrl: '/' },
  rpc: { output: './src/worklink/rpc.ts', parseResponse: true },
  swr: { output: './src/worklink/hooks/swr.ts' },
  'tanstack-query': { output: './src/worklink/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/worklink/hooks/preact-query.ts' },
  'solid-query': { output: './src/worklink/hooks/solid-query.ts' },
  'vue-query': { output: './src/worklink/hooks/vue-query.ts' },
  'svelte-query': { output: './src/worklink/hooks/svelte-query.ts' },
  'angular-query': { output: './src/worklink/hooks/angular-query.ts' },
  docs: {
    output: './src/worklink/api.md',
    curl: true,
    baseUrl: 'https://worklink.us-east-1.amazonaws.com',
  },
})
