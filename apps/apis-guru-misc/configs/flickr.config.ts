import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/flickr.com/1.0.0/openapi.yaml',
  output: './src/flickr/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/flickr/types.ts' },
  client: { output: './src/flickr/client.ts', baseUrl: '/' },
  rpc: { output: './src/flickr/rpc.ts', parseResponse: true },
  swr: { output: './src/flickr/hooks/swr.ts' },
  'tanstack-query': { output: './src/flickr/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/flickr/hooks/preact-query.ts' },
  'solid-query': { output: './src/flickr/hooks/solid-query.ts' },
  'vue-query': { output: './src/flickr/hooks/vue-query.ts' },
  'svelte-query': { output: './src/flickr/hooks/svelte-query.ts' },
  'angular-query': { output: './src/flickr/hooks/angular-query.ts' },
  docs: {
    output: './src/flickr/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
