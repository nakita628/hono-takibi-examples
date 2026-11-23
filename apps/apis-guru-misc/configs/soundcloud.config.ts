import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/soundcloud.com/1.0.0/openapi.yaml',
  output: './src/soundcloud/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/soundcloud/types.ts' },
  client: { output: './src/soundcloud/client.ts', baseUrl: '/' },
  rpc: { output: './src/soundcloud/rpc.ts', parseResponse: true },
  swr: { output: './src/soundcloud/hooks/swr.ts' },
  'tanstack-query': { output: './src/soundcloud/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/soundcloud/hooks/preact-query.ts' },
  'solid-query': { output: './src/soundcloud/hooks/solid-query.ts' },
  'vue-query': { output: './src/soundcloud/hooks/vue-query.ts' },
  'svelte-query': { output: './src/soundcloud/hooks/svelte-query.ts' },
  'angular-query': { output: './src/soundcloud/hooks/angular-query.ts' },
  docs: {
    output: './src/soundcloud/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
