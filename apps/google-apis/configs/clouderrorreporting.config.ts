import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/clouderrorreporting/v1beta1/openapi.yaml',
  output: './src/clouderrorreporting/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/clouderrorreporting/types.ts' },
  client: { output: './src/clouderrorreporting/client.ts', baseUrl: '/' },
  rpc: { output: './src/clouderrorreporting/rpc.ts', parseResponse: true },
  swr: { output: './src/clouderrorreporting/hooks/swr.ts' },
  'tanstack-query': { output: './src/clouderrorreporting/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/clouderrorreporting/hooks/preact-query.ts' },
  'solid-query': { output: './src/clouderrorreporting/hooks/solid-query.ts' },
  'vue-query': { output: './src/clouderrorreporting/hooks/vue-query.ts' },
  'svelte-query': { output: './src/clouderrorreporting/hooks/svelte-query.ts' },
  'angular-query': { output: './src/clouderrorreporting/hooks/angular-query.ts' },
  docs: {
    output: './src/clouderrorreporting/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
