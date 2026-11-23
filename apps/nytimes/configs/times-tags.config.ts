import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/nytimes.com/times_tags/1.0.0/openapi.yaml',
  output: './src/times-tags/routes.ts',
  template: {},
  type: { output: './src/times-tags/types.ts' },
  client: { output: './src/times-tags/client.ts', baseUrl: '/' },
  rpc: { output: './src/times-tags/rpc.ts', parseResponse: true },
  swr: { output: './src/times-tags/hooks/swr.ts' },
  'tanstack-query': { output: './src/times-tags/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/times-tags/hooks/preact-query.ts' },
  'solid-query': { output: './src/times-tags/hooks/solid-query.ts' },
  'vue-query': { output: './src/times-tags/hooks/vue-query.ts' },
  'svelte-query': { output: './src/times-tags/hooks/svelte-query.ts' },
  'angular-query': { output: './src/times-tags/hooks/angular-query.ts' },
  docs: {
    output: './src/times-tags/api.md',
    curl: true,
    baseUrl: 'https://api.nytimes.com/svc',
  },
})
