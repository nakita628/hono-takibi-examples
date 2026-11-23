import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/cloud9/2017-09-23/openapi.yaml',
  output: './src/cloud9/routes.ts',
  template: {},
  type: { output: './src/cloud9/types.ts' },
  client: { output: './src/cloud9/client.ts', baseUrl: '/' },
  rpc: { output: './src/cloud9/rpc.ts', parseResponse: true },
  swr: { output: './src/cloud9/hooks/swr.ts' },
  'tanstack-query': { output: './src/cloud9/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/cloud9/hooks/preact-query.ts' },
  'solid-query': { output: './src/cloud9/hooks/solid-query.ts' },
  'vue-query': { output: './src/cloud9/hooks/vue-query.ts' },
  'svelte-query': { output: './src/cloud9/hooks/svelte-query.ts' },
  'angular-query': { output: './src/cloud9/hooks/angular-query.ts' },
  docs: {
    output: './src/cloud9/api.md',
    curl: true,
    baseUrl: 'https://cloud9.us-east-1.amazonaws.com',
  },
})
