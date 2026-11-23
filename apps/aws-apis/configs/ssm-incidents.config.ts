import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/ssm-incidents/2018-05-10/openapi.yaml',
  output: './src/ssm-incidents/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/ssm-incidents/types.ts' },
  client: { output: './src/ssm-incidents/client.ts', baseUrl: '/' },
  rpc: { output: './src/ssm-incidents/rpc.ts', parseResponse: true },
  swr: { output: './src/ssm-incidents/hooks/swr.ts' },
  'tanstack-query': { output: './src/ssm-incidents/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/ssm-incidents/hooks/preact-query.ts' },
  'solid-query': { output: './src/ssm-incidents/hooks/solid-query.ts' },
  'vue-query': { output: './src/ssm-incidents/hooks/vue-query.ts' },
  'svelte-query': { output: './src/ssm-incidents/hooks/svelte-query.ts' },
  'angular-query': { output: './src/ssm-incidents/hooks/angular-query.ts' },
  docs: {
    output: './src/ssm-incidents/api.md',
    curl: true,
    baseUrl: 'https://ssm-incidents.us-east-1.amazonaws.com',
  },
})
