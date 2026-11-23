import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/libraryagent/v1/openapi.yaml',
  output: './src/libraryagent/routes.ts',
  template: {},
  type: { output: './src/libraryagent/types.ts' },
  client: { output: './src/libraryagent/client.ts', baseUrl: '/' },
  rpc: { output: './src/libraryagent/rpc.ts', parseResponse: true },
  swr: { output: './src/libraryagent/hooks/swr.ts' },
  'tanstack-query': { output: './src/libraryagent/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/libraryagent/hooks/preact-query.ts' },
  'solid-query': { output: './src/libraryagent/hooks/solid-query.ts' },
  'vue-query': { output: './src/libraryagent/hooks/vue-query.ts' },
  'svelte-query': { output: './src/libraryagent/hooks/svelte-query.ts' },
  'angular-query': { output: './src/libraryagent/hooks/angular-query.ts' },
  docs: {
    output: './src/libraryagent/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
