import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/api.video/1/openapi.yaml',
  output: './src/api-video/routes.ts',
  template: {},
  type: { output: './src/api-video/types.ts' },
  client: { output: './src/api-video/client.ts', baseUrl: '/' },
  rpc: { output: './src/api-video/rpc.ts', parseResponse: true },
  swr: { output: './src/api-video/hooks/swr.ts' },
  'tanstack-query': { output: './src/api-video/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/api-video/hooks/preact-query.ts' },
  'solid-query': { output: './src/api-video/hooks/solid-query.ts' },
  'vue-query': { output: './src/api-video/hooks/vue-query.ts' },
  'svelte-query': { output: './src/api-video/hooks/svelte-query.ts' },
  'angular-query': { output: './src/api-video/hooks/angular-query.ts' },
  docs: {
    output: './src/api-video/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
