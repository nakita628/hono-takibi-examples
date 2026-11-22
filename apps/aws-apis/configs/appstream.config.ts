import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/appstream/2016-12-01/openapi.yaml',
  output: './src/appstream/routes.ts',
  template: {},
  type: { output: './src/appstream/types.ts' },
  client: { output: './src/appstream/client.ts', baseUrl: '/' },
  rpc: { output: './src/appstream/rpc.ts', parseResponse: true },
  swr: { output: './src/appstream/hooks/swr.ts' },
  'tanstack-query': { output: './src/appstream/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/appstream/hooks/preact-query.ts' },
  'solid-query': { output: './src/appstream/hooks/solid-query.ts' },
  'vue-query': { output: './src/appstream/hooks/vue-query.ts' },
  'svelte-query': { output: './src/appstream/hooks/svelte-query.ts' },
  'angular-query': { output: './src/appstream/hooks/angular-query.ts' },
  docs: {
    output: './src/appstream/api.md',
    curl: true,
    baseUrl: 'https://appstream.us-east-1.amazonaws.com',
  },
})
