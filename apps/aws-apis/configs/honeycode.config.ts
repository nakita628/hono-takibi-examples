import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/honeycode/2020-03-01/openapi.yaml',
  output: './src/honeycode/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/honeycode/types.ts' },
  client: { output: './src/honeycode/client.ts', baseUrl: '/' },
  rpc: { output: './src/honeycode/rpc.ts', parseResponse: true },
  swr: { output: './src/honeycode/hooks/swr.ts' },
  'tanstack-query': { output: './src/honeycode/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/honeycode/hooks/preact-query.ts' },
  'solid-query': { output: './src/honeycode/hooks/solid-query.ts' },
  'vue-query': { output: './src/honeycode/hooks/vue-query.ts' },
  'svelte-query': { output: './src/honeycode/hooks/svelte-query.ts' },
  'angular-query': { output: './src/honeycode/hooks/angular-query.ts' },
  docs: {
    output: './src/honeycode/api.md',
    curl: true,
    baseUrl: 'https://honeycode.us-east-1.amazonaws.com',
  },
})
