import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/amazonaws.com/autoscaling/2011-01-01/openapi.yaml',
  output: './src/autoscaling/routes.ts',
  template: {},
  type: { output: './src/autoscaling/types.ts' },
  client: { output: './src/autoscaling/client.ts', baseUrl: '/' },
  rpc: { output: './src/autoscaling/rpc.ts', parseResponse: true },
  swr: { output: './src/autoscaling/hooks/swr.ts' },
  'tanstack-query': { output: './src/autoscaling/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/autoscaling/hooks/preact-query.ts' },
  'solid-query': { output: './src/autoscaling/hooks/solid-query.ts' },
  'vue-query': { output: './src/autoscaling/hooks/vue-query.ts' },
  'svelte-query': { output: './src/autoscaling/hooks/svelte-query.ts' },
  'angular-query': { output: './src/autoscaling/hooks/angular-query.ts' },
  docs: {
    output: './src/autoscaling/api.md',
    curl: true,
    baseUrl: 'https://autoscaling.us-east-1.amazonaws.com',
  },
})
