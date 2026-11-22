import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/iotsecuretunneling/2018-10-05/openapi.yaml',
  output: './src/iotsecuretunneling/routes.ts',
  template: {},
  type: { output: './src/iotsecuretunneling/types.ts' },
  client: { output: './src/iotsecuretunneling/client.ts', baseUrl: '/' },
  rpc: { output: './src/iotsecuretunneling/rpc.ts', parseResponse: true },
  swr: { output: './src/iotsecuretunneling/hooks/swr.ts' },
  'tanstack-query': { output: './src/iotsecuretunneling/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/iotsecuretunneling/hooks/preact-query.ts' },
  'solid-query': { output: './src/iotsecuretunneling/hooks/solid-query.ts' },
  'vue-query': { output: './src/iotsecuretunneling/hooks/vue-query.ts' },
  'svelte-query': { output: './src/iotsecuretunneling/hooks/svelte-query.ts' },
  'angular-query': { output: './src/iotsecuretunneling/hooks/angular-query.ts' },
  docs: {
    output: './src/iotsecuretunneling/api.md',
    curl: true,
    baseUrl: 'https://iotsecuretunneling.us-east-1.amazonaws.com',
  },
})
