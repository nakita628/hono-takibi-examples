import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/kinesisanalyticsv2/2018-05-23/openapi.yaml',
  output: './src/kinesisanalyticsv2/routes.ts',
  template: {},
  type: { output: './src/kinesisanalyticsv2/types.ts' },
  client: { output: './src/kinesisanalyticsv2/client.ts', baseUrl: '/' },
  rpc: { output: './src/kinesisanalyticsv2/rpc.ts', parseResponse: true },
  swr: { output: './src/kinesisanalyticsv2/hooks/swr.ts' },
  'tanstack-query': { output: './src/kinesisanalyticsv2/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/kinesisanalyticsv2/hooks/preact-query.ts' },
  'solid-query': { output: './src/kinesisanalyticsv2/hooks/solid-query.ts' },
  'vue-query': { output: './src/kinesisanalyticsv2/hooks/vue-query.ts' },
  'svelte-query': { output: './src/kinesisanalyticsv2/hooks/svelte-query.ts' },
  'angular-query': { output: './src/kinesisanalyticsv2/hooks/angular-query.ts' },
  docs: {
    output: './src/kinesisanalyticsv2/api.md',
    curl: true,
    baseUrl: 'https://kinesisanalyticsv2.us-east-1.amazonaws.com',
  },
})
