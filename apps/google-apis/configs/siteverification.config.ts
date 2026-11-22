import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/siteVerification/v1/openapi.yaml',
  output: './src/siteverification/routes.ts',
  template: {},
  type: { output: './src/siteverification/types.ts' },
  client: { output: './src/siteverification/client.ts', baseUrl: '/' },
  rpc: { output: './src/siteverification/rpc.ts', parseResponse: true },
  swr: { output: './src/siteverification/hooks/swr.ts' },
  'tanstack-query': { output: './src/siteverification/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/siteverification/hooks/preact-query.ts' },
  'solid-query': { output: './src/siteverification/hooks/solid-query.ts' },
  'vue-query': { output: './src/siteverification/hooks/vue-query.ts' },
  'svelte-query': { output: './src/siteverification/hooks/svelte-query.ts' },
  'angular-query': { output: './src/siteverification/hooks/angular-query.ts' },
  docs: {
    output: './src/siteverification/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
