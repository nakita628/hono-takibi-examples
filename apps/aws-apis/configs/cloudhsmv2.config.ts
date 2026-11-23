import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/cloudhsmv2/2017-04-28/openapi.yaml',
  output: './src/cloudhsmv2/routes.ts',
  template: {},
  type: { output: './src/cloudhsmv2/types.ts' },
  client: { output: './src/cloudhsmv2/client.ts', baseUrl: '/' },
  rpc: { output: './src/cloudhsmv2/rpc.ts', parseResponse: true },
  swr: { output: './src/cloudhsmv2/hooks/swr.ts' },
  'tanstack-query': { output: './src/cloudhsmv2/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/cloudhsmv2/hooks/preact-query.ts' },
  'solid-query': { output: './src/cloudhsmv2/hooks/solid-query.ts' },
  'vue-query': { output: './src/cloudhsmv2/hooks/vue-query.ts' },
  'svelte-query': { output: './src/cloudhsmv2/hooks/svelte-query.ts' },
  'angular-query': { output: './src/cloudhsmv2/hooks/angular-query.ts' },
  docs: {
    output: './src/cloudhsmv2/api.md',
    curl: true,
    baseUrl: 'https://cloudhsmv2.us-east-1.amazonaws.com',
  },
})
