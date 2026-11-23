import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/nlpcloud.io/1.0.0/openapi.yaml',
  output: './src/nlpcloud-io/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/nlpcloud-io/types.ts' },
  client: { output: './src/nlpcloud-io/client.ts', baseUrl: '/' },
  rpc: { output: './src/nlpcloud-io/rpc.ts', parseResponse: true },
  swr: { output: './src/nlpcloud-io/hooks/swr.ts' },
  'tanstack-query': { output: './src/nlpcloud-io/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/nlpcloud-io/hooks/preact-query.ts' },
  'solid-query': { output: './src/nlpcloud-io/hooks/solid-query.ts' },
  'vue-query': { output: './src/nlpcloud-io/hooks/vue-query.ts' },
  'svelte-query': { output: './src/nlpcloud-io/hooks/svelte-query.ts' },
  'angular-query': { output: './src/nlpcloud-io/hooks/angular-query.ts' },
  docs: {
    output: './src/nlpcloud-io/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
