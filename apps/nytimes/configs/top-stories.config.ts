import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/nytimes.com/top_stories/2.0.0/openapi.yaml',
  output: './src/top-stories/routes.ts',
  template: {},
  type: { output: './src/top-stories/types.ts' },
  client: { output: './src/top-stories/client.ts', baseUrl: '/' },
  rpc: { output: './src/top-stories/rpc.ts', parseResponse: true },
  swr: { output: './src/top-stories/hooks/swr.ts' },
  'tanstack-query': { output: './src/top-stories/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/top-stories/hooks/preact-query.ts' },
  'solid-query': { output: './src/top-stories/hooks/solid-query.ts' },
  'vue-query': { output: './src/top-stories/hooks/vue-query.ts' },
  'svelte-query': { output: './src/top-stories/hooks/svelte-query.ts' },
  'angular-query': { output: './src/top-stories/hooks/angular-query.ts' },
  docs: {
    output: './src/top-stories/api.md',
    curl: true,
    baseUrl: 'https://api.nytimes.com/svc',
  },
})
