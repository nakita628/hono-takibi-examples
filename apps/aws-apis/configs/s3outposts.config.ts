import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/s3outposts/2017-07-25/openapi.yaml',
  output: './src/s3outposts/routes.ts',
  template: {},
  type: { output: './src/s3outposts/types.ts' },
  client: { output: './src/s3outposts/client.ts', baseUrl: '/' },
  rpc: { output: './src/s3outposts/rpc.ts', parseResponse: true },
  swr: { output: './src/s3outposts/hooks/swr.ts' },
  'tanstack-query': { output: './src/s3outposts/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/s3outposts/hooks/preact-query.ts' },
  'solid-query': { output: './src/s3outposts/hooks/solid-query.ts' },
  'vue-query': { output: './src/s3outposts/hooks/vue-query.ts' },
  'svelte-query': { output: './src/s3outposts/hooks/svelte-query.ts' },
  'angular-query': { output: './src/s3outposts/hooks/angular-query.ts' },
  docs: {
    output: './src/s3outposts/api.md',
    curl: true,
    baseUrl: 'https://s3outposts.us-east-1.amazonaws.com',
  },
})
