import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/qldb-session/2019-07-11/openapi.yaml',
  output: './src/qldb-session/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/qldb-session/types.ts' },
  client: { output: './src/qldb-session/client.ts', baseUrl: '/' },
  rpc: { output: './src/qldb-session/rpc.ts', parseResponse: true },
  swr: { output: './src/qldb-session/hooks/swr.ts' },
  'tanstack-query': { output: './src/qldb-session/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/qldb-session/hooks/preact-query.ts' },
  'solid-query': { output: './src/qldb-session/hooks/solid-query.ts' },
  'vue-query': { output: './src/qldb-session/hooks/vue-query.ts' },
  'svelte-query': { output: './src/qldb-session/hooks/svelte-query.ts' },
  'angular-query': { output: './src/qldb-session/hooks/angular-query.ts' },
  docs: {
    output: './src/qldb-session/api.md',
    curl: true,
    baseUrl: 'https://qldb-session.us-east-1.amazonaws.com',
  },
})
