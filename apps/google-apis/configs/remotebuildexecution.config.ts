import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/remotebuildexecution/v1alpha/openapi.yaml',
  output: './src/remotebuildexecution/routes.ts',
  template: {},
  type: { output: './src/remotebuildexecution/types.ts' },
  client: { output: './src/remotebuildexecution/client.ts', baseUrl: '/' },
  rpc: { output: './src/remotebuildexecution/rpc.ts', parseResponse: true },
  swr: { output: './src/remotebuildexecution/hooks/swr.ts' },
  'tanstack-query': { output: './src/remotebuildexecution/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/remotebuildexecution/hooks/preact-query.ts' },
  'solid-query': { output: './src/remotebuildexecution/hooks/solid-query.ts' },
  'vue-query': { output: './src/remotebuildexecution/hooks/vue-query.ts' },
  'svelte-query': { output: './src/remotebuildexecution/hooks/svelte-query.ts' },
  'angular-query': { output: './src/remotebuildexecution/hooks/angular-query.ts' },
  docs: {
    output: './src/remotebuildexecution/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
