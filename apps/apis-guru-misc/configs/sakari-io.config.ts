import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/sakari.io/1.0.1/openapi.yaml',
  output: './src/sakari-io/routes.ts',
  template: {},
  type: { output: './src/sakari-io/types.ts' },
  client: { output: './src/sakari-io/client.ts', baseUrl: '/' },
  rpc: { output: './src/sakari-io/rpc.ts', parseResponse: true },
  swr: { output: './src/sakari-io/hooks/swr.ts' },
  'tanstack-query': { output: './src/sakari-io/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/sakari-io/hooks/preact-query.ts' },
  'solid-query': { output: './src/sakari-io/hooks/solid-query.ts' },
  'vue-query': { output: './src/sakari-io/hooks/vue-query.ts' },
  'svelte-query': { output: './src/sakari-io/hooks/svelte-query.ts' },
  'angular-query': { output: './src/sakari-io/hooks/angular-query.ts' },
  docs: {
    output: './src/sakari-io/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
