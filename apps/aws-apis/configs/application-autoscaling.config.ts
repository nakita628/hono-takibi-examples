import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/application-autoscaling/2016-02-06/openapi.yaml',
  output: './src/application-autoscaling/routes.ts',
  template: {},
  type: { output: './src/application-autoscaling/types.ts' },
  client: { output: './src/application-autoscaling/client.ts', baseUrl: '/' },
  rpc: { output: './src/application-autoscaling/rpc.ts', parseResponse: true },
  swr: { output: './src/application-autoscaling/hooks/swr.ts' },
  'tanstack-query': { output: './src/application-autoscaling/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/application-autoscaling/hooks/preact-query.ts' },
  'solid-query': { output: './src/application-autoscaling/hooks/solid-query.ts' },
  'vue-query': { output: './src/application-autoscaling/hooks/vue-query.ts' },
  'svelte-query': { output: './src/application-autoscaling/hooks/svelte-query.ts' },
  'angular-query': { output: './src/application-autoscaling/hooks/angular-query.ts' },
  docs: {
    output: './src/application-autoscaling/api.md',
    curl: true,
    baseUrl: 'https://application-autoscaling.us-east-1.amazonaws.com',
  },
})
