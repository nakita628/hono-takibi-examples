import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/codestar-notifications/2019-10-15/openapi.yaml',
  output: './src/codestar-notifications/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/codestar-notifications/types.ts' },
  client: { output: './src/codestar-notifications/client.ts', baseUrl: '/' },
  rpc: { output: './src/codestar-notifications/rpc.ts', parseResponse: true },
  swr: { output: './src/codestar-notifications/hooks/swr.ts' },
  'tanstack-query': { output: './src/codestar-notifications/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/codestar-notifications/hooks/preact-query.ts' },
  'solid-query': { output: './src/codestar-notifications/hooks/solid-query.ts' },
  'vue-query': { output: './src/codestar-notifications/hooks/vue-query.ts' },
  'svelte-query': { output: './src/codestar-notifications/hooks/svelte-query.ts' },
  'angular-query': { output: './src/codestar-notifications/hooks/angular-query.ts' },
  docs: {
    output: './src/codestar-notifications/api.md',
    curl: true,
    baseUrl: 'https://codestar-notifications.us-east-1.amazonaws.com',
  },
})
