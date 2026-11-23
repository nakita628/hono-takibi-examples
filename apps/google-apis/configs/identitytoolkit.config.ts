import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/identitytoolkit/v2/openapi.yaml',
  output: './src/identitytoolkit/routes.ts',
  template: {},
  type: { output: './src/identitytoolkit/types.ts' },
  client: { output: './src/identitytoolkit/client.ts', baseUrl: '/' },
  rpc: { output: './src/identitytoolkit/rpc.ts', parseResponse: true },
  swr: { output: './src/identitytoolkit/hooks/swr.ts' },
  'tanstack-query': { output: './src/identitytoolkit/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/identitytoolkit/hooks/preact-query.ts' },
  'solid-query': { output: './src/identitytoolkit/hooks/solid-query.ts' },
  'vue-query': { output: './src/identitytoolkit/hooks/vue-query.ts' },
  'svelte-query': { output: './src/identitytoolkit/hooks/svelte-query.ts' },
  'angular-query': { output: './src/identitytoolkit/hooks/angular-query.ts' },
  docs: {
    output: './src/identitytoolkit/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
