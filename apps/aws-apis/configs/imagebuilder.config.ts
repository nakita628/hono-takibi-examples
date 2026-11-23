import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/imagebuilder/2019-12-02/openapi.yaml',
  output: './src/imagebuilder/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/imagebuilder/types.ts' },
  client: { output: './src/imagebuilder/client.ts', baseUrl: '/' },
  rpc: { output: './src/imagebuilder/rpc.ts', parseResponse: true },
  swr: { output: './src/imagebuilder/hooks/swr.ts' },
  'tanstack-query': { output: './src/imagebuilder/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/imagebuilder/hooks/preact-query.ts' },
  'solid-query': { output: './src/imagebuilder/hooks/solid-query.ts' },
  'vue-query': { output: './src/imagebuilder/hooks/vue-query.ts' },
  'svelte-query': { output: './src/imagebuilder/hooks/svelte-query.ts' },
  'angular-query': { output: './src/imagebuilder/hooks/angular-query.ts' },
  docs: {
    output: './src/imagebuilder/api.md',
    curl: true,
    baseUrl: 'https://imagebuilder.us-east-1.amazonaws.com',
  },
})
