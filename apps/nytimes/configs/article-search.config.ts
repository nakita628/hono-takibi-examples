import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/nytimes.com/article_search/1.0.0/openapi.yaml',
  output: './src/article-search/routes.ts',
  template: {},
  type: { output: './src/article-search/types.ts' },
  client: { output: './src/article-search/client.ts', baseUrl: '/' },
  rpc: { output: './src/article-search/rpc.ts', parseResponse: true },
  swr: { output: './src/article-search/hooks/swr.ts' },
  'tanstack-query': { output: './src/article-search/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/article-search/hooks/preact-query.ts' },
  'solid-query': { output: './src/article-search/hooks/solid-query.ts' },
  'vue-query': { output: './src/article-search/hooks/vue-query.ts' },
  'svelte-query': { output: './src/article-search/hooks/svelte-query.ts' },
  'angular-query': { output: './src/article-search/hooks/angular-query.ts' },
  docs: {
    output: './src/article-search/api.md',
    curl: true,
    baseUrl: 'https://api.nytimes.com/svc',
  },
})
