import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // Ably REST Platform API, official OpenAPI spec:
  // https://github.com/ably/open-specs/blob/98111bb20075c1beba3b66412d0c7791cbd0f168/definitions/platform-v1.yaml
  input:
    'https://raw.githubusercontent.com/ably/open-specs/main/definitions/platform-v1.yaml',
  output: './src/platform/routes.ts',
  template: {},
  type: { output: './src/platform/types.ts' },
  client: { output: './src/platform/client.ts', baseUrl: '/' },
  rpc: { output: './src/platform/rpc.ts', parseResponse: true },
  swr: { output: './src/platform/hooks/swr.ts' },
  'tanstack-query': { output: './src/platform/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/platform/hooks/preact-query.ts' },
  'solid-query': { output: './src/platform/hooks/solid-query.ts' },
  'vue-query': { output: './src/platform/hooks/vue-query.ts' },
  'svelte-query': { output: './src/platform/hooks/svelte-query.ts' },
  'angular-query': { output: './src/platform/hooks/angular-query.ts' },
  docs: {
    output: './src/platform/api.md',
    curl: true,
    baseUrl: 'https://rest.ably.io',
  },
})
