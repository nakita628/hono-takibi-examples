import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/kinesisanalytics/2015-08-14/openapi.yaml',
  output: './src/kinesisanalytics/routes.ts',
  template: {},
  type: { output: './src/kinesisanalytics/types.ts' },
  client: { output: './src/kinesisanalytics/client.ts', baseUrl: '/' },
  rpc: { output: './src/kinesisanalytics/rpc.ts', parseResponse: true },
  swr: { output: './src/kinesisanalytics/hooks/swr.ts' },
  'tanstack-query': { output: './src/kinesisanalytics/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/kinesisanalytics/hooks/preact-query.ts' },
  'solid-query': { output: './src/kinesisanalytics/hooks/solid-query.ts' },
  'vue-query': { output: './src/kinesisanalytics/hooks/vue-query.ts' },
  'svelte-query': { output: './src/kinesisanalytics/hooks/svelte-query.ts' },
  'angular-query': { output: './src/kinesisanalytics/hooks/angular-query.ts' },
  docs: {
    output: './src/kinesisanalytics/api.md',
    curl: true,
    baseUrl: 'https://kinesisanalytics.us-east-1.amazonaws.com',
  },
})
