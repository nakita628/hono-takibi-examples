import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/amazonaws.com/ssm/2014-11-06/openapi.yaml',
  output: './src/ssm/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/ssm/types.ts' },
  client: { output: './src/ssm/client.ts', baseUrl: '/' },
  rpc: { output: './src/ssm/rpc.ts', parseResponse: true },
  swr: { output: './src/ssm/hooks/swr.ts' },
  'tanstack-query': { output: './src/ssm/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/ssm/hooks/preact-query.ts' },
  'solid-query': { output: './src/ssm/hooks/solid-query.ts' },
  'vue-query': { output: './src/ssm/hooks/vue-query.ts' },
  'svelte-query': { output: './src/ssm/hooks/svelte-query.ts' },
  'angular-query': { output: './src/ssm/hooks/angular-query.ts' },
  docs: {
    output: './src/ssm/api.md',
    curl: true,
    baseUrl: 'https://ssm.us-east-1.amazonaws.com',
  },
})
