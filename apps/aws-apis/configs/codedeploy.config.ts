import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/codedeploy/2014-10-06/openapi.yaml',
  output: './src/codedeploy/routes.ts',
  template: {},
  type: { output: './src/codedeploy/types.ts' },
  client: { output: './src/codedeploy/client.ts', baseUrl: '/' },
  rpc: { output: './src/codedeploy/rpc.ts', parseResponse: true },
  swr: { output: './src/codedeploy/hooks/swr.ts' },
  'tanstack-query': { output: './src/codedeploy/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/codedeploy/hooks/preact-query.ts' },
  'solid-query': { output: './src/codedeploy/hooks/solid-query.ts' },
  'vue-query': { output: './src/codedeploy/hooks/vue-query.ts' },
  'svelte-query': { output: './src/codedeploy/hooks/svelte-query.ts' },
  'angular-query': { output: './src/codedeploy/hooks/angular-query.ts' },
  docs: {
    output: './src/codedeploy/api.md',
    curl: true,
    baseUrl: 'https://codedeploy.us-east-1.amazonaws.com',
  },
})
