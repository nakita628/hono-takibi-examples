import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/s3control/2018-08-20/openapi.yaml',
  output: './src/s3control/routes.ts',
  template: {},
  type: { output: './src/s3control/types.ts' },
  client: { output: './src/s3control/client.ts', baseUrl: '/' },
  rpc: { output: './src/s3control/rpc.ts', parseResponse: true },
  swr: { output: './src/s3control/hooks/swr.ts' },
  'tanstack-query': { output: './src/s3control/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/s3control/hooks/preact-query.ts' },
  'solid-query': { output: './src/s3control/hooks/solid-query.ts' },
  'vue-query': { output: './src/s3control/hooks/vue-query.ts' },
  'svelte-query': { output: './src/s3control/hooks/svelte-query.ts' },
  'angular-query': { output: './src/s3control/hooks/angular-query.ts' },
  docs: {
    output: './src/s3control/api.md',
    curl: true,
    baseUrl: 'https://s3control.us-east-1.amazonaws.com',
  },
})
