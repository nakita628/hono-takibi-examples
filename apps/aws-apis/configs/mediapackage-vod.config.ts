import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/mediapackage-vod/2018-11-07/openapi.yaml',
  output: './src/mediapackage-vod/routes.ts',
  template: {},
  type: { output: './src/mediapackage-vod/types.ts' },
  client: { output: './src/mediapackage-vod/client.ts', baseUrl: '/' },
  rpc: { output: './src/mediapackage-vod/rpc.ts', parseResponse: true },
  swr: { output: './src/mediapackage-vod/hooks/swr.ts' },
  'tanstack-query': { output: './src/mediapackage-vod/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/mediapackage-vod/hooks/preact-query.ts' },
  'solid-query': { output: './src/mediapackage-vod/hooks/solid-query.ts' },
  'vue-query': { output: './src/mediapackage-vod/hooks/vue-query.ts' },
  'svelte-query': { output: './src/mediapackage-vod/hooks/svelte-query.ts' },
  'angular-query': { output: './src/mediapackage-vod/hooks/angular-query.ts' },
  docs: {
    output: './src/mediapackage-vod/api.md',
    curl: true,
    baseUrl: 'https://mediapackage-vod.us-east-1.amazonaws.com',
  },
})
