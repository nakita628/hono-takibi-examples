import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/gettyimages.com/3/openapi.yaml',
  output: './src/gettyimages/routes.ts',
  template: {},
  type: { output: './src/gettyimages/types.ts' },
  client: { output: './src/gettyimages/client.ts', baseUrl: '/' },
  rpc: { output: './src/gettyimages/rpc.ts', parseResponse: true },
  swr: { output: './src/gettyimages/hooks/swr.ts' },
  'tanstack-query': { output: './src/gettyimages/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/gettyimages/hooks/preact-query.ts' },
  'solid-query': { output: './src/gettyimages/hooks/solid-query.ts' },
  'vue-query': { output: './src/gettyimages/hooks/vue-query.ts' },
  'svelte-query': { output: './src/gettyimages/hooks/svelte-query.ts' },
  'angular-query': { output: './src/gettyimages/hooks/angular-query.ts' },
  docs: {
    output: './src/gettyimages/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
