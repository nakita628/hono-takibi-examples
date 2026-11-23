import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/apigatewaymanagementapi/2018-11-29/openapi.yaml',
  output: './src/apigatewaymanagementapi/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/apigatewaymanagementapi/types.ts' },
  client: { output: './src/apigatewaymanagementapi/client.ts', baseUrl: '/' },
  rpc: { output: './src/apigatewaymanagementapi/rpc.ts', parseResponse: true },
  swr: { output: './src/apigatewaymanagementapi/hooks/swr.ts' },
  'tanstack-query': { output: './src/apigatewaymanagementapi/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/apigatewaymanagementapi/hooks/preact-query.ts' },
  'solid-query': { output: './src/apigatewaymanagementapi/hooks/solid-query.ts' },
  'vue-query': { output: './src/apigatewaymanagementapi/hooks/vue-query.ts' },
  'svelte-query': { output: './src/apigatewaymanagementapi/hooks/svelte-query.ts' },
  'angular-query': { output: './src/apigatewaymanagementapi/hooks/angular-query.ts' },
  docs: {
    output: './src/apigatewaymanagementapi/api.md',
    curl: true,
    baseUrl: 'https://apigatewaymanagementapi.us-east-1.amazonaws.com',
  },
})
