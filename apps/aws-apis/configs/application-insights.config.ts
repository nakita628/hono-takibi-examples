import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/application-insights/2018-11-25/openapi.yaml',
  output: './src/application-insights/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/application-insights/types.ts' },
  client: { output: './src/application-insights/client.ts', baseUrl: '/' },
  rpc: { output: './src/application-insights/rpc.ts', parseResponse: true },
  swr: { output: './src/application-insights/hooks/swr.ts' },
  'tanstack-query': { output: './src/application-insights/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/application-insights/hooks/preact-query.ts' },
  'solid-query': { output: './src/application-insights/hooks/solid-query.ts' },
  'vue-query': { output: './src/application-insights/hooks/vue-query.ts' },
  'svelte-query': { output: './src/application-insights/hooks/svelte-query.ts' },
  'angular-query': { output: './src/application-insights/hooks/angular-query.ts' },
  docs: {
    output: './src/application-insights/api.md',
    curl: true,
    baseUrl: 'https://application-insights.us-east-1.amazonaws.com',
  },
})
