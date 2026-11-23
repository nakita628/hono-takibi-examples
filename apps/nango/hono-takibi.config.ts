import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // Nango API, official OpenAPI spec:
  // https://github.com/NangoHQ/nango/blob/23552322ece44f817f224ce81b66d1a18b18bc2b/docs/spec.yaml
  input: 'https://raw.githubusercontent.com/NangoHQ/nango/master/docs/spec.yaml',
  output: './src/routes.ts',
  template: {},
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
    baseUrl: 'https://api.nango.dev',
  },
})
