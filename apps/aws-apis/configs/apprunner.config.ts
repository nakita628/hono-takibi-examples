import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/apprunner/2020-05-15/openapi.yaml',
  output: './src/apprunner/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/apprunner/types.ts' },
  client: { output: './src/apprunner/client.ts', baseUrl: '/' },
  rpc: { output: './src/apprunner/rpc.ts', parseResponse: true },
  swr: { output: './src/apprunner/hooks/swr.ts' },
  'tanstack-query': { output: './src/apprunner/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/apprunner/hooks/preact-query.ts' },
  'solid-query': { output: './src/apprunner/hooks/solid-query.ts' },
  'vue-query': { output: './src/apprunner/hooks/vue-query.ts' },
  'svelte-query': { output: './src/apprunner/hooks/svelte-query.ts' },
  'angular-query': { output: './src/apprunner/hooks/angular-query.ts' },
  docs: {
    output: './src/apprunner/api.md',
    curl: true,
    baseUrl: 'https://apprunner.us-east-1.amazonaws.com',
  },
})
