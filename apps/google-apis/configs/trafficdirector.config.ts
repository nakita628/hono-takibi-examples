import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/trafficdirector/v2/openapi.yaml',
  output: './src/trafficdirector/routes.ts',
  template: {},
  type: { output: './src/trafficdirector/types.ts' },
  client: { output: './src/trafficdirector/client.ts', baseUrl: '/' },
  rpc: { output: './src/trafficdirector/rpc.ts', parseResponse: true },
  swr: { output: './src/trafficdirector/hooks/swr.ts' },
  'tanstack-query': { output: './src/trafficdirector/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/trafficdirector/hooks/preact-query.ts' },
  'solid-query': { output: './src/trafficdirector/hooks/solid-query.ts' },
  'vue-query': { output: './src/trafficdirector/hooks/vue-query.ts' },
  'svelte-query': { output: './src/trafficdirector/hooks/svelte-query.ts' },
  'angular-query': { output: './src/trafficdirector/hooks/angular-query.ts' },
  docs: {
    output: './src/trafficdirector/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
