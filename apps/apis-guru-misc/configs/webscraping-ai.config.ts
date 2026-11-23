import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/webscraping.ai/2.0.7/openapi.yaml',
  output: './src/webscraping-ai/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/webscraping-ai/types.ts' },
  client: { output: './src/webscraping-ai/client.ts', baseUrl: '/' },
  rpc: { output: './src/webscraping-ai/rpc.ts', parseResponse: true },
  swr: { output: './src/webscraping-ai/hooks/swr.ts' },
  'tanstack-query': { output: './src/webscraping-ai/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/webscraping-ai/hooks/preact-query.ts' },
  'solid-query': { output: './src/webscraping-ai/hooks/solid-query.ts' },
  'vue-query': { output: './src/webscraping-ai/hooks/vue-query.ts' },
  'svelte-query': { output: './src/webscraping-ai/hooks/svelte-query.ts' },
  'angular-query': { output: './src/webscraping-ai/hooks/angular-query.ts' },
  docs: {
    output: './src/webscraping-ai/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
