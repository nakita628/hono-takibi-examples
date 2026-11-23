import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/amazonaws.com/cloudformation/2010-05-15/openapi.yaml',
  output: './src/cloudformation/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/cloudformation/types.ts' },
  client: { output: './src/cloudformation/client.ts', baseUrl: '/' },
  rpc: { output: './src/cloudformation/rpc.ts', parseResponse: true },
  swr: { output: './src/cloudformation/hooks/swr.ts' },
  'tanstack-query': { output: './src/cloudformation/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/cloudformation/hooks/preact-query.ts' },
  'solid-query': { output: './src/cloudformation/hooks/solid-query.ts' },
  'vue-query': { output: './src/cloudformation/hooks/vue-query.ts' },
  'svelte-query': { output: './src/cloudformation/hooks/svelte-query.ts' },
  'angular-query': { output: './src/cloudformation/hooks/angular-query.ts' },
  docs: {
    output: './src/cloudformation/api.md',
    curl: true,
    baseUrl: 'https://cloudformation.us-east-1.amazonaws.com',
  },
})
