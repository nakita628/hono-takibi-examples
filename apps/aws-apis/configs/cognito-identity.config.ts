import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/cognito-identity/2014-06-30/openapi.yaml',
  output: './src/cognito-identity/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/cognito-identity/types.ts' },
  client: { output: './src/cognito-identity/client.ts', baseUrl: '/' },
  rpc: { output: './src/cognito-identity/rpc.ts', parseResponse: true },
  swr: { output: './src/cognito-identity/hooks/swr.ts' },
  'tanstack-query': { output: './src/cognito-identity/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/cognito-identity/hooks/preact-query.ts' },
  'solid-query': { output: './src/cognito-identity/hooks/solid-query.ts' },
  'vue-query': { output: './src/cognito-identity/hooks/vue-query.ts' },
  'svelte-query': { output: './src/cognito-identity/hooks/svelte-query.ts' },
  'angular-query': { output: './src/cognito-identity/hooks/angular-query.ts' },
  docs: {
    output: './src/cognito-identity/api.md',
    curl: true,
    baseUrl: 'https://cognito-identity.us-east-1.amazonaws.com',
  },
})
