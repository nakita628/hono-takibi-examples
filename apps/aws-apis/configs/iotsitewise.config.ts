import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/iotsitewise/2019-12-02/openapi.yaml',
  output: './src/iotsitewise/routes.ts',
  template: {},
  type: { output: './src/iotsitewise/types.ts' },
  client: { output: './src/iotsitewise/client.ts', baseUrl: '/' },
  rpc: { output: './src/iotsitewise/rpc.ts', parseResponse: true },
  swr: { output: './src/iotsitewise/hooks/swr.ts' },
  'tanstack-query': { output: './src/iotsitewise/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/iotsitewise/hooks/preact-query.ts' },
  'solid-query': { output: './src/iotsitewise/hooks/solid-query.ts' },
  'vue-query': { output: './src/iotsitewise/hooks/vue-query.ts' },
  'svelte-query': { output: './src/iotsitewise/hooks/svelte-query.ts' },
  'angular-query': { output: './src/iotsitewise/hooks/angular-query.ts' },
  docs: {
    output: './src/iotsitewise/api.md',
    curl: true,
    baseUrl: 'https://iotsitewise.us-east-1.amazonaws.com',
  },
})
