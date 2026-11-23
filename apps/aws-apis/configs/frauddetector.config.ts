import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/frauddetector/2019-11-15/openapi.yaml',
  output: './src/frauddetector/routes.ts',
  template: {},
  type: { output: './src/frauddetector/types.ts' },
  client: { output: './src/frauddetector/client.ts', baseUrl: '/' },
  rpc: { output: './src/frauddetector/rpc.ts', parseResponse: true },
  swr: { output: './src/frauddetector/hooks/swr.ts' },
  'tanstack-query': { output: './src/frauddetector/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/frauddetector/hooks/preact-query.ts' },
  'solid-query': { output: './src/frauddetector/hooks/solid-query.ts' },
  'vue-query': { output: './src/frauddetector/hooks/vue-query.ts' },
  'svelte-query': { output: './src/frauddetector/hooks/svelte-query.ts' },
  'angular-query': { output: './src/frauddetector/hooks/angular-query.ts' },
  docs: {
    output: './src/frauddetector/api.md',
    curl: true,
    baseUrl: 'https://frauddetector.us-east-1.amazonaws.com',
  },
})
