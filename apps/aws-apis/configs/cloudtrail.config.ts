import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/cloudtrail/2013-11-01/openapi.yaml',
  output: './src/cloudtrail/routes.ts',
  template: {},
  type: { output: './src/cloudtrail/types.ts' },
  client: { output: './src/cloudtrail/client.ts', baseUrl: '/' },
  rpc: { output: './src/cloudtrail/rpc.ts', parseResponse: true },
  swr: { output: './src/cloudtrail/hooks/swr.ts' },
  'tanstack-query': { output: './src/cloudtrail/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/cloudtrail/hooks/preact-query.ts' },
  'solid-query': { output: './src/cloudtrail/hooks/solid-query.ts' },
  'vue-query': { output: './src/cloudtrail/hooks/vue-query.ts' },
  'svelte-query': { output: './src/cloudtrail/hooks/svelte-query.ts' },
  'angular-query': { output: './src/cloudtrail/hooks/angular-query.ts' },
  docs: {
    output: './src/cloudtrail/api.md',
    curl: true,
    baseUrl: 'https://cloudtrail.us-east-1.amazonaws.com',
  },
})
