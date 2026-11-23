import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/ebs/2019-11-02/openapi.yaml',
  output: './src/ebs/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/ebs/types.ts' },
  client: { output: './src/ebs/client.ts', baseUrl: '/' },
  rpc: { output: './src/ebs/rpc.ts', parseResponse: true },
  swr: { output: './src/ebs/hooks/swr.ts' },
  'tanstack-query': { output: './src/ebs/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/ebs/hooks/preact-query.ts' },
  'solid-query': { output: './src/ebs/hooks/solid-query.ts' },
  'vue-query': { output: './src/ebs/hooks/vue-query.ts' },
  'svelte-query': { output: './src/ebs/hooks/svelte-query.ts' },
  'angular-query': { output: './src/ebs/hooks/angular-query.ts' },
  docs: {
    output: './src/ebs/api.md',
    curl: true,
    baseUrl: 'https://ebs.us-east-1.amazonaws.com',
  },
})
