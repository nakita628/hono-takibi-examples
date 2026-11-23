import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/getpostman.com/1.20.0/openapi.yaml',
  output: './src/getpostman/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/getpostman/types.ts' },
  client: { output: './src/getpostman/client.ts', baseUrl: '/' },
  rpc: { output: './src/getpostman/rpc.ts', parseResponse: true },
  swr: { output: './src/getpostman/hooks/swr.ts' },
  'tanstack-query': { output: './src/getpostman/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/getpostman/hooks/preact-query.ts' },
  'solid-query': { output: './src/getpostman/hooks/solid-query.ts' },
  'vue-query': { output: './src/getpostman/hooks/vue-query.ts' },
  'svelte-query': { output: './src/getpostman/hooks/svelte-query.ts' },
  'angular-query': { output: './src/getpostman/hooks/angular-query.ts' },
  docs: {
    output: './src/getpostman/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
