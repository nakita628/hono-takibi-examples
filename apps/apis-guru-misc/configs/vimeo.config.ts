import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/vimeo.com/3.4/openapi.yaml',
  output: './src/vimeo/routes.ts',
  template: {},
  type: { output: './src/vimeo/types.ts' },
  client: { output: './src/vimeo/client.ts', baseUrl: '/' },
  rpc: { output: './src/vimeo/rpc.ts', parseResponse: true },
  swr: { output: './src/vimeo/hooks/swr.ts' },
  'tanstack-query': { output: './src/vimeo/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/vimeo/hooks/preact-query.ts' },
  'solid-query': { output: './src/vimeo/hooks/solid-query.ts' },
  'vue-query': { output: './src/vimeo/hooks/vue-query.ts' },
  'svelte-query': { output: './src/vimeo/hooks/svelte-query.ts' },
  'angular-query': { output: './src/vimeo/hooks/angular-query.ts' },
  docs: {
    output: './src/vimeo/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
