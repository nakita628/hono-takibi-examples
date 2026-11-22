import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/inspector/2016-02-16/openapi.yaml',
  output: './src/inspector/routes.ts',
  template: {},
  type: { output: './src/inspector/types.ts' },
  client: { output: './src/inspector/client.ts', baseUrl: '/' },
  rpc: { output: './src/inspector/rpc.ts', parseResponse: true },
  swr: { output: './src/inspector/hooks/swr.ts' },
  'tanstack-query': { output: './src/inspector/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/inspector/hooks/preact-query.ts' },
  'solid-query': { output: './src/inspector/hooks/solid-query.ts' },
  'vue-query': { output: './src/inspector/hooks/vue-query.ts' },
  'svelte-query': { output: './src/inspector/hooks/svelte-query.ts' },
  'angular-query': { output: './src/inspector/hooks/angular-query.ts' },
  docs: {
    output: './src/inspector/api.md',
    curl: true,
    baseUrl: 'https://inspector.us-east-1.amazonaws.com',
  },
})
