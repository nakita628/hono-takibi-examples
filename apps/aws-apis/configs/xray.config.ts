import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/xray/2016-04-12/openapi.yaml',
  output: './src/xray/routes.ts',
  template: {},
  type: { output: './src/xray/types.ts' },
  client: { output: './src/xray/client.ts', baseUrl: '/' },
  rpc: { output: './src/xray/rpc.ts', parseResponse: true },
  swr: { output: './src/xray/hooks/swr.ts' },
  'tanstack-query': { output: './src/xray/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/xray/hooks/preact-query.ts' },
  'solid-query': { output: './src/xray/hooks/solid-query.ts' },
  'vue-query': { output: './src/xray/hooks/vue-query.ts' },
  'svelte-query': { output: './src/xray/hooks/svelte-query.ts' },
  'angular-query': { output: './src/xray/hooks/angular-query.ts' },
  docs: {
    output: './src/xray/api.md',
    curl: true,
    baseUrl: 'https://xray.us-east-1.amazonaws.com',
  },
})
