import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/mobile/2017-07-01/openapi.yaml',
  output: './src/mobile/routes.ts',
  template: {},
  type: { output: './src/mobile/types.ts' },
  client: { output: './src/mobile/client.ts', baseUrl: '/' },
  rpc: { output: './src/mobile/rpc.ts', parseResponse: true },
  swr: { output: './src/mobile/hooks/swr.ts' },
  'tanstack-query': { output: './src/mobile/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/mobile/hooks/preact-query.ts' },
  'solid-query': { output: './src/mobile/hooks/solid-query.ts' },
  'vue-query': { output: './src/mobile/hooks/vue-query.ts' },
  'svelte-query': { output: './src/mobile/hooks/svelte-query.ts' },
  'angular-query': { output: './src/mobile/hooks/angular-query.ts' },
  docs: {
    output: './src/mobile/api.md',
    curl: true,
    baseUrl: 'https://mobile.us-east-1.amazonaws.com',
  },
})
