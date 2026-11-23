import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/readmeio/oas-examples/main/3.0/yaml/star-trek.yaml',
  output: './src/3-0-star-trek/routes.ts',
  template: {},
  type: { output: './src/3-0-star-trek/types.ts' },
  client: { output: './src/3-0-star-trek/client.ts', baseUrl: '/' },
  rpc: { output: './src/3-0-star-trek/rpc.ts', parseResponse: true },
  swr: { output: './src/3-0-star-trek/hooks/swr.ts' },
  'tanstack-query': { output: './src/3-0-star-trek/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/3-0-star-trek/hooks/preact-query.ts' },
  'solid-query': { output: './src/3-0-star-trek/hooks/solid-query.ts' },
  'vue-query': { output: './src/3-0-star-trek/hooks/vue-query.ts' },
  'svelte-query': { output: './src/3-0-star-trek/hooks/svelte-query.ts' },
  'angular-query': { output: './src/3-0-star-trek/hooks/angular-query.ts' },
  docs: {
    output: './src/3-0-star-trek/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
