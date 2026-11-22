import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/apigatewayv2/2018-11-29/openapi.yaml',
  output: './src/apigatewayv2/routes.ts',
  template: {},
  type: { output: './src/apigatewayv2/types.ts' },
  client: { output: './src/apigatewayv2/client.ts', baseUrl: '/' },
  rpc: { output: './src/apigatewayv2/rpc.ts', parseResponse: true },
  swr: { output: './src/apigatewayv2/hooks/swr.ts' },
  'tanstack-query': { output: './src/apigatewayv2/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/apigatewayv2/hooks/preact-query.ts' },
  'solid-query': { output: './src/apigatewayv2/hooks/solid-query.ts' },
  'vue-query': { output: './src/apigatewayv2/hooks/vue-query.ts' },
  'svelte-query': { output: './src/apigatewayv2/hooks/svelte-query.ts' },
  'angular-query': { output: './src/apigatewayv2/hooks/angular-query.ts' },
  docs: {
    output: './src/apigatewayv2/api.md',
    curl: true,
    baseUrl: 'https://apigatewayv2.us-east-1.amazonaws.com',
  },
})
