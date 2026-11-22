import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/clouddebugger/v2/openapi.yaml',
  output: './src/clouddebugger/routes.ts',
  template: {},
  type: { output: './src/clouddebugger/types.ts' },
  client: { output: './src/clouddebugger/client.ts', baseUrl: '/' },
  rpc: { output: './src/clouddebugger/rpc.ts', parseResponse: true },
  swr: { output: './src/clouddebugger/hooks/swr.ts' },
  'tanstack-query': { output: './src/clouddebugger/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/clouddebugger/hooks/preact-query.ts' },
  'solid-query': { output: './src/clouddebugger/hooks/solid-query.ts' },
  'vue-query': { output: './src/clouddebugger/hooks/vue-query.ts' },
  'svelte-query': { output: './src/clouddebugger/hooks/svelte-query.ts' },
  'angular-query': { output: './src/clouddebugger/hooks/angular-query.ts' },
  docs: {
    output: './src/clouddebugger/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
