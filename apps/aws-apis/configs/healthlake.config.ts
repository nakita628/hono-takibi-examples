import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/healthlake/2017-07-01/openapi.yaml',
  output: './src/healthlake/routes.ts',
  template: {},
  type: { output: './src/healthlake/types.ts' },
  client: { output: './src/healthlake/client.ts', baseUrl: '/' },
  rpc: { output: './src/healthlake/rpc.ts', parseResponse: true },
  swr: { output: './src/healthlake/hooks/swr.ts' },
  'tanstack-query': { output: './src/healthlake/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/healthlake/hooks/preact-query.ts' },
  'solid-query': { output: './src/healthlake/hooks/solid-query.ts' },
  'vue-query': { output: './src/healthlake/hooks/vue-query.ts' },
  'svelte-query': { output: './src/healthlake/hooks/svelte-query.ts' },
  'angular-query': { output: './src/healthlake/hooks/angular-query.ts' },
  docs: {
    output: './src/healthlake/api.md',
    curl: true,
    baseUrl: 'https://healthlake.us-east-1.amazonaws.com',
  },
})
