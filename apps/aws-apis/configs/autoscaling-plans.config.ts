import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/autoscaling-plans/2018-01-06/openapi.yaml',
  output: './src/autoscaling-plans/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/autoscaling-plans/types.ts' },
  client: { output: './src/autoscaling-plans/client.ts', baseUrl: '/' },
  rpc: { output: './src/autoscaling-plans/rpc.ts', parseResponse: true },
  swr: { output: './src/autoscaling-plans/hooks/swr.ts' },
  'tanstack-query': { output: './src/autoscaling-plans/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/autoscaling-plans/hooks/preact-query.ts' },
  'solid-query': { output: './src/autoscaling-plans/hooks/solid-query.ts' },
  'vue-query': { output: './src/autoscaling-plans/hooks/vue-query.ts' },
  'svelte-query': { output: './src/autoscaling-plans/hooks/svelte-query.ts' },
  'angular-query': { output: './src/autoscaling-plans/hooks/angular-query.ts' },
  docs: {
    output: './src/autoscaling-plans/api.md',
    curl: true,
    baseUrl: 'https://autoscaling-plans.us-east-1.amazonaws.com',
  },
})
