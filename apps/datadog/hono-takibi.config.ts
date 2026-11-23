import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // Datadog API v2 (DataDog/datadog-api-client-typescript)
  input: 'https://raw.githubusercontent.com/DataDog/datadog-api-client-typescript/master/.generator/schemas/v2/openapi.yaml',
  output: './src/routes.ts',
  // template: { routeHandler: true }: with the default template, the largest handler file chains about 2,000
  // .openapi() calls, and reading it back overflows the stack. With routeHandler, index.ts chains every route
  // instead, so only a run on a fresh src/ (no handlers/, no index.ts) gets through (nakita628/hono-takibi#521).
  template: { routeHandler: true },
  type: { output: './src/types.ts' },
  client: { output: './src/client.ts', baseUrl: '/' },
  rpc: { output: './src/rpc.ts', parseResponse: true },
  swr: { output: './src/hooks/swr.ts' },
  'tanstack-query': { output: './src/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/hooks/preact-query.ts' },
  'solid-query': { output: './src/hooks/solid-query.ts' },
  'vue-query': { output: './src/hooks/vue-query.ts' },
  'svelte-query': { output: './src/hooks/svelte-query.ts' },
  'angular-query': { output: './src/hooks/angular-query.ts' },
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://api.datadoghq.com',
  },
})
