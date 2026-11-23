import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/amazonaws.com/cognito-idp/2016-04-18/openapi.yaml',
  output: './src/cognito-idp/routes.ts',
  template: {},
  type: { output: './src/cognito-idp/types.ts' },
  client: { output: './src/cognito-idp/client.ts', baseUrl: '/' },
  rpc: { output: './src/cognito-idp/rpc.ts', parseResponse: true },
  swr: { output: './src/cognito-idp/hooks/swr.ts' },
  'tanstack-query': { output: './src/cognito-idp/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/cognito-idp/hooks/preact-query.ts' },
  'solid-query': { output: './src/cognito-idp/hooks/solid-query.ts' },
  'vue-query': { output: './src/cognito-idp/hooks/vue-query.ts' },
  'svelte-query': { output: './src/cognito-idp/hooks/svelte-query.ts' },
  'angular-query': { output: './src/cognito-idp/hooks/angular-query.ts' },
  docs: {
    output: './src/cognito-idp/api.md',
    curl: true,
    baseUrl: 'https://cognito-idp.us-east-1.amazonaws.com',
  },
})
