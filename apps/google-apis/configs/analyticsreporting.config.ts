import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/analyticsreporting/v4/openapi.yaml',
  output: './src/analyticsreporting/routes.ts',
  template: {},
  type: { output: './src/analyticsreporting/types.ts' },
  client: { output: './src/analyticsreporting/client.ts', baseUrl: '/' },
  rpc: { output: './src/analyticsreporting/rpc.ts', parseResponse: true },
  swr: { output: './src/analyticsreporting/hooks/swr.ts' },
  'tanstack-query': { output: './src/analyticsreporting/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/analyticsreporting/hooks/preact-query.ts' },
  'solid-query': { output: './src/analyticsreporting/hooks/solid-query.ts' },
  'vue-query': { output: './src/analyticsreporting/hooks/vue-query.ts' },
  'svelte-query': { output: './src/analyticsreporting/hooks/svelte-query.ts' },
  'angular-query': { output: './src/analyticsreporting/hooks/angular-query.ts' },
  docs: {
    output: './src/analyticsreporting/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
