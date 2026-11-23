import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/truesight.local/11.1.00/openapi.yaml',
  output: './src/truesight/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/truesight/types.ts' },
  client: { output: './src/truesight/client.ts', baseUrl: '/' },
  rpc: { output: './src/truesight/rpc.ts', parseResponse: true },
  swr: { output: './src/truesight/hooks/swr.ts' },
  'tanstack-query': { output: './src/truesight/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/truesight/hooks/preact-query.ts' },
  'solid-query': { output: './src/truesight/hooks/solid-query.ts' },
  'vue-query': { output: './src/truesight/hooks/vue-query.ts' },
  'svelte-query': { output: './src/truesight/hooks/svelte-query.ts' },
  'angular-query': { output: './src/truesight/hooks/angular-query.ts' },
  docs: {
    output: './src/truesight/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
