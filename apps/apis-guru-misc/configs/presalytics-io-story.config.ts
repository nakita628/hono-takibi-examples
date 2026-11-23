import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/presalytics.io/story/0.3.1/openapi.yaml',
  output: './src/presalytics-io-story/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/presalytics-io-story/types.ts' },
  client: { output: './src/presalytics-io-story/client.ts', baseUrl: '/' },
  rpc: { output: './src/presalytics-io-story/rpc.ts', parseResponse: true },
  swr: { output: './src/presalytics-io-story/hooks/swr.ts' },
  'tanstack-query': { output: './src/presalytics-io-story/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/presalytics-io-story/hooks/preact-query.ts' },
  'solid-query': { output: './src/presalytics-io-story/hooks/solid-query.ts' },
  'vue-query': { output: './src/presalytics-io-story/hooks/vue-query.ts' },
  'svelte-query': { output: './src/presalytics-io-story/hooks/svelte-query.ts' },
  'angular-query': { output: './src/presalytics-io-story/hooks/angular-query.ts' },
  docs: {
    output: './src/presalytics-io-story/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
