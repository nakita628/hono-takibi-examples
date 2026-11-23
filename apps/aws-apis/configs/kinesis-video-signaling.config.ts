import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/kinesis-video-signaling/2019-12-04/openapi.yaml',
  output: './src/kinesis-video-signaling/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/kinesis-video-signaling/types.ts' },
  client: { output: './src/kinesis-video-signaling/client.ts', baseUrl: '/' },
  rpc: { output: './src/kinesis-video-signaling/rpc.ts', parseResponse: true },
  swr: { output: './src/kinesis-video-signaling/hooks/swr.ts' },
  'tanstack-query': { output: './src/kinesis-video-signaling/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/kinesis-video-signaling/hooks/preact-query.ts' },
  'solid-query': { output: './src/kinesis-video-signaling/hooks/solid-query.ts' },
  'vue-query': { output: './src/kinesis-video-signaling/hooks/vue-query.ts' },
  'svelte-query': { output: './src/kinesis-video-signaling/hooks/svelte-query.ts' },
  'angular-query': { output: './src/kinesis-video-signaling/hooks/angular-query.ts' },
  docs: {
    output: './src/kinesis-video-signaling/api.md',
    curl: true,
    baseUrl: 'https://kinesis-video-signaling.us-east-1.amazonaws.com',
  },
})
