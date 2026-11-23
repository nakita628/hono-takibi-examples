import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/machinelearning/2014-12-12/openapi.yaml',
  output: './src/machinelearning/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/machinelearning/types.ts' },
  client: { output: './src/machinelearning/client.ts', baseUrl: '/' },
  rpc: { output: './src/machinelearning/rpc.ts', parseResponse: true },
  swr: { output: './src/machinelearning/hooks/swr.ts' },
  'tanstack-query': { output: './src/machinelearning/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/machinelearning/hooks/preact-query.ts' },
  'solid-query': { output: './src/machinelearning/hooks/solid-query.ts' },
  'vue-query': { output: './src/machinelearning/hooks/vue-query.ts' },
  'svelte-query': { output: './src/machinelearning/hooks/svelte-query.ts' },
  'angular-query': { output: './src/machinelearning/hooks/angular-query.ts' },
  docs: {
    output: './src/machinelearning/api.md',
    curl: true,
    baseUrl: 'https://machinelearning.us-east-1.amazonaws.com',
  },
})
