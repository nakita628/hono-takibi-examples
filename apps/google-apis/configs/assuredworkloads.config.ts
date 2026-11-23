import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/assuredworkloads/v1beta1/openapi.yaml',
  output: './src/assuredworkloads/routes.ts',
  template: {},
  type: { output: './src/assuredworkloads/types.ts' },
  client: { output: './src/assuredworkloads/client.ts', baseUrl: '/' },
  rpc: { output: './src/assuredworkloads/rpc.ts', parseResponse: true },
  swr: { output: './src/assuredworkloads/hooks/swr.ts' },
  'tanstack-query': { output: './src/assuredworkloads/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/assuredworkloads/hooks/preact-query.ts' },
  'solid-query': { output: './src/assuredworkloads/hooks/solid-query.ts' },
  'vue-query': { output: './src/assuredworkloads/hooks/vue-query.ts' },
  'svelte-query': { output: './src/assuredworkloads/hooks/svelte-query.ts' },
  'angular-query': { output: './src/assuredworkloads/hooks/angular-query.ts' },
  docs: {
    output: './src/assuredworkloads/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
