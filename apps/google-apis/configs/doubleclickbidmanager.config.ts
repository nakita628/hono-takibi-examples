import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/doubleclickbidmanager/v1.1/openapi.yaml',
  output: './src/doubleclickbidmanager/routes.ts',
  template: {},
  type: { output: './src/doubleclickbidmanager/types.ts' },
  client: { output: './src/doubleclickbidmanager/client.ts', baseUrl: '/' },
  rpc: { output: './src/doubleclickbidmanager/rpc.ts', parseResponse: true },
  swr: { output: './src/doubleclickbidmanager/hooks/swr.ts' },
  'tanstack-query': { output: './src/doubleclickbidmanager/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/doubleclickbidmanager/hooks/preact-query.ts' },
  'solid-query': { output: './src/doubleclickbidmanager/hooks/solid-query.ts' },
  'vue-query': { output: './src/doubleclickbidmanager/hooks/vue-query.ts' },
  'svelte-query': { output: './src/doubleclickbidmanager/hooks/svelte-query.ts' },
  'angular-query': { output: './src/doubleclickbidmanager/hooks/angular-query.ts' },
  docs: {
    output: './src/doubleclickbidmanager/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
