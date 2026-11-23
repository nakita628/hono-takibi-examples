import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/kinesis-video-media/2017-09-30/openapi.yaml',
  output: './src/kinesis-video-media/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/kinesis-video-media/types.ts' },
  client: { output: './src/kinesis-video-media/client.ts', baseUrl: '/' },
  rpc: { output: './src/kinesis-video-media/rpc.ts', parseResponse: true },
  swr: { output: './src/kinesis-video-media/hooks/swr.ts' },
  'tanstack-query': { output: './src/kinesis-video-media/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/kinesis-video-media/hooks/preact-query.ts' },
  'solid-query': { output: './src/kinesis-video-media/hooks/solid-query.ts' },
  'vue-query': { output: './src/kinesis-video-media/hooks/vue-query.ts' },
  'svelte-query': { output: './src/kinesis-video-media/hooks/svelte-query.ts' },
  'angular-query': { output: './src/kinesis-video-media/hooks/angular-query.ts' },
  docs: {
    output: './src/kinesis-video-media/api.md',
    curl: true,
    baseUrl: 'https://kinesis-video-media.us-east-1.amazonaws.com',
  },
})
